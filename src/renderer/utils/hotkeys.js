// https://betterprogramming.pub/full-featured-hotkeys-library-in-200-lines-of-javascript-code-81a74e3138cc

const isEqual = (a, b) => {
  const aKeys = Object.keys(a);

  if (aKeys.length !== Object.keys(b).length) {
    return false;
  }

  return aKeys.every((k) => Object.prototype.hasOwnProperty.call(b, k) && a[k] === b[k]);
};

const isArrayEqual = (a, b) => a.length === b.length && a.every((v, i) => isEqual(v, b[i]));

export const matchHotkey = (buffer, hotkey) => {
  if (buffer.length < hotkey.length) {
    return false;
  }

  const indexDiff = buffer.length - hotkey.length;
  for (let i = hotkey.length - 1; i >= 0; i -= 1) {
    if (!isEqual(buffer[indexDiff + i], hotkey[i])) {
      return false;
    }
  }

  return true;
};

const arrayToObject = (arr) => arr.reduce((obj, key) => ({ ...obj, [key]: true }), {});

const allModifiers = ['ctrl', 'shift', 'alt', 'meta'];
const indexedModifiers = arrayToObject(allModifiers);

const isHotkeyValid = (hotkey) => Object.keys(hotkey).filter((k) => !indexedModifiers[k]).length === 1;

const validate = (value, message) => {
  if (!value) {
    throw new Error(message);
  }
};

const validateType = (value, name, type) => {
  validate(typeof value === type, `The ${name} must be a ${type}; given ${typeof value}`);
};

export const normalizeHotkey = (hotkey) =>
  hotkey.split(/ +/g).map((part) => {
    const arr = part.split('+').filter(Boolean);
    const result = arrayToObject(arr);

    validate(Object.keys(result).length >= arr.length, `Hotkey combination has duplicates "${hotkey}"`);

    validate(isHotkeyValid(result), `Invalid hotkey combination: "${hotkey}"`);

    return result;
  });

const validateListenerArgs = (hotkey, callback) => {
  validateType(hotkey, 'hotkey', 'string');
  validateType(callback, 'callback', 'function');
};

const createListenersFn = (listeners, fn) => (hotkey, callback) => {
  validateListenerArgs(hotkey, callback);
  fn(listeners, hotkey, callback);
};

const registerListener = (listeners, hotkey, callback) => {
  listeners.push({ hotkey: normalizeHotkey(hotkey), callback });
};

const unregisterListener = (listeners, hotkey, callback) => {
  const normalized = normalizeHotkey(hotkey);

  const index = listeners.findIndex(
    (l) => l.callback === callback && isArrayEqual(normalized, l.hotkey)
  );

  if (index !== -1) {
    listeners.splice(index, 1);
  }
};

const debounce = (fn, time) => {
  let timeoutId = null;

  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(fn, time);
  };
};

const getKey = (key) => {
  switch (key) {
    case '+':
      return 'plus';
    case ' ':
      return 'space';
    default:
      // may be an uppercased letter, in case the shift is active
      return key.toLowerCase();
  }
};

const createKeyDownListener = (listeners, debounceTime) => {
  let buffer = [];

  const clearBufferDebounced = debounce(() => {
    buffer = [];
  }, debounceTime);

  return (event) => {
    if (event.repeat) {
      return;
    }

    if (event.getModifierState(event.key)) {
      return;
    }

    clearBufferDebounced();

    const description = {
      [getKey(event.key)]: true,
    };

    allModifiers.forEach((m) => {
      if (event[`${m}Key`]) {
        description[m] = true;
      }
    });

    buffer.push(description);

    listeners.forEach((listener) => {
      if (matchHotkey(buffer, listener.hotkey)) {
        listener.callback(event);
      }
    });
  };
};

const validateContext = (options) => {
  const { debounceTime = 500, autoEnable = true } = options || {};

  validateType(debounceTime, 'debounceTime', 'number');
  validate(debounceTime > 0, 'debounceTime must be > 0');
  validateType(autoEnable, 'autoEnable', 'boolean');

  return { debounceTime, autoEnable };
};

export const createContext = (options) => {
  const { debounceTime, autoEnable } = validateContext(options);

  const listeners = [];
  const keyDownListener = createKeyDownListener(listeners, debounceTime);

  const enable = () => document.addEventListener('keydown', keyDownListener);
  const disable = () => document.removeEventListener('keydown', keyDownListener);

  if (autoEnable) {
    enable();
  }

  return {
    register: createListenersFn(listeners, registerListener),
    unregister: createListenersFn(listeners, unregisterListener),
    enable,
    disable,
  };
};
