#!/bin/usr/env false

export default {
  platform: 'node',
  format: 'cjs',
  external: ['electron'],
} satisfies import('esbuild').BuildOptions;
