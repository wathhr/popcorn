import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, normalize } from 'node:path';
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
  const path = join(configDir, ...args);

  try {
    getConfigDir(...args.splice(-1));
    if (!existsSync(path)) writeFileSync(path, '');
  } catch (e) {
    if (!Logger) Logger = new CreateLogger('Config');
    Logger.error('Failed to create config file', e);
  }

  return path;
}

export function getConfigDir(...args: string[]) {
  const path = normalize(args[0]!).startsWith(configDir) ? join(...args) : join(configDir, ...args);

  try {
    if (!existsSync(path)) mkdirSync(path, { recursive: true });
  } catch (e) {
    if (!Logger) Logger = new CreateLogger('Config');
    Logger.error('Failed to create config dir', e);
  }

  return path;
}
