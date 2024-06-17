#!/bin/usr/env false

import { aliasImport, corejs } from '#build/plugins/index.mts';
import pkg from '#pkg' with { type: 'json' };

export default {
  platform: 'node',
  format: 'cjs',
  external: ['electron'],
  plugins: [aliasImport, corejs(pkg.browserslist['electron-main'])],
} satisfies import('#build').DefaultExport;
