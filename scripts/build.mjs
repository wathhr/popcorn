#!/bin/usr/env node
// @ts-check

import { createRequire } from 'node:module';
import { dirname, join, relative } from 'node:path';
import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import * as esbuild from 'esbuild';
import { merge } from 'ts-deepmerge';
import { DevServer } from './devserver.mjs';

const require = createRequire(import.meta.url);
const pkg = require('../package.json');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = join(__dirname, '..');
const src = join(root, 'src');

/** @type {import('node:util').ParseArgsConfig['options']} */
const options = /** @type {const} */ ({
  dev: {
    type: 'boolean',
    short: 'd',
  },
  types: {
    type: 'string',
    multiple: true,
    short: 't',
  },
  watch: {
    type: 'boolean',
    short: 'w',
  },
});

/** @type {{ values: { dev?: boolean, types?: string[], watch?: boolean } }} */
const {
  values: {
    dev = process.env.NODE_ENV === 'development',
    types = ['all'],
    watch = false,
  },
} = parseArgs({ options, strict: false });

if (types.length === 0) throw new Error('No types specified');

const validTypes = readdirSync(src).filter((item) => existsSync(join(src, item, 'esbuild.config.mjs')));
// TODO: Find a more elegant way to do this
if (types.includes('all')) {
  types.length = 0;
  types.push(...validTypes);
} else if (types.includes('kernel')) {
  types.length = 0;
  types.push('main', 'preload', 'renderer');
}

const devServer = dev ? new DevServer() : undefined;

/** @type {esbuild.BuildOptions[]} */
const builds = [];
for (const type of types) {
  /** @type {{ default: esbuild.BuildOptions | esbuild.BuildOptions[] }} */
  const config = await import(`../src/${type}/esbuild.config.mjs`);
  const typeOptions = Array.isArray(config.default) ? config.default : [config.default];

  for (const i in typeOptions) {
    const typeOption = typeOptions[i];
    if (!typeOption) continue;
    if (!validTypes.includes(type)) {
      console.warn(`"${type}" is an invalid type, valid types are: ${validTypes.join(', ')}. Skipping...`);
      continue;
    }

    // @ts-expect-error just don't look at this, i know it's painful to look at but it works fine
    typeOption.entryPoints = ((e) => {
      /** @type {import('path').join} */
      const relJoin = (...path) => relative(process.cwd(), join(...path));

      switch (true) {
        case Array.isArray(e): return e.map(
          /** @param {Exclude<esbuild.BuildOptions['entryPoints'], Record<string, string> | undefined>[number]} entry */
          (entry) => {
            if (typeof entry === 'string') return relJoin(src, type, entry);
            else return {
              in: relJoin(src, type, entry.in),
              out: entry.out,
            };
          },
        );

        case typeof e === 'object': return Object.fromEntries(
          Object.entries(e).map(([key, value]) => [
            relJoin(src, type, key),
            relJoin(src, type, value),
          ]),
        );

        default: return [relJoin(src, type, 'index.ts')];
      }
    })(typeOption.entryPoints);

    /** @type {esbuild.BuildOptions} */
    const baseOptions = {
      bundle: true,
      minify: !dev,
      write: false,
      outdir: join(root, 'dist', type),
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
              result.outputFiles?.forEach(async (file) => {
                const dir = join(file.path, '..');
                if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
                writeFileSync(file.path, file.contents);

                if (devServer?.connected) {
                  const name = relative(join(root, 'dist'), file.path).replace(/\\/g, '/');

                  devServer.send(name, {
                    content: file.text,
                  });
                }
              });
            });
          }
        }
      ],
      color: true,
      logLevel: 'info',
    };

    builds.push(merge(typeOption, baseOptions));
  }
}

async function runAll(watch = false) {
  if (watch) await Promise.all(builds.map((context) => esbuild.context(context).then(c => c.watch())));
  else for (const context of builds) {
    // TODO: Use `ctx.rebuild` instead of this for more consistent logging
    await esbuild.build(context);
  }
}

await runAll(watch);

if (watch) {
  const readline = await import('node:readline');
  readline.emitKeypressEvents(process.stdin);
  if (process.stdin.isTTY) process.stdin.setRawMode(true);
  console.log('Press r to rebuild, ctrl+c to stop');

  process.stdin.on('keypress', async (_, key) => {
    if (!key) return;

    if (key.name === 'r') await runAll();
    else if (key.ctrl && key.name === 'c') {
      console.log('Stopping...');
      builds.forEach(async (build) => {
        if ('dispose' in build) await /** @type {esbuild.BuildContext} */ (build).dispose();
      });

      devServer?.stop?.();

      process.exit(0);
    }
  });
}
