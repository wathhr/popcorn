import { resolve, isAbsolute } from 'path';
import fg from 'fast-glob';
import config from '../config';
import { root } from '../utils';
import { resolvePath } from '../utils';
import { watchThemeFile } from './watcher';
import LoggerModule from '@common/logger';
const Logger = new LoggerModule('Main > Themes', 'ansi');

const resolvedThemes = config.themeFiles.map((path) => resolvePath(path).replace(/\\/g, '/'));
const themeJsons = fg.sync(resolvedThemes, {
  absolute: true,
  cwd: root,
}).map((path) => path.replace(/\//g, '\\'));

Logger.log('Detected themes:', themeJsons);

export const themes = {} as { [id: string]: SimpleTheme };
for (const json of themeJsons) {
  if (!json.endsWith('.json')) continue;
  updateTheme(json);
}

export function updateTheme(json: string) {
  const pathKeys = [
    'main',
    'splash',
  ];

  const meta: Meta = require(json);
  const modifiedMeta: Meta = { ...meta };
  for (const key in meta) {
    // TODO: Disallow ../
    if (pathKeys.includes(key)) {
      if (isAbsolute(meta[key])) {
        Logger.error(`"${key}" must be a relative path. (${meta[key]})`);
        continue;
      }
      const location: string = modifiedMeta[key] = resolve(json, '..', meta[key]);

      const fileExtension = location.split('.').pop();
      if (fileExtension !== 'css')
        Logger.warn(`Unsupported file extension "${fileExtension}". (${location})`);
    }
  }
  const enabled = config.enabled[meta.id] ?? false;

  const theme: SimpleTheme = {
    enabled,
    json,
    ...modifiedMeta,
  };
  themes[meta.id] = theme;

  if (enabled) {
    watchThemeFile(json);
    watchThemeFile(modifiedMeta.main);
    if (meta?.splash) watchThemeFile(modifiedMeta.splash);
  }
}

import './ipc';
import './watcher';
