import fs from 'fs';
import { isAbsolute, join } from 'path';
import { argv } from 'process';
import { ipcMain } from 'electron';
import { root } from './utils';
import { IPC } from '@common/constants';
import LoggerModule from '@common/logger';
const Logger = new LoggerModule('Main', 'ansi');

const defaultConfig: Config = {
  hotkey: 'ctrl+shift+p',
  quickCssDir: './quickcss',
  themeFiles: [
    './themes/*/index.json',
    ...(process.platform === 'win32'
      ? ['%USERPROFILE%/discord/themes/*/index.json']
      : ['$HOME/discord/themes/*/index.json']
    ),
  ],
  enabled: {},
};

if (!fs.existsSync(join(root, 'config.json'))) {
  Logger.warn('No config file found, creating one.');
  fs.writeFileSync(join(root, 'config.json'), JSON.stringify(defaultConfig, null, 2));
}

const configJson = require(join(root, 'config.json'));
const configJsonWithDefaults = {
  ...defaultConfig,
  ...configJson,
};
export const config: Config = configJsonWithDefaults;

if (argv.includes('--verbose') || NODE_ENV === 'development') config.verbose = true;

config.quickCssDir = isAbsolute(config.quickCssDir)
  ? config.quickCssDir
  : join(root, config.quickCssDir);

export default config;

if (config.verbose) Logger.debug(config);

ipcMain.on(IPC.getConfig, (event) => event.returnValue = config);
