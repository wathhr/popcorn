import { ipcRenderer, contextBridge } from 'electron';
import { IPC } from '@constants';

export const PopcornNative = {
  getThemes: () => ipcRenderer.invoke(IPC.getThemes),
  saveState: (id: string, state: boolean) =>
    ipcRenderer.send(IPC.saveState, id, state),
  onThemeChange: (listener: (theme: SimpleTheme) => void) =>
    ipcRenderer.on(IPC.onThemeChange, (_, theme) => listener(theme)),
};

contextBridge.exposeInMainWorld('PopcornNative', PopcornNative);
