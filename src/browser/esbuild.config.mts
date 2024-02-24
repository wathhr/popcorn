#!/bin/usr/env false

import { exists } from 'std/fs/exists.ts';
import { extname } from 'std/path/extname.ts';
import { join } from 'std/path/join.ts';

const __dirname = import.meta.dirname!;

const version = Deno.args.includes('--mv2') ? 'v2' : 'v3';

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
    ...(await import('../renderer/esbuild.config.mts')).default.define,
    isBrowser: 'true',
  },
  plugins: [
    clearOutputDir(),
    customFiles(),
  ],
} satisfies import('esbuild').BuildOptions;

function clearOutputDir(): import('esbuild').Plugin {
  return {
    name: 'Clear outDir',
    setup(build) {
      build.onStart(async () => {
        const out = build.initialOptions.outdir!;
        if (await exists(out)) await Deno.remove(out, { recursive: true });
        await Deno.mkdir(out, { recursive: true });
      });
    },
  };
}

function customFiles(): import('esbuild').Plugin {
  return {
    name: 'Custom files',
    setup(build) {
      const regex = /\.ts(?=[\s"',]|$)/g;

      build.onLoad({ filter: /manifest\.json/ }, async () => {
        const manifestFile = join(__dirname, './manifests.mts');
        const { manifest } = await import('./manifests.mts');

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
          contents: (await Deno.readTextFile(path)).replace(regex, '.js'),
          loader: 'copy',
          watchFiles: [path],
        };
      });
    },
  };
}
