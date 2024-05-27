#!/bin/usr/env false
import { deepMerge } from 'std/collections/mod.ts';
import { createPackage } from 'npm:@electron/asar';
import { customFiles } from '#build/plugins/index.mts';

const builds: import('#build').DefaultExport = [{ entryPoints: ['../../package.json'], plugins: [customFiles()] }];
for await (const item of Deno.readDir(import.meta.dirname!)) {
  if (item.isFile) continue;
  const type = item.name;

  builds.push(deepMerge(
    (await import(`./${type}/esbuild.config.mts?${new URL(import.meta.url).searchParams.toString()}`)).default,
    {
      // TODO: Don't overwrite this
      entryPoints: [{ in: `./${type}/index.ts`, out: `${type}` }],
    },
  ));
}

builds.at(-1)?.plugins?.push({
  name: 'Create ASAR',
  setup(build) {
    const outDir = build.initialOptions.outdir;
    if (!outDir) return;

    build.onEnd(async () => {
      const fileName = outDir.replace(/\/?$/, '.asar');
      await createPackage(outDir, fileName);
    });
  },
});

export default builds;
