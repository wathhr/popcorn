#!/bin/usr/env false

import { parseArgs } from 'std/cli/parse_args.ts';

export const args = parseArgs(Deno.args, {
  boolean: ['watch', 'dev', 'original-logs'],
  string: ['types', 'executables'],
  collect: ['types', 'executables'],
  alias: {
    d: 'dev',
    t: 'types',
    w: 'watch',
    o: 'original-logs',
    e: 'executables',
  },
  default: {
    dev: Deno.env.get('NODE_ENV') === 'development',
    watch: false,
  },
});
