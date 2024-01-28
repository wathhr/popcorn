export type Theme = {
  $schema?: string,

  /**
   * A unique identifier for the theme
   * @example "author.theme-name"
   */
  id: `${string}.${string}`,
  /**
   * The version of the theme, in [semver](https://semver.org/) format
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

export type Config = Partial<{
  $schema?: string,

  hotkey: string,
  quickCssDir: string,
  themeDirs: string[],
  enabled: Record<Theme['id'], boolean>,
  verbose: boolean,
}>;
