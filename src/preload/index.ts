import { ipcRenderer, contextBridge } from 'electron';
import { IPC } from '@constants';
import LoggerModule from '@common/logger';
const Logger = new LoggerModule('Preload');

const config: Promise<Config> = ipcRenderer.invoke(IPC.getConfig);

const PopcornNative: PopcornNative = {
  // Misc
  config: config,
  onStatusMessage: (listener) => ipcRenderer.on(IPC.statusMessage, (_, message) => listener(message)),
  isSplash: isSplash(),

  // Themes
  getThemes: () => ipcRenderer.invoke(IPC.getThemes),
  onThemeChange: (listener) => ipcRenderer.on(IPC.onThemeChange, (_, change) => listener(change)),
  saveThemeState: (id, state) => ipcRenderer.send(IPC.saveThemeState, id, state),

  // QuickCSS
  getQuickCss: () => ipcRenderer.invoke(IPC.getQuickCss),
  onQuickCssChange: (listener) => ipcRenderer.on(IPC.onQuickCssChange, (_, updated) => listener(updated)),
  createQuickCssNode: (location, type) => ipcRenderer.send(IPC.createQuickCssNode, location, type),
  deleteQuickCssNode: (location) => ipcRenderer.send(IPC.deleteQuickCssNode, location),
  renameQuickCssNode: (location, newLocation) => ipcRenderer.send(IPC.renameQuickCssNode, location, newLocation),
  updateQuickCssFile: (location, content) => ipcRenderer.send(IPC.updateQuickCssFile, location, content),
};

try {
  const cssValidator: typeof import('w3c-css-validator') = require('w3c-css-validator');
  PopcornNative.validateCSS = cssValidator.validateText;
} catch (e) {
  Logger.info('Disabled CSS Validator');
}

contextBridge.exposeInMainWorld('PopcornNative', PopcornNative);

ipcRenderer.on(IPC.log, (_, type, ...message: any[]) => {
  const Logger = new LoggerModule('Main');

  Logger[type](...message);
});

function isSplash() {
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
    '__SPLASHSCREEN__'
  ];

  for (const varName of possibleVars) {
    if (window[varName]) return true;
  }

  const { windowOptions } = ipcRenderer.sendSync(IPC.getWindowData);
  if (!windowOptions.webPreferences.nativeWindowOpen) return true;

  return false;
}
