var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/preload/index.ts
var preload_exports = {};
__export(preload_exports, {
  PopcornNative: () => PopcornNative
});
module.exports = __toCommonJS(preload_exports);
var import_electron = require("electron");

// src/utils/constants.ts
var IPC = {
  getQuickCss: "POPCORN_GET_QUICK_CSS",
  getTheme: "POPCORN_GET_THEME",
  getThemes: "POPCORN_GET_THEMES",
  saveSetting: "POPCORN_SAVE_SETTING"
};

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

// src/preload/index.ts
var Logger = new logger_default("Preload");
var PopcornNative = {
  getThemes: () => import_electron.ipcRenderer.invoke(IPC.getThemes)
};
import_electron.contextBridge.exposeInMainWorld("PopcornNative", PopcornNative);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PopcornNative
});
