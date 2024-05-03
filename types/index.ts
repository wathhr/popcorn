import type { CamelToScreamingSnakeCase, ForceArr } from './utils';
import type { Config, Theme } from '#types';

export type EventName<T> = T extends string
  ? `POPCORN_${CamelToScreamingSnakeCase<T>}`
  : never;

export interface BrowserAPI {
  isBrowser: true,
  getThemes(): Promise<Theme[]>,
  getUrls(): Promise<string[]>,
  getConfig(): Required<Config>,
}

export type ElectronAPI = Omit<BrowserAPI, 'isBrowser'> & MappedMainAPI & {
  isBrowser: false,
  $getWindowData(): import('electron').WebContents['originalWindowData'],
  getMainLogs(): Promise<MainAPI['sendLog'][]>,
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

type MappedMainAPI = {
  [K in keyof MainAPI as `on${Capitalize<K & string>}`]: (handler: (
    // TODO: Remove the event field maybe for privacy concerns
    event: import('electron').IpcRendererEvent,
    ...args: ForceArr<MainAPI[K]>
  ) => void) => () => void;
};
