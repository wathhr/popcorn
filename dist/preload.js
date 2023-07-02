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
    LoggerModule = class {
      constructor(module2, type = "console") {
        this.module = module2;
        this.output = LoggerModule.parseOutput(type);
      }
      output;
      static parseOutput(output) {
        switch (output) {
          case "ansi":
          case "terminal":
            return "ansi";
          default:
            return "console";
        }
      }
      static parseType(type) {
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
      static parseColor(type) {
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
        type = LoggerModule.parseType(type);
        const logColor = LoggerModule.parseColor(type);
        const banner = this.output === "ansi" ? [`[${LoggerModule.ansiColor(logColor.arr, "Popcorn")} > ${this.module}]`] : [`[%cPopcorn%c > ${this.module}]`, `color: ${logColor.str};`, ""];
        console[type](...banner, ...message);
        if (this.output === "ansi") {
          const { BrowserWindow } = await import("electron");
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
              Logger.info("Reloading preload.js");
              location.reload();
            }
            break;
          case "main.js":
            break;
          default: {
            Logger.info("Received unknown message:", json);
          }
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
  onThemeChange: (listener) => import_electron.ipcRenderer.on(IPC.onThemeChange, (_, change) => listener(change)),
  saveThemeState: (id, state) => import_electron.ipcRenderer.send(IPC.saveThemeState, id, state),
  // QuickCSS
  getQuickCss: () => import_electron.ipcRenderer.invoke(IPC.getQuickCss),
  onQuickCssChange: (listener) => import_electron.ipcRenderer.on(IPC.onQuickCssChange, (_, updated) => listener(updated)),
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
async function initDevServer() {
  return new (await Promise.resolve().then(() => (init_devserver(), devserver_exports))).default();
}
if (true)
  initDevServer();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2NvbW1vbi9jb25zdGFudHMudHMiLCAiLi4vc3JjL2NvbW1vbi9sb2dnZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3czYy1jc3MtdmFsaWRhdG9yQDEuMy4xL25vZGVfbW9kdWxlcy93M2MtY3NzLXZhbGlkYXRvci9kaXN0L3ZhbGlkYXRlLW9wdGlvbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3czYy1jc3MtdmFsaWRhdG9yQDEuMy4xL25vZGVfbW9kdWxlcy93M2MtY3NzLXZhbGlkYXRvci9kaXN0L3JldHJpZXZlLXZhbGlkYXRpb24vYmFkLXN0YXR1cy1lcnJvci5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vdzNjLWNzcy12YWxpZGF0b3JAMS4zLjEvbm9kZV9tb2R1bGVzL3czYy1jc3MtdmFsaWRhdG9yL2Rpc3QvcmV0cmlldmUtdmFsaWRhdGlvbi9nZXQtYm91bmRhcnkuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3czYy1jc3MtdmFsaWRhdG9yQDEuMy4xL25vZGVfbW9kdWxlcy93M2MtY3NzLXZhbGlkYXRvci9kaXN0L3JldHJpZXZlLXZhbGlkYXRpb24vYnJvd3Nlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vdzNjLWNzcy12YWxpZGF0b3JAMS4zLjEvbm9kZV9tb2R1bGVzL3czYy1jc3MtdmFsaWRhdG9yL2Rpc3QvcmV0cmlldmUtdmFsaWRhdGlvbi9ub2RlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS93M2MtY3NzLXZhbGlkYXRvckAxLjMuMS9ub2RlX21vZHVsZXMvdzNjLWNzcy12YWxpZGF0b3IvZGlzdC9yZXRyaWV2ZS12YWxpZGF0aW9uL2J1aWxkLXJlcXVlc3QtdXJsLXBhcmFtZXRlcnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3czYy1jc3MtdmFsaWRhdG9yQDEuMy4xL25vZGVfbW9kdWxlcy93M2MtY3NzLXZhbGlkYXRvci9kaXN0L3JldHJpZXZlLXZhbGlkYXRpb24vYnVpbGQtZm9ybS1kYXRhLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS93M2MtY3NzLXZhbGlkYXRvckAxLjMuMS9ub2RlX21vZHVsZXMvdzNjLWNzcy12YWxpZGF0b3IvZGlzdC9yZXRyaWV2ZS12YWxpZGF0aW9uL3Byb2Nlc3MtcGFyYW1ldGVycy5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vdzNjLWNzcy12YWxpZGF0b3JAMS4zLjEvbm9kZV9tb2R1bGVzL3czYy1jc3MtdmFsaWRhdG9yL2Rpc3QvcmV0cmlldmUtdmFsaWRhdGlvbi9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vdzNjLWNzcy12YWxpZGF0b3JAMS4zLjEvbm9kZV9tb2R1bGVzL3czYy1jc3MtdmFsaWRhdG9yL2Rpc3QvdmFsaWRhdGUtdGV4dC5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vdzNjLWNzcy12YWxpZGF0b3JAMS4zLjEvbm9kZV9tb2R1bGVzL3czYy1jc3MtdmFsaWRhdG9yL2Rpc3QvdmFsaWRhdGUtdXJsLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS93M2MtY3NzLXZhbGlkYXRvckAxLjMuMS9ub2RlX21vZHVsZXMvdzNjLWNzcy12YWxpZGF0b3IvZGlzdC9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vYXV0by1iaW5kQDUuMC4xL25vZGVfbW9kdWxlcy9hdXRvLWJpbmQvaW5kZXguanMiLCAiLi4vc3JjL3ByZWxvYWQvZGV2c2VydmVyLnRzIiwgIi4uL3NyYy9wcmVsb2FkL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgY29uc3QgcHJlZml4ZXMgPSB7XG4gIG1haW46ICdQT1BDT1JOXycsXG4gIHF1aWNrQ3NzOiAnUVVJQ0tDU1NfJ1xufTtcblxuZXhwb3J0IGNvbnN0IElQQyA9IHByZWZpeFZhbHVlcyh7XG4gIC8vIE1pc2NcbiAgZ2V0Q29uZmlnOiAnR0VUX0NPTkZJRycsXG4gIGdldFN0eWxlczogJ0dFVF9TVFlMRVMnLFxuICBzdGF0dXNNZXNzYWdlOiAnU1RBVFVTX01FU1NBR0UnLFxuICBnZXRXaW5kb3dEYXRhOiAnR0VUX1dJTkRPV19EQVRBJyxcbiAgbG9nOiAnTE9HJyxcblxuICAvLyBUaGVtZXNcbiAgZ2V0VGhlbWVzOiAnR0VUX1RIRU1FUycsXG4gIG9uVGhlbWVDaGFuZ2U6ICdPTl9USEVNRV9DSEFOR0UnLFxuICBzYXZlVGhlbWVTdGF0ZTogJ1NBVkVfVEhFTUVfU1RBVEUnLFxuXG4gIC8vIFF1aWNrQ1NTXG4gIGdldFF1aWNrQ3NzOiAnR0VUX1FVSUNLX0NTUycsXG4gIG9uUXVpY2tDc3NDaGFuZ2U6ICdPTl9RVUlDS19DU1NfQ0hBTkdFJyxcbiAgY3JlYXRlUXVpY2tDc3NOb2RlOiAnQ1JFQVRFX1FVSUNLX0NTU19OT0RFJyxcbiAgZGVsZXRlUXVpY2tDc3NOb2RlOiAnREVMRVRFX1FVSUNLX0NTU19OT0RFJyxcbiAgcmVuYW1lUXVpY2tDc3NOb2RlOiAnUkVOQU1FX1FVSUNLX0NTU19OT0RFJyxcbiAgdXBkYXRlUXVpY2tDc3NGaWxlOiAnU0FWRV9RVUlDS19DU1NfRklMRScsXG59LCBwcmVmaXhlcy5tYWluKTtcblxuZXhwb3J0IGNvbnN0IE1FU1NBR0VTID0ge1xuICBxdWlja0NzczogcHJlZml4VmFsdWVzKHtcbiAgICBjcmVhdGVkOiAnQ1JFQVRFRCcsXG4gICAgZGVsZXRlZDogJ0RFTEVURUQnLFxuICAgIHJlbmFtZWQ6ICdSRU5BTUVEJyxcbiAgICB1cGRhdGVkOiAnVVBEQVRFRCcsXG4gIH0sIHByZWZpeGVzLnF1aWNrQ3NzKSxcbn07XG5cbmV4cG9ydCBjb25zdCBSRU5ERVJFUiA9IHByZWZpeFZhbHVlcyh7XG4gIHN0b3A6ICdTVE9QJyxcbn0sIHByZWZpeGVzLm1haW4pO1xuXG5mdW5jdGlvbiBwcmVmaXhWYWx1ZXM8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4+KG9iamVjdDogVCwgcHJlZml4OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzdWx0ID0ge30gYXMgUmVjb3JkPGtleW9mIFQsIHN0cmluZz47XG4gIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgIHJlc3VsdFtrZXldID0gcHJlZml4ICsgb2JqZWN0W2tleV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsICJpbXBvcnQgeyBJUEMgfSBmcm9tICdAY29tbW9uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBMb2dnZXJNb2R1bGUge1xuICBwcml2YXRlIG91dHB1dDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kdWxlOiBzdHJpbmcsIHR5cGUgPSAnY29uc29sZScpIHtcbiAgICB0aGlzLm91dHB1dCA9IExvZ2dlck1vZHVsZS5wYXJzZU91dHB1dCh0eXBlKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHBhcnNlT3V0cHV0KG91dHB1dDogc3RyaW5nKSB7XG4gICAgc3dpdGNoIChvdXRwdXQpIHtcbiAgICAgIGNhc2UgJ2Fuc2knOlxuICAgICAgY2FzZSAndGVybWluYWwnOlxuICAgICAgICByZXR1cm4gJ2Fuc2knO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdjb25zb2xlJztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBwYXJzZVR5cGUodHlwZTogc3RyaW5nKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdpbmZvJzpcbiAgICAgIGNhc2UgJ3dhcm4nOlxuICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgY2FzZSAnZGVidWcnOlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnbG9nJztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBwYXJzZUNvbG9yKHR5cGU6IHN0cmluZykge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnZGVidWcnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0cjogJ01lZGl1bVNwcmluZ0dyZWVuJyxcbiAgICAgICAgICBhcnI6IFswLCAyNTAsIDE1NF0sXG4gICAgICAgIH07XG4gICAgICBjYXNlICdpbmZvJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdHI6ICdEZWVwU2t5Qmx1ZScsXG4gICAgICAgICAgYXJyOiBbMCwgMTkxLCAyNTVdLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0cjogJ2NyaW1zb24nLFxuICAgICAgICAgIGFycjogWzIyMCwgMjAsIDYwXSxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ3dhcm4nOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0cjogJ0RhcmtPcmFuZ2UnLFxuICAgICAgICAgIGFycjogWzI1NSwgMTQwLCAwXSxcbiAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RyOiAnZ29sZCcsXG4gICAgICAgICAgYXJyOiBbMjU1LCAyMTUsIDBdLFxuICAgICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGFuc2lDb2xvcihjb2xvcjogQXJyYXk8bnVtYmVyPiwgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGBcXHgxYlszODsyOyR7Y29sb3JbMF19OyR7Y29sb3JbMV19OyR7Y29sb3JbMl19bSR7bWVzc2FnZX1cXHgxYlswbWA7XG4gIH1cblxuICBhc3luYyAjbG9nKHR5cGU6IHN0cmluZywgbWVzc2FnZTogYW55W10pIHtcbiAgICB0eXBlID0gTG9nZ2VyTW9kdWxlLnBhcnNlVHlwZSh0eXBlKTtcbiAgICBjb25zdCBsb2dDb2xvciA9IExvZ2dlck1vZHVsZS5wYXJzZUNvbG9yKHR5cGUpO1xuXG4gICAgY29uc3QgYmFubmVyID1cbiAgICAgIHRoaXMub3V0cHV0ID09PSAnYW5zaSdcbiAgICAgICAgPyBbYFske0xvZ2dlck1vZHVsZS5hbnNpQ29sb3IobG9nQ29sb3IuYXJyLCAnUG9wY29ybicpfSA+ICR7dGhpcy5tb2R1bGV9XWBdXG4gICAgICAgIDogW2BbJWNQb3Bjb3JuJWMgPiAke3RoaXMubW9kdWxlfV1gLCBgY29sb3I6ICR7bG9nQ29sb3Iuc3RyfTtgLCAnJ107XG5cbiAgICBjb25zb2xlW3R5cGVdKC4uLmJhbm5lciwgLi4ubWVzc2FnZSk7XG5cbiAgICAvLyBUT0RPOiBEb24ndCBzZW5kIGV2ZXJ5dGhpbmdcbiAgICBpZiAodGhpcy5vdXRwdXQgPT09ICdhbnNpJykge1xuICAgICAgY29uc3QgeyBCcm93c2VyV2luZG93IH0gPSBhd2FpdCBpbXBvcnQoJ2VsZWN0cm9uJyk7XG5cbiAgICAgIEJyb3dzZXJXaW5kb3cuZ2V0QWxsV2luZG93cygpLmZvckVhY2goKHdpbikgPT4gd2luLndlYkNvbnRlbnRzLnNlbmQoSVBDLmxvZywgdHlwZSwgLi4ubWVzc2FnZSkpO1xuICAgIH1cbiAgfVxuXG4gIGxvZyA9ICguLi5tZXNzYWdlOiBhbnlbXSkgPT4gdGhpcy4jbG9nKCdsb2cnLCBtZXNzYWdlKTtcbiAgaW5mbyA9ICguLi5tZXNzYWdlOiBhbnlbXSkgPT4gdGhpcy4jbG9nKCdpbmZvJywgbWVzc2FnZSk7XG4gIHdhcm4gPSAoLi4ubWVzc2FnZTogYW55W10pID0+IHRoaXMuI2xvZygnd2FybicsIG1lc3NhZ2UpO1xuICBlcnJvciA9ICguLi5tZXNzYWdlOiBhbnlbXSkgPT4gdGhpcy4jbG9nKCdlcnJvcicsIG1lc3NhZ2UpO1xuICBkZWJ1ZyA9ICguLi5tZXNzYWdlOiBhbnlbXSkgPT4gdGhpcy4jbG9nKCdkZWJ1ZycsIG1lc3NhZ2UpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dnZXJNb2R1bGU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBhbGxvd2VkTWVkaXVtcyA9IFtcbiAgICAnYWxsJyxcbiAgICAnYnJhaWxsZScsXG4gICAgJ2VtYm9zc2VkJyxcbiAgICAnaGFuZGhlbGQnLFxuICAgICdwcmludCcsXG4gICAgJ3Byb2plY3Rpb24nLFxuICAgICdzY3JlZW4nLFxuICAgICdzcGVlY2gnLFxuICAgICd0dHknLFxuICAgICd0dicsXG5dO1xuY29uc3QgYWxsb3dlZFdhcm5pbmdMZXZlbHMgPSBbMCwgMSwgMiwgM107XG5mdW5jdGlvbiB2YWxpZGF0ZU9wdGlvbnMob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zLm1lZGl1bSAmJiAhYWxsb3dlZE1lZGl1bXMuaW5jbHVkZXMob3B0aW9ucy5tZWRpdW0pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtZWRpdW0gbXVzdCBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZzogJHthbGxvd2VkTWVkaXVtcy5qb2luKCcsICcpfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLndhcm5pbmdMZXZlbCAmJiAhYWxsb3dlZFdhcm5pbmdMZXZlbHMuaW5jbHVkZXMob3B0aW9ucy53YXJuaW5nTGV2ZWwpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSB3YXJuaW5nIGxldmVsIG11c3QgYmUgb25lIG9mIHRoZSBmb2xsb3dpbmc6ICR7YWxsb3dlZFdhcm5pbmdMZXZlbHMuam9pbignLCAnKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy50aW1lb3V0ICE9PSB1bmRlZmluZWQgJiYgIU51bWJlci5pc0ludGVnZXIob3B0aW9ucy50aW1lb3V0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgdGltZW91dCBtdXN0IGJlIGFuIGludGVnZXInKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy50aW1lb3V0ICYmIG9wdGlvbnMudGltZW91dCA8IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHRpbWVvdXQgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXInKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHZhbGlkYXRlT3B0aW9ucztcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIEJhZFN0YXR1c0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIHN0YXR1c0NvZGUpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XG4gICAgICAgIHRoaXMubmFtZSA9ICdCYWRTdGF0dXNFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gQmFkU3RhdHVzRXJyb3I7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmJvdW5kYXJ5TGVuZ3RoID0gdm9pZCAwO1xuZXhwb3J0cy5ib3VuZGFyeUxlbmd0aCA9IDM0O1xuY29uc3QgZ2V0Qm91bmRhcnkgPSAoKSA9PiB7XG4gICAgY29uc3QgYWxsb3dlZENoYXJzID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVowMTIzNDU2Nzg5JztcbiAgICBsZXQgcmFuZG9tQm91bmRhcnlQaWVjZSA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgICByYW5kb21Cb3VuZGFyeVBpZWNlICs9IGFsbG93ZWRDaGFyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhbGxvd2VkQ2hhcnMubGVuZ3RoKV07XG4gICAgfVxuICAgIHJldHVybiBgLS0tLUNTU1ZhbGlkYXRvckJvdW5kYXJ5JHtyYW5kb21Cb3VuZGFyeVBpZWNlfWA7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0Qm91bmRhcnk7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGJhZF9zdGF0dXNfZXJyb3JfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9iYWQtc3RhdHVzLWVycm9yXCIpKTtcbmNvbnN0IGdldF9ib3VuZGFyeV8xID0gcmVxdWlyZShcIi4vZ2V0LWJvdW5kYXJ5XCIpO1xuY29uc3QgcmV0cmlldmVJbkJyb3dzZXIgPSAobWV0aG9kLCBwYXJhbWV0ZXJzLCB0aW1lb3V0KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb250cm9sbGVyLmFib3J0KCk7XG4gICAgfSwgdGltZW91dCk7XG4gICAgbGV0IHJlcyA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgICAgcmVzID0geWllbGQgZmV0Y2goYGh0dHBzOi8vamlnc2F3LnczLm9yZy9jc3MtdmFsaWRhdG9yL3ZhbGlkYXRvciR7bWV0aG9kID09PSAnR0VUJyA/IHBhcmFtZXRlcnMgOiAnJ31gLCBPYmplY3QuYXNzaWduKHsgbWV0aG9kLCBzaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsIH0sIChtZXRob2QgPT09ICdQT1NUJ1xuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogYG11bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PSR7cGFyYW1ldGVycy5zbGljZSgyLCBnZXRfYm91bmRhcnlfMS5ib3VuZGFyeUxlbmd0aCArIDIpfWAsXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LUxlbmd0aCc6IFN0cmluZyhuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUocGFyYW1ldGVycykuYnl0ZUxlbmd0aCksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBwYXJhbWV0ZXJzLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB7fSkpKTtcbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBiYWRfc3RhdHVzX2Vycm9yXzEuZGVmYXVsdChyZXMuc3RhdHVzVGV4dCwgcmVzLnN0YXR1cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IgJiYgZXJyLm5hbWUgPT09ICdBYm9ydEVycm9yJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgcmVxdWVzdCB0b29rIGxvbmdlciB0aGFuICR7dGltZW91dH1tc2ApO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9XG4gICAgaWYgKCFyZXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXNwb25zZSBleHBlY3RlZCcpO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gKHlpZWxkIHJlcy5qc29uKCkpO1xuICAgIHJldHVybiBkYXRhLmNzc3ZhbGlkYXRpb247XG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJldHJpZXZlSW5Ccm93c2VyO1xuIiwgIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGh0dHBzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJodHRwc1wiKSk7XG5jb25zdCBiYWRfc3RhdHVzX2Vycm9yXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vYmFkLXN0YXR1cy1lcnJvclwiKSk7XG5jb25zdCBnZXRfYm91bmRhcnlfMSA9IHJlcXVpcmUoXCIuL2dldC1ib3VuZGFyeVwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ1dGlsXCIpO1xuY29uc3QgcmV0cmlldmVJbk5vZGUgPSAobWV0aG9kLCBwYXJhbWV0ZXJzLCB0aW1lb3V0KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCByZXEgPSBodHRwcy5yZXF1ZXN0KGBodHRwczovL2ppZ3Nhdy53My5vcmcvY3NzLXZhbGlkYXRvci92YWxpZGF0b3Ike21ldGhvZCA9PT0gJ0dFVCcgPyBwYXJhbWV0ZXJzIDogJyd9YCwgT2JqZWN0LmFzc2lnbih7IG1ldGhvZCxcbiAgICAgICAgICAgIHRpbWVvdXQgfSwgKG1ldGhvZCA9PT0gJ1BPU1QnXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiBgbXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9JHtwYXJhbWV0ZXJzLnNsaWNlKDIsIGdldF9ib3VuZGFyeV8xLmJvdW5kYXJ5TGVuZ3RoICsgMil9YCxcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtTGVuZ3RoJzogU3RyaW5nKG5ldyB1dGlsXzEuVGV4dEVuY29kZXIoKS5lbmNvZGUocGFyYW1ldGVycykuYnl0ZUxlbmd0aCksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDoge30pKSwgKHJlcykgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXMuc3RhdHVzQ29kZSA9PT0gJ251bWJlcicgJiYgKHJlcy5zdGF0dXNDb2RlIDwgMjAwIHx8IHJlcy5zdGF0dXNDb2RlID49IDMwMCkpIHtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IGJhZF9zdGF0dXNfZXJyb3JfMS5kZWZhdWx0KChfYSA9IHJlcy5zdGF0dXNNZXNzYWdlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJywgcmVzLnN0YXR1c0NvZGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkYXRhID0gJyc7XG4gICAgICAgICAgICByZXMub24oJ2RhdGEnLCAoY2h1bmspID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhICs9IGNodW5rO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlcy5vbignZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShkYXRhKS5jc3N2YWxpZGF0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgICAgICAgIHJlcS53cml0ZShwYXJhbWV0ZXJzKTtcbiAgICAgICAgfVxuICAgICAgICByZXEub24oJ3RpbWVvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBUaGUgcmVxdWVzdCB0b29rIGxvbmdlciB0aGFuICR7dGltZW91dH1tc2ApKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlcS5lbmQoKTtcbiAgICB9KTtcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcmV0cmlldmVJbk5vZGU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBidWlsZFJlcXVlc3RVUkxQYXJhbWV0ZXJzKHBhcmFtZXRlcnMpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICB1cmk6IGVuY29kZVVSSUNvbXBvbmVudChwYXJhbWV0ZXJzLnVybCksXG4gICAgICAgIHVzZXJtZWRpdW06IChfYSA9IHBhcmFtZXRlcnMgPT09IG51bGwgfHwgcGFyYW1ldGVycyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyYW1ldGVycy5tZWRpdW0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICdhbGwnLFxuICAgICAgICB3YXJuaW5nOiAocGFyYW1ldGVycyA9PT0gbnVsbCB8fCBwYXJhbWV0ZXJzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbWV0ZXJzLndhcm5pbmdMZXZlbCkgPyBwYXJhbWV0ZXJzLndhcm5pbmdMZXZlbCAtIDEgOiAnbm8nLFxuICAgICAgICBvdXRwdXQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgcHJvZmlsZTogJ2NzczMnLFxuICAgIH07XG4gICAgcmV0dXJuIGA/JHtPYmplY3QuZW50cmllcyhwYXJhbXMpXG4gICAgICAgIC5tYXAoKFtrZXksIHZhbF0pID0+IGAke2tleX09JHt2YWx9YClcbiAgICAgICAgLmpvaW4oJyYnKX1gO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gYnVpbGRSZXF1ZXN0VVJMUGFyYW1ldGVycztcbiIsICJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGdldF9ib3VuZGFyeV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2dldC1ib3VuZGFyeVwiKSk7XG5jb25zdCBidWlsZEZvcm1EYXRhID0gKHBhcmFtZXRlcnMpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgQ1JMRiA9ICdcXHJcXG4nO1xuICAgIGNvbnN0IGJvdW5kYXJ5ID0gYC0tJHsoMCwgZ2V0X2JvdW5kYXJ5XzEuZGVmYXVsdCkoKX1gO1xuICAgIGNvbnN0IHBpZWNlcyA9IFtcbiAgICAgICAgYENvbnRlbnQtRGlzcG9zaXRpb246IGZvcm0tZGF0YTsgbmFtZT1cInRleHRcIiR7Q1JMRn0ke0NSTEZ9JHtwYXJhbWV0ZXJzLnRleHR9JHtDUkxGfWAsXG4gICAgICAgIGBDb250ZW50LURpc3Bvc2l0aW9uOiBmb3JtLWRhdGE7IG5hbWU9XCJwcm9maWxlXCIke0NSTEZ9JHtDUkxGfWNzczMke0NSTEZ9YCxcbiAgICAgICAgYENvbnRlbnQtRGlzcG9zaXRpb246IGZvcm0tZGF0YTsgbmFtZT1cIm91dHB1dFwiJHtDUkxGfSR7Q1JMRn1hcHBsaWNhdGlvbi9qc29uJHtDUkxGfWAsXG4gICAgICAgIGBDb250ZW50LURpc3Bvc2l0aW9uOiBmb3JtLWRhdGE7IG5hbWU9XCJ1c2VybWVkaXVtXCIke0NSTEZ9JHtDUkxGfSR7KF9hID0gcGFyYW1ldGVycy5tZWRpdW0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICdhbGwnfSR7Q1JMRn1gLFxuICAgICAgICBgQ29udGVudC1EaXNwb3NpdGlvbjogZm9ybS1kYXRhOyBuYW1lPVwid2FybmluZ1wiJHtDUkxGfSR7Q1JMRn0keyhwYXJhbWV0ZXJzID09PSBudWxsIHx8IHBhcmFtZXRlcnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmFtZXRlcnMud2FybmluZ0xldmVsKSA/IFN0cmluZyhwYXJhbWV0ZXJzLndhcm5pbmdMZXZlbCAtIDEpIDogJ25vJ30ke0NSTEZ9YCxcbiAgICBdO1xuICAgIHJldHVybiBgJHtib3VuZGFyeX0ke0NSTEZ9JHtwaWVjZXMuam9pbihgJHtib3VuZGFyeX0ke0NSTEZ9YCl9JHtib3VuZGFyeX1gO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGJ1aWxkRm9ybURhdGE7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBidWlsZF9yZXF1ZXN0X3VybF9wYXJhbWV0ZXJzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vYnVpbGQtcmVxdWVzdC11cmwtcGFyYW1ldGVyc1wiKSk7XG5jb25zdCBidWlsZF9mb3JtX2RhdGFfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9idWlsZC1mb3JtLWRhdGFcIikpO1xuY29uc3QgcHJvY2Vzc1BhcmFtZXRlcnMgPSAobWV0aG9kLCBwYXJhbWV0ZXJzKSA9PiB7XG4gICAgaWYgKG1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgICAgaWYgKCd0ZXh0JyBpbiBwYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgR0VUIHJlcXVlc3QgaXMgbm90IHN1cHBvcnRlZCB3aXRoIHZhbGlkYXRpb24gYnkgdGV4dCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoMCwgYnVpbGRfcmVxdWVzdF91cmxfcGFyYW1ldGVyc18xLmRlZmF1bHQpKHBhcmFtZXRlcnMpO1xuICAgIH1cbiAgICBpZiAobWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgICAgaWYgKCd1cmwnIGluIHBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSBQT1NUIHJlcXVlc3QgaXMgbm90IHN1cHBvcnRlZCB3aXRoIHZhbGlkYXRpb24gYnkgVVJMJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICgwLCBidWlsZF9mb3JtX2RhdGFfMS5kZWZhdWx0KShwYXJhbWV0ZXJzKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBQYXJhbWV0ZXIgcHJvY2Vzc2luZyBjYWxsZWQgd2l0aCB1bnJlY29nbml6ZWQgbWV0aG9kOiAke21ldGhvZH1gKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBwcm9jZXNzUGFyYW1ldGVycztcbiIsICJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdmFsaWRhdGVfb3B0aW9uc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi92YWxpZGF0ZS1vcHRpb25zXCIpKTtcbmNvbnN0IGJyb3dzZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9icm93c2VyXCIpKTtcbmNvbnN0IG5vZGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9ub2RlXCIpKTtcbmNvbnN0IHByb2Nlc3NfcGFyYW1ldGVyc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3Byb2Nlc3MtcGFyYW1ldGVyc1wiKSk7XG5jb25zdCByZXRyaWV2ZVZhbGlkYXRpb24gPSAobWV0aG9kLCB1bnByb2Nlc3NlZFBhcmFtZXRlcnMsIHRpbWVvdXQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICgwLCB2YWxpZGF0ZV9vcHRpb25zXzEuZGVmYXVsdCkoe1xuICAgICAgICB0aW1lb3V0LFxuICAgICAgICBtZWRpdW06IHVucHJvY2Vzc2VkUGFyYW1ldGVycy5tZWRpdW0sXG4gICAgICAgIHdhcm5pbmdMZXZlbDogdW5wcm9jZXNzZWRQYXJhbWV0ZXJzLndhcm5pbmdMZXZlbCxcbiAgICB9KTtcbiAgICBjb25zdCBwYXJhbWV0ZXJzID0gKDAsIHByb2Nlc3NfcGFyYW1ldGVyc18xLmRlZmF1bHQpKG1ldGhvZCwgdW5wcm9jZXNzZWRQYXJhbWV0ZXJzKTtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mICh3aW5kb3cgPT09IG51bGwgfHwgd2luZG93ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3aW5kb3cuZmV0Y2gpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB5aWVsZCAoMCwgYnJvd3Nlcl8xLmRlZmF1bHQpKG1ldGhvZCwgcGFyYW1ldGVycywgdGltZW91dCk7XG4gICAgfVxuICAgIHJldHVybiB5aWVsZCAoMCwgbm9kZV8xLmRlZmF1bHQpKG1ldGhvZCwgcGFyYW1ldGVycywgdGltZW91dCk7XG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJldHJpZXZlVmFsaWRhdGlvbjtcbiIsICJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcmV0cmlldmVfdmFsaWRhdGlvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3JldHJpZXZlLXZhbGlkYXRpb25cIikpO1xuZnVuY3Rpb24gdmFsaWRhdGVUZXh0KHRleHRUb0JlVmFsaWRhdGVkLCBvcHRpb25zKSB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKCF0ZXh0VG9CZVZhbGlkYXRlZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBwYXNzIGluIHRleHQgdG8gYmUgdmFsaWRhdGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0ZXh0VG9CZVZhbGlkYXRlZCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHRleHQgdG8gYmUgdmFsaWRhdGVkIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjc3NWYWxpZGF0aW9uUmVzcG9uc2UgPSB5aWVsZCAoMCwgcmV0cmlldmVfdmFsaWRhdGlvbl8xLmRlZmF1bHQpKCdQT1NUJywge1xuICAgICAgICAgICAgdGV4dDogdGV4dFRvQmVWYWxpZGF0ZWQsXG4gICAgICAgICAgICBtZWRpdW06IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5tZWRpdW0sXG4gICAgICAgICAgICB3YXJuaW5nTGV2ZWw6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53YXJuaW5nTGV2ZWwsXG4gICAgICAgIH0sIChfYSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy50aW1lb3V0KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAxMDAwMCk7XG4gICAgICAgIGNvbnN0IGJhc2UgPSB7XG4gICAgICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgICAgICBlcnJvcnM6IFtdLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndhcm5pbmdMZXZlbClcbiAgICAgICAgICAgID8gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBiYXNlKSwgeyB3YXJuaW5nczogW10gfSkgOiBiYXNlO1xuICAgICAgICByZXN1bHQudmFsaWQgPSBjc3NWYWxpZGF0aW9uUmVzcG9uc2UudmFsaWRpdHk7XG4gICAgICAgIChfYiA9IGNzc1ZhbGlkYXRpb25SZXNwb25zZS5lcnJvcnMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmVzdWx0LmVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBsaW5lOiBlcnJvci5saW5lLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UucmVwbGFjZSgvWyA6XSskLywgJycpLnRyaW0oKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCd3YXJuaW5ncycgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAoX2MgPSBjc3NWYWxpZGF0aW9uUmVzcG9uc2Uud2FybmluZ3MpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5mb3JFYWNoKCh3YXJuaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lndhcm5pbmdzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBsaW5lOiB3YXJuaW5nLmxpbmUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHdhcm5pbmcubWVzc2FnZS5yZXBsYWNlKC9bIDpdKyQvLCAnJykudHJpbSgpLFxuICAgICAgICAgICAgICAgICAgICBsZXZlbDogKHdhcm5pbmcubGV2ZWwgKyAxKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB2YWxpZGF0ZVRleHQ7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHJldHJpZXZlX3ZhbGlkYXRpb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9yZXRyaWV2ZS12YWxpZGF0aW9uXCIpKTtcbmZ1bmN0aW9uIHZhbGlkYXRlVVJMKHVybFRvQmVWYWxpZGF0ZWQsIG9wdGlvbnMpIHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoIXVybFRvQmVWYWxpZGF0ZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG11c3QgcGFzcyBpbiBhIFVSTCB0byBiZSB2YWxpZGF0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHVybFRvQmVWYWxpZGF0ZWQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBVUkwgdG8gYmUgdmFsaWRhdGVkIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjc3NWYWxpZGF0aW9uUmVzcG9uc2UgPSB5aWVsZCAoMCwgcmV0cmlldmVfdmFsaWRhdGlvbl8xLmRlZmF1bHQpKCdHRVQnLCB7XG4gICAgICAgICAgICB1cmw6IHVybFRvQmVWYWxpZGF0ZWQsXG4gICAgICAgICAgICBtZWRpdW06IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5tZWRpdW0sXG4gICAgICAgICAgICB3YXJuaW5nTGV2ZWw6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53YXJuaW5nTGV2ZWwsXG4gICAgICAgIH0sIChfYSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy50aW1lb3V0KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAxMDAwMCk7XG4gICAgICAgIGNvbnN0IGJhc2UgPSB7XG4gICAgICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgICAgICBlcnJvcnM6IFtdLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndhcm5pbmdMZXZlbClcbiAgICAgICAgICAgID8gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBiYXNlKSwgeyB3YXJuaW5nczogW10gfSkgOiBiYXNlO1xuICAgICAgICByZXN1bHQudmFsaWQgPSBjc3NWYWxpZGF0aW9uUmVzcG9uc2UudmFsaWRpdHk7XG4gICAgICAgIChfYiA9IGNzc1ZhbGlkYXRpb25SZXNwb25zZS5lcnJvcnMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgcmVzdWx0LmVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBsaW5lOiBlcnJvci5saW5lLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UucmVwbGFjZSgvWyA6XSskLywgJycpLnRyaW0oKSxcbiAgICAgICAgICAgICAgICB1cmw6IChfYSA9IGVycm9yLnNvdXJjZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbnVsbCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCd3YXJuaW5ncycgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAoX2MgPSBjc3NWYWxpZGF0aW9uUmVzcG9uc2Uud2FybmluZ3MpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5mb3JFYWNoKCh3YXJuaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIHJlc3VsdC53YXJuaW5ncy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbGluZTogd2FybmluZy5saW5lLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB3YXJuaW5nLm1lc3NhZ2UucmVwbGFjZSgvWyA6XSskLywgJycpLnRyaW0oKSxcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWw6ICh3YXJuaW5nLmxldmVsICsgMSksXG4gICAgICAgICAgICAgICAgICAgIHVybDogKF9hID0gd2FybmluZy5zb3VyY2UpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG51bGwsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdmFsaWRhdGVVUkw7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5jb25zdCB2YWxpZGF0ZV90ZXh0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vdmFsaWRhdGUtdGV4dFwiKSk7XG5jb25zdCB2YWxpZGF0ZV91cmxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi92YWxpZGF0ZS11cmxcIikpO1xuY29uc3QgY3NzVmFsaWRhdG9yID0ge1xuICAgIHZhbGlkYXRlVGV4dDogdmFsaWRhdGVfdGV4dF8xLmRlZmF1bHQsXG4gICAgdmFsaWRhdGVVUkw6IHZhbGlkYXRlX3VybF8xLmRlZmF1bHQsXG59O1xubW9kdWxlLmV4cG9ydHMgPSBjc3NWYWxpZGF0b3I7XG4iLCAiLy8gR2V0cyBhbGwgbm9uLWJ1aWx0aW4gcHJvcGVydGllcyB1cCB0aGUgcHJvdG90eXBlIGNoYWluLlxuY29uc3QgZ2V0QWxsUHJvcGVydGllcyA9IG9iamVjdCA9PiB7XG5cdGNvbnN0IHByb3BlcnRpZXMgPSBuZXcgU2V0KCk7XG5cblx0ZG8ge1xuXHRcdGZvciAoY29uc3Qga2V5IG9mIFJlZmxlY3Qub3duS2V5cyhvYmplY3QpKSB7XG5cdFx0XHRwcm9wZXJ0aWVzLmFkZChbb2JqZWN0LCBrZXldKTtcblx0XHR9XG5cdH0gd2hpbGUgKChvYmplY3QgPSBSZWZsZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCkpICYmIG9iamVjdCAhPT0gT2JqZWN0LnByb3RvdHlwZSk7XG5cblx0cmV0dXJuIHByb3BlcnRpZXM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhdXRvQmluZChzZWxmLCB7aW5jbHVkZSwgZXhjbHVkZX0gPSB7fSkge1xuXHRjb25zdCBmaWx0ZXIgPSBrZXkgPT4ge1xuXHRcdGNvbnN0IG1hdGNoID0gcGF0dGVybiA9PiB0eXBlb2YgcGF0dGVybiA9PT0gJ3N0cmluZycgPyBrZXkgPT09IHBhdHRlcm4gOiBwYXR0ZXJuLnRlc3Qoa2V5KTtcblxuXHRcdGlmIChpbmNsdWRlKSB7XG5cdFx0XHRyZXR1cm4gaW5jbHVkZS5zb21lKG1hdGNoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSB1bmljb3JuL25vLWFycmF5LWNhbGxiYWNrLXJlZmVyZW5jZVxuXHRcdH1cblxuXHRcdGlmIChleGNsdWRlKSB7XG5cdFx0XHRyZXR1cm4gIWV4Y2x1ZGUuc29tZShtYXRjaCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgdW5pY29ybi9uby1hcnJheS1jYWxsYmFjay1yZWZlcmVuY2Vcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblxuXHRmb3IgKGNvbnN0IFtvYmplY3QsIGtleV0gb2YgZ2V0QWxsUHJvcGVydGllcyhzZWxmLmNvbnN0cnVjdG9yLnByb3RvdHlwZSkpIHtcblx0XHRpZiAoa2V5ID09PSAnY29uc3RydWN0b3InIHx8ICFmaWx0ZXIoa2V5KSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZGVzY3JpcHRvciA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwga2V5KTtcblx0XHRpZiAoZGVzY3JpcHRvciAmJiB0eXBlb2YgZGVzY3JpcHRvci52YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0c2VsZltrZXldID0gc2VsZltrZXldLmJpbmQoc2VsZik7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHNlbGY7XG59XG4iLCAiaW1wb3J0IGF1dG9CaW5kIGZyb20gJ2F1dG8tYmluZCc7XG5pbXBvcnQgeyBSRU5ERVJFUiB9IGZyb20gJ0Bjb21tb24vY29uc3RhbnRzJztcbmltcG9ydCBMb2dnZXJNb2R1bGUgZnJvbSAnQGNvbW1vbi9sb2dnZXInO1xuY29uc3QgTG9nZ2VyID0gbmV3IExvZ2dlck1vZHVsZSgnRGV2IFNlcnZlcicpO1xuXG5mdW5jdGlvbiBwYXJzZSh0ZXh0OiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZSh0ZXh0KTtcbiAgfSBjYXRjaCAoXykge1xuICAgIExvZ2dlci5lcnJvcignSW52YWxpZCBKU09OOicsIHRleHQpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmludGVyZmFjZSBNZXNzYWdlIHtcbiAgdHlwZTogJ2hlbGxvJyB8ICdyZW5kZXJlci5qcycgfCAncmVuZGVyZXIuY3NzJyB8ICdtYWluLmpzJyB8ICdwcmVsb2FkLmpzJztcbiAgZGF0YT86IGFueTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2ViU2VydmVyIHtcbiAgd3NzOiBXZWJTb2NrZXQ7XG5cbiAgY29uc3RydWN0b3IocG9ydCA9IDczMzEpIHtcbiAgICBjb25zdCB3cyA9IHRoaXMud3NzID0gbmV3IFdlYlNvY2tldChgd3M6Ly9sb2NhbGhvc3Q6JHtwb3J0fWApO1xuXG4gICAgYXV0b0JpbmQodGhpcyk7XG4gICAgd3Mub25tZXNzYWdlID0gdGhpcy5oYW5kbGVNZXNzYWdlO1xuICAgIHdzLm9uY2xvc2UgPSAoKSA9PiBMb2dnZXIuaW5mbygnRGlzY29ubmVjdGVkJyk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZUV2ZW50PHN0cmluZz4pIHtcbiAgICBjb25zdCBqc29uOiBNZXNzYWdlID0gcGFyc2UobWVzc2FnZS5kYXRhKTtcbiAgICBpZiAoIWpzb24pIHJldHVybjtcblxuICAgIHN3aXRjaCAoanNvbi50eXBlKSB7XG4gICAgICBjYXNlICdoZWxsbyc6IHtcbiAgICAgICAgdGhpcy5zZW5kKCdoZWxsbycpO1xuICAgICAgICBMb2dnZXIuaW5mbygnQ29ubmVjdGVkJyk7XG4gICAgICB9IGJyZWFrO1xuXG4gICAgICBjYXNlICdyZW5kZXJlci5qcyc6IHtcbiAgICAgICAgTG9nZ2VyLmluZm8oJ1JlbG9hZGluZyByZW5kZXJlci5qcycpO1xuICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoUkVOREVSRVIuc3RvcCwgJyonKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcGNvcm4tY29yZScpPy5yZW1vdmUoKTtcblxuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0LmlkID0gJ3BvcGNvcm4tY29yZSc7XG4gICAgICAgIHNjcmlwdC50eXBlID0gJ21vZHVsZSc7XG4gICAgICAgIC8vIFRoaXMgYnJlYWtzIGlmIHRoZSBjb2RlIGlzIG1pbmlmaWVkIGJlY2F1c2UgdGhlIHJlbmRlcmVyX2RlZmF1bHQgbmFtZSBnZXRzIG1pbmlmaWVkXG4gICAgICAgIHNjcmlwdC50ZXh0Q29udGVudCA9IGpzb24uZGF0YS5jb250ZW50ICsgJztcXG5yZW5kZXJlcl9kZWZhdWx0LnN0YXJ0KCk7JztcblxuICAgICAgICBkb2N1bWVudC5oZWFkLnByZXBlbmQoc2NyaXB0KTtcbiAgICAgIH0gYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3JlbmRlcmVyLmNzcyc6IHtcbiAgICAgICAgTG9nZ2VyLmluZm8oJ1JlbG9hZGluZyByZW5kZXJlci5jc3MnKTtcblxuICAgICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3Bjb3JuLXN0eWxlcycpO1xuICAgICAgICBzdHlsZS5pZCA9ICdwb3Bjb3JuLXN0eWxlcyc7XG4gICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0ganNvbi5kYXRhLmNvbnRlbnQ7XG4gICAgICB9IGJyZWFrO1xuXG4gICAgICBjYXNlICdwcmVsb2FkLmpzJzoge1xuICAgICAgICBMb2dnZXIuaW5mbygnUmVsb2FkaW5nIHByZWxvYWQuanMnKTtcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICB9IGJyZWFrO1xuXG4gICAgICBjYXNlICdtYWluLmpzJzogYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgTG9nZ2VyLmluZm8oJ1JlY2VpdmVkIHVua25vd24gbWVzc2FnZTonLCBqc29uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZW5kKHR5cGU6IHN0cmluZywgZGF0YT86IGFueSkge1xuICAgIHRoaXMud3NzLnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgdHlwZSxcbiAgICAgIGRhdGEsXG4gICAgfSkpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgaXBjUmVuZGVyZXIsIGNvbnRleHRCcmlkZ2UgfSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQgeyBJUEMgfSBmcm9tICdAY29tbW9uL2NvbnN0YW50cyc7XG5pbXBvcnQgTG9nZ2VyTW9kdWxlIGZyb20gJ0Bjb21tb24vbG9nZ2VyJztcbmNvbnN0IExvZ2dlciA9IG5ldyBMb2dnZXJNb2R1bGUoJ1ByZWxvYWQnKTtcblxuY29uc3QgUG9wY29ybk5hdGl2ZTogUG9wY29ybk5hdGl2ZSA9IHtcbiAgLy8gTWlzY1xuICBjb25maWc6IGlwY1JlbmRlcmVyLnNlbmRTeW5jKElQQy5nZXRDb25maWcpLFxuICBnZXRTdHlsZXM6ICgpID0+IGlwY1JlbmRlcmVyLmludm9rZShJUEMuZ2V0U3R5bGVzKSxcbiAgb25TdGF0dXNNZXNzYWdlOiAobGlzdGVuZXIpID0+IGlwY1JlbmRlcmVyLm9uKElQQy5zdGF0dXNNZXNzYWdlLCAoXywgbWVzc2FnZSkgPT4gbGlzdGVuZXIobWVzc2FnZSkpLFxuICBpc1NwbGFzaDogaXNTcGxhc2goKSxcblxuICAvLyBUaGVtZXNcbiAgZ2V0VGhlbWVzOiAoKSA9PiBpcGNSZW5kZXJlci5pbnZva2UoSVBDLmdldFRoZW1lcyksXG4gIG9uVGhlbWVDaGFuZ2U6IChsaXN0ZW5lcikgPT4gaXBjUmVuZGVyZXIub24oSVBDLm9uVGhlbWVDaGFuZ2UsIChfLCBjaGFuZ2UpID0+IGxpc3RlbmVyKGNoYW5nZSkpLFxuICBzYXZlVGhlbWVTdGF0ZTogKGlkLCBzdGF0ZSkgPT4gaXBjUmVuZGVyZXIuc2VuZChJUEMuc2F2ZVRoZW1lU3RhdGUsIGlkLCBzdGF0ZSksXG5cbiAgLy8gUXVpY2tDU1NcbiAgZ2V0UXVpY2tDc3M6ICgpID0+IGlwY1JlbmRlcmVyLmludm9rZShJUEMuZ2V0UXVpY2tDc3MpLFxuICBvblF1aWNrQ3NzQ2hhbmdlOiAobGlzdGVuZXIpID0+IGlwY1JlbmRlcmVyLm9uKElQQy5vblF1aWNrQ3NzQ2hhbmdlLCAoXywgdXBkYXRlZCkgPT4gbGlzdGVuZXIodXBkYXRlZCkpLFxuICBjcmVhdGVRdWlja0Nzc05vZGU6IChsb2NhdGlvbiwgdHlwZSkgPT4gaXBjUmVuZGVyZXIuc2VuZChJUEMuY3JlYXRlUXVpY2tDc3NOb2RlLCBsb2NhdGlvbiwgdHlwZSksXG4gIGRlbGV0ZVF1aWNrQ3NzTm9kZTogKGxvY2F0aW9uKSA9PiBpcGNSZW5kZXJlci5zZW5kKElQQy5kZWxldGVRdWlja0Nzc05vZGUsIGxvY2F0aW9uKSxcbiAgcmVuYW1lUXVpY2tDc3NOb2RlOiAobG9jYXRpb24sIG5ld0xvY2F0aW9uKSA9PiBpcGNSZW5kZXJlci5zZW5kKElQQy5yZW5hbWVRdWlja0Nzc05vZGUsIGxvY2F0aW9uLCBuZXdMb2NhdGlvbiksXG4gIHVwZGF0ZVF1aWNrQ3NzRmlsZTogKGxvY2F0aW9uLCBjb250ZW50KSA9PiBpcGNSZW5kZXJlci5zZW5kKElQQy51cGRhdGVRdWlja0Nzc0ZpbGUsIGxvY2F0aW9uLCBjb250ZW50KSxcbn07XG5cbnRyeSB7XG4gIGNvbnN0IGNzc1ZhbGlkYXRvcjogdHlwZW9mIGltcG9ydCgndzNjLWNzcy12YWxpZGF0b3InKSA9IHJlcXVpcmUoJ3czYy1jc3MtdmFsaWRhdG9yJyk7XG4gIFBvcGNvcm5OYXRpdmUudmFsaWRhdGVDU1MgPSBjc3NWYWxpZGF0b3IudmFsaWRhdGVUZXh0O1xufSBjYXRjaCAoZSkge1xuICBMb2dnZXIuaW5mbygnRGlzYWJsZWQgQ1NTIFZhbGlkYXRvcicpO1xufVxuXG5jb250ZXh0QnJpZGdlLmV4cG9zZUluTWFpbldvcmxkKCdQb3Bjb3JuTmF0aXZlJywgUG9wY29ybk5hdGl2ZSk7XG5cbmlwY1JlbmRlcmVyLm9uKElQQy5sb2csIChfLCB0eXBlLCAuLi5tZXNzYWdlOiBhbnlbXSkgPT4ge1xuICBjb25zdCBMb2dnZXIgPSBuZXcgTG9nZ2VyTW9kdWxlKCdNYWluJyk7XG5cbiAgTG9nZ2VyW3R5cGVdKC4uLm1lc3NhZ2UpO1xufSk7XG5cbmZ1bmN0aW9uIGlzU3BsYXNoKCkge1xuICBjb25zdCBwb3NzaWJsZVZhcnMgPSBbXG4gICAgJ3NwbGFzaCcsXG4gICAgJ1NwbGFzaCcsXG4gICAgJ1NQTEFTSCcsXG4gICAgJ19fU1BMQVNIJyxcbiAgICAnX19TUExBU0hfXycsXG4gICAgJ3NwbGFzaFNjcmVlbicsXG4gICAgJ1NwbGFzaFNjcmVlbicsXG4gICAgJ1NQTEFTSFNDUkVFTicsXG4gICAgJ19fU1BMQVNIU0NSRUVOJyxcbiAgICAnX19TUExBU0hTQ1JFRU5fXydcbiAgXTtcblxuICBmb3IgKGNvbnN0IHZhck5hbWUgb2YgcG9zc2libGVWYXJzKSB7XG4gICAgaWYgKHdpbmRvd1t2YXJOYW1lXSkgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdCB7IHdpbmRvd09wdGlvbnMgfSA9IGlwY1JlbmRlcmVyLnNlbmRTeW5jKElQQy5nZXRXaW5kb3dEYXRhKTtcbiAgaWYgKCF3aW5kb3dPcHRpb25zLndlYlByZWZlcmVuY2VzLm5hdGl2ZVdpbmRvd09wZW4pIHJldHVybiB0cnVlO1xuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5pdERldlNlcnZlcigpIHtcbiAgcmV0dXJuIG5ldyAoYXdhaXQgaW1wb3J0KCcuL2RldnNlcnZlcicpKS5kZWZhdWx0O1xufVxuaWYgKE5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSBpbml0RGV2U2VydmVyKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0NBLFNBQVMsYUFBK0MsUUFBVyxRQUFnQjtBQUNqRixRQUFNLFNBQVMsQ0FBQztBQUNoQixhQUFXLE9BQU8sUUFBUTtBQUN4QixXQUFPLEdBQUcsSUFBSSxTQUFTLE9BQU8sR0FBRztBQUFBLEVBQ25DO0FBQ0EsU0FBTztBQUNUO0FBOUNBLElBQWEsVUFLQSxLQXNCQSxVQVNBO0FBcENiO0FBQUE7QUFBTyxJQUFNLFdBQVc7QUFBQSxNQUN0QixNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUVPLElBQU0sTUFBTSxhQUFhO0FBQUE7QUFBQSxNQUU5QixXQUFXO0FBQUEsTUFDWCxXQUFXO0FBQUEsTUFDWCxlQUFlO0FBQUEsTUFDZixlQUFlO0FBQUEsTUFDZixLQUFLO0FBQUE7QUFBQSxNQUdMLFdBQVc7QUFBQSxNQUNYLGVBQWU7QUFBQSxNQUNmLGdCQUFnQjtBQUFBO0FBQUEsTUFHaEIsYUFBYTtBQUFBLE1BQ2Isa0JBQWtCO0FBQUEsTUFDbEIsb0JBQW9CO0FBQUEsTUFDcEIsb0JBQW9CO0FBQUEsTUFDcEIsb0JBQW9CO0FBQUEsTUFDcEIsb0JBQW9CO0FBQUEsSUFDdEIsR0FBRyxTQUFTLElBQUk7QUFFVCxJQUFNLFdBQVc7QUFBQSxNQUN0QixVQUFVLGFBQWE7QUFBQSxRQUNyQixTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsTUFDWCxHQUFHLFNBQVMsUUFBUTtBQUFBLElBQ3RCO0FBRU8sSUFBTSxXQUFXLGFBQWE7QUFBQSxNQUNuQyxNQUFNO0FBQUEsSUFDUixHQUFHLFNBQVMsSUFBSTtBQUFBO0FBQUE7OztBQ3RDaEIsSUFFYSxjQXlGTjtBQTNGUDtBQUFBO0FBQUE7QUFFTyxJQUFN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LElBQUksRUFBRSxHQUFHLE9BQU87QUFDekIsQ0FBQztBQUVELFNBQVMsV0FBVztBQUNsQixRQUFNLGVBQWU7QUFBQSxJQUNuQjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFFQSxhQUFXLFdBQVcsY0FBYztBQUNsQyxRQUFJLE9BQU8sT0FBTztBQUFHLGFBQU87QUFBQSxFQUM5QjtBQUVBLFFBQU0sRUFBRSxjQUFjLElBQUksNEJBQVksU0FBUyxJQUFJLGFBQWE7QUFDaEUsTUFBSSxDQUFDLGNBQWMsZUFBZTtBQUFrQixXQUFPO0FBRTNELFNBQU87QUFDVDtBQUVBLGVBQWUsZ0JBQWdCO0FBQzdCLFNBQU8sS0FBSyxNQUFNLHFFQUF1QjtBQUMzQztBQUNBLElBQUk7QUFBNEIsZ0JBQWM7IiwKICAibmFtZXMiOiBbIm1vZHVsZSIsICJfYSIsICJtb2R1bGUiLCAiTG9nZ2VyIiwgImxvY2F0aW9uIl0KfQo=
