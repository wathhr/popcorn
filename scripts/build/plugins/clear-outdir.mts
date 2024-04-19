#!/bin/usr/env false

import { exists } from 'std/fs/mod.ts';

export const clearOutdir: import('esbuild').Plugin = {
  name: 'Clear outDir',
  setup(build) {
    build.onStart(async () => {
      const out = build.initialOptions.outdir!;
      if (await exists(out)) await Deno.remove(out, { recursive: true });
      await Deno.mkdir(out, { recursive: true });
    });
  },
};

export default clearOutdir;
