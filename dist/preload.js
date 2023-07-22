var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/common/constants.ts
function prefixValues(object, prefix) {
  const result = {};
  for (const key in object) {
    result[key] = prefix + object[key];
  }
  return result;
}
var prefixes, IPC, MESSAGES, RENDERER;
var init_constants = __esm({
  "src/common/constants.ts"() {
    prefixes = {
      main: "POPCORN_",
      quickCss: "QUICKCSS_"
    };
    IPC = prefixValues({
      // Misc
      getConfig: "GET_CONFIG",
      getStyles: "GET_STYLES",
      statusMessage: "STATUS_MESSAGE",
      getWindowData: "GET_WINDOW_DATA",
      log: "LOG",
      // Themes
      getThemes: "GET_THEMES",
      onThemeChange: "ON_THEME_CHANGE",
      saveThemeState: "SAVE_THEME_STATE",
      // QuickCSS
      getQuickCss: "GET_QUICK_CSS",
      onQuickCssChange: "ON_QUICK_CSS_CHANGE",
      createQuickCssNode: "CREATE_QUICK_CSS_NODE",
      deleteQuickCssNode: "DELETE_QUICK_CSS_NODE",
      renameQuickCssNode: "RENAME_QUICK_CSS_NODE",
      updateQuickCssFile: "SAVE_QUICK_CSS_FILE"
    }, prefixes.main);
    MESSAGES = {
      quickCss: prefixValues({
        created: "CREATED",
        deleted: "DELETED",
        renamed: "RENAMED",
        updated: "UPDATED"
      }, prefixes.quickCss)
    };
    RENDERER = prefixValues({
      stop: "STOP"
    }, prefixes.main);
  }
});

// src/common/logger.ts
var LoggerModule, logger_default;
var init_logger = __esm({
  "src/common/logger.ts"() {
    init_constants();
    LoggerModule = class _LoggerModule {
      constructor(module2, type = "console") {
        this.module = module2;
        this.output = _LoggerModule.getOutput(type);
        if (this.output === "ansi") {
          this.logArchive = [];
          (async () => {
            const { app } = await import("electron");
            app.on("web-contents-created", (_, webContents) => {
              for (const log of this.logArchive) {
                webContents.send(IPC.log, log.type, ...log.message);
              }
            });
          })();
        }
      }
      output;
      logArchive;
      static getOutput(output) {
        switch (output) {
          case "ansi":
          case "terminal":
            return "ansi";
          default:
            return "console";
        }
      }
      static getColor(type) {
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
            return {
              str: "gold",
              arr: [255, 215, 0]
            };
        }
      }
      static ansiColor(color, message) {
        return `\x1B[38;2;${color[0]};${color[1]};${color[2]}m${message}\x1B[0m`;
      }
      async #log(type, message) {
        const logColor = _LoggerModule.getColor(type);
        const banner = this.output === "ansi" ? [`[${_LoggerModule.ansiColor(logColor.arr, "Popcorn")} > ${this.module}]`] : [`[%cPopcorn%c > ${this.module}]`, `color: ${logColor.str};`, ""];
        console[type](...banner, ...message);
        if (this.output === "ansi") {
          const { BrowserWindow } = await import("electron");
          this.logArchive.push({ type, message });
          BrowserWindow.getAllWindows().forEach((win) => win.webContents.send(IPC.log, type, ...message));
        }
      }
      log = (...message) => this.#log("log", message);
      info = (...message) => this.#log("info", message);
      warn = (...message) => this.#log("warn", message);
      error = (...message) => this.#log("error", message);
      debug = (...message) => this.#log("debug", message);
    };
    logger_default = LoggerModule;
  }
});

// node_modules/.pnpm/w3c-css-validator@1.3.1/node_modules/w3c-css-validator/dist/validate-options.js
var require_validate_options = __commonJS({
  "node_modules/.pnpm/w3c-css-validator@1.3.1/node_modules/w3c-css-validator/dist/validate-options.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var allowedMediums = [
      "all",
      "braille",
      "embossed",
      "handheld",
      "print",
      "projection",
      "screen",
      "speech",
      "tty",
      "tv"
    ];
    var allowedWarningLevels = [0, 1, 2, 3];
    function validateOptions(options) {
      if (options) {
        if (options.medium && !allowedMediums.includes(options.medium)) {
          throw new Error(`The medium must be one of the following: ${allowedMediums.join(", ")}`);
        }
        if (options.warningLevel && !allowedWarningLevels.includes(options.warningLevel)) {
          throw new Error(`The warning level must be one of the following: ${allowedWarningLevels.join(", ")}`);
        }
        if (options.timeout !== void 0 && !Number.isInteger(options.timeout)) {
          throw new Error("The timeout must be an integer");
        }
        if (options.timeout && options.timeout < 0) {
          throw new Error("The timeout must be a positive integer");
        }
      }
    }
    exports.default = validateOptions;
  }
});

// node_modules/.pnpm/w3c-css-validator@1.3.1/node_modules/w3c-css-validator/dist/retrieve-validation/bad-status-error.js
var require_bad_status_error = __commonJS({
  "node_modules/.pnpm/w3c-css-validator@1.3.1/node_modules/w3c-css-validator/dist/retrieve-validation/bad-status-error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BadStatusError = class extends Error {
      constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.name = "BadStatusError";
      }
    };
    exports.default = BadStatusError;
  }
});

// node_modules/.pnpm/w3c-css-validator@1.3.1/node_modules/w3c-css-validator/dist/retrieve-validation/get-boundary.js
var require_get_boundary = __commonJS({
  "node_modules/.pnpm/w3c-css-validator@1.3.1/node_modules/w3c-css-validator/dist/retrieve-validation/get-boundary.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.boundaryLength = void 0;
    exports.boundaryLength = 34;
    var getBoundary = () => {
      const allowedChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let randomBoundaryPiece = "";
      for (let i = 0; i < 10; i += 1) {
        randomBoundaryPiece += allowedChars[Math.floor(Math.random() * allowedChars.length)];
      }
      return `----CSSValidatorBoundary${randomBoundaryPiece}`;
    };
    exports.default = getBoundary;
  }
});

// node_modules/.pnpm/w3c-css-validator@1.3.1/node_modules/w3c-css-validator/dist/retrieve-validation/browser.js
var require_browser = __commonJS({
  "node_modules/.pnpm/w3c-css-validator@1.3.1/node_modules/w3c-css-validator/dist/retrieve-validation/browser.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var bad_status_error_1 = __importDefault(require_bad_status_error());
    var get_boundary_1 = require_get_boundary();
    var retrieveInBrowser = (method, parameters, timeout) => __awaiter(void 0, void 0, void 0, function* () {
      const controller = new AbortController();
      setTimeout(() => {
        controller.abort();
      }, timeout);
      let res = null;
      try {
        res = yield fetch(`https://jigsaw.w3.org/css-validator/validator${method === "GET" ? parameters : ""}`, Object.assign({ method, signal: controller.signal }, method === "POST" ? {
          headers: {
            "Content-Type": `multipart/form-data; boundary=${parameters.slice(2, get_boundary_1.boundaryLength + 2)}`,
            "Content-Length": String(new TextEncoder().encode(parameters).byteLength)
          },
          body: parameters
        } : {}));
        if (!res.ok) {
          throw new bad_status_error_1.default(res.statusText, res.status);
        }
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
          throw new Error(`The request took longer than ${timeout}ms`);
        }
        throw err;
      }
      if (!res) {
        throw new Error("Response expected");
      }
      const data = yield res.json();
      return data.cssvalidation;
    });
    exports.default = retrieveInBrowser;
  }
});

// node_modules/.pnpm/w3c-css-validator@1.3.1/node_modules/w3c-css-validator/dist/retrieve-validation/node.js
var require_node = __commonJS({
  "node_modules/.pnpm/w3c-css-validator@1.3.1/node_modules/w3c-css-validator/dist/retrieve-validation/node.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var https = __importStar(require("https"));
    var bad_status_error_1 = __importDefault(require_bad_status_error());
    var get_boundary_1 = require_get_boundary();
    var util_1 = require("util");
    var retrieveInNode = (method, parameters, timeout) => __awaiter(void 0, void 0, void 0, function* () {
      return new Promise((resolve, reject) => {
        const req = https.request(`https://jigsaw.w3.org/css-validator/validator${method === "GET" ? parameters : ""}`, Object.assign({
          method,
          timeout
        }, method === "POST" ? {
          headers: {
            "Content-Type": `multipart/form-data; boundary=${parameters.slice(2, get_boundary_1.boundaryLength + 2)}`,
            "Content-Length": String(new util_1.TextEncoder().encode(parameters).byteLength)
          }
        } : {}), (res) => {
          var _a;
          if (typeof res.statusCode === "number" && (res.statusCode < 200 || res.statusCode >= 300)) {
            reject(new bad_status_error_1.default((_a = res.statusMessage) !== null && _a !== void 0 ? _a : "", res.statusCode));
          }
          let data = "";
          res.on("data", (chunk) => {
            try {
              data += chunk;
            } catch (error) {
              reject(error);
            }
          });
          res.on("end", () => {
            try {
              resolve(JSON.parse(data).cssvalidation);
            } catch (error) {
              reject(error);
            }
          });
        });
        if (method === "POST") {
          req.write(parameters);
        }
        req.on("timeout", () => {
          reject(new Error(`The request took longer than ${timeout}ms`));
        });
        req.end();
      });
    });
    exports.default = retrieveInNode;
  }
});

// node_modules/.pnpm/w3c-css-validator@1.3.1/node_modules/w3c-css-validator/dist/retrieve-validation/build-request-url-parameters.js
var require_build_request_url_parameters = __commonJS({
  "node_modules/.pnpm/w3c-css-validator@1.3.1/node_modules/w3c-css-validator/dist/retrieve-validation/build-request-url-parameters.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function buildRequestURLParameters(parameters) {
      var _a;
      const params = {
        uri: encodeURIComponent(parameters.url),
        usermedium: (_a = parameters === null || parameters === void 0 ? void 0 : parameters.medium) !== null && _a !== void 0 ? _a : "all",
        warning: (parameters === null || parameters === void 0 ? void 0 : parameters.warningLevel) ? parameters.warningLevel - 1 : "no",
        output: "application/json",
        profile: "css3"
      };
      return `?${Object.entries(params).map(([key, val]) => `${key}=${val}`).join("&")}`;
    }
    exports.default = buildRequestURLParameters;
  }
});

// node_modules/.pnpm/w3c-css-validator@1.3.1/node_modules/w3c-css-validator/dist/retrieve-validation/build-form-data.js
var require_build_form_data = __commonJS({
  "node_modules/.pnpm/w3c-css-validator@1.3.1/node_modules/w3c-css-validator/dist/retrieve-validation/build-form-data.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var get_boundary_1 = __importDefault(require_get_boundary());
    var buildFormData = (parameters) => {
      var _a;
      const CRLF = "\r\n";
      const boundary = `--${(0, get_boundary_1.default)()}`;
      const pieces = [
        `Content-Disposition: form-data; name="text"${CRLF}${CRLF}${parameters.text}${CRLF}`,
        `Content-Disposition: form-data; name="profile"${CRLF}${CRLF}css3${CRLF}`,
        `Content-Disposition: form-data; name="output"${CRLF}${CRLF}application/json${CRLF}`,
        `Content-Disposition: form-data; name="usermedium"${CRLF}${CRLF}${(_a = parameters.medium) !== null && _a !== void 0 ? _a : "all"}${CRLF}`,
        `Content-Disposition: form-data; name="warning"${CRLF}${CRLF}${(parameters === null || parameters === void 0 ? void 0 : parameters.warningLevel) ? String(parameters.warningLevel - 1) : "no"}${CRLF}`
      ];
      return `${boundary}${CRLF}${pieces.join(`${boundary}${CRLF}`)}${boundary}`;
    };
    exports.default = buildFormData;
  }
});

// node_modules/.pnpm/w3c-css-validator@1.3.1/node_modules/w3c-css-validator/dist/retrieve-validation/process-parameters.js
var require_process_parameters = __commonJS({
  "node_modules/.pnpm/w3c-css-validator@1.3.1/node_modules/w3c-css-validator/dist/retrieve-validation/process-parameters.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var build_request_url_parameters_1 = __importDefault(require_build_request_url_parameters());
    var build_form_data_1 = __importDefault(require_build_form_data());
    var processParameters = (method, parameters) => {
      if (method === "GET") {
        if ("text" in parameters) {
          throw new Error("A GET request is not supported with validation by text");
        }
        return (0, build_request_url_parameters_1.default)(parameters);
      }
      if (method === "POST") {
        if ("url" in parameters) {
          throw new Error("A POST request is not supported with validation by URL");
        }
        return (0, build_form_data_1.default)(parameters);
      }
      throw new Error(`Parameter processing called with unrecognized method: ${method}`);
    };
    exports.default = processParameters;
  }
});

// node_modules/.pnpm/w3c-css-validator@1.3.1/node_modules/w3c-css-validator/dist/retrieve-validation/index.js
var require_retrieve_validation = __commonJS({
  "node_modules/.pnpm/w3c-css-validator@1.3.1/node_modules/w3c-css-validator/dist/retrieve-validation/index.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var validate_options_1 = __importDefault(require_validate_options());
    var browser_1 = __importDefault(require_browser());
    var node_1 = __importDefault(require_node());
    var process_parameters_1 = __importDefault(require_process_parameters());
    var retrieveValidation = (method, unprocessedParameters, timeout) => __awaiter(void 0, void 0, void 0, function* () {
      (0, validate_options_1.default)({
        timeout,
        medium: unprocessedParameters.medium,
        warningLevel: unprocessedParameters.warningLevel
      });
      const parameters = (0, process_parameters_1.default)(method, unprocessedParameters);
      if (typeof window !== "undefined" && typeof (window === null || window === void 0 ? void 0 : window.fetch) === "function") {
        return yield (0, browser_1.default)(method, parameters, timeout);
      }
      return yield (0, node_1.default)(method, parameters, timeout);
    });
    exports.default = retrieveValidation;
  }
});

// node_modules/.pnpm/w3c-css-validator@1.3.1/node_modules/w3c-css-validator/dist/validate-text.js
var require_validate_text = __commonJS({
  "node_modules/.pnpm/w3c-css-validator@1.3.1/node_modules/w3c-css-validator/dist/validate-text.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var retrieve_validation_1 = __importDefault(require_retrieve_validation());
    function validateText(textToBeValidated, options) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function* () {
        if (!textToBeValidated) {
          throw new Error("You must pass in text to be validated");
        }
        if (typeof textToBeValidated !== "string") {
          throw new Error("The text to be validated must be a string");
        }
        const cssValidationResponse = yield (0, retrieve_validation_1.default)("POST", {
          text: textToBeValidated,
          medium: options === null || options === void 0 ? void 0 : options.medium,
          warningLevel: options === null || options === void 0 ? void 0 : options.warningLevel
        }, (_a = options === null || options === void 0 ? void 0 : options.timeout) !== null && _a !== void 0 ? _a : 1e4);
        const base = {
          valid: false,
          errors: []
        };
        const result = (options === null || options === void 0 ? void 0 : options.warningLevel) ? Object.assign(Object.assign({}, base), { warnings: [] }) : base;
        result.valid = cssValidationResponse.validity;
        (_b = cssValidationResponse.errors) === null || _b === void 0 ? void 0 : _b.forEach((error) => {
          result.errors.push({
            line: error.line,
            message: error.message.replace(/[ :]+$/, "").trim()
          });
        });
        if ("warnings" in result) {
          (_c = cssValidationResponse.warnings) === null || _c === void 0 ? void 0 : _c.forEach((warning) => {
            result.warnings.push({
              line: warning.line,
              message: warning.message.replace(/[ :]+$/, "").trim(),
              level: warning.level + 1
            });
          });
        }
        return result;
      });
    }
    exports.default = validateText;
  }
});

// node_modules/.pnpm/w3c-css-validator@1.3.1/node_modules/w3c-css-validator/dist/validate-url.js
var require_validate_url = __commonJS({
  "node_modules/.pnpm/w3c-css-validator@1.3.1/node_modules/w3c-css-validator/dist/validate-url.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var retrieve_validation_1 = __importDefault(require_retrieve_validation());
    function validateURL(urlToBeValidated, options) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function* () {
        if (!urlToBeValidated) {
          throw new Error("You must pass in a URL to be validated");
        }
        if (typeof urlToBeValidated !== "string") {
          throw new Error("The URL to be validated must be a string");
        }
        const cssValidationResponse = yield (0, retrieve_validation_1.default)("GET", {
          url: urlToBeValidated,
          medium: options === null || options === void 0 ? void 0 : options.medium,
          warningLevel: options === null || options === void 0 ? void 0 : options.warningLevel
        }, (_a = options === null || options === void 0 ? void 0 : options.timeout) !== null && _a !== void 0 ? _a : 1e4);
        const base = {
          valid: false,
          errors: []
        };
        const result = (options === null || options === void 0 ? void 0 : options.warningLevel) ? Object.assign(Object.assign({}, base), { warnings: [] }) : base;
        result.valid = cssValidationResponse.validity;
        (_b = cssValidationResponse.errors) === null || _b === void 0 ? void 0 : _b.forEach((error) => {
          var _a2;
          result.errors.push({
            line: error.line,
            message: error.message.replace(/[ :]+$/, "").trim(),
            url: (_a2 = error.source) !== null && _a2 !== void 0 ? _a2 : null
          });
        });
        if ("warnings" in result) {
          (_c = cssValidationResponse.warnings) === null || _c === void 0 ? void 0 : _c.forEach((warning) => {
            var _a2;
            result.warnings.push({
              line: warning.line,
              message: warning.message.replace(/[ :]+$/, "").trim(),
              level: warning.level + 1,
              url: (_a2 = warning.source) !== null && _a2 !== void 0 ? _a2 : null
            });
          });
        }
        return result;
      });
    }
    exports.default = validateURL;
  }
});

// node_modules/.pnpm/w3c-css-validator@1.3.1/node_modules/w3c-css-validator/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/w3c-css-validator@1.3.1/node_modules/w3c-css-validator/dist/index.js"(exports, module2) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    var validate_text_1 = __importDefault(require_validate_text());
    var validate_url_1 = __importDefault(require_validate_url());
    var cssValidator = {
      validateText: validate_text_1.default,
      validateURL: validate_url_1.default
    };
    module2.exports = cssValidator;
  }
});

// node_modules/.pnpm/auto-bind@5.0.1/node_modules/auto-bind/index.js
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
var getAllProperties;
var init_auto_bind = __esm({
  "node_modules/.pnpm/auto-bind@5.0.1/node_modules/auto-bind/index.js"() {
    getAllProperties = (object) => {
      const properties = /* @__PURE__ */ new Set();
      do {
        for (const key of Reflect.ownKeys(object)) {
          properties.add([object, key]);
        }
      } while ((object = Reflect.getPrototypeOf(object)) && object !== Object.prototype);
      return properties;
    };
  }
});

// src/preload/devserver.ts
var devserver_exports = {};
__export(devserver_exports, {
  default: () => WebServer
});
function parse(text) {
  try {
    return JSON.parse(text);
  } catch (_) {
    Logger.error("Invalid JSON:", text);
    return null;
  }
}
var Logger, WebServer;
var init_devserver = __esm({
  "src/preload/devserver.ts"() {
    init_auto_bind();
    init_constants();
    init_logger();
    Logger = new logger_default("Dev Server");
    WebServer = class {
      wss;
      constructor(port = 7331) {
        const ws = this.wss = new WebSocket(`ws://localhost:${port}`);
        autoBind(this);
        ws.onmessage = this.handleMessage;
        ws.onclose = () => Logger.info("Disconnected");
      }
      handleMessage(message) {
        const json = parse(message.data);
        if (!json)
          return;
        switch (json.type) {
          case "hello":
            {
              this.send("hello");
              Logger.info("Connected");
            }
            break;
          case "renderer.js":
            {
              Logger.info("Reloading renderer.js");
              window.postMessage(RENDERER.stop, "*");
              document.getElementById("popcorn-core")?.remove();
              const script = document.createElement("script");
              script.id = "popcorn-core";
              script.type = "module";
              script.textContent = json.data.content + ";\nrenderer_default.start();";
              document.head.prepend(script);
            }
            break;
          case "renderer.css":
            {
              Logger.info("Reloading renderer.css");
              const style = document.getElementById("popcorn-styles");
              style.id = "popcorn-styles";
              style.textContent = json.data.content;
            }
            break;
          case "preload.js":
            {
              location.reload();
            }
            break;
          case "main.js":
            break;
          default:
            {
              Logger.info("Received unknown message:", json);
            }
            break;
        }
      }
      send(type, data) {
        this.wss.send(JSON.stringify({
          type,
          data
        }));
      }
    };
  }
});

// src/preload/index.ts
var import_electron = require("electron");
init_constants();
init_logger();
var Logger2 = new logger_default("Preload");
var PopcornNative = {
  // Misc
  config: import_electron.ipcRenderer.sendSync(IPC.getConfig),
  getStyles: () => import_electron.ipcRenderer.invoke(IPC.getStyles),
  onStatusMessage: (listener) => import_electron.ipcRenderer.on(IPC.statusMessage, (_, message) => listener(message)),
  isSplash: isSplash(),
  // Themes
  getThemes: () => import_electron.ipcRenderer.invoke(IPC.getThemes),
  onThemeChange(listener) {
    const safeListener = (_, change) => listener(change);
    import_electron.ipcRenderer.on(IPC.onThemeChange, safeListener);
    return () => {
      Logger2.log("Stopping theme listener");
      import_electron.ipcRenderer.removeListener(IPC.onThemeChange, safeListener);
    };
  },
  saveThemeState: (id, state) => import_electron.ipcRenderer.send(IPC.saveThemeState, id, state),
  // QuickCSS
  getQuickCss: () => import_electron.ipcRenderer.invoke(IPC.getQuickCss),
  onQuickCssChange(listener) {
    const safeListener = (_, updated) => listener(updated);
    import_electron.ipcRenderer.on(IPC.onQuickCssChange, safeListener);
    return () => {
      Logger2.log("Stopping QuickCSS listener");
      import_electron.ipcRenderer.removeListener(IPC.onQuickCssChange, safeListener);
    };
  },
  createQuickCssNode: (location2, type) => import_electron.ipcRenderer.send(IPC.createQuickCssNode, location2, type),
  deleteQuickCssNode: (location2) => import_electron.ipcRenderer.send(IPC.deleteQuickCssNode, location2),
  renameQuickCssNode: (location2, newLocation) => import_electron.ipcRenderer.send(IPC.renameQuickCssNode, location2, newLocation),
  updateQuickCssFile: (location2, content) => import_electron.ipcRenderer.send(IPC.updateQuickCssFile, location2, content)
};
try {
  const cssValidator = require_dist();
  PopcornNative.validateCSS = cssValidator.validateText;
} catch (e) {
  Logger2.info("Disabled CSS Validator");
}
import_electron.contextBridge.exposeInMainWorld("PopcornNative", PopcornNative);
import_electron.ipcRenderer.on(IPC.log, (_, type, ...message) => {
  const Logger3 = new logger_default("Main");
  Logger3[type](...message);
});
function isSplash() {
  const possibleVars = [
    "splash",
    "Splash",
    "SPLASH",
    "__SPLASH",
    "__SPLASH__",
    "splashScreen",
    "SplashScreen",
    "SPLASHSCREEN",
    "__SPLASHSCREEN",
    "__SPLASHSCREEN__"
  ];
  for (const varName of possibleVars) {
    if (window[varName])
      return true;
  }
  const { windowOptions } = import_electron.ipcRenderer.sendSync(IPC.getWindowData);
  if (!windowOptions.webPreferences.nativeWindowOpen)
    return true;
  return false;
}
if (true)
  (async () => new (await Promise.resolve().then(() => (init_devserver(), devserver_exports))).default())();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2NvbW1vbi9jb25zdGFudHMudHMiLCAiLi4vc3JjL2NvbW1vbi9sb2dnZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3czYy1jc3MtdmFsaWRhdG9yQDEuMy4xL25vZGVfbW9kdWxlcy93M2MtY3NzLXZhbGlkYXRvci9kaXN0L3ZhbGlkYXRlLW9wdGlvbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3czYy1jc3MtdmFsaWRhdG9yQDEuMy4xL25vZGVfbW9kdWxlcy93M2MtY3NzLXZhbGlkYXRvci9kaXN0L3JldHJpZXZlLXZhbGlkYXRpb24vYmFkLXN0YXR1cy1lcnJvci5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vdzNjLWNzcy12YWxpZGF0b3JAMS4zLjEvbm9kZV9tb2R1bGVzL3czYy1jc3MtdmFsaWRhdG9yL2Rpc3QvcmV0cmlldmUtdmFsaWRhdGlvbi9nZXQtYm91bmRhcnkuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3czYy1jc3MtdmFsaWRhdG9yQDEuMy4xL25vZGVfbW9kdWxlcy93M2MtY3NzLXZhbGlkYXRvci9kaXN0L3JldHJpZXZlLXZhbGlkYXRpb24vYnJvd3Nlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vdzNjLWNzcy12YWxpZGF0b3JAMS4zLjEvbm9kZV9tb2R1bGVzL3czYy1jc3MtdmFsaWRhdG9yL2Rpc3QvcmV0cmlldmUtdmFsaWRhdGlvbi9ub2RlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS93M2MtY3NzLXZhbGlkYXRvckAxLjMuMS9ub2RlX21vZHVsZXMvdzNjLWNzcy12YWxpZGF0b3IvZGlzdC9yZXRyaWV2ZS12YWxpZGF0aW9uL2J1aWxkLXJlcXVlc3QtdXJsLXBhcmFtZXRlcnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3czYy1jc3MtdmFsaWRhdG9yQDEuMy4xL25vZGVfbW9kdWxlcy93M2MtY3NzLXZhbGlkYXRvci9kaXN0L3JldHJpZXZlLXZhbGlkYXRpb24vYnVpbGQtZm9ybS1kYXRhLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS93M2MtY3NzLXZhbGlkYXRvckAxLjMuMS9ub2RlX21vZHVsZXMvdzNjLWNzcy12YWxpZGF0b3IvZGlzdC9yZXRyaWV2ZS12YWxpZGF0aW9uL3Byb2Nlc3MtcGFyYW1ldGVycy5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vdzNjLWNzcy12YWxpZGF0b3JAMS4zLjEvbm9kZV9tb2R1bGVzL3czYy1jc3MtdmFsaWRhdG9yL2Rpc3QvcmV0cmlldmUtdmFsaWRhdGlvbi9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vdzNjLWNzcy12YWxpZGF0b3JAMS4zLjEvbm9kZV9tb2R1bGVzL3czYy1jc3MtdmFsaWRhdG9yL2Rpc3QvdmFsaWRhdGUtdGV4dC5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vdzNjLWNzcy12YWxpZGF0b3JAMS4zLjEvbm9kZV9tb2R1bGVzL3czYy1jc3MtdmFsaWRhdG9yL2Rpc3QvdmFsaWRhdGUtdXJsLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS93M2MtY3NzLXZhbGlkYXRvckAxLjMuMS9ub2RlX21vZHVsZXMvdzNjLWNzcy12YWxpZGF0b3IvZGlzdC9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vYXV0by1iaW5kQDUuMC4xL25vZGVfbW9kdWxlcy9hdXRvLWJpbmQvaW5kZXguanMiLCAiLi4vc3JjL3ByZWxvYWQvZGV2c2VydmVyLnRzIiwgIi4uL3NyYy9wcmVsb2FkL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgY29uc3QgcHJlZml4ZXMgPSB7XG4gIG1haW46ICdQT1BDT1JOXycsXG4gIHF1aWNrQ3NzOiAnUVVJQ0tDU1NfJ1xufTtcblxuZXhwb3J0IGNvbnN0IElQQyA9IHByZWZpeFZhbHVlcyh7XG4gIC8vIE1pc2NcbiAgZ2V0Q29uZmlnOiAnR0VUX0NPTkZJRycsXG4gIGdldFN0eWxlczogJ0dFVF9TVFlMRVMnLFxuICBzdGF0dXNNZXNzYWdlOiAnU1RBVFVTX01FU1NBR0UnLFxuICBnZXRXaW5kb3dEYXRhOiAnR0VUX1dJTkRPV19EQVRBJyxcbiAgbG9nOiAnTE9HJyxcblxuICAvLyBUaGVtZXNcbiAgZ2V0VGhlbWVzOiAnR0VUX1RIRU1FUycsXG4gIG9uVGhlbWVDaGFuZ2U6ICdPTl9USEVNRV9DSEFOR0UnLFxuICBzYXZlVGhlbWVTdGF0ZTogJ1NBVkVfVEhFTUVfU1RBVEUnLFxuXG4gIC8vIFF1aWNrQ1NTXG4gIGdldFF1aWNrQ3NzOiAnR0VUX1FVSUNLX0NTUycsXG4gIG9uUXVpY2tDc3NDaGFuZ2U6ICdPTl9RVUlDS19DU1NfQ0hBTkdFJyxcbiAgY3JlYXRlUXVpY2tDc3NOb2RlOiAnQ1JFQVRFX1FVSUNLX0NTU19OT0RFJyxcbiAgZGVsZXRlUXVpY2tDc3NOb2RlOiAnREVMRVRFX1FVSUNLX0NTU19OT0RFJyxcbiAgcmVuYW1lUXVpY2tDc3NOb2RlOiAnUkVOQU1FX1FVSUNLX0NTU19OT0RFJyxcbiAgdXBkYXRlUXVpY2tDc3NGaWxlOiAnU0FWRV9RVUlDS19DU1NfRklMRScsXG59LCBwcmVmaXhlcy5tYWluKTtcblxuZXhwb3J0IGNvbnN0IE1FU1NBR0VTID0ge1xuICBxdWlja0NzczogcHJlZml4VmFsdWVzKHtcbiAgICBjcmVhdGVkOiAnQ1JFQVRFRCcsXG4gICAgZGVsZXRlZDogJ0RFTEVURUQnLFxuICAgIHJlbmFtZWQ6ICdSRU5BTUVEJyxcbiAgICB1cGRhdGVkOiAnVVBEQVRFRCcsXG4gIH0sIHByZWZpeGVzLnF1aWNrQ3NzKSxcbn07XG5cbmV4cG9ydCBjb25zdCBSRU5ERVJFUiA9IHByZWZpeFZhbHVlcyh7XG4gIHN0b3A6ICdTVE9QJyxcbn0sIHByZWZpeGVzLm1haW4pO1xuXG5mdW5jdGlvbiBwcmVmaXhWYWx1ZXM8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4+KG9iamVjdDogVCwgcHJlZml4OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzdWx0ID0ge30gYXMgUmVjb3JkPGtleW9mIFQsIHN0cmluZz47XG4gIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgIHJlc3VsdFtrZXldID0gcHJlZml4ICsgb2JqZWN0W2tleV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsICJpbXBvcnQgeyBJUEMgfSBmcm9tICdAY29tbW9uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBMb2dnZXJNb2R1bGUge1xuICBwcml2YXRlIG91dHB1dDogc3RyaW5nO1xuICBwcml2YXRlIGxvZ0FyY2hpdmU6IHsgdHlwZTogc3RyaW5nOyBtZXNzYWdlOiBhbnlbXTsgfVtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kdWxlOiBzdHJpbmcsIHR5cGU6ICdhbnNpJyB8ICdjb25zb2xlJyA9ICdjb25zb2xlJykge1xuICAgIHRoaXMub3V0cHV0ID0gTG9nZ2VyTW9kdWxlLmdldE91dHB1dCh0eXBlKTtcblxuICAgIC8vIFRPRE86IENyZWF0ZSBhIGxvZ2dlciBzcGVjaWZpY2FsbHkgZm9yIG1haW4gYW5kIG1vdmUgdGhpcyB0aGVyZVxuICAgIC8vIFNlbmQgYWxsIGxvZ3MgZnJvbSB0aGUgbWFpbiBwcm9jZXNzIHRvIHRoZSByZW5kZXJlciBwcm9jZXNzIHdoZW4gaW5pdGlhbGl6ZWRcbiAgICBpZiAodGhpcy5vdXRwdXQgPT09ICdhbnNpJykge1xuICAgICAgdGhpcy5sb2dBcmNoaXZlID0gW107XG5cbiAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgYXBwIH0gPSBhd2FpdCBpbXBvcnQoJ2VsZWN0cm9uJyk7XG5cbiAgICAgICAgYXBwLm9uKCd3ZWItY29udGVudHMtY3JlYXRlZCcsIChfLCB3ZWJDb250ZW50cykgPT4ge1xuICAgICAgICAgIGZvciAoY29uc3QgbG9nIG9mIHRoaXMubG9nQXJjaGl2ZSkge1xuICAgICAgICAgICAgd2ViQ29udGVudHMuc2VuZChJUEMubG9nLCBsb2cudHlwZSwgLi4ubG9nLm1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGdldE91dHB1dChvdXRwdXQ6IHN0cmluZykge1xuICAgIHN3aXRjaCAob3V0cHV0KSB7XG4gICAgICBjYXNlICdhbnNpJzpcbiAgICAgIGNhc2UgJ3Rlcm1pbmFsJzpcbiAgICAgICAgcmV0dXJuICdhbnNpJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnY29uc29sZSc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0Q29sb3IodHlwZTogc3RyaW5nKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdkZWJ1Zyc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RyOiAnTWVkaXVtU3ByaW5nR3JlZW4nLFxuICAgICAgICAgIGFycjogWzAsIDI1MCwgMTU0XSxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0cjogJ0RlZXBTa3lCbHVlJyxcbiAgICAgICAgICBhcnI6IFswLCAxOTEsIDI1NV0sXG4gICAgICAgIH07XG4gICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RyOiAnY3JpbXNvbicsXG4gICAgICAgICAgYXJyOiBbMjIwLCAyMCwgNjBdLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnd2Fybic6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RyOiAnRGFya09yYW5nZScsXG4gICAgICAgICAgYXJyOiBbMjU1LCAxNDAsIDBdLFxuICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdHI6ICdnb2xkJyxcbiAgICAgICAgICBhcnI6IFsyNTUsIDIxNSwgMF0sXG4gICAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgYW5zaUNvbG9yKGNvbG9yOiBudW1iZXJbXSwgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGBcXHgxYlszODsyOyR7Y29sb3JbMF19OyR7Y29sb3JbMV19OyR7Y29sb3JbMl19bSR7bWVzc2FnZX1cXHgxYlswbWA7XG4gIH1cblxuICBhc3luYyAjbG9nKHR5cGU6IHN0cmluZywgbWVzc2FnZTogYW55W10pIHtcbiAgICBjb25zdCBsb2dDb2xvciA9IExvZ2dlck1vZHVsZS5nZXRDb2xvcih0eXBlKTtcblxuICAgIGNvbnN0IGJhbm5lciA9XG4gICAgICB0aGlzLm91dHB1dCA9PT0gJ2Fuc2knXG4gICAgICAgID8gW2BbJHtMb2dnZXJNb2R1bGUuYW5zaUNvbG9yKGxvZ0NvbG9yLmFyciwgJ1BvcGNvcm4nKX0gPiAke3RoaXMubW9kdWxlfV1gXVxuICAgICAgICA6IFtgWyVjUG9wY29ybiVjID4gJHt0aGlzLm1vZHVsZX1dYCwgYGNvbG9yOiAke2xvZ0NvbG9yLnN0cn07YCwgJyddO1xuXG4gICAgY29uc29sZVt0eXBlXSguLi5iYW5uZXIsIC4uLm1lc3NhZ2UpO1xuXG4gICAgLy8gVE9ETzogQ3JlYXRlIGEgbG9nZ2VyIHNwZWNpZmljYWxseSBmb3IgbWFpbiBhbmQgbW92ZSB0aGlzIHRoZXJlXG4gICAgaWYgKHRoaXMub3V0cHV0ID09PSAnYW5zaScpIHtcbiAgICAgIGNvbnN0IHsgQnJvd3NlcldpbmRvdyB9ID0gYXdhaXQgaW1wb3J0KCdlbGVjdHJvbicpO1xuICAgICAgdGhpcy5sb2dBcmNoaXZlLnB1c2goeyB0eXBlLCBtZXNzYWdlIH0pO1xuXG4gICAgICBCcm93c2VyV2luZG93LmdldEFsbFdpbmRvd3MoKS5mb3JFYWNoKCh3aW4pID0+IHdpbi53ZWJDb250ZW50cy5zZW5kKElQQy5sb2csIHR5cGUsIC4uLm1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cblxuICBsb2cgPSAoLi4ubWVzc2FnZTogYW55W10pID0+IHRoaXMuI2xvZygnbG9nJywgbWVzc2FnZSk7XG4gIGluZm8gPSAoLi4ubWVzc2FnZTogYW55W10pID0+IHRoaXMuI2xvZygnaW5mbycsIG1lc3NhZ2UpO1xuICB3YXJuID0gKC4uLm1lc3NhZ2U6IGFueVtdKSA9PiB0aGlzLiNsb2coJ3dhcm4nLCBtZXNzYWdlKTtcbiAgZXJyb3IgPSAoLi4ubWVzc2FnZTogYW55W10pID0+IHRoaXMuI2xvZygnZXJyb3InLCBtZXNzYWdlKTtcbiAgZGVidWcgPSAoLi4ubWVzc2FnZTogYW55W10pID0+IHRoaXMuI2xvZygnZGVidWcnLCBtZXNzYWdlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9nZ2VyTW9kdWxlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgYWxsb3dlZE1lZGl1bXMgPSBbXG4gICAgJ2FsbCcsXG4gICAgJ2JyYWlsbGUnLFxuICAgICdlbWJvc3NlZCcsXG4gICAgJ2hhbmRoZWxkJyxcbiAgICAncHJpbnQnLFxuICAgICdwcm9qZWN0aW9uJyxcbiAgICAnc2NyZWVuJyxcbiAgICAnc3BlZWNoJyxcbiAgICAndHR5JyxcbiAgICAndHYnLFxuXTtcbmNvbnN0IGFsbG93ZWRXYXJuaW5nTGV2ZWxzID0gWzAsIDEsIDIsIDNdO1xuZnVuY3Rpb24gdmFsaWRhdGVPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucy5tZWRpdW0gJiYgIWFsbG93ZWRNZWRpdW1zLmluY2x1ZGVzKG9wdGlvbnMubWVkaXVtKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgbWVkaXVtIG11c3QgYmUgb25lIG9mIHRoZSBmb2xsb3dpbmc6ICR7YWxsb3dlZE1lZGl1bXMuam9pbignLCAnKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy53YXJuaW5nTGV2ZWwgJiYgIWFsbG93ZWRXYXJuaW5nTGV2ZWxzLmluY2x1ZGVzKG9wdGlvbnMud2FybmluZ0xldmVsKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgd2FybmluZyBsZXZlbCBtdXN0IGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nOiAke2FsbG93ZWRXYXJuaW5nTGV2ZWxzLmpvaW4oJywgJyl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMudGltZW91dCAhPT0gdW5kZWZpbmVkICYmICFOdW1iZXIuaXNJbnRlZ2VyKG9wdGlvbnMudGltZW91dCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHRpbWVvdXQgbXVzdCBiZSBhbiBpbnRlZ2VyJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMudGltZW91dCAmJiBvcHRpb25zLnRpbWVvdXQgPCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSB0aW1lb3V0IG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSB2YWxpZGF0ZU9wdGlvbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBCYWRTdGF0dXNFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBzdGF0dXNDb2RlKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xuICAgICAgICB0aGlzLm5hbWUgPSAnQmFkU3RhdHVzRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEJhZFN0YXR1c0Vycm9yO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5ib3VuZGFyeUxlbmd0aCA9IHZvaWQgMDtcbmV4cG9ydHMuYm91bmRhcnlMZW5ndGggPSAzNDtcbmNvbnN0IGdldEJvdW5kYXJ5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGFsbG93ZWRDaGFycyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaMDEyMzQ1Njc4OSc7XG4gICAgbGV0IHJhbmRvbUJvdW5kYXJ5UGllY2UgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgICAgcmFuZG9tQm91bmRhcnlQaWVjZSArPSBhbGxvd2VkQ2hhcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWxsb3dlZENoYXJzLmxlbmd0aCldO1xuICAgIH1cbiAgICByZXR1cm4gYC0tLS1DU1NWYWxpZGF0b3JCb3VuZGFyeSR7cmFuZG9tQm91bmRhcnlQaWVjZX1gO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdldEJvdW5kYXJ5O1xuIiwgIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBiYWRfc3RhdHVzX2Vycm9yXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vYmFkLXN0YXR1cy1lcnJvclwiKSk7XG5jb25zdCBnZXRfYm91bmRhcnlfMSA9IHJlcXVpcmUoXCIuL2dldC1ib3VuZGFyeVwiKTtcbmNvbnN0IHJldHJpZXZlSW5Ccm93c2VyID0gKG1ldGhvZCwgcGFyYW1ldGVycywgdGltZW91dCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29udHJvbGxlci5hYm9ydCgpO1xuICAgIH0sIHRpbWVvdXQpO1xuICAgIGxldCByZXMgPSBudWxsO1xuICAgIHRyeSB7XG4gICAgICAgIHJlcyA9IHlpZWxkIGZldGNoKGBodHRwczovL2ppZ3Nhdy53My5vcmcvY3NzLXZhbGlkYXRvci92YWxpZGF0b3Ike21ldGhvZCA9PT0gJ0dFVCcgPyBwYXJhbWV0ZXJzIDogJyd9YCwgT2JqZWN0LmFzc2lnbih7IG1ldGhvZCwgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCB9LCAobWV0aG9kID09PSAnUE9TVCdcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6IGBtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0ke3BhcmFtZXRlcnMuc2xpY2UoMiwgZ2V0X2JvdW5kYXJ5XzEuYm91bmRhcnlMZW5ndGggKyAyKX1gLFxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1MZW5ndGgnOiBTdHJpbmcobmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHBhcmFtZXRlcnMpLmJ5dGVMZW5ndGgpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogcGFyYW1ldGVycyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDoge30pKSk7XG4gICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgYmFkX3N0YXR1c19lcnJvcl8xLmRlZmF1bHQocmVzLnN0YXR1c1RleHQsIHJlcy5zdGF0dXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yICYmIGVyci5uYW1lID09PSAnQWJvcnRFcnJvcicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHJlcXVlc3QgdG9vayBsb25nZXIgdGhhbiAke3RpbWVvdXR9bXNgKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICAgIGlmICghcmVzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmVzcG9uc2UgZXhwZWN0ZWQnKTtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9ICh5aWVsZCByZXMuanNvbigpKTtcbiAgICByZXR1cm4gZGF0YS5jc3N2YWxpZGF0aW9uO1xufSk7XG5leHBvcnRzLmRlZmF1bHQgPSByZXRyaWV2ZUluQnJvd3NlcjtcbiIsICJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBodHRwcyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiaHR0cHNcIikpO1xuY29uc3QgYmFkX3N0YXR1c19lcnJvcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2JhZC1zdGF0dXMtZXJyb3JcIikpO1xuY29uc3QgZ2V0X2JvdW5kYXJ5XzEgPSByZXF1aXJlKFwiLi9nZXQtYm91bmRhcnlcIik7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwidXRpbFwiKTtcbmNvbnN0IHJldHJpZXZlSW5Ob2RlID0gKG1ldGhvZCwgcGFyYW1ldGVycywgdGltZW91dCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgcmVxID0gaHR0cHMucmVxdWVzdChgaHR0cHM6Ly9qaWdzYXcudzMub3JnL2Nzcy12YWxpZGF0b3IvdmFsaWRhdG9yJHttZXRob2QgPT09ICdHRVQnID8gcGFyYW1ldGVycyA6ICcnfWAsIE9iamVjdC5hc3NpZ24oeyBtZXRob2QsXG4gICAgICAgICAgICB0aW1lb3V0IH0sIChtZXRob2QgPT09ICdQT1NUJ1xuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogYG11bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PSR7cGFyYW1ldGVycy5zbGljZSgyLCBnZXRfYm91bmRhcnlfMS5ib3VuZGFyeUxlbmd0aCArIDIpfWAsXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LUxlbmd0aCc6IFN0cmluZyhuZXcgdXRpbF8xLlRleHRFbmNvZGVyKCkuZW5jb2RlKHBhcmFtZXRlcnMpLmJ5dGVMZW5ndGgpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHt9KSksIChyZXMpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzLnN0YXR1c0NvZGUgPT09ICdudW1iZXInICYmIChyZXMuc3RhdHVzQ29kZSA8IDIwMCB8fCByZXMuc3RhdHVzQ29kZSA+PSAzMDApKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBiYWRfc3RhdHVzX2Vycm9yXzEuZGVmYXVsdCgoX2EgPSByZXMuc3RhdHVzTWVzc2FnZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJycsIHJlcy5zdGF0dXNDb2RlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGF0YSA9ICcnO1xuICAgICAgICAgICAgcmVzLm9uKCdkYXRhJywgKGNodW5rKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YSArPSBjaHVuaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXMub24oJ2VuZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UoZGF0YSkuY3NzdmFsaWRhdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICAgICAgICByZXEud3JpdGUocGFyYW1ldGVycyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVxLm9uKCd0aW1lb3V0JywgKCkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgVGhlIHJlcXVlc3QgdG9vayBsb25nZXIgdGhhbiAke3RpbWVvdXR9bXNgKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXEuZW5kKCk7XG4gICAgfSk7XG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJldHJpZXZlSW5Ob2RlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gYnVpbGRSZXF1ZXN0VVJMUGFyYW1ldGVycyhwYXJhbWV0ZXJzKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgdXJpOiBlbmNvZGVVUklDb21wb25lbnQocGFyYW1ldGVycy51cmwpLFxuICAgICAgICB1c2VybWVkaXVtOiAoX2EgPSBwYXJhbWV0ZXJzID09PSBudWxsIHx8IHBhcmFtZXRlcnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmFtZXRlcnMubWVkaXVtKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnYWxsJyxcbiAgICAgICAgd2FybmluZzogKHBhcmFtZXRlcnMgPT09IG51bGwgfHwgcGFyYW1ldGVycyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyYW1ldGVycy53YXJuaW5nTGV2ZWwpID8gcGFyYW1ldGVycy53YXJuaW5nTGV2ZWwgLSAxIDogJ25vJyxcbiAgICAgICAgb3V0cHV0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIHByb2ZpbGU6ICdjc3MzJyxcbiAgICB9O1xuICAgIHJldHVybiBgPyR7T2JqZWN0LmVudHJpZXMocGFyYW1zKVxuICAgICAgICAubWFwKChba2V5LCB2YWxdKSA9PiBgJHtrZXl9PSR7dmFsfWApXG4gICAgICAgIC5qb2luKCcmJyl9YDtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGJ1aWxkUmVxdWVzdFVSTFBhcmFtZXRlcnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBnZXRfYm91bmRhcnlfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9nZXQtYm91bmRhcnlcIikpO1xuY29uc3QgYnVpbGRGb3JtRGF0YSA9IChwYXJhbWV0ZXJzKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IENSTEYgPSAnXFxyXFxuJztcbiAgICBjb25zdCBib3VuZGFyeSA9IGAtLSR7KDAsIGdldF9ib3VuZGFyeV8xLmRlZmF1bHQpKCl9YDtcbiAgICBjb25zdCBwaWVjZXMgPSBbXG4gICAgICAgIGBDb250ZW50LURpc3Bvc2l0aW9uOiBmb3JtLWRhdGE7IG5hbWU9XCJ0ZXh0XCIke0NSTEZ9JHtDUkxGfSR7cGFyYW1ldGVycy50ZXh0fSR7Q1JMRn1gLFxuICAgICAgICBgQ29udGVudC1EaXNwb3NpdGlvbjogZm9ybS1kYXRhOyBuYW1lPVwicHJvZmlsZVwiJHtDUkxGfSR7Q1JMRn1jc3MzJHtDUkxGfWAsXG4gICAgICAgIGBDb250ZW50LURpc3Bvc2l0aW9uOiBmb3JtLWRhdGE7IG5hbWU9XCJvdXRwdXRcIiR7Q1JMRn0ke0NSTEZ9YXBwbGljYXRpb24vanNvbiR7Q1JMRn1gLFxuICAgICAgICBgQ29udGVudC1EaXNwb3NpdGlvbjogZm9ybS1kYXRhOyBuYW1lPVwidXNlcm1lZGl1bVwiJHtDUkxGfSR7Q1JMRn0keyhfYSA9IHBhcmFtZXRlcnMubWVkaXVtKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnYWxsJ30ke0NSTEZ9YCxcbiAgICAgICAgYENvbnRlbnQtRGlzcG9zaXRpb246IGZvcm0tZGF0YTsgbmFtZT1cIndhcm5pbmdcIiR7Q1JMRn0ke0NSTEZ9JHsocGFyYW1ldGVycyA9PT0gbnVsbCB8fCBwYXJhbWV0ZXJzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbWV0ZXJzLndhcm5pbmdMZXZlbCkgPyBTdHJpbmcocGFyYW1ldGVycy53YXJuaW5nTGV2ZWwgLSAxKSA6ICdubyd9JHtDUkxGfWAsXG4gICAgXTtcbiAgICByZXR1cm4gYCR7Ym91bmRhcnl9JHtDUkxGfSR7cGllY2VzLmpvaW4oYCR7Ym91bmRhcnl9JHtDUkxGfWApfSR7Ym91bmRhcnl9YDtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBidWlsZEZvcm1EYXRhO1xuIiwgIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgYnVpbGRfcmVxdWVzdF91cmxfcGFyYW1ldGVyc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2J1aWxkLXJlcXVlc3QtdXJsLXBhcmFtZXRlcnNcIikpO1xuY29uc3QgYnVpbGRfZm9ybV9kYXRhXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vYnVpbGQtZm9ybS1kYXRhXCIpKTtcbmNvbnN0IHByb2Nlc3NQYXJhbWV0ZXJzID0gKG1ldGhvZCwgcGFyYW1ldGVycykgPT4ge1xuICAgIGlmIChtZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgIGlmICgndGV4dCcgaW4gcGFyYW1ldGVycykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIEdFVCByZXF1ZXN0IGlzIG5vdCBzdXBwb3J0ZWQgd2l0aCB2YWxpZGF0aW9uIGJ5IHRleHQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKDAsIGJ1aWxkX3JlcXVlc3RfdXJsX3BhcmFtZXRlcnNfMS5kZWZhdWx0KShwYXJhbWV0ZXJzKTtcbiAgICB9XG4gICAgaWYgKG1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICAgIGlmICgndXJsJyBpbiBwYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgUE9TVCByZXF1ZXN0IGlzIG5vdCBzdXBwb3J0ZWQgd2l0aCB2YWxpZGF0aW9uIGJ5IFVSTCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoMCwgYnVpbGRfZm9ybV9kYXRhXzEuZGVmYXVsdCkocGFyYW1ldGVycyk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgUGFyYW1ldGVyIHByb2Nlc3NpbmcgY2FsbGVkIHdpdGggdW5yZWNvZ25pemVkIG1ldGhvZDogJHttZXRob2R9YCk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gcHJvY2Vzc1BhcmFtZXRlcnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHZhbGlkYXRlX29wdGlvbnNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vdmFsaWRhdGUtb3B0aW9uc1wiKSk7XG5jb25zdCBicm93c2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vYnJvd3NlclwiKSk7XG5jb25zdCBub2RlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbm9kZVwiKSk7XG5jb25zdCBwcm9jZXNzX3BhcmFtZXRlcnNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9wcm9jZXNzLXBhcmFtZXRlcnNcIikpO1xuY29uc3QgcmV0cmlldmVWYWxpZGF0aW9uID0gKG1ldGhvZCwgdW5wcm9jZXNzZWRQYXJhbWV0ZXJzLCB0aW1lb3V0KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAoMCwgdmFsaWRhdGVfb3B0aW9uc18xLmRlZmF1bHQpKHtcbiAgICAgICAgdGltZW91dCxcbiAgICAgICAgbWVkaXVtOiB1bnByb2Nlc3NlZFBhcmFtZXRlcnMubWVkaXVtLFxuICAgICAgICB3YXJuaW5nTGV2ZWw6IHVucHJvY2Vzc2VkUGFyYW1ldGVycy53YXJuaW5nTGV2ZWwsXG4gICAgfSk7XG4gICAgY29uc3QgcGFyYW1ldGVycyA9ICgwLCBwcm9jZXNzX3BhcmFtZXRlcnNfMS5kZWZhdWx0KShtZXRob2QsIHVucHJvY2Vzc2VkUGFyYW1ldGVycyk7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiAod2luZG93ID09PSBudWxsIHx8IHdpbmRvdyA9PT0gdm9pZCAwID8gdm9pZCAwIDogd2luZG93LmZldGNoKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4geWllbGQgKDAsIGJyb3dzZXJfMS5kZWZhdWx0KShtZXRob2QsIHBhcmFtZXRlcnMsIHRpbWVvdXQpO1xuICAgIH1cbiAgICByZXR1cm4geWllbGQgKDAsIG5vZGVfMS5kZWZhdWx0KShtZXRob2QsIHBhcmFtZXRlcnMsIHRpbWVvdXQpO1xufSk7XG5leHBvcnRzLmRlZmF1bHQgPSByZXRyaWV2ZVZhbGlkYXRpb247XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHJldHJpZXZlX3ZhbGlkYXRpb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9yZXRyaWV2ZS12YWxpZGF0aW9uXCIpKTtcbmZ1bmN0aW9uIHZhbGlkYXRlVGV4dCh0ZXh0VG9CZVZhbGlkYXRlZCwgb3B0aW9ucykge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmICghdGV4dFRvQmVWYWxpZGF0ZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG11c3QgcGFzcyBpbiB0ZXh0IHRvIGJlIHZhbGlkYXRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGV4dFRvQmVWYWxpZGF0ZWQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSB0ZXh0IHRvIGJlIHZhbGlkYXRlZCBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3NzVmFsaWRhdGlvblJlc3BvbnNlID0geWllbGQgKDAsIHJldHJpZXZlX3ZhbGlkYXRpb25fMS5kZWZhdWx0KSgnUE9TVCcsIHtcbiAgICAgICAgICAgIHRleHQ6IHRleHRUb0JlVmFsaWRhdGVkLFxuICAgICAgICAgICAgbWVkaXVtOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubWVkaXVtLFxuICAgICAgICAgICAgd2FybmluZ0xldmVsOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2FybmluZ0xldmVsLFxuICAgICAgICB9LCAoX2EgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMudGltZW91dCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogMTAwMDApO1xuICAgICAgICBjb25zdCBiYXNlID0ge1xuICAgICAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgICAgICAgZXJyb3JzOiBbXSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53YXJuaW5nTGV2ZWwpXG4gICAgICAgICAgICA/IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgYmFzZSksIHsgd2FybmluZ3M6IFtdIH0pIDogYmFzZTtcbiAgICAgICAgcmVzdWx0LnZhbGlkID0gY3NzVmFsaWRhdGlvblJlc3BvbnNlLnZhbGlkaXR5O1xuICAgICAgICAoX2IgPSBjc3NWYWxpZGF0aW9uUmVzcG9uc2UuZXJyb3JzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJlc3VsdC5lcnJvcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgbGluZTogZXJyb3IubGluZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLnJlcGxhY2UoL1sgOl0rJC8sICcnKS50cmltKCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICgnd2FybmluZ3MnIGluIHJlc3VsdCkge1xuICAgICAgICAgICAgKF9jID0gY3NzVmFsaWRhdGlvblJlc3BvbnNlLndhcm5pbmdzKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuZm9yRWFjaCgod2FybmluZykgPT4ge1xuICAgICAgICAgICAgICAgIHJlc3VsdC53YXJuaW5ncy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbGluZTogd2FybmluZy5saW5lLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB3YXJuaW5nLm1lc3NhZ2UucmVwbGFjZSgvWyA6XSskLywgJycpLnRyaW0oKSxcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWw6ICh3YXJuaW5nLmxldmVsICsgMSksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdmFsaWRhdGVUZXh0O1xuIiwgIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCByZXRyaWV2ZV92YWxpZGF0aW9uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcmV0cmlldmUtdmFsaWRhdGlvblwiKSk7XG5mdW5jdGlvbiB2YWxpZGF0ZVVSTCh1cmxUb0JlVmFsaWRhdGVkLCBvcHRpb25zKSB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKCF1cmxUb0JlVmFsaWRhdGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IHBhc3MgaW4gYSBVUkwgdG8gYmUgdmFsaWRhdGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB1cmxUb0JlVmFsaWRhdGVkICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgVVJMIHRvIGJlIHZhbGlkYXRlZCBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3NzVmFsaWRhdGlvblJlc3BvbnNlID0geWllbGQgKDAsIHJldHJpZXZlX3ZhbGlkYXRpb25fMS5kZWZhdWx0KSgnR0VUJywge1xuICAgICAgICAgICAgdXJsOiB1cmxUb0JlVmFsaWRhdGVkLFxuICAgICAgICAgICAgbWVkaXVtOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubWVkaXVtLFxuICAgICAgICAgICAgd2FybmluZ0xldmVsOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2FybmluZ0xldmVsLFxuICAgICAgICB9LCAoX2EgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMudGltZW91dCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogMTAwMDApO1xuICAgICAgICBjb25zdCBiYXNlID0ge1xuICAgICAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgICAgICAgZXJyb3JzOiBbXSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53YXJuaW5nTGV2ZWwpXG4gICAgICAgICAgICA/IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgYmFzZSksIHsgd2FybmluZ3M6IFtdIH0pIDogYmFzZTtcbiAgICAgICAgcmVzdWx0LnZhbGlkID0gY3NzVmFsaWRhdGlvblJlc3BvbnNlLnZhbGlkaXR5O1xuICAgICAgICAoX2IgPSBjc3NWYWxpZGF0aW9uUmVzcG9uc2UuZXJyb3JzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHJlc3VsdC5lcnJvcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgbGluZTogZXJyb3IubGluZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLnJlcGxhY2UoL1sgOl0rJC8sICcnKS50cmltKCksXG4gICAgICAgICAgICAgICAgdXJsOiAoX2EgPSBlcnJvci5zb3VyY2UpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG51bGwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICgnd2FybmluZ3MnIGluIHJlc3VsdCkge1xuICAgICAgICAgICAgKF9jID0gY3NzVmFsaWRhdGlvblJlc3BvbnNlLndhcm5pbmdzKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuZm9yRWFjaCgod2FybmluZykgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICByZXN1bHQud2FybmluZ3MucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGxpbmU6IHdhcm5pbmcubGluZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogd2FybmluZy5tZXNzYWdlLnJlcGxhY2UoL1sgOl0rJC8sICcnKS50cmltKCksXG4gICAgICAgICAgICAgICAgICAgIGxldmVsOiAod2FybmluZy5sZXZlbCArIDEpLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IChfYSA9IHdhcm5pbmcuc291cmNlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBudWxsLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHZhbGlkYXRlVVJMO1xuIiwgIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuY29uc3QgdmFsaWRhdGVfdGV4dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3ZhbGlkYXRlLXRleHRcIikpO1xuY29uc3QgdmFsaWRhdGVfdXJsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vdmFsaWRhdGUtdXJsXCIpKTtcbmNvbnN0IGNzc1ZhbGlkYXRvciA9IHtcbiAgICB2YWxpZGF0ZVRleHQ6IHZhbGlkYXRlX3RleHRfMS5kZWZhdWx0LFxuICAgIHZhbGlkYXRlVVJMOiB2YWxpZGF0ZV91cmxfMS5kZWZhdWx0LFxufTtcbm1vZHVsZS5leHBvcnRzID0gY3NzVmFsaWRhdG9yO1xuIiwgIi8vIEdldHMgYWxsIG5vbi1idWlsdGluIHByb3BlcnRpZXMgdXAgdGhlIHByb3RvdHlwZSBjaGFpbi5cbmNvbnN0IGdldEFsbFByb3BlcnRpZXMgPSBvYmplY3QgPT4ge1xuXHRjb25zdCBwcm9wZXJ0aWVzID0gbmV3IFNldCgpO1xuXG5cdGRvIHtcblx0XHRmb3IgKGNvbnN0IGtleSBvZiBSZWZsZWN0Lm93bktleXMob2JqZWN0KSkge1xuXHRcdFx0cHJvcGVydGllcy5hZGQoW29iamVjdCwga2V5XSk7XG5cdFx0fVxuXHR9IHdoaWxlICgob2JqZWN0ID0gUmVmbGVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpKSAmJiBvYmplY3QgIT09IE9iamVjdC5wcm90b3R5cGUpO1xuXG5cdHJldHVybiBwcm9wZXJ0aWVzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXV0b0JpbmQoc2VsZiwge2luY2x1ZGUsIGV4Y2x1ZGV9ID0ge30pIHtcblx0Y29uc3QgZmlsdGVyID0ga2V5ID0+IHtcblx0XHRjb25zdCBtYXRjaCA9IHBhdHRlcm4gPT4gdHlwZW9mIHBhdHRlcm4gPT09ICdzdHJpbmcnID8ga2V5ID09PSBwYXR0ZXJuIDogcGF0dGVybi50ZXN0KGtleSk7XG5cblx0XHRpZiAoaW5jbHVkZSkge1xuXHRcdFx0cmV0dXJuIGluY2x1ZGUuc29tZShtYXRjaCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgdW5pY29ybi9uby1hcnJheS1jYWxsYmFjay1yZWZlcmVuY2Vcblx0XHR9XG5cblx0XHRpZiAoZXhjbHVkZSkge1xuXHRcdFx0cmV0dXJuICFleGNsdWRlLnNvbWUobWF0Y2gpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHVuaWNvcm4vbm8tYXJyYXktY2FsbGJhY2stcmVmZXJlbmNlXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cblx0Zm9yIChjb25zdCBbb2JqZWN0LCBrZXldIG9mIGdldEFsbFByb3BlcnRpZXMoc2VsZi5jb25zdHJ1Y3Rvci5wcm90b3R5cGUpKSB7XG5cdFx0aWYgKGtleSA9PT0gJ2NvbnN0cnVjdG9yJyB8fCAhZmlsdGVyKGtleSkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGRlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIGtleSk7XG5cdFx0aWYgKGRlc2NyaXB0b3IgJiYgdHlwZW9mIGRlc2NyaXB0b3IudmFsdWUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHNlbGZba2V5XSA9IHNlbGZba2V5XS5iaW5kKHNlbGYpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzZWxmO1xufVxuIiwgImltcG9ydCBhdXRvQmluZCBmcm9tICdhdXRvLWJpbmQnO1xuaW1wb3J0IHsgUkVOREVSRVIgfSBmcm9tICdAY29tbW9uL2NvbnN0YW50cyc7XG5pbXBvcnQgTG9nZ2VyTW9kdWxlIGZyb20gJ0Bjb21tb24vbG9nZ2VyJztcbmNvbnN0IExvZ2dlciA9IG5ldyBMb2dnZXJNb2R1bGUoJ0RldiBTZXJ2ZXInKTtcblxuaW50ZXJmYWNlIE1lc3NhZ2Uge1xuICB0eXBlOiAnaGVsbG8nIHwgJ3JlbmRlcmVyLmpzJyB8ICdyZW5kZXJlci5jc3MnIHwgJ21haW4uanMnIHwgJ3ByZWxvYWQuanMnO1xuICBkYXRhPzogYW55O1xufVxuXG5mdW5jdGlvbiBwYXJzZSh0ZXh0OiBzdHJpbmcpOiBNZXNzYWdlIHwgbnVsbCB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UodGV4dCk7XG4gIH0gY2F0Y2ggKF8pIHtcbiAgICBMb2dnZXIuZXJyb3IoJ0ludmFsaWQgSlNPTjonLCB0ZXh0KTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWJTZXJ2ZXIge1xuICB3c3M6IFdlYlNvY2tldDtcblxuICBjb25zdHJ1Y3Rvcihwb3J0ID0gNzMzMSkge1xuICAgIGNvbnN0IHdzID0gdGhpcy53c3MgPSBuZXcgV2ViU29ja2V0KGB3czovL2xvY2FsaG9zdDoke3BvcnR9YCk7XG5cbiAgICBhdXRvQmluZCh0aGlzKTtcbiAgICB3cy5vbm1lc3NhZ2UgPSB0aGlzLmhhbmRsZU1lc3NhZ2U7XG4gICAgd3Mub25jbG9zZSA9ICgpID0+IExvZ2dlci5pbmZvKCdEaXNjb25uZWN0ZWQnKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlRXZlbnQ8c3RyaW5nPikge1xuICAgIGNvbnN0IGpzb246IE1lc3NhZ2UgPSBwYXJzZShtZXNzYWdlLmRhdGEpO1xuICAgIGlmICghanNvbikgcmV0dXJuO1xuXG4gICAgc3dpdGNoIChqc29uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2hlbGxvJzoge1xuICAgICAgICB0aGlzLnNlbmQoJ2hlbGxvJyk7XG4gICAgICAgIExvZ2dlci5pbmZvKCdDb25uZWN0ZWQnKTtcbiAgICAgIH0gYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3JlbmRlcmVyLmpzJzoge1xuICAgICAgICBMb2dnZXIuaW5mbygnUmVsb2FkaW5nIHJlbmRlcmVyLmpzJyk7XG4gICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZShSRU5ERVJFUi5zdG9wLCAnKicpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wY29ybi1jb3JlJyk/LnJlbW92ZSgpO1xuXG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzY3JpcHQuaWQgPSAncG9wY29ybi1jb3JlJztcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAnbW9kdWxlJztcbiAgICAgICAgLy8gVGhpcyBicmVha3MgaWYgdGhlIGNvZGUgaXMgbWluaWZpZWQgYmVjYXVzZSB0aGUgcmVuZGVyZXJfZGVmYXVsdCBuYW1lIGdldHMgbWluaWZpZWRcbiAgICAgICAgc2NyaXB0LnRleHRDb250ZW50ID0ganNvbi5kYXRhLmNvbnRlbnQgKyAnO1xcbnJlbmRlcmVyX2RlZmF1bHQuc3RhcnQoKTsnO1xuXG4gICAgICAgIGRvY3VtZW50LmhlYWQucHJlcGVuZChzY3JpcHQpO1xuICAgICAgfSBicmVhaztcblxuICAgICAgY2FzZSAncmVuZGVyZXIuY3NzJzoge1xuICAgICAgICBMb2dnZXIuaW5mbygnUmVsb2FkaW5nIHJlbmRlcmVyLmNzcycpO1xuXG4gICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcGNvcm4tc3R5bGVzJyk7XG4gICAgICAgIHN0eWxlLmlkID0gJ3BvcGNvcm4tc3R5bGVzJztcbiAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBqc29uLmRhdGEuY29udGVudDtcbiAgICAgIH0gYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3ByZWxvYWQuanMnOiB7XG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgfSBicmVhaztcblxuICAgICAgY2FzZSAnbWFpbi5qcyc6IGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIExvZ2dlci5pbmZvKCdSZWNlaXZlZCB1bmtub3duIG1lc3NhZ2U6JywganNvbik7XG4gICAgICB9IGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHNlbmQodHlwZTogc3RyaW5nLCBkYXRhPzogYW55KSB7XG4gICAgdGhpcy53c3Muc2VuZChKU09OLnN0cmluZ2lmeSh7XG4gICAgICB0eXBlLFxuICAgICAgZGF0YSxcbiAgICB9KSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBpcGNSZW5kZXJlciwgY29udGV4dEJyaWRnZSB9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7IElQQyB9IGZyb20gJ0Bjb21tb24vY29uc3RhbnRzJztcbmltcG9ydCBMb2dnZXJNb2R1bGUgZnJvbSAnQGNvbW1vbi9sb2dnZXInO1xuY29uc3QgTG9nZ2VyID0gbmV3IExvZ2dlck1vZHVsZSgnUHJlbG9hZCcpO1xuXG5jb25zdCBQb3Bjb3JuTmF0aXZlOiBQb3Bjb3JuTmF0aXZlID0ge1xuICAvLyBNaXNjXG4gIGNvbmZpZzogaXBjUmVuZGVyZXIuc2VuZFN5bmMoSVBDLmdldENvbmZpZyksXG4gIGdldFN0eWxlczogKCkgPT4gaXBjUmVuZGVyZXIuaW52b2tlKElQQy5nZXRTdHlsZXMpLFxuICBvblN0YXR1c01lc3NhZ2U6IChsaXN0ZW5lcikgPT4gaXBjUmVuZGVyZXIub24oSVBDLnN0YXR1c01lc3NhZ2UsIChfLCBtZXNzYWdlKSA9PiBsaXN0ZW5lcihtZXNzYWdlKSksXG4gIGlzU3BsYXNoOiBpc1NwbGFzaCgpLFxuXG4gIC8vIFRoZW1lc1xuICBnZXRUaGVtZXM6ICgpID0+IGlwY1JlbmRlcmVyLmludm9rZShJUEMuZ2V0VGhlbWVzKSxcbiAgb25UaGVtZUNoYW5nZShsaXN0ZW5lcikge1xuICAgIGNvbnN0IHNhZmVMaXN0ZW5lciA9IChfLCBjaGFuZ2UpID0+IGxpc3RlbmVyKGNoYW5nZSk7XG4gICAgaXBjUmVuZGVyZXIub24oSVBDLm9uVGhlbWVDaGFuZ2UsIHNhZmVMaXN0ZW5lcik7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIExvZ2dlci5sb2coJ1N0b3BwaW5nIHRoZW1lIGxpc3RlbmVyJyk7XG4gICAgICBpcGNSZW5kZXJlci5yZW1vdmVMaXN0ZW5lcihJUEMub25UaGVtZUNoYW5nZSwgc2FmZUxpc3RlbmVyKTtcbiAgICB9O1xuICB9LFxuXG4gIHNhdmVUaGVtZVN0YXRlOiAoaWQsIHN0YXRlKSA9PiBpcGNSZW5kZXJlci5zZW5kKElQQy5zYXZlVGhlbWVTdGF0ZSwgaWQsIHN0YXRlKSxcblxuICAvLyBRdWlja0NTU1xuICBnZXRRdWlja0NzczogKCkgPT4gaXBjUmVuZGVyZXIuaW52b2tlKElQQy5nZXRRdWlja0NzcyksXG4gIG9uUXVpY2tDc3NDaGFuZ2UobGlzdGVuZXIpIHtcbiAgICBjb25zdCBzYWZlTGlzdGVuZXIgPSAoXywgdXBkYXRlZCkgPT4gbGlzdGVuZXIodXBkYXRlZCk7XG4gICAgaXBjUmVuZGVyZXIub24oSVBDLm9uUXVpY2tDc3NDaGFuZ2UsIHNhZmVMaXN0ZW5lcik7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIExvZ2dlci5sb2coJ1N0b3BwaW5nIFF1aWNrQ1NTIGxpc3RlbmVyJyk7XG4gICAgICBpcGNSZW5kZXJlci5yZW1vdmVMaXN0ZW5lcihJUEMub25RdWlja0Nzc0NoYW5nZSwgc2FmZUxpc3RlbmVyKTtcbiAgICB9O1xuICB9LFxuXG4gIGNyZWF0ZVF1aWNrQ3NzTm9kZTogKGxvY2F0aW9uLCB0eXBlKSA9PiBpcGNSZW5kZXJlci5zZW5kKElQQy5jcmVhdGVRdWlja0Nzc05vZGUsIGxvY2F0aW9uLCB0eXBlKSxcbiAgZGVsZXRlUXVpY2tDc3NOb2RlOiAobG9jYXRpb24pID0+IGlwY1JlbmRlcmVyLnNlbmQoSVBDLmRlbGV0ZVF1aWNrQ3NzTm9kZSwgbG9jYXRpb24pLFxuICByZW5hbWVRdWlja0Nzc05vZGU6IChsb2NhdGlvbiwgbmV3TG9jYXRpb24pID0+IGlwY1JlbmRlcmVyLnNlbmQoSVBDLnJlbmFtZVF1aWNrQ3NzTm9kZSwgbG9jYXRpb24sIG5ld0xvY2F0aW9uKSxcbiAgdXBkYXRlUXVpY2tDc3NGaWxlOiAobG9jYXRpb24sIGNvbnRlbnQpID0+IGlwY1JlbmRlcmVyLnNlbmQoSVBDLnVwZGF0ZVF1aWNrQ3NzRmlsZSwgbG9jYXRpb24sIGNvbnRlbnQpLFxufTtcblxudHJ5IHtcbiAgY29uc3QgY3NzVmFsaWRhdG9yOiB0eXBlb2YgaW1wb3J0KCd3M2MtY3NzLXZhbGlkYXRvcicpID0gcmVxdWlyZSgndzNjLWNzcy12YWxpZGF0b3InKTtcbiAgUG9wY29ybk5hdGl2ZS52YWxpZGF0ZUNTUyA9IGNzc1ZhbGlkYXRvci52YWxpZGF0ZVRleHQ7XG59IGNhdGNoIChlKSB7XG4gIExvZ2dlci5pbmZvKCdEaXNhYmxlZCBDU1MgVmFsaWRhdG9yJyk7XG59XG5cbmNvbnRleHRCcmlkZ2UuZXhwb3NlSW5NYWluV29ybGQoJ1BvcGNvcm5OYXRpdmUnLCBQb3Bjb3JuTmF0aXZlKTtcblxuaXBjUmVuZGVyZXIub24oSVBDLmxvZywgKF8sIHR5cGUsIC4uLm1lc3NhZ2U6IGFueVtdKSA9PiB7XG4gIGNvbnN0IExvZ2dlciA9IG5ldyBMb2dnZXJNb2R1bGUoJ01haW4nKTtcblxuICBMb2dnZXJbdHlwZV0oLi4ubWVzc2FnZSk7XG59KTtcblxuZnVuY3Rpb24gaXNTcGxhc2goKSB7XG4gIGNvbnN0IHBvc3NpYmxlVmFycyA9IFtcbiAgICAnc3BsYXNoJyxcbiAgICAnU3BsYXNoJyxcbiAgICAnU1BMQVNIJyxcbiAgICAnX19TUExBU0gnLFxuICAgICdfX1NQTEFTSF9fJyxcbiAgICAnc3BsYXNoU2NyZWVuJyxcbiAgICAnU3BsYXNoU2NyZWVuJyxcbiAgICAnU1BMQVNIU0NSRUVOJyxcbiAgICAnX19TUExBU0hTQ1JFRU4nLFxuICAgICdfX1NQTEFTSFNDUkVFTl9fJ1xuICBdO1xuXG4gIGZvciAoY29uc3QgdmFyTmFtZSBvZiBwb3NzaWJsZVZhcnMpIHtcbiAgICBpZiAod2luZG93W3Zhck5hbWVdKSByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IHsgd2luZG93T3B0aW9ucyB9ID0gaXBjUmVuZGVyZXIuc2VuZFN5bmMoSVBDLmdldFdpbmRvd0RhdGEpO1xuICBpZiAoIXdpbmRvd09wdGlvbnMud2ViUHJlZmVyZW5jZXMubmF0aXZlV2luZG93T3BlbikgcmV0dXJuIHRydWU7XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5pZiAoTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIChhc3luYyAoKSA9PiBuZXcgKGF3YWl0IGltcG9ydCgnLi9kZXZzZXJ2ZXInKSkuZGVmYXVsdCkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3Q0EsU0FBUyxhQUErQyxRQUFXLFFBQWdCO0FBQ2pGLFFB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
