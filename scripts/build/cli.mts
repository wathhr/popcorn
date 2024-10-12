#!/usr/bin/env -S deno run --allow-all

import type * as esbuild from 'esbuild';
import { exists } from 'std/fs/mod.ts';
import { join } from 'std/path/mod.ts';
import * as c from 'std/fmt/colors.ts';
import { parseArgs } from 'std/cli/mod.ts';
import { DevServer } from '#build/devserver.mts';
import { processConfigFile } from '#build/mod.mts';

const args = parseArgs(Deno.args, {
  boolean: ['watch', 'dev'],
  string: ['types'],
  collect: ['types'],
  alias: {
    d: 'dev',
    t: 'types',
    w: 'watch',
  },
  default: {
    dev: Deno.env.get('NODE_ENV') === 'development',
    watch: false,
  },
});

const src = join(import.meta.dirname!, '../../src');
const { dev, watch } = args;

const types = new Set(...args.types, args._.filter(t => typeof t === 'string'));
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

if (!watch) {
  if (builds.length > 1 && !Deno.args.includes('--original-args'))
    console.log(c.brightMagenta(`\nTotal build time: ${Date.now() - startTime}ms`));

  Deno.exit();
}
