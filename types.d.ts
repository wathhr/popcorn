/// <reference path="./types/electron.d.ts" />

declare type Meta = {
  id: string;
  main: string;
};

declare type Config = {
  hotkey: string;
  themeDirs: string[];
  enabled: { [id: string]: boolean };
  verbose?: boolean;
};

declare type SimpleTheme = {
  css: string;
  enabled: boolean;
  id: string;
  jsonLocation: string;
  mainLocation: string;
};

declare type Theme = SimpleTheme & {
  enable: (save?: boolean) => void;
  disable: (save?: boolean) => void;
  toggle: (save?: boolean) => void;
};

declare type Popcorn = {
  themes: { [id: string]: Theme };
  enable: (id: string, save?: boolean) => void;
  disable: (id: string, save?: boolean) => void;
  toggle: (id: string, save?: boolean) => void;
  quickCss?: any;
};
