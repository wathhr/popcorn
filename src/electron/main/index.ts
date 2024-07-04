import { app } from 'electron';
import { config } from './config';
import { CreateLogger } from './common';
import { isKernel } from '&/common';

declare global {
  // eslint-disable-next-line no-var, vars-on-top
  var popcornConfig: typeof config;
}

import('./patch-csp');
import('./protocol');
import('./updater');

const Logger = new CreateLogger();
Logger.info('Starting...');
Logger.debug('Kernel:', isKernel);

// TODO: Fix this from the eslint config
// eslint-disable-next-line ts/no-require-imports
if (!isKernel) require('./inject');

Logger.debug('Effective config:', config);

if (process.argv.includes('--devtools')) app.on('browser-window-created', (_, window) => window.webContents.openDevTools());

// TODO: Add better error handling, https://stackoverflow.com/questions/41102060/typescript-extending-error-class
process.on('uncaughtExceptionMonitor', (err, origin) => {
  Logger.error('Uncaught exception', origin, err);
});
