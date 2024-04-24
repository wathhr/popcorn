#!/bin/usr/env false

import { corejs } from '#build/plugins/index.mts';
import pkg from '#pkg' with { type: 'json' };

export default {
  platform: 'browser',
  format: 'iife',
  plugins: [corejs(pkg.browserslist['electron-renderer'])],
} satisfies import('#build').DefaultExport;
