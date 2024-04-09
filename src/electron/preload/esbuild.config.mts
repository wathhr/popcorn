#!/bin/usr/env false

export default {
  platform: 'node',
  format: 'cjs',
  external: [
    'electron',
    'electron-legacy',
  ],
} satisfies import('#build').DefaultExport;
