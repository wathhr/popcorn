export const PREFIXES = {
  main: 'POPCORN_',
} as const;

export const RENDERER = prefixValues({
  softStop: 'SOFT_STOP',
  stop: 'STOP',
} as const);

function prefixValues<
  T extends Record<string, string>,
  U extends string = typeof PREFIXES.main,
>(object: T, prefix = PREFIXES.main as U) {
  const result = Object.fromEntries(Object.entries(object).map(([key, value]) => [key, prefix + value]));

  return result as {
    [K in keyof T]: `${U}${T[K]}`
  };
}

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
