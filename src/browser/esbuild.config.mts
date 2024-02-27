#!/bin/usr/env false

import { exists } from 'std/fs/exists.ts';
import { extname } from 'std/path/extname.ts';
import { join } from 'std/path/join.ts';

const __dirname = import.meta.dirname!;

const versions: `v${2|3}`[] = Deno.args.includes('--mv2') ? ['v2'] : Deno.args.includes('--mv3') ? ['v3'] : ['v2', 'v3'];

type Opts = {
  version: `v${2|3}`,
};

// TODO: Remove building redundancy, I can copy everything over other than the manifest.json
const getBuildOpts = async (opts: Opts) => ({
  entryPoints: [
    './background/index.ts',
    './content/index.ts',
    './popup/index.ts',

    // extras
    './manifest.json', // trolley
    './popup/index.html',
  ],
  outdir: `browser-M${opts.version.toUpperCase()}`,
  platform: 'browser',
  format: 'iife',
  define: {
    ...(await import('../electron/renderer/esbuild.config.mts')).default.define,
    isBrowser: 'true',
  },
  plugins: [
    clearOutputDir(),
    customFiles(opts),
  ],
} satisfies import('esbuild').BuildOptions);

export default await Promise.all(versions.map(async (version) => await getBuildOpts({ version }))) satisfies import('esbuild').BuildOptions[];

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

function customFiles(opts: Opts): import('esbuild').Plugin {
  return {
    name: 'Custom files',
    setup(build) {
      const regex = /\.ts(?=[\s"',]|$)/g;

      build.onLoad({ filter: /manifest\.json/ }, async () => {
        const manifestFile = join(__dirname, './manifests.mts');
        const { manifest } = await import(`./manifests.mts?${Date.now()}`);

        return {
          contents: JSON.stringify(manifest[opts.version], null, 2).replace(regex, '.js'),
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
