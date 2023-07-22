declare const NODE_ENV: 'development' | 'production';

type Config = {
  hotkey: string;
  quickCssDir: string;
  themeFiles: string[];
  enabled: { [id: string]: boolean };
  verbose?: boolean;
};

type Meta = {
  description?: string;
  id: string;
  main: string;
  splash?: string;
};

type SimpleTheme = {
  description?: string;
  enabled: boolean;
  id: string;
  json: string;
  main: string;
  splash?: string;
};

type QuickCssFolder = {
  name: string;
  location: string;
  files: (QuickCssFile | QuickCssFolder)[];
};

type QuickCssFile = {
  name: string;
  location: string;
  content: string;
};

type StatusMessage = {
  type: string;
  success: boolean;
  data?: any
};
