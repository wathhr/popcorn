#!/bin/usr/env deno

import * as esbuild from 'esbuild';
import { parseArgs } from 'std/cli/mod.ts';
import { deepMerge } from 'std/collections/mod.ts';
import { ensureDirSync, exists } from 'std/fs/mod.ts';
import { basename, join, relative } from 'std/path/mod.ts';
import * as c from 'std/fmt/colors.ts';
import pkg from '../package.json' with { type: 'json' };
import { DevServer } from './devserver.mts';

const __dirname = import.meta.dirname!;
const root = join(__dirname, '..');
const src = join(root, 'src');

const args = parseArgs(Deno.args, {
  boolean: ['watch', 'dev', 'original-logs'],
  string: ['types'],
  collect: ['types'],
  alias: {
    d: 'dev',
    t: 'types',
    w: 'watch',
    o: 'original-logs',
  },
  default: {
    dev: Deno.env.get('NODE_ENV') === 'development',
    watch: false,
  },
});
const { dev, types: initTypes, watch, _ } = args;

const types = [...initTypes, ..._.filter(t => typeof t === 'string') as string[]];
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

const builds: esbuild.BuildContext[] = [];
for (const type of types) {
  const config = await import(`../src/${type}/esbuild.config.mts`) as {
    default?: esbuild.BuildOptions | esbuild.BuildOptions[],
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
        {
          name: 'Custom logging',
          setup(build) {
            if (args['original-logs']) return;
            let start = Date.now();
            build.onStart(() => void (start = Date.now()));

            build.initialOptions.logLevel = 'error';

            if (watch) {
              build.onEnd((result) => {
                const warnings = result.warnings.length;
                if (warnings > 0) console.warn(`${warnings} warning${warnings > 1 ? 's' : ''}`);
                console.log('[watch] build finished, watching for changes...');
              });

              return;
            }

            build.onEnd((result) => {
              if (!result.outputFiles) return;

              const warnings = result.warnings.length;
              if (warnings > 0) console.warn(`${warnings} warning${warnings > 1 ? 's' : ''}`);

              console.log(); // new line
              const margin = '  ';

              const longestName = relative(
                Deno.cwd(),
                result.outputFiles.reduce((a, b) => a.path.length > b.path.length ? a : b, { path: '' }).path!,
              );

              const maxFiles = 8;
              for (const file of result.outputFiles.slice(0, maxFiles)) {
                const sizeString = formatSize(file.contents.byteLength);
                const relPath = relative(Deno.cwd(), file.path);

                const spacer = Math.max(
                  longestName.length - relPath.length + 6 - sizeString.replace(/[A-Za-z]/g, '').length,
                  1,
                );

                console.log(
                  margin
                  + relPath.replace(basename(file.path), '')
                  + c.brightWhite(basename(file.path))
                  + c.cyan(' '.repeat(spacer) + sizeString),
                );

                // console.log(
                //   `${margin}${relPath.replace(basename(file.path), '')}%c${basename(file.path)}%c${' '.repeat(spacer)}${sizeString}`,
                //   'color: white; font-weight: bold', // This is not the same as c.brightWhite,
                //   'color: cyan',
                // );
              }

              const unshownAmount = result.outputFiles.length - maxFiles;
              if (unshownAmount > 0)
                console.log(margin, `...and ${unshownAmount} more output file${unshownAmount > 1 ? 's' : ''}...`);

              const elapsed = Date.now() - start;
              console.log();
              console.log(`%c${Deno.build.os === 'windows' ? '' : '⚡ '}Done in ${elapsed}ms`, 'color: green');
            });

            function formatSize(size: number) {
              if (size < 1024) return `${size}b`;
              if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)}kb`;
              return `${(size / 1024 / 1024).toFixed(1)}mb`;
            }
          },
        },
        ...typeOption.plugins ?? [],
      ],
      color: true,
      logLevel: 'info',
    };

    // The plugin 'Write and announce file outputs' needs to run before every other plugin but every other option should be overwritten
    delete typeOption.plugins;

    // @ts-expect-error no idea why this errors
    const opts: esbuild.BuildOptions = deepMerge(typeOption, baseOptions);
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

if (!watch && !args['original-logs'] && builds.length > 1) {
  console.log();
  console.log(c.brightMagenta(`Total build time: ${Date.now() - startTime}ms`));
}

Deno.addSignalListener('SIGINT', () => {
  console.log('Stopping...');
  builds.forEach(async build => await build.dispose());

  devServer?.stop?.();
  Deno.exit();
});
