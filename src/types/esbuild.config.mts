#!/bin/usr/env false

export default {
  entryPoints: [
    './config.json',
    './theme.json',
  ],
  plugins: [
    {
      name: 'JSON Schema',
      setup(build) {
        build.onLoad({ filter: /\.json$/ }, async ({ path }) => {
          const { type } = JSON.parse(await Deno.readTextFile(path));
          if (typeof type !== 'string') return;

          const file = await import(`./${type}.ts`);

          return {
            contents: JSON.stringify(file[type], null, 2),
            loader: 'copy',
            watchFiles: [`./${type}.ts`],
          };
        });
      },
    },
  ],
} satisfies import('esbuild').BuildOptions;
