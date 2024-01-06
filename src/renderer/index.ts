import { createLogger } from './common';
import { PopcornShared } from './types';

const Logger = new createLogger();

window.PopcornShared ??= {};
declare global {
  interface Window {
    PopcornShared: Partial<PopcornShared>,
  }
}

Logger.log('Starting...');
