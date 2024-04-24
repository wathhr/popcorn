import { join } from 'node:path';
import { existsSync, readJsonSync, writeJson } from 'fs-extra';
import { CreateLogger, root } from '#/common';
import { ConfigChecker } from '#types';

import './ipc';

const Logger = new CreateLogger('Config');

const defaultConfig: Required<Popcorn.Config> = {
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

export const config = ((): Required<Popcorn.Config> => {
  const configFile = join(root, 'config.json');

  if (!existsSync(configFile)) {
    Logger.info('config.json not found, creating one.');
    writeJson(configFile, {
      $schema: `https://github.com/wathhr/popcorn/releases/download/v${pkg.version}/config.json`,
      ...defaultConfig,
    }, { spaces: 2 });

    return defaultConfig;
  }

  try {
    const json = readJsonSync(configFile);
    const errors = [...ConfigChecker.Errors(json)];

    if (errors.length > 0) {
      Logger.error('Invalid config.json:', errors);
      return defaultConfig;
    }

    delete json.$schema;
    return { ...defaultConfig, ...json };
  } catch (e) {
    Logger.error('Failed to read config.json:', e);
    return defaultConfig;
  }
})();
