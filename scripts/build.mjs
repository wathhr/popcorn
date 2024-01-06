#!/bin/usr/env node
// @ts-check

import { dirname, join } from 'node:path';
import { existsSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import * as esbuild from 'esbuild';
import deepmerge from 'deepmerge';

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
    minify = process.env.NODE_ENV === 'production',
    types = ['all'],
    watch = false,
  },
} = parseArgs({ options });

const validTypes = readdirSync(src).filter((item) => existsSync(join(src, item, 'esbuild.config.mjs')));
if (types.includes('all')) {
  types.length = 0;
  types.push(...validTypes);
} else types.splice(0, types.length, ...types.filter((type) => { // in-place filter
  const result = validTypes.includes(type);
  if (!result) console.warn(`"${type}" is an invalid type, valid types are: ${validTypes.join(', ')}`);
  return result;
}));

if (!types) {
  console.warn('No types specified');
  process.exit(1);
}

/** @type {esbuild.BuildOptions[]} */
const builds = [];
for (const type of types) {
  /** @type {esbuild.BuildOptions} */
  const typeOptions = (await import(`../src/${type}/esbuild.config.mjs`)).default;

  // @ts-expect-error just don't look at this, i know it's painful to look at but it works fine
  typeOptions.entryPoints = ((e) => {
    switch (true) {
      case Array.isArray(e): return e.map(
        /** @param {Exclude<esbuild.BuildOptions['entryPoints'], Record<string, string> | undefined>[number]} entry */
        (entry) => typeof entry === 'string' ? join(src, type, entry) : { in: join(src, type, entry.in), out: entry.out }
      );

      case typeof e === 'object': return Object.fromEntries(Object.entries(e).map(([key, value]) => [join(src, type, key), join(src, type, value)]));
      default: return [join(src, type, 'index.ts')];
    }
  })(typeOptions.entryPoints);

  /** @type {esbuild.BuildOptions} */
  const options = {
    bundle: true,
    minify,
    write: true,
    outdir: join(root, 'dist', type),
    sourcemap: minify ? false : 'inline',
    define: {
      NODE_ENV: process.env.NODE_ENV === 'development' ? '"development"' : '"production"',
      DEBUG: `"${process.env.NODE_ENV === 'development'}"`,
    },
    logLevel: 'info',
  };

  builds.push(deepmerge(typeOptions, options));
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