import { join } from 'path';
import fg from 'fast-glob';
import config from '../config';
import { root } from '../utils';
import { resolvePath } from '../utils';
import { watchThemeFile } from './watcher';
import LoggerModule from '@common/logger';
const Logger = new LoggerModule('Main', 'ansi');

const resolvedThemes = config.themeFiles.map(
  (path: string) => resolvePath(path).replace(/\\/g, '/') // fg doesn't like backslashes
);
const themeJsons = fg.sync(resolvedThemes, {
  absolute: true,
  cwd: root,
});

Logger.log('Detected themes:', themeJsons);

export const themes = {} as { [id: string]: SimpleTheme };
for (const json of themeJsons) {
  if (!json.endsWith('.json')) continue;
  updateTheme(json);
}

export function updateTheme(json: string) {
  const meta: Meta = require(json);
  const mainLocation = join(json, '..', meta.main).replace(/\\/g, '/');
  const enabled = config.enabled[meta.id] ?? false;

  const theme: SimpleTheme = {
    enabled: enabled,
    id: meta.id,
    jsonLocation: json,
    mainLocation: mainLocation,
  };
  themes[meta.id] = theme;

  if (enabled) {
    watchThemeFile(json);
    watchThemeFile(mainLocation);
  }
}

import './ipc';
import './watcher';
