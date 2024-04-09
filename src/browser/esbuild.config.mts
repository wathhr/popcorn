#!/bin/usr/env false

import { exists } from 'std/fs/exists.ts';
import { extname } from 'std/path/extname.ts';
import { join } from 'std/path/join.ts';

interface Opts {
  version: `v${2 | 3}`,
}

const versions: Opts['version'][] = [];
if (Deno.args.includes('--mv2')) versions.push('v2');
if (Deno.args.includes('--mv3')) versions.push('v3');
if (versions.length === 0) versions.push('v2', 'v3');

// TODO: Remove building redundancy, I can copy everything over other than the manifest.json
function getBuildOpts(opts: Opts): import('esbuild').BuildOptions {
  return {
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
    plugins: [
      clearOutputDir(),
      customFiles(opts),
    ],
  };
}

export default versions.map(version => getBuildOpts({ version })) satisfies import('#build').DefaultExport;

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
        const manifestFile = join(import.meta.dirname!, './manifests.mts');
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
