import { colors } from '#shared';

class Logger {
  private name: string;
  constructor(...name: string[]) {
    if (name.length === 0) name = ['Popcorn'];
    else if (name.length === 1) name = name[0]!.split(/\s*>\s*/);
    this.name = name.join(' > ');
  }

  #log(level: 'log' | 'info' | 'debug' | 'warn' | 'error', ...msg: Parameters<Console['log']>) {
    const banner = [
      (this.name !== 'Popcorn'
        ? `🍿 %c Popcorn > ${this.name} %c`
        : '🍿 %c Popcorn %c'),
      [
        `background-color: ${colors[level === 'log' ? 'brand' : level].str}`,
        'border-radius: 4px',
        'color: black',
        'font-weight: bold',
      ].join(';'),
      '',
    ];

    console[level](...banner, ...msg);
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
