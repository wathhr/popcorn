import { CreateLogger } from '#/common';
import type { PopcornShared } from '#/types';
import { isKernel } from '#shared';

const Logger = new CreateLogger();

window.PopcornShared ??= {};
declare global {
  interface Window {
    PopcornShared: Partial<PopcornShared>,
  }
}

Logger.info('Starting...');
Logger.debug('Kernel:', isKernel);
const ipc = import('./modules/ipc');

if (!PopcornAPI.isBrowser) {
  const MainLogger = new CreateLogger('Main');
  function createLog(log: Popcorn.MainAPI['sendLog']) {
    if (log.component) return new CreateLogger('Main', log.component)[log.level](...(log.message ?? []));

    MainLogger[log.level](...log.message);
  }

  PopcornAPI.getMainLogs().then((logs) => {
    for (const log of logs) {
      createLog(log);
    }
  });
  PopcornAPI.onSendLog((_, log) => createLog(log));
}

export async function stop() {
  (await ipc).stop();
  Logger.info('Stopping...');
}
