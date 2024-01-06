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
