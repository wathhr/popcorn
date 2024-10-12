#!/usr/bin/env false

import { corejs } from '#build/plugins/mod.mts';
import pkg from '#pkg' with { type: 'json' };

export default {
  platform: 'browser',
  format: 'iife',
  plugins: [corejs(pkg.browserslist['electron-renderer'])],
} satisfies import('#build/mod.mts').DefaultExport;
