#!/bin/usr/env false

import { basename, join, relative } from 'std/path/mod.ts';
import * as c from 'std/fmt/colors.ts';
import type { Message } from 'esbuild';
import { getConfig, resultToCache } from '#build/utils/index.mts';

function formatSize(size: number) {
  if (size < 1024) return `${size}b`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)}kb`;
  return `${(size / 1024 / 1024).toFixed(1)}mb`;
}

export interface Cache {
  errors?: Message[],
  warnings?: Message[],
  files: {
    path: string,
    size: number,
  }[],
}

const groupCache = new Map<string, Cache[]>();

export function addToGroup(result: Cache, group?: string) {
  group ??= (() => {
    if (!import.meta.dirname) throw new Error('Please set a group manually');

    const configPath = getConfig();
    const group = join(relative(join(import.meta.dirname, '../../../src'), configPath), '..');

    return group;
  })();

  groupCache.set(group, (groupCache.get(group) || []).concat(result));
}

export function customLogs(params: URL['searchParams'], group?: string, print = true) {
  return {
    name: 'Custom logging',
    setup(build) {
      if (build.initialOptions.logLevel === 'silent') return;
      let start = Date.now();
      build.onStart(() => void (start = Date.now()));
      build.initialOptions.logLevel = 'error';

      if (params.get('watch') === 'true') return build.onEnd((result) => {
        const warnings = result.warnings.length;
        if (warnings > 0) console.warn(`${warnings} warning${warnings > 1 ? 's' : ''}`);
        console.log('[watch] build finished, watching for changes...');
      });

      const sizeWarningThreshold = 1024 * 1024;
      build.onEnd((result) => {
        if (!result.outputFiles) return;
        if (group) groupCache.set(group, (groupCache.get(group) ?? []).concat(resultToCache(result)));
        if (!print) return;

        const merged: Cache = !group
          ? resultToCache(result)
          : groupCache.get(group)!.reduce<Cache>((acc, result) => {
            acc.errors?.push(...result.errors ?? []);
            acc.warnings?.push(...result.warnings ?? []);
            acc.files?.push(...result.files?.map((file) => {
              return {
                ...file,
                path: file.path.replace(Deno.cwd(), '').replaceAll('\\', '/').replace(/^\//, ''),
              };
            }) ?? []);

            return acc;
          }, { errors: [], warnings: [], files: [] });

        const warnings = merged.warnings?.length ?? 0;
        if (warnings > 0) console.warn(`${warnings} warning${warnings > 1 ? 's' : ''}`);

        console.log(); // new line
        const margin = '  ';

        const longestName = relative(Deno.cwd(), merged.files.reduce((a, b) => a.path.length > b.path.length ? a : b, { path: '' }).path);

        const maxFiles = 8;
        for (const file of merged.files.slice(0, maxFiles)) {
          const sizeString = formatSize(file.size);
          const relPath = relative(Deno.cwd(), file.path);

          const spacer = Math.max(1, longestName.length - relPath.length + 6 - sizeString.replace(/[a-z]/gi, '').length);

          console.log(
            margin
            + relPath.replace(basename(file.path), '')
            + c.brightWhite(basename(file.path))
            + ' '.repeat(spacer)
            + (file.size >= sizeWarningThreshold
              ? c.red(`${sizeString}${Deno.build.os === 'windows' ? '' : ' ⚠️'}`)
              : c.cyan(sizeString)),
          );
        }

        const unshownAmount = merged.files.length - maxFiles;
        if (unshownAmount > 0) console.log(margin, `...and ${unshownAmount} more output file${unshownAmount > 1 ? 's' : ''}...`);

        if ((merged.errors?.length ?? 0) <= 0) {
          const elapsed = Date.now() - start;
          console.log(`\n%c${Deno.build.os === 'windows' ? '' : '⚡ '}Done in ${elapsed}ms`, 'color: green');
        }
      });
    },
  } satisfies import('esbuild').Plugin;
}
