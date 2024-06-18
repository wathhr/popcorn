import API from './api';
import IPC from './ipc';
import Themes from './themes';
import { CreateLogger } from '#/common';
import * as DomManager from '#/common/dom-manager';
import { isKernel } from '#shared';
import type { BrowserAPI, ElectronAPI, MainAPI } from '~/types';

globalThis.PopcornAPI ??= API;

const Logger = new CreateLogger();

export const renderer = new class {
  ipc!: IPC;
  themes!: Themes;

  comments = {
    start: document.createComment(' start:Popcorn'),
    end: document.createComment(' end:Popcorn '),
  };

  async start() {
    Logger.info('Starting...');
    Logger.debug('Kernel:', isKernel);
    for (const comment of Object.values(this.comments)) document.head.appendChild(comment);
    if (PopcornAPI.isBrowser) await this.browser();
    else await this.electron();

    this.ipc = new IPC();
    this.ipc.start();
    this.themes = new Themes();
    await this.themes.start();
  }

  async browser() {
    const PopcornAPI = globalThis.PopcornAPI as BrowserAPI;
  }

  async electron() {
    const PopcornAPI = globalThis.PopcornAPI as ElectronAPI;

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

  async stop() {
    Logger.info('Stopping...');
    for (const comment of Object.values(this.comments)) comment.remove();

    this.ipc.stop();
    this.themes.stop();
    DomManager.stop();
  }
}();

export default renderer;

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', async () => await renderer.start());
else renderer.start();
