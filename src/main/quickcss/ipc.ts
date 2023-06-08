import fs from 'fs';
import { join } from 'path';
import { ipcMain, BrowserWindow } from 'electron';
import config from '../config';
import { IPC } from '@constants';
import { quickCss, updateQuickCss } from '.';
import { start, stop } from './watcher';
import { hasValue } from '../utils';
import LoggerModule from '@common/logger';
const Logger = new LoggerModule('IPC > QuickCSS', 'ansi');

ipcMain.handle(IPC.getQuickCss, () => quickCss);

ipcMain.on(IPC.createQuickCssNode, (event, location: string, type: 'file' | 'folder') => {
  if (config.verbose) Logger.debug('Received node creation message from', event.sender.getTitle());

  let i = 0;
  let name: string;
  while (!name) {
    const possibleName = type + (i ? '-' + i++ : '') + (type === 'folder' ? '' : '.css');
    !hasValue(quickCss, 'location', join(location, possibleName)) && (name = possibleName);
  }

  const actualLocation = join(config.quickCssDir, location, name);
  try {
    if (type === 'folder') fs.mkdirSync(actualLocation);
    else fs.openSync(actualLocation, 'wx');
    Logger.log(`Successfully created ${type} ${name}.`);
  } catch (e) {
    Logger.error(`Failed to create ${type} ${name}:`, e);
  }
});

ipcMain.on(IPC.deleteQuickCssNode, (event, location: string) => {
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

  try {
    fs.removeSync(actualLocation);
    Logger.log(`Successfully deleted ${location}.`);
  } catch (e) {
    Logger.error(`Failed to delete ${location}:`, e);
  }
});

ipcMain.on(IPC.renameQuickCssNode, (event, location: string, newName: string) => {
  if (config.verbose) Logger.debug('Received rename message from', event.sender.getTitle());

  const actualLocation = join(config.quickCssDir, location);
  const actualNewName = join(actualLocation, '..', newName);

  // Watcher needs to be stopped first otherwise it throws an error (on windows)
  stop();
  try {
    fs.renameSync(actualLocation, actualNewName);
    Logger.log(`Successfully renamed ${location} to ${newName}.`);
  } catch (e) {
    Logger.error(`Failed to rename ${location} to ${newName}:`, e);
  } finally {
    start();
    updateQuickCss();
    BrowserWindow.getAllWindows().forEach((window) => window.webContents.send(IPC.onQuickCssChange, quickCss));
  }
});

ipcMain.on(IPC.updateQuickCssFile, (event, location: string, content: string) => {
  if (config.verbose) Logger.debug('Received QuickCSS file save message from', event.sender.getTitle());

  if (!hasValue(quickCss, 'location', location)) {
    Logger.error(`${location} isn't a valid QuickCSS file.`);
    return;
  }

  const actualLocation = join(config.quickCssDir, location);
  try {
    fs.writeFileSync(actualLocation, content);
    Logger.log(`Successfully saved ${location}.`);
  } catch (e) {
    Logger.error(`Failed to save ${location}:`, e);
  }
});
