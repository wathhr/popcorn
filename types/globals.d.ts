/// <reference types="./utils.d.ts" />

declare const NODE_ENV: 'development' | 'production';
declare const DEBUG: boolean;
declare const pkg: typeof import('../package.json');

type Config = Omit<import('#types').Config, '$schema'>;
type Theme = Omit<import('#types').Theme, '$schema'>;

interface ThemeResponse {
  id: Theme['id'],
  version: import('semver').SemVer,
  css: string,
  main: string,
  meta: Omit<Theme, 'id' | 'version' | 'main'>,
}

interface RendererAPI {
  getThemes(): Promise<ThemeResponse[]> | undefined,
  getTheme(id: Theme['id']): Promise<ThemeResponse> | undefined,
  getUrls(): Promise<string[]> | undefined,
  getConfig(): Required<Config>,
}

interface BrowserAPI extends RendererAPI {
  isBrowser: true,
}

type ElectronAPI = RendererAPI & {
  isBrowser: false,
  getMainLogs(): Promise<MainAPI['sendLog'][]>,
} & {
  [K in keyof MainAPI as `on${Capitalize<K & string>}`]: (handler: (
    // TODO: Remove the event field maybe for privacy concerns
    event: import('./exports.ts').Electron.IpcRendererEvent, // pain
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
