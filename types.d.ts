/// <reference path="./types/electron.d.ts" />

declare type Meta = {
  id: string;
  main: string;
};

declare type Config = {
  hotkey: string;
  themeDirs: string[];
  enabled: { [id: string]: boolean };
};

declare type SimpleTheme = {
  enabled: boolean;
  jsonLocation: string;
  mainLocation: string;
  css: string;
};

declare type Theme = SimpleTheme & {
  enable: (id: string, save?: boolean) => Promise<void>;
  disable: (id: string, save?: boolean) => Promise<void>;
  toggle: (id: string, save?: boolean) => Promise<void>;
};

declare type Popcorn = {
  themes: { [id: string]: Theme };
  enable: (id: string, save?: boolean) => Promise<void>;
  disable: (id: string, save?: boolean) => Promise<void>;
  toggle: (id: string, save?: boolean) => Promise<void>;
  quickCss?: any;
};
