import { colors } from '#common';

class Logger {
  constructor(private name?: string) {}

  #log(level: 'log' | 'info' | 'debug' | 'warn' | 'error', ...msg: any[]) {
    // TODO: Move this to the `debug` function below, currently esbuild warns that it's either always true or false
    if (level === 'debug' && !DEBUG) return;

    const banner = [
      (this.name
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

  log = (...msg: any[]) => this.#log('log', ...msg);
  info = (...msg: any[]) => this.#log('info', ...msg);
  debug = (...msg: any[]) => this.#log('debug', ...msg);
  warn = (...msg: any[]) => this.#log('warn', ...msg);
  error = (...msg: any[]) => this.#log('error', ...msg);
}

export {
  Logger as createLogger,
  Logger as default,
};
