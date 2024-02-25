#!/bin/usr/env false

import pkg from '../../package.json' with { type: 'json' };

const commonManifest = {
  name: pkg.name[0].toUpperCase() + pkg.name.slice(1),
  version: pkg.version,
  description: pkg.description,
  homepage_url: `https://github.com/${pkg.author.name}/${pkg.name}`,
} as const satisfies Partial<chrome.runtime.Manifest>;

export const manifest: Record<`v${2|3}`, chrome.runtime.Manifest> = {
  v3: {
    manifest_version: 3,
    ...commonManifest,

    action: {
      default_popup: './popup/index.html',
    },
    background: {
      service_worker: './background/index.ts',
      // @ts-expect-error https://stackoverflow.com/a/75203925/14591737
      scripts: ['./background/index.ts'],
    },
    content_scripts: [
      {
        matches: ['<all_urls>'],
        js: ['./content/index.ts'],
      },
    ],
    browser_specific_settings: {
      gecko: {
        id: `${pkg.name}@${pkg.author.name}`,
      },
    },
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
    browser_specific_settings: {
      gecko: {
        id: `${pkg.name}@${pkg.author.name}`,
        strict_min_version: '57.0',
      },
    },
  },
};
