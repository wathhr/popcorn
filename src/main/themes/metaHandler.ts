import { resolve, isAbsolute } from 'path';
import LoggerModule from '@common/logger';
const Logger = new LoggerModule('Main > Themes > Validator', 'ansi');

const cachedIds = new Map<string, string>();

export function initMeta(location: string): Meta | null {
  const meta: Meta = require(location);
  const result = { ...meta };

  for (const k in meta) {
    const key = k as keyof Meta;
    const value = meta[key];

    switch (key) {
      case 'id': {
        if (/\s/.test(value)) {
          Logger.error(`"${key}" must not contain whitespace (${location})`);
          return;
        }
        if (cachedIds.has(value)) {
          Logger.error(`Multiple themes are using the id "${value}" (${cachedIds.get(value)})`);
          return;
        }
        cachedIds.set(value, location);
      } break;

      case 'main':
      case 'splash': {
        if (isAbsolute(value)) {
          Logger.error(`"${key}" must be a relative path (${value})`);
          return;
        }
        if (value.startsWith('..')) {
          Logger.error(`"${key}" must not point to a parent directory (${value})`);
          return;
        }

        const fileLocation = result[key] = resolve(location, '..', value);

        const fileExtension = fileLocation.split('.').pop();
        if (fileExtension !== 'css') Logger.warn(`Unsupported file extension "${fileExtension}" (${location})`);
      } break;
    }
  }

  return result;
}

export function updateMeta(location: string): Meta | null {
  const meta: Meta = require(location);

  if (cachedIds.has(meta.id)) {
    cachedIds.delete(meta.id);
    return initMeta(location);
  } else {
    Logger.error(`No theme with id "${meta.id}" found (${location})`);
  }
}
