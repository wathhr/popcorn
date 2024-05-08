import type { CamelToScreamingSnakeCase, ForceArr } from './utils';
import type { Config, Theme } from '#types';

export interface BrowserAPI {
  isBrowser: true,
  isSplash: false,

  getThemes(): Promise<Theme[]>,
  getUserStyles(): Promise<string[]>,
  getConfig(): Required<Config>,
}

export interface ElectronAPI extends Omit<BrowserAPI, 'isBrowser' | 'isSplash'>, MappedMainAPI {
  isBrowser: false,
  isSplash: boolean,

  getMainLogs(): Promise<MainAPI['sendLog'][]>,

  // internals
  $getWindowData(): NonNullable<import('electron').WebContents['originalWindowData' | 'kernelWindowData']>,
};

export interface MainAPI {
  saveState: {
    file: string,
    status: 'saved' | 'failed',
  },
  sendLog: {
    component?: string,
    level: 'log' | 'info' | 'debug' | 'warn' | 'error',
    message: any,
    time?: number,
  },
}

export type EventName<T> = T extends string
  ? `POPCORN_${CamelToScreamingSnakeCase<T>}`
  : never;

type MappedMainAPI = {
  [K in keyof MainAPI as `on${Capitalize<K & string>}`]: (handler: (
    // TODO: Remove the event field maybe for privacy concerns
    event: import('electron').IpcRendererEvent,
    ...args: ForceArr<MainAPI[K]>
  ) => void) => () => void;
};
