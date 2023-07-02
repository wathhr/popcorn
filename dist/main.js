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

// node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/utils/array.js
var require_array = __commonJS({
  "node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/utils/array.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.splitWhen = exports.flatten = void 0;
    function flatten(items) {
      return items.reduce((collection, item) => [].concat(collection, item), []);
    }
    exports.flatten = flatten;
    function splitWhen(items, predicate) {
      const result = [[]];
      let groupIndex = 0;
      for (const item of items) {
        if (predicate(item)) {
          groupIndex++;
          result[groupIndex] = [];
        } else {
          result[groupIndex].push(item);
        }
      }
      return result;
    }
    exports.splitWhen = splitWhen;
  }
});

// node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/utils/errno.js
var require_errno = __commonJS({
  "node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/utils/errno.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isEnoentCodeError = void 0;
    function isEnoentCodeError(error) {
      return error.code === "ENOENT";
    }
    exports.isEnoentCodeError = isEnoentCodeError;
  }
});

// node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/utils/fs.js
var require_fs = __commonJS({
  "node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/utils/fs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createDirentFromStats = void 0;
    var DirentFromStats = class {
      constructor(name, stats) {
        this.name = name;
        this.isBlockDevice = stats.isBlockDevice.bind(stats);
        this.isCharacterDevice = stats.isCharacterDevice.bind(stats);
        this.isDirectory = stats.isDirectory.bind(stats);
        this.isFIFO = stats.isFIFO.bind(stats);
        this.isFile = stats.isFile.bind(stats);
        this.isSocket = stats.isSocket.bind(stats);
        this.isSymbolicLink = stats.isSymbolicLink.bind(stats);
      }
    };
    function createDirentFromStats(name, stats) {
      return new DirentFromStats(name, stats);
    }
    exports.createDirentFromStats = createDirentFromStats;
  }
});

// node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/utils/path.js
var require_path = __commonJS({
  "node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/utils/path.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertPosixPathToPattern = exports.convertWindowsPathToPattern = exports.convertPathToPattern = exports.escapePosixPath = exports.escapeWindowsPath = exports.escape = exports.removeLeadingDotSegment = exports.makeAbsolute = exports.unixify = void 0;
    var os = require("os");
    var path = require("path");
    var IS_WINDOWS_PLATFORM = os.platform() === "win32";
    var LEADING_DOT_SEGMENT_CHARACTERS_COUNT = 2;
    var POSIX_UNESCAPED_GLOB_SYMBOLS_RE = /(\\?)([()*?[\]{|}]|^!|[!+@](?=\()|\\(?![!()*+?@[\]{|}]))/g;
    var WINDOWS_UNESCAPED_GLOB_SYMBOLS_RE = /(\\?)([(){}]|^!|[!+@](?=\())/g;
    var DOS_DEVICE_PATH_RE = /^\\\\([.?])/;
    var WINDOWS_BACKSLASHES_RE = /\\(?![!()+@{}])/g;
    function unixify(filepath) {
      return filepath.replace(/\\/g, "/");
    }
    exports.unixify = unixify;
    function makeAbsolute(cwd, filepath) {
      return path.resolve(cwd, filepath);
    }
    exports.makeAbsolute = makeAbsolute;
    function removeLeadingDotSegment(entry) {
      if (entry.charAt(0) === ".") {
        const secondCharactery = entry.charAt(1);
        if (secondCharactery === "/" || secondCharactery === "\\") {
          return entry.slice(LEADING_DOT_SEGMENT_CHARACTERS_COUNT);
        }
      }
      return entry;
    }
    exports.removeLeadingDotSegment = removeLeadingDotSegment;
    exports.escape = IS_WINDOWS_PLATFORM ? escapeWindowsPath : escapePosixPath;
    function escapeWindowsPath(pattern) {
      return pattern.replace(WINDOWS_UNESCAPED_GLOB_SYMBOLS_RE, "\\$2");
    }
    exports.escapeWindowsPath = escapeWindowsPath;
    function escapePosixPath(pattern) {
      return pattern.replace(POSIX_UNESCAPED_GLOB_SYMBOLS_RE, "\\$2");
    }
    exports.escapePosixPath = escapePosixPath;
    exports.convertPathToPattern = IS_WINDOWS_PLATFORM ? convertWindowsPathToPattern : convertPosixPathToPattern;
    function convertWindowsPathToPattern(filepath) {
      return escapeWindowsPath(filepath).replace(DOS_DEVICE_PATH_RE, "//$1").replace(WINDOWS_BACKSLASHES_RE, "/");
    }
    exports.convertWindowsPathToPattern = convertWindowsPathToPattern;
    function convertPosixPathToPattern(filepath) {
      return escapePosixPath(filepath);
    }
    exports.convertPosixPathToPattern = convertPosixPathToPattern;
  }
});

// node_modules/.pnpm/is-extglob@2.1.1/node_modules/is-extglob/index.js
var require_is_extglob = __commonJS({
  "node_modules/.pnpm/is-extglob@2.1.1/node_modules/is-extglob/index.js"(exports, module2) {
    module2.exports = function isExtglob(str) {
      if (typeof str !== "string" || str === "") {
        return false;
      }
      var match;
      while (match = /(\\).|([@?!+*]\(.*\))/g.exec(str)) {
        if (match[2])
          return true;
        str = str.slice(match.index + match[0].length);
      }
      return false;
    };
  }
});

// node_modules/.pnpm/is-glob@4.0.3/node_modules/is-glob/index.js
var require_is_glob = __commonJS({
  "node_modules/.pnpm/is-glob@4.0.3/node_modules/is-glob/index.js"(exports, module2) {
    var isExtglob = require_is_extglob();
    var chars = { "{": "}", "(": ")", "[": "]" };
    var strictCheck = function(str) {
      if (str[0] === "!") {
        return true;
      }
      var index = 0;
      var pipeIndex = -2;
      var closeSquareIndex = -2;
      var closeCurlyIndex = -2;
      var closeParenIndex = -2;
      var backSlashIndex = -2;
      while (index < str.length) {
        if (str[index] === "*") {
          return true;
        }
        if (str[index + 1] === "?" && /[\].+)]/.test(str[index])) {
          return true;
        }
        if (closeSquareIndex !== -1 && str[index] === "[" && str[index + 1] !== "]") {
          if (closeSquareIndex < index) {
            closeSquareIndex = str.indexOf("]", index);
          }
          if (closeSquareIndex > index) {
            if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
              return true;
            }
            backSlashIndex = str.indexOf("\\", index);
            if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
              return true;
            }
          }
        }
        if (closeCurlyIndex !== -1 && str[index] === "{" && str[index + 1] !== "}") {
          closeCurlyIndex = str.indexOf("}", index);
          if (closeCurlyIndex > index) {
            backSlashIndex = str.indexOf("\\", index);
            if (backSlashIndex === -1 || backSlashIndex > closeCurlyIndex) {
              return true;
            }
          }
        }
        if (closeParenIndex !== -1 && str[index] === "(" && str[index + 1] === "?" && /[:!=]/.test(str[index + 2]) && str[index + 3] !== ")") {
          closeParenIndex = str.indexOf(")", index);
          if (closeParenIndex > index) {
            backSlashIndex = str.indexOf("\\", index);
            if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
              return true;
            }
          }
        }
        if (pipeIndex !== -1 && str[index] === "(" && str[index + 1] !== "|") {
          if (pipeIndex < index) {
            pipeIndex = str.indexOf("|", index);
          }
          if (pipeIndex !== -1 && str[pipeIndex + 1] !== ")") {
            closeParenIndex = str.indexOf(")", pipeIndex);
            if (closeParenIndex > pipeIndex) {
              backSlashIndex = str.indexOf("\\", pipeIndex);
              if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
                return true;
              }
            }
          }
        }
        if (str[index] === "\\") {
          var open = str[index + 1];
          index += 2;
          var close = chars[open];
          if (close) {
            var n = str.indexOf(close, index);
            if (n !== -1) {
              index = n + 1;
            }
          }
          if (str[index] === "!") {
            return true;
          }
        } else {
          index++;
        }
      }
      return false;
    };
    var relaxedCheck = function(str) {
      if (str[0] === "!") {
        return true;
      }
      var index = 0;
      while (index < str.length) {
        if (/[*?{}()[\]]/.test(str[index])) {
          return true;
        }
        if (str[index] === "\\") {
          var open = str[index + 1];
          index += 2;
          var close = chars[open];
          if (close) {
            var n = str.indexOf(close, index);
            if (n !== -1) {
              index = n + 1;
            }
          }
          if (str[index] === "!") {
            return true;
          }
        } else {
          index++;
        }
      }
      return false;
    };
    module2.exports = function isGlob(str, options) {
      if (typeof str !== "string" || str === "") {
        return false;
      }
      if (isExtglob(str)) {
        return true;
      }
      var check = strictCheck;
      if (options && options.strict === false) {
        check = relaxedCheck;
      }
      return check(str);
    };
  }
});

// node_modules/.pnpm/glob-parent@5.1.2/node_modules/glob-parent/index.js
var require_glob_parent = __commonJS({
  "node_modules/.pnpm/glob-parent@5.1.2/node_modules/glob-parent/index.js"(exports, module2) {
    "use strict";
    var isGlob = require_is_glob();
    var pathPosixDirname = require("path").posix.dirname;
    var isWin32 = require("os").platform() === "win32";
    var slash = "/";
    var backslash = /\\/g;
    var enclosure = /[\{\[].*[\}\]]$/;
    var globby = /(^|[^\\])([\{\[]|\([^\)]+$)/;
    var escaped = /\\([\!\*\?\|\[\]\(\)\{\}])/g;
    module2.exports = function globParent(str, opts2) {
      var options = Object.assign({ flipBackslashes: true }, opts2);
      if (options.flipBackslashes && isWin32 && str.indexOf(slash) < 0) {
        str = str.replace(backslash, slash);
      }
      if (enclosure.test(str)) {
        str += slash;
      }
      str += "a";
      do {
        str = pathPosixDirname(str);
      } while (isGlob(str) || globby.test(str));
      return str.replace(escaped, "$1");
    };
  }
});

// node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/utils.js
var require_utils = __commonJS({
  "node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/utils.js"(exports) {
    "use strict";
    exports.isInteger = (num) => {
      if (typeof num === "number") {
        return Number.isInteger(num);
      }
      if (typeof num === "string" && num.trim() !== "") {
        return Number.isInteger(Number(num));
      }
      return false;
    };
    exports.find = (node, type) => node.nodes.find((node2) => node2.type === type);
    exports.exceedsLimit = (min, max, step = 1, limit) => {
      if (limit === false)
        return false;
      if (!exports.isInteger(min) || !exports.isInteger(max))
        return false;
      return (Number(max) - Number(min)) / Number(step) >= limit;
    };
    exports.escapeNode = (block, n = 0, type) => {
      let node = block.nodes[n];
      if (!node)
        return;
      if (type && node.type === type || node.type === "open" || node.type === "close") {
        if (node.escaped !== true) {
          node.value = "\\" + node.value;
          node.escaped = true;
        }
      }
    };
    exports.encloseBrace = (node) => {
      if (node.type !== "brace")
        return false;
      if (node.commas >> 0 + node.ranges >> 0 === 0) {
        node.invalid = true;
        return true;
      }
      return false;
    };
    exports.isInvalidBrace = (block) => {
      if (block.type !== "brace")
        return false;
      if (block.invalid === true || block.dollar)
        return true;
      if (block.commas >> 0 + block.ranges >> 0 === 0) {
        block.invalid = true;
        return true;
      }
      if (block.open !== true || block.close !== true) {
        block.invalid = true;
        return true;
      }
      return false;
    };
    exports.isOpenOrClose = (node) => {
      if (node.type === "open" || node.type === "close") {
        return true;
      }
      return node.open === true || node.close === true;
    };
    exports.reduce = (nodes) => nodes.reduce((acc, node) => {
      if (node.type === "text")
        acc.push(node.value);
      if (node.type === "range")
        node.type = "text";
      return acc;
    }, []);
    exports.flatten = (...args) => {
      const result = [];
      const flat = (arr) => {
        for (let i = 0; i < arr.length; i++) {
          let ele = arr[i];
          Array.isArray(ele) ? flat(ele, result) : ele !== void 0 && result.push(ele);
        }
        return result;
      };
      flat(args);
      return result;
    };
  }
});

// node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/stringify.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    module2.exports = (ast, options = {}) => {
      let stringify = (node, parent = {}) => {
        let invalidBlock = options.escapeInvalid && utils.isInvalidBrace(parent);
        let invalidNode = node.invalid === true && options.escapeInvalid === true;
        let output = "";
        if (node.value) {
          if ((invalidBlock || invalidNode) && utils.isOpenOrClose(node)) {
            return "\\" + node.value;
          }
          return node.value;
        }
        if (node.value) {
          return node.value;
        }
        if (node.nodes) {
          for (let child of node.nodes) {
            output += stringify(child);
          }
        }
        return output;
      };
      return stringify(ast);
    };
  }
});

// node_modules/.pnpm/is-number@7.0.0/node_modules/is-number/index.js
var require_is_number = __commonJS({
  "node_modules/.pnpm/is-number@7.0.0/node_modules/is-number/index.js"(exports, module2) {
    "use strict";
    module2.exports = function(num) {
      if (typeof num === "number") {
        return num - num === 0;
      }
      if (typeof num === "string" && num.trim() !== "") {
        return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
      }
      return false;
    };
  }
});

// node_modules/.pnpm/to-regex-range@5.0.1/node_modules/to-regex-range/index.js
var require_to_regex_range = __commonJS({
  "node_modules/.pnpm/to-regex-range@5.0.1/node_modules/to-regex-range/index.js"(exports, module2) {
    "use strict";
    var isNumber = require_is_number();
    var toRegexRange = (min, max, options) => {
      if (isNumber(min) === false) {
        throw new TypeError("toRegexRange: expected the first argument to be a number");
      }
      if (max === void 0 || min === max) {
        return String(min);
      }
      if (isNumber(max) === false) {
        throw new TypeError("toRegexRange: expected the second argument to be a number.");
      }
      let opts2 = { relaxZeros: true, ...options };
      if (typeof opts2.strictZeros === "boolean") {
        opts2.relaxZeros = opts2.strictZeros === false;
      }
      let relax = String(opts2.relaxZeros);
      let shorthand = String(opts2.shorthand);
      let capture = String(opts2.capture);
      let wrap = String(opts2.wrap);
      let cacheKey = min + ":" + max + "=" + relax + shorthand + capture + wrap;
      if (toRegexRange.cache.hasOwnProperty(cacheKey)) {
        return toRegexRange.cache[cacheKey].result;
      }
      let a = Math.min(min, max);
      let b = Math.max(min, max);
      if (Math.abs(a - b) === 1) {
        let result = min + "|" + max;
        if (opts2.capture) {
          return `(${result})`;
        }
        if (opts2.wrap === false) {
          return result;
        }
        return `(?:${result})`;
      }
      let isPadded = hasPadding(min) || hasPadding(max);
      let state = { min, max, a, b };
      let positives = [];
      let negatives = [];
      if (isPadded) {
        state.isPadded = isPadded;
        state.maxLen = String(state.max).length;
      }
      if (a < 0) {
        let newMin = b < 0 ? Math.abs(b) : 1;
        negatives = splitToPatterns(newMin, Math.abs(a), state, opts2);
        a = state.a = 0;
      }
      if (b >= 0) {
        positives = splitToPatterns(a, b, state, opts2);
      }
      state.negatives = negatives;
      state.positives = positives;
      state.result = collatePatterns(negatives, positives, opts2);
      if (opts2.capture === true) {
        state.result = `(${state.result})`;
      } else if (opts2.wrap !== false && positives.length + negatives.length > 1) {
        state.result = `(?:${state.result})`;
      }
      toRegexRange.cache[cacheKey] = state;
      return state.result;
    };
    function collatePatterns(neg, pos, options) {
      let onlyNegative = filterPatterns(neg, pos, "-", false, options) || [];
      let onlyPositive = filterPatterns(pos, neg, "", false, options) || [];
      let intersected = filterPatterns(neg, pos, "-?", true, options) || [];
      let subpatterns = onlyNegative.concat(intersected).concat(onlyPositive);
      return subpatterns.join("|");
    }
    function splitToRanges(min, max) {
      let nines = 1;
      let zeros = 1;
      let stop2 = countNines(min, nines);
      let stops = /* @__PURE__ */ new Set([max]);
      while (min <= stop2 && stop2 <= max) {
        stops.add(stop2);
        nines += 1;
        stop2 = countNines(min, nines);
      }
      stop2 = countZeros(max + 1, zeros) - 1;
      while (min < stop2 && stop2 <= max) {
        stops.add(stop2);
        zeros += 1;
        stop2 = countZeros(max + 1, zeros) - 1;
      }
      stops = [...stops];
      stops.sort(compare);
      return stops;
    }
    function rangeToPattern(start2, stop2, options) {
      if (start2 === stop2) {
        return { pattern: start2, count: [], digits: 0 };
      }
      let zipped = zip(start2, stop2);
      let digits = zipped.length;
      let pattern = "";
      let count = 0;
      for (let i = 0; i < digits; i++) {
        let [startDigit, stopDigit] = zipped[i];
        if (startDigit === stopDigit) {
          pattern += startDigit;
        } else if (startDigit !== "0" || stopDigit !== "9") {
          pattern += toCharacterClass(startDigit, stopDigit, options);
        } else {
          count++;
        }
      }
      if (count) {
        pattern += options.shorthand === true ? "\\d" : "[0-9]";
      }
      return { pattern, count: [count], digits };
    }
    function splitToPatterns(min, max, tok, options) {
      let ranges = splitToRanges(min, max);
      let tokens = [];
      let start2 = min;
      let prev;
      for (let i = 0; i < ranges.length; i++) {
        let max2 = ranges[i];
        let obj = rangeToPattern(String(start2), String(max2), options);
        let zeros = "";
        if (!tok.isPadded && prev && prev.pattern === obj.pattern) {
          if (prev.count.length > 1) {
            prev.count.pop();
          }
          prev.count.push(obj.count[0]);
          prev.string = prev.pattern + toQuantifier(prev.count);
          start2 = max2 + 1;
          continue;
        }
        if (tok.isPadded) {
          zeros = padZeros(max2, tok, options);
        }
        obj.string = zeros + obj.pattern + toQuantifier(obj.count);
        tokens.push(obj);
        start2 = max2 + 1;
        prev = obj;
      }
      return tokens;
    }
    function filterPatterns(arr, comparison, prefix, intersection, options) {
      let result = [];
      for (let ele of arr) {
        let { string } = ele;
        if (!intersection && !contains(comparison, "string", string)) {
          result.push(prefix + string);
        }
        if (intersection && contains(comparison, "string", string)) {
          result.push(prefix + string);
        }
      }
      return result;
    }
    function zip(a, b) {
      let arr = [];
      for (let i = 0; i < a.length; i++)
        arr.push([a[i], b[i]]);
      return arr;
    }
    function compare(a, b) {
      return a > b ? 1 : b > a ? -1 : 0;
    }
    function contains(arr, key, val) {
      return arr.some((ele) => ele[key] === val);
    }
    function countNines(min, len) {
      return Number(String(min).slice(0, -len) + "9".repeat(len));
    }
    function countZeros(integer, zeros) {
      return integer - integer % Math.pow(10, zeros);
    }
    function toQuantifier(digits) {
      let [start2 = 0, stop2 = ""] = digits;
      if (stop2 || start2 > 1) {
        return `{${start2 + (stop2 ? "," + stop2 : "")}}`;
      }
      return "";
    }
    function toCharacterClass(a, b, options) {
      return `[${a}${b - a === 1 ? "" : "-"}${b}]`;
    }
    function hasPadding(str) {
      return /^-?(0+)\d/.test(str);
    }
    function padZeros(value, tok, options) {
      if (!tok.isPadded) {
        return value;
      }
      let diff = Math.abs(tok.maxLen - String(value).length);
      let relax = options.relaxZeros !== false;
      switch (diff) {
        case 0:
          return "";
        case 1:
          return relax ? "0?" : "0";
        case 2:
          return relax ? "0{0,2}" : "00";
        default: {
          return relax ? `0{0,${diff}}` : `0{${diff}}`;
        }
      }
    }
    toRegexRange.cache = {};
    toRegexRange.clearCache = () => toRegexRange.cache = {};
    module2.exports = toRegexRange;
  }
});

// node_modules/.pnpm/fill-range@7.0.1/node_modules/fill-range/index.js
var require_fill_range = __commonJS({
  "node_modules/.pnpm/fill-range@7.0.1/node_modules/fill-range/index.js"(exports, module2) {
    "use strict";
    var util = require("util");
    var toRegexRange = require_to_regex_range();
    var isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    var transform = (toNumber) => {
      return (value) => toNumber === true ? Number(value) : String(value);
    };
    var isValidValue = (value) => {
      return typeof value === "number" || typeof value === "string" && value !== "";
    };
    var isNumber = (num) => Number.isInteger(+num);
    var zeros = (input) => {
      let value = `${input}`;
      let index = -1;
      if (value[0] === "-")
        value = value.slice(1);
      if (value === "0")
        return false;
      while (value[++index] === "0")
        ;
      return index > 0;
    };
    var stringify = (start2, end, options) => {
      if (typeof start2 === "string" || typeof end === "string") {
        return true;
      }
      return options.stringify === true;
    };
    var pad = (input, maxLength, toNumber) => {
      if (maxLength > 0) {
        let dash = input[0] === "-" ? "-" : "";
        if (dash)
          input = input.slice(1);
        input = dash + input.padStart(dash ? maxLength - 1 : maxLength, "0");
      }
      if (toNumber === false) {
        return String(input);
      }
      return input;
    };
    var toMaxLen = (input, maxLength) => {
      let negative = input[0] === "-" ? "-" : "";
      if (negative) {
        input = input.slice(1);
        maxLength--;
      }
      while (input.length < maxLength)
        input = "0" + input;
      return negative ? "-" + input : input;
    };
    var toSequence = (parts, options) => {
      parts.negatives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
      parts.positives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
      let prefix = options.capture ? "" : "?:";
      let positives = "";
      let negatives = "";
      let result;
      if (parts.positives.length) {
        positives = parts.positives.join("|");
      }
      if (parts.negatives.length) {
        negatives = `-(${prefix}${parts.negatives.join("|")})`;
      }
      if (positives && negatives) {
        result = `${positives}|${negatives}`;
      } else {
        result = positives || negatives;
      }
      if (options.wrap) {
        return `(${prefix}${result})`;
      }
      return result;
    };
    var toRange = (a, b, isNumbers, options) => {
      if (isNumbers) {
        return toRegexRange(a, b, { wrap: false, ...options });
      }
      let start2 = String.fromCharCode(a);
      if (a === b)
        return start2;
      let stop2 = String.fromCharCode(b);
      return `[${start2}-${stop2}]`;
    };
    var toRegex = (start2, end, options) => {
      if (Array.isArray(start2)) {
        let wrap = options.wrap === true;
        let prefix = options.capture ? "" : "?:";
        return wrap ? `(${prefix}${start2.join("|")})` : start2.join("|");
      }
      return toRegexRange(start2, end, options);
    };
    var rangeError = (...args) => {
      return new RangeError("Invalid range arguments: " + util.inspect(...args));
    };
    var invalidRange = (start2, end, options) => {
      if (options.strictRanges === true)
        throw rangeError([start2, end]);
      return [];
    };
    var invalidStep = (step, options) => {
      if (options.strictRanges === true) {
        throw new TypeError(`Expected step "${step}" to be a number`);
      }
      return [];
    };
    var fillNumbers = (start2, end, step = 1, options = {}) => {
      let a = Number(start2);
      let b = Number(end);
      if (!Number.isInteger(a) || !Number.isInteger(b)) {
        if (options.strictRanges === true)
          throw rangeError([start2, end]);
        return [];
      }
      if (a === 0)
        a = 0;
      if (b === 0)
        b = 0;
      let descending = a > b;
      let startString = String(start2);
      let endString = String(end);
      let stepString = String(step);
      step = Math.max(Math.abs(step), 1);
      let padded = zeros(startString) || zeros(endString) || zeros(stepString);
      let maxLen = padded ? Math.max(startString.length, endString.length, stepString.length) : 0;
      let toNumber = padded === false && stringify(start2, end, options) === false;
      let format = options.transform || transform(toNumber);
      if (options.toRegex && step === 1) {
        return toRange(toMaxLen(start2, maxLen), toMaxLen(end, maxLen), true, options);
      }
      let parts = { negatives: [], positives: [] };
      let push = (num) => parts[num < 0 ? "negatives" : "positives"].push(Math.abs(num));
      let range = [];
      let index = 0;
      while (descending ? a >= b : a <= b) {
        if (options.toRegex === true && step > 1) {
          push(a);
        } else {
          range.push(pad(format(a, index), maxLen, toNumber));
        }
        a = descending ? a - step : a + step;
        index++;
      }
      if (options.toRegex === true) {
        return step > 1 ? toSequence(parts, options) : toRegex(range, null, { wrap: false, ...options });
      }
      return range;
    };
    var fillLetters = (start2, end, step = 1, options = {}) => {
      if (!isNumber(start2) && start2.length > 1 || !isNumber(end) && end.length > 1) {
        return invalidRange(start2, end, options);
      }
      let format = options.transform || ((val) => String.fromCharCode(val));
      let a = `${start2}`.charCodeAt(0);
      let b = `${end}`.charCodeAt(0);
      let descending = a > b;
      let min = Math.min(a, b);
      let max = Math.max(a, b);
      if (options.toRegex && step === 1) {
        return toRange(min, max, false, options);
      }
      let range = [];
      let index = 0;
      while (descending ? a >= b : a <= b) {
        range.push(format(a, index));
        a = descending ? a - step : a + step;
        index++;
      }
      if (options.toRegex === true) {
        return toRegex(range, null, { wrap: false, options });
      }
      return range;
    };
    var fill = (start2, end, step, options = {}) => {
      if (end == null && isValidValue(start2)) {
        return [start2];
      }
      if (!isValidValue(start2) || !isValidValue(end)) {
        return invalidRange(start2, end, options);
      }
      if (typeof step === "function") {
        return fill(start2, end, 1, { transform: step });
      }
      if (isObject(step)) {
        return fill(start2, end, 0, step);
      }
      let opts2 = { ...options };
      if (opts2.capture === true)
        opts2.wrap = true;
      step = step || opts2.step || 1;
      if (!isNumber(step)) {
        if (step != null && !isObject(step))
          return invalidStep(step, opts2);
        return fill(start2, end, 1, step);
      }
      if (isNumber(start2) && isNumber(end)) {
        return fillNumbers(start2, end, step, opts2);
      }
      return fillLetters(start2, end, Math.max(Math.abs(step), 1), opts2);
    };
    module2.exports = fill;
  }
});

// node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/compile.js
var require_compile = __commonJS({
  "node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/compile.js"(exports, module2) {
    "use strict";
    var fill = require_fill_range();
    var utils = require_utils();
    var compile = (ast, options = {}) => {
      let walk = (node, parent = {}) => {
        let invalidBlock = utils.isInvalidBrace(parent);
        let invalidNode = node.invalid === true && options.escapeInvalid === true;
        let invalid = invalidBlock === true || invalidNode === true;
        let prefix = options.escapeInvalid === true ? "\\" : "";
        let output = "";
        if (node.isOpen === true) {
          return prefix + node.value;
        }
        if (node.isClose === true) {
          return prefix + node.value;
        }
        if (node.type === "open") {
          return invalid ? prefix + node.value : "(";
        }
        if (node.type === "close") {
          return invalid ? prefix + node.value : ")";
        }
        if (node.type === "comma") {
          return node.prev.type === "comma" ? "" : invalid ? node.value : "|";
        }
        if (node.value) {
          return node.value;
        }
        if (node.nodes && node.ranges > 0) {
          let args = utils.reduce(node.nodes);
          let range = fill(...args, { ...options, wrap: false, toRegex: true });
          if (range.length !== 0) {
            return args.length > 1 && range.length > 1 ? `(${range})` : range;
          }
        }
        if (node.nodes) {
          for (let child of node.nodes) {
            output += walk(child, node);
          }
        }
        return output;
      };
      return walk(ast);
    };
    module2.exports = compile;
  }
});

// node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/expand.js
var require_expand = __commonJS({
  "node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/expand.js"(exports, module2) {
    "use strict";
    var fill = require_fill_range();
    var stringify = require_stringify();
    var utils = require_utils();
    var append = (queue = "", stash = "", enclose = false) => {
      let result = [];
      queue = [].concat(queue);
      stash = [].concat(stash);
      if (!stash.length)
        return queue;
      if (!queue.length) {
        return enclose ? utils.flatten(stash).map((ele) => `{${ele}}`) : stash;
      }
      for (let item of queue) {
        if (Array.isArray(item)) {
          for (let value of item) {
            result.push(append(value, stash, enclose));
          }
        } else {
          for (let ele of stash) {
            if (enclose === true && typeof ele === "string")
              ele = `{${ele}}`;
            result.push(Array.isArray(ele) ? append(item, ele, enclose) : item + ele);
          }
        }
      }
      return utils.flatten(result);
    };
    var expand = (ast, options = {}) => {
      let rangeLimit = options.rangeLimit === void 0 ? 1e3 : options.rangeLimit;
      let walk = (node, parent = {}) => {
        node.queue = [];
        let p = parent;
        let q = parent.queue;
        while (p.type !== "brace" && p.type !== "root" && p.parent) {
          p = p.parent;
          q = p.queue;
        }
        if (node.invalid || node.dollar) {
          q.push(append(q.pop(), stringify(node, options)));
          return;
        }
        if (node.type === "brace" && node.invalid !== true && node.nodes.length === 2) {
          q.push(append(q.pop(), ["{}"]));
          return;
        }
        if (node.nodes && node.ranges > 0) {
          let args = utils.reduce(node.nodes);
          if (utils.exceedsLimit(...args, options.step, rangeLimit)) {
            throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");
          }
          let range = fill(...args, options);
          if (range.length === 0) {
            range = stringify(node, options);
          }
          q.push(append(q.pop(), range));
          node.nodes = [];
          return;
        }
        let enclose = utils.encloseBrace(node);
        let queue = node.queue;
        let block = node;
        while (block.type !== "brace" && block.type !== "root" && block.parent) {
          block = block.parent;
          queue = block.queue;
        }
        for (let i = 0; i < node.nodes.length; i++) {
          let child = node.nodes[i];
          if (child.type === "comma" && node.type === "brace") {
            if (i === 1)
              queue.push("");
            queue.push("");
            continue;
          }
          if (child.type === "close") {
            q.push(append(q.pop(), queue, enclose));
            continue;
          }
          if (child.value && child.type !== "open") {
            queue.push(append(queue.pop(), child.value));
            continue;
          }
          if (child.nodes) {
            walk(child, node);
          }
        }
        return queue;
      };
      return utils.flatten(walk(ast));
    };
    module2.exports = expand;
  }
});

// node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/constants.js
var require_constants = __commonJS({
  "node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/constants.js"(exports, module2) {
    "use strict";
    module2.exports = {
      MAX_LENGTH: 1024 * 64,
      // Digits
      CHAR_0: "0",
      /* 0 */
      CHAR_9: "9",
      /* 9 */
      // Alphabet chars.
      CHAR_UPPERCASE_A: "A",
      /* A */
      CHAR_LOWERCASE_A: "a",
      /* a */
      CHAR_UPPERCASE_Z: "Z",
      /* Z */
      CHAR_LOWERCASE_Z: "z",
      /* z */
      CHAR_LEFT_PARENTHESES: "(",
      /* ( */
      CHAR_RIGHT_PARENTHESES: ")",
      /* ) */
      CHAR_ASTERISK: "*",
      /* * */
      // Non-alphabetic chars.
      CHAR_AMPERSAND: "&",
      /* & */
      CHAR_AT: "@",
      /* @ */
      CHAR_BACKSLASH: "\\",
      /* \ */
      CHAR_BACKTICK: "`",
      /* ` */
      CHAR_CARRIAGE_RETURN: "\r",
      /* \r */
      CHAR_CIRCUMFLEX_ACCENT: "^",
      /* ^ */
      CHAR_COLON: ":",
      /* : */
      CHAR_COMMA: ",",
      /* , */
      CHAR_DOLLAR: "$",
      /* . */
      CHAR_DOT: ".",
      /* . */
      CHAR_DOUBLE_QUOTE: '"',
      /* " */
      CHAR_EQUAL: "=",
      /* = */
      CHAR_EXCLAMATION_MARK: "!",
      /* ! */
      CHAR_FORM_FEED: "\f",
      /* \f */
      CHAR_FORWARD_SLASH: "/",
      /* / */
      CHAR_HASH: "#",
      /* # */
      CHAR_HYPHEN_MINUS: "-",
      /* - */
      CHAR_LEFT_ANGLE_BRACKET: "<",
      /* < */
      CHAR_LEFT_CURLY_BRACE: "{",
      /* { */
      CHAR_LEFT_SQUARE_BRACKET: "[",
      /* [ */
      CHAR_LINE_FEED: "\n",
      /* \n */
      CHAR_NO_BREAK_SPACE: "\xA0",
      /* \u00A0 */
      CHAR_PERCENT: "%",
      /* % */
      CHAR_PLUS: "+",
      /* + */
      CHAR_QUESTION_MARK: "?",
      /* ? */
      CHAR_RIGHT_ANGLE_BRACKET: ">",
      /* > */
      CHAR_RIGHT_CURLY_BRACE: "}",
      /* } */
      CHAR_RIGHT_SQUARE_BRACKET: "]",
      /* ] */
      CHAR_SEMICOLON: ";",
      /* ; */
      CHAR_SINGLE_QUOTE: "'",
      /* ' */
      CHAR_SPACE: " ",
      /*   */
      CHAR_TAB: "	",
      /* \t */
      CHAR_UNDERSCORE: "_",
      /* _ */
      CHAR_VERTICAL_LINE: "|",
      /* | */
      CHAR_ZERO_WIDTH_NOBREAK_SPACE: "\uFEFF"
      /* \uFEFF */
    };
  }
});

// node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/parse.js
var require_parse = __commonJS({
  "node_modules/.pnpm/braces@3.0.2/node_modules/braces/lib/parse.js"(exports, module2) {
    "use strict";
    var stringify = require_stringify();
    var {
      MAX_LENGTH,
      CHAR_BACKSLASH,
      /* \ */
      CHAR_BACKTICK,
      /* ` */
      CHAR_COMMA,
      /* , */
      CHAR_DOT,
      /* . */
      CHAR_LEFT_PARENTHESES,
      /* ( */
      CHAR_RIGHT_PARENTHESES,
      /* ) */
      CHAR_LEFT_CURLY_BRACE,
      /* { */
      CHAR_RIGHT_CURLY_BRACE,
      /* } */
      CHAR_LEFT_SQUARE_BRACKET,
      /* [ */
      CHAR_RIGHT_SQUARE_BRACKET,
      /* ] */
      CHAR_DOUBLE_QUOTE,
      /* " */
      CHAR_SINGLE_QUOTE,
      /* ' */
      CHAR_NO_BREAK_SPACE,
      CHAR_ZERO_WIDTH_NOBREAK_SPACE
    } = require_constants();
    var parse = (input, options = {}) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected a string");
      }
      let opts2 = options || {};
      let max = typeof opts2.maxLength === "number" ? Math.min(MAX_LENGTH, opts2.maxLength) : MAX_LENGTH;
      if (input.length > max) {
        throw new SyntaxError(`Input length (${input.length}), exceeds max characters (${max})`);
      }
      let ast = { type: "root", input, nodes: [] };
      let stack = [ast];
      let block = ast;
      let prev = ast;
      let brackets = 0;
      let length = input.length;
      let index = 0;
      let depth = 0;
      let value;
      let memo = {};
      const advance = () => input[index++];
      const push = (node) => {
        if (node.type === "text" && prev.type === "dot") {
          prev.type = "text";
        }
        if (prev && prev.type === "text" && node.type === "text") {
          prev.value += node.value;
          return;
        }
        block.nodes.push(node);
        node.parent = block;
        node.prev = prev;
        prev = node;
        return node;
      };
      push({ type: "bos" });
      while (index < length) {
        block = stack[stack.length - 1];
        value = advance();
        if (value === CHAR_ZERO_WIDTH_NOBREAK_SPACE || value === CHAR_NO_BREAK_SPACE) {
          continue;
        }
        if (value === CHAR_BACKSLASH) {
          push({ type: "text", value: (options.keepEscaping ? value : "") + advance() });
          continue;
        }
        if (value === CHAR_RIGHT_SQUARE_BRACKET) {
          push({ type: "text", value: "\\" + value });
          continue;
        }
        if (value === CHAR_LEFT_SQUARE_BRACKET) {
          brackets++;
          let closed = true;
          let next;
          while (index < length && (next = advance())) {
            value += next;
            if (next === CHAR_LEFT_SQUARE_BRACKET) {
              brackets++;
              continue;
            }
            if (next === CHAR_BACKSLASH) {
              value += advance();
              continue;
            }
            if (next === CHAR_RIGHT_SQUARE_BRACKET) {
              brackets--;
              if (brackets === 0) {
                break;
              }
            }
          }
          push({ type: "text", value });
          continue;
        }
        if (value === CHAR_LEFT_PARENTHESES) {
          block = push({ type: "paren", nodes: [] });
          stack.push(block);
          push({ type: "text", value });
          continue;
        }
        if (value === CHAR_RIGHT_PARENTHESES) {
          if (block.type !== "paren") {
            push({ type: "text", value });
            continue;
          }
          block = stack.pop();
          push({ type: "text", value });
          block = stack[stack.length - 1];
          continue;
        }
        if (value === CHAR_DOUBLE_QUOTE || value === CHAR_SINGLE_QUOTE || value === CHAR_BACKTICK) {
          let open = value;
          let next;
          if (options.keepQuotes !== true) {
            value = "";
          }
          while (index < length && (next = advance())) {
            if (next === CHAR_BACKSLASH) {
              value += next + advance();
              continue;
            }
            if (next === open) {
              if (options.keepQuotes === true)
                value += next;
              break;
            }
            value += next;
          }
          push({ type: "text", value });
          continue;
        }
        if (value === CHAR_LEFT_CURLY_BRACE) {
          depth++;
          let dollar = prev.value && prev.value.slice(-1) === "$" || block.dollar === true;
          let brace = {
            type: "brace",
            open: true,
            close: false,
            dollar,
            depth,
            commas: 0,
            ranges: 0,
            nodes: []
          };
          block = push(brace);
          stack.push(block);
          push({ type: "open", value });
          continue;
        }
        if (value === CHAR_RIGHT_CURLY_BRACE) {
          if (block.type !== "brace") {
            push({ type: "text", value });
            continue;
          }
          let type = "close";
          block = stack.pop();
          block.close = true;
          push({ type, value });
          depth--;
          block = stack[stack.length - 1];
          continue;
        }
        if (value === CHAR_COMMA && depth > 0) {
          if (block.ranges > 0) {
            block.ranges = 0;
            let open = block.nodes.shift();
            block.nodes = [open, { type: "text", value: stringify(block) }];
          }
          push({ type: "comma", value });
          block.commas++;
          continue;
        }
        if (value === CHAR_DOT && depth > 0 && block.commas === 0) {
          let siblings = block.nodes;
          if (depth === 0 || siblings.length === 0) {
            push({ type: "text", value });
            continue;
          }
          if (prev.type === "dot") {
            block.range = [];
            prev.value += value;
            prev.type = "range";
            if (block.nodes.length !== 3 && block.nodes.length !== 5) {
              block.invalid = true;
              block.ranges = 0;
              prev.type = "text";
              continue;
            }
            block.ranges++;
            block.args = [];
            continue;
          }
          if (prev.type === "range") {
            siblings.pop();
            let before = siblings[siblings.length - 1];
            before.value += prev.value + value;
            prev = before;
            block.ranges--;
            continue;
          }
          push({ type: "dot", value });
          continue;
        }
        push({ type: "text", value });
      }
      do {
        block = stack.pop();
        if (block.type !== "root") {
          block.nodes.forEach((node) => {
            if (!node.nodes) {
              if (node.type === "open")
                node.isOpen = true;
              if (node.type === "close")
                node.isClose = true;
              if (!node.nodes)
                node.type = "text";
              node.invalid = true;
            }
          });
          let parent = stack[stack.length - 1];
          let index2 = parent.nodes.indexOf(block);
          parent.nodes.splice(index2, 1, ...block.nodes);
        }
      } while (stack.length > 0);
      push({ type: "eos" });
      return ast;
    };
    module2.exports = parse;
  }
});

// node_modules/.pnpm/braces@3.0.2/node_modules/braces/index.js
var require_braces = __commonJS({
  "node_modules/.pnpm/braces@3.0.2/node_modules/braces/index.js"(exports, module2) {
    "use strict";
    var stringify = require_stringify();
    var compile = require_compile();
    var expand = require_expand();
    var parse = require_parse();
    var braces = (input, options = {}) => {
      let output = [];
      if (Array.isArray(input)) {
        for (let pattern of input) {
          let result = braces.create(pattern, options);
          if (Array.isArray(result)) {
            output.push(...result);
          } else {
            output.push(result);
          }
        }
      } else {
        output = [].concat(braces.create(input, options));
      }
      if (options && options.expand === true && options.nodupes === true) {
        output = [...new Set(output)];
      }
      return output;
    };
    braces.parse = (input, options = {}) => parse(input, options);
    braces.stringify = (input, options = {}) => {
      if (typeof input === "string") {
        return stringify(braces.parse(input, options), options);
      }
      return stringify(input, options);
    };
    braces.compile = (input, options = {}) => {
      if (typeof input === "string") {
        input = braces.parse(input, options);
      }
      return compile(input, options);
    };
    braces.expand = (input, options = {}) => {
      if (typeof input === "string") {
        input = braces.parse(input, options);
      }
      let result = expand(input, options);
      if (options.noempty === true) {
        result = result.filter(Boolean);
      }
      if (options.nodupes === true) {
        result = [...new Set(result)];
      }
      return result;
    };
    braces.create = (input, options = {}) => {
      if (input === "" || input.length < 3) {
        return [input];
      }
      return options.expand !== true ? braces.compile(input, options) : braces.expand(input, options);
    };
    module2.exports = braces;
  }
});

// node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/constants.js
var require_constants2 = __commonJS({
  "node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/constants.js"(exports, module2) {
    "use strict";
    var path = require("path");
    var WIN_SLASH = "\\\\/";
    var WIN_NO_SLASH = `[^${WIN_SLASH}]`;
    var DOT_LITERAL = "\\.";
    var PLUS_LITERAL = "\\+";
    var QMARK_LITERAL = "\\?";
    var SLASH_LITERAL = "\\/";
    var ONE_CHAR = "(?=.)";
    var QMARK = "[^/]";
    var END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
    var START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
    var DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
    var NO_DOT = `(?!${DOT_LITERAL})`;
    var NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`;
    var NO_DOT_SLASH = `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`;
    var NO_DOTS_SLASH = `(?!${DOTS_SLASH})`;
    var QMARK_NO_DOT = `[^.${SLASH_LITERAL}]`;
    var STAR = `${QMARK}*?`;
    var POSIX_CHARS = {
      DOT_LITERAL,
      PLUS_LITERAL,
      QMARK_LITERAL,
      SLASH_LITERAL,
      ONE_CHAR,
      QMARK,
      END_ANCHOR,
      DOTS_SLASH,
      NO_DOT,
      NO_DOTS,
      NO_DOT_SLASH,
      NO_DOTS_SLASH,
      QMARK_NO_DOT,
      STAR,
      START_ANCHOR
    };
    var WINDOWS_CHARS = {
      ...POSIX_CHARS,
      SLASH_LITERAL: `[${WIN_SLASH}]`,
      QMARK: WIN_NO_SLASH,
      STAR: `${WIN_NO_SLASH}*?`,
      DOTS_SLASH: `${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$)`,
      NO_DOT: `(?!${DOT_LITERAL})`,
      NO_DOTS: `(?!(?:^|[${WIN_SLASH}])${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}(?:[${WIN_SLASH}]|$))`,
      NO_DOTS_SLASH: `(?!${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      QMARK_NO_DOT: `[^.${WIN_SLASH}]`,
      START_ANCHOR: `(?:^|[${WIN_SLASH}])`,
      END_ANCHOR: `(?:[${WIN_SLASH}]|$)`
    };
    var POSIX_REGEX_SOURCE = {
      alnum: "a-zA-Z0-9",
      alpha: "a-zA-Z",
      ascii: "\\x00-\\x7F",
      blank: " \\t",
      cntrl: "\\x00-\\x1F\\x7F",
      digit: "0-9",
      graph: "\\x21-\\x7E",
      lower: "a-z",
      print: "\\x20-\\x7E ",
      punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
      space: " \\t\\r\\n\\v\\f",
      upper: "A-Z",
      word: "A-Za-z0-9_",
      xdigit: "A-Fa-f0-9"
    };
    module2.exports = {
      MAX_LENGTH: 1024 * 64,
      POSIX_REGEX_SOURCE,
      // regular expressions
      REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
      REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
      REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
      REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
      REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
      REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
      // Replace globs with equivalent patterns to reduce parsing time.
      REPLACEMENTS: {
        "***": "*",
        "**/**": "**",
        "**/**/**": "**"
      },
      // Digits
      CHAR_0: 48,
      /* 0 */
      CHAR_9: 57,
      /* 9 */
      // Alphabet chars.
      CHAR_UPPERCASE_A: 65,
      /* A */
      CHAR_LOWERCASE_A: 97,
      /* a */
      CHAR_UPPERCASE_Z: 90,
      /* Z */
      CHAR_LOWERCASE_Z: 122,
      /* z */
      CHAR_LEFT_PARENTHESES: 40,
      /* ( */
      CHAR_RIGHT_PARENTHESES: 41,
      /* ) */
      CHAR_ASTERISK: 42,
      /* * */
      // Non-alphabetic chars.
      CHAR_AMPERSAND: 38,
      /* & */
      CHAR_AT: 64,
      /* @ */
      CHAR_BACKWARD_SLASH: 92,
      /* \ */
      CHAR_CARRIAGE_RETURN: 13,
      /* \r */
      CHAR_CIRCUMFLEX_ACCENT: 94,
      /* ^ */
      CHAR_COLON: 58,
      /* : */
      CHAR_COMMA: 44,
      /* , */
      CHAR_DOT: 46,
      /* . */
      CHAR_DOUBLE_QUOTE: 34,
      /* " */
      CHAR_EQUAL: 61,
      /* = */
      CHAR_EXCLAMATION_MARK: 33,
      /* ! */
      CHAR_FORM_FEED: 12,
      /* \f */
      CHAR_FORWARD_SLASH: 47,
      /* / */
      CHAR_GRAVE_ACCENT: 96,
      /* ` */
      CHAR_HASH: 35,
      /* # */
      CHAR_HYPHEN_MINUS: 45,
      /* - */
      CHAR_LEFT_ANGLE_BRACKET: 60,
      /* < */
      CHAR_LEFT_CURLY_BRACE: 123,
      /* { */
      CHAR_LEFT_SQUARE_BRACKET: 91,
      /* [ */
      CHAR_LINE_FEED: 10,
      /* \n */
      CHAR_NO_BREAK_SPACE: 160,
      /* \u00A0 */
      CHAR_PERCENT: 37,
      /* % */
      CHAR_PLUS: 43,
      /* + */
      CHAR_QUESTION_MARK: 63,
      /* ? */
      CHAR_RIGHT_ANGLE_BRACKET: 62,
      /* > */
      CHAR_RIGHT_CURLY_BRACE: 125,
      /* } */
      CHAR_RIGHT_SQUARE_BRACKET: 93,
      /* ] */
      CHAR_SEMICOLON: 59,
      /* ; */
      CHAR_SINGLE_QUOTE: 39,
      /* ' */
      CHAR_SPACE: 32,
      /*   */
      CHAR_TAB: 9,
      /* \t */
      CHAR_UNDERSCORE: 95,
      /* _ */
      CHAR_VERTICAL_LINE: 124,
      /* | */
      CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
      /* \uFEFF */
      SEP: path.sep,
      /**
       * Create EXTGLOB_CHARS
       */
      extglobChars(chars) {
        return {
          "!": { type: "negate", open: "(?:(?!(?:", close: `))${chars.STAR})` },
          "?": { type: "qmark", open: "(?:", close: ")?" },
          "+": { type: "plus", open: "(?:", close: ")+" },
          "*": { type: "star", open: "(?:", close: ")*" },
          "@": { type: "at", open: "(?:", close: ")" }
        };
      },
      /**
       * Create GLOB_CHARS
       */
      globChars(win32) {
        return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
      }
    };
  }
});

// node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/utils.js
var require_utils2 = __commonJS({
  "node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/utils.js"(exports) {
    "use strict";
    var path = require("path");
    var win32 = process.platform === "win32";
    var {
      REGEX_BACKSLASH,
      REGEX_REMOVE_BACKSLASH,
      REGEX_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_GLOBAL
    } = require_constants2();
    exports.isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    exports.hasRegexChars = (str) => REGEX_SPECIAL_CHARS.test(str);
    exports.isRegexChar = (str) => str.length === 1 && exports.hasRegexChars(str);
    exports.escapeRegex = (str) => str.replace(REGEX_SPECIAL_CHARS_GLOBAL, "\\$1");
    exports.toPosixSlashes = (str) => str.replace(REGEX_BACKSLASH, "/");
    exports.removeBackslashes = (str) => {
      return str.replace(REGEX_REMOVE_BACKSLASH, (match) => {
        return match === "\\" ? "" : match;
      });
    };
    exports.supportsLookbehinds = () => {
      const segs = process.version.slice(1).split(".").map(Number);
      if (segs.length === 3 && segs[0] >= 9 || segs[0] === 8 && segs[1] >= 10) {
        return true;
      }
      return false;
    };
    exports.isWindows = (options) => {
      if (options && typeof options.windows === "boolean") {
        return options.windows;
      }
      return win32 === true || path.sep === "\\";
    };
    exports.escapeLast = (input, char, lastIdx) => {
      const idx = input.lastIndexOf(char, lastIdx);
      if (idx === -1)
        return input;
      if (input[idx - 1] === "\\")
        return exports.escapeLast(input, char, idx - 1);
      return `${input.slice(0, idx)}\\${input.slice(idx)}`;
    };
    exports.removePrefix = (input, state = {}) => {
      let output = input;
      if (output.startsWith("./")) {
        output = output.slice(2);
        state.prefix = "./";
      }
      return output;
    };
    exports.wrapOutput = (input, state = {}, options = {}) => {
      const prepend = options.contains ? "" : "^";
      const append = options.contains ? "" : "$";
      let output = `${prepend}(?:${input})${append}`;
      if (state.negated === true) {
        output = `(?:^(?!${output}).*$)`;
      }
      return output;
    };
  }
});

// node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/scan.js
var require_scan = __commonJS({
  "node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/scan.js"(exports, module2) {
    "use strict";
    var utils = require_utils2();
    var {
      CHAR_ASTERISK,
      /* * */
      CHAR_AT,
      /* @ */
      CHAR_BACKWARD_SLASH,
      /* \ */
      CHAR_COMMA,
      /* , */
      CHAR_DOT,
      /* . */
      CHAR_EXCLAMATION_MARK,
      /* ! */
      CHAR_FORWARD_SLASH,
      /* / */
      CHAR_LEFT_CURLY_BRACE,
      /* { */
      CHAR_LEFT_PARENTHESES,
      /* ( */
      CHAR_LEFT_SQUARE_BRACKET,
      /* [ */
      CHAR_PLUS,
      /* + */
      CHAR_QUESTION_MARK,
      /* ? */
      CHAR_RIGHT_CURLY_BRACE,
      /* } */
      CHAR_RIGHT_PARENTHESES,
      /* ) */
      CHAR_RIGHT_SQUARE_BRACKET
      /* ] */
    } = require_constants2();
    var isPathSeparator = (code) => {
      return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
    };
    var depth = (token) => {
      if (token.isPrefix !== true) {
        token.depth = token.isGlobstar ? Infinity : 1;
      }
    };
    var scan = (input, options) => {
      const opts2 = options || {};
      const length = input.length - 1;
      const scanToEnd = opts2.parts === true || opts2.scanToEnd === true;
      const slashes = [];
      const tokens = [];
      const parts = [];
      let str = input;
      let index = -1;
      let start2 = 0;
      let lastIndex = 0;
      let isBrace = false;
      let isBracket = false;
      let isGlob = false;
      let isExtglob = false;
      let isGlobstar = false;
      let braceEscaped = false;
      let backslashes = false;
      let negated = false;
      let negatedExtglob = false;
      let finished = false;
      let braces = 0;
      let prev;
      let code;
      let token = { value: "", depth: 0, isGlob: false };
      const eos = () => index >= length;
      const peek = () => str.charCodeAt(index + 1);
      const advance = () => {
        prev = code;
        return str.charCodeAt(++index);
      };
      while (index < length) {
        code = advance();
        let next;
        if (code === CHAR_BACKWARD_SLASH) {
          backslashes = token.backslashes = true;
          code = advance();
          if (code === CHAR_LEFT_CURLY_BRACE) {
            braceEscaped = true;
          }
          continue;
        }
        if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
          braces++;
          while (eos() !== true && (code = advance())) {
            if (code === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              advance();
              continue;
            }
            if (code === CHAR_LEFT_CURLY_BRACE) {
              braces++;
              continue;
            }
            if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
              isBrace = token.isBrace = true;
              isGlob = token.isGlob = true;
              finished = true;
              if (scanToEnd === true) {
                continue;
              }
              break;
            }
            if (braceEscaped !== true && code === CHAR_COMMA) {
              isBrace = token.isBrace = true;
              isGlob = token.isGlob = true;
              finished = true;
              if (scanToEnd === true) {
                continue;
              }
              break;
            }
            if (code === CHAR_RIGHT_CURLY_BRACE) {
              braces--;
              if (braces === 0) {
                braceEscaped = false;
                isBrace = token.isBrace = true;
                finished = true;
                break;
              }
            }
          }
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_FORWARD_SLASH) {
          slashes.push(index);
          tokens.push(token);
          token = { value: "", depth: 0, isGlob: false };
          if (finished === true)
            continue;
          if (prev === CHAR_DOT && index === start2 + 1) {
            start2 += 2;
            continue;
          }
          lastIndex = index + 1;
          continue;
        }
        if (opts2.noext !== true) {
          const isExtglobChar = code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK;
          if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
            isGlob = token.isGlob = true;
            isExtglob = token.isExtglob = true;
            finished = true;
            if (code === CHAR_EXCLAMATION_MARK && index === start2) {
              negatedExtglob = true;
            }
            if (scanToEnd === true) {
              while (eos() !== true && (code = advance())) {
                if (code === CHAR_BACKWARD_SLASH) {
                  backslashes = token.backslashes = true;
                  code = advance();
                  continue;
                }
                if (code === CHAR_RIGHT_PARENTHESES) {
                  isGlob = token.isGlob = true;
                  finished = true;
                  break;
                }
              }
              continue;
            }
            break;
          }
        }
        if (code === CHAR_ASTERISK) {
          if (prev === CHAR_ASTERISK)
            isGlobstar = token.isGlobstar = true;
          isGlob = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_QUESTION_MARK) {
          isGlob = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_LEFT_SQUARE_BRACKET) {
          while (eos() !== true && (next = advance())) {
            if (next === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              advance();
              continue;
            }
            if (next === CHAR_RIGHT_SQUARE_BRACKET) {
              isBracket = token.isBracket = true;
              isGlob = token.isGlob = true;
              finished = true;
              break;
            }
          }
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (opts2.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start2) {
          negated = token.negated = true;
          start2++;
          continue;
        }
        if (opts2.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
          isGlob = token.isGlob = true;
          if (scanToEnd === true) {
            while (eos() !== true && (code = advance())) {
              if (code === CHAR_LEFT_PARENTHESES) {
                backslashes = token.backslashes = true;
                code = advance();
                continue;
              }
              if (code === CHAR_RIGHT_PARENTHESES) {
                finished = true;
                break;
              }
            }
            continue;
          }
          break;
        }
        if (isGlob === true) {
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
      }
      if (opts2.noext === true) {
        isExtglob = false;
        isGlob = false;
      }
      let base = str;
      let prefix = "";
      let glob = "";
      if (start2 > 0) {
        prefix = str.slice(0, start2);
        str = str.slice(start2);
        lastIndex -= start2;
      }
      if (base && isGlob === true && lastIndex > 0) {
        base = str.slice(0, lastIndex);
        glob = str.slice(lastIndex);
      } else if (isGlob === true) {
        base = "";
        glob = str;
      } else {
        base = str;
      }
      if (base && base !== "" && base !== "/" && base !== str) {
        if (isPathSeparator(base.charCodeAt(base.length - 1))) {
          base = base.slice(0, -1);
        }
      }
      if (opts2.unescape === true) {
        if (glob)
          glob = utils.removeBackslashes(glob);
        if (base && backslashes === true) {
          base = utils.removeBackslashes(base);
        }
      }
      const state = {
        prefix,
        input,
        start: start2,
        base,
        glob,
        isBrace,
        isBracket,
        isGlob,
        isExtglob,
        isGlobstar,
        negated,
        negatedExtglob
      };
      if (opts2.tokens === true) {
        state.maxDepth = 0;
        if (!isPathSeparator(code)) {
          tokens.push(token);
        }
        state.tokens = tokens;
      }
      if (opts2.parts === true || opts2.tokens === true) {
        let prevIndex;
        for (let idx = 0; idx < slashes.length; idx++) {
          const n = prevIndex ? prevIndex + 1 : start2;
          const i = slashes[idx];
          const value = input.slice(n, i);
          if (opts2.tokens) {
            if (idx === 0 && start2 !== 0) {
              tokens[idx].isPrefix = true;
              tokens[idx].value = prefix;
            } else {
              tokens[idx].value = value;
            }
            depth(tokens[idx]);
            state.maxDepth += tokens[idx].depth;
          }
          if (idx !== 0 || value !== "") {
            parts.push(value);
          }
          prevIndex = i;
        }
        if (prevIndex && prevIndex + 1 < input.length) {
          const value = input.slice(prevIndex + 1);
          parts.push(value);
          if (opts2.tokens) {
            tokens[tokens.length - 1].value = value;
            depth(tokens[tokens.length - 1]);
            state.maxDepth += tokens[tokens.length - 1].depth;
          }
        }
        state.slashes = slashes;
        state.parts = parts;
      }
      return state;
    };
    module2.exports = scan;
  }
});

// node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/parse.js
var require_parse2 = __commonJS({
  "node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/parse.js"(exports, module2) {
    "use strict";
    var constants = require_constants2();
    var utils = require_utils2();
    var {
      MAX_LENGTH,
      POSIX_REGEX_SOURCE,
      REGEX_NON_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_BACKREF,
      REPLACEMENTS
    } = constants;
    var expandRange = (args, options) => {
      if (typeof options.expandRange === "function") {
        return options.expandRange(...args, options);
      }
      args.sort();
      const value = `[${args.join("-")}]`;
      try {
        new RegExp(value);
      } catch (ex) {
        return args.map((v) => utils.escapeRegex(v)).join("..");
      }
      return value;
    };
    var syntaxError = (type, char) => {
      return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
    };
    var parse = (input, options) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected a string");
      }
      input = REPLACEMENTS[input] || input;
      const opts2 = { ...options };
      const max = typeof opts2.maxLength === "number" ? Math.min(MAX_LENGTH, opts2.maxLength) : MAX_LENGTH;
      let len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      const bos = { type: "bos", value: "", output: opts2.prepend || "" };
      const tokens = [bos];
      const capture = opts2.capture ? "" : "?:";
      const win32 = utils.isWindows(options);
      const PLATFORM_CHARS = constants.globChars(win32);
      const EXTGLOB_CHARS = constants.extglobChars(PLATFORM_CHARS);
      const {
        DOT_LITERAL,
        PLUS_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOT_SLASH,
        NO_DOTS_SLASH,
        QMARK,
        QMARK_NO_DOT,
        STAR,
        START_ANCHOR
      } = PLATFORM_CHARS;
      const globstar = (opts3) => {
        return `(${capture}(?:(?!${START_ANCHOR}${opts3.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };
      const nodot = opts2.dot ? "" : NO_DOT;
      const qmarkNoDot = opts2.dot ? QMARK : QMARK_NO_DOT;
      let star = opts2.bash === true ? globstar(opts2) : STAR;
      if (opts2.capture) {
        star = `(${star})`;
      }
      if (typeof opts2.noext === "boolean") {
        opts2.noextglob = opts2.noext;
      }
      const state = {
        input,
        index: -1,
        start: 0,
        dot: opts2.dot === true,
        consumed: "",
        output: "",
        prefix: "",
        backtrack: false,
        negated: false,
        brackets: 0,
        braces: 0,
        parens: 0,
        quotes: 0,
        globstar: false,
        tokens
      };
      input = utils.removePrefix(input, state);
      len = input.length;
      const extglobs = [];
      const braces = [];
      const stack = [];
      let prev = bos;
      let value;
      const eos = () => state.index === len - 1;
      const peek = state.peek = (n = 1) => input[state.index + n];
      const advance = state.advance = () => input[++state.index] || "";
      const remaining = () => input.slice(state.index + 1);
      const consume = (value2 = "", num = 0) => {
        state.consumed += value2;
        state.index += num;
      };
      const append = (token) => {
        state.output += token.output != null ? token.output : token.value;
        consume(token.value);
      };
      const negate = () => {
        let count = 1;
        while (peek() === "!" && (peek(2) !== "(" || peek(3) === "?")) {
          advance();
          state.start++;
          count++;
        }
        if (count % 2 === 0) {
          return false;
        }
        state.negated = true;
        state.start++;
        return true;
      };
      const increment = (type) => {
        state[type]++;
        stack.push(type);
      };
      const decrement = (type) => {
        state[type]--;
        stack.pop();
      };
      const push = (tok) => {
        if (prev.type === "globstar") {
          const isBrace = state.braces > 0 && (tok.type === "comma" || tok.type === "brace");
          const isExtglob = tok.extglob === true || extglobs.length && (tok.type === "pipe" || tok.type === "paren");
          if (tok.type !== "slash" && tok.type !== "paren" && !isBrace && !isExtglob) {
            state.output = state.output.slice(0, -prev.output.length);
            prev.type = "star";
            prev.value = "*";
            prev.output = star;
            state.output += prev.output;
          }
        }
        if (extglobs.length && tok.type !== "paren") {
          extglobs[extglobs.length - 1].inner += tok.value;
        }
        if (tok.value || tok.output)
          append(tok);
        if (prev && prev.type === "text" && tok.type === "text") {
          prev.value += tok.value;
          prev.output = (prev.output || "") + tok.value;
          return;
        }
        tok.prev = prev;
        tokens.push(tok);
        prev = tok;
      };
      const extglobOpen = (type, value2) => {
        const token = { ...EXTGLOB_CHARS[value2], conditions: 1, inner: "" };
        token.prev = prev;
        token.parens = state.parens;
        token.output = state.output;
        const output = (opts2.capture ? "(" : "") + token.open;
        increment("parens");
        push({ type, value: value2, output: state.output ? "" : ONE_CHAR });
        push({ type: "paren", extglob: true, value: advance(), output });
        extglobs.push(token);
      };
      const extglobClose = (token) => {
        let output = token.close + (opts2.capture ? ")" : "");
        let rest;
        if (token.type === "negate") {
          let extglobStar = star;
          if (token.inner && token.inner.length > 1 && token.inner.includes("/")) {
            extglobStar = globstar(opts2);
          }
          if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
            output = token.close = `)$))${extglobStar}`;
          }
          if (token.inner.includes("*") && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
            const expression = parse(rest, { ...options, fastpaths: false }).output;
            output = token.close = `)${expression})${extglobStar})`;
          }
          if (token.prev.type === "bos") {
            state.negatedExtglob = true;
          }
        }
        push({ type: "paren", extglob: true, value, output });
        decrement("parens");
      };
      if (opts2.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
        let backslashes = false;
        let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index) => {
          if (first === "\\") {
            backslashes = true;
            return m;
          }
          if (first === "?") {
            if (esc) {
              return esc + first + (rest ? QMARK.repeat(rest.length) : "");
            }
            if (index === 0) {
              return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : "");
            }
            return QMARK.repeat(chars.length);
          }
          if (first === ".") {
            return DOT_LITERAL.repeat(chars.length);
          }
          if (first === "*") {
            if (esc) {
              return esc + first + (rest ? star : "");
            }
            return star;
          }
          return esc ? m : `\\${m}`;
        });
        if (backslashes === true) {
          if (opts2.unescape === true) {
            output = output.replace(/\\/g, "");
          } else {
            output = output.replace(/\\+/g, (m) => {
              return m.length % 2 === 0 ? "\\\\" : m ? "\\" : "";
            });
          }
        }
        if (output === input && opts2.contains === true) {
          state.output = input;
          return state;
        }
        state.output = utils.wrapOutput(output, state, options);
        return state;
      }
      while (!eos()) {
        value = advance();
        if (value === "\0") {
          continue;
        }
        if (value === "\\") {
          const next = peek();
          if (next === "/" && opts2.bash !== true) {
            continue;
          }
          if (next === "." || next === ";") {
            continue;
          }
          if (!next) {
            value += "\\";
            push({ type: "text", value });
            continue;
          }
          const match = /^\\+/.exec(remaining());
          let slashes = 0;
          if (match && match[0].length > 2) {
            slashes = match[0].length;
            state.index += slashes;
            if (slashes % 2 !== 0) {
              value += "\\";
            }
          }
          if (opts2.unescape === true) {
            value = advance();
          } else {
            value += advance();
          }
          if (state.brackets === 0) {
            push({ type: "text", value });
            continue;
          }
        }
        if (state.brackets > 0 && (value !== "]" || prev.value === "[" || prev.value === "[^")) {
          if (opts2.posix !== false && value === ":") {
            const inner = prev.value.slice(1);
            if (inner.includes("[")) {
              prev.posix = true;
              if (inner.includes(":")) {
                const idx = prev.value.lastIndexOf("[");
                const pre = prev.value.slice(0, idx);
                const rest2 = prev.value.slice(idx + 2);
                const posix = POSIX_REGEX_SOURCE[rest2];
                if (posix) {
                  prev.value = pre + posix;
                  state.backtrack = true;
                  advance();
                  if (!bos.output && tokens.indexOf(prev) === 1) {
                    bos.output = ONE_CHAR;
                  }
                  continue;
                }
              }
            }
          }
          if (value === "[" && peek() !== ":" || value === "-" && peek() === "]") {
            value = `\\${value}`;
          }
          if (value === "]" && (prev.value === "[" || prev.value === "[^")) {
            value = `\\${value}`;
          }
          if (opts2.posix === true && value === "!" && prev.value === "[") {
            value = "^";
          }
          prev.value += value;
          append({ value });
          continue;
        }
        if (state.quotes === 1 && value !== '"') {
          value = utils.escapeRegex(value);
          prev.value += value;
          append({ value });
          continue;
        }
        if (value === '"') {
          state.quotes = state.quotes === 1 ? 0 : 1;
          if (opts2.keepQuotes === true) {
            push({ type: "text", value });
          }
          continue;
        }
        if (value === "(") {
          increment("parens");
          push({ type: "paren", value });
          continue;
        }
        if (value === ")") {
          if (state.parens === 0 && opts2.strictBrackets === true) {
            throw new SyntaxError(syntaxError("opening", "("));
          }
          const extglob = extglobs[extglobs.length - 1];
          if (extglob && state.parens === extglob.parens + 1) {
            extglobClose(extglobs.pop());
            continue;
          }
          push({ type: "paren", value, output: state.parens ? ")" : "\\)" });
          decrement("parens");
          continue;
        }
        if (value === "[") {
          if (opts2.nobracket === true || !remaining().includes("]")) {
            if (opts2.nobracket !== true && opts2.strictBrackets === true) {
              throw new SyntaxError(syntaxError("closing", "]"));
            }
            value = `\\${value}`;
          } else {
            increment("brackets");
          }
          push({ type: "bracket", value });
          continue;
        }
        if (value === "]") {
          if (opts2.nobracket === true || prev && prev.type === "bracket" && prev.value.length === 1) {
            push({ type: "text", value, output: `\\${value}` });
            continue;
          }
          if (state.brackets === 0) {
            if (opts2.strictBrackets === true) {
              throw new SyntaxError(syntaxError("opening", "["));
            }
            push({ type: "text", value, output: `\\${value}` });
            continue;
          }
          decrement("brackets");
          const prevValue = prev.value.slice(1);
          if (prev.posix !== true && prevValue[0] === "^" && !prevValue.includes("/")) {
            value = `/${value}`;
          }
          prev.value += value;
          append({ value });
          if (opts2.literalBrackets === false || utils.hasRegexChars(prevValue)) {
            continue;
          }
          const escaped = utils.escapeRegex(prev.value);
          state.output = state.output.slice(0, -prev.value.length);
          if (opts2.literalBrackets === true) {
            state.output += escaped;
            prev.value = escaped;
            continue;
          }
          prev.value = `(${capture}${escaped}|${prev.value})`;
          state.output += prev.value;
          continue;
        }
        if (value === "{" && opts2.nobrace !== true) {
          increment("braces");
          const open = {
            type: "brace",
            value,
            output: "(",
            outputIndex: state.output.length,
            tokensIndex: state.tokens.length
          };
          braces.push(open);
          push(open);
          continue;
        }
        if (value === "}") {
          const brace = braces[braces.length - 1];
          if (opts2.nobrace === true || !brace) {
            push({ type: "text", value, output: value });
            continue;
          }
          let output = ")";
          if (brace.dots === true) {
            const arr = tokens.slice();
            const range = [];
            for (let i = arr.length - 1; i >= 0; i--) {
              tokens.pop();
              if (arr[i].type === "brace") {
                break;
              }
              if (arr[i].type !== "dots") {
                range.unshift(arr[i].value);
              }
            }
            output = expandRange(range, opts2);
            state.backtrack = true;
          }
          if (brace.comma !== true && brace.dots !== true) {
            const out = state.output.slice(0, brace.outputIndex);
            const toks = state.tokens.slice(brace.tokensIndex);
            brace.value = brace.output = "\\{";
            value = output = "\\}";
            state.output = out;
            for (const t of toks) {
              state.output += t.output || t.value;
            }
          }
          push({ type: "brace", value, output });
          decrement("braces");
          braces.pop();
          continue;
        }
        if (value === "|") {
          if (extglobs.length > 0) {
            extglobs[extglobs.length - 1].conditions++;
          }
          push({ type: "text", value });
          continue;
        }
        if (value === ",") {
          let output = value;
          const brace = braces[braces.length - 1];
          if (brace && stack[stack.length - 1] === "braces") {
            brace.comma = true;
            output = "|";
          }
          push({ type: "comma", value, output });
          continue;
        }
        if (value === "/") {
          if (prev.type === "dot" && state.index === state.start + 1) {
            state.start = state.index + 1;
            state.consumed = "";
            state.output = "";
            tokens.pop();
            prev = bos;
            continue;
          }
          push({ type: "slash", value, output: SLASH_LITERAL });
          continue;
        }
        if (value === ".") {
          if (state.braces > 0 && prev.type === "dot") {
            if (prev.value === ".")
              prev.output = DOT_LITERAL;
            const brace = braces[braces.length - 1];
            prev.type = "dots";
            prev.output += value;
            prev.value += value;
            brace.dots = true;
            continue;
          }
          if (state.braces + state.parens === 0 && prev.type !== "bos" && prev.type !== "slash") {
            push({ type: "text", value, output: DOT_LITERAL });
            continue;
          }
          push({ type: "dot", value, output: DOT_LITERAL });
          continue;
        }
        if (value === "?") {
          const isGroup = prev && prev.value === "(";
          if (!isGroup && opts2.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            extglobOpen("qmark", value);
            continue;
          }
          if (prev && prev.type === "paren") {
            const next = peek();
            let output = value;
            if (next === "<" && !utils.supportsLookbehinds()) {
              throw new Error("Node.js v10 or higher is required for regex lookbehinds");
            }
            if (prev.value === "(" && !/[!=<:]/.test(next) || next === "<" && !/<([!=]|\w+>)/.test(remaining())) {
              output = `\\${value}`;
            }
            push({ type: "text", value, output });
            continue;
          }
          if (opts2.dot !== true && (prev.type === "slash" || prev.type === "bos")) {
            push({ type: "qmark", value, output: QMARK_NO_DOT });
            continue;
          }
          push({ type: "qmark", value, output: QMARK });
          continue;
        }
        if (value === "!") {
          if (opts2.noextglob !== true && peek() === "(") {
            if (peek(2) !== "?" || !/[!=<:]/.test(peek(3))) {
              extglobOpen("negate", value);
              continue;
            }
          }
          if (opts2.nonegate !== true && state.index === 0) {
            negate();
            continue;
          }
        }
        if (value === "+") {
          if (opts2.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            extglobOpen("plus", value);
            continue;
          }
          if (prev && prev.value === "(" || opts2.regex === false) {
            push({ type: "plus", value, output: PLUS_LITERAL });
            continue;
          }
          if (prev && (prev.type === "bracket" || prev.type === "paren" || prev.type === "brace") || state.parens > 0) {
            push({ type: "plus", value });
            continue;
          }
          push({ type: "plus", value: PLUS_LITERAL });
          continue;
        }
        if (value === "@") {
          if (opts2.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            push({ type: "at", extglob: true, value, output: "" });
            continue;
          }
          push({ type: "text", value });
          continue;
        }
        if (value !== "*") {
          if (value === "$" || value === "^") {
            value = `\\${value}`;
          }
          const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
          if (match) {
            value += match[0];
            state.index += match[0].length;
          }
          push({ type: "text", value });
          continue;
        }
        if (prev && (prev.type === "globstar" || prev.star === true)) {
          prev.type = "star";
          prev.star = true;
          prev.value += value;
          prev.output = star;
          state.backtrack = true;
          state.globstar = true;
          consume(value);
          continue;
        }
        let rest = remaining();
        if (opts2.noextglob !== true && /^\([^?]/.test(rest)) {
          extglobOpen("star", value);
          continue;
        }
        if (prev.type === "star") {
          if (opts2.noglobstar === true) {
            consume(value);
            continue;
          }
          const prior = prev.prev;
          const before = prior.prev;
          const isStart = prior.type === "slash" || prior.type === "bos";
          const afterStar = before && (before.type === "star" || before.type === "globstar");
          if (opts2.bash === true && (!isStart || rest[0] && rest[0] !== "/")) {
            push({ type: "star", value, output: "" });
            continue;
          }
          const isBrace = state.braces > 0 && (prior.type === "comma" || prior.type === "brace");
          const isExtglob = extglobs.length && (prior.type === "pipe" || prior.type === "paren");
          if (!isStart && prior.type !== "paren" && !isBrace && !isExtglob) {
            push({ type: "star", value, output: "" });
            continue;
          }
          while (rest.slice(0, 3) === "/**") {
            const after = input[state.index + 4];
            if (after && after !== "/") {
              break;
            }
            rest = rest.slice(3);
            consume("/**", 3);
          }
          if (prior.type === "bos" && eos()) {
            prev.type = "globstar";
            prev.value += value;
            prev.output = globstar(opts2);
            state.output = prev.output;
            state.globstar = true;
            consume(value);
            continue;
          }
          if (prior.type === "slash" && prior.prev.type !== "bos" && !afterStar && eos()) {
            state.output = state.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;
            prev.type = "globstar";
            prev.output = globstar(opts2) + (opts2.strictSlashes ? ")" : "|$)");
            prev.value += value;
            state.globstar = true;
            state.output += prior.output + prev.output;
            consume(value);
            continue;
          }
          if (prior.type === "slash" && prior.prev.type !== "bos" && rest[0] === "/") {
            const end = rest[1] !== void 0 ? "|$" : "";
            state.output = state.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;
            prev.type = "globstar";
            prev.output = `${globstar(opts2)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
            prev.value += value;
            state.output += prior.output + prev.output;
            state.globstar = true;
            consume(value + advance());
            push({ type: "slash", value: "/", output: "" });
            continue;
          }
          if (prior.type === "bos" && rest[0] === "/") {
            prev.type = "globstar";
            prev.value += value;
            prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts2)}${SLASH_LITERAL})`;
            state.output = prev.output;
            state.globstar = true;
            consume(value + advance());
            push({ type: "slash", value: "/", output: "" });
            continue;
          }
          state.output = state.output.slice(0, -prev.output.length);
          prev.type = "globstar";
          prev.output = globstar(opts2);
          prev.value += value;
          state.output += prev.output;
          state.globstar = true;
          consume(value);
          continue;
        }
        const token = { type: "star", value, output: star };
        if (opts2.bash === true) {
          token.output = ".*?";
          if (prev.type === "bos" || prev.type === "slash") {
            token.output = nodot + token.output;
          }
          push(token);
          continue;
        }
        if (prev && (prev.type === "bracket" || prev.type === "paren") && opts2.regex === true) {
          token.output = value;
          push(token);
          continue;
        }
        if (state.index === state.start || prev.type === "slash" || prev.type === "dot") {
          if (prev.type === "dot") {
            state.output += NO_DOT_SLASH;
            prev.output += NO_DOT_SLASH;
          } else if (opts2.dot === true) {
            state.output += NO_DOTS_SLASH;
            prev.output += NO_DOTS_SLASH;
          } else {
            state.output += nodot;
            prev.output += nodot;
          }
          if (peek() !== "*") {
            state.output += ONE_CHAR;
            prev.output += ONE_CHAR;
          }
        }
        push(token);
      }
      while (state.brackets > 0) {
        if (opts2.strictBrackets === true)
          throw new SyntaxError(syntaxError("closing", "]"));
        state.output = utils.escapeLast(state.output, "[");
        decrement("brackets");
      }
      while (state.parens > 0) {
        if (opts2.strictBrackets === true)
          throw new SyntaxError(syntaxError("closing", ")"));
        state.output = utils.escapeLast(state.output, "(");
        decrement("parens");
      }
      while (state.braces > 0) {
        if (opts2.strictBrackets === true)
          throw new SyntaxError(syntaxError("closing", "}"));
        state.output = utils.escapeLast(state.output, "{");
        decrement("braces");
      }
      if (opts2.strictSlashes !== true && (prev.type === "star" || prev.type === "bracket")) {
        push({ type: "maybe_slash", value: "", output: `${SLASH_LITERAL}?` });
      }
      if (state.backtrack === true) {
        state.output = "";
        for (const token of state.tokens) {
          state.output += token.output != null ? token.output : token.value;
          if (token.suffix) {
            state.output += token.suffix;
          }
        }
      }
      return state;
    };
    parse.fastpaths = (input, options) => {
      const opts2 = { ...options };
      const max = typeof opts2.maxLength === "number" ? Math.min(MAX_LENGTH, opts2.maxLength) : MAX_LENGTH;
      const len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      input = REPLACEMENTS[input] || input;
      const win32 = utils.isWindows(options);
      const {
        DOT_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOTS,
        NO_DOTS_SLASH,
        STAR,
        START_ANCHOR
      } = constants.globChars(win32);
      const nodot = opts2.dot ? NO_DOTS : NO_DOT;
      const slashDot = opts2.dot ? NO_DOTS_SLASH : NO_DOT;
      const capture = opts2.capture ? "" : "?:";
      const state = { negated: false, prefix: "" };
      let star = opts2.bash === true ? ".*?" : STAR;
      if (opts2.capture) {
        star = `(${star})`;
      }
      const globstar = (opts3) => {
        if (opts3.noglobstar === true)
          return star;
        return `(${capture}(?:(?!${START_ANCHOR}${opts3.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };
      const create = (str) => {
        switch (str) {
          case "*":
            return `${nodot}${ONE_CHAR}${star}`;
          case ".*":
            return `${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "*.*":
            return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "*/*":
            return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;
          case "**":
            return nodot + globstar(opts2);
          case "**/*":
            return `(?:${nodot}${globstar(opts2)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;
          case "**/*.*":
            return `(?:${nodot}${globstar(opts2)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "**/.*":
            return `(?:${nodot}${globstar(opts2)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;
          default: {
            const match = /^(.*?)\.(\w+)$/.exec(str);
            if (!match)
              return;
            const source2 = create(match[1]);
            if (!source2)
              return;
            return source2 + DOT_LITERAL + match[2];
          }
        }
      };
      const output = utils.removePrefix(input, state);
      let source = create(output);
      if (source && opts2.strictSlashes !== true) {
        source += `${SLASH_LITERAL}?`;
      }
      return source;
    };
    module2.exports = parse;
  }
});

// node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/picomatch.js
var require_picomatch = __commonJS({
  "node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/picomatch.js"(exports, module2) {
    "use strict";
    var path = require("path");
    var scan = require_scan();
    var parse = require_parse2();
    var utils = require_utils2();
    var constants = require_constants2();
    var isObject = (val) => val && typeof val === "object" && !Array.isArray(val);
    var picomatch = (glob, options, returnState = false) => {
      if (Array.isArray(glob)) {
        const fns = glob.map((input) => picomatch(input, options, returnState));
        const arrayMatcher = (str) => {
          for (const isMatch of fns) {
            const state2 = isMatch(str);
            if (state2)
              return state2;
          }
          return false;
        };
        return arrayMatcher;
      }
      const isState = isObject(glob) && glob.tokens && glob.input;
      if (glob === "" || typeof glob !== "string" && !isState) {
        throw new TypeError("Expected pattern to be a non-empty string");
      }
      const opts2 = options || {};
      const posix = utils.isWindows(options);
      const regex = isState ? picomatch.compileRe(glob, options) : picomatch.makeRe(glob, options, false, true);
      const state = regex.state;
      delete regex.state;
      let isIgnored = () => false;
      if (opts2.ignore) {
        const ignoreOpts = { ...options, ignore: null, onMatch: null, onResult: null };
        isIgnored = picomatch(opts2.ignore, ignoreOpts, returnState);
      }
      const matcher = (input, returnObject = false) => {
        const { isMatch, match, output } = picomatch.test(input, regex, options, { glob, posix });
        const result = { glob, state, regex, posix, input, output, match, isMatch };
        if (typeof opts2.onResult === "function") {
          opts2.onResult(result);
        }
        if (isMatch === false) {
          result.isMatch = false;
          return returnObject ? result : false;
        }
        if (isIgnored(input)) {
          if (typeof opts2.onIgnore === "function") {
            opts2.onIgnore(result);
          }
          result.isMatch = false;
          return returnObject ? result : false;
        }
        if (typeof opts2.onMatch === "function") {
          opts2.onMatch(result);
        }
        return returnObject ? result : true;
      };
      if (returnState) {
        matcher.state = state;
      }
      return matcher;
    };
    picomatch.test = (input, regex, options, { glob, posix } = {}) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected input to be a string");
      }
      if (input === "") {
        return { isMatch: false, output: "" };
      }
      const opts2 = options || {};
      const format = opts2.format || (posix ? utils.toPosixSlashes : null);
      let match = input === glob;
      let output = match && format ? format(input) : input;
      if (match === false) {
        output = format ? format(input) : input;
        match = output === glob;
      }
      if (match === false || opts2.capture === true) {
        if (opts2.matchBase === true || opts2.basename === true) {
          match = picomatch.matchBase(input, regex, options, posix);
        } else {
          match = regex.exec(output);
        }
      }
      return { isMatch: Boolean(match), match, output };
    };
    picomatch.matchBase = (input, glob, options, posix = utils.isWindows(options)) => {
      const regex = glob instanceof RegExp ? glob : picomatch.makeRe(glob, options);
      return regex.test(path.basename(input));
    };
    picomatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);
    picomatch.parse = (pattern, options) => {
      if (Array.isArray(pattern))
        return pattern.map((p) => picomatch.parse(p, options));
      return parse(pattern, { ...options, fastpaths: false });
    };
    picomatch.scan = (input, options) => scan(input, options);
    picomatch.compileRe = (state, options, returnOutput = false, returnState = false) => {
      if (returnOutput === true) {
        return state.output;
      }
      const opts2 = options || {};
      const prepend = opts2.contains ? "" : "^";
      const append = opts2.contains ? "" : "$";
      let source = `${prepend}(?:${state.output})${append}`;
      if (state && state.negated === true) {
        source = `^(?!${source}).*$`;
      }
      const regex = picomatch.toRegex(source, options);
      if (returnState === true) {
        regex.state = state;
      }
      return regex;
    };
    picomatch.makeRe = (input, options = {}, returnOutput = false, returnState = false) => {
      if (!input || typeof input !== "string") {
        throw new TypeError("Expected a non-empty string");
      }
      let parsed = { negated: false, fastpaths: true };
      if (options.fastpaths !== false && (input[0] === "." || input[0] === "*")) {
        parsed.output = parse.fastpaths(input, options);
      }
      if (!parsed.output) {
        parsed = parse(input, options);
      }
      return picomatch.compileRe(parsed, options, returnOutput, returnState);
    };
    picomatch.toRegex = (source, options) => {
      try {
        const opts2 = options || {};
        return new RegExp(source, opts2.flags || (opts2.nocase ? "i" : ""));
      } catch (err) {
        if (options && options.debug === true)
          throw err;
        return /$^/;
      }
    };
    picomatch.constants = constants;
    module2.exports = picomatch;
  }
});

// node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/index.js
var require_picomatch2 = __commonJS({
  "node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/index.js"(exports, module2) {
    "use strict";
    module2.exports = require_picomatch();
  }
});

// node_modules/.pnpm/micromatch@4.0.5/node_modules/micromatch/index.js
var require_micromatch = __commonJS({
  "node_modules/.pnpm/micromatch@4.0.5/node_modules/micromatch/index.js"(exports, module2) {
    "use strict";
    var util = require("util");
    var braces = require_braces();
    var picomatch = require_picomatch2();
    var utils = require_utils2();
    var isEmptyString = (val) => val === "" || val === "./";
    var micromatch = (list, patterns, options) => {
      patterns = [].concat(patterns);
      list = [].concat(list);
      let omit = /* @__PURE__ */ new Set();
      let keep = /* @__PURE__ */ new Set();
      let items = /* @__PURE__ */ new Set();
      let negatives = 0;
      let onResult = (state) => {
        items.add(state.output);
        if (options && options.onResult) {
          options.onResult(state);
        }
      };
      for (let i = 0; i < patterns.length; i++) {
        let isMatch = picomatch(String(patterns[i]), { ...options, onResult }, true);
        let negated = isMatch.state.negated || isMatch.state.negatedExtglob;
        if (negated)
          negatives++;
        for (let item of list) {
          let matched = isMatch(item, true);
          let match = negated ? !matched.isMatch : matched.isMatch;
          if (!match)
            continue;
          if (negated) {
            omit.add(matched.output);
          } else {
            omit.delete(matched.output);
            keep.add(matched.output);
          }
        }
      }
      let result = negatives === patterns.length ? [...items] : [...keep];
      let matches = result.filter((item) => !omit.has(item));
      if (options && matches.length === 0) {
        if (options.failglob === true) {
          throw new Error(`No matches found for "${patterns.join(", ")}"`);
        }
        if (options.nonull === true || options.nullglob === true) {
          return options.unescape ? patterns.map((p) => p.replace(/\\/g, "")) : patterns;
        }
      }
      return matches;
    };
    micromatch.match = micromatch;
    micromatch.matcher = (pattern, options) => picomatch(pattern, options);
    micromatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);
    micromatch.any = micromatch.isMatch;
    micromatch.not = (list, patterns, options = {}) => {
      patterns = [].concat(patterns).map(String);
      let result = /* @__PURE__ */ new Set();
      let items = [];
      let onResult = (state) => {
        if (options.onResult)
          options.onResult(state);
        items.push(state.output);
      };
      let matches = new Set(micromatch(list, patterns, { ...options, onResult }));
      for (let item of items) {
        if (!matches.has(item)) {
          result.add(item);
        }
      }
      return [...result];
    };
    micromatch.contains = (str, pattern, options) => {
      if (typeof str !== "string") {
        throw new TypeError(`Expected a string: "${util.inspect(str)}"`);
      }
      if (Array.isArray(pattern)) {
        return pattern.some((p) => micromatch.contains(str, p, options));
      }
      if (typeof pattern === "string") {
        if (isEmptyString(str) || isEmptyString(pattern)) {
          return false;
        }
        if (str.includes(pattern) || str.startsWith("./") && str.slice(2).includes(pattern)) {
          return true;
        }
      }
      return micromatch.isMatch(str, pattern, { ...options, contains: true });
    };
    micromatch.matchKeys = (obj, patterns, options) => {
      if (!utils.isObject(obj)) {
        throw new TypeError("Expected the first argument to be an object");
      }
      let keys = micromatch(Object.keys(obj), patterns, options);
      let res = {};
      for (let key of keys)
        res[key] = obj[key];
      return res;
    };
    micromatch.some = (list, patterns, options) => {
      let items = [].concat(list);
      for (let pattern of [].concat(patterns)) {
        let isMatch = picomatch(String(pattern), options);
        if (items.some((item) => isMatch(item))) {
          return true;
        }
      }
      return false;
    };
    micromatch.every = (list, patterns, options) => {
      let items = [].concat(list);
      for (let pattern of [].concat(patterns)) {
        let isMatch = picomatch(String(pattern), options);
        if (!items.every((item) => isMatch(item))) {
          return false;
        }
      }
      return true;
    };
    micromatch.all = (str, patterns, options) => {
      if (typeof str !== "string") {
        throw new TypeError(`Expected a string: "${util.inspect(str)}"`);
      }
      return [].concat(patterns).every((p) => picomatch(p, options)(str));
    };
    micromatch.capture = (glob, input, options) => {
      let posix = utils.isWindows(options);
      let regex = picomatch.makeRe(String(glob), { ...options, capture: true });
      let match = regex.exec(posix ? utils.toPosixSlashes(input) : input);
      if (match) {
        return match.slice(1).map((v) => v === void 0 ? "" : v);
      }
    };
    micromatch.makeRe = (...args) => picomatch.makeRe(...args);
    micromatch.scan = (...args) => picomatch.scan(...args);
    micromatch.parse = (patterns, options) => {
      let res = [];
      for (let pattern of [].concat(patterns || [])) {
        for (let str of braces(String(pattern), options)) {
          res.push(picomatch.parse(str, options));
        }
      }
      return res;
    };
    micromatch.braces = (pattern, options) => {
      if (typeof pattern !== "string")
        throw new TypeError("Expected a string");
      if (options && options.nobrace === true || !/\{.*\}/.test(pattern)) {
        return [pattern];
      }
      return braces(pattern, options);
    };
    micromatch.braceExpand = (pattern, options) => {
      if (typeof pattern !== "string")
        throw new TypeError("Expected a string");
      return micromatch.braces(pattern, { ...options, expand: true });
    };
    module2.exports = micromatch;
  }
});

// node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/utils/pattern.js
var require_pattern = __commonJS({
  "node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/utils/pattern.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.removeDuplicateSlashes = exports.matchAny = exports.convertPatternsToRe = exports.makeRe = exports.getPatternParts = exports.expandBraceExpansion = exports.expandPatternsWithBraceExpansion = exports.isAffectDepthOfReadingPattern = exports.endsWithSlashGlobStar = exports.hasGlobStar = exports.getBaseDirectory = exports.isPatternRelatedToParentDirectory = exports.getPatternsOutsideCurrentDirectory = exports.getPatternsInsideCurrentDirectory = exports.getPositivePatterns = exports.getNegativePatterns = exports.isPositivePattern = exports.isNegativePattern = exports.convertToNegativePattern = exports.convertToPositivePattern = exports.isDynamicPattern = exports.isStaticPattern = void 0;
    var path = require("path");
    var globParent = require_glob_parent();
    var micromatch = require_micromatch();
    var GLOBSTAR = "**";
    var ESCAPE_SYMBOL = "\\";
    var COMMON_GLOB_SYMBOLS_RE = /[*?]|^!/;
    var REGEX_CHARACTER_CLASS_SYMBOLS_RE = /\[[^[]*]/;
    var REGEX_GROUP_SYMBOLS_RE = /(?:^|[^!*+?@])\([^(]*\|[^|]*\)/;
    var GLOB_EXTENSION_SYMBOLS_RE = /[!*+?@]\([^(]*\)/;
    var BRACE_EXPANSION_SEPARATORS_RE = /,|\.\./;
    var DOUBLE_SLASH_RE = /(?!^)\/{2,}/g;
    function isStaticPattern(pattern, options = {}) {
      return !isDynamicPattern(pattern, options);
    }
    exports.isStaticPattern = isStaticPattern;
    function isDynamicPattern(pattern, options = {}) {
      if (pattern === "") {
        return false;
      }
      if (options.caseSensitiveMatch === false || pattern.includes(ESCAPE_SYMBOL)) {
        return true;
      }
      if (COMMON_GLOB_SYMBOLS_RE.test(pattern) || REGEX_CHARACTER_CLASS_SYMBOLS_RE.test(pattern) || REGEX_GROUP_SYMBOLS_RE.test(pattern)) {
        return true;
      }
      if (options.extglob !== false && GLOB_EXTENSION_SYMBOLS_RE.test(pattern)) {
        return true;
      }
      if (options.braceExpansion !== false && hasBraceExpansion(pattern)) {
        return true;
      }
      return false;
    }
    exports.isDynamicPattern = isDynamicPattern;
    function hasBraceExpansion(pattern) {
      const openingBraceIndex = pattern.indexOf("{");
      if (openingBraceIndex === -1) {
        return false;
      }
      const closingBraceIndex = pattern.indexOf("}", openingBraceIndex + 1);
      if (closingBraceIndex === -1) {
        return false;
      }
      const braceContent = pattern.slice(openingBraceIndex, closingBraceIndex);
      return BRACE_EXPANSION_SEPARATORS_RE.test(braceContent);
    }
    function convertToPositivePattern(pattern) {
      return isNegativePattern(pattern) ? pattern.slice(1) : pattern;
    }
    exports.convertToPositivePattern = convertToPositivePattern;
    function convertToNegativePattern(pattern) {
      return "!" + pattern;
    }
    exports.convertToNegativePattern = convertToNegativePattern;
    function isNegativePattern(pattern) {
      return pattern.startsWith("!") && pattern[1] !== "(";
    }
    exports.isNegativePattern = isNegativePattern;
    function isPositivePattern(pattern) {
      return !isNegativePattern(pattern);
    }
    exports.isPositivePattern = isPositivePattern;
    function getNegativePatterns(patterns) {
      return patterns.filter(isNegativePattern);
    }
    exports.getNegativePatterns = getNegativePatterns;
    function getPositivePatterns(patterns) {
      return patterns.filter(isPositivePattern);
    }
    exports.getPositivePatterns = getPositivePatterns;
    function getPatternsInsideCurrentDirectory(patterns) {
      return patterns.filter((pattern) => !isPatternRelatedToParentDirectory(pattern));
    }
    exports.getPatternsInsideCurrentDirectory = getPatternsInsideCurrentDirectory;
    function getPatternsOutsideCurrentDirectory(patterns) {
      return patterns.filter(isPatternRelatedToParentDirectory);
    }
    exports.getPatternsOutsideCurrentDirectory = getPatternsOutsideCurrentDirectory;
    function isPatternRelatedToParentDirectory(pattern) {
      return pattern.startsWith("..") || pattern.startsWith("./..");
    }
    exports.isPatternRelatedToParentDirectory = isPatternRelatedToParentDirectory;
    function getBaseDirectory(pattern) {
      return globParent(pattern, { flipBackslashes: false });
    }
    exports.getBaseDirectory = getBaseDirectory;
    function hasGlobStar(pattern) {
      return pattern.includes(GLOBSTAR);
    }
    exports.hasGlobStar = hasGlobStar;
    function endsWithSlashGlobStar(pattern) {
      return pattern.endsWith("/" + GLOBSTAR);
    }
    exports.endsWithSlashGlobStar = endsWithSlashGlobStar;
    function isAffectDepthOfReadingPattern(pattern) {
      const basename2 = path.basename(pattern);
      return endsWithSlashGlobStar(pattern) || isStaticPattern(basename2);
    }
    exports.isAffectDepthOfReadingPattern = isAffectDepthOfReadingPattern;
    function expandPatternsWithBraceExpansion(patterns) {
      return patterns.reduce((collection, pattern) => {
        return collection.concat(expandBraceExpansion(pattern));
      }, []);
    }
    exports.expandPatternsWithBraceExpansion = expandPatternsWithBraceExpansion;
    function expandBraceExpansion(pattern) {
      const patterns = micromatch.braces(pattern, { expand: true, nodupes: true });
      patterns.sort((a, b) => a.length - b.length);
      return patterns.filter((pattern2) => pattern2 !== "");
    }
    exports.expandBraceExpansion = expandBraceExpansion;
    function getPatternParts(pattern, options) {
      let { parts } = micromatch.scan(pattern, Object.assign(Object.assign({}, options), { parts: true }));
      if (parts.length === 0) {
        parts = [pattern];
      }
      if (parts[0].startsWith("/")) {
        parts[0] = parts[0].slice(1);
        parts.unshift("");
      }
      return parts;
    }
    exports.getPatternParts = getPatternParts;
    function makeRe(pattern, options) {
      return micromatch.makeRe(pattern, options);
    }
    exports.makeRe = makeRe;
    function convertPatternsToRe(patterns, options) {
      return patterns.map((pattern) => makeRe(pattern, options));
    }
    exports.convertPatternsToRe = convertPatternsToRe;
    function matchAny(entry, patternsRe) {
      return patternsRe.some((patternRe) => patternRe.test(entry));
    }
    exports.matchAny = matchAny;
    function removeDuplicateSlashes(pattern) {
      return pattern.replace(DOUBLE_SLASH_RE, "/");
    }
    exports.removeDuplicateSlashes = removeDuplicateSlashes;
  }
});

// node_modules/.pnpm/merge2@1.4.1/node_modules/merge2/index.js
var require_merge2 = __commonJS({
  "node_modules/.pnpm/merge2@1.4.1/node_modules/merge2/index.js"(exports, module2) {
    "use strict";
    var Stream = require("stream");
    var PassThrough = Stream.PassThrough;
    var slice = Array.prototype.slice;
    module2.exports = merge2;
    function merge2() {
      const streamsQueue = [];
      const args = slice.call(arguments);
      let merging = false;
      let options = args[args.length - 1];
      if (options && !Array.isArray(options) && options.pipe == null) {
        args.pop();
      } else {
        options = {};
      }
      const doEnd = options.end !== false;
      const doPipeError = options.pipeError === true;
      if (options.objectMode == null) {
        options.objectMode = true;
      }
      if (options.highWaterMark == null) {
        options.highWaterMark = 64 * 1024;
      }
      const mergedStream = PassThrough(options);
      function addStream() {
        for (let i = 0, len = arguments.length; i < len; i++) {
          streamsQueue.push(pauseStreams(arguments[i], options));
        }
        mergeStream();
        return this;
      }
      function mergeStream() {
        if (merging) {
          return;
        }
        merging = true;
        let streams = streamsQueue.shift();
        if (!streams) {
          process.nextTick(endStream);
          return;
        }
        if (!Array.isArray(streams)) {
          streams = [streams];
        }
        let pipesCount = streams.length + 1;
        function next() {
          if (--pipesCount > 0) {
            return;
          }
          merging = false;
          mergeStream();
        }
        function pipe(stream) {
          function onend() {
            stream.removeListener("merge2UnpipeEnd", onend);
            stream.removeListener("end", onend);
            if (doPipeError) {
              stream.removeListener("error", onerror);
            }
            next();
          }
          function onerror(err) {
            mergedStream.emit("error", err);
          }
          if (stream._readableState.endEmitted) {
            return next();
          }
          stream.on("merge2UnpipeEnd", onend);
          stream.on("end", onend);
          if (doPipeError) {
            stream.on("error", onerror);
          }
          stream.pipe(mergedStream, { end: false });
          stream.resume();
        }
        for (let i = 0; i < streams.length; i++) {
          pipe(streams[i]);
        }
        next();
      }
      function endStream() {
        merging = false;
        mergedStream.emit("queueDrain");
        if (doEnd) {
          mergedStream.end();
        }
      }
      mergedStream.setMaxListeners(0);
      mergedStream.add = addStream;
      mergedStream.on("unpipe", function(stream) {
        stream.emit("merge2UnpipeEnd");
      });
      if (args.length) {
        addStream.apply(null, args);
      }
      return mergedStream;
    }
    function pauseStreams(streams, options) {
      if (!Array.isArray(streams)) {
        if (!streams._readableState && streams.pipe) {
          streams = streams.pipe(PassThrough(options));
        }
        if (!streams._readableState || !streams.pause || !streams.pipe) {
          throw new Error("Only readable stream can be merged.");
        }
        streams.pause();
      } else {
        for (let i = 0, len = streams.length; i < len; i++) {
          streams[i] = pauseStreams(streams[i], options);
        }
      }
      return streams;
    }
  }
});

// node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/utils/stream.js
var require_stream = __commonJS({
  "node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/utils/stream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.merge = void 0;
    var merge2 = require_merge2();
    function merge(streams) {
      const mergedStream = merge2(streams);
      streams.forEach((stream) => {
        stream.once("error", (error) => mergedStream.emit("error", error));
      });
      mergedStream.once("close", () => propagateCloseEventToSources(streams));
      mergedStream.once("end", () => propagateCloseEventToSources(streams));
      return mergedStream;
    }
    exports.merge = merge;
    function propagateCloseEventToSources(streams) {
      streams.forEach((stream) => stream.emit("close"));
    }
  }
});

// node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/utils/string.js
var require_string = __commonJS({
  "node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/utils/string.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isEmpty = exports.isString = void 0;
    function isString(input) {
      return typeof input === "string";
    }
    exports.isString = isString;
    function isEmpty(input) {
      return input === "";
    }
    exports.isEmpty = isEmpty;
  }
});

// node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/utils/index.js
var require_utils3 = __commonJS({
  "node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/utils/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.string = exports.stream = exports.pattern = exports.path = exports.fs = exports.errno = exports.array = void 0;
    var array = require_array();
    exports.array = array;
    var errno = require_errno();
    exports.errno = errno;
    var fs6 = require_fs();
    exports.fs = fs6;
    var path = require_path();
    exports.path = path;
    var pattern = require_pattern();
    exports.pattern = pattern;
    var stream = require_stream();
    exports.stream = stream;
    var string = require_string();
    exports.string = string;
  }
});

// node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/managers/tasks.js
var require_tasks = __commonJS({
  "node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/managers/tasks.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertPatternGroupToTask = exports.convertPatternGroupsToTasks = exports.groupPatternsByBaseDirectory = exports.getNegativePatternsAsPositive = exports.getPositivePatterns = exports.convertPatternsToTasks = exports.generate = void 0;
    var utils = require_utils3();
    function generate(input, settings) {
      const patterns = processPatterns(input, settings);
      const ignore = processPatterns(settings.ignore, settings);
      const positivePatterns = getPositivePatterns(patterns);
      const negativePatterns = getNegativePatternsAsPositive(patterns, ignore);
      const staticPatterns = positivePatterns.filter((pattern) => utils.pattern.isStaticPattern(pattern, settings));
      const dynamicPatterns = positivePatterns.filter((pattern) => utils.pattern.isDynamicPattern(pattern, settings));
      const staticTasks = convertPatternsToTasks(
        staticPatterns,
        negativePatterns,
        /* dynamic */
        false
      );
      const dynamicTasks = convertPatternsToTasks(
        dynamicPatterns,
        negativePatterns,
        /* dynamic */
        true
      );
      return staticTasks.concat(dynamicTasks);
    }
    exports.generate = generate;
    function processPatterns(input, settings) {
      let patterns = input;
      if (settings.braceExpansion) {
        patterns = utils.pattern.expandPatternsWithBraceExpansion(patterns);
      }
      if (settings.baseNameMatch) {
        patterns = patterns.map((pattern) => pattern.includes("/") ? pattern : `**/${pattern}`);
      }
      return patterns.map((pattern) => utils.pattern.removeDuplicateSlashes(pattern));
    }
    function convertPatternsToTasks(positive, negative, dynamic) {
      const tasks = [];
      const patternsOutsideCurrentDirectory = utils.pattern.getPatternsOutsideCurrentDirectory(positive);
      const patternsInsideCurrentDirectory = utils.pattern.getPatternsInsideCurrentDirectory(positive);
      const outsideCurrentDirectoryGroup = groupPatternsByBaseDirectory(patternsOutsideCurrentDirectory);
      const insideCurrentDirectoryGroup = groupPatternsByBaseDirectory(patternsInsideCurrentDirectory);
      tasks.push(...convertPatternGroupsToTasks(outsideCurrentDirectoryGroup, negative, dynamic));
      if ("." in insideCurrentDirectoryGroup) {
        tasks.push(convertPatternGroupToTask(".", patternsInsideCurrentDirectory, negative, dynamic));
      } else {
        tasks.push(...convertPatternGroupsToTasks(insideCurrentDirectoryGroup, negative, dynamic));
      }
      return tasks;
    }
    exports.convertPatternsToTasks = convertPatternsToTasks;
    function getPositivePatterns(patterns) {
      return utils.pattern.getPositivePatterns(patterns);
    }
    exports.getPositivePatterns = getPositivePatterns;
    function getNegativePatternsAsPositive(patterns, ignore) {
      const negative = utils.pattern.getNegativePatterns(patterns).concat(ignore);
      const positive = negative.map(utils.pattern.convertToPositivePattern);
      return positive;
    }
    exports.getNegativePatternsAsPositive = getNegativePatternsAsPositive;
    function groupPatternsByBaseDirectory(patterns) {
      const group = {};
      return patterns.reduce((collection, pattern) => {
        const base = utils.pattern.getBaseDirectory(pattern);
        if (base in collection) {
          collection[base].push(pattern);
        } else {
          collection[base] = [pattern];
        }
        return collection;
      }, group);
    }
    exports.groupPatternsByBaseDirectory = groupPatternsByBaseDirectory;
    function convertPatternGroupsToTasks(positive, negative, dynamic) {
      return Object.keys(positive).map((base) => {
        return convertPatternGroupToTask(base, positive[base], negative, dynamic);
      });
    }
    exports.convertPatternGroupsToTasks = convertPatternGroupsToTasks;
    function convertPatternGroupToTask(base, positive, negative, dynamic) {
      return {
        dynamic,
        positive,
        negative,
        base,
        patterns: [].concat(positive, negative.map(utils.pattern.convertToNegativePattern))
      };
    }
    exports.convertPatternGroupToTask = convertPatternGroupToTask;
  }
});

// node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/providers/async.js
var require_async = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/providers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.read = void 0;
    function read(path, settings, callback) {
      settings.fs.lstat(path, (lstatError, lstat) => {
        if (lstatError !== null) {
          callFailureCallback(callback, lstatError);
          return;
        }
        if (!lstat.isSymbolicLink() || !settings.followSymbolicLink) {
          callSuccessCallback(callback, lstat);
          return;
        }
        settings.fs.stat(path, (statError, stat) => {
          if (statError !== null) {
            if (settings.throwErrorOnBrokenSymbolicLink) {
              callFailureCallback(callback, statError);
              return;
            }
            callSuccessCallback(callback, lstat);
            return;
          }
          if (settings.markSymbolicLink) {
            stat.isSymbolicLink = () => true;
          }
          callSuccessCallback(callback, stat);
        });
      });
    }
    exports.read = read;
    function callFailureCallback(callback, error) {
      callback(error);
    }
    function callSuccessCallback(callback, result) {
      callback(null, result);
    }
  }
});

// node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/providers/sync.js
var require_sync = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/providers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.read = void 0;
    function read(path, settings) {
      const lstat = settings.fs.lstatSync(path);
      if (!lstat.isSymbolicLink() || !settings.followSymbolicLink) {
        return lstat;
      }
      try {
        const stat = settings.fs.statSync(path);
        if (settings.markSymbolicLink) {
          stat.isSymbolicLink = () => true;
        }
        return stat;
      } catch (error) {
        if (!settings.throwErrorOnBrokenSymbolicLink) {
          return lstat;
        }
        throw error;
      }
    }
    exports.read = read;
  }
});

// node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/adapters/fs.js
var require_fs2 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/adapters/fs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createFileSystemAdapter = exports.FILE_SYSTEM_ADAPTER = void 0;
    var fs6 = require("fs");
    exports.FILE_SYSTEM_ADAPTER = {
      lstat: fs6.lstat,
      stat: fs6.stat,
      lstatSync: fs6.lstatSync,
      statSync: fs6.statSync
    };
    function createFileSystemAdapter(fsMethods) {
      if (fsMethods === void 0) {
        return exports.FILE_SYSTEM_ADAPTER;
      }
      return Object.assign(Object.assign({}, exports.FILE_SYSTEM_ADAPTER), fsMethods);
    }
    exports.createFileSystemAdapter = createFileSystemAdapter;
  }
});

// node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/settings.js
var require_settings = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/settings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fs6 = require_fs2();
    var Settings = class {
      constructor(_options = {}) {
        this._options = _options;
        this.followSymbolicLink = this._getValue(this._options.followSymbolicLink, true);
        this.fs = fs6.createFileSystemAdapter(this._options.fs);
        this.markSymbolicLink = this._getValue(this._options.markSymbolicLink, false);
        this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, true);
      }
      _getValue(option, value) {
        return option !== null && option !== void 0 ? option : value;
      }
    };
    exports.default = Settings;
  }
});

// node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/index.js
var require_out = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.statSync = exports.stat = exports.Settings = void 0;
    var async = require_async();
    var sync = require_sync();
    var settings_1 = require_settings();
    exports.Settings = settings_1.default;
    function stat(path, optionsOrSettingsOrCallback, callback) {
      if (typeof optionsOrSettingsOrCallback === "function") {
        async.read(path, getSettings(), optionsOrSettingsOrCallback);
        return;
      }
      async.read(path, getSettings(optionsOrSettingsOrCallback), callback);
    }
    exports.stat = stat;
    function statSync(path, optionsOrSettings) {
      const settings = getSettings(optionsOrSettings);
      return sync.read(path, settings);
    }
    exports.statSync = statSync;
    function getSettings(settingsOrOptions = {}) {
      if (settingsOrOptions instanceof settings_1.default) {
        return settingsOrOptions;
      }
      return new settings_1.default(settingsOrOptions);
    }
  }
});

// node_modules/.pnpm/queue-microtask@1.2.3/node_modules/queue-microtask/index.js
var require_queue_microtask = __commonJS({
  "node_modules/.pnpm/queue-microtask@1.2.3/node_modules/queue-microtask/index.js"(exports, module2) {
    var promise;
    module2.exports = typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : global) : (cb) => (promise || (promise = Promise.resolve())).then(cb).catch((err) => setTimeout(() => {
      throw err;
    }, 0));
  }
});

// node_modules/.pnpm/run-parallel@1.2.0/node_modules/run-parallel/index.js
var require_run_parallel = __commonJS({
  "node_modules/.pnpm/run-parallel@1.2.0/node_modules/run-parallel/index.js"(exports, module2) {
    module2.exports = runParallel;
    var queueMicrotask2 = require_queue_microtask();
    function runParallel(tasks, cb) {
      let results, pending, keys;
      let isSync = true;
      if (Array.isArray(tasks)) {
        results = [];
        pending = tasks.length;
      } else {
        keys = Object.keys(tasks);
        results = {};
        pending = keys.length;
      }
      function done(err) {
        function end() {
          if (cb)
            cb(err, results);
          cb = null;
        }
        if (isSync)
          queueMicrotask2(end);
        else
          end();
      }
      function each(i, err, result) {
        results[i] = result;
        if (--pending === 0 || err) {
          done(err);
        }
      }
      if (!pending) {
        done(null);
      } else if (keys) {
        keys.forEach(function(key) {
          tasks[key](function(err, result) {
            each(key, err, result);
          });
        });
      } else {
        tasks.forEach(function(task, i) {
          task(function(err, result) {
            each(i, err, result);
          });
        });
      }
      isSync = false;
    }
  }
});

// node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/constants.js
var require_constants3 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IS_SUPPORT_READDIR_WITH_FILE_TYPES = void 0;
    var NODE_PROCESS_VERSION_PARTS = process.versions.node.split(".");
    if (NODE_PROCESS_VERSION_PARTS[0] === void 0 || NODE_PROCESS_VERSION_PARTS[1] === void 0) {
      throw new Error(`Unexpected behavior. The 'process.versions.node' variable has invalid value: ${process.versions.node}`);
    }
    var MAJOR_VERSION = Number.parseInt(NODE_PROCESS_VERSION_PARTS[0], 10);
    var MINOR_VERSION = Number.parseInt(NODE_PROCESS_VERSION_PARTS[1], 10);
    var SUPPORTED_MAJOR_VERSION = 10;
    var SUPPORTED_MINOR_VERSION = 10;
    var IS_MATCHED_BY_MAJOR = MAJOR_VERSION > SUPPORTED_MAJOR_VERSION;
    var IS_MATCHED_BY_MAJOR_AND_MINOR = MAJOR_VERSION === SUPPORTED_MAJOR_VERSION && MINOR_VERSION >= SUPPORTED_MINOR_VERSION;
    exports.IS_SUPPORT_READDIR_WITH_FILE_TYPES = IS_MATCHED_BY_MAJOR || IS_MATCHED_BY_MAJOR_AND_MINOR;
  }
});

// node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/utils/fs.js
var require_fs3 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/utils/fs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createDirentFromStats = void 0;
    var DirentFromStats = class {
      constructor(name, stats) {
        this.name = name;
        this.isBlockDevice = stats.isBlockDevice.bind(stats);
        this.isCharacterDevice = stats.isCharacterDevice.bind(stats);
        this.isDirectory = stats.isDirectory.bind(stats);
        this.isFIFO = stats.isFIFO.bind(stats);
        this.isFile = stats.isFile.bind(stats);
        this.isSocket = stats.isSocket.bind(stats);
        this.isSymbolicLink = stats.isSymbolicLink.bind(stats);
      }
    };
    function createDirentFromStats(name, stats) {
      return new DirentFromStats(name, stats);
    }
    exports.createDirentFromStats = createDirentFromStats;
  }
});

// node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/utils/index.js
var require_utils4 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/utils/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fs = void 0;
    var fs6 = require_fs3();
    exports.fs = fs6;
  }
});

// node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/providers/common.js
var require_common = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/providers/common.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.joinPathSegments = void 0;
    function joinPathSegments(a, b, separator) {
      if (a.endsWith(separator)) {
        return a + b;
      }
      return a + separator + b;
    }
    exports.joinPathSegments = joinPathSegments;
  }
});

// node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/providers/async.js
var require_async2 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/providers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readdir = exports.readdirWithFileTypes = exports.read = void 0;
    var fsStat = require_out();
    var rpl = require_run_parallel();
    var constants_1 = require_constants3();
    var utils = require_utils4();
    var common = require_common();
    function read(directory, settings, callback) {
      if (!settings.stats && constants_1.IS_SUPPORT_READDIR_WITH_FILE_TYPES) {
        readdirWithFileTypes(directory, settings, callback);
        return;
      }
      readdir(directory, settings, callback);
    }
    exports.read = read;
    function readdirWithFileTypes(directory, settings, callback) {
      settings.fs.readdir(directory, { withFileTypes: true }, (readdirError, dirents) => {
        if (readdirError !== null) {
          callFailureCallback(callback, readdirError);
          return;
        }
        const entries = dirents.map((dirent) => ({
          dirent,
          name: dirent.name,
          path: common.joinPathSegments(directory, dirent.name, settings.pathSegmentSeparator)
        }));
        if (!settings.followSymbolicLinks) {
          callSuccessCallback(callback, entries);
          return;
        }
        const tasks = entries.map((entry) => makeRplTaskEntry(entry, settings));
        rpl(tasks, (rplError, rplEntries) => {
          if (rplError !== null) {
            callFailureCallback(callback, rplError);
            return;
          }
          callSuccessCallback(callback, rplEntries);
        });
      });
    }
    exports.readdirWithFileTypes = readdirWithFileTypes;
    function makeRplTaskEntry(entry, settings) {
      return (done) => {
        if (!entry.dirent.isSymbolicLink()) {
          done(null, entry);
          return;
        }
        settings.fs.stat(entry.path, (statError, stats) => {
          if (statError !== null) {
            if (settings.throwErrorOnBrokenSymbolicLink) {
              done(statError);
              return;
            }
            done(null, entry);
            return;
          }
          entry.dirent = utils.fs.createDirentFromStats(entry.name, stats);
          done(null, entry);
        });
      };
    }
    function readdir(directory, settings, callback) {
      settings.fs.readdir(directory, (readdirError, names) => {
        if (readdirError !== null) {
          callFailureCallback(callback, readdirError);
          return;
        }
        const tasks = names.map((name) => {
          const path = common.joinPathSegments(directory, name, settings.pathSegmentSeparator);
          return (done) => {
            fsStat.stat(path, settings.fsStatSettings, (error, stats) => {
              if (error !== null) {
                done(error);
                return;
              }
              const entry = {
                name,
                path,
                dirent: utils.fs.createDirentFromStats(name, stats)
              };
              if (settings.stats) {
                entry.stats = stats;
              }
              done(null, entry);
            });
          };
        });
        rpl(tasks, (rplError, entries) => {
          if (rplError !== null) {
            callFailureCallback(callback, rplError);
            return;
          }
          callSuccessCallback(callback, entries);
        });
      });
    }
    exports.readdir = readdir;
    function callFailureCallback(callback, error) {
      callback(error);
    }
    function callSuccessCallback(callback, result) {
      callback(null, result);
    }
  }
});

// node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/providers/sync.js
var require_sync2 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/providers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readdir = exports.readdirWithFileTypes = exports.read = void 0;
    var fsStat = require_out();
    var constants_1 = require_constants3();
    var utils = require_utils4();
    var common = require_common();
    function read(directory, settings) {
      if (!settings.stats && constants_1.IS_SUPPORT_READDIR_WITH_FILE_TYPES) {
        return readdirWithFileTypes(directory, settings);
      }
      return readdir(directory, settings);
    }
    exports.read = read;
    function readdirWithFileTypes(directory, settings) {
      const dirents = settings.fs.readdirSync(directory, { withFileTypes: true });
      return dirents.map((dirent) => {
        const entry = {
          dirent,
          name: dirent.name,
          path: common.joinPathSegments(directory, dirent.name, settings.pathSegmentSeparator)
        };
        if (entry.dirent.isSymbolicLink() && settings.followSymbolicLinks) {
          try {
            const stats = settings.fs.statSync(entry.path);
            entry.dirent = utils.fs.createDirentFromStats(entry.name, stats);
          } catch (error) {
            if (settings.throwErrorOnBrokenSymbolicLink) {
              throw error;
            }
          }
        }
        return entry;
      });
    }
    exports.readdirWithFileTypes = readdirWithFileTypes;
    function readdir(directory, settings) {
      const names = settings.fs.readdirSync(directory);
      return names.map((name) => {
        const entryPath = common.joinPathSegments(directory, name, settings.pathSegmentSeparator);
        const stats = fsStat.statSync(entryPath, settings.fsStatSettings);
        const entry = {
          name,
          path: entryPath,
          dirent: utils.fs.createDirentFromStats(name, stats)
        };
        if (settings.stats) {
          entry.stats = stats;
        }
        return entry;
      });
    }
    exports.readdir = readdir;
  }
});

// node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/adapters/fs.js
var require_fs4 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/adapters/fs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createFileSystemAdapter = exports.FILE_SYSTEM_ADAPTER = void 0;
    var fs6 = require("fs");
    exports.FILE_SYSTEM_ADAPTER = {
      lstat: fs6.lstat,
      stat: fs6.stat,
      lstatSync: fs6.lstatSync,
      statSync: fs6.statSync,
      readdir: fs6.readdir,
      readdirSync: fs6.readdirSync
    };
    function createFileSystemAdapter(fsMethods) {
      if (fsMethods === void 0) {
        return exports.FILE_SYSTEM_ADAPTER;
      }
      return Object.assign(Object.assign({}, exports.FILE_SYSTEM_ADAPTER), fsMethods);
    }
    exports.createFileSystemAdapter = createFileSystemAdapter;
  }
});

// node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/settings.js
var require_settings2 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/settings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var path = require("path");
    var fsStat = require_out();
    var fs6 = require_fs4();
    var Settings = class {
      constructor(_options = {}) {
        this._options = _options;
        this.followSymbolicLinks = this._getValue(this._options.followSymbolicLinks, false);
        this.fs = fs6.createFileSystemAdapter(this._options.fs);
        this.pathSegmentSeparator = this._getValue(this._options.pathSegmentSeparator, path.sep);
        this.stats = this._getValue(this._options.stats, false);
        this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, true);
        this.fsStatSettings = new fsStat.Settings({
          followSymbolicLink: this.followSymbolicLinks,
          fs: this.fs,
          throwErrorOnBrokenSymbolicLink: this.throwErrorOnBrokenSymbolicLink
        });
      }
      _getValue(option, value) {
        return option !== null && option !== void 0 ? option : value;
      }
    };
    exports.default = Settings;
  }
});

// node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/index.js
var require_out2 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Settings = exports.scandirSync = exports.scandir = void 0;
    var async = require_async2();
    var sync = require_sync2();
    var settings_1 = require_settings2();
    exports.Settings = settings_1.default;
    function scandir(path, optionsOrSettingsOrCallback, callback) {
      if (typeof optionsOrSettingsOrCallback === "function") {
        async.read(path, getSettings(), optionsOrSettingsOrCallback);
        return;
      }
      async.read(path, getSettings(optionsOrSettingsOrCallback), callback);
    }
    exports.scandir = scandir;
    function scandirSync(path, optionsOrSettings) {
      const settings = getSettings(optionsOrSettings);
      return sync.read(path, settings);
    }
    exports.scandirSync = scandirSync;
    function getSettings(settingsOrOptions = {}) {
      if (settingsOrOptions instanceof settings_1.default) {
        return settingsOrOptions;
      }
      return new settings_1.default(settingsOrOptions);
    }
  }
});

// node_modules/.pnpm/reusify@1.0.4/node_modules/reusify/reusify.js
var require_reusify = __commonJS({
  "node_modules/.pnpm/reusify@1.0.4/node_modules/reusify/reusify.js"(exports, module2) {
    "use strict";
    function reusify(Constructor) {
      var head = new Constructor();
      var tail = head;
      function get() {
        var current = head;
        if (current.next) {
          head = current.next;
        } else {
          head = new Constructor();
          tail = head;
        }
        current.next = null;
        return current;
      }
      function release(obj) {
        tail.next = obj;
        tail = obj;
      }
      return {
        get,
        release
      };
    }
    module2.exports = reusify;
  }
});

// node_modules/.pnpm/fastq@1.15.0/node_modules/fastq/queue.js
var require_queue = __commonJS({
  "node_modules/.pnpm/fastq@1.15.0/node_modules/fastq/queue.js"(exports, module2) {
    "use strict";
    var reusify = require_reusify();
    function fastqueue(context, worker, concurrency) {
      if (typeof context === "function") {
        concurrency = worker;
        worker = context;
        context = null;
      }
      if (concurrency < 1) {
        throw new Error("fastqueue concurrency must be greater than 1");
      }
      var cache = reusify(Task);
      var queueHead = null;
      var queueTail = null;
      var _running = 0;
      var errorHandler = null;
      var self = {
        push,
        drain: noop,
        saturated: noop,
        pause,
        paused: false,
        concurrency,
        running,
        resume,
        idle,
        length,
        getQueue,
        unshift,
        empty: noop,
        kill,
        killAndDrain,
        error
      };
      return self;
      function running() {
        return _running;
      }
      function pause() {
        self.paused = true;
      }
      function length() {
        var current = queueHead;
        var counter = 0;
        while (current) {
          current = current.next;
          counter++;
        }
        return counter;
      }
      function getQueue() {
        var current = queueHead;
        var tasks = [];
        while (current) {
          tasks.push(current.value);
          current = current.next;
        }
        return tasks;
      }
      function resume() {
        if (!self.paused)
          return;
        self.paused = false;
        for (var i = 0; i < self.concurrency; i++) {
          _running++;
          release();
        }
      }
      function idle() {
        return _running === 0 && self.length() === 0;
      }
      function push(value, done) {
        var current = cache.get();
        current.context = context;
        current.release = release;
        current.value = value;
        current.callback = done || noop;
        current.errorHandler = errorHandler;
        if (_running === self.concurrency || self.paused) {
          if (queueTail) {
            queueTail.next = current;
            queueTail = current;
          } else {
            queueHead = current;
            queueTail = current;
            self.saturated();
          }
        } else {
          _running++;
          worker.call(context, current.value, current.worked);
        }
      }
      function unshift(value, done) {
        var current = cache.get();
        current.context = context;
        current.release = release;
        current.value = value;
        current.callback = done || noop;
        if (_running === self.concurrency || self.paused) {
          if (queueHead) {
            current.next = queueHead;
            queueHead = current;
          } else {
            queueHead = current;
            queueTail = current;
            self.saturated();
          }
        } else {
          _running++;
          worker.call(context, current.value, current.worked);
        }
      }
      function release(holder) {
        if (holder) {
          cache.release(holder);
        }
        var next = queueHead;
        if (next) {
          if (!self.paused) {
            if (queueTail === queueHead) {
              queueTail = null;
            }
            queueHead = next.next;
            next.next = null;
            worker.call(context, next.value, next.worked);
            if (queueTail === null) {
              self.empty();
            }
          } else {
            _running--;
          }
        } else if (--_running === 0) {
          self.drain();
        }
      }
      function kill() {
        queueHead = null;
        queueTail = null;
        self.drain = noop;
      }
      function killAndDrain() {
        queueHead = null;
        queueTail = null;
        self.drain();
        self.drain = noop;
      }
      function error(handler) {
        errorHandler = handler;
      }
    }
    function noop() {
    }
    function Task() {
      this.value = null;
      this.callback = noop;
      this.next = null;
      this.release = noop;
      this.context = null;
      this.errorHandler = null;
      var self = this;
      this.worked = function worked(err, result) {
        var callback = self.callback;
        var errorHandler = self.errorHandler;
        var val = self.value;
        self.value = null;
        self.callback = noop;
        if (self.errorHandler) {
          errorHandler(err, val);
        }
        callback.call(self.context, err, result);
        self.release(self);
      };
    }
    function queueAsPromised(context, worker, concurrency) {
      if (typeof context === "function") {
        concurrency = worker;
        worker = context;
        context = null;
      }
      function asyncWrapper(arg, cb) {
        worker.call(this, arg).then(function(res) {
          cb(null, res);
        }, cb);
      }
      var queue = fastqueue(context, asyncWrapper, concurrency);
      var pushCb = queue.push;
      var unshiftCb = queue.unshift;
      queue.push = push;
      queue.unshift = unshift;
      queue.drained = drained;
      return queue;
      function push(value) {
        var p = new Promise(function(resolve3, reject) {
          pushCb(value, function(err, result) {
            if (err) {
              reject(err);
              return;
            }
            resolve3(result);
          });
        });
        p.catch(noop);
        return p;
      }
      function unshift(value) {
        var p = new Promise(function(resolve3, reject) {
          unshiftCb(value, function(err, result) {
            if (err) {
              reject(err);
              return;
            }
            resolve3(result);
          });
        });
        p.catch(noop);
        return p;
      }
      function drained() {
        if (queue.idle()) {
          return new Promise(function(resolve3) {
            resolve3();
          });
        }
        var previousDrain = queue.drain;
        var p = new Promise(function(resolve3) {
          queue.drain = function() {
            previousDrain();
            resolve3();
          };
        });
        return p;
      }
    }
    module2.exports = fastqueue;
    module2.exports.promise = queueAsPromised;
  }
});

// node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/readers/common.js
var require_common2 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/readers/common.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.joinPathSegments = exports.replacePathSegmentSeparator = exports.isAppliedFilter = exports.isFatalError = void 0;
    function isFatalError(settings, error) {
      if (settings.errorFilter === null) {
        return true;
      }
      return !settings.errorFilter(error);
    }
    exports.isFatalError = isFatalError;
    function isAppliedFilter(filter, value) {
      return filter === null || filter(value);
    }
    exports.isAppliedFilter = isAppliedFilter;
    function replacePathSegmentSeparator(filepath, separator) {
      return filepath.split(/[/\\]/).join(separator);
    }
    exports.replacePathSegmentSeparator = replacePathSegmentSeparator;
    function joinPathSegments(a, b, separator) {
      if (a === "") {
        return b;
      }
      if (a.endsWith(separator)) {
        return a + b;
      }
      return a + separator + b;
    }
    exports.joinPathSegments = joinPathSegments;
  }
});

// node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/readers/reader.js
var require_reader = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/readers/reader.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var common = require_common2();
    var Reader = class {
      constructor(_root, _settings) {
        this._root = _root;
        this._settings = _settings;
        this._root = common.replacePathSegmentSeparator(_root, _settings.pathSegmentSeparator);
      }
    };
    exports.default = Reader;
  }
});

// node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/readers/async.js
var require_async3 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/readers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var events_1 = require("events");
    var fsScandir = require_out2();
    var fastq = require_queue();
    var common = require_common2();
    var reader_1 = require_reader();
    var AsyncReader = class extends reader_1.default {
      constructor(_root, _settings) {
        super(_root, _settings);
        this._settings = _settings;
        this._scandir = fsScandir.scandir;
        this._emitter = new events_1.EventEmitter();
        this._queue = fastq(this._worker.bind(this), this._settings.concurrency);
        this._isFatalError = false;
        this._isDestroyed = false;
        this._queue.drain = () => {
          if (!this._isFatalError) {
            this._emitter.emit("end");
          }
        };
      }
      read() {
        this._isFatalError = false;
        this._isDestroyed = false;
        setImmediate(() => {
          this._pushToQueue(this._root, this._settings.basePath);
        });
        return this._emitter;
      }
      get isDestroyed() {
        return this._isDestroyed;
      }
      destroy() {
        if (this._isDestroyed) {
          throw new Error("The reader is already destroyed");
        }
        this._isDestroyed = true;
        this._queue.killAndDrain();
      }
      onEntry(callback) {
        this._emitter.on("entry", callback);
      }
      onError(callback) {
        this._emitter.once("error", callback);
      }
      onEnd(callback) {
        this._emitter.once("end", callback);
      }
      _pushToQueue(directory, base) {
        const queueItem = { directory, base };
        this._queue.push(queueItem, (error) => {
          if (error !== null) {
            this._handleError(error);
          }
        });
      }
      _worker(item, done) {
        this._scandir(item.directory, this._settings.fsScandirSettings, (error, entries) => {
          if (error !== null) {
            done(error, void 0);
            return;
          }
          for (const entry of entries) {
            this._handleEntry(entry, item.base);
          }
          done(null, void 0);
        });
      }
      _handleError(error) {
        if (this._isDestroyed || !common.isFatalError(this._settings, error)) {
          return;
        }
        this._isFatalError = true;
        this._isDestroyed = true;
        this._emitter.emit("error", error);
      }
      _handleEntry(entry, base) {
        if (this._isDestroyed || this._isFatalError) {
          return;
        }
        const fullpath = entry.path;
        if (base !== void 0) {
          entry.path = common.joinPathSegments(base, entry.name, this._settings.pathSegmentSeparator);
        }
        if (common.isAppliedFilter(this._settings.entryFilter, entry)) {
          this._emitEntry(entry);
        }
        if (entry.dirent.isDirectory() && common.isAppliedFilter(this._settings.deepFilter, entry)) {
          this._pushToQueue(fullpath, base === void 0 ? void 0 : entry.path);
        }
      }
      _emitEntry(entry) {
        this._emitter.emit("entry", entry);
      }
    };
    exports.default = AsyncReader;
  }
});

// node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/providers/async.js
var require_async4 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/providers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var async_1 = require_async3();
    var AsyncProvider = class {
      constructor(_root, _settings) {
        this._root = _root;
        this._settings = _settings;
        this._reader = new async_1.default(this._root, this._settings);
        this._storage = [];
      }
      read(callback) {
        this._reader.onError((error) => {
          callFailureCallback(callback, error);
        });
        this._reader.onEntry((entry) => {
          this._storage.push(entry);
        });
        this._reader.onEnd(() => {
          callSuccessCallback(callback, this._storage);
        });
        this._reader.read();
      }
    };
    exports.default = AsyncProvider;
    function callFailureCallback(callback, error) {
      callback(error);
    }
    function callSuccessCallback(callback, entries) {
      callback(null, entries);
    }
  }
});

// node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/providers/stream.js
var require_stream2 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/providers/stream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var stream_1 = require("stream");
    var async_1 = require_async3();
    var StreamProvider = class {
      constructor(_root, _settings) {
        this._root = _root;
        this._settings = _settings;
        this._reader = new async_1.default(this._root, this._settings);
        this._stream = new stream_1.Readable({
          objectMode: true,
          read: () => {
          },
          destroy: () => {
            if (!this._reader.isDestroyed) {
              this._reader.destroy();
            }
          }
        });
      }
      read() {
        this._reader.onError((error) => {
          this._stream.emit("error", error);
        });
        this._reader.onEntry((entry) => {
          this._stream.push(entry);
        });
        this._reader.onEnd(() => {
          this._stream.push(null);
        });
        this._reader.read();
        return this._stream;
      }
    };
    exports.default = StreamProvider;
  }
});

// node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/readers/sync.js
var require_sync3 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/readers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fsScandir = require_out2();
    var common = require_common2();
    var reader_1 = require_reader();
    var SyncReader = class extends reader_1.default {
      constructor() {
        super(...arguments);
        this._scandir = fsScandir.scandirSync;
        this._storage = [];
        this._queue = /* @__PURE__ */ new Set();
      }
      read() {
        this._pushToQueue(this._root, this._settings.basePath);
        this._handleQueue();
        return this._storage;
      }
      _pushToQueue(directory, base) {
        this._queue.add({ directory, base });
      }
      _handleQueue() {
        for (const item of this._queue.values()) {
          this._handleDirectory(item.directory, item.base);
        }
      }
      _handleDirectory(directory, base) {
        try {
          const entries = this._scandir(directory, this._settings.fsScandirSettings);
          for (const entry of entries) {
            this._handleEntry(entry, base);
          }
        } catch (error) {
          this._handleError(error);
        }
      }
      _handleError(error) {
        if (!common.isFatalError(this._settings, error)) {
          return;
        }
        throw error;
      }
      _handleEntry(entry, base) {
        const fullpath = entry.path;
        if (base !== void 0) {
          entry.path = common.joinPathSegments(base, entry.name, this._settings.pathSegmentSeparator);
        }
        if (common.isAppliedFilter(this._settings.entryFilter, entry)) {
          this._pushToStorage(entry);
        }
        if (entry.dirent.isDirectory() && common.isAppliedFilter(this._settings.deepFilter, entry)) {
          this._pushToQueue(fullpath, base === void 0 ? void 0 : entry.path);
        }
      }
      _pushToStorage(entry) {
        this._storage.push(entry);
      }
    };
    exports.default = SyncReader;
  }
});

// node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/providers/sync.js
var require_sync4 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/providers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var sync_1 = require_sync3();
    var SyncProvider = class {
      constructor(_root, _settings) {
        this._root = _root;
        this._settings = _settings;
        this._reader = new sync_1.default(this._root, this._settings);
      }
      read() {
        return this._reader.read();
      }
    };
    exports.default = SyncProvider;
  }
});

// node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/settings.js
var require_settings3 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/settings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var path = require("path");
    var fsScandir = require_out2();
    var Settings = class {
      constructor(_options = {}) {
        this._options = _options;
        this.basePath = this._getValue(this._options.basePath, void 0);
        this.concurrency = this._getValue(this._options.concurrency, Number.POSITIVE_INFINITY);
        this.deepFilter = this._getValue(this._options.deepFilter, null);
        this.entryFilter = this._getValue(this._options.entryFilter, null);
        this.errorFilter = this._getValue(this._options.errorFilter, null);
        this.pathSegmentSeparator = this._getValue(this._options.pathSegmentSeparator, path.sep);
        this.fsScandirSettings = new fsScandir.Settings({
          followSymbolicLinks: this._options.followSymbolicLinks,
          fs: this._options.fs,
          pathSegmentSeparator: this._options.pathSegmentSeparator,
          stats: this._options.stats,
          throwErrorOnBrokenSymbolicLink: this._options.throwErrorOnBrokenSymbolicLink
        });
      }
      _getValue(option, value) {
        return option !== null && option !== void 0 ? option : value;
      }
    };
    exports.default = Settings;
  }
});

// node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/index.js
var require_out3 = __commonJS({
  "node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Settings = exports.walkStream = exports.walkSync = exports.walk = void 0;
    var async_1 = require_async4();
    var stream_1 = require_stream2();
    var sync_1 = require_sync4();
    var settings_1 = require_settings3();
    exports.Settings = settings_1.default;
    function walk(directory, optionsOrSettingsOrCallback, callback) {
      if (typeof optionsOrSettingsOrCallback === "function") {
        new async_1.default(directory, getSettings()).read(optionsOrSettingsOrCallback);
        return;
      }
      new async_1.default(directory, getSettings(optionsOrSettingsOrCallback)).read(callback);
    }
    exports.walk = walk;
    function walkSync(directory, optionsOrSettings) {
      const settings = getSettings(optionsOrSettings);
      const provider = new sync_1.default(directory, settings);
      return provider.read();
    }
    exports.walkSync = walkSync;
    function walkStream(directory, optionsOrSettings) {
      const settings = getSettings(optionsOrSettings);
      const provider = new stream_1.default(directory, settings);
      return provider.read();
    }
    exports.walkStream = walkStream;
    function getSettings(settingsOrOptions = {}) {
      if (settingsOrOptions instanceof settings_1.default) {
        return settingsOrOptions;
      }
      return new settings_1.default(settingsOrOptions);
    }
  }
});

// node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/readers/reader.js
var require_reader2 = __commonJS({
  "node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/readers/reader.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var path = require("path");
    var fsStat = require_out();
    var utils = require_utils3();
    var Reader = class {
      constructor(_settings) {
        this._settings = _settings;
        this._fsStatSettings = new fsStat.Settings({
          followSymbolicLink: this._settings.followSymbolicLinks,
          fs: this._settings.fs,
          throwErrorOnBrokenSymbolicLink: this._settings.followSymbolicLinks
        });
      }
      _getFullEntryPath(filepath) {
        return path.resolve(this._settings.cwd, filepath);
      }
      _makeEntry(stats, pattern) {
        const entry = {
          name: pattern,
          path: pattern,
          dirent: utils.fs.createDirentFromStats(pattern, stats)
        };
        if (this._settings.stats) {
          entry.stats = stats;
        }
        return entry;
      }
      _isFatalError(error) {
        return !utils.errno.isEnoentCodeError(error) && !this._settings.suppressErrors;
      }
    };
    exports.default = Reader;
  }
});

// node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/readers/stream.js
var require_stream3 = __commonJS({
  "node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/readers/stream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var stream_1 = require("stream");
    var fsStat = require_out();
    var fsWalk = require_out3();
    var reader_1 = require_reader2();
    var ReaderStream = class extends reader_1.default {
      constructor() {
        super(...arguments);
        this._walkStream = fsWalk.walkStream;
        this._stat = fsStat.stat;
      }
      dynamic(root2, options) {
        return this._walkStream(root2, options);
      }
      static(patterns, options) {
        const filepaths = patterns.map(this._getFullEntryPath, this);
        const stream = new stream_1.PassThrough({ objectMode: true });
        stream._write = (index, _enc, done) => {
          return this._getEntry(filepaths[index], patterns[index], options).then((entry) => {
            if (entry !== null && options.entryFilter(entry)) {
              stream.push(entry);
            }
            if (index === filepaths.length - 1) {
              stream.end();
            }
            done();
          }).catch(done);
        };
        for (let i = 0; i < filepaths.length; i++) {
          stream.write(i);
        }
        return stream;
      }
      _getEntry(filepath, pattern, options) {
        return this._getStat(filepath).then((stats) => this._makeEntry(stats, pattern)).catch((error) => {
          if (options.errorFilter(error)) {
            return null;
          }
          throw error;
        });
      }
      _getStat(filepath) {
        return new Promise((resolve3, reject) => {
          this._stat(filepath, this._fsStatSettings, (error, stats) => {
            return error === null ? resolve3(stats) : reject(error);
          });
        });
      }
    };
    exports.default = ReaderStream;
  }
});

// node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/readers/async.js
var require_async5 = __commonJS({
  "node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/readers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fsWalk = require_out3();
    var reader_1 = require_reader2();
    var stream_1 = require_stream3();
    var ReaderAsync = class extends reader_1.default {
      constructor() {
        super(...arguments);
        this._walkAsync = fsWalk.walk;
        this._readerStream = new stream_1.default(this._settings);
      }
      dynamic(root2, options) {
        return new Promise((resolve3, reject) => {
          this._walkAsync(root2, options, (error, entries) => {
            if (error === null) {
              resolve3(entries);
            } else {
              reject(error);
            }
          });
        });
      }
      async static(patterns, options) {
        const entries = [];
        const stream = this._readerStream.static(patterns, options);
        return new Promise((resolve3, reject) => {
          stream.once("error", reject);
          stream.on("data", (entry) => entries.push(entry));
          stream.once("end", () => resolve3(entries));
        });
      }
    };
    exports.default = ReaderAsync;
  }
});

// node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/providers/matchers/matcher.js
var require_matcher = __commonJS({
  "node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/providers/matchers/matcher.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils = require_utils3();
    var Matcher = class {
      constructor(_patterns, _settings, _micromatchOptions) {
        this._patterns = _patterns;
        this._settings = _settings;
        this._micromatchOptions = _micromatchOptions;
        this._storage = [];
        this._fillStorage();
      }
      _fillStorage() {
        for (const pattern of this._patterns) {
          const segments = this._getPatternSegments(pattern);
          const sections = this._splitSegmentsIntoSections(segments);
          this._storage.push({
            complete: sections.length <= 1,
            pattern,
            segments,
            sections
          });
        }
      }
      _getPatternSegments(pattern) {
        const parts = utils.pattern.getPatternParts(pattern, this._micromatchOptions);
        return parts.map((part) => {
          const dynamic = utils.pattern.isDynamicPattern(part, this._settings);
          if (!dynamic) {
            return {
              dynamic: false,
              pattern: part
            };
          }
          return {
            dynamic: true,
            pattern: part,
            patternRe: utils.pattern.makeRe(part, this._micromatchOptions)
          };
        });
      }
      _splitSegmentsIntoSections(segments) {
        return utils.array.splitWhen(segments, (segment) => segment.dynamic && utils.pattern.hasGlobStar(segment.pattern));
      }
    };
    exports.default = Matcher;
  }
});

// node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/providers/matchers/partial.js
var require_partial = __commonJS({
  "node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/providers/matchers/partial.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var matcher_1 = require_matcher();
    var PartialMatcher = class extends matcher_1.default {
      match(filepath) {
        const parts = filepath.split("/");
        const levels = parts.length;
        const patterns = this._storage.filter((info) => !info.complete || info.segments.length > levels);
        for (const pattern of patterns) {
          const section = pattern.sections[0];
          if (!pattern.complete && levels > section.length) {
            return true;
          }
          const match = parts.every((part, index) => {
            const segment = pattern.segments[index];
            if (segment.dynamic && segment.patternRe.test(part)) {
              return true;
            }
            if (!segment.dynamic && segment.pattern === part) {
              return true;
            }
            return false;
          });
          if (match) {
            return true;
          }
        }
        return false;
      }
    };
    exports.default = PartialMatcher;
  }
});

// node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/providers/filters/deep.js
var require_deep = __commonJS({
  "node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/providers/filters/deep.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils = require_utils3();
    var partial_1 = require_partial();
    var DeepFilter = class {
      constructor(_settings, _micromatchOptions) {
        this._settings = _settings;
        this._micromatchOptions = _micromatchOptions;
      }
      getFilter(basePath, positive, negative) {
        const matcher = this._getMatcher(positive);
        const negativeRe = this._getNegativePatternsRe(negative);
        return (entry) => this._filter(basePath, entry, matcher, negativeRe);
      }
      _getMatcher(patterns) {
        return new partial_1.default(patterns, this._settings, this._micromatchOptions);
      }
      _getNegativePatternsRe(patterns) {
        const affectDepthOfReadingPatterns = patterns.filter(utils.pattern.isAffectDepthOfReadingPattern);
        return utils.pattern.convertPatternsToRe(affectDepthOfReadingPatterns, this._micromatchOptions);
      }
      _filter(basePath, entry, matcher, negativeRe) {
        if (this._isSkippedByDeep(basePath, entry.path)) {
          return false;
        }
        if (this._isSkippedSymbolicLink(entry)) {
          return false;
        }
        const filepath = utils.path.removeLeadingDotSegment(entry.path);
        if (this._isSkippedByPositivePatterns(filepath, matcher)) {
          return false;
        }
        return this._isSkippedByNegativePatterns(filepath, negativeRe);
      }
      _isSkippedByDeep(basePath, entryPath) {
        if (this._settings.deep === Infinity) {
          return false;
        }
        return this._getEntryLevel(basePath, entryPath) >= this._settings.deep;
      }
      _getEntryLevel(basePath, entryPath) {
        const entryPathDepth = entryPath.split("/").length;
        if (basePath === "") {
          return entryPathDepth;
        }
        const basePathDepth = basePath.split("/").length;
        return entryPathDepth - basePathDepth;
      }
      _isSkippedSymbolicLink(entry) {
        return !this._settings.followSymbolicLinks && entry.dirent.isSymbolicLink();
      }
      _isSkippedByPositivePatterns(entryPath, matcher) {
        return !this._settings.baseNameMatch && !matcher.match(entryPath);
      }
      _isSkippedByNegativePatterns(entryPath, patternsRe) {
        return !utils.pattern.matchAny(entryPath, patternsRe);
      }
    };
    exports.default = DeepFilter;
  }
});

// node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/providers/filters/entry.js
var require_entry = __commonJS({
  "node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/providers/filters/entry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils = require_utils3();
    var EntryFilter = class {
      constructor(_settings, _micromatchOptions) {
        this._settings = _settings;
        this._micromatchOptions = _micromatchOptions;
        this.index = /* @__PURE__ */ new Map();
      }
      getFilter(positive, negative) {
        const positiveRe = utils.pattern.convertPatternsToRe(positive, this._micromatchOptions);
        const negativeRe = utils.pattern.convertPatternsToRe(negative, Object.assign(Object.assign({}, this._micromatchOptions), { dot: true }));
        return (entry) => this._filter(entry, positiveRe, negativeRe);
      }
      _filter(entry, positiveRe, negativeRe) {
        const filepath = utils.path.removeLeadingDotSegment(entry.path);
        if (this._settings.unique && this._isDuplicateEntry(filepath)) {
          return false;
        }
        if (this._onlyFileFilter(entry) || this._onlyDirectoryFilter(entry)) {
          return false;
        }
        if (this._isSkippedByAbsoluteNegativePatterns(filepath, negativeRe)) {
          return false;
        }
        const isDirectory = entry.dirent.isDirectory();
        const isMatched = this._isMatchToPatterns(filepath, positiveRe, isDirectory) && !this._isMatchToPatterns(filepath, negativeRe, isDirectory);
        if (this._settings.unique && isMatched) {
          this._createIndexRecord(filepath);
        }
        return isMatched;
      }
      _isDuplicateEntry(filepath) {
        return this.index.has(filepath);
      }
      _createIndexRecord(filepath) {
        this.index.set(filepath, void 0);
      }
      _onlyFileFilter(entry) {
        return this._settings.onlyFiles && !entry.dirent.isFile();
      }
      _onlyDirectoryFilter(entry) {
        return this._settings.onlyDirectories && !entry.dirent.isDirectory();
      }
      _isSkippedByAbsoluteNegativePatterns(entryPath, patternsRe) {
        if (!this._settings.absolute) {
          return false;
        }
        const fullpath = utils.path.makeAbsolute(this._settings.cwd, entryPath);
        return utils.pattern.matchAny(fullpath, patternsRe);
      }
      _isMatchToPatterns(filepath, patternsRe, isDirectory) {
        const isMatched = utils.pattern.matchAny(filepath, patternsRe);
        if (!isMatched && isDirectory) {
          return utils.pattern.matchAny(filepath + "/", patternsRe);
        }
        return isMatched;
      }
    };
    exports.default = EntryFilter;
  }
});

// node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/providers/filters/error.js
var require_error = __commonJS({
  "node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/providers/filters/error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils = require_utils3();
    var ErrorFilter = class {
      constructor(_settings) {
        this._settings = _settings;
      }
      getFilter() {
        return (error) => this._isNonFatalError(error);
      }
      _isNonFatalError(error) {
        return utils.errno.isEnoentCodeError(error) || this._settings.suppressErrors;
      }
    };
    exports.default = ErrorFilter;
  }
});

// node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/providers/transformers/entry.js
var require_entry2 = __commonJS({
  "node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/providers/transformers/entry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils = require_utils3();
    var EntryTransformer = class {
      constructor(_settings) {
        this._settings = _settings;
      }
      getTransformer() {
        return (entry) => this._transform(entry);
      }
      _transform(entry) {
        let filepath = entry.path;
        if (this._settings.absolute) {
          filepath = utils.path.makeAbsolute(this._settings.cwd, filepath);
          filepath = utils.path.unixify(filepath);
        }
        if (this._settings.markDirectories && entry.dirent.isDirectory()) {
          filepath += "/";
        }
        if (!this._settings.objectMode) {
          return filepath;
        }
        return Object.assign(Object.assign({}, entry), { path: filepath });
      }
    };
    exports.default = EntryTransformer;
  }
});

// node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/providers/provider.js
var require_provider = __commonJS({
  "node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/providers/provider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var path = require("path");
    var deep_1 = require_deep();
    var entry_1 = require_entry();
    var error_1 = require_error();
    var entry_2 = require_entry2();
    var Provider = class {
      constructor(_settings) {
        this._settings = _settings;
        this.errorFilter = new error_1.default(this._settings);
        this.entryFilter = new entry_1.default(this._settings, this._getMicromatchOptions());
        this.deepFilter = new deep_1.default(this._settings, this._getMicromatchOptions());
        this.entryTransformer = new entry_2.default(this._settings);
      }
      _getRootDirectory(task) {
        return path.resolve(this._settings.cwd, task.base);
      }
      _getReaderOptions(task) {
        const basePath = task.base === "." ? "" : task.base;
        return {
          basePath,
          pathSegmentSeparator: "/",
          concurrency: this._settings.concurrency,
          deepFilter: this.deepFilter.getFilter(basePath, task.positive, task.negative),
          entryFilter: this.entryFilter.getFilter(task.positive, task.negative),
          errorFilter: this.errorFilter.getFilter(),
          followSymbolicLinks: this._settings.followSymbolicLinks,
          fs: this._settings.fs,
          stats: this._settings.stats,
          throwErrorOnBrokenSymbolicLink: this._settings.throwErrorOnBrokenSymbolicLink,
          transform: this.entryTransformer.getTransformer()
        };
      }
      _getMicromatchOptions() {
        return {
          dot: this._settings.dot,
          matchBase: this._settings.baseNameMatch,
          nobrace: !this._settings.braceExpansion,
          nocase: !this._settings.caseSensitiveMatch,
          noext: !this._settings.extglob,
          noglobstar: !this._settings.globstar,
          posix: true,
          strictSlashes: false
        };
      }
    };
    exports.default = Provider;
  }
});

// node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/providers/async.js
var require_async6 = __commonJS({
  "node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/providers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var async_1 = require_async5();
    var provider_1 = require_provider();
    var ProviderAsync = class extends provider_1.default {
      constructor() {
        super(...arguments);
        this._reader = new async_1.default(this._settings);
      }
      async read(task) {
        const root2 = this._getRootDirectory(task);
        const options = this._getReaderOptions(task);
        const entries = await this.api(root2, task, options);
        return entries.map((entry) => options.transform(entry));
      }
      api(root2, task, options) {
        if (task.dynamic) {
          return this._reader.dynamic(root2, options);
        }
        return this._reader.static(task.patterns, options);
      }
    };
    exports.default = ProviderAsync;
  }
});

// node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/providers/stream.js
var require_stream4 = __commonJS({
  "node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/providers/stream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var stream_1 = require("stream");
    var stream_2 = require_stream3();
    var provider_1 = require_provider();
    var ProviderStream = class extends provider_1.default {
      constructor() {
        super(...arguments);
        this._reader = new stream_2.default(this._settings);
      }
      read(task) {
        const root2 = this._getRootDirectory(task);
        const options = this._getReaderOptions(task);
        const source = this.api(root2, task, options);
        const destination = new stream_1.Readable({ objectMode: true, read: () => {
        } });
        source.once("error", (error) => destination.emit("error", error)).on("data", (entry) => destination.emit("data", options.transform(entry))).once("end", () => destination.emit("end"));
        destination.once("close", () => source.destroy());
        return destination;
      }
      api(root2, task, options) {
        if (task.dynamic) {
          return this._reader.dynamic(root2, options);
        }
        return this._reader.static(task.patterns, options);
      }
    };
    exports.default = ProviderStream;
  }
});

// node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/readers/sync.js
var require_sync5 = __commonJS({
  "node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/readers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fsStat = require_out();
    var fsWalk = require_out3();
    var reader_1 = require_reader2();
    var ReaderSync = class extends reader_1.default {
      constructor() {
        super(...arguments);
        this._walkSync = fsWalk.walkSync;
        this._statSync = fsStat.statSync;
      }
      dynamic(root2, options) {
        return this._walkSync(root2, options);
      }
      static(patterns, options) {
        const entries = [];
        for (const pattern of patterns) {
          const filepath = this._getFullEntryPath(pattern);
          const entry = this._getEntry(filepath, pattern, options);
          if (entry === null || !options.entryFilter(entry)) {
            continue;
          }
          entries.push(entry);
        }
        return entries;
      }
      _getEntry(filepath, pattern, options) {
        try {
          const stats = this._getStat(filepath);
          return this._makeEntry(stats, pattern);
        } catch (error) {
          if (options.errorFilter(error)) {
            return null;
          }
          throw error;
        }
      }
      _getStat(filepath) {
        return this._statSync(filepath, this._fsStatSettings);
      }
    };
    exports.default = ReaderSync;
  }
});

// node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/providers/sync.js
var require_sync6 = __commonJS({
  "node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/providers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var sync_1 = require_sync5();
    var provider_1 = require_provider();
    var ProviderSync = class extends provider_1.default {
      constructor() {
        super(...arguments);
        this._reader = new sync_1.default(this._settings);
      }
      read(task) {
        const root2 = this._getRootDirectory(task);
        const options = this._getReaderOptions(task);
        const entries = this.api(root2, task, options);
        return entries.map(options.transform);
      }
      api(root2, task, options) {
        if (task.dynamic) {
          return this._reader.dynamic(root2, options);
        }
        return this._reader.static(task.patterns, options);
      }
    };
    exports.default = ProviderSync;
  }
});

// node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/settings.js
var require_settings4 = __commonJS({
  "node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/settings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DEFAULT_FILE_SYSTEM_ADAPTER = void 0;
    var fs6 = require("fs");
    var os = require("os");
    var CPU_COUNT = Math.max(os.cpus().length, 1);
    exports.DEFAULT_FILE_SYSTEM_ADAPTER = {
      lstat: fs6.lstat,
      lstatSync: fs6.lstatSync,
      stat: fs6.stat,
      statSync: fs6.statSync,
      readdir: fs6.readdir,
      readdirSync: fs6.readdirSync
    };
    var Settings = class {
      constructor(_options = {}) {
        this._options = _options;
        this.absolute = this._getValue(this._options.absolute, false);
        this.baseNameMatch = this._getValue(this._options.baseNameMatch, false);
        this.braceExpansion = this._getValue(this._options.braceExpansion, true);
        this.caseSensitiveMatch = this._getValue(this._options.caseSensitiveMatch, true);
        this.concurrency = this._getValue(this._options.concurrency, CPU_COUNT);
        this.cwd = this._getValue(this._options.cwd, process.cwd());
        this.deep = this._getValue(this._options.deep, Infinity);
        this.dot = this._getValue(this._options.dot, false);
        this.extglob = this._getValue(this._options.extglob, true);
        this.followSymbolicLinks = this._getValue(this._options.followSymbolicLinks, true);
        this.fs = this._getFileSystemMethods(this._options.fs);
        this.globstar = this._getValue(this._options.globstar, true);
        this.ignore = this._getValue(this._options.ignore, []);
        this.markDirectories = this._getValue(this._options.markDirectories, false);
        this.objectMode = this._getValue(this._options.objectMode, false);
        this.onlyDirectories = this._getValue(this._options.onlyDirectories, false);
        this.onlyFiles = this._getValue(this._options.onlyFiles, true);
        this.stats = this._getValue(this._options.stats, false);
        this.suppressErrors = this._getValue(this._options.suppressErrors, false);
        this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, false);
        this.unique = this._getValue(this._options.unique, true);
        if (this.onlyDirectories) {
          this.onlyFiles = false;
        }
        if (this.stats) {
          this.objectMode = true;
        }
      }
      _getValue(option, value) {
        return option === void 0 ? value : option;
      }
      _getFileSystemMethods(methods = {}) {
        return Object.assign(Object.assign({}, exports.DEFAULT_FILE_SYSTEM_ADAPTER), methods);
      }
    };
    exports.default = Settings;
  }
});

// node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/index.js
var require_out4 = __commonJS({
  "node_modules/.pnpm/fast-glob@3.3.0/node_modules/fast-glob/out/index.js"(exports, module2) {
    "use strict";
    var taskManager = require_tasks();
    var async_1 = require_async6();
    var stream_1 = require_stream4();
    var sync_1 = require_sync6();
    var settings_1 = require_settings4();
    var utils = require_utils3();
    async function FastGlob(source, options) {
      assertPatternsInput(source);
      const works = getWorks(source, async_1.default, options);
      const result = await Promise.all(works);
      return utils.array.flatten(result);
    }
    (function(FastGlob2) {
      FastGlob2.glob = FastGlob2;
      FastGlob2.globSync = sync;
      FastGlob2.globStream = stream;
      FastGlob2.async = FastGlob2;
      function sync(source, options) {
        assertPatternsInput(source);
        const works = getWorks(source, sync_1.default, options);
        return utils.array.flatten(works);
      }
      FastGlob2.sync = sync;
      function stream(source, options) {
        assertPatternsInput(source);
        const works = getWorks(source, stream_1.default, options);
        return utils.stream.merge(works);
      }
      FastGlob2.stream = stream;
      function generateTasks(source, options) {
        assertPatternsInput(source);
        const patterns = [].concat(source);
        const settings = new settings_1.default(options);
        return taskManager.generate(patterns, settings);
      }
      FastGlob2.generateTasks = generateTasks;
      function isDynamicPattern(source, options) {
        assertPatternsInput(source);
        const settings = new settings_1.default(options);
        return utils.pattern.isDynamicPattern(source, settings);
      }
      FastGlob2.isDynamicPattern = isDynamicPattern;
      function escapePath(source) {
        assertPatternsInput(source);
        return utils.path.escape(source);
      }
      FastGlob2.escapePath = escapePath;
      function convertPathToPattern(source) {
        assertPatternsInput(source);
        return utils.path.convertPathToPattern(source);
      }
      FastGlob2.convertPathToPattern = convertPathToPattern;
      let posix;
      (function(posix2) {
        function escapePath2(source) {
          assertPatternsInput(source);
          return utils.path.escapePosixPath(source);
        }
        posix2.escapePath = escapePath2;
        function convertPathToPattern2(source) {
          assertPatternsInput(source);
          return utils.path.convertPosixPathToPattern(source);
        }
        posix2.convertPathToPattern = convertPathToPattern2;
      })(posix = FastGlob2.posix || (FastGlob2.posix = {}));
      let win32;
      (function(win322) {
        function escapePath2(source) {
          assertPatternsInput(source);
          return utils.path.escapeWindowsPath(source);
        }
        win322.escapePath = escapePath2;
        function convertPathToPattern2(source) {
          assertPatternsInput(source);
          return utils.path.convertWindowsPathToPattern(source);
        }
        win322.convertPathToPattern = convertPathToPattern2;
      })(win32 = FastGlob2.win32 || (FastGlob2.win32 = {}));
    })(FastGlob || (FastGlob = {}));
    function getWorks(source, _Provider, options) {
      const patterns = [].concat(source);
      const settings = new settings_1.default(options);
      const tasks = taskManager.generate(patterns, settings);
      const provider = new _Provider(settings);
      return tasks.map(provider.read, provider);
    }
    function assertPatternsInput(input) {
      const source = [].concat(input);
      const isValidSource = source.every((item) => utils.string.isString(item) && !utils.string.isEmpty(item));
      if (!isValidSource) {
        throw new TypeError("Patterns must be a string (non empty) or an array of strings");
      }
    }
    module2.exports = FastGlob;
  }
});

// node_modules/.pnpm/readdirp@3.6.0/node_modules/readdirp/index.js
var require_readdirp = __commonJS({
  "node_modules/.pnpm/readdirp@3.6.0/node_modules/readdirp/index.js"(exports, module2) {
    "use strict";
    var fs6 = require("fs");
    var { Readable } = require("stream");
    var sysPath = require("path");
    var { promisify } = require("util");
    var picomatch = require_picomatch2();
    var readdir = promisify(fs6.readdir);
    var stat = promisify(fs6.stat);
    var lstat = promisify(fs6.lstat);
    var realpath = promisify(fs6.realpath);
    var BANG = "!";
    var RECURSIVE_ERROR_CODE = "READDIRP_RECURSIVE_ERROR";
    var NORMAL_FLOW_ERRORS = /* @__PURE__ */ new Set(["ENOENT", "EPERM", "EACCES", "ELOOP", RECURSIVE_ERROR_CODE]);
    var FILE_TYPE = "files";
    var DIR_TYPE = "directories";
    var FILE_DIR_TYPE = "files_directories";
    var EVERYTHING_TYPE = "all";
    var ALL_TYPES = [FILE_TYPE, DIR_TYPE, FILE_DIR_TYPE, EVERYTHING_TYPE];
    var isNormalFlowError = (error) => NORMAL_FLOW_ERRORS.has(error.code);
    var [maj, min] = process.versions.node.split(".").slice(0, 2).map((n) => Number.parseInt(n, 10));
    var wantBigintFsStats = process.platform === "win32" && (maj > 10 || maj === 10 && min >= 5);
    var normalizeFilter = (filter) => {
      if (filter === void 0)
        return;
      if (typeof filter === "function")
        return filter;
      if (typeof filter === "string") {
        const glob = picomatch(filter.trim());
        return (entry) => glob(entry.basename);
      }
      if (Array.isArray(filter)) {
        const positive = [];
        const negative = [];
        for (const item of filter) {
          const trimmed = item.trim();
          if (trimmed.charAt(0) === BANG) {
            negative.push(picomatch(trimmed.slice(1)));
          } else {
            positive.push(picomatch(trimmed));
          }
        }
        if (negative.length > 0) {
          if (positive.length > 0) {
            return (entry) => positive.some((f) => f(entry.basename)) && !negative.some((f) => f(entry.basename));
          }
          return (entry) => !negative.some((f) => f(entry.basename));
        }
        return (entry) => positive.some((f) => f(entry.basename));
      }
    };
    var ReaddirpStream = class extends Readable {
      static get defaultOptions() {
        return {
          root: ".",
          /* eslint-disable no-unused-vars */
          fileFilter: (path) => true,
          directoryFilter: (path) => true,
          /* eslint-enable no-unused-vars */
          type: FILE_TYPE,
          lstat: false,
          depth: 2147483648,
          alwaysStat: false
        };
      }
      constructor(options = {}) {
        super({
          objectMode: true,
          autoDestroy: true,
          highWaterMark: options.highWaterMark || 4096
        });
        const opts2 = { ...ReaddirpStream.defaultOptions, ...options };
        const { root: root2, type } = opts2;
        this._fileFilter = normalizeFilter(opts2.fileFilter);
        this._directoryFilter = normalizeFilter(opts2.directoryFilter);
        const statMethod = opts2.lstat ? lstat : stat;
        if (wantBigintFsStats) {
          this._stat = (path) => statMethod(path, { bigint: true });
        } else {
          this._stat = statMethod;
        }
        this._maxDepth = opts2.depth;
        this._wantsDir = [DIR_TYPE, FILE_DIR_TYPE, EVERYTHING_TYPE].includes(type);
        this._wantsFile = [FILE_TYPE, FILE_DIR_TYPE, EVERYTHING_TYPE].includes(type);
        this._wantsEverything = type === EVERYTHING_TYPE;
        this._root = sysPath.resolve(root2);
        this._isDirent = "Dirent" in fs6 && !opts2.alwaysStat;
        this._statsProp = this._isDirent ? "dirent" : "stats";
        this._rdOptions = { encoding: "utf8", withFileTypes: this._isDirent };
        this.parents = [this._exploreDir(root2, 1)];
        this.reading = false;
        this.parent = void 0;
      }
      async _read(batch) {
        if (this.reading)
          return;
        this.reading = true;
        try {
          while (!this.destroyed && batch > 0) {
            const { path, depth, files = [] } = this.parent || {};
            if (files.length > 0) {
              const slice = files.splice(0, batch).map((dirent) => this._formatEntry(dirent, path));
              for (const entry of await Promise.all(slice)) {
                if (this.destroyed)
                  return;
                const entryType = await this._getEntryType(entry);
                if (entryType === "directory" && this._directoryFilter(entry)) {
                  if (depth <= this._maxDepth) {
                    this.parents.push(this._exploreDir(entry.fullPath, depth + 1));
                  }
                  if (this._wantsDir) {
                    this.push(entry);
                    batch--;
                  }
                } else if ((entryType === "file" || this._includeAsFile(entry)) && this._fileFilter(entry)) {
                  if (this._wantsFile) {
                    this.push(entry);
                    batch--;
                  }
                }
              }
            } else {
              const parent = this.parents.pop();
              if (!parent) {
                this.push(null);
                break;
              }
              this.parent = await parent;
              if (this.destroyed)
                return;
            }
          }
        } catch (error) {
          this.destroy(error);
        } finally {
          this.reading = false;
        }
      }
      async _exploreDir(path, depth) {
        let files;
        try {
          files = await readdir(path, this._rdOptions);
        } catch (error) {
          this._onError(error);
        }
        return { files, depth, path };
      }
      async _formatEntry(dirent, path) {
        let entry;
        try {
          const basename2 = this._isDirent ? dirent.name : dirent;
          const fullPath = sysPath.resolve(sysPath.join(path, basename2));
          entry = { path: sysPath.relative(this._root, fullPath), fullPath, basename: basename2 };
          entry[this._statsProp] = this._isDirent ? dirent : await this._stat(fullPath);
        } catch (err) {
          this._onError(err);
        }
        return entry;
      }
      _onError(err) {
        if (isNormalFlowError(err) && !this.destroyed) {
          this.emit("warn", err);
        } else {
          this.destroy(err);
        }
      }
      async _getEntryType(entry) {
        const stats = entry && entry[this._statsProp];
        if (!stats) {
          return;
        }
        if (stats.isFile()) {
          return "file";
        }
        if (stats.isDirectory()) {
          return "directory";
        }
        if (stats && stats.isSymbolicLink()) {
          const full = entry.fullPath;
          try {
            const entryRealPath = await realpath(full);
            const entryRealPathStats = await lstat(entryRealPath);
            if (entryRealPathStats.isFile()) {
              return "file";
            }
            if (entryRealPathStats.isDirectory()) {
              const len = entryRealPath.length;
              if (full.startsWith(entryRealPath) && full.substr(len, 1) === sysPath.sep) {
                const recursiveError = new Error(
                  `Circular symlink detected: "${full}" points to "${entryRealPath}"`
                );
                recursiveError.code = RECURSIVE_ERROR_CODE;
                return this._onError(recursiveError);
              }
              return "directory";
            }
          } catch (error) {
            this._onError(error);
          }
        }
      }
      _includeAsFile(entry) {
        const stats = entry && entry[this._statsProp];
        return stats && this._wantsEverything && !stats.isDirectory();
      }
    };
    var readdirp = (root2, options = {}) => {
      let type = options.entryType || options.type;
      if (type === "both")
        type = FILE_DIR_TYPE;
      if (type)
        options.type = type;
      if (!root2) {
        throw new Error("readdirp: root argument is required. Usage: readdirp(root, options)");
      } else if (typeof root2 !== "string") {
        throw new TypeError("readdirp: root argument must be a string. Usage: readdirp(root, options)");
      } else if (type && !ALL_TYPES.includes(type)) {
        throw new Error(`readdirp: Invalid type passed. Use one of ${ALL_TYPES.join(", ")}`);
      }
      options.root = root2;
      return new ReaddirpStream(options);
    };
    var readdirpPromise = (root2, options = {}) => {
      return new Promise((resolve3, reject) => {
        const files = [];
        readdirp(root2, options).on("data", (entry) => files.push(entry)).on("end", () => resolve3(files)).on("error", (error) => reject(error));
      });
    };
    readdirp.promise = readdirpPromise;
    readdirp.ReaddirpStream = ReaddirpStream;
    readdirp.default = readdirp;
    module2.exports = readdirp;
  }
});

// node_modules/.pnpm/normalize-path@3.0.0/node_modules/normalize-path/index.js
var require_normalize_path = __commonJS({
  "node_modules/.pnpm/normalize-path@3.0.0/node_modules/normalize-path/index.js"(exports, module2) {
    module2.exports = function(path, stripTrailing) {
      if (typeof path !== "string") {
        throw new TypeError("expected path to be a string");
      }
      if (path === "\\" || path === "/")
        return "/";
      var len = path.length;
      if (len <= 1)
        return path;
      var prefix = "";
      if (len > 4 && path[3] === "\\") {
        var ch = path[2];
        if ((ch === "?" || ch === ".") && path.slice(0, 2) === "\\\\") {
          path = path.slice(2);
          prefix = "//";
        }
      }
      var segs = path.split(/[/\\]+/);
      if (stripTrailing !== false && segs[segs.length - 1] === "") {
        segs.pop();
      }
      return prefix + segs.join("/");
    };
  }
});

// node_modules/.pnpm/anymatch@3.1.3/node_modules/anymatch/index.js
var require_anymatch = __commonJS({
  "node_modules/.pnpm/anymatch@3.1.3/node_modules/anymatch/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var picomatch = require_picomatch2();
    var normalizePath = require_normalize_path();
    var BANG = "!";
    var DEFAULT_OPTIONS = { returnIndex: false };
    var arrify = (item) => Array.isArray(item) ? item : [item];
    var createPattern = (matcher, options) => {
      if (typeof matcher === "function") {
        return matcher;
      }
      if (typeof matcher === "string") {
        const glob = picomatch(matcher, options);
        return (string) => matcher === string || glob(string);
      }
      if (matcher instanceof RegExp) {
        return (string) => matcher.test(string);
      }
      return (string) => false;
    };
    var matchPatterns = (patterns, negPatterns, args, returnIndex) => {
      const isList = Array.isArray(args);
      const _path = isList ? args[0] : args;
      if (!isList && typeof _path !== "string") {
        throw new TypeError("anymatch: second argument must be a string: got " + Object.prototype.toString.call(_path));
      }
      const path = normalizePath(_path, false);
      for (let index = 0; index < negPatterns.length; index++) {
        const nglob = negPatterns[index];
        if (nglob(path)) {
          return returnIndex ? -1 : false;
        }
      }
      const applied = isList && [path].concat(args.slice(1));
      for (let index = 0; index < patterns.length; index++) {
        const pattern = patterns[index];
        if (isList ? pattern(...applied) : pattern(path)) {
          return returnIndex ? index : true;
        }
      }
      return returnIndex ? -1 : false;
    };
    var anymatch = (matchers, testString, options = DEFAULT_OPTIONS) => {
      if (matchers == null) {
        throw new TypeError("anymatch: specify first argument");
      }
      const opts2 = typeof options === "boolean" ? { returnIndex: options } : options;
      const returnIndex = opts2.returnIndex || false;
      const mtchers = arrify(matchers);
      const negatedGlobs = mtchers.filter((item) => typeof item === "string" && item.charAt(0) === BANG).map((item) => item.slice(1)).map((item) => picomatch(item, opts2));
      const patterns = mtchers.filter((item) => typeof item !== "string" || typeof item === "string" && item.charAt(0) !== BANG).map((matcher) => createPattern(matcher, opts2));
      if (testString == null) {
        return (testString2, ri = false) => {
          const returnIndex2 = typeof ri === "boolean" ? ri : false;
          return matchPatterns(patterns, negatedGlobs, testString2, returnIndex2);
        };
      }
      return matchPatterns(patterns, negatedGlobs, testString, returnIndex);
    };
    anymatch.default = anymatch;
    module2.exports = anymatch;
  }
});

// node_modules/.pnpm/binary-extensions@2.2.0/node_modules/binary-extensions/binary-extensions.json
var require_binary_extensions = __commonJS({
  "node_modules/.pnpm/binary-extensions@2.2.0/node_modules/binary-extensions/binary-extensions.json"(exports, module2) {
    module2.exports = [
      "3dm",
      "3ds",
      "3g2",
      "3gp",
      "7z",
      "a",
      "aac",
      "adp",
      "ai",
      "aif",
      "aiff",
      "alz",
      "ape",
      "apk",
      "appimage",
      "ar",
      "arj",
      "asf",
      "au",
      "avi",
      "bak",
      "baml",
      "bh",
      "bin",
      "bk",
      "bmp",
      "btif",
      "bz2",
      "bzip2",
      "cab",
      "caf",
      "cgm",
      "class",
      "cmx",
      "cpio",
      "cr2",
      "cur",
      "dat",
      "dcm",
      "deb",
      "dex",
      "djvu",
      "dll",
      "dmg",
      "dng",
      "doc",
      "docm",
      "docx",
      "dot",
      "dotm",
      "dra",
      "DS_Store",
      "dsk",
      "dts",
      "dtshd",
      "dvb",
      "dwg",
      "dxf",
      "ecelp4800",
      "ecelp7470",
      "ecelp9600",
      "egg",
      "eol",
      "eot",
      "epub",
      "exe",
      "f4v",
      "fbs",
      "fh",
      "fla",
      "flac",
      "flatpak",
      "fli",
      "flv",
      "fpx",
      "fst",
      "fvt",
      "g3",
      "gh",
      "gif",
      "graffle",
      "gz",
      "gzip",
      "h261",
      "h263",
      "h264",
      "icns",
      "ico",
      "ief",
      "img",
      "ipa",
      "iso",
      "jar",
      "jpeg",
      "jpg",
      "jpgv",
      "jpm",
      "jxr",
      "key",
      "ktx",
      "lha",
      "lib",
      "lvp",
      "lz",
      "lzh",
      "lzma",
      "lzo",
      "m3u",
      "m4a",
      "m4v",
      "mar",
      "mdi",
      "mht",
      "mid",
      "midi",
      "mj2",
      "mka",
      "mkv",
      "mmr",
      "mng",
      "mobi",
      "mov",
      "movie",
      "mp3",
      "mp4",
      "mp4a",
      "mpeg",
      "mpg",
      "mpga",
      "mxu",
      "nef",
      "npx",
      "numbers",
      "nupkg",
      "o",
      "odp",
      "ods",
      "odt",
      "oga",
      "ogg",
      "ogv",
      "otf",
      "ott",
      "pages",
      "pbm",
      "pcx",
      "pdb",
      "pdf",
      "pea",
      "pgm",
      "pic",
      "png",
      "pnm",
      "pot",
      "potm",
      "potx",
      "ppa",
      "ppam",
      "ppm",
      "pps",
      "ppsm",
      "ppsx",
      "ppt",
      "pptm",
      "pptx",
      "psd",
      "pya",
      "pyc",
      "pyo",
      "pyv",
      "qt",
      "rar",
      "ras",
      "raw",
      "resources",
      "rgb",
      "rip",
      "rlc",
      "rmf",
      "rmvb",
      "rpm",
      "rtf",
      "rz",
      "s3m",
      "s7z",
      "scpt",
      "sgi",
      "shar",
      "snap",
      "sil",
      "sketch",
      "slk",
      "smv",
      "snk",
      "so",
      "stl",
      "suo",
      "sub",
      "swf",
      "tar",
      "tbz",
      "tbz2",
      "tga",
      "tgz",
      "thmx",
      "tif",
      "tiff",
      "tlz",
      "ttc",
      "ttf",
      "txz",
      "udf",
      "uvh",
      "uvi",
      "uvm",
      "uvp",
      "uvs",
      "uvu",
      "viv",
      "vob",
      "war",
      "wav",
      "wax",
      "wbmp",
      "wdp",
      "weba",
      "webm",
      "webp",
      "whl",
      "wim",
      "wm",
      "wma",
      "wmv",
      "wmx",
      "woff",
      "woff2",
      "wrm",
      "wvx",
      "xbm",
      "xif",
      "xla",
      "xlam",
      "xls",
      "xlsb",
      "xlsm",
      "xlsx",
      "xlt",
      "xltm",
      "xltx",
      "xm",
      "xmind",
      "xpi",
      "xpm",
      "xwd",
      "xz",
      "z",
      "zip",
      "zipx"
    ];
  }
});

// node_modules/.pnpm/binary-extensions@2.2.0/node_modules/binary-extensions/index.js
var require_binary_extensions2 = __commonJS({
  "node_modules/.pnpm/binary-extensions@2.2.0/node_modules/binary-extensions/index.js"(exports, module2) {
    module2.exports = require_binary_extensions();
  }
});

// node_modules/.pnpm/is-binary-path@2.1.0/node_modules/is-binary-path/index.js
var require_is_binary_path = __commonJS({
  "node_modules/.pnpm/is-binary-path@2.1.0/node_modules/is-binary-path/index.js"(exports, module2) {
    "use strict";
    var path = require("path");
    var binaryExtensions = require_binary_extensions2();
    var extensions = new Set(binaryExtensions);
    module2.exports = (filePath) => extensions.has(path.extname(filePath).slice(1).toLowerCase());
  }
});

// node_modules/.pnpm/chokidar@3.5.3/node_modules/chokidar/lib/constants.js
var require_constants4 = __commonJS({
  "node_modules/.pnpm/chokidar@3.5.3/node_modules/chokidar/lib/constants.js"(exports) {
    "use strict";
    var { sep } = require("path");
    var { platform: platform2 } = process;
    var os = require("os");
    exports.EV_ALL = "all";
    exports.EV_READY = "ready";
    exports.EV_ADD = "add";
    exports.EV_CHANGE = "change";
    exports.EV_ADD_DIR = "addDir";
    exports.EV_UNLINK = "unlink";
    exports.EV_UNLINK_DIR = "unlinkDir";
    exports.EV_RAW = "raw";
    exports.EV_ERROR = "error";
    exports.STR_DATA = "data";
    exports.STR_END = "end";
    exports.STR_CLOSE = "close";
    exports.FSEVENT_CREATED = "created";
    exports.FSEVENT_MODIFIED = "modified";
    exports.FSEVENT_DELETED = "deleted";
    exports.FSEVENT_MOVED = "moved";
    exports.FSEVENT_CLONED = "cloned";
    exports.FSEVENT_UNKNOWN = "unknown";
    exports.FSEVENT_TYPE_FILE = "file";
    exports.FSEVENT_TYPE_DIRECTORY = "directory";
    exports.FSEVENT_TYPE_SYMLINK = "symlink";
    exports.KEY_LISTENERS = "listeners";
    exports.KEY_ERR = "errHandlers";
    exports.KEY_RAW = "rawEmitters";
    exports.HANDLER_KEYS = [exports.KEY_LISTENERS, exports.KEY_ERR, exports.KEY_RAW];
    exports.DOT_SLASH = `.${sep}`;
    exports.BACK_SLASH_RE = /\\/g;
    exports.DOUBLE_SLASH_RE = /\/\//;
    exports.SLASH_OR_BACK_SLASH_RE = /[/\\]/;
    exports.DOT_RE = /\..*\.(sw[px])$|~$|\.subl.*\.tmp/;
    exports.REPLACER_RE = /^\.[/\\]/;
    exports.SLASH = "/";
    exports.SLASH_SLASH = "//";
    exports.BRACE_START = "{";
    exports.BANG = "!";
    exports.ONE_DOT = ".";
    exports.TWO_DOTS = "..";
    exports.STAR = "*";
    exports.GLOBSTAR = "**";
    exports.ROOT_GLOBSTAR = "/**/*";
    exports.SLASH_GLOBSTAR = "/**";
    exports.DIR_SUFFIX = "Dir";
    exports.ANYMATCH_OPTS = { dot: true };
    exports.STRING_TYPE = "string";
    exports.FUNCTION_TYPE = "function";
    exports.EMPTY_STR = "";
    exports.EMPTY_FN = () => {
    };
    exports.IDENTITY_FN = (val) => val;
    exports.isWindows = platform2 === "win32";
    exports.isMacos = platform2 === "darwin";
    exports.isLinux = platform2 === "linux";
    exports.isIBMi = os.type() === "OS400";
  }
});

// node_modules/.pnpm/chokidar@3.5.3/node_modules/chokidar/lib/nodefs-handler.js
var require_nodefs_handler = __commonJS({
  "node_modules/.pnpm/chokidar@3.5.3/node_modules/chokidar/lib/nodefs-handler.js"(exports, module2) {
    "use strict";
    var fs6 = require("fs");
    var sysPath = require("path");
    var { promisify } = require("util");
    var isBinaryPath = require_is_binary_path();
    var {
      isWindows,
      isLinux,
      EMPTY_FN,
      EMPTY_STR,
      KEY_LISTENERS,
      KEY_ERR,
      KEY_RAW,
      HANDLER_KEYS,
      EV_CHANGE,
      EV_ADD,
      EV_ADD_DIR,
      EV_ERROR,
      STR_DATA,
      STR_END,
      BRACE_START,
      STAR
    } = require_constants4();
    var THROTTLE_MODE_WATCH = "watch";
    var open = promisify(fs6.open);
    var stat = promisify(fs6.stat);
    var lstat = promisify(fs6.lstat);
    var close = promisify(fs6.close);
    var fsrealpath = promisify(fs6.realpath);
    var statMethods = { lstat, stat };
    var foreach = (val, fn) => {
      if (val instanceof Set) {
        val.forEach(fn);
      } else {
        fn(val);
      }
    };
    var addAndConvert = (main, prop, item) => {
      let container = main[prop];
      if (!(container instanceof Set)) {
        main[prop] = container = /* @__PURE__ */ new Set([container]);
      }
      container.add(item);
    };
    var clearItem = (cont) => (key) => {
      const set = cont[key];
      if (set instanceof Set) {
        set.clear();
      } else {
        delete cont[key];
      }
    };
    var delFromSet = (main, prop, item) => {
      const container = main[prop];
      if (container instanceof Set) {
        container.delete(item);
      } else if (container === item) {
        delete main[prop];
      }
    };
    var isEmptySet = (val) => val instanceof Set ? val.size === 0 : !val;
    var FsWatchInstances = /* @__PURE__ */ new Map();
    function createFsWatchInstance(path, options, listener, errHandler, emitRaw) {
      const handleEvent = (rawEvent, evPath) => {
        listener(path);
        emitRaw(rawEvent, evPath, { watchedPath: path });
        if (evPath && path !== evPath) {
          fsWatchBroadcast(
            sysPath.resolve(path, evPath),
            KEY_LISTENERS,
            sysPath.join(path, evPath)
          );
        }
      };
      try {
        return fs6.watch(path, options, handleEvent);
      } catch (error) {
        errHandler(error);
      }
    }
    var fsWatchBroadcast = (fullPath, type, val1, val2, val3) => {
      const cont = FsWatchInstances.get(fullPath);
      if (!cont)
        return;
      foreach(cont[type], (listener) => {
        listener(val1, val2, val3);
      });
    };
    var setFsWatchListener = (path, fullPath, options, handlers) => {
      const { listener, errHandler, rawEmitter } = handlers;
      let cont = FsWatchInstances.get(fullPath);
      let watcher3;
      if (!options.persistent) {
        watcher3 = createFsWatchInstance(
          path,
          options,
          listener,
          errHandler,
          rawEmitter
        );
        return watcher3.close.bind(watcher3);
      }
      if (cont) {
        addAndConvert(cont, KEY_LISTENERS, listener);
        addAndConvert(cont, KEY_ERR, errHandler);
        addAndConvert(cont, KEY_RAW, rawEmitter);
      } else {
        watcher3 = createFsWatchInstance(
          path,
          options,
          fsWatchBroadcast.bind(null, fullPath, KEY_LISTENERS),
          errHandler,
          // no need to use broadcast here
          fsWatchBroadcast.bind(null, fullPath, KEY_RAW)
        );
        if (!watcher3)
          return;
        watcher3.on(EV_ERROR, async (error) => {
          const broadcastErr = fsWatchBroadcast.bind(null, fullPath, KEY_ERR);
          cont.watcherUnusable = true;
          if (isWindows && error.code === "EPERM") {
            try {
              const fd = await open(path, "r");
              await close(fd);
              broadcastErr(error);
            } catch (err) {
            }
          } else {
            broadcastErr(error);
          }
        });
        cont = {
          listeners: listener,
          errHandlers: errHandler,
          rawEmitters: rawEmitter,
          watcher: watcher3
        };
        FsWatchInstances.set(fullPath, cont);
      }
      return () => {
        delFromSet(cont, KEY_LISTENERS, listener);
        delFromSet(cont, KEY_ERR, errHandler);
        delFromSet(cont, KEY_RAW, rawEmitter);
        if (isEmptySet(cont.listeners)) {
          cont.watcher.close();
          FsWatchInstances.delete(fullPath);
          HANDLER_KEYS.forEach(clearItem(cont));
          cont.watcher = void 0;
          Object.freeze(cont);
        }
      };
    };
    var FsWatchFileInstances = /* @__PURE__ */ new Map();
    var setFsWatchFileListener = (path, fullPath, options, handlers) => {
      const { listener, rawEmitter } = handlers;
      let cont = FsWatchFileInstances.get(fullPath);
      let listeners = /* @__PURE__ */ new Set();
      let rawEmitters = /* @__PURE__ */ new Set();
      const copts = cont && cont.options;
      if (copts && (copts.persistent < options.persistent || copts.interval > options.interval)) {
        listeners = cont.listeners;
        rawEmitters = cont.rawEmitters;
        fs6.unwatchFile(fullPath);
        cont = void 0;
      }
      if (cont) {
        addAndConvert(cont, KEY_LISTENERS, listener);
        addAndConvert(cont, KEY_RAW, rawEmitter);
      } else {
        cont = {
          listeners: listener,
          rawEmitters: rawEmitter,
          options,
          watcher: fs6.watchFile(fullPath, options, (curr, prev) => {
            foreach(cont.rawEmitters, (rawEmitter2) => {
              rawEmitter2(EV_CHANGE, fullPath, { curr, prev });
            });
            const currmtime = curr.mtimeMs;
            if (curr.size !== prev.size || currmtime > prev.mtimeMs || currmtime === 0) {
              foreach(cont.listeners, (listener2) => listener2(path, curr));
            }
          })
        };
        FsWatchFileInstances.set(fullPath, cont);
      }
      return () => {
        delFromSet(cont, KEY_LISTENERS, listener);
        delFromSet(cont, KEY_RAW, rawEmitter);
        if (isEmptySet(cont.listeners)) {
          FsWatchFileInstances.delete(fullPath);
          fs6.unwatchFile(fullPath);
          cont.options = cont.watcher = void 0;
          Object.freeze(cont);
        }
      };
    };
    var NodeFsHandler = class {
      /**
       * @param {import("../index").FSWatcher} fsW
       */
      constructor(fsW) {
        this.fsw = fsW;
        this._boundHandleError = (error) => fsW._handleError(error);
      }
      /**
       * Watch file for changes with fs_watchFile or fs_watch.
       * @param {String} path to file or dir
       * @param {Function} listener on fs change
       * @returns {Function} closer for the watcher instance
       */
      _watchWithNodeFs(path, listener) {
        const opts2 = this.fsw.options;
        const directory = sysPath.dirname(path);
        const basename2 = sysPath.basename(path);
        const parent = this.fsw._getWatchedDir(directory);
        parent.add(basename2);
        const absolutePath = sysPath.resolve(path);
        const options = { persistent: opts2.persistent };
        if (!listener)
          listener = EMPTY_FN;
        let closer;
        if (opts2.usePolling) {
          options.interval = opts2.enableBinaryInterval && isBinaryPath(basename2) ? opts2.binaryInterval : opts2.interval;
          closer = setFsWatchFileListener(path, absolutePath, options, {
            listener,
            rawEmitter: this.fsw._emitRaw
          });
        } else {
          closer = setFsWatchListener(path, absolutePath, options, {
            listener,
            errHandler: this._boundHandleError,
            rawEmitter: this.fsw._emitRaw
          });
        }
        return closer;
      }
      /**
       * Watch a file and emit add event if warranted.
       * @param {Path} file Path
       * @param {fs.Stats} stats result of fs_stat
       * @param {Boolean} initialAdd was the file added at watch instantiation?
       * @returns {Function} closer for the watcher instance
       */
      _handleFile(file, stats, initialAdd) {
        if (this.fsw.closed) {
          return;
        }
        const dirname = sysPath.dirname(file);
        const basename2 = sysPath.basename(file);
        const parent = this.fsw._getWatchedDir(dirname);
        let prevStats = stats;
        if (parent.has(basename2))
          return;
        const listener = async (path, newStats) => {
          if (!this.fsw._throttle(THROTTLE_MODE_WATCH, file, 5))
            return;
          if (!newStats || newStats.mtimeMs === 0) {
            try {
              const newStats2 = await stat(file);
              if (this.fsw.closed)
                return;
              const at = newStats2.atimeMs;
              const mt = newStats2.mtimeMs;
              if (!at || at <= mt || mt !== prevStats.mtimeMs) {
                this.fsw._emit(EV_CHANGE, file, newStats2);
              }
              if (isLinux && prevStats.ino !== newStats2.ino) {
                this.fsw._closeFile(path);
                prevStats = newStats2;
                this.fsw._addPathCloser(path, this._watchWithNodeFs(file, listener));
              } else {
                prevStats = newStats2;
              }
            } catch (error) {
              this.fsw._remove(dirname, basename2);
            }
          } else if (parent.has(basename2)) {
            const at = newStats.atimeMs;
            const mt = newStats.mtimeMs;
            if (!at || at <= mt || mt !== prevStats.mtimeMs) {
              this.fsw._emit(EV_CHANGE, file, newStats);
            }
            prevStats = newStats;
          }
        };
        const closer = this._watchWithNodeFs(file, listener);
        if (!(initialAdd && this.fsw.options.ignoreInitial) && this.fsw._isntIgnored(file)) {
          if (!this.fsw._throttle(EV_ADD, file, 0))
            return;
          this.fsw._emit(EV_ADD, file, stats);
        }
        return closer;
      }
      /**
       * Handle symlinks encountered while reading a dir.
       * @param {Object} entry returned by readdirp
       * @param {String} directory path of dir being read
       * @param {String} path of this item
       * @param {String} item basename of this item
       * @returns {Promise<Boolean>} true if no more processing is needed for this entry.
       */
      async _handleSymlink(entry, directory, path, item) {
        if (this.fsw.closed) {
          return;
        }
        const full = entry.fullPath;
        const dir = this.fsw._getWatchedDir(directory);
        if (!this.fsw.options.followSymlinks) {
          this.fsw._incrReadyCount();
          let linkPath;
          try {
            linkPath = await fsrealpath(path);
          } catch (e) {
            this.fsw._emitReady();
            return true;
          }
          if (this.fsw.closed)
            return;
          if (dir.has(item)) {
            if (this.fsw._symlinkPaths.get(full) !== linkPath) {
              this.fsw._symlinkPaths.set(full, linkPath);
              this.fsw._emit(EV_CHANGE, path, entry.stats);
            }
          } else {
            dir.add(item);
            this.fsw._symlinkPaths.set(full, linkPath);
            this.fsw._emit(EV_ADD, path, entry.stats);
          }
          this.fsw._emitReady();
          return true;
        }
        if (this.fsw._symlinkPaths.has(full)) {
          return true;
        }
        this.fsw._symlinkPaths.set(full, true);
      }
      _handleRead(directory, initialAdd, wh, target, dir, depth, throttler) {
        directory = sysPath.join(directory, EMPTY_STR);
        if (!wh.hasGlob) {
          throttler = this.fsw._throttle("readdir", directory, 1e3);
          if (!throttler)
            return;
        }
        const previous = this.fsw._getWatchedDir(wh.path);
        const current = /* @__PURE__ */ new Set();
        let stream = this.fsw._readdirp(directory, {
          fileFilter: (entry) => wh.filterPath(entry),
          directoryFilter: (entry) => wh.filterDir(entry),
          depth: 0
        }).on(STR_DATA, async (entry) => {
          if (this.fsw.closed) {
            stream = void 0;
            return;
          }
          const item = entry.path;
          let path = sysPath.join(directory, item);
          current.add(item);
          if (entry.stats.isSymbolicLink() && await this._handleSymlink(entry, directory, path, item)) {
            return;
          }
          if (this.fsw.closed) {
            stream = void 0;
            return;
          }
          if (item === target || !target && !previous.has(item)) {
            this.fsw._incrReadyCount();
            path = sysPath.join(dir, sysPath.relative(dir, path));
            this._addToNodeFs(path, initialAdd, wh, depth + 1);
          }
        }).on(EV_ERROR, this._boundHandleError);
        return new Promise(
          (resolve3) => stream.once(STR_END, () => {
            if (this.fsw.closed) {
              stream = void 0;
              return;
            }
            const wasThrottled = throttler ? throttler.clear() : false;
            resolve3();
            previous.getChildren().filter((item) => {
              return item !== directory && !current.has(item) && // in case of intersecting globs;
              // a path may have been filtered out of this readdir, but
              // shouldn't be removed because it matches a different glob
              (!wh.hasGlob || wh.filterPath({
                fullPath: sysPath.resolve(directory, item)
              }));
            }).forEach((item) => {
              this.fsw._remove(directory, item);
            });
            stream = void 0;
            if (wasThrottled)
              this._handleRead(directory, false, wh, target, dir, depth, throttler);
          })
        );
      }
      /**
       * Read directory to add / remove files from `@watched` list and re-read it on change.
       * @param {String} dir fs path
       * @param {fs.Stats} stats
       * @param {Boolean} initialAdd
       * @param {Number} depth relative to user-supplied path
       * @param {String} target child path targeted for watch
       * @param {Object} wh Common watch helpers for this path
       * @param {String} realpath
       * @returns {Promise<Function>} closer for the watcher instance.
       */
      async _handleDir(dir, stats, initialAdd, depth, target, wh, realpath) {
        const parentDir = this.fsw._getWatchedDir(sysPath.dirname(dir));
        const tracked = parentDir.has(sysPath.basename(dir));
        if (!(initialAdd && this.fsw.options.ignoreInitial) && !target && !tracked) {
          if (!wh.hasGlob || wh.globFilter(dir))
            this.fsw._emit(EV_ADD_DIR, dir, stats);
        }
        parentDir.add(sysPath.basename(dir));
        this.fsw._getWatchedDir(dir);
        let throttler;
        let closer;
        const oDepth = this.fsw.options.depth;
        if ((oDepth == null || depth <= oDepth) && !this.fsw._symlinkPaths.has(realpath)) {
          if (!target) {
            await this._handleRead(dir, initialAdd, wh, target, dir, depth, throttler);
            if (this.fsw.closed)
              return;
          }
          closer = this._watchWithNodeFs(dir, (dirPath, stats2) => {
            if (stats2 && stats2.mtimeMs === 0)
              return;
            this._handleRead(dirPath, false, wh, target, dir, depth, throttler);
          });
        }
        return closer;
      }
      /**
       * Handle added file, directory, or glob pattern.
       * Delegates call to _handleFile / _handleDir after checks.
       * @param {String} path to file or ir
       * @param {Boolean} initialAdd was the file added at watch instantiation?
       * @param {Object} priorWh depth relative to user-supplied path
       * @param {Number} depth Child path actually targeted for watch
       * @param {String=} target Child path actually targeted for watch
       * @returns {Promise}
       */
      async _addToNodeFs(path, initialAdd, priorWh, depth, target) {
        const ready = this.fsw._emitReady;
        if (this.fsw._isIgnored(path) || this.fsw.closed) {
          ready();
          return false;
        }
        const wh = this.fsw._getWatchHelpers(path, depth);
        if (!wh.hasGlob && priorWh) {
          wh.hasGlob = priorWh.hasGlob;
          wh.globFilter = priorWh.globFilter;
          wh.filterPath = (entry) => priorWh.filterPath(entry);
          wh.filterDir = (entry) => priorWh.filterDir(entry);
        }
        try {
          const stats = await statMethods[wh.statMethod](wh.watchPath);
          if (this.fsw.closed)
            return;
          if (this.fsw._isIgnored(wh.watchPath, stats)) {
            ready();
            return false;
          }
          const follow = this.fsw.options.followSymlinks && !path.includes(STAR) && !path.includes(BRACE_START);
          let closer;
          if (stats.isDirectory()) {
            const absPath = sysPath.resolve(path);
            const targetPath = follow ? await fsrealpath(path) : path;
            if (this.fsw.closed)
              return;
            closer = await this._handleDir(wh.watchPath, stats, initialAdd, depth, target, wh, targetPath);
            if (this.fsw.closed)
              return;
            if (absPath !== targetPath && targetPath !== void 0) {
              this.fsw._symlinkPaths.set(absPath, targetPath);
            }
          } else if (stats.isSymbolicLink()) {
            const targetPath = follow ? await fsrealpath(path) : path;
            if (this.fsw.closed)
              return;
            const parent = sysPath.dirname(wh.watchPath);
            this.fsw._getWatchedDir(parent).add(wh.watchPath);
            this.fsw._emit(EV_ADD, wh.watchPath, stats);
            closer = await this._handleDir(parent, stats, initialAdd, depth, path, wh, targetPath);
            if (this.fsw.closed)
              return;
            if (targetPath !== void 0) {
              this.fsw._symlinkPaths.set(sysPath.resolve(path), targetPath);
            }
          } else {
            closer = this._handleFile(wh.watchPath, stats, initialAdd);
          }
          ready();
          this.fsw._addPathCloser(path, closer);
          return false;
        } catch (error) {
          if (this.fsw._handleError(error)) {
            ready();
            return path;
          }
        }
      }
    };
    module2.exports = NodeFsHandler;
  }
});

// node_modules/.pnpm/chokidar@3.5.3/node_modules/chokidar/lib/fsevents-handler.js
var require_fsevents_handler = __commonJS({
  "node_modules/.pnpm/chokidar@3.5.3/node_modules/chokidar/lib/fsevents-handler.js"(exports, module2) {
    "use strict";
    var fs6 = require("fs");
    var sysPath = require("path");
    var { promisify } = require("util");
    var fsevents;
    try {
      fsevents = require("fsevents");
    } catch (error) {
      if (process.env.CHOKIDAR_PRINT_FSEVENTS_REQUIRE_ERROR)
        console.error(error);
    }
    if (fsevents) {
      const mtch = process.version.match(/v(\d+)\.(\d+)/);
      if (mtch && mtch[1] && mtch[2]) {
        const maj = Number.parseInt(mtch[1], 10);
        const min = Number.parseInt(mtch[2], 10);
        if (maj === 8 && min < 16) {
          fsevents = void 0;
        }
      }
    }
    var {
      EV_ADD,
      EV_CHANGE,
      EV_ADD_DIR,
      EV_UNLINK,
      EV_ERROR,
      STR_DATA,
      STR_END,
      FSEVENT_CREATED,
      FSEVENT_MODIFIED,
      FSEVENT_DELETED,
      FSEVENT_MOVED,
      // FSEVENT_CLONED,
      FSEVENT_UNKNOWN,
      FSEVENT_TYPE_FILE,
      FSEVENT_TYPE_DIRECTORY,
      FSEVENT_TYPE_SYMLINK,
      ROOT_GLOBSTAR,
      DIR_SUFFIX,
      DOT_SLASH,
      FUNCTION_TYPE,
      EMPTY_FN,
      IDENTITY_FN
    } = require_constants4();
    var Depth = (value) => isNaN(value) ? {} : { depth: value };
    var stat = promisify(fs6.stat);
    var lstat = promisify(fs6.lstat);
    var realpath = promisify(fs6.realpath);
    var statMethods = { stat, lstat };
    var FSEventsWatchers = /* @__PURE__ */ new Map();
    var consolidateThreshhold = 10;
    var wrongEventFlags = /* @__PURE__ */ new Set([
      69888,
      70400,
      71424,
      72704,
      73472,
      131328,
      131840,
      262912
    ]);
    var createFSEventsInstance = (path, callback) => {
      const stop2 = fsevents.watch(path, callback);
      return { stop: stop2 };
    };
    function setFSEventsListener(path, realPath, listener, rawEmitter) {
      let watchPath = sysPath.extname(realPath) ? sysPath.dirname(realPath) : realPath;
      const parentPath = sysPath.dirname(watchPath);
      let cont = FSEventsWatchers.get(watchPath);
      if (couldConsolidate(parentPath)) {
        watchPath = parentPath;
      }
      const resolvedPath = sysPath.resolve(path);
      const hasSymlink = resolvedPath !== realPath;
      const filteredListener = (fullPath, flags, info) => {
        if (hasSymlink)
          fullPath = fullPath.replace(realPath, resolvedPath);
        if (fullPath === resolvedPath || !fullPath.indexOf(resolvedPath + sysPath.sep))
          listener(fullPath, flags, info);
      };
      let watchedParent = false;
      for (const watchedPath of FSEventsWatchers.keys()) {
        if (realPath.indexOf(sysPath.resolve(watchedPath) + sysPath.sep) === 0) {
          watchPath = watchedPath;
          cont = FSEventsWatchers.get(watchPath);
          watchedParent = true;
          break;
        }
      }
      if (cont || watchedParent) {
        cont.listeners.add(filteredListener);
      } else {
        cont = {
          listeners: /* @__PURE__ */ new Set([filteredListener]),
          rawEmitter,
          watcher: createFSEventsInstance(watchPath, (fullPath, flags) => {
            if (!cont.listeners.size)
              return;
            const info = fsevents.getInfo(fullPath, flags);
            cont.listeners.forEach((list) => {
              list(fullPath, flags, info);
            });
            cont.rawEmitter(info.event, fullPath, info);
          })
        };
        FSEventsWatchers.set(watchPath, cont);
      }
      return () => {
        const lst = cont.listeners;
        lst.delete(filteredListener);
        if (!lst.size) {
          FSEventsWatchers.delete(watchPath);
          if (cont.watcher)
            return cont.watcher.stop().then(() => {
              cont.rawEmitter = cont.watcher = void 0;
              Object.freeze(cont);
            });
        }
      };
    }
    var couldConsolidate = (path) => {
      let count = 0;
      for (const watchPath of FSEventsWatchers.keys()) {
        if (watchPath.indexOf(path) === 0) {
          count++;
          if (count >= consolidateThreshhold) {
            return true;
          }
        }
      }
      return false;
    };
    var canUse = () => fsevents && FSEventsWatchers.size < 128;
    var calcDepth = (path, root2) => {
      let i = 0;
      while (!path.indexOf(root2) && (path = sysPath.dirname(path)) !== root2)
        i++;
      return i;
    };
    var sameTypes = (info, stats) => info.type === FSEVENT_TYPE_DIRECTORY && stats.isDirectory() || info.type === FSEVENT_TYPE_SYMLINK && stats.isSymbolicLink() || info.type === FSEVENT_TYPE_FILE && stats.isFile();
    var FsEventsHandler = class {
      /**
       * @param {import('../index').FSWatcher} fsw
       */
      constructor(fsw) {
        this.fsw = fsw;
      }
      checkIgnored(path, stats) {
        const ipaths = this.fsw._ignoredPaths;
        if (this.fsw._isIgnored(path, stats)) {
          ipaths.add(path);
          if (stats && stats.isDirectory()) {
            ipaths.add(path + ROOT_GLOBSTAR);
          }
          return true;
        }
        ipaths.delete(path);
        ipaths.delete(path + ROOT_GLOBSTAR);
      }
      addOrChange(path, fullPath, realPath, parent, watchedDir, item, info, opts2) {
        const event = watchedDir.has(item) ? EV_CHANGE : EV_ADD;
        this.handleEvent(event, path, fullPath, realPath, parent, watchedDir, item, info, opts2);
      }
      async checkExists(path, fullPath, realPath, parent, watchedDir, item, info, opts2) {
        try {
          const stats = await stat(path);
          if (this.fsw.closed)
            return;
          if (sameTypes(info, stats)) {
            this.addOrChange(path, fullPath, realPath, parent, watchedDir, item, info, opts2);
          } else {
            this.handleEvent(EV_UNLINK, path, fullPath, realPath, parent, watchedDir, item, info, opts2);
          }
        } catch (error) {
          if (error.code === "EACCES") {
            this.addOrChange(path, fullPath, realPath, parent, watchedDir, item, info, opts2);
          } else {
            this.handleEvent(EV_UNLINK, path, fullPath, realPath, parent, watchedDir, item, info, opts2);
          }
        }
      }
      handleEvent(event, path, fullPath, realPath, parent, watchedDir, item, info, opts2) {
        if (this.fsw.closed || this.checkIgnored(path))
          return;
        if (event === EV_UNLINK) {
          const isDirectory = info.type === FSEVENT_TYPE_DIRECTORY;
          if (isDirectory || watchedDir.has(item)) {
            this.fsw._remove(parent, item, isDirectory);
          }
        } else {
          if (event === EV_ADD) {
            if (info.type === FSEVENT_TYPE_DIRECTORY)
              this.fsw._getWatchedDir(path);
            if (info.type === FSEVENT_TYPE_SYMLINK && opts2.followSymlinks) {
              const curDepth = opts2.depth === void 0 ? void 0 : calcDepth(fullPath, realPath) + 1;
              return this._addToFsEvents(path, false, true, curDepth);
            }
            this.fsw._getWatchedDir(parent).add(item);
          }
          const eventName = info.type === FSEVENT_TYPE_DIRECTORY ? event + DIR_SUFFIX : event;
          this.fsw._emit(eventName, path);
          if (eventName === EV_ADD_DIR)
            this._addToFsEvents(path, false, true);
        }
      }
      /**
       * Handle symlinks encountered during directory scan
       * @param {String} watchPath  - file/dir path to be watched with fsevents
       * @param {String} realPath   - real path (in case of symlinks)
       * @param {Function} transform  - path transformer
       * @param {Function} globFilter - path filter in case a glob pattern was provided
       * @returns {Function} closer for the watcher instance
      */
      _watchWithFsEvents(watchPath, realPath, transform, globFilter) {
        if (this.fsw.closed || this.fsw._isIgnored(watchPath))
          return;
        const opts2 = this.fsw.options;
        const watchCallback = async (fullPath, flags, info) => {
          if (this.fsw.closed)
            return;
          if (opts2.depth !== void 0 && calcDepth(fullPath, realPath) > opts2.depth)
            return;
          const path = transform(sysPath.join(
            watchPath,
            sysPath.relative(watchPath, fullPath)
          ));
          if (globFilter && !globFilter(path))
            return;
          const parent = sysPath.dirname(path);
          const item = sysPath.basename(path);
          const watchedDir = this.fsw._getWatchedDir(
            info.type === FSEVENT_TYPE_DIRECTORY ? path : parent
          );
          if (wrongEventFlags.has(flags) || info.event === FSEVENT_UNKNOWN) {
            if (typeof opts2.ignored === FUNCTION_TYPE) {
              let stats;
              try {
                stats = await stat(path);
              } catch (error) {
              }
              if (this.fsw.closed)
                return;
              if (this.checkIgnored(path, stats))
                return;
              if (sameTypes(info, stats)) {
                this.addOrChange(path, fullPath, realPath, parent, watchedDir, item, info, opts2);
              } else {
                this.handleEvent(EV_UNLINK, path, fullPath, realPath, parent, watchedDir, item, info, opts2);
              }
            } else {
              this.checkExists(path, fullPath, realPath, parent, watchedDir, item, info, opts2);
            }
          } else {
            switch (info.event) {
              case FSEVENT_CREATED:
              case FSEVENT_MODIFIED:
                return this.addOrChange(path, fullPath, realPath, parent, watchedDir, item, info, opts2);
              case FSEVENT_DELETED:
              case FSEVENT_MOVED:
                return this.checkExists(path, fullPath, realPath, parent, watchedDir, item, info, opts2);
            }
          }
        };
        const closer = setFSEventsListener(
          watchPath,
          realPath,
          watchCallback,
          this.fsw._emitRaw
        );
        this.fsw._emitReady();
        return closer;
      }
      /**
       * Handle symlinks encountered during directory scan
       * @param {String} linkPath path to symlink
       * @param {String} fullPath absolute path to the symlink
       * @param {Function} transform pre-existing path transformer
       * @param {Number} curDepth level of subdirectories traversed to where symlink is
       * @returns {Promise<void>}
       */
      async _handleFsEventsSymlink(linkPath, fullPath, transform, curDepth) {
        if (this.fsw.closed || this.fsw._symlinkPaths.has(fullPath))
          return;
        this.fsw._symlinkPaths.set(fullPath, true);
        this.fsw._incrReadyCount();
        try {
          const linkTarget = await realpath(linkPath);
          if (this.fsw.closed)
            return;
          if (this.fsw._isIgnored(linkTarget)) {
            return this.fsw._emitReady();
          }
          this.fsw._incrReadyCount();
          this._addToFsEvents(linkTarget || linkPath, (path) => {
            let aliasedPath = linkPath;
            if (linkTarget && linkTarget !== DOT_SLASH) {
              aliasedPath = path.replace(linkTarget, linkPath);
            } else if (path !== DOT_SLASH) {
              aliasedPath = sysPath.join(linkPath, path);
            }
            return transform(aliasedPath);
          }, false, curDepth);
        } catch (error) {
          if (this.fsw._handleError(error)) {
            return this.fsw._emitReady();
          }
        }
      }
      /**
       *
       * @param {Path} newPath
       * @param {fs.Stats} stats
       */
      emitAdd(newPath, stats, processPath, opts2, forceAdd) {
        const pp = processPath(newPath);
        const isDir = stats.isDirectory();
        const dirObj = this.fsw._getWatchedDir(sysPath.dirname(pp));
        const base = sysPath.basename(pp);
        if (isDir)
          this.fsw._getWatchedDir(pp);
        if (dirObj.has(base))
          return;
        dirObj.add(base);
        if (!opts2.ignoreInitial || forceAdd === true) {
          this.fsw._emit(isDir ? EV_ADD_DIR : EV_ADD, pp, stats);
        }
      }
      initWatch(realPath, path, wh, processPath) {
        if (this.fsw.closed)
          return;
        const closer = this._watchWithFsEvents(
          wh.watchPath,
          sysPath.resolve(realPath || wh.watchPath),
          processPath,
          wh.globFilter
        );
        this.fsw._addPathCloser(path, closer);
      }
      /**
       * Handle added path with fsevents
       * @param {String} path file/dir path or glob pattern
       * @param {Function|Boolean=} transform converts working path to what the user expects
       * @param {Boolean=} forceAdd ensure add is emitted
       * @param {Number=} priorDepth Level of subdirectories already traversed.
       * @returns {Promise<void>}
       */
      async _addToFsEvents(path, transform, forceAdd, priorDepth) {
        if (this.fsw.closed) {
          return;
        }
        const opts2 = this.fsw.options;
        const processPath = typeof transform === FUNCTION_TYPE ? transform : IDENTITY_FN;
        const wh = this.fsw._getWatchHelpers(path);
        try {
          const stats = await statMethods[wh.statMethod](wh.watchPath);
          if (this.fsw.closed)
            return;
          if (this.fsw._isIgnored(wh.watchPath, stats)) {
            throw null;
          }
          if (stats.isDirectory()) {
            if (!wh.globFilter)
              this.emitAdd(processPath(path), stats, processPath, opts2, forceAdd);
            if (priorDepth && priorDepth > opts2.depth)
              return;
            this.fsw._readdirp(wh.watchPath, {
              fileFilter: (entry) => wh.filterPath(entry),
              directoryFilter: (entry) => wh.filterDir(entry),
              ...Depth(opts2.depth - (priorDepth || 0))
            }).on(STR_DATA, (entry) => {
              if (this.fsw.closed) {
                return;
              }
              if (entry.stats.isDirectory() && !wh.filterPath(entry))
                return;
              const joinedPath = sysPath.join(wh.watchPath, entry.path);
              const { fullPath } = entry;
              if (wh.followSymlinks && entry.stats.isSymbolicLink()) {
                const curDepth = opts2.depth === void 0 ? void 0 : calcDepth(joinedPath, sysPath.resolve(wh.watchPath)) + 1;
                this._handleFsEventsSymlink(joinedPath, fullPath, processPath, curDepth);
              } else {
                this.emitAdd(joinedPath, entry.stats, processPath, opts2, forceAdd);
              }
            }).on(EV_ERROR, EMPTY_FN).on(STR_END, () => {
              this.fsw._emitReady();
            });
          } else {
            this.emitAdd(wh.watchPath, stats, processPath, opts2, forceAdd);
            this.fsw._emitReady();
          }
        } catch (error) {
          if (!error || this.fsw._handleError(error)) {
            this.fsw._emitReady();
            this.fsw._emitReady();
          }
        }
        if (opts2.persistent && forceAdd !== true) {
          if (typeof transform === FUNCTION_TYPE) {
            this.initWatch(void 0, path, wh, processPath);
          } else {
            let realPath;
            try {
              realPath = await realpath(wh.watchPath);
            } catch (e) {
            }
            this.initWatch(realPath, path, wh, processPath);
          }
        }
      }
    };
    module2.exports = FsEventsHandler;
    module2.exports.canUse = canUse;
  }
});

// node_modules/.pnpm/chokidar@3.5.3/node_modules/chokidar/index.js
var require_chokidar = __commonJS({
  "node_modules/.pnpm/chokidar@3.5.3/node_modules/chokidar/index.js"(exports) {
    "use strict";
    var { EventEmitter } = require("events");
    var fs6 = require("fs");
    var sysPath = require("path");
    var { promisify } = require("util");
    var readdirp = require_readdirp();
    var anymatch = require_anymatch().default;
    var globParent = require_glob_parent();
    var isGlob = require_is_glob();
    var braces = require_braces();
    var normalizePath = require_normalize_path();
    var NodeFsHandler = require_nodefs_handler();
    var FsEventsHandler = require_fsevents_handler();
    var {
      EV_ALL,
      EV_READY,
      EV_ADD,
      EV_CHANGE,
      EV_UNLINK,
      EV_ADD_DIR,
      EV_UNLINK_DIR,
      EV_RAW,
      EV_ERROR,
      STR_CLOSE,
      STR_END,
      BACK_SLASH_RE,
      DOUBLE_SLASH_RE,
      SLASH_OR_BACK_SLASH_RE,
      DOT_RE,
      REPLACER_RE,
      SLASH,
      SLASH_SLASH,
      BRACE_START,
      BANG,
      ONE_DOT,
      TWO_DOTS,
      GLOBSTAR,
      SLASH_GLOBSTAR,
      ANYMATCH_OPTS,
      STRING_TYPE,
      FUNCTION_TYPE,
      EMPTY_STR,
      EMPTY_FN,
      isWindows,
      isMacos,
      isIBMi
    } = require_constants4();
    var stat = promisify(fs6.stat);
    var readdir = promisify(fs6.readdir);
    var arrify = (value = []) => Array.isArray(value) ? value : [value];
    var flatten = (list, result = []) => {
      list.forEach((item) => {
        if (Array.isArray(item)) {
          flatten(item, result);
        } else {
          result.push(item);
        }
      });
      return result;
    };
    var unifyPaths = (paths_) => {
      const paths = flatten(arrify(paths_));
      if (!paths.every((p) => typeof p === STRING_TYPE)) {
        throw new TypeError(`Non-string provided as watch path: ${paths}`);
      }
      return paths.map(normalizePathToUnix);
    };
    var toUnix = (string) => {
      let str = string.replace(BACK_SLASH_RE, SLASH);
      let prepend = false;
      if (str.startsWith(SLASH_SLASH)) {
        prepend = true;
      }
      while (str.match(DOUBLE_SLASH_RE)) {
        str = str.replace(DOUBLE_SLASH_RE, SLASH);
      }
      if (prepend) {
        str = SLASH + str;
      }
      return str;
    };
    var normalizePathToUnix = (path) => toUnix(sysPath.normalize(toUnix(path)));
    var normalizeIgnored = (cwd = EMPTY_STR) => (path) => {
      if (typeof path !== STRING_TYPE)
        return path;
      return normalizePathToUnix(sysPath.isAbsolute(path) ? path : sysPath.join(cwd, path));
    };
    var getAbsolutePath = (path, cwd) => {
      if (sysPath.isAbsolute(path)) {
        return path;
      }
      if (path.startsWith(BANG)) {
        return BANG + sysPath.join(cwd, path.slice(1));
      }
      return sysPath.join(cwd, path);
    };
    var undef = (opts2, key) => opts2[key] === void 0;
    var DirEntry = class {
      /**
       * @param {Path} dir
       * @param {Function} removeWatcher
       */
      constructor(dir, removeWatcher) {
        this.path = dir;
        this._removeWatcher = removeWatcher;
        this.items = /* @__PURE__ */ new Set();
      }
      add(item) {
        const { items } = this;
        if (!items)
          return;
        if (item !== ONE_DOT && item !== TWO_DOTS)
          items.add(item);
      }
      async remove(item) {
        const { items } = this;
        if (!items)
          return;
        items.delete(item);
        if (items.size > 0)
          return;
        const dir = this.path;
        try {
          await readdir(dir);
        } catch (err) {
          if (this._removeWatcher) {
            this._removeWatcher(sysPath.dirname(dir), sysPath.basename(dir));
          }
        }
      }
      has(item) {
        const { items } = this;
        if (!items)
          return;
        return items.has(item);
      }
      /**
       * @returns {Array<String>}
       */
      getChildren() {
        const { items } = this;
        if (!items)
          return;
        return [...items.values()];
      }
      dispose() {
        this.items.clear();
        delete this.path;
        delete this._removeWatcher;
        delete this.items;
        Object.freeze(this);
      }
    };
    var STAT_METHOD_F = "stat";
    var STAT_METHOD_L = "lstat";
    var WatchHelper = class {
      constructor(path, watchPath, follow, fsw) {
        this.fsw = fsw;
        this.path = path = path.replace(REPLACER_RE, EMPTY_STR);
        this.watchPath = watchPath;
        this.fullWatchPath = sysPath.resolve(watchPath);
        this.hasGlob = watchPath !== path;
        if (path === EMPTY_STR)
          this.hasGlob = false;
        this.globSymlink = this.hasGlob && follow ? void 0 : false;
        this.globFilter = this.hasGlob ? anymatch(path, void 0, ANYMATCH_OPTS) : false;
        this.dirParts = this.getDirParts(path);
        this.dirParts.forEach((parts) => {
          if (parts.length > 1)
            parts.pop();
        });
        this.followSymlinks = follow;
        this.statMethod = follow ? STAT_METHOD_F : STAT_METHOD_L;
      }
      checkGlobSymlink(entry) {
        if (this.globSymlink === void 0) {
          this.globSymlink = entry.fullParentDir === this.fullWatchPath ? false : { realPath: entry.fullParentDir, linkPath: this.fullWatchPath };
        }
        if (this.globSymlink) {
          return entry.fullPath.replace(this.globSymlink.realPath, this.globSymlink.linkPath);
        }
        return entry.fullPath;
      }
      entryPath(entry) {
        return sysPath.join(
          this.watchPath,
          sysPath.relative(this.watchPath, this.checkGlobSymlink(entry))
        );
      }
      filterPath(entry) {
        const { stats } = entry;
        if (stats && stats.isSymbolicLink())
          return this.filterDir(entry);
        const resolvedPath = this.entryPath(entry);
        const matchesGlob = this.hasGlob && typeof this.globFilter === FUNCTION_TYPE ? this.globFilter(resolvedPath) : true;
        return matchesGlob && this.fsw._isntIgnored(resolvedPath, stats) && this.fsw._hasReadPermissions(stats);
      }
      getDirParts(path) {
        if (!this.hasGlob)
          return [];
        const parts = [];
        const expandedPath = path.includes(BRACE_START) ? braces.expand(path) : [path];
        expandedPath.forEach((path2) => {
          parts.push(sysPath.relative(this.watchPath, path2).split(SLASH_OR_BACK_SLASH_RE));
        });
        return parts;
      }
      filterDir(entry) {
        if (this.hasGlob) {
          const entryParts = this.getDirParts(this.checkGlobSymlink(entry));
          let globstar = false;
          this.unmatchedGlob = !this.dirParts.some((parts) => {
            return parts.every((part, i) => {
              if (part === GLOBSTAR)
                globstar = true;
              return globstar || !entryParts[0][i] || anymatch(part, entryParts[0][i], ANYMATCH_OPTS);
            });
          });
        }
        return !this.unmatchedGlob && this.fsw._isntIgnored(this.entryPath(entry), entry.stats);
      }
    };
    var FSWatcher = class extends EventEmitter {
      // Not indenting methods for history sake; for now.
      constructor(_opts) {
        super();
        const opts2 = {};
        if (_opts)
          Object.assign(opts2, _opts);
        this._watched = /* @__PURE__ */ new Map();
        this._closers = /* @__PURE__ */ new Map();
        this._ignoredPaths = /* @__PURE__ */ new Set();
        this._throttled = /* @__PURE__ */ new Map();
        this._symlinkPaths = /* @__PURE__ */ new Map();
        this._streams = /* @__PURE__ */ new Set();
        this.closed = false;
        if (undef(opts2, "persistent"))
          opts2.persistent = true;
        if (undef(opts2, "ignoreInitial"))
          opts2.ignoreInitial = false;
        if (undef(opts2, "ignorePermissionErrors"))
          opts2.ignorePermissionErrors = false;
        if (undef(opts2, "interval"))
          opts2.interval = 100;
        if (undef(opts2, "binaryInterval"))
          opts2.binaryInterval = 300;
        if (undef(opts2, "disableGlobbing"))
          opts2.disableGlobbing = false;
        opts2.enableBinaryInterval = opts2.binaryInterval !== opts2.interval;
        if (undef(opts2, "useFsEvents"))
          opts2.useFsEvents = !opts2.usePolling;
        const canUseFsEvents = FsEventsHandler.canUse();
        if (!canUseFsEvents)
          opts2.useFsEvents = false;
        if (undef(opts2, "usePolling") && !opts2.useFsEvents) {
          opts2.usePolling = isMacos;
        }
        if (isIBMi) {
          opts2.usePolling = true;
        }
        const envPoll = process.env.CHOKIDAR_USEPOLLING;
        if (envPoll !== void 0) {
          const envLower = envPoll.toLowerCase();
          if (envLower === "false" || envLower === "0") {
            opts2.usePolling = false;
          } else if (envLower === "true" || envLower === "1") {
            opts2.usePolling = true;
          } else {
            opts2.usePolling = !!envLower;
          }
        }
        const envInterval = process.env.CHOKIDAR_INTERVAL;
        if (envInterval) {
          opts2.interval = Number.parseInt(envInterval, 10);
        }
        if (undef(opts2, "atomic"))
          opts2.atomic = !opts2.usePolling && !opts2.useFsEvents;
        if (opts2.atomic)
          this._pendingUnlinks = /* @__PURE__ */ new Map();
        if (undef(opts2, "followSymlinks"))
          opts2.followSymlinks = true;
        if (undef(opts2, "awaitWriteFinish"))
          opts2.awaitWriteFinish = false;
        if (opts2.awaitWriteFinish === true)
          opts2.awaitWriteFinish = {};
        const awf = opts2.awaitWriteFinish;
        if (awf) {
          if (!awf.stabilityThreshold)
            awf.stabilityThreshold = 2e3;
          if (!awf.pollInterval)
            awf.pollInterval = 100;
          this._pendingWrites = /* @__PURE__ */ new Map();
        }
        if (opts2.ignored)
          opts2.ignored = arrify(opts2.ignored);
        let readyCalls = 0;
        this._emitReady = () => {
          readyCalls++;
          if (readyCalls >= this._readyCount) {
            this._emitReady = EMPTY_FN;
            this._readyEmitted = true;
            process.nextTick(() => this.emit(EV_READY));
          }
        };
        this._emitRaw = (...args) => this.emit(EV_RAW, ...args);
        this._readyEmitted = false;
        this.options = opts2;
        if (opts2.useFsEvents) {
          this._fsEventsHandler = new FsEventsHandler(this);
        } else {
          this._nodeFsHandler = new NodeFsHandler(this);
        }
        Object.freeze(opts2);
      }
      // Public methods
      /**
       * Adds paths to be watched on an existing FSWatcher instance
       * @param {Path|Array<Path>} paths_
       * @param {String=} _origAdd private; for handling non-existent paths to be watched
       * @param {Boolean=} _internal private; indicates a non-user add
       * @returns {FSWatcher} for chaining
       */
      add(paths_, _origAdd, _internal) {
        const { cwd, disableGlobbing } = this.options;
        this.closed = false;
        let paths = unifyPaths(paths_);
        if (cwd) {
          paths = paths.map((path) => {
            const absPath = getAbsolutePath(path, cwd);
            if (disableGlobbing || !isGlob(path)) {
              return absPath;
            }
            return normalizePath(absPath);
          });
        }
        paths = paths.filter((path) => {
          if (path.startsWith(BANG)) {
            this._ignoredPaths.add(path.slice(1));
            return false;
          }
          this._ignoredPaths.delete(path);
          this._ignoredPaths.delete(path + SLASH_GLOBSTAR);
          this._userIgnored = void 0;
          return true;
        });
        if (this.options.useFsEvents && this._fsEventsHandler) {
          if (!this._readyCount)
            this._readyCount = paths.length;
          if (this.options.persistent)
            this._readyCount *= 2;
          paths.forEach((path) => this._fsEventsHandler._addToFsEvents(path));
        } else {
          if (!this._readyCount)
            this._readyCount = 0;
          this._readyCount += paths.length;
          Promise.all(
            paths.map(async (path) => {
              const res = await this._nodeFsHandler._addToNodeFs(path, !_internal, 0, 0, _origAdd);
              if (res)
                this._emitReady();
              return res;
            })
          ).then((results) => {
            if (this.closed)
              return;
            results.filter((item) => item).forEach((item) => {
              this.add(sysPath.dirname(item), sysPath.basename(_origAdd || item));
            });
          });
        }
        return this;
      }
      /**
       * Close watchers or start ignoring events from specified paths.
       * @param {Path|Array<Path>} paths_ - string or array of strings, file/directory paths and/or globs
       * @returns {FSWatcher} for chaining
      */
      unwatch(paths_) {
        if (this.closed)
          return this;
        const paths = unifyPaths(paths_);
        const { cwd } = this.options;
        paths.forEach((path) => {
          if (!sysPath.isAbsolute(path) && !this._closers.has(path)) {
            if (cwd)
              path = sysPath.join(cwd, path);
            path = sysPath.resolve(path);
          }
          this._closePath(path);
          this._ignoredPaths.add(path);
          if (this._watched.has(path)) {
            this._ignoredPaths.add(path + SLASH_GLOBSTAR);
          }
          this._userIgnored = void 0;
        });
        return this;
      }
      /**
       * Close watchers and remove all listeners from watched paths.
       * @returns {Promise<void>}.
      */
      close() {
        if (this.closed)
          return this._closePromise;
        this.closed = true;
        this.removeAllListeners();
        const closers = [];
        this._closers.forEach((closerList) => closerList.forEach((closer) => {
          const promise = closer();
          if (promise instanceof Promise)
            closers.push(promise);
        }));
        this._streams.forEach((stream) => stream.destroy());
        this._userIgnored = void 0;
        this._readyCount = 0;
        this._readyEmitted = false;
        this._watched.forEach((dirent) => dirent.dispose());
        ["closers", "watched", "streams", "symlinkPaths", "throttled"].forEach((key) => {
          this[`_${key}`].clear();
        });
        this._closePromise = closers.length ? Promise.all(closers).then(() => void 0) : Promise.resolve();
        return this._closePromise;
      }
      /**
       * Expose list of watched paths
       * @returns {Object} for chaining
      */
      getWatched() {
        const watchList = {};
        this._watched.forEach((entry, dir) => {
          const key = this.options.cwd ? sysPath.relative(this.options.cwd, dir) : dir;
          watchList[key || ONE_DOT] = entry.getChildren().sort();
        });
        return watchList;
      }
      emitWithAll(event, args) {
        this.emit(...args);
        if (event !== EV_ERROR)
          this.emit(EV_ALL, ...args);
      }
      // Common helpers
      // --------------
      /**
       * Normalize and emit events.
       * Calling _emit DOES NOT MEAN emit() would be called!
       * @param {EventName} event Type of event
       * @param {Path} path File or directory path
       * @param {*=} val1 arguments to be passed with event
       * @param {*=} val2
       * @param {*=} val3
       * @returns the error if defined, otherwise the value of the FSWatcher instance's `closed` flag
       */
      async _emit(event, path, val1, val2, val3) {
        if (this.closed)
          return;
        const opts2 = this.options;
        if (isWindows)
          path = sysPath.normalize(path);
        if (opts2.cwd)
          path = sysPath.relative(opts2.cwd, path);
        const args = [event, path];
        if (val3 !== void 0)
          args.push(val1, val2, val3);
        else if (val2 !== void 0)
          args.push(val1, val2);
        else if (val1 !== void 0)
          args.push(val1);
        const awf = opts2.awaitWriteFinish;
        let pw;
        if (awf && (pw = this._pendingWrites.get(path))) {
          pw.lastChange = /* @__PURE__ */ new Date();
          return this;
        }
        if (opts2.atomic) {
          if (event === EV_UNLINK) {
            this._pendingUnlinks.set(path, args);
            setTimeout(() => {
              this._pendingUnlinks.forEach((entry, path2) => {
                this.emit(...entry);
                this.emit(EV_ALL, ...entry);
                this._pendingUnlinks.delete(path2);
              });
            }, typeof opts2.atomic === "number" ? opts2.atomic : 100);
            return this;
          }
          if (event === EV_ADD && this._pendingUnlinks.has(path)) {
            event = args[0] = EV_CHANGE;
            this._pendingUnlinks.delete(path);
          }
        }
        if (awf && (event === EV_ADD || event === EV_CHANGE) && this._readyEmitted) {
          const awfEmit = (err, stats) => {
            if (err) {
              event = args[0] = EV_ERROR;
              args[1] = err;
              this.emitWithAll(event, args);
            } else if (stats) {
              if (args.length > 2) {
                args[2] = stats;
              } else {
                args.push(stats);
              }
              this.emitWithAll(event, args);
            }
          };
          this._awaitWriteFinish(path, awf.stabilityThreshold, event, awfEmit);
          return this;
        }
        if (event === EV_CHANGE) {
          const isThrottled = !this._throttle(EV_CHANGE, path, 50);
          if (isThrottled)
            return this;
        }
        if (opts2.alwaysStat && val1 === void 0 && (event === EV_ADD || event === EV_ADD_DIR || event === EV_CHANGE)) {
          const fullPath = opts2.cwd ? sysPath.join(opts2.cwd, path) : path;
          let stats;
          try {
            stats = await stat(fullPath);
          } catch (err) {
          }
          if (!stats || this.closed)
            return;
          args.push(stats);
        }
        this.emitWithAll(event, args);
        return this;
      }
      /**
       * Common handler for errors
       * @param {Error} error
       * @returns {Error|Boolean} The error if defined, otherwise the value of the FSWatcher instance's `closed` flag
       */
      _handleError(error) {
        const code = error && error.code;
        if (error && code !== "ENOENT" && code !== "ENOTDIR" && (!this.options.ignorePermissionErrors || code !== "EPERM" && code !== "EACCES")) {
          this.emit(EV_ERROR, error);
        }
        return error || this.closed;
      }
      /**
       * Helper utility for throttling
       * @param {ThrottleType} actionType type being throttled
       * @param {Path} path being acted upon
       * @param {Number} timeout duration of time to suppress duplicate actions
       * @returns {Object|false} tracking object or false if action should be suppressed
       */
      _throttle(actionType, path, timeout) {
        if (!this._throttled.has(actionType)) {
          this._throttled.set(actionType, /* @__PURE__ */ new Map());
        }
        const action = this._throttled.get(actionType);
        const actionPath = action.get(path);
        if (actionPath) {
          actionPath.count++;
          return false;
        }
        let timeoutObject;
        const clear = () => {
          const item = action.get(path);
          const count = item ? item.count : 0;
          action.delete(path);
          clearTimeout(timeoutObject);
          if (item)
            clearTimeout(item.timeoutObject);
          return count;
        };
        timeoutObject = setTimeout(clear, timeout);
        const thr = { timeoutObject, clear, count: 0 };
        action.set(path, thr);
        return thr;
      }
      _incrReadyCount() {
        return this._readyCount++;
      }
      /**
       * Awaits write operation to finish.
       * Polls a newly created file for size variations. When files size does not change for 'threshold' milliseconds calls callback.
       * @param {Path} path being acted upon
       * @param {Number} threshold Time in milliseconds a file size must be fixed before acknowledging write OP is finished
       * @param {EventName} event
       * @param {Function} awfEmit Callback to be called when ready for event to be emitted.
       */
      _awaitWriteFinish(path, threshold, event, awfEmit) {
        let timeoutHandler;
        let fullPath = path;
        if (this.options.cwd && !sysPath.isAbsolute(path)) {
          fullPath = sysPath.join(this.options.cwd, path);
        }
        const now = /* @__PURE__ */ new Date();
        const awaitWriteFinish = (prevStat) => {
          fs6.stat(fullPath, (err, curStat) => {
            if (err || !this._pendingWrites.has(path)) {
              if (err && err.code !== "ENOENT")
                awfEmit(err);
              return;
            }
            const now2 = Number(/* @__PURE__ */ new Date());
            if (prevStat && curStat.size !== prevStat.size) {
              this._pendingWrites.get(path).lastChange = now2;
            }
            const pw = this._pendingWrites.get(path);
            const df = now2 - pw.lastChange;
            if (df >= threshold) {
              this._pendingWrites.delete(path);
              awfEmit(void 0, curStat);
            } else {
              timeoutHandler = setTimeout(
                awaitWriteFinish,
                this.options.awaitWriteFinish.pollInterval,
                curStat
              );
            }
          });
        };
        if (!this._pendingWrites.has(path)) {
          this._pendingWrites.set(path, {
            lastChange: now,
            cancelWait: () => {
              this._pendingWrites.delete(path);
              clearTimeout(timeoutHandler);
              return event;
            }
          });
          timeoutHandler = setTimeout(
            awaitWriteFinish,
            this.options.awaitWriteFinish.pollInterval
          );
        }
      }
      _getGlobIgnored() {
        return [...this._ignoredPaths.values()];
      }
      /**
       * Determines whether user has asked to ignore this path.
       * @param {Path} path filepath or dir
       * @param {fs.Stats=} stats result of fs.stat
       * @returns {Boolean}
       */
      _isIgnored(path, stats) {
        if (this.options.atomic && DOT_RE.test(path))
          return true;
        if (!this._userIgnored) {
          const { cwd } = this.options;
          const ign = this.options.ignored;
          const ignored = ign && ign.map(normalizeIgnored(cwd));
          const paths = arrify(ignored).filter((path2) => typeof path2 === STRING_TYPE && !isGlob(path2)).map((path2) => path2 + SLASH_GLOBSTAR);
          const list = this._getGlobIgnored().map(normalizeIgnored(cwd)).concat(ignored, paths);
          this._userIgnored = anymatch(list, void 0, ANYMATCH_OPTS);
        }
        return this._userIgnored([path, stats]);
      }
      _isntIgnored(path, stat2) {
        return !this._isIgnored(path, stat2);
      }
      /**
       * Provides a set of common helpers and properties relating to symlink and glob handling.
       * @param {Path} path file, directory, or glob pattern being watched
       * @param {Number=} depth at any depth > 0, this isn't a glob
       * @returns {WatchHelper} object containing helpers for this path
       */
      _getWatchHelpers(path, depth) {
        const watchPath = depth || this.options.disableGlobbing || !isGlob(path) ? path : globParent(path);
        const follow = this.options.followSymlinks;
        return new WatchHelper(path, watchPath, follow, this);
      }
      // Directory helpers
      // -----------------
      /**
       * Provides directory tracking objects
       * @param {String} directory path of the directory
       * @returns {DirEntry} the directory's tracking object
       */
      _getWatchedDir(directory) {
        if (!this._boundRemove)
          this._boundRemove = this._remove.bind(this);
        const dir = sysPath.resolve(directory);
        if (!this._watched.has(dir))
          this._watched.set(dir, new DirEntry(dir, this._boundRemove));
        return this._watched.get(dir);
      }
      // File helpers
      // ------------
      /**
       * Check for read permissions.
       * Based on this answer on SO: https://stackoverflow.com/a/11781404/1358405
       * @param {fs.Stats} stats - object, result of fs_stat
       * @returns {Boolean} indicates whether the file can be read
      */
      _hasReadPermissions(stats) {
        if (this.options.ignorePermissionErrors)
          return true;
        const md = stats && Number.parseInt(stats.mode, 10);
        const st = md & 511;
        const it = Number.parseInt(st.toString(8)[0], 10);
        return Boolean(4 & it);
      }
      /**
       * Handles emitting unlink events for
       * files and directories, and via recursion, for
       * files and directories within directories that are unlinked
       * @param {String} directory within which the following item is located
       * @param {String} item      base path of item/directory
       * @returns {void}
      */
      _remove(directory, item, isDirectory) {
        const path = sysPath.join(directory, item);
        const fullPath = sysPath.resolve(path);
        isDirectory = isDirectory != null ? isDirectory : this._watched.has(path) || this._watched.has(fullPath);
        if (!this._throttle("remove", path, 100))
          return;
        if (!isDirectory && !this.options.useFsEvents && this._watched.size === 1) {
          this.add(directory, item, true);
        }
        const wp = this._getWatchedDir(path);
        const nestedDirectoryChildren = wp.getChildren();
        nestedDirectoryChildren.forEach((nested) => this._remove(path, nested));
        const parent = this._getWatchedDir(directory);
        const wasTracked = parent.has(item);
        parent.remove(item);
        if (this._symlinkPaths.has(fullPath)) {
          this._symlinkPaths.delete(fullPath);
        }
        let relPath = path;
        if (this.options.cwd)
          relPath = sysPath.relative(this.options.cwd, path);
        if (this.options.awaitWriteFinish && this._pendingWrites.has(relPath)) {
          const event = this._pendingWrites.get(relPath).cancelWait();
          if (event === EV_ADD)
            return;
        }
        this._watched.delete(path);
        this._watched.delete(fullPath);
        const eventName = isDirectory ? EV_UNLINK_DIR : EV_UNLINK;
        if (wasTracked && !this._isIgnored(path))
          this._emit(eventName, path);
        if (!this.options.useFsEvents) {
          this._closePath(path);
        }
      }
      /**
       * Closes all watchers for a path
       * @param {Path} path
       */
      _closePath(path) {
        this._closeFile(path);
        const dir = sysPath.dirname(path);
        this._getWatchedDir(dir).remove(sysPath.basename(path));
      }
      /**
       * Closes only file-specific watchers
       * @param {Path} path
       */
      _closeFile(path) {
        const closers = this._closers.get(path);
        if (!closers)
          return;
        closers.forEach((closer) => closer());
        this._closers.delete(path);
      }
      /**
       *
       * @param {Path} path
       * @param {Function} closer
       */
      _addPathCloser(path, closer) {
        if (!closer)
          return;
        let list = this._closers.get(path);
        if (!list) {
          list = [];
          this._closers.set(path, list);
        }
        list.push(closer);
      }
      _readdirp(root2, opts2) {
        if (this.closed)
          return;
        const options = { type: EV_ALL, alwaysStat: true, lstat: true, ...opts2 };
        let stream = readdirp(root2, options);
        this._streams.add(stream);
        stream.once(STR_CLOSE, () => {
          stream = void 0;
        });
        stream.once(STR_END, () => {
          if (stream) {
            this._streams.delete(stream);
            stream = void 0;
          }
        });
        return stream;
      }
    };
    exports.FSWatcher = FSWatcher;
    var watch = (paths, options) => {
      const watcher3 = new FSWatcher(options);
      watcher3.add(paths);
      return watcher3;
    };
    exports.watch = watch;
  }
});

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

// src/main/index.ts
var import_fs3 = __toESM(require("fs"));
var import_path9 = require("path");
var import_electron7 = require("electron");

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

// src/main/config.ts
var import_fs = __toESM(require("fs"));
var import_path3 = require("path");
var import_process = require("process");
var import_electron2 = require("electron");

// src/main/utils/index.ts
var import_path2 = require("path");

// src/main/utils/hasValue.ts
function hasValue(obj, key, value) {
  if (key in obj && obj[key] === value)
    return true;
  for (const prop in obj) {
    if (prop in obj && typeof obj[prop] === "object") {
      const result = hasValue(obj[prop], key, value);
      if (result)
        return true;
    }
  }
  return false;
}

// src/main/utils/resolvePath.ts
var import_os = require("os");
var import_path = require("path");
function resolvePath(path, varTypes = {
  windows: (0, import_os.platform)() === "win32",
  unix: (0, import_os.platform)() !== "win32"
}) {
  const windowsRegex = /%([^%]+)%/g;
  const unixRegex = /\$(?:{(?=[^}]*}))?(\w+)}?/g;
  if (varTypes.windows)
    path = path.replace(windowsRegex, (_, name) => process.env[name] ?? "");
  if (varTypes.unix)
    path = path.replace(unixRegex, (_, name) => process.env[name] ?? "");
  return (0, import_path.normalize)(path);
}

// src/main/utils/sendToAll.ts
var import_electron = require("electron");
function sendToAll(channel, ...args) {
  import_electron.BrowserWindow.getAllWindows().forEach((window2) => {
    window2.webContents.send(channel, ...args);
  });
}

// src/main/utils/index.ts
var root = (0, import_path2.join)(__dirname, "..");

// src/common/logger.ts
var LoggerModule = class {
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
      const { BrowserWindow: BrowserWindow3 } = await import("electron");
      BrowserWindow3.getAllWindows().forEach((win) => win.webContents.send(IPC.log, type, ...message));
    }
  }
  log = (...message) => this.#log("log", message);
  info = (...message) => this.#log("info", message);
  warn = (...message) => this.#log("warn", message);
  error = (...message) => this.#log("error", message);
  debug = (...message) => this.#log("debug", message);
};
var logger_default = LoggerModule;

// src/main/config.ts
var Logger = new logger_default("Main", "ansi");
var defaultConfig = {
  hotkey: "ctrl+shift+p",
  quickCssDir: "./quickcss",
  themeFiles: [
    "./themes/*/index.json",
    ...process.platform === "win32" ? ["%USERPROFILE%/discord/themes/*/index.json"] : ["$HOME/discord/themes/*/index.json"]
  ],
  enabled: {}
};
if (!import_fs.default.existsSync((0, import_path3.join)(root, "config.json"))) {
  Logger.warn("No config file found, creating one.");
  import_fs.default.writeFileSync((0, import_path3.join)(root, "config.json"), JSON.stringify(defaultConfig, null, 2));
}
var configJson = require((0, import_path3.join)(root, "config.json"));
var configJsonWithDefaults = {
  ...defaultConfig,
  ...configJson
};
var config = configJsonWithDefaults;
if (import_process.argv.includes("--verbose") || true)
  config.verbose = true;
config.quickCssDir = (0, import_path3.isAbsolute)(config.quickCssDir) ? config.quickCssDir : (0, import_path3.join)(root, config.quickCssDir);
var config_default = config;
if (config.verbose)
  Logger.debug(config);
import_electron2.ipcMain.on(IPC.getConfig, (event) => event.returnValue = config);

// src/main/protocol.ts
var import_electron4 = require("electron");
var import_path6 = require("path");

// src/main/themes/index.ts
var import_path5 = require("path");
var import_fast_glob = __toESM(require_out4());

// src/main/themes/watcher.ts
var import_chokidar = __toESM(require_chokidar());
var import_ts_debounce = __toESM(require_src());
var Logger2 = new logger_default("Watcher > Themes", "ansi");
var watcher = import_chokidar.default.watch([], {
  persistent: true,
  ignoreInitial: true,
  disableGlobbing: true,
  depth: 1
});
var possibleKeys = [
  "json",
  "main",
  "splash"
];
watcher.on(
  "change",
  (0, import_ts_debounce.debounce)((path) => {
    const id = Object.keys(themes).find((id2) => {
      for (const key of possibleKeys) {
        if (themes[id2][key] === path)
          return true;
      }
    });
    if (!id) {
      Logger2.warn(`Didn't find a theme associated with "${path}".`);
      return;
    }
    updateTheme(themes[id].json);
    if (config_default.verbose)
      Logger2.debug(`Theme changed: ${id}`);
    sendToAll(IPC.onThemeChange, { id, theme: themes[id] });
  }, 100)
);
function watchThemeFile(theme) {
  watcher.add(theme);
  if (config_default.verbose)
    Logger2.debug(`Watching theme file: ${theme}`);
}

// src/main/themes/ipc.ts
var import_promises = __toESM(require("fs/promises"));
var import_path4 = require("path");
var import_electron3 = require("electron");
var Logger3 = new logger_default("IPC", "ansi");
import_electron3.ipcMain.handle(IPC.getThemes, () => themes);
import_electron3.ipcMain.on(IPC.saveThemeState, (event, id, state) => {
  if (config_default.verbose)
    Logger3.debug("Received save theme state message from", event.sender.getTitle());
  const configFile = require((0, import_path4.join)(root, "config.json"));
  configFile.enabled[id] = state;
  import_promises.default.writeFile((0, import_path4.join)(root, "config.json"), JSON.stringify(configFile, null, 2)).then(() => {
    Logger3.log(`Saved theme state "${state}" for ${id}.`);
  }).catch((e) => {
    Logger3.error(`Failed to save theme state for "${id}":`, e);
  });
});

// src/main/themes/index.ts
var Logger4 = new logger_default("Main > Themes", "ansi");
var resolvedThemes = config_default.themeFiles.map((path) => resolvePath(path).replace(/\\/g, "/"));
var themeJsons = import_fast_glob.default.sync(resolvedThemes, {
  absolute: true,
  cwd: root
}).map((path) => path.replace(/\//g, "\\"));
Logger4.log("Detected themes:", themeJsons);
var themes = {};
for (const json of themeJsons) {
  if (!json.endsWith(".json"))
    continue;
  updateTheme(json);
}
function updateTheme(json) {
  const pathKeys = [
    "main",
    "splash"
  ];
  const meta = require(json);
  const modifiedMeta = { ...meta };
  for (const key in meta) {
    if (pathKeys.includes(key)) {
      if ((0, import_path5.isAbsolute)(meta[key])) {
        Logger4.error(`"${key}" must be a relative path. (${meta[key]})`);
        return;
      }
      if (meta[key].startsWith("../")) {
        Logger4.error(`"${key}" must not point to a parent directory. (${meta[key]})`);
        return;
      }
      const location = modifiedMeta[key] = (0, import_path5.resolve)(json, "..", meta[key]);
      const fileExtension = location.split(".").pop();
      if (fileExtension !== "css")
        Logger4.warn(`Unsupported file extension "${fileExtension}". (${location})`);
    }
  }
  const enabled = config_default.enabled[meta.id] ?? false;
  const theme = {
    enabled,
    json,
    ...modifiedMeta
  };
  themes[meta.id] = theme;
  if (enabled) {
    watchThemeFile(json);
    watchThemeFile(modifiedMeta.main);
    if (meta?.splash)
      watchThemeFile(modifiedMeta.splash);
  }
}

// src/main/protocol.ts
var Logger5 = new logger_default("Main > Protocol", "ansi");
import_electron4.protocol.registerSchemesAsPrivileged([
  {
    scheme: "popcorn",
    privileges: {
      secure: true,
      standard: true,
      supportFetchAPI: true
    }
  }
]);
import_electron4.app.on("ready", () => {
  import_electron4.protocol.registerFileProtocol("popcorn", (request, cb) => {
    if (config_default.verbose)
      Logger5.debug("Received request:", request);
    const url = new URL(request.url);
    let filePath = "";
    switch (url.hostname) {
      case "theme":
        {
          const theme = themes[url.pathname.slice(1)];
          filePath = (0, import_path6.resolve)(theme.json, "..", theme.main);
        }
        break;
      case "splash-theme":
        {
          const theme = themes[url.pathname.slice(1)];
          if (!theme.splash)
            return false;
          filePath = theme.splash;
        }
        break;
    }
    cb({ path: filePath });
    return true;
  });
});

// src/main/quickcss/index.ts
var import_fs2 = __toESM(require("fs"));
var import_path8 = require("path");

// src/main/quickcss/ipc.ts
var import_promises2 = __toESM(require("fs/promises"));
var import_path7 = require("path");
var import_electron6 = require("electron");

// src/main/quickcss/watcher.ts
var import_chokidar2 = __toESM(require_chokidar());
var import_ts_debounce2 = __toESM(require_src());
var import_electron5 = require("electron");
var Logger6 = new logger_default("Watcher > QuickCSS", "ansi");
var opts = {
  persistent: true,
  ignoreInitial: true,
  disableGlobbing: true
};
var watcher2;
start();
function start() {
  if (config_default.verbose)
    Logger6.debug("Starting watcher...");
  watcher2 = import_chokidar2.default.watch(config_default.quickCssDir, opts);
  watcher2.on(
    "all",
    (0, import_ts_debounce2.debounce)((event, path) => {
      if (config_default.verbose)
        Logger6.debug(event, path);
      updateQuickCss();
      import_electron5.BrowserWindow.getAllWindows().forEach(
        (window2) => window2.webContents.send(IPC.onQuickCssChange, quickCss)
      );
    }, 100)
  );
}
function stop() {
  if (config_default.verbose)
    Logger6.debug("Stopping watcher...");
  watcher2.close();
  watcher2 = null;
}

// src/main/quickcss/ipc.ts
var Logger7 = new logger_default("IPC > QuickCSS", "ansi");
import_electron6.ipcMain.handle(IPC.getQuickCss, () => quickCss);
import_electron6.ipcMain.on(IPC.createQuickCssNode, (event, location, type) => {
  if (config_default.verbose)
    Logger7.debug("Received node creation message from", event.sender.getTitle());
  let i = 0;
  let name;
  while (!name) {
    const possibleName = type + (i ? "-" + i++ : "") + (type === "folder" ? "" : ".css");
    hasValue(quickCss, "location", (0, import_path7.join)(location, possibleName)) || (name = possibleName);
  }
  const actualLocation = (0, import_path7.join)(config_default.quickCssDir, location, name);
  let success = false;
  (type === "file" ? import_promises2.default.open(actualLocation, "wx") : import_promises2.default.mkdir(actualLocation)).then(() => {
    Logger7.log(`Successfully created ${type} ${name}.`);
    success = true;
  }).catch((e) => {
    Logger7.error(`Failed to create ${type} ${name}:`, e);
  }).finally(() => {
    event.reply(IPC.statusMessage, {
      type: MESSAGES.quickCss.created,
      success,
      data: {
        type,
        location: name
      }
    });
  });
});
import_electron6.ipcMain.on(IPC.deleteQuickCssNode, async (event, location) => {
  if (config_default.verbose)
    Logger7.debug("Received QuickCSS file remove message from", event.sender.getTitle());
  if (!hasValue(quickCss, "location", location)) {
    Logger7.error(`${location} isn't a valid QuickCSS node.`);
    return;
  }
  const actualLocation = (0, import_path7.join)(config_default.quickCssDir, location);
  if (actualLocation === config_default.quickCssDir) {
    Logger7.error("Can't delete the base folder.");
    return;
  }
  const type = await import_promises2.default.lstat(actualLocation).then((stat) => stat.isDirectory() ? "folder" : "file");
  let success = false;
  import_promises2.default.rm(actualLocation, { recursive: true }).then(() => {
    Logger7.log(`Successfully deleted ${location}.`);
    success = true;
  }).catch((e) => {
    Logger7.error(`Failed to delete ${location}:`, e);
  }).finally(() => {
    event.reply(IPC.statusMessage, {
      type: MESSAGES.quickCss.deleted,
      success,
      data: {
        type,
        location
      }
    });
  });
});
import_electron6.ipcMain.on(IPC.renameQuickCssNode, (event, location, newName) => {
  if (config_default.verbose)
    Logger7.debug("Received rename message from", event.sender.getTitle());
  const newLocation = (0, import_path7.join)(location, "..", newName);
  const actualLocation = (0, import_path7.join)(config_default.quickCssDir, location);
  const actualNewLocation = (0, import_path7.join)(config_default.quickCssDir, newLocation);
  stop();
  let success = false;
  import_promises2.default.rename(actualLocation, actualNewLocation).then(() => {
    Logger7.log(`Successfully renamed ${location} to ${newName}.`);
    success = true;
    updateQuickCss();
    sendToAll(IPC.onQuickCssChange, quickCss);
  }).catch((e) => {
    Logger7.error(`Failed to rename ${location} to ${newName}:`, e);
  }).finally(() => {
    start();
    event.reply(IPC.statusMessage, {
      type: MESSAGES.quickCss.renamed,
      success,
      data: {
        oldLocation: location,
        newLocation
      }
    });
  });
});
import_electron6.ipcMain.on(IPC.updateQuickCssFile, (event, location, content) => {
  if (config_default.verbose)
    Logger7.debug("Received QuickCSS file save message from", event.sender.getTitle());
  if (!hasValue(quickCss, "location", location)) {
    Logger7.error(`${location} isn't a valid QuickCSS file.`);
    return;
  }
  const actualLocation = (0, import_path7.join)(config_default.quickCssDir, location);
  let success = false;
  import_promises2.default.writeFile(actualLocation, content).then(() => {
    Logger7.log(`Successfully saved ${location}.`);
    success = true;
  }).catch((e) => {
    Logger7.error(`Failed to save ${location}:`, e);
  }).finally(() => {
    event.reply(IPC.statusMessage, {
      type: MESSAGES.quickCss.updated,
      success,
      data: location
    });
  });
});

// src/main/quickcss/index.ts
var Logger8 = new logger_default("QuickCSS", "ansi");
function getQuickCss() {
  function createTree(directoryPath, regex = /./) {
    const node = {
      name: (0, import_path8.basename)(directoryPath),
      location: (0, import_path8.relative)(config_default.quickCssDir, directoryPath),
      files: []
    };
    const fileNames = import_fs2.default.readdirSync(directoryPath);
    const directories = [];
    const files = [];
    for (const fileName of fileNames) {
      const filePath = (0, import_path8.join)(directoryPath, fileName);
      const stats = import_fs2.default.statSync(filePath);
      let childNode;
      if (stats.isDirectory()) {
        childNode = createTree(filePath, regex);
        directories.push(childNode);
      } else if (regex.test(fileName)) {
        try {
          childNode = {
            name: fileName,
            location: (0, import_path8.relative)(config_default.quickCssDir, filePath),
            content: import_fs2.default.readFileSync(filePath, "utf-8")
          };
          files.push(childNode);
        } catch (e) {
          Logger8.error(`Error reading file ${filePath}`, e);
        }
      }
    }
    node.files = [...directories, ...files];
    return node;
  }
  return createTree(config_default.quickCssDir, /\.css/);
}
var quickCss = getQuickCss();
function updateQuickCss() {
  quickCss = getQuickCss();
}

// src/main/index.ts
import_electron7.ipcMain.on(IPC.getWindowData, (event) => {
  event.returnValue = event.sender.kernelWindowData;
});
import_electron7.ipcMain.handle(IPC.getStyles, () => {
  return import_fs3.default.readFileSync((0, import_path9.join)(__dirname, "renderer.css"), "utf8");
});
/*! Bundled license information:

is-extglob/index.js:
  (*!
   * is-extglob <https://github.com/jonschlinkert/is-extglob>
   *
   * Copyright (c) 2014-2016, Jon Schlinkert.
   * Licensed under the MIT License.
   *)

is-glob/index.js:
  (*!
   * is-glob <https://github.com/jonschlinkert/is-glob>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)

is-number/index.js:
  (*!
   * is-number <https://github.com/jonschlinkert/is-number>
   *
   * Copyright (c) 2014-present, Jon Schlinkert.
   * Released under the MIT License.
   *)

to-regex-range/index.js:
  (*!
   * to-regex-range <https://github.com/micromatch/to-regex-range>
   *
   * Copyright (c) 2015-present, Jon Schlinkert.
   * Released under the MIT License.
   *)

fill-range/index.js:
  (*!
   * fill-range <https://github.com/jonschlinkert/fill-range>
   *
   * Copyright (c) 2014-present, Jon Schlinkert.
   * Licensed under the MIT License.
   *)

queue-microtask/index.js:
  (*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)

run-parallel/index.js:
  (*! run-parallel. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)

normalize-path/index.js:
  (*!
   * normalize-path <https://github.com/jonschlinkert/normalize-path>
   *
   * Copyright (c) 2014-2018, Jon Schlinkert.
   * Released under the MIT License.
   *)
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Zhc3QtZ2xvYkAzLjMuMC9ub2RlX21vZHVsZXMvZmFzdC1nbG9iL291dC91dGlscy9hcnJheS5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vZmFzdC1nbG9iQDMuMy4wL25vZGVfbW9kdWxlcy9mYXN0LWdsb2Ivb3V0L3V0aWxzL2Vycm5vLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9mYXN0LWdsb2JAMy4zLjAvbm9kZV9tb2R1bGVzL2Zhc3QtZ2xvYi9vdXQvdXRpbHMvZnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Zhc3QtZ2xvYkAzLjMuMC9ub2RlX21vZHVsZXMvZmFzdC1nbG9iL291dC91dGlscy9wYXRoLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9pcy1leHRnbG9iQDIuMS4xL25vZGVfbW9kdWxlcy9pcy1leHRnbG9iL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9pcy1nbG9iQDQuMC4zL25vZGVfbW9kdWxlcy9pcy1nbG9iL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9nbG9iLXBhcmVudEA1LjEuMi9ub2RlX21vZHVsZXMvZ2xvYi1wYXJlbnQvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2JyYWNlc0AzLjAuMi9ub2RlX21vZHVsZXMvYnJhY2VzL2xpYi91dGlscy5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vYnJhY2VzQDMuMC4yL25vZGVfbW9kdWxlcy9icmFjZXMvbGliL3N0cmluZ2lmeS5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vaXMtbnVtYmVyQDcuMC4wL25vZGVfbW9kdWxlcy9pcy1udW1iZXIvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3RvLXJlZ2V4LXJhbmdlQDUuMC4xL25vZGVfbW9kdWxlcy90by1yZWdleC1yYW5nZS9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vZmlsbC1yYW5nZUA3LjAuMS9ub2RlX21vZHVsZXMvZmlsbC1yYW5nZS9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vYnJhY2VzQDMuMC4yL25vZGVfbW9kdWxlcy9icmFjZXMvbGliL2NvbXBpbGUuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2JyYWNlc0AzLjAuMi9ub2RlX21vZHVsZXMvYnJhY2VzL2xpYi9leHBhbmQuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2JyYWNlc0AzLjAuMi9ub2RlX21vZHVsZXMvYnJhY2VzL2xpYi9jb25zdGFudHMuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2JyYWNlc0AzLjAuMi9ub2RlX21vZHVsZXMvYnJhY2VzL2xpYi9wYXJzZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vYnJhY2VzQDMuMC4yL25vZGVfbW9kdWxlcy9icmFjZXMvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3BpY29tYXRjaEAyLjMuMS9ub2RlX21vZHVsZXMvcGljb21hdGNoL2xpYi9jb25zdGFudHMuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3BpY29tYXRjaEAyLjMuMS9ub2RlX21vZHVsZXMvcGljb21hdGNoL2xpYi91dGlscy5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vcGljb21hdGNoQDIuMy4xL25vZGVfbW9kdWxlcy9waWNvbWF0Y2gvbGliL3NjYW4uanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3BpY29tYXRjaEAyLjMuMS9ub2RlX21vZHVsZXMvcGljb21hdGNoL2xpYi9wYXJzZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vcGljb21hdGNoQDIuMy4xL25vZGVfbW9kdWxlcy9waWNvbWF0Y2gvbGliL3BpY29tYXRjaC5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vcGljb21hdGNoQDIuMy4xL25vZGVfbW9kdWxlcy9waWNvbWF0Y2gvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL21pY3JvbWF0Y2hANC4wLjUvbm9kZV9tb2R1bGVzL21pY3JvbWF0Y2gvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Zhc3QtZ2xvYkAzLjMuMC9ub2RlX21vZHVsZXMvZmFzdC1nbG9iL291dC91dGlscy9wYXR0ZXJuLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9tZXJnZTJAMS40LjEvbm9kZV9tb2R1bGVzL21lcmdlMi9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vZmFzdC1nbG9iQDMuMy4wL25vZGVfbW9kdWxlcy9mYXN0LWdsb2Ivb3V0L3V0aWxzL3N0cmVhbS5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vZmFzdC1nbG9iQDMuMy4wL25vZGVfbW9kdWxlcy9mYXN0LWdsb2Ivb3V0L3V0aWxzL3N0cmluZy5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vZmFzdC1nbG9iQDMuMy4wL25vZGVfbW9kdWxlcy9mYXN0LWdsb2Ivb3V0L3V0aWxzL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9mYXN0LWdsb2JAMy4zLjAvbm9kZV9tb2R1bGVzL2Zhc3QtZ2xvYi9vdXQvbWFuYWdlcnMvdGFza3MuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bub2RlbGliK2ZzLnN0YXRAMi4wLjUvbm9kZV9tb2R1bGVzL0Bub2RlbGliL2ZzLnN0YXQvb3V0L3Byb3ZpZGVycy9hc3luYy5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vQG5vZGVsaWIrZnMuc3RhdEAyLjAuNS9ub2RlX21vZHVsZXMvQG5vZGVsaWIvZnMuc3RhdC9vdXQvcHJvdmlkZXJzL3N5bmMuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bub2RlbGliK2ZzLnN0YXRAMi4wLjUvbm9kZV9tb2R1bGVzL0Bub2RlbGliL2ZzLnN0YXQvb3V0L2FkYXB0ZXJzL2ZzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9Abm9kZWxpYitmcy5zdGF0QDIuMC41L25vZGVfbW9kdWxlcy9Abm9kZWxpYi9mcy5zdGF0L291dC9zZXR0aW5ncy5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vQG5vZGVsaWIrZnMuc3RhdEAyLjAuNS9ub2RlX21vZHVsZXMvQG5vZGVsaWIvZnMuc3RhdC9vdXQvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1ZXVlLW1pY3JvdGFza0AxLjIuMy9ub2RlX21vZHVsZXMvcXVldWUtbWljcm90YXNrL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9ydW4tcGFyYWxsZWxAMS4yLjAvbm9kZV9tb2R1bGVzL3J1bi1wYXJhbGxlbC9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vQG5vZGVsaWIrZnMuc2NhbmRpckAyLjEuNS9ub2RlX21vZHVsZXMvQG5vZGVsaWIvZnMuc2NhbmRpci9vdXQvY29uc3RhbnRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9Abm9kZWxpYitmcy5zY2FuZGlyQDIuMS41L25vZGVfbW9kdWxlcy9Abm9kZWxpYi9mcy5zY2FuZGlyL291dC91dGlscy9mcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vQG5vZGVsaWIrZnMuc2NhbmRpckAyLjEuNS9ub2RlX21vZHVsZXMvQG5vZGVsaWIvZnMuc2NhbmRpci9vdXQvdXRpbHMvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bub2RlbGliK2ZzLnNjYW5kaXJAMi4xLjUvbm9kZV9tb2R1bGVzL0Bub2RlbGliL2ZzLnNjYW5kaXIvb3V0L3Byb3ZpZGVycy9jb21tb24uanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bub2RlbGliK2ZzLnNjYW5kaXJAMi4xLjUvbm9kZV9tb2R1bGVzL0Bub2RlbGliL2ZzLnNjYW5kaXIvb3V0L3Byb3ZpZGVycy9hc3luYy5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vQG5vZGVsaWIrZnMuc2NhbmRpckAyLjEuNS9ub2RlX21vZHVsZXMvQG5vZGVsaWIvZnMuc2NhbmRpci9vdXQvcHJvdmlkZXJzL3N5bmMuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bub2RlbGliK2ZzLnNjYW5kaXJAMi4xLjUvbm9kZV9tb2R1bGVzL0Bub2RlbGliL2ZzLnNjYW5kaXIvb3V0L2FkYXB0ZXJzL2ZzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9Abm9kZWxpYitmcy5zY2FuZGlyQDIuMS41L25vZGVfbW9kdWxlcy9Abm9kZWxpYi9mcy5zY2FuZGlyL291dC9zZXR0aW5ncy5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vQG5vZGVsaWIrZnMuc2NhbmRpckAyLjEuNS9ub2RlX21vZHVsZXMvQG5vZGVsaWIvZnMuc2NhbmRpci9vdXQvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3JldXNpZnlAMS4wLjQvbm9kZV9tb2R1bGVzL3JldXNpZnkvcmV1c2lmeS5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vZmFzdHFAMS4xNS4wL25vZGVfbW9kdWxlcy9mYXN0cS9xdWV1ZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vQG5vZGVsaWIrZnMud2Fsa0AxLjIuOC9ub2RlX21vZHVsZXMvQG5vZGVsaWIvZnMud2Fsay9vdXQvcmVhZGVycy9jb21tb24uanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bub2RlbGliK2ZzLndhbGtAMS4yLjgvbm9kZV9tb2R1bGVzL0Bub2RlbGliL2ZzLndhbGsvb3V0L3JlYWRlcnMvcmVhZGVyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9Abm9kZWxpYitmcy53YWxrQDEuMi44L25vZGVfbW9kdWxlcy9Abm9kZWxpYi9mcy53YWxrL291dC9yZWFkZXJzL2FzeW5jLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9Abm9kZWxpYitmcy53YWxrQDEuMi44L25vZGVfbW9kdWxlcy9Abm9kZWxpYi9mcy53YWxrL291dC9wcm92aWRlcnMvYXN5bmMuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bub2RlbGliK2ZzLndhbGtAMS4yLjgvbm9kZV9tb2R1bGVzL0Bub2RlbGliL2ZzLndhbGsvb3V0L3Byb3ZpZGVycy9zdHJlYW0uanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bub2RlbGliK2ZzLndhbGtAMS4yLjgvbm9kZV9tb2R1bGVzL0Bub2RlbGliL2ZzLndhbGsvb3V0L3JlYWRlcnMvc3luYy5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vQG5vZGVsaWIrZnMud2Fsa0AxLjIuOC9ub2RlX21vZHVsZXMvQG5vZGVsaWIvZnMud2Fsay9vdXQvcHJvdmlkZXJzL3N5bmMuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bub2RlbGliK2ZzLndhbGtAMS4yLjgvbm9kZV9tb2R1bGVzL0Bub2RlbGliL2ZzLndhbGsvb3V0L3NldHRpbmdzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9Abm9kZWxpYitmcy53YWxrQDEuMi44L25vZGVfbW9kdWxlcy9Abm9kZWxpYi9mcy53YWxrL291dC9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vZmFzdC1nbG9iQDMuMy4wL25vZGVfbW9kdWxlcy9mYXN0LWdsb2Ivb3V0L3JlYWRlcnMvcmVhZGVyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9mYXN0LWdsb2JAMy4zLjAvbm9kZV9tb2R1bGVzL2Zhc3QtZ2xvYi9vdXQvcmVhZGVycy9zdHJlYW0uanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Zhc3QtZ2xvYkAzLjMuMC9ub2RlX21vZHVsZXMvZmFzdC1nbG9iL291dC9yZWFkZXJzL2FzeW5jLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9mYXN0LWdsb2JAMy4zLjAvbm9kZV9tb2R1bGVzL2Zhc3QtZ2xvYi9vdXQvcHJvdmlkZXJzL21hdGNoZXJzL21hdGNoZXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Zhc3QtZ2xvYkAzLjMuMC9ub2RlX21vZHVsZXMvZmFzdC1nbG9iL291dC9wcm92aWRlcnMvbWF0Y2hlcnMvcGFydGlhbC5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vZmFzdC1nbG9iQDMuMy4wL25vZGVfbW9kdWxlcy9mYXN0LWdsb2Ivb3V0L3Byb3ZpZGVycy9maWx0ZXJzL2RlZXAuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Zhc3QtZ2xvYkAzLjMuMC9ub2RlX21vZHVsZXMvZmFzdC1nbG9iL291dC9wcm92aWRlcnMvZmlsdGVycy9lbnRyeS5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vZmFzdC1nbG9iQDMuMy4wL25vZGVfbW9kdWxlcy9mYXN0LWdsb2Ivb3V0L3Byb3ZpZGVycy9maWx0ZXJzL2Vycm9yLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9mYXN0LWdsb2JAMy4zLjAvbm9kZV9tb2R1bGVzL2Zhc3QtZ2xvYi9vdXQvcHJvdmlkZXJzL3RyYW5zZm9ybWVycy9lbnRyeS5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vZmFzdC1nbG9iQDMuMy4wL25vZGVfbW9kdWxlcy9mYXN0LWdsb2Ivb3V0L3Byb3ZpZGVycy9wcm92aWRlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vZmFzdC1nbG9iQDMuMy4wL25vZGVfbW9kdWxlcy9mYXN0LWdsb2Ivb3V0L3Byb3ZpZGVycy9hc3luYy5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vZmFzdC1nbG9iQDMuMy4wL25vZGVfbW9kdWxlcy9mYXN0LWdsb2Ivb3V0L3Byb3ZpZGVycy9zdHJlYW0uanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Zhc3QtZ2xvYkAzLjMuMC9ub2RlX21vZHVsZXMvZmFzdC1nbG9iL291dC9yZWFkZXJzL3N5bmMuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Zhc3QtZ2xvYkAzLjMuMC9ub2RlX21vZHVsZXMvZmFzdC1nbG9iL291dC9wcm92aWRlcnMvc3luYy5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vZmFzdC1nbG9iQDMuMy4wL25vZGVfbW9kdWxlcy9mYXN0LWdsb2Ivb3V0L3NldHRpbmdzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9mYXN0LWdsb2JAMy4zLjAvbm9kZV9tb2R1bGVzL2Zhc3QtZ2xvYi9vdXQvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3JlYWRkaXJwQDMuNi4wL25vZGVfbW9kdWxlcy9yZWFkZGlycC9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vbm9ybWFsaXplLXBhdGhAMy4wLjAvbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS1wYXRoL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9hbnltYXRjaEAzLjEuMy9ub2RlX21vZHVsZXMvYW55bWF0Y2gvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2JpbmFyeS1leHRlbnNpb25zQDIuMi4wL25vZGVfbW9kdWxlcy9iaW5hcnktZXh0ZW5zaW9ucy9iaW5hcnktZXh0ZW5zaW9ucy5qc29uIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9iaW5hcnktZXh0ZW5zaW9uc0AyLjIuMC9ub2RlX21vZHVsZXMvYmluYXJ5LWV4dGVuc2lvbnMvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2lzLWJpbmFyeS1wYXRoQDIuMS4wL25vZGVfbW9kdWxlcy9pcy1iaW5hcnktcGF0aC9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vY2hva2lkYXJAMy41LjMvbm9kZV9tb2R1bGVzL2Nob2tpZGFyL2xpYi9jb25zdGFudHMuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nob2tpZGFyQDMuNS4zL25vZGVfbW9kdWxlcy9jaG9raWRhci9saWIvbm9kZWZzLWhhbmRsZXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nob2tpZGFyQDMuNS4zL25vZGVfbW9kdWxlcy9jaG9raWRhci9saWIvZnNldmVudHMtaGFuZGxlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vY2hva2lkYXJAMy41LjMvbm9kZV9tb2R1bGVzL2Nob2tpZGFyL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS90cy1kZWJvdW5jZUA0LjAuMC9ub2RlX21vZHVsZXMvdHMtZGVib3VuY2Uvc3JjL2luZGV4LnRzIiwgIi4uL3NyYy9tYWluL2luZGV4LnRzIiwgIi4uL3NyYy9jb21tb24vY29uc3RhbnRzLnRzIiwgIi4uL3NyYy9tYWluL2NvbmZpZy50cyIsICIuLi9zcmMvbWFpbi91dGlscy9pbmRleC50cyIsICIuLi9zcmMvbWFpbi91dGlscy9oYXNWYWx1ZS50cyIsICIuLi9zcmMvbWFpbi91dGlscy9yZXNvbHZlUGF0aC50cyIsICIuLi9zcmMvbWFpbi91dGlscy9zZW5kVG9BbGwudHMiLCAiLi4vc3JjL2NvbW1vbi9sb2dnZXIudHMiLCAiLi4vc3JjL21haW4vcHJvdG9jb2wudHMiLCAiLi4vc3JjL21haW4vdGhlbWVzL2luZGV4LnRzIiwgIi4uL3NyYy9tYWluL3RoZW1lcy93YXRjaGVyLnRzIiwgIi4uL3NyYy9tYWluL3RoZW1lcy9pcGMudHMiLCAiLi4vc3JjL21haW4vcXVpY2tjc3MvaW5kZXgudHMiLCAiLi4vc3JjL21haW4vcXVpY2tjc3MvaXBjLnRzIiwgIi4uL3NyYy9tYWluL3F1aWNrY3NzL3dhdGNoZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zcGxpdFdoZW4gPSBleHBvcnRzLmZsYXR0ZW4gPSB2b2lkIDA7XG5mdW5jdGlvbiBmbGF0dGVuKGl0ZW1zKSB7XG4gICAgcmV0dXJuIGl0ZW1zLnJlZHVjZSgoY29sbGVjdGlvbiwgaXRlbSkgPT4gW10uY29uY2F0KGNvbGxlY3Rpb24sIGl0ZW0pLCBbXSk7XG59XG5leHBvcnRzLmZsYXR0ZW4gPSBmbGF0dGVuO1xuZnVuY3Rpb24gc3BsaXRXaGVuKGl0ZW1zLCBwcmVkaWNhdGUpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbW11dO1xuICAgIGxldCBncm91cEluZGV4ID0gMDtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgaWYgKHByZWRpY2F0ZShpdGVtKSkge1xuICAgICAgICAgICAgZ3JvdXBJbmRleCsrO1xuICAgICAgICAgICAgcmVzdWx0W2dyb3VwSW5kZXhdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHRbZ3JvdXBJbmRleF0ucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5zcGxpdFdoZW4gPSBzcGxpdFdoZW47XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmlzRW5vZW50Q29kZUVycm9yID0gdm9pZCAwO1xuZnVuY3Rpb24gaXNFbm9lbnRDb2RlRXJyb3IoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IuY29kZSA9PT0gJ0VOT0VOVCc7XG59XG5leHBvcnRzLmlzRW5vZW50Q29kZUVycm9yID0gaXNFbm9lbnRDb2RlRXJyb3I7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZURpcmVudEZyb21TdGF0cyA9IHZvaWQgMDtcbmNsYXNzIERpcmVudEZyb21TdGF0cyB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgc3RhdHMpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pc0Jsb2NrRGV2aWNlID0gc3RhdHMuaXNCbG9ja0RldmljZS5iaW5kKHN0YXRzKTtcbiAgICAgICAgdGhpcy5pc0NoYXJhY3RlckRldmljZSA9IHN0YXRzLmlzQ2hhcmFjdGVyRGV2aWNlLmJpbmQoc3RhdHMpO1xuICAgICAgICB0aGlzLmlzRGlyZWN0b3J5ID0gc3RhdHMuaXNEaXJlY3RvcnkuYmluZChzdGF0cyk7XG4gICAgICAgIHRoaXMuaXNGSUZPID0gc3RhdHMuaXNGSUZPLmJpbmQoc3RhdHMpO1xuICAgICAgICB0aGlzLmlzRmlsZSA9IHN0YXRzLmlzRmlsZS5iaW5kKHN0YXRzKTtcbiAgICAgICAgdGhpcy5pc1NvY2tldCA9IHN0YXRzLmlzU29ja2V0LmJpbmQoc3RhdHMpO1xuICAgICAgICB0aGlzLmlzU3ltYm9saWNMaW5rID0gc3RhdHMuaXNTeW1ib2xpY0xpbmsuYmluZChzdGF0cyk7XG4gICAgfVxufVxuZnVuY3Rpb24gY3JlYXRlRGlyZW50RnJvbVN0YXRzKG5hbWUsIHN0YXRzKSB7XG4gICAgcmV0dXJuIG5ldyBEaXJlbnRGcm9tU3RhdHMobmFtZSwgc3RhdHMpO1xufVxuZXhwb3J0cy5jcmVhdGVEaXJlbnRGcm9tU3RhdHMgPSBjcmVhdGVEaXJlbnRGcm9tU3RhdHM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNvbnZlcnRQb3NpeFBhdGhUb1BhdHRlcm4gPSBleHBvcnRzLmNvbnZlcnRXaW5kb3dzUGF0aFRvUGF0dGVybiA9IGV4cG9ydHMuY29udmVydFBhdGhUb1BhdHRlcm4gPSBleHBvcnRzLmVzY2FwZVBvc2l4UGF0aCA9IGV4cG9ydHMuZXNjYXBlV2luZG93c1BhdGggPSBleHBvcnRzLmVzY2FwZSA9IGV4cG9ydHMucmVtb3ZlTGVhZGluZ0RvdFNlZ21lbnQgPSBleHBvcnRzLm1ha2VBYnNvbHV0ZSA9IGV4cG9ydHMudW5peGlmeSA9IHZvaWQgMDtcbmNvbnN0IG9zID0gcmVxdWlyZShcIm9zXCIpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuY29uc3QgSVNfV0lORE9XU19QTEFURk9STSA9IG9zLnBsYXRmb3JtKCkgPT09ICd3aW4zMic7XG5jb25zdCBMRUFESU5HX0RPVF9TRUdNRU5UX0NIQVJBQ1RFUlNfQ09VTlQgPSAyOyAvLyAuLyBvciAuXFxcXFxuLyoqXG4gKiBBbGwgbm9uLWVzY2FwZWQgc3BlY2lhbCBjaGFyYWN0ZXJzLlxuICogUG9zaXg6ICgpKj9bXFxde3x9LCAhK0AgYmVmb3JlICgsICEgYXQgdGhlIGJlZ2lubmluZywgXFxcXCBiZWZvcmUgbm9uLXNwZWNpYWwgY2hhcmFjdGVycy5cbiAqIFdpbmRvd3M6ICgpe30sICErQCBiZWZvcmUgKCwgISBhdCB0aGUgYmVnaW5uaW5nLlxuICovXG5jb25zdCBQT1NJWF9VTkVTQ0FQRURfR0xPQl9TWU1CT0xTX1JFID0gLyhcXFxcPykoWygpKj9bXFxde3x9XXxeIXxbIStAXSg/PVxcKCl8XFxcXCg/IVshKCkqKz9AW1xcXXt8fV0pKS9nO1xuY29uc3QgV0lORE9XU19VTkVTQ0FQRURfR0xPQl9TWU1CT0xTX1JFID0gLyhcXFxcPykoWygpe31dfF4hfFshK0BdKD89XFwoKSkvZztcbi8qKlxuICogVGhlIGRldmljZSBwYXRoIChcXFxcLlxcIG9yIFxcXFw/XFwpLlxuICogaHR0cHM6Ly9sZWFybi5taWNyb3NvZnQuY29tL2VuLXVzL2RvdG5ldC9zdGFuZGFyZC9pby9maWxlLXBhdGgtZm9ybWF0cyNkb3MtZGV2aWNlLXBhdGhzXG4gKi9cbmNvbnN0IERPU19ERVZJQ0VfUEFUSF9SRSA9IC9eXFxcXFxcXFwoWy4/XSkvO1xuLyoqXG4gKiBBbGwgYmFja3NsYXNoZXMgZXhjZXB0IHRob3NlIGVzY2FwaW5nIHNwZWNpYWwgY2hhcmFjdGVycy5cbiAqIFdpbmRvd3M6ICEoKStAe31cbiAqIGh0dHBzOi8vbGVhcm4ubWljcm9zb2Z0LmNvbS9lbi11cy93aW5kb3dzL3dpbjMyL2ZpbGVpby9uYW1pbmctYS1maWxlI25hbWluZy1jb252ZW50aW9uc1xuICovXG5jb25zdCBXSU5ET1dTX0JBQ0tTTEFTSEVTX1JFID0gL1xcXFwoPyFbISgpK0B7fV0pL2c7XG4vKipcbiAqIERlc2lnbmVkIHRvIHdvcmsgb25seSB3aXRoIHNpbXBsZSBwYXRoczogYGRpclxcXFxmaWxlYC5cbiAqL1xuZnVuY3Rpb24gdW5peGlmeShmaWxlcGF0aCkge1xuICAgIHJldHVybiBmaWxlcGF0aC5yZXBsYWNlKC9cXFxcL2csICcvJyk7XG59XG5leHBvcnRzLnVuaXhpZnkgPSB1bml4aWZ5O1xuZnVuY3Rpb24gbWFrZUFic29sdXRlKGN3ZCwgZmlsZXBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5yZXNvbHZlKGN3ZCwgZmlsZXBhdGgpO1xufVxuZXhwb3J0cy5tYWtlQWJzb2x1dGUgPSBtYWtlQWJzb2x1dGU7XG5mdW5jdGlvbiByZW1vdmVMZWFkaW5nRG90U2VnbWVudChlbnRyeSkge1xuICAgIC8vIFdlIGRvIG5vdCB1c2UgYHN0YXJ0c1dpdGhgIGJlY2F1c2UgdGhpcyBpcyAxMHggc2xvd2VyIHRoYW4gY3VycmVudCBpbXBsZW1lbnRhdGlvbiBmb3Igc29tZSBjYXNlcy5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1zdHJpbmctc3RhcnRzLWVuZHMtd2l0aFxuICAgIGlmIChlbnRyeS5jaGFyQXQoMCkgPT09ICcuJykge1xuICAgICAgICBjb25zdCBzZWNvbmRDaGFyYWN0ZXJ5ID0gZW50cnkuY2hhckF0KDEpO1xuICAgICAgICBpZiAoc2Vjb25kQ2hhcmFjdGVyeSA9PT0gJy8nIHx8IHNlY29uZENoYXJhY3RlcnkgPT09ICdcXFxcJykge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LnNsaWNlKExFQURJTkdfRE9UX1NFR01FTlRfQ0hBUkFDVEVSU19DT1VOVCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVudHJ5O1xufVxuZXhwb3J0cy5yZW1vdmVMZWFkaW5nRG90U2VnbWVudCA9IHJlbW92ZUxlYWRpbmdEb3RTZWdtZW50O1xuZXhwb3J0cy5lc2NhcGUgPSBJU19XSU5ET1dTX1BMQVRGT1JNID8gZXNjYXBlV2luZG93c1BhdGggOiBlc2NhcGVQb3NpeFBhdGg7XG5mdW5jdGlvbiBlc2NhcGVXaW5kb3dzUGF0aChwYXR0ZXJuKSB7XG4gICAgcmV0dXJuIHBhdHRlcm4ucmVwbGFjZShXSU5ET1dTX1VORVNDQVBFRF9HTE9CX1NZTUJPTFNfUkUsICdcXFxcJDInKTtcbn1cbmV4cG9ydHMuZXNjYXBlV2luZG93c1BhdGggPSBlc2NhcGVXaW5kb3dzUGF0aDtcbmZ1bmN0aW9uIGVzY2FwZVBvc2l4UGF0aChwYXR0ZXJuKSB7XG4gICAgcmV0dXJuIHBhdHRlcm4ucmVwbGFjZShQT1NJWF9VTkVTQ0FQRURfR0xPQl9TWU1CT0xTX1JFLCAnXFxcXCQyJyk7XG59XG5leHBvcnRzLmVzY2FwZVBvc2l4UGF0aCA9IGVzY2FwZVBvc2l4UGF0aDtcbmV4cG9ydHMuY29udmVydFBhdGhUb1BhdHRlcm4gPSBJU19XSU5ET1dTX1BMQVRGT1JNID8gY29udmVydFdpbmRvd3NQYXRoVG9QYXR0ZXJuIDogY29udmVydFBvc2l4UGF0aFRvUGF0dGVybjtcbmZ1bmN0aW9uIGNvbnZlcnRXaW5kb3dzUGF0aFRvUGF0dGVybihmaWxlcGF0aCkge1xuICAgIHJldHVybiBlc2NhcGVXaW5kb3dzUGF0aChmaWxlcGF0aClcbiAgICAgICAgLnJlcGxhY2UoRE9TX0RFVklDRV9QQVRIX1JFLCAnLy8kMScpXG4gICAgICAgIC5yZXBsYWNlKFdJTkRPV1NfQkFDS1NMQVNIRVNfUkUsICcvJyk7XG59XG5leHBvcnRzLmNvbnZlcnRXaW5kb3dzUGF0aFRvUGF0dGVybiA9IGNvbnZlcnRXaW5kb3dzUGF0aFRvUGF0dGVybjtcbmZ1bmN0aW9uIGNvbnZlcnRQb3NpeFBhdGhUb1BhdHRlcm4oZmlsZXBhdGgpIHtcbiAgICByZXR1cm4gZXNjYXBlUG9zaXhQYXRoKGZpbGVwYXRoKTtcbn1cbmV4cG9ydHMuY29udmVydFBvc2l4UGF0aFRvUGF0dGVybiA9IGNvbnZlcnRQb3NpeFBhdGhUb1BhdHRlcm47XG4iLCAiLyohXG4gKiBpcy1leHRnbG9iIDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9pcy1leHRnbG9iPlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE2LCBKb24gU2NobGlua2VydC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzRXh0Z2xvYihzdHIpIHtcbiAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnIHx8IHN0ciA9PT0gJycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgbWF0Y2g7XG4gIHdoaWxlICgobWF0Y2ggPSAvKFxcXFwpLnwoW0A/ISsqXVxcKC4qXFwpKS9nLmV4ZWMoc3RyKSkpIHtcbiAgICBpZiAobWF0Y2hbMl0pIHJldHVybiB0cnVlO1xuICAgIHN0ciA9IHN0ci5zbGljZShtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuIiwgIi8qIVxuICogaXMtZ2xvYiA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvaXMtZ2xvYj5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNywgSm9uIFNjaGxpbmtlcnQuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxudmFyIGlzRXh0Z2xvYiA9IHJlcXVpcmUoJ2lzLWV4dGdsb2InKTtcbnZhciBjaGFycyA9IHsgJ3snOiAnfScsICcoJzogJyknLCAnWyc6ICddJ307XG52YXIgc3RyaWN0Q2hlY2sgPSBmdW5jdGlvbihzdHIpIHtcbiAgaWYgKHN0clswXSA9PT0gJyEnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIHBpcGVJbmRleCA9IC0yO1xuICB2YXIgY2xvc2VTcXVhcmVJbmRleCA9IC0yO1xuICB2YXIgY2xvc2VDdXJseUluZGV4ID0gLTI7XG4gIHZhciBjbG9zZVBhcmVuSW5kZXggPSAtMjtcbiAgdmFyIGJhY2tTbGFzaEluZGV4ID0gLTI7XG4gIHdoaWxlIChpbmRleCA8IHN0ci5sZW5ndGgpIHtcbiAgICBpZiAoc3RyW2luZGV4XSA9PT0gJyonKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RyW2luZGV4ICsgMV0gPT09ICc/JyAmJiAvW1xcXS4rKV0vLnRlc3Qoc3RyW2luZGV4XSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChjbG9zZVNxdWFyZUluZGV4ICE9PSAtMSAmJiBzdHJbaW5kZXhdID09PSAnWycgJiYgc3RyW2luZGV4ICsgMV0gIT09ICddJykge1xuICAgICAgaWYgKGNsb3NlU3F1YXJlSW5kZXggPCBpbmRleCkge1xuICAgICAgICBjbG9zZVNxdWFyZUluZGV4ID0gc3RyLmluZGV4T2YoJ10nLCBpbmRleCk7XG4gICAgICB9XG4gICAgICBpZiAoY2xvc2VTcXVhcmVJbmRleCA+IGluZGV4KSB7XG4gICAgICAgIGlmIChiYWNrU2xhc2hJbmRleCA9PT0gLTEgfHwgYmFja1NsYXNoSW5kZXggPiBjbG9zZVNxdWFyZUluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgYmFja1NsYXNoSW5kZXggPSBzdHIuaW5kZXhPZignXFxcXCcsIGluZGV4KTtcbiAgICAgICAgaWYgKGJhY2tTbGFzaEluZGV4ID09PSAtMSB8fCBiYWNrU2xhc2hJbmRleCA+IGNsb3NlU3F1YXJlSW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjbG9zZUN1cmx5SW5kZXggIT09IC0xICYmIHN0cltpbmRleF0gPT09ICd7JyAmJiBzdHJbaW5kZXggKyAxXSAhPT0gJ30nKSB7XG4gICAgICBjbG9zZUN1cmx5SW5kZXggPSBzdHIuaW5kZXhPZignfScsIGluZGV4KTtcbiAgICAgIGlmIChjbG9zZUN1cmx5SW5kZXggPiBpbmRleCkge1xuICAgICAgICBiYWNrU2xhc2hJbmRleCA9IHN0ci5pbmRleE9mKCdcXFxcJywgaW5kZXgpO1xuICAgICAgICBpZiAoYmFja1NsYXNoSW5kZXggPT09IC0xIHx8IGJhY2tTbGFzaEluZGV4ID4gY2xvc2VDdXJseUluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2xvc2VQYXJlbkluZGV4ICE9PSAtMSAmJiBzdHJbaW5kZXhdID09PSAnKCcgJiYgc3RyW2luZGV4ICsgMV0gPT09ICc/JyAmJiAvWzohPV0vLnRlc3Qoc3RyW2luZGV4ICsgMl0pICYmIHN0cltpbmRleCArIDNdICE9PSAnKScpIHtcbiAgICAgIGNsb3NlUGFyZW5JbmRleCA9IHN0ci5pbmRleE9mKCcpJywgaW5kZXgpO1xuICAgICAgaWYgKGNsb3NlUGFyZW5JbmRleCA+IGluZGV4KSB7XG4gICAgICAgIGJhY2tTbGFzaEluZGV4ID0gc3RyLmluZGV4T2YoJ1xcXFwnLCBpbmRleCk7XG4gICAgICAgIGlmIChiYWNrU2xhc2hJbmRleCA9PT0gLTEgfHwgYmFja1NsYXNoSW5kZXggPiBjbG9zZVBhcmVuSW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwaXBlSW5kZXggIT09IC0xICYmIHN0cltpbmRleF0gPT09ICcoJyAmJiBzdHJbaW5kZXggKyAxXSAhPT0gJ3wnKSB7XG4gICAgICBpZiAocGlwZUluZGV4IDwgaW5kZXgpIHtcbiAgICAgICAgcGlwZUluZGV4ID0gc3RyLmluZGV4T2YoJ3wnLCBpbmRleCk7XG4gICAgICB9XG4gICAgICBpZiAocGlwZUluZGV4ICE9PSAtMSAmJiBzdHJbcGlwZUluZGV4ICsgMV0gIT09ICcpJykge1xuICAgICAgICBjbG9zZVBhcmVuSW5kZXggPSBzdHIuaW5kZXhPZignKScsIHBpcGVJbmRleCk7XG4gICAgICAgIGlmIChjbG9zZVBhcmVuSW5kZXggPiBwaXBlSW5kZXgpIHtcbiAgICAgICAgICBiYWNrU2xhc2hJbmRleCA9IHN0ci5pbmRleE9mKCdcXFxcJywgcGlwZUluZGV4KTtcbiAgICAgICAgICBpZiAoYmFja1NsYXNoSW5kZXggPT09IC0xIHx8IGJhY2tTbGFzaEluZGV4ID4gY2xvc2VQYXJlbkluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RyW2luZGV4XSA9PT0gJ1xcXFwnKSB7XG4gICAgICB2YXIgb3BlbiA9IHN0cltpbmRleCArIDFdO1xuICAgICAgaW5kZXggKz0gMjtcbiAgICAgIHZhciBjbG9zZSA9IGNoYXJzW29wZW5dO1xuXG4gICAgICBpZiAoY2xvc2UpIHtcbiAgICAgICAgdmFyIG4gPSBzdHIuaW5kZXhPZihjbG9zZSwgaW5kZXgpO1xuICAgICAgICBpZiAobiAhPT0gLTEpIHtcbiAgICAgICAgICBpbmRleCA9IG4gKyAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdHJbaW5kZXhdID09PSAnIScpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZGV4Kys7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciByZWxheGVkQ2hlY2sgPSBmdW5jdGlvbihzdHIpIHtcbiAgaWYgKHN0clswXSA9PT0gJyEnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIGluZGV4ID0gMDtcbiAgd2hpbGUgKGluZGV4IDwgc3RyLmxlbmd0aCkge1xuICAgIGlmICgvWyo/e30oKVtcXF1dLy50ZXN0KHN0cltpbmRleF0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RyW2luZGV4XSA9PT0gJ1xcXFwnKSB7XG4gICAgICB2YXIgb3BlbiA9IHN0cltpbmRleCArIDFdO1xuICAgICAgaW5kZXggKz0gMjtcbiAgICAgIHZhciBjbG9zZSA9IGNoYXJzW29wZW5dO1xuXG4gICAgICBpZiAoY2xvc2UpIHtcbiAgICAgICAgdmFyIG4gPSBzdHIuaW5kZXhPZihjbG9zZSwgaW5kZXgpO1xuICAgICAgICBpZiAobiAhPT0gLTEpIHtcbiAgICAgICAgICBpbmRleCA9IG4gKyAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdHJbaW5kZXhdID09PSAnIScpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZGV4Kys7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNHbG9iKHN0ciwgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycgfHwgc3RyID09PSAnJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChpc0V4dGdsb2Ioc3RyKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIGNoZWNrID0gc3RyaWN0Q2hlY2s7XG5cbiAgLy8gb3B0aW9uYWxseSByZWxheCBjaGVja1xuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnN0cmljdCA9PT0gZmFsc2UpIHtcbiAgICBjaGVjayA9IHJlbGF4ZWRDaGVjaztcbiAgfVxuXG4gIHJldHVybiBjaGVjayhzdHIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBpc0dsb2IgPSByZXF1aXJlKCdpcy1nbG9iJyk7XG52YXIgcGF0aFBvc2l4RGlybmFtZSA9IHJlcXVpcmUoJ3BhdGgnKS5wb3NpeC5kaXJuYW1lO1xudmFyIGlzV2luMzIgPSByZXF1aXJlKCdvcycpLnBsYXRmb3JtKCkgPT09ICd3aW4zMic7XG5cbnZhciBzbGFzaCA9ICcvJztcbnZhciBiYWNrc2xhc2ggPSAvXFxcXC9nO1xudmFyIGVuY2xvc3VyZSA9IC9bXFx7XFxbXS4qW1xcfVxcXV0kLztcbnZhciBnbG9iYnkgPSAvKF58W15cXFxcXSkoW1xce1xcW118XFwoW15cXCldKyQpLztcbnZhciBlc2NhcGVkID0gL1xcXFwoW1xcIVxcKlxcP1xcfFxcW1xcXVxcKFxcKVxce1xcfV0pL2c7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuZmxpcEJhY2tzbGFzaGVzPXRydWVdXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdsb2JQYXJlbnQoc3RyLCBvcHRzKSB7XG4gIHZhciBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7IGZsaXBCYWNrc2xhc2hlczogdHJ1ZSB9LCBvcHRzKTtcblxuICAvLyBmbGlwIHdpbmRvd3MgcGF0aCBzZXBhcmF0b3JzXG4gIGlmIChvcHRpb25zLmZsaXBCYWNrc2xhc2hlcyAmJiBpc1dpbjMyICYmIHN0ci5pbmRleE9mKHNsYXNoKSA8IDApIHtcbiAgICBzdHIgPSBzdHIucmVwbGFjZShiYWNrc2xhc2gsIHNsYXNoKTtcbiAgfVxuXG4gIC8vIHNwZWNpYWwgY2FzZSBmb3Igc3RyaW5ncyBlbmRpbmcgaW4gZW5jbG9zdXJlIGNvbnRhaW5pbmcgcGF0aCBzZXBhcmF0b3JcbiAgaWYgKGVuY2xvc3VyZS50ZXN0KHN0cikpIHtcbiAgICBzdHIgKz0gc2xhc2g7XG4gIH1cblxuICAvLyBwcmVzZXJ2ZXMgZnVsbCBwYXRoIGluIGNhc2Ugb2YgdHJhaWxpbmcgcGF0aCBzZXBhcmF0b3JcbiAgc3RyICs9ICdhJztcblxuICAvLyByZW1vdmUgcGF0aCBwYXJ0cyB0aGF0IGFyZSBnbG9iYnlcbiAgZG8ge1xuICAgIHN0ciA9IHBhdGhQb3NpeERpcm5hbWUoc3RyKTtcbiAgfSB3aGlsZSAoaXNHbG9iKHN0cikgfHwgZ2xvYmJ5LnRlc3Qoc3RyKSk7XG5cbiAgLy8gcmVtb3ZlIGVzY2FwZSBjaGFycyBhbmQgcmV0dXJuIHJlc3VsdFxuICByZXR1cm4gc3RyLnJlcGxhY2UoZXNjYXBlZCwgJyQxJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5pc0ludGVnZXIgPSBudW0gPT4ge1xuICBpZiAodHlwZW9mIG51bSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcihudW0pO1xuICB9XG4gIGlmICh0eXBlb2YgbnVtID09PSAnc3RyaW5nJyAmJiBudW0udHJpbSgpICE9PSAnJykge1xuICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKE51bWJlcihudW0pKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIEZpbmQgYSBub2RlIG9mIHRoZSBnaXZlbiB0eXBlXG4gKi9cblxuZXhwb3J0cy5maW5kID0gKG5vZGUsIHR5cGUpID0+IG5vZGUubm9kZXMuZmluZChub2RlID0+IG5vZGUudHlwZSA9PT0gdHlwZSk7XG5cbi8qKlxuICogRmluZCBhIG5vZGUgb2YgdGhlIGdpdmVuIHR5cGVcbiAqL1xuXG5leHBvcnRzLmV4Y2VlZHNMaW1pdCA9IChtaW4sIG1heCwgc3RlcCA9IDEsIGxpbWl0KSA9PiB7XG4gIGlmIChsaW1pdCA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgaWYgKCFleHBvcnRzLmlzSW50ZWdlcihtaW4pIHx8ICFleHBvcnRzLmlzSW50ZWdlcihtYXgpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiAoKE51bWJlcihtYXgpIC0gTnVtYmVyKG1pbikpIC8gTnVtYmVyKHN0ZXApKSA+PSBsaW1pdDtcbn07XG5cbi8qKlxuICogRXNjYXBlIHRoZSBnaXZlbiBub2RlIHdpdGggJ1xcXFwnIGJlZm9yZSBub2RlLnZhbHVlXG4gKi9cblxuZXhwb3J0cy5lc2NhcGVOb2RlID0gKGJsb2NrLCBuID0gMCwgdHlwZSkgPT4ge1xuICBsZXQgbm9kZSA9IGJsb2NrLm5vZGVzW25dO1xuICBpZiAoIW5vZGUpIHJldHVybjtcblxuICBpZiAoKHR5cGUgJiYgbm9kZS50eXBlID09PSB0eXBlKSB8fCBub2RlLnR5cGUgPT09ICdvcGVuJyB8fCBub2RlLnR5cGUgPT09ICdjbG9zZScpIHtcbiAgICBpZiAobm9kZS5lc2NhcGVkICE9PSB0cnVlKSB7XG4gICAgICBub2RlLnZhbHVlID0gJ1xcXFwnICsgbm9kZS52YWx1ZTtcbiAgICAgIG5vZGUuZXNjYXBlZCA9IHRydWU7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gYnJhY2Ugbm9kZSBzaG91bGQgYmUgZW5jbG9zZWQgaW4gbGl0ZXJhbCBicmFjZXNcbiAqL1xuXG5leHBvcnRzLmVuY2xvc2VCcmFjZSA9IG5vZGUgPT4ge1xuICBpZiAobm9kZS50eXBlICE9PSAnYnJhY2UnKSByZXR1cm4gZmFsc2U7XG4gIGlmICgobm9kZS5jb21tYXMgPj4gMCArIG5vZGUucmFuZ2VzID4+IDApID09PSAwKSB7XG4gICAgbm9kZS5pbnZhbGlkID0gdHJ1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhIGJyYWNlIG5vZGUgaXMgaW52YWxpZC5cbiAqL1xuXG5leHBvcnRzLmlzSW52YWxpZEJyYWNlID0gYmxvY2sgPT4ge1xuICBpZiAoYmxvY2sudHlwZSAhPT0gJ2JyYWNlJykgcmV0dXJuIGZhbHNlO1xuICBpZiAoYmxvY2suaW52YWxpZCA9PT0gdHJ1ZSB8fCBibG9jay5kb2xsYXIpIHJldHVybiB0cnVlO1xuICBpZiAoKGJsb2NrLmNvbW1hcyA+PiAwICsgYmxvY2sucmFuZ2VzID4+IDApID09PSAwKSB7XG4gICAgYmxvY2suaW52YWxpZCA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKGJsb2NrLm9wZW4gIT09IHRydWUgfHwgYmxvY2suY2xvc2UgIT09IHRydWUpIHtcbiAgICBibG9jay5pbnZhbGlkID0gdHJ1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhIG5vZGUgaXMgYW4gb3BlbiBvciBjbG9zZSBub2RlXG4gKi9cblxuZXhwb3J0cy5pc09wZW5PckNsb3NlID0gbm9kZSA9PiB7XG4gIGlmIChub2RlLnR5cGUgPT09ICdvcGVuJyB8fCBub2RlLnR5cGUgPT09ICdjbG9zZScpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gbm9kZS5vcGVuID09PSB0cnVlIHx8IG5vZGUuY2xvc2UgPT09IHRydWU7XG59O1xuXG4vKipcbiAqIFJlZHVjZSBhbiBhcnJheSBvZiB0ZXh0IG5vZGVzLlxuICovXG5cbmV4cG9ydHMucmVkdWNlID0gbm9kZXMgPT4gbm9kZXMucmVkdWNlKChhY2MsIG5vZGUpID0+IHtcbiAgaWYgKG5vZGUudHlwZSA9PT0gJ3RleHQnKSBhY2MucHVzaChub2RlLnZhbHVlKTtcbiAgaWYgKG5vZGUudHlwZSA9PT0gJ3JhbmdlJykgbm9kZS50eXBlID0gJ3RleHQnO1xuICByZXR1cm4gYWNjO1xufSwgW10pO1xuXG4vKipcbiAqIEZsYXR0ZW4gYW4gYXJyYXlcbiAqL1xuXG5leHBvcnRzLmZsYXR0ZW4gPSAoLi4uYXJncykgPT4ge1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgY29uc3QgZmxhdCA9IGFyciA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBlbGUgPSBhcnJbaV07XG4gICAgICBBcnJheS5pc0FycmF5KGVsZSkgPyBmbGF0KGVsZSwgcmVzdWx0KSA6IGVsZSAhPT0gdm9pZCAwICYmIHJlc3VsdC5wdXNoKGVsZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIGZsYXQoYXJncyk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKGFzdCwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIGxldCBzdHJpbmdpZnkgPSAobm9kZSwgcGFyZW50ID0ge30pID0+IHtcbiAgICBsZXQgaW52YWxpZEJsb2NrID0gb3B0aW9ucy5lc2NhcGVJbnZhbGlkICYmIHV0aWxzLmlzSW52YWxpZEJyYWNlKHBhcmVudCk7XG4gICAgbGV0IGludmFsaWROb2RlID0gbm9kZS5pbnZhbGlkID09PSB0cnVlICYmIG9wdGlvbnMuZXNjYXBlSW52YWxpZCA9PT0gdHJ1ZTtcbiAgICBsZXQgb3V0cHV0ID0gJyc7XG5cbiAgICBpZiAobm9kZS52YWx1ZSkge1xuICAgICAgaWYgKChpbnZhbGlkQmxvY2sgfHwgaW52YWxpZE5vZGUpICYmIHV0aWxzLmlzT3Blbk9yQ2xvc2Uobm9kZSkpIHtcbiAgICAgICAgcmV0dXJuICdcXFxcJyArIG5vZGUudmFsdWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gbm9kZS52YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAobm9kZS52YWx1ZSkge1xuICAgICAgcmV0dXJuIG5vZGUudmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUubm9kZXMpIHtcbiAgICAgIGZvciAobGV0IGNoaWxkIG9mIG5vZGUubm9kZXMpIHtcbiAgICAgICAgb3V0cHV0ICs9IHN0cmluZ2lmeShjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH07XG5cbiAgcmV0dXJuIHN0cmluZ2lmeShhc3QpO1xufTtcblxuIiwgIi8qIVxuICogaXMtbnVtYmVyIDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9pcy1udW1iZXI+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEpvbiBTY2hsaW5rZXJ0LlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihudW0pIHtcbiAgaWYgKHR5cGVvZiBudW0gPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIG51bSAtIG51bSA9PT0gMDtcbiAgfVxuICBpZiAodHlwZW9mIG51bSA9PT0gJ3N0cmluZycgJiYgbnVtLnRyaW0oKSAhPT0gJycpIHtcbiAgICByZXR1cm4gTnVtYmVyLmlzRmluaXRlID8gTnVtYmVyLmlzRmluaXRlKCtudW0pIDogaXNGaW5pdGUoK251bSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcbiIsICIvKiFcbiAqIHRvLXJlZ2V4LXJhbmdlIDxodHRwczovL2dpdGh1Yi5jb20vbWljcm9tYXRjaC90by1yZWdleC1yYW5nZT5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgSm9uIFNjaGxpbmtlcnQuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBpc051bWJlciA9IHJlcXVpcmUoJ2lzLW51bWJlcicpO1xuXG5jb25zdCB0b1JlZ2V4UmFuZ2UgPSAobWluLCBtYXgsIG9wdGlvbnMpID0+IHtcbiAgaWYgKGlzTnVtYmVyKG1pbikgPT09IGZhbHNlKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndG9SZWdleFJhbmdlOiBleHBlY3RlZCB0aGUgZmlyc3QgYXJndW1lbnQgdG8gYmUgYSBudW1iZXInKTtcbiAgfVxuXG4gIGlmIChtYXggPT09IHZvaWQgMCB8fCBtaW4gPT09IG1heCkge1xuICAgIHJldHVybiBTdHJpbmcobWluKTtcbiAgfVxuXG4gIGlmIChpc051bWJlcihtYXgpID09PSBmYWxzZSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3RvUmVnZXhSYW5nZTogZXhwZWN0ZWQgdGhlIHNlY29uZCBhcmd1bWVudCB0byBiZSBhIG51bWJlci4nKTtcbiAgfVxuXG4gIGxldCBvcHRzID0geyByZWxheFplcm9zOiB0cnVlLCAuLi5vcHRpb25zIH07XG4gIGlmICh0eXBlb2Ygb3B0cy5zdHJpY3RaZXJvcyA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0cy5yZWxheFplcm9zID0gb3B0cy5zdHJpY3RaZXJvcyA9PT0gZmFsc2U7XG4gIH1cblxuICBsZXQgcmVsYXggPSBTdHJpbmcob3B0cy5yZWxheFplcm9zKTtcbiAgbGV0IHNob3J0aGFuZCA9IFN0cmluZyhvcHRzLnNob3J0aGFuZCk7XG4gIGxldCBjYXB0dXJlID0gU3RyaW5nKG9wdHMuY2FwdHVyZSk7XG4gIGxldCB3cmFwID0gU3RyaW5nKG9wdHMud3JhcCk7XG4gIGxldCBjYWNoZUtleSA9IG1pbiArICc6JyArIG1heCArICc9JyArIHJlbGF4ICsgc2hvcnRoYW5kICsgY2FwdHVyZSArIHdyYXA7XG5cbiAgaWYgKHRvUmVnZXhSYW5nZS5jYWNoZS5oYXNPd25Qcm9wZXJ0eShjYWNoZUtleSkpIHtcbiAgICByZXR1cm4gdG9SZWdleFJhbmdlLmNhY2hlW2NhY2hlS2V5XS5yZXN1bHQ7XG4gIH1cblxuICBsZXQgYSA9IE1hdGgubWluKG1pbiwgbWF4KTtcbiAgbGV0IGIgPSBNYXRoLm1heChtaW4sIG1heCk7XG5cbiAgaWYgKE1hdGguYWJzKGEgLSBiKSA9PT0gMSkge1xuICAgIGxldCByZXN1bHQgPSBtaW4gKyAnfCcgKyBtYXg7XG4gICAgaWYgKG9wdHMuY2FwdHVyZSkge1xuICAgICAgcmV0dXJuIGAoJHtyZXN1bHR9KWA7XG4gICAgfVxuICAgIGlmIChvcHRzLndyYXAgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICByZXR1cm4gYCg/OiR7cmVzdWx0fSlgO1xuICB9XG5cbiAgbGV0IGlzUGFkZGVkID0gaGFzUGFkZGluZyhtaW4pIHx8IGhhc1BhZGRpbmcobWF4KTtcbiAgbGV0IHN0YXRlID0geyBtaW4sIG1heCwgYSwgYiB9O1xuICBsZXQgcG9zaXRpdmVzID0gW107XG4gIGxldCBuZWdhdGl2ZXMgPSBbXTtcblxuICBpZiAoaXNQYWRkZWQpIHtcbiAgICBzdGF0ZS5pc1BhZGRlZCA9IGlzUGFkZGVkO1xuICAgIHN0YXRlLm1heExlbiA9IFN0cmluZyhzdGF0ZS5tYXgpLmxlbmd0aDtcbiAgfVxuXG4gIGlmIChhIDwgMCkge1xuICAgIGxldCBuZXdNaW4gPSBiIDwgMCA/IE1hdGguYWJzKGIpIDogMTtcbiAgICBuZWdhdGl2ZXMgPSBzcGxpdFRvUGF0dGVybnMobmV3TWluLCBNYXRoLmFicyhhKSwgc3RhdGUsIG9wdHMpO1xuICAgIGEgPSBzdGF0ZS5hID0gMDtcbiAgfVxuXG4gIGlmIChiID49IDApIHtcbiAgICBwb3NpdGl2ZXMgPSBzcGxpdFRvUGF0dGVybnMoYSwgYiwgc3RhdGUsIG9wdHMpO1xuICB9XG5cbiAgc3RhdGUubmVnYXRpdmVzID0gbmVnYXRpdmVzO1xuICBzdGF0ZS5wb3NpdGl2ZXMgPSBwb3NpdGl2ZXM7XG4gIHN0YXRlLnJlc3VsdCA9IGNvbGxhdGVQYXR0ZXJucyhuZWdhdGl2ZXMsIHBvc2l0aXZlcywgb3B0cyk7XG5cbiAgaWYgKG9wdHMuY2FwdHVyZSA9PT0gdHJ1ZSkge1xuICAgIHN0YXRlLnJlc3VsdCA9IGAoJHtzdGF0ZS5yZXN1bHR9KWA7XG4gIH0gZWxzZSBpZiAob3B0cy53cmFwICE9PSBmYWxzZSAmJiAocG9zaXRpdmVzLmxlbmd0aCArIG5lZ2F0aXZlcy5sZW5ndGgpID4gMSkge1xuICAgIHN0YXRlLnJlc3VsdCA9IGAoPzoke3N0YXRlLnJlc3VsdH0pYDtcbiAgfVxuXG4gIHRvUmVnZXhSYW5nZS5jYWNoZVtjYWNoZUtleV0gPSBzdGF0ZTtcbiAgcmV0dXJuIHN0YXRlLnJlc3VsdDtcbn07XG5cbmZ1bmN0aW9uIGNvbGxhdGVQYXR0ZXJucyhuZWcsIHBvcywgb3B0aW9ucykge1xuICBsZXQgb25seU5lZ2F0aXZlID0gZmlsdGVyUGF0dGVybnMobmVnLCBwb3MsICctJywgZmFsc2UsIG9wdGlvbnMpIHx8IFtdO1xuICBsZXQgb25seVBvc2l0aXZlID0gZmlsdGVyUGF0dGVybnMocG9zLCBuZWcsICcnLCBmYWxzZSwgb3B0aW9ucykgfHwgW107XG4gIGxldCBpbnRlcnNlY3RlZCA9IGZpbHRlclBhdHRlcm5zKG5lZywgcG9zLCAnLT8nLCB0cnVlLCBvcHRpb25zKSB8fCBbXTtcbiAgbGV0IHN1YnBhdHRlcm5zID0gb25seU5lZ2F0aXZlLmNvbmNhdChpbnRlcnNlY3RlZCkuY29uY2F0KG9ubHlQb3NpdGl2ZSk7XG4gIHJldHVybiBzdWJwYXR0ZXJucy5qb2luKCd8Jyk7XG59XG5cbmZ1bmN0aW9uIHNwbGl0VG9SYW5nZXMobWluLCBtYXgpIHtcbiAgbGV0IG5pbmVzID0gMTtcbiAgbGV0IHplcm9zID0gMTtcblxuICBsZXQgc3RvcCA9IGNvdW50TmluZXMobWluLCBuaW5lcyk7XG4gIGxldCBzdG9wcyA9IG5ldyBTZXQoW21heF0pO1xuXG4gIHdoaWxlIChtaW4gPD0gc3RvcCAmJiBzdG9wIDw9IG1heCkge1xuICAgIHN0b3BzLmFkZChzdG9wKTtcbiAgICBuaW5lcyArPSAxO1xuICAgIHN0b3AgPSBjb3VudE5pbmVzKG1pbiwgbmluZXMpO1xuICB9XG5cbiAgc3RvcCA9IGNvdW50WmVyb3MobWF4ICsgMSwgemVyb3MpIC0gMTtcblxuICB3aGlsZSAobWluIDwgc3RvcCAmJiBzdG9wIDw9IG1heCkge1xuICAgIHN0b3BzLmFkZChzdG9wKTtcbiAgICB6ZXJvcyArPSAxO1xuICAgIHN0b3AgPSBjb3VudFplcm9zKG1heCArIDEsIHplcm9zKSAtIDE7XG4gIH1cblxuICBzdG9wcyA9IFsuLi5zdG9wc107XG4gIHN0b3BzLnNvcnQoY29tcGFyZSk7XG4gIHJldHVybiBzdG9wcztcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgcmFuZ2UgdG8gYSByZWdleCBwYXR0ZXJuXG4gKiBAcGFyYW0ge051bWJlcn0gYHN0YXJ0YFxuICogQHBhcmFtIHtOdW1iZXJ9IGBzdG9wYFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIHJhbmdlVG9QYXR0ZXJuKHN0YXJ0LCBzdG9wLCBvcHRpb25zKSB7XG4gIGlmIChzdGFydCA9PT0gc3RvcCkge1xuICAgIHJldHVybiB7IHBhdHRlcm46IHN0YXJ0LCBjb3VudDogW10sIGRpZ2l0czogMCB9O1xuICB9XG5cbiAgbGV0IHppcHBlZCA9IHppcChzdGFydCwgc3RvcCk7XG4gIGxldCBkaWdpdHMgPSB6aXBwZWQubGVuZ3RoO1xuICBsZXQgcGF0dGVybiA9ICcnO1xuICBsZXQgY291bnQgPSAwO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGlnaXRzOyBpKyspIHtcbiAgICBsZXQgW3N0YXJ0RGlnaXQsIHN0b3BEaWdpdF0gPSB6aXBwZWRbaV07XG5cbiAgICBpZiAoc3RhcnREaWdpdCA9PT0gc3RvcERpZ2l0KSB7XG4gICAgICBwYXR0ZXJuICs9IHN0YXJ0RGlnaXQ7XG5cbiAgICB9IGVsc2UgaWYgKHN0YXJ0RGlnaXQgIT09ICcwJyB8fCBzdG9wRGlnaXQgIT09ICc5Jykge1xuICAgICAgcGF0dGVybiArPSB0b0NoYXJhY3RlckNsYXNzKHN0YXJ0RGlnaXQsIHN0b3BEaWdpdCwgb3B0aW9ucyk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgY291bnQrKztcbiAgICB9XG4gIH1cblxuICBpZiAoY291bnQpIHtcbiAgICBwYXR0ZXJuICs9IG9wdGlvbnMuc2hvcnRoYW5kID09PSB0cnVlID8gJ1xcXFxkJyA6ICdbMC05XSc7XG4gIH1cblxuICByZXR1cm4geyBwYXR0ZXJuLCBjb3VudDogW2NvdW50XSwgZGlnaXRzIH07XG59XG5cbmZ1bmN0aW9uIHNwbGl0VG9QYXR0ZXJucyhtaW4sIG1heCwgdG9rLCBvcHRpb25zKSB7XG4gIGxldCByYW5nZXMgPSBzcGxpdFRvUmFuZ2VzKG1pbiwgbWF4KTtcbiAgbGV0IHRva2VucyA9IFtdO1xuICBsZXQgc3RhcnQgPSBtaW47XG4gIGxldCBwcmV2O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IG1heCA9IHJhbmdlc1tpXTtcbiAgICBsZXQgb2JqID0gcmFuZ2VUb1BhdHRlcm4oU3RyaW5nKHN0YXJ0KSwgU3RyaW5nKG1heCksIG9wdGlvbnMpO1xuICAgIGxldCB6ZXJvcyA9ICcnO1xuXG4gICAgaWYgKCF0b2suaXNQYWRkZWQgJiYgcHJldiAmJiBwcmV2LnBhdHRlcm4gPT09IG9iai5wYXR0ZXJuKSB7XG4gICAgICBpZiAocHJldi5jb3VudC5sZW5ndGggPiAxKSB7XG4gICAgICAgIHByZXYuY291bnQucG9wKCk7XG4gICAgICB9XG5cbiAgICAgIHByZXYuY291bnQucHVzaChvYmouY291bnRbMF0pO1xuICAgICAgcHJldi5zdHJpbmcgPSBwcmV2LnBhdHRlcm4gKyB0b1F1YW50aWZpZXIocHJldi5jb3VudCk7XG4gICAgICBzdGFydCA9IG1heCArIDE7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAodG9rLmlzUGFkZGVkKSB7XG4gICAgICB6ZXJvcyA9IHBhZFplcm9zKG1heCwgdG9rLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBvYmouc3RyaW5nID0gemVyb3MgKyBvYmoucGF0dGVybiArIHRvUXVhbnRpZmllcihvYmouY291bnQpO1xuICAgIHRva2Vucy5wdXNoKG9iaik7XG4gICAgc3RhcnQgPSBtYXggKyAxO1xuICAgIHByZXYgPSBvYmo7XG4gIH1cblxuICByZXR1cm4gdG9rZW5zO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJQYXR0ZXJucyhhcnIsIGNvbXBhcmlzb24sIHByZWZpeCwgaW50ZXJzZWN0aW9uLCBvcHRpb25zKSB7XG4gIGxldCByZXN1bHQgPSBbXTtcblxuICBmb3IgKGxldCBlbGUgb2YgYXJyKSB7XG4gICAgbGV0IHsgc3RyaW5nIH0gPSBlbGU7XG5cbiAgICAvLyBvbmx5IHB1c2ggaWYgX2JvdGhfIGFyZSBuZWdhdGl2ZS4uLlxuICAgIGlmICghaW50ZXJzZWN0aW9uICYmICFjb250YWlucyhjb21wYXJpc29uLCAnc3RyaW5nJywgc3RyaW5nKSkge1xuICAgICAgcmVzdWx0LnB1c2gocHJlZml4ICsgc3RyaW5nKTtcbiAgICB9XG5cbiAgICAvLyBvciBfYm90aF8gYXJlIHBvc2l0aXZlXG4gICAgaWYgKGludGVyc2VjdGlvbiAmJiBjb250YWlucyhjb21wYXJpc29uLCAnc3RyaW5nJywgc3RyaW5nKSkge1xuICAgICAgcmVzdWx0LnB1c2gocHJlZml4ICsgc3RyaW5nKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBaaXAgc3RyaW5nc1xuICovXG5cbmZ1bmN0aW9uIHppcChhLCBiKSB7XG4gIGxldCBhcnIgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSBhcnIucHVzaChbYVtpXSwgYltpXV0pO1xuICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBjb21wYXJlKGEsIGIpIHtcbiAgcmV0dXJuIGEgPiBiID8gMSA6IGIgPiBhID8gLTEgOiAwO1xufVxuXG5mdW5jdGlvbiBjb250YWlucyhhcnIsIGtleSwgdmFsKSB7XG4gIHJldHVybiBhcnIuc29tZShlbGUgPT4gZWxlW2tleV0gPT09IHZhbCk7XG59XG5cbmZ1bmN0aW9uIGNvdW50TmluZXMobWluLCBsZW4pIHtcbiAgcmV0dXJuIE51bWJlcihTdHJpbmcobWluKS5zbGljZSgwLCAtbGVuKSArICc5Jy5yZXBlYXQobGVuKSk7XG59XG5cbmZ1bmN0aW9uIGNvdW50WmVyb3MoaW50ZWdlciwgemVyb3MpIHtcbiAgcmV0dXJuIGludGVnZXIgLSAoaW50ZWdlciAlIE1hdGgucG93KDEwLCB6ZXJvcykpO1xufVxuXG5mdW5jdGlvbiB0b1F1YW50aWZpZXIoZGlnaXRzKSB7XG4gIGxldCBbc3RhcnQgPSAwLCBzdG9wID0gJyddID0gZGlnaXRzO1xuICBpZiAoc3RvcCB8fCBzdGFydCA+IDEpIHtcbiAgICByZXR1cm4gYHske3N0YXJ0ICsgKHN0b3AgPyAnLCcgKyBzdG9wIDogJycpfX1gO1xuICB9XG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gdG9DaGFyYWN0ZXJDbGFzcyhhLCBiLCBvcHRpb25zKSB7XG4gIHJldHVybiBgWyR7YX0keyhiIC0gYSA9PT0gMSkgPyAnJyA6ICctJ30ke2J9XWA7XG59XG5cbmZ1bmN0aW9uIGhhc1BhZGRpbmcoc3RyKSB7XG4gIHJldHVybiAvXi0/KDArKVxcZC8udGVzdChzdHIpO1xufVxuXG5mdW5jdGlvbiBwYWRaZXJvcyh2YWx1ZSwgdG9rLCBvcHRpb25zKSB7XG4gIGlmICghdG9rLmlzUGFkZGVkKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgbGV0IGRpZmYgPSBNYXRoLmFicyh0b2subWF4TGVuIC0gU3RyaW5nKHZhbHVlKS5sZW5ndGgpO1xuICBsZXQgcmVsYXggPSBvcHRpb25zLnJlbGF4WmVyb3MgIT09IGZhbHNlO1xuXG4gIHN3aXRjaCAoZGlmZikge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiAnJztcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gcmVsYXggPyAnMD8nIDogJzAnO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiByZWxheCA/ICcwezAsMn0nIDogJzAwJztcbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gcmVsYXggPyBgMHswLCR7ZGlmZn19YCA6IGAweyR7ZGlmZn19YDtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDYWNoZVxuICovXG5cbnRvUmVnZXhSYW5nZS5jYWNoZSA9IHt9O1xudG9SZWdleFJhbmdlLmNsZWFyQ2FjaGUgPSAoKSA9PiAodG9SZWdleFJhbmdlLmNhY2hlID0ge30pO1xuXG4vKipcbiAqIEV4cG9zZSBgdG9SZWdleFJhbmdlYFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gdG9SZWdleFJhbmdlO1xuIiwgIi8qIVxuICogZmlsbC1yYW5nZSA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvZmlsbC1yYW5nZT5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgSm9uIFNjaGxpbmtlcnQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xuY29uc3QgdG9SZWdleFJhbmdlID0gcmVxdWlyZSgndG8tcmVnZXgtcmFuZ2UnKTtcblxuY29uc3QgaXNPYmplY3QgPSB2YWwgPT4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbCk7XG5cbmNvbnN0IHRyYW5zZm9ybSA9IHRvTnVtYmVyID0+IHtcbiAgcmV0dXJuIHZhbHVlID0+IHRvTnVtYmVyID09PSB0cnVlID8gTnVtYmVyKHZhbHVlKSA6IFN0cmluZyh2YWx1ZSk7XG59O1xuXG5jb25zdCBpc1ZhbGlkVmFsdWUgPSB2YWx1ZSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8ICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlICE9PSAnJyk7XG59O1xuXG5jb25zdCBpc051bWJlciA9IG51bSA9PiBOdW1iZXIuaXNJbnRlZ2VyKCtudW0pO1xuXG5jb25zdCB6ZXJvcyA9IGlucHV0ID0+IHtcbiAgbGV0IHZhbHVlID0gYCR7aW5wdXR9YDtcbiAgbGV0IGluZGV4ID0gLTE7XG4gIGlmICh2YWx1ZVswXSA9PT0gJy0nKSB2YWx1ZSA9IHZhbHVlLnNsaWNlKDEpO1xuICBpZiAodmFsdWUgPT09ICcwJykgcmV0dXJuIGZhbHNlO1xuICB3aGlsZSAodmFsdWVbKytpbmRleF0gPT09ICcwJyk7XG4gIHJldHVybiBpbmRleCA+IDA7XG59O1xuXG5jb25zdCBzdHJpbmdpZnkgPSAoc3RhcnQsIGVuZCwgb3B0aW9ucykgPT4ge1xuICBpZiAodHlwZW9mIHN0YXJ0ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgZW5kID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBvcHRpb25zLnN0cmluZ2lmeSA9PT0gdHJ1ZTtcbn07XG5cbmNvbnN0IHBhZCA9IChpbnB1dCwgbWF4TGVuZ3RoLCB0b051bWJlcikgPT4ge1xuICBpZiAobWF4TGVuZ3RoID4gMCkge1xuICAgIGxldCBkYXNoID0gaW5wdXRbMF0gPT09ICctJyA/ICctJyA6ICcnO1xuICAgIGlmIChkYXNoKSBpbnB1dCA9IGlucHV0LnNsaWNlKDEpO1xuICAgIGlucHV0ID0gKGRhc2ggKyBpbnB1dC5wYWRTdGFydChkYXNoID8gbWF4TGVuZ3RoIC0gMSA6IG1heExlbmd0aCwgJzAnKSk7XG4gIH1cbiAgaWYgKHRvTnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBTdHJpbmcoaW5wdXQpO1xuICB9XG4gIHJldHVybiBpbnB1dDtcbn07XG5cbmNvbnN0IHRvTWF4TGVuID0gKGlucHV0LCBtYXhMZW5ndGgpID0+IHtcbiAgbGV0IG5lZ2F0aXZlID0gaW5wdXRbMF0gPT09ICctJyA/ICctJyA6ICcnO1xuICBpZiAobmVnYXRpdmUpIHtcbiAgICBpbnB1dCA9IGlucHV0LnNsaWNlKDEpO1xuICAgIG1heExlbmd0aC0tO1xuICB9XG4gIHdoaWxlIChpbnB1dC5sZW5ndGggPCBtYXhMZW5ndGgpIGlucHV0ID0gJzAnICsgaW5wdXQ7XG4gIHJldHVybiBuZWdhdGl2ZSA/ICgnLScgKyBpbnB1dCkgOiBpbnB1dDtcbn07XG5cbmNvbnN0IHRvU2VxdWVuY2UgPSAocGFydHMsIG9wdGlvbnMpID0+IHtcbiAgcGFydHMubmVnYXRpdmVzLnNvcnQoKGEsIGIpID0+IGEgPCBiID8gLTEgOiBhID4gYiA/IDEgOiAwKTtcbiAgcGFydHMucG9zaXRpdmVzLnNvcnQoKGEsIGIpID0+IGEgPCBiID8gLTEgOiBhID4gYiA/IDEgOiAwKTtcblxuICBsZXQgcHJlZml4ID0gb3B0aW9ucy5jYXB0dXJlID8gJycgOiAnPzonO1xuICBsZXQgcG9zaXRpdmVzID0gJyc7XG4gIGxldCBuZWdhdGl2ZXMgPSAnJztcbiAgbGV0IHJlc3VsdDtcblxuICBpZiAocGFydHMucG9zaXRpdmVzLmxlbmd0aCkge1xuICAgIHBvc2l0aXZlcyA9IHBhcnRzLnBvc2l0aXZlcy5qb2luKCd8Jyk7XG4gIH1cblxuICBpZiAocGFydHMubmVnYXRpdmVzLmxlbmd0aCkge1xuICAgIG5lZ2F0aXZlcyA9IGAtKCR7cHJlZml4fSR7cGFydHMubmVnYXRpdmVzLmpvaW4oJ3wnKX0pYDtcbiAgfVxuXG4gIGlmIChwb3NpdGl2ZXMgJiYgbmVnYXRpdmVzKSB7XG4gICAgcmVzdWx0ID0gYCR7cG9zaXRpdmVzfXwke25lZ2F0aXZlc31gO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHBvc2l0aXZlcyB8fCBuZWdhdGl2ZXM7XG4gIH1cblxuICBpZiAob3B0aW9ucy53cmFwKSB7XG4gICAgcmV0dXJuIGAoJHtwcmVmaXh9JHtyZXN1bHR9KWA7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgdG9SYW5nZSA9IChhLCBiLCBpc051bWJlcnMsIG9wdGlvbnMpID0+IHtcbiAgaWYgKGlzTnVtYmVycykge1xuICAgIHJldHVybiB0b1JlZ2V4UmFuZ2UoYSwgYiwgeyB3cmFwOiBmYWxzZSwgLi4ub3B0aW9ucyB9KTtcbiAgfVxuXG4gIGxldCBzdGFydCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYSk7XG4gIGlmIChhID09PSBiKSByZXR1cm4gc3RhcnQ7XG5cbiAgbGV0IHN0b3AgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGIpO1xuICByZXR1cm4gYFske3N0YXJ0fS0ke3N0b3B9XWA7XG59O1xuXG5jb25zdCB0b1JlZ2V4ID0gKHN0YXJ0LCBlbmQsIG9wdGlvbnMpID0+IHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoc3RhcnQpKSB7XG4gICAgbGV0IHdyYXAgPSBvcHRpb25zLndyYXAgPT09IHRydWU7XG4gICAgbGV0IHByZWZpeCA9IG9wdGlvbnMuY2FwdHVyZSA/ICcnIDogJz86JztcbiAgICByZXR1cm4gd3JhcCA/IGAoJHtwcmVmaXh9JHtzdGFydC5qb2luKCd8Jyl9KWAgOiBzdGFydC5qb2luKCd8Jyk7XG4gIH1cbiAgcmV0dXJuIHRvUmVnZXhSYW5nZShzdGFydCwgZW5kLCBvcHRpb25zKTtcbn07XG5cbmNvbnN0IHJhbmdlRXJyb3IgPSAoLi4uYXJncykgPT4ge1xuICByZXR1cm4gbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgcmFuZ2UgYXJndW1lbnRzOiAnICsgdXRpbC5pbnNwZWN0KC4uLmFyZ3MpKTtcbn07XG5cbmNvbnN0IGludmFsaWRSYW5nZSA9IChzdGFydCwgZW5kLCBvcHRpb25zKSA9PiB7XG4gIGlmIChvcHRpb25zLnN0cmljdFJhbmdlcyA9PT0gdHJ1ZSkgdGhyb3cgcmFuZ2VFcnJvcihbc3RhcnQsIGVuZF0pO1xuICByZXR1cm4gW107XG59O1xuXG5jb25zdCBpbnZhbGlkU3RlcCA9IChzdGVwLCBvcHRpb25zKSA9PiB7XG4gIGlmIChvcHRpb25zLnN0cmljdFJhbmdlcyA9PT0gdHJ1ZSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIHN0ZXAgXCIke3N0ZXB9XCIgdG8gYmUgYSBudW1iZXJgKTtcbiAgfVxuICByZXR1cm4gW107XG59O1xuXG5jb25zdCBmaWxsTnVtYmVycyA9IChzdGFydCwgZW5kLCBzdGVwID0gMSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIGxldCBhID0gTnVtYmVyKHN0YXJ0KTtcbiAgbGV0IGIgPSBOdW1iZXIoZW5kKTtcblxuICBpZiAoIU51bWJlci5pc0ludGVnZXIoYSkgfHwgIU51bWJlci5pc0ludGVnZXIoYikpIHtcbiAgICBpZiAob3B0aW9ucy5zdHJpY3RSYW5nZXMgPT09IHRydWUpIHRocm93IHJhbmdlRXJyb3IoW3N0YXJ0LCBlbmRdKTtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvLyBmaXggbmVnYXRpdmUgemVyb1xuICBpZiAoYSA9PT0gMCkgYSA9IDA7XG4gIGlmIChiID09PSAwKSBiID0gMDtcblxuICBsZXQgZGVzY2VuZGluZyA9IGEgPiBiO1xuICBsZXQgc3RhcnRTdHJpbmcgPSBTdHJpbmcoc3RhcnQpO1xuICBsZXQgZW5kU3RyaW5nID0gU3RyaW5nKGVuZCk7XG4gIGxldCBzdGVwU3RyaW5nID0gU3RyaW5nKHN0ZXApO1xuICBzdGVwID0gTWF0aC5tYXgoTWF0aC5hYnMoc3RlcCksIDEpO1xuXG4gIGxldCBwYWRkZWQgPSB6ZXJvcyhzdGFydFN0cmluZykgfHwgemVyb3MoZW5kU3RyaW5nKSB8fCB6ZXJvcyhzdGVwU3RyaW5nKTtcbiAgbGV0IG1heExlbiA9IHBhZGRlZCA/IE1hdGgubWF4KHN0YXJ0U3RyaW5nLmxlbmd0aCwgZW5kU3RyaW5nLmxlbmd0aCwgc3RlcFN0cmluZy5sZW5ndGgpIDogMDtcbiAgbGV0IHRvTnVtYmVyID0gcGFkZGVkID09PSBmYWxzZSAmJiBzdHJpbmdpZnkoc3RhcnQsIGVuZCwgb3B0aW9ucykgPT09IGZhbHNlO1xuICBsZXQgZm9ybWF0ID0gb3B0aW9ucy50cmFuc2Zvcm0gfHwgdHJhbnNmb3JtKHRvTnVtYmVyKTtcblxuICBpZiAob3B0aW9ucy50b1JlZ2V4ICYmIHN0ZXAgPT09IDEpIHtcbiAgICByZXR1cm4gdG9SYW5nZSh0b01heExlbihzdGFydCwgbWF4TGVuKSwgdG9NYXhMZW4oZW5kLCBtYXhMZW4pLCB0cnVlLCBvcHRpb25zKTtcbiAgfVxuXG4gIGxldCBwYXJ0cyA9IHsgbmVnYXRpdmVzOiBbXSwgcG9zaXRpdmVzOiBbXSB9O1xuICBsZXQgcHVzaCA9IG51bSA9PiBwYXJ0c1tudW0gPCAwID8gJ25lZ2F0aXZlcycgOiAncG9zaXRpdmVzJ10ucHVzaChNYXRoLmFicyhudW0pKTtcbiAgbGV0IHJhbmdlID0gW107XG4gIGxldCBpbmRleCA9IDA7XG5cbiAgd2hpbGUgKGRlc2NlbmRpbmcgPyBhID49IGIgOiBhIDw9IGIpIHtcbiAgICBpZiAob3B0aW9ucy50b1JlZ2V4ID09PSB0cnVlICYmIHN0ZXAgPiAxKSB7XG4gICAgICBwdXNoKGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICByYW5nZS5wdXNoKHBhZChmb3JtYXQoYSwgaW5kZXgpLCBtYXhMZW4sIHRvTnVtYmVyKSk7XG4gICAgfVxuICAgIGEgPSBkZXNjZW5kaW5nID8gYSAtIHN0ZXAgOiBhICsgc3RlcDtcbiAgICBpbmRleCsrO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMudG9SZWdleCA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiBzdGVwID4gMVxuICAgICAgPyB0b1NlcXVlbmNlKHBhcnRzLCBvcHRpb25zKVxuICAgICAgOiB0b1JlZ2V4KHJhbmdlLCBudWxsLCB7IHdyYXA6IGZhbHNlLCAuLi5vcHRpb25zIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJhbmdlO1xufTtcblxuY29uc3QgZmlsbExldHRlcnMgPSAoc3RhcnQsIGVuZCwgc3RlcCA9IDEsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBpZiAoKCFpc051bWJlcihzdGFydCkgJiYgc3RhcnQubGVuZ3RoID4gMSkgfHwgKCFpc051bWJlcihlbmQpICYmIGVuZC5sZW5ndGggPiAxKSkge1xuICAgIHJldHVybiBpbnZhbGlkUmFuZ2Uoc3RhcnQsIGVuZCwgb3B0aW9ucyk7XG4gIH1cblxuXG4gIGxldCBmb3JtYXQgPSBvcHRpb25zLnRyYW5zZm9ybSB8fCAodmFsID0+IFN0cmluZy5mcm9tQ2hhckNvZGUodmFsKSk7XG4gIGxldCBhID0gYCR7c3RhcnR9YC5jaGFyQ29kZUF0KDApO1xuICBsZXQgYiA9IGAke2VuZH1gLmNoYXJDb2RlQXQoMCk7XG5cbiAgbGV0IGRlc2NlbmRpbmcgPSBhID4gYjtcbiAgbGV0IG1pbiA9IE1hdGgubWluKGEsIGIpO1xuICBsZXQgbWF4ID0gTWF0aC5tYXgoYSwgYik7XG5cbiAgaWYgKG9wdGlvbnMudG9SZWdleCAmJiBzdGVwID09PSAxKSB7XG4gICAgcmV0dXJuIHRvUmFuZ2UobWluLCBtYXgsIGZhbHNlLCBvcHRpb25zKTtcbiAgfVxuXG4gIGxldCByYW5nZSA9IFtdO1xuICBsZXQgaW5kZXggPSAwO1xuXG4gIHdoaWxlIChkZXNjZW5kaW5nID8gYSA+PSBiIDogYSA8PSBiKSB7XG4gICAgcmFuZ2UucHVzaChmb3JtYXQoYSwgaW5kZXgpKTtcbiAgICBhID0gZGVzY2VuZGluZyA/IGEgLSBzdGVwIDogYSArIHN0ZXA7XG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIGlmIChvcHRpb25zLnRvUmVnZXggPT09IHRydWUpIHtcbiAgICByZXR1cm4gdG9SZWdleChyYW5nZSwgbnVsbCwgeyB3cmFwOiBmYWxzZSwgb3B0aW9ucyB9KTtcbiAgfVxuXG4gIHJldHVybiByYW5nZTtcbn07XG5cbmNvbnN0IGZpbGwgPSAoc3RhcnQsIGVuZCwgc3RlcCwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIGlmIChlbmQgPT0gbnVsbCAmJiBpc1ZhbGlkVmFsdWUoc3RhcnQpKSB7XG4gICAgcmV0dXJuIFtzdGFydF07XG4gIH1cblxuICBpZiAoIWlzVmFsaWRWYWx1ZShzdGFydCkgfHwgIWlzVmFsaWRWYWx1ZShlbmQpKSB7XG4gICAgcmV0dXJuIGludmFsaWRSYW5nZShzdGFydCwgZW5kLCBvcHRpb25zKTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc3RlcCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBmaWxsKHN0YXJ0LCBlbmQsIDEsIHsgdHJhbnNmb3JtOiBzdGVwIH0pO1xuICB9XG5cbiAgaWYgKGlzT2JqZWN0KHN0ZXApKSB7XG4gICAgcmV0dXJuIGZpbGwoc3RhcnQsIGVuZCwgMCwgc3RlcCk7XG4gIH1cblxuICBsZXQgb3B0cyA9IHsgLi4ub3B0aW9ucyB9O1xuICBpZiAob3B0cy5jYXB0dXJlID09PSB0cnVlKSBvcHRzLndyYXAgPSB0cnVlO1xuICBzdGVwID0gc3RlcCB8fCBvcHRzLnN0ZXAgfHwgMTtcblxuICBpZiAoIWlzTnVtYmVyKHN0ZXApKSB7XG4gICAgaWYgKHN0ZXAgIT0gbnVsbCAmJiAhaXNPYmplY3Qoc3RlcCkpIHJldHVybiBpbnZhbGlkU3RlcChzdGVwLCBvcHRzKTtcbiAgICByZXR1cm4gZmlsbChzdGFydCwgZW5kLCAxLCBzdGVwKTtcbiAgfVxuXG4gIGlmIChpc051bWJlcihzdGFydCkgJiYgaXNOdW1iZXIoZW5kKSkge1xuICAgIHJldHVybiBmaWxsTnVtYmVycyhzdGFydCwgZW5kLCBzdGVwLCBvcHRzKTtcbiAgfVxuXG4gIHJldHVybiBmaWxsTGV0dGVycyhzdGFydCwgZW5kLCBNYXRoLm1heChNYXRoLmFicyhzdGVwKSwgMSksIG9wdHMpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmaWxsO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZmlsbCA9IHJlcXVpcmUoJ2ZpbGwtcmFuZ2UnKTtcbmNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5jb25zdCBjb21waWxlID0gKGFzdCwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIGxldCB3YWxrID0gKG5vZGUsIHBhcmVudCA9IHt9KSA9PiB7XG4gICAgbGV0IGludmFsaWRCbG9jayA9IHV0aWxzLmlzSW52YWxpZEJyYWNlKHBhcmVudCk7XG4gICAgbGV0IGludmFsaWROb2RlID0gbm9kZS5pbnZhbGlkID09PSB0cnVlICYmIG9wdGlvbnMuZXNjYXBlSW52YWxpZCA9PT0gdHJ1ZTtcbiAgICBsZXQgaW52YWxpZCA9IGludmFsaWRCbG9jayA9PT0gdHJ1ZSB8fCBpbnZhbGlkTm9kZSA9PT0gdHJ1ZTtcbiAgICBsZXQgcHJlZml4ID0gb3B0aW9ucy5lc2NhcGVJbnZhbGlkID09PSB0cnVlID8gJ1xcXFwnIDogJyc7XG4gICAgbGV0IG91dHB1dCA9ICcnO1xuXG4gICAgaWYgKG5vZGUuaXNPcGVuID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gcHJlZml4ICsgbm9kZS52YWx1ZTtcbiAgICB9XG4gICAgaWYgKG5vZGUuaXNDbG9zZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHByZWZpeCArIG5vZGUudmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUudHlwZSA9PT0gJ29wZW4nKSB7XG4gICAgICByZXR1cm4gaW52YWxpZCA/IChwcmVmaXggKyBub2RlLnZhbHVlKSA6ICcoJztcbiAgICB9XG5cbiAgICBpZiAobm9kZS50eXBlID09PSAnY2xvc2UnKSB7XG4gICAgICByZXR1cm4gaW52YWxpZCA/IChwcmVmaXggKyBub2RlLnZhbHVlKSA6ICcpJztcbiAgICB9XG5cbiAgICBpZiAobm9kZS50eXBlID09PSAnY29tbWEnKSB7XG4gICAgICByZXR1cm4gbm9kZS5wcmV2LnR5cGUgPT09ICdjb21tYScgPyAnJyA6IChpbnZhbGlkID8gbm9kZS52YWx1ZSA6ICd8Jyk7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUudmFsdWUpIHtcbiAgICAgIHJldHVybiBub2RlLnZhbHVlO1xuICAgIH1cblxuICAgIGlmIChub2RlLm5vZGVzICYmIG5vZGUucmFuZ2VzID4gMCkge1xuICAgICAgbGV0IGFyZ3MgPSB1dGlscy5yZWR1Y2Uobm9kZS5ub2Rlcyk7XG4gICAgICBsZXQgcmFuZ2UgPSBmaWxsKC4uLmFyZ3MsIHsgLi4ub3B0aW9ucywgd3JhcDogZmFsc2UsIHRvUmVnZXg6IHRydWUgfSk7XG5cbiAgICAgIGlmIChyYW5nZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgcmV0dXJuIGFyZ3MubGVuZ3RoID4gMSAmJiByYW5nZS5sZW5ndGggPiAxID8gYCgke3JhbmdlfSlgIDogcmFuZ2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5vZGUubm9kZXMpIHtcbiAgICAgIGZvciAobGV0IGNoaWxkIG9mIG5vZGUubm9kZXMpIHtcbiAgICAgICAgb3V0cHV0ICs9IHdhbGsoY2hpbGQsIG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9O1xuXG4gIHJldHVybiB3YWxrKGFzdCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbXBpbGU7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmaWxsID0gcmVxdWlyZSgnZmlsbC1yYW5nZScpO1xuY29uc3Qgc3RyaW5naWZ5ID0gcmVxdWlyZSgnLi9zdHJpbmdpZnknKTtcbmNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5jb25zdCBhcHBlbmQgPSAocXVldWUgPSAnJywgc3Rhc2ggPSAnJywgZW5jbG9zZSA9IGZhbHNlKSA9PiB7XG4gIGxldCByZXN1bHQgPSBbXTtcblxuICBxdWV1ZSA9IFtdLmNvbmNhdChxdWV1ZSk7XG4gIHN0YXNoID0gW10uY29uY2F0KHN0YXNoKTtcblxuICBpZiAoIXN0YXNoLmxlbmd0aCkgcmV0dXJuIHF1ZXVlO1xuICBpZiAoIXF1ZXVlLmxlbmd0aCkge1xuICAgIHJldHVybiBlbmNsb3NlID8gdXRpbHMuZmxhdHRlbihzdGFzaCkubWFwKGVsZSA9PiBgeyR7ZWxlfX1gKSA6IHN0YXNoO1xuICB9XG5cbiAgZm9yIChsZXQgaXRlbSBvZiBxdWV1ZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0pKSB7XG4gICAgICBmb3IgKGxldCB2YWx1ZSBvZiBpdGVtKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGFwcGVuZCh2YWx1ZSwgc3Rhc2gsIGVuY2xvc2UpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgZWxlIG9mIHN0YXNoKSB7XG4gICAgICAgIGlmIChlbmNsb3NlID09PSB0cnVlICYmIHR5cGVvZiBlbGUgPT09ICdzdHJpbmcnKSBlbGUgPSBgeyR7ZWxlfX1gO1xuICAgICAgICByZXN1bHQucHVzaChBcnJheS5pc0FycmF5KGVsZSkgPyBhcHBlbmQoaXRlbSwgZWxlLCBlbmNsb3NlKSA6IChpdGVtICsgZWxlKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB1dGlscy5mbGF0dGVuKHJlc3VsdCk7XG59O1xuXG5jb25zdCBleHBhbmQgPSAoYXN0LCBvcHRpb25zID0ge30pID0+IHtcbiAgbGV0IHJhbmdlTGltaXQgPSBvcHRpb25zLnJhbmdlTGltaXQgPT09IHZvaWQgMCA/IDEwMDAgOiBvcHRpb25zLnJhbmdlTGltaXQ7XG5cbiAgbGV0IHdhbGsgPSAobm9kZSwgcGFyZW50ID0ge30pID0+IHtcbiAgICBub2RlLnF1ZXVlID0gW107XG5cbiAgICBsZXQgcCA9IHBhcmVudDtcbiAgICBsZXQgcSA9IHBhcmVudC5xdWV1ZTtcblxuICAgIHdoaWxlIChwLnR5cGUgIT09ICdicmFjZScgJiYgcC50eXBlICE9PSAncm9vdCcgJiYgcC5wYXJlbnQpIHtcbiAgICAgIHAgPSBwLnBhcmVudDtcbiAgICAgIHEgPSBwLnF1ZXVlO1xuICAgIH1cblxuICAgIGlmIChub2RlLmludmFsaWQgfHwgbm9kZS5kb2xsYXIpIHtcbiAgICAgIHEucHVzaChhcHBlbmQocS5wb3AoKSwgc3RyaW5naWZ5KG5vZGUsIG9wdGlvbnMpKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5vZGUudHlwZSA9PT0gJ2JyYWNlJyAmJiBub2RlLmludmFsaWQgIT09IHRydWUgJiYgbm9kZS5ub2Rlcy5sZW5ndGggPT09IDIpIHtcbiAgICAgIHEucHVzaChhcHBlbmQocS5wb3AoKSwgWyd7fSddKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5vZGUubm9kZXMgJiYgbm9kZS5yYW5nZXMgPiAwKSB7XG4gICAgICBsZXQgYXJncyA9IHV0aWxzLnJlZHVjZShub2RlLm5vZGVzKTtcblxuICAgICAgaWYgKHV0aWxzLmV4Y2VlZHNMaW1pdCguLi5hcmdzLCBvcHRpb25zLnN0ZXAsIHJhbmdlTGltaXQpKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdleHBhbmRlZCBhcnJheSBsZW5ndGggZXhjZWVkcyByYW5nZSBsaW1pdC4gVXNlIG9wdGlvbnMucmFuZ2VMaW1pdCB0byBpbmNyZWFzZSBvciBkaXNhYmxlIHRoZSBsaW1pdC4nKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHJhbmdlID0gZmlsbCguLi5hcmdzLCBvcHRpb25zKTtcbiAgICAgIGlmIChyYW5nZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmFuZ2UgPSBzdHJpbmdpZnkobm9kZSwgb3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIHEucHVzaChhcHBlbmQocS5wb3AoKSwgcmFuZ2UpKTtcbiAgICAgIG5vZGUubm9kZXMgPSBbXTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZW5jbG9zZSA9IHV0aWxzLmVuY2xvc2VCcmFjZShub2RlKTtcbiAgICBsZXQgcXVldWUgPSBub2RlLnF1ZXVlO1xuICAgIGxldCBibG9jayA9IG5vZGU7XG5cbiAgICB3aGlsZSAoYmxvY2sudHlwZSAhPT0gJ2JyYWNlJyAmJiBibG9jay50eXBlICE9PSAncm9vdCcgJiYgYmxvY2sucGFyZW50KSB7XG4gICAgICBibG9jayA9IGJsb2NrLnBhcmVudDtcbiAgICAgIHF1ZXVlID0gYmxvY2sucXVldWU7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLm5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSBub2RlLm5vZGVzW2ldO1xuXG4gICAgICBpZiAoY2hpbGQudHlwZSA9PT0gJ2NvbW1hJyAmJiBub2RlLnR5cGUgPT09ICdicmFjZScpIHtcbiAgICAgICAgaWYgKGkgPT09IDEpIHF1ZXVlLnB1c2goJycpO1xuICAgICAgICBxdWV1ZS5wdXNoKCcnKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGlsZC50eXBlID09PSAnY2xvc2UnKSB7XG4gICAgICAgIHEucHVzaChhcHBlbmQocS5wb3AoKSwgcXVldWUsIGVuY2xvc2UpKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGlsZC52YWx1ZSAmJiBjaGlsZC50eXBlICE9PSAnb3BlbicpIHtcbiAgICAgICAgcXVldWUucHVzaChhcHBlbmQocXVldWUucG9wKCksIGNoaWxkLnZhbHVlKSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGQubm9kZXMpIHtcbiAgICAgICAgd2FsayhjaGlsZCwgbm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXVlO1xuICB9O1xuXG4gIHJldHVybiB1dGlscy5mbGF0dGVuKHdhbGsoYXN0KSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cGFuZDtcbiIsICIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBNQVhfTEVOR1RIOiAxMDI0ICogNjQsXG5cbiAgLy8gRGlnaXRzXG4gIENIQVJfMDogJzAnLCAvKiAwICovXG4gIENIQVJfOTogJzknLCAvKiA5ICovXG5cbiAgLy8gQWxwaGFiZXQgY2hhcnMuXG4gIENIQVJfVVBQRVJDQVNFX0E6ICdBJywgLyogQSAqL1xuICBDSEFSX0xPV0VSQ0FTRV9BOiAnYScsIC8qIGEgKi9cbiAgQ0hBUl9VUFBFUkNBU0VfWjogJ1onLCAvKiBaICovXG4gIENIQVJfTE9XRVJDQVNFX1o6ICd6JywgLyogeiAqL1xuXG4gIENIQVJfTEVGVF9QQVJFTlRIRVNFUzogJygnLCAvKiAoICovXG4gIENIQVJfUklHSFRfUEFSRU5USEVTRVM6ICcpJywgLyogKSAqL1xuXG4gIENIQVJfQVNURVJJU0s6ICcqJywgLyogKiAqL1xuXG4gIC8vIE5vbi1hbHBoYWJldGljIGNoYXJzLlxuICBDSEFSX0FNUEVSU0FORDogJyYnLCAvKiAmICovXG4gIENIQVJfQVQ6ICdAJywgLyogQCAqL1xuICBDSEFSX0JBQ0tTTEFTSDogJ1xcXFwnLCAvKiBcXCAqL1xuICBDSEFSX0JBQ0tUSUNLOiAnYCcsIC8qIGAgKi9cbiAgQ0hBUl9DQVJSSUFHRV9SRVRVUk46ICdcXHInLCAvKiBcXHIgKi9cbiAgQ0hBUl9DSVJDVU1GTEVYX0FDQ0VOVDogJ14nLCAvKiBeICovXG4gIENIQVJfQ09MT046ICc6JywgLyogOiAqL1xuICBDSEFSX0NPTU1BOiAnLCcsIC8qICwgKi9cbiAgQ0hBUl9ET0xMQVI6ICckJywgLyogLiAqL1xuICBDSEFSX0RPVDogJy4nLCAvKiAuICovXG4gIENIQVJfRE9VQkxFX1FVT1RFOiAnXCInLCAvKiBcIiAqL1xuICBDSEFSX0VRVUFMOiAnPScsIC8qID0gKi9cbiAgQ0hBUl9FWENMQU1BVElPTl9NQVJLOiAnIScsIC8qICEgKi9cbiAgQ0hBUl9GT1JNX0ZFRUQ6ICdcXGYnLCAvKiBcXGYgKi9cbiAgQ0hBUl9GT1JXQVJEX1NMQVNIOiAnLycsIC8qIC8gKi9cbiAgQ0hBUl9IQVNIOiAnIycsIC8qICMgKi9cbiAgQ0hBUl9IWVBIRU5fTUlOVVM6ICctJywgLyogLSAqL1xuICBDSEFSX0xFRlRfQU5HTEVfQlJBQ0tFVDogJzwnLCAvKiA8ICovXG4gIENIQVJfTEVGVF9DVVJMWV9CUkFDRTogJ3snLCAvKiB7ICovXG4gIENIQVJfTEVGVF9TUVVBUkVfQlJBQ0tFVDogJ1snLCAvKiBbICovXG4gIENIQVJfTElORV9GRUVEOiAnXFxuJywgLyogXFxuICovXG4gIENIQVJfTk9fQlJFQUtfU1BBQ0U6ICdcXHUwMEEwJywgLyogXFx1MDBBMCAqL1xuICBDSEFSX1BFUkNFTlQ6ICclJywgLyogJSAqL1xuICBDSEFSX1BMVVM6ICcrJywgLyogKyAqL1xuICBDSEFSX1FVRVNUSU9OX01BUks6ICc/JywgLyogPyAqL1xuICBDSEFSX1JJR0hUX0FOR0xFX0JSQUNLRVQ6ICc+JywgLyogPiAqL1xuICBDSEFSX1JJR0hUX0NVUkxZX0JSQUNFOiAnfScsIC8qIH0gKi9cbiAgQ0hBUl9SSUdIVF9TUVVBUkVfQlJBQ0tFVDogJ10nLCAvKiBdICovXG4gIENIQVJfU0VNSUNPTE9OOiAnOycsIC8qIDsgKi9cbiAgQ0hBUl9TSU5HTEVfUVVPVEU6ICdcXCcnLCAvKiAnICovXG4gIENIQVJfU1BBQ0U6ICcgJywgLyogICAqL1xuICBDSEFSX1RBQjogJ1xcdCcsIC8qIFxcdCAqL1xuICBDSEFSX1VOREVSU0NPUkU6ICdfJywgLyogXyAqL1xuICBDSEFSX1ZFUlRJQ0FMX0xJTkU6ICd8JywgLyogfCAqL1xuICBDSEFSX1pFUk9fV0lEVEhfTk9CUkVBS19TUEFDRTogJ1xcdUZFRkYnIC8qIFxcdUZFRkYgKi9cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBzdHJpbmdpZnkgPSByZXF1aXJlKCcuL3N0cmluZ2lmeScpO1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IHtcbiAgTUFYX0xFTkdUSCxcbiAgQ0hBUl9CQUNLU0xBU0gsIC8qIFxcICovXG4gIENIQVJfQkFDS1RJQ0ssIC8qIGAgKi9cbiAgQ0hBUl9DT01NQSwgLyogLCAqL1xuICBDSEFSX0RPVCwgLyogLiAqL1xuICBDSEFSX0xFRlRfUEFSRU5USEVTRVMsIC8qICggKi9cbiAgQ0hBUl9SSUdIVF9QQVJFTlRIRVNFUywgLyogKSAqL1xuICBDSEFSX0xFRlRfQ1VSTFlfQlJBQ0UsIC8qIHsgKi9cbiAgQ0hBUl9SSUdIVF9DVVJMWV9CUkFDRSwgLyogfSAqL1xuICBDSEFSX0xFRlRfU1FVQVJFX0JSQUNLRVQsIC8qIFsgKi9cbiAgQ0hBUl9SSUdIVF9TUVVBUkVfQlJBQ0tFVCwgLyogXSAqL1xuICBDSEFSX0RPVUJMRV9RVU9URSwgLyogXCIgKi9cbiAgQ0hBUl9TSU5HTEVfUVVPVEUsIC8qICcgKi9cbiAgQ0hBUl9OT19CUkVBS19TUEFDRSxcbiAgQ0hBUl9aRVJPX1dJRFRIX05PQlJFQUtfU1BBQ0Vcbn0gPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG4vKipcbiAqIHBhcnNlXG4gKi9cblxuY29uc3QgcGFyc2UgPSAoaW5wdXQsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBpZiAodHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGEgc3RyaW5nJyk7XG4gIH1cblxuICBsZXQgb3B0cyA9IG9wdGlvbnMgfHwge307XG4gIGxldCBtYXggPSB0eXBlb2Ygb3B0cy5tYXhMZW5ndGggPT09ICdudW1iZXInID8gTWF0aC5taW4oTUFYX0xFTkdUSCwgb3B0cy5tYXhMZW5ndGgpIDogTUFYX0xFTkdUSDtcbiAgaWYgKGlucHV0Lmxlbmd0aCA+IG1heCkge1xuICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgSW5wdXQgbGVuZ3RoICgke2lucHV0Lmxlbmd0aH0pLCBleGNlZWRzIG1heCBjaGFyYWN0ZXJzICgke21heH0pYCk7XG4gIH1cblxuICBsZXQgYXN0ID0geyB0eXBlOiAncm9vdCcsIGlucHV0LCBub2RlczogW10gfTtcbiAgbGV0IHN0YWNrID0gW2FzdF07XG4gIGxldCBibG9jayA9IGFzdDtcbiAgbGV0IHByZXYgPSBhc3Q7XG4gIGxldCBicmFja2V0cyA9IDA7XG4gIGxldCBsZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gIGxldCBpbmRleCA9IDA7XG4gIGxldCBkZXB0aCA9IDA7XG4gIGxldCB2YWx1ZTtcbiAgbGV0IG1lbW8gPSB7fTtcblxuICAvKipcbiAgICogSGVscGVyc1xuICAgKi9cblxuICBjb25zdCBhZHZhbmNlID0gKCkgPT4gaW5wdXRbaW5kZXgrK107XG4gIGNvbnN0IHB1c2ggPSBub2RlID0+IHtcbiAgICBpZiAobm9kZS50eXBlID09PSAndGV4dCcgJiYgcHJldi50eXBlID09PSAnZG90Jykge1xuICAgICAgcHJldi50eXBlID0gJ3RleHQnO1xuICAgIH1cblxuICAgIGlmIChwcmV2ICYmIHByZXYudHlwZSA9PT0gJ3RleHQnICYmIG5vZGUudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICBwcmV2LnZhbHVlICs9IG5vZGUudmFsdWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYmxvY2subm9kZXMucHVzaChub2RlKTtcbiAgICBub2RlLnBhcmVudCA9IGJsb2NrO1xuICAgIG5vZGUucHJldiA9IHByZXY7XG4gICAgcHJldiA9IG5vZGU7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG5cbiAgcHVzaCh7IHR5cGU6ICdib3MnIH0pO1xuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGJsb2NrID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG4gICAgdmFsdWUgPSBhZHZhbmNlKCk7XG5cbiAgICAvKipcbiAgICAgKiBJbnZhbGlkIGNoYXJzXG4gICAgICovXG5cbiAgICBpZiAodmFsdWUgPT09IENIQVJfWkVST19XSURUSF9OT0JSRUFLX1NQQUNFIHx8IHZhbHVlID09PSBDSEFSX05PX0JSRUFLX1NQQUNFKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFc2NhcGVkIGNoYXJzXG4gICAgICovXG5cbiAgICBpZiAodmFsdWUgPT09IENIQVJfQkFDS1NMQVNIKSB7XG4gICAgICBwdXNoKHsgdHlwZTogJ3RleHQnLCB2YWx1ZTogKG9wdGlvbnMua2VlcEVzY2FwaW5nID8gdmFsdWUgOiAnJykgKyBhZHZhbmNlKCkgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSaWdodCBzcXVhcmUgYnJhY2tldCAobGl0ZXJhbCk6ICddJ1xuICAgICAqL1xuXG4gICAgaWYgKHZhbHVlID09PSBDSEFSX1JJR0hUX1NRVUFSRV9CUkFDS0VUKSB7XG4gICAgICBwdXNoKHsgdHlwZTogJ3RleHQnLCB2YWx1ZTogJ1xcXFwnICsgdmFsdWUgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMZWZ0IHNxdWFyZSBicmFja2V0OiAnWydcbiAgICAgKi9cblxuICAgIGlmICh2YWx1ZSA9PT0gQ0hBUl9MRUZUX1NRVUFSRV9CUkFDS0VUKSB7XG4gICAgICBicmFja2V0cysrO1xuXG4gICAgICBsZXQgY2xvc2VkID0gdHJ1ZTtcbiAgICAgIGxldCBuZXh0O1xuXG4gICAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGggJiYgKG5leHQgPSBhZHZhbmNlKCkpKSB7XG4gICAgICAgIHZhbHVlICs9IG5leHQ7XG5cbiAgICAgICAgaWYgKG5leHQgPT09IENIQVJfTEVGVF9TUVVBUkVfQlJBQ0tFVCkge1xuICAgICAgICAgIGJyYWNrZXRzKys7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV4dCA9PT0gQ0hBUl9CQUNLU0xBU0gpIHtcbiAgICAgICAgICB2YWx1ZSArPSBhZHZhbmNlKCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV4dCA9PT0gQ0hBUl9SSUdIVF9TUVVBUkVfQlJBQ0tFVCkge1xuICAgICAgICAgIGJyYWNrZXRzLS07XG5cbiAgICAgICAgICBpZiAoYnJhY2tldHMgPT09IDApIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwdXNoKHsgdHlwZTogJ3RleHQnLCB2YWx1ZSB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcmVudGhlc2VzXG4gICAgICovXG5cbiAgICBpZiAodmFsdWUgPT09IENIQVJfTEVGVF9QQVJFTlRIRVNFUykge1xuICAgICAgYmxvY2sgPSBwdXNoKHsgdHlwZTogJ3BhcmVuJywgbm9kZXM6IFtdIH0pO1xuICAgICAgc3RhY2sucHVzaChibG9jayk7XG4gICAgICBwdXNoKHsgdHlwZTogJ3RleHQnLCB2YWx1ZSB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSA9PT0gQ0hBUl9SSUdIVF9QQVJFTlRIRVNFUykge1xuICAgICAgaWYgKGJsb2NrLnR5cGUgIT09ICdwYXJlbicpIHtcbiAgICAgICAgcHVzaCh7IHR5cGU6ICd0ZXh0JywgdmFsdWUgfSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgYmxvY2sgPSBzdGFjay5wb3AoKTtcbiAgICAgIHB1c2goeyB0eXBlOiAndGV4dCcsIHZhbHVlIH0pO1xuICAgICAgYmxvY2sgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFF1b3RlczogJ3xcInxgXG4gICAgICovXG5cbiAgICBpZiAodmFsdWUgPT09IENIQVJfRE9VQkxFX1FVT1RFIHx8IHZhbHVlID09PSBDSEFSX1NJTkdMRV9RVU9URSB8fCB2YWx1ZSA9PT0gQ0hBUl9CQUNLVElDSykge1xuICAgICAgbGV0IG9wZW4gPSB2YWx1ZTtcbiAgICAgIGxldCBuZXh0O1xuXG4gICAgICBpZiAob3B0aW9ucy5rZWVwUXVvdGVzICE9PSB0cnVlKSB7XG4gICAgICAgIHZhbHVlID0gJyc7XG4gICAgICB9XG5cbiAgICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCAmJiAobmV4dCA9IGFkdmFuY2UoKSkpIHtcbiAgICAgICAgaWYgKG5leHQgPT09IENIQVJfQkFDS1NMQVNIKSB7XG4gICAgICAgICAgdmFsdWUgKz0gbmV4dCArIGFkdmFuY2UoKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0ID09PSBvcGVuKSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMua2VlcFF1b3RlcyA9PT0gdHJ1ZSkgdmFsdWUgKz0gbmV4dDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlICs9IG5leHQ7XG4gICAgICB9XG5cbiAgICAgIHB1c2goeyB0eXBlOiAndGV4dCcsIHZhbHVlIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGVmdCBjdXJseSBicmFjZTogJ3snXG4gICAgICovXG5cbiAgICBpZiAodmFsdWUgPT09IENIQVJfTEVGVF9DVVJMWV9CUkFDRSkge1xuICAgICAgZGVwdGgrKztcblxuICAgICAgbGV0IGRvbGxhciA9IHByZXYudmFsdWUgJiYgcHJldi52YWx1ZS5zbGljZSgtMSkgPT09ICckJyB8fCBibG9jay5kb2xsYXIgPT09IHRydWU7XG4gICAgICBsZXQgYnJhY2UgPSB7XG4gICAgICAgIHR5cGU6ICdicmFjZScsXG4gICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgIGNsb3NlOiBmYWxzZSxcbiAgICAgICAgZG9sbGFyLFxuICAgICAgICBkZXB0aCxcbiAgICAgICAgY29tbWFzOiAwLFxuICAgICAgICByYW5nZXM6IDAsXG4gICAgICAgIG5vZGVzOiBbXVxuICAgICAgfTtcblxuICAgICAgYmxvY2sgPSBwdXNoKGJyYWNlKTtcbiAgICAgIHN0YWNrLnB1c2goYmxvY2spO1xuICAgICAgcHVzaCh7IHR5cGU6ICdvcGVuJywgdmFsdWUgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSaWdodCBjdXJseSBicmFjZTogJ30nXG4gICAgICovXG5cbiAgICBpZiAodmFsdWUgPT09IENIQVJfUklHSFRfQ1VSTFlfQlJBQ0UpIHtcbiAgICAgIGlmIChibG9jay50eXBlICE9PSAnYnJhY2UnKSB7XG4gICAgICAgIHB1c2goeyB0eXBlOiAndGV4dCcsIHZhbHVlIH0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IHR5cGUgPSAnY2xvc2UnO1xuICAgICAgYmxvY2sgPSBzdGFjay5wb3AoKTtcbiAgICAgIGJsb2NrLmNsb3NlID0gdHJ1ZTtcblxuICAgICAgcHVzaCh7IHR5cGUsIHZhbHVlIH0pO1xuICAgICAgZGVwdGgtLTtcblxuICAgICAgYmxvY2sgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbW1hOiAnLCdcbiAgICAgKi9cblxuICAgIGlmICh2YWx1ZSA9PT0gQ0hBUl9DT01NQSAmJiBkZXB0aCA+IDApIHtcbiAgICAgIGlmIChibG9jay5yYW5nZXMgPiAwKSB7XG4gICAgICAgIGJsb2NrLnJhbmdlcyA9IDA7XG4gICAgICAgIGxldCBvcGVuID0gYmxvY2subm9kZXMuc2hpZnQoKTtcbiAgICAgICAgYmxvY2subm9kZXMgPSBbb3BlbiwgeyB0eXBlOiAndGV4dCcsIHZhbHVlOiBzdHJpbmdpZnkoYmxvY2spIH1dO1xuICAgICAgfVxuXG4gICAgICBwdXNoKHsgdHlwZTogJ2NvbW1hJywgdmFsdWUgfSk7XG4gICAgICBibG9jay5jb21tYXMrKztcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERvdDogJy4nXG4gICAgICovXG5cbiAgICBpZiAodmFsdWUgPT09IENIQVJfRE9UICYmIGRlcHRoID4gMCAmJiBibG9jay5jb21tYXMgPT09IDApIHtcbiAgICAgIGxldCBzaWJsaW5ncyA9IGJsb2NrLm5vZGVzO1xuXG4gICAgICBpZiAoZGVwdGggPT09IDAgfHwgc2libGluZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHB1c2goeyB0eXBlOiAndGV4dCcsIHZhbHVlIH0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByZXYudHlwZSA9PT0gJ2RvdCcpIHtcbiAgICAgICAgYmxvY2sucmFuZ2UgPSBbXTtcbiAgICAgICAgcHJldi52YWx1ZSArPSB2YWx1ZTtcbiAgICAgICAgcHJldi50eXBlID0gJ3JhbmdlJztcblxuICAgICAgICBpZiAoYmxvY2subm9kZXMubGVuZ3RoICE9PSAzICYmIGJsb2NrLm5vZGVzLmxlbmd0aCAhPT0gNSkge1xuICAgICAgICAgIGJsb2NrLmludmFsaWQgPSB0cnVlO1xuICAgICAgICAgIGJsb2NrLnJhbmdlcyA9IDA7XG4gICAgICAgICAgcHJldi50eXBlID0gJ3RleHQnO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgYmxvY2sucmFuZ2VzKys7XG4gICAgICAgIGJsb2NrLmFyZ3MgPSBbXTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcmV2LnR5cGUgPT09ICdyYW5nZScpIHtcbiAgICAgICAgc2libGluZ3MucG9wKCk7XG5cbiAgICAgICAgbGV0IGJlZm9yZSA9IHNpYmxpbmdzW3NpYmxpbmdzLmxlbmd0aCAtIDFdO1xuICAgICAgICBiZWZvcmUudmFsdWUgKz0gcHJldi52YWx1ZSArIHZhbHVlO1xuICAgICAgICBwcmV2ID0gYmVmb3JlO1xuICAgICAgICBibG9jay5yYW5nZXMtLTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHB1c2goeyB0eXBlOiAnZG90JywgdmFsdWUgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUZXh0XG4gICAgICovXG5cbiAgICBwdXNoKHsgdHlwZTogJ3RleHQnLCB2YWx1ZSB9KTtcbiAgfVxuXG4gIC8vIE1hcmsgaW1iYWxhbmNlZCBicmFjZXMgYW5kIGJyYWNrZXRzIGFzIGludmFsaWRcbiAgZG8ge1xuICAgIGJsb2NrID0gc3RhY2sucG9wKCk7XG5cbiAgICBpZiAoYmxvY2sudHlwZSAhPT0gJ3Jvb3QnKSB7XG4gICAgICBibG9jay5ub2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICBpZiAoIW5vZGUubm9kZXMpIHtcbiAgICAgICAgICBpZiAobm9kZS50eXBlID09PSAnb3BlbicpIG5vZGUuaXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgICBpZiAobm9kZS50eXBlID09PSAnY2xvc2UnKSBub2RlLmlzQ2xvc2UgPSB0cnVlO1xuICAgICAgICAgIGlmICghbm9kZS5ub2Rlcykgbm9kZS50eXBlID0gJ3RleHQnO1xuICAgICAgICAgIG5vZGUuaW52YWxpZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBnZXQgdGhlIGxvY2F0aW9uIG9mIHRoZSBibG9jayBvbiBwYXJlbnQubm9kZXMgKGJsb2NrJ3Mgc2libGluZ3MpXG4gICAgICBsZXQgcGFyZW50ID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG4gICAgICBsZXQgaW5kZXggPSBwYXJlbnQubm9kZXMuaW5kZXhPZihibG9jayk7XG4gICAgICAvLyByZXBsYWNlIHRoZSAoaW52YWxpZCkgYmxvY2sgd2l0aCBpdCdzIG5vZGVzXG4gICAgICBwYXJlbnQubm9kZXMuc3BsaWNlKGluZGV4LCAxLCAuLi5ibG9jay5ub2Rlcyk7XG4gICAgfVxuICB9IHdoaWxlIChzdGFjay5sZW5ndGggPiAwKTtcblxuICBwdXNoKHsgdHlwZTogJ2VvcycgfSk7XG4gIHJldHVybiBhc3Q7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgc3RyaW5naWZ5ID0gcmVxdWlyZSgnLi9saWIvc3RyaW5naWZ5Jyk7XG5jb25zdCBjb21waWxlID0gcmVxdWlyZSgnLi9saWIvY29tcGlsZScpO1xuY29uc3QgZXhwYW5kID0gcmVxdWlyZSgnLi9saWIvZXhwYW5kJyk7XG5jb25zdCBwYXJzZSA9IHJlcXVpcmUoJy4vbGliL3BhcnNlJyk7XG5cbi8qKlxuICogRXhwYW5kIHRoZSBnaXZlbiBwYXR0ZXJuIG9yIGNyZWF0ZSBhIHJlZ2V4LWNvbXBhdGlibGUgc3RyaW5nLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBicmFjZXMgPSByZXF1aXJlKCdicmFjZXMnKTtcbiAqIGNvbnNvbGUubG9nKGJyYWNlcygne2EsYixjfScsIHsgY29tcGlsZTogdHJ1ZSB9KSk7IC8vPT4gWycoYXxifGMpJ11cbiAqIGNvbnNvbGUubG9nKGJyYWNlcygne2EsYixjfScpKTsgLy89PiBbJ2EnLCAnYicsICdjJ11cbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd9IGBzdHJgXG4gKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmNvbnN0IGJyYWNlcyA9IChpbnB1dCwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIGxldCBvdXRwdXQgPSBbXTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcbiAgICBmb3IgKGxldCBwYXR0ZXJuIG9mIGlucHV0KSB7XG4gICAgICBsZXQgcmVzdWx0ID0gYnJhY2VzLmNyZWF0ZShwYXR0ZXJuLCBvcHRpb25zKTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpIHtcbiAgICAgICAgb3V0cHV0LnB1c2goLi4ucmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG91dHB1dC5wdXNoKHJlc3VsdCk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG91dHB1dCA9IFtdLmNvbmNhdChicmFjZXMuY3JlYXRlKGlucHV0LCBvcHRpb25zKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmV4cGFuZCA9PT0gdHJ1ZSAmJiBvcHRpb25zLm5vZHVwZXMgPT09IHRydWUpIHtcbiAgICBvdXRwdXQgPSBbLi4ubmV3IFNldChvdXRwdXQpXTtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYHN0cmAgd2l0aCB0aGUgZ2l2ZW4gYG9wdGlvbnNgLlxuICpcbiAqIGBgYGpzXG4gKiAvLyBicmFjZXMucGFyc2UocGF0dGVybiwgWywgb3B0aW9uc10pO1xuICogY29uc3QgYXN0ID0gYnJhY2VzLnBhcnNlKCdhL3tiLGN9L2QnKTtcbiAqIGNvbnNvbGUubG9nKGFzdCk7XG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXR0ZXJuIEJyYWNlIHBhdHRlcm4gdG8gcGFyc2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtPYmplY3R9IFJldHVybnMgYW4gQVNUXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmJyYWNlcy5wYXJzZSA9IChpbnB1dCwgb3B0aW9ucyA9IHt9KSA9PiBwYXJzZShpbnB1dCwgb3B0aW9ucyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGJyYWNlcyBzdHJpbmcgZnJvbSBhbiBBU1QsIG9yIGFuIEFTVCBub2RlLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBicmFjZXMgPSByZXF1aXJlKCdicmFjZXMnKTtcbiAqIGxldCBhc3QgPSBicmFjZXMucGFyc2UoJ2Zvby97YSxifS9iYXInKTtcbiAqIGNvbnNvbGUubG9nKHN0cmluZ2lmeShhc3Qubm9kZXNbMl0pKTsgLy89PiAne2EsYn0nXG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfSBgaW5wdXRgIEJyYWNlIHBhdHRlcm4gb3IgQVNULlxuICogQHBhcmFtIHtPYmplY3R9IGBvcHRpb25zYFxuICogQHJldHVybiB7QXJyYXl9IFJldHVybnMgYW4gYXJyYXkgb2YgZXhwYW5kZWQgdmFsdWVzLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5icmFjZXMuc3RyaW5naWZ5ID0gKGlucHV0LCBvcHRpb25zID0ge30pID0+IHtcbiAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gc3RyaW5naWZ5KGJyYWNlcy5wYXJzZShpbnB1dCwgb3B0aW9ucyksIG9wdGlvbnMpO1xuICB9XG4gIHJldHVybiBzdHJpbmdpZnkoaW5wdXQsIG9wdGlvbnMpO1xufTtcblxuLyoqXG4gKiBDb21waWxlcyBhIGJyYWNlIHBhdHRlcm4gaW50byBhIHJlZ2V4LWNvbXBhdGlibGUsIG9wdGltaXplZCBzdHJpbmcuXG4gKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgdGhlIG1haW4gW2JyYWNlc10oI2JyYWNlcykgZnVuY3Rpb24gYnkgZGVmYXVsdC5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgYnJhY2VzID0gcmVxdWlyZSgnYnJhY2VzJyk7XG4gKiBjb25zb2xlLmxvZyhicmFjZXMuY29tcGlsZSgnYS97YixjfS9kJykpO1xuICogLy89PiBbJ2EvKGJ8YykvZCddXG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfSBgaW5wdXRgIEJyYWNlIHBhdHRlcm4gb3IgQVNULlxuICogQHBhcmFtIHtPYmplY3R9IGBvcHRpb25zYFxuICogQHJldHVybiB7QXJyYXl9IFJldHVybnMgYW4gYXJyYXkgb2YgZXhwYW5kZWQgdmFsdWVzLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5icmFjZXMuY29tcGlsZSA9IChpbnB1dCwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgaW5wdXQgPSBicmFjZXMucGFyc2UoaW5wdXQsIG9wdGlvbnMpO1xuICB9XG4gIHJldHVybiBjb21waWxlKGlucHV0LCBvcHRpb25zKTtcbn07XG5cbi8qKlxuICogRXhwYW5kcyBhIGJyYWNlIHBhdHRlcm4gaW50byBhbiBhcnJheS4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJ5IHRoZVxuICogbWFpbiBbYnJhY2VzXSgjYnJhY2VzKSBmdW5jdGlvbiB3aGVuIGBvcHRpb25zLmV4cGFuZGAgaXMgdHJ1ZS4gQmVmb3JlXG4gKiB1c2luZyB0aGlzIG1ldGhvZCBpdCdzIHJlY29tbWVuZGVkIHRoYXQgeW91IHJlYWQgdGhlIFtwZXJmb3JtYW5jZSBub3Rlc10oI3BlcmZvcm1hbmNlKSlcbiAqIGFuZCBhZHZhbnRhZ2VzIG9mIHVzaW5nIFsuY29tcGlsZV0oI2NvbXBpbGUpIGluc3RlYWQuXG4gKlxuICogYGBganNcbiAqIGNvbnN0IGJyYWNlcyA9IHJlcXVpcmUoJ2JyYWNlcycpO1xuICogY29uc29sZS5sb2coYnJhY2VzLmV4cGFuZCgnYS97YixjfS9kJykpO1xuICogLy89PiBbJ2EvYi9kJywgJ2EvYy9kJ107XG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfSBgcGF0dGVybmAgQnJhY2UgcGF0dGVyblxuICogQHBhcmFtIHtPYmplY3R9IGBvcHRpb25zYFxuICogQHJldHVybiB7QXJyYXl9IFJldHVybnMgYW4gYXJyYXkgb2YgZXhwYW5kZWQgdmFsdWVzLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5icmFjZXMuZXhwYW5kID0gKGlucHV0LCBvcHRpb25zID0ge30pID0+IHtcbiAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICBpbnB1dCA9IGJyYWNlcy5wYXJzZShpbnB1dCwgb3B0aW9ucyk7XG4gIH1cblxuICBsZXQgcmVzdWx0ID0gZXhwYW5kKGlucHV0LCBvcHRpb25zKTtcblxuICAvLyBmaWx0ZXIgb3V0IGVtcHR5IHN0cmluZ3MgaWYgc3BlY2lmaWVkXG4gIGlmIChvcHRpb25zLm5vZW1wdHkgPT09IHRydWUpIHtcbiAgICByZXN1bHQgPSByZXN1bHQuZmlsdGVyKEJvb2xlYW4pO1xuICB9XG5cbiAgLy8gZmlsdGVyIG91dCBkdXBsaWNhdGVzIGlmIHNwZWNpZmllZFxuICBpZiAob3B0aW9ucy5ub2R1cGVzID09PSB0cnVlKSB7XG4gICAgcmVzdWx0ID0gWy4uLm5ldyBTZXQocmVzdWx0KV07XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBQcm9jZXNzZXMgYSBicmFjZSBwYXR0ZXJuIGFuZCByZXR1cm5zIGVpdGhlciBhbiBleHBhbmRlZCBhcnJheVxuICogKGlmIGBvcHRpb25zLmV4cGFuZGAgaXMgdHJ1ZSksIGEgaGlnaGx5IG9wdGltaXplZCByZWdleC1jb21wYXRpYmxlIHN0cmluZy5cbiAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBieSB0aGUgbWFpbiBbYnJhY2VzXSgjYnJhY2VzKSBmdW5jdGlvbi5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgYnJhY2VzID0gcmVxdWlyZSgnYnJhY2VzJyk7XG4gKiBjb25zb2xlLmxvZyhicmFjZXMuY3JlYXRlKCd1c2VyLXsyMDAuLjMwMH0vcHJvamVjdC17YSxiLGN9LXsxLi4xMH0nKSlcbiAqIC8vPT4gJ3VzZXItKDIwWzAtOV18MlsxLTldWzAtOV18MzAwKS9wcm9qZWN0LShhfGJ8YyktKFsxLTldfDEwKSdcbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd9IGBwYXR0ZXJuYCBCcmFjZSBwYXR0ZXJuXG4gKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgXG4gKiBAcmV0dXJuIHtBcnJheX0gUmV0dXJucyBhbiBhcnJheSBvZiBleHBhbmRlZCB2YWx1ZXMuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmJyYWNlcy5jcmVhdGUgPSAoaW5wdXQsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBpZiAoaW5wdXQgPT09ICcnIHx8IGlucHV0Lmxlbmd0aCA8IDMpIHtcbiAgICByZXR1cm4gW2lucHV0XTtcbiAgfVxuXG4gcmV0dXJuIG9wdGlvbnMuZXhwYW5kICE9PSB0cnVlXG4gICAgPyBicmFjZXMuY29tcGlsZShpbnB1dCwgb3B0aW9ucylcbiAgICA6IGJyYWNlcy5leHBhbmQoaW5wdXQsIG9wdGlvbnMpO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgXCJicmFjZXNcIlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYnJhY2VzO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbmNvbnN0IFdJTl9TTEFTSCA9ICdcXFxcXFxcXC8nO1xuY29uc3QgV0lOX05PX1NMQVNIID0gYFteJHtXSU5fU0xBU0h9XWA7XG5cbi8qKlxuICogUG9zaXggZ2xvYiByZWdleFxuICovXG5cbmNvbnN0IERPVF9MSVRFUkFMID0gJ1xcXFwuJztcbmNvbnN0IFBMVVNfTElURVJBTCA9ICdcXFxcKyc7XG5jb25zdCBRTUFSS19MSVRFUkFMID0gJ1xcXFw/JztcbmNvbnN0IFNMQVNIX0xJVEVSQUwgPSAnXFxcXC8nO1xuY29uc3QgT05FX0NIQVIgPSAnKD89LiknO1xuY29uc3QgUU1BUksgPSAnW14vXSc7XG5jb25zdCBFTkRfQU5DSE9SID0gYCg/OiR7U0xBU0hfTElURVJBTH18JClgO1xuY29uc3QgU1RBUlRfQU5DSE9SID0gYCg/Ol58JHtTTEFTSF9MSVRFUkFMfSlgO1xuY29uc3QgRE9UU19TTEFTSCA9IGAke0RPVF9MSVRFUkFMfXsxLDJ9JHtFTkRfQU5DSE9SfWA7XG5jb25zdCBOT19ET1QgPSBgKD8hJHtET1RfTElURVJBTH0pYDtcbmNvbnN0IE5PX0RPVFMgPSBgKD8hJHtTVEFSVF9BTkNIT1J9JHtET1RTX1NMQVNIfSlgO1xuY29uc3QgTk9fRE9UX1NMQVNIID0gYCg/ISR7RE9UX0xJVEVSQUx9ezAsMX0ke0VORF9BTkNIT1J9KWA7XG5jb25zdCBOT19ET1RTX1NMQVNIID0gYCg/ISR7RE9UU19TTEFTSH0pYDtcbmNvbnN0IFFNQVJLX05PX0RPVCA9IGBbXi4ke1NMQVNIX0xJVEVSQUx9XWA7XG5jb25zdCBTVEFSID0gYCR7UU1BUkt9Kj9gO1xuXG5jb25zdCBQT1NJWF9DSEFSUyA9IHtcbiAgRE9UX0xJVEVSQUwsXG4gIFBMVVNfTElURVJBTCxcbiAgUU1BUktfTElURVJBTCxcbiAgU0xBU0hfTElURVJBTCxcbiAgT05FX0NIQVIsXG4gIFFNQVJLLFxuICBFTkRfQU5DSE9SLFxuICBET1RTX1NMQVNILFxuICBOT19ET1QsXG4gIE5PX0RPVFMsXG4gIE5PX0RPVF9TTEFTSCxcbiAgTk9fRE9UU19TTEFTSCxcbiAgUU1BUktfTk9fRE9ULFxuICBTVEFSLFxuICBTVEFSVF9BTkNIT1Jcbn07XG5cbi8qKlxuICogV2luZG93cyBnbG9iIHJlZ2V4XG4gKi9cblxuY29uc3QgV0lORE9XU19DSEFSUyA9IHtcbiAgLi4uUE9TSVhfQ0hBUlMsXG5cbiAgU0xBU0hfTElURVJBTDogYFske1dJTl9TTEFTSH1dYCxcbiAgUU1BUks6IFdJTl9OT19TTEFTSCxcbiAgU1RBUjogYCR7V0lOX05PX1NMQVNIfSo/YCxcbiAgRE9UU19TTEFTSDogYCR7RE9UX0xJVEVSQUx9ezEsMn0oPzpbJHtXSU5fU0xBU0h9XXwkKWAsXG4gIE5PX0RPVDogYCg/ISR7RE9UX0xJVEVSQUx9KWAsXG4gIE5PX0RPVFM6IGAoPyEoPzpefFske1dJTl9TTEFTSH1dKSR7RE9UX0xJVEVSQUx9ezEsMn0oPzpbJHtXSU5fU0xBU0h9XXwkKSlgLFxuICBOT19ET1RfU0xBU0g6IGAoPyEke0RPVF9MSVRFUkFMfXswLDF9KD86WyR7V0lOX1NMQVNIfV18JCkpYCxcbiAgTk9fRE9UU19TTEFTSDogYCg/ISR7RE9UX0xJVEVSQUx9ezEsMn0oPzpbJHtXSU5fU0xBU0h9XXwkKSlgLFxuICBRTUFSS19OT19ET1Q6IGBbXi4ke1dJTl9TTEFTSH1dYCxcbiAgU1RBUlRfQU5DSE9SOiBgKD86XnxbJHtXSU5fU0xBU0h9XSlgLFxuICBFTkRfQU5DSE9SOiBgKD86WyR7V0lOX1NMQVNIfV18JClgXG59O1xuXG4vKipcbiAqIFBPU0lYIEJyYWNrZXQgUmVnZXhcbiAqL1xuXG5jb25zdCBQT1NJWF9SRUdFWF9TT1VSQ0UgPSB7XG4gIGFsbnVtOiAnYS16QS1aMC05JyxcbiAgYWxwaGE6ICdhLXpBLVonLFxuICBhc2NpaTogJ1xcXFx4MDAtXFxcXHg3RicsXG4gIGJsYW5rOiAnIFxcXFx0JyxcbiAgY250cmw6ICdcXFxceDAwLVxcXFx4MUZcXFxceDdGJyxcbiAgZGlnaXQ6ICcwLTknLFxuICBncmFwaDogJ1xcXFx4MjEtXFxcXHg3RScsXG4gIGxvd2VyOiAnYS16JyxcbiAgcHJpbnQ6ICdcXFxceDIwLVxcXFx4N0UgJyxcbiAgcHVuY3Q6ICdcXFxcLSFcIiMkJSZcXCcoKVxcXFwqKywuLzo7PD0+P0BbXFxcXF1eX2B7fH1+JyxcbiAgc3BhY2U6ICcgXFxcXHRcXFxcclxcXFxuXFxcXHZcXFxcZicsXG4gIHVwcGVyOiAnQS1aJyxcbiAgd29yZDogJ0EtWmEtejAtOV8nLFxuICB4ZGlnaXQ6ICdBLUZhLWYwLTknXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgTUFYX0xFTkdUSDogMTAyNCAqIDY0LFxuICBQT1NJWF9SRUdFWF9TT1VSQ0UsXG5cbiAgLy8gcmVndWxhciBleHByZXNzaW9uc1xuICBSRUdFWF9CQUNLU0xBU0g6IC9cXFxcKD8hWyorP14ke30ofClbXFxdXSkvZyxcbiAgUkVHRVhfTk9OX1NQRUNJQUxfQ0hBUlM6IC9eW15AIVtcXF0uLCQqKz9ee30oKXxcXFxcL10rLyxcbiAgUkVHRVhfU1BFQ0lBTF9DSEFSUzogL1stKis/Ll4ke30ofClbXFxdXS8sXG4gIFJFR0VYX1NQRUNJQUxfQ0hBUlNfQkFDS1JFRjogLyhcXFxcPykoKFxcVykoXFwzKikpL2csXG4gIFJFR0VYX1NQRUNJQUxfQ0hBUlNfR0xPQkFMOiAvKFstKis/Ll4ke30ofClbXFxdXSkvZyxcbiAgUkVHRVhfUkVNT1ZFX0JBQ0tTTEFTSDogLyg/OlxcWy4qP1teXFxcXF1cXF18XFxcXCg/PS4pKS9nLFxuXG4gIC8vIFJlcGxhY2UgZ2xvYnMgd2l0aCBlcXVpdmFsZW50IHBhdHRlcm5zIHRvIHJlZHVjZSBwYXJzaW5nIHRpbWUuXG4gIFJFUExBQ0VNRU5UUzoge1xuICAgICcqKionOiAnKicsXG4gICAgJyoqLyoqJzogJyoqJyxcbiAgICAnKiovKiovKionOiAnKionXG4gIH0sXG5cbiAgLy8gRGlnaXRzXG4gIENIQVJfMDogNDgsIC8qIDAgKi9cbiAgQ0hBUl85OiA1NywgLyogOSAqL1xuXG4gIC8vIEFscGhhYmV0IGNoYXJzLlxuICBDSEFSX1VQUEVSQ0FTRV9BOiA2NSwgLyogQSAqL1xuICBDSEFSX0xPV0VSQ0FTRV9BOiA5NywgLyogYSAqL1xuICBDSEFSX1VQUEVSQ0FTRV9aOiA5MCwgLyogWiAqL1xuICBDSEFSX0xPV0VSQ0FTRV9aOiAxMjIsIC8qIHogKi9cblxuICBDSEFSX0xFRlRfUEFSRU5USEVTRVM6IDQwLCAvKiAoICovXG4gIENIQVJfUklHSFRfUEFSRU5USEVTRVM6IDQxLCAvKiApICovXG5cbiAgQ0hBUl9BU1RFUklTSzogNDIsIC8qICogKi9cblxuICAvLyBOb24tYWxwaGFiZXRpYyBjaGFycy5cbiAgQ0hBUl9BTVBFUlNBTkQ6IDM4LCAvKiAmICovXG4gIENIQVJfQVQ6IDY0LCAvKiBAICovXG4gIENIQVJfQkFDS1dBUkRfU0xBU0g6IDkyLCAvKiBcXCAqL1xuICBDSEFSX0NBUlJJQUdFX1JFVFVSTjogMTMsIC8qIFxcciAqL1xuICBDSEFSX0NJUkNVTUZMRVhfQUNDRU5UOiA5NCwgLyogXiAqL1xuICBDSEFSX0NPTE9OOiA1OCwgLyogOiAqL1xuICBDSEFSX0NPTU1BOiA0NCwgLyogLCAqL1xuICBDSEFSX0RPVDogNDYsIC8qIC4gKi9cbiAgQ0hBUl9ET1VCTEVfUVVPVEU6IDM0LCAvKiBcIiAqL1xuICBDSEFSX0VRVUFMOiA2MSwgLyogPSAqL1xuICBDSEFSX0VYQ0xBTUFUSU9OX01BUks6IDMzLCAvKiAhICovXG4gIENIQVJfRk9STV9GRUVEOiAxMiwgLyogXFxmICovXG4gIENIQVJfRk9SV0FSRF9TTEFTSDogNDcsIC8qIC8gKi9cbiAgQ0hBUl9HUkFWRV9BQ0NFTlQ6IDk2LCAvKiBgICovXG4gIENIQVJfSEFTSDogMzUsIC8qICMgKi9cbiAgQ0hBUl9IWVBIRU5fTUlOVVM6IDQ1LCAvKiAtICovXG4gIENIQVJfTEVGVF9BTkdMRV9CUkFDS0VUOiA2MCwgLyogPCAqL1xuICBDSEFSX0xFRlRfQ1VSTFlfQlJBQ0U6IDEyMywgLyogeyAqL1xuICBDSEFSX0xFRlRfU1FVQVJFX0JSQUNLRVQ6IDkxLCAvKiBbICovXG4gIENIQVJfTElORV9GRUVEOiAxMCwgLyogXFxuICovXG4gIENIQVJfTk9fQlJFQUtfU1BBQ0U6IDE2MCwgLyogXFx1MDBBMCAqL1xuICBDSEFSX1BFUkNFTlQ6IDM3LCAvKiAlICovXG4gIENIQVJfUExVUzogNDMsIC8qICsgKi9cbiAgQ0hBUl9RVUVTVElPTl9NQVJLOiA2MywgLyogPyAqL1xuICBDSEFSX1JJR0hUX0FOR0xFX0JSQUNLRVQ6IDYyLCAvKiA+ICovXG4gIENIQVJfUklHSFRfQ1VSTFlfQlJBQ0U6IDEyNSwgLyogfSAqL1xuICBDSEFSX1JJR0hUX1NRVUFSRV9CUkFDS0VUOiA5MywgLyogXSAqL1xuICBDSEFSX1NFTUlDT0xPTjogNTksIC8qIDsgKi9cbiAgQ0hBUl9TSU5HTEVfUVVPVEU6IDM5LCAvKiAnICovXG4gIENIQVJfU1BBQ0U6IDMyLCAvKiAgICovXG4gIENIQVJfVEFCOiA5LCAvKiBcXHQgKi9cbiAgQ0hBUl9VTkRFUlNDT1JFOiA5NSwgLyogXyAqL1xuICBDSEFSX1ZFUlRJQ0FMX0xJTkU6IDEyNCwgLyogfCAqL1xuICBDSEFSX1pFUk9fV0lEVEhfTk9CUkVBS19TUEFDRTogNjUyNzksIC8qIFxcdUZFRkYgKi9cblxuICBTRVA6IHBhdGguc2VwLFxuXG4gIC8qKlxuICAgKiBDcmVhdGUgRVhUR0xPQl9DSEFSU1xuICAgKi9cblxuICBleHRnbG9iQ2hhcnMoY2hhcnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJyEnOiB7IHR5cGU6ICduZWdhdGUnLCBvcGVuOiAnKD86KD8hKD86JywgY2xvc2U6IGApKSR7Y2hhcnMuU1RBUn0pYCB9LFxuICAgICAgJz8nOiB7IHR5cGU6ICdxbWFyaycsIG9wZW46ICcoPzonLCBjbG9zZTogJyk/JyB9LFxuICAgICAgJysnOiB7IHR5cGU6ICdwbHVzJywgb3BlbjogJyg/OicsIGNsb3NlOiAnKSsnIH0sXG4gICAgICAnKic6IHsgdHlwZTogJ3N0YXInLCBvcGVuOiAnKD86JywgY2xvc2U6ICcpKicgfSxcbiAgICAgICdAJzogeyB0eXBlOiAnYXQnLCBvcGVuOiAnKD86JywgY2xvc2U6ICcpJyB9XG4gICAgfTtcbiAgfSxcblxuICAvKipcbiAgICogQ3JlYXRlIEdMT0JfQ0hBUlNcbiAgICovXG5cbiAgZ2xvYkNoYXJzKHdpbjMyKSB7XG4gICAgcmV0dXJuIHdpbjMyID09PSB0cnVlID8gV0lORE9XU19DSEFSUyA6IFBPU0lYX0NIQVJTO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbmNvbnN0IHdpbjMyID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJztcbmNvbnN0IHtcbiAgUkVHRVhfQkFDS1NMQVNILFxuICBSRUdFWF9SRU1PVkVfQkFDS1NMQVNILFxuICBSRUdFWF9TUEVDSUFMX0NIQVJTLFxuICBSRUdFWF9TUEVDSUFMX0NIQVJTX0dMT0JBTFxufSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbmV4cG9ydHMuaXNPYmplY3QgPSB2YWwgPT4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbCk7XG5leHBvcnRzLmhhc1JlZ2V4Q2hhcnMgPSBzdHIgPT4gUkVHRVhfU1BFQ0lBTF9DSEFSUy50ZXN0KHN0cik7XG5leHBvcnRzLmlzUmVnZXhDaGFyID0gc3RyID0+IHN0ci5sZW5ndGggPT09IDEgJiYgZXhwb3J0cy5oYXNSZWdleENoYXJzKHN0cik7XG5leHBvcnRzLmVzY2FwZVJlZ2V4ID0gc3RyID0+IHN0ci5yZXBsYWNlKFJFR0VYX1NQRUNJQUxfQ0hBUlNfR0xPQkFMLCAnXFxcXCQxJyk7XG5leHBvcnRzLnRvUG9zaXhTbGFzaGVzID0gc3RyID0+IHN0ci5yZXBsYWNlKFJFR0VYX0JBQ0tTTEFTSCwgJy8nKTtcblxuZXhwb3J0cy5yZW1vdmVCYWNrc2xhc2hlcyA9IHN0ciA9PiB7XG4gIHJldHVybiBzdHIucmVwbGFjZShSRUdFWF9SRU1PVkVfQkFDS1NMQVNILCBtYXRjaCA9PiB7XG4gICAgcmV0dXJuIG1hdGNoID09PSAnXFxcXCcgPyAnJyA6IG1hdGNoO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuc3VwcG9ydHNMb29rYmVoaW5kcyA9ICgpID0+IHtcbiAgY29uc3Qgc2VncyA9IHByb2Nlc3MudmVyc2lvbi5zbGljZSgxKS5zcGxpdCgnLicpLm1hcChOdW1iZXIpO1xuICBpZiAoc2Vncy5sZW5ndGggPT09IDMgJiYgc2Vnc1swXSA+PSA5IHx8IChzZWdzWzBdID09PSA4ICYmIHNlZ3NbMV0gPj0gMTApKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0cy5pc1dpbmRvd3MgPSBvcHRpb25zID0+IHtcbiAgaWYgKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMud2luZG93cyA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMud2luZG93cztcbiAgfVxuICByZXR1cm4gd2luMzIgPT09IHRydWUgfHwgcGF0aC5zZXAgPT09ICdcXFxcJztcbn07XG5cbmV4cG9ydHMuZXNjYXBlTGFzdCA9IChpbnB1dCwgY2hhciwgbGFzdElkeCkgPT4ge1xuICBjb25zdCBpZHggPSBpbnB1dC5sYXN0SW5kZXhPZihjaGFyLCBsYXN0SWR4KTtcbiAgaWYgKGlkeCA9PT0gLTEpIHJldHVybiBpbnB1dDtcbiAgaWYgKGlucHV0W2lkeCAtIDFdID09PSAnXFxcXCcpIHJldHVybiBleHBvcnRzLmVzY2FwZUxhc3QoaW5wdXQsIGNoYXIsIGlkeCAtIDEpO1xuICByZXR1cm4gYCR7aW5wdXQuc2xpY2UoMCwgaWR4KX1cXFxcJHtpbnB1dC5zbGljZShpZHgpfWA7XG59O1xuXG5leHBvcnRzLnJlbW92ZVByZWZpeCA9IChpbnB1dCwgc3RhdGUgPSB7fSkgPT4ge1xuICBsZXQgb3V0cHV0ID0gaW5wdXQ7XG4gIGlmIChvdXRwdXQuc3RhcnRzV2l0aCgnLi8nKSkge1xuICAgIG91dHB1dCA9IG91dHB1dC5zbGljZSgyKTtcbiAgICBzdGF0ZS5wcmVmaXggPSAnLi8nO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59O1xuXG5leHBvcnRzLndyYXBPdXRwdXQgPSAoaW5wdXQsIHN0YXRlID0ge30sIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBjb25zdCBwcmVwZW5kID0gb3B0aW9ucy5jb250YWlucyA/ICcnIDogJ14nO1xuICBjb25zdCBhcHBlbmQgPSBvcHRpb25zLmNvbnRhaW5zID8gJycgOiAnJCc7XG5cbiAgbGV0IG91dHB1dCA9IGAke3ByZXBlbmR9KD86JHtpbnB1dH0pJHthcHBlbmR9YDtcbiAgaWYgKHN0YXRlLm5lZ2F0ZWQgPT09IHRydWUpIHtcbiAgICBvdXRwdXQgPSBgKD86Xig/ISR7b3V0cHV0fSkuKiQpYDtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuY29uc3Qge1xuICBDSEFSX0FTVEVSSVNLLCAgICAgICAgICAgICAvKiAqICovXG4gIENIQVJfQVQsICAgICAgICAgICAgICAgICAgIC8qIEAgKi9cbiAgQ0hBUl9CQUNLV0FSRF9TTEFTSCwgICAgICAgLyogXFwgKi9cbiAgQ0hBUl9DT01NQSwgICAgICAgICAgICAgICAgLyogLCAqL1xuICBDSEFSX0RPVCwgICAgICAgICAgICAgICAgICAvKiAuICovXG4gIENIQVJfRVhDTEFNQVRJT05fTUFSSywgICAgIC8qICEgKi9cbiAgQ0hBUl9GT1JXQVJEX1NMQVNILCAgICAgICAgLyogLyAqL1xuICBDSEFSX0xFRlRfQ1VSTFlfQlJBQ0UsICAgICAvKiB7ICovXG4gIENIQVJfTEVGVF9QQVJFTlRIRVNFUywgICAgIC8qICggKi9cbiAgQ0hBUl9MRUZUX1NRVUFSRV9CUkFDS0VULCAgLyogWyAqL1xuICBDSEFSX1BMVVMsICAgICAgICAgICAgICAgICAvKiArICovXG4gIENIQVJfUVVFU1RJT05fTUFSSywgICAgICAgIC8qID8gKi9cbiAgQ0hBUl9SSUdIVF9DVVJMWV9CUkFDRSwgICAgLyogfSAqL1xuICBDSEFSX1JJR0hUX1BBUkVOVEhFU0VTLCAgICAvKiApICovXG4gIENIQVJfUklHSFRfU1FVQVJFX0JSQUNLRVQgIC8qIF0gKi9cbn0gPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG5jb25zdCBpc1BhdGhTZXBhcmF0b3IgPSBjb2RlID0+IHtcbiAgcmV0dXJuIGNvZGUgPT09IENIQVJfRk9SV0FSRF9TTEFTSCB8fCBjb2RlID09PSBDSEFSX0JBQ0tXQVJEX1NMQVNIO1xufTtcblxuY29uc3QgZGVwdGggPSB0b2tlbiA9PiB7XG4gIGlmICh0b2tlbi5pc1ByZWZpeCAhPT0gdHJ1ZSkge1xuICAgIHRva2VuLmRlcHRoID0gdG9rZW4uaXNHbG9ic3RhciA/IEluZmluaXR5IDogMTtcbiAgfVxufTtcblxuLyoqXG4gKiBRdWlja2x5IHNjYW5zIGEgZ2xvYiBwYXR0ZXJuIGFuZCByZXR1cm5zIGFuIG9iamVjdCB3aXRoIGEgaGFuZGZ1bCBvZlxuICogdXNlZnVsIHByb3BlcnRpZXMsIGxpa2UgYGlzR2xvYmAsIGBwYXRoYCAodGhlIGxlYWRpbmcgbm9uLWdsb2IsIGlmIGl0IGV4aXN0cyksXG4gKiBgZ2xvYmAgKHRoZSBhY3R1YWwgcGF0dGVybiksIGBuZWdhdGVkYCAodHJ1ZSBpZiB0aGUgcGF0aCBzdGFydHMgd2l0aCBgIWAgYnV0IG5vdFxuICogd2l0aCBgIShgKSBhbmQgYG5lZ2F0ZWRFeHRnbG9iYCAodHJ1ZSBpZiB0aGUgcGF0aCBzdGFydHMgd2l0aCBgIShgKS5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgcG0gPSByZXF1aXJlKCdwaWNvbWF0Y2gnKTtcbiAqIGNvbnNvbGUubG9nKHBtLnNjYW4oJ2Zvby9iYXIvKi5qcycpKTtcbiAqIHsgaXNHbG9iOiB0cnVlLCBpbnB1dDogJ2Zvby9iYXIvKi5qcycsIGJhc2U6ICdmb28vYmFyJywgZ2xvYjogJyouanMnIH1cbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd9IGBzdHJgXG4gKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgXG4gKiBAcmV0dXJuIHtPYmplY3R9IFJldHVybnMgYW4gb2JqZWN0IHdpdGggdG9rZW5zIGFuZCByZWdleCBzb3VyY2Ugc3RyaW5nLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5jb25zdCBzY2FuID0gKGlucHV0LCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IG9wdHMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIGNvbnN0IGxlbmd0aCA9IGlucHV0Lmxlbmd0aCAtIDE7XG4gIGNvbnN0IHNjYW5Ub0VuZCA9IG9wdHMucGFydHMgPT09IHRydWUgfHwgb3B0cy5zY2FuVG9FbmQgPT09IHRydWU7XG4gIGNvbnN0IHNsYXNoZXMgPSBbXTtcbiAgY29uc3QgdG9rZW5zID0gW107XG4gIGNvbnN0IHBhcnRzID0gW107XG5cbiAgbGV0IHN0ciA9IGlucHV0O1xuICBsZXQgaW5kZXggPSAtMTtcbiAgbGV0IHN0YXJ0ID0gMDtcbiAgbGV0IGxhc3RJbmRleCA9IDA7XG4gIGxldCBpc0JyYWNlID0gZmFsc2U7XG4gIGxldCBpc0JyYWNrZXQgPSBmYWxzZTtcbiAgbGV0IGlzR2xvYiA9IGZhbHNlO1xuICBsZXQgaXNFeHRnbG9iID0gZmFsc2U7XG4gIGxldCBpc0dsb2JzdGFyID0gZmFsc2U7XG4gIGxldCBicmFjZUVzY2FwZWQgPSBmYWxzZTtcbiAgbGV0IGJhY2tzbGFzaGVzID0gZmFsc2U7XG4gIGxldCBuZWdhdGVkID0gZmFsc2U7XG4gIGxldCBuZWdhdGVkRXh0Z2xvYiA9IGZhbHNlO1xuICBsZXQgZmluaXNoZWQgPSBmYWxzZTtcbiAgbGV0IGJyYWNlcyA9IDA7XG4gIGxldCBwcmV2O1xuICBsZXQgY29kZTtcbiAgbGV0IHRva2VuID0geyB2YWx1ZTogJycsIGRlcHRoOiAwLCBpc0dsb2I6IGZhbHNlIH07XG5cbiAgY29uc3QgZW9zID0gKCkgPT4gaW5kZXggPj0gbGVuZ3RoO1xuICBjb25zdCBwZWVrID0gKCkgPT4gc3RyLmNoYXJDb2RlQXQoaW5kZXggKyAxKTtcbiAgY29uc3QgYWR2YW5jZSA9ICgpID0+IHtcbiAgICBwcmV2ID0gY29kZTtcbiAgICByZXR1cm4gc3RyLmNoYXJDb2RlQXQoKytpbmRleCk7XG4gIH07XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY29kZSA9IGFkdmFuY2UoKTtcbiAgICBsZXQgbmV4dDtcblxuICAgIGlmIChjb2RlID09PSBDSEFSX0JBQ0tXQVJEX1NMQVNIKSB7XG4gICAgICBiYWNrc2xhc2hlcyA9IHRva2VuLmJhY2tzbGFzaGVzID0gdHJ1ZTtcbiAgICAgIGNvZGUgPSBhZHZhbmNlKCk7XG5cbiAgICAgIGlmIChjb2RlID09PSBDSEFSX0xFRlRfQ1VSTFlfQlJBQ0UpIHtcbiAgICAgICAgYnJhY2VFc2NhcGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChicmFjZUVzY2FwZWQgPT09IHRydWUgfHwgY29kZSA9PT0gQ0hBUl9MRUZUX0NVUkxZX0JSQUNFKSB7XG4gICAgICBicmFjZXMrKztcblxuICAgICAgd2hpbGUgKGVvcygpICE9PSB0cnVlICYmIChjb2RlID0gYWR2YW5jZSgpKSkge1xuICAgICAgICBpZiAoY29kZSA9PT0gQ0hBUl9CQUNLV0FSRF9TTEFTSCkge1xuICAgICAgICAgIGJhY2tzbGFzaGVzID0gdG9rZW4uYmFja3NsYXNoZXMgPSB0cnVlO1xuICAgICAgICAgIGFkdmFuY2UoKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb2RlID09PSBDSEFSX0xFRlRfQ1VSTFlfQlJBQ0UpIHtcbiAgICAgICAgICBicmFjZXMrKztcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChicmFjZUVzY2FwZWQgIT09IHRydWUgJiYgY29kZSA9PT0gQ0hBUl9ET1QgJiYgKGNvZGUgPSBhZHZhbmNlKCkpID09PSBDSEFSX0RPVCkge1xuICAgICAgICAgIGlzQnJhY2UgPSB0b2tlbi5pc0JyYWNlID0gdHJ1ZTtcbiAgICAgICAgICBpc0dsb2IgPSB0b2tlbi5pc0dsb2IgPSB0cnVlO1xuICAgICAgICAgIGZpbmlzaGVkID0gdHJ1ZTtcblxuICAgICAgICAgIGlmIChzY2FuVG9FbmQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJyYWNlRXNjYXBlZCAhPT0gdHJ1ZSAmJiBjb2RlID09PSBDSEFSX0NPTU1BKSB7XG4gICAgICAgICAgaXNCcmFjZSA9IHRva2VuLmlzQnJhY2UgPSB0cnVlO1xuICAgICAgICAgIGlzR2xvYiA9IHRva2VuLmlzR2xvYiA9IHRydWU7XG4gICAgICAgICAgZmluaXNoZWQgPSB0cnVlO1xuXG4gICAgICAgICAgaWYgKHNjYW5Ub0VuZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29kZSA9PT0gQ0hBUl9SSUdIVF9DVVJMWV9CUkFDRSkge1xuICAgICAgICAgIGJyYWNlcy0tO1xuXG4gICAgICAgICAgaWYgKGJyYWNlcyA9PT0gMCkge1xuICAgICAgICAgICAgYnJhY2VFc2NhcGVkID0gZmFsc2U7XG4gICAgICAgICAgICBpc0JyYWNlID0gdG9rZW4uaXNCcmFjZSA9IHRydWU7XG4gICAgICAgICAgICBmaW5pc2hlZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHNjYW5Ub0VuZCA9PT0gdHJ1ZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IENIQVJfRk9SV0FSRF9TTEFTSCkge1xuICAgICAgc2xhc2hlcy5wdXNoKGluZGV4KTtcbiAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgIHRva2VuID0geyB2YWx1ZTogJycsIGRlcHRoOiAwLCBpc0dsb2I6IGZhbHNlIH07XG5cbiAgICAgIGlmIChmaW5pc2hlZCA9PT0gdHJ1ZSkgY29udGludWU7XG4gICAgICBpZiAocHJldiA9PT0gQ0hBUl9ET1QgJiYgaW5kZXggPT09IChzdGFydCArIDEpKSB7XG4gICAgICAgIHN0YXJ0ICs9IDI7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsYXN0SW5kZXggPSBpbmRleCArIDE7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5ub2V4dCAhPT0gdHJ1ZSkge1xuICAgICAgY29uc3QgaXNFeHRnbG9iQ2hhciA9IGNvZGUgPT09IENIQVJfUExVU1xuICAgICAgICB8fCBjb2RlID09PSBDSEFSX0FUXG4gICAgICAgIHx8IGNvZGUgPT09IENIQVJfQVNURVJJU0tcbiAgICAgICAgfHwgY29kZSA9PT0gQ0hBUl9RVUVTVElPTl9NQVJLXG4gICAgICAgIHx8IGNvZGUgPT09IENIQVJfRVhDTEFNQVRJT05fTUFSSztcblxuICAgICAgaWYgKGlzRXh0Z2xvYkNoYXIgPT09IHRydWUgJiYgcGVlaygpID09PSBDSEFSX0xFRlRfUEFSRU5USEVTRVMpIHtcbiAgICAgICAgaXNHbG9iID0gdG9rZW4uaXNHbG9iID0gdHJ1ZTtcbiAgICAgICAgaXNFeHRnbG9iID0gdG9rZW4uaXNFeHRnbG9iID0gdHJ1ZTtcbiAgICAgICAgZmluaXNoZWQgPSB0cnVlO1xuICAgICAgICBpZiAoY29kZSA9PT0gQ0hBUl9FWENMQU1BVElPTl9NQVJLICYmIGluZGV4ID09PSBzdGFydCkge1xuICAgICAgICAgIG5lZ2F0ZWRFeHRnbG9iID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzY2FuVG9FbmQgPT09IHRydWUpIHtcbiAgICAgICAgICB3aGlsZSAoZW9zKCkgIT09IHRydWUgJiYgKGNvZGUgPSBhZHZhbmNlKCkpKSB7XG4gICAgICAgICAgICBpZiAoY29kZSA9PT0gQ0hBUl9CQUNLV0FSRF9TTEFTSCkge1xuICAgICAgICAgICAgICBiYWNrc2xhc2hlcyA9IHRva2VuLmJhY2tzbGFzaGVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgY29kZSA9IGFkdmFuY2UoKTtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb2RlID09PSBDSEFSX1JJR0hUX1BBUkVOVEhFU0VTKSB7XG4gICAgICAgICAgICAgIGlzR2xvYiA9IHRva2VuLmlzR2xvYiA9IHRydWU7XG4gICAgICAgICAgICAgIGZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSBDSEFSX0FTVEVSSVNLKSB7XG4gICAgICBpZiAocHJldiA9PT0gQ0hBUl9BU1RFUklTSykgaXNHbG9ic3RhciA9IHRva2VuLmlzR2xvYnN0YXIgPSB0cnVlO1xuICAgICAgaXNHbG9iID0gdG9rZW4uaXNHbG9iID0gdHJ1ZTtcbiAgICAgIGZpbmlzaGVkID0gdHJ1ZTtcblxuICAgICAgaWYgKHNjYW5Ub0VuZCA9PT0gdHJ1ZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChjb2RlID09PSBDSEFSX1FVRVNUSU9OX01BUkspIHtcbiAgICAgIGlzR2xvYiA9IHRva2VuLmlzR2xvYiA9IHRydWU7XG4gICAgICBmaW5pc2hlZCA9IHRydWU7XG5cbiAgICAgIGlmIChzY2FuVG9FbmQgPT09IHRydWUpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gQ0hBUl9MRUZUX1NRVUFSRV9CUkFDS0VUKSB7XG4gICAgICB3aGlsZSAoZW9zKCkgIT09IHRydWUgJiYgKG5leHQgPSBhZHZhbmNlKCkpKSB7XG4gICAgICAgIGlmIChuZXh0ID09PSBDSEFSX0JBQ0tXQVJEX1NMQVNIKSB7XG4gICAgICAgICAgYmFja3NsYXNoZXMgPSB0b2tlbi5iYWNrc2xhc2hlcyA9IHRydWU7XG4gICAgICAgICAgYWR2YW5jZSgpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5leHQgPT09IENIQVJfUklHSFRfU1FVQVJFX0JSQUNLRVQpIHtcbiAgICAgICAgICBpc0JyYWNrZXQgPSB0b2tlbi5pc0JyYWNrZXQgPSB0cnVlO1xuICAgICAgICAgIGlzR2xvYiA9IHRva2VuLmlzR2xvYiA9IHRydWU7XG4gICAgICAgICAgZmluaXNoZWQgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzY2FuVG9FbmQgPT09IHRydWUpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChvcHRzLm5vbmVnYXRlICE9PSB0cnVlICYmIGNvZGUgPT09IENIQVJfRVhDTEFNQVRJT05fTUFSSyAmJiBpbmRleCA9PT0gc3RhcnQpIHtcbiAgICAgIG5lZ2F0ZWQgPSB0b2tlbi5uZWdhdGVkID0gdHJ1ZTtcbiAgICAgIHN0YXJ0Kys7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5ub3BhcmVuICE9PSB0cnVlICYmIGNvZGUgPT09IENIQVJfTEVGVF9QQVJFTlRIRVNFUykge1xuICAgICAgaXNHbG9iID0gdG9rZW4uaXNHbG9iID0gdHJ1ZTtcblxuICAgICAgaWYgKHNjYW5Ub0VuZCA9PT0gdHJ1ZSkge1xuICAgICAgICB3aGlsZSAoZW9zKCkgIT09IHRydWUgJiYgKGNvZGUgPSBhZHZhbmNlKCkpKSB7XG4gICAgICAgICAgaWYgKGNvZGUgPT09IENIQVJfTEVGVF9QQVJFTlRIRVNFUykge1xuICAgICAgICAgICAgYmFja3NsYXNoZXMgPSB0b2tlbi5iYWNrc2xhc2hlcyA9IHRydWU7XG4gICAgICAgICAgICBjb2RlID0gYWR2YW5jZSgpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNvZGUgPT09IENIQVJfUklHSFRfUEFSRU5USEVTRVMpIHtcbiAgICAgICAgICAgIGZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChpc0dsb2IgPT09IHRydWUpIHtcbiAgICAgIGZpbmlzaGVkID0gdHJ1ZTtcblxuICAgICAgaWYgKHNjYW5Ub0VuZCA9PT0gdHJ1ZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKG9wdHMubm9leHQgPT09IHRydWUpIHtcbiAgICBpc0V4dGdsb2IgPSBmYWxzZTtcbiAgICBpc0dsb2IgPSBmYWxzZTtcbiAgfVxuXG4gIGxldCBiYXNlID0gc3RyO1xuICBsZXQgcHJlZml4ID0gJyc7XG4gIGxldCBnbG9iID0gJyc7XG5cbiAgaWYgKHN0YXJ0ID4gMCkge1xuICAgIHByZWZpeCA9IHN0ci5zbGljZSgwLCBzdGFydCk7XG4gICAgc3RyID0gc3RyLnNsaWNlKHN0YXJ0KTtcbiAgICBsYXN0SW5kZXggLT0gc3RhcnQ7XG4gIH1cblxuICBpZiAoYmFzZSAmJiBpc0dsb2IgPT09IHRydWUgJiYgbGFzdEluZGV4ID4gMCkge1xuICAgIGJhc2UgPSBzdHIuc2xpY2UoMCwgbGFzdEluZGV4KTtcbiAgICBnbG9iID0gc3RyLnNsaWNlKGxhc3RJbmRleCk7XG4gIH0gZWxzZSBpZiAoaXNHbG9iID09PSB0cnVlKSB7XG4gICAgYmFzZSA9ICcnO1xuICAgIGdsb2IgPSBzdHI7XG4gIH0gZWxzZSB7XG4gICAgYmFzZSA9IHN0cjtcbiAgfVxuXG4gIGlmIChiYXNlICYmIGJhc2UgIT09ICcnICYmIGJhc2UgIT09ICcvJyAmJiBiYXNlICE9PSBzdHIpIHtcbiAgICBpZiAoaXNQYXRoU2VwYXJhdG9yKGJhc2UuY2hhckNvZGVBdChiYXNlLmxlbmd0aCAtIDEpKSkge1xuICAgICAgYmFzZSA9IGJhc2Uuc2xpY2UoMCwgLTEpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChvcHRzLnVuZXNjYXBlID09PSB0cnVlKSB7XG4gICAgaWYgKGdsb2IpIGdsb2IgPSB1dGlscy5yZW1vdmVCYWNrc2xhc2hlcyhnbG9iKTtcblxuICAgIGlmIChiYXNlICYmIGJhY2tzbGFzaGVzID09PSB0cnVlKSB7XG4gICAgICBiYXNlID0gdXRpbHMucmVtb3ZlQmFja3NsYXNoZXMoYmFzZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc3RhdGUgPSB7XG4gICAgcHJlZml4LFxuICAgIGlucHV0LFxuICAgIHN0YXJ0LFxuICAgIGJhc2UsXG4gICAgZ2xvYixcbiAgICBpc0JyYWNlLFxuICAgIGlzQnJhY2tldCxcbiAgICBpc0dsb2IsXG4gICAgaXNFeHRnbG9iLFxuICAgIGlzR2xvYnN0YXIsXG4gICAgbmVnYXRlZCxcbiAgICBuZWdhdGVkRXh0Z2xvYlxuICB9O1xuXG4gIGlmIChvcHRzLnRva2VucyA9PT0gdHJ1ZSkge1xuICAgIHN0YXRlLm1heERlcHRoID0gMDtcbiAgICBpZiAoIWlzUGF0aFNlcGFyYXRvcihjb2RlKSkge1xuICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgIH1cbiAgICBzdGF0ZS50b2tlbnMgPSB0b2tlbnM7XG4gIH1cblxuICBpZiAob3B0cy5wYXJ0cyA9PT0gdHJ1ZSB8fCBvcHRzLnRva2VucyA9PT0gdHJ1ZSkge1xuICAgIGxldCBwcmV2SW5kZXg7XG5cbiAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBzbGFzaGVzLmxlbmd0aDsgaWR4KyspIHtcbiAgICAgIGNvbnN0IG4gPSBwcmV2SW5kZXggPyBwcmV2SW5kZXggKyAxIDogc3RhcnQ7XG4gICAgICBjb25zdCBpID0gc2xhc2hlc1tpZHhdO1xuICAgICAgY29uc3QgdmFsdWUgPSBpbnB1dC5zbGljZShuLCBpKTtcbiAgICAgIGlmIChvcHRzLnRva2Vucykge1xuICAgICAgICBpZiAoaWR4ID09PSAwICYmIHN0YXJ0ICE9PSAwKSB7XG4gICAgICAgICAgdG9rZW5zW2lkeF0uaXNQcmVmaXggPSB0cnVlO1xuICAgICAgICAgIHRva2Vuc1tpZHhdLnZhbHVlID0gcHJlZml4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRva2Vuc1tpZHhdLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZGVwdGgodG9rZW5zW2lkeF0pO1xuICAgICAgICBzdGF0ZS5tYXhEZXB0aCArPSB0b2tlbnNbaWR4XS5kZXB0aDtcbiAgICAgIH1cbiAgICAgIGlmIChpZHggIT09IDAgfHwgdmFsdWUgIT09ICcnKSB7XG4gICAgICAgIHBhcnRzLnB1c2godmFsdWUpO1xuICAgICAgfVxuICAgICAgcHJldkluZGV4ID0gaTtcbiAgICB9XG5cbiAgICBpZiAocHJldkluZGV4ICYmIHByZXZJbmRleCArIDEgPCBpbnB1dC5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gaW5wdXQuc2xpY2UocHJldkluZGV4ICsgMSk7XG4gICAgICBwYXJ0cy5wdXNoKHZhbHVlKTtcblxuICAgICAgaWYgKG9wdHMudG9rZW5zKSB7XG4gICAgICAgIHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV0udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgZGVwdGgodG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXSk7XG4gICAgICAgIHN0YXRlLm1heERlcHRoICs9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV0uZGVwdGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGUuc2xhc2hlcyA9IHNsYXNoZXM7XG4gICAgc3RhdGUucGFydHMgPSBwYXJ0cztcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2NhbjtcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCB7XG4gIE1BWF9MRU5HVEgsXG4gIFBPU0lYX1JFR0VYX1NPVVJDRSxcbiAgUkVHRVhfTk9OX1NQRUNJQUxfQ0hBUlMsXG4gIFJFR0VYX1NQRUNJQUxfQ0hBUlNfQkFDS1JFRixcbiAgUkVQTEFDRU1FTlRTXG59ID0gY29uc3RhbnRzO1xuXG4vKipcbiAqIEhlbHBlcnNcbiAqL1xuXG5jb25zdCBleHBhbmRSYW5nZSA9IChhcmdzLCBvcHRpb25zKSA9PiB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5leHBhbmRSYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBvcHRpb25zLmV4cGFuZFJhbmdlKC4uLmFyZ3MsIG9wdGlvbnMpO1xuICB9XG5cbiAgYXJncy5zb3J0KCk7XG4gIGNvbnN0IHZhbHVlID0gYFske2FyZ3Muam9pbignLScpfV1gO1xuXG4gIHRyeSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldyAqL1xuICAgIG5ldyBSZWdFeHAodmFsdWUpO1xuICB9IGNhdGNoIChleCkge1xuICAgIHJldHVybiBhcmdzLm1hcCh2ID0+IHV0aWxzLmVzY2FwZVJlZ2V4KHYpKS5qb2luKCcuLicpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIG1lc3NhZ2UgZm9yIGEgc3ludGF4IGVycm9yXG4gKi9cblxuY29uc3Qgc3ludGF4RXJyb3IgPSAodHlwZSwgY2hhcikgPT4ge1xuICByZXR1cm4gYE1pc3NpbmcgJHt0eXBlfTogXCIke2NoYXJ9XCIgLSB1c2UgXCJcXFxcXFxcXCR7Y2hhcn1cIiB0byBtYXRjaCBsaXRlcmFsIGNoYXJhY3RlcnNgO1xufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gaW5wdXQgc3RyaW5nLlxuICogQHBhcmFtIHtTdHJpbmd9IGlucHV0XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5cbmNvbnN0IHBhcnNlID0gKGlucHV0LCBvcHRpb25zKSA9PiB7XG4gIGlmICh0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBzdHJpbmcnKTtcbiAgfVxuXG4gIGlucHV0ID0gUkVQTEFDRU1FTlRTW2lucHV0XSB8fCBpbnB1dDtcblxuICBjb25zdCBvcHRzID0geyAuLi5vcHRpb25zIH07XG4gIGNvbnN0IG1heCA9IHR5cGVvZiBvcHRzLm1heExlbmd0aCA9PT0gJ251bWJlcicgPyBNYXRoLm1pbihNQVhfTEVOR1RILCBvcHRzLm1heExlbmd0aCkgOiBNQVhfTEVOR1RIO1xuXG4gIGxldCBsZW4gPSBpbnB1dC5sZW5ndGg7XG4gIGlmIChsZW4gPiBtYXgpIHtcbiAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYElucHV0IGxlbmd0aDogJHtsZW59LCBleGNlZWRzIG1heGltdW0gYWxsb3dlZCBsZW5ndGg6ICR7bWF4fWApO1xuICB9XG5cbiAgY29uc3QgYm9zID0geyB0eXBlOiAnYm9zJywgdmFsdWU6ICcnLCBvdXRwdXQ6IG9wdHMucHJlcGVuZCB8fCAnJyB9O1xuICBjb25zdCB0b2tlbnMgPSBbYm9zXTtcblxuICBjb25zdCBjYXB0dXJlID0gb3B0cy5jYXB0dXJlID8gJycgOiAnPzonO1xuICBjb25zdCB3aW4zMiA9IHV0aWxzLmlzV2luZG93cyhvcHRpb25zKTtcblxuICAvLyBjcmVhdGUgY29uc3RhbnRzIGJhc2VkIG9uIHBsYXRmb3JtLCBmb3Igd2luZG93cyBvciBwb3NpeFxuICBjb25zdCBQTEFURk9STV9DSEFSUyA9IGNvbnN0YW50cy5nbG9iQ2hhcnMod2luMzIpO1xuICBjb25zdCBFWFRHTE9CX0NIQVJTID0gY29uc3RhbnRzLmV4dGdsb2JDaGFycyhQTEFURk9STV9DSEFSUyk7XG5cbiAgY29uc3Qge1xuICAgIERPVF9MSVRFUkFMLFxuICAgIFBMVVNfTElURVJBTCxcbiAgICBTTEFTSF9MSVRFUkFMLFxuICAgIE9ORV9DSEFSLFxuICAgIERPVFNfU0xBU0gsXG4gICAgTk9fRE9ULFxuICAgIE5PX0RPVF9TTEFTSCxcbiAgICBOT19ET1RTX1NMQVNILFxuICAgIFFNQVJLLFxuICAgIFFNQVJLX05PX0RPVCxcbiAgICBTVEFSLFxuICAgIFNUQVJUX0FOQ0hPUlxuICB9ID0gUExBVEZPUk1fQ0hBUlM7XG5cbiAgY29uc3QgZ2xvYnN0YXIgPSBvcHRzID0+IHtcbiAgICByZXR1cm4gYCgke2NhcHR1cmV9KD86KD8hJHtTVEFSVF9BTkNIT1J9JHtvcHRzLmRvdCA/IERPVFNfU0xBU0ggOiBET1RfTElURVJBTH0pLikqPylgO1xuICB9O1xuXG4gIGNvbnN0IG5vZG90ID0gb3B0cy5kb3QgPyAnJyA6IE5PX0RPVDtcbiAgY29uc3QgcW1hcmtOb0RvdCA9IG9wdHMuZG90ID8gUU1BUksgOiBRTUFSS19OT19ET1Q7XG4gIGxldCBzdGFyID0gb3B0cy5iYXNoID09PSB0cnVlID8gZ2xvYnN0YXIob3B0cykgOiBTVEFSO1xuXG4gIGlmIChvcHRzLmNhcHR1cmUpIHtcbiAgICBzdGFyID0gYCgke3N0YXJ9KWA7XG4gIH1cblxuICAvLyBtaW5pbWF0Y2ggb3B0aW9ucyBzdXBwb3J0XG4gIGlmICh0eXBlb2Ygb3B0cy5ub2V4dCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0cy5ub2V4dGdsb2IgPSBvcHRzLm5vZXh0O1xuICB9XG5cbiAgY29uc3Qgc3RhdGUgPSB7XG4gICAgaW5wdXQsXG4gICAgaW5kZXg6IC0xLFxuICAgIHN0YXJ0OiAwLFxuICAgIGRvdDogb3B0cy5kb3QgPT09IHRydWUsXG4gICAgY29uc3VtZWQ6ICcnLFxuICAgIG91dHB1dDogJycsXG4gICAgcHJlZml4OiAnJyxcbiAgICBiYWNrdHJhY2s6IGZhbHNlLFxuICAgIG5lZ2F0ZWQ6IGZhbHNlLFxuICAgIGJyYWNrZXRzOiAwLFxuICAgIGJyYWNlczogMCxcbiAgICBwYXJlbnM6IDAsXG4gICAgcXVvdGVzOiAwLFxuICAgIGdsb2JzdGFyOiBmYWxzZSxcbiAgICB0b2tlbnNcbiAgfTtcblxuICBpbnB1dCA9IHV0aWxzLnJlbW92ZVByZWZpeChpbnB1dCwgc3RhdGUpO1xuICBsZW4gPSBpbnB1dC5sZW5ndGg7XG5cbiAgY29uc3QgZXh0Z2xvYnMgPSBbXTtcbiAgY29uc3QgYnJhY2VzID0gW107XG4gIGNvbnN0IHN0YWNrID0gW107XG4gIGxldCBwcmV2ID0gYm9zO1xuICBsZXQgdmFsdWU7XG5cbiAgLyoqXG4gICAqIFRva2VuaXppbmcgaGVscGVyc1xuICAgKi9cblxuICBjb25zdCBlb3MgPSAoKSA9PiBzdGF0ZS5pbmRleCA9PT0gbGVuIC0gMTtcbiAgY29uc3QgcGVlayA9IHN0YXRlLnBlZWsgPSAobiA9IDEpID0+IGlucHV0W3N0YXRlLmluZGV4ICsgbl07XG4gIGNvbnN0IGFkdmFuY2UgPSBzdGF0ZS5hZHZhbmNlID0gKCkgPT4gaW5wdXRbKytzdGF0ZS5pbmRleF0gfHwgJyc7XG4gIGNvbnN0IHJlbWFpbmluZyA9ICgpID0+IGlucHV0LnNsaWNlKHN0YXRlLmluZGV4ICsgMSk7XG4gIGNvbnN0IGNvbnN1bWUgPSAodmFsdWUgPSAnJywgbnVtID0gMCkgPT4ge1xuICAgIHN0YXRlLmNvbnN1bWVkICs9IHZhbHVlO1xuICAgIHN0YXRlLmluZGV4ICs9IG51bTtcbiAgfTtcblxuICBjb25zdCBhcHBlbmQgPSB0b2tlbiA9PiB7XG4gICAgc3RhdGUub3V0cHV0ICs9IHRva2VuLm91dHB1dCAhPSBudWxsID8gdG9rZW4ub3V0cHV0IDogdG9rZW4udmFsdWU7XG4gICAgY29uc3VtZSh0b2tlbi52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgbmVnYXRlID0gKCkgPT4ge1xuICAgIGxldCBjb3VudCA9IDE7XG5cbiAgICB3aGlsZSAocGVlaygpID09PSAnIScgJiYgKHBlZWsoMikgIT09ICcoJyB8fCBwZWVrKDMpID09PSAnPycpKSB7XG4gICAgICBhZHZhbmNlKCk7XG4gICAgICBzdGF0ZS5zdGFydCsrO1xuICAgICAgY291bnQrKztcbiAgICB9XG5cbiAgICBpZiAoY291bnQgJSAyID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgc3RhdGUubmVnYXRlZCA9IHRydWU7XG4gICAgc3RhdGUuc3RhcnQrKztcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBpbmNyZW1lbnQgPSB0eXBlID0+IHtcbiAgICBzdGF0ZVt0eXBlXSsrO1xuICAgIHN0YWNrLnB1c2godHlwZSk7XG4gIH07XG5cbiAgY29uc3QgZGVjcmVtZW50ID0gdHlwZSA9PiB7XG4gICAgc3RhdGVbdHlwZV0tLTtcbiAgICBzdGFjay5wb3AoKTtcbiAgfTtcblxuICAvKipcbiAgICogUHVzaCB0b2tlbnMgb250byB0aGUgdG9rZW5zIGFycmF5LiBUaGlzIGhlbHBlciBzcGVlZHMgdXBcbiAgICogdG9rZW5pemluZyBieSAxKSBoZWxwaW5nIHVzIGF2b2lkIGJhY2t0cmFja2luZyBhcyBtdWNoIGFzIHBvc3NpYmxlLFxuICAgKiBhbmQgMikgaGVscGluZyB1cyBhdm9pZCBjcmVhdGluZyBleHRyYSB0b2tlbnMgd2hlbiBjb25zZWN1dGl2ZVxuICAgKiBjaGFyYWN0ZXJzIGFyZSBwbGFpbiB0ZXh0LiBUaGlzIGltcHJvdmVzIHBlcmZvcm1hbmNlIGFuZCBzaW1wbGlmaWVzXG4gICAqIGxvb2tiZWhpbmRzLlxuICAgKi9cblxuICBjb25zdCBwdXNoID0gdG9rID0+IHtcbiAgICBpZiAocHJldi50eXBlID09PSAnZ2xvYnN0YXInKSB7XG4gICAgICBjb25zdCBpc0JyYWNlID0gc3RhdGUuYnJhY2VzID4gMCAmJiAodG9rLnR5cGUgPT09ICdjb21tYScgfHwgdG9rLnR5cGUgPT09ICdicmFjZScpO1xuICAgICAgY29uc3QgaXNFeHRnbG9iID0gdG9rLmV4dGdsb2IgPT09IHRydWUgfHwgKGV4dGdsb2JzLmxlbmd0aCAmJiAodG9rLnR5cGUgPT09ICdwaXBlJyB8fCB0b2sudHlwZSA9PT0gJ3BhcmVuJykpO1xuXG4gICAgICBpZiAodG9rLnR5cGUgIT09ICdzbGFzaCcgJiYgdG9rLnR5cGUgIT09ICdwYXJlbicgJiYgIWlzQnJhY2UgJiYgIWlzRXh0Z2xvYikge1xuICAgICAgICBzdGF0ZS5vdXRwdXQgPSBzdGF0ZS5vdXRwdXQuc2xpY2UoMCwgLXByZXYub3V0cHV0Lmxlbmd0aCk7XG4gICAgICAgIHByZXYudHlwZSA9ICdzdGFyJztcbiAgICAgICAgcHJldi52YWx1ZSA9ICcqJztcbiAgICAgICAgcHJldi5vdXRwdXQgPSBzdGFyO1xuICAgICAgICBzdGF0ZS5vdXRwdXQgKz0gcHJldi5vdXRwdXQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGV4dGdsb2JzLmxlbmd0aCAmJiB0b2sudHlwZSAhPT0gJ3BhcmVuJykge1xuICAgICAgZXh0Z2xvYnNbZXh0Z2xvYnMubGVuZ3RoIC0gMV0uaW5uZXIgKz0gdG9rLnZhbHVlO1xuICAgIH1cblxuICAgIGlmICh0b2sudmFsdWUgfHwgdG9rLm91dHB1dCkgYXBwZW5kKHRvayk7XG4gICAgaWYgKHByZXYgJiYgcHJldi50eXBlID09PSAndGV4dCcgJiYgdG9rLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgcHJldi52YWx1ZSArPSB0b2sudmFsdWU7XG4gICAgICBwcmV2Lm91dHB1dCA9IChwcmV2Lm91dHB1dCB8fCAnJykgKyB0b2sudmFsdWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rLnByZXYgPSBwcmV2O1xuICAgIHRva2Vucy5wdXNoKHRvayk7XG4gICAgcHJldiA9IHRvaztcbiAgfTtcblxuICBjb25zdCBleHRnbG9iT3BlbiA9ICh0eXBlLCB2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0geyAuLi5FWFRHTE9CX0NIQVJTW3ZhbHVlXSwgY29uZGl0aW9uczogMSwgaW5uZXI6ICcnIH07XG5cbiAgICB0b2tlbi5wcmV2ID0gcHJldjtcbiAgICB0b2tlbi5wYXJlbnMgPSBzdGF0ZS5wYXJlbnM7XG4gICAgdG9rZW4ub3V0cHV0ID0gc3RhdGUub3V0cHV0O1xuICAgIGNvbnN0IG91dHB1dCA9IChvcHRzLmNhcHR1cmUgPyAnKCcgOiAnJykgKyB0b2tlbi5vcGVuO1xuXG4gICAgaW5jcmVtZW50KCdwYXJlbnMnKTtcbiAgICBwdXNoKHsgdHlwZSwgdmFsdWUsIG91dHB1dDogc3RhdGUub3V0cHV0ID8gJycgOiBPTkVfQ0hBUiB9KTtcbiAgICBwdXNoKHsgdHlwZTogJ3BhcmVuJywgZXh0Z2xvYjogdHJ1ZSwgdmFsdWU6IGFkdmFuY2UoKSwgb3V0cHV0IH0pO1xuICAgIGV4dGdsb2JzLnB1c2godG9rZW4pO1xuICB9O1xuXG4gIGNvbnN0IGV4dGdsb2JDbG9zZSA9IHRva2VuID0+IHtcbiAgICBsZXQgb3V0cHV0ID0gdG9rZW4uY2xvc2UgKyAob3B0cy5jYXB0dXJlID8gJyknIDogJycpO1xuICAgIGxldCByZXN0O1xuXG4gICAgaWYgKHRva2VuLnR5cGUgPT09ICduZWdhdGUnKSB7XG4gICAgICBsZXQgZXh0Z2xvYlN0YXIgPSBzdGFyO1xuXG4gICAgICBpZiAodG9rZW4uaW5uZXIgJiYgdG9rZW4uaW5uZXIubGVuZ3RoID4gMSAmJiB0b2tlbi5pbm5lci5pbmNsdWRlcygnLycpKSB7XG4gICAgICAgIGV4dGdsb2JTdGFyID0gZ2xvYnN0YXIob3B0cyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChleHRnbG9iU3RhciAhPT0gc3RhciB8fCBlb3MoKSB8fCAvXlxcKSskLy50ZXN0KHJlbWFpbmluZygpKSkge1xuICAgICAgICBvdXRwdXQgPSB0b2tlbi5jbG9zZSA9IGApJCkpJHtleHRnbG9iU3Rhcn1gO1xuICAgICAgfVxuXG4gICAgICBpZiAodG9rZW4uaW5uZXIuaW5jbHVkZXMoJyonKSAmJiAocmVzdCA9IHJlbWFpbmluZygpKSAmJiAvXlxcLlteXFxcXC8uXSskLy50ZXN0KHJlc3QpKSB7XG4gICAgICAgIC8vIEFueSBub24tbWFnaWNhbCBzdHJpbmcgKGAudHNgKSBvciBldmVuIG5lc3RlZCBleHByZXNzaW9uIChgLnt0cyx0c3h9YCkgY2FuIGZvbGxvdyBhZnRlciB0aGUgY2xvc2luZyBwYXJlbnRoZXNpcy5cbiAgICAgICAgLy8gSW4gdGhpcyBjYXNlLCB3ZSBuZWVkIHRvIHBhcnNlIHRoZSBzdHJpbmcgYW5kIHVzZSBpdCBpbiB0aGUgb3V0cHV0IG9mIHRoZSBvcmlnaW5hbCBwYXR0ZXJuLlxuICAgICAgICAvLyBTdWl0YWJsZSBwYXR0ZXJuczogYC8hKCouZCkudHNgLCBgLyEoKi5kKS57dHMsdHN4fWAsIGAqKi8hKCotZGJnKS5AKGpzKWAuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIERpc2FibGluZyB0aGUgYGZhc3RwYXRoc2Agb3B0aW9uIGR1ZSB0byBhIHByb2JsZW0gd2l0aCBwYXJzaW5nIHN0cmluZ3MgYXMgYC50c2AgaW4gdGhlIHBhdHRlcm4gbGlrZSBgKiovISgqLmQpLnRzYC5cbiAgICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IHBhcnNlKHJlc3QsIHsgLi4ub3B0aW9ucywgZmFzdHBhdGhzOiBmYWxzZSB9KS5vdXRwdXQ7XG5cbiAgICAgICAgb3V0cHV0ID0gdG9rZW4uY2xvc2UgPSBgKSR7ZXhwcmVzc2lvbn0pJHtleHRnbG9iU3Rhcn0pYDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRva2VuLnByZXYudHlwZSA9PT0gJ2JvcycpIHtcbiAgICAgICAgc3RhdGUubmVnYXRlZEV4dGdsb2IgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHB1c2goeyB0eXBlOiAncGFyZW4nLCBleHRnbG9iOiB0cnVlLCB2YWx1ZSwgb3V0cHV0IH0pO1xuICAgIGRlY3JlbWVudCgncGFyZW5zJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZhc3QgcGF0aHNcbiAgICovXG5cbiAgaWYgKG9wdHMuZmFzdHBhdGhzICE9PSBmYWxzZSAmJiAhLyheWyohXXxbLygpW1xcXXt9XCJdKS8udGVzdChpbnB1dCkpIHtcbiAgICBsZXQgYmFja3NsYXNoZXMgPSBmYWxzZTtcblxuICAgIGxldCBvdXRwdXQgPSBpbnB1dC5yZXBsYWNlKFJFR0VYX1NQRUNJQUxfQ0hBUlNfQkFDS1JFRiwgKG0sIGVzYywgY2hhcnMsIGZpcnN0LCByZXN0LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGZpcnN0ID09PSAnXFxcXCcpIHtcbiAgICAgICAgYmFja3NsYXNoZXMgPSB0cnVlO1xuICAgICAgICByZXR1cm4gbTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpcnN0ID09PSAnPycpIHtcbiAgICAgICAgaWYgKGVzYykge1xuICAgICAgICAgIHJldHVybiBlc2MgKyBmaXJzdCArIChyZXN0ID8gUU1BUksucmVwZWF0KHJlc3QubGVuZ3RoKSA6ICcnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gcW1hcmtOb0RvdCArIChyZXN0ID8gUU1BUksucmVwZWF0KHJlc3QubGVuZ3RoKSA6ICcnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUU1BUksucmVwZWF0KGNoYXJzLmxlbmd0aCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChmaXJzdCA9PT0gJy4nKSB7XG4gICAgICAgIHJldHVybiBET1RfTElURVJBTC5yZXBlYXQoY2hhcnMubGVuZ3RoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpcnN0ID09PSAnKicpIHtcbiAgICAgICAgaWYgKGVzYykge1xuICAgICAgICAgIHJldHVybiBlc2MgKyBmaXJzdCArIChyZXN0ID8gc3RhciA6ICcnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RhcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlc2MgPyBtIDogYFxcXFwke219YDtcbiAgICB9KTtcblxuICAgIGlmIChiYWNrc2xhc2hlcyA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKG9wdHMudW5lc2NhcGUgPT09IHRydWUpIHtcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0LnJlcGxhY2UoL1xcXFwvZywgJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0LnJlcGxhY2UoL1xcXFwrL2csIG0gPT4ge1xuICAgICAgICAgIHJldHVybiBtLmxlbmd0aCAlIDIgPT09IDAgPyAnXFxcXFxcXFwnIDogKG0gPyAnXFxcXCcgOiAnJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvdXRwdXQgPT09IGlucHV0ICYmIG9wdHMuY29udGFpbnMgPT09IHRydWUpIHtcbiAgICAgIHN0YXRlLm91dHB1dCA9IGlucHV0O1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cblxuICAgIHN0YXRlLm91dHB1dCA9IHV0aWxzLndyYXBPdXRwdXQob3V0cHV0LCBzdGF0ZSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRva2VuaXplIGlucHV0IHVudGlsIHdlIHJlYWNoIGVuZC1vZi1zdHJpbmdcbiAgICovXG5cbiAgd2hpbGUgKCFlb3MoKSkge1xuICAgIHZhbHVlID0gYWR2YW5jZSgpO1xuXG4gICAgaWYgKHZhbHVlID09PSAnXFx1MDAwMCcpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVzY2FwZWQgY2hhcmFjdGVyc1xuICAgICAqL1xuXG4gICAgaWYgKHZhbHVlID09PSAnXFxcXCcpIHtcbiAgICAgIGNvbnN0IG5leHQgPSBwZWVrKCk7XG5cbiAgICAgIGlmIChuZXh0ID09PSAnLycgJiYgb3B0cy5iYXNoICE9PSB0cnVlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV4dCA9PT0gJy4nIHx8IG5leHQgPT09ICc7Jykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFuZXh0KSB7XG4gICAgICAgIHZhbHVlICs9ICdcXFxcJztcbiAgICAgICAgcHVzaCh7IHR5cGU6ICd0ZXh0JywgdmFsdWUgfSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBjb2xsYXBzZSBzbGFzaGVzIHRvIHJlZHVjZSBwb3RlbnRpYWwgZm9yIGV4cGxvaXRzXG4gICAgICBjb25zdCBtYXRjaCA9IC9eXFxcXCsvLmV4ZWMocmVtYWluaW5nKCkpO1xuICAgICAgbGV0IHNsYXNoZXMgPSAwO1xuXG4gICAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMF0ubGVuZ3RoID4gMikge1xuICAgICAgICBzbGFzaGVzID0gbWF0Y2hbMF0ubGVuZ3RoO1xuICAgICAgICBzdGF0ZS5pbmRleCArPSBzbGFzaGVzO1xuICAgICAgICBpZiAoc2xhc2hlcyAlIDIgIT09IDApIHtcbiAgICAgICAgICB2YWx1ZSArPSAnXFxcXCc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG9wdHMudW5lc2NhcGUgPT09IHRydWUpIHtcbiAgICAgICAgdmFsdWUgPSBhZHZhbmNlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSArPSBhZHZhbmNlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZS5icmFja2V0cyA9PT0gMCkge1xuICAgICAgICBwdXNoKHsgdHlwZTogJ3RleHQnLCB2YWx1ZSB9KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWYgd2UncmUgaW5zaWRlIGEgcmVnZXggY2hhcmFjdGVyIGNsYXNzLCBjb250aW51ZVxuICAgICAqIHVudGlsIHdlIHJlYWNoIHRoZSBjbG9zaW5nIGJyYWNrZXQuXG4gICAgICovXG5cbiAgICBpZiAoc3RhdGUuYnJhY2tldHMgPiAwICYmICh2YWx1ZSAhPT0gJ10nIHx8IHByZXYudmFsdWUgPT09ICdbJyB8fCBwcmV2LnZhbHVlID09PSAnW14nKSkge1xuICAgICAgaWYgKG9wdHMucG9zaXggIT09IGZhbHNlICYmIHZhbHVlID09PSAnOicpIHtcbiAgICAgICAgY29uc3QgaW5uZXIgPSBwcmV2LnZhbHVlLnNsaWNlKDEpO1xuICAgICAgICBpZiAoaW5uZXIuaW5jbHVkZXMoJ1snKSkge1xuICAgICAgICAgIHByZXYucG9zaXggPSB0cnVlO1xuXG4gICAgICAgICAgaWYgKGlubmVyLmluY2x1ZGVzKCc6JykpIHtcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IHByZXYudmFsdWUubGFzdEluZGV4T2YoJ1snKTtcbiAgICAgICAgICAgIGNvbnN0IHByZSA9IHByZXYudmFsdWUuc2xpY2UoMCwgaWR4KTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3QgPSBwcmV2LnZhbHVlLnNsaWNlKGlkeCArIDIpO1xuICAgICAgICAgICAgY29uc3QgcG9zaXggPSBQT1NJWF9SRUdFWF9TT1VSQ0VbcmVzdF07XG4gICAgICAgICAgICBpZiAocG9zaXgpIHtcbiAgICAgICAgICAgICAgcHJldi52YWx1ZSA9IHByZSArIHBvc2l4O1xuICAgICAgICAgICAgICBzdGF0ZS5iYWNrdHJhY2sgPSB0cnVlO1xuICAgICAgICAgICAgICBhZHZhbmNlKCk7XG5cbiAgICAgICAgICAgICAgaWYgKCFib3Mub3V0cHV0ICYmIHRva2Vucy5pbmRleE9mKHByZXYpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgYm9zLm91dHB1dCA9IE9ORV9DSEFSO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoKHZhbHVlID09PSAnWycgJiYgcGVlaygpICE9PSAnOicpIHx8ICh2YWx1ZSA9PT0gJy0nICYmIHBlZWsoKSA9PT0gJ10nKSkge1xuICAgICAgICB2YWx1ZSA9IGBcXFxcJHt2YWx1ZX1gO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWUgPT09ICddJyAmJiAocHJldi52YWx1ZSA9PT0gJ1snIHx8IHByZXYudmFsdWUgPT09ICdbXicpKSB7XG4gICAgICAgIHZhbHVlID0gYFxcXFwke3ZhbHVlfWA7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRzLnBvc2l4ID09PSB0cnVlICYmIHZhbHVlID09PSAnIScgJiYgcHJldi52YWx1ZSA9PT0gJ1snKSB7XG4gICAgICAgIHZhbHVlID0gJ14nO1xuICAgICAgfVxuXG4gICAgICBwcmV2LnZhbHVlICs9IHZhbHVlO1xuICAgICAgYXBwZW5kKHsgdmFsdWUgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiB3ZSdyZSBpbnNpZGUgYSBxdW90ZWQgc3RyaW5nLCBjb250aW51ZVxuICAgICAqIHVudGlsIHdlIHJlYWNoIHRoZSBjbG9zaW5nIGRvdWJsZSBxdW90ZS5cbiAgICAgKi9cblxuICAgIGlmIChzdGF0ZS5xdW90ZXMgPT09IDEgJiYgdmFsdWUgIT09ICdcIicpIHtcbiAgICAgIHZhbHVlID0gdXRpbHMuZXNjYXBlUmVnZXgodmFsdWUpO1xuICAgICAgcHJldi52YWx1ZSArPSB2YWx1ZTtcbiAgICAgIGFwcGVuZCh7IHZhbHVlIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRG91YmxlIHF1b3Rlc1xuICAgICAqL1xuXG4gICAgaWYgKHZhbHVlID09PSAnXCInKSB7XG4gICAgICBzdGF0ZS5xdW90ZXMgPSBzdGF0ZS5xdW90ZXMgPT09IDEgPyAwIDogMTtcbiAgICAgIGlmIChvcHRzLmtlZXBRdW90ZXMgPT09IHRydWUpIHtcbiAgICAgICAgcHVzaCh7IHR5cGU6ICd0ZXh0JywgdmFsdWUgfSk7XG4gICAgICB9XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJlbnRoZXNlc1xuICAgICAqL1xuXG4gICAgaWYgKHZhbHVlID09PSAnKCcpIHtcbiAgICAgIGluY3JlbWVudCgncGFyZW5zJyk7XG4gICAgICBwdXNoKHsgdHlwZTogJ3BhcmVuJywgdmFsdWUgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgPT09ICcpJykge1xuICAgICAgaWYgKHN0YXRlLnBhcmVucyA9PT0gMCAmJiBvcHRzLnN0cmljdEJyYWNrZXRzID09PSB0cnVlKSB7XG4gICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihzeW50YXhFcnJvcignb3BlbmluZycsICcoJykpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBleHRnbG9iID0gZXh0Z2xvYnNbZXh0Z2xvYnMubGVuZ3RoIC0gMV07XG4gICAgICBpZiAoZXh0Z2xvYiAmJiBzdGF0ZS5wYXJlbnMgPT09IGV4dGdsb2IucGFyZW5zICsgMSkge1xuICAgICAgICBleHRnbG9iQ2xvc2UoZXh0Z2xvYnMucG9wKCkpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgcHVzaCh7IHR5cGU6ICdwYXJlbicsIHZhbHVlLCBvdXRwdXQ6IHN0YXRlLnBhcmVucyA/ICcpJyA6ICdcXFxcKScgfSk7XG4gICAgICBkZWNyZW1lbnQoJ3BhcmVucycpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3F1YXJlIGJyYWNrZXRzXG4gICAgICovXG5cbiAgICBpZiAodmFsdWUgPT09ICdbJykge1xuICAgICAgaWYgKG9wdHMubm9icmFja2V0ID09PSB0cnVlIHx8ICFyZW1haW5pbmcoKS5pbmNsdWRlcygnXScpKSB7XG4gICAgICAgIGlmIChvcHRzLm5vYnJhY2tldCAhPT0gdHJ1ZSAmJiBvcHRzLnN0cmljdEJyYWNrZXRzID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKHN5bnRheEVycm9yKCdjbG9zaW5nJywgJ10nKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZSA9IGBcXFxcJHt2YWx1ZX1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5jcmVtZW50KCdicmFja2V0cycpO1xuICAgICAgfVxuXG4gICAgICBwdXNoKHsgdHlwZTogJ2JyYWNrZXQnLCB2YWx1ZSB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSA9PT0gJ10nKSB7XG4gICAgICBpZiAob3B0cy5ub2JyYWNrZXQgPT09IHRydWUgfHwgKHByZXYgJiYgcHJldi50eXBlID09PSAnYnJhY2tldCcgJiYgcHJldi52YWx1ZS5sZW5ndGggPT09IDEpKSB7XG4gICAgICAgIHB1c2goeyB0eXBlOiAndGV4dCcsIHZhbHVlLCBvdXRwdXQ6IGBcXFxcJHt2YWx1ZX1gIH0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlLmJyYWNrZXRzID09PSAwKSB7XG4gICAgICAgIGlmIChvcHRzLnN0cmljdEJyYWNrZXRzID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKHN5bnRheEVycm9yKCdvcGVuaW5nJywgJ1snKSk7XG4gICAgICAgIH1cblxuICAgICAgICBwdXNoKHsgdHlwZTogJ3RleHQnLCB2YWx1ZSwgb3V0cHV0OiBgXFxcXCR7dmFsdWV9YCB9KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGRlY3JlbWVudCgnYnJhY2tldHMnKTtcblxuICAgICAgY29uc3QgcHJldlZhbHVlID0gcHJldi52YWx1ZS5zbGljZSgxKTtcbiAgICAgIGlmIChwcmV2LnBvc2l4ICE9PSB0cnVlICYmIHByZXZWYWx1ZVswXSA9PT0gJ14nICYmICFwcmV2VmFsdWUuaW5jbHVkZXMoJy8nKSkge1xuICAgICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gO1xuICAgICAgfVxuXG4gICAgICBwcmV2LnZhbHVlICs9IHZhbHVlO1xuICAgICAgYXBwZW5kKHsgdmFsdWUgfSk7XG5cbiAgICAgIC8vIHdoZW4gbGl0ZXJhbCBicmFja2V0cyBhcmUgZXhwbGljaXRseSBkaXNhYmxlZFxuICAgICAgLy8gYXNzdW1lIHdlIHNob3VsZCBtYXRjaCB3aXRoIGEgcmVnZXggY2hhcmFjdGVyIGNsYXNzXG4gICAgICBpZiAob3B0cy5saXRlcmFsQnJhY2tldHMgPT09IGZhbHNlIHx8IHV0aWxzLmhhc1JlZ2V4Q2hhcnMocHJldlZhbHVlKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXNjYXBlZCA9IHV0aWxzLmVzY2FwZVJlZ2V4KHByZXYudmFsdWUpO1xuICAgICAgc3RhdGUub3V0cHV0ID0gc3RhdGUub3V0cHV0LnNsaWNlKDAsIC1wcmV2LnZhbHVlLmxlbmd0aCk7XG5cbiAgICAgIC8vIHdoZW4gbGl0ZXJhbCBicmFja2V0cyBhcmUgZXhwbGljaXRseSBlbmFibGVkXG4gICAgICAvLyBhc3N1bWUgd2Ugc2hvdWxkIGVzY2FwZSB0aGUgYnJhY2tldHMgdG8gbWF0Y2ggbGl0ZXJhbCBjaGFyYWN0ZXJzXG4gICAgICBpZiAob3B0cy5saXRlcmFsQnJhY2tldHMgPT09IHRydWUpIHtcbiAgICAgICAgc3RhdGUub3V0cHV0ICs9IGVzY2FwZWQ7XG4gICAgICAgIHByZXYudmFsdWUgPSBlc2NhcGVkO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gd2hlbiB0aGUgdXNlciBzcGVjaWZpZXMgbm90aGluZywgdHJ5IHRvIG1hdGNoIGJvdGhcbiAgICAgIHByZXYudmFsdWUgPSBgKCR7Y2FwdHVyZX0ke2VzY2FwZWR9fCR7cHJldi52YWx1ZX0pYDtcbiAgICAgIHN0YXRlLm91dHB1dCArPSBwcmV2LnZhbHVlO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnJhY2VzXG4gICAgICovXG5cbiAgICBpZiAodmFsdWUgPT09ICd7JyAmJiBvcHRzLm5vYnJhY2UgIT09IHRydWUpIHtcbiAgICAgIGluY3JlbWVudCgnYnJhY2VzJyk7XG5cbiAgICAgIGNvbnN0IG9wZW4gPSB7XG4gICAgICAgIHR5cGU6ICdicmFjZScsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBvdXRwdXQ6ICcoJyxcbiAgICAgICAgb3V0cHV0SW5kZXg6IHN0YXRlLm91dHB1dC5sZW5ndGgsXG4gICAgICAgIHRva2Vuc0luZGV4OiBzdGF0ZS50b2tlbnMubGVuZ3RoXG4gICAgICB9O1xuXG4gICAgICBicmFjZXMucHVzaChvcGVuKTtcbiAgICAgIHB1c2gob3Blbik7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgPT09ICd9Jykge1xuICAgICAgY29uc3QgYnJhY2UgPSBicmFjZXNbYnJhY2VzLmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAob3B0cy5ub2JyYWNlID09PSB0cnVlIHx8ICFicmFjZSkge1xuICAgICAgICBwdXNoKHsgdHlwZTogJ3RleHQnLCB2YWx1ZSwgb3V0cHV0OiB2YWx1ZSB9KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxldCBvdXRwdXQgPSAnKSc7XG5cbiAgICAgIGlmIChicmFjZS5kb3RzID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGFyciA9IHRva2Vucy5zbGljZSgpO1xuICAgICAgICBjb25zdCByYW5nZSA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0b2tlbnMucG9wKCk7XG4gICAgICAgICAgaWYgKGFycltpXS50eXBlID09PSAnYnJhY2UnKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFycltpXS50eXBlICE9PSAnZG90cycpIHtcbiAgICAgICAgICAgIHJhbmdlLnVuc2hpZnQoYXJyW2ldLnZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvdXRwdXQgPSBleHBhbmRSYW5nZShyYW5nZSwgb3B0cyk7XG4gICAgICAgIHN0YXRlLmJhY2t0cmFjayA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChicmFjZS5jb21tYSAhPT0gdHJ1ZSAmJiBicmFjZS5kb3RzICE9PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IG91dCA9IHN0YXRlLm91dHB1dC5zbGljZSgwLCBicmFjZS5vdXRwdXRJbmRleCk7XG4gICAgICAgIGNvbnN0IHRva3MgPSBzdGF0ZS50b2tlbnMuc2xpY2UoYnJhY2UudG9rZW5zSW5kZXgpO1xuICAgICAgICBicmFjZS52YWx1ZSA9IGJyYWNlLm91dHB1dCA9ICdcXFxceyc7XG4gICAgICAgIHZhbHVlID0gb3V0cHV0ID0gJ1xcXFx9JztcbiAgICAgICAgc3RhdGUub3V0cHV0ID0gb3V0O1xuICAgICAgICBmb3IgKGNvbnN0IHQgb2YgdG9rcykge1xuICAgICAgICAgIHN0YXRlLm91dHB1dCArPSAodC5vdXRwdXQgfHwgdC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHVzaCh7IHR5cGU6ICdicmFjZScsIHZhbHVlLCBvdXRwdXQgfSk7XG4gICAgICBkZWNyZW1lbnQoJ2JyYWNlcycpO1xuICAgICAgYnJhY2VzLnBvcCgpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGlwZXNcbiAgICAgKi9cblxuICAgIGlmICh2YWx1ZSA9PT0gJ3wnKSB7XG4gICAgICBpZiAoZXh0Z2xvYnMubGVuZ3RoID4gMCkge1xuICAgICAgICBleHRnbG9ic1tleHRnbG9icy5sZW5ndGggLSAxXS5jb25kaXRpb25zKys7XG4gICAgICB9XG4gICAgICBwdXNoKHsgdHlwZTogJ3RleHQnLCB2YWx1ZSB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbW1hc1xuICAgICAqL1xuXG4gICAgaWYgKHZhbHVlID09PSAnLCcpIHtcbiAgICAgIGxldCBvdXRwdXQgPSB2YWx1ZTtcblxuICAgICAgY29uc3QgYnJhY2UgPSBicmFjZXNbYnJhY2VzLmxlbmd0aCAtIDFdO1xuICAgICAgaWYgKGJyYWNlICYmIHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdID09PSAnYnJhY2VzJykge1xuICAgICAgICBicmFjZS5jb21tYSA9IHRydWU7XG4gICAgICAgIG91dHB1dCA9ICd8JztcbiAgICAgIH1cblxuICAgICAgcHVzaCh7IHR5cGU6ICdjb21tYScsIHZhbHVlLCBvdXRwdXQgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTbGFzaGVzXG4gICAgICovXG5cbiAgICBpZiAodmFsdWUgPT09ICcvJykge1xuICAgICAgLy8gaWYgdGhlIGJlZ2lubmluZyBvZiB0aGUgZ2xvYiBpcyBcIi4vXCIsIGFkdmFuY2UgdGhlIHN0YXJ0XG4gICAgICAvLyB0byB0aGUgY3VycmVudCBpbmRleCwgYW5kIGRvbid0IGFkZCB0aGUgXCIuL1wiIGNoYXJhY3RlcnNcbiAgICAgIC8vIHRvIHRoZSBzdGF0ZS4gVGhpcyBncmVhdGx5IHNpbXBsaWZpZXMgbG9va2JlaGluZHMgd2hlblxuICAgICAgLy8gY2hlY2tpbmcgZm9yIEJPUyBjaGFyYWN0ZXJzIGxpa2UgXCIhXCIgYW5kIFwiLlwiIChub3QgXCIuL1wiKVxuICAgICAgaWYgKHByZXYudHlwZSA9PT0gJ2RvdCcgJiYgc3RhdGUuaW5kZXggPT09IHN0YXRlLnN0YXJ0ICsgMSkge1xuICAgICAgICBzdGF0ZS5zdGFydCA9IHN0YXRlLmluZGV4ICsgMTtcbiAgICAgICAgc3RhdGUuY29uc3VtZWQgPSAnJztcbiAgICAgICAgc3RhdGUub3V0cHV0ID0gJyc7XG4gICAgICAgIHRva2Vucy5wb3AoKTtcbiAgICAgICAgcHJldiA9IGJvczsgLy8gcmVzZXQgXCJwcmV2XCIgdG8gdGhlIGZpcnN0IHRva2VuXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBwdXNoKHsgdHlwZTogJ3NsYXNoJywgdmFsdWUsIG91dHB1dDogU0xBU0hfTElURVJBTCB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERvdHNcbiAgICAgKi9cblxuICAgIGlmICh2YWx1ZSA9PT0gJy4nKSB7XG4gICAgICBpZiAoc3RhdGUuYnJhY2VzID4gMCAmJiBwcmV2LnR5cGUgPT09ICdkb3QnKSB7XG4gICAgICAgIGlmIChwcmV2LnZhbHVlID09PSAnLicpIHByZXYub3V0cHV0ID0gRE9UX0xJVEVSQUw7XG4gICAgICAgIGNvbnN0IGJyYWNlID0gYnJhY2VzW2JyYWNlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgcHJldi50eXBlID0gJ2RvdHMnO1xuICAgICAgICBwcmV2Lm91dHB1dCArPSB2YWx1ZTtcbiAgICAgICAgcHJldi52YWx1ZSArPSB2YWx1ZTtcbiAgICAgICAgYnJhY2UuZG90cyA9IHRydWU7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoKHN0YXRlLmJyYWNlcyArIHN0YXRlLnBhcmVucykgPT09IDAgJiYgcHJldi50eXBlICE9PSAnYm9zJyAmJiBwcmV2LnR5cGUgIT09ICdzbGFzaCcpIHtcbiAgICAgICAgcHVzaCh7IHR5cGU6ICd0ZXh0JywgdmFsdWUsIG91dHB1dDogRE9UX0xJVEVSQUwgfSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBwdXNoKHsgdHlwZTogJ2RvdCcsIHZhbHVlLCBvdXRwdXQ6IERPVF9MSVRFUkFMIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUXVlc3Rpb24gbWFya3NcbiAgICAgKi9cblxuICAgIGlmICh2YWx1ZSA9PT0gJz8nKSB7XG4gICAgICBjb25zdCBpc0dyb3VwID0gcHJldiAmJiBwcmV2LnZhbHVlID09PSAnKCc7XG4gICAgICBpZiAoIWlzR3JvdXAgJiYgb3B0cy5ub2V4dGdsb2IgIT09IHRydWUgJiYgcGVlaygpID09PSAnKCcgJiYgcGVlaygyKSAhPT0gJz8nKSB7XG4gICAgICAgIGV4dGdsb2JPcGVuKCdxbWFyaycsIHZhbHVlKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcmV2ICYmIHByZXYudHlwZSA9PT0gJ3BhcmVuJykge1xuICAgICAgICBjb25zdCBuZXh0ID0gcGVlaygpO1xuICAgICAgICBsZXQgb3V0cHV0ID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKG5leHQgPT09ICc8JyAmJiAhdXRpbHMuc3VwcG9ydHNMb29rYmVoaW5kcygpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb2RlLmpzIHYxMCBvciBoaWdoZXIgaXMgcmVxdWlyZWQgZm9yIHJlZ2V4IGxvb2tiZWhpbmRzJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKHByZXYudmFsdWUgPT09ICcoJyAmJiAhL1shPTw6XS8udGVzdChuZXh0KSkgfHwgKG5leHQgPT09ICc8JyAmJiAhLzwoWyE9XXxcXHcrPikvLnRlc3QocmVtYWluaW5nKCkpKSkge1xuICAgICAgICAgIG91dHB1dCA9IGBcXFxcJHt2YWx1ZX1gO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVzaCh7IHR5cGU6ICd0ZXh0JywgdmFsdWUsIG91dHB1dCB9KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRzLmRvdCAhPT0gdHJ1ZSAmJiAocHJldi50eXBlID09PSAnc2xhc2gnIHx8IHByZXYudHlwZSA9PT0gJ2JvcycpKSB7XG4gICAgICAgIHB1c2goeyB0eXBlOiAncW1hcmsnLCB2YWx1ZSwgb3V0cHV0OiBRTUFSS19OT19ET1QgfSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBwdXNoKHsgdHlwZTogJ3FtYXJrJywgdmFsdWUsIG91dHB1dDogUU1BUksgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeGNsYW1hdGlvblxuICAgICAqL1xuXG4gICAgaWYgKHZhbHVlID09PSAnIScpIHtcbiAgICAgIGlmIChvcHRzLm5vZXh0Z2xvYiAhPT0gdHJ1ZSAmJiBwZWVrKCkgPT09ICcoJykge1xuICAgICAgICBpZiAocGVlaygyKSAhPT0gJz8nIHx8ICEvWyE9PDpdLy50ZXN0KHBlZWsoMykpKSB7XG4gICAgICAgICAgZXh0Z2xvYk9wZW4oJ25lZ2F0ZScsIHZhbHVlKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAob3B0cy5ub25lZ2F0ZSAhPT0gdHJ1ZSAmJiBzdGF0ZS5pbmRleCA9PT0gMCkge1xuICAgICAgICBuZWdhdGUoKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGx1c1xuICAgICAqL1xuXG4gICAgaWYgKHZhbHVlID09PSAnKycpIHtcbiAgICAgIGlmIChvcHRzLm5vZXh0Z2xvYiAhPT0gdHJ1ZSAmJiBwZWVrKCkgPT09ICcoJyAmJiBwZWVrKDIpICE9PSAnPycpIHtcbiAgICAgICAgZXh0Z2xvYk9wZW4oJ3BsdXMnLCB2YWx1ZSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoKHByZXYgJiYgcHJldi52YWx1ZSA9PT0gJygnKSB8fCBvcHRzLnJlZ2V4ID09PSBmYWxzZSkge1xuICAgICAgICBwdXNoKHsgdHlwZTogJ3BsdXMnLCB2YWx1ZSwgb3V0cHV0OiBQTFVTX0xJVEVSQUwgfSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoKHByZXYgJiYgKHByZXYudHlwZSA9PT0gJ2JyYWNrZXQnIHx8IHByZXYudHlwZSA9PT0gJ3BhcmVuJyB8fCBwcmV2LnR5cGUgPT09ICdicmFjZScpKSB8fCBzdGF0ZS5wYXJlbnMgPiAwKSB7XG4gICAgICAgIHB1c2goeyB0eXBlOiAncGx1cycsIHZhbHVlIH0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgcHVzaCh7IHR5cGU6ICdwbHVzJywgdmFsdWU6IFBMVVNfTElURVJBTCB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsYWluIHRleHRcbiAgICAgKi9cblxuICAgIGlmICh2YWx1ZSA9PT0gJ0AnKSB7XG4gICAgICBpZiAob3B0cy5ub2V4dGdsb2IgIT09IHRydWUgJiYgcGVlaygpID09PSAnKCcgJiYgcGVlaygyKSAhPT0gJz8nKSB7XG4gICAgICAgIHB1c2goeyB0eXBlOiAnYXQnLCBleHRnbG9iOiB0cnVlLCB2YWx1ZSwgb3V0cHV0OiAnJyB9KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHB1c2goeyB0eXBlOiAndGV4dCcsIHZhbHVlIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxhaW4gdGV4dFxuICAgICAqL1xuXG4gICAgaWYgKHZhbHVlICE9PSAnKicpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gJyQnIHx8IHZhbHVlID09PSAnXicpIHtcbiAgICAgICAgdmFsdWUgPSBgXFxcXCR7dmFsdWV9YDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWF0Y2ggPSBSRUdFWF9OT05fU1BFQ0lBTF9DSEFSUy5leGVjKHJlbWFpbmluZygpKTtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICB2YWx1ZSArPSBtYXRjaFswXTtcbiAgICAgICAgc3RhdGUuaW5kZXggKz0gbWF0Y2hbMF0ubGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICBwdXNoKHsgdHlwZTogJ3RleHQnLCB2YWx1ZSB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJzXG4gICAgICovXG5cbiAgICBpZiAocHJldiAmJiAocHJldi50eXBlID09PSAnZ2xvYnN0YXInIHx8IHByZXYuc3RhciA9PT0gdHJ1ZSkpIHtcbiAgICAgIHByZXYudHlwZSA9ICdzdGFyJztcbiAgICAgIHByZXYuc3RhciA9IHRydWU7XG4gICAgICBwcmV2LnZhbHVlICs9IHZhbHVlO1xuICAgICAgcHJldi5vdXRwdXQgPSBzdGFyO1xuICAgICAgc3RhdGUuYmFja3RyYWNrID0gdHJ1ZTtcbiAgICAgIHN0YXRlLmdsb2JzdGFyID0gdHJ1ZTtcbiAgICAgIGNvbnN1bWUodmFsdWUpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgbGV0IHJlc3QgPSByZW1haW5pbmcoKTtcbiAgICBpZiAob3B0cy5ub2V4dGdsb2IgIT09IHRydWUgJiYgL15cXChbXj9dLy50ZXN0KHJlc3QpKSB7XG4gICAgICBleHRnbG9iT3Blbignc3RhcicsIHZhbHVlKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChwcmV2LnR5cGUgPT09ICdzdGFyJykge1xuICAgICAgaWYgKG9wdHMubm9nbG9ic3RhciA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdW1lKHZhbHVlKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByaW9yID0gcHJldi5wcmV2O1xuICAgICAgY29uc3QgYmVmb3JlID0gcHJpb3IucHJldjtcbiAgICAgIGNvbnN0IGlzU3RhcnQgPSBwcmlvci50eXBlID09PSAnc2xhc2gnIHx8IHByaW9yLnR5cGUgPT09ICdib3MnO1xuICAgICAgY29uc3QgYWZ0ZXJTdGFyID0gYmVmb3JlICYmIChiZWZvcmUudHlwZSA9PT0gJ3N0YXInIHx8IGJlZm9yZS50eXBlID09PSAnZ2xvYnN0YXInKTtcblxuICAgICAgaWYgKG9wdHMuYmFzaCA9PT0gdHJ1ZSAmJiAoIWlzU3RhcnQgfHwgKHJlc3RbMF0gJiYgcmVzdFswXSAhPT0gJy8nKSkpIHtcbiAgICAgICAgcHVzaCh7IHR5cGU6ICdzdGFyJywgdmFsdWUsIG91dHB1dDogJycgfSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpc0JyYWNlID0gc3RhdGUuYnJhY2VzID4gMCAmJiAocHJpb3IudHlwZSA9PT0gJ2NvbW1hJyB8fCBwcmlvci50eXBlID09PSAnYnJhY2UnKTtcbiAgICAgIGNvbnN0IGlzRXh0Z2xvYiA9IGV4dGdsb2JzLmxlbmd0aCAmJiAocHJpb3IudHlwZSA9PT0gJ3BpcGUnIHx8IHByaW9yLnR5cGUgPT09ICdwYXJlbicpO1xuICAgICAgaWYgKCFpc1N0YXJ0ICYmIHByaW9yLnR5cGUgIT09ICdwYXJlbicgJiYgIWlzQnJhY2UgJiYgIWlzRXh0Z2xvYikge1xuICAgICAgICBwdXNoKHsgdHlwZTogJ3N0YXInLCB2YWx1ZSwgb3V0cHV0OiAnJyB9KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIHN0cmlwIGNvbnNlY3V0aXZlIGAvKiovYFxuICAgICAgd2hpbGUgKHJlc3Quc2xpY2UoMCwgMykgPT09ICcvKionKSB7XG4gICAgICAgIGNvbnN0IGFmdGVyID0gaW5wdXRbc3RhdGUuaW5kZXggKyA0XTtcbiAgICAgICAgaWYgKGFmdGVyICYmIGFmdGVyICE9PSAnLycpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXN0ID0gcmVzdC5zbGljZSgzKTtcbiAgICAgICAgY29uc3VtZSgnLyoqJywgMyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcmlvci50eXBlID09PSAnYm9zJyAmJiBlb3MoKSkge1xuICAgICAgICBwcmV2LnR5cGUgPSAnZ2xvYnN0YXInO1xuICAgICAgICBwcmV2LnZhbHVlICs9IHZhbHVlO1xuICAgICAgICBwcmV2Lm91dHB1dCA9IGdsb2JzdGFyKG9wdHMpO1xuICAgICAgICBzdGF0ZS5vdXRwdXQgPSBwcmV2Lm91dHB1dDtcbiAgICAgICAgc3RhdGUuZ2xvYnN0YXIgPSB0cnVlO1xuICAgICAgICBjb25zdW1lKHZhbHVlKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcmlvci50eXBlID09PSAnc2xhc2gnICYmIHByaW9yLnByZXYudHlwZSAhPT0gJ2JvcycgJiYgIWFmdGVyU3RhciAmJiBlb3MoKSkge1xuICAgICAgICBzdGF0ZS5vdXRwdXQgPSBzdGF0ZS5vdXRwdXQuc2xpY2UoMCwgLShwcmlvci5vdXRwdXQgKyBwcmV2Lm91dHB1dCkubGVuZ3RoKTtcbiAgICAgICAgcHJpb3Iub3V0cHV0ID0gYCg/OiR7cHJpb3Iub3V0cHV0fWA7XG5cbiAgICAgICAgcHJldi50eXBlID0gJ2dsb2JzdGFyJztcbiAgICAgICAgcHJldi5vdXRwdXQgPSBnbG9ic3RhcihvcHRzKSArIChvcHRzLnN0cmljdFNsYXNoZXMgPyAnKScgOiAnfCQpJyk7XG4gICAgICAgIHByZXYudmFsdWUgKz0gdmFsdWU7XG4gICAgICAgIHN0YXRlLmdsb2JzdGFyID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUub3V0cHV0ICs9IHByaW9yLm91dHB1dCArIHByZXYub3V0cHV0O1xuICAgICAgICBjb25zdW1lKHZhbHVlKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcmlvci50eXBlID09PSAnc2xhc2gnICYmIHByaW9yLnByZXYudHlwZSAhPT0gJ2JvcycgJiYgcmVzdFswXSA9PT0gJy8nKSB7XG4gICAgICAgIGNvbnN0IGVuZCA9IHJlc3RbMV0gIT09IHZvaWQgMCA/ICd8JCcgOiAnJztcblxuICAgICAgICBzdGF0ZS5vdXRwdXQgPSBzdGF0ZS5vdXRwdXQuc2xpY2UoMCwgLShwcmlvci5vdXRwdXQgKyBwcmV2Lm91dHB1dCkubGVuZ3RoKTtcbiAgICAgICAgcHJpb3Iub3V0cHV0ID0gYCg/OiR7cHJpb3Iub3V0cHV0fWA7XG5cbiAgICAgICAgcHJldi50eXBlID0gJ2dsb2JzdGFyJztcbiAgICAgICAgcHJldi5vdXRwdXQgPSBgJHtnbG9ic3RhcihvcHRzKX0ke1NMQVNIX0xJVEVSQUx9fCR7U0xBU0hfTElURVJBTH0ke2VuZH0pYDtcbiAgICAgICAgcHJldi52YWx1ZSArPSB2YWx1ZTtcblxuICAgICAgICBzdGF0ZS5vdXRwdXQgKz0gcHJpb3Iub3V0cHV0ICsgcHJldi5vdXRwdXQ7XG4gICAgICAgIHN0YXRlLmdsb2JzdGFyID0gdHJ1ZTtcblxuICAgICAgICBjb25zdW1lKHZhbHVlICsgYWR2YW5jZSgpKTtcblxuICAgICAgICBwdXNoKHsgdHlwZTogJ3NsYXNoJywgdmFsdWU6ICcvJywgb3V0cHV0OiAnJyB9KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcmlvci50eXBlID09PSAnYm9zJyAmJiByZXN0WzBdID09PSAnLycpIHtcbiAgICAgICAgcHJldi50eXBlID0gJ2dsb2JzdGFyJztcbiAgICAgICAgcHJldi52YWx1ZSArPSB2YWx1ZTtcbiAgICAgICAgcHJldi5vdXRwdXQgPSBgKD86Xnwke1NMQVNIX0xJVEVSQUx9fCR7Z2xvYnN0YXIob3B0cyl9JHtTTEFTSF9MSVRFUkFMfSlgO1xuICAgICAgICBzdGF0ZS5vdXRwdXQgPSBwcmV2Lm91dHB1dDtcbiAgICAgICAgc3RhdGUuZ2xvYnN0YXIgPSB0cnVlO1xuICAgICAgICBjb25zdW1lKHZhbHVlICsgYWR2YW5jZSgpKTtcbiAgICAgICAgcHVzaCh7IHR5cGU6ICdzbGFzaCcsIHZhbHVlOiAnLycsIG91dHB1dDogJycgfSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyByZW1vdmUgc2luZ2xlIHN0YXIgZnJvbSBvdXRwdXRcbiAgICAgIHN0YXRlLm91dHB1dCA9IHN0YXRlLm91dHB1dC5zbGljZSgwLCAtcHJldi5vdXRwdXQubGVuZ3RoKTtcblxuICAgICAgLy8gcmVzZXQgcHJldmlvdXMgdG9rZW4gdG8gZ2xvYnN0YXJcbiAgICAgIHByZXYudHlwZSA9ICdnbG9ic3Rhcic7XG4gICAgICBwcmV2Lm91dHB1dCA9IGdsb2JzdGFyKG9wdHMpO1xuICAgICAgcHJldi52YWx1ZSArPSB2YWx1ZTtcblxuICAgICAgLy8gcmVzZXQgb3V0cHV0IHdpdGggZ2xvYnN0YXJcbiAgICAgIHN0YXRlLm91dHB1dCArPSBwcmV2Lm91dHB1dDtcbiAgICAgIHN0YXRlLmdsb2JzdGFyID0gdHJ1ZTtcbiAgICAgIGNvbnN1bWUodmFsdWUpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgY29uc3QgdG9rZW4gPSB7IHR5cGU6ICdzdGFyJywgdmFsdWUsIG91dHB1dDogc3RhciB9O1xuXG4gICAgaWYgKG9wdHMuYmFzaCA9PT0gdHJ1ZSkge1xuICAgICAgdG9rZW4ub3V0cHV0ID0gJy4qPyc7XG4gICAgICBpZiAocHJldi50eXBlID09PSAnYm9zJyB8fCBwcmV2LnR5cGUgPT09ICdzbGFzaCcpIHtcbiAgICAgICAgdG9rZW4ub3V0cHV0ID0gbm9kb3QgKyB0b2tlbi5vdXRwdXQ7XG4gICAgICB9XG4gICAgICBwdXNoKHRva2VuKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChwcmV2ICYmIChwcmV2LnR5cGUgPT09ICdicmFja2V0JyB8fCBwcmV2LnR5cGUgPT09ICdwYXJlbicpICYmIG9wdHMucmVnZXggPT09IHRydWUpIHtcbiAgICAgIHRva2VuLm91dHB1dCA9IHZhbHVlO1xuICAgICAgcHVzaCh0b2tlbik7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuaW5kZXggPT09IHN0YXRlLnN0YXJ0IHx8IHByZXYudHlwZSA9PT0gJ3NsYXNoJyB8fCBwcmV2LnR5cGUgPT09ICdkb3QnKSB7XG4gICAgICBpZiAocHJldi50eXBlID09PSAnZG90Jykge1xuICAgICAgICBzdGF0ZS5vdXRwdXQgKz0gTk9fRE9UX1NMQVNIO1xuICAgICAgICBwcmV2Lm91dHB1dCArPSBOT19ET1RfU0xBU0g7XG5cbiAgICAgIH0gZWxzZSBpZiAob3B0cy5kb3QgPT09IHRydWUpIHtcbiAgICAgICAgc3RhdGUub3V0cHV0ICs9IE5PX0RPVFNfU0xBU0g7XG4gICAgICAgIHByZXYub3V0cHV0ICs9IE5PX0RPVFNfU0xBU0g7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLm91dHB1dCArPSBub2RvdDtcbiAgICAgICAgcHJldi5vdXRwdXQgKz0gbm9kb3Q7XG4gICAgICB9XG5cbiAgICAgIGlmIChwZWVrKCkgIT09ICcqJykge1xuICAgICAgICBzdGF0ZS5vdXRwdXQgKz0gT05FX0NIQVI7XG4gICAgICAgIHByZXYub3V0cHV0ICs9IE9ORV9DSEFSO1xuICAgICAgfVxuICAgIH1cblxuICAgIHB1c2godG9rZW4pO1xuICB9XG5cbiAgd2hpbGUgKHN0YXRlLmJyYWNrZXRzID4gMCkge1xuICAgIGlmIChvcHRzLnN0cmljdEJyYWNrZXRzID09PSB0cnVlKSB0aHJvdyBuZXcgU3ludGF4RXJyb3Ioc3ludGF4RXJyb3IoJ2Nsb3NpbmcnLCAnXScpKTtcbiAgICBzdGF0ZS5vdXRwdXQgPSB1dGlscy5lc2NhcGVMYXN0KHN0YXRlLm91dHB1dCwgJ1snKTtcbiAgICBkZWNyZW1lbnQoJ2JyYWNrZXRzJyk7XG4gIH1cblxuICB3aGlsZSAoc3RhdGUucGFyZW5zID4gMCkge1xuICAgIGlmIChvcHRzLnN0cmljdEJyYWNrZXRzID09PSB0cnVlKSB0aHJvdyBuZXcgU3ludGF4RXJyb3Ioc3ludGF4RXJyb3IoJ2Nsb3NpbmcnLCAnKScpKTtcbiAgICBzdGF0ZS5vdXRwdXQgPSB1dGlscy5lc2NhcGVMYXN0KHN0YXRlLm91dHB1dCwgJygnKTtcbiAgICBkZWNyZW1lbnQoJ3BhcmVucycpO1xuICB9XG5cbiAgd2hpbGUgKHN0YXRlLmJyYWNlcyA+IDApIHtcbiAgICBpZiAob3B0cy5zdHJpY3RCcmFja2V0cyA9PT0gdHJ1ZSkgdGhyb3cgbmV3IFN5bnRheEVycm9yKHN5bnRheEVycm9yKCdjbG9zaW5nJywgJ30nKSk7XG4gICAgc3RhdGUub3V0cHV0ID0gdXRpbHMuZXNjYXBlTGFzdChzdGF0ZS5vdXRwdXQsICd7Jyk7XG4gICAgZGVjcmVtZW50KCdicmFjZXMnKTtcbiAgfVxuXG4gIGlmIChvcHRzLnN0cmljdFNsYXNoZXMgIT09IHRydWUgJiYgKHByZXYudHlwZSA9PT0gJ3N0YXInIHx8IHByZXYudHlwZSA9PT0gJ2JyYWNrZXQnKSkge1xuICAgIHB1c2goeyB0eXBlOiAnbWF5YmVfc2xhc2gnLCB2YWx1ZTogJycsIG91dHB1dDogYCR7U0xBU0hfTElURVJBTH0/YCB9KTtcbiAgfVxuXG4gIC8vIHJlYnVpbGQgdGhlIG91dHB1dCBpZiB3ZSBoYWQgdG8gYmFja3RyYWNrIGF0IGFueSBwb2ludFxuICBpZiAoc3RhdGUuYmFja3RyYWNrID09PSB0cnVlKSB7XG4gICAgc3RhdGUub3V0cHV0ID0gJyc7XG5cbiAgICBmb3IgKGNvbnN0IHRva2VuIG9mIHN0YXRlLnRva2Vucykge1xuICAgICAgc3RhdGUub3V0cHV0ICs9IHRva2VuLm91dHB1dCAhPSBudWxsID8gdG9rZW4ub3V0cHV0IDogdG9rZW4udmFsdWU7XG5cbiAgICAgIGlmICh0b2tlbi5zdWZmaXgpIHtcbiAgICAgICAgc3RhdGUub3V0cHV0ICs9IHRva2VuLnN1ZmZpeDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59O1xuXG4vKipcbiAqIEZhc3QgcGF0aHMgZm9yIGNyZWF0aW5nIHJlZ3VsYXIgZXhwcmVzc2lvbnMgZm9yIGNvbW1vbiBnbG9iIHBhdHRlcm5zLlxuICogVGhpcyBjYW4gc2lnbmlmaWNhbnRseSBzcGVlZCB1cCBwcm9jZXNzaW5nIGFuZCBoYXMgdmVyeSBsaXR0bGUgZG93bnNpZGVcbiAqIGltcGFjdCB3aGVuIG5vbmUgb2YgdGhlIGZhc3QgcGF0aHMgbWF0Y2guXG4gKi9cblxucGFyc2UuZmFzdHBhdGhzID0gKGlucHV0LCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IG9wdHMgPSB7IC4uLm9wdGlvbnMgfTtcbiAgY29uc3QgbWF4ID0gdHlwZW9mIG9wdHMubWF4TGVuZ3RoID09PSAnbnVtYmVyJyA/IE1hdGgubWluKE1BWF9MRU5HVEgsIG9wdHMubWF4TGVuZ3RoKSA6IE1BWF9MRU5HVEg7XG4gIGNvbnN0IGxlbiA9IGlucHV0Lmxlbmd0aDtcbiAgaWYgKGxlbiA+IG1heCkge1xuICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgSW5wdXQgbGVuZ3RoOiAke2xlbn0sIGV4Y2VlZHMgbWF4aW11bSBhbGxvd2VkIGxlbmd0aDogJHttYXh9YCk7XG4gIH1cblxuICBpbnB1dCA9IFJFUExBQ0VNRU5UU1tpbnB1dF0gfHwgaW5wdXQ7XG4gIGNvbnN0IHdpbjMyID0gdXRpbHMuaXNXaW5kb3dzKG9wdGlvbnMpO1xuXG4gIC8vIGNyZWF0ZSBjb25zdGFudHMgYmFzZWQgb24gcGxhdGZvcm0sIGZvciB3aW5kb3dzIG9yIHBvc2l4XG4gIGNvbnN0IHtcbiAgICBET1RfTElURVJBTCxcbiAgICBTTEFTSF9MSVRFUkFMLFxuICAgIE9ORV9DSEFSLFxuICAgIERPVFNfU0xBU0gsXG4gICAgTk9fRE9ULFxuICAgIE5PX0RPVFMsXG4gICAgTk9fRE9UU19TTEFTSCxcbiAgICBTVEFSLFxuICAgIFNUQVJUX0FOQ0hPUlxuICB9ID0gY29uc3RhbnRzLmdsb2JDaGFycyh3aW4zMik7XG5cbiAgY29uc3Qgbm9kb3QgPSBvcHRzLmRvdCA/IE5PX0RPVFMgOiBOT19ET1Q7XG4gIGNvbnN0IHNsYXNoRG90ID0gb3B0cy5kb3QgPyBOT19ET1RTX1NMQVNIIDogTk9fRE9UO1xuICBjb25zdCBjYXB0dXJlID0gb3B0cy5jYXB0dXJlID8gJycgOiAnPzonO1xuICBjb25zdCBzdGF0ZSA9IHsgbmVnYXRlZDogZmFsc2UsIHByZWZpeDogJycgfTtcbiAgbGV0IHN0YXIgPSBvcHRzLmJhc2ggPT09IHRydWUgPyAnLio/JyA6IFNUQVI7XG5cbiAgaWYgKG9wdHMuY2FwdHVyZSkge1xuICAgIHN0YXIgPSBgKCR7c3Rhcn0pYDtcbiAgfVxuXG4gIGNvbnN0IGdsb2JzdGFyID0gb3B0cyA9PiB7XG4gICAgaWYgKG9wdHMubm9nbG9ic3RhciA9PT0gdHJ1ZSkgcmV0dXJuIHN0YXI7XG4gICAgcmV0dXJuIGAoJHtjYXB0dXJlfSg/Oig/ISR7U1RBUlRfQU5DSE9SfSR7b3B0cy5kb3QgPyBET1RTX1NMQVNIIDogRE9UX0xJVEVSQUx9KS4pKj8pYDtcbiAgfTtcblxuICBjb25zdCBjcmVhdGUgPSBzdHIgPT4ge1xuICAgIHN3aXRjaCAoc3RyKSB7XG4gICAgICBjYXNlICcqJzpcbiAgICAgICAgcmV0dXJuIGAke25vZG90fSR7T05FX0NIQVJ9JHtzdGFyfWA7XG5cbiAgICAgIGNhc2UgJy4qJzpcbiAgICAgICAgcmV0dXJuIGAke0RPVF9MSVRFUkFMfSR7T05FX0NIQVJ9JHtzdGFyfWA7XG5cbiAgICAgIGNhc2UgJyouKic6XG4gICAgICAgIHJldHVybiBgJHtub2RvdH0ke3N0YXJ9JHtET1RfTElURVJBTH0ke09ORV9DSEFSfSR7c3Rhcn1gO1xuXG4gICAgICBjYXNlICcqLyonOlxuICAgICAgICByZXR1cm4gYCR7bm9kb3R9JHtzdGFyfSR7U0xBU0hfTElURVJBTH0ke09ORV9DSEFSfSR7c2xhc2hEb3R9JHtzdGFyfWA7XG5cbiAgICAgIGNhc2UgJyoqJzpcbiAgICAgICAgcmV0dXJuIG5vZG90ICsgZ2xvYnN0YXIob3B0cyk7XG5cbiAgICAgIGNhc2UgJyoqLyonOlxuICAgICAgICByZXR1cm4gYCg/OiR7bm9kb3R9JHtnbG9ic3RhcihvcHRzKX0ke1NMQVNIX0xJVEVSQUx9KT8ke3NsYXNoRG90fSR7T05FX0NIQVJ9JHtzdGFyfWA7XG5cbiAgICAgIGNhc2UgJyoqLyouKic6XG4gICAgICAgIHJldHVybiBgKD86JHtub2RvdH0ke2dsb2JzdGFyKG9wdHMpfSR7U0xBU0hfTElURVJBTH0pPyR7c2xhc2hEb3R9JHtzdGFyfSR7RE9UX0xJVEVSQUx9JHtPTkVfQ0hBUn0ke3N0YXJ9YDtcblxuICAgICAgY2FzZSAnKiovLionOlxuICAgICAgICByZXR1cm4gYCg/OiR7bm9kb3R9JHtnbG9ic3RhcihvcHRzKX0ke1NMQVNIX0xJVEVSQUx9KT8ke0RPVF9MSVRFUkFMfSR7T05FX0NIQVJ9JHtzdGFyfWA7XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSAvXiguKj8pXFwuKFxcdyspJC8uZXhlYyhzdHIpO1xuICAgICAgICBpZiAoIW1hdGNoKSByZXR1cm47XG5cbiAgICAgICAgY29uc3Qgc291cmNlID0gY3JlYXRlKG1hdGNoWzFdKTtcbiAgICAgICAgaWYgKCFzb3VyY2UpIHJldHVybjtcblxuICAgICAgICByZXR1cm4gc291cmNlICsgRE9UX0xJVEVSQUwgKyBtYXRjaFsyXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb3V0cHV0ID0gdXRpbHMucmVtb3ZlUHJlZml4KGlucHV0LCBzdGF0ZSk7XG4gIGxldCBzb3VyY2UgPSBjcmVhdGUob3V0cHV0KTtcblxuICBpZiAoc291cmNlICYmIG9wdHMuc3RyaWN0U2xhc2hlcyAhPT0gdHJ1ZSkge1xuICAgIHNvdXJjZSArPSBgJHtTTEFTSF9MSVRFUkFMfT9gO1xuICB9XG5cbiAgcmV0dXJuIHNvdXJjZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3Qgc2NhbiA9IHJlcXVpcmUoJy4vc2NhbicpO1xuY29uc3QgcGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJyk7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5jb25zdCBpc09iamVjdCA9IHZhbCA9PiB2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkodmFsKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0Y2hlciBmdW5jdGlvbiBmcm9tIG9uZSBvciBtb3JlIGdsb2IgcGF0dGVybnMuIFRoZVxuICogcmV0dXJuZWQgZnVuY3Rpb24gdGFrZXMgYSBzdHJpbmcgdG8gbWF0Y2ggYXMgaXRzIGZpcnN0IGFyZ3VtZW50LFxuICogYW5kIHJldHVybnMgdHJ1ZSBpZiB0aGUgc3RyaW5nIGlzIGEgbWF0Y2guIFRoZSByZXR1cm5lZCBtYXRjaGVyXG4gKiBmdW5jdGlvbiBhbHNvIHRha2VzIGEgYm9vbGVhbiBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IHRoYXQsIHdoZW4gdHJ1ZSxcbiAqIHJldHVybnMgYW4gb2JqZWN0IHdpdGggYWRkaXRpb25hbCBpbmZvcm1hdGlvbi5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgcGljb21hdGNoID0gcmVxdWlyZSgncGljb21hdGNoJyk7XG4gKiAvLyBwaWNvbWF0Y2goZ2xvYlssIG9wdGlvbnNdKTtcbiAqXG4gKiBjb25zdCBpc01hdGNoID0gcGljb21hdGNoKCcqLiEoKmEpJyk7XG4gKiBjb25zb2xlLmxvZyhpc01hdGNoKCdhLmEnKSk7IC8vPT4gZmFsc2VcbiAqIGNvbnNvbGUubG9nKGlzTWF0Y2goJ2EuYicpKTsgLy89PiB0cnVlXG4gKiBgYGBcbiAqIEBuYW1lIHBpY29tYXRjaFxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IGBnbG9ic2AgT25lIG9yIG1vcmUgZ2xvYiBwYXR0ZXJucy5cbiAqIEBwYXJhbSB7T2JqZWN0PX0gYG9wdGlvbnNgXG4gKiBAcmV0dXJuIHtGdW5jdGlvbj19IFJldHVybnMgYSBtYXRjaGVyIGZ1bmN0aW9uLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5jb25zdCBwaWNvbWF0Y2ggPSAoZ2xvYiwgb3B0aW9ucywgcmV0dXJuU3RhdGUgPSBmYWxzZSkgPT4ge1xuICBpZiAoQXJyYXkuaXNBcnJheShnbG9iKSkge1xuICAgIGNvbnN0IGZucyA9IGdsb2IubWFwKGlucHV0ID0+IHBpY29tYXRjaChpbnB1dCwgb3B0aW9ucywgcmV0dXJuU3RhdGUpKTtcbiAgICBjb25zdCBhcnJheU1hdGNoZXIgPSBzdHIgPT4ge1xuICAgICAgZm9yIChjb25zdCBpc01hdGNoIG9mIGZucykge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IGlzTWF0Y2goc3RyKTtcbiAgICAgICAgaWYgKHN0YXRlKSByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICByZXR1cm4gYXJyYXlNYXRjaGVyO1xuICB9XG5cbiAgY29uc3QgaXNTdGF0ZSA9IGlzT2JqZWN0KGdsb2IpICYmIGdsb2IudG9rZW5zICYmIGdsb2IuaW5wdXQ7XG5cbiAgaWYgKGdsb2IgPT09ICcnIHx8ICh0eXBlb2YgZ2xvYiAhPT0gJ3N0cmluZycgJiYgIWlzU3RhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgcGF0dGVybiB0byBiZSBhIG5vbi1lbXB0eSBzdHJpbmcnKTtcbiAgfVxuXG4gIGNvbnN0IG9wdHMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBwb3NpeCA9IHV0aWxzLmlzV2luZG93cyhvcHRpb25zKTtcbiAgY29uc3QgcmVnZXggPSBpc1N0YXRlXG4gICAgPyBwaWNvbWF0Y2guY29tcGlsZVJlKGdsb2IsIG9wdGlvbnMpXG4gICAgOiBwaWNvbWF0Y2gubWFrZVJlKGdsb2IsIG9wdGlvbnMsIGZhbHNlLCB0cnVlKTtcblxuICBjb25zdCBzdGF0ZSA9IHJlZ2V4LnN0YXRlO1xuICBkZWxldGUgcmVnZXguc3RhdGU7XG5cbiAgbGV0IGlzSWdub3JlZCA9ICgpID0+IGZhbHNlO1xuICBpZiAob3B0cy5pZ25vcmUpIHtcbiAgICBjb25zdCBpZ25vcmVPcHRzID0geyAuLi5vcHRpb25zLCBpZ25vcmU6IG51bGwsIG9uTWF0Y2g6IG51bGwsIG9uUmVzdWx0OiBudWxsIH07XG4gICAgaXNJZ25vcmVkID0gcGljb21hdGNoKG9wdHMuaWdub3JlLCBpZ25vcmVPcHRzLCByZXR1cm5TdGF0ZSk7XG4gIH1cblxuICBjb25zdCBtYXRjaGVyID0gKGlucHV0LCByZXR1cm5PYmplY3QgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IHsgaXNNYXRjaCwgbWF0Y2gsIG91dHB1dCB9ID0gcGljb21hdGNoLnRlc3QoaW5wdXQsIHJlZ2V4LCBvcHRpb25zLCB7IGdsb2IsIHBvc2l4IH0pO1xuICAgIGNvbnN0IHJlc3VsdCA9IHsgZ2xvYiwgc3RhdGUsIHJlZ2V4LCBwb3NpeCwgaW5wdXQsIG91dHB1dCwgbWF0Y2gsIGlzTWF0Y2ggfTtcblxuICAgIGlmICh0eXBlb2Ygb3B0cy5vblJlc3VsdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3B0cy5vblJlc3VsdChyZXN1bHQpO1xuICAgIH1cblxuICAgIGlmIChpc01hdGNoID09PSBmYWxzZSkge1xuICAgICAgcmVzdWx0LmlzTWF0Y2ggPSBmYWxzZTtcbiAgICAgIHJldHVybiByZXR1cm5PYmplY3QgPyByZXN1bHQgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoaXNJZ25vcmVkKGlucHV0KSkge1xuICAgICAgaWYgKHR5cGVvZiBvcHRzLm9uSWdub3JlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9wdHMub25JZ25vcmUocmVzdWx0KTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5pc01hdGNoID0gZmFsc2U7XG4gICAgICByZXR1cm4gcmV0dXJuT2JqZWN0ID8gcmVzdWx0IDogZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHRzLm9uTWF0Y2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9wdHMub25NYXRjaChyZXN1bHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuT2JqZWN0ID8gcmVzdWx0IDogdHJ1ZTtcbiAgfTtcblxuICBpZiAocmV0dXJuU3RhdGUpIHtcbiAgICBtYXRjaGVyLnN0YXRlID0gc3RhdGU7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlcjtcbn07XG5cbi8qKlxuICogVGVzdCBgaW5wdXRgIHdpdGggdGhlIGdpdmVuIGByZWdleGAuIFRoaXMgaXMgdXNlZCBieSB0aGUgbWFpblxuICogYHBpY29tYXRjaCgpYCBmdW5jdGlvbiB0byB0ZXN0IHRoZSBpbnB1dCBzdHJpbmcuXG4gKlxuICogYGBganNcbiAqIGNvbnN0IHBpY29tYXRjaCA9IHJlcXVpcmUoJ3BpY29tYXRjaCcpO1xuICogLy8gcGljb21hdGNoLnRlc3QoaW5wdXQsIHJlZ2V4Wywgb3B0aW9uc10pO1xuICpcbiAqIGNvbnNvbGUubG9nKHBpY29tYXRjaC50ZXN0KCdmb28vYmFyJywgL14oPzooW14vXSo/KVxcLyhbXi9dKj8pKSQvKSk7XG4gKiAvLyB7IGlzTWF0Y2g6IHRydWUsIG1hdGNoOiBbICdmb28vJywgJ2ZvbycsICdiYXInIF0sIG91dHB1dDogJ2Zvby9iYXInIH1cbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd9IGBpbnB1dGAgU3RyaW5nIHRvIHRlc3QuXG4gKiBAcGFyYW0ge1JlZ0V4cH0gYHJlZ2V4YFxuICogQHJldHVybiB7T2JqZWN0fSBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIG1hdGNoaW5nIGluZm8uXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnBpY29tYXRjaC50ZXN0ID0gKGlucHV0LCByZWdleCwgb3B0aW9ucywgeyBnbG9iLCBwb3NpeCB9ID0ge30pID0+IHtcbiAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBpbnB1dCB0byBiZSBhIHN0cmluZycpO1xuICB9XG5cbiAgaWYgKGlucHV0ID09PSAnJykge1xuICAgIHJldHVybiB7IGlzTWF0Y2g6IGZhbHNlLCBvdXRwdXQ6ICcnIH07XG4gIH1cblxuICBjb25zdCBvcHRzID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3QgZm9ybWF0ID0gb3B0cy5mb3JtYXQgfHwgKHBvc2l4ID8gdXRpbHMudG9Qb3NpeFNsYXNoZXMgOiBudWxsKTtcbiAgbGV0IG1hdGNoID0gaW5wdXQgPT09IGdsb2I7XG4gIGxldCBvdXRwdXQgPSAobWF0Y2ggJiYgZm9ybWF0KSA/IGZvcm1hdChpbnB1dCkgOiBpbnB1dDtcblxuICBpZiAobWF0Y2ggPT09IGZhbHNlKSB7XG4gICAgb3V0cHV0ID0gZm9ybWF0ID8gZm9ybWF0KGlucHV0KSA6IGlucHV0O1xuICAgIG1hdGNoID0gb3V0cHV0ID09PSBnbG9iO1xuICB9XG5cbiAgaWYgKG1hdGNoID09PSBmYWxzZSB8fCBvcHRzLmNhcHR1cmUgPT09IHRydWUpIHtcbiAgICBpZiAob3B0cy5tYXRjaEJhc2UgPT09IHRydWUgfHwgb3B0cy5iYXNlbmFtZSA9PT0gdHJ1ZSkge1xuICAgICAgbWF0Y2ggPSBwaWNvbWF0Y2gubWF0Y2hCYXNlKGlucHV0LCByZWdleCwgb3B0aW9ucywgcG9zaXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYXRjaCA9IHJlZ2V4LmV4ZWMob3V0cHV0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBpc01hdGNoOiBCb29sZWFuKG1hdGNoKSwgbWF0Y2gsIG91dHB1dCB9O1xufTtcblxuLyoqXG4gKiBNYXRjaCB0aGUgYmFzZW5hbWUgb2YgYSBmaWxlcGF0aC5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgcGljb21hdGNoID0gcmVxdWlyZSgncGljb21hdGNoJyk7XG4gKiAvLyBwaWNvbWF0Y2gubWF0Y2hCYXNlKGlucHV0LCBnbG9iWywgb3B0aW9uc10pO1xuICogY29uc29sZS5sb2cocGljb21hdGNoLm1hdGNoQmFzZSgnZm9vL2Jhci5qcycsICcqLmpzJyk7IC8vIHRydWVcbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd9IGBpbnB1dGAgU3RyaW5nIHRvIHRlc3QuXG4gKiBAcGFyYW0ge1JlZ0V4cHxTdHJpbmd9IGBnbG9iYCBHbG9iIHBhdHRlcm4gb3IgcmVnZXggY3JlYXRlZCBieSBbLm1ha2VSZV0oI21ha2VSZSkuXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5waWNvbWF0Y2gubWF0Y2hCYXNlID0gKGlucHV0LCBnbG9iLCBvcHRpb25zLCBwb3NpeCA9IHV0aWxzLmlzV2luZG93cyhvcHRpb25zKSkgPT4ge1xuICBjb25zdCByZWdleCA9IGdsb2IgaW5zdGFuY2VvZiBSZWdFeHAgPyBnbG9iIDogcGljb21hdGNoLm1ha2VSZShnbG9iLCBvcHRpb25zKTtcbiAgcmV0dXJuIHJlZ2V4LnRlc3QocGF0aC5iYXNlbmFtZShpbnB1dCkpO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgKiphbnkqKiBvZiB0aGUgZ2l2ZW4gZ2xvYiBgcGF0dGVybnNgIG1hdGNoIHRoZSBzcGVjaWZpZWQgYHN0cmluZ2AuXG4gKlxuICogYGBganNcbiAqIGNvbnN0IHBpY29tYXRjaCA9IHJlcXVpcmUoJ3BpY29tYXRjaCcpO1xuICogLy8gcGljb21hdGNoLmlzTWF0Y2goc3RyaW5nLCBwYXR0ZXJuc1ssIG9wdGlvbnNdKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhwaWNvbWF0Y2guaXNNYXRjaCgnYS5hJywgWydiLionLCAnKi5hJ10pKTsgLy89PiB0cnVlXG4gKiBjb25zb2xlLmxvZyhwaWNvbWF0Y2guaXNNYXRjaCgnYS5hJywgJ2IuKicpKTsgLy89PiBmYWxzZVxuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gc3RyIFRoZSBzdHJpbmcgdG8gdGVzdC5cbiAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBwYXR0ZXJucyBPbmUgb3IgbW9yZSBnbG9iIHBhdHRlcm5zIHRvIHVzZSBmb3IgbWF0Y2hpbmcuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIFNlZSBhdmFpbGFibGUgW29wdGlvbnNdKCNvcHRpb25zKS5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBhbnkgcGF0dGVybnMgbWF0Y2ggYHN0cmBcbiAqIEBhcGkgcHVibGljXG4gKi9cblxucGljb21hdGNoLmlzTWF0Y2ggPSAoc3RyLCBwYXR0ZXJucywgb3B0aW9ucykgPT4gcGljb21hdGNoKHBhdHRlcm5zLCBvcHRpb25zKShzdHIpO1xuXG4vKipcbiAqIFBhcnNlIGEgZ2xvYiBwYXR0ZXJuIHRvIGNyZWF0ZSB0aGUgc291cmNlIHN0cmluZyBmb3IgYSByZWd1bGFyXG4gKiBleHByZXNzaW9uLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBwaWNvbWF0Y2ggPSByZXF1aXJlKCdwaWNvbWF0Y2gnKTtcbiAqIGNvbnN0IHJlc3VsdCA9IHBpY29tYXRjaC5wYXJzZShwYXR0ZXJuWywgb3B0aW9uc10pO1xuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ30gYHBhdHRlcm5gXG4gKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgXG4gKiBAcmV0dXJuIHtPYmplY3R9IFJldHVybnMgYW4gb2JqZWN0IHdpdGggdXNlZnVsIHByb3BlcnRpZXMgYW5kIG91dHB1dCB0byBiZSB1c2VkIGFzIGEgcmVnZXggc291cmNlIHN0cmluZy5cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucGljb21hdGNoLnBhcnNlID0gKHBhdHRlcm4sIG9wdGlvbnMpID0+IHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocGF0dGVybikpIHJldHVybiBwYXR0ZXJuLm1hcChwID0+IHBpY29tYXRjaC5wYXJzZShwLCBvcHRpb25zKSk7XG4gIHJldHVybiBwYXJzZShwYXR0ZXJuLCB7IC4uLm9wdGlvbnMsIGZhc3RwYXRoczogZmFsc2UgfSk7XG59O1xuXG4vKipcbiAqIFNjYW4gYSBnbG9iIHBhdHRlcm4gdG8gc2VwYXJhdGUgdGhlIHBhdHRlcm4gaW50byBzZWdtZW50cy5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgcGljb21hdGNoID0gcmVxdWlyZSgncGljb21hdGNoJyk7XG4gKiAvLyBwaWNvbWF0Y2guc2NhbihpbnB1dFssIG9wdGlvbnNdKTtcbiAqXG4gKiBjb25zdCByZXN1bHQgPSBwaWNvbWF0Y2guc2NhbignIS4vZm9vLyouanMnKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gKiB7IHByZWZpeDogJyEuLycsXG4gKiAgIGlucHV0OiAnIS4vZm9vLyouanMnLFxuICogICBzdGFydDogMyxcbiAqICAgYmFzZTogJ2ZvbycsXG4gKiAgIGdsb2I6ICcqLmpzJyxcbiAqICAgaXNCcmFjZTogZmFsc2UsXG4gKiAgIGlzQnJhY2tldDogZmFsc2UsXG4gKiAgIGlzR2xvYjogdHJ1ZSxcbiAqICAgaXNFeHRnbG9iOiBmYWxzZSxcbiAqICAgaXNHbG9ic3RhcjogZmFsc2UsXG4gKiAgIG5lZ2F0ZWQ6IHRydWUgfVxuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ30gYGlucHV0YCBHbG9iIHBhdHRlcm4gdG8gc2Nhbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBgb3B0aW9uc2BcbiAqIEByZXR1cm4ge09iamVjdH0gUmV0dXJucyBhbiBvYmplY3Qgd2l0aFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5waWNvbWF0Y2guc2NhbiA9IChpbnB1dCwgb3B0aW9ucykgPT4gc2NhbihpbnB1dCwgb3B0aW9ucyk7XG5cbi8qKlxuICogQ29tcGlsZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBmcm9tIHRoZSBgc3RhdGVgIG9iamVjdCByZXR1cm5lZCBieSB0aGVcbiAqIFtwYXJzZSgpXSgjcGFyc2UpIG1ldGhvZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYHN0YXRlYFxuICogQHBhcmFtIHtPYmplY3R9IGBvcHRpb25zYFxuICogQHBhcmFtIHtCb29sZWFufSBgcmV0dXJuT3V0cHV0YCBJbnRlbmRlZCBmb3IgaW1wbGVtZW50b3JzLCB0aGlzIGFyZ3VtZW50IGFsbG93cyB5b3UgdG8gcmV0dXJuIHRoZSByYXcgb3V0cHV0IGZyb20gdGhlIHBhcnNlci5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gYHJldHVyblN0YXRlYCBBZGRzIHRoZSBzdGF0ZSB0byBhIGBzdGF0ZWAgcHJvcGVydHkgb24gdGhlIHJldHVybmVkIHJlZ2V4LiBVc2VmdWwgZm9yIGltcGxlbWVudG9ycyBhbmQgZGVidWdnaW5nLlxuICogQHJldHVybiB7UmVnRXhwfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5waWNvbWF0Y2guY29tcGlsZVJlID0gKHN0YXRlLCBvcHRpb25zLCByZXR1cm5PdXRwdXQgPSBmYWxzZSwgcmV0dXJuU3RhdGUgPSBmYWxzZSkgPT4ge1xuICBpZiAocmV0dXJuT3V0cHV0ID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIHN0YXRlLm91dHB1dDtcbiAgfVxuXG4gIGNvbnN0IG9wdHMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBwcmVwZW5kID0gb3B0cy5jb250YWlucyA/ICcnIDogJ14nO1xuICBjb25zdCBhcHBlbmQgPSBvcHRzLmNvbnRhaW5zID8gJycgOiAnJCc7XG5cbiAgbGV0IHNvdXJjZSA9IGAke3ByZXBlbmR9KD86JHtzdGF0ZS5vdXRwdXR9KSR7YXBwZW5kfWA7XG4gIGlmIChzdGF0ZSAmJiBzdGF0ZS5uZWdhdGVkID09PSB0cnVlKSB7XG4gICAgc291cmNlID0gYF4oPyEke3NvdXJjZX0pLiokYDtcbiAgfVxuXG4gIGNvbnN0IHJlZ2V4ID0gcGljb21hdGNoLnRvUmVnZXgoc291cmNlLCBvcHRpb25zKTtcbiAgaWYgKHJldHVyblN0YXRlID09PSB0cnVlKSB7XG4gICAgcmVnZXguc3RhdGUgPSBzdGF0ZTtcbiAgfVxuXG4gIHJldHVybiByZWdleDtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgcmVndWxhciBleHByZXNzaW9uIGZyb20gYSBwYXJzZWQgZ2xvYiBwYXR0ZXJuLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBwaWNvbWF0Y2ggPSByZXF1aXJlKCdwaWNvbWF0Y2gnKTtcbiAqIGNvbnN0IHN0YXRlID0gcGljb21hdGNoLnBhcnNlKCcqLmpzJyk7XG4gKiAvLyBwaWNvbWF0Y2guY29tcGlsZVJlKHN0YXRlWywgb3B0aW9uc10pO1xuICpcbiAqIGNvbnNvbGUubG9nKHBpY29tYXRjaC5jb21waWxlUmUoc3RhdGUpKTtcbiAqIC8vPT4gL14oPzooPyFcXC4pKD89LilbXi9dKj9cXC5qcykkL1xuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ30gYHN0YXRlYCBUaGUgb2JqZWN0IHJldHVybmVkIGZyb20gdGhlIGAucGFyc2VgIG1ldGhvZC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBgb3B0aW9uc2BcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gYHJldHVybk91dHB1dGAgSW1wbGVtZW50b3JzIG1heSB1c2UgdGhpcyBhcmd1bWVudCB0byByZXR1cm4gdGhlIGNvbXBpbGVkIG91dHB1dCwgaW5zdGVhZCBvZiBhIHJlZ3VsYXIgZXhwcmVzc2lvbi4gVGhpcyBpcyBub3QgZXhwb3NlZCBvbiB0aGUgb3B0aW9ucyB0byBwcmV2ZW50IGVuZC11c2VycyBmcm9tIG11dGF0aW5nIHRoZSByZXN1bHQuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGByZXR1cm5TdGF0ZWAgSW1wbGVtZW50b3JzIG1heSB1c2UgdGhpcyBhcmd1bWVudCB0byByZXR1cm4gdGhlIHN0YXRlIGZyb20gdGhlIHBhcnNlZCBnbG9iIHdpdGggdGhlIHJldHVybmVkIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqIEByZXR1cm4ge1JlZ0V4cH0gUmV0dXJucyBhIHJlZ2V4IGNyZWF0ZWQgZnJvbSB0aGUgZ2l2ZW4gcGF0dGVybi5cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucGljb21hdGNoLm1ha2VSZSA9IChpbnB1dCwgb3B0aW9ucyA9IHt9LCByZXR1cm5PdXRwdXQgPSBmYWxzZSwgcmV0dXJuU3RhdGUgPSBmYWxzZSkgPT4ge1xuICBpZiAoIWlucHV0IHx8IHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIG5vbi1lbXB0eSBzdHJpbmcnKTtcbiAgfVxuXG4gIGxldCBwYXJzZWQgPSB7IG5lZ2F0ZWQ6IGZhbHNlLCBmYXN0cGF0aHM6IHRydWUgfTtcblxuICBpZiAob3B0aW9ucy5mYXN0cGF0aHMgIT09IGZhbHNlICYmIChpbnB1dFswXSA9PT0gJy4nIHx8IGlucHV0WzBdID09PSAnKicpKSB7XG4gICAgcGFyc2VkLm91dHB1dCA9IHBhcnNlLmZhc3RwYXRocyhpbnB1dCwgb3B0aW9ucyk7XG4gIH1cblxuICBpZiAoIXBhcnNlZC5vdXRwdXQpIHtcbiAgICBwYXJzZWQgPSBwYXJzZShpbnB1dCwgb3B0aW9ucyk7XG4gIH1cblxuICByZXR1cm4gcGljb21hdGNoLmNvbXBpbGVSZShwYXJzZWQsIG9wdGlvbnMsIHJldHVybk91dHB1dCwgcmV0dXJuU3RhdGUpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSByZWd1bGFyIGV4cHJlc3Npb24gZnJvbSB0aGUgZ2l2ZW4gcmVnZXggc291cmNlIHN0cmluZy5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgcGljb21hdGNoID0gcmVxdWlyZSgncGljb21hdGNoJyk7XG4gKiAvLyBwaWNvbWF0Y2gudG9SZWdleChzb3VyY2VbLCBvcHRpb25zXSk7XG4gKlxuICogY29uc3QgeyBvdXRwdXQgfSA9IHBpY29tYXRjaC5wYXJzZSgnKi5qcycpO1xuICogY29uc29sZS5sb2cocGljb21hdGNoLnRvUmVnZXgob3V0cHV0KSk7XG4gKiAvLz0+IC9eKD86KD8hXFwuKSg/PS4pW14vXSo/XFwuanMpJC9cbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd9IGBzb3VyY2VgIFJlZ3VsYXIgZXhwcmVzc2lvbiBzb3VyY2Ugc3RyaW5nLlxuICogQHBhcmFtIHtPYmplY3R9IGBvcHRpb25zYFxuICogQHJldHVybiB7UmVnRXhwfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5waWNvbWF0Y2gudG9SZWdleCA9IChzb3VyY2UsIG9wdGlvbnMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBvcHRzID0gb3B0aW9ucyB8fCB7fTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChzb3VyY2UsIG9wdHMuZmxhZ3MgfHwgKG9wdHMubm9jYXNlID8gJ2knIDogJycpKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5kZWJ1ZyA9PT0gdHJ1ZSkgdGhyb3cgZXJyO1xuICAgIHJldHVybiAvJF4vO1xuICB9XG59O1xuXG4vKipcbiAqIFBpY29tYXRjaCBjb25zdGFudHMuXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblxucGljb21hdGNoLmNvbnN0YW50cyA9IGNvbnN0YW50cztcblxuLyoqXG4gKiBFeHBvc2UgXCJwaWNvbWF0Y2hcIlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcGljb21hdGNoO1xuIiwgIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9waWNvbWF0Y2gnKTtcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG5jb25zdCBicmFjZXMgPSByZXF1aXJlKCdicmFjZXMnKTtcbmNvbnN0IHBpY29tYXRjaCA9IHJlcXVpcmUoJ3BpY29tYXRjaCcpO1xuY29uc3QgdXRpbHMgPSByZXF1aXJlKCdwaWNvbWF0Y2gvbGliL3V0aWxzJyk7XG5jb25zdCBpc0VtcHR5U3RyaW5nID0gdmFsID0+IHZhbCA9PT0gJycgfHwgdmFsID09PSAnLi8nO1xuXG4vKipcbiAqIFJldHVybnMgYW4gYXJyYXkgb2Ygc3RyaW5ncyB0aGF0IG1hdGNoIG9uZSBvciBtb3JlIGdsb2IgcGF0dGVybnMuXG4gKlxuICogYGBganNcbiAqIGNvbnN0IG1tID0gcmVxdWlyZSgnbWljcm9tYXRjaCcpO1xuICogLy8gbW0obGlzdCwgcGF0dGVybnNbLCBvcHRpb25zXSk7XG4gKlxuICogY29uc29sZS5sb2cobW0oWydhLmpzJywgJ2EudHh0J10sIFsnKi5qcyddKSk7XG4gKiAvLz0+IFsgJ2EuanMnIF1cbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXk8c3RyaW5nPn0gYGxpc3RgIExpc3Qgb2Ygc3RyaW5ncyB0byBtYXRjaC5cbiAqIEBwYXJhbSB7U3RyaW5nfEFycmF5PHN0cmluZz59IGBwYXR0ZXJuc2AgT25lIG9yIG1vcmUgZ2xvYiBwYXR0ZXJucyB0byB1c2UgZm9yIG1hdGNoaW5nLlxuICogQHBhcmFtIHtPYmplY3R9IGBvcHRpb25zYCBTZWUgYXZhaWxhYmxlIFtvcHRpb25zXSgjb3B0aW9ucylcbiAqIEByZXR1cm4ge0FycmF5fSBSZXR1cm5zIGFuIGFycmF5IG9mIG1hdGNoZXNcbiAqIEBzdW1tYXJ5IGZhbHNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmNvbnN0IG1pY3JvbWF0Y2ggPSAobGlzdCwgcGF0dGVybnMsIG9wdGlvbnMpID0+IHtcbiAgcGF0dGVybnMgPSBbXS5jb25jYXQocGF0dGVybnMpO1xuICBsaXN0ID0gW10uY29uY2F0KGxpc3QpO1xuXG4gIGxldCBvbWl0ID0gbmV3IFNldCgpO1xuICBsZXQga2VlcCA9IG5ldyBTZXQoKTtcbiAgbGV0IGl0ZW1zID0gbmV3IFNldCgpO1xuICBsZXQgbmVnYXRpdmVzID0gMDtcblxuICBsZXQgb25SZXN1bHQgPSBzdGF0ZSA9PiB7XG4gICAgaXRlbXMuYWRkKHN0YXRlLm91dHB1dCk7XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5vblJlc3VsdCkge1xuICAgICAgb3B0aW9ucy5vblJlc3VsdChzdGF0ZSk7XG4gICAgfVxuICB9O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0dGVybnMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgaXNNYXRjaCA9IHBpY29tYXRjaChTdHJpbmcocGF0dGVybnNbaV0pLCB7IC4uLm9wdGlvbnMsIG9uUmVzdWx0IH0sIHRydWUpO1xuICAgIGxldCBuZWdhdGVkID0gaXNNYXRjaC5zdGF0ZS5uZWdhdGVkIHx8IGlzTWF0Y2guc3RhdGUubmVnYXRlZEV4dGdsb2I7XG4gICAgaWYgKG5lZ2F0ZWQpIG5lZ2F0aXZlcysrO1xuXG4gICAgZm9yIChsZXQgaXRlbSBvZiBsaXN0KSB7XG4gICAgICBsZXQgbWF0Y2hlZCA9IGlzTWF0Y2goaXRlbSwgdHJ1ZSk7XG5cbiAgICAgIGxldCBtYXRjaCA9IG5lZ2F0ZWQgPyAhbWF0Y2hlZC5pc01hdGNoIDogbWF0Y2hlZC5pc01hdGNoO1xuICAgICAgaWYgKCFtYXRjaCkgY29udGludWU7XG5cbiAgICAgIGlmIChuZWdhdGVkKSB7XG4gICAgICAgIG9taXQuYWRkKG1hdGNoZWQub3V0cHV0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9taXQuZGVsZXRlKG1hdGNoZWQub3V0cHV0KTtcbiAgICAgICAga2VlcC5hZGQobWF0Y2hlZC5vdXRwdXQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxldCByZXN1bHQgPSBuZWdhdGl2ZXMgPT09IHBhdHRlcm5zLmxlbmd0aCA/IFsuLi5pdGVtc10gOiBbLi4ua2VlcF07XG4gIGxldCBtYXRjaGVzID0gcmVzdWx0LmZpbHRlcihpdGVtID0+ICFvbWl0LmhhcyhpdGVtKSk7XG5cbiAgaWYgKG9wdGlvbnMgJiYgbWF0Y2hlcy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAob3B0aW9ucy5mYWlsZ2xvYiA9PT0gdHJ1ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBtYXRjaGVzIGZvdW5kIGZvciBcIiR7cGF0dGVybnMuam9pbignLCAnKX1cImApO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLm5vbnVsbCA9PT0gdHJ1ZSB8fCBvcHRpb25zLm51bGxnbG9iID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy51bmVzY2FwZSA/IHBhdHRlcm5zLm1hcChwID0+IHAucmVwbGFjZSgvXFxcXC9nLCAnJykpIDogcGF0dGVybnM7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1hdGNoZXM7XG59O1xuXG4vKipcbiAqIEJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gKi9cblxubWljcm9tYXRjaC5tYXRjaCA9IG1pY3JvbWF0Y2g7XG5cbi8qKlxuICogUmV0dXJucyBhIG1hdGNoZXIgZnVuY3Rpb24gZnJvbSB0aGUgZ2l2ZW4gZ2xvYiBgcGF0dGVybmAgYW5kIGBvcHRpb25zYC5cbiAqIFRoZSByZXR1cm5lZCBmdW5jdGlvbiB0YWtlcyBhIHN0cmluZyB0byBtYXRjaCBhcyBpdHMgb25seSBhcmd1bWVudCBhbmQgcmV0dXJuc1xuICogdHJ1ZSBpZiB0aGUgc3RyaW5nIGlzIGEgbWF0Y2guXG4gKlxuICogYGBganNcbiAqIGNvbnN0IG1tID0gcmVxdWlyZSgnbWljcm9tYXRjaCcpO1xuICogLy8gbW0ubWF0Y2hlcihwYXR0ZXJuWywgb3B0aW9uc10pO1xuICpcbiAqIGNvbnN0IGlzTWF0Y2ggPSBtbS5tYXRjaGVyKCcqLiEoKmEpJyk7XG4gKiBjb25zb2xlLmxvZyhpc01hdGNoKCdhLmEnKSk7IC8vPT4gZmFsc2VcbiAqIGNvbnNvbGUubG9nKGlzTWF0Y2goJ2EuYicpKTsgLy89PiB0cnVlXG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfSBgcGF0dGVybmAgR2xvYiBwYXR0ZXJuXG4gKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gUmV0dXJucyBhIG1hdGNoZXIgZnVuY3Rpb24uXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1pY3JvbWF0Y2gubWF0Y2hlciA9IChwYXR0ZXJuLCBvcHRpb25zKSA9PiBwaWNvbWF0Y2gocGF0dGVybiwgb3B0aW9ucyk7XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmICoqYW55Kiogb2YgdGhlIGdpdmVuIGdsb2IgYHBhdHRlcm5zYCBtYXRjaCB0aGUgc3BlY2lmaWVkIGBzdHJpbmdgLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBtbSA9IHJlcXVpcmUoJ21pY3JvbWF0Y2gnKTtcbiAqIC8vIG1tLmlzTWF0Y2goc3RyaW5nLCBwYXR0ZXJuc1ssIG9wdGlvbnNdKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhtbS5pc01hdGNoKCdhLmEnLCBbJ2IuKicsICcqLmEnXSkpOyAvLz0+IHRydWVcbiAqIGNvbnNvbGUubG9nKG1tLmlzTWF0Y2goJ2EuYScsICdiLionKSk7IC8vPT4gZmFsc2VcbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd9IGBzdHJgIFRoZSBzdHJpbmcgdG8gdGVzdC5cbiAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBgcGF0dGVybnNgIE9uZSBvciBtb3JlIGdsb2IgcGF0dGVybnMgdG8gdXNlIGZvciBtYXRjaGluZy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBgW29wdGlvbnNdYCBTZWUgYXZhaWxhYmxlIFtvcHRpb25zXSgjb3B0aW9ucykuXG4gKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm5zIHRydWUgaWYgYW55IHBhdHRlcm5zIG1hdGNoIGBzdHJgXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1pY3JvbWF0Y2guaXNNYXRjaCA9IChzdHIsIHBhdHRlcm5zLCBvcHRpb25zKSA9PiBwaWNvbWF0Y2gocGF0dGVybnMsIG9wdGlvbnMpKHN0cik7XG5cbi8qKlxuICogQmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAqL1xuXG5taWNyb21hdGNoLmFueSA9IG1pY3JvbWF0Y2guaXNNYXRjaDtcblxuLyoqXG4gKiBSZXR1cm5zIGEgbGlzdCBvZiBzdHJpbmdzIHRoYXQgXyoqZG8gbm90IG1hdGNoIGFueSoqXyBvZiB0aGUgZ2l2ZW4gYHBhdHRlcm5zYC5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgbW0gPSByZXF1aXJlKCdtaWNyb21hdGNoJyk7XG4gKiAvLyBtbS5ub3QobGlzdCwgcGF0dGVybnNbLCBvcHRpb25zXSk7XG4gKlxuICogY29uc29sZS5sb2cobW0ubm90KFsnYS5hJywgJ2IuYicsICdjLmMnXSwgJyouYScpKTtcbiAqIC8vPT4gWydiLmInLCAnYy5jJ11cbiAqIGBgYFxuICogQHBhcmFtIHtBcnJheX0gYGxpc3RgIEFycmF5IG9mIHN0cmluZ3MgdG8gbWF0Y2guXG4gKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gYHBhdHRlcm5zYCBPbmUgb3IgbW9yZSBnbG9iIHBhdHRlcm4gdG8gdXNlIGZvciBtYXRjaGluZy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBgb3B0aW9uc2AgU2VlIGF2YWlsYWJsZSBbb3B0aW9uc10oI29wdGlvbnMpIGZvciBjaGFuZ2luZyBob3cgbWF0Y2hlcyBhcmUgcGVyZm9ybWVkXG4gKiBAcmV0dXJuIHtBcnJheX0gUmV0dXJucyBhbiBhcnJheSBvZiBzdHJpbmdzIHRoYXQgKipkbyBub3QgbWF0Y2gqKiB0aGUgZ2l2ZW4gcGF0dGVybnMuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1pY3JvbWF0Y2gubm90ID0gKGxpc3QsIHBhdHRlcm5zLCBvcHRpb25zID0ge30pID0+IHtcbiAgcGF0dGVybnMgPSBbXS5jb25jYXQocGF0dGVybnMpLm1hcChTdHJpbmcpO1xuICBsZXQgcmVzdWx0ID0gbmV3IFNldCgpO1xuICBsZXQgaXRlbXMgPSBbXTtcblxuICBsZXQgb25SZXN1bHQgPSBzdGF0ZSA9PiB7XG4gICAgaWYgKG9wdGlvbnMub25SZXN1bHQpIG9wdGlvbnMub25SZXN1bHQoc3RhdGUpO1xuICAgIGl0ZW1zLnB1c2goc3RhdGUub3V0cHV0KTtcbiAgfTtcblxuICBsZXQgbWF0Y2hlcyA9IG5ldyBTZXQobWljcm9tYXRjaChsaXN0LCBwYXR0ZXJucywgeyAuLi5vcHRpb25zLCBvblJlc3VsdCB9KSk7XG5cbiAgZm9yIChsZXQgaXRlbSBvZiBpdGVtcykge1xuICAgIGlmICghbWF0Y2hlcy5oYXMoaXRlbSkpIHtcbiAgICAgIHJlc3VsdC5hZGQoaXRlbSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBbLi4ucmVzdWx0XTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBgc3RyaW5nYCBjb250YWlucyB0aGUgZ2l2ZW4gcGF0dGVybi4gU2ltaWxhclxuICogdG8gWy5pc01hdGNoXSgjaXNNYXRjaCkgYnV0IHRoZSBwYXR0ZXJuIGNhbiBtYXRjaCBhbnkgcGFydCBvZiB0aGUgc3RyaW5nLlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgbW0gPSByZXF1aXJlKCdtaWNyb21hdGNoJyk7XG4gKiAvLyBtbS5jb250YWlucyhzdHJpbmcsIHBhdHRlcm5bLCBvcHRpb25zXSk7XG4gKlxuICogY29uc29sZS5sb2cobW0uY29udGFpbnMoJ2FhL2JiL2NjJywgJypiJykpO1xuICogLy89PiB0cnVlXG4gKiBjb25zb2xlLmxvZyhtbS5jb250YWlucygnYWEvYmIvY2MnLCAnKmQnKSk7XG4gKiAvLz0+IGZhbHNlXG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfSBgc3RyYCBUaGUgc3RyaW5nIHRvIG1hdGNoLlxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IGBwYXR0ZXJuc2AgR2xvYiBwYXR0ZXJuIHRvIHVzZSBmb3IgbWF0Y2hpbmcuXG4gKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgIFNlZSBhdmFpbGFibGUgW29wdGlvbnNdKCNvcHRpb25zKSBmb3IgY2hhbmdpbmcgaG93IG1hdGNoZXMgYXJlIHBlcmZvcm1lZFxuICogQHJldHVybiB7Qm9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIGFueSBvZiB0aGUgcGF0dGVybnMgbWF0Y2hlcyBhbnkgcGFydCBvZiBgc3RyYC5cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubWljcm9tYXRjaC5jb250YWlucyA9IChzdHIsIHBhdHRlcm4sIG9wdGlvbnMpID0+IHtcbiAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgYSBzdHJpbmc6IFwiJHt1dGlsLmluc3BlY3Qoc3RyKX1cImApO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkocGF0dGVybikpIHtcbiAgICByZXR1cm4gcGF0dGVybi5zb21lKHAgPT4gbWljcm9tYXRjaC5jb250YWlucyhzdHIsIHAsIG9wdGlvbnMpKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcGF0dGVybiA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAoaXNFbXB0eVN0cmluZyhzdHIpIHx8IGlzRW1wdHlTdHJpbmcocGF0dGVybikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoc3RyLmluY2x1ZGVzKHBhdHRlcm4pIHx8IChzdHIuc3RhcnRzV2l0aCgnLi8nKSAmJiBzdHIuc2xpY2UoMikuaW5jbHVkZXMocGF0dGVybikpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWljcm9tYXRjaC5pc01hdGNoKHN0ciwgcGF0dGVybiwgeyAuLi5vcHRpb25zLCBjb250YWluczogdHJ1ZSB9KTtcbn07XG5cbi8qKlxuICogRmlsdGVyIHRoZSBrZXlzIG9mIHRoZSBnaXZlbiBvYmplY3Qgd2l0aCB0aGUgZ2l2ZW4gYGdsb2JgIHBhdHRlcm5cbiAqIGFuZCBgb3B0aW9uc2AuIERvZXMgbm90IGF0dGVtcHQgdG8gbWF0Y2ggbmVzdGVkIGtleXMuIElmIHlvdSBuZWVkIHRoaXMgZmVhdHVyZSxcbiAqIHVzZSBbZ2xvYi1vYmplY3RdW10gaW5zdGVhZC5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgbW0gPSByZXF1aXJlKCdtaWNyb21hdGNoJyk7XG4gKiAvLyBtbS5tYXRjaEtleXMob2JqZWN0LCBwYXR0ZXJuc1ssIG9wdGlvbnNdKTtcbiAqXG4gKiBjb25zdCBvYmogPSB7IGFhOiAnYScsIGFiOiAnYicsIGFjOiAnYycgfTtcbiAqIGNvbnNvbGUubG9nKG1tLm1hdGNoS2V5cyhvYmosICcqYicpKTtcbiAqIC8vPT4geyBhYjogJ2InIH1cbiAqIGBgYFxuICogQHBhcmFtIHtPYmplY3R9IGBvYmplY3RgIFRoZSBvYmplY3Qgd2l0aCBrZXlzIHRvIGZpbHRlci5cbiAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBgcGF0dGVybnNgIE9uZSBvciBtb3JlIGdsb2IgcGF0dGVybnMgdG8gdXNlIGZvciBtYXRjaGluZy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBgb3B0aW9uc2AgU2VlIGF2YWlsYWJsZSBbb3B0aW9uc10oI29wdGlvbnMpIGZvciBjaGFuZ2luZyBob3cgbWF0Y2hlcyBhcmUgcGVyZm9ybWVkXG4gKiBAcmV0dXJuIHtPYmplY3R9IFJldHVybnMgYW4gb2JqZWN0IHdpdGggb25seSBrZXlzIHRoYXQgbWF0Y2ggdGhlIGdpdmVuIHBhdHRlcm5zLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5taWNyb21hdGNoLm1hdGNoS2V5cyA9IChvYmosIHBhdHRlcm5zLCBvcHRpb25zKSA9PiB7XG4gIGlmICghdXRpbHMuaXNPYmplY3Qob2JqKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIHRoZSBmaXJzdCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QnKTtcbiAgfVxuICBsZXQga2V5cyA9IG1pY3JvbWF0Y2goT2JqZWN0LmtleXMob2JqKSwgcGF0dGVybnMsIG9wdGlvbnMpO1xuICBsZXQgcmVzID0ge307XG4gIGZvciAobGV0IGtleSBvZiBrZXlzKSByZXNba2V5XSA9IG9ialtrZXldO1xuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgc29tZSBvZiB0aGUgc3RyaW5ncyBpbiB0aGUgZ2l2ZW4gYGxpc3RgIG1hdGNoIGFueSBvZiB0aGUgZ2l2ZW4gZ2xvYiBgcGF0dGVybnNgLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBtbSA9IHJlcXVpcmUoJ21pY3JvbWF0Y2gnKTtcbiAqIC8vIG1tLnNvbWUobGlzdCwgcGF0dGVybnNbLCBvcHRpb25zXSk7XG4gKlxuICogY29uc29sZS5sb2cobW0uc29tZShbJ2Zvby5qcycsICdiYXIuanMnXSwgWycqLmpzJywgJyFmb28uanMnXSkpO1xuICogLy8gdHJ1ZVxuICogY29uc29sZS5sb2cobW0uc29tZShbJ2Zvby5qcyddLCBbJyouanMnLCAnIWZvby5qcyddKSk7XG4gKiAvLyBmYWxzZVxuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gYGxpc3RgIFRoZSBzdHJpbmcgb3IgYXJyYXkgb2Ygc3RyaW5ncyB0byB0ZXN0LiBSZXR1cm5zIGFzIHNvb24gYXMgdGhlIGZpcnN0IG1hdGNoIGlzIGZvdW5kLlxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IGBwYXR0ZXJuc2AgT25lIG9yIG1vcmUgZ2xvYiBwYXR0ZXJucyB0byB1c2UgZm9yIG1hdGNoaW5nLlxuICogQHBhcmFtIHtPYmplY3R9IGBvcHRpb25zYCBTZWUgYXZhaWxhYmxlIFtvcHRpb25zXSgjb3B0aW9ucykgZm9yIGNoYW5naW5nIGhvdyBtYXRjaGVzIGFyZSBwZXJmb3JtZWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBhbnkgYHBhdHRlcm5zYCBtYXRjaGVzIGFueSBvZiB0aGUgc3RyaW5ncyBpbiBgbGlzdGBcbiAqIEBhcGkgcHVibGljXG4gKi9cblxubWljcm9tYXRjaC5zb21lID0gKGxpc3QsIHBhdHRlcm5zLCBvcHRpb25zKSA9PiB7XG4gIGxldCBpdGVtcyA9IFtdLmNvbmNhdChsaXN0KTtcblxuICBmb3IgKGxldCBwYXR0ZXJuIG9mIFtdLmNvbmNhdChwYXR0ZXJucykpIHtcbiAgICBsZXQgaXNNYXRjaCA9IHBpY29tYXRjaChTdHJpbmcocGF0dGVybiksIG9wdGlvbnMpO1xuICAgIGlmIChpdGVtcy5zb21lKGl0ZW0gPT4gaXNNYXRjaChpdGVtKSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBldmVyeSBzdHJpbmcgaW4gdGhlIGdpdmVuIGBsaXN0YCBtYXRjaGVzXG4gKiBhbnkgb2YgdGhlIGdpdmVuIGdsb2IgYHBhdHRlcm5zYC5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgbW0gPSByZXF1aXJlKCdtaWNyb21hdGNoJyk7XG4gKiAvLyBtbS5ldmVyeShsaXN0LCBwYXR0ZXJuc1ssIG9wdGlvbnNdKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhtbS5ldmVyeSgnZm9vLmpzJywgWydmb28uanMnXSkpO1xuICogLy8gdHJ1ZVxuICogY29uc29sZS5sb2cobW0uZXZlcnkoWydmb28uanMnLCAnYmFyLmpzJ10sIFsnKi5qcyddKSk7XG4gKiAvLyB0cnVlXG4gKiBjb25zb2xlLmxvZyhtbS5ldmVyeShbJ2Zvby5qcycsICdiYXIuanMnXSwgWycqLmpzJywgJyFmb28uanMnXSkpO1xuICogLy8gZmFsc2VcbiAqIGNvbnNvbGUubG9nKG1tLmV2ZXJ5KFsnZm9vLmpzJ10sIFsnKi5qcycsICchZm9vLmpzJ10pKTtcbiAqIC8vIGZhbHNlXG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBgbGlzdGAgVGhlIHN0cmluZyBvciBhcnJheSBvZiBzdHJpbmdzIHRvIHRlc3QuXG4gKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gYHBhdHRlcm5zYCBPbmUgb3IgbW9yZSBnbG9iIHBhdHRlcm5zIHRvIHVzZSBmb3IgbWF0Y2hpbmcuXG4gKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgIFNlZSBhdmFpbGFibGUgW29wdGlvbnNdKCNvcHRpb25zKSBmb3IgY2hhbmdpbmcgaG93IG1hdGNoZXMgYXJlIHBlcmZvcm1lZFxuICogQHJldHVybiB7Qm9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIGFsbCBgcGF0dGVybnNgIG1hdGNoZXMgYWxsIG9mIHRoZSBzdHJpbmdzIGluIGBsaXN0YFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5taWNyb21hdGNoLmV2ZXJ5ID0gKGxpc3QsIHBhdHRlcm5zLCBvcHRpb25zKSA9PiB7XG4gIGxldCBpdGVtcyA9IFtdLmNvbmNhdChsaXN0KTtcblxuICBmb3IgKGxldCBwYXR0ZXJuIG9mIFtdLmNvbmNhdChwYXR0ZXJucykpIHtcbiAgICBsZXQgaXNNYXRjaCA9IHBpY29tYXRjaChTdHJpbmcocGF0dGVybiksIG9wdGlvbnMpO1xuICAgIGlmICghaXRlbXMuZXZlcnkoaXRlbSA9PiBpc01hdGNoKGl0ZW0pKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmICoqYWxsKiogb2YgdGhlIGdpdmVuIGBwYXR0ZXJuc2AgbWF0Y2hcbiAqIHRoZSBzcGVjaWZpZWQgc3RyaW5nLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBtbSA9IHJlcXVpcmUoJ21pY3JvbWF0Y2gnKTtcbiAqIC8vIG1tLmFsbChzdHJpbmcsIHBhdHRlcm5zWywgb3B0aW9uc10pO1xuICpcbiAqIGNvbnNvbGUubG9nKG1tLmFsbCgnZm9vLmpzJywgWydmb28uanMnXSkpO1xuICogLy8gdHJ1ZVxuICpcbiAqIGNvbnNvbGUubG9nKG1tLmFsbCgnZm9vLmpzJywgWycqLmpzJywgJyFmb28uanMnXSkpO1xuICogLy8gZmFsc2VcbiAqXG4gKiBjb25zb2xlLmxvZyhtbS5hbGwoJ2Zvby5qcycsIFsnKi5qcycsICdmb28uanMnXSkpO1xuICogLy8gdHJ1ZVxuICpcbiAqIGNvbnNvbGUubG9nKG1tLmFsbCgnZm9vLmpzJywgWycqLmpzJywgJ2YqJywgJypvKicsICcqby5qcyddKSk7XG4gKiAvLyB0cnVlXG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBgc3RyYCBUaGUgc3RyaW5nIHRvIHRlc3QuXG4gKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gYHBhdHRlcm5zYCBPbmUgb3IgbW9yZSBnbG9iIHBhdHRlcm5zIHRvIHVzZSBmb3IgbWF0Y2hpbmcuXG4gKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgIFNlZSBhdmFpbGFibGUgW29wdGlvbnNdKCNvcHRpb25zKSBmb3IgY2hhbmdpbmcgaG93IG1hdGNoZXMgYXJlIHBlcmZvcm1lZFxuICogQHJldHVybiB7Qm9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIGFueSBwYXR0ZXJucyBtYXRjaCBgc3RyYFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5taWNyb21hdGNoLmFsbCA9IChzdHIsIHBhdHRlcm5zLCBvcHRpb25zKSA9PiB7XG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIGEgc3RyaW5nOiBcIiR7dXRpbC5pbnNwZWN0KHN0cil9XCJgKTtcbiAgfVxuXG4gIHJldHVybiBbXS5jb25jYXQocGF0dGVybnMpLmV2ZXJ5KHAgPT4gcGljb21hdGNoKHAsIG9wdGlvbnMpKHN0cikpO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIGFycmF5IG9mIG1hdGNoZXMgY2FwdHVyZWQgYnkgYHBhdHRlcm5gIGluIGBzdHJpbmcsIG9yIGBudWxsYCBpZiB0aGUgcGF0dGVybiBkaWQgbm90IG1hdGNoLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBtbSA9IHJlcXVpcmUoJ21pY3JvbWF0Y2gnKTtcbiAqIC8vIG1tLmNhcHR1cmUocGF0dGVybiwgc3RyaW5nWywgb3B0aW9uc10pO1xuICpcbiAqIGNvbnNvbGUubG9nKG1tLmNhcHR1cmUoJ3Rlc3QvKi5qcycsICd0ZXN0L2Zvby5qcycpKTtcbiAqIC8vPT4gWydmb28nXVxuICogY29uc29sZS5sb2cobW0uY2FwdHVyZSgndGVzdC8qLmpzJywgJ2Zvby9iYXIuY3NzJykpO1xuICogLy89PiBudWxsXG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfSBgZ2xvYmAgR2xvYiBwYXR0ZXJuIHRvIHVzZSBmb3IgbWF0Y2hpbmcuXG4gKiBAcGFyYW0ge1N0cmluZ30gYGlucHV0YCBTdHJpbmcgdG8gbWF0Y2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBgb3B0aW9uc2AgU2VlIGF2YWlsYWJsZSBbb3B0aW9uc10oI29wdGlvbnMpIGZvciBjaGFuZ2luZyBob3cgbWF0Y2hlcyBhcmUgcGVyZm9ybWVkXG4gKiBAcmV0dXJuIHtBcnJheXxudWxsfSBSZXR1cm5zIGFuIGFycmF5IG9mIGNhcHR1cmVzIGlmIHRoZSBpbnB1dCBtYXRjaGVzIHRoZSBnbG9iIHBhdHRlcm4sIG90aGVyd2lzZSBgbnVsbGAuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1pY3JvbWF0Y2guY2FwdHVyZSA9IChnbG9iLCBpbnB1dCwgb3B0aW9ucykgPT4ge1xuICBsZXQgcG9zaXggPSB1dGlscy5pc1dpbmRvd3Mob3B0aW9ucyk7XG4gIGxldCByZWdleCA9IHBpY29tYXRjaC5tYWtlUmUoU3RyaW5nKGdsb2IpLCB7IC4uLm9wdGlvbnMsIGNhcHR1cmU6IHRydWUgfSk7XG4gIGxldCBtYXRjaCA9IHJlZ2V4LmV4ZWMocG9zaXggPyB1dGlscy50b1Bvc2l4U2xhc2hlcyhpbnB1dCkgOiBpbnB1dCk7XG5cbiAgaWYgKG1hdGNoKSB7XG4gICAgcmV0dXJuIG1hdGNoLnNsaWNlKDEpLm1hcCh2ID0+IHYgPT09IHZvaWQgMCA/ICcnIDogdik7XG4gIH1cbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgcmVndWxhciBleHByZXNzaW9uIGZyb20gdGhlIGdpdmVuIGdsb2IgYHBhdHRlcm5gLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBtbSA9IHJlcXVpcmUoJ21pY3JvbWF0Y2gnKTtcbiAqIC8vIG1tLm1ha2VSZShwYXR0ZXJuWywgb3B0aW9uc10pO1xuICpcbiAqIGNvbnNvbGUubG9nKG1tLm1ha2VSZSgnKi5qcycpKTtcbiAqIC8vPT4gL14oPzooXFwuW1xcXFxcXC9dKT8oPyFcXC4pKD89LilbXlxcL10qP1xcLmpzKSQvXG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfSBgcGF0dGVybmAgQSBnbG9iIHBhdHRlcm4gdG8gY29udmVydCB0byByZWdleC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBgb3B0aW9uc2BcbiAqIEByZXR1cm4ge1JlZ0V4cH0gUmV0dXJucyBhIHJlZ2V4IGNyZWF0ZWQgZnJvbSB0aGUgZ2l2ZW4gcGF0dGVybi5cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubWljcm9tYXRjaC5tYWtlUmUgPSAoLi4uYXJncykgPT4gcGljb21hdGNoLm1ha2VSZSguLi5hcmdzKTtcblxuLyoqXG4gKiBTY2FuIGEgZ2xvYiBwYXR0ZXJuIHRvIHNlcGFyYXRlIHRoZSBwYXR0ZXJuIGludG8gc2VnbWVudHMuIFVzZWRcbiAqIGJ5IHRoZSBbc3BsaXRdKCNzcGxpdCkgbWV0aG9kLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBtbSA9IHJlcXVpcmUoJ21pY3JvbWF0Y2gnKTtcbiAqIGNvbnN0IHN0YXRlID0gbW0uc2NhbihwYXR0ZXJuWywgb3B0aW9uc10pO1xuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ30gYHBhdHRlcm5gXG4gKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgXG4gKiBAcmV0dXJuIHtPYmplY3R9IFJldHVybnMgYW4gb2JqZWN0IHdpdGhcbiAqIEBhcGkgcHVibGljXG4gKi9cblxubWljcm9tYXRjaC5zY2FuID0gKC4uLmFyZ3MpID0+IHBpY29tYXRjaC5zY2FuKC4uLmFyZ3MpO1xuXG4vKipcbiAqIFBhcnNlIGEgZ2xvYiBwYXR0ZXJuIHRvIGNyZWF0ZSB0aGUgc291cmNlIHN0cmluZyBmb3IgYSByZWd1bGFyXG4gKiBleHByZXNzaW9uLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBtbSA9IHJlcXVpcmUoJ21pY3JvbWF0Y2gnKTtcbiAqIGNvbnN0IHN0YXRlID0gbW0ucGFyc2UocGF0dGVyblssIG9wdGlvbnNdKTtcbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd9IGBnbG9iYFxuICogQHBhcmFtIHtPYmplY3R9IGBvcHRpb25zYFxuICogQHJldHVybiB7T2JqZWN0fSBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIHVzZWZ1bCBwcm9wZXJ0aWVzIGFuZCBvdXRwdXQgdG8gYmUgdXNlZCBhcyByZWdleCBzb3VyY2Ugc3RyaW5nLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5taWNyb21hdGNoLnBhcnNlID0gKHBhdHRlcm5zLCBvcHRpb25zKSA9PiB7XG4gIGxldCByZXMgPSBbXTtcbiAgZm9yIChsZXQgcGF0dGVybiBvZiBbXS5jb25jYXQocGF0dGVybnMgfHwgW10pKSB7XG4gICAgZm9yIChsZXQgc3RyIG9mIGJyYWNlcyhTdHJpbmcocGF0dGVybiksIG9wdGlvbnMpKSB7XG4gICAgICByZXMucHVzaChwaWNvbWF0Y2gucGFyc2Uoc3RyLCBvcHRpb25zKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFByb2Nlc3MgdGhlIGdpdmVuIGJyYWNlIGBwYXR0ZXJuYC5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgeyBicmFjZXMgfSA9IHJlcXVpcmUoJ21pY3JvbWF0Y2gnKTtcbiAqIGNvbnNvbGUubG9nKGJyYWNlcygnZm9vL3thLGIsY30vYmFyJykpO1xuICogLy89PiBbICdmb28vKGF8YnxjKS9iYXInIF1cbiAqXG4gKiBjb25zb2xlLmxvZyhicmFjZXMoJ2Zvby97YSxiLGN9L2JhcicsIHsgZXhwYW5kOiB0cnVlIH0pKTtcbiAqIC8vPT4gWyAnZm9vL2EvYmFyJywgJ2Zvby9iL2JhcicsICdmb28vYy9iYXInIF1cbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd9IGBwYXR0ZXJuYCBTdHJpbmcgd2l0aCBicmFjZSBwYXR0ZXJuIHRvIHByb2Nlc3MuXG4gKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgIEFueSBbb3B0aW9uc10oI29wdGlvbnMpIHRvIGNoYW5nZSBob3cgZXhwYW5zaW9uIGlzIHBlcmZvcm1lZC4gU2VlIHRoZSBbYnJhY2VzXVtdIGxpYnJhcnkgZm9yIGFsbCBhdmFpbGFibGUgb3B0aW9ucy5cbiAqIEByZXR1cm4ge0FycmF5fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5taWNyb21hdGNoLmJyYWNlcyA9IChwYXR0ZXJuLCBvcHRpb25zKSA9PiB7XG4gIGlmICh0eXBlb2YgcGF0dGVybiAhPT0gJ3N0cmluZycpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGEgc3RyaW5nJyk7XG4gIGlmICgob3B0aW9ucyAmJiBvcHRpb25zLm5vYnJhY2UgPT09IHRydWUpIHx8ICEvXFx7LipcXH0vLnRlc3QocGF0dGVybikpIHtcbiAgICByZXR1cm4gW3BhdHRlcm5dO1xuICB9XG4gIHJldHVybiBicmFjZXMocGF0dGVybiwgb3B0aW9ucyk7XG59O1xuXG4vKipcbiAqIEV4cGFuZCBicmFjZXNcbiAqL1xuXG5taWNyb21hdGNoLmJyYWNlRXhwYW5kID0gKHBhdHRlcm4sIG9wdGlvbnMpID0+IHtcbiAgaWYgKHR5cGVvZiBwYXR0ZXJuICE9PSAnc3RyaW5nJykgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBzdHJpbmcnKTtcbiAgcmV0dXJuIG1pY3JvbWF0Y2guYnJhY2VzKHBhdHRlcm4sIHsgLi4ub3B0aW9ucywgZXhwYW5kOiB0cnVlIH0pO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgbWljcm9tYXRjaFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gbWljcm9tYXRjaDtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVtb3ZlRHVwbGljYXRlU2xhc2hlcyA9IGV4cG9ydHMubWF0Y2hBbnkgPSBleHBvcnRzLmNvbnZlcnRQYXR0ZXJuc1RvUmUgPSBleHBvcnRzLm1ha2VSZSA9IGV4cG9ydHMuZ2V0UGF0dGVyblBhcnRzID0gZXhwb3J0cy5leHBhbmRCcmFjZUV4cGFuc2lvbiA9IGV4cG9ydHMuZXhwYW5kUGF0dGVybnNXaXRoQnJhY2VFeHBhbnNpb24gPSBleHBvcnRzLmlzQWZmZWN0RGVwdGhPZlJlYWRpbmdQYXR0ZXJuID0gZXhwb3J0cy5lbmRzV2l0aFNsYXNoR2xvYlN0YXIgPSBleHBvcnRzLmhhc0dsb2JTdGFyID0gZXhwb3J0cy5nZXRCYXNlRGlyZWN0b3J5ID0gZXhwb3J0cy5pc1BhdHRlcm5SZWxhdGVkVG9QYXJlbnREaXJlY3RvcnkgPSBleHBvcnRzLmdldFBhdHRlcm5zT3V0c2lkZUN1cnJlbnREaXJlY3RvcnkgPSBleHBvcnRzLmdldFBhdHRlcm5zSW5zaWRlQ3VycmVudERpcmVjdG9yeSA9IGV4cG9ydHMuZ2V0UG9zaXRpdmVQYXR0ZXJucyA9IGV4cG9ydHMuZ2V0TmVnYXRpdmVQYXR0ZXJucyA9IGV4cG9ydHMuaXNQb3NpdGl2ZVBhdHRlcm4gPSBleHBvcnRzLmlzTmVnYXRpdmVQYXR0ZXJuID0gZXhwb3J0cy5jb252ZXJ0VG9OZWdhdGl2ZVBhdHRlcm4gPSBleHBvcnRzLmNvbnZlcnRUb1Bvc2l0aXZlUGF0dGVybiA9IGV4cG9ydHMuaXNEeW5hbWljUGF0dGVybiA9IGV4cG9ydHMuaXNTdGF0aWNQYXR0ZXJuID0gdm9pZCAwO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuY29uc3QgZ2xvYlBhcmVudCA9IHJlcXVpcmUoXCJnbG9iLXBhcmVudFwiKTtcbmNvbnN0IG1pY3JvbWF0Y2ggPSByZXF1aXJlKFwibWljcm9tYXRjaFwiKTtcbmNvbnN0IEdMT0JTVEFSID0gJyoqJztcbmNvbnN0IEVTQ0FQRV9TWU1CT0wgPSAnXFxcXCc7XG5jb25zdCBDT01NT05fR0xPQl9TWU1CT0xTX1JFID0gL1sqP118XiEvO1xuY29uc3QgUkVHRVhfQ0hBUkFDVEVSX0NMQVNTX1NZTUJPTFNfUkUgPSAvXFxbW15bXSpdLztcbmNvbnN0IFJFR0VYX0dST1VQX1NZTUJPTFNfUkUgPSAvKD86XnxbXiEqKz9AXSlcXChbXihdKlxcfFtefF0qXFwpLztcbmNvbnN0IEdMT0JfRVhURU5TSU9OX1NZTUJPTFNfUkUgPSAvWyEqKz9AXVxcKFteKF0qXFwpLztcbmNvbnN0IEJSQUNFX0VYUEFOU0lPTl9TRVBBUkFUT1JTX1JFID0gLyx8XFwuXFwuLztcbi8qKlxuICogTWF0Y2hlcyBhIHNlcXVlbmNlIG9mIHR3byBvciBtb3JlIGNvbnNlY3V0aXZlIHNsYXNoZXMsIGV4Y2x1ZGluZyB0aGUgZmlyc3QgdHdvIHNsYXNoZXMgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgc3RyaW5nLlxuICogVGhlIGxhdHRlciBpcyBkdWUgdG8gdGhlIHByZXNlbmNlIG9mIHRoZSBkZXZpY2UgcGF0aCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBVTkMgcGF0aC5cbiAqL1xuY29uc3QgRE9VQkxFX1NMQVNIX1JFID0gLyg/IV4pXFwvezIsfS9nO1xuZnVuY3Rpb24gaXNTdGF0aWNQYXR0ZXJuKHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiAhaXNEeW5hbWljUGF0dGVybihwYXR0ZXJuLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuaXNTdGF0aWNQYXR0ZXJuID0gaXNTdGF0aWNQYXR0ZXJuO1xuZnVuY3Rpb24gaXNEeW5hbWljUGF0dGVybihwYXR0ZXJuLCBvcHRpb25zID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBBIHNwZWNpYWwgY2FzZSB3aXRoIGFuIGVtcHR5IHN0cmluZyBpcyBuZWNlc3NhcnkgZm9yIG1hdGNoaW5nIHBhdHRlcm5zIHRoYXQgc3RhcnQgd2l0aCBhIGZvcndhcmQgc2xhc2guXG4gICAgICogQW4gZW1wdHkgc3RyaW5nIGNhbm5vdCBiZSBhIGR5bmFtaWMgcGF0dGVybi5cbiAgICAgKiBGb3IgZXhhbXBsZSwgdGhlIHBhdHRlcm4gYC9saWIvKmAgd2lsbCBiZSBzcHJlYWQgaW50byBwYXJ0czogJycsICdsaWInLCAnKicuXG4gICAgICovXG4gICAgaWYgKHBhdHRlcm4gPT09ICcnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogV2hlbiB0aGUgYGNhc2VTZW5zaXRpdmVNYXRjaGAgb3B0aW9uIGlzIGRpc2FibGVkLCBhbGwgcGF0dGVybnMgbXVzdCBiZSBtYXJrZWQgYXMgZHluYW1pYywgYmVjYXVzZSB3ZSBjYW5ub3QgY2hlY2tcbiAgICAgKiBmaWxlcGF0aCBkaXJlY3RseSAod2l0aG91dCByZWFkIGRpcmVjdG9yeSkuXG4gICAgICovXG4gICAgaWYgKG9wdGlvbnMuY2FzZVNlbnNpdGl2ZU1hdGNoID09PSBmYWxzZSB8fCBwYXR0ZXJuLmluY2x1ZGVzKEVTQ0FQRV9TWU1CT0wpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoQ09NTU9OX0dMT0JfU1lNQk9MU19SRS50ZXN0KHBhdHRlcm4pIHx8IFJFR0VYX0NIQVJBQ1RFUl9DTEFTU19TWU1CT0xTX1JFLnRlc3QocGF0dGVybikgfHwgUkVHRVhfR1JPVVBfU1lNQk9MU19SRS50ZXN0KHBhdHRlcm4pKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5leHRnbG9iICE9PSBmYWxzZSAmJiBHTE9CX0VYVEVOU0lPTl9TWU1CT0xTX1JFLnRlc3QocGF0dGVybikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmJyYWNlRXhwYW5zaW9uICE9PSBmYWxzZSAmJiBoYXNCcmFjZUV4cGFuc2lvbihwYXR0ZXJuKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5pc0R5bmFtaWNQYXR0ZXJuID0gaXNEeW5hbWljUGF0dGVybjtcbmZ1bmN0aW9uIGhhc0JyYWNlRXhwYW5zaW9uKHBhdHRlcm4pIHtcbiAgICBjb25zdCBvcGVuaW5nQnJhY2VJbmRleCA9IHBhdHRlcm4uaW5kZXhPZigneycpO1xuICAgIGlmIChvcGVuaW5nQnJhY2VJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBjbG9zaW5nQnJhY2VJbmRleCA9IHBhdHRlcm4uaW5kZXhPZignfScsIG9wZW5pbmdCcmFjZUluZGV4ICsgMSk7XG4gICAgaWYgKGNsb3NpbmdCcmFjZUluZGV4ID09PSAtMSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGJyYWNlQ29udGVudCA9IHBhdHRlcm4uc2xpY2Uob3BlbmluZ0JyYWNlSW5kZXgsIGNsb3NpbmdCcmFjZUluZGV4KTtcbiAgICByZXR1cm4gQlJBQ0VfRVhQQU5TSU9OX1NFUEFSQVRPUlNfUkUudGVzdChicmFjZUNvbnRlbnQpO1xufVxuZnVuY3Rpb24gY29udmVydFRvUG9zaXRpdmVQYXR0ZXJuKHBhdHRlcm4pIHtcbiAgICByZXR1cm4gaXNOZWdhdGl2ZVBhdHRlcm4ocGF0dGVybikgPyBwYXR0ZXJuLnNsaWNlKDEpIDogcGF0dGVybjtcbn1cbmV4cG9ydHMuY29udmVydFRvUG9zaXRpdmVQYXR0ZXJuID0gY29udmVydFRvUG9zaXRpdmVQYXR0ZXJuO1xuZnVuY3Rpb24gY29udmVydFRvTmVnYXRpdmVQYXR0ZXJuKHBhdHRlcm4pIHtcbiAgICByZXR1cm4gJyEnICsgcGF0dGVybjtcbn1cbmV4cG9ydHMuY29udmVydFRvTmVnYXRpdmVQYXR0ZXJuID0gY29udmVydFRvTmVnYXRpdmVQYXR0ZXJuO1xuZnVuY3Rpb24gaXNOZWdhdGl2ZVBhdHRlcm4ocGF0dGVybikge1xuICAgIHJldHVybiBwYXR0ZXJuLnN0YXJ0c1dpdGgoJyEnKSAmJiBwYXR0ZXJuWzFdICE9PSAnKCc7XG59XG5leHBvcnRzLmlzTmVnYXRpdmVQYXR0ZXJuID0gaXNOZWdhdGl2ZVBhdHRlcm47XG5mdW5jdGlvbiBpc1Bvc2l0aXZlUGF0dGVybihwYXR0ZXJuKSB7XG4gICAgcmV0dXJuICFpc05lZ2F0aXZlUGF0dGVybihwYXR0ZXJuKTtcbn1cbmV4cG9ydHMuaXNQb3NpdGl2ZVBhdHRlcm4gPSBpc1Bvc2l0aXZlUGF0dGVybjtcbmZ1bmN0aW9uIGdldE5lZ2F0aXZlUGF0dGVybnMocGF0dGVybnMpIHtcbiAgICByZXR1cm4gcGF0dGVybnMuZmlsdGVyKGlzTmVnYXRpdmVQYXR0ZXJuKTtcbn1cbmV4cG9ydHMuZ2V0TmVnYXRpdmVQYXR0ZXJucyA9IGdldE5lZ2F0aXZlUGF0dGVybnM7XG5mdW5jdGlvbiBnZXRQb3NpdGl2ZVBhdHRlcm5zKHBhdHRlcm5zKSB7XG4gICAgcmV0dXJuIHBhdHRlcm5zLmZpbHRlcihpc1Bvc2l0aXZlUGF0dGVybik7XG59XG5leHBvcnRzLmdldFBvc2l0aXZlUGF0dGVybnMgPSBnZXRQb3NpdGl2ZVBhdHRlcm5zO1xuLyoqXG4gKiBSZXR1cm5zIHBhdHRlcm5zIHRoYXQgY2FuIGJlIGFwcGxpZWQgaW5zaWRlIHRoZSBjdXJyZW50IGRpcmVjdG9yeS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gWycuLyonLCAnKicsICdhLyonXVxuICogZ2V0UGF0dGVybnNJbnNpZGVDdXJyZW50RGlyZWN0b3J5KFsnLi8qJywgJyonLCAnYS8qJywgJy4uLyonLCAnLi8uLi8qJ10pXG4gKi9cbmZ1bmN0aW9uIGdldFBhdHRlcm5zSW5zaWRlQ3VycmVudERpcmVjdG9yeShwYXR0ZXJucykge1xuICAgIHJldHVybiBwYXR0ZXJucy5maWx0ZXIoKHBhdHRlcm4pID0+ICFpc1BhdHRlcm5SZWxhdGVkVG9QYXJlbnREaXJlY3RvcnkocGF0dGVybikpO1xufVxuZXhwb3J0cy5nZXRQYXR0ZXJuc0luc2lkZUN1cnJlbnREaXJlY3RvcnkgPSBnZXRQYXR0ZXJuc0luc2lkZUN1cnJlbnREaXJlY3Rvcnk7XG4vKipcbiAqIFJldHVybnMgcGF0dGVybnMgdG8gYmUgZXhwYW5kZWQgcmVsYXRpdmUgdG8gKG91dHNpZGUpIHRoZSBjdXJyZW50IGRpcmVjdG9yeS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gWycuLi8qJywgJy4vLi4vKiddXG4gKiBnZXRQYXR0ZXJuc0luc2lkZUN1cnJlbnREaXJlY3RvcnkoWycuLyonLCAnKicsICdhLyonLCAnLi4vKicsICcuLy4uLyonXSlcbiAqL1xuZnVuY3Rpb24gZ2V0UGF0dGVybnNPdXRzaWRlQ3VycmVudERpcmVjdG9yeShwYXR0ZXJucykge1xuICAgIHJldHVybiBwYXR0ZXJucy5maWx0ZXIoaXNQYXR0ZXJuUmVsYXRlZFRvUGFyZW50RGlyZWN0b3J5KTtcbn1cbmV4cG9ydHMuZ2V0UGF0dGVybnNPdXRzaWRlQ3VycmVudERpcmVjdG9yeSA9IGdldFBhdHRlcm5zT3V0c2lkZUN1cnJlbnREaXJlY3Rvcnk7XG5mdW5jdGlvbiBpc1BhdHRlcm5SZWxhdGVkVG9QYXJlbnREaXJlY3RvcnkocGF0dGVybikge1xuICAgIHJldHVybiBwYXR0ZXJuLnN0YXJ0c1dpdGgoJy4uJykgfHwgcGF0dGVybi5zdGFydHNXaXRoKCcuLy4uJyk7XG59XG5leHBvcnRzLmlzUGF0dGVyblJlbGF0ZWRUb1BhcmVudERpcmVjdG9yeSA9IGlzUGF0dGVyblJlbGF0ZWRUb1BhcmVudERpcmVjdG9yeTtcbmZ1bmN0aW9uIGdldEJhc2VEaXJlY3RvcnkocGF0dGVybikge1xuICAgIHJldHVybiBnbG9iUGFyZW50KHBhdHRlcm4sIHsgZmxpcEJhY2tzbGFzaGVzOiBmYWxzZSB9KTtcbn1cbmV4cG9ydHMuZ2V0QmFzZURpcmVjdG9yeSA9IGdldEJhc2VEaXJlY3Rvcnk7XG5mdW5jdGlvbiBoYXNHbG9iU3RhcihwYXR0ZXJuKSB7XG4gICAgcmV0dXJuIHBhdHRlcm4uaW5jbHVkZXMoR0xPQlNUQVIpO1xufVxuZXhwb3J0cy5oYXNHbG9iU3RhciA9IGhhc0dsb2JTdGFyO1xuZnVuY3Rpb24gZW5kc1dpdGhTbGFzaEdsb2JTdGFyKHBhdHRlcm4pIHtcbiAgICByZXR1cm4gcGF0dGVybi5lbmRzV2l0aCgnLycgKyBHTE9CU1RBUik7XG59XG5leHBvcnRzLmVuZHNXaXRoU2xhc2hHbG9iU3RhciA9IGVuZHNXaXRoU2xhc2hHbG9iU3RhcjtcbmZ1bmN0aW9uIGlzQWZmZWN0RGVwdGhPZlJlYWRpbmdQYXR0ZXJuKHBhdHRlcm4pIHtcbiAgICBjb25zdCBiYXNlbmFtZSA9IHBhdGguYmFzZW5hbWUocGF0dGVybik7XG4gICAgcmV0dXJuIGVuZHNXaXRoU2xhc2hHbG9iU3RhcihwYXR0ZXJuKSB8fCBpc1N0YXRpY1BhdHRlcm4oYmFzZW5hbWUpO1xufVxuZXhwb3J0cy5pc0FmZmVjdERlcHRoT2ZSZWFkaW5nUGF0dGVybiA9IGlzQWZmZWN0RGVwdGhPZlJlYWRpbmdQYXR0ZXJuO1xuZnVuY3Rpb24gZXhwYW5kUGF0dGVybnNXaXRoQnJhY2VFeHBhbnNpb24ocGF0dGVybnMpIHtcbiAgICByZXR1cm4gcGF0dGVybnMucmVkdWNlKChjb2xsZWN0aW9uLCBwYXR0ZXJuKSA9PiB7XG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uLmNvbmNhdChleHBhbmRCcmFjZUV4cGFuc2lvbihwYXR0ZXJuKSk7XG4gICAgfSwgW10pO1xufVxuZXhwb3J0cy5leHBhbmRQYXR0ZXJuc1dpdGhCcmFjZUV4cGFuc2lvbiA9IGV4cGFuZFBhdHRlcm5zV2l0aEJyYWNlRXhwYW5zaW9uO1xuZnVuY3Rpb24gZXhwYW5kQnJhY2VFeHBhbnNpb24ocGF0dGVybikge1xuICAgIGNvbnN0IHBhdHRlcm5zID0gbWljcm9tYXRjaC5icmFjZXMocGF0dGVybiwgeyBleHBhbmQ6IHRydWUsIG5vZHVwZXM6IHRydWUgfSk7XG4gICAgLyoqXG4gICAgICogU29ydCB0aGUgcGF0dGVybnMgYnkgbGVuZ3RoIHNvIHRoYXQgdGhlIHNhbWUgZGVwdGggcGF0dGVybnMgYXJlIHByb2Nlc3NlZCBzaWRlIGJ5IHNpZGUuXG4gICAgICogYGEve2IsfS97Yyx9LypgIFx1MjAxMyBgWydhLy8vKicsICdhL2IvLyonLCAnYS8vYy8qJywgJ2EvYi9jLyonXWBcbiAgICAgKi9cbiAgICBwYXR0ZXJucy5zb3J0KChhLCBiKSA9PiBhLmxlbmd0aCAtIGIubGVuZ3RoKTtcbiAgICAvKipcbiAgICAgKiBNaWNyb21hdGNoIGNhbiByZXR1cm4gYW4gZW1wdHkgc3RyaW5nIGluIHRoZSBjYXNlIG9mIHBhdHRlcm5zIGxpa2UgYHthLH1gLlxuICAgICAqL1xuICAgIHJldHVybiBwYXR0ZXJucy5maWx0ZXIoKHBhdHRlcm4pID0+IHBhdHRlcm4gIT09ICcnKTtcbn1cbmV4cG9ydHMuZXhwYW5kQnJhY2VFeHBhbnNpb24gPSBleHBhbmRCcmFjZUV4cGFuc2lvbjtcbmZ1bmN0aW9uIGdldFBhdHRlcm5QYXJ0cyhwYXR0ZXJuLCBvcHRpb25zKSB7XG4gICAgbGV0IHsgcGFydHMgfSA9IG1pY3JvbWF0Y2guc2NhbihwYXR0ZXJuLCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpLCB7IHBhcnRzOiB0cnVlIH0pKTtcbiAgICAvKipcbiAgICAgKiBUaGUgc2NhbiBtZXRob2QgcmV0dXJucyBhbiBlbXB0eSBhcnJheSBpbiBzb21lIGNhc2VzLlxuICAgICAqIFNlZSBtaWNyb21hdGNoL3BpY29tYXRjaCM1OCBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAqL1xuICAgIGlmIChwYXJ0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcGFydHMgPSBbcGF0dGVybl07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBzY2FuIG1ldGhvZCBkb2VzIG5vdCByZXR1cm4gYW4gZW1wdHkgcGFydCBmb3IgdGhlIHBhdHRlcm4gd2l0aCBhIGZvcndhcmQgc2xhc2guXG4gICAgICogVGhpcyBpcyBhbm90aGVyIHBhcnQgb2YgbWljcm9tYXRjaC9waWNvbWF0Y2gjNTguXG4gICAgICovXG4gICAgaWYgKHBhcnRzWzBdLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnNsaWNlKDEpO1xuICAgICAgICBwYXJ0cy51bnNoaWZ0KCcnKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnRzO1xufVxuZXhwb3J0cy5nZXRQYXR0ZXJuUGFydHMgPSBnZXRQYXR0ZXJuUGFydHM7XG5mdW5jdGlvbiBtYWtlUmUocGF0dGVybiwgb3B0aW9ucykge1xuICAgIHJldHVybiBtaWNyb21hdGNoLm1ha2VSZShwYXR0ZXJuLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWFrZVJlID0gbWFrZVJlO1xuZnVuY3Rpb24gY29udmVydFBhdHRlcm5zVG9SZShwYXR0ZXJucywgb3B0aW9ucykge1xuICAgIHJldHVybiBwYXR0ZXJucy5tYXAoKHBhdHRlcm4pID0+IG1ha2VSZShwYXR0ZXJuLCBvcHRpb25zKSk7XG59XG5leHBvcnRzLmNvbnZlcnRQYXR0ZXJuc1RvUmUgPSBjb252ZXJ0UGF0dGVybnNUb1JlO1xuZnVuY3Rpb24gbWF0Y2hBbnkoZW50cnksIHBhdHRlcm5zUmUpIHtcbiAgICByZXR1cm4gcGF0dGVybnNSZS5zb21lKChwYXR0ZXJuUmUpID0+IHBhdHRlcm5SZS50ZXN0KGVudHJ5KSk7XG59XG5leHBvcnRzLm1hdGNoQW55ID0gbWF0Y2hBbnk7XG4vKipcbiAqIFRoaXMgcGFja2FnZSBvbmx5IHdvcmtzIHdpdGggZm9yd2FyZCBzbGFzaGVzIGFzIGEgcGF0aCBzZXBhcmF0b3IuXG4gKiBCZWNhdXNlIG9mIHRoaXMsIHdlIGNhbm5vdCB1c2UgdGhlIHN0YW5kYXJkIGBwYXRoLm5vcm1hbGl6ZWAgbWV0aG9kLCBiZWNhdXNlIG9uIFdpbmRvd3MgcGxhdGZvcm0gaXQgd2lsbCB1c2Ugb2YgYmFja3NsYXNoZXMuXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUR1cGxpY2F0ZVNsYXNoZXMocGF0dGVybikge1xuICAgIHJldHVybiBwYXR0ZXJuLnJlcGxhY2UoRE9VQkxFX1NMQVNIX1JFLCAnLycpO1xufVxuZXhwb3J0cy5yZW1vdmVEdXBsaWNhdGVTbGFzaGVzID0gcmVtb3ZlRHVwbGljYXRlU2xhc2hlcztcbiIsICIndXNlIHN0cmljdCdcbi8qXG4gKiBtZXJnZTJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS90ZWFtYml0aW9uL21lcmdlMlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDIwIFRlYW1iaXRpb25cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqL1xuY29uc3QgU3RyZWFtID0gcmVxdWlyZSgnc3RyZWFtJylcbmNvbnN0IFBhc3NUaHJvdWdoID0gU3RyZWFtLlBhc3NUaHJvdWdoXG5jb25zdCBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lcmdlMlxuXG5mdW5jdGlvbiBtZXJnZTIgKCkge1xuICBjb25zdCBzdHJlYW1zUXVldWUgPSBbXVxuICBjb25zdCBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gIGxldCBtZXJnaW5nID0gZmFsc2VcbiAgbGV0IG9wdGlvbnMgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cblxuICBpZiAob3B0aW9ucyAmJiAhQXJyYXkuaXNBcnJheShvcHRpb25zKSAmJiBvcHRpb25zLnBpcGUgPT0gbnVsbCkge1xuICAgIGFyZ3MucG9wKClcbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zID0ge31cbiAgfVxuXG4gIGNvbnN0IGRvRW5kID0gb3B0aW9ucy5lbmQgIT09IGZhbHNlXG4gIGNvbnN0IGRvUGlwZUVycm9yID0gb3B0aW9ucy5waXBlRXJyb3IgPT09IHRydWVcbiAgaWYgKG9wdGlvbnMub2JqZWN0TW9kZSA9PSBudWxsKSB7XG4gICAgb3B0aW9ucy5vYmplY3RNb2RlID0gdHJ1ZVxuICB9XG4gIGlmIChvcHRpb25zLmhpZ2hXYXRlck1hcmsgPT0gbnVsbCkge1xuICAgIG9wdGlvbnMuaGlnaFdhdGVyTWFyayA9IDY0ICogMTAyNFxuICB9XG4gIGNvbnN0IG1lcmdlZFN0cmVhbSA9IFBhc3NUaHJvdWdoKG9wdGlvbnMpXG5cbiAgZnVuY3Rpb24gYWRkU3RyZWFtICgpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBzdHJlYW1zUXVldWUucHVzaChwYXVzZVN0cmVhbXMoYXJndW1lbnRzW2ldLCBvcHRpb25zKSlcbiAgICB9XG4gICAgbWVyZ2VTdHJlYW0oKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBmdW5jdGlvbiBtZXJnZVN0cmVhbSAoKSB7XG4gICAgaWYgKG1lcmdpbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBtZXJnaW5nID0gdHJ1ZVxuXG4gICAgbGV0IHN0cmVhbXMgPSBzdHJlYW1zUXVldWUuc2hpZnQoKVxuICAgIGlmICghc3RyZWFtcykge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhlbmRTdHJlYW0pXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHN0cmVhbXMpKSB7XG4gICAgICBzdHJlYW1zID0gW3N0cmVhbXNdXG4gICAgfVxuXG4gICAgbGV0IHBpcGVzQ291bnQgPSBzdHJlYW1zLmxlbmd0aCArIDFcblxuICAgIGZ1bmN0aW9uIG5leHQgKCkge1xuICAgICAgaWYgKC0tcGlwZXNDb3VudCA+IDApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBtZXJnaW5nID0gZmFsc2VcbiAgICAgIG1lcmdlU3RyZWFtKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwaXBlIChzdHJlYW0pIHtcbiAgICAgIGZ1bmN0aW9uIG9uZW5kICgpIHtcbiAgICAgICAgc3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdtZXJnZTJVbnBpcGVFbmQnLCBvbmVuZClcbiAgICAgICAgc3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdlbmQnLCBvbmVuZClcbiAgICAgICAgaWYgKGRvUGlwZUVycm9yKSB7XG4gICAgICAgICAgc3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIG9uZXJyb3IpXG4gICAgICAgIH1cbiAgICAgICAgbmV4dCgpXG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBvbmVycm9yIChlcnIpIHtcbiAgICAgICAgbWVyZ2VkU3RyZWFtLmVtaXQoJ2Vycm9yJywgZXJyKVxuICAgICAgfVxuICAgICAgLy8gc2tpcCBlbmRlZCBzdHJlYW1cbiAgICAgIGlmIChzdHJlYW0uX3JlYWRhYmxlU3RhdGUuZW5kRW1pdHRlZCkge1xuICAgICAgICByZXR1cm4gbmV4dCgpXG4gICAgICB9XG5cbiAgICAgIHN0cmVhbS5vbignbWVyZ2UyVW5waXBlRW5kJywgb25lbmQpXG4gICAgICBzdHJlYW0ub24oJ2VuZCcsIG9uZW5kKVxuXG4gICAgICBpZiAoZG9QaXBlRXJyb3IpIHtcbiAgICAgICAgc3RyZWFtLm9uKCdlcnJvcicsIG9uZXJyb3IpXG4gICAgICB9XG5cbiAgICAgIHN0cmVhbS5waXBlKG1lcmdlZFN0cmVhbSwgeyBlbmQ6IGZhbHNlIH0pXG4gICAgICAvLyBjb21wYXRpYmxlIGZvciBvbGQgc3RyZWFtXG4gICAgICBzdHJlYW0ucmVzdW1lKClcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0cmVhbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHBpcGUoc3RyZWFtc1tpXSlcbiAgICB9XG5cbiAgICBuZXh0KClcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuZFN0cmVhbSAoKSB7XG4gICAgbWVyZ2luZyA9IGZhbHNlXG4gICAgLy8gZW1pdCAncXVldWVEcmFpbicgd2hlbiBhbGwgc3RyZWFtcyBtZXJnZWQuXG4gICAgbWVyZ2VkU3RyZWFtLmVtaXQoJ3F1ZXVlRHJhaW4nKVxuICAgIGlmIChkb0VuZCkge1xuICAgICAgbWVyZ2VkU3RyZWFtLmVuZCgpXG4gICAgfVxuICB9XG5cbiAgbWVyZ2VkU3RyZWFtLnNldE1heExpc3RlbmVycygwKVxuICBtZXJnZWRTdHJlYW0uYWRkID0gYWRkU3RyZWFtXG4gIG1lcmdlZFN0cmVhbS5vbigndW5waXBlJywgZnVuY3Rpb24gKHN0cmVhbSkge1xuICAgIHN0cmVhbS5lbWl0KCdtZXJnZTJVbnBpcGVFbmQnKVxuICB9KVxuXG4gIGlmIChhcmdzLmxlbmd0aCkge1xuICAgIGFkZFN0cmVhbS5hcHBseShudWxsLCBhcmdzKVxuICB9XG4gIHJldHVybiBtZXJnZWRTdHJlYW1cbn1cblxuLy8gY2hlY2sgYW5kIHBhdXNlIHN0cmVhbXMgZm9yIHBpcGUuXG5mdW5jdGlvbiBwYXVzZVN0cmVhbXMgKHN0cmVhbXMsIG9wdGlvbnMpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHN0cmVhbXMpKSB7XG4gICAgLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG9sZC1zdHlsZSBzdHJlYW1zXG4gICAgaWYgKCFzdHJlYW1zLl9yZWFkYWJsZVN0YXRlICYmIHN0cmVhbXMucGlwZSkge1xuICAgICAgc3RyZWFtcyA9IHN0cmVhbXMucGlwZShQYXNzVGhyb3VnaChvcHRpb25zKSlcbiAgICB9XG4gICAgaWYgKCFzdHJlYW1zLl9yZWFkYWJsZVN0YXRlIHx8ICFzdHJlYW1zLnBhdXNlIHx8ICFzdHJlYW1zLnBpcGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignT25seSByZWFkYWJsZSBzdHJlYW0gY2FuIGJlIG1lcmdlZC4nKVxuICAgIH1cbiAgICBzdHJlYW1zLnBhdXNlKClcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gc3RyZWFtcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgc3RyZWFtc1tpXSA9IHBhdXNlU3RyZWFtcyhzdHJlYW1zW2ldLCBvcHRpb25zKVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3RyZWFtc1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5tZXJnZSA9IHZvaWQgMDtcbmNvbnN0IG1lcmdlMiA9IHJlcXVpcmUoXCJtZXJnZTJcIik7XG5mdW5jdGlvbiBtZXJnZShzdHJlYW1zKSB7XG4gICAgY29uc3QgbWVyZ2VkU3RyZWFtID0gbWVyZ2UyKHN0cmVhbXMpO1xuICAgIHN0cmVhbXMuZm9yRWFjaCgoc3RyZWFtKSA9PiB7XG4gICAgICAgIHN0cmVhbS5vbmNlKCdlcnJvcicsIChlcnJvcikgPT4gbWVyZ2VkU3RyZWFtLmVtaXQoJ2Vycm9yJywgZXJyb3IpKTtcbiAgICB9KTtcbiAgICBtZXJnZWRTdHJlYW0ub25jZSgnY2xvc2UnLCAoKSA9PiBwcm9wYWdhdGVDbG9zZUV2ZW50VG9Tb3VyY2VzKHN0cmVhbXMpKTtcbiAgICBtZXJnZWRTdHJlYW0ub25jZSgnZW5kJywgKCkgPT4gcHJvcGFnYXRlQ2xvc2VFdmVudFRvU291cmNlcyhzdHJlYW1zKSk7XG4gICAgcmV0dXJuIG1lcmdlZFN0cmVhbTtcbn1cbmV4cG9ydHMubWVyZ2UgPSBtZXJnZTtcbmZ1bmN0aW9uIHByb3BhZ2F0ZUNsb3NlRXZlbnRUb1NvdXJjZXMoc3RyZWFtcykge1xuICAgIHN0cmVhbXMuZm9yRWFjaCgoc3RyZWFtKSA9PiBzdHJlYW0uZW1pdCgnY2xvc2UnKSk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmlzRW1wdHkgPSBleHBvcnRzLmlzU3RyaW5nID0gdm9pZCAwO1xuZnVuY3Rpb24gaXNTdHJpbmcoaW5wdXQpIHtcbiAgICByZXR1cm4gdHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcbmZ1bmN0aW9uIGlzRW1wdHkoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQgPT09ICcnO1xufVxuZXhwb3J0cy5pc0VtcHR5ID0gaXNFbXB0eTtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3RyaW5nID0gZXhwb3J0cy5zdHJlYW0gPSBleHBvcnRzLnBhdHRlcm4gPSBleHBvcnRzLnBhdGggPSBleHBvcnRzLmZzID0gZXhwb3J0cy5lcnJubyA9IGV4cG9ydHMuYXJyYXkgPSB2b2lkIDA7XG5jb25zdCBhcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5XCIpO1xuZXhwb3J0cy5hcnJheSA9IGFycmF5O1xuY29uc3QgZXJybm8gPSByZXF1aXJlKFwiLi9lcnJub1wiKTtcbmV4cG9ydHMuZXJybm8gPSBlcnJubztcbmNvbnN0IGZzID0gcmVxdWlyZShcIi4vZnNcIik7XG5leHBvcnRzLmZzID0gZnM7XG5jb25zdCBwYXRoID0gcmVxdWlyZShcIi4vcGF0aFwiKTtcbmV4cG9ydHMucGF0aCA9IHBhdGg7XG5jb25zdCBwYXR0ZXJuID0gcmVxdWlyZShcIi4vcGF0dGVyblwiKTtcbmV4cG9ydHMucGF0dGVybiA9IHBhdHRlcm47XG5jb25zdCBzdHJlYW0gPSByZXF1aXJlKFwiLi9zdHJlYW1cIik7XG5leHBvcnRzLnN0cmVhbSA9IHN0cmVhbTtcbmNvbnN0IHN0cmluZyA9IHJlcXVpcmUoXCIuL3N0cmluZ1wiKTtcbmV4cG9ydHMuc3RyaW5nID0gc3RyaW5nO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jb252ZXJ0UGF0dGVybkdyb3VwVG9UYXNrID0gZXhwb3J0cy5jb252ZXJ0UGF0dGVybkdyb3Vwc1RvVGFza3MgPSBleHBvcnRzLmdyb3VwUGF0dGVybnNCeUJhc2VEaXJlY3RvcnkgPSBleHBvcnRzLmdldE5lZ2F0aXZlUGF0dGVybnNBc1Bvc2l0aXZlID0gZXhwb3J0cy5nZXRQb3NpdGl2ZVBhdHRlcm5zID0gZXhwb3J0cy5jb252ZXJ0UGF0dGVybnNUb1Rhc2tzID0gZXhwb3J0cy5nZW5lcmF0ZSA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuZnVuY3Rpb24gZ2VuZXJhdGUoaW5wdXQsIHNldHRpbmdzKSB7XG4gICAgY29uc3QgcGF0dGVybnMgPSBwcm9jZXNzUGF0dGVybnMoaW5wdXQsIHNldHRpbmdzKTtcbiAgICBjb25zdCBpZ25vcmUgPSBwcm9jZXNzUGF0dGVybnMoc2V0dGluZ3MuaWdub3JlLCBzZXR0aW5ncyk7XG4gICAgY29uc3QgcG9zaXRpdmVQYXR0ZXJucyA9IGdldFBvc2l0aXZlUGF0dGVybnMocGF0dGVybnMpO1xuICAgIGNvbnN0IG5lZ2F0aXZlUGF0dGVybnMgPSBnZXROZWdhdGl2ZVBhdHRlcm5zQXNQb3NpdGl2ZShwYXR0ZXJucywgaWdub3JlKTtcbiAgICBjb25zdCBzdGF0aWNQYXR0ZXJucyA9IHBvc2l0aXZlUGF0dGVybnMuZmlsdGVyKChwYXR0ZXJuKSA9PiB1dGlscy5wYXR0ZXJuLmlzU3RhdGljUGF0dGVybihwYXR0ZXJuLCBzZXR0aW5ncykpO1xuICAgIGNvbnN0IGR5bmFtaWNQYXR0ZXJucyA9IHBvc2l0aXZlUGF0dGVybnMuZmlsdGVyKChwYXR0ZXJuKSA9PiB1dGlscy5wYXR0ZXJuLmlzRHluYW1pY1BhdHRlcm4ocGF0dGVybiwgc2V0dGluZ3MpKTtcbiAgICBjb25zdCBzdGF0aWNUYXNrcyA9IGNvbnZlcnRQYXR0ZXJuc1RvVGFza3Moc3RhdGljUGF0dGVybnMsIG5lZ2F0aXZlUGF0dGVybnMsIC8qIGR5bmFtaWMgKi8gZmFsc2UpO1xuICAgIGNvbnN0IGR5bmFtaWNUYXNrcyA9IGNvbnZlcnRQYXR0ZXJuc1RvVGFza3MoZHluYW1pY1BhdHRlcm5zLCBuZWdhdGl2ZVBhdHRlcm5zLCAvKiBkeW5hbWljICovIHRydWUpO1xuICAgIHJldHVybiBzdGF0aWNUYXNrcy5jb25jYXQoZHluYW1pY1Rhc2tzKTtcbn1cbmV4cG9ydHMuZ2VuZXJhdGUgPSBnZW5lcmF0ZTtcbmZ1bmN0aW9uIHByb2Nlc3NQYXR0ZXJucyhpbnB1dCwgc2V0dGluZ3MpIHtcbiAgICBsZXQgcGF0dGVybnMgPSBpbnB1dDtcbiAgICAvKipcbiAgICAgKiBUaGUgb3JpZ2luYWwgcGF0dGVybiBsaWtlIGB7LCosKiosYS8qfWAgY2FuIGxlYWQgdG8gcHJvYmxlbXMgY2hlY2tpbmcgdGhlIGRlcHRoIHdoZW4gbWF0Y2hpbmcgZW50cnlcbiAgICAgKiBhbmQgc29tZSBwcm9ibGVtcyB3aXRoIHRoZSBtaWNyb21hdGNoIHBhY2thZ2UgKHNlZSBmYXN0LWdsb2IgaXNzdWVzOiAjMzY1LCAjMzk0KS5cbiAgICAgKlxuICAgICAqIFRvIHNvbHZlIHRoaXMgcHJvYmxlbSwgd2UgZXhwYW5kIGFsbCBwYXR0ZXJucyBjb250YWluaW5nIGJyYWNlIGV4cGFuc2lvbi4gVGhpcyBjYW4gbGVhZCB0byBhIHNsaWdodCBzbG93ZG93blxuICAgICAqIGluIG1hdGNoaW5nIGluIHRoZSBjYXNlIG9mIGEgbGFyZ2Ugc2V0IG9mIHBhdHRlcm5zIGFmdGVyIGV4cGFuc2lvbi5cbiAgICAgKi9cbiAgICBpZiAoc2V0dGluZ3MuYnJhY2VFeHBhbnNpb24pIHtcbiAgICAgICAgcGF0dGVybnMgPSB1dGlscy5wYXR0ZXJuLmV4cGFuZFBhdHRlcm5zV2l0aEJyYWNlRXhwYW5zaW9uKHBhdHRlcm5zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSWYgdGhlIGBiYXNlTmFtZU1hdGNoYCBvcHRpb24gaXMgZW5hYmxlZCwgd2UgbXVzdCBhZGQgZ2xvYnN0YXIgdG8gcGF0dGVybnMsIHNvIHRoYXQgdGhleSBjYW4gYmUgdXNlZFxuICAgICAqIGF0IGFueSBuZXN0aW5nIGxldmVsLlxuICAgICAqXG4gICAgICogV2UgZG8gdGhpcyBoZXJlLCBiZWNhdXNlIG90aGVyd2lzZSB3ZSBoYXZlIHRvIGNvbXBsaWNhdGUgdGhlIGZpbHRlcmluZyBsb2dpYy4gRm9yIGV4YW1wbGUsIHdlIG5lZWQgdG8gY2hhbmdlXG4gICAgICogdGhlIHBhdHRlcm4gaW4gdGhlIGZpbHRlciBiZWZvcmUgY3JlYXRpbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uIFRoZXJlIGlzIG5vIG5lZWQgdG8gY2hhbmdlIHRoZSBwYXR0ZXJuc1xuICAgICAqIGluIHRoZSBhcHBsaWNhdGlvbi4gT25seSBvbiB0aGUgaW5wdXQuXG4gICAgICovXG4gICAgaWYgKHNldHRpbmdzLmJhc2VOYW1lTWF0Y2gpIHtcbiAgICAgICAgcGF0dGVybnMgPSBwYXR0ZXJucy5tYXAoKHBhdHRlcm4pID0+IHBhdHRlcm4uaW5jbHVkZXMoJy8nKSA/IHBhdHRlcm4gOiBgKiovJHtwYXR0ZXJufWApO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBhbHNvIHJlbW92ZXMgZHVwbGljYXRlIHNsYXNoZXMgdGhhdCBtYXkgaGF2ZSBiZWVuIGluIHRoZSBwYXR0ZXJuIG9yIGZvcm1lZCBhcyBhIHJlc3VsdCBvZiBleHBhbnNpb24uXG4gICAgICovXG4gICAgcmV0dXJuIHBhdHRlcm5zLm1hcCgocGF0dGVybikgPT4gdXRpbHMucGF0dGVybi5yZW1vdmVEdXBsaWNhdGVTbGFzaGVzKHBhdHRlcm4pKTtcbn1cbi8qKlxuICogUmV0dXJucyB0YXNrcyBncm91cGVkIGJ5IGJhc2ljIHBhdHRlcm4gZGlyZWN0b3JpZXMuXG4gKlxuICogUGF0dGVybnMgdGhhdCBjYW4gYmUgZm91bmQgaW5zaWRlIChgLi9gKSBhbmQgb3V0c2lkZSAoYC4uL2ApIHRoZSBjdXJyZW50IGRpcmVjdG9yeSBhcmUgaGFuZGxlZCBzZXBhcmF0ZWx5LlxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBkaXJlY3RvcnkgdHJhdmVyc2FsIHN0YXJ0cyBhdCB0aGUgYmFzZSBkaXJlY3RvcnkgYW5kIGdvZXMgZGVlcGVyLlxuICovXG5mdW5jdGlvbiBjb252ZXJ0UGF0dGVybnNUb1Rhc2tzKHBvc2l0aXZlLCBuZWdhdGl2ZSwgZHluYW1pYykge1xuICAgIGNvbnN0IHRhc2tzID0gW107XG4gICAgY29uc3QgcGF0dGVybnNPdXRzaWRlQ3VycmVudERpcmVjdG9yeSA9IHV0aWxzLnBhdHRlcm4uZ2V0UGF0dGVybnNPdXRzaWRlQ3VycmVudERpcmVjdG9yeShwb3NpdGl2ZSk7XG4gICAgY29uc3QgcGF0dGVybnNJbnNpZGVDdXJyZW50RGlyZWN0b3J5ID0gdXRpbHMucGF0dGVybi5nZXRQYXR0ZXJuc0luc2lkZUN1cnJlbnREaXJlY3RvcnkocG9zaXRpdmUpO1xuICAgIGNvbnN0IG91dHNpZGVDdXJyZW50RGlyZWN0b3J5R3JvdXAgPSBncm91cFBhdHRlcm5zQnlCYXNlRGlyZWN0b3J5KHBhdHRlcm5zT3V0c2lkZUN1cnJlbnREaXJlY3RvcnkpO1xuICAgIGNvbnN0IGluc2lkZUN1cnJlbnREaXJlY3RvcnlHcm91cCA9IGdyb3VwUGF0dGVybnNCeUJhc2VEaXJlY3RvcnkocGF0dGVybnNJbnNpZGVDdXJyZW50RGlyZWN0b3J5KTtcbiAgICB0YXNrcy5wdXNoKC4uLmNvbnZlcnRQYXR0ZXJuR3JvdXBzVG9UYXNrcyhvdXRzaWRlQ3VycmVudERpcmVjdG9yeUdyb3VwLCBuZWdhdGl2ZSwgZHluYW1pYykpO1xuICAgIC8qXG4gICAgICogRm9yIHRoZSBzYWtlIG9mIHJlZHVjaW5nIGZ1dHVyZSBhY2Nlc3NlcyB0byB0aGUgZmlsZSBzeXN0ZW0sIHdlIG1lcmdlIGFsbCB0YXNrcyB3aXRoaW4gdGhlIGN1cnJlbnQgZGlyZWN0b3J5XG4gICAgICogaW50byBhIGdsb2JhbCB0YXNrLCBpZiBhdCBsZWFzdCBvbmUgcGF0dGVybiByZWZlcnMgdG8gdGhlIHJvb3QgKGAuYCkuIEluIHRoaXMgY2FzZSwgdGhlIGdsb2JhbCB0YXNrIGNvdmVycyB0aGUgcmVzdC5cbiAgICAgKi9cbiAgICBpZiAoJy4nIGluIGluc2lkZUN1cnJlbnREaXJlY3RvcnlHcm91cCkge1xuICAgICAgICB0YXNrcy5wdXNoKGNvbnZlcnRQYXR0ZXJuR3JvdXBUb1Rhc2soJy4nLCBwYXR0ZXJuc0luc2lkZUN1cnJlbnREaXJlY3RvcnksIG5lZ2F0aXZlLCBkeW5hbWljKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0YXNrcy5wdXNoKC4uLmNvbnZlcnRQYXR0ZXJuR3JvdXBzVG9UYXNrcyhpbnNpZGVDdXJyZW50RGlyZWN0b3J5R3JvdXAsIG5lZ2F0aXZlLCBkeW5hbWljKSk7XG4gICAgfVxuICAgIHJldHVybiB0YXNrcztcbn1cbmV4cG9ydHMuY29udmVydFBhdHRlcm5zVG9UYXNrcyA9IGNvbnZlcnRQYXR0ZXJuc1RvVGFza3M7XG5mdW5jdGlvbiBnZXRQb3NpdGl2ZVBhdHRlcm5zKHBhdHRlcm5zKSB7XG4gICAgcmV0dXJuIHV0aWxzLnBhdHRlcm4uZ2V0UG9zaXRpdmVQYXR0ZXJucyhwYXR0ZXJucyk7XG59XG5leHBvcnRzLmdldFBvc2l0aXZlUGF0dGVybnMgPSBnZXRQb3NpdGl2ZVBhdHRlcm5zO1xuZnVuY3Rpb24gZ2V0TmVnYXRpdmVQYXR0ZXJuc0FzUG9zaXRpdmUocGF0dGVybnMsIGlnbm9yZSkge1xuICAgIGNvbnN0IG5lZ2F0aXZlID0gdXRpbHMucGF0dGVybi5nZXROZWdhdGl2ZVBhdHRlcm5zKHBhdHRlcm5zKS5jb25jYXQoaWdub3JlKTtcbiAgICBjb25zdCBwb3NpdGl2ZSA9IG5lZ2F0aXZlLm1hcCh1dGlscy5wYXR0ZXJuLmNvbnZlcnRUb1Bvc2l0aXZlUGF0dGVybik7XG4gICAgcmV0dXJuIHBvc2l0aXZlO1xufVxuZXhwb3J0cy5nZXROZWdhdGl2ZVBhdHRlcm5zQXNQb3NpdGl2ZSA9IGdldE5lZ2F0aXZlUGF0dGVybnNBc1Bvc2l0aXZlO1xuZnVuY3Rpb24gZ3JvdXBQYXR0ZXJuc0J5QmFzZURpcmVjdG9yeShwYXR0ZXJucykge1xuICAgIGNvbnN0IGdyb3VwID0ge307XG4gICAgcmV0dXJuIHBhdHRlcm5zLnJlZHVjZSgoY29sbGVjdGlvbiwgcGF0dGVybikgPT4ge1xuICAgICAgICBjb25zdCBiYXNlID0gdXRpbHMucGF0dGVybi5nZXRCYXNlRGlyZWN0b3J5KHBhdHRlcm4pO1xuICAgICAgICBpZiAoYmFzZSBpbiBjb2xsZWN0aW9uKSB7XG4gICAgICAgICAgICBjb2xsZWN0aW9uW2Jhc2VdLnB1c2gocGF0dGVybik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb2xsZWN0aW9uW2Jhc2VdID0gW3BhdHRlcm5dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICAgIH0sIGdyb3VwKTtcbn1cbmV4cG9ydHMuZ3JvdXBQYXR0ZXJuc0J5QmFzZURpcmVjdG9yeSA9IGdyb3VwUGF0dGVybnNCeUJhc2VEaXJlY3Rvcnk7XG5mdW5jdGlvbiBjb252ZXJ0UGF0dGVybkdyb3Vwc1RvVGFza3MocG9zaXRpdmUsIG5lZ2F0aXZlLCBkeW5hbWljKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHBvc2l0aXZlKS5tYXAoKGJhc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbnZlcnRQYXR0ZXJuR3JvdXBUb1Rhc2soYmFzZSwgcG9zaXRpdmVbYmFzZV0sIG5lZ2F0aXZlLCBkeW5hbWljKTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuY29udmVydFBhdHRlcm5Hcm91cHNUb1Rhc2tzID0gY29udmVydFBhdHRlcm5Hcm91cHNUb1Rhc2tzO1xuZnVuY3Rpb24gY29udmVydFBhdHRlcm5Hcm91cFRvVGFzayhiYXNlLCBwb3NpdGl2ZSwgbmVnYXRpdmUsIGR5bmFtaWMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBkeW5hbWljLFxuICAgICAgICBwb3NpdGl2ZSxcbiAgICAgICAgbmVnYXRpdmUsXG4gICAgICAgIGJhc2UsXG4gICAgICAgIHBhdHRlcm5zOiBbXS5jb25jYXQocG9zaXRpdmUsIG5lZ2F0aXZlLm1hcCh1dGlscy5wYXR0ZXJuLmNvbnZlcnRUb05lZ2F0aXZlUGF0dGVybikpXG4gICAgfTtcbn1cbmV4cG9ydHMuY29udmVydFBhdHRlcm5Hcm91cFRvVGFzayA9IGNvbnZlcnRQYXR0ZXJuR3JvdXBUb1Rhc2s7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlYWQgPSB2b2lkIDA7XG5mdW5jdGlvbiByZWFkKHBhdGgsIHNldHRpbmdzLCBjYWxsYmFjaykge1xuICAgIHNldHRpbmdzLmZzLmxzdGF0KHBhdGgsIChsc3RhdEVycm9yLCBsc3RhdCkgPT4ge1xuICAgICAgICBpZiAobHN0YXRFcnJvciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY2FsbEZhaWx1cmVDYWxsYmFjayhjYWxsYmFjaywgbHN0YXRFcnJvcik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFsc3RhdC5pc1N5bWJvbGljTGluaygpIHx8ICFzZXR0aW5ncy5mb2xsb3dTeW1ib2xpY0xpbmspIHtcbiAgICAgICAgICAgIGNhbGxTdWNjZXNzQ2FsbGJhY2soY2FsbGJhY2ssIGxzdGF0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXR0aW5ncy5mcy5zdGF0KHBhdGgsIChzdGF0RXJyb3IsIHN0YXQpID0+IHtcbiAgICAgICAgICAgIGlmIChzdGF0RXJyb3IgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3MudGhyb3dFcnJvck9uQnJva2VuU3ltYm9saWNMaW5rKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxGYWlsdXJlQ2FsbGJhY2soY2FsbGJhY2ssIHN0YXRFcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FsbFN1Y2Nlc3NDYWxsYmFjayhjYWxsYmFjaywgbHN0YXQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy5tYXJrU3ltYm9saWNMaW5rKSB7XG4gICAgICAgICAgICAgICAgc3RhdC5pc1N5bWJvbGljTGluayA9ICgpID0+IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWxsU3VjY2Vzc0NhbGxiYWNrKGNhbGxiYWNrLCBzdGF0KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnRzLnJlYWQgPSByZWFkO1xuZnVuY3Rpb24gY2FsbEZhaWx1cmVDYWxsYmFjayhjYWxsYmFjaywgZXJyb3IpIHtcbiAgICBjYWxsYmFjayhlcnJvcik7XG59XG5mdW5jdGlvbiBjYWxsU3VjY2Vzc0NhbGxiYWNrKGNhbGxiYWNrLCByZXN1bHQpIHtcbiAgICBjYWxsYmFjayhudWxsLCByZXN1bHQpO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZWFkID0gdm9pZCAwO1xuZnVuY3Rpb24gcmVhZChwYXRoLCBzZXR0aW5ncykge1xuICAgIGNvbnN0IGxzdGF0ID0gc2V0dGluZ3MuZnMubHN0YXRTeW5jKHBhdGgpO1xuICAgIGlmICghbHN0YXQuaXNTeW1ib2xpY0xpbmsoKSB8fCAhc2V0dGluZ3MuZm9sbG93U3ltYm9saWNMaW5rKSB7XG4gICAgICAgIHJldHVybiBsc3RhdDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc3RhdCA9IHNldHRpbmdzLmZzLnN0YXRTeW5jKHBhdGgpO1xuICAgICAgICBpZiAoc2V0dGluZ3MubWFya1N5bWJvbGljTGluaykge1xuICAgICAgICAgICAgc3RhdC5pc1N5bWJvbGljTGluayA9ICgpID0+IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0YXQ7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoIXNldHRpbmdzLnRocm93RXJyb3JPbkJyb2tlblN5bWJvbGljTGluaykge1xuICAgICAgICAgICAgcmV0dXJuIGxzdGF0O1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbn1cbmV4cG9ydHMucmVhZCA9IHJlYWQ7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZUZpbGVTeXN0ZW1BZGFwdGVyID0gZXhwb3J0cy5GSUxFX1NZU1RFTV9BREFQVEVSID0gdm9pZCAwO1xuY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XG5leHBvcnRzLkZJTEVfU1lTVEVNX0FEQVBURVIgPSB7XG4gICAgbHN0YXQ6IGZzLmxzdGF0LFxuICAgIHN0YXQ6IGZzLnN0YXQsXG4gICAgbHN0YXRTeW5jOiBmcy5sc3RhdFN5bmMsXG4gICAgc3RhdFN5bmM6IGZzLnN0YXRTeW5jXG59O1xuZnVuY3Rpb24gY3JlYXRlRmlsZVN5c3RlbUFkYXB0ZXIoZnNNZXRob2RzKSB7XG4gICAgaWYgKGZzTWV0aG9kcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBleHBvcnRzLkZJTEVfU1lTVEVNX0FEQVBURVI7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGV4cG9ydHMuRklMRV9TWVNURU1fQURBUFRFUiksIGZzTWV0aG9kcyk7XG59XG5leHBvcnRzLmNyZWF0ZUZpbGVTeXN0ZW1BZGFwdGVyID0gY3JlYXRlRmlsZVN5c3RlbUFkYXB0ZXI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBmcyA9IHJlcXVpcmUoXCIuL2FkYXB0ZXJzL2ZzXCIpO1xuY2xhc3MgU2V0dGluZ3Mge1xuICAgIGNvbnN0cnVjdG9yKF9vcHRpb25zID0ge30pIHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IF9vcHRpb25zO1xuICAgICAgICB0aGlzLmZvbGxvd1N5bWJvbGljTGluayA9IHRoaXMuX2dldFZhbHVlKHRoaXMuX29wdGlvbnMuZm9sbG93U3ltYm9saWNMaW5rLCB0cnVlKTtcbiAgICAgICAgdGhpcy5mcyA9IGZzLmNyZWF0ZUZpbGVTeXN0ZW1BZGFwdGVyKHRoaXMuX29wdGlvbnMuZnMpO1xuICAgICAgICB0aGlzLm1hcmtTeW1ib2xpY0xpbmsgPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLl9vcHRpb25zLm1hcmtTeW1ib2xpY0xpbmssIGZhbHNlKTtcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yT25Ccm9rZW5TeW1ib2xpY0xpbmsgPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLl9vcHRpb25zLnRocm93RXJyb3JPbkJyb2tlblN5bWJvbGljTGluaywgdHJ1ZSk7XG4gICAgfVxuICAgIF9nZXRWYWx1ZShvcHRpb24sIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBvcHRpb24gIT09IG51bGwgJiYgb3B0aW9uICE9PSB2b2lkIDAgPyBvcHRpb24gOiB2YWx1ZTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBTZXR0aW5ncztcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3RhdFN5bmMgPSBleHBvcnRzLnN0YXQgPSBleHBvcnRzLlNldHRpbmdzID0gdm9pZCAwO1xuY29uc3QgYXN5bmMgPSByZXF1aXJlKFwiLi9wcm92aWRlcnMvYXN5bmNcIik7XG5jb25zdCBzeW5jID0gcmVxdWlyZShcIi4vcHJvdmlkZXJzL3N5bmNcIik7XG5jb25zdCBzZXR0aW5nc18xID0gcmVxdWlyZShcIi4vc2V0dGluZ3NcIik7XG5leHBvcnRzLlNldHRpbmdzID0gc2V0dGluZ3NfMS5kZWZhdWx0O1xuZnVuY3Rpb24gc3RhdChwYXRoLCBvcHRpb25zT3JTZXR0aW5nc09yQ2FsbGJhY2ssIGNhbGxiYWNrKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zT3JTZXR0aW5nc09yQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgYXN5bmMucmVhZChwYXRoLCBnZXRTZXR0aW5ncygpLCBvcHRpb25zT3JTZXR0aW5nc09yQ2FsbGJhY2spO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGFzeW5jLnJlYWQocGF0aCwgZ2V0U2V0dGluZ3Mob3B0aW9uc09yU2V0dGluZ3NPckNhbGxiYWNrKSwgY2FsbGJhY2spO1xufVxuZXhwb3J0cy5zdGF0ID0gc3RhdDtcbmZ1bmN0aW9uIHN0YXRTeW5jKHBhdGgsIG9wdGlvbnNPclNldHRpbmdzKSB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSBnZXRTZXR0aW5ncyhvcHRpb25zT3JTZXR0aW5ncyk7XG4gICAgcmV0dXJuIHN5bmMucmVhZChwYXRoLCBzZXR0aW5ncyk7XG59XG5leHBvcnRzLnN0YXRTeW5jID0gc3RhdFN5bmM7XG5mdW5jdGlvbiBnZXRTZXR0aW5ncyhzZXR0aW5nc09yT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHNldHRpbmdzT3JPcHRpb25zIGluc3RhbmNlb2Ygc2V0dGluZ3NfMS5kZWZhdWx0KSB7XG4gICAgICAgIHJldHVybiBzZXR0aW5nc09yT3B0aW9ucztcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBzZXR0aW5nc18xLmRlZmF1bHQoc2V0dGluZ3NPck9wdGlvbnMpO1xufVxuIiwgIi8qISBxdWV1ZS1taWNyb3Rhc2suIE1JVCBMaWNlbnNlLiBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmcvb3BlbnNvdXJjZT4gKi9cbmxldCBwcm9taXNlXG5cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHF1ZXVlTWljcm90YXNrID09PSAnZnVuY3Rpb24nXG4gID8gcXVldWVNaWNyb3Rhc2suYmluZCh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbClcbiAgLy8gcmV1c2UgcmVzb2x2ZWQgcHJvbWlzZSwgYW5kIGFsbG9jYXRlIGl0IGxhemlseVxuICA6IGNiID0+IChwcm9taXNlIHx8IChwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkpKVxuICAgIC50aGVuKGNiKVxuICAgIC5jYXRjaChlcnIgPT4gc2V0VGltZW91dCgoKSA9PiB7IHRocm93IGVyciB9LCAwKSlcbiIsICIvKiEgcnVuLXBhcmFsbGVsLiBNSVQgTGljZW5zZS4gRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnL29wZW5zb3VyY2U+ICovXG5tb2R1bGUuZXhwb3J0cyA9IHJ1blBhcmFsbGVsXG5cbmNvbnN0IHF1ZXVlTWljcm90YXNrID0gcmVxdWlyZSgncXVldWUtbWljcm90YXNrJylcblxuZnVuY3Rpb24gcnVuUGFyYWxsZWwgKHRhc2tzLCBjYikge1xuICBsZXQgcmVzdWx0cywgcGVuZGluZywga2V5c1xuICBsZXQgaXNTeW5jID0gdHJ1ZVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHRhc2tzKSkge1xuICAgIHJlc3VsdHMgPSBbXVxuICAgIHBlbmRpbmcgPSB0YXNrcy5sZW5ndGhcbiAgfSBlbHNlIHtcbiAgICBrZXlzID0gT2JqZWN0LmtleXModGFza3MpXG4gICAgcmVzdWx0cyA9IHt9XG4gICAgcGVuZGluZyA9IGtleXMubGVuZ3RoXG4gIH1cblxuICBmdW5jdGlvbiBkb25lIChlcnIpIHtcbiAgICBmdW5jdGlvbiBlbmQgKCkge1xuICAgICAgaWYgKGNiKSBjYihlcnIsIHJlc3VsdHMpXG4gICAgICBjYiA9IG51bGxcbiAgICB9XG4gICAgaWYgKGlzU3luYykgcXVldWVNaWNyb3Rhc2soZW5kKVxuICAgIGVsc2UgZW5kKClcbiAgfVxuXG4gIGZ1bmN0aW9uIGVhY2ggKGksIGVyciwgcmVzdWx0KSB7XG4gICAgcmVzdWx0c1tpXSA9IHJlc3VsdFxuICAgIGlmICgtLXBlbmRpbmcgPT09IDAgfHwgZXJyKSB7XG4gICAgICBkb25lKGVycilcbiAgICB9XG4gIH1cblxuICBpZiAoIXBlbmRpbmcpIHtcbiAgICAvLyBlbXB0eVxuICAgIGRvbmUobnVsbClcbiAgfSBlbHNlIGlmIChrZXlzKSB7XG4gICAgLy8gb2JqZWN0XG4gICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHRhc2tzW2tleV0oZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7IGVhY2goa2V5LCBlcnIsIHJlc3VsdCkgfSlcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIC8vIGFycmF5XG4gICAgdGFza3MuZm9yRWFjaChmdW5jdGlvbiAodGFzaywgaSkge1xuICAgICAgdGFzayhmdW5jdGlvbiAoZXJyLCByZXN1bHQpIHsgZWFjaChpLCBlcnIsIHJlc3VsdCkgfSlcbiAgICB9KVxuICB9XG5cbiAgaXNTeW5jID0gZmFsc2Vcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSVNfU1VQUE9SVF9SRUFERElSX1dJVEhfRklMRV9UWVBFUyA9IHZvaWQgMDtcbmNvbnN0IE5PREVfUFJPQ0VTU19WRVJTSU9OX1BBUlRTID0gcHJvY2Vzcy52ZXJzaW9ucy5ub2RlLnNwbGl0KCcuJyk7XG5pZiAoTk9ERV9QUk9DRVNTX1ZFUlNJT05fUEFSVFNbMF0gPT09IHVuZGVmaW5lZCB8fCBOT0RFX1BST0NFU1NfVkVSU0lPTl9QQVJUU1sxXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGJlaGF2aW9yLiBUaGUgJ3Byb2Nlc3MudmVyc2lvbnMubm9kZScgdmFyaWFibGUgaGFzIGludmFsaWQgdmFsdWU6ICR7cHJvY2Vzcy52ZXJzaW9ucy5ub2RlfWApO1xufVxuY29uc3QgTUFKT1JfVkVSU0lPTiA9IE51bWJlci5wYXJzZUludChOT0RFX1BST0NFU1NfVkVSU0lPTl9QQVJUU1swXSwgMTApO1xuY29uc3QgTUlOT1JfVkVSU0lPTiA9IE51bWJlci5wYXJzZUludChOT0RFX1BST0NFU1NfVkVSU0lPTl9QQVJUU1sxXSwgMTApO1xuY29uc3QgU1VQUE9SVEVEX01BSk9SX1ZFUlNJT04gPSAxMDtcbmNvbnN0IFNVUFBPUlRFRF9NSU5PUl9WRVJTSU9OID0gMTA7XG5jb25zdCBJU19NQVRDSEVEX0JZX01BSk9SID0gTUFKT1JfVkVSU0lPTiA+IFNVUFBPUlRFRF9NQUpPUl9WRVJTSU9OO1xuY29uc3QgSVNfTUFUQ0hFRF9CWV9NQUpPUl9BTkRfTUlOT1IgPSBNQUpPUl9WRVJTSU9OID09PSBTVVBQT1JURURfTUFKT1JfVkVSU0lPTiAmJiBNSU5PUl9WRVJTSU9OID49IFNVUFBPUlRFRF9NSU5PUl9WRVJTSU9OO1xuLyoqXG4gKiBJUyBgdHJ1ZWAgZm9yIE5vZGUuanMgMTAuMTAgYW5kIGdyZWF0ZXIuXG4gKi9cbmV4cG9ydHMuSVNfU1VQUE9SVF9SRUFERElSX1dJVEhfRklMRV9UWVBFUyA9IElTX01BVENIRURfQllfTUFKT1IgfHwgSVNfTUFUQ0hFRF9CWV9NQUpPUl9BTkRfTUlOT1I7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZURpcmVudEZyb21TdGF0cyA9IHZvaWQgMDtcbmNsYXNzIERpcmVudEZyb21TdGF0cyB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgc3RhdHMpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pc0Jsb2NrRGV2aWNlID0gc3RhdHMuaXNCbG9ja0RldmljZS5iaW5kKHN0YXRzKTtcbiAgICAgICAgdGhpcy5pc0NoYXJhY3RlckRldmljZSA9IHN0YXRzLmlzQ2hhcmFjdGVyRGV2aWNlLmJpbmQoc3RhdHMpO1xuICAgICAgICB0aGlzLmlzRGlyZWN0b3J5ID0gc3RhdHMuaXNEaXJlY3RvcnkuYmluZChzdGF0cyk7XG4gICAgICAgIHRoaXMuaXNGSUZPID0gc3RhdHMuaXNGSUZPLmJpbmQoc3RhdHMpO1xuICAgICAgICB0aGlzLmlzRmlsZSA9IHN0YXRzLmlzRmlsZS5iaW5kKHN0YXRzKTtcbiAgICAgICAgdGhpcy5pc1NvY2tldCA9IHN0YXRzLmlzU29ja2V0LmJpbmQoc3RhdHMpO1xuICAgICAgICB0aGlzLmlzU3ltYm9saWNMaW5rID0gc3RhdHMuaXNTeW1ib2xpY0xpbmsuYmluZChzdGF0cyk7XG4gICAgfVxufVxuZnVuY3Rpb24gY3JlYXRlRGlyZW50RnJvbVN0YXRzKG5hbWUsIHN0YXRzKSB7XG4gICAgcmV0dXJuIG5ldyBEaXJlbnRGcm9tU3RhdHMobmFtZSwgc3RhdHMpO1xufVxuZXhwb3J0cy5jcmVhdGVEaXJlbnRGcm9tU3RhdHMgPSBjcmVhdGVEaXJlbnRGcm9tU3RhdHM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmZzID0gdm9pZCAwO1xuY29uc3QgZnMgPSByZXF1aXJlKFwiLi9mc1wiKTtcbmV4cG9ydHMuZnMgPSBmcztcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuam9pblBhdGhTZWdtZW50cyA9IHZvaWQgMDtcbmZ1bmN0aW9uIGpvaW5QYXRoU2VnbWVudHMoYSwgYiwgc2VwYXJhdG9yKSB7XG4gICAgLyoqXG4gICAgICogVGhlIGNvcnJlY3QgaGFuZGxpbmcgb2YgY2FzZXMgd2hlbiB0aGUgZmlyc3Qgc2VnbWVudCBpcyBhIHJvb3QgKGAvYCwgYEM6L2ApIG9yIFVOQyBwYXRoIChgLy8/L0M6L2ApLlxuICAgICAqL1xuICAgIGlmIChhLmVuZHNXaXRoKHNlcGFyYXRvcikpIHtcbiAgICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cbiAgICByZXR1cm4gYSArIHNlcGFyYXRvciArIGI7XG59XG5leHBvcnRzLmpvaW5QYXRoU2VnbWVudHMgPSBqb2luUGF0aFNlZ21lbnRzO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZWFkZGlyID0gZXhwb3J0cy5yZWFkZGlyV2l0aEZpbGVUeXBlcyA9IGV4cG9ydHMucmVhZCA9IHZvaWQgMDtcbmNvbnN0IGZzU3RhdCA9IHJlcXVpcmUoXCJAbm9kZWxpYi9mcy5zdGF0XCIpO1xuY29uc3QgcnBsID0gcmVxdWlyZShcInJ1bi1wYXJhbGxlbFwiKTtcbmNvbnN0IGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcbmNvbnN0IHV0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuZnVuY3Rpb24gcmVhZChkaXJlY3RvcnksIHNldHRpbmdzLCBjYWxsYmFjaykge1xuICAgIGlmICghc2V0dGluZ3Muc3RhdHMgJiYgY29uc3RhbnRzXzEuSVNfU1VQUE9SVF9SRUFERElSX1dJVEhfRklMRV9UWVBFUykge1xuICAgICAgICByZWFkZGlyV2l0aEZpbGVUeXBlcyhkaXJlY3RvcnksIHNldHRpbmdzLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVhZGRpcihkaXJlY3RvcnksIHNldHRpbmdzLCBjYWxsYmFjayk7XG59XG5leHBvcnRzLnJlYWQgPSByZWFkO1xuZnVuY3Rpb24gcmVhZGRpcldpdGhGaWxlVHlwZXMoZGlyZWN0b3J5LCBzZXR0aW5ncywgY2FsbGJhY2spIHtcbiAgICBzZXR0aW5ncy5mcy5yZWFkZGlyKGRpcmVjdG9yeSwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0sIChyZWFkZGlyRXJyb3IsIGRpcmVudHMpID0+IHtcbiAgICAgICAgaWYgKHJlYWRkaXJFcnJvciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY2FsbEZhaWx1cmVDYWxsYmFjayhjYWxsYmFjaywgcmVhZGRpckVycm9yKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbnRyaWVzID0gZGlyZW50cy5tYXAoKGRpcmVudCkgPT4gKHtcbiAgICAgICAgICAgIGRpcmVudCxcbiAgICAgICAgICAgIG5hbWU6IGRpcmVudC5uYW1lLFxuICAgICAgICAgICAgcGF0aDogY29tbW9uLmpvaW5QYXRoU2VnbWVudHMoZGlyZWN0b3J5LCBkaXJlbnQubmFtZSwgc2V0dGluZ3MucGF0aFNlZ21lbnRTZXBhcmF0b3IpXG4gICAgICAgIH0pKTtcbiAgICAgICAgaWYgKCFzZXR0aW5ncy5mb2xsb3dTeW1ib2xpY0xpbmtzKSB7XG4gICAgICAgICAgICBjYWxsU3VjY2Vzc0NhbGxiYWNrKGNhbGxiYWNrLCBlbnRyaWVzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0YXNrcyA9IGVudHJpZXMubWFwKChlbnRyeSkgPT4gbWFrZVJwbFRhc2tFbnRyeShlbnRyeSwgc2V0dGluZ3MpKTtcbiAgICAgICAgcnBsKHRhc2tzLCAocnBsRXJyb3IsIHJwbEVudHJpZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChycGxFcnJvciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNhbGxGYWlsdXJlQ2FsbGJhY2soY2FsbGJhY2ssIHJwbEVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWxsU3VjY2Vzc0NhbGxiYWNrKGNhbGxiYWNrLCBycGxFbnRyaWVzKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnRzLnJlYWRkaXJXaXRoRmlsZVR5cGVzID0gcmVhZGRpcldpdGhGaWxlVHlwZXM7XG5mdW5jdGlvbiBtYWtlUnBsVGFza0VudHJ5KGVudHJ5LCBzZXR0aW5ncykge1xuICAgIHJldHVybiAoZG9uZSkgPT4ge1xuICAgICAgICBpZiAoIWVudHJ5LmRpcmVudC5pc1N5bWJvbGljTGluaygpKSB7XG4gICAgICAgICAgICBkb25lKG51bGwsIGVudHJ5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXR0aW5ncy5mcy5zdGF0KGVudHJ5LnBhdGgsIChzdGF0RXJyb3IsIHN0YXRzKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhdEVycm9yICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzLnRocm93RXJyb3JPbkJyb2tlblN5bWJvbGljTGluaykge1xuICAgICAgICAgICAgICAgICAgICBkb25lKHN0YXRFcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZG9uZShudWxsLCBlbnRyeSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZW50cnkuZGlyZW50ID0gdXRpbHMuZnMuY3JlYXRlRGlyZW50RnJvbVN0YXRzKGVudHJ5Lm5hbWUsIHN0YXRzKTtcbiAgICAgICAgICAgIGRvbmUobnVsbCwgZW50cnkpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gcmVhZGRpcihkaXJlY3RvcnksIHNldHRpbmdzLCBjYWxsYmFjaykge1xuICAgIHNldHRpbmdzLmZzLnJlYWRkaXIoZGlyZWN0b3J5LCAocmVhZGRpckVycm9yLCBuYW1lcykgPT4ge1xuICAgICAgICBpZiAocmVhZGRpckVycm9yICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjYWxsRmFpbHVyZUNhbGxiYWNrKGNhbGxiYWNrLCByZWFkZGlyRXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRhc2tzID0gbmFtZXMubWFwKChuYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXRoID0gY29tbW9uLmpvaW5QYXRoU2VnbWVudHMoZGlyZWN0b3J5LCBuYW1lLCBzZXR0aW5ncy5wYXRoU2VnbWVudFNlcGFyYXRvcik7XG4gICAgICAgICAgICByZXR1cm4gKGRvbmUpID0+IHtcbiAgICAgICAgICAgICAgICBmc1N0YXQuc3RhdChwYXRoLCBzZXR0aW5ncy5mc1N0YXRTZXR0aW5ncywgKGVycm9yLCBzdGF0cykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVudHJ5ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlbnQ6IHV0aWxzLmZzLmNyZWF0ZURpcmVudEZyb21TdGF0cyhuYW1lLCBzdGF0cylcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzLnN0YXRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS5zdGF0cyA9IHN0YXRzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRvbmUobnVsbCwgZW50cnkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJwbCh0YXNrcywgKHJwbEVycm9yLCBlbnRyaWVzKSA9PiB7XG4gICAgICAgICAgICBpZiAocnBsRXJyb3IgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjYWxsRmFpbHVyZUNhbGxiYWNrKGNhbGxiYWNrLCBycGxFcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FsbFN1Y2Nlc3NDYWxsYmFjayhjYWxsYmFjaywgZW50cmllcyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0cy5yZWFkZGlyID0gcmVhZGRpcjtcbmZ1bmN0aW9uIGNhbGxGYWlsdXJlQ2FsbGJhY2soY2FsbGJhY2ssIGVycm9yKSB7XG4gICAgY2FsbGJhY2soZXJyb3IpO1xufVxuZnVuY3Rpb24gY2FsbFN1Y2Nlc3NDYWxsYmFjayhjYWxsYmFjaywgcmVzdWx0KSB7XG4gICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0KTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVhZGRpciA9IGV4cG9ydHMucmVhZGRpcldpdGhGaWxlVHlwZXMgPSBleHBvcnRzLnJlYWQgPSB2b2lkIDA7XG5jb25zdCBmc1N0YXQgPSByZXF1aXJlKFwiQG5vZGVsaWIvZnMuc3RhdFwiKTtcbmNvbnN0IGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcbmNvbnN0IHV0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuZnVuY3Rpb24gcmVhZChkaXJlY3RvcnksIHNldHRpbmdzKSB7XG4gICAgaWYgKCFzZXR0aW5ncy5zdGF0cyAmJiBjb25zdGFudHNfMS5JU19TVVBQT1JUX1JFQURESVJfV0lUSF9GSUxFX1RZUEVTKSB7XG4gICAgICAgIHJldHVybiByZWFkZGlyV2l0aEZpbGVUeXBlcyhkaXJlY3RvcnksIHNldHRpbmdzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlYWRkaXIoZGlyZWN0b3J5LCBzZXR0aW5ncyk7XG59XG5leHBvcnRzLnJlYWQgPSByZWFkO1xuZnVuY3Rpb24gcmVhZGRpcldpdGhGaWxlVHlwZXMoZGlyZWN0b3J5LCBzZXR0aW5ncykge1xuICAgIGNvbnN0IGRpcmVudHMgPSBzZXR0aW5ncy5mcy5yZWFkZGlyU3luYyhkaXJlY3RvcnksIHsgd2l0aEZpbGVUeXBlczogdHJ1ZSB9KTtcbiAgICByZXR1cm4gZGlyZW50cy5tYXAoKGRpcmVudCkgPT4ge1xuICAgICAgICBjb25zdCBlbnRyeSA9IHtcbiAgICAgICAgICAgIGRpcmVudCxcbiAgICAgICAgICAgIG5hbWU6IGRpcmVudC5uYW1lLFxuICAgICAgICAgICAgcGF0aDogY29tbW9uLmpvaW5QYXRoU2VnbWVudHMoZGlyZWN0b3J5LCBkaXJlbnQubmFtZSwgc2V0dGluZ3MucGF0aFNlZ21lbnRTZXBhcmF0b3IpXG4gICAgICAgIH07XG4gICAgICAgIGlmIChlbnRyeS5kaXJlbnQuaXNTeW1ib2xpY0xpbmsoKSAmJiBzZXR0aW5ncy5mb2xsb3dTeW1ib2xpY0xpbmtzKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRzID0gc2V0dGluZ3MuZnMuc3RhdFN5bmMoZW50cnkucGF0aCk7XG4gICAgICAgICAgICAgICAgZW50cnkuZGlyZW50ID0gdXRpbHMuZnMuY3JlYXRlRGlyZW50RnJvbVN0YXRzKGVudHJ5Lm5hbWUsIHN0YXRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy50aHJvd0Vycm9yT25Ccm9rZW5TeW1ib2xpY0xpbmspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnRyeTtcbiAgICB9KTtcbn1cbmV4cG9ydHMucmVhZGRpcldpdGhGaWxlVHlwZXMgPSByZWFkZGlyV2l0aEZpbGVUeXBlcztcbmZ1bmN0aW9uIHJlYWRkaXIoZGlyZWN0b3J5LCBzZXR0aW5ncykge1xuICAgIGNvbnN0IG5hbWVzID0gc2V0dGluZ3MuZnMucmVhZGRpclN5bmMoZGlyZWN0b3J5KTtcbiAgICByZXR1cm4gbmFtZXMubWFwKChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVudHJ5UGF0aCA9IGNvbW1vbi5qb2luUGF0aFNlZ21lbnRzKGRpcmVjdG9yeSwgbmFtZSwgc2V0dGluZ3MucGF0aFNlZ21lbnRTZXBhcmF0b3IpO1xuICAgICAgICBjb25zdCBzdGF0cyA9IGZzU3RhdC5zdGF0U3luYyhlbnRyeVBhdGgsIHNldHRpbmdzLmZzU3RhdFNldHRpbmdzKTtcbiAgICAgICAgY29uc3QgZW50cnkgPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgcGF0aDogZW50cnlQYXRoLFxuICAgICAgICAgICAgZGlyZW50OiB1dGlscy5mcy5jcmVhdGVEaXJlbnRGcm9tU3RhdHMobmFtZSwgc3RhdHMpXG4gICAgICAgIH07XG4gICAgICAgIGlmIChzZXR0aW5ncy5zdGF0cykge1xuICAgICAgICAgICAgZW50cnkuc3RhdHMgPSBzdGF0cztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgfSk7XG59XG5leHBvcnRzLnJlYWRkaXIgPSByZWFkZGlyO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGVGaWxlU3lzdGVtQWRhcHRlciA9IGV4cG9ydHMuRklMRV9TWVNURU1fQURBUFRFUiA9IHZvaWQgMDtcbmNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpO1xuZXhwb3J0cy5GSUxFX1NZU1RFTV9BREFQVEVSID0ge1xuICAgIGxzdGF0OiBmcy5sc3RhdCxcbiAgICBzdGF0OiBmcy5zdGF0LFxuICAgIGxzdGF0U3luYzogZnMubHN0YXRTeW5jLFxuICAgIHN0YXRTeW5jOiBmcy5zdGF0U3luYyxcbiAgICByZWFkZGlyOiBmcy5yZWFkZGlyLFxuICAgIHJlYWRkaXJTeW5jOiBmcy5yZWFkZGlyU3luY1xufTtcbmZ1bmN0aW9uIGNyZWF0ZUZpbGVTeXN0ZW1BZGFwdGVyKGZzTWV0aG9kcykge1xuICAgIGlmIChmc01ldGhvZHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZXhwb3J0cy5GSUxFX1NZU1RFTV9BREFQVEVSO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBleHBvcnRzLkZJTEVfU1lTVEVNX0FEQVBURVIpLCBmc01ldGhvZHMpO1xufVxuZXhwb3J0cy5jcmVhdGVGaWxlU3lzdGVtQWRhcHRlciA9IGNyZWF0ZUZpbGVTeXN0ZW1BZGFwdGVyO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuY29uc3QgZnNTdGF0ID0gcmVxdWlyZShcIkBub2RlbGliL2ZzLnN0YXRcIik7XG5jb25zdCBmcyA9IHJlcXVpcmUoXCIuL2FkYXB0ZXJzL2ZzXCIpO1xuY2xhc3MgU2V0dGluZ3Mge1xuICAgIGNvbnN0cnVjdG9yKF9vcHRpb25zID0ge30pIHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IF9vcHRpb25zO1xuICAgICAgICB0aGlzLmZvbGxvd1N5bWJvbGljTGlua3MgPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLl9vcHRpb25zLmZvbGxvd1N5bWJvbGljTGlua3MsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5mcyA9IGZzLmNyZWF0ZUZpbGVTeXN0ZW1BZGFwdGVyKHRoaXMuX29wdGlvbnMuZnMpO1xuICAgICAgICB0aGlzLnBhdGhTZWdtZW50U2VwYXJhdG9yID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy5wYXRoU2VnbWVudFNlcGFyYXRvciwgcGF0aC5zZXApO1xuICAgICAgICB0aGlzLnN0YXRzID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy5zdGF0cywgZmFsc2UpO1xuICAgICAgICB0aGlzLnRocm93RXJyb3JPbkJyb2tlblN5bWJvbGljTGluayA9IHRoaXMuX2dldFZhbHVlKHRoaXMuX29wdGlvbnMudGhyb3dFcnJvck9uQnJva2VuU3ltYm9saWNMaW5rLCB0cnVlKTtcbiAgICAgICAgdGhpcy5mc1N0YXRTZXR0aW5ncyA9IG5ldyBmc1N0YXQuU2V0dGluZ3Moe1xuICAgICAgICAgICAgZm9sbG93U3ltYm9saWNMaW5rOiB0aGlzLmZvbGxvd1N5bWJvbGljTGlua3MsXG4gICAgICAgICAgICBmczogdGhpcy5mcyxcbiAgICAgICAgICAgIHRocm93RXJyb3JPbkJyb2tlblN5bWJvbGljTGluazogdGhpcy50aHJvd0Vycm9yT25Ccm9rZW5TeW1ib2xpY0xpbmtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRWYWx1ZShvcHRpb24sIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBvcHRpb24gIT09IG51bGwgJiYgb3B0aW9uICE9PSB2b2lkIDAgPyBvcHRpb24gOiB2YWx1ZTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBTZXR0aW5ncztcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU2V0dGluZ3MgPSBleHBvcnRzLnNjYW5kaXJTeW5jID0gZXhwb3J0cy5zY2FuZGlyID0gdm9pZCAwO1xuY29uc3QgYXN5bmMgPSByZXF1aXJlKFwiLi9wcm92aWRlcnMvYXN5bmNcIik7XG5jb25zdCBzeW5jID0gcmVxdWlyZShcIi4vcHJvdmlkZXJzL3N5bmNcIik7XG5jb25zdCBzZXR0aW5nc18xID0gcmVxdWlyZShcIi4vc2V0dGluZ3NcIik7XG5leHBvcnRzLlNldHRpbmdzID0gc2V0dGluZ3NfMS5kZWZhdWx0O1xuZnVuY3Rpb24gc2NhbmRpcihwYXRoLCBvcHRpb25zT3JTZXR0aW5nc09yQ2FsbGJhY2ssIGNhbGxiYWNrKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zT3JTZXR0aW5nc09yQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgYXN5bmMucmVhZChwYXRoLCBnZXRTZXR0aW5ncygpLCBvcHRpb25zT3JTZXR0aW5nc09yQ2FsbGJhY2spO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGFzeW5jLnJlYWQocGF0aCwgZ2V0U2V0dGluZ3Mob3B0aW9uc09yU2V0dGluZ3NPckNhbGxiYWNrKSwgY2FsbGJhY2spO1xufVxuZXhwb3J0cy5zY2FuZGlyID0gc2NhbmRpcjtcbmZ1bmN0aW9uIHNjYW5kaXJTeW5jKHBhdGgsIG9wdGlvbnNPclNldHRpbmdzKSB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSBnZXRTZXR0aW5ncyhvcHRpb25zT3JTZXR0aW5ncyk7XG4gICAgcmV0dXJuIHN5bmMucmVhZChwYXRoLCBzZXR0aW5ncyk7XG59XG5leHBvcnRzLnNjYW5kaXJTeW5jID0gc2NhbmRpclN5bmM7XG5mdW5jdGlvbiBnZXRTZXR0aW5ncyhzZXR0aW5nc09yT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHNldHRpbmdzT3JPcHRpb25zIGluc3RhbmNlb2Ygc2V0dGluZ3NfMS5kZWZhdWx0KSB7XG4gICAgICAgIHJldHVybiBzZXR0aW5nc09yT3B0aW9ucztcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBzZXR0aW5nc18xLmRlZmF1bHQoc2V0dGluZ3NPck9wdGlvbnMpO1xufVxuIiwgIid1c2Ugc3RyaWN0J1xuXG5mdW5jdGlvbiByZXVzaWZ5IChDb25zdHJ1Y3Rvcikge1xuICB2YXIgaGVhZCA9IG5ldyBDb25zdHJ1Y3RvcigpXG4gIHZhciB0YWlsID0gaGVhZFxuXG4gIGZ1bmN0aW9uIGdldCAoKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBoZWFkXG5cbiAgICBpZiAoY3VycmVudC5uZXh0KSB7XG4gICAgICBoZWFkID0gY3VycmVudC5uZXh0XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWQgPSBuZXcgQ29uc3RydWN0b3IoKVxuICAgICAgdGFpbCA9IGhlYWRcbiAgICB9XG5cbiAgICBjdXJyZW50Lm5leHQgPSBudWxsXG5cbiAgICByZXR1cm4gY3VycmVudFxuICB9XG5cbiAgZnVuY3Rpb24gcmVsZWFzZSAob2JqKSB7XG4gICAgdGFpbC5uZXh0ID0gb2JqXG4gICAgdGFpbCA9IG9ialxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQ6IGdldCxcbiAgICByZWxlYXNlOiByZWxlYXNlXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZXVzaWZ5XG4iLCAiJ3VzZSBzdHJpY3QnXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXZhciAqL1xuXG52YXIgcmV1c2lmeSA9IHJlcXVpcmUoJ3JldXNpZnknKVxuXG5mdW5jdGlvbiBmYXN0cXVldWUgKGNvbnRleHQsIHdvcmtlciwgY29uY3VycmVuY3kpIHtcbiAgaWYgKHR5cGVvZiBjb250ZXh0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uY3VycmVuY3kgPSB3b3JrZXJcbiAgICB3b3JrZXIgPSBjb250ZXh0XG4gICAgY29udGV4dCA9IG51bGxcbiAgfVxuXG4gIGlmIChjb25jdXJyZW5jeSA8IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2Zhc3RxdWV1ZSBjb25jdXJyZW5jeSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAxJylcbiAgfVxuXG4gIHZhciBjYWNoZSA9IHJldXNpZnkoVGFzaylcbiAgdmFyIHF1ZXVlSGVhZCA9IG51bGxcbiAgdmFyIHF1ZXVlVGFpbCA9IG51bGxcbiAgdmFyIF9ydW5uaW5nID0gMFxuICB2YXIgZXJyb3JIYW5kbGVyID0gbnVsbFxuXG4gIHZhciBzZWxmID0ge1xuICAgIHB1c2g6IHB1c2gsXG4gICAgZHJhaW46IG5vb3AsXG4gICAgc2F0dXJhdGVkOiBub29wLFxuICAgIHBhdXNlOiBwYXVzZSxcbiAgICBwYXVzZWQ6IGZhbHNlLFxuICAgIGNvbmN1cnJlbmN5OiBjb25jdXJyZW5jeSxcbiAgICBydW5uaW5nOiBydW5uaW5nLFxuICAgIHJlc3VtZTogcmVzdW1lLFxuICAgIGlkbGU6IGlkbGUsXG4gICAgbGVuZ3RoOiBsZW5ndGgsXG4gICAgZ2V0UXVldWU6IGdldFF1ZXVlLFxuICAgIHVuc2hpZnQ6IHVuc2hpZnQsXG4gICAgZW1wdHk6IG5vb3AsXG4gICAga2lsbDoga2lsbCxcbiAgICBraWxsQW5kRHJhaW46IGtpbGxBbmREcmFpbixcbiAgICBlcnJvcjogZXJyb3JcbiAgfVxuXG4gIHJldHVybiBzZWxmXG5cbiAgZnVuY3Rpb24gcnVubmluZyAoKSB7XG4gICAgcmV0dXJuIF9ydW5uaW5nXG4gIH1cblxuICBmdW5jdGlvbiBwYXVzZSAoKSB7XG4gICAgc2VsZi5wYXVzZWQgPSB0cnVlXG4gIH1cblxuICBmdW5jdGlvbiBsZW5ndGggKCkge1xuICAgIHZhciBjdXJyZW50ID0gcXVldWVIZWFkXG4gICAgdmFyIGNvdW50ZXIgPSAwXG5cbiAgICB3aGlsZSAoY3VycmVudCkge1xuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dFxuICAgICAgY291bnRlcisrXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvdW50ZXJcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFF1ZXVlICgpIHtcbiAgICB2YXIgY3VycmVudCA9IHF1ZXVlSGVhZFxuICAgIHZhciB0YXNrcyA9IFtdXG5cbiAgICB3aGlsZSAoY3VycmVudCkge1xuICAgICAgdGFza3MucHVzaChjdXJyZW50LnZhbHVlKVxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dFxuICAgIH1cblxuICAgIHJldHVybiB0YXNrc1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzdW1lICgpIHtcbiAgICBpZiAoIXNlbGYucGF1c2VkKSByZXR1cm5cbiAgICBzZWxmLnBhdXNlZCA9IGZhbHNlXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLmNvbmN1cnJlbmN5OyBpKyspIHtcbiAgICAgIF9ydW5uaW5nKytcbiAgICAgIHJlbGVhc2UoKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlkbGUgKCkge1xuICAgIHJldHVybiBfcnVubmluZyA9PT0gMCAmJiBzZWxmLmxlbmd0aCgpID09PSAwXG4gIH1cblxuICBmdW5jdGlvbiBwdXNoICh2YWx1ZSwgZG9uZSkge1xuICAgIHZhciBjdXJyZW50ID0gY2FjaGUuZ2V0KClcblxuICAgIGN1cnJlbnQuY29udGV4dCA9IGNvbnRleHRcbiAgICBjdXJyZW50LnJlbGVhc2UgPSByZWxlYXNlXG4gICAgY3VycmVudC52YWx1ZSA9IHZhbHVlXG4gICAgY3VycmVudC5jYWxsYmFjayA9IGRvbmUgfHwgbm9vcFxuICAgIGN1cnJlbnQuZXJyb3JIYW5kbGVyID0gZXJyb3JIYW5kbGVyXG5cbiAgICBpZiAoX3J1bm5pbmcgPT09IHNlbGYuY29uY3VycmVuY3kgfHwgc2VsZi5wYXVzZWQpIHtcbiAgICAgIGlmIChxdWV1ZVRhaWwpIHtcbiAgICAgICAgcXVldWVUYWlsLm5leHQgPSBjdXJyZW50XG4gICAgICAgIHF1ZXVlVGFpbCA9IGN1cnJlbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSGVhZCA9IGN1cnJlbnRcbiAgICAgICAgcXVldWVUYWlsID0gY3VycmVudFxuICAgICAgICBzZWxmLnNhdHVyYXRlZCgpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIF9ydW5uaW5nKytcbiAgICAgIHdvcmtlci5jYWxsKGNvbnRleHQsIGN1cnJlbnQudmFsdWUsIGN1cnJlbnQud29ya2VkKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVuc2hpZnQgKHZhbHVlLCBkb25lKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBjYWNoZS5nZXQoKVxuXG4gICAgY3VycmVudC5jb250ZXh0ID0gY29udGV4dFxuICAgIGN1cnJlbnQucmVsZWFzZSA9IHJlbGVhc2VcbiAgICBjdXJyZW50LnZhbHVlID0gdmFsdWVcbiAgICBjdXJyZW50LmNhbGxiYWNrID0gZG9uZSB8fCBub29wXG5cbiAgICBpZiAoX3J1bm5pbmcgPT09IHNlbGYuY29uY3VycmVuY3kgfHwgc2VsZi5wYXVzZWQpIHtcbiAgICAgIGlmIChxdWV1ZUhlYWQpIHtcbiAgICAgICAgY3VycmVudC5uZXh0ID0gcXVldWVIZWFkXG4gICAgICAgIHF1ZXVlSGVhZCA9IGN1cnJlbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSGVhZCA9IGN1cnJlbnRcbiAgICAgICAgcXVldWVUYWlsID0gY3VycmVudFxuICAgICAgICBzZWxmLnNhdHVyYXRlZCgpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIF9ydW5uaW5nKytcbiAgICAgIHdvcmtlci5jYWxsKGNvbnRleHQsIGN1cnJlbnQudmFsdWUsIGN1cnJlbnQud29ya2VkKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbGVhc2UgKGhvbGRlcikge1xuICAgIGlmIChob2xkZXIpIHtcbiAgICAgIGNhY2hlLnJlbGVhc2UoaG9sZGVyKVxuICAgIH1cbiAgICB2YXIgbmV4dCA9IHF1ZXVlSGVhZFxuICAgIGlmIChuZXh0KSB7XG4gICAgICBpZiAoIXNlbGYucGF1c2VkKSB7XG4gICAgICAgIGlmIChxdWV1ZVRhaWwgPT09IHF1ZXVlSGVhZCkge1xuICAgICAgICAgIHF1ZXVlVGFpbCA9IG51bGxcbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUhlYWQgPSBuZXh0Lm5leHRcbiAgICAgICAgbmV4dC5uZXh0ID0gbnVsbFxuICAgICAgICB3b3JrZXIuY2FsbChjb250ZXh0LCBuZXh0LnZhbHVlLCBuZXh0LndvcmtlZClcbiAgICAgICAgaWYgKHF1ZXVlVGFpbCA9PT0gbnVsbCkge1xuICAgICAgICAgIHNlbGYuZW1wdHkoKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfcnVubmluZy0tXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgtLV9ydW5uaW5nID09PSAwKSB7XG4gICAgICBzZWxmLmRyYWluKClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBraWxsICgpIHtcbiAgICBxdWV1ZUhlYWQgPSBudWxsXG4gICAgcXVldWVUYWlsID0gbnVsbFxuICAgIHNlbGYuZHJhaW4gPSBub29wXG4gIH1cblxuICBmdW5jdGlvbiBraWxsQW5kRHJhaW4gKCkge1xuICAgIHF1ZXVlSGVhZCA9IG51bGxcbiAgICBxdWV1ZVRhaWwgPSBudWxsXG4gICAgc2VsZi5kcmFpbigpXG4gICAgc2VsZi5kcmFpbiA9IG5vb3BcbiAgfVxuXG4gIGZ1bmN0aW9uIGVycm9yIChoYW5kbGVyKSB7XG4gICAgZXJyb3JIYW5kbGVyID0gaGFuZGxlclxuICB9XG59XG5cbmZ1bmN0aW9uIG5vb3AgKCkge31cblxuZnVuY3Rpb24gVGFzayAoKSB7XG4gIHRoaXMudmFsdWUgPSBudWxsXG4gIHRoaXMuY2FsbGJhY2sgPSBub29wXG4gIHRoaXMubmV4dCA9IG51bGxcbiAgdGhpcy5yZWxlYXNlID0gbm9vcFxuICB0aGlzLmNvbnRleHQgPSBudWxsXG4gIHRoaXMuZXJyb3JIYW5kbGVyID0gbnVsbFxuXG4gIHZhciBzZWxmID0gdGhpc1xuXG4gIHRoaXMud29ya2VkID0gZnVuY3Rpb24gd29ya2VkIChlcnIsIHJlc3VsdCkge1xuICAgIHZhciBjYWxsYmFjayA9IHNlbGYuY2FsbGJhY2tcbiAgICB2YXIgZXJyb3JIYW5kbGVyID0gc2VsZi5lcnJvckhhbmRsZXJcbiAgICB2YXIgdmFsID0gc2VsZi52YWx1ZVxuICAgIHNlbGYudmFsdWUgPSBudWxsXG4gICAgc2VsZi5jYWxsYmFjayA9IG5vb3BcbiAgICBpZiAoc2VsZi5lcnJvckhhbmRsZXIpIHtcbiAgICAgIGVycm9ySGFuZGxlcihlcnIsIHZhbClcbiAgICB9XG4gICAgY2FsbGJhY2suY2FsbChzZWxmLmNvbnRleHQsIGVyciwgcmVzdWx0KVxuICAgIHNlbGYucmVsZWFzZShzZWxmKVxuICB9XG59XG5cbmZ1bmN0aW9uIHF1ZXVlQXNQcm9taXNlZCAoY29udGV4dCwgd29ya2VyLCBjb25jdXJyZW5jeSkge1xuICBpZiAodHlwZW9mIGNvbnRleHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25jdXJyZW5jeSA9IHdvcmtlclxuICAgIHdvcmtlciA9IGNvbnRleHRcbiAgICBjb250ZXh0ID0gbnVsbFxuICB9XG5cbiAgZnVuY3Rpb24gYXN5bmNXcmFwcGVyIChhcmcsIGNiKSB7XG4gICAgd29ya2VyLmNhbGwodGhpcywgYXJnKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBjYihudWxsLCByZXMpXG4gICAgICB9LCBjYilcbiAgfVxuXG4gIHZhciBxdWV1ZSA9IGZhc3RxdWV1ZShjb250ZXh0LCBhc3luY1dyYXBwZXIsIGNvbmN1cnJlbmN5KVxuXG4gIHZhciBwdXNoQ2IgPSBxdWV1ZS5wdXNoXG4gIHZhciB1bnNoaWZ0Q2IgPSBxdWV1ZS51bnNoaWZ0XG5cbiAgcXVldWUucHVzaCA9IHB1c2hcbiAgcXVldWUudW5zaGlmdCA9IHVuc2hpZnRcbiAgcXVldWUuZHJhaW5lZCA9IGRyYWluZWRcblxuICByZXR1cm4gcXVldWVcblxuICBmdW5jdGlvbiBwdXNoICh2YWx1ZSkge1xuICAgIHZhciBwID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcHVzaENiKHZhbHVlLCBmdW5jdGlvbiAoZXJyLCByZXN1bHQpIHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICAvLyBMZXQncyBmb3JrIHRoZSBwcm9taXNlIGNoYWluIHRvXG4gICAgLy8gbWFrZSB0aGUgZXJyb3IgYnViYmxlIHVwIHRvIHRoZSB1c2VyIGJ1dFxuICAgIC8vIG5vdCBsZWFkIHRvIGEgdW5oYW5kbGVkUmVqZWN0aW9uXG4gICAgcC5jYXRjaChub29wKVxuXG4gICAgcmV0dXJuIHBcbiAgfVxuXG4gIGZ1bmN0aW9uIHVuc2hpZnQgKHZhbHVlKSB7XG4gICAgdmFyIHAgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB1bnNoaWZ0Q2IodmFsdWUsIGZ1bmN0aW9uIChlcnIsIHJlc3VsdCkge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIC8vIExldCdzIGZvcmsgdGhlIHByb21pc2UgY2hhaW4gdG9cbiAgICAvLyBtYWtlIHRoZSBlcnJvciBidWJibGUgdXAgdG8gdGhlIHVzZXIgYnV0XG4gICAgLy8gbm90IGxlYWQgdG8gYSB1bmhhbmRsZWRSZWplY3Rpb25cbiAgICBwLmNhdGNoKG5vb3ApXG5cbiAgICByZXR1cm4gcFxuICB9XG5cbiAgZnVuY3Rpb24gZHJhaW5lZCAoKSB7XG4gICAgaWYgKHF1ZXVlLmlkbGUoKSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIHJlc29sdmUoKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNEcmFpbiA9IHF1ZXVlLmRyYWluXG5cbiAgICB2YXIgcCA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICBxdWV1ZS5kcmFpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcHJldmlvdXNEcmFpbigpXG4gICAgICAgIHJlc29sdmUoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gcFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZmFzdHF1ZXVlXG5tb2R1bGUuZXhwb3J0cy5wcm9taXNlID0gcXVldWVBc1Byb21pc2VkXG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmpvaW5QYXRoU2VnbWVudHMgPSBleHBvcnRzLnJlcGxhY2VQYXRoU2VnbWVudFNlcGFyYXRvciA9IGV4cG9ydHMuaXNBcHBsaWVkRmlsdGVyID0gZXhwb3J0cy5pc0ZhdGFsRXJyb3IgPSB2b2lkIDA7XG5mdW5jdGlvbiBpc0ZhdGFsRXJyb3Ioc2V0dGluZ3MsIGVycm9yKSB7XG4gICAgaWYgKHNldHRpbmdzLmVycm9yRmlsdGVyID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gIXNldHRpbmdzLmVycm9yRmlsdGVyKGVycm9yKTtcbn1cbmV4cG9ydHMuaXNGYXRhbEVycm9yID0gaXNGYXRhbEVycm9yO1xuZnVuY3Rpb24gaXNBcHBsaWVkRmlsdGVyKGZpbHRlciwgdmFsdWUpIHtcbiAgICByZXR1cm4gZmlsdGVyID09PSBudWxsIHx8IGZpbHRlcih2YWx1ZSk7XG59XG5leHBvcnRzLmlzQXBwbGllZEZpbHRlciA9IGlzQXBwbGllZEZpbHRlcjtcbmZ1bmN0aW9uIHJlcGxhY2VQYXRoU2VnbWVudFNlcGFyYXRvcihmaWxlcGF0aCwgc2VwYXJhdG9yKSB7XG4gICAgcmV0dXJuIGZpbGVwYXRoLnNwbGl0KC9bL1xcXFxdLykuam9pbihzZXBhcmF0b3IpO1xufVxuZXhwb3J0cy5yZXBsYWNlUGF0aFNlZ21lbnRTZXBhcmF0b3IgPSByZXBsYWNlUGF0aFNlZ21lbnRTZXBhcmF0b3I7XG5mdW5jdGlvbiBqb2luUGF0aFNlZ21lbnRzKGEsIGIsIHNlcGFyYXRvcikge1xuICAgIGlmIChhID09PSAnJykge1xuICAgICAgICByZXR1cm4gYjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIGNvcnJlY3QgaGFuZGxpbmcgb2YgY2FzZXMgd2hlbiB0aGUgZmlyc3Qgc2VnbWVudCBpcyBhIHJvb3QgKGAvYCwgYEM6L2ApIG9yIFVOQyBwYXRoIChgLy8/L0M6L2ApLlxuICAgICAqL1xuICAgIGlmIChhLmVuZHNXaXRoKHNlcGFyYXRvcikpIHtcbiAgICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cbiAgICByZXR1cm4gYSArIHNlcGFyYXRvciArIGI7XG59XG5leHBvcnRzLmpvaW5QYXRoU2VnbWVudHMgPSBqb2luUGF0aFNlZ21lbnRzO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuY2xhc3MgUmVhZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihfcm9vdCwgX3NldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuX3Jvb3QgPSBfcm9vdDtcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBfc2V0dGluZ3M7XG4gICAgICAgIHRoaXMuX3Jvb3QgPSBjb21tb24ucmVwbGFjZVBhdGhTZWdtZW50U2VwYXJhdG9yKF9yb290LCBfc2V0dGluZ3MucGF0aFNlZ21lbnRTZXBhcmF0b3IpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFJlYWRlcjtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGV2ZW50c18xID0gcmVxdWlyZShcImV2ZW50c1wiKTtcbmNvbnN0IGZzU2NhbmRpciA9IHJlcXVpcmUoXCJAbm9kZWxpYi9mcy5zY2FuZGlyXCIpO1xuY29uc3QgZmFzdHEgPSByZXF1aXJlKFwiZmFzdHFcIik7XG5jb25zdCBjb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5jb25zdCByZWFkZXJfMSA9IHJlcXVpcmUoXCIuL3JlYWRlclwiKTtcbmNsYXNzIEFzeW5jUmVhZGVyIGV4dGVuZHMgcmVhZGVyXzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IoX3Jvb3QsIF9zZXR0aW5ncykge1xuICAgICAgICBzdXBlcihfcm9vdCwgX3NldHRpbmdzKTtcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBfc2V0dGluZ3M7XG4gICAgICAgIHRoaXMuX3NjYW5kaXIgPSBmc1NjYW5kaXIuc2NhbmRpcjtcbiAgICAgICAgdGhpcy5fZW1pdHRlciA9IG5ldyBldmVudHNfMS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5fcXVldWUgPSBmYXN0cSh0aGlzLl93b3JrZXIuYmluZCh0aGlzKSwgdGhpcy5fc2V0dGluZ3MuY29uY3VycmVuY3kpO1xuICAgICAgICB0aGlzLl9pc0ZhdGFsRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcXVldWUuZHJhaW4gPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2lzRmF0YWxFcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2VtaXR0ZXIuZW1pdCgnZW5kJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJlYWQoKSB7XG4gICAgICAgIHRoaXMuX2lzRmF0YWxFcnJvciA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgICAgICBzZXRJbW1lZGlhdGUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fcHVzaFRvUXVldWUodGhpcy5fcm9vdCwgdGhpcy5fc2V0dGluZ3MuYmFzZVBhdGgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VtaXR0ZXI7XG4gICAgfVxuICAgIGdldCBpc0Rlc3Ryb3llZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGVzdHJveWVkO1xuICAgIH1cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHJlYWRlciBpcyBhbHJlYWR5IGRlc3Ryb3llZCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcXVldWUua2lsbEFuZERyYWluKCk7XG4gICAgfVxuICAgIG9uRW50cnkoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZW1pdHRlci5vbignZW50cnknLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIG9uRXJyb3IoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZW1pdHRlci5vbmNlKCdlcnJvcicsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgb25FbmQoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZW1pdHRlci5vbmNlKCdlbmQnLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIF9wdXNoVG9RdWV1ZShkaXJlY3RvcnksIGJhc2UpIHtcbiAgICAgICAgY29uc3QgcXVldWVJdGVtID0geyBkaXJlY3RvcnksIGJhc2UgfTtcbiAgICAgICAgdGhpcy5fcXVldWUucHVzaChxdWV1ZUl0ZW0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3dvcmtlcihpdGVtLCBkb25lKSB7XG4gICAgICAgIHRoaXMuX3NjYW5kaXIoaXRlbS5kaXJlY3RvcnksIHRoaXMuX3NldHRpbmdzLmZzU2NhbmRpclNldHRpbmdzLCAoZXJyb3IsIGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRvbmUoZXJyb3IsIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlRW50cnkoZW50cnksIGl0ZW0uYmFzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb25lKG51bGwsIHVuZGVmaW5lZCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfaGFuZGxlRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkIHx8ICFjb21tb24uaXNGYXRhbEVycm9yKHRoaXMuX3NldHRpbmdzLCBlcnJvcikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pc0ZhdGFsRXJyb3IgPSB0cnVlO1xuICAgICAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX2VtaXR0ZXIuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgfVxuICAgIF9oYW5kbGVFbnRyeShlbnRyeSwgYmFzZSkge1xuICAgICAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgdGhpcy5faXNGYXRhbEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZnVsbHBhdGggPSBlbnRyeS5wYXRoO1xuICAgICAgICBpZiAoYmFzZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlbnRyeS5wYXRoID0gY29tbW9uLmpvaW5QYXRoU2VnbWVudHMoYmFzZSwgZW50cnkubmFtZSwgdGhpcy5fc2V0dGluZ3MucGF0aFNlZ21lbnRTZXBhcmF0b3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb21tb24uaXNBcHBsaWVkRmlsdGVyKHRoaXMuX3NldHRpbmdzLmVudHJ5RmlsdGVyLCBlbnRyeSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2VtaXRFbnRyeShlbnRyeSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVudHJ5LmRpcmVudC5pc0RpcmVjdG9yeSgpICYmIGNvbW1vbi5pc0FwcGxpZWRGaWx0ZXIodGhpcy5fc2V0dGluZ3MuZGVlcEZpbHRlciwgZW50cnkpKSB7XG4gICAgICAgICAgICB0aGlzLl9wdXNoVG9RdWV1ZShmdWxscGF0aCwgYmFzZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZW50cnkucGF0aCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2VtaXRFbnRyeShlbnRyeSkge1xuICAgICAgICB0aGlzLl9lbWl0dGVyLmVtaXQoJ2VudHJ5JywgZW50cnkpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEFzeW5jUmVhZGVyO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgYXN5bmNfMSA9IHJlcXVpcmUoXCIuLi9yZWFkZXJzL2FzeW5jXCIpO1xuY2xhc3MgQXN5bmNQcm92aWRlciB7XG4gICAgY29uc3RydWN0b3IoX3Jvb3QsIF9zZXR0aW5ncykge1xuICAgICAgICB0aGlzLl9yb290ID0gX3Jvb3Q7XG4gICAgICAgIHRoaXMuX3NldHRpbmdzID0gX3NldHRpbmdzO1xuICAgICAgICB0aGlzLl9yZWFkZXIgPSBuZXcgYXN5bmNfMS5kZWZhdWx0KHRoaXMuX3Jvb3QsIHRoaXMuX3NldHRpbmdzKTtcbiAgICAgICAgdGhpcy5fc3RvcmFnZSA9IFtdO1xuICAgIH1cbiAgICByZWFkKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX3JlYWRlci5vbkVycm9yKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY2FsbEZhaWx1cmVDYWxsYmFjayhjYWxsYmFjaywgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fcmVhZGVyLm9uRW50cnkoKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9zdG9yYWdlLnB1c2goZW50cnkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fcmVhZGVyLm9uRW5kKCgpID0+IHtcbiAgICAgICAgICAgIGNhbGxTdWNjZXNzQ2FsbGJhY2soY2FsbGJhY2ssIHRoaXMuX3N0b3JhZ2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fcmVhZGVyLnJlYWQoKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBBc3luY1Byb3ZpZGVyO1xuZnVuY3Rpb24gY2FsbEZhaWx1cmVDYWxsYmFjayhjYWxsYmFjaywgZXJyb3IpIHtcbiAgICBjYWxsYmFjayhlcnJvcik7XG59XG5mdW5jdGlvbiBjYWxsU3VjY2Vzc0NhbGxiYWNrKGNhbGxiYWNrLCBlbnRyaWVzKSB7XG4gICAgY2FsbGJhY2sobnVsbCwgZW50cmllcyk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzdHJlYW1fMSA9IHJlcXVpcmUoXCJzdHJlYW1cIik7XG5jb25zdCBhc3luY18xID0gcmVxdWlyZShcIi4uL3JlYWRlcnMvYXN5bmNcIik7XG5jbGFzcyBTdHJlYW1Qcm92aWRlciB7XG4gICAgY29uc3RydWN0b3IoX3Jvb3QsIF9zZXR0aW5ncykge1xuICAgICAgICB0aGlzLl9yb290ID0gX3Jvb3Q7XG4gICAgICAgIHRoaXMuX3NldHRpbmdzID0gX3NldHRpbmdzO1xuICAgICAgICB0aGlzLl9yZWFkZXIgPSBuZXcgYXN5bmNfMS5kZWZhdWx0KHRoaXMuX3Jvb3QsIHRoaXMuX3NldHRpbmdzKTtcbiAgICAgICAgdGhpcy5fc3RyZWFtID0gbmV3IHN0cmVhbV8xLlJlYWRhYmxlKHtcbiAgICAgICAgICAgIG9iamVjdE1vZGU6IHRydWUsXG4gICAgICAgICAgICByZWFkOiAoKSA9PiB7IH0sXG4gICAgICAgICAgICBkZXN0cm95OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9yZWFkZXIuaXNEZXN0cm95ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVhZGVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZWFkKCkge1xuICAgICAgICB0aGlzLl9yZWFkZXIub25FcnJvcigoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3N0cmVhbS5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3JlYWRlci5vbkVudHJ5KChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fc3RyZWFtLnB1c2goZW50cnkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fcmVhZGVyLm9uRW5kKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3N0cmVhbS5wdXNoKG51bGwpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fcmVhZGVyLnJlYWQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0cmVhbTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBTdHJlYW1Qcm92aWRlcjtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGZzU2NhbmRpciA9IHJlcXVpcmUoXCJAbm9kZWxpYi9mcy5zY2FuZGlyXCIpO1xuY29uc3QgY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuY29uc3QgcmVhZGVyXzEgPSByZXF1aXJlKFwiLi9yZWFkZXJcIik7XG5jbGFzcyBTeW5jUmVhZGVyIGV4dGVuZHMgcmVhZGVyXzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuX3NjYW5kaXIgPSBmc1NjYW5kaXIuc2NhbmRpclN5bmM7XG4gICAgICAgIHRoaXMuX3N0b3JhZ2UgPSBbXTtcbiAgICAgICAgdGhpcy5fcXVldWUgPSBuZXcgU2V0KCk7XG4gICAgfVxuICAgIHJlYWQoKSB7XG4gICAgICAgIHRoaXMuX3B1c2hUb1F1ZXVlKHRoaXMuX3Jvb3QsIHRoaXMuX3NldHRpbmdzLmJhc2VQYXRoKTtcbiAgICAgICAgdGhpcy5faGFuZGxlUXVldWUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0b3JhZ2U7XG4gICAgfVxuICAgIF9wdXNoVG9RdWV1ZShkaXJlY3RvcnksIGJhc2UpIHtcbiAgICAgICAgdGhpcy5fcXVldWUuYWRkKHsgZGlyZWN0b3J5LCBiYXNlIH0pO1xuICAgIH1cbiAgICBfaGFuZGxlUXVldWUoKSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLl9xdWV1ZS52YWx1ZXMoKSkge1xuICAgICAgICAgICAgdGhpcy5faGFuZGxlRGlyZWN0b3J5KGl0ZW0uZGlyZWN0b3J5LCBpdGVtLmJhc2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9oYW5kbGVEaXJlY3RvcnkoZGlyZWN0b3J5LCBiYXNlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5fc2NhbmRpcihkaXJlY3RvcnksIHRoaXMuX3NldHRpbmdzLmZzU2NhbmRpclNldHRpbmdzKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUVudHJ5KGVudHJ5LCBiYXNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZUVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfaGFuZGxlRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgaWYgKCFjb21tb24uaXNGYXRhbEVycm9yKHRoaXMuX3NldHRpbmdzLCBlcnJvcikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gICAgX2hhbmRsZUVudHJ5KGVudHJ5LCBiYXNlKSB7XG4gICAgICAgIGNvbnN0IGZ1bGxwYXRoID0gZW50cnkucGF0aDtcbiAgICAgICAgaWYgKGJhc2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZW50cnkucGF0aCA9IGNvbW1vbi5qb2luUGF0aFNlZ21lbnRzKGJhc2UsIGVudHJ5Lm5hbWUsIHRoaXMuX3NldHRpbmdzLnBhdGhTZWdtZW50U2VwYXJhdG9yKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tbW9uLmlzQXBwbGllZEZpbHRlcih0aGlzLl9zZXR0aW5ncy5lbnRyeUZpbHRlciwgZW50cnkpKSB7XG4gICAgICAgICAgICB0aGlzLl9wdXNoVG9TdG9yYWdlKGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW50cnkuZGlyZW50LmlzRGlyZWN0b3J5KCkgJiYgY29tbW9uLmlzQXBwbGllZEZpbHRlcih0aGlzLl9zZXR0aW5ncy5kZWVwRmlsdGVyLCBlbnRyeSkpIHtcbiAgICAgICAgICAgIHRoaXMuX3B1c2hUb1F1ZXVlKGZ1bGxwYXRoLCBiYXNlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBlbnRyeS5wYXRoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfcHVzaFRvU3RvcmFnZShlbnRyeSkge1xuICAgICAgICB0aGlzLl9zdG9yYWdlLnB1c2goZW50cnkpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFN5bmNSZWFkZXI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzeW5jXzEgPSByZXF1aXJlKFwiLi4vcmVhZGVycy9zeW5jXCIpO1xuY2xhc3MgU3luY1Byb3ZpZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihfcm9vdCwgX3NldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuX3Jvb3QgPSBfcm9vdDtcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBfc2V0dGluZ3M7XG4gICAgICAgIHRoaXMuX3JlYWRlciA9IG5ldyBzeW5jXzEuZGVmYXVsdCh0aGlzLl9yb290LCB0aGlzLl9zZXR0aW5ncyk7XG4gICAgfVxuICAgIHJlYWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWFkZXIucmVhZCgpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFN5bmNQcm92aWRlcjtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcbmNvbnN0IGZzU2NhbmRpciA9IHJlcXVpcmUoXCJAbm9kZWxpYi9mcy5zY2FuZGlyXCIpO1xuY2xhc3MgU2V0dGluZ3Mge1xuICAgIGNvbnN0cnVjdG9yKF9vcHRpb25zID0ge30pIHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IF9vcHRpb25zO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy5iYXNlUGF0aCwgdW5kZWZpbmVkKTtcbiAgICAgICAgdGhpcy5jb25jdXJyZW5jeSA9IHRoaXMuX2dldFZhbHVlKHRoaXMuX29wdGlvbnMuY29uY3VycmVuY3ksIE51bWJlci5QT1NJVElWRV9JTkZJTklUWSk7XG4gICAgICAgIHRoaXMuZGVlcEZpbHRlciA9IHRoaXMuX2dldFZhbHVlKHRoaXMuX29wdGlvbnMuZGVlcEZpbHRlciwgbnVsbCk7XG4gICAgICAgIHRoaXMuZW50cnlGaWx0ZXIgPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLl9vcHRpb25zLmVudHJ5RmlsdGVyLCBudWxsKTtcbiAgICAgICAgdGhpcy5lcnJvckZpbHRlciA9IHRoaXMuX2dldFZhbHVlKHRoaXMuX29wdGlvbnMuZXJyb3JGaWx0ZXIsIG51bGwpO1xuICAgICAgICB0aGlzLnBhdGhTZWdtZW50U2VwYXJhdG9yID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy5wYXRoU2VnbWVudFNlcGFyYXRvciwgcGF0aC5zZXApO1xuICAgICAgICB0aGlzLmZzU2NhbmRpclNldHRpbmdzID0gbmV3IGZzU2NhbmRpci5TZXR0aW5ncyh7XG4gICAgICAgICAgICBmb2xsb3dTeW1ib2xpY0xpbmtzOiB0aGlzLl9vcHRpb25zLmZvbGxvd1N5bWJvbGljTGlua3MsXG4gICAgICAgICAgICBmczogdGhpcy5fb3B0aW9ucy5mcyxcbiAgICAgICAgICAgIHBhdGhTZWdtZW50U2VwYXJhdG9yOiB0aGlzLl9vcHRpb25zLnBhdGhTZWdtZW50U2VwYXJhdG9yLFxuICAgICAgICAgICAgc3RhdHM6IHRoaXMuX29wdGlvbnMuc3RhdHMsXG4gICAgICAgICAgICB0aHJvd0Vycm9yT25Ccm9rZW5TeW1ib2xpY0xpbms6IHRoaXMuX29wdGlvbnMudGhyb3dFcnJvck9uQnJva2VuU3ltYm9saWNMaW5rXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0VmFsdWUob3B0aW9uLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gb3B0aW9uICE9PSBudWxsICYmIG9wdGlvbiAhPT0gdm9pZCAwID8gb3B0aW9uIDogdmFsdWU7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gU2V0dGluZ3M7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNldHRpbmdzID0gZXhwb3J0cy53YWxrU3RyZWFtID0gZXhwb3J0cy53YWxrU3luYyA9IGV4cG9ydHMud2FsayA9IHZvaWQgMDtcbmNvbnN0IGFzeW5jXzEgPSByZXF1aXJlKFwiLi9wcm92aWRlcnMvYXN5bmNcIik7XG5jb25zdCBzdHJlYW1fMSA9IHJlcXVpcmUoXCIuL3Byb3ZpZGVycy9zdHJlYW1cIik7XG5jb25zdCBzeW5jXzEgPSByZXF1aXJlKFwiLi9wcm92aWRlcnMvc3luY1wiKTtcbmNvbnN0IHNldHRpbmdzXzEgPSByZXF1aXJlKFwiLi9zZXR0aW5nc1wiKTtcbmV4cG9ydHMuU2V0dGluZ3MgPSBzZXR0aW5nc18xLmRlZmF1bHQ7XG5mdW5jdGlvbiB3YWxrKGRpcmVjdG9yeSwgb3B0aW9uc09yU2V0dGluZ3NPckNhbGxiYWNrLCBjYWxsYmFjaykge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9uc09yU2V0dGluZ3NPckNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG5ldyBhc3luY18xLmRlZmF1bHQoZGlyZWN0b3J5LCBnZXRTZXR0aW5ncygpKS5yZWFkKG9wdGlvbnNPclNldHRpbmdzT3JDYWxsYmFjayk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbmV3IGFzeW5jXzEuZGVmYXVsdChkaXJlY3RvcnksIGdldFNldHRpbmdzKG9wdGlvbnNPclNldHRpbmdzT3JDYWxsYmFjaykpLnJlYWQoY2FsbGJhY2spO1xufVxuZXhwb3J0cy53YWxrID0gd2FsaztcbmZ1bmN0aW9uIHdhbGtTeW5jKGRpcmVjdG9yeSwgb3B0aW9uc09yU2V0dGluZ3MpIHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IGdldFNldHRpbmdzKG9wdGlvbnNPclNldHRpbmdzKTtcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBzeW5jXzEuZGVmYXVsdChkaXJlY3RvcnksIHNldHRpbmdzKTtcbiAgICByZXR1cm4gcHJvdmlkZXIucmVhZCgpO1xufVxuZXhwb3J0cy53YWxrU3luYyA9IHdhbGtTeW5jO1xuZnVuY3Rpb24gd2Fsa1N0cmVhbShkaXJlY3RvcnksIG9wdGlvbnNPclNldHRpbmdzKSB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSBnZXRTZXR0aW5ncyhvcHRpb25zT3JTZXR0aW5ncyk7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgc3RyZWFtXzEuZGVmYXVsdChkaXJlY3RvcnksIHNldHRpbmdzKTtcbiAgICByZXR1cm4gcHJvdmlkZXIucmVhZCgpO1xufVxuZXhwb3J0cy53YWxrU3RyZWFtID0gd2Fsa1N0cmVhbTtcbmZ1bmN0aW9uIGdldFNldHRpbmdzKHNldHRpbmdzT3JPcHRpb25zID0ge30pIHtcbiAgICBpZiAoc2V0dGluZ3NPck9wdGlvbnMgaW5zdGFuY2VvZiBzZXR0aW5nc18xLmRlZmF1bHQpIHtcbiAgICAgICAgcmV0dXJuIHNldHRpbmdzT3JPcHRpb25zO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IHNldHRpbmdzXzEuZGVmYXVsdChzZXR0aW5nc09yT3B0aW9ucyk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XG5jb25zdCBmc1N0YXQgPSByZXF1aXJlKFwiQG5vZGVsaWIvZnMuc3RhdFwiKTtcbmNvbnN0IHV0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgUmVhZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihfc2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBfc2V0dGluZ3M7XG4gICAgICAgIHRoaXMuX2ZzU3RhdFNldHRpbmdzID0gbmV3IGZzU3RhdC5TZXR0aW5ncyh7XG4gICAgICAgICAgICBmb2xsb3dTeW1ib2xpY0xpbms6IHRoaXMuX3NldHRpbmdzLmZvbGxvd1N5bWJvbGljTGlua3MsXG4gICAgICAgICAgICBmczogdGhpcy5fc2V0dGluZ3MuZnMsXG4gICAgICAgICAgICB0aHJvd0Vycm9yT25Ccm9rZW5TeW1ib2xpY0xpbms6IHRoaXMuX3NldHRpbmdzLmZvbGxvd1N5bWJvbGljTGlua3NcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRGdWxsRW50cnlQYXRoKGZpbGVwYXRoKSB7XG4gICAgICAgIHJldHVybiBwYXRoLnJlc29sdmUodGhpcy5fc2V0dGluZ3MuY3dkLCBmaWxlcGF0aCk7XG4gICAgfVxuICAgIF9tYWtlRW50cnkoc3RhdHMsIHBhdHRlcm4pIHtcbiAgICAgICAgY29uc3QgZW50cnkgPSB7XG4gICAgICAgICAgICBuYW1lOiBwYXR0ZXJuLFxuICAgICAgICAgICAgcGF0aDogcGF0dGVybixcbiAgICAgICAgICAgIGRpcmVudDogdXRpbHMuZnMuY3JlYXRlRGlyZW50RnJvbVN0YXRzKHBhdHRlcm4sIHN0YXRzKVxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3Muc3RhdHMpIHtcbiAgICAgICAgICAgIGVudHJ5LnN0YXRzID0gc3RhdHM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgIH1cbiAgICBfaXNGYXRhbEVycm9yKGVycm9yKSB7XG4gICAgICAgIHJldHVybiAhdXRpbHMuZXJybm8uaXNFbm9lbnRDb2RlRXJyb3IoZXJyb3IpICYmICF0aGlzLl9zZXR0aW5ncy5zdXBwcmVzc0Vycm9ycztcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBSZWFkZXI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzdHJlYW1fMSA9IHJlcXVpcmUoXCJzdHJlYW1cIik7XG5jb25zdCBmc1N0YXQgPSByZXF1aXJlKFwiQG5vZGVsaWIvZnMuc3RhdFwiKTtcbmNvbnN0IGZzV2FsayA9IHJlcXVpcmUoXCJAbm9kZWxpYi9mcy53YWxrXCIpO1xuY29uc3QgcmVhZGVyXzEgPSByZXF1aXJlKFwiLi9yZWFkZXJcIik7XG5jbGFzcyBSZWFkZXJTdHJlYW0gZXh0ZW5kcyByZWFkZXJfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5fd2Fsa1N0cmVhbSA9IGZzV2Fsay53YWxrU3RyZWFtO1xuICAgICAgICB0aGlzLl9zdGF0ID0gZnNTdGF0LnN0YXQ7XG4gICAgfVxuICAgIGR5bmFtaWMocm9vdCwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2Fsa1N0cmVhbShyb290LCBvcHRpb25zKTtcbiAgICB9XG4gICAgc3RhdGljKHBhdHRlcm5zLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGZpbGVwYXRocyA9IHBhdHRlcm5zLm1hcCh0aGlzLl9nZXRGdWxsRW50cnlQYXRoLCB0aGlzKTtcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gbmV3IHN0cmVhbV8xLlBhc3NUaHJvdWdoKHsgb2JqZWN0TW9kZTogdHJ1ZSB9KTtcbiAgICAgICAgc3RyZWFtLl93cml0ZSA9IChpbmRleCwgX2VuYywgZG9uZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldEVudHJ5KGZpbGVwYXRoc1tpbmRleF0sIHBhdHRlcm5zW2luZGV4XSwgb3B0aW9ucylcbiAgICAgICAgICAgICAgICAudGhlbigoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkgIT09IG51bGwgJiYgb3B0aW9ucy5lbnRyeUZpbHRlcihlbnRyeSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyZWFtLnB1c2goZW50cnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IGZpbGVwYXRocy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmVhbS5lbmQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZG9uZSk7XG4gICAgICAgIH07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXBhdGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzdHJlYW0ud3JpdGUoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cmVhbTtcbiAgICB9XG4gICAgX2dldEVudHJ5KGZpbGVwYXRoLCBwYXR0ZXJuLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRTdGF0KGZpbGVwYXRoKVxuICAgICAgICAgICAgLnRoZW4oKHN0YXRzKSA9PiB0aGlzLl9tYWtlRW50cnkoc3RhdHMsIHBhdHRlcm4pKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZXJyb3JGaWx0ZXIoZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTdGF0KGZpbGVwYXRoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0KGZpbGVwYXRoLCB0aGlzLl9mc1N0YXRTZXR0aW5ncywgKGVycm9yLCBzdGF0cykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvciA9PT0gbnVsbCA/IHJlc29sdmUoc3RhdHMpIDogcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBSZWFkZXJTdHJlYW07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBmc1dhbGsgPSByZXF1aXJlKFwiQG5vZGVsaWIvZnMud2Fsa1wiKTtcbmNvbnN0IHJlYWRlcl8xID0gcmVxdWlyZShcIi4vcmVhZGVyXCIpO1xuY29uc3Qgc3RyZWFtXzEgPSByZXF1aXJlKFwiLi9zdHJlYW1cIik7XG5jbGFzcyBSZWFkZXJBc3luYyBleHRlbmRzIHJlYWRlcl8xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLl93YWxrQXN5bmMgPSBmc1dhbGsud2FsaztcbiAgICAgICAgdGhpcy5fcmVhZGVyU3RyZWFtID0gbmV3IHN0cmVhbV8xLmRlZmF1bHQodGhpcy5fc2V0dGluZ3MpO1xuICAgIH1cbiAgICBkeW5hbWljKHJvb3QsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3dhbGtBc3luYyhyb290LCBvcHRpb25zLCAoZXJyb3IsIGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShlbnRyaWVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBzdGF0aWMocGF0dGVybnMsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZW50cmllcyA9IFtdO1xuICAgICAgICBjb25zdCBzdHJlYW0gPSB0aGlzLl9yZWFkZXJTdHJlYW0uc3RhdGljKHBhdHRlcm5zLCBvcHRpb25zKTtcbiAgICAgICAgLy8gQWZ0ZXIgIzIzNSwgcmVwbGFjZSBpdCB3aXRoIGFuIGFzeW5jaHJvbm91cyBpdGVyYXRvci5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHN0cmVhbS5vbmNlKCdlcnJvcicsIHJlamVjdCk7XG4gICAgICAgICAgICBzdHJlYW0ub24oJ2RhdGEnLCAoZW50cnkpID0+IGVudHJpZXMucHVzaChlbnRyeSkpO1xuICAgICAgICAgICAgc3RyZWFtLm9uY2UoJ2VuZCcsICgpID0+IHJlc29sdmUoZW50cmllcykpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBSZWFkZXJBc3luYztcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHV0aWxzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO1xuY2xhc3MgTWF0Y2hlciB7XG4gICAgY29uc3RydWN0b3IoX3BhdHRlcm5zLCBfc2V0dGluZ3MsIF9taWNyb21hdGNoT3B0aW9ucykge1xuICAgICAgICB0aGlzLl9wYXR0ZXJucyA9IF9wYXR0ZXJucztcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBfc2V0dGluZ3M7XG4gICAgICAgIHRoaXMuX21pY3JvbWF0Y2hPcHRpb25zID0gX21pY3JvbWF0Y2hPcHRpb25zO1xuICAgICAgICB0aGlzLl9zdG9yYWdlID0gW107XG4gICAgICAgIHRoaXMuX2ZpbGxTdG9yYWdlKCk7XG4gICAgfVxuICAgIF9maWxsU3RvcmFnZSgpIHtcbiAgICAgICAgZm9yIChjb25zdCBwYXR0ZXJuIG9mIHRoaXMuX3BhdHRlcm5zKSB7XG4gICAgICAgICAgICBjb25zdCBzZWdtZW50cyA9IHRoaXMuX2dldFBhdHRlcm5TZWdtZW50cyhwYXR0ZXJuKTtcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb25zID0gdGhpcy5fc3BsaXRTZWdtZW50c0ludG9TZWN0aW9ucyhzZWdtZW50cyk7XG4gICAgICAgICAgICB0aGlzLl9zdG9yYWdlLnB1c2goe1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBzZWN0aW9ucy5sZW5ndGggPD0gMSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuLFxuICAgICAgICAgICAgICAgIHNlZ21lbnRzLFxuICAgICAgICAgICAgICAgIHNlY3Rpb25zXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfZ2V0UGF0dGVyblNlZ21lbnRzKHBhdHRlcm4pIHtcbiAgICAgICAgY29uc3QgcGFydHMgPSB1dGlscy5wYXR0ZXJuLmdldFBhdHRlcm5QYXJ0cyhwYXR0ZXJuLCB0aGlzLl9taWNyb21hdGNoT3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBwYXJ0cy5tYXAoKHBhcnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGR5bmFtaWMgPSB1dGlscy5wYXR0ZXJuLmlzRHluYW1pY1BhdHRlcm4ocGFydCwgdGhpcy5fc2V0dGluZ3MpO1xuICAgICAgICAgICAgaWYgKCFkeW5hbWljKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZHluYW1pYzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhcnRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkeW5hbWljOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhcnQsXG4gICAgICAgICAgICAgICAgcGF0dGVyblJlOiB1dGlscy5wYXR0ZXJuLm1ha2VSZShwYXJ0LCB0aGlzLl9taWNyb21hdGNoT3B0aW9ucylcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfc3BsaXRTZWdtZW50c0ludG9TZWN0aW9ucyhzZWdtZW50cykge1xuICAgICAgICByZXR1cm4gdXRpbHMuYXJyYXkuc3BsaXRXaGVuKHNlZ21lbnRzLCAoc2VnbWVudCkgPT4gc2VnbWVudC5keW5hbWljICYmIHV0aWxzLnBhdHRlcm4uaGFzR2xvYlN0YXIoc2VnbWVudC5wYXR0ZXJuKSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gTWF0Y2hlcjtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IG1hdGNoZXJfMSA9IHJlcXVpcmUoXCIuL21hdGNoZXJcIik7XG5jbGFzcyBQYXJ0aWFsTWF0Y2hlciBleHRlbmRzIG1hdGNoZXJfMS5kZWZhdWx0IHtcbiAgICBtYXRjaChmaWxlcGF0aCkge1xuICAgICAgICBjb25zdCBwYXJ0cyA9IGZpbGVwYXRoLnNwbGl0KCcvJyk7XG4gICAgICAgIGNvbnN0IGxldmVscyA9IHBhcnRzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgcGF0dGVybnMgPSB0aGlzLl9zdG9yYWdlLmZpbHRlcigoaW5mbykgPT4gIWluZm8uY29tcGxldGUgfHwgaW5mby5zZWdtZW50cy5sZW5ndGggPiBsZXZlbHMpO1xuICAgICAgICBmb3IgKGNvbnN0IHBhdHRlcm4gb2YgcGF0dGVybnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSBwYXR0ZXJuLnNlY3Rpb25zWzBdO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJbiB0aGlzIGNhc2UsIHRoZSBwYXR0ZXJuIGhhcyBhIGdsb2JzdGFyIGFuZCB3ZSBtdXN0IHJlYWQgYWxsIGRpcmVjdG9yaWVzIHVuY29uZGl0aW9uYWxseSxcbiAgICAgICAgICAgICAqIGJ1dCBvbmx5IGlmIHRoZSBsZXZlbCBoYXMgcmVhY2hlZCB0aGUgZW5kIG9mIHRoZSBmaXJzdCBncm91cC5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBmaXh0dXJlcy97YSxifS8qKlxuICAgICAgICAgICAgICogIF4gdHJ1ZS9mYWxzZSAgXiBhbHdheXMgdHJ1ZVxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmICghcGF0dGVybi5jb21wbGV0ZSAmJiBsZXZlbHMgPiBzZWN0aW9uLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBwYXJ0cy5ldmVyeSgocGFydCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWdtZW50ID0gcGF0dGVybi5zZWdtZW50c1tpbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKHNlZ21lbnQuZHluYW1pYyAmJiBzZWdtZW50LnBhdHRlcm5SZS50ZXN0KHBhcnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXNlZ21lbnQuZHluYW1pYyAmJiBzZWdtZW50LnBhdHRlcm4gPT09IHBhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFBhcnRpYWxNYXRjaGVyO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXRpbHMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7XG5jb25zdCBwYXJ0aWFsXzEgPSByZXF1aXJlKFwiLi4vbWF0Y2hlcnMvcGFydGlhbFwiKTtcbmNsYXNzIERlZXBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKF9zZXR0aW5ncywgX21pY3JvbWF0Y2hPcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX3NldHRpbmdzID0gX3NldHRpbmdzO1xuICAgICAgICB0aGlzLl9taWNyb21hdGNoT3B0aW9ucyA9IF9taWNyb21hdGNoT3B0aW9ucztcbiAgICB9XG4gICAgZ2V0RmlsdGVyKGJhc2VQYXRoLCBwb3NpdGl2ZSwgbmVnYXRpdmUpIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlciA9IHRoaXMuX2dldE1hdGNoZXIocG9zaXRpdmUpO1xuICAgICAgICBjb25zdCBuZWdhdGl2ZVJlID0gdGhpcy5fZ2V0TmVnYXRpdmVQYXR0ZXJuc1JlKG5lZ2F0aXZlKTtcbiAgICAgICAgcmV0dXJuIChlbnRyeSkgPT4gdGhpcy5fZmlsdGVyKGJhc2VQYXRoLCBlbnRyeSwgbWF0Y2hlciwgbmVnYXRpdmVSZSk7XG4gICAgfVxuICAgIF9nZXRNYXRjaGVyKHBhdHRlcm5zKSB7XG4gICAgICAgIHJldHVybiBuZXcgcGFydGlhbF8xLmRlZmF1bHQocGF0dGVybnMsIHRoaXMuX3NldHRpbmdzLCB0aGlzLl9taWNyb21hdGNoT3B0aW9ucyk7XG4gICAgfVxuICAgIF9nZXROZWdhdGl2ZVBhdHRlcm5zUmUocGF0dGVybnMpIHtcbiAgICAgICAgY29uc3QgYWZmZWN0RGVwdGhPZlJlYWRpbmdQYXR0ZXJucyA9IHBhdHRlcm5zLmZpbHRlcih1dGlscy5wYXR0ZXJuLmlzQWZmZWN0RGVwdGhPZlJlYWRpbmdQYXR0ZXJuKTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLnBhdHRlcm4uY29udmVydFBhdHRlcm5zVG9SZShhZmZlY3REZXB0aE9mUmVhZGluZ1BhdHRlcm5zLCB0aGlzLl9taWNyb21hdGNoT3B0aW9ucyk7XG4gICAgfVxuICAgIF9maWx0ZXIoYmFzZVBhdGgsIGVudHJ5LCBtYXRjaGVyLCBuZWdhdGl2ZVJlKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc1NraXBwZWRCeURlZXAoYmFzZVBhdGgsIGVudHJ5LnBhdGgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2lzU2tpcHBlZFN5bWJvbGljTGluayhlbnRyeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmaWxlcGF0aCA9IHV0aWxzLnBhdGgucmVtb3ZlTGVhZGluZ0RvdFNlZ21lbnQoZW50cnkucGF0aCk7XG4gICAgICAgIGlmICh0aGlzLl9pc1NraXBwZWRCeVBvc2l0aXZlUGF0dGVybnMoZmlsZXBhdGgsIG1hdGNoZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzU2tpcHBlZEJ5TmVnYXRpdmVQYXR0ZXJucyhmaWxlcGF0aCwgbmVnYXRpdmVSZSk7XG4gICAgfVxuICAgIF9pc1NraXBwZWRCeURlZXAoYmFzZVBhdGgsIGVudHJ5UGF0aCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQXZvaWQgdW5uZWNlc3NhcnkgZGVwdGggY2FsY3VsYXRpb25zIHdoZW4gaXQgZG9lc24ndCBtYXR0ZXIuXG4gICAgICAgICAqL1xuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MuZGVlcCA9PT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RW50cnlMZXZlbChiYXNlUGF0aCwgZW50cnlQYXRoKSA+PSB0aGlzLl9zZXR0aW5ncy5kZWVwO1xuICAgIH1cbiAgICBfZ2V0RW50cnlMZXZlbChiYXNlUGF0aCwgZW50cnlQYXRoKSB7XG4gICAgICAgIGNvbnN0IGVudHJ5UGF0aERlcHRoID0gZW50cnlQYXRoLnNwbGl0KCcvJykubGVuZ3RoO1xuICAgICAgICBpZiAoYmFzZVBhdGggPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gZW50cnlQYXRoRGVwdGg7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYmFzZVBhdGhEZXB0aCA9IGJhc2VQYXRoLnNwbGl0KCcvJykubGVuZ3RoO1xuICAgICAgICByZXR1cm4gZW50cnlQYXRoRGVwdGggLSBiYXNlUGF0aERlcHRoO1xuICAgIH1cbiAgICBfaXNTa2lwcGVkU3ltYm9saWNMaW5rKGVudHJ5KSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5fc2V0dGluZ3MuZm9sbG93U3ltYm9saWNMaW5rcyAmJiBlbnRyeS5kaXJlbnQuaXNTeW1ib2xpY0xpbmsoKTtcbiAgICB9XG4gICAgX2lzU2tpcHBlZEJ5UG9zaXRpdmVQYXR0ZXJucyhlbnRyeVBhdGgsIG1hdGNoZXIpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLl9zZXR0aW5ncy5iYXNlTmFtZU1hdGNoICYmICFtYXRjaGVyLm1hdGNoKGVudHJ5UGF0aCk7XG4gICAgfVxuICAgIF9pc1NraXBwZWRCeU5lZ2F0aXZlUGF0dGVybnMoZW50cnlQYXRoLCBwYXR0ZXJuc1JlKSB7XG4gICAgICAgIHJldHVybiAhdXRpbHMucGF0dGVybi5tYXRjaEFueShlbnRyeVBhdGgsIHBhdHRlcm5zUmUpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IERlZXBGaWx0ZXI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTtcbmNsYXNzIEVudHJ5RmlsdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihfc2V0dGluZ3MsIF9taWNyb21hdGNoT3B0aW9ucykge1xuICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IF9zZXR0aW5ncztcbiAgICAgICAgdGhpcy5fbWljcm9tYXRjaE9wdGlvbnMgPSBfbWljcm9tYXRjaE9wdGlvbnM7XG4gICAgICAgIHRoaXMuaW5kZXggPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIGdldEZpbHRlcihwb3NpdGl2ZSwgbmVnYXRpdmUpIHtcbiAgICAgICAgY29uc3QgcG9zaXRpdmVSZSA9IHV0aWxzLnBhdHRlcm4uY29udmVydFBhdHRlcm5zVG9SZShwb3NpdGl2ZSwgdGhpcy5fbWljcm9tYXRjaE9wdGlvbnMpO1xuICAgICAgICBjb25zdCBuZWdhdGl2ZVJlID0gdXRpbHMucGF0dGVybi5jb252ZXJ0UGF0dGVybnNUb1JlKG5lZ2F0aXZlLCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX21pY3JvbWF0Y2hPcHRpb25zKSwgeyBkb3Q6IHRydWUgfSkpO1xuICAgICAgICByZXR1cm4gKGVudHJ5KSA9PiB0aGlzLl9maWx0ZXIoZW50cnksIHBvc2l0aXZlUmUsIG5lZ2F0aXZlUmUpO1xuICAgIH1cbiAgICBfZmlsdGVyKGVudHJ5LCBwb3NpdGl2ZVJlLCBuZWdhdGl2ZVJlKSB7XG4gICAgICAgIGNvbnN0IGZpbGVwYXRoID0gdXRpbHMucGF0aC5yZW1vdmVMZWFkaW5nRG90U2VnbWVudChlbnRyeS5wYXRoKTtcbiAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLnVuaXF1ZSAmJiB0aGlzLl9pc0R1cGxpY2F0ZUVudHJ5KGZpbGVwYXRoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9vbmx5RmlsZUZpbHRlcihlbnRyeSkgfHwgdGhpcy5fb25seURpcmVjdG9yeUZpbHRlcihlbnRyeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5faXNTa2lwcGVkQnlBYnNvbHV0ZU5lZ2F0aXZlUGF0dGVybnMoZmlsZXBhdGgsIG5lZ2F0aXZlUmUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXNEaXJlY3RvcnkgPSBlbnRyeS5kaXJlbnQuaXNEaXJlY3RvcnkoKTtcbiAgICAgICAgY29uc3QgaXNNYXRjaGVkID0gdGhpcy5faXNNYXRjaFRvUGF0dGVybnMoZmlsZXBhdGgsIHBvc2l0aXZlUmUsIGlzRGlyZWN0b3J5KSAmJiAhdGhpcy5faXNNYXRjaFRvUGF0dGVybnMoZmlsZXBhdGgsIG5lZ2F0aXZlUmUsIGlzRGlyZWN0b3J5KTtcbiAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLnVuaXF1ZSAmJiBpc01hdGNoZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUluZGV4UmVjb3JkKGZpbGVwYXRoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNNYXRjaGVkO1xuICAgIH1cbiAgICBfaXNEdXBsaWNhdGVFbnRyeShmaWxlcGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmRleC5oYXMoZmlsZXBhdGgpO1xuICAgIH1cbiAgICBfY3JlYXRlSW5kZXhSZWNvcmQoZmlsZXBhdGgpIHtcbiAgICAgICAgdGhpcy5pbmRleC5zZXQoZmlsZXBhdGgsIHVuZGVmaW5lZCk7XG4gICAgfVxuICAgIF9vbmx5RmlsZUZpbHRlcihlbnRyeSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3Mub25seUZpbGVzICYmICFlbnRyeS5kaXJlbnQuaXNGaWxlKCk7XG4gICAgfVxuICAgIF9vbmx5RGlyZWN0b3J5RmlsdGVyKGVudHJ5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5vbmx5RGlyZWN0b3JpZXMgJiYgIWVudHJ5LmRpcmVudC5pc0RpcmVjdG9yeSgpO1xuICAgIH1cbiAgICBfaXNTa2lwcGVkQnlBYnNvbHV0ZU5lZ2F0aXZlUGF0dGVybnMoZW50cnlQYXRoLCBwYXR0ZXJuc1JlKSB7XG4gICAgICAgIGlmICghdGhpcy5fc2V0dGluZ3MuYWJzb2x1dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmdWxscGF0aCA9IHV0aWxzLnBhdGgubWFrZUFic29sdXRlKHRoaXMuX3NldHRpbmdzLmN3ZCwgZW50cnlQYXRoKTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLnBhdHRlcm4ubWF0Y2hBbnkoZnVsbHBhdGgsIHBhdHRlcm5zUmUpO1xuICAgIH1cbiAgICBfaXNNYXRjaFRvUGF0dGVybnMoZmlsZXBhdGgsIHBhdHRlcm5zUmUsIGlzRGlyZWN0b3J5KSB7XG4gICAgICAgIC8vIFRyeWluZyB0byBtYXRjaCBmaWxlcyBhbmQgZGlyZWN0b3JpZXMgYnkgcGF0dGVybnMuXG4gICAgICAgIGNvbnN0IGlzTWF0Y2hlZCA9IHV0aWxzLnBhdHRlcm4ubWF0Y2hBbnkoZmlsZXBhdGgsIHBhdHRlcm5zUmUpO1xuICAgICAgICAvLyBBIHBhdHRlcm4gd2l0aCBhIHRyYWlsbGluZyBzbGFzaCBjYW4gYmUgdXNlZCBmb3IgZGlyZWN0b3J5IG1hdGNoaW5nLlxuICAgICAgICAvLyBUbyBhcHBseSBzdWNoIHBhdHRlcm4sIHdlIG5lZWQgdG8gYWRkIGEgdHJhbGxpbmcgc2xhc2ggdG8gdGhlIHBhdGguXG4gICAgICAgIGlmICghaXNNYXRjaGVkICYmIGlzRGlyZWN0b3J5KSB7XG4gICAgICAgICAgICByZXR1cm4gdXRpbHMucGF0dGVybi5tYXRjaEFueShmaWxlcGF0aCArICcvJywgcGF0dGVybnNSZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzTWF0Y2hlZDtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBFbnRyeUZpbHRlcjtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHV0aWxzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO1xuY2xhc3MgRXJyb3JGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKF9zZXR0aW5ncykge1xuICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IF9zZXR0aW5ncztcbiAgICB9XG4gICAgZ2V0RmlsdGVyKCkge1xuICAgICAgICByZXR1cm4gKGVycm9yKSA9PiB0aGlzLl9pc05vbkZhdGFsRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgICBfaXNOb25GYXRhbEVycm9yKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB1dGlscy5lcnJuby5pc0Vub2VudENvZGVFcnJvcihlcnJvcikgfHwgdGhpcy5fc2V0dGluZ3Muc3VwcHJlc3NFcnJvcnM7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gRXJyb3JGaWx0ZXI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTtcbmNsYXNzIEVudHJ5VHJhbnNmb3JtZXIge1xuICAgIGNvbnN0cnVjdG9yKF9zZXR0aW5ncykge1xuICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IF9zZXR0aW5ncztcbiAgICB9XG4gICAgZ2V0VHJhbnNmb3JtZXIoKSB7XG4gICAgICAgIHJldHVybiAoZW50cnkpID0+IHRoaXMuX3RyYW5zZm9ybShlbnRyeSk7XG4gICAgfVxuICAgIF90cmFuc2Zvcm0oZW50cnkpIHtcbiAgICAgICAgbGV0IGZpbGVwYXRoID0gZW50cnkucGF0aDtcbiAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLmFic29sdXRlKSB7XG4gICAgICAgICAgICBmaWxlcGF0aCA9IHV0aWxzLnBhdGgubWFrZUFic29sdXRlKHRoaXMuX3NldHRpbmdzLmN3ZCwgZmlsZXBhdGgpO1xuICAgICAgICAgICAgZmlsZXBhdGggPSB1dGlscy5wYXRoLnVuaXhpZnkoZmlsZXBhdGgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5tYXJrRGlyZWN0b3JpZXMgJiYgZW50cnkuZGlyZW50LmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgICAgIGZpbGVwYXRoICs9ICcvJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX3NldHRpbmdzLm9iamVjdE1vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWxlcGF0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBlbnRyeSksIHsgcGF0aDogZmlsZXBhdGggfSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gRW50cnlUcmFuc2Zvcm1lcjtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcbmNvbnN0IGRlZXBfMSA9IHJlcXVpcmUoXCIuL2ZpbHRlcnMvZGVlcFwiKTtcbmNvbnN0IGVudHJ5XzEgPSByZXF1aXJlKFwiLi9maWx0ZXJzL2VudHJ5XCIpO1xuY29uc3QgZXJyb3JfMSA9IHJlcXVpcmUoXCIuL2ZpbHRlcnMvZXJyb3JcIik7XG5jb25zdCBlbnRyeV8yID0gcmVxdWlyZShcIi4vdHJhbnNmb3JtZXJzL2VudHJ5XCIpO1xuY2xhc3MgUHJvdmlkZXIge1xuICAgIGNvbnN0cnVjdG9yKF9zZXR0aW5ncykge1xuICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IF9zZXR0aW5ncztcbiAgICAgICAgdGhpcy5lcnJvckZpbHRlciA9IG5ldyBlcnJvcl8xLmRlZmF1bHQodGhpcy5fc2V0dGluZ3MpO1xuICAgICAgICB0aGlzLmVudHJ5RmlsdGVyID0gbmV3IGVudHJ5XzEuZGVmYXVsdCh0aGlzLl9zZXR0aW5ncywgdGhpcy5fZ2V0TWljcm9tYXRjaE9wdGlvbnMoKSk7XG4gICAgICAgIHRoaXMuZGVlcEZpbHRlciA9IG5ldyBkZWVwXzEuZGVmYXVsdCh0aGlzLl9zZXR0aW5ncywgdGhpcy5fZ2V0TWljcm9tYXRjaE9wdGlvbnMoKSk7XG4gICAgICAgIHRoaXMuZW50cnlUcmFuc2Zvcm1lciA9IG5ldyBlbnRyeV8yLmRlZmF1bHQodGhpcy5fc2V0dGluZ3MpO1xuICAgIH1cbiAgICBfZ2V0Um9vdERpcmVjdG9yeSh0YXNrKSB7XG4gICAgICAgIHJldHVybiBwYXRoLnJlc29sdmUodGhpcy5fc2V0dGluZ3MuY3dkLCB0YXNrLmJhc2UpO1xuICAgIH1cbiAgICBfZ2V0UmVhZGVyT3B0aW9ucyh0YXNrKSB7XG4gICAgICAgIGNvbnN0IGJhc2VQYXRoID0gdGFzay5iYXNlID09PSAnLicgPyAnJyA6IHRhc2suYmFzZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJhc2VQYXRoLFxuICAgICAgICAgICAgcGF0aFNlZ21lbnRTZXBhcmF0b3I6ICcvJyxcbiAgICAgICAgICAgIGNvbmN1cnJlbmN5OiB0aGlzLl9zZXR0aW5ncy5jb25jdXJyZW5jeSxcbiAgICAgICAgICAgIGRlZXBGaWx0ZXI6IHRoaXMuZGVlcEZpbHRlci5nZXRGaWx0ZXIoYmFzZVBhdGgsIHRhc2sucG9zaXRpdmUsIHRhc2submVnYXRpdmUpLFxuICAgICAgICAgICAgZW50cnlGaWx0ZXI6IHRoaXMuZW50cnlGaWx0ZXIuZ2V0RmlsdGVyKHRhc2sucG9zaXRpdmUsIHRhc2submVnYXRpdmUpLFxuICAgICAgICAgICAgZXJyb3JGaWx0ZXI6IHRoaXMuZXJyb3JGaWx0ZXIuZ2V0RmlsdGVyKCksXG4gICAgICAgICAgICBmb2xsb3dTeW1ib2xpY0xpbmtzOiB0aGlzLl9zZXR0aW5ncy5mb2xsb3dTeW1ib2xpY0xpbmtzLFxuICAgICAgICAgICAgZnM6IHRoaXMuX3NldHRpbmdzLmZzLFxuICAgICAgICAgICAgc3RhdHM6IHRoaXMuX3NldHRpbmdzLnN0YXRzLFxuICAgICAgICAgICAgdGhyb3dFcnJvck9uQnJva2VuU3ltYm9saWNMaW5rOiB0aGlzLl9zZXR0aW5ncy50aHJvd0Vycm9yT25Ccm9rZW5TeW1ib2xpY0xpbmssXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRoaXMuZW50cnlUcmFuc2Zvcm1lci5nZXRUcmFuc2Zvcm1lcigpXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9nZXRNaWNyb21hdGNoT3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRvdDogdGhpcy5fc2V0dGluZ3MuZG90LFxuICAgICAgICAgICAgbWF0Y2hCYXNlOiB0aGlzLl9zZXR0aW5ncy5iYXNlTmFtZU1hdGNoLFxuICAgICAgICAgICAgbm9icmFjZTogIXRoaXMuX3NldHRpbmdzLmJyYWNlRXhwYW5zaW9uLFxuICAgICAgICAgICAgbm9jYXNlOiAhdGhpcy5fc2V0dGluZ3MuY2FzZVNlbnNpdGl2ZU1hdGNoLFxuICAgICAgICAgICAgbm9leHQ6ICF0aGlzLl9zZXR0aW5ncy5leHRnbG9iLFxuICAgICAgICAgICAgbm9nbG9ic3RhcjogIXRoaXMuX3NldHRpbmdzLmdsb2JzdGFyLFxuICAgICAgICAgICAgcG9zaXg6IHRydWUsXG4gICAgICAgICAgICBzdHJpY3RTbGFzaGVzOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFByb3ZpZGVyO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgYXN5bmNfMSA9IHJlcXVpcmUoXCIuLi9yZWFkZXJzL2FzeW5jXCIpO1xuY29uc3QgcHJvdmlkZXJfMSA9IHJlcXVpcmUoXCIuL3Byb3ZpZGVyXCIpO1xuY2xhc3MgUHJvdmlkZXJBc3luYyBleHRlbmRzIHByb3ZpZGVyXzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuX3JlYWRlciA9IG5ldyBhc3luY18xLmRlZmF1bHQodGhpcy5fc2V0dGluZ3MpO1xuICAgIH1cbiAgICBhc3luYyByZWFkKHRhc2spIHtcbiAgICAgICAgY29uc3Qgcm9vdCA9IHRoaXMuX2dldFJvb3REaXJlY3RvcnkodGFzayk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLl9nZXRSZWFkZXJPcHRpb25zKHRhc2spO1xuICAgICAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgdGhpcy5hcGkocm9vdCwgdGFzaywgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBlbnRyaWVzLm1hcCgoZW50cnkpID0+IG9wdGlvbnMudHJhbnNmb3JtKGVudHJ5KSk7XG4gICAgfVxuICAgIGFwaShyb290LCB0YXNrLCBvcHRpb25zKSB7XG4gICAgICAgIGlmICh0YXNrLmR5bmFtaWMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWFkZXIuZHluYW1pYyhyb290LCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcmVhZGVyLnN0YXRpYyh0YXNrLnBhdHRlcm5zLCBvcHRpb25zKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBQcm92aWRlckFzeW5jO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3Qgc3RyZWFtXzEgPSByZXF1aXJlKFwic3RyZWFtXCIpO1xuY29uc3Qgc3RyZWFtXzIgPSByZXF1aXJlKFwiLi4vcmVhZGVycy9zdHJlYW1cIik7XG5jb25zdCBwcm92aWRlcl8xID0gcmVxdWlyZShcIi4vcHJvdmlkZXJcIik7XG5jbGFzcyBQcm92aWRlclN0cmVhbSBleHRlbmRzIHByb3ZpZGVyXzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuX3JlYWRlciA9IG5ldyBzdHJlYW1fMi5kZWZhdWx0KHRoaXMuX3NldHRpbmdzKTtcbiAgICB9XG4gICAgcmVhZCh0YXNrKSB7XG4gICAgICAgIGNvbnN0IHJvb3QgPSB0aGlzLl9nZXRSb290RGlyZWN0b3J5KHRhc2spO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5fZ2V0UmVhZGVyT3B0aW9ucyh0YXNrKTtcbiAgICAgICAgY29uc3Qgc291cmNlID0gdGhpcy5hcGkocm9vdCwgdGFzaywgb3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gbmV3IHN0cmVhbV8xLlJlYWRhYmxlKHsgb2JqZWN0TW9kZTogdHJ1ZSwgcmVhZDogKCkgPT4geyB9IH0pO1xuICAgICAgICBzb3VyY2VcbiAgICAgICAgICAgIC5vbmNlKCdlcnJvcicsIChlcnJvcikgPT4gZGVzdGluYXRpb24uZW1pdCgnZXJyb3InLCBlcnJvcikpXG4gICAgICAgICAgICAub24oJ2RhdGEnLCAoZW50cnkpID0+IGRlc3RpbmF0aW9uLmVtaXQoJ2RhdGEnLCBvcHRpb25zLnRyYW5zZm9ybShlbnRyeSkpKVxuICAgICAgICAgICAgLm9uY2UoJ2VuZCcsICgpID0+IGRlc3RpbmF0aW9uLmVtaXQoJ2VuZCcpKTtcbiAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgIC5vbmNlKCdjbG9zZScsICgpID0+IHNvdXJjZS5kZXN0cm95KCkpO1xuICAgICAgICByZXR1cm4gZGVzdGluYXRpb247XG4gICAgfVxuICAgIGFwaShyb290LCB0YXNrLCBvcHRpb25zKSB7XG4gICAgICAgIGlmICh0YXNrLmR5bmFtaWMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWFkZXIuZHluYW1pYyhyb290LCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcmVhZGVyLnN0YXRpYyh0YXNrLnBhdHRlcm5zLCBvcHRpb25zKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBQcm92aWRlclN0cmVhbTtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGZzU3RhdCA9IHJlcXVpcmUoXCJAbm9kZWxpYi9mcy5zdGF0XCIpO1xuY29uc3QgZnNXYWxrID0gcmVxdWlyZShcIkBub2RlbGliL2ZzLndhbGtcIik7XG5jb25zdCByZWFkZXJfMSA9IHJlcXVpcmUoXCIuL3JlYWRlclwiKTtcbmNsYXNzIFJlYWRlclN5bmMgZXh0ZW5kcyByZWFkZXJfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5fd2Fsa1N5bmMgPSBmc1dhbGsud2Fsa1N5bmM7XG4gICAgICAgIHRoaXMuX3N0YXRTeW5jID0gZnNTdGF0LnN0YXRTeW5jO1xuICAgIH1cbiAgICBkeW5hbWljKHJvb3QsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dhbGtTeW5jKHJvb3QsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBzdGF0aWMocGF0dGVybnMsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZW50cmllcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHBhdHRlcm4gb2YgcGF0dGVybnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVwYXRoID0gdGhpcy5fZ2V0RnVsbEVudHJ5UGF0aChwYXR0ZXJuKTtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5ID0gdGhpcy5fZ2V0RW50cnkoZmlsZXBhdGgsIHBhdHRlcm4sIG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKGVudHJ5ID09PSBudWxsIHx8ICFvcHRpb25zLmVudHJ5RmlsdGVyKGVudHJ5KSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZW50cmllcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW50cmllcztcbiAgICB9XG4gICAgX2dldEVudHJ5KGZpbGVwYXRoLCBwYXR0ZXJuLCBvcHRpb25zKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0cyA9IHRoaXMuX2dldFN0YXQoZmlsZXBhdGgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21ha2VFbnRyeShzdGF0cywgcGF0dGVybik7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5lcnJvckZpbHRlcihlcnJvcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9nZXRTdGF0KGZpbGVwYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0U3luYyhmaWxlcGF0aCwgdGhpcy5fZnNTdGF0U2V0dGluZ3MpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFJlYWRlclN5bmM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzeW5jXzEgPSByZXF1aXJlKFwiLi4vcmVhZGVycy9zeW5jXCIpO1xuY29uc3QgcHJvdmlkZXJfMSA9IHJlcXVpcmUoXCIuL3Byb3ZpZGVyXCIpO1xuY2xhc3MgUHJvdmlkZXJTeW5jIGV4dGVuZHMgcHJvdmlkZXJfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5fcmVhZGVyID0gbmV3IHN5bmNfMS5kZWZhdWx0KHRoaXMuX3NldHRpbmdzKTtcbiAgICB9XG4gICAgcmVhZCh0YXNrKSB7XG4gICAgICAgIGNvbnN0IHJvb3QgPSB0aGlzLl9nZXRSb290RGlyZWN0b3J5KHRhc2spO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5fZ2V0UmVhZGVyT3B0aW9ucyh0YXNrKTtcbiAgICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMuYXBpKHJvb3QsIHRhc2ssIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gZW50cmllcy5tYXAob3B0aW9ucy50cmFuc2Zvcm0pO1xuICAgIH1cbiAgICBhcGkocm9vdCwgdGFzaywgb3B0aW9ucykge1xuICAgICAgICBpZiAodGFzay5keW5hbWljKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVhZGVyLmR5bmFtaWMocm9vdCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWRlci5zdGF0aWModGFzay5wYXR0ZXJucywgb3B0aW9ucyk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUHJvdmlkZXJTeW5jO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5ERUZBVUxUX0ZJTEVfU1lTVEVNX0FEQVBURVIgPSB2b2lkIDA7XG5jb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcbmNvbnN0IG9zID0gcmVxdWlyZShcIm9zXCIpO1xuLyoqXG4gKiBUaGUgYG9zLmNwdXNgIG1ldGhvZCBjYW4gcmV0dXJuIHplcm8uIFdlIGV4cGVjdCB0aGUgbnVtYmVyIG9mIGNvcmVzIHRvIGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLlxuICogaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2Jsb2IvN2ZhZWRkZjIzYTk4YzUzODk2ZjhiNTc0YTZlNjY1ODllOGZiMWViOC9saWIvb3MuanMjTDEwNi1MMTA3XG4gKi9cbmNvbnN0IENQVV9DT1VOVCA9IE1hdGgubWF4KG9zLmNwdXMoKS5sZW5ndGgsIDEpO1xuZXhwb3J0cy5ERUZBVUxUX0ZJTEVfU1lTVEVNX0FEQVBURVIgPSB7XG4gICAgbHN0YXQ6IGZzLmxzdGF0LFxuICAgIGxzdGF0U3luYzogZnMubHN0YXRTeW5jLFxuICAgIHN0YXQ6IGZzLnN0YXQsXG4gICAgc3RhdFN5bmM6IGZzLnN0YXRTeW5jLFxuICAgIHJlYWRkaXI6IGZzLnJlYWRkaXIsXG4gICAgcmVhZGRpclN5bmM6IGZzLnJlYWRkaXJTeW5jXG59O1xuY2xhc3MgU2V0dGluZ3Mge1xuICAgIGNvbnN0cnVjdG9yKF9vcHRpb25zID0ge30pIHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IF9vcHRpb25zO1xuICAgICAgICB0aGlzLmFic29sdXRlID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy5hYnNvbHV0ZSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmJhc2VOYW1lTWF0Y2ggPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLl9vcHRpb25zLmJhc2VOYW1lTWF0Y2gsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5icmFjZUV4cGFuc2lvbiA9IHRoaXMuX2dldFZhbHVlKHRoaXMuX29wdGlvbnMuYnJhY2VFeHBhbnNpb24sIHRydWUpO1xuICAgICAgICB0aGlzLmNhc2VTZW5zaXRpdmVNYXRjaCA9IHRoaXMuX2dldFZhbHVlKHRoaXMuX29wdGlvbnMuY2FzZVNlbnNpdGl2ZU1hdGNoLCB0cnVlKTtcbiAgICAgICAgdGhpcy5jb25jdXJyZW5jeSA9IHRoaXMuX2dldFZhbHVlKHRoaXMuX29wdGlvbnMuY29uY3VycmVuY3ksIENQVV9DT1VOVCk7XG4gICAgICAgIHRoaXMuY3dkID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy5jd2QsIHByb2Nlc3MuY3dkKCkpO1xuICAgICAgICB0aGlzLmRlZXAgPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLl9vcHRpb25zLmRlZXAsIEluZmluaXR5KTtcbiAgICAgICAgdGhpcy5kb3QgPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLl9vcHRpb25zLmRvdCwgZmFsc2UpO1xuICAgICAgICB0aGlzLmV4dGdsb2IgPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLl9vcHRpb25zLmV4dGdsb2IsIHRydWUpO1xuICAgICAgICB0aGlzLmZvbGxvd1N5bWJvbGljTGlua3MgPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLl9vcHRpb25zLmZvbGxvd1N5bWJvbGljTGlua3MsIHRydWUpO1xuICAgICAgICB0aGlzLmZzID0gdGhpcy5fZ2V0RmlsZVN5c3RlbU1ldGhvZHModGhpcy5fb3B0aW9ucy5mcyk7XG4gICAgICAgIHRoaXMuZ2xvYnN0YXIgPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLl9vcHRpb25zLmdsb2JzdGFyLCB0cnVlKTtcbiAgICAgICAgdGhpcy5pZ25vcmUgPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLl9vcHRpb25zLmlnbm9yZSwgW10pO1xuICAgICAgICB0aGlzLm1hcmtEaXJlY3RvcmllcyA9IHRoaXMuX2dldFZhbHVlKHRoaXMuX29wdGlvbnMubWFya0RpcmVjdG9yaWVzLCBmYWxzZSk7XG4gICAgICAgIHRoaXMub2JqZWN0TW9kZSA9IHRoaXMuX2dldFZhbHVlKHRoaXMuX29wdGlvbnMub2JqZWN0TW9kZSwgZmFsc2UpO1xuICAgICAgICB0aGlzLm9ubHlEaXJlY3RvcmllcyA9IHRoaXMuX2dldFZhbHVlKHRoaXMuX29wdGlvbnMub25seURpcmVjdG9yaWVzLCBmYWxzZSk7XG4gICAgICAgIHRoaXMub25seUZpbGVzID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy5vbmx5RmlsZXMsIHRydWUpO1xuICAgICAgICB0aGlzLnN0YXRzID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy5zdGF0cywgZmFsc2UpO1xuICAgICAgICB0aGlzLnN1cHByZXNzRXJyb3JzID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy5zdXBwcmVzc0Vycm9ycywgZmFsc2UpO1xuICAgICAgICB0aGlzLnRocm93RXJyb3JPbkJyb2tlblN5bWJvbGljTGluayA9IHRoaXMuX2dldFZhbHVlKHRoaXMuX29wdGlvbnMudGhyb3dFcnJvck9uQnJva2VuU3ltYm9saWNMaW5rLCBmYWxzZSk7XG4gICAgICAgIHRoaXMudW5pcXVlID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy51bmlxdWUsIHRydWUpO1xuICAgICAgICBpZiAodGhpcy5vbmx5RGlyZWN0b3JpZXMpIHtcbiAgICAgICAgICAgIHRoaXMub25seUZpbGVzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhdHMpIHtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0TW9kZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2dldFZhbHVlKG9wdGlvbiwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbiA9PT0gdW5kZWZpbmVkID8gdmFsdWUgOiBvcHRpb247XG4gICAgfVxuICAgIF9nZXRGaWxlU3lzdGVtTWV0aG9kcyhtZXRob2RzID0ge30pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZXhwb3J0cy5ERUZBVUxUX0ZJTEVfU1lTVEVNX0FEQVBURVIpLCBtZXRob2RzKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBTZXR0aW5ncztcbiIsICJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IHRhc2tNYW5hZ2VyID0gcmVxdWlyZShcIi4vbWFuYWdlcnMvdGFza3NcIik7XG5jb25zdCBhc3luY18xID0gcmVxdWlyZShcIi4vcHJvdmlkZXJzL2FzeW5jXCIpO1xuY29uc3Qgc3RyZWFtXzEgPSByZXF1aXJlKFwiLi9wcm92aWRlcnMvc3RyZWFtXCIpO1xuY29uc3Qgc3luY18xID0gcmVxdWlyZShcIi4vcHJvdmlkZXJzL3N5bmNcIik7XG5jb25zdCBzZXR0aW5nc18xID0gcmVxdWlyZShcIi4vc2V0dGluZ3NcIik7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuYXN5bmMgZnVuY3Rpb24gRmFzdEdsb2Ioc291cmNlLCBvcHRpb25zKSB7XG4gICAgYXNzZXJ0UGF0dGVybnNJbnB1dChzb3VyY2UpO1xuICAgIGNvbnN0IHdvcmtzID0gZ2V0V29ya3Moc291cmNlLCBhc3luY18xLmRlZmF1bHQsIG9wdGlvbnMpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFByb21pc2UuYWxsKHdvcmtzKTtcbiAgICByZXR1cm4gdXRpbHMuYXJyYXkuZmxhdHRlbihyZXN1bHQpO1xufVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3R5cGVzY3JpcHQtZXNsaW50L3R5cGVzY3JpcHQtZXNsaW50L2lzc3Vlcy82MFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuKGZ1bmN0aW9uIChGYXN0R2xvYikge1xuICAgIEZhc3RHbG9iLmdsb2IgPSBGYXN0R2xvYjtcbiAgICBGYXN0R2xvYi5nbG9iU3luYyA9IHN5bmM7XG4gICAgRmFzdEdsb2IuZ2xvYlN0cmVhbSA9IHN0cmVhbTtcbiAgICBGYXN0R2xvYi5hc3luYyA9IEZhc3RHbG9iO1xuICAgIGZ1bmN0aW9uIHN5bmMoc291cmNlLCBvcHRpb25zKSB7XG4gICAgICAgIGFzc2VydFBhdHRlcm5zSW5wdXQoc291cmNlKTtcbiAgICAgICAgY29uc3Qgd29ya3MgPSBnZXRXb3Jrcyhzb3VyY2UsIHN5bmNfMS5kZWZhdWx0LCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmFycmF5LmZsYXR0ZW4od29ya3MpO1xuICAgIH1cbiAgICBGYXN0R2xvYi5zeW5jID0gc3luYztcbiAgICBmdW5jdGlvbiBzdHJlYW0oc291cmNlLCBvcHRpb25zKSB7XG4gICAgICAgIGFzc2VydFBhdHRlcm5zSW5wdXQoc291cmNlKTtcbiAgICAgICAgY29uc3Qgd29ya3MgPSBnZXRXb3Jrcyhzb3VyY2UsIHN0cmVhbV8xLmRlZmF1bHQsIG9wdGlvbnMpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHN0cmVhbSByZXR1cm5lZCBieSB0aGUgcHJvdmlkZXIgY2Fubm90IHdvcmsgd2l0aCBhbiBhc3luY2hyb25vdXMgaXRlcmF0b3IuXG4gICAgICAgICAqIFRvIHN1cHBvcnQgYXN5bmNocm9ub3VzIGl0ZXJhdG9ycywgcmVnYXJkbGVzcyBvZiB0aGUgbnVtYmVyIG9mIHRhc2tzLCB3ZSBhbHdheXMgbXVsdGlwbGV4IHN0cmVhbXMuXG4gICAgICAgICAqIFRoaXMgYWZmZWN0cyBwZXJmb3JtYW5jZSAoKzI1JSkuIEkgZG9uJ3Qgc2VlIGJlc3Qgc29sdXRpb24gcmlnaHQgbm93LlxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIHV0aWxzLnN0cmVhbS5tZXJnZSh3b3Jrcyk7XG4gICAgfVxuICAgIEZhc3RHbG9iLnN0cmVhbSA9IHN0cmVhbTtcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVRhc2tzKHNvdXJjZSwgb3B0aW9ucykge1xuICAgICAgICBhc3NlcnRQYXR0ZXJuc0lucHV0KHNvdXJjZSk7XG4gICAgICAgIGNvbnN0IHBhdHRlcm5zID0gW10uY29uY2F0KHNvdXJjZSk7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gbmV3IHNldHRpbmdzXzEuZGVmYXVsdChvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRhc2tNYW5hZ2VyLmdlbmVyYXRlKHBhdHRlcm5zLCBzZXR0aW5ncyk7XG4gICAgfVxuICAgIEZhc3RHbG9iLmdlbmVyYXRlVGFza3MgPSBnZW5lcmF0ZVRhc2tzO1xuICAgIGZ1bmN0aW9uIGlzRHluYW1pY1BhdHRlcm4oc291cmNlLCBvcHRpb25zKSB7XG4gICAgICAgIGFzc2VydFBhdHRlcm5zSW5wdXQoc291cmNlKTtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSBuZXcgc2V0dGluZ3NfMS5kZWZhdWx0KG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdXRpbHMucGF0dGVybi5pc0R5bmFtaWNQYXR0ZXJuKHNvdXJjZSwgc2V0dGluZ3MpO1xuICAgIH1cbiAgICBGYXN0R2xvYi5pc0R5bmFtaWNQYXR0ZXJuID0gaXNEeW5hbWljUGF0dGVybjtcbiAgICBmdW5jdGlvbiBlc2NhcGVQYXRoKHNvdXJjZSkge1xuICAgICAgICBhc3NlcnRQYXR0ZXJuc0lucHV0KHNvdXJjZSk7XG4gICAgICAgIHJldHVybiB1dGlscy5wYXRoLmVzY2FwZShzb3VyY2UpO1xuICAgIH1cbiAgICBGYXN0R2xvYi5lc2NhcGVQYXRoID0gZXNjYXBlUGF0aDtcbiAgICBmdW5jdGlvbiBjb252ZXJ0UGF0aFRvUGF0dGVybihzb3VyY2UpIHtcbiAgICAgICAgYXNzZXJ0UGF0dGVybnNJbnB1dChzb3VyY2UpO1xuICAgICAgICByZXR1cm4gdXRpbHMucGF0aC5jb252ZXJ0UGF0aFRvUGF0dGVybihzb3VyY2UpO1xuICAgIH1cbiAgICBGYXN0R2xvYi5jb252ZXJ0UGF0aFRvUGF0dGVybiA9IGNvbnZlcnRQYXRoVG9QYXR0ZXJuO1xuICAgIGxldCBwb3NpeDtcbiAgICAoZnVuY3Rpb24gKHBvc2l4KSB7XG4gICAgICAgIGZ1bmN0aW9uIGVzY2FwZVBhdGgoc291cmNlKSB7XG4gICAgICAgICAgICBhc3NlcnRQYXR0ZXJuc0lucHV0KHNvdXJjZSk7XG4gICAgICAgICAgICByZXR1cm4gdXRpbHMucGF0aC5lc2NhcGVQb3NpeFBhdGgoc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICBwb3NpeC5lc2NhcGVQYXRoID0gZXNjYXBlUGF0aDtcbiAgICAgICAgZnVuY3Rpb24gY29udmVydFBhdGhUb1BhdHRlcm4oc291cmNlKSB7XG4gICAgICAgICAgICBhc3NlcnRQYXR0ZXJuc0lucHV0KHNvdXJjZSk7XG4gICAgICAgICAgICByZXR1cm4gdXRpbHMucGF0aC5jb252ZXJ0UG9zaXhQYXRoVG9QYXR0ZXJuKHNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgICAgcG9zaXguY29udmVydFBhdGhUb1BhdHRlcm4gPSBjb252ZXJ0UGF0aFRvUGF0dGVybjtcbiAgICB9KShwb3NpeCA9IEZhc3RHbG9iLnBvc2l4IHx8IChGYXN0R2xvYi5wb3NpeCA9IHt9KSk7XG4gICAgbGV0IHdpbjMyO1xuICAgIChmdW5jdGlvbiAod2luMzIpIHtcbiAgICAgICAgZnVuY3Rpb24gZXNjYXBlUGF0aChzb3VyY2UpIHtcbiAgICAgICAgICAgIGFzc2VydFBhdHRlcm5zSW5wdXQoc291cmNlKTtcbiAgICAgICAgICAgIHJldHVybiB1dGlscy5wYXRoLmVzY2FwZVdpbmRvd3NQYXRoKHNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgICAgd2luMzIuZXNjYXBlUGF0aCA9IGVzY2FwZVBhdGg7XG4gICAgICAgIGZ1bmN0aW9uIGNvbnZlcnRQYXRoVG9QYXR0ZXJuKHNvdXJjZSkge1xuICAgICAgICAgICAgYXNzZXJ0UGF0dGVybnNJbnB1dChzb3VyY2UpO1xuICAgICAgICAgICAgcmV0dXJuIHV0aWxzLnBhdGguY29udmVydFdpbmRvd3NQYXRoVG9QYXR0ZXJuKHNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgICAgd2luMzIuY29udmVydFBhdGhUb1BhdHRlcm4gPSBjb252ZXJ0UGF0aFRvUGF0dGVybjtcbiAgICB9KSh3aW4zMiA9IEZhc3RHbG9iLndpbjMyIHx8IChGYXN0R2xvYi53aW4zMiA9IHt9KSk7XG59KShGYXN0R2xvYiB8fCAoRmFzdEdsb2IgPSB7fSkpO1xuZnVuY3Rpb24gZ2V0V29ya3Moc291cmNlLCBfUHJvdmlkZXIsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBwYXR0ZXJucyA9IFtdLmNvbmNhdChzb3VyY2UpO1xuICAgIGNvbnN0IHNldHRpbmdzID0gbmV3IHNldHRpbmdzXzEuZGVmYXVsdChvcHRpb25zKTtcbiAgICBjb25zdCB0YXNrcyA9IHRhc2tNYW5hZ2VyLmdlbmVyYXRlKHBhdHRlcm5zLCBzZXR0aW5ncyk7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgX1Byb3ZpZGVyKHNldHRpbmdzKTtcbiAgICByZXR1cm4gdGFza3MubWFwKHByb3ZpZGVyLnJlYWQsIHByb3ZpZGVyKTtcbn1cbmZ1bmN0aW9uIGFzc2VydFBhdHRlcm5zSW5wdXQoaW5wdXQpIHtcbiAgICBjb25zdCBzb3VyY2UgPSBbXS5jb25jYXQoaW5wdXQpO1xuICAgIGNvbnN0IGlzVmFsaWRTb3VyY2UgPSBzb3VyY2UuZXZlcnkoKGl0ZW0pID0+IHV0aWxzLnN0cmluZy5pc1N0cmluZyhpdGVtKSAmJiAhdXRpbHMuc3RyaW5nLmlzRW1wdHkoaXRlbSkpO1xuICAgIGlmICghaXNWYWxpZFNvdXJjZSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQYXR0ZXJucyBtdXN0IGJlIGEgc3RyaW5nIChub24gZW1wdHkpIG9yIGFuIGFycmF5IG9mIHN0cmluZ3MnKTtcbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IEZhc3RHbG9iO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3QgeyBSZWFkYWJsZSB9ID0gcmVxdWlyZSgnc3RyZWFtJyk7XG5jb25zdCBzeXNQYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgeyBwcm9taXNpZnkgfSA9IHJlcXVpcmUoJ3V0aWwnKTtcbmNvbnN0IHBpY29tYXRjaCA9IHJlcXVpcmUoJ3BpY29tYXRjaCcpO1xuXG5jb25zdCByZWFkZGlyID0gcHJvbWlzaWZ5KGZzLnJlYWRkaXIpO1xuY29uc3Qgc3RhdCA9IHByb21pc2lmeShmcy5zdGF0KTtcbmNvbnN0IGxzdGF0ID0gcHJvbWlzaWZ5KGZzLmxzdGF0KTtcbmNvbnN0IHJlYWxwYXRoID0gcHJvbWlzaWZ5KGZzLnJlYWxwYXRoKTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBFbnRyeUluZm9cbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBwYXRoXG4gKiBAcHJvcGVydHkge1N0cmluZ30gZnVsbFBhdGhcbiAqIEBwcm9wZXJ0eSB7ZnMuU3RhdHM9fSBzdGF0c1xuICogQHByb3BlcnR5IHtmcy5EaXJlbnQ9fSBkaXJlbnRcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBiYXNlbmFtZVxuICovXG5cbmNvbnN0IEJBTkcgPSAnISc7XG5jb25zdCBSRUNVUlNJVkVfRVJST1JfQ09ERSA9ICdSRUFERElSUF9SRUNVUlNJVkVfRVJST1InO1xuY29uc3QgTk9STUFMX0ZMT1dfRVJST1JTID0gbmV3IFNldChbJ0VOT0VOVCcsICdFUEVSTScsICdFQUNDRVMnLCAnRUxPT1AnLCBSRUNVUlNJVkVfRVJST1JfQ09ERV0pO1xuY29uc3QgRklMRV9UWVBFID0gJ2ZpbGVzJztcbmNvbnN0IERJUl9UWVBFID0gJ2RpcmVjdG9yaWVzJztcbmNvbnN0IEZJTEVfRElSX1RZUEUgPSAnZmlsZXNfZGlyZWN0b3JpZXMnO1xuY29uc3QgRVZFUllUSElOR19UWVBFID0gJ2FsbCc7XG5jb25zdCBBTExfVFlQRVMgPSBbRklMRV9UWVBFLCBESVJfVFlQRSwgRklMRV9ESVJfVFlQRSwgRVZFUllUSElOR19UWVBFXTtcblxuY29uc3QgaXNOb3JtYWxGbG93RXJyb3IgPSBlcnJvciA9PiBOT1JNQUxfRkxPV19FUlJPUlMuaGFzKGVycm9yLmNvZGUpO1xuY29uc3QgW21haiwgbWluXSA9IHByb2Nlc3MudmVyc2lvbnMubm9kZS5zcGxpdCgnLicpLnNsaWNlKDAsIDIpLm1hcChuID0+IE51bWJlci5wYXJzZUludChuLCAxMCkpO1xuY29uc3Qgd2FudEJpZ2ludEZzU3RhdHMgPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInICYmIChtYWogPiAxMCB8fCAobWFqID09PSAxMCAmJiBtaW4gPj0gNSkpO1xuXG5jb25zdCBub3JtYWxpemVGaWx0ZXIgPSBmaWx0ZXIgPT4ge1xuICBpZiAoZmlsdGVyID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgaWYgKHR5cGVvZiBmaWx0ZXIgPT09ICdmdW5jdGlvbicpIHJldHVybiBmaWx0ZXI7XG5cbiAgaWYgKHR5cGVvZiBmaWx0ZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgZ2xvYiA9IHBpY29tYXRjaChmaWx0ZXIudHJpbSgpKTtcbiAgICByZXR1cm4gZW50cnkgPT4gZ2xvYihlbnRyeS5iYXNlbmFtZSk7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShmaWx0ZXIpKSB7XG4gICAgY29uc3QgcG9zaXRpdmUgPSBbXTtcbiAgICBjb25zdCBuZWdhdGl2ZSA9IFtdO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBmaWx0ZXIpIHtcbiAgICAgIGNvbnN0IHRyaW1tZWQgPSBpdGVtLnRyaW0oKTtcbiAgICAgIGlmICh0cmltbWVkLmNoYXJBdCgwKSA9PT0gQkFORykge1xuICAgICAgICBuZWdhdGl2ZS5wdXNoKHBpY29tYXRjaCh0cmltbWVkLnNsaWNlKDEpKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3NpdGl2ZS5wdXNoKHBpY29tYXRjaCh0cmltbWVkKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5lZ2F0aXZlLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChwb3NpdGl2ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiBlbnRyeSA9PlxuICAgICAgICAgIHBvc2l0aXZlLnNvbWUoZiA9PiBmKGVudHJ5LmJhc2VuYW1lKSkgJiYgIW5lZ2F0aXZlLnNvbWUoZiA9PiBmKGVudHJ5LmJhc2VuYW1lKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZW50cnkgPT4gIW5lZ2F0aXZlLnNvbWUoZiA9PiBmKGVudHJ5LmJhc2VuYW1lKSk7XG4gICAgfVxuICAgIHJldHVybiBlbnRyeSA9PiBwb3NpdGl2ZS5zb21lKGYgPT4gZihlbnRyeS5iYXNlbmFtZSkpO1xuICB9XG59O1xuXG5jbGFzcyBSZWFkZGlycFN0cmVhbSBleHRlbmRzIFJlYWRhYmxlIHtcbiAgc3RhdGljIGdldCBkZWZhdWx0T3B0aW9ucygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcm9vdDogJy4nLFxuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICAgIGZpbGVGaWx0ZXI6IChwYXRoKSA9PiB0cnVlLFxuICAgICAgZGlyZWN0b3J5RmlsdGVyOiAocGF0aCkgPT4gdHJ1ZSxcbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICAgIHR5cGU6IEZJTEVfVFlQRSxcbiAgICAgIGxzdGF0OiBmYWxzZSxcbiAgICAgIGRlcHRoOiAyMTQ3NDgzNjQ4LFxuICAgICAgYWx3YXlzU3RhdDogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIoe1xuICAgICAgb2JqZWN0TW9kZTogdHJ1ZSxcbiAgICAgIGF1dG9EZXN0cm95OiB0cnVlLFxuICAgICAgaGlnaFdhdGVyTWFyazogb3B0aW9ucy5oaWdoV2F0ZXJNYXJrIHx8IDQwOTZcbiAgICB9KTtcbiAgICBjb25zdCBvcHRzID0geyAuLi5SZWFkZGlycFN0cmVhbS5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9ucyB9O1xuICAgIGNvbnN0IHsgcm9vdCwgdHlwZSB9ID0gb3B0cztcblxuICAgIHRoaXMuX2ZpbGVGaWx0ZXIgPSBub3JtYWxpemVGaWx0ZXIob3B0cy5maWxlRmlsdGVyKTtcbiAgICB0aGlzLl9kaXJlY3RvcnlGaWx0ZXIgPSBub3JtYWxpemVGaWx0ZXIob3B0cy5kaXJlY3RvcnlGaWx0ZXIpO1xuXG4gICAgY29uc3Qgc3RhdE1ldGhvZCA9IG9wdHMubHN0YXQgPyBsc3RhdCA6IHN0YXQ7XG4gICAgLy8gVXNlIGJpZ2ludCBzdGF0cyBpZiBpdCdzIHdpbmRvd3MgYW5kIHN0YXQoKSBzdXBwb3J0cyBvcHRpb25zIChub2RlIDEwKykuXG4gICAgaWYgKHdhbnRCaWdpbnRGc1N0YXRzKSB7XG4gICAgICB0aGlzLl9zdGF0ID0gcGF0aCA9PiBzdGF0TWV0aG9kKHBhdGgsIHsgYmlnaW50OiB0cnVlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zdGF0ID0gc3RhdE1ldGhvZDtcbiAgICB9XG5cbiAgICB0aGlzLl9tYXhEZXB0aCA9IG9wdHMuZGVwdGg7XG4gICAgdGhpcy5fd2FudHNEaXIgPSBbRElSX1RZUEUsIEZJTEVfRElSX1RZUEUsIEVWRVJZVEhJTkdfVFlQRV0uaW5jbHVkZXModHlwZSk7XG4gICAgdGhpcy5fd2FudHNGaWxlID0gW0ZJTEVfVFlQRSwgRklMRV9ESVJfVFlQRSwgRVZFUllUSElOR19UWVBFXS5pbmNsdWRlcyh0eXBlKTtcbiAgICB0aGlzLl93YW50c0V2ZXJ5dGhpbmcgPSB0eXBlID09PSBFVkVSWVRISU5HX1RZUEU7XG4gICAgdGhpcy5fcm9vdCA9IHN5c1BhdGgucmVzb2x2ZShyb290KTtcbiAgICB0aGlzLl9pc0RpcmVudCA9ICgnRGlyZW50JyBpbiBmcykgJiYgIW9wdHMuYWx3YXlzU3RhdDtcbiAgICB0aGlzLl9zdGF0c1Byb3AgPSB0aGlzLl9pc0RpcmVudCA/ICdkaXJlbnQnIDogJ3N0YXRzJztcbiAgICB0aGlzLl9yZE9wdGlvbnMgPSB7IGVuY29kaW5nOiAndXRmOCcsIHdpdGhGaWxlVHlwZXM6IHRoaXMuX2lzRGlyZW50IH07XG5cbiAgICAvLyBMYXVuY2ggc3RyZWFtIHdpdGggb25lIHBhcmVudCwgdGhlIHJvb3QgZGlyLlxuICAgIHRoaXMucGFyZW50cyA9IFt0aGlzLl9leHBsb3JlRGlyKHJvb3QsIDEpXTtcbiAgICB0aGlzLnJlYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnBhcmVudCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGFzeW5jIF9yZWFkKGJhdGNoKSB7XG4gICAgaWYgKHRoaXMucmVhZGluZykgcmV0dXJuO1xuICAgIHRoaXMucmVhZGluZyA9IHRydWU7XG5cbiAgICB0cnkge1xuICAgICAgd2hpbGUgKCF0aGlzLmRlc3Ryb3llZCAmJiBiYXRjaCA+IDApIHtcbiAgICAgICAgY29uc3QgeyBwYXRoLCBkZXB0aCwgZmlsZXMgPSBbXSB9ID0gdGhpcy5wYXJlbnQgfHwge307XG5cbiAgICAgICAgaWYgKGZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBzbGljZSA9IGZpbGVzLnNwbGljZSgwLCBiYXRjaCkubWFwKGRpcmVudCA9PiB0aGlzLl9mb3JtYXRFbnRyeShkaXJlbnQsIHBhdGgpKTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGF3YWl0IFByb21pc2UuYWxsKHNsaWNlKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSByZXR1cm47XG5cbiAgICAgICAgICAgIGNvbnN0IGVudHJ5VHlwZSA9IGF3YWl0IHRoaXMuX2dldEVudHJ5VHlwZShlbnRyeSk7XG4gICAgICAgICAgICBpZiAoZW50cnlUeXBlID09PSAnZGlyZWN0b3J5JyAmJiB0aGlzLl9kaXJlY3RvcnlGaWx0ZXIoZW50cnkpKSB7XG4gICAgICAgICAgICAgIGlmIChkZXB0aCA8PSB0aGlzLl9tYXhEZXB0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50cy5wdXNoKHRoaXMuX2V4cGxvcmVEaXIoZW50cnkuZnVsbFBhdGgsIGRlcHRoICsgMSkpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMuX3dhbnRzRGlyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgICAgICBiYXRjaC0tO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKChlbnRyeVR5cGUgPT09ICdmaWxlJyB8fCB0aGlzLl9pbmNsdWRlQXNGaWxlKGVudHJ5KSkgJiYgdGhpcy5fZmlsZUZpbHRlcihlbnRyeSkpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuX3dhbnRzRmlsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHVzaChlbnRyeSk7XG4gICAgICAgICAgICAgICAgYmF0Y2gtLTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudHMucG9wKCk7XG4gICAgICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMucHVzaChudWxsKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnBhcmVudCA9IGF3YWl0IHBhcmVudDtcbiAgICAgICAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmRlc3Ryb3koZXJyb3IpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLnJlYWRpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBfZXhwbG9yZURpcihwYXRoLCBkZXB0aCkge1xuICAgIGxldCBmaWxlcztcbiAgICB0cnkge1xuICAgICAgZmlsZXMgPSBhd2FpdCByZWFkZGlyKHBhdGgsIHRoaXMuX3JkT3B0aW9ucyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuX29uRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgICByZXR1cm4geyBmaWxlcywgZGVwdGgsIHBhdGggfTtcbiAgfVxuXG4gIGFzeW5jIF9mb3JtYXRFbnRyeShkaXJlbnQsIHBhdGgpIHtcbiAgICBsZXQgZW50cnk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGJhc2VuYW1lID0gdGhpcy5faXNEaXJlbnQgPyBkaXJlbnQubmFtZSA6IGRpcmVudDtcbiAgICAgIGNvbnN0IGZ1bGxQYXRoID0gc3lzUGF0aC5yZXNvbHZlKHN5c1BhdGguam9pbihwYXRoLCBiYXNlbmFtZSkpO1xuICAgICAgZW50cnkgPSB7IHBhdGg6IHN5c1BhdGgucmVsYXRpdmUodGhpcy5fcm9vdCwgZnVsbFBhdGgpLCBmdWxsUGF0aCwgYmFzZW5hbWUgfTtcbiAgICAgIGVudHJ5W3RoaXMuX3N0YXRzUHJvcF0gPSB0aGlzLl9pc0RpcmVudCA/IGRpcmVudCA6IGF3YWl0IHRoaXMuX3N0YXQoZnVsbFBhdGgpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5fb25FcnJvcihlcnIpO1xuICAgIH1cbiAgICByZXR1cm4gZW50cnk7XG4gIH1cblxuICBfb25FcnJvcihlcnIpIHtcbiAgICBpZiAoaXNOb3JtYWxGbG93RXJyb3IoZXJyKSAmJiAhdGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgIHRoaXMuZW1pdCgnd2FybicsIGVycik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVzdHJveShlcnIpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIF9nZXRFbnRyeVR5cGUoZW50cnkpIHtcbiAgICAvLyBlbnRyeSBtYXkgYmUgdW5kZWZpbmVkLCBiZWNhdXNlIGEgd2FybmluZyBvciBhbiBlcnJvciB3ZXJlIGVtaXR0ZWRcbiAgICAvLyBhbmQgdGhlIHN0YXRzUHJvcCBpcyB1bmRlZmluZWRcbiAgICBjb25zdCBzdGF0cyA9IGVudHJ5ICYmIGVudHJ5W3RoaXMuX3N0YXRzUHJvcF07XG4gICAgaWYgKCFzdGF0cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc3RhdHMuaXNGaWxlKCkpIHtcbiAgICAgIHJldHVybiAnZmlsZSc7XG4gICAgfVxuICAgIGlmIChzdGF0cy5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICByZXR1cm4gJ2RpcmVjdG9yeSc7XG4gICAgfVxuICAgIGlmIChzdGF0cyAmJiBzdGF0cy5pc1N5bWJvbGljTGluaygpKSB7XG4gICAgICBjb25zdCBmdWxsID0gZW50cnkuZnVsbFBhdGg7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBlbnRyeVJlYWxQYXRoID0gYXdhaXQgcmVhbHBhdGgoZnVsbCk7XG4gICAgICAgIGNvbnN0IGVudHJ5UmVhbFBhdGhTdGF0cyA9IGF3YWl0IGxzdGF0KGVudHJ5UmVhbFBhdGgpO1xuICAgICAgICBpZiAoZW50cnlSZWFsUGF0aFN0YXRzLmlzRmlsZSgpKSB7XG4gICAgICAgICAgcmV0dXJuICdmaWxlJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW50cnlSZWFsUGF0aFN0YXRzLmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgICBjb25zdCBsZW4gPSBlbnRyeVJlYWxQYXRoLmxlbmd0aDtcbiAgICAgICAgICBpZiAoZnVsbC5zdGFydHNXaXRoKGVudHJ5UmVhbFBhdGgpICYmIGZ1bGwuc3Vic3RyKGxlbiwgMSkgPT09IHN5c1BhdGguc2VwKSB7XG4gICAgICAgICAgICBjb25zdCByZWN1cnNpdmVFcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgYENpcmN1bGFyIHN5bWxpbmsgZGV0ZWN0ZWQ6IFwiJHtmdWxsfVwiIHBvaW50cyB0byBcIiR7ZW50cnlSZWFsUGF0aH1cImBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZWN1cnNpdmVFcnJvci5jb2RlID0gUkVDVVJTSVZFX0VSUk9SX0NPREU7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb25FcnJvcihyZWN1cnNpdmVFcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAnZGlyZWN0b3J5JztcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5fb25FcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2luY2x1ZGVBc0ZpbGUoZW50cnkpIHtcbiAgICBjb25zdCBzdGF0cyA9IGVudHJ5ICYmIGVudHJ5W3RoaXMuX3N0YXRzUHJvcF07XG5cbiAgICByZXR1cm4gc3RhdHMgJiYgdGhpcy5fd2FudHNFdmVyeXRoaW5nICYmICFzdGF0cy5pc0RpcmVjdG9yeSgpO1xuICB9XG59XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gUmVhZGRpcnBBcmd1bWVudHNcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb249fSBmaWxlRmlsdGVyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9uPX0gZGlyZWN0b3J5RmlsdGVyXG4gKiBAcHJvcGVydHkge1N0cmluZz19IHR5cGVcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyPX0gZGVwdGhcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nPX0gcm9vdFxuICogQHByb3BlcnR5IHtCb29sZWFuPX0gbHN0YXRcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbj19IGJpZ2ludFxuICovXG5cbi8qKlxuICogTWFpbiBmdW5jdGlvbiB3aGljaCBlbmRzIHVwIGNhbGxpbmcgcmVhZGRpclJlYyBhbmQgcmVhZHMgYWxsIGZpbGVzIGFuZCBkaXJlY3RvcmllcyBpbiBnaXZlbiByb290IHJlY3Vyc2l2ZWx5LlxuICogQHBhcmFtIHtTdHJpbmd9IHJvb3QgUm9vdCBkaXJlY3RvcnlcbiAqIEBwYXJhbSB7UmVhZGRpcnBBcmd1bWVudHM9fSBvcHRpb25zIE9wdGlvbnMgdG8gc3BlY2lmeSByb290IChzdGFydCBkaXJlY3RvcnkpLCBmaWx0ZXJzIGFuZCByZWN1cnNpb24gZGVwdGhcbiAqL1xuY29uc3QgcmVhZGRpcnAgPSAocm9vdCwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIGxldCB0eXBlID0gb3B0aW9ucy5lbnRyeVR5cGUgfHwgb3B0aW9ucy50eXBlO1xuICBpZiAodHlwZSA9PT0gJ2JvdGgnKSB0eXBlID0gRklMRV9ESVJfVFlQRTsgLy8gYmFja3dhcmRzLWNvbXBhdGliaWxpdHlcbiAgaWYgKHR5cGUpIG9wdGlvbnMudHlwZSA9IHR5cGU7XG4gIGlmICghcm9vdCkge1xuICAgIHRocm93IG5ldyBFcnJvcigncmVhZGRpcnA6IHJvb3QgYXJndW1lbnQgaXMgcmVxdWlyZWQuIFVzYWdlOiByZWFkZGlycChyb290LCBvcHRpb25zKScpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiByb290ICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3JlYWRkaXJwOiByb290IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcuIFVzYWdlOiByZWFkZGlycChyb290LCBvcHRpb25zKScpO1xuICB9IGVsc2UgaWYgKHR5cGUgJiYgIUFMTF9UWVBFUy5pbmNsdWRlcyh0eXBlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgcmVhZGRpcnA6IEludmFsaWQgdHlwZSBwYXNzZWQuIFVzZSBvbmUgb2YgJHtBTExfVFlQRVMuam9pbignLCAnKX1gKTtcbiAgfVxuXG4gIG9wdGlvbnMucm9vdCA9IHJvb3Q7XG4gIHJldHVybiBuZXcgUmVhZGRpcnBTdHJlYW0ob3B0aW9ucyk7XG59O1xuXG5jb25zdCByZWFkZGlycFByb21pc2UgPSAocm9vdCwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgZmlsZXMgPSBbXTtcbiAgICByZWFkZGlycChyb290LCBvcHRpb25zKVxuICAgICAgLm9uKCdkYXRhJywgZW50cnkgPT4gZmlsZXMucHVzaChlbnRyeSkpXG4gICAgICAub24oJ2VuZCcsICgpID0+IHJlc29sdmUoZmlsZXMpKVxuICAgICAgLm9uKCdlcnJvcicsIGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICB9KTtcbn07XG5cbnJlYWRkaXJwLnByb21pc2UgPSByZWFkZGlycFByb21pc2U7XG5yZWFkZGlycC5SZWFkZGlycFN0cmVhbSA9IFJlYWRkaXJwU3RyZWFtO1xucmVhZGRpcnAuZGVmYXVsdCA9IHJlYWRkaXJwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlYWRkaXJwO1xuIiwgIi8qIVxuICogbm9ybWFsaXplLXBhdGggPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L25vcm1hbGl6ZS1wYXRoPlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE4LCBKb24gU2NobGlua2VydC5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHBhdGgsIHN0cmlwVHJhaWxpbmcpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4cGVjdGVkIHBhdGggdG8gYmUgYSBzdHJpbmcnKTtcbiAgfVxuXG4gIGlmIChwYXRoID09PSAnXFxcXCcgfHwgcGF0aCA9PT0gJy8nKSByZXR1cm4gJy8nO1xuXG4gIHZhciBsZW4gPSBwYXRoLmxlbmd0aDtcbiAgaWYgKGxlbiA8PSAxKSByZXR1cm4gcGF0aDtcblxuICAvLyBlbnN1cmUgdGhhdCB3aW4zMiBuYW1lc3BhY2VzIGhhcyB0d28gbGVhZGluZyBzbGFzaGVzLCBzbyB0aGF0IHRoZSBwYXRoIGlzXG4gIC8vIGhhbmRsZWQgcHJvcGVybHkgYnkgdGhlIHdpbjMyIHZlcnNpb24gb2YgcGF0aC5wYXJzZSgpIGFmdGVyIGJlaW5nIG5vcm1hbGl6ZWRcbiAgLy8gaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vbGlicmFyeS93aW5kb3dzL2Rlc2t0b3AvYWEzNjUyNDcodj12cy44NSkuYXNweCNuYW1lc3BhY2VzXG4gIHZhciBwcmVmaXggPSAnJztcbiAgaWYgKGxlbiA+IDQgJiYgcGF0aFszXSA9PT0gJ1xcXFwnKSB7XG4gICAgdmFyIGNoID0gcGF0aFsyXTtcbiAgICBpZiAoKGNoID09PSAnPycgfHwgY2ggPT09ICcuJykgJiYgcGF0aC5zbGljZSgwLCAyKSA9PT0gJ1xcXFxcXFxcJykge1xuICAgICAgcGF0aCA9IHBhdGguc2xpY2UoMik7XG4gICAgICBwcmVmaXggPSAnLy8nO1xuICAgIH1cbiAgfVxuXG4gIHZhciBzZWdzID0gcGF0aC5zcGxpdCgvWy9cXFxcXSsvKTtcbiAgaWYgKHN0cmlwVHJhaWxpbmcgIT09IGZhbHNlICYmIHNlZ3Nbc2Vncy5sZW5ndGggLSAxXSA9PT0gJycpIHtcbiAgICBzZWdzLnBvcCgpO1xuICB9XG4gIHJldHVybiBwcmVmaXggKyBzZWdzLmpvaW4oJy8nKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5cbmNvbnN0IHBpY29tYXRjaCA9IHJlcXVpcmUoJ3BpY29tYXRjaCcpO1xuY29uc3Qgbm9ybWFsaXplUGF0aCA9IHJlcXVpcmUoJ25vcm1hbGl6ZS1wYXRoJyk7XG5cbi8qKlxuICogQHR5cGVkZWYgeyh0ZXN0U3RyaW5nOiBzdHJpbmcpID0+IGJvb2xlYW59IEFueW1hdGNoRm5cbiAqIEB0eXBlZGVmIHtzdHJpbmd8UmVnRXhwfEFueW1hdGNoRm59IEFueW1hdGNoUGF0dGVyblxuICogQHR5cGVkZWYge0FueW1hdGNoUGF0dGVybnxBbnltYXRjaFBhdHRlcm5bXX0gQW55bWF0Y2hNYXRjaGVyXG4gKi9cbmNvbnN0IEJBTkcgPSAnISc7XG5jb25zdCBERUZBVUxUX09QVElPTlMgPSB7cmV0dXJuSW5kZXg6IGZhbHNlfTtcbmNvbnN0IGFycmlmeSA9IChpdGVtKSA9PiBBcnJheS5pc0FycmF5KGl0ZW0pID8gaXRlbSA6IFtpdGVtXTtcblxuLyoqXG4gKiBAcGFyYW0ge0FueW1hdGNoUGF0dGVybn0gbWF0Y2hlclxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtBbnltYXRjaEZufVxuICovXG5jb25zdCBjcmVhdGVQYXR0ZXJuID0gKG1hdGNoZXIsIG9wdGlvbnMpID0+IHtcbiAgaWYgKHR5cGVvZiBtYXRjaGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1hdGNoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiBtYXRjaGVyID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IGdsb2IgPSBwaWNvbWF0Y2gobWF0Y2hlciwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIChzdHJpbmcpID0+IG1hdGNoZXIgPT09IHN0cmluZyB8fCBnbG9iKHN0cmluZyk7XG4gIH1cbiAgaWYgKG1hdGNoZXIgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICByZXR1cm4gKHN0cmluZykgPT4gbWF0Y2hlci50ZXN0KHN0cmluZyk7XG4gIH1cbiAgcmV0dXJuIChzdHJpbmcpID0+IGZhbHNlO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PEZ1bmN0aW9uPn0gcGF0dGVybnNcbiAqIEBwYXJhbSB7QXJyYXk8RnVuY3Rpb24+fSBuZWdQYXR0ZXJuc1xuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IGFyZ3NcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcmV0dXJuSW5kZXhcbiAqIEByZXR1cm5zIHtib29sZWFufG51bWJlcn1cbiAqL1xuY29uc3QgbWF0Y2hQYXR0ZXJucyA9IChwYXR0ZXJucywgbmVnUGF0dGVybnMsIGFyZ3MsIHJldHVybkluZGV4KSA9PiB7XG4gIGNvbnN0IGlzTGlzdCA9IEFycmF5LmlzQXJyYXkoYXJncyk7XG4gIGNvbnN0IF9wYXRoID0gaXNMaXN0ID8gYXJnc1swXSA6IGFyZ3M7XG4gIGlmICghaXNMaXN0ICYmIHR5cGVvZiBfcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhbnltYXRjaDogc2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmc6IGdvdCAnICtcbiAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChfcGF0aCkpXG4gIH1cbiAgY29uc3QgcGF0aCA9IG5vcm1hbGl6ZVBhdGgoX3BhdGgsIGZhbHNlKTtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbmVnUGF0dGVybnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3Qgbmdsb2IgPSBuZWdQYXR0ZXJuc1tpbmRleF07XG4gICAgaWYgKG5nbG9iKHBhdGgpKSB7XG4gICAgICByZXR1cm4gcmV0dXJuSW5kZXggPyAtMSA6IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGFwcGxpZWQgPSBpc0xpc3QgJiYgW3BhdGhdLmNvbmNhdChhcmdzLnNsaWNlKDEpKTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBhdHRlcm5zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IHBhdHRlcm4gPSBwYXR0ZXJuc1tpbmRleF07XG4gICAgaWYgKGlzTGlzdCA/IHBhdHRlcm4oLi4uYXBwbGllZCkgOiBwYXR0ZXJuKHBhdGgpKSB7XG4gICAgICByZXR1cm4gcmV0dXJuSW5kZXggPyBpbmRleCA6IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJldHVybkluZGV4ID8gLTEgOiBmYWxzZTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtBbnltYXRjaE1hdGNoZXJ9IG1hdGNoZXJzXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gdGVzdFN0cmluZ1xuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtib29sZWFufG51bWJlcnxGdW5jdGlvbn1cbiAqL1xuY29uc3QgYW55bWF0Y2ggPSAobWF0Y2hlcnMsIHRlc3RTdHJpbmcsIG9wdGlvbnMgPSBERUZBVUxUX09QVElPTlMpID0+IHtcbiAgaWYgKG1hdGNoZXJzID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhbnltYXRjaDogc3BlY2lmeSBmaXJzdCBhcmd1bWVudCcpO1xuICB9XG4gIGNvbnN0IG9wdHMgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Jvb2xlYW4nID8ge3JldHVybkluZGV4OiBvcHRpb25zfSA6IG9wdGlvbnM7XG4gIGNvbnN0IHJldHVybkluZGV4ID0gb3B0cy5yZXR1cm5JbmRleCB8fCBmYWxzZTtcblxuICAvLyBFYXJseSBjYWNoZSBmb3IgbWF0Y2hlcnMuXG4gIGNvbnN0IG10Y2hlcnMgPSBhcnJpZnkobWF0Y2hlcnMpO1xuICBjb25zdCBuZWdhdGVkR2xvYnMgPSBtdGNoZXJzXG4gICAgLmZpbHRlcihpdGVtID0+IHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJyAmJiBpdGVtLmNoYXJBdCgwKSA9PT0gQkFORylcbiAgICAubWFwKGl0ZW0gPT4gaXRlbS5zbGljZSgxKSlcbiAgICAubWFwKGl0ZW0gPT4gcGljb21hdGNoKGl0ZW0sIG9wdHMpKTtcbiAgY29uc3QgcGF0dGVybnMgPSBtdGNoZXJzXG4gICAgLmZpbHRlcihpdGVtID0+IHR5cGVvZiBpdGVtICE9PSAnc3RyaW5nJyB8fCAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnICYmIGl0ZW0uY2hhckF0KDApICE9PSBCQU5HKSlcbiAgICAubWFwKG1hdGNoZXIgPT4gY3JlYXRlUGF0dGVybihtYXRjaGVyLCBvcHRzKSk7XG5cbiAgaWYgKHRlc3RTdHJpbmcgPT0gbnVsbCkge1xuICAgIHJldHVybiAodGVzdFN0cmluZywgcmkgPSBmYWxzZSkgPT4ge1xuICAgICAgY29uc3QgcmV0dXJuSW5kZXggPSB0eXBlb2YgcmkgPT09ICdib29sZWFuJyA/IHJpIDogZmFsc2U7XG4gICAgICByZXR1cm4gbWF0Y2hQYXR0ZXJucyhwYXR0ZXJucywgbmVnYXRlZEdsb2JzLCB0ZXN0U3RyaW5nLCByZXR1cm5JbmRleCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1hdGNoUGF0dGVybnMocGF0dGVybnMsIG5lZ2F0ZWRHbG9icywgdGVzdFN0cmluZywgcmV0dXJuSW5kZXgpO1xufTtcblxuYW55bWF0Y2guZGVmYXVsdCA9IGFueW1hdGNoO1xubW9kdWxlLmV4cG9ydHMgPSBhbnltYXRjaDtcbiIsICJbXG5cdFwiM2RtXCIsXG5cdFwiM2RzXCIsXG5cdFwiM2cyXCIsXG5cdFwiM2dwXCIsXG5cdFwiN3pcIixcblx0XCJhXCIsXG5cdFwiYWFjXCIsXG5cdFwiYWRwXCIsXG5cdFwiYWlcIixcblx0XCJhaWZcIixcblx0XCJhaWZmXCIsXG5cdFwiYWx6XCIsXG5cdFwiYXBlXCIsXG5cdFwiYXBrXCIsXG5cdFwiYXBwaW1hZ2VcIixcblx0XCJhclwiLFxuXHRcImFyalwiLFxuXHRcImFzZlwiLFxuXHRcImF1XCIsXG5cdFwiYXZpXCIsXG5cdFwiYmFrXCIsXG5cdFwiYmFtbFwiLFxuXHRcImJoXCIsXG5cdFwiYmluXCIsXG5cdFwiYmtcIixcblx0XCJibXBcIixcblx0XCJidGlmXCIsXG5cdFwiYnoyXCIsXG5cdFwiYnppcDJcIixcblx0XCJjYWJcIixcblx0XCJjYWZcIixcblx0XCJjZ21cIixcblx0XCJjbGFzc1wiLFxuXHRcImNteFwiLFxuXHRcImNwaW9cIixcblx0XCJjcjJcIixcblx0XCJjdXJcIixcblx0XCJkYXRcIixcblx0XCJkY21cIixcblx0XCJkZWJcIixcblx0XCJkZXhcIixcblx0XCJkanZ1XCIsXG5cdFwiZGxsXCIsXG5cdFwiZG1nXCIsXG5cdFwiZG5nXCIsXG5cdFwiZG9jXCIsXG5cdFwiZG9jbVwiLFxuXHRcImRvY3hcIixcblx0XCJkb3RcIixcblx0XCJkb3RtXCIsXG5cdFwiZHJhXCIsXG5cdFwiRFNfU3RvcmVcIixcblx0XCJkc2tcIixcblx0XCJkdHNcIixcblx0XCJkdHNoZFwiLFxuXHRcImR2YlwiLFxuXHRcImR3Z1wiLFxuXHRcImR4ZlwiLFxuXHRcImVjZWxwNDgwMFwiLFxuXHRcImVjZWxwNzQ3MFwiLFxuXHRcImVjZWxwOTYwMFwiLFxuXHRcImVnZ1wiLFxuXHRcImVvbFwiLFxuXHRcImVvdFwiLFxuXHRcImVwdWJcIixcblx0XCJleGVcIixcblx0XCJmNHZcIixcblx0XCJmYnNcIixcblx0XCJmaFwiLFxuXHRcImZsYVwiLFxuXHRcImZsYWNcIixcblx0XCJmbGF0cGFrXCIsXG5cdFwiZmxpXCIsXG5cdFwiZmx2XCIsXG5cdFwiZnB4XCIsXG5cdFwiZnN0XCIsXG5cdFwiZnZ0XCIsXG5cdFwiZzNcIixcblx0XCJnaFwiLFxuXHRcImdpZlwiLFxuXHRcImdyYWZmbGVcIixcblx0XCJnelwiLFxuXHRcImd6aXBcIixcblx0XCJoMjYxXCIsXG5cdFwiaDI2M1wiLFxuXHRcImgyNjRcIixcblx0XCJpY25zXCIsXG5cdFwiaWNvXCIsXG5cdFwiaWVmXCIsXG5cdFwiaW1nXCIsXG5cdFwiaXBhXCIsXG5cdFwiaXNvXCIsXG5cdFwiamFyXCIsXG5cdFwianBlZ1wiLFxuXHRcImpwZ1wiLFxuXHRcImpwZ3ZcIixcblx0XCJqcG1cIixcblx0XCJqeHJcIixcblx0XCJrZXlcIixcblx0XCJrdHhcIixcblx0XCJsaGFcIixcblx0XCJsaWJcIixcblx0XCJsdnBcIixcblx0XCJselwiLFxuXHRcImx6aFwiLFxuXHRcImx6bWFcIixcblx0XCJsem9cIixcblx0XCJtM3VcIixcblx0XCJtNGFcIixcblx0XCJtNHZcIixcblx0XCJtYXJcIixcblx0XCJtZGlcIixcblx0XCJtaHRcIixcblx0XCJtaWRcIixcblx0XCJtaWRpXCIsXG5cdFwibWoyXCIsXG5cdFwibWthXCIsXG5cdFwibWt2XCIsXG5cdFwibW1yXCIsXG5cdFwibW5nXCIsXG5cdFwibW9iaVwiLFxuXHRcIm1vdlwiLFxuXHRcIm1vdmllXCIsXG5cdFwibXAzXCIsXG5cdFwibXA0XCIsXG5cdFwibXA0YVwiLFxuXHRcIm1wZWdcIixcblx0XCJtcGdcIixcblx0XCJtcGdhXCIsXG5cdFwibXh1XCIsXG5cdFwibmVmXCIsXG5cdFwibnB4XCIsXG5cdFwibnVtYmVyc1wiLFxuXHRcIm51cGtnXCIsXG5cdFwib1wiLFxuXHRcIm9kcFwiLFxuXHRcIm9kc1wiLFxuXHRcIm9kdFwiLFxuXHRcIm9nYVwiLFxuXHRcIm9nZ1wiLFxuXHRcIm9ndlwiLFxuXHRcIm90ZlwiLFxuXHRcIm90dFwiLFxuXHRcInBhZ2VzXCIsXG5cdFwicGJtXCIsXG5cdFwicGN4XCIsXG5cdFwicGRiXCIsXG5cdFwicGRmXCIsXG5cdFwicGVhXCIsXG5cdFwicGdtXCIsXG5cdFwicGljXCIsXG5cdFwicG5nXCIsXG5cdFwicG5tXCIsXG5cdFwicG90XCIsXG5cdFwicG90bVwiLFxuXHRcInBvdHhcIixcblx0XCJwcGFcIixcblx0XCJwcGFtXCIsXG5cdFwicHBtXCIsXG5cdFwicHBzXCIsXG5cdFwicHBzbVwiLFxuXHRcInBwc3hcIixcblx0XCJwcHRcIixcblx0XCJwcHRtXCIsXG5cdFwicHB0eFwiLFxuXHRcInBzZFwiLFxuXHRcInB5YVwiLFxuXHRcInB5Y1wiLFxuXHRcInB5b1wiLFxuXHRcInB5dlwiLFxuXHRcInF0XCIsXG5cdFwicmFyXCIsXG5cdFwicmFzXCIsXG5cdFwicmF3XCIsXG5cdFwicmVzb3VyY2VzXCIsXG5cdFwicmdiXCIsXG5cdFwicmlwXCIsXG5cdFwicmxjXCIsXG5cdFwicm1mXCIsXG5cdFwicm12YlwiLFxuXHRcInJwbVwiLFxuXHRcInJ0ZlwiLFxuXHRcInJ6XCIsXG5cdFwiczNtXCIsXG5cdFwiczd6XCIsXG5cdFwic2NwdFwiLFxuXHRcInNnaVwiLFxuXHRcInNoYXJcIixcblx0XCJzbmFwXCIsXG5cdFwic2lsXCIsXG5cdFwic2tldGNoXCIsXG5cdFwic2xrXCIsXG5cdFwic212XCIsXG5cdFwic25rXCIsXG5cdFwic29cIixcblx0XCJzdGxcIixcblx0XCJzdW9cIixcblx0XCJzdWJcIixcblx0XCJzd2ZcIixcblx0XCJ0YXJcIixcblx0XCJ0YnpcIixcblx0XCJ0YnoyXCIsXG5cdFwidGdhXCIsXG5cdFwidGd6XCIsXG5cdFwidGhteFwiLFxuXHRcInRpZlwiLFxuXHRcInRpZmZcIixcblx0XCJ0bHpcIixcblx0XCJ0dGNcIixcblx0XCJ0dGZcIixcblx0XCJ0eHpcIixcblx0XCJ1ZGZcIixcblx0XCJ1dmhcIixcblx0XCJ1dmlcIixcblx0XCJ1dm1cIixcblx0XCJ1dnBcIixcblx0XCJ1dnNcIixcblx0XCJ1dnVcIixcblx0XCJ2aXZcIixcblx0XCJ2b2JcIixcblx0XCJ3YXJcIixcblx0XCJ3YXZcIixcblx0XCJ3YXhcIixcblx0XCJ3Ym1wXCIsXG5cdFwid2RwXCIsXG5cdFwid2ViYVwiLFxuXHRcIndlYm1cIixcblx0XCJ3ZWJwXCIsXG5cdFwid2hsXCIsXG5cdFwid2ltXCIsXG5cdFwid21cIixcblx0XCJ3bWFcIixcblx0XCJ3bXZcIixcblx0XCJ3bXhcIixcblx0XCJ3b2ZmXCIsXG5cdFwid29mZjJcIixcblx0XCJ3cm1cIixcblx0XCJ3dnhcIixcblx0XCJ4Ym1cIixcblx0XCJ4aWZcIixcblx0XCJ4bGFcIixcblx0XCJ4bGFtXCIsXG5cdFwieGxzXCIsXG5cdFwieGxzYlwiLFxuXHRcInhsc21cIixcblx0XCJ4bHN4XCIsXG5cdFwieGx0XCIsXG5cdFwieGx0bVwiLFxuXHRcInhsdHhcIixcblx0XCJ4bVwiLFxuXHRcInhtaW5kXCIsXG5cdFwieHBpXCIsXG5cdFwieHBtXCIsXG5cdFwieHdkXCIsXG5cdFwieHpcIixcblx0XCJ6XCIsXG5cdFwiemlwXCIsXG5cdFwiemlweFwiXG5dXG4iLCAibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2JpbmFyeS1leHRlbnNpb25zLmpzb24nKTtcbiIsICIndXNlIHN0cmljdCc7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgYmluYXJ5RXh0ZW5zaW9ucyA9IHJlcXVpcmUoJ2JpbmFyeS1leHRlbnNpb25zJyk7XG5cbmNvbnN0IGV4dGVuc2lvbnMgPSBuZXcgU2V0KGJpbmFyeUV4dGVuc2lvbnMpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZpbGVQYXRoID0+IGV4dGVuc2lvbnMuaGFzKHBhdGguZXh0bmFtZShmaWxlUGF0aCkuc2xpY2UoMSkudG9Mb3dlckNhc2UoKSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB7c2VwfSA9IHJlcXVpcmUoJ3BhdGgnKTtcbmNvbnN0IHtwbGF0Zm9ybX0gPSBwcm9jZXNzO1xuY29uc3Qgb3MgPSByZXF1aXJlKCdvcycpO1xuXG5leHBvcnRzLkVWX0FMTCA9ICdhbGwnO1xuZXhwb3J0cy5FVl9SRUFEWSA9ICdyZWFkeSc7XG5leHBvcnRzLkVWX0FERCA9ICdhZGQnO1xuZXhwb3J0cy5FVl9DSEFOR0UgPSAnY2hhbmdlJztcbmV4cG9ydHMuRVZfQUREX0RJUiA9ICdhZGREaXInO1xuZXhwb3J0cy5FVl9VTkxJTksgPSAndW5saW5rJztcbmV4cG9ydHMuRVZfVU5MSU5LX0RJUiA9ICd1bmxpbmtEaXInO1xuZXhwb3J0cy5FVl9SQVcgPSAncmF3JztcbmV4cG9ydHMuRVZfRVJST1IgPSAnZXJyb3InO1xuXG5leHBvcnRzLlNUUl9EQVRBID0gJ2RhdGEnO1xuZXhwb3J0cy5TVFJfRU5EID0gJ2VuZCc7XG5leHBvcnRzLlNUUl9DTE9TRSA9ICdjbG9zZSc7XG5cbmV4cG9ydHMuRlNFVkVOVF9DUkVBVEVEID0gJ2NyZWF0ZWQnO1xuZXhwb3J0cy5GU0VWRU5UX01PRElGSUVEID0gJ21vZGlmaWVkJztcbmV4cG9ydHMuRlNFVkVOVF9ERUxFVEVEID0gJ2RlbGV0ZWQnO1xuZXhwb3J0cy5GU0VWRU5UX01PVkVEID0gJ21vdmVkJztcbmV4cG9ydHMuRlNFVkVOVF9DTE9ORUQgPSAnY2xvbmVkJztcbmV4cG9ydHMuRlNFVkVOVF9VTktOT1dOID0gJ3Vua25vd24nO1xuZXhwb3J0cy5GU0VWRU5UX1RZUEVfRklMRSA9ICdmaWxlJztcbmV4cG9ydHMuRlNFVkVOVF9UWVBFX0RJUkVDVE9SWSA9ICdkaXJlY3RvcnknO1xuZXhwb3J0cy5GU0VWRU5UX1RZUEVfU1lNTElOSyA9ICdzeW1saW5rJztcblxuZXhwb3J0cy5LRVlfTElTVEVORVJTID0gJ2xpc3RlbmVycyc7XG5leHBvcnRzLktFWV9FUlIgPSAnZXJySGFuZGxlcnMnO1xuZXhwb3J0cy5LRVlfUkFXID0gJ3Jhd0VtaXR0ZXJzJztcbmV4cG9ydHMuSEFORExFUl9LRVlTID0gW2V4cG9ydHMuS0VZX0xJU1RFTkVSUywgZXhwb3J0cy5LRVlfRVJSLCBleHBvcnRzLktFWV9SQVddO1xuXG5leHBvcnRzLkRPVF9TTEFTSCA9IGAuJHtzZXB9YDtcblxuZXhwb3J0cy5CQUNLX1NMQVNIX1JFID0gL1xcXFwvZztcbmV4cG9ydHMuRE9VQkxFX1NMQVNIX1JFID0gL1xcL1xcLy87XG5leHBvcnRzLlNMQVNIX09SX0JBQ0tfU0xBU0hfUkUgPSAvWy9cXFxcXS87XG5leHBvcnRzLkRPVF9SRSA9IC9cXC4uKlxcLihzd1tweF0pJHx+JHxcXC5zdWJsLipcXC50bXAvO1xuZXhwb3J0cy5SRVBMQUNFUl9SRSA9IC9eXFwuWy9cXFxcXS87XG5cbmV4cG9ydHMuU0xBU0ggPSAnLyc7XG5leHBvcnRzLlNMQVNIX1NMQVNIID0gJy8vJztcbmV4cG9ydHMuQlJBQ0VfU1RBUlQgPSAneyc7XG5leHBvcnRzLkJBTkcgPSAnISc7XG5leHBvcnRzLk9ORV9ET1QgPSAnLic7XG5leHBvcnRzLlRXT19ET1RTID0gJy4uJztcbmV4cG9ydHMuU1RBUiA9ICcqJztcbmV4cG9ydHMuR0xPQlNUQVIgPSAnKionO1xuZXhwb3J0cy5ST09UX0dMT0JTVEFSID0gJy8qKi8qJztcbmV4cG9ydHMuU0xBU0hfR0xPQlNUQVIgPSAnLyoqJztcbmV4cG9ydHMuRElSX1NVRkZJWCA9ICdEaXInO1xuZXhwb3J0cy5BTllNQVRDSF9PUFRTID0ge2RvdDogdHJ1ZX07XG5leHBvcnRzLlNUUklOR19UWVBFID0gJ3N0cmluZyc7XG5leHBvcnRzLkZVTkNUSU9OX1RZUEUgPSAnZnVuY3Rpb24nO1xuZXhwb3J0cy5FTVBUWV9TVFIgPSAnJztcbmV4cG9ydHMuRU1QVFlfRk4gPSAoKSA9PiB7fTtcbmV4cG9ydHMuSURFTlRJVFlfRk4gPSB2YWwgPT4gdmFsO1xuXG5leHBvcnRzLmlzV2luZG93cyA9IHBsYXRmb3JtID09PSAnd2luMzInO1xuZXhwb3J0cy5pc01hY29zID0gcGxhdGZvcm0gPT09ICdkYXJ3aW4nO1xuZXhwb3J0cy5pc0xpbnV4ID0gcGxhdGZvcm0gPT09ICdsaW51eCc7XG5leHBvcnRzLmlzSUJNaSA9IG9zLnR5cGUoKSA9PT0gJ09TNDAwJztcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbmNvbnN0IHN5c1BhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5jb25zdCB7IHByb21pc2lmeSB9ID0gcmVxdWlyZSgndXRpbCcpO1xuY29uc3QgaXNCaW5hcnlQYXRoID0gcmVxdWlyZSgnaXMtYmluYXJ5LXBhdGgnKTtcbmNvbnN0IHtcbiAgaXNXaW5kb3dzLFxuICBpc0xpbnV4LFxuICBFTVBUWV9GTixcbiAgRU1QVFlfU1RSLFxuICBLRVlfTElTVEVORVJTLFxuICBLRVlfRVJSLFxuICBLRVlfUkFXLFxuICBIQU5ETEVSX0tFWVMsXG4gIEVWX0NIQU5HRSxcbiAgRVZfQURELFxuICBFVl9BRERfRElSLFxuICBFVl9FUlJPUixcbiAgU1RSX0RBVEEsXG4gIFNUUl9FTkQsXG4gIEJSQUNFX1NUQVJULFxuICBTVEFSXG59ID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcblxuY29uc3QgVEhST1RUTEVfTU9ERV9XQVRDSCA9ICd3YXRjaCc7XG5cbmNvbnN0IG9wZW4gPSBwcm9taXNpZnkoZnMub3Blbik7XG5jb25zdCBzdGF0ID0gcHJvbWlzaWZ5KGZzLnN0YXQpO1xuY29uc3QgbHN0YXQgPSBwcm9taXNpZnkoZnMubHN0YXQpO1xuY29uc3QgY2xvc2UgPSBwcm9taXNpZnkoZnMuY2xvc2UpO1xuY29uc3QgZnNyZWFscGF0aCA9IHByb21pc2lmeShmcy5yZWFscGF0aCk7XG5cbmNvbnN0IHN0YXRNZXRob2RzID0geyBsc3RhdCwgc3RhdCB9O1xuXG4vLyBUT0RPOiBlbWl0IGVycm9ycyBwcm9wZXJseS4gRXhhbXBsZTogRU1GSUxFIG9uIE1hY29zLlxuY29uc3QgZm9yZWFjaCA9ICh2YWwsIGZuKSA9PiB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBTZXQpIHtcbiAgICB2YWwuZm9yRWFjaChmbik7XG4gIH0gZWxzZSB7XG4gICAgZm4odmFsKTtcbiAgfVxufTtcblxuY29uc3QgYWRkQW5kQ29udmVydCA9IChtYWluLCBwcm9wLCBpdGVtKSA9PiB7XG4gIGxldCBjb250YWluZXIgPSBtYWluW3Byb3BdO1xuICBpZiAoIShjb250YWluZXIgaW5zdGFuY2VvZiBTZXQpKSB7XG4gICAgbWFpbltwcm9wXSA9IGNvbnRhaW5lciA9IG5ldyBTZXQoW2NvbnRhaW5lcl0pO1xuICB9XG4gIGNvbnRhaW5lci5hZGQoaXRlbSk7XG59O1xuXG5jb25zdCBjbGVhckl0ZW0gPSBjb250ID0+IGtleSA9PiB7XG4gIGNvbnN0IHNldCA9IGNvbnRba2V5XTtcbiAgaWYgKHNldCBpbnN0YW5jZW9mIFNldCkge1xuICAgIHNldC5jbGVhcigpO1xuICB9IGVsc2Uge1xuICAgIGRlbGV0ZSBjb250W2tleV07XG4gIH1cbn07XG5cbmNvbnN0IGRlbEZyb21TZXQgPSAobWFpbiwgcHJvcCwgaXRlbSkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBtYWluW3Byb3BdO1xuICBpZiAoY29udGFpbmVyIGluc3RhbmNlb2YgU2V0KSB7XG4gICAgY29udGFpbmVyLmRlbGV0ZShpdGVtKTtcbiAgfSBlbHNlIGlmIChjb250YWluZXIgPT09IGl0ZW0pIHtcbiAgICBkZWxldGUgbWFpbltwcm9wXTtcbiAgfVxufTtcblxuY29uc3QgaXNFbXB0eVNldCA9ICh2YWwpID0+IHZhbCBpbnN0YW5jZW9mIFNldCA/IHZhbC5zaXplID09PSAwIDogIXZhbDtcblxuLyoqXG4gKiBAdHlwZWRlZiB7U3RyaW5nfSBQYXRoXG4gKi9cblxuLy8gZnNfd2F0Y2ggaGVscGVyc1xuXG4vLyBvYmplY3QgdG8gaG9sZCBwZXItcHJvY2VzcyBmc193YXRjaCBpbnN0YW5jZXNcbi8vIChtYXkgYmUgc2hhcmVkIGFjcm9zcyBjaG9raWRhciBGU1dhdGNoZXIgaW5zdGFuY2VzKVxuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEZzV2F0Y2hDb250YWluZXJcbiAqIEBwcm9wZXJ0eSB7U2V0fSBsaXN0ZW5lcnNcbiAqIEBwcm9wZXJ0eSB7U2V0fSBlcnJIYW5kbGVyc1xuICogQHByb3BlcnR5IHtTZXR9IHJhd0VtaXR0ZXJzXG4gKiBAcHJvcGVydHkge2ZzLkZTV2F0Y2hlcj19IHdhdGNoZXJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbj19IHdhdGNoZXJVbnVzYWJsZVxuICovXG5cbi8qKlxuICogQHR5cGUge01hcDxTdHJpbmcsRnNXYXRjaENvbnRhaW5lcj59XG4gKi9cbmNvbnN0IEZzV2F0Y2hJbnN0YW5jZXMgPSBuZXcgTWFwKCk7XG5cbi8qKlxuICogSW5zdGFudGlhdGVzIHRoZSBmc193YXRjaCBpbnRlcmZhY2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIHRvIGJlIHdhdGNoZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIHRvIGJlIHBhc3NlZCB0byBmc193YXRjaFxuICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgbWFpbiBldmVudCBoYW5kbGVyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcnJIYW5kbGVyIGVtaXRzIGluZm8gYWJvdXQgZXJyb3JzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlbWl0UmF3IGVtaXRzIHJhdyBldmVudCBkYXRhXG4gKiBAcmV0dXJucyB7ZnMuRlNXYXRjaGVyfSBuZXcgZnNldmVudHMgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRnNXYXRjaEluc3RhbmNlKHBhdGgsIG9wdGlvbnMsIGxpc3RlbmVyLCBlcnJIYW5kbGVyLCBlbWl0UmF3KSB7XG4gIGNvbnN0IGhhbmRsZUV2ZW50ID0gKHJhd0V2ZW50LCBldlBhdGgpID0+IHtcbiAgICBsaXN0ZW5lcihwYXRoKTtcbiAgICBlbWl0UmF3KHJhd0V2ZW50LCBldlBhdGgsIHt3YXRjaGVkUGF0aDogcGF0aH0pO1xuXG4gICAgLy8gZW1pdCBiYXNlZCBvbiBldmVudHMgb2NjdXJyaW5nIGZvciBmaWxlcyBmcm9tIGEgZGlyZWN0b3J5J3Mgd2F0Y2hlciBpblxuICAgIC8vIGNhc2UgdGhlIGZpbGUncyB3YXRjaGVyIG1pc3NlcyBpdCAoYW5kIHJlbHkgb24gdGhyb3R0bGluZyB0byBkZS1kdXBlKVxuICAgIGlmIChldlBhdGggJiYgcGF0aCAhPT0gZXZQYXRoKSB7XG4gICAgICBmc1dhdGNoQnJvYWRjYXN0KFxuICAgICAgICBzeXNQYXRoLnJlc29sdmUocGF0aCwgZXZQYXRoKSwgS0VZX0xJU1RFTkVSUywgc3lzUGF0aC5qb2luKHBhdGgsIGV2UGF0aClcbiAgICAgICk7XG4gICAgfVxuICB9O1xuICB0cnkge1xuICAgIHJldHVybiBmcy53YXRjaChwYXRoLCBvcHRpb25zLCBoYW5kbGVFdmVudCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZXJySGFuZGxlcihlcnJvcik7XG4gIH1cbn1cblxuLyoqXG4gKiBIZWxwZXIgZm9yIHBhc3NpbmcgZnNfd2F0Y2ggZXZlbnQgZGF0YSB0byBhIGNvbGxlY3Rpb24gb2YgbGlzdGVuZXJzXG4gKiBAcGFyYW0ge1BhdGh9IGZ1bGxQYXRoIGFic29sdXRlIHBhdGggYm91bmQgdG8gZnNfd2F0Y2ggaW5zdGFuY2VcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIGxpc3RlbmVyIHR5cGVcbiAqIEBwYXJhbSB7Kj19IHZhbDEgYXJndW1lbnRzIHRvIGJlIHBhc3NlZCB0byBsaXN0ZW5lcnNcbiAqIEBwYXJhbSB7Kj19IHZhbDJcbiAqIEBwYXJhbSB7Kj19IHZhbDNcbiAqL1xuY29uc3QgZnNXYXRjaEJyb2FkY2FzdCA9IChmdWxsUGF0aCwgdHlwZSwgdmFsMSwgdmFsMiwgdmFsMykgPT4ge1xuICBjb25zdCBjb250ID0gRnNXYXRjaEluc3RhbmNlcy5nZXQoZnVsbFBhdGgpO1xuICBpZiAoIWNvbnQpIHJldHVybjtcbiAgZm9yZWFjaChjb250W3R5cGVdLCAobGlzdGVuZXIpID0+IHtcbiAgICBsaXN0ZW5lcih2YWwxLCB2YWwyLCB2YWwzKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEluc3RhbnRpYXRlcyB0aGUgZnNfd2F0Y2ggaW50ZXJmYWNlIG9yIGJpbmRzIGxpc3RlbmVyc1xuICogdG8gYW4gZXhpc3Rpbmcgb25lIGNvdmVyaW5nIHRoZSBzYW1lIGZpbGUgc3lzdGVtIGVudHJ5XG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICogQHBhcmFtIHtTdHJpbmd9IGZ1bGxQYXRoIGFic29sdXRlIHBhdGhcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIHRvIGJlIHBhc3NlZCB0byBmc193YXRjaFxuICogQHBhcmFtIHtPYmplY3R9IGhhbmRsZXJzIGNvbnRhaW5lciBmb3IgZXZlbnQgbGlzdGVuZXIgZnVuY3Rpb25zXG4gKi9cbmNvbnN0IHNldEZzV2F0Y2hMaXN0ZW5lciA9IChwYXRoLCBmdWxsUGF0aCwgb3B0aW9ucywgaGFuZGxlcnMpID0+IHtcbiAgY29uc3Qge2xpc3RlbmVyLCBlcnJIYW5kbGVyLCByYXdFbWl0dGVyfSA9IGhhbmRsZXJzO1xuICBsZXQgY29udCA9IEZzV2F0Y2hJbnN0YW5jZXMuZ2V0KGZ1bGxQYXRoKTtcblxuICAvKiogQHR5cGUge2ZzLkZTV2F0Y2hlcj19ICovXG4gIGxldCB3YXRjaGVyO1xuICBpZiAoIW9wdGlvbnMucGVyc2lzdGVudCkge1xuICAgIHdhdGNoZXIgPSBjcmVhdGVGc1dhdGNoSW5zdGFuY2UoXG4gICAgICBwYXRoLCBvcHRpb25zLCBsaXN0ZW5lciwgZXJySGFuZGxlciwgcmF3RW1pdHRlclxuICAgICk7XG4gICAgcmV0dXJuIHdhdGNoZXIuY2xvc2UuYmluZCh3YXRjaGVyKTtcbiAgfVxuICBpZiAoY29udCkge1xuICAgIGFkZEFuZENvbnZlcnQoY29udCwgS0VZX0xJU1RFTkVSUywgbGlzdGVuZXIpO1xuICAgIGFkZEFuZENvbnZlcnQoY29udCwgS0VZX0VSUiwgZXJySGFuZGxlcik7XG4gICAgYWRkQW5kQ29udmVydChjb250LCBLRVlfUkFXLCByYXdFbWl0dGVyKTtcbiAgfSBlbHNlIHtcbiAgICB3YXRjaGVyID0gY3JlYXRlRnNXYXRjaEluc3RhbmNlKFxuICAgICAgcGF0aCxcbiAgICAgIG9wdGlvbnMsXG4gICAgICBmc1dhdGNoQnJvYWRjYXN0LmJpbmQobnVsbCwgZnVsbFBhdGgsIEtFWV9MSVNURU5FUlMpLFxuICAgICAgZXJySGFuZGxlciwgLy8gbm8gbmVlZCB0byB1c2UgYnJvYWRjYXN0IGhlcmVcbiAgICAgIGZzV2F0Y2hCcm9hZGNhc3QuYmluZChudWxsLCBmdWxsUGF0aCwgS0VZX1JBVylcbiAgICApO1xuICAgIGlmICghd2F0Y2hlcikgcmV0dXJuO1xuICAgIHdhdGNoZXIub24oRVZfRVJST1IsIGFzeW5jIChlcnJvcikgPT4ge1xuICAgICAgY29uc3QgYnJvYWRjYXN0RXJyID0gZnNXYXRjaEJyb2FkY2FzdC5iaW5kKG51bGwsIGZ1bGxQYXRoLCBLRVlfRVJSKTtcbiAgICAgIGNvbnQud2F0Y2hlclVudXNhYmxlID0gdHJ1ZTsgLy8gZG9jdW1lbnRlZCBzaW5jZSBOb2RlIDEwLjQuMVxuICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL2pveWVudC9ub2RlL2lzc3Vlcy80MzM3XG4gICAgICBpZiAoaXNXaW5kb3dzICYmIGVycm9yLmNvZGUgPT09ICdFUEVSTScpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBmZCA9IGF3YWl0IG9wZW4ocGF0aCwgJ3InKTtcbiAgICAgICAgICBhd2FpdCBjbG9zZShmZCk7XG4gICAgICAgICAgYnJvYWRjYXN0RXJyKGVycm9yKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJvYWRjYXN0RXJyKGVycm9yKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb250ID0ge1xuICAgICAgbGlzdGVuZXJzOiBsaXN0ZW5lcixcbiAgICAgIGVyckhhbmRsZXJzOiBlcnJIYW5kbGVyLFxuICAgICAgcmF3RW1pdHRlcnM6IHJhd0VtaXR0ZXIsXG4gICAgICB3YXRjaGVyXG4gICAgfTtcbiAgICBGc1dhdGNoSW5zdGFuY2VzLnNldChmdWxsUGF0aCwgY29udCk7XG4gIH1cbiAgLy8gY29uc3QgaW5kZXggPSBjb250Lmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcblxuICAvLyByZW1vdmVzIHRoaXMgaW5zdGFuY2UncyBsaXN0ZW5lcnMgYW5kIGNsb3NlcyB0aGUgdW5kZXJseWluZyBmc193YXRjaFxuICAvLyBpbnN0YW5jZSBpZiB0aGVyZSBhcmUgbm8gbW9yZSBsaXN0ZW5lcnMgbGVmdFxuICByZXR1cm4gKCkgPT4ge1xuICAgIGRlbEZyb21TZXQoY29udCwgS0VZX0xJU1RFTkVSUywgbGlzdGVuZXIpO1xuICAgIGRlbEZyb21TZXQoY29udCwgS0VZX0VSUiwgZXJySGFuZGxlcik7XG4gICAgZGVsRnJvbVNldChjb250LCBLRVlfUkFXLCByYXdFbWl0dGVyKTtcbiAgICBpZiAoaXNFbXB0eVNldChjb250Lmxpc3RlbmVycykpIHtcbiAgICAgIC8vIENoZWNrIHRvIHByb3RlY3QgYWdhaW5zdCBpc3N1ZSBnaC03MzAuXG4gICAgICAvLyBpZiAoY29udC53YXRjaGVyVW51c2FibGUpIHtcbiAgICAgIGNvbnQud2F0Y2hlci5jbG9zZSgpO1xuICAgICAgLy8gfVxuICAgICAgRnNXYXRjaEluc3RhbmNlcy5kZWxldGUoZnVsbFBhdGgpO1xuICAgICAgSEFORExFUl9LRVlTLmZvckVhY2goY2xlYXJJdGVtKGNvbnQpKTtcbiAgICAgIGNvbnQud2F0Y2hlciA9IHVuZGVmaW5lZDtcbiAgICAgIE9iamVjdC5mcmVlemUoY29udCk7XG4gICAgfVxuICB9O1xufTtcblxuLy8gZnNfd2F0Y2hGaWxlIGhlbHBlcnNcblxuLy8gb2JqZWN0IHRvIGhvbGQgcGVyLXByb2Nlc3MgZnNfd2F0Y2hGaWxlIGluc3RhbmNlc1xuLy8gKG1heSBiZSBzaGFyZWQgYWNyb3NzIGNob2tpZGFyIEZTV2F0Y2hlciBpbnN0YW5jZXMpXG5jb25zdCBGc1dhdGNoRmlsZUluc3RhbmNlcyA9IG5ldyBNYXAoKTtcblxuLyoqXG4gKiBJbnN0YW50aWF0ZXMgdGhlIGZzX3dhdGNoRmlsZSBpbnRlcmZhY2Ugb3IgYmluZHMgbGlzdGVuZXJzXG4gKiB0byBhbiBleGlzdGluZyBvbmUgY292ZXJpbmcgdGhlIHNhbWUgZmlsZSBzeXN0ZW0gZW50cnlcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIHRvIGJlIHdhdGNoZWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBmdWxsUGF0aCBhYnNvbHV0ZSBwYXRoXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBvcHRpb25zIHRvIGJlIHBhc3NlZCB0byBmc193YXRjaEZpbGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYW5kbGVycyBjb250YWluZXIgZm9yIGV2ZW50IGxpc3RlbmVyIGZ1bmN0aW9uc1xuICogQHJldHVybnMge0Z1bmN0aW9ufSBjbG9zZXJcbiAqL1xuY29uc3Qgc2V0RnNXYXRjaEZpbGVMaXN0ZW5lciA9IChwYXRoLCBmdWxsUGF0aCwgb3B0aW9ucywgaGFuZGxlcnMpID0+IHtcbiAgY29uc3Qge2xpc3RlbmVyLCByYXdFbWl0dGVyfSA9IGhhbmRsZXJzO1xuICBsZXQgY29udCA9IEZzV2F0Y2hGaWxlSW5zdGFuY2VzLmdldChmdWxsUGF0aCk7XG5cbiAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMsIHByZWZlci1kZXN0cnVjdHVyaW5nICovXG4gIGxldCBsaXN0ZW5lcnMgPSBuZXcgU2V0KCk7XG4gIGxldCByYXdFbWl0dGVycyA9IG5ldyBTZXQoKTtcblxuICBjb25zdCBjb3B0cyA9IGNvbnQgJiYgY29udC5vcHRpb25zO1xuICBpZiAoY29wdHMgJiYgKGNvcHRzLnBlcnNpc3RlbnQgPCBvcHRpb25zLnBlcnNpc3RlbnQgfHwgY29wdHMuaW50ZXJ2YWwgPiBvcHRpb25zLmludGVydmFsKSkge1xuICAgIC8vIFwiVXBncmFkZVwiIHRoZSB3YXRjaGVyIHRvIHBlcnNpc3RlbmNlIG9yIGEgcXVpY2tlciBpbnRlcnZhbC5cbiAgICAvLyBUaGlzIGNyZWF0ZXMgc29tZSB1bmxpa2VseSBlZGdlIGNhc2UgaXNzdWVzIGlmIHRoZSB1c2VyIG1peGVzXG4gICAgLy8gc2V0dGluZ3MgaW4gYSB2ZXJ5IHdlaXJkIHdheSwgYnV0IHNvbHZpbmcgZm9yIHRob3NlIGNhc2VzXG4gICAgLy8gZG9lc24ndCBzZWVtIHdvcnRod2hpbGUgZm9yIHRoZSBhZGRlZCBjb21wbGV4aXR5LlxuICAgIGxpc3RlbmVycyA9IGNvbnQubGlzdGVuZXJzO1xuICAgIHJhd0VtaXR0ZXJzID0gY29udC5yYXdFbWl0dGVycztcbiAgICBmcy51bndhdGNoRmlsZShmdWxsUGF0aCk7XG4gICAgY29udCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMsIHByZWZlci1kZXN0cnVjdHVyaW5nICovXG5cbiAgaWYgKGNvbnQpIHtcbiAgICBhZGRBbmRDb252ZXJ0KGNvbnQsIEtFWV9MSVNURU5FUlMsIGxpc3RlbmVyKTtcbiAgICBhZGRBbmRDb252ZXJ0KGNvbnQsIEtFWV9SQVcsIHJhd0VtaXR0ZXIpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRPRE9cbiAgICAvLyBsaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTtcbiAgICAvLyByYXdFbWl0dGVycy5hZGQocmF3RW1pdHRlcik7XG4gICAgY29udCA9IHtcbiAgICAgIGxpc3RlbmVyczogbGlzdGVuZXIsXG4gICAgICByYXdFbWl0dGVyczogcmF3RW1pdHRlcixcbiAgICAgIG9wdGlvbnMsXG4gICAgICB3YXRjaGVyOiBmcy53YXRjaEZpbGUoZnVsbFBhdGgsIG9wdGlvbnMsIChjdXJyLCBwcmV2KSA9PiB7XG4gICAgICAgIGZvcmVhY2goY29udC5yYXdFbWl0dGVycywgKHJhd0VtaXR0ZXIpID0+IHtcbiAgICAgICAgICByYXdFbWl0dGVyKEVWX0NIQU5HRSwgZnVsbFBhdGgsIHtjdXJyLCBwcmV2fSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBjdXJybXRpbWUgPSBjdXJyLm10aW1lTXM7XG4gICAgICAgIGlmIChjdXJyLnNpemUgIT09IHByZXYuc2l6ZSB8fCBjdXJybXRpbWUgPiBwcmV2Lm10aW1lTXMgfHwgY3Vycm10aW1lID09PSAwKSB7XG4gICAgICAgICAgZm9yZWFjaChjb250Lmxpc3RlbmVycywgKGxpc3RlbmVyKSA9PiBsaXN0ZW5lcihwYXRoLCBjdXJyKSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfTtcbiAgICBGc1dhdGNoRmlsZUluc3RhbmNlcy5zZXQoZnVsbFBhdGgsIGNvbnQpO1xuICB9XG4gIC8vIGNvbnN0IGluZGV4ID0gY29udC5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG5cbiAgLy8gUmVtb3ZlcyB0aGlzIGluc3RhbmNlJ3MgbGlzdGVuZXJzIGFuZCBjbG9zZXMgdGhlIHVuZGVybHlpbmcgZnNfd2F0Y2hGaWxlXG4gIC8vIGluc3RhbmNlIGlmIHRoZXJlIGFyZSBubyBtb3JlIGxpc3RlbmVycyBsZWZ0LlxuICByZXR1cm4gKCkgPT4ge1xuICAgIGRlbEZyb21TZXQoY29udCwgS0VZX0xJU1RFTkVSUywgbGlzdGVuZXIpO1xuICAgIGRlbEZyb21TZXQoY29udCwgS0VZX1JBVywgcmF3RW1pdHRlcik7XG4gICAgaWYgKGlzRW1wdHlTZXQoY29udC5saXN0ZW5lcnMpKSB7XG4gICAgICBGc1dhdGNoRmlsZUluc3RhbmNlcy5kZWxldGUoZnVsbFBhdGgpO1xuICAgICAgZnMudW53YXRjaEZpbGUoZnVsbFBhdGgpO1xuICAgICAgY29udC5vcHRpb25zID0gY29udC53YXRjaGVyID0gdW5kZWZpbmVkO1xuICAgICAgT2JqZWN0LmZyZWV6ZShjb250KTtcbiAgICB9XG4gIH07XG59O1xuXG4vKipcbiAqIEBtaXhpblxuICovXG5jbGFzcyBOb2RlRnNIYW5kbGVyIHtcblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4uL2luZGV4XCIpLkZTV2F0Y2hlcn0gZnNXXG4gKi9cbmNvbnN0cnVjdG9yKGZzVykge1xuICB0aGlzLmZzdyA9IGZzVztcbiAgdGhpcy5fYm91bmRIYW5kbGVFcnJvciA9IChlcnJvcikgPT4gZnNXLl9oYW5kbGVFcnJvcihlcnJvcik7XG59XG5cbi8qKlxuICogV2F0Y2ggZmlsZSBmb3IgY2hhbmdlcyB3aXRoIGZzX3dhdGNoRmlsZSBvciBmc193YXRjaC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIHRvIGZpbGUgb3IgZGlyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBvbiBmcyBjaGFuZ2VcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gY2xvc2VyIGZvciB0aGUgd2F0Y2hlciBpbnN0YW5jZVxuICovXG5fd2F0Y2hXaXRoTm9kZUZzKHBhdGgsIGxpc3RlbmVyKSB7XG4gIGNvbnN0IG9wdHMgPSB0aGlzLmZzdy5vcHRpb25zO1xuICBjb25zdCBkaXJlY3RvcnkgPSBzeXNQYXRoLmRpcm5hbWUocGF0aCk7XG4gIGNvbnN0IGJhc2VuYW1lID0gc3lzUGF0aC5iYXNlbmFtZShwYXRoKTtcbiAgY29uc3QgcGFyZW50ID0gdGhpcy5mc3cuX2dldFdhdGNoZWREaXIoZGlyZWN0b3J5KTtcbiAgcGFyZW50LmFkZChiYXNlbmFtZSk7XG4gIGNvbnN0IGFic29sdXRlUGF0aCA9IHN5c1BhdGgucmVzb2x2ZShwYXRoKTtcbiAgY29uc3Qgb3B0aW9ucyA9IHtwZXJzaXN0ZW50OiBvcHRzLnBlcnNpc3RlbnR9O1xuICBpZiAoIWxpc3RlbmVyKSBsaXN0ZW5lciA9IEVNUFRZX0ZOO1xuXG4gIGxldCBjbG9zZXI7XG4gIGlmIChvcHRzLnVzZVBvbGxpbmcpIHtcbiAgICBvcHRpb25zLmludGVydmFsID0gb3B0cy5lbmFibGVCaW5hcnlJbnRlcnZhbCAmJiBpc0JpbmFyeVBhdGgoYmFzZW5hbWUpID9cbiAgICAgIG9wdHMuYmluYXJ5SW50ZXJ2YWwgOiBvcHRzLmludGVydmFsO1xuICAgIGNsb3NlciA9IHNldEZzV2F0Y2hGaWxlTGlzdGVuZXIocGF0aCwgYWJzb2x1dGVQYXRoLCBvcHRpb25zLCB7XG4gICAgICBsaXN0ZW5lcixcbiAgICAgIHJhd0VtaXR0ZXI6IHRoaXMuZnN3Ll9lbWl0UmF3XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY2xvc2VyID0gc2V0RnNXYXRjaExpc3RlbmVyKHBhdGgsIGFic29sdXRlUGF0aCwgb3B0aW9ucywge1xuICAgICAgbGlzdGVuZXIsXG4gICAgICBlcnJIYW5kbGVyOiB0aGlzLl9ib3VuZEhhbmRsZUVycm9yLFxuICAgICAgcmF3RW1pdHRlcjogdGhpcy5mc3cuX2VtaXRSYXdcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gY2xvc2VyO1xufVxuXG4vKipcbiAqIFdhdGNoIGEgZmlsZSBhbmQgZW1pdCBhZGQgZXZlbnQgaWYgd2FycmFudGVkLlxuICogQHBhcmFtIHtQYXRofSBmaWxlIFBhdGhcbiAqIEBwYXJhbSB7ZnMuU3RhdHN9IHN0YXRzIHJlc3VsdCBvZiBmc19zdGF0XG4gKiBAcGFyYW0ge0Jvb2xlYW59IGluaXRpYWxBZGQgd2FzIHRoZSBmaWxlIGFkZGVkIGF0IHdhdGNoIGluc3RhbnRpYXRpb24/XG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IGNsb3NlciBmb3IgdGhlIHdhdGNoZXIgaW5zdGFuY2VcbiAqL1xuX2hhbmRsZUZpbGUoZmlsZSwgc3RhdHMsIGluaXRpYWxBZGQpIHtcbiAgaWYgKHRoaXMuZnN3LmNsb3NlZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBkaXJuYW1lID0gc3lzUGF0aC5kaXJuYW1lKGZpbGUpO1xuICBjb25zdCBiYXNlbmFtZSA9IHN5c1BhdGguYmFzZW5hbWUoZmlsZSk7XG4gIGNvbnN0IHBhcmVudCA9IHRoaXMuZnN3Ll9nZXRXYXRjaGVkRGlyKGRpcm5hbWUpO1xuICAvLyBzdGF0cyBpcyBhbHdheXMgcHJlc2VudFxuICBsZXQgcHJldlN0YXRzID0gc3RhdHM7XG5cbiAgLy8gaWYgdGhlIGZpbGUgaXMgYWxyZWFkeSBiZWluZyB3YXRjaGVkLCBkbyBub3RoaW5nXG4gIGlmIChwYXJlbnQuaGFzKGJhc2VuYW1lKSkgcmV0dXJuO1xuXG4gIGNvbnN0IGxpc3RlbmVyID0gYXN5bmMgKHBhdGgsIG5ld1N0YXRzKSA9PiB7XG4gICAgaWYgKCF0aGlzLmZzdy5fdGhyb3R0bGUoVEhST1RUTEVfTU9ERV9XQVRDSCwgZmlsZSwgNSkpIHJldHVybjtcbiAgICBpZiAoIW5ld1N0YXRzIHx8IG5ld1N0YXRzLm10aW1lTXMgPT09IDApIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRzID0gYXdhaXQgc3RhdChmaWxlKTtcbiAgICAgICAgaWYgKHRoaXMuZnN3LmNsb3NlZCkgcmV0dXJuO1xuICAgICAgICAvLyBDaGVjayB0aGF0IGNoYW5nZSBldmVudCB3YXMgbm90IGZpcmVkIGJlY2F1c2Ugb2YgY2hhbmdlZCBvbmx5IGFjY2Vzc1RpbWUuXG4gICAgICAgIGNvbnN0IGF0ID0gbmV3U3RhdHMuYXRpbWVNcztcbiAgICAgICAgY29uc3QgbXQgPSBuZXdTdGF0cy5tdGltZU1zO1xuICAgICAgICBpZiAoIWF0IHx8IGF0IDw9IG10IHx8IG10ICE9PSBwcmV2U3RhdHMubXRpbWVNcykge1xuICAgICAgICAgIHRoaXMuZnN3Ll9lbWl0KEVWX0NIQU5HRSwgZmlsZSwgbmV3U3RhdHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0xpbnV4ICYmIHByZXZTdGF0cy5pbm8gIT09IG5ld1N0YXRzLmlubykge1xuICAgICAgICAgIHRoaXMuZnN3Ll9jbG9zZUZpbGUocGF0aClcbiAgICAgICAgICBwcmV2U3RhdHMgPSBuZXdTdGF0cztcbiAgICAgICAgICB0aGlzLmZzdy5fYWRkUGF0aENsb3NlcihwYXRoLCB0aGlzLl93YXRjaFdpdGhOb2RlRnMoZmlsZSwgbGlzdGVuZXIpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmV2U3RhdHMgPSBuZXdTdGF0cztcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gRml4IGlzc3VlcyB3aGVyZSBtdGltZSBpcyBudWxsIGJ1dCBmaWxlIGlzIHN0aWxsIHByZXNlbnRcbiAgICAgICAgdGhpcy5mc3cuX3JlbW92ZShkaXJuYW1lLCBiYXNlbmFtZSk7XG4gICAgICB9XG4gICAgICAvLyBhZGQgaXMgYWJvdXQgdG8gYmUgZW1pdHRlZCBpZiBmaWxlIG5vdCBhbHJlYWR5IHRyYWNrZWQgaW4gcGFyZW50XG4gICAgfSBlbHNlIGlmIChwYXJlbnQuaGFzKGJhc2VuYW1lKSkge1xuICAgICAgLy8gQ2hlY2sgdGhhdCBjaGFuZ2UgZXZlbnQgd2FzIG5vdCBmaXJlZCBiZWNhdXNlIG9mIGNoYW5nZWQgb25seSBhY2Nlc3NUaW1lLlxuICAgICAgY29uc3QgYXQgPSBuZXdTdGF0cy5hdGltZU1zO1xuICAgICAgY29uc3QgbXQgPSBuZXdTdGF0cy5tdGltZU1zO1xuICAgICAgaWYgKCFhdCB8fCBhdCA8PSBtdCB8fCBtdCAhPT0gcHJldlN0YXRzLm10aW1lTXMpIHtcbiAgICAgICAgdGhpcy5mc3cuX2VtaXQoRVZfQ0hBTkdFLCBmaWxlLCBuZXdTdGF0cyk7XG4gICAgICB9XG4gICAgICBwcmV2U3RhdHMgPSBuZXdTdGF0cztcbiAgICB9XG4gIH1cbiAgLy8ga2ljayBvZmYgdGhlIHdhdGNoZXJcbiAgY29uc3QgY2xvc2VyID0gdGhpcy5fd2F0Y2hXaXRoTm9kZUZzKGZpbGUsIGxpc3RlbmVyKTtcblxuICAvLyBlbWl0IGFuIGFkZCBldmVudCBpZiB3ZSdyZSBzdXBwb3NlZCB0b1xuICBpZiAoIShpbml0aWFsQWRkICYmIHRoaXMuZnN3Lm9wdGlvbnMuaWdub3JlSW5pdGlhbCkgJiYgdGhpcy5mc3cuX2lzbnRJZ25vcmVkKGZpbGUpKSB7XG4gICAgaWYgKCF0aGlzLmZzdy5fdGhyb3R0bGUoRVZfQURELCBmaWxlLCAwKSkgcmV0dXJuO1xuICAgIHRoaXMuZnN3Ll9lbWl0KEVWX0FERCwgZmlsZSwgc3RhdHMpO1xuICB9XG5cbiAgcmV0dXJuIGNsb3Nlcjtcbn1cblxuLyoqXG4gKiBIYW5kbGUgc3ltbGlua3MgZW5jb3VudGVyZWQgd2hpbGUgcmVhZGluZyBhIGRpci5cbiAqIEBwYXJhbSB7T2JqZWN0fSBlbnRyeSByZXR1cm5lZCBieSByZWFkZGlycFxuICogQHBhcmFtIHtTdHJpbmd9IGRpcmVjdG9yeSBwYXRoIG9mIGRpciBiZWluZyByZWFkXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aCBvZiB0aGlzIGl0ZW1cbiAqIEBwYXJhbSB7U3RyaW5nfSBpdGVtIGJhc2VuYW1lIG9mIHRoaXMgaXRlbVxuICogQHJldHVybnMge1Byb21pc2U8Qm9vbGVhbj59IHRydWUgaWYgbm8gbW9yZSBwcm9jZXNzaW5nIGlzIG5lZWRlZCBmb3IgdGhpcyBlbnRyeS5cbiAqL1xuYXN5bmMgX2hhbmRsZVN5bWxpbmsoZW50cnksIGRpcmVjdG9yeSwgcGF0aCwgaXRlbSkge1xuICBpZiAodGhpcy5mc3cuY2xvc2VkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGZ1bGwgPSBlbnRyeS5mdWxsUGF0aDtcbiAgY29uc3QgZGlyID0gdGhpcy5mc3cuX2dldFdhdGNoZWREaXIoZGlyZWN0b3J5KTtcblxuICBpZiAoIXRoaXMuZnN3Lm9wdGlvbnMuZm9sbG93U3ltbGlua3MpIHtcbiAgICAvLyB3YXRjaCBzeW1saW5rIGRpcmVjdGx5IChkb24ndCBmb2xsb3cpIGFuZCBkZXRlY3QgY2hhbmdlc1xuICAgIHRoaXMuZnN3Ll9pbmNyUmVhZHlDb3VudCgpO1xuXG4gICAgbGV0IGxpbmtQYXRoO1xuICAgIHRyeSB7XG4gICAgICBsaW5rUGF0aCA9IGF3YWl0IGZzcmVhbHBhdGgocGF0aCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5mc3cuX2VtaXRSZWFkeSgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZnN3LmNsb3NlZCkgcmV0dXJuO1xuICAgIGlmIChkaXIuaGFzKGl0ZW0pKSB7XG4gICAgICBpZiAodGhpcy5mc3cuX3N5bWxpbmtQYXRocy5nZXQoZnVsbCkgIT09IGxpbmtQYXRoKSB7XG4gICAgICAgIHRoaXMuZnN3Ll9zeW1saW5rUGF0aHMuc2V0KGZ1bGwsIGxpbmtQYXRoKTtcbiAgICAgICAgdGhpcy5mc3cuX2VtaXQoRVZfQ0hBTkdFLCBwYXRoLCBlbnRyeS5zdGF0cyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpci5hZGQoaXRlbSk7XG4gICAgICB0aGlzLmZzdy5fc3ltbGlua1BhdGhzLnNldChmdWxsLCBsaW5rUGF0aCk7XG4gICAgICB0aGlzLmZzdy5fZW1pdChFVl9BREQsIHBhdGgsIGVudHJ5LnN0YXRzKTtcbiAgICB9XG4gICAgdGhpcy5mc3cuX2VtaXRSZWFkeSgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gZG9uJ3QgZm9sbG93IHRoZSBzYW1lIHN5bWxpbmsgbW9yZSB0aGFuIG9uY2VcbiAgaWYgKHRoaXMuZnN3Ll9zeW1saW5rUGF0aHMuaGFzKGZ1bGwpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB0aGlzLmZzdy5fc3ltbGlua1BhdGhzLnNldChmdWxsLCB0cnVlKTtcbn1cblxuX2hhbmRsZVJlYWQoZGlyZWN0b3J5LCBpbml0aWFsQWRkLCB3aCwgdGFyZ2V0LCBkaXIsIGRlcHRoLCB0aHJvdHRsZXIpIHtcbiAgLy8gTm9ybWFsaXplIHRoZSBkaXJlY3RvcnkgbmFtZSBvbiBXaW5kb3dzXG4gIGRpcmVjdG9yeSA9IHN5c1BhdGguam9pbihkaXJlY3RvcnksIEVNUFRZX1NUUik7XG5cbiAgaWYgKCF3aC5oYXNHbG9iKSB7XG4gICAgdGhyb3R0bGVyID0gdGhpcy5mc3cuX3Rocm90dGxlKCdyZWFkZGlyJywgZGlyZWN0b3J5LCAxMDAwKTtcbiAgICBpZiAoIXRocm90dGxlcikgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcHJldmlvdXMgPSB0aGlzLmZzdy5fZ2V0V2F0Y2hlZERpcih3aC5wYXRoKTtcbiAgY29uc3QgY3VycmVudCA9IG5ldyBTZXQoKTtcblxuICBsZXQgc3RyZWFtID0gdGhpcy5mc3cuX3JlYWRkaXJwKGRpcmVjdG9yeSwge1xuICAgIGZpbGVGaWx0ZXI6IGVudHJ5ID0+IHdoLmZpbHRlclBhdGgoZW50cnkpLFxuICAgIGRpcmVjdG9yeUZpbHRlcjogZW50cnkgPT4gd2guZmlsdGVyRGlyKGVudHJ5KSxcbiAgICBkZXB0aDogMFxuICB9KS5vbihTVFJfREFUQSwgYXN5bmMgKGVudHJ5KSA9PiB7XG4gICAgaWYgKHRoaXMuZnN3LmNsb3NlZCkge1xuICAgICAgc3RyZWFtID0gdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpdGVtID0gZW50cnkucGF0aDtcbiAgICBsZXQgcGF0aCA9IHN5c1BhdGguam9pbihkaXJlY3RvcnksIGl0ZW0pO1xuICAgIGN1cnJlbnQuYWRkKGl0ZW0pO1xuXG4gICAgaWYgKGVudHJ5LnN0YXRzLmlzU3ltYm9saWNMaW5rKCkgJiYgYXdhaXQgdGhpcy5faGFuZGxlU3ltbGluayhlbnRyeSwgZGlyZWN0b3J5LCBwYXRoLCBpdGVtKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZzdy5jbG9zZWQpIHtcbiAgICAgIHN0cmVhbSA9IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gRmlsZXMgdGhhdCBwcmVzZW50IGluIGN1cnJlbnQgZGlyZWN0b3J5IHNuYXBzaG90XG4gICAgLy8gYnV0IGFic2VudCBpbiBwcmV2aW91cyBhcmUgYWRkZWQgdG8gd2F0Y2ggbGlzdCBhbmRcbiAgICAvLyBlbWl0IGBhZGRgIGV2ZW50LlxuICAgIGlmIChpdGVtID09PSB0YXJnZXQgfHwgIXRhcmdldCAmJiAhcHJldmlvdXMuaGFzKGl0ZW0pKSB7XG4gICAgICB0aGlzLmZzdy5faW5jclJlYWR5Q291bnQoKTtcblxuICAgICAgLy8gZW5zdXJlIHJlbGF0aXZlbmVzcyBvZiBwYXRoIGlzIHByZXNlcnZlZCBpbiBjYXNlIG9mIHdhdGNoZXIgcmV1c2VcbiAgICAgIHBhdGggPSBzeXNQYXRoLmpvaW4oZGlyLCBzeXNQYXRoLnJlbGF0aXZlKGRpciwgcGF0aCkpO1xuXG4gICAgICB0aGlzLl9hZGRUb05vZGVGcyhwYXRoLCBpbml0aWFsQWRkLCB3aCwgZGVwdGggKyAxKTtcbiAgICB9XG4gIH0pLm9uKEVWX0VSUk9SLCB0aGlzLl9ib3VuZEhhbmRsZUVycm9yKTtcblxuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PlxuICAgIHN0cmVhbS5vbmNlKFNUUl9FTkQsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmZzdy5jbG9zZWQpIHtcbiAgICAgICAgc3RyZWFtID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB3YXNUaHJvdHRsZWQgPSB0aHJvdHRsZXIgPyB0aHJvdHRsZXIuY2xlYXIoKSA6IGZhbHNlO1xuXG4gICAgICByZXNvbHZlKCk7XG5cbiAgICAgIC8vIEZpbGVzIHRoYXQgYWJzZW50IGluIGN1cnJlbnQgZGlyZWN0b3J5IHNuYXBzaG90XG4gICAgICAvLyBidXQgcHJlc2VudCBpbiBwcmV2aW91cyBlbWl0IGByZW1vdmVgIGV2ZW50XG4gICAgICAvLyBhbmQgYXJlIHJlbW92ZWQgZnJvbSBAd2F0Y2hlZFtkaXJlY3RvcnldLlxuICAgICAgcHJldmlvdXMuZ2V0Q2hpbGRyZW4oKS5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT09IGRpcmVjdG9yeSAmJlxuICAgICAgICAgICFjdXJyZW50LmhhcyhpdGVtKSAmJlxuICAgICAgICAgIC8vIGluIGNhc2Ugb2YgaW50ZXJzZWN0aW5nIGdsb2JzO1xuICAgICAgICAgIC8vIGEgcGF0aCBtYXkgaGF2ZSBiZWVuIGZpbHRlcmVkIG91dCBvZiB0aGlzIHJlYWRkaXIsIGJ1dFxuICAgICAgICAgIC8vIHNob3VsZG4ndCBiZSByZW1vdmVkIGJlY2F1c2UgaXQgbWF0Y2hlcyBhIGRpZmZlcmVudCBnbG9iXG4gICAgICAgICAgKCF3aC5oYXNHbG9iIHx8IHdoLmZpbHRlclBhdGgoe1xuICAgICAgICAgICAgZnVsbFBhdGg6IHN5c1BhdGgucmVzb2x2ZShkaXJlY3RvcnksIGl0ZW0pXG4gICAgICAgICAgfSkpO1xuICAgICAgfSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICB0aGlzLmZzdy5fcmVtb3ZlKGRpcmVjdG9yeSwgaXRlbSk7XG4gICAgICB9KTtcblxuICAgICAgc3RyZWFtID0gdW5kZWZpbmVkO1xuXG4gICAgICAvLyBvbmUgbW9yZSB0aW1lIGZvciBhbnkgbWlzc2VkIGluIGNhc2UgY2hhbmdlcyBjYW1lIGluIGV4dHJlbWVseSBxdWlja2x5XG4gICAgICBpZiAod2FzVGhyb3R0bGVkKSB0aGlzLl9oYW5kbGVSZWFkKGRpcmVjdG9yeSwgZmFsc2UsIHdoLCB0YXJnZXQsIGRpciwgZGVwdGgsIHRocm90dGxlcik7XG4gICAgfSlcbiAgKTtcbn1cblxuLyoqXG4gKiBSZWFkIGRpcmVjdG9yeSB0byBhZGQgLyByZW1vdmUgZmlsZXMgZnJvbSBgQHdhdGNoZWRgIGxpc3QgYW5kIHJlLXJlYWQgaXQgb24gY2hhbmdlLlxuICogQHBhcmFtIHtTdHJpbmd9IGRpciBmcyBwYXRoXG4gKiBAcGFyYW0ge2ZzLlN0YXRzfSBzdGF0c1xuICogQHBhcmFtIHtCb29sZWFufSBpbml0aWFsQWRkXG4gKiBAcGFyYW0ge051bWJlcn0gZGVwdGggcmVsYXRpdmUgdG8gdXNlci1zdXBwbGllZCBwYXRoXG4gKiBAcGFyYW0ge1N0cmluZ30gdGFyZ2V0IGNoaWxkIHBhdGggdGFyZ2V0ZWQgZm9yIHdhdGNoXG4gKiBAcGFyYW0ge09iamVjdH0gd2ggQ29tbW9uIHdhdGNoIGhlbHBlcnMgZm9yIHRoaXMgcGF0aFxuICogQHBhcmFtIHtTdHJpbmd9IHJlYWxwYXRoXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxGdW5jdGlvbj59IGNsb3NlciBmb3IgdGhlIHdhdGNoZXIgaW5zdGFuY2UuXG4gKi9cbmFzeW5jIF9oYW5kbGVEaXIoZGlyLCBzdGF0cywgaW5pdGlhbEFkZCwgZGVwdGgsIHRhcmdldCwgd2gsIHJlYWxwYXRoKSB7XG4gIGNvbnN0IHBhcmVudERpciA9IHRoaXMuZnN3Ll9nZXRXYXRjaGVkRGlyKHN5c1BhdGguZGlybmFtZShkaXIpKTtcbiAgY29uc3QgdHJhY2tlZCA9IHBhcmVudERpci5oYXMoc3lzUGF0aC5iYXNlbmFtZShkaXIpKTtcbiAgaWYgKCEoaW5pdGlhbEFkZCAmJiB0aGlzLmZzdy5vcHRpb25zLmlnbm9yZUluaXRpYWwpICYmICF0YXJnZXQgJiYgIXRyYWNrZWQpIHtcbiAgICBpZiAoIXdoLmhhc0dsb2IgfHwgd2guZ2xvYkZpbHRlcihkaXIpKSB0aGlzLmZzdy5fZW1pdChFVl9BRERfRElSLCBkaXIsIHN0YXRzKTtcbiAgfVxuXG4gIC8vIGVuc3VyZSBkaXIgaXMgdHJhY2tlZCAoaGFybWxlc3MgaWYgcmVkdW5kYW50KVxuICBwYXJlbnREaXIuYWRkKHN5c1BhdGguYmFzZW5hbWUoZGlyKSk7XG4gIHRoaXMuZnN3Ll9nZXRXYXRjaGVkRGlyKGRpcik7XG4gIGxldCB0aHJvdHRsZXI7XG4gIGxldCBjbG9zZXI7XG5cbiAgY29uc3Qgb0RlcHRoID0gdGhpcy5mc3cub3B0aW9ucy5kZXB0aDtcbiAgaWYgKChvRGVwdGggPT0gbnVsbCB8fCBkZXB0aCA8PSBvRGVwdGgpICYmICF0aGlzLmZzdy5fc3ltbGlua1BhdGhzLmhhcyhyZWFscGF0aCkpIHtcbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgYXdhaXQgdGhpcy5faGFuZGxlUmVhZChkaXIsIGluaXRpYWxBZGQsIHdoLCB0YXJnZXQsIGRpciwgZGVwdGgsIHRocm90dGxlcik7XG4gICAgICBpZiAodGhpcy5mc3cuY2xvc2VkKSByZXR1cm47XG4gICAgfVxuXG4gICAgY2xvc2VyID0gdGhpcy5fd2F0Y2hXaXRoTm9kZUZzKGRpciwgKGRpclBhdGgsIHN0YXRzKSA9PiB7XG4gICAgICAvLyBpZiBjdXJyZW50IGRpcmVjdG9yeSBpcyByZW1vdmVkLCBkbyBub3RoaW5nXG4gICAgICBpZiAoc3RhdHMgJiYgc3RhdHMubXRpbWVNcyA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICB0aGlzLl9oYW5kbGVSZWFkKGRpclBhdGgsIGZhbHNlLCB3aCwgdGFyZ2V0LCBkaXIsIGRlcHRoLCB0aHJvdHRsZXIpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBjbG9zZXI7XG59XG5cbi8qKlxuICogSGFuZGxlIGFkZGVkIGZpbGUsIGRpcmVjdG9yeSwgb3IgZ2xvYiBwYXR0ZXJuLlxuICogRGVsZWdhdGVzIGNhbGwgdG8gX2hhbmRsZUZpbGUgLyBfaGFuZGxlRGlyIGFmdGVyIGNoZWNrcy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIHRvIGZpbGUgb3IgaXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaW5pdGlhbEFkZCB3YXMgdGhlIGZpbGUgYWRkZWQgYXQgd2F0Y2ggaW5zdGFudGlhdGlvbj9cbiAqIEBwYXJhbSB7T2JqZWN0fSBwcmlvcldoIGRlcHRoIHJlbGF0aXZlIHRvIHVzZXItc3VwcGxpZWQgcGF0aFxuICogQHBhcmFtIHtOdW1iZXJ9IGRlcHRoIENoaWxkIHBhdGggYWN0dWFsbHkgdGFyZ2V0ZWQgZm9yIHdhdGNoXG4gKiBAcGFyYW0ge1N0cmluZz19IHRhcmdldCBDaGlsZCBwYXRoIGFjdHVhbGx5IHRhcmdldGVkIGZvciB3YXRjaFxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbmFzeW5jIF9hZGRUb05vZGVGcyhwYXRoLCBpbml0aWFsQWRkLCBwcmlvcldoLCBkZXB0aCwgdGFyZ2V0KSB7XG4gIGNvbnN0IHJlYWR5ID0gdGhpcy5mc3cuX2VtaXRSZWFkeTtcbiAgaWYgKHRoaXMuZnN3Ll9pc0lnbm9yZWQocGF0aCkgfHwgdGhpcy5mc3cuY2xvc2VkKSB7XG4gICAgcmVhZHkoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCB3aCA9IHRoaXMuZnN3Ll9nZXRXYXRjaEhlbHBlcnMocGF0aCwgZGVwdGgpO1xuICBpZiAoIXdoLmhhc0dsb2IgJiYgcHJpb3JXaCkge1xuICAgIHdoLmhhc0dsb2IgPSBwcmlvcldoLmhhc0dsb2I7XG4gICAgd2guZ2xvYkZpbHRlciA9IHByaW9yV2guZ2xvYkZpbHRlcjtcbiAgICB3aC5maWx0ZXJQYXRoID0gZW50cnkgPT4gcHJpb3JXaC5maWx0ZXJQYXRoKGVudHJ5KTtcbiAgICB3aC5maWx0ZXJEaXIgPSBlbnRyeSA9PiBwcmlvcldoLmZpbHRlckRpcihlbnRyeSk7XG4gIH1cblxuICAvLyBldmFsdWF0ZSB3aGF0IGlzIGF0IHRoZSBwYXRoIHdlJ3JlIGJlaW5nIGFza2VkIHRvIHdhdGNoXG4gIHRyeSB7XG4gICAgY29uc3Qgc3RhdHMgPSBhd2FpdCBzdGF0TWV0aG9kc1t3aC5zdGF0TWV0aG9kXSh3aC53YXRjaFBhdGgpO1xuICAgIGlmICh0aGlzLmZzdy5jbG9zZWQpIHJldHVybjtcbiAgICBpZiAodGhpcy5mc3cuX2lzSWdub3JlZCh3aC53YXRjaFBhdGgsIHN0YXRzKSkge1xuICAgICAgcmVhZHkoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBmb2xsb3cgPSB0aGlzLmZzdy5vcHRpb25zLmZvbGxvd1N5bWxpbmtzICYmICFwYXRoLmluY2x1ZGVzKFNUQVIpICYmICFwYXRoLmluY2x1ZGVzKEJSQUNFX1NUQVJUKTtcbiAgICBsZXQgY2xvc2VyO1xuICAgIGlmIChzdGF0cy5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICBjb25zdCBhYnNQYXRoID0gc3lzUGF0aC5yZXNvbHZlKHBhdGgpO1xuICAgICAgY29uc3QgdGFyZ2V0UGF0aCA9IGZvbGxvdyA/IGF3YWl0IGZzcmVhbHBhdGgocGF0aCkgOiBwYXRoO1xuICAgICAgaWYgKHRoaXMuZnN3LmNsb3NlZCkgcmV0dXJuO1xuICAgICAgY2xvc2VyID0gYXdhaXQgdGhpcy5faGFuZGxlRGlyKHdoLndhdGNoUGF0aCwgc3RhdHMsIGluaXRpYWxBZGQsIGRlcHRoLCB0YXJnZXQsIHdoLCB0YXJnZXRQYXRoKTtcbiAgICAgIGlmICh0aGlzLmZzdy5jbG9zZWQpIHJldHVybjtcbiAgICAgIC8vIHByZXNlcnZlIHRoaXMgc3ltbGluaydzIHRhcmdldCBwYXRoXG4gICAgICBpZiAoYWJzUGF0aCAhPT0gdGFyZ2V0UGF0aCAmJiB0YXJnZXRQYXRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5mc3cuX3N5bWxpbmtQYXRocy5zZXQoYWJzUGF0aCwgdGFyZ2V0UGF0aCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzdGF0cy5pc1N5bWJvbGljTGluaygpKSB7XG4gICAgICBjb25zdCB0YXJnZXRQYXRoID0gZm9sbG93ID8gYXdhaXQgZnNyZWFscGF0aChwYXRoKSA6IHBhdGg7XG4gICAgICBpZiAodGhpcy5mc3cuY2xvc2VkKSByZXR1cm47XG4gICAgICBjb25zdCBwYXJlbnQgPSBzeXNQYXRoLmRpcm5hbWUod2gud2F0Y2hQYXRoKTtcbiAgICAgIHRoaXMuZnN3Ll9nZXRXYXRjaGVkRGlyKHBhcmVudCkuYWRkKHdoLndhdGNoUGF0aCk7XG4gICAgICB0aGlzLmZzdy5fZW1pdChFVl9BREQsIHdoLndhdGNoUGF0aCwgc3RhdHMpO1xuICAgICAgY2xvc2VyID0gYXdhaXQgdGhpcy5faGFuZGxlRGlyKHBhcmVudCwgc3RhdHMsIGluaXRpYWxBZGQsIGRlcHRoLCBwYXRoLCB3aCwgdGFyZ2V0UGF0aCk7XG4gICAgICBpZiAodGhpcy5mc3cuY2xvc2VkKSByZXR1cm47XG5cbiAgICAgIC8vIHByZXNlcnZlIHRoaXMgc3ltbGluaydzIHRhcmdldCBwYXRoXG4gICAgICBpZiAodGFyZ2V0UGF0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuZnN3Ll9zeW1saW5rUGF0aHMuc2V0KHN5c1BhdGgucmVzb2x2ZShwYXRoKSwgdGFyZ2V0UGF0aCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsb3NlciA9IHRoaXMuX2hhbmRsZUZpbGUod2gud2F0Y2hQYXRoLCBzdGF0cywgaW5pdGlhbEFkZCk7XG4gICAgfVxuICAgIHJlYWR5KCk7XG5cbiAgICB0aGlzLmZzdy5fYWRkUGF0aENsb3NlcihwYXRoLCBjbG9zZXIpO1xuICAgIHJldHVybiBmYWxzZTtcblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmICh0aGlzLmZzdy5faGFuZGxlRXJyb3IoZXJyb3IpKSB7XG4gICAgICByZWFkeSgpO1xuICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfVxuICB9XG59XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb2RlRnNIYW5kbGVyO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3Qgc3lzUGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbmNvbnN0IHsgcHJvbWlzaWZ5IH0gPSByZXF1aXJlKCd1dGlsJyk7XG5cbmxldCBmc2V2ZW50cztcbnRyeSB7XG4gIGZzZXZlbnRzID0gcmVxdWlyZSgnZnNldmVudHMnKTtcbn0gY2F0Y2ggKGVycm9yKSB7XG4gIGlmIChwcm9jZXNzLmVudi5DSE9LSURBUl9QUklOVF9GU0VWRU5UU19SRVFVSVJFX0VSUk9SKSBjb25zb2xlLmVycm9yKGVycm9yKTtcbn1cblxuaWYgKGZzZXZlbnRzKSB7XG4gIC8vIFRPRE86IHJlYWwgY2hlY2tcbiAgY29uc3QgbXRjaCA9IHByb2Nlc3MudmVyc2lvbi5tYXRjaCgvdihcXGQrKVxcLihcXGQrKS8pO1xuICBpZiAobXRjaCAmJiBtdGNoWzFdICYmIG10Y2hbMl0pIHtcbiAgICBjb25zdCBtYWogPSBOdW1iZXIucGFyc2VJbnQobXRjaFsxXSwgMTApO1xuICAgIGNvbnN0IG1pbiA9IE51bWJlci5wYXJzZUludChtdGNoWzJdLCAxMCk7XG4gICAgaWYgKG1haiA9PT0gOCAmJiBtaW4gPCAxNikge1xuICAgICAgZnNldmVudHMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHtcbiAgRVZfQURELFxuICBFVl9DSEFOR0UsXG4gIEVWX0FERF9ESVIsXG4gIEVWX1VOTElOSyxcbiAgRVZfRVJST1IsXG4gIFNUUl9EQVRBLFxuICBTVFJfRU5ELFxuICBGU0VWRU5UX0NSRUFURUQsXG4gIEZTRVZFTlRfTU9ESUZJRUQsXG4gIEZTRVZFTlRfREVMRVRFRCxcbiAgRlNFVkVOVF9NT1ZFRCxcbiAgLy8gRlNFVkVOVF9DTE9ORUQsXG4gIEZTRVZFTlRfVU5LTk9XTixcbiAgRlNFVkVOVF9UWVBFX0ZJTEUsXG4gIEZTRVZFTlRfVFlQRV9ESVJFQ1RPUlksXG4gIEZTRVZFTlRfVFlQRV9TWU1MSU5LLFxuXG4gIFJPT1RfR0xPQlNUQVIsXG4gIERJUl9TVUZGSVgsXG4gIERPVF9TTEFTSCxcbiAgRlVOQ1RJT05fVFlQRSxcbiAgRU1QVFlfRk4sXG4gIElERU5USVRZX0ZOXG59ID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcblxuY29uc3QgRGVwdGggPSAodmFsdWUpID0+IGlzTmFOKHZhbHVlKSA/IHt9IDoge2RlcHRoOiB2YWx1ZX07XG5cbmNvbnN0IHN0YXQgPSBwcm9taXNpZnkoZnMuc3RhdCk7XG5jb25zdCBsc3RhdCA9IHByb21pc2lmeShmcy5sc3RhdCk7XG5jb25zdCByZWFscGF0aCA9IHByb21pc2lmeShmcy5yZWFscGF0aCk7XG5cbmNvbnN0IHN0YXRNZXRob2RzID0geyBzdGF0LCBsc3RhdCB9O1xuXG4vKipcbiAqIEB0eXBlZGVmIHtTdHJpbmd9IFBhdGhcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEZzRXZlbnRzV2F0Y2hDb250YWluZXJcbiAqIEBwcm9wZXJ0eSB7U2V0PEZ1bmN0aW9uPn0gbGlzdGVuZXJzXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSByYXdFbWl0dGVyXG4gKiBAcHJvcGVydHkge3tzdG9wOiBGdW5jdGlvbn19IHdhdGNoZXJcbiAqL1xuXG4vLyBmc2V2ZW50cyBpbnN0YW5jZSBoZWxwZXIgZnVuY3Rpb25zXG4vKipcbiAqIE9iamVjdCB0byBob2xkIHBlci1wcm9jZXNzIGZzZXZlbnRzIGluc3RhbmNlcyAobWF5IGJlIHNoYXJlZCBhY3Jvc3MgY2hva2lkYXIgRlNXYXRjaGVyIGluc3RhbmNlcylcbiAqIEB0eXBlIHtNYXA8UGF0aCxGc0V2ZW50c1dhdGNoQ29udGFpbmVyPn1cbiAqL1xuY29uc3QgRlNFdmVudHNXYXRjaGVycyA9IG5ldyBNYXAoKTtcblxuLy8gVGhyZXNob2xkIG9mIGR1cGxpY2F0ZSBwYXRoIHByZWZpeGVzIGF0IHdoaWNoIHRvIHN0YXJ0XG4vLyBjb25zb2xpZGF0aW5nIGdvaW5nIGZvcndhcmRcbmNvbnN0IGNvbnNvbGlkYXRlVGhyZXNoaG9sZCA9IDEwO1xuXG5jb25zdCB3cm9uZ0V2ZW50RmxhZ3MgPSBuZXcgU2V0KFtcbiAgNjk4ODgsIDcwNDAwLCA3MTQyNCwgNzI3MDQsIDczNDcyLCAxMzEzMjgsIDEzMTg0MCwgMjYyOTEyXG5dKTtcblxuLyoqXG4gKiBJbnN0YW50aWF0ZXMgdGhlIGZzZXZlbnRzIGludGVyZmFjZVxuICogQHBhcmFtIHtQYXRofSBwYXRoIHBhdGggdG8gYmUgd2F0Y2hlZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgY2FsbGVkIHdoZW4gZnNldmVudHMgaXMgYm91bmQgYW5kIHJlYWR5XG4gKiBAcmV0dXJucyB7e3N0b3A6IEZ1bmN0aW9ufX0gbmV3IGZzZXZlbnRzIGluc3RhbmNlXG4gKi9cbmNvbnN0IGNyZWF0ZUZTRXZlbnRzSW5zdGFuY2UgPSAocGF0aCwgY2FsbGJhY2spID0+IHtcbiAgY29uc3Qgc3RvcCA9IGZzZXZlbnRzLndhdGNoKHBhdGgsIGNhbGxiYWNrKTtcbiAgcmV0dXJuIHtzdG9wfTtcbn07XG5cbi8qKlxuICogSW5zdGFudGlhdGVzIHRoZSBmc2V2ZW50cyBpbnRlcmZhY2Ugb3IgYmluZHMgbGlzdGVuZXJzIHRvIGFuIGV4aXN0aW5nIG9uZSBjb3ZlcmluZ1xuICogdGhlIHNhbWUgZmlsZSB0cmVlLlxuICogQHBhcmFtIHtQYXRofSBwYXRoICAgICAgICAgICAtIHRvIGJlIHdhdGNoZWRcbiAqIEBwYXJhbSB7UGF0aH0gcmVhbFBhdGggICAgICAgLSByZWFsIHBhdGggZm9yIHN5bWxpbmtzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciAgIC0gY2FsbGVkIHdoZW4gZnNldmVudHMgZW1pdHMgZXZlbnRzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByYXdFbWl0dGVyIC0gcGFzc2VzIGRhdGEgdG8gbGlzdGVuZXJzIG9mIHRoZSAncmF3JyBldmVudFxuICogQHJldHVybnMge0Z1bmN0aW9ufSBjbG9zZXJcbiAqL1xuZnVuY3Rpb24gc2V0RlNFdmVudHNMaXN0ZW5lcihwYXRoLCByZWFsUGF0aCwgbGlzdGVuZXIsIHJhd0VtaXR0ZXIpIHtcbiAgbGV0IHdhdGNoUGF0aCA9IHN5c1BhdGguZXh0bmFtZShyZWFsUGF0aCkgPyBzeXNQYXRoLmRpcm5hbWUocmVhbFBhdGgpIDogcmVhbFBhdGg7XG5cbiAgY29uc3QgcGFyZW50UGF0aCA9IHN5c1BhdGguZGlybmFtZSh3YXRjaFBhdGgpO1xuICBsZXQgY29udCA9IEZTRXZlbnRzV2F0Y2hlcnMuZ2V0KHdhdGNoUGF0aCk7XG5cbiAgLy8gSWYgd2UndmUgYWNjdW11bGF0ZWQgYSBzdWJzdGFudGlhbCBudW1iZXIgb2YgcGF0aHMgdGhhdFxuICAvLyBjb3VsZCBoYXZlIGJlZW4gY29uc29saWRhdGVkIGJ5IHdhdGNoaW5nIG9uZSBkaXJlY3RvcnlcbiAgLy8gYWJvdmUgdGhlIGN1cnJlbnQgb25lLCBjcmVhdGUgYSB3YXRjaGVyIG9uIHRoZSBwYXJlbnRcbiAgLy8gcGF0aCBpbnN0ZWFkLCBzbyB0aGF0IHdlIGRvIGNvbnNvbGlkYXRlIGdvaW5nIGZvcndhcmQuXG4gIGlmIChjb3VsZENvbnNvbGlkYXRlKHBhcmVudFBhdGgpKSB7XG4gICAgd2F0Y2hQYXRoID0gcGFyZW50UGF0aDtcbiAgfVxuXG4gIGNvbnN0IHJlc29sdmVkUGF0aCA9IHN5c1BhdGgucmVzb2x2ZShwYXRoKTtcbiAgY29uc3QgaGFzU3ltbGluayA9IHJlc29sdmVkUGF0aCAhPT0gcmVhbFBhdGg7XG5cbiAgY29uc3QgZmlsdGVyZWRMaXN0ZW5lciA9IChmdWxsUGF0aCwgZmxhZ3MsIGluZm8pID0+IHtcbiAgICBpZiAoaGFzU3ltbGluaykgZnVsbFBhdGggPSBmdWxsUGF0aC5yZXBsYWNlKHJlYWxQYXRoLCByZXNvbHZlZFBhdGgpO1xuICAgIGlmIChcbiAgICAgIGZ1bGxQYXRoID09PSByZXNvbHZlZFBhdGggfHxcbiAgICAgICFmdWxsUGF0aC5pbmRleE9mKHJlc29sdmVkUGF0aCArIHN5c1BhdGguc2VwKVxuICAgICkgbGlzdGVuZXIoZnVsbFBhdGgsIGZsYWdzLCBpbmZvKTtcbiAgfTtcblxuICAvLyBjaGVjayBpZiB0aGVyZSBpcyBhbHJlYWR5IGEgd2F0Y2hlciBvbiBhIHBhcmVudCBwYXRoXG4gIC8vIG1vZGlmaWVzIGB3YXRjaFBhdGhgIHRvIHRoZSBwYXJlbnQgcGF0aCB3aGVuIGl0IGZpbmRzIGEgbWF0Y2hcbiAgbGV0IHdhdGNoZWRQYXJlbnQgPSBmYWxzZTtcbiAgZm9yIChjb25zdCB3YXRjaGVkUGF0aCBvZiBGU0V2ZW50c1dhdGNoZXJzLmtleXMoKSkge1xuICAgIGlmIChyZWFsUGF0aC5pbmRleE9mKHN5c1BhdGgucmVzb2x2ZSh3YXRjaGVkUGF0aCkgKyBzeXNQYXRoLnNlcCkgPT09IDApIHtcbiAgICAgIHdhdGNoUGF0aCA9IHdhdGNoZWRQYXRoO1xuICAgICAgY29udCA9IEZTRXZlbnRzV2F0Y2hlcnMuZ2V0KHdhdGNoUGF0aCk7XG4gICAgICB3YXRjaGVkUGFyZW50ID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjb250IHx8IHdhdGNoZWRQYXJlbnQpIHtcbiAgICBjb250Lmxpc3RlbmVycy5hZGQoZmlsdGVyZWRMaXN0ZW5lcik7XG4gIH0gZWxzZSB7XG4gICAgY29udCA9IHtcbiAgICAgIGxpc3RlbmVyczogbmV3IFNldChbZmlsdGVyZWRMaXN0ZW5lcl0pLFxuICAgICAgcmF3RW1pdHRlcixcbiAgICAgIHdhdGNoZXI6IGNyZWF0ZUZTRXZlbnRzSW5zdGFuY2Uod2F0Y2hQYXRoLCAoZnVsbFBhdGgsIGZsYWdzKSA9PiB7XG4gICAgICAgIGlmICghY29udC5saXN0ZW5lcnMuc2l6ZSkgcmV0dXJuO1xuICAgICAgICBjb25zdCBpbmZvID0gZnNldmVudHMuZ2V0SW5mbyhmdWxsUGF0aCwgZmxhZ3MpO1xuICAgICAgICBjb250Lmxpc3RlbmVycy5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgICAgIGxpc3QoZnVsbFBhdGgsIGZsYWdzLCBpbmZvKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29udC5yYXdFbWl0dGVyKGluZm8uZXZlbnQsIGZ1bGxQYXRoLCBpbmZvKTtcbiAgICAgIH0pXG4gICAgfTtcbiAgICBGU0V2ZW50c1dhdGNoZXJzLnNldCh3YXRjaFBhdGgsIGNvbnQpO1xuICB9XG5cbiAgLy8gcmVtb3ZlcyB0aGlzIGluc3RhbmNlJ3MgbGlzdGVuZXJzIGFuZCBjbG9zZXMgdGhlIHVuZGVybHlpbmcgZnNldmVudHNcbiAgLy8gaW5zdGFuY2UgaWYgdGhlcmUgYXJlIG5vIG1vcmUgbGlzdGVuZXJzIGxlZnRcbiAgcmV0dXJuICgpID0+IHtcbiAgICBjb25zdCBsc3QgPSBjb250Lmxpc3RlbmVycztcblxuICAgIGxzdC5kZWxldGUoZmlsdGVyZWRMaXN0ZW5lcik7XG4gICAgaWYgKCFsc3Quc2l6ZSkge1xuICAgICAgRlNFdmVudHNXYXRjaGVycy5kZWxldGUod2F0Y2hQYXRoKTtcbiAgICAgIGlmIChjb250LndhdGNoZXIpIHJldHVybiBjb250LndhdGNoZXIuc3RvcCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb250LnJhd0VtaXR0ZXIgPSBjb250LndhdGNoZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIE9iamVjdC5mcmVlemUoY29udCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG5cbi8vIERlY2lkZSB3aGV0aGVyIG9yIG5vdCB3ZSBzaG91bGQgc3RhcnQgYSBuZXcgaGlnaGVyLWxldmVsXG4vLyBwYXJlbnQgd2F0Y2hlclxuY29uc3QgY291bGRDb25zb2xpZGF0ZSA9IChwYXRoKSA9PiB7XG4gIGxldCBjb3VudCA9IDA7XG4gIGZvciAoY29uc3Qgd2F0Y2hQYXRoIG9mIEZTRXZlbnRzV2F0Y2hlcnMua2V5cygpKSB7XG4gICAgaWYgKHdhdGNoUGF0aC5pbmRleE9mKHBhdGgpID09PSAwKSB7XG4gICAgICBjb3VudCsrO1xuICAgICAgaWYgKGNvdW50ID49IGNvbnNvbGlkYXRlVGhyZXNoaG9sZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vLyByZXR1cm5zIGJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIGZzZXZlbnRzIGNhbiBiZSB1c2VkXG5jb25zdCBjYW5Vc2UgPSAoKSA9PiBmc2V2ZW50cyAmJiBGU0V2ZW50c1dhdGNoZXJzLnNpemUgPCAxMjg7XG5cbi8vIGRldGVybWluZXMgc3ViZGlyZWN0b3J5IHRyYXZlcnNhbCBsZXZlbHMgZnJvbSByb290IHRvIHBhdGhcbmNvbnN0IGNhbGNEZXB0aCA9IChwYXRoLCByb290KSA9PiB7XG4gIGxldCBpID0gMDtcbiAgd2hpbGUgKCFwYXRoLmluZGV4T2Yocm9vdCkgJiYgKHBhdGggPSBzeXNQYXRoLmRpcm5hbWUocGF0aCkpICE9PSByb290KSBpKys7XG4gIHJldHVybiBpO1xufTtcblxuLy8gcmV0dXJucyBib29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGUgZnNldmVudHMnIGV2ZW50IGluZm8gaGFzIHRoZSBzYW1lIHR5cGVcbi8vIGFzIHRoZSBvbmUgcmV0dXJuZWQgYnkgZnMuc3RhdFxuY29uc3Qgc2FtZVR5cGVzID0gKGluZm8sIHN0YXRzKSA9PiAoXG4gIGluZm8udHlwZSA9PT0gRlNFVkVOVF9UWVBFX0RJUkVDVE9SWSAmJiBzdGF0cy5pc0RpcmVjdG9yeSgpIHx8XG4gIGluZm8udHlwZSA9PT0gRlNFVkVOVF9UWVBFX1NZTUxJTksgJiYgc3RhdHMuaXNTeW1ib2xpY0xpbmsoKSB8fFxuICBpbmZvLnR5cGUgPT09IEZTRVZFTlRfVFlQRV9GSUxFICYmIHN0YXRzLmlzRmlsZSgpXG4pXG5cbi8qKlxuICogQG1peGluXG4gKi9cbmNsYXNzIEZzRXZlbnRzSGFuZGxlciB7XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2luZGV4JykuRlNXYXRjaGVyfSBmc3dcbiAqL1xuY29uc3RydWN0b3IoZnN3KSB7XG4gIHRoaXMuZnN3ID0gZnN3O1xufVxuY2hlY2tJZ25vcmVkKHBhdGgsIHN0YXRzKSB7XG4gIGNvbnN0IGlwYXRocyA9IHRoaXMuZnN3Ll9pZ25vcmVkUGF0aHM7XG4gIGlmICh0aGlzLmZzdy5faXNJZ25vcmVkKHBhdGgsIHN0YXRzKSkge1xuICAgIGlwYXRocy5hZGQocGF0aCk7XG4gICAgaWYgKHN0YXRzICYmIHN0YXRzLmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgIGlwYXRocy5hZGQocGF0aCArIFJPT1RfR0xPQlNUQVIpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlwYXRocy5kZWxldGUocGF0aCk7XG4gIGlwYXRocy5kZWxldGUocGF0aCArIFJPT1RfR0xPQlNUQVIpO1xufVxuXG5hZGRPckNoYW5nZShwYXRoLCBmdWxsUGF0aCwgcmVhbFBhdGgsIHBhcmVudCwgd2F0Y2hlZERpciwgaXRlbSwgaW5mbywgb3B0cykge1xuICBjb25zdCBldmVudCA9IHdhdGNoZWREaXIuaGFzKGl0ZW0pID8gRVZfQ0hBTkdFIDogRVZfQUREO1xuICB0aGlzLmhhbmRsZUV2ZW50KGV2ZW50LCBwYXRoLCBmdWxsUGF0aCwgcmVhbFBhdGgsIHBhcmVudCwgd2F0Y2hlZERpciwgaXRlbSwgaW5mbywgb3B0cyk7XG59XG5cbmFzeW5jIGNoZWNrRXhpc3RzKHBhdGgsIGZ1bGxQYXRoLCByZWFsUGF0aCwgcGFyZW50LCB3YXRjaGVkRGlyLCBpdGVtLCBpbmZvLCBvcHRzKSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgc3RhdHMgPSBhd2FpdCBzdGF0KHBhdGgpXG4gICAgaWYgKHRoaXMuZnN3LmNsb3NlZCkgcmV0dXJuO1xuICAgIGlmIChzYW1lVHlwZXMoaW5mbywgc3RhdHMpKSB7XG4gICAgICB0aGlzLmFkZE9yQ2hhbmdlKHBhdGgsIGZ1bGxQYXRoLCByZWFsUGF0aCwgcGFyZW50LCB3YXRjaGVkRGlyLCBpdGVtLCBpbmZvLCBvcHRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oYW5kbGVFdmVudChFVl9VTkxJTkssIHBhdGgsIGZ1bGxQYXRoLCByZWFsUGF0aCwgcGFyZW50LCB3YXRjaGVkRGlyLCBpdGVtLCBpbmZvLCBvcHRzKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKGVycm9yLmNvZGUgPT09ICdFQUNDRVMnKSB7XG4gICAgICB0aGlzLmFkZE9yQ2hhbmdlKHBhdGgsIGZ1bGxQYXRoLCByZWFsUGF0aCwgcGFyZW50LCB3YXRjaGVkRGlyLCBpdGVtLCBpbmZvLCBvcHRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oYW5kbGVFdmVudChFVl9VTkxJTkssIHBhdGgsIGZ1bGxQYXRoLCByZWFsUGF0aCwgcGFyZW50LCB3YXRjaGVkRGlyLCBpdGVtLCBpbmZvLCBvcHRzKTtcbiAgICB9XG4gIH1cbn1cblxuaGFuZGxlRXZlbnQoZXZlbnQsIHBhdGgsIGZ1bGxQYXRoLCByZWFsUGF0aCwgcGFyZW50LCB3YXRjaGVkRGlyLCBpdGVtLCBpbmZvLCBvcHRzKSB7XG4gIGlmICh0aGlzLmZzdy5jbG9zZWQgfHwgdGhpcy5jaGVja0lnbm9yZWQocGF0aCkpIHJldHVybjtcblxuICBpZiAoZXZlbnQgPT09IEVWX1VOTElOSykge1xuICAgIGNvbnN0IGlzRGlyZWN0b3J5ID0gaW5mby50eXBlID09PSBGU0VWRU5UX1RZUEVfRElSRUNUT1JZXG4gICAgLy8gc3VwcHJlc3MgdW5saW5rIGV2ZW50cyBvbiBuZXZlciBiZWZvcmUgc2VlbiBmaWxlc1xuICAgIGlmIChpc0RpcmVjdG9yeSB8fCB3YXRjaGVkRGlyLmhhcyhpdGVtKSkge1xuICAgICAgdGhpcy5mc3cuX3JlbW92ZShwYXJlbnQsIGl0ZW0sIGlzRGlyZWN0b3J5KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGV2ZW50ID09PSBFVl9BREQpIHtcbiAgICAgIC8vIHRyYWNrIG5ldyBkaXJlY3Rvcmllc1xuICAgICAgaWYgKGluZm8udHlwZSA9PT0gRlNFVkVOVF9UWVBFX0RJUkVDVE9SWSkgdGhpcy5mc3cuX2dldFdhdGNoZWREaXIocGF0aCk7XG5cbiAgICAgIGlmIChpbmZvLnR5cGUgPT09IEZTRVZFTlRfVFlQRV9TWU1MSU5LICYmIG9wdHMuZm9sbG93U3ltbGlua3MpIHtcbiAgICAgICAgLy8gcHVzaCBzeW1saW5rcyBiYWNrIHRvIHRoZSB0b3Agb2YgdGhlIHN0YWNrIHRvIGdldCBoYW5kbGVkXG4gICAgICAgIGNvbnN0IGN1ckRlcHRoID0gb3B0cy5kZXB0aCA9PT0gdW5kZWZpbmVkID9cbiAgICAgICAgICB1bmRlZmluZWQgOiBjYWxjRGVwdGgoZnVsbFBhdGgsIHJlYWxQYXRoKSArIDE7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRUb0ZzRXZlbnRzKHBhdGgsIGZhbHNlLCB0cnVlLCBjdXJEZXB0aCk7XG4gICAgICB9XG5cbiAgICAgIC8vIHRyYWNrIG5ldyBwYXRoc1xuICAgICAgLy8gKG90aGVyIHRoYW4gc3ltbGlua3MgYmVpbmcgZm9sbG93ZWQsIHdoaWNoIHdpbGwgYmUgdHJhY2tlZCBzb29uKVxuICAgICAgdGhpcy5mc3cuX2dldFdhdGNoZWREaXIocGFyZW50KS5hZGQoaXRlbSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEB0eXBlIHsnYWRkJ3wnYWRkRGlyJ3wndW5saW5rJ3wndW5saW5rRGlyJ31cbiAgICAgKi9cbiAgICBjb25zdCBldmVudE5hbWUgPSBpbmZvLnR5cGUgPT09IEZTRVZFTlRfVFlQRV9ESVJFQ1RPUlkgPyBldmVudCArIERJUl9TVUZGSVggOiBldmVudDtcbiAgICB0aGlzLmZzdy5fZW1pdChldmVudE5hbWUsIHBhdGgpO1xuICAgIGlmIChldmVudE5hbWUgPT09IEVWX0FERF9ESVIpIHRoaXMuX2FkZFRvRnNFdmVudHMocGF0aCwgZmFsc2UsIHRydWUpO1xuICB9XG59XG5cbi8qKlxuICogSGFuZGxlIHN5bWxpbmtzIGVuY291bnRlcmVkIGR1cmluZyBkaXJlY3Rvcnkgc2NhblxuICogQHBhcmFtIHtTdHJpbmd9IHdhdGNoUGF0aCAgLSBmaWxlL2RpciBwYXRoIHRvIGJlIHdhdGNoZWQgd2l0aCBmc2V2ZW50c1xuICogQHBhcmFtIHtTdHJpbmd9IHJlYWxQYXRoICAgLSByZWFsIHBhdGggKGluIGNhc2Ugb2Ygc3ltbGlua3MpXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gIC0gcGF0aCB0cmFuc2Zvcm1lclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZ2xvYkZpbHRlciAtIHBhdGggZmlsdGVyIGluIGNhc2UgYSBnbG9iIHBhdHRlcm4gd2FzIHByb3ZpZGVkXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IGNsb3NlciBmb3IgdGhlIHdhdGNoZXIgaW5zdGFuY2VcbiovXG5fd2F0Y2hXaXRoRnNFdmVudHMod2F0Y2hQYXRoLCByZWFsUGF0aCwgdHJhbnNmb3JtLCBnbG9iRmlsdGVyKSB7XG4gIGlmICh0aGlzLmZzdy5jbG9zZWQgfHwgdGhpcy5mc3cuX2lzSWdub3JlZCh3YXRjaFBhdGgpKSByZXR1cm47XG4gIGNvbnN0IG9wdHMgPSB0aGlzLmZzdy5vcHRpb25zO1xuICBjb25zdCB3YXRjaENhbGxiYWNrID0gYXN5bmMgKGZ1bGxQYXRoLCBmbGFncywgaW5mbykgPT4ge1xuICAgIGlmICh0aGlzLmZzdy5jbG9zZWQpIHJldHVybjtcbiAgICBpZiAoXG4gICAgICBvcHRzLmRlcHRoICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIGNhbGNEZXB0aChmdWxsUGF0aCwgcmVhbFBhdGgpID4gb3B0cy5kZXB0aFxuICAgICkgcmV0dXJuO1xuICAgIGNvbnN0IHBhdGggPSB0cmFuc2Zvcm0oc3lzUGF0aC5qb2luKFxuICAgICAgd2F0Y2hQYXRoLCBzeXNQYXRoLnJlbGF0aXZlKHdhdGNoUGF0aCwgZnVsbFBhdGgpXG4gICAgKSk7XG4gICAgaWYgKGdsb2JGaWx0ZXIgJiYgIWdsb2JGaWx0ZXIocGF0aCkpIHJldHVybjtcbiAgICAvLyBlbnN1cmUgZGlyZWN0b3JpZXMgYXJlIHRyYWNrZWRcbiAgICBjb25zdCBwYXJlbnQgPSBzeXNQYXRoLmRpcm5hbWUocGF0aCk7XG4gICAgY29uc3QgaXRlbSA9IHN5c1BhdGguYmFzZW5hbWUocGF0aCk7XG4gICAgY29uc3Qgd2F0Y2hlZERpciA9IHRoaXMuZnN3Ll9nZXRXYXRjaGVkRGlyKFxuICAgICAgaW5mby50eXBlID09PSBGU0VWRU5UX1RZUEVfRElSRUNUT1JZID8gcGF0aCA6IHBhcmVudFxuICAgICk7XG5cbiAgICAvLyBjb3JyZWN0IGZvciB3cm9uZyBldmVudHMgZW1pdHRlZFxuICAgIGlmICh3cm9uZ0V2ZW50RmxhZ3MuaGFzKGZsYWdzKSB8fCBpbmZvLmV2ZW50ID09PSBGU0VWRU5UX1VOS05PV04pIHtcbiAgICAgIGlmICh0eXBlb2Ygb3B0cy5pZ25vcmVkID09PSBGVU5DVElPTl9UWVBFKSB7XG4gICAgICAgIGxldCBzdGF0cztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBzdGF0cyA9IGF3YWl0IHN0YXQocGF0aCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAgICAgICBpZiAodGhpcy5mc3cuY2xvc2VkKSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLmNoZWNrSWdub3JlZChwYXRoLCBzdGF0cykpIHJldHVybjtcbiAgICAgICAgaWYgKHNhbWVUeXBlcyhpbmZvLCBzdGF0cykpIHtcbiAgICAgICAgICB0aGlzLmFkZE9yQ2hhbmdlKHBhdGgsIGZ1bGxQYXRoLCByZWFsUGF0aCwgcGFyZW50LCB3YXRjaGVkRGlyLCBpdGVtLCBpbmZvLCBvcHRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZUV2ZW50KEVWX1VOTElOSywgcGF0aCwgZnVsbFBhdGgsIHJlYWxQYXRoLCBwYXJlbnQsIHdhdGNoZWREaXIsIGl0ZW0sIGluZm8sIG9wdHMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNoZWNrRXhpc3RzKHBhdGgsIGZ1bGxQYXRoLCByZWFsUGF0aCwgcGFyZW50LCB3YXRjaGVkRGlyLCBpdGVtLCBpbmZvLCBvcHRzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3dpdGNoIChpbmZvLmV2ZW50KSB7XG4gICAgICBjYXNlIEZTRVZFTlRfQ1JFQVRFRDpcbiAgICAgIGNhc2UgRlNFVkVOVF9NT0RJRklFRDpcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkT3JDaGFuZ2UocGF0aCwgZnVsbFBhdGgsIHJlYWxQYXRoLCBwYXJlbnQsIHdhdGNoZWREaXIsIGl0ZW0sIGluZm8sIG9wdHMpO1xuICAgICAgY2FzZSBGU0VWRU5UX0RFTEVURUQ6XG4gICAgICBjYXNlIEZTRVZFTlRfTU9WRUQ6XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrRXhpc3RzKHBhdGgsIGZ1bGxQYXRoLCByZWFsUGF0aCwgcGFyZW50LCB3YXRjaGVkRGlyLCBpdGVtLCBpbmZvLCBvcHRzKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2xvc2VyID0gc2V0RlNFdmVudHNMaXN0ZW5lcihcbiAgICB3YXRjaFBhdGgsXG4gICAgcmVhbFBhdGgsXG4gICAgd2F0Y2hDYWxsYmFjayxcbiAgICB0aGlzLmZzdy5fZW1pdFJhd1xuICApO1xuXG4gIHRoaXMuZnN3Ll9lbWl0UmVhZHkoKTtcbiAgcmV0dXJuIGNsb3Nlcjtcbn1cblxuLyoqXG4gKiBIYW5kbGUgc3ltbGlua3MgZW5jb3VudGVyZWQgZHVyaW5nIGRpcmVjdG9yeSBzY2FuXG4gKiBAcGFyYW0ge1N0cmluZ30gbGlua1BhdGggcGF0aCB0byBzeW1saW5rXG4gKiBAcGFyYW0ge1N0cmluZ30gZnVsbFBhdGggYWJzb2x1dGUgcGF0aCB0byB0aGUgc3ltbGlua1xuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIHByZS1leGlzdGluZyBwYXRoIHRyYW5zZm9ybWVyXG4gKiBAcGFyYW0ge051bWJlcn0gY3VyRGVwdGggbGV2ZWwgb2Ygc3ViZGlyZWN0b3JpZXMgdHJhdmVyc2VkIHRvIHdoZXJlIHN5bWxpbmsgaXNcbiAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICovXG5hc3luYyBfaGFuZGxlRnNFdmVudHNTeW1saW5rKGxpbmtQYXRoLCBmdWxsUGF0aCwgdHJhbnNmb3JtLCBjdXJEZXB0aCkge1xuICAvLyBkb24ndCBmb2xsb3cgdGhlIHNhbWUgc3ltbGluayBtb3JlIHRoYW4gb25jZVxuICBpZiAodGhpcy5mc3cuY2xvc2VkIHx8IHRoaXMuZnN3Ll9zeW1saW5rUGF0aHMuaGFzKGZ1bGxQYXRoKSkgcmV0dXJuO1xuXG4gIHRoaXMuZnN3Ll9zeW1saW5rUGF0aHMuc2V0KGZ1bGxQYXRoLCB0cnVlKTtcbiAgdGhpcy5mc3cuX2luY3JSZWFkeUNvdW50KCk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBsaW5rVGFyZ2V0ID0gYXdhaXQgcmVhbHBhdGgobGlua1BhdGgpO1xuICAgIGlmICh0aGlzLmZzdy5jbG9zZWQpIHJldHVybjtcbiAgICBpZiAodGhpcy5mc3cuX2lzSWdub3JlZChsaW5rVGFyZ2V0KSkge1xuICAgICAgcmV0dXJuIHRoaXMuZnN3Ll9lbWl0UmVhZHkoKTtcbiAgICB9XG5cbiAgICB0aGlzLmZzdy5faW5jclJlYWR5Q291bnQoKTtcblxuICAgIC8vIGFkZCB0aGUgbGlua1RhcmdldCBmb3Igd2F0Y2hpbmcgd2l0aCBhIHdyYXBwZXIgZm9yIHRyYW5zZm9ybVxuICAgIC8vIHRoYXQgY2F1c2VzIGVtaXR0ZWQgcGF0aHMgdG8gaW5jb3Jwb3JhdGUgdGhlIGxpbmsncyBwYXRoXG4gICAgdGhpcy5fYWRkVG9Gc0V2ZW50cyhsaW5rVGFyZ2V0IHx8IGxpbmtQYXRoLCAocGF0aCkgPT4ge1xuICAgICAgbGV0IGFsaWFzZWRQYXRoID0gbGlua1BhdGg7XG4gICAgICBpZiAobGlua1RhcmdldCAmJiBsaW5rVGFyZ2V0ICE9PSBET1RfU0xBU0gpIHtcbiAgICAgICAgYWxpYXNlZFBhdGggPSBwYXRoLnJlcGxhY2UobGlua1RhcmdldCwgbGlua1BhdGgpO1xuICAgICAgfSBlbHNlIGlmIChwYXRoICE9PSBET1RfU0xBU0gpIHtcbiAgICAgICAgYWxpYXNlZFBhdGggPSBzeXNQYXRoLmpvaW4obGlua1BhdGgsIHBhdGgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRyYW5zZm9ybShhbGlhc2VkUGF0aCk7XG4gICAgfSwgZmFsc2UsIGN1ckRlcHRoKTtcbiAgfSBjYXRjaChlcnJvcikge1xuICAgIGlmICh0aGlzLmZzdy5faGFuZGxlRXJyb3IoZXJyb3IpKSB7XG4gICAgICByZXR1cm4gdGhpcy5mc3cuX2VtaXRSZWFkeSgpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1BhdGh9IG5ld1BhdGhcbiAqIEBwYXJhbSB7ZnMuU3RhdHN9IHN0YXRzXG4gKi9cbmVtaXRBZGQobmV3UGF0aCwgc3RhdHMsIHByb2Nlc3NQYXRoLCBvcHRzLCBmb3JjZUFkZCkge1xuICBjb25zdCBwcCA9IHByb2Nlc3NQYXRoKG5ld1BhdGgpO1xuICBjb25zdCBpc0RpciA9IHN0YXRzLmlzRGlyZWN0b3J5KCk7XG4gIGNvbnN0IGRpck9iaiA9IHRoaXMuZnN3Ll9nZXRXYXRjaGVkRGlyKHN5c1BhdGguZGlybmFtZShwcCkpO1xuICBjb25zdCBiYXNlID0gc3lzUGF0aC5iYXNlbmFtZShwcCk7XG5cbiAgLy8gZW5zdXJlIGVtcHR5IGRpcnMgZ2V0IHRyYWNrZWRcbiAgaWYgKGlzRGlyKSB0aGlzLmZzdy5fZ2V0V2F0Y2hlZERpcihwcCk7XG4gIGlmIChkaXJPYmouaGFzKGJhc2UpKSByZXR1cm47XG4gIGRpck9iai5hZGQoYmFzZSk7XG5cbiAgaWYgKCFvcHRzLmlnbm9yZUluaXRpYWwgfHwgZm9yY2VBZGQgPT09IHRydWUpIHtcbiAgICB0aGlzLmZzdy5fZW1pdChpc0RpciA/IEVWX0FERF9ESVIgOiBFVl9BREQsIHBwLCBzdGF0cyk7XG4gIH1cbn1cblxuaW5pdFdhdGNoKHJlYWxQYXRoLCBwYXRoLCB3aCwgcHJvY2Vzc1BhdGgpIHtcbiAgaWYgKHRoaXMuZnN3LmNsb3NlZCkgcmV0dXJuO1xuICBjb25zdCBjbG9zZXIgPSB0aGlzLl93YXRjaFdpdGhGc0V2ZW50cyhcbiAgICB3aC53YXRjaFBhdGgsXG4gICAgc3lzUGF0aC5yZXNvbHZlKHJlYWxQYXRoIHx8IHdoLndhdGNoUGF0aCksXG4gICAgcHJvY2Vzc1BhdGgsXG4gICAgd2guZ2xvYkZpbHRlclxuICApO1xuICB0aGlzLmZzdy5fYWRkUGF0aENsb3NlcihwYXRoLCBjbG9zZXIpO1xufVxuXG4vKipcbiAqIEhhbmRsZSBhZGRlZCBwYXRoIHdpdGggZnNldmVudHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIGZpbGUvZGlyIHBhdGggb3IgZ2xvYiBwYXR0ZXJuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufEJvb2xlYW49fSB0cmFuc2Zvcm0gY29udmVydHMgd29ya2luZyBwYXRoIHRvIHdoYXQgdGhlIHVzZXIgZXhwZWN0c1xuICogQHBhcmFtIHtCb29sZWFuPX0gZm9yY2VBZGQgZW5zdXJlIGFkZCBpcyBlbWl0dGVkXG4gKiBAcGFyYW0ge051bWJlcj19IHByaW9yRGVwdGggTGV2ZWwgb2Ygc3ViZGlyZWN0b3JpZXMgYWxyZWFkeSB0cmF2ZXJzZWQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAqL1xuYXN5bmMgX2FkZFRvRnNFdmVudHMocGF0aCwgdHJhbnNmb3JtLCBmb3JjZUFkZCwgcHJpb3JEZXB0aCkge1xuICBpZiAodGhpcy5mc3cuY2xvc2VkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IG9wdHMgPSB0aGlzLmZzdy5vcHRpb25zO1xuICBjb25zdCBwcm9jZXNzUGF0aCA9IHR5cGVvZiB0cmFuc2Zvcm0gPT09IEZVTkNUSU9OX1RZUEUgPyB0cmFuc2Zvcm0gOiBJREVOVElUWV9GTjtcblxuICBjb25zdCB3aCA9IHRoaXMuZnN3Ll9nZXRXYXRjaEhlbHBlcnMocGF0aCk7XG5cbiAgLy8gZXZhbHVhdGUgd2hhdCBpcyBhdCB0aGUgcGF0aCB3ZSdyZSBiZWluZyBhc2tlZCB0byB3YXRjaFxuICB0cnkge1xuICAgIGNvbnN0IHN0YXRzID0gYXdhaXQgc3RhdE1ldGhvZHNbd2guc3RhdE1ldGhvZF0od2gud2F0Y2hQYXRoKTtcbiAgICBpZiAodGhpcy5mc3cuY2xvc2VkKSByZXR1cm47XG4gICAgaWYgKHRoaXMuZnN3Ll9pc0lnbm9yZWQod2gud2F0Y2hQYXRoLCBzdGF0cykpIHtcbiAgICAgIHRocm93IG51bGw7XG4gICAgfVxuICAgIGlmIChzdGF0cy5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAvLyBlbWl0IGFkZERpciB1bmxlc3MgdGhpcyBpcyBhIGdsb2IgcGFyZW50XG4gICAgICBpZiAoIXdoLmdsb2JGaWx0ZXIpIHRoaXMuZW1pdEFkZChwcm9jZXNzUGF0aChwYXRoKSwgc3RhdHMsIHByb2Nlc3NQYXRoLCBvcHRzLCBmb3JjZUFkZCk7XG5cbiAgICAgIC8vIGRvbid0IHJlY3Vyc2UgZnVydGhlciBpZiBpdCB3b3VsZCBleGNlZWQgZGVwdGggc2V0dGluZ1xuICAgICAgaWYgKHByaW9yRGVwdGggJiYgcHJpb3JEZXB0aCA+IG9wdHMuZGVwdGgpIHJldHVybjtcblxuICAgICAgLy8gc2NhbiB0aGUgY29udGVudHMgb2YgdGhlIGRpclxuICAgICAgdGhpcy5mc3cuX3JlYWRkaXJwKHdoLndhdGNoUGF0aCwge1xuICAgICAgICBmaWxlRmlsdGVyOiBlbnRyeSA9PiB3aC5maWx0ZXJQYXRoKGVudHJ5KSxcbiAgICAgICAgZGlyZWN0b3J5RmlsdGVyOiBlbnRyeSA9PiB3aC5maWx0ZXJEaXIoZW50cnkpLFxuICAgICAgICAuLi5EZXB0aChvcHRzLmRlcHRoIC0gKHByaW9yRGVwdGggfHwgMCkpXG4gICAgICB9KS5vbihTVFJfREFUQSwgKGVudHJ5KSA9PiB7XG4gICAgICAgIC8vIG5lZWQgdG8gY2hlY2sgZmlsdGVyUGF0aCBvbiBkaXJzIGIvYyBmaWx0ZXJEaXIgaXMgbGVzcyByZXN0cmljdGl2ZVxuICAgICAgICBpZiAodGhpcy5mc3cuY2xvc2VkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbnRyeS5zdGF0cy5pc0RpcmVjdG9yeSgpICYmICF3aC5maWx0ZXJQYXRoKGVudHJ5KSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGpvaW5lZFBhdGggPSBzeXNQYXRoLmpvaW4od2gud2F0Y2hQYXRoLCBlbnRyeS5wYXRoKTtcbiAgICAgICAgY29uc3Qge2Z1bGxQYXRofSA9IGVudHJ5O1xuXG4gICAgICAgIGlmICh3aC5mb2xsb3dTeW1saW5rcyAmJiBlbnRyeS5zdGF0cy5pc1N5bWJvbGljTGluaygpKSB7XG4gICAgICAgICAgLy8gcHJlc2VydmUgdGhlIGN1cnJlbnQgZGVwdGggaGVyZSBzaW5jZSBpdCBjYW4ndCBiZSBkZXJpdmVkIGZyb21cbiAgICAgICAgICAvLyByZWFsIHBhdGhzIHBhc3QgdGhlIHN5bWxpbmtcbiAgICAgICAgICBjb25zdCBjdXJEZXB0aCA9IG9wdHMuZGVwdGggPT09IHVuZGVmaW5lZCA/XG4gICAgICAgICAgICB1bmRlZmluZWQgOiBjYWxjRGVwdGgoam9pbmVkUGF0aCwgc3lzUGF0aC5yZXNvbHZlKHdoLndhdGNoUGF0aCkpICsgMTtcblxuICAgICAgICAgIHRoaXMuX2hhbmRsZUZzRXZlbnRzU3ltbGluayhqb2luZWRQYXRoLCBmdWxsUGF0aCwgcHJvY2Vzc1BhdGgsIGN1ckRlcHRoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmVtaXRBZGQoam9pbmVkUGF0aCwgZW50cnkuc3RhdHMsIHByb2Nlc3NQYXRoLCBvcHRzLCBmb3JjZUFkZCk7XG4gICAgICAgIH1cbiAgICAgIH0pLm9uKEVWX0VSUk9SLCBFTVBUWV9GTikub24oU1RSX0VORCwgKCkgPT4ge1xuICAgICAgICB0aGlzLmZzdy5fZW1pdFJlYWR5KCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbWl0QWRkKHdoLndhdGNoUGF0aCwgc3RhdHMsIHByb2Nlc3NQYXRoLCBvcHRzLCBmb3JjZUFkZCk7XG4gICAgICB0aGlzLmZzdy5fZW1pdFJlYWR5KCk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmICghZXJyb3IgfHwgdGhpcy5mc3cuX2hhbmRsZUVycm9yKGVycm9yKSkge1xuICAgICAgLy8gVE9ETzogU3RyYW5nZSB0aGluZzogXCJzaG91bGQgbm90IGNob2tlIG9uIGFuIGlnbm9yZWQgd2F0Y2ggcGF0aFwiIHdpbGwgYmUgZmFpbGVkIHdpdGhvdXQgMiByZWFkeSBjYWxscyAtX18tXG4gICAgICB0aGlzLmZzdy5fZW1pdFJlYWR5KCk7XG4gICAgICB0aGlzLmZzdy5fZW1pdFJlYWR5KCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKG9wdHMucGVyc2lzdGVudCAmJiBmb3JjZUFkZCAhPT0gdHJ1ZSkge1xuICAgIGlmICh0eXBlb2YgdHJhbnNmb3JtID09PSBGVU5DVElPTl9UWVBFKSB7XG4gICAgICAvLyByZWFscGF0aCBoYXMgYWxyZWFkeSBiZWVuIHJlc29sdmVkXG4gICAgICB0aGlzLmluaXRXYXRjaCh1bmRlZmluZWQsIHBhdGgsIHdoLCBwcm9jZXNzUGF0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCByZWFsUGF0aDtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlYWxQYXRoID0gYXdhaXQgcmVhbHBhdGgod2gud2F0Y2hQYXRoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB0aGlzLmluaXRXYXRjaChyZWFsUGF0aCwgcGF0aCwgd2gsIHByb2Nlc3NQYXRoKTtcbiAgICB9XG4gIH1cbn1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZzRXZlbnRzSGFuZGxlcjtcbm1vZHVsZS5leHBvcnRzLmNhblVzZSA9IGNhblVzZTtcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHsgRXZlbnRFbWl0dGVyIH0gPSByZXF1aXJlKCdldmVudHMnKTtcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbmNvbnN0IHN5c1BhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5jb25zdCB7IHByb21pc2lmeSB9ID0gcmVxdWlyZSgndXRpbCcpO1xuY29uc3QgcmVhZGRpcnAgPSByZXF1aXJlKCdyZWFkZGlycCcpO1xuY29uc3QgYW55bWF0Y2ggPSByZXF1aXJlKCdhbnltYXRjaCcpLmRlZmF1bHQ7XG5jb25zdCBnbG9iUGFyZW50ID0gcmVxdWlyZSgnZ2xvYi1wYXJlbnQnKTtcbmNvbnN0IGlzR2xvYiA9IHJlcXVpcmUoJ2lzLWdsb2InKTtcbmNvbnN0IGJyYWNlcyA9IHJlcXVpcmUoJ2JyYWNlcycpO1xuY29uc3Qgbm9ybWFsaXplUGF0aCA9IHJlcXVpcmUoJ25vcm1hbGl6ZS1wYXRoJyk7XG5cbmNvbnN0IE5vZGVGc0hhbmRsZXIgPSByZXF1aXJlKCcuL2xpYi9ub2RlZnMtaGFuZGxlcicpO1xuY29uc3QgRnNFdmVudHNIYW5kbGVyID0gcmVxdWlyZSgnLi9saWIvZnNldmVudHMtaGFuZGxlcicpO1xuY29uc3Qge1xuICBFVl9BTEwsXG4gIEVWX1JFQURZLFxuICBFVl9BREQsXG4gIEVWX0NIQU5HRSxcbiAgRVZfVU5MSU5LLFxuICBFVl9BRERfRElSLFxuICBFVl9VTkxJTktfRElSLFxuICBFVl9SQVcsXG4gIEVWX0VSUk9SLFxuXG4gIFNUUl9DTE9TRSxcbiAgU1RSX0VORCxcblxuICBCQUNLX1NMQVNIX1JFLFxuICBET1VCTEVfU0xBU0hfUkUsXG4gIFNMQVNIX09SX0JBQ0tfU0xBU0hfUkUsXG4gIERPVF9SRSxcbiAgUkVQTEFDRVJfUkUsXG5cbiAgU0xBU0gsXG4gIFNMQVNIX1NMQVNILFxuICBCUkFDRV9TVEFSVCxcbiAgQkFORyxcbiAgT05FX0RPVCxcbiAgVFdPX0RPVFMsXG4gIEdMT0JTVEFSLFxuICBTTEFTSF9HTE9CU1RBUixcbiAgQU5ZTUFUQ0hfT1BUUyxcbiAgU1RSSU5HX1RZUEUsXG4gIEZVTkNUSU9OX1RZUEUsXG4gIEVNUFRZX1NUUixcbiAgRU1QVFlfRk4sXG5cbiAgaXNXaW5kb3dzLFxuICBpc01hY29zLFxuICBpc0lCTWlcbn0gPSByZXF1aXJlKCcuL2xpYi9jb25zdGFudHMnKTtcblxuY29uc3Qgc3RhdCA9IHByb21pc2lmeShmcy5zdGF0KTtcbmNvbnN0IHJlYWRkaXIgPSBwcm9taXNpZnkoZnMucmVhZGRpcik7XG5cbi8qKlxuICogQHR5cGVkZWYge1N0cmluZ30gUGF0aFxuICogQHR5cGVkZWYgeydhbGwnfCdhZGQnfCdhZGREaXInfCdjaGFuZ2UnfCd1bmxpbmsnfCd1bmxpbmtEaXInfCdyYXcnfCdlcnJvcid8J3JlYWR5J30gRXZlbnROYW1lXG4gKiBAdHlwZWRlZiB7J3JlYWRkaXInfCd3YXRjaCd8J2FkZCd8J3JlbW92ZSd8J2NoYW5nZSd9IFRocm90dGxlVHlwZVxuICovXG5cbi8qKlxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFdhdGNoSGVscGVyc1xuICogQHByb3BlcnR5IHtCb29sZWFufSBmb2xsb3dTeW1saW5rc1xuICogQHByb3BlcnR5IHsnc3RhdCd8J2xzdGF0J30gc3RhdE1ldGhvZFxuICogQHByb3BlcnR5IHtQYXRofSBwYXRoXG4gKiBAcHJvcGVydHkge1BhdGh9IHdhdGNoUGF0aFxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gZW50cnlQYXRoXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IGhhc0dsb2JcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBnbG9iRmlsdGVyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBmaWx0ZXJQYXRoXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBmaWx0ZXJEaXJcbiAqL1xuXG5jb25zdCBhcnJpZnkgPSAodmFsdWUgPSBbXSkgPT4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV07XG5jb25zdCBmbGF0dGVuID0gKGxpc3QsIHJlc3VsdCA9IFtdKSA9PiB7XG4gIGxpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSkge1xuICAgICAgZmxhdHRlbihpdGVtLCByZXN1bHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucHVzaChpdGVtKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgdW5pZnlQYXRocyA9IChwYXRoc18pID0+IHtcbiAgLyoqXG4gICAqIEB0eXBlIHtBcnJheTxTdHJpbmc+fVxuICAgKi9cbiAgY29uc3QgcGF0aHMgPSBmbGF0dGVuKGFycmlmeShwYXRoc18pKTtcbiAgaWYgKCFwYXRocy5ldmVyeShwID0+IHR5cGVvZiBwID09PSBTVFJJTkdfVFlQRSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBOb24tc3RyaW5nIHByb3ZpZGVkIGFzIHdhdGNoIHBhdGg6ICR7cGF0aHN9YCk7XG4gIH1cbiAgcmV0dXJuIHBhdGhzLm1hcChub3JtYWxpemVQYXRoVG9Vbml4KTtcbn07XG5cbi8vIElmIFNMQVNIX1NMQVNIIG9jY3VycyBhdCB0aGUgYmVnaW5uaW5nIG9mIHBhdGgsIGl0IGlzIG5vdCByZXBsYWNlZFxuLy8gICAgIGJlY2F1c2UgXCIvL1N0b3JhZ2VQQy9Ecml2ZVBvb2wvTW92aWVzXCIgaXMgYSB2YWxpZCBuZXR3b3JrIHBhdGhcbmNvbnN0IHRvVW5peCA9IChzdHJpbmcpID0+IHtcbiAgbGV0IHN0ciA9IHN0cmluZy5yZXBsYWNlKEJBQ0tfU0xBU0hfUkUsIFNMQVNIKTtcbiAgbGV0IHByZXBlbmQgPSBmYWxzZTtcbiAgaWYgKHN0ci5zdGFydHNXaXRoKFNMQVNIX1NMQVNIKSkge1xuICAgIHByZXBlbmQgPSB0cnVlO1xuICB9XG4gIHdoaWxlIChzdHIubWF0Y2goRE9VQkxFX1NMQVNIX1JFKSkge1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKERPVUJMRV9TTEFTSF9SRSwgU0xBU0gpO1xuICB9XG4gIGlmIChwcmVwZW5kKSB7XG4gICAgc3RyID0gU0xBU0ggKyBzdHI7XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn07XG5cbi8vIE91ciB2ZXJzaW9uIG9mIHVwYXRoLm5vcm1hbGl6ZVxuLy8gVE9ETzogdGhpcyBpcyBub3QgZXF1YWwgdG8gcGF0aC1ub3JtYWxpemUgbW9kdWxlIC0gaW52ZXN0aWdhdGUgd2h5XG5jb25zdCBub3JtYWxpemVQYXRoVG9Vbml4ID0gKHBhdGgpID0+IHRvVW5peChzeXNQYXRoLm5vcm1hbGl6ZSh0b1VuaXgocGF0aCkpKTtcblxuY29uc3Qgbm9ybWFsaXplSWdub3JlZCA9IChjd2QgPSBFTVBUWV9TVFIpID0+IChwYXRoKSA9PiB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gU1RSSU5HX1RZUEUpIHJldHVybiBwYXRoO1xuICByZXR1cm4gbm9ybWFsaXplUGF0aFRvVW5peChzeXNQYXRoLmlzQWJzb2x1dGUocGF0aCkgPyBwYXRoIDogc3lzUGF0aC5qb2luKGN3ZCwgcGF0aCkpO1xufTtcblxuY29uc3QgZ2V0QWJzb2x1dGVQYXRoID0gKHBhdGgsIGN3ZCkgPT4ge1xuICBpZiAoc3lzUGF0aC5pc0Fic29sdXRlKHBhdGgpKSB7XG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cbiAgaWYgKHBhdGguc3RhcnRzV2l0aChCQU5HKSkge1xuICAgIHJldHVybiBCQU5HICsgc3lzUGF0aC5qb2luKGN3ZCwgcGF0aC5zbGljZSgxKSk7XG4gIH1cbiAgcmV0dXJuIHN5c1BhdGguam9pbihjd2QsIHBhdGgpO1xufTtcblxuY29uc3QgdW5kZWYgPSAob3B0cywga2V5KSA9PiBvcHRzW2tleV0gPT09IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBEaXJlY3RvcnkgZW50cnkuXG4gKiBAcHJvcGVydHkge1BhdGh9IHBhdGhcbiAqIEBwcm9wZXJ0eSB7U2V0PFBhdGg+fSBpdGVtc1xuICovXG5jbGFzcyBEaXJFbnRyeSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge1BhdGh9IGRpclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZW1vdmVXYXRjaGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihkaXIsIHJlbW92ZVdhdGNoZXIpIHtcbiAgICB0aGlzLnBhdGggPSBkaXI7XG4gICAgdGhpcy5fcmVtb3ZlV2F0Y2hlciA9IHJlbW92ZVdhdGNoZXI7XG4gICAgLyoqIEB0eXBlIHtTZXQ8UGF0aD59ICovXG4gICAgdGhpcy5pdGVtcyA9IG5ldyBTZXQoKTtcbiAgfVxuXG4gIGFkZChpdGVtKSB7XG4gICAgY29uc3Qge2l0ZW1zfSA9IHRoaXM7XG4gICAgaWYgKCFpdGVtcykgcmV0dXJuO1xuICAgIGlmIChpdGVtICE9PSBPTkVfRE9UICYmIGl0ZW0gIT09IFRXT19ET1RTKSBpdGVtcy5hZGQoaXRlbSk7XG4gIH1cblxuICBhc3luYyByZW1vdmUoaXRlbSkge1xuICAgIGNvbnN0IHtpdGVtc30gPSB0aGlzO1xuICAgIGlmICghaXRlbXMpIHJldHVybjtcbiAgICBpdGVtcy5kZWxldGUoaXRlbSk7XG4gICAgaWYgKGl0ZW1zLnNpemUgPiAwKSByZXR1cm47XG5cbiAgICBjb25zdCBkaXIgPSB0aGlzLnBhdGg7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHJlYWRkaXIoZGlyKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmICh0aGlzLl9yZW1vdmVXYXRjaGVyKSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZVdhdGNoZXIoc3lzUGF0aC5kaXJuYW1lKGRpciksIHN5c1BhdGguYmFzZW5hbWUoZGlyKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFzKGl0ZW0pIHtcbiAgICBjb25zdCB7aXRlbXN9ID0gdGhpcztcbiAgICBpZiAoIWl0ZW1zKSByZXR1cm47XG4gICAgcmV0dXJuIGl0ZW1zLmhhcyhpdGVtKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7QXJyYXk8U3RyaW5nPn1cbiAgICovXG4gIGdldENoaWxkcmVuKCkge1xuICAgIGNvbnN0IHtpdGVtc30gPSB0aGlzO1xuICAgIGlmICghaXRlbXMpIHJldHVybjtcbiAgICByZXR1cm4gWy4uLml0ZW1zLnZhbHVlcygpXTtcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgdGhpcy5pdGVtcy5jbGVhcigpO1xuICAgIGRlbGV0ZSB0aGlzLnBhdGg7XG4gICAgZGVsZXRlIHRoaXMuX3JlbW92ZVdhdGNoZXI7XG4gICAgZGVsZXRlIHRoaXMuaXRlbXM7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxufVxuXG5jb25zdCBTVEFUX01FVEhPRF9GID0gJ3N0YXQnO1xuY29uc3QgU1RBVF9NRVRIT0RfTCA9ICdsc3RhdCc7XG5jbGFzcyBXYXRjaEhlbHBlciB7XG4gIGNvbnN0cnVjdG9yKHBhdGgsIHdhdGNoUGF0aCwgZm9sbG93LCBmc3cpIHtcbiAgICB0aGlzLmZzdyA9IGZzdztcbiAgICB0aGlzLnBhdGggPSBwYXRoID0gcGF0aC5yZXBsYWNlKFJFUExBQ0VSX1JFLCBFTVBUWV9TVFIpO1xuICAgIHRoaXMud2F0Y2hQYXRoID0gd2F0Y2hQYXRoO1xuICAgIHRoaXMuZnVsbFdhdGNoUGF0aCA9IHN5c1BhdGgucmVzb2x2ZSh3YXRjaFBhdGgpO1xuICAgIHRoaXMuaGFzR2xvYiA9IHdhdGNoUGF0aCAhPT0gcGF0aDtcbiAgICAvKiogQHR5cGUge29iamVjdHxib29sZWFufSAqL1xuICAgIGlmIChwYXRoID09PSBFTVBUWV9TVFIpIHRoaXMuaGFzR2xvYiA9IGZhbHNlO1xuICAgIHRoaXMuZ2xvYlN5bWxpbmsgPSB0aGlzLmhhc0dsb2IgJiYgZm9sbG93ID8gdW5kZWZpbmVkIDogZmFsc2U7XG4gICAgdGhpcy5nbG9iRmlsdGVyID0gdGhpcy5oYXNHbG9iID8gYW55bWF0Y2gocGF0aCwgdW5kZWZpbmVkLCBBTllNQVRDSF9PUFRTKSA6IGZhbHNlO1xuICAgIHRoaXMuZGlyUGFydHMgPSB0aGlzLmdldERpclBhcnRzKHBhdGgpO1xuICAgIHRoaXMuZGlyUGFydHMuZm9yRWFjaCgocGFydHMpID0+IHtcbiAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAxKSBwYXJ0cy5wb3AoKTtcbiAgICB9KTtcbiAgICB0aGlzLmZvbGxvd1N5bWxpbmtzID0gZm9sbG93O1xuICAgIHRoaXMuc3RhdE1ldGhvZCA9IGZvbGxvdyA/IFNUQVRfTUVUSE9EX0YgOiBTVEFUX01FVEhPRF9MO1xuICB9XG5cbiAgY2hlY2tHbG9iU3ltbGluayhlbnRyeSkge1xuICAgIC8vIG9ubHkgbmVlZCB0byByZXNvbHZlIG9uY2VcbiAgICAvLyBmaXJzdCBlbnRyeSBzaG91bGQgYWx3YXlzIGhhdmUgZW50cnkucGFyZW50RGlyID09PSBFTVBUWV9TVFJcbiAgICBpZiAodGhpcy5nbG9iU3ltbGluayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmdsb2JTeW1saW5rID0gZW50cnkuZnVsbFBhcmVudERpciA9PT0gdGhpcy5mdWxsV2F0Y2hQYXRoID9cbiAgICAgICAgZmFsc2UgOiB7cmVhbFBhdGg6IGVudHJ5LmZ1bGxQYXJlbnREaXIsIGxpbmtQYXRoOiB0aGlzLmZ1bGxXYXRjaFBhdGh9O1xuICAgIH1cblxuICAgIGlmICh0aGlzLmdsb2JTeW1saW5rKSB7XG4gICAgICByZXR1cm4gZW50cnkuZnVsbFBhdGgucmVwbGFjZSh0aGlzLmdsb2JTeW1saW5rLnJlYWxQYXRoLCB0aGlzLmdsb2JTeW1saW5rLmxpbmtQYXRoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW50cnkuZnVsbFBhdGg7XG4gIH1cblxuICBlbnRyeVBhdGgoZW50cnkpIHtcbiAgICByZXR1cm4gc3lzUGF0aC5qb2luKHRoaXMud2F0Y2hQYXRoLFxuICAgICAgc3lzUGF0aC5yZWxhdGl2ZSh0aGlzLndhdGNoUGF0aCwgdGhpcy5jaGVja0dsb2JTeW1saW5rKGVudHJ5KSlcbiAgICApO1xuICB9XG5cbiAgZmlsdGVyUGF0aChlbnRyeSkge1xuICAgIGNvbnN0IHtzdGF0c30gPSBlbnRyeTtcbiAgICBpZiAoc3RhdHMgJiYgc3RhdHMuaXNTeW1ib2xpY0xpbmsoKSkgcmV0dXJuIHRoaXMuZmlsdGVyRGlyKGVudHJ5KTtcbiAgICBjb25zdCByZXNvbHZlZFBhdGggPSB0aGlzLmVudHJ5UGF0aChlbnRyeSk7XG4gICAgY29uc3QgbWF0Y2hlc0dsb2IgPSB0aGlzLmhhc0dsb2IgJiYgdHlwZW9mIHRoaXMuZ2xvYkZpbHRlciA9PT0gRlVOQ1RJT05fVFlQRSA/XG4gICAgICB0aGlzLmdsb2JGaWx0ZXIocmVzb2x2ZWRQYXRoKSA6IHRydWU7XG4gICAgcmV0dXJuIG1hdGNoZXNHbG9iICYmXG4gICAgICB0aGlzLmZzdy5faXNudElnbm9yZWQocmVzb2x2ZWRQYXRoLCBzdGF0cykgJiZcbiAgICAgIHRoaXMuZnN3Ll9oYXNSZWFkUGVybWlzc2lvbnMoc3RhdHMpO1xuICB9XG5cbiAgZ2V0RGlyUGFydHMocGF0aCkge1xuICAgIGlmICghdGhpcy5oYXNHbG9iKSByZXR1cm4gW107XG4gICAgY29uc3QgcGFydHMgPSBbXTtcbiAgICBjb25zdCBleHBhbmRlZFBhdGggPSBwYXRoLmluY2x1ZGVzKEJSQUNFX1NUQVJUKSA/IGJyYWNlcy5leHBhbmQocGF0aCkgOiBbcGF0aF07XG4gICAgZXhwYW5kZWRQYXRoLmZvckVhY2goKHBhdGgpID0+IHtcbiAgICAgIHBhcnRzLnB1c2goc3lzUGF0aC5yZWxhdGl2ZSh0aGlzLndhdGNoUGF0aCwgcGF0aCkuc3BsaXQoU0xBU0hfT1JfQkFDS19TTEFTSF9SRSkpO1xuICAgIH0pO1xuICAgIHJldHVybiBwYXJ0cztcbiAgfVxuXG4gIGZpbHRlckRpcihlbnRyeSkge1xuICAgIGlmICh0aGlzLmhhc0dsb2IpIHtcbiAgICAgIGNvbnN0IGVudHJ5UGFydHMgPSB0aGlzLmdldERpclBhcnRzKHRoaXMuY2hlY2tHbG9iU3ltbGluayhlbnRyeSkpO1xuICAgICAgbGV0IGdsb2JzdGFyID0gZmFsc2U7XG4gICAgICB0aGlzLnVubWF0Y2hlZEdsb2IgPSAhdGhpcy5kaXJQYXJ0cy5zb21lKChwYXJ0cykgPT4ge1xuICAgICAgICByZXR1cm4gcGFydHMuZXZlcnkoKHBhcnQsIGkpID0+IHtcbiAgICAgICAgICBpZiAocGFydCA9PT0gR0xPQlNUQVIpIGdsb2JzdGFyID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gZ2xvYnN0YXIgfHwgIWVudHJ5UGFydHNbMF1baV0gfHwgYW55bWF0Y2gocGFydCwgZW50cnlQYXJ0c1swXVtpXSwgQU5ZTUFUQ0hfT1BUUyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAhdGhpcy51bm1hdGNoZWRHbG9iICYmIHRoaXMuZnN3Ll9pc250SWdub3JlZCh0aGlzLmVudHJ5UGF0aChlbnRyeSksIGVudHJ5LnN0YXRzKTtcbiAgfVxufVxuXG4vKipcbiAqIFdhdGNoZXMgZmlsZXMgJiBkaXJlY3RvcmllcyBmb3IgY2hhbmdlcy4gRW1pdHRlZCBldmVudHM6XG4gKiBgYWRkYCwgYGFkZERpcmAsIGBjaGFuZ2VgLCBgdW5saW5rYCwgYHVubGlua0RpcmAsIGBhbGxgLCBgZXJyb3JgXG4gKlxuICogICAgIG5ldyBGU1dhdGNoZXIoKVxuICogICAgICAgLmFkZChkaXJlY3RvcmllcylcbiAqICAgICAgIC5vbignYWRkJywgcGF0aCA9PiBsb2coJ0ZpbGUnLCBwYXRoLCAnd2FzIGFkZGVkJykpXG4gKi9cbmNsYXNzIEZTV2F0Y2hlciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4vLyBOb3QgaW5kZW50aW5nIG1ldGhvZHMgZm9yIGhpc3Rvcnkgc2FrZTsgZm9yIG5vdy5cbmNvbnN0cnVjdG9yKF9vcHRzKSB7XG4gIHN1cGVyKCk7XG5cbiAgY29uc3Qgb3B0cyA9IHt9O1xuICBpZiAoX29wdHMpIE9iamVjdC5hc3NpZ24ob3B0cywgX29wdHMpOyAvLyBmb3IgZnJvemVuIG9iamVjdHNcblxuICAvKiogQHR5cGUge01hcDxTdHJpbmcsIERpckVudHJ5Pn0gKi9cbiAgdGhpcy5fd2F0Y2hlZCA9IG5ldyBNYXAoKTtcbiAgLyoqIEB0eXBlIHtNYXA8U3RyaW5nLCBBcnJheT59ICovXG4gIHRoaXMuX2Nsb3NlcnMgPSBuZXcgTWFwKCk7XG4gIC8qKiBAdHlwZSB7U2V0PFN0cmluZz59ICovXG4gIHRoaXMuX2lnbm9yZWRQYXRocyA9IG5ldyBTZXQoKTtcblxuICAvKiogQHR5cGUge01hcDxUaHJvdHRsZVR5cGUsIE1hcD59ICovXG4gIHRoaXMuX3Rocm90dGxlZCA9IG5ldyBNYXAoKTtcblxuICAvKiogQHR5cGUge01hcDxQYXRoLCBTdHJpbmd8Qm9vbGVhbj59ICovXG4gIHRoaXMuX3N5bWxpbmtQYXRocyA9IG5ldyBNYXAoKTtcblxuICB0aGlzLl9zdHJlYW1zID0gbmV3IFNldCgpO1xuICB0aGlzLmNsb3NlZCA9IGZhbHNlO1xuXG4gIC8vIFNldCB1cCBkZWZhdWx0IG9wdGlvbnMuXG4gIGlmICh1bmRlZihvcHRzLCAncGVyc2lzdGVudCcpKSBvcHRzLnBlcnNpc3RlbnQgPSB0cnVlO1xuICBpZiAodW5kZWYob3B0cywgJ2lnbm9yZUluaXRpYWwnKSkgb3B0cy5pZ25vcmVJbml0aWFsID0gZmFsc2U7XG4gIGlmICh1bmRlZihvcHRzLCAnaWdub3JlUGVybWlzc2lvbkVycm9ycycpKSBvcHRzLmlnbm9yZVBlcm1pc3Npb25FcnJvcnMgPSBmYWxzZTtcbiAgaWYgKHVuZGVmKG9wdHMsICdpbnRlcnZhbCcpKSBvcHRzLmludGVydmFsID0gMTAwO1xuICBpZiAodW5kZWYob3B0cywgJ2JpbmFyeUludGVydmFsJykpIG9wdHMuYmluYXJ5SW50ZXJ2YWwgPSAzMDA7XG4gIGlmICh1bmRlZihvcHRzLCAnZGlzYWJsZUdsb2JiaW5nJykpIG9wdHMuZGlzYWJsZUdsb2JiaW5nID0gZmFsc2U7XG4gIG9wdHMuZW5hYmxlQmluYXJ5SW50ZXJ2YWwgPSBvcHRzLmJpbmFyeUludGVydmFsICE9PSBvcHRzLmludGVydmFsO1xuXG4gIC8vIEVuYWJsZSBmc2V2ZW50cyBvbiBPUyBYIHdoZW4gcG9sbGluZyBpc24ndCBleHBsaWNpdGx5IGVuYWJsZWQuXG4gIGlmICh1bmRlZihvcHRzLCAndXNlRnNFdmVudHMnKSkgb3B0cy51c2VGc0V2ZW50cyA9ICFvcHRzLnVzZVBvbGxpbmc7XG5cbiAgLy8gSWYgd2UgY2FuJ3QgdXNlIGZzZXZlbnRzLCBlbnN1cmUgdGhlIG9wdGlvbnMgcmVmbGVjdCBpdCdzIGRpc2FibGVkLlxuICBjb25zdCBjYW5Vc2VGc0V2ZW50cyA9IEZzRXZlbnRzSGFuZGxlci5jYW5Vc2UoKTtcbiAgaWYgKCFjYW5Vc2VGc0V2ZW50cykgb3B0cy51c2VGc0V2ZW50cyA9IGZhbHNlO1xuXG4gIC8vIFVzZSBwb2xsaW5nIG9uIE1hYyBpZiBub3QgdXNpbmcgZnNldmVudHMuXG4gIC8vIE90aGVyIHBsYXRmb3JtcyB1c2Ugbm9uLXBvbGxpbmcgZnNfd2F0Y2guXG4gIGlmICh1bmRlZihvcHRzLCAndXNlUG9sbGluZycpICYmICFvcHRzLnVzZUZzRXZlbnRzKSB7XG4gICAgb3B0cy51c2VQb2xsaW5nID0gaXNNYWNvcztcbiAgfVxuXG4gIC8vIEFsd2F5cyBkZWZhdWx0IHRvIHBvbGxpbmcgb24gSUJNIGkgYmVjYXVzZSBmcy53YXRjaCgpIGlzIG5vdCBhdmFpbGFibGUgb24gSUJNIGkuXG4gIGlmKGlzSUJNaSkge1xuICAgIG9wdHMudXNlUG9sbGluZyA9IHRydWU7XG4gIH1cblxuICAvLyBHbG9iYWwgb3ZlcnJpZGUgKHVzZWZ1bCBmb3IgZW5kLWRldmVsb3BlcnMgdGhhdCBuZWVkIHRvIGZvcmNlIHBvbGxpbmcgZm9yIGFsbFxuICAvLyBpbnN0YW5jZXMgb2YgY2hva2lkYXIsIHJlZ2FyZGxlc3Mgb2YgdXNhZ2UvZGVwZW5kZW5jeSBkZXB0aClcbiAgY29uc3QgZW52UG9sbCA9IHByb2Nlc3MuZW52LkNIT0tJREFSX1VTRVBPTExJTkc7XG4gIGlmIChlbnZQb2xsICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBlbnZMb3dlciA9IGVudlBvbGwudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmIChlbnZMb3dlciA9PT0gJ2ZhbHNlJyB8fCBlbnZMb3dlciA9PT0gJzAnKSB7XG4gICAgICBvcHRzLnVzZVBvbGxpbmcgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGVudkxvd2VyID09PSAndHJ1ZScgfHwgZW52TG93ZXIgPT09ICcxJykge1xuICAgICAgb3B0cy51c2VQb2xsaW5nID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0cy51c2VQb2xsaW5nID0gISFlbnZMb3dlcjtcbiAgICB9XG4gIH1cbiAgY29uc3QgZW52SW50ZXJ2YWwgPSBwcm9jZXNzLmVudi5DSE9LSURBUl9JTlRFUlZBTDtcbiAgaWYgKGVudkludGVydmFsKSB7XG4gICAgb3B0cy5pbnRlcnZhbCA9IE51bWJlci5wYXJzZUludChlbnZJbnRlcnZhbCwgMTApO1xuICB9XG5cbiAgLy8gRWRpdG9yIGF0b21pYyB3cml0ZSBub3JtYWxpemF0aW9uIGVuYWJsZWQgYnkgZGVmYXVsdCB3aXRoIGZzLndhdGNoXG4gIGlmICh1bmRlZihvcHRzLCAnYXRvbWljJykpIG9wdHMuYXRvbWljID0gIW9wdHMudXNlUG9sbGluZyAmJiAhb3B0cy51c2VGc0V2ZW50cztcbiAgaWYgKG9wdHMuYXRvbWljKSB0aGlzLl9wZW5kaW5nVW5saW5rcyA9IG5ldyBNYXAoKTtcblxuICBpZiAodW5kZWYob3B0cywgJ2ZvbGxvd1N5bWxpbmtzJykpIG9wdHMuZm9sbG93U3ltbGlua3MgPSB0cnVlO1xuXG4gIGlmICh1bmRlZihvcHRzLCAnYXdhaXRXcml0ZUZpbmlzaCcpKSBvcHRzLmF3YWl0V3JpdGVGaW5pc2ggPSBmYWxzZTtcbiAgaWYgKG9wdHMuYXdhaXRXcml0ZUZpbmlzaCA9PT0gdHJ1ZSkgb3B0cy5hd2FpdFdyaXRlRmluaXNoID0ge307XG4gIGNvbnN0IGF3ZiA9IG9wdHMuYXdhaXRXcml0ZUZpbmlzaDtcbiAgaWYgKGF3Zikge1xuICAgIGlmICghYXdmLnN0YWJpbGl0eVRocmVzaG9sZCkgYXdmLnN0YWJpbGl0eVRocmVzaG9sZCA9IDIwMDA7XG4gICAgaWYgKCFhd2YucG9sbEludGVydmFsKSBhd2YucG9sbEludGVydmFsID0gMTAwO1xuICAgIHRoaXMuX3BlbmRpbmdXcml0ZXMgPSBuZXcgTWFwKCk7XG4gIH1cbiAgaWYgKG9wdHMuaWdub3JlZCkgb3B0cy5pZ25vcmVkID0gYXJyaWZ5KG9wdHMuaWdub3JlZCk7XG5cbiAgbGV0IHJlYWR5Q2FsbHMgPSAwO1xuICB0aGlzLl9lbWl0UmVhZHkgPSAoKSA9PiB7XG4gICAgcmVhZHlDYWxscysrO1xuICAgIGlmIChyZWFkeUNhbGxzID49IHRoaXMuX3JlYWR5Q291bnQpIHtcbiAgICAgIHRoaXMuX2VtaXRSZWFkeSA9IEVNUFRZX0ZOO1xuICAgICAgdGhpcy5fcmVhZHlFbWl0dGVkID0gdHJ1ZTtcbiAgICAgIC8vIHVzZSBwcm9jZXNzLm5leHRUaWNrIHRvIGFsbG93IHRpbWUgZm9yIGxpc3RlbmVyIHRvIGJlIGJvdW5kXG4gICAgICBwcm9jZXNzLm5leHRUaWNrKCgpID0+IHRoaXMuZW1pdChFVl9SRUFEWSkpO1xuICAgIH1cbiAgfTtcbiAgdGhpcy5fZW1pdFJhdyA9ICguLi5hcmdzKSA9PiB0aGlzLmVtaXQoRVZfUkFXLCAuLi5hcmdzKTtcbiAgdGhpcy5fcmVhZHlFbWl0dGVkID0gZmFsc2U7XG4gIHRoaXMub3B0aW9ucyA9IG9wdHM7XG5cbiAgLy8gSW5pdGlhbGl6ZSB3aXRoIHByb3BlciB3YXRjaGVyLlxuICBpZiAob3B0cy51c2VGc0V2ZW50cykge1xuICAgIHRoaXMuX2ZzRXZlbnRzSGFuZGxlciA9IG5ldyBGc0V2ZW50c0hhbmRsZXIodGhpcyk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fbm9kZUZzSGFuZGxlciA9IG5ldyBOb2RlRnNIYW5kbGVyKHRoaXMpO1xuICB9XG5cbiAgLy8gWW91XHUyMDE5cmUgZnJvemVuIHdoZW4geW91ciBoZWFydFx1MjAxOXMgbm90IG9wZW4uXG4gIE9iamVjdC5mcmVlemUob3B0cyk7XG59XG5cbi8vIFB1YmxpYyBtZXRob2RzXG5cbi8qKlxuICogQWRkcyBwYXRocyB0byBiZSB3YXRjaGVkIG9uIGFuIGV4aXN0aW5nIEZTV2F0Y2hlciBpbnN0YW5jZVxuICogQHBhcmFtIHtQYXRofEFycmF5PFBhdGg+fSBwYXRoc19cbiAqIEBwYXJhbSB7U3RyaW5nPX0gX29yaWdBZGQgcHJpdmF0ZTsgZm9yIGhhbmRsaW5nIG5vbi1leGlzdGVudCBwYXRocyB0byBiZSB3YXRjaGVkXG4gKiBAcGFyYW0ge0Jvb2xlYW49fSBfaW50ZXJuYWwgcHJpdmF0ZTsgaW5kaWNhdGVzIGEgbm9uLXVzZXIgYWRkXG4gKiBAcmV0dXJucyB7RlNXYXRjaGVyfSBmb3IgY2hhaW5pbmdcbiAqL1xuYWRkKHBhdGhzXywgX29yaWdBZGQsIF9pbnRlcm5hbCkge1xuICBjb25zdCB7Y3dkLCBkaXNhYmxlR2xvYmJpbmd9ID0gdGhpcy5vcHRpb25zO1xuICB0aGlzLmNsb3NlZCA9IGZhbHNlO1xuICBsZXQgcGF0aHMgPSB1bmlmeVBhdGhzKHBhdGhzXyk7XG4gIGlmIChjd2QpIHtcbiAgICBwYXRocyA9IHBhdGhzLm1hcCgocGF0aCkgPT4ge1xuICAgICAgY29uc3QgYWJzUGF0aCA9IGdldEFic29sdXRlUGF0aChwYXRoLCBjd2QpO1xuXG4gICAgICAvLyBDaGVjayBgcGF0aGAgaW5zdGVhZCBvZiBgYWJzUGF0aGAgYmVjYXVzZSB0aGUgY3dkIHBvcnRpb24gY2FuJ3QgYmUgYSBnbG9iXG4gICAgICBpZiAoZGlzYWJsZUdsb2JiaW5nIHx8ICFpc0dsb2IocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIGFic1BhdGg7XG4gICAgICB9XG4gICAgICByZXR1cm4gbm9ybWFsaXplUGF0aChhYnNQYXRoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIHNldCBhc2lkZSBuZWdhdGVkIGdsb2Igc3RyaW5nc1xuICBwYXRocyA9IHBhdGhzLmZpbHRlcigocGF0aCkgPT4ge1xuICAgIGlmIChwYXRoLnN0YXJ0c1dpdGgoQkFORykpIHtcbiAgICAgIHRoaXMuX2lnbm9yZWRQYXRocy5hZGQocGF0aC5zbGljZSgxKSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gaWYgYSBwYXRoIGlzIGJlaW5nIGFkZGVkIHRoYXQgd2FzIHByZXZpb3VzbHkgaWdub3JlZCwgc3RvcCBpZ25vcmluZyBpdFxuICAgIHRoaXMuX2lnbm9yZWRQYXRocy5kZWxldGUocGF0aCk7XG4gICAgdGhpcy5faWdub3JlZFBhdGhzLmRlbGV0ZShwYXRoICsgU0xBU0hfR0xPQlNUQVIpO1xuXG4gICAgLy8gcmVzZXQgdGhlIGNhY2hlZCB1c2VySWdub3JlZCBhbnltYXRjaCBmblxuICAgIC8vIHRvIG1ha2UgaWdub3JlZFBhdGhzIGNoYW5nZXMgZWZmZWN0aXZlXG4gICAgdGhpcy5fdXNlcklnbm9yZWQgPSB1bmRlZmluZWQ7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG5cbiAgaWYgKHRoaXMub3B0aW9ucy51c2VGc0V2ZW50cyAmJiB0aGlzLl9mc0V2ZW50c0hhbmRsZXIpIHtcbiAgICBpZiAoIXRoaXMuX3JlYWR5Q291bnQpIHRoaXMuX3JlYWR5Q291bnQgPSBwYXRocy5sZW5ndGg7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5wZXJzaXN0ZW50KSB0aGlzLl9yZWFkeUNvdW50ICo9IDI7XG4gICAgcGF0aHMuZm9yRWFjaCgocGF0aCkgPT4gdGhpcy5fZnNFdmVudHNIYW5kbGVyLl9hZGRUb0ZzRXZlbnRzKHBhdGgpKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIXRoaXMuX3JlYWR5Q291bnQpIHRoaXMuX3JlYWR5Q291bnQgPSAwO1xuICAgIHRoaXMuX3JlYWR5Q291bnQgKz0gcGF0aHMubGVuZ3RoO1xuICAgIFByb21pc2UuYWxsKFxuICAgICAgcGF0aHMubWFwKGFzeW5jIHBhdGggPT4ge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLl9ub2RlRnNIYW5kbGVyLl9hZGRUb05vZGVGcyhwYXRoLCAhX2ludGVybmFsLCAwLCAwLCBfb3JpZ0FkZCk7XG4gICAgICAgIGlmIChyZXMpIHRoaXMuX2VtaXRSZWFkeSgpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSlcbiAgICApLnRoZW4ocmVzdWx0cyA9PiB7XG4gICAgICBpZiAodGhpcy5jbG9zZWQpIHJldHVybjtcbiAgICAgIHJlc3VsdHMuZmlsdGVyKGl0ZW0gPT4gaXRlbSkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgdGhpcy5hZGQoc3lzUGF0aC5kaXJuYW1lKGl0ZW0pLCBzeXNQYXRoLmJhc2VuYW1lKF9vcmlnQWRkIHx8IGl0ZW0pKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogQ2xvc2Ugd2F0Y2hlcnMgb3Igc3RhcnQgaWdub3JpbmcgZXZlbnRzIGZyb20gc3BlY2lmaWVkIHBhdGhzLlxuICogQHBhcmFtIHtQYXRofEFycmF5PFBhdGg+fSBwYXRoc18gLSBzdHJpbmcgb3IgYXJyYXkgb2Ygc3RyaW5ncywgZmlsZS9kaXJlY3RvcnkgcGF0aHMgYW5kL29yIGdsb2JzXG4gKiBAcmV0dXJucyB7RlNXYXRjaGVyfSBmb3IgY2hhaW5pbmdcbiovXG51bndhdGNoKHBhdGhzXykge1xuICBpZiAodGhpcy5jbG9zZWQpIHJldHVybiB0aGlzO1xuICBjb25zdCBwYXRocyA9IHVuaWZ5UGF0aHMocGF0aHNfKTtcbiAgY29uc3Qge2N3ZH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgcGF0aHMuZm9yRWFjaCgocGF0aCkgPT4ge1xuICAgIC8vIGNvbnZlcnQgdG8gYWJzb2x1dGUgcGF0aCB1bmxlc3MgcmVsYXRpdmUgcGF0aCBhbHJlYWR5IG1hdGNoZXNcbiAgICBpZiAoIXN5c1BhdGguaXNBYnNvbHV0ZShwYXRoKSAmJiAhdGhpcy5fY2xvc2Vycy5oYXMocGF0aCkpIHtcbiAgICAgIGlmIChjd2QpIHBhdGggPSBzeXNQYXRoLmpvaW4oY3dkLCBwYXRoKTtcbiAgICAgIHBhdGggPSBzeXNQYXRoLnJlc29sdmUocGF0aCk7XG4gICAgfVxuXG4gICAgdGhpcy5fY2xvc2VQYXRoKHBhdGgpO1xuXG4gICAgdGhpcy5faWdub3JlZFBhdGhzLmFkZChwYXRoKTtcbiAgICBpZiAodGhpcy5fd2F0Y2hlZC5oYXMocGF0aCkpIHtcbiAgICAgIHRoaXMuX2lnbm9yZWRQYXRocy5hZGQocGF0aCArIFNMQVNIX0dMT0JTVEFSKTtcbiAgICB9XG5cbiAgICAvLyByZXNldCB0aGUgY2FjaGVkIHVzZXJJZ25vcmVkIGFueW1hdGNoIGZuXG4gICAgLy8gdG8gbWFrZSBpZ25vcmVkUGF0aHMgY2hhbmdlcyBlZmZlY3RpdmVcbiAgICB0aGlzLl91c2VySWdub3JlZCA9IHVuZGVmaW5lZDtcbiAgfSk7XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogQ2xvc2Ugd2F0Y2hlcnMgYW5kIHJlbW92ZSBhbGwgbGlzdGVuZXJzIGZyb20gd2F0Y2hlZCBwYXRocy5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fS5cbiovXG5jbG9zZSgpIHtcbiAgaWYgKHRoaXMuY2xvc2VkKSByZXR1cm4gdGhpcy5fY2xvc2VQcm9taXNlO1xuICB0aGlzLmNsb3NlZCA9IHRydWU7XG5cbiAgLy8gTWVtb3J5IG1hbmFnZW1lbnQuXG4gIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gIGNvbnN0IGNsb3NlcnMgPSBbXTtcbiAgdGhpcy5fY2xvc2Vycy5mb3JFYWNoKGNsb3Nlckxpc3QgPT4gY2xvc2VyTGlzdC5mb3JFYWNoKGNsb3NlciA9PiB7XG4gICAgY29uc3QgcHJvbWlzZSA9IGNsb3NlcigpO1xuICAgIGlmIChwcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkgY2xvc2Vycy5wdXNoKHByb21pc2UpO1xuICB9KSk7XG4gIHRoaXMuX3N0cmVhbXMuZm9yRWFjaChzdHJlYW0gPT4gc3RyZWFtLmRlc3Ryb3koKSk7XG4gIHRoaXMuX3VzZXJJZ25vcmVkID0gdW5kZWZpbmVkO1xuICB0aGlzLl9yZWFkeUNvdW50ID0gMDtcbiAgdGhpcy5fcmVhZHlFbWl0dGVkID0gZmFsc2U7XG4gIHRoaXMuX3dhdGNoZWQuZm9yRWFjaChkaXJlbnQgPT4gZGlyZW50LmRpc3Bvc2UoKSk7XG4gIFsnY2xvc2VycycsICd3YXRjaGVkJywgJ3N0cmVhbXMnLCAnc3ltbGlua1BhdGhzJywgJ3Rocm90dGxlZCddLmZvckVhY2goa2V5ID0+IHtcbiAgICB0aGlzW2BfJHtrZXl9YF0uY2xlYXIoKTtcbiAgfSk7XG5cbiAgdGhpcy5fY2xvc2VQcm9taXNlID0gY2xvc2Vycy5sZW5ndGggPyBQcm9taXNlLmFsbChjbG9zZXJzKS50aGVuKCgpID0+IHVuZGVmaW5lZCkgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgcmV0dXJuIHRoaXMuX2Nsb3NlUHJvbWlzZTtcbn1cblxuLyoqXG4gKiBFeHBvc2UgbGlzdCBvZiB3YXRjaGVkIHBhdGhzXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBmb3IgY2hhaW5pbmdcbiovXG5nZXRXYXRjaGVkKCkge1xuICBjb25zdCB3YXRjaExpc3QgPSB7fTtcbiAgdGhpcy5fd2F0Y2hlZC5mb3JFYWNoKChlbnRyeSwgZGlyKSA9PiB7XG4gICAgY29uc3Qga2V5ID0gdGhpcy5vcHRpb25zLmN3ZCA/IHN5c1BhdGgucmVsYXRpdmUodGhpcy5vcHRpb25zLmN3ZCwgZGlyKSA6IGRpcjtcbiAgICB3YXRjaExpc3Rba2V5IHx8IE9ORV9ET1RdID0gZW50cnkuZ2V0Q2hpbGRyZW4oKS5zb3J0KCk7XG4gIH0pO1xuICByZXR1cm4gd2F0Y2hMaXN0O1xufVxuXG5lbWl0V2l0aEFsbChldmVudCwgYXJncykge1xuICB0aGlzLmVtaXQoLi4uYXJncyk7XG4gIGlmIChldmVudCAhPT0gRVZfRVJST1IpIHRoaXMuZW1pdChFVl9BTEwsIC4uLmFyZ3MpO1xufVxuXG4vLyBDb21tb24gaGVscGVyc1xuLy8gLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBOb3JtYWxpemUgYW5kIGVtaXQgZXZlbnRzLlxuICogQ2FsbGluZyBfZW1pdCBET0VTIE5PVCBNRUFOIGVtaXQoKSB3b3VsZCBiZSBjYWxsZWQhXG4gKiBAcGFyYW0ge0V2ZW50TmFtZX0gZXZlbnQgVHlwZSBvZiBldmVudFxuICogQHBhcmFtIHtQYXRofSBwYXRoIEZpbGUgb3IgZGlyZWN0b3J5IHBhdGhcbiAqIEBwYXJhbSB7Kj19IHZhbDEgYXJndW1lbnRzIHRvIGJlIHBhc3NlZCB3aXRoIGV2ZW50XG4gKiBAcGFyYW0geyo9fSB2YWwyXG4gKiBAcGFyYW0geyo9fSB2YWwzXG4gKiBAcmV0dXJucyB0aGUgZXJyb3IgaWYgZGVmaW5lZCwgb3RoZXJ3aXNlIHRoZSB2YWx1ZSBvZiB0aGUgRlNXYXRjaGVyIGluc3RhbmNlJ3MgYGNsb3NlZGAgZmxhZ1xuICovXG5hc3luYyBfZW1pdChldmVudCwgcGF0aCwgdmFsMSwgdmFsMiwgdmFsMykge1xuICBpZiAodGhpcy5jbG9zZWQpIHJldHVybjtcblxuICBjb25zdCBvcHRzID0gdGhpcy5vcHRpb25zO1xuICBpZiAoaXNXaW5kb3dzKSBwYXRoID0gc3lzUGF0aC5ub3JtYWxpemUocGF0aCk7XG4gIGlmIChvcHRzLmN3ZCkgcGF0aCA9IHN5c1BhdGgucmVsYXRpdmUob3B0cy5jd2QsIHBhdGgpO1xuICAvKiogQHR5cGUgQXJyYXk8YW55PiAqL1xuICBjb25zdCBhcmdzID0gW2V2ZW50LCBwYXRoXTtcbiAgaWYgKHZhbDMgIT09IHVuZGVmaW5lZCkgYXJncy5wdXNoKHZhbDEsIHZhbDIsIHZhbDMpO1xuICBlbHNlIGlmICh2YWwyICE9PSB1bmRlZmluZWQpIGFyZ3MucHVzaCh2YWwxLCB2YWwyKTtcbiAgZWxzZSBpZiAodmFsMSAhPT0gdW5kZWZpbmVkKSBhcmdzLnB1c2godmFsMSk7XG5cbiAgY29uc3QgYXdmID0gb3B0cy5hd2FpdFdyaXRlRmluaXNoO1xuICBsZXQgcHc7XG4gIGlmIChhd2YgJiYgKHB3ID0gdGhpcy5fcGVuZGluZ1dyaXRlcy5nZXQocGF0aCkpKSB7XG4gICAgcHcubGFzdENoYW5nZSA9IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpZiAob3B0cy5hdG9taWMpIHtcbiAgICBpZiAoZXZlbnQgPT09IEVWX1VOTElOSykge1xuICAgICAgdGhpcy5fcGVuZGluZ1VubGlua3Muc2V0KHBhdGgsIGFyZ3MpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3BlbmRpbmdVbmxpbmtzLmZvckVhY2goKGVudHJ5LCBwYXRoKSA9PiB7XG4gICAgICAgICAgdGhpcy5lbWl0KC4uLmVudHJ5KTtcbiAgICAgICAgICB0aGlzLmVtaXQoRVZfQUxMLCAuLi5lbnRyeSk7XG4gICAgICAgICAgdGhpcy5fcGVuZGluZ1VubGlua3MuZGVsZXRlKHBhdGgpO1xuICAgICAgICB9KTtcbiAgICAgIH0sIHR5cGVvZiBvcHRzLmF0b21pYyA9PT0gJ251bWJlcicgPyBvcHRzLmF0b21pYyA6IDEwMCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgaWYgKGV2ZW50ID09PSBFVl9BREQgJiYgdGhpcy5fcGVuZGluZ1VubGlua3MuaGFzKHBhdGgpKSB7XG4gICAgICBldmVudCA9IGFyZ3NbMF0gPSBFVl9DSEFOR0U7XG4gICAgICB0aGlzLl9wZW5kaW5nVW5saW5rcy5kZWxldGUocGF0aCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGF3ZiAmJiAoZXZlbnQgPT09IEVWX0FERCB8fCBldmVudCA9PT0gRVZfQ0hBTkdFKSAmJiB0aGlzLl9yZWFkeUVtaXR0ZWQpIHtcbiAgICBjb25zdCBhd2ZFbWl0ID0gKGVyciwgc3RhdHMpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgZXZlbnQgPSBhcmdzWzBdID0gRVZfRVJST1I7XG4gICAgICAgIGFyZ3NbMV0gPSBlcnI7XG4gICAgICAgIHRoaXMuZW1pdFdpdGhBbGwoZXZlbnQsIGFyZ3MpO1xuICAgICAgfSBlbHNlIGlmIChzdGF0cykge1xuICAgICAgICAvLyBpZiBzdGF0cyBkb2Vzbid0IGV4aXN0IHRoZSBmaWxlIG11c3QgaGF2ZSBiZWVuIGRlbGV0ZWRcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xuICAgICAgICAgIGFyZ3NbMl0gPSBzdGF0cztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhcmdzLnB1c2goc3RhdHMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW1pdFdpdGhBbGwoZXZlbnQsIGFyZ3MpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLl9hd2FpdFdyaXRlRmluaXNoKHBhdGgsIGF3Zi5zdGFiaWxpdHlUaHJlc2hvbGQsIGV2ZW50LCBhd2ZFbWl0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlmIChldmVudCA9PT0gRVZfQ0hBTkdFKSB7XG4gICAgY29uc3QgaXNUaHJvdHRsZWQgPSAhdGhpcy5fdGhyb3R0bGUoRVZfQ0hBTkdFLCBwYXRoLCA1MCk7XG4gICAgaWYgKGlzVGhyb3R0bGVkKSByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlmIChvcHRzLmFsd2F5c1N0YXQgJiYgdmFsMSA9PT0gdW5kZWZpbmVkICYmXG4gICAgKGV2ZW50ID09PSBFVl9BREQgfHwgZXZlbnQgPT09IEVWX0FERF9ESVIgfHwgZXZlbnQgPT09IEVWX0NIQU5HRSlcbiAgKSB7XG4gICAgY29uc3QgZnVsbFBhdGggPSBvcHRzLmN3ZCA/IHN5c1BhdGguam9pbihvcHRzLmN3ZCwgcGF0aCkgOiBwYXRoO1xuICAgIGxldCBzdGF0cztcbiAgICB0cnkge1xuICAgICAgc3RhdHMgPSBhd2FpdCBzdGF0KGZ1bGxQYXRoKTtcbiAgICB9IGNhdGNoIChlcnIpIHt9XG4gICAgLy8gU3VwcHJlc3MgZXZlbnQgd2hlbiBmc19zdGF0IGZhaWxzLCB0byBhdm9pZCBzZW5kaW5nIHVuZGVmaW5lZCAnc3RhdCdcbiAgICBpZiAoIXN0YXRzIHx8IHRoaXMuY2xvc2VkKSByZXR1cm47XG4gICAgYXJncy5wdXNoKHN0YXRzKTtcbiAgfVxuICB0aGlzLmVtaXRXaXRoQWxsKGV2ZW50LCBhcmdzKTtcblxuICByZXR1cm4gdGhpcztcbn1cblxuLyoqXG4gKiBDb21tb24gaGFuZGxlciBmb3IgZXJyb3JzXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvclxuICogQHJldHVybnMge0Vycm9yfEJvb2xlYW59IFRoZSBlcnJvciBpZiBkZWZpbmVkLCBvdGhlcndpc2UgdGhlIHZhbHVlIG9mIHRoZSBGU1dhdGNoZXIgaW5zdGFuY2UncyBgY2xvc2VkYCBmbGFnXG4gKi9cbl9oYW5kbGVFcnJvcihlcnJvcikge1xuICBjb25zdCBjb2RlID0gZXJyb3IgJiYgZXJyb3IuY29kZTtcbiAgaWYgKGVycm9yICYmIGNvZGUgIT09ICdFTk9FTlQnICYmIGNvZGUgIT09ICdFTk9URElSJyAmJlxuICAgICghdGhpcy5vcHRpb25zLmlnbm9yZVBlcm1pc3Npb25FcnJvcnMgfHwgKGNvZGUgIT09ICdFUEVSTScgJiYgY29kZSAhPT0gJ0VBQ0NFUycpKVxuICApIHtcbiAgICB0aGlzLmVtaXQoRVZfRVJST1IsIGVycm9yKTtcbiAgfVxuICByZXR1cm4gZXJyb3IgfHwgdGhpcy5jbG9zZWQ7XG59XG5cbi8qKlxuICogSGVscGVyIHV0aWxpdHkgZm9yIHRocm90dGxpbmdcbiAqIEBwYXJhbSB7VGhyb3R0bGVUeXBlfSBhY3Rpb25UeXBlIHR5cGUgYmVpbmcgdGhyb3R0bGVkXG4gKiBAcGFyYW0ge1BhdGh9IHBhdGggYmVpbmcgYWN0ZWQgdXBvblxuICogQHBhcmFtIHtOdW1iZXJ9IHRpbWVvdXQgZHVyYXRpb24gb2YgdGltZSB0byBzdXBwcmVzcyBkdXBsaWNhdGUgYWN0aW9uc1xuICogQHJldHVybnMge09iamVjdHxmYWxzZX0gdHJhY2tpbmcgb2JqZWN0IG9yIGZhbHNlIGlmIGFjdGlvbiBzaG91bGQgYmUgc3VwcHJlc3NlZFxuICovXG5fdGhyb3R0bGUoYWN0aW9uVHlwZSwgcGF0aCwgdGltZW91dCkge1xuICBpZiAoIXRoaXMuX3Rocm90dGxlZC5oYXMoYWN0aW9uVHlwZSkpIHtcbiAgICB0aGlzLl90aHJvdHRsZWQuc2V0KGFjdGlvblR5cGUsIG5ldyBNYXAoKSk7XG4gIH1cblxuICAvKiogQHR5cGUge01hcDxQYXRoLCBPYmplY3Q+fSAqL1xuICBjb25zdCBhY3Rpb24gPSB0aGlzLl90aHJvdHRsZWQuZ2V0KGFjdGlvblR5cGUpO1xuICAvKiogQHR5cGUge09iamVjdH0gKi9cbiAgY29uc3QgYWN0aW9uUGF0aCA9IGFjdGlvbi5nZXQocGF0aCk7XG5cbiAgaWYgKGFjdGlvblBhdGgpIHtcbiAgICBhY3Rpb25QYXRoLmNvdW50Kys7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbGV0IHRpbWVvdXRPYmplY3Q7XG4gIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBhY3Rpb24uZ2V0KHBhdGgpO1xuICAgIGNvbnN0IGNvdW50ID0gaXRlbSA/IGl0ZW0uY291bnQgOiAwO1xuICAgIGFjdGlvbi5kZWxldGUocGF0aCk7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRPYmplY3QpO1xuICAgIGlmIChpdGVtKSBjbGVhclRpbWVvdXQoaXRlbS50aW1lb3V0T2JqZWN0KTtcbiAgICByZXR1cm4gY291bnQ7XG4gIH07XG4gIHRpbWVvdXRPYmplY3QgPSBzZXRUaW1lb3V0KGNsZWFyLCB0aW1lb3V0KTtcbiAgY29uc3QgdGhyID0ge3RpbWVvdXRPYmplY3QsIGNsZWFyLCBjb3VudDogMH07XG4gIGFjdGlvbi5zZXQocGF0aCwgdGhyKTtcbiAgcmV0dXJuIHRocjtcbn1cblxuX2luY3JSZWFkeUNvdW50KCkge1xuICByZXR1cm4gdGhpcy5fcmVhZHlDb3VudCsrO1xufVxuXG4vKipcbiAqIEF3YWl0cyB3cml0ZSBvcGVyYXRpb24gdG8gZmluaXNoLlxuICogUG9sbHMgYSBuZXdseSBjcmVhdGVkIGZpbGUgZm9yIHNpemUgdmFyaWF0aW9ucy4gV2hlbiBmaWxlcyBzaXplIGRvZXMgbm90IGNoYW5nZSBmb3IgJ3RocmVzaG9sZCcgbWlsbGlzZWNvbmRzIGNhbGxzIGNhbGxiYWNrLlxuICogQHBhcmFtIHtQYXRofSBwYXRoIGJlaW5nIGFjdGVkIHVwb25cbiAqIEBwYXJhbSB7TnVtYmVyfSB0aHJlc2hvbGQgVGltZSBpbiBtaWxsaXNlY29uZHMgYSBmaWxlIHNpemUgbXVzdCBiZSBmaXhlZCBiZWZvcmUgYWNrbm93bGVkZ2luZyB3cml0ZSBPUCBpcyBmaW5pc2hlZFxuICogQHBhcmFtIHtFdmVudE5hbWV9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhd2ZFbWl0IENhbGxiYWNrIHRvIGJlIGNhbGxlZCB3aGVuIHJlYWR5IGZvciBldmVudCB0byBiZSBlbWl0dGVkLlxuICovXG5fYXdhaXRXcml0ZUZpbmlzaChwYXRoLCB0aHJlc2hvbGQsIGV2ZW50LCBhd2ZFbWl0KSB7XG4gIGxldCB0aW1lb3V0SGFuZGxlcjtcblxuICBsZXQgZnVsbFBhdGggPSBwYXRoO1xuICBpZiAodGhpcy5vcHRpb25zLmN3ZCAmJiAhc3lzUGF0aC5pc0Fic29sdXRlKHBhdGgpKSB7XG4gICAgZnVsbFBhdGggPSBzeXNQYXRoLmpvaW4odGhpcy5vcHRpb25zLmN3ZCwgcGF0aCk7XG4gIH1cblxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gIGNvbnN0IGF3YWl0V3JpdGVGaW5pc2ggPSAocHJldlN0YXQpID0+IHtcbiAgICBmcy5zdGF0KGZ1bGxQYXRoLCAoZXJyLCBjdXJTdGF0KSA9PiB7XG4gICAgICBpZiAoZXJyIHx8ICF0aGlzLl9wZW5kaW5nV3JpdGVzLmhhcyhwYXRoKSkge1xuICAgICAgICBpZiAoZXJyICYmIGVyci5jb2RlICE9PSAnRU5PRU5UJykgYXdmRW1pdChlcnIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5vdyA9IE51bWJlcihuZXcgRGF0ZSgpKTtcblxuICAgICAgaWYgKHByZXZTdGF0ICYmIGN1clN0YXQuc2l6ZSAhPT0gcHJldlN0YXQuc2l6ZSkge1xuICAgICAgICB0aGlzLl9wZW5kaW5nV3JpdGVzLmdldChwYXRoKS5sYXN0Q2hhbmdlID0gbm93O1xuICAgICAgfVxuICAgICAgY29uc3QgcHcgPSB0aGlzLl9wZW5kaW5nV3JpdGVzLmdldChwYXRoKTtcbiAgICAgIGNvbnN0IGRmID0gbm93IC0gcHcubGFzdENoYW5nZTtcblxuICAgICAgaWYgKGRmID49IHRocmVzaG9sZCkge1xuICAgICAgICB0aGlzLl9wZW5kaW5nV3JpdGVzLmRlbGV0ZShwYXRoKTtcbiAgICAgICAgYXdmRW1pdCh1bmRlZmluZWQsIGN1clN0YXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGltZW91dEhhbmRsZXIgPSBzZXRUaW1lb3V0KFxuICAgICAgICAgIGF3YWl0V3JpdGVGaW5pc2gsXG4gICAgICAgICAgdGhpcy5vcHRpb25zLmF3YWl0V3JpdGVGaW5pc2gucG9sbEludGVydmFsLFxuICAgICAgICAgIGN1clN0YXRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBpZiAoIXRoaXMuX3BlbmRpbmdXcml0ZXMuaGFzKHBhdGgpKSB7XG4gICAgdGhpcy5fcGVuZGluZ1dyaXRlcy5zZXQocGF0aCwge1xuICAgICAgbGFzdENoYW5nZTogbm93LFxuICAgICAgY2FuY2VsV2FpdDogKCkgPT4ge1xuICAgICAgICB0aGlzLl9wZW5kaW5nV3JpdGVzLmRlbGV0ZShwYXRoKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRIYW5kbGVyKTtcbiAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRpbWVvdXRIYW5kbGVyID0gc2V0VGltZW91dChcbiAgICAgIGF3YWl0V3JpdGVGaW5pc2gsXG4gICAgICB0aGlzLm9wdGlvbnMuYXdhaXRXcml0ZUZpbmlzaC5wb2xsSW50ZXJ2YWxcbiAgICApO1xuICB9XG59XG5cbl9nZXRHbG9iSWdub3JlZCgpIHtcbiAgcmV0dXJuIFsuLi50aGlzLl9pZ25vcmVkUGF0aHMudmFsdWVzKCldO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB1c2VyIGhhcyBhc2tlZCB0byBpZ25vcmUgdGhpcyBwYXRoLlxuICogQHBhcmFtIHtQYXRofSBwYXRoIGZpbGVwYXRoIG9yIGRpclxuICogQHBhcmFtIHtmcy5TdGF0cz19IHN0YXRzIHJlc3VsdCBvZiBmcy5zdGF0XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuX2lzSWdub3JlZChwYXRoLCBzdGF0cykge1xuICBpZiAodGhpcy5vcHRpb25zLmF0b21pYyAmJiBET1RfUkUudGVzdChwYXRoKSkgcmV0dXJuIHRydWU7XG4gIGlmICghdGhpcy5fdXNlcklnbm9yZWQpIHtcbiAgICBjb25zdCB7Y3dkfSA9IHRoaXMub3B0aW9ucztcbiAgICBjb25zdCBpZ24gPSB0aGlzLm9wdGlvbnMuaWdub3JlZDtcblxuICAgIGNvbnN0IGlnbm9yZWQgPSBpZ24gJiYgaWduLm1hcChub3JtYWxpemVJZ25vcmVkKGN3ZCkpO1xuICAgIGNvbnN0IHBhdGhzID0gYXJyaWZ5KGlnbm9yZWQpXG4gICAgICAuZmlsdGVyKChwYXRoKSA9PiB0eXBlb2YgcGF0aCA9PT0gU1RSSU5HX1RZUEUgJiYgIWlzR2xvYihwYXRoKSlcbiAgICAgIC5tYXAoKHBhdGgpID0+IHBhdGggKyBTTEFTSF9HTE9CU1RBUik7XG4gICAgY29uc3QgbGlzdCA9IHRoaXMuX2dldEdsb2JJZ25vcmVkKCkubWFwKG5vcm1hbGl6ZUlnbm9yZWQoY3dkKSkuY29uY2F0KGlnbm9yZWQsIHBhdGhzKTtcbiAgICB0aGlzLl91c2VySWdub3JlZCA9IGFueW1hdGNoKGxpc3QsIHVuZGVmaW5lZCwgQU5ZTUFUQ0hfT1BUUyk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5fdXNlcklnbm9yZWQoW3BhdGgsIHN0YXRzXSk7XG59XG5cbl9pc250SWdub3JlZChwYXRoLCBzdGF0KSB7XG4gIHJldHVybiAhdGhpcy5faXNJZ25vcmVkKHBhdGgsIHN0YXQpO1xufVxuXG4vKipcbiAqIFByb3ZpZGVzIGEgc2V0IG9mIGNvbW1vbiBoZWxwZXJzIGFuZCBwcm9wZXJ0aWVzIHJlbGF0aW5nIHRvIHN5bWxpbmsgYW5kIGdsb2IgaGFuZGxpbmcuXG4gKiBAcGFyYW0ge1BhdGh9IHBhdGggZmlsZSwgZGlyZWN0b3J5LCBvciBnbG9iIHBhdHRlcm4gYmVpbmcgd2F0Y2hlZFxuICogQHBhcmFtIHtOdW1iZXI9fSBkZXB0aCBhdCBhbnkgZGVwdGggPiAwLCB0aGlzIGlzbid0IGEgZ2xvYlxuICogQHJldHVybnMge1dhdGNoSGVscGVyfSBvYmplY3QgY29udGFpbmluZyBoZWxwZXJzIGZvciB0aGlzIHBhdGhcbiAqL1xuX2dldFdhdGNoSGVscGVycyhwYXRoLCBkZXB0aCkge1xuICBjb25zdCB3YXRjaFBhdGggPSBkZXB0aCB8fCB0aGlzLm9wdGlvbnMuZGlzYWJsZUdsb2JiaW5nIHx8ICFpc0dsb2IocGF0aCkgPyBwYXRoIDogZ2xvYlBhcmVudChwYXRoKTtcbiAgY29uc3QgZm9sbG93ID0gdGhpcy5vcHRpb25zLmZvbGxvd1N5bWxpbmtzO1xuXG4gIHJldHVybiBuZXcgV2F0Y2hIZWxwZXIocGF0aCwgd2F0Y2hQYXRoLCBmb2xsb3csIHRoaXMpO1xufVxuXG4vLyBEaXJlY3RvcnkgaGVscGVyc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBQcm92aWRlcyBkaXJlY3RvcnkgdHJhY2tpbmcgb2JqZWN0c1xuICogQHBhcmFtIHtTdHJpbmd9IGRpcmVjdG9yeSBwYXRoIG9mIHRoZSBkaXJlY3RvcnlcbiAqIEByZXR1cm5zIHtEaXJFbnRyeX0gdGhlIGRpcmVjdG9yeSdzIHRyYWNraW5nIG9iamVjdFxuICovXG5fZ2V0V2F0Y2hlZERpcihkaXJlY3RvcnkpIHtcbiAgaWYgKCF0aGlzLl9ib3VuZFJlbW92ZSkgdGhpcy5fYm91bmRSZW1vdmUgPSB0aGlzLl9yZW1vdmUuYmluZCh0aGlzKTtcbiAgY29uc3QgZGlyID0gc3lzUGF0aC5yZXNvbHZlKGRpcmVjdG9yeSk7XG4gIGlmICghdGhpcy5fd2F0Y2hlZC5oYXMoZGlyKSkgdGhpcy5fd2F0Y2hlZC5zZXQoZGlyLCBuZXcgRGlyRW50cnkoZGlyLCB0aGlzLl9ib3VuZFJlbW92ZSkpO1xuICByZXR1cm4gdGhpcy5fd2F0Y2hlZC5nZXQoZGlyKTtcbn1cblxuLy8gRmlsZSBoZWxwZXJzXG4vLyAtLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBDaGVjayBmb3IgcmVhZCBwZXJtaXNzaW9ucy5cbiAqIEJhc2VkIG9uIHRoaXMgYW5zd2VyIG9uIFNPOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTE3ODE0MDQvMTM1ODQwNVxuICogQHBhcmFtIHtmcy5TdGF0c30gc3RhdHMgLSBvYmplY3QsIHJlc3VsdCBvZiBmc19zdGF0XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGZpbGUgY2FuIGJlIHJlYWRcbiovXG5faGFzUmVhZFBlcm1pc3Npb25zKHN0YXRzKSB7XG4gIGlmICh0aGlzLm9wdGlvbnMuaWdub3JlUGVybWlzc2lvbkVycm9ycykgcmV0dXJuIHRydWU7XG5cbiAgLy8gc3RhdHMubW9kZSBtYXkgYmUgYmlnaW50XG4gIGNvbnN0IG1kID0gc3RhdHMgJiYgTnVtYmVyLnBhcnNlSW50KHN0YXRzLm1vZGUsIDEwKTtcbiAgY29uc3Qgc3QgPSBtZCAmIDBvNzc3O1xuICBjb25zdCBpdCA9IE51bWJlci5wYXJzZUludChzdC50b1N0cmluZyg4KVswXSwgMTApO1xuICByZXR1cm4gQm9vbGVhbig0ICYgaXQpO1xufVxuXG4vKipcbiAqIEhhbmRsZXMgZW1pdHRpbmcgdW5saW5rIGV2ZW50cyBmb3JcbiAqIGZpbGVzIGFuZCBkaXJlY3RvcmllcywgYW5kIHZpYSByZWN1cnNpb24sIGZvclxuICogZmlsZXMgYW5kIGRpcmVjdG9yaWVzIHdpdGhpbiBkaXJlY3RvcmllcyB0aGF0IGFyZSB1bmxpbmtlZFxuICogQHBhcmFtIHtTdHJpbmd9IGRpcmVjdG9yeSB3aXRoaW4gd2hpY2ggdGhlIGZvbGxvd2luZyBpdGVtIGlzIGxvY2F0ZWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpdGVtICAgICAgYmFzZSBwYXRoIG9mIGl0ZW0vZGlyZWN0b3J5XG4gKiBAcmV0dXJucyB7dm9pZH1cbiovXG5fcmVtb3ZlKGRpcmVjdG9yeSwgaXRlbSwgaXNEaXJlY3RvcnkpIHtcbiAgLy8gaWYgd2hhdCBpcyBiZWluZyBkZWxldGVkIGlzIGEgZGlyZWN0b3J5LCBnZXQgdGhhdCBkaXJlY3RvcnkncyBwYXRoc1xuICAvLyBmb3IgcmVjdXJzaXZlIGRlbGV0aW5nIGFuZCBjbGVhbmluZyBvZiB3YXRjaGVkIG9iamVjdFxuICAvLyBpZiBpdCBpcyBub3QgYSBkaXJlY3RvcnksIG5lc3RlZERpcmVjdG9yeUNoaWxkcmVuIHdpbGwgYmUgZW1wdHkgYXJyYXlcbiAgY29uc3QgcGF0aCA9IHN5c1BhdGguam9pbihkaXJlY3RvcnksIGl0ZW0pO1xuICBjb25zdCBmdWxsUGF0aCA9IHN5c1BhdGgucmVzb2x2ZShwYXRoKTtcbiAgaXNEaXJlY3RvcnkgPSBpc0RpcmVjdG9yeSAhPSBudWxsXG4gICAgPyBpc0RpcmVjdG9yeVxuICAgIDogdGhpcy5fd2F0Y2hlZC5oYXMocGF0aCkgfHwgdGhpcy5fd2F0Y2hlZC5oYXMoZnVsbFBhdGgpO1xuXG4gIC8vIHByZXZlbnQgZHVwbGljYXRlIGhhbmRsaW5nIGluIGNhc2Ugb2YgYXJyaXZpbmcgaGVyZSBuZWFybHkgc2ltdWx0YW5lb3VzbHlcbiAgLy8gdmlhIG11bHRpcGxlIHBhdGhzIChzdWNoIGFzIF9oYW5kbGVGaWxlIGFuZCBfaGFuZGxlRGlyKVxuICBpZiAoIXRoaXMuX3Rocm90dGxlKCdyZW1vdmUnLCBwYXRoLCAxMDApKSByZXR1cm47XG5cbiAgLy8gaWYgdGhlIG9ubHkgd2F0Y2hlZCBmaWxlIGlzIHJlbW92ZWQsIHdhdGNoIGZvciBpdHMgcmV0dXJuXG4gIGlmICghaXNEaXJlY3RvcnkgJiYgIXRoaXMub3B0aW9ucy51c2VGc0V2ZW50cyAmJiB0aGlzLl93YXRjaGVkLnNpemUgPT09IDEpIHtcbiAgICB0aGlzLmFkZChkaXJlY3RvcnksIGl0ZW0sIHRydWUpO1xuICB9XG5cbiAgLy8gVGhpcyB3aWxsIGNyZWF0ZSBhIG5ldyBlbnRyeSBpbiB0aGUgd2F0Y2hlZCBvYmplY3QgaW4gZWl0aGVyIGNhc2VcbiAgLy8gc28gd2UgZ290IHRvIGRvIHRoZSBkaXJlY3RvcnkgY2hlY2sgYmVmb3JlaGFuZFxuICBjb25zdCB3cCA9IHRoaXMuX2dldFdhdGNoZWREaXIocGF0aCk7XG4gIGNvbnN0IG5lc3RlZERpcmVjdG9yeUNoaWxkcmVuID0gd3AuZ2V0Q2hpbGRyZW4oKTtcblxuICAvLyBSZWN1cnNpdmVseSByZW1vdmUgY2hpbGRyZW4gZGlyZWN0b3JpZXMgLyBmaWxlcy5cbiAgbmVzdGVkRGlyZWN0b3J5Q2hpbGRyZW4uZm9yRWFjaChuZXN0ZWQgPT4gdGhpcy5fcmVtb3ZlKHBhdGgsIG5lc3RlZCkpO1xuXG4gIC8vIENoZWNrIGlmIGl0ZW0gd2FzIG9uIHRoZSB3YXRjaGVkIGxpc3QgYW5kIHJlbW92ZSBpdFxuICBjb25zdCBwYXJlbnQgPSB0aGlzLl9nZXRXYXRjaGVkRGlyKGRpcmVjdG9yeSk7XG4gIGNvbnN0IHdhc1RyYWNrZWQgPSBwYXJlbnQuaGFzKGl0ZW0pO1xuICBwYXJlbnQucmVtb3ZlKGl0ZW0pO1xuXG4gIC8vIEZpeGVzIGlzc3VlICMxMDQyIC0+IFJlbGF0aXZlIHBhdGhzIHdlcmUgZGV0ZWN0ZWQgYW5kIGFkZGVkIGFzIHN5bWxpbmtzXG4gIC8vIChodHRwczovL2dpdGh1Yi5jb20vcGF1bG1pbGxyL2Nob2tpZGFyL2Jsb2IvZTE3NTNkZGJjOTU3MWJkYzMzYjRhNGFmMTcyZDUyY2I2ZTYxMWMxMC9saWIvbm9kZWZzLWhhbmRsZXIuanMjTDYxMiksXG4gIC8vIGJ1dCBuZXZlciByZW1vdmVkIGZyb20gdGhlIG1hcCBpbiBjYXNlIHRoZSBwYXRoIHdhcyBkZWxldGVkLlxuICAvLyBUaGlzIGxlYWRzIHRvIGFuIGluY29ycmVjdCBzdGF0ZSBpZiB0aGUgcGF0aCB3YXMgcmVjcmVhdGVkOlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vcGF1bG1pbGxyL2Nob2tpZGFyL2Jsb2IvZTE3NTNkZGJjOTU3MWJkYzMzYjRhNGFmMTcyZDUyY2I2ZTYxMWMxMC9saWIvbm9kZWZzLWhhbmRsZXIuanMjTDU1M1xuICBpZiAodGhpcy5fc3ltbGlua1BhdGhzLmhhcyhmdWxsUGF0aCkpIHtcbiAgICB0aGlzLl9zeW1saW5rUGF0aHMuZGVsZXRlKGZ1bGxQYXRoKTtcbiAgfVxuXG4gIC8vIElmIHdlIHdhaXQgZm9yIHRoaXMgZmlsZSB0byBiZSBmdWxseSB3cml0dGVuLCBjYW5jZWwgdGhlIHdhaXQuXG4gIGxldCByZWxQYXRoID0gcGF0aDtcbiAgaWYgKHRoaXMub3B0aW9ucy5jd2QpIHJlbFBhdGggPSBzeXNQYXRoLnJlbGF0aXZlKHRoaXMub3B0aW9ucy5jd2QsIHBhdGgpO1xuICBpZiAodGhpcy5vcHRpb25zLmF3YWl0V3JpdGVGaW5pc2ggJiYgdGhpcy5fcGVuZGluZ1dyaXRlcy5oYXMocmVsUGF0aCkpIHtcbiAgICBjb25zdCBldmVudCA9IHRoaXMuX3BlbmRpbmdXcml0ZXMuZ2V0KHJlbFBhdGgpLmNhbmNlbFdhaXQoKTtcbiAgICBpZiAoZXZlbnQgPT09IEVWX0FERCkgcmV0dXJuO1xuICB9XG5cbiAgLy8gVGhlIEVudHJ5IHdpbGwgZWl0aGVyIGJlIGEgZGlyZWN0b3J5IHRoYXQganVzdCBnb3QgcmVtb3ZlZFxuICAvLyBvciBhIGJvZ3VzIGVudHJ5IHRvIGEgZmlsZSwgaW4gZWl0aGVyIGNhc2Ugd2UgaGF2ZSB0byByZW1vdmUgaXRcbiAgdGhpcy5fd2F0Y2hlZC5kZWxldGUocGF0aCk7XG4gIHRoaXMuX3dhdGNoZWQuZGVsZXRlKGZ1bGxQYXRoKTtcbiAgY29uc3QgZXZlbnROYW1lID0gaXNEaXJlY3RvcnkgPyBFVl9VTkxJTktfRElSIDogRVZfVU5MSU5LO1xuICBpZiAod2FzVHJhY2tlZCAmJiAhdGhpcy5faXNJZ25vcmVkKHBhdGgpKSB0aGlzLl9lbWl0KGV2ZW50TmFtZSwgcGF0aCk7XG5cbiAgLy8gQXZvaWQgY29uZmxpY3RzIGlmIHdlIGxhdGVyIGNyZWF0ZSBhbm90aGVyIGZpbGUgd2l0aCB0aGUgc2FtZSBuYW1lXG4gIGlmICghdGhpcy5vcHRpb25zLnVzZUZzRXZlbnRzKSB7XG4gICAgdGhpcy5fY2xvc2VQYXRoKHBhdGgpO1xuICB9XG59XG5cbi8qKlxuICogQ2xvc2VzIGFsbCB3YXRjaGVycyBmb3IgYSBwYXRoXG4gKiBAcGFyYW0ge1BhdGh9IHBhdGhcbiAqL1xuX2Nsb3NlUGF0aChwYXRoKSB7XG4gIHRoaXMuX2Nsb3NlRmlsZShwYXRoKVxuICBjb25zdCBkaXIgPSBzeXNQYXRoLmRpcm5hbWUocGF0aCk7XG4gIHRoaXMuX2dldFdhdGNoZWREaXIoZGlyKS5yZW1vdmUoc3lzUGF0aC5iYXNlbmFtZShwYXRoKSk7XG59XG5cbi8qKlxuICogQ2xvc2VzIG9ubHkgZmlsZS1zcGVjaWZpYyB3YXRjaGVyc1xuICogQHBhcmFtIHtQYXRofSBwYXRoXG4gKi9cbl9jbG9zZUZpbGUocGF0aCkge1xuICBjb25zdCBjbG9zZXJzID0gdGhpcy5fY2xvc2Vycy5nZXQocGF0aCk7XG4gIGlmICghY2xvc2VycykgcmV0dXJuO1xuICBjbG9zZXJzLmZvckVhY2goY2xvc2VyID0+IGNsb3NlcigpKTtcbiAgdGhpcy5fY2xvc2Vycy5kZWxldGUocGF0aCk7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7UGF0aH0gcGF0aFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2xvc2VyXG4gKi9cbl9hZGRQYXRoQ2xvc2VyKHBhdGgsIGNsb3Nlcikge1xuICBpZiAoIWNsb3NlcikgcmV0dXJuO1xuICBsZXQgbGlzdCA9IHRoaXMuX2Nsb3NlcnMuZ2V0KHBhdGgpO1xuICBpZiAoIWxpc3QpIHtcbiAgICBsaXN0ID0gW107XG4gICAgdGhpcy5fY2xvc2Vycy5zZXQocGF0aCwgbGlzdCk7XG4gIH1cbiAgbGlzdC5wdXNoKGNsb3Nlcik7XG59XG5cbl9yZWFkZGlycChyb290LCBvcHRzKSB7XG4gIGlmICh0aGlzLmNsb3NlZCkgcmV0dXJuO1xuICBjb25zdCBvcHRpb25zID0ge3R5cGU6IEVWX0FMTCwgYWx3YXlzU3RhdDogdHJ1ZSwgbHN0YXQ6IHRydWUsIC4uLm9wdHN9O1xuICBsZXQgc3RyZWFtID0gcmVhZGRpcnAocm9vdCwgb3B0aW9ucyk7XG4gIHRoaXMuX3N0cmVhbXMuYWRkKHN0cmVhbSk7XG4gIHN0cmVhbS5vbmNlKFNUUl9DTE9TRSwgKCkgPT4ge1xuICAgIHN0cmVhbSA9IHVuZGVmaW5lZDtcbiAgfSk7XG4gIHN0cmVhbS5vbmNlKFNUUl9FTkQsICgpID0+IHtcbiAgICBpZiAoc3RyZWFtKSB7XG4gICAgICB0aGlzLl9zdHJlYW1zLmRlbGV0ZShzdHJlYW0pO1xuICAgICAgc3RyZWFtID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzdHJlYW07XG59XG5cbn1cblxuLy8gRXhwb3J0IEZTV2F0Y2hlciBjbGFzc1xuZXhwb3J0cy5GU1dhdGNoZXIgPSBGU1dhdGNoZXI7XG5cbi8qKlxuICogSW5zdGFudGlhdGVzIHdhdGNoZXIgd2l0aCBwYXRocyB0byBiZSB0cmFja2VkLlxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXk8U3RyaW5nPn0gcGF0aHMgZmlsZS9kaXJlY3RvcnkgcGF0aHMgYW5kL29yIGdsb2JzXG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbnMgY2hva2lkYXIgb3B0c1xuICogQHJldHVybnMgYW4gaW5zdGFuY2Ugb2YgRlNXYXRjaGVyIGZvciBjaGFpbmluZy5cbiAqL1xuY29uc3Qgd2F0Y2ggPSAocGF0aHMsIG9wdGlvbnMpID0+IHtcbiAgY29uc3Qgd2F0Y2hlciA9IG5ldyBGU1dhdGNoZXIob3B0aW9ucyk7XG4gIHdhdGNoZXIuYWRkKHBhdGhzKTtcbiAgcmV0dXJuIHdhdGNoZXI7XG59O1xuXG5leHBvcnRzLndhdGNoID0gd2F0Y2g7XG4iLCAiZXhwb3J0IHR5cGUgT3B0aW9uczxSZXN1bHQ+ID0ge1xuICBpc0ltbWVkaWF0ZT86IGJvb2xlYW47XG4gIG1heFdhaXQ/OiBudW1iZXI7XG4gIGNhbGxiYWNrPzogKGRhdGE6IFJlc3VsdCkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVib3VuY2VkRnVuY3Rpb248XG4gIEFyZ3MgZXh0ZW5kcyBhbnlbXSxcbiAgRiBleHRlbmRzICguLi5hcmdzOiBBcmdzKSA9PiBhbnlcbj4ge1xuICAodGhpczogVGhpc1BhcmFtZXRlclR5cGU8Rj4sIC4uLmFyZ3M6IEFyZ3MpOiBQcm9taXNlPFJldHVyblR5cGU8Rj4+O1xuICBjYW5jZWw6IChyZWFzb24/OiBhbnkpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBEZWJvdW5jZWRQcm9taXNlPEZ1bmN0aW9uUmV0dXJuPiB7XG4gIHJlc29sdmU6IChyZXN1bHQ6IEZ1bmN0aW9uUmV0dXJuKSA9PiB2b2lkO1xuICByZWplY3Q6IChyZWFzb24/OiBhbnkpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZTxBcmdzIGV4dGVuZHMgYW55W10sIEYgZXh0ZW5kcyAoLi4uYXJnczogQXJncykgPT4gYW55PihcbiAgZnVuYzogRixcbiAgd2FpdE1pbGxpc2Vjb25kcyA9IDUwLFxuICBvcHRpb25zOiBPcHRpb25zPFJldHVyblR5cGU8Rj4+ID0ge31cbik6IHtcbiAgKHRoaXM6IFRoaXNQYXJhbWV0ZXJUeXBlPEY+LCAuLi5hcmdzOiBQYXJhbWV0ZXJzPEY+ICYgQXJncyk6IFByb21pc2U8XG4gICAgUmV0dXJuVHlwZTxGPlxuICA+O1xuICBjYW5jZWw6IChyZWFzb24/OiBhbnkpID0+IHZvaWQ7XG59IHtcbiAgbGV0IHRpbWVvdXRJZDogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4gfCB1bmRlZmluZWQ7XG4gIGNvbnN0IGlzSW1tZWRpYXRlID0gb3B0aW9ucy5pc0ltbWVkaWF0ZSA/PyBmYWxzZTtcbiAgY29uc3QgY2FsbGJhY2sgPSBvcHRpb25zLmNhbGxiYWNrID8/IGZhbHNlO1xuICBjb25zdCBtYXhXYWl0ID0gb3B0aW9ucy5tYXhXYWl0O1xuICBsZXQgbGFzdEludm9rZVRpbWUgPSBEYXRlLm5vdygpO1xuXG4gIGxldCBwcm9taXNlczogRGVib3VuY2VkUHJvbWlzZTxSZXR1cm5UeXBlPEY+PltdID0gW107XG5cbiAgZnVuY3Rpb24gbmV4dEludm9rZVRpbWVvdXQoKSB7XG4gICAgaWYgKG1heFdhaXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgdGltZVNpbmNlTGFzdEludm9jYXRpb24gPSBEYXRlLm5vdygpIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAgIGlmICh0aW1lU2luY2VMYXN0SW52b2NhdGlvbiArIHdhaXRNaWxsaXNlY29uZHMgPj0gbWF4V2FpdCkge1xuICAgICAgICByZXR1cm4gbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZvY2F0aW9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB3YWl0TWlsbGlzZWNvbmRzO1xuICB9XG5cbiAgY29uc3QgZGVib3VuY2VkRnVuY3Rpb24gPSBmdW5jdGlvbiAoXG4gICAgdGhpczogVGhpc1BhcmFtZXRlclR5cGU8Rj4sXG4gICAgLi4uYXJnczogUGFyYW1ldGVyczxGPlxuICApIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcbiAgICByZXR1cm4gbmV3IFByb21pc2U8UmV0dXJuVHlwZTxGPj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgaW52b2tlRnVuY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRpbWVvdXRJZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgbGFzdEludm9rZVRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICBpZiAoIWlzSW1tZWRpYXRlKSB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhyZXN1bHQpO1xuICAgICAgICAgIHByb21pc2VzLmZvckVhY2goKHsgcmVzb2x2ZSB9KSA9PiByZXNvbHZlKHJlc3VsdCkpO1xuICAgICAgICAgIHByb21pc2VzID0gW107XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHNob3VsZENhbGxOb3cgPSBpc0ltbWVkaWF0ZSAmJiB0aW1lb3V0SWQgPT09IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHRpbWVvdXRJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgfVxuXG4gICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGludm9rZUZ1bmN0aW9uLCBuZXh0SW52b2tlVGltZW91dCgpKTtcblxuICAgICAgaWYgKHNob3VsZENhbGxOb3cpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2socmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH1cbiAgICAgIHByb21pc2VzLnB1c2goeyByZXNvbHZlLCByZWplY3QgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZGVib3VuY2VkRnVuY3Rpb24uY2FuY2VsID0gZnVuY3Rpb24gKHJlYXNvbj86IGFueSkge1xuICAgIGlmICh0aW1lb3V0SWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgfVxuICAgIHByb21pc2VzLmZvckVhY2goKHsgcmVqZWN0IH0pID0+IHJlamVjdChyZWFzb24pKTtcbiAgICBwcm9taXNlcyA9IFtdO1xuICB9O1xuXG4gIHJldHVybiBkZWJvdW5jZWRGdW5jdGlvbjtcbn1cbiIsICJpbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgaXBjTWFpbiB9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7IElQQyB9IGZyb20gJ0Bjb21tb24vY29uc3RhbnRzJztcblxuaXBjTWFpbi5vbihJUEMuZ2V0V2luZG93RGF0YSwgKGV2ZW50KSA9PiB7XG4gIC8vIEB0cy1leHBlY3QtZXJyb3Iga2VybmVsV2luZG93RGF0YSBpcyBpbmplY3RlZCBieSBLZXJuZWxcbiAgZXZlbnQucmV0dXJuVmFsdWUgPSBldmVudC5zZW5kZXIua2VybmVsV2luZG93RGF0YTtcbn0pO1xuXG5pcGNNYWluLmhhbmRsZShJUEMuZ2V0U3R5bGVzLCAoKSA9PiB7XG4gIHJldHVybiBmcy5yZWFkRmlsZVN5bmMoam9pbihfX2Rpcm5hbWUsICdyZW5kZXJlci5jc3MnKSwgJ3V0ZjgnKTtcbn0pO1xuXG5pbXBvcnQgJy4vY29uZmlnJztcbmltcG9ydCAnLi9wcm90b2NvbCc7XG5pbXBvcnQgJy4vcXVpY2tjc3MnO1xuaW1wb3J0ICcuL3RoZW1lcyc7XG4iLCAiZXhwb3J0IGNvbnN0IHByZWZpeGVzID0ge1xuICBtYWluOiAnUE9QQ09STl8nLFxuICBxdWlja0NzczogJ1FVSUNLQ1NTXydcbn07XG5cbmV4cG9ydCBjb25zdCBJUEMgPSBwcmVmaXhWYWx1ZXMoe1xuICAvLyBNaXNjXG4gIGdldENvbmZpZzogJ0dFVF9DT05GSUcnLFxuICBnZXRTdHlsZXM6ICdHRVRfU1RZTEVTJyxcbiAgc3RhdHVzTWVzc2FnZTogJ1NUQVRVU19NRVNTQUdFJyxcbiAgZ2V0V2luZG93RGF0YTogJ0dFVF9XSU5ET1dfREFUQScsXG4gIGxvZzogJ0xPRycsXG5cbiAgLy8gVGhlbWVzXG4gIGdldFRoZW1lczogJ0dFVF9USEVNRVMnLFxuICBvblRoZW1lQ2hhbmdlOiAnT05fVEhFTUVfQ0hBTkdFJyxcbiAgc2F2ZVRoZW1lU3RhdGU6ICdTQVZFX1RIRU1FX1NUQVRFJyxcblxuICAvLyBRdWlja0NTU1xuICBnZXRRdWlja0NzczogJ0dFVF9RVUlDS19DU1MnLFxuICBvblF1aWNrQ3NzQ2hhbmdlOiAnT05fUVVJQ0tfQ1NTX0NIQU5HRScsXG4gIGNyZWF0ZVF1aWNrQ3NzTm9kZTogJ0NSRUFURV9RVUlDS19DU1NfTk9ERScsXG4gIGRlbGV0ZVF1aWNrQ3NzTm9kZTogJ0RFTEVURV9RVUlDS19DU1NfTk9ERScsXG4gIHJlbmFtZVF1aWNrQ3NzTm9kZTogJ1JFTkFNRV9RVUlDS19DU1NfTk9ERScsXG4gIHVwZGF0ZVF1aWNrQ3NzRmlsZTogJ1NBVkVfUVVJQ0tfQ1NTX0ZJTEUnLFxufSwgcHJlZml4ZXMubWFpbik7XG5cbmV4cG9ydCBjb25zdCBNRVNTQUdFUyA9IHtcbiAgcXVpY2tDc3M6IHByZWZpeFZhbHVlcyh7XG4gICAgY3JlYXRlZDogJ0NSRUFURUQnLFxuICAgIGRlbGV0ZWQ6ICdERUxFVEVEJyxcbiAgICByZW5hbWVkOiAnUkVOQU1FRCcsXG4gICAgdXBkYXRlZDogJ1VQREFURUQnLFxuICB9LCBwcmVmaXhlcy5xdWlja0NzcyksXG59O1xuXG5leHBvcnQgY29uc3QgUkVOREVSRVIgPSBwcmVmaXhWYWx1ZXMoe1xuICBzdG9wOiAnU1RPUCcsXG59LCBwcmVmaXhlcy5tYWluKTtcblxuZnVuY3Rpb24gcHJlZml4VmFsdWVzPFQgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PihvYmplY3Q6IFQsIHByZWZpeDogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9IGFzIFJlY29yZDxrZXlvZiBULCBzdHJpbmc+O1xuICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3QpIHtcbiAgICByZXN1bHRba2V5XSA9IHByZWZpeCArIG9iamVjdFtrZXldO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCAiaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCB7IGlzQWJzb2x1dGUsIGpvaW4gfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IGFyZ3YgfSBmcm9tICdwcm9jZXNzJztcbmltcG9ydCB7IGlwY01haW4gfSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQgeyByb290IH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBJUEMgfSBmcm9tICdAY29tbW9uL2NvbnN0YW50cyc7XG5pbXBvcnQgTG9nZ2VyTW9kdWxlIGZyb20gJ0Bjb21tb24vbG9nZ2VyJztcbmNvbnN0IExvZ2dlciA9IG5ldyBMb2dnZXJNb2R1bGUoJ01haW4nLCAnYW5zaScpO1xuXG5jb25zdCBkZWZhdWx0Q29uZmlnOiBDb25maWcgPSB7XG4gIGhvdGtleTogJ2N0cmwrc2hpZnQrcCcsXG4gIHF1aWNrQ3NzRGlyOiAnLi9xdWlja2NzcycsXG4gIHRoZW1lRmlsZXM6IFtcbiAgICAnLi90aGVtZXMvKi9pbmRleC5qc29uJyxcbiAgICAuLi4ocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJ1xuICAgICAgPyBbJyVVU0VSUFJPRklMRSUvZGlzY29yZC90aGVtZXMvKi9pbmRleC5qc29uJ11cbiAgICAgIDogWyckSE9NRS9kaXNjb3JkL3RoZW1lcy8qL2luZGV4Lmpzb24nXVxuICAgICksXG4gIF0sXG4gIGVuYWJsZWQ6IHt9LFxufTtcblxuaWYgKCFmcy5leGlzdHNTeW5jKGpvaW4ocm9vdCwgJ2NvbmZpZy5qc29uJykpKSB7XG4gIExvZ2dlci53YXJuKCdObyBjb25maWcgZmlsZSBmb3VuZCwgY3JlYXRpbmcgb25lLicpO1xuICBmcy53cml0ZUZpbGVTeW5jKGpvaW4ocm9vdCwgJ2NvbmZpZy5qc29uJyksIEpTT04uc3RyaW5naWZ5KGRlZmF1bHRDb25maWcsIG51bGwsIDIpKTtcbn1cblxuY29uc3QgY29uZmlnSnNvbiA9IHJlcXVpcmUoam9pbihyb290LCAnY29uZmlnLmpzb24nKSk7XG5jb25zdCBjb25maWdKc29uV2l0aERlZmF1bHRzID0ge1xuICAuLi5kZWZhdWx0Q29uZmlnLFxuICAuLi5jb25maWdKc29uLFxufTtcbmV4cG9ydCBjb25zdCBjb25maWc6IENvbmZpZyA9IGNvbmZpZ0pzb25XaXRoRGVmYXVsdHM7XG5cbmlmIChhcmd2LmluY2x1ZGVzKCctLXZlcmJvc2UnKSB8fCBOT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgY29uZmlnLnZlcmJvc2UgPSB0cnVlO1xuXG5jb25maWcucXVpY2tDc3NEaXIgPSBpc0Fic29sdXRlKGNvbmZpZy5xdWlja0Nzc0RpcilcbiAgPyBjb25maWcucXVpY2tDc3NEaXJcbiAgOiBqb2luKHJvb3QsIGNvbmZpZy5xdWlja0Nzc0Rpcik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcblxuaWYgKGNvbmZpZy52ZXJib3NlKSBMb2dnZXIuZGVidWcoY29uZmlnKTtcblxuaXBjTWFpbi5vbihJUEMuZ2V0Q29uZmlnLCAoZXZlbnQpID0+IGV2ZW50LnJldHVyblZhbHVlID0gY29uZmlnKTtcbiIsICJpbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XG5cbmV4cG9ydCBjb25zdCByb290ID0gam9pbihfX2Rpcm5hbWUsICcuLicpO1xuZXhwb3J0ICogZnJvbSAnLi9oYXNWYWx1ZSc7XG5leHBvcnQgKiBmcm9tICcuL3Jlc29sdmVQYXRoJztcbmV4cG9ydCAqIGZyb20gJy4vc2VuZFRvQWxsJztcbiIsICJleHBvcnQgZnVuY3Rpb24gaGFzVmFsdWUoXG4gIG9iajogUmVjb3JkPHN0cmluZywgYW55PixcbiAga2V5OiBzdHJpbmcsXG4gIHZhbHVlOiBhbnlcbik6IGJvb2xlYW4ge1xuICBpZiAoa2V5IGluIG9iaiAmJiBvYmpba2V5XSA9PT0gdmFsdWUpIHJldHVybiB0cnVlO1xuXG4gIGZvciAoY29uc3QgcHJvcCBpbiBvYmopIHtcbiAgICBpZiAocHJvcCBpbiBvYmogJiYgdHlwZW9mIG9ialtwcm9wXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGhhc1ZhbHVlKG9ialtwcm9wXSwga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAocmVzdWx0KSByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG4iLCAiaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdvcyc7XG5pbXBvcnQgeyBub3JtYWxpemUgfSBmcm9tICdwYXRoJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVQYXRoKFxuICBwYXRoOiBzdHJpbmcsXG4gIHZhclR5cGVzOiB7IHdpbmRvd3M6IGJvb2xlYW47IHVuaXg6IGJvb2xlYW4gfSA9IHtcbiAgICB3aW5kb3dzOiBwbGF0Zm9ybSgpID09PSAnd2luMzInLFxuICAgIHVuaXg6IHBsYXRmb3JtKCkgIT09ICd3aW4zMicsXG4gIH1cbikge1xuICBjb25zdCB3aW5kb3dzUmVnZXggPSAvJShbXiVdKyklL2c7IC8vIG1hdGNoZXMgJXZhcmlhYmxlTmFtZSVcbiAgY29uc3QgdW5peFJlZ2V4ID0gL1xcJCg/OnsoPz1bXn1dKn0pKT8oXFx3Kyl9Py9nOyAvLyBtYXRjaGVzICR2YXJpYWJsZU5hbWUgYW5kICR7dmFyaWFibGVOYW1lfVxuXG4gIC8vIFRPRE86IGRvbid0IGNoYW5nZSBhbnl0aGluZyBpZiBubyB2YXJpYWJsZSB3aXRoIHRoYXQgbmFtZSBleGlzdHNcbiAgaWYgKHZhclR5cGVzLndpbmRvd3MpXG4gICAgcGF0aCA9IHBhdGgucmVwbGFjZSh3aW5kb3dzUmVnZXgsIChfLCBuYW1lKSA9PiBwcm9jZXNzLmVudltuYW1lXSA/PyAnJyk7XG4gIGlmICh2YXJUeXBlcy51bml4KVxuICAgIHBhdGggPSBwYXRoLnJlcGxhY2UodW5peFJlZ2V4LCAoXywgbmFtZSkgPT4gcHJvY2Vzcy5lbnZbbmFtZV0gPz8gJycpO1xuXG4gIHJldHVybiBub3JtYWxpemUocGF0aCk7XG59XG4iLCAiaW1wb3J0IHsgQnJvd3NlcldpbmRvdyB9IGZyb20gJ2VsZWN0cm9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRUb0FsbChjaGFubmVsOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gIEJyb3dzZXJXaW5kb3cuZ2V0QWxsV2luZG93cygpLmZvckVhY2goKHdpbmRvdykgPT4ge1xuICAgIHdpbmRvdy53ZWJDb250ZW50cy5zZW5kKGNoYW5uZWwsIC4uLmFyZ3MpO1xuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBJUEMgfSBmcm9tICdAY29tbW9uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBMb2dnZXJNb2R1bGUge1xuICBwcml2YXRlIG91dHB1dDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kdWxlOiBzdHJpbmcsIHR5cGUgPSAnY29uc29sZScpIHtcbiAgICB0aGlzLm91dHB1dCA9IExvZ2dlck1vZHVsZS5wYXJzZU91dHB1dCh0eXBlKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHBhcnNlT3V0cHV0KG91dHB1dDogc3RyaW5nKSB7XG4gICAgc3dpdGNoIChvdXRwdXQpIHtcbiAgICAgIGNhc2UgJ2Fuc2knOlxuICAgICAgY2FzZSAndGVybWluYWwnOlxuICAgICAgICByZXR1cm4gJ2Fuc2knO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdjb25zb2xlJztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBwYXJzZVR5cGUodHlwZTogc3RyaW5nKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdpbmZvJzpcbiAgICAgIGNhc2UgJ3dhcm4nOlxuICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgY2FzZSAnZGVidWcnOlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnbG9nJztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBwYXJzZUNvbG9yKHR5cGU6IHN0cmluZykge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnZGVidWcnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0cjogJ01lZGl1bVNwcmluZ0dyZWVuJyxcbiAgICAgICAgICBhcnI6IFswLCAyNTAsIDE1NF0sXG4gICAgICAgIH07XG4gICAgICBjYXNlICdpbmZvJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdHI6ICdEZWVwU2t5Qmx1ZScsXG4gICAgICAgICAgYXJyOiBbMCwgMTkxLCAyNTVdLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0cjogJ2NyaW1zb24nLFxuICAgICAgICAgIGFycjogWzIyMCwgMjAsIDYwXSxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ3dhcm4nOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0cjogJ0RhcmtPcmFuZ2UnLFxuICAgICAgICAgIGFycjogWzI1NSwgMTQwLCAwXSxcbiAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RyOiAnZ29sZCcsXG4gICAgICAgICAgYXJyOiBbMjU1LCAyMTUsIDBdLFxuICAgICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGFuc2lDb2xvcihjb2xvcjogQXJyYXk8bnVtYmVyPiwgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGBcXHgxYlszODsyOyR7Y29sb3JbMF19OyR7Y29sb3JbMV19OyR7Y29sb3JbMl19bSR7bWVzc2FnZX1cXHgxYlswbWA7XG4gIH1cblxuICBhc3luYyAjbG9nKHR5cGU6IHN0cmluZywgbWVzc2FnZTogYW55W10pIHtcbiAgICB0eXBlID0gTG9nZ2VyTW9kdWxlLnBhcnNlVHlwZSh0eXBlKTtcbiAgICBjb25zdCBsb2dDb2xvciA9IExvZ2dlck1vZHVsZS5wYXJzZUNvbG9yKHR5cGUpO1xuXG4gICAgY29uc3QgYmFubmVyID1cbiAgICAgIHRoaXMub3V0cHV0ID09PSAnYW5zaSdcbiAgICAgICAgPyBbYFske0xvZ2dlck1vZHVsZS5hbnNpQ29sb3IobG9nQ29sb3IuYXJyLCAnUG9wY29ybicpfSA+ICR7dGhpcy5tb2R1bGV9XWBdXG4gICAgICAgIDogW2BbJWNQb3Bjb3JuJWMgPiAke3RoaXMubW9kdWxlfV1gLCBgY29sb3I6ICR7bG9nQ29sb3Iuc3RyfTtgLCAnJ107XG5cbiAgICBjb25zb2xlW3R5cGVdKC4uLmJhbm5lciwgLi4ubWVzc2FnZSk7XG5cbiAgICAvLyBUT0RPOiBEb24ndCBzZW5kIGV2ZXJ5dGhpbmdcbiAgICBpZiAodGhpcy5vdXRwdXQgPT09ICdhbnNpJykge1xuICAgICAgY29uc3QgeyBCcm93c2VyV2luZG93IH0gPSBhd2FpdCBpbXBvcnQoJ2VsZWN0cm9uJyk7XG5cbiAgICAgIEJyb3dzZXJXaW5kb3cuZ2V0QWxsV2luZG93cygpLmZvckVhY2goKHdpbikgPT4gd2luLndlYkNvbnRlbnRzLnNlbmQoSVBDLmxvZywgdHlwZSwgLi4ubWVzc2FnZSkpO1xuICAgIH1cbiAgfVxuXG4gIGxvZyA9ICguLi5tZXNzYWdlOiBhbnlbXSkgPT4gdGhpcy4jbG9nKCdsb2cnLCBtZXNzYWdlKTtcbiAgaW5mbyA9ICguLi5tZXNzYWdlOiBhbnlbXSkgPT4gdGhpcy4jbG9nKCdpbmZvJywgbWVzc2FnZSk7XG4gIHdhcm4gPSAoLi4ubWVzc2FnZTogYW55W10pID0+IHRoaXMuI2xvZygnd2FybicsIG1lc3NhZ2UpO1xuICBlcnJvciA9ICguLi5tZXNzYWdlOiBhbnlbXSkgPT4gdGhpcy4jbG9nKCdlcnJvcicsIG1lc3NhZ2UpO1xuICBkZWJ1ZyA9ICguLi5tZXNzYWdlOiBhbnlbXSkgPT4gdGhpcy4jbG9nKCdkZWJ1ZycsIG1lc3NhZ2UpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dnZXJNb2R1bGU7XG4iLCAiaW1wb3J0IHsgYXBwLCBwcm90b2NvbCB9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgdGhlbWVzIH0gZnJvbSAnLi90aGVtZXMnO1xuaW1wb3J0IExvZ2dlck1vZHVsZSBmcm9tICdAY29tbW9uL2xvZ2dlcic7XG5jb25zdCBMb2dnZXIgPSBuZXcgTG9nZ2VyTW9kdWxlKCdNYWluID4gUHJvdG9jb2wnLCAnYW5zaScpO1xuXG5wcm90b2NvbC5yZWdpc3RlclNjaGVtZXNBc1ByaXZpbGVnZWQoW1xuICB7XG4gICAgc2NoZW1lOiAncG9wY29ybicsXG4gICAgcHJpdmlsZWdlczoge1xuICAgICAgc2VjdXJlOiB0cnVlLFxuICAgICAgc3RhbmRhcmQ6IHRydWUsXG4gICAgICBzdXBwb3J0RmV0Y2hBUEk6IHRydWUsXG4gICAgfSxcbiAgfSxcbl0pO1xuXG5hcHAub24oJ3JlYWR5JywgKCkgPT4ge1xuICBwcm90b2NvbC5yZWdpc3RlckZpbGVQcm90b2NvbCgncG9wY29ybicsIChyZXF1ZXN0LCBjYikgPT4ge1xuICAgIGlmIChjb25maWcudmVyYm9zZSkgTG9nZ2VyLmRlYnVnKCdSZWNlaXZlZCByZXF1ZXN0OicsIHJlcXVlc3QpO1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuICAgIGxldCBmaWxlUGF0aCA9ICcnO1xuXG4gICAgc3dpdGNoICh1cmwuaG9zdG5hbWUpIHtcbiAgICAgIGNhc2UgJ3RoZW1lJzoge1xuICAgICAgICBjb25zdCB0aGVtZSA9IHRoZW1lc1t1cmwucGF0aG5hbWUuc2xpY2UoMSldO1xuICAgICAgICBmaWxlUGF0aCA9IHJlc29sdmUodGhlbWUuanNvbiwgJy4uJywgdGhlbWUubWFpbik7XG4gICAgICB9IGJyZWFrO1xuXG4gICAgICBjYXNlICdzcGxhc2gtdGhlbWUnOiB7XG4gICAgICAgIGNvbnN0IHRoZW1lID0gdGhlbWVzW3VybC5wYXRobmFtZS5zbGljZSgxKV07XG4gICAgICAgIGlmICghdGhlbWUuc3BsYXNoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGZpbGVQYXRoID0gdGhlbWUuc3BsYXNoO1xuICAgICAgfSBicmVhaztcbiAgICB9XG5cbiAgICBjYih7IHBhdGg6IGZpbGVQYXRoIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9KTtcbn0pO1xuIiwgImltcG9ydCB7IHJlc29sdmUsIGlzQWJzb2x1dGUgfSBmcm9tICdwYXRoJztcbmltcG9ydCBmZyBmcm9tICdmYXN0LWdsb2InO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgcm9vdCB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IHJlc29sdmVQYXRoIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgd2F0Y2hUaGVtZUZpbGUgfSBmcm9tICcuL3dhdGNoZXInO1xuaW1wb3J0IExvZ2dlck1vZHVsZSBmcm9tICdAY29tbW9uL2xvZ2dlcic7XG5jb25zdCBMb2dnZXIgPSBuZXcgTG9nZ2VyTW9kdWxlKCdNYWluID4gVGhlbWVzJywgJ2Fuc2knKTtcblxuY29uc3QgcmVzb2x2ZWRUaGVtZXMgPSBjb25maWcudGhlbWVGaWxlcy5tYXAoKHBhdGgpID0+IHJlc29sdmVQYXRoKHBhdGgpLnJlcGxhY2UoL1xcXFwvZywgJy8nKSk7XG5jb25zdCB0aGVtZUpzb25zID0gZmcuc3luYyhyZXNvbHZlZFRoZW1lcywge1xuICBhYnNvbHV0ZTogdHJ1ZSxcbiAgY3dkOiByb290LFxufSkubWFwKChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL1xcLy9nLCAnXFxcXCcpKTtcblxuTG9nZ2VyLmxvZygnRGV0ZWN0ZWQgdGhlbWVzOicsIHRoZW1lSnNvbnMpO1xuXG5leHBvcnQgY29uc3QgdGhlbWVzID0ge30gYXMgeyBbaWQ6IHN0cmluZ106IFNpbXBsZVRoZW1lIH07XG5mb3IgKGNvbnN0IGpzb24gb2YgdGhlbWVKc29ucykge1xuICBpZiAoIWpzb24uZW5kc1dpdGgoJy5qc29uJykpIGNvbnRpbnVlO1xuICB1cGRhdGVUaGVtZShqc29uKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRoZW1lKGpzb246IHN0cmluZykge1xuICBjb25zdCBwYXRoS2V5cyA9IFtcbiAgICAnbWFpbicsXG4gICAgJ3NwbGFzaCcsXG4gIF07XG5cbiAgY29uc3QgbWV0YTogTWV0YSA9IHJlcXVpcmUoanNvbik7XG4gIGNvbnN0IG1vZGlmaWVkTWV0YTogTWV0YSA9IHsgLi4ubWV0YSB9O1xuICBmb3IgKGNvbnN0IGtleSBpbiBtZXRhKSB7XG4gICAgaWYgKHBhdGhLZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGlmIChpc0Fic29sdXRlKG1ldGFba2V5XSkpIHtcbiAgICAgICAgTG9nZ2VyLmVycm9yKGBcIiR7a2V5fVwiIG11c3QgYmUgYSByZWxhdGl2ZSBwYXRoLiAoJHttZXRhW2tleV19KWApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAobWV0YVtrZXldLnN0YXJ0c1dpdGgoJy4uLycpKSB7XG4gICAgICAgIExvZ2dlci5lcnJvcihgXCIke2tleX1cIiBtdXN0IG5vdCBwb2ludCB0byBhIHBhcmVudCBkaXJlY3RvcnkuICgke21ldGFba2V5XX0pYCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGxvY2F0aW9uOiBzdHJpbmcgPSBtb2RpZmllZE1ldGFba2V5XSA9IHJlc29sdmUoanNvbiwgJy4uJywgbWV0YVtrZXldKTtcblxuICAgICAgY29uc3QgZmlsZUV4dGVuc2lvbiA9IGxvY2F0aW9uLnNwbGl0KCcuJykucG9wKCk7XG4gICAgICBpZiAoZmlsZUV4dGVuc2lvbiAhPT0gJ2NzcycpXG4gICAgICAgIExvZ2dlci53YXJuKGBVbnN1cHBvcnRlZCBmaWxlIGV4dGVuc2lvbiBcIiR7ZmlsZUV4dGVuc2lvbn1cIi4gKCR7bG9jYXRpb259KWApO1xuICAgIH1cbiAgfVxuICBjb25zdCBlbmFibGVkID0gY29uZmlnLmVuYWJsZWRbbWV0YS5pZF0gPz8gZmFsc2U7XG5cbiAgY29uc3QgdGhlbWU6IFNpbXBsZVRoZW1lID0ge1xuICAgIGVuYWJsZWQsXG4gICAganNvbixcbiAgICAuLi5tb2RpZmllZE1ldGEsXG4gIH07XG4gIHRoZW1lc1ttZXRhLmlkXSA9IHRoZW1lO1xuXG4gIGlmIChlbmFibGVkKSB7XG4gICAgd2F0Y2hUaGVtZUZpbGUoanNvbik7XG4gICAgd2F0Y2hUaGVtZUZpbGUobW9kaWZpZWRNZXRhLm1haW4pO1xuICAgIGlmIChtZXRhPy5zcGxhc2gpIHdhdGNoVGhlbWVGaWxlKG1vZGlmaWVkTWV0YS5zcGxhc2gpO1xuICB9XG59XG5cbmltcG9ydCAnLi9pcGMnO1xuaW1wb3J0ICcuL3dhdGNoZXInO1xuIiwgImltcG9ydCBjaG9raWRhciBmcm9tICdjaG9raWRhcic7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ3RzLWRlYm91bmNlJztcbmltcG9ydCB7IHRoZW1lcywgdXBkYXRlVGhlbWUgfSBmcm9tICcuJztcbmltcG9ydCB7IHNlbmRUb0FsbCB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IElQQyB9IGZyb20gJ0Bjb21tb24vY29uc3RhbnRzJztcbmltcG9ydCBMb2dnZXJNb2R1bGUgZnJvbSAnQGNvbW1vbi9sb2dnZXInO1xuY29uc3QgTG9nZ2VyID0gbmV3IExvZ2dlck1vZHVsZSgnV2F0Y2hlciA+IFRoZW1lcycsICdhbnNpJyk7XG5cbmNvbnN0IHdhdGNoZXIgPSBjaG9raWRhci53YXRjaChbXSwge1xuICBwZXJzaXN0ZW50OiB0cnVlLFxuICBpZ25vcmVJbml0aWFsOiB0cnVlLFxuICBkaXNhYmxlR2xvYmJpbmc6IHRydWUsXG4gIGRlcHRoOiAxLFxufSk7XG5cbmNvbnN0IHBvc3NpYmxlS2V5cyA9IFtcbiAgJ2pzb24nLFxuICAnbWFpbicsXG4gICdzcGxhc2gnLFxuXTtcbndhdGNoZXIub24oXG4gICdjaGFuZ2UnLFxuICBkZWJvdW5jZSgocGF0aCkgPT4ge1xuICAgIGNvbnN0IGlkID0gT2JqZWN0LmtleXModGhlbWVzKS5maW5kKChpZCkgPT4ge1xuICAgICAgZm9yIChjb25zdCBrZXkgb2YgcG9zc2libGVLZXlzKSB7XG4gICAgICAgIGlmICh0aGVtZXNbaWRdW2tleV0gPT09IHBhdGgpIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFpZCkge1xuICAgICAgTG9nZ2VyLndhcm4oYERpZG4ndCBmaW5kIGEgdGhlbWUgYXNzb2NpYXRlZCB3aXRoIFwiJHtwYXRofVwiLmApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHVwZGF0ZVRoZW1lKHRoZW1lc1tpZF0uanNvbik7XG5cbiAgICBpZiAoY29uZmlnLnZlcmJvc2UpIExvZ2dlci5kZWJ1ZyhgVGhlbWUgY2hhbmdlZDogJHtpZH1gKTtcbiAgICBzZW5kVG9BbGwoSVBDLm9uVGhlbWVDaGFuZ2UsIHsgaWQ6IGlkLCB0aGVtZTogdGhlbWVzW2lkXSB9KTtcbiAgfSwgMTAwKVxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHdhdGNoVGhlbWVGaWxlKHRoZW1lOiBzdHJpbmcpIHtcbiAgd2F0Y2hlci5hZGQodGhlbWUpO1xuICBpZiAoY29uZmlnLnZlcmJvc2UpIExvZ2dlci5kZWJ1ZyhgV2F0Y2hpbmcgdGhlbWUgZmlsZTogJHt0aGVtZX1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVud2F0Y2hUaGVtZUZpbGUodGhlbWU6IHN0cmluZykge1xuICB3YXRjaGVyLmFkZCh0aGVtZSk7XG4gIGlmIChjb25maWcudmVyYm9zZSkgTG9nZ2VyLmRlYnVnKGBTdG9wcGVkIHdhdGNoaW5nIHRoZW1lIGZpbGU6ICR7dGhlbWV9YCk7XG59XG4iLCAiaW1wb3J0IGZzIGZyb20gJ2ZzL3Byb21pc2VzJztcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IGlwY01haW4gfSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBJUEMgfSBmcm9tICdAY29tbW9uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyByb290IH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgdGhlbWVzIH0gZnJvbSAnLic7XG5pbXBvcnQgTG9nZ2VyTW9kdWxlIGZyb20gJ0Bjb21tb24vbG9nZ2VyJztcbmNvbnN0IExvZ2dlciA9IG5ldyBMb2dnZXJNb2R1bGUoJ0lQQycsICdhbnNpJyk7XG5cbmlwY01haW4uaGFuZGxlKElQQy5nZXRUaGVtZXMsICgpID0+IHRoZW1lcyk7XG5cbmlwY01haW4ub24oSVBDLnNhdmVUaGVtZVN0YXRlLCAoZXZlbnQsIGlkOiBzdHJpbmcsIHN0YXRlOiBib29sZWFuKSA9PiB7XG4gIGlmIChjb25maWcudmVyYm9zZSlcbiAgICBMb2dnZXIuZGVidWcoJ1JlY2VpdmVkIHNhdmUgdGhlbWUgc3RhdGUgbWVzc2FnZSBmcm9tJywgZXZlbnQuc2VuZGVyLmdldFRpdGxlKCkpO1xuXG4gIGNvbnN0IGNvbmZpZ0ZpbGU6IENvbmZpZyA9IHJlcXVpcmUoam9pbihyb290LCAnY29uZmlnLmpzb24nKSk7IC8vIFJlcXVpcmluZyBhZ2FpbiBpbiBjYXNlIHRoZSBmaWxlIHdhcyBjaGFuZ2VkIHNpbmNlIGxhdW5jaFxuXG4gIGNvbmZpZ0ZpbGUuZW5hYmxlZFtpZF0gPSBzdGF0ZTtcbiAgZnMud3JpdGVGaWxlKGpvaW4ocm9vdCwgJ2NvbmZpZy5qc29uJyksIEpTT04uc3RyaW5naWZ5KGNvbmZpZ0ZpbGUsIG51bGwsIDIpKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIExvZ2dlci5sb2coYFNhdmVkIHRoZW1lIHN0YXRlIFwiJHtzdGF0ZX1cIiBmb3IgJHtpZH0uYCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgIExvZ2dlci5lcnJvcihgRmFpbGVkIHRvIHNhdmUgdGhlbWUgc3RhdGUgZm9yIFwiJHtpZH1cIjpgLCBlKTtcbiAgICB9KTtcbn0pO1xuIiwgImltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgeyBiYXNlbmFtZSwgam9pbiwgcmVsYXRpdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCBMb2dnZXJNb2R1bGUgZnJvbSAnQGNvbW1vbi9sb2dnZXInO1xuY29uc3QgTG9nZ2VyID0gbmV3IExvZ2dlck1vZHVsZSgnUXVpY2tDU1MnLCAnYW5zaScpO1xuXG5mdW5jdGlvbiBnZXRRdWlja0NzcygpOiBRdWlja0Nzc0ZvbGRlciB7XG4gIGZ1bmN0aW9uIGNyZWF0ZVRyZWUoZGlyZWN0b3J5UGF0aDogc3RyaW5nLCByZWdleCA9IC8uLyk6IFF1aWNrQ3NzRm9sZGVyIHtcbiAgICBjb25zdCBub2RlOiBRdWlja0Nzc0ZvbGRlciA9IHtcbiAgICAgIG5hbWU6IGJhc2VuYW1lKGRpcmVjdG9yeVBhdGgpLFxuICAgICAgbG9jYXRpb246IHJlbGF0aXZlKGNvbmZpZy5xdWlja0Nzc0RpciwgZGlyZWN0b3J5UGF0aCksXG4gICAgICBmaWxlczogW10sXG4gICAgfTtcblxuICAgIGNvbnN0IGZpbGVOYW1lcyA9IGZzLnJlYWRkaXJTeW5jKGRpcmVjdG9yeVBhdGgpO1xuICAgIGNvbnN0IGRpcmVjdG9yaWVzOiBRdWlja0Nzc0ZvbGRlcltdID0gW107XG4gICAgY29uc3QgZmlsZXM6IFF1aWNrQ3NzRmlsZVtdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGZpbGVOYW1lIG9mIGZpbGVOYW1lcykge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBqb2luKGRpcmVjdG9yeVBhdGgsIGZpbGVOYW1lKTtcbiAgICAgIGNvbnN0IHN0YXRzID0gZnMuc3RhdFN5bmMoZmlsZVBhdGgpO1xuXG4gICAgICBsZXQgY2hpbGROb2RlOiBRdWlja0Nzc0ZpbGUgfCBRdWlja0Nzc0ZvbGRlcjtcbiAgICAgIGlmIChzdGF0cy5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgIGNoaWxkTm9kZSA9IGNyZWF0ZVRyZWUoZmlsZVBhdGgsIHJlZ2V4KTtcbiAgICAgICAgZGlyZWN0b3JpZXMucHVzaChjaGlsZE5vZGUpO1xuICAgICAgfSBlbHNlIGlmIChyZWdleC50ZXN0KGZpbGVOYW1lKSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNoaWxkTm9kZSA9IHtcbiAgICAgICAgICAgIG5hbWU6IGZpbGVOYW1lLFxuICAgICAgICAgICAgbG9jYXRpb246IHJlbGF0aXZlKGNvbmZpZy5xdWlja0Nzc0RpciwgZmlsZVBhdGgpLFxuICAgICAgICAgICAgY29udGVudDogZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCAndXRmLTgnKSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGZpbGVzLnB1c2goY2hpbGROb2RlKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIExvZ2dlci5lcnJvcihgRXJyb3IgcmVhZGluZyBmaWxlICR7ZmlsZVBhdGh9YCwgZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBub2RlLmZpbGVzID0gWy4uLmRpcmVjdG9yaWVzLCAuLi5maWxlc107XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlVHJlZShjb25maWcucXVpY2tDc3NEaXIsIC9cXC5jc3MvKTtcbn1cblxuZXhwb3J0IGxldCBxdWlja0NzcyA9IGdldFF1aWNrQ3NzKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVRdWlja0NzcygpIHtcbiAgcXVpY2tDc3MgPSBnZXRRdWlja0NzcygpO1xufVxuXG5pbXBvcnQgJy4vaXBjJztcbmltcG9ydCAnLi93YXRjaGVyJztcbiIsICJpbXBvcnQgZnMgZnJvbSAnZnMvcHJvbWlzZXMnO1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgaXBjTWFpbiB9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IElQQywgTUVTU0FHRVMgfSBmcm9tICdAY29tbW9uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBxdWlja0NzcywgdXBkYXRlUXVpY2tDc3MgfSBmcm9tICcuJztcbmltcG9ydCB7IHN0YXJ0LCBzdG9wIH0gZnJvbSAnLi93YXRjaGVyJztcbmltcG9ydCB7IGhhc1ZhbHVlLCBzZW5kVG9BbGwgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgTG9nZ2VyTW9kdWxlIGZyb20gJ0Bjb21tb24vbG9nZ2VyJztcbmNvbnN0IExvZ2dlciA9IG5ldyBMb2dnZXJNb2R1bGUoJ0lQQyA+IFF1aWNrQ1NTJywgJ2Fuc2knKTtcblxuaXBjTWFpbi5oYW5kbGUoSVBDLmdldFF1aWNrQ3NzLCAoKSA9PiBxdWlja0Nzcyk7XG5cbmlwY01haW4ub24oSVBDLmNyZWF0ZVF1aWNrQ3NzTm9kZSwgKGV2ZW50LCBsb2NhdGlvbjogc3RyaW5nLCB0eXBlOiAnZmlsZScgfCAnZm9sZGVyJykgPT4ge1xuICBpZiAoY29uZmlnLnZlcmJvc2UpIExvZ2dlci5kZWJ1ZygnUmVjZWl2ZWQgbm9kZSBjcmVhdGlvbiBtZXNzYWdlIGZyb20nLCBldmVudC5zZW5kZXIuZ2V0VGl0bGUoKSk7XG5cbiAgbGV0IGkgPSAwO1xuICBsZXQgbmFtZTogc3RyaW5nO1xuICB3aGlsZSAoIW5hbWUpIHtcbiAgICBjb25zdCBwb3NzaWJsZU5hbWUgPSB0eXBlICsgKGkgPyAnLScgKyBpKysgOiAnJykgKyAodHlwZSA9PT0gJ2ZvbGRlcicgPyAnJyA6ICcuY3NzJyk7XG4gICAgaGFzVmFsdWUocXVpY2tDc3MsICdsb2NhdGlvbicsIGpvaW4obG9jYXRpb24sIHBvc3NpYmxlTmFtZSkpIHx8IChuYW1lID0gcG9zc2libGVOYW1lKTtcbiAgfVxuXG4gIGNvbnN0IGFjdHVhbExvY2F0aW9uID0gam9pbihjb25maWcucXVpY2tDc3NEaXIsIGxvY2F0aW9uLCBuYW1lKTtcblxuICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuICAodHlwZSA9PT0gJ2ZpbGUnID8gZnMub3BlbihhY3R1YWxMb2NhdGlvbiwgJ3d4JykgOiBmcy5ta2RpcihhY3R1YWxMb2NhdGlvbikpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgTG9nZ2VyLmxvZyhgU3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgJHt0eXBlfSAke25hbWV9LmApO1xuICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgfSlcbiAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgIExvZ2dlci5lcnJvcihgRmFpbGVkIHRvIGNyZWF0ZSAke3R5cGV9ICR7bmFtZX06YCwgZSk7XG4gICAgfSlcbiAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICBldmVudC5yZXBseShJUEMuc3RhdHVzTWVzc2FnZSwge1xuICAgICAgICB0eXBlOiBNRVNTQUdFUy5xdWlja0Nzcy5jcmVhdGVkLFxuICAgICAgICBzdWNjZXNzLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICBsb2NhdGlvbjogbmFtZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbn0pO1xuXG5pcGNNYWluLm9uKElQQy5kZWxldGVRdWlja0Nzc05vZGUsIGFzeW5jIChldmVudCwgbG9jYXRpb246IHN0cmluZykgPT4ge1xuICBpZiAoY29uZmlnLnZlcmJvc2UpIExvZ2dlci5kZWJ1ZygnUmVjZWl2ZWQgUXVpY2tDU1MgZmlsZSByZW1vdmUgbWVzc2FnZSBmcm9tJywgZXZlbnQuc2VuZGVyLmdldFRpdGxlKCkpO1xuXG4gIGlmICghaGFzVmFsdWUocXVpY2tDc3MsICdsb2NhdGlvbicsIGxvY2F0aW9uKSkge1xuICAgIExvZ2dlci5lcnJvcihgJHtsb2NhdGlvbn0gaXNuJ3QgYSB2YWxpZCBRdWlja0NTUyBub2RlLmApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGFjdHVhbExvY2F0aW9uID0gam9pbihjb25maWcucXVpY2tDc3NEaXIsIGxvY2F0aW9uKTtcbiAgaWYgKGFjdHVhbExvY2F0aW9uID09PSBjb25maWcucXVpY2tDc3NEaXIpIHtcbiAgICBMb2dnZXIuZXJyb3IoJ0NhblxcJ3QgZGVsZXRlIHRoZSBiYXNlIGZvbGRlci4nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB0eXBlID0gYXdhaXQgZnMubHN0YXQoYWN0dWFsTG9jYXRpb24pLnRoZW4oKHN0YXQpID0+IHN0YXQuaXNEaXJlY3RvcnkoKSA/ICdmb2xkZXInIDogJ2ZpbGUnKTtcblxuICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuICBmcy5ybShhY3R1YWxMb2NhdGlvbiwgeyByZWN1cnNpdmU6IHRydWUgfSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBMb2dnZXIubG9nKGBTdWNjZXNzZnVsbHkgZGVsZXRlZCAke2xvY2F0aW9ufS5gKTtcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICBMb2dnZXIuZXJyb3IoYEZhaWxlZCB0byBkZWxldGUgJHtsb2NhdGlvbn06YCwgZSk7XG4gICAgfSlcbiAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICBldmVudC5yZXBseShJUEMuc3RhdHVzTWVzc2FnZSwge1xuICAgICAgICB0eXBlOiBNRVNTQUdFUy5xdWlja0Nzcy5kZWxldGVkLFxuICAgICAgICBzdWNjZXNzLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICBsb2NhdGlvblxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbn0pO1xuXG5pcGNNYWluLm9uKElQQy5yZW5hbWVRdWlja0Nzc05vZGUsIChldmVudCwgbG9jYXRpb246IHN0cmluZywgbmV3TmFtZTogc3RyaW5nKSA9PiB7XG4gIGlmIChjb25maWcudmVyYm9zZSkgTG9nZ2VyLmRlYnVnKCdSZWNlaXZlZCByZW5hbWUgbWVzc2FnZSBmcm9tJywgZXZlbnQuc2VuZGVyLmdldFRpdGxlKCkpO1xuXG4gIGNvbnN0IG5ld0xvY2F0aW9uID0gam9pbihsb2NhdGlvbiwgJy4uJywgbmV3TmFtZSk7XG4gIGNvbnN0IGFjdHVhbExvY2F0aW9uID0gam9pbihjb25maWcucXVpY2tDc3NEaXIsIGxvY2F0aW9uKTtcbiAgY29uc3QgYWN0dWFsTmV3TG9jYXRpb24gPSBqb2luKGNvbmZpZy5xdWlja0Nzc0RpciwgbmV3TG9jYXRpb24pO1xuXG4gIHN0b3AoKTsgLy8gV2F0Y2hlciBuZWVkcyB0byBiZSBzdG9wcGVkIGZpcnN0IG90aGVyd2lzZSBpdCB0aHJvd3MgYW4gZXJyb3IgKG9uIHdpbmRvd3MpXG5cbiAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcbiAgZnMucmVuYW1lKGFjdHVhbExvY2F0aW9uLCBhY3R1YWxOZXdMb2NhdGlvbilcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBMb2dnZXIubG9nKGBTdWNjZXNzZnVsbHkgcmVuYW1lZCAke2xvY2F0aW9ufSB0byAke25ld05hbWV9LmApO1xuICAgICAgc3VjY2VzcyA9IHRydWU7XG5cbiAgICAgIHVwZGF0ZVF1aWNrQ3NzKCk7XG4gICAgICBzZW5kVG9BbGwoSVBDLm9uUXVpY2tDc3NDaGFuZ2UsIHF1aWNrQ3NzKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgTG9nZ2VyLmVycm9yKGBGYWlsZWQgdG8gcmVuYW1lICR7bG9jYXRpb259IHRvICR7bmV3TmFtZX06YCwgZSk7XG4gICAgfSlcbiAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICBzdGFydCgpO1xuICAgICAgZXZlbnQucmVwbHkoSVBDLnN0YXR1c01lc3NhZ2UsIHtcbiAgICAgICAgdHlwZTogTUVTU0FHRVMucXVpY2tDc3MucmVuYW1lZCxcbiAgICAgICAgc3VjY2VzcyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIG9sZExvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgICAgICBuZXdMb2NhdGlvbjogbmV3TG9jYXRpb25cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxuaXBjTWFpbi5vbihJUEMudXBkYXRlUXVpY2tDc3NGaWxlLCAoZXZlbnQsIGxvY2F0aW9uOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZykgPT4ge1xuICBpZiAoY29uZmlnLnZlcmJvc2UpIExvZ2dlci5kZWJ1ZygnUmVjZWl2ZWQgUXVpY2tDU1MgZmlsZSBzYXZlIG1lc3NhZ2UgZnJvbScsIGV2ZW50LnNlbmRlci5nZXRUaXRsZSgpKTtcblxuICBpZiAoIWhhc1ZhbHVlKHF1aWNrQ3NzLCAnbG9jYXRpb24nLCBsb2NhdGlvbikpIHtcbiAgICBMb2dnZXIuZXJyb3IoYCR7bG9jYXRpb259IGlzbid0IGEgdmFsaWQgUXVpY2tDU1MgZmlsZS5gKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBhY3R1YWxMb2NhdGlvbiA9IGpvaW4oY29uZmlnLnF1aWNrQ3NzRGlyLCBsb2NhdGlvbik7XG5cbiAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcbiAgZnMud3JpdGVGaWxlKGFjdHVhbExvY2F0aW9uLCBjb250ZW50KVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIExvZ2dlci5sb2coYFN1Y2Nlc3NmdWxseSBzYXZlZCAke2xvY2F0aW9ufS5gKTtcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICBMb2dnZXIuZXJyb3IoYEZhaWxlZCB0byBzYXZlICR7bG9jYXRpb259OmAsIGUpO1xuICAgIH0pXG4gICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgZXZlbnQucmVwbHkoSVBDLnN0YXR1c01lc3NhZ2UsIHtcbiAgICAgICAgdHlwZTogTUVTU0FHRVMucXVpY2tDc3MudXBkYXRlZCxcbiAgICAgICAgc3VjY2VzcyxcbiAgICAgICAgZGF0YTogbG9jYXRpb25cbiAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iLCAiaW1wb3J0IGNob2tpZGFyIGZyb20gJ2Nob2tpZGFyJztcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAndHMtZGVib3VuY2UnO1xuaW1wb3J0IHsgQnJvd3NlcldpbmRvdyB9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IElQQyB9IGZyb20gJ0Bjb21tb24vY29uc3RhbnRzJztcbmltcG9ydCB7IHF1aWNrQ3NzLCB1cGRhdGVRdWlja0NzcyB9IGZyb20gJy4nO1xuaW1wb3J0IExvZ2dlck1vZHVsZSBmcm9tICdAY29tbW9uL2xvZ2dlcic7XG5jb25zdCBMb2dnZXIgPSBuZXcgTG9nZ2VyTW9kdWxlKCdXYXRjaGVyID4gUXVpY2tDU1MnLCAnYW5zaScpO1xuXG5jb25zdCBvcHRzID0ge1xuICBwZXJzaXN0ZW50OiB0cnVlLFxuICBpZ25vcmVJbml0aWFsOiB0cnVlLFxuICBkaXNhYmxlR2xvYmJpbmc6IHRydWUsXG59O1xuZXhwb3J0IGxldCB3YXRjaGVyOiBjaG9raWRhci5GU1dhdGNoZXI7XG5zdGFydCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnQoKSB7XG4gIGlmIChjb25maWcudmVyYm9zZSkgTG9nZ2VyLmRlYnVnKCdTdGFydGluZyB3YXRjaGVyLi4uJyk7XG5cbiAgd2F0Y2hlciA9IGNob2tpZGFyLndhdGNoKGNvbmZpZy5xdWlja0Nzc0Rpciwgb3B0cyk7XG4gIHdhdGNoZXIub24oXG4gICAgJ2FsbCcsXG4gICAgZGVib3VuY2UoKGV2ZW50LCBwYXRoKSA9PiB7XG4gICAgICBpZiAoY29uZmlnLnZlcmJvc2UpIExvZ2dlci5kZWJ1ZyhldmVudCwgcGF0aCk7XG5cbiAgICAgIHVwZGF0ZVF1aWNrQ3NzKCk7XG4gICAgICBCcm93c2VyV2luZG93LmdldEFsbFdpbmRvd3MoKS5mb3JFYWNoKCh3aW5kb3cpID0+XG4gICAgICAgIHdpbmRvdy53ZWJDb250ZW50cy5zZW5kKElQQy5vblF1aWNrQ3NzQ2hhbmdlLCBxdWlja0NzcylcbiAgICAgICk7XG4gICAgfSwgMTAwKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RvcCgpIHtcbiAgaWYgKGNvbmZpZy52ZXJib3NlKSBMb2dnZXIuZGVidWcoJ1N0b3BwaW5nIHdhdGNoZXIuLi4nKTtcblxuICB3YXRjaGVyLmNsb3NlKCk7XG4gIHdhdGNoZXIgPSBudWxsO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0EsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQzVELFlBQVEsWUFBWSxRQUFRLFVBQVU7QUFDdEMsYUFBUyxRQUFRLE9BQU87QUFDcEIsYUFBTyxNQUFNLE9BQU8sQ0FBQyxZQUFZLFNBQVMsQ0FBQyxFQUFFLE9BQU8sWUFBWSxJ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TUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEs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VyxjQUFjLEdBQUcsTUFBTTtBQUNoRSxDQUFDOyIsCiAgIm5hbWVzIjogWyJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJvcHRzIiwgIm5vZGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAib3B0cyIsICJzdG9wIiwgInN0YXJ0IiwgIm1heCIsICJtb2R1bGUiLCAic3RhcnQiLCAic3RvcCIsICJvcHRzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJvcHRzIiwgImluZGV4IiwgIm1vZHVsZSIsICJyZXF1aXJlX2NvbnN0YW50cyIsICJtb2R1bGUiLCAicmVxdWlyZV91dGlscyIsICJtb2R1bGUiLCAib3B0cyIsICJzdGFydCIsICJyZXF1aXJlX3BhcnNlIiwgIm1vZHVsZSIsICJvcHRzIiwgInZhbHVlIiwgInJlc3QiLCAic291cmNlIiwgIm1vZHVsZSIsICJzdGF0ZSIsICJvcHRzIiwgInJlcXVpcmVfcGljb21hdGNoIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiYmFzZW5hbWUiLCAicGF0dGVybiIsICJtb2R1bGUiLCAicmVxdWlyZV91dGlscyIsICJmcyIsICJyZXF1aXJlX2ZzIiwgImZzIiwgImZzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAicXVldWVNaWNyb3Rhc2siLCAicmVxdWlyZV9jb25zdGFudHMiLCAicmVxdWlyZV9mcyIsICJyZXF1aXJlX3V0aWxzIiwgImZzIiwgInJlcXVpcmVfYXN5bmMiLCAicmVxdWlyZV9zeW5jIiwgInJlcXVpcmVfZnMiLCAiZnMiLCAicmVxdWlyZV9zZXR0aW5ncyIsICJmcyIsICJyZXF1aXJlX291dCIsICJtb2R1bGUiLCAibW9kdWxlIiwgInJlc29sdmUiLCAicmVxdWlyZV9jb21tb24iLCAicmVxdWlyZV9hc3luYyIsICJyZXF1aXJlX2FzeW5jIiwgInJlcXVpcmVfc3RyZWFtIiwgInJlcXVpcmVfc3luYyIsICJyZXF1aXJlX3N5bmMiLCAicmVxdWlyZV9zZXR0aW5ncyIsICJyZXF1aXJlX291dCIsICJyZXF1aXJlX3JlYWRlciIsICJyZXF1aXJlX3N0cmVhbSIsICJyb290IiwgInJlc29sdmUiLCAicmVxdWlyZV9hc3luYyIsICJyb290IiwgInJlc29sdmUiLCAicmVxdWlyZV9lbnRyeSIsICJyZXF1aXJlX2FzeW5jIiwgInJvb3QiLCAicmVxdWlyZV9zdHJlYW0iLCAicm9vdCIsICJyZXF1aXJlX3N5bmMiLCAicm9vdCIsICJyZXF1aXJlX3N5bmMiLCAicm9vdCIsICJyZXF1aXJlX3NldHRpbmdzIiwgImZzIiwgInJlcXVpcmVfb3V0IiwgIm1vZHVsZSIsICJGYXN0R2xvYiIsICJwb3NpeCIsICJlc2NhcGVQYXRoIiwgImNvbnZlcnRQYXRoVG9QYXR0ZXJuIiwgIndpbjMyIiwgIm1vZHVsZSIsICJmcyIsICJvcHRzIiwgInJvb3QiLCAiYmFzZW5hbWUiLCAicmVzb2x2ZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm9wdHMiLCAidGVzdFN0cmluZyIsICJyZXR1cm5JbmRleCIsICJtb2R1bGUiLCAicmVxdWlyZV9iaW5hcnlfZXh0ZW5zaW9ucyIsICJtb2R1bGUiLCAibW9kdWxlIiwgInJlcXVpcmVfY29uc3RhbnRzIiwgInBsYXRmb3JtIiwgIm1vZHVsZSIsICJmcyIsICJ3YXRjaGVyIiwgInJhd0VtaXR0ZXIiLCAibGlzdGVuZXIiLCAib3B0cyIsICJiYXNlbmFtZSIsICJuZXdTdGF0cyIsICJyZXNvbHZlIiwgInN0YXRzIiwgIm1vZHVsZSIsICJmcyIsICJzdG9wIiwgInJvb3QiLCAib3B0cyIsICJmcyIsICJvcHRzIiwgInBhdGgiLCAibm93IiwgInN0YXQiLCAicm9vdCIsICJ3YXRjaGVyIiwgImZ1bmMiLCAid2FpdE1pbGxpc2Vjb25kcyIsICJvcHRpb25zIiwgInRpbWVvdXRJZCIsICJpc0ltbWVkaWF0ZSIsICJjYWxsYmFjayIsICJtYXhXYWl0IiwgImxhc3RJbnZva2VUaW1lIiwgIkRhdGUiLCAibm93IiwgInByb21pc2VzIiwgIm5leHRJbnZva2VUaW1lb3V0IiwgInRpbWVTaW5jZUxhc3RJbnZvY2F0aW9uIiwgImRlYm91bmNlZEZ1bmN0aW9uIiwgImFyZ3MiLCAiY29udGV4dCIsICJ0aGlzIiwgIlByb21pc2UiLCAicmVzb2x2ZSIsICJyZWplY3QiLCAic2hvdWxkQ2FsbE5vdyIsICJjbGVhclRpbWVvdXQiLCAic2V0VGltZW91dCIsICJyZXN1bHQiLCAiYXBwbHkiLCAiZm9yRWFjaCIsICJlIiwgInB1c2giLCAiY2FuY2VsIiwgInJlYXNvbiIsICJyIiwgImltcG9ydF9mcyIsICJpbXBvcnRfcGF0aCIsICJpbXBvcnRfZWxlY3Ryb24iLCAiaW1wb3J0X3BhdGgiLCAiaW1wb3J0X2VsZWN0cm9uIiwgImltcG9ydF9wYXRoIiwgIndpbmRvdyIsICJtb2R1bGUiLCAiQnJvd3NlcldpbmRvdyIsICJmcyIsICJpbXBvcnRfZWxlY3Ryb24iLCAiaW1wb3J0X3BhdGgiLCAiaW1wb3J0X3BhdGgiLCAiTG9nZ2VyIiwgImNob2tpZGFyIiwgImlkIiwgImltcG9ydF9wYXRoIiwgImltcG9ydF9lbGVjdHJvbiIsICJMb2dnZXIiLCAiZnMiLCAiTG9nZ2VyIiwgImZnIiwgIkxvZ2dlciIsICJpbXBvcnRfZnMiLCAiaW1wb3J0X3BhdGgiLCAiaW1wb3J0X3Byb21pc2VzIiwgImltcG9ydF9wYXRoIiwgImltcG9ydF9lbGVjdHJvbiIsICJpbXBvcnRfY2hva2lkYXIiLCAiaW1wb3J0X3RzX2RlYm91bmNlIiwgImltcG9ydF9lbGVjdHJvbiIsICJMb2dnZXIiLCAid2F0Y2hlciIsICJjaG9raWRhciIsICJ3aW5kb3ciLCAiTG9nZ2VyIiwgImZzIiwgIkxvZ2dlciIsICJmcyIsICJmcyJdCn0K
