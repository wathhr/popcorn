import { contextBridge } from 'electron';
import { SemVer } from 'semver';
import parse from 'semver/functions/parse';

const PopcornAPI: API = {
  async getTheme(_id) {
    return {
      id: 'test.test',
      version: parse('1.0.0') as SemVer,
      css: 'body { background-color: red; }',
      main: 'troll',
      meta: {
        description: 'Test theme',
        name: 'Test theme',
        version: '1.0.0',
        metaLinks: {
          github: 'https://github.com/example/test',
          discord: 'https://discord.gg/example',
        },
      },
    };
  },

  async getThemes() {
    return [
      await PopcornAPI.getTheme('test.test')!,
    ];
  },

  async getURLs() {
    return [
      'https://github.com/elad2412/the-new-css-reset/raw/main/css/reset.css',
    ];
  },

  async getConfig() {
    return {
      enabled: { 'test.test': true },
      hotkey: 'ctrl+shift+p',
      quickCssDir: 'troll',
      themeDirs: [],
      verbose: true,
    };
  },
};

contextBridge.exposeInMainWorld('PopcornAPI', PopcornAPI);

if (NODE_ENV === 'development') import('./devserver');
