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
  boolean: ['watch', 'dev'],
  string: ['types', 'executables'],
  collect: ['types', 'executables'],
  alias: {
    d: 'dev',
    t: 'types',
    w: 'watch',
    e: 'executables',
  },
  default: {
    dev: Deno.env.get('NODE_ENV') === 'development',
    watch: false,
  },
});

const { dev, watch, _ } = args;

const types = new Set(...args.types, _.filter(t => typeof t === 'string'));
if (types.size === 0) types.add('all');

const validTypes = [];
for await (const item of Deno.readDir(src)) {
  if (item.name.startsWith('#') || !await exists(join(src, item.name, 'esbuild.config.mts'))) continue;
  validTypes.push(item.name);
}

if (types.has('all')) {
  types.clear();
  for (const type of validTypes) types.add(type);
}

const devServer = dev && watch ? new DevServer() : undefined;

const builds: esbuild.BuildContext[] = [];
for (const type of types)
  builds.push(...await processConfigFile(type, args, devServer)
    .catch((e) => {
      console.error(e);
      return [];
    }),
  );

Deno.addSignalListener('SIGINT', () => {
  console.log('Stopping...');
  builds.forEach(async build => await build.cancel());

  devServer?.stop?.();
  Deno.exit();
});

const startTime = Date.now();
for (const context of builds)
  if (watch) context.watch();
  else {
    await context.rebuild();
    await context.dispose();
  }

if (!watch && builds.length > 1) {
  console.log(c.brightMagenta(`\nTotal build time: ${Date.now() - startTime}ms`));
  Deno.exit();
}
