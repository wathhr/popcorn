#!/bin/usr/env deno

import { join, relative } from 'std/path/mod.ts';
import { exists, ensureDirSync } from 'std/fs/mod.ts';
import { parseArgs } from 'std/cli/mod.ts';
import { deepMerge } from 'std/collections/mod.ts';
import * as esbuild from 'esbuild';
import { DevServer } from './devserver.mts';
import pkg from '../package.json' with { type: 'json' };

const __dirname = import.meta.dirname!;
const root = join(__dirname, '..');
const src = join(root, 'src');

const { dev, types: initTypes, watch, _ } = parseArgs(Deno.args, {
  boolean: ['watch', 'dev'],
  string: ['types'],
  collect: ['types'],
  alias: {
    d: 'dev',
    t: 'types',
    w: 'watch',
  },
  default: {
    dev: Deno.env.get('NODE_ENV') === 'development',
    watch: false,
  },
});

const types = [...initTypes, ..._.filter(t => typeof t === 'string')] as string[];
if (types.length === 0) types.push('all');

const validTypes = [];
for await (const item of Deno.readDir(src)) {
  if (await exists(join(src, item.name, 'esbuild.config.mts'))) validTypes.push(item.name);
}

switch (types[0]) {
  case 'all':
    types.length = 0;
    types.push(...validTypes);
    break;
  case 'kernel':
    types.length = 0;
    types.push('main', 'preload', 'renderer');
    break;
}

const devServer = dev ? new DevServer() : undefined;

const builds: esbuild.BuildOptions[] = [];
for (const type of types) {
  const config = await import(`../src/${type}/esbuild.config.mts`) as {
    default: esbuild.BuildOptions | esbuild.BuildOptions[],
    independent?: boolean,
  };
  const typeOptions = Array.isArray(config.default) ? config.default : [config.default];

  for (const typeOption of typeOptions) {
    if (!typeOption) continue;
    if (!validTypes.includes(type)) {
      console.warn(`"${type}" is an invalid type, valid types are: ${validTypes.join(', ')}. Skipping...`);
      continue;
    }

    // @ts-expect-error just don't look at this, i know it's painful to look at but it works fine
    typeOption.entryPoints = ((e) => {
      const relJoin = (...path: string[]) => relative(Deno.cwd(), join(...path));

      switch (true) {
        case Array.isArray(e):
          return e.map((entry) => {
            if (typeof entry === 'string') return relJoin(src, type, entry);
            else return {
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
    })(typeOption.entryPoints);

    const baseOptions: esbuild.BuildOptions = {
      bundle: true,
      minify: !dev,
      minifySyntax: !dev,
      minifyIdentifiers: !dev,
      write: false,
      outdir: typeOption.outdir
        ? join(root, 'dist', config.independent ? '' : typeOption.outdir)
        : join(root, 'dist', config.independent ? '' : type),
      sourcemap: dev ? 'inline' : false,
      define: {
        NODE_ENV: dev ? '"development"' : '"production"',
        DEBUG: `${dev}`,
        pkg: `${JSON.stringify(pkg)}`,
      },
      pure: ['console.debug'],
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
      ],
      color: true,
      logLevel: 'info',
    };

    builds.push(deepMerge(typeOption as { [key: string]: unknown; }, baseOptions as { [key: string]: unknown; })); // hatred
  }
}

if (watch) await Promise.all(builds.map((context) => esbuild.context(context).then((c) => c.watch())));
else for (const context of builds) {
  // TODO: Use `ctx.rebuild` instead of this for more consistent logging
  await esbuild.build(context);
}

Deno.addSignalListener('SIGINT', () => {
  console.log('Stopping...');
  // builds.forEach(async (build) => {
  //   if ('dispose' in build) await build.dispose();
  // });

  devServer?.stop?.();
  Deno.exit();
});
