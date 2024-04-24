// ! https://github.com/kernel-mod/electron/blob/2023-01-15-07-14-02/src/core/patchers/BrowserWindowPatcher.ts

import { join } from 'node:path';
import electron, { ipcMain } from 'electron';
import { ipc } from '#shared';

const preloadPath = join(__dirname, 'preload.js');

// Extending the class does not work.
const ProxiedBrowserWindow = new Proxy(electron.BrowserWindow, {
  construct(Target, args) {
    const options: electron.BrowserWindowConstructorOptions = args[0];

    options.webPreferences ??= {};
    const originalPreload = options.webPreferences.preload!;

    options.webPreferences.preload = preloadPath;

    // Any reason to have this off?
    options.webPreferences.experimentalFeatures = true;
    options.webPreferences.devTools = true;

    const window = new Target(options);

    // Put the location and the original preload in a place the main IPC can easily reach.
    window.webContents.originalWindowData = {
      originalPreload,
      windowOptions: options,
    };

    return window;
  },
});

ipcMain.on(ipc('$getWindowData'), (event) => {
  if (event.sender.originalWindowData) event.returnValue = event.sender.originalWindowData;
});

// Get the path to Electron to replace it.
// Even though we're in ESM this works because transpilation.
const electronPath = require.resolve('electron');
delete require.cache[electronPath]!.exports; // Delete Electron from the require cache because it's a getter.
// Replace it with the a new Electron that has the ProxiedBrowserWindow.
// TODO: Look at possible problems if getters aren't used.
require.cache[electronPath]!.exports = {
  ...electron,
  BrowserWindow: ProxiedBrowserWindow,
};

// eslint-disable-next-line ts/no-require-imports
if (!process.argv.includes('--no-start-original')) require('./start');
