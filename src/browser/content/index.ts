import API from './api';
import { CreateLogger } from '#/common/logger';
import { isKernel } from '&/common';
import type { MainAPI } from '~/types';

globalThis.PopcornAPI ??= API;

import('#/common/dom-manager');
import('./ipc');
import('./themes');

const Logger = new CreateLogger();

type StartFunction = () => Promise<void> | void;
const startFunctions: StartFunction[] = [];
const start = (callback: StartFunction) => document.readyState === 'loading' ? startFunctions.push(callback) : callback();

async function init() {
  Logger.info('Starting...');
  Logger.debug('Kernel:', isKernel);

  if (!PopcornAPI.isBrowser) {
    const MainLogger = new CreateLogger('Main');
    function createLog(log: MainAPI['sendLog']) {
      if (log.component !== 'Popcorn') return new CreateLogger('Main', log.component)[log.type](...log.message);

      MainLogger[log.type](...log.message);
    }

    PopcornAPI.onSendLog(log => createLog(log));
    PopcornAPI.getMainLogs().then((logs) => {
      for (const log of logs) createLog(log);
    });
  }

  for (const callback of startFunctions) await callback();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();

type StopFunction = () => Promise<void> | void;
const stopFunctions: StopFunction[] = [];
const stop = (callback: StopFunction) => stopFunctions.push(callback);

async function terminate() {
  Logger.info('Stopping...');
  for (const callback of stopFunctions) await callback();
}

export { start, stop };
export default {
  init,
  start: init,
  terminate,
  stop: terminate,
};
