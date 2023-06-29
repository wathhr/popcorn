var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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

// src/preload/index.ts
var import_electron = require("electron");

// src/common/constants.ts
var prefixes = {
  main: "POPCORN_",
  quickCss: "QUICKCSS_",
  themes: "THEMES_"
};
var IPC = prefixValues({
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
var MESSAGES = {
  quickCss: prefixValues({
    created: "CREATED",
    deleted: "DELETED",
    renamed: "RENAMED",
    updated: "UPDATED"
  }, prefixes.quickCss)
};
function prefixValues(object, prefix) {
  const result = {};
  for (const key in object) {
    result[key] = prefix + object[key];
  }
  return result;
}

// src/common/logger.ts
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
        return {
          str: "gold",
          arr: [255, 215, 0]
        };
    }
  }
  #ansiColor(color, message) {
    return `\x1B[38;2;${color[0]};${color[1]};${color[2]}m${message}\x1B[0m`;
  }
  async #log(type, message) {
    type = this.#parseType(type);
    const logColor = this.#parseColor(type);
    const banner = this.output === "ansi" ? [`[${this.#ansiColor(logColor.arr, "Popcorn")} > ${this.module}]`] : [`[%cPopcorn%c > ${this.module}]`, `color: ${logColor.str};`, ""];
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
var logger_default = LoggerModule;

// src/preload/index.ts
var Logger = new logger_default("Preload");
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
  createQuickCssNode: (location, type) => import_electron.ipcRenderer.send(IPC.createQuickCssNode, location, type),
  deleteQuickCssNode: (location) => import_electron.ipcRenderer.send(IPC.deleteQuickCssNode, location),
  renameQuickCssNode: (location, newLocation) => import_electron.ipcRenderer.send(IPC.renameQuickCssNode, location, newLocation),
  updateQuickCssFile: (location, content) => import_electron.ipcRenderer.send(IPC.updateQuickCssFile, location, content)
};
try {
  const cssValidator = require_dist();
  PopcornNative.validateCSS = cssValidator.validateText;
} catch (e) {
  Logger.info("Disabled CSS Validator");
}
import_electron.contextBridge.exposeInMainWorld("PopcornNative", PopcornNative);
import_electron.ipcRenderer.on(IPC.log, (_, type, ...message) => {
  const Logger2 = new logger_default("Main");
  Logger2[type](...message);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3czYy1jc3MtdmFsaWRhdG9yQDEuMy4xL25vZGVfbW9kdWxlcy93M2MtY3NzLXZhbGlkYXRvci9kaXN0L3ZhbGlkYXRlLW9wdGlvbnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3czYy1jc3MtdmFsaWRhdG9yQDEuMy4xL25vZGVfbW9kdWxlcy93M2MtY3NzLXZhbGlkYXRvci9kaXN0L3JldHJpZXZlLXZhbGlkYXRpb24vYmFkLXN0YXR1cy1lcnJvci5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vdzNjLWNzcy12YWxpZGF0b3JAMS4zLjEvbm9kZV9tb2R1bGVzL3czYy1jc3MtdmFsaWRhdG9yL2Rpc3QvcmV0cmlldmUtdmFsaWRhdGlvbi9nZXQtYm91bmRhcnkuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3czYy1jc3MtdmFsaWRhdG9yQDEuMy4xL25vZGVfbW9kdWxlcy93M2MtY3NzLXZhbGlkYXRvci9kaXN0L3JldHJpZXZlLXZhbGlkYXRpb24vYnJvd3Nlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vdzNjLWNzcy12YWxpZGF0b3JAMS4zLjEvbm9kZV9tb2R1bGVzL3czYy1jc3MtdmFsaWRhdG9yL2Rpc3QvcmV0cmlldmUtdmFsaWRhdGlvbi9ub2RlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS93M2MtY3NzLXZhbGlkYXRvckAxLjMuMS9ub2RlX21vZHVsZXMvdzNjLWNzcy12YWxpZGF0b3IvZGlzdC9yZXRyaWV2ZS12YWxpZGF0aW9uL2J1aWxkLXJlcXVlc3QtdXJsLXBhcmFtZXRlcnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3czYy1jc3MtdmFsaWRhdG9yQDEuMy4xL25vZGVfbW9kdWxlcy93M2MtY3NzLXZhbGlkYXRvci9kaXN0L3JldHJpZXZlLXZhbGlkYXRpb24vYnVpbGQtZm9ybS1kYXRhLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS93M2MtY3NzLXZhbGlkYXRvckAxLjMuMS9ub2RlX21vZHVsZXMvdzNjLWNzcy12YWxpZGF0b3IvZGlzdC9yZXRyaWV2ZS12YWxpZGF0aW9uL3Byb2Nlc3MtcGFyYW1ldGVycy5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vdzNjLWNzcy12YWxpZGF0b3JAMS4zLjEvbm9kZV9tb2R1bGVzL3czYy1jc3MtdmFsaWRhdG9yL2Rpc3QvcmV0cmlldmUtdmFsaWRhdGlvbi9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vdzNjLWNzcy12YWxpZGF0b3JAMS4zLjEvbm9kZV9tb2R1bGVzL3czYy1jc3MtdmFsaWRhdG9yL2Rpc3QvdmFsaWRhdGUtdGV4dC5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vdzNjLWNzcy12YWxpZGF0b3JAMS4zLjEvbm9kZV9tb2R1bGVzL3czYy1jc3MtdmFsaWRhdG9yL2Rpc3QvdmFsaWRhdGUtdXJsLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS93M2MtY3NzLXZhbGlkYXRvckAxLjMuMS9ub2RlX21vZHVsZXMvdzNjLWNzcy12YWxpZGF0b3IvZGlzdC9pbmRleC5qcyIsICIuLi9zcmMvcHJlbG9hZC9pbmRleC50cyIsICIuLi9zcmMvY29tbW9uL2NvbnN0YW50cy50cyIsICIuLi9zcmMvY29tbW9uL2xvZ2dlci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBhbGxvd2VkTWVkaXVtcyA9IFtcbiAgICAnYWxsJyxcbiAgICAnYnJhaWxsZScsXG4gICAgJ2VtYm9zc2VkJyxcbiAgICAnaGFuZGhlbGQnLFxuICAgICdwcmludCcsXG4gICAgJ3Byb2plY3Rpb24nLFxuICAgICdzY3JlZW4nLFxuICAgICdzcGVlY2gnLFxuICAgICd0dHknLFxuICAgICd0dicsXG5dO1xuY29uc3QgYWxsb3dlZFdhcm5pbmdMZXZlbHMgPSBbMCwgMSwgMiwgM107XG5mdW5jdGlvbiB2YWxpZGF0ZU9wdGlvbnMob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zLm1lZGl1bSAmJiAhYWxsb3dlZE1lZGl1bXMuaW5jbHVkZXMob3B0aW9ucy5tZWRpdW0pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtZWRpdW0gbXVzdCBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZzogJHthbGxvd2VkTWVkaXVtcy5qb2luKCcsICcpfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLndhcm5pbmdMZXZlbCAmJiAhYWxsb3dlZFdhcm5pbmdMZXZlbHMuaW5jbHVkZXMob3B0aW9ucy53YXJuaW5nTGV2ZWwpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSB3YXJuaW5nIGxldmVsIG11c3QgYmUgb25lIG9mIHRoZSBmb2xsb3dpbmc6ICR7YWxsb3dlZFdhcm5pbmdMZXZlbHMuam9pbignLCAnKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy50aW1lb3V0ICE9PSB1bmRlZmluZWQgJiYgIU51bWJlci5pc0ludGVnZXIob3B0aW9ucy50aW1lb3V0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgdGltZW91dCBtdXN0IGJlIGFuIGludGVnZXInKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy50aW1lb3V0ICYmIG9wdGlvbnMudGltZW91dCA8IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHRpbWVvdXQgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXInKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHZhbGlkYXRlT3B0aW9ucztcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIEJhZFN0YXR1c0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIHN0YXR1c0NvZGUpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XG4gICAgICAgIHRoaXMubmFtZSA9ICdCYWRTdGF0dXNFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gQmFkU3RhdHVzRXJyb3I7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmJvdW5kYXJ5TGVuZ3RoID0gdm9pZCAwO1xuZXhwb3J0cy5ib3VuZGFyeUxlbmd0aCA9IDM0O1xuY29uc3QgZ2V0Qm91bmRhcnkgPSAoKSA9PiB7XG4gICAgY29uc3QgYWxsb3dlZENoYXJzID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVowMTIzNDU2Nzg5JztcbiAgICBsZXQgcmFuZG9tQm91bmRhcnlQaWVjZSA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgICByYW5kb21Cb3VuZGFyeVBpZWNlICs9IGFsbG93ZWRDaGFyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhbGxvd2VkQ2hhcnMubGVuZ3RoKV07XG4gICAgfVxuICAgIHJldHVybiBgLS0tLUNTU1ZhbGlkYXRvckJvdW5kYXJ5JHtyYW5kb21Cb3VuZGFyeVBpZWNlfWA7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0Qm91bmRhcnk7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGJhZF9zdGF0dXNfZXJyb3JfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9iYWQtc3RhdHVzLWVycm9yXCIpKTtcbmNvbnN0IGdldF9ib3VuZGFyeV8xID0gcmVxdWlyZShcIi4vZ2V0LWJvdW5kYXJ5XCIpO1xuY29uc3QgcmV0cmlldmVJbkJyb3dzZXIgPSAobWV0aG9kLCBwYXJhbWV0ZXJzLCB0aW1lb3V0KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb250cm9sbGVyLmFib3J0KCk7XG4gICAgfSwgdGltZW91dCk7XG4gICAgbGV0IHJlcyA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgICAgcmVzID0geWllbGQgZmV0Y2goYGh0dHBzOi8vamlnc2F3LnczLm9yZy9jc3MtdmFsaWRhdG9yL3ZhbGlkYXRvciR7bWV0aG9kID09PSAnR0VUJyA/IHBhcmFtZXRlcnMgOiAnJ31gLCBPYmplY3QuYXNzaWduKHsgbWV0aG9kLCBzaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsIH0sIChtZXRob2QgPT09ICdQT1NUJ1xuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogYG11bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PSR7cGFyYW1ldGVycy5zbGljZSgyLCBnZXRfYm91bmRhcnlfMS5ib3VuZGFyeUxlbmd0aCArIDIpfWAsXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LUxlbmd0aCc6IFN0cmluZyhuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUocGFyYW1ldGVycykuYnl0ZUxlbmd0aCksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBwYXJhbWV0ZXJzLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB7fSkpKTtcbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBiYWRfc3RhdHVzX2Vycm9yXzEuZGVmYXVsdChyZXMuc3RhdHVzVGV4dCwgcmVzLnN0YXR1cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IgJiYgZXJyLm5hbWUgPT09ICdBYm9ydEVycm9yJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgcmVxdWVzdCB0b29rIGxvbmdlciB0aGFuICR7dGltZW91dH1tc2ApO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9XG4gICAgaWYgKCFyZXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXNwb25zZSBleHBlY3RlZCcpO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gKHlpZWxkIHJlcy5qc29uKCkpO1xuICAgIHJldHVybiBkYXRhLmNzc3ZhbGlkYXRpb247XG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJldHJpZXZlSW5Ccm93c2VyO1xuIiwgIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGh0dHBzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJodHRwc1wiKSk7XG5jb25zdCBiYWRfc3RhdHVzX2Vycm9yXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vYmFkLXN0YXR1cy1lcnJvclwiKSk7XG5jb25zdCBnZXRfYm91bmRhcnlfMSA9IHJlcXVpcmUoXCIuL2dldC1ib3VuZGFyeVwiKTtcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCJ1dGlsXCIpO1xuY29uc3QgcmV0cmlldmVJbk5vZGUgPSAobWV0aG9kLCBwYXJhbWV0ZXJzLCB0aW1lb3V0KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCByZXEgPSBodHRwcy5yZXF1ZXN0KGBodHRwczovL2ppZ3Nhdy53My5vcmcvY3NzLXZhbGlkYXRvci92YWxpZGF0b3Ike21ldGhvZCA9PT0gJ0dFVCcgPyBwYXJhbWV0ZXJzIDogJyd9YCwgT2JqZWN0LmFzc2lnbih7IG1ldGhvZCxcbiAgICAgICAgICAgIHRpbWVvdXQgfSwgKG1ldGhvZCA9PT0gJ1BPU1QnXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiBgbXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9JHtwYXJhbWV0ZXJzLnNsaWNlKDIsIGdldF9ib3VuZGFyeV8xLmJvdW5kYXJ5TGVuZ3RoICsgMil9YCxcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtTGVuZ3RoJzogU3RyaW5nKG5ldyB1dGlsXzEuVGV4dEVuY29kZXIoKS5lbmNvZGUocGFyYW1ldGVycykuYnl0ZUxlbmd0aCksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDoge30pKSwgKHJlcykgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXMuc3RhdHVzQ29kZSA9PT0gJ251bWJlcicgJiYgKHJlcy5zdGF0dXNDb2RlIDwgMjAwIHx8IHJlcy5zdGF0dXNDb2RlID49IDMwMCkpIHtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IGJhZF9zdGF0dXNfZXJyb3JfMS5kZWZhdWx0KChfYSA9IHJlcy5zdGF0dXNNZXNzYWdlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJywgcmVzLnN0YXR1c0NvZGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkYXRhID0gJyc7XG4gICAgICAgICAgICByZXMub24oJ2RhdGEnLCAoY2h1bmspID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhICs9IGNodW5rO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlcy5vbignZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShkYXRhKS5jc3N2YWxpZGF0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgICAgICAgIHJlcS53cml0ZShwYXJhbWV0ZXJzKTtcbiAgICAgICAgfVxuICAgICAgICByZXEub24oJ3RpbWVvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBUaGUgcmVxdWVzdCB0b29rIGxvbmdlciB0aGFuICR7dGltZW91dH1tc2ApKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlcS5lbmQoKTtcbiAgICB9KTtcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcmV0cmlldmVJbk5vZGU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBidWlsZFJlcXVlc3RVUkxQYXJhbWV0ZXJzKHBhcmFtZXRlcnMpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICB1cmk6IGVuY29kZVVSSUNvbXBvbmVudChwYXJhbWV0ZXJzLnVybCksXG4gICAgICAgIHVzZXJtZWRpdW06IChfYSA9IHBhcmFtZXRlcnMgPT09IG51bGwgfHwgcGFyYW1ldGVycyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyYW1ldGVycy5tZWRpdW0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICdhbGwnLFxuICAgICAgICB3YXJuaW5nOiAocGFyYW1ldGVycyA9PT0gbnVsbCB8fCBwYXJhbWV0ZXJzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbWV0ZXJzLndhcm5pbmdMZXZlbCkgPyBwYXJhbWV0ZXJzLndhcm5pbmdMZXZlbCAtIDEgOiAnbm8nLFxuICAgICAgICBvdXRwdXQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgcHJvZmlsZTogJ2NzczMnLFxuICAgIH07XG4gICAgcmV0dXJuIGA/JHtPYmplY3QuZW50cmllcyhwYXJhbXMpXG4gICAgICAgIC5tYXAoKFtrZXksIHZhbF0pID0+IGAke2tleX09JHt2YWx9YClcbiAgICAgICAgLmpvaW4oJyYnKX1gO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gYnVpbGRSZXF1ZXN0VVJMUGFyYW1ldGVycztcbiIsICJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGdldF9ib3VuZGFyeV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2dldC1ib3VuZGFyeVwiKSk7XG5jb25zdCBidWlsZEZvcm1EYXRhID0gKHBhcmFtZXRlcnMpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgQ1JMRiA9ICdcXHJcXG4nO1xuICAgIGNvbnN0IGJvdW5kYXJ5ID0gYC0tJHsoMCwgZ2V0X2JvdW5kYXJ5XzEuZGVmYXVsdCkoKX1gO1xuICAgIGNvbnN0IHBpZWNlcyA9IFtcbiAgICAgICAgYENvbnRlbnQtRGlzcG9zaXRpb246IGZvcm0tZGF0YTsgbmFtZT1cInRleHRcIiR7Q1JMRn0ke0NSTEZ9JHtwYXJhbWV0ZXJzLnRleHR9JHtDUkxGfWAsXG4gICAgICAgIGBDb250ZW50LURpc3Bvc2l0aW9uOiBmb3JtLWRhdGE7IG5hbWU9XCJwcm9maWxlXCIke0NSTEZ9JHtDUkxGfWNzczMke0NSTEZ9YCxcbiAgICAgICAgYENvbnRlbnQtRGlzcG9zaXRpb246IGZvcm0tZGF0YTsgbmFtZT1cIm91dHB1dFwiJHtDUkxGfSR7Q1JMRn1hcHBsaWNhdGlvbi9qc29uJHtDUkxGfWAsXG4gICAgICAgIGBDb250ZW50LURpc3Bvc2l0aW9uOiBmb3JtLWRhdGE7IG5hbWU9XCJ1c2VybWVkaXVtXCIke0NSTEZ9JHtDUkxGfSR7KF9hID0gcGFyYW1ldGVycy5tZWRpdW0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICdhbGwnfSR7Q1JMRn1gLFxuICAgICAgICBgQ29udGVudC1EaXNwb3NpdGlvbjogZm9ybS1kYXRhOyBuYW1lPVwid2FybmluZ1wiJHtDUkxGfSR7Q1JMRn0keyhwYXJhbWV0ZXJzID09PSBudWxsIHx8IHBhcmFtZXRlcnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmFtZXRlcnMud2FybmluZ0xldmVsKSA/IFN0cmluZyhwYXJhbWV0ZXJzLndhcm5pbmdMZXZlbCAtIDEpIDogJ25vJ30ke0NSTEZ9YCxcbiAgICBdO1xuICAgIHJldHVybiBgJHtib3VuZGFyeX0ke0NSTEZ9JHtwaWVjZXMuam9pbihgJHtib3VuZGFyeX0ke0NSTEZ9YCl9JHtib3VuZGFyeX1gO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGJ1aWxkRm9ybURhdGE7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBidWlsZF9yZXF1ZXN0X3VybF9wYXJhbWV0ZXJzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vYnVpbGQtcmVxdWVzdC11cmwtcGFyYW1ldGVyc1wiKSk7XG5jb25zdCBidWlsZF9mb3JtX2RhdGFfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9idWlsZC1mb3JtLWRhdGFcIikpO1xuY29uc3QgcHJvY2Vzc1BhcmFtZXRlcnMgPSAobWV0aG9kLCBwYXJhbWV0ZXJzKSA9PiB7XG4gICAgaWYgKG1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgICAgaWYgKCd0ZXh0JyBpbiBwYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgR0VUIHJlcXVlc3QgaXMgbm90IHN1cHBvcnRlZCB3aXRoIHZhbGlkYXRpb24gYnkgdGV4dCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoMCwgYnVpbGRfcmVxdWVzdF91cmxfcGFyYW1ldGVyc18xLmRlZmF1bHQpKHBhcmFtZXRlcnMpO1xuICAgIH1cbiAgICBpZiAobWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgICAgaWYgKCd1cmwnIGluIHBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSBQT1NUIHJlcXVlc3QgaXMgbm90IHN1cHBvcnRlZCB3aXRoIHZhbGlkYXRpb24gYnkgVVJMJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICgwLCBidWlsZF9mb3JtX2RhdGFfMS5kZWZhdWx0KShwYXJhbWV0ZXJzKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBQYXJhbWV0ZXIgcHJvY2Vzc2luZyBjYWxsZWQgd2l0aCB1bnJlY29nbml6ZWQgbWV0aG9kOiAke21ldGhvZH1gKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBwcm9jZXNzUGFyYW1ldGVycztcbiIsICJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdmFsaWRhdGVfb3B0aW9uc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi92YWxpZGF0ZS1vcHRpb25zXCIpKTtcbmNvbnN0IGJyb3dzZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9icm93c2VyXCIpKTtcbmNvbnN0IG5vZGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9ub2RlXCIpKTtcbmNvbnN0IHByb2Nlc3NfcGFyYW1ldGVyc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3Byb2Nlc3MtcGFyYW1ldGVyc1wiKSk7XG5jb25zdCByZXRyaWV2ZVZhbGlkYXRpb24gPSAobWV0aG9kLCB1bnByb2Nlc3NlZFBhcmFtZXRlcnMsIHRpbWVvdXQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICgwLCB2YWxpZGF0ZV9vcHRpb25zXzEuZGVmYXVsdCkoe1xuICAgICAgICB0aW1lb3V0LFxuICAgICAgICBtZWRpdW06IHVucHJvY2Vzc2VkUGFyYW1ldGVycy5tZWRpdW0sXG4gICAgICAgIHdhcm5pbmdMZXZlbDogdW5wcm9jZXNzZWRQYXJhbWV0ZXJzLndhcm5pbmdMZXZlbCxcbiAgICB9KTtcbiAgICBjb25zdCBwYXJhbWV0ZXJzID0gKDAsIHByb2Nlc3NfcGFyYW1ldGVyc18xLmRlZmF1bHQpKG1ldGhvZCwgdW5wcm9jZXNzZWRQYXJhbWV0ZXJzKTtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mICh3aW5kb3cgPT09IG51bGwgfHwgd2luZG93ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3aW5kb3cuZmV0Y2gpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB5aWVsZCAoMCwgYnJvd3Nlcl8xLmRlZmF1bHQpKG1ldGhvZCwgcGFyYW1ldGVycywgdGltZW91dCk7XG4gICAgfVxuICAgIHJldHVybiB5aWVsZCAoMCwgbm9kZV8xLmRlZmF1bHQpKG1ldGhvZCwgcGFyYW1ldGVycywgdGltZW91dCk7XG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJldHJpZXZlVmFsaWRhdGlvbjtcbiIsICJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcmV0cmlldmVfdmFsaWRhdGlvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3JldHJpZXZlLXZhbGlkYXRpb25cIikpO1xuZnVuY3Rpb24gdmFsaWRhdGVUZXh0KHRleHRUb0JlVmFsaWRhdGVkLCBvcHRpb25zKSB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKCF0ZXh0VG9CZVZhbGlkYXRlZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBwYXNzIGluIHRleHQgdG8gYmUgdmFsaWRhdGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0ZXh0VG9CZVZhbGlkYXRlZCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHRleHQgdG8gYmUgdmFsaWRhdGVkIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjc3NWYWxpZGF0aW9uUmVzcG9uc2UgPSB5aWVsZCAoMCwgcmV0cmlldmVfdmFsaWRhdGlvbl8xLmRlZmF1bHQpKCdQT1NUJywge1xuICAgICAgICAgICAgdGV4dDogdGV4dFRvQmVWYWxpZGF0ZWQsXG4gICAgICAgICAgICBtZWRpdW06IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5tZWRpdW0sXG4gICAgICAgICAgICB3YXJuaW5nTGV2ZWw6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53YXJuaW5nTGV2ZWwsXG4gICAgICAgIH0sIChfYSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy50aW1lb3V0KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAxMDAwMCk7XG4gICAgICAgIGNvbnN0IGJhc2UgPSB7XG4gICAgICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgICAgICBlcnJvcnM6IFtdLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndhcm5pbmdMZXZlbClcbiAgICAgICAgICAgID8gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBiYXNlKSwgeyB3YXJuaW5nczogW10gfSkgOiBiYXNlO1xuICAgICAgICByZXN1bHQudmFsaWQgPSBjc3NWYWxpZGF0aW9uUmVzcG9uc2UudmFsaWRpdHk7XG4gICAgICAgIChfYiA9IGNzc1ZhbGlkYXRpb25SZXNwb25zZS5lcnJvcnMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmVzdWx0LmVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBsaW5lOiBlcnJvci5saW5lLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UucmVwbGFjZSgvWyA6XSskLywgJycpLnRyaW0oKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCd3YXJuaW5ncycgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAoX2MgPSBjc3NWYWxpZGF0aW9uUmVzcG9uc2Uud2FybmluZ3MpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5mb3JFYWNoKCh3YXJuaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lndhcm5pbmdzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBsaW5lOiB3YXJuaW5nLmxpbmUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHdhcm5pbmcubWVzc2FnZS5yZXBsYWNlKC9bIDpdKyQvLCAnJykudHJpbSgpLFxuICAgICAgICAgICAgICAgICAgICBsZXZlbDogKHdhcm5pbmcubGV2ZWwgKyAxKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB2YWxpZGF0ZVRleHQ7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHJldHJpZXZlX3ZhbGlkYXRpb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9yZXRyaWV2ZS12YWxpZGF0aW9uXCIpKTtcbmZ1bmN0aW9uIHZhbGlkYXRlVVJMKHVybFRvQmVWYWxpZGF0ZWQsIG9wdGlvbnMpIHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoIXVybFRvQmVWYWxpZGF0ZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG11c3QgcGFzcyBpbiBhIFVSTCB0byBiZSB2YWxpZGF0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHVybFRvQmVWYWxpZGF0ZWQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBVUkwgdG8gYmUgdmFsaWRhdGVkIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjc3NWYWxpZGF0aW9uUmVzcG9uc2UgPSB5aWVsZCAoMCwgcmV0cmlldmVfdmFsaWRhdGlvbl8xLmRlZmF1bHQpKCdHRVQnLCB7XG4gICAgICAgICAgICB1cmw6IHVybFRvQmVWYWxpZGF0ZWQsXG4gICAgICAgICAgICBtZWRpdW06IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5tZWRpdW0sXG4gICAgICAgICAgICB3YXJuaW5nTGV2ZWw6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53YXJuaW5nTGV2ZWwsXG4gICAgICAgIH0sIChfYSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy50aW1lb3V0KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAxMDAwMCk7XG4gICAgICAgIGNvbnN0IGJhc2UgPSB7XG4gICAgICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgICAgICBlcnJvcnM6IFtdLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndhcm5pbmdMZXZlbClcbiAgICAgICAgICAgID8gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBiYXNlKSwgeyB3YXJuaW5nczogW10gfSkgOiBiYXNlO1xuICAgICAgICByZXN1bHQudmFsaWQgPSBjc3NWYWxpZGF0aW9uUmVzcG9uc2UudmFsaWRpdHk7XG4gICAgICAgIChfYiA9IGNzc1ZhbGlkYXRpb25SZXNwb25zZS5lcnJvcnMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgcmVzdWx0LmVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBsaW5lOiBlcnJvci5saW5lLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UucmVwbGFjZSgvWyA6XSskLywgJycpLnRyaW0oKSxcbiAgICAgICAgICAgICAgICB1cmw6IChfYSA9IGVycm9yLnNvdXJjZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbnVsbCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCd3YXJuaW5ncycgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAoX2MgPSBjc3NWYWxpZGF0aW9uUmVzcG9uc2Uud2FybmluZ3MpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5mb3JFYWNoKCh3YXJuaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIHJlc3VsdC53YXJuaW5ncy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbGluZTogd2FybmluZy5saW5lLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB3YXJuaW5nLm1lc3NhZ2UucmVwbGFjZSgvWyA6XSskLywgJycpLnRyaW0oKSxcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWw6ICh3YXJuaW5nLmxldmVsICsgMSksXG4gICAgICAgICAgICAgICAgICAgIHVybDogKF9hID0gd2FybmluZy5zb3VyY2UpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG51bGwsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdmFsaWRhdGVVUkw7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5jb25zdCB2YWxpZGF0ZV90ZXh0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vdmFsaWRhdGUtdGV4dFwiKSk7XG5jb25zdCB2YWxpZGF0ZV91cmxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi92YWxpZGF0ZS11cmxcIikpO1xuY29uc3QgY3NzVmFsaWRhdG9yID0ge1xuICAgIHZhbGlkYXRlVGV4dDogdmFsaWRhdGVfdGV4dF8xLmRlZmF1bHQsXG4gICAgdmFsaWRhdGVVUkw6IHZhbGlkYXRlX3VybF8xLmRlZmF1bHQsXG59O1xubW9kdWxlLmV4cG9ydHMgPSBjc3NWYWxpZGF0b3I7XG4iLCAiaW1wb3J0IHsgaXBjUmVuZGVyZXIsIGNvbnRleHRCcmlkZ2UgfSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQgeyBJUEMgfSBmcm9tICdAY29uc3RhbnRzJztcbmltcG9ydCBMb2dnZXJNb2R1bGUgZnJvbSAnQGNvbW1vbi9sb2dnZXInO1xuY29uc3QgTG9nZ2VyID0gbmV3IExvZ2dlck1vZHVsZSgnUHJlbG9hZCcpO1xuXG5jb25zdCBQb3Bjb3JuTmF0aXZlOiBQb3Bjb3JuTmF0aXZlID0ge1xuICAvLyBNaXNjXG4gIGNvbmZpZzogaXBjUmVuZGVyZXIuc2VuZFN5bmMoSVBDLmdldENvbmZpZyksXG4gIGdldFN0eWxlczogKCkgPT4gaXBjUmVuZGVyZXIuaW52b2tlKElQQy5nZXRTdHlsZXMpLFxuICBvblN0YXR1c01lc3NhZ2U6IChsaXN0ZW5lcikgPT4gaXBjUmVuZGVyZXIub24oSVBDLnN0YXR1c01lc3NhZ2UsIChfLCBtZXNzYWdlKSA9PiBsaXN0ZW5lcihtZXNzYWdlKSksXG4gIGlzU3BsYXNoOiBpc1NwbGFzaCgpLFxuXG4gIC8vIFRoZW1lc1xuICBnZXRUaGVtZXM6ICgpID0+IGlwY1JlbmRlcmVyLmludm9rZShJUEMuZ2V0VGhlbWVzKSxcbiAgb25UaGVtZUNoYW5nZTogKGxpc3RlbmVyKSA9PiBpcGNSZW5kZXJlci5vbihJUEMub25UaGVtZUNoYW5nZSwgKF8sIGNoYW5nZSkgPT4gbGlzdGVuZXIoY2hhbmdlKSksXG4gIHNhdmVUaGVtZVN0YXRlOiAoaWQsIHN0YXRlKSA9PiBpcGNSZW5kZXJlci5zZW5kKElQQy5zYXZlVGhlbWVTdGF0ZSwgaWQsIHN0YXRlKSxcblxuICAvLyBRdWlja0NTU1xuICBnZXRRdWlja0NzczogKCkgPT4gaXBjUmVuZGVyZXIuaW52b2tlKElQQy5nZXRRdWlja0NzcyksXG4gIG9uUXVpY2tDc3NDaGFuZ2U6IChsaXN0ZW5lcikgPT4gaXBjUmVuZGVyZXIub24oSVBDLm9uUXVpY2tDc3NDaGFuZ2UsIChfLCB1cGRhdGVkKSA9PiBsaXN0ZW5lcih1cGRhdGVkKSksXG4gIGNyZWF0ZVF1aWNrQ3NzTm9kZTogKGxvY2F0aW9uLCB0eXBlKSA9PiBpcGNSZW5kZXJlci5zZW5kKElQQy5jcmVhdGVRdWlja0Nzc05vZGUsIGxvY2F0aW9uLCB0eXBlKSxcbiAgZGVsZXRlUXVpY2tDc3NOb2RlOiAobG9jYXRpb24pID0+IGlwY1JlbmRlcmVyLnNlbmQoSVBDLmRlbGV0ZVF1aWNrQ3NzTm9kZSwgbG9jYXRpb24pLFxuICByZW5hbWVRdWlja0Nzc05vZGU6IChsb2NhdGlvbiwgbmV3TG9jYXRpb24pID0+IGlwY1JlbmRlcmVyLnNlbmQoSVBDLnJlbmFtZVF1aWNrQ3NzTm9kZSwgbG9jYXRpb24sIG5ld0xvY2F0aW9uKSxcbiAgdXBkYXRlUXVpY2tDc3NGaWxlOiAobG9jYXRpb24sIGNvbnRlbnQpID0+IGlwY1JlbmRlcmVyLnNlbmQoSVBDLnVwZGF0ZVF1aWNrQ3NzRmlsZSwgbG9jYXRpb24sIGNvbnRlbnQpLFxufTtcblxudHJ5IHtcbiAgY29uc3QgY3NzVmFsaWRhdG9yOiB0eXBlb2YgaW1wb3J0KCd3M2MtY3NzLXZhbGlkYXRvcicpID0gcmVxdWlyZSgndzNjLWNzcy12YWxpZGF0b3InKTtcbiAgUG9wY29ybk5hdGl2ZS52YWxpZGF0ZUNTUyA9IGNzc1ZhbGlkYXRvci52YWxpZGF0ZVRleHQ7XG59IGNhdGNoIChlKSB7XG4gIExvZ2dlci5pbmZvKCdEaXNhYmxlZCBDU1MgVmFsaWRhdG9yJyk7XG59XG5cbmNvbnRleHRCcmlkZ2UuZXhwb3NlSW5NYWluV29ybGQoJ1BvcGNvcm5OYXRpdmUnLCBQb3Bjb3JuTmF0aXZlKTtcblxuaXBjUmVuZGVyZXIub24oSVBDLmxvZywgKF8sIHR5cGUsIC4uLm1lc3NhZ2U6IGFueVtdKSA9PiB7XG4gIGNvbnN0IExvZ2dlciA9IG5ldyBMb2dnZXJNb2R1bGUoJ01haW4nKTtcblxuICBMb2dnZXJbdHlwZV0oLi4ubWVzc2FnZSk7XG59KTtcblxuZnVuY3Rpb24gaXNTcGxhc2goKSB7XG4gIGNvbnN0IHBvc3NpYmxlVmFycyA9IFtcbiAgICAnc3BsYXNoJyxcbiAgICAnU3BsYXNoJyxcbiAgICAnU1BMQVNIJyxcbiAgICAnX19TUExBU0gnLFxuICAgICdfX1NQTEFTSF9fJyxcbiAgICAnc3BsYXNoU2NyZWVuJyxcbiAgICAnU3BsYXNoU2NyZWVuJyxcbiAgICAnU1BMQVNIU0NSRUVOJyxcbiAgICAnX19TUExBU0hTQ1JFRU4nLFxuICAgICdfX1NQTEFTSFNDUkVFTl9fJ1xuICBdO1xuXG4gIGZvciAoY29uc3QgdmFyTmFtZSBvZiBwb3NzaWJsZVZhcnMpIHtcbiAgICBpZiAod2luZG93W3Zhck5hbWVdKSByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IHsgd2luZG93T3B0aW9ucyB9ID0gaXBjUmVuZGVyZXIuc2VuZFN5bmMoSVBDLmdldFdpbmRvd0RhdGEpO1xuICBpZiAoIXdpbmRvd09wdGlvbnMud2ViUHJlZmVyZW5jZXMubmF0aXZlV2luZG93T3BlbikgcmV0dXJuIHRydWU7XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuIiwgImV4cG9ydCBjb25zdCBwcmVmaXhlcyA9IHtcbiAgbWFpbjogJ1BPUENPUk5fJyxcbiAgcXVpY2tDc3M6ICdRVUlDS0NTU18nLFxuICB0aGVtZXM6ICdUSEVNRVNfJyxcbn07XG5cbmV4cG9ydCBjb25zdCBJUEMgPSBwcmVmaXhWYWx1ZXMoe1xuICAvLyBNaXNjXG4gIGdldENvbmZpZzogJ0dFVF9DT05GSUcnLFxuICBnZXRTdHlsZXM6ICdHRVRfU1RZTEVTJyxcbiAgc3RhdHVzTWVzc2FnZTogJ1NUQVRVU19NRVNTQUdFJyxcbiAgZ2V0V2luZG93RGF0YTogJ0dFVF9XSU5ET1dfREFUQScsXG4gIGxvZzogJ0xPRycsXG5cbiAgLy8gVGhlbWVzXG4gIGdldFRoZW1lczogJ0dFVF9USEVNRVMnLFxuICBvblRoZW1lQ2hhbmdlOiAnT05fVEhFTUVfQ0hBTkdFJyxcbiAgc2F2ZVRoZW1lU3RhdGU6ICdTQVZFX1RIRU1FX1NUQVRFJyxcblxuICAvLyBRdWlja0NTU1xuICBnZXRRdWlja0NzczogJ0dFVF9RVUlDS19DU1MnLFxuICBvblF1aWNrQ3NzQ2hhbmdlOiAnT05fUVVJQ0tfQ1NTX0NIQU5HRScsXG4gIGNyZWF0ZVF1aWNrQ3NzTm9kZTogJ0NSRUFURV9RVUlDS19DU1NfTk9ERScsXG4gIGRlbGV0ZVF1aWNrQ3NzTm9kZTogJ0RFTEVURV9RVUlDS19DU1NfTk9ERScsXG4gIHJlbmFtZVF1aWNrQ3NzTm9kZTogJ1JFTkFNRV9RVUlDS19DU1NfTk9ERScsXG4gIHVwZGF0ZVF1aWNrQ3NzRmlsZTogJ1NBVkVfUVVJQ0tfQ1NTX0ZJTEUnLFxufSwgcHJlZml4ZXMubWFpbik7XG5cbmV4cG9ydCBjb25zdCBNRVNTQUdFUyA9IHtcbiAgcXVpY2tDc3M6IHByZWZpeFZhbHVlcyh7XG4gICAgY3JlYXRlZDogJ0NSRUFURUQnLFxuICAgIGRlbGV0ZWQ6ICdERUxFVEVEJyxcbiAgICByZW5hbWVkOiAnUkVOQU1FRCcsXG4gICAgdXBkYXRlZDogJ1VQREFURUQnLFxuICB9LCBwcmVmaXhlcy5xdWlja0NzcyksXG59O1xuXG5mdW5jdGlvbiBwcmVmaXhWYWx1ZXM8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4+KG9iamVjdDogVCwgcHJlZml4OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzdWx0ID0ge30gYXMgUmVjb3JkPGtleW9mIFQsIHN0cmluZz47XG4gIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgIHJlc3VsdFtrZXldID0gcHJlZml4ICsgb2JqZWN0W2tleV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsICJpbXBvcnQgeyBJUEMgfSBmcm9tICdAY29tbW9uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBMb2dnZXJNb2R1bGUge1xuICBwcml2YXRlIG1vZHVsZTogc3RyaW5nO1xuICBwcml2YXRlIG91dHB1dDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZSA9ICdjb25zb2xlJykge1xuICAgIHRoaXMubW9kdWxlID0gbmFtZTtcbiAgICB0aGlzLm91dHB1dCA9IHRoaXMuI3BhcnNlT3V0cHV0KHR5cGUpO1xuICB9XG5cbiAgI3BhcnNlT3V0cHV0KG91dHB1dDogc3RyaW5nKSB7XG4gICAgc3dpdGNoIChvdXRwdXQpIHtcbiAgICAgIGNhc2UgJ2Fuc2knOlxuICAgICAgY2FzZSAndGVybWluYWwnOlxuICAgICAgICByZXR1cm4gJ2Fuc2knO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdjb25zb2xlJztcbiAgICB9XG4gIH1cblxuICAjcGFyc2VUeXBlKHR5cGU6IHN0cmluZykge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICBjYXNlICd3YXJuJzpcbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgIGNhc2UgJ2RlYnVnJzpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ2xvZyc7XG4gICAgfVxuICB9XG5cbiAgI3BhcnNlQ29sb3IodHlwZTogc3RyaW5nKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdkZWJ1Zyc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RyOiAnTWVkaXVtU3ByaW5nR3JlZW4nLFxuICAgICAgICAgIGFycjogWzAsIDI1MCwgMTU0XSxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0cjogJ0RlZXBTa3lCbHVlJyxcbiAgICAgICAgICBhcnI6IFswLCAxOTEsIDI1NV0sXG4gICAgICAgIH07XG4gICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RyOiAnY3JpbXNvbicsXG4gICAgICAgICAgYXJyOiBbMjIwLCAyMCwgNjBdLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnd2Fybic6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RyOiAnRGFya09yYW5nZScsXG4gICAgICAgICAgYXJyOiBbMjU1LCAxNDAsIDBdLFxuICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdHI6ICdnb2xkJyxcbiAgICAgICAgICBhcnI6IFsyNTUsIDIxNSwgMF0sXG4gICAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgI2Fuc2lDb2xvcihjb2xvcjogQXJyYXk8bnVtYmVyPiwgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGBcXHgxYlszODsyOyR7Y29sb3JbMF19OyR7Y29sb3JbMV19OyR7Y29sb3JbMl19bSR7bWVzc2FnZX1cXHgxYlswbWA7XG4gIH1cblxuICBhc3luYyAjbG9nKHR5cGU6IHN0cmluZywgbWVzc2FnZTogYW55W10pIHtcbiAgICB0eXBlID0gdGhpcy4jcGFyc2VUeXBlKHR5cGUpO1xuICAgIGNvbnN0IGxvZ0NvbG9yID0gdGhpcy4jcGFyc2VDb2xvcih0eXBlKTtcblxuICAgIGNvbnN0IGJhbm5lciA9XG4gICAgICB0aGlzLm91dHB1dCA9PT0gJ2Fuc2knXG4gICAgICAgID8gW2BbJHt0aGlzLiNhbnNpQ29sb3IobG9nQ29sb3IuYXJyLCAnUG9wY29ybicpfSA+ICR7dGhpcy5tb2R1bGV9XWBdXG4gICAgICAgIDogW2BbJWNQb3Bjb3JuJWMgPiAke3RoaXMubW9kdWxlfV1gLCBgY29sb3I6ICR7bG9nQ29sb3Iuc3RyfTtgLCAnJ107XG5cbiAgICBjb25zb2xlW3R5cGVdKC4uLmJhbm5lciwgLi4ubWVzc2FnZSk7XG5cbiAgICAvLyBUT0RPOiBEb24ndCBzZW5kIGV2ZXJ5dGhpbmdcbiAgICBpZiAodGhpcy5vdXRwdXQgPT09ICdhbnNpJykge1xuICAgICAgY29uc3QgeyBCcm93c2VyV2luZG93IH0gPSBhd2FpdCBpbXBvcnQoJ2VsZWN0cm9uJyk7XG5cbiAgICAgIEJyb3dzZXJXaW5kb3cuZ2V0QWxsV2luZG93cygpLmZvckVhY2goKHdpbikgPT4gd2luLndlYkNvbnRlbnRzLnNlbmQoSVBDLmxvZywgdHlwZSwgLi4ubWVzc2FnZSkpO1xuICAgIH1cbiAgfVxuXG4gIGxvZyA9ICguLi5tZXNzYWdlOiBhbnlbXSkgPT4gdGhpcy4jbG9nKCdsb2cnLCBtZXNzYWdlKTtcbiAgaW5mbyA9ICguLi5tZXNzYWdlOiBhbnlbXSkgPT4gdGhpcy4jbG9nKCdpbmZvJywgbWVzc2FnZSk7XG4gIHdhcm4gPSAoLi4ubWVzc2FnZTogYW55W10pID0+IHRoaXMuI2xvZygnd2FybicsIG1lc3NhZ2UpO1xuICBlcnJvciA9ICguLi5tZXNzYWdlOiBhbnlbXSkgPT4gdGhpcy4jbG9nKCdlcnJvcicsIG1lc3NhZ2UpO1xuICBkZWJ1ZyA9ICguLi5tZXNzYWdlOiBhbnlbXSkgPT4gdGhpcy4jbG9nKCdkZWJ1ZycsIG1lc3NhZ2UpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dnZXJNb2R1bGU7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7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
