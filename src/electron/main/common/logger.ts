import { appendFile, readdir, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { formatWithOptions } from 'node:util';
import { app, ipcMain } from 'electron';
import { startTimeString } from './constants';
import { sendToAll } from '#/utils/sendToAll';
import { type Color, colors, ipc } from '&/common';
import { getConfig, getConfigDir } from '#/common';
import type { MainAPI } from '~/types';

const logFile = (() => {
  const dir = getConfigDir('logs');
  const file = getConfig('logs', `${startTimeString}.log`);

  readdir(dir)
    .then((files) => {
      if (files.length <= 3) return;

      for (const file of files.slice(0, -1)) rm(join(dir, file), { force: true }).catch(() => {});
    })
    .catch(() => {});

  return file;
})();

const logs: MainAPI['sendLog'][] = [];

// TODO: Only send this if we are confident it's the main window
app.on('web-contents-created', (_, contents) => logs.forEach(log => contents.send(ipc('sendLog'), log)));
ipcMain.handle(ipc('getMainLogs'), () => logs);

class Logger implements Omit<Console, 'clear' | 'dir' | 'dirxml' | 'table' | 'trace' | 'profile' | 'profileEnd' | 'Console'> {
  private name: string;
  constructor(...name: string[]) {
    if (name.length === 0) name = ['Popcorn'];
    else if (name.length === 1) name = name[0]!.split(/\s*>\s*/);
    this.name = name.join(' > ');
  }

  private color(text: string, color: Color['rgb']) {
    return `\x1b[38;2;${color[0]};${color[1]};${color[2]}m${text}\x1b[0m`;
  }

  async #appendLog(level: MainAPI['sendLog']['level'], ...msg: Parameters<Console['log']>) {
    await appendFile(logFile, [
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

  private indent = 0;
  #log(level: MainAPI['sendLog']['level'], ...msg: Parameters<Console['log']>) {
    const indent = this.indent ? `${'  '.repeat(this.indent)}|` : '';

    const banner = this.name !== 'Popcorn'
      ? `[${this.color('Popcorn', colors[level === 'log' ? 'brand' : level].rgb)} > ${this.name}]`
      : `[${this.color('Popcorn', colors[level === 'log' ? 'brand' : level].rgb)}]`;

    const finalMessage = [...(indent ? [indent] : []), banner, ...msg];

    if (DEBUG || popcornConfig.verbose || level !== 'debug') console[level](...finalMessage);

    queueMicrotask(async () => await this.#appendLog(level, ...msg));

    if (DEBUG || popcornConfig.verbose || level === 'error') {
      const message = (() => {
        try {
          return structuredClone(msg);
        } catch (e) {
          console.error(banner, 'Failed to clone with error:', e);
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

  assert: Console['assert'] = (condition, ...rest) => Boolean(condition) || this.#log('error', `Assertion failed${rest.length > 0 ? ':' : ''}`, ...rest);

  debug: Console['debug'] = (...msg) => this.#log('debug', ...msg);
  error: Console['error'] = (...msg) => this.#log('error', ...msg);
  info: Console['info'] = (...msg) => this.#log('info', ...msg);
  log: Console['log'] = (...msg) => this.#log('log', ...msg);
  warn: Console['warn'] = (...msg) => this.#log('warn', ...msg);

  // TODO: Send all of the following to the renderer as well
  count = (label?: string) => console.count(label ? `Popcorn > ${this.name} > ${label}` : `Popcorn > ${this.name}`);
  countReset = (label?: string) => console.countReset(label ? `Popcorn > ${this.name} > ${label}` : `Popcorn > ${this.name}`);

  group: Console['group'] = (...label) => {
    this.indent++;
    if (label.length > 0) this.#log('log', ...label);
  };

  groupCollapsed = this.group;
  groupEnd = () => this.indent--;

  time = (label?: string) => console.time(label ? `Popcorn > ${this.name} > ${label}` : `Popcorn > ${this.name}`);
  timeEnd = (label?: string) => console.timeEnd(label ? `Popcorn > ${this.name} > ${label}` : `Popcorn > ${this.name}`);
  timeLog = (label?: string) => console.timeLog(label ? `Popcorn > ${this.name} > ${label}` : `Popcorn > ${this.name}`);
  timeStamp = (label?: string) => console.timeStamp(label ? `Popcorn > ${this.name} > ${label}` : `Popcorn > ${this.name}`);
}

export {
  Logger as CreateLogger,
  Logger as default,
};
