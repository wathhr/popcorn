// node_modules/.pnpm/auto-bind@5.0.1/node_modules/auto-bind/index.js
var getAllProperties = (object) => {
  const properties = /* @__PURE__ */ new Set();
  do {
    for (const key of Reflect.ownKeys(object)) {
      properties.add([object, key]);
    }
  } while ((object = Reflect.getPrototypeOf(object)) && object !== Object.prototype);
  return properties;
};
function autoBind(self, { include, exclude } = {}) {
  const filter = (key) => {
    const match = (pattern) => typeof pattern === "string" ? key === pattern : pattern.test(key);
    if (include) {
      return include.some(match);
    }
    if (exclude) {
      return !exclude.some(match);
    }
    return true;
  };
  for (const [object, key] of getAllProperties(self.constructor.prototype)) {
    if (key === "constructor" || !filter(key)) {
      continue;
    }
    const descriptor = Reflect.getOwnPropertyDescriptor(object, key);
    if (descriptor && typeof descriptor.value === "function") {
      self[key] = self[key].bind(self);
    }
  }
  return self;
}

// src/utils/logger.ts
var color = {
  str: "gold",
  arr: [255, 215, 0]
};
var LoggerModule = class {
  module;
  output;
  constructor(name, type = "console") {
    this.module = name;
    this.output = this.#parseOutput(type);
  }
  #parseOutput(output) {
    switch (output) {
      case "ansi":
      case "terminal":
        return "ansi";
      default:
        return "console";
    }
  }
  #parseType(type) {
    switch (type) {
      case "info":
      case "warn":
      case "error":
      case "debug":
        return type;
      default:
        return "log";
    }
  }
  #parseColor(type) {
    switch (type) {
      case "debug":
        return {
          str: "MediumSpringGreen",
          arr: [0, 250, 154]
        };
      case "info":
        return {
          str: "DeepSkyBlue",
          arr: [0, 191, 255]
        };
      case "error":
        return {
          str: "crimson",
          arr: [220, 20, 60]
        };
      case "warn":
        return {
          str: "DarkOrange",
          arr: [255, 140, 0]
        };
      default:
        return null;
    }
  }
  #ansiColor(color2, message) {
    return `\x1B[38;2;${color2[0]};${color2[1]};${color2[2]}m${message}\x1B[0m`;
  }
  #log(type, message) {
    const logColor = this.#parseColor(type) ?? color;
    const banner = this.output === "ansi" ? [`[${this.#ansiColor(logColor.arr, "Popcorn")} > ${this.module}]`] : [`[%cPopcorn%c > ${this.module}]`, `color: ${logColor.str || color.str};`, ""];
    console[this.#parseType(type)](...banner, ...message);
  }
  log = (...message) => this.#log("log", message);
  info = (...message) => this.#log("info", message);
  warn = (...message) => this.#log("warn", message);
  error = (...message) => this.#log("error", message);
  debug = (...message) => this.#log("debug", message);
};
var logger_default = LoggerModule;

// src/renderer/proxy.ts
var Logger = new logger_default("Proxy");
var proxy_default = {
  get(target, key) {
    if (typeof target[key] === "object" && target[key] !== null) {
      return new Proxy(target[key], this);
    } else {
      return target[key];
    }
  },
  set: (target, key, value) => {
    target[key] = value;
    return true;
  }
};

// src/renderer/index.ts
var Logger2 = new logger_default("Renderer");
var renderer_default = new class Renderer {
  comments;
  themeElements = /* @__PURE__ */ new Map();
  proxy;
  constructor() {
    autoBind(this);
  }
  async start() {
    const themes = await PopcornNative.getThemes();
    const Popcorn = {
      themes,
      enable: this.enable,
      disable: this.disable,
      toggle: this.toggle
    };
    window.Popcorn = Popcorn;
    this.proxy = new Proxy(Popcorn.themes, proxy_default);
    window.Popcorn.themes = this.proxy;
    const startComment = document.createComment("section:Popcorn");
    const endComment = document.createComment("endsection");
    document.head.append(startComment, endComment);
    this.comments = {
      start: startComment,
      end: endComment
    };
    this.populateThemes();
  }
  async populateThemes() {
    for (const theme of Object.keys(this.proxy)) {
      const themeMeta = this.proxy[theme];
      this.populateTheme(theme);
      Logger2.log(theme, themeMeta);
      if (themeMeta.enabled)
        await this.enable(theme, false);
    }
  }
  async populateTheme(id) {
    const themeMeta = this.proxy[id];
    themeMeta.enable = (id2, save = true) => this.enable(id2, save);
    themeMeta.disable = (id2, save = true) => this.disable(id2, save);
    themeMeta.toggle = (id2, save = true) => this.toggle(id2, save);
  }
  async enable(id, save = true) {
    const themeMeta = this.proxy[id];
    themeMeta.enabled = true;
    if (this.themeElements.has(id)) {
      Logger2.log(`"${id}" is already enabled.`);
      return;
    }
    const style = document.createElement("style");
    style.id = id;
    style.textContent = themeMeta.css;
    style.dataset.popcorn = "true";
    this.comments.end.before(style);
    this.themeElements.set(id, style);
    if (save)
      PopcornNative.saveState(id, true);
  }
  async disable(id, save = true) {
    const themeMeta = this.proxy[id];
    themeMeta.enabled = false;
    const style = this.themeElements.get(id);
    if (!style) {
      Logger2.warn(`"${id}" is not enabled.`);
      return;
    }
    this.themeElements.delete(id);
    style.remove();
    if (save)
      PopcornNative.saveState(id, false);
  }
  async toggle(id, save = true) {
    const themeMeta = this.proxy[id];
    themeMeta.enabled = !themeMeta.enabled;
    if (themeMeta.enabled)
      await this.enable(id, save);
    else
      await this.disable(id, save);
  }
  async stop() {
    delete window.Popcorn;
    const elements = [
      ...document.querySelectorAll("[data-popcorn]"),
      ...Object.values(this.comments)
    ];
    for (const element of elements) {
      element.remove();
    }
  }
}();
export {
  renderer_default as default
};
