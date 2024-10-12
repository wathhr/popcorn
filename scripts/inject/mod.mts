#!/usr/bin/env false

import { copy, ensureDir, exists } from 'std/fs/mod.ts';
import { basename, join } from 'std/path/mod.ts';

async function setup(location: string) {
  const stat = await Deno.stat(location)
    .catch((e: unknown) => {
      if (e instanceof Deno.errors.NotFound) throw new Error(`"${location}" does not exist`);

      throw e;
    });

  const possibleOriginals = {
    file: location.replace('.asar', '-original.asar'),
    dir: `${location.replace(/\.asar$/, '').replace(/[\\/]$/, '')}-original`,
  };

  const originalLocation = stat.isFile ? possibleOriginals.file : possibleOriginals.dir;

  if (await exists(possibleOriginals.file) || await exists(possibleOriginals.dir)) await Deno.remove(location, { recursive: true })
    .catch((e: unknown) => {
      if (e instanceof Error && e.message.includes('another process')) throw new Error('You need to close the app before injecting');

      throw e;
    });

  else await Deno.rename(location, originalLocation)
    .catch((e: unknown) => {
      if (e instanceof Error && e.message.includes('another process')) throw new Error('You need to close the app before injecting');

      throw e;
    });
}

/**
 * @param location The location to the original asar file/directory
 * @param type The type of injection
 */
export async function injectLocal(location: string, type: 'packed' | 'unpacked' | 'symlink' = 'packed') {
  if (!import.meta.dirname) throw new Error('This script must be run locally');

  await setup(location);

  const popcornDist = type === 'packed'
    ? join(import.meta.dirname, '../../dist/electron.asar')
    : join(import.meta.dirname, '../../dist/electron');

  if (!await exists(popcornDist)) {
    const { build } = await import('../build/mod.mts');

    await build('electron', { dev: type === 'symlink' });
  }

  if (type === 'symlink') {
    location = location.replace(/\.asar$/, '');
    await ensureDir(location);
    for await (const entry of Deno.readDir(popcornDist)) await Deno.link(join(popcornDist, entry.name), join(location, entry.name));
    return;
  }

  await copy(popcornDist, join(location, `../${basename(location).replace(/\.asar$/, '')}${type === 'packed' ? '.asar' : ''}`));
}

/**
 * @param location The location to the original asar file/directory
 * @param version The version of popcorn to inject
 */
export async function injectRemote(location: string, version: `v${string}`) {
  await setup(location);

  const popcornAsarData = await fetch(`https://github.com/wathhr/popcorn/releases/${version}/download/electron.asar`)
    .then(r => r.arrayBuffer())
    .catch((e) => {
      throw new Error(`Something went wrong: ${e}`);
    });
  await Deno.writeFile(join(location, `../${basename(location).replace('.asar', '')}.asar`), new Uint8Array(popcornAsarData));
}
