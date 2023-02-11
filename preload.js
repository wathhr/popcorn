const { contextBridge, ipcRenderer } = require('electron');
const { log } = require('./utils/logger/preload');
const { config } = require('./index.json');

const PopcornNative = {
  config: config,

  getThemes: () => ipcRenderer.invoke('POPCORN_GET_ALL'),
  getTheme: (theme) => ipcRenderer.invoke('POPCORN_GET', theme),
  saveSetting: (theme, setting, value) => ipcRenderer.send('POPCORN_SAVE', theme, setting, value),
  onThemeChanges: (listener) => ipcRenderer.on('POPCORN_CHANGE', (_, ...args) => listener(...args)),
};

try {
  const cssValidator = require('w3c-css-validator');
  PopcornNative.validateCSS = cssValidator.validateText;
} catch (e) {
  log('Disabled CSSValidator');
}

contextBridge.exposeInMainWorld('PopcornNative', PopcornNative);
