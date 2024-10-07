import { app, dialog } from 'electron';
import { config } from './config';
import { CreateLogger } from './common';
import { PopcornError, isKernel } from '&/common';

declare global {
  // eslint-disable-next-line no-var, vars-on-top
  var $popcornConfig: typeof config;
}

import('./patch-csp');
import('./protocol');
import('./updater');

const Logger = new CreateLogger();
Logger.info('Starting...');
Logger.debug('Kernel:', isKernel);

// eslint-disable-next-line ts/no-require-imports
if (!isKernel) require('./inject');

Logger.debug('Effective config:', config);

if (DEBUG && process.argv.includes('--repl')) import('./dev');
if (process.argv.includes('--devtools')) app.on('browser-window-created', (_, window) => window.webContents.openDevTools());

process.on('uncaughtExceptionMonitor', (err, origin) => {
  Logger.error('Uncaught exception', origin, err);

  if (err instanceof PopcornError) dialog.showErrorBox('Popcorn crashed your app...', [
    'Popcorn has crashed your app. You can do one of the following:',
    '  - Relaunch the app',
    '  - Update popcorn to the latest version',
    '  - Report the issue on GitHub',
    '',
    'If you create a GitHub issue attach a screenshot of this popup and the debug info below:',
    `  Origin: ${origin}`,
    `  Stack: ${err.stack}`,
  ].join('\n'));
});
