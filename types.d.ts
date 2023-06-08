declare const NODE_ENV: 'development' | 'production';

declare type Config = {
  hotkey: string;
  quickCssDir: string;
  themeFiles: string[];
  enabled: { [id: string]: boolean };
  verbose?: boolean;
};

declare type Meta = {
  id: string;
  main: string;
};

declare type SimpleTheme = {
  enabled: boolean;
  id: string;
  jsonLocation: string;
  mainLocation: string;
};

declare type QuickCssFolder = {
  name: string;
  location: string;
  files: (QuickCssFile | QuickCssFolder)[];
};

declare type QuickCssFile = {
  name: string;
  location: string;
  content: string;
};
