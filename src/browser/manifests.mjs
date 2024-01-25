import { createRequire } from 'module';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);
const pkg = require('../../package.json');

const commonManifest = /** @type {const} @satisfies {Partial<chrome.runtime.Manifest>} */ ({
  name: pkg.name[0].toUpperCase() + pkg.name.slice(1),
  version: pkg.version,
  description: pkg.description,
  homepage_url: 'https://github.com/wathhr/popcorn',
});

/** @type {Record<`v${number}`, chrome.runtime.Manifest>} */
export const manifest = {
  v3: {
    manifest_version: 3,
    ...commonManifest,

    action: {
      default_popup: 'popup/index.html',
    },
    background: {
      service_worker: 'background.js',
    },
    content_scripts: [
      {
        matches: ['*://*/*'],
        js: [
          'browser-polyfill.js',
          'content/index.ts',
        ],
      },
    ],
  },

  v2: {
    manifest_version: 2,
    ...commonManifest,

    browser_action: {
      default_popup: 'popup/index.html',
    },
    background: {
      persistent: true,
      scripts: [
        'browser-polyfill.js',
        'background/index.ts',
      ],
    },

    content_scripts: [{
      matches: ['*://*/*'],
      js: [
        'browser-polyfill.js',
        'content/index.ts',
      ],
    }],
  },
};
