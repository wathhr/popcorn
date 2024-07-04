import { colors } from '&/common';

const debugLog = DEBUG || PopcornAPI.getConfig().verbose;

class Logger implements Omit<Console, 'clear' | 'dir' | 'dirxml' | 'table' | 'trace' | 'profile' | 'profileEnd' | 'Console'> {
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

  assert: Console['assert'] = (condition, ...rest) => console.assert(
    condition,
    typeof rest[0] === 'string'
      ? `🍿 Popcorn > ${this.name} > ${rest.shift()!}`
      : `🍿 Popcorn > ${this.name}`,
    ...rest,
  );

  log: Console['log'] = (...msg) => this.#log('log', ...msg);
  info: Console['info'] = (...msg) => this.#log('info', ...msg);
  debug: Console['debug'] = (...msg) => debugLog && this.#log('debug', ...msg);
  warn: Console['warn'] = (...msg) => this.#log('warn', ...msg);
  error: Console['error'] = (...msg) => this.#log('error', ...msg);

  count = (label?: string) => console.count(label ? `🍿 Popcorn > ${this.name} > ${label}` : `🍿 Popcorn > ${this.name}`);
  countReset = (label?: string) => console.countReset(label ? `🍿 Popcorn > ${this.name} > ${label}` : `🍿 Popcorn > ${this.name}`);

  group = (label?: string) => console.group(label ? `🍿 Popcorn > ${this.name} > ${label}` : `🍿 Popcorn > ${this.name}`);
  groupCollapsed = (label?: string) => console.groupCollapsed(label ? `🍿 Popcorn > ${this.name} > ${label}` : `🍿 Popcorn > ${this.name}`);
  groupEnd = () => console.groupEnd();

  time = (label?: string) => console.time(label ? `🍿 Popcorn > ${this.name} > ${label}` : `🍿 Popcorn > ${this.name}`);
  timeEnd = (label?: string) => console.timeEnd(label ? `🍿 Popcorn > ${this.name} > ${label}` : `🍿 Popcorn > ${this.name}`);
  timeLog = (label?: string) => console.timeLog(label ? `🍿 Popcorn > ${this.name} > ${label}` : `🍿 Popcorn > ${this.name}`);
  timeStamp = (label?: string) => console.timeStamp(label ? `🍿 Popcorn > ${this.name} > ${label}` : `🍿 Popcorn > ${this.name}`);
}

export {
  Logger as CreateLogger,
  Logger as default,
};
