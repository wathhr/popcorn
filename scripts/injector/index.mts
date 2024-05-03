#!/bin/usr/env false

import { copy, exists } from 'std/fs/mod.ts';
import { basename, join } from 'std/path/mod.ts';

async function setup(location: string) {
  const locationStat = await Deno.stat(location)
    .catch((e: unknown) => {
      if (e instanceof Deno.errors.NotFound) throw new Error(`"${location}" does not exist`);

      throw e;
    });

  const possibleOriginals = {
    file: location.replace('.asar', '-original.asar'),
    dir: `${location.replace(/\.asar$/, '').replace(/[\\/]$/, '')}-original`,
  };

  const originalLocation = locationStat.isFile
    ? possibleOriginals.file
    : possibleOriginals.dir;

  if (await exists(possibleOriginals.file) || await exists(possibleOriginals.dir)) {
    console.info(`"${originalLocation}" already exists. Keeping original and deleting "${location}"`);
    await Deno.remove(location, { recursive: true })
      .catch((e) => {
        console.error(`Failed to delete "${location}". Is the app running?`);
        throw e;
      });
  } else await Deno.rename(location, originalLocation)
    .catch((e) => {
      console.error(`Failed to rename "${location}". Is the app running?`);
      throw e;
    });
}

export async function injectLocal(location: string, unpacked = false) {
  if (!import.meta.dirname) throw new Error('This script must be run locally');

  await setup(location);

  const popcornDist = unpacked
    ? join(import.meta.dirname, '../../dist/electron')
    : join(import.meta.dirname, '../../dist/electron.asar');

  if (!await exists(popcornDist)) {
    const { build } = await import('#build/index.mts');

    await build('electron');
  }

  await copy(popcornDist, join(location, `../${basename(location).replace('.asar', '')}${unpacked ? '' : '.asar'}`));
}

export async function injectRemote(location: string, version: `v${string}`) {
  const popcornAsarData = await fetch(`https://github.com/wathhr/popcorn/releases/${version}/download/electron.asar`).then(r => r.arrayBuffer());
  await Deno.writeFile(join(location, `../${basename(location).replace('.asar', '')}.asar`), new Uint8Array(popcornAsarData));
}
