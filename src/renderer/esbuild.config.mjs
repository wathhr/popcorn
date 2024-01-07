#!/bin/usr/env false
// @ts-check

/** @type {import('esbuild').BuildOptions} */
export default {
  platform: 'browser',
  format: 'esm',
  define: {
    isBrowser: String(process.env.BROWSER === 'true'),
  },
};
