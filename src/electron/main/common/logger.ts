import supportsColor from 'supports-color';
import { colors, type Color } from '#shared';

class Logger {
  private name: string;
  constructor(...name: string[]) {
    if (name.length === 0) name = ['Popcorn'];
    else if (name.length === 1) name = name[0]!.split(/\s*>\s*/);
    this.name = name.join(' > ');
  }

  private color(text: string, color: Color['rgb']) {
    if (!(supportsColor.stdout && supportsColor.stdout.has16m)) return text;

    return `\x1b[38;2;${color[0]};${color[1]};${color[2]}m${text}\x1b[0m`;
  }

  #log(level: 'log' | 'info' | 'debug' | 'warn' | 'error', ...msg: any[]) {
    const banner = this.name !== 'Popcorn'
      ? `[${this.color('Popcorn', colors[level === 'log' ? 'brand' : level].rgb)} > ${this.name}]`
      : `[${this.color('Popcorn', colors[level === 'log' ? 'brand' : level].rgb)}]`;

    console[level](banner, ...msg);
  }

  log = (...msg: any[]) => this.#log('log', ...msg);
  info = (...msg: any[]) => this.#log('info', ...msg);
  debug = (...msg: any[]) => DEBUG && this.#log('debug', ...msg);
  warn = (...msg: any[]) => this.#log('warn', ...msg);
  error = (...msg: any[]) => this.#log('error', ...msg);
}

export {
  Logger as createLogger,
  Logger as default,
};
