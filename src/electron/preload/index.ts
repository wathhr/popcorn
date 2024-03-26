import { contextBridge, ipcRenderer } from 'electron';
import type { SemVer } from 'semver';
import parse from 'semver/functions/parse';
import { ipc } from '#shared';

const PopcornAPI: ElectronAPI = {
  isBrowser: false,

  async getTheme() {
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

  async getUrls() {
    return [
      'https://github.com/elad2412/the-new-css-reset/raw/main/css/reset.css',
    ];
  },

  getConfig() {
    return ipcRenderer.sendSync(ipc('getConfig'));
  },

  onSaveState(handler) {
    ipcRenderer.on(ipc('saveState'), handler);
    return () => ipcRenderer.off(ipc('saveState'), handler);
  },

  onSendLog(handler) {
    ipcRenderer.on(ipc('sendLog'), handler);
    return () => ipcRenderer.off(ipc('sendLog'), handler);
  },

  async getMainLogs() {
    return await ipcRenderer.invoke(ipc('getMainLogs'));
  },
};

contextBridge.exposeInMainWorld('PopcornAPI', PopcornAPI);

if (NODE_ENV === 'development') import('./devserver');
