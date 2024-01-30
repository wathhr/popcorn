#!/bin/usr/env node
// @ts-check

import { writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const list = [
  {
    name: 'electron',
    url: 'https://unpkg.com/electron@latest/electron.d.ts',
    filename: 'electron.d.ts',
  },
];

await mkdir('types');

for (const { name, url, filename } of list) {
  try {
    const data = await fetch(url).then((r) => r.text());
    writeFile(join('types', filename), data)
      .then(() => console.log(`✔ Successfully downloaded types for ${name}!`));
  } catch (e) {
    console.error(`✘ Failed to download types for ${name}:`, e);
  }
}
