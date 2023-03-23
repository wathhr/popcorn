import { ipcMain } from 'electron';
import config from '../config';
import { IPC } from '@constants';
import { watchThemeFile, unwatchThemeFile } from '../watch';
import LoggerModule from '@utils/logger';
const Logger = new LoggerModule('IPC', 'ansi');

ipcMain.on(IPC.watchTheme, (event, theme: string) => {
  if (config.verbose)
    Logger.debug('Received theme watch message from', event.sender.getTitle());
  try {
    const themeData = JSON.parse(theme);
    watchThemeFile(themeData.jsonLocation);
    watchThemeFile(themeData.mainLocation);
  } catch (e) {
    watchThemeFile(theme);
  }
});

ipcMain.on(IPC.unwatchTheme, (event, theme: string) => {
  if (config.verbose)
    Logger.debug('Received halt of theme watch message from', event.sender.getTitle());
  try {
    const themeData = JSON.parse(theme);
    unwatchThemeFile(themeData.jsonLocation);
    unwatchThemeFile(themeData.mainLocation);
  } catch (e) {
    unwatchThemeFile(theme);
  }
});
