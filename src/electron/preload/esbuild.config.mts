#!/bin/usr/env false

import { corejs, legacyImport } from '#build/plugins/index.mts';
import pkg from '#pkg' with { type: 'json' };

export default {
  platform: 'node',
  format: 'cjs',
  external: ['electron', 'popcorn://*'],
  plugins: [legacyImport, corejs(pkg.browserslist['electron-main'])],
} satisfies import('#build').DefaultExport;
