#!/bin/usr/env deno

import { parseArgs } from 'std/cli/mod.ts';
import { injectLocal, injectRemote } from './index.mts';
import pkg from '#pkg' with { type: 'json' };

const args = parseArgs(Deno.args, {
  boolean: ['unpacked'],
  string: ['location', 'version'],
  alias: {
    u: 'unpacked',
    l: 'location',
    v: 'version',
  },
  default: {
    version: `v${pkg.version}`,
  },
});

const location = args.location ?? args._[0];
if (typeof location !== 'string') throw new Error('No location provided');

if (!args.version.startsWith('v')) {
  console.warn(`Invalid version "${args.version}". Using "v${pkg.version}"`);
  args.version = `v${pkg.version}`;
}

const isLocal = typeof import.meta.dirname !== 'undefined';

if (isLocal) await injectLocal(location, args.unpacked);
else await injectRemote(location, args.version as `v${string}`);

console.log('%c✔ Injected', 'color: green; font-weight: bold');
