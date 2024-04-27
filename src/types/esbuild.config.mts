#!/bin/usr/env false

const jsonFiles = [];
for await (const file of Deno.readDir(import.meta.dirname!)) {
  if (file.name.endsWith('.json')) jsonFiles.push(file.name);
}

export default {
  customOptions: {
    independent: true,
  },
  entryPoints: jsonFiles,
  plugins: [
    {
      name: 'JSON Schema',
      setup(build) {
        build.onLoad({ filter: /\.json$/ }, async ({ path }) => {
          const { type } = JSON.parse(await Deno.readTextFile(path));
          if (typeof type !== 'string') return;

          const file = await import(`./${type}.ts`).catch(() => undefined);
          if (!file) throw new Error(`Could not find ${type}.ts`);
          if (!file[type]) throw new Error(`${type}.ts has no export of ${type}`);

          return {
            contents: JSON.stringify(file[type], null, 2),
            loader: 'copy',
            watchFiles: [`./${type}.ts`],
          };
        });
      },
    },
  ],
} satisfies import('#build').DefaultExport;
