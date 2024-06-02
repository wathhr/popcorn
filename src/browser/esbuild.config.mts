#!/bin/usr/env false

import { join } from 'std/path/join.ts';
import { copy, exists, walk } from 'std/fs/mod.ts';
import { clearOutdir, corejs, html } from '#build/plugins/index.mts';
import pkg from '#pkg' with { type: 'json' };
import { addToGroup } from '#build/plugins/custom-logs.mts';

const versions: `v${2 | 3}`[] = [];
if (Deno.args.includes('--mv2')) versions.push('v2');
if (Deno.args.includes('--mv3')) versions.push('v3');
if (versions.length === 0) versions.push('v2', 'v3');

const views: string[] = [];
for await (const item of Deno.readDir(join(import.meta.dirname!, './views')))
  if (item.name.endsWith('.html')) views.push(join('./views', item.name));

export default [
  // First manifest file
  {
    entryPoints: ['./manifest.json'],
    outdir: `browser-m${versions[0]}`,
    plugins: [
      clearOutdir,
      manifest(versions[0]),
    ],
  },
  {
    entryPoints: [
      './content/index.ts',
      './background/index.ts',
    ],
    outbase: import.meta.dirname!,
    outdir: `browser-m${versions[0]}`,
    platform: 'browser',
    format: 'iife',
    plugins: [
      corejs(pkg.browserslist.production),
    ],
  },
  // HTML files
  {
    entryPoints: views,
    outdir: `browser-m${versions[0]}/views`,
    platform: 'browser',
    format: 'esm',
    plugins: [
      html({
        buildOptions: {
          plugins: [corejs(pkg.browserslist.production)],
        },
      }, 'browser'),
    ],
  },
  // Optional second manifest file
  ...(versions[1]
    ? [{
      entryPoints: ['./manifest.json'],
      outdir: `browser-m${versions[1]}`,
      plugins: [
        clearOutdir,
        manifest(versions[1]),
        {
          name: 'Copy directory',
          setup(build) {
            build.onStart(async () => {
              await new Promise(resolve => setTimeout(resolve, 50)); // race condition

              const outDir = build.initialOptions.outdir!;
              const src = join(outDir, `../browser-m${versions[0]}/`);
              if (!await exists(src)) return;

              for await (const file of walk(src)) {
                const outFile = file.path.replace(`browser-m${versions[0]}`, `browser-m${versions[1]}`);

                if (file.isDirectory) {
                  await Deno.mkdir(outFile, { recursive: true });
                  continue;
                }

                await copy(file.path, outFile, { overwrite: false, preserveTimestamps: true });
                addToGroup({
                  files: [{
                    path: outFile,
                    size: await Deno.stat(file.path).then(stat => stat.size),
                  }],
                });
              }
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
