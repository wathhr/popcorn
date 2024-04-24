import { appendFile, readdir, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { app, ipcMain, webContents } from 'electron';
import { ensureFileSync } from 'fs-extra';
import { sendToAll } from './sendToAll';
import { root, startTimeString } from './constants';
import { type Color, colors, ipc } from '#shared';

ensureFileSync(`${join(root, 'logs', startTimeString)}.log`);
readdir(join(root, 'logs'))
  .then((files) => {
    if (files.length <= 3) return;

    for (const file of files.slice(0, -1)) {
      rm(join(root, 'logs', file), { force: true }).catch(() => {});
    }
  })
  .catch(() => {});

const logs: Popcorn.MainAPI['sendLog'][] = [];

ipcMain.handle(ipc('getMainLogs'), () => logs);
app.on('web-contents-created', (_, contents) => {
  logs.forEach(log => contents.send(ipc('sendLog'), log));
});

class Logger {
  private name: string;
  constructor(...name: string[]) {
    if (name.length === 0) name = ['Popcorn'];
    else if (name.length === 1) name = name[0]!.split(/\s*>\s*/);
    this.name = name.join(' > ');
  }

  private color(text: string, color: Color['rgb']) {
    return `\x1b[38;2;${color[0]};${color[1]};${color[2]}m${text}\x1b[0m`;
  }

  #log(level: Popcorn.MainAPI['sendLog']['level'], ...msg: Parameters<Console['log']>) {
    const banner = this.name !== 'Popcorn'
      ? `[${this.color('Popcorn', colors[level === 'log' ? 'brand' : level].rgb)} > ${this.name}]`
      : `[${this.color('Popcorn', colors[level === 'log' ? 'brand' : level].rgb)}]`;

    console[level](banner, ...msg);

    queueMicrotask(() => {
      appendFile(`${join(root, 'logs', startTimeString)}.log`, `[${new Date().toLocaleString('en-US')}] ${level.toUpperCase()}: ${msg.map(i => JSON.stringify(i)).join(', ')}\n`, 'utf8');
    });

    if (DEBUG || level === 'error') {
      const message = (() => {
        try {
          return structuredClone(msg);
        } catch (e) {
          console.error(banner, 'Failed to clone message:', msg, 'With error:', e);
          return null;
        }
      })();

      if (!message) return;

      const log: Popcorn.MainAPI['sendLog'] = {
        component: this.name,
        level,
        message,
        time: Date.now(),
      };

      if (webContents.getAllWebContents().length === 0) logs.push(log);
      else sendToAll(ipc('sendLog'), log);
    }
  }

  log: Console['log'] = (...msg) => this.#log('log', ...msg);
  info: Console['info'] = (...msg) => this.#log('info', ...msg);
  debug: Console['debug'] = (...msg) => DEBUG && this.#log('debug', ...msg);
  warn: Console['warn'] = (...msg) => this.#log('warn', ...msg);
  error: Console['error'] = (...msg) => this.#log('error', ...msg);
}

export {
  Logger as CreateLogger,
  Logger as default,
};
