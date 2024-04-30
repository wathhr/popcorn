import { join } from 'node:path';
import { existsSync, readFileSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import { CreateLogger, configDir, resolvePath } from '#/common';
import { ConfigChecker } from '#types';
import type { Config } from '~/types';

import './ipc';

const Logger = new CreateLogger('Config');

export const defaultConfig: Required<Config> = {
  enabled: {},
  hotkey: 'ctrl+shift+p',
  quickCssDir: './quickcss',
  themeDirs: [
    './themes/',
    ...(process.platform === 'win32'
      ? [resolvePath('%USERPROFILE%/discord/themes/')]
      : [resolvePath('$HOME/discord/themes/')]),
  ],
  verbose: process.argv.includes('--verbose') || NODE_ENV === 'development',
};

export const config = ((): Required<Config> => {
  const configFile = join(configDir, 'config.json');

  if (!existsSync(configFile)) {
    Logger.info('config.json not found, creating one.');
    writeFile(configFile, JSON.stringify({
      $schema: `https://github.com/wathhr/popcorn/releases/download/v${pkg.version}/config.json`,
      ...defaultConfig,
    }, null, 2));

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
    json.themeDirs &&= json.themeDirs.map(resolvePath);

    // @ts-expect-error we do a little lying
    delete json.$schema;
    return { ...defaultConfig, ...json };
  } catch (e) {
    Logger.error('Failed to read config.json:', e);
    return defaultConfig;
  }
})();
