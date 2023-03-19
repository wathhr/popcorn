import fs from 'fs';
import { join } from 'path';
import { ipcMain } from 'electron';
import config from './config';
import { IPC } from '@constants';
import { requireFile } from './common/requireFile';
import { root } from './common/misc';
import { themes } from './themes';
import { watchThemeFile, unwatchThemeFile } from './watch';
import LoggerModule from '@utils/logger';
const Logger = new LoggerModule('IPC', 'ansi');

ipcMain.handle(IPC.getConfig, () => config);

ipcMain.handle(IPC.getThemes, () => themes);

ipcMain.on(IPC.saveState, (_, id: string, state: boolean) => {
  const config = requireFile(join(root, 'config.json'));

  config.enabled[id] = state;
  fs.writeFile(join(root, 'config.json'), JSON.stringify(config, null, 2), (err) => {
    if (err) Logger.error(`Failed to save setting for "${id}":`, err);
    else Logger.log(`Saved state "${state}" for ${id}.`);
  });
});

ipcMain.on(IPC.watchTheme, (_, theme: string) => {
  try {
    const themeData = JSON.parse(theme);
    watchThemeFile(themeData.jsonLocation);
    watchThemeFile(themeData.mainLocation);
  } catch (e) {
    watchThemeFile(theme);
  }
});

ipcMain.on(IPC.unwatchTheme, (_, theme: string) => {
  try {
    const themeData = JSON.parse(theme);
    unwatchThemeFile(themeData.jsonLocation);
    unwatchThemeFile(themeData.mainLocation);
  } catch (e) {
    unwatchThemeFile(theme);
  }
});
