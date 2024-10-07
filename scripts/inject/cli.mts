#!/usr/bin/env -S deno run --allow-all

import { parseArgs } from 'std/cli/mod.ts';
import { join } from 'std/path/mod.ts';
import { exists } from 'std/fs/mod.ts';
import { injectLocal, injectRemote } from './index.mts';
import pkg from '#pkg' with { type: 'json' };

const args = parseArgs(Deno.args, {
  boolean: ['unpacked', 'symlink', 'help'],
  string: ['location', 'version'],
  alias: {
    u: 'unpacked',
    s: 'symlink',
    l: 'location',
    v: 'version',
    h: 'help',
  },
  default: {
    version: `v${pkg.version}`,
  },
});

function help(code = 0) {
  console.log(`
  Usage: injector [options] <location>

  Options:
    -u, --unpacked    Inject unpacked (as folder)
    -s, --symlink     Use symlinks instead of copies
    -l, --location    Location of the app's asar or app folder
    -v, --version     Which version of popcorn to inject
    -h, --help        Show this help`);

  Deno.exit(code);
}

if (args.help) help();
if (Deno.args.length < 1) help(1);

const location = await (async () => {
  const arg = args.location ?? args._[0];
  if (typeof arg !== 'string') throw new Error('No location provided');

  if (arg === 'auto' && import.meta.dirname) {
    const appSrcDist = join(import.meta.dirname, '../../app-src/dist');
    if (!await exists(appSrcDist)) await new Deno.Command(Deno.execPath(), { args: 'run build:unpack'.split(' ') }).spawn().output();

    for await (const child of Deno.readDir(appSrcDist))
      if (child.name.endsWith('-unpacked')) return join(appSrcDist, child.name, 'resources/app.asar');

    throw new Error('Could not find unpacked app');
  }

  return arg;
})();

if (!args.version.startsWith('v')) {
  console.warn(`Invalid version "${args.version}". Using "v${pkg.version}"`);
  args.version = `v${pkg.version}`;
}

if (!import.meta.dirname) {
  if (args.symlink) console.warn('Using symlinks is unsupported when running remotely. Ignoring...');
  if (args.unpacked) console.warn('Unpacked installation is unsupported when running remotely. Ignoring...');
}

if (import.meta.dirname) await injectLocal(location, args.symlink
  ? 'symlink'
  : args.unpacked
    ? 'unpacked'
    : 'packed');
else await injectRemote(location, args.version as `v${string}`);

console.log('%c✔ Injected', 'color: green; font-weight: bold');
