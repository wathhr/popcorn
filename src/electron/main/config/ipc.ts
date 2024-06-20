import { ipcMain } from 'electron';
import { config } from '.';
import { ipc } from '&/common';

ipcMain.on(ipc('getConfig'), (event) => {
  event.returnValue = config;
});
