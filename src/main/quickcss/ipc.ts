import fs from 'fs/promises';
import { join } from 'path';
import { ipcMain } from 'electron';
import config from '../config';
import { IPC, MESSAGES } from '@common/constants';
import { quickCss, updateQuickCss } from '.';
import { start, stop } from './watcher';
import { hasValue, sendToAll } from '../utils';
import LoggerModule from '@common/logger';
const Logger = new LoggerModule('Main > IPC > QuickCSS', 'ansi');

ipcMain.handle(IPC.getQuickCss, () => quickCss);

ipcMain.on(IPC.createQuickCssNode, (event, location: string, type: 'file' | 'folder') => {
  if (config.verbose) Logger.debug('Received node creation message from', event.sender.getTitle());

  let i = 0;
  let name: string;
  while (!name) {
    const possibleName = type + (i ? '-' + i++ : '') + (type === 'folder' ? '' : '.css');
    hasValue(quickCss, 'location', join(location, possibleName)) || (name = possibleName);
  }

  const actualLocation = join(config.quickCssDir, location, name);

  let success = false;
  (type === 'file' ? fs.open(actualLocation, 'wx') : fs.mkdir(actualLocation))
    .then(() => {
      Logger.log(`Successfully created ${type} ${name}.`);
      success = true;
    })
    .catch((e) => {
      Logger.error(`Failed to create ${type} ${name}:`, e);
    })
    .finally(() => {
      event.reply(IPC.statusMessage, {
        type: MESSAGES.quickCss.created,
        success,
        data: {
          type,
          location: name
        }
      });
    });
});

ipcMain.on(IPC.deleteQuickCssNode, async (event, location: string) => {
  if (config.verbose) Logger.debug('Received QuickCSS file remove message from', event.sender.getTitle());

  if (!hasValue(quickCss, 'location', location)) {
    Logger.error(`${location} isn't a valid QuickCSS node.`);
    return;
  }

  const actualLocation = join(config.quickCssDir, location);
  if (actualLocation === config.quickCssDir) {
    Logger.error('Can\'t delete the base folder.');
    return;
  }

  const type = await fs.lstat(actualLocation).then((stat) => stat.isDirectory() ? 'folder' : 'file');

  let success = false;
  fs.rm(actualLocation, { recursive: true })
    .then(() => {
      Logger.log(`Successfully deleted ${location}.`);
      success = true;
    })
    .catch((e) => {
      Logger.error(`Failed to delete ${location}:`, e);
    })
    .finally(() => {
      event.reply(IPC.statusMessage, {
        type: MESSAGES.quickCss.deleted,
        success,
        data: {
          type,
          location
        }
      });
    });
});

ipcMain.on(IPC.renameQuickCssNode, (event, location: string, newName: string) => {
  if (config.verbose) Logger.debug('Received rename message from', event.sender.getTitle());

  const newLocation = join(location, '..', newName);
  const actualLocation = join(config.quickCssDir, location);
  const actualNewLocation = join(config.quickCssDir, newLocation);

  stop(); // Watcher needs to be stopped first otherwise it throws an error (on windows)

  let success = false;
  fs.rename(actualLocation, actualNewLocation)
    .then(() => {
      Logger.log(`Successfully renamed ${location} to ${newName}.`);
      success = true;

      updateQuickCss();
      sendToAll(IPC.onQuickCssChange, quickCss);
    })
    .catch((e) => {
      Logger.error(`Failed to rename ${location} to ${newName}:`, e);
    })
    .finally(() => {
      start();
      event.reply(IPC.statusMessage, {
        type: MESSAGES.quickCss.renamed,
        success,
        data: {
          oldLocation: location,
          newLocation: newLocation
        }
      });
    });
});

ipcMain.on(IPC.updateQuickCssFile, (event, location: string, content: string) => {
  if (config.verbose) Logger.debug('Received QuickCSS file save message from', event.sender.getTitle());

  if (!hasValue(quickCss, 'location', location)) {
    Logger.error(`${location} isn't a valid QuickCSS file.`);
    return;
  }

  const actualLocation = join(config.quickCssDir, location);

  let success = false;
  fs.writeFile(actualLocation, content)
    .then(() => {
      Logger.log(`Successfully saved ${location}.`);
      success = true;
    })
    .catch((e) => {
      Logger.error(`Failed to save ${location}:`, e);
    })
    .finally(() => {
      event.reply(IPC.statusMessage, {
        type: MESSAGES.quickCss.updated,
        success,
        data: location
      });
    });
});
