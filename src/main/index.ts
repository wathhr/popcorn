import { join } from 'path';
import fg from 'fast-glob';

const root = join(__dirname, '../');

import { requireFile } from '@utils/misc';
import LoggerModule from '@utils/logger';
const Logger = new LoggerModule('Main', 'ansi');
const { config } = requireFile(join(root, 'index.json'));

const themeJsons = fg.sync(config.themes, {
  cwd: root,
  absolute: true,
});

Logger.log(themeJsons);

Logger.log('Main');
