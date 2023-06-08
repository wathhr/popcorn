import fs from 'fs';
import { join } from 'path';
import { ipcMain } from 'electron';
import config from '../config';
import { IPC } from '@constants';
import { root } from '../utils';
import { themes } from '.';
import LoggerModule from '@common/logger';
const Logger = new LoggerModule('IPC', 'ansi');

ipcMain.handle(IPC.getThemes, () => themes);

ipcMain.on(IPC.saveThemeState, (event, id: string, state: boolean) => {
  if (config.verbose)
    Logger.debug('Received save theme state message from', event.sender.getTitle());

  const configFile: Config = require(join(root, 'config.json')); // Requiring again in case the file was changed since launch

  configFile.enabled[id] = state;
  try {
    fs.writeFileSync(join(root, 'config.json'), JSON.stringify(configFile, null, 2));
    Logger.log(`Saved theme state "${state}" for ${id}.`);
  } catch (e) {
    Logger.error(`Failed to save theme state for "${id}":`, e);
  }
});
