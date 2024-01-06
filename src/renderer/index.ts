import { createLogger } from './common';
import DomManager from './dom-manager';
import { PopcornShared } from './types';

const Logger = new createLogger();

window.PopcornShared ??= {};
declare global {
  interface Window {
    PopcornShared: Partial<PopcornShared>,
  }
}

Logger.log('Starting...');
new DomManager('Main').addElement(document.createElement('style'), 'start');
