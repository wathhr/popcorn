import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, normalize, sep } from 'node:path';
import { CreateLogger } from '#/common';

let Logger: CreateLogger | undefined;

export const configDir = join((() => {
  switch (process.platform) {
    case 'win32': return join(process.env.APPDATA ?? '');
    case 'darwin': return join(process.env.HOME ?? '', 'Library', 'Application Support');
    default: {
      if (process.env.XDG_CONFIG_HOME) return process.env.XDG_CONFIG_HOME;
      return join(process.env.HOME ?? '', '.config');
    }
  }
})(), 'Popcorn');

export function getConfig(...args: string[]) {
  const path = normalize(join(...args)).startsWith(configDir) ? join(...args) : join(configDir, ...args);
  const pathItems = normalize(args.join(sep)).split(sep);

  try {
    if (pathItems.length > 1) getConfigDir(...pathItems.slice(0, -1));
    if (!existsSync(path)) writeFileSync(path, '');
  } catch (e) {
    Logger ??= new CreateLogger('Config');
    Logger.error('Failed to create config file', e);
  }

  return path;
}

export function getConfigDir(...args: string[]) {
  const path = normalize(join(...args)).startsWith(configDir) ? join(...args) : join(configDir, ...args);

  try {
    if (!existsSync(path)) mkdirSync(path, { recursive: true });
  } catch (e) {
    Logger ??= new CreateLogger('Config');
    Logger.error('Failed to create config dir', e);
  }

  return path;
}
