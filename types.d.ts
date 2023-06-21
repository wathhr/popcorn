declare const NODE_ENV: 'development' | 'production';

declare type Config = {
  hotkey: string;
  quickCssDir: string;
  themeFiles: string[];
  enabled: { [id: string]: boolean };
  verbose?: boolean;
};

declare type Meta = {
  description?: string;
  id: string;
  main: string;
  splash?: string;
};

declare type SimpleTheme = {
  description?: string;
  enabled: boolean;
  id: string;
  json: string;
  main: string;
  splash?: string;
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

declare type StatusMessage = {
  type: string;
  success: boolean;
  data?: any
};
