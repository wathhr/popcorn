import API from './api';
import { CreateLogger } from '#/common/logger';
import { isKernel } from '&/common';
import type { BrowserAPI, ElectronAPI, MainAPI } from '~/types';

globalThis.PopcornAPI ??= API;

let hasStarted = false;
const Logger = new CreateLogger();
const comments = {
  start: document.createComment(' start:Popcorn'),
  end: document.createComment(' end:Popcorn '),
};

type StartFunction = () => void | Promise<void>;
const startFunctions = new Set<StartFunction>();
const start = (callback: StartFunction) => hasStarted ? callback() : startFunctions.add(callback);
start(() => {
  Logger.info('Starting...');
  Logger.debug('Kernel:', isKernel);
  for (const comment of Object.values(comments)) document.head.appendChild(comment);

  import('./api.ts');
  import('./ipc');
  import('./themes');
});

type StopFunction = () => void | Promise<void>;
const stopFunctions = new Set<StopFunction>();
const stop = (callback: StopFunction) => stopFunctions.add(callback);
stop(() => {
  Logger.info('Stopping...');
  for (const comment of Object.values(comments)) comment.remove();
});

if (PopcornAPI.isBrowser) start(async () => {
  const PopcornAPI = globalThis.PopcornAPI as BrowserAPI;
});

else start(async () => {
  const PopcornAPI = globalThis.PopcornAPI as ElectronAPI;

  const MainLogger = new CreateLogger('Main');
  function createLog(log: MainAPI['sendLog']) {
    if (log.component !== 'Popcorn') return new CreateLogger('Main', log.component)[log.level](...log.message);

    MainLogger[log.level](...log.message);
  }

  PopcornAPI.getMainLogs().then((logs) => {
    for (const log of logs) createLog(log);
  });
  PopcornAPI.onSendLog((_, log) => createLog(log));
});

async function init() {
  hasStarted = true;
  for (const callback of startFunctions) await callback();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();

export {
  comments,
  start,
  stop,
};

export default {
  start: init,
  async stop() {
    for (const callback of stopFunctions) await callback();
  },
};
