import { join } from 'node:path';
import electron, { ipcMain } from 'electron';
import { ipc } from '#shared';
import { config } from '#/config';

const preloadPath = join(__dirname, 'preload.js');

class ProxiedBrowserWindow extends electron.BrowserWindow {
  constructor(options: Electron.BrowserWindowConstructorOptions) {
    options.webPreferences ??= {};
    const originalPreload = options.webPreferences.preload!;

    options.webPreferences.preload = preloadPath;
    if (config.transparencyType !== 'none') {
      options.backgroundColor = '#00000000';
      options.vibrancy = 'fullscreen-ui';
      options.backgroundMaterial = config.transparencyType;
    }

    super(options);
    this.webContents.originalWindowData = {
      originalPreload,
      windowOptions: options,
    };
  }
}

ipcMain.on(ipc('$getWindowData'), (event) => {
  if (event.sender.originalWindowData) event.returnValue = event.sender.originalWindowData;
});

const electronPath = require.resolve('electron');
delete require.cache[electronPath]!.exports;
require.cache[electronPath]!.exports = {
  ...electron,
  BrowserWindow: ProxiedBrowserWindow,
};

if (!process.argv.includes('--no-start-original')) require('./start');
