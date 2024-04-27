// ! https://github.com/kernel-mod/electron/blob/2023-01-15-07-14-02/src/core/patchers/BrowserWindowPatcher.ts

import { join } from 'node:path';
import electron, { ipcMain } from 'electron';
import { ipc } from '#shared';

const preloadPath = join(__dirname, 'preload.js');

class ProxiedBrowserWindow extends electron.BrowserWindow {
  constructor(options: Electron.BrowserWindowConstructorOptions) {
    options.webPreferences ??= {};
    const originalPreload = options.webPreferences.preload!;

    options.webPreferences.preload = preloadPath;

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
