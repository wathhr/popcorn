import fs from 'fs';
import { join } from 'path';
import { argv } from 'process';
import { requireFile } from './common/requireFile';
import { root } from './common/misc';
import LoggerModule from '@utils/logger';
const Logger = new LoggerModule('Main', 'ansi');

// TODO: Move this to index.ts, importing the below tries to read the file first
if (!fs.existsSync(join(root, 'config.json'))) {
  Logger.warn(`No config file found, creating one.`);
  fs.writeFileSync(
    join(root, 'config.json'),
    [
      '{',
      '  "hotkey": "ctrl+shift+p",',
      '  "themeDirs": [',
      '    "./themes/*/index.json",',
      process.platform === 'win32'
        ? '    "%USERPROFILE%/discord/themes/*/index.json"'
        : '    "$HOME/discord/themes/*/index.json"',
      '  ],',
      '  "enabled": {}',
      '}',
    ].join('\n')
  );
}

export const config: Config = requireFile(join(root, 'config.json'));
if (config.verbose == null) config.verbose = false;
if (argv.includes('--verbose')) config.verbose = true;
export default config;

if (config.verbose) Logger.debug(config);
