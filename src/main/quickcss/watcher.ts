import chokidar from 'chokidar';
import { debounce } from 'ts-debounce';
import { BrowserWindow } from 'electron';
import config from '../config';
import { IPC } from '@constants';
import { quickCss, updateQuickCss } from '.';
import LoggerModule from '@common/logger';
const Logger = new LoggerModule('Watcher > QuickCSS', 'ansi');

const opts = {
  persistent: true,
  ignoreInitial: true,
  disableGlobbing: true,
};
export let watcher: chokidar.FSWatcher;
start();

export function start() {
  if (config.verbose) Logger.debug('Starting watcher...');

  watcher = chokidar.watch(config.quickCssDir, opts);
  watcher.on(
    'all',
    debounce((event, path) => {
      if (config.verbose) Logger.debug(event, path);

      updateQuickCss();
      BrowserWindow.getAllWindows().forEach((window) =>
        window.webContents.send(IPC.onQuickCssChange, quickCss)
      );
    }, 100)
  );
}

export function stop() {
  if (config.verbose) Logger.debug('Stopping watcher...');

  watcher.close();
  watcher = null;
}
