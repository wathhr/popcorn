import chokidar from 'chokidar';
import { BrowserWindow } from 'electron';
import { IPC } from '@constants';
import { themes, updateTheme } from './config';
import LoggerModule from '@utils/logger';
const Logger = new LoggerModule('Watcher', 'ansi');

const themeWatcher = chokidar.watch([], {
  persistent: true,
  ignoreInitial: true,
  disableGlobbing: true,
  depth: 1,
});

themeWatcher.on('change', (path) => {
  const id = Object.keys(themes).find((id) => {
    return themes[id].jsonLocation === path || themes[id].mainLocation === path;
  });

  updateTheme(themes[id].jsonLocation);

  Logger.log(`Theme changed: ${id}`);
  BrowserWindow.getAllWindows().forEach((window) =>
    window.webContents.send(IPC.onThemeChange, themes[id])
  );
});

export function watchThemeFile(path: string) {
  Logger.log(`Watching theme file: ${path}`);
  themeWatcher.add(path);
}

export function unwatchThemeFile(path: string) {
  Logger.log(`Stopped watching theme file: ${path}`);
  themeWatcher.unwatch(path);
}
