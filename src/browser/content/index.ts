import { CreateLogger } from '#/common';
import { isKernel } from '#shared';
import type { MainAPI } from '~/types';

// eslint-disable-next-line ts/no-require-imports
if (!('PopcornAPI' in globalThis)) require('./api.ts');

const Logger = new CreateLogger();

Logger.info('Starting...');
Logger.debug('Kernel:', isKernel);
const ipc = import('./modules/ipc');

if (!PopcornAPI.isBrowser) {
  const MainLogger = new CreateLogger('Main');
  function createLog(log: MainAPI['sendLog']) {
    if (log.component) return new CreateLogger('Main', log.component)[log.level](...[log.message].flat());

    MainLogger[log.level](...log.message);
  }

  PopcornAPI.getMainLogs().then((logs) => {
    for (const log of logs) createLog(log);
  });
  PopcornAPI.onSendLog((_, log) => createLog(log));
}

export async function stop() {
  (await ipc).stop();
  Logger.info('Stopping...');
}
