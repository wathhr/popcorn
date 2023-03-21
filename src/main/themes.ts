import fs from 'fs';
import { join } from 'path';
import fg from 'fast-glob';
import config from './config';
import { root } from './common/misc';
import { resolvePath } from './common/resolvePath';
import { watchThemeFile } from './watch';
import LoggerModule from '@utils/logger';
const Logger = new LoggerModule('Main', 'ansi');

const resolvedThemes = config.themeDirs.map(
  (path: string) => resolvePath(path).replace(/\\/g, '/') // fg doesn't like backslashes
);
const themeJsons = fg.sync(resolvedThemes, {
  absolute: true,
  cwd: root,
});

Logger.log('Detected themes:', themeJsons);

export const themes = {} as { [id: string]: SimpleTheme };
for (const json of themeJsons) {
  // TODO: remove this duplicate code somehow
  const meta: Meta = require(json);
  const mainLocation = join(json, '..', meta.main).replace(/\\/g, '/');
  const enabled = config.enabled[meta.id] ?? true;

  updateTheme(json);
  if (enabled) {
    watchThemeFile(json);
    watchThemeFile(mainLocation);
  }
}

export function updateTheme(json: string) {
  const meta: Meta = require(json);
  const mainLocation = join(json, '..', meta.main).replace(/\\/g, '/');

  const theme: SimpleTheme = {
    css: fs.readFileSync(mainLocation, 'utf8'),
    enabled: config.enabled[meta.id] ?? false,
    id: meta.id,
    jsonLocation: json,
    mainLocation: mainLocation,
  };
  themes[meta.id] = theme;
}
