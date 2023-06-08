import { rerenderTheme } from '@ui/tabs/Themes.svelte';

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
    if ('id' in target) rerenderTheme(target.id);
    return true;
  },
};
