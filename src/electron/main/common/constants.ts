import { join } from 'node:path';

const padL = (str: string | number, pad = '0') => `${str}`.padStart(2, pad);

export const startTime = new Date();
export const startTimeString = `${[
  padL(startTime.getDate()),
  padL(startTime.getMonth() + 1),
  padL(startTime.getFullYear()),
].join('-')} ${[
  padL(startTime.getHours()),
  padL(startTime.getMinutes()),
  padL(startTime.getSeconds()),
].join('_')}`;

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
