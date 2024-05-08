globalThis.PopcornAPI = {
  isBrowser: true,

  async getThemes() {
    return [
      {
        id: 'test.test',
        main: 'troll',
        manifestVersion: 1,
        description: 'Test theme',
        name: 'Test theme',
        version: '1.0.0',
        metaLinks: {
          github: 'https://github.com/example/test',
          discord: 'https://discord.gg/example',
        },
      },
    ];
  },

  async getUrls() {
    return [
      'https://github.com/elad2412/the-new-css-reset/raw/main/css/reset.css',
    ];
  },

  getConfig() {
    return {
      $schema: `https://github.com/wathhr/popcorn/releases/download/v${pkg.version}/config.json`,
      configVersion: 1,
      enabled: {},
      hotkey: 'ctrl+shift+p',
      quickCssDir: './quickcss',
      themeDirs: [],
      verbose: process.argv.includes('--verbose') || NODE_ENV === 'development',
      transparencyType: 'none',
    };
  },
};

import('~/src/electron/renderer');
