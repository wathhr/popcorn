import { IPC } from '@common/constants';

export class LoggerModule {
  private output: string;

  constructor(private module: string, type = 'console') {
    this.output = LoggerModule.parseOutput(type);
  }

  private static parseOutput(output: string) {
    switch (output) {
      case 'ansi':
      case 'terminal':
        return 'ansi';
      default:
        return 'console';
    }
  }

  private static parseType(type: string) {
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

  private static parseColor(type: string) {
    switch (type) {
      case 'debug':
        return {
          str: 'MediumSpringGreen',
          arr: [0, 250, 154],
        };
      case 'info':
        return {
          str: 'DeepSkyBlue',
          arr: [0, 191, 255],
        };
      case 'error':
        return {
          str: 'crimson',
          arr: [220, 20, 60],
        };
      case 'warn':
        return {
          str: 'DarkOrange',
          arr: [255, 140, 0],
        };
      default:
        return {
          str: 'gold',
          arr: [255, 215, 0],
        };
    }
  }

  private static ansiColor(color: Array<number>, message: string) {
    return `\x1b[38;2;${color[0]};${color[1]};${color[2]}m${message}\x1b[0m`;
  }

  async #log(type: string, message: any[]) {
    type = LoggerModule.parseType(type);
    const logColor = LoggerModule.parseColor(type);

    const banner =
      this.output === 'ansi'
        ? [`[${LoggerModule.ansiColor(logColor.arr, 'Popcorn')} > ${this.module}]`]
        : [`[%cPopcorn%c > ${this.module}]`, `color: ${logColor.str};`, ''];

    console[type](...banner, ...message);

    // TODO: Don't send everything
    if (this.output === 'ansi') {
      const { BrowserWindow } = await import('electron');

      BrowserWindow.getAllWindows().forEach((win) => win.webContents.send(IPC.log, type, ...message));
    }
  }

  log = (...message: any[]) => this.#log('log', message);
  info = (...message: any[]) => this.#log('info', message);
  warn = (...message: any[]) => this.#log('warn', message);
  error = (...message: any[]) => this.#log('error', message);
  debug = (...message: any[]) => this.#log('debug', message);
}

export default LoggerModule;
