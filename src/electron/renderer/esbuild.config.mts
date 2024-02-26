#!/bin/usr/env false

export default {
  platform: 'browser',
  format: 'esm',
  define: {
    isBrowser: 'false',
  },
} satisfies import('esbuild').BuildOptions;
