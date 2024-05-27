#!/bin/usr/env false

import { extname } from 'std/path/mod.ts';

type Opts = Record<string, never> | {
  regex: RegExp,
  replace: string,
};

export function customFiles(opts: Opts = {}): import('esbuild').Plugin {
  return {
    name: 'Custom files',
    setup(build) {
      // All the default loaders + the ones specified in the config
      const loaders = ['.js', '.mjs', '.cjs', '.jsx', '.ts', '.mts', '.cts', '.tsx', ...Object.keys(build.initialOptions.loader ?? {})];
      build.onLoad({ filter: /.*/ }, async ({ path }) => {
        if (loaders.includes(extname(path))) return;

        let content = await Deno.readTextFile(path);
        if (opts.regex) content = content.replace(opts.regex, opts.replace);

        return {
          contents: content,
          loader: 'copy',
          watchFiles: [path],
        };
      });
    },
  };
};
