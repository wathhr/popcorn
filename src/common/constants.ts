type IpcValues =
  keyof API |
  keyof MainAPI |
  string & Record<never, never>; // any string but still keep auto-completion

export const ipc = <T extends IpcValues>(name?: T) => `POPCORN_${(name ?? '').replace(/([A-Z])/g, '_$1').toUpperCase()}` as EventName<T>;

type Color = {
  str: string,
  rgb: [number, number, number],
};

export const colors = {
  brand: {
    str: 'gold',
    rgb: [255, 215, 0],
  },
  debug: {
    str: 'DeepSkyBlue',
    rgb: [0, 191, 255],
  },
  info: {
    str: 'MediumSpringGreen',
    rgb: [0, 250, 154],
  },
  warn: {
    str: 'DarkOrange',
    rgb: [255, 140, 0],
  },
  error: {
    str: 'crimson',
    rgb: [220, 20, 60],
  },
} as const satisfies Record<string, Color>;
