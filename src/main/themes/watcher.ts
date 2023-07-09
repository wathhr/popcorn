import chokidar from 'chokidar';
import { debounce } from 'ts-debounce';
import { themes, updateTheme } from '.';
import { sendToAll } from '../utils';
import config from '../config';
import { IPC } from '@common/constants';
import LoggerModule from '@common/logger';
const Logger = new LoggerModule('Main > Watcher > Themes', 'ansi');

const watcher = chokidar.watch([], {
  persistent: true,
  ignoreInitial: true,
  disableGlobbing: true,
  depth: 1,
});

const possibleKeys = [
  'json',
  'main',
  'splash',
];
watcher.on(
  'change',
  debounce((path) => {
    const id = Object.keys(themes).find((id) => {
      for (const key of possibleKeys) {
        if (themes[id][key] === path) return true;
      }
    });

    if (!id) {
      Logger.warn(`Didn't find a theme associated with "${path}".`);
      return;
    }

    updateTheme(themes[id].json);

    if (config.verbose) Logger.debug(`Theme changed: ${id}`);
    sendToAll(IPC.onThemeChange, { id: id, theme: themes[id] });
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
