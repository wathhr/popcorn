import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { config } from '#/config';
import { CreateLogger } from '#/common';
import { type Theme, ThemeChecker } from '&/types';
import type { ThemeResponse } from '~/types';

import './ipc';

const Logger = new CreateLogger('Themes');

const themes = new Set<ThemeResponse>();
export const themeLocationCache = new Map<Theme['id'], string>();

export async function getThemes(force = false) {
  if (themes.size > 0 && !force) return themes;
  themes.clear();

  for (const dir of config.themeDirs) {
    const themeDirFiles = await readdir(dir);

    for (const theme of themeDirFiles) {
      const themeDir = join(dir, theme);
      const children = await readdir(themeDir);

      if (!children.includes('index.json')) {
        Logger.warn(`No index.json in "${themeDir}".`);
        continue;
      }

      try {
        const json: Theme = await readFile(join(themeDir, 'index.json'), 'utf8').then(JSON.parse);
        const errors = [...ThemeChecker.Errors(json)];

        if (errors.length > 0) {
          Logger.warn(`Invalid theme manifest in "${themeDir}":`, errors);
          continue;
        }

        if (themeLocationCache.has(json.id)) {
          Logger.warn(`Duplicate theme ID "${json.id}" in "${themeDir}".`);
          continue;
        }

        themes.add({
          location: themeDir,
          ...json,
        });
        themeLocationCache.set(json.id, themeDir);
      } catch (e) {
        Logger.error(`Failed to read theme manifest in "${themeDir}":`, e);
        continue;
      }
    }
  }

  return themes;
}

getThemes(true);
