const padL = (str: string | number, pad = '0') => `${str}`.padStart(2, pad);

export const startTime = new Date();
export const startTimeString = `${[
  padL(startTime.getDate()),
  padL(startTime.getMonth() + 1),
  padL(startTime.getFullYear()),
].join('-')} ${[
  padL(startTime.getHours()),
  padL(startTime.getMinutes()),
  padL(startTime.getSeconds()),
].join('_')}`;
