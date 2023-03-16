import fs from 'fs';
import { join } from 'path';
import fg from 'fast-glob';
import { requireFile } from './common/requireFile';
import { resolvePath } from './common/resolvePath';
import { root } from './common/misc';
import { watchThemeFile } from './watch';
import LoggerModule from '@utils/logger';
const Logger = new LoggerModule('Main', 'ansi');

// TODO: Move this to index.ts, importing the below tries to read the file first
if (!fs.existsSync(join(root, 'config.json'))) {
  Logger.warn(`No config file found, creating one.`);
  fs.writeFileSync(
    join(root, 'config.json'),
    `{
  "hotkey": "ctrl+shift+p",
  "themeDirs": [
    "./themes/*/index.json",
    "%USERPROFILE%/discord/themes/*/index.json",
    "$HOME/discord/themes/*/index.json"
  ]
}`
  );
}

const config: Config = requireFile(join(root, 'config.json'));
export default config;

const resolvedThemes = config.themeDirs.map((path: string) =>
  resolvePath(path).replace(/\\/g, '/') // fg doesn't like backslashes
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
    enabled: config.enabled[meta.id] ?? true, // TODO: change this to false whenever UI is added
    jsonLocation: json,
    mainLocation: mainLocation,
    css: fs.readFileSync(mainLocation, 'utf8'),
  };
  themes[meta.id] = theme;
}
