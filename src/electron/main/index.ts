import { join } from 'path';
import { existsSync, readJsonSync, writeJson } from 'fs-extra';
import { createLogger, root } from '#/common';
import { ConfigChecker } from '#types';

const Logger = new createLogger();

Logger.info('Starting...');

const defaultConfig: Required<Config> = {
  enabled: {},
  hotkey: 'ctrl+shift+p',
  quickCssDir: './quickcss',
  themeDirs: [
    './themes/',
    ...(process.platform === 'win32'
      ? ['%USERPROFILE%/discord/themes/']
      : ['$HOME/discord/themes/']
    ),
  ],
  verbose: process.argv.includes('--verbose') || NODE_ENV === 'development',
};

export const config = ((): Required<Config> => {
  const configFile = join(root, 'config.json');

  if (!existsSync(configFile)) {
    Logger.info('config.json not found, creating one.');
    writeJson(configFile, defaultConfig, { spaces: 2 });

    return defaultConfig;
  }

  try {
    const json = readJsonSync(configFile);
    const errors = ConfigChecker.Errors(json);

    if (errors) {
      Logger.error('Invalid config.json:', errors);
      return defaultConfig;
    }

    return { ...defaultConfig, ...json };
  } catch (e) {
    Logger.error('Failed to read config.json:', e);
    return defaultConfig;
  }
})();

Logger.debug(config);
