import { contextBridge, ipcRenderer } from 'electron';
import { ipc, isKernel } from '#shared';
import type { ElectronAPI } from '~/types';

if (!isKernel) import('./inject');

const PopcornAPI: Omit<ElectronAPI, `$${string}`> = {
  isBrowser: false,

  async getThemes() {
    return await ipcRenderer.invoke(ipc('getThemes'));
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
    return () => ipcRenderer.off(ipc('onSaveState'), handler);
  },

  onSendLog(handler) {
    ipcRenderer.on(ipc('sendLog'), handler);
    return () => ipcRenderer.off(ipc('onSendLog'), handler);
  },

  async getMainLogs() {
    return await ipcRenderer.invoke(ipc('getMainLogs'));
  },
};

contextBridge.exposeInMainWorld('PopcornAPI', PopcornAPI);

if (NODE_ENV === 'development') import('./devserver');
