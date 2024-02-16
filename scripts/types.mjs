#!/bin/usr/env node
// @ts-check

import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync, existsSync } from 'node:fs';
import { writeFile, mkdir } from 'node:fs/promises';
import { applyPatch } from 'diff';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = join(__dirname, '..');

const list = [
  {
    name: 'electron',
    url: 'https://unpkg.com/electron@28.0.0/electron.d.ts',
    filename: 'electron.d.ts',
    patch: './electron.patch',
  }
];

if (!existsSync(join(root, 'types'))) await mkdir(join(root, 'types'));

for (const item of list) {
  try {
    const data = await fetch(item.url)
      .then((r) => r.text())
      .then((r) => !item.patch ? r : (() => {
        if (!item.patch) return r;

        const patch = readFileSync(join(__dirname, item.patch), 'utf-8');
        const patched = applyPatch(r, patch);

        if (!patched) return r;
        return patched;
      })());

    writeFile(join(root, 'types', item.filename), data)
      .then(() => console.log(`✔ Successfully downloaded types for ${item.name}!`));
  } catch (e) {
    console.error(`✘ Failed to download types for ${item.name}:`, e);
  }
}
