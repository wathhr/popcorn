import { ipcMain } from 'electron';
import themes from './getThemes';
import { IPC } from '@constants';
import LoggerModule from '@utils/logger';
const Logger = new LoggerModule('IPC', 'ansi');

ipcMain.handle(IPC.getThemes, () => {
  return themes;
});
