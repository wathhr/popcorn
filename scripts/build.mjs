#!/bin/usr/env node
// @ts-check

import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { readdir } from 'node:fs/promises';
import * as esbuild from 'esbuild';
import deepmerge from 'deepmerge';
import { existsSync } from 'node:fs';

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

const validTypes = (await readdir(src)).filter((item) => existsSync(join(src, item, 'index.ts')));
if (types.includes('all')) void (types.length = 0) ?? types.push(...validTypes); // trolley
// in-place filter
else types.splice(0, types.length, ...types.filter((type) => {
  const result = validTypes.includes(type);
  if (!result) console.warn(`"${type}" is an invalid type, valid types are: ${validTypes.join(', ')}`);
  return result;
}));

if (!types) {
  console.warn('No types specified');
  process.exit(1);
}

/** @type {esbuild.BuildContext[]} */
const builds = [];
for (const type of types) {
  /** @type {esbuild.BuildOptions} */
  const typeOptions = (await import(`../src/${type}/esbuild.config.mjs`).catch(() => ({ default: {} }))).default; // horrid
  delete typeOptions.entryPoints;

  /** @type {esbuild.BuildOptions} */
  const options = {
    entryPoints: [
      {
        in: join(root, `src/${type}/index.ts`),
        out: type,
      },
    ],
    bundle: true,
    minify,
    write: true,
    outdir: 'dist',
    sourcemap: minify ? false : 'inline',
    define: {
      'NODE_ENV': process.env.NODE_ENV === 'development' ? '"development"' : '"production"',
    },
    external: [
      'electron',
      join(root, 'config.json'),
    ],
    logLevel: 'info',
  };

  builds.push(await esbuild.context(deepmerge(options, typeOptions)));
}

if (watch) await Promise.all(builds.map(async (context) => context.watch()));
else for (const context of builds) {
  await context.rebuild();
  await context.dispose();
}

process.on('SIGINT', () => {
  console.log('Stopping...');
  builds.map(async (build) => await build.dispose());

  process.exit(0);
});
