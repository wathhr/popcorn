#!/bin/usr/env false
// @ts-check

import fs from 'fs/promises';
import { dirname, extname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const version = process.argv.includes('--mv2') ? 'v2' : 'v3';

/** @type {import('esbuild').BuildOptions} */
export default {
  entryPoints: [
    './background/index.ts',
    './content/index.ts',
    './popup/index.ts',

    // extras
    './manifest.json', // trolley
    './popup/index.html',
  ],
  platform: 'browser',
  format: 'iife',
  define: {
    isBrowser: 'true',
  },
  plugins: [
    clearOutputDir(),
    customFiles(),
  ],
};

/** @returns {import('esbuild').Plugin} */
function clearOutputDir() {
  return {
    name: 'Clear outDir',
    setup(build) {
      build.onStart(async () => {
        const out = /** @type {string} */ (build.initialOptions.outdir);
        await fs.rm(out, { force: true, recursive: true });
        await fs.mkdir(out, { recursive: true });
      });
    },
  };
}

/**
 * @returns {import('esbuild').Plugin}
 */
function customFiles() {
  return {
    name: 'Custom files',
    setup(build) {
      const regex = /\.ts(?=[\s"',]|$)/g;

      let i = 0;
      build.onLoad({ filter: /manifest\.json/ }, async () => {
        const manifestFile = join(__dirname, './manifests.mjs');
        /** @type {import('./manifests.mjs')} */
        const { manifest } = await import('file://' + manifestFile + `?${i++}`); // my fucking god what i have to do for hot reloading

        return {
          contents: JSON.stringify(manifest[version], null, 2).replace(regex, '.js'),
          loader: 'copy',
          watchFiles: [manifestFile],
        };
      });

      const loaders = ['.js', '.mjs', '.cjs', '.jsx', '.ts', '.mts', '.cts', 'tsx', ...Object.keys(build.initialOptions.loader ?? {})];
      build.onLoad({ filter: /.*/ }, async ({ path }) => {
        if (loaders.includes(extname(path))) return;

        return {
          contents: (await fs.readFile(path, 'utf-8')).replace(regex, '.js'),
          loader: 'copy',
          watchFiles: [path],
        };
      });
    },
  };
}
