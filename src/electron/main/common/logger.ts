import { appendFile, readdir, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { formatWithOptions } from 'node:util';
import { ipcMain } from 'electron';
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

ipcMain.handle(ipc('getMainLogs'), () => logs);

class Logger implements Omit<Console, 'clear' | 'dir' | 'dirxml' | 'table' | 'timeStamp' | 'trace' | 'profile' | 'profileEnd' | 'Console'> {
  private name: string;
  constructor(...name: string[]) {
    if (name.length === 0) name = ['Popcorn'];
    else if (name.length === 1) name = name[0]!.split(/\s*>\s*/);
    this.name = name.join(' > ');
  }

  private color(text: string, color: Color['rgb']) {
    return `\x1b[38;2;${color[0]};${color[1]};${color[2]}m${text}\x1b[0m`;
  }

  async #appendLog(level: MainAPI['sendLog']['type'], ...msg: Parameters<Console['log']>) {
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

  private static indent = 0;
  #log(level: MainAPI['sendLog']['type'], ...msg: Parameters<Console['log']>) {
    const indent = Logger.indent > 0 ? `${'  '.repeat(Logger.indent)}|` : '';

    const color = colors[level in colors ? level as keyof typeof colors : 'brand'].rgb;
    const banner = this.name !== 'Popcorn'
      ? `[${this.color('Popcorn', color)} > ${this.name}]`
      : `[${this.color('Popcorn', color)}]`;

    const finalMessage = [...(indent ? [indent] : []), banner, ...msg];

    if (DEBUG || $popcornConfig.verbose || level !== 'debug') console[level](...finalMessage);

    queueMicrotask(async () => await this.#appendLog(level, ...msg));

    if (DEBUG || $popcornConfig.verbose || level === 'error') {
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
        type: level,
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

  private static countMap = new Map<string, number>();
  count(label = 'default') {
    const newValue = (Logger.countMap.get(label) ?? 0) + 1;
    Logger.countMap.set(label, newValue);
    this.#log('log', `${label}:`, newValue);
  }

  countReset = (label = 'default') => void Logger.countMap.delete(label);

  group: Console['group'] = (...label) => {
    this.#log('log', ...label);
    Logger.indent++;
  };

  groupCollapsed = this.group;
  groupEnd = () => Logger.indent--;

  private static timeMap = new Map<string, number>();
  time(label = 'default') {
    const start = Date.now();

    if (Logger.timeMap.has(label)) {
      this.#log('warn', `Timer "${label}" already exists.`);
      return;
    }

    Logger.timeMap.set(label, start);
  }

  timeEnd(label = 'default') {
    const end = Date.now();
    const start = Logger.timeMap.get(label);

    if (!start) {
      this.#log('warn', `Timer "${label}" doesn't exist.`);
      return;
    }

    this.#log('log', `${label}: ${end - start}ms - timer ended`);
    Logger.timeMap.delete(label);
  }

  timeLog(label = 'default') {
    const now = Date.now();
    const start = Logger.timeMap.get(label);

    if (!start) {
      this.#log('warn', `Timer "${label}" doesn't exist.`);
      return;
    }

    this.#log('log', `${label}: ${now - start}ms`);
  }
}

export {
  Logger as CreateLogger,
  Logger as default,
};
