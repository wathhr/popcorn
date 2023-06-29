import fs from 'fs';
import { join } from 'path';
import { ipcMain } from 'electron';
import { IPC } from '@common/constants';

ipcMain.on(IPC.getWindowData, (event) => {
  // @ts-expect-error kernelWindowData is injected by Kernel
  event.returnValue = event.sender.kernelWindowData;
});

ipcMain.handle(IPC.getStyles, () => {
  return fs.readFileSync(join(__dirname, 'renderer.css'), 'utf8');
});

import './config';
import './protocol';
import './quickcss';
import './themes';
