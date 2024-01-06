#!/bin/usr/env false
// @ts-check

/** @type {import('esbuild').BuildOptions} */
export default {
  entryPoints: ['./index.ts'],
  platform: 'node',
  format: 'cjs',
  external: ['electron'],
};
