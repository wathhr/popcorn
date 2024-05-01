import { app } from 'electron';
import { CreateLogger } from './common';
import { config } from './config';
import { isKernel } from '#shared';

import './patch-csp';

const Logger = new CreateLogger();
Logger.info('Starting...');
Logger.debug('Kernel:', isKernel);

// eslint-disable-next-line ts/no-require-imports
if (!isKernel) require('./inject');

Logger.debug('Effective config:', config);

app.on('browser-window-created', (_, window) => {
  if (process.argv.includes('--devtools')) window.webContents.openDevTools();
});

process.on('uncaughtExceptionMonitor', (err, origin) => {
  Logger.error('Uncaught exception', err, origin);
});
