import { app, protocol } from 'electron';
import { resolve } from 'path';
import config from './config';
import { themes } from './themes';
import LoggerModule from '@common/logger';
const Logger = new LoggerModule('Main > Protocol', 'ansi');

protocol.registerSchemesAsPrivileged([
  {
    scheme: 'popcorn',
    privileges: {
      secure: true,
      standard: true,
      supportFetchAPI: true,
    },
  },
]);

app.on('ready', () => {
  protocol.registerFileProtocol('popcorn', (request, cb) => {
    if (config.verbose) Logger.debug('Received request:', request);
    const url = new URL(request.url);
    let filePath = '';

    switch (url.hostname) {
      case 'theme': {
        const theme = themes[url.pathname.slice(1)];
        filePath = resolve(theme.json, '..', theme.main);
      } break;
      case 'splash-theme': {
        const theme = themes[url.pathname.slice(1)];
        if (!theme.splash) return false;
        filePath = theme.splash;
      } break;
    }

    cb({ path: filePath });
    return true;
  });
});
