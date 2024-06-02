import { contextBridge, ipcRenderer } from 'electron';
import { ipc, isKernel } from '#shared';
import type { ElectronAPI } from '~/types';

if (!isKernel) import('./inject');

const PopcornAPI: Omit<ElectronAPI, `$${string}`> = {
  isBrowser: false,
  isSplash: (() => {
    const possibleVars = [
      'splash',
      'Splash',
      'SPLASH',
      '__SPLASH',
      '__SPLASH__',
      'splashScreen',
      'SplashScreen',
      'SPLASHSCREEN',
      '__SPLASHSCREEN',
      '__SPLASHSCREEN__',
    ];

    for (const varName of possibleVars) if (varName in window) return true;
    if (/(?:public)?(?:splash\.html?|splash[\\/]\w+\.html?)$/i.test(location.href)) return true;

    return false;
  })(),

  getThemes: () => ipcRenderer.invoke(ipc('getThemes')),
  getConfig: () => ipcRenderer.sendSync(ipc('getConfig')),
  getMainLogs: () => ipcRenderer.invoke(ipc('getMainLogs')),

  async getUserStyles() {
    return PopcornAPI.getConfig().userStyles;
  },

  onSaveState(handler) {
    ipcRenderer.on(ipc('saveState'), handler);
    return () => ipcRenderer.off(ipc('saveState'), handler);
  },

  onSendLog(handler) {
    ipcRenderer.on(ipc('sendLog'), handler);
    return () => ipcRenderer.off(ipc('sendLog'), handler);
  },
};

contextBridge.exposeInMainWorld('PopcornAPI', PopcornAPI);

if (NODE_ENV === 'development') import('./devserver');
