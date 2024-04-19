/// <reference types="./utils.d.ts" />

declare const NODE_ENV: 'development' | 'production';
declare const DEBUG: boolean;
declare const pkg: typeof import('../package.json');
declare const isKernel: boolean;

type Config = Omit<import('#types').Config, '$schema'>;
type Theme = Omit<import('#types').Theme, '$schema'>;

interface ThemeResponse {
  id: Theme['id'],
  version: import('semver').SemVer,
  css: string,
  main: string,
  meta: Omit<Theme, 'id' | 'version' | 'main'>,
}

interface BrowserAPI {
  isBrowser: true,
  getThemes(): Promise<ThemeResponse[]>,
  getTheme(id: Theme['id']): Promise<ThemeResponse>,
  getUrls(): Promise<string[]>,
  getConfig(): Required<Config>,
}

type ElectronAPI = Omit<BrowserAPI, 'isBrowser'> & {
  isBrowser: false,
  getWindowData(): Electron.WebContents.originalWindowData,
  getMainLogs(): Promise<MainAPI['sendLog'][]>,
} & {
  [K in keyof MainAPI as `on${Capitalize<K & string>}`]: (handler: (
    // TODO: Remove the event field maybe for privacy concerns
    event: import('electron').IpcRendererEvent,
    ...args: ForceArr<MainAPI[K]>
  ) => void) => () => void;
};

interface MainAPI {
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
