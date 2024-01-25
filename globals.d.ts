declare const NODE_ENV: 'development' | 'production';
declare const DEBUG: boolean;
declare const PKG: typeof import('./package.json');

type Config = Partial<{
  hotkey: string,
  quickCssDir: string,
  themeDirs: string[],
  enabled: Record<Theme['id'], boolean>,
  verbose: boolean,
}>;

type RequiredConfig = Required<Config>;

type Theme = {
  /**
   * A unique identifier for the theme
   * @example "author.theme-name"
   */
  id: `${string}.${string}`,
  /**
   * The version of the theme, in {@link https://semver.org/|semver} format
   * This determines when the theme should be updated
   * @default "0.1.0"
   */
  version?: string,
  /** Relative path to the theme's CSS file */
  main: string,

  //* Meta
  name: string,
  description: string,
  /** Links to resources related to the theme */
  metaLinks?: Partial<{
    codeberg: string,
    discord: string,
    github: string,
    gitlab: string,
    [key: string]: string,
  }>,
};

type API = {
  getThemes(): Promise<Theme[]> | null,
  getTheme(id: Theme['id']): Promise<Theme> | null,
  getURLs(): Promise<string[]> | null,
  getConfig(): Promise<RequiredConfig>,
};
