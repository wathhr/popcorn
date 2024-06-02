import { appendFile, readdir, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { mkdirSync, writeFileSync } from 'node:fs';
import { formatWithOptions } from 'node:util';
import { app, ipcMain } from 'electron';
import { sendToAll } from './sendToAll';
import { configDir, startTimeString } from './constants';
import { type Color, colors, ipc } from '#shared';
import type { MainAPI } from '~/types';

const logFile = (() => {
  const file = join(configDir, 'logs', `${startTimeString}.log`);

  mkdirSync(join(configDir, 'logs'), { recursive: true });
  writeFileSync(file, '');
  readdir(join(configDir, 'logs'))
    .then((files) => {
      if (files.length <= 3) return;

      for (const file of files.slice(0, -1)) rm(join(configDir, 'logs', file), { force: true }).catch(() => {});
    })
    .catch(() => {});

  return file;
})();

const logs: MainAPI['sendLog'][] = [];

// TODO: Only send this if we are confident it's the main window
app.on('web-contents-created', (_, contents) => logs.forEach(log => contents.send(ipc('sendLog'), log)));
ipcMain.handle(ipc('getMainLogs'), () => logs);

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

  private appendLog(level: MainAPI['sendLog']['level'], ...msg: Parameters<Console['log']>) {
    appendFile(logFile, [
      `[${new Date().toLocaleString('en-US')}] `,
      `${level.toUpperCase()}: `,
      msg.map(argument => formatWithOptions({
        colors: false,
        depth: 5,
        getters: true,
        showProxy: true,
      }, argument)).join(', '),
      '\n',
    ].join(''), 'utf-8');
  }

  #log(level: MainAPI['sendLog']['level'], ...msg: Parameters<Console['log']>) {
    const banner = this.name !== 'Popcorn'
      ? `[${this.color('Popcorn', colors[level === 'log' ? 'brand' : level].rgb)} > ${this.name}]`
      : `[${this.color('Popcorn', colors[level === 'log' ? 'brand' : level].rgb)}]`;

    if (DEBUG || level !== 'debug') console[level](banner, ...msg);

    queueMicrotask(() => this.appendLog(level, ...msg));

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

      const log: MainAPI['sendLog'] = {
        component: this.name,
        level,
        message,
        time: Date.now(),
      };

      logs.push(log);
      sendToAll(ipc('sendLog'), log);
    }
  }

  debug: Console['debug'] = (...msg) => this.#log('debug', ...msg);
  error: Console['error'] = (...msg) => this.#log('error', ...msg);
  info: Console['info'] = (...msg) => this.#log('info', ...msg);
  log: Console['log'] = (...msg) => this.#log('log', ...msg);
  warn: Console['warn'] = (...msg) => this.#log('warn', ...msg);
}

export {
  Logger as CreateLogger,
  Logger as default,
};
