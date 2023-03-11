import { join } from 'path';
import fs from 'fs';
import fg from 'fast-glob';
import { requireFile } from '@utils/requireFile';
import { resolvePath } from '@utils/resolvePath';
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
for (const theme of themeJsons) {
  const meta: Meta = require(theme);
  const mainLocation = join(theme, '..', meta.main);
  themeMappings[meta.id] = mainLocation;

  themes[meta.id] = {
    enabled: config.enabled[meta.id] ?? true,
    jsonLocation: theme,
    mainLocation: mainLocation,
    css: fs.readFileSync(mainLocation, 'utf8'),
  }
}

export default themes;
