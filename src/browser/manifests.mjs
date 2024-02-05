#!/bin/usr/env false
// @ts-check

import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const pkg = require('../../package.json');

const commonManifest = /** @type {const} @satisfies {Partial<chrome.runtime.Manifest>} */ ({
  name: pkg.name[0].toUpperCase() + pkg.name.slice(1),
  version: pkg.version,
  description: pkg.description,
  homepage_url: 'https://github.com/wathhr/popcorn',
});

/** @type {Record<`v${2|3}`, chrome.runtime.Manifest>} */
export const manifest = {
  v3: {
    manifest_version: 3,
    ...commonManifest,

    action: {
      default_popup: './popup/index.html',
    },
    background: {
      service_worker: './background/index.ts',
    },
    content_scripts: [
      {
        matches: ['<all_urls>'],
        js: ['./content/index.ts'],
      },
    ],
  },

  v2: {
    manifest_version: 2,
    ...commonManifest,

    browser_action: {
      default_popup: './popup/index.html',
    },
    background: {
      persistent: true,
      scripts: ['./background/index.ts'],
    },
    content_scripts: [{
      matches: ['<all_urls>'],
      js: ['./content/index.ts'],
    }],
  },
};
