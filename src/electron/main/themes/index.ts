import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { config } from '#/config';
import { CreateLogger } from '#/common';
import { type Theme, ThemeChecker } from '#types';

import './ipc';

const Logger = new CreateLogger('Themes');

let themes: Theme[] | undefined;

export async function getThemes() {
  themes = [];

  for (const dir of config.themeDirs) {
    const themeDirFiles = await readdir(dir);

    for (const theme of themeDirFiles) {
      const children = await readdir(join(dir, theme));

      if (!children.includes('index.json')) {
        Logger.warn(`No index.json in "${dir}". Skipping...`);
        continue;
      }

      try {
        const themeDir = join(dir, theme);
        const json: Theme = await readFile(join(themeDir, 'index.json'), 'utf8').then(JSON.parse);
        const errors = [...ThemeChecker.Errors(json)];

        if (errors.length > 0) {
          Logger.warn(`Invalid theme manifest in "${dir}":`, errors);
          continue;
        }

        themes.push(json);
      } catch (e) {
        Logger.error(`Failed theme manifest in "${dir}":`, e);
        continue;
      }
    }
  }

  return themes;
}
