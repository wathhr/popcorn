import { contextBridge } from 'electron';

const PopcornAPI: API = {
  async getTheme(_id) {
    return {
      css: 'body { background-color: red; }',
      id: 'test.test',
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
    return {
      'test.test': await PopcornAPI.getTheme('test.test')!,
    };
  },

  async getURLs() {
    return [
      'https://github.com/elad2412/the-new-css-reset/raw/main/css/reset.css',
    ];
  }
};

contextBridge.exposeInMainWorld('PopcornAPI', PopcornAPI);
