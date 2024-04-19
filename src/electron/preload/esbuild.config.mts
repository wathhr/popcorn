#!/bin/usr/env false

import { legacyImport } from '#build/plugins/index.mts';

export default {
  platform: 'node',
  format: 'cjs',
  external: ['electron'],
  plugins: [legacyImport],
} satisfies import('#build').DefaultExport;
