#!/bin/usr/env false

export default {
  entryPoints: ['./index.ts'],
  platform: 'node',
  format: 'cjs',
  external: ['electron', '#kernel'],
} satisfies import('esbuild').BuildOptions;
