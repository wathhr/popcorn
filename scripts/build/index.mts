#!/bin/usr/env deno

import * as esbuild from 'esbuild';
import { deepMerge } from 'std/collections/mod.ts';
import { ensureDirSync, exists } from 'std/fs/mod.ts';
import { join, relative } from 'std/path/mod.ts';
import * as c from 'std/fmt/colors.ts';
import pkg from '../../package.json' with { type: 'json' };
import { DevServer } from '../devserver.mts';
import { args } from './args.mts';
import { customLogs } from './plugins.mts';

const __dirname = import.meta.dirname!;
const root = join(__dirname, '../..');
const src = join(root, 'src');

const { dev, types: initTypes, watch, _ } = args;

export type DefaultExport = esbuild.BuildOptions | esbuild.BuildOptions[];

const types = [...initTypes, ..._.filter(t => typeof t === 'string') as string[]];
if (types.length === 0) types.push('all');

const validTypes = [];
for await (const item of Deno.readDir(src)) {
  if (item.name.startsWith('#') || !await exists(join(src, item.name, 'esbuild.config.mts'))) continue;
  validTypes.push(item.name);
}

switch (types[0]) {
  case 'all': {
    types.length = 0;
    types.push(...validTypes);
  } break;
}

const devServer = dev && watch ? new DevServer() : undefined;

const builds: esbuild.BuildContext[] = [];
for (const type of types) {
  if (!validTypes.includes(type)) {
    console.warn(`"${type}" is an invalid type, valid types are: ${validTypes.join(', ')}. Skipping...`);
    continue;
  }

  const config = await import(`../../src/${type}/esbuild.config.mts`) as {
    default?: DefaultExport,
    independent?: boolean,
  };

  const typeOptionsArray = Array.isArray(config.default) ? config.default : [config.default];

  for (const typeOptions of typeOptionsArray) {
    if (!typeOptions) continue;

    // @ts-expect-error just don't look at this, i know it's painful to look at but it works fine
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
        customLogs,
        ...typeOptions.plugins ?? [],
      ],
      color: true,
      logLevel: 'info',
    };

    // The plugin 'Write and announce file outputs' needs to run before every other plugin but every other option should be overwritten
    delete typeOptions.plugins;

    // @ts-expect-error no idea why this errors
    const opts: esbuild.BuildOptions = deepMerge(typeOptions, baseOptions);
    builds.push(await esbuild.context(opts));
  }
}

const startTime = Date.now();
for (const context of builds) {
  if (watch) context.watch();
  else {
    await context.rebuild();
    await context.dispose();
  }
}

if (!watch && builds.length > 1) {
  console.log(); // new line
  console.log(c.brightMagenta(`Total build time: ${Date.now() - startTime}ms`));
}

Deno.addSignalListener('SIGINT', () => {
  console.log('Stopping...');
  builds.forEach(async build => await build.dispose());

  devServer?.stop?.();
  Deno.exit();
});
