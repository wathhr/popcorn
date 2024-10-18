#!/usr/bin/env false

import { corejs } from '#build/plugins/mod.mts';
import pkg from '#pkg' with { type: 'json' };

export default {
  platform: 'node',
  format: 'cjs',
  external: ['electron'],
  plugins: [corejs(pkg.browserslist['electron-main'])],
} satisfies import('#build/mod.mts').DefaultExport;
