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

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.38.0/node_modules/@monaco-editor/loader/lib/cjs/_virtual/_rollupPluginBabelHelpers.js
var require_rollupPluginBabelHelpers = __commonJS({
  "node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.38.0/node_modules/@monaco-editor/loader/lib/cjs/_virtual/_rollupPluginBabelHelpers.js"(exports) {
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
    function isObject(value) {
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
      if (!isObject(changes))
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
      if (!(isFunction(handler) || isObject(handler)))
        errorHandler("handlerType");
      if (isObject(handler) && Object.values(handler).some(function(_handler) {
        return !isFunction(_handler);
      }))
        errorHandler("handlersType");
    }
    function validateInitial(initial) {
      if (!initial)
        errorHandler("initialIsRequired");
      if (!isObject(initial))
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

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.38.0/node_modules/@monaco-editor/loader/lib/cjs/config/index.js
var require_config = __commonJS({
  "node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.38.0/node_modules/@monaco-editor/loader/lib/cjs/config/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var config2 = {
      paths: {
        vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.36.1/min/vs"
      }
    };
    exports.default = config2;
  }
});

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.38.0/node_modules/@monaco-editor/loader/lib/cjs/utils/curry.js
var require_curry = __commonJS({
  "node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.38.0/node_modules/@monaco-editor/loader/lib/cjs/utils/curry.js"(exports) {
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

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.38.0/node_modules/@monaco-editor/loader/lib/cjs/utils/isObject.js
var require_isObject = __commonJS({
  "node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.38.0/node_modules/@monaco-editor/loader/lib/cjs/utils/isObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isObject(value) {
      return {}.toString.call(value).includes("Object");
    }
    exports.default = isObject;
  }
});

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.38.0/node_modules/@monaco-editor/loader/lib/cjs/validators/index.js
var require_validators = __commonJS({
  "node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.38.0/node_modules/@monaco-editor/loader/lib/cjs/validators/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var curry = require_curry();
    var isObject = require_isObject();
    function validateConfig(config2) {
      if (!config2)
        errorHandler("configIsRequired");
      if (!isObject["default"](config2))
        errorHandler("configType");
      if (config2.urls) {
        informAboutDeprecation();
        return {
          paths: {
            vs: config2.urls.monacoBase
          }
        };
      }
      return config2;
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

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.38.0/node_modules/@monaco-editor/loader/lib/cjs/utils/compose.js
var require_compose = __commonJS({
  "node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.38.0/node_modules/@monaco-editor/loader/lib/cjs/utils/compose.js"(exports) {
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

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.38.0/node_modules/@monaco-editor/loader/lib/cjs/utils/deepMerge.js
var require_deepMerge = __commonJS({
  "node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.38.0/node_modules/@monaco-editor/loader/lib/cjs/utils/deepMerge.js"(exports) {
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

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.38.0/node_modules/@monaco-editor/loader/lib/cjs/utils/makeCancelable.js
var require_makeCancelable = __commonJS({
  "node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.38.0/node_modules/@monaco-editor/loader/lib/cjs/utils/makeCancelable.js"(exports) {
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

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.38.0/node_modules/@monaco-editor/loader/lib/cjs/loader/index.js
var require_loader = __commonJS({
  "node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.38.0/node_modules/@monaco-editor/loader/lib/cjs/loader/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _rollupPluginBabelHelpers = require_rollupPluginBabelHelpers();
    var state = require_state_local();
    var index = require_config();
    var index$1 = require_validators();
    var compose = require_compose();
    var deepMerge = require_deepMerge();
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
    function config2(globalConfig) {
      var _validators$config = index$1["default"].config(globalConfig), monaco = _validators$config.monaco, config3 = _rollupPluginBabelHelpers.objectWithoutProperties(_validators$config, ["monaco"]);
      setState(function(state2) {
        return {
          config: deepMerge["default"](state2.config, config3),
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
        var config3 = _ref2.config, reject = _ref2.reject;
        return {
          config: config3,
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
        var config3 = _ref3.config, resolve = _ref3.resolve, reject = _ref3.reject;
        return {
          config: config3,
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
      config: config2,
      init: init2,
      __getMonacoInstance
    };
    exports.default = loader2;
  }
});

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.38.0/node_modules/@monaco-editor/loader/lib/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.38.0/node_modules/@monaco-editor/loader/lib/cjs/index.js"(exports) {
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

// node_modules/.pnpm/svelte@3.59.1/node_modules/svelte/internal/index.mjs
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
function component_subscribe(component, store, callback) {
  component.$$.on_destroy.push(subscribe(store, callback));
}
function set_store_value(store, ret, value) {
  store.set(value);
  return ret;
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
  document.dispatchEvent(custom_event(type, Object.assign({ version: "3.59.1" }, detail), { bubbles: true }));
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

// node_modules/.pnpm/svelte@3.59.1/node_modules/svelte/store/index.mjs
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
  let { size = "1em" } = $$props;
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
      $$invalidate(1, size = $$props2.size);
    if ("color" in $$props2)
      $$invalidate(5, color = $$props2.color);
    if ("title" in $$props2)
      $$invalidate(6, title = $$props2.title);
    if ("className" in $$props2)
      $$invalidate(2, className = $$props2.className);
  };
  $$self.$capture_state = () => ({
    src,
    size,
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
      $$invalidate(1, size = $$props2.size);
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
  return [src, size, className, innerHtml, attr2, color, title];
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
  const constants_0 = (
    /*themes*/
    child_ctx[1][
      /*id*/
      child_ctx[4]
    ]
  );
  child_ctx[5] = constants_0;
  const constants_1 = (
    /*theme*/
    child_ctx[5].valid && /*theme*/
    child_ctx[5].valid !== "unknown"
  );
  child_ctx[6] = constants_1;
  return child_ctx;
}
function create_else_block(ctx) {
  let icon;
  let t0;
  let span;
  let current;
  icon = new Icon_default({
    props: {
      color: "currentColor",
      src: RiEditorQuestionMark_default
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(icon.$$.fragment);
      t0 = space();
      span = element("span");
      span.textContent = "Validity Unknown";
      attr_dev(span, "class", "theme-validity-text");
      add_location(span, file2, 43, 14, 1736);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, span, anchor);
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
      if (detaching)
        detach_dev(t0);
      if (detaching)
        detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block.name,
    type: "else",
    source: "(42:12) {:else}",
    ctx
  });
  return block;
}
function create_if_block_1(ctx) {
  let icon;
  let t0;
  let span;
  let current;
  icon = new Icon_default({
    props: {
      color: "currentColor",
      src: VscChromeClose_default
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(icon.$$.fragment);
      t0 = space();
      span = element("span");
      span.textContent = "Invalid";
      attr_dev(span, "class", "theme-validity-text");
      add_location(span, file2, 40, 14, 1582);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, span, anchor);
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
      if (detaching)
        detach_dev(t0);
      if (detaching)
        detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(39:44) ",
    ctx
  });
  return block;
}
function create_if_block(ctx) {
  let icon;
  let t0;
  let span;
  let current;
  icon = new Icon_default({
    props: { color: "currentColor", src: VscCheck_default },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(icon.$$.fragment);
      t0 = space();
      span = element("span");
      span.textContent = "Valid";
      attr_dev(span, "class", "theme-validity-text");
      add_location(span, file2, 37, 14, 1411);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, span, anchor);
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
      if (detaching)
        detach_dev(t0);
      if (detaching)
        detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(36:12) {#if isValid}",
    ctx
  });
  return block;
}
function create_key_block(ctx) {
  let div2;
  let h1;
  let t0_value = (
    /*id*/
    ctx[4] + ""
  );
  let t0;
  let t1;
  let div1;
  let div0;
  let current_block_type_index;
  let if_block;
  let div0_data_value_value;
  let div0_data_error_value;
  let t2;
  let button;
  let t3_value = (
    /*theme*/
    ctx[5].enabled ? "Disable" : "Enable"
  );
  let t3;
  let t4;
  let div2_id_value;
  let div2_data_enabled_value;
  let current;
  let mounted;
  let dispose;
  const if_block_creators = [create_if_block, create_if_block_1, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*isValid*/
      ctx2[6]
    )
      return 0;
    if (
      /*theme*/
      ctx2[5].valid === false
    )
      return 1;
    return 2;
  }
  current_block_type_index = select_block_type(ctx, -1);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
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
      div2 = element("div");
      h1 = element("h1");
      t0 = text(t0_value);
      t1 = space();
      div1 = element("div");
      div0 = element("div");
      if_block.c();
      t2 = space();
      button = element("button");
      t3 = text(t3_value);
      t4 = space();
      attr_dev(h1, "class", "theme-id PopcornUI-krg8wz");
      add_location(h1, file2, 28, 8, 1045);
      attr_dev(div0, "class", "theme-validity PopcornUI-krg8wz");
      attr_dev(div0, "data-value", div0_data_value_value = /*isValid*/
      ctx[6] ? void 0 : (
        /*theme*/
        ctx[5].valid
      ));
      attr_dev(div0, "data-error", div0_data_error_value = /*isValid*/
      ctx[6] ? void 0 : createTooltipContent(
        /*theme*/
        ctx[5].errors
      ));
      add_location(div0, file2, 30, 10, 1119);
      attr_dev(div1, "class", "theme-meta PopcornUI-krg8wz");
      add_location(div1, file2, 29, 8, 1084);
      attr_dev(button, "class", "theme-toggle PopcornUI-krg8wz");
      add_location(button, file2, 47, 8, 1852);
      attr_dev(div2, "class", "theme-container PopcornUI-krg8wz");
      attr_dev(div2, "id", div2_id_value = /*id*/
      ctx[4]);
      attr_dev(div2, "data-enabled", div2_data_enabled_value = /*theme*/
      ctx[5].enabled);
      add_location(div2, file2, 27, 6, 973);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div2, anchor);
      append_dev(div2, h1);
      append_dev(h1, t0);
      append_dev(div2, t1);
      append_dev(div2, div1);
      append_dev(div1, div0);
      if_blocks[current_block_type_index].m(div0, null);
      append_dev(div2, t2);
      append_dev(div2, button);
      append_dev(button, t3);
      append_dev(div2, t4);
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
        detach_dev(div2);
      if_blocks[current_block_type_index].d();
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_key_block.name,
    type: "key",
    source: "(27:4) {#key $rerenderStore[id]}",
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
    source: "(24:2) {#each Object.keys(themes) as id}",
    ctx
  });
  return block;
}
function create_fragment2(ctx) {
  let div;
  let current;
  let each_value = Object.keys(
    /*themes*/
    ctx[1]
  );
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
      attr_dev(div, "class", "themes-wrapper PopcornUI-krg8wz");
      add_location(div, file2, 22, 0, 776);
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
      if (dirty & /*$rerenderStore, Object, themes, window, undefined, createTooltipContent, VscCheck, VscChromeClose, RiEditorQuestionMark*/
      3) {
        each_value = Object.keys(
          /*themes*/
          ctx2[1]
        );
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
  return errors?.map((error) => `Line ${error.line}: ${error.message}`).join("\n ");
}
function instance2($$self, $$props, $$invalidate) {
  let $rerenderStore;
  validate_store(rerenderStore, "rerenderStore");
  component_subscribe($$self, rerenderStore, ($$value) => $$invalidate(0, $rerenderStore = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Themes", slots, []);
  const themes = Popcorn.themes;
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
    Icon: Icon_default,
    RiEditorQuestionMark: RiEditorQuestionMark_default,
    VscCheck: VscCheck_default,
    VscChromeClose: VscChromeClose_default,
    themes,
    createTooltipContent,
    $rerenderStore
  });
  return [$rerenderStore, themes, click_handler, submit_handler];
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

// src/renderer/themes/proxy.ts
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
    if ("id" in target)
      rerenderTheme(target.id);
    return true;
  }
};

// src/common/constants.ts
var IPC = {
  // Misc
  getConfig: "POPCORN_GET_CONFIG",
  statusMessage: "POPCORN_STATUS_MESSAGE",
  log: "POPCORN_LOG",
  // Themes
  getThemes: "POPCORN_GET_THEMES",
  onThemeChange: "POPCORN_ON_THEME_CHANGE",
  saveThemeState: "POPCORN_SAVE_STATE",
  // QuickCSS
  getQuickCss: "POPCORN_GET_QUICK_CSS",
  onQuickCssChange: "POPCORN_ON_QUICK_CSS_CHANGE",
  createQuickCssNode: "POPCORN_CREATE_QUICK_CSS_NODE",
  deleteQuickCssNode: "POPCORN_DELETE_QUICK_CSS_NODE",
  renameQuickCssNode: "POPCORN_RENAME_QUICK_CSS_NODE",
  updateQuickCssFile: "POPCORN_SAVE_QUICK_CSS_FILE"
};

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
  /* eslint-disable @typescript-eslint/no-explicit-any */
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

// src/renderer/themes/index.ts
var Logger = new logger_default("Themes");
var Themes2 = class {
  styleCache = /* @__PURE__ */ new Map();
  themeRevisions = /* @__PURE__ */ new Map();
  proxy;
  constructor() {
    this.proxy = new Proxy(window.Popcorn.themes, proxy_default);
    window.Popcorn.themes = this.proxy;
    autoBind(this);
  }
  start() {
    this.populateThemes();
    this.watchThemes();
  }
  populateThemes() {
    for (const theme in this.proxy) {
      const themeMeta = this.proxy[theme];
      if (themeMeta.enabled)
        this.enable(theme, false);
    }
  }
  watchThemes() {
    PopcornNative.onThemeChange(async ({ id, theme }) => {
      if (config.verbose)
        Logger.debug(`Theme changed: ${id}`);
      this.proxy[id] = this.populateTheme(theme);
      this.updateTheme(id);
    });
  }
  updateTheme(id) {
    const themeElement = this.styleCache.get(id);
    if (!themeElement) {
      Logger.warn(`No theme found with id: "${id}"`);
      return;
    }
    const rev = (this.themeRevisions.get(id) ?? 0) + 1;
    this.themeRevisions.set(id, rev);
    themeElement.href = `popcorn://theme/${id}?${rev}`;
  }
  populateTheme(theme) {
    const id = theme.id;
    const convertedTheme = {
      ...theme,
      enable: (save = true) => this.enable(id, save),
      disable: (save = true) => this.disable(id, save),
      toggle: (save = true) => this.toggle(id, save),
      valid: "unknown",
      errors: []
    };
    if (shouldValidate)
      this.validateTheme(theme.id);
    return convertedTheme;
  }
  async validateTheme(id) {
    const themeMeta = this.proxy[id];
    const content = await (await fetch(`popcorn://theme/${id}`)).text();
    PopcornNative.validateCSS(content).then((result) => {
      console.log(themeMeta.valid, this.proxy[id].valid);
      themeMeta.valid = result.valid;
      themeMeta.errors = result.errors;
      console.log(themeMeta.valid, this.proxy[id].valid);
    }).catch((e) => {
      Logger.error(`Failed to validate "${id}".`, e);
      themeMeta.valid = "unknown";
    });
  }
  enable(id, save = true) {
    const themeMeta = this.proxy[id];
    if (this.styleCache.has(id)) {
      Logger.log(`"${id}" is already enabled.`);
      return;
    }
    themeMeta.enabled = true;
    const elem = document.createElement("link");
    elem.rel = "stylesheet";
    elem.id = id;
    elem.href = `popcorn://theme/${id}`;
    elem.dataset.popcorn = "true";
    comments.end.before(elem);
    this.styleCache.set(id, elem);
    Logger.log(`"${id}" enabled.`);
    if (save)
      PopcornNative.saveThemeState(id, true);
  }
  disable(id, save = true) {
    const themeMeta = this.proxy[id];
    const style = this.styleCache.get(id);
    if (!style) {
      Logger.warn(`"${id}" is not enabled.`);
      return;
    }
    themeMeta.enabled = false;
    this.styleCache.delete(id);
    style.remove();
    Logger.log(`"${id}" disabled.`);
    if (save)
      PopcornNative.saveThemeState(id, false);
  }
  toggle(id, save = true) {
    const themeMeta = this.proxy[id];
    if (!themeMeta.enabled)
      this.enable(id, save);
    else
      this.disable(id, save);
  }
};

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
function create_else_block2(ctx) {
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
      add_location(span, file_1, 56, 4, 1500);
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
    id: create_else_block2.name,
    type: "else",
    source: "(56:2) {:else}",
    ctx
  });
  return block;
}
function create_if_block_12(ctx) {
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
      add_location(input_1, file_1, 44, 4, 1226);
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
    id: create_if_block_12.name,
    type: "if",
    source: "(44:2) {#if rename}",
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
    source: "(59:2) {#if $fileStatus?.[file.location]?.unsaved}",
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
      return create_if_block_12;
    return create_else_block2;
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
      add_location(button, file_1, 34, 0, 950);
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
function create_else_block3(ctx) {
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
    id: create_else_block3.name,
    type: "else",
    source: "(71:4) {:else}",
    ctx
  });
  return block;
}
function create_if_block_13(ctx) {
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
    id: create_if_block_13.name,
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
  const if_block_creators = [create_if_block_13, create_else_block3];
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
    source: "(62:2) {#key $rerenderStore}",
    ctx
  });
  return block;
}
function create_if_block5(ctx) {
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
      add_location(div0, file6, 68, 8, 2001);
      attr_dev(div1, "class", "status");
      attr_dev(div1, "data-type", div1_data_type_value = /*$status*/
      ctx[4].type ?? void 0);
      add_location(div1, file6, 67, 6, 1934);
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
      ctx2[4].type ?? void 0)) {
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
    id: create_if_block5.name,
    type: "if",
    source: "(67:4) {#if $status.type}",
    ctx
  });
  return block;
}
function create_fragment7(ctx) {
  let div1;
  let previous_key = (
    /*$rerenderStore*/
    ctx[3]
  );
  let t0;
  let div0;
  let span;
  let t1_value = (
    /*$selectedFile*/
    (ctx[2]?.name ?? defaultText) + ""
  );
  let t1;
  let t2;
  let t3;
  let monacoeditor;
  let updating_content;
  let updating_recalculateSize;
  let current;
  let key_block = create_key_block2(ctx);
  let if_block = (
    /*$status*/
    ctx[4].type && create_if_block5(ctx)
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
      div1 = element("div");
      key_block.c();
      t0 = space();
      div0 = element("div");
      span = element("span");
      t1 = text(t1_value);
      t2 = space();
      if (if_block)
        if_block.c();
      t3 = space();
      create_component(monacoeditor.$$.fragment);
      attr_dev(span, "class", "selected-file");
      add_location(span, file6, 65, 4, 1833);
      attr_dev(div0, "class", "status-bar PopcornUI-szncc9");
      add_location(div0, file6, 64, 2, 1804);
      attr_dev(div1, "class", "quickCss-wrapper PopcornUI-szncc9");
      add_location(div1, file6, 60, 0, 1680);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      key_block.m(div1, null);
      append_dev(div1, t0);
      append_dev(div1, div0);
      append_dev(div0, span);
      append_dev(span, t1);
      append_dev(div0, t2);
      if (if_block)
        if_block.m(div0, null);
      append_dev(div1, t3);
      mount_component(monacoeditor, div1, null);
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
        key_block.m(div1, t0);
      } else {
        key_block.p(ctx2, dirty);
      }
      if ((!current || dirty & /*$selectedFile*/
      4) && t1_value !== (t1_value = /*$selectedFile*/
      (ctx2[2]?.name ?? defaultText) + ""))
        set_data_dev(t1, t1_value);
      if (
        /*$status*/
        ctx2[4].type
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block5(ctx2);
          if_block.c();
          if_block.m(div0, null);
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
      transition_in(key_block);
      transition_in(monacoeditor.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(key_block);
      transition_out(monacoeditor.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div1);
      key_block.d(detaching);
      if (if_block)
        if_block.d();
      destroy_component(monacoeditor);
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
var defaultText = "Select a file to edit";
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
  let editorContent = defaultText;
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
    if (!$selectedFile)
      return;
    set_store_value(fileStatus, $fileStatus[$selectedFile.location] ??= {}, $fileStatus);
    set_store_value(fileStatus, $fileStatus[$selectedFile.location].unsaved = true, $fileStatus);
  }
  function save() {
    if (!$selectedFile)
      return;
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
    defaultText,
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
  start() {
    this.populateQuickCss();
    this.watchQuickCss();
    selectedFolder.set(window.Popcorn.quickCss);
  }
  async populateQuickCss() {
    function compileQuickCss(folder) {
      let contents = "";
      const imports = [];
      const importRegex = /^@import\s+(?:url\(['"]?.*?['"]?\)|['"].*?['"])(\s+[^;]+?)?;$/gmi;
      for (const node of folder.files) {
        if ("files" in node)
          contents += compileQuickCss(node);
        else {
          const contentNoImports = node.content.replace(importRegex, (match) => {
            imports.push(match.replace(/;$/, "") + "; /* " + node.location + " */");
            return "";
          });
          if (!/^\s*$/.test(contentNoImports))
            contents += "\n\n/* " + node.location + " */\n" + contentNoImports;
        }
      }
      return imports.join("\n") + contents;
    }
    const compiledCss = compileQuickCss(Popcorn.quickCss);
    const style = document.getElementById("popcorn-quickcss");
    if (!style) {
      const style2 = document.createElement("style");
      style2.id = "popcorn-quickcss";
      style2.textContent = compiledCss;
      style2.dataset.popcorn = "true";
      style2.dataset.info = "This was added here so it can override the other styles.";
      comments.end.after(style2);
    } else {
      style.textContent = compiledCss;
    }
  }
  async watchQuickCss() {
    PopcornNative.onQuickCssChange((updated) => {
      if (config.verbose)
        Logger2.debug("QuickCSS Updated");
      Popcorn.quickCss = updated;
      rerenderSidebar();
      this.populateQuickCss();
    });
  }
};

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
      attr_dev(dialog_1, "class", "PopcornUI-dialog PopcornUI-6ipy8a");
      add_location(dialog_1, file8, 45, 0, 1181);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, dialog_1, anchor);
      mount_component(tabview, dialog_1, null);
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
  onMount(() => {
    const context = createContext({ autoEnable: true });
    context.register(config.hotkey, (event) => {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
      toggleUI();
    });
    context.register("escape", (event) => {
      if (isOpened) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        event.preventDefault();
        toggleUI();
      }
    });
  });
  const tabs = [
    { name: "Themes", component: Themes_default },
    { name: "QuickCSS", component: QuickCss_default }
  ];
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
    onMount,
    config,
    TabView: TabView_default,
    ThemesTab: Themes_default,
    QuickCssTab: QuickCss_default,
    createContext,
    dialog,
    isOpened,
    toggleUI,
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

// src/renderer/index.ts
var comments = {
  start: document.createComment("section:Popcorn"),
  end: document.createComment("endsection")
};
var config = await PopcornNative.config;
var shouldValidate = Boolean(PopcornNative.validateCSS);
var renderer_default = new class Renderer {
  async start() {
    const Popcorn2 = {
      themes: await PopcornNative.getThemes(),
      quickCss: await PopcornNative.getQuickCss()
    };
    window.Popcorn = Popcorn2;
    document.head.append(comments.start, comments.end);
    new ui_default({ target: document.body });
    new Themes2().start();
    new QuickCss2().start();
  }
}();
export {
  comments,
  config,
  renderer_default as default,
  shouldValidate
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3RzLWRlYm91bmNlQDQuMC4wL25vZGVfbW9kdWxlcy90cy1kZWJvdW5jZS9zcmMvaW5kZXgudHMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Btb25hY28tZWRpdG9yK2xvYWRlckAxLjMuM19tb25hY28tZWRpdG9yQDAuMzguMC9ub2RlX21vZHVsZXMvQG1vbmFjby1lZGl0b3IvbG9hZGVyL2xpYi9janMvX3ZpcnR1YWwvX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vc3RhdGUtbG9jYWxAMS4wLjcvbm9kZV9tb2R1bGVzL3N0YXRlLWxvY2FsL2xpYi9janMvc3RhdGUtbG9jYWwuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Btb25hY28tZWRpdG9yK2xvYWRlckAxLjMuM19tb25hY28tZWRpdG9yQDAuMzguMC9ub2RlX21vZHVsZXMvQG1vbmFjby1lZGl0b3IvbG9hZGVyL2xpYi9janMvY29uZmlnL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9AbW9uYWNvLWVkaXRvcitsb2FkZXJAMS4zLjNfbW9uYWNvLWVkaXRvckAwLjM4LjAvbm9kZV9tb2R1bGVzL0Btb25hY28tZWRpdG9yL2xvYWRlci9saWIvY2pzL3V0aWxzL2N1cnJ5LmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9AbW9uYWNvLWVkaXRvcitsb2FkZXJAMS4zLjNfbW9uYWNvLWVkaXRvckAwLjM4LjAvbm9kZV9tb2R1bGVzL0Btb25hY28tZWRpdG9yL2xvYWRlci9saWIvY2pzL3V0aWxzL2lzT2JqZWN0LmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9AbW9uYWNvLWVkaXRvcitsb2FkZXJAMS4zLjNfbW9uYWNvLWVkaXRvckAwLjM4LjAvbm9kZV9tb2R1bGVzL0Btb25hY28tZWRpdG9yL2xvYWRlci9saWIvY2pzL3ZhbGlkYXRvcnMvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Btb25hY28tZWRpdG9yK2xvYWRlckAxLjMuM19tb25hY28tZWRpdG9yQDAuMzguMC9ub2RlX21vZHVsZXMvQG1vbmFjby1lZGl0b3IvbG9hZGVyL2xpYi9janMvdXRpbHMvY29tcG9zZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vQG1vbmFjby1lZGl0b3IrbG9hZGVyQDEuMy4zX21vbmFjby1lZGl0b3JAMC4zOC4wL25vZGVfbW9kdWxlcy9AbW9uYWNvLWVkaXRvci9sb2FkZXIvbGliL2Nqcy91dGlscy9kZWVwTWVyZ2UuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Btb25hY28tZWRpdG9yK2xvYWRlckAxLjMuM19tb25hY28tZWRpdG9yQDAuMzguMC9ub2RlX21vZHVsZXMvQG1vbmFjby1lZGl0b3IvbG9hZGVyL2xpYi9janMvdXRpbHMvbWFrZUNhbmNlbGFibGUuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Btb25hY28tZWRpdG9yK2xvYWRlckAxLjMuM19tb25hY28tZWRpdG9yQDAuMzguMC9ub2RlX21vZHVsZXMvQG1vbmFjby1lZGl0b3IvbG9hZGVyL2xpYi9janMvbG9hZGVyL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9AbW9uYWNvLWVkaXRvcitsb2FkZXJAMS4zLjNfbW9uYWNvLWVkaXRvckAwLjM4LjAvbm9kZV9tb2R1bGVzL0Btb25hY28tZWRpdG9yL2xvYWRlci9saWIvY2pzL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9hdXRvLWJpbmRANS4wLjEvbm9kZV9tb2R1bGVzL2F1dG8tYmluZC9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vc3ZlbHRlQDMuNTkuMS9ub2RlX21vZHVsZXMvc3ZlbHRlL2ludGVybmFsL2luZGV4Lm1qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vc3ZlbHRlQDMuNTkuMS9ub2RlX21vZHVsZXMvc3ZlbHRlL3N0b3JlL2luZGV4Lm1qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vc3ZlbHRlLWljb25zLXBhY2tAMi4xLjAvbm9kZV9tb2R1bGVzL3N2ZWx0ZS1pY29ucy1wYWNrL0ljb24uc3ZlbHRlIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdmVsdGUtaWNvbnMtcGFja0AyLjEuMC9ub2RlX21vZHVsZXMvc3ZlbHRlLWljb25zLXBhY2svcmkvUmlFZGl0b3JRdWVzdGlvbk1hcmsuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N2ZWx0ZS1pY29ucy1wYWNrQDIuMS4wL25vZGVfbW9kdWxlcy9zdmVsdGUtaWNvbnMtcGFjay92c2MvVnNjQ2hlY2suanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N2ZWx0ZS1pY29ucy1wYWNrQDIuMS4wL25vZGVfbW9kdWxlcy9zdmVsdGUtaWNvbnMtcGFjay92c2MvVnNjQ2hyb21lQ2xvc2UuanMiLCAiLi4vc3JjL3JlbmRlcmVyL3VpL3RhYnMvVGhlbWVzLnN2ZWx0ZSIsICIuLi9zcmMvcmVuZGVyZXIvdGhlbWVzL3Byb3h5LnRzIiwgIi4uL3NyYy9jb21tb24vY29uc3RhbnRzLnRzIiwgIi4uL3NyYy9jb21tb24vbG9nZ2VyLnRzIiwgIi4uL3NyYy9yZW5kZXJlci90aGVtZXMvaW5kZXgudHMiLCAiLi4vc3JjL3JlbmRlcmVyL3VpL3RhYnMvUXVpY2tDc3Muc3ZlbHRlIiwgIi4uL3NyYy9yZW5kZXJlci91aS9jb21wb25lbnRzL1F1aWNrQ3NzL01vbmFjb0VkaXRvci5zdmVsdGUiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N2ZWx0ZS1pY29ucy1wYWNrQDIuMS4wL25vZGVfbW9kdWxlcy9zdmVsdGUtaWNvbnMtcGFjay92c2MvVnNjTmV3RmlsZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vc3ZlbHRlLWljb25zLXBhY2tAMi4xLjAvbm9kZV9tb2R1bGVzL3N2ZWx0ZS1pY29ucy1wYWNrL3ZzYy9Wc2NOZXdGb2xkZXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N2ZWx0ZS1pY29ucy1wYWNrQDIuMS4wL25vZGVfbW9kdWxlcy9zdmVsdGUtaWNvbnMtcGFjay92c2MvVnNjUmVtb3ZlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdmVsdGUtaWNvbnMtcGFja0AyLjEuMC9ub2RlX21vZHVsZXMvc3ZlbHRlLWljb25zLXBhY2svYWkvQWlGaWxsRm9sZGVyT3Blbi5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vc3ZlbHRlLWljb25zLXBhY2tAMi4xLjAvbm9kZV9tb2R1bGVzL3N2ZWx0ZS1pY29ucy1wYWNrL2FpL0FpRmlsbEZvbGRlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vc3ZlbHRlLWljb25zLXBhY2tAMi4xLjAvbm9kZV9tb2R1bGVzL3N2ZWx0ZS1pY29ucy1wYWNrL2ZhL0ZhQnJhbmRzQ3NzMy5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vc3ZlbHRlLWljb25zLXBhY2tAMi4xLjAvbm9kZV9tb2R1bGVzL3N2ZWx0ZS1pY29ucy1wYWNrL3ZzYy9Wc2NDaXJjbGVGaWxsLmpzIiwgIi4uL3NyYy9yZW5kZXJlci91aS9jb21wb25lbnRzL1F1aWNrQ3NzL0ZpbGUuc3ZlbHRlIiwgIi4uL3NyYy9yZW5kZXJlci91aS9jb21wb25lbnRzL1F1aWNrQ3NzL0ZvbGRlci5zdmVsdGUiLCAiLi4vc3JjL3JlbmRlcmVyL3VpL2NvbXBvbmVudHMvUXVpY2tDc3MvU2lkZWJhci5zdmVsdGUiLCAiLi4vc3JjL3JlbmRlcmVyL3F1aWNrY3NzL2luZGV4LnRzIiwgIi4uL3NyYy9yZW5kZXJlci91aS9jb21wb25lbnRzL1RhYlZpZXcuc3ZlbHRlIiwgIi4uL3NyYy9yZW5kZXJlci91dGlscy9ob3RrZXlzLmpzIiwgIi4uL3NyYy9yZW5kZXJlci91aS9pbmRleC5zdmVsdGUiLCAiLi4vc3JjL3JlbmRlcmVyL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgdHlwZSBPcHRpb25zPFJlc3VsdD4gPSB7XG4gIGlzSW1tZWRpYXRlPzogYm9vbGVhbjtcbiAgbWF4V2FpdD86IG51bWJlcjtcbiAgY2FsbGJhY2s/OiAoZGF0YTogUmVzdWx0KSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBEZWJvdW5jZWRGdW5jdGlvbjxcbiAgQXJncyBleHRlbmRzIGFueVtdLFxuICBGIGV4dGVuZHMgKC4uLmFyZ3M6IEFyZ3MpID0+IGFueVxuPiB7XG4gICh0aGlzOiBUaGlzUGFyYW1ldGVyVHlwZTxGPiwgLi4uYXJnczogQXJncyk6IFByb21pc2U8UmV0dXJuVHlwZTxGPj47XG4gIGNhbmNlbDogKHJlYXNvbj86IGFueSkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIERlYm91bmNlZFByb21pc2U8RnVuY3Rpb25SZXR1cm4+IHtcbiAgcmVzb2x2ZTogKHJlc3VsdDogRnVuY3Rpb25SZXR1cm4pID0+IHZvaWQ7XG4gIHJlamVjdDogKHJlYXNvbj86IGFueSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlPEFyZ3MgZXh0ZW5kcyBhbnlbXSwgRiBleHRlbmRzICguLi5hcmdzOiBBcmdzKSA9PiBhbnk+KFxuICBmdW5jOiBGLFxuICB3YWl0TWlsbGlzZWNvbmRzID0gNTAsXG4gIG9wdGlvbnM6IE9wdGlvbnM8UmV0dXJuVHlwZTxGPj4gPSB7fVxuKToge1xuICAodGhpczogVGhpc1BhcmFtZXRlclR5cGU8Rj4sIC4uLmFyZ3M6IFBhcmFtZXRlcnM8Rj4gJiBBcmdzKTogUHJvbWlzZTxcbiAgICBSZXR1cm5UeXBlPEY+XG4gID47XG4gIGNhbmNlbDogKHJlYXNvbj86IGFueSkgPT4gdm9pZDtcbn0ge1xuICBsZXQgdGltZW91dElkOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiB8IHVuZGVmaW5lZDtcbiAgY29uc3QgaXNJbW1lZGlhdGUgPSBvcHRpb25zLmlzSW1tZWRpYXRlID8/IGZhbHNlO1xuICBjb25zdCBjYWxsYmFjayA9IG9wdGlvbnMuY2FsbGJhY2sgPz8gZmFsc2U7XG4gIGNvbnN0IG1heFdhaXQgPSBvcHRpb25zLm1heFdhaXQ7XG4gIGxldCBsYXN0SW52b2tlVGltZSA9IERhdGUubm93KCk7XG5cbiAgbGV0IHByb21pc2VzOiBEZWJvdW5jZWRQcm9taXNlPFJldHVyblR5cGU8Rj4+W10gPSBbXTtcblxuICBmdW5jdGlvbiBuZXh0SW52b2tlVGltZW91dCgpIHtcbiAgICBpZiAobWF4V2FpdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCB0aW1lU2luY2VMYXN0SW52b2NhdGlvbiA9IERhdGUubm93KCkgLSBsYXN0SW52b2tlVGltZTtcblxuICAgICAgaWYgKHRpbWVTaW5jZUxhc3RJbnZvY2F0aW9uICsgd2FpdE1pbGxpc2Vjb25kcyA+PSBtYXhXYWl0KSB7XG4gICAgICAgIHJldHVybiBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9jYXRpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHdhaXRNaWxsaXNlY29uZHM7XG4gIH1cblxuICBjb25zdCBkZWJvdW5jZWRGdW5jdGlvbiA9IGZ1bmN0aW9uIChcbiAgICB0aGlzOiBUaGlzUGFyYW1ldGVyVHlwZTxGPixcbiAgICAuLi5hcmdzOiBQYXJhbWV0ZXJzPEY+XG4gICkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZXR1cm5UeXBlPEY+PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBpbnZva2VGdW5jdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGltZW91dElkID0gdW5kZWZpbmVkO1xuICAgICAgICBsYXN0SW52b2tlVGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIGlmICghaXNJbW1lZGlhdGUpIHtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHJlc3VsdCk7XG4gICAgICAgICAgcHJvbWlzZXMuZm9yRWFjaCgoeyByZXNvbHZlIH0pID0+IHJlc29sdmUocmVzdWx0KSk7XG4gICAgICAgICAgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgY29uc3Qgc2hvdWxkQ2FsbE5vdyA9IGlzSW1tZWRpYXRlICYmIHRpbWVvdXRJZCA9PT0gdW5kZWZpbmVkO1xuXG4gICAgICBpZiAodGltZW91dElkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICB9XG5cbiAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoaW52b2tlRnVuY3Rpb24sIG5leHRJbnZva2VUaW1lb3V0KCkpO1xuXG4gICAgICBpZiAoc2hvdWxkQ2FsbE5vdykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhyZXN1bHQpO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgfVxuICAgICAgcHJvbWlzZXMucHVzaCh7IHJlc29sdmUsIHJlamVjdCB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBkZWJvdW5jZWRGdW5jdGlvbi5jYW5jZWwgPSBmdW5jdGlvbiAocmVhc29uPzogYW55KSB7XG4gICAgaWYgKHRpbWVvdXRJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICB9XG4gICAgcHJvbWlzZXMuZm9yRWFjaCgoeyByZWplY3QgfSkgPT4gcmVqZWN0KHJlYXNvbikpO1xuICAgIHByb21pc2VzID0gW107XG4gIH07XG5cbiAgcmV0dXJuIGRlYm91bmNlZEZ1bmN0aW9uO1xufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICB9KTtcbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcblxuICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG5cbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICByZXR1cm4gYXJyMjtcbn1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxuZXhwb3J0cy5hcnJheUxpa2VUb0FycmF5ID0gX2FycmF5TGlrZVRvQXJyYXk7XG5leHBvcnRzLmFycmF5V2l0aEhvbGVzID0gX2FycmF5V2l0aEhvbGVzO1xuZXhwb3J0cy5kZWZpbmVQcm9wZXJ0eSA9IF9kZWZpbmVQcm9wZXJ0eTtcbmV4cG9ydHMuaXRlcmFibGVUb0FycmF5TGltaXQgPSBfaXRlcmFibGVUb0FycmF5TGltaXQ7XG5leHBvcnRzLm5vbkl0ZXJhYmxlUmVzdCA9IF9ub25JdGVyYWJsZVJlc3Q7XG5leHBvcnRzLm9iamVjdFNwcmVhZDIgPSBfb2JqZWN0U3ByZWFkMjtcbmV4cG9ydHMub2JqZWN0V2l0aG91dFByb3BlcnRpZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXM7XG5leHBvcnRzLm9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTtcbmV4cG9ydHMuc2xpY2VkVG9BcnJheSA9IF9zbGljZWRUb0FycmF5O1xuZXhwb3J0cy51bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTtcbiIsICIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSk7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBjb21wb3NlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZm5zID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGZuc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBmbnMucmVkdWNlUmlnaHQoZnVuY3Rpb24gKHksIGYpIHtcbiAgICAgIHJldHVybiBmKHkpO1xuICAgIH0sIHgpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjdXJyeShmbikge1xuICByZXR1cm4gZnVuY3Rpb24gY3VycmllZCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyZ3MubGVuZ3RoID49IGZuLmxlbmd0aCA/IGZuLmFwcGx5KHRoaXMsIGFyZ3MpIDogZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBuZXh0QXJncyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgICBuZXh0QXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3VycmllZC5hcHBseShfdGhpcywgW10uY29uY2F0KGFyZ3MsIG5leHRBcmdzKSk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwodmFsdWUpLmluY2x1ZGVzKCdPYmplY3QnKTtcbn1cblxuZnVuY3Rpb24gaXNFbXB0eShvYmopIHtcbiAgcmV0dXJuICFPYmplY3Qua2V5cyhvYmopLmxlbmd0aDtcbn1cblxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hhbmdlcyhpbml0aWFsLCBjaGFuZ2VzKSB7XG4gIGlmICghaXNPYmplY3QoY2hhbmdlcykpIGVycm9ySGFuZGxlcignY2hhbmdlVHlwZScpO1xuICBpZiAoT2JqZWN0LmtleXMoY2hhbmdlcykuc29tZShmdW5jdGlvbiAoZmllbGQpIHtcbiAgICByZXR1cm4gIWhhc093blByb3BlcnR5KGluaXRpYWwsIGZpZWxkKTtcbiAgfSkpIGVycm9ySGFuZGxlcignY2hhbmdlRmllbGQnKTtcbiAgcmV0dXJuIGNoYW5nZXM7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgaWYgKCFpc0Z1bmN0aW9uKHNlbGVjdG9yKSkgZXJyb3JIYW5kbGVyKCdzZWxlY3RvclR5cGUnKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVIYW5kbGVyKGhhbmRsZXIpIHtcbiAgaWYgKCEoaXNGdW5jdGlvbihoYW5kbGVyKSB8fCBpc09iamVjdChoYW5kbGVyKSkpIGVycm9ySGFuZGxlcignaGFuZGxlclR5cGUnKTtcbiAgaWYgKGlzT2JqZWN0KGhhbmRsZXIpICYmIE9iamVjdC52YWx1ZXMoaGFuZGxlcikuc29tZShmdW5jdGlvbiAoX2hhbmRsZXIpIHtcbiAgICByZXR1cm4gIWlzRnVuY3Rpb24oX2hhbmRsZXIpO1xuICB9KSkgZXJyb3JIYW5kbGVyKCdoYW5kbGVyc1R5cGUnKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVJbml0aWFsKGluaXRpYWwpIHtcbiAgaWYgKCFpbml0aWFsKSBlcnJvckhhbmRsZXIoJ2luaXRpYWxJc1JlcXVpcmVkJyk7XG4gIGlmICghaXNPYmplY3QoaW5pdGlhbCkpIGVycm9ySGFuZGxlcignaW5pdGlhbFR5cGUnKTtcbiAgaWYgKGlzRW1wdHkoaW5pdGlhbCkpIGVycm9ySGFuZGxlcignaW5pdGlhbENvbnRlbnQnKTtcbn1cblxuZnVuY3Rpb24gdGhyb3dFcnJvcihlcnJvck1lc3NhZ2VzLCB0eXBlKSB7XG4gIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2VzW3R5cGVdIHx8IGVycm9yTWVzc2FnZXNbXCJkZWZhdWx0XCJdKTtcbn1cblxudmFyIGVycm9yTWVzc2FnZXMgPSB7XG4gIGluaXRpYWxJc1JlcXVpcmVkOiAnaW5pdGlhbCBzdGF0ZSBpcyByZXF1aXJlZCcsXG4gIGluaXRpYWxUeXBlOiAnaW5pdGlhbCBzdGF0ZSBzaG91bGQgYmUgYW4gb2JqZWN0JyxcbiAgaW5pdGlhbENvbnRlbnQ6ICdpbml0aWFsIHN0YXRlIHNob3VsZG5cXCd0IGJlIGFuIGVtcHR5IG9iamVjdCcsXG4gIGhhbmRsZXJUeXBlOiAnaGFuZGxlciBzaG91bGQgYmUgYW4gb2JqZWN0IG9yIGEgZnVuY3Rpb24nLFxuICBoYW5kbGVyc1R5cGU6ICdhbGwgaGFuZGxlcnMgc2hvdWxkIGJlIGEgZnVuY3Rpb25zJyxcbiAgc2VsZWN0b3JUeXBlOiAnc2VsZWN0b3Igc2hvdWxkIGJlIGEgZnVuY3Rpb24nLFxuICBjaGFuZ2VUeXBlOiAncHJvdmlkZWQgdmFsdWUgb2YgY2hhbmdlcyBzaG91bGQgYmUgYW4gb2JqZWN0JyxcbiAgY2hhbmdlRmllbGQ6ICdpdCBzZWFtcyB5b3Ugd2FudCB0byBjaGFuZ2UgYSBmaWVsZCBpbiB0aGUgc3RhdGUgd2hpY2ggaXMgbm90IHNwZWNpZmllZCBpbiB0aGUgXCJpbml0aWFsXCIgc3RhdGUnLFxuICBcImRlZmF1bHRcIjogJ2FuIHVua25vd24gZXJyb3IgYWNjdXJlZCBpbiBgc3RhdGUtbG9jYWxgIHBhY2thZ2UnXG59O1xudmFyIGVycm9ySGFuZGxlciA9IGN1cnJ5KHRocm93RXJyb3IpKGVycm9yTWVzc2FnZXMpO1xudmFyIHZhbGlkYXRvcnMgPSB7XG4gIGNoYW5nZXM6IHZhbGlkYXRlQ2hhbmdlcyxcbiAgc2VsZWN0b3I6IHZhbGlkYXRlU2VsZWN0b3IsXG4gIGhhbmRsZXI6IHZhbGlkYXRlSGFuZGxlcixcbiAgaW5pdGlhbDogdmFsaWRhdGVJbml0aWFsXG59O1xuXG5mdW5jdGlvbiBjcmVhdGUoaW5pdGlhbCkge1xuICB2YXIgaGFuZGxlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhbGlkYXRvcnMuaW5pdGlhbChpbml0aWFsKTtcbiAgdmFsaWRhdG9ycy5oYW5kbGVyKGhhbmRsZXIpO1xuICB2YXIgc3RhdGUgPSB7XG4gICAgY3VycmVudDogaW5pdGlhbFxuICB9O1xuICB2YXIgZGlkVXBkYXRlID0gY3VycnkoZGlkU3RhdGVVcGRhdGUpKHN0YXRlLCBoYW5kbGVyKTtcbiAgdmFyIHVwZGF0ZSA9IGN1cnJ5KHVwZGF0ZVN0YXRlKShzdGF0ZSk7XG4gIHZhciB2YWxpZGF0ZSA9IGN1cnJ5KHZhbGlkYXRvcnMuY2hhbmdlcykoaW5pdGlhbCk7XG4gIHZhciBnZXRDaGFuZ2VzID0gY3VycnkoZXh0cmFjdENoYW5nZXMpKHN0YXRlKTtcblxuICBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICB2YXIgc2VsZWN0b3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH07XG4gICAgdmFsaWRhdG9ycy5zZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgcmV0dXJuIHNlbGVjdG9yKHN0YXRlLmN1cnJlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0U3RhdGUoY2F1c2VkQ2hhbmdlcykge1xuICAgIGNvbXBvc2UoZGlkVXBkYXRlLCB1cGRhdGUsIHZhbGlkYXRlLCBnZXRDaGFuZ2VzKShjYXVzZWRDaGFuZ2VzKTtcbiAgfVxuXG4gIHJldHVybiBbZ2V0U3RhdGUsIHNldFN0YXRlXTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdENoYW5nZXMoc3RhdGUsIGNhdXNlZENoYW5nZXMpIHtcbiAgcmV0dXJuIGlzRnVuY3Rpb24oY2F1c2VkQ2hhbmdlcykgPyBjYXVzZWRDaGFuZ2VzKHN0YXRlLmN1cnJlbnQpIDogY2F1c2VkQ2hhbmdlcztcbn1cblxuZnVuY3Rpb24gdXBkYXRlU3RhdGUoc3RhdGUsIGNoYW5nZXMpIHtcbiAgc3RhdGUuY3VycmVudCA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBzdGF0ZS5jdXJyZW50KSwgY2hhbmdlcyk7XG4gIHJldHVybiBjaGFuZ2VzO1xufVxuXG5mdW5jdGlvbiBkaWRTdGF0ZVVwZGF0ZShzdGF0ZSwgaGFuZGxlciwgY2hhbmdlcykge1xuICBpc0Z1bmN0aW9uKGhhbmRsZXIpID8gaGFuZGxlcihzdGF0ZS5jdXJyZW50KSA6IE9iamVjdC5rZXlzKGNoYW5nZXMpLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgdmFyIF9oYW5kbGVyJGZpZWxkO1xuXG4gICAgcmV0dXJuIChfaGFuZGxlciRmaWVsZCA9IGhhbmRsZXJbZmllbGRdKSA9PT0gbnVsbCB8fCBfaGFuZGxlciRmaWVsZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2hhbmRsZXIkZmllbGQuY2FsbChoYW5kbGVyLCBzdGF0ZS5jdXJyZW50W2ZpZWxkXSk7XG4gIH0pO1xuICByZXR1cm4gY2hhbmdlcztcbn1cblxudmFyIGluZGV4ID0ge1xuICBjcmVhdGU6IGNyZWF0ZVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbmRleDtcbiIsICIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjb25maWcgPSB7XG4gIHBhdGhzOiB7XG4gICAgdnM6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL21vbmFjby1lZGl0b3JAMC4zNi4xL21pbi92cydcbiAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY29uZmlnO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuZnVuY3Rpb24gY3VycnkoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGN1cnJpZWQoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJncy5sZW5ndGggPj0gZm4ubGVuZ3RoID8gZm4uYXBwbHkodGhpcywgYXJncykgOiBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIG5leHRBcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIG5leHRBcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjdXJyaWVkLmFwcGx5KF90aGlzLCBbXS5jb25jYXQoYXJncywgbmV4dEFyZ3MpKTtcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBjdXJyeTtcbiIsICIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiB7fS50b1N0cmluZy5jYWxsKHZhbHVlKS5pbmNsdWRlcygnT2JqZWN0Jyk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGlzT2JqZWN0O1xuIiwgIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGN1cnJ5ID0gcmVxdWlyZSgnLi4vdXRpbHMvY3VycnkuanMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL3V0aWxzL2lzT2JqZWN0LmpzJyk7XG5cbi8qKlxuICogdmFsaWRhdGVzIHRoZSBjb25maWd1cmF0aW9uIG9iamVjdCBhbmQgaW5mb3JtcyBhYm91dCBkZXByZWNhdGlvblxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyAtIHRoZSBjb25maWd1cmF0aW9uIG9iamVjdCBcbiAqIEByZXR1cm4ge09iamVjdH0gY29uZmlnIC0gdGhlIHZhbGlkYXRlZCBjb25maWd1cmF0aW9uIG9iamVjdFxuICovXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ29uZmlnKGNvbmZpZykge1xuICBpZiAoIWNvbmZpZykgZXJyb3JIYW5kbGVyKCdjb25maWdJc1JlcXVpcmVkJyk7XG4gIGlmICghaXNPYmplY3RbJ2RlZmF1bHQnXShjb25maWcpKSBlcnJvckhhbmRsZXIoJ2NvbmZpZ1R5cGUnKTtcblxuICBpZiAoY29uZmlnLnVybHMpIHtcbiAgICBpbmZvcm1BYm91dERlcHJlY2F0aW9uKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGhzOiB7XG4gICAgICAgIHZzOiBjb25maWcudXJscy5tb25hY29CYXNlXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBjb25maWc7XG59XG4vKipcbiAqIGxvZ3MgZGVwcmVjYXRpb24gbWVzc2FnZVxuICovXG5cblxuZnVuY3Rpb24gaW5mb3JtQWJvdXREZXByZWNhdGlvbigpIHtcbiAgY29uc29sZS53YXJuKGVycm9yTWVzc2FnZXMuZGVwcmVjYXRpb24pO1xufVxuXG5mdW5jdGlvbiB0aHJvd0Vycm9yKGVycm9yTWVzc2FnZXMsIHR5cGUpIHtcbiAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZXNbdHlwZV0gfHwgZXJyb3JNZXNzYWdlc1tcImRlZmF1bHRcIl0pO1xufVxuXG52YXIgZXJyb3JNZXNzYWdlcyA9IHtcbiAgY29uZmlnSXNSZXF1aXJlZDogJ3RoZSBjb25maWd1cmF0aW9uIG9iamVjdCBpcyByZXF1aXJlZCcsXG4gIGNvbmZpZ1R5cGU6ICd0aGUgY29uZmlndXJhdGlvbiBvYmplY3Qgc2hvdWxkIGJlIGFuIG9iamVjdCcsXG4gIFwiZGVmYXVsdFwiOiAnYW4gdW5rbm93biBlcnJvciBhY2N1cmVkIGluIGBAbW9uYWNvLWVkaXRvci9sb2FkZXJgIHBhY2thZ2UnLFxuICBkZXByZWNhdGlvbjogXCJEZXByZWNhdGlvbiB3YXJuaW5nIVxcbiAgICBZb3UgYXJlIHVzaW5nIGRlcHJlY2F0ZWQgd2F5IG9mIGNvbmZpZ3VyYXRpb24uXFxuXFxuICAgIEluc3RlYWQgb2YgdXNpbmdcXG4gICAgICBtb25hY28uY29uZmlnKHsgdXJsczogeyBtb25hY29CYXNlOiAnLi4uJyB9IH0pXFxuICAgIHVzZVxcbiAgICAgIG1vbmFjby5jb25maWcoeyBwYXRoczogeyB2czogJy4uLicgfSB9KVxcblxcbiAgICBGb3IgbW9yZSBwbGVhc2UgY2hlY2sgdGhlIGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3N1cmVuLWF0b3lhbi9tb25hY28tbG9hZGVyI2NvbmZpZ1xcbiAgXCJcbn07XG52YXIgZXJyb3JIYW5kbGVyID0gY3VycnlbJ2RlZmF1bHQnXSh0aHJvd0Vycm9yKShlcnJvck1lc3NhZ2VzKTtcbnZhciB2YWxpZGF0b3JzID0ge1xuICBjb25maWc6IHZhbGlkYXRlQ29uZmlnXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB2YWxpZGF0b3JzO1xuZXhwb3J0cy5lcnJvckhhbmRsZXIgPSBlcnJvckhhbmRsZXI7XG5leHBvcnRzLmVycm9yTWVzc2FnZXMgPSBlcnJvck1lc3NhZ2VzO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNvbXBvc2UgPSBmdW5jdGlvbiBjb21wb3NlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZm5zID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGZuc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBmbnMucmVkdWNlUmlnaHQoZnVuY3Rpb24gKHksIGYpIHtcbiAgICAgIHJldHVybiBmKHkpO1xuICAgIH0sIHgpO1xuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY29tcG9zZTtcbiIsICIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBfcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzID0gcmVxdWlyZSgnLi4vX3ZpcnR1YWwvX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy5qcycpO1xuXG5mdW5jdGlvbiBtZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChzb3VyY2Vba2V5XSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgaWYgKHRhcmdldFtrZXldKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oc291cmNlW2tleV0sIG1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSkpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBfcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLm9iamVjdFNwcmVhZDIoX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy5vYmplY3RTcHJlYWQyKHt9LCB0YXJnZXQpLCBzb3VyY2UpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBtZXJnZTtcbiIsICIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbi8vIFRoZSBzb3VyY2UgKGhhcyBiZWVuIGNoYW5nZWQpIGlzIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvNTQ2NSNpc3N1ZWNvbW1lbnQtMTU3ODg4MzI1XG52YXIgQ0FOQ0VMQVRJT05fTUVTU0FHRSA9IHtcbiAgdHlwZTogJ2NhbmNlbGF0aW9uJyxcbiAgbXNnOiAnb3BlcmF0aW9uIGlzIG1hbnVhbGx5IGNhbmNlbGVkJ1xufTtcblxuZnVuY3Rpb24gbWFrZUNhbmNlbGFibGUocHJvbWlzZSkge1xuICB2YXIgaGFzQ2FuY2VsZWRfID0gZmFsc2U7XG4gIHZhciB3cmFwcGVkUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHZhbCkge1xuICAgICAgcmV0dXJuIGhhc0NhbmNlbGVkXyA/IHJlamVjdChDQU5DRUxBVElPTl9NRVNTQUdFKSA6IHJlc29sdmUodmFsKTtcbiAgICB9KTtcbiAgICBwcm9taXNlW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgfSk7XG4gIHJldHVybiB3cmFwcGVkUHJvbWlzZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGhhc0NhbmNlbGVkXyA9IHRydWU7XG4gIH0sIHdyYXBwZWRQcm9taXNlO1xufVxuXG5leHBvcnRzLkNBTkNFTEFUSU9OX01FU1NBR0UgPSBDQU5DRUxBVElPTl9NRVNTQUdFO1xuZXhwb3J0cy5kZWZhdWx0ID0gbWFrZUNhbmNlbGFibGU7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycyA9IHJlcXVpcmUoJy4uL192aXJ0dWFsL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMuanMnKTtcbnZhciBzdGF0ZSA9IHJlcXVpcmUoJ3N0YXRlLWxvY2FsJyk7XG52YXIgaW5kZXggPSByZXF1aXJlKCcuLi9jb25maWcvaW5kZXguanMnKTtcbnZhciBpbmRleCQxID0gcmVxdWlyZSgnLi4vdmFsaWRhdG9ycy9pbmRleC5qcycpO1xudmFyIGNvbXBvc2UgPSByZXF1aXJlKCcuLi91dGlscy9jb21wb3NlLmpzJyk7XG52YXIgZGVlcE1lcmdlID0gcmVxdWlyZSgnLi4vdXRpbHMvZGVlcE1lcmdlLmpzJyk7XG52YXIgbWFrZUNhbmNlbGFibGUgPSByZXF1aXJlKCcuLi91dGlscy9tYWtlQ2FuY2VsYWJsZS5qcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHRMZWdhY3kgKGUpIHsgcmV0dXJuIGUgJiYgdHlwZW9mIGUgPT09ICdvYmplY3QnICYmICdkZWZhdWx0JyBpbiBlID8gZSA6IHsgJ2RlZmF1bHQnOiBlIH07IH1cblxudmFyIHN0YXRlX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShzdGF0ZSk7XG5cbi8qKiB0aGUgbG9jYWwgc3RhdGUgb2YgdGhlIG1vZHVsZSAqL1xuXG52YXIgX3N0YXRlJGNyZWF0ZSA9IHN0YXRlX19kZWZhdWx0WydkZWZhdWx0J10uY3JlYXRlKHtcbiAgY29uZmlnOiBpbmRleFsnZGVmYXVsdCddLFxuICBpc0luaXRpYWxpemVkOiBmYWxzZSxcbiAgcmVzb2x2ZTogbnVsbCxcbiAgcmVqZWN0OiBudWxsLFxuICBtb25hY286IG51bGxcbn0pLFxuICAgIF9zdGF0ZSRjcmVhdGUyID0gX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy5zbGljZWRUb0FycmF5KF9zdGF0ZSRjcmVhdGUsIDIpLFxuICAgIGdldFN0YXRlID0gX3N0YXRlJGNyZWF0ZTJbMF0sXG4gICAgc2V0U3RhdGUgPSBfc3RhdGUkY3JlYXRlMlsxXTtcbi8qKlxuICogc2V0IHRoZSBsb2FkZXIgY29uZmlndXJhdGlvblxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyAtIHRoZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICovXG5cblxuZnVuY3Rpb24gY29uZmlnKGdsb2JhbENvbmZpZykge1xuICB2YXIgX3ZhbGlkYXRvcnMkY29uZmlnID0gaW5kZXgkMVsnZGVmYXVsdCddLmNvbmZpZyhnbG9iYWxDb25maWcpLFxuICAgICAgbW9uYWNvID0gX3ZhbGlkYXRvcnMkY29uZmlnLm1vbmFjbyxcbiAgICAgIGNvbmZpZyA9IF9yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMub2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3ZhbGlkYXRvcnMkY29uZmlnLCBbXCJtb25hY29cIl0pO1xuXG4gIHNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWc6IGRlZXBNZXJnZVsnZGVmYXVsdCddKHN0YXRlLmNvbmZpZywgY29uZmlnKSxcbiAgICAgIG1vbmFjbzogbW9uYWNvXG4gICAgfTtcbiAgfSk7XG59XG4vKipcbiAqIGhhbmRsZXMgdGhlIGluaXRpYWxpemF0aW9uIG9mIHRoZSBtb25hY28tZWRpdG9yXG4gKiBAcmV0dXJuIHtQcm9taXNlfSAtIHJldHVybnMgYW4gaW5zdGFuY2Ugb2YgbW9uYWNvICh3aXRoIGEgY2FuY2VsYWJsZSBwcm9taXNlKVxuICovXG5cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgdmFyIHN0YXRlID0gZ2V0U3RhdGUoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgbW9uYWNvID0gX3JlZi5tb25hY28sXG4gICAgICAgIGlzSW5pdGlhbGl6ZWQgPSBfcmVmLmlzSW5pdGlhbGl6ZWQsXG4gICAgICAgIHJlc29sdmUgPSBfcmVmLnJlc29sdmU7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vbmFjbzogbW9uYWNvLFxuICAgICAgaXNJbml0aWFsaXplZDogaXNJbml0aWFsaXplZCxcbiAgICAgIHJlc29sdmU6IHJlc29sdmVcbiAgICB9O1xuICB9KTtcblxuICBpZiAoIXN0YXRlLmlzSW5pdGlhbGl6ZWQpIHtcbiAgICBzZXRTdGF0ZSh7XG4gICAgICBpc0luaXRpYWxpemVkOiB0cnVlXG4gICAgfSk7XG5cbiAgICBpZiAoc3RhdGUubW9uYWNvKSB7XG4gICAgICBzdGF0ZS5yZXNvbHZlKHN0YXRlLm1vbmFjbyk7XG4gICAgICByZXR1cm4gbWFrZUNhbmNlbGFibGVbJ2RlZmF1bHQnXSh3cmFwcGVyUHJvbWlzZSk7XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5tb25hY28gJiYgd2luZG93Lm1vbmFjby5lZGl0b3IpIHtcbiAgICAgIHN0b3JlTW9uYWNvSW5zdGFuY2Uod2luZG93Lm1vbmFjbyk7XG4gICAgICBzdGF0ZS5yZXNvbHZlKHdpbmRvdy5tb25hY28pO1xuICAgICAgcmV0dXJuIG1ha2VDYW5jZWxhYmxlWydkZWZhdWx0J10od3JhcHBlclByb21pc2UpO1xuICAgIH1cblxuICAgIGNvbXBvc2VbJ2RlZmF1bHQnXShpbmplY3RTY3JpcHRzLCBnZXRNb25hY29Mb2FkZXJTY3JpcHQpKGNvbmZpZ3VyZUxvYWRlcik7XG4gIH1cblxuICByZXR1cm4gbWFrZUNhbmNlbGFibGVbJ2RlZmF1bHQnXSh3cmFwcGVyUHJvbWlzZSk7XG59XG4vKipcbiAqIGluamVjdHMgcHJvdmlkZWQgc2NyaXB0cyBpbnRvIHRoZSBkb2N1bWVudC5ib2R5XG4gKiBAcGFyYW0ge09iamVjdH0gc2NyaXB0IC0gYW4gSFRNTCBzY3JpcHQgZWxlbWVudFxuICogQHJldHVybiB7T2JqZWN0fSAtIHRoZSBpbmplY3RlZCBIVE1MIHNjcmlwdCBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiBpbmplY3RTY3JpcHRzKHNjcmlwdCkge1xuICByZXR1cm4gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xufVxuLyoqXG4gKiBjcmVhdGVzIGFuIEhUTUwgc2NyaXB0IGVsZW1lbnQgd2l0aC93aXRob3V0IHByb3ZpZGVkIHNyY1xuICogQHBhcmFtIHtzdHJpbmd9IFtzcmNdIC0gdGhlIHNvdXJjZSBwYXRoIG9mIHRoZSBzY3JpcHRcbiAqIEByZXR1cm4ge09iamVjdH0gLSB0aGUgY3JlYXRlZCBIVE1MIHNjcmlwdCBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVTY3JpcHQoc3JjKSB7XG4gIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgcmV0dXJuIHNyYyAmJiAoc2NyaXB0LnNyYyA9IHNyYyksIHNjcmlwdDtcbn1cbi8qKlxuICogY3JlYXRlcyBhbiBIVE1MIHNjcmlwdCBlbGVtZW50IHdpdGggdGhlIG1vbmFjbyBsb2FkZXIgc3JjXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gdGhlIGNyZWF0ZWQgSFRNTCBzY3JpcHQgZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gZ2V0TW9uYWNvTG9hZGVyU2NyaXB0KGNvbmZpZ3VyZUxvYWRlcikge1xuICB2YXIgc3RhdGUgPSBnZXRTdGF0ZShmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICB2YXIgY29uZmlnID0gX3JlZjIuY29uZmlnLFxuICAgICAgICByZWplY3QgPSBfcmVmMi5yZWplY3Q7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgcmVqZWN0OiByZWplY3RcbiAgICB9O1xuICB9KTtcbiAgdmFyIGxvYWRlclNjcmlwdCA9IGNyZWF0ZVNjcmlwdChcIlwiLmNvbmNhdChzdGF0ZS5jb25maWcucGF0aHMudnMsIFwiL2xvYWRlci5qc1wiKSk7XG5cbiAgbG9hZGVyU2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY29uZmlndXJlTG9hZGVyKCk7XG4gIH07XG5cbiAgbG9hZGVyU2NyaXB0Lm9uZXJyb3IgPSBzdGF0ZS5yZWplY3Q7XG4gIHJldHVybiBsb2FkZXJTY3JpcHQ7XG59XG4vKipcbiAqIGNvbmZpZ3VyZXMgdGhlIG1vbmFjbyBsb2FkZXJcbiAqL1xuXG5cbmZ1bmN0aW9uIGNvbmZpZ3VyZUxvYWRlcigpIHtcbiAgdmFyIHN0YXRlID0gZ2V0U3RhdGUoZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgdmFyIGNvbmZpZyA9IF9yZWYzLmNvbmZpZyxcbiAgICAgICAgcmVzb2x2ZSA9IF9yZWYzLnJlc29sdmUsXG4gICAgICAgIHJlamVjdCA9IF9yZWYzLnJlamVjdDtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgcmVqZWN0OiByZWplY3RcbiAgICB9O1xuICB9KTtcbiAgdmFyIHJlcXVpcmUgPSB3aW5kb3cucmVxdWlyZTtcblxuICByZXF1aXJlLmNvbmZpZyhzdGF0ZS5jb25maWcpO1xuXG4gIHJlcXVpcmUoWyd2cy9lZGl0b3IvZWRpdG9yLm1haW4nXSwgZnVuY3Rpb24gKG1vbmFjbykge1xuICAgIHN0b3JlTW9uYWNvSW5zdGFuY2UobW9uYWNvKTtcbiAgICBzdGF0ZS5yZXNvbHZlKG1vbmFjbyk7XG4gIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgIHN0YXRlLnJlamVjdChlcnJvcik7XG4gIH0pO1xufVxuLyoqXG4gKiBzdG9yZSBtb25hY28gaW5zdGFuY2UgaW4gbG9jYWwgc3RhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIHN0b3JlTW9uYWNvSW5zdGFuY2UobW9uYWNvKSB7XG4gIGlmICghZ2V0U3RhdGUoKS5tb25hY28pIHtcbiAgICBzZXRTdGF0ZSh7XG4gICAgICBtb25hY286IG1vbmFjb1xuICAgIH0pO1xuICB9XG59XG4vKipcbiAqIGludGVybmFsIGhlbHBlciBmdW5jdGlvblxuICogZXh0cmFjdHMgc3RvcmVkIG1vbmFjbyBpbnN0YW5jZVxuICogQHJldHVybiB7T2JqZWN0fG51bGx9IC0gdGhlIG1vbmFjbyBpbnN0YW5jZVxuICovXG5cblxuZnVuY3Rpb24gX19nZXRNb25hY29JbnN0YW5jZSgpIHtcbiAgcmV0dXJuIGdldFN0YXRlKGZ1bmN0aW9uIChfcmVmNCkge1xuICAgIHZhciBtb25hY28gPSBfcmVmNC5tb25hY287XG4gICAgcmV0dXJuIG1vbmFjbztcbiAgfSk7XG59XG5cbnZhciB3cmFwcGVyUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgcmV0dXJuIHNldFN0YXRlKHtcbiAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgIHJlamVjdDogcmVqZWN0XG4gIH0pO1xufSk7XG52YXIgbG9hZGVyID0ge1xuICBjb25maWc6IGNvbmZpZyxcbiAgaW5pdDogaW5pdCxcbiAgX19nZXRNb25hY29JbnN0YW5jZTogX19nZXRNb25hY29JbnN0YW5jZVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gbG9hZGVyO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGluZGV4ID0gcmVxdWlyZSgnLi9sb2FkZXIvaW5kZXguanMnKTtcblxuXG5cbmV4cG9ydHMuZGVmYXVsdCA9IGluZGV4WydkZWZhdWx0J107XG4iLCAiLy8gR2V0cyBhbGwgbm9uLWJ1aWx0aW4gcHJvcGVydGllcyB1cCB0aGUgcHJvdG90eXBlIGNoYWluLlxuY29uc3QgZ2V0QWxsUHJvcGVydGllcyA9IG9iamVjdCA9PiB7XG5cdGNvbnN0IHByb3BlcnRpZXMgPSBuZXcgU2V0KCk7XG5cblx0ZG8ge1xuXHRcdGZvciAoY29uc3Qga2V5IG9mIFJlZmxlY3Qub3duS2V5cyhvYmplY3QpKSB7XG5cdFx0XHRwcm9wZXJ0aWVzLmFkZChbb2JqZWN0LCBrZXldKTtcblx0XHR9XG5cdH0gd2hpbGUgKChvYmplY3QgPSBSZWZsZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCkpICYmIG9iamVjdCAhPT0gT2JqZWN0LnByb3RvdHlwZSk7XG5cblx0cmV0dXJuIHByb3BlcnRpZXM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhdXRvQmluZChzZWxmLCB7aW5jbHVkZSwgZXhjbHVkZX0gPSB7fSkge1xuXHRjb25zdCBmaWx0ZXIgPSBrZXkgPT4ge1xuXHRcdGNvbnN0IG1hdGNoID0gcGF0dGVybiA9PiB0eXBlb2YgcGF0dGVybiA9PT0gJ3N0cmluZycgPyBrZXkgPT09IHBhdHRlcm4gOiBwYXR0ZXJuLnRlc3Qoa2V5KTtcblxuXHRcdGlmIChpbmNsdWRlKSB7XG5cdFx0XHRyZXR1cm4gaW5jbHVkZS5zb21lKG1hdGNoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSB1bmljb3JuL25vLWFycmF5LWNhbGxiYWNrLXJlZmVyZW5jZVxuXHRcdH1cblxuXHRcdGlmIChleGNsdWRlKSB7XG5cdFx0XHRyZXR1cm4gIWV4Y2x1ZGUuc29tZShtYXRjaCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgdW5pY29ybi9uby1hcnJheS1jYWxsYmFjay1yZWZlcmVuY2Vcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblxuXHRmb3IgKGNvbnN0IFtvYmplY3QsIGtleV0gb2YgZ2V0QWxsUHJvcGVydGllcyhzZWxmLmNvbnN0cnVjdG9yLnByb3RvdHlwZSkpIHtcblx0XHRpZiAoa2V5ID09PSAnY29uc3RydWN0b3InIHx8ICFmaWx0ZXIoa2V5KSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZGVzY3JpcHRvciA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwga2V5KTtcblx0XHRpZiAoZGVzY3JpcHRvciAmJiB0eXBlb2YgZGVzY3JpcHRvci52YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0c2VsZltrZXldID0gc2VsZltrZXldLmJpbmQoc2VsZik7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHNlbGY7XG59XG4iLCAiZnVuY3Rpb24gbm9vcCgpIHsgfVxuY29uc3QgaWRlbnRpdHkgPSB4ID0+IHg7XG5mdW5jdGlvbiBhc3NpZ24odGFyLCBzcmMpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZm9yIChjb25zdCBrIGluIHNyYylcbiAgICAgICAgdGFyW2tdID0gc3JjW2tdO1xuICAgIHJldHVybiB0YXI7XG59XG4vLyBBZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3RoZW4vaXMtcHJvbWlzZS9ibG9iL21hc3Rlci9pbmRleC5qc1xuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgTUlUIExpY2Vuc2UgaHR0cHM6Ly9naXRodWIuY29tL3RoZW4vaXMtcHJvbWlzZS9ibG9iL21hc3Rlci9MSUNFTlNFXG5mdW5jdGlvbiBpc19wcm9taXNlKHZhbHVlKSB7XG4gICAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn1cbmZ1bmN0aW9uIGFkZF9sb2NhdGlvbihlbGVtZW50LCBmaWxlLCBsaW5lLCBjb2x1bW4sIGNoYXIpIHtcbiAgICBlbGVtZW50Ll9fc3ZlbHRlX21ldGEgPSB7XG4gICAgICAgIGxvYzogeyBmaWxlLCBsaW5lLCBjb2x1bW4sIGNoYXIgfVxuICAgIH07XG59XG5mdW5jdGlvbiBydW4oZm4pIHtcbiAgICByZXR1cm4gZm4oKTtcbn1cbmZ1bmN0aW9uIGJsYW5rX29iamVjdCgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsKTtcbn1cbmZ1bmN0aW9uIHJ1bl9hbGwoZm5zKSB7XG4gICAgZm5zLmZvckVhY2gocnVuKTtcbn1cbmZ1bmN0aW9uIGlzX2Z1bmN0aW9uKHRoaW5nKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmZ1bmN0aW9uIHNhZmVfbm90X2VxdWFsKGEsIGIpIHtcbiAgICByZXR1cm4gYSAhPSBhID8gYiA9PSBiIDogYSAhPT0gYiB8fCAoKGEgJiYgdHlwZW9mIGEgPT09ICdvYmplY3QnKSB8fCB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5sZXQgc3JjX3VybF9lcXVhbF9hbmNob3I7XG5mdW5jdGlvbiBzcmNfdXJsX2VxdWFsKGVsZW1lbnRfc3JjLCB1cmwpIHtcbiAgICBpZiAoIXNyY191cmxfZXF1YWxfYW5jaG9yKSB7XG4gICAgICAgIHNyY191cmxfZXF1YWxfYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIH1cbiAgICBzcmNfdXJsX2VxdWFsX2FuY2hvci5ocmVmID0gdXJsO1xuICAgIHJldHVybiBlbGVtZW50X3NyYyA9PT0gc3JjX3VybF9lcXVhbF9hbmNob3IuaHJlZjtcbn1cbmZ1bmN0aW9uIG5vdF9lcXVhbChhLCBiKSB7XG4gICAgcmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGI7XG59XG5mdW5jdGlvbiBpc19lbXB0eShvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5sZW5ndGggPT09IDA7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV9zdG9yZShzdG9yZSwgbmFtZSkge1xuICAgIGlmIChzdG9yZSAhPSBudWxsICYmIHR5cGVvZiBzdG9yZS5zdWJzY3JpYmUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAnJHtuYW1lfScgaXMgbm90IGEgc3RvcmUgd2l0aCBhICdzdWJzY3JpYmUnIG1ldGhvZGApO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHN1YnNjcmliZShzdG9yZSwgLi4uY2FsbGJhY2tzKSB7XG4gICAgaWYgKHN0b3JlID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG5vb3A7XG4gICAgfVxuICAgIGNvbnN0IHVuc3ViID0gc3RvcmUuc3Vic2NyaWJlKC4uLmNhbGxiYWNrcyk7XG4gICAgcmV0dXJuIHVuc3ViLnVuc3Vic2NyaWJlID8gKCkgPT4gdW5zdWIudW5zdWJzY3JpYmUoKSA6IHVuc3ViO1xufVxuZnVuY3Rpb24gZ2V0X3N0b3JlX3ZhbHVlKHN0b3JlKSB7XG4gICAgbGV0IHZhbHVlO1xuICAgIHN1YnNjcmliZShzdG9yZSwgXyA9PiB2YWx1ZSA9IF8pKCk7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gY29tcG9uZW50X3N1YnNjcmliZShjb21wb25lbnQsIHN0b3JlLCBjYWxsYmFjaykge1xuICAgIGNvbXBvbmVudC4kJC5vbl9kZXN0cm95LnB1c2goc3Vic2NyaWJlKHN0b3JlLCBjYWxsYmFjaykpO1xufVxuZnVuY3Rpb24gY3JlYXRlX3Nsb3QoZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBmbikge1xuICAgIGlmIChkZWZpbml0aW9uKSB7XG4gICAgICAgIGNvbnN0IHNsb3RfY3R4ID0gZ2V0X3Nsb3RfY29udGV4dChkZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGZuKTtcbiAgICAgICAgcmV0dXJuIGRlZmluaXRpb25bMF0oc2xvdF9jdHgpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldF9zbG90X2NvbnRleHQoZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBmbikge1xuICAgIHJldHVybiBkZWZpbml0aW9uWzFdICYmIGZuXG4gICAgICAgID8gYXNzaWduKCQkc2NvcGUuY3R4LnNsaWNlKCksIGRlZmluaXRpb25bMV0oZm4oY3R4KSkpXG4gICAgICAgIDogJCRzY29wZS5jdHg7XG59XG5mdW5jdGlvbiBnZXRfc2xvdF9jaGFuZ2VzKGRlZmluaXRpb24sICQkc2NvcGUsIGRpcnR5LCBmbikge1xuICAgIGlmIChkZWZpbml0aW9uWzJdICYmIGZuKSB7XG4gICAgICAgIGNvbnN0IGxldHMgPSBkZWZpbml0aW9uWzJdKGZuKGRpcnR5KSk7XG4gICAgICAgIGlmICgkJHNjb3BlLmRpcnR5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBsZXRzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbGV0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lcmdlZCA9IFtdO1xuICAgICAgICAgICAgY29uc3QgbGVuID0gTWF0aC5tYXgoJCRzY29wZS5kaXJ0eS5sZW5ndGgsIGxldHMubGVuZ3RoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRbaV0gPSAkJHNjb3BlLmRpcnR5W2ldIHwgbGV0c1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtZXJnZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICQkc2NvcGUuZGlydHkgfCBsZXRzO1xuICAgIH1cbiAgICByZXR1cm4gJCRzY29wZS5kaXJ0eTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZV9zbG90X2Jhc2Uoc2xvdCwgc2xvdF9kZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIHNsb3RfY2hhbmdlcywgZ2V0X3Nsb3RfY29udGV4dF9mbikge1xuICAgIGlmIChzbG90X2NoYW5nZXMpIHtcbiAgICAgICAgY29uc3Qgc2xvdF9jb250ZXh0ID0gZ2V0X3Nsb3RfY29udGV4dChzbG90X2RlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZ2V0X3Nsb3RfY29udGV4dF9mbik7XG4gICAgICAgIHNsb3QucChzbG90X2NvbnRleHQsIHNsb3RfY2hhbmdlcyk7XG4gICAgfVxufVxuZnVuY3Rpb24gdXBkYXRlX3Nsb3Qoc2xvdCwgc2xvdF9kZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGRpcnR5LCBnZXRfc2xvdF9jaGFuZ2VzX2ZuLCBnZXRfc2xvdF9jb250ZXh0X2ZuKSB7XG4gICAgY29uc3Qgc2xvdF9jaGFuZ2VzID0gZ2V0X3Nsb3RfY2hhbmdlcyhzbG90X2RlZmluaXRpb24sICQkc2NvcGUsIGRpcnR5LCBnZXRfc2xvdF9jaGFuZ2VzX2ZuKTtcbiAgICB1cGRhdGVfc2xvdF9iYXNlKHNsb3QsIHNsb3RfZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBzbG90X2NoYW5nZXMsIGdldF9zbG90X2NvbnRleHRfZm4pO1xufVxuZnVuY3Rpb24gZ2V0X2FsbF9kaXJ0eV9mcm9tX3Njb3BlKCQkc2NvcGUpIHtcbiAgICBpZiAoJCRzY29wZS5jdHgubGVuZ3RoID4gMzIpIHtcbiAgICAgICAgY29uc3QgZGlydHkgPSBbXTtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gJCRzY29wZS5jdHgubGVuZ3RoIC8gMzI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRpcnR5W2ldID0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpcnR5O1xuICAgIH1cbiAgICByZXR1cm4gLTE7XG59XG5mdW5jdGlvbiBleGNsdWRlX2ludGVybmFsX3Byb3BzKHByb3BzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCBrIGluIHByb3BzKVxuICAgICAgICBpZiAoa1swXSAhPT0gJyQnKVxuICAgICAgICAgICAgcmVzdWx0W2tdID0gcHJvcHNba107XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGNvbXB1dGVfcmVzdF9wcm9wcyhwcm9wcywga2V5cykge1xuICAgIGNvbnN0IHJlc3QgPSB7fTtcbiAgICBrZXlzID0gbmV3IFNldChrZXlzKTtcbiAgICBmb3IgKGNvbnN0IGsgaW4gcHJvcHMpXG4gICAgICAgIGlmICgha2V5cy5oYXMoaykgJiYga1swXSAhPT0gJyQnKVxuICAgICAgICAgICAgcmVzdFtrXSA9IHByb3BzW2tdO1xuICAgIHJldHVybiByZXN0O1xufVxuZnVuY3Rpb24gY29tcHV0ZV9zbG90cyhzbG90cykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIHNsb3RzKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG9uY2UoZm4pIHtcbiAgICBsZXQgcmFuID0gZmFsc2U7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIGlmIChyYW4pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHJhbiA9IHRydWU7XG4gICAgICAgIGZuLmNhbGwodGhpcywgLi4uYXJncyk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIG51bGxfdG9fZW1wdHkodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG59XG5mdW5jdGlvbiBzZXRfc3RvcmVfdmFsdWUoc3RvcmUsIHJldCwgdmFsdWUpIHtcbiAgICBzdG9yZS5zZXQodmFsdWUpO1xuICAgIHJldHVybiByZXQ7XG59XG5jb25zdCBoYXNfcHJvcCA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xuZnVuY3Rpb24gYWN0aW9uX2Rlc3Ryb3llcihhY3Rpb25fcmVzdWx0KSB7XG4gICAgcmV0dXJuIGFjdGlvbl9yZXN1bHQgJiYgaXNfZnVuY3Rpb24oYWN0aW9uX3Jlc3VsdC5kZXN0cm95KSA/IGFjdGlvbl9yZXN1bHQuZGVzdHJveSA6IG5vb3A7XG59XG5mdW5jdGlvbiBzcGxpdF9jc3NfdW5pdCh2YWx1ZSkge1xuICAgIGNvbnN0IHNwbGl0ID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5tYXRjaCgvXlxccyooLT9bXFxkLl0rKShbXlxcc10qKVxccyokLyk7XG4gICAgcmV0dXJuIHNwbGl0ID8gW3BhcnNlRmxvYXQoc3BsaXRbMV0pLCBzcGxpdFsyXSB8fCAncHgnXSA6IFt2YWx1ZSwgJ3B4J107XG59XG5jb25zdCBjb250ZW50ZWRpdGFibGVfdHJ1dGh5X3ZhbHVlcyA9IFsnJywgdHJ1ZSwgMSwgJ3RydWUnLCAnY29udGVudGVkaXRhYmxlJ107XG5cbmNvbnN0IGlzX2NsaWVudCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xubGV0IG5vdyA9IGlzX2NsaWVudFxuICAgID8gKCkgPT4gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpXG4gICAgOiAoKSA9PiBEYXRlLm5vdygpO1xubGV0IHJhZiA9IGlzX2NsaWVudCA/IGNiID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShjYikgOiBub29wO1xuLy8gdXNlZCBpbnRlcm5hbGx5IGZvciB0ZXN0aW5nXG5mdW5jdGlvbiBzZXRfbm93KGZuKSB7XG4gICAgbm93ID0gZm47XG59XG5mdW5jdGlvbiBzZXRfcmFmKGZuKSB7XG4gICAgcmFmID0gZm47XG59XG5cbmNvbnN0IHRhc2tzID0gbmV3IFNldCgpO1xuZnVuY3Rpb24gcnVuX3Rhc2tzKG5vdykge1xuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGlmICghdGFzay5jKG5vdykpIHtcbiAgICAgICAgICAgIHRhc2tzLmRlbGV0ZSh0YXNrKTtcbiAgICAgICAgICAgIHRhc2suZigpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHRhc2tzLnNpemUgIT09IDApXG4gICAgICAgIHJhZihydW5fdGFza3MpO1xufVxuLyoqXG4gKiBGb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5IVxuICovXG5mdW5jdGlvbiBjbGVhcl9sb29wcygpIHtcbiAgICB0YXNrcy5jbGVhcigpO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHRhc2sgdGhhdCBydW5zIG9uIGVhY2ggcmFmIGZyYW1lXG4gKiB1bnRpbCBpdCByZXR1cm5zIGEgZmFsc3kgdmFsdWUgb3IgaXMgYWJvcnRlZFxuICovXG5mdW5jdGlvbiBsb29wKGNhbGxiYWNrKSB7XG4gICAgbGV0IHRhc2s7XG4gICAgaWYgKHRhc2tzLnNpemUgPT09IDApXG4gICAgICAgIHJhZihydW5fdGFza3MpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb21pc2U6IG5ldyBQcm9taXNlKGZ1bGZpbGwgPT4ge1xuICAgICAgICAgICAgdGFza3MuYWRkKHRhc2sgPSB7IGM6IGNhbGxiYWNrLCBmOiBmdWxmaWxsIH0pO1xuICAgICAgICB9KSxcbiAgICAgICAgYWJvcnQoKSB7XG4gICAgICAgICAgICB0YXNrcy5kZWxldGUodGFzayk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5jb25zdCBnbG9iYWxzID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgPyB3aW5kb3dcbiAgICA6IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IGdsb2JhbFRoaXNcbiAgICAgICAgOiBnbG9iYWwpO1xuXG4vKipcbiAqIFJlc2l6ZSBvYnNlcnZlciBzaW5nbGV0b24uXG4gKiBPbmUgbGlzdGVuZXIgcGVyIGVsZW1lbnQgb25seSFcbiAqIGh0dHBzOi8vZ3JvdXBzLmdvb2dsZS5jb20vYS9jaHJvbWl1bS5vcmcvZy9ibGluay1kZXYvYy96Nmllbk9OVWI1QS9tL0Y1LVZjVVp0QkFBSlxuICovXG5jbGFzcyBSZXNpemVPYnNlcnZlclNpbmdsZXRvbiB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLl9saXN0ZW5lcnMgPSAnV2Vha01hcCcgaW4gZ2xvYmFscyA/IG5ldyBXZWFrTWFwKCkgOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIG9ic2VydmUoZWxlbWVudCwgbGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzLnNldChlbGVtZW50LCBsaXN0ZW5lcik7XG4gICAgICAgIHRoaXMuX2dldE9ic2VydmVyKCkub2JzZXJ2ZShlbGVtZW50LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fbGlzdGVuZXJzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuX29ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTsgLy8gdGhpcyBsaW5lIGNhbiBwcm9iYWJseSBiZSByZW1vdmVkXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9nZXRPYnNlcnZlcigpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZXR1cm4gKF9hID0gdGhpcy5fb2JzZXJ2ZXIpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICh0aGlzLl9vYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgUmVzaXplT2JzZXJ2ZXJTaW5nbGV0b24uZW50cmllcy5zZXQoZW50cnkudGFyZ2V0LCBlbnRyeSk7XG4gICAgICAgICAgICAgICAgKF9hID0gdGhpcy5fbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EoZW50cnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgfVxufVxuLy8gTmVlZHMgdG8gYmUgd3JpdHRlbiBsaWtlIHRoaXMgdG8gcGFzcyB0aGUgdHJlZS1zaGFrZS10ZXN0XG5SZXNpemVPYnNlcnZlclNpbmdsZXRvbi5lbnRyaWVzID0gJ1dlYWtNYXAnIGluIGdsb2JhbHMgPyBuZXcgV2Vha01hcCgpIDogdW5kZWZpbmVkO1xuXG4vLyBUcmFjayB3aGljaCBub2RlcyBhcmUgY2xhaW1lZCBkdXJpbmcgaHlkcmF0aW9uLiBVbmNsYWltZWQgbm9kZXMgY2FuIHRoZW4gYmUgcmVtb3ZlZCBmcm9tIHRoZSBET01cbi8vIGF0IHRoZSBlbmQgb2YgaHlkcmF0aW9uIHdpdGhvdXQgdG91Y2hpbmcgdGhlIHJlbWFpbmluZyBub2Rlcy5cbmxldCBpc19oeWRyYXRpbmcgPSBmYWxzZTtcbmZ1bmN0aW9uIHN0YXJ0X2h5ZHJhdGluZygpIHtcbiAgICBpc19oeWRyYXRpbmcgPSB0cnVlO1xufVxuZnVuY3Rpb24gZW5kX2h5ZHJhdGluZygpIHtcbiAgICBpc19oeWRyYXRpbmcgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIHVwcGVyX2JvdW5kKGxvdywgaGlnaCwga2V5LCB2YWx1ZSkge1xuICAgIC8vIFJldHVybiBmaXJzdCBpbmRleCBvZiB2YWx1ZSBsYXJnZXIgdGhhbiBpbnB1dCB2YWx1ZSBpbiB0aGUgcmFuZ2UgW2xvdywgaGlnaClcbiAgICB3aGlsZSAobG93IDwgaGlnaCkge1xuICAgICAgICBjb25zdCBtaWQgPSBsb3cgKyAoKGhpZ2ggLSBsb3cpID4+IDEpO1xuICAgICAgICBpZiAoa2V5KG1pZCkgPD0gdmFsdWUpIHtcbiAgICAgICAgICAgIGxvdyA9IG1pZCArIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBoaWdoID0gbWlkO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsb3c7XG59XG5mdW5jdGlvbiBpbml0X2h5ZHJhdGUodGFyZ2V0KSB7XG4gICAgaWYgKHRhcmdldC5oeWRyYXRlX2luaXQpXG4gICAgICAgIHJldHVybjtcbiAgICB0YXJnZXQuaHlkcmF0ZV9pbml0ID0gdHJ1ZTtcbiAgICAvLyBXZSBrbm93IHRoYXQgYWxsIGNoaWxkcmVuIGhhdmUgY2xhaW1fb3JkZXIgdmFsdWVzIHNpbmNlIHRoZSB1bmNsYWltZWQgaGF2ZSBiZWVuIGRldGFjaGVkIGlmIHRhcmdldCBpcyBub3QgPGhlYWQ+XG4gICAgbGV0IGNoaWxkcmVuID0gdGFyZ2V0LmNoaWxkTm9kZXM7XG4gICAgLy8gSWYgdGFyZ2V0IGlzIDxoZWFkPiwgdGhlcmUgbWF5IGJlIGNoaWxkcmVuIHdpdGhvdXQgY2xhaW1fb3JkZXJcbiAgICBpZiAodGFyZ2V0Lm5vZGVOYW1lID09PSAnSEVBRCcpIHtcbiAgICAgICAgY29uc3QgbXlDaGlsZHJlbiA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAobm9kZS5jbGFpbV9vcmRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbXlDaGlsZHJlbi5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNoaWxkcmVuID0gbXlDaGlsZHJlbjtcbiAgICB9XG4gICAgLypcbiAgICAqIFJlb3JkZXIgY2xhaW1lZCBjaGlsZHJlbiBvcHRpbWFsbHkuXG4gICAgKiBXZSBjYW4gcmVvcmRlciBjbGFpbWVkIGNoaWxkcmVuIG9wdGltYWxseSBieSBmaW5kaW5nIHRoZSBsb25nZXN0IHN1YnNlcXVlbmNlIG9mXG4gICAgKiBub2RlcyB0aGF0IGFyZSBhbHJlYWR5IGNsYWltZWQgaW4gb3JkZXIgYW5kIG9ubHkgbW92aW5nIHRoZSByZXN0LiBUaGUgbG9uZ2VzdFxuICAgICogc3Vic2VxdWVuY2Ugb2Ygbm9kZXMgdGhhdCBhcmUgY2xhaW1lZCBpbiBvcmRlciBjYW4gYmUgZm91bmQgYnlcbiAgICAqIGNvbXB1dGluZyB0aGUgbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlIG9mIC5jbGFpbV9vcmRlciB2YWx1ZXMuXG4gICAgKlxuICAgICogVGhpcyBhbGdvcml0aG0gaXMgb3B0aW1hbCBpbiBnZW5lcmF0aW5nIHRoZSBsZWFzdCBhbW91bnQgb2YgcmVvcmRlciBvcGVyYXRpb25zXG4gICAgKiBwb3NzaWJsZS5cbiAgICAqXG4gICAgKiBQcm9vZjpcbiAgICAqIFdlIGtub3cgdGhhdCwgZ2l2ZW4gYSBzZXQgb2YgcmVvcmRlcmluZyBvcGVyYXRpb25zLCB0aGUgbm9kZXMgdGhhdCBkbyBub3QgbW92ZVxuICAgICogYWx3YXlzIGZvcm0gYW4gaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSwgc2luY2UgdGhleSBkbyBub3QgbW92ZSBhbW9uZyBlYWNoIG90aGVyXG4gICAgKiBtZWFuaW5nIHRoYXQgdGhleSBtdXN0IGJlIGFscmVhZHkgb3JkZXJlZCBhbW9uZyBlYWNoIG90aGVyLiBUaHVzLCB0aGUgbWF4aW1hbFxuICAgICogc2V0IG9mIG5vZGVzIHRoYXQgZG8gbm90IG1vdmUgZm9ybSBhIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZS5cbiAgICAqL1xuICAgIC8vIENvbXB1dGUgbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlXG4gICAgLy8gbTogc3Vic2VxdWVuY2UgbGVuZ3RoIGogPT4gaW5kZXggayBvZiBzbWFsbGVzdCB2YWx1ZSB0aGF0IGVuZHMgYW4gaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSBvZiBsZW5ndGggalxuICAgIGNvbnN0IG0gPSBuZXcgSW50MzJBcnJheShjaGlsZHJlbi5sZW5ndGggKyAxKTtcbiAgICAvLyBQcmVkZWNlc3NvciBpbmRpY2VzICsgMVxuICAgIGNvbnN0IHAgPSBuZXcgSW50MzJBcnJheShjaGlsZHJlbi5sZW5ndGgpO1xuICAgIG1bMF0gPSAtMTtcbiAgICBsZXQgbG9uZ2VzdCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gY2hpbGRyZW5baV0uY2xhaW1fb3JkZXI7XG4gICAgICAgIC8vIEZpbmQgdGhlIGxhcmdlc3Qgc3Vic2VxdWVuY2UgbGVuZ3RoIHN1Y2ggdGhhdCBpdCBlbmRzIGluIGEgdmFsdWUgbGVzcyB0aGFuIG91ciBjdXJyZW50IHZhbHVlXG4gICAgICAgIC8vIHVwcGVyX2JvdW5kIHJldHVybnMgZmlyc3QgZ3JlYXRlciB2YWx1ZSwgc28gd2Ugc3VidHJhY3Qgb25lXG4gICAgICAgIC8vIHdpdGggZmFzdCBwYXRoIGZvciB3aGVuIHdlIGFyZSBvbiB0aGUgY3VycmVudCBsb25nZXN0IHN1YnNlcXVlbmNlXG4gICAgICAgIGNvbnN0IHNlcUxlbiA9ICgobG9uZ2VzdCA+IDAgJiYgY2hpbGRyZW5bbVtsb25nZXN0XV0uY2xhaW1fb3JkZXIgPD0gY3VycmVudCkgPyBsb25nZXN0ICsgMSA6IHVwcGVyX2JvdW5kKDEsIGxvbmdlc3QsIGlkeCA9PiBjaGlsZHJlblttW2lkeF1dLmNsYWltX29yZGVyLCBjdXJyZW50KSkgLSAxO1xuICAgICAgICBwW2ldID0gbVtzZXFMZW5dICsgMTtcbiAgICAgICAgY29uc3QgbmV3TGVuID0gc2VxTGVuICsgMTtcbiAgICAgICAgLy8gV2UgY2FuIGd1YXJhbnRlZSB0aGF0IGN1cnJlbnQgaXMgdGhlIHNtYWxsZXN0IHZhbHVlLiBPdGhlcndpc2UsIHdlIHdvdWxkIGhhdmUgZ2VuZXJhdGVkIGEgbG9uZ2VyIHNlcXVlbmNlLlxuICAgICAgICBtW25ld0xlbl0gPSBpO1xuICAgICAgICBsb25nZXN0ID0gTWF0aC5tYXgobmV3TGVuLCBsb25nZXN0KTtcbiAgICB9XG4gICAgLy8gVGhlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSBvZiBub2RlcyAoaW5pdGlhbGx5IHJldmVyc2VkKVxuICAgIGNvbnN0IGxpcyA9IFtdO1xuICAgIC8vIFRoZSByZXN0IG9mIHRoZSBub2Rlcywgbm9kZXMgdGhhdCB3aWxsIGJlIG1vdmVkXG4gICAgY29uc3QgdG9Nb3ZlID0gW107XG4gICAgbGV0IGxhc3QgPSBjaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgIGZvciAobGV0IGN1ciA9IG1bbG9uZ2VzdF0gKyAxOyBjdXIgIT0gMDsgY3VyID0gcFtjdXIgLSAxXSkge1xuICAgICAgICBsaXMucHVzaChjaGlsZHJlbltjdXIgLSAxXSk7XG4gICAgICAgIGZvciAoOyBsYXN0ID49IGN1cjsgbGFzdC0tKSB7XG4gICAgICAgICAgICB0b01vdmUucHVzaChjaGlsZHJlbltsYXN0XSk7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdC0tO1xuICAgIH1cbiAgICBmb3IgKDsgbGFzdCA+PSAwOyBsYXN0LS0pIHtcbiAgICAgICAgdG9Nb3ZlLnB1c2goY2hpbGRyZW5bbGFzdF0pO1xuICAgIH1cbiAgICBsaXMucmV2ZXJzZSgpO1xuICAgIC8vIFdlIHNvcnQgdGhlIG5vZGVzIGJlaW5nIG1vdmVkIHRvIGd1YXJhbnRlZSB0aGF0IHRoZWlyIGluc2VydGlvbiBvcmRlciBtYXRjaGVzIHRoZSBjbGFpbSBvcmRlclxuICAgIHRvTW92ZS5zb3J0KChhLCBiKSA9PiBhLmNsYWltX29yZGVyIC0gYi5jbGFpbV9vcmRlcik7XG4gICAgLy8gRmluYWxseSwgd2UgbW92ZSB0aGUgbm9kZXNcbiAgICBmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCB0b01vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgd2hpbGUgKGogPCBsaXMubGVuZ3RoICYmIHRvTW92ZVtpXS5jbGFpbV9vcmRlciA+PSBsaXNbal0uY2xhaW1fb3JkZXIpIHtcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbmNob3IgPSBqIDwgbGlzLmxlbmd0aCA/IGxpc1tqXSA6IG51bGw7XG4gICAgICAgIHRhcmdldC5pbnNlcnRCZWZvcmUodG9Nb3ZlW2ldLCBhbmNob3IpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFwcGVuZCh0YXJnZXQsIG5vZGUpIHtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XG59XG5mdW5jdGlvbiBhcHBlbmRfc3R5bGVzKHRhcmdldCwgc3R5bGVfc2hlZXRfaWQsIHN0eWxlcykge1xuICAgIGNvbnN0IGFwcGVuZF9zdHlsZXNfdG8gPSBnZXRfcm9vdF9mb3Jfc3R5bGUodGFyZ2V0KTtcbiAgICBpZiAoIWFwcGVuZF9zdHlsZXNfdG8uZ2V0RWxlbWVudEJ5SWQoc3R5bGVfc2hlZXRfaWQpKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgc3R5bGUuaWQgPSBzdHlsZV9zaGVldF9pZDtcbiAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBzdHlsZXM7XG4gICAgICAgIGFwcGVuZF9zdHlsZXNoZWV0KGFwcGVuZF9zdHlsZXNfdG8sIHN0eWxlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRfcm9vdF9mb3Jfc3R5bGUobm9kZSkge1xuICAgIGlmICghbm9kZSlcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIGNvbnN0IHJvb3QgPSBub2RlLmdldFJvb3ROb2RlID8gbm9kZS5nZXRSb290Tm9kZSgpIDogbm9kZS5vd25lckRvY3VtZW50O1xuICAgIGlmIChyb290ICYmIHJvb3QuaG9zdCkge1xuICAgICAgICByZXR1cm4gcm9vdDtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGUub3duZXJEb2N1bWVudDtcbn1cbmZ1bmN0aW9uIGFwcGVuZF9lbXB0eV9zdHlsZXNoZWV0KG5vZGUpIHtcbiAgICBjb25zdCBzdHlsZV9lbGVtZW50ID0gZWxlbWVudCgnc3R5bGUnKTtcbiAgICBhcHBlbmRfc3R5bGVzaGVldChnZXRfcm9vdF9mb3Jfc3R5bGUobm9kZSksIHN0eWxlX2VsZW1lbnQpO1xuICAgIHJldHVybiBzdHlsZV9lbGVtZW50LnNoZWV0O1xufVxuZnVuY3Rpb24gYXBwZW5kX3N0eWxlc2hlZXQobm9kZSwgc3R5bGUpIHtcbiAgICBhcHBlbmQobm9kZS5oZWFkIHx8IG5vZGUsIHN0eWxlKTtcbiAgICByZXR1cm4gc3R5bGUuc2hlZXQ7XG59XG5mdW5jdGlvbiBhcHBlbmRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSkge1xuICAgIGlmIChpc19oeWRyYXRpbmcpIHtcbiAgICAgICAgaW5pdF9oeWRyYXRlKHRhcmdldCk7XG4gICAgICAgIGlmICgodGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPT09IHVuZGVmaW5lZCkgfHwgKCh0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCAhPT0gbnVsbCkgJiYgKHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkLnBhcmVudE5vZGUgIT09IHRhcmdldCkpKSB7XG4gICAgICAgICAgICB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCA9IHRhcmdldC5maXJzdENoaWxkO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNraXAgbm9kZXMgb2YgdW5kZWZpbmVkIG9yZGVyaW5nXG4gICAgICAgIHdoaWxlICgodGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgIT09IG51bGwpICYmICh0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZC5jbGFpbV9vcmRlciA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPSB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZSAhPT0gdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQpIHtcbiAgICAgICAgICAgIC8vIFdlIG9ubHkgaW5zZXJ0IGlmIHRoZSBvcmRlcmluZyBvZiB0aGlzIG5vZGUgc2hvdWxkIGJlIG1vZGlmaWVkIG9yIHRoZSBwYXJlbnQgbm9kZSBpcyBub3QgdGFyZ2V0XG4gICAgICAgICAgICBpZiAobm9kZS5jbGFpbV9vcmRlciAhPT0gdW5kZWZpbmVkIHx8IG5vZGUucGFyZW50Tm9kZSAhPT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCA9IG5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlICE9PSB0YXJnZXQgfHwgbm9kZS5uZXh0U2libGluZyAhPT0gbnVsbCkge1xuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gaW5zZXJ0KHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IgfHwgbnVsbCk7XG59XG5mdW5jdGlvbiBpbnNlcnRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgaWYgKGlzX2h5ZHJhdGluZyAmJiAhYW5jaG9yKSB7XG4gICAgICAgIGFwcGVuZF9oeWRyYXRpb24odGFyZ2V0LCBub2RlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlICE9PSB0YXJnZXQgfHwgbm9kZS5uZXh0U2libGluZyAhPSBhbmNob3IpIHtcbiAgICAgICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IgfHwgbnVsbCk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGV0YWNoKG5vZGUpIHtcbiAgICBpZiAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZXN0cm95X2VhY2goaXRlcmF0aW9ucywgZGV0YWNoaW5nKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVyYXRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChpdGVyYXRpb25zW2ldKVxuICAgICAgICAgICAgaXRlcmF0aW9uc1tpXS5kKGRldGFjaGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZWxlbWVudChuYW1lKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG59XG5mdW5jdGlvbiBlbGVtZW50X2lzKG5hbWUsIGlzKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSwgeyBpcyB9KTtcbn1cbmZ1bmN0aW9uIG9iamVjdF93aXRob3V0X3Byb3BlcnRpZXMob2JqLCBleGNsdWRlKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0ge307XG4gICAgZm9yIChjb25zdCBrIGluIG9iaikge1xuICAgICAgICBpZiAoaGFzX3Byb3Aob2JqLCBrKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgJiYgZXhjbHVkZS5pbmRleE9mKGspID09PSAtMSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdGFyZ2V0W2tdID0gb2JqW2tdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBzdmdfZWxlbWVudChuYW1lKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBuYW1lKTtcbn1cbmZ1bmN0aW9uIHRleHQoZGF0YSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhKTtcbn1cbmZ1bmN0aW9uIHNwYWNlKCkge1xuICAgIHJldHVybiB0ZXh0KCcgJyk7XG59XG5mdW5jdGlvbiBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGV4dCgnJyk7XG59XG5mdW5jdGlvbiBjb21tZW50KGNvbnRlbnQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudChjb250ZW50KTtcbn1cbmZ1bmN0aW9uIGxpc3Rlbihub2RlLCBldmVudCwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgcmV0dXJuICgpID0+IG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG59XG5mdW5jdGlvbiBwcmV2ZW50X2RlZmF1bHQoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH07XG59XG5mdW5jdGlvbiBzdG9wX3Byb3BhZ2F0aW9uKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHN0b3BfaW1tZWRpYXRlX3Byb3BhZ2F0aW9uKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHNlbGYoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcylcbiAgICAgICAgICAgIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH07XG59XG5mdW5jdGlvbiB0cnVzdGVkKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChldmVudC5pc1RydXN0ZWQpXG4gICAgICAgICAgICBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gYXR0cihub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpXG4gICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgZWxzZSBpZiAobm9kZS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKSAhPT0gdmFsdWUpXG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xufVxuLyoqXG4gKiBMaXN0IG9mIGF0dHJpYnV0ZXMgdGhhdCBzaG91bGQgYWx3YXlzIGJlIHNldCB0aHJvdWdoIHRoZSBhdHRyIG1ldGhvZCxcbiAqIGJlY2F1c2UgdXBkYXRpbmcgdGhlbSB0aHJvdWdoIHRoZSBwcm9wZXJ0eSBzZXR0ZXIgZG9lc24ndCB3b3JrIHJlbGlhYmx5LlxuICogSW4gdGhlIGV4YW1wbGUgb2YgYHdpZHRoYC9gaGVpZ2h0YCwgdGhlIHByb2JsZW0gaXMgdGhhdCB0aGUgc2V0dGVyIG9ubHlcbiAqIGFjY2VwdHMgbnVtZXJpYyB2YWx1ZXMsIGJ1dCB0aGUgYXR0cmlidXRlIGNhbiBhbHNvIGJlIHNldCB0byBhIHN0cmluZyBsaWtlIGA1MCVgLlxuICogSWYgdGhpcyBsaXN0IGJlY29tZXMgdG9vIGJpZywgcmV0aGluayB0aGlzIGFwcHJvYWNoLlxuICovXG5jb25zdCBhbHdheXNfc2V0X3Rocm91Z2hfc2V0X2F0dHJpYnV0ZSA9IFsnd2lkdGgnLCAnaGVpZ2h0J107XG5mdW5jdGlvbiBzZXRfYXR0cmlidXRlcyhub2RlLCBhdHRyaWJ1dGVzKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IGRlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMobm9kZS5fX3Byb3RvX18pO1xuICAgIGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXNba2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGtleSA9PT0gJ3N0eWxlJykge1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5jc3NUZXh0ID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGtleSA9PT0gJ19fdmFsdWUnKSB7XG4gICAgICAgICAgICBub2RlLnZhbHVlID0gbm9kZVtrZXldID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRlc2NyaXB0b3JzW2tleV0gJiYgZGVzY3JpcHRvcnNba2V5XS5zZXQgJiYgYWx3YXlzX3NldF90aHJvdWdoX3NldF9hdHRyaWJ1dGUuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgbm9kZVtrZXldID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXR0cihub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBzZXRfc3ZnX2F0dHJpYnV0ZXMobm9kZSwgYXR0cmlidXRlcykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgYXR0cihub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgfVxufVxuZnVuY3Rpb24gc2V0X2N1c3RvbV9lbGVtZW50X2RhdGFfbWFwKG5vZGUsIGRhdGFfbWFwKSB7XG4gICAgT2JqZWN0LmtleXMoZGF0YV9tYXApLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBzZXRfY3VzdG9tX2VsZW1lbnRfZGF0YShub2RlLCBrZXksIGRhdGFfbWFwW2tleV0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gc2V0X2N1c3RvbV9lbGVtZW50X2RhdGEobm9kZSwgcHJvcCwgdmFsdWUpIHtcbiAgICBpZiAocHJvcCBpbiBub2RlKSB7XG4gICAgICAgIG5vZGVbcHJvcF0gPSB0eXBlb2Ygbm9kZVtwcm9wXSA9PT0gJ2Jvb2xlYW4nICYmIHZhbHVlID09PSAnJyA/IHRydWUgOiB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGF0dHIobm9kZSwgcHJvcCwgdmFsdWUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNldF9keW5hbWljX2VsZW1lbnRfZGF0YSh0YWcpIHtcbiAgICByZXR1cm4gKC8tLy50ZXN0KHRhZykpID8gc2V0X2N1c3RvbV9lbGVtZW50X2RhdGFfbWFwIDogc2V0X2F0dHJpYnV0ZXM7XG59XG5mdW5jdGlvbiB4bGlua19hdHRyKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBub2RlLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBnZXRfYmluZGluZ19ncm91cF92YWx1ZShncm91cCwgX192YWx1ZSwgY2hlY2tlZCkge1xuICAgIGNvbnN0IHZhbHVlID0gbmV3IFNldCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JvdXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGdyb3VwW2ldLmNoZWNrZWQpXG4gICAgICAgICAgICB2YWx1ZS5hZGQoZ3JvdXBbaV0uX192YWx1ZSk7XG4gICAgfVxuICAgIGlmICghY2hlY2tlZCkge1xuICAgICAgICB2YWx1ZS5kZWxldGUoX192YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBBcnJheS5mcm9tKHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGluaXRfYmluZGluZ19ncm91cChncm91cCkge1xuICAgIGxldCBfaW5wdXRzO1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qIHB1c2ggKi8gcCguLi5pbnB1dHMpIHtcbiAgICAgICAgICAgIF9pbnB1dHMgPSBpbnB1dHM7XG4gICAgICAgICAgICBfaW5wdXRzLmZvckVhY2goaW5wdXQgPT4gZ3JvdXAucHVzaChpbnB1dCkpO1xuICAgICAgICB9LFxuICAgICAgICAvKiByZW1vdmUgKi8gcigpIHtcbiAgICAgICAgICAgIF9pbnB1dHMuZm9yRWFjaChpbnB1dCA9PiBncm91cC5zcGxpY2UoZ3JvdXAuaW5kZXhPZihpbnB1dCksIDEpKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBpbml0X2JpbmRpbmdfZ3JvdXBfZHluYW1pYyhncm91cCwgaW5kZXhlcykge1xuICAgIGxldCBfZ3JvdXAgPSBnZXRfYmluZGluZ19ncm91cChncm91cCk7XG4gICAgbGV0IF9pbnB1dHM7XG4gICAgZnVuY3Rpb24gZ2V0X2JpbmRpbmdfZ3JvdXAoZ3JvdXApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRleGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBncm91cCA9IGdyb3VwW2luZGV4ZXNbaV1dID0gZ3JvdXBbaW5kZXhlc1tpXV0gfHwgW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdyb3VwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwdXNoKCkge1xuICAgICAgICBfaW5wdXRzLmZvckVhY2goaW5wdXQgPT4gX2dyb3VwLnB1c2goaW5wdXQpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICBfaW5wdXRzLmZvckVhY2goaW5wdXQgPT4gX2dyb3VwLnNwbGljZShfZ3JvdXAuaW5kZXhPZihpbnB1dCksIDEpKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyogdXBkYXRlICovIHUobmV3X2luZGV4ZXMpIHtcbiAgICAgICAgICAgIGluZGV4ZXMgPSBuZXdfaW5kZXhlcztcbiAgICAgICAgICAgIGNvbnN0IG5ld19ncm91cCA9IGdldF9iaW5kaW5nX2dyb3VwKGdyb3VwKTtcbiAgICAgICAgICAgIGlmIChuZXdfZ3JvdXAgIT09IF9ncm91cCkge1xuICAgICAgICAgICAgICAgIHJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIF9ncm91cCA9IG5ld19ncm91cDtcbiAgICAgICAgICAgICAgICBwdXNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qIHB1c2ggKi8gcCguLi5pbnB1dHMpIHtcbiAgICAgICAgICAgIF9pbnB1dHMgPSBpbnB1dHM7XG4gICAgICAgICAgICBwdXNoKCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qIHJlbW92ZSAqLyByOiByZW1vdmVcbiAgICB9O1xufVxuZnVuY3Rpb24gdG9fbnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAnJyA/IG51bGwgOiArdmFsdWU7XG59XG5mdW5jdGlvbiB0aW1lX3Jhbmdlc190b19hcnJheShyYW5nZXMpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuZ2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGFycmF5LnB1c2goeyBzdGFydDogcmFuZ2VzLnN0YXJ0KGkpLCBlbmQ6IHJhbmdlcy5lbmQoaSkgfSk7XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbn1cbmZ1bmN0aW9uIGNoaWxkcmVuKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkTm9kZXMpO1xufVxuZnVuY3Rpb24gaW5pdF9jbGFpbV9pbmZvKG5vZGVzKSB7XG4gICAgaWYgKG5vZGVzLmNsYWltX2luZm8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBub2Rlcy5jbGFpbV9pbmZvID0geyBsYXN0X2luZGV4OiAwLCB0b3RhbF9jbGFpbWVkOiAwIH07XG4gICAgfVxufVxuZnVuY3Rpb24gY2xhaW1fbm9kZShub2RlcywgcHJlZGljYXRlLCBwcm9jZXNzTm9kZSwgY3JlYXRlTm9kZSwgZG9udFVwZGF0ZUxhc3RJbmRleCA9IGZhbHNlKSB7XG4gICAgLy8gVHJ5IHRvIGZpbmQgbm9kZXMgaW4gYW4gb3JkZXIgc3VjaCB0aGF0IHdlIGxlbmd0aGVuIHRoZSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2VcbiAgICBpbml0X2NsYWltX2luZm8obm9kZXMpO1xuICAgIGNvbnN0IHJlc3VsdE5vZGUgPSAoKCkgPT4ge1xuICAgICAgICAvLyBXZSBmaXJzdCB0cnkgdG8gZmluZCBhbiBlbGVtZW50IGFmdGVyIHRoZSBwcmV2aW91cyBvbmVcbiAgICAgICAgZm9yIChsZXQgaSA9IG5vZGVzLmNsYWltX2luZm8ubGFzdF9pbmRleDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgICAgICBpZiAocHJlZGljYXRlKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnQgPSBwcm9jZXNzTm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVwbGFjZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBub2Rlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub2Rlc1tpXSA9IHJlcGxhY2VtZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWRvbnRVcGRhdGVMYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4ID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSB0cnkgdG8gZmluZCBvbmUgYmVmb3JlXG4gICAgICAgIC8vIFdlIGl0ZXJhdGUgaW4gcmV2ZXJzZSBzbyB0aGF0IHdlIGRvbid0IGdvIHRvbyBmYXIgYmFja1xuICAgICAgICBmb3IgKGxldCBpID0gbm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgICAgIGlmIChwcmVkaWNhdGUobm9kZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXBsYWNlbWVudCA9IHByb2Nlc3NOb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgIGlmIChyZXBsYWNlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzW2ldID0gcmVwbGFjZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZG9udFVwZGF0ZUxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXBsYWNlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHdlIHNwbGljZWQgYmVmb3JlIHRoZSBsYXN0X2luZGV4LCB3ZSBkZWNyZWFzZSBpdFxuICAgICAgICAgICAgICAgICAgICBub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXgtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgd2UgY2FuJ3QgZmluZCBhbnkgbWF0Y2hpbmcgbm9kZSwgd2UgY3JlYXRlIGEgbmV3IG9uZVxuICAgICAgICByZXR1cm4gY3JlYXRlTm9kZSgpO1xuICAgIH0pKCk7XG4gICAgcmVzdWx0Tm9kZS5jbGFpbV9vcmRlciA9IG5vZGVzLmNsYWltX2luZm8udG90YWxfY2xhaW1lZDtcbiAgICBub2Rlcy5jbGFpbV9pbmZvLnRvdGFsX2NsYWltZWQgKz0gMTtcbiAgICByZXR1cm4gcmVzdWx0Tm9kZTtcbn1cbmZ1bmN0aW9uIGNsYWltX2VsZW1lbnRfYmFzZShub2RlcywgbmFtZSwgYXR0cmlidXRlcywgY3JlYXRlX2VsZW1lbnQpIHtcbiAgICByZXR1cm4gY2xhaW1fbm9kZShub2RlcywgKG5vZGUpID0+IG5vZGUubm9kZU5hbWUgPT09IG5hbWUsIChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbW92ZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vZGUuYXR0cmlidXRlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlID0gbm9kZS5hdHRyaWJ1dGVzW2pdO1xuICAgICAgICAgICAgaWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZS5uYW1lXSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZS5wdXNoKGF0dHJpYnV0ZS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZW1vdmUuZm9yRWFjaCh2ID0+IG5vZGUucmVtb3ZlQXR0cmlidXRlKHYpKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LCAoKSA9PiBjcmVhdGVfZWxlbWVudChuYW1lKSk7XG59XG5mdW5jdGlvbiBjbGFpbV9lbGVtZW50KG5vZGVzLCBuYW1lLCBhdHRyaWJ1dGVzKSB7XG4gICAgcmV0dXJuIGNsYWltX2VsZW1lbnRfYmFzZShub2RlcywgbmFtZSwgYXR0cmlidXRlcywgZWxlbWVudCk7XG59XG5mdW5jdGlvbiBjbGFpbV9zdmdfZWxlbWVudChub2RlcywgbmFtZSwgYXR0cmlidXRlcykge1xuICAgIHJldHVybiBjbGFpbV9lbGVtZW50X2Jhc2Uobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMsIHN2Z19lbGVtZW50KTtcbn1cbmZ1bmN0aW9uIGNsYWltX3RleHQobm9kZXMsIGRhdGEpIHtcbiAgICByZXR1cm4gY2xhaW1fbm9kZShub2RlcywgKG5vZGUpID0+IG5vZGUubm9kZVR5cGUgPT09IDMsIChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFTdHIgPSAnJyArIGRhdGE7XG4gICAgICAgIGlmIChub2RlLmRhdGEuc3RhcnRzV2l0aChkYXRhU3RyKSkge1xuICAgICAgICAgICAgaWYgKG5vZGUuZGF0YS5sZW5ndGggIT09IGRhdGFTdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuc3BsaXRUZXh0KGRhdGFTdHIubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuZGF0YSA9IGRhdGFTdHI7XG4gICAgICAgIH1cbiAgICB9LCAoKSA9PiB0ZXh0KGRhdGEpLCB0cnVlIC8vIFRleHQgbm9kZXMgc2hvdWxkIG5vdCB1cGRhdGUgbGFzdCBpbmRleCBzaW5jZSBpdCBpcyBsaWtlbHkgbm90IHdvcnRoIGl0IHRvIGVsaW1pbmF0ZSBhbiBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlIG9mIGFjdHVhbCBlbGVtZW50c1xuICAgICk7XG59XG5mdW5jdGlvbiBjbGFpbV9zcGFjZShub2Rlcykge1xuICAgIHJldHVybiBjbGFpbV90ZXh0KG5vZGVzLCAnICcpO1xufVxuZnVuY3Rpb24gY2xhaW1fY29tbWVudChub2RlcywgZGF0YSkge1xuICAgIHJldHVybiBjbGFpbV9ub2RlKG5vZGVzLCAobm9kZSkgPT4gbm9kZS5ub2RlVHlwZSA9PT0gOCwgKG5vZGUpID0+IHtcbiAgICAgICAgbm9kZS5kYXRhID0gJycgKyBkYXRhO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0sICgpID0+IGNvbW1lbnQoZGF0YSksIHRydWUpO1xufVxuZnVuY3Rpb24gZmluZF9jb21tZW50KG5vZGVzLCB0ZXh0LCBzdGFydCkge1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IG5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDggLyogY29tbWVudCBub2RlICovICYmIG5vZGUudGV4dENvbnRlbnQudHJpbSgpID09PSB0ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZXMubGVuZ3RoO1xufVxuZnVuY3Rpb24gY2xhaW1faHRtbF90YWcobm9kZXMsIGlzX3N2Zykge1xuICAgIC8vIGZpbmQgaHRtbCBvcGVuaW5nIHRhZ1xuICAgIGNvbnN0IHN0YXJ0X2luZGV4ID0gZmluZF9jb21tZW50KG5vZGVzLCAnSFRNTF9UQUdfU1RBUlQnLCAwKTtcbiAgICBjb25zdCBlbmRfaW5kZXggPSBmaW5kX2NvbW1lbnQobm9kZXMsICdIVE1MX1RBR19FTkQnLCBzdGFydF9pbmRleCk7XG4gICAgaWYgKHN0YXJ0X2luZGV4ID09PSBlbmRfaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBIdG1sVGFnSHlkcmF0aW9uKHVuZGVmaW5lZCwgaXNfc3ZnKTtcbiAgICB9XG4gICAgaW5pdF9jbGFpbV9pbmZvKG5vZGVzKTtcbiAgICBjb25zdCBodG1sX3RhZ19ub2RlcyA9IG5vZGVzLnNwbGljZShzdGFydF9pbmRleCwgZW5kX2luZGV4IC0gc3RhcnRfaW5kZXggKyAxKTtcbiAgICBkZXRhY2goaHRtbF90YWdfbm9kZXNbMF0pO1xuICAgIGRldGFjaChodG1sX3RhZ19ub2Rlc1todG1sX3RhZ19ub2Rlcy5sZW5ndGggLSAxXSk7XG4gICAgY29uc3QgY2xhaW1lZF9ub2RlcyA9IGh0bWxfdGFnX25vZGVzLnNsaWNlKDEsIGh0bWxfdGFnX25vZGVzLmxlbmd0aCAtIDEpO1xuICAgIGZvciAoY29uc3QgbiBvZiBjbGFpbWVkX25vZGVzKSB7XG4gICAgICAgIG4uY2xhaW1fb3JkZXIgPSBub2Rlcy5jbGFpbV9pbmZvLnRvdGFsX2NsYWltZWQ7XG4gICAgICAgIG5vZGVzLmNsYWltX2luZm8udG90YWxfY2xhaW1lZCArPSAxO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEh0bWxUYWdIeWRyYXRpb24oY2xhaW1lZF9ub2RlcywgaXNfc3ZnKTtcbn1cbmZ1bmN0aW9uIHNldF9kYXRhKHRleHQsIGRhdGEpIHtcbiAgICBkYXRhID0gJycgKyBkYXRhO1xuICAgIGlmICh0ZXh0LmRhdGEgPT09IGRhdGEpXG4gICAgICAgIHJldHVybjtcbiAgICB0ZXh0LmRhdGEgPSBkYXRhO1xufVxuZnVuY3Rpb24gc2V0X2RhdGFfY29udGVudGVkaXRhYmxlKHRleHQsIGRhdGEpIHtcbiAgICBkYXRhID0gJycgKyBkYXRhO1xuICAgIGlmICh0ZXh0Lndob2xlVGV4dCA9PT0gZGF0YSlcbiAgICAgICAgcmV0dXJuO1xuICAgIHRleHQuZGF0YSA9IGRhdGE7XG59XG5mdW5jdGlvbiBzZXRfZGF0YV9tYXliZV9jb250ZW50ZWRpdGFibGUodGV4dCwgZGF0YSwgYXR0cl92YWx1ZSkge1xuICAgIGlmICh+Y29udGVudGVkaXRhYmxlX3RydXRoeV92YWx1ZXMuaW5kZXhPZihhdHRyX3ZhbHVlKSkge1xuICAgICAgICBzZXRfZGF0YV9jb250ZW50ZWRpdGFibGUodGV4dCwgZGF0YSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzZXRfZGF0YSh0ZXh0LCBkYXRhKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzZXRfaW5wdXRfdmFsdWUoaW5wdXQsIHZhbHVlKSB7XG4gICAgaW5wdXQudmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHNldF9pbnB1dF90eXBlKGlucHV0LCB0eXBlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaW5wdXQudHlwZSA9IHR5cGU7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9XG59XG5mdW5jdGlvbiBzZXRfc3R5bGUobm9kZSwga2V5LCB2YWx1ZSwgaW1wb3J0YW50KSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgbm9kZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShrZXkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlLCBpbXBvcnRhbnQgPyAnaW1wb3J0YW50JyA6ICcnKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzZWxlY3Rfb3B0aW9uKHNlbGVjdCwgdmFsdWUsIG1vdW50aW5nKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBzZWxlY3Qub3B0aW9uc1tpXTtcbiAgICAgICAgaWYgKG9wdGlvbi5fX3ZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIW1vdW50aW5nIHx8IHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc2VsZWN0LnNlbGVjdGVkSW5kZXggPSAtMTsgLy8gbm8gb3B0aW9uIHNob3VsZCBiZSBzZWxlY3RlZFxuICAgIH1cbn1cbmZ1bmN0aW9uIHNlbGVjdF9vcHRpb25zKHNlbGVjdCwgdmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB+dmFsdWUuaW5kZXhPZihvcHRpb24uX192YWx1ZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gc2VsZWN0X3ZhbHVlKHNlbGVjdCkge1xuICAgIGNvbnN0IHNlbGVjdGVkX29wdGlvbiA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCc6Y2hlY2tlZCcpO1xuICAgIHJldHVybiBzZWxlY3RlZF9vcHRpb24gJiYgc2VsZWN0ZWRfb3B0aW9uLl9fdmFsdWU7XG59XG5mdW5jdGlvbiBzZWxlY3RfbXVsdGlwbGVfdmFsdWUoc2VsZWN0KSB7XG4gICAgcmV0dXJuIFtdLm1hcC5jYWxsKHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCc6Y2hlY2tlZCcpLCBvcHRpb24gPT4gb3B0aW9uLl9fdmFsdWUpO1xufVxuLy8gdW5mb3J0dW5hdGVseSB0aGlzIGNhbid0IGJlIGEgY29uc3RhbnQgYXMgdGhhdCB3b3VsZG4ndCBiZSB0cmVlLXNoYWtlYWJsZVxuLy8gc28gd2UgY2FjaGUgdGhlIHJlc3VsdCBpbnN0ZWFkXG5sZXQgY3Jvc3NvcmlnaW47XG5mdW5jdGlvbiBpc19jcm9zc29yaWdpbigpIHtcbiAgICBpZiAoY3Jvc3NvcmlnaW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjcm9zc29yaWdpbiA9IGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB2b2lkIHdpbmRvdy5wYXJlbnQuZG9jdW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjcm9zc29yaWdpbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNyb3Nzb3JpZ2luO1xufVxuZnVuY3Rpb24gYWRkX2lmcmFtZV9yZXNpemVfbGlzdGVuZXIobm9kZSwgZm4pIHtcbiAgICBjb25zdCBjb21wdXRlZF9zdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgaWYgKGNvbXB1dGVkX3N0eWxlLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgICAgICBub2RlLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICB9XG4gICAgY29uc3QgaWZyYW1lID0gZWxlbWVudCgnaWZyYW1lJyk7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyAnICtcbiAgICAgICAgJ292ZXJmbG93OiBoaWRkZW47IGJvcmRlcjogMDsgb3BhY2l0eTogMDsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHotaW5kZXg6IC0xOycpO1xuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICBpZnJhbWUudGFiSW5kZXggPSAtMTtcbiAgICBjb25zdCBjcm9zc29yaWdpbiA9IGlzX2Nyb3Nzb3JpZ2luKCk7XG4gICAgbGV0IHVuc3Vic2NyaWJlO1xuICAgIGlmIChjcm9zc29yaWdpbikge1xuICAgICAgICBpZnJhbWUuc3JjID0gXCJkYXRhOnRleHQvaHRtbCw8c2NyaXB0Pm9ucmVzaXplPWZ1bmN0aW9uKCl7cGFyZW50LnBvc3RNZXNzYWdlKDAsJyonKX08L3NjcmlwdD5cIjtcbiAgICAgICAgdW5zdWJzY3JpYmUgPSBsaXN0ZW4od2luZG93LCAnbWVzc2FnZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gaWZyYW1lLmNvbnRlbnRXaW5kb3cpXG4gICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZnJhbWUuc3JjID0gJ2Fib3V0OmJsYW5rJztcbiAgICAgICAgaWZyYW1lLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlID0gbGlzdGVuKGlmcmFtZS5jb250ZW50V2luZG93LCAncmVzaXplJywgZm4pO1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIGFuIGluaXRpYWwgcmVzaXplIGV2ZW50IGlzIGZpcmVkIF9hZnRlcl8gdGhlIGlmcmFtZSBpcyBsb2FkZWQgKHdoaWNoIGlzIGFzeW5jaHJvbm91cylcbiAgICAgICAgICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vc3ZlbHRlanMvc3ZlbHRlL2lzc3Vlcy80MjMzXG4gICAgICAgICAgICBmbigpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBhcHBlbmQobm9kZSwgaWZyYW1lKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoY3Jvc3NvcmlnaW4pIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodW5zdWJzY3JpYmUgJiYgaWZyYW1lLmNvbnRlbnRXaW5kb3cpIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZGV0YWNoKGlmcmFtZSk7XG4gICAgfTtcbn1cbmNvbnN0IHJlc2l6ZV9vYnNlcnZlcl9jb250ZW50X2JveCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgUmVzaXplT2JzZXJ2ZXJTaW5nbGV0b24oeyBib3g6ICdjb250ZW50LWJveCcgfSk7XG5jb25zdCByZXNpemVfb2JzZXJ2ZXJfYm9yZGVyX2JveCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgUmVzaXplT2JzZXJ2ZXJTaW5nbGV0b24oeyBib3g6ICdib3JkZXItYm94JyB9KTtcbmNvbnN0IHJlc2l6ZV9vYnNlcnZlcl9kZXZpY2VfcGl4ZWxfY29udGVudF9ib3ggPSAvKiBAX19QVVJFX18gKi8gbmV3IFJlc2l6ZU9ic2VydmVyU2luZ2xldG9uKHsgYm94OiAnZGV2aWNlLXBpeGVsLWNvbnRlbnQtYm94JyB9KTtcbmZ1bmN0aW9uIHRvZ2dsZV9jbGFzcyhlbGVtZW50LCBuYW1lLCB0b2dnbGUpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdFt0b2dnbGUgPyAnYWRkJyA6ICdyZW1vdmUnXShuYW1lKTtcbn1cbmZ1bmN0aW9uIGN1c3RvbV9ldmVudCh0eXBlLCBkZXRhaWwsIHsgYnViYmxlcyA9IGZhbHNlLCBjYW5jZWxhYmxlID0gZmFsc2UgfSA9IHt9KSB7XG4gICAgY29uc3QgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgIGUuaW5pdEN1c3RvbUV2ZW50KHR5cGUsIGJ1YmJsZXMsIGNhbmNlbGFibGUsIGRldGFpbCk7XG4gICAgcmV0dXJuIGU7XG59XG5mdW5jdGlvbiBxdWVyeV9zZWxlY3Rvcl9hbGwoc2VsZWN0b3IsIHBhcmVudCA9IGRvY3VtZW50LmJvZHkpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xufVxuZnVuY3Rpb24gaGVhZF9zZWxlY3Rvcihub2RlSWQsIGhlYWQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBsZXQgc3RhcnRlZCA9IDA7XG4gICAgZm9yIChjb25zdCBub2RlIG9mIGhlYWQuY2hpbGROb2Rlcykge1xuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCAvKiBjb21tZW50IG5vZGUgKi8pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnQgPSBub2RlLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgICAgIGlmIChjb21tZW50ID09PSBgSEVBRF8ke25vZGVJZH1fRU5EYCkge1xuICAgICAgICAgICAgICAgIHN0YXJ0ZWQgLT0gMTtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbW1lbnQgPT09IGBIRUFEXyR7bm9kZUlkfV9TVEFSVGApIHtcbiAgICAgICAgICAgICAgICBzdGFydGVkICs9IDE7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRlZCA+IDApIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5jbGFzcyBIdG1sVGFnIHtcbiAgICBjb25zdHJ1Y3Rvcihpc19zdmcgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmlzX3N2ZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzX3N2ZyA9IGlzX3N2ZztcbiAgICAgICAgdGhpcy5lID0gdGhpcy5uID0gbnVsbDtcbiAgICB9XG4gICAgYyhodG1sKSB7XG4gICAgICAgIHRoaXMuaChodG1sKTtcbiAgICB9XG4gICAgbShodG1sLCB0YXJnZXQsIGFuY2hvciA9IG51bGwpIHtcbiAgICAgICAgaWYgKCF0aGlzLmUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzX3N2ZylcbiAgICAgICAgICAgICAgICB0aGlzLmUgPSBzdmdfZWxlbWVudCh0YXJnZXQubm9kZU5hbWUpO1xuICAgICAgICAgICAgLyoqICM3MzY0ICB0YXJnZXQgZm9yIDx0ZW1wbGF0ZT4gbWF5IGJlIHByb3ZpZGVkIGFzICNkb2N1bWVudC1mcmFnbWVudCgxMSkgKi9cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmUgPSBlbGVtZW50KCh0YXJnZXQubm9kZVR5cGUgPT09IDExID8gJ1RFTVBMQVRFJyA6IHRhcmdldC5ub2RlTmFtZSkpO1xuICAgICAgICAgICAgdGhpcy50ID0gdGFyZ2V0LnRhZ05hbWUgIT09ICdURU1QTEFURScgPyB0YXJnZXQgOiB0YXJnZXQuY29udGVudDtcbiAgICAgICAgICAgIHRoaXMuYyhodG1sKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmkoYW5jaG9yKTtcbiAgICB9XG4gICAgaChodG1sKSB7XG4gICAgICAgIHRoaXMuZS5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICB0aGlzLm4gPSBBcnJheS5mcm9tKHRoaXMuZS5ub2RlTmFtZSA9PT0gJ1RFTVBMQVRFJyA/IHRoaXMuZS5jb250ZW50LmNoaWxkTm9kZXMgOiB0aGlzLmUuY2hpbGROb2Rlcyk7XG4gICAgfVxuICAgIGkoYW5jaG9yKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpbnNlcnQodGhpcy50LCB0aGlzLm5baV0sIGFuY2hvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcChodG1sKSB7XG4gICAgICAgIHRoaXMuZCgpO1xuICAgICAgICB0aGlzLmgoaHRtbCk7XG4gICAgICAgIHRoaXMuaSh0aGlzLmEpO1xuICAgIH1cbiAgICBkKCkge1xuICAgICAgICB0aGlzLm4uZm9yRWFjaChkZXRhY2gpO1xuICAgIH1cbn1cbmNsYXNzIEh0bWxUYWdIeWRyYXRpb24gZXh0ZW5kcyBIdG1sVGFnIHtcbiAgICBjb25zdHJ1Y3RvcihjbGFpbWVkX25vZGVzLCBpc19zdmcgPSBmYWxzZSkge1xuICAgICAgICBzdXBlcihpc19zdmcpO1xuICAgICAgICB0aGlzLmUgPSB0aGlzLm4gPSBudWxsO1xuICAgICAgICB0aGlzLmwgPSBjbGFpbWVkX25vZGVzO1xuICAgIH1cbiAgICBjKGh0bWwpIHtcbiAgICAgICAgaWYgKHRoaXMubCkge1xuICAgICAgICAgICAgdGhpcy5uID0gdGhpcy5sO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIuYyhodG1sKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpKGFuY2hvcikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaW5zZXJ0X2h5ZHJhdGlvbih0aGlzLnQsIHRoaXMubltpXSwgYW5jaG9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGF0dHJpYnV0ZV90b19vYmplY3QoYXR0cmlidXRlcykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3QgYXR0cmlidXRlIG9mIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmVzdWx0W2F0dHJpYnV0ZS5uYW1lXSA9IGF0dHJpYnV0ZS52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGdldF9jdXN0b21fZWxlbWVudHNfc2xvdHMoZWxlbWVudCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgIHJlc3VsdFtub2RlLnNsb3QgfHwgJ2RlZmF1bHQnXSA9IHRydWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGNvbnN0cnVjdF9zdmVsdGVfY29tcG9uZW50KGNvbXBvbmVudCwgcHJvcHMpIHtcbiAgICByZXR1cm4gbmV3IGNvbXBvbmVudChwcm9wcyk7XG59XG5cbi8vIHdlIG5lZWQgdG8gc3RvcmUgdGhlIGluZm9ybWF0aW9uIGZvciBtdWx0aXBsZSBkb2N1bWVudHMgYmVjYXVzZSBhIFN2ZWx0ZSBhcHBsaWNhdGlvbiBjb3VsZCBhbHNvIGNvbnRhaW4gaWZyYW1lc1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3N2ZWx0ZWpzL3N2ZWx0ZS9pc3N1ZXMvMzYyNFxuY29uc3QgbWFuYWdlZF9zdHlsZXMgPSBuZXcgTWFwKCk7XG5sZXQgYWN0aXZlID0gMDtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJrc2t5YXBwL3N0cmluZy1oYXNoL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG5mdW5jdGlvbiBoYXNoKHN0cikge1xuICAgIGxldCBoYXNoID0gNTM4MTtcbiAgICBsZXQgaSA9IHN0ci5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSlcbiAgICAgICAgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpIF4gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGhhc2ggPj4+IDA7XG59XG5mdW5jdGlvbiBjcmVhdGVfc3R5bGVfaW5mb3JtYXRpb24oZG9jLCBub2RlKSB7XG4gICAgY29uc3QgaW5mbyA9IHsgc3R5bGVzaGVldDogYXBwZW5kX2VtcHR5X3N0eWxlc2hlZXQobm9kZSksIHJ1bGVzOiB7fSB9O1xuICAgIG1hbmFnZWRfc3R5bGVzLnNldChkb2MsIGluZm8pO1xuICAgIHJldHVybiBpbmZvO1xufVxuZnVuY3Rpb24gY3JlYXRlX3J1bGUobm9kZSwgYSwgYiwgZHVyYXRpb24sIGRlbGF5LCBlYXNlLCBmbiwgdWlkID0gMCkge1xuICAgIGNvbnN0IHN0ZXAgPSAxNi42NjYgLyBkdXJhdGlvbjtcbiAgICBsZXQga2V5ZnJhbWVzID0gJ3tcXG4nO1xuICAgIGZvciAobGV0IHAgPSAwOyBwIDw9IDE7IHAgKz0gc3RlcCkge1xuICAgICAgICBjb25zdCB0ID0gYSArIChiIC0gYSkgKiBlYXNlKHApO1xuICAgICAgICBrZXlmcmFtZXMgKz0gcCAqIDEwMCArIGAleyR7Zm4odCwgMSAtIHQpfX1cXG5gO1xuICAgIH1cbiAgICBjb25zdCBydWxlID0ga2V5ZnJhbWVzICsgYDEwMCUgeyR7Zm4oYiwgMSAtIGIpfX1cXG59YDtcbiAgICBjb25zdCBuYW1lID0gYF9fc3ZlbHRlXyR7aGFzaChydWxlKX1fJHt1aWR9YDtcbiAgICBjb25zdCBkb2MgPSBnZXRfcm9vdF9mb3Jfc3R5bGUobm9kZSk7XG4gICAgY29uc3QgeyBzdHlsZXNoZWV0LCBydWxlcyB9ID0gbWFuYWdlZF9zdHlsZXMuZ2V0KGRvYykgfHwgY3JlYXRlX3N0eWxlX2luZm9ybWF0aW9uKGRvYywgbm9kZSk7XG4gICAgaWYgKCFydWxlc1tuYW1lXSkge1xuICAgICAgICBydWxlc1tuYW1lXSA9IHRydWU7XG4gICAgICAgIHN0eWxlc2hlZXQuaW5zZXJ0UnVsZShgQGtleWZyYW1lcyAke25hbWV9ICR7cnVsZX1gLCBzdHlsZXNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG4gICAgfVxuICAgIGNvbnN0IGFuaW1hdGlvbiA9IG5vZGUuc3R5bGUuYW5pbWF0aW9uIHx8ICcnO1xuICAgIG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gYCR7YW5pbWF0aW9uID8gYCR7YW5pbWF0aW9ufSwgYCA6ICcnfSR7bmFtZX0gJHtkdXJhdGlvbn1tcyBsaW5lYXIgJHtkZWxheX1tcyAxIGJvdGhgO1xuICAgIGFjdGl2ZSArPSAxO1xuICAgIHJldHVybiBuYW1lO1xufVxuZnVuY3Rpb24gZGVsZXRlX3J1bGUobm9kZSwgbmFtZSkge1xuICAgIGNvbnN0IHByZXZpb3VzID0gKG5vZGUuc3R5bGUuYW5pbWF0aW9uIHx8ICcnKS5zcGxpdCgnLCAnKTtcbiAgICBjb25zdCBuZXh0ID0gcHJldmlvdXMuZmlsdGVyKG5hbWVcbiAgICAgICAgPyBhbmltID0+IGFuaW0uaW5kZXhPZihuYW1lKSA8IDAgLy8gcmVtb3ZlIHNwZWNpZmljIGFuaW1hdGlvblxuICAgICAgICA6IGFuaW0gPT4gYW5pbS5pbmRleE9mKCdfX3N2ZWx0ZScpID09PSAtMSAvLyByZW1vdmUgYWxsIFN2ZWx0ZSBhbmltYXRpb25zXG4gICAgKTtcbiAgICBjb25zdCBkZWxldGVkID0gcHJldmlvdXMubGVuZ3RoIC0gbmV4dC5sZW5ndGg7XG4gICAgaWYgKGRlbGV0ZWQpIHtcbiAgICAgICAgbm9kZS5zdHlsZS5hbmltYXRpb24gPSBuZXh0LmpvaW4oJywgJyk7XG4gICAgICAgIGFjdGl2ZSAtPSBkZWxldGVkO1xuICAgICAgICBpZiAoIWFjdGl2ZSlcbiAgICAgICAgICAgIGNsZWFyX3J1bGVzKCk7XG4gICAgfVxufVxuZnVuY3Rpb24gY2xlYXJfcnVsZXMoKSB7XG4gICAgcmFmKCgpID0+IHtcbiAgICAgICAgaWYgKGFjdGl2ZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgbWFuYWdlZF9zdHlsZXMuZm9yRWFjaChpbmZvID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgb3duZXJOb2RlIH0gPSBpbmZvLnN0eWxlc2hlZXQ7XG4gICAgICAgICAgICAvLyB0aGVyZSBpcyBubyBvd25lck5vZGUgaWYgaXQgcnVucyBvbiBqc2RvbS5cbiAgICAgICAgICAgIGlmIChvd25lck5vZGUpXG4gICAgICAgICAgICAgICAgZGV0YWNoKG93bmVyTm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBtYW5hZ2VkX3N0eWxlcy5jbGVhcigpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVfYW5pbWF0aW9uKG5vZGUsIGZyb20sIGZuLCBwYXJhbXMpIHtcbiAgICBpZiAoIWZyb20pXG4gICAgICAgIHJldHVybiBub29wO1xuICAgIGNvbnN0IHRvID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoZnJvbS5sZWZ0ID09PSB0by5sZWZ0ICYmIGZyb20ucmlnaHQgPT09IHRvLnJpZ2h0ICYmIGZyb20udG9wID09PSB0by50b3AgJiYgZnJvbS5ib3R0b20gPT09IHRvLmJvdHRvbSlcbiAgICAgICAgcmV0dXJuIG5vb3A7XG4gICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgXG4gICAgLy8gQHRzLWlnbm9yZSB0b2RvOiBzaG91bGQgdGhpcyBiZSBzZXBhcmF0ZWQgZnJvbSBkZXN0cnVjdHVyaW5nPyBPciBzdGFydC9lbmQgYWRkZWQgdG8gcHVibGljIGFwaSBhbmQgZG9jdW1lbnRhdGlvbj9cbiAgICBzdGFydDogc3RhcnRfdGltZSA9IG5vdygpICsgZGVsYXksIFxuICAgIC8vIEB0cy1pZ25vcmUgdG9kbzpcbiAgICBlbmQgPSBzdGFydF90aW1lICsgZHVyYXRpb24sIHRpY2sgPSBub29wLCBjc3MgfSA9IGZuKG5vZGUsIHsgZnJvbSwgdG8gfSwgcGFyYW1zKTtcbiAgICBsZXQgcnVubmluZyA9IHRydWU7XG4gICAgbGV0IHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICBsZXQgbmFtZTtcbiAgICBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIDAsIDEsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZGVsYXkpIHtcbiAgICAgICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIGlmIChjc3MpXG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBuYW1lKTtcbiAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgIH1cbiAgICBsb29wKG5vdyA9PiB7XG4gICAgICAgIGlmICghc3RhcnRlZCAmJiBub3cgPj0gc3RhcnRfdGltZSkge1xuICAgICAgICAgICAgc3RhcnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0ZWQgJiYgbm93ID49IGVuZCkge1xuICAgICAgICAgICAgdGljaygxLCAwKTtcbiAgICAgICAgICAgIHN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRlZCkge1xuICAgICAgICAgICAgY29uc3QgcCA9IG5vdyAtIHN0YXJ0X3RpbWU7XG4gICAgICAgICAgICBjb25zdCB0ID0gMCArIDEgKiBlYXNpbmcocCAvIGR1cmF0aW9uKTtcbiAgICAgICAgICAgIHRpY2sodCwgMSAtIHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICAgIHN0YXJ0KCk7XG4gICAgdGljaygwLCAxKTtcbiAgICByZXR1cm4gc3RvcDtcbn1cbmZ1bmN0aW9uIGZpeF9wb3NpdGlvbihub2RlKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIGlmIChzdHlsZS5wb3NpdGlvbiAhPT0gJ2Fic29sdXRlJyAmJiBzdHlsZS5wb3NpdGlvbiAhPT0gJ2ZpeGVkJykge1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHN0eWxlO1xuICAgICAgICBjb25zdCBhID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgbm9kZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIG5vZGUuc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgbm9kZS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGFkZF90cmFuc2Zvcm0obm9kZSwgYSk7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkX3RyYW5zZm9ybShub2RlLCBhKSB7XG4gICAgY29uc3QgYiA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKGEubGVmdCAhPT0gYi5sZWZ0IHx8IGEudG9wICE9PSBiLnRvcCkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBzdHlsZS50cmFuc2Zvcm07XG4gICAgICAgIG5vZGUuc3R5bGUudHJhbnNmb3JtID0gYCR7dHJhbnNmb3JtfSB0cmFuc2xhdGUoJHthLmxlZnQgLSBiLmxlZnR9cHgsICR7YS50b3AgLSBiLnRvcH1weClgO1xuICAgIH1cbn1cblxubGV0IGN1cnJlbnRfY29tcG9uZW50O1xuZnVuY3Rpb24gc2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIGN1cnJlbnRfY29tcG9uZW50ID0gY29tcG9uZW50O1xufVxuZnVuY3Rpb24gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkge1xuICAgIGlmICghY3VycmVudF9jb21wb25lbnQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRnVuY3Rpb24gY2FsbGVkIG91dHNpZGUgY29tcG9uZW50IGluaXRpYWxpemF0aW9uJyk7XG4gICAgcmV0dXJuIGN1cnJlbnRfY29tcG9uZW50O1xufVxuLyoqXG4gKiBTY2hlZHVsZXMgYSBjYWxsYmFjayB0byBydW4gaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgdXBkYXRlZCBhZnRlciBhbnkgc3RhdGUgY2hhbmdlLlxuICpcbiAqIFRoZSBmaXJzdCB0aW1lIHRoZSBjYWxsYmFjayBydW5zIHdpbGwgYmUgYmVmb3JlIHRoZSBpbml0aWFsIGBvbk1vdW50YFxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzI3J1bi10aW1lLXN2ZWx0ZS1iZWZvcmV1cGRhdGVcbiAqL1xuZnVuY3Rpb24gYmVmb3JlVXBkYXRlKGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuYmVmb3JlX3VwZGF0ZS5wdXNoKGZuKTtcbn1cbi8qKlxuICogVGhlIGBvbk1vdW50YCBmdW5jdGlvbiBzY2hlZHVsZXMgYSBjYWxsYmFjayB0byBydW4gYXMgc29vbiBhcyB0aGUgY29tcG9uZW50IGhhcyBiZWVuIG1vdW50ZWQgdG8gdGhlIERPTS5cbiAqIEl0IG11c3QgYmUgY2FsbGVkIGR1cmluZyB0aGUgY29tcG9uZW50J3MgaW5pdGlhbGlzYXRpb24gKGJ1dCBkb2Vzbid0IG5lZWQgdG8gbGl2ZSAqaW5zaWRlKiB0aGUgY29tcG9uZW50O1xuICogaXQgY2FuIGJlIGNhbGxlZCBmcm9tIGFuIGV4dGVybmFsIG1vZHVsZSkuXG4gKlxuICogYG9uTW91bnRgIGRvZXMgbm90IHJ1biBpbnNpZGUgYSBbc2VydmVyLXNpZGUgY29tcG9uZW50XSgvZG9jcyNydW4tdGltZS1zZXJ2ZXItc2lkZS1jb21wb25lbnQtYXBpKS5cbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcyNydW4tdGltZS1zdmVsdGUtb25tb3VudFxuICovXG5mdW5jdGlvbiBvbk1vdW50KGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQub25fbW91bnQucHVzaChmbik7XG59XG4vKipcbiAqIFNjaGVkdWxlcyBhIGNhbGxiYWNrIHRvIHJ1biBpbW1lZGlhdGVseSBhZnRlciB0aGUgY29tcG9uZW50IGhhcyBiZWVuIHVwZGF0ZWQuXG4gKlxuICogVGhlIGZpcnN0IHRpbWUgdGhlIGNhbGxiYWNrIHJ1bnMgd2lsbCBiZSBhZnRlciB0aGUgaW5pdGlhbCBgb25Nb3VudGBcbiAqL1xuZnVuY3Rpb24gYWZ0ZXJVcGRhdGUoZm4pIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5hZnRlcl91cGRhdGUucHVzaChmbik7XG59XG4vKipcbiAqIFNjaGVkdWxlcyBhIGNhbGxiYWNrIHRvIHJ1biBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyB1bm1vdW50ZWQuXG4gKlxuICogT3V0IG9mIGBvbk1vdW50YCwgYGJlZm9yZVVwZGF0ZWAsIGBhZnRlclVwZGF0ZWAgYW5kIGBvbkRlc3Ryb3lgLCB0aGlzIGlzIHRoZVxuICogb25seSBvbmUgdGhhdCBydW5zIGluc2lkZSBhIHNlcnZlci1zaWRlIGNvbXBvbmVudC5cbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcyNydW4tdGltZS1zdmVsdGUtb25kZXN0cm95XG4gKi9cbmZ1bmN0aW9uIG9uRGVzdHJveShmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLm9uX2Rlc3Ryb3kucHVzaChmbik7XG59XG4vKipcbiAqIENyZWF0ZXMgYW4gZXZlbnQgZGlzcGF0Y2hlciB0aGF0IGNhbiBiZSB1c2VkIHRvIGRpc3BhdGNoIFtjb21wb25lbnQgZXZlbnRzXSgvZG9jcyN0ZW1wbGF0ZS1zeW50YXgtY29tcG9uZW50LWRpcmVjdGl2ZXMtb24tZXZlbnRuYW1lKS5cbiAqIEV2ZW50IGRpc3BhdGNoZXJzIGFyZSBmdW5jdGlvbnMgdGhhdCBjYW4gdGFrZSB0d28gYXJndW1lbnRzOiBgbmFtZWAgYW5kIGBkZXRhaWxgLlxuICpcbiAqIENvbXBvbmVudCBldmVudHMgY3JlYXRlZCB3aXRoIGBjcmVhdGVFdmVudERpc3BhdGNoZXJgIGNyZWF0ZSBhXG4gKiBbQ3VzdG9tRXZlbnRdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DdXN0b21FdmVudCkuXG4gKiBUaGVzZSBldmVudHMgZG8gbm90IFtidWJibGVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvTGVhcm4vSmF2YVNjcmlwdC9CdWlsZGluZ19ibG9ja3MvRXZlbnRzI0V2ZW50X2J1YmJsaW5nX2FuZF9jYXB0dXJlKS5cbiAqIFRoZSBgZGV0YWlsYCBhcmd1bWVudCBjb3JyZXNwb25kcyB0byB0aGUgW0N1c3RvbUV2ZW50LmRldGFpbF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0N1c3RvbUV2ZW50L2RldGFpbClcbiAqIHByb3BlcnR5IGFuZCBjYW4gY29udGFpbiBhbnkgdHlwZSBvZiBkYXRhLlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzI3J1bi10aW1lLXN2ZWx0ZS1jcmVhdGVldmVudGRpc3BhdGNoZXJcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCkge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IGdldF9jdXJyZW50X2NvbXBvbmVudCgpO1xuICAgIHJldHVybiAodHlwZSwgZGV0YWlsLCB7IGNhbmNlbGFibGUgPSBmYWxzZSB9ID0ge30pID0+IHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gY29tcG9uZW50LiQkLmNhbGxiYWNrc1t0eXBlXTtcbiAgICAgICAgaWYgKGNhbGxiYWNrcykge1xuICAgICAgICAgICAgLy8gVE9ETyBhcmUgdGhlcmUgc2l0dWF0aW9ucyB3aGVyZSBldmVudHMgY291bGQgYmUgZGlzcGF0Y2hlZFxuICAgICAgICAgICAgLy8gaW4gYSBzZXJ2ZXIgKG5vbi1ET00pIGVudmlyb25tZW50P1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBjdXN0b21fZXZlbnQodHlwZSwgZGV0YWlsLCB7IGNhbmNlbGFibGUgfSk7XG4gICAgICAgICAgICBjYWxsYmFja3Muc2xpY2UoKS5mb3JFYWNoKGZuID0+IHtcbiAgICAgICAgICAgICAgICBmbi5jYWxsKGNvbXBvbmVudCwgZXZlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbn1cbi8qKlxuICogQXNzb2NpYXRlcyBhbiBhcmJpdHJhcnkgYGNvbnRleHRgIG9iamVjdCB3aXRoIHRoZSBjdXJyZW50IGNvbXBvbmVudCBhbmQgdGhlIHNwZWNpZmllZCBga2V5YFxuICogYW5kIHJldHVybnMgdGhhdCBvYmplY3QuIFRoZSBjb250ZXh0IGlzIHRoZW4gYXZhaWxhYmxlIHRvIGNoaWxkcmVuIG9mIHRoZSBjb21wb25lbnRcbiAqIChpbmNsdWRpbmcgc2xvdHRlZCBjb250ZW50KSB3aXRoIGBnZXRDb250ZXh0YC5cbiAqXG4gKiBMaWtlIGxpZmVjeWNsZSBmdW5jdGlvbnMsIHRoaXMgbXVzdCBiZSBjYWxsZWQgZHVyaW5nIGNvbXBvbmVudCBpbml0aWFsaXNhdGlvbi5cbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcyNydW4tdGltZS1zdmVsdGUtc2V0Y29udGV4dFxuICovXG5mdW5jdGlvbiBzZXRDb250ZXh0KGtleSwgY29udGV4dCkge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQuc2V0KGtleSwgY29udGV4dCk7XG4gICAgcmV0dXJuIGNvbnRleHQ7XG59XG4vKipcbiAqIFJldHJpZXZlcyB0aGUgY29udGV4dCB0aGF0IGJlbG9uZ3MgdG8gdGhlIGNsb3Nlc3QgcGFyZW50IGNvbXBvbmVudCB3aXRoIHRoZSBzcGVjaWZpZWQgYGtleWAuXG4gKiBNdXN0IGJlIGNhbGxlZCBkdXJpbmcgY29tcG9uZW50IGluaXRpYWxpc2F0aW9uLlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzI3J1bi10aW1lLXN2ZWx0ZS1nZXRjb250ZXh0XG4gKi9cbmZ1bmN0aW9uIGdldENvbnRleHQoa2V5KSB7XG4gICAgcmV0dXJuIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQuZ2V0KGtleSk7XG59XG4vKipcbiAqIFJldHJpZXZlcyB0aGUgd2hvbGUgY29udGV4dCBtYXAgdGhhdCBiZWxvbmdzIHRvIHRoZSBjbG9zZXN0IHBhcmVudCBjb21wb25lbnQuXG4gKiBNdXN0IGJlIGNhbGxlZCBkdXJpbmcgY29tcG9uZW50IGluaXRpYWxpc2F0aW9uLiBVc2VmdWwsIGZvciBleGFtcGxlLCBpZiB5b3VcbiAqIHByb2dyYW1tYXRpY2FsbHkgY3JlYXRlIGEgY29tcG9uZW50IGFuZCB3YW50IHRvIHBhc3MgdGhlIGV4aXN0aW5nIGNvbnRleHQgdG8gaXQuXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3MjcnVuLXRpbWUtc3ZlbHRlLWdldGFsbGNvbnRleHRzXG4gKi9cbmZ1bmN0aW9uIGdldEFsbENvbnRleHRzKCkge1xuICAgIHJldHVybiBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0O1xufVxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciBhIGdpdmVuIGBrZXlgIGhhcyBiZWVuIHNldCBpbiB0aGUgY29udGV4dCBvZiBhIHBhcmVudCBjb21wb25lbnQuXG4gKiBNdXN0IGJlIGNhbGxlZCBkdXJpbmcgY29tcG9uZW50IGluaXRpYWxpc2F0aW9uLlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzI3J1bi10aW1lLXN2ZWx0ZS1oYXNjb250ZXh0XG4gKi9cbmZ1bmN0aW9uIGhhc0NvbnRleHQoa2V5KSB7XG4gICAgcmV0dXJuIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQuaGFzKGtleSk7XG59XG4vLyBUT0RPIGZpZ3VyZSBvdXQgaWYgd2Ugc3RpbGwgd2FudCB0byBzdXBwb3J0XG4vLyBzaG9ydGhhbmQgZXZlbnRzLCBvciBpZiB3ZSB3YW50IHRvIGltcGxlbWVudFxuLy8gYSByZWFsIGJ1YmJsaW5nIG1lY2hhbmlzbVxuZnVuY3Rpb24gYnViYmxlKGNvbXBvbmVudCwgZXZlbnQpIHtcbiAgICBjb25zdCBjYWxsYmFja3MgPSBjb21wb25lbnQuJCQuY2FsbGJhY2tzW2V2ZW50LnR5cGVdO1xuICAgIGlmIChjYWxsYmFja3MpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjYWxsYmFja3Muc2xpY2UoKS5mb3JFYWNoKGZuID0+IGZuLmNhbGwodGhpcywgZXZlbnQpKTtcbiAgICB9XG59XG5cbmNvbnN0IGRpcnR5X2NvbXBvbmVudHMgPSBbXTtcbmNvbnN0IGludHJvcyA9IHsgZW5hYmxlZDogZmFsc2UgfTtcbmNvbnN0IGJpbmRpbmdfY2FsbGJhY2tzID0gW107XG5sZXQgcmVuZGVyX2NhbGxiYWNrcyA9IFtdO1xuY29uc3QgZmx1c2hfY2FsbGJhY2tzID0gW107XG5jb25zdCByZXNvbHZlZF9wcm9taXNlID0gLyogQF9fUFVSRV9fICovIFByb21pc2UucmVzb2x2ZSgpO1xubGV0IHVwZGF0ZV9zY2hlZHVsZWQgPSBmYWxzZTtcbmZ1bmN0aW9uIHNjaGVkdWxlX3VwZGF0ZSgpIHtcbiAgICBpZiAoIXVwZGF0ZV9zY2hlZHVsZWQpIHtcbiAgICAgICAgdXBkYXRlX3NjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgIHJlc29sdmVkX3Byb21pc2UudGhlbihmbHVzaCk7XG4gICAgfVxufVxuZnVuY3Rpb24gdGljaygpIHtcbiAgICBzY2hlZHVsZV91cGRhdGUoKTtcbiAgICByZXR1cm4gcmVzb2x2ZWRfcHJvbWlzZTtcbn1cbmZ1bmN0aW9uIGFkZF9yZW5kZXJfY2FsbGJhY2soZm4pIHtcbiAgICByZW5kZXJfY2FsbGJhY2tzLnB1c2goZm4pO1xufVxuZnVuY3Rpb24gYWRkX2ZsdXNoX2NhbGxiYWNrKGZuKSB7XG4gICAgZmx1c2hfY2FsbGJhY2tzLnB1c2goZm4pO1xufVxuLy8gZmx1c2goKSBjYWxscyBjYWxsYmFja3MgaW4gdGhpcyBvcmRlcjpcbi8vIDEuIEFsbCBiZWZvcmVVcGRhdGUgY2FsbGJhY2tzLCBpbiBvcmRlcjogcGFyZW50cyBiZWZvcmUgY2hpbGRyZW5cbi8vIDIuIEFsbCBiaW5kOnRoaXMgY2FsbGJhY2tzLCBpbiByZXZlcnNlIG9yZGVyOiBjaGlsZHJlbiBiZWZvcmUgcGFyZW50cy5cbi8vIDMuIEFsbCBhZnRlclVwZGF0ZSBjYWxsYmFja3MsIGluIG9yZGVyOiBwYXJlbnRzIGJlZm9yZSBjaGlsZHJlbi4gRVhDRVBUXG4vLyAgICBmb3IgYWZ0ZXJVcGRhdGVzIGNhbGxlZCBkdXJpbmcgdGhlIGluaXRpYWwgb25Nb3VudCwgd2hpY2ggYXJlIGNhbGxlZCBpblxuLy8gICAgcmV2ZXJzZSBvcmRlcjogY2hpbGRyZW4gYmVmb3JlIHBhcmVudHMuXG4vLyBTaW5jZSBjYWxsYmFja3MgbWlnaHQgdXBkYXRlIGNvbXBvbmVudCB2YWx1ZXMsIHdoaWNoIGNvdWxkIHRyaWdnZXIgYW5vdGhlclxuLy8gY2FsbCB0byBmbHVzaCgpLCB0aGUgZm9sbG93aW5nIHN0ZXBzIGd1YXJkIGFnYWluc3QgdGhpczpcbi8vIDEuIER1cmluZyBiZWZvcmVVcGRhdGUsIGFueSB1cGRhdGVkIGNvbXBvbmVudHMgd2lsbCBiZSBhZGRlZCB0byB0aGVcbi8vICAgIGRpcnR5X2NvbXBvbmVudHMgYXJyYXkgYW5kIHdpbGwgY2F1c2UgYSByZWVudHJhbnQgY2FsbCB0byBmbHVzaCgpLiBCZWNhdXNlXG4vLyAgICB0aGUgZmx1c2ggaW5kZXggaXMga2VwdCBvdXRzaWRlIHRoZSBmdW5jdGlvbiwgdGhlIHJlZW50cmFudCBjYWxsIHdpbGwgcGlja1xuLy8gICAgdXAgd2hlcmUgdGhlIGVhcmxpZXIgY2FsbCBsZWZ0IG9mZiBhbmQgZ28gdGhyb3VnaCBhbGwgZGlydHkgY29tcG9uZW50cy4gVGhlXG4vLyAgICBjdXJyZW50X2NvbXBvbmVudCB2YWx1ZSBpcyBzYXZlZCBhbmQgcmVzdG9yZWQgc28gdGhhdCB0aGUgcmVlbnRyYW50IGNhbGwgd2lsbFxuLy8gICAgbm90IGludGVyZmVyZSB3aXRoIHRoZSBcInBhcmVudFwiIGZsdXNoKCkgY2FsbC5cbi8vIDIuIGJpbmQ6dGhpcyBjYWxsYmFja3MgY2Fubm90IHRyaWdnZXIgbmV3IGZsdXNoKCkgY2FsbHMuXG4vLyAzLiBEdXJpbmcgYWZ0ZXJVcGRhdGUsIGFueSB1cGRhdGVkIGNvbXBvbmVudHMgd2lsbCBOT1QgaGF2ZSB0aGVpciBhZnRlclVwZGF0ZVxuLy8gICAgY2FsbGJhY2sgY2FsbGVkIGEgc2Vjb25kIHRpbWU7IHRoZSBzZWVuX2NhbGxiYWNrcyBzZXQsIG91dHNpZGUgdGhlIGZsdXNoKClcbi8vICAgIGZ1bmN0aW9uLCBndWFyYW50ZWVzIHRoaXMgYmVoYXZpb3IuXG5jb25zdCBzZWVuX2NhbGxiYWNrcyA9IG5ldyBTZXQoKTtcbmxldCBmbHVzaGlkeCA9IDA7IC8vIERvICpub3QqIG1vdmUgdGhpcyBpbnNpZGUgdGhlIGZsdXNoKCkgZnVuY3Rpb25cbmZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIC8vIERvIG5vdCByZWVudGVyIGZsdXNoIHdoaWxlIGRpcnR5IGNvbXBvbmVudHMgYXJlIHVwZGF0ZWQsIGFzIHRoaXMgY2FuXG4gICAgLy8gcmVzdWx0IGluIGFuIGluZmluaXRlIGxvb3AuIEluc3RlYWQsIGxldCB0aGUgaW5uZXIgZmx1c2ggaGFuZGxlIGl0LlxuICAgIC8vIFJlZW50cmFuY3kgaXMgb2sgYWZ0ZXJ3YXJkcyBmb3IgYmluZGluZ3MgZXRjLlxuICAgIGlmIChmbHVzaGlkeCAhPT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNhdmVkX2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuICAgIGRvIHtcbiAgICAgICAgLy8gZmlyc3QsIGNhbGwgYmVmb3JlVXBkYXRlIGZ1bmN0aW9uc1xuICAgICAgICAvLyBhbmQgdXBkYXRlIGNvbXBvbmVudHNcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHdoaWxlIChmbHVzaGlkeCA8IGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gZGlydHlfY29tcG9uZW50c1tmbHVzaGlkeF07XG4gICAgICAgICAgICAgICAgZmx1c2hpZHgrKztcbiAgICAgICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB1cGRhdGUoY29tcG9uZW50LiQkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gcmVzZXQgZGlydHkgc3RhdGUgdG8gbm90IGVuZCB1cCBpbiBhIGRlYWRsb2NrZWQgc3RhdGUgYW5kIHRoZW4gcmV0aHJvd1xuICAgICAgICAgICAgZGlydHlfY29tcG9uZW50cy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgZmx1c2hpZHggPSAwO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQobnVsbCk7XG4gICAgICAgIGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoID0gMDtcbiAgICAgICAgZmx1c2hpZHggPSAwO1xuICAgICAgICB3aGlsZSAoYmluZGluZ19jYWxsYmFja3MubGVuZ3RoKVxuICAgICAgICAgICAgYmluZGluZ19jYWxsYmFja3MucG9wKCkoKTtcbiAgICAgICAgLy8gdGhlbiwgb25jZSBjb21wb25lbnRzIGFyZSB1cGRhdGVkLCBjYWxsXG4gICAgICAgIC8vIGFmdGVyVXBkYXRlIGZ1bmN0aW9ucy4gVGhpcyBtYXkgY2F1c2VcbiAgICAgICAgLy8gc3Vic2VxdWVudCB1cGRhdGVzLi4uXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVuZGVyX2NhbGxiYWNrcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSByZW5kZXJfY2FsbGJhY2tzW2ldO1xuICAgICAgICAgICAgaWYgKCFzZWVuX2NhbGxiYWNrcy5oYXMoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICAgICAgLy8gLi4uc28gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBsb29wc1xuICAgICAgICAgICAgICAgIHNlZW5fY2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZW5kZXJfY2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gICAgfSB3aGlsZSAoZGlydHlfY29tcG9uZW50cy5sZW5ndGgpO1xuICAgIHdoaWxlIChmbHVzaF9jYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgICAgIGZsdXNoX2NhbGxiYWNrcy5wb3AoKSgpO1xuICAgIH1cbiAgICB1cGRhdGVfc2NoZWR1bGVkID0gZmFsc2U7XG4gICAgc2Vlbl9jYWxsYmFja3MuY2xlYXIoKTtcbiAgICBzZXRfY3VycmVudF9jb21wb25lbnQoc2F2ZWRfY29tcG9uZW50KTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZSgkJCkge1xuICAgIGlmICgkJC5mcmFnbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAkJC51cGRhdGUoKTtcbiAgICAgICAgcnVuX2FsbCgkJC5iZWZvcmVfdXBkYXRlKTtcbiAgICAgICAgY29uc3QgZGlydHkgPSAkJC5kaXJ0eTtcbiAgICAgICAgJCQuZGlydHkgPSBbLTFdO1xuICAgICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5wKCQkLmN0eCwgZGlydHkpO1xuICAgICAgICAkJC5hZnRlcl91cGRhdGUuZm9yRWFjaChhZGRfcmVuZGVyX2NhbGxiYWNrKTtcbiAgICB9XG59XG4vKipcbiAqIFVzZWZ1bCBmb3IgZXhhbXBsZSB0byBleGVjdXRlIHJlbWFpbmluZyBgYWZ0ZXJVcGRhdGVgIGNhbGxiYWNrcyBiZWZvcmUgZXhlY3V0aW5nIGBkZXN0cm95YC5cbiAqL1xuZnVuY3Rpb24gZmx1c2hfcmVuZGVyX2NhbGxiYWNrcyhmbnMpIHtcbiAgICBjb25zdCBmaWx0ZXJlZCA9IFtdO1xuICAgIGNvbnN0IHRhcmdldHMgPSBbXTtcbiAgICByZW5kZXJfY2FsbGJhY2tzLmZvckVhY2goKGMpID0+IGZucy5pbmRleE9mKGMpID09PSAtMSA/IGZpbHRlcmVkLnB1c2goYykgOiB0YXJnZXRzLnB1c2goYykpO1xuICAgIHRhcmdldHMuZm9yRWFjaCgoYykgPT4gYygpKTtcbiAgICByZW5kZXJfY2FsbGJhY2tzID0gZmlsdGVyZWQ7XG59XG5cbmxldCBwcm9taXNlO1xuZnVuY3Rpb24gd2FpdCgpIHtcbiAgICBpZiAoIXByb21pc2UpIHtcbiAgICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICBwcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcHJvbWlzZSA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cbmZ1bmN0aW9uIGRpc3BhdGNoKG5vZGUsIGRpcmVjdGlvbiwga2luZCkge1xuICAgIG5vZGUuZGlzcGF0Y2hFdmVudChjdXN0b21fZXZlbnQoYCR7ZGlyZWN0aW9uID8gJ2ludHJvJyA6ICdvdXRybyd9JHtraW5kfWApKTtcbn1cbmNvbnN0IG91dHJvaW5nID0gbmV3IFNldCgpO1xubGV0IG91dHJvcztcbmZ1bmN0aW9uIGdyb3VwX291dHJvcygpIHtcbiAgICBvdXRyb3MgPSB7XG4gICAgICAgIHI6IDAsXG4gICAgICAgIGM6IFtdLFxuICAgICAgICBwOiBvdXRyb3MgLy8gcGFyZW50IGdyb3VwXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNoZWNrX291dHJvcygpIHtcbiAgICBpZiAoIW91dHJvcy5yKSB7XG4gICAgICAgIHJ1bl9hbGwob3V0cm9zLmMpO1xuICAgIH1cbiAgICBvdXRyb3MgPSBvdXRyb3MucDtcbn1cbmZ1bmN0aW9uIHRyYW5zaXRpb25faW4oYmxvY2ssIGxvY2FsKSB7XG4gICAgaWYgKGJsb2NrICYmIGJsb2NrLmkpIHtcbiAgICAgICAgb3V0cm9pbmcuZGVsZXRlKGJsb2NrKTtcbiAgICAgICAgYmxvY2suaShsb2NhbCk7XG4gICAgfVxufVxuZnVuY3Rpb24gdHJhbnNpdGlvbl9vdXQoYmxvY2ssIGxvY2FsLCBkZXRhY2gsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGJsb2NrICYmIGJsb2NrLm8pIHtcbiAgICAgICAgaWYgKG91dHJvaW5nLmhhcyhibG9jaykpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIG91dHJvaW5nLmFkZChibG9jayk7XG4gICAgICAgIG91dHJvcy5jLnB1c2goKCkgPT4ge1xuICAgICAgICAgICAgb3V0cm9pbmcuZGVsZXRlKGJsb2NrKTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGlmIChkZXRhY2gpXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrLmQoMSk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJsb2NrLm8obG9jYWwpO1xuICAgIH1cbiAgICBlbHNlIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgIH1cbn1cbmNvbnN0IG51bGxfdHJhbnNpdGlvbiA9IHsgZHVyYXRpb246IDAgfTtcbmZ1bmN0aW9uIGNyZWF0ZV9pbl90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMpIHtcbiAgICBjb25zdCBvcHRpb25zID0geyBkaXJlY3Rpb246ICdpbicgfTtcbiAgICBsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zLCBvcHRpb25zKTtcbiAgICBsZXQgcnVubmluZyA9IGZhbHNlO1xuICAgIGxldCBhbmltYXRpb25fbmFtZTtcbiAgICBsZXQgdGFzaztcbiAgICBsZXQgdWlkID0gMDtcbiAgICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgICBpZiAoYW5pbWF0aW9uX25hbWUpXG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdvKCkge1xuICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCB0aWNrID0gbm9vcCwgY3NzIH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAwLCAxLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzLCB1aWQrKyk7XG4gICAgICAgIHRpY2soMCwgMSk7XG4gICAgICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5O1xuICAgICAgICBjb25zdCBlbmRfdGltZSA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbjtcbiAgICAgICAgaWYgKHRhc2spXG4gICAgICAgICAgICB0YXNrLmFib3J0KCk7XG4gICAgICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIHRydWUsICdzdGFydCcpKTtcbiAgICAgICAgdGFzayA9IGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBlbmRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICB0aWNrKDEsIDApO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCB0cnVlLCAnZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBzdGFydF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBlYXNpbmcoKG5vdyAtIHN0YXJ0X3RpbWUpIC8gZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aWNrKHQsIDEgLSB0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcnVubmluZztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBzdGFydGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnQoKSB7XG4gICAgICAgICAgICBpZiAoc3RhcnRlZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUpO1xuICAgICAgICAgICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICBjb25maWcgPSBjb25maWcob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgd2FpdCgpLnRoZW4oZ28pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ28oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaW52YWxpZGF0ZSgpIHtcbiAgICAgICAgICAgIHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5kKCkge1xuICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9vdXRfdHJhbnNpdGlvbihub2RlLCBmbiwgcGFyYW1zKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsgZGlyZWN0aW9uOiAnb3V0JyB9O1xuICAgIGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMsIG9wdGlvbnMpO1xuICAgIGxldCBydW5uaW5nID0gdHJ1ZTtcbiAgICBsZXQgYW5pbWF0aW9uX25hbWU7XG4gICAgY29uc3QgZ3JvdXAgPSBvdXRyb3M7XG4gICAgZ3JvdXAuciArPSAxO1xuICAgIGZ1bmN0aW9uIGdvKCkge1xuICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCB0aWNrID0gbm9vcCwgY3NzIH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAxLCAwLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzKTtcbiAgICAgICAgY29uc3Qgc3RhcnRfdGltZSA9IG5vdygpICsgZGVsYXk7XG4gICAgICAgIGNvbnN0IGVuZF90aW1lID0gc3RhcnRfdGltZSArIGR1cmF0aW9uO1xuICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIGZhbHNlLCAnc3RhcnQnKSk7XG4gICAgICAgIGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBlbmRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICB0aWNrKDAsIDEpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCBmYWxzZSwgJ2VuZCcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIS0tZ3JvdXAucikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3aWxsIHJlc3VsdCBpbiBgZW5kKClgIGJlaW5nIGNhbGxlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvIHdlIGRvbid0IG5lZWQgdG8gY2xlYW4gdXAgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgcnVuX2FsbChncm91cC5jKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gc3RhcnRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ID0gZWFzaW5nKChub3cgLSBzdGFydF90aW1lKSAvIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgdGljaygxIC0gdCwgdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJ1bm5pbmc7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoaXNfZnVuY3Rpb24oY29uZmlnKSkge1xuICAgICAgICB3YWl0KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25maWcgPSBjb25maWcob3B0aW9ucyk7XG4gICAgICAgICAgICBnbygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGdvKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGVuZChyZXNldCkge1xuICAgICAgICAgICAgaWYgKHJlc2V0ICYmIGNvbmZpZy50aWNrKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLnRpY2soMSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25fbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuICAgICAgICAgICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBjcmVhdGVfYmlkaXJlY3Rpb25hbF90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMsIGludHJvKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsgZGlyZWN0aW9uOiAnYm90aCcgfTtcbiAgICBsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zLCBvcHRpb25zKTtcbiAgICBsZXQgdCA9IGludHJvID8gMCA6IDE7XG4gICAgbGV0IHJ1bm5pbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgbGV0IHBlbmRpbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgbGV0IGFuaW1hdGlvbl9uYW1lID0gbnVsbDtcbiAgICBmdW5jdGlvbiBjbGVhcl9hbmltYXRpb24oKSB7XG4gICAgICAgIGlmIChhbmltYXRpb25fbmFtZSlcbiAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUsIGFuaW1hdGlvbl9uYW1lKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaW5pdChwcm9ncmFtLCBkdXJhdGlvbikge1xuICAgICAgICBjb25zdCBkID0gKHByb2dyYW0uYiAtIHQpO1xuICAgICAgICBkdXJhdGlvbiAqPSBNYXRoLmFicyhkKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGE6IHQsXG4gICAgICAgICAgICBiOiBwcm9ncmFtLmIsXG4gICAgICAgICAgICBkLFxuICAgICAgICAgICAgZHVyYXRpb24sXG4gICAgICAgICAgICBzdGFydDogcHJvZ3JhbS5zdGFydCxcbiAgICAgICAgICAgIGVuZDogcHJvZ3JhbS5zdGFydCArIGR1cmF0aW9uLFxuICAgICAgICAgICAgZ3JvdXA6IHByb2dyYW0uZ3JvdXBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ28oYikge1xuICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCB0aWNrID0gbm9vcCwgY3NzIH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuICAgICAgICBjb25zdCBwcm9ncmFtID0ge1xuICAgICAgICAgICAgc3RhcnQ6IG5vdygpICsgZGVsYXksXG4gICAgICAgICAgICBiXG4gICAgICAgIH07XG4gICAgICAgIGlmICghYikge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0b2RvOiBpbXByb3ZlIHR5cGluZ3NcbiAgICAgICAgICAgIHByb2dyYW0uZ3JvdXAgPSBvdXRyb3M7XG4gICAgICAgICAgICBvdXRyb3MuciArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChydW5uaW5nX3Byb2dyYW0gfHwgcGVuZGluZ19wcm9ncmFtKSB7XG4gICAgICAgICAgICBwZW5kaW5nX3Byb2dyYW0gPSBwcm9ncmFtO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyBhbiBpbnRybywgYW5kIHRoZXJlJ3MgYSBkZWxheSwgd2UgbmVlZCB0byBkb1xuICAgICAgICAgICAgLy8gYW4gaW5pdGlhbCB0aWNrIGFuZC9vciBhcHBseSBDU1MgYW5pbWF0aW9uIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICBpZiAoY3NzKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJfYW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCB0LCBiLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChiKVxuICAgICAgICAgICAgICAgIHRpY2soMCwgMSk7XG4gICAgICAgICAgICBydW5uaW5nX3Byb2dyYW0gPSBpbml0KHByb2dyYW0sIGR1cmF0aW9uKTtcbiAgICAgICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgYiwgJ3N0YXJ0JykpO1xuICAgICAgICAgICAgbG9vcChub3cgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwZW5kaW5nX3Byb2dyYW0gJiYgbm93ID4gcGVuZGluZ19wcm9ncmFtLnN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IGluaXQocGVuZGluZ19wcm9ncmFtLCBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIHJ1bm5pbmdfcHJvZ3JhbS5iLCAnc3RhcnQnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJfYW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIHQsIHJ1bm5pbmdfcHJvZ3JhbS5iLCBydW5uaW5nX3Byb2dyYW0uZHVyYXRpb24sIDAsIGVhc2luZywgY29uZmlnLmNzcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmdfcHJvZ3JhbSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm93ID49IHJ1bm5pbmdfcHJvZ3JhbS5lbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2sodCA9IHJ1bm5pbmdfcHJvZ3JhbS5iLCAxIC0gdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCBydW5uaW5nX3Byb2dyYW0uYiwgJ2VuZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwZW5kaW5nX3Byb2dyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSdyZSBkb25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmdfcHJvZ3JhbS5iKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGludHJvIFx1MjAxNCB3ZSBjYW4gdGlkeSB1cCBpbW1lZGlhdGVseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG91dHJvIFx1MjAxNCBuZWVkcyB0byBiZSBjb29yZGluYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIS0tcnVubmluZ19wcm9ncmFtLmdyb3VwLnIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydW5fYWxsKHJ1bm5pbmdfcHJvZ3JhbS5ncm91cC5jKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBydW5uaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vdyA+PSBydW5uaW5nX3Byb2dyYW0uc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBub3cgLSBydW5uaW5nX3Byb2dyYW0uc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gcnVubmluZ19wcm9ncmFtLmEgKyBydW5uaW5nX3Byb2dyYW0uZCAqIGVhc2luZyhwIC8gcnVubmluZ19wcm9ncmFtLmR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2sodCwgMSAtIHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAhIShydW5uaW5nX3Byb2dyYW0gfHwgcGVuZGluZ19wcm9ncmFtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHJ1bihiKSB7XG4gICAgICAgICAgICBpZiAoaXNfZnVuY3Rpb24oY29uZmlnKSkge1xuICAgICAgICAgICAgICAgIHdhaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICBjb25maWcgPSBjb25maWcob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIGdvKGIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ28oYik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVuZCgpIHtcbiAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gcGVuZGluZ19wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGhhbmRsZV9wcm9taXNlKHByb21pc2UsIGluZm8pIHtcbiAgICBjb25zdCB0b2tlbiA9IGluZm8udG9rZW4gPSB7fTtcbiAgICBmdW5jdGlvbiB1cGRhdGUodHlwZSwgaW5kZXgsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKGluZm8udG9rZW4gIT09IHRva2VuKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpbmZvLnJlc29sdmVkID0gdmFsdWU7XG4gICAgICAgIGxldCBjaGlsZF9jdHggPSBpbmZvLmN0eDtcbiAgICAgICAgaWYgKGtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjaGlsZF9jdHggPSBjaGlsZF9jdHguc2xpY2UoKTtcbiAgICAgICAgICAgIGNoaWxkX2N0eFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYmxvY2sgPSB0eXBlICYmIChpbmZvLmN1cnJlbnQgPSB0eXBlKShjaGlsZF9jdHgpO1xuICAgICAgICBsZXQgbmVlZHNfZmx1c2ggPSBmYWxzZTtcbiAgICAgICAgaWYgKGluZm8uYmxvY2spIHtcbiAgICAgICAgICAgIGlmIChpbmZvLmJsb2Nrcykge1xuICAgICAgICAgICAgICAgIGluZm8uYmxvY2tzLmZvckVhY2goKGJsb2NrLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpICE9PSBpbmRleCAmJiBibG9jaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBfb3V0cm9zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uX291dChibG9jaywgMSwgMSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmZvLmJsb2Nrc1tpXSA9PT0gYmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mby5ibG9ja3NbaV0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tfb3V0cm9zKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGluZm8uYmxvY2suZCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJsb2NrLmMoKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb25faW4oYmxvY2ssIDEpO1xuICAgICAgICAgICAgYmxvY2subShpbmZvLm1vdW50KCksIGluZm8uYW5jaG9yKTtcbiAgICAgICAgICAgIG5lZWRzX2ZsdXNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpbmZvLmJsb2NrID0gYmxvY2s7XG4gICAgICAgIGlmIChpbmZvLmJsb2NrcylcbiAgICAgICAgICAgIGluZm8uYmxvY2tzW2luZGV4XSA9IGJsb2NrO1xuICAgICAgICBpZiAobmVlZHNfZmx1c2gpIHtcbiAgICAgICAgICAgIGZsdXNoKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzX3Byb21pc2UocHJvbWlzZSkpIHtcbiAgICAgICAgY29uc3QgY3VycmVudF9jb21wb25lbnQgPSBnZXRfY3VycmVudF9jb21wb25lbnQoKTtcbiAgICAgICAgcHJvbWlzZS50aGVuKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjdXJyZW50X2NvbXBvbmVudCk7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby50aGVuLCAxLCBpbmZvLnZhbHVlLCB2YWx1ZSk7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQobnVsbCk7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjdXJyZW50X2NvbXBvbmVudCk7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby5jYXRjaCwgMiwgaW5mby5lcnJvciwgZXJyb3IpO1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KG51bGwpO1xuICAgICAgICAgICAgaWYgKCFpbmZvLmhhc0NhdGNoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBpZiB3ZSBwcmV2aW91c2x5IGhhZCBhIHRoZW4vY2F0Y2ggYmxvY2ssIGRlc3Ryb3kgaXRcbiAgICAgICAgaWYgKGluZm8uY3VycmVudCAhPT0gaW5mby5wZW5kaW5nKSB7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby5wZW5kaW5nLCAwKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoaW5mby5jdXJyZW50ICE9PSBpbmZvLnRoZW4pIHtcbiAgICAgICAgICAgIHVwZGF0ZShpbmZvLnRoZW4sIDEsIGluZm8udmFsdWUsIHByb21pc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5mby5yZXNvbHZlZCA9IHByb21pc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gdXBkYXRlX2F3YWl0X2Jsb2NrX2JyYW5jaChpbmZvLCBjdHgsIGRpcnR5KSB7XG4gICAgY29uc3QgY2hpbGRfY3R4ID0gY3R4LnNsaWNlKCk7XG4gICAgY29uc3QgeyByZXNvbHZlZCB9ID0gaW5mbztcbiAgICBpZiAoaW5mby5jdXJyZW50ID09PSBpbmZvLnRoZW4pIHtcbiAgICAgICAgY2hpbGRfY3R4W2luZm8udmFsdWVdID0gcmVzb2x2ZWQ7XG4gICAgfVxuICAgIGlmIChpbmZvLmN1cnJlbnQgPT09IGluZm8uY2F0Y2gpIHtcbiAgICAgICAgY2hpbGRfY3R4W2luZm8uZXJyb3JdID0gcmVzb2x2ZWQ7XG4gICAgfVxuICAgIGluZm8uYmxvY2sucChjaGlsZF9jdHgsIGRpcnR5KTtcbn1cblxuZnVuY3Rpb24gZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgYmxvY2suZCgxKTtcbiAgICBsb29rdXAuZGVsZXRlKGJsb2NrLmtleSk7XG59XG5mdW5jdGlvbiBvdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgdHJhbnNpdGlvbl9vdXQoYmxvY2ssIDEsIDEsICgpID0+IHtcbiAgICAgICAgbG9va3VwLmRlbGV0ZShibG9jay5rZXkpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZml4X2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcbiAgICBibG9jay5mKCk7XG4gICAgZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKTtcbn1cbmZ1bmN0aW9uIGZpeF9hbmRfb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuICAgIGJsb2NrLmYoKTtcbiAgICBvdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZV9rZXllZF9lYWNoKG9sZF9ibG9ja3MsIGRpcnR5LCBnZXRfa2V5LCBkeW5hbWljLCBjdHgsIGxpc3QsIGxvb2t1cCwgbm9kZSwgZGVzdHJveSwgY3JlYXRlX2VhY2hfYmxvY2ssIG5leHQsIGdldF9jb250ZXh0KSB7XG4gICAgbGV0IG8gPSBvbGRfYmxvY2tzLmxlbmd0aDtcbiAgICBsZXQgbiA9IGxpc3QubGVuZ3RoO1xuICAgIGxldCBpID0gbztcbiAgICBjb25zdCBvbGRfaW5kZXhlcyA9IHt9O1xuICAgIHdoaWxlIChpLS0pXG4gICAgICAgIG9sZF9pbmRleGVzW29sZF9ibG9ja3NbaV0ua2V5XSA9IGk7XG4gICAgY29uc3QgbmV3X2Jsb2NrcyA9IFtdO1xuICAgIGNvbnN0IG5ld19sb29rdXAgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgZGVsdGFzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHVwZGF0ZXMgPSBbXTtcbiAgICBpID0gbjtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkX2N0eCA9IGdldF9jb250ZXh0KGN0eCwgbGlzdCwgaSk7XG4gICAgICAgIGNvbnN0IGtleSA9IGdldF9rZXkoY2hpbGRfY3R4KTtcbiAgICAgICAgbGV0IGJsb2NrID0gbG9va3VwLmdldChrZXkpO1xuICAgICAgICBpZiAoIWJsb2NrKSB7XG4gICAgICAgICAgICBibG9jayA9IGNyZWF0ZV9lYWNoX2Jsb2NrKGtleSwgY2hpbGRfY3R4KTtcbiAgICAgICAgICAgIGJsb2NrLmMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkeW5hbWljKSB7XG4gICAgICAgICAgICAvLyBkZWZlciB1cGRhdGVzIHVudGlsIGFsbCB0aGUgRE9NIHNodWZmbGluZyBpcyBkb25lXG4gICAgICAgICAgICB1cGRhdGVzLnB1c2goKCkgPT4gYmxvY2sucChjaGlsZF9jdHgsIGRpcnR5KSk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3X2xvb2t1cC5zZXQoa2V5LCBuZXdfYmxvY2tzW2ldID0gYmxvY2spO1xuICAgICAgICBpZiAoa2V5IGluIG9sZF9pbmRleGVzKVxuICAgICAgICAgICAgZGVsdGFzLnNldChrZXksIE1hdGguYWJzKGkgLSBvbGRfaW5kZXhlc1trZXldKSk7XG4gICAgfVxuICAgIGNvbnN0IHdpbGxfbW92ZSA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBkaWRfbW92ZSA9IG5ldyBTZXQoKTtcbiAgICBmdW5jdGlvbiBpbnNlcnQoYmxvY2spIHtcbiAgICAgICAgdHJhbnNpdGlvbl9pbihibG9jaywgMSk7XG4gICAgICAgIGJsb2NrLm0obm9kZSwgbmV4dCk7XG4gICAgICAgIGxvb2t1cC5zZXQoYmxvY2sua2V5LCBibG9jayk7XG4gICAgICAgIG5leHQgPSBibG9jay5maXJzdDtcbiAgICAgICAgbi0tO1xuICAgIH1cbiAgICB3aGlsZSAobyAmJiBuKSB7XG4gICAgICAgIGNvbnN0IG5ld19ibG9jayA9IG5ld19ibG9ja3NbbiAtIDFdO1xuICAgICAgICBjb25zdCBvbGRfYmxvY2sgPSBvbGRfYmxvY2tzW28gLSAxXTtcbiAgICAgICAgY29uc3QgbmV3X2tleSA9IG5ld19ibG9jay5rZXk7XG4gICAgICAgIGNvbnN0IG9sZF9rZXkgPSBvbGRfYmxvY2sua2V5O1xuICAgICAgICBpZiAobmV3X2Jsb2NrID09PSBvbGRfYmxvY2spIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIG5leHQgPSBuZXdfYmxvY2suZmlyc3Q7XG4gICAgICAgICAgICBvLS07XG4gICAgICAgICAgICBuLS07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIW5ld19sb29rdXAuaGFzKG9sZF9rZXkpKSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgb2xkIGJsb2NrXG4gICAgICAgICAgICBkZXN0cm95KG9sZF9ibG9jaywgbG9va3VwKTtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghbG9va3VwLmhhcyhuZXdfa2V5KSB8fCB3aWxsX21vdmUuaGFzKG5ld19rZXkpKSB7XG4gICAgICAgICAgICBpbnNlcnQobmV3X2Jsb2NrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaWRfbW92ZS5oYXMob2xkX2tleSkpIHtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkZWx0YXMuZ2V0KG5ld19rZXkpID4gZGVsdGFzLmdldChvbGRfa2V5KSkge1xuICAgICAgICAgICAgZGlkX21vdmUuYWRkKG5ld19rZXkpO1xuICAgICAgICAgICAgaW5zZXJ0KG5ld19ibG9jayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3aWxsX21vdmUuYWRkKG9sZF9rZXkpO1xuICAgICAgICAgICAgby0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIHdoaWxlIChvLS0pIHtcbiAgICAgICAgY29uc3Qgb2xkX2Jsb2NrID0gb2xkX2Jsb2Nrc1tvXTtcbiAgICAgICAgaWYgKCFuZXdfbG9va3VwLmhhcyhvbGRfYmxvY2sua2V5KSlcbiAgICAgICAgICAgIGRlc3Ryb3kob2xkX2Jsb2NrLCBsb29rdXApO1xuICAgIH1cbiAgICB3aGlsZSAobilcbiAgICAgICAgaW5zZXJ0KG5ld19ibG9ja3NbbiAtIDFdKTtcbiAgICBydW5fYWxsKHVwZGF0ZXMpO1xuICAgIHJldHVybiBuZXdfYmxvY2tzO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVfZWFjaF9rZXlzKGN0eCwgbGlzdCwgZ2V0X2NvbnRleHQsIGdldF9rZXkpIHtcbiAgICBjb25zdCBrZXlzID0gbmV3IFNldCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBrZXkgPSBnZXRfa2V5KGdldF9jb250ZXh0KGN0eCwgbGlzdCwgaSkpO1xuICAgICAgICBpZiAoa2V5cy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgaGF2ZSBkdXBsaWNhdGUga2V5cyBpbiBhIGtleWVkIGVhY2gnKTtcbiAgICAgICAgfVxuICAgICAgICBrZXlzLmFkZChrZXkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0X3NwcmVhZF91cGRhdGUobGV2ZWxzLCB1cGRhdGVzKSB7XG4gICAgY29uc3QgdXBkYXRlID0ge307XG4gICAgY29uc3QgdG9fbnVsbF9vdXQgPSB7fTtcbiAgICBjb25zdCBhY2NvdW50ZWRfZm9yID0geyAkJHNjb3BlOiAxIH07XG4gICAgbGV0IGkgPSBsZXZlbHMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgY29uc3QgbyA9IGxldmVsc1tpXTtcbiAgICAgICAgY29uc3QgbiA9IHVwZGF0ZXNbaV07XG4gICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoa2V5IGluIG4pKVxuICAgICAgICAgICAgICAgICAgICB0b19udWxsX291dFtrZXldID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG4pIHtcbiAgICAgICAgICAgICAgICBpZiAoIWFjY291bnRlZF9mb3Jba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVba2V5XSA9IG5ba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudGVkX2ZvcltrZXldID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXZlbHNbaV0gPSBuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbykge1xuICAgICAgICAgICAgICAgIGFjY291bnRlZF9mb3Jba2V5XSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdG9fbnVsbF9vdXQpIHtcbiAgICAgICAgaWYgKCEoa2V5IGluIHVwZGF0ZSkpXG4gICAgICAgICAgICB1cGRhdGVba2V5XSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHVwZGF0ZTtcbn1cbmZ1bmN0aW9uIGdldF9zcHJlYWRfb2JqZWN0KHNwcmVhZF9wcm9wcykge1xuICAgIHJldHVybiB0eXBlb2Ygc3ByZWFkX3Byb3BzID09PSAnb2JqZWN0JyAmJiBzcHJlYWRfcHJvcHMgIT09IG51bGwgPyBzcHJlYWRfcHJvcHMgOiB7fTtcbn1cblxuY29uc3QgX2Jvb2xlYW5fYXR0cmlidXRlcyA9IFtcbiAgICAnYWxsb3dmdWxsc2NyZWVuJyxcbiAgICAnYWxsb3dwYXltZW50cmVxdWVzdCcsXG4gICAgJ2FzeW5jJyxcbiAgICAnYXV0b2ZvY3VzJyxcbiAgICAnYXV0b3BsYXknLFxuICAgICdjaGVja2VkJyxcbiAgICAnY29udHJvbHMnLFxuICAgICdkZWZhdWx0JyxcbiAgICAnZGVmZXInLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2Zvcm1ub3ZhbGlkYXRlJyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaW5lcnQnLFxuICAgICdpc21hcCcsXG4gICAgJ2xvb3AnLFxuICAgICdtdWx0aXBsZScsXG4gICAgJ211dGVkJyxcbiAgICAnbm9tb2R1bGUnLFxuICAgICdub3ZhbGlkYXRlJyxcbiAgICAnb3BlbicsXG4gICAgJ3BsYXlzaW5saW5lJyxcbiAgICAncmVhZG9ubHknLFxuICAgICdyZXF1aXJlZCcsXG4gICAgJ3JldmVyc2VkJyxcbiAgICAnc2VsZWN0ZWQnXG5dO1xuLyoqXG4gKiBMaXN0IG9mIEhUTUwgYm9vbGVhbiBhdHRyaWJ1dGVzIChlLmcuIGA8aW5wdXQgZGlzYWJsZWQ+YCkuXG4gKiBTb3VyY2U6IGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2luZGljZXMuaHRtbFxuICovXG5jb25zdCBib29sZWFuX2F0dHJpYnV0ZXMgPSBuZXcgU2V0KFsuLi5fYm9vbGVhbl9hdHRyaWJ1dGVzXSk7XG5cbi8qKiByZWdleCBvZiBhbGwgaHRtbCB2b2lkIGVsZW1lbnQgbmFtZXMgKi9cbmNvbnN0IHZvaWRfZWxlbWVudF9uYW1lcyA9IC9eKD86YXJlYXxiYXNlfGJyfGNvbHxjb21tYW5kfGVtYmVkfGhyfGltZ3xpbnB1dHxrZXlnZW58bGlua3xtZXRhfHBhcmFtfHNvdXJjZXx0cmFja3x3YnIpJC87XG5mdW5jdGlvbiBpc192b2lkKG5hbWUpIHtcbiAgICByZXR1cm4gdm9pZF9lbGVtZW50X25hbWVzLnRlc3QobmFtZSkgfHwgbmFtZS50b0xvd2VyQ2FzZSgpID09PSAnIWRvY3R5cGUnO1xufVxuXG5jb25zdCBpbnZhbGlkX2F0dHJpYnV0ZV9uYW1lX2NoYXJhY3RlciA9IC9bXFxzJ1wiPi89XFx1e0ZERDB9LVxcdXtGREVGfVxcdXtGRkZFfVxcdXtGRkZGfVxcdXsxRkZGRX1cXHV7MUZGRkZ9XFx1ezJGRkZFfVxcdXsyRkZGRn1cXHV7M0ZGRkV9XFx1ezNGRkZGfVxcdXs0RkZGRX1cXHV7NEZGRkZ9XFx1ezVGRkZFfVxcdXs1RkZGRn1cXHV7NkZGRkV9XFx1ezZGRkZGfVxcdXs3RkZGRX1cXHV7N0ZGRkZ9XFx1ezhGRkZFfVxcdXs4RkZGRn1cXHV7OUZGRkV9XFx1ezlGRkZGfVxcdXtBRkZGRX1cXHV7QUZGRkZ9XFx1e0JGRkZFfVxcdXtCRkZGRn1cXHV7Q0ZGRkV9XFx1e0NGRkZGfVxcdXtERkZGRX1cXHV7REZGRkZ9XFx1e0VGRkZFfVxcdXtFRkZGRn1cXHV7RkZGRkV9XFx1e0ZGRkZGfVxcdXsxMEZGRkV9XFx1ezEwRkZGRn1dL3U7XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNhdHRyaWJ1dGVzLTJcbi8vIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNub25jaGFyYWN0ZXJcbmZ1bmN0aW9uIHNwcmVhZChhcmdzLCBhdHRyc190b19hZGQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih7fSwgLi4uYXJncyk7XG4gICAgaWYgKGF0dHJzX3RvX2FkZCkge1xuICAgICAgICBjb25zdCBjbGFzc2VzX3RvX2FkZCA9IGF0dHJzX3RvX2FkZC5jbGFzc2VzO1xuICAgICAgICBjb25zdCBzdHlsZXNfdG9fYWRkID0gYXR0cnNfdG9fYWRkLnN0eWxlcztcbiAgICAgICAgaWYgKGNsYXNzZXNfdG9fYWRkKSB7XG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlcy5jbGFzcyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5jbGFzcyA9IGNsYXNzZXNfdG9fYWRkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5jbGFzcyArPSAnICcgKyBjbGFzc2VzX3RvX2FkZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc3R5bGVzX3RvX2FkZCkge1xuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXMuc3R5bGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuc3R5bGUgPSBzdHlsZV9vYmplY3RfdG9fc3RyaW5nKHN0eWxlc190b19hZGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5zdHlsZSA9IHN0eWxlX29iamVjdF90b19zdHJpbmcobWVyZ2Vfc3NyX3N0eWxlcyhhdHRyaWJ1dGVzLnN0eWxlLCBzdHlsZXNfdG9fYWRkKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IHN0ciA9ICcnO1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIGlmIChpbnZhbGlkX2F0dHJpYnV0ZV9uYW1lX2NoYXJhY3Rlci50ZXN0KG5hbWUpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZV07XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgIHN0ciArPSAnICcgKyBuYW1lO1xuICAgICAgICBlbHNlIGlmIChib29sZWFuX2F0dHJpYnV0ZXMuaGFzKG5hbWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSlcbiAgICAgICAgICAgICAgICBzdHIgKz0gJyAnICsgbmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBzdHIgKz0gYCAke25hbWV9PVwiJHt2YWx1ZX1cImA7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc3RyO1xufVxuZnVuY3Rpb24gbWVyZ2Vfc3NyX3N0eWxlcyhzdHlsZV9hdHRyaWJ1dGUsIHN0eWxlX2RpcmVjdGl2ZSkge1xuICAgIGNvbnN0IHN0eWxlX29iamVjdCA9IHt9O1xuICAgIGZvciAoY29uc3QgaW5kaXZpZHVhbF9zdHlsZSBvZiBzdHlsZV9hdHRyaWJ1dGUuc3BsaXQoJzsnKSkge1xuICAgICAgICBjb25zdCBjb2xvbl9pbmRleCA9IGluZGl2aWR1YWxfc3R5bGUuaW5kZXhPZignOicpO1xuICAgICAgICBjb25zdCBuYW1lID0gaW5kaXZpZHVhbF9zdHlsZS5zbGljZSgwLCBjb2xvbl9pbmRleCkudHJpbSgpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGluZGl2aWR1YWxfc3R5bGUuc2xpY2UoY29sb25faW5kZXggKyAxKS50cmltKCk7XG4gICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBzdHlsZV9vYmplY3RbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBuYW1lIGluIHN0eWxlX2RpcmVjdGl2ZSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHN0eWxlX2RpcmVjdGl2ZVtuYW1lXTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBzdHlsZV9vYmplY3RbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzdHlsZV9vYmplY3RbbmFtZV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlX29iamVjdDtcbn1cbmNvbnN0IEFUVFJfUkVHRVggPSAvWyZcIl0vZztcbmNvbnN0IENPTlRFTlRfUkVHRVggPSAvWyY8XS9nO1xuLyoqXG4gKiBOb3RlOiB0aGlzIG1ldGhvZCBpcyBwZXJmb3JtYW5jZSBzZW5zaXRpdmUgYW5kIGhhcyBiZWVuIG9wdGltaXplZFxuICogaHR0cHM6Ly9naXRodWIuY29tL3N2ZWx0ZWpzL3N2ZWx0ZS9wdWxsLzU3MDFcbiAqL1xuZnVuY3Rpb24gZXNjYXBlKHZhbHVlLCBpc19hdHRyID0gZmFsc2UpIHtcbiAgICBjb25zdCBzdHIgPSBTdHJpbmcodmFsdWUpO1xuICAgIGNvbnN0IHBhdHRlcm4gPSBpc19hdHRyID8gQVRUUl9SRUdFWCA6IENPTlRFTlRfUkVHRVg7XG4gICAgcGF0dGVybi5sYXN0SW5kZXggPSAwO1xuICAgIGxldCBlc2NhcGVkID0gJyc7XG4gICAgbGV0IGxhc3QgPSAwO1xuICAgIHdoaWxlIChwYXR0ZXJuLnRlc3Qoc3RyKSkge1xuICAgICAgICBjb25zdCBpID0gcGF0dGVybi5sYXN0SW5kZXggLSAxO1xuICAgICAgICBjb25zdCBjaCA9IHN0cltpXTtcbiAgICAgICAgZXNjYXBlZCArPSBzdHIuc3Vic3RyaW5nKGxhc3QsIGkpICsgKGNoID09PSAnJicgPyAnJmFtcDsnIDogKGNoID09PSAnXCInID8gJyZxdW90OycgOiAnJmx0OycpKTtcbiAgICAgICAgbGFzdCA9IGkgKyAxO1xuICAgIH1cbiAgICByZXR1cm4gZXNjYXBlZCArIHN0ci5zdWJzdHJpbmcobGFzdCk7XG59XG5mdW5jdGlvbiBlc2NhcGVfYXR0cmlidXRlX3ZhbHVlKHZhbHVlKSB7XG4gICAgLy8ga2VlcCBib29sZWFucywgbnVsbCwgYW5kIHVuZGVmaW5lZCBmb3IgdGhlIHNha2Ugb2YgYHNwcmVhZGBcbiAgICBjb25zdCBzaG91bGRfZXNjYXBlID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jyk7XG4gICAgcmV0dXJuIHNob3VsZF9lc2NhcGUgPyBlc2NhcGUodmFsdWUsIHRydWUpIDogdmFsdWU7XG59XG5mdW5jdGlvbiBlc2NhcGVfb2JqZWN0KG9iaikge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgICByZXN1bHRba2V5XSA9IGVzY2FwZV9hdHRyaWJ1dGVfdmFsdWUob2JqW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZWFjaChpdGVtcywgZm4pIHtcbiAgICBsZXQgc3RyID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBzdHIgKz0gZm4oaXRlbXNbaV0sIGkpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufVxuY29uc3QgbWlzc2luZ19jb21wb25lbnQgPSB7XG4gICAgJCRyZW5kZXI6ICgpID0+ICcnXG59O1xuZnVuY3Rpb24gdmFsaWRhdGVfY29tcG9uZW50KGNvbXBvbmVudCwgbmFtZSkge1xuICAgIGlmICghY29tcG9uZW50IHx8ICFjb21wb25lbnQuJCRyZW5kZXIpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09ICdzdmVsdGU6Y29tcG9uZW50JylcbiAgICAgICAgICAgIG5hbWUgKz0gJyB0aGlzPXsuLi59JztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGA8JHtuYW1lfT4gaXMgbm90IGEgdmFsaWQgU1NSIGNvbXBvbmVudC4gWW91IG1heSBuZWVkIHRvIHJldmlldyB5b3VyIGJ1aWxkIGNvbmZpZyB0byBlbnN1cmUgdGhhdCBkZXBlbmRlbmNpZXMgYXJlIGNvbXBpbGVkLCByYXRoZXIgdGhhbiBpbXBvcnRlZCBhcyBwcmUtY29tcGlsZWQgbW9kdWxlcy4gT3RoZXJ3aXNlIHlvdSBtYXkgbmVlZCB0byBmaXggYSA8JHtuYW1lfT4uYCk7XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5mdW5jdGlvbiBkZWJ1ZyhmaWxlLCBsaW5lLCBjb2x1bW4sIHZhbHVlcykge1xuICAgIGNvbnNvbGUubG9nKGB7QGRlYnVnfSAke2ZpbGUgPyBmaWxlICsgJyAnIDogJyd9KCR7bGluZX06JHtjb2x1bW59KWApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICByZXR1cm4gJyc7XG59XG5sZXQgb25fZGVzdHJveTtcbmZ1bmN0aW9uIGNyZWF0ZV9zc3JfY29tcG9uZW50KGZuKSB7XG4gICAgZnVuY3Rpb24gJCRyZW5kZXIocmVzdWx0LCBwcm9wcywgYmluZGluZ3MsIHNsb3RzLCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHBhcmVudF9jb21wb25lbnQgPSBjdXJyZW50X2NvbXBvbmVudDtcbiAgICAgICAgY29uc3QgJCQgPSB7XG4gICAgICAgICAgICBvbl9kZXN0cm95LFxuICAgICAgICAgICAgY29udGV4dDogbmV3IE1hcChjb250ZXh0IHx8IChwYXJlbnRfY29tcG9uZW50ID8gcGFyZW50X2NvbXBvbmVudC4kJC5jb250ZXh0IDogW10pKSxcbiAgICAgICAgICAgIC8vIHRoZXNlIHdpbGwgYmUgaW1tZWRpYXRlbHkgZGlzY2FyZGVkXG4gICAgICAgICAgICBvbl9tb3VudDogW10sXG4gICAgICAgICAgICBiZWZvcmVfdXBkYXRlOiBbXSxcbiAgICAgICAgICAgIGFmdGVyX3VwZGF0ZTogW10sXG4gICAgICAgICAgICBjYWxsYmFja3M6IGJsYW5rX29iamVjdCgpXG4gICAgICAgIH07XG4gICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudCh7ICQkIH0pO1xuICAgICAgICBjb25zdCBodG1sID0gZm4ocmVzdWx0LCBwcm9wcywgYmluZGluZ3MsIHNsb3RzKTtcbiAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHBhcmVudF9jb21wb25lbnQpO1xuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVuZGVyOiAocHJvcHMgPSB7fSwgeyAkJHNsb3RzID0ge30sIGNvbnRleHQgPSBuZXcgTWFwKCkgfSA9IHt9KSA9PiB7XG4gICAgICAgICAgICBvbl9kZXN0cm95ID0gW107XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB7IHRpdGxlOiAnJywgaGVhZDogJycsIGNzczogbmV3IFNldCgpIH07XG4gICAgICAgICAgICBjb25zdCBodG1sID0gJCRyZW5kZXIocmVzdWx0LCBwcm9wcywge30sICQkc2xvdHMsIGNvbnRleHQpO1xuICAgICAgICAgICAgcnVuX2FsbChvbl9kZXN0cm95KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaHRtbCxcbiAgICAgICAgICAgICAgICBjc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogQXJyYXkuZnJvbShyZXN1bHQuY3NzKS5tYXAoY3NzID0+IGNzcy5jb2RlKS5qb2luKCdcXG4nKSxcbiAgICAgICAgICAgICAgICAgICAgbWFwOiBudWxsIC8vIFRPRE9cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhlYWQ6IHJlc3VsdC50aXRsZSArIHJlc3VsdC5oZWFkXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAkJHJlbmRlclxuICAgIH07XG59XG5mdW5jdGlvbiBhZGRfYXR0cmlidXRlKG5hbWUsIHZhbHVlLCBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwgfHwgKGJvb2xlYW4gJiYgIXZhbHVlKSlcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIGNvbnN0IGFzc2lnbm1lbnQgPSAoYm9vbGVhbiAmJiB2YWx1ZSA9PT0gdHJ1ZSkgPyAnJyA6IGA9XCIke2VzY2FwZSh2YWx1ZSwgdHJ1ZSl9XCJgO1xuICAgIHJldHVybiBgICR7bmFtZX0ke2Fzc2lnbm1lbnR9YDtcbn1cbmZ1bmN0aW9uIGFkZF9jbGFzc2VzKGNsYXNzZXMpIHtcbiAgICByZXR1cm4gY2xhc3NlcyA/IGAgY2xhc3M9XCIke2NsYXNzZXN9XCJgIDogJyc7XG59XG5mdW5jdGlvbiBzdHlsZV9vYmplY3RfdG9fc3RyaW5nKHN0eWxlX29iamVjdCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhzdHlsZV9vYmplY3QpXG4gICAgICAgIC5maWx0ZXIoa2V5ID0+IHN0eWxlX29iamVjdFtrZXldKVxuICAgICAgICAubWFwKGtleSA9PiBgJHtrZXl9OiAke2VzY2FwZV9hdHRyaWJ1dGVfdmFsdWUoc3R5bGVfb2JqZWN0W2tleV0pfTtgKVxuICAgICAgICAuam9pbignICcpO1xufVxuZnVuY3Rpb24gYWRkX3N0eWxlcyhzdHlsZV9vYmplY3QpIHtcbiAgICBjb25zdCBzdHlsZXMgPSBzdHlsZV9vYmplY3RfdG9fc3RyaW5nKHN0eWxlX29iamVjdCk7XG4gICAgcmV0dXJuIHN0eWxlcyA/IGAgc3R5bGU9XCIke3N0eWxlc31cImAgOiAnJztcbn1cblxuZnVuY3Rpb24gYmluZChjb21wb25lbnQsIG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgaW5kZXggPSBjb21wb25lbnQuJCQucHJvcHNbbmFtZV07XG4gICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29tcG9uZW50LiQkLmJvdW5kW2luZGV4XSA9IGNhbGxiYWNrO1xuICAgICAgICBjYWxsYmFjayhjb21wb25lbnQuJCQuY3R4W2luZGV4XSk7XG4gICAgfVxufVxuZnVuY3Rpb24gY3JlYXRlX2NvbXBvbmVudChibG9jaykge1xuICAgIGJsb2NrICYmIGJsb2NrLmMoKTtcbn1cbmZ1bmN0aW9uIGNsYWltX2NvbXBvbmVudChibG9jaywgcGFyZW50X25vZGVzKSB7XG4gICAgYmxvY2sgJiYgYmxvY2subChwYXJlbnRfbm9kZXMpO1xufVxuZnVuY3Rpb24gbW91bnRfY29tcG9uZW50KGNvbXBvbmVudCwgdGFyZ2V0LCBhbmNob3IsIGN1c3RvbUVsZW1lbnQpIHtcbiAgICBjb25zdCB7IGZyYWdtZW50LCBhZnRlcl91cGRhdGUgfSA9IGNvbXBvbmVudC4kJDtcbiAgICBmcmFnbWVudCAmJiBmcmFnbWVudC5tKHRhcmdldCwgYW5jaG9yKTtcbiAgICBpZiAoIWN1c3RvbUVsZW1lbnQpIHtcbiAgICAgICAgLy8gb25Nb3VudCBoYXBwZW5zIGJlZm9yZSB0aGUgaW5pdGlhbCBhZnRlclVwZGF0ZVxuICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld19vbl9kZXN0cm95ID0gY29tcG9uZW50LiQkLm9uX21vdW50Lm1hcChydW4pLmZpbHRlcihpc19mdW5jdGlvbik7XG4gICAgICAgICAgICAvLyBpZiB0aGUgY29tcG9uZW50IHdhcyBkZXN0cm95ZWQgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgIC8vIGl0IHdpbGwgdXBkYXRlIHRoZSBgJCQub25fZGVzdHJveWAgcmVmZXJlbmNlIHRvIGBudWxsYC5cbiAgICAgICAgICAgIC8vIHRoZSBkZXN0cnVjdHVyZWQgb25fZGVzdHJveSBtYXkgc3RpbGwgcmVmZXJlbmNlIHRvIHRoZSBvbGQgYXJyYXlcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQuJCQub25fZGVzdHJveSkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC4kJC5vbl9kZXN0cm95LnB1c2goLi4ubmV3X29uX2Rlc3Ryb3kpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRWRnZSBjYXNlIC0gY29tcG9uZW50IHdhcyBkZXN0cm95ZWQgaW1tZWRpYXRlbHksXG4gICAgICAgICAgICAgICAgLy8gbW9zdCBsaWtlbHkgYXMgYSByZXN1bHQgb2YgYSBiaW5kaW5nIGluaXRpYWxpc2luZ1xuICAgICAgICAgICAgICAgIHJ1bl9hbGwobmV3X29uX2Rlc3Ryb3kpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29tcG9uZW50LiQkLm9uX21vdW50ID0gW107XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhZnRlcl91cGRhdGUuZm9yRWFjaChhZGRfcmVuZGVyX2NhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIGRlc3Ryb3lfY29tcG9uZW50KGNvbXBvbmVudCwgZGV0YWNoaW5nKSB7XG4gICAgY29uc3QgJCQgPSBjb21wb25lbnQuJCQ7XG4gICAgaWYgKCQkLmZyYWdtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGZsdXNoX3JlbmRlcl9jYWxsYmFja3MoJCQuYWZ0ZXJfdXBkYXRlKTtcbiAgICAgICAgcnVuX2FsbCgkJC5vbl9kZXN0cm95KTtcbiAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQuZChkZXRhY2hpbmcpO1xuICAgICAgICAvLyBUT0RPIG51bGwgb3V0IG90aGVyIHJlZnMsIGluY2x1ZGluZyBjb21wb25lbnQuJCQgKGJ1dCBuZWVkIHRvXG4gICAgICAgIC8vIHByZXNlcnZlIGZpbmFsIHN0YXRlPylcbiAgICAgICAgJCQub25fZGVzdHJveSA9ICQkLmZyYWdtZW50ID0gbnVsbDtcbiAgICAgICAgJCQuY3R4ID0gW107XG4gICAgfVxufVxuZnVuY3Rpb24gbWFrZV9kaXJ0eShjb21wb25lbnQsIGkpIHtcbiAgICBpZiAoY29tcG9uZW50LiQkLmRpcnR5WzBdID09PSAtMSkge1xuICAgICAgICBkaXJ0eV9jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgICAgc2NoZWR1bGVfdXBkYXRlKCk7XG4gICAgICAgIGNvbXBvbmVudC4kJC5kaXJ0eS5maWxsKDApO1xuICAgIH1cbiAgICBjb21wb25lbnQuJCQuZGlydHlbKGkgLyAzMSkgfCAwXSB8PSAoMSA8PCAoaSAlIDMxKSk7XG59XG5mdW5jdGlvbiBpbml0KGNvbXBvbmVudCwgb3B0aW9ucywgaW5zdGFuY2UsIGNyZWF0ZV9mcmFnbWVudCwgbm90X2VxdWFsLCBwcm9wcywgYXBwZW5kX3N0eWxlcywgZGlydHkgPSBbLTFdKSB7XG4gICAgY29uc3QgcGFyZW50X2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpO1xuICAgIGNvbnN0ICQkID0gY29tcG9uZW50LiQkID0ge1xuICAgICAgICBmcmFnbWVudDogbnVsbCxcbiAgICAgICAgY3R4OiBbXSxcbiAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIHVwZGF0ZTogbm9vcCxcbiAgICAgICAgbm90X2VxdWFsLFxuICAgICAgICBib3VuZDogYmxhbmtfb2JqZWN0KCksXG4gICAgICAgIC8vIGxpZmVjeWNsZVxuICAgICAgICBvbl9tb3VudDogW10sXG4gICAgICAgIG9uX2Rlc3Ryb3k6IFtdLFxuICAgICAgICBvbl9kaXNjb25uZWN0OiBbXSxcbiAgICAgICAgYmVmb3JlX3VwZGF0ZTogW10sXG4gICAgICAgIGFmdGVyX3VwZGF0ZTogW10sXG4gICAgICAgIGNvbnRleHQ6IG5ldyBNYXAob3B0aW9ucy5jb250ZXh0IHx8IChwYXJlbnRfY29tcG9uZW50ID8gcGFyZW50X2NvbXBvbmVudC4kJC5jb250ZXh0IDogW10pKSxcbiAgICAgICAgLy8gZXZlcnl0aGluZyBlbHNlXG4gICAgICAgIGNhbGxiYWNrczogYmxhbmtfb2JqZWN0KCksXG4gICAgICAgIGRpcnR5LFxuICAgICAgICBza2lwX2JvdW5kOiBmYWxzZSxcbiAgICAgICAgcm9vdDogb3B0aW9ucy50YXJnZXQgfHwgcGFyZW50X2NvbXBvbmVudC4kJC5yb290XG4gICAgfTtcbiAgICBhcHBlbmRfc3R5bGVzICYmIGFwcGVuZF9zdHlsZXMoJCQucm9vdCk7XG4gICAgbGV0IHJlYWR5ID0gZmFsc2U7XG4gICAgJCQuY3R4ID0gaW5zdGFuY2VcbiAgICAgICAgPyBpbnN0YW5jZShjb21wb25lbnQsIG9wdGlvbnMucHJvcHMgfHwge30sIChpLCByZXQsIC4uLnJlc3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcmVzdC5sZW5ndGggPyByZXN0WzBdIDogcmV0O1xuICAgICAgICAgICAgaWYgKCQkLmN0eCAmJiBub3RfZXF1YWwoJCQuY3R4W2ldLCAkJC5jdHhbaV0gPSB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoISQkLnNraXBfYm91bmQgJiYgJCQuYm91bmRbaV0pXG4gICAgICAgICAgICAgICAgICAgICQkLmJvdW5kW2ldKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVhZHkpXG4gICAgICAgICAgICAgICAgICAgIG1ha2VfZGlydHkoY29tcG9uZW50LCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0pXG4gICAgICAgIDogW107XG4gICAgJCQudXBkYXRlKCk7XG4gICAgcmVhZHkgPSB0cnVlO1xuICAgIHJ1bl9hbGwoJCQuYmVmb3JlX3VwZGF0ZSk7XG4gICAgLy8gYGZhbHNlYCBhcyBhIHNwZWNpYWwgY2FzZSBvZiBubyBET00gY29tcG9uZW50XG4gICAgJCQuZnJhZ21lbnQgPSBjcmVhdGVfZnJhZ21lbnQgPyBjcmVhdGVfZnJhZ21lbnQoJCQuY3R4KSA6IGZhbHNlO1xuICAgIGlmIChvcHRpb25zLnRhcmdldCkge1xuICAgICAgICBpZiAob3B0aW9ucy5oeWRyYXRlKSB7XG4gICAgICAgICAgICBzdGFydF9oeWRyYXRpbmcoKTtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gY2hpbGRyZW4ob3B0aW9ucy50YXJnZXQpO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50Lmwobm9kZXMpO1xuICAgICAgICAgICAgbm9kZXMuZm9yRWFjaChkZXRhY2gpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50LmMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5pbnRybylcbiAgICAgICAgICAgIHRyYW5zaXRpb25faW4oY29tcG9uZW50LiQkLmZyYWdtZW50KTtcbiAgICAgICAgbW91bnRfY29tcG9uZW50KGNvbXBvbmVudCwgb3B0aW9ucy50YXJnZXQsIG9wdGlvbnMuYW5jaG9yLCBvcHRpb25zLmN1c3RvbUVsZW1lbnQpO1xuICAgICAgICBlbmRfaHlkcmF0aW5nKCk7XG4gICAgICAgIGZsdXNoKCk7XG4gICAgfVxuICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChwYXJlbnRfY29tcG9uZW50KTtcbn1cbmxldCBTdmVsdGVFbGVtZW50O1xuaWYgKHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFN2ZWx0ZUVsZW1lbnQgPSBjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICBjb25zdCB7IG9uX21vdW50IH0gPSB0aGlzLiQkO1xuICAgICAgICAgICAgdGhpcy4kJC5vbl9kaXNjb25uZWN0ID0gb25fbW91bnQubWFwKHJ1bikuZmlsdGVyKGlzX2Z1bmN0aW9uKTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogaW1wcm92ZSB0eXBpbmdzXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLiQkLnNsb3R0ZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRvZG86IGltcHJvdmUgdHlwaW5nc1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy4kJC5zbG90dGVkW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhdHRyLCBfb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzW2F0dHJdID0gbmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICBydW5fYWxsKHRoaXMuJCQub25fZGlzY29ubmVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgJGRlc3Ryb3koKSB7XG4gICAgICAgICAgICBkZXN0cm95X2NvbXBvbmVudCh0aGlzLCAxKTtcbiAgICAgICAgICAgIHRoaXMuJGRlc3Ryb3kgPSBub29wO1xuICAgICAgICB9XG4gICAgICAgICRvbih0eXBlLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgLy8gVE9ETyBzaG91bGQgdGhpcyBkZWxlZ2F0ZSB0byBhZGRFdmVudExpc3RlbmVyP1xuICAgICAgICAgICAgaWYgKCFpc19mdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9vcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSB8fCAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gPSBbXSkpO1xuICAgICAgICAgICAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGNhbGxiYWNrcy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKVxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgJHNldCgkJHByb3BzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kJHNldCAmJiAhaXNfZW1wdHkoJCRwcm9wcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiQkLnNraXBfYm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJCRzZXQoJCRwcm9wcyk7XG4gICAgICAgICAgICAgICAgdGhpcy4kJC5za2lwX2JvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBTdmVsdGUgY29tcG9uZW50cy4gVXNlZCB3aGVuIGRldj1mYWxzZS5cbiAqL1xuY2xhc3MgU3ZlbHRlQ29tcG9uZW50IHtcbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgZGVzdHJveV9jb21wb25lbnQodGhpcywgMSk7XG4gICAgICAgIHRoaXMuJGRlc3Ryb3kgPSBub29wO1xuICAgIH1cbiAgICAkb24odHlwZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFpc19mdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgICAgICAgIHJldHVybiBub29wO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSB8fCAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gPSBbXSkpO1xuICAgICAgICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGNhbGxiYWNrcy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgICRzZXQoJCRwcm9wcykge1xuICAgICAgICBpZiAodGhpcy4kJHNldCAmJiAhaXNfZW1wdHkoJCRwcm9wcykpIHtcbiAgICAgICAgICAgIHRoaXMuJCQuc2tpcF9ib3VuZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLiQkc2V0KCQkcHJvcHMpO1xuICAgICAgICAgICAgdGhpcy4kJC5za2lwX2JvdW5kID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoX2Rldih0eXBlLCBkZXRhaWwpIHtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGN1c3RvbV9ldmVudCh0eXBlLCBPYmplY3QuYXNzaWduKHsgdmVyc2lvbjogJzMuNTkuMScgfSwgZGV0YWlsKSwgeyBidWJibGVzOiB0cnVlIH0pKTtcbn1cbmZ1bmN0aW9uIGFwcGVuZF9kZXYodGFyZ2V0LCBub2RlKSB7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01JbnNlcnQnLCB7IHRhcmdldCwgbm9kZSB9KTtcbiAgICBhcHBlbmQodGFyZ2V0LCBub2RlKTtcbn1cbmZ1bmN0aW9uIGFwcGVuZF9oeWRyYXRpb25fZGV2KHRhcmdldCwgbm9kZSkge1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NSW5zZXJ0JywgeyB0YXJnZXQsIG5vZGUgfSk7XG4gICAgYXBwZW5kX2h5ZHJhdGlvbih0YXJnZXQsIG5vZGUpO1xufVxuZnVuY3Rpb24gaW5zZXJ0X2Rldih0YXJnZXQsIG5vZGUsIGFuY2hvcikge1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NSW5zZXJ0JywgeyB0YXJnZXQsIG5vZGUsIGFuY2hvciB9KTtcbiAgICBpbnNlcnQodGFyZ2V0LCBub2RlLCBhbmNob3IpO1xufVxuZnVuY3Rpb24gaW5zZXJ0X2h5ZHJhdGlvbl9kZXYodGFyZ2V0LCBub2RlLCBhbmNob3IpIHtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTUluc2VydCcsIHsgdGFyZ2V0LCBub2RlLCBhbmNob3IgfSk7XG4gICAgaW5zZXJ0X2h5ZHJhdGlvbih0YXJnZXQsIG5vZGUsIGFuY2hvcik7XG59XG5mdW5jdGlvbiBkZXRhY2hfZGV2KG5vZGUpIHtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVJlbW92ZScsIHsgbm9kZSB9KTtcbiAgICBkZXRhY2gobm9kZSk7XG59XG5mdW5jdGlvbiBkZXRhY2hfYmV0d2Vlbl9kZXYoYmVmb3JlLCBhZnRlcikge1xuICAgIHdoaWxlIChiZWZvcmUubmV4dFNpYmxpbmcgJiYgYmVmb3JlLm5leHRTaWJsaW5nICE9PSBhZnRlcikge1xuICAgICAgICBkZXRhY2hfZGV2KGJlZm9yZS5uZXh0U2libGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGV0YWNoX2JlZm9yZV9kZXYoYWZ0ZXIpIHtcbiAgICB3aGlsZSAoYWZ0ZXIucHJldmlvdXNTaWJsaW5nKSB7XG4gICAgICAgIGRldGFjaF9kZXYoYWZ0ZXIucHJldmlvdXNTaWJsaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZXRhY2hfYWZ0ZXJfZGV2KGJlZm9yZSkge1xuICAgIHdoaWxlIChiZWZvcmUubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgZGV0YWNoX2RldihiZWZvcmUubmV4dFNpYmxpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGxpc3Rlbl9kZXYobm9kZSwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMsIGhhc19wcmV2ZW50X2RlZmF1bHQsIGhhc19zdG9wX3Byb3BhZ2F0aW9uLCBoYXNfc3RvcF9pbW1lZGlhdGVfcHJvcGFnYXRpb24pIHtcbiAgICBjb25zdCBtb2RpZmllcnMgPSBvcHRpb25zID09PSB0cnVlID8gWydjYXB0dXJlJ10gOiBvcHRpb25zID8gQXJyYXkuZnJvbShPYmplY3Qua2V5cyhvcHRpb25zKSkgOiBbXTtcbiAgICBpZiAoaGFzX3ByZXZlbnRfZGVmYXVsdClcbiAgICAgICAgbW9kaWZpZXJzLnB1c2goJ3ByZXZlbnREZWZhdWx0Jyk7XG4gICAgaWYgKGhhc19zdG9wX3Byb3BhZ2F0aW9uKVxuICAgICAgICBtb2RpZmllcnMucHVzaCgnc3RvcFByb3BhZ2F0aW9uJyk7XG4gICAgaWYgKGhhc19zdG9wX2ltbWVkaWF0ZV9wcm9wYWdhdGlvbilcbiAgICAgICAgbW9kaWZpZXJzLnB1c2goJ3N0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbicpO1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NQWRkRXZlbnRMaXN0ZW5lcicsIHsgbm9kZSwgZXZlbnQsIGhhbmRsZXIsIG1vZGlmaWVycyB9KTtcbiAgICBjb25zdCBkaXNwb3NlID0gbGlzdGVuKG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVJlbW92ZUV2ZW50TGlzdGVuZXInLCB7IG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBtb2RpZmllcnMgfSk7XG4gICAgICAgIGRpc3Bvc2UoKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gYXR0cl9kZXYobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIGF0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgaWYgKHZhbHVlID09IG51bGwpXG4gICAgICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NUmVtb3ZlQXR0cmlidXRlJywgeyBub2RlLCBhdHRyaWJ1dGUgfSk7XG4gICAgZWxzZVxuICAgICAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVNldEF0dHJpYnV0ZScsIHsgbm9kZSwgYXR0cmlidXRlLCB2YWx1ZSB9KTtcbn1cbmZ1bmN0aW9uIHByb3BfZGV2KG5vZGUsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIG5vZGVbcHJvcGVydHldID0gdmFsdWU7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01TZXRQcm9wZXJ0eScsIHsgbm9kZSwgcHJvcGVydHksIHZhbHVlIH0pO1xufVxuZnVuY3Rpb24gZGF0YXNldF9kZXYobm9kZSwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgbm9kZS5kYXRhc2V0W3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NU2V0RGF0YXNldCcsIHsgbm9kZSwgcHJvcGVydHksIHZhbHVlIH0pO1xufVxuZnVuY3Rpb24gc2V0X2RhdGFfZGV2KHRleHQsIGRhdGEpIHtcbiAgICBkYXRhID0gJycgKyBkYXRhO1xuICAgIGlmICh0ZXh0LmRhdGEgPT09IGRhdGEpXG4gICAgICAgIHJldHVybjtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVNldERhdGEnLCB7IG5vZGU6IHRleHQsIGRhdGEgfSk7XG4gICAgdGV4dC5kYXRhID0gZGF0YTtcbn1cbmZ1bmN0aW9uIHNldF9kYXRhX2NvbnRlbnRlZGl0YWJsZV9kZXYodGV4dCwgZGF0YSkge1xuICAgIGRhdGEgPSAnJyArIGRhdGE7XG4gICAgaWYgKHRleHQud2hvbGVUZXh0ID09PSBkYXRhKVxuICAgICAgICByZXR1cm47XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01TZXREYXRhJywgeyBub2RlOiB0ZXh0LCBkYXRhIH0pO1xuICAgIHRleHQuZGF0YSA9IGRhdGE7XG59XG5mdW5jdGlvbiBzZXRfZGF0YV9tYXliZV9jb250ZW50ZWRpdGFibGVfZGV2KHRleHQsIGRhdGEsIGF0dHJfdmFsdWUpIHtcbiAgICBpZiAofmNvbnRlbnRlZGl0YWJsZV90cnV0aHlfdmFsdWVzLmluZGV4T2YoYXR0cl92YWx1ZSkpIHtcbiAgICAgICAgc2V0X2RhdGFfY29udGVudGVkaXRhYmxlX2Rldih0ZXh0LCBkYXRhKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHNldF9kYXRhX2Rldih0ZXh0LCBkYXRhKTtcbiAgICB9XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV9lYWNoX2FyZ3VtZW50KGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnc3RyaW5nJyAmJiAhKGFyZyAmJiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiBhcmcpKSB7XG4gICAgICAgIGxldCBtc2cgPSAneyNlYWNofSBvbmx5IGl0ZXJhdGVzIG92ZXIgYXJyYXktbGlrZSBvYmplY3RzLic7XG4gICAgICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIGFyZyAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gYXJnKSB7XG4gICAgICAgICAgICBtc2cgKz0gJyBZb3UgY2FuIHVzZSBhIHNwcmVhZCB0byBjb252ZXJ0IHRoaXMgaXRlcmFibGUgaW50byBhbiBhcnJheS4nO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHZhbGlkYXRlX3Nsb3RzKG5hbWUsIHNsb3QsIGtleXMpIHtcbiAgICBmb3IgKGNvbnN0IHNsb3Rfa2V5IG9mIE9iamVjdC5rZXlzKHNsb3QpKSB7XG4gICAgICAgIGlmICghfmtleXMuaW5kZXhPZihzbG90X2tleSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgPCR7bmFtZX0+IHJlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgc2xvdCBcIiR7c2xvdF9rZXl9XCIuYCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV9keW5hbWljX2VsZW1lbnQodGFnKSB7XG4gICAgY29uc3QgaXNfc3RyaW5nID0gdHlwZW9mIHRhZyA9PT0gJ3N0cmluZyc7XG4gICAgaWYgKHRhZyAmJiAhaXNfc3RyaW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignPHN2ZWx0ZTplbGVtZW50PiBleHBlY3RzIFwidGhpc1wiIGF0dHJpYnV0ZSB0byBiZSBhIHN0cmluZy4nKTtcbiAgICB9XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV92b2lkX2R5bmFtaWNfZWxlbWVudCh0YWcpIHtcbiAgICBpZiAodGFnICYmIGlzX3ZvaWQodGFnKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oYDxzdmVsdGU6ZWxlbWVudCB0aGlzPVwiJHt0YWd9XCI+IGlzIHNlbGYtY2xvc2luZyBhbmQgY2Fubm90IGhhdmUgY29udGVudC5gKTtcbiAgICB9XG59XG5mdW5jdGlvbiBjb25zdHJ1Y3Rfc3ZlbHRlX2NvbXBvbmVudF9kZXYoY29tcG9uZW50LCBwcm9wcykge1xuICAgIGNvbnN0IGVycm9yX21lc3NhZ2UgPSAndGhpcz17Li4ufSBvZiA8c3ZlbHRlOmNvbXBvbmVudD4gc2hvdWxkIHNwZWNpZnkgYSBTdmVsdGUgY29tcG9uZW50Lic7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgY29tcG9uZW50KHByb3BzKTtcbiAgICAgICAgaWYgKCFpbnN0YW5jZS4kJCB8fCAhaW5zdGFuY2UuJHNldCB8fCAhaW5zdGFuY2UuJG9uIHx8ICFpbnN0YW5jZS4kZGVzdHJveSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yX21lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IGVycjtcbiAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlID09PSAnc3RyaW5nJyAmJiBtZXNzYWdlLmluZGV4T2YoJ2lzIG5vdCBhIGNvbnN0cnVjdG9yJykgIT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JfbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIFN2ZWx0ZSBjb21wb25lbnRzIHdpdGggc29tZSBtaW5vciBkZXYtZW5oYW5jZW1lbnRzLiBVc2VkIHdoZW4gZGV2PXRydWUuXG4gKi9cbmNsYXNzIFN2ZWx0ZUNvbXBvbmVudERldiBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBpZiAoIW9wdGlvbnMgfHwgKCFvcHRpb25zLnRhcmdldCAmJiAhb3B0aW9ucy4kJGlubGluZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIid0YXJnZXQnIGlzIGEgcmVxdWlyZWQgb3B0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgICRkZXN0cm95KCkge1xuICAgICAgICBzdXBlci4kZGVzdHJveSgpO1xuICAgICAgICB0aGlzLiRkZXN0cm95ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdDb21wb25lbnQgd2FzIGFscmVhZHkgZGVzdHJveWVkJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgICB9O1xuICAgIH1cbiAgICAkY2FwdHVyZV9zdGF0ZSgpIHsgfVxuICAgICRpbmplY3Rfc3RhdGUoKSB7IH1cbn1cbi8qKlxuICogQmFzZSBjbGFzcyB0byBjcmVhdGUgc3Ryb25nbHkgdHlwZWQgU3ZlbHRlIGNvbXBvbmVudHMuXG4gKiBUaGlzIG9ubHkgZXhpc3RzIGZvciB0eXBpbmcgcHVycG9zZXMgYW5kIHNob3VsZCBiZSB1c2VkIGluIGAuZC50c2AgZmlsZXMuXG4gKlxuICogIyMjIEV4YW1wbGU6XG4gKlxuICogWW91IGhhdmUgY29tcG9uZW50IGxpYnJhcnkgb24gbnBtIGNhbGxlZCBgY29tcG9uZW50LWxpYnJhcnlgLCBmcm9tIHdoaWNoXG4gKiB5b3UgZXhwb3J0IGEgY29tcG9uZW50IGNhbGxlZCBgTXlDb21wb25lbnRgLiBGb3IgU3ZlbHRlK1R5cGVTY3JpcHQgdXNlcnMsXG4gKiB5b3Ugd2FudCB0byBwcm92aWRlIHR5cGluZ3MuIFRoZXJlZm9yZSB5b3UgY3JlYXRlIGEgYGluZGV4LmQudHNgOlxuICogYGBgdHNcbiAqIGltcG9ydCB7IFN2ZWx0ZUNvbXBvbmVudFR5cGVkIH0gZnJvbSBcInN2ZWx0ZVwiO1xuICogZXhwb3J0IGNsYXNzIE15Q29tcG9uZW50IGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50VHlwZWQ8e2Zvbzogc3RyaW5nfT4ge31cbiAqIGBgYFxuICogVHlwaW5nIHRoaXMgbWFrZXMgaXQgcG9zc2libGUgZm9yIElERXMgbGlrZSBWUyBDb2RlIHdpdGggdGhlIFN2ZWx0ZSBleHRlbnNpb25cbiAqIHRvIHByb3ZpZGUgaW50ZWxsaXNlbnNlIGFuZCB0byB1c2UgdGhlIGNvbXBvbmVudCBsaWtlIHRoaXMgaW4gYSBTdmVsdGUgZmlsZVxuICogd2l0aCBUeXBlU2NyaXB0OlxuICogYGBgc3ZlbHRlXG4gKiA8c2NyaXB0IGxhbmc9XCJ0c1wiPlxuICogXHRpbXBvcnQgeyBNeUNvbXBvbmVudCB9IGZyb20gXCJjb21wb25lbnQtbGlicmFyeVwiO1xuICogPC9zY3JpcHQ+XG4gKiA8TXlDb21wb25lbnQgZm9vPXsnYmFyJ30gLz5cbiAqIGBgYFxuICpcbiAqICMjIyMgV2h5IG5vdCBtYWtlIHRoaXMgcGFydCBvZiBgU3ZlbHRlQ29tcG9uZW50KERldilgP1xuICogQmVjYXVzZVxuICogYGBgdHNcbiAqIGNsYXNzIEFTdWJjbGFzc09mU3ZlbHRlQ29tcG9uZW50IGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50PHtmb286IHN0cmluZ30+IHt9XG4gKiBjb25zdCBjb21wb25lbnQ6IHR5cGVvZiBTdmVsdGVDb21wb25lbnQgPSBBU3ViY2xhc3NPZlN2ZWx0ZUNvbXBvbmVudDtcbiAqIGBgYFxuICogd2lsbCB0aHJvdyBhIHR5cGUgZXJyb3IsIHNvIHdlIG5lZWQgdG8gc2VwYXJhdGUgdGhlIG1vcmUgc3RyaWN0bHkgdHlwZWQgY2xhc3MuXG4gKi9cbmNsYXNzIFN2ZWx0ZUNvbXBvbmVudFR5cGVkIGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50RGV2IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGxvb3BfZ3VhcmQodGltZW91dCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHN0YXJ0ID4gdGltZW91dCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmZpbml0ZSBsb29wIGRldGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgeyBIdG1sVGFnLCBIdG1sVGFnSHlkcmF0aW9uLCBSZXNpemVPYnNlcnZlclNpbmdsZXRvbiwgU3ZlbHRlQ29tcG9uZW50LCBTdmVsdGVDb21wb25lbnREZXYsIFN2ZWx0ZUNvbXBvbmVudFR5cGVkLCBTdmVsdGVFbGVtZW50LCBhY3Rpb25fZGVzdHJveWVyLCBhZGRfYXR0cmlidXRlLCBhZGRfY2xhc3NlcywgYWRkX2ZsdXNoX2NhbGxiYWNrLCBhZGRfaWZyYW1lX3Jlc2l6ZV9saXN0ZW5lciwgYWRkX2xvY2F0aW9uLCBhZGRfcmVuZGVyX2NhbGxiYWNrLCBhZGRfc3R5bGVzLCBhZGRfdHJhbnNmb3JtLCBhZnRlclVwZGF0ZSwgYXBwZW5kLCBhcHBlbmRfZGV2LCBhcHBlbmRfZW1wdHlfc3R5bGVzaGVldCwgYXBwZW5kX2h5ZHJhdGlvbiwgYXBwZW5kX2h5ZHJhdGlvbl9kZXYsIGFwcGVuZF9zdHlsZXMsIGFzc2lnbiwgYXR0ciwgYXR0cl9kZXYsIGF0dHJpYnV0ZV90b19vYmplY3QsIGJlZm9yZVVwZGF0ZSwgYmluZCwgYmluZGluZ19jYWxsYmFja3MsIGJsYW5rX29iamVjdCwgYnViYmxlLCBjaGVja19vdXRyb3MsIGNoaWxkcmVuLCBjbGFpbV9jb21tZW50LCBjbGFpbV9jb21wb25lbnQsIGNsYWltX2VsZW1lbnQsIGNsYWltX2h0bWxfdGFnLCBjbGFpbV9zcGFjZSwgY2xhaW1fc3ZnX2VsZW1lbnQsIGNsYWltX3RleHQsIGNsZWFyX2xvb3BzLCBjb21tZW50LCBjb21wb25lbnRfc3Vic2NyaWJlLCBjb21wdXRlX3Jlc3RfcHJvcHMsIGNvbXB1dGVfc2xvdHMsIGNvbnN0cnVjdF9zdmVsdGVfY29tcG9uZW50LCBjb25zdHJ1Y3Rfc3ZlbHRlX2NvbXBvbmVudF9kZXYsIGNvbnRlbnRlZGl0YWJsZV90cnV0aHlfdmFsdWVzLCBjcmVhdGVFdmVudERpc3BhdGNoZXIsIGNyZWF0ZV9hbmltYXRpb24sIGNyZWF0ZV9iaWRpcmVjdGlvbmFsX3RyYW5zaXRpb24sIGNyZWF0ZV9jb21wb25lbnQsIGNyZWF0ZV9pbl90cmFuc2l0aW9uLCBjcmVhdGVfb3V0X3RyYW5zaXRpb24sIGNyZWF0ZV9zbG90LCBjcmVhdGVfc3NyX2NvbXBvbmVudCwgY3VycmVudF9jb21wb25lbnQsIGN1c3RvbV9ldmVudCwgZGF0YXNldF9kZXYsIGRlYnVnLCBkZXN0cm95X2Jsb2NrLCBkZXN0cm95X2NvbXBvbmVudCwgZGVzdHJveV9lYWNoLCBkZXRhY2gsIGRldGFjaF9hZnRlcl9kZXYsIGRldGFjaF9iZWZvcmVfZGV2LCBkZXRhY2hfYmV0d2Vlbl9kZXYsIGRldGFjaF9kZXYsIGRpcnR5X2NvbXBvbmVudHMsIGRpc3BhdGNoX2RldiwgZWFjaCwgZWxlbWVudCwgZWxlbWVudF9pcywgZW1wdHksIGVuZF9oeWRyYXRpbmcsIGVzY2FwZSwgZXNjYXBlX2F0dHJpYnV0ZV92YWx1ZSwgZXNjYXBlX29iamVjdCwgZXhjbHVkZV9pbnRlcm5hbF9wcm9wcywgZml4X2FuZF9kZXN0cm95X2Jsb2NrLCBmaXhfYW5kX291dHJvX2FuZF9kZXN0cm95X2Jsb2NrLCBmaXhfcG9zaXRpb24sIGZsdXNoLCBmbHVzaF9yZW5kZXJfY2FsbGJhY2tzLCBnZXRBbGxDb250ZXh0cywgZ2V0Q29udGV4dCwgZ2V0X2FsbF9kaXJ0eV9mcm9tX3Njb3BlLCBnZXRfYmluZGluZ19ncm91cF92YWx1ZSwgZ2V0X2N1cnJlbnRfY29tcG9uZW50LCBnZXRfY3VzdG9tX2VsZW1lbnRzX3Nsb3RzLCBnZXRfcm9vdF9mb3Jfc3R5bGUsIGdldF9zbG90X2NoYW5nZXMsIGdldF9zcHJlYWRfb2JqZWN0LCBnZXRfc3ByZWFkX3VwZGF0ZSwgZ2V0X3N0b3JlX3ZhbHVlLCBnbG9iYWxzLCBncm91cF9vdXRyb3MsIGhhbmRsZV9wcm9taXNlLCBoYXNDb250ZXh0LCBoYXNfcHJvcCwgaGVhZF9zZWxlY3RvciwgaWRlbnRpdHksIGluaXQsIGluaXRfYmluZGluZ19ncm91cCwgaW5pdF9iaW5kaW5nX2dyb3VwX2R5bmFtaWMsIGluc2VydCwgaW5zZXJ0X2RldiwgaW5zZXJ0X2h5ZHJhdGlvbiwgaW5zZXJ0X2h5ZHJhdGlvbl9kZXYsIGludHJvcywgaW52YWxpZF9hdHRyaWJ1dGVfbmFtZV9jaGFyYWN0ZXIsIGlzX2NsaWVudCwgaXNfY3Jvc3NvcmlnaW4sIGlzX2VtcHR5LCBpc19mdW5jdGlvbiwgaXNfcHJvbWlzZSwgaXNfdm9pZCwgbGlzdGVuLCBsaXN0ZW5fZGV2LCBsb29wLCBsb29wX2d1YXJkLCBtZXJnZV9zc3Jfc3R5bGVzLCBtaXNzaW5nX2NvbXBvbmVudCwgbW91bnRfY29tcG9uZW50LCBub29wLCBub3RfZXF1YWwsIG5vdywgbnVsbF90b19lbXB0eSwgb2JqZWN0X3dpdGhvdXRfcHJvcGVydGllcywgb25EZXN0cm95LCBvbk1vdW50LCBvbmNlLCBvdXRyb19hbmRfZGVzdHJveV9ibG9jaywgcHJldmVudF9kZWZhdWx0LCBwcm9wX2RldiwgcXVlcnlfc2VsZWN0b3JfYWxsLCByYWYsIHJlc2l6ZV9vYnNlcnZlcl9ib3JkZXJfYm94LCByZXNpemVfb2JzZXJ2ZXJfY29udGVudF9ib3gsIHJlc2l6ZV9vYnNlcnZlcl9kZXZpY2VfcGl4ZWxfY29udGVudF9ib3gsIHJ1biwgcnVuX2FsbCwgc2FmZV9ub3RfZXF1YWwsIHNjaGVkdWxlX3VwZGF0ZSwgc2VsZWN0X211bHRpcGxlX3ZhbHVlLCBzZWxlY3Rfb3B0aW9uLCBzZWxlY3Rfb3B0aW9ucywgc2VsZWN0X3ZhbHVlLCBzZWxmLCBzZXRDb250ZXh0LCBzZXRfYXR0cmlidXRlcywgc2V0X2N1cnJlbnRfY29tcG9uZW50LCBzZXRfY3VzdG9tX2VsZW1lbnRfZGF0YSwgc2V0X2N1c3RvbV9lbGVtZW50X2RhdGFfbWFwLCBzZXRfZGF0YSwgc2V0X2RhdGFfY29udGVudGVkaXRhYmxlLCBzZXRfZGF0YV9jb250ZW50ZWRpdGFibGVfZGV2LCBzZXRfZGF0YV9kZXYsIHNldF9kYXRhX21heWJlX2NvbnRlbnRlZGl0YWJsZSwgc2V0X2RhdGFfbWF5YmVfY29udGVudGVkaXRhYmxlX2Rldiwgc2V0X2R5bmFtaWNfZWxlbWVudF9kYXRhLCBzZXRfaW5wdXRfdHlwZSwgc2V0X2lucHV0X3ZhbHVlLCBzZXRfbm93LCBzZXRfcmFmLCBzZXRfc3RvcmVfdmFsdWUsIHNldF9zdHlsZSwgc2V0X3N2Z19hdHRyaWJ1dGVzLCBzcGFjZSwgc3BsaXRfY3NzX3VuaXQsIHNwcmVhZCwgc3JjX3VybF9lcXVhbCwgc3RhcnRfaHlkcmF0aW5nLCBzdG9wX2ltbWVkaWF0ZV9wcm9wYWdhdGlvbiwgc3RvcF9wcm9wYWdhdGlvbiwgc3Vic2NyaWJlLCBzdmdfZWxlbWVudCwgdGV4dCwgdGljaywgdGltZV9yYW5nZXNfdG9fYXJyYXksIHRvX251bWJlciwgdG9nZ2xlX2NsYXNzLCB0cmFuc2l0aW9uX2luLCB0cmFuc2l0aW9uX291dCwgdHJ1c3RlZCwgdXBkYXRlX2F3YWl0X2Jsb2NrX2JyYW5jaCwgdXBkYXRlX2tleWVkX2VhY2gsIHVwZGF0ZV9zbG90LCB1cGRhdGVfc2xvdF9iYXNlLCB2YWxpZGF0ZV9jb21wb25lbnQsIHZhbGlkYXRlX2R5bmFtaWNfZWxlbWVudCwgdmFsaWRhdGVfZWFjaF9hcmd1bWVudCwgdmFsaWRhdGVfZWFjaF9rZXlzLCB2YWxpZGF0ZV9zbG90cywgdmFsaWRhdGVfc3RvcmUsIHZhbGlkYXRlX3ZvaWRfZHluYW1pY19lbGVtZW50LCB4bGlua19hdHRyIH07XG4iLCAiaW1wb3J0IHsgbm9vcCwgc2FmZV9ub3RfZXF1YWwsIHN1YnNjcmliZSwgcnVuX2FsbCwgaXNfZnVuY3Rpb24gfSBmcm9tICcuLi9pbnRlcm5hbC9pbmRleC5tanMnO1xuZXhwb3J0IHsgZ2V0X3N0b3JlX3ZhbHVlIGFzIGdldCB9IGZyb20gJy4uL2ludGVybmFsL2luZGV4Lm1qcyc7XG5cbmNvbnN0IHN1YnNjcmliZXJfcXVldWUgPSBbXTtcbi8qKlxuICogQ3JlYXRlcyBhIGBSZWFkYWJsZWAgc3RvcmUgdGhhdCBhbGxvd3MgcmVhZGluZyBieSBzdWJzY3JpcHRpb24uXG4gKiBAcGFyYW0gdmFsdWUgaW5pdGlhbCB2YWx1ZVxuICogQHBhcmFtIHtTdGFydFN0b3BOb3RpZmllcn0gW3N0YXJ0XVxuICovXG5mdW5jdGlvbiByZWFkYWJsZSh2YWx1ZSwgc3RhcnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdWJzY3JpYmU6IHdyaXRhYmxlKHZhbHVlLCBzdGFydCkuc3Vic2NyaWJlXG4gICAgfTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgYFdyaXRhYmxlYCBzdG9yZSB0aGF0IGFsbG93cyBib3RoIHVwZGF0aW5nIGFuZCByZWFkaW5nIGJ5IHN1YnNjcmlwdGlvbi5cbiAqIEBwYXJhbSB7Kj19dmFsdWUgaW5pdGlhbCB2YWx1ZVxuICogQHBhcmFtIHtTdGFydFN0b3BOb3RpZmllcj19IHN0YXJ0XG4gKi9cbmZ1bmN0aW9uIHdyaXRhYmxlKHZhbHVlLCBzdGFydCA9IG5vb3ApIHtcbiAgICBsZXQgc3RvcDtcbiAgICBjb25zdCBzdWJzY3JpYmVycyA9IG5ldyBTZXQoKTtcbiAgICBmdW5jdGlvbiBzZXQobmV3X3ZhbHVlKSB7XG4gICAgICAgIGlmIChzYWZlX25vdF9lcXVhbCh2YWx1ZSwgbmV3X3ZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSBuZXdfdmFsdWU7XG4gICAgICAgICAgICBpZiAoc3RvcCkgeyAvLyBzdG9yZSBpcyByZWFkeVxuICAgICAgICAgICAgICAgIGNvbnN0IHJ1bl9xdWV1ZSA9ICFzdWJzY3JpYmVyX3F1ZXVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHN1YnNjcmliZXIgb2Ygc3Vic2NyaWJlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlclsxXSgpO1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyX3F1ZXVlLnB1c2goc3Vic2NyaWJlciwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocnVuX3F1ZXVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Vic2NyaWJlcl9xdWV1ZS5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlcl9xdWV1ZVtpXVswXShzdWJzY3JpYmVyX3F1ZXVlW2kgKyAxXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlcl9xdWV1ZS5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGUoZm4pIHtcbiAgICAgICAgc2V0KGZuKHZhbHVlKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN1YnNjcmliZShydW4sIGludmFsaWRhdGUgPSBub29wKSB7XG4gICAgICAgIGNvbnN0IHN1YnNjcmliZXIgPSBbcnVuLCBpbnZhbGlkYXRlXTtcbiAgICAgICAgc3Vic2NyaWJlcnMuYWRkKHN1YnNjcmliZXIpO1xuICAgICAgICBpZiAoc3Vic2NyaWJlcnMuc2l6ZSA9PT0gMSkge1xuICAgICAgICAgICAgc3RvcCA9IHN0YXJ0KHNldCkgfHwgbm9vcDtcbiAgICAgICAgfVxuICAgICAgICBydW4odmFsdWUpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgc3Vic2NyaWJlcnMuZGVsZXRlKHN1YnNjcmliZXIpO1xuICAgICAgICAgICAgaWYgKHN1YnNjcmliZXJzLnNpemUgPT09IDAgJiYgc3RvcCkge1xuICAgICAgICAgICAgICAgIHN0b3AoKTtcbiAgICAgICAgICAgICAgICBzdG9wID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgc2V0LCB1cGRhdGUsIHN1YnNjcmliZSB9O1xufVxuZnVuY3Rpb24gZGVyaXZlZChzdG9yZXMsIGZuLCBpbml0aWFsX3ZhbHVlKSB7XG4gICAgY29uc3Qgc2luZ2xlID0gIUFycmF5LmlzQXJyYXkoc3RvcmVzKTtcbiAgICBjb25zdCBzdG9yZXNfYXJyYXkgPSBzaW5nbGVcbiAgICAgICAgPyBbc3RvcmVzXVxuICAgICAgICA6IHN0b3JlcztcbiAgICBjb25zdCBhdXRvID0gZm4ubGVuZ3RoIDwgMjtcbiAgICByZXR1cm4gcmVhZGFibGUoaW5pdGlhbF92YWx1ZSwgKHNldCkgPT4ge1xuICAgICAgICBsZXQgc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBbXTtcbiAgICAgICAgbGV0IHBlbmRpbmcgPSAwO1xuICAgICAgICBsZXQgY2xlYW51cCA9IG5vb3A7XG4gICAgICAgIGNvbnN0IHN5bmMgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocGVuZGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZuKHNpbmdsZSA/IHZhbHVlc1swXSA6IHZhbHVlcywgc2V0KTtcbiAgICAgICAgICAgIGlmIChhdXRvKSB7XG4gICAgICAgICAgICAgICAgc2V0KHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGVhbnVwID0gaXNfZnVuY3Rpb24ocmVzdWx0KSA/IHJlc3VsdCA6IG5vb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHVuc3Vic2NyaWJlcnMgPSBzdG9yZXNfYXJyYXkubWFwKChzdG9yZSwgaSkgPT4gc3Vic2NyaWJlKHN0b3JlLCAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZhbHVlc1tpXSA9IHZhbHVlO1xuICAgICAgICAgICAgcGVuZGluZyAmPSB+KDEgPDwgaSk7XG4gICAgICAgICAgICBpZiAoc3RhcnRlZCkge1xuICAgICAgICAgICAgICAgIHN5bmMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgcGVuZGluZyB8PSAoMSA8PCBpKTtcbiAgICAgICAgfSkpO1xuICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgc3luYygpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgICAgIHJ1bl9hbGwodW5zdWJzY3JpYmVycyk7XG4gICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRvIHNldCB0aGlzIHRvIGZhbHNlIGJlY2F1c2UgY2FsbGJhY2tzIGNhbiBzdGlsbCBoYXBwZW4gZGVzcGl0ZSBoYXZpbmcgdW5zdWJzY3JpYmVkOlxuICAgICAgICAgICAgLy8gQ2FsbGJhY2tzIG1pZ2h0IGFscmVhZHkgYmUgcGxhY2VkIGluIHRoZSBxdWV1ZSB3aGljaCBkb2Vzbid0IGtub3cgaXQgc2hvdWxkIG5vIGxvbmdlclxuICAgICAgICAgICAgLy8gaW52b2tlIHRoaXMgZGVyaXZlZCBzdG9yZS5cbiAgICAgICAgICAgIHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbi8qKlxuICogVGFrZXMgYSBzdG9yZSBhbmQgcmV0dXJucyBhIG5ldyBvbmUgZGVyaXZlZCBmcm9tIHRoZSBvbGQgb25lIHRoYXQgaXMgcmVhZGFibGUuXG4gKlxuICogQHBhcmFtIHN0b3JlIC0gc3RvcmUgdG8gbWFrZSByZWFkb25seVxuICovXG5mdW5jdGlvbiByZWFkb25seShzdG9yZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHN1YnNjcmliZTogc3RvcmUuc3Vic2NyaWJlLmJpbmQoc3RvcmUpXG4gICAgfTtcbn1cblxuZXhwb3J0IHsgZGVyaXZlZCwgcmVhZGFibGUsIHJlYWRvbmx5LCB3cml0YWJsZSB9O1xuIiwgIjxzY3JpcHQ+XG5leHBvcnQgbGV0IHNyYztcbmV4cG9ydCBsZXQgc2l6ZSA9IFwiMWVtXCI7XG5leHBvcnQgbGV0IGNvbG9yID0gdW5kZWZpbmVkO1xuZXhwb3J0IGxldCB0aXRsZSA9IHVuZGVmaW5lZDtcbmV4cG9ydCBsZXQgY2xhc3NOYW1lID0gXCJcIjtcblxubGV0IGlubmVySHRtbDtcbmxldCBhdHRyO1xuJDoge1xuICBhdHRyID0ge307XG4gIGlmIChjb2xvcikge1xuICAgIGlmIChzcmMuYS5zdHJva2UgIT09IFwibm9uZVwiKSB7XG4gICAgICBhdHRyLnN0cm9rZSA9IGNvbG9yO1xuICAgIH1cbiAgICBpZiAoc3JjLmEuZmlsbCAhPT0gXCJub25lXCIpIHtcbiAgICAgIGF0dHIuZmlsbCA9IGNvbG9yO1xuICAgIH1cbiAgfVxufVxuXG4kOiB7XG4gIGlubmVySHRtbCA9ICh0aXRsZSA/IGA8dGl0bGU+JHt0aXRsZX08L3RpdGxlPmAgOiBcIlwiKSArIHNyYy5jO1xufVxuPC9zY3JpcHQ+XG5cbjxzdmdcbndpZHRoPXtzaXplfVxuaGVpZ2h0PXtzaXplfVxuc3Ryb2tlLXdpZHRoPVwiMFwiXG5jbGFzcz17Y2xhc3NOYW1lfVxuey4uLnNyYy5hfVxuey4uLmF0dHJ9XG54bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG57QGh0bWwgaW5uZXJIdG1sfVxuPC9zdmc+XG4iLCAiLy8gUmlFZGl0b3JRdWVzdGlvbk1hcmtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgYToge1xuICAgIHZpZXdCb3g6ICcwIDAgMjQgMjQnXG4gIH0sXG4gIGM6ICc8Zz48cGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNMCAwSDI0VjI0SDB6XCI+PC9wYXRoPlxcbjxwYXRoIGQ9XCJNMTIgMTljLjgyOCAwIDEuNS42NzIgMS41IDEuNVMxMi44MjggMjIgMTIgMjJzLTEuNS0uNjcyLTEuNS0xLjUuNjcyLTEuNSAxLjUtMS41em0wLTE3YzMuMzE0IDAgNiAyLjY4NiA2IDYgMCAyLjE2NS0uNzUzIDMuMjktMi42NzQgNC45MjNDMTMuMzk5IDE0LjU2IDEzIDE1LjI5NyAxMyAxN2gtMmMwLTIuNDc0Ljc4Ny0zLjY5NSAzLjAzMS01LjYwMUMxNS41NDggMTAuMTEgMTYgOS40MzQgMTYgOGMwLTIuMjEtMS43OS00LTQtNFM4IDUuNzkgOCA4djFINlY4YzAtMy4zMTQgMi42ODYtNiA2LTZ6XCI+PC9wYXRoPjwvZz4nXG59OyIsICIvLyBWc2NDaGVja1xuZXhwb3J0IGRlZmF1bHQge1xuICBhOiB7XG4gICAgdmlld0JveDogJzAgMCAxNiAxNicsXG4gICAgZmlsbDogJ2N1cnJlbnRDb2xvcidcbiAgfSxcbiAgYzogJzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xNC40MzEgMy4zMjNsLTguNDcgMTAtLjc5LS4wMzYtMy4zNS00Ljc3LjgxOC0uNTc0IDIuOTc4IDQuMjQgOC4wNTEtOS41MDYuNzY0LjY0NnpcIj48L3BhdGg+J1xufTsiLCAiLy8gVnNjQ2hyb21lQ2xvc2VcbmV4cG9ydCBkZWZhdWx0IHtcbiAgYToge1xuICAgIHZpZXdCb3g6ICcwIDAgMTYgMTYnLFxuICAgIGZpbGw6ICdjdXJyZW50Q29sb3InXG4gIH0sXG4gIGM6ICc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNNy4xMTYgOGwtNC41NTggNC41NTguODg0Ljg4NEw4IDguODg0bDQuNTU4IDQuNTU4Ljg4NC0uODg0TDguODg0IDhsNC41NTgtNC41NTgtLjg4NC0uODg0TDggNy4xMTYgMy40NDIgMi41NThsLS44ODQuODg0TDcuMTE2IDh6XCI+PC9wYXRoPidcbn07IiwgIjxzY3JpcHQgbGFuZz1cInRzXCIgY29udGV4dD1cIm1vZHVsZVwiPlxuICBpbXBvcnQgeyB3cml0YWJsZSB9IGZyb20gJ3N2ZWx0ZS9zdG9yZSc7XG4gIGNvbnN0IHJlcmVuZGVyU3RvcmUgPSB3cml0YWJsZTx7IFtpZDogc3RyaW5nXTogYm9vbGVhbiB9Pih7fSk7XG4gIGV4cG9ydCBmdW5jdGlvbiByZXJlbmRlclRoZW1lKGlkOiBzdHJpbmcpIHtcbiAgICByZXJlbmRlclN0b3JlLnVwZGF0ZSgob2JqKSA9PiB7XG4gICAgICBvYmpbaWRdID0gIW9ialtpZF07XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH0pO1xuICB9XG48L3NjcmlwdD5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbiAgaW1wb3J0IEljb24gZnJvbSAnc3ZlbHRlLWljb25zLXBhY2svSWNvbi5zdmVsdGUnOyAvLyBUaGlzIGltcG9ydCBkb2VzIG5vdCBnZXQgYnVuZGxlZCBwcm9wZXJseSB3aXRoIGV4dGVybmFsTW9kdWxlc1xuICBpbXBvcnQgUmlFZGl0b3JRdWVzdGlvbk1hcmsgZnJvbSAnc3ZlbHRlLWljb25zLXBhY2svcmkvUmlFZGl0b3JRdWVzdGlvbk1hcmsnO1xuICBpbXBvcnQgVnNjQ2hlY2sgZnJvbSAnc3ZlbHRlLWljb25zLXBhY2svdnNjL1ZzY0NoZWNrJztcbiAgaW1wb3J0IFZzY0Nocm9tZUNsb3NlIGZyb20gJ3N2ZWx0ZS1pY29ucy1wYWNrL3ZzYy9Wc2NDaHJvbWVDbG9zZSc7XG4gIGNvbnN0IHRoZW1lcyA9IFBvcGNvcm4udGhlbWVzO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVRvb2x0aXBDb250ZW50KGVycm9yczogY3NzVmFsaWRhdG9yRXJyb3JzKSB7XG4gICAgcmV0dXJuIGVycm9yc1xuICAgICAgPy5tYXAoKGVycm9yKSA9PiBgTGluZSAke2Vycm9yLmxpbmV9OiAke2Vycm9yLm1lc3NhZ2V9YClcbiAgICAgIC5qb2luKCdcXG4gJyk7XG4gIH1cbjwvc2NyaXB0PlxuXG48ZGl2IGNsYXNzPVwidGhlbWVzLXdyYXBwZXJcIj5cbiAgeyNlYWNoIE9iamVjdC5rZXlzKHRoZW1lcykgYXMgaWR9XG4gICAge0Bjb25zdCB0aGVtZSA9IHRoZW1lc1tpZF19XG4gICAge0Bjb25zdCBpc1ZhbGlkID0gdGhlbWUudmFsaWQgJiYgdGhlbWUudmFsaWQgIT09ICd1bmtub3duJ31cbiAgICB7I2tleSAkcmVyZW5kZXJTdG9yZVtpZF19XG4gICAgICA8ZGl2IGNsYXNzPVwidGhlbWUtY29udGFpbmVyXCIge2lkfSBkYXRhLWVuYWJsZWQ9e3RoZW1lLmVuYWJsZWR9PlxuICAgICAgICA8aDEgY2xhc3M9XCJ0aGVtZS1pZFwiPntpZH08L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGhlbWUtbWV0YVwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwidGhlbWUtdmFsaWRpdHlcIlxuICAgICAgICAgICAgZGF0YS12YWx1ZT17aXNWYWxpZCA/IHVuZGVmaW5lZCA6IHRoZW1lLnZhbGlkfVxuICAgICAgICAgICAgZGF0YS1lcnJvcj17aXNWYWxpZCA/IHVuZGVmaW5lZCA6IGNyZWF0ZVRvb2x0aXBDb250ZW50KHRoZW1lLmVycm9ycyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyNpZiBpc1ZhbGlkfVxuICAgICAgICAgICAgICA8SWNvbiBjb2xvcj1cImN1cnJlbnRDb2xvclwiIHNyYz17VnNjQ2hlY2t9IC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGhlbWUtdmFsaWRpdHktdGV4dFwiPlZhbGlkPC9zcGFuPlxuICAgICAgICAgICAgezplbHNlIGlmIHRoZW1lLnZhbGlkID09PSBmYWxzZX1cbiAgICAgICAgICAgICAgPEljb24gY29sb3I9XCJjdXJyZW50Q29sb3JcIiBzcmM9e1ZzY0Nocm9tZUNsb3NlfSAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRoZW1lLXZhbGlkaXR5LXRleHRcIj5JbnZhbGlkPC9zcGFuPlxuICAgICAgICAgICAgezplbHNlfVxuICAgICAgICAgICAgICA8SWNvbiBjb2xvcj1cImN1cnJlbnRDb2xvclwiIHNyYz17UmlFZGl0b3JRdWVzdGlvbk1hcmt9IC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGhlbWUtdmFsaWRpdHktdGV4dFwiPlZhbGlkaXR5IFVua25vd248L3NwYW4+XG4gICAgICAgICAgICB7L2lmfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzPVwidGhlbWUtdG9nZ2xlXCJcbiAgICAgICAgICBvbjpjbGljaz17KCkgPT4gd2luZG93LlBvcGNvcm4udGhlbWVzW2lkXS50b2dnbGUoKX1cbiAgICAgICAgICBvbjpzdWJtaXQ9eygpID0+IHdpbmRvdy5Qb3Bjb3JuLnRoZW1lc1tpZF0udG9nZ2xlKCl9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhlbWUuZW5hYmxlZCA/ICdEaXNhYmxlJyA6ICdFbmFibGUnfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIHsva2V5fVxuICB7L2VhY2h9XG48L2Rpdj5cblxuPHN0eWxlPlxuICAudGhlbWVzLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNnJlbSwgMWZyKSk7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1heC1jb250ZW50O1xuICAgIGdhcDogMXJlbTtcbiAgfVxuXG4gIC50aGVtZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xuICAgIHJvdy1nYXA6IDAuNXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG9wLWJnLW5vcm1hbCk7XG4gIH1cblxuICAudGhlbWUtaWQge1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4gIH1cbiAgLnRoZW1lLWlkOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC50aGVtZS1tZXRhIHtcbiAgICBwYWRkaW5nLWJsb2NrLXN0YXJ0OiAwLjVyZW07XG4gICAgYm9yZGVyLWJsb2NrLXN0YXJ0OiAwLjEyNXJlbSBzb2xpZCB2YXIoLS1wb3AtZmctbm9ybWFsKTtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cbiAgLnRoZW1lLXZhbGlkaXR5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICB9XG4gIC50aGVtZS12YWxpZGl0eVtkYXRhLXZhbHVlPSd0cnVlJ10ge1xuICAgIGNvbG9yOiB2YXIoLS1wb3AtZ3JlZW4pO1xuICB9XG4gIC50aGVtZS12YWxpZGl0eVtkYXRhLXZhbHVlPSdmYWxzZSddIHtcbiAgICBjb2xvcjogdmFyKC0tcG9wLXJlZCk7XG4gIH1cbiAgLnRoZW1lLXZhbGlkaXR5W2RhdGEtdmFsdWU9J3Vua25vd24nXSB7XG4gICAgY29sb3I6IHZhcigtLXBvcC1ncmF5KTtcbiAgfVxuXG4gIC50aGVtZS12YWxpZGl0eSA+IDpnbG9iYWwoc3ZnKSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDAuMTI1ZW07XG4gIH1cblxuICAvKiBUT0RPOiBVc2UgYSB0b29sdGlwIGNvbXBvbmVudCBpbnN0ZWFkIG9mIHRoaXMgKi9cbiAgLnRoZW1lLXZhbGlkaXR5W2RhdGEtZXJyb3JdOjpiZWZvcmUsXG4gIC50aGVtZS12YWxpZGl0eVtkYXRhLWVycm9yXTo6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IGNhbGMoMTAwJSArIDAuNXJlbSk7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgfVxuICAudGhlbWUtdmFsaWRpdHlbZGF0YS1lcnJvcl06OmFmdGVyIHtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XG4gICAgY29sb3I6IHZhcigtLXBvcC10b29sdGlwLWZnKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wb3AtdG9vbHRpcC1iZyk7XG4gIH1cbiAgLnRoZW1lLXZhbGlkaXR5W2RhdGEtZXJyb3JdOmhvdmVyOjphZnRlciB7XG4gICAgY29udGVudDogYXR0cihkYXRhLWVycm9yKTtcbiAgfVxuICAudGhlbWUtdmFsaWRpdHlbZGF0YS1lcnJvcl06OmJlZm9yZSB7XG4gICAgbGVmdDogY2FsYyg1MCUgKyAwLjVyZW0pO1xuICAgIG1hcmdpbi1ib3R0b206IC0xcmVtO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXI6IDAuNXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wLWNvbG9yOiB2YXIoLS1wb3AtdG9vbHRpcC1iZyk7XG4gIH1cbiAgLnRoZW1lLXZhbGlkaXR5W2RhdGEtZXJyb3JdOmhvdmVyOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICB9XG5cbiAgLnRoZW1lLXRvZ2dsZSB7XG4gICAgYWxsOiB1bnNldDtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAudGhlbWUtY29udGFpbmVyW2RhdGEtZW5hYmxlZD0ndHJ1ZSddID4gLnRoZW1lLXRvZ2dsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG9wLXJlZCk7XG4gIH1cbiAgLnRoZW1lLWNvbnRhaW5lcltkYXRhLWVuYWJsZWQ9J2ZhbHNlJ10gPiAudGhlbWUtdG9nZ2xlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wb3AtZ3JlZW4pO1xuICB9XG48L3N0eWxlPlxuIiwgImltcG9ydCB7IHJlcmVuZGVyVGhlbWUgfSBmcm9tICdAdWkvdGFicy9UaGVtZXMuc3ZlbHRlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXQodGFyZ2V0LCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHRhcmdldFtrZXldID09PSAnb2JqZWN0JyAmJiB0YXJnZXRba2V5XSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm94eSh0YXJnZXRba2V5XSwgdGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICB9XG4gIH0sXG4gIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgaWYgKCdpZCcgaW4gdGFyZ2V0KSByZXJlbmRlclRoZW1lKHRhcmdldC5pZCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG59O1xuIiwgImV4cG9ydCBjb25zdCBJUEMgPSB7XG4gIC8vIE1pc2NcbiAgZ2V0Q29uZmlnOiAnUE9QQ09STl9HRVRfQ09ORklHJyxcbiAgc3RhdHVzTWVzc2FnZTogJ1BPUENPUk5fU1RBVFVTX01FU1NBR0UnLFxuICBsb2c6ICdQT1BDT1JOX0xPRycsXG5cbiAgLy8gVGhlbWVzXG4gIGdldFRoZW1lczogJ1BPUENPUk5fR0VUX1RIRU1FUycsXG4gIG9uVGhlbWVDaGFuZ2U6ICdQT1BDT1JOX09OX1RIRU1FX0NIQU5HRScsXG4gIHNhdmVUaGVtZVN0YXRlOiAnUE9QQ09STl9TQVZFX1NUQVRFJyxcblxuICAvLyBRdWlja0NTU1xuICBnZXRRdWlja0NzczogJ1BPUENPUk5fR0VUX1FVSUNLX0NTUycsXG4gIG9uUXVpY2tDc3NDaGFuZ2U6ICdQT1BDT1JOX09OX1FVSUNLX0NTU19DSEFOR0UnLFxuICBjcmVhdGVRdWlja0Nzc05vZGU6ICdQT1BDT1JOX0NSRUFURV9RVUlDS19DU1NfTk9ERScsXG4gIGRlbGV0ZVF1aWNrQ3NzTm9kZTogJ1BPUENPUk5fREVMRVRFX1FVSUNLX0NTU19OT0RFJyxcbiAgcmVuYW1lUXVpY2tDc3NOb2RlOiAnUE9QQ09STl9SRU5BTUVfUVVJQ0tfQ1NTX05PREUnLFxuICB1cGRhdGVRdWlja0Nzc0ZpbGU6ICdQT1BDT1JOX1NBVkVfUVVJQ0tfQ1NTX0ZJTEUnLFxufTtcbiIsICJpbXBvcnQgeyBJUEMgfSBmcm9tICdAY29tbW9uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBMb2dnZXJNb2R1bGUge1xuICBwcml2YXRlIG1vZHVsZTogc3RyaW5nO1xuICBwcml2YXRlIG91dHB1dDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZSA9ICdjb25zb2xlJykge1xuICAgIHRoaXMubW9kdWxlID0gbmFtZTtcbiAgICB0aGlzLm91dHB1dCA9IHRoaXMuI3BhcnNlT3V0cHV0KHR5cGUpO1xuICB9XG5cbiAgI3BhcnNlT3V0cHV0KG91dHB1dDogc3RyaW5nKSB7XG4gICAgc3dpdGNoIChvdXRwdXQpIHtcbiAgICAgIGNhc2UgJ2Fuc2knOlxuICAgICAgY2FzZSAndGVybWluYWwnOlxuICAgICAgICByZXR1cm4gJ2Fuc2knO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdjb25zb2xlJztcbiAgICB9XG4gIH1cblxuICAjcGFyc2VUeXBlKHR5cGU6IHN0cmluZykge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICBjYXNlICd3YXJuJzpcbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgIGNhc2UgJ2RlYnVnJzpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ2xvZyc7XG4gICAgfVxuICB9XG5cbiAgI3BhcnNlQ29sb3IodHlwZTogc3RyaW5nKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdkZWJ1Zyc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RyOiAnTWVkaXVtU3ByaW5nR3JlZW4nLFxuICAgICAgICAgIGFycjogWzAsIDI1MCwgMTU0XSxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0cjogJ0RlZXBTa3lCbHVlJyxcbiAgICAgICAgICBhcnI6IFswLCAxOTEsIDI1NV0sXG4gICAgICAgIH07XG4gICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RyOiAnY3JpbXNvbicsXG4gICAgICAgICAgYXJyOiBbMjIwLCAyMCwgNjBdLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnd2Fybic6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RyOiAnRGFya09yYW5nZScsXG4gICAgICAgICAgYXJyOiBbMjU1LCAxNDAsIDBdLFxuICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdHI6ICdnb2xkJyxcbiAgICAgICAgICBhcnI6IFsyNTUsIDIxNSwgMF0sXG4gICAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgI2Fuc2lDb2xvcihjb2xvcjogQXJyYXk8bnVtYmVyPiwgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGBcXHgxYlszODsyOyR7Y29sb3JbMF19OyR7Y29sb3JbMV19OyR7Y29sb3JbMl19bSR7bWVzc2FnZX1cXHgxYlswbWA7XG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG4gIGFzeW5jICNsb2codHlwZTogc3RyaW5nLCBtZXNzYWdlOiBhbnlbXSkge1xuICAgIHR5cGUgPSB0aGlzLiNwYXJzZVR5cGUodHlwZSk7XG4gICAgY29uc3QgbG9nQ29sb3IgPSB0aGlzLiNwYXJzZUNvbG9yKHR5cGUpO1xuXG4gICAgY29uc3QgYmFubmVyID1cbiAgICAgIHRoaXMub3V0cHV0ID09PSAnYW5zaSdcbiAgICAgICAgPyBbYFske3RoaXMuI2Fuc2lDb2xvcihsb2dDb2xvci5hcnIsICdQb3Bjb3JuJyl9ID4gJHt0aGlzLm1vZHVsZX1dYF1cbiAgICAgICAgOiBbYFslY1BvcGNvcm4lYyA+ICR7dGhpcy5tb2R1bGV9XWAsIGBjb2xvcjogJHtsb2dDb2xvci5zdHJ9O2AsICcnXTtcblxuICAgIGNvbnNvbGVbdHlwZV0oLi4uYmFubmVyLCAuLi5tZXNzYWdlKTtcblxuICAgIC8vIFRPRE86IERvbid0IHNlbmQgZXZlcnl0aGluZ1xuICAgIGlmICh0aGlzLm91dHB1dCA9PT0gJ2Fuc2knKSB7XG4gICAgICBjb25zdCB7IEJyb3dzZXJXaW5kb3cgfSA9IGF3YWl0IGltcG9ydCgnZWxlY3Ryb24nKTtcblxuICAgICAgQnJvd3NlcldpbmRvdy5nZXRBbGxXaW5kb3dzKCkuZm9yRWFjaCgod2luKSA9PiB3aW4ud2ViQ29udGVudHMuc2VuZChJUEMubG9nLCB0eXBlLCAuLi5tZXNzYWdlKSk7XG4gICAgfVxuICB9XG5cbiAgbG9nID0gKC4uLm1lc3NhZ2U6IGFueVtdKSA9PiB0aGlzLiNsb2coJ2xvZycsIG1lc3NhZ2UpO1xuICBpbmZvID0gKC4uLm1lc3NhZ2U6IGFueVtdKSA9PiB0aGlzLiNsb2coJ2luZm8nLCBtZXNzYWdlKTtcbiAgd2FybiA9ICguLi5tZXNzYWdlOiBhbnlbXSkgPT4gdGhpcy4jbG9nKCd3YXJuJywgbWVzc2FnZSk7XG4gIGVycm9yID0gKC4uLm1lc3NhZ2U6IGFueVtdKSA9PiB0aGlzLiNsb2coJ2Vycm9yJywgbWVzc2FnZSk7XG4gIGRlYnVnID0gKC4uLm1lc3NhZ2U6IGFueVtdKSA9PiB0aGlzLiNsb2coJ2RlYnVnJywgbWVzc2FnZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2dlck1vZHVsZTtcbiIsICJpbXBvcnQgYXV0b0JpbmQgZnJvbSAnYXV0by1iaW5kJztcbmltcG9ydCB0aGVtZVByb3h5IGZyb20gJy4vcHJveHknO1xuaW1wb3J0IHsgY29tbWVudHMsIGNvbmZpZywgc2hvdWxkVmFsaWRhdGUgfSBmcm9tICcuLic7XG5pbXBvcnQgTG9nZ2VyTW9kdWxlIGZyb20gJ0Bjb21tb24vbG9nZ2VyJztcbmNvbnN0IExvZ2dlciA9IG5ldyBMb2dnZXJNb2R1bGUoJ1RoZW1lcycpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaGVtZXMge1xuICBzdHlsZUNhY2hlID0gbmV3IE1hcDxzdHJpbmcsIEhUTUxMaW5rRWxlbWVudD4oKTtcbiAgdGhlbWVSZXZpc2lvbnMgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuICBwcm94eTogdHlwZW9mIFBvcGNvcm4udGhlbWVzO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJveHkgPSBuZXcgUHJveHkod2luZG93LlBvcGNvcm4udGhlbWVzLCB0aGVtZVByb3h5KTtcbiAgICB3aW5kb3cuUG9wY29ybi50aGVtZXMgPSB0aGlzLnByb3h5O1xuXG4gICAgYXV0b0JpbmQodGhpcyk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLnBvcHVsYXRlVGhlbWVzKCk7XG4gICAgdGhpcy53YXRjaFRoZW1lcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBwb3B1bGF0ZVRoZW1lcygpIHtcbiAgICBmb3IgKGNvbnN0IHRoZW1lIGluIHRoaXMucHJveHkpIHtcbiAgICAgIGNvbnN0IHRoZW1lTWV0YSA9IHRoaXMucHJveHlbdGhlbWVdO1xuICAgICAgaWYgKHRoZW1lTWV0YS5lbmFibGVkKSB0aGlzLmVuYWJsZSh0aGVtZSwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgd2F0Y2hUaGVtZXMoKSB7XG4gICAgUG9wY29ybk5hdGl2ZS5vblRoZW1lQ2hhbmdlKGFzeW5jICh7IGlkLCB0aGVtZSB9KSA9PiB7XG4gICAgICBpZiAoY29uZmlnLnZlcmJvc2UpIExvZ2dlci5kZWJ1ZyhgVGhlbWUgY2hhbmdlZDogJHtpZH1gKTtcbiAgICAgIHRoaXMucHJveHlbaWRdID0gdGhpcy5wb3B1bGF0ZVRoZW1lKHRoZW1lKTtcbiAgICAgIHRoaXMudXBkYXRlVGhlbWUoaWQpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlVGhlbWUoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHRoZW1lRWxlbWVudCA9IHRoaXMuc3R5bGVDYWNoZS5nZXQoaWQpO1xuICAgIGlmICghdGhlbWVFbGVtZW50KSB7XG4gICAgICBMb2dnZXIud2FybihgTm8gdGhlbWUgZm91bmQgd2l0aCBpZDogXCIke2lkfVwiYCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmV2ID0gKHRoaXMudGhlbWVSZXZpc2lvbnMuZ2V0KGlkKSA/PyAwKSArIDE7XG4gICAgdGhpcy50aGVtZVJldmlzaW9ucy5zZXQoaWQsIHJldik7XG4gICAgdGhlbWVFbGVtZW50LmhyZWYgPSBgcG9wY29ybjovL3RoZW1lLyR7aWR9PyR7cmV2fWA7XG4gIH1cblxuICBwb3B1bGF0ZVRoZW1lKHRoZW1lOiBTaW1wbGVUaGVtZSk6IFRoZW1lIHtcbiAgICBjb25zdCBpZCA9IHRoZW1lLmlkO1xuICAgIGNvbnN0IGNvbnZlcnRlZFRoZW1lOiBUaGVtZSA9IHtcbiAgICAgIC4uLnRoZW1lLFxuICAgICAgZW5hYmxlOiAoc2F2ZSA9IHRydWUpID0+IHRoaXMuZW5hYmxlKGlkLCBzYXZlKSxcbiAgICAgIGRpc2FibGU6IChzYXZlID0gdHJ1ZSkgPT4gdGhpcy5kaXNhYmxlKGlkLCBzYXZlKSxcbiAgICAgIHRvZ2dsZTogKHNhdmUgPSB0cnVlKSA9PiB0aGlzLnRvZ2dsZShpZCwgc2F2ZSksXG4gICAgICB2YWxpZDogJ3Vua25vd24nLFxuICAgICAgZXJyb3JzOiBbXSxcbiAgICB9O1xuXG4gICAgaWYgKHNob3VsZFZhbGlkYXRlKSB0aGlzLnZhbGlkYXRlVGhlbWUodGhlbWUuaWQpO1xuXG4gICAgcmV0dXJuIGNvbnZlcnRlZFRoZW1lO1xuICB9XG5cbiAgYXN5bmMgdmFsaWRhdGVUaGVtZShpZDogc3RyaW5nKSB7XG4gICAgY29uc3QgdGhlbWVNZXRhID0gdGhpcy5wcm94eVtpZF07XG4gICAgY29uc3QgY29udGVudCA9IGF3YWl0IChhd2FpdCBmZXRjaChgcG9wY29ybjovL3RoZW1lLyR7aWR9YCkpLnRleHQoKTtcblxuICAgIFBvcGNvcm5OYXRpdmUudmFsaWRhdGVDU1MoY29udGVudClcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codGhlbWVNZXRhLnZhbGlkLCB0aGlzLnByb3h5W2lkXS52YWxpZCk7XG4gICAgICAgIHRoZW1lTWV0YS52YWxpZCA9IHJlc3VsdC52YWxpZDtcbiAgICAgICAgdGhlbWVNZXRhLmVycm9ycyA9IHJlc3VsdC5lcnJvcnM7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoZW1lTWV0YS52YWxpZCwgdGhpcy5wcm94eVtpZF0udmFsaWQpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBMb2dnZXIuZXJyb3IoYEZhaWxlZCB0byB2YWxpZGF0ZSBcIiR7aWR9XCIuYCwgZSk7XG4gICAgICAgIHRoZW1lTWV0YS52YWxpZCA9ICd1bmtub3duJztcbiAgICAgIH0pO1xuICB9XG5cbiAgZW5hYmxlKGlkOiBzdHJpbmcsIHNhdmUgPSB0cnVlKSB7XG4gICAgY29uc3QgdGhlbWVNZXRhID0gdGhpcy5wcm94eVtpZF07XG5cbiAgICBpZiAodGhpcy5zdHlsZUNhY2hlLmhhcyhpZCkpIHtcbiAgICAgIExvZ2dlci5sb2coYFwiJHtpZH1cIiBpcyBhbHJlYWR5IGVuYWJsZWQuYCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhlbWVNZXRhLmVuYWJsZWQgPSB0cnVlO1xuXG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICBlbGVtLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICBlbGVtLmlkID0gaWQ7XG4gICAgZWxlbS5ocmVmID0gYHBvcGNvcm46Ly90aGVtZS8ke2lkfWA7XG4gICAgZWxlbS5kYXRhc2V0LnBvcGNvcm4gPSAndHJ1ZSc7XG4gICAgY29tbWVudHMuZW5kLmJlZm9yZShlbGVtKTtcblxuICAgIHRoaXMuc3R5bGVDYWNoZS5zZXQoaWQsIGVsZW0pO1xuXG4gICAgTG9nZ2VyLmxvZyhgXCIke2lkfVwiIGVuYWJsZWQuYCk7XG4gICAgaWYgKHNhdmUpIFBvcGNvcm5OYXRpdmUuc2F2ZVRoZW1lU3RhdGUoaWQsIHRydWUpO1xuICB9XG4gIGRpc2FibGUoaWQ6IHN0cmluZywgc2F2ZSA9IHRydWUpIHtcbiAgICBjb25zdCB0aGVtZU1ldGEgPSB0aGlzLnByb3h5W2lkXTtcblxuICAgIGNvbnN0IHN0eWxlID0gdGhpcy5zdHlsZUNhY2hlLmdldChpZCk7XG4gICAgaWYgKCFzdHlsZSkge1xuICAgICAgTG9nZ2VyLndhcm4oYFwiJHtpZH1cIiBpcyBub3QgZW5hYmxlZC5gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGVtZU1ldGEuZW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zdHlsZUNhY2hlLmRlbGV0ZShpZCk7XG4gICAgc3R5bGUucmVtb3ZlKCk7XG5cbiAgICBMb2dnZXIubG9nKGBcIiR7aWR9XCIgZGlzYWJsZWQuYCk7XG4gICAgaWYgKHNhdmUpIFBvcGNvcm5OYXRpdmUuc2F2ZVRoZW1lU3RhdGUoaWQsIGZhbHNlKTtcbiAgfVxuICB0b2dnbGUoaWQ6IHN0cmluZywgc2F2ZSA9IHRydWUpIHtcbiAgICBjb25zdCB0aGVtZU1ldGEgPSB0aGlzLnByb3h5W2lkXTtcblxuICAgIGlmICghdGhlbWVNZXRhLmVuYWJsZWQpIHRoaXMuZW5hYmxlKGlkLCBzYXZlKTtcbiAgICBlbHNlIHRoaXMuZGlzYWJsZShpZCwgc2F2ZSk7XG4gIH1cbn1cbiIsICI8IS0tIFRPRE86IEltcHJvdmUgZXZlcnl0aGluZyBoZXJlIC0tPlxuPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCIgbGFuZz1cInRzXCI+XG4gIGltcG9ydCB7IHdyaXRhYmxlLCBSZWFkYWJsZSB9IGZyb20gJ3N2ZWx0ZS9zdG9yZSc7XG4gIGNvbnN0IHJlcmVuZGVyU3RvcmUgPSB3cml0YWJsZTxib29sZWFuPigpO1xuICBleHBvcnQgZnVuY3Rpb24gcmVyZW5kZXJTaWRlYmFyKCkge1xuICAgIHJlcmVuZGVyU3RvcmUudXBkYXRlKChvYmopID0+ICFvYmopO1xuICB9XG5cbiAgY29uc3Qgc2VsZWN0ZWROb2RlID0gd3JpdGFibGU8UXVpY2tDc3NGaWxlIHwgUXVpY2tDc3NGb2xkZXI+KCk7XG4gIGV4cG9ydCBjb25zdCBzZWxlY3RlZEZpbGUgPSB3cml0YWJsZTxRdWlja0Nzc0ZpbGU+KCk7XG4gIGV4cG9ydCBjb25zdCBzZWxlY3RlZEZvbGRlciA9IHdyaXRhYmxlPFF1aWNrQ3NzRm9sZGVyPigpO1xuICBleHBvcnQgY29uc3QgbGF0ZXN0U2VsZWN0aW9uOiBSZWFkYWJsZTxRdWlja0Nzc0ZpbGUgfCBRdWlja0Nzc0ZvbGRlcj4gPSB7XG4gICAgc3Vic2NyaWJlOiBzZWxlY3RlZE5vZGUuc3Vic2NyaWJlLFxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBzdGF0dXMgPSB3cml0YWJsZTxRdWlja0Nzc1VJU3RhdHVzPih7fSk7XG48L3NjcmlwdD5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbiAgaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICd0cy1kZWJvdW5jZSc7XG4gIC8vIFRPRE86IEdldCByaWQgb2YgdGhlIHR5cGUgaW1wb3J0cyBzb21laG93XG4gIGltcG9ydCBNb25hY29FZGl0b3IsIHtcbiAgICB0eXBlIGFjdGlvbnMsXG4gICAgdHlwZSBjb21tYW5kcyxcbiAgfSBmcm9tICdAY29tcG9uZW50cy9RdWlja0Nzcy9Nb25hY29FZGl0b3Iuc3ZlbHRlJztcbiAgaW1wb3J0IFNpZGViYXIsIHsgZmlsZVN0YXR1cyB9IGZyb20gJ0Bjb21wb25lbnRzL1F1aWNrQ3NzL1NpZGViYXIuc3ZlbHRlJztcblxuICBjb25zdCBkZWZhdWx0VGV4dCA9ICdTZWxlY3QgYSBmaWxlIHRvIGVkaXQnO1xuXG4gIGxldCBlZGl0b3JDb250ZW50OiBzdHJpbmcgPSBkZWZhdWx0VGV4dDtcblxuICBzZWxlY3RlZEZpbGUuc3Vic2NyaWJlKChmaWxlKSA9PiB7XG4gICAgaWYgKCFmaWxlKSByZXR1cm47XG5cbiAgICBlZGl0b3JDb250ZW50ID0gZmlsZS5jb250ZW50O1xuICAgIHNlbGVjdGVkTm9kZS5zZXQoZmlsZSk7XG4gIH0pO1xuICBzZWxlY3RlZEZvbGRlci5zdWJzY3JpYmUoKGZvbGRlcikgPT4ge1xuICAgIGlmICghZm9sZGVyKSByZXR1cm47XG5cbiAgICBzZWxlY3RlZE5vZGUuc2V0KGZvbGRlcik7XG4gIH0pO1xuXG4gIGxldCBhY3Rpb25zOiBhY3Rpb25zID0gW1xuICAgIHtcbiAgICAgIGlkOiAnc2F2ZScsXG4gICAgICBsYWJlbDogJ1NhdmUgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBmaWxlJyxcbiAgICAgIGhhbmRsZXI6IHNhdmUsXG4gICAgfSxcbiAgXTtcbiAgbGV0IGNvbW1hbmRzOiBjb21tYW5kcyA9IFtcbiAgICB7XG4gICAgICBrZXliaW5kaW5nOiAoS2V5Q29kZSwgS2V5TW9kKSA9PiBLZXlNb2QuQ3RybENtZCB8IEtleUNvZGUuS2V5UyxcbiAgICAgIGhhbmRsZXI6IHNhdmUsXG4gICAgfSxcbiAgXTtcblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoKSB7XG4gICAgaWYgKCEkc2VsZWN0ZWRGaWxlKSByZXR1cm47XG5cbiAgICAkZmlsZVN0YXR1c1skc2VsZWN0ZWRGaWxlLmxvY2F0aW9uXSA/Pz0ge307XG4gICAgJGZpbGVTdGF0dXNbJHNlbGVjdGVkRmlsZS5sb2NhdGlvbl0udW5zYXZlZCA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBzYXZlKCkge1xuICAgIGlmICghJHNlbGVjdGVkRmlsZSkgcmV0dXJuO1xuXG4gICAgJGZpbGVTdGF0dXNbJHNlbGVjdGVkRmlsZS5sb2NhdGlvbl0udW5zYXZlZCA9IGZhbHNlO1xuICAgIFBvcGNvcm5OYXRpdmUudXBkYXRlUXVpY2tDc3NGaWxlKCRzZWxlY3RlZEZpbGUubG9jYXRpb24sIGVkaXRvckNvbnRlbnQpO1xuICB9XG5cbiAgbGV0IHJlY2FsY3VsYXRlU2l6ZTogTW9uYWNvRWRpdG9yWydyZWNhbGN1bGF0ZVNpemUnXTtcbjwvc2NyaXB0PlxuXG48ZGl2IGNsYXNzPVwicXVpY2tDc3Mtd3JhcHBlclwiPlxuICB7I2tleSAkcmVyZW5kZXJTdG9yZX1cbiAgICA8U2lkZWJhciBvbjpyZXNpemU9e2RlYm91bmNlKHJlY2FsY3VsYXRlU2l6ZSwgNTApfSAvPlxuICB7L2tleX1cbiAgPGRpdiBjbGFzcz1cInN0YXR1cy1iYXJcIj5cbiAgICA8c3BhbiBjbGFzcz1cInNlbGVjdGVkLWZpbGVcIj57JHNlbGVjdGVkRmlsZT8ubmFtZSA/PyBkZWZhdWx0VGV4dH08L3NwYW4+XG4gICAgeyNpZiAkc3RhdHVzLnR5cGV9XG4gICAgICA8ZGl2IGNsYXNzPVwic3RhdHVzXCIgZGF0YS10eXBlPXskc3RhdHVzLnR5cGUgPz8gdW5kZWZpbmVkfT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN0YXR1cy1tZXNzYWdlXCI+eyRzdGF0dXMubWVzc2FnZX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIHsvaWZ9XG4gIDwvZGl2PlxuICA8IS0tIFRPRE86IERvbid0IHNob3cgTW9uYWNvIHdoZW4gbm8gZmlsZSBpcyBzZWxlY3RlZCAtLT5cbiAgPE1vbmFjb0VkaXRvclxuICAgIG9uOmNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgIGJpbmQ6Y29udGVudD17ZWRpdG9yQ29udGVudH1cbiAgICBiaW5kOnJlY2FsY3VsYXRlU2l6ZVxuICAgIHthY3Rpb25zfVxuICAgIHtjb21tYW5kc31cbiAgLz5cbjwvZGl2PlxuXG48c3R5bGU+XG4gIC5xdWlja0Nzcy13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAnc2lkZWJhciBzdGF0dXMnXG4gICAgICAnc2lkZWJhciBlZGl0b3InO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcbiAgICBnYXA6IDFyZW07XG4gICAgYmxvY2stc2l6ZTogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLnF1aWNrQ3NzLXdyYXBwZXIgPiA6Z2xvYmFsKC5zaWRlYmFyKSB7XG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xuICB9XG5cbiAgLnF1aWNrQ3NzLXdyYXBwZXIgPiA6Z2xvYmFsKC5tb25hY28td3JhcHBlcikge1xuICAgIGdyaWQtYXJlYTogZWRpdG9yO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAucXVpY2tDc3Mtd3JhcHBlciA+IC5zdGF0dXMtYmFyIHtcbiAgICBncmlkLWFyZWE6IHN0YXR1cztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtaW4tYmxvY2stc2l6ZTogMS41ZW07XG4gICAgcGFkZGluZzogMC4yNWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBvcC1iZy1ub3JtYWwpO1xuICB9XG48L3N0eWxlPlxuIiwgIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiIGxhbmc9XCJ0c1wiPlxuICBleHBvcnQgdHlwZSBhY3Rpb25zID0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBoYW5kbGVyOiAoKSA9PiB2b2lkO1xuICB9W107XG5cbiAgZXhwb3J0IHR5cGUgY29tbWFuZHMgPSB7XG4gICAga2V5YmluZGluZzogKFxuICAgICAgS2V5Q29kZTogdHlwZW9mIG1vbmFjby5LZXlDb2RlLFxuICAgICAgS2V5TW9kOiB0eXBlb2YgbW9uYWNvLktleU1vZFxuICAgICkgPT4gbnVtYmVyO1xuICAgIGhhbmRsZXI6ICgpID0+IHZvaWQ7XG4gICAgY29udGV4dD86IHN0cmluZztcbiAgfVtdO1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG4gIGltcG9ydCB7IG9uTW91bnQgfSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ3RzLWRlYm91bmNlJztcbiAgaW1wb3J0IGxvYWRlciBmcm9tICdAbW9uYWNvLWVkaXRvci9sb2FkZXInO1xuICBpbXBvcnQgdHlwZSBtb25hY28gZnJvbSAnbW9uYWNvLXR5cGVzJzsgLy8gVE9ETzogVXNlIHRoZSBzY3JpcHQgaW5zdGVhZCBvZiB1c2luZyB0aGlzXG5cbiAgbGV0IGVkaXRvckVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xuICBleHBvcnQgbGV0IGVkaXRvcjogbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUNvZGVFZGl0b3IgPSBudWxsO1xuICBleHBvcnQgbGV0IGNvbnRlbnQ6IHN0cmluZztcbiAgZXhwb3J0IGxldCBhY3Rpb25zOiBhY3Rpb25zID0gW107XG4gIGV4cG9ydCBsZXQgY29tbWFuZHM6IGNvbW1hbmRzID0gW107XG4gIGV4cG9ydCBsZXQgb3B0aW9uczogbW9uYWNvLmVkaXRvci5JRWRpdG9yQ29uc3RydWN0aW9uT3B0aW9ucyA9IHt9O1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCk7XG5cbiAgbGV0IGxvYWRlZCA9IGZhbHNlO1xuICBvbk1vdW50KGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBtb25hY28gPSBhd2FpdCBsb2FkZXIuaW5pdCgpO1xuXG4gICAgbW9uYWNvLmVkaXRvci5vbkRpZENyZWF0ZUVkaXRvcigoKSA9PiB7XG4gICAgICBsb2FkZWQgPSB0cnVlO1xuICAgICAgcmVjYWxjdWxhdGVTaXplKCk7XG4gICAgICBkaXNwYXRjaCgncmVhZHknKTtcbiAgICB9KTtcblxuICAgIGVkaXRvciA9IG1vbmFjby5lZGl0b3IuY3JlYXRlKGVkaXRvckVsZW1lbnQsIHtcbiAgICAgIGxhbmd1YWdlOiAnY3NzJyxcbiAgICAgIHRoZW1lOiAndnMtZGFyaycsXG4gICAgICAuLi5vcHRpb25zLFxuXG4gICAgICAvLyBPdmVycmlkZXMgdGhlIG9wdGlvbnMgbm8gbWF0dGVyIHdoYXRcbiAgICAgIHZhbHVlOiBjb250ZW50LFxuICAgIH0pO1xuXG4gICAgY29uc3QgYWN0dWFsQ29tbWFuZHMgPSBjb21tYW5kcy5tYXAoKGNvbW1hbmQpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmNvbW1hbmQsXG4gICAgICAgIGtleWJpbmRpbmc6IGNvbW1hbmQua2V5YmluZGluZyhtb25hY28uS2V5Q29kZSwgbW9uYWNvLktleU1vZCksXG4gICAgICB9O1xuICAgIH0pO1xuICAgIGZvciAoY29uc3QgY29tbWFuZCBvZiBhY3R1YWxDb21tYW5kcykge1xuICAgICAgZWRpdG9yLmFkZENvbW1hbmQoXG4gICAgICAgIGNvbW1hbmQua2V5YmluZGluZyxcbiAgICAgICAgY29tbWFuZC5oYW5kbGVyLFxuICAgICAgICBjb21tYW5kLmNvbnRleHQgPz8gdW5kZWZpbmVkXG4gICAgICApO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGFjdGlvbiBvZiBhY3Rpb25zKSB7XG4gICAgICBjb25zdCB7IGlkLCBsYWJlbCwgaGFuZGxlciB9ID0gYWN0aW9uO1xuICAgICAgZWRpdG9yLmFkZEFjdGlvbih7XG4gICAgICAgIGlkOiAnY3VzdG9tLicgKyBpZCxcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIGtleWJpbmRpbmdzOiBbXSxcbiAgICAgICAgcnVuOiBoYW5kbGVyLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZWRpdG9yLm9uRGlkQ2hhbmdlTW9kZWxDb250ZW50KCgpID0+IHtcbiAgICAgIGNvbnN0IG5ld0NvbnRlbnQgPSBlZGl0b3IuZ2V0VmFsdWUoKTtcbiAgICAgIGlmIChuZXdDb250ZW50ID09PSBjb250ZW50KSByZXR1cm47XG5cbiAgICAgIGlnbm9yZU5leHQgPSB0cnVlO1xuICAgICAgY29udGVudCA9IG5ld0NvbnRlbnQ7XG4gICAgICBkaXNwYXRjaCgnY2hhbmdlJywgY29udGVudCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZWRpdG9yLmRpc3Bvc2UoKTtcbiAgICAgIGxvYWRlZCA9IGZhbHNlO1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIFRPRE86IEZpeCB0aGlzIG1vbnN0ZXJcbiAgLy8gV2hlbmV2ZXIgdGhlIGNvbnRlbnQgdmFyaWFibGUgY2hhbmdlcywgdXBkYXRlIE1vbmFjb1xuICBsZXQgaWdub3JlTmV4dCA9IGZhbHNlO1xuICAkOiBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnICYmIGxvYWRlZCkge1xuICAgIGlmICghaWdub3JlTmV4dCkgZWRpdG9yLmdldE1vZGVsKCkuc2V0VmFsdWUoY29udGVudCk7XG4gICAgaWdub3JlTmV4dCA9IGZhbHNlO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHJlY2FsY3VsYXRlU2l6ZSgpIHtcbiAgICBpZiAoIWxvYWRlZCkgcmV0dXJuO1xuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBlZGl0b3IubGF5b3V0KHsgd2lkdGg6IDAsIGhlaWdodDogMCB9KTtcbiAgICAgIGNvbnN0IHBhcmVudFJlY3QgPSBlZGl0b3JFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBlZGl0b3IubGF5b3V0KHtcbiAgICAgICAgd2lkdGg6IHBhcmVudFJlY3Qud2lkdGgsXG4gICAgICAgIGhlaWdodDogcGFyZW50UmVjdC5oZWlnaHQsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdmVsdGU6d2luZG93IG9uOnJlc2l6ZT17ZGVib3VuY2UocmVjYWxjdWxhdGVTaXplLCA1MCl9IC8+XG5cbjxkaXYgY2xhc3M9XCJtb25hY28td3JhcHBlclwiPlxuICB7I2lmICFsb2FkZWR9XG4gICAgPHAgY2xhc3M9XCJsb2FkaW5nLW92ZXJsYXlcIj5Mb2FkaW5nIG1vbmFjbyBlZGl0b3IuLi48L3A+XG4gIHsvaWZ9XG4gIDxkaXYgYmluZDp0aGlzPXtlZGl0b3JFbGVtZW50fSBjbGFzcz1cIm1vbmFjby1lZGl0b3JcIiAvPlxuPC9kaXY+XG5cbjxzdHlsZT5cbiAgLm1vbmFjby1lZGl0b3Ige1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbjwvc3R5bGU+XG4iLCAiLy8gVnNjTmV3RmlsZVxuZXhwb3J0IGRlZmF1bHQge1xuICBhOiB7XG4gICAgdmlld0JveDogJzAgMCAxNiAxNicsXG4gICAgZmlsbDogJ2N1cnJlbnRDb2xvcidcbiAgfSxcbiAgYzogJzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk00IDdIM1Y0SDBWM2gzVjBoMXYzaDN2MUg0djN6bTYuNS01LjlsMy40IDMuNS4xLjR2OC41bC0uNS41aC0xMGwtLjUtLjVWOGgxdjVoOVY2SDlWMkg1VjFoNS4ybC4zLjF6TTEwIDJ2M2gyLjlMMTAgMnpcIj48L3BhdGg+J1xufTsiLCAiLy8gVnNjTmV3Rm9sZGVyXG5leHBvcnQgZGVmYXVsdCB7XG4gIGE6IHtcbiAgICB2aWV3Qm94OiAnMCAwIDE2IDE2JyxcbiAgICBmaWxsOiAnY3VycmVudENvbG9yJ1xuICB9LFxuICBjOiAnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTcgM0g0VjBIM3YzSDB2MWgzdjNoMVY0aDNWM3pNNS41IDdINVY2aC4zbC44LS45LjQtLjFIMTRWNEg4VjNoNi41bC41LjV2MTBsLS41LjVoLTEzbC0uNS0uNVY1aDF2OGgxMlY2SDYuN2wtLjguOS0uNC4xelwiPjwvcGF0aD4nXG59OyIsICIvLyBWc2NSZW1vdmVcbmV4cG9ydCBkZWZhdWx0IHtcbiAgYToge1xuICAgIHZpZXdCb3g6ICcwIDAgMTYgMTYnLFxuICAgIGZpbGw6ICdjdXJyZW50Q29sb3InXG4gIH0sXG4gIGM6ICc8cGF0aCBkPVwiTTE1IDhIMVY3aDE0djF6XCI+PC9wYXRoPidcbn07IiwgIi8vIEFpRmlsbEZvbGRlck9wZW5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYToge1xuICAgIHZpZXdCb3g6ICcwIDAgMTAyNCAxMDI0J1xuICB9LFxuICBjOiAnPHBhdGggZD1cIk05MjggNDQ0SDgyMFYzMzAuNGMwLTE3LjctMTQuMy0zMi0zMi0zMkg0NzNMMzU1LjcgMTg2LjJhOC4xNSA4LjE1IDAgMCAwLTUuNS0yLjJIOTZjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjU5MmMwIDE3LjcgMTQuMyAzMiAzMiAzMmg2OThjMTMgMCAyNC44LTcuOSAyOS43LTIwbDEzNC0zMzJjMS41LTMuOCAyLjMtNy45IDIuMy0xMiAwLTE3LjctMTQuMy0zMi0zMi0zMnptLTE4MCAwSDIzOGMtMTMgMC0yNC44IDcuOS0yOS43IDIwTDEzNiA2NDMuMlYyNTZoMTg4LjVsMTE5LjYgMTE0LjRINzQ4VjQ0NHpcIj48L3BhdGg+J1xufTsiLCAiLy8gQWlGaWxsRm9sZGVyXG5leHBvcnQgZGVmYXVsdCB7XG4gIGE6IHtcbiAgICB2aWV3Qm94OiAnMCAwIDEwMjQgMTAyNCdcbiAgfSxcbiAgYzogJzxwYXRoIGQ9XCJNODgwIDI5OC40SDUyMUw0MDMuNyAxODYuMmE4LjE1IDguMTUgMCAwIDAtNS41LTIuMkgxNDRjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjU5MmMwIDE3LjcgMTQuMyAzMiAzMiAzMmg3MzZjMTcuNyAwIDMyLTE0LjMgMzItMzJWMzMwLjRjMC0xNy43LTE0LjMtMzItMzItMzJ6XCI+PC9wYXRoPidcbn07IiwgIi8vIEZhQnJhbmRzQ3NzM1xuZXhwb3J0IGRlZmF1bHQge1xuICBhOiB7XG4gICAgdmlld0JveDogJzAgMCA1MTIgNTEyJ1xuICB9LFxuICBjOiAnPHBhdGggZD1cIk00ODAgMzJsLTY0IDM2OC0yMjMuMyA4MEwwIDQwMGwxOS42LTk0LjhoODJsLTggNDAuNkwyMTAgMzkwLjJsMTM0LjEtNDQuNCAxOC44LTk3LjFIMjkuNWwxNi04MmgzMzMuN2wxMC41LTUyLjdINTYuM2wxNi4zLTgySDQ4MHpcIj48L3BhdGg+J1xufTsiLCAiLy8gVnNjQ2lyY2xlRmlsbFxuZXhwb3J0IGRlZmF1bHQge1xuICBhOiB7XG4gICAgdmlld0JveDogJzAgMCAxNiAxNicsXG4gICAgZmlsbDogJ2N1cnJlbnRDb2xvcidcbiAgfSxcbiAgYzogJzxwYXRoIGQ9XCJNOCA0Yy4zNjcgMCAuNzIxLjA0OCAxLjA2My4xNDVhMy45NDMgMy45NDMgMCAwIDEgMS43NjIgMS4wMzEgMy45NDQgMy45NDQgMCAwIDEgMS4wMyAxLjc2MmMuMDk3LjM0LjE0NS42OTUuMTQ1IDEuMDYyIDAgLjM2Ny0uMDQ4LjcyMS0uMTQ1IDEuMDYzYTMuOTQgMy45NCAwIDAgMS0xLjAzIDEuNzY1IDQuMDE3IDQuMDE3IDAgMCAxLTEuNzYyIDEuMDMxQzguNzIgMTEuOTUzIDguMzY3IDEyIDggMTJzLS43MjEtLjA0Ny0xLjA2My0uMTRhNC4wNTYgNC4wNTYgMCAwIDEtMS43NjUtMS4wMzJBNC4wNTUgNC4wNTUgMCAwIDEgNC4xNCA5LjA2MiAzLjk5MiAzLjk5MiAwIDAgMSA0IDhjMC0uMzY3LjA0Ny0uNzIxLjE0LTEuMDYzYTQuMDIgNC4wMiAwIDAgMSAuNDA3LS45NTNBNC4wODkgNC4wODkgMCAwIDEgNS45OCA0LjU0NmEzLjk0IDMuOTQgMCAwIDEgLjk1Ny0uNDAxQTMuODkgMy44OSAwIDAgMSA4IDR6XCI+PC9wYXRoPidcbn07IiwgIjxzY3JpcHQgbGFuZz1cInRzXCI+XG4gIGltcG9ydCB7IGZpbGVTdGF0dXMgfSBmcm9tICdAY29tcG9uZW50cy9RdWlja0Nzcy9TaWRlYmFyLnN2ZWx0ZSc7XG4gIGltcG9ydCB7IHNlbGVjdGVkRmlsZSB9IGZyb20gJ0B1aS90YWJzL1F1aWNrQ3NzLnN2ZWx0ZSc7XG4gIGltcG9ydCBJY29uIGZyb20gJ3N2ZWx0ZS1pY29ucy1wYWNrL0ljb24uc3ZlbHRlJztcbiAgaW1wb3J0IEZhQnJhbmRzQ3NzMyBmcm9tICdzdmVsdGUtaWNvbnMtcGFjay9mYS9GYUJyYW5kc0NzczMnO1xuICBpbXBvcnQgVnNjQ2lyY2xlRmlsbCBmcm9tICdzdmVsdGUtaWNvbnMtcGFjay92c2MvVnNjQ2lyY2xlRmlsbCc7XG5cbiAgZXhwb3J0IGxldCBmaWxlOiBRdWlja0Nzc0ZpbGU7XG4gIGV4cG9ydCBsZXQgcmVuYW1lID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgZGVwdGggPSAwO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcbiAgICBzZWxlY3RlZEZpbGUuc2V0KGZpbGUpO1xuICB9XG5cbiAgbGV0IGlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAkOiBpZiAoaW5wdXQpIHtcbiAgICBpbnB1dC5mb2N1cygpO1xuICAgIGlucHV0LnNldFNlbGVjdGlvblJhbmdlKDAsIGlucHV0LnZhbHVlLmxlbmd0aCAtIDQpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlUmVuYW1lKCkge1xuICAgIGlmIChyZW5hbWUgJiYgaW5wdXQ/LnZhbHVlICE9PSBmaWxlLm5hbWUpXG4gICAgICBQb3Bjb3JuTmF0aXZlLnJlbmFtZVF1aWNrQ3NzTm9kZShmaWxlLmxvY2F0aW9uLCBpbnB1dC52YWx1ZSk7XG5cbiAgICByZW5hbWUgPSAhcmVuYW1lO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZUtleVByZXNzKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgIGNhc2UgJ0YyJzpcbiAgICAgICAgdG9nZ2xlUmVuYW1lKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgIGlmIChyZW5hbWUpIHRvZ2dsZVJlbmFtZSgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48YnV0dG9uXG4gIGNsYXNzPVwiaXRlbSBmaWxlXCJcbiAgc3R5bGU9XCItLWRlcHRoOiB7ZGVwdGh9XCJcbiAgb246Y2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgb246c3VibWl0fHN0b3BQcm9wYWdhdGlvbj17aGFuZGxlU3VibWl0fVxuICBvbjpkYmxjbGljaz17dG9nZ2xlUmVuYW1lfVxuICBvbjprZXlkb3dufHNlbGZ8c3RvcFByb3BhZ2F0aW9uPXtoYW5kbGVLZXlQcmVzc31cbj5cbiAgPEljb24gY29sb3I9XCJjdXJyZW50Q29sb3JcIiBzcmM9e0ZhQnJhbmRzQ3NzM30gLz5cbiAgeyNpZiByZW5hbWV9XG4gICAgPGlucHV0XG4gICAgICBjbGFzcz1cInJlbmFtZS1pbnB1dFwiXG4gICAgICBhdXRvY29ycmVjdD1cIm9mZlwiXG4gICAgICBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiXG4gICAgICBzcGVsbGNoZWNrPVwiZmFsc2VcIlxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgdmFsdWU9e2ZpbGUubmFtZX1cbiAgICAgIGJpbmQ6dGhpcz17aW5wdXR9XG4gICAgICBvbjprZXlkb3duPXtoYW5kbGVLZXlQcmVzc31cbiAgICAgIG9uOmZvY3Vzb3V0PXtyZW5hbWUgJiYgdG9nZ2xlUmVuYW1lfVxuICAgIC8+XG4gIHs6ZWxzZX1cbiAgICA8c3BhbiBjbGFzcz1cIml0ZW0tbmFtZVwiPntmaWxlLm5hbWV9PC9zcGFuPlxuICB7L2lmfVxuICB7I2lmICRmaWxlU3RhdHVzPy5bZmlsZS5sb2NhdGlvbl0/LnVuc2F2ZWR9XG4gICAgPEljb24gY29sb3I9XCJjdXJyZW50Q29sb3JcIiBzcmM9e1ZzY0NpcmNsZUZpbGx9IC8+XG4gIHsvaWZ9XG48L2J1dHRvbj5cbiIsICI8c2NyaXB0IGxhbmc9XCJ0c1wiPlxuICBpbXBvcnQgeyBzZWxlY3RlZEZvbGRlciB9IGZyb20gJ0B1aS90YWJzL1F1aWNrQ3NzLnN2ZWx0ZSc7XG4gIGltcG9ydCBJY29uIGZyb20gJ3N2ZWx0ZS1pY29ucy1wYWNrL0ljb24uc3ZlbHRlJztcbiAgaW1wb3J0IEFpRmlsbEZvbGRlck9wZW4gZnJvbSAnc3ZlbHRlLWljb25zLXBhY2svYWkvQWlGaWxsRm9sZGVyT3Blbic7XG4gIGltcG9ydCBBaUZpbGxGb2xkZXIgZnJvbSAnc3ZlbHRlLWljb25zLXBhY2svYWkvQWlGaWxsRm9sZGVyJztcbiAgaW1wb3J0IEZpbGUgZnJvbSAnLi9GaWxlLnN2ZWx0ZSc7XG5cbiAgZXhwb3J0IGxldCBmb2xkZXI6IFF1aWNrQ3NzRm9sZGVyO1xuICBleHBvcnQgbGV0IHJlbmFtZSA9IGZhbHNlO1xuICBleHBvcnQgbGV0IG9wZW5lZCA9IHRydWU7XG4gIGV4cG9ydCBsZXQgZGVwdGggPSAwO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcbiAgICBvcGVuZWQgPSAhb3BlbmVkO1xuICAgIHNlbGVjdGVkRm9sZGVyLnNldChmb2xkZXIpO1xuICB9XG5cbiAgbGV0IGlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAkOiBpZiAoaW5wdXQpIHtcbiAgICBpbnB1dC5mb2N1cygpO1xuICAgIGlucHV0LnNldFNlbGVjdGlvblJhbmdlKDAsIGlucHV0LnZhbHVlLmxlbmd0aCk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVSZW5hbWUoKSB7XG4gICAgaWYgKHJlbmFtZSAmJiBpbnB1dD8udmFsdWUgIT09IGZvbGRlci5uYW1lKVxuICAgICAgUG9wY29ybk5hdGl2ZS5yZW5hbWVRdWlja0Nzc05vZGUoZm9sZGVyLmxvY2F0aW9uLCBpbnB1dC52YWx1ZSk7XG5cbiAgICByZW5hbWUgPSAhcmVuYW1lO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZUtleVByZXNzKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgIGNhc2UgJ0YyJzpcbiAgICAgICAgdG9nZ2xlUmVuYW1lKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgIGlmIChyZW5hbWUpIHRvZ2dsZVJlbmFtZSgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48YnV0dG9uXG4gIGNsYXNzPVwiaXRlbSBmb2xkZXJcIlxuICBzdHlsZT1cIi0tZGVwdGg6IHtkZXB0aH1cIlxuICBkYXRhLW9wZW5lZD17b3BlbmVkfVxuICBvbjpjbGljaz17aGFuZGxlU3VibWl0fVxuICBvbjpzdWJtaXR8c3RvcFByb3BhZ2F0aW9uPXtoYW5kbGVTdWJtaXR9XG4gIG9uOmRibGNsaWNrPXt0b2dnbGVSZW5hbWV9XG4gIG9uOmtleWRvd258c2VsZnxzdG9wUHJvcGFnYXRpb249e2hhbmRsZUtleVByZXNzfVxuPlxuICB7I2lmIG9wZW5lZH1cbiAgICA8SWNvbiBjb2xvcj1cImN1cnJlbnRDb2xvclwiIHNyYz17QWlGaWxsRm9sZGVyT3Blbn0gLz5cbiAgezplbHNlfVxuICAgIDxJY29uIGNvbG9yPVwiY3VycmVudENvbG9yXCIgc3JjPXtBaUZpbGxGb2xkZXJ9IC8+XG4gIHsvaWZ9XG4gIHsjaWYgcmVuYW1lfVxuICAgIDxpbnB1dFxuICAgICAgY2xhc3M9XCJyZW5hbWUtaW5wdXRcIlxuICAgICAgYXV0b2NvcnJlY3Q9XCJvZmZcIlxuICAgICAgYXV0b2NhcGl0YWxpemU9XCJvZmZcIlxuICAgICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIHZhbHVlPXtmb2xkZXIubmFtZX1cbiAgICAgIGJpbmQ6dGhpcz17aW5wdXR9XG4gICAgICBvbjprZXlkb3duPXtoYW5kbGVLZXlQcmVzc31cbiAgICAgIG9uOmZvY3Vzb3V0PXtyZW5hbWUgJiYgdG9nZ2xlUmVuYW1lfVxuICAgIC8+XG4gIHs6ZWxzZX1cbiAgICA8c3BhbiBjbGFzcz1cIml0ZW0tbmFtZVwiPntmb2xkZXIubmFtZX08L3NwYW4+XG4gIHsvaWZ9XG48L2J1dHRvbj5cbnsjaWYgb3BlbmVkfVxuICB7I2VhY2ggZm9sZGVyLmZpbGVzIGFzIGl0ZW19XG4gICAgeyNpZiAnZmlsZXMnIGluIGl0ZW19XG4gICAgICA8c3ZlbHRlOnNlbGYgZm9sZGVyPXtpdGVtfSBkZXB0aD17ZGVwdGggKyAxfSAvPlxuICAgIHs6ZWxzZX1cbiAgICAgIDxGaWxlIGZpbGU9e2l0ZW19IGRlcHRoPXtkZXB0aCArIDF9IC8+XG4gICAgey9pZn1cbiAgey9lYWNofVxuey9pZn1cblxuPHN0eWxlPlxuICA6Z2xvYmFsKC5pdGVtKSB7XG4gICAgYWxsOiB1bnNldDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcbiAgICBnYXA6IDAuMjVlbTtcbiAgICBibG9jay1zaXplOiAxZW07XG4gICAgaW5saW5lLXNpemU6IGNhbGMoMTAwJSAtIDFyZW0gKiB2YXIoLS1kZXB0aCwgMCkpO1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKDFyZW0gKiB2YXIoLS1kZXB0aCwgMCkpO1xuICAgIHBhZGRpbmctYmxvY2s6IDAuMjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgOmdsb2JhbCguaXRlbSA+IHN2Zykge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG5cbiAgOmdsb2JhbCguaXRlbSA+IC5yZW5hbWUtaW5wdXQpIHtcbiAgICBhbGw6IHVuc2V0O1xuICAgIGlubGluZS1zaXplOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbjwvc3R5bGU+XG4iLCAiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCIgbGFuZz1cInRzXCI+XG4gIGltcG9ydCB7IHdyaXRhYmxlIH0gZnJvbSAnc3ZlbHRlL3N0b3JlJztcbiAgZXhwb3J0IGNvbnN0IGZpbGVTdGF0dXMgPSB3cml0YWJsZTx7IFtsb2NhdGlvbjogc3RyaW5nXTogUXVpY2tDc3NVSUZpbGVTdGF0dXMgfT4oXG4gICAge31cbiAgKTtcbjwvc2NyaXB0PlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuICBpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcbiAgaW1wb3J0IEljb24gZnJvbSAnc3ZlbHRlLWljb25zLXBhY2svSWNvbi5zdmVsdGUnO1xuICBpbXBvcnQgVnNjTmV3RmlsZSBmcm9tICdzdmVsdGUtaWNvbnMtcGFjay92c2MvVnNjTmV3RmlsZSc7XG4gIGltcG9ydCBWc2NOZXdGb2xkZXIgZnJvbSAnc3ZlbHRlLWljb25zLXBhY2svdnNjL1ZzY05ld0ZvbGRlcic7XG4gIGltcG9ydCBWc2NSZW1vdmUgZnJvbSAnc3ZlbHRlLWljb25zLXBhY2svdnNjL1ZzY1JlbW92ZSc7XG4gIGltcG9ydCB7IGxhdGVzdFNlbGVjdGlvbiwgc2VsZWN0ZWRGb2xkZXIgfSBmcm9tICdAdWkvdGFicy9RdWlja0Nzcy5zdmVsdGUnO1xuICBpbXBvcnQgRm9sZGVyIGZyb20gJy4vRm9sZGVyLnN2ZWx0ZSc7XG5cbiAgbGV0IGVsZW1lbnREaXY6IEhUTUxEaXZFbGVtZW50O1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCk7XG5cbiAgb25Nb3VudCgoKSA9PiB7XG4gICAgY29uc3QgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKG11dGF0aW9uKSA9PiB7XG4gICAgICBkaXNwYXRjaCgncmVzaXplJywgbXV0YXRpb25bMF0pO1xuICAgIH0pO1xuICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZWxlbWVudERpdik7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH07XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZURlbGV0ZSgpIHtcbiAgICBQb3Bjb3JuTmF0aXZlLmRlbGV0ZVF1aWNrQ3NzTm9kZSgkbGF0ZXN0U2VsZWN0aW9uLmxvY2F0aW9uKTtcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVOZXdGaWxlKCkge1xuICAgIFBvcGNvcm5OYXRpdmUuY3JlYXRlUXVpY2tDc3NOb2RlKCRzZWxlY3RlZEZvbGRlci5sb2NhdGlvbiwgJ2ZpbGUnKTtcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVOZXdGb2xkZXIoKSB7XG4gICAgUG9wY29ybk5hdGl2ZS5jcmVhdGVRdWlja0Nzc05vZGUoJHNlbGVjdGVkRm9sZGVyLmxvY2F0aW9uLCAnZm9sZGVyJyk7XG4gIH1cbjwvc2NyaXB0PlxuXG48ZGl2IGNsYXNzPVwic2lkZWJhclwiIHN0eWxlPVwid2lkdGg6IDIyY2g7XCIgYmluZDp0aGlzPXtlbGVtZW50RGl2fT5cbiAgPGRpdiBjbGFzcz1cImFjdGlvbi1iYXJcIj5cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cImFjdGlvblwiXG4gICAgICBkYXRhLWFjdGlvbj1cImRlbGV0ZVwiXG4gICAgICBvbjpjbGljaz17aGFuZGxlRGVsZXRlfVxuICAgICAgb246c3VibWl0PXtoYW5kbGVEZWxldGV9XG4gICAgPlxuICAgICAgPEljb24gY29sb3I9XCJjdXJyZW50Q29sb3JcIiBzcmM9e1ZzY1JlbW92ZX0gLz5cbiAgICA8L2J1dHRvbj5cbiAgICA8c3BhbiBjbGFzcz1cInNlbGVjdGVkLWZpbGVcIj57JGxhdGVzdFNlbGVjdGlvbi5uYW1lfTwvc3Bhbj5cblxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzPVwiYWN0aW9uXCJcbiAgICAgIGRhdGEtYWN0aW9uPVwibmV3LWZpbGVcIlxuICAgICAgb246Y2xpY2s9e2hhbmRsZU5ld0ZpbGV9XG4gICAgICBvbjpzdWJtaXQ9e2hhbmRsZU5ld0ZpbGV9XG4gICAgPlxuICAgICAgPEljb24gY29sb3I9XCJjdXJyZW50Q29sb3JcIiBzcmM9e1ZzY05ld0ZpbGV9IC8+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3M9XCJhY3Rpb25cIlxuICAgICAgZGF0YS1hY3Rpb249XCJuZXctZm9sZGVyXCJcbiAgICAgIG9uOmNsaWNrPXtoYW5kbGVOZXdGb2xkZXJ9XG4gICAgICBvbjpzdWJtaXQ9e2hhbmRsZU5ld0ZvbGRlcn1cbiAgICA+XG4gICAgICA8SWNvbiBjb2xvcj1cImN1cnJlbnRDb2xvclwiIHNyYz17VnNjTmV3Rm9sZGVyfSAvPlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbiAgPEZvbGRlciBmb2xkZXI9e3dpbmRvdy5Qb3Bjb3JuLnF1aWNrQ3NzfSAvPlxuPC9kaXY+XG5cbjxzdHlsZT5cbiAgLnNpZGViYXIge1xuICAgIG1pbi1pbmxpbmUtc2l6ZTogMjBjaDtcbiAgICBtYXgtaW5saW5lLXNpemU6IDc1Y2g7XG4gICAgcmVzaXplOiBob3Jpem9udGFsO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wb3AtYmctbm9ybWFsKTtcbiAgfVxuXG4gIC5hY3Rpb24tYmFyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0byBhdXRvO1xuICAgIGdhcDogMC4yNXJlbTtcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogLTAuNXJlbTtcbiAgICBtYXJnaW4taW5saW5lOiAtMC41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBvcC1iZy1ub3JtYWwpO1xuICB9XG4gIC5hY3Rpb24tYmFyIGJ1dHRvbiB7XG4gICAgYWxsOiB1bnNldDtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5hY3Rpb24tYmFyIGJ1dHRvbiA+IDpnbG9iYWwoc3ZnKSB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuPC9zdHlsZT5cbiIsICJpbXBvcnQgeyBjb21tZW50cywgY29uZmlnIH0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgcmVyZW5kZXJTaWRlYmFyLCBzZWxlY3RlZEZvbGRlciB9IGZyb20gJ0B1aS90YWJzL1F1aWNrQ3NzLnN2ZWx0ZSc7XG5pbXBvcnQgTG9nZ2VyTW9kdWxlIGZyb20gJ0Bjb21tb24vbG9nZ2VyJztcbmNvbnN0IExvZ2dlciA9IG5ldyBMb2dnZXJNb2R1bGUoJ1F1aWNrQ1NTJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1aWNrQ3NzIHtcbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5wb3B1bGF0ZVF1aWNrQ3NzKCk7XG4gICAgdGhpcy53YXRjaFF1aWNrQ3NzKCk7XG4gICAgc2VsZWN0ZWRGb2xkZXIuc2V0KHdpbmRvdy5Qb3Bjb3JuLnF1aWNrQ3NzKTtcbiAgfVxuXG4gIGFzeW5jIHBvcHVsYXRlUXVpY2tDc3MoKSB7XG4gICAgLy8gVE9ETzogRml4IEBpbXBvcnRzIHJlbG9hZGluZyBldmVyeSB0aW1lIHF1aWNrY3NzIGNoYW5nZXNcbiAgICBmdW5jdGlvbiBjb21waWxlUXVpY2tDc3MoZm9sZGVyOiBRdWlja0Nzc0ZvbGRlcikge1xuICAgICAgbGV0IGNvbnRlbnRzID0gJyc7XG4gICAgICBjb25zdCBpbXBvcnRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgICBjb25zdCBpbXBvcnRSZWdleCA9IC9eQGltcG9ydFxccysoPzp1cmxcXChbJ1wiXT8uKj9bJ1wiXT9cXCl8WydcIl0uKj9bJ1wiXSkoXFxzK1teO10rPyk/OyQvZ21pO1xuICAgICAgZm9yIChjb25zdCBub2RlIG9mIGZvbGRlci5maWxlcykge1xuICAgICAgICBpZiAoJ2ZpbGVzJyBpbiBub2RlKSBjb250ZW50cyArPSBjb21waWxlUXVpY2tDc3Mobm9kZSk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGNvbnRlbnROb0ltcG9ydHMgPSBub2RlLmNvbnRlbnQucmVwbGFjZShpbXBvcnRSZWdleCwgKG1hdGNoKSA9PiB7XG4gICAgICAgICAgICBpbXBvcnRzLnB1c2gobWF0Y2gucmVwbGFjZSgvOyQvLCAnJykgKyAnOyAvKiAnICsgbm9kZS5sb2NhdGlvbiArICcgKi8nKTtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmICghL15cXHMqJC8udGVzdChjb250ZW50Tm9JbXBvcnRzKSlcbiAgICAgICAgICAgIGNvbnRlbnRzICs9ICdcXG5cXG4vKiAnICsgbm9kZS5sb2NhdGlvbiArICcgKi9cXG4nICsgY29udGVudE5vSW1wb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW1wb3J0cy5qb2luKCdcXG4nKSArIGNvbnRlbnRzO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBpbGVkQ3NzID0gY29tcGlsZVF1aWNrQ3NzKFBvcGNvcm4ucXVpY2tDc3MpO1xuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcGNvcm4tcXVpY2tjc3MnKTtcbiAgICBpZiAoIXN0eWxlKSB7XG4gICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICBzdHlsZS5pZCA9ICdwb3Bjb3JuLXF1aWNrY3NzJztcbiAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gY29tcGlsZWRDc3M7XG4gICAgICBzdHlsZS5kYXRhc2V0LnBvcGNvcm4gPSAndHJ1ZSc7XG4gICAgICBzdHlsZS5kYXRhc2V0LmluZm8gPVxuICAgICAgICAnVGhpcyB3YXMgYWRkZWQgaGVyZSBzbyBpdCBjYW4gb3ZlcnJpZGUgdGhlIG90aGVyIHN0eWxlcy4nO1xuICAgICAgY29tbWVudHMuZW5kLmFmdGVyKHN0eWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBjb21waWxlZENzcztcbiAgICB9XG4gIH1cblxuICBhc3luYyB3YXRjaFF1aWNrQ3NzKCkge1xuICAgIFBvcGNvcm5OYXRpdmUub25RdWlja0Nzc0NoYW5nZSgodXBkYXRlZCkgPT4ge1xuICAgICAgaWYgKGNvbmZpZy52ZXJib3NlKSBMb2dnZXIuZGVidWcoJ1F1aWNrQ1NTIFVwZGF0ZWQnKTtcblxuICAgICAgLy8gVE9ETzogVXNlIGEgcHJveHkgZm9yIHRoaXMgbWF5YmU/XG4gICAgICBQb3Bjb3JuLnF1aWNrQ3NzID0gdXBkYXRlZDtcblxuICAgICAgcmVyZW5kZXJTaWRlYmFyKCk7XG4gICAgICB0aGlzLnBvcHVsYXRlUXVpY2tDc3MoKTtcbiAgICB9KTtcbiAgfVxufVxuIiwgIjwhLS0gVE9ETzogQWRkIFVVSURzIHRvIGVhY2ggdGFiIC0tPlxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbiAgaW1wb3J0IHsgU3ZlbHRlQ29tcG9uZW50IH0gZnJvbSAnc3ZlbHRlJztcbiAgZXhwb3J0IGxldCB0YWJzOiB7IG5hbWU6IHN0cmluZzsgY29tcG9uZW50OiB0eXBlb2YgU3ZlbHRlQ29tcG9uZW50IH1bXTtcblxuICBsZXQgc2VsZWN0ZWRUYWIgPSB0YWJzPy5bMF0/Lm5hbWU7XG4gIGNvbnN0IGxvYWRlZFRhYnM6IHN0cmluZ1tdID0gW3NlbGVjdGVkVGFiXTtcblxuICBmdW5jdGlvbiBzd2l0Y2hUYWJzKHRhYk5hbWU6IHN0cmluZykge1xuICAgIHNlbGVjdGVkVGFiID0gdGFiTmFtZTtcbiAgICBpZiAoIWxvYWRlZFRhYnMuaW5jbHVkZXModGFiTmFtZSkpIGxvYWRlZFRhYnMucHVzaCh0YWJOYW1lKTtcbiAgfVxuPC9zY3JpcHQ+XG5cbjxkaXYgY2xhc3M9XCJ0YWItbGlzdFwiPlxuICB7I2VhY2ggdGFicyBhcyB7IG5hbWUgfX1cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cInRhYlwiXG4gICAgICBkYXRhLXNlbGVjdGVkPXtzZWxlY3RlZFRhYiA9PT0gbmFtZX1cbiAgICAgIG9uOmNsaWNrPXsoKSA9PiBzd2l0Y2hUYWJzKG5hbWUpfVxuICAgICAgb246a2V5cHJlc3M9eygpID0+IHN3aXRjaFRhYnMobmFtZSl9XG4gICAgPlxuICAgICAge25hbWV9XG4gICAgPC9idXR0b24+XG4gIHsvZWFjaH1cbjwvZGl2PlxueyNlYWNoIGxvYWRlZFRhYnMgYXMgdGFiTmFtZX1cbiAge0Bjb25zdCB0YWIgPSB0YWJzLmZpbmQoKHRhYikgPT4gdGFiLm5hbWUgPT09IHRhYk5hbWUpfVxuICA8ZGl2XG4gICAgY2xhc3M9XCJ0YWItd3JhcHBlclwiXG4gICAgZGF0YS1zZWxlY3RlZD17dGFiLm5hbWUgPT09IHNlbGVjdGVkVGFifVxuICAgIGRhdGEtbmFtZT17dGFiLm5hbWV9XG4gID5cbiAgICA8c3ZlbHRlOmNvbXBvbmVudCB0aGlzPXt0YWIuY29tcG9uZW50fSAvPlxuICA8L2Rpdj5cbnsvZWFjaH1cblxuPHN0eWxlPlxuICAvKiBUT0RPOiBNYWtlIHRoaXMgc2Nyb2xsYWJsZSAqL1xuICAudGFiLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxcmVtO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFyZW07XG4gICAgYm9yZGVyLWJsb2NrLWVuZDogMC4yNXJlbSBzb2xpZCB2YXIoLS1wb3AtZ3JheSk7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG5cbiAgLnRhYiB7XG4gICAgYWxsOiB1bnNldDtcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IC0wLjI1cmVtO1xuICAgIGJvcmRlci1ibG9jay1lbmQ6IDAuMjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHZhcigtLXBvcC1pbmFjdGl2ZSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC50YWI6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogaHNsKHZhcigtLXBvcC1ibHVlLWhzbCksIDAuNSk7XG4gICAgY29sb3I6IHZhcigtLXBvcC1ob3Zlcik7XG4gIH1cbiAgLnRhYltkYXRhLXNlbGVjdGVkPSd0cnVlJ10ge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcG9wLWJsdWUpO1xuICAgIGNvbG9yOiB2YXIoLS1wb3AtYWN0aXZlKTtcbiAgfVxuXG4gIC50YWItd3JhcHBlcltkYXRhLXNlbGVjdGVkPSdmYWxzZSddIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG48L3N0eWxlPlxuIiwgIi8vIGh0dHBzOi8vYmV0dGVycHJvZ3JhbW1pbmcucHViL2Z1bGwtZmVhdHVyZWQtaG90a2V5cy1saWJyYXJ5LWluLTIwMC1saW5lcy1vZi1qYXZhc2NyaXB0LWNvZGUtODFhNzRlMzEzOGNjXG5cbmNvbnN0IGlzRXF1YWwgPSAoYSwgYikgPT4ge1xuICBjb25zdCBhS2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuXG4gIGlmIChhS2V5cy5sZW5ndGggIT09IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBhS2V5cy5ldmVyeSgoaykgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIGspICYmIGFba10gPT09IGJba10pO1xufTtcblxuY29uc3QgaXNBcnJheUVxdWFsID0gKGEsIGIpID0+IGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJiBhLmV2ZXJ5KCh2LCBpKSA9PiBpc0VxdWFsKHYsIGJbaV0pKTtcblxuZXhwb3J0IGNvbnN0IG1hdGNoSG90a2V5ID0gKGJ1ZmZlciwgaG90a2V5KSA9PiB7XG4gIGlmIChidWZmZXIubGVuZ3RoIDwgaG90a2V5Lmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGluZGV4RGlmZiA9IGJ1ZmZlci5sZW5ndGggLSBob3RrZXkubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gaG90a2V5Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG4gICAgaWYgKCFpc0VxdWFsKGJ1ZmZlcltpbmRleERpZmYgKyBpXSwgaG90a2V5W2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgYXJyYXlUb09iamVjdCA9IChhcnIpID0+IGFyci5yZWR1Y2UoKG9iaiwga2V5KSA9PiAoeyAuLi5vYmosIFtrZXldOiB0cnVlIH0pLCB7fSk7XG5cbmNvbnN0IGFsbE1vZGlmaWVycyA9IFsnY3RybCcsICdzaGlmdCcsICdhbHQnLCAnbWV0YSddO1xuY29uc3QgaW5kZXhlZE1vZGlmaWVycyA9IGFycmF5VG9PYmplY3QoYWxsTW9kaWZpZXJzKTtcblxuY29uc3QgaXNIb3RrZXlWYWxpZCA9IChob3RrZXkpID0+IE9iamVjdC5rZXlzKGhvdGtleSkuZmlsdGVyKChrKSA9PiAhaW5kZXhlZE1vZGlmaWVyc1trXSkubGVuZ3RoID09PSAxO1xuXG5jb25zdCB2YWxpZGF0ZSA9ICh2YWx1ZSwgbWVzc2FnZSkgPT4ge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9XG59O1xuXG5jb25zdCB2YWxpZGF0ZVR5cGUgPSAodmFsdWUsIG5hbWUsIHR5cGUpID0+IHtcbiAgdmFsaWRhdGUodHlwZW9mIHZhbHVlID09PSB0eXBlLCBgVGhlICR7bmFtZX0gbXVzdCBiZSBhICR7dHlwZX07IGdpdmVuICR7dHlwZW9mIHZhbHVlfWApO1xufTtcblxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZUhvdGtleSA9IChob3RrZXkpID0+XG4gIGhvdGtleS5zcGxpdCgvICsvZykubWFwKChwYXJ0KSA9PiB7XG4gICAgY29uc3QgYXJyID0gcGFydC5zcGxpdCgnKycpLmZpbHRlcihCb29sZWFuKTtcbiAgICBjb25zdCByZXN1bHQgPSBhcnJheVRvT2JqZWN0KGFycik7XG5cbiAgICB2YWxpZGF0ZShPYmplY3Qua2V5cyhyZXN1bHQpLmxlbmd0aCA+PSBhcnIubGVuZ3RoLCBgSG90a2V5IGNvbWJpbmF0aW9uIGhhcyBkdXBsaWNhdGVzIFwiJHtob3RrZXl9XCJgKTtcblxuICAgIHZhbGlkYXRlKGlzSG90a2V5VmFsaWQocmVzdWx0KSwgYEludmFsaWQgaG90a2V5IGNvbWJpbmF0aW9uOiBcIiR7aG90a2V5fVwiYCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KTtcblxuY29uc3QgdmFsaWRhdGVMaXN0ZW5lckFyZ3MgPSAoaG90a2V5LCBjYWxsYmFjaykgPT4ge1xuICB2YWxpZGF0ZVR5cGUoaG90a2V5LCAnaG90a2V5JywgJ3N0cmluZycpO1xuICB2YWxpZGF0ZVR5cGUoY2FsbGJhY2ssICdjYWxsYmFjaycsICdmdW5jdGlvbicpO1xufTtcblxuY29uc3QgY3JlYXRlTGlzdGVuZXJzRm4gPSAobGlzdGVuZXJzLCBmbikgPT4gKGhvdGtleSwgY2FsbGJhY2spID0+IHtcbiAgdmFsaWRhdGVMaXN0ZW5lckFyZ3MoaG90a2V5LCBjYWxsYmFjayk7XG4gIGZuKGxpc3RlbmVycywgaG90a2V5LCBjYWxsYmFjayk7XG59O1xuXG5jb25zdCByZWdpc3Rlckxpc3RlbmVyID0gKGxpc3RlbmVycywgaG90a2V5LCBjYWxsYmFjaykgPT4ge1xuICBsaXN0ZW5lcnMucHVzaCh7IGhvdGtleTogbm9ybWFsaXplSG90a2V5KGhvdGtleSksIGNhbGxiYWNrIH0pO1xufTtcblxuY29uc3QgdW5yZWdpc3Rlckxpc3RlbmVyID0gKGxpc3RlbmVycywgaG90a2V5LCBjYWxsYmFjaykgPT4ge1xuICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplSG90a2V5KGhvdGtleSk7XG5cbiAgY29uc3QgaW5kZXggPSBsaXN0ZW5lcnMuZmluZEluZGV4KFxuICAgIChsKSA9PiBsLmNhbGxiYWNrID09PSBjYWxsYmFjayAmJiBpc0FycmF5RXF1YWwobm9ybWFsaXplZCwgbC5ob3RrZXkpXG4gICk7XG5cbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIGxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59O1xuXG5jb25zdCBkZWJvdW5jZSA9IChmbiwgdGltZSkgPT4ge1xuICBsZXQgdGltZW91dElkID0gbnVsbDtcblxuICByZXR1cm4gKCkgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZm4sIHRpbWUpO1xuICB9O1xufTtcblxuY29uc3QgZ2V0S2V5ID0gKGtleSkgPT4ge1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgJysnOlxuICAgICAgcmV0dXJuICdwbHVzJztcbiAgICBjYXNlICcgJzpcbiAgICAgIHJldHVybiAnc3BhY2UnO1xuICAgIGRlZmF1bHQ6XG4gICAgICAvLyBtYXkgYmUgYW4gdXBwZXJjYXNlZCBsZXR0ZXIsIGluIGNhc2UgdGhlIHNoaWZ0IGlzIGFjdGl2ZVxuICAgICAgcmV0dXJuIGtleS50b0xvd2VyQ2FzZSgpO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVLZXlEb3duTGlzdGVuZXIgPSAobGlzdGVuZXJzLCBkZWJvdW5jZVRpbWUpID0+IHtcbiAgbGV0IGJ1ZmZlciA9IFtdO1xuXG4gIGNvbnN0IGNsZWFyQnVmZmVyRGVib3VuY2VkID0gZGVib3VuY2UoKCkgPT4ge1xuICAgIGJ1ZmZlciA9IFtdO1xuICB9LCBkZWJvdW5jZVRpbWUpO1xuXG4gIHJldHVybiAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQucmVwZWF0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmdldE1vZGlmaWVyU3RhdGUoZXZlbnQua2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNsZWFyQnVmZmVyRGVib3VuY2VkKCk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHtcbiAgICAgIFtnZXRLZXkoZXZlbnQua2V5KV06IHRydWUsXG4gICAgfTtcblxuICAgIGFsbE1vZGlmaWVycy5mb3JFYWNoKChtKSA9PiB7XG4gICAgICBpZiAoZXZlbnRbYCR7bX1LZXlgXSkge1xuICAgICAgICBkZXNjcmlwdGlvblttXSA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBidWZmZXIucHVzaChkZXNjcmlwdGlvbik7XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgIGlmIChtYXRjaEhvdGtleShidWZmZXIsIGxpc3RlbmVyLmhvdGtleSkpIHtcbiAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2soZXZlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xufTtcblxuY29uc3QgdmFsaWRhdGVDb250ZXh0ID0gKG9wdGlvbnMpID0+IHtcbiAgY29uc3QgeyBkZWJvdW5jZVRpbWUgPSA1MDAsIGF1dG9FbmFibGUgPSB0cnVlIH0gPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhbGlkYXRlVHlwZShkZWJvdW5jZVRpbWUsICdkZWJvdW5jZVRpbWUnLCAnbnVtYmVyJyk7XG4gIHZhbGlkYXRlKGRlYm91bmNlVGltZSA+IDAsICdkZWJvdW5jZVRpbWUgbXVzdCBiZSA+IDAnKTtcbiAgdmFsaWRhdGVUeXBlKGF1dG9FbmFibGUsICdhdXRvRW5hYmxlJywgJ2Jvb2xlYW4nKTtcblxuICByZXR1cm4geyBkZWJvdW5jZVRpbWUsIGF1dG9FbmFibGUgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDb250ZXh0ID0gKG9wdGlvbnMpID0+IHtcbiAgY29uc3QgeyBkZWJvdW5jZVRpbWUsIGF1dG9FbmFibGUgfSA9IHZhbGlkYXRlQ29udGV4dChvcHRpb25zKTtcblxuICBjb25zdCBsaXN0ZW5lcnMgPSBbXTtcbiAgY29uc3Qga2V5RG93bkxpc3RlbmVyID0gY3JlYXRlS2V5RG93bkxpc3RlbmVyKGxpc3RlbmVycywgZGVib3VuY2VUaW1lKTtcblxuICBjb25zdCBlbmFibGUgPSAoKSA9PiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5RG93bkxpc3RlbmVyKTtcbiAgY29uc3QgZGlzYWJsZSA9ICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlEb3duTGlzdGVuZXIpO1xuXG4gIGlmIChhdXRvRW5hYmxlKSB7XG4gICAgZW5hYmxlKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlZ2lzdGVyOiBjcmVhdGVMaXN0ZW5lcnNGbihsaXN0ZW5lcnMsIHJlZ2lzdGVyTGlzdGVuZXIpLFxuICAgIHVucmVnaXN0ZXI6IGNyZWF0ZUxpc3RlbmVyc0ZuKGxpc3RlbmVycywgdW5yZWdpc3Rlckxpc3RlbmVyKSxcbiAgICBlbmFibGUsXG4gICAgZGlzYWJsZSxcbiAgfTtcbn07XG4iLCAiPHNjcmlwdCBsYW5nPVwidHNcIj5cbiAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uJztcbiAgaW1wb3J0IFRhYlZpZXcgZnJvbSAnLi9jb21wb25lbnRzL1RhYlZpZXcuc3ZlbHRlJztcbiAgaW1wb3J0IFRoZW1lc1RhYiBmcm9tICcuL3RhYnMvVGhlbWVzLnN2ZWx0ZSc7XG4gIGltcG9ydCBRdWlja0Nzc1RhYiBmcm9tICcuL3RhYnMvUXVpY2tDc3Muc3ZlbHRlJztcbiAgaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJy4uL3V0aWxzL2hvdGtleXMnO1xuXG4gIGxldCBkaWFsb2c6IEhUTUxEaWFsb2dFbGVtZW50O1xuXG4gIGxldCBpc09wZW5lZCA9IGZhbHNlO1xuICBmdW5jdGlvbiB0b2dnbGVVSSgpIHtcbiAgICBpZiAoaXNPcGVuZWQpIGRpYWxvZy5jbG9zZSgpO1xuICAgIGVsc2UgZGlhbG9nLnNob3dNb2RhbCgpO1xuXG4gICAgaXNPcGVuZWQgPSAhaXNPcGVuZWQ7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXQucG9wY29yblVpT3BlbiA9IGlzT3BlbmVkLnRvU3RyaW5nKCk7XG4gIH1cblxuICBvbk1vdW50KCgpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7IGF1dG9FbmFibGU6IHRydWUgfSk7XG4gICAgY29udGV4dC5yZWdpc3Rlcihjb25maWcuaG90a2V5LCAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdG9nZ2xlVUkoKTtcbiAgICB9KTtcbiAgICBjb250ZXh0LnJlZ2lzdGVyKCdlc2NhcGUnLCAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGlmIChpc09wZW5lZCkge1xuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRvZ2dsZVVJKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IHRhYnMgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ1RoZW1lcycsXG4gICAgICBjb21wb25lbnQ6IFRoZW1lc1RhYixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdRdWlja0NTUycsXG4gICAgICBjb21wb25lbnQ6IFF1aWNrQ3NzVGFiLFxuICAgIH0sXG4gIF07XG48L3NjcmlwdD5cblxuPGRpYWxvZyBiaW5kOnRoaXM9e2RpYWxvZ30gY2xhc3M9XCJQb3Bjb3JuVUktZGlhbG9nXCI+XG4gIDxUYWJWaWV3IHt0YWJzfSAvPlxuPC9kaWFsb2c+XG5cbjxzdHlsZT5cbiAgOmdsb2JhbCg6d2hlcmUoLlBvcGNvcm5VSS1kaWFsb2cgOm5vdChzdmcsIHN2ZyAqKSkpIHtcbiAgICBhbGw6IHJldmVydDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG4gIDpnbG9iYWwoOndoZXJlKC5Qb3Bjb3JuVUktZGlhbG9nIDpmb2N1cy12aXNpYmxlKSkge1xuICAgIG91dGxpbmU6IGF1dG8gMC4yNXJlbSAtd2Via2l0LWZvY3VzLXJpbmctY29sb3IgIWltcG9ydGFudDtcbiAgICBvdXRsaW5lLW9mZnNldDogMC4yNWVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuUG9wY29yblVJLWRpYWxvZyB7XG4gICAgLS1wb3AtaW5hY3RpdmU6IGhzbCgwLCAwJSwgNjUlKTtcbiAgICAtLXBvcC1ob3ZlcjogaHNsKDAsIDAlLCA5MCUpO1xuICAgIC0tcG9wLWFjdGl2ZTogaHNsKDAsIDAlLCAxMDAlKTtcblxuICAgIC0tcG9wLWdyYXk6IHZhcigtLXBvcC1pbmFjdGl2ZSk7XG4gICAgLS1wb3AtcmVkLWhzbDogMCwgNzUlLCA1NSU7XG4gICAgLS1wb3AtcmVkOiBoc2wodmFyKC0tcG9wLXJlZC1oc2wpKTtcbiAgICAtLXBvcC1ncmVlbi1oc2w6IDEyOCwgMTAwJSwgMzUlO1xuICAgIC0tcG9wLWdyZWVuOiBoc2wodmFyKC0tcG9wLWdyZWVuLWhzbCkpO1xuICAgIC0tcG9wLWJsdWUtaHNsOiAyMTUsIDk1JSwgNjAlO1xuICAgIC0tcG9wLWJsdWU6IGhzbCh2YXIoLS1wb3AtYmx1ZS1oc2wpKTtcblxuICAgIC0tcG9wLWZnLW5vcm1hbDogaHNsKDAsIDAlLCA4MCUpO1xuICAgIC0tcG9wLWJnLW5vcm1hbDogaHNsYSgwLCAwJSwgMCUsIDAuMTUpO1xuICAgIC0tcG9wLWJnLWhvdmVyOiBoc2xhKDAsIDAlLCA4MCUsIDAuMik7XG4gICAgLS1wb3AtYmctYWN0aXZlOiBoc2xhKDAsIDAlLCA4MCUsIDAuNCk7XG5cbiAgICAtLXBvcC10b29sdGlwLWZnOiB2YXIoLS1wb3AtZmctbm9ybWFsKTtcbiAgICAtLXBvcC10b29sdGlwLWJnOiBoc2woMCwgMCUsIDUlKTtcblxuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaW5saW5lLXNpemU6IGNsYW1wKDEycmVtICsgMTB2dywgNDB2dywgNjB2dyk7XG4gICAgYmxvY2stc2l6ZTogY2xhbXAoMTJyZW0gKyAxMHZoLCA0MHZoLCA2MHZoKTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1wb3AtZmctbm9ybWFsKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzODM4O1xuICB9XG4gIC5Qb3Bjb3JuVUktZGlhbG9nW29wZW5dIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gIH1cbiAgLlBvcGNvcm5VSS1kaWFsb2cgKyA6Z2xvYmFsKC5iYWNrZHJvcCksXG4gIC5Qb3Bjb3JuVUktZGlhbG9nIHtcbiAgICB6LWluZGV4OiAyMTQ3NDgzNjQ3O1xuICB9XG4gIC5Qb3Bjb3JuVUktZGlhbG9nICsgOmdsb2JhbCguYmFja2Ryb3ApLFxuICAuUG9wY29yblVJLWRpYWxvZzo6YmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XG4gIH1cbjwvc3R5bGU+XG4iLCAiaW1wb3J0IFRoZW1lcyBmcm9tICcuL3RoZW1lcyc7XG5pbXBvcnQgUXVpY2tDc3MgZnJvbSAnLi9xdWlja2Nzcyc7XG5pbXBvcnQgVUkgZnJvbSAnQHVpL2luZGV4LnN2ZWx0ZSc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgUG9wY29ybjogUG9wY29ybjtcbiAgICBQb3Bjb3JuTmF0aXZlOiBQb3Bjb3JuTmF0aXZlO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjb21tZW50cyA9IHtcbiAgc3RhcnQ6IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ3NlY3Rpb246UG9wY29ybicpLFxuICBlbmQ6IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ2VuZHNlY3Rpb24nKSxcbn07XG5leHBvcnQgY29uc3QgY29uZmlnID0gYXdhaXQgUG9wY29ybk5hdGl2ZS5jb25maWc7XG5leHBvcnQgY29uc3Qgc2hvdWxkVmFsaWRhdGUgPSBCb29sZWFuKFBvcGNvcm5OYXRpdmUudmFsaWRhdGVDU1MpO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgY2xhc3MgUmVuZGVyZXIge1xuICBhc3luYyBzdGFydCgpIHtcbiAgICBjb25zdCBQb3Bjb3JuID0ge1xuICAgICAgdGhlbWVzOiAoYXdhaXQgUG9wY29ybk5hdGl2ZS5nZXRUaGVtZXMoKSkgYXMgeyBbaWQ6IHN0cmluZ106IFRoZW1lIH0sXG4gICAgICBxdWlja0NzczogYXdhaXQgUG9wY29ybk5hdGl2ZS5nZXRRdWlja0NzcygpLFxuICAgIH07XG4gICAgd2luZG93LlBvcGNvcm4gPSBQb3Bjb3JuO1xuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmQoY29tbWVudHMuc3RhcnQsIGNvbW1lbnRzLmVuZCk7XG5cbiAgICBuZXcgVUkoeyB0YXJnZXQ6IGRvY3VtZW50LmJvZHkgfSk7XG4gICAgbmV3IFRoZW1lcygpLnN0YXJ0KCk7XG4gICAgbmV3IFF1aWNrQ3NzKCkuc3RhcnQoKTtcbiAgfVxu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Ozs7QUFLVCxlQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q2xCLElBQU0sV0FBVztBQUFBLEVBQ3RCLE9BQU8sU0FBUyxjQUFjLGlCQUFpQjtBQUFBLEVBQy9DLEtBQUssU0FBUyxjQUFjLFlBQVk7QUFDMUM7QUFDTyxJQUFNLFNBQVMsTUFBTSxjQUFjO0FBQ25DLElBQU0saUJBQWlCLFFBQVEsY0FBYyxXQUFXO0FBRS9ELElBQU8sbUJBQVEsSUFBSSxNQUFNLFNBQVM7QUFBQSxFQUNoQyxNQUFNLFFBQVE7QUFDWixVQUFNQyxXQUFVO0FBQUEsTUFDZCxRQUFTLE1BQU0sY0FBYyxVQUFVO0FBQUEsTUFDdkMsVUFBVSxNQUFNLGNBQWMsWUFBWTtBQUFBLElBQzVDO0FBQ0EsV0FBTyxVQUFVQTtBQUVqQixhQUFTLEtBQUssT0FBTyxTQUFTLE9BQU8sU0FBUyxHQUFHO0FBRWpELFFBQUksV0FBRyxFQUFFLFFBQVEsU0FBUyxLQUFLLENBQUM7QUFDaEMsUUFBSUMsUUFBTyxFQUFFLE1BQU07QUFDbkIsUUFBSUMsVUFBUyxFQUFFLE1BQU07QUFBQSxFQUN2QjtBQUNGOyIsCiAgIm5hbWVzIjogWyJmdW5jIiwgIndhaXRNaWxsaXNlY29uZHMiLCAib3B0aW9ucyIsICJ0aW1lb3V0SWQiLCAiaXNJbW1lZGlhdGUiLCAiY2FsbGJhY2siLCAibWF4V2FpdCIsICJsYXN0SW52b2tlVGltZSIsICJEYXRlIiwgIm5vdyIsICJwcm9taXNlcyIsICJuZXh0SW52b2tlVGltZW91dCIsICJ0aW1lU2luY2VMYXN0SW52b2NhdGlvbiIsICJkZWJvdW5jZWRGdW5jdGlvbiIsICJhcmdzIiwgImNvbnRleHQiLCAidGhpcyIsICJQcm9taXNlIiwgInJlc29sdmUiLCAicmVqZWN0IiwgInNob3VsZENhbGxOb3ciLCAiY2xlYXJUaW1lb3V0IiwgInNldFRpbWVvdXQiLCAicmVzdWx0IiwgImFwcGx5IiwgImZvckVhY2giLCAiZSIsICJwdXNoIiwgImNhbmNlbCIsICJyZWFzb24iLCAiciIsICJlcnJvck1lc3NhZ2VzIiwgInVwZGF0ZSIsICJ2YWxpZGF0ZSIsICJzdGF0ZSIsICJjb25maWciLCAiY29uZmlnIiwgImVycm9yTWVzc2FnZXMiLCAiY29tcG9zZSIsICJjb25maWciLCAic3RhdGUiLCAiaW5pdCIsICJjb25maWd1cmVMb2FkZXIiLCAicmVxdWlyZSIsICJsb2FkZXIiLCAic2VsZiIsICJlbGVtZW50IiwgImZpbGUiLCAiZWxlbWVudCIsICJfYSIsICJlbGVtZW50IiwgImRldGFjaCIsICJ1cGRhdGUiLCAiaW5zdGFuY2UiLCAiY3JlYXRlX2ZyYWdtZW50IiwgImF0dHIiLCAidGV4dCIsICJpbnN0YW5jZSIsICJ1cGRhdGUiLCAic3Vic2NyaWJlIiwgInJ1biIsICJjdHgiLCAiYXR0ciIsICJjdHgiLCAiVGhlbWVzIiwgImNyZWF0ZV9pZl9ibG9jayIsICJjdHgiLCAibG9hZGVyIiwgImN0eCIsICJjcmVhdGVfaWZfYmxvY2tfMSIsICJjcmVhdGVfaWZfYmxvY2siLCAiZmlsZSIsICJjdHgiLCAiY3JlYXRlX2lmX2Jsb2NrIiwgImN0eCIsICJjdHgiLCAiY3JlYXRlX2lmX2Jsb2NrIiwgInJlcmVuZGVyU3RvcmUiLCAiZmlsZSIsICJMb2dnZXIiLCAiUXVpY2tDc3MiLCAic3R5bGUiLCAiY3R4IiwgImRlYm91bmNlIiwgIlBvcGNvcm4iLCAiVGhlbWVzIiwgIlF1aWNrQ3NzIl0KfQo=
