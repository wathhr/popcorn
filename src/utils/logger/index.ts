const color = {
  arr: [255, 215, 0],
  str: 'rgb(255, 215, 0)',
};

export class Logger {
  module: string;
  output: string;

  constructor(name: string, type: string = 'console') {
    this.module = name;
    this.output = this.#parseOutput(type);
  }

  #parseOutput(output: string) {
    switch (output) {
      case 'ansi':
      case 'terminal':
        return 'ansi';
      default:
        return 'console';
    }
  }

  #parseType(type: string) {
    switch (type) {
      case 'info':
      case 'warn':
      case 'error':
      case 'debug':
        return type;
      default:
        return 'log';
    }
  }

  #ansiColor(color: Array<number>, message: string) {
    return `\x1b[38;2;${color[0]};${color[1]};${color[2]}m${message}\x1b[0m`;
  }

  #log(type: string, message: any[]) {
    const banner =
      this.output === 'ansi'
        ? [`[${this.#ansiColor(color.arr, 'Popcorn')} > ${this.module}]`]
        : [`[%cPopcorn%c > ${this.module}]`, `color: ${color.str};`, ''];

    console[this.#parseType(type)](...banner, ...message);
  }

  log = (...message: any[]) => this.#log('log', message);
  info = (...message: any[]) => this.#log('info', message);
  warn = (...message: any[]) => this.#log('warn', message);
  error = (...message: any[]) => this.#log('error', message);
  debug = (...message: any[]) => this.#log('debug', message);
}

export default Logger;
