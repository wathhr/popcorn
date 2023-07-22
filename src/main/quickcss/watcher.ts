import chokidar from 'chokidar';
import config from '../config';
import { IPC } from '@common/constants';
import { quickCss, updateQuickCss } from '.';
import { sendToAll } from '../utils';
import LoggerModule from '@common/logger';
const Logger = new LoggerModule('Main > Watcher > QuickCSS', 'ansi');

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
  watcher.on('all', (event, path) => {
    if (config.verbose) Logger.debug(event, path);

    updateQuickCss();
    sendToAll(IPC.onQuickCssChange, quickCss);
  });
}

export function stop() {
  if (config.verbose) Logger.debug('Stopping watcher...');

  watcher.close();
  watcher = null;
}
