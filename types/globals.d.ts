declare const NODE_ENV: 'development' | 'production';
declare const DEBUG: boolean;
declare const PKG: typeof import('../package.json');

type Config = Omit<import('./exports.ts').Config, '$schema'>;

type RequiredConfig = Required<Config>;

type Theme = Omit<import('./exports.ts').Theme, '$schema'>;

type ThemeResponse = {
  id: Theme['id'],
  version: import('semver').SemVer,
  css: string,
  main: string,
  meta: Omit<Theme, 'id' | 'version' | 'main'>,
};

type API = {
  getThemes(): Promise<ThemeResponse[]> | null,
  getTheme(id: Theme['id']): Promise<ThemeResponse> | null,
  getURLs(): Promise<string[]> | null,
  getConfig(): Promise<RequiredConfig>,
};
