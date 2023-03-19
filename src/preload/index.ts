import { ipcRenderer, contextBridge } from 'electron';
import { IPC } from '@constants';

const config = ipcRenderer.invoke(IPC.getConfig);

// prettier-ignore
export const PopcornNative = {
  config: config,

  getThemes: () => ipcRenderer.invoke(IPC.getThemes),
  saveState: (id: string, state: boolean) => ipcRenderer.send(IPC.saveState, id, state),

  onThemeChange: (listener: (change: { id: string, theme: SimpleTheme }) => void) => ipcRenderer.on(IPC.onThemeChange, (_, change) => listener(change)),

  watchTheme: (id: string | Theme) => ipcRenderer.send(IPC.watchTheme, id),
  unwatchTheme: (id: string | Theme) => ipcRenderer.send(IPC.unwatchTheme, id),
};

contextBridge.exposeInMainWorld('PopcornNative', PopcornNative);
