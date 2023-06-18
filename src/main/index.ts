import fs from 'fs';
import { join } from 'path';
import { app, ipcMain } from 'electron';
import { IPC } from '@common/constants';

// Inject CSS for the in-app UI
app.on('web-contents-created', (_, webContents) => {
  webContents.on('did-finish-load', () => {
    webContents.insertCSS(fs.readFileSync(join(__dirname, 'renderer.css'), 'utf8'));
  });
});

ipcMain.on(IPC.getWindowData, (event) => {
  // @ts-expect-error kernelWindowData is injected by Kernel
  event.returnValue = event.sender.kernelWindowData;
});

import './config';
import './protocol';
import './quickcss';
import './themes';
