#!/bin/usr/env false
import { deepMerge } from 'std/collections/mod.ts';
import { corejs, customFiles } from '#build/plugins/index.mts';
import pkg from '#pkg' with { type: 'json' };

const params = new URL(import.meta.url).searchParams;

const builds: import('#build').DefaultExport = [
  ...(params.get('kernel') === 'true' ? [{ entryPoints: ['./package.json'], plugins: [customFiles()] }] : []),
];
for await (const item of Deno.readDir(import.meta.dirname!)) {
  if (item.isFile) continue;
  const type = item.name;

  builds.push(deepMerge(
    (await import(`./${type}/esbuild.config.mts`)).default,
    {
      // TODO: Don't overwrite this
      entryPoints: [{ in: `./${type}/index.ts`, out: `${type}` }],
      plugins: [corejs(pkg.browserslist.electron)],
      define: {
        isKernel: params.get('kernel') ?? 'false',
      },
    },
  ));
}

export default builds;
