#!/bin/usr/env false

const builds: import('#build').DefaultExport = [];
for await (const item of Deno.readDir(import.meta.dirname!)) {
  if (item.isFile) continue;
  const type = item.name;
  builds.push({
    ...(await import(`./${type}/esbuild.config.mts`)).default,
    entryPoints: [{ in: `./${type}/index.ts`, out: `${type}` }],
  });
}

export default builds;
