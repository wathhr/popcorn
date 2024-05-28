#!/bin/usr/env false

import * as esbuild from 'esbuild';
import { deepMerge } from 'std/collections/mod.ts';
import { ensureDir, exists } from 'std/fs/mod.ts';
import { join, relative } from 'std/path/mod.ts';
import pkg from '#pkg' with { type: 'json' };
import { DevServer } from '#build/devserver.mts';
import { customLogs } from '#build/plugins/index.mts';

if (!import.meta.dirname) throw new Error('This script must be run locally');

const root = join(import.meta.dirname, '../..');
const src = join(root, 'src');

type MaybeArray<T> = T | T[];

export type DefaultExport = MaybeArray<{
  customOptions?: Partial<{
    independent: boolean,
  }>,
} & Exclude<
  esbuild.BuildOptions,
  'minify' |
  'minifyIdentifiers' |
  'minifySyntax' |
  'write' |
  'sourcemap' |
  'color' |
  'logLevel'
>>;

export type ModuleExport = Partial<{
  default: DefaultExport,
}>;

export type Options = Partial<{
  'dev': boolean,
  'watch': boolean,
  'original-logs': boolean,
  'types': string[],
  'executables': string[],
  '_': (string | number)[],
  [key: string]: unknown,
}>;

export const validTypes: string[] = [];
for await (const item of Deno.readDir(src)) {
  if (item.name.startsWith('#') || !await exists(join(src, item.name, 'esbuild.config.mts'))) continue;
  validTypes.push(item.name);
}

export async function processConfigFile(type: string, opts: Options = {}, devServer?: DevServer) {
  if (!validTypes.includes(type)) throw new Error(`"${type}" is an invalid type, valid types are: ${validTypes.join(', ')}. Skipping...`);

  const { dev, watch } = opts;
  const killDevServer = devServer === undefined;
  devServer ??= watch ? new DevServer() : undefined;

  const urlSearchParams = new URLSearchParams(Object.fromEntries(Object.entries(opts)
    .map(([name, value]) => [name, typeof value === 'string' ? value : value?.toString()])
    .filter(([, value]) => value !== undefined),
  ));

  const config: ModuleExport = await import(`file://${join(src, type, 'esbuild.config.mts')}?${urlSearchParams.toString()}`);

  if (!config.default) throw new Error(`"${type}" does not export an esbuild config. Skipping...`);

  const typeOptionsArray = Array.isArray(config.default) ? config.default : [config.default];

  const contexts: esbuild.BuildContext[] = [];
  for (let i = 0; i < typeOptionsArray.length; i++) {
    const typeOptions = typeOptionsArray[i];

    // @ts-expect-error this works fine
    typeOptions.entryPoints = ((e) => {
      const relJoin = (...path: string[]) => relative(Deno.cwd(), join(...path));

      switch (true) {
        case Array.isArray(e):
          return e.map((entry) => {
            if (typeof entry === 'string') return relJoin(src, type, entry);
            return {
              in: relJoin(src, type, entry.in),
              out: entry.out,
            };
          });

        case typeof e === 'object':
          return Object.fromEntries(
            Object.entries(e).map(([key, value]) => [
              relJoin(src, type, key),
              relJoin(src, type, value),
            ]),
          );

        default:
          return [relJoin(src, type, 'index.ts')];
      }
    })(typeOptions.entryPoints);

    typeOptions.outdir &&= join(root, 'dist', typeOptions.customOptions?.independent ? '' : typeOptions.outdir);
    typeOptions.outdir ??= join(root, 'dist', typeOptions.customOptions?.independent ? '' : type);

    const baseOptions: esbuild.BuildOptions = {
      bundle: true,
      minify: !dev,
      minifyIdentifiers: !dev,
      minifySyntax: !dev,
      minifyWhitespace: !dev,
      write: false,
      metafile: true,
      sourcemap: dev ? 'inline' : false,
      define: {
        NODE_ENV: dev ? '"development"' : '"production"',
        DEBUG: `${dev}`,
        pkg: `${JSON.stringify(pkg)}`,
      },
      plugins: [
        {
          name: 'Write and announce file outputs',
          setup(build) {
            build.onEnd(async (result) => {
              for (const file of result.outputFiles!) {
                const dir = join(file.path, '..');
                if (!await exists(dir)) await ensureDir(dir);
                await Deno.writeFile(file.path, file.contents);

                if (!devServer) return;

                const relFilePath = relative(typeOptions.outdir!, file.path).replace(/\\/g, '/');
                const name = relFilePath.split('/')[0].replace(/\.\w+$/, '');

                devServer.send(name, 'reload', {
                  content: file.text,
                  file: relFilePath,
                });
              }
            });
          },
        },
        customLogs(urlSearchParams),
        ...typeOptions.plugins ?? [],
      ],
      color: true,
      logLevel: 'info',
    };

    // The plugin 'Write and announce file outputs' needs to run before every other plugin but every other option should be overwritten
    delete typeOptions.plugins;
    delete typeOptions.customOptions;

    // @ts-expect-error no idea why this errors
    const processedTypeOptions: esbuild.BuildOptions = deepMerge(baseOptions, typeOptions);
    contexts.push(await esbuild.context(processedTypeOptions));
  }

  if (killDevServer) devServer?.stop?.();
  return contexts;
}

export async function build(type: string, opts: Options = {}) {
  const contexts = await processConfigFile(type, opts);
  for (const context of contexts) {
    await context.rebuild();
    await context.dispose();
  }
}
