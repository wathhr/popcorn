import { join } from 'node:path';
import { existsSync, readFileSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import { CreateLogger, configDir, resolvePath } from '#/common';
import { type Config, ConfigChecker } from '#types';

import './ipc';

const Logger = new CreateLogger('Config');

export const defaultConfig: Required<Config> = {
  $schema: `https://github.com/wathhr/popcorn/releases/download/v${pkg.version}/config.json`,
  configVersion: 1,
  enabled: {},
  hotkey: 'ctrl+shift+p',
  quickCssDir: join(configDir, 'quickcss'),
  themeDirs: [
    join(configDir, 'themes/'),
    ...(process.platform === 'win32'
      ? [resolvePath('%USERPROFILE%/discord/themes/')]
      : [resolvePath('$HOME/discord/themes/')]),
  ],
  verbose: process.argv.includes('--verbose') || NODE_ENV === 'development',
  transparencyType: 'none',
  userStyles: [],
};

export const config = ((): Required<Config> => {
  const configFile = join(configDir, 'config.json');

  if (!existsSync(configFile)) {
    Logger.info('config.json not found, creating one.');
    writeFile(configFile, JSON.stringify(defaultConfig, null, 2));

    return defaultConfig;
  }

  try {
    const json: Config = JSON.parse(readFileSync(configFile, 'utf8'));
    const errors = [...ConfigChecker.Errors(json)];

    if (errors.length > 0) {
      Logger.error('Invalid config.json:', errors);
      return defaultConfig;
    }

    json.quickCssDir &&= resolvePath(json.quickCssDir);
    json.themeDirs &&= json.themeDirs.map(d => resolvePath(d));

    return { ...defaultConfig, ...json };
  } catch (e) {
    Logger.error('Failed to read config.json:', e);
    return defaultConfig;
  }
})();
