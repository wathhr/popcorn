import { ipcRenderer, contextBridge } from 'electron';
import { IPC } from '@constants';
import LoggerModule from '@utils/logger';
const Logger = new LoggerModule('Preload');

const config = ipcRenderer.invoke(IPC.getConfig);

// prettier-ignore
const PopcornNative = {
  config: config,

  validateCSS: null,
  getThemes: () => ipcRenderer.invoke(IPC.getThemes),
  onThemeChange: (listener: (change: { id: string, theme: SimpleTheme }) => void) => ipcRenderer.on(IPC.onThemeChange, (_, change) => listener(change)),
  saveState: (id: string, state: boolean) => ipcRenderer.send(IPC.saveState, id, state),
  unwatchTheme: (id: string | Theme) => ipcRenderer.send(IPC.unwatchTheme, id),
  watchTheme: (id: string | Theme) => ipcRenderer.send(IPC.watchTheme, id),
};

try {
  const cssValidator = require('w3c-css-validator');
  PopcornNative.validateCSS = cssValidator.validateText;
} catch (e) {
  Logger.info('Disabled CSSValidator');
}

contextBridge.exposeInMainWorld('PopcornNative', PopcornNative);
