#!/bin/usr/env false

import { join } from 'std/path/join.ts';
import { copy, exists } from 'std/fs/mod.ts';
import { clearOutdir, corejs, html } from '#build/plugins/index.mts';
import pkg from '#pkg' with { type: 'json' };

const versions: `v${2 | 3}`[] = [];
if (Deno.args.includes('--mv2')) versions.push('v2');
if (Deno.args.includes('--mv3')) versions.push('v3');
if (versions.length === 0) versions.push('v2', 'v3');

const views: string[] = [];
for await (const item of Deno.readDir(join(import.meta.dirname!, './views'))) {
  if (item.name.endsWith('.html')) views.push(join('./views', item.name));
}

export default [
  // First manifest file
  {
    entryPoints: ['./manifest.json'],
    outdir: `browser-M${versions[0].toUpperCase()}`,
    plugins: [
      clearOutdir,
      manifest(versions[0]),
    ],
  },
  {
    entryPoints: [
      './background/index.ts',
      './content/index.ts',
    ],
    outbase: import.meta.dirname!,
    outdir: `browser-M${versions[0].toUpperCase()}`,
    platform: 'browser',
    format: 'iife',
    plugins: [
      corejs(pkg.browserslist.production),
    ],
  },
  // HTML files
  {
    entryPoints: views,
    outdir: `browser-M${versions[0].toUpperCase()}/views`,
    platform: 'browser',
    format: 'esm',
    plugins: [
      html({
        buildOptions: {
          plugins: [corejs(pkg.browserslist.production)],
        },
      }),
    ],
  },
  // Optional second manifest file
  ...(versions[1]
    ? [{
      entryPoints: ['./manifest.json'],
      outdir: `browser-M${versions[1].toUpperCase()}`,
      plugins: [
        clearOutdir,
        manifest(versions[1]),
        {
          name: 'Copy directory',
          setup(build) {
            build.onStart(async () => {
              await new Promise(resolve => setTimeout(resolve, 200)); // race condition i don't care enough to fix

              const out = build.initialOptions.outdir!;
              const src = join(out, `../browser-M${versions[0].toUpperCase()}/`);
              if (!await exists(src)) await Deno.mkdir(src);
              await copy(src, out, { overwrite: true });
            });
          },
        },
      ],
    }]
    : []) satisfies import('#build').DefaultExport,
] satisfies import('#build').DefaultExport;

function manifest(version: `v${2 | 3}`): import('esbuild').Plugin {
  const regex = /\.ts(?=[\s"',]|$)/gm;

  return {
    name: 'Manifest version',
    setup(build) {
      build.onLoad({ filter: /manifest\.json/ }, async () => {
        const { manifest } = await import(`./manifests.mts?${Date.now()}`);

        return {
          contents: JSON.stringify(manifest[version], null, 2).replace(regex, '.js'),
          loader: 'copy',
          watchFiles: [join(import.meta.dirname!, './manifests.mts')],
        };
      });
    },
  };
}
