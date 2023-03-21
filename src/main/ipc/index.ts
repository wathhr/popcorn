import fs from 'fs';
import { join } from 'path';
import { ipcMain } from 'electron';
import config from '../config';
import { IPC } from '@constants';
import { root } from '../common/misc';
import { themes } from '../themes';
import LoggerModule from '@utils/logger';
const Logger = new LoggerModule('IPC', 'ansi');

ipcMain.handle(IPC.getConfig, () => config);

ipcMain.handle(IPC.getThemes, () => themes);

ipcMain.on(IPC.saveState, (_, id: string, state: boolean) => {
  const config = require(join(root, 'config.json')); // Requiring again in case the file was changed since launch

  config.enabled[id] = state;
  fs.writeFile(join(root, 'config.json'), JSON.stringify(config, null, 2), (err) => {
    if (err) Logger.error(`Failed to save setting for "${id}":`, err);
    else Logger.log(`Saved state "${state}" for ${id}.`);
  });
});

import './watch';
