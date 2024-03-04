import { CreateLogger } from '#/common';
import type { PopcornShared } from '#/types';

const Logger = new CreateLogger();

window.PopcornShared ??= {};
declare global {
  interface Window {
    PopcornShared: Partial<PopcornShared>,
  }
}

Logger.info('Starting...');
const ipc = import('./modules/ipc');

export async function stop() {
  (await ipc).stop();
  Logger.info('Stopping...');
}
