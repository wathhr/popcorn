import fs from 'fs';
import { join } from 'path';
import { ipcMain } from 'electron';
import { themes } from './themes';
import { IPC } from '@constants';
import { requireFile } from './common/requireFile';
import { root } from './common/misc';
import { watchThemeFile, unwatchThemeFile } from './watch';
import LoggerModule from '@utils/logger';
const Logger = new LoggerModule('IPC', 'ansi');

ipcMain.handle(IPC.getThemes, () => themes);

ipcMain.on(IPC.saveState, (_, id: string, state: boolean) => {
  const config = requireFile(join(root, 'config.json'));

  config.enabled[id] = state;
  fs.writeFile(join(root, 'config.json'), JSON.stringify(config, null, 2), (err) => {
    if (err) Logger.error(`Failed to save setting for "${id}":`, err);
    else Logger.log(`Saved state "${state}" for ${id}.`);
  });
});

ipcMain.on(IPC.watchTheme, (_, id: string) => {
  const theme = themes[id];
  watchThemeFile(theme.jsonLocation);
  watchThemeFile(theme.mainLocation);
});

ipcMain.on(IPC.unwatchTheme, (_, id: string) => {
  const theme = themes[id];
  unwatchThemeFile(theme.jsonLocation);
  unwatchThemeFile(theme.mainLocation);
});
