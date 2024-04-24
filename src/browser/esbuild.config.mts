#!/bin/usr/env false

import { join } from 'std/path/join.ts';
import { clearOutdir, corejs, customFiles } from '#build/plugins/index.mts';
import pkg from '#pkg' with { type: 'json' };

interface Opts {
  version: `v${2 | 3}`,
}

const versions: Opts['version'][] = [];
if (Deno.args.includes('--mv2')) versions.push('v2');
if (Deno.args.includes('--mv3')) versions.push('v3');
if (versions.length === 0) versions.push('v2', 'v3');

// TODO: Remove building redundancy, I can copy everything over other than the manifest.json
function getBuildOpts(opts: Opts): import('esbuild').BuildOptions {
  const regex = /\.ts(?=[\s"',]|$)/g;

  return {
    entryPoints: [
      './background/index.ts',
      './content/index.ts',
      './popup/index.ts',

      // extras
      './manifest.json',
      './popup/index.html',
    ],
    outdir: `browser-M${opts.version.toUpperCase()}`,
    platform: 'browser',
    format: 'iife',
    plugins: [
      clearOutdir,
      corejs(pkg.browserslist.production),
      {
        name: 'Manifest version',
        setup(build) {
          build.onLoad({ filter: /manifest\.json/ }, async () => {
            const manifestFile = join(import.meta.dirname!, './manifests.mts');
            const { manifest } = await import(`./manifests.mts?${Date.now()}`);

            return {
              contents: JSON.stringify(manifest[opts.version], null, 2).replace(regex, '.js'),
              loader: 'copy',
              watchFiles: [manifestFile],
            };
          });
        },
      },
      customFiles({ regex, replace: '.js' }),
    ],
  };
}

export default versions.map(version => getBuildOpts({ version })) satisfies import('#build').DefaultExport;
