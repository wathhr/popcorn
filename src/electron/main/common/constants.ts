import { join } from 'path';

export const root = join(__dirname, '../..');

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
