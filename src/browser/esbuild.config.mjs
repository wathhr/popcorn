#!/bin/usr/env false
// @ts-check

import fs from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { manifest } from './manifests.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const version = process.argv.includes('--mv2') ? 'v2' : 'v3';

export const dependencies = ['renderer'];

/** @type {import('esbuild').BuildOptions} */
export default {
  entryPoints: [
    './background/index.ts',
    './content/index.ts',
    // TODO: Maybe somehow build `./popup/index.html` directly instead (the plugins i tried were buggy with this build pipeline)
    './popup/index.ts',
  ],
  platform: 'browser',
  format: 'iife',
  define: {
    isBrowser: 'true',
  },
  plugins: [
    clearOutPlugin(),
    // TODO: Use loader approach instead of this so it can also watch
    writeFilePlugin({
      'manifest.json': manifest[version],
      'popup/index.html': `<${join(__dirname, 'popup/index.html')}>`,
      'browser-polyfill.js': `<${join(__dirname, '../../node_modules/webextension-polyfill/dist/browser-polyfill.min.js')}>`
    }),
  ],
};

/** @returns {import('esbuild').Plugin} */
function clearOutPlugin() {
  return {
    name: 'Clear outDir',
    setup(build) {
      build.onStart(async () => {
        const out = /** @type {string} */ (build.initialOptions.outdir);
        await fs.rm(out, { force: true, recursive: true });
        await fs.mkdir(out, { recursive: true });
      });
    },
  };
}

/**
 * @param {Record<string, any>} files
 * @returns {import('esbuild').Plugin}
 */
function writeFilePlugin(files) {
  return {
    name: 'Write files',
    setup(build) {
      const out = /** @type {string} */ (build.initialOptions.outdir);

      build.onEnd(async () => {
        console.log(); // newline

        for (const name in files) {
          const content = files[name];

          const string = await (async () => {
            if (typeof content !== 'string')
              return JSON.stringify(content, null, 2);
            if (content.startsWith('<') && content.endsWith('>'))
              return await fs.readFile(content.slice(1, -1), 'utf8');

            return content;
          })();

          // TODO: Use this for logging https://esbuild.github.io/api/#format-messages
          await fs.writeFile(join(out, name), string.replace(/\.ts(?=[\s"',]|$)/g, '.js'))
            .then(() => console.log(`✔ Wrote ${name} (${toByteSize('a'.repeat(1024))})`))
            .catch((e) => console.error(`✘ Failed to write ${name}:`, e));
        }
      });
    },
  };
}

/** @param {any} content */
function toByteSize(content) {
  const size = new Blob([content]).size;

  if (size >= 1024 * 1024) return `${parseFloat((size / 1024 / 1024).toFixed(2))}mb`;
  else if (size >= 1024) return `${parseFloat((size / 1024).toFixed(2))}kb`;
  else return `${size}b`;
}
