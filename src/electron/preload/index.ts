import type { IpcRendererEvent } from 'electron';
import { contextBridge, ipcRenderer } from 'electron';
import { ipc, isKernel } from '&/common';
import type { ElectronAPI } from '~/types';

if (!isKernel) import('./inject');

// eslint-disable-next-line ts/no-explicit-any
type Handler<T extends (...args: any) => any> = (_: IpcRendererEvent, ...args: Parameters<T>) => ReturnType<T>;

const PopcornAPI: Omit<ElectronAPI, `$${string}`> = globalThis.PopcornAPI = {
  isBrowser: false,
  isSplash: (() => {
    if (/splash(?:\.html?|[\\/]\w+\.html?)$/i.test(location.href)) return true;

    // All literals in the array should be lowercase and use _ as word separators
    const possibleVars = ['splash', 'splash_screen'].flatMap(name => [
      name,
      name.toUpperCase(),
      `${name[0]!.toUpperCase()}${name.slice(1)}`,
      ...(name.includes('_')
        ? [
          name.replace(/_(\w)/g, (_, letter) => letter.toUpperCase()),
          `${name[0]!.toUpperCase()}${name.slice(1)}`.replace(/_(\w)/g, (_, letter) => letter.toUpperCase()),
        ]
        : []),
    ]).flatMap(name => [
      name,
      `_${name}`,
      `__${name}`,
      `_${name}_`,
      `__${name}__`,
    ]);

    for (const varName of possibleVars) if (varName in window) return true;

    return false;
  })(),

  getThemes: () => ipcRenderer.invoke(ipc('getThemes')),
  getConfig: () => ipcRenderer.sendSync(ipc('getConfig')),
  getMainLogs: () => ipcRenderer.invoke(ipc('getMainLogs')),
  checkUpdate: () => ipcRenderer.invoke(ipc('checkUpdate')),
  installUpdate: version => ipcRenderer.invoke(ipc('installUpdate'), version),

  async getUserStyles() {
    return PopcornAPI.getConfig().userStyles;
  },

  onSaveState(_handler) {
    const handler: Handler<typeof _handler> = (_, ...args) => _handler(...args);
    ipcRenderer.on(ipc('saveState'), handler);
    return () => ipcRenderer.off(ipc('saveState'), handler);
  },

  onSendLog(_handler) {
    const handler: Handler<typeof _handler> = (_, ...args) => _handler(...args);
    ipcRenderer.on(ipc('sendLog'), handler);
    return () => ipcRenderer.off(ipc('sendLog'), handler);
  },
};

contextBridge.exposeInMainWorld('PopcornAPI', PopcornAPI);

if (NODE_ENV === 'development') import('./devserver');
