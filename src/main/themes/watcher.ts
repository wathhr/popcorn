import chokidar from 'chokidar';
import { debounce } from 'ts-debounce';
import { BrowserWindow } from 'electron';
import config from '../config';
import { IPC } from '@constants';
import { themes, updateTheme } from '.';
import LoggerModule from '@common/logger';
const Logger = new LoggerModule('Watcher > Themes', 'ansi');

const watcher = chokidar.watch([], {
  persistent: true,
  ignoreInitial: true,
  disableGlobbing: true,
  depth: 1,
});

watcher.on(
  'change',
  debounce((path) => {
    path = path.replace(/\\/g, '/');
    const id = Object.keys(themes).find((id) => {
      return themes[id].jsonLocation === path || themes[id].mainLocation === path;
    });

    if (!id) {
      Logger.warn(`Didn't find a theme associated with "${path}".`);
      return;
    }

    updateTheme(themes[id].jsonLocation);

    if (config.verbose) Logger.debug(`Theme changed: ${id}`);
    BrowserWindow.getAllWindows().forEach((window) =>
      window.webContents.send(IPC.onThemeChange, { id: id, theme: themes[id] })
    );
  }, 100)
);

export function watchThemeFile(theme: string) {
  watcher.add(theme);
  if (config.verbose) Logger.debug(`Watching theme file: ${theme}`);
}

export function unwatchThemeFile(theme: string) {
  watcher.add(theme);
  if (config.verbose) Logger.debug(`Stopped watching theme file: ${theme}`);
}
