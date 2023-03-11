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
