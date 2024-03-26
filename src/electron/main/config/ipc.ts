import { ipcMain } from 'electron';
import { config } from '.';
import { ipc } from '#shared';

ipcMain.on(ipc('getConfig'), (event) => {
  event.returnValue = config;
});
