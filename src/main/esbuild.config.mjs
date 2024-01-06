#!/bin/usr/env false
// @ts-check

import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = join(__dirname, '../..');

/** @type {import('esbuild').BuildOptions} */
export default {
  platform: 'node',
  format: 'cjs',
  external: [
    'electron',
    join(root, 'config.json'),
  ],
};
