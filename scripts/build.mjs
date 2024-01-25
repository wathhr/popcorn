#!/bin/usr/env node
// @ts-check

import { createRequire } from 'node:module';
import { dirname, join, relative } from 'node:path';
import { existsSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import * as esbuild from 'esbuild';
import deepmerge from 'deepmerge';

const require = createRequire(import.meta.url);
const pkg = require('../package.json');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = join(__dirname, '..');
const src = join(root, 'src');

/** @type {import('node:util').ParseArgsConfig['options']} */
const options = {
  minify: {
    type: 'boolean',
    short: 'm',
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
};

/** @type {{ values: { minify?: boolean, types?: string[], watch?: boolean } }} */
const {
  values: {
    minify = process.env.NODE_ENV !== 'development',
    types = ['all'],
    watch = false,
  },
} = parseArgs({ options, strict: false });

const validTypes = readdirSync(src).filter((item) => existsSync(join(src, item, 'esbuild.config.mjs')));
if (types.includes('all')) {
  types.length = 0;
  types.push(...validTypes);
}

if (types.length === 0) throw new Error('No types specified');

const dependencyMemo = new Set();

/** @type {esbuild.BuildOptions[]} */
const builds = [];
while (types.length > 0) {
  const type = /** @type {string} */ (types.shift());

  if (!validTypes.includes(type)) {
    console.warn(`"${type}" is an invalid type, valid types are: ${validTypes.join(', ')}. Skipping...`);
    continue;
  }

  /** @type {{ default: esbuild.BuildOptions | esbuild.BuildOptions[], dependencies?: string[] }} */
  const config = await import(`../src/${type}/esbuild.config.mjs`);
  if (config.dependencies && !dependencyMemo.has(type)) {
    types.push(...config.dependencies, type);
    dependencyMemo.add(type);
    continue;
  }

  const typeOptions = Array.isArray(config.default) ? config.default : [config.default];


  for (const i in typeOptions) {
    const typeOption = typeOptions[i];

    // @ts-expect-error just don't look at this, i know it's painful to look at but it works fine
    typeOption.entryPoints = ((e) => {
      /** @type {import('path').join} */
      const relJoin = (...path) => relative(__dirname, join(...path));

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
      minify,
      write: true,
      outdir: join(root, 'dist', type),
      sourcemap: minify ? false : 'inline',
      define: {
        NODE_ENV: process.env.NODE_ENV === 'development' ? '"development"' : '"production"',
        DEBUG: `${process.env.NODE_ENV === 'development'}`,
        PKG: `${JSON.stringify(pkg)}`,
      },
      color: true,
      logLevel: 'info',
    };

    builds.push(deepmerge(typeOption, baseOptions));
  }
}

if (watch) await Promise.all(builds.map(async (context) => esbuild.context(context).then(c => c.watch())));
else for (const context of builds) {
  await esbuild.build(context);
}

process.on('SIGINT', () => {
  console.log('Stopping...');
  builds.map(async (build) => {
    if ('dispose' in build) await /** @type {esbuild.BuildContext} */ (build).dispose();
  });

  process.exit(0);
});
