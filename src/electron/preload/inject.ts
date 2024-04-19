import { contextBridge, ipcRenderer } from 'electron';
import { ipc } from '#shared';

const windowData = ipcRenderer.sendSync(ipc('getWindowData'));

const hasContextIsolation = windowData.windowOptions.webPreferences.contextIsolation ?? true;
if (!hasContextIsolation) contextBridge.exposeInMainWorld = (key, value) => {
  // @ts-expect-error no idea why this errors
  window[key] = value;
};

// eslint-disable-next-line ts/no-require-imports
require(windowData.originalPreload);
