#!/bin/usr/env node
// @ts-check

import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import * as esbuild from 'esbuild';
import sveltePlugin from 'esbuild-svelte';
import preprocess from 'svelte-preprocess';

/** @type {import('node:util').ParseArgsConfig['options']} */
const options = {
  minify: { type: 'boolean' },
  types: { type: 'string' },
  watch: { type: 'boolean' },
};

/** @type {{ values: { minify?: boolean, types?: string, watch?: boolean } }} */
const {
  values: {
    minify = process.env.NODE_ENV === 'production',
    types = 'all',
    watch = false,
  },
} = parseArgs({ options });

/** @type {string[]} */
const actualTypes = [];

const validTypes = /** @type {const} */ (['main', 'preload', 'renderer']);
const typesArray = types.split(',');
for (const i in typesArray) {
  const type = typesArray[i];
  if (types === 'all') {
    actualTypes.push(...validTypes);
    break;
  }

  // @ts-expect-error `Argument of type 'string' is not assignable to parameter of type '"main" | "preload" | "renderer"'.ts(2345)` ????
  if (!validTypes.includes(type)) console.warn(`Invalid type: ${type}`);
  else actualTypes.push(type);
}

if (!actualTypes) {
  console.warn('No types specified');
  process.exit(1);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = join(__dirname, '..');

/** @type {esbuild.BuildOptions[]} */
const builds = [];
for (const type of actualTypes) {
  /** @type {esbuild.BuildOptions} */
  const options = {
    entryPoints: [
      {
        in: join(root, `src/${type}/index.ts`),
        out: type,
      },
    ],
    platform: type === 'renderer' ? 'browser' : 'node',
    format: type === 'renderer' ? 'esm' : 'cjs',
    bundle: true,
    minify,
    write: true,
    outdir: 'dist',
    sourcemap: minify ? false : 'inline',
    define: {
      'NODE_ENV': process.env.NODE_ENV ? '\'' + process.env.NODE_ENV + '\'' : 'production',
    },
    external: [
      'electron',
      join(root, 'config.json'),
    ],
    ...(type === 'renderer' && {
      plugins: [
        sveltePlugin({
          preprocess: preprocess(),
          compilerOptions: {
            cssHash: ({ css, hash }) => `PopcornUI-${hash(css)}`,
            discloseVersion: false
          },
        }),
      ],
    }),
    logLevel: 'info',
  };

  builds.push(options);
}

await Promise.all(builds.map(async (context) => {
  if (watch) return (await esbuild.context(context)).watch();
  return await esbuild.build(context);
}));

process.on('SIGINT', () => {
  console.log('Stopping...');
  // @ts-expect-error this is not typesafe but it really doesn't matter
  builds.map(async (build) => await build.dispose());

  process.exit(0);
});
