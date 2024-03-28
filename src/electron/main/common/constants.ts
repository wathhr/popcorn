import { join } from 'node:path';

const padL = (str: string | number) => str.toString().padStart(2, '0');

export const root = join(__dirname, '../..');

export const startTime = new Date();
export const startTimeString = `${padL(startTime.getDate())}-${padL(startTime.getMonth() + 1)}-${padL(startTime.getFullYear())} ${padL(startTime.getHours())}_${padL(startTime.getMinutes())}_${padL(startTime.getSeconds())}`;

// export const configDir = join((() => {
//   switch (process.platform) {
//     case 'win32': return join(process.env.APPDATA ?? '');
//     case 'darwin': return join(process.env.HOME ?? '', 'Library', 'Application Support');
//     default: {
//       if (process.env.XDG_CONFIG_HOME) return process.env.XDG_CONFIG_HOME;
//       return join(process.env.HOME ?? '', '.config');
//     }
//   }
// })(), 'Popcorn');
