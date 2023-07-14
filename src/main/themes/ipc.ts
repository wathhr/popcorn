import fs from 'fs/promises';
import { join } from 'path';
import { ipcMain } from 'electron';
import { IPC } from '@common/constants';
import { root } from '../utils';
import { themes } from '.';
import { themeFileKeys } from './constants';
import { unwatchThemeFile, watchThemeFile } from './watcher';
import LoggerModule from '@common/logger';
const Logger = new LoggerModule('Main > IPC > Themes', 'ansi');

ipcMain.handle(IPC.getThemes, () => themes);

ipcMain.on(IPC.saveThemeState, (_, id: string, state: boolean) => {
  const configFile: Config = require(join(root, 'config.json')); // Requiring again in case the file was changed since launch

  for (const key of themeFileKeys) {
    const value = themes[id][key];
    if (value) (state ? watchThemeFile : unwatchThemeFile)(value);
  }

  configFile.enabled[id] = state;
  fs.writeFile(join(root, 'config.json'), JSON.stringify(configFile, null, 2))
    .then(() => {
      Logger.log(`Saved theme state "${state}" for ${id}.`);
    })
    .catch((e) => {
      Logger.error(`Failed to save theme state for "${id}":`, e);
    });
});
