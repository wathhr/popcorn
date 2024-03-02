import supportsColor from 'supports-color';
import { type Color, colors } from '#shared';

class Logger {
  private name: string;
  constructor(...name: string[]) {
    if (name.length === 0) name = ['Popcorn'];
    else if (name.length === 1) name = name[0]!.split(/\s*>\s*/);
    this.name = name.join(' > ');
  }

  private color(text: string, color: Color['rgb']) {
    if (!(supportsColor.stdout !== false && supportsColor.stdout.has16m)) return text;

    return `\x1b[38;2;${color[0]};${color[1]};${color[2]}m${text}\x1b[0m`;
  }

  #log(level: 'log' | 'info' | 'debug' | 'warn' | 'error', ...msg: Parameters<Console['log']>) {
    const banner = this.name !== 'Popcorn'
      ? `[${this.color('Popcorn', colors[level === 'log' ? 'brand' : level].rgb)} > ${this.name}]`
      : `[${this.color('Popcorn', colors[level === 'log' ? 'brand' : level].rgb)}]`;

    console[level](banner, ...msg);
  }

  log: Console['log'] = (...msg) => this.#log('log', ...msg);
  info: Console['info'] = (...msg) => this.#log('info', ...msg);
  debug: Console['debug'] = (...msg) => DEBUG && this.#log('debug', ...msg);
  warn: Console['warn'] = (...msg) => this.#log('warn', ...msg);
  error: Console['error'] = (...msg) => this.#log('error', ...msg);
}

export {
  Logger as createLogger,
  Logger as default,
};
