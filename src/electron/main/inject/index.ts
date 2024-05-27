import { join } from 'node:path';
import electron from 'electron';
import { ipc } from '#shared';
import { config } from '#/config';

const preloadPath = join(__dirname, 'preload.js');

class BrowserWindow extends electron.BrowserWindow {
  constructor(options?: Electron.BrowserWindowConstructorOptions) {
    options ??= {};
    options.webPreferences ??= {};
    const originalPreload = options.webPreferences.preload ?? preloadPath;

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

// esbuild minifies the name of BrowserWindow which breaks things for some reason and this hack fixes it 👍
Object.defineProperty(BrowserWindow, 'name', { value: 'BrowserWindow' });

electron.ipcMain.on(ipc('$getWindowData'), (event) => {
  event.returnValue = event.sender.originalWindowData!;
});

const electronPath = require.resolve('electron');
delete require.cache[electronPath]!.exports;
require.cache[electronPath]!.exports = {
  ...electron,
  BrowserWindow,
};

if (!process.argv.includes('--no-start-original')) require('./start');
