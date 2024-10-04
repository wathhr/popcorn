#!/usr/bin/env false
import { deepMerge } from 'std/collections/mod.ts';
import { createPackage } from 'npm:@electron/asar';
import { customFiles } from '#build/plugins/index.mts';
import { addToGroup } from '#build/plugins/custom-logs.mts';

const params = new URL(import.meta.url).searchParams;

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

const plugin: import('esbuild').Plugin = {
  name: 'Create ASAR',
  setup(build) {
    const outDir = build.initialOptions.outdir!;
    const fileName = outDir.replace(/\/?$/, '.asar');

    build.onEnd(async () => {
      await createPackage(outDir, fileName);

      addToGroup({
        files: [
          {
            path: fileName,
            size: await Deno.stat(fileName).then(stat => stat.size),
          },
        ],
      });
    });
  },
};

if (params.get('watch') === 'true')
  for (const i in builds) {
    const build = builds[i];

    build.plugins ??= [];
    build.plugins.push(plugin);
  }
else {
  const build = builds.at(-1)!;
  build.plugins ??= [];
  build.plugins.push(plugin);
}

export default builds;
