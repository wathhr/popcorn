import LoggerModule from '@utils/logger';
const Logger = new LoggerModule('Proxy');

export default {
  get(target, key) {
    if (typeof target[key] === 'object' && target[key] !== null) {
      return new Proxy(target[key], this);
    } else {
      return target[key];
    }
  },
  set: (target, key, value) => {
    target[key] = value;
    return true;
  },
};
