/// <reference types="./utils.d.ts" />

declare const NODE_ENV: 'development' | 'production';
declare const DEBUG: boolean;
declare const pkg: typeof import('../package.json');

type Config = Omit<import('#types').Config, '$schema'>;
type Theme = Omit<import('#types').Theme, '$schema'>;

type ThemeResponse = {
  id: Theme['id'],
  version: import('semver').SemVer,
  css: string,
  main: string,
  meta: Omit<Theme, 'id' | 'version' | 'main'>,
};

type RendererAPI = {
  getThemes(): Promise<ThemeResponse[]> | undefined,
  getTheme(id: Theme['id']): Promise<ThemeResponse> | undefined,
  getUrls(): Promise<string[]> | undefined,
  getConfig(): Promise<Required<Config>>,
};

type MainAPI = {
  saveState: {
    file: string,
    status: 'saved' | 'failed',
  },
};

type ElectronAPI = RendererAPI & {
  [K in keyof MainAPI as `on${Capitalize<K & string>}`]: (handler: (
    event: import('./exports.ts').Electron.IpcRendererEvent, // pain
    ...args: ForceArr<MainAPI[K]>
  ) => void) => () => void
};
