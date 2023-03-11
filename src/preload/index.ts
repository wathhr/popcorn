import { ipcRenderer, contextBridge } from 'electron';
import { IPC } from '@constants';
import LoggerModule from '@utils/logger';
const Logger = new LoggerModule('Preload');

export const PopcornNative = {
  getThemes: () => ipcRenderer.invoke(IPC.getThemes),
};

contextBridge.exposeInMainWorld('PopcornNative', PopcornNative);
