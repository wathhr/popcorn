#!/bin/usr/env false
import { deepMerge } from 'std/collections/mod.ts';
import { customFiles } from '#build/plugins/index.mts';

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
    },
  ));
}

export default builds;
