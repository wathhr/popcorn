#!/bin/usr/env false

import { join } from 'std/path/join.ts';

const __dirname = import.meta.dirname!;
const root = join(__dirname, '../..');

export default {
  platform: 'node',
  format: 'cjs',
  external: [
    'electron',
    join(root, 'config.json'),
  ],
} satisfies import('esbuild').BuildOptions;
