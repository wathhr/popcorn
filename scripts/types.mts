#!/bin/usr/env deno

import { applyPatch } from 'npm:diff';
import { ensureDir } from 'std/fs/mod.ts';
import { basename, join } from 'std/path/mod.ts';

const __dirname = import.meta.dirname!;
const root = join(__dirname, '..');

type Item = {
  url: string;
  filename?: string;
  patch?: string;
};

const list: Item[] = [
  {
    url: 'https://unpkg.com/electron@28.0.0/electron.d.ts',
    patch: './electron.patch',
  }
];

await ensureDir(join(root, 'vendor'));

for (const item of list) {
  const filename = basename(item.url);

  try {
    const data = await fetch(item.url)
      .then((r) => r.text())
      .then((r) => !item.patch ? r : (() => {
        if (!item.patch) return r;

        const patch = Deno.readTextFileSync(join(__dirname, item.patch));
        const patched = applyPatch(r, patch);

        if (!patched) return r;
        return patched;
      })());

    Deno.writeTextFile(join(root, 'vendor', item.filename ?? basename(filename)), data)
      .then(() => console.log(`✔ Successfully downloaded types for ${filename}!`));
  } catch (e) {
    console.error(`✘ Failed to download types for ${filename}:`, e);
  }
}
