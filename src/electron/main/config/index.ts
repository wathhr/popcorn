import { readFileSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import { CreateLogger, getConfig, getConfigDir } from '#/common';
import { resolvePath } from '#/utils';
import { type Config, ConfigChecker } from '&/types';

import './ipc';

const Logger = new CreateLogger('Config');

export const defaultConfig: Required<Omit<Config, '$schema'>> = {
  configVersion: 1,
  enabled: {},
  hotkey: 'ctrl+shift+p',
  quickCssDir: getConfigDir('quickcss'),
  themeDirs: [getConfigDir('themes')],
  verbose: process.argv.includes('--verbose') || NODE_ENV === 'development',
  transparencyType: 'none',
  userStyles: [],
};

export const config: Required<Omit<Config, '$schema'>> = globalThis.$popcornConfig = (() => {
  const configFile = getConfig('config.json');

  const content = readFileSync(configFile, 'utf8');
  if (!content.trim()) {
    Logger.info('config.json not found, creating one.');
    writeFile(configFile, JSON.stringify(defaultConfig, null, 2));

    return defaultConfig;
  }

  try {
    const json = JSON.parse(content);

    if (!ConfigChecker.Check(json)) {
      const errors = [...ConfigChecker.Errors(json)];
      Logger.error('Invalid config.json:', errors);

      return defaultConfig;
    }

    json.quickCssDir &&= resolvePath(json.quickCssDir);
    json.themeDirs &&= json.themeDirs.map(d => resolvePath(d));
    delete json.$schema;

    return { ...defaultConfig, ...json };
  } catch (e) {
    Logger.error('Failed to read config.json:', e);
    return defaultConfig;
  }
})();

Object.assign(globalThis, { $popcornConfig: config });
