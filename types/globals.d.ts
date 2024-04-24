/// <reference types="./utils.d.ts" />

declare const NODE_ENV: 'development' | 'production';
declare const DEBUG: boolean;
declare const pkg: typeof import('../package.json');

// eslint-disable-next-line unused-imports/no-unused-vars
namespace Popcorn {
  export type Config = Omit<import('#types').Config, '$schema'>;
  export type Theme = Omit<import('#types').Theme, '$schema'>;

  export interface ThemeResponse {
    id: Theme['id'],
    version: import('semver').SemVer,
    css: string,
    main: string,
    meta: Omit<Theme, 'id' | 'version' | 'main'>,
  }

  export interface BrowserAPI {
    isBrowser: true,
    getThemes(): Promise<ThemeResponse[]>,
    getTheme(id: Theme['id']): Promise<ThemeResponse>,
    getUrls(): Promise<string[]>,
    getConfig(): Required<Config>,
  }

  export type ElectronAPI = Omit<BrowserAPI, 'isBrowser'> & MappedMainAPI & {
    isBrowser: false,
    $getWindowData(): Electron.WebContents.originalWindowData,
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
}
