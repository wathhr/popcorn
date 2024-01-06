#!/bin/usr/env false
// @ts-check

import preprocess from 'svelte-preprocess';
import sveltePlugin from 'esbuild-svelte';

/** @type {import('esbuild').BuildOptions} */
export default {
  platform: 'browser',
  format: 'esm',
  define: {
    isBrowser: String(process.env.BROWSER === 'true'),
  },
  plugins: [
    sveltePlugin({
      preprocess: preprocess(),
      compilerOptions: {
        cssHash: ({ css, hash }) => `PopcornUI-${hash(css)}`,
        discloseVersion: false,
      },
    }),
  ],
};
