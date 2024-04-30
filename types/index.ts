import type { CamelToScreamingSnakeCase, ForceArr } from './utils';

export type Config = Omit<import('#types').Config, '$schema'>;
export type Theme = Omit<import('#types').Theme, '$schema'>;

export interface ThemeResponse {
  id: Theme['id'],
  version: import('semver').SemVer,
  css: string,
  main: string,
  meta: Omit<Theme, 'id' | 'version' | 'main'>,
}

export type EventName<T> = T extends string
  ? `POPCORN_${CamelToScreamingSnakeCase<T>}`
  : never;

export interface BrowserAPI {
  isBrowser: true,
  getThemes(): Promise<ThemeResponse[]>,
  getTheme(id: Theme['id']): Promise<ThemeResponse>,
  getUrls(): Promise<string[]>,
  getConfig(): Required<Config>,
}

export type ElectronAPI = Omit<BrowserAPI, 'isBrowser'> & MappedMainAPI & {
  isBrowser: false,
  $getWindowData(): Electron.WebContents['originalWindowData'],
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
    event: Electron.IpcRendererEvent,
    ...args: ForceArr<MainAPI[K]>
  ) => void) => () => void;
};
