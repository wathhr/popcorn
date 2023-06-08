import fs from 'fs';
import { isAbsolute, join } from 'path';
import { argv } from 'process';
import { ipcMain } from 'electron';
import { root } from './utils';
import { IPC } from '@common/constants';
import LoggerModule from '@common/logger';
const Logger = new LoggerModule('Main', 'ansi');

// TODO: rewrite this
const defaultFileContent = [
  '{',
  '  "hotkey": "ctrl+shift+p",',
  '  "quickCssDir": "./quickcss",',
  '  "themeFiles": [',
  '    "./themes/*/index.json",',
  process.platform === 'win32'
    ? '    "%USERPROFILE%/discord/themes/*/index.json"'
    : '    "$HOME/discord/themes/*/index.json"',
  '  ],',
  '  "enabled": {}',
  '}',
].join('\n');

if (!fs.existsSync(join(root, 'config.json'))) {
  Logger.warn('No config file found, creating one.');
  fs.writeFileSync(join(root, 'config.json'), defaultFileContent);
}

export const config: Config = require(join(root, 'config.json'));

if (config.verbose == null) config.verbose = false;
if (argv.includes('--verbose') || process.env.NODE_ENV === 'development')
  config.verbose = true;

config.quickCssDir = isAbsolute(config.quickCssDir)
  ? config.quickCssDir
  : join(root, config.quickCssDir);

export default config;

if (config.verbose) Logger.debug(config);

ipcMain.handle(IPC.getConfig, () => config);
