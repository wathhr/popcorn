import { isAbsolute, join, relative } from 'node:path';
import { pathToFileURL } from 'node:url';
import { app, net, protocol } from 'electron';
import { CreateLogger, getConfigDir } from '#/common';
import { themeLocationCache } from '#/themes';
import type { Theme } from '&/types';

const Logger = new CreateLogger('Protocol');

protocol.registerSchemesAsPrivileged([
  {
    scheme: 'popcorn',
    privileges: {
      bypassCSP: true,
      corsEnabled: false,
      secure: true,
      standard: true,
      supportFetchAPI: true,
    },
  },
]);

app.whenReady().then(() => {
  protocol.handle('popcorn', (request) => {
    const { host, pathname } = new URL(request.url);

    switch (host) {
      case 'theme': {
        const path = join(getConfigDir('themes'), pathname);
        const relativePath = relative(getConfigDir('themes'), path);

        const isSafe = !relativePath.startsWith('..') && !isAbsolute(relativePath);
        if (!isSafe) return new Response('Invalid path', { status: 404 });

        const pathnameArray = pathname.split('/').filter(Boolean);

        const themeID = ((): Theme['id'] | undefined => {
          const id = pathnameArray.shift() as Theme['id'];
          if (!/\w+\.\w+/.test(id)) return undefined;
          if (!themeLocationCache.has(id)) return undefined;

          return id;
        })();

        if (!themeID) return new Response('Invalid theme ID', { status: 404 });
        const themePath = themeLocationCache.get(themeID)!;

        return net.fetch(pathToFileURL(join(themePath, ...pathnameArray)).toString())
          .catch(() => new Response('Invalid path', { status: 404 }));
      }

      default: {
        Logger.warn('Invalid host', host);
        return new Response('Invalid host', { status: 404 });
      }
    }
  });
});
