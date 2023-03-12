import { join } from 'path';
import fs from 'fs';
import fg from 'fast-glob';
import { requireFile } from './common/requireFile';
import { resolvePath } from './common/resolvePath';
import LoggerModule from '@utils/logger';
const Logger = new LoggerModule('Main', 'ansi');

const root = join(__dirname, '../');
const config: Config = requireFile(join(root, 'config.json'));
const resolvedThemes = config.themeDirs.map((path: string) =>
  resolvePath(path).replace(/\\/g, '/')
);

export const themeJsons = fg.sync(resolvedThemes, {
  absolute: true,
  cwd: root,
});

Logger.log('Detected themes:', themeJsons);

export const themeMappings = {};

const themes = {};
for (const json of themeJsons) {
  const meta: Meta = require(json);
  const mainLocation = join(json, '..', meta.main);
  themeMappings[meta.id] = mainLocation;

  const theme: SimpleTheme = {
    enabled: config.enabled[meta.id] ?? true,
    jsonLocation: json,
    css: fs.readFileSync(mainLocation, 'utf8'),
  };
  themes[meta.id] = theme;
}

export default themes;
