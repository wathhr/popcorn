import fg from 'fast-glob';
import config from '../config';
import { root } from '../utils';
import { resolvePath } from '../utils';
import { handleMeta } from './metaHandler';
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
  const meta = handleMeta(json);
  if (!meta) return;

  const enabled = config.enabled[meta.id] ?? false;
  themes[meta.id] = {
    enabled,
    json,
    ...meta,
  };

  if (enabled) {
    watchThemeFile(json);
    watchThemeFile(meta.main);
    if (meta.splash) watchThemeFile(meta.splash);
  }
}

import './ipc';
import './watcher';
