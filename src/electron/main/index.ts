import { app } from 'electron';
import { CreateLogger } from './common';
import { config } from './config';
import { isKernel } from '&/common';

import './patch-csp';
import './protocol';

const Logger = new CreateLogger();
Logger.info('Starting...');
Logger.debug('Kernel:', isKernel);

// TODO: Fix this from the eslint config
// eslint-disable-next-line ts/no-require-imports
if (!isKernel) require('./inject');

Logger.debug('Effective config:', config);

app.on('browser-window-created', (_, window) => {
  if (process.argv.includes('--devtools')) window.webContents.openDevTools();
});

// TODO: Add better error handling, https://stackoverflow.com/questions/41102060/typescript-extending-error-class
process.on('uncaughtExceptionMonitor', (err, origin) => {
  Logger.error('Uncaught exception', err, origin);
});
