type IpcValues =
  keyof RendererAPI |
  keyof MainAPI |
  `${Lowercase<string>}${string}` & Record<never, never>; // any string but still keep auto-completion

/** @param name must be camelCase */
export const ipc = <T extends IpcValues>(name?: T) => `POPCORN_${(name ?? '').replace(/([A-Z])/g, '_$1').toUpperCase()}` as EventName<T>;

export type Color = {
  str: string,
  rgb: [NumRange<0, 256>, NumRange<0, 256>, NumRange<0, 256>],
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
