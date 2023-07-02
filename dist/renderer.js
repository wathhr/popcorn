var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
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
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};

// node_modules/.pnpm/ts-debounce@4.0.0/node_modules/ts-debounce/dist/src/index.js
var require_src = __commonJS({
  "node_modules/.pnpm/ts-debounce@4.0.0/node_modules/ts-debounce/dist/src/index.js"(exports) {
    exports.debounce = function(e, r, n) {
      var i, o, t;
      void 0 === r && (r = 50), void 0 === n && (n = {});
      var a = null != (i = n.isImmediate) && i, u = null != (o = n.callback) && o, c = n.maxWait, v = Date.now(), l = [];
      function f() {
        if (void 0 !== c) {
          var e2 = Date.now() - v;
          if (e2 + r >= c)
            return c - e2;
        }
        return r;
      }
      var d = function() {
        var r2 = [].slice.call(arguments), n2 = this;
        return new Promise(function(i2, o2) {
          var c2 = a && void 0 === t;
          if (void 0 !== t && clearTimeout(t), t = setTimeout(function() {
            if (t = void 0, v = Date.now(), !a) {
              var i3 = e.apply(n2, r2);
              u && u(i3), l.forEach(function(e2) {
                return (0, e2.resolve)(i3);
              }), l = [];
            }
          }, f()), c2) {
            var d2 = e.apply(n2, r2);
            return u && u(d2), i2(d2);
          }
          l.push({ resolve: i2, reject: o2 });
        });
      };
      return d.cancel = function(e2) {
        void 0 !== t && clearTimeout(t), l.forEach(function(r2) {
          return (0, r2.reject)(e2);
        }), l = [];
      }, d;
    };
  }
});

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.39.0/node_modules/@monaco-editor/loader/lib/cjs/_virtual/_rollupPluginBabelHelpers.js
var require_rollupPluginBabelHelpers = __commonJS({
  "node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.39.0/node_modules/@monaco-editor/loader/lib/cjs/_virtual/_rollupPluginBabelHelpers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    function _objectWithoutProperties(source, excluded) {
      if (source == null)
        return {};
      var target = _objectWithoutPropertiesLoose(source, excluded);
      var key, i;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0)
            continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key))
            continue;
          target[key] = source[key];
        }
      }
      return target;
    }
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    function _iterableToArrayLimit(arr, i) {
      if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = void 0;
      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    exports.arrayLikeToArray = _arrayLikeToArray;
    exports.arrayWithHoles = _arrayWithHoles;
    exports.defineProperty = _defineProperty;
    exports.iterableToArrayLimit = _iterableToArrayLimit;
    exports.nonIterableRest = _nonIterableRest;
    exports.objectSpread2 = _objectSpread2;
    exports.objectWithoutProperties = _objectWithoutProperties;
    exports.objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;
    exports.slicedToArray = _slicedToArray;
    exports.unsupportedIterableToArray = _unsupportedIterableToArray;
  }
});

// node_modules/.pnpm/state-local@1.0.7/node_modules/state-local/lib/cjs/state-local.js
var require_state_local = __commonJS({
  "node_modules/.pnpm/state-local@1.0.7/node_modules/state-local/lib/cjs/state-local.js"(exports, module) {
    "use strict";
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function compose() {
      for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
        fns[_key] = arguments[_key];
      }
      return function(x) {
        return fns.reduceRight(function(y, f) {
          return f(y);
        }, x);
      };
    }
    function curry(fn) {
      return function curried() {
        var _this = this;
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        return args.length >= fn.length ? fn.apply(this, args) : function() {
          for (var _len3 = arguments.length, nextArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            nextArgs[_key3] = arguments[_key3];
          }
          return curried.apply(_this, [].concat(args, nextArgs));
        };
      };
    }
    function isObject2(value) {
      return {}.toString.call(value).includes("Object");
    }
    function isEmpty(obj) {
      return !Object.keys(obj).length;
    }
    function isFunction(value) {
      return typeof value === "function";
    }
    function hasOwnProperty(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }
    function validateChanges(initial, changes) {
      if (!isObject2(changes))
        errorHandler("changeType");
      if (Object.keys(changes).some(function(field) {
        return !hasOwnProperty(initial, field);
      }))
        errorHandler("changeField");
      return changes;
    }
    function validateSelector(selector) {
      if (!isFunction(selector))
        errorHandler("selectorType");
    }
    function validateHandler(handler) {
      if (!(isFunction(handler) || isObject2(handler)))
        errorHandler("handlerType");
      if (isObject2(handler) && Object.values(handler).some(function(_handler) {
        return !isFunction(_handler);
      }))
        errorHandler("handlersType");
    }
    function validateInitial(initial) {
      if (!initial)
        errorHandler("initialIsRequired");
      if (!isObject2(initial))
        errorHandler("initialType");
      if (isEmpty(initial))
        errorHandler("initialContent");
    }
    function throwError(errorMessages2, type) {
      throw new Error(errorMessages2[type] || errorMessages2["default"]);
    }
    var errorMessages = {
      initialIsRequired: "initial state is required",
      initialType: "initial state should be an object",
      initialContent: "initial state shouldn't be an empty object",
      handlerType: "handler should be an object or a function",
      handlersType: "all handlers should be a functions",
      selectorType: "selector should be a function",
      changeType: "provided value of changes should be an object",
      changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
      "default": "an unknown error accured in `state-local` package"
    };
    var errorHandler = curry(throwError)(errorMessages);
    var validators = {
      changes: validateChanges,
      selector: validateSelector,
      handler: validateHandler,
      initial: validateInitial
    };
    function create(initial) {
      var handler = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      validators.initial(initial);
      validators.handler(handler);
      var state = {
        current: initial
      };
      var didUpdate = curry(didStateUpdate)(state, handler);
      var update2 = curry(updateState)(state);
      var validate2 = curry(validators.changes)(initial);
      var getChanges = curry(extractChanges)(state);
      function getState() {
        var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(state2) {
          return state2;
        };
        validators.selector(selector);
        return selector(state.current);
      }
      function setState(causedChanges) {
        compose(didUpdate, update2, validate2, getChanges)(causedChanges);
      }
      return [getState, setState];
    }
    function extractChanges(state, causedChanges) {
      return isFunction(causedChanges) ? causedChanges(state.current) : causedChanges;
    }
    function updateState(state, changes) {
      state.current = _objectSpread2(_objectSpread2({}, state.current), changes);
      return changes;
    }
    function didStateUpdate(state, handler, changes) {
      isFunction(handler) ? handler(state.current) : Object.keys(changes).forEach(function(field) {
        var _handler$field;
        return (_handler$field = handler[field]) === null || _handler$field === void 0 ? void 0 : _handler$field.call(handler, state.current[field]);
      });
      return changes;
    }
    var index = {
      create
    };
    module.exports = index;
  }
});

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.39.0/node_modules/@monaco-editor/loader/lib/cjs/config/index.js
var require_config = __commonJS({
  "node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.39.0/node_modules/@monaco-editor/loader/lib/cjs/config/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var config = {
      paths: {
        vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.36.1/min/vs"
      }
    };
    exports.default = config;
  }
});

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.39.0/node_modules/@monaco-editor/loader/lib/cjs/utils/curry.js
var require_curry = __commonJS({
  "node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.39.0/node_modules/@monaco-editor/loader/lib/cjs/utils/curry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function curry(fn) {
      return function curried() {
        var _this = this;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return args.length >= fn.length ? fn.apply(this, args) : function() {
          for (var _len2 = arguments.length, nextArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            nextArgs[_key2] = arguments[_key2];
          }
          return curried.apply(_this, [].concat(args, nextArgs));
        };
      };
    }
    exports.default = curry;
  }
});

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.39.0/node_modules/@monaco-editor/loader/lib/cjs/utils/isObject.js
var require_isObject = __commonJS({
  "node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.39.0/node_modules/@monaco-editor/loader/lib/cjs/utils/isObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isObject2(value) {
      return {}.toString.call(value).includes("Object");
    }
    exports.default = isObject2;
  }
});

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.39.0/node_modules/@monaco-editor/loader/lib/cjs/validators/index.js
var require_validators = __commonJS({
  "node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.39.0/node_modules/@monaco-editor/loader/lib/cjs/validators/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var curry = require_curry();
    var isObject2 = require_isObject();
    function validateConfig(config) {
      if (!config)
        errorHandler("configIsRequired");
      if (!isObject2["default"](config))
        errorHandler("configType");
      if (config.urls) {
        informAboutDeprecation();
        return {
          paths: {
            vs: config.urls.monacoBase
          }
        };
      }
      return config;
    }
    function informAboutDeprecation() {
      console.warn(errorMessages.deprecation);
    }
    function throwError(errorMessages2, type) {
      throw new Error(errorMessages2[type] || errorMessages2["default"]);
    }
    var errorMessages = {
      configIsRequired: "the configuration object is required",
      configType: "the configuration object should be an object",
      "default": "an unknown error accured in `@monaco-editor/loader` package",
      deprecation: "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "
    };
    var errorHandler = curry["default"](throwError)(errorMessages);
    var validators = {
      config: validateConfig
    };
    exports.default = validators;
    exports.errorHandler = errorHandler;
    exports.errorMessages = errorMessages;
  }
});

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.39.0/node_modules/@monaco-editor/loader/lib/cjs/utils/compose.js
var require_compose = __commonJS({
  "node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.39.0/node_modules/@monaco-editor/loader/lib/cjs/utils/compose.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var compose = function compose2() {
      for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
        fns[_key] = arguments[_key];
      }
      return function(x) {
        return fns.reduceRight(function(y, f) {
          return f(y);
        }, x);
      };
    };
    exports.default = compose;
  }
});

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.39.0/node_modules/@monaco-editor/loader/lib/cjs/utils/deepMerge.js
var require_deepMerge = __commonJS({
  "node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.39.0/node_modules/@monaco-editor/loader/lib/cjs/utils/deepMerge.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _rollupPluginBabelHelpers = require_rollupPluginBabelHelpers();
    function merge(target, source) {
      Object.keys(source).forEach(function(key) {
        if (source[key] instanceof Object) {
          if (target[key]) {
            Object.assign(source[key], merge(target[key], source[key]));
          }
        }
      });
      return _rollupPluginBabelHelpers.objectSpread2(_rollupPluginBabelHelpers.objectSpread2({}, target), source);
    }
    exports.default = merge;
  }
});

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.39.0/node_modules/@monaco-editor/loader/lib/cjs/utils/makeCancelable.js
var require_makeCancelable = __commonJS({
  "node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.39.0/node_modules/@monaco-editor/loader/lib/cjs/utils/makeCancelable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CANCELATION_MESSAGE = {
      type: "cancelation",
      msg: "operation is manually canceled"
    };
    function makeCancelable(promise) {
      var hasCanceled_ = false;
      var wrappedPromise = new Promise(function(resolve, reject) {
        promise.then(function(val) {
          return hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val);
        });
        promise["catch"](reject);
      });
      return wrappedPromise.cancel = function() {
        return hasCanceled_ = true;
      }, wrappedPromise;
    }
    exports.CANCELATION_MESSAGE = CANCELATION_MESSAGE;
    exports.default = makeCancelable;
  }
});

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.39.0/node_modules/@monaco-editor/loader/lib/cjs/loader/index.js
var require_loader = __commonJS({
  "node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.39.0/node_modules/@monaco-editor/loader/lib/cjs/loader/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _rollupPluginBabelHelpers = require_rollupPluginBabelHelpers();
    var state = require_state_local();
    var index = require_config();
    var index$1 = require_validators();
    var compose = require_compose();
    var deepMerge2 = require_deepMerge();
    var makeCancelable = require_makeCancelable();
    function _interopDefaultLegacy(e) {
      return e && typeof e === "object" && "default" in e ? e : { "default": e };
    }
    var state__default = /* @__PURE__ */ _interopDefaultLegacy(state);
    var _state$create = state__default["default"].create({
      config: index["default"],
      isInitialized: false,
      resolve: null,
      reject: null,
      monaco: null
    });
    var _state$create2 = _rollupPluginBabelHelpers.slicedToArray(_state$create, 2);
    var getState = _state$create2[0];
    var setState = _state$create2[1];
    function config(globalConfig) {
      var _validators$config = index$1["default"].config(globalConfig), monaco = _validators$config.monaco, config2 = _rollupPluginBabelHelpers.objectWithoutProperties(_validators$config, ["monaco"]);
      setState(function(state2) {
        return {
          config: deepMerge2["default"](state2.config, config2),
          monaco
        };
      });
    }
    function init2() {
      var state2 = getState(function(_ref) {
        var monaco = _ref.monaco, isInitialized = _ref.isInitialized, resolve = _ref.resolve;
        return {
          monaco,
          isInitialized,
          resolve
        };
      });
      if (!state2.isInitialized) {
        setState({
          isInitialized: true
        });
        if (state2.monaco) {
          state2.resolve(state2.monaco);
          return makeCancelable["default"](wrapperPromise);
        }
        if (window.monaco && window.monaco.editor) {
          storeMonacoInstance(window.monaco);
          state2.resolve(window.monaco);
          return makeCancelable["default"](wrapperPromise);
        }
        compose["default"](injectScripts, getMonacoLoaderScript)(configureLoader);
      }
      return makeCancelable["default"](wrapperPromise);
    }
    function injectScripts(script) {
      return document.body.appendChild(script);
    }
    function createScript(src) {
      var script = document.createElement("script");
      return src && (script.src = src), script;
    }
    function getMonacoLoaderScript(configureLoader2) {
      var state2 = getState(function(_ref2) {
        var config2 = _ref2.config, reject = _ref2.reject;
        return {
          config: config2,
          reject
        };
      });
      var loaderScript = createScript("".concat(state2.config.paths.vs, "/loader.js"));
      loaderScript.onload = function() {
        return configureLoader2();
      };
      loaderScript.onerror = state2.reject;
      return loaderScript;
    }
    function configureLoader() {
      var state2 = getState(function(_ref3) {
        var config2 = _ref3.config, resolve = _ref3.resolve, reject = _ref3.reject;
        return {
          config: config2,
          resolve,
          reject
        };
      });
      var require2 = window.require;
      require2.config(state2.config);
      require2(["vs/editor/editor.main"], function(monaco) {
        storeMonacoInstance(monaco);
        state2.resolve(monaco);
      }, function(error) {
        state2.reject(error);
      });
    }
    function storeMonacoInstance(monaco) {
      if (!getState().monaco) {
        setState({
          monaco
        });
      }
    }
    function __getMonacoInstance() {
      return getState(function(_ref4) {
        var monaco = _ref4.monaco;
        return monaco;
      });
    }
    var wrapperPromise = new Promise(function(resolve, reject) {
      return setState({
        resolve,
        reject
      });
    });
    var loader2 = {
      config,
      init: init2,
      __getMonacoInstance
    };
    exports.default = loader2;
  }
});

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.39.0/node_modules/@monaco-editor/loader/lib/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.39.0/node_modules/@monaco-editor/loader/lib/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var index = require_loader();
    exports.default = index["default"];
  }
});

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
function autoBind(self2, { include, exclude } = {}) {
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
  for (const [object, key] of getAllProperties(self2.constructor.prototype)) {
    if (key === "constructor" || !filter(key)) {
      continue;
    }
    const descriptor = Reflect.getOwnPropertyDescriptor(object, key);
    if (descriptor && typeof descriptor.value === "function") {
      self2[key] = self2[key].bind(self2);
    }
  }
  return self2;
}

// node_modules/.pnpm/svelte@3.59.2/node_modules/svelte/internal/index.mjs
function noop() {
}
function assign(tar, src) {
  for (const k in src)
    tar[k] = src[k];
  return tar;
}
function add_location(element2, file9, line, column, char) {
  element2.__svelte_meta = {
    loc: { file: file9, line, column, char }
  };
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
function validate_store(store, name) {
  if (store != null && typeof store.subscribe !== "function") {
    throw new Error(`'${name}' is not a store with a 'subscribe' method`);
  }
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function get_store_value(store) {
  let value;
  subscribe(store, (_) => value = _)();
  return value;
}
function component_subscribe(component, store, callback) {
  component.$$.on_destroy.push(subscribe(store, callback));
}
function set_store_value(store, ret, value) {
  store.set(value);
  return ret;
}
function action_destroyer(action_result) {
  return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
}
var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
var ResizeObserverSingleton = class {
  constructor(options) {
    this.options = options;
    this._listeners = "WeakMap" in globals ? /* @__PURE__ */ new WeakMap() : void 0;
  }
  observe(element2, listener) {
    this._listeners.set(element2, listener);
    this._getObserver().observe(element2, this.options);
    return () => {
      this._listeners.delete(element2);
      this._observer.unobserve(element2);
    };
  }
  _getObserver() {
    var _a;
    return (_a = this._observer) !== null && _a !== void 0 ? _a : this._observer = new ResizeObserver((entries) => {
      var _a2;
      for (const entry of entries) {
        ResizeObserverSingleton.entries.set(entry.target, entry);
        (_a2 = this._listeners.get(entry.target)) === null || _a2 === void 0 ? void 0 : _a2(entry);
      }
    });
  }
};
ResizeObserverSingleton.entries = "WeakMap" in globals ? /* @__PURE__ */ new WeakMap() : void 0;
var is_hydrating = false;
function start_hydrating() {
  is_hydrating = true;
}
function end_hydrating() {
  is_hydrating = false;
}
function append(target, node) {
  target.appendChild(node);
}
function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}
function detach(node) {
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
}
function destroy_each(iterations, detaching) {
  for (let i = 0; i < iterations.length; i += 1) {
    if (iterations[i])
      iterations[i].d(detaching);
  }
}
function element(name) {
  return document.createElement(name);
}
function svg_element(name) {
  return document.createElementNS("http://www.w3.org/2000/svg", name);
}
function text(data) {
  return document.createTextNode(data);
}
function space() {
  return text(" ");
}
function empty() {
  return text("");
}
function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}
function stop_propagation(fn) {
  return function(event) {
    event.stopPropagation();
    return fn.call(this, event);
  };
}
function self(fn) {
  return function(event) {
    if (event.target === this)
      fn.call(this, event);
  };
}
function attr(node, attribute, value) {
  if (value == null)
    node.removeAttribute(attribute);
  else if (node.getAttribute(attribute) !== value)
    node.setAttribute(attribute, value);
}
function set_svg_attributes(node, attributes) {
  for (const key in attributes) {
    attr(node, key, attributes[key]);
  }
}
function children(element2) {
  return Array.from(element2.childNodes);
}
function set_style(node, key, value, important) {
  if (value == null) {
    node.style.removeProperty(key);
  } else {
    node.style.setProperty(key, value, important ? "important" : "");
  }
}
function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
  const e = document.createEvent("CustomEvent");
  e.initCustomEvent(type, bubbles, cancelable, detail);
  return e;
}
var current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}
function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}
function createEventDispatcher() {
  const component = get_current_component();
  return (type, detail, { cancelable = false } = {}) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = custom_event(type, detail, { cancelable });
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
      return !event.defaultPrevented;
    }
    return true;
  };
}
var dirty_components = [];
var binding_callbacks = [];
var render_callbacks = [];
var flush_callbacks = [];
var resolved_promise = /* @__PURE__ */ Promise.resolve();
var update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
function add_flush_callback(fn) {
  flush_callbacks.push(fn);
}
var seen_callbacks = /* @__PURE__ */ new Set();
var flushidx = 0;
function flush() {
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e) {
      dirty_components.length = 0;
      flushidx = 0;
      throw e;
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
function flush_render_callbacks(fns) {
  const filtered = [];
  const targets = [];
  render_callbacks.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
  targets.forEach((c) => c());
  render_callbacks = filtered;
}
var outroing = /* @__PURE__ */ new Set();
var outros;
function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros
    // parent group
  };
}
function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }
  outros = outros.p;
}
function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}
function transition_out(block, local, detach2, callback) {
  if (block && block.o) {
    if (outroing.has(block))
      return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);
      if (callback) {
        if (detach2)
          block.d(1);
        callback();
      }
    });
    block.o(local);
  } else if (callback) {
    callback();
  }
}
function get_spread_update(levels, updates) {
  const update2 = {};
  const to_null_out = {};
  const accounted_for = { $$scope: 1 };
  let i = levels.length;
  while (i--) {
    const o = levels[i];
    const n = updates[i];
    if (n) {
      for (const key in o) {
        if (!(key in n))
          to_null_out[key] = 1;
      }
      for (const key in n) {
        if (!accounted_for[key]) {
          update2[key] = n[key];
          accounted_for[key] = 1;
        }
      }
      levels[i] = n;
    } else {
      for (const key in o) {
        accounted_for[key] = 1;
      }
    }
  }
  for (const key in to_null_out) {
    if (!(key in update2))
      update2[key] = void 0;
  }
  return update2;
}
var _boolean_attributes = [
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
];
var boolean_attributes = /* @__PURE__ */ new Set([..._boolean_attributes]);
function bind(component, name, callback) {
  const index = component.$$.props[name];
  if (index !== void 0) {
    component.$$.bound[index] = callback;
    callback(component.$$.ctx[index]);
  }
}
function create_component(block) {
  block && block.c();
}
function mount_component(component, target, anchor, customElement) {
  const { fragment, after_update } = component.$$;
  fragment && fragment.m(target, anchor);
  if (!customElement) {
    add_render_callback(() => {
      const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
      if (component.$$.on_destroy) {
        component.$$.on_destroy.push(...new_on_destroy);
      } else {
        run_all(new_on_destroy);
      }
      component.$$.on_mount = [];
    });
  }
  after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    flush_render_callbacks($$.after_update);
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }
  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}
function init(component, options, instance10, create_fragment10, not_equal, props, append_styles, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const $$ = component.$$ = {
    fragment: null,
    ctx: [],
    // state
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
    // everything else
    callbacks: blank_object(),
    dirty,
    skip_bound: false,
    root: options.target || parent_component.$$.root
  };
  append_styles && append_styles($$.root);
  let ready = false;
  $$.ctx = instance10 ? instance10(component, options.props || {}, (i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;
    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i])
        $$.bound[i](value);
      if (ready)
        make_dirty(component, i);
    }
    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update);
  $$.fragment = create_fragment10 ? create_fragment10($$.ctx) : false;
  if (options.target) {
    if (options.hydrate) {
      start_hydrating();
      const nodes = children(options.target);
      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      $$.fragment && $$.fragment.c();
    }
    if (options.intro)
      transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor, options.customElement);
    end_hydrating();
    flush();
  }
  set_current_component(parent_component);
}
var SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      const { on_mount } = this.$$;
      this.$$.on_disconnect = on_mount.map(run).filter(is_function);
      for (const key in this.$$.slotted) {
        this.appendChild(this.$$.slotted[key]);
      }
    }
    attributeChangedCallback(attr2, _oldValue, newValue) {
      this[attr2] = newValue;
    }
    disconnectedCallback() {
      run_all(this.$$.on_disconnect);
    }
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
    $on(type, callback) {
      if (!is_function(callback)) {
        return noop;
      }
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1)
          callbacks.splice(index, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  };
}
var SvelteComponent = class {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }
  $on(type, callback) {
    if (!is_function(callback)) {
      return noop;
    }
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1)
        callbacks.splice(index, 1);
    };
  }
  $set($$props) {
    if (this.$$set && !is_empty($$props)) {
      this.$$.skip_bound = true;
      this.$$set($$props);
      this.$$.skip_bound = false;
    }
  }
};
function dispatch_dev(type, detail) {
  document.dispatchEvent(custom_event(type, Object.assign({ version: "3.59.2" }, detail), { bubbles: true }));
}
function append_dev(target, node) {
  dispatch_dev("SvelteDOMInsert", { target, node });
  append(target, node);
}
function insert_dev(target, node, anchor) {
  dispatch_dev("SvelteDOMInsert", { target, node, anchor });
  insert(target, node, anchor);
}
function detach_dev(node) {
  dispatch_dev("SvelteDOMRemove", { node });
  detach(node);
}
function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation, has_stop_immediate_propagation) {
  const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
  if (has_prevent_default)
    modifiers.push("preventDefault");
  if (has_stop_propagation)
    modifiers.push("stopPropagation");
  if (has_stop_immediate_propagation)
    modifiers.push("stopImmediatePropagation");
  dispatch_dev("SvelteDOMAddEventListener", { node, event, handler, modifiers });
  const dispose = listen(node, event, handler, options);
  return () => {
    dispatch_dev("SvelteDOMRemoveEventListener", { node, event, handler, modifiers });
    dispose();
  };
}
function attr_dev(node, attribute, value) {
  attr(node, attribute, value);
  if (value == null)
    dispatch_dev("SvelteDOMRemoveAttribute", { node, attribute });
  else
    dispatch_dev("SvelteDOMSetAttribute", { node, attribute, value });
}
function prop_dev(node, property, value) {
  node[property] = value;
  dispatch_dev("SvelteDOMSetProperty", { node, property, value });
}
function set_data_dev(text2, data) {
  data = "" + data;
  if (text2.data === data)
    return;
  dispatch_dev("SvelteDOMSetData", { node: text2, data });
  text2.data = data;
}
function validate_each_argument(arg) {
  if (typeof arg !== "string" && !(arg && typeof arg === "object" && "length" in arg)) {
    let msg = "{#each} only iterates over array-like objects.";
    if (typeof Symbol === "function" && arg && Symbol.iterator in arg) {
      msg += " You can use a spread to convert this iterable into an array.";
    }
    throw new Error(msg);
  }
}
function validate_slots(name, slot, keys) {
  for (const slot_key of Object.keys(slot)) {
    if (!~keys.indexOf(slot_key)) {
      console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
    }
  }
}
function construct_svelte_component_dev(component, props) {
  const error_message = "this={...} of <svelte:component> should specify a Svelte component.";
  try {
    const instance10 = new component(props);
    if (!instance10.$$ || !instance10.$set || !instance10.$on || !instance10.$destroy) {
      throw new Error(error_message);
    }
    return instance10;
  } catch (err) {
    const { message } = err;
    if (typeof message === "string" && message.indexOf("is not a constructor") !== -1) {
      throw new Error(error_message);
    } else {
      throw err;
    }
  }
}
var SvelteComponentDev = class extends SvelteComponent {
  constructor(options) {
    if (!options || !options.target && !options.$$inline) {
      throw new Error("'target' is a required option");
    }
    super();
  }
  $destroy() {
    super.$destroy();
    this.$destroy = () => {
      console.warn("Component was already destroyed");
    };
  }
  $capture_state() {
  }
  $inject_state() {
  }
};

// node_modules/.pnpm/svelte@3.59.2/node_modules/svelte/store/index.mjs
var subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update2(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update: update2, subscribe: subscribe2 };
}

// node_modules/.pnpm/@walter-org+svelte-float@0.0.3_svelte@3.59.2/node_modules/@walter-org/svelte-float/dist/utils/deepMerge.js
function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}
function deepMerge(target, ...sources) {
  if (!sources.length)
    return target;
  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (const k in source) {
      const key = k;
      if (isObject(source[key])) {
        if (!target[key])
          Object.assign(target, { [key]: {} });
        deepMerge(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }
  return deepMerge(target, ...sources);
}

// node_modules/.pnpm/@walter-org+svelte-float@0.0.3_svelte@3.59.2/node_modules/@walter-org/svelte-float/dist/utils/em2px.js
function em2px(em, base) {
  base ??= document.documentElement;
  const px = parseFloat(getComputedStyle(base).fontSize);
  return em * px;
}

// node_modules/.pnpm/@walter-org+svelte-float@0.0.3_svelte@3.59.2/node_modules/@walter-org/svelte-float/dist/utils/generateID.js
function generateID(length = 8) {
  return [...Array(length)].map(() => Math.random().toString(36)[2]).join("");
}

// node_modules/.pnpm/@floating-ui+core@1.3.1/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getLengthFromAxis(axis) {
  return axis === "y" ? "height" : "width";
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "x" : "y";
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  const commonAlign = reference[length] / 2 - floating[length] / 2;
  const side = getSide(placement);
  const isVertical = mainAxis === "x";
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
      continue;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getSideObjectFromPadding(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getSideObjectFromPadding(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element2 = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element2))) != null ? _await$platform$isEle : true) ? element2 : element2.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    ...rects.floating,
    x,
    y
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var min = Math.min;
var max = Math.max;
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
var arrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements
    } = state;
    const {
      element: element2,
      padding = 0
    } = evaluate(options, state) || {};
    if (element2 == null) {
      return {};
    }
    const paddingObject = getSideObjectFromPadding(padding);
    const coords = {
      x,
      y
    };
    const axis = getMainAxisFromPlacement(placement);
    const length = getLengthFromAxis(axis);
    const arrowDimensions = await platform2.getDimensions(element2);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element2));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max3 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = within(min$1, center, max3);
    const shouldAddOffset = getAlignment(placement) != null && center != offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? min$1 - center : max3 - center : 0;
    return {
      [axis]: coords[axis] - alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2 + alignmentOffset
      }
    };
  }
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  let mainAlignmentSide = mainAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const {
          main,
          cross
        } = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[main], overflow[cross]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$map$so;
              const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getMainAxisFromPlacement(placement) === "x";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      const {
        x,
        y
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: diffCoords
      };
    }
  };
};
function getCrossAxis(axis) {
  return axis === "x" ? "y" : "x";
}
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const mainAxis = getMainAxisFromPlacement(getSide(placement));
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min3 = mainAxisCoord + overflow[minSide];
        const max3 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = within(min3, mainAxisCoord, max3);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min3 = crossAxisCoord + overflow[minSide];
        const max3 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = within(min3, crossAxisCoord, max3);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};

// node_modules/.pnpm/@floating-ui+dom@1.4.3/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getWindow(node) {
  var _node$ownerDocument;
  return ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getComputedStyle$1(element2) {
  return getWindow(element2).getComputedStyle(element2);
}
function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function isHTMLElement(value) {
  return value instanceof getWindow(value).HTMLElement;
}
function isElement(value) {
  return value instanceof getWindow(value).Element;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return node instanceof getWindow(node).ShadowRoot || node instanceof ShadowRoot;
}
function isOverflowElement(element2) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element2);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element2) {
  return ["table", "td", "th"].includes(getNodeName(element2));
}
function isContainingBlock(element2) {
  const safari = isSafari();
  const css = getComputedStyle$1(element2);
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !safari && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !safari && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function isSafari() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
var min2 = Math.min;
var max2 = Math.max;
var round = Math.round;
var floor = Math.floor;
var createEmptyCoords = (v) => ({
  x: v,
  y: v
});
function getCssDimensions(element2) {
  const css = getComputedStyle$1(element2);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element2);
  const offsetWidth = hasOffset ? element2.offsetWidth : width;
  const offsetHeight = hasOffset ? element2.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element2) {
  return !isElement(element2) ? element2.contextElement : element2;
}
function getScale(element2) {
  const domElement = unwrapElement(element2);
  if (!isHTMLElement(domElement)) {
    return createEmptyCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = /* @__PURE__ */ createEmptyCoords(0);
function getVisualOffsets(element2, isFixed, floatingOffsetParent) {
  var _win$visualViewport, _win$visualViewport2;
  if (isFixed === void 0) {
    isFixed = true;
  }
  if (!isSafari()) {
    return noOffsets;
  }
  const win = element2 ? getWindow(element2) : window;
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== win) {
    return noOffsets;
  }
  return {
    x: ((_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) || 0,
    y: ((_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) || 0
  };
}
function getBoundingClientRect(element2, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element2.getBoundingClientRect();
  const domElement = unwrapElement(element2);
  let scale = createEmptyCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element2);
    }
  }
  const visualOffsets = getVisualOffsets(domElement, isFixedStrategy, offsetParent);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}
function getNodeScroll(element2) {
  if (isElement(element2)) {
    return {
      scrollLeft: element2.scrollLeft,
      scrollTop: element2.scrollTop
    };
  }
  return {
    scrollLeft: element2.pageXOffset,
    scrollTop: element2.pageYOffset
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createEmptyCoords(1);
  const offsets = createEmptyCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getWindowScrollBarX(element2) {
  return getBoundingClientRect(getDocumentElement(element2)).left + getNodeScroll(element2).scrollLeft;
}
function getDocumentRect(element2) {
  const html = getDocumentElement(element2);
  const scroll = getNodeScroll(element2);
  const body = element2.ownerDocument.body;
  const width = max2(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max2(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element2);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === "rtl") {
    x += max2(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list) {
  var _node$ownerDocument;
  if (list === void 0) {
    list = [];
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
}
function getViewportRect(element2, strategy) {
  const win = getWindow(element2);
  const html = getDocumentElement(element2);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isSafari();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element2, strategy) {
  const clientRect = getBoundingClientRect(element2, true, strategy === "fixed");
  const top = clientRect.top + element2.clientTop;
  const left = clientRect.left + element2.clientLeft;
  const scale = isHTMLElement(element2) ? getScale(element2) : createEmptyCoords(1);
  const width = element2.clientWidth * scale.x;
  const height = element2.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element2, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element2, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element2));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element2);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element2, stopNode) {
  const parentNode = getParentNode(element2);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element2, cache) {
  const cachedResult = cache.get(element2);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element2).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element2).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element2) : element2;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element2, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element2, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element: element2,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element2, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element2, clippingAncestor, strategy);
    accRect.top = max2(rect.top, accRect.top);
    accRect.right = min2(rect.right, accRect.right);
    accRect.bottom = min2(rect.bottom, accRect.bottom);
    accRect.left = max2(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element2, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element2) {
  return getCssDimensions(element2);
}
function getTrueOffsetParent(element2, polyfill) {
  if (!isHTMLElement(element2) || getComputedStyle$1(element2).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element2);
  }
  return element2.offsetParent;
}
function getContainingBlock(element2) {
  let currentNode = getParentNode(element2);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}
function getOffsetParent(element2, polyfill) {
  const window2 = getWindow(element2);
  if (!isHTMLElement(element2)) {
    return window2;
  }
  let offsetParent = getTrueOffsetParent(element2, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element2) || window2;
}
function getRectRelativeToOffsetParent(element2, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element2, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createEmptyCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
var platform = {
  getClippingRect,
  convertOffsetParentRelativeRectToViewportRelativeRect,
  isElement,
  getDimensions,
  getOffsetParent,
  getDocumentElement,
  getScale,
  async getElementRects(_ref) {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    return {
      reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
      floating: {
        x: 0,
        y: 0,
        ...await getDimensionsFn(floating)
      }
    };
  },
  getClientRects: (element2) => Array.from(element2.getClientRects()),
  isRTL: (element2) => getComputedStyle$1(element2).direction === "rtl"
};
function observeMove(element2, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element2);
  function cleanup() {
    clearTimeout(timeoutId);
    io && io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element2.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max2(0, min2(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 100);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element2);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update2, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update2, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update2);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update2) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          resizeObserver && resizeObserver.observe(floating);
        });
      }
      update2();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update2();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update2();
  return () => {
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update2);
      ancestorResize && ancestor.removeEventListener("resize", update2);
    });
    cleanupIo && cleanupIo();
    resizeObserver && resizeObserver.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// node_modules/.pnpm/@walter-org+svelte-float@0.0.3_svelte@3.59.2/node_modules/@walter-org/svelte-float/dist/tooltip/action.js
var tooltip = (node, opts = {}) => {
  const defaults = {
    allowHtml: false,
    arrow: true,
    class: "tooltip",
    content: node.title,
    target: "body",
    visible: "auto",
    computePositionCallback: (data, { wrapper, arrow: arrow2 }) => {
      const { x, y, placement, middlewareData } = data;
      wrapper.style.left = x + "px";
      wrapper.style.top = y + "px";
      const placementParts = placement.split("-");
      const opposites = {
        top: "bottom",
        bottom: "top",
        left: "right",
        right: "left"
      };
      const opposite = opposites[placementParts[0]];
      let originCross = "center";
      if (placement === "top" || placement === "bottom") {
        if (placementParts[1] === "start")
          originCross = "top";
        else if (placementParts[1] === "end")
          originCross = "bottom";
      } else {
        if (placementParts[1] === "start")
          originCross = "left";
        else if (placementParts[1] === "end")
          originCross = "right";
      }
      Object.assign(wrapper.style, {
        "transform-origin": opposite + " " + originCross
      });
      if (middlewareData.arrow) {
        const { x: x2, y: y2 } = middlewareData.arrow;
        arrow2?.setAttribute("data-direction", opposite);
        Object.assign(arrow2.style, {
          left: x2 + "px",
          top: y2 + "px",
          [opposite]: "calc(var(--_size) / -2)"
        });
      }
    },
    fuiConfig: {
      placement: "top",
      middleware: [
        flip(),
        offset(em2px(0.5)),
        shift()
      ]
    },
    fuiAutoUpdateConfig: {}
  };
  opts = deepMerge(defaults, opts);
  if (!opts.content)
    throw new Error("No content defined, either add the content option or add a title property to the element.");
  const keydownHandler = (event) => {
    switch (event.key) {
      case "Escape":
        {
          hide2();
        }
        break;
    }
  };
  let inDom;
  const id = node.id ? node.id + "-tooltip" : generateID();
  let tooltip2 = createTooltip(node, opts, id);
  async function hide2() {
    if (inDom) {
      await animate("out");
      tooltip2.wrapper.remove();
      node.removeAttribute("aria-describedby");
      inDom = false;
    }
  }
  async function show() {
    if (!inDom) {
      getElement(opts.target).appendChild(tooltip2.wrapper);
      inDom = true;
      node.setAttribute("aria-describedby", id);
      await animate("in");
    }
  }
  switch (opts.visible) {
    case true:
      {
        show();
      }
      break;
    case "auto":
      {
        node.addEventListener("mouseenter", show);
        node.addEventListener("mouseleave", hide2);
        node.addEventListener("focus", show);
        node.addEventListener("blur", hide2);
        window.addEventListener("keydown", keydownHandler);
      }
      break;
  }
  function animate(type) {
    return new Promise((resolve, reject) => {
      tooltip2.wrapper.setAttribute("data-animating", type);
      const style = getComputedStyle(tooltip2.wrapper);
      const animation = parseFloat(style.getPropertyValue("animation-duration"));
      const transition = parseFloat(style.getPropertyValue("transition-duration"));
      if (animation <= 0 && transition <= 0) {
        tooltip2.wrapper.removeAttribute("data-animating");
        console.error("No animation found.");
        reject();
      }
      tooltip2.wrapper.addEventListener("animationend", () => {
        tooltip2.wrapper.removeAttribute("data-animating");
        resolve();
      });
    });
  }
  function handleUpdate(key, newOpts) {
    switch (key) {
      case "content":
        {
          tooltip2.content[newOpts.allowHtml ? "innerHTML" : "textContent"] = newOpts.content;
          node.setAttribute("data-tooltip-content", newOpts.content);
        }
        break;
      case "allowHtml":
        {
          tooltip2.content[newOpts.allowHtml ? "innerHTML" : "textContent"] = newOpts.content;
          tooltip2.content.setAttribute("data-allow-html", newOpts.allowHtml ? "true" : "false");
          node.setAttribute("data-tooltip-content", newOpts.content);
        }
        break;
      case "class":
        {
          const modifiedOldClasses = getClasses(opts.class);
          const modifiedNewClasses = getClasses(newOpts.class);
          tooltip2.wrapper.classList.remove(...modifiedOldClasses.wrapper);
          tooltip2.wrapper.classList.add(...modifiedNewClasses.wrapper);
          tooltip2.content.classList.remove(...modifiedOldClasses.content);
          tooltip2.content.classList.add(...modifiedNewClasses.content);
          tooltip2.arrow?.classList.remove(...modifiedOldClasses.arrow);
          tooltip2.arrow?.classList.add(...modifiedNewClasses.arrow);
        }
        break;
      case "visible":
        {
          if (!newOpts.visible)
            hide2();
          switch (newOpts.visible) {
            case true:
              show();
            case false:
              {
                node.removeEventListener("mouseenter", show);
                node.removeEventListener("mouseleave", hide2);
                node.removeEventListener("focus", show);
                node.removeEventListener("blur", hide2);
              }
              break;
            case "auto":
              {
                node.addEventListener("mouseenter", show);
                node.addEventListener("mouseleave", hide2);
                node.addEventListener("focus", show);
                node.addEventListener("blur", hide2);
              }
              break;
          }
        }
        break;
      default:
        {
          tooltip2 = createTooltip(node, opts, id);
        }
        break;
    }
  }
  return {
    update(newOpts) {
      for (const k in newOpts) {
        const key = k;
        handleUpdate(key, newOpts);
      }
      opts = deepMerge(defaults, newOpts);
    },
    destroy() {
      window.removeEventListener("keydown", keydownHandler);
      for (const k in tooltip2) {
        const key = k;
        tooltip2[key]?.remove();
      }
    }
  };
};
function createTooltip(node, opts, id) {
  const classes = getClasses(opts.class ?? []);
  const wrapper = document.createElement("div");
  wrapper.classList.add(...classes.wrapper);
  wrapper.role = "tooltip";
  wrapper.id = id;
  const content = document.createElement("div");
  content.classList.add(...classes.content);
  content.setAttribute("data-allow-html", opts.allowHtml ? "true" : "false");
  content[opts.allowHtml ? "innerHTML" : "textContent"] = opts.content;
  wrapper.appendChild(content);
  let arrow2;
  if (opts.arrow) {
    arrow2 = document.createElement("div");
    arrow2.classList.add(...classes.arrow);
    wrapper.appendChild(arrow2);
    opts.fuiConfig.middleware ??= [];
    opts.fuiConfig.middleware.push(arrow({ element: arrow2 }));
  }
  autoUpdate(node, wrapper, () => {
    computePosition2(node, wrapper, opts.fuiConfig).then((computePositionReturn) => {
      opts.computePositionCallback(computePositionReturn, { wrapper, content, arrow: arrow2 });
    });
  });
  return {
    wrapper,
    content,
    arrow: arrow2
  };
}
function getElement(elem) {
  return typeof elem === "string" ? document.querySelector(elem) : elem;
}
function getClasses(classes) {
  if (typeof classes === "string")
    classes = classes.split(" ");
  if (typeof classes[0] === "string" && !classes[0])
    classes[0] = "tooltip";
  if (classes.length === 0)
    classes.push("tooltip");
  return {
    wrapper: classes.map((c) => c + (c ? "-" : "") + "wrapper"),
    content: classes.map((c) => c + (c ? "-" : "") + "content"),
    arrow: classes.map((c) => c + (c ? "-" : "") + "arrow")
  };
}

// node_modules/.pnpm/svelte-icons-pack@2.1.0/node_modules/svelte-icons-pack/Icon.svelte
var file = "node_modules\\.pnpm\\svelte-icons-pack@2.1.0\\node_modules\\svelte-icons-pack\\Icon.svelte";
function create_fragment(ctx) {
  let svg;
  let svg_levels = [
    { width: (
      /*size*/
      ctx[1]
    ) },
    { height: (
      /*size*/
      ctx[1]
    ) },
    { "stroke-width": "0" },
    { class: (
      /*className*/
      ctx[2]
    ) },
    /*src*/
    ctx[0].a,
    /*attr*/
    ctx[4],
    { xmlns: "http://www.w3.org/2000/svg" }
  ];
  let svg_data = {};
  for (let i = 0; i < svg_levels.length; i += 1) {
    svg_data = assign(svg_data, svg_levels[i]);
  }
  const block = {
    c: function create() {
      svg = svg_element("svg");
      set_svg_attributes(svg, svg_data);
      add_location(svg, file, 26, 0, 417);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      svg.innerHTML = /*innerHtml*/
      ctx[3];
    },
    p: function update2(ctx2, [dirty]) {
      if (dirty & /*innerHtml*/
      8)
        svg.innerHTML = /*innerHtml*/
        ctx2[3];
      ;
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        dirty & /*size*/
        2 && { width: (
          /*size*/
          ctx2[1]
        ) },
        dirty & /*size*/
        2 && { height: (
          /*size*/
          ctx2[1]
        ) },
        { "stroke-width": "0" },
        dirty & /*className*/
        4 && { class: (
          /*className*/
          ctx2[2]
        ) },
        dirty & /*src*/
        1 && /*src*/
        ctx2[0].a,
        dirty & /*attr*/
        16 && /*attr*/
        ctx2[4],
        { xmlns: "http://www.w3.org/2000/svg" }
      ]));
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Icon", slots, []);
  let { src } = $$props;
  let { size: size2 = "1em" } = $$props;
  let { color = void 0 } = $$props;
  let { title = void 0 } = $$props;
  let { className = "" } = $$props;
  let innerHtml;
  let attr2;
  $$self.$$.on_mount.push(function() {
    if (src === void 0 && !("src" in $$props || $$self.$$.bound[$$self.$$.props["src"]])) {
      console.warn("<Icon> was created without expected prop 'src'");
    }
  });
  const writable_props = ["src", "size", "color", "title", "className"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Icon> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("src" in $$props2)
      $$invalidate(0, src = $$props2.src);
    if ("size" in $$props2)
      $$invalidate(1, size2 = $$props2.size);
    if ("color" in $$props2)
      $$invalidate(5, color = $$props2.color);
    if ("title" in $$props2)
      $$invalidate(6, title = $$props2.title);
    if ("className" in $$props2)
      $$invalidate(2, className = $$props2.className);
  };
  $$self.$capture_state = () => ({
    src,
    size: size2,
    color,
    title,
    className,
    innerHtml,
    attr: attr2
  });
  $$self.$inject_state = ($$props2) => {
    if ("src" in $$props2)
      $$invalidate(0, src = $$props2.src);
    if ("size" in $$props2)
      $$invalidate(1, size2 = $$props2.size);
    if ("color" in $$props2)
      $$invalidate(5, color = $$props2.color);
    if ("title" in $$props2)
      $$invalidate(6, title = $$props2.title);
    if ("className" in $$props2)
      $$invalidate(2, className = $$props2.className);
    if ("innerHtml" in $$props2)
      $$invalidate(3, innerHtml = $$props2.innerHtml);
    if ("attr" in $$props2)
      $$invalidate(4, attr2 = $$props2.attr);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*color, src*/
    33) {
      $: {
        $$invalidate(4, attr2 = {});
        if (color) {
          if (src.a.stroke !== "none") {
            $$invalidate(4, attr2.stroke = color, attr2);
          }
          if (src.a.fill !== "none") {
            $$invalidate(4, attr2.fill = color, attr2);
          }
        }
      }
    }
    if ($$self.$$.dirty & /*title, src*/
    65) {
      $: {
        $$invalidate(3, innerHtml = (title ? `<title>${title}</title>` : "") + src.c);
      }
    }
  };
  return [src, size2, className, innerHtml, attr2, color, title];
}
var Icon = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, {
      src: 0,
      size: 1,
      color: 5,
      title: 6,
      className: 2
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Icon",
      options,
      id: create_fragment.name
    });
  }
  get src() {
    throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set src(value) {
    throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get size() {
    throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set size(value) {
    throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get color() {
    throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set color(value) {
    throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get title() {
    throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set title(value) {
    throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get className() {
    throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set className(value) {
    throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var Icon_default = Icon;

// node_modules/.pnpm/svelte-icons-pack@2.1.0/node_modules/svelte-icons-pack/ri/RiEditorQuestionMark.js
var RiEditorQuestionMark_default = {
  a: {
    viewBox: "0 0 24 24"
  },
  c: '<g><path fill="none" d="M0 0H24V24H0z"></path>\n<path d="M12 19c.828 0 1.5.672 1.5 1.5S12.828 22 12 22s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm0-17c3.314 0 6 2.686 6 6 0 2.165-.753 3.29-2.674 4.923C13.399 14.56 13 15.297 13 17h-2c0-2.474.787-3.695 3.031-5.601C15.548 10.11 16 9.434 16 8c0-2.21-1.79-4-4-4S8 5.79 8 8v1H6V8c0-3.314 2.686-6 6-6z"></path></g>'
};

// node_modules/.pnpm/svelte-icons-pack@2.1.0/node_modules/svelte-icons-pack/vsc/VscCheck.js
var VscCheck_default = {
  a: {
    viewBox: "0 0 16 16",
    fill: "currentColor"
  },
  c: '<path fill-rule="evenodd" clip-rule="evenodd" d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"></path>'
};

// node_modules/.pnpm/svelte-icons-pack@2.1.0/node_modules/svelte-icons-pack/vsc/VscChromeClose.js
var VscChromeClose_default = {
  a: {
    viewBox: "0 0 16 16",
    fill: "currentColor"
  },
  c: '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.116 8l-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z"></path>'
};

// src/renderer/ui/tabs/Themes.svelte
var { Object: Object_1 } = globals;
var file2 = "src\\renderer\\ui\\tabs\\Themes.svelte";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[4] = list[i];
  const constants_0 = window.Popcorn.themes[
    /*id*/
    child_ctx[4]
  ];
  child_ctx[5] = constants_0;
  const constants_1 = (
    /*getValidityData*/
    child_ctx[1](
      /*theme*/
      child_ctx[5].valid
    )
  );
  child_ctx[6] = constants_1.icon;
  child_ctx[7] = constants_1.text;
  return child_ctx;
}
function create_if_block(ctx) {
  let div;
  let icon;
  let div_data_value_value;
  let tooltip_action;
  let current;
  let mounted;
  let dispose;
  icon = new Icon_default({
    props: {
      color: "currentColor",
      src: (
        /*icon*/
        ctx[6]
      )
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      create_component(icon.$$.fragment);
      attr_dev(div, "class", "theme-validity PopcornUI-1qhapve");
      attr_dev(div, "data-value", div_data_value_value = /*theme*/
      ctx[5].valid);
      add_location(div, file2, 49, 12, 1586);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      mount_component(icon, div, null);
      current = true;
      if (!mounted) {
        dispose = action_destroyer(tooltip_action = tooltip.call(null, div, {
          content: (
            /*theme*/
            ctx[5].valid ? (
              /*text*/
              ctx[7]
            ) : createTooltipContent(
              /*theme*/
              ctx[5].errors
            )
          ),
          target: "#PopcornUI-layers"
        }));
        mounted = true;
      }
    },
    p: function update2(new_ctx, dirty) {
      ctx = new_ctx;
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(icon);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(49:10) {#if shouldValidate}",
    ctx
  });
  return block;
}
function create_key_block(ctx) {
  let div1;
  let h1;
  let t0_value = (
    /*id*/
    ctx[4] + ""
  );
  let t0;
  let t1;
  let t2;
  let div0;
  let t3_value = (
    /*theme*/
    (ctx[5].description ?? "") + ""
  );
  let t3;
  let t4;
  let button;
  let t5_value = (
    /*theme*/
    ctx[5].enabled ? "Disable" : "Enable"
  );
  let t5;
  let t6;
  let div1_id_value;
  let div1_data_enabled_value;
  let current;
  let mounted;
  let dispose;
  let if_block = shouldValidate && create_if_block(ctx);
  function click_handler() {
    return (
      /*click_handler*/
      ctx[2](
        /*id*/
        ctx[4]
      )
    );
  }
  function submit_handler() {
    return (
      /*submit_handler*/
      ctx[3](
        /*id*/
        ctx[4]
      )
    );
  }
  const block = {
    c: function create() {
      div1 = element("div");
      h1 = element("h1");
      t0 = text(t0_value);
      t1 = space();
      if (if_block)
        if_block.c();
      t2 = space();
      div0 = element("div");
      t3 = text(t3_value);
      t4 = space();
      button = element("button");
      t5 = text(t5_value);
      t6 = space();
      attr_dev(h1, "class", "theme-id PopcornUI-1qhapve");
      add_location(h1, file2, 46, 8, 1506);
      attr_dev(div0, "class", "theme-description PopcornUI-1qhapve");
      add_location(div0, file2, 61, 8, 1966);
      attr_dev(button, "class", "theme-toggle PopcornUI-1qhapve");
      add_location(button, file2, 62, 8, 2037);
      attr_dev(div1, "class", "theme-container PopcornUI-1qhapve");
      attr_dev(div1, "id", div1_id_value = /*id*/
      ctx[4]);
      attr_dev(div1, "data-enabled", div1_data_enabled_value = /*theme*/
      ctx[5].enabled);
      add_location(div1, file2, 45, 6, 1434);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, h1);
      append_dev(h1, t0);
      append_dev(h1, t1);
      if (if_block)
        if_block.m(h1, null);
      append_dev(div1, t2);
      append_dev(div1, div0);
      append_dev(div0, t3);
      append_dev(div1, t4);
      append_dev(div1, button);
      append_dev(button, t5);
      append_dev(div1, t6);
      current = true;
      if (!mounted) {
        dispose = [
          listen_dev(button, "click", click_handler, false, false, false, false),
          listen_dev(button, "submit", submit_handler, false, false, false, false)
        ];
        mounted = true;
      }
    },
    p: function update2(new_ctx, dirty) {
      ctx = new_ctx;
      if (shouldValidate)
        if_block.p(ctx, dirty);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div1);
      if (if_block)
        if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_key_block.name,
    type: "key",
    source: "(45:4) {#key $rerenderStore[id]}",
    ctx
  });
  return block;
}
function create_each_block(ctx) {
  let previous_key = (
    /*$rerenderStore*/
    ctx[0][
      /*id*/
      ctx[4]
    ]
  );
  let key_block_anchor;
  let current;
  let key_block = create_key_block(ctx);
  const block = {
    c: function create() {
      key_block.c();
      key_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      key_block.m(target, anchor);
      insert_dev(target, key_block_anchor, anchor);
      current = true;
    },
    p: function update2(ctx2, dirty) {
      if (dirty & /*$rerenderStore*/
      1 && safe_not_equal(previous_key, previous_key = /*$rerenderStore*/
      ctx2[0][
        /*id*/
        ctx2[4]
      ])) {
        group_outros();
        transition_out(key_block, 1, 1, noop);
        check_outros();
        key_block = create_key_block(ctx2);
        key_block.c();
        transition_in(key_block, 1);
        key_block.m(key_block_anchor.parentNode, key_block_anchor);
      } else {
        key_block.p(ctx2, dirty);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(key_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(key_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(key_block_anchor);
      key_block.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(42:2) {#each Object.keys(window.Popcorn.themes) as id}",
    ctx
  });
  return block;
}
function create_fragment2(ctx) {
  let div;
  let current;
  let each_value = Object.keys(window.Popcorn.themes);
  validate_each_argument(each_value);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  const block = {
    c: function create() {
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr_dev(div, "class", "themes-wrapper PopcornUI-1qhapve");
      add_location(div, file2, 40, 0, 1212);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div, null);
        }
      }
      current = true;
    },
    p: function update2(ctx2, [dirty]) {
      if (dirty & /*$rerenderStore, Object, window, getValidityData, createTooltipContent, shouldValidate*/
      3) {
        each_value = Object.keys(window.Popcorn.themes);
        validate_each_argument(each_value);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(div, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i: function intro(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment2.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
var rerenderStore = writable({});
function rerenderTheme(id) {
  rerenderStore.update((obj) => {
    obj[id] = !obj[id];
    return obj;
  });
}
function createTooltipContent(errors) {
  return errors.map((error) => `Line ${error.line}: ${error.message}`).join("\n ");
}
function instance2($$self, $$props, $$invalidate) {
  let $rerenderStore;
  validate_store(rerenderStore, "rerenderStore");
  component_subscribe($$self, rerenderStore, ($$value) => $$invalidate(0, $rerenderStore = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Themes", slots, []);
  function getValidityData(validity) {
    switch (validity) {
      case true:
        return { icon: VscCheck_default, text: "Valid" };
      case false:
        return { icon: VscChromeClose_default, text: "Invalid" };
      default:
        return {
          icon: RiEditorQuestionMark_default,
          text: "Validity Unknown"
        };
    }
  }
  const writable_props = [];
  Object_1.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Themes> was created with unknown prop '${key}'`);
  });
  const click_handler = (id) => window.Popcorn.themes[id].toggle();
  const submit_handler = (id) => window.Popcorn.themes[id].toggle();
  $$self.$capture_state = () => ({
    writable,
    rerenderStore,
    rerenderTheme,
    tooltip,
    Icon: Icon_default,
    RiEditorQuestionMark: RiEditorQuestionMark_default,
    VscCheck: VscCheck_default,
    VscChromeClose: VscChromeClose_default,
    shouldValidate,
    createTooltipContent,
    getValidityData,
    $rerenderStore
  });
  return [$rerenderStore, getValidityData, click_handler, submit_handler];
}
var Themes = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance2, create_fragment2, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Themes",
      options,
      id: create_fragment2.name
    });
  }
};
var Themes_default = Themes;

// src/common/constants.ts
var prefixes = {
  main: "POPCORN_",
  quickCss: "QUICKCSS_"
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
var RENDERER = prefixValues({
  stop: "STOP"
}, prefixes.main);
function prefixValues(object, prefix) {
  const result = {};
  for (const key in object) {
    result[key] = prefix + object[key];
  }
  return result;
}

// src/common/logger.ts
var LoggerModule = class {
  constructor(module, type = "console") {
    this.module = module;
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
var logger_default = LoggerModule;

// src/renderer/themes/index.ts
var Logger = new logger_default("Themes");
var _element, _enabled, _validate, validate_fn;
var _Theme = class {
  constructor(id, themeData) {
    __privateAdd(this, _validate);
    __publicField(this, "description");
    __publicField(this, "id");
    __publicField(this, "json");
    __privateAdd(this, _element, void 0);
    __privateAdd(this, _enabled, void 0);
    __publicField(this, "rev", 0);
    __publicField(this, "valid", "unknown");
    __publicField(this, "errors", []);
    autoBind(this);
    this.description = themeData.description;
    this.id = id;
    this.json = themeData.json;
    __privateSet(this, _enabled, themeData.enabled);
    if (shouldValidate)
      __privateMethod(this, _validate, validate_fn).call(this);
    if (themeData.enabled)
      this.enable(false);
  }
  get enabled() {
    return __privateGet(this, _enabled);
  }
  set enabled(value) {
    value ? this.enable() : this.disable();
    __privateSet(this, _enabled, value);
  }
  enable(save = true) {
    if (__privateGet(this, _element)) {
      Logger.log(`"${this.id}" is already enabled.`);
      return;
    }
    __privateSet(this, _enabled, true);
    const link = __privateSet(this, _element, document.createElement("link"));
    link.rel = "stylesheet";
    link.id = this.id;
    link.href = _Theme.link + this.id;
    link.setAttribute("data-popcorn", "theme");
    comments.end.before(link);
    Logger.log(`"${this.id}" enabled.`);
    rerenderTheme(this.id);
    if (save)
      PopcornNative.saveThemeState(this.id, true);
  }
  disable(save = true) {
    if (!__privateGet(this, _element)) {
      Logger.warn(`"${this.id}" is not enabled.`);
      return;
    }
    __privateSet(this, _enabled, false);
    __privateGet(this, _element).remove();
    __privateSet(this, _element, null);
    Logger.log(`"${this.id}" disabled.`);
    rerenderTheme(this.id);
    if (save)
      PopcornNative.saveThemeState(this.id, false);
  }
  toggle(save = true) {
    if (this.enabled)
      this.disable(save);
    else
      this.enable(save);
  }
  async update() {
    __privateGet(this, _element).href = _Theme.link + this.id + `?${++this.rev}`;
    const promise = await fetch(_Theme.link + this.id, { cache: "no-store" });
    const text2 = await promise.text();
    if (shouldValidate)
      __privateMethod(this, _validate, validate_fn).call(this, text2);
  }
};
var Theme = _Theme;
_element = new WeakMap();
_enabled = new WeakMap();
_validate = new WeakSet();
validate_fn = async function(content) {
  content ??= await (await fetch(_Theme.link + this.id, { cache: "no-store" })).text();
  PopcornNative.validateCSS(content).then((result) => {
    if (PopcornNative.config.verbose)
      Logger.debug(`Validated "${this.id}".`, result);
    this.valid = result.valid;
    this.errors = result.errors;
    rerenderTheme(this.id);
  }).catch((e) => {
    Logger.error(`Failed to validate "${this.id}".`, e);
  });
};
__publicField(Theme, "link", PopcornNative.isSplash ? "popcorn://splash-theme/" : "popcorn://theme/");
var Themes2 = class {
  start() {
    this.watchThemes();
  }
  watchThemes() {
    PopcornNative.onThemeChange(({ id }) => {
      window.Popcorn.themes[id].update();
    });
  }
  stop() {
    const elements = document.head.querySelectorAll('link[data-popcorn="theme"]');
    for (const el of elements) {
      el.remove();
    }
  }
};
function populateThemes(simpleThemes) {
  const themes = {};
  for (const id in simpleThemes) {
    themes[id] = new Theme(id, simpleThemes[id]);
  }
  return themes;
}

// src/renderer/ui/tabs/QuickCss.svelte
var import_ts_debounce2 = __toESM(require_src());

// src/renderer/ui/components/QuickCss/MonacoEditor.svelte
var import_ts_debounce = __toESM(require_src());
var import_loader = __toESM(require_cjs());
var { window: window_1 } = globals;
var file3 = "src\\renderer\\ui\\components\\QuickCss\\MonacoEditor.svelte";
function create_if_block2(ctx) {
  let p;
  const block = {
    c: function create() {
      p = element("p");
      p.textContent = "Loading monaco editor...";
      attr_dev(p, "class", "loading-overlay");
      add_location(p, file3, 85, 4, 2457);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p, anchor);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(p);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block2.name,
    type: "if",
    source: "(85:2) {#if !loaded}",
    ctx
  });
  return block;
}
function create_fragment3(ctx) {
  let div1;
  let t;
  let div0;
  let mounted;
  let dispose;
  let if_block = !/*loaded*/
  ctx[1] && create_if_block2(ctx);
  const block = {
    c: function create() {
      div1 = element("div");
      if (if_block)
        if_block.c();
      t = space();
      div0 = element("div");
      attr_dev(div0, "class", "monaco-editor PopcornUI-1tm8p33");
      add_location(div0, file3, 87, 2, 2523);
      attr_dev(div1, "class", "monaco-wrapper");
      add_location(div1, file3, 83, 0, 2408);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      if (if_block)
        if_block.m(div1, null);
      append_dev(div1, t);
      append_dev(div1, div0);
      ctx[9](div0);
      if (!mounted) {
        dispose = listen_dev(window_1, "resize", (0, import_ts_debounce.debounce)(
          /*recalculateSize*/
          ctx[0],
          50
        ), false, false, false, false);
        mounted = true;
      }
    },
    p: function update2(ctx2, [dirty]) {
      if (!/*loaded*/
      ctx2[1]) {
        if (if_block) {
        } else {
          if_block = create_if_block2(ctx2);
          if_block.c();
          if_block.m(div1, t);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div1);
      if (if_block)
        if_block.d();
      ctx[9](null);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment3.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance3($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("MonacoEditor", slots, []);
  let editorElement;
  let { editor = null } = $$props;
  let { content } = $$props;
  let { actions = [] } = $$props;
  let { commands = [] } = $$props;
  let { options = {} } = $$props;
  const dispatch = createEventDispatcher();
  let loaded = false;
  onMount(async () => {
    const monaco = await import_loader.default.init();
    monaco.editor.onDidCreateEditor(() => {
      $$invalidate(1, loaded = true);
      recalculateSize();
      dispatch("ready");
    });
    $$invalidate(3, editor = monaco.editor.create(editorElement, {
      language: "css",
      theme: "vs-dark",
      ...options,
      // Overrides the options no matter what
      value: content
    }));
    const actualCommands = commands.map((command) => {
      return {
        ...command,
        keybinding: command.keybinding(monaco.KeyCode, monaco.KeyMod)
      };
    });
    for (const command of actualCommands) {
      editor.addCommand(command.keybinding, command.handler, command.context ?? void 0);
    }
    for (const action of actions) {
      const { id, label, handler } = action;
      editor.addAction({
        id: "custom." + id,
        label,
        keybindings: [],
        run: handler
      });
    }
    editor.onDidChangeModelContent(() => {
      const newContent = editor.getValue();
      if (newContent === content)
        return;
      $$invalidate(8, ignoreNext = true);
      $$invalidate(4, content = newContent);
      dispatch("change", content);
    });
    return () => {
      editor.dispose();
      $$invalidate(1, loaded = false);
    };
  });
  let ignoreNext = false;
  function recalculateSize() {
    if (!loaded)
      return;
    window.requestAnimationFrame(() => {
      editor.layout({ width: 0, height: 0 });
      const parentRect = editorElement.parentElement.getBoundingClientRect();
      editor.layout({
        width: parentRect.width,
        height: parentRect.height
      });
    });
  }
  $$self.$$.on_mount.push(function() {
    if (content === void 0 && !("content" in $$props || $$self.$$.bound[$$self.$$.props["content"]])) {
      console.warn("<MonacoEditor> was created without expected prop 'content'");
    }
  });
  const writable_props = ["editor", "content", "actions", "commands", "options"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<MonacoEditor> was created with unknown prop '${key}'`);
  });
  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      editorElement = $$value;
      $$invalidate(2, editorElement);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("editor" in $$props2)
      $$invalidate(3, editor = $$props2.editor);
    if ("content" in $$props2)
      $$invalidate(4, content = $$props2.content);
    if ("actions" in $$props2)
      $$invalidate(5, actions = $$props2.actions);
    if ("commands" in $$props2)
      $$invalidate(6, commands = $$props2.commands);
    if ("options" in $$props2)
      $$invalidate(7, options = $$props2.options);
  };
  $$self.$capture_state = () => ({
    onMount,
    createEventDispatcher,
    debounce: import_ts_debounce.debounce,
    loader: import_loader.default,
    editorElement,
    editor,
    content,
    actions,
    commands,
    options,
    dispatch,
    loaded,
    ignoreNext,
    recalculateSize
  });
  $$self.$inject_state = ($$props2) => {
    if ("editorElement" in $$props2)
      $$invalidate(2, editorElement = $$props2.editorElement);
    if ("editor" in $$props2)
      $$invalidate(3, editor = $$props2.editor);
    if ("content" in $$props2)
      $$invalidate(4, content = $$props2.content);
    if ("actions" in $$props2)
      $$invalidate(5, actions = $$props2.actions);
    if ("commands" in $$props2)
      $$invalidate(6, commands = $$props2.commands);
    if ("options" in $$props2)
      $$invalidate(7, options = $$props2.options);
    if ("loaded" in $$props2)
      $$invalidate(1, loaded = $$props2.loaded);
    if ("ignoreNext" in $$props2)
      $$invalidate(8, ignoreNext = $$props2.ignoreNext);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*content, loaded, ignoreNext, editor*/
    282) {
      $:
        if (typeof content === "string" && loaded) {
          if (!ignoreNext)
            editor.getModel().setValue(content);
          $$invalidate(8, ignoreNext = false);
        }
    }
  };
  return [
    recalculateSize,
    loaded,
    editorElement,
    editor,
    content,
    actions,
    commands,
    options,
    ignoreNext,
    div0_binding
  ];
}
var MonacoEditor = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance3, create_fragment3, safe_not_equal, {
      editor: 3,
      content: 4,
      actions: 5,
      commands: 6,
      options: 7,
      recalculateSize: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "MonacoEditor",
      options,
      id: create_fragment3.name
    });
  }
  get editor() {
    throw new Error("<MonacoEditor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set editor(value) {
    throw new Error("<MonacoEditor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get content() {
    throw new Error("<MonacoEditor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set content(value) {
    throw new Error("<MonacoEditor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get actions() {
    throw new Error("<MonacoEditor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set actions(value) {
    throw new Error("<MonacoEditor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get commands() {
    throw new Error("<MonacoEditor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set commands(value) {
    throw new Error("<MonacoEditor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get options() {
    throw new Error("<MonacoEditor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set options(value) {
    throw new Error("<MonacoEditor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get recalculateSize() {
    return this.$$.ctx[0];
  }
  set recalculateSize(value) {
    throw new Error("<MonacoEditor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var MonacoEditor_default = MonacoEditor;

// node_modules/.pnpm/svelte-icons-pack@2.1.0/node_modules/svelte-icons-pack/vsc/VscNewFile.js
var VscNewFile_default = {
  a: {
    viewBox: "0 0 16 16",
    fill: "currentColor"
  },
  c: '<path fill-rule="evenodd" clip-rule="evenodd" d="M4 7H3V4H0V3h3V0h1v3h3v1H4v3zm6.5-5.9l3.4 3.5.1.4v8.5l-.5.5h-10l-.5-.5V8h1v5h9V6H9V2H5V1h5.2l.3.1zM10 2v3h2.9L10 2z"></path>'
};

// node_modules/.pnpm/svelte-icons-pack@2.1.0/node_modules/svelte-icons-pack/vsc/VscNewFolder.js
var VscNewFolder_default = {
  a: {
    viewBox: "0 0 16 16",
    fill: "currentColor"
  },
  c: '<path fill-rule="evenodd" clip-rule="evenodd" d="M7 3H4V0H3v3H0v1h3v3h1V4h3V3zM5.5 7H5V6h.3l.8-.9.4-.1H14V4H8V3h6.5l.5.5v10l-.5.5h-13l-.5-.5V5h1v8h12V6H6.7l-.8.9-.4.1z"></path>'
};

// node_modules/.pnpm/svelte-icons-pack@2.1.0/node_modules/svelte-icons-pack/vsc/VscRemove.js
var VscRemove_default = {
  a: {
    viewBox: "0 0 16 16",
    fill: "currentColor"
  },
  c: '<path d="M15 8H1V7h14v1z"></path>'
};

// node_modules/.pnpm/svelte-icons-pack@2.1.0/node_modules/svelte-icons-pack/ai/AiFillFolderOpen.js
var AiFillFolderOpen_default = {
  a: {
    viewBox: "0 0 1024 1024"
  },
  c: '<path d="M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zm-180 0H238c-13 0-24.8 7.9-29.7 20L136 643.2V256h188.5l119.6 114.4H748V444z"></path>'
};

// node_modules/.pnpm/svelte-icons-pack@2.1.0/node_modules/svelte-icons-pack/ai/AiFillFolder.js
var AiFillFolder_default = {
  a: {
    viewBox: "0 0 1024 1024"
  },
  c: '<path d="M880 298.4H521L403.7 186.2a8.15 8.15 0 0 0-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32z"></path>'
};

// node_modules/.pnpm/svelte-icons-pack@2.1.0/node_modules/svelte-icons-pack/fa/FaBrandsCss3.js
var FaBrandsCss3_default = {
  a: {
    viewBox: "0 0 512 512"
  },
  c: '<path d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"></path>'
};

// node_modules/.pnpm/svelte-icons-pack@2.1.0/node_modules/svelte-icons-pack/vsc/VscCircleFill.js
var VscCircleFill_default = {
  a: {
    viewBox: "0 0 16 16",
    fill: "currentColor"
  },
  c: '<path d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031 3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062 0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765 4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062 3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4z"></path>'
};

// src/renderer/ui/components/QuickCss/File.svelte
var file_1 = "src\\renderer\\ui\\components\\QuickCss\\File.svelte";
function create_else_block(ctx) {
  let span;
  let t_value = (
    /*file*/
    ctx[1].name + ""
  );
  let t;
  const block = {
    c: function create() {
      span = element("span");
      t = text(t_value);
      attr_dev(span, "class", "item-name");
      add_location(span, file_1, 58, 4, 1564);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t);
    },
    p: function update2(ctx2, dirty) {
      if (dirty & /*file*/
      2 && t_value !== (t_value = /*file*/
      ctx2[1].name + ""))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block.name,
    type: "else",
    source: "(58:2) {:else}",
    ctx
  });
  return block;
}
function create_if_block_1(ctx) {
  let input_1;
  let input_1_value_value;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      input_1 = element("input");
      attr_dev(input_1, "class", "rename-input");
      attr_dev(input_1, "autocorrect", "off");
      attr_dev(input_1, "autocapitalize", "off");
      attr_dev(input_1, "spellcheck", "false");
      attr_dev(input_1, "type", "text");
      input_1.value = input_1_value_value = /*file*/
      ctx[1].name;
      add_location(input_1, file_1, 46, 4, 1290);
    },
    m: function mount(target, anchor) {
      insert_dev(target, input_1, anchor);
      ctx[8](input_1);
      if (!mounted) {
        dispose = [
          listen_dev(
            input_1,
            "keydown",
            /*handleKeyPress*/
            ctx[7],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            input_1,
            "focusout",
            function() {
              if (is_function(
                /*rename*/
                ctx[0] && /*toggleRename*/
                ctx[6]
              ))
                /*rename*/
                (ctx[0] && /*toggleRename*/
                ctx[6]).apply(this, arguments);
            },
            false,
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update2(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & /*file*/
      2 && input_1_value_value !== (input_1_value_value = /*file*/
      ctx[1].name) && input_1.value !== input_1_value_value) {
        prop_dev(input_1, "value", input_1_value_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(input_1);
      ctx[8](null);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(46:2) {#if rename}",
    ctx
  });
  return block;
}
function create_if_block3(ctx) {
  let icon;
  let current;
  icon = new Icon_default({
    props: {
      color: "currentColor",
      src: VscCircleFill_default
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(icon.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current)
        return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block3.name,
    type: "if",
    source: "(61:2) {#if $fileStatus?.[file.location]?.unsaved}",
    ctx
  });
  return block;
}
function create_fragment4(ctx) {
  let button;
  let icon;
  let t0;
  let t1;
  let current;
  let mounted;
  let dispose;
  icon = new Icon_default({
    props: { color: "currentColor", src: FaBrandsCss3_default },
    $$inline: true
  });
  function select_block_type(ctx2, dirty) {
    if (
      /*rename*/
      ctx2[0]
    )
      return create_if_block_1;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx, -1);
  let if_block0 = current_block_type(ctx);
  let if_block1 = (
    /*$fileStatus*/
    ctx[4]?.[
      /*file*/
      ctx[1].location
    ]?.unsaved && create_if_block3(ctx)
  );
  const block = {
    c: function create() {
      button = element("button");
      create_component(icon.$$.fragment);
      t0 = space();
      if_block0.c();
      t1 = space();
      if (if_block1)
        if_block1.c();
      attr_dev(button, "class", "item file");
      set_style(
        button,
        "--depth",
        /*depth*/
        ctx[2]
      );
      add_location(button, file_1, 36, 0, 1014);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, button, anchor);
      mount_component(icon, button, null);
      append_dev(button, t0);
      if_block0.m(button, null);
      append_dev(button, t1);
      if (if_block1)
        if_block1.m(button, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen_dev(
            button,
            "click",
            /*handleSubmit*/
            ctx[5],
            false,
            false,
            false,
            false
          ),
          listen_dev(button, "submit", stop_propagation(
            /*handleSubmit*/
            ctx[5]
          ), false, false, true, false),
          listen_dev(
            button,
            "dblclick",
            /*toggleRename*/
            ctx[6],
            false,
            false,
            false,
            false
          ),
          listen_dev(button, "keydown", self(stop_propagation(
            /*handleKeyPress*/
            ctx[7]
          )), false, false, true, false)
        ];
        mounted = true;
      }
    },
    p: function update2(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2, dirty)) && if_block0) {
        if_block0.p(ctx2, dirty);
      } else {
        if_block0.d(1);
        if_block0 = current_block_type(ctx2);
        if (if_block0) {
          if_block0.c();
          if_block0.m(button, t1);
        }
      }
      if (
        /*$fileStatus*/
        ctx2[4]?.[
          /*file*/
          ctx2[1].location
        ]?.unsaved
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*$fileStatus, file*/
          18) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block3(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(button, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (!current || dirty & /*depth*/
      4) {
        set_style(
          button,
          "--depth",
          /*depth*/
          ctx2[2]
        );
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(icon.$$.fragment, local);
      transition_in(if_block1);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      transition_out(if_block1);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(button);
      destroy_component(icon);
      if_block0.d();
      if (if_block1)
        if_block1.d();
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment4.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance4($$self, $$props, $$invalidate) {
  let $fileStatus;
  validate_store(fileStatus, "fileStatus");
  component_subscribe($$self, fileStatus, ($$value) => $$invalidate(4, $fileStatus = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("File", slots, []);
  let { file: file9 } = $$props;
  let { rename = false } = $$props;
  let { depth = 0 } = $$props;
  function handleSubmit() {
    selectedFile.set(file9);
  }
  let input;
  function toggleRename() {
    if (rename && input?.value !== file9.name)
      PopcornNative.renameQuickCssNode(file9.location, input.value);
    $$invalidate(0, rename = !rename);
  }
  function handleKeyPress(event) {
    switch (event.key) {
      case "F2":
        toggleRename();
        break;
      case "Enter":
        if (rename)
          toggleRename();
        break;
    }
  }
  $$self.$$.on_mount.push(function() {
    if (file9 === void 0 && !("file" in $$props || $$self.$$.bound[$$self.$$.props["file"]])) {
      console.warn("<File> was created without expected prop 'file'");
    }
  });
  const writable_props = ["file", "rename", "depth"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<File> was created with unknown prop '${key}'`);
  });
  function input_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      input = $$value;
      $$invalidate(3, input);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("file" in $$props2)
      $$invalidate(1, file9 = $$props2.file);
    if ("rename" in $$props2)
      $$invalidate(0, rename = $$props2.rename);
    if ("depth" in $$props2)
      $$invalidate(2, depth = $$props2.depth);
  };
  $$self.$capture_state = () => ({
    fileStatus,
    selectedFile,
    Icon: Icon_default,
    FaBrandsCss3: FaBrandsCss3_default,
    VscCircleFill: VscCircleFill_default,
    file: file9,
    rename,
    depth,
    handleSubmit,
    input,
    toggleRename,
    handleKeyPress,
    $fileStatus
  });
  $$self.$inject_state = ($$props2) => {
    if ("file" in $$props2)
      $$invalidate(1, file9 = $$props2.file);
    if ("rename" in $$props2)
      $$invalidate(0, rename = $$props2.rename);
    if ("depth" in $$props2)
      $$invalidate(2, depth = $$props2.depth);
    if ("input" in $$props2)
      $$invalidate(3, input = $$props2.input);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*input*/
    8) {
      $:
        if (input) {
          input.focus();
          input.setSelectionRange(0, input.value.length - 4);
        }
    }
  };
  return [
    rename,
    file9,
    depth,
    input,
    $fileStatus,
    handleSubmit,
    toggleRename,
    handleKeyPress,
    input_1_binding
  ];
}
var File = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance4, create_fragment4, safe_not_equal, { file: 1, rename: 0, depth: 2 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "File",
      options,
      id: create_fragment4.name
    });
  }
  get file() {
    throw new Error("<File>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set file(value) {
    throw new Error("<File>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get rename() {
    throw new Error("<File>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set rename(value) {
    throw new Error("<File>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get depth() {
    throw new Error("<File>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set depth(value) {
    throw new Error("<File>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var File_default = File;

// src/renderer/ui/components/QuickCss/Folder.svelte
var file4 = "src\\renderer\\ui\\components\\QuickCss\\Folder.svelte";
function get_each_context2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[9] = list[i];
  return child_ctx;
}
function create_else_block_2(ctx) {
  let icon;
  let current;
  icon = new Icon_default({
    props: { color: "currentColor", src: AiFillFolder_default },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(icon.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current)
        return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block_2.name,
    type: "else",
    source: "(48:2) {:else}",
    ctx
  });
  return block;
}
function create_if_block_3(ctx) {
  let icon;
  let current;
  icon = new Icon_default({
    props: {
      color: "currentColor",
      src: AiFillFolderOpen_default
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(icon.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current)
        return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_3.name,
    type: "if",
    source: "(46:2) {#if opened}",
    ctx
  });
  return block;
}
function create_else_block_1(ctx) {
  let span;
  let t_value = (
    /*folder*/
    ctx[2].name + ""
  );
  let t;
  const block = {
    c: function create() {
      span = element("span");
      t = text(t_value);
      attr_dev(span, "class", "item-name");
      add_location(span, file4, 63, 4, 1648);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t);
    },
    p: function update2(ctx2, dirty) {
      if (dirty & /*folder*/
      4 && t_value !== (t_value = /*folder*/
      ctx2[2].name + ""))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block_1.name,
    type: "else",
    source: "(63:2) {:else}",
    ctx
  });
  return block;
}
function create_if_block_2(ctx) {
  let input_1;
  let input_1_value_value;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      input_1 = element("input");
      attr_dev(input_1, "class", "rename-input");
      attr_dev(input_1, "autocorrect", "off");
      attr_dev(input_1, "autocapitalize", "off");
      attr_dev(input_1, "spellcheck", "false");
      attr_dev(input_1, "type", "text");
      input_1.value = input_1_value_value = /*folder*/
      ctx[2].name;
      add_location(input_1, file4, 51, 4, 1372);
    },
    m: function mount(target, anchor) {
      insert_dev(target, input_1, anchor);
      ctx[8](input_1);
      if (!mounted) {
        dispose = [
          listen_dev(
            input_1,
            "keydown",
            /*handleKeyPress*/
            ctx[7],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            input_1,
            "focusout",
            function() {
              if (is_function(
                /*rename*/
                ctx[0] && /*toggleRename*/
                ctx[6]
              ))
                /*rename*/
                (ctx[0] && /*toggleRename*/
                ctx[6]).apply(this, arguments);
            },
            false,
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update2(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & /*folder*/
      4 && input_1_value_value !== (input_1_value_value = /*folder*/
      ctx[2].name) && input_1.value !== input_1_value_value) {
        prop_dev(input_1, "value", input_1_value_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(input_1);
      ctx[8](null);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2.name,
    type: "if",
    source: "(51:2) {#if rename}",
    ctx
  });
  return block;
}
function create_if_block4(ctx) {
  let each_1_anchor;
  let current;
  let each_value = (
    /*folder*/
    ctx[2].files
  );
  validate_each_argument(each_value);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block2(get_each_context2(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  const block = {
    c: function create() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(target, anchor);
        }
      }
      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update2(ctx2, dirty) {
      if (dirty & /*folder, depth*/
      12) {
        each_value = /*folder*/
        ctx2[2].files;
        validate_each_argument(each_value);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context2(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block2(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i: function intro(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d: function destroy(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block4.name,
    type: "if",
    source: "(67:0) {#if opened}",
    ctx
  });
  return block;
}
function create_else_block2(ctx) {
  let file_12;
  let current;
  file_12 = new File_default({
    props: {
      file: (
        /*item*/
        ctx[9]
      ),
      depth: (
        /*depth*/
        ctx[3] + 1
      )
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(file_12.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(file_12, target, anchor);
      current = true;
    },
    p: function update2(ctx2, dirty) {
      const file_1_changes = {};
      if (dirty & /*folder*/
      4)
        file_1_changes.file = /*item*/
        ctx2[9];
      if (dirty & /*depth*/
      8)
        file_1_changes.depth = /*depth*/
        ctx2[3] + 1;
      file_12.$set(file_1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(file_12.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(file_12.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(file_12, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block2.name,
    type: "else",
    source: "(71:4) {:else}",
    ctx
  });
  return block;
}
function create_if_block_12(ctx) {
  let folder_1;
  let current;
  folder_1 = new Folder({
    props: {
      folder: (
        /*item*/
        ctx[9]
      ),
      depth: (
        /*depth*/
        ctx[3] + 1
      )
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(folder_1.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(folder_1, target, anchor);
      current = true;
    },
    p: function update2(ctx2, dirty) {
      const folder_1_changes = {};
      if (dirty & /*folder*/
      4)
        folder_1_changes.folder = /*item*/
        ctx2[9];
      if (dirty & /*depth*/
      8)
        folder_1_changes.depth = /*depth*/
        ctx2[3] + 1;
      folder_1.$set(folder_1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(folder_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(folder_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(folder_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_12.name,
    type: "if",
    source: "(69:4) {#if 'files' in item}",
    ctx
  });
  return block;
}
function create_each_block2(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block_12, create_else_block2];
  const if_blocks = [];
  function select_block_type_2(ctx2, dirty) {
    if ("files" in /*item*/
    ctx2[9])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type_2(ctx, -1);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  const block = {
    c: function create() {
      if_block.c();
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update2(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_2(ctx2, dirty);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block2.name,
    type: "each",
    source: "(68:2) {#each folder.files as item}",
    ctx
  });
  return block;
}
function create_fragment5(ctx) {
  let button;
  let current_block_type_index;
  let if_block0;
  let t0;
  let t1;
  let if_block2_anchor;
  let current;
  let mounted;
  let dispose;
  const if_block_creators = [create_if_block_3, create_else_block_2];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*opened*/
      ctx2[1]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx, -1);
  if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  function select_block_type_1(ctx2, dirty) {
    if (
      /*rename*/
      ctx2[0]
    )
      return create_if_block_2;
    return create_else_block_1;
  }
  let current_block_type = select_block_type_1(ctx, -1);
  let if_block1 = current_block_type(ctx);
  let if_block2 = (
    /*opened*/
    ctx[1] && create_if_block4(ctx)
  );
  const block = {
    c: function create() {
      button = element("button");
      if_block0.c();
      t0 = space();
      if_block1.c();
      t1 = space();
      if (if_block2)
        if_block2.c();
      if_block2_anchor = empty();
      attr_dev(button, "class", "item folder");
      set_style(
        button,
        "--depth",
        /*depth*/
        ctx[3]
      );
      attr_dev(
        button,
        "data-opened",
        /*opened*/
        ctx[1]
      );
      add_location(button, file4, 36, 0, 979);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, button, anchor);
      if_blocks[current_block_type_index].m(button, null);
      append_dev(button, t0);
      if_block1.m(button, null);
      insert_dev(target, t1, anchor);
      if (if_block2)
        if_block2.m(target, anchor);
      insert_dev(target, if_block2_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = [
          listen_dev(
            button,
            "click",
            /*handleSubmit*/
            ctx[5],
            false,
            false,
            false,
            false
          ),
          listen_dev(button, "submit", stop_propagation(
            /*handleSubmit*/
            ctx[5]
          ), false, false, true, false),
          listen_dev(
            button,
            "dblclick",
            /*toggleRename*/
            ctx[6],
            false,
            false,
            false,
            false
          ),
          listen_dev(button, "keydown", self(stop_propagation(
            /*handleKeyPress*/
            ctx[7]
          )), false, false, true, false)
        ];
        mounted = true;
      }
    },
    p: function update2(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2, dirty);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block0 = if_blocks[current_block_type_index];
        if (!if_block0) {
          if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block0.c();
        } else {
          if_block0.p(ctx2, dirty);
        }
        transition_in(if_block0, 1);
        if_block0.m(button, t0);
      }
      if (current_block_type === (current_block_type = select_block_type_1(ctx2, dirty)) && if_block1) {
        if_block1.p(ctx2, dirty);
      } else {
        if_block1.d(1);
        if_block1 = current_block_type(ctx2);
        if (if_block1) {
          if_block1.c();
          if_block1.m(button, null);
        }
      }
      if (!current || dirty & /*depth*/
      8) {
        set_style(
          button,
          "--depth",
          /*depth*/
          ctx2[3]
        );
      }
      if (!current || dirty & /*opened*/
      2) {
        attr_dev(
          button,
          "data-opened",
          /*opened*/
          ctx2[1]
        );
      }
      if (
        /*opened*/
        ctx2[1]
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
          if (dirty & /*opened*/
          2) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block4(ctx2);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block2);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block0);
      transition_out(if_block2);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(button);
      if_blocks[current_block_type_index].d();
      if_block1.d();
      if (detaching)
        detach_dev(t1);
      if (if_block2)
        if_block2.d(detaching);
      if (detaching)
        detach_dev(if_block2_anchor);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment5.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance5($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Folder", slots, []);
  let { folder } = $$props;
  let { rename = false } = $$props;
  let { opened = true } = $$props;
  let { depth = 0 } = $$props;
  function handleSubmit() {
    $$invalidate(1, opened = !opened);
    selectedFolder.set(folder);
  }
  let input;
  function toggleRename() {
    if (rename && input?.value !== folder.name)
      PopcornNative.renameQuickCssNode(folder.location, input.value);
    $$invalidate(0, rename = !rename);
  }
  function handleKeyPress(event) {
    switch (event.key) {
      case "F2":
        toggleRename();
        break;
      case "Enter":
        if (rename)
          toggleRename();
        break;
    }
  }
  $$self.$$.on_mount.push(function() {
    if (folder === void 0 && !("folder" in $$props || $$self.$$.bound[$$self.$$.props["folder"]])) {
      console.warn("<Folder> was created without expected prop 'folder'");
    }
  });
  const writable_props = ["folder", "rename", "opened", "depth"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Folder> was created with unknown prop '${key}'`);
  });
  function input_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      input = $$value;
      $$invalidate(4, input);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("folder" in $$props2)
      $$invalidate(2, folder = $$props2.folder);
    if ("rename" in $$props2)
      $$invalidate(0, rename = $$props2.rename);
    if ("opened" in $$props2)
      $$invalidate(1, opened = $$props2.opened);
    if ("depth" in $$props2)
      $$invalidate(3, depth = $$props2.depth);
  };
  $$self.$capture_state = () => ({
    selectedFolder,
    Icon: Icon_default,
    AiFillFolderOpen: AiFillFolderOpen_default,
    AiFillFolder: AiFillFolder_default,
    File: File_default,
    folder,
    rename,
    opened,
    depth,
    handleSubmit,
    input,
    toggleRename,
    handleKeyPress
  });
  $$self.$inject_state = ($$props2) => {
    if ("folder" in $$props2)
      $$invalidate(2, folder = $$props2.folder);
    if ("rename" in $$props2)
      $$invalidate(0, rename = $$props2.rename);
    if ("opened" in $$props2)
      $$invalidate(1, opened = $$props2.opened);
    if ("depth" in $$props2)
      $$invalidate(3, depth = $$props2.depth);
    if ("input" in $$props2)
      $$invalidate(4, input = $$props2.input);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*input*/
    16) {
      $:
        if (input) {
          input.focus();
          input.setSelectionRange(0, input.value.length);
        }
    }
  };
  return [
    rename,
    opened,
    folder,
    depth,
    input,
    handleSubmit,
    toggleRename,
    handleKeyPress,
    input_1_binding
  ];
}
var Folder = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance5, create_fragment5, safe_not_equal, {
      folder: 2,
      rename: 0,
      opened: 1,
      depth: 3
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Folder",
      options,
      id: create_fragment5.name
    });
  }
  get folder() {
    throw new Error("<Folder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set folder(value) {
    throw new Error("<Folder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get rename() {
    throw new Error("<Folder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set rename(value) {
    throw new Error("<Folder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get opened() {
    throw new Error("<Folder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set opened(value) {
    throw new Error("<Folder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get depth() {
    throw new Error("<Folder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set depth(value) {
    throw new Error("<Folder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var Folder_default = Folder;

// src/renderer/ui/components/QuickCss/Sidebar.svelte
var file5 = "src\\renderer\\ui\\components\\QuickCss\\Sidebar.svelte";
function create_fragment6(ctx) {
  let div1;
  let div0;
  let button0;
  let icon0;
  let t0;
  let span;
  let t1_value = (
    /*$latestSelection*/
    ctx[1].name + ""
  );
  let t1;
  let t2;
  let button1;
  let icon1;
  let t3;
  let button2;
  let icon2;
  let t4;
  let folder;
  let current;
  let mounted;
  let dispose;
  icon0 = new Icon_default({
    props: { color: "currentColor", src: VscRemove_default },
    $$inline: true
  });
  icon1 = new Icon_default({
    props: { color: "currentColor", src: VscNewFile_default },
    $$inline: true
  });
  icon2 = new Icon_default({
    props: { color: "currentColor", src: VscNewFolder_default },
    $$inline: true
  });
  folder = new Folder_default({
    props: { folder: window.Popcorn.quickCss },
    $$inline: true
  });
  const block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");
      button0 = element("button");
      create_component(icon0.$$.fragment);
      t0 = space();
      span = element("span");
      t1 = text(t1_value);
      t2 = space();
      button1 = element("button");
      create_component(icon1.$$.fragment);
      t3 = space();
      button2 = element("button");
      create_component(icon2.$$.fragment);
      t4 = space();
      create_component(folder.$$.fragment);
      attr_dev(button0, "class", "action PopcornUI-1je845r");
      attr_dev(button0, "data-action", "delete");
      add_location(button0, file5, 36, 4, 1278);
      attr_dev(span, "class", "selected-file");
      add_location(span, file5, 44, 4, 1471);
      attr_dev(button1, "class", "action PopcornUI-1je845r");
      attr_dev(button1, "data-action", "new-file");
      add_location(button1, file5, 46, 4, 1535);
      attr_dev(button2, "class", "action PopcornUI-1je845r");
      attr_dev(button2, "data-action", "new-folder");
      add_location(button2, file5, 54, 4, 1733);
      attr_dev(div0, "class", "action-bar PopcornUI-1je845r");
      add_location(div0, file5, 35, 2, 1249);
      attr_dev(div1, "class", "sidebar PopcornUI-1je845r");
      set_style(div1, "width", "22ch");
      add_location(div1, file5, 34, 0, 1181);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, div0);
      append_dev(div0, button0);
      mount_component(icon0, button0, null);
      append_dev(div0, t0);
      append_dev(div0, span);
      append_dev(span, t1);
      append_dev(div0, t2);
      append_dev(div0, button1);
      mount_component(icon1, button1, null);
      append_dev(div0, t3);
      append_dev(div0, button2);
      mount_component(icon2, button2, null);
      append_dev(div1, t4);
      mount_component(folder, div1, null);
      ctx[5](div1);
      current = true;
      if (!mounted) {
        dispose = [
          listen_dev(
            button0,
            "click",
            /*handleDelete*/
            ctx[2],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            button0,
            "submit",
            /*handleDelete*/
            ctx[2],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            button1,
            "click",
            /*handleNewFile*/
            ctx[3],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            button1,
            "submit",
            /*handleNewFile*/
            ctx[3],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            button2,
            "click",
            /*handleNewFolder*/
            ctx[4],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            button2,
            "submit",
            /*handleNewFolder*/
            ctx[4],
            false,
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update2(ctx2, [dirty]) {
      if ((!current || dirty & /*$latestSelection*/
      2) && t1_value !== (t1_value = /*$latestSelection*/
      ctx2[1].name + ""))
        set_data_dev(t1, t1_value);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(icon0.$$.fragment, local);
      transition_in(icon1.$$.fragment, local);
      transition_in(icon2.$$.fragment, local);
      transition_in(folder.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon0.$$.fragment, local);
      transition_out(icon1.$$.fragment, local);
      transition_out(icon2.$$.fragment, local);
      transition_out(folder.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div1);
      destroy_component(icon0);
      destroy_component(icon1);
      destroy_component(icon2);
      destroy_component(folder);
      ctx[5](null);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment6.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
var fileStatus = writable({});
function instance6($$self, $$props, $$invalidate) {
  let $selectedFolder;
  let $latestSelection;
  validate_store(selectedFolder, "selectedFolder");
  component_subscribe($$self, selectedFolder, ($$value) => $$invalidate(6, $selectedFolder = $$value));
  validate_store(latestSelection, "latestSelection");
  component_subscribe($$self, latestSelection, ($$value) => $$invalidate(1, $latestSelection = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Sidebar", slots, []);
  let elementDiv;
  const dispatch = createEventDispatcher();
  onMount(() => {
    const resizeObserver = new ResizeObserver((mutation) => {
      dispatch("resize", mutation[0]);
    });
    resizeObserver.observe(elementDiv);
    return () => {
      resizeObserver.disconnect();
    };
  });
  function handleDelete() {
    PopcornNative.deleteQuickCssNode($latestSelection.location);
  }
  function handleNewFile() {
    PopcornNative.createQuickCssNode($selectedFolder.location, "file");
  }
  function handleNewFolder() {
    PopcornNative.createQuickCssNode($selectedFolder.location, "folder");
  }
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Sidebar> was created with unknown prop '${key}'`);
  });
  function div1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      elementDiv = $$value;
      $$invalidate(0, elementDiv);
    });
  }
  $$self.$capture_state = () => ({
    writable,
    fileStatus,
    onMount,
    createEventDispatcher,
    Icon: Icon_default,
    VscNewFile: VscNewFile_default,
    VscNewFolder: VscNewFolder_default,
    VscRemove: VscRemove_default,
    latestSelection,
    selectedFolder,
    Folder: Folder_default,
    elementDiv,
    dispatch,
    handleDelete,
    handleNewFile,
    handleNewFolder,
    $selectedFolder,
    $latestSelection
  });
  $$self.$inject_state = ($$props2) => {
    if ("elementDiv" in $$props2)
      $$invalidate(0, elementDiv = $$props2.elementDiv);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    elementDiv,
    $latestSelection,
    handleDelete,
    handleNewFile,
    handleNewFolder,
    div1_binding
  ];
}
var Sidebar = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance6, create_fragment6, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Sidebar",
      options,
      id: create_fragment6.name
    });
  }
};
var Sidebar_default = Sidebar;

// src/renderer/ui/tabs/QuickCss.svelte
var file6 = "src\\renderer\\ui\\tabs\\QuickCss.svelte";
function create_key_block2(ctx) {
  let sidebar;
  let current;
  sidebar = new Sidebar_default({ $$inline: true });
  sidebar.$on("resize", function() {
    if (is_function((0, import_ts_debounce2.debounce)(
      /*recalculateSize*/
      ctx[1],
      50
    )))
      (0, import_ts_debounce2.debounce)(
        /*recalculateSize*/
        ctx[1],
        50
      ).apply(this, arguments);
  });
  const block = {
    c: function create() {
      create_component(sidebar.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(sidebar, target, anchor);
      current = true;
    },
    p: function update2(new_ctx, dirty) {
      ctx = new_ctx;
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(sidebar.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(sidebar.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(sidebar, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_key_block2.name,
    type: "key",
    source: "(56:2) {#key $rerenderStore}",
    ctx
  });
  return block;
}
function create_else_block3(ctx) {
  let span;
  const block = {
    c: function create() {
      span = element("span");
      span.textContent = "Select a file to edit";
      attr_dev(span, "class", "no-file-selected");
      add_location(span, file6, 75, 4, 2079);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block3.name,
    type: "else",
    source: "(75:2) {:else}",
    ctx
  });
  return block;
}
function create_if_block5(ctx) {
  let div;
  let span;
  let t0_value = (
    /*$selectedFile*/
    ctx[2].location + ""
  );
  let t0;
  let t1;
  let t2;
  let monacoeditor;
  let updating_content;
  let updating_recalculateSize;
  let current;
  let if_block = (
    /*$status*/
    ctx[4].type && create_if_block_13(ctx)
  );
  function monacoeditor_content_binding(value) {
    ctx[8](value);
  }
  function monacoeditor_recalculateSize_binding(value) {
    ctx[9](value);
  }
  let monacoeditor_props = {
    actions: (
      /*actions*/
      ctx[5]
    ),
    commands: (
      /*commands*/
      ctx[6]
    )
  };
  if (
    /*editorContent*/
    ctx[0] !== void 0
  ) {
    monacoeditor_props.content = /*editorContent*/
    ctx[0];
  }
  if (
    /*recalculateSize*/
    ctx[1] !== void 0
  ) {
    monacoeditor_props.recalculateSize = /*recalculateSize*/
    ctx[1];
  }
  monacoeditor = new MonacoEditor_default({
    props: monacoeditor_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(monacoeditor, "content", monacoeditor_content_binding));
  binding_callbacks.push(() => bind(monacoeditor, "recalculateSize", monacoeditor_recalculateSize_binding));
  monacoeditor.$on(
    "change",
    /*handleChange*/
    ctx[7]
  );
  const block = {
    c: function create() {
      div = element("div");
      span = element("span");
      t0 = text(t0_value);
      t1 = space();
      if (if_block)
        if_block.c();
      t2 = space();
      create_component(monacoeditor.$$.fragment);
      attr_dev(span, "class", "selected-file");
      add_location(span, file6, 60, 6, 1675);
      attr_dev(div, "class", "status-bar PopcornUI-szncc9");
      add_location(div, file6, 59, 4, 1644);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, span);
      append_dev(span, t0);
      append_dev(div, t1);
      if (if_block)
        if_block.m(div, null);
      insert_dev(target, t2, anchor);
      mount_component(monacoeditor, target, anchor);
      current = true;
    },
    p: function update2(ctx2, dirty) {
      if ((!current || dirty & /*$selectedFile*/
      4) && t0_value !== (t0_value = /*$selectedFile*/
      ctx2[2].location + ""))
        set_data_dev(t0, t0_value);
      if (
        /*$status*/
        ctx2[4].type
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_13(ctx2);
          if_block.c();
          if_block.m(div, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      const monacoeditor_changes = {};
      if (!updating_content && dirty & /*editorContent*/
      1) {
        updating_content = true;
        monacoeditor_changes.content = /*editorContent*/
        ctx2[0];
        add_flush_callback(() => updating_content = false);
      }
      if (!updating_recalculateSize && dirty & /*recalculateSize*/
      2) {
        updating_recalculateSize = true;
        monacoeditor_changes.recalculateSize = /*recalculateSize*/
        ctx2[1];
        add_flush_callback(() => updating_recalculateSize = false);
      }
      monacoeditor.$set(monacoeditor_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(monacoeditor.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(monacoeditor.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      if (if_block)
        if_block.d();
      if (detaching)
        detach_dev(t2);
      destroy_component(monacoeditor, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block5.name,
    type: "if",
    source: "(59:2) {#if $selectedFile}",
    ctx
  });
  return block;
}
function create_if_block_13(ctx) {
  let div1;
  let div0;
  let t_value = (
    /*$status*/
    ctx[4].message + ""
  );
  let t;
  let div1_data_type_value;
  const block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");
      t = text(t_value);
      attr_dev(div0, "class", "status-message");
      add_location(div0, file6, 63, 10, 1824);
      attr_dev(div1, "class", "status");
      attr_dev(div1, "data-type", div1_data_type_value = /*$status*/
      ctx[4].type);
      add_location(div1, file6, 62, 8, 1768);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, div0);
      append_dev(div0, t);
    },
    p: function update2(ctx2, dirty) {
      if (dirty & /*$status*/
      16 && t_value !== (t_value = /*$status*/
      ctx2[4].message + ""))
        set_data_dev(t, t_value);
      if (dirty & /*$status*/
      16 && div1_data_type_value !== (div1_data_type_value = /*$status*/
      ctx2[4].type)) {
        attr_dev(div1, "data-type", div1_data_type_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_13.name,
    type: "if",
    source: "(62:6) {#if $status.type}",
    ctx
  });
  return block;
}
function create_fragment7(ctx) {
  let div;
  let previous_key = (
    /*$rerenderStore*/
    ctx[3]
  );
  let t;
  let current_block_type_index;
  let if_block;
  let current;
  let key_block = create_key_block2(ctx);
  const if_block_creators = [create_if_block5, create_else_block3];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*$selectedFile*/
      ctx2[2]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx, -1);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  const block = {
    c: function create() {
      div = element("div");
      key_block.c();
      t = space();
      if_block.c();
      attr_dev(div, "class", "quickCss-wrapper PopcornUI-szncc9");
      add_location(div, file6, 54, 0, 1496);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      key_block.m(div, null);
      append_dev(div, t);
      if_blocks[current_block_type_index].m(div, null);
      current = true;
    },
    p: function update2(ctx2, [dirty]) {
      if (dirty & /*$rerenderStore*/
      8 && safe_not_equal(previous_key, previous_key = /*$rerenderStore*/
      ctx2[3])) {
        group_outros();
        transition_out(key_block, 1, 1, noop);
        check_outros();
        key_block = create_key_block2(ctx2);
        key_block.c();
        transition_in(key_block, 1);
        key_block.m(div, t);
      } else {
        key_block.p(ctx2, dirty);
      }
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2, dirty);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(div, null);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(key_block);
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(key_block);
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      key_block.d(detaching);
      if_blocks[current_block_type_index].d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment7.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
var rerenderStore2 = writable();
function rerenderSidebar() {
  rerenderStore2.update((obj) => !obj);
}
var selectedNode = writable();
var selectedFile = writable();
var selectedFolder = writable();
var latestSelection = { subscribe: selectedNode.subscribe };
var status = writable({});
function instance7($$self, $$props, $$invalidate) {
  let $selectedFile, $$unsubscribe_selectedFile = noop, $$subscribe_selectedFile = () => ($$unsubscribe_selectedFile(), $$unsubscribe_selectedFile = subscribe(selectedFile, ($$value) => $$invalidate(2, $selectedFile = $$value)), selectedFile);
  let $fileStatus;
  let $rerenderStore;
  let $status, $$unsubscribe_status = noop, $$subscribe_status = () => ($$unsubscribe_status(), $$unsubscribe_status = subscribe(status, ($$value) => $$invalidate(4, $status = $$value)), status);
  validate_store(selectedFile, "selectedFile");
  component_subscribe($$self, selectedFile, ($$value) => $$invalidate(2, $selectedFile = $$value));
  validate_store(fileStatus, "fileStatus");
  component_subscribe($$self, fileStatus, ($$value) => $$invalidate(10, $fileStatus = $$value));
  validate_store(rerenderStore2, "rerenderStore");
  component_subscribe($$self, rerenderStore2, ($$value) => $$invalidate(3, $rerenderStore = $$value));
  validate_store(status, "status");
  component_subscribe($$self, status, ($$value) => $$invalidate(4, $status = $$value));
  $$self.$$.on_destroy.push(() => $$unsubscribe_selectedFile());
  $$self.$$.on_destroy.push(() => $$unsubscribe_status());
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("QuickCss", slots, []);
  let editorContent;
  selectedFile.subscribe((file9) => {
    if (!file9)
      return;
    $$invalidate(0, editorContent = file9.content);
    selectedNode.set(file9);
  });
  selectedFolder.subscribe((folder) => {
    if (!folder)
      return;
    selectedNode.set(folder);
  });
  let actions = [
    {
      id: "save",
      label: "Save the currently selected file",
      handler: save
    }
  ];
  let commands = [
    {
      keybinding: (KeyCode, KeyMod) => KeyMod.CtrlCmd | KeyCode.KeyS,
      handler: save
    }
  ];
  function handleChange() {
    set_store_value(fileStatus, $fileStatus[$selectedFile.location] ??= {}, $fileStatus);
    set_store_value(fileStatus, $fileStatus[$selectedFile.location].unsaved = true, $fileStatus);
  }
  function save() {
    set_store_value(fileStatus, $fileStatus[$selectedFile.location].unsaved = false, $fileStatus);
    PopcornNative.updateQuickCssFile($selectedFile.location, editorContent);
  }
  let recalculateSize;
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<QuickCss> was created with unknown prop '${key}'`);
  });
  function monacoeditor_content_binding(value) {
    editorContent = value;
    $$invalidate(0, editorContent);
  }
  function monacoeditor_recalculateSize_binding(value) {
    recalculateSize = value;
    $$invalidate(1, recalculateSize);
  }
  $$self.$capture_state = () => ({
    writable,
    rerenderStore: rerenderStore2,
    rerenderSidebar,
    selectedNode,
    selectedFile,
    selectedFolder,
    latestSelection,
    status,
    debounce: import_ts_debounce2.debounce,
    MonacoEditor: MonacoEditor_default,
    Sidebar: Sidebar_default,
    fileStatus,
    editorContent,
    actions,
    commands,
    handleChange,
    save,
    recalculateSize,
    $selectedFile,
    $fileStatus,
    $rerenderStore,
    $status
  });
  $$self.$inject_state = ($$props2) => {
    if ("editorContent" in $$props2)
      $$invalidate(0, editorContent = $$props2.editorContent);
    if ("actions" in $$props2)
      $$invalidate(5, actions = $$props2.actions);
    if ("commands" in $$props2)
      $$invalidate(6, commands = $$props2.commands);
    if ("recalculateSize" in $$props2)
      $$invalidate(1, recalculateSize = $$props2.recalculateSize);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    editorContent,
    recalculateSize,
    $selectedFile,
    $rerenderStore,
    $status,
    actions,
    commands,
    handleChange,
    monacoeditor_content_binding,
    monacoeditor_recalculateSize_binding
  ];
}
var QuickCss = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance7, create_fragment7, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "QuickCss",
      options,
      id: create_fragment7.name
    });
  }
};
var QuickCss_default = QuickCss;

// src/renderer/quickcss/index.ts
var Logger2 = new logger_default("QuickCSS");
var QuickCss2 = class {
  styleElements = /* @__PURE__ */ new Map();
  start() {
    this.populateQuickCss();
    this.watchQuickCss();
    selectedFolder.set(window.Popcorn.quickCss);
  }
  populateQuickCss() {
    const { imports, contents } = compileQuickCss(window.Popcorn.quickCss);
    const importStyle = this.styleElements.get("imports");
    if (!importStyle) {
      const importStyle2 = document.createElement("style");
      importStyle2.id = "popcorn-quickcss-imports";
      importStyle2.textContent = imports;
      importStyle2.setAttribute("data-popcorn", "quickcss");
      comments.end.after(importStyle2);
      this.styleElements.set("imports", importStyle2);
    } else if (imports !== importStyle.textContent) {
      importStyle.textContent = imports;
    }
    const contentStyle = this.styleElements.get("contents");
    if (!contentStyle) {
      const contentStyle2 = document.createElement("style");
      contentStyle2.id = "popcorn-quickcss-contents";
      contentStyle2.textContent = contents;
      contentStyle2.setAttribute("data-popcorn", "quickcss");
      comments.end.after(contentStyle2);
      this.styleElements.set("contents", contentStyle2);
    } else if (contents !== contentStyle.textContent) {
      contentStyle.textContent = contents;
    }
  }
  watchQuickCss() {
    PopcornNative.onQuickCssChange((updated) => {
      if (PopcornNative.config.verbose)
        Logger2.debug("QuickCSS Updated");
      window.Popcorn.quickCss = updated;
      rerenderSidebar();
      this.populateQuickCss();
    });
  }
  stop() {
    for (const style of this.styleElements.values()) {
      style.remove();
    }
  }
};
function compileQuickCss(folder) {
  let imports = "";
  let contents = "";
  const importRegex = /^@import\s+(?:url\(['"]?.*?['"]?\)|['"].*?['"])(\s+[^;]+?)?;$/gmi;
  for (const node of folder.files) {
    if ("files" in node) {
      const result = compileQuickCss(node);
      imports += result.imports;
      contents += result.contents;
    } else {
      const contentNoImports = node.content.replace(importRegex, (match) => {
        imports += match.replace(/;$/, "") + `; /* ${node.location} */
`;
        return "";
      }).trim();
      if (contentNoImports)
        contents += `

/* ${node.location} */
` + contentNoImports;
    }
  }
  return { imports, contents };
}
function getQuickCssNode(location, node = window.Popcorn.quickCss) {
  if (node.location === location)
    return node;
  for (const child of node.files) {
    if ("content" in child) {
      if (child.location === location)
        return child;
      else
        continue;
    }
    const result = getQuickCssNode(location, child);
    if (result)
      return result;
  }
  return null;
}

// src/renderer/ui/components/TabView.svelte
var file7 = "src\\renderer\\ui\\components\\TabView.svelte";
function get_each_context3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[7] = list[i];
  const constants_0 = (
    /*tabs*/
    child_ctx[0].find(function func(...args) {
      return (
        /*func*/
        ctx[6](
          /*tabName*/
          child_ctx[7],
          ...args
        )
      );
    })
  );
  child_ctx[8] = constants_0;
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[11] = list[i].name;
  return child_ctx;
}
function create_each_block_1(ctx) {
  let button;
  let t0_value = (
    /*name*/
    ctx[11] + ""
  );
  let t0;
  let t1;
  let button_data_selected_value;
  let mounted;
  let dispose;
  function click_handler() {
    return (
      /*click_handler*/
      ctx[4](
        /*name*/
        ctx[11]
      )
    );
  }
  function keypress_handler() {
    return (
      /*keypress_handler*/
      ctx[5](
        /*name*/
        ctx[11]
      )
    );
  }
  const block = {
    c: function create() {
      button = element("button");
      t0 = text(t0_value);
      t1 = space();
      attr_dev(button, "class", "tab PopcornUI-cd56hu");
      attr_dev(button, "data-selected", button_data_selected_value = /*selectedTab*/
      ctx[1] === /*name*/
      ctx[11]);
      add_location(button, file7, 13, 4, 339);
    },
    m: function mount(target, anchor) {
      insert_dev(target, button, anchor);
      append_dev(button, t0);
      append_dev(button, t1);
      if (!mounted) {
        dispose = [
          listen_dev(button, "click", click_handler, false, false, false, false),
          listen_dev(button, "keypress", keypress_handler, false, false, false, false)
        ];
        mounted = true;
      }
    },
    p: function update2(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & /*tabs*/
      1 && t0_value !== (t0_value = /*name*/
      ctx[11] + ""))
        set_data_dev(t0, t0_value);
      if (dirty & /*selectedTab, tabs*/
      3 && button_data_selected_value !== (button_data_selected_value = /*selectedTab*/
      ctx[1] === /*name*/
      ctx[11])) {
        attr_dev(button, "data-selected", button_data_selected_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(button);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block_1.name,
    type: "each",
    source: "(13:2) {#each tabs as { name }}",
    ctx
  });
  return block;
}
function create_each_block3(ctx) {
  let div;
  let switch_instance;
  let t;
  let div_data_selected_value;
  let div_data_name_value;
  let current;
  var switch_value = (
    /*tab*/
    ctx[8].component
  );
  function switch_props(ctx2) {
    return { $$inline: true };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component_dev(switch_value, switch_props(ctx));
  }
  const block = {
    c: function create() {
      div = element("div");
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      t = space();
      attr_dev(div, "class", "tab-wrapper PopcornUI-cd56hu");
      attr_dev(div, "data-selected", div_data_selected_value = /*tab*/
      ctx[8].name === /*selectedTab*/
      ctx[1]);
      attr_dev(div, "data-name", div_data_name_value = /*tab*/
      ctx[8].name);
      add_location(div, file7, 25, 2, 631);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      if (switch_instance)
        mount_component(switch_instance, div, null);
      append_dev(div, t);
      current = true;
    },
    p: function update2(ctx2, dirty) {
      if (dirty & /*tabs*/
      1 && switch_value !== (switch_value = /*tab*/
      ctx2[8].component)) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = construct_svelte_component_dev(switch_value, switch_props(ctx2));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, div, t);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
      }
      if (!current || dirty & /*tabs, selectedTab*/
      3 && div_data_selected_value !== (div_data_selected_value = /*tab*/
      ctx2[8].name === /*selectedTab*/
      ctx2[1])) {
        attr_dev(div, "data-selected", div_data_selected_value);
      }
      if (!current || dirty & /*tabs*/
      1 && div_data_name_value !== (div_data_name_value = /*tab*/
      ctx2[8].name)) {
        attr_dev(div, "data-name", div_data_name_value);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      if (switch_instance)
        destroy_component(switch_instance);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block3.name,
    type: "each",
    source: "(24:0) {#each loadedTabs as tabName}",
    ctx
  });
  return block;
}
function create_fragment8(ctx) {
  let div;
  let t;
  let each1_anchor;
  let current;
  let each_value_1 = (
    /*tabs*/
    ctx[0]
  );
  validate_each_argument(each_value_1);
  let each_blocks_1 = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  let each_value = (
    /*loadedTabs*/
    ctx[2]
  );
  validate_each_argument(each_value);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block3(get_each_context3(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  const block = {
    c: function create() {
      div = element("div");
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }
      t = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each1_anchor = empty();
      attr_dev(div, "class", "tab-list PopcornUI-cd56hu");
      add_location(div, file7, 11, 0, 285);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        if (each_blocks_1[i]) {
          each_blocks_1[i].m(div, null);
        }
      }
      insert_dev(target, t, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(target, anchor);
        }
      }
      insert_dev(target, each1_anchor, anchor);
      current = true;
    },
    p: function update2(ctx2, [dirty]) {
      if (dirty & /*selectedTab, tabs, switchTabs*/
      11) {
        each_value_1 = /*tabs*/
        ctx2[0];
        validate_each_argument(each_value_1);
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks_1[i]) {
            each_blocks_1[i].p(child_ctx, dirty);
          } else {
            each_blocks_1[i] = create_each_block_1(child_ctx);
            each_blocks_1[i].c();
            each_blocks_1[i].m(div, null);
          }
        }
        for (; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].d(1);
        }
        each_blocks_1.length = each_value_1.length;
      }
      if (dirty & /*tabs, loadedTabs, selectedTab*/
      7) {
        each_value = /*loadedTabs*/
        ctx2[2];
        validate_each_argument(each_value);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context3(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block3(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each1_anchor.parentNode, each1_anchor);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i: function intro(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_each(each_blocks_1, detaching);
      if (detaching)
        detach_dev(t);
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach_dev(each1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment8.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance8($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("TabView", slots, []);
  let { tabs } = $$props;
  let selectedTab = tabs?.[0]?.name;
  const loadedTabs = [selectedTab];
  function switchTabs(tabName) {
    $$invalidate(1, selectedTab = tabName);
    if (!loadedTabs.includes(tabName))
      loadedTabs.push(tabName);
  }
  $$self.$$.on_mount.push(function() {
    if (tabs === void 0 && !("tabs" in $$props || $$self.$$.bound[$$self.$$.props["tabs"]])) {
      console.warn("<TabView> was created without expected prop 'tabs'");
    }
  });
  const writable_props = ["tabs"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<TabView> was created with unknown prop '${key}'`);
  });
  const click_handler = (name) => switchTabs(name);
  const keypress_handler = (name) => switchTabs(name);
  const func = (tabName, tab) => tab.name === tabName;
  $$self.$$set = ($$props2) => {
    if ("tabs" in $$props2)
      $$invalidate(0, tabs = $$props2.tabs);
  };
  $$self.$capture_state = () => ({
    tabs,
    selectedTab,
    loadedTabs,
    switchTabs
  });
  $$self.$inject_state = ($$props2) => {
    if ("tabs" in $$props2)
      $$invalidate(0, tabs = $$props2.tabs);
    if ("selectedTab" in $$props2)
      $$invalidate(1, selectedTab = $$props2.selectedTab);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    tabs,
    selectedTab,
    loadedTabs,
    switchTabs,
    click_handler,
    keypress_handler,
    func
  ];
}
var TabView = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance8, create_fragment8, safe_not_equal, { tabs: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "TabView",
      options,
      id: create_fragment8.name
    });
  }
  get tabs() {
    throw new Error("<TabView>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set tabs(value) {
    throw new Error("<TabView>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var TabView_default = TabView;

// src/renderer/utils/hotkeys.js
var isEqual = (a, b) => {
  const aKeys = Object.keys(a);
  if (aKeys.length !== Object.keys(b).length) {
    return false;
  }
  return aKeys.every((k) => Object.prototype.hasOwnProperty.call(b, k) && a[k] === b[k]);
};
var isArrayEqual = (a, b) => a.length === b.length && a.every((v, i) => isEqual(v, b[i]));
var matchHotkey = (buffer, hotkey) => {
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
var arrayToObject = (arr) => arr.reduce((obj, key) => ({ ...obj, [key]: true }), {});
var allModifiers = ["ctrl", "shift", "alt", "meta"];
var indexedModifiers = arrayToObject(allModifiers);
var isHotkeyValid = (hotkey) => Object.keys(hotkey).filter((k) => !indexedModifiers[k]).length === 1;
var validate = (value, message) => {
  if (!value) {
    throw new Error(message);
  }
};
var validateType = (value, name, type) => {
  validate(typeof value === type, `The ${name} must be a ${type}; given ${typeof value}`);
};
var normalizeHotkey = (hotkey) => hotkey.split(/ +/g).map((part) => {
  const arr = part.split("+").filter(Boolean);
  const result = arrayToObject(arr);
  validate(Object.keys(result).length >= arr.length, `Hotkey combination has duplicates "${hotkey}"`);
  validate(isHotkeyValid(result), `Invalid hotkey combination: "${hotkey}"`);
  return result;
});
var validateListenerArgs = (hotkey, callback) => {
  validateType(hotkey, "hotkey", "string");
  validateType(callback, "callback", "function");
};
var createListenersFn = (listeners, fn) => (hotkey, callback) => {
  validateListenerArgs(hotkey, callback);
  fn(listeners, hotkey, callback);
};
var registerListener = (listeners, hotkey, callback) => {
  listeners.push({ hotkey: normalizeHotkey(hotkey), callback });
};
var unregisterListener = (listeners, hotkey, callback) => {
  const normalized = normalizeHotkey(hotkey);
  const index = listeners.findIndex(
    (l) => l.callback === callback && isArrayEqual(normalized, l.hotkey)
  );
  if (index !== -1) {
    listeners.splice(index, 1);
  }
};
var debounce3 = (fn, time) => {
  let timeoutId = null;
  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(fn, time);
  };
};
var getKey = (key) => {
  switch (key) {
    case "+":
      return "plus";
    case " ":
      return "space";
    default:
      return key.toLowerCase();
  }
};
var createKeyDownListener = (listeners, debounceTime) => {
  let buffer = [];
  const clearBufferDebounced = debounce3(() => {
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
      [getKey(event.key)]: true
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
var validateContext = (options) => {
  const { debounceTime = 500, autoEnable = true } = options || {};
  validateType(debounceTime, "debounceTime", "number");
  validate(debounceTime > 0, "debounceTime must be > 0");
  validateType(autoEnable, "autoEnable", "boolean");
  return { debounceTime, autoEnable };
};
var createContext = (options) => {
  const { debounceTime, autoEnable } = validateContext(options);
  const listeners = [];
  const keyDownListener = createKeyDownListener(listeners, debounceTime);
  const enable = () => document.addEventListener("keydown", keyDownListener);
  const disable = () => document.removeEventListener("keydown", keyDownListener);
  if (autoEnable) {
    enable();
  }
  return {
    register: createListenersFn(listeners, registerListener),
    unregister: createListenersFn(listeners, unregisterListener),
    enable,
    disable
  };
};

// src/renderer/ui/index.svelte
var file8 = "src\\renderer\\ui\\index.svelte";
function create_fragment9(ctx) {
  let dialog_1;
  let tabview;
  let t;
  let div;
  let current;
  tabview = new TabView_default({
    props: { tabs: (
      /*tabs*/
      ctx[1]
    ) },
    $$inline: true
  });
  const block = {
    c: function create() {
      dialog_1 = element("dialog");
      create_component(tabview.$$.fragment);
      t = space();
      div = element("div");
      attr_dev(div, "id", "PopcornUI-layers");
      add_location(div, file8, 54, 2, 1498);
      attr_dev(dialog_1, "class", "PopcornUI-dialog PopcornUI-6ipy8a");
      add_location(dialog_1, file8, 52, 0, 1422);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, dialog_1, anchor);
      mount_component(tabview, dialog_1, null);
      append_dev(dialog_1, t);
      append_dev(dialog_1, div);
      ctx[2](dialog_1);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current)
        return;
      transition_in(tabview.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(tabview.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(dialog_1);
      destroy_component(tabview);
      ctx[2](null);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment9.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance9($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Ui", slots, []);
  let dialog;
  let isOpened = false;
  function toggleUI() {
    if (isOpened)
      dialog.close();
    else
      dialog.showModal();
    isOpened = !isOpened;
    document.documentElement.dataset.popcornUiOpen = isOpened.toString();
  }
  const context = createContext({ autoEnable: true });
  const hotkeyCallback = (event) => {
    event.stopImmediatePropagation();
    event.stopPropagation();
    event.preventDefault();
    toggleUI();
  };
  const escapeCallback = (event) => {
    if (isOpened) {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
      toggleUI();
    }
  };
  onMount(() => {
    context.register(PopcornNative.config.hotkey, hotkeyCallback);
    context.register("escape", escapeCallback);
  });
  const tabs = [
    { name: "Themes", component: Themes_default },
    { name: "QuickCSS", component: QuickCss_default }
  ];
  onDestroy(() => {
    context.unregister(PopcornNative.config.hotkey, hotkeyCallback);
    context.unregister("escape", escapeCallback);
  });
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Ui> was created with unknown prop '${key}'`);
  });
  function dialog_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      dialog = $$value;
      $$invalidate(0, dialog);
    });
  }
  $$self.$capture_state = () => ({
    onDestroy,
    onMount,
    TabView: TabView_default,
    ThemesTab: Themes_default,
    QuickCssTab: QuickCss_default,
    createContext,
    dialog,
    isOpened,
    toggleUI,
    context,
    hotkeyCallback,
    escapeCallback,
    tabs
  });
  $$self.$inject_state = ($$props2) => {
    if ("dialog" in $$props2)
      $$invalidate(0, dialog = $$props2.dialog);
    if ("isOpened" in $$props2)
      isOpened = $$props2.isOpened;
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [dialog, tabs, dialog_1_binding];
}
var Ui = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance9, create_fragment9, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Ui",
      options,
      id: create_fragment9.name
    });
  }
};
var ui_default = Ui;

// src/renderer/ipc.ts
var Logger3 = new logger_default("IPC");
PopcornNative.onStatusMessage((message) => {
  if (PopcornNative.config.verbose)
    Logger3.debug(message);
  if (message.type.startsWith(prefixes.quickCss))
    handleQuickCssMessages(message);
});
function handleQuickCssMessages(message) {
  const statusType = message.success ? "success" : "error";
  if (!message.success) {
    Logger3.warn(message.type, "failed");
    return;
  }
  switch (message.type) {
    case MESSAGES.quickCss.created:
      {
        const { type, location } = message.data;
        const node = getQuickCssNode(location);
        if (type === "file")
          selectedFile.set(node);
        else
          selectedFolder.set(node);
        var statusMessage = message.success ? `Created ${location} successfully.` : `Failed to create ${location}.`;
      }
      break;
    case MESSAGES.quickCss.deleted:
      {
        const { type, location } = message.data;
        if (type === "file" && get_store_value(selectedFile).location === location)
          selectedFile.set(null);
        else if (type === "folder" && get_store_value(selectedFolder).location === location)
          selectedFolder.set(null);
        var statusMessage = message.success ? `Deleted ${location} successfully.` : `Failed to delete ${location}.`;
      }
      break;
    case MESSAGES.quickCss.renamed:
      {
        const { oldLocation, newLocation } = message.data;
        const node = getQuickCssNode(newLocation);
        const type = "files" in node ? "folder" : "file";
        if (type === "file" && get_store_value(selectedFile).location === oldLocation)
          selectedFile.set(node);
        else if (type === "folder" && get_store_value(selectedFolder).location === oldLocation)
          selectedFolder.set(node);
        var statusMessage = message.success ? `Renamed ${oldLocation} to ${newLocation} successfully.` : `Failed to rename ${oldLocation} to ${newLocation}.`;
      }
      break;
    case MESSAGES.quickCss.updated:
      {
        var statusMessage = message.success ? `Updated ${message.data} successfully.` : `Failed to update ${message.data}.`;
      }
      break;
    default:
      Logger3.warn(`Unknown status message type: ${message.type}`, message);
  }
  if (statusMessage)
    status.set({
      type: statusType,
      message: statusMessage
    });
}

// src/renderer/index.ts
var shouldValidate = Boolean(PopcornNative.validateCSS);
var comments = {
  start: document.createComment(" section:Popcorn "),
  end: document.createComment(" endsection ")
};
var messageHandler = (event) => event.source === window && event.data === RENDERER.stop && renderer.stop();
var renderer = new class Renderer {
  UI;
  Themes;
  QuickCss;
  constructor() {
    if (true)
      window.addEventListener("message", messageHandler);
  }
  async start() {
    document.head.append(comments.start, comments.end);
    if (!globalThis.PopcornInjected) {
      const style = document.createElement("style");
      style.id = "popcorn-styles";
      style.textContent = await PopcornNative.getStyles();
      comments.start.after(style);
    }
    const themes = await PopcornNative.getThemes();
    const quickCss = await PopcornNative.getQuickCss();
    const Popcorn = {
      themes: populateThemes(themes),
      quickCss
    };
    window.Popcorn = Popcorn;
    this.UI = new ui_default({ target: document.body });
    this.Themes = new Themes2();
    this.Themes.start();
    this.QuickCss = new QuickCss2();
    this.QuickCss.start();
    if (!globalThis.PopcornInjected)
      Object.assign(globalThis, {
        PopcornInjected: true
      });
  }
  stop() {
    this.UI?.$destroy();
    this.Themes?.stop();
    this.QuickCss?.stop();
    comments.start.remove();
    comments.end.remove();
    window.removeEventListener("message", messageHandler);
    delete window.Popcorn;
  }
}();
var renderer_default = renderer;
export {
  comments,
  renderer_default as default,
  shouldValidate
};
/*! Bundled license information:

@walter-org/svelte-float/dist/utils/deepMerge.js:
  (*! https://stackoverflow.com/a/34749873/14591737 *)
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3RzLWRlYm91bmNlQDQuMC4wL25vZGVfbW9kdWxlcy90cy1kZWJvdW5jZS9zcmMvaW5kZXgudHMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Btb25hY28tZWRpdG9yK2xvYWRlckAxLjMuM19tb25hY28tZWRpdG9yQDAuMzkuMC9ub2RlX21vZHVsZXMvQG1vbmFjby1lZGl0b3IvbG9hZGVyL2xpYi9janMvX3ZpcnR1YWwvX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vc3RhdGUtbG9jYWxAMS4wLjcvbm9kZV9tb2R1bGVzL3N0YXRlLWxvY2FsL2xpYi9janMvc3RhdGUtbG9jYWwuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Btb25hY28tZWRpdG9yK2xvYWRlckAxLjMuM19tb25hY28tZWRpdG9yQDAuMzkuMC9ub2RlX21vZHVsZXMvQG1vbmFjby1lZGl0b3IvbG9hZGVyL2xpYi9janMvY29uZmlnL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9AbW9uYWNvLWVkaXRvcitsb2FkZXJAMS4zLjNfbW9uYWNvLWVkaXRvckAwLjM5LjAvbm9kZV9tb2R1bGVzL0Btb25hY28tZWRpdG9yL2xvYWRlci9saWIvY2pzL3V0aWxzL2N1cnJ5LmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9AbW9uYWNvLWVkaXRvcitsb2FkZXJAMS4zLjNfbW9uYWNvLWVkaXRvckAwLjM5LjAvbm9kZV9tb2R1bGVzL0Btb25hY28tZWRpdG9yL2xvYWRlci9saWIvY2pzL3V0aWxzL2lzT2JqZWN0LmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9AbW9uYWNvLWVkaXRvcitsb2FkZXJAMS4zLjNfbW9uYWNvLWVkaXRvckAwLjM5LjAvbm9kZV9tb2R1bGVzL0Btb25hY28tZWRpdG9yL2xvYWRlci9saWIvY2pzL3ZhbGlkYXRvcnMvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Btb25hY28tZWRpdG9yK2xvYWRlckAxLjMuM19tb25hY28tZWRpdG9yQDAuMzkuMC9ub2RlX21vZHVsZXMvQG1vbmFjby1lZGl0b3IvbG9hZGVyL2xpYi9janMvdXRpbHMvY29tcG9zZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vQG1vbmFjby1lZGl0b3IrbG9hZGVyQDEuMy4zX21vbmFjby1lZGl0b3JAMC4zOS4wL25vZGVfbW9kdWxlcy9AbW9uYWNvLWVkaXRvci9sb2FkZXIvbGliL2Nqcy91dGlscy9kZWVwTWVyZ2UuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Btb25hY28tZWRpdG9yK2xvYWRlckAxLjMuM19tb25hY28tZWRpdG9yQDAuMzkuMC9ub2RlX21vZHVsZXMvQG1vbmFjby1lZGl0b3IvbG9hZGVyL2xpYi9janMvdXRpbHMvbWFrZUNhbmNlbGFibGUuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Btb25hY28tZWRpdG9yK2xvYWRlckAxLjMuM19tb25hY28tZWRpdG9yQDAuMzkuMC9ub2RlX21vZHVsZXMvQG1vbmFjby1lZGl0b3IvbG9hZGVyL2xpYi9janMvbG9hZGVyL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9AbW9uYWNvLWVkaXRvcitsb2FkZXJAMS4zLjNfbW9uYWNvLWVkaXRvckAwLjM5LjAvbm9kZV9tb2R1bGVzL0Btb25hY28tZWRpdG9yL2xvYWRlci9saWIvY2pzL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9hdXRvLWJpbmRANS4wLjEvbm9kZV9tb2R1bGVzL2F1dG8tYmluZC9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vc3ZlbHRlQDMuNTkuMi9ub2RlX21vZHVsZXMvc3ZlbHRlL2ludGVybmFsL2luZGV4Lm1qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vc3ZlbHRlQDMuNTkuMi9ub2RlX21vZHVsZXMvc3ZlbHRlL3N0b3JlL2luZGV4Lm1qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbHRlci1vcmcrc3ZlbHRlLWZsb2F0QDAuMC4zX3N2ZWx0ZUAzLjU5LjIvbm9kZV9tb2R1bGVzL0B3YWx0ZXItb3JnL3N2ZWx0ZS1mbG9hdC9kaXN0L3V0aWxzL2RlZXBNZXJnZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbHRlci1vcmcrc3ZlbHRlLWZsb2F0QDAuMC4zX3N2ZWx0ZUAzLjU5LjIvbm9kZV9tb2R1bGVzL0B3YWx0ZXItb3JnL3N2ZWx0ZS1mbG9hdC9kaXN0L3V0aWxzL2VtMnB4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ad2FsdGVyLW9yZytzdmVsdGUtZmxvYXRAMC4wLjNfc3ZlbHRlQDMuNTkuMi9ub2RlX21vZHVsZXMvQHdhbHRlci1vcmcvc3ZlbHRlLWZsb2F0L2Rpc3QvdXRpbHMvZ2VuZXJhdGVJRC5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vQGZsb2F0aW5nLXVpK2NvcmVAMS4zLjEvbm9kZV9tb2R1bGVzL0BmbG9hdGluZy11aS9jb3JlL2Rpc3QvZmxvYXRpbmctdWkuY29yZS5tanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BmbG9hdGluZy11aStkb21AMS40LjMvbm9kZV9tb2R1bGVzL0BmbG9hdGluZy11aS9kb20vZGlzdC9mbG9hdGluZy11aS5kb20ubWpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ad2FsdGVyLW9yZytzdmVsdGUtZmxvYXRAMC4wLjNfc3ZlbHRlQDMuNTkuMi9ub2RlX21vZHVsZXMvQHdhbHRlci1vcmcvc3ZlbHRlLWZsb2F0L2Rpc3QvdG9vbHRpcC9hY3Rpb24uanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N2ZWx0ZS1pY29ucy1wYWNrQDIuMS4wL25vZGVfbW9kdWxlcy9zdmVsdGUtaWNvbnMtcGFjay9JY29uLnN2ZWx0ZSIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vc3ZlbHRlLWljb25zLXBhY2tAMi4xLjAvbm9kZV9tb2R1bGVzL3N2ZWx0ZS1pY29ucy1wYWNrL3JpL1JpRWRpdG9yUXVlc3Rpb25NYXJrLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdmVsdGUtaWNvbnMtcGFja0AyLjEuMC9ub2RlX21vZHVsZXMvc3ZlbHRlLWljb25zLXBhY2svdnNjL1ZzY0NoZWNrLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdmVsdGUtaWNvbnMtcGFja0AyLjEuMC9ub2RlX21vZHVsZXMvc3ZlbHRlLWljb25zLXBhY2svdnNjL1ZzY0Nocm9tZUNsb3NlLmpzIiwgIi4uL3NyYy9yZW5kZXJlci91aS90YWJzL1RoZW1lcy5zdmVsdGUiLCAiLi4vc3JjL2NvbW1vbi9jb25zdGFudHMudHMiLCAiLi4vc3JjL2NvbW1vbi9sb2dnZXIudHMiLCAiLi4vc3JjL3JlbmRlcmVyL3RoZW1lcy9pbmRleC50cyIsICIuLi9zcmMvcmVuZGVyZXIvdWkvdGFicy9RdWlja0Nzcy5zdmVsdGUiLCAiLi4vc3JjL3JlbmRlcmVyL3VpL2NvbXBvbmVudHMvUXVpY2tDc3MvTW9uYWNvRWRpdG9yLnN2ZWx0ZSIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vc3ZlbHRlLWljb25zLXBhY2tAMi4xLjAvbm9kZV9tb2R1bGVzL3N2ZWx0ZS1pY29ucy1wYWNrL3ZzYy9Wc2NOZXdGaWxlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdmVsdGUtaWNvbnMtcGFja0AyLjEuMC9ub2RlX21vZHVsZXMvc3ZlbHRlLWljb25zLXBhY2svdnNjL1ZzY05ld0ZvbGRlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vc3ZlbHRlLWljb25zLXBhY2tAMi4xLjAvbm9kZV9tb2R1bGVzL3N2ZWx0ZS1pY29ucy1wYWNrL3ZzYy9Wc2NSZW1vdmUuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N2ZWx0ZS1pY29ucy1wYWNrQDIuMS4wL25vZGVfbW9kdWxlcy9zdmVsdGUtaWNvbnMtcGFjay9haS9BaUZpbGxGb2xkZXJPcGVuLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdmVsdGUtaWNvbnMtcGFja0AyLjEuMC9ub2RlX21vZHVsZXMvc3ZlbHRlLWljb25zLXBhY2svYWkvQWlGaWxsRm9sZGVyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdmVsdGUtaWNvbnMtcGFja0AyLjEuMC9ub2RlX21vZHVsZXMvc3ZlbHRlLWljb25zLXBhY2svZmEvRmFCcmFuZHNDc3MzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdmVsdGUtaWNvbnMtcGFja0AyLjEuMC9ub2RlX21vZHVsZXMvc3ZlbHRlLWljb25zLXBhY2svdnNjL1ZzY0NpcmNsZUZpbGwuanMiLCAiLi4vc3JjL3JlbmRlcmVyL3VpL2NvbXBvbmVudHMvUXVpY2tDc3MvRmlsZS5zdmVsdGUiLCAiLi4vc3JjL3JlbmRlcmVyL3VpL2NvbXBvbmVudHMvUXVpY2tDc3MvRm9sZGVyLnN2ZWx0ZSIsICIuLi9zcmMvcmVuZGVyZXIvdWkvY29tcG9uZW50cy9RdWlja0Nzcy9TaWRlYmFyLnN2ZWx0ZSIsICIuLi9zcmMvcmVuZGVyZXIvcXVpY2tjc3MvaW5kZXgudHMiLCAiLi4vc3JjL3JlbmRlcmVyL3VpL2NvbXBvbmVudHMvVGFiVmlldy5zdmVsdGUiLCAiLi4vc3JjL3JlbmRlcmVyL3V0aWxzL2hvdGtleXMuanMiLCAiLi4vc3JjL3JlbmRlcmVyL3VpL2luZGV4LnN2ZWx0ZSIsICIuLi9zcmMvcmVuZGVyZXIvaXBjLnRzIiwgIi4uL3NyYy9yZW5kZXJlci9pbmRleC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0IHR5cGUgT3B0aW9uczxSZXN1bHQ+ID0ge1xuICBpc0ltbWVkaWF0ZT86IGJvb2xlYW47XG4gIG1heFdhaXQ/OiBudW1iZXI7XG4gIGNhbGxiYWNrPzogKGRhdGE6IFJlc3VsdCkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVib3VuY2VkRnVuY3Rpb248XG4gIEFyZ3MgZXh0ZW5kcyBhbnlbXSxcbiAgRiBleHRlbmRzICguLi5hcmdzOiBBcmdzKSA9PiBhbnlcbj4ge1xuICAodGhpczogVGhpc1BhcmFtZXRlclR5cGU8Rj4sIC4uLmFyZ3M6IEFyZ3MpOiBQcm9taXNlPFJldHVyblR5cGU8Rj4+O1xuICBjYW5jZWw6IChyZWFzb24/OiBhbnkpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBEZWJvdW5jZWRQcm9taXNlPEZ1bmN0aW9uUmV0dXJuPiB7XG4gIHJlc29sdmU6IChyZXN1bHQ6IEZ1bmN0aW9uUmV0dXJuKSA9PiB2b2lkO1xuICByZWplY3Q6IChyZWFzb24/OiBhbnkpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZTxBcmdzIGV4dGVuZHMgYW55W10sIEYgZXh0ZW5kcyAoLi4uYXJnczogQXJncykgPT4gYW55PihcbiAgZnVuYzogRixcbiAgd2FpdE1pbGxpc2Vjb25kcyA9IDUwLFxuICBvcHRpb25zOiBPcHRpb25zPFJldHVyblR5cGU8Rj4+ID0ge31cbik6IHtcbiAgKHRoaXM6IFRoaXNQYXJhbWV0ZXJUeXBlPEY+LCAuLi5hcmdzOiBQYXJhbWV0ZXJzPEY+ICYgQXJncyk6IFByb21pc2U8XG4gICAgUmV0dXJuVHlwZTxGPlxuICA+O1xuICBjYW5jZWw6IChyZWFzb24/OiBhbnkpID0+IHZvaWQ7XG59IHtcbiAgbGV0IHRpbWVvdXRJZDogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4gfCB1bmRlZmluZWQ7XG4gIGNvbnN0IGlzSW1tZWRpYXRlID0gb3B0aW9ucy5pc0ltbWVkaWF0ZSA/PyBmYWxzZTtcbiAgY29uc3QgY2FsbGJhY2sgPSBvcHRpb25zLmNhbGxiYWNrID8/IGZhbHNlO1xuICBjb25zdCBtYXhXYWl0ID0gb3B0aW9ucy5tYXhXYWl0O1xuICBsZXQgbGFzdEludm9rZVRpbWUgPSBEYXRlLm5vdygpO1xuXG4gIGxldCBwcm9taXNlczogRGVib3VuY2VkUHJvbWlzZTxSZXR1cm5UeXBlPEY+PltdID0gW107XG5cbiAgZnVuY3Rpb24gbmV4dEludm9rZVRpbWVvdXQoKSB7XG4gICAgaWYgKG1heFdhaXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgdGltZVNpbmNlTGFzdEludm9jYXRpb24gPSBEYXRlLm5vdygpIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAgIGlmICh0aW1lU2luY2VMYXN0SW52b2NhdGlvbiArIHdhaXRNaWxsaXNlY29uZHMgPj0gbWF4V2FpdCkge1xuICAgICAgICByZXR1cm4gbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZvY2F0aW9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB3YWl0TWlsbGlzZWNvbmRzO1xuICB9XG5cbiAgY29uc3QgZGVib3VuY2VkRnVuY3Rpb24gPSBmdW5jdGlvbiAoXG4gICAgdGhpczogVGhpc1BhcmFtZXRlclR5cGU8Rj4sXG4gICAgLi4uYXJnczogUGFyYW1ldGVyczxGPlxuICApIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcbiAgICByZXR1cm4gbmV3IFByb21pc2U8UmV0dXJuVHlwZTxGPj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgaW52b2tlRnVuY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRpbWVvdXRJZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgbGFzdEludm9rZVRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICBpZiAoIWlzSW1tZWRpYXRlKSB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhyZXN1bHQpO1xuICAgICAgICAgIHByb21pc2VzLmZvckVhY2goKHsgcmVzb2x2ZSB9KSA9PiByZXNvbHZlKHJlc3VsdCkpO1xuICAgICAgICAgIHByb21pc2VzID0gW107XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHNob3VsZENhbGxOb3cgPSBpc0ltbWVkaWF0ZSAmJiB0aW1lb3V0SWQgPT09IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHRpbWVvdXRJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgfVxuXG4gICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGludm9rZUZ1bmN0aW9uLCBuZXh0SW52b2tlVGltZW91dCgpKTtcblxuICAgICAgaWYgKHNob3VsZENhbGxOb3cpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2socmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH1cbiAgICAgIHByb21pc2VzLnB1c2goeyByZXNvbHZlLCByZWplY3QgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZGVib3VuY2VkRnVuY3Rpb24uY2FuY2VsID0gZnVuY3Rpb24gKHJlYXNvbj86IGFueSkge1xuICAgIGlmICh0aW1lb3V0SWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgfVxuICAgIHByb21pc2VzLmZvckVhY2goKHsgcmVqZWN0IH0pID0+IHJlamVjdChyZWFzb24pKTtcbiAgICBwcm9taXNlcyA9IFtdO1xuICB9O1xuXG4gIHJldHVybiBkZWJvdW5jZWRGdW5jdGlvbjtcbn1cbiIsICIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSk7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG5cbiAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuXG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbmV4cG9ydHMuYXJyYXlMaWtlVG9BcnJheSA9IF9hcnJheUxpa2VUb0FycmF5O1xuZXhwb3J0cy5hcnJheVdpdGhIb2xlcyA9IF9hcnJheVdpdGhIb2xlcztcbmV4cG9ydHMuZGVmaW5lUHJvcGVydHkgPSBfZGVmaW5lUHJvcGVydHk7XG5leHBvcnRzLml0ZXJhYmxlVG9BcnJheUxpbWl0ID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0O1xuZXhwb3J0cy5ub25JdGVyYWJsZVJlc3QgPSBfbm9uSXRlcmFibGVSZXN0O1xuZXhwb3J0cy5vYmplY3RTcHJlYWQyID0gX29iamVjdFNwcmVhZDI7XG5leHBvcnRzLm9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzO1xuZXhwb3J0cy5vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7XG5leHBvcnRzLnNsaWNlZFRvQXJyYXkgPSBfc2xpY2VkVG9BcnJheTtcbmV4cG9ydHMudW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgIGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgIH0pO1xuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuXG4gIHJldHVybiBrZXlzO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgIGlmIChpICUgMikge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZucyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmbnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gZm5zLnJlZHVjZVJpZ2h0KGZ1bmN0aW9uICh5LCBmKSB7XG4gICAgICByZXR1cm4gZih5KTtcbiAgICB9LCB4KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3VycnkoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGN1cnJpZWQoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHJldHVybiBhcmdzLmxlbmd0aCA+PSBmbi5sZW5ndGggPyBmbi5hcHBseSh0aGlzLCBhcmdzKSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgbmV4dEFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgICAgbmV4dEFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGN1cnJpZWQuYXBwbHkoX3RoaXMsIFtdLmNvbmNhdChhcmdzLCBuZXh0QXJncykpO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiB7fS50b1N0cmluZy5jYWxsKHZhbHVlKS5pbmNsdWRlcygnT2JqZWN0Jyk7XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHkob2JqKSB7XG4gIHJldHVybiAhT2JqZWN0LmtleXMob2JqKS5sZW5ndGg7XG59XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqZWN0LCBwcm9wZXJ0eSkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoYW5nZXMoaW5pdGlhbCwgY2hhbmdlcykge1xuICBpZiAoIWlzT2JqZWN0KGNoYW5nZXMpKSBlcnJvckhhbmRsZXIoJ2NoYW5nZVR5cGUnKTtcbiAgaWYgKE9iamVjdC5rZXlzKGNoYW5nZXMpLnNvbWUoZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgcmV0dXJuICFoYXNPd25Qcm9wZXJ0eShpbml0aWFsLCBmaWVsZCk7XG4gIH0pKSBlcnJvckhhbmRsZXIoJ2NoYW5nZUZpZWxkJyk7XG4gIHJldHVybiBjaGFuZ2VzO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIGlmICghaXNGdW5jdGlvbihzZWxlY3RvcikpIGVycm9ySGFuZGxlcignc2VsZWN0b3JUeXBlJyk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlSGFuZGxlcihoYW5kbGVyKSB7XG4gIGlmICghKGlzRnVuY3Rpb24oaGFuZGxlcikgfHwgaXNPYmplY3QoaGFuZGxlcikpKSBlcnJvckhhbmRsZXIoJ2hhbmRsZXJUeXBlJyk7XG4gIGlmIChpc09iamVjdChoYW5kbGVyKSAmJiBPYmplY3QudmFsdWVzKGhhbmRsZXIpLnNvbWUoZnVuY3Rpb24gKF9oYW5kbGVyKSB7XG4gICAgcmV0dXJuICFpc0Z1bmN0aW9uKF9oYW5kbGVyKTtcbiAgfSkpIGVycm9ySGFuZGxlcignaGFuZGxlcnNUeXBlJyk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlSW5pdGlhbChpbml0aWFsKSB7XG4gIGlmICghaW5pdGlhbCkgZXJyb3JIYW5kbGVyKCdpbml0aWFsSXNSZXF1aXJlZCcpO1xuICBpZiAoIWlzT2JqZWN0KGluaXRpYWwpKSBlcnJvckhhbmRsZXIoJ2luaXRpYWxUeXBlJyk7XG4gIGlmIChpc0VtcHR5KGluaXRpYWwpKSBlcnJvckhhbmRsZXIoJ2luaXRpYWxDb250ZW50Jyk7XG59XG5cbmZ1bmN0aW9uIHRocm93RXJyb3IoZXJyb3JNZXNzYWdlcywgdHlwZSkge1xuICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlc1t0eXBlXSB8fCBlcnJvck1lc3NhZ2VzW1wiZGVmYXVsdFwiXSk7XG59XG5cbnZhciBlcnJvck1lc3NhZ2VzID0ge1xuICBpbml0aWFsSXNSZXF1aXJlZDogJ2luaXRpYWwgc3RhdGUgaXMgcmVxdWlyZWQnLFxuICBpbml0aWFsVHlwZTogJ2luaXRpYWwgc3RhdGUgc2hvdWxkIGJlIGFuIG9iamVjdCcsXG4gIGluaXRpYWxDb250ZW50OiAnaW5pdGlhbCBzdGF0ZSBzaG91bGRuXFwndCBiZSBhbiBlbXB0eSBvYmplY3QnLFxuICBoYW5kbGVyVHlwZTogJ2hhbmRsZXIgc2hvdWxkIGJlIGFuIG9iamVjdCBvciBhIGZ1bmN0aW9uJyxcbiAgaGFuZGxlcnNUeXBlOiAnYWxsIGhhbmRsZXJzIHNob3VsZCBiZSBhIGZ1bmN0aW9ucycsXG4gIHNlbGVjdG9yVHlwZTogJ3NlbGVjdG9yIHNob3VsZCBiZSBhIGZ1bmN0aW9uJyxcbiAgY2hhbmdlVHlwZTogJ3Byb3ZpZGVkIHZhbHVlIG9mIGNoYW5nZXMgc2hvdWxkIGJlIGFuIG9iamVjdCcsXG4gIGNoYW5nZUZpZWxkOiAnaXQgc2VhbXMgeW91IHdhbnQgdG8gY2hhbmdlIGEgZmllbGQgaW4gdGhlIHN0YXRlIHdoaWNoIGlzIG5vdCBzcGVjaWZpZWQgaW4gdGhlIFwiaW5pdGlhbFwiIHN0YXRlJyxcbiAgXCJkZWZhdWx0XCI6ICdhbiB1bmtub3duIGVycm9yIGFjY3VyZWQgaW4gYHN0YXRlLWxvY2FsYCBwYWNrYWdlJ1xufTtcbnZhciBlcnJvckhhbmRsZXIgPSBjdXJyeSh0aHJvd0Vycm9yKShlcnJvck1lc3NhZ2VzKTtcbnZhciB2YWxpZGF0b3JzID0ge1xuICBjaGFuZ2VzOiB2YWxpZGF0ZUNoYW5nZXMsXG4gIHNlbGVjdG9yOiB2YWxpZGF0ZVNlbGVjdG9yLFxuICBoYW5kbGVyOiB2YWxpZGF0ZUhhbmRsZXIsXG4gIGluaXRpYWw6IHZhbGlkYXRlSW5pdGlhbFxufTtcblxuZnVuY3Rpb24gY3JlYXRlKGluaXRpYWwpIHtcbiAgdmFyIGhhbmRsZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YWxpZGF0b3JzLmluaXRpYWwoaW5pdGlhbCk7XG4gIHZhbGlkYXRvcnMuaGFuZGxlcihoYW5kbGVyKTtcbiAgdmFyIHN0YXRlID0ge1xuICAgIGN1cnJlbnQ6IGluaXRpYWxcbiAgfTtcbiAgdmFyIGRpZFVwZGF0ZSA9IGN1cnJ5KGRpZFN0YXRlVXBkYXRlKShzdGF0ZSwgaGFuZGxlcik7XG4gIHZhciB1cGRhdGUgPSBjdXJyeSh1cGRhdGVTdGF0ZSkoc3RhdGUpO1xuICB2YXIgdmFsaWRhdGUgPSBjdXJyeSh2YWxpZGF0b3JzLmNoYW5nZXMpKGluaXRpYWwpO1xuICB2YXIgZ2V0Q2hhbmdlcyA9IGN1cnJ5KGV4dHJhY3RDaGFuZ2VzKShzdGF0ZSk7XG5cbiAgZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gICAgdmFyIHNlbGVjdG9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9O1xuICAgIHZhbGlkYXRvcnMuc2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIHJldHVybiBzZWxlY3RvcihzdGF0ZS5jdXJyZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFN0YXRlKGNhdXNlZENoYW5nZXMpIHtcbiAgICBjb21wb3NlKGRpZFVwZGF0ZSwgdXBkYXRlLCB2YWxpZGF0ZSwgZ2V0Q2hhbmdlcykoY2F1c2VkQ2hhbmdlcyk7XG4gIH1cblxuICByZXR1cm4gW2dldFN0YXRlLCBzZXRTdGF0ZV07XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RDaGFuZ2VzKHN0YXRlLCBjYXVzZWRDaGFuZ2VzKSB7XG4gIHJldHVybiBpc0Z1bmN0aW9uKGNhdXNlZENoYW5nZXMpID8gY2F1c2VkQ2hhbmdlcyhzdGF0ZS5jdXJyZW50KSA6IGNhdXNlZENoYW5nZXM7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVN0YXRlKHN0YXRlLCBjaGFuZ2VzKSB7XG4gIHN0YXRlLmN1cnJlbnQgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgc3RhdGUuY3VycmVudCksIGNoYW5nZXMpO1xuICByZXR1cm4gY2hhbmdlcztcbn1cblxuZnVuY3Rpb24gZGlkU3RhdGVVcGRhdGUoc3RhdGUsIGhhbmRsZXIsIGNoYW5nZXMpIHtcbiAgaXNGdW5jdGlvbihoYW5kbGVyKSA/IGhhbmRsZXIoc3RhdGUuY3VycmVudCkgOiBPYmplY3Qua2V5cyhjaGFuZ2VzKS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgIHZhciBfaGFuZGxlciRmaWVsZDtcblxuICAgIHJldHVybiAoX2hhbmRsZXIkZmllbGQgPSBoYW5kbGVyW2ZpZWxkXSkgPT09IG51bGwgfHwgX2hhbmRsZXIkZmllbGQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9oYW5kbGVyJGZpZWxkLmNhbGwoaGFuZGxlciwgc3RhdGUuY3VycmVudFtmaWVsZF0pO1xuICB9KTtcbiAgcmV0dXJuIGNoYW5nZXM7XG59XG5cbnZhciBpbmRleCA9IHtcbiAgY3JlYXRlOiBjcmVhdGVcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW5kZXg7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY29uZmlnID0ge1xuICBwYXRoczoge1xuICAgIHZzOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9tb25hY28tZWRpdG9yQDAuMzYuMS9taW4vdnMnXG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNvbmZpZztcbiIsICIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbmZ1bmN0aW9uIGN1cnJ5KGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBjdXJyaWVkKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyZ3MubGVuZ3RoID49IGZuLmxlbmd0aCA/IGZuLmFwcGx5KHRoaXMsIGFyZ3MpIDogZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBuZXh0QXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBuZXh0QXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3VycmllZC5hcHBseShfdGhpcywgW10uY29uY2F0KGFyZ3MsIG5leHRBcmdzKSk7XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gY3Vycnk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICByZXR1cm4ge30udG9TdHJpbmcuY2FsbCh2YWx1ZSkuaW5jbHVkZXMoJ09iamVjdCcpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBpc09iamVjdDtcbiIsICIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjdXJyeSA9IHJlcXVpcmUoJy4uL3V0aWxzL2N1cnJ5LmpzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi91dGlscy9pc09iamVjdC5qcycpO1xuXG4vKipcbiAqIHZhbGlkYXRlcyB0aGUgY29uZmlndXJhdGlvbiBvYmplY3QgYW5kIGluZm9ybXMgYWJvdXQgZGVwcmVjYXRpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgLSB0aGUgY29uZmlndXJhdGlvbiBvYmplY3QgXG4gKiBAcmV0dXJuIHtPYmplY3R9IGNvbmZpZyAtIHRoZSB2YWxpZGF0ZWQgY29uZmlndXJhdGlvbiBvYmplY3RcbiAqL1xuXG5mdW5jdGlvbiB2YWxpZGF0ZUNvbmZpZyhjb25maWcpIHtcbiAgaWYgKCFjb25maWcpIGVycm9ySGFuZGxlcignY29uZmlnSXNSZXF1aXJlZCcpO1xuICBpZiAoIWlzT2JqZWN0WydkZWZhdWx0J10oY29uZmlnKSkgZXJyb3JIYW5kbGVyKCdjb25maWdUeXBlJyk7XG5cbiAgaWYgKGNvbmZpZy51cmxzKSB7XG4gICAgaW5mb3JtQWJvdXREZXByZWNhdGlvbigpO1xuICAgIHJldHVybiB7XG4gICAgICBwYXRoczoge1xuICAgICAgICB2czogY29uZmlnLnVybHMubW9uYWNvQmFzZVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZXR1cm4gY29uZmlnO1xufVxuLyoqXG4gKiBsb2dzIGRlcHJlY2F0aW9uIG1lc3NhZ2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGluZm9ybUFib3V0RGVwcmVjYXRpb24oKSB7XG4gIGNvbnNvbGUud2FybihlcnJvck1lc3NhZ2VzLmRlcHJlY2F0aW9uKTtcbn1cblxuZnVuY3Rpb24gdGhyb3dFcnJvcihlcnJvck1lc3NhZ2VzLCB0eXBlKSB7XG4gIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2VzW3R5cGVdIHx8IGVycm9yTWVzc2FnZXNbXCJkZWZhdWx0XCJdKTtcbn1cblxudmFyIGVycm9yTWVzc2FnZXMgPSB7XG4gIGNvbmZpZ0lzUmVxdWlyZWQ6ICd0aGUgY29uZmlndXJhdGlvbiBvYmplY3QgaXMgcmVxdWlyZWQnLFxuICBjb25maWdUeXBlOiAndGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0IHNob3VsZCBiZSBhbiBvYmplY3QnLFxuICBcImRlZmF1bHRcIjogJ2FuIHVua25vd24gZXJyb3IgYWNjdXJlZCBpbiBgQG1vbmFjby1lZGl0b3IvbG9hZGVyYCBwYWNrYWdlJyxcbiAgZGVwcmVjYXRpb246IFwiRGVwcmVjYXRpb24gd2FybmluZyFcXG4gICAgWW91IGFyZSB1c2luZyBkZXByZWNhdGVkIHdheSBvZiBjb25maWd1cmF0aW9uLlxcblxcbiAgICBJbnN0ZWFkIG9mIHVzaW5nXFxuICAgICAgbW9uYWNvLmNvbmZpZyh7IHVybHM6IHsgbW9uYWNvQmFzZTogJy4uLicgfSB9KVxcbiAgICB1c2VcXG4gICAgICBtb25hY28uY29uZmlnKHsgcGF0aHM6IHsgdnM6ICcuLi4nIH0gfSlcXG5cXG4gICAgRm9yIG1vcmUgcGxlYXNlIGNoZWNrIHRoZSBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9zdXJlbi1hdG95YW4vbW9uYWNvLWxvYWRlciNjb25maWdcXG4gIFwiXG59O1xudmFyIGVycm9ySGFuZGxlciA9IGN1cnJ5WydkZWZhdWx0J10odGhyb3dFcnJvcikoZXJyb3JNZXNzYWdlcyk7XG52YXIgdmFsaWRhdG9ycyA9IHtcbiAgY29uZmlnOiB2YWxpZGF0ZUNvbmZpZ1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gdmFsaWRhdG9ycztcbmV4cG9ydHMuZXJyb3JIYW5kbGVyID0gZXJyb3JIYW5kbGVyO1xuZXhwb3J0cy5lcnJvck1lc3NhZ2VzID0gZXJyb3JNZXNzYWdlcztcbiIsICIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjb21wb3NlID0gZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZucyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmbnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gZm5zLnJlZHVjZVJpZ2h0KGZ1bmN0aW9uICh5LCBmKSB7XG4gICAgICByZXR1cm4gZih5KTtcbiAgICB9LCB4KTtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNvbXBvc2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycyA9IHJlcXVpcmUoJy4uL192aXJ0dWFsL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMuanMnKTtcblxuZnVuY3Rpb24gbWVyZ2UodGFyZ2V0LCBzb3VyY2UpIHtcbiAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoc291cmNlW2tleV0gaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgIGlmICh0YXJnZXRba2V5XSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHNvdXJjZVtrZXldLCBtZXJnZSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy5vYmplY3RTcHJlYWQyKF9yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMub2JqZWN0U3ByZWFkMih7fSwgdGFyZ2V0KSwgc291cmNlKTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gbWVyZ2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG4vLyBUaGUgc291cmNlIChoYXMgYmVlbiBjaGFuZ2VkKSBpcyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzU0NjUjaXNzdWVjb21tZW50LTE1Nzg4ODMyNVxudmFyIENBTkNFTEFUSU9OX01FU1NBR0UgPSB7XG4gIHR5cGU6ICdjYW5jZWxhdGlvbicsXG4gIG1zZzogJ29wZXJhdGlvbiBpcyBtYW51YWxseSBjYW5jZWxlZCdcbn07XG5cbmZ1bmN0aW9uIG1ha2VDYW5jZWxhYmxlKHByb21pc2UpIHtcbiAgdmFyIGhhc0NhbmNlbGVkXyA9IGZhbHNlO1xuICB2YXIgd3JhcHBlZFByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHJldHVybiBoYXNDYW5jZWxlZF8gPyByZWplY3QoQ0FOQ0VMQVRJT05fTUVTU0FHRSkgOiByZXNvbHZlKHZhbCk7XG4gICAgfSk7XG4gICAgcHJvbWlzZVtcImNhdGNoXCJdKHJlamVjdCk7XG4gIH0pO1xuICByZXR1cm4gd3JhcHBlZFByb21pc2UuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBoYXNDYW5jZWxlZF8gPSB0cnVlO1xuICB9LCB3cmFwcGVkUHJvbWlzZTtcbn1cblxuZXhwb3J0cy5DQU5DRUxBVElPTl9NRVNTQUdFID0gQ0FOQ0VMQVRJT05fTUVTU0FHRTtcbmV4cG9ydHMuZGVmYXVsdCA9IG1ha2VDYW5jZWxhYmxlO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIF9yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMgPSByZXF1aXJlKCcuLi9fdmlydHVhbC9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLmpzJyk7XG52YXIgc3RhdGUgPSByZXF1aXJlKCdzdGF0ZS1sb2NhbCcpO1xudmFyIGluZGV4ID0gcmVxdWlyZSgnLi4vY29uZmlnL2luZGV4LmpzJyk7XG52YXIgaW5kZXgkMSA9IHJlcXVpcmUoJy4uL3ZhbGlkYXRvcnMvaW5kZXguanMnKTtcbnZhciBjb21wb3NlID0gcmVxdWlyZSgnLi4vdXRpbHMvY29tcG9zZS5qcycpO1xudmFyIGRlZXBNZXJnZSA9IHJlcXVpcmUoJy4uL3V0aWxzL2RlZXBNZXJnZS5qcycpO1xudmFyIG1ha2VDYW5jZWxhYmxlID0gcmVxdWlyZSgnLi4vdXRpbHMvbWFrZUNhbmNlbGFibGUuanMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0TGVnYWN5IChlKSB7IHJldHVybiBlICYmIHR5cGVvZiBlID09PSAnb2JqZWN0JyAmJiAnZGVmYXVsdCcgaW4gZSA/IGUgOiB7ICdkZWZhdWx0JzogZSB9OyB9XG5cbnZhciBzdGF0ZV9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3koc3RhdGUpO1xuXG4vKiogdGhlIGxvY2FsIHN0YXRlIG9mIHRoZSBtb2R1bGUgKi9cblxudmFyIF9zdGF0ZSRjcmVhdGUgPSBzdGF0ZV9fZGVmYXVsdFsnZGVmYXVsdCddLmNyZWF0ZSh7XG4gIGNvbmZpZzogaW5kZXhbJ2RlZmF1bHQnXSxcbiAgaXNJbml0aWFsaXplZDogZmFsc2UsXG4gIHJlc29sdmU6IG51bGwsXG4gIHJlamVjdDogbnVsbCxcbiAgbW9uYWNvOiBudWxsXG59KSxcbiAgICBfc3RhdGUkY3JlYXRlMiA9IF9yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMuc2xpY2VkVG9BcnJheShfc3RhdGUkY3JlYXRlLCAyKSxcbiAgICBnZXRTdGF0ZSA9IF9zdGF0ZSRjcmVhdGUyWzBdLFxuICAgIHNldFN0YXRlID0gX3N0YXRlJGNyZWF0ZTJbMV07XG4vKipcbiAqIHNldCB0aGUgbG9hZGVyIGNvbmZpZ3VyYXRpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgLSB0aGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAqL1xuXG5cbmZ1bmN0aW9uIGNvbmZpZyhnbG9iYWxDb25maWcpIHtcbiAgdmFyIF92YWxpZGF0b3JzJGNvbmZpZyA9IGluZGV4JDFbJ2RlZmF1bHQnXS5jb25maWcoZ2xvYmFsQ29uZmlnKSxcbiAgICAgIG1vbmFjbyA9IF92YWxpZGF0b3JzJGNvbmZpZy5tb25hY28sXG4gICAgICBjb25maWcgPSBfcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLm9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF92YWxpZGF0b3JzJGNvbmZpZywgW1wibW9uYWNvXCJdKTtcblxuICBzZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnOiBkZWVwTWVyZ2VbJ2RlZmF1bHQnXShzdGF0ZS5jb25maWcsIGNvbmZpZyksXG4gICAgICBtb25hY286IG1vbmFjb1xuICAgIH07XG4gIH0pO1xufVxuLyoqXG4gKiBoYW5kbGVzIHRoZSBpbml0aWFsaXphdGlvbiBvZiB0aGUgbW9uYWNvLWVkaXRvclxuICogQHJldHVybiB7UHJvbWlzZX0gLSByZXR1cm5zIGFuIGluc3RhbmNlIG9mIG1vbmFjbyAod2l0aCBhIGNhbmNlbGFibGUgcHJvbWlzZSlcbiAqL1xuXG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIHZhciBzdGF0ZSA9IGdldFN0YXRlKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIG1vbmFjbyA9IF9yZWYubW9uYWNvLFxuICAgICAgICBpc0luaXRpYWxpemVkID0gX3JlZi5pc0luaXRpYWxpemVkLFxuICAgICAgICByZXNvbHZlID0gX3JlZi5yZXNvbHZlO1xuICAgIHJldHVybiB7XG4gICAgICBtb25hY286IG1vbmFjbyxcbiAgICAgIGlzSW5pdGlhbGl6ZWQ6IGlzSW5pdGlhbGl6ZWQsXG4gICAgICByZXNvbHZlOiByZXNvbHZlXG4gICAgfTtcbiAgfSk7XG5cbiAgaWYgKCFzdGF0ZS5pc0luaXRpYWxpemVkKSB7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgaXNJbml0aWFsaXplZDogdHJ1ZVxuICAgIH0pO1xuXG4gICAgaWYgKHN0YXRlLm1vbmFjbykge1xuICAgICAgc3RhdGUucmVzb2x2ZShzdGF0ZS5tb25hY28pO1xuICAgICAgcmV0dXJuIG1ha2VDYW5jZWxhYmxlWydkZWZhdWx0J10od3JhcHBlclByb21pc2UpO1xuICAgIH1cblxuICAgIGlmICh3aW5kb3cubW9uYWNvICYmIHdpbmRvdy5tb25hY28uZWRpdG9yKSB7XG4gICAgICBzdG9yZU1vbmFjb0luc3RhbmNlKHdpbmRvdy5tb25hY28pO1xuICAgICAgc3RhdGUucmVzb2x2ZSh3aW5kb3cubW9uYWNvKTtcbiAgICAgIHJldHVybiBtYWtlQ2FuY2VsYWJsZVsnZGVmYXVsdCddKHdyYXBwZXJQcm9taXNlKTtcbiAgICB9XG5cbiAgICBjb21wb3NlWydkZWZhdWx0J10oaW5qZWN0U2NyaXB0cywgZ2V0TW9uYWNvTG9hZGVyU2NyaXB0KShjb25maWd1cmVMb2FkZXIpO1xuICB9XG5cbiAgcmV0dXJuIG1ha2VDYW5jZWxhYmxlWydkZWZhdWx0J10od3JhcHBlclByb21pc2UpO1xufVxuLyoqXG4gKiBpbmplY3RzIHByb3ZpZGVkIHNjcmlwdHMgaW50byB0aGUgZG9jdW1lbnQuYm9keVxuICogQHBhcmFtIHtPYmplY3R9IHNjcmlwdCAtIGFuIEhUTUwgc2NyaXB0IGVsZW1lbnRcbiAqIEByZXR1cm4ge09iamVjdH0gLSB0aGUgaW5qZWN0ZWQgSFRNTCBzY3JpcHQgZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gaW5qZWN0U2NyaXB0cyhzY3JpcHQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn1cbi8qKlxuICogY3JlYXRlcyBhbiBIVE1MIHNjcmlwdCBlbGVtZW50IHdpdGgvd2l0aG91dCBwcm92aWRlZCBzcmNcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3JjXSAtIHRoZSBzb3VyY2UgcGF0aCBvZiB0aGUgc2NyaXB0XG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gdGhlIGNyZWF0ZWQgSFRNTCBzY3JpcHQgZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlU2NyaXB0KHNyYykge1xuICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gIHJldHVybiBzcmMgJiYgKHNjcmlwdC5zcmMgPSBzcmMpLCBzY3JpcHQ7XG59XG4vKipcbiAqIGNyZWF0ZXMgYW4gSFRNTCBzY3JpcHQgZWxlbWVudCB3aXRoIHRoZSBtb25hY28gbG9hZGVyIHNyY1xuICogQHJldHVybiB7T2JqZWN0fSAtIHRoZSBjcmVhdGVkIEhUTUwgc2NyaXB0IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldE1vbmFjb0xvYWRlclNjcmlwdChjb25maWd1cmVMb2FkZXIpIHtcbiAgdmFyIHN0YXRlID0gZ2V0U3RhdGUoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgdmFyIGNvbmZpZyA9IF9yZWYyLmNvbmZpZyxcbiAgICAgICAgcmVqZWN0ID0gX3JlZjIucmVqZWN0O1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgIHJlamVjdDogcmVqZWN0XG4gICAgfTtcbiAgfSk7XG4gIHZhciBsb2FkZXJTY3JpcHQgPSBjcmVhdGVTY3JpcHQoXCJcIi5jb25jYXQoc3RhdGUuY29uZmlnLnBhdGhzLnZzLCBcIi9sb2FkZXIuanNcIikpO1xuXG4gIGxvYWRlclNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNvbmZpZ3VyZUxvYWRlcigpO1xuICB9O1xuXG4gIGxvYWRlclNjcmlwdC5vbmVycm9yID0gc3RhdGUucmVqZWN0O1xuICByZXR1cm4gbG9hZGVyU2NyaXB0O1xufVxuLyoqXG4gKiBjb25maWd1cmVzIHRoZSBtb25hY28gbG9hZGVyXG4gKi9cblxuXG5mdW5jdGlvbiBjb25maWd1cmVMb2FkZXIoKSB7XG4gIHZhciBzdGF0ZSA9IGdldFN0YXRlKGZ1bmN0aW9uIChfcmVmMykge1xuICAgIHZhciBjb25maWcgPSBfcmVmMy5jb25maWcsXG4gICAgICAgIHJlc29sdmUgPSBfcmVmMy5yZXNvbHZlLFxuICAgICAgICByZWplY3QgPSBfcmVmMy5yZWplY3Q7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgIHJlamVjdDogcmVqZWN0XG4gICAgfTtcbiAgfSk7XG4gIHZhciByZXF1aXJlID0gd2luZG93LnJlcXVpcmU7XG5cbiAgcmVxdWlyZS5jb25maWcoc3RhdGUuY29uZmlnKTtcblxuICByZXF1aXJlKFsndnMvZWRpdG9yL2VkaXRvci5tYWluJ10sIGZ1bmN0aW9uIChtb25hY28pIHtcbiAgICBzdG9yZU1vbmFjb0luc3RhbmNlKG1vbmFjbyk7XG4gICAgc3RhdGUucmVzb2x2ZShtb25hY28pO1xuICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICBzdGF0ZS5yZWplY3QoZXJyb3IpO1xuICB9KTtcbn1cbi8qKlxuICogc3RvcmUgbW9uYWNvIGluc3RhbmNlIGluIGxvY2FsIHN0YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBzdG9yZU1vbmFjb0luc3RhbmNlKG1vbmFjbykge1xuICBpZiAoIWdldFN0YXRlKCkubW9uYWNvKSB7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgbW9uYWNvOiBtb25hY29cbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBpbnRlcm5hbCBoZWxwZXIgZnVuY3Rpb25cbiAqIGV4dHJhY3RzIHN0b3JlZCBtb25hY28gaW5zdGFuY2VcbiAqIEByZXR1cm4ge09iamVjdHxudWxsfSAtIHRoZSBtb25hY28gaW5zdGFuY2VcbiAqL1xuXG5cbmZ1bmN0aW9uIF9fZ2V0TW9uYWNvSW5zdGFuY2UoKSB7XG4gIHJldHVybiBnZXRTdGF0ZShmdW5jdGlvbiAoX3JlZjQpIHtcbiAgICB2YXIgbW9uYWNvID0gX3JlZjQubW9uYWNvO1xuICAgIHJldHVybiBtb25hY287XG4gIH0pO1xufVxuXG52YXIgd3JhcHBlclByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gIHJldHVybiBzZXRTdGF0ZSh7XG4gICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICByZWplY3Q6IHJlamVjdFxuICB9KTtcbn0pO1xudmFyIGxvYWRlciA9IHtcbiAgY29uZmlnOiBjb25maWcsXG4gIGluaXQ6IGluaXQsXG4gIF9fZ2V0TW9uYWNvSW5zdGFuY2U6IF9fZ2V0TW9uYWNvSW5zdGFuY2Vcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGxvYWRlcjtcbiIsICIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBpbmRleCA9IHJlcXVpcmUoJy4vbG9hZGVyL2luZGV4LmpzJyk7XG5cblxuXG5leHBvcnRzLmRlZmF1bHQgPSBpbmRleFsnZGVmYXVsdCddO1xuIiwgIi8vIEdldHMgYWxsIG5vbi1idWlsdGluIHByb3BlcnRpZXMgdXAgdGhlIHByb3RvdHlwZSBjaGFpbi5cbmNvbnN0IGdldEFsbFByb3BlcnRpZXMgPSBvYmplY3QgPT4ge1xuXHRjb25zdCBwcm9wZXJ0aWVzID0gbmV3IFNldCgpO1xuXG5cdGRvIHtcblx0XHRmb3IgKGNvbnN0IGtleSBvZiBSZWZsZWN0Lm93bktleXMob2JqZWN0KSkge1xuXHRcdFx0cHJvcGVydGllcy5hZGQoW29iamVjdCwga2V5XSk7XG5cdFx0fVxuXHR9IHdoaWxlICgob2JqZWN0ID0gUmVmbGVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpKSAmJiBvYmplY3QgIT09IE9iamVjdC5wcm90b3R5cGUpO1xuXG5cdHJldHVybiBwcm9wZXJ0aWVzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXV0b0JpbmQoc2VsZiwge2luY2x1ZGUsIGV4Y2x1ZGV9ID0ge30pIHtcblx0Y29uc3QgZmlsdGVyID0ga2V5ID0+IHtcblx0XHRjb25zdCBtYXRjaCA9IHBhdHRlcm4gPT4gdHlwZW9mIHBhdHRlcm4gPT09ICdzdHJpbmcnID8ga2V5ID09PSBwYXR0ZXJuIDogcGF0dGVybi50ZXN0KGtleSk7XG5cblx0XHRpZiAoaW5jbHVkZSkge1xuXHRcdFx0cmV0dXJuIGluY2x1ZGUuc29tZShtYXRjaCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgdW5pY29ybi9uby1hcnJheS1jYWxsYmFjay1yZWZlcmVuY2Vcblx0XHR9XG5cblx0XHRpZiAoZXhjbHVkZSkge1xuXHRcdFx0cmV0dXJuICFleGNsdWRlLnNvbWUobWF0Y2gpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHVuaWNvcm4vbm8tYXJyYXktY2FsbGJhY2stcmVmZXJlbmNlXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cblx0Zm9yIChjb25zdCBbb2JqZWN0LCBrZXldIG9mIGdldEFsbFByb3BlcnRpZXMoc2VsZi5jb25zdHJ1Y3Rvci5wcm90b3R5cGUpKSB7XG5cdFx0aWYgKGtleSA9PT0gJ2NvbnN0cnVjdG9yJyB8fCAhZmlsdGVyKGtleSkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGRlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIGtleSk7XG5cdFx0aWYgKGRlc2NyaXB0b3IgJiYgdHlwZW9mIGRlc2NyaXB0b3IudmFsdWUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHNlbGZba2V5XSA9IHNlbGZba2V5XS5iaW5kKHNlbGYpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzZWxmO1xufVxuIiwgImZ1bmN0aW9uIG5vb3AoKSB7IH1cbmNvbnN0IGlkZW50aXR5ID0geCA9PiB4O1xuZnVuY3Rpb24gYXNzaWduKHRhciwgc3JjKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGZvciAoY29uc3QgayBpbiBzcmMpXG4gICAgICAgIHRhcltrXSA9IHNyY1trXTtcbiAgICByZXR1cm4gdGFyO1xufVxuLy8gQWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS90aGVuL2lzLXByb21pc2UvYmxvYi9tYXN0ZXIvaW5kZXguanNcbi8vIERpc3RyaWJ1dGVkIHVuZGVyIE1JVCBMaWNlbnNlIGh0dHBzOi8vZ2l0aHViLmNvbS90aGVuL2lzLXByb21pc2UvYmxvYi9tYXN0ZXIvTElDRU5TRVxuZnVuY3Rpb24gaXNfcHJvbWlzZSh2YWx1ZSkge1xuICAgIHJldHVybiAhIXZhbHVlICYmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBhZGRfbG9jYXRpb24oZWxlbWVudCwgZmlsZSwgbGluZSwgY29sdW1uLCBjaGFyKSB7XG4gICAgZWxlbWVudC5fX3N2ZWx0ZV9tZXRhID0ge1xuICAgICAgICBsb2M6IHsgZmlsZSwgbGluZSwgY29sdW1uLCBjaGFyIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gcnVuKGZuKSB7XG4gICAgcmV0dXJuIGZuKCk7XG59XG5mdW5jdGlvbiBibGFua19vYmplY3QoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCk7XG59XG5mdW5jdGlvbiBydW5fYWxsKGZucykge1xuICAgIGZucy5mb3JFYWNoKHJ1bik7XG59XG5mdW5jdGlvbiBpc19mdW5jdGlvbih0aGluZykge1xuICAgIHJldHVybiB0eXBlb2YgdGhpbmcgPT09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBzYWZlX25vdF9lcXVhbChhLCBiKSB7XG4gICAgcmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGIgfHwgKChhICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JykgfHwgdHlwZW9mIGEgPT09ICdmdW5jdGlvbicpO1xufVxubGV0IHNyY191cmxfZXF1YWxfYW5jaG9yO1xuZnVuY3Rpb24gc3JjX3VybF9lcXVhbChlbGVtZW50X3NyYywgdXJsKSB7XG4gICAgaWYgKCFzcmNfdXJsX2VxdWFsX2FuY2hvcikge1xuICAgICAgICBzcmNfdXJsX2VxdWFsX2FuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB9XG4gICAgc3JjX3VybF9lcXVhbF9hbmNob3IuaHJlZiA9IHVybDtcbiAgICByZXR1cm4gZWxlbWVudF9zcmMgPT09IHNyY191cmxfZXF1YWxfYW5jaG9yLmhyZWY7XG59XG5mdW5jdGlvbiBub3RfZXF1YWwoYSwgYikge1xuICAgIHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiO1xufVxuZnVuY3Rpb24gaXNfZW1wdHkob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID09PSAwO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVfc3RvcmUoc3RvcmUsIG5hbWUpIHtcbiAgICBpZiAoc3RvcmUgIT0gbnVsbCAmJiB0eXBlb2Ygc3RvcmUuc3Vic2NyaWJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJyR7bmFtZX0nIGlzIG5vdCBhIHN0b3JlIHdpdGggYSAnc3Vic2NyaWJlJyBtZXRob2RgKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzdWJzY3JpYmUoc3RvcmUsIC4uLmNhbGxiYWNrcykge1xuICAgIGlmIChzdG9yZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBub29wO1xuICAgIH1cbiAgICBjb25zdCB1bnN1YiA9IHN0b3JlLnN1YnNjcmliZSguLi5jYWxsYmFja3MpO1xuICAgIHJldHVybiB1bnN1Yi51bnN1YnNjcmliZSA/ICgpID0+IHVuc3ViLnVuc3Vic2NyaWJlKCkgOiB1bnN1Yjtcbn1cbmZ1bmN0aW9uIGdldF9zdG9yZV92YWx1ZShzdG9yZSkge1xuICAgIGxldCB2YWx1ZTtcbiAgICBzdWJzY3JpYmUoc3RvcmUsIF8gPT4gdmFsdWUgPSBfKSgpO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGNvbXBvbmVudF9zdWJzY3JpYmUoY29tcG9uZW50LCBzdG9yZSwgY2FsbGJhY2spIHtcbiAgICBjb21wb25lbnQuJCQub25fZGVzdHJveS5wdXNoKHN1YnNjcmliZShzdG9yZSwgY2FsbGJhY2spKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9zbG90KGRlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZm4pIHtcbiAgICBpZiAoZGVmaW5pdGlvbikge1xuICAgICAgICBjb25zdCBzbG90X2N0eCA9IGdldF9zbG90X2NvbnRleHQoZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBmbik7XG4gICAgICAgIHJldHVybiBkZWZpbml0aW9uWzBdKHNsb3RfY3R4KTtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRfc2xvdF9jb250ZXh0KGRlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZm4pIHtcbiAgICByZXR1cm4gZGVmaW5pdGlvblsxXSAmJiBmblxuICAgICAgICA/IGFzc2lnbigkJHNjb3BlLmN0eC5zbGljZSgpLCBkZWZpbml0aW9uWzFdKGZuKGN0eCkpKVxuICAgICAgICA6ICQkc2NvcGUuY3R4O1xufVxuZnVuY3Rpb24gZ2V0X3Nsb3RfY2hhbmdlcyhkZWZpbml0aW9uLCAkJHNjb3BlLCBkaXJ0eSwgZm4pIHtcbiAgICBpZiAoZGVmaW5pdGlvblsyXSAmJiBmbikge1xuICAgICAgICBjb25zdCBsZXRzID0gZGVmaW5pdGlvblsyXShmbihkaXJ0eSkpO1xuICAgICAgICBpZiAoJCRzY29wZS5kaXJ0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbGV0cztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGxldHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25zdCBtZXJnZWQgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IE1hdGgubWF4KCQkc2NvcGUuZGlydHkubGVuZ3RoLCBsZXRzLmxlbmd0aCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgbWVyZ2VkW2ldID0gJCRzY29wZS5kaXJ0eVtpXSB8IGxldHNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWVyZ2VkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAkJHNjb3BlLmRpcnR5IHwgbGV0cztcbiAgICB9XG4gICAgcmV0dXJuICQkc2NvcGUuZGlydHk7XG59XG5mdW5jdGlvbiB1cGRhdGVfc2xvdF9iYXNlKHNsb3QsIHNsb3RfZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBzbG90X2NoYW5nZXMsIGdldF9zbG90X2NvbnRleHRfZm4pIHtcbiAgICBpZiAoc2xvdF9jaGFuZ2VzKSB7XG4gICAgICAgIGNvbnN0IHNsb3RfY29udGV4dCA9IGdldF9zbG90X2NvbnRleHQoc2xvdF9kZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGdldF9zbG90X2NvbnRleHRfZm4pO1xuICAgICAgICBzbG90LnAoc2xvdF9jb250ZXh0LCBzbG90X2NoYW5nZXMpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHVwZGF0ZV9zbG90KHNsb3QsIHNsb3RfZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBkaXJ0eSwgZ2V0X3Nsb3RfY2hhbmdlc19mbiwgZ2V0X3Nsb3RfY29udGV4dF9mbikge1xuICAgIGNvbnN0IHNsb3RfY2hhbmdlcyA9IGdldF9zbG90X2NoYW5nZXMoc2xvdF9kZWZpbml0aW9uLCAkJHNjb3BlLCBkaXJ0eSwgZ2V0X3Nsb3RfY2hhbmdlc19mbik7XG4gICAgdXBkYXRlX3Nsb3RfYmFzZShzbG90LCBzbG90X2RlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgc2xvdF9jaGFuZ2VzLCBnZXRfc2xvdF9jb250ZXh0X2ZuKTtcbn1cbmZ1bmN0aW9uIGdldF9hbGxfZGlydHlfZnJvbV9zY29wZSgkJHNjb3BlKSB7XG4gICAgaWYgKCQkc2NvcGUuY3R4Lmxlbmd0aCA+IDMyKSB7XG4gICAgICAgIGNvbnN0IGRpcnR5ID0gW107XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9ICQkc2NvcGUuY3R4Lmxlbmd0aCAvIDMyO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkaXJ0eVtpXSA9IC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaXJ0eTtcbiAgICB9XG4gICAgcmV0dXJuIC0xO1xufVxuZnVuY3Rpb24gZXhjbHVkZV9pbnRlcm5hbF9wcm9wcyhwcm9wcykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3QgayBpbiBwcm9wcylcbiAgICAgICAgaWYgKGtbMF0gIT09ICckJylcbiAgICAgICAgICAgIHJlc3VsdFtrXSA9IHByb3BzW2tdO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBjb21wdXRlX3Jlc3RfcHJvcHMocHJvcHMsIGtleXMpIHtcbiAgICBjb25zdCByZXN0ID0ge307XG4gICAga2V5cyA9IG5ldyBTZXQoa2V5cyk7XG4gICAgZm9yIChjb25zdCBrIGluIHByb3BzKVxuICAgICAgICBpZiAoIWtleXMuaGFzKGspICYmIGtbMF0gIT09ICckJylcbiAgICAgICAgICAgIHJlc3Rba10gPSBwcm9wc1trXTtcbiAgICByZXR1cm4gcmVzdDtcbn1cbmZ1bmN0aW9uIGNvbXB1dGVfc2xvdHMoc2xvdHMpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzbG90cykge1xuICAgICAgICByZXN1bHRba2V5XSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBvbmNlKGZuKSB7XG4gICAgbGV0IHJhbiA9IGZhbHNlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICBpZiAocmFuKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICByYW4gPSB0cnVlO1xuICAgICAgICBmbi5jYWxsKHRoaXMsIC4uLmFyZ3MpO1xuICAgIH07XG59XG5mdW5jdGlvbiBudWxsX3RvX2VtcHR5KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xufVxuZnVuY3Rpb24gc2V0X3N0b3JlX3ZhbHVlKHN0b3JlLCByZXQsIHZhbHVlKSB7XG4gICAgc3RvcmUuc2V0KHZhbHVlKTtcbiAgICByZXR1cm4gcmV0O1xufVxuY29uc3QgaGFzX3Byb3AgPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbmZ1bmN0aW9uIGFjdGlvbl9kZXN0cm95ZXIoYWN0aW9uX3Jlc3VsdCkge1xuICAgIHJldHVybiBhY3Rpb25fcmVzdWx0ICYmIGlzX2Z1bmN0aW9uKGFjdGlvbl9yZXN1bHQuZGVzdHJveSkgPyBhY3Rpb25fcmVzdWx0LmRlc3Ryb3kgOiBub29wO1xufVxuZnVuY3Rpb24gc3BsaXRfY3NzX3VuaXQodmFsdWUpIHtcbiAgICBjb25zdCBzcGxpdCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUubWF0Y2goL15cXHMqKC0/W1xcZC5dKykoW15cXHNdKilcXHMqJC8pO1xuICAgIHJldHVybiBzcGxpdCA/IFtwYXJzZUZsb2F0KHNwbGl0WzFdKSwgc3BsaXRbMl0gfHwgJ3B4J10gOiBbdmFsdWUsICdweCddO1xufVxuY29uc3QgY29udGVudGVkaXRhYmxlX3RydXRoeV92YWx1ZXMgPSBbJycsIHRydWUsIDEsICd0cnVlJywgJ2NvbnRlbnRlZGl0YWJsZSddO1xuXG5jb25zdCBpc19jbGllbnQgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbmxldCBub3cgPSBpc19jbGllbnRcbiAgICA/ICgpID0+IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKVxuICAgIDogKCkgPT4gRGF0ZS5ub3coKTtcbmxldCByYWYgPSBpc19jbGllbnQgPyBjYiA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2IpIDogbm9vcDtcbi8vIHVzZWQgaW50ZXJuYWxseSBmb3IgdGVzdGluZ1xuZnVuY3Rpb24gc2V0X25vdyhmbikge1xuICAgIG5vdyA9IGZuO1xufVxuZnVuY3Rpb24gc2V0X3JhZihmbikge1xuICAgIHJhZiA9IGZuO1xufVxuXG5jb25zdCB0YXNrcyA9IG5ldyBTZXQoKTtcbmZ1bmN0aW9uIHJ1bl90YXNrcyhub3cpIHtcbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBpZiAoIXRhc2suYyhub3cpKSB7XG4gICAgICAgICAgICB0YXNrcy5kZWxldGUodGFzayk7XG4gICAgICAgICAgICB0YXNrLmYoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0YXNrcy5zaXplICE9PSAwKVxuICAgICAgICByYWYocnVuX3Rhc2tzKTtcbn1cbi8qKlxuICogRm9yIHRlc3RpbmcgcHVycG9zZXMgb25seSFcbiAqL1xuZnVuY3Rpb24gY2xlYXJfbG9vcHMoKSB7XG4gICAgdGFza3MuY2xlYXIoKTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB0YXNrIHRoYXQgcnVucyBvbiBlYWNoIHJhZiBmcmFtZVxuICogdW50aWwgaXQgcmV0dXJucyBhIGZhbHN5IHZhbHVlIG9yIGlzIGFib3J0ZWRcbiAqL1xuZnVuY3Rpb24gbG9vcChjYWxsYmFjaykge1xuICAgIGxldCB0YXNrO1xuICAgIGlmICh0YXNrcy5zaXplID09PSAwKVxuICAgICAgICByYWYocnVuX3Rhc2tzKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9taXNlOiBuZXcgUHJvbWlzZShmdWxmaWxsID0+IHtcbiAgICAgICAgICAgIHRhc2tzLmFkZCh0YXNrID0geyBjOiBjYWxsYmFjaywgZjogZnVsZmlsbCB9KTtcbiAgICAgICAgfSksXG4gICAgICAgIGFib3J0KCkge1xuICAgICAgICAgICAgdGFza3MuZGVsZXRlKHRhc2spO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuY29uc3QgZ2xvYmFscyA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgID8gd2luZG93XG4gICAgOiB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyBnbG9iYWxUaGlzXG4gICAgICAgIDogZ2xvYmFsKTtcblxuLyoqXG4gKiBSZXNpemUgb2JzZXJ2ZXIgc2luZ2xldG9uLlxuICogT25lIGxpc3RlbmVyIHBlciBlbGVtZW50IG9ubHkhXG4gKiBodHRwczovL2dyb3Vwcy5nb29nbGUuY29tL2EvY2hyb21pdW0ub3JnL2cvYmxpbmstZGV2L2MvejZpZW5PTlViNUEvbS9GNS1WY1VadEJBQUpcbiAqL1xuY2xhc3MgUmVzaXplT2JzZXJ2ZXJTaW5nbGV0b24ge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzID0gJ1dlYWtNYXAnIGluIGdsb2JhbHMgPyBuZXcgV2Vha01hcCgpIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgICBvYnNlcnZlKGVsZW1lbnQsIGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuX2xpc3RlbmVycy5zZXQoZWxlbWVudCwgbGlzdGVuZXIpO1xuICAgICAgICB0aGlzLl9nZXRPYnNlcnZlcigpLm9ic2VydmUoZWxlbWVudCwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2xpc3RlbmVycy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLl9vYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7IC8vIHRoaXMgbGluZSBjYW4gcHJvYmFibHkgYmUgcmVtb3ZlZFxuICAgICAgICB9O1xuICAgIH1cbiAgICBfZ2V0T2JzZXJ2ZXIoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIChfYSA9IHRoaXMuX29ic2VydmVyKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAodGhpcy5fb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgICAgICAgICAgIFJlc2l6ZU9ic2VydmVyU2luZ2xldG9uLmVudHJpZXMuc2V0KGVudHJ5LnRhcmdldCwgZW50cnkpO1xuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuX2xpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hKGVudHJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH1cbn1cbi8vIE5lZWRzIHRvIGJlIHdyaXR0ZW4gbGlrZSB0aGlzIHRvIHBhc3MgdGhlIHRyZWUtc2hha2UtdGVzdFxuUmVzaXplT2JzZXJ2ZXJTaW5nbGV0b24uZW50cmllcyA9ICdXZWFrTWFwJyBpbiBnbG9iYWxzID8gbmV3IFdlYWtNYXAoKSA6IHVuZGVmaW5lZDtcblxuLy8gVHJhY2sgd2hpY2ggbm9kZXMgYXJlIGNsYWltZWQgZHVyaW5nIGh5ZHJhdGlvbi4gVW5jbGFpbWVkIG5vZGVzIGNhbiB0aGVuIGJlIHJlbW92ZWQgZnJvbSB0aGUgRE9NXG4vLyBhdCB0aGUgZW5kIG9mIGh5ZHJhdGlvbiB3aXRob3V0IHRvdWNoaW5nIHRoZSByZW1haW5pbmcgbm9kZXMuXG5sZXQgaXNfaHlkcmF0aW5nID0gZmFsc2U7XG5mdW5jdGlvbiBzdGFydF9oeWRyYXRpbmcoKSB7XG4gICAgaXNfaHlkcmF0aW5nID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGVuZF9oeWRyYXRpbmcoKSB7XG4gICAgaXNfaHlkcmF0aW5nID0gZmFsc2U7XG59XG5mdW5jdGlvbiB1cHBlcl9ib3VuZChsb3csIGhpZ2gsIGtleSwgdmFsdWUpIHtcbiAgICAvLyBSZXR1cm4gZmlyc3QgaW5kZXggb2YgdmFsdWUgbGFyZ2VyIHRoYW4gaW5wdXQgdmFsdWUgaW4gdGhlIHJhbmdlIFtsb3csIGhpZ2gpXG4gICAgd2hpbGUgKGxvdyA8IGhpZ2gpIHtcbiAgICAgICAgY29uc3QgbWlkID0gbG93ICsgKChoaWdoIC0gbG93KSA+PiAxKTtcbiAgICAgICAgaWYgKGtleShtaWQpIDw9IHZhbHVlKSB7XG4gICAgICAgICAgICBsb3cgPSBtaWQgKyAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaGlnaCA9IG1pZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbG93O1xufVxuZnVuY3Rpb24gaW5pdF9oeWRyYXRlKHRhcmdldCkge1xuICAgIGlmICh0YXJnZXQuaHlkcmF0ZV9pbml0KVxuICAgICAgICByZXR1cm47XG4gICAgdGFyZ2V0Lmh5ZHJhdGVfaW5pdCA9IHRydWU7XG4gICAgLy8gV2Uga25vdyB0aGF0IGFsbCBjaGlsZHJlbiBoYXZlIGNsYWltX29yZGVyIHZhbHVlcyBzaW5jZSB0aGUgdW5jbGFpbWVkIGhhdmUgYmVlbiBkZXRhY2hlZCBpZiB0YXJnZXQgaXMgbm90IDxoZWFkPlxuICAgIGxldCBjaGlsZHJlbiA9IHRhcmdldC5jaGlsZE5vZGVzO1xuICAgIC8vIElmIHRhcmdldCBpcyA8aGVhZD4sIHRoZXJlIG1heSBiZSBjaGlsZHJlbiB3aXRob3V0IGNsYWltX29yZGVyXG4gICAgaWYgKHRhcmdldC5ub2RlTmFtZSA9PT0gJ0hFQUQnKSB7XG4gICAgICAgIGNvbnN0IG15Q2hpbGRyZW4gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKG5vZGUuY2xhaW1fb3JkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG15Q2hpbGRyZW4ucHVzaChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjaGlsZHJlbiA9IG15Q2hpbGRyZW47XG4gICAgfVxuICAgIC8qXG4gICAgKiBSZW9yZGVyIGNsYWltZWQgY2hpbGRyZW4gb3B0aW1hbGx5LlxuICAgICogV2UgY2FuIHJlb3JkZXIgY2xhaW1lZCBjaGlsZHJlbiBvcHRpbWFsbHkgYnkgZmluZGluZyB0aGUgbG9uZ2VzdCBzdWJzZXF1ZW5jZSBvZlxuICAgICogbm9kZXMgdGhhdCBhcmUgYWxyZWFkeSBjbGFpbWVkIGluIG9yZGVyIGFuZCBvbmx5IG1vdmluZyB0aGUgcmVzdC4gVGhlIGxvbmdlc3RcbiAgICAqIHN1YnNlcXVlbmNlIG9mIG5vZGVzIHRoYXQgYXJlIGNsYWltZWQgaW4gb3JkZXIgY2FuIGJlIGZvdW5kIGJ5XG4gICAgKiBjb21wdXRpbmcgdGhlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSBvZiAuY2xhaW1fb3JkZXIgdmFsdWVzLlxuICAgICpcbiAgICAqIFRoaXMgYWxnb3JpdGhtIGlzIG9wdGltYWwgaW4gZ2VuZXJhdGluZyB0aGUgbGVhc3QgYW1vdW50IG9mIHJlb3JkZXIgb3BlcmF0aW9uc1xuICAgICogcG9zc2libGUuXG4gICAgKlxuICAgICogUHJvb2Y6XG4gICAgKiBXZSBrbm93IHRoYXQsIGdpdmVuIGEgc2V0IG9mIHJlb3JkZXJpbmcgb3BlcmF0aW9ucywgdGhlIG5vZGVzIHRoYXQgZG8gbm90IG1vdmVcbiAgICAqIGFsd2F5cyBmb3JtIGFuIGluY3JlYXNpbmcgc3Vic2VxdWVuY2UsIHNpbmNlIHRoZXkgZG8gbm90IG1vdmUgYW1vbmcgZWFjaCBvdGhlclxuICAgICogbWVhbmluZyB0aGF0IHRoZXkgbXVzdCBiZSBhbHJlYWR5IG9yZGVyZWQgYW1vbmcgZWFjaCBvdGhlci4gVGh1cywgdGhlIG1heGltYWxcbiAgICAqIHNldCBvZiBub2RlcyB0aGF0IGRvIG5vdCBtb3ZlIGZvcm0gYSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2UuXG4gICAgKi9cbiAgICAvLyBDb21wdXRlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZVxuICAgIC8vIG06IHN1YnNlcXVlbmNlIGxlbmd0aCBqID0+IGluZGV4IGsgb2Ygc21hbGxlc3QgdmFsdWUgdGhhdCBlbmRzIGFuIGluY3JlYXNpbmcgc3Vic2VxdWVuY2Ugb2YgbGVuZ3RoIGpcbiAgICBjb25zdCBtID0gbmV3IEludDMyQXJyYXkoY2hpbGRyZW4ubGVuZ3RoICsgMSk7XG4gICAgLy8gUHJlZGVjZXNzb3IgaW5kaWNlcyArIDFcbiAgICBjb25zdCBwID0gbmV3IEludDMyQXJyYXkoY2hpbGRyZW4ubGVuZ3RoKTtcbiAgICBtWzBdID0gLTE7XG4gICAgbGV0IGxvbmdlc3QgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGNoaWxkcmVuW2ldLmNsYWltX29yZGVyO1xuICAgICAgICAvLyBGaW5kIHRoZSBsYXJnZXN0IHN1YnNlcXVlbmNlIGxlbmd0aCBzdWNoIHRoYXQgaXQgZW5kcyBpbiBhIHZhbHVlIGxlc3MgdGhhbiBvdXIgY3VycmVudCB2YWx1ZVxuICAgICAgICAvLyB1cHBlcl9ib3VuZCByZXR1cm5zIGZpcnN0IGdyZWF0ZXIgdmFsdWUsIHNvIHdlIHN1YnRyYWN0IG9uZVxuICAgICAgICAvLyB3aXRoIGZhc3QgcGF0aCBmb3Igd2hlbiB3ZSBhcmUgb24gdGhlIGN1cnJlbnQgbG9uZ2VzdCBzdWJzZXF1ZW5jZVxuICAgICAgICBjb25zdCBzZXFMZW4gPSAoKGxvbmdlc3QgPiAwICYmIGNoaWxkcmVuW21bbG9uZ2VzdF1dLmNsYWltX29yZGVyIDw9IGN1cnJlbnQpID8gbG9uZ2VzdCArIDEgOiB1cHBlcl9ib3VuZCgxLCBsb25nZXN0LCBpZHggPT4gY2hpbGRyZW5bbVtpZHhdXS5jbGFpbV9vcmRlciwgY3VycmVudCkpIC0gMTtcbiAgICAgICAgcFtpXSA9IG1bc2VxTGVuXSArIDE7XG4gICAgICAgIGNvbnN0IG5ld0xlbiA9IHNlcUxlbiArIDE7XG4gICAgICAgIC8vIFdlIGNhbiBndWFyYW50ZWUgdGhhdCBjdXJyZW50IGlzIHRoZSBzbWFsbGVzdCB2YWx1ZS4gT3RoZXJ3aXNlLCB3ZSB3b3VsZCBoYXZlIGdlbmVyYXRlZCBhIGxvbmdlciBzZXF1ZW5jZS5cbiAgICAgICAgbVtuZXdMZW5dID0gaTtcbiAgICAgICAgbG9uZ2VzdCA9IE1hdGgubWF4KG5ld0xlbiwgbG9uZ2VzdCk7XG4gICAgfVxuICAgIC8vIFRoZSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2Ugb2Ygbm9kZXMgKGluaXRpYWxseSByZXZlcnNlZClcbiAgICBjb25zdCBsaXMgPSBbXTtcbiAgICAvLyBUaGUgcmVzdCBvZiB0aGUgbm9kZXMsIG5vZGVzIHRoYXQgd2lsbCBiZSBtb3ZlZFxuICAgIGNvbnN0IHRvTW92ZSA9IFtdO1xuICAgIGxldCBsYXN0ID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTtcbiAgICBmb3IgKGxldCBjdXIgPSBtW2xvbmdlc3RdICsgMTsgY3VyICE9IDA7IGN1ciA9IHBbY3VyIC0gMV0pIHtcbiAgICAgICAgbGlzLnB1c2goY2hpbGRyZW5bY3VyIC0gMV0pO1xuICAgICAgICBmb3IgKDsgbGFzdCA+PSBjdXI7IGxhc3QtLSkge1xuICAgICAgICAgICAgdG9Nb3ZlLnB1c2goY2hpbGRyZW5bbGFzdF0pO1xuICAgICAgICB9XG4gICAgICAgIGxhc3QtLTtcbiAgICB9XG4gICAgZm9yICg7IGxhc3QgPj0gMDsgbGFzdC0tKSB7XG4gICAgICAgIHRvTW92ZS5wdXNoKGNoaWxkcmVuW2xhc3RdKTtcbiAgICB9XG4gICAgbGlzLnJldmVyc2UoKTtcbiAgICAvLyBXZSBzb3J0IHRoZSBub2RlcyBiZWluZyBtb3ZlZCB0byBndWFyYW50ZWUgdGhhdCB0aGVpciBpbnNlcnRpb24gb3JkZXIgbWF0Y2hlcyB0aGUgY2xhaW0gb3JkZXJcbiAgICB0b01vdmUuc29ydCgoYSwgYikgPT4gYS5jbGFpbV9vcmRlciAtIGIuY2xhaW1fb3JkZXIpO1xuICAgIC8vIEZpbmFsbHksIHdlIG1vdmUgdGhlIG5vZGVzXG4gICAgZm9yIChsZXQgaSA9IDAsIGogPSAwOyBpIDwgdG9Nb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHdoaWxlIChqIDwgbGlzLmxlbmd0aCAmJiB0b01vdmVbaV0uY2xhaW1fb3JkZXIgPj0gbGlzW2pdLmNsYWltX29yZGVyKSB7XG4gICAgICAgICAgICBqKys7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYW5jaG9yID0gaiA8IGxpcy5sZW5ndGggPyBsaXNbal0gOiBudWxsO1xuICAgICAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlKHRvTW92ZVtpXSwgYW5jaG9yKTtcbiAgICB9XG59XG5mdW5jdGlvbiBhcHBlbmQodGFyZ2V0LCBub2RlKSB7XG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xufVxuZnVuY3Rpb24gYXBwZW5kX3N0eWxlcyh0YXJnZXQsIHN0eWxlX3NoZWV0X2lkLCBzdHlsZXMpIHtcbiAgICBjb25zdCBhcHBlbmRfc3R5bGVzX3RvID0gZ2V0X3Jvb3RfZm9yX3N0eWxlKHRhcmdldCk7XG4gICAgaWYgKCFhcHBlbmRfc3R5bGVzX3RvLmdldEVsZW1lbnRCeUlkKHN0eWxlX3NoZWV0X2lkKSkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IGVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHN0eWxlLmlkID0gc3R5bGVfc2hlZXRfaWQ7XG4gICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gc3R5bGVzO1xuICAgICAgICBhcHBlbmRfc3R5bGVzaGVldChhcHBlbmRfc3R5bGVzX3RvLCBzdHlsZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0X3Jvb3RfZm9yX3N0eWxlKG5vZGUpIHtcbiAgICBpZiAoIW5vZGUpXG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICBjb25zdCByb290ID0gbm9kZS5nZXRSb290Tm9kZSA/IG5vZGUuZ2V0Um9vdE5vZGUoKSA6IG5vZGUub3duZXJEb2N1bWVudDtcbiAgICBpZiAocm9vdCAmJiByb290Lmhvc3QpIHtcbiAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfVxuICAgIHJldHVybiBub2RlLm93bmVyRG9jdW1lbnQ7XG59XG5mdW5jdGlvbiBhcHBlbmRfZW1wdHlfc3R5bGVzaGVldChub2RlKSB7XG4gICAgY29uc3Qgc3R5bGVfZWxlbWVudCA9IGVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgYXBwZW5kX3N0eWxlc2hlZXQoZ2V0X3Jvb3RfZm9yX3N0eWxlKG5vZGUpLCBzdHlsZV9lbGVtZW50KTtcbiAgICByZXR1cm4gc3R5bGVfZWxlbWVudC5zaGVldDtcbn1cbmZ1bmN0aW9uIGFwcGVuZF9zdHlsZXNoZWV0KG5vZGUsIHN0eWxlKSB7XG4gICAgYXBwZW5kKG5vZGUuaGVhZCB8fCBub2RlLCBzdHlsZSk7XG4gICAgcmV0dXJuIHN0eWxlLnNoZWV0O1xufVxuZnVuY3Rpb24gYXBwZW5kX2h5ZHJhdGlvbih0YXJnZXQsIG5vZGUpIHtcbiAgICBpZiAoaXNfaHlkcmF0aW5nKSB7XG4gICAgICAgIGluaXRfaHlkcmF0ZSh0YXJnZXQpO1xuICAgICAgICBpZiAoKHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkID09PSB1bmRlZmluZWQpIHx8ICgodGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgIT09IG51bGwpICYmICh0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZC5wYXJlbnROb2RlICE9PSB0YXJnZXQpKSkge1xuICAgICAgICAgICAgdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPSB0YXJnZXQuZmlyc3RDaGlsZDtcbiAgICAgICAgfVxuICAgICAgICAvLyBTa2lwIG5vZGVzIG9mIHVuZGVmaW5lZCBvcmRlcmluZ1xuICAgICAgICB3aGlsZSAoKHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkICE9PSBudWxsKSAmJiAodGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQuY2xhaW1fb3JkZXIgPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgIHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkID0gdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUgIT09IHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkKSB7XG4gICAgICAgICAgICAvLyBXZSBvbmx5IGluc2VydCBpZiB0aGUgb3JkZXJpbmcgb2YgdGhpcyBub2RlIHNob3VsZCBiZSBtb2RpZmllZCBvciB0aGUgcGFyZW50IG5vZGUgaXMgbm90IHRhcmdldFxuICAgICAgICAgICAgaWYgKG5vZGUuY2xhaW1fb3JkZXIgIT09IHVuZGVmaW5lZCB8fCBub2RlLnBhcmVudE5vZGUgIT09IHRhcmdldCkge1xuICAgICAgICAgICAgICAgIHRhcmdldC5pbnNlcnRCZWZvcmUobm9kZSwgdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPSBub2RlLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUucGFyZW50Tm9kZSAhPT0gdGFyZ2V0IHx8IG5vZGUubmV4dFNpYmxpbmcgIT09IG51bGwpIHtcbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGluc2VydCh0YXJnZXQsIG5vZGUsIGFuY2hvcikge1xuICAgIHRhcmdldC5pbnNlcnRCZWZvcmUobm9kZSwgYW5jaG9yIHx8IG51bGwpO1xufVxuZnVuY3Rpb24gaW5zZXJ0X2h5ZHJhdGlvbih0YXJnZXQsIG5vZGUsIGFuY2hvcikge1xuICAgIGlmIChpc19oeWRyYXRpbmcgJiYgIWFuY2hvcikge1xuICAgICAgICBhcHBlbmRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUucGFyZW50Tm9kZSAhPT0gdGFyZ2V0IHx8IG5vZGUubmV4dFNpYmxpbmcgIT0gYW5jaG9yKSB7XG4gICAgICAgIHRhcmdldC5pbnNlcnRCZWZvcmUobm9kZSwgYW5jaG9yIHx8IG51bGwpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRldGFjaChub2RlKSB7XG4gICAgaWYgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGVzdHJveV9lYWNoKGl0ZXJhdGlvbnMsIGRldGFjaGluZykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcmF0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoaXRlcmF0aW9uc1tpXSlcbiAgICAgICAgICAgIGl0ZXJhdGlvbnNbaV0uZChkZXRhY2hpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGVsZW1lbnQobmFtZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xufVxuZnVuY3Rpb24gZWxlbWVudF9pcyhuYW1lLCBpcykge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUsIHsgaXMgfSk7XG59XG5mdW5jdGlvbiBvYmplY3Rfd2l0aG91dF9wcm9wZXJ0aWVzKG9iaiwgZXhjbHVkZSkge1xuICAgIGNvbnN0IHRhcmdldCA9IHt9O1xuICAgIGZvciAoY29uc3QgayBpbiBvYmopIHtcbiAgICAgICAgaWYgKGhhc19wcm9wKG9iaiwgaylcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICYmIGV4Y2x1ZGUuaW5kZXhPZihrKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHRhcmdldFtrXSA9IG9ialtrXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gc3ZnX2VsZW1lbnQobmFtZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgbmFtZSk7XG59XG5mdW5jdGlvbiB0ZXh0KGRhdGEpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YSk7XG59XG5mdW5jdGlvbiBzcGFjZSgpIHtcbiAgICByZXR1cm4gdGV4dCgnICcpO1xufVxuZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgcmV0dXJuIHRleHQoJycpO1xufVxuZnVuY3Rpb24gY29tbWVudChjb250ZW50KSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoY29udGVudCk7XG59XG5mdW5jdGlvbiBsaXN0ZW4obm9kZSwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIHJldHVybiAoKSA9PiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcHJldmVudF9kZWZhdWx0KGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gc3RvcF9wcm9wYWdhdGlvbihmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH07XG59XG5mdW5jdGlvbiBzdG9wX2ltbWVkaWF0ZV9wcm9wYWdhdGlvbihmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH07XG59XG5mdW5jdGlvbiBzZWxmKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMpXG4gICAgICAgICAgICBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gdHJ1c3RlZChmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoZXZlbnQuaXNUcnVzdGVkKVxuICAgICAgICAgICAgZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGF0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKVxuICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgIGVsc2UgaWYgKG5vZGUuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSkgIT09IHZhbHVlKVxuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cbi8qKlxuICogTGlzdCBvZiBhdHRyaWJ1dGVzIHRoYXQgc2hvdWxkIGFsd2F5cyBiZSBzZXQgdGhyb3VnaCB0aGUgYXR0ciBtZXRob2QsXG4gKiBiZWNhdXNlIHVwZGF0aW5nIHRoZW0gdGhyb3VnaCB0aGUgcHJvcGVydHkgc2V0dGVyIGRvZXNuJ3Qgd29yayByZWxpYWJseS5cbiAqIEluIHRoZSBleGFtcGxlIG9mIGB3aWR0aGAvYGhlaWdodGAsIHRoZSBwcm9ibGVtIGlzIHRoYXQgdGhlIHNldHRlciBvbmx5XG4gKiBhY2NlcHRzIG51bWVyaWMgdmFsdWVzLCBidXQgdGhlIGF0dHJpYnV0ZSBjYW4gYWxzbyBiZSBzZXQgdG8gYSBzdHJpbmcgbGlrZSBgNTAlYC5cbiAqIElmIHRoaXMgbGlzdCBiZWNvbWVzIHRvbyBiaWcsIHJldGhpbmsgdGhpcyBhcHByb2FjaC5cbiAqL1xuY29uc3QgYWx3YXlzX3NldF90aHJvdWdoX3NldF9hdHRyaWJ1dGUgPSBbJ3dpZHRoJywgJ2hlaWdodCddO1xuZnVuY3Rpb24gc2V0X2F0dHJpYnV0ZXMobm9kZSwgYXR0cmlidXRlcykge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBkZXNjcmlwdG9ycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG5vZGUuX19wcm90b19fKTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzW2tleV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChrZXkgPT09ICdzdHlsZScpIHtcbiAgICAgICAgICAgIG5vZGUuc3R5bGUuY3NzVGV4dCA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChrZXkgPT09ICdfX3ZhbHVlJykge1xuICAgICAgICAgICAgbm9kZS52YWx1ZSA9IG5vZGVba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkZXNjcmlwdG9yc1trZXldICYmIGRlc2NyaXB0b3JzW2tleV0uc2V0ICYmIGFsd2F5c19zZXRfdGhyb3VnaF9zZXRfYXR0cmlidXRlLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgIG5vZGVba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGF0dHIobm9kZSwga2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gc2V0X3N2Z19hdHRyaWJ1dGVzKG5vZGUsIGF0dHJpYnV0ZXMpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGF0dHIobm9kZSwga2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNldF9jdXN0b21fZWxlbWVudF9kYXRhX21hcChub2RlLCBkYXRhX21hcCkge1xuICAgIE9iamVjdC5rZXlzKGRhdGFfbWFwKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgc2V0X2N1c3RvbV9lbGVtZW50X2RhdGEobm9kZSwga2V5LCBkYXRhX21hcFtrZXldKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHNldF9jdXN0b21fZWxlbWVudF9kYXRhKG5vZGUsIHByb3AsIHZhbHVlKSB7XG4gICAgaWYgKHByb3AgaW4gbm9kZSkge1xuICAgICAgICBub2RlW3Byb3BdID0gdHlwZW9mIG5vZGVbcHJvcF0gPT09ICdib29sZWFuJyAmJiB2YWx1ZSA9PT0gJycgPyB0cnVlIDogdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhdHRyKG5vZGUsIHByb3AsIHZhbHVlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzZXRfZHluYW1pY19lbGVtZW50X2RhdGEodGFnKSB7XG4gICAgcmV0dXJuICgvLS8udGVzdCh0YWcpKSA/IHNldF9jdXN0b21fZWxlbWVudF9kYXRhX21hcCA6IHNldF9hdHRyaWJ1dGVzO1xufVxuZnVuY3Rpb24geGxpbmtfYXR0cihub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsIGF0dHJpYnV0ZSwgdmFsdWUpO1xufVxuZnVuY3Rpb24gZ2V0X2JpbmRpbmdfZ3JvdXBfdmFsdWUoZ3JvdXAsIF9fdmFsdWUsIGNoZWNrZWQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IG5ldyBTZXQoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyb3VwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChncm91cFtpXS5jaGVja2VkKVxuICAgICAgICAgICAgdmFsdWUuYWRkKGdyb3VwW2ldLl9fdmFsdWUpO1xuICAgIH1cbiAgICBpZiAoIWNoZWNrZWQpIHtcbiAgICAgICAgdmFsdWUuZGVsZXRlKF9fdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gQXJyYXkuZnJvbSh2YWx1ZSk7XG59XG5mdW5jdGlvbiBpbml0X2JpbmRpbmdfZ3JvdXAoZ3JvdXApIHtcbiAgICBsZXQgX2lucHV0cztcbiAgICByZXR1cm4ge1xuICAgICAgICAvKiBwdXNoICovIHAoLi4uaW5wdXRzKSB7XG4gICAgICAgICAgICBfaW5wdXRzID0gaW5wdXRzO1xuICAgICAgICAgICAgX2lucHV0cy5mb3JFYWNoKGlucHV0ID0+IGdyb3VwLnB1c2goaW5wdXQpKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyogcmVtb3ZlICovIHIoKSB7XG4gICAgICAgICAgICBfaW5wdXRzLmZvckVhY2goaW5wdXQgPT4gZ3JvdXAuc3BsaWNlKGdyb3VwLmluZGV4T2YoaW5wdXQpLCAxKSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gaW5pdF9iaW5kaW5nX2dyb3VwX2R5bmFtaWMoZ3JvdXAsIGluZGV4ZXMpIHtcbiAgICBsZXQgX2dyb3VwID0gZ2V0X2JpbmRpbmdfZ3JvdXAoZ3JvdXApO1xuICAgIGxldCBfaW5wdXRzO1xuICAgIGZ1bmN0aW9uIGdldF9iaW5kaW5nX2dyb3VwKGdyb3VwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kZXhlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZ3JvdXAgPSBncm91cFtpbmRleGVzW2ldXSA9IGdyb3VwW2luZGV4ZXNbaV1dIHx8IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBncm91cDtcbiAgICB9XG4gICAgZnVuY3Rpb24gcHVzaCgpIHtcbiAgICAgICAgX2lucHV0cy5mb3JFYWNoKGlucHV0ID0+IF9ncm91cC5wdXNoKGlucHV0KSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgICAgX2lucHV0cy5mb3JFYWNoKGlucHV0ID0+IF9ncm91cC5zcGxpY2UoX2dyb3VwLmluZGV4T2YoaW5wdXQpLCAxKSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIC8qIHVwZGF0ZSAqLyB1KG5ld19pbmRleGVzKSB7XG4gICAgICAgICAgICBpbmRleGVzID0gbmV3X2luZGV4ZXM7XG4gICAgICAgICAgICBjb25zdCBuZXdfZ3JvdXAgPSBnZXRfYmluZGluZ19ncm91cChncm91cCk7XG4gICAgICAgICAgICBpZiAobmV3X2dyb3VwICE9PSBfZ3JvdXApIHtcbiAgICAgICAgICAgICAgICByZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBfZ3JvdXAgPSBuZXdfZ3JvdXA7XG4gICAgICAgICAgICAgICAgcHVzaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvKiBwdXNoICovIHAoLi4uaW5wdXRzKSB7XG4gICAgICAgICAgICBfaW5wdXRzID0gaW5wdXRzO1xuICAgICAgICAgICAgcHVzaCgpO1xuICAgICAgICB9LFxuICAgICAgICAvKiByZW1vdmUgKi8gcjogcmVtb3ZlXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHRvX251bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gJycgPyBudWxsIDogK3ZhbHVlO1xufVxuZnVuY3Rpb24gdGltZV9yYW5nZXNfdG9fYXJyYXkocmFuZ2VzKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmdlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBhcnJheS5wdXNoKHsgc3RhcnQ6IHJhbmdlcy5zdGFydChpKSwgZW5kOiByYW5nZXMuZW5kKGkpIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG59XG5mdW5jdGlvbiBjaGlsZHJlbihlbGVtZW50KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5jaGlsZE5vZGVzKTtcbn1cbmZ1bmN0aW9uIGluaXRfY2xhaW1faW5mbyhub2Rlcykge1xuICAgIGlmIChub2Rlcy5jbGFpbV9pbmZvID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbm9kZXMuY2xhaW1faW5mbyA9IHsgbGFzdF9pbmRleDogMCwgdG90YWxfY2xhaW1lZDogMCB9O1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNsYWltX25vZGUobm9kZXMsIHByZWRpY2F0ZSwgcHJvY2Vzc05vZGUsIGNyZWF0ZU5vZGUsIGRvbnRVcGRhdGVMYXN0SW5kZXggPSBmYWxzZSkge1xuICAgIC8vIFRyeSB0byBmaW5kIG5vZGVzIGluIGFuIG9yZGVyIHN1Y2ggdGhhdCB3ZSBsZW5ndGhlbiB0aGUgbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlXG4gICAgaW5pdF9jbGFpbV9pbmZvKG5vZGVzKTtcbiAgICBjb25zdCByZXN1bHROb2RlID0gKCgpID0+IHtcbiAgICAgICAgLy8gV2UgZmlyc3QgdHJ5IHRvIGZpbmQgYW4gZWxlbWVudCBhZnRlciB0aGUgcHJldmlvdXMgb25lXG4gICAgICAgIGZvciAobGV0IGkgPSBub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXg7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICAgICAgaWYgKHByZWRpY2F0ZShub2RlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcGxhY2VtZW50ID0gcHJvY2Vzc05vZGUobm9kZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlcGxhY2VtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXNbaV0gPSByZXBsYWNlbWVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFkb250VXBkYXRlTGFzdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzLmNsYWltX2luZm8ubGFzdF9pbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIE90aGVyd2lzZSwgd2UgdHJ5IHRvIGZpbmQgb25lIGJlZm9yZVxuICAgICAgICAvLyBXZSBpdGVyYXRlIGluIHJldmVyc2Ugc28gdGhhdCB3ZSBkb24ndCBnbyB0b28gZmFyIGJhY2tcbiAgICAgICAgZm9yIChsZXQgaSA9IG5vZGVzLmNsYWltX2luZm8ubGFzdF9pbmRleCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgICAgICBpZiAocHJlZGljYXRlKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnQgPSBwcm9jZXNzTm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVwbGFjZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBub2Rlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub2Rlc1tpXSA9IHJlcGxhY2VtZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWRvbnRVcGRhdGVMYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4ID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVwbGFjZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTaW5jZSB3ZSBzcGxpY2VkIGJlZm9yZSB0aGUgbGFzdF9pbmRleCwgd2UgZGVjcmVhc2UgaXRcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4LS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIElmIHdlIGNhbid0IGZpbmQgYW55IG1hdGNoaW5nIG5vZGUsIHdlIGNyZWF0ZSBhIG5ldyBvbmVcbiAgICAgICAgcmV0dXJuIGNyZWF0ZU5vZGUoKTtcbiAgICB9KSgpO1xuICAgIHJlc3VsdE5vZGUuY2xhaW1fb3JkZXIgPSBub2Rlcy5jbGFpbV9pbmZvLnRvdGFsX2NsYWltZWQ7XG4gICAgbm9kZXMuY2xhaW1faW5mby50b3RhbF9jbGFpbWVkICs9IDE7XG4gICAgcmV0dXJuIHJlc3VsdE5vZGU7XG59XG5mdW5jdGlvbiBjbGFpbV9lbGVtZW50X2Jhc2Uobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMsIGNyZWF0ZV9lbGVtZW50KSB7XG4gICAgcmV0dXJuIGNsYWltX25vZGUobm9kZXMsIChub2RlKSA9PiBub2RlLm5vZGVOYW1lID09PSBuYW1lLCAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCByZW1vdmUgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBub2RlLmF0dHJpYnV0ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IG5vZGUuYXR0cmlidXRlc1tqXTtcbiAgICAgICAgICAgIGlmICghYXR0cmlidXRlc1thdHRyaWJ1dGUubmFtZV0pIHtcbiAgICAgICAgICAgICAgICByZW1vdmUucHVzaChhdHRyaWJ1dGUubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlLmZvckVhY2godiA9PiBub2RlLnJlbW92ZUF0dHJpYnV0ZSh2KSk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSwgKCkgPT4gY3JlYXRlX2VsZW1lbnQobmFtZSkpO1xufVxuZnVuY3Rpb24gY2xhaW1fZWxlbWVudChub2RlcywgbmFtZSwgYXR0cmlidXRlcykge1xuICAgIHJldHVybiBjbGFpbV9lbGVtZW50X2Jhc2Uobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMsIGVsZW1lbnQpO1xufVxuZnVuY3Rpb24gY2xhaW1fc3ZnX2VsZW1lbnQobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMpIHtcbiAgICByZXR1cm4gY2xhaW1fZWxlbWVudF9iYXNlKG5vZGVzLCBuYW1lLCBhdHRyaWJ1dGVzLCBzdmdfZWxlbWVudCk7XG59XG5mdW5jdGlvbiBjbGFpbV90ZXh0KG5vZGVzLCBkYXRhKSB7XG4gICAgcmV0dXJuIGNsYWltX25vZGUobm9kZXMsIChub2RlKSA9PiBub2RlLm5vZGVUeXBlID09PSAzLCAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhU3RyID0gJycgKyBkYXRhO1xuICAgICAgICBpZiAobm9kZS5kYXRhLnN0YXJ0c1dpdGgoZGF0YVN0cikpIHtcbiAgICAgICAgICAgIGlmIChub2RlLmRhdGEubGVuZ3RoICE9PSBkYXRhU3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlLnNwbGl0VGV4dChkYXRhU3RyLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2RlLmRhdGEgPSBkYXRhU3RyO1xuICAgICAgICB9XG4gICAgfSwgKCkgPT4gdGV4dChkYXRhKSwgdHJ1ZSAvLyBUZXh0IG5vZGVzIHNob3VsZCBub3QgdXBkYXRlIGxhc3QgaW5kZXggc2luY2UgaXQgaXMgbGlrZWx5IG5vdCB3b3J0aCBpdCB0byBlbGltaW5hdGUgYW4gaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSBvZiBhY3R1YWwgZWxlbWVudHNcbiAgICApO1xufVxuZnVuY3Rpb24gY2xhaW1fc3BhY2Uobm9kZXMpIHtcbiAgICByZXR1cm4gY2xhaW1fdGV4dChub2RlcywgJyAnKTtcbn1cbmZ1bmN0aW9uIGNsYWltX2NvbW1lbnQobm9kZXMsIGRhdGEpIHtcbiAgICByZXR1cm4gY2xhaW1fbm9kZShub2RlcywgKG5vZGUpID0+IG5vZGUubm9kZVR5cGUgPT09IDgsIChub2RlKSA9PiB7XG4gICAgICAgIG5vZGUuZGF0YSA9ICcnICsgZGF0YTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LCAoKSA9PiBjb21tZW50KGRhdGEpLCB0cnVlKTtcbn1cbmZ1bmN0aW9uIGZpbmRfY29tbWVudChub2RlcywgdGV4dCwgc3RhcnQpIHtcbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBub2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSA4IC8qIGNvbW1lbnQgbm9kZSAqLyAmJiBub2RlLnRleHRDb250ZW50LnRyaW0oKSA9PT0gdGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vZGVzLmxlbmd0aDtcbn1cbmZ1bmN0aW9uIGNsYWltX2h0bWxfdGFnKG5vZGVzLCBpc19zdmcpIHtcbiAgICAvLyBmaW5kIGh0bWwgb3BlbmluZyB0YWdcbiAgICBjb25zdCBzdGFydF9pbmRleCA9IGZpbmRfY29tbWVudChub2RlcywgJ0hUTUxfVEFHX1NUQVJUJywgMCk7XG4gICAgY29uc3QgZW5kX2luZGV4ID0gZmluZF9jb21tZW50KG5vZGVzLCAnSFRNTF9UQUdfRU5EJywgc3RhcnRfaW5kZXgpO1xuICAgIGlmIChzdGFydF9pbmRleCA9PT0gZW5kX2luZGV4KSB7XG4gICAgICAgIHJldHVybiBuZXcgSHRtbFRhZ0h5ZHJhdGlvbih1bmRlZmluZWQsIGlzX3N2Zyk7XG4gICAgfVxuICAgIGluaXRfY2xhaW1faW5mbyhub2Rlcyk7XG4gICAgY29uc3QgaHRtbF90YWdfbm9kZXMgPSBub2Rlcy5zcGxpY2Uoc3RhcnRfaW5kZXgsIGVuZF9pbmRleCAtIHN0YXJ0X2luZGV4ICsgMSk7XG4gICAgZGV0YWNoKGh0bWxfdGFnX25vZGVzWzBdKTtcbiAgICBkZXRhY2goaHRtbF90YWdfbm9kZXNbaHRtbF90YWdfbm9kZXMubGVuZ3RoIC0gMV0pO1xuICAgIGNvbnN0IGNsYWltZWRfbm9kZXMgPSBodG1sX3RhZ19ub2Rlcy5zbGljZSgxLCBodG1sX3RhZ19ub2Rlcy5sZW5ndGggLSAxKTtcbiAgICBmb3IgKGNvbnN0IG4gb2YgY2xhaW1lZF9ub2Rlcykge1xuICAgICAgICBuLmNsYWltX29yZGVyID0gbm9kZXMuY2xhaW1faW5mby50b3RhbF9jbGFpbWVkO1xuICAgICAgICBub2Rlcy5jbGFpbV9pbmZvLnRvdGFsX2NsYWltZWQgKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBIdG1sVGFnSHlkcmF0aW9uKGNsYWltZWRfbm9kZXMsIGlzX3N2Zyk7XG59XG5mdW5jdGlvbiBzZXRfZGF0YSh0ZXh0LCBkYXRhKSB7XG4gICAgZGF0YSA9ICcnICsgZGF0YTtcbiAgICBpZiAodGV4dC5kYXRhID09PSBkYXRhKVxuICAgICAgICByZXR1cm47XG4gICAgdGV4dC5kYXRhID0gZGF0YTtcbn1cbmZ1bmN0aW9uIHNldF9kYXRhX2NvbnRlbnRlZGl0YWJsZSh0ZXh0LCBkYXRhKSB7XG4gICAgZGF0YSA9ICcnICsgZGF0YTtcbiAgICBpZiAodGV4dC53aG9sZVRleHQgPT09IGRhdGEpXG4gICAgICAgIHJldHVybjtcbiAgICB0ZXh0LmRhdGEgPSBkYXRhO1xufVxuZnVuY3Rpb24gc2V0X2RhdGFfbWF5YmVfY29udGVudGVkaXRhYmxlKHRleHQsIGRhdGEsIGF0dHJfdmFsdWUpIHtcbiAgICBpZiAofmNvbnRlbnRlZGl0YWJsZV90cnV0aHlfdmFsdWVzLmluZGV4T2YoYXR0cl92YWx1ZSkpIHtcbiAgICAgICAgc2V0X2RhdGFfY29udGVudGVkaXRhYmxlKHRleHQsIGRhdGEpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc2V0X2RhdGEodGV4dCwgZGF0YSk7XG4gICAgfVxufVxuZnVuY3Rpb24gc2V0X2lucHV0X3ZhbHVlKGlucHV0LCB2YWx1ZSkge1xuICAgIGlucHV0LnZhbHVlID0gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG59XG5mdW5jdGlvbiBzZXRfaW5wdXRfdHlwZShpbnB1dCwgdHlwZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGlucHV0LnR5cGUgPSB0eXBlO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgfVxufVxuZnVuY3Rpb24gc2V0X3N0eWxlKG5vZGUsIGtleSwgdmFsdWUsIGltcG9ydGFudCkge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIG5vZGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoa2V5KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG5vZGUuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCB2YWx1ZSwgaW1wb3J0YW50ID8gJ2ltcG9ydGFudCcgOiAnJyk7XG4gICAgfVxufVxuZnVuY3Rpb24gc2VsZWN0X29wdGlvbihzZWxlY3QsIHZhbHVlLCBtb3VudGluZykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0Lm9wdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gc2VsZWN0Lm9wdGlvbnNbaV07XG4gICAgICAgIGlmIChvcHRpb24uX192YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFtb3VudGluZyB8fCB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNlbGVjdC5zZWxlY3RlZEluZGV4ID0gLTE7IC8vIG5vIG9wdGlvbiBzaG91bGQgYmUgc2VsZWN0ZWRcbiAgICB9XG59XG5mdW5jdGlvbiBzZWxlY3Rfb3B0aW9ucyhzZWxlY3QsIHZhbHVlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBzZWxlY3Qub3B0aW9uc1tpXTtcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gfnZhbHVlLmluZGV4T2Yob3B0aW9uLl9fdmFsdWUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNlbGVjdF92YWx1ZShzZWxlY3QpIHtcbiAgICBjb25zdCBzZWxlY3RlZF9vcHRpb24gPSBzZWxlY3QucXVlcnlTZWxlY3RvcignOmNoZWNrZWQnKTtcbiAgICByZXR1cm4gc2VsZWN0ZWRfb3B0aW9uICYmIHNlbGVjdGVkX29wdGlvbi5fX3ZhbHVlO1xufVxuZnVuY3Rpb24gc2VsZWN0X211bHRpcGxlX3ZhbHVlKHNlbGVjdCkge1xuICAgIHJldHVybiBbXS5tYXAuY2FsbChzZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnOmNoZWNrZWQnKSwgb3B0aW9uID0+IG9wdGlvbi5fX3ZhbHVlKTtcbn1cbi8vIHVuZm9ydHVuYXRlbHkgdGhpcyBjYW4ndCBiZSBhIGNvbnN0YW50IGFzIHRoYXQgd291bGRuJ3QgYmUgdHJlZS1zaGFrZWFibGVcbi8vIHNvIHdlIGNhY2hlIHRoZSByZXN1bHQgaW5zdGVhZFxubGV0IGNyb3Nzb3JpZ2luO1xuZnVuY3Rpb24gaXNfY3Jvc3NvcmlnaW4oKSB7XG4gICAgaWYgKGNyb3Nzb3JpZ2luID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3Jvc3NvcmlnaW4gPSBmYWxzZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgdm9pZCB3aW5kb3cucGFyZW50LmRvY3VtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY3Jvc3NvcmlnaW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjcm9zc29yaWdpbjtcbn1cbmZ1bmN0aW9uIGFkZF9pZnJhbWVfcmVzaXplX2xpc3RlbmVyKG5vZGUsIGZuKSB7XG4gICAgY29uc3QgY29tcHV0ZWRfc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIGlmIChjb21wdXRlZF9zdHlsZS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgbm9kZS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgfVxuICAgIGNvbnN0IGlmcmFtZSA9IGVsZW1lbnQoJ2lmcmFtZScpO1xuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGJsb2NrOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgJyArXG4gICAgICAgICdvdmVyZmxvdzogaGlkZGVuOyBib3JkZXI6IDA7IG9wYWNpdHk6IDA7IHBvaW50ZXItZXZlbnRzOiBub25lOyB6LWluZGV4OiAtMTsnKTtcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgaWZyYW1lLnRhYkluZGV4ID0gLTE7XG4gICAgY29uc3QgY3Jvc3NvcmlnaW4gPSBpc19jcm9zc29yaWdpbigpO1xuICAgIGxldCB1bnN1YnNjcmliZTtcbiAgICBpZiAoY3Jvc3NvcmlnaW4pIHtcbiAgICAgICAgaWZyYW1lLnNyYyA9IFwiZGF0YTp0ZXh0L2h0bWwsPHNjcmlwdD5vbnJlc2l6ZT1mdW5jdGlvbigpe3BhcmVudC5wb3N0TWVzc2FnZSgwLCcqJyl9PC9zY3JpcHQ+XCI7XG4gICAgICAgIHVuc3Vic2NyaWJlID0gbGlzdGVuKHdpbmRvdywgJ21lc3NhZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IGlmcmFtZS5jb250ZW50V2luZG93KVxuICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWZyYW1lLnNyYyA9ICdhYm91dDpibGFuayc7XG4gICAgICAgIGlmcmFtZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZSA9IGxpc3RlbihpZnJhbWUuY29udGVudFdpbmRvdywgJ3Jlc2l6ZScsIGZuKTtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBhbiBpbml0aWFsIHJlc2l6ZSBldmVudCBpcyBmaXJlZCBfYWZ0ZXJfIHRoZSBpZnJhbWUgaXMgbG9hZGVkICh3aGljaCBpcyBhc3luY2hyb25vdXMpXG4gICAgICAgICAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3N2ZWx0ZWpzL3N2ZWx0ZS9pc3N1ZXMvNDIzM1xuICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgYXBwZW5kKG5vZGUsIGlmcmFtZSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKGNyb3Nzb3JpZ2luKSB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHVuc3Vic2NyaWJlICYmIGlmcmFtZS5jb250ZW50V2luZG93KSB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgICAgIGRldGFjaChpZnJhbWUpO1xuICAgIH07XG59XG5jb25zdCByZXNpemVfb2JzZXJ2ZXJfY29udGVudF9ib3ggPSAvKiBAX19QVVJFX18gKi8gbmV3IFJlc2l6ZU9ic2VydmVyU2luZ2xldG9uKHsgYm94OiAnY29udGVudC1ib3gnIH0pO1xuY29uc3QgcmVzaXplX29ic2VydmVyX2JvcmRlcl9ib3ggPSAvKiBAX19QVVJFX18gKi8gbmV3IFJlc2l6ZU9ic2VydmVyU2luZ2xldG9uKHsgYm94OiAnYm9yZGVyLWJveCcgfSk7XG5jb25zdCByZXNpemVfb2JzZXJ2ZXJfZGV2aWNlX3BpeGVsX2NvbnRlbnRfYm94ID0gLyogQF9fUFVSRV9fICovIG5ldyBSZXNpemVPYnNlcnZlclNpbmdsZXRvbih7IGJveDogJ2RldmljZS1waXhlbC1jb250ZW50LWJveCcgfSk7XG5mdW5jdGlvbiB0b2dnbGVfY2xhc3MoZWxlbWVudCwgbmFtZSwgdG9nZ2xlKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3RbdG9nZ2xlID8gJ2FkZCcgOiAncmVtb3ZlJ10obmFtZSk7XG59XG5mdW5jdGlvbiBjdXN0b21fZXZlbnQodHlwZSwgZGV0YWlsLCB7IGJ1YmJsZXMgPSBmYWxzZSwgY2FuY2VsYWJsZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIGNvbnN0IGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICBlLmluaXRDdXN0b21FdmVudCh0eXBlLCBidWJibGVzLCBjYW5jZWxhYmxlLCBkZXRhaWwpO1xuICAgIHJldHVybiBlO1xufVxuZnVuY3Rpb24gcXVlcnlfc2VsZWN0b3JfYWxsKHNlbGVjdG9yLCBwYXJlbnQgPSBkb2N1bWVudC5ib2R5KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20ocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbn1cbmZ1bmN0aW9uIGhlYWRfc2VsZWN0b3Iobm9kZUlkLCBoZWFkKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgbGV0IHN0YXJ0ZWQgPSAwO1xuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBoZWFkLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDggLyogY29tbWVudCBub2RlICovKSB7XG4gICAgICAgICAgICBjb25zdCBjb21tZW50ID0gbm9kZS50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICAgICAgICBpZiAoY29tbWVudCA9PT0gYEhFQURfJHtub2RlSWR9X0VORGApIHtcbiAgICAgICAgICAgICAgICBzdGFydGVkIC09IDE7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjb21tZW50ID09PSBgSEVBRF8ke25vZGVJZH1fU1RBUlRgKSB7XG4gICAgICAgICAgICAgICAgc3RhcnRlZCArPSAxO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0ZWQgPiAwKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChub2RlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuY2xhc3MgSHRtbFRhZyB7XG4gICAgY29uc3RydWN0b3IoaXNfc3ZnID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5pc19zdmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc19zdmcgPSBpc19zdmc7XG4gICAgICAgIHRoaXMuZSA9IHRoaXMubiA9IG51bGw7XG4gICAgfVxuICAgIGMoaHRtbCkge1xuICAgICAgICB0aGlzLmgoaHRtbCk7XG4gICAgfVxuICAgIG0oaHRtbCwgdGFyZ2V0LCBhbmNob3IgPSBudWxsKSB7XG4gICAgICAgIGlmICghdGhpcy5lKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc19zdmcpXG4gICAgICAgICAgICAgICAgdGhpcy5lID0gc3ZnX2VsZW1lbnQodGFyZ2V0Lm5vZGVOYW1lKTtcbiAgICAgICAgICAgIC8qKiAjNzM2NCAgdGFyZ2V0IGZvciA8dGVtcGxhdGU+IG1heSBiZSBwcm92aWRlZCBhcyAjZG9jdW1lbnQtZnJhZ21lbnQoMTEpICovXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5lID0gZWxlbWVudCgodGFyZ2V0Lm5vZGVUeXBlID09PSAxMSA/ICdURU1QTEFURScgOiB0YXJnZXQubm9kZU5hbWUpKTtcbiAgICAgICAgICAgIHRoaXMudCA9IHRhcmdldC50YWdOYW1lICE9PSAnVEVNUExBVEUnID8gdGFyZ2V0IDogdGFyZ2V0LmNvbnRlbnQ7XG4gICAgICAgICAgICB0aGlzLmMoaHRtbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pKGFuY2hvcik7XG4gICAgfVxuICAgIGgoaHRtbCkge1xuICAgICAgICB0aGlzLmUuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgdGhpcy5uID0gQXJyYXkuZnJvbSh0aGlzLmUubm9kZU5hbWUgPT09ICdURU1QTEFURScgPyB0aGlzLmUuY29udGVudC5jaGlsZE5vZGVzIDogdGhpcy5lLmNoaWxkTm9kZXMpO1xuICAgIH1cbiAgICBpKGFuY2hvcikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaW5zZXJ0KHRoaXMudCwgdGhpcy5uW2ldLCBhbmNob3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHAoaHRtbCkge1xuICAgICAgICB0aGlzLmQoKTtcbiAgICAgICAgdGhpcy5oKGh0bWwpO1xuICAgICAgICB0aGlzLmkodGhpcy5hKTtcbiAgICB9XG4gICAgZCgpIHtcbiAgICAgICAgdGhpcy5uLmZvckVhY2goZGV0YWNoKTtcbiAgICB9XG59XG5jbGFzcyBIdG1sVGFnSHlkcmF0aW9uIGV4dGVuZHMgSHRtbFRhZyB7XG4gICAgY29uc3RydWN0b3IoY2xhaW1lZF9ub2RlcywgaXNfc3ZnID0gZmFsc2UpIHtcbiAgICAgICAgc3VwZXIoaXNfc3ZnKTtcbiAgICAgICAgdGhpcy5lID0gdGhpcy5uID0gbnVsbDtcbiAgICAgICAgdGhpcy5sID0gY2xhaW1lZF9ub2RlcztcbiAgICB9XG4gICAgYyhodG1sKSB7XG4gICAgICAgIGlmICh0aGlzLmwpIHtcbiAgICAgICAgICAgIHRoaXMubiA9IHRoaXMubDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN1cGVyLmMoaHRtbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaShhbmNob3IpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm4ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGluc2VydF9oeWRyYXRpb24odGhpcy50LCB0aGlzLm5baV0sIGFuY2hvcik7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBhdHRyaWJ1dGVfdG9fb2JqZWN0KGF0dHJpYnV0ZXMpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBvZiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJlc3VsdFthdHRyaWJ1dGUubmFtZV0gPSBhdHRyaWJ1dGUudmFsdWU7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBnZXRfY3VzdG9tX2VsZW1lbnRzX3Nsb3RzKGVsZW1lbnQpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBlbGVtZW50LmNoaWxkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICByZXN1bHRbbm9kZS5zbG90IHx8ICdkZWZhdWx0J10gPSB0cnVlO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBjb25zdHJ1Y3Rfc3ZlbHRlX2NvbXBvbmVudChjb21wb25lbnQsIHByb3BzKSB7XG4gICAgcmV0dXJuIG5ldyBjb21wb25lbnQocHJvcHMpO1xufVxuXG4vLyB3ZSBuZWVkIHRvIHN0b3JlIHRoZSBpbmZvcm1hdGlvbiBmb3IgbXVsdGlwbGUgZG9jdW1lbnRzIGJlY2F1c2UgYSBTdmVsdGUgYXBwbGljYXRpb24gY291bGQgYWxzbyBjb250YWluIGlmcmFtZXNcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zdmVsdGVqcy9zdmVsdGUvaXNzdWVzLzM2MjRcbmNvbnN0IG1hbmFnZWRfc3R5bGVzID0gbmV3IE1hcCgpO1xubGV0IGFjdGl2ZSA9IDA7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vZGFya3NreWFwcC9zdHJpbmctaGFzaC9ibG9iL21hc3Rlci9pbmRleC5qc1xuZnVuY3Rpb24gaGFzaChzdHIpIHtcbiAgICBsZXQgaGFzaCA9IDUzODE7XG4gICAgbGV0IGkgPSBzdHIubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pXG4gICAgICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSBeIHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBoYXNoID4+PiAwO1xufVxuZnVuY3Rpb24gY3JlYXRlX3N0eWxlX2luZm9ybWF0aW9uKGRvYywgbm9kZSkge1xuICAgIGNvbnN0IGluZm8gPSB7IHN0eWxlc2hlZXQ6IGFwcGVuZF9lbXB0eV9zdHlsZXNoZWV0KG5vZGUpLCBydWxlczoge30gfTtcbiAgICBtYW5hZ2VkX3N0eWxlcy5zZXQoZG9jLCBpbmZvKTtcbiAgICByZXR1cm4gaW5mbztcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9ydWxlKG5vZGUsIGEsIGIsIGR1cmF0aW9uLCBkZWxheSwgZWFzZSwgZm4sIHVpZCA9IDApIHtcbiAgICBjb25zdCBzdGVwID0gMTYuNjY2IC8gZHVyYXRpb247XG4gICAgbGV0IGtleWZyYW1lcyA9ICd7XFxuJztcbiAgICBmb3IgKGxldCBwID0gMDsgcCA8PSAxOyBwICs9IHN0ZXApIHtcbiAgICAgICAgY29uc3QgdCA9IGEgKyAoYiAtIGEpICogZWFzZShwKTtcbiAgICAgICAga2V5ZnJhbWVzICs9IHAgKiAxMDAgKyBgJXske2ZuKHQsIDEgLSB0KX19XFxuYDtcbiAgICB9XG4gICAgY29uc3QgcnVsZSA9IGtleWZyYW1lcyArIGAxMDAlIHske2ZuKGIsIDEgLSBiKX19XFxufWA7XG4gICAgY29uc3QgbmFtZSA9IGBfX3N2ZWx0ZV8ke2hhc2gocnVsZSl9XyR7dWlkfWA7XG4gICAgY29uc3QgZG9jID0gZ2V0X3Jvb3RfZm9yX3N0eWxlKG5vZGUpO1xuICAgIGNvbnN0IHsgc3R5bGVzaGVldCwgcnVsZXMgfSA9IG1hbmFnZWRfc3R5bGVzLmdldChkb2MpIHx8IGNyZWF0ZV9zdHlsZV9pbmZvcm1hdGlvbihkb2MsIG5vZGUpO1xuICAgIGlmICghcnVsZXNbbmFtZV0pIHtcbiAgICAgICAgcnVsZXNbbmFtZV0gPSB0cnVlO1xuICAgICAgICBzdHlsZXNoZWV0Lmluc2VydFJ1bGUoYEBrZXlmcmFtZXMgJHtuYW1lfSAke3J1bGV9YCwgc3R5bGVzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuICAgIH1cbiAgICBjb25zdCBhbmltYXRpb24gPSBub2RlLnN0eWxlLmFuaW1hdGlvbiB8fCAnJztcbiAgICBub2RlLnN0eWxlLmFuaW1hdGlvbiA9IGAke2FuaW1hdGlvbiA/IGAke2FuaW1hdGlvbn0sIGAgOiAnJ30ke25hbWV9ICR7ZHVyYXRpb259bXMgbGluZWFyICR7ZGVsYXl9bXMgMSBib3RoYDtcbiAgICBhY3RpdmUgKz0gMTtcbiAgICByZXR1cm4gbmFtZTtcbn1cbmZ1bmN0aW9uIGRlbGV0ZV9ydWxlKG5vZGUsIG5hbWUpIHtcbiAgICBjb25zdCBwcmV2aW91cyA9IChub2RlLnN0eWxlLmFuaW1hdGlvbiB8fCAnJykuc3BsaXQoJywgJyk7XG4gICAgY29uc3QgbmV4dCA9IHByZXZpb3VzLmZpbHRlcihuYW1lXG4gICAgICAgID8gYW5pbSA9PiBhbmltLmluZGV4T2YobmFtZSkgPCAwIC8vIHJlbW92ZSBzcGVjaWZpYyBhbmltYXRpb25cbiAgICAgICAgOiBhbmltID0+IGFuaW0uaW5kZXhPZignX19zdmVsdGUnKSA9PT0gLTEgLy8gcmVtb3ZlIGFsbCBTdmVsdGUgYW5pbWF0aW9uc1xuICAgICk7XG4gICAgY29uc3QgZGVsZXRlZCA9IHByZXZpb3VzLmxlbmd0aCAtIG5leHQubGVuZ3RoO1xuICAgIGlmIChkZWxldGVkKSB7XG4gICAgICAgIG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gbmV4dC5qb2luKCcsICcpO1xuICAgICAgICBhY3RpdmUgLT0gZGVsZXRlZDtcbiAgICAgICAgaWYgKCFhY3RpdmUpXG4gICAgICAgICAgICBjbGVhcl9ydWxlcygpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNsZWFyX3J1bGVzKCkge1xuICAgIHJhZigoKSA9PiB7XG4gICAgICAgIGlmIChhY3RpdmUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIG1hbmFnZWRfc3R5bGVzLmZvckVhY2goaW5mbyA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IG93bmVyTm9kZSB9ID0gaW5mby5zdHlsZXNoZWV0O1xuICAgICAgICAgICAgLy8gdGhlcmUgaXMgbm8gb3duZXJOb2RlIGlmIGl0IHJ1bnMgb24ganNkb20uXG4gICAgICAgICAgICBpZiAob3duZXJOb2RlKVxuICAgICAgICAgICAgICAgIGRldGFjaChvd25lck5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgbWFuYWdlZF9zdHlsZXMuY2xlYXIoKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlX2FuaW1hdGlvbihub2RlLCBmcm9tLCBmbiwgcGFyYW1zKSB7XG4gICAgaWYgKCFmcm9tKVxuICAgICAgICByZXR1cm4gbm9vcDtcbiAgICBjb25zdCB0byA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKGZyb20ubGVmdCA9PT0gdG8ubGVmdCAmJiBmcm9tLnJpZ2h0ID09PSB0by5yaWdodCAmJiBmcm9tLnRvcCA9PT0gdG8udG9wICYmIGZyb20uYm90dG9tID09PSB0by5ib3R0b20pXG4gICAgICAgIHJldHVybiBub29wO1xuICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIFxuICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogc2hvdWxkIHRoaXMgYmUgc2VwYXJhdGVkIGZyb20gZGVzdHJ1Y3R1cmluZz8gT3Igc3RhcnQvZW5kIGFkZGVkIHRvIHB1YmxpYyBhcGkgYW5kIGRvY3VtZW50YXRpb24/XG4gICAgc3RhcnQ6IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5LCBcbiAgICAvLyBAdHMtaWdub3JlIHRvZG86XG4gICAgZW5kID0gc3RhcnRfdGltZSArIGR1cmF0aW9uLCB0aWNrID0gbm9vcCwgY3NzIH0gPSBmbihub2RlLCB7IGZyb20sIHRvIH0sIHBhcmFtcyk7XG4gICAgbGV0IHJ1bm5pbmcgPSB0cnVlO1xuICAgIGxldCBzdGFydGVkID0gZmFsc2U7XG4gICAgbGV0IG5hbWU7XG4gICAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIGlmIChjc3MpIHtcbiAgICAgICAgICAgIG5hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAwLCAxLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRlbGF5KSB7XG4gICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgbmFtZSk7XG4gICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgbG9vcChub3cgPT4ge1xuICAgICAgICBpZiAoIXN0YXJ0ZWQgJiYgbm93ID49IHN0YXJ0X3RpbWUpIHtcbiAgICAgICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydGVkICYmIG5vdyA+PSBlbmQpIHtcbiAgICAgICAgICAgIHRpY2soMSwgMCk7XG4gICAgICAgICAgICBzdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFydW5uaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBub3cgLSBzdGFydF90aW1lO1xuICAgICAgICAgICAgY29uc3QgdCA9IDAgKyAxICogZWFzaW5nKHAgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICB0aWNrKHQsIDEgLSB0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICBzdGFydCgpO1xuICAgIHRpY2soMCwgMSk7XG4gICAgcmV0dXJuIHN0b3A7XG59XG5mdW5jdGlvbiBmaXhfcG9zaXRpb24obm9kZSkge1xuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBpZiAoc3R5bGUucG9zaXRpb24gIT09ICdhYnNvbHV0ZScgJiYgc3R5bGUucG9zaXRpb24gIT09ICdmaXhlZCcpIHtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBzdHlsZTtcbiAgICAgICAgY29uc3QgYSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIG5vZGUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBub2RlLnN0eWxlLndpZHRoID0gd2lkdGg7XG4gICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBhZGRfdHJhbnNmb3JtKG5vZGUsIGEpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZF90cmFuc2Zvcm0obm9kZSwgYSkge1xuICAgIGNvbnN0IGIgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChhLmxlZnQgIT09IGIubGVmdCB8fCBhLnRvcCAhPT0gYi50b3ApIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBzdHlsZS50cmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogc3R5bGUudHJhbnNmb3JtO1xuICAgICAgICBub2RlLnN0eWxlLnRyYW5zZm9ybSA9IGAke3RyYW5zZm9ybX0gdHJhbnNsYXRlKCR7YS5sZWZ0IC0gYi5sZWZ0fXB4LCAke2EudG9wIC0gYi50b3B9cHgpYDtcbiAgICB9XG59XG5cbmxldCBjdXJyZW50X2NvbXBvbmVudDtcbmZ1bmN0aW9uIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICBjdXJyZW50X2NvbXBvbmVudCA9IGNvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGdldF9jdXJyZW50X2NvbXBvbmVudCgpIHtcbiAgICBpZiAoIWN1cnJlbnRfY29tcG9uZW50KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Z1bmN0aW9uIGNhbGxlZCBvdXRzaWRlIGNvbXBvbmVudCBpbml0aWFsaXphdGlvbicpO1xuICAgIHJldHVybiBjdXJyZW50X2NvbXBvbmVudDtcbn1cbi8qKlxuICogU2NoZWR1bGVzIGEgY2FsbGJhY2sgdG8gcnVuIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHVwZGF0ZWQgYWZ0ZXIgYW55IHN0YXRlIGNoYW5nZS5cbiAqXG4gKiBUaGUgZmlyc3QgdGltZSB0aGUgY2FsbGJhY2sgcnVucyB3aWxsIGJlIGJlZm9yZSB0aGUgaW5pdGlhbCBgb25Nb3VudGBcbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcyNydW4tdGltZS1zdmVsdGUtYmVmb3JldXBkYXRlXG4gKi9cbmZ1bmN0aW9uIGJlZm9yZVVwZGF0ZShmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmJlZm9yZV91cGRhdGUucHVzaChmbik7XG59XG4vKipcbiAqIFRoZSBgb25Nb3VudGAgZnVuY3Rpb24gc2NoZWR1bGVzIGEgY2FsbGJhY2sgdG8gcnVuIGFzIHNvb24gYXMgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBtb3VudGVkIHRvIHRoZSBET00uXG4gKiBJdCBtdXN0IGJlIGNhbGxlZCBkdXJpbmcgdGhlIGNvbXBvbmVudCdzIGluaXRpYWxpc2F0aW9uIChidXQgZG9lc24ndCBuZWVkIHRvIGxpdmUgKmluc2lkZSogdGhlIGNvbXBvbmVudDtcbiAqIGl0IGNhbiBiZSBjYWxsZWQgZnJvbSBhbiBleHRlcm5hbCBtb2R1bGUpLlxuICpcbiAqIGBvbk1vdW50YCBkb2VzIG5vdCBydW4gaW5zaWRlIGEgW3NlcnZlci1zaWRlIGNvbXBvbmVudF0oL2RvY3MjcnVuLXRpbWUtc2VydmVyLXNpZGUtY29tcG9uZW50LWFwaSkuXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3MjcnVuLXRpbWUtc3ZlbHRlLW9ubW91bnRcbiAqL1xuZnVuY3Rpb24gb25Nb3VudChmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLm9uX21vdW50LnB1c2goZm4pO1xufVxuLyoqXG4gKiBTY2hlZHVsZXMgYSBjYWxsYmFjayB0byBydW4gaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiB1cGRhdGVkLlxuICpcbiAqIFRoZSBmaXJzdCB0aW1lIHRoZSBjYWxsYmFjayBydW5zIHdpbGwgYmUgYWZ0ZXIgdGhlIGluaXRpYWwgYG9uTW91bnRgXG4gKi9cbmZ1bmN0aW9uIGFmdGVyVXBkYXRlKGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuYWZ0ZXJfdXBkYXRlLnB1c2goZm4pO1xufVxuLyoqXG4gKiBTY2hlZHVsZXMgYSBjYWxsYmFjayB0byBydW4gaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgdW5tb3VudGVkLlxuICpcbiAqIE91dCBvZiBgb25Nb3VudGAsIGBiZWZvcmVVcGRhdGVgLCBgYWZ0ZXJVcGRhdGVgIGFuZCBgb25EZXN0cm95YCwgdGhpcyBpcyB0aGVcbiAqIG9ubHkgb25lIHRoYXQgcnVucyBpbnNpZGUgYSBzZXJ2ZXItc2lkZSBjb21wb25lbnQuXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3MjcnVuLXRpbWUtc3ZlbHRlLW9uZGVzdHJveVxuICovXG5mdW5jdGlvbiBvbkRlc3Ryb3koZm4pIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5vbl9kZXN0cm95LnB1c2goZm4pO1xufVxuLyoqXG4gKiBDcmVhdGVzIGFuIGV2ZW50IGRpc3BhdGNoZXIgdGhhdCBjYW4gYmUgdXNlZCB0byBkaXNwYXRjaCBbY29tcG9uZW50IGV2ZW50c10oL2RvY3MjdGVtcGxhdGUtc3ludGF4LWNvbXBvbmVudC1kaXJlY3RpdmVzLW9uLWV2ZW50bmFtZSkuXG4gKiBFdmVudCBkaXNwYXRjaGVycyBhcmUgZnVuY3Rpb25zIHRoYXQgY2FuIHRha2UgdHdvIGFyZ3VtZW50czogYG5hbWVgIGFuZCBgZGV0YWlsYC5cbiAqXG4gKiBDb21wb25lbnQgZXZlbnRzIGNyZWF0ZWQgd2l0aCBgY3JlYXRlRXZlbnREaXNwYXRjaGVyYCBjcmVhdGUgYVxuICogW0N1c3RvbUV2ZW50XShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ3VzdG9tRXZlbnQpLlxuICogVGhlc2UgZXZlbnRzIGRvIG5vdCBbYnViYmxlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0xlYXJuL0phdmFTY3JpcHQvQnVpbGRpbmdfYmxvY2tzL0V2ZW50cyNFdmVudF9idWJibGluZ19hbmRfY2FwdHVyZSkuXG4gKiBUaGUgYGRldGFpbGAgYXJndW1lbnQgY29ycmVzcG9uZHMgdG8gdGhlIFtDdXN0b21FdmVudC5kZXRhaWxdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DdXN0b21FdmVudC9kZXRhaWwpXG4gKiBwcm9wZXJ0eSBhbmQgY2FuIGNvbnRhaW4gYW55IHR5cGUgb2YgZGF0YS5cbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcyNydW4tdGltZS1zdmVsdGUtY3JlYXRlZXZlbnRkaXNwYXRjaGVyXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBnZXRfY3VycmVudF9jb21wb25lbnQoKTtcbiAgICByZXR1cm4gKHR5cGUsIGRldGFpbCwgeyBjYW5jZWxhYmxlID0gZmFsc2UgfSA9IHt9KSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9IGNvbXBvbmVudC4kJC5jYWxsYmFja3NbdHlwZV07XG4gICAgICAgIGlmIChjYWxsYmFja3MpIHtcbiAgICAgICAgICAgIC8vIFRPRE8gYXJlIHRoZXJlIHNpdHVhdGlvbnMgd2hlcmUgZXZlbnRzIGNvdWxkIGJlIGRpc3BhdGNoZWRcbiAgICAgICAgICAgIC8vIGluIGEgc2VydmVyIChub24tRE9NKSBlbnZpcm9ubWVudD9cbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gY3VzdG9tX2V2ZW50KHR5cGUsIGRldGFpbCwgeyBjYW5jZWxhYmxlIH0pO1xuICAgICAgICAgICAgY2FsbGJhY2tzLnNsaWNlKCkuZm9yRWFjaChmbiA9PiB7XG4gICAgICAgICAgICAgICAgZm4uY2FsbChjb21wb25lbnQsIGV2ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuICFldmVudC5kZWZhdWx0UHJldmVudGVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG59XG4vKipcbiAqIEFzc29jaWF0ZXMgYW4gYXJiaXRyYXJ5IGBjb250ZXh0YCBvYmplY3Qgd2l0aCB0aGUgY3VycmVudCBjb21wb25lbnQgYW5kIHRoZSBzcGVjaWZpZWQgYGtleWBcbiAqIGFuZCByZXR1cm5zIHRoYXQgb2JqZWN0LiBUaGUgY29udGV4dCBpcyB0aGVuIGF2YWlsYWJsZSB0byBjaGlsZHJlbiBvZiB0aGUgY29tcG9uZW50XG4gKiAoaW5jbHVkaW5nIHNsb3R0ZWQgY29udGVudCkgd2l0aCBgZ2V0Q29udGV4dGAuXG4gKlxuICogTGlrZSBsaWZlY3ljbGUgZnVuY3Rpb25zLCB0aGlzIG11c3QgYmUgY2FsbGVkIGR1cmluZyBjb21wb25lbnQgaW5pdGlhbGlzYXRpb24uXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3MjcnVuLXRpbWUtc3ZlbHRlLXNldGNvbnRleHRcbiAqL1xuZnVuY3Rpb24gc2V0Q29udGV4dChrZXksIGNvbnRleHQpIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0LnNldChrZXksIGNvbnRleHQpO1xuICAgIHJldHVybiBjb250ZXh0O1xufVxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIGNvbnRleHQgdGhhdCBiZWxvbmdzIHRvIHRoZSBjbG9zZXN0IHBhcmVudCBjb21wb25lbnQgd2l0aCB0aGUgc3BlY2lmaWVkIGBrZXlgLlxuICogTXVzdCBiZSBjYWxsZWQgZHVyaW5nIGNvbXBvbmVudCBpbml0aWFsaXNhdGlvbi5cbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcyNydW4tdGltZS1zdmVsdGUtZ2V0Y29udGV4dFxuICovXG5mdW5jdGlvbiBnZXRDb250ZXh0KGtleSkge1xuICAgIHJldHVybiBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0LmdldChrZXkpO1xufVxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIHdob2xlIGNvbnRleHQgbWFwIHRoYXQgYmVsb25ncyB0byB0aGUgY2xvc2VzdCBwYXJlbnQgY29tcG9uZW50LlxuICogTXVzdCBiZSBjYWxsZWQgZHVyaW5nIGNvbXBvbmVudCBpbml0aWFsaXNhdGlvbi4gVXNlZnVsLCBmb3IgZXhhbXBsZSwgaWYgeW91XG4gKiBwcm9ncmFtbWF0aWNhbGx5IGNyZWF0ZSBhIGNvbXBvbmVudCBhbmQgd2FudCB0byBwYXNzIHRoZSBleGlzdGluZyBjb250ZXh0IHRvIGl0LlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzI3J1bi10aW1lLXN2ZWx0ZS1nZXRhbGxjb250ZXh0c1xuICovXG5mdW5jdGlvbiBnZXRBbGxDb250ZXh0cygpIHtcbiAgICByZXR1cm4gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuY29udGV4dDtcbn1cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgYSBnaXZlbiBga2V5YCBoYXMgYmVlbiBzZXQgaW4gdGhlIGNvbnRleHQgb2YgYSBwYXJlbnQgY29tcG9uZW50LlxuICogTXVzdCBiZSBjYWxsZWQgZHVyaW5nIGNvbXBvbmVudCBpbml0aWFsaXNhdGlvbi5cbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcyNydW4tdGltZS1zdmVsdGUtaGFzY29udGV4dFxuICovXG5mdW5jdGlvbiBoYXNDb250ZXh0KGtleSkge1xuICAgIHJldHVybiBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0LmhhcyhrZXkpO1xufVxuLy8gVE9ETyBmaWd1cmUgb3V0IGlmIHdlIHN0aWxsIHdhbnQgdG8gc3VwcG9ydFxuLy8gc2hvcnRoYW5kIGV2ZW50cywgb3IgaWYgd2Ugd2FudCB0byBpbXBsZW1lbnRcbi8vIGEgcmVhbCBidWJibGluZyBtZWNoYW5pc21cbmZ1bmN0aW9uIGJ1YmJsZShjb21wb25lbnQsIGV2ZW50KSB7XG4gICAgY29uc3QgY2FsbGJhY2tzID0gY29tcG9uZW50LiQkLmNhbGxiYWNrc1tldmVudC50eXBlXTtcbiAgICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY2FsbGJhY2tzLnNsaWNlKCkuZm9yRWFjaChmbiA9PiBmbi5jYWxsKHRoaXMsIGV2ZW50KSk7XG4gICAgfVxufVxuXG5jb25zdCBkaXJ0eV9jb21wb25lbnRzID0gW107XG5jb25zdCBpbnRyb3MgPSB7IGVuYWJsZWQ6IGZhbHNlIH07XG5jb25zdCBiaW5kaW5nX2NhbGxiYWNrcyA9IFtdO1xubGV0IHJlbmRlcl9jYWxsYmFja3MgPSBbXTtcbmNvbnN0IGZsdXNoX2NhbGxiYWNrcyA9IFtdO1xuY29uc3QgcmVzb2x2ZWRfcHJvbWlzZSA9IC8qIEBfX1BVUkVfXyAqLyBQcm9taXNlLnJlc29sdmUoKTtcbmxldCB1cGRhdGVfc2NoZWR1bGVkID0gZmFsc2U7XG5mdW5jdGlvbiBzY2hlZHVsZV91cGRhdGUoKSB7XG4gICAgaWYgKCF1cGRhdGVfc2NoZWR1bGVkKSB7XG4gICAgICAgIHVwZGF0ZV9zY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgICByZXNvbHZlZF9wcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRpY2soKSB7XG4gICAgc2NoZWR1bGVfdXBkYXRlKCk7XG4gICAgcmV0dXJuIHJlc29sdmVkX3Byb21pc2U7XG59XG5mdW5jdGlvbiBhZGRfcmVuZGVyX2NhbGxiYWNrKGZuKSB7XG4gICAgcmVuZGVyX2NhbGxiYWNrcy5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIGFkZF9mbHVzaF9jYWxsYmFjayhmbikge1xuICAgIGZsdXNoX2NhbGxiYWNrcy5wdXNoKGZuKTtcbn1cbi8vIGZsdXNoKCkgY2FsbHMgY2FsbGJhY2tzIGluIHRoaXMgb3JkZXI6XG4vLyAxLiBBbGwgYmVmb3JlVXBkYXRlIGNhbGxiYWNrcywgaW4gb3JkZXI6IHBhcmVudHMgYmVmb3JlIGNoaWxkcmVuXG4vLyAyLiBBbGwgYmluZDp0aGlzIGNhbGxiYWNrcywgaW4gcmV2ZXJzZSBvcmRlcjogY2hpbGRyZW4gYmVmb3JlIHBhcmVudHMuXG4vLyAzLiBBbGwgYWZ0ZXJVcGRhdGUgY2FsbGJhY2tzLCBpbiBvcmRlcjogcGFyZW50cyBiZWZvcmUgY2hpbGRyZW4uIEVYQ0VQVFxuLy8gICAgZm9yIGFmdGVyVXBkYXRlcyBjYWxsZWQgZHVyaW5nIHRoZSBpbml0aWFsIG9uTW91bnQsIHdoaWNoIGFyZSBjYWxsZWQgaW5cbi8vICAgIHJldmVyc2Ugb3JkZXI6IGNoaWxkcmVuIGJlZm9yZSBwYXJlbnRzLlxuLy8gU2luY2UgY2FsbGJhY2tzIG1pZ2h0IHVwZGF0ZSBjb21wb25lbnQgdmFsdWVzLCB3aGljaCBjb3VsZCB0cmlnZ2VyIGFub3RoZXJcbi8vIGNhbGwgdG8gZmx1c2goKSwgdGhlIGZvbGxvd2luZyBzdGVwcyBndWFyZCBhZ2FpbnN0IHRoaXM6XG4vLyAxLiBEdXJpbmcgYmVmb3JlVXBkYXRlLCBhbnkgdXBkYXRlZCBjb21wb25lbnRzIHdpbGwgYmUgYWRkZWQgdG8gdGhlXG4vLyAgICBkaXJ0eV9jb21wb25lbnRzIGFycmF5IGFuZCB3aWxsIGNhdXNlIGEgcmVlbnRyYW50IGNhbGwgdG8gZmx1c2goKS4gQmVjYXVzZVxuLy8gICAgdGhlIGZsdXNoIGluZGV4IGlzIGtlcHQgb3V0c2lkZSB0aGUgZnVuY3Rpb24sIHRoZSByZWVudHJhbnQgY2FsbCB3aWxsIHBpY2tcbi8vICAgIHVwIHdoZXJlIHRoZSBlYXJsaWVyIGNhbGwgbGVmdCBvZmYgYW5kIGdvIHRocm91Z2ggYWxsIGRpcnR5IGNvbXBvbmVudHMuIFRoZVxuLy8gICAgY3VycmVudF9jb21wb25lbnQgdmFsdWUgaXMgc2F2ZWQgYW5kIHJlc3RvcmVkIHNvIHRoYXQgdGhlIHJlZW50cmFudCBjYWxsIHdpbGxcbi8vICAgIG5vdCBpbnRlcmZlcmUgd2l0aCB0aGUgXCJwYXJlbnRcIiBmbHVzaCgpIGNhbGwuXG4vLyAyLiBiaW5kOnRoaXMgY2FsbGJhY2tzIGNhbm5vdCB0cmlnZ2VyIG5ldyBmbHVzaCgpIGNhbGxzLlxuLy8gMy4gRHVyaW5nIGFmdGVyVXBkYXRlLCBhbnkgdXBkYXRlZCBjb21wb25lbnRzIHdpbGwgTk9UIGhhdmUgdGhlaXIgYWZ0ZXJVcGRhdGVcbi8vICAgIGNhbGxiYWNrIGNhbGxlZCBhIHNlY29uZCB0aW1lOyB0aGUgc2Vlbl9jYWxsYmFja3Mgc2V0LCBvdXRzaWRlIHRoZSBmbHVzaCgpXG4vLyAgICBmdW5jdGlvbiwgZ3VhcmFudGVlcyB0aGlzIGJlaGF2aW9yLlxuY29uc3Qgc2Vlbl9jYWxsYmFja3MgPSBuZXcgU2V0KCk7XG5sZXQgZmx1c2hpZHggPSAwOyAvLyBEbyAqbm90KiBtb3ZlIHRoaXMgaW5zaWRlIHRoZSBmbHVzaCgpIGZ1bmN0aW9uXG5mdW5jdGlvbiBmbHVzaCgpIHtcbiAgICAvLyBEbyBub3QgcmVlbnRlciBmbHVzaCB3aGlsZSBkaXJ0eSBjb21wb25lbnRzIGFyZSB1cGRhdGVkLCBhcyB0aGlzIGNhblxuICAgIC8vIHJlc3VsdCBpbiBhbiBpbmZpbml0ZSBsb29wLiBJbnN0ZWFkLCBsZXQgdGhlIGlubmVyIGZsdXNoIGhhbmRsZSBpdC5cbiAgICAvLyBSZWVudHJhbmN5IGlzIG9rIGFmdGVyd2FyZHMgZm9yIGJpbmRpbmdzIGV0Yy5cbiAgICBpZiAoZmx1c2hpZHggIT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzYXZlZF9jb21wb25lbnQgPSBjdXJyZW50X2NvbXBvbmVudDtcbiAgICBkbyB7XG4gICAgICAgIC8vIGZpcnN0LCBjYWxsIGJlZm9yZVVwZGF0ZSBmdW5jdGlvbnNcbiAgICAgICAgLy8gYW5kIHVwZGF0ZSBjb21wb25lbnRzXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB3aGlsZSAoZmx1c2hpZHggPCBkaXJ0eV9jb21wb25lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGRpcnR5X2NvbXBvbmVudHNbZmx1c2hpZHhdO1xuICAgICAgICAgICAgICAgIGZsdXNoaWR4Kys7XG4gICAgICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlKGNvbXBvbmVudC4kJCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIHJlc2V0IGRpcnR5IHN0YXRlIHRvIG5vdCBlbmQgdXAgaW4gYSBkZWFkbG9ja2VkIHN0YXRlIGFuZCB0aGVuIHJldGhyb3dcbiAgICAgICAgICAgIGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIGZsdXNoaWR4ID0gMDtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KG51bGwpO1xuICAgICAgICBkaXJ0eV9jb21wb25lbnRzLmxlbmd0aCA9IDA7XG4gICAgICAgIGZsdXNoaWR4ID0gMDtcbiAgICAgICAgd2hpbGUgKGJpbmRpbmdfY2FsbGJhY2tzLmxlbmd0aClcbiAgICAgICAgICAgIGJpbmRpbmdfY2FsbGJhY2tzLnBvcCgpKCk7XG4gICAgICAgIC8vIHRoZW4sIG9uY2UgY29tcG9uZW50cyBhcmUgdXBkYXRlZCwgY2FsbFxuICAgICAgICAvLyBhZnRlclVwZGF0ZSBmdW5jdGlvbnMuIFRoaXMgbWF5IGNhdXNlXG4gICAgICAgIC8vIHN1YnNlcXVlbnQgdXBkYXRlcy4uLlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbmRlcl9jYWxsYmFja3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gcmVuZGVyX2NhbGxiYWNrc1tpXTtcbiAgICAgICAgICAgIGlmICghc2Vlbl9jYWxsYmFja3MuaGFzKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgICAgIC8vIC4uLnNvIGd1YXJkIGFnYWluc3QgaW5maW5pdGUgbG9vcHNcbiAgICAgICAgICAgICAgICBzZWVuX2NhbGxiYWNrcy5hZGQoY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyX2NhbGxiYWNrcy5sZW5ndGggPSAwO1xuICAgIH0gd2hpbGUgKGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoKTtcbiAgICB3aGlsZSAoZmx1c2hfY2FsbGJhY2tzLmxlbmd0aCkge1xuICAgICAgICBmbHVzaF9jYWxsYmFja3MucG9wKCkoKTtcbiAgICB9XG4gICAgdXBkYXRlX3NjaGVkdWxlZCA9IGZhbHNlO1xuICAgIHNlZW5fY2FsbGJhY2tzLmNsZWFyKCk7XG4gICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHNhdmVkX2NvbXBvbmVudCk7XG59XG5mdW5jdGlvbiB1cGRhdGUoJCQpIHtcbiAgICBpZiAoJCQuZnJhZ21lbnQgIT09IG51bGwpIHtcbiAgICAgICAgJCQudXBkYXRlKCk7XG4gICAgICAgIHJ1bl9hbGwoJCQuYmVmb3JlX3VwZGF0ZSk7XG4gICAgICAgIGNvbnN0IGRpcnR5ID0gJCQuZGlydHk7XG4gICAgICAgICQkLmRpcnR5ID0gWy0xXTtcbiAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQucCgkJC5jdHgsIGRpcnR5KTtcbiAgICAgICAgJCQuYWZ0ZXJfdXBkYXRlLmZvckVhY2goYWRkX3JlbmRlcl9jYWxsYmFjayk7XG4gICAgfVxufVxuLyoqXG4gKiBVc2VmdWwgZm9yIGV4YW1wbGUgdG8gZXhlY3V0ZSByZW1haW5pbmcgYGFmdGVyVXBkYXRlYCBjYWxsYmFja3MgYmVmb3JlIGV4ZWN1dGluZyBgZGVzdHJveWAuXG4gKi9cbmZ1bmN0aW9uIGZsdXNoX3JlbmRlcl9jYWxsYmFja3MoZm5zKSB7XG4gICAgY29uc3QgZmlsdGVyZWQgPSBbXTtcbiAgICBjb25zdCB0YXJnZXRzID0gW107XG4gICAgcmVuZGVyX2NhbGxiYWNrcy5mb3JFYWNoKChjKSA9PiBmbnMuaW5kZXhPZihjKSA9PT0gLTEgPyBmaWx0ZXJlZC5wdXNoKGMpIDogdGFyZ2V0cy5wdXNoKGMpKTtcbiAgICB0YXJnZXRzLmZvckVhY2goKGMpID0+IGMoKSk7XG4gICAgcmVuZGVyX2NhbGxiYWNrcyA9IGZpbHRlcmVkO1xufVxuXG5sZXQgcHJvbWlzZTtcbmZ1bmN0aW9uIHdhaXQoKSB7XG4gICAgaWYgKCFwcm9taXNlKSB7XG4gICAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgcHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHByb21pc2UgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5mdW5jdGlvbiBkaXNwYXRjaChub2RlLCBkaXJlY3Rpb24sIGtpbmQpIHtcbiAgICBub2RlLmRpc3BhdGNoRXZlbnQoY3VzdG9tX2V2ZW50KGAke2RpcmVjdGlvbiA/ICdpbnRybycgOiAnb3V0cm8nfSR7a2luZH1gKSk7XG59XG5jb25zdCBvdXRyb2luZyA9IG5ldyBTZXQoKTtcbmxldCBvdXRyb3M7XG5mdW5jdGlvbiBncm91cF9vdXRyb3MoKSB7XG4gICAgb3V0cm9zID0ge1xuICAgICAgICByOiAwLFxuICAgICAgICBjOiBbXSxcbiAgICAgICAgcDogb3V0cm9zIC8vIHBhcmVudCBncm91cFxuICAgIH07XG59XG5mdW5jdGlvbiBjaGVja19vdXRyb3MoKSB7XG4gICAgaWYgKCFvdXRyb3Mucikge1xuICAgICAgICBydW5fYWxsKG91dHJvcy5jKTtcbiAgICB9XG4gICAgb3V0cm9zID0gb3V0cm9zLnA7XG59XG5mdW5jdGlvbiB0cmFuc2l0aW9uX2luKGJsb2NrLCBsb2NhbCkge1xuICAgIGlmIChibG9jayAmJiBibG9jay5pKSB7XG4gICAgICAgIG91dHJvaW5nLmRlbGV0ZShibG9jayk7XG4gICAgICAgIGJsb2NrLmkobG9jYWwpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRyYW5zaXRpb25fb3V0KGJsb2NrLCBsb2NhbCwgZGV0YWNoLCBjYWxsYmFjaykge1xuICAgIGlmIChibG9jayAmJiBibG9jay5vKSB7XG4gICAgICAgIGlmIChvdXRyb2luZy5oYXMoYmxvY2spKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBvdXRyb2luZy5hZGQoYmxvY2spO1xuICAgICAgICBvdXRyb3MuYy5wdXNoKCgpID0+IHtcbiAgICAgICAgICAgIG91dHJvaW5nLmRlbGV0ZShibG9jayk7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoZGV0YWNoKVxuICAgICAgICAgICAgICAgICAgICBibG9jay5kKDEpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBibG9jay5vKGxvY2FsKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG59XG5jb25zdCBudWxsX3RyYW5zaXRpb24gPSB7IGR1cmF0aW9uOiAwIH07XG5mdW5jdGlvbiBjcmVhdGVfaW5fdHJhbnNpdGlvbihub2RlLCBmbiwgcGFyYW1zKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsgZGlyZWN0aW9uOiAnaW4nIH07XG4gICAgbGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcywgb3B0aW9ucyk7XG4gICAgbGV0IHJ1bm5pbmcgPSBmYWxzZTtcbiAgICBsZXQgYW5pbWF0aW9uX25hbWU7XG4gICAgbGV0IHRhc2s7XG4gICAgbGV0IHVpZCA9IDA7XG4gICAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgICAgaWYgKGFuaW1hdGlvbl9uYW1lKVxuICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnbygpIHtcbiAgICAgICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgdGljayA9IG5vb3AsIGNzcyB9ID0gY29uZmlnIHx8IG51bGxfdHJhbnNpdGlvbjtcbiAgICAgICAgaWYgKGNzcylcbiAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgMCwgMSwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcywgdWlkKyspO1xuICAgICAgICB0aWNrKDAsIDEpO1xuICAgICAgICBjb25zdCBzdGFydF90aW1lID0gbm93KCkgKyBkZWxheTtcbiAgICAgICAgY29uc3QgZW5kX3RpbWUgPSBzdGFydF90aW1lICsgZHVyYXRpb247XG4gICAgICAgIGlmICh0YXNrKVxuICAgICAgICAgICAgdGFzay5hYm9ydCgpO1xuICAgICAgICBydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiBkaXNwYXRjaChub2RlLCB0cnVlLCAnc3RhcnQnKSk7XG4gICAgICAgIHRhc2sgPSBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gZW5kX3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGljaygxLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgdHJ1ZSwgJ2VuZCcpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gc3RhcnRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ID0gZWFzaW5nKChub3cgLSBzdGFydF90aW1lKSAvIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgdGljayh0LCAxIC0gdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJ1bm5pbmc7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgc3RhcnRlZCA9IGZhbHNlO1xuICAgIHJldHVybiB7XG4gICAgICAgIHN0YXJ0KCkge1xuICAgICAgICAgICAgaWYgKHN0YXJ0ZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgc3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlKTtcbiAgICAgICAgICAgIGlmIChpc19mdW5jdGlvbihjb25maWcpKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnID0gY29uZmlnKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHdhaXQoKS50aGVuKGdvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGdvKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGludmFsaWRhdGUoKSB7XG4gICAgICAgICAgICBzdGFydGVkID0gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIGVuZCgpIHtcbiAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBjcmVhdGVfb3V0X3RyYW5zaXRpb24obm9kZSwgZm4sIHBhcmFtcykge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7IGRpcmVjdGlvbjogJ291dCcgfTtcbiAgICBsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zLCBvcHRpb25zKTtcbiAgICBsZXQgcnVubmluZyA9IHRydWU7XG4gICAgbGV0IGFuaW1hdGlvbl9uYW1lO1xuICAgIGNvbnN0IGdyb3VwID0gb3V0cm9zO1xuICAgIGdyb3VwLnIgKz0gMTtcbiAgICBmdW5jdGlvbiBnbygpIHtcbiAgICAgICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgdGljayA9IG5vb3AsIGNzcyB9ID0gY29uZmlnIHx8IG51bGxfdHJhbnNpdGlvbjtcbiAgICAgICAgaWYgKGNzcylcbiAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgMSwgMCwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcyk7XG4gICAgICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5O1xuICAgICAgICBjb25zdCBlbmRfdGltZSA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbjtcbiAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiBkaXNwYXRjaChub2RlLCBmYWxzZSwgJ3N0YXJ0JykpO1xuICAgICAgICBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gZW5kX3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGljaygwLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgZmFsc2UsICdlbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEtLWdyb3VwLnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2lsbCByZXN1bHQgaW4gYGVuZCgpYCBiZWluZyBjYWxsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzbyB3ZSBkb24ndCBuZWVkIHRvIGNsZWFuIHVwIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bl9hbGwoZ3JvdXAuYyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm93ID49IHN0YXJ0X3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IGVhc2luZygobm93IC0gc3RhcnRfdGltZSkgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRpY2soMSAtIHQsIHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBydW5uaW5nO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgd2FpdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uZmlnID0gY29uZmlnKG9wdGlvbnMpO1xuICAgICAgICAgICAgZ28oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBnbygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBlbmQocmVzZXQpIHtcbiAgICAgICAgICAgIGlmIChyZXNldCAmJiBjb25maWcudGljaykge1xuICAgICAgICAgICAgICAgIGNvbmZpZy50aWNrKDEsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uX25hbWUpXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUsIGFuaW1hdGlvbl9uYW1lKTtcbiAgICAgICAgICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlX2JpZGlyZWN0aW9uYWxfdHJhbnNpdGlvbihub2RlLCBmbiwgcGFyYW1zLCBpbnRybykge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7IGRpcmVjdGlvbjogJ2JvdGgnIH07XG4gICAgbGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcywgb3B0aW9ucyk7XG4gICAgbGV0IHQgPSBpbnRybyA/IDAgOiAxO1xuICAgIGxldCBydW5uaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgIGxldCBwZW5kaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgIGxldCBhbmltYXRpb25fbmFtZSA9IG51bGw7XG4gICAgZnVuY3Rpb24gY2xlYXJfYW5pbWF0aW9uKCkge1xuICAgICAgICBpZiAoYW5pbWF0aW9uX25hbWUpXG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGluaXQocHJvZ3JhbSwgZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgZCA9IChwcm9ncmFtLmIgLSB0KTtcbiAgICAgICAgZHVyYXRpb24gKj0gTWF0aC5hYnMoZCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhOiB0LFxuICAgICAgICAgICAgYjogcHJvZ3JhbS5iLFxuICAgICAgICAgICAgZCxcbiAgICAgICAgICAgIGR1cmF0aW9uLFxuICAgICAgICAgICAgc3RhcnQ6IHByb2dyYW0uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IHByb2dyYW0uc3RhcnQgKyBkdXJhdGlvbixcbiAgICAgICAgICAgIGdyb3VwOiBwcm9ncmFtLmdyb3VwXG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdvKGIpIHtcbiAgICAgICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgdGljayA9IG5vb3AsIGNzcyB9ID0gY29uZmlnIHx8IG51bGxfdHJhbnNpdGlvbjtcbiAgICAgICAgY29uc3QgcHJvZ3JhbSA9IHtcbiAgICAgICAgICAgIHN0YXJ0OiBub3coKSArIGRlbGF5LFxuICAgICAgICAgICAgYlxuICAgICAgICB9O1xuICAgICAgICBpZiAoIWIpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogaW1wcm92ZSB0eXBpbmdzXG4gICAgICAgICAgICBwcm9ncmFtLmdyb3VwID0gb3V0cm9zO1xuICAgICAgICAgICAgb3V0cm9zLnIgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocnVubmluZ19wcm9ncmFtIHx8IHBlbmRpbmdfcHJvZ3JhbSkge1xuICAgICAgICAgICAgcGVuZGluZ19wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIHRoaXMgaXMgYW4gaW50cm8sIGFuZCB0aGVyZSdzIGEgZGVsYXksIHdlIG5lZWQgdG8gZG9cbiAgICAgICAgICAgIC8vIGFuIGluaXRpYWwgdGljayBhbmQvb3IgYXBwbHkgQ1NTIGFuaW1hdGlvbiBpbW1lZGlhdGVseVxuICAgICAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgdCwgYiwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYilcbiAgICAgICAgICAgICAgICB0aWNrKDAsIDEpO1xuICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gaW5pdChwcm9ncmFtLCBkdXJhdGlvbik7XG4gICAgICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIGIsICdzdGFydCcpKTtcbiAgICAgICAgICAgIGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGVuZGluZ19wcm9ncmFtICYmIG5vdyA+IHBlbmRpbmdfcHJvZ3JhbS5zdGFydCkge1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nX3Byb2dyYW0gPSBpbml0KHBlbmRpbmdfcHJvZ3JhbSwgZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCBydW5uaW5nX3Byb2dyYW0uYiwgJ3N0YXJ0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCB0LCBydW5uaW5nX3Byb2dyYW0uYiwgcnVubmluZ19wcm9ncmFtLmR1cmF0aW9uLCAwLCBlYXNpbmcsIGNvbmZpZy5jc3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChydW5uaW5nX3Byb2dyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBydW5uaW5nX3Byb2dyYW0uZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrKHQgPSBydW5uaW5nX3Byb2dyYW0uYiwgMSAtIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgcnVubmluZ19wcm9ncmFtLmIsICdlbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGVuZGluZ19wcm9ncmFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UncmUgZG9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChydW5uaW5nX3Byb2dyYW0uYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnRybyBcdTIwMTQgd2UgY2FuIHRpZHkgdXAgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJfYW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvdXRybyBcdTIwMTQgbmVlZHMgdG8gYmUgY29vcmRpbmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEtLXJ1bm5pbmdfcHJvZ3JhbS5ncm91cC5yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVuX2FsbChydW5uaW5nX3Byb2dyYW0uZ3JvdXAuYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChub3cgPj0gcnVubmluZ19wcm9ncmFtLnN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwID0gbm93IC0gcnVubmluZ19wcm9ncmFtLnN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IHJ1bm5pbmdfcHJvZ3JhbS5hICsgcnVubmluZ19wcm9ncmFtLmQgKiBlYXNpbmcocCAvIHJ1bm5pbmdfcHJvZ3JhbS5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrKHQsIDEgLSB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gISEocnVubmluZ19wcm9ncmFtIHx8IHBlbmRpbmdfcHJvZ3JhbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBydW4oYikge1xuICAgICAgICAgICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICB3YWl0KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnID0gY29uZmlnKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICBnbyhiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGdvKGIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbmQoKSB7XG4gICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IHBlbmRpbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBoYW5kbGVfcHJvbWlzZShwcm9taXNlLCBpbmZvKSB7XG4gICAgY29uc3QgdG9rZW4gPSBpbmZvLnRva2VuID0ge307XG4gICAgZnVuY3Rpb24gdXBkYXRlKHR5cGUsIGluZGV4LCBrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmIChpbmZvLnRva2VuICE9PSB0b2tlbilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaW5mby5yZXNvbHZlZCA9IHZhbHVlO1xuICAgICAgICBsZXQgY2hpbGRfY3R4ID0gaW5mby5jdHg7XG4gICAgICAgIGlmIChrZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2hpbGRfY3R4ID0gY2hpbGRfY3R4LnNsaWNlKCk7XG4gICAgICAgICAgICBjaGlsZF9jdHhba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJsb2NrID0gdHlwZSAmJiAoaW5mby5jdXJyZW50ID0gdHlwZSkoY2hpbGRfY3R4KTtcbiAgICAgICAgbGV0IG5lZWRzX2ZsdXNoID0gZmFsc2U7XG4gICAgICAgIGlmIChpbmZvLmJsb2NrKSB7XG4gICAgICAgICAgICBpZiAoaW5mby5ibG9ja3MpIHtcbiAgICAgICAgICAgICAgICBpbmZvLmJsb2Nrcy5mb3JFYWNoKChibG9jaywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSAhPT0gaW5kZXggJiYgYmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwX291dHJvcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbl9vdXQoYmxvY2ssIDEsIDEsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5mby5ibG9ja3NbaV0gPT09IGJsb2NrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZm8uYmxvY2tzW2ldID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrX291dHJvcygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbmZvLmJsb2NrLmQoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBibG9jay5jKCk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uX2luKGJsb2NrLCAxKTtcbiAgICAgICAgICAgIGJsb2NrLm0oaW5mby5tb3VudCgpLCBpbmZvLmFuY2hvcik7XG4gICAgICAgICAgICBuZWVkc19mbHVzaCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5mby5ibG9jayA9IGJsb2NrO1xuICAgICAgICBpZiAoaW5mby5ibG9ja3MpXG4gICAgICAgICAgICBpbmZvLmJsb2Nrc1tpbmRleF0gPSBibG9jaztcbiAgICAgICAgaWYgKG5lZWRzX2ZsdXNoKSB7XG4gICAgICAgICAgICBmbHVzaCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChpc19wcm9taXNlKHByb21pc2UpKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRfY29tcG9uZW50ID0gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCk7XG4gICAgICAgIHByb21pc2UudGhlbih2YWx1ZSA9PiB7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY3VycmVudF9jb21wb25lbnQpO1xuICAgICAgICAgICAgdXBkYXRlKGluZm8udGhlbiwgMSwgaW5mby52YWx1ZSwgdmFsdWUpO1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KG51bGwpO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY3VycmVudF9jb21wb25lbnQpO1xuICAgICAgICAgICAgdXBkYXRlKGluZm8uY2F0Y2gsIDIsIGluZm8uZXJyb3IsIGVycm9yKTtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChudWxsKTtcbiAgICAgICAgICAgIGlmICghaW5mby5oYXNDYXRjaCkge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gaWYgd2UgcHJldmlvdXNseSBoYWQgYSB0aGVuL2NhdGNoIGJsb2NrLCBkZXN0cm95IGl0XG4gICAgICAgIGlmIChpbmZvLmN1cnJlbnQgIT09IGluZm8ucGVuZGluZykge1xuICAgICAgICAgICAgdXBkYXRlKGluZm8ucGVuZGluZywgMCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGluZm8uY3VycmVudCAhPT0gaW5mby50aGVuKSB7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby50aGVuLCAxLCBpbmZvLnZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGluZm8ucmVzb2x2ZWQgPSBwcm9taXNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHVwZGF0ZV9hd2FpdF9ibG9ja19icmFuY2goaW5mbywgY3R4LCBkaXJ0eSkge1xuICAgIGNvbnN0IGNoaWxkX2N0eCA9IGN0eC5zbGljZSgpO1xuICAgIGNvbnN0IHsgcmVzb2x2ZWQgfSA9IGluZm87XG4gICAgaWYgKGluZm8uY3VycmVudCA9PT0gaW5mby50aGVuKSB7XG4gICAgICAgIGNoaWxkX2N0eFtpbmZvLnZhbHVlXSA9IHJlc29sdmVkO1xuICAgIH1cbiAgICBpZiAoaW5mby5jdXJyZW50ID09PSBpbmZvLmNhdGNoKSB7XG4gICAgICAgIGNoaWxkX2N0eFtpbmZvLmVycm9yXSA9IHJlc29sdmVkO1xuICAgIH1cbiAgICBpbmZvLmJsb2NrLnAoY2hpbGRfY3R4LCBkaXJ0eSk7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuICAgIGJsb2NrLmQoMSk7XG4gICAgbG9va3VwLmRlbGV0ZShibG9jay5rZXkpO1xufVxuZnVuY3Rpb24gb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuICAgIHRyYW5zaXRpb25fb3V0KGJsb2NrLCAxLCAxLCAoKSA9PiB7XG4gICAgICAgIGxvb2t1cC5kZWxldGUoYmxvY2sua2V5KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZpeF9hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgYmxvY2suZigpO1xuICAgIGRlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCk7XG59XG5mdW5jdGlvbiBmaXhfYW5kX291dHJvX2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcbiAgICBibG9jay5mKCk7XG4gICAgb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCk7XG59XG5mdW5jdGlvbiB1cGRhdGVfa2V5ZWRfZWFjaChvbGRfYmxvY2tzLCBkaXJ0eSwgZ2V0X2tleSwgZHluYW1pYywgY3R4LCBsaXN0LCBsb29rdXAsIG5vZGUsIGRlc3Ryb3ksIGNyZWF0ZV9lYWNoX2Jsb2NrLCBuZXh0LCBnZXRfY29udGV4dCkge1xuICAgIGxldCBvID0gb2xkX2Jsb2Nrcy5sZW5ndGg7XG4gICAgbGV0IG4gPSBsaXN0Lmxlbmd0aDtcbiAgICBsZXQgaSA9IG87XG4gICAgY29uc3Qgb2xkX2luZGV4ZXMgPSB7fTtcbiAgICB3aGlsZSAoaS0tKVxuICAgICAgICBvbGRfaW5kZXhlc1tvbGRfYmxvY2tzW2ldLmtleV0gPSBpO1xuICAgIGNvbnN0IG5ld19ibG9ja3MgPSBbXTtcbiAgICBjb25zdCBuZXdfbG9va3VwID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IGRlbHRhcyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCB1cGRhdGVzID0gW107XG4gICAgaSA9IG47XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICBjb25zdCBjaGlsZF9jdHggPSBnZXRfY29udGV4dChjdHgsIGxpc3QsIGkpO1xuICAgICAgICBjb25zdCBrZXkgPSBnZXRfa2V5KGNoaWxkX2N0eCk7XG4gICAgICAgIGxldCBibG9jayA9IGxvb2t1cC5nZXQoa2V5KTtcbiAgICAgICAgaWYgKCFibG9jaykge1xuICAgICAgICAgICAgYmxvY2sgPSBjcmVhdGVfZWFjaF9ibG9jayhrZXksIGNoaWxkX2N0eCk7XG4gICAgICAgICAgICBibG9jay5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZHluYW1pYykge1xuICAgICAgICAgICAgLy8gZGVmZXIgdXBkYXRlcyB1bnRpbCBhbGwgdGhlIERPTSBzaHVmZmxpbmcgaXMgZG9uZVxuICAgICAgICAgICAgdXBkYXRlcy5wdXNoKCgpID0+IGJsb2NrLnAoY2hpbGRfY3R4LCBkaXJ0eSkpO1xuICAgICAgICB9XG4gICAgICAgIG5ld19sb29rdXAuc2V0KGtleSwgbmV3X2Jsb2Nrc1tpXSA9IGJsb2NrKTtcbiAgICAgICAgaWYgKGtleSBpbiBvbGRfaW5kZXhlcylcbiAgICAgICAgICAgIGRlbHRhcy5zZXQoa2V5LCBNYXRoLmFicyhpIC0gb2xkX2luZGV4ZXNba2V5XSkpO1xuICAgIH1cbiAgICBjb25zdCB3aWxsX21vdmUgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgZGlkX21vdmUgPSBuZXcgU2V0KCk7XG4gICAgZnVuY3Rpb24gaW5zZXJ0KGJsb2NrKSB7XG4gICAgICAgIHRyYW5zaXRpb25faW4oYmxvY2ssIDEpO1xuICAgICAgICBibG9jay5tKG5vZGUsIG5leHQpO1xuICAgICAgICBsb29rdXAuc2V0KGJsb2NrLmtleSwgYmxvY2spO1xuICAgICAgICBuZXh0ID0gYmxvY2suZmlyc3Q7XG4gICAgICAgIG4tLTtcbiAgICB9XG4gICAgd2hpbGUgKG8gJiYgbikge1xuICAgICAgICBjb25zdCBuZXdfYmxvY2sgPSBuZXdfYmxvY2tzW24gLSAxXTtcbiAgICAgICAgY29uc3Qgb2xkX2Jsb2NrID0gb2xkX2Jsb2Nrc1tvIC0gMV07XG4gICAgICAgIGNvbnN0IG5ld19rZXkgPSBuZXdfYmxvY2sua2V5O1xuICAgICAgICBjb25zdCBvbGRfa2V5ID0gb2xkX2Jsb2NrLmtleTtcbiAgICAgICAgaWYgKG5ld19ibG9jayA9PT0gb2xkX2Jsb2NrKSB7XG4gICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgICAgICBuZXh0ID0gbmV3X2Jsb2NrLmZpcnN0O1xuICAgICAgICAgICAgby0tO1xuICAgICAgICAgICAgbi0tO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFuZXdfbG9va3VwLmhhcyhvbGRfa2V5KSkge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIG9sZCBibG9ja1xuICAgICAgICAgICAgZGVzdHJveShvbGRfYmxvY2ssIGxvb2t1cCk7XG4gICAgICAgICAgICBvLS07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIWxvb2t1cC5oYXMobmV3X2tleSkgfHwgd2lsbF9tb3ZlLmhhcyhuZXdfa2V5KSkge1xuICAgICAgICAgICAgaW5zZXJ0KG5ld19ibG9jayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGlkX21vdmUuaGFzKG9sZF9rZXkpKSB7XG4gICAgICAgICAgICBvLS07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGVsdGFzLmdldChuZXdfa2V5KSA+IGRlbHRhcy5nZXQob2xkX2tleSkpIHtcbiAgICAgICAgICAgIGRpZF9tb3ZlLmFkZChuZXdfa2V5KTtcbiAgICAgICAgICAgIGluc2VydChuZXdfYmxvY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgd2lsbF9tb3ZlLmFkZChvbGRfa2V5KTtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB3aGlsZSAoby0tKSB7XG4gICAgICAgIGNvbnN0IG9sZF9ibG9jayA9IG9sZF9ibG9ja3Nbb107XG4gICAgICAgIGlmICghbmV3X2xvb2t1cC5oYXMob2xkX2Jsb2NrLmtleSkpXG4gICAgICAgICAgICBkZXN0cm95KG9sZF9ibG9jaywgbG9va3VwKTtcbiAgICB9XG4gICAgd2hpbGUgKG4pXG4gICAgICAgIGluc2VydChuZXdfYmxvY2tzW24gLSAxXSk7XG4gICAgcnVuX2FsbCh1cGRhdGVzKTtcbiAgICByZXR1cm4gbmV3X2Jsb2Nrcztcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlX2VhY2hfa2V5cyhjdHgsIGxpc3QsIGdldF9jb250ZXh0LCBnZXRfa2V5KSB7XG4gICAgY29uc3Qga2V5cyA9IG5ldyBTZXQoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qga2V5ID0gZ2V0X2tleShnZXRfY29udGV4dChjdHgsIGxpc3QsIGkpKTtcbiAgICAgICAgaWYgKGtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGhhdmUgZHVwbGljYXRlIGtleXMgaW4gYSBrZXllZCBlYWNoJyk7XG4gICAgICAgIH1cbiAgICAgICAga2V5cy5hZGQoa2V5KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldF9zcHJlYWRfdXBkYXRlKGxldmVscywgdXBkYXRlcykge1xuICAgIGNvbnN0IHVwZGF0ZSA9IHt9O1xuICAgIGNvbnN0IHRvX251bGxfb3V0ID0ge307XG4gICAgY29uc3QgYWNjb3VudGVkX2ZvciA9IHsgJCRzY29wZTogMSB9O1xuICAgIGxldCBpID0gbGV2ZWxzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGNvbnN0IG8gPSBsZXZlbHNbaV07XG4gICAgICAgIGNvbnN0IG4gPSB1cGRhdGVzW2ldO1xuICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbykge1xuICAgICAgICAgICAgICAgIGlmICghKGtleSBpbiBuKSlcbiAgICAgICAgICAgICAgICAgICAgdG9fbnVsbF9vdXRba2V5XSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBuKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhY2NvdW50ZWRfZm9yW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlW2tleV0gPSBuW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRlZF9mb3Jba2V5XSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV2ZWxzW2ldID0gbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG8pIHtcbiAgICAgICAgICAgICAgICBhY2NvdW50ZWRfZm9yW2tleV0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIHRvX251bGxfb3V0KSB7XG4gICAgICAgIGlmICghKGtleSBpbiB1cGRhdGUpKVxuICAgICAgICAgICAgdXBkYXRlW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiB1cGRhdGU7XG59XG5mdW5jdGlvbiBnZXRfc3ByZWFkX29iamVjdChzcHJlYWRfcHJvcHMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHNwcmVhZF9wcm9wcyA9PT0gJ29iamVjdCcgJiYgc3ByZWFkX3Byb3BzICE9PSBudWxsID8gc3ByZWFkX3Byb3BzIDoge307XG59XG5cbmNvbnN0IF9ib29sZWFuX2F0dHJpYnV0ZXMgPSBbXG4gICAgJ2FsbG93ZnVsbHNjcmVlbicsXG4gICAgJ2FsbG93cGF5bWVudHJlcXVlc3QnLFxuICAgICdhc3luYycsXG4gICAgJ2F1dG9mb2N1cycsXG4gICAgJ2F1dG9wbGF5JyxcbiAgICAnY2hlY2tlZCcsXG4gICAgJ2NvbnRyb2xzJyxcbiAgICAnZGVmYXVsdCcsXG4gICAgJ2RlZmVyJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdmb3Jtbm92YWxpZGF0ZScsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2luZXJ0JyxcbiAgICAnaXNtYXAnLFxuICAgICdsb29wJyxcbiAgICAnbXVsdGlwbGUnLFxuICAgICdtdXRlZCcsXG4gICAgJ25vbW9kdWxlJyxcbiAgICAnbm92YWxpZGF0ZScsXG4gICAgJ29wZW4nLFxuICAgICdwbGF5c2lubGluZScsXG4gICAgJ3JlYWRvbmx5JyxcbiAgICAncmVxdWlyZWQnLFxuICAgICdyZXZlcnNlZCcsXG4gICAgJ3NlbGVjdGVkJ1xuXTtcbi8qKlxuICogTGlzdCBvZiBIVE1MIGJvb2xlYW4gYXR0cmlidXRlcyAoZS5nLiBgPGlucHV0IGRpc2FibGVkPmApLlxuICogU291cmNlOiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbmRpY2VzLmh0bWxcbiAqL1xuY29uc3QgYm9vbGVhbl9hdHRyaWJ1dGVzID0gbmV3IFNldChbLi4uX2Jvb2xlYW5fYXR0cmlidXRlc10pO1xuXG4vKiogcmVnZXggb2YgYWxsIGh0bWwgdm9pZCBlbGVtZW50IG5hbWVzICovXG5jb25zdCB2b2lkX2VsZW1lbnRfbmFtZXMgPSAvXig/OmFyZWF8YmFzZXxicnxjb2x8Y29tbWFuZHxlbWJlZHxocnxpbWd8aW5wdXR8a2V5Z2VufGxpbmt8bWV0YXxwYXJhbXxzb3VyY2V8dHJhY2t8d2JyKSQvO1xuZnVuY3Rpb24gaXNfdm9pZChuYW1lKSB7XG4gICAgcmV0dXJuIHZvaWRfZWxlbWVudF9uYW1lcy50ZXN0KG5hbWUpIHx8IG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJyFkb2N0eXBlJztcbn1cblxuY29uc3QgaW52YWxpZF9hdHRyaWJ1dGVfbmFtZV9jaGFyYWN0ZXIgPSAvW1xccydcIj4vPVxcdXtGREQwfS1cXHV7RkRFRn1cXHV7RkZGRX1cXHV7RkZGRn1cXHV7MUZGRkV9XFx1ezFGRkZGfVxcdXsyRkZGRX1cXHV7MkZGRkZ9XFx1ezNGRkZFfVxcdXszRkZGRn1cXHV7NEZGRkV9XFx1ezRGRkZGfVxcdXs1RkZGRX1cXHV7NUZGRkZ9XFx1ezZGRkZFfVxcdXs2RkZGRn1cXHV7N0ZGRkV9XFx1ezdGRkZGfVxcdXs4RkZGRX1cXHV7OEZGRkZ9XFx1ezlGRkZFfVxcdXs5RkZGRn1cXHV7QUZGRkV9XFx1e0FGRkZGfVxcdXtCRkZGRX1cXHV7QkZGRkZ9XFx1e0NGRkZFfVxcdXtDRkZGRn1cXHV7REZGRkV9XFx1e0RGRkZGfVxcdXtFRkZGRX1cXHV7RUZGRkZ9XFx1e0ZGRkZFfVxcdXtGRkZGRn1cXHV7MTBGRkZFfVxcdXsxMEZGRkZ9XS91O1xuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc3ludGF4Lmh0bWwjYXR0cmlidXRlcy0yXG4vLyBodHRwczovL2luZnJhLnNwZWMud2hhdHdnLm9yZy8jbm9uY2hhcmFjdGVyXG5mdW5jdGlvbiBzcHJlYWQoYXJncywgYXR0cnNfdG9fYWRkKSB7XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oe30sIC4uLmFyZ3MpO1xuICAgIGlmIChhdHRyc190b19hZGQpIHtcbiAgICAgICAgY29uc3QgY2xhc3Nlc190b19hZGQgPSBhdHRyc190b19hZGQuY2xhc3NlcztcbiAgICAgICAgY29uc3Qgc3R5bGVzX3RvX2FkZCA9IGF0dHJzX3RvX2FkZC5zdHlsZXM7XG4gICAgICAgIGlmIChjbGFzc2VzX3RvX2FkZCkge1xuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXMuY2xhc3MgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuY2xhc3MgPSBjbGFzc2VzX3RvX2FkZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuY2xhc3MgKz0gJyAnICsgY2xhc3Nlc190b19hZGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0eWxlc190b19hZGQpIHtcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzLnN0eWxlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLnN0eWxlID0gc3R5bGVfb2JqZWN0X3RvX3N0cmluZyhzdHlsZXNfdG9fYWRkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuc3R5bGUgPSBzdHlsZV9vYmplY3RfdG9fc3RyaW5nKG1lcmdlX3Nzcl9zdHlsZXMoYXR0cmlidXRlcy5zdHlsZSwgc3R5bGVzX3RvX2FkZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBzdHIgPSAnJztcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBpZiAoaW52YWxpZF9hdHRyaWJ1dGVfbmFtZV9jaGFyYWN0ZXIudGVzdChuYW1lKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBhdHRyaWJ1dGVzW25hbWVdO1xuICAgICAgICBpZiAodmFsdWUgPT09IHRydWUpXG4gICAgICAgICAgICBzdHIgKz0gJyAnICsgbmFtZTtcbiAgICAgICAgZWxzZSBpZiAoYm9vbGVhbl9hdHRyaWJ1dGVzLmhhcyhuYW1lLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUpXG4gICAgICAgICAgICAgICAgc3RyICs9ICcgJyArIG5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgc3RyICs9IGAgJHtuYW1lfT1cIiR7dmFsdWV9XCJgO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0cjtcbn1cbmZ1bmN0aW9uIG1lcmdlX3Nzcl9zdHlsZXMoc3R5bGVfYXR0cmlidXRlLCBzdHlsZV9kaXJlY3RpdmUpIHtcbiAgICBjb25zdCBzdHlsZV9vYmplY3QgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGluZGl2aWR1YWxfc3R5bGUgb2Ygc3R5bGVfYXR0cmlidXRlLnNwbGl0KCc7JykpIHtcbiAgICAgICAgY29uc3QgY29sb25faW5kZXggPSBpbmRpdmlkdWFsX3N0eWxlLmluZGV4T2YoJzonKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IGluZGl2aWR1YWxfc3R5bGUuc2xpY2UoMCwgY29sb25faW5kZXgpLnRyaW0oKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpbmRpdmlkdWFsX3N0eWxlLnNsaWNlKGNvbG9uX2luZGV4ICsgMSkudHJpbSgpO1xuICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgc3R5bGVfb2JqZWN0W25hbWVdID0gdmFsdWU7XG4gICAgfVxuICAgIGZvciAoY29uc3QgbmFtZSBpbiBzdHlsZV9kaXJlY3RpdmUpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBzdHlsZV9kaXJlY3RpdmVbbmFtZV07XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgc3R5bGVfb2JqZWN0W25hbWVdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgc3R5bGVfb2JqZWN0W25hbWVdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdHlsZV9vYmplY3Q7XG59XG5jb25zdCBBVFRSX1JFR0VYID0gL1smXCJdL2c7XG5jb25zdCBDT05URU5UX1JFR0VYID0gL1smPF0vZztcbi8qKlxuICogTm90ZTogdGhpcyBtZXRob2QgaXMgcGVyZm9ybWFuY2Ugc2Vuc2l0aXZlIGFuZCBoYXMgYmVlbiBvcHRpbWl6ZWRcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zdmVsdGVqcy9zdmVsdGUvcHVsbC81NzAxXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZSh2YWx1ZSwgaXNfYXR0ciA9IGZhbHNlKSB7XG4gICAgY29uc3Qgc3RyID0gU3RyaW5nKHZhbHVlKTtcbiAgICBjb25zdCBwYXR0ZXJuID0gaXNfYXR0ciA/IEFUVFJfUkVHRVggOiBDT05URU5UX1JFR0VYO1xuICAgIHBhdHRlcm4ubGFzdEluZGV4ID0gMDtcbiAgICBsZXQgZXNjYXBlZCA9ICcnO1xuICAgIGxldCBsYXN0ID0gMDtcbiAgICB3aGlsZSAocGF0dGVybi50ZXN0KHN0cikpIHtcbiAgICAgICAgY29uc3QgaSA9IHBhdHRlcm4ubGFzdEluZGV4IC0gMTtcbiAgICAgICAgY29uc3QgY2ggPSBzdHJbaV07XG4gICAgICAgIGVzY2FwZWQgKz0gc3RyLnN1YnN0cmluZyhsYXN0LCBpKSArIChjaCA9PT0gJyYnID8gJyZhbXA7JyA6IChjaCA9PT0gJ1wiJyA/ICcmcXVvdDsnIDogJyZsdDsnKSk7XG4gICAgICAgIGxhc3QgPSBpICsgMTtcbiAgICB9XG4gICAgcmV0dXJuIGVzY2FwZWQgKyBzdHIuc3Vic3RyaW5nKGxhc3QpO1xufVxuZnVuY3Rpb24gZXNjYXBlX2F0dHJpYnV0ZV92YWx1ZSh2YWx1ZSkge1xuICAgIC8vIGtlZXAgYm9vbGVhbnMsIG51bGwsIGFuZCB1bmRlZmluZWQgZm9yIHRoZSBzYWtlIG9mIGBzcHJlYWRgXG4gICAgY29uc3Qgc2hvdWxkX2VzY2FwZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHwgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpO1xuICAgIHJldHVybiBzaG91bGRfZXNjYXBlID8gZXNjYXBlKHZhbHVlLCB0cnVlKSA6IHZhbHVlO1xufVxuZnVuY3Rpb24gZXNjYXBlX29iamVjdChvYmopIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBlc2NhcGVfYXR0cmlidXRlX3ZhbHVlKG9ialtrZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGVhY2goaXRlbXMsIGZuKSB7XG4gICAgbGV0IHN0ciA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgc3RyICs9IGZuKGl0ZW1zW2ldLCBpKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn1cbmNvbnN0IG1pc3NpbmdfY29tcG9uZW50ID0ge1xuICAgICQkcmVuZGVyOiAoKSA9PiAnJ1xufTtcbmZ1bmN0aW9uIHZhbGlkYXRlX2NvbXBvbmVudChjb21wb25lbnQsIG5hbWUpIHtcbiAgICBpZiAoIWNvbXBvbmVudCB8fCAhY29tcG9uZW50LiQkcmVuZGVyKSB7XG4gICAgICAgIGlmIChuYW1lID09PSAnc3ZlbHRlOmNvbXBvbmVudCcpXG4gICAgICAgICAgICBuYW1lICs9ICcgdGhpcz17Li4ufSc7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgPCR7bmFtZX0+IGlzIG5vdCBhIHZhbGlkIFNTUiBjb21wb25lbnQuIFlvdSBtYXkgbmVlZCB0byByZXZpZXcgeW91ciBidWlsZCBjb25maWcgdG8gZW5zdXJlIHRoYXQgZGVwZW5kZW5jaWVzIGFyZSBjb21waWxlZCwgcmF0aGVyIHRoYW4gaW1wb3J0ZWQgYXMgcHJlLWNvbXBpbGVkIG1vZHVsZXMuIE90aGVyd2lzZSB5b3UgbWF5IG5lZWQgdG8gZml4IGEgPCR7bmFtZX0+LmApO1xuICAgIH1cbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuZnVuY3Rpb24gZGVidWcoZmlsZSwgbGluZSwgY29sdW1uLCB2YWx1ZXMpIHtcbiAgICBjb25zb2xlLmxvZyhge0BkZWJ1Z30gJHtmaWxlID8gZmlsZSArICcgJyA6ICcnfSgke2xpbmV9OiR7Y29sdW1ufSlgKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5sb2codmFsdWVzKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgcmV0dXJuICcnO1xufVxubGV0IG9uX2Rlc3Ryb3k7XG5mdW5jdGlvbiBjcmVhdGVfc3NyX2NvbXBvbmVudChmbikge1xuICAgIGZ1bmN0aW9uICQkcmVuZGVyKHJlc3VsdCwgcHJvcHMsIGJpbmRpbmdzLCBzbG90cywgY29udGV4dCkge1xuICAgICAgICBjb25zdCBwYXJlbnRfY29tcG9uZW50ID0gY3VycmVudF9jb21wb25lbnQ7XG4gICAgICAgIGNvbnN0ICQkID0ge1xuICAgICAgICAgICAgb25fZGVzdHJveSxcbiAgICAgICAgICAgIGNvbnRleHQ6IG5ldyBNYXAoY29udGV4dCB8fCAocGFyZW50X2NvbXBvbmVudCA/IHBhcmVudF9jb21wb25lbnQuJCQuY29udGV4dCA6IFtdKSksXG4gICAgICAgICAgICAvLyB0aGVzZSB3aWxsIGJlIGltbWVkaWF0ZWx5IGRpc2NhcmRlZFxuICAgICAgICAgICAgb25fbW91bnQ6IFtdLFxuICAgICAgICAgICAgYmVmb3JlX3VwZGF0ZTogW10sXG4gICAgICAgICAgICBhZnRlcl91cGRhdGU6IFtdLFxuICAgICAgICAgICAgY2FsbGJhY2tzOiBibGFua19vYmplY3QoKVxuICAgICAgICB9O1xuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoeyAkJCB9KTtcbiAgICAgICAgY29uc3QgaHRtbCA9IGZuKHJlc3VsdCwgcHJvcHMsIGJpbmRpbmdzLCBzbG90cyk7XG4gICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChwYXJlbnRfY29tcG9uZW50KTtcbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHJlbmRlcjogKHByb3BzID0ge30sIHsgJCRzbG90cyA9IHt9LCBjb250ZXh0ID0gbmV3IE1hcCgpIH0gPSB7fSkgPT4ge1xuICAgICAgICAgICAgb25fZGVzdHJveSA9IFtdO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geyB0aXRsZTogJycsIGhlYWQ6ICcnLCBjc3M6IG5ldyBTZXQoKSB9O1xuICAgICAgICAgICAgY29uc3QgaHRtbCA9ICQkcmVuZGVyKHJlc3VsdCwgcHJvcHMsIHt9LCAkJHNsb3RzLCBjb250ZXh0KTtcbiAgICAgICAgICAgIHJ1bl9hbGwob25fZGVzdHJveSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICAgICAgY3NzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IEFycmF5LmZyb20ocmVzdWx0LmNzcykubWFwKGNzcyA9PiBjc3MuY29kZSkuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgIG1hcDogbnVsbCAvLyBUT0RPXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBoZWFkOiByZXN1bHQudGl0bGUgKyByZXN1bHQuaGVhZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgJCRyZW5kZXJcbiAgICB9O1xufVxuZnVuY3Rpb24gYWRkX2F0dHJpYnV0ZShuYW1lLCB2YWx1ZSwgYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8IChib29sZWFuICYmICF2YWx1ZSkpXG4gICAgICAgIHJldHVybiAnJztcbiAgICBjb25zdCBhc3NpZ25tZW50ID0gKGJvb2xlYW4gJiYgdmFsdWUgPT09IHRydWUpID8gJycgOiBgPVwiJHtlc2NhcGUodmFsdWUsIHRydWUpfVwiYDtcbiAgICByZXR1cm4gYCAke25hbWV9JHthc3NpZ25tZW50fWA7XG59XG5mdW5jdGlvbiBhZGRfY2xhc3NlcyhjbGFzc2VzKSB7XG4gICAgcmV0dXJuIGNsYXNzZXMgPyBgIGNsYXNzPVwiJHtjbGFzc2VzfVwiYCA6ICcnO1xufVxuZnVuY3Rpb24gc3R5bGVfb2JqZWN0X3RvX3N0cmluZyhzdHlsZV9vYmplY3QpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc3R5bGVfb2JqZWN0KVxuICAgICAgICAuZmlsdGVyKGtleSA9PiBzdHlsZV9vYmplY3Rba2V5XSlcbiAgICAgICAgLm1hcChrZXkgPT4gYCR7a2V5fTogJHtlc2NhcGVfYXR0cmlidXRlX3ZhbHVlKHN0eWxlX29iamVjdFtrZXldKX07YClcbiAgICAgICAgLmpvaW4oJyAnKTtcbn1cbmZ1bmN0aW9uIGFkZF9zdHlsZXMoc3R5bGVfb2JqZWN0KSB7XG4gICAgY29uc3Qgc3R5bGVzID0gc3R5bGVfb2JqZWN0X3RvX3N0cmluZyhzdHlsZV9vYmplY3QpO1xuICAgIHJldHVybiBzdHlsZXMgPyBgIHN0eWxlPVwiJHtzdHlsZXN9XCJgIDogJyc7XG59XG5cbmZ1bmN0aW9uIGJpbmQoY29tcG9uZW50LCBuYW1lLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGluZGV4ID0gY29tcG9uZW50LiQkLnByb3BzW25hbWVdO1xuICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbXBvbmVudC4kJC5ib3VuZFtpbmRleF0gPSBjYWxsYmFjaztcbiAgICAgICAgY2FsbGJhY2soY29tcG9uZW50LiQkLmN0eFtpbmRleF0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZV9jb21wb25lbnQoYmxvY2spIHtcbiAgICBibG9jayAmJiBibG9jay5jKCk7XG59XG5mdW5jdGlvbiBjbGFpbV9jb21wb25lbnQoYmxvY2ssIHBhcmVudF9ub2Rlcykge1xuICAgIGJsb2NrICYmIGJsb2NrLmwocGFyZW50X25vZGVzKTtcbn1cbmZ1bmN0aW9uIG1vdW50X2NvbXBvbmVudChjb21wb25lbnQsIHRhcmdldCwgYW5jaG9yLCBjdXN0b21FbGVtZW50KSB7XG4gICAgY29uc3QgeyBmcmFnbWVudCwgYWZ0ZXJfdXBkYXRlIH0gPSBjb21wb25lbnQuJCQ7XG4gICAgZnJhZ21lbnQgJiYgZnJhZ21lbnQubSh0YXJnZXQsIGFuY2hvcik7XG4gICAgaWYgKCFjdXN0b21FbGVtZW50KSB7XG4gICAgICAgIC8vIG9uTW91bnQgaGFwcGVucyBiZWZvcmUgdGhlIGluaXRpYWwgYWZ0ZXJVcGRhdGVcbiAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdfb25fZGVzdHJveSA9IGNvbXBvbmVudC4kJC5vbl9tb3VudC5tYXAocnVuKS5maWx0ZXIoaXNfZnVuY3Rpb24pO1xuICAgICAgICAgICAgLy8gaWYgdGhlIGNvbXBvbmVudCB3YXMgZGVzdHJveWVkIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAvLyBpdCB3aWxsIHVwZGF0ZSB0aGUgYCQkLm9uX2Rlc3Ryb3lgIHJlZmVyZW5jZSB0byBgbnVsbGAuXG4gICAgICAgICAgICAvLyB0aGUgZGVzdHJ1Y3R1cmVkIG9uX2Rlc3Ryb3kgbWF5IHN0aWxsIHJlZmVyZW5jZSB0byB0aGUgb2xkIGFycmF5XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LiQkLm9uX2Rlc3Ryb3kpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuJCQub25fZGVzdHJveS5wdXNoKC4uLm5ld19vbl9kZXN0cm95KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEVkZ2UgY2FzZSAtIGNvbXBvbmVudCB3YXMgZGVzdHJveWVkIGltbWVkaWF0ZWx5LFxuICAgICAgICAgICAgICAgIC8vIG1vc3QgbGlrZWx5IGFzIGEgcmVzdWx0IG9mIGEgYmluZGluZyBpbml0aWFsaXNpbmdcbiAgICAgICAgICAgICAgICBydW5fYWxsKG5ld19vbl9kZXN0cm95KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbXBvbmVudC4kJC5vbl9tb3VudCA9IFtdO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWZ0ZXJfdXBkYXRlLmZvckVhY2goYWRkX3JlbmRlcl9jYWxsYmFjayk7XG59XG5mdW5jdGlvbiBkZXN0cm95X2NvbXBvbmVudChjb21wb25lbnQsIGRldGFjaGluZykge1xuICAgIGNvbnN0ICQkID0gY29tcG9uZW50LiQkO1xuICAgIGlmICgkJC5mcmFnbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBmbHVzaF9yZW5kZXJfY2FsbGJhY2tzKCQkLmFmdGVyX3VwZGF0ZSk7XG4gICAgICAgIHJ1bl9hbGwoJCQub25fZGVzdHJveSk7XG4gICAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50LmQoZGV0YWNoaW5nKTtcbiAgICAgICAgLy8gVE9ETyBudWxsIG91dCBvdGhlciByZWZzLCBpbmNsdWRpbmcgY29tcG9uZW50LiQkIChidXQgbmVlZCB0b1xuICAgICAgICAvLyBwcmVzZXJ2ZSBmaW5hbCBzdGF0ZT8pXG4gICAgICAgICQkLm9uX2Rlc3Ryb3kgPSAkJC5mcmFnbWVudCA9IG51bGw7XG4gICAgICAgICQkLmN0eCA9IFtdO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG1ha2VfZGlydHkoY29tcG9uZW50LCBpKSB7XG4gICAgaWYgKGNvbXBvbmVudC4kJC5kaXJ0eVswXSA9PT0gLTEpIHtcbiAgICAgICAgZGlydHlfY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgIHNjaGVkdWxlX3VwZGF0ZSgpO1xuICAgICAgICBjb21wb25lbnQuJCQuZGlydHkuZmlsbCgwKTtcbiAgICB9XG4gICAgY29tcG9uZW50LiQkLmRpcnR5WyhpIC8gMzEpIHwgMF0gfD0gKDEgPDwgKGkgJSAzMSkpO1xufVxuZnVuY3Rpb24gaW5pdChjb21wb25lbnQsIG9wdGlvbnMsIGluc3RhbmNlLCBjcmVhdGVfZnJhZ21lbnQsIG5vdF9lcXVhbCwgcHJvcHMsIGFwcGVuZF9zdHlsZXMsIGRpcnR5ID0gWy0xXSkge1xuICAgIGNvbnN0IHBhcmVudF9jb21wb25lbnQgPSBjdXJyZW50X2NvbXBvbmVudDtcbiAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KTtcbiAgICBjb25zdCAkJCA9IGNvbXBvbmVudC4kJCA9IHtcbiAgICAgICAgZnJhZ21lbnQ6IG51bGwsXG4gICAgICAgIGN0eDogW10sXG4gICAgICAgIC8vIHN0YXRlXG4gICAgICAgIHByb3BzLFxuICAgICAgICB1cGRhdGU6IG5vb3AsXG4gICAgICAgIG5vdF9lcXVhbCxcbiAgICAgICAgYm91bmQ6IGJsYW5rX29iamVjdCgpLFxuICAgICAgICAvLyBsaWZlY3ljbGVcbiAgICAgICAgb25fbW91bnQ6IFtdLFxuICAgICAgICBvbl9kZXN0cm95OiBbXSxcbiAgICAgICAgb25fZGlzY29ubmVjdDogW10sXG4gICAgICAgIGJlZm9yZV91cGRhdGU6IFtdLFxuICAgICAgICBhZnRlcl91cGRhdGU6IFtdLFxuICAgICAgICBjb250ZXh0OiBuZXcgTWFwKG9wdGlvbnMuY29udGV4dCB8fCAocGFyZW50X2NvbXBvbmVudCA/IHBhcmVudF9jb21wb25lbnQuJCQuY29udGV4dCA6IFtdKSksXG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZWxzZVxuICAgICAgICBjYWxsYmFja3M6IGJsYW5rX29iamVjdCgpLFxuICAgICAgICBkaXJ0eSxcbiAgICAgICAgc2tpcF9ib3VuZDogZmFsc2UsXG4gICAgICAgIHJvb3Q6IG9wdGlvbnMudGFyZ2V0IHx8IHBhcmVudF9jb21wb25lbnQuJCQucm9vdFxuICAgIH07XG4gICAgYXBwZW5kX3N0eWxlcyAmJiBhcHBlbmRfc3R5bGVzKCQkLnJvb3QpO1xuICAgIGxldCByZWFkeSA9IGZhbHNlO1xuICAgICQkLmN0eCA9IGluc3RhbmNlXG4gICAgICAgID8gaW5zdGFuY2UoY29tcG9uZW50LCBvcHRpb25zLnByb3BzIHx8IHt9LCAoaSwgcmV0LCAuLi5yZXN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJlc3QubGVuZ3RoID8gcmVzdFswXSA6IHJldDtcbiAgICAgICAgICAgIGlmICgkJC5jdHggJiYgbm90X2VxdWFsKCQkLmN0eFtpXSwgJCQuY3R4W2ldID0gdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEkJC5za2lwX2JvdW5kICYmICQkLmJvdW5kW2ldKVxuICAgICAgICAgICAgICAgICAgICAkJC5ib3VuZFtpXSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlYWR5KVxuICAgICAgICAgICAgICAgICAgICBtYWtlX2RpcnR5KGNvbXBvbmVudCwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9KVxuICAgICAgICA6IFtdO1xuICAgICQkLnVwZGF0ZSgpO1xuICAgIHJlYWR5ID0gdHJ1ZTtcbiAgICBydW5fYWxsKCQkLmJlZm9yZV91cGRhdGUpO1xuICAgIC8vIGBmYWxzZWAgYXMgYSBzcGVjaWFsIGNhc2Ugb2Ygbm8gRE9NIGNvbXBvbmVudFxuICAgICQkLmZyYWdtZW50ID0gY3JlYXRlX2ZyYWdtZW50ID8gY3JlYXRlX2ZyYWdtZW50KCQkLmN0eCkgOiBmYWxzZTtcbiAgICBpZiAob3B0aW9ucy50YXJnZXQpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuaHlkcmF0ZSkge1xuICAgICAgICAgICAgc3RhcnRfaHlkcmF0aW5nKCk7XG4gICAgICAgICAgICBjb25zdCBub2RlcyA9IGNoaWxkcmVuKG9wdGlvbnMudGFyZ2V0KTtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgICAgICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5sKG5vZGVzKTtcbiAgICAgICAgICAgIG5vZGVzLmZvckVhY2goZGV0YWNoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgICAgICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuaW50cm8pXG4gICAgICAgICAgICB0cmFuc2l0aW9uX2luKGNvbXBvbmVudC4kJC5mcmFnbWVudCk7XG4gICAgICAgIG1vdW50X2NvbXBvbmVudChjb21wb25lbnQsIG9wdGlvbnMudGFyZ2V0LCBvcHRpb25zLmFuY2hvciwgb3B0aW9ucy5jdXN0b21FbGVtZW50KTtcbiAgICAgICAgZW5kX2h5ZHJhdGluZygpO1xuICAgICAgICBmbHVzaCgpO1xuICAgIH1cbiAgICBzZXRfY3VycmVudF9jb21wb25lbnQocGFyZW50X2NvbXBvbmVudCk7XG59XG5sZXQgU3ZlbHRlRWxlbWVudDtcbmlmICh0eXBlb2YgSFRNTEVsZW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBTdmVsdGVFbGVtZW50ID0gY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICAgICAgY29uc3QgeyBvbl9tb3VudCB9ID0gdGhpcy4kJDtcbiAgICAgICAgICAgIHRoaXMuJCQub25fZGlzY29ubmVjdCA9IG9uX21vdW50Lm1hcChydW4pLmZpbHRlcihpc19mdW5jdGlvbik7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRvZG86IGltcHJvdmUgdHlwaW5nc1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy4kJC5zbG90dGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0b2RvOiBpbXByb3ZlIHR5cGluZ3NcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuJCQuc2xvdHRlZFtrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYXR0ciwgX29sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpc1thdHRyXSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICAgICAgcnVuX2FsbCh0aGlzLiQkLm9uX2Rpc2Nvbm5lY3QpO1xuICAgICAgICB9XG4gICAgICAgICRkZXN0cm95KCkge1xuICAgICAgICAgICAgZGVzdHJveV9jb21wb25lbnQodGhpcywgMSk7XG4gICAgICAgICAgICB0aGlzLiRkZXN0cm95ID0gbm9vcDtcbiAgICAgICAgfVxuICAgICAgICAkb24odHlwZSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIC8vIFRPRE8gc2hvdWxkIHRoaXMgZGVsZWdhdGUgdG8gYWRkRXZlbnRMaXN0ZW5lcj9cbiAgICAgICAgICAgIGlmICghaXNfZnVuY3Rpb24oY2FsbGJhY2spKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFja3MgPSAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gfHwgKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdID0gW10pKTtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBjYWxsYmFja3MuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgICRzZXQoJCRwcm9wcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuJCRzZXQgJiYgIWlzX2VtcHR5KCQkcHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kJC5za2lwX2JvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiQkc2V0KCQkcHJvcHMpO1xuICAgICAgICAgICAgICAgIHRoaXMuJCQuc2tpcF9ib3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgU3ZlbHRlIGNvbXBvbmVudHMuIFVzZWQgd2hlbiBkZXY9ZmFsc2UuXG4gKi9cbmNsYXNzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIGRlc3Ryb3lfY29tcG9uZW50KHRoaXMsIDEpO1xuICAgICAgICB0aGlzLiRkZXN0cm95ID0gbm9vcDtcbiAgICB9XG4gICAgJG9uKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghaXNfZnVuY3Rpb24oY2FsbGJhY2spKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9vcDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYWxsYmFja3MgPSAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gfHwgKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdID0gW10pKTtcbiAgICAgICAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBjYWxsYmFja3MuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAkc2V0KCQkcHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMuJCRzZXQgJiYgIWlzX2VtcHR5KCQkcHJvcHMpKSB7XG4gICAgICAgICAgICB0aGlzLiQkLnNraXBfYm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy4kJHNldCgkJHByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuJCQuc2tpcF9ib3VuZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkaXNwYXRjaF9kZXYodHlwZSwgZGV0YWlsKSB7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChjdXN0b21fZXZlbnQodHlwZSwgT2JqZWN0LmFzc2lnbih7IHZlcnNpb246ICczLjU5LjInIH0sIGRldGFpbCksIHsgYnViYmxlczogdHJ1ZSB9KSk7XG59XG5mdW5jdGlvbiBhcHBlbmRfZGV2KHRhcmdldCwgbm9kZSkge1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NSW5zZXJ0JywgeyB0YXJnZXQsIG5vZGUgfSk7XG4gICAgYXBwZW5kKHRhcmdldCwgbm9kZSk7XG59XG5mdW5jdGlvbiBhcHBlbmRfaHlkcmF0aW9uX2Rldih0YXJnZXQsIG5vZGUpIHtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTUluc2VydCcsIHsgdGFyZ2V0LCBub2RlIH0pO1xuICAgIGFwcGVuZF9oeWRyYXRpb24odGFyZ2V0LCBub2RlKTtcbn1cbmZ1bmN0aW9uIGluc2VydF9kZXYodGFyZ2V0LCBub2RlLCBhbmNob3IpIHtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTUluc2VydCcsIHsgdGFyZ2V0LCBub2RlLCBhbmNob3IgfSk7XG4gICAgaW5zZXJ0KHRhcmdldCwgbm9kZSwgYW5jaG9yKTtcbn1cbmZ1bmN0aW9uIGluc2VydF9oeWRyYXRpb25fZGV2KHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01JbnNlcnQnLCB7IHRhcmdldCwgbm9kZSwgYW5jaG9yIH0pO1xuICAgIGluc2VydF9oeWRyYXRpb24odGFyZ2V0LCBub2RlLCBhbmNob3IpO1xufVxuZnVuY3Rpb24gZGV0YWNoX2Rldihub2RlKSB7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01SZW1vdmUnLCB7IG5vZGUgfSk7XG4gICAgZGV0YWNoKG5vZGUpO1xufVxuZnVuY3Rpb24gZGV0YWNoX2JldHdlZW5fZGV2KGJlZm9yZSwgYWZ0ZXIpIHtcbiAgICB3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nICYmIGJlZm9yZS5uZXh0U2libGluZyAhPT0gYWZ0ZXIpIHtcbiAgICAgICAgZGV0YWNoX2RldihiZWZvcmUubmV4dFNpYmxpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRldGFjaF9iZWZvcmVfZGV2KGFmdGVyKSB7XG4gICAgd2hpbGUgKGFmdGVyLnByZXZpb3VzU2libGluZykge1xuICAgICAgICBkZXRhY2hfZGV2KGFmdGVyLnByZXZpb3VzU2libGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGV0YWNoX2FmdGVyX2RldihiZWZvcmUpIHtcbiAgICB3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nKSB7XG4gICAgICAgIGRldGFjaF9kZXYoYmVmb3JlLm5leHRTaWJsaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiBsaXN0ZW5fZGV2KG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zLCBoYXNfcHJldmVudF9kZWZhdWx0LCBoYXNfc3RvcF9wcm9wYWdhdGlvbiwgaGFzX3N0b3BfaW1tZWRpYXRlX3Byb3BhZ2F0aW9uKSB7XG4gICAgY29uc3QgbW9kaWZpZXJzID0gb3B0aW9ucyA9PT0gdHJ1ZSA/IFsnY2FwdHVyZSddIDogb3B0aW9ucyA/IEFycmF5LmZyb20oT2JqZWN0LmtleXMob3B0aW9ucykpIDogW107XG4gICAgaWYgKGhhc19wcmV2ZW50X2RlZmF1bHQpXG4gICAgICAgIG1vZGlmaWVycy5wdXNoKCdwcmV2ZW50RGVmYXVsdCcpO1xuICAgIGlmIChoYXNfc3RvcF9wcm9wYWdhdGlvbilcbiAgICAgICAgbW9kaWZpZXJzLnB1c2goJ3N0b3BQcm9wYWdhdGlvbicpO1xuICAgIGlmIChoYXNfc3RvcF9pbW1lZGlhdGVfcHJvcGFnYXRpb24pXG4gICAgICAgIG1vZGlmaWVycy5wdXNoKCdzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24nKTtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTUFkZEV2ZW50TGlzdGVuZXInLCB7IG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBtb2RpZmllcnMgfSk7XG4gICAgY29uc3QgZGlzcG9zZSA9IGxpc3Rlbihub2RlLCBldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01SZW1vdmVFdmVudExpc3RlbmVyJywgeyBub2RlLCBldmVudCwgaGFuZGxlciwgbW9kaWZpZXJzIH0pO1xuICAgICAgICBkaXNwb3NlKCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGF0dHJfZGV2KG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBhdHRyKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKVxuICAgICAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVJlbW92ZUF0dHJpYnV0ZScsIHsgbm9kZSwgYXR0cmlidXRlIH0pO1xuICAgIGVsc2VcbiAgICAgICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01TZXRBdHRyaWJ1dGUnLCB7IG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUgfSk7XG59XG5mdW5jdGlvbiBwcm9wX2Rldihub2RlLCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBub2RlW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NU2V0UHJvcGVydHknLCB7IG5vZGUsIHByb3BlcnR5LCB2YWx1ZSB9KTtcbn1cbmZ1bmN0aW9uIGRhdGFzZXRfZGV2KG5vZGUsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIG5vZGUuZGF0YXNldFtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVNldERhdGFzZXQnLCB7IG5vZGUsIHByb3BlcnR5LCB2YWx1ZSB9KTtcbn1cbmZ1bmN0aW9uIHNldF9kYXRhX2Rldih0ZXh0LCBkYXRhKSB7XG4gICAgZGF0YSA9ICcnICsgZGF0YTtcbiAgICBpZiAodGV4dC5kYXRhID09PSBkYXRhKVxuICAgICAgICByZXR1cm47XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01TZXREYXRhJywgeyBub2RlOiB0ZXh0LCBkYXRhIH0pO1xuICAgIHRleHQuZGF0YSA9IGRhdGE7XG59XG5mdW5jdGlvbiBzZXRfZGF0YV9jb250ZW50ZWRpdGFibGVfZGV2KHRleHQsIGRhdGEpIHtcbiAgICBkYXRhID0gJycgKyBkYXRhO1xuICAgIGlmICh0ZXh0Lndob2xlVGV4dCA9PT0gZGF0YSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NU2V0RGF0YScsIHsgbm9kZTogdGV4dCwgZGF0YSB9KTtcbiAgICB0ZXh0LmRhdGEgPSBkYXRhO1xufVxuZnVuY3Rpb24gc2V0X2RhdGFfbWF5YmVfY29udGVudGVkaXRhYmxlX2Rldih0ZXh0LCBkYXRhLCBhdHRyX3ZhbHVlKSB7XG4gICAgaWYgKH5jb250ZW50ZWRpdGFibGVfdHJ1dGh5X3ZhbHVlcy5pbmRleE9mKGF0dHJfdmFsdWUpKSB7XG4gICAgICAgIHNldF9kYXRhX2NvbnRlbnRlZGl0YWJsZV9kZXYodGV4dCwgZGF0YSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzZXRfZGF0YV9kZXYodGV4dCwgZGF0YSk7XG4gICAgfVxufVxuZnVuY3Rpb24gdmFsaWRhdGVfZWFjaF9hcmd1bWVudChhcmcpIHtcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ3N0cmluZycgJiYgIShhcmcgJiYgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gYXJnKSkge1xuICAgICAgICBsZXQgbXNnID0gJ3sjZWFjaH0gb25seSBpdGVyYXRlcyBvdmVyIGFycmF5LWxpa2Ugb2JqZWN0cy4nO1xuICAgICAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBhcmcgJiYgU3ltYm9sLml0ZXJhdG9yIGluIGFyZykge1xuICAgICAgICAgICAgbXNnICs9ICcgWW91IGNhbiB1c2UgYSBzcHJlYWQgdG8gY29udmVydCB0aGlzIGl0ZXJhYmxlIGludG8gYW4gYXJyYXkuJztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICB9XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV9zbG90cyhuYW1lLCBzbG90LCBrZXlzKSB7XG4gICAgZm9yIChjb25zdCBzbG90X2tleSBvZiBPYmplY3Qua2V5cyhzbG90KSkge1xuICAgICAgICBpZiAoIX5rZXlzLmluZGV4T2Yoc2xvdF9rZXkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYDwke25hbWV9PiByZWNlaXZlZCBhbiB1bmV4cGVjdGVkIHNsb3QgXCIke3Nsb3Rfa2V5fVwiLmApO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gdmFsaWRhdGVfZHluYW1pY19lbGVtZW50KHRhZykge1xuICAgIGNvbnN0IGlzX3N0cmluZyA9IHR5cGVvZiB0YWcgPT09ICdzdHJpbmcnO1xuICAgIGlmICh0YWcgJiYgIWlzX3N0cmluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJzxzdmVsdGU6ZWxlbWVudD4gZXhwZWN0cyBcInRoaXNcIiBhdHRyaWJ1dGUgdG8gYmUgYSBzdHJpbmcuJyk7XG4gICAgfVxufVxuZnVuY3Rpb24gdmFsaWRhdGVfdm9pZF9keW5hbWljX2VsZW1lbnQodGFnKSB7XG4gICAgaWYgKHRhZyAmJiBpc192b2lkKHRhZykpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGA8c3ZlbHRlOmVsZW1lbnQgdGhpcz1cIiR7dGFnfVwiPiBpcyBzZWxmLWNsb3NpbmcgYW5kIGNhbm5vdCBoYXZlIGNvbnRlbnQuYCk7XG4gICAgfVxufVxuZnVuY3Rpb24gY29uc3RydWN0X3N2ZWx0ZV9jb21wb25lbnRfZGV2KGNvbXBvbmVudCwgcHJvcHMpIHtcbiAgICBjb25zdCBlcnJvcl9tZXNzYWdlID0gJ3RoaXM9ey4uLn0gb2YgPHN2ZWx0ZTpjb21wb25lbnQ+IHNob3VsZCBzcGVjaWZ5IGEgU3ZlbHRlIGNvbXBvbmVudC4nO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IGNvbXBvbmVudChwcm9wcyk7XG4gICAgICAgIGlmICghaW5zdGFuY2UuJCQgfHwgIWluc3RhbmNlLiRzZXQgfHwgIWluc3RhbmNlLiRvbiB8fCAhaW5zdGFuY2UuJGRlc3Ryb3kpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcl9tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc3QgeyBtZXNzYWdlIH0gPSBlcnI7XG4gICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZycgJiYgbWVzc2FnZS5pbmRleE9mKCdpcyBub3QgYSBjb25zdHJ1Y3RvcicpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yX21lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfVxufVxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBTdmVsdGUgY29tcG9uZW50cyB3aXRoIHNvbWUgbWlub3IgZGV2LWVuaGFuY2VtZW50cy4gVXNlZCB3aGVuIGRldj10cnVlLlxuICovXG5jbGFzcyBTdmVsdGVDb21wb25lbnREZXYgZXh0ZW5kcyBTdmVsdGVDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFvcHRpb25zIHx8ICghb3B0aW9ucy50YXJnZXQgJiYgIW9wdGlvbnMuJCRpbmxpbmUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCIndGFyZ2V0JyBpcyBhIHJlcXVpcmVkIG9wdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgc3VwZXIuJGRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy4kZGVzdHJveSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignQ29tcG9uZW50IHdhcyBhbHJlYWR5IGRlc3Ryb3llZCcpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgfTtcbiAgICB9XG4gICAgJGNhcHR1cmVfc3RhdGUoKSB7IH1cbiAgICAkaW5qZWN0X3N0YXRlKCkgeyB9XG59XG4vKipcbiAqIEJhc2UgY2xhc3MgdG8gY3JlYXRlIHN0cm9uZ2x5IHR5cGVkIFN2ZWx0ZSBjb21wb25lbnRzLlxuICogVGhpcyBvbmx5IGV4aXN0cyBmb3IgdHlwaW5nIHB1cnBvc2VzIGFuZCBzaG91bGQgYmUgdXNlZCBpbiBgLmQudHNgIGZpbGVzLlxuICpcbiAqICMjIyBFeGFtcGxlOlxuICpcbiAqIFlvdSBoYXZlIGNvbXBvbmVudCBsaWJyYXJ5IG9uIG5wbSBjYWxsZWQgYGNvbXBvbmVudC1saWJyYXJ5YCwgZnJvbSB3aGljaFxuICogeW91IGV4cG9ydCBhIGNvbXBvbmVudCBjYWxsZWQgYE15Q29tcG9uZW50YC4gRm9yIFN2ZWx0ZStUeXBlU2NyaXB0IHVzZXJzLFxuICogeW91IHdhbnQgdG8gcHJvdmlkZSB0eXBpbmdzLiBUaGVyZWZvcmUgeW91IGNyZWF0ZSBhIGBpbmRleC5kLnRzYDpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBTdmVsdGVDb21wb25lbnRUeXBlZCB9IGZyb20gXCJzdmVsdGVcIjtcbiAqIGV4cG9ydCBjbGFzcyBNeUNvbXBvbmVudCBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudFR5cGVkPHtmb286IHN0cmluZ30+IHt9XG4gKiBgYGBcbiAqIFR5cGluZyB0aGlzIG1ha2VzIGl0IHBvc3NpYmxlIGZvciBJREVzIGxpa2UgVlMgQ29kZSB3aXRoIHRoZSBTdmVsdGUgZXh0ZW5zaW9uXG4gKiB0byBwcm92aWRlIGludGVsbGlzZW5zZSBhbmQgdG8gdXNlIHRoZSBjb21wb25lbnQgbGlrZSB0aGlzIGluIGEgU3ZlbHRlIGZpbGVcbiAqIHdpdGggVHlwZVNjcmlwdDpcbiAqIGBgYHN2ZWx0ZVxuICogPHNjcmlwdCBsYW5nPVwidHNcIj5cbiAqIFx0aW1wb3J0IHsgTXlDb21wb25lbnQgfSBmcm9tIFwiY29tcG9uZW50LWxpYnJhcnlcIjtcbiAqIDwvc2NyaXB0PlxuICogPE15Q29tcG9uZW50IGZvbz17J2Jhcid9IC8+XG4gKiBgYGBcbiAqXG4gKiAjIyMjIFdoeSBub3QgbWFrZSB0aGlzIHBhcnQgb2YgYFN2ZWx0ZUNvbXBvbmVudChEZXYpYD9cbiAqIEJlY2F1c2VcbiAqIGBgYHRzXG4gKiBjbGFzcyBBU3ViY2xhc3NPZlN2ZWx0ZUNvbXBvbmVudCBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudDx7Zm9vOiBzdHJpbmd9PiB7fVxuICogY29uc3QgY29tcG9uZW50OiB0eXBlb2YgU3ZlbHRlQ29tcG9uZW50ID0gQVN1YmNsYXNzT2ZTdmVsdGVDb21wb25lbnQ7XG4gKiBgYGBcbiAqIHdpbGwgdGhyb3cgYSB0eXBlIGVycm9yLCBzbyB3ZSBuZWVkIHRvIHNlcGFyYXRlIHRoZSBtb3JlIHN0cmljdGx5IHR5cGVkIGNsYXNzLlxuICovXG5jbGFzcyBTdmVsdGVDb21wb25lbnRUeXBlZCBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudERldiB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICB9XG59XG5mdW5jdGlvbiBsb29wX2d1YXJkKHRpbWVvdXQpIHtcbiAgICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKERhdGUubm93KCkgLSBzdGFydCA+IHRpbWVvdXQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW5maW5pdGUgbG9vcCBkZXRlY3RlZCcpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IHsgSHRtbFRhZywgSHRtbFRhZ0h5ZHJhdGlvbiwgUmVzaXplT2JzZXJ2ZXJTaW5nbGV0b24sIFN2ZWx0ZUNvbXBvbmVudCwgU3ZlbHRlQ29tcG9uZW50RGV2LCBTdmVsdGVDb21wb25lbnRUeXBlZCwgU3ZlbHRlRWxlbWVudCwgYWN0aW9uX2Rlc3Ryb3llciwgYWRkX2F0dHJpYnV0ZSwgYWRkX2NsYXNzZXMsIGFkZF9mbHVzaF9jYWxsYmFjaywgYWRkX2lmcmFtZV9yZXNpemVfbGlzdGVuZXIsIGFkZF9sb2NhdGlvbiwgYWRkX3JlbmRlcl9jYWxsYmFjaywgYWRkX3N0eWxlcywgYWRkX3RyYW5zZm9ybSwgYWZ0ZXJVcGRhdGUsIGFwcGVuZCwgYXBwZW5kX2RldiwgYXBwZW5kX2VtcHR5X3N0eWxlc2hlZXQsIGFwcGVuZF9oeWRyYXRpb24sIGFwcGVuZF9oeWRyYXRpb25fZGV2LCBhcHBlbmRfc3R5bGVzLCBhc3NpZ24sIGF0dHIsIGF0dHJfZGV2LCBhdHRyaWJ1dGVfdG9fb2JqZWN0LCBiZWZvcmVVcGRhdGUsIGJpbmQsIGJpbmRpbmdfY2FsbGJhY2tzLCBibGFua19vYmplY3QsIGJ1YmJsZSwgY2hlY2tfb3V0cm9zLCBjaGlsZHJlbiwgY2xhaW1fY29tbWVudCwgY2xhaW1fY29tcG9uZW50LCBjbGFpbV9lbGVtZW50LCBjbGFpbV9odG1sX3RhZywgY2xhaW1fc3BhY2UsIGNsYWltX3N2Z19lbGVtZW50LCBjbGFpbV90ZXh0LCBjbGVhcl9sb29wcywgY29tbWVudCwgY29tcG9uZW50X3N1YnNjcmliZSwgY29tcHV0ZV9yZXN0X3Byb3BzLCBjb21wdXRlX3Nsb3RzLCBjb25zdHJ1Y3Rfc3ZlbHRlX2NvbXBvbmVudCwgY29uc3RydWN0X3N2ZWx0ZV9jb21wb25lbnRfZGV2LCBjb250ZW50ZWRpdGFibGVfdHJ1dGh5X3ZhbHVlcywgY3JlYXRlRXZlbnREaXNwYXRjaGVyLCBjcmVhdGVfYW5pbWF0aW9uLCBjcmVhdGVfYmlkaXJlY3Rpb25hbF90cmFuc2l0aW9uLCBjcmVhdGVfY29tcG9uZW50LCBjcmVhdGVfaW5fdHJhbnNpdGlvbiwgY3JlYXRlX291dF90cmFuc2l0aW9uLCBjcmVhdGVfc2xvdCwgY3JlYXRlX3Nzcl9jb21wb25lbnQsIGN1cnJlbnRfY29tcG9uZW50LCBjdXN0b21fZXZlbnQsIGRhdGFzZXRfZGV2LCBkZWJ1ZywgZGVzdHJveV9ibG9jaywgZGVzdHJveV9jb21wb25lbnQsIGRlc3Ryb3lfZWFjaCwgZGV0YWNoLCBkZXRhY2hfYWZ0ZXJfZGV2LCBkZXRhY2hfYmVmb3JlX2RldiwgZGV0YWNoX2JldHdlZW5fZGV2LCBkZXRhY2hfZGV2LCBkaXJ0eV9jb21wb25lbnRzLCBkaXNwYXRjaF9kZXYsIGVhY2gsIGVsZW1lbnQsIGVsZW1lbnRfaXMsIGVtcHR5LCBlbmRfaHlkcmF0aW5nLCBlc2NhcGUsIGVzY2FwZV9hdHRyaWJ1dGVfdmFsdWUsIGVzY2FwZV9vYmplY3QsIGV4Y2x1ZGVfaW50ZXJuYWxfcHJvcHMsIGZpeF9hbmRfZGVzdHJveV9ibG9jaywgZml4X2FuZF9vdXRyb19hbmRfZGVzdHJveV9ibG9jaywgZml4X3Bvc2l0aW9uLCBmbHVzaCwgZmx1c2hfcmVuZGVyX2NhbGxiYWNrcywgZ2V0QWxsQ29udGV4dHMsIGdldENvbnRleHQsIGdldF9hbGxfZGlydHlfZnJvbV9zY29wZSwgZ2V0X2JpbmRpbmdfZ3JvdXBfdmFsdWUsIGdldF9jdXJyZW50X2NvbXBvbmVudCwgZ2V0X2N1c3RvbV9lbGVtZW50c19zbG90cywgZ2V0X3Jvb3RfZm9yX3N0eWxlLCBnZXRfc2xvdF9jaGFuZ2VzLCBnZXRfc3ByZWFkX29iamVjdCwgZ2V0X3NwcmVhZF91cGRhdGUsIGdldF9zdG9yZV92YWx1ZSwgZ2xvYmFscywgZ3JvdXBfb3V0cm9zLCBoYW5kbGVfcHJvbWlzZSwgaGFzQ29udGV4dCwgaGFzX3Byb3AsIGhlYWRfc2VsZWN0b3IsIGlkZW50aXR5LCBpbml0LCBpbml0X2JpbmRpbmdfZ3JvdXAsIGluaXRfYmluZGluZ19ncm91cF9keW5hbWljLCBpbnNlcnQsIGluc2VydF9kZXYsIGluc2VydF9oeWRyYXRpb24sIGluc2VydF9oeWRyYXRpb25fZGV2LCBpbnRyb3MsIGludmFsaWRfYXR0cmlidXRlX25hbWVfY2hhcmFjdGVyLCBpc19jbGllbnQsIGlzX2Nyb3Nzb3JpZ2luLCBpc19lbXB0eSwgaXNfZnVuY3Rpb24sIGlzX3Byb21pc2UsIGlzX3ZvaWQsIGxpc3RlbiwgbGlzdGVuX2RldiwgbG9vcCwgbG9vcF9ndWFyZCwgbWVyZ2Vfc3NyX3N0eWxlcywgbWlzc2luZ19jb21wb25lbnQsIG1vdW50X2NvbXBvbmVudCwgbm9vcCwgbm90X2VxdWFsLCBub3csIG51bGxfdG9fZW1wdHksIG9iamVjdF93aXRob3V0X3Byb3BlcnRpZXMsIG9uRGVzdHJveSwgb25Nb3VudCwgb25jZSwgb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2ssIHByZXZlbnRfZGVmYXVsdCwgcHJvcF9kZXYsIHF1ZXJ5X3NlbGVjdG9yX2FsbCwgcmFmLCByZXNpemVfb2JzZXJ2ZXJfYm9yZGVyX2JveCwgcmVzaXplX29ic2VydmVyX2NvbnRlbnRfYm94LCByZXNpemVfb2JzZXJ2ZXJfZGV2aWNlX3BpeGVsX2NvbnRlbnRfYm94LCBydW4sIHJ1bl9hbGwsIHNhZmVfbm90X2VxdWFsLCBzY2hlZHVsZV91cGRhdGUsIHNlbGVjdF9tdWx0aXBsZV92YWx1ZSwgc2VsZWN0X29wdGlvbiwgc2VsZWN0X29wdGlvbnMsIHNlbGVjdF92YWx1ZSwgc2VsZiwgc2V0Q29udGV4dCwgc2V0X2F0dHJpYnV0ZXMsIHNldF9jdXJyZW50X2NvbXBvbmVudCwgc2V0X2N1c3RvbV9lbGVtZW50X2RhdGEsIHNldF9jdXN0b21fZWxlbWVudF9kYXRhX21hcCwgc2V0X2RhdGEsIHNldF9kYXRhX2NvbnRlbnRlZGl0YWJsZSwgc2V0X2RhdGFfY29udGVudGVkaXRhYmxlX2Rldiwgc2V0X2RhdGFfZGV2LCBzZXRfZGF0YV9tYXliZV9jb250ZW50ZWRpdGFibGUsIHNldF9kYXRhX21heWJlX2NvbnRlbnRlZGl0YWJsZV9kZXYsIHNldF9keW5hbWljX2VsZW1lbnRfZGF0YSwgc2V0X2lucHV0X3R5cGUsIHNldF9pbnB1dF92YWx1ZSwgc2V0X25vdywgc2V0X3JhZiwgc2V0X3N0b3JlX3ZhbHVlLCBzZXRfc3R5bGUsIHNldF9zdmdfYXR0cmlidXRlcywgc3BhY2UsIHNwbGl0X2Nzc191bml0LCBzcHJlYWQsIHNyY191cmxfZXF1YWwsIHN0YXJ0X2h5ZHJhdGluZywgc3RvcF9pbW1lZGlhdGVfcHJvcGFnYXRpb24sIHN0b3BfcHJvcGFnYXRpb24sIHN1YnNjcmliZSwgc3ZnX2VsZW1lbnQsIHRleHQsIHRpY2ssIHRpbWVfcmFuZ2VzX3RvX2FycmF5LCB0b19udW1iZXIsIHRvZ2dsZV9jbGFzcywgdHJhbnNpdGlvbl9pbiwgdHJhbnNpdGlvbl9vdXQsIHRydXN0ZWQsIHVwZGF0ZV9hd2FpdF9ibG9ja19icmFuY2gsIHVwZGF0ZV9rZXllZF9lYWNoLCB1cGRhdGVfc2xvdCwgdXBkYXRlX3Nsb3RfYmFzZSwgdmFsaWRhdGVfY29tcG9uZW50LCB2YWxpZGF0ZV9keW5hbWljX2VsZW1lbnQsIHZhbGlkYXRlX2VhY2hfYXJndW1lbnQsIHZhbGlkYXRlX2VhY2hfa2V5cywgdmFsaWRhdGVfc2xvdHMsIHZhbGlkYXRlX3N0b3JlLCB2YWxpZGF0ZV92b2lkX2R5bmFtaWNfZWxlbWVudCwgeGxpbmtfYXR0ciB9O1xuIiwgImltcG9ydCB7IG5vb3AsIHNhZmVfbm90X2VxdWFsLCBzdWJzY3JpYmUsIHJ1bl9hbGwsIGlzX2Z1bmN0aW9uIH0gZnJvbSAnLi4vaW50ZXJuYWwvaW5kZXgubWpzJztcbmV4cG9ydCB7IGdldF9zdG9yZV92YWx1ZSBhcyBnZXQgfSBmcm9tICcuLi9pbnRlcm5hbC9pbmRleC5tanMnO1xuXG5jb25zdCBzdWJzY3JpYmVyX3F1ZXVlID0gW107XG4vKipcbiAqIENyZWF0ZXMgYSBgUmVhZGFibGVgIHN0b3JlIHRoYXQgYWxsb3dzIHJlYWRpbmcgYnkgc3Vic2NyaXB0aW9uLlxuICogQHBhcmFtIHZhbHVlIGluaXRpYWwgdmFsdWVcbiAqIEBwYXJhbSB7U3RhcnRTdG9wTm90aWZpZXJ9IFtzdGFydF1cbiAqL1xuZnVuY3Rpb24gcmVhZGFibGUodmFsdWUsIHN0YXJ0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3Vic2NyaWJlOiB3cml0YWJsZSh2YWx1ZSwgc3RhcnQpLnN1YnNjcmliZVxuICAgIH07XG59XG4vKipcbiAqIENyZWF0ZSBhIGBXcml0YWJsZWAgc3RvcmUgdGhhdCBhbGxvd3MgYm90aCB1cGRhdGluZyBhbmQgcmVhZGluZyBieSBzdWJzY3JpcHRpb24uXG4gKiBAcGFyYW0geyo9fXZhbHVlIGluaXRpYWwgdmFsdWVcbiAqIEBwYXJhbSB7U3RhcnRTdG9wTm90aWZpZXI9fSBzdGFydFxuICovXG5mdW5jdGlvbiB3cml0YWJsZSh2YWx1ZSwgc3RhcnQgPSBub29wKSB7XG4gICAgbGV0IHN0b3A7XG4gICAgY29uc3Qgc3Vic2NyaWJlcnMgPSBuZXcgU2V0KCk7XG4gICAgZnVuY3Rpb24gc2V0KG5ld192YWx1ZSkge1xuICAgICAgICBpZiAoc2FmZV9ub3RfZXF1YWwodmFsdWUsIG5ld192YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbmV3X3ZhbHVlO1xuICAgICAgICAgICAgaWYgKHN0b3ApIHsgLy8gc3RvcmUgaXMgcmVhZHlcbiAgICAgICAgICAgICAgICBjb25zdCBydW5fcXVldWUgPSAhc3Vic2NyaWJlcl9xdWV1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBzdWJzY3JpYmVyIG9mIHN1YnNjcmliZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJbMV0oKTtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlcl9xdWV1ZS5wdXNoKHN1YnNjcmliZXIsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJ1bl9xdWV1ZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZXJfcXVldWUubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWVbaV1bMF0oc3Vic2NyaWJlcl9xdWV1ZVtpICsgMV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWUubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlKGZuKSB7XG4gICAgICAgIHNldChmbih2YWx1ZSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdWJzY3JpYmUocnVuLCBpbnZhbGlkYXRlID0gbm9vcCkge1xuICAgICAgICBjb25zdCBzdWJzY3JpYmVyID0gW3J1biwgaW52YWxpZGF0ZV07XG4gICAgICAgIHN1YnNjcmliZXJzLmFkZChzdWJzY3JpYmVyKTtcbiAgICAgICAgaWYgKHN1YnNjcmliZXJzLnNpemUgPT09IDEpIHtcbiAgICAgICAgICAgIHN0b3AgPSBzdGFydChzZXQpIHx8IG5vb3A7XG4gICAgICAgIH1cbiAgICAgICAgcnVuKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHN1YnNjcmliZXJzLmRlbGV0ZShzdWJzY3JpYmVyKTtcbiAgICAgICAgICAgIGlmIChzdWJzY3JpYmVycy5zaXplID09PSAwICYmIHN0b3ApIHtcbiAgICAgICAgICAgICAgICBzdG9wKCk7XG4gICAgICAgICAgICAgICAgc3RvcCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7IHNldCwgdXBkYXRlLCBzdWJzY3JpYmUgfTtcbn1cbmZ1bmN0aW9uIGRlcml2ZWQoc3RvcmVzLCBmbiwgaW5pdGlhbF92YWx1ZSkge1xuICAgIGNvbnN0IHNpbmdsZSA9ICFBcnJheS5pc0FycmF5KHN0b3Jlcyk7XG4gICAgY29uc3Qgc3RvcmVzX2FycmF5ID0gc2luZ2xlXG4gICAgICAgID8gW3N0b3Jlc11cbiAgICAgICAgOiBzdG9yZXM7XG4gICAgY29uc3QgYXV0byA9IGZuLmxlbmd0aCA8IDI7XG4gICAgcmV0dXJuIHJlYWRhYmxlKGluaXRpYWxfdmFsdWUsIChzZXQpID0+IHtcbiAgICAgICAgbGV0IHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gW107XG4gICAgICAgIGxldCBwZW5kaW5nID0gMDtcbiAgICAgICAgbGV0IGNsZWFudXAgPSBub29wO1xuICAgICAgICBjb25zdCBzeW5jID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHBlbmRpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmbihzaW5nbGUgPyB2YWx1ZXNbMF0gOiB2YWx1ZXMsIHNldCk7XG4gICAgICAgICAgICBpZiAoYXV0bykge1xuICAgICAgICAgICAgICAgIHNldChyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xlYW51cCA9IGlzX2Z1bmN0aW9uKHJlc3VsdCkgPyByZXN1bHQgOiBub29wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB1bnN1YnNjcmliZXJzID0gc3RvcmVzX2FycmF5Lm1hcCgoc3RvcmUsIGkpID0+IHN1YnNjcmliZShzdG9yZSwgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB2YWx1ZXNbaV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHBlbmRpbmcgJj0gfigxIDw8IGkpO1xuICAgICAgICAgICAgaWYgKHN0YXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICBzeW5jKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIHBlbmRpbmcgfD0gKDEgPDwgaSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgc3RhcnRlZCA9IHRydWU7XG4gICAgICAgIHN5bmMoKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgICAgICBydW5fYWxsKHVuc3Vic2NyaWJlcnMpO1xuICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgLy8gV2UgbmVlZCB0byBzZXQgdGhpcyB0byBmYWxzZSBiZWNhdXNlIGNhbGxiYWNrcyBjYW4gc3RpbGwgaGFwcGVuIGRlc3BpdGUgaGF2aW5nIHVuc3Vic2NyaWJlZDpcbiAgICAgICAgICAgIC8vIENhbGxiYWNrcyBtaWdodCBhbHJlYWR5IGJlIHBsYWNlZCBpbiB0aGUgcXVldWUgd2hpY2ggZG9lc24ndCBrbm93IGl0IHNob3VsZCBubyBsb25nZXJcbiAgICAgICAgICAgIC8vIGludm9rZSB0aGlzIGRlcml2ZWQgc3RvcmUuXG4gICAgICAgICAgICBzdGFydGVkID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgfSk7XG59XG4vKipcbiAqIFRha2VzIGEgc3RvcmUgYW5kIHJldHVybnMgYSBuZXcgb25lIGRlcml2ZWQgZnJvbSB0aGUgb2xkIG9uZSB0aGF0IGlzIHJlYWRhYmxlLlxuICpcbiAqIEBwYXJhbSBzdG9yZSAtIHN0b3JlIHRvIG1ha2UgcmVhZG9ubHlcbiAqL1xuZnVuY3Rpb24gcmVhZG9ubHkoc3RvcmUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdWJzY3JpYmU6IHN0b3JlLnN1YnNjcmliZS5iaW5kKHN0b3JlKVxuICAgIH07XG59XG5cbmV4cG9ydCB7IGRlcml2ZWQsIHJlYWRhYmxlLCByZWFkb25seSwgd3JpdGFibGUgfTtcbiIsICIvLyEgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM0NzQ5ODczLzE0NTkxNzM3XG5mdW5jdGlvbiBpc09iamVjdChpdGVtKSB7XG4gICAgcmV0dXJuIChpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSk7XG59XG4vLyBUT0RPOiBIYXZlIGFuIGFjY3VyYXRlIHJldHVybiB0eXBlXG5leHBvcnQgZnVuY3Rpb24gZGVlcE1lcmdlKHRhcmdldCwgLi4uc291cmNlcykge1xuICAgIGlmICghc291cmNlcy5sZW5ndGgpXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpO1xuICAgIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgICAgZm9yIChjb25zdCBrIGluIHNvdXJjZSkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gaztcbiAgICAgICAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldFtrZXldKVxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgeyBba2V5XToge30gfSk7XG4gICAgICAgICAgICAgICAgZGVlcE1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgeyBba2V5XTogc291cmNlW2tleV0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlZXBNZXJnZSh0YXJnZXQsIC4uLnNvdXJjZXMpO1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBlbTJweChlbSwgYmFzZSkge1xuICAgIGJhc2UgPz89IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICBjb25zdCBweCA9IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShiYXNlKS5mb250U2l6ZSk7XG4gICAgcmV0dXJuIGVtICogcHg7XG59XG5leHBvcnQgeyBlbTJweCBhcyByZW0ycHggfTtcbiIsICJleHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVJRChsZW5ndGggPSA4KSB7XG4gICAgcmV0dXJuIFsuLi5BcnJheShsZW5ndGgpXS5tYXAoKCkgPT4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNilbMl0pLmpvaW4oJycpO1xufVxuIiwgImZ1bmN0aW9uIGdldEFsaWdubWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xufVxuXG5mdW5jdGlvbiBnZXRMZW5ndGhGcm9tQXhpcyhheGlzKSB7XG4gIHJldHVybiBheGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG59XG5cbmZ1bmN0aW9uIGdldFNpZGUocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbn1cblxuZnVuY3Rpb24gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gWyd0b3AnLCAnYm90dG9tJ10uaW5jbHVkZXMoZ2V0U2lkZShwbGFjZW1lbnQpKSA/ICd4JyA6ICd5Jztcbn1cblxuZnVuY3Rpb24gY29tcHV0ZUNvb3Jkc0Zyb21QbGFjZW1lbnQoX3JlZiwgcGxhY2VtZW50LCBydGwpIHtcbiAgbGV0IHtcbiAgICByZWZlcmVuY2UsXG4gICAgZmxvYXRpbmdcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IGNvbW1vblggPSByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCAvIDIgLSBmbG9hdGluZy53aWR0aCAvIDI7XG4gIGNvbnN0IGNvbW1vblkgPSByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHQgLyAyIC0gZmxvYXRpbmcuaGVpZ2h0IC8gMjtcbiAgY29uc3QgbWFpbkF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgY29uc3QgbGVuZ3RoID0gZ2V0TGVuZ3RoRnJvbUF4aXMobWFpbkF4aXMpO1xuICBjb25zdCBjb21tb25BbGlnbiA9IHJlZmVyZW5jZVtsZW5ndGhdIC8gMiAtIGZsb2F0aW5nW2xlbmd0aF0gLyAyO1xuICBjb25zdCBzaWRlID0gZ2V0U2lkZShwbGFjZW1lbnQpO1xuICBjb25zdCBpc1ZlcnRpY2FsID0gbWFpbkF4aXMgPT09ICd4JztcbiAgbGV0IGNvb3JkcztcbiAgc3dpdGNoIChzaWRlKSB7XG4gICAgY2FzZSAndG9wJzpcbiAgICAgIGNvb3JkcyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgLSBmbG9hdGluZy5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlICdib3R0b20nOlxuICAgICAgY29vcmRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlICdyaWdodCc6XG4gICAgICBjb29yZHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoLFxuICAgICAgICB5OiBjb21tb25ZXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbGVmdCc6XG4gICAgICBjb29yZHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54IC0gZmxvYXRpbmcud2lkdGgsXG4gICAgICAgIHk6IGNvbW1vbllcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgY29vcmRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnlcbiAgICAgIH07XG4gIH1cbiAgc3dpdGNoIChnZXRBbGlnbm1lbnQocGxhY2VtZW50KSkge1xuICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgIGNvb3Jkc1ttYWluQXhpc10gLT0gY29tbW9uQWxpZ24gKiAocnRsICYmIGlzVmVydGljYWwgPyAtMSA6IDEpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZW5kJzpcbiAgICAgIGNvb3Jkc1ttYWluQXhpc10gKz0gY29tbW9uQWxpZ24gKiAocnRsICYmIGlzVmVydGljYWwgPyAtMSA6IDEpO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIGNvb3Jkcztcbn1cblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgYHhgIGFuZCBgeWAgY29vcmRpbmF0ZXMgdGhhdCB3aWxsIHBsYWNlIHRoZSBmbG9hdGluZyBlbGVtZW50XG4gKiBuZXh0IHRvIGEgcmVmZXJlbmNlIGVsZW1lbnQgd2hlbiBpdCBpcyBnaXZlbiBhIGNlcnRhaW4gcG9zaXRpb25pbmcgc3RyYXRlZ3kuXG4gKlxuICogVGhpcyBleHBvcnQgZG9lcyBub3QgaGF2ZSBhbnkgYHBsYXRmb3JtYCBpbnRlcmZhY2UgbG9naWMuIFlvdSB3aWxsIG5lZWQgdG9cbiAqIHdyaXRlIG9uZSBmb3IgdGhlIHBsYXRmb3JtIHlvdSBhcmUgdXNpbmcgRmxvYXRpbmcgVUkgd2l0aC5cbiAqL1xuY29uc3QgY29tcHV0ZVBvc2l0aW9uID0gYXN5bmMgKHJlZmVyZW5jZSwgZmxvYXRpbmcsIGNvbmZpZykgPT4ge1xuICBjb25zdCB7XG4gICAgcGxhY2VtZW50ID0gJ2JvdHRvbScsXG4gICAgc3RyYXRlZ3kgPSAnYWJzb2x1dGUnLFxuICAgIG1pZGRsZXdhcmUgPSBbXSxcbiAgICBwbGF0Zm9ybVxuICB9ID0gY29uZmlnO1xuICBjb25zdCB2YWxpZE1pZGRsZXdhcmUgPSBtaWRkbGV3YXJlLmZpbHRlcihCb29sZWFuKTtcbiAgY29uc3QgcnRsID0gYXdhaXQgKHBsYXRmb3JtLmlzUlRMID09IG51bGwgPyB2b2lkIDAgOiBwbGF0Zm9ybS5pc1JUTChmbG9hdGluZykpO1xuICBsZXQgcmVjdHMgPSBhd2FpdCBwbGF0Zm9ybS5nZXRFbGVtZW50UmVjdHMoe1xuICAgIHJlZmVyZW5jZSxcbiAgICBmbG9hdGluZyxcbiAgICBzdHJhdGVneVxuICB9KTtcbiAgbGV0IHtcbiAgICB4LFxuICAgIHlcbiAgfSA9IGNvbXB1dGVDb29yZHNGcm9tUGxhY2VtZW50KHJlY3RzLCBwbGFjZW1lbnQsIHJ0bCk7XG4gIGxldCBzdGF0ZWZ1bFBsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgbGV0IG1pZGRsZXdhcmVEYXRhID0ge307XG4gIGxldCByZXNldENvdW50ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWxpZE1pZGRsZXdhcmUubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB7XG4gICAgICBuYW1lLFxuICAgICAgZm5cbiAgICB9ID0gdmFsaWRNaWRkbGV3YXJlW2ldO1xuICAgIGNvbnN0IHtcbiAgICAgIHg6IG5leHRYLFxuICAgICAgeTogbmV4dFksXG4gICAgICBkYXRhLFxuICAgICAgcmVzZXRcbiAgICB9ID0gYXdhaXQgZm4oe1xuICAgICAgeCxcbiAgICAgIHksXG4gICAgICBpbml0aWFsUGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBwbGFjZW1lbnQ6IHN0YXRlZnVsUGxhY2VtZW50LFxuICAgICAgc3RyYXRlZ3ksXG4gICAgICBtaWRkbGV3YXJlRGF0YSxcbiAgICAgIHJlY3RzLFxuICAgICAgcGxhdGZvcm0sXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICByZWZlcmVuY2UsXG4gICAgICAgIGZsb2F0aW5nXG4gICAgICB9XG4gICAgfSk7XG4gICAgeCA9IG5leHRYICE9IG51bGwgPyBuZXh0WCA6IHg7XG4gICAgeSA9IG5leHRZICE9IG51bGwgPyBuZXh0WSA6IHk7XG4gICAgbWlkZGxld2FyZURhdGEgPSB7XG4gICAgICAuLi5taWRkbGV3YXJlRGF0YSxcbiAgICAgIFtuYW1lXToge1xuICAgICAgICAuLi5taWRkbGV3YXJlRGF0YVtuYW1lXSxcbiAgICAgICAgLi4uZGF0YVxuICAgICAgfVxuICAgIH07XG4gICAgaWYgKHJlc2V0ICYmIHJlc2V0Q291bnQgPD0gNTApIHtcbiAgICAgIHJlc2V0Q291bnQrKztcbiAgICAgIGlmICh0eXBlb2YgcmVzZXQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChyZXNldC5wbGFjZW1lbnQpIHtcbiAgICAgICAgICBzdGF0ZWZ1bFBsYWNlbWVudCA9IHJlc2V0LnBsYWNlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzZXQucmVjdHMpIHtcbiAgICAgICAgICByZWN0cyA9IHJlc2V0LnJlY3RzID09PSB0cnVlID8gYXdhaXQgcGxhdGZvcm0uZ2V0RWxlbWVudFJlY3RzKHtcbiAgICAgICAgICAgIHJlZmVyZW5jZSxcbiAgICAgICAgICAgIGZsb2F0aW5nLFxuICAgICAgICAgICAgc3RyYXRlZ3lcbiAgICAgICAgICB9KSA6IHJlc2V0LnJlY3RzO1xuICAgICAgICB9XG4gICAgICAgICh7XG4gICAgICAgICAgeCxcbiAgICAgICAgICB5XG4gICAgICAgIH0gPSBjb21wdXRlQ29vcmRzRnJvbVBsYWNlbWVudChyZWN0cywgc3RhdGVmdWxQbGFjZW1lbnQsIHJ0bCkpO1xuICAgICAgfVxuICAgICAgaSA9IC0xO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgeCxcbiAgICB5LFxuICAgIHBsYWNlbWVudDogc3RhdGVmdWxQbGFjZW1lbnQsXG4gICAgc3RyYXRlZ3ksXG4gICAgbWlkZGxld2FyZURhdGFcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGV2YWx1YXRlKHZhbHVlLCBwYXJhbSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nID8gdmFsdWUocGFyYW0pIDogdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGV4cGFuZFBhZGRpbmdPYmplY3QocGFkZGluZykge1xuICByZXR1cm4ge1xuICAgIHRvcDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMCxcbiAgICAuLi5wYWRkaW5nXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFNpZGVPYmplY3RGcm9tUGFkZGluZyhwYWRkaW5nKSB7XG4gIHJldHVybiB0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBleHBhbmRQYWRkaW5nT2JqZWN0KHBhZGRpbmcpIDoge1xuICAgIHRvcDogcGFkZGluZyxcbiAgICByaWdodDogcGFkZGluZyxcbiAgICBib3R0b206IHBhZGRpbmcsXG4gICAgbGVmdDogcGFkZGluZ1xuICB9O1xufVxuXG5mdW5jdGlvbiByZWN0VG9DbGllbnRSZWN0KHJlY3QpIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5yZWN0LFxuICAgIHRvcDogcmVjdC55LFxuICAgIGxlZnQ6IHJlY3QueCxcbiAgICByaWdodDogcmVjdC54ICsgcmVjdC53aWR0aCxcbiAgICBib3R0b206IHJlY3QueSArIHJlY3QuaGVpZ2h0XG4gIH07XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgd2l0aCBhbiBvYmplY3Qgb2Ygb3ZlcmZsb3cgc2lkZSBvZmZzZXRzIHRoYXQgZGV0ZXJtaW5lIGhvdyBtdWNoIHRoZVxuICogZWxlbWVudCBpcyBvdmVyZmxvd2luZyBhIGdpdmVuIGNsaXBwaW5nIGJvdW5kYXJ5IG9uIGVhY2ggc2lkZS5cbiAqIC0gcG9zaXRpdmUgPSBvdmVyZmxvd2luZyB0aGUgYm91bmRhcnkgYnkgdGhhdCBudW1iZXIgb2YgcGl4ZWxzXG4gKiAtIG5lZ2F0aXZlID0gaG93IG1hbnkgcGl4ZWxzIGxlZnQgYmVmb3JlIGl0IHdpbGwgb3ZlcmZsb3dcbiAqIC0gMCA9IGxpZXMgZmx1c2ggd2l0aCB0aGUgYm91bmRhcnlcbiAqIEBzZWUgaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9kZXRlY3RPdmVyZmxvd1xuICovXG5hc3luYyBmdW5jdGlvbiBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX2F3YWl0JHBsYXRmb3JtJGlzRWxlO1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGNvbnN0IHtcbiAgICB4LFxuICAgIHksXG4gICAgcGxhdGZvcm0sXG4gICAgcmVjdHMsXG4gICAgZWxlbWVudHMsXG4gICAgc3RyYXRlZ3lcbiAgfSA9IHN0YXRlO1xuICBjb25zdCB7XG4gICAgYm91bmRhcnkgPSAnY2xpcHBpbmdBbmNlc3RvcnMnLFxuICAgIHJvb3RCb3VuZGFyeSA9ICd2aWV3cG9ydCcsXG4gICAgZWxlbWVudENvbnRleHQgPSAnZmxvYXRpbmcnLFxuICAgIGFsdEJvdW5kYXJ5ID0gZmFsc2UsXG4gICAgcGFkZGluZyA9IDBcbiAgfSA9IGV2YWx1YXRlKG9wdGlvbnMsIHN0YXRlKTtcbiAgY29uc3QgcGFkZGluZ09iamVjdCA9IGdldFNpZGVPYmplY3RGcm9tUGFkZGluZyhwYWRkaW5nKTtcbiAgY29uc3QgYWx0Q29udGV4dCA9IGVsZW1lbnRDb250ZXh0ID09PSAnZmxvYXRpbmcnID8gJ3JlZmVyZW5jZScgOiAnZmxvYXRpbmcnO1xuICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHNbYWx0Qm91bmRhcnkgPyBhbHRDb250ZXh0IDogZWxlbWVudENvbnRleHRdO1xuICBjb25zdCBjbGlwcGluZ0NsaWVudFJlY3QgPSByZWN0VG9DbGllbnRSZWN0KGF3YWl0IHBsYXRmb3JtLmdldENsaXBwaW5nUmVjdCh7XG4gICAgZWxlbWVudDogKChfYXdhaXQkcGxhdGZvcm0kaXNFbGUgPSBhd2FpdCAocGxhdGZvcm0uaXNFbGVtZW50ID09IG51bGwgPyB2b2lkIDAgOiBwbGF0Zm9ybS5pc0VsZW1lbnQoZWxlbWVudCkpKSAhPSBudWxsID8gX2F3YWl0JHBsYXRmb3JtJGlzRWxlIDogdHJ1ZSkgPyBlbGVtZW50IDogZWxlbWVudC5jb250ZXh0RWxlbWVudCB8fCAoYXdhaXQgKHBsYXRmb3JtLmdldERvY3VtZW50RWxlbWVudCA9PSBudWxsID8gdm9pZCAwIDogcGxhdGZvcm0uZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnRzLmZsb2F0aW5nKSkpLFxuICAgIGJvdW5kYXJ5LFxuICAgIHJvb3RCb3VuZGFyeSxcbiAgICBzdHJhdGVneVxuICB9KSk7XG4gIGNvbnN0IHJlY3QgPSBlbGVtZW50Q29udGV4dCA9PT0gJ2Zsb2F0aW5nJyA/IHtcbiAgICAuLi5yZWN0cy5mbG9hdGluZyxcbiAgICB4LFxuICAgIHlcbiAgfSA6IHJlY3RzLnJlZmVyZW5jZTtcbiAgY29uc3Qgb2Zmc2V0UGFyZW50ID0gYXdhaXQgKHBsYXRmb3JtLmdldE9mZnNldFBhcmVudCA9PSBudWxsID8gdm9pZCAwIDogcGxhdGZvcm0uZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnRzLmZsb2F0aW5nKSk7XG4gIGNvbnN0IG9mZnNldFNjYWxlID0gKGF3YWl0IChwbGF0Zm9ybS5pc0VsZW1lbnQgPT0gbnVsbCA/IHZvaWQgMCA6IHBsYXRmb3JtLmlzRWxlbWVudChvZmZzZXRQYXJlbnQpKSkgPyAoYXdhaXQgKHBsYXRmb3JtLmdldFNjYWxlID09IG51bGwgPyB2b2lkIDAgOiBwbGF0Zm9ybS5nZXRTY2FsZShvZmZzZXRQYXJlbnQpKSkgfHwge1xuICAgIHg6IDEsXG4gICAgeTogMVxuICB9IDoge1xuICAgIHg6IDEsXG4gICAgeTogMVxuICB9O1xuICBjb25zdCBlbGVtZW50Q2xpZW50UmVjdCA9IHJlY3RUb0NsaWVudFJlY3QocGxhdGZvcm0uY29udmVydE9mZnNldFBhcmVudFJlbGF0aXZlUmVjdFRvVmlld3BvcnRSZWxhdGl2ZVJlY3QgPyBhd2FpdCBwbGF0Zm9ybS5jb252ZXJ0T2Zmc2V0UGFyZW50UmVsYXRpdmVSZWN0VG9WaWV3cG9ydFJlbGF0aXZlUmVjdCh7XG4gICAgcmVjdCxcbiAgICBvZmZzZXRQYXJlbnQsXG4gICAgc3RyYXRlZ3lcbiAgfSkgOiByZWN0KTtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IChjbGlwcGluZ0NsaWVudFJlY3QudG9wIC0gZWxlbWVudENsaWVudFJlY3QudG9wICsgcGFkZGluZ09iamVjdC50b3ApIC8gb2Zmc2V0U2NhbGUueSxcbiAgICBib3R0b206IChlbGVtZW50Q2xpZW50UmVjdC5ib3R0b20gLSBjbGlwcGluZ0NsaWVudFJlY3QuYm90dG9tICsgcGFkZGluZ09iamVjdC5ib3R0b20pIC8gb2Zmc2V0U2NhbGUueSxcbiAgICBsZWZ0OiAoY2xpcHBpbmdDbGllbnRSZWN0LmxlZnQgLSBlbGVtZW50Q2xpZW50UmVjdC5sZWZ0ICsgcGFkZGluZ09iamVjdC5sZWZ0KSAvIG9mZnNldFNjYWxlLngsXG4gICAgcmlnaHQ6IChlbGVtZW50Q2xpZW50UmVjdC5yaWdodCAtIGNsaXBwaW5nQ2xpZW50UmVjdC5yaWdodCArIHBhZGRpbmdPYmplY3QucmlnaHQpIC8gb2Zmc2V0U2NhbGUueFxuICB9O1xufVxuXG5jb25zdCBtaW4gPSBNYXRoLm1pbjtcbmNvbnN0IG1heCA9IE1hdGgubWF4O1xuXG5mdW5jdGlvbiB3aXRoaW4obWluJDEsIHZhbHVlLCBtYXgkMSkge1xuICByZXR1cm4gbWF4KG1pbiQxLCBtaW4odmFsdWUsIG1heCQxKSk7XG59XG5cbi8qKlxuICogUHJvdmlkZXMgZGF0YSB0byBwb3NpdGlvbiBhbiBpbm5lciBlbGVtZW50IG9mIHRoZSBmbG9hdGluZyBlbGVtZW50IHNvIHRoYXQgaXRcbiAqIGFwcGVhcnMgY2VudGVyZWQgdG8gdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2Fycm93XG4gKi9cbmNvbnN0IGFycm93ID0gb3B0aW9ucyA9PiAoe1xuICBuYW1lOiAnYXJyb3cnLFxuICBvcHRpb25zLFxuICBhc3luYyBmbihzdGF0ZSkge1xuICAgIGNvbnN0IHtcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgcGxhY2VtZW50LFxuICAgICAgcmVjdHMsXG4gICAgICBwbGF0Zm9ybSxcbiAgICAgIGVsZW1lbnRzXG4gICAgfSA9IHN0YXRlO1xuICAgIC8vIFNpbmNlIGBlbGVtZW50YCBpcyByZXF1aXJlZCwgd2UgZG9uJ3QgUGFydGlhbDw+IHRoZSB0eXBlLlxuICAgIGNvbnN0IHtcbiAgICAgIGVsZW1lbnQsXG4gICAgICBwYWRkaW5nID0gMFxuICAgIH0gPSBldmFsdWF0ZShvcHRpb25zLCBzdGF0ZSkgfHwge307XG4gICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBjb25zdCBwYWRkaW5nT2JqZWN0ID0gZ2V0U2lkZU9iamVjdEZyb21QYWRkaW5nKHBhZGRpbmcpO1xuICAgIGNvbnN0IGNvb3JkcyA9IHtcbiAgICAgIHgsXG4gICAgICB5XG4gICAgfTtcbiAgICBjb25zdCBheGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gICAgY29uc3QgbGVuZ3RoID0gZ2V0TGVuZ3RoRnJvbUF4aXMoYXhpcyk7XG4gICAgY29uc3QgYXJyb3dEaW1lbnNpb25zID0gYXdhaXQgcGxhdGZvcm0uZ2V0RGltZW5zaW9ucyhlbGVtZW50KTtcbiAgICBjb25zdCBpc1lBeGlzID0gYXhpcyA9PT0gJ3knO1xuICAgIGNvbnN0IG1pblByb3AgPSBpc1lBeGlzID8gJ3RvcCcgOiAnbGVmdCc7XG4gICAgY29uc3QgbWF4UHJvcCA9IGlzWUF4aXMgPyAnYm90dG9tJyA6ICdyaWdodCc7XG4gICAgY29uc3QgY2xpZW50UHJvcCA9IGlzWUF4aXMgPyAnY2xpZW50SGVpZ2h0JyA6ICdjbGllbnRXaWR0aCc7XG4gICAgY29uc3QgZW5kRGlmZiA9IHJlY3RzLnJlZmVyZW5jZVtsZW5ndGhdICsgcmVjdHMucmVmZXJlbmNlW2F4aXNdIC0gY29vcmRzW2F4aXNdIC0gcmVjdHMuZmxvYXRpbmdbbGVuZ3RoXTtcbiAgICBjb25zdCBzdGFydERpZmYgPSBjb29yZHNbYXhpc10gLSByZWN0cy5yZWZlcmVuY2VbYXhpc107XG4gICAgY29uc3QgYXJyb3dPZmZzZXRQYXJlbnQgPSBhd2FpdCAocGxhdGZvcm0uZ2V0T2Zmc2V0UGFyZW50ID09IG51bGwgPyB2b2lkIDAgOiBwbGF0Zm9ybS5nZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkpO1xuICAgIGxldCBjbGllbnRTaXplID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBhcnJvd09mZnNldFBhcmVudFtjbGllbnRQcm9wXSA6IDA7XG5cbiAgICAvLyBET00gcGxhdGZvcm0gY2FuIHJldHVybiBgd2luZG93YCBhcyB0aGUgYG9mZnNldFBhcmVudGAuXG4gICAgaWYgKCFjbGllbnRTaXplIHx8ICEoYXdhaXQgKHBsYXRmb3JtLmlzRWxlbWVudCA9PSBudWxsID8gdm9pZCAwIDogcGxhdGZvcm0uaXNFbGVtZW50KGFycm93T2Zmc2V0UGFyZW50KSkpKSB7XG4gICAgICBjbGllbnRTaXplID0gZWxlbWVudHMuZmxvYXRpbmdbY2xpZW50UHJvcF0gfHwgcmVjdHMuZmxvYXRpbmdbbGVuZ3RoXTtcbiAgICB9XG4gICAgY29uc3QgY2VudGVyVG9SZWZlcmVuY2UgPSBlbmREaWZmIC8gMiAtIHN0YXJ0RGlmZiAvIDI7XG5cbiAgICAvLyBJZiB0aGUgcGFkZGluZyBpcyBsYXJnZSBlbm91Z2ggdGhhdCBpdCBjYXVzZXMgdGhlIGFycm93IHRvIG5vIGxvbmdlciBiZVxuICAgIC8vIGNlbnRlcmVkLCBtb2RpZnkgdGhlIHBhZGRpbmcgc28gdGhhdCBpdCBpcyBjZW50ZXJlZC5cbiAgICBjb25zdCBsYXJnZXN0UG9zc2libGVQYWRkaW5nID0gY2xpZW50U2l6ZSAvIDIgLSBhcnJvd0RpbWVuc2lvbnNbbGVuZ3RoXSAvIDIgLSAxO1xuICAgIGNvbnN0IG1pblBhZGRpbmcgPSBtaW4ocGFkZGluZ09iamVjdFttaW5Qcm9wXSwgbGFyZ2VzdFBvc3NpYmxlUGFkZGluZyk7XG4gICAgY29uc3QgbWF4UGFkZGluZyA9IG1pbihwYWRkaW5nT2JqZWN0W21heFByb3BdLCBsYXJnZXN0UG9zc2libGVQYWRkaW5nKTtcblxuICAgIC8vIE1ha2Ugc3VyZSB0aGUgYXJyb3cgZG9lc24ndCBvdmVyZmxvdyB0aGUgZmxvYXRpbmcgZWxlbWVudCBpZiB0aGUgY2VudGVyXG4gICAgLy8gcG9pbnQgaXMgb3V0c2lkZSB0aGUgZmxvYXRpbmcgZWxlbWVudCdzIGJvdW5kcy5cbiAgICBjb25zdCBtaW4kMSA9IG1pblBhZGRpbmc7XG4gICAgY29uc3QgbWF4ID0gY2xpZW50U2l6ZSAtIGFycm93RGltZW5zaW9uc1tsZW5ndGhdIC0gbWF4UGFkZGluZztcbiAgICBjb25zdCBjZW50ZXIgPSBjbGllbnRTaXplIC8gMiAtIGFycm93RGltZW5zaW9uc1tsZW5ndGhdIC8gMiArIGNlbnRlclRvUmVmZXJlbmNlO1xuICAgIGNvbnN0IG9mZnNldCA9IHdpdGhpbihtaW4kMSwgY2VudGVyLCBtYXgpO1xuXG4gICAgLy8gSWYgdGhlIHJlZmVyZW5jZSBpcyBzbWFsbCBlbm91Z2ggdGhhdCB0aGUgYXJyb3cncyBwYWRkaW5nIGNhdXNlcyBpdCB0b1xuICAgIC8vIHRvIHBvaW50IHRvIG5vdGhpbmcgZm9yIGFuIGFsaWduZWQgcGxhY2VtZW50LCBhZGp1c3QgdGhlIG9mZnNldCBvZiB0aGVcbiAgICAvLyBmbG9hdGluZyBlbGVtZW50IGl0c2VsZi4gVGhpcyBzdG9wcyBgc2hpZnQoKWAgZnJvbSB0YWtpbmcgYWN0aW9uLCBidXQgY2FuXG4gICAgLy8gYmUgd29ya2VkIGFyb3VuZCBieSBjYWxsaW5nIGl0IGFnYWluIGFmdGVyIHRoZSBgYXJyb3coKWAgaWYgZGVzaXJlZC5cbiAgICBjb25zdCBzaG91bGRBZGRPZmZzZXQgPSBnZXRBbGlnbm1lbnQocGxhY2VtZW50KSAhPSBudWxsICYmIGNlbnRlciAhPSBvZmZzZXQgJiYgcmVjdHMucmVmZXJlbmNlW2xlbmd0aF0gLyAyIC0gKGNlbnRlciA8IG1pbiQxID8gbWluUGFkZGluZyA6IG1heFBhZGRpbmcpIC0gYXJyb3dEaW1lbnNpb25zW2xlbmd0aF0gLyAyIDwgMDtcbiAgICBjb25zdCBhbGlnbm1lbnRPZmZzZXQgPSBzaG91bGRBZGRPZmZzZXQgPyBjZW50ZXIgPCBtaW4kMSA/IG1pbiQxIC0gY2VudGVyIDogbWF4IC0gY2VudGVyIDogMDtcbiAgICByZXR1cm4ge1xuICAgICAgW2F4aXNdOiBjb29yZHNbYXhpc10gLSBhbGlnbm1lbnRPZmZzZXQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIFtheGlzXTogb2Zmc2V0LFxuICAgICAgICBjZW50ZXJPZmZzZXQ6IGNlbnRlciAtIG9mZnNldCArIGFsaWdubWVudE9mZnNldFxuICAgICAgfVxuICAgIH07XG4gIH1cbn0pO1xuXG5jb25zdCBzaWRlcyA9IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J107XG5jb25zdCBhbGxQbGFjZW1lbnRzID0gLyojX19QVVJFX18qL3NpZGVzLnJlZHVjZSgoYWNjLCBzaWRlKSA9PiBhY2MuY29uY2F0KHNpZGUsIHNpZGUgKyBcIi1zdGFydFwiLCBzaWRlICsgXCItZW5kXCIpLCBbXSk7XG5cbmNvbnN0IG9wcG9zaXRlU2lkZU1hcCA9IHtcbiAgbGVmdDogJ3JpZ2h0JyxcbiAgcmlnaHQ6ICdsZWZ0JyxcbiAgYm90dG9tOiAndG9wJyxcbiAgdG9wOiAnYm90dG9tJ1xufTtcbmZ1bmN0aW9uIGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL2xlZnR8cmlnaHR8Ym90dG9tfHRvcC9nLCBzaWRlID0+IG9wcG9zaXRlU2lkZU1hcFtzaWRlXSk7XG59XG5cbmZ1bmN0aW9uIGdldEFsaWdubWVudFNpZGVzKHBsYWNlbWVudCwgcmVjdHMsIHJ0bCkge1xuICBpZiAocnRsID09PSB2b2lkIDApIHtcbiAgICBydGwgPSBmYWxzZTtcbiAgfVxuICBjb25zdCBhbGlnbm1lbnQgPSBnZXRBbGlnbm1lbnQocGxhY2VtZW50KTtcbiAgY29uc3QgbWFpbkF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgY29uc3QgbGVuZ3RoID0gZ2V0TGVuZ3RoRnJvbUF4aXMobWFpbkF4aXMpO1xuICBsZXQgbWFpbkFsaWdubWVudFNpZGUgPSBtYWluQXhpcyA9PT0gJ3gnID8gYWxpZ25tZW50ID09PSAocnRsID8gJ2VuZCcgOiAnc3RhcnQnKSA/ICdyaWdodCcgOiAnbGVmdCcgOiBhbGlnbm1lbnQgPT09ICdzdGFydCcgPyAnYm90dG9tJyA6ICd0b3AnO1xuICBpZiAocmVjdHMucmVmZXJlbmNlW2xlbmd0aF0gPiByZWN0cy5mbG9hdGluZ1tsZW5ndGhdKSB7XG4gICAgbWFpbkFsaWdubWVudFNpZGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChtYWluQWxpZ25tZW50U2lkZSk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtYWluOiBtYWluQWxpZ25tZW50U2lkZSxcbiAgICBjcm9zczogZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpbkFsaWdubWVudFNpZGUpXG4gIH07XG59XG5cbmNvbnN0IG9wcG9zaXRlQWxpZ25tZW50TWFwID0ge1xuICBzdGFydDogJ2VuZCcsXG4gIGVuZDogJ3N0YXJ0J1xufTtcbmZ1bmN0aW9uIGdldE9wcG9zaXRlQWxpZ25tZW50UGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL3N0YXJ0fGVuZC9nLCBhbGlnbm1lbnQgPT4gb3Bwb3NpdGVBbGlnbm1lbnRNYXBbYWxpZ25tZW50XSk7XG59XG5cbmZ1bmN0aW9uIGdldFBsYWNlbWVudExpc3QoYWxpZ25tZW50LCBhdXRvQWxpZ25tZW50LCBhbGxvd2VkUGxhY2VtZW50cykge1xuICBjb25zdCBhbGxvd2VkUGxhY2VtZW50c1NvcnRlZEJ5QWxpZ25tZW50ID0gYWxpZ25tZW50ID8gWy4uLmFsbG93ZWRQbGFjZW1lbnRzLmZpbHRlcihwbGFjZW1lbnQgPT4gZ2V0QWxpZ25tZW50KHBsYWNlbWVudCkgPT09IGFsaWdubWVudCksIC4uLmFsbG93ZWRQbGFjZW1lbnRzLmZpbHRlcihwbGFjZW1lbnQgPT4gZ2V0QWxpZ25tZW50KHBsYWNlbWVudCkgIT09IGFsaWdubWVudCldIDogYWxsb3dlZFBsYWNlbWVudHMuZmlsdGVyKHBsYWNlbWVudCA9PiBnZXRTaWRlKHBsYWNlbWVudCkgPT09IHBsYWNlbWVudCk7XG4gIHJldHVybiBhbGxvd2VkUGxhY2VtZW50c1NvcnRlZEJ5QWxpZ25tZW50LmZpbHRlcihwbGFjZW1lbnQgPT4ge1xuICAgIGlmIChhbGlnbm1lbnQpIHtcbiAgICAgIHJldHVybiBnZXRBbGlnbm1lbnQocGxhY2VtZW50KSA9PT0gYWxpZ25tZW50IHx8IChhdXRvQWxpZ25tZW50ID8gZ2V0T3Bwb3NpdGVBbGlnbm1lbnRQbGFjZW1lbnQocGxhY2VtZW50KSAhPT0gcGxhY2VtZW50IDogZmFsc2UpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG59XG4vKipcbiAqIE9wdGltaXplcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgZmxvYXRpbmcgZWxlbWVudCBieSBjaG9vc2luZyB0aGUgcGxhY2VtZW50XG4gKiB0aGF0IGhhcyB0aGUgbW9zdCBzcGFjZSBhdmFpbGFibGUgYXV0b21hdGljYWxseSwgd2l0aG91dCBuZWVkaW5nIHRvIHNwZWNpZnkgYVxuICogcHJlZmVycmVkIHBsYWNlbWVudC4gQWx0ZXJuYXRpdmUgdG8gYGZsaXBgLlxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2F1dG9QbGFjZW1lbnRcbiAqL1xuY29uc3QgYXV0b1BsYWNlbWVudCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnYXV0b1BsYWNlbWVudCcsXG4gICAgb3B0aW9ucyxcbiAgICBhc3luYyBmbihzdGF0ZSkge1xuICAgICAgdmFyIF9taWRkbGV3YXJlRGF0YSRhdXRvUCwgX21pZGRsZXdhcmVEYXRhJGF1dG9QMiwgX3BsYWNlbWVudHNUaGF0Rml0T25FO1xuICAgICAgY29uc3Qge1xuICAgICAgICByZWN0cyxcbiAgICAgICAgbWlkZGxld2FyZURhdGEsXG4gICAgICAgIHBsYWNlbWVudCxcbiAgICAgICAgcGxhdGZvcm0sXG4gICAgICAgIGVsZW1lbnRzXG4gICAgICB9ID0gc3RhdGU7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGNyb3NzQXhpcyA9IGZhbHNlLFxuICAgICAgICBhbGlnbm1lbnQsXG4gICAgICAgIGFsbG93ZWRQbGFjZW1lbnRzID0gYWxsUGxhY2VtZW50cyxcbiAgICAgICAgYXV0b0FsaWdubWVudCA9IHRydWUsXG4gICAgICAgIC4uLmRldGVjdE92ZXJmbG93T3B0aW9uc1xuICAgICAgfSA9IGV2YWx1YXRlKG9wdGlvbnMsIHN0YXRlKTtcbiAgICAgIGNvbnN0IHBsYWNlbWVudHMgPSBhbGlnbm1lbnQgIT09IHVuZGVmaW5lZCB8fCBhbGxvd2VkUGxhY2VtZW50cyA9PT0gYWxsUGxhY2VtZW50cyA/IGdldFBsYWNlbWVudExpc3QoYWxpZ25tZW50IHx8IG51bGwsIGF1dG9BbGlnbm1lbnQsIGFsbG93ZWRQbGFjZW1lbnRzKSA6IGFsbG93ZWRQbGFjZW1lbnRzO1xuICAgICAgY29uc3Qgb3ZlcmZsb3cgPSBhd2FpdCBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwgZGV0ZWN0T3ZlcmZsb3dPcHRpb25zKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9ICgoX21pZGRsZXdhcmVEYXRhJGF1dG9QID0gbWlkZGxld2FyZURhdGEuYXV0b1BsYWNlbWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9taWRkbGV3YXJlRGF0YSRhdXRvUC5pbmRleCkgfHwgMDtcbiAgICAgIGNvbnN0IGN1cnJlbnRQbGFjZW1lbnQgPSBwbGFjZW1lbnRzW2N1cnJlbnRJbmRleF07XG4gICAgICBpZiAoY3VycmVudFBsYWNlbWVudCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbWFpbixcbiAgICAgICAgY3Jvc3NcbiAgICAgIH0gPSBnZXRBbGlnbm1lbnRTaWRlcyhjdXJyZW50UGxhY2VtZW50LCByZWN0cywgYXdhaXQgKHBsYXRmb3JtLmlzUlRMID09IG51bGwgPyB2b2lkIDAgOiBwbGF0Zm9ybS5pc1JUTChlbGVtZW50cy5mbG9hdGluZykpKTtcblxuICAgICAgLy8gTWFrZSBgY29tcHV0ZUNvb3Jkc2Agc3RhcnQgZnJvbSB0aGUgcmlnaHQgcGxhY2UuXG4gICAgICBpZiAocGxhY2VtZW50ICE9PSBjdXJyZW50UGxhY2VtZW50KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcmVzZXQ6IHtcbiAgICAgICAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50c1swXVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGN1cnJlbnRPdmVyZmxvd3MgPSBbb3ZlcmZsb3dbZ2V0U2lkZShjdXJyZW50UGxhY2VtZW50KV0sIG92ZXJmbG93W21haW5dLCBvdmVyZmxvd1tjcm9zc11dO1xuICAgICAgY29uc3QgYWxsT3ZlcmZsb3dzID0gWy4uLigoKF9taWRkbGV3YXJlRGF0YSRhdXRvUDIgPSBtaWRkbGV3YXJlRGF0YS5hdXRvUGxhY2VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX21pZGRsZXdhcmVEYXRhJGF1dG9QMi5vdmVyZmxvd3MpIHx8IFtdKSwge1xuICAgICAgICBwbGFjZW1lbnQ6IGN1cnJlbnRQbGFjZW1lbnQsXG4gICAgICAgIG92ZXJmbG93czogY3VycmVudE92ZXJmbG93c1xuICAgICAgfV07XG4gICAgICBjb25zdCBuZXh0UGxhY2VtZW50ID0gcGxhY2VtZW50c1tjdXJyZW50SW5kZXggKyAxXTtcblxuICAgICAgLy8gVGhlcmUgYXJlIG1vcmUgcGxhY2VtZW50cyB0byBjaGVjay5cbiAgICAgIGlmIChuZXh0UGxhY2VtZW50KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgaW5kZXg6IGN1cnJlbnRJbmRleCArIDEsXG4gICAgICAgICAgICBvdmVyZmxvd3M6IGFsbE92ZXJmbG93c1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVzZXQ6IHtcbiAgICAgICAgICAgIHBsYWNlbWVudDogbmV4dFBsYWNlbWVudFxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBsYWNlbWVudHNTb3J0ZWRCeU1vc3RTcGFjZSA9IGFsbE92ZXJmbG93cy5tYXAoZCA9PiB7XG4gICAgICAgIGNvbnN0IGFsaWdubWVudCA9IGdldEFsaWdubWVudChkLnBsYWNlbWVudCk7XG4gICAgICAgIHJldHVybiBbZC5wbGFjZW1lbnQsIGFsaWdubWVudCAmJiBjcm9zc0F4aXMgP1xuICAgICAgICAvLyBDaGVjayBhbG9uZyB0aGUgbWFpbkF4aXMgYW5kIG1haW4gY3Jvc3NBeGlzIHNpZGUuXG4gICAgICAgIGQub3ZlcmZsb3dzLnNsaWNlKDAsIDIpLnJlZHVjZSgoYWNjLCB2KSA9PiBhY2MgKyB2LCAwKSA6XG4gICAgICAgIC8vIENoZWNrIG9ubHkgdGhlIG1haW5BeGlzLlxuICAgICAgICBkLm92ZXJmbG93c1swXSwgZC5vdmVyZmxvd3NdO1xuICAgICAgfSkuc29ydCgoYSwgYikgPT4gYVsxXSAtIGJbMV0pO1xuICAgICAgY29uc3QgcGxhY2VtZW50c1RoYXRGaXRPbkVhY2hTaWRlID0gcGxhY2VtZW50c1NvcnRlZEJ5TW9zdFNwYWNlLmZpbHRlcihkID0+IGRbMl0uc2xpY2UoMCxcbiAgICAgIC8vIEFsaWduZWQgcGxhY2VtZW50cyBzaG91bGQgbm90IGNoZWNrIHRoZWlyIG9wcG9zaXRlIGNyb3NzQXhpc1xuICAgICAgLy8gc2lkZS5cbiAgICAgIGdldEFsaWdubWVudChkWzBdKSA/IDIgOiAzKS5ldmVyeSh2ID0+IHYgPD0gMCkpO1xuICAgICAgY29uc3QgcmVzZXRQbGFjZW1lbnQgPSAoKF9wbGFjZW1lbnRzVGhhdEZpdE9uRSA9IHBsYWNlbWVudHNUaGF0Rml0T25FYWNoU2lkZVswXSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9wbGFjZW1lbnRzVGhhdEZpdE9uRVswXSkgfHwgcGxhY2VtZW50c1NvcnRlZEJ5TW9zdFNwYWNlWzBdWzBdO1xuICAgICAgaWYgKHJlc2V0UGxhY2VtZW50ICE9PSBwbGFjZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBpbmRleDogY3VycmVudEluZGV4ICsgMSxcbiAgICAgICAgICAgIG92ZXJmbG93czogYWxsT3ZlcmZsb3dzXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXNldDoge1xuICAgICAgICAgICAgcGxhY2VtZW50OiByZXNldFBsYWNlbWVudFxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gIH07XG59O1xuXG5mdW5jdGlvbiBnZXRFeHBhbmRlZFBsYWNlbWVudHMocGxhY2VtZW50KSB7XG4gIGNvbnN0IG9wcG9zaXRlUGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgcmV0dXJuIFtnZXRPcHBvc2l0ZUFsaWdubWVudFBsYWNlbWVudChwbGFjZW1lbnQpLCBvcHBvc2l0ZVBsYWNlbWVudCwgZ2V0T3Bwb3NpdGVBbGlnbm1lbnRQbGFjZW1lbnQob3Bwb3NpdGVQbGFjZW1lbnQpXTtcbn1cblxuZnVuY3Rpb24gZ2V0U2lkZUxpc3Qoc2lkZSwgaXNTdGFydCwgcnRsKSB7XG4gIGNvbnN0IGxyID0gWydsZWZ0JywgJ3JpZ2h0J107XG4gIGNvbnN0IHJsID0gWydyaWdodCcsICdsZWZ0J107XG4gIGNvbnN0IHRiID0gWyd0b3AnLCAnYm90dG9tJ107XG4gIGNvbnN0IGJ0ID0gWydib3R0b20nLCAndG9wJ107XG4gIHN3aXRjaCAoc2lkZSkge1xuICAgIGNhc2UgJ3RvcCc6XG4gICAgY2FzZSAnYm90dG9tJzpcbiAgICAgIGlmIChydGwpIHJldHVybiBpc1N0YXJ0ID8gcmwgOiBscjtcbiAgICAgIHJldHVybiBpc1N0YXJ0ID8gbHIgOiBybDtcbiAgICBjYXNlICdsZWZ0JzpcbiAgICBjYXNlICdyaWdodCc6XG4gICAgICByZXR1cm4gaXNTdGFydCA/IHRiIDogYnQ7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBbXTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0T3Bwb3NpdGVBeGlzUGxhY2VtZW50cyhwbGFjZW1lbnQsIGZsaXBBbGlnbm1lbnQsIGRpcmVjdGlvbiwgcnRsKSB7XG4gIGNvbnN0IGFsaWdubWVudCA9IGdldEFsaWdubWVudChwbGFjZW1lbnQpO1xuICBsZXQgbGlzdCA9IGdldFNpZGVMaXN0KGdldFNpZGUocGxhY2VtZW50KSwgZGlyZWN0aW9uID09PSAnc3RhcnQnLCBydGwpO1xuICBpZiAoYWxpZ25tZW50KSB7XG4gICAgbGlzdCA9IGxpc3QubWFwKHNpZGUgPT4gc2lkZSArIFwiLVwiICsgYWxpZ25tZW50KTtcbiAgICBpZiAoZmxpcEFsaWdubWVudCkge1xuICAgICAgbGlzdCA9IGxpc3QuY29uY2F0KGxpc3QubWFwKGdldE9wcG9zaXRlQWxpZ25tZW50UGxhY2VtZW50KSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBsaXN0O1xufVxuXG4vKipcbiAqIE9wdGltaXplcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgZmxvYXRpbmcgZWxlbWVudCBieSBmbGlwcGluZyB0aGUgYHBsYWNlbWVudGBcbiAqIGluIG9yZGVyIHRvIGtlZXAgaXQgaW4gdmlldyB3aGVuIHRoZSBwcmVmZXJyZWQgcGxhY2VtZW50KHMpIHdpbGwgb3ZlcmZsb3cgdGhlXG4gKiBjbGlwcGluZyBib3VuZGFyeS4gQWx0ZXJuYXRpdmUgdG8gYGF1dG9QbGFjZW1lbnRgLlxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2ZsaXBcbiAqL1xuY29uc3QgZmxpcCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnZmxpcCcsXG4gICAgb3B0aW9ucyxcbiAgICBhc3luYyBmbihzdGF0ZSkge1xuICAgICAgdmFyIF9taWRkbGV3YXJlRGF0YSRmbGlwO1xuICAgICAgY29uc3Qge1xuICAgICAgICBwbGFjZW1lbnQsXG4gICAgICAgIG1pZGRsZXdhcmVEYXRhLFxuICAgICAgICByZWN0cyxcbiAgICAgICAgaW5pdGlhbFBsYWNlbWVudCxcbiAgICAgICAgcGxhdGZvcm0sXG4gICAgICAgIGVsZW1lbnRzXG4gICAgICB9ID0gc3RhdGU7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG1haW5BeGlzOiBjaGVja01haW5BeGlzID0gdHJ1ZSxcbiAgICAgICAgY3Jvc3NBeGlzOiBjaGVja0Nyb3NzQXhpcyA9IHRydWUsXG4gICAgICAgIGZhbGxiYWNrUGxhY2VtZW50czogc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzLFxuICAgICAgICBmYWxsYmFja1N0cmF0ZWd5ID0gJ2Jlc3RGaXQnLFxuICAgICAgICBmYWxsYmFja0F4aXNTaWRlRGlyZWN0aW9uID0gJ25vbmUnLFxuICAgICAgICBmbGlwQWxpZ25tZW50ID0gdHJ1ZSxcbiAgICAgICAgLi4uZGV0ZWN0T3ZlcmZsb3dPcHRpb25zXG4gICAgICB9ID0gZXZhbHVhdGUob3B0aW9ucywgc3RhdGUpO1xuICAgICAgY29uc3Qgc2lkZSA9IGdldFNpZGUocGxhY2VtZW50KTtcbiAgICAgIGNvbnN0IGlzQmFzZVBsYWNlbWVudCA9IGdldFNpZGUoaW5pdGlhbFBsYWNlbWVudCkgPT09IGluaXRpYWxQbGFjZW1lbnQ7XG4gICAgICBjb25zdCBydGwgPSBhd2FpdCAocGxhdGZvcm0uaXNSVEwgPT0gbnVsbCA/IHZvaWQgMCA6IHBsYXRmb3JtLmlzUlRMKGVsZW1lbnRzLmZsb2F0aW5nKSk7XG4gICAgICBjb25zdCBmYWxsYmFja1BsYWNlbWVudHMgPSBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgfHwgKGlzQmFzZVBsYWNlbWVudCB8fCAhZmxpcEFsaWdubWVudCA/IFtnZXRPcHBvc2l0ZVBsYWNlbWVudChpbml0aWFsUGxhY2VtZW50KV0gOiBnZXRFeHBhbmRlZFBsYWNlbWVudHMoaW5pdGlhbFBsYWNlbWVudCkpO1xuICAgICAgaWYgKCFzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgJiYgZmFsbGJhY2tBeGlzU2lkZURpcmVjdGlvbiAhPT0gJ25vbmUnKSB7XG4gICAgICAgIGZhbGxiYWNrUGxhY2VtZW50cy5wdXNoKC4uLmdldE9wcG9zaXRlQXhpc1BsYWNlbWVudHMoaW5pdGlhbFBsYWNlbWVudCwgZmxpcEFsaWdubWVudCwgZmFsbGJhY2tBeGlzU2lkZURpcmVjdGlvbiwgcnRsKSk7XG4gICAgICB9XG4gICAgICBjb25zdCBwbGFjZW1lbnRzID0gW2luaXRpYWxQbGFjZW1lbnQsIC4uLmZhbGxiYWNrUGxhY2VtZW50c107XG4gICAgICBjb25zdCBvdmVyZmxvdyA9IGF3YWl0IGRldGVjdE92ZXJmbG93KHN0YXRlLCBkZXRlY3RPdmVyZmxvd09wdGlvbnMpO1xuICAgICAgY29uc3Qgb3ZlcmZsb3dzID0gW107XG4gICAgICBsZXQgb3ZlcmZsb3dzRGF0YSA9ICgoX21pZGRsZXdhcmVEYXRhJGZsaXAgPSBtaWRkbGV3YXJlRGF0YS5mbGlwKSA9PSBudWxsID8gdm9pZCAwIDogX21pZGRsZXdhcmVEYXRhJGZsaXAub3ZlcmZsb3dzKSB8fCBbXTtcbiAgICAgIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgICAgIG92ZXJmbG93cy5wdXNoKG92ZXJmbG93W3NpZGVdKTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGVja0Nyb3NzQXhpcykge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgbWFpbixcbiAgICAgICAgICBjcm9zc1xuICAgICAgICB9ID0gZ2V0QWxpZ25tZW50U2lkZXMocGxhY2VtZW50LCByZWN0cywgcnRsKTtcbiAgICAgICAgb3ZlcmZsb3dzLnB1c2gob3ZlcmZsb3dbbWFpbl0sIG92ZXJmbG93W2Nyb3NzXSk7XG4gICAgICB9XG4gICAgICBvdmVyZmxvd3NEYXRhID0gWy4uLm92ZXJmbG93c0RhdGEsIHtcbiAgICAgICAgcGxhY2VtZW50LFxuICAgICAgICBvdmVyZmxvd3NcbiAgICAgIH1dO1xuXG4gICAgICAvLyBPbmUgb3IgbW9yZSBzaWRlcyBpcyBvdmVyZmxvd2luZy5cbiAgICAgIGlmICghb3ZlcmZsb3dzLmV2ZXJ5KHNpZGUgPT4gc2lkZSA8PSAwKSkge1xuICAgICAgICB2YXIgX21pZGRsZXdhcmVEYXRhJGZsaXAyLCBfb3ZlcmZsb3dzRGF0YSRmaWx0ZXI7XG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9ICgoKF9taWRkbGV3YXJlRGF0YSRmbGlwMiA9IG1pZGRsZXdhcmVEYXRhLmZsaXApID09IG51bGwgPyB2b2lkIDAgOiBfbWlkZGxld2FyZURhdGEkZmxpcDIuaW5kZXgpIHx8IDApICsgMTtcbiAgICAgICAgY29uc3QgbmV4dFBsYWNlbWVudCA9IHBsYWNlbWVudHNbbmV4dEluZGV4XTtcbiAgICAgICAgaWYgKG5leHRQbGFjZW1lbnQpIHtcbiAgICAgICAgICAvLyBUcnkgbmV4dCBwbGFjZW1lbnQgYW5kIHJlLXJ1biB0aGUgbGlmZWN5Y2xlLlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIGluZGV4OiBuZXh0SW5kZXgsXG4gICAgICAgICAgICAgIG92ZXJmbG93czogb3ZlcmZsb3dzRGF0YVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc2V0OiB7XG4gICAgICAgICAgICAgIHBsYWNlbWVudDogbmV4dFBsYWNlbWVudFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaXJzdCwgZmluZCB0aGUgY2FuZGlkYXRlcyB0aGF0IGZpdCBvbiB0aGUgbWFpbkF4aXMgc2lkZSBvZiBvdmVyZmxvdyxcbiAgICAgICAgLy8gdGhlbiBmaW5kIHRoZSBwbGFjZW1lbnQgdGhhdCBmaXRzIHRoZSBiZXN0IG9uIHRoZSBtYWluIGNyb3NzQXhpcyBzaWRlLlxuICAgICAgICBsZXQgcmVzZXRQbGFjZW1lbnQgPSAoX292ZXJmbG93c0RhdGEkZmlsdGVyID0gb3ZlcmZsb3dzRGF0YS5maWx0ZXIoZCA9PiBkLm92ZXJmbG93c1swXSA8PSAwKS5zb3J0KChhLCBiKSA9PiBhLm92ZXJmbG93c1sxXSAtIGIub3ZlcmZsb3dzWzFdKVswXSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9vdmVyZmxvd3NEYXRhJGZpbHRlci5wbGFjZW1lbnQ7XG5cbiAgICAgICAgLy8gT3RoZXJ3aXNlIGZhbGxiYWNrLlxuICAgICAgICBpZiAoIXJlc2V0UGxhY2VtZW50KSB7XG4gICAgICAgICAgc3dpdGNoIChmYWxsYmFja1N0cmF0ZWd5KSB7XG4gICAgICAgICAgICBjYXNlICdiZXN0Rml0JzpcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBfb3ZlcmZsb3dzRGF0YSRtYXAkc287XG4gICAgICAgICAgICAgICAgY29uc3QgcGxhY2VtZW50ID0gKF9vdmVyZmxvd3NEYXRhJG1hcCRzbyA9IG92ZXJmbG93c0RhdGEubWFwKGQgPT4gW2QucGxhY2VtZW50LCBkLm92ZXJmbG93cy5maWx0ZXIob3ZlcmZsb3cgPT4gb3ZlcmZsb3cgPiAwKS5yZWR1Y2UoKGFjYywgb3ZlcmZsb3cpID0+IGFjYyArIG92ZXJmbG93LCAwKV0pLnNvcnQoKGEsIGIpID0+IGFbMV0gLSBiWzFdKVswXSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9vdmVyZmxvd3NEYXRhJG1hcCRzb1swXTtcbiAgICAgICAgICAgICAgICBpZiAocGxhY2VtZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXNldFBsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ2luaXRpYWxQbGFjZW1lbnQnOlxuICAgICAgICAgICAgICByZXNldFBsYWNlbWVudCA9IGluaXRpYWxQbGFjZW1lbnQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocGxhY2VtZW50ICE9PSByZXNldFBsYWNlbWVudCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXNldDoge1xuICAgICAgICAgICAgICBwbGFjZW1lbnQ6IHJlc2V0UGxhY2VtZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGdldFNpZGVPZmZzZXRzKG92ZXJmbG93LCByZWN0KSB7XG4gIHJldHVybiB7XG4gICAgdG9wOiBvdmVyZmxvdy50b3AgLSByZWN0LmhlaWdodCxcbiAgICByaWdodDogb3ZlcmZsb3cucmlnaHQgLSByZWN0LndpZHRoLFxuICAgIGJvdHRvbTogb3ZlcmZsb3cuYm90dG9tIC0gcmVjdC5oZWlnaHQsXG4gICAgbGVmdDogb3ZlcmZsb3cubGVmdCAtIHJlY3Qud2lkdGhcbiAgfTtcbn1cbmZ1bmN0aW9uIGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChvdmVyZmxvdykge1xuICByZXR1cm4gc2lkZXMuc29tZShzaWRlID0+IG92ZXJmbG93W3NpZGVdID49IDApO1xufVxuLyoqXG4gKiBQcm92aWRlcyBkYXRhIHRvIGhpZGUgdGhlIGZsb2F0aW5nIGVsZW1lbnQgaW4gYXBwbGljYWJsZSBzaXR1YXRpb25zLCBzdWNoIGFzXG4gKiB3aGVuIGl0IGlzIG5vdCBpbiB0aGUgc2FtZSBjbGlwcGluZyBjb250ZXh0IGFzIHRoZSByZWZlcmVuY2UgZWxlbWVudC5cbiAqIEBzZWUgaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9oaWRlXG4gKi9cbmNvbnN0IGhpZGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ2hpZGUnLFxuICAgIG9wdGlvbnMsXG4gICAgYXN5bmMgZm4oc3RhdGUpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgcmVjdHNcbiAgICAgIH0gPSBzdGF0ZTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgc3RyYXRlZ3kgPSAncmVmZXJlbmNlSGlkZGVuJyxcbiAgICAgICAgLi4uZGV0ZWN0T3ZlcmZsb3dPcHRpb25zXG4gICAgICB9ID0gZXZhbHVhdGUob3B0aW9ucywgc3RhdGUpO1xuICAgICAgc3dpdGNoIChzdHJhdGVneSkge1xuICAgICAgICBjYXNlICdyZWZlcmVuY2VIaWRkZW4nOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IG92ZXJmbG93ID0gYXdhaXQgZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgICAgICAgICAgLi4uZGV0ZWN0T3ZlcmZsb3dPcHRpb25zLFxuICAgICAgICAgICAgICBlbGVtZW50Q29udGV4dDogJ3JlZmVyZW5jZSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKG92ZXJmbG93LCByZWN0cy5yZWZlcmVuY2UpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHJlZmVyZW5jZUhpZGRlbk9mZnNldHM6IG9mZnNldHMsXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlSGlkZGVuOiBpc0FueVNpZGVGdWxseUNsaXBwZWQob2Zmc2V0cylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2VzY2FwZWQnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IG92ZXJmbG93ID0gYXdhaXQgZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgICAgICAgICAgLi4uZGV0ZWN0T3ZlcmZsb3dPcHRpb25zLFxuICAgICAgICAgICAgICBhbHRCb3VuZGFyeTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXRzID0gZ2V0U2lkZU9mZnNldHMob3ZlcmZsb3csIHJlY3RzLmZsb2F0aW5nKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBlc2NhcGVkT2Zmc2V0czogb2Zmc2V0cyxcbiAgICAgICAgICAgICAgICBlc2NhcGVkOiBpc0FueVNpZGVGdWxseUNsaXBwZWQob2Zmc2V0cylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG5mdW5jdGlvbiBnZXRCb3VuZGluZ1JlY3QocmVjdHMpIHtcbiAgY29uc3QgbWluWCA9IG1pbiguLi5yZWN0cy5tYXAocmVjdCA9PiByZWN0LmxlZnQpKTtcbiAgY29uc3QgbWluWSA9IG1pbiguLi5yZWN0cy5tYXAocmVjdCA9PiByZWN0LnRvcCkpO1xuICBjb25zdCBtYXhYID0gbWF4KC4uLnJlY3RzLm1hcChyZWN0ID0+IHJlY3QucmlnaHQpKTtcbiAgY29uc3QgbWF4WSA9IG1heCguLi5yZWN0cy5tYXAocmVjdCA9PiByZWN0LmJvdHRvbSkpO1xuICByZXR1cm4ge1xuICAgIHg6IG1pblgsXG4gICAgeTogbWluWSxcbiAgICB3aWR0aDogbWF4WCAtIG1pblgsXG4gICAgaGVpZ2h0OiBtYXhZIC0gbWluWVxuICB9O1xufVxuZnVuY3Rpb24gZ2V0UmVjdHNCeUxpbmUocmVjdHMpIHtcbiAgY29uc3Qgc29ydGVkUmVjdHMgPSByZWN0cy5zbGljZSgpLnNvcnQoKGEsIGIpID0+IGEueSAtIGIueSk7XG4gIGNvbnN0IGdyb3VwcyA9IFtdO1xuICBsZXQgcHJldlJlY3QgPSBudWxsO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNvcnRlZFJlY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcmVjdCA9IHNvcnRlZFJlY3RzW2ldO1xuICAgIGlmICghcHJldlJlY3QgfHwgcmVjdC55IC0gcHJldlJlY3QueSA+IHByZXZSZWN0LmhlaWdodCAvIDIpIHtcbiAgICAgIGdyb3Vwcy5wdXNoKFtyZWN0XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdyb3Vwc1tncm91cHMubGVuZ3RoIC0gMV0ucHVzaChyZWN0KTtcbiAgICB9XG4gICAgcHJldlJlY3QgPSByZWN0O1xuICB9XG4gIHJldHVybiBncm91cHMubWFwKHJlY3QgPT4gcmVjdFRvQ2xpZW50UmVjdChnZXRCb3VuZGluZ1JlY3QocmVjdCkpKTtcbn1cbi8qKlxuICogUHJvdmlkZXMgaW1wcm92ZWQgcG9zaXRpb25pbmcgZm9yIGlubGluZSByZWZlcmVuY2UgZWxlbWVudHMgdGhhdCBjYW4gc3BhblxuICogb3ZlciBtdWx0aXBsZSBsaW5lcywgc3VjaCBhcyBoeXBlcmxpbmtzIG9yIHJhbmdlIHNlbGVjdGlvbnMuXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3MvaW5saW5lXG4gKi9cbmNvbnN0IGlubGluZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnaW5saW5lJyxcbiAgICBvcHRpb25zLFxuICAgIGFzeW5jIGZuKHN0YXRlKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHBsYWNlbWVudCxcbiAgICAgICAgZWxlbWVudHMsXG4gICAgICAgIHJlY3RzLFxuICAgICAgICBwbGF0Zm9ybSxcbiAgICAgICAgc3RyYXRlZ3lcbiAgICAgIH0gPSBzdGF0ZTtcbiAgICAgIC8vIEEgTW91c2VFdmVudCdzIGNsaWVudHtYLFl9IGNvb3JkcyBjYW4gYmUgdXAgdG8gMiBwaXhlbHMgb2ZmIGFcbiAgICAgIC8vIENsaWVudFJlY3QncyBib3VuZHMsIGRlc3BpdGUgdGhlIGV2ZW50IGxpc3RlbmVyIGJlaW5nIHRyaWdnZXJlZC4gQVxuICAgICAgLy8gcGFkZGluZyBvZiAyIHNlZW1zIHRvIGhhbmRsZSB0aGlzIGlzc3VlLlxuICAgICAgY29uc3Qge1xuICAgICAgICBwYWRkaW5nID0gMixcbiAgICAgICAgeCxcbiAgICAgICAgeVxuICAgICAgfSA9IGV2YWx1YXRlKG9wdGlvbnMsIHN0YXRlKTtcbiAgICAgIGNvbnN0IG5hdGl2ZUNsaWVudFJlY3RzID0gQXJyYXkuZnJvbSgoYXdhaXQgKHBsYXRmb3JtLmdldENsaWVudFJlY3RzID09IG51bGwgPyB2b2lkIDAgOiBwbGF0Zm9ybS5nZXRDbGllbnRSZWN0cyhlbGVtZW50cy5yZWZlcmVuY2UpKSkgfHwgW10pO1xuICAgICAgY29uc3QgY2xpZW50UmVjdHMgPSBnZXRSZWN0c0J5TGluZShuYXRpdmVDbGllbnRSZWN0cyk7XG4gICAgICBjb25zdCBmYWxsYmFjayA9IHJlY3RUb0NsaWVudFJlY3QoZ2V0Qm91bmRpbmdSZWN0KG5hdGl2ZUNsaWVudFJlY3RzKSk7XG4gICAgICBjb25zdCBwYWRkaW5nT2JqZWN0ID0gZ2V0U2lkZU9iamVjdEZyb21QYWRkaW5nKHBhZGRpbmcpO1xuICAgICAgZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkge1xuICAgICAgICAvLyBUaGVyZSBhcmUgdHdvIHJlY3RzIGFuZCB0aGV5IGFyZSBkaXNqb2luZWQuXG4gICAgICAgIGlmIChjbGllbnRSZWN0cy5sZW5ndGggPT09IDIgJiYgY2xpZW50UmVjdHNbMF0ubGVmdCA+IGNsaWVudFJlY3RzWzFdLnJpZ2h0ICYmIHggIT0gbnVsbCAmJiB5ICE9IG51bGwpIHtcbiAgICAgICAgICAvLyBGaW5kIHRoZSBmaXJzdCByZWN0IGluIHdoaWNoIHRoZSBwb2ludCBpcyBmdWxseSBpbnNpZGUuXG4gICAgICAgICAgcmV0dXJuIGNsaWVudFJlY3RzLmZpbmQocmVjdCA9PiB4ID4gcmVjdC5sZWZ0IC0gcGFkZGluZ09iamVjdC5sZWZ0ICYmIHggPCByZWN0LnJpZ2h0ICsgcGFkZGluZ09iamVjdC5yaWdodCAmJiB5ID4gcmVjdC50b3AgLSBwYWRkaW5nT2JqZWN0LnRvcCAmJiB5IDwgcmVjdC5ib3R0b20gKyBwYWRkaW5nT2JqZWN0LmJvdHRvbSkgfHwgZmFsbGJhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGVyZSBhcmUgMiBvciBtb3JlIGNvbm5lY3RlZCByZWN0cy5cbiAgICAgICAgaWYgKGNsaWVudFJlY3RzLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgaWYgKGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChwbGFjZW1lbnQpID09PSAneCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0UmVjdCA9IGNsaWVudFJlY3RzWzBdO1xuICAgICAgICAgICAgY29uc3QgbGFzdFJlY3QgPSBjbGllbnRSZWN0c1tjbGllbnRSZWN0cy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGNvbnN0IGlzVG9wID0gZ2V0U2lkZShwbGFjZW1lbnQpID09PSAndG9wJztcbiAgICAgICAgICAgIGNvbnN0IHRvcCA9IGZpcnN0UmVjdC50b3A7XG4gICAgICAgICAgICBjb25zdCBib3R0b20gPSBsYXN0UmVjdC5ib3R0b207XG4gICAgICAgICAgICBjb25zdCBsZWZ0ID0gaXNUb3AgPyBmaXJzdFJlY3QubGVmdCA6IGxhc3RSZWN0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCByaWdodCA9IGlzVG9wID8gZmlyc3RSZWN0LnJpZ2h0IDogbGFzdFJlY3QucmlnaHQ7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IHJpZ2h0IC0gbGVmdDtcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGJvdHRvbSAtIHRvcDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHRvcCxcbiAgICAgICAgICAgICAgYm90dG9tLFxuICAgICAgICAgICAgICBsZWZ0LFxuICAgICAgICAgICAgICByaWdodCxcbiAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgICAgeDogbGVmdCxcbiAgICAgICAgICAgICAgeTogdG9wXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBpc0xlZnRTaWRlID0gZ2V0U2lkZShwbGFjZW1lbnQpID09PSAnbGVmdCc7XG4gICAgICAgICAgY29uc3QgbWF4UmlnaHQgPSBtYXgoLi4uY2xpZW50UmVjdHMubWFwKHJlY3QgPT4gcmVjdC5yaWdodCkpO1xuICAgICAgICAgIGNvbnN0IG1pbkxlZnQgPSBtaW4oLi4uY2xpZW50UmVjdHMubWFwKHJlY3QgPT4gcmVjdC5sZWZ0KSk7XG4gICAgICAgICAgY29uc3QgbWVhc3VyZVJlY3RzID0gY2xpZW50UmVjdHMuZmlsdGVyKHJlY3QgPT4gaXNMZWZ0U2lkZSA/IHJlY3QubGVmdCA9PT0gbWluTGVmdCA6IHJlY3QucmlnaHQgPT09IG1heFJpZ2h0KTtcbiAgICAgICAgICBjb25zdCB0b3AgPSBtZWFzdXJlUmVjdHNbMF0udG9wO1xuICAgICAgICAgIGNvbnN0IGJvdHRvbSA9IG1lYXN1cmVSZWN0c1ttZWFzdXJlUmVjdHMubGVuZ3RoIC0gMV0uYm90dG9tO1xuICAgICAgICAgIGNvbnN0IGxlZnQgPSBtaW5MZWZ0O1xuICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gbWF4UmlnaHQ7XG4gICAgICAgICAgY29uc3Qgd2lkdGggPSByaWdodCAtIGxlZnQ7XG4gICAgICAgICAgY29uc3QgaGVpZ2h0ID0gYm90dG9tIC0gdG9wO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3AsXG4gICAgICAgICAgICBib3R0b20sXG4gICAgICAgICAgICBsZWZ0LFxuICAgICAgICAgICAgcmlnaHQsXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIHg6IGxlZnQsXG4gICAgICAgICAgICB5OiB0b3BcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxsYmFjaztcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc2V0UmVjdHMgPSBhd2FpdCBwbGF0Zm9ybS5nZXRFbGVtZW50UmVjdHMoe1xuICAgICAgICByZWZlcmVuY2U6IHtcbiAgICAgICAgICBnZXRCb3VuZGluZ0NsaWVudFJlY3RcbiAgICAgICAgfSxcbiAgICAgICAgZmxvYXRpbmc6IGVsZW1lbnRzLmZsb2F0aW5nLFxuICAgICAgICBzdHJhdGVneVxuICAgICAgfSk7XG4gICAgICBpZiAocmVjdHMucmVmZXJlbmNlLnggIT09IHJlc2V0UmVjdHMucmVmZXJlbmNlLnggfHwgcmVjdHMucmVmZXJlbmNlLnkgIT09IHJlc2V0UmVjdHMucmVmZXJlbmNlLnkgfHwgcmVjdHMucmVmZXJlbmNlLndpZHRoICE9PSByZXNldFJlY3RzLnJlZmVyZW5jZS53aWR0aCB8fCByZWN0cy5yZWZlcmVuY2UuaGVpZ2h0ICE9PSByZXNldFJlY3RzLnJlZmVyZW5jZS5oZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICByZXNldDoge1xuICAgICAgICAgICAgcmVjdHM6IHJlc2V0UmVjdHNcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICB9O1xufTtcblxuYXN5bmMgZnVuY3Rpb24gY29udmVydFZhbHVlVG9Db29yZHMoc3RhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3Qge1xuICAgIHBsYWNlbWVudCxcbiAgICBwbGF0Zm9ybSxcbiAgICBlbGVtZW50c1xuICB9ID0gc3RhdGU7XG4gIGNvbnN0IHJ0bCA9IGF3YWl0IChwbGF0Zm9ybS5pc1JUTCA9PSBudWxsID8gdm9pZCAwIDogcGxhdGZvcm0uaXNSVEwoZWxlbWVudHMuZmxvYXRpbmcpKTtcbiAgY29uc3Qgc2lkZSA9IGdldFNpZGUocGxhY2VtZW50KTtcbiAgY29uc3QgYWxpZ25tZW50ID0gZ2V0QWxpZ25tZW50KHBsYWNlbWVudCk7XG4gIGNvbnN0IGlzVmVydGljYWwgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQocGxhY2VtZW50KSA9PT0gJ3gnO1xuICBjb25zdCBtYWluQXhpc011bHRpID0gWydsZWZ0JywgJ3RvcCddLmluY2x1ZGVzKHNpZGUpID8gLTEgOiAxO1xuICBjb25zdCBjcm9zc0F4aXNNdWx0aSA9IHJ0bCAmJiBpc1ZlcnRpY2FsID8gLTEgOiAxO1xuICBjb25zdCByYXdWYWx1ZSA9IGV2YWx1YXRlKG9wdGlvbnMsIHN0YXRlKTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XG4gIGxldCB7XG4gICAgbWFpbkF4aXMsXG4gICAgY3Jvc3NBeGlzLFxuICAgIGFsaWdubWVudEF4aXNcbiAgfSA9IHR5cGVvZiByYXdWYWx1ZSA9PT0gJ251bWJlcicgPyB7XG4gICAgbWFpbkF4aXM6IHJhd1ZhbHVlLFxuICAgIGNyb3NzQXhpczogMCxcbiAgICBhbGlnbm1lbnRBeGlzOiBudWxsXG4gIH0gOiB7XG4gICAgbWFpbkF4aXM6IDAsXG4gICAgY3Jvc3NBeGlzOiAwLFxuICAgIGFsaWdubWVudEF4aXM6IG51bGwsXG4gICAgLi4ucmF3VmFsdWVcbiAgfTtcbiAgaWYgKGFsaWdubWVudCAmJiB0eXBlb2YgYWxpZ25tZW50QXhpcyA9PT0gJ251bWJlcicpIHtcbiAgICBjcm9zc0F4aXMgPSBhbGlnbm1lbnQgPT09ICdlbmQnID8gYWxpZ25tZW50QXhpcyAqIC0xIDogYWxpZ25tZW50QXhpcztcbiAgfVxuICByZXR1cm4gaXNWZXJ0aWNhbCA/IHtcbiAgICB4OiBjcm9zc0F4aXMgKiBjcm9zc0F4aXNNdWx0aSxcbiAgICB5OiBtYWluQXhpcyAqIG1haW5BeGlzTXVsdGlcbiAgfSA6IHtcbiAgICB4OiBtYWluQXhpcyAqIG1haW5BeGlzTXVsdGksXG4gICAgeTogY3Jvc3NBeGlzICogY3Jvc3NBeGlzTXVsdGlcbiAgfTtcbn1cblxuLyoqXG4gKiBNb2RpZmllcyB0aGUgcGxhY2VtZW50IGJ5IHRyYW5zbGF0aW5nIHRoZSBmbG9hdGluZyBlbGVtZW50IGFsb25nIHRoZVxuICogc3BlY2lmaWVkIGF4ZXMuXG4gKiBBIG51bWJlciAoc2hvcnRoYW5kIGZvciBgbWFpbkF4aXNgIG9yIGRpc3RhbmNlKSwgb3IgYW4gYXhlcyBjb25maWd1cmF0aW9uXG4gKiBvYmplY3QgbWF5IGJlIHBhc3NlZC5cbiAqIEBzZWUgaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9vZmZzZXRcbiAqL1xuY29uc3Qgb2Zmc2V0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSAwO1xuICB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ29mZnNldCcsXG4gICAgb3B0aW9ucyxcbiAgICBhc3luYyBmbihzdGF0ZSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICB4LFxuICAgICAgICB5XG4gICAgICB9ID0gc3RhdGU7XG4gICAgICBjb25zdCBkaWZmQ29vcmRzID0gYXdhaXQgY29udmVydFZhbHVlVG9Db29yZHMoc3RhdGUsIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeDogeCArIGRpZmZDb29yZHMueCxcbiAgICAgICAgeTogeSArIGRpZmZDb29yZHMueSxcbiAgICAgICAgZGF0YTogZGlmZkNvb3Jkc1xuICAgICAgfTtcbiAgICB9XG4gIH07XG59O1xuXG5mdW5jdGlvbiBnZXRDcm9zc0F4aXMoYXhpcykge1xuICByZXR1cm4gYXhpcyA9PT0gJ3gnID8gJ3knIDogJ3gnO1xufVxuXG4vKipcbiAqIE9wdGltaXplcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgZmxvYXRpbmcgZWxlbWVudCBieSBzaGlmdGluZyBpdCBpbiBvcmRlciB0b1xuICoga2VlcCBpdCBpbiB2aWV3IHdoZW4gaXQgd2lsbCBvdmVyZmxvdyB0aGUgY2xpcHBpbmcgYm91bmRhcnkuXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3Mvc2hpZnRcbiAqL1xuY29uc3Qgc2hpZnQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ3NoaWZ0JyxcbiAgICBvcHRpb25zLFxuICAgIGFzeW5jIGZuKHN0YXRlKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICAgIHBsYWNlbWVudFxuICAgICAgfSA9IHN0YXRlO1xuICAgICAgY29uc3Qge1xuICAgICAgICBtYWluQXhpczogY2hlY2tNYWluQXhpcyA9IHRydWUsXG4gICAgICAgIGNyb3NzQXhpczogY2hlY2tDcm9zc0F4aXMgPSBmYWxzZSxcbiAgICAgICAgbGltaXRlciA9IHtcbiAgICAgICAgICBmbjogX3JlZiA9PiB7XG4gICAgICAgICAgICBsZXQge1xuICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICB5XG4gICAgICAgICAgICB9ID0gX3JlZjtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgIHlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAuLi5kZXRlY3RPdmVyZmxvd09wdGlvbnNcbiAgICAgIH0gPSBldmFsdWF0ZShvcHRpb25zLCBzdGF0ZSk7XG4gICAgICBjb25zdCBjb29yZHMgPSB7XG4gICAgICAgIHgsXG4gICAgICAgIHlcbiAgICAgIH07XG4gICAgICBjb25zdCBvdmVyZmxvdyA9IGF3YWl0IGRldGVjdE92ZXJmbG93KHN0YXRlLCBkZXRlY3RPdmVyZmxvd09wdGlvbnMpO1xuICAgICAgY29uc3QgbWFpbkF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoZ2V0U2lkZShwbGFjZW1lbnQpKTtcbiAgICAgIGNvbnN0IGNyb3NzQXhpcyA9IGdldENyb3NzQXhpcyhtYWluQXhpcyk7XG4gICAgICBsZXQgbWFpbkF4aXNDb29yZCA9IGNvb3Jkc1ttYWluQXhpc107XG4gICAgICBsZXQgY3Jvc3NBeGlzQ29vcmQgPSBjb29yZHNbY3Jvc3NBeGlzXTtcbiAgICAgIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgICAgIGNvbnN0IG1pblNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gJ3RvcCcgOiAnbGVmdCc7XG4gICAgICAgIGNvbnN0IG1heFNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gJ2JvdHRvbScgOiAncmlnaHQnO1xuICAgICAgICBjb25zdCBtaW4gPSBtYWluQXhpc0Nvb3JkICsgb3ZlcmZsb3dbbWluU2lkZV07XG4gICAgICAgIGNvbnN0IG1heCA9IG1haW5BeGlzQ29vcmQgLSBvdmVyZmxvd1ttYXhTaWRlXTtcbiAgICAgICAgbWFpbkF4aXNDb29yZCA9IHdpdGhpbihtaW4sIG1haW5BeGlzQ29vcmQsIG1heCk7XG4gICAgICB9XG4gICAgICBpZiAoY2hlY2tDcm9zc0F4aXMpIHtcbiAgICAgICAgY29uc3QgbWluU2lkZSA9IGNyb3NzQXhpcyA9PT0gJ3knID8gJ3RvcCcgOiAnbGVmdCc7XG4gICAgICAgIGNvbnN0IG1heFNpZGUgPSBjcm9zc0F4aXMgPT09ICd5JyA/ICdib3R0b20nIDogJ3JpZ2h0JztcbiAgICAgICAgY29uc3QgbWluID0gY3Jvc3NBeGlzQ29vcmQgKyBvdmVyZmxvd1ttaW5TaWRlXTtcbiAgICAgICAgY29uc3QgbWF4ID0gY3Jvc3NBeGlzQ29vcmQgLSBvdmVyZmxvd1ttYXhTaWRlXTtcbiAgICAgICAgY3Jvc3NBeGlzQ29vcmQgPSB3aXRoaW4obWluLCBjcm9zc0F4aXNDb29yZCwgbWF4KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGxpbWl0ZWRDb29yZHMgPSBsaW1pdGVyLmZuKHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIFttYWluQXhpc106IG1haW5BeGlzQ29vcmQsXG4gICAgICAgIFtjcm9zc0F4aXNdOiBjcm9zc0F4aXNDb29yZFxuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5saW1pdGVkQ29vcmRzLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgeDogbGltaXRlZENvb3Jkcy54IC0geCxcbiAgICAgICAgICB5OiBsaW1pdGVkQ29vcmRzLnkgLSB5XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9O1xufTtcbi8qKlxuICogQnVpbHQtaW4gYGxpbWl0ZXJgIHRoYXQgd2lsbCBzdG9wIGBzaGlmdCgpYCBhdCBhIGNlcnRhaW4gcG9pbnQuXG4gKi9cbmNvbnN0IGxpbWl0U2hpZnQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIHJldHVybiB7XG4gICAgb3B0aW9ucyxcbiAgICBmbihzdGF0ZSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICB4LFxuICAgICAgICB5LFxuICAgICAgICBwbGFjZW1lbnQsXG4gICAgICAgIHJlY3RzLFxuICAgICAgICBtaWRkbGV3YXJlRGF0YVxuICAgICAgfSA9IHN0YXRlO1xuICAgICAgY29uc3Qge1xuICAgICAgICBvZmZzZXQgPSAwLFxuICAgICAgICBtYWluQXhpczogY2hlY2tNYWluQXhpcyA9IHRydWUsXG4gICAgICAgIGNyb3NzQXhpczogY2hlY2tDcm9zc0F4aXMgPSB0cnVlXG4gICAgICB9ID0gZXZhbHVhdGUob3B0aW9ucywgc3RhdGUpO1xuICAgICAgY29uc3QgY29vcmRzID0ge1xuICAgICAgICB4LFxuICAgICAgICB5XG4gICAgICB9O1xuICAgICAgY29uc3QgbWFpbkF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgICAgIGNvbnN0IGNyb3NzQXhpcyA9IGdldENyb3NzQXhpcyhtYWluQXhpcyk7XG4gICAgICBsZXQgbWFpbkF4aXNDb29yZCA9IGNvb3Jkc1ttYWluQXhpc107XG4gICAgICBsZXQgY3Jvc3NBeGlzQ29vcmQgPSBjb29yZHNbY3Jvc3NBeGlzXTtcbiAgICAgIGNvbnN0IHJhd09mZnNldCA9IGV2YWx1YXRlKG9mZnNldCwgc3RhdGUpO1xuICAgICAgY29uc3QgY29tcHV0ZWRPZmZzZXQgPSB0eXBlb2YgcmF3T2Zmc2V0ID09PSAnbnVtYmVyJyA/IHtcbiAgICAgICAgbWFpbkF4aXM6IHJhd09mZnNldCxcbiAgICAgICAgY3Jvc3NBeGlzOiAwXG4gICAgICB9IDoge1xuICAgICAgICBtYWluQXhpczogMCxcbiAgICAgICAgY3Jvc3NBeGlzOiAwLFxuICAgICAgICAuLi5yYXdPZmZzZXRcbiAgICAgIH07XG4gICAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgICBjb25zdCBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICAgICAgICBjb25zdCBsaW1pdE1pbiA9IHJlY3RzLnJlZmVyZW5jZVttYWluQXhpc10gLSByZWN0cy5mbG9hdGluZ1tsZW5dICsgY29tcHV0ZWRPZmZzZXQubWFpbkF4aXM7XG4gICAgICAgIGNvbnN0IGxpbWl0TWF4ID0gcmVjdHMucmVmZXJlbmNlW21haW5BeGlzXSArIHJlY3RzLnJlZmVyZW5jZVtsZW5dIC0gY29tcHV0ZWRPZmZzZXQubWFpbkF4aXM7XG4gICAgICAgIGlmIChtYWluQXhpc0Nvb3JkIDwgbGltaXRNaW4pIHtcbiAgICAgICAgICBtYWluQXhpc0Nvb3JkID0gbGltaXRNaW47XG4gICAgICAgIH0gZWxzZSBpZiAobWFpbkF4aXNDb29yZCA+IGxpbWl0TWF4KSB7XG4gICAgICAgICAgbWFpbkF4aXNDb29yZCA9IGxpbWl0TWF4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY2hlY2tDcm9zc0F4aXMpIHtcbiAgICAgICAgdmFyIF9taWRkbGV3YXJlRGF0YSRvZmZzZSwgX21pZGRsZXdhcmVEYXRhJG9mZnNlMjtcbiAgICAgICAgY29uc3QgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcbiAgICAgICAgY29uc3QgaXNPcmlnaW5TaWRlID0gWyd0b3AnLCAnbGVmdCddLmluY2x1ZGVzKGdldFNpZGUocGxhY2VtZW50KSk7XG4gICAgICAgIGNvbnN0IGxpbWl0TWluID0gcmVjdHMucmVmZXJlbmNlW2Nyb3NzQXhpc10gLSByZWN0cy5mbG9hdGluZ1tsZW5dICsgKGlzT3JpZ2luU2lkZSA/ICgoX21pZGRsZXdhcmVEYXRhJG9mZnNlID0gbWlkZGxld2FyZURhdGEub2Zmc2V0KSA9PSBudWxsID8gdm9pZCAwIDogX21pZGRsZXdhcmVEYXRhJG9mZnNlW2Nyb3NzQXhpc10pIHx8IDAgOiAwKSArIChpc09yaWdpblNpZGUgPyAwIDogY29tcHV0ZWRPZmZzZXQuY3Jvc3NBeGlzKTtcbiAgICAgICAgY29uc3QgbGltaXRNYXggPSByZWN0cy5yZWZlcmVuY2VbY3Jvc3NBeGlzXSArIHJlY3RzLnJlZmVyZW5jZVtsZW5dICsgKGlzT3JpZ2luU2lkZSA/IDAgOiAoKF9taWRkbGV3YXJlRGF0YSRvZmZzZTIgPSBtaWRkbGV3YXJlRGF0YS5vZmZzZXQpID09IG51bGwgPyB2b2lkIDAgOiBfbWlkZGxld2FyZURhdGEkb2Zmc2UyW2Nyb3NzQXhpc10pIHx8IDApIC0gKGlzT3JpZ2luU2lkZSA/IGNvbXB1dGVkT2Zmc2V0LmNyb3NzQXhpcyA6IDApO1xuICAgICAgICBpZiAoY3Jvc3NBeGlzQ29vcmQgPCBsaW1pdE1pbikge1xuICAgICAgICAgIGNyb3NzQXhpc0Nvb3JkID0gbGltaXRNaW47XG4gICAgICAgIH0gZWxzZSBpZiAoY3Jvc3NBeGlzQ29vcmQgPiBsaW1pdE1heCkge1xuICAgICAgICAgIGNyb3NzQXhpc0Nvb3JkID0gbGltaXRNYXg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIFttYWluQXhpc106IG1haW5BeGlzQ29vcmQsXG4gICAgICAgIFtjcm9zc0F4aXNdOiBjcm9zc0F4aXNDb29yZFxuICAgICAgfTtcbiAgICB9XG4gIH07XG59O1xuXG4vKipcbiAqIFByb3ZpZGVzIGRhdGEgdGhhdCBhbGxvd3MgeW91IHRvIGNoYW5nZSB0aGUgc2l6ZSBvZiB0aGUgZmxvYXRpbmcgZWxlbWVudCBcdTIwMTRcbiAqIGZvciBpbnN0YW5jZSwgcHJldmVudCBpdCBmcm9tIG92ZXJmbG93aW5nIHRoZSBjbGlwcGluZyBib3VuZGFyeSBvciBtYXRjaCB0aGVcbiAqIHdpZHRoIG9mIHRoZSByZWZlcmVuY2UgZWxlbWVudC5cbiAqIEBzZWUgaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9zaXplXG4gKi9cbmNvbnN0IHNpemUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ3NpemUnLFxuICAgIG9wdGlvbnMsXG4gICAgYXN5bmMgZm4oc3RhdGUpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgcGxhY2VtZW50LFxuICAgICAgICByZWN0cyxcbiAgICAgICAgcGxhdGZvcm0sXG4gICAgICAgIGVsZW1lbnRzXG4gICAgICB9ID0gc3RhdGU7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGFwcGx5ID0gKCkgPT4ge30sXG4gICAgICAgIC4uLmRldGVjdE92ZXJmbG93T3B0aW9uc1xuICAgICAgfSA9IGV2YWx1YXRlKG9wdGlvbnMsIHN0YXRlKTtcbiAgICAgIGNvbnN0IG92ZXJmbG93ID0gYXdhaXQgZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIGRldGVjdE92ZXJmbG93T3B0aW9ucyk7XG4gICAgICBjb25zdCBzaWRlID0gZ2V0U2lkZShwbGFjZW1lbnQpO1xuICAgICAgY29uc3QgYWxpZ25tZW50ID0gZ2V0QWxpZ25tZW50KHBsYWNlbWVudCk7XG4gICAgICBjb25zdCBheGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gICAgICBjb25zdCBpc1hBeGlzID0gYXhpcyA9PT0gJ3gnO1xuICAgICAgY29uc3Qge1xuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0XG4gICAgICB9ID0gcmVjdHMuZmxvYXRpbmc7XG4gICAgICBsZXQgaGVpZ2h0U2lkZTtcbiAgICAgIGxldCB3aWR0aFNpZGU7XG4gICAgICBpZiAoc2lkZSA9PT0gJ3RvcCcgfHwgc2lkZSA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgaGVpZ2h0U2lkZSA9IHNpZGU7XG4gICAgICAgIHdpZHRoU2lkZSA9IGFsaWdubWVudCA9PT0gKChhd2FpdCAocGxhdGZvcm0uaXNSVEwgPT0gbnVsbCA/IHZvaWQgMCA6IHBsYXRmb3JtLmlzUlRMKGVsZW1lbnRzLmZsb2F0aW5nKSkpID8gJ3N0YXJ0JyA6ICdlbmQnKSA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aWR0aFNpZGUgPSBzaWRlO1xuICAgICAgICBoZWlnaHRTaWRlID0gYWxpZ25tZW50ID09PSAnZW5kJyA/ICd0b3AnIDogJ2JvdHRvbSc7XG4gICAgICB9XG4gICAgICBjb25zdCBvdmVyZmxvd0F2YWlsYWJsZUhlaWdodCA9IGhlaWdodCAtIG92ZXJmbG93W2hlaWdodFNpZGVdO1xuICAgICAgY29uc3Qgb3ZlcmZsb3dBdmFpbGFibGVXaWR0aCA9IHdpZHRoIC0gb3ZlcmZsb3dbd2lkdGhTaWRlXTtcbiAgICAgIGNvbnN0IG5vU2hpZnQgPSAhc3RhdGUubWlkZGxld2FyZURhdGEuc2hpZnQ7XG4gICAgICBsZXQgYXZhaWxhYmxlSGVpZ2h0ID0gb3ZlcmZsb3dBdmFpbGFibGVIZWlnaHQ7XG4gICAgICBsZXQgYXZhaWxhYmxlV2lkdGggPSBvdmVyZmxvd0F2YWlsYWJsZVdpZHRoO1xuICAgICAgaWYgKGlzWEF4aXMpIHtcbiAgICAgICAgY29uc3QgbWF4aW11bUNsaXBwaW5nV2lkdGggPSB3aWR0aCAtIG92ZXJmbG93LmxlZnQgLSBvdmVyZmxvdy5yaWdodDtcbiAgICAgICAgYXZhaWxhYmxlV2lkdGggPSBhbGlnbm1lbnQgfHwgbm9TaGlmdCA/IG1pbihvdmVyZmxvd0F2YWlsYWJsZVdpZHRoLCBtYXhpbXVtQ2xpcHBpbmdXaWR0aCkgOiBtYXhpbXVtQ2xpcHBpbmdXaWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1heGltdW1DbGlwcGluZ0hlaWdodCA9IGhlaWdodCAtIG92ZXJmbG93LnRvcCAtIG92ZXJmbG93LmJvdHRvbTtcbiAgICAgICAgYXZhaWxhYmxlSGVpZ2h0ID0gYWxpZ25tZW50IHx8IG5vU2hpZnQgPyBtaW4ob3ZlcmZsb3dBdmFpbGFibGVIZWlnaHQsIG1heGltdW1DbGlwcGluZ0hlaWdodCkgOiBtYXhpbXVtQ2xpcHBpbmdIZWlnaHQ7XG4gICAgICB9XG4gICAgICBpZiAobm9TaGlmdCAmJiAhYWxpZ25tZW50KSB7XG4gICAgICAgIGNvbnN0IHhNaW4gPSBtYXgob3ZlcmZsb3cubGVmdCwgMCk7XG4gICAgICAgIGNvbnN0IHhNYXggPSBtYXgob3ZlcmZsb3cucmlnaHQsIDApO1xuICAgICAgICBjb25zdCB5TWluID0gbWF4KG92ZXJmbG93LnRvcCwgMCk7XG4gICAgICAgIGNvbnN0IHlNYXggPSBtYXgob3ZlcmZsb3cuYm90dG9tLCAwKTtcbiAgICAgICAgaWYgKGlzWEF4aXMpIHtcbiAgICAgICAgICBhdmFpbGFibGVXaWR0aCA9IHdpZHRoIC0gMiAqICh4TWluICE9PSAwIHx8IHhNYXggIT09IDAgPyB4TWluICsgeE1heCA6IG1heChvdmVyZmxvdy5sZWZ0LCBvdmVyZmxvdy5yaWdodCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGF2YWlsYWJsZUhlaWdodCA9IGhlaWdodCAtIDIgKiAoeU1pbiAhPT0gMCB8fCB5TWF4ICE9PSAwID8geU1pbiArIHlNYXggOiBtYXgob3ZlcmZsb3cudG9wLCBvdmVyZmxvdy5ib3R0b20pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXdhaXQgYXBwbHkoe1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYXZhaWxhYmxlV2lkdGgsXG4gICAgICAgIGF2YWlsYWJsZUhlaWdodFxuICAgICAgfSk7XG4gICAgICBjb25zdCBuZXh0RGltZW5zaW9ucyA9IGF3YWl0IHBsYXRmb3JtLmdldERpbWVuc2lvbnMoZWxlbWVudHMuZmxvYXRpbmcpO1xuICAgICAgaWYgKHdpZHRoICE9PSBuZXh0RGltZW5zaW9ucy53aWR0aCB8fCBoZWlnaHQgIT09IG5leHREaW1lbnNpb25zLmhlaWdodCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHJlc2V0OiB7XG4gICAgICAgICAgICByZWN0czogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgeyBhcnJvdywgYXV0b1BsYWNlbWVudCwgY29tcHV0ZVBvc2l0aW9uLCBkZXRlY3RPdmVyZmxvdywgZmxpcCwgaGlkZSwgaW5saW5lLCBsaW1pdFNoaWZ0LCBvZmZzZXQsIHJlY3RUb0NsaWVudFJlY3QsIHNoaWZ0LCBzaXplIH07XG4iLCAiaW1wb3J0IHsgcmVjdFRvQ2xpZW50UmVjdCwgY29tcHV0ZVBvc2l0aW9uIGFzIGNvbXB1dGVQb3NpdGlvbiQxIH0gZnJvbSAnQGZsb2F0aW5nLXVpL2NvcmUnO1xuZXhwb3J0IHsgYXJyb3csIGF1dG9QbGFjZW1lbnQsIGRldGVjdE92ZXJmbG93LCBmbGlwLCBoaWRlLCBpbmxpbmUsIGxpbWl0U2hpZnQsIG9mZnNldCwgc2hpZnQsIHNpemUgfSBmcm9tICdAZmxvYXRpbmctdWkvY29yZSc7XG5cbmZ1bmN0aW9uIGdldFdpbmRvdyhub2RlKSB7XG4gIHZhciBfbm9kZSRvd25lckRvY3VtZW50O1xuICByZXR1cm4gKChfbm9kZSRvd25lckRvY3VtZW50ID0gbm9kZS5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX25vZGUkb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldykgfHwgd2luZG93O1xufVxuXG5mdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlJDEoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0V2luZG93KGVsZW1lbnQpLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGlzTm9kZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBnZXRXaW5kb3codmFsdWUpLk5vZGU7XG59XG5mdW5jdGlvbiBnZXROb2RlTmFtZShub2RlKSB7XG4gIGlmIChpc05vZGUobm9kZSkpIHtcbiAgICByZXR1cm4gKG5vZGUubm9kZU5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG4gIH1cbiAgLy8gTW9ja2VkIG5vZGVzIGluIHRlc3RpbmcgZW52aXJvbm1lbnRzIG1heSBub3QgYmUgaW5zdGFuY2VzIG9mIE5vZGUuIEJ5XG4gIC8vIHJldHVybmluZyBgI2RvY3VtZW50YCBhbiBpbmZpbml0ZSBsb29wIHdvbid0IG9jY3VyLlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmxvYXRpbmctdWkvZmxvYXRpbmctdWkvaXNzdWVzLzIzMTdcbiAgcmV0dXJuICcjZG9jdW1lbnQnO1xufVxuXG5mdW5jdGlvbiBpc0hUTUxFbGVtZW50KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIGdldFdpbmRvdyh2YWx1ZSkuSFRNTEVsZW1lbnQ7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgZ2V0V2luZG93KHZhbHVlKS5FbGVtZW50O1xufVxuZnVuY3Rpb24gaXNTaGFkb3dSb290KG5vZGUpIHtcbiAgLy8gQnJvd3NlcnMgd2l0aG91dCBgU2hhZG93Um9vdGAgc3VwcG9ydC5cbiAgaWYgKHR5cGVvZiBTaGFkb3dSb290ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIGdldFdpbmRvdyhub2RlKS5TaGFkb3dSb290IHx8IG5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290O1xufVxuZnVuY3Rpb24gaXNPdmVyZmxvd0VsZW1lbnQoZWxlbWVudCkge1xuICBjb25zdCB7XG4gICAgb3ZlcmZsb3csXG4gICAgb3ZlcmZsb3dYLFxuICAgIG92ZXJmbG93WSxcbiAgICBkaXNwbGF5XG4gIH0gPSBnZXRDb21wdXRlZFN0eWxlJDEoZWxlbWVudCk7XG4gIHJldHVybiAvYXV0b3xzY3JvbGx8b3ZlcmxheXxoaWRkZW58Y2xpcC8udGVzdChvdmVyZmxvdyArIG92ZXJmbG93WSArIG92ZXJmbG93WCkgJiYgIVsnaW5saW5lJywgJ2NvbnRlbnRzJ10uaW5jbHVkZXMoZGlzcGxheSk7XG59XG5mdW5jdGlvbiBpc1RhYmxlRWxlbWVudChlbGVtZW50KSB7XG4gIHJldHVybiBbJ3RhYmxlJywgJ3RkJywgJ3RoJ10uaW5jbHVkZXMoZ2V0Tm9kZU5hbWUoZWxlbWVudCkpO1xufVxuZnVuY3Rpb24gaXNDb250YWluaW5nQmxvY2soZWxlbWVudCkge1xuICBjb25zdCBzYWZhcmkgPSBpc1NhZmFyaSgpO1xuICBjb25zdCBjc3MgPSBnZXRDb21wdXRlZFN0eWxlJDEoZWxlbWVudCk7XG5cbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0NvbnRhaW5pbmdfYmxvY2sjaWRlbnRpZnlpbmdfdGhlX2NvbnRhaW5pbmdfYmxvY2tcbiAgcmV0dXJuIGNzcy50cmFuc2Zvcm0gIT09ICdub25lJyB8fCBjc3MucGVyc3BlY3RpdmUgIT09ICdub25lJyB8fCAoY3NzLmNvbnRhaW5lclR5cGUgPyBjc3MuY29udGFpbmVyVHlwZSAhPT0gJ25vcm1hbCcgOiBmYWxzZSkgfHwgIXNhZmFyaSAmJiAoY3NzLmJhY2tkcm9wRmlsdGVyID8gY3NzLmJhY2tkcm9wRmlsdGVyICE9PSAnbm9uZScgOiBmYWxzZSkgfHwgIXNhZmFyaSAmJiAoY3NzLmZpbHRlciA/IGNzcy5maWx0ZXIgIT09ICdub25lJyA6IGZhbHNlKSB8fCBbJ3RyYW5zZm9ybScsICdwZXJzcGVjdGl2ZScsICdmaWx0ZXInXS5zb21lKHZhbHVlID0+IChjc3Mud2lsbENoYW5nZSB8fCAnJykuaW5jbHVkZXModmFsdWUpKSB8fCBbJ3BhaW50JywgJ2xheW91dCcsICdzdHJpY3QnLCAnY29udGVudCddLnNvbWUodmFsdWUgPT4gKGNzcy5jb250YWluIHx8ICcnKS5pbmNsdWRlcyh2YWx1ZSkpO1xufVxuZnVuY3Rpb24gaXNTYWZhcmkoKSB7XG4gIGlmICh0eXBlb2YgQ1NTID09PSAndW5kZWZpbmVkJyB8fCAhQ1NTLnN1cHBvcnRzKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBDU1Muc3VwcG9ydHMoJy13ZWJraXQtYmFja2Ryb3AtZmlsdGVyJywgJ25vbmUnKTtcbn1cbmZ1bmN0aW9uIGlzTGFzdFRyYXZlcnNhYmxlTm9kZShub2RlKSB7XG4gIHJldHVybiBbJ2h0bWwnLCAnYm9keScsICcjZG9jdW1lbnQnXS5pbmNsdWRlcyhnZXROb2RlTmFtZShub2RlKSk7XG59XG5cbmNvbnN0IG1pbiA9IE1hdGgubWluO1xuY29uc3QgbWF4ID0gTWF0aC5tYXg7XG5jb25zdCByb3VuZCA9IE1hdGgucm91bmQ7XG5jb25zdCBmbG9vciA9IE1hdGguZmxvb3I7XG5jb25zdCBjcmVhdGVFbXB0eUNvb3JkcyA9IHYgPT4gKHtcbiAgeDogdixcbiAgeTogdlxufSk7XG5cbmZ1bmN0aW9uIGdldENzc0RpbWVuc2lvbnMoZWxlbWVudCkge1xuICBjb25zdCBjc3MgPSBnZXRDb21wdXRlZFN0eWxlJDEoZWxlbWVudCk7XG4gIC8vIEluIHRlc3RpbmcgZW52aXJvbm1lbnRzLCB0aGUgYHdpZHRoYCBhbmQgYGhlaWdodGAgcHJvcGVydGllcyBhcmUgZW1wdHlcbiAgLy8gc3RyaW5ncyBmb3IgU1ZHIGVsZW1lbnRzLCByZXR1cm5pbmcgTmFOLiBGYWxsYmFjayB0byBgMGAgaW4gdGhpcyBjYXNlLlxuICBsZXQgd2lkdGggPSBwYXJzZUZsb2F0KGNzcy53aWR0aCkgfHwgMDtcbiAgbGV0IGhlaWdodCA9IHBhcnNlRmxvYXQoY3NzLmhlaWdodCkgfHwgMDtcbiAgY29uc3QgaGFzT2Zmc2V0ID0gaXNIVE1MRWxlbWVudChlbGVtZW50KTtcbiAgY29uc3Qgb2Zmc2V0V2lkdGggPSBoYXNPZmZzZXQgPyBlbGVtZW50Lm9mZnNldFdpZHRoIDogd2lkdGg7XG4gIGNvbnN0IG9mZnNldEhlaWdodCA9IGhhc09mZnNldCA/IGVsZW1lbnQub2Zmc2V0SGVpZ2h0IDogaGVpZ2h0O1xuICBjb25zdCBzaG91bGRGYWxsYmFjayA9IHJvdW5kKHdpZHRoKSAhPT0gb2Zmc2V0V2lkdGggfHwgcm91bmQoaGVpZ2h0KSAhPT0gb2Zmc2V0SGVpZ2h0O1xuICBpZiAoc2hvdWxkRmFsbGJhY2spIHtcbiAgICB3aWR0aCA9IG9mZnNldFdpZHRoO1xuICAgIGhlaWdodCA9IG9mZnNldEhlaWdodDtcbiAgfVxuICByZXR1cm4ge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICAkOiBzaG91bGRGYWxsYmFja1xuICB9O1xufVxuXG5mdW5jdGlvbiB1bndyYXBFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuICFpc0VsZW1lbnQoZWxlbWVudCkgPyBlbGVtZW50LmNvbnRleHRFbGVtZW50IDogZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZ2V0U2NhbGUoZWxlbWVudCkge1xuICBjb25zdCBkb21FbGVtZW50ID0gdW53cmFwRWxlbWVudChlbGVtZW50KTtcbiAgaWYgKCFpc0hUTUxFbGVtZW50KGRvbUVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVtcHR5Q29vcmRzKDEpO1xuICB9XG4gIGNvbnN0IHJlY3QgPSBkb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgICRcbiAgfSA9IGdldENzc0RpbWVuc2lvbnMoZG9tRWxlbWVudCk7XG4gIGxldCB4ID0gKCQgPyByb3VuZChyZWN0LndpZHRoKSA6IHJlY3Qud2lkdGgpIC8gd2lkdGg7XG4gIGxldCB5ID0gKCQgPyByb3VuZChyZWN0LmhlaWdodCkgOiByZWN0LmhlaWdodCkgLyBoZWlnaHQ7XG5cbiAgLy8gMCwgTmFOLCBvciBJbmZpbml0eSBzaG91bGQgYWx3YXlzIGZhbGxiYWNrIHRvIDEuXG5cbiAgaWYgKCF4IHx8ICFOdW1iZXIuaXNGaW5pdGUoeCkpIHtcbiAgICB4ID0gMTtcbiAgfVxuICBpZiAoIXkgfHwgIU51bWJlci5pc0Zpbml0ZSh5KSkge1xuICAgIHkgPSAxO1xuICB9XG4gIHJldHVybiB7XG4gICAgeCxcbiAgICB5XG4gIH07XG59XG5cbmNvbnN0IG5vT2Zmc2V0cyA9IC8qI19fUFVSRV9fKi9jcmVhdGVFbXB0eUNvb3JkcygwKTtcbmZ1bmN0aW9uIGdldFZpc3VhbE9mZnNldHMoZWxlbWVudCwgaXNGaXhlZCwgZmxvYXRpbmdPZmZzZXRQYXJlbnQpIHtcbiAgdmFyIF93aW4kdmlzdWFsVmlld3BvcnQsIF93aW4kdmlzdWFsVmlld3BvcnQyO1xuICBpZiAoaXNGaXhlZCA9PT0gdm9pZCAwKSB7XG4gICAgaXNGaXhlZCA9IHRydWU7XG4gIH1cbiAgaWYgKCFpc1NhZmFyaSgpKSB7XG4gICAgcmV0dXJuIG5vT2Zmc2V0cztcbiAgfVxuICBjb25zdCB3aW4gPSBlbGVtZW50ID8gZ2V0V2luZG93KGVsZW1lbnQpIDogd2luZG93O1xuICBpZiAoIWZsb2F0aW5nT2Zmc2V0UGFyZW50IHx8IGlzRml4ZWQgJiYgZmxvYXRpbmdPZmZzZXRQYXJlbnQgIT09IHdpbikge1xuICAgIHJldHVybiBub09mZnNldHM7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB4OiAoKF93aW4kdmlzdWFsVmlld3BvcnQgPSB3aW4udmlzdWFsVmlld3BvcnQpID09IG51bGwgPyB2b2lkIDAgOiBfd2luJHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQpIHx8IDAsXG4gICAgeTogKChfd2luJHZpc3VhbFZpZXdwb3J0MiA9IHdpbi52aXN1YWxWaWV3cG9ydCkgPT0gbnVsbCA/IHZvaWQgMCA6IF93aW4kdmlzdWFsVmlld3BvcnQyLm9mZnNldFRvcCkgfHwgMFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCwgaW5jbHVkZVNjYWxlLCBpc0ZpeGVkU3RyYXRlZ3ksIG9mZnNldFBhcmVudCkge1xuICBpZiAoaW5jbHVkZVNjYWxlID09PSB2b2lkIDApIHtcbiAgICBpbmNsdWRlU2NhbGUgPSBmYWxzZTtcbiAgfVxuICBpZiAoaXNGaXhlZFN0cmF0ZWd5ID09PSB2b2lkIDApIHtcbiAgICBpc0ZpeGVkU3RyYXRlZ3kgPSBmYWxzZTtcbiAgfVxuICBjb25zdCBjbGllbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3QgZG9tRWxlbWVudCA9IHVud3JhcEVsZW1lbnQoZWxlbWVudCk7XG4gIGxldCBzY2FsZSA9IGNyZWF0ZUVtcHR5Q29vcmRzKDEpO1xuICBpZiAoaW5jbHVkZVNjYWxlKSB7XG4gICAgaWYgKG9mZnNldFBhcmVudCkge1xuICAgICAgaWYgKGlzRWxlbWVudChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICAgIHNjYWxlID0gZ2V0U2NhbGUob2Zmc2V0UGFyZW50KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2NhbGUgPSBnZXRTY2FsZShlbGVtZW50KTtcbiAgICB9XG4gIH1cbiAgY29uc3QgdmlzdWFsT2Zmc2V0cyA9IGdldFZpc3VhbE9mZnNldHMoZG9tRWxlbWVudCwgaXNGaXhlZFN0cmF0ZWd5LCBvZmZzZXRQYXJlbnQpO1xuICBsZXQgeCA9IChjbGllbnRSZWN0LmxlZnQgKyB2aXN1YWxPZmZzZXRzLngpIC8gc2NhbGUueDtcbiAgbGV0IHkgPSAoY2xpZW50UmVjdC50b3AgKyB2aXN1YWxPZmZzZXRzLnkpIC8gc2NhbGUueTtcbiAgbGV0IHdpZHRoID0gY2xpZW50UmVjdC53aWR0aCAvIHNjYWxlLng7XG4gIGxldCBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodCAvIHNjYWxlLnk7XG4gIGlmIChkb21FbGVtZW50KSB7XG4gICAgY29uc3Qgd2luID0gZ2V0V2luZG93KGRvbUVsZW1lbnQpO1xuICAgIGNvbnN0IG9mZnNldFdpbiA9IG9mZnNldFBhcmVudCAmJiBpc0VsZW1lbnQob2Zmc2V0UGFyZW50KSA/IGdldFdpbmRvdyhvZmZzZXRQYXJlbnQpIDogb2Zmc2V0UGFyZW50O1xuICAgIGxldCBjdXJyZW50SUZyYW1lID0gd2luLmZyYW1lRWxlbWVudDtcbiAgICB3aGlsZSAoY3VycmVudElGcmFtZSAmJiBvZmZzZXRQYXJlbnQgJiYgb2Zmc2V0V2luICE9PSB3aW4pIHtcbiAgICAgIGNvbnN0IGlmcmFtZVNjYWxlID0gZ2V0U2NhbGUoY3VycmVudElGcmFtZSk7XG4gICAgICBjb25zdCBpZnJhbWVSZWN0ID0gY3VycmVudElGcmFtZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IGNzcyA9IGdldENvbXB1dGVkU3R5bGUoY3VycmVudElGcmFtZSk7XG4gICAgICBjb25zdCBsZWZ0ID0gaWZyYW1lUmVjdC5sZWZ0ICsgKGN1cnJlbnRJRnJhbWUuY2xpZW50TGVmdCArIHBhcnNlRmxvYXQoY3NzLnBhZGRpbmdMZWZ0KSkgKiBpZnJhbWVTY2FsZS54O1xuICAgICAgY29uc3QgdG9wID0gaWZyYW1lUmVjdC50b3AgKyAoY3VycmVudElGcmFtZS5jbGllbnRUb3AgKyBwYXJzZUZsb2F0KGNzcy5wYWRkaW5nVG9wKSkgKiBpZnJhbWVTY2FsZS55O1xuICAgICAgeCAqPSBpZnJhbWVTY2FsZS54O1xuICAgICAgeSAqPSBpZnJhbWVTY2FsZS55O1xuICAgICAgd2lkdGggKj0gaWZyYW1lU2NhbGUueDtcbiAgICAgIGhlaWdodCAqPSBpZnJhbWVTY2FsZS55O1xuICAgICAgeCArPSBsZWZ0O1xuICAgICAgeSArPSB0b3A7XG4gICAgICBjdXJyZW50SUZyYW1lID0gZ2V0V2luZG93KGN1cnJlbnRJRnJhbWUpLmZyYW1lRWxlbWVudDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlY3RUb0NsaWVudFJlY3Qoe1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICB4LFxuICAgIHlcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldERvY3VtZW50RWxlbWVudChub2RlKSB7XG4gIHJldHVybiAoKGlzTm9kZShub2RlKSA/IG5vZGUub3duZXJEb2N1bWVudCA6IG5vZGUuZG9jdW1lbnQpIHx8IHdpbmRvdy5kb2N1bWVudCkuZG9jdW1lbnRFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBnZXROb2RlU2Nyb2xsKGVsZW1lbnQpIHtcbiAgaWYgKGlzRWxlbWVudChlbGVtZW50KSkge1xuICAgIHJldHVybiB7XG4gICAgICBzY3JvbGxMZWZ0OiBlbGVtZW50LnNjcm9sbExlZnQsXG4gICAgICBzY3JvbGxUb3A6IGVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IGVsZW1lbnQucGFnZVhPZmZzZXQsXG4gICAgc2Nyb2xsVG9wOiBlbGVtZW50LnBhZ2VZT2Zmc2V0XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRPZmZzZXRQYXJlbnRSZWxhdGl2ZVJlY3RUb1ZpZXdwb3J0UmVsYXRpdmVSZWN0KF9yZWYpIHtcbiAgbGV0IHtcbiAgICByZWN0LFxuICAgIG9mZnNldFBhcmVudCxcbiAgICBzdHJhdGVneVxuICB9ID0gX3JlZjtcbiAgY29uc3QgaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIGNvbnN0IGRvY3VtZW50RWxlbWVudCA9IGdldERvY3VtZW50RWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICBpZiAob2Zmc2V0UGFyZW50ID09PSBkb2N1bWVudEVsZW1lbnQpIHtcbiAgICByZXR1cm4gcmVjdDtcbiAgfVxuICBsZXQgc2Nyb2xsID0ge1xuICAgIHNjcm9sbExlZnQ6IDAsXG4gICAgc2Nyb2xsVG9wOiAwXG4gIH07XG4gIGxldCBzY2FsZSA9IGNyZWF0ZUVtcHR5Q29vcmRzKDEpO1xuICBjb25zdCBvZmZzZXRzID0gY3JlYXRlRW1wdHlDb29yZHMoMCk7XG4gIGlmIChpc09mZnNldFBhcmVudEFuRWxlbWVudCB8fCAhaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgJiYgc3RyYXRlZ3kgIT09ICdmaXhlZCcpIHtcbiAgICBpZiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSAhPT0gJ2JvZHknIHx8IGlzT3ZlcmZsb3dFbGVtZW50KGRvY3VtZW50RWxlbWVudCkpIHtcbiAgICAgIHNjcm9sbCA9IGdldE5vZGVTY3JvbGwob2Zmc2V0UGFyZW50KTtcbiAgICB9XG4gICAgaWYgKGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgY29uc3Qgb2Zmc2V0UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQpO1xuICAgICAgc2NhbGUgPSBnZXRTY2FsZShvZmZzZXRQYXJlbnQpO1xuICAgICAgb2Zmc2V0cy54ID0gb2Zmc2V0UmVjdC54ICsgb2Zmc2V0UGFyZW50LmNsaWVudExlZnQ7XG4gICAgICBvZmZzZXRzLnkgPSBvZmZzZXRSZWN0LnkgKyBvZmZzZXRQYXJlbnQuY2xpZW50VG9wO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIHdpZHRoOiByZWN0LndpZHRoICogc2NhbGUueCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0ICogc2NhbGUueSxcbiAgICB4OiByZWN0LnggKiBzY2FsZS54IC0gc2Nyb2xsLnNjcm9sbExlZnQgKiBzY2FsZS54ICsgb2Zmc2V0cy54LFxuICAgIHk6IHJlY3QueSAqIHNjYWxlLnkgLSBzY3JvbGwuc2Nyb2xsVG9wICogc2NhbGUueSArIG9mZnNldHMueVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpIHtcbiAgLy8gSWYgPGh0bWw+IGhhcyBhIENTUyB3aWR0aCBncmVhdGVyIHRoYW4gdGhlIHZpZXdwb3J0LCB0aGVuIHRoaXMgd2lsbCBiZVxuICAvLyBpbmNvcnJlY3QgZm9yIFJUTC5cbiAgcmV0dXJuIGdldEJvdW5kaW5nQ2xpZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpLmxlZnQgKyBnZXROb2RlU2Nyb2xsKGVsZW1lbnQpLnNjcm9sbExlZnQ7XG59XG5cbi8vIEdldHMgdGhlIGVudGlyZSBzaXplIG9mIHRoZSBzY3JvbGxhYmxlIGRvY3VtZW50IGFyZWEsIGV2ZW4gZXh0ZW5kaW5nIG91dHNpZGVcbi8vIG9mIHRoZSBgPGh0bWw+YCBhbmQgYDxib2R5PmAgcmVjdCBib3VuZHMgaWYgaG9yaXpvbnRhbGx5IHNjcm9sbGFibGUuXG5mdW5jdGlvbiBnZXREb2N1bWVudFJlY3QoZWxlbWVudCkge1xuICBjb25zdCBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICBjb25zdCBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKGVsZW1lbnQpO1xuICBjb25zdCBib2R5ID0gZWxlbWVudC5vd25lckRvY3VtZW50LmJvZHk7XG4gIGNvbnN0IHdpZHRoID0gbWF4KGh0bWwuc2Nyb2xsV2lkdGgsIGh0bWwuY2xpZW50V2lkdGgsIGJvZHkuc2Nyb2xsV2lkdGgsIGJvZHkuY2xpZW50V2lkdGgpO1xuICBjb25zdCBoZWlnaHQgPSBtYXgoaHRtbC5zY3JvbGxIZWlnaHQsIGh0bWwuY2xpZW50SGVpZ2h0LCBib2R5LnNjcm9sbEhlaWdodCwgYm9keS5jbGllbnRIZWlnaHQpO1xuICBsZXQgeCA9IC1zY3JvbGwuc2Nyb2xsTGVmdCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCk7XG4gIGNvbnN0IHkgPSAtc2Nyb2xsLnNjcm9sbFRvcDtcbiAgaWYgKGdldENvbXB1dGVkU3R5bGUkMShib2R5KS5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgeCArPSBtYXgoaHRtbC5jbGllbnRXaWR0aCwgYm9keS5jbGllbnRXaWR0aCkgLSB3aWR0aDtcbiAgfVxuICByZXR1cm4ge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICB4LFxuICAgIHlcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShub2RlKSB7XG4gIGlmIChnZXROb2RlTmFtZShub2RlKSA9PT0gJ2h0bWwnKSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbiAgY29uc3QgcmVzdWx0ID1cbiAgLy8gU3RlcCBpbnRvIHRoZSBzaGFkb3cgRE9NIG9mIHRoZSBwYXJlbnQgb2YgYSBzbG90dGVkIG5vZGUuXG4gIG5vZGUuYXNzaWduZWRTbG90IHx8XG4gIC8vIERPTSBFbGVtZW50IGRldGVjdGVkLlxuICBub2RlLnBhcmVudE5vZGUgfHxcbiAgLy8gU2hhZG93Um9vdCBkZXRlY3RlZC5cbiAgaXNTaGFkb3dSb290KG5vZGUpICYmIG5vZGUuaG9zdCB8fFxuICAvLyBGYWxsYmFjay5cbiAgZ2V0RG9jdW1lbnRFbGVtZW50KG5vZGUpO1xuICByZXR1cm4gaXNTaGFkb3dSb290KHJlc3VsdCkgPyByZXN1bHQuaG9zdCA6IHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZ2V0TmVhcmVzdE92ZXJmbG93QW5jZXN0b3Iobm9kZSkge1xuICBjb25zdCBwYXJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShub2RlKTtcbiAgaWYgKGlzTGFzdFRyYXZlcnNhYmxlTm9kZShwYXJlbnROb2RlKSkge1xuICAgIHJldHVybiBub2RlLm93bmVyRG9jdW1lbnQgPyBub2RlLm93bmVyRG9jdW1lbnQuYm9keSA6IG5vZGUuYm9keTtcbiAgfVxuICBpZiAoaXNIVE1MRWxlbWVudChwYXJlbnROb2RlKSAmJiBpc092ZXJmbG93RWxlbWVudChwYXJlbnROb2RlKSkge1xuICAgIHJldHVybiBwYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiBnZXROZWFyZXN0T3ZlcmZsb3dBbmNlc3RvcihwYXJlbnROb2RlKTtcbn1cblxuZnVuY3Rpb24gZ2V0T3ZlcmZsb3dBbmNlc3RvcnMobm9kZSwgbGlzdCkge1xuICB2YXIgX25vZGUkb3duZXJEb2N1bWVudDtcbiAgaWYgKGxpc3QgPT09IHZvaWQgMCkge1xuICAgIGxpc3QgPSBbXTtcbiAgfVxuICBjb25zdCBzY3JvbGxhYmxlQW5jZXN0b3IgPSBnZXROZWFyZXN0T3ZlcmZsb3dBbmNlc3Rvcihub2RlKTtcbiAgY29uc3QgaXNCb2R5ID0gc2Nyb2xsYWJsZUFuY2VzdG9yID09PSAoKF9ub2RlJG93bmVyRG9jdW1lbnQgPSBub2RlLm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfbm9kZSRvd25lckRvY3VtZW50LmJvZHkpO1xuICBjb25zdCB3aW4gPSBnZXRXaW5kb3coc2Nyb2xsYWJsZUFuY2VzdG9yKTtcbiAgaWYgKGlzQm9keSkge1xuICAgIHJldHVybiBsaXN0LmNvbmNhdCh3aW4sIHdpbi52aXN1YWxWaWV3cG9ydCB8fCBbXSwgaXNPdmVyZmxvd0VsZW1lbnQoc2Nyb2xsYWJsZUFuY2VzdG9yKSA/IHNjcm9sbGFibGVBbmNlc3RvciA6IFtdKTtcbiAgfVxuICByZXR1cm4gbGlzdC5jb25jYXQoc2Nyb2xsYWJsZUFuY2VzdG9yLCBnZXRPdmVyZmxvd0FuY2VzdG9ycyhzY3JvbGxhYmxlQW5jZXN0b3IpKTtcbn1cblxuZnVuY3Rpb24gZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQsIHN0cmF0ZWd5KSB7XG4gIGNvbnN0IHdpbiA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgY29uc3QgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgY29uc3QgdmlzdWFsVmlld3BvcnQgPSB3aW4udmlzdWFsVmlld3BvcnQ7XG4gIGxldCB3aWR0aCA9IGh0bWwuY2xpZW50V2lkdGg7XG4gIGxldCBoZWlnaHQgPSBodG1sLmNsaWVudEhlaWdodDtcbiAgbGV0IHggPSAwO1xuICBsZXQgeSA9IDA7XG4gIGlmICh2aXN1YWxWaWV3cG9ydCkge1xuICAgIHdpZHRoID0gdmlzdWFsVmlld3BvcnQud2lkdGg7XG4gICAgaGVpZ2h0ID0gdmlzdWFsVmlld3BvcnQuaGVpZ2h0O1xuICAgIGNvbnN0IHZpc3VhbFZpZXdwb3J0QmFzZWQgPSBpc1NhZmFyaSgpO1xuICAgIGlmICghdmlzdWFsVmlld3BvcnRCYXNlZCB8fCB2aXN1YWxWaWV3cG9ydEJhc2VkICYmIHN0cmF0ZWd5ID09PSAnZml4ZWQnKSB7XG4gICAgICB4ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0TGVmdDtcbiAgICAgIHkgPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3A7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIHgsXG4gICAgeVxuICB9O1xufVxuXG4vLyBSZXR1cm5zIHRoZSBpbm5lciBjbGllbnQgcmVjdCwgc3VidHJhY3Rpbmcgc2Nyb2xsYmFycyBpZiBwcmVzZW50LlxuZnVuY3Rpb24gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCwgc3RyYXRlZ3kpIHtcbiAgY29uc3QgY2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCB0cnVlLCBzdHJhdGVneSA9PT0gJ2ZpeGVkJyk7XG4gIGNvbnN0IHRvcCA9IGNsaWVudFJlY3QudG9wICsgZWxlbWVudC5jbGllbnRUb3A7XG4gIGNvbnN0IGxlZnQgPSBjbGllbnRSZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudExlZnQ7XG4gIGNvbnN0IHNjYWxlID0gaXNIVE1MRWxlbWVudChlbGVtZW50KSA/IGdldFNjYWxlKGVsZW1lbnQpIDogY3JlYXRlRW1wdHlDb29yZHMoMSk7XG4gIGNvbnN0IHdpZHRoID0gZWxlbWVudC5jbGllbnRXaWR0aCAqIHNjYWxlLng7XG4gIGNvbnN0IGhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NhbGUueTtcbiAgY29uc3QgeCA9IGxlZnQgKiBzY2FsZS54O1xuICBjb25zdCB5ID0gdG9wICogc2NhbGUueTtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgeCxcbiAgICB5XG4gIH07XG59XG5mdW5jdGlvbiBnZXRDbGllbnRSZWN0RnJvbUNsaXBwaW5nQW5jZXN0b3IoZWxlbWVudCwgY2xpcHBpbmdBbmNlc3Rvciwgc3RyYXRlZ3kpIHtcbiAgbGV0IHJlY3Q7XG4gIGlmIChjbGlwcGluZ0FuY2VzdG9yID09PSAndmlld3BvcnQnKSB7XG4gICAgcmVjdCA9IGdldFZpZXdwb3J0UmVjdChlbGVtZW50LCBzdHJhdGVneSk7XG4gIH0gZWxzZSBpZiAoY2xpcHBpbmdBbmNlc3RvciA9PT0gJ2RvY3VtZW50Jykge1xuICAgIHJlY3QgPSBnZXREb2N1bWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKTtcbiAgfSBlbHNlIGlmIChpc0VsZW1lbnQoY2xpcHBpbmdBbmNlc3RvcikpIHtcbiAgICByZWN0ID0gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoY2xpcHBpbmdBbmNlc3Rvciwgc3RyYXRlZ3kpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHZpc3VhbE9mZnNldHMgPSBnZXRWaXN1YWxPZmZzZXRzKGVsZW1lbnQpO1xuICAgIHJlY3QgPSB7XG4gICAgICAuLi5jbGlwcGluZ0FuY2VzdG9yLFxuICAgICAgeDogY2xpcHBpbmdBbmNlc3Rvci54IC0gdmlzdWFsT2Zmc2V0cy54LFxuICAgICAgeTogY2xpcHBpbmdBbmNlc3Rvci55IC0gdmlzdWFsT2Zmc2V0cy55XG4gICAgfTtcbiAgfVxuICByZXR1cm4gcmVjdFRvQ2xpZW50UmVjdChyZWN0KTtcbn1cbmZ1bmN0aW9uIGhhc0ZpeGVkUG9zaXRpb25BbmNlc3RvcihlbGVtZW50LCBzdG9wTm9kZSkge1xuICBjb25zdCBwYXJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcbiAgaWYgKHBhcmVudE5vZGUgPT09IHN0b3BOb2RlIHx8ICFpc0VsZW1lbnQocGFyZW50Tm9kZSkgfHwgaXNMYXN0VHJhdmVyc2FibGVOb2RlKHBhcmVudE5vZGUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBnZXRDb21wdXRlZFN0eWxlJDEocGFyZW50Tm9kZSkucG9zaXRpb24gPT09ICdmaXhlZCcgfHwgaGFzRml4ZWRQb3NpdGlvbkFuY2VzdG9yKHBhcmVudE5vZGUsIHN0b3BOb2RlKTtcbn1cblxuLy8gQSBcImNsaXBwaW5nIGFuY2VzdG9yXCIgaXMgYW4gYG92ZXJmbG93YCBlbGVtZW50IHdpdGggdGhlIGNoYXJhY3RlcmlzdGljIG9mXG4vLyBjbGlwcGluZyAob3IgaGlkaW5nKSBjaGlsZCBlbGVtZW50cy4gVGhpcyByZXR1cm5zIGFsbCBjbGlwcGluZyBhbmNlc3RvcnNcbi8vIG9mIHRoZSBnaXZlbiBlbGVtZW50IHVwIHRoZSB0cmVlLlxuZnVuY3Rpb24gZ2V0Q2xpcHBpbmdFbGVtZW50QW5jZXN0b3JzKGVsZW1lbnQsIGNhY2hlKSB7XG4gIGNvbnN0IGNhY2hlZFJlc3VsdCA9IGNhY2hlLmdldChlbGVtZW50KTtcbiAgaWYgKGNhY2hlZFJlc3VsdCkge1xuICAgIHJldHVybiBjYWNoZWRSZXN1bHQ7XG4gIH1cbiAgbGV0IHJlc3VsdCA9IGdldE92ZXJmbG93QW5jZXN0b3JzKGVsZW1lbnQpLmZpbHRlcihlbCA9PiBpc0VsZW1lbnQoZWwpICYmIGdldE5vZGVOYW1lKGVsKSAhPT0gJ2JvZHknKTtcbiAgbGV0IGN1cnJlbnRDb250YWluaW5nQmxvY2tDb21wdXRlZFN0eWxlID0gbnVsbDtcbiAgY29uc3QgZWxlbWVudElzRml4ZWQgPSBnZXRDb21wdXRlZFN0eWxlJDEoZWxlbWVudCkucG9zaXRpb24gPT09ICdmaXhlZCc7XG4gIGxldCBjdXJyZW50Tm9kZSA9IGVsZW1lbnRJc0ZpeGVkID8gZ2V0UGFyZW50Tm9kZShlbGVtZW50KSA6IGVsZW1lbnQ7XG5cbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0NvbnRhaW5pbmdfYmxvY2sjaWRlbnRpZnlpbmdfdGhlX2NvbnRhaW5pbmdfYmxvY2tcbiAgd2hpbGUgKGlzRWxlbWVudChjdXJyZW50Tm9kZSkgJiYgIWlzTGFzdFRyYXZlcnNhYmxlTm9kZShjdXJyZW50Tm9kZSkpIHtcbiAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSQxKGN1cnJlbnROb2RlKTtcbiAgICBjb25zdCBjdXJyZW50Tm9kZUlzQ29udGFpbmluZyA9IGlzQ29udGFpbmluZ0Jsb2NrKGN1cnJlbnROb2RlKTtcbiAgICBpZiAoIWN1cnJlbnROb2RlSXNDb250YWluaW5nICYmIGNvbXB1dGVkU3R5bGUucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgIGN1cnJlbnRDb250YWluaW5nQmxvY2tDb21wdXRlZFN0eWxlID0gbnVsbDtcbiAgICB9XG4gICAgY29uc3Qgc2hvdWxkRHJvcEN1cnJlbnROb2RlID0gZWxlbWVudElzRml4ZWQgPyAhY3VycmVudE5vZGVJc0NvbnRhaW5pbmcgJiYgIWN1cnJlbnRDb250YWluaW5nQmxvY2tDb21wdXRlZFN0eWxlIDogIWN1cnJlbnROb2RlSXNDb250YWluaW5nICYmIGNvbXB1dGVkU3R5bGUucG9zaXRpb24gPT09ICdzdGF0aWMnICYmICEhY3VycmVudENvbnRhaW5pbmdCbG9ja0NvbXB1dGVkU3R5bGUgJiYgWydhYnNvbHV0ZScsICdmaXhlZCddLmluY2x1ZGVzKGN1cnJlbnRDb250YWluaW5nQmxvY2tDb21wdXRlZFN0eWxlLnBvc2l0aW9uKSB8fCBpc092ZXJmbG93RWxlbWVudChjdXJyZW50Tm9kZSkgJiYgIWN1cnJlbnROb2RlSXNDb250YWluaW5nICYmIGhhc0ZpeGVkUG9zaXRpb25BbmNlc3RvcihlbGVtZW50LCBjdXJyZW50Tm9kZSk7XG4gICAgaWYgKHNob3VsZERyb3BDdXJyZW50Tm9kZSkge1xuICAgICAgLy8gRHJvcCBub24tY29udGFpbmluZyBibG9ja3MuXG4gICAgICByZXN1bHQgPSByZXN1bHQuZmlsdGVyKGFuY2VzdG9yID0+IGFuY2VzdG9yICE9PSBjdXJyZW50Tm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlY29yZCBsYXN0IGNvbnRhaW5pbmcgYmxvY2sgZm9yIG5leHQgaXRlcmF0aW9uLlxuICAgICAgY3VycmVudENvbnRhaW5pbmdCbG9ja0NvbXB1dGVkU3R5bGUgPSBjb21wdXRlZFN0eWxlO1xuICAgIH1cbiAgICBjdXJyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoY3VycmVudE5vZGUpO1xuICB9XG4gIGNhY2hlLnNldChlbGVtZW50LCByZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBHZXRzIHRoZSBtYXhpbXVtIGFyZWEgdGhhdCB0aGUgZWxlbWVudCBpcyB2aXNpYmxlIGluIGR1ZSB0byBhbnkgbnVtYmVyIG9mXG4vLyBjbGlwcGluZyBhbmNlc3RvcnMuXG5mdW5jdGlvbiBnZXRDbGlwcGluZ1JlY3QoX3JlZikge1xuICBsZXQge1xuICAgIGVsZW1lbnQsXG4gICAgYm91bmRhcnksXG4gICAgcm9vdEJvdW5kYXJ5LFxuICAgIHN0cmF0ZWd5XG4gIH0gPSBfcmVmO1xuICBjb25zdCBlbGVtZW50Q2xpcHBpbmdBbmNlc3RvcnMgPSBib3VuZGFyeSA9PT0gJ2NsaXBwaW5nQW5jZXN0b3JzJyA/IGdldENsaXBwaW5nRWxlbWVudEFuY2VzdG9ycyhlbGVtZW50LCB0aGlzLl9jKSA6IFtdLmNvbmNhdChib3VuZGFyeSk7XG4gIGNvbnN0IGNsaXBwaW5nQW5jZXN0b3JzID0gWy4uLmVsZW1lbnRDbGlwcGluZ0FuY2VzdG9ycywgcm9vdEJvdW5kYXJ5XTtcbiAgY29uc3QgZmlyc3RDbGlwcGluZ0FuY2VzdG9yID0gY2xpcHBpbmdBbmNlc3RvcnNbMF07XG4gIGNvbnN0IGNsaXBwaW5nUmVjdCA9IGNsaXBwaW5nQW5jZXN0b3JzLnJlZHVjZSgoYWNjUmVjdCwgY2xpcHBpbmdBbmNlc3RvcikgPT4ge1xuICAgIGNvbnN0IHJlY3QgPSBnZXRDbGllbnRSZWN0RnJvbUNsaXBwaW5nQW5jZXN0b3IoZWxlbWVudCwgY2xpcHBpbmdBbmNlc3Rvciwgc3RyYXRlZ3kpO1xuICAgIGFjY1JlY3QudG9wID0gbWF4KHJlY3QudG9wLCBhY2NSZWN0LnRvcCk7XG4gICAgYWNjUmVjdC5yaWdodCA9IG1pbihyZWN0LnJpZ2h0LCBhY2NSZWN0LnJpZ2h0KTtcbiAgICBhY2NSZWN0LmJvdHRvbSA9IG1pbihyZWN0LmJvdHRvbSwgYWNjUmVjdC5ib3R0b20pO1xuICAgIGFjY1JlY3QubGVmdCA9IG1heChyZWN0LmxlZnQsIGFjY1JlY3QubGVmdCk7XG4gICAgcmV0dXJuIGFjY1JlY3Q7XG4gIH0sIGdldENsaWVudFJlY3RGcm9tQ2xpcHBpbmdBbmNlc3RvcihlbGVtZW50LCBmaXJzdENsaXBwaW5nQW5jZXN0b3IsIHN0cmF0ZWd5KSk7XG4gIHJldHVybiB7XG4gICAgd2lkdGg6IGNsaXBwaW5nUmVjdC5yaWdodCAtIGNsaXBwaW5nUmVjdC5sZWZ0LFxuICAgIGhlaWdodDogY2xpcHBpbmdSZWN0LmJvdHRvbSAtIGNsaXBwaW5nUmVjdC50b3AsXG4gICAgeDogY2xpcHBpbmdSZWN0LmxlZnQsXG4gICAgeTogY2xpcHBpbmdSZWN0LnRvcFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXREaW1lbnNpb25zKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGdldENzc0RpbWVuc2lvbnMoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCwgcG9seWZpbGwpIHtcbiAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8IGdldENvbXB1dGVkU3R5bGUkMShlbGVtZW50KS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChwb2x5ZmlsbCkge1xuICAgIHJldHVybiBwb2x5ZmlsbChlbGVtZW50KTtcbiAgfVxuICByZXR1cm4gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG59XG5mdW5jdGlvbiBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkge1xuICBsZXQgY3VycmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuICB3aGlsZSAoaXNIVE1MRWxlbWVudChjdXJyZW50Tm9kZSkgJiYgIWlzTGFzdFRyYXZlcnNhYmxlTm9kZShjdXJyZW50Tm9kZSkpIHtcbiAgICBpZiAoaXNDb250YWluaW5nQmxvY2soY3VycmVudE5vZGUpKSB7XG4gICAgICByZXR1cm4gY3VycmVudE5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShjdXJyZW50Tm9kZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBHZXRzIHRoZSBjbG9zZXN0IGFuY2VzdG9yIHBvc2l0aW9uZWQgZWxlbWVudC4gSGFuZGxlcyBzb21lIGVkZ2UgY2FzZXMsXG4vLyBzdWNoIGFzIHRhYmxlIGFuY2VzdG9ycyBhbmQgY3Jvc3MgYnJvd3NlciBidWdzLlxuZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQsIHBvbHlmaWxsKSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuICBsZXQgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50LCBwb2x5ZmlsbCk7XG4gIHdoaWxlIChvZmZzZXRQYXJlbnQgJiYgaXNUYWJsZUVsZW1lbnQob2Zmc2V0UGFyZW50KSAmJiBnZXRDb21wdXRlZFN0eWxlJDEob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCwgcG9seWZpbGwpO1xuICB9XG4gIGlmIChvZmZzZXRQYXJlbnQgJiYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdodG1sJyB8fCBnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnYm9keScgJiYgZ2V0Q29tcHV0ZWRTdHlsZSQxKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnICYmICFpc0NvbnRhaW5pbmdCbG9jayhvZmZzZXRQYXJlbnQpKSkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cbiAgcmV0dXJuIG9mZnNldFBhcmVudCB8fCBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkgfHwgd2luZG93O1xufVxuXG5mdW5jdGlvbiBnZXRSZWN0UmVsYXRpdmVUb09mZnNldFBhcmVudChlbGVtZW50LCBvZmZzZXRQYXJlbnQsIHN0cmF0ZWd5KSB7XG4gIGNvbnN0IGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICBjb25zdCBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgY29uc3QgaXNGaXhlZCA9IHN0cmF0ZWd5ID09PSAnZml4ZWQnO1xuICBjb25zdCByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIHRydWUsIGlzRml4ZWQsIG9mZnNldFBhcmVudCk7XG4gIGxldCBzY3JvbGwgPSB7XG4gICAgc2Nyb2xsTGVmdDogMCxcbiAgICBzY3JvbGxUb3A6IDBcbiAgfTtcbiAgY29uc3Qgb2Zmc2V0cyA9IGNyZWF0ZUVtcHR5Q29vcmRzKDApO1xuICBpZiAoaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgfHwgIWlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ICYmICFpc0ZpeGVkKSB7XG4gICAgaWYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgIT09ICdib2R5JyB8fCBpc092ZXJmbG93RWxlbWVudChkb2N1bWVudEVsZW1lbnQpKSB7XG4gICAgICBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKG9mZnNldFBhcmVudCk7XG4gICAgfVxuICAgIGlmIChpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkpIHtcbiAgICAgIGNvbnN0IG9mZnNldFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qob2Zmc2V0UGFyZW50LCB0cnVlLCBpc0ZpeGVkLCBvZmZzZXRQYXJlbnQpO1xuICAgICAgb2Zmc2V0cy54ID0gb2Zmc2V0UmVjdC54ICsgb2Zmc2V0UGFyZW50LmNsaWVudExlZnQ7XG4gICAgICBvZmZzZXRzLnkgPSBvZmZzZXRSZWN0LnkgKyBvZmZzZXRQYXJlbnQuY2xpZW50VG9wO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBvZmZzZXRzLnggPSBnZXRXaW5kb3dTY3JvbGxCYXJYKGRvY3VtZW50RWxlbWVudCk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgeDogcmVjdC5sZWZ0ICsgc2Nyb2xsLnNjcm9sbExlZnQgLSBvZmZzZXRzLngsXG4gICAgeTogcmVjdC50b3AgKyBzY3JvbGwuc2Nyb2xsVG9wIC0gb2Zmc2V0cy55LFxuICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgIGhlaWdodDogcmVjdC5oZWlnaHRcbiAgfTtcbn1cblxuY29uc3QgcGxhdGZvcm0gPSB7XG4gIGdldENsaXBwaW5nUmVjdCxcbiAgY29udmVydE9mZnNldFBhcmVudFJlbGF0aXZlUmVjdFRvVmlld3BvcnRSZWxhdGl2ZVJlY3QsXG4gIGlzRWxlbWVudCxcbiAgZ2V0RGltZW5zaW9ucyxcbiAgZ2V0T2Zmc2V0UGFyZW50LFxuICBnZXREb2N1bWVudEVsZW1lbnQsXG4gIGdldFNjYWxlLFxuICBhc3luYyBnZXRFbGVtZW50UmVjdHMoX3JlZikge1xuICAgIGxldCB7XG4gICAgICByZWZlcmVuY2UsXG4gICAgICBmbG9hdGluZyxcbiAgICAgIHN0cmF0ZWd5XG4gICAgfSA9IF9yZWY7XG4gICAgY29uc3QgZ2V0T2Zmc2V0UGFyZW50Rm4gPSB0aGlzLmdldE9mZnNldFBhcmVudCB8fCBnZXRPZmZzZXRQYXJlbnQ7XG4gICAgY29uc3QgZ2V0RGltZW5zaW9uc0ZuID0gdGhpcy5nZXREaW1lbnNpb25zO1xuICAgIHJldHVybiB7XG4gICAgICByZWZlcmVuY2U6IGdldFJlY3RSZWxhdGl2ZVRvT2Zmc2V0UGFyZW50KHJlZmVyZW5jZSwgYXdhaXQgZ2V0T2Zmc2V0UGFyZW50Rm4oZmxvYXRpbmcpLCBzdHJhdGVneSksXG4gICAgICBmbG9hdGluZzoge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICAuLi4oYXdhaXQgZ2V0RGltZW5zaW9uc0ZuKGZsb2F0aW5nKSlcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuICBnZXRDbGllbnRSZWN0czogZWxlbWVudCA9PiBBcnJheS5mcm9tKGVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKSksXG4gIGlzUlRMOiBlbGVtZW50ID0+IGdldENvbXB1dGVkU3R5bGUkMShlbGVtZW50KS5kaXJlY3Rpb24gPT09ICdydGwnXG59O1xuXG4vLyBodHRwczovL3NhbXRob3IuYXUvMjAyMS9vYnNlcnZpbmctZG9tL1xuZnVuY3Rpb24gb2JzZXJ2ZU1vdmUoZWxlbWVudCwgb25Nb3ZlKSB7XG4gIGxldCBpbyA9IG51bGw7XG4gIGxldCB0aW1lb3V0SWQ7XG4gIGNvbnN0IHJvb3QgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgaW8gJiYgaW8uZGlzY29ubmVjdCgpO1xuICAgIGlvID0gbnVsbDtcbiAgfVxuICBmdW5jdGlvbiByZWZyZXNoKHNraXAsIHRocmVzaG9sZCkge1xuICAgIGlmIChza2lwID09PSB2b2lkIDApIHtcbiAgICAgIHNraXAgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRocmVzaG9sZCA9PT0gdm9pZCAwKSB7XG4gICAgICB0aHJlc2hvbGQgPSAxO1xuICAgIH1cbiAgICBjbGVhbnVwKCk7XG4gICAgY29uc3Qge1xuICAgICAgbGVmdCxcbiAgICAgIHRvcCxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0XG4gICAgfSA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKCFza2lwKSB7XG4gICAgICBvbk1vdmUoKTtcbiAgICB9XG4gICAgaWYgKCF3aWR0aCB8fCAhaGVpZ2h0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGluc2V0VG9wID0gZmxvb3IodG9wKTtcbiAgICBjb25zdCBpbnNldFJpZ2h0ID0gZmxvb3Iocm9vdC5jbGllbnRXaWR0aCAtIChsZWZ0ICsgd2lkdGgpKTtcbiAgICBjb25zdCBpbnNldEJvdHRvbSA9IGZsb29yKHJvb3QuY2xpZW50SGVpZ2h0IC0gKHRvcCArIGhlaWdodCkpO1xuICAgIGNvbnN0IGluc2V0TGVmdCA9IGZsb29yKGxlZnQpO1xuICAgIGNvbnN0IHJvb3RNYXJnaW4gPSAtaW5zZXRUb3AgKyBcInB4IFwiICsgLWluc2V0UmlnaHQgKyBcInB4IFwiICsgLWluc2V0Qm90dG9tICsgXCJweCBcIiArIC1pbnNldExlZnQgKyBcInB4XCI7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHJvb3RNYXJnaW4sXG4gICAgICB0aHJlc2hvbGQ6IG1heCgwLCBtaW4oMSwgdGhyZXNob2xkKSkgfHwgMVxuICAgIH07XG4gICAgbGV0IGlzRmlyc3RVcGRhdGUgPSB0cnVlO1xuICAgIGZ1bmN0aW9uIGhhbmRsZU9ic2VydmUoZW50cmllcykge1xuICAgICAgY29uc3QgcmF0aW8gPSBlbnRyaWVzWzBdLmludGVyc2VjdGlvblJhdGlvO1xuICAgICAgaWYgKHJhdGlvICE9PSB0aHJlc2hvbGQpIHtcbiAgICAgICAgaWYgKCFpc0ZpcnN0VXBkYXRlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlZnJlc2goKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJhdGlvKSB7XG4gICAgICAgICAgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICByZWZyZXNoKGZhbHNlLCAxZS03KTtcbiAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlZnJlc2goZmFsc2UsIHJhdGlvKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaXNGaXJzdFVwZGF0ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIE9sZGVyIGJyb3dzZXJzIGRvbid0IHN1cHBvcnQgYSBgZG9jdW1lbnRgIGFzIHRoZSByb290IGFuZCB3aWxsIHRocm93IGFuXG4gICAgLy8gZXJyb3IuXG4gICAgdHJ5IHtcbiAgICAgIGlvID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGhhbmRsZU9ic2VydmUsIHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgLy8gSGFuZGxlIDxpZnJhbWU+c1xuICAgICAgICByb290OiByb290Lm93bmVyRG9jdW1lbnRcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlvID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGhhbmRsZU9ic2VydmUsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBpby5vYnNlcnZlKGVsZW1lbnQpO1xuICB9XG4gIHJlZnJlc2godHJ1ZSk7XG4gIHJldHVybiBjbGVhbnVwO1xufVxuXG4vKipcbiAqIEF1dG9tYXRpY2FsbHkgdXBkYXRlcyB0aGUgcG9zaXRpb24gb2YgdGhlIGZsb2F0aW5nIGVsZW1lbnQgd2hlbiBuZWNlc3NhcnkuXG4gKiBTaG91bGQgb25seSBiZSBjYWxsZWQgd2hlbiB0aGUgZmxvYXRpbmcgZWxlbWVudCBpcyBtb3VudGVkIG9uIHRoZSBET00gb3JcbiAqIHZpc2libGUgb24gdGhlIHNjcmVlbi5cbiAqIEByZXR1cm5zIGNsZWFudXAgZnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgaW52b2tlZCB3aGVuIHRoZSBmbG9hdGluZyBlbGVtZW50IGlzXG4gKiByZW1vdmVkIGZyb20gdGhlIERPTSBvciBoaWRkZW4gZnJvbSB0aGUgc2NyZWVuLlxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2F1dG9VcGRhdGVcbiAqL1xuZnVuY3Rpb24gYXV0b1VwZGF0ZShyZWZlcmVuY2UsIGZsb2F0aW5nLCB1cGRhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBjb25zdCB7XG4gICAgYW5jZXN0b3JTY3JvbGwgPSB0cnVlLFxuICAgIGFuY2VzdG9yUmVzaXplID0gdHJ1ZSxcbiAgICBlbGVtZW50UmVzaXplID0gdHlwZW9mIFJlc2l6ZU9ic2VydmVyID09PSAnZnVuY3Rpb24nLFxuICAgIGxheW91dFNoaWZ0ID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyID09PSAnZnVuY3Rpb24nLFxuICAgIGFuaW1hdGlvbkZyYW1lID0gZmFsc2VcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHJlZmVyZW5jZUVsID0gdW53cmFwRWxlbWVudChyZWZlcmVuY2UpO1xuICBjb25zdCBhbmNlc3RvcnMgPSBhbmNlc3RvclNjcm9sbCB8fCBhbmNlc3RvclJlc2l6ZSA/IFsuLi4ocmVmZXJlbmNlRWwgPyBnZXRPdmVyZmxvd0FuY2VzdG9ycyhyZWZlcmVuY2VFbCkgOiBbXSksIC4uLmdldE92ZXJmbG93QW5jZXN0b3JzKGZsb2F0aW5nKV0gOiBbXTtcbiAgYW5jZXN0b3JzLmZvckVhY2goYW5jZXN0b3IgPT4ge1xuICAgIGFuY2VzdG9yU2Nyb2xsICYmIGFuY2VzdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZSwge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuICAgIGFuY2VzdG9yUmVzaXplICYmIGFuY2VzdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZSk7XG4gIH0pO1xuICBjb25zdCBjbGVhbnVwSW8gPSByZWZlcmVuY2VFbCAmJiBsYXlvdXRTaGlmdCA/IG9ic2VydmVNb3ZlKHJlZmVyZW5jZUVsLCB1cGRhdGUpIDogbnVsbDtcbiAgbGV0IHJlb2JzZXJ2ZUZyYW1lID0gLTE7XG4gIGxldCByZXNpemVPYnNlcnZlciA9IG51bGw7XG4gIGlmIChlbGVtZW50UmVzaXplKSB7XG4gICAgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoX3JlZiA9PiB7XG4gICAgICBsZXQgW2ZpcnN0RW50cnldID0gX3JlZjtcbiAgICAgIGlmIChmaXJzdEVudHJ5ICYmIGZpcnN0RW50cnkudGFyZ2V0ID09PSByZWZlcmVuY2VFbCAmJiByZXNpemVPYnNlcnZlcikge1xuICAgICAgICAvLyBQcmV2ZW50IHVwZGF0ZSBsb29wcyB3aGVuIHVzaW5nIHRoZSBgc2l6ZWAgbWlkZGxld2FyZS5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2Zsb2F0aW5nLXVpL2Zsb2F0aW5nLXVpL2lzc3Vlcy8xNzQwXG4gICAgICAgIHJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZShmbG9hdGluZyk7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlb2JzZXJ2ZUZyYW1lKTtcbiAgICAgICAgcmVvYnNlcnZlRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHJlc2l6ZU9ic2VydmVyICYmIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZmxvYXRpbmcpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHVwZGF0ZSgpO1xuICAgIH0pO1xuICAgIGlmIChyZWZlcmVuY2VFbCAmJiAhYW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUocmVmZXJlbmNlRWwpO1xuICAgIH1cbiAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKGZsb2F0aW5nKTtcbiAgfVxuICBsZXQgZnJhbWVJZDtcbiAgbGV0IHByZXZSZWZSZWN0ID0gYW5pbWF0aW9uRnJhbWUgPyBnZXRCb3VuZGluZ0NsaWVudFJlY3QocmVmZXJlbmNlKSA6IG51bGw7XG4gIGlmIChhbmltYXRpb25GcmFtZSkge1xuICAgIGZyYW1lTG9vcCgpO1xuICB9XG4gIGZ1bmN0aW9uIGZyYW1lTG9vcCgpIHtcbiAgICBjb25zdCBuZXh0UmVmUmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChyZWZlcmVuY2UpO1xuICAgIGlmIChwcmV2UmVmUmVjdCAmJiAobmV4dFJlZlJlY3QueCAhPT0gcHJldlJlZlJlY3QueCB8fCBuZXh0UmVmUmVjdC55ICE9PSBwcmV2UmVmUmVjdC55IHx8IG5leHRSZWZSZWN0LndpZHRoICE9PSBwcmV2UmVmUmVjdC53aWR0aCB8fCBuZXh0UmVmUmVjdC5oZWlnaHQgIT09IHByZXZSZWZSZWN0LmhlaWdodCkpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH1cbiAgICBwcmV2UmVmUmVjdCA9IG5leHRSZWZSZWN0O1xuICAgIGZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnJhbWVMb29wKTtcbiAgfVxuICB1cGRhdGUoKTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBhbmNlc3RvcnMuZm9yRWFjaChhbmNlc3RvciA9PiB7XG4gICAgICBhbmNlc3RvclNjcm9sbCAmJiBhbmNlc3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB1cGRhdGUpO1xuICAgICAgYW5jZXN0b3JSZXNpemUgJiYgYW5jZXN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlKTtcbiAgICB9KTtcbiAgICBjbGVhbnVwSW8gJiYgY2xlYW51cElvKCk7XG4gICAgcmVzaXplT2JzZXJ2ZXIgJiYgcmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIHJlc2l6ZU9ic2VydmVyID0gbnVsbDtcbiAgICBpZiAoYW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGZyYW1lSWQpO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgYHhgIGFuZCBgeWAgY29vcmRpbmF0ZXMgdGhhdCB3aWxsIHBsYWNlIHRoZSBmbG9hdGluZyBlbGVtZW50XG4gKiBuZXh0IHRvIGEgcmVmZXJlbmNlIGVsZW1lbnQgd2hlbiBpdCBpcyBnaXZlbiBhIGNlcnRhaW4gQ1NTIHBvc2l0aW9uaW5nXG4gKiBzdHJhdGVneS5cbiAqL1xuY29uc3QgY29tcHV0ZVBvc2l0aW9uID0gKHJlZmVyZW5jZSwgZmxvYXRpbmcsIG9wdGlvbnMpID0+IHtcbiAgLy8gVGhpcyBjYWNoZXMgdGhlIGV4cGVuc2l2ZSBgZ2V0Q2xpcHBpbmdFbGVtZW50QW5jZXN0b3JzYCBmdW5jdGlvbiBzbyB0aGF0XG4gIC8vIG11bHRpcGxlIGxpZmVjeWNsZSByZXNldHMgcmUtdXNlIHRoZSBzYW1lIHJlc3VsdC4gSXQgb25seSBsaXZlcyBmb3IgYVxuICAvLyBzaW5nbGUgY2FsbC4gSWYgb3RoZXIgZnVuY3Rpb25zIGJlY29tZSBleHBlbnNpdmUsIHdlIGNhbiBhZGQgdGhlbSBhcyB3ZWxsLlxuICBjb25zdCBjYWNoZSA9IG5ldyBNYXAoKTtcbiAgY29uc3QgbWVyZ2VkT3B0aW9ucyA9IHtcbiAgICBwbGF0Zm9ybSxcbiAgICAuLi5vcHRpb25zXG4gIH07XG4gIGNvbnN0IHBsYXRmb3JtV2l0aENhY2hlID0ge1xuICAgIC4uLm1lcmdlZE9wdGlvbnMucGxhdGZvcm0sXG4gICAgX2M6IGNhY2hlXG4gIH07XG4gIHJldHVybiBjb21wdXRlUG9zaXRpb24kMShyZWZlcmVuY2UsIGZsb2F0aW5nLCB7XG4gICAgLi4ubWVyZ2VkT3B0aW9ucyxcbiAgICBwbGF0Zm9ybTogcGxhdGZvcm1XaXRoQ2FjaGVcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBhdXRvVXBkYXRlLCBjb21wdXRlUG9zaXRpb24sIGdldE92ZXJmbG93QW5jZXN0b3JzLCBwbGF0Zm9ybSB9O1xuIiwgIi8vIFRPRE86IE1ha2UgaXQgc28geW91IGNhbiBhZGQgY3VzdG9tIGVsZW1lbnRzXG5pbXBvcnQgeyBkZWVwTWVyZ2UsIGVtMnB4LCBnZW5lcmF0ZUlEIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgXG4vLyBtYWluXG5hdXRvVXBkYXRlLCBjb21wdXRlUG9zaXRpb24sIFxuLy8gbWlkZGxld2FyZVxuYXJyb3cgYXMgZnVpQXJyb3csIGZsaXAgYXMgZnVpRmxpcCwgb2Zmc2V0IGFzIGZ1aU9mZnNldCwgc2hpZnQgYXMgZnVpU2hpZnQsIH0gZnJvbSAnQGZsb2F0aW5nLXVpL2RvbSc7XG5leHBvcnQgY29uc3QgdG9vbHRpcCA9IChub2RlLCBvcHRzID0ge30pID0+IHtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgYWxsb3dIdG1sOiBmYWxzZSxcbiAgICAgICAgYXJyb3c6IHRydWUsXG4gICAgICAgIGNsYXNzOiAndG9vbHRpcCcsXG4gICAgICAgIGNvbnRlbnQ6IG5vZGUudGl0bGUsXG4gICAgICAgIHRhcmdldDogJ2JvZHknLFxuICAgICAgICB2aXNpYmxlOiAnYXV0bycsXG4gICAgICAgIGNvbXB1dGVQb3NpdGlvbkNhbGxiYWNrOiAoZGF0YSwgeyB3cmFwcGVyLCBhcnJvdyB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHgsIHksIHBsYWNlbWVudCwgbWlkZGxld2FyZURhdGEgfSA9IGRhdGE7XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUudG9wID0geSArICdweCc7XG4gICAgICAgICAgICBjb25zdCBwbGFjZW1lbnRQYXJ0cyA9IHBsYWNlbWVudC5zcGxpdCgnLScpO1xuICAgICAgICAgICAgY29uc3Qgb3Bwb3NpdGVzID0ge1xuICAgICAgICAgICAgICAgIHRvcDogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgYm90dG9tOiAndG9wJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiAncmlnaHQnLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAnbGVmdCcsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3Qgb3Bwb3NpdGUgPSBvcHBvc2l0ZXNbcGxhY2VtZW50UGFydHNbMF1dO1xuICAgICAgICAgICAgbGV0IG9yaWdpbkNyb3NzID0gJ2NlbnRlcic7XG4gICAgICAgICAgICBpZiAocGxhY2VtZW50ID09PSAndG9wJyB8fCBwbGFjZW1lbnQgPT09ICdib3R0b20nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBsYWNlbWVudFBhcnRzWzFdID09PSAnc3RhcnQnKVxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5Dcm9zcyA9ICd0b3AnO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBsYWNlbWVudFBhcnRzWzFdID09PSAnZW5kJylcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luQ3Jvc3MgPSAnYm90dG9tJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChwbGFjZW1lbnRQYXJ0c1sxXSA9PT0gJ3N0YXJ0JylcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luQ3Jvc3MgPSAnbGVmdCc7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGxhY2VtZW50UGFydHNbMV0gPT09ICdlbmQnKVxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5Dcm9zcyA9ICdyaWdodCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHdyYXBwZXIuc3R5bGUsIHtcbiAgICAgICAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6IG9wcG9zaXRlICsgJyAnICsgb3JpZ2luQ3Jvc3MsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChtaWRkbGV3YXJlRGF0YS5hcnJvdykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gbWlkZGxld2FyZURhdGEuYXJyb3c7XG4gICAgICAgICAgICAgICAgYXJyb3c/LnNldEF0dHJpYnV0ZSgnZGF0YS1kaXJlY3Rpb24nLCBvcHBvc2l0ZSk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihhcnJvdy5zdHlsZSwge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB4ICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB5ICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgW29wcG9zaXRlXTogJ2NhbGModmFyKC0tX3NpemUpIC8gLTIpJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZnVpQ29uZmlnOiB7XG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgICAgICAgICAgbWlkZGxld2FyZTogW1xuICAgICAgICAgICAgICAgIGZ1aUZsaXAoKSxcbiAgICAgICAgICAgICAgICBmdWlPZmZzZXQoZW0ycHgoMC41KSksXG4gICAgICAgICAgICAgICAgZnVpU2hpZnQoKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIGZ1aUF1dG9VcGRhdGVDb25maWc6IHt9XG4gICAgfTtcbiAgICBvcHRzID0gZGVlcE1lcmdlKGRlZmF1bHRzLCBvcHRzKTtcbiAgICBpZiAoIW9wdHMuY29udGVudClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBjb250ZW50IGRlZmluZWQsIGVpdGhlciBhZGQgdGhlIGNvbnRlbnQgb3B0aW9uIG9yIGFkZCBhIHRpdGxlIHByb3BlcnR5IHRvIHRoZSBlbGVtZW50LicpO1xuICAgIGNvbnN0IGtleWRvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgICAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgbGV0IGluRG9tO1xuICAgIGNvbnN0IGlkID0gbm9kZS5pZCA/IG5vZGUuaWQgKyAnLXRvb2x0aXAnIDogZ2VuZXJhdGVJRCgpO1xuICAgIGxldCB0b29sdGlwID0gY3JlYXRlVG9vbHRpcChub2RlLCBvcHRzLCBpZCk7XG4gICAgYXN5bmMgZnVuY3Rpb24gaGlkZSgpIHtcbiAgICAgICAgaWYgKGluRG9tKSB7XG4gICAgICAgICAgICBhd2FpdCBhbmltYXRlKCdvdXQnKTtcbiAgICAgICAgICAgIHRvb2x0aXAud3JhcHBlci5yZW1vdmUoKTtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5Jyk7XG4gICAgICAgICAgICBpbkRvbSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIHNob3coKSB7XG4gICAgICAgIGlmICghaW5Eb20pIHtcbiAgICAgICAgICAgIGdldEVsZW1lbnQob3B0cy50YXJnZXQpLmFwcGVuZENoaWxkKHRvb2x0aXAud3JhcHBlcik7XG4gICAgICAgICAgICBpbkRvbSA9IHRydWU7XG4gICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGlkKTtcbiAgICAgICAgICAgIGF3YWl0IGFuaW1hdGUoJ2luJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3dpdGNoIChvcHRzLnZpc2libGUpIHtcbiAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdXRvJzpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBzaG93KTtcbiAgICAgICAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBoaWRlKTtcbiAgICAgICAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgc2hvdyk7XG4gICAgICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgaGlkZSk7XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlkb3duSGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgZnVuY3Rpb24gYW5pbWF0ZSh0eXBlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0b29sdGlwLndyYXBwZXIuc2V0QXR0cmlidXRlKCdkYXRhLWFuaW1hdGluZycsIHR5cGUpO1xuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRvb2x0aXAud3JhcHBlcik7XG4gICAgICAgICAgICBjb25zdCBhbmltYXRpb24gPSBwYXJzZUZsb2F0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2FuaW1hdGlvbi1kdXJhdGlvbicpKTtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zaXRpb24gPSBwYXJzZUZsb2F0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zaXRpb24tZHVyYXRpb24nKSk7XG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uIDw9IDAgJiYgdHJhbnNpdGlvbiA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdG9vbHRpcC53cmFwcGVyLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1hbmltYXRpbmcnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdObyBhbmltYXRpb24gZm91bmQuJyk7XG4gICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b29sdGlwLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRvb2x0aXAud3JhcHBlci5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtYW5pbWF0aW5nJyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVVcGRhdGUoa2V5LCBuZXdPcHRzKSB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdjb250ZW50JzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXAuY29udGVudFtuZXdPcHRzLmFsbG93SHRtbCA/ICdpbm5lckhUTUwnIDogJ3RleHRDb250ZW50J10gPSBuZXdPcHRzLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLXRvb2x0aXAtY29udGVudCcsIG5ld09wdHMuY29udGVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYWxsb3dIdG1sJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXAuY29udGVudFtuZXdPcHRzLmFsbG93SHRtbCA/ICdpbm5lckhUTUwnIDogJ3RleHRDb250ZW50J10gPSBuZXdPcHRzLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXAuY29udGVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWxsb3ctaHRtbCcsIG5ld09wdHMuYWxsb3dIdG1sID8gJ3RydWUnIDogJ2ZhbHNlJyk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLXRvb2x0aXAtY29udGVudCcsIG5ld09wdHMuY29udGVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2xhc3MnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kaWZpZWRPbGRDbGFzc2VzID0gZ2V0Q2xhc3NlcyhvcHRzLmNsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kaWZpZWROZXdDbGFzc2VzID0gZ2V0Q2xhc3NlcyhuZXdPcHRzLmNsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcC53cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoLi4ubW9kaWZpZWRPbGRDbGFzc2VzLndyYXBwZXIpO1xuICAgICAgICAgICAgICAgICAgICB0b29sdGlwLndyYXBwZXIuY2xhc3NMaXN0LmFkZCguLi5tb2RpZmllZE5ld0NsYXNzZXMud3JhcHBlcik7XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXAuY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKC4uLm1vZGlmaWVkT2xkQ2xhc3Nlcy5jb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcC5jb250ZW50LmNsYXNzTGlzdC5hZGQoLi4ubW9kaWZpZWROZXdDbGFzc2VzLmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICB0b29sdGlwLmFycm93Py5jbGFzc0xpc3QucmVtb3ZlKC4uLm1vZGlmaWVkT2xkQ2xhc3Nlcy5hcnJvdyk7XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXAuYXJyb3c/LmNsYXNzTGlzdC5hZGQoLi4ubW9kaWZpZWROZXdDbGFzc2VzLmFycm93KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd2aXNpYmxlJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbmV3T3B0cy52aXNpYmxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZSgpOyAvLyB0aGlzIGlzIHB1dCBoZXJlIGJlY2F1c2UgdGhlcmUncyBhIGJyZWFrdGhyb3VnaCBpbiB0aGUgc3dpdGNoXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobmV3T3B0cy52aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6IHNob3coKTsgLy8gYnJlYWsgb21pdHRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHNob3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBoaWRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHNob3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCBoaWRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdhdXRvJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHNob3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBoaWRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHNob3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBoaWRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcCA9IGNyZWF0ZVRvb2x0aXAobm9kZSwgb3B0cywgaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB1cGRhdGUobmV3T3B0cykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrIGluIG5ld09wdHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBrO1xuICAgICAgICAgICAgICAgIGhhbmRsZVVwZGF0ZShrZXksIG5ld09wdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3B0cyA9IGRlZXBNZXJnZShkZWZhdWx0cywgbmV3T3B0cyk7XG4gICAgICAgIH0sXG4gICAgICAgIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleWRvd25IYW5kbGVyKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgayBpbiB0b29sdGlwKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gaztcbiAgICAgICAgICAgICAgICB0b29sdGlwW2tleV0/LnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgdG9vbHRpcDtcbmZ1bmN0aW9uIGNyZWF0ZVRvb2x0aXAobm9kZSwgb3B0cywgaWQpIHtcbiAgICBjb25zdCBjbGFzc2VzID0gZ2V0Q2xhc3NlcyhvcHRzLmNsYXNzID8/IFtdKTtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMud3JhcHBlcik7XG4gICAgd3JhcHBlci5yb2xlID0gJ3Rvb2x0aXAnO1xuICAgIHdyYXBwZXIuaWQgPSBpZDtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMuY29udGVudCk7XG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWxsb3ctaHRtbCcsIG9wdHMuYWxsb3dIdG1sID8gJ3RydWUnIDogJ2ZhbHNlJyk7XG4gICAgY29udGVudFtvcHRzLmFsbG93SHRtbCA/ICdpbm5lckhUTUwnIDogJ3RleHRDb250ZW50J10gPSBvcHRzLmNvbnRlbnQ7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBsZXQgYXJyb3c7XG4gICAgaWYgKG9wdHMuYXJyb3cpIHtcbiAgICAgICAgYXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYXJyb3cuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzLmFycm93KTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChhcnJvdyk7XG4gICAgICAgIG9wdHMuZnVpQ29uZmlnLm1pZGRsZXdhcmUgPz89IFtdO1xuICAgICAgICBvcHRzLmZ1aUNvbmZpZy5taWRkbGV3YXJlLnB1c2goZnVpQXJyb3coeyBlbGVtZW50OiBhcnJvdyB9KSk7XG4gICAgfVxuICAgIGF1dG9VcGRhdGUobm9kZSwgd3JhcHBlciwgKCkgPT4ge1xuICAgICAgICBjb21wdXRlUG9zaXRpb24obm9kZSwgd3JhcHBlciwgb3B0cy5mdWlDb25maWcpLnRoZW4oKGNvbXB1dGVQb3NpdGlvblJldHVybikgPT4ge1xuICAgICAgICAgICAgb3B0cy5jb21wdXRlUG9zaXRpb25DYWxsYmFjayhjb21wdXRlUG9zaXRpb25SZXR1cm4sIHsgd3JhcHBlciwgY29udGVudCwgYXJyb3cgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHdyYXBwZXIsXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICAgIGFycm93LFxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRFbGVtZW50KGVsZW0pIHtcbiAgICByZXR1cm4gdHlwZW9mIGVsZW0gPT09ICdzdHJpbmcnXG4gICAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKVxuICAgICAgICA6IGVsZW07XG59XG5mdW5jdGlvbiBnZXRDbGFzc2VzKGNsYXNzZXMpIHtcbiAgICBpZiAodHlwZW9mIGNsYXNzZXMgPT09ICdzdHJpbmcnKVxuICAgICAgICBjbGFzc2VzID0gY2xhc3Nlcy5zcGxpdCgnICcpO1xuICAgIGlmICh0eXBlb2YgY2xhc3Nlc1swXSA9PT0gJ3N0cmluZycgJiYgIWNsYXNzZXNbMF0pXG4gICAgICAgIGNsYXNzZXNbMF0gPSAndG9vbHRpcCc7XG4gICAgaWYgKGNsYXNzZXMubGVuZ3RoID09PSAwKVxuICAgICAgICBjbGFzc2VzLnB1c2goJ3Rvb2x0aXAnKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB3cmFwcGVyOiBjbGFzc2VzLm1hcChjID0+IGMgKyAoYyA/ICctJyA6ICcnKSArICd3cmFwcGVyJyksXG4gICAgICAgIGNvbnRlbnQ6IGNsYXNzZXMubWFwKGMgPT4gYyArIChjID8gJy0nIDogJycpICsgJ2NvbnRlbnQnKSxcbiAgICAgICAgYXJyb3c6IGNsYXNzZXMubWFwKGMgPT4gYyArIChjID8gJy0nIDogJycpICsgJ2Fycm93JyksXG4gICAgfTtcbn1cbiIsICI8c2NyaXB0PlxuZXhwb3J0IGxldCBzcmM7XG5leHBvcnQgbGV0IHNpemUgPSBcIjFlbVwiO1xuZXhwb3J0IGxldCBjb2xvciA9IHVuZGVmaW5lZDtcbmV4cG9ydCBsZXQgdGl0bGUgPSB1bmRlZmluZWQ7XG5leHBvcnQgbGV0IGNsYXNzTmFtZSA9IFwiXCI7XG5cbmxldCBpbm5lckh0bWw7XG5sZXQgYXR0cjtcbiQ6IHtcbiAgYXR0ciA9IHt9O1xuICBpZiAoY29sb3IpIHtcbiAgICBpZiAoc3JjLmEuc3Ryb2tlICE9PSBcIm5vbmVcIikge1xuICAgICAgYXR0ci5zdHJva2UgPSBjb2xvcjtcbiAgICB9XG4gICAgaWYgKHNyYy5hLmZpbGwgIT09IFwibm9uZVwiKSB7XG4gICAgICBhdHRyLmZpbGwgPSBjb2xvcjtcbiAgICB9XG4gIH1cbn1cblxuJDoge1xuICBpbm5lckh0bWwgPSAodGl0bGUgPyBgPHRpdGxlPiR7dGl0bGV9PC90aXRsZT5gIDogXCJcIikgKyBzcmMuYztcbn1cbjwvc2NyaXB0PlxuXG48c3ZnXG53aWR0aD17c2l6ZX1cbmhlaWdodD17c2l6ZX1cbnN0cm9rZS13aWR0aD1cIjBcIlxuY2xhc3M9e2NsYXNzTmFtZX1cbnsuLi5zcmMuYX1cbnsuLi5hdHRyfVxueG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxue0BodG1sIGlubmVySHRtbH1cbjwvc3ZnPlxuIiwgIi8vIFJpRWRpdG9yUXVlc3Rpb25NYXJrXG5leHBvcnQgZGVmYXVsdCB7XG4gIGE6IHtcbiAgICB2aWV3Qm94OiAnMCAwIDI0IDI0J1xuICB9LFxuICBjOiAnPGc+PHBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTAgMEgyNFYyNEgwelwiPjwvcGF0aD5cXG48cGF0aCBkPVwiTTEyIDE5Yy44MjggMCAxLjUuNjcyIDEuNSAxLjVTMTIuODI4IDIyIDEyIDIycy0xLjUtLjY3Mi0xLjUtMS41LjY3Mi0xLjUgMS41LTEuNXptMC0xN2MzLjMxNCAwIDYgMi42ODYgNiA2IDAgMi4xNjUtLjc1MyAzLjI5LTIuNjc0IDQuOTIzQzEzLjM5OSAxNC41NiAxMyAxNS4yOTcgMTMgMTdoLTJjMC0yLjQ3NC43ODctMy42OTUgMy4wMzEtNS42MDFDMTUuNTQ4IDEwLjExIDE2IDkuNDM0IDE2IDhjMC0yLjIxLTEuNzktNC00LTRTOCA1Ljc5IDggOHYxSDZWOGMwLTMuMzE0IDIuNjg2LTYgNi02elwiPjwvcGF0aD48L2c+J1xufTsiLCAiLy8gVnNjQ2hlY2tcbmV4cG9ydCBkZWZhdWx0IHtcbiAgYToge1xuICAgIHZpZXdCb3g6ICcwIDAgMTYgMTYnLFxuICAgIGZpbGw6ICdjdXJyZW50Q29sb3InXG4gIH0sXG4gIGM6ICc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTQuNDMxIDMuMzIzbC04LjQ3IDEwLS43OS0uMDM2LTMuMzUtNC43Ny44MTgtLjU3NCAyLjk3OCA0LjI0IDguMDUxLTkuNTA2Ljc2NC42NDZ6XCI+PC9wYXRoPidcbn07IiwgIi8vIFZzY0Nocm9tZUNsb3NlXG5leHBvcnQgZGVmYXVsdCB7XG4gIGE6IHtcbiAgICB2aWV3Qm94OiAnMCAwIDE2IDE2JyxcbiAgICBmaWxsOiAnY3VycmVudENvbG9yJ1xuICB9LFxuICBjOiAnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTcuMTE2IDhsLTQuNTU4IDQuNTU4Ljg4NC44ODRMOCA4Ljg4NGw0LjU1OCA0LjU1OC44ODQtLjg4NEw4Ljg4NCA4bDQuNTU4LTQuNTU4LS44ODQtLjg4NEw4IDcuMTE2IDMuNDQyIDIuNTU4bC0uODg0Ljg4NEw3LjExNiA4elwiPjwvcGF0aD4nXG59OyIsICI8c2NyaXB0IGxhbmc9XCJ0c1wiIGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgaW1wb3J0IHsgd3JpdGFibGUgfSBmcm9tICdzdmVsdGUvc3RvcmUnO1xuICBjb25zdCByZXJlbmRlclN0b3JlID0gd3JpdGFibGU8eyBbaWQ6IHN0cmluZ106IGJvb2xlYW4gfT4oe30pO1xuICBleHBvcnQgZnVuY3Rpb24gcmVyZW5kZXJUaGVtZShpZDogc3RyaW5nKSB7XG4gICAgcmVyZW5kZXJTdG9yZS51cGRhdGUoKG9iaikgPT4ge1xuICAgICAgb2JqW2lkXSA9ICFvYmpbaWRdO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9KTtcbiAgfVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG4gIGltcG9ydCB7IHRvb2x0aXAgfSBmcm9tICdAd2FsdGVyLW9yZy9zdmVsdGUtZmxvYXQnO1xuICBpbXBvcnQgSWNvbiBmcm9tICdzdmVsdGUtaWNvbnMtcGFjay9JY29uLnN2ZWx0ZSc7XG4gIGltcG9ydCBSaUVkaXRvclF1ZXN0aW9uTWFyayBmcm9tICdzdmVsdGUtaWNvbnMtcGFjay9yaS9SaUVkaXRvclF1ZXN0aW9uTWFyayc7XG4gIGltcG9ydCBWc2NDaGVjayBmcm9tICdzdmVsdGUtaWNvbnMtcGFjay92c2MvVnNjQ2hlY2snO1xuICBpbXBvcnQgVnNjQ2hyb21lQ2xvc2UgZnJvbSAnc3ZlbHRlLWljb25zLXBhY2svdnNjL1ZzY0Nocm9tZUNsb3NlJztcbiAgaW1wb3J0IHsgc2hvdWxkVmFsaWRhdGUgfSBmcm9tICdzcmMvcmVuZGVyZXInO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVRvb2x0aXBDb250ZW50KGVycm9yczogY3NzVmFsaWRhdG9yRXJyb3JzKSB7XG4gICAgcmV0dXJuIGVycm9ycy5tYXAoKGVycm9yKSA9PiBgTGluZSAke2Vycm9yLmxpbmV9OiAke2Vycm9yLm1lc3NhZ2V9YCkuam9pbignXFxuICcpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VmFsaWRpdHlEYXRhKHZhbGlkaXR5OiBUaGVtZVsndmFsaWQnXSk6IHtcbiAgICBpY29uOiB0eXBlb2YgUmlFZGl0b3JRdWVzdGlvbk1hcms7XG4gICAgdGV4dDogc3RyaW5nO1xuICB9IHtcbiAgICBzd2l0Y2ggKHZhbGlkaXR5KSB7XG4gICAgICBjYXNlIHRydWU6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWNvbjogVnNjQ2hlY2ssXG4gICAgICAgICAgdGV4dDogJ1ZhbGlkJyxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWNvbjogVnNjQ2hyb21lQ2xvc2UsXG4gICAgICAgICAgdGV4dDogJ0ludmFsaWQnLFxuICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpY29uOiBSaUVkaXRvclF1ZXN0aW9uTWFyayxcbiAgICAgICAgICB0ZXh0OiAnVmFsaWRpdHkgVW5rbm93bicsXG4gICAgICAgIH07XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPGRpdiBjbGFzcz1cInRoZW1lcy13cmFwcGVyXCI+XG4gIHsjZWFjaCBPYmplY3Qua2V5cyh3aW5kb3cuUG9wY29ybi50aGVtZXMpIGFzIGlkfVxuICAgIHtAY29uc3QgdGhlbWUgPSB3aW5kb3cuUG9wY29ybi50aGVtZXNbaWRdfVxuICAgIHtAY29uc3QgeyBpY29uLCB0ZXh0IH0gPSBnZXRWYWxpZGl0eURhdGEodGhlbWUudmFsaWQpfVxuICAgIHsja2V5ICRyZXJlbmRlclN0b3JlW2lkXX1cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aGVtZS1jb250YWluZXJcIiB7aWR9IGRhdGEtZW5hYmxlZD17dGhlbWUuZW5hYmxlZH0+XG4gICAgICAgIDxoMSBjbGFzcz1cInRoZW1lLWlkXCI+XG4gICAgICAgICAge2lkfVxuICAgICAgICAgIHsjaWYgc2hvdWxkVmFsaWRhdGV9XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwidGhlbWUtdmFsaWRpdHlcIlxuICAgICAgICAgICAgICBkYXRhLXZhbHVlPXt0aGVtZS52YWxpZH1cbiAgICAgICAgICAgICAgdXNlOnRvb2x0aXA9e3tcbiAgICAgICAgICAgICAgICBjb250ZW50OiB0aGVtZS52YWxpZCA/IHRleHQgOiBjcmVhdGVUb29sdGlwQ29udGVudCh0aGVtZS5lcnJvcnMpLFxuICAgICAgICAgICAgICAgIHRhcmdldDogJyNQb3Bjb3JuVUktbGF5ZXJzJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEljb24gY29sb3I9XCJjdXJyZW50Q29sb3JcIiBzcmM9e2ljb259IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7L2lmfVxuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGhlbWUtZGVzY3JpcHRpb25cIj57dGhlbWUuZGVzY3JpcHRpb24gPz8gJyd9PC9kaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzcz1cInRoZW1lLXRvZ2dsZVwiXG4gICAgICAgICAgb246Y2xpY2s9eygpID0+IHdpbmRvdy5Qb3Bjb3JuLnRoZW1lc1tpZF0udG9nZ2xlKCl9XG4gICAgICAgICAgb246c3VibWl0PXsoKSA9PiB3aW5kb3cuUG9wY29ybi50aGVtZXNbaWRdLnRvZ2dsZSgpfVxuICAgICAgICA+XG4gICAgICAgICAge3RoZW1lLmVuYWJsZWQgPyAnRGlzYWJsZScgOiAnRW5hYmxlJ31cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICB7L2tleX1cbiAgey9lYWNofVxuPC9kaXY+XG5cbjxzdHlsZT5cbiAgLnRoZW1lcy13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMThyZW0sIDAuNWZyKSk7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1heC1jb250ZW50O1xuICAgIGdhcDogMWVtO1xuICB9XG5cbiAgLnRoZW1lLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XG4gICAgcm93LWdhcDogMC41ZW07XG4gICAgcGFkZGluZzogMC41ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG9wLWJnLW5vcm1hbCk7XG4gIH1cblxuICAudGhlbWUtaWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBnYXA6IDAuMjVlbTtcbiAgICBmb250LXNpemU6IDEuMjVlbTtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB9XG4gIC50aGVtZS12YWxpZGl0eSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgfVxuICAudGhlbWUtdmFsaWRpdHlbZGF0YS12YWx1ZT0ndHJ1ZSddIHtcbiAgICBjb2xvcjogdmFyKC0tcG9wLWdyZWVuKTtcbiAgfVxuICAudGhlbWUtdmFsaWRpdHlbZGF0YS12YWx1ZT0nZmFsc2UnXSB7XG4gICAgY29sb3I6IHZhcigtLXBvcC1yZWQpO1xuICB9XG4gIC50aGVtZS12YWxpZGl0eVtkYXRhLXZhbHVlPSd1bmtub3duJ10ge1xuICAgIGNvbG9yOiB2YXIoLS1wb3AtZ3JheSk7XG4gIH1cblxuICAudGhlbWUtZGVzY3JpcHRpb24ge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogaW5saW5lLWF4aXM7XG4gICAgcGFkZGluZy1ibG9jay1zdGFydDogMC41ZW07XG4gICAgYm9yZGVyLWJsb2NrLXN0YXJ0OiAwLjEyNXJlbSBzb2xpZCB2YXIoLS1wb3AtZmctbm9ybWFsKTtcbiAgICBmb250LXNpemU6IDEuMjVlbTtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC50aGVtZS12YWxpZGl0eSA+IDpnbG9iYWwoc3ZnKSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDAuMTI1ZW07XG4gIH1cblxuICAudGhlbWUtdG9nZ2xlIHtcbiAgICBhbGw6IHVuc2V0O1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC50aGVtZS1jb250YWluZXJbZGF0YS1lbmFibGVkPSd0cnVlJ10gPiAudGhlbWUtdG9nZ2xlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wb3AtcmVkKTtcbiAgfVxuICAudGhlbWUtY29udGFpbmVyW2RhdGEtZW5hYmxlZD0nZmFsc2UnXSA+IC50aGVtZS10b2dnbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBvcC1ncmVlbik7XG4gIH1cbjwvc3R5bGU+XG4iLCAiZXhwb3J0IGNvbnN0IHByZWZpeGVzID0ge1xuICBtYWluOiAnUE9QQ09STl8nLFxuICBxdWlja0NzczogJ1FVSUNLQ1NTXydcbn07XG5cbmV4cG9ydCBjb25zdCBJUEMgPSBwcmVmaXhWYWx1ZXMoe1xuICAvLyBNaXNjXG4gIGdldENvbmZpZzogJ0dFVF9DT05GSUcnLFxuICBnZXRTdHlsZXM6ICdHRVRfU1RZTEVTJyxcbiAgc3RhdHVzTWVzc2FnZTogJ1NUQVRVU19NRVNTQUdFJyxcbiAgZ2V0V2luZG93RGF0YTogJ0dFVF9XSU5ET1dfREFUQScsXG4gIGxvZzogJ0xPRycsXG5cbiAgLy8gVGhlbWVzXG4gIGdldFRoZW1lczogJ0dFVF9USEVNRVMnLFxuICBvblRoZW1lQ2hhbmdlOiAnT05fVEhFTUVfQ0hBTkdFJyxcbiAgc2F2ZVRoZW1lU3RhdGU6ICdTQVZFX1RIRU1FX1NUQVRFJyxcblxuICAvLyBRdWlja0NTU1xuICBnZXRRdWlja0NzczogJ0dFVF9RVUlDS19DU1MnLFxuICBvblF1aWNrQ3NzQ2hhbmdlOiAnT05fUVVJQ0tfQ1NTX0NIQU5HRScsXG4gIGNyZWF0ZVF1aWNrQ3NzTm9kZTogJ0NSRUFURV9RVUlDS19DU1NfTk9ERScsXG4gIGRlbGV0ZVF1aWNrQ3NzTm9kZTogJ0RFTEVURV9RVUlDS19DU1NfTk9ERScsXG4gIHJlbmFtZVF1aWNrQ3NzTm9kZTogJ1JFTkFNRV9RVUlDS19DU1NfTk9ERScsXG4gIHVwZGF0ZVF1aWNrQ3NzRmlsZTogJ1NBVkVfUVVJQ0tfQ1NTX0ZJTEUnLFxufSwgcHJlZml4ZXMubWFpbik7XG5cbmV4cG9ydCBjb25zdCBNRVNTQUdFUyA9IHtcbiAgcXVpY2tDc3M6IHByZWZpeFZhbHVlcyh7XG4gICAgY3JlYXRlZDogJ0NSRUFURUQnLFxuICAgIGRlbGV0ZWQ6ICdERUxFVEVEJyxcbiAgICByZW5hbWVkOiAnUkVOQU1FRCcsXG4gICAgdXBkYXRlZDogJ1VQREFURUQnLFxuICB9LCBwcmVmaXhlcy5xdWlja0NzcyksXG59O1xuXG5leHBvcnQgY29uc3QgUkVOREVSRVIgPSBwcmVmaXhWYWx1ZXMoe1xuICBzdG9wOiAnU1RPUCcsXG59LCBwcmVmaXhlcy5tYWluKTtcblxuZnVuY3Rpb24gcHJlZml4VmFsdWVzPFQgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PihvYmplY3Q6IFQsIHByZWZpeDogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9IGFzIFJlY29yZDxrZXlvZiBULCBzdHJpbmc+O1xuICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3QpIHtcbiAgICByZXN1bHRba2V5XSA9IHByZWZpeCArIG9iamVjdFtrZXldO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCAiaW1wb3J0IHsgSVBDIH0gZnJvbSAnQGNvbW1vbi9jb25zdGFudHMnO1xuXG5leHBvcnQgY2xhc3MgTG9nZ2VyTW9kdWxlIHtcbiAgcHJpdmF0ZSBvdXRwdXQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZHVsZTogc3RyaW5nLCB0eXBlID0gJ2NvbnNvbGUnKSB7XG4gICAgdGhpcy5vdXRwdXQgPSBMb2dnZXJNb2R1bGUucGFyc2VPdXRwdXQodHlwZSk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBwYXJzZU91dHB1dChvdXRwdXQ6IHN0cmluZykge1xuICAgIHN3aXRjaCAob3V0cHV0KSB7XG4gICAgICBjYXNlICdhbnNpJzpcbiAgICAgIGNhc2UgJ3Rlcm1pbmFsJzpcbiAgICAgICAgcmV0dXJuICdhbnNpJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnY29uc29sZSc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcGFyc2VUeXBlKHR5cGU6IHN0cmluZykge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICBjYXNlICd3YXJuJzpcbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgIGNhc2UgJ2RlYnVnJzpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ2xvZyc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcGFyc2VDb2xvcih0eXBlOiBzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2RlYnVnJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdHI6ICdNZWRpdW1TcHJpbmdHcmVlbicsXG4gICAgICAgICAgYXJyOiBbMCwgMjUwLCAxNTRdLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RyOiAnRGVlcFNreUJsdWUnLFxuICAgICAgICAgIGFycjogWzAsIDE5MSwgMjU1XSxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdHI6ICdjcmltc29uJyxcbiAgICAgICAgICBhcnI6IFsyMjAsIDIwLCA2MF0sXG4gICAgICAgIH07XG4gICAgICBjYXNlICd3YXJuJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdHI6ICdEYXJrT3JhbmdlJyxcbiAgICAgICAgICBhcnI6IFsyNTUsIDE0MCwgMF0sXG4gICAgICAgIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0cjogJ2dvbGQnLFxuICAgICAgICAgIGFycjogWzI1NSwgMjE1LCAwXSxcbiAgICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBhbnNpQ29sb3IoY29sb3I6IEFycmF5PG51bWJlcj4sIG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHJldHVybiBgXFx4MWJbMzg7Mjske2NvbG9yWzBdfTske2NvbG9yWzFdfTske2NvbG9yWzJdfW0ke21lc3NhZ2V9XFx4MWJbMG1gO1xuICB9XG5cbiAgYXN5bmMgI2xvZyh0eXBlOiBzdHJpbmcsIG1lc3NhZ2U6IGFueVtdKSB7XG4gICAgdHlwZSA9IExvZ2dlck1vZHVsZS5wYXJzZVR5cGUodHlwZSk7XG4gICAgY29uc3QgbG9nQ29sb3IgPSBMb2dnZXJNb2R1bGUucGFyc2VDb2xvcih0eXBlKTtcblxuICAgIGNvbnN0IGJhbm5lciA9XG4gICAgICB0aGlzLm91dHB1dCA9PT0gJ2Fuc2knXG4gICAgICAgID8gW2BbJHtMb2dnZXJNb2R1bGUuYW5zaUNvbG9yKGxvZ0NvbG9yLmFyciwgJ1BvcGNvcm4nKX0gPiAke3RoaXMubW9kdWxlfV1gXVxuICAgICAgICA6IFtgWyVjUG9wY29ybiVjID4gJHt0aGlzLm1vZHVsZX1dYCwgYGNvbG9yOiAke2xvZ0NvbG9yLnN0cn07YCwgJyddO1xuXG4gICAgY29uc29sZVt0eXBlXSguLi5iYW5uZXIsIC4uLm1lc3NhZ2UpO1xuXG4gICAgLy8gVE9ETzogRG9uJ3Qgc2VuZCBldmVyeXRoaW5nXG4gICAgaWYgKHRoaXMub3V0cHV0ID09PSAnYW5zaScpIHtcbiAgICAgIGNvbnN0IHsgQnJvd3NlcldpbmRvdyB9ID0gYXdhaXQgaW1wb3J0KCdlbGVjdHJvbicpO1xuXG4gICAgICBCcm93c2VyV2luZG93LmdldEFsbFdpbmRvd3MoKS5mb3JFYWNoKCh3aW4pID0+IHdpbi53ZWJDb250ZW50cy5zZW5kKElQQy5sb2csIHR5cGUsIC4uLm1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cblxuICBsb2cgPSAoLi4ubWVzc2FnZTogYW55W10pID0+IHRoaXMuI2xvZygnbG9nJywgbWVzc2FnZSk7XG4gIGluZm8gPSAoLi4ubWVzc2FnZTogYW55W10pID0+IHRoaXMuI2xvZygnaW5mbycsIG1lc3NhZ2UpO1xuICB3YXJuID0gKC4uLm1lc3NhZ2U6IGFueVtdKSA9PiB0aGlzLiNsb2coJ3dhcm4nLCBtZXNzYWdlKTtcbiAgZXJyb3IgPSAoLi4ubWVzc2FnZTogYW55W10pID0+IHRoaXMuI2xvZygnZXJyb3InLCBtZXNzYWdlKTtcbiAgZGVidWcgPSAoLi4ubWVzc2FnZTogYW55W10pID0+IHRoaXMuI2xvZygnZGVidWcnLCBtZXNzYWdlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9nZ2VyTW9kdWxlO1xuIiwgImltcG9ydCBhdXRvQmluZCBmcm9tICdhdXRvLWJpbmQnO1xuaW1wb3J0IHsgcmVyZW5kZXJUaGVtZSB9IGZyb20gJ0B1aS90YWJzL1RoZW1lcy5zdmVsdGUnO1xuaW1wb3J0IHsgY29tbWVudHMsIHNob3VsZFZhbGlkYXRlIH0gZnJvbSAnLi4nO1xuaW1wb3J0IExvZ2dlck1vZHVsZSBmcm9tICdAY29tbW9uL2xvZ2dlcic7XG5jb25zdCBMb2dnZXIgPSBuZXcgTG9nZ2VyTW9kdWxlKCdUaGVtZXMnKTtcblxuZXhwb3J0IGNsYXNzIFRoZW1lIHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgbGluayA9IFBvcGNvcm5OYXRpdmUuaXNTcGxhc2ggPyAncG9wY29ybjovL3NwbGFzaC10aGVtZS8nIDogJ3BvcGNvcm46Ly90aGVtZS8nO1xuXG4gIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBwdWJsaWMgaWQ6IHN0cmluZztcbiAgcHVibGljIGpzb246IHN0cmluZztcbiAgI2VsZW1lbnQ6IEhUTUxMaW5rRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCB0aGVtZURhdGE6IFNpbXBsZVRoZW1lKSB7XG4gICAgYXV0b0JpbmQodGhpcyk7XG5cbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdGhlbWVEYXRhLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLmpzb24gPSB0aGVtZURhdGEuanNvbjtcbiAgICB0aGlzLiNlbmFibGVkID0gdGhlbWVEYXRhLmVuYWJsZWQ7XG5cbiAgICBpZiAoc2hvdWxkVmFsaWRhdGUpIHRoaXMuI3ZhbGlkYXRlKCk7XG4gICAgaWYgKHRoZW1lRGF0YS5lbmFibGVkKSB0aGlzLmVuYWJsZShmYWxzZSk7XG4gIH1cblxuICAjZW5hYmxlZDogYm9vbGVhbjtcbiAgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2VuYWJsZWQ7XG4gIH1cbiAgc2V0IGVuYWJsZWQodmFsdWUpIHtcbiAgICB2YWx1ZSA/IHRoaXMuZW5hYmxlKCkgOiB0aGlzLmRpc2FibGUoKTtcbiAgICB0aGlzLiNlbmFibGVkID0gdmFsdWU7XG4gIH1cblxuICBlbmFibGUoc2F2ZSA9IHRydWUpIHtcbiAgICBpZiAodGhpcy4jZWxlbWVudCkge1xuICAgICAgTG9nZ2VyLmxvZyhgXCIke3RoaXMuaWR9XCIgaXMgYWxyZWFkeSBlbmFibGVkLmApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuI2VuYWJsZWQgPSB0cnVlO1xuXG4gICAgY29uc3QgbGluayA9IHRoaXMuI2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgbGluay5pZCA9IHRoaXMuaWQ7XG4gICAgbGluay5ocmVmID0gVGhlbWUubGluayArIHRoaXMuaWQ7XG4gICAgbGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtcG9wY29ybicsICd0aGVtZScpO1xuICAgIGNvbW1lbnRzLmVuZC5iZWZvcmUobGluayk7XG5cbiAgICBMb2dnZXIubG9nKGBcIiR7dGhpcy5pZH1cIiBlbmFibGVkLmApO1xuICAgIHJlcmVuZGVyVGhlbWUodGhpcy5pZCk7XG4gICAgaWYgKHNhdmUpIFBvcGNvcm5OYXRpdmUuc2F2ZVRoZW1lU3RhdGUodGhpcy5pZCwgdHJ1ZSk7XG4gIH1cbiAgZGlzYWJsZShzYXZlID0gdHJ1ZSkge1xuICAgIGlmICghdGhpcy4jZWxlbWVudCkge1xuICAgICAgTG9nZ2VyLndhcm4oYFwiJHt0aGlzLmlkfVwiIGlzIG5vdCBlbmFibGVkLmApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuI2VuYWJsZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuI2VsZW1lbnQucmVtb3ZlKCk7XG4gICAgdGhpcy4jZWxlbWVudCA9IG51bGw7XG5cbiAgICBMb2dnZXIubG9nKGBcIiR7dGhpcy5pZH1cIiBkaXNhYmxlZC5gKTtcbiAgICByZXJlbmRlclRoZW1lKHRoaXMuaWQpO1xuICAgIGlmIChzYXZlKSBQb3Bjb3JuTmF0aXZlLnNhdmVUaGVtZVN0YXRlKHRoaXMuaWQsIGZhbHNlKTtcbiAgfVxuICB0b2dnbGUoc2F2ZSA9IHRydWUpIHtcbiAgICBpZiAodGhpcy5lbmFibGVkKSB0aGlzLmRpc2FibGUoc2F2ZSk7XG4gICAgZWxzZSB0aGlzLmVuYWJsZShzYXZlKTtcbiAgfVxuXG4gIHByaXZhdGUgcmV2ID0gMDtcbiAgYXN5bmMgdXBkYXRlKCkge1xuICAgIC8vIFRPRE86IEZpZ3VyZSBvdXQgd2h5IGRvaW5nIGZldGNoKCkgZG9lc24ndCB3b3JrXG4gICAgdGhpcy4jZWxlbWVudC5ocmVmID0gVGhlbWUubGluayArIHRoaXMuaWQgKyBgPyR7Kyt0aGlzLnJldn1gO1xuXG4gICAgY29uc3QgcHJvbWlzZSA9IGF3YWl0IGZldGNoKFRoZW1lLmxpbmsgKyB0aGlzLmlkLCB7IGNhY2hlOiAnbm8tc3RvcmUnIH0pO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCBwcm9taXNlLnRleHQoKTtcbiAgICBpZiAoc2hvdWxkVmFsaWRhdGUpIHRoaXMuI3ZhbGlkYXRlKHRleHQpO1xuICB9XG5cbiAgcHVibGljIHZhbGlkOiBib29sZWFuIHwgJ3Vua25vd24nID0gJ3Vua25vd24nO1xuICBwdWJsaWMgZXJyb3JzOiBjc3NWYWxpZGF0b3JFcnJvcnMgPSBbXTtcbiAgYXN5bmMgI3ZhbGlkYXRlKGNvbnRlbnQ/OiBzdHJpbmcpIHtcbiAgICBjb250ZW50ID8/PSBhd2FpdCAoYXdhaXQgZmV0Y2goVGhlbWUubGluayArIHRoaXMuaWQsIHsgY2FjaGU6ICduby1zdG9yZScgfSkpLnRleHQoKTtcblxuICAgIFBvcGNvcm5OYXRpdmUudmFsaWRhdGVDU1MoY29udGVudClcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKFBvcGNvcm5OYXRpdmUuY29uZmlnLnZlcmJvc2UpIExvZ2dlci5kZWJ1ZyhgVmFsaWRhdGVkIFwiJHt0aGlzLmlkfVwiLmAsIHJlc3VsdCk7XG5cbiAgICAgICAgdGhpcy52YWxpZCA9IHJlc3VsdC52YWxpZDtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSByZXN1bHQuZXJyb3JzO1xuICAgICAgICByZXJlbmRlclRoZW1lKHRoaXMuaWQpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBMb2dnZXIuZXJyb3IoYEZhaWxlZCB0byB2YWxpZGF0ZSBcIiR7dGhpcy5pZH1cIi5gLCBlKTtcbiAgICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRoZW1lcyB7XG4gIHN0YXJ0KCkge1xuICAgIHRoaXMud2F0Y2hUaGVtZXMoKTtcbiAgfVxuXG4gIHdhdGNoVGhlbWVzKCkge1xuICAgIFBvcGNvcm5OYXRpdmUub25UaGVtZUNoYW5nZSgoeyBpZCB9KSA9PiB7XG4gICAgICB3aW5kb3cuUG9wY29ybi50aGVtZXNbaWRdLnVwZGF0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvckFsbDxIVE1MTGlua0VsZW1lbnQ+KCdsaW5rW2RhdGEtcG9wY29ybj1cInRoZW1lXCJdJyk7XG4gICAgZm9yIChjb25zdCBlbCBvZiBlbGVtZW50cykge1xuICAgICAgZWwucmVtb3ZlKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZVRoZW1lcyhzaW1wbGVUaGVtZXM6IHsgW2lkOiBzdHJpbmddOiBTaW1wbGVUaGVtZSB9KSB7XG4gIGNvbnN0IHRoZW1lczogeyBbaWQ6IHN0cmluZ106IFRoZW1lIH0gPSB7fTtcbiAgZm9yIChjb25zdCBpZCBpbiBzaW1wbGVUaGVtZXMpIHtcbiAgICB0aGVtZXNbaWRdID0gbmV3IFRoZW1lKGlkLCBzaW1wbGVUaGVtZXNbaWRdKTtcbiAgfVxuXG4gIHJldHVybiB0aGVtZXM7XG59XG4iLCAiPCEtLSBUT0RPOiBJbXByb3ZlIGV2ZXJ5dGhpbmcgaGVyZSAtLT5cbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiIGxhbmc9XCJ0c1wiPlxuICBpbXBvcnQgeyB3cml0YWJsZSwgUmVhZGFibGUgfSBmcm9tICdzdmVsdGUvc3RvcmUnO1xuICBjb25zdCByZXJlbmRlclN0b3JlID0gd3JpdGFibGU8Ym9vbGVhbj4oKTtcbiAgZXhwb3J0IGZ1bmN0aW9uIHJlcmVuZGVyU2lkZWJhcigpIHtcbiAgICByZXJlbmRlclN0b3JlLnVwZGF0ZSgob2JqKSA9PiAhb2JqKTtcbiAgfVxuXG4gIGNvbnN0IHNlbGVjdGVkTm9kZSA9IHdyaXRhYmxlPFF1aWNrQ3NzRmlsZSB8IFF1aWNrQ3NzRm9sZGVyPigpO1xuICBleHBvcnQgY29uc3Qgc2VsZWN0ZWRGaWxlID0gd3JpdGFibGU8UXVpY2tDc3NGaWxlPigpO1xuICBleHBvcnQgY29uc3Qgc2VsZWN0ZWRGb2xkZXIgPSB3cml0YWJsZTxRdWlja0Nzc0ZvbGRlcj4oKTtcbiAgZXhwb3J0IGNvbnN0IGxhdGVzdFNlbGVjdGlvbjogUmVhZGFibGU8UXVpY2tDc3NGaWxlIHwgUXVpY2tDc3NGb2xkZXI+ID0ge1xuICAgIHN1YnNjcmliZTogc2VsZWN0ZWROb2RlLnN1YnNjcmliZSxcbiAgfTtcblxuICBleHBvcnQgY29uc3Qgc3RhdHVzID0gd3JpdGFibGU8UXVpY2tDc3NVSVN0YXR1cz4oe30pO1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG4gIGltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAndHMtZGVib3VuY2UnO1xuICBpbXBvcnQgTW9uYWNvRWRpdG9yLCB7IHR5cGUgYWN0aW9ucywgdHlwZSBjb21tYW5kcyB9IGZyb20gJ0Bjb21wb25lbnRzL1F1aWNrQ3NzL01vbmFjb0VkaXRvci5zdmVsdGUnO1xuICBpbXBvcnQgU2lkZWJhciwgeyBmaWxlU3RhdHVzIH0gZnJvbSAnQGNvbXBvbmVudHMvUXVpY2tDc3MvU2lkZWJhci5zdmVsdGUnO1xuXG4gIGxldCBlZGl0b3JDb250ZW50OiBzdHJpbmc7XG5cbiAgc2VsZWN0ZWRGaWxlLnN1YnNjcmliZSgoZmlsZSkgPT4ge1xuICAgIGlmICghZmlsZSkgcmV0dXJuO1xuXG4gICAgZWRpdG9yQ29udGVudCA9IGZpbGUuY29udGVudDtcbiAgICBzZWxlY3RlZE5vZGUuc2V0KGZpbGUpO1xuICB9KTtcbiAgc2VsZWN0ZWRGb2xkZXIuc3Vic2NyaWJlKChmb2xkZXIpID0+IHtcbiAgICBpZiAoIWZvbGRlcikgcmV0dXJuO1xuXG4gICAgc2VsZWN0ZWROb2RlLnNldChmb2xkZXIpO1xuICB9KTtcblxuICBsZXQgYWN0aW9uczogYWN0aW9ucyA9IFtcbiAgICB7XG4gICAgICBpZDogJ3NhdmUnLFxuICAgICAgbGFiZWw6ICdTYXZlIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZmlsZScsXG4gICAgICBoYW5kbGVyOiBzYXZlLFxuICAgIH0sXG4gIF07XG4gIGxldCBjb21tYW5kczogY29tbWFuZHMgPSBbXG4gICAge1xuICAgICAga2V5YmluZGluZzogKEtleUNvZGUsIEtleU1vZCkgPT4gS2V5TW9kLkN0cmxDbWQgfCBLZXlDb2RlLktleVMsXG4gICAgICBoYW5kbGVyOiBzYXZlLFxuICAgIH0sXG4gIF07XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKCkge1xuICAgICRmaWxlU3RhdHVzWyRzZWxlY3RlZEZpbGUubG9jYXRpb25dID8/PSB7fTtcbiAgICAkZmlsZVN0YXR1c1skc2VsZWN0ZWRGaWxlLmxvY2F0aW9uXS51bnNhdmVkID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNhdmUoKSB7XG4gICAgJGZpbGVTdGF0dXNbJHNlbGVjdGVkRmlsZS5sb2NhdGlvbl0udW5zYXZlZCA9IGZhbHNlO1xuICAgIFBvcGNvcm5OYXRpdmUudXBkYXRlUXVpY2tDc3NGaWxlKCRzZWxlY3RlZEZpbGUubG9jYXRpb24sIGVkaXRvckNvbnRlbnQpO1xuICB9XG5cbiAgbGV0IHJlY2FsY3VsYXRlU2l6ZTogTW9uYWNvRWRpdG9yWydyZWNhbGN1bGF0ZVNpemUnXTtcbjwvc2NyaXB0PlxuXG48ZGl2IGNsYXNzPVwicXVpY2tDc3Mtd3JhcHBlclwiPlxuICB7I2tleSAkcmVyZW5kZXJTdG9yZX1cbiAgICA8U2lkZWJhciBvbjpyZXNpemU9e2RlYm91bmNlKHJlY2FsY3VsYXRlU2l6ZSwgNTApfSAvPlxuICB7L2tleX1cbiAgeyNpZiAkc2VsZWN0ZWRGaWxlfVxuICAgIDxkaXYgY2xhc3M9XCJzdGF0dXMtYmFyXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInNlbGVjdGVkLWZpbGVcIj57JHNlbGVjdGVkRmlsZS5sb2NhdGlvbn08L3NwYW4+XG4gICAgICB7I2lmICRzdGF0dXMudHlwZX1cbiAgICAgICAgPGRpdiBjbGFzcz1cInN0YXR1c1wiIGRhdGEtdHlwZT17JHN0YXR1cy50eXBlfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHVzLW1lc3NhZ2VcIj57JHN0YXR1cy5tZXNzYWdlfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIHsvaWZ9XG4gICAgPC9kaXY+XG4gICAgPE1vbmFjb0VkaXRvclxuICAgICAgb246Y2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICBiaW5kOmNvbnRlbnQ9e2VkaXRvckNvbnRlbnR9XG4gICAgICBiaW5kOnJlY2FsY3VsYXRlU2l6ZVxuICAgICAge2FjdGlvbnN9XG4gICAgICB7Y29tbWFuZHN9XG4gICAgLz5cbiAgezplbHNlfVxuICAgIDxzcGFuIGNsYXNzPVwibm8tZmlsZS1zZWxlY3RlZFwiPlNlbGVjdCBhIGZpbGUgdG8gZWRpdDwvc3Bhbj5cbiAgey9pZn1cbjwvZGl2PlxuXG48c3R5bGU+XG4gIC5xdWlja0Nzcy13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAnc2lkZWJhciBzdGF0dXMnXG4gICAgICAnc2lkZWJhciBlZGl0b3InO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcbiAgICBnYXA6IDFyZW07XG4gICAgYmxvY2stc2l6ZTogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLnF1aWNrQ3NzLXdyYXBwZXIgPiA6Z2xvYmFsKC5zaWRlYmFyKSB7XG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xuICB9XG5cbiAgLnF1aWNrQ3NzLXdyYXBwZXIgPiA6Z2xvYmFsKC5tb25hY28td3JhcHBlcikge1xuICAgIGdyaWQtYXJlYTogZWRpdG9yO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAucXVpY2tDc3Mtd3JhcHBlciA+IC5zdGF0dXMtYmFyIHtcbiAgICBncmlkLWFyZWE6IHN0YXR1cztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtaW4tYmxvY2stc2l6ZTogMS41ZW07XG4gICAgcGFkZGluZzogMC4yNWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBvcC1iZy1ub3JtYWwpO1xuICB9XG48L3N0eWxlPlxuIiwgIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiIGxhbmc9XCJ0c1wiPlxuICBleHBvcnQgdHlwZSBhY3Rpb25zID0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBoYW5kbGVyOiAoKSA9PiB2b2lkO1xuICB9W107XG5cbiAgZXhwb3J0IHR5cGUgY29tbWFuZHMgPSB7XG4gICAga2V5YmluZGluZzogKFxuICAgICAgS2V5Q29kZTogdHlwZW9mIG1vbmFjby5LZXlDb2RlLFxuICAgICAgS2V5TW9kOiB0eXBlb2YgbW9uYWNvLktleU1vZFxuICAgICkgPT4gbnVtYmVyO1xuICAgIGhhbmRsZXI6ICgpID0+IHZvaWQ7XG4gICAgY29udGV4dD86IHN0cmluZztcbiAgfVtdO1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG4gIGltcG9ydCB7IG9uTW91bnQgfSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ3RzLWRlYm91bmNlJztcbiAgaW1wb3J0IGxvYWRlciBmcm9tICdAbW9uYWNvLWVkaXRvci9sb2FkZXInO1xuICBpbXBvcnQgdHlwZSBtb25hY28gZnJvbSAnbW9uYWNvLXR5cGVzJzsgLy8gVE9ETzogVXNlIHRoZSBzY3JpcHQgaW5zdGVhZCBvZiB1c2luZyB0aGlzXG5cbiAgbGV0IGVkaXRvckVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xuICBleHBvcnQgbGV0IGVkaXRvcjogbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUNvZGVFZGl0b3IgPSBudWxsO1xuICBleHBvcnQgbGV0IGNvbnRlbnQ6IHN0cmluZztcbiAgZXhwb3J0IGxldCBhY3Rpb25zOiBhY3Rpb25zID0gW107XG4gIGV4cG9ydCBsZXQgY29tbWFuZHM6IGNvbW1hbmRzID0gW107XG4gIGV4cG9ydCBsZXQgb3B0aW9uczogbW9uYWNvLmVkaXRvci5JRWRpdG9yQ29uc3RydWN0aW9uT3B0aW9ucyA9IHt9O1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCk7XG5cbiAgbGV0IGxvYWRlZCA9IGZhbHNlO1xuICBvbk1vdW50KGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBtb25hY28gPSBhd2FpdCBsb2FkZXIuaW5pdCgpO1xuXG4gICAgbW9uYWNvLmVkaXRvci5vbkRpZENyZWF0ZUVkaXRvcigoKSA9PiB7XG4gICAgICBsb2FkZWQgPSB0cnVlO1xuICAgICAgcmVjYWxjdWxhdGVTaXplKCk7XG4gICAgICBkaXNwYXRjaCgncmVhZHknKTtcbiAgICB9KTtcblxuICAgIGVkaXRvciA9IG1vbmFjby5lZGl0b3IuY3JlYXRlKGVkaXRvckVsZW1lbnQsIHtcbiAgICAgIGxhbmd1YWdlOiAnY3NzJyxcbiAgICAgIHRoZW1lOiAndnMtZGFyaycsXG4gICAgICAuLi5vcHRpb25zLFxuXG4gICAgICAvLyBPdmVycmlkZXMgdGhlIG9wdGlvbnMgbm8gbWF0dGVyIHdoYXRcbiAgICAgIHZhbHVlOiBjb250ZW50LFxuICAgIH0pO1xuXG4gICAgY29uc3QgYWN0dWFsQ29tbWFuZHMgPSBjb21tYW5kcy5tYXAoKGNvbW1hbmQpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmNvbW1hbmQsXG4gICAgICAgIGtleWJpbmRpbmc6IGNvbW1hbmQua2V5YmluZGluZyhtb25hY28uS2V5Q29kZSwgbW9uYWNvLktleU1vZCksXG4gICAgICB9O1xuICAgIH0pO1xuICAgIGZvciAoY29uc3QgY29tbWFuZCBvZiBhY3R1YWxDb21tYW5kcykge1xuICAgICAgZWRpdG9yLmFkZENvbW1hbmQoXG4gICAgICAgIGNvbW1hbmQua2V5YmluZGluZyxcbiAgICAgICAgY29tbWFuZC5oYW5kbGVyLFxuICAgICAgICBjb21tYW5kLmNvbnRleHQgPz8gdW5kZWZpbmVkXG4gICAgICApO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGFjdGlvbiBvZiBhY3Rpb25zKSB7XG4gICAgICBjb25zdCB7IGlkLCBsYWJlbCwgaGFuZGxlciB9ID0gYWN0aW9uO1xuICAgICAgZWRpdG9yLmFkZEFjdGlvbih7XG4gICAgICAgIGlkOiAnY3VzdG9tLicgKyBpZCxcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIGtleWJpbmRpbmdzOiBbXSxcbiAgICAgICAgcnVuOiBoYW5kbGVyLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZWRpdG9yLm9uRGlkQ2hhbmdlTW9kZWxDb250ZW50KCgpID0+IHtcbiAgICAgIGNvbnN0IG5ld0NvbnRlbnQgPSBlZGl0b3IuZ2V0VmFsdWUoKTtcbiAgICAgIGlmIChuZXdDb250ZW50ID09PSBjb250ZW50KSByZXR1cm47XG5cbiAgICAgIGlnbm9yZU5leHQgPSB0cnVlO1xuICAgICAgY29udGVudCA9IG5ld0NvbnRlbnQ7XG4gICAgICBkaXNwYXRjaCgnY2hhbmdlJywgY29udGVudCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZWRpdG9yLmRpc3Bvc2UoKTtcbiAgICAgIGxvYWRlZCA9IGZhbHNlO1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIFRPRE86IEZpeCB0aGlzIG1vbnN0ZXJcbiAgLy8gV2hlbmV2ZXIgdGhlIGNvbnRlbnQgdmFyaWFibGUgY2hhbmdlcywgdXBkYXRlIE1vbmFjb1xuICBsZXQgaWdub3JlTmV4dCA9IGZhbHNlO1xuICAkOiBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnICYmIGxvYWRlZCkge1xuICAgIGlmICghaWdub3JlTmV4dCkgZWRpdG9yLmdldE1vZGVsKCkuc2V0VmFsdWUoY29udGVudCk7XG4gICAgaWdub3JlTmV4dCA9IGZhbHNlO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHJlY2FsY3VsYXRlU2l6ZSgpIHtcbiAgICBpZiAoIWxvYWRlZCkgcmV0dXJuO1xuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBlZGl0b3IubGF5b3V0KHsgd2lkdGg6IDAsIGhlaWdodDogMCB9KTtcbiAgICAgIGNvbnN0IHBhcmVudFJlY3QgPSBlZGl0b3JFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBlZGl0b3IubGF5b3V0KHtcbiAgICAgICAgd2lkdGg6IHBhcmVudFJlY3Qud2lkdGgsXG4gICAgICAgIGhlaWdodDogcGFyZW50UmVjdC5oZWlnaHQsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdmVsdGU6d2luZG93IG9uOnJlc2l6ZT17ZGVib3VuY2UocmVjYWxjdWxhdGVTaXplLCA1MCl9IC8+XG5cbjxkaXYgY2xhc3M9XCJtb25hY28td3JhcHBlclwiPlxuICB7I2lmICFsb2FkZWR9XG4gICAgPHAgY2xhc3M9XCJsb2FkaW5nLW92ZXJsYXlcIj5Mb2FkaW5nIG1vbmFjbyBlZGl0b3IuLi48L3A+XG4gIHsvaWZ9XG4gIDxkaXYgYmluZDp0aGlzPXtlZGl0b3JFbGVtZW50fSBjbGFzcz1cIm1vbmFjby1lZGl0b3JcIiAvPlxuPC9kaXY+XG5cbjxzdHlsZT5cbiAgLm1vbmFjby1lZGl0b3Ige1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbjwvc3R5bGU+XG4iLCAiLy8gVnNjTmV3RmlsZVxuZXhwb3J0IGRlZmF1bHQge1xuICBhOiB7XG4gICAgdmlld0JveDogJzAgMCAxNiAxNicsXG4gICAgZmlsbDogJ2N1cnJlbnRDb2xvcidcbiAgfSxcbiAgYzogJzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk00IDdIM1Y0SDBWM2gzVjBoMXYzaDN2MUg0djN6bTYuNS01LjlsMy40IDMuNS4xLjR2OC41bC0uNS41aC0xMGwtLjUtLjVWOGgxdjVoOVY2SDlWMkg1VjFoNS4ybC4zLjF6TTEwIDJ2M2gyLjlMMTAgMnpcIj48L3BhdGg+J1xufTsiLCAiLy8gVnNjTmV3Rm9sZGVyXG5leHBvcnQgZGVmYXVsdCB7XG4gIGE6IHtcbiAgICB2aWV3Qm94OiAnMCAwIDE2IDE2JyxcbiAgICBmaWxsOiAnY3VycmVudENvbG9yJ1xuICB9LFxuICBjOiAnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTcgM0g0VjBIM3YzSDB2MWgzdjNoMVY0aDNWM3pNNS41IDdINVY2aC4zbC44LS45LjQtLjFIMTRWNEg4VjNoNi41bC41LjV2MTBsLS41LjVoLTEzbC0uNS0uNVY1aDF2OGgxMlY2SDYuN2wtLjguOS0uNC4xelwiPjwvcGF0aD4nXG59OyIsICIvLyBWc2NSZW1vdmVcbmV4cG9ydCBkZWZhdWx0IHtcbiAgYToge1xuICAgIHZpZXdCb3g6ICcwIDAgMTYgMTYnLFxuICAgIGZpbGw6ICdjdXJyZW50Q29sb3InXG4gIH0sXG4gIGM6ICc8cGF0aCBkPVwiTTE1IDhIMVY3aDE0djF6XCI+PC9wYXRoPidcbn07IiwgIi8vIEFpRmlsbEZvbGRlck9wZW5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYToge1xuICAgIHZpZXdCb3g6ICcwIDAgMTAyNCAxMDI0J1xuICB9LFxuICBjOiAnPHBhdGggZD1cIk05MjggNDQ0SDgyMFYzMzAuNGMwLTE3LjctMTQuMy0zMi0zMi0zMkg0NzNMMzU1LjcgMTg2LjJhOC4xNSA4LjE1IDAgMCAwLTUuNS0yLjJIOTZjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjU5MmMwIDE3LjcgMTQuMyAzMiAzMiAzMmg2OThjMTMgMCAyNC44LTcuOSAyOS43LTIwbDEzNC0zMzJjMS41LTMuOCAyLjMtNy45IDIuMy0xMiAwLTE3LjctMTQuMy0zMi0zMi0zMnptLTE4MCAwSDIzOGMtMTMgMC0yNC44IDcuOS0yOS43IDIwTDEzNiA2NDMuMlYyNTZoMTg4LjVsMTE5LjYgMTE0LjRINzQ4VjQ0NHpcIj48L3BhdGg+J1xufTsiLCAiLy8gQWlGaWxsRm9sZGVyXG5leHBvcnQgZGVmYXVsdCB7XG4gIGE6IHtcbiAgICB2aWV3Qm94OiAnMCAwIDEwMjQgMTAyNCdcbiAgfSxcbiAgYzogJzxwYXRoIGQ9XCJNODgwIDI5OC40SDUyMUw0MDMuNyAxODYuMmE4LjE1IDguMTUgMCAwIDAtNS41LTIuMkgxNDRjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjU5MmMwIDE3LjcgMTQuMyAzMiAzMiAzMmg3MzZjMTcuNyAwIDMyLTE0LjMgMzItMzJWMzMwLjRjMC0xNy43LTE0LjMtMzItMzItMzJ6XCI+PC9wYXRoPidcbn07IiwgIi8vIEZhQnJhbmRzQ3NzM1xuZXhwb3J0IGRlZmF1bHQge1xuICBhOiB7XG4gICAgdmlld0JveDogJzAgMCA1MTIgNTEyJ1xuICB9LFxuICBjOiAnPHBhdGggZD1cIk00ODAgMzJsLTY0IDM2OC0yMjMuMyA4MEwwIDQwMGwxOS42LTk0LjhoODJsLTggNDAuNkwyMTAgMzkwLjJsMTM0LjEtNDQuNCAxOC44LTk3LjFIMjkuNWwxNi04MmgzMzMuN2wxMC41LTUyLjdINTYuM2wxNi4zLTgySDQ4MHpcIj48L3BhdGg+J1xufTsiLCAiLy8gVnNjQ2lyY2xlRmlsbFxuZXhwb3J0IGRlZmF1bHQge1xuICBhOiB7XG4gICAgdmlld0JveDogJzAgMCAxNiAxNicsXG4gICAgZmlsbDogJ2N1cnJlbnRDb2xvcidcbiAgfSxcbiAgYzogJzxwYXRoIGQ9XCJNOCA0Yy4zNjcgMCAuNzIxLjA0OCAxLjA2My4xNDVhMy45NDMgMy45NDMgMCAwIDEgMS43NjIgMS4wMzEgMy45NDQgMy45NDQgMCAwIDEgMS4wMyAxLjc2MmMuMDk3LjM0LjE0NS42OTUuMTQ1IDEuMDYyIDAgLjM2Ny0uMDQ4LjcyMS0uMTQ1IDEuMDYzYTMuOTQgMy45NCAwIDAgMS0xLjAzIDEuNzY1IDQuMDE3IDQuMDE3IDAgMCAxLTEuNzYyIDEuMDMxQzguNzIgMTEuOTUzIDguMzY3IDEyIDggMTJzLS43MjEtLjA0Ny0xLjA2My0uMTRhNC4wNTYgNC4wNTYgMCAwIDEtMS43NjUtMS4wMzJBNC4wNTUgNC4wNTUgMCAwIDEgNC4xNCA5LjA2MiAzLjk5MiAzLjk5MiAwIDAgMSA0IDhjMC0uMzY3LjA0Ny0uNzIxLjE0LTEuMDYzYTQuMDIgNC4wMiAwIDAgMSAuNDA3LS45NTNBNC4wODkgNC4wODkgMCAwIDEgNS45OCA0LjU0NmEzLjk0IDMuOTQgMCAwIDEgLjk1Ny0uNDAxQTMuODkgMy44OSAwIDAgMSA4IDR6XCI+PC9wYXRoPidcbn07IiwgIjwhLS0gVE9ETzogV2hlbiB5b3UgY2xpY2sgdGhlIGZpbGUsIHRoZSBwYXJlbnQgaXMgc2VsZWN0ZWQgLS0+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG4gIGltcG9ydCB7IGZpbGVTdGF0dXMgfSBmcm9tICdAY29tcG9uZW50cy9RdWlja0Nzcy9TaWRlYmFyLnN2ZWx0ZSc7XG4gIGltcG9ydCB7IHNlbGVjdGVkRmlsZSB9IGZyb20gJ0B1aS90YWJzL1F1aWNrQ3NzLnN2ZWx0ZSc7XG4gIGltcG9ydCBJY29uIGZyb20gJ3N2ZWx0ZS1pY29ucy1wYWNrL0ljb24uc3ZlbHRlJztcbiAgaW1wb3J0IEZhQnJhbmRzQ3NzMyBmcm9tICdzdmVsdGUtaWNvbnMtcGFjay9mYS9GYUJyYW5kc0NzczMnO1xuICBpbXBvcnQgVnNjQ2lyY2xlRmlsbCBmcm9tICdzdmVsdGUtaWNvbnMtcGFjay92c2MvVnNjQ2lyY2xlRmlsbCc7XG5cbiAgZXhwb3J0IGxldCBmaWxlOiBRdWlja0Nzc0ZpbGU7XG4gIGV4cG9ydCBsZXQgcmVuYW1lID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgZGVwdGggPSAwO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcbiAgICBzZWxlY3RlZEZpbGUuc2V0KGZpbGUpO1xuICB9XG5cbiAgbGV0IGlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAkOiBpZiAoaW5wdXQpIHtcbiAgICBpbnB1dC5mb2N1cygpO1xuICAgIGlucHV0LnNldFNlbGVjdGlvblJhbmdlKDAsIGlucHV0LnZhbHVlLmxlbmd0aCAtIDQpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlUmVuYW1lKCkge1xuICAgIGlmIChyZW5hbWUgJiYgaW5wdXQ/LnZhbHVlICE9PSBmaWxlLm5hbWUpXG4gICAgICBQb3Bjb3JuTmF0aXZlLnJlbmFtZVF1aWNrQ3NzTm9kZShmaWxlLmxvY2F0aW9uLCBpbnB1dC52YWx1ZSk7XG5cbiAgICByZW5hbWUgPSAhcmVuYW1lO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZUtleVByZXNzKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgIGNhc2UgJ0YyJzpcbiAgICAgICAgdG9nZ2xlUmVuYW1lKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgIGlmIChyZW5hbWUpIHRvZ2dsZVJlbmFtZSgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48YnV0dG9uXG4gIGNsYXNzPVwiaXRlbSBmaWxlXCJcbiAgc3R5bGU9XCItLWRlcHRoOiB7ZGVwdGh9XCJcbiAgb246Y2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgb246c3VibWl0fHN0b3BQcm9wYWdhdGlvbj17aGFuZGxlU3VibWl0fVxuICBvbjpkYmxjbGljaz17dG9nZ2xlUmVuYW1lfVxuICBvbjprZXlkb3dufHNlbGZ8c3RvcFByb3BhZ2F0aW9uPXtoYW5kbGVLZXlQcmVzc31cbj5cbiAgPEljb24gY29sb3I9XCJjdXJyZW50Q29sb3JcIiBzcmM9e0ZhQnJhbmRzQ3NzM30gLz5cbiAgeyNpZiByZW5hbWV9XG4gICAgPGlucHV0XG4gICAgICBjbGFzcz1cInJlbmFtZS1pbnB1dFwiXG4gICAgICBhdXRvY29ycmVjdD1cIm9mZlwiXG4gICAgICBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiXG4gICAgICBzcGVsbGNoZWNrPVwiZmFsc2VcIlxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgdmFsdWU9e2ZpbGUubmFtZX1cbiAgICAgIGJpbmQ6dGhpcz17aW5wdXR9XG4gICAgICBvbjprZXlkb3duPXtoYW5kbGVLZXlQcmVzc31cbiAgICAgIG9uOmZvY3Vzb3V0PXtyZW5hbWUgJiYgdG9nZ2xlUmVuYW1lfVxuICAgIC8+XG4gIHs6ZWxzZX1cbiAgICA8c3BhbiBjbGFzcz1cIml0ZW0tbmFtZVwiPntmaWxlLm5hbWV9PC9zcGFuPlxuICB7L2lmfVxuICB7I2lmICRmaWxlU3RhdHVzPy5bZmlsZS5sb2NhdGlvbl0/LnVuc2F2ZWR9XG4gICAgPEljb24gY29sb3I9XCJjdXJyZW50Q29sb3JcIiBzcmM9e1ZzY0NpcmNsZUZpbGx9IC8+XG4gIHsvaWZ9XG48L2J1dHRvbj5cbiIsICI8c2NyaXB0IGxhbmc9XCJ0c1wiPlxuICBpbXBvcnQgeyBzZWxlY3RlZEZvbGRlciB9IGZyb20gJ0B1aS90YWJzL1F1aWNrQ3NzLnN2ZWx0ZSc7XG4gIGltcG9ydCBJY29uIGZyb20gJ3N2ZWx0ZS1pY29ucy1wYWNrL0ljb24uc3ZlbHRlJztcbiAgaW1wb3J0IEFpRmlsbEZvbGRlck9wZW4gZnJvbSAnc3ZlbHRlLWljb25zLXBhY2svYWkvQWlGaWxsRm9sZGVyT3Blbic7XG4gIGltcG9ydCBBaUZpbGxGb2xkZXIgZnJvbSAnc3ZlbHRlLWljb25zLXBhY2svYWkvQWlGaWxsRm9sZGVyJztcbiAgaW1wb3J0IEZpbGUgZnJvbSAnLi9GaWxlLnN2ZWx0ZSc7XG5cbiAgZXhwb3J0IGxldCBmb2xkZXI6IFF1aWNrQ3NzRm9sZGVyO1xuICBleHBvcnQgbGV0IHJlbmFtZSA9IGZhbHNlO1xuICBleHBvcnQgbGV0IG9wZW5lZCA9IHRydWU7XG4gIGV4cG9ydCBsZXQgZGVwdGggPSAwO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcbiAgICBvcGVuZWQgPSAhb3BlbmVkO1xuICAgIHNlbGVjdGVkRm9sZGVyLnNldChmb2xkZXIpO1xuICB9XG5cbiAgbGV0IGlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAkOiBpZiAoaW5wdXQpIHtcbiAgICBpbnB1dC5mb2N1cygpO1xuICAgIGlucHV0LnNldFNlbGVjdGlvblJhbmdlKDAsIGlucHV0LnZhbHVlLmxlbmd0aCk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVSZW5hbWUoKSB7XG4gICAgaWYgKHJlbmFtZSAmJiBpbnB1dD8udmFsdWUgIT09IGZvbGRlci5uYW1lKVxuICAgICAgUG9wY29ybk5hdGl2ZS5yZW5hbWVRdWlja0Nzc05vZGUoZm9sZGVyLmxvY2F0aW9uLCBpbnB1dC52YWx1ZSk7XG5cbiAgICByZW5hbWUgPSAhcmVuYW1lO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZUtleVByZXNzKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgIGNhc2UgJ0YyJzpcbiAgICAgICAgdG9nZ2xlUmVuYW1lKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgIGlmIChyZW5hbWUpIHRvZ2dsZVJlbmFtZSgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48YnV0dG9uXG4gIGNsYXNzPVwiaXRlbSBmb2xkZXJcIlxuICBzdHlsZT1cIi0tZGVwdGg6IHtkZXB0aH1cIlxuICBkYXRhLW9wZW5lZD17b3BlbmVkfVxuICBvbjpjbGljaz17aGFuZGxlU3VibWl0fVxuICBvbjpzdWJtaXR8c3RvcFByb3BhZ2F0aW9uPXtoYW5kbGVTdWJtaXR9XG4gIG9uOmRibGNsaWNrPXt0b2dnbGVSZW5hbWV9XG4gIG9uOmtleWRvd258c2VsZnxzdG9wUHJvcGFnYXRpb249e2hhbmRsZUtleVByZXNzfVxuPlxuICB7I2lmIG9wZW5lZH1cbiAgICA8SWNvbiBjb2xvcj1cImN1cnJlbnRDb2xvclwiIHNyYz17QWlGaWxsRm9sZGVyT3Blbn0gLz5cbiAgezplbHNlfVxuICAgIDxJY29uIGNvbG9yPVwiY3VycmVudENvbG9yXCIgc3JjPXtBaUZpbGxGb2xkZXJ9IC8+XG4gIHsvaWZ9XG4gIHsjaWYgcmVuYW1lfVxuICAgIDxpbnB1dFxuICAgICAgY2xhc3M9XCJyZW5hbWUtaW5wdXRcIlxuICAgICAgYXV0b2NvcnJlY3Q9XCJvZmZcIlxuICAgICAgYXV0b2NhcGl0YWxpemU9XCJvZmZcIlxuICAgICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIHZhbHVlPXtmb2xkZXIubmFtZX1cbiAgICAgIGJpbmQ6dGhpcz17aW5wdXR9XG4gICAgICBvbjprZXlkb3duPXtoYW5kbGVLZXlQcmVzc31cbiAgICAgIG9uOmZvY3Vzb3V0PXtyZW5hbWUgJiYgdG9nZ2xlUmVuYW1lfVxuICAgIC8+XG4gIHs6ZWxzZX1cbiAgICA8c3BhbiBjbGFzcz1cIml0ZW0tbmFtZVwiPntmb2xkZXIubmFtZX08L3NwYW4+XG4gIHsvaWZ9XG48L2J1dHRvbj5cbnsjaWYgb3BlbmVkfVxuICB7I2VhY2ggZm9sZGVyLmZpbGVzIGFzIGl0ZW19XG4gICAgeyNpZiAnZmlsZXMnIGluIGl0ZW19XG4gICAgICA8c3ZlbHRlOnNlbGYgZm9sZGVyPXtpdGVtfSBkZXB0aD17ZGVwdGggKyAxfSAvPlxuICAgIHs6ZWxzZX1cbiAgICAgIDxGaWxlIGZpbGU9e2l0ZW19IGRlcHRoPXtkZXB0aCArIDF9IC8+XG4gICAgey9pZn1cbiAgey9lYWNofVxuey9pZn1cblxuPHN0eWxlPlxuICA6Z2xvYmFsKC5pdGVtKSB7XG4gICAgYWxsOiB1bnNldDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcbiAgICBnYXA6IDAuMjVlbTtcbiAgICBibG9jay1zaXplOiAxZW07XG4gICAgaW5saW5lLXNpemU6IGNhbGMoMTAwJSAtIDFyZW0gKiB2YXIoLS1kZXB0aCwgMCkpO1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKDFyZW0gKiB2YXIoLS1kZXB0aCwgMCkpO1xuICAgIHBhZGRpbmctYmxvY2s6IDAuMjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgOmdsb2JhbCguaXRlbSA+IHN2Zykge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG5cbiAgOmdsb2JhbCguaXRlbSA+IC5yZW5hbWUtaW5wdXQpIHtcbiAgICBhbGw6IHVuc2V0O1xuICAgIGlubGluZS1zaXplOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbjwvc3R5bGU+XG4iLCAiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCIgbGFuZz1cInRzXCI+XG4gIGltcG9ydCB7IHdyaXRhYmxlIH0gZnJvbSAnc3ZlbHRlL3N0b3JlJztcbiAgZXhwb3J0IGNvbnN0IGZpbGVTdGF0dXMgPSB3cml0YWJsZTx7IFtsb2NhdGlvbjogc3RyaW5nXTogUXVpY2tDc3NVSUZpbGVTdGF0dXMgfT4oXG4gICAge31cbiAgKTtcbjwvc2NyaXB0PlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuICBpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcbiAgaW1wb3J0IEljb24gZnJvbSAnc3ZlbHRlLWljb25zLXBhY2svSWNvbi5zdmVsdGUnO1xuICBpbXBvcnQgVnNjTmV3RmlsZSBmcm9tICdzdmVsdGUtaWNvbnMtcGFjay92c2MvVnNjTmV3RmlsZSc7XG4gIGltcG9ydCBWc2NOZXdGb2xkZXIgZnJvbSAnc3ZlbHRlLWljb25zLXBhY2svdnNjL1ZzY05ld0ZvbGRlcic7XG4gIGltcG9ydCBWc2NSZW1vdmUgZnJvbSAnc3ZlbHRlLWljb25zLXBhY2svdnNjL1ZzY1JlbW92ZSc7XG4gIGltcG9ydCB7IGxhdGVzdFNlbGVjdGlvbiwgc2VsZWN0ZWRGb2xkZXIgfSBmcm9tICdAdWkvdGFicy9RdWlja0Nzcy5zdmVsdGUnO1xuICBpbXBvcnQgRm9sZGVyIGZyb20gJy4vRm9sZGVyLnN2ZWx0ZSc7XG5cbiAgbGV0IGVsZW1lbnREaXY6IEhUTUxEaXZFbGVtZW50O1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCk7XG5cbiAgb25Nb3VudCgoKSA9PiB7XG4gICAgY29uc3QgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKG11dGF0aW9uKSA9PiB7XG4gICAgICBkaXNwYXRjaCgncmVzaXplJywgbXV0YXRpb25bMF0pO1xuICAgIH0pO1xuICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZWxlbWVudERpdik7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH07XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZURlbGV0ZSgpIHtcbiAgICBQb3Bjb3JuTmF0aXZlLmRlbGV0ZVF1aWNrQ3NzTm9kZSgkbGF0ZXN0U2VsZWN0aW9uLmxvY2F0aW9uKTtcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVOZXdGaWxlKCkge1xuICAgIFBvcGNvcm5OYXRpdmUuY3JlYXRlUXVpY2tDc3NOb2RlKCRzZWxlY3RlZEZvbGRlci5sb2NhdGlvbiwgJ2ZpbGUnKTtcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVOZXdGb2xkZXIoKSB7XG4gICAgUG9wY29ybk5hdGl2ZS5jcmVhdGVRdWlja0Nzc05vZGUoJHNlbGVjdGVkRm9sZGVyLmxvY2F0aW9uLCAnZm9sZGVyJyk7XG4gIH1cbjwvc2NyaXB0PlxuXG48ZGl2IGNsYXNzPVwic2lkZWJhclwiIHN0eWxlPVwid2lkdGg6IDIyY2g7XCIgYmluZDp0aGlzPXtlbGVtZW50RGl2fT5cbiAgPGRpdiBjbGFzcz1cImFjdGlvbi1iYXJcIj5cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cImFjdGlvblwiXG4gICAgICBkYXRhLWFjdGlvbj1cImRlbGV0ZVwiXG4gICAgICBvbjpjbGljaz17aGFuZGxlRGVsZXRlfVxuICAgICAgb246c3VibWl0PXtoYW5kbGVEZWxldGV9XG4gICAgPlxuICAgICAgPEljb24gY29sb3I9XCJjdXJyZW50Q29sb3JcIiBzcmM9e1ZzY1JlbW92ZX0gLz5cbiAgICA8L2J1dHRvbj5cbiAgICA8c3BhbiBjbGFzcz1cInNlbGVjdGVkLWZpbGVcIj57JGxhdGVzdFNlbGVjdGlvbi5uYW1lfTwvc3Bhbj5cblxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzPVwiYWN0aW9uXCJcbiAgICAgIGRhdGEtYWN0aW9uPVwibmV3LWZpbGVcIlxuICAgICAgb246Y2xpY2s9e2hhbmRsZU5ld0ZpbGV9XG4gICAgICBvbjpzdWJtaXQ9e2hhbmRsZU5ld0ZpbGV9XG4gICAgPlxuICAgICAgPEljb24gY29sb3I9XCJjdXJyZW50Q29sb3JcIiBzcmM9e1ZzY05ld0ZpbGV9IC8+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3M9XCJhY3Rpb25cIlxuICAgICAgZGF0YS1hY3Rpb249XCJuZXctZm9sZGVyXCJcbiAgICAgIG9uOmNsaWNrPXtoYW5kbGVOZXdGb2xkZXJ9XG4gICAgICBvbjpzdWJtaXQ9e2hhbmRsZU5ld0ZvbGRlcn1cbiAgICA+XG4gICAgICA8SWNvbiBjb2xvcj1cImN1cnJlbnRDb2xvclwiIHNyYz17VnNjTmV3Rm9sZGVyfSAvPlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbiAgPEZvbGRlciBmb2xkZXI9e3dpbmRvdy5Qb3Bjb3JuLnF1aWNrQ3NzfSAvPlxuPC9kaXY+XG5cbjxzdHlsZT5cbiAgLnNpZGViYXIge1xuICAgIG1pbi1pbmxpbmUtc2l6ZTogMjBjaDtcbiAgICBtYXgtaW5saW5lLXNpemU6IDc1Y2g7XG4gICAgcmVzaXplOiBob3Jpem9udGFsO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wb3AtYmctbm9ybWFsKTtcbiAgfVxuXG4gIC5hY3Rpb24tYmFyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0byBhdXRvO1xuICAgIGdhcDogMC4yNXJlbTtcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogLTAuNXJlbTtcbiAgICBtYXJnaW4taW5saW5lOiAtMC41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBvcC1iZy1ub3JtYWwpO1xuICB9XG4gIC5hY3Rpb24tYmFyIGJ1dHRvbiB7XG4gICAgYWxsOiB1bnNldDtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5hY3Rpb24tYmFyIGJ1dHRvbiA+IDpnbG9iYWwoc3ZnKSB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuPC9zdHlsZT5cbiIsICJpbXBvcnQgeyBjb21tZW50cyB9IGZyb20gJy4uJztcbmltcG9ydCB7IHJlcmVuZGVyU2lkZWJhciwgc2VsZWN0ZWRGb2xkZXIgfSBmcm9tICdAdWkvdGFicy9RdWlja0Nzcy5zdmVsdGUnO1xuaW1wb3J0IExvZ2dlck1vZHVsZSBmcm9tICdAY29tbW9uL2xvZ2dlcic7XG5jb25zdCBMb2dnZXIgPSBuZXcgTG9nZ2VyTW9kdWxlKCdRdWlja0NTUycpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWlja0NzcyB7XG4gIHByaXZhdGUgc3R5bGVFbGVtZW50cyA9IG5ldyBNYXA8J2ltcG9ydHMnIHwgJ2NvbnRlbnRzJywgSFRNTFN0eWxlRWxlbWVudD4oKTtcblxuICBzdGFydCgpIHtcbiAgICB0aGlzLnBvcHVsYXRlUXVpY2tDc3MoKTtcbiAgICB0aGlzLndhdGNoUXVpY2tDc3MoKTtcbiAgICBzZWxlY3RlZEZvbGRlci5zZXQod2luZG93LlBvcGNvcm4ucXVpY2tDc3MpO1xuICB9XG5cbiAgcG9wdWxhdGVRdWlja0NzcygpIHtcbiAgICBjb25zdCB7IGltcG9ydHMsIGNvbnRlbnRzIH0gPSBjb21waWxlUXVpY2tDc3Mod2luZG93LlBvcGNvcm4ucXVpY2tDc3MpO1xuXG4gICAgY29uc3QgaW1wb3J0U3R5bGUgPSB0aGlzLnN0eWxlRWxlbWVudHMuZ2V0KCdpbXBvcnRzJyk7XG4gICAgaWYgKCFpbXBvcnRTdHlsZSkge1xuICAgICAgY29uc3QgaW1wb3J0U3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgaW1wb3J0U3R5bGUuaWQgPSAncG9wY29ybi1xdWlja2Nzcy1pbXBvcnRzJztcbiAgICAgIGltcG9ydFN0eWxlLnRleHRDb250ZW50ID0gaW1wb3J0cztcbiAgICAgIGltcG9ydFN0eWxlLnNldEF0dHJpYnV0ZSgnZGF0YS1wb3Bjb3JuJywgJ3F1aWNrY3NzJyk7XG4gICAgICBjb21tZW50cy5lbmQuYWZ0ZXIoaW1wb3J0U3R5bGUpO1xuXG4gICAgICB0aGlzLnN0eWxlRWxlbWVudHMuc2V0KCdpbXBvcnRzJywgaW1wb3J0U3R5bGUpO1xuICAgIH0gZWxzZSBpZiAoaW1wb3J0cyAhPT0gaW1wb3J0U3R5bGUudGV4dENvbnRlbnQpIHtcbiAgICAgIGltcG9ydFN0eWxlLnRleHRDb250ZW50ID0gaW1wb3J0cztcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZW50U3R5bGUgPSB0aGlzLnN0eWxlRWxlbWVudHMuZ2V0KCdjb250ZW50cycpO1xuICAgIGlmICghY29udGVudFN0eWxlKSB7XG4gICAgICBjb25zdCBjb250ZW50U3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgY29udGVudFN0eWxlLmlkID0gJ3BvcGNvcm4tcXVpY2tjc3MtY29udGVudHMnO1xuICAgICAgY29udGVudFN0eWxlLnRleHRDb250ZW50ID0gY29udGVudHM7XG4gICAgICBjb250ZW50U3R5bGUuc2V0QXR0cmlidXRlKCdkYXRhLXBvcGNvcm4nLCAncXVpY2tjc3MnKTtcbiAgICAgIGNvbW1lbnRzLmVuZC5hZnRlcihjb250ZW50U3R5bGUpO1xuXG4gICAgICB0aGlzLnN0eWxlRWxlbWVudHMuc2V0KCdjb250ZW50cycsIGNvbnRlbnRTdHlsZSk7XG4gICAgfSBlbHNlIGlmIChjb250ZW50cyAhPT0gY29udGVudFN0eWxlLnRleHRDb250ZW50KSB7XG4gICAgICBjb250ZW50U3R5bGUudGV4dENvbnRlbnQgPSBjb250ZW50cztcbiAgICB9XG4gIH1cblxuICB3YXRjaFF1aWNrQ3NzKCkge1xuICAgIFBvcGNvcm5OYXRpdmUub25RdWlja0Nzc0NoYW5nZSgodXBkYXRlZCkgPT4ge1xuICAgICAgaWYgKFBvcGNvcm5OYXRpdmUuY29uZmlnLnZlcmJvc2UpIExvZ2dlci5kZWJ1ZygnUXVpY2tDU1MgVXBkYXRlZCcpO1xuXG4gICAgICB3aW5kb3cuUG9wY29ybi5xdWlja0NzcyA9IHVwZGF0ZWQ7XG5cbiAgICAgIHJlcmVuZGVyU2lkZWJhcigpO1xuICAgICAgdGhpcy5wb3B1bGF0ZVF1aWNrQ3NzKCk7XG4gICAgfSk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGZvciAoY29uc3Qgc3R5bGUgb2YgdGhpcy5zdHlsZUVsZW1lbnRzLnZhbHVlcygpKSB7XG4gICAgICBzdHlsZS5yZW1vdmUoKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcGlsZVF1aWNrQ3NzKGZvbGRlcjogUXVpY2tDc3NGb2xkZXIpIHtcbiAgbGV0IGltcG9ydHMgPSAnJztcbiAgbGV0IGNvbnRlbnRzID0gJyc7XG5cbiAgY29uc3QgaW1wb3J0UmVnZXggPSAvXkBpbXBvcnRcXHMrKD86dXJsXFwoWydcIl0/Lio/WydcIl0/XFwpfFsnXCJdLio/WydcIl0pKFxccytbXjtdKz8pPzskL2dtaTtcbiAgZm9yIChjb25zdCBub2RlIG9mIGZvbGRlci5maWxlcykge1xuICAgIGlmICgnZmlsZXMnIGluIG5vZGUpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGNvbXBpbGVRdWlja0Nzcyhub2RlKTtcbiAgICAgIGltcG9ydHMgKz0gcmVzdWx0LmltcG9ydHM7XG4gICAgICBjb250ZW50cyArPSByZXN1bHQuY29udGVudHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbnRlbnROb0ltcG9ydHMgPSBub2RlLmNvbnRlbnQucmVwbGFjZShpbXBvcnRSZWdleCwgKG1hdGNoKSA9PiB7XG4gICAgICAgIGltcG9ydHMgKz0gbWF0Y2gucmVwbGFjZSgvOyQvLCAnJykgKyBgOyAvKiAke25vZGUubG9jYXRpb259ICovXFxuYDtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfSkudHJpbSgpO1xuXG4gICAgICBpZiAoY29udGVudE5vSW1wb3J0cykgY29udGVudHMgKz0gYFxcblxcbi8qICR7bm9kZS5sb2NhdGlvbn0gKi9cXG5gICsgY29udGVudE5vSW1wb3J0cztcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBpbXBvcnRzLCBjb250ZW50cyB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UXVpY2tDc3NOb2RlKGxvY2F0aW9uOiBzdHJpbmcsIG5vZGU6IFF1aWNrQ3NzRm9sZGVyID0gd2luZG93LlBvcGNvcm4ucXVpY2tDc3MpOiBRdWlja0Nzc0ZpbGUgfCBRdWlja0Nzc0ZvbGRlciB7XG4gIGlmIChub2RlLmxvY2F0aW9uID09PSBsb2NhdGlvbikgcmV0dXJuIG5vZGU7XG5cbiAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmZpbGVzKSB7XG4gICAgaWYgKCdjb250ZW50JyBpbiBjaGlsZCkge1xuICAgICAgaWYgKGNoaWxkLmxvY2F0aW9uID09PSBsb2NhdGlvbikgcmV0dXJuIGNoaWxkO1xuICAgICAgZWxzZSBjb250aW51ZTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBnZXRRdWlja0Nzc05vZGUobG9jYXRpb24sIGNoaWxkKTtcbiAgICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG4iLCAiPCEtLSBUT0RPOiBBZGQgVVVJRHMgdG8gZWFjaCB0YWIgLS0+XG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuICBpbXBvcnQgeyBTdmVsdGVDb21wb25lbnQgfSBmcm9tICdzdmVsdGUnO1xuICBleHBvcnQgbGV0IHRhYnM6IHsgbmFtZTogc3RyaW5nOyBjb21wb25lbnQ6IHR5cGVvZiBTdmVsdGVDb21wb25lbnQgfVtdO1xuXG4gIGxldCBzZWxlY3RlZFRhYiA9IHRhYnM/LlswXT8ubmFtZTtcbiAgY29uc3QgbG9hZGVkVGFiczogc3RyaW5nW10gPSBbc2VsZWN0ZWRUYWJdO1xuXG4gIGZ1bmN0aW9uIHN3aXRjaFRhYnModGFiTmFtZTogc3RyaW5nKSB7XG4gICAgc2VsZWN0ZWRUYWIgPSB0YWJOYW1lO1xuICAgIGlmICghbG9hZGVkVGFicy5pbmNsdWRlcyh0YWJOYW1lKSkgbG9hZGVkVGFicy5wdXNoKHRhYk5hbWUpO1xuICB9XG48L3NjcmlwdD5cblxuPGRpdiBjbGFzcz1cInRhYi1saXN0XCI+XG4gIHsjZWFjaCB0YWJzIGFzIHsgbmFtZSB9fVxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzPVwidGFiXCJcbiAgICAgIGRhdGEtc2VsZWN0ZWQ9e3NlbGVjdGVkVGFiID09PSBuYW1lfVxuICAgICAgb246Y2xpY2s9eygpID0+IHN3aXRjaFRhYnMobmFtZSl9XG4gICAgICBvbjprZXlwcmVzcz17KCkgPT4gc3dpdGNoVGFicyhuYW1lKX1cbiAgICA+XG4gICAgICB7bmFtZX1cbiAgICA8L2J1dHRvbj5cbiAgey9lYWNofVxuPC9kaXY+XG57I2VhY2ggbG9hZGVkVGFicyBhcyB0YWJOYW1lfVxuICB7QGNvbnN0IHRhYiA9IHRhYnMuZmluZCgodGFiKSA9PiB0YWIubmFtZSA9PT0gdGFiTmFtZSl9XG4gIDxkaXZcbiAgICBjbGFzcz1cInRhYi13cmFwcGVyXCJcbiAgICBkYXRhLXNlbGVjdGVkPXt0YWIubmFtZSA9PT0gc2VsZWN0ZWRUYWJ9XG4gICAgZGF0YS1uYW1lPXt0YWIubmFtZX1cbiAgPlxuICAgIDxzdmVsdGU6Y29tcG9uZW50IHRoaXM9e3RhYi5jb21wb25lbnR9IC8+XG4gIDwvZGl2Plxuey9lYWNofVxuXG48c3R5bGU+XG4gIC8qIFRPRE86IE1ha2UgdGhpcyBzY3JvbGxhYmxlICovXG4gIC50YWItbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFyZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMXJlbTtcbiAgICBib3JkZXItYmxvY2stZW5kOiAwLjI1cmVtIHNvbGlkIHZhcigtLXBvcC1ncmF5KTtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cblxuICAudGFiIHtcbiAgICBhbGw6IHVuc2V0O1xuICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogLTAuMjVyZW07XG4gICAgYm9yZGVyLWJsb2NrLWVuZDogMC4yNXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogdmFyKC0tcG9wLWluYWN0aXZlKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLnRhYjpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiBoc2wodmFyKC0tcG9wLWJsdWUtaHNsKSwgMC41KTtcbiAgICBjb2xvcjogdmFyKC0tcG9wLWhvdmVyKTtcbiAgfVxuICAudGFiW2RhdGEtc2VsZWN0ZWQ9J3RydWUnXSB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wb3AtYmx1ZSk7XG4gICAgY29sb3I6IHZhcigtLXBvcC1hY3RpdmUpO1xuICB9XG5cbiAgLnRhYi13cmFwcGVyW2RhdGEtc2VsZWN0ZWQ9J2ZhbHNlJ10ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbjwvc3R5bGU+XG4iLCAiLy8gaHR0cHM6Ly9iZXR0ZXJwcm9ncmFtbWluZy5wdWIvZnVsbC1mZWF0dXJlZC1ob3RrZXlzLWxpYnJhcnktaW4tMjAwLWxpbmVzLW9mLWphdmFzY3JpcHQtY29kZS04MWE3NGUzMTM4Y2NcblxuY29uc3QgaXNFcXVhbCA9IChhLCBiKSA9PiB7XG4gIGNvbnN0IGFLZXlzID0gT2JqZWN0LmtleXMoYSk7XG5cbiAgaWYgKGFLZXlzLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMoYikubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGFLZXlzLmV2ZXJ5KChrKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgaykgJiYgYVtrXSA9PT0gYltrXSk7XG59O1xuXG5jb25zdCBpc0FycmF5RXF1YWwgPSAoYSwgYikgPT4gYS5sZW5ndGggPT09IGIubGVuZ3RoICYmIGEuZXZlcnkoKHYsIGkpID0+IGlzRXF1YWwodiwgYltpXSkpO1xuXG5leHBvcnQgY29uc3QgbWF0Y2hIb3RrZXkgPSAoYnVmZmVyLCBob3RrZXkpID0+IHtcbiAgaWYgKGJ1ZmZlci5sZW5ndGggPCBob3RrZXkubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgaW5kZXhEaWZmID0gYnVmZmVyLmxlbmd0aCAtIGhvdGtleS5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSBob3RrZXkubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICBpZiAoIWlzRXF1YWwoYnVmZmVyW2luZGV4RGlmZiArIGldLCBob3RrZXlbaV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5jb25zdCBhcnJheVRvT2JqZWN0ID0gKGFycikgPT4gYXJyLnJlZHVjZSgob2JqLCBrZXkpID0+ICh7IC4uLm9iaiwgW2tleV06IHRydWUgfSksIHt9KTtcblxuY29uc3QgYWxsTW9kaWZpZXJzID0gWydjdHJsJywgJ3NoaWZ0JywgJ2FsdCcsICdtZXRhJ107XG5jb25zdCBpbmRleGVkTW9kaWZpZXJzID0gYXJyYXlUb09iamVjdChhbGxNb2RpZmllcnMpO1xuXG5jb25zdCBpc0hvdGtleVZhbGlkID0gKGhvdGtleSkgPT4gT2JqZWN0LmtleXMoaG90a2V5KS5maWx0ZXIoKGspID0+ICFpbmRleGVkTW9kaWZpZXJzW2tdKS5sZW5ndGggPT09IDE7XG5cbmNvbnN0IHZhbGlkYXRlID0gKHZhbHVlLCBtZXNzYWdlKSA9PiB7XG4gIGlmICghdmFsdWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH1cbn07XG5cbmNvbnN0IHZhbGlkYXRlVHlwZSA9ICh2YWx1ZSwgbmFtZSwgdHlwZSkgPT4ge1xuICB2YWxpZGF0ZSh0eXBlb2YgdmFsdWUgPT09IHR5cGUsIGBUaGUgJHtuYW1lfSBtdXN0IGJlIGEgJHt0eXBlfTsgZ2l2ZW4gJHt0eXBlb2YgdmFsdWV9YCk7XG59O1xuXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplSG90a2V5ID0gKGhvdGtleSkgPT5cbiAgaG90a2V5LnNwbGl0KC8gKy9nKS5tYXAoKHBhcnQpID0+IHtcbiAgICBjb25zdCBhcnIgPSBwYXJ0LnNwbGl0KCcrJykuZmlsdGVyKEJvb2xlYW4pO1xuICAgIGNvbnN0IHJlc3VsdCA9IGFycmF5VG9PYmplY3QoYXJyKTtcblxuICAgIHZhbGlkYXRlKE9iamVjdC5rZXlzKHJlc3VsdCkubGVuZ3RoID49IGFyci5sZW5ndGgsIGBIb3RrZXkgY29tYmluYXRpb24gaGFzIGR1cGxpY2F0ZXMgXCIke2hvdGtleX1cImApO1xuXG4gICAgdmFsaWRhdGUoaXNIb3RrZXlWYWxpZChyZXN1bHQpLCBgSW52YWxpZCBob3RrZXkgY29tYmluYXRpb246IFwiJHtob3RrZXl9XCJgKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pO1xuXG5jb25zdCB2YWxpZGF0ZUxpc3RlbmVyQXJncyA9IChob3RrZXksIGNhbGxiYWNrKSA9PiB7XG4gIHZhbGlkYXRlVHlwZShob3RrZXksICdob3RrZXknLCAnc3RyaW5nJyk7XG4gIHZhbGlkYXRlVHlwZShjYWxsYmFjaywgJ2NhbGxiYWNrJywgJ2Z1bmN0aW9uJyk7XG59O1xuXG5jb25zdCBjcmVhdGVMaXN0ZW5lcnNGbiA9IChsaXN0ZW5lcnMsIGZuKSA9PiAoaG90a2V5LCBjYWxsYmFjaykgPT4ge1xuICB2YWxpZGF0ZUxpc3RlbmVyQXJncyhob3RrZXksIGNhbGxiYWNrKTtcbiAgZm4obGlzdGVuZXJzLCBob3RrZXksIGNhbGxiYWNrKTtcbn07XG5cbmNvbnN0IHJlZ2lzdGVyTGlzdGVuZXIgPSAobGlzdGVuZXJzLCBob3RrZXksIGNhbGxiYWNrKSA9PiB7XG4gIGxpc3RlbmVycy5wdXNoKHsgaG90a2V5OiBub3JtYWxpemVIb3RrZXkoaG90a2V5KSwgY2FsbGJhY2sgfSk7XG59O1xuXG5jb25zdCB1bnJlZ2lzdGVyTGlzdGVuZXIgPSAobGlzdGVuZXJzLCBob3RrZXksIGNhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVIb3RrZXkoaG90a2V5KTtcblxuICBjb25zdCBpbmRleCA9IGxpc3RlbmVycy5maW5kSW5kZXgoXG4gICAgKGwpID0+IGwuY2FsbGJhY2sgPT09IGNhbGxiYWNrICYmIGlzQXJyYXlFcXVhbChub3JtYWxpemVkLCBsLmhvdGtleSlcbiAgKTtcblxuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgbGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn07XG5cbmNvbnN0IGRlYm91bmNlID0gKGZuLCB0aW1lKSA9PiB7XG4gIGxldCB0aW1lb3V0SWQgPSBudWxsO1xuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgdGltZW91dElkID0gc2V0VGltZW91dChmbiwgdGltZSk7XG4gIH07XG59O1xuXG5jb25zdCBnZXRLZXkgPSAoa2V5KSA9PiB7XG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSAnKyc6XG4gICAgICByZXR1cm4gJ3BsdXMnO1xuICAgIGNhc2UgJyAnOlxuICAgICAgcmV0dXJuICdzcGFjZSc7XG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIG1heSBiZSBhbiB1cHBlcmNhc2VkIGxldHRlciwgaW4gY2FzZSB0aGUgc2hpZnQgaXMgYWN0aXZlXG4gICAgICByZXR1cm4ga2V5LnRvTG93ZXJDYXNlKCk7XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZUtleURvd25MaXN0ZW5lciA9IChsaXN0ZW5lcnMsIGRlYm91bmNlVGltZSkgPT4ge1xuICBsZXQgYnVmZmVyID0gW107XG5cbiAgY29uc3QgY2xlYXJCdWZmZXJEZWJvdW5jZWQgPSBkZWJvdW5jZSgoKSA9PiB7XG4gICAgYnVmZmVyID0gW107XG4gIH0sIGRlYm91bmNlVGltZSk7XG5cbiAgcmV0dXJuIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5yZXBlYXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQuZ2V0TW9kaWZpZXJTdGF0ZShldmVudC5rZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2xlYXJCdWZmZXJEZWJvdW5jZWQoKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0ge1xuICAgICAgW2dldEtleShldmVudC5rZXkpXTogdHJ1ZSxcbiAgICB9O1xuXG4gICAgYWxsTW9kaWZpZXJzLmZvckVhY2goKG0pID0+IHtcbiAgICAgIGlmIChldmVudFtgJHttfUtleWBdKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uW21dID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGJ1ZmZlci5wdXNoKGRlc2NyaXB0aW9uKTtcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgaWYgKG1hdGNoSG90a2V5KGJ1ZmZlciwgbGlzdGVuZXIuaG90a2V5KSkge1xuICAgICAgICBsaXN0ZW5lci5jYWxsYmFjayhldmVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59O1xuXG5jb25zdCB2YWxpZGF0ZUNvbnRleHQgPSAob3B0aW9ucykgPT4ge1xuICBjb25zdCB7IGRlYm91bmNlVGltZSA9IDUwMCwgYXV0b0VuYWJsZSA9IHRydWUgfSA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFsaWRhdGVUeXBlKGRlYm91bmNlVGltZSwgJ2RlYm91bmNlVGltZScsICdudW1iZXInKTtcbiAgdmFsaWRhdGUoZGVib3VuY2VUaW1lID4gMCwgJ2RlYm91bmNlVGltZSBtdXN0IGJlID4gMCcpO1xuICB2YWxpZGF0ZVR5cGUoYXV0b0VuYWJsZSwgJ2F1dG9FbmFibGUnLCAnYm9vbGVhbicpO1xuXG4gIHJldHVybiB7IGRlYm91bmNlVGltZSwgYXV0b0VuYWJsZSB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNvbnRleHQgPSAob3B0aW9ucykgPT4ge1xuICBjb25zdCB7IGRlYm91bmNlVGltZSwgYXV0b0VuYWJsZSB9ID0gdmFsaWRhdGVDb250ZXh0KG9wdGlvbnMpO1xuXG4gIGNvbnN0IGxpc3RlbmVycyA9IFtdO1xuICBjb25zdCBrZXlEb3duTGlzdGVuZXIgPSBjcmVhdGVLZXlEb3duTGlzdGVuZXIobGlzdGVuZXJzLCBkZWJvdW5jZVRpbWUpO1xuXG4gIGNvbnN0IGVuYWJsZSA9ICgpID0+IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlEb3duTGlzdGVuZXIpO1xuICBjb25zdCBkaXNhYmxlID0gKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleURvd25MaXN0ZW5lcik7XG5cbiAgaWYgKGF1dG9FbmFibGUpIHtcbiAgICBlbmFibGUoKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVnaXN0ZXI6IGNyZWF0ZUxpc3RlbmVyc0ZuKGxpc3RlbmVycywgcmVnaXN0ZXJMaXN0ZW5lciksXG4gICAgdW5yZWdpc3RlcjogY3JlYXRlTGlzdGVuZXJzRm4obGlzdGVuZXJzLCB1bnJlZ2lzdGVyTGlzdGVuZXIpLFxuICAgIGVuYWJsZSxcbiAgICBkaXNhYmxlLFxuICB9O1xufTtcbiIsICI8c2NyaXB0IGxhbmc9XCJ0c1wiPlxuICBpbXBvcnQgeyBvbkRlc3Ryb3ksIG9uTW91bnQgfSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQgVGFiVmlldyBmcm9tICcuL2NvbXBvbmVudHMvVGFiVmlldy5zdmVsdGUnO1xuICBpbXBvcnQgVGhlbWVzVGFiIGZyb20gJy4vdGFicy9UaGVtZXMuc3ZlbHRlJztcbiAgaW1wb3J0IFF1aWNrQ3NzVGFiIGZyb20gJy4vdGFicy9RdWlja0Nzcy5zdmVsdGUnO1xuICBpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAnQHV0aWxzL2hvdGtleXMnO1xuXG4gIGltcG9ydCAnQHdhbHRlci1vcmcvc3ZlbHRlLWZsb2F0L3N0eWxlcyc7XG5cbiAgbGV0IGRpYWxvZzogSFRNTERpYWxvZ0VsZW1lbnQ7XG5cbiAgbGV0IGlzT3BlbmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIHRvZ2dsZVVJKCkge1xuICAgIGlmIChpc09wZW5lZCkgZGlhbG9nLmNsb3NlKCk7XG4gICAgZWxzZSBkaWFsb2cuc2hvd01vZGFsKCk7XG5cbiAgICBpc09wZW5lZCA9ICFpc09wZW5lZDtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldC5wb3Bjb3JuVWlPcGVuID0gaXNPcGVuZWQudG9TdHJpbmcoKTtcbiAgfVxuXG4gIC8vIFRPRE86IEZpbmQgYSBiZXR0ZXIgd2F5IHRvIGRvIHRoaXNcbiAgY29uc3QgY29udGV4dCA9IGNyZWF0ZUNvbnRleHQoeyBhdXRvRW5hYmxlOiB0cnVlIH0pO1xuICBjb25zdCBob3RrZXlDYWxsYmFjayA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdG9nZ2xlVUkoKTtcbiAgfTtcbiAgY29uc3QgZXNjYXBlQ2FsbGJhY2sgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICBpZiAoaXNPcGVuZWQpIHtcbiAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdG9nZ2xlVUkoKTtcbiAgICB9XG4gIH07XG4gIG9uTW91bnQoKCkgPT4ge1xuICAgIGNvbnRleHQucmVnaXN0ZXIoUG9wY29ybk5hdGl2ZS5jb25maWcuaG90a2V5LCBob3RrZXlDYWxsYmFjayk7XG4gICAgY29udGV4dC5yZWdpc3RlcignZXNjYXBlJywgZXNjYXBlQ2FsbGJhY2spO1xuICB9KTtcblxuICBjb25zdCB0YWJzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdUaGVtZXMnLFxuICAgICAgY29tcG9uZW50OiBUaGVtZXNUYWIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnUXVpY2tDU1MnLFxuICAgICAgY29tcG9uZW50OiBRdWlja0Nzc1RhYixcbiAgICB9LFxuICBdO1xuXG4gIG9uRGVzdHJveSgoKSA9PiB7XG4gICAgY29udGV4dC51bnJlZ2lzdGVyKFBvcGNvcm5OYXRpdmUuY29uZmlnLmhvdGtleSwgaG90a2V5Q2FsbGJhY2spO1xuICAgIGNvbnRleHQudW5yZWdpc3RlcignZXNjYXBlJywgZXNjYXBlQ2FsbGJhY2spO1xuICB9KTtcbjwvc2NyaXB0PlxuXG48ZGlhbG9nIGJpbmQ6dGhpcz17ZGlhbG9nfSBjbGFzcz1cIlBvcGNvcm5VSS1kaWFsb2dcIj5cbiAgPFRhYlZpZXcge3RhYnN9IC8+XG4gIDxkaXYgaWQ9XCJQb3Bjb3JuVUktbGF5ZXJzXCIgLz5cbjwvZGlhbG9nPlxuXG48c3R5bGU+XG4gIDpnbG9iYWwoOndoZXJlKC5Qb3Bjb3JuVUktZGlhbG9nIDpub3Qoc3ZnLCBzdmcgKikpKSB7XG4gICAgYWxsOiByZXZlcnQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuICA6Z2xvYmFsKDp3aGVyZSguUG9wY29yblVJLWRpYWxvZyA6Zm9jdXMtdmlzaWJsZSkpIHtcbiAgICBvdXRsaW5lOiBhdXRvIDAuMjVyZW0gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yICFpbXBvcnRhbnQ7XG4gICAgb3V0bGluZS1vZmZzZXQ6IDAuMjVlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLlBvcGNvcm5VSS1kaWFsb2cge1xuICAgIC0tcG9wLWluYWN0aXZlOiBoc2woMCwgMCUsIDY1JSk7XG4gICAgLS1wb3AtaG92ZXI6IGhzbCgwLCAwJSwgOTAlKTtcbiAgICAtLXBvcC1hY3RpdmU6IGhzbCgwLCAwJSwgMTAwJSk7XG5cbiAgICAtLXBvcC1ncmF5OiB2YXIoLS1wb3AtaW5hY3RpdmUpO1xuICAgIC0tcG9wLXJlZC1oc2w6IDAsIDc1JSwgNTUlO1xuICAgIC0tcG9wLXJlZDogaHNsKHZhcigtLXBvcC1yZWQtaHNsKSk7XG4gICAgLS1wb3AtZ3JlZW4taHNsOiAxMjgsIDEwMCUsIDM1JTtcbiAgICAtLXBvcC1ncmVlbjogaHNsKHZhcigtLXBvcC1ncmVlbi1oc2wpKTtcbiAgICAtLXBvcC1ibHVlLWhzbDogMjE1LCA5NSUsIDYwJTtcbiAgICAtLXBvcC1ibHVlOiBoc2wodmFyKC0tcG9wLWJsdWUtaHNsKSk7XG5cbiAgICAtLXBvcC1mZy1ub3JtYWw6IGhzbCgwLCAwJSwgODAlKTtcbiAgICAtLXBvcC1iZy1ub3JtYWw6IGhzbGEoMCwgMCUsIDAlLCAwLjE1KTtcbiAgICAtLXBvcC1iZy1ob3ZlcjogaHNsYSgwLCAwJSwgODAlLCAwLjIpO1xuICAgIC0tcG9wLWJnLWFjdGl2ZTogaHNsYSgwLCAwJSwgODAlLCAwLjQpO1xuXG4gICAgLS1wb3AtdG9vbHRpcC1mZzogdmFyKC0tcG9wLWZnLW5vcm1hbCk7XG4gICAgLS1wb3AtdG9vbHRpcC1iZzogaHNsKDAsIDAlLCA1JSk7XG5cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGlubGluZS1zaXplOiBjbGFtcCgxMnJlbSArIDEwdncsIDQwdncsIDYwdncpO1xuICAgIGJsb2NrLXNpemU6IGNsYW1wKDEycmVtICsgMTB2aCwgNDB2aCwgNjB2aCk7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBjb2xvcjogdmFyKC0tcG9wLWZnLW5vcm1hbCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4MzgzODtcbiAgfVxuICAuUG9wY29yblVJLWRpYWxvZ1tvcGVuXSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xuICB9XG4gIC5Qb3Bjb3JuVUktZGlhbG9nICsgOmdsb2JhbCguYmFja2Ryb3ApLFxuICAuUG9wY29yblVJLWRpYWxvZyB7XG4gICAgei1pbmRleDogMjE0NzQ4MzY0NztcbiAgfVxuICAuUG9wY29yblVJLWRpYWxvZyArIDpnbG9iYWwoLmJhY2tkcm9wKSxcbiAgLlBvcGNvcm5VSS1kaWFsb2c6OmJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xuICB9XG48L3N0eWxlPlxuIiwgImltcG9ydCB7IGdldCB9IGZyb20gJ3N2ZWx0ZS9zdG9yZSc7XG5pbXBvcnQgeyBnZXRRdWlja0Nzc05vZGUgfSBmcm9tICcuL3F1aWNrY3NzJztcbmltcG9ydCB7IHN0YXR1cywgc2VsZWN0ZWRGaWxlLCBzZWxlY3RlZEZvbGRlciB9IGZyb20gJ0B1aS90YWJzL1F1aWNrQ3NzLnN2ZWx0ZSc7XG5pbXBvcnQgeyBNRVNTQUdFUywgcHJlZml4ZXMgfSBmcm9tICdAY29tbW9uL2NvbnN0YW50cyc7XG5pbXBvcnQgTG9nZ2VyTW9kdWxlIGZyb20gJ0Bjb21tb24vbG9nZ2VyJztcbmNvbnN0IExvZ2dlciA9IG5ldyBMb2dnZXJNb2R1bGUoJ0lQQycpO1xuXG5Qb3Bjb3JuTmF0aXZlLm9uU3RhdHVzTWVzc2FnZSgobWVzc2FnZSkgPT4ge1xuICBpZiAoUG9wY29ybk5hdGl2ZS5jb25maWcudmVyYm9zZSkgTG9nZ2VyLmRlYnVnKG1lc3NhZ2UpO1xuXG4gIGlmIChtZXNzYWdlLnR5cGUuc3RhcnRzV2l0aChwcmVmaXhlcy5xdWlja0NzcykpIGhhbmRsZVF1aWNrQ3NzTWVzc2FnZXMobWVzc2FnZSk7XG59KTtcblxuZnVuY3Rpb24gaGFuZGxlUXVpY2tDc3NNZXNzYWdlcyhtZXNzYWdlOiBTdGF0dXNNZXNzYWdlKSB7XG4gIGNvbnN0IHN0YXR1c1R5cGUgPSBtZXNzYWdlLnN1Y2Nlc3MgPyAnc3VjY2VzcycgOiAnZXJyb3InO1xuICBpZiAoIW1lc3NhZ2Uuc3VjY2Vzcykge1xuICAgIExvZ2dlci53YXJuKG1lc3NhZ2UudHlwZSwgJ2ZhaWxlZCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgY2FzZSBNRVNTQUdFUy5xdWlja0Nzcy5jcmVhdGVkOiB7XG4gICAgICBjb25zdCB7IHR5cGUsIGxvY2F0aW9uIH06IHsgdHlwZTogJ2ZpbGUnIHwgJ2ZvbGRlcic7IGxvY2F0aW9uOiBzdHJpbmcgfSA9IG1lc3NhZ2UuZGF0YTtcbiAgICAgIGNvbnN0IG5vZGUgPSBnZXRRdWlja0Nzc05vZGUobG9jYXRpb24pO1xuICAgICAgaWYgKHR5cGUgPT09ICdmaWxlJykgc2VsZWN0ZWRGaWxlLnNldChub2RlIGFzIFF1aWNrQ3NzRmlsZSk7XG4gICAgICBlbHNlIHNlbGVjdGVkRm9sZGVyLnNldChub2RlIGFzIFF1aWNrQ3NzRm9sZGVyKTtcblxuICAgICAgdmFyIHN0YXR1c01lc3NhZ2UgPSBtZXNzYWdlLnN1Y2Nlc3NcbiAgICAgICAgPyBgQ3JlYXRlZCAke2xvY2F0aW9ufSBzdWNjZXNzZnVsbHkuYFxuICAgICAgICA6IGBGYWlsZWQgdG8gY3JlYXRlICR7bG9jYXRpb259LmA7XG4gICAgfSBicmVhaztcblxuICAgIGNhc2UgTUVTU0FHRVMucXVpY2tDc3MuZGVsZXRlZDoge1xuICAgICAgY29uc3QgeyB0eXBlLCBsb2NhdGlvbiB9OiB7IHR5cGU6ICdmaWxlJyB8ICdmb2xkZXInOyBsb2NhdGlvbjogc3RyaW5nIH0gPSBtZXNzYWdlLmRhdGE7XG4gICAgICBpZiAodHlwZSA9PT0gJ2ZpbGUnICYmIGdldChzZWxlY3RlZEZpbGUpLmxvY2F0aW9uID09PSBsb2NhdGlvbikgc2VsZWN0ZWRGaWxlLnNldChudWxsKTtcbiAgICAgIGVsc2UgaWYgKHR5cGUgPT09ICdmb2xkZXInICYmIGdldChzZWxlY3RlZEZvbGRlcikubG9jYXRpb24gPT09IGxvY2F0aW9uKSBzZWxlY3RlZEZvbGRlci5zZXQobnVsbCk7XG5cbiAgICAgIHZhciBzdGF0dXNNZXNzYWdlID0gbWVzc2FnZS5zdWNjZXNzXG4gICAgICAgID8gYERlbGV0ZWQgJHtsb2NhdGlvbn0gc3VjY2Vzc2Z1bGx5LmBcbiAgICAgICAgOiBgRmFpbGVkIHRvIGRlbGV0ZSAke2xvY2F0aW9ufS5gO1xuICAgIH0gYnJlYWs7XG5cbiAgICBjYXNlIE1FU1NBR0VTLnF1aWNrQ3NzLnJlbmFtZWQ6IHtcbiAgICAgIGNvbnN0IHsgb2xkTG9jYXRpb24sIG5ld0xvY2F0aW9uIH06IHsgb2xkTG9jYXRpb246IHN0cmluZzsgbmV3TG9jYXRpb246IHN0cmluZyB9ID0gbWVzc2FnZS5kYXRhO1xuICAgICAgY29uc3Qgbm9kZSA9IGdldFF1aWNrQ3NzTm9kZShuZXdMb2NhdGlvbik7XG4gICAgICBjb25zdCB0eXBlID0gKCdmaWxlcycgaW4gbm9kZSkgPyAnZm9sZGVyJyA6ICdmaWxlJztcblxuICAgICAgaWYgKHR5cGUgPT09ICdmaWxlJyAmJiBnZXQoc2VsZWN0ZWRGaWxlKS5sb2NhdGlvbiA9PT0gb2xkTG9jYXRpb24pIHNlbGVjdGVkRmlsZS5zZXQobm9kZSBhcyBRdWlja0Nzc0ZpbGUpO1xuICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ2ZvbGRlcicgJiYgZ2V0KHNlbGVjdGVkRm9sZGVyKS5sb2NhdGlvbiA9PT0gb2xkTG9jYXRpb24pIHNlbGVjdGVkRm9sZGVyLnNldChub2RlIGFzIFF1aWNrQ3NzRm9sZGVyKTtcblxuXG4gICAgICB2YXIgc3RhdHVzTWVzc2FnZSA9IG1lc3NhZ2Uuc3VjY2Vzc1xuICAgICAgICA/IGBSZW5hbWVkICR7b2xkTG9jYXRpb259IHRvICR7bmV3TG9jYXRpb259IHN1Y2Nlc3NmdWxseS5gXG4gICAgICAgIDogYEZhaWxlZCB0byByZW5hbWUgJHtvbGRMb2NhdGlvbn0gdG8gJHtuZXdMb2NhdGlvbn0uYDtcbiAgICB9IGJyZWFrO1xuXG4gICAgY2FzZSBNRVNTQUdFUy5xdWlja0Nzcy51cGRhdGVkOiB7XG4gICAgICB2YXIgc3RhdHVzTWVzc2FnZSA9IG1lc3NhZ2Uuc3VjY2Vzc1xuICAgICAgICA/IGBVcGRhdGVkICR7bWVzc2FnZS5kYXRhfSBzdWNjZXNzZnVsbHkuYFxuICAgICAgICA6IGBGYWlsZWQgdG8gdXBkYXRlICR7bWVzc2FnZS5kYXRhfS5gO1xuICAgIH0gYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgTG9nZ2VyLndhcm4oYFVua25vd24gc3RhdHVzIG1lc3NhZ2UgdHlwZTogJHttZXNzYWdlLnR5cGV9YCwgbWVzc2FnZSk7XG4gIH1cblxuICBpZiAoc3RhdHVzTWVzc2FnZSkgc3RhdHVzLnNldCh7XG4gICAgdHlwZTogc3RhdHVzVHlwZSxcbiAgICBtZXNzYWdlOiBzdGF0dXNNZXNzYWdlLFxuICB9KTtcbn1cbiIsICJpbXBvcnQgVGhlbWVzLCB7IHBvcHVsYXRlVGhlbWVzIH0gZnJvbSAnLi90aGVtZXMnO1xuaW1wb3J0IFF1aWNrQ3NzIGZyb20gJy4vcXVpY2tjc3MnO1xuaW1wb3J0IFVJIGZyb20gJ0B1aS9pbmRleC5zdmVsdGUnO1xuaW1wb3J0IHsgUkVOREVSRVIgfSBmcm9tICdAY29tbW9uL2NvbnN0YW50cyc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgUG9wY29ybjogUG9wY29ybjtcbiAgICBQb3Bjb3JuTmF0aXZlOiBQb3Bjb3JuTmF0aXZlO1xuICB9XG5cbiAgaW50ZXJmYWNlIGdsb2JhbFRoaXMge1xuICAgIHJlYWRvbmx5IFBvcGNvcm5JbmplY3RlZDogYm9vbGVhbjtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2hvdWxkVmFsaWRhdGUgPSBCb29sZWFuKFBvcGNvcm5OYXRpdmUudmFsaWRhdGVDU1MpO1xuZXhwb3J0IGNvbnN0IGNvbW1lbnRzID0ge1xuICBzdGFydDogZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnIHNlY3Rpb246UG9wY29ybiAnKSxcbiAgZW5kOiBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcgZW5kc2VjdGlvbiAnKSxcbn07XG5cbmNvbnN0IG1lc3NhZ2VIYW5kbGVyID0gKGV2ZW50OiBNZXNzYWdlRXZlbnQpID0+IGV2ZW50LnNvdXJjZSA9PT0gd2luZG93ICYmIGV2ZW50LmRhdGEgPT09IFJFTkRFUkVSLnN0b3AgJiYgcmVuZGVyZXIuc3RvcCgpO1xuXG5jb25zdCByZW5kZXJlciA9IG5ldyBjbGFzcyBSZW5kZXJlciB7XG4gIFVJOiBVSTtcbiAgVGhlbWVzOiBUaGVtZXM7XG4gIFF1aWNrQ3NzOiBRdWlja0NzcztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbWVzc2FnZUhhbmRsZXIpO1xuICB9XG5cbiAgYXN5bmMgc3RhcnQoKSB7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmQoY29tbWVudHMuc3RhcnQsIGNvbW1lbnRzLmVuZCk7XG4gICAgaWYgKCFnbG9iYWxUaGlzLlBvcGNvcm5JbmplY3RlZCkge1xuICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgc3R5bGUuaWQgPSAncG9wY29ybi1zdHlsZXMnO1xuICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBhd2FpdCBQb3Bjb3JuTmF0aXZlLmdldFN0eWxlcygpO1xuICAgICAgY29tbWVudHMuc3RhcnQuYWZ0ZXIoc3R5bGUpO1xuICAgIH1cblxuICAgIGNvbnN0IHRoZW1lcyA9IGF3YWl0IFBvcGNvcm5OYXRpdmUuZ2V0VGhlbWVzKCk7XG4gICAgY29uc3QgcXVpY2tDc3MgPSBhd2FpdCBQb3Bjb3JuTmF0aXZlLmdldFF1aWNrQ3NzKCk7XG4gICAgY29uc3QgUG9wY29ybiA9IHtcbiAgICAgIHRoZW1lczogcG9wdWxhdGVUaGVtZXModGhlbWVzKSxcbiAgICAgIHF1aWNrQ3NzLFxuICAgIH07XG4gICAgd2luZG93LlBvcGNvcm4gPSBQb3Bjb3JuO1xuXG4gICAgdGhpcy5VSSA9IG5ldyBVSSh7IHRhcmdldDogZG9jdW1lbnQuYm9keSB9KTtcbiAgICB0aGlzLlRoZW1lcyA9IG5ldyBUaGVtZXMoKTtcbiAgICB0aGlzLlRoZW1lcy5zdGFydCgpO1xuICAgIHRoaXMuUXVpY2tDc3MgPSBuZXcgUXVpY2tDc3MoKTtcbiAgICB0aGlzLlF1aWNrQ3NzLnN0YXJ0KCk7XG5cbiAgICBpZiAoIWdsb2JhbFRoaXMuUG9wY29ybkluamVjdGVkKSBPYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgICAgIFBvcGNvcm5JbmplY3RlZDogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgdGhpcy5VST8uJGRlc3Ryb3koKTtcbiAgICB0aGlzLlRoZW1lcz8uc3RvcCgpO1xuICAgIHRoaXMuUXVpY2tDc3M/LnN0b3AoKTtcblxuICAgIC8vIFRPRE86IERvbid0IHJlbW92ZSB0aGUgY29tbWVudHNcbiAgICBjb21tZW50cy5zdGFydC5yZW1vdmUoKTtcbiAgICBjb21tZW50cy5lbmQucmVtb3ZlKCk7XG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG1lc3NhZ2VIYW5kbGVyKTtcbiAgICBkZWxldGUgd2luZG93LlBvcGNvcm47XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlcmVyO1xuXG5pbXBvcnQgJy4vaXBjJztcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQW9CRUEsR0FDQUMsR0FDQUMsR0FBQUE7QUFBQUEsVUFBQUEsR0FBQUEsR0FPSUM7QUFBQUEsaUJBUkpGLE1BQUFBLElBQW1CLEtBQUEsV0FDbkJDLE1BQUFBLElBQWtDLENBQUE7QUFRbEMsVUFBTUUsSUFBQUEsU0FBQUEsSUFBY0YsRUFBUUUsZ0JBQUFBLEdBQ3RCQyxJQUFBQSxTQUFBQSxJQUFXSCxFQUFRRyxhQUFBQSxHQUNuQkMsSUFBVUosRUFBUUksU0FDcEJDLElBQWlCQyxLQUFLQyxJQUFBQSxHQUV0QkMsSUFBOEMsQ0FBQTtBQUVsRCxlQUFTQyxJQUFBQTtBQUNQLFlBQUEsV0FBSUwsR0FBdUI7QUFDekIsY0FBTU0sS0FBMEJKLEtBQUtDLElBQUFBLElBQVFGO0FBRTdDLGNBQUlLLEtBQTBCWCxLQUFvQks7QUFDaEQsbUJBQU9B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QUNsRCxlQUFTLE1BQU0sTUFBTSxLQUFLO0FBQUEsSUFDNUI7QUFFQSxVQUFNLFNBQVMsTUFBTSxjQUFjLFVBQVU7QUFDN0MsVUFBTSxXQUFXLE1BQU0sY0FBYyxZQUFZO0FBQ2pELFVBQU0sVUFBVTtBQUFBLE1BQ2QsUUFBUSxlQUFlLE1BQU07QUFBQSxNQUM3QjtBQUFBLElBQ0Y7QUFDQSxXQUFPLFVBQVU7QUFFakIsU0FBSyxLQUFLLElBQUksV0FBRyxFQUFFLFFBQVEsU0FBUyxLQUFLLENBQUM7QUFDMUMsU0FBSyxTQUFTLElBQUlDLFFBQU87QUFDekIsU0FBSyxPQUFPLE1BQU07QUFDbEIsU0FBSyxXQUFXLElBQUlDLFVBQVM7QUFDN0IsU0FBSyxTQUFTLE1BQU07QUFFcEIsUUFBSSxDQUFDLFdBQVc7QUFBaUIsYUFBTyxPQUFPLFlBQVk7QUFBQSxRQUN6RCxpQkFBaUI7QUFBQSxNQUNuQixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBRUEsT0FBTztBQUNMLFNBQUssSUFBSSxTQUFTO0FBQ2xCLFNBQUssUUFBUSxLQUFLO0FBQ2xCLFNBQUssVUFBVSxLQUFLO0FBR3BCLGFBQVMsTUFBTSxPQUFPO0FBQ3RCLGFBQVMsSUFBSSxPQUFPO0FBRXBCLFdBQU8sb0JBQW9CLFdBQVcsY0FBYztBQUNwRCxXQUFPLE9BQU87QUFBQSxFQUNoQjtBQUNGO0FBRUEsSUFBTyxtQkFBUTsiLAogICJuYW1lcyI6IFsiZnVuYyIsICJ3YWl0TWlsbGlzZWNvbmRzIiwgIm9wdGlvbnMiLCAidGltZW91dElkIiwgImlzSW1tZWRpYXRlIiwgImNhbGxiYWNrIiwgIm1heFdhaXQiLCAibGFzdEludm9rZVRpbWUiLCAiRGF0ZSIsICJub3ciLCAicHJvbWlzZXMiLCAibmV4dEludm9rZVRpbWVvdXQiLCAidGltZVNpbmNlTGFzdEludm9jYXRpb24iLCAiZGVib3VuY2VkRnVuY3Rpb24iLCAiYXJncyIsICJjb250ZXh0IiwgInRoaXMiLCAiUHJvbWlzZSIsICJyZXNvbHZlIiwgInJlamVjdCIsICJzaG91bGRDYWxsTm93IiwgImNsZWFyVGltZW91dCIsICJzZXRUaW1lb3V0IiwgInJlc3VsdCIsICJhcHBseSIsICJmb3JFYWNoIiwgImUiLCAicHVzaCIsICJjYW5jZWwiLCAicmVhc29uIiwgInIiLCAiaXNPYmplY3QiLCAiZXJyb3JNZXNzYWdlcyIsICJ1cGRhdGUiLCAidmFsaWRhdGUiLCAic3RhdGUiLCAiaXNPYmplY3QiLCAiaXNPYmplY3QiLCAiZXJyb3JNZXNzYWdlcyIsICJjb21wb3NlIiwgImRlZXBNZXJnZSIsICJjb25maWciLCAic3RhdGUiLCAiaW5pdCIsICJjb25maWd1cmVMb2FkZXIiLCAicmVxdWlyZSIsICJsb2FkZXIiLCAic2VsZiIsICJlbGVtZW50IiwgImZpbGUiLCAiZWxlbWVudCIsICJfYSIsICJlbGVtZW50IiwgImRldGFjaCIsICJ1cGRhdGUiLCAiaW5zdGFuY2UiLCAiY3JlYXRlX2ZyYWdtZW50IiwgImF0dHIiLCAidGV4dCIsICJpbnN0YW5jZSIsICJ1cGRhdGUiLCAic3Vic2NyaWJlIiwgInJ1biIsICJwbGF0Zm9ybSIsICJlbGVtZW50IiwgIm1heCIsICJvZmZzZXQiLCAicGxhdGZvcm0iLCAic2lkZSIsICJwbGFjZW1lbnQiLCAib3ZlcmZsb3ciLCAicGxhdGZvcm0iLCAieCIsICJ5IiwgIm1pbiIsICJtYXgiLCAiZWxlbWVudCIsICJtaW4iLCAibWF4IiwgIndpbmRvdyIsICJ1cGRhdGUiLCAiY29tcHV0ZVBvc2l0aW9uIiwgImFycm93IiwgIngiLCAieSIsICJoaWRlIiwgInRvb2x0aXAiLCAiYXJyb3ciLCAiY29tcHV0ZVBvc2l0aW9uIiwgImN0eCIsICJzaXplIiwgImF0dHIiLCAiY3R4IiwgInRleHQiLCAiVGhlbWVzIiwgImNyZWF0ZV9pZl9ibG9jayIsICJjdHgiLCAibG9hZGVyIiwgImN0eCIsICJjcmVhdGVfaWZfYmxvY2siLCAiZmlsZSIsICJjdHgiLCAiY3JlYXRlX2lmX2Jsb2NrIiwgImN0eCIsICJjcmVhdGVfaWZfYmxvY2tfMSIsICJjdHgiLCAicmVyZW5kZXJTdG9yZSIsICJmaWxlIiwgIkxvZ2dlciIsICJRdWlja0NzcyIsICJpbXBvcnRTdHlsZSIsICJjb250ZW50U3R5bGUiLCAiY3R4IiwgImRlYm91bmNlIiwgIkxvZ2dlciIsICJUaGVtZXMiLCAiUXVpY2tDc3MiXQp9Cg==
