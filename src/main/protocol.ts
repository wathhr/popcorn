import { app, protocol } from 'electron';
import { themes } from './themes';

protocol.registerSchemesAsPrivileged([
  {
    scheme: 'popcorn',
    privileges: {
      standard: true,
      secure: true,
      supportFetchAPI: true,
    },
  },
]);

app.on('ready', () => {
  protocol.registerFileProtocol('popcorn', (request, cb) => {
    let filePath = '';
    const reqUrl = new URL(request.url);

    switch (reqUrl.hostname) {
      case 'theme':
        filePath = themes[reqUrl.pathname.slice(1)].mainLocation;
        break;
    }

    cb({ path: filePath });
    return true;
  });
});
