#!/bin/usr/env deno

import type * as esbuild from 'esbuild';
import { exists } from 'std/fs/mod.ts';
import { join } from 'std/path/mod.ts';
import * as c from 'std/fmt/colors.ts';
import { parseArgs } from 'std/cli/mod.ts';
import { DevServer } from '#build/devserver.mts';
import { processConfigFile } from '#build/index.mts';

const __dirname = import.meta.dirname!;
const root = join(__dirname, '../..');
const src = join(root, 'src');

const args = parseArgs(Deno.args, {
  boolean: ['watch', 'dev', 'original-logs', 'kernel'],
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

const { dev, watch, _ } = args;

const types = [...args.types, ..._.filter(t => typeof t === 'string') as string[]];
if (types.length === 0) types.push('all');

const validTypes = [];
for await (const item of Deno.readDir(src)) {
  if (item.name.startsWith('#') || !await exists(join(src, item.name, 'esbuild.config.mts'))) continue;
  validTypes.push(item.name);
}

switch (types[0]) {
  case 'all': {
    types.length = 0;
    types.push(...validTypes);
  } break;
}

const devServer = dev && watch ? new DevServer() : undefined;

const builds: esbuild.BuildContext[] = [];
for (const type of types) {
  builds.push(...await processConfigFile(type, args, devServer));
}

const startTime = Date.now();
for (const context of builds) {
  if (watch) context.watch();
  else {
    await context.rebuild();
    await context.dispose();
  }
}

if (!watch && builds.length > 1) {
  console.log(); // new line
  console.log(c.brightMagenta(`Total build time: ${Date.now() - startTime}ms`));
}

Deno.addSignalListener('SIGINT', () => {
  console.log('Stopping...');
  builds.forEach(async build => await build.dispose());

  devServer?.stop?.();
  Deno.exit();
});
