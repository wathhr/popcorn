// src/utils/logger.ts
var color = {
  arr: [255, 215, 0],
  str: "rgb(255, 215, 0)"
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
  #ansiColor(color2, message) {
    return `\x1B[38;2;${color2[0]};${color2[1]};${color2[2]}m${message}\x1B[0m`;
  }
  #log(type, message) {
    const banner = this.output === "ansi" ? [`[${this.#ansiColor(color.arr, "Popcorn")} > ${this.module}]`] : [`[%cPopcorn%c > ${this.module}]`, `color: ${color.str};`, ""];
    console[this.#parseType(type)](...banner, ...message);
  }
  log = (...message) => this.#log("log", message);
  info = (...message) => this.#log("info", message);
  warn = (...message) => this.#log("warn", message);
  error = (...message) => this.#log("error", message);
  debug = (...message) => this.#log("debug", message);
};
var logger_default = LoggerModule;

// src/renderer/index.ts
var Logger = new logger_default("Renderer");
var preload = {
  async start() {
    Logger.log(await PopcornNative.getThemes());
  }
};
var renderer_default = preload;
export {
  renderer_default as default
};
