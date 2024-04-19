#!/bin/usr/env false

import * as esbuild from 'esbuild';
import { deepMerge } from 'std/collections/mod.ts';
import { ensureDirSync, exists } from 'std/fs/mod.ts';
import { join, relative } from 'std/path/mod.ts';
import pkg from '../../package.json' with { type: 'json' };
import { DevServer } from '#build/devserver.mts';
import { customLogs } from '#build/plugins/custom-logs.mts';

const __dirname = import.meta.dirname!;
const root = join(__dirname, '../..');
const src = join(root, 'src');

export type DefaultExport = esbuild.BuildOptions | esbuild.BuildOptions[];
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

  const { dev } = opts;
  const killDevServer = devServer === undefined;
  devServer ??= dev ? new DevServer() : undefined;

  const urlSearchParams = new URLSearchParams(Object.fromEntries(Object.entries(opts)
    .map(([name, value]) => [name, typeof value === 'string' ? value : value?.toString()])
    .filter(([, value]) => value !== undefined),
  ));

  const config = await import(`file://${join(src, type, 'esbuild.config.mts')}?${urlSearchParams.toString()}`) as {
    default?: DefaultExport,
    independent?: boolean,
  };

  if (!config.default) throw new Error(`"${type}" does not export an esbuild config. Skipping...`);

  const typeOptionsArray = Array.isArray(config.default) ? config.default : [config.default];

  const contexts: esbuild.BuildContext[] = [];
  for (const typeOptions of typeOptionsArray) {
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

    const baseOptions: esbuild.BuildOptions = {
      bundle: true,
      minify: !dev,
      minifySyntax: !dev,
      minifyIdentifiers: !dev,
      write: false,
      outdir: typeOptions.outdir
        ? join(root, 'dist', config.independent ? '' : typeOptions.outdir)
        : join(root, 'dist', config.independent ? '' : type),
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
            build.onEnd((result) => {
              result.outputFiles?.forEach((file) => {
                const dir = join(file.path, '..');
                ensureDirSync(dir);
                Deno.writeFileSync(file.path, file.contents);

                if (!devServer) return;

                const relFilePath = relative(join(root, 'dist'), file.path).replace(/\\/g, '/');
                const name = relFilePath.split('/')[0];

                devServer.send(name, 'reload', {
                  content: file.text,
                  file: relFilePath,
                });
              });
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

    // @ts-expect-error no idea why this errors
    const processedTypeOptions: esbuild.BuildOptions = deepMerge(typeOptions, baseOptions);
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
