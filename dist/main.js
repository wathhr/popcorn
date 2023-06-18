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

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/utils/array.js
var require_array = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/utils/array.js"(exports) {
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

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/utils/errno.js
var require_errno = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/utils/errno.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isEnoentCodeError = void 0;
    function isEnoentCodeError(error) {
      return error.code === "ENOENT";
    }
    exports.isEnoentCodeError = isEnoentCodeError;
  }
});

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/utils/fs.js
var require_fs = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/utils/fs.js"(exports) {
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

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/utils/path.js
var require_path = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/utils/path.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.removeLeadingDotSegment = exports.escape = exports.makeAbsolute = exports.unixify = void 0;
    var path = require("path");
    var LEADING_DOT_SEGMENT_CHARACTERS_COUNT = 2;
    var UNESCAPED_GLOB_SYMBOLS_RE = /(\\?)([()*?[\]{|}]|^!|[!+@](?=\())/g;
    function unixify(filepath) {
      return filepath.replace(/\\/g, "/");
    }
    exports.unixify = unixify;
    function makeAbsolute(cwd, filepath) {
      return path.resolve(cwd, filepath);
    }
    exports.makeAbsolute = makeAbsolute;
    function escape(pattern) {
      return pattern.replace(UNESCAPED_GLOB_SYMBOLS_RE, "\\$2");
    }
    exports.escape = escape;
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

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/utils/pattern.js
var require_pattern = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/utils/pattern.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.matchAny = exports.convertPatternsToRe = exports.makeRe = exports.getPatternParts = exports.expandBraceExpansion = exports.expandPatternsWithBraceExpansion = exports.isAffectDepthOfReadingPattern = exports.endsWithSlashGlobStar = exports.hasGlobStar = exports.getBaseDirectory = exports.isPatternRelatedToParentDirectory = exports.getPatternsOutsideCurrentDirectory = exports.getPatternsInsideCurrentDirectory = exports.getPositivePatterns = exports.getNegativePatterns = exports.isPositivePattern = exports.isNegativePattern = exports.convertToNegativePattern = exports.convertToPositivePattern = exports.isDynamicPattern = exports.isStaticPattern = void 0;
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
      return micromatch.braces(pattern, {
        expand: true,
        nodupes: true
      });
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

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/utils/stream.js
var require_stream = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/utils/stream.js"(exports) {
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

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/utils/string.js
var require_string = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/utils/string.js"(exports) {
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

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/utils/index.js
var require_utils3 = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/utils/index.js"(exports) {
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

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/managers/tasks.js
var require_tasks = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/managers/tasks.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertPatternGroupToTask = exports.convertPatternGroupsToTasks = exports.groupPatternsByBaseDirectory = exports.getNegativePatternsAsPositive = exports.getPositivePatterns = exports.convertPatternsToTasks = exports.generate = void 0;
    var utils = require_utils3();
    function generate(patterns, settings) {
      const positivePatterns = getPositivePatterns(patterns);
      const negativePatterns = getNegativePatternsAsPositive(patterns, settings.ignore);
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

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/managers/patterns.js
var require_patterns = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/managers/patterns.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.removeDuplicateSlashes = exports.transform = void 0;
    var DOUBLE_SLASH_RE = /(?!^)\/{2,}/g;
    function transform(patterns) {
      return patterns.map((pattern) => removeDuplicateSlashes(pattern));
    }
    exports.transform = transform;
    function removeDuplicateSlashes(pattern) {
      return pattern.replace(DOUBLE_SLASH_RE, "/");
    }
    exports.removeDuplicateSlashes = removeDuplicateSlashes;
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

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/readers/reader.js
var require_reader2 = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/readers/reader.js"(exports) {
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

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/readers/stream.js
var require_stream3 = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/readers/stream.js"(exports) {
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

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/readers/async.js
var require_async5 = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/readers/async.js"(exports) {
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

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/matchers/matcher.js
var require_matcher = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/matchers/matcher.js"(exports) {
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
        const patterns = utils.pattern.expandPatternsWithBraceExpansion(this._patterns);
        for (const pattern of patterns) {
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

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/matchers/partial.js
var require_partial = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/matchers/partial.js"(exports) {
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

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/filters/deep.js
var require_deep = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/filters/deep.js"(exports) {
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

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/filters/entry.js
var require_entry = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/filters/entry.js"(exports) {
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
        const negativeRe = utils.pattern.convertPatternsToRe(negative, this._micromatchOptions);
        return (entry) => this._filter(entry, positiveRe, negativeRe);
      }
      _filter(entry, positiveRe, negativeRe) {
        if (this._settings.unique && this._isDuplicateEntry(entry)) {
          return false;
        }
        if (this._onlyFileFilter(entry) || this._onlyDirectoryFilter(entry)) {
          return false;
        }
        if (this._isSkippedByAbsoluteNegativePatterns(entry.path, negativeRe)) {
          return false;
        }
        const filepath = this._settings.baseNameMatch ? entry.name : entry.path;
        const isDirectory = entry.dirent.isDirectory();
        const isMatched = this._isMatchToPatterns(filepath, positiveRe, isDirectory) && !this._isMatchToPatterns(entry.path, negativeRe, isDirectory);
        if (this._settings.unique && isMatched) {
          this._createIndexRecord(entry);
        }
        return isMatched;
      }
      _isDuplicateEntry(entry) {
        return this.index.has(entry.path);
      }
      _createIndexRecord(entry) {
        this.index.set(entry.path, void 0);
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
      _isMatchToPatterns(entryPath, patternsRe, isDirectory) {
        const filepath = utils.path.removeLeadingDotSegment(entryPath);
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

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/filters/error.js
var require_error = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/filters/error.js"(exports) {
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

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/transformers/entry.js
var require_entry2 = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/transformers/entry.js"(exports) {
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

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/provider.js
var require_provider = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/provider.js"(exports) {
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

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/async.js
var require_async6 = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/async.js"(exports) {
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

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/stream.js
var require_stream4 = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/stream.js"(exports) {
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

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/readers/sync.js
var require_sync5 = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/readers/sync.js"(exports) {
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

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/sync.js
var require_sync6 = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/providers/sync.js"(exports) {
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

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/settings.js
var require_settings4 = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/settings.js"(exports) {
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

// node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/index.js
var require_out4 = __commonJS({
  "node_modules/.pnpm/fast-glob@3.2.12/node_modules/fast-glob/out/index.js"(exports, module2) {
    "use strict";
    var taskManager = require_tasks();
    var patternManager = require_patterns();
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
        const patterns = patternManager.transform([].concat(source));
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
    })(FastGlob || (FastGlob = {}));
    function getWorks(source, _Provider, options) {
      const patterns = patternManager.transform([].concat(source));
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
  quickCss: "QUICKCSS_",
  themes: "THEMES_"
};
var IPC = prefixValues({
  // Misc
  getConfig: "GET_CONFIG",
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
import_electron2.ipcMain.handle(IPC.getConfig, () => config);

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
        continue;
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
import_electron7.app.on("web-contents-created", (_, webContents) => {
  webContents.on("did-finish-load", () => {
    webContents.insertCSS(import_fs3.default.readFileSync((0, import_path9.join)(__dirname, "renderer.css"), "utf8"));
  });
});
import_electron7.ipcMain.on(IPC.getWindowData, (event) => {
  event.returnValue = event.sender.kernelWindowData;
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Zhc3QtZ2xvYkAzLjIuMTIvbm9kZV9tb2R1bGVzL2Zhc3QtZ2xvYi9vdXQvdXRpbHMvYXJyYXkuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Zhc3QtZ2xvYkAzLjIuMTIvbm9kZV9tb2R1bGVzL2Zhc3QtZ2xvYi9vdXQvdXRpbHMvZXJybm8uanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Zhc3QtZ2xvYkAzLjIuMTIvbm9kZV9tb2R1bGVzL2Zhc3QtZ2xvYi9vdXQvdXRpbHMvZnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Zhc3QtZ2xvYkAzLjIuMTIvbm9kZV9tb2R1bGVzL2Zhc3QtZ2xvYi9vdXQvdXRpbHMvcGF0aC5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vaXMtZXh0Z2xvYkAyLjEuMS9ub2RlX21vZHVsZXMvaXMtZXh0Z2xvYi9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vaXMtZ2xvYkA0LjAuMy9ub2RlX21vZHVsZXMvaXMtZ2xvYi9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vZ2xvYi1wYXJlbnRANS4xLjIvbm9kZV9tb2R1bGVzL2dsb2ItcGFyZW50L2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9icmFjZXNAMy4wLjIvbm9kZV9tb2R1bGVzL2JyYWNlcy9saWIvdXRpbHMuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2JyYWNlc0AzLjAuMi9ub2RlX21vZHVsZXMvYnJhY2VzL2xpYi9zdHJpbmdpZnkuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2lzLW51bWJlckA3LjAuMC9ub2RlX21vZHVsZXMvaXMtbnVtYmVyL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS90by1yZWdleC1yYW5nZUA1LjAuMS9ub2RlX21vZHVsZXMvdG8tcmVnZXgtcmFuZ2UvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2ZpbGwtcmFuZ2VANy4wLjEvbm9kZV9tb2R1bGVzL2ZpbGwtcmFuZ2UvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2JyYWNlc0AzLjAuMi9ub2RlX21vZHVsZXMvYnJhY2VzL2xpYi9jb21waWxlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9icmFjZXNAMy4wLjIvbm9kZV9tb2R1bGVzL2JyYWNlcy9saWIvZXhwYW5kLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9icmFjZXNAMy4wLjIvbm9kZV9tb2R1bGVzL2JyYWNlcy9saWIvY29uc3RhbnRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9icmFjZXNAMy4wLjIvbm9kZV9tb2R1bGVzL2JyYWNlcy9saWIvcGFyc2UuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2JyYWNlc0AzLjAuMi9ub2RlX21vZHVsZXMvYnJhY2VzL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9waWNvbWF0Y2hAMi4zLjEvbm9kZV9tb2R1bGVzL3BpY29tYXRjaC9saWIvY29uc3RhbnRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9waWNvbWF0Y2hAMi4zLjEvbm9kZV9tb2R1bGVzL3BpY29tYXRjaC9saWIvdXRpbHMuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3BpY29tYXRjaEAyLjMuMS9ub2RlX21vZHVsZXMvcGljb21hdGNoL2xpYi9zY2FuLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9waWNvbWF0Y2hAMi4zLjEvbm9kZV9tb2R1bGVzL3BpY29tYXRjaC9saWIvcGFyc2UuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3BpY29tYXRjaEAyLjMuMS9ub2RlX21vZHVsZXMvcGljb21hdGNoL2xpYi9waWNvbWF0Y2guanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3BpY29tYXRjaEAyLjMuMS9ub2RlX21vZHVsZXMvcGljb21hdGNoL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9taWNyb21hdGNoQDQuMC41L25vZGVfbW9kdWxlcy9taWNyb21hdGNoL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9mYXN0LWdsb2JAMy4yLjEyL25vZGVfbW9kdWxlcy9mYXN0LWdsb2Ivb3V0L3V0aWxzL3BhdHRlcm4uanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL21lcmdlMkAxLjQuMS9ub2RlX21vZHVsZXMvbWVyZ2UyL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9mYXN0LWdsb2JAMy4yLjEyL25vZGVfbW9kdWxlcy9mYXN0LWdsb2Ivb3V0L3V0aWxzL3N0cmVhbS5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vZmFzdC1nbG9iQDMuMi4xMi9ub2RlX21vZHVsZXMvZmFzdC1nbG9iL291dC91dGlscy9zdHJpbmcuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Zhc3QtZ2xvYkAzLjIuMTIvbm9kZV9tb2R1bGVzL2Zhc3QtZ2xvYi9vdXQvdXRpbHMvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Zhc3QtZ2xvYkAzLjIuMTIvbm9kZV9tb2R1bGVzL2Zhc3QtZ2xvYi9vdXQvbWFuYWdlcnMvdGFza3MuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Zhc3QtZ2xvYkAzLjIuMTIvbm9kZV9tb2R1bGVzL2Zhc3QtZ2xvYi9vdXQvbWFuYWdlcnMvcGF0dGVybnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bub2RlbGliK2ZzLnN0YXRAMi4wLjUvbm9kZV9tb2R1bGVzL0Bub2RlbGliL2ZzLnN0YXQvb3V0L3Byb3ZpZGVycy9hc3luYy5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vQG5vZGVsaWIrZnMuc3RhdEAyLjAuNS9ub2RlX21vZHVsZXMvQG5vZGVsaWIvZnMuc3RhdC9vdXQvcHJvdmlkZXJzL3N5bmMuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bub2RlbGliK2ZzLnN0YXRAMi4wLjUvbm9kZV9tb2R1bGVzL0Bub2RlbGliL2ZzLnN0YXQvb3V0L2FkYXB0ZXJzL2ZzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9Abm9kZWxpYitmcy5zdGF0QDIuMC41L25vZGVfbW9kdWxlcy9Abm9kZWxpYi9mcy5zdGF0L291dC9zZXR0aW5ncy5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vQG5vZGVsaWIrZnMuc3RhdEAyLjAuNS9ub2RlX21vZHVsZXMvQG5vZGVsaWIvZnMuc3RhdC9vdXQvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3F1ZXVlLW1pY3JvdGFza0AxLjIuMy9ub2RlX21vZHVsZXMvcXVldWUtbWljcm90YXNrL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9ydW4tcGFyYWxsZWxAMS4yLjAvbm9kZV9tb2R1bGVzL3J1bi1wYXJhbGxlbC9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vQG5vZGVsaWIrZnMuc2NhbmRpckAyLjEuNS9ub2RlX21vZHVsZXMvQG5vZGVsaWIvZnMuc2NhbmRpci9vdXQvY29uc3RhbnRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9Abm9kZWxpYitmcy5zY2FuZGlyQDIuMS41L25vZGVfbW9kdWxlcy9Abm9kZWxpYi9mcy5zY2FuZGlyL291dC91dGlscy9mcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vQG5vZGVsaWIrZnMuc2NhbmRpckAyLjEuNS9ub2RlX21vZHVsZXMvQG5vZGVsaWIvZnMuc2NhbmRpci9vdXQvdXRpbHMvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bub2RlbGliK2ZzLnNjYW5kaXJAMi4xLjUvbm9kZV9tb2R1bGVzL0Bub2RlbGliL2ZzLnNjYW5kaXIvb3V0L3Byb3ZpZGVycy9jb21tb24uanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bub2RlbGliK2ZzLnNjYW5kaXJAMi4xLjUvbm9kZV9tb2R1bGVzL0Bub2RlbGliL2ZzLnNjYW5kaXIvb3V0L3Byb3ZpZGVycy9hc3luYy5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vQG5vZGVsaWIrZnMuc2NhbmRpckAyLjEuNS9ub2RlX21vZHVsZXMvQG5vZGVsaWIvZnMuc2NhbmRpci9vdXQvcHJvdmlkZXJzL3N5bmMuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bub2RlbGliK2ZzLnNjYW5kaXJAMi4xLjUvbm9kZV9tb2R1bGVzL0Bub2RlbGliL2ZzLnNjYW5kaXIvb3V0L2FkYXB0ZXJzL2ZzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9Abm9kZWxpYitmcy5zY2FuZGlyQDIuMS41L25vZGVfbW9kdWxlcy9Abm9kZWxpYi9mcy5zY2FuZGlyL291dC9zZXR0aW5ncy5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vQG5vZGVsaWIrZnMuc2NhbmRpckAyLjEuNS9ub2RlX21vZHVsZXMvQG5vZGVsaWIvZnMuc2NhbmRpci9vdXQvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3JldXNpZnlAMS4wLjQvbm9kZV9tb2R1bGVzL3JldXNpZnkvcmV1c2lmeS5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vZmFzdHFAMS4xNS4wL25vZGVfbW9kdWxlcy9mYXN0cS9xdWV1ZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vQG5vZGVsaWIrZnMud2Fsa0AxLjIuOC9ub2RlX21vZHVsZXMvQG5vZGVsaWIvZnMud2Fsay9vdXQvcmVhZGVycy9jb21tb24uanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bub2RlbGliK2ZzLndhbGtAMS4yLjgvbm9kZV9tb2R1bGVzL0Bub2RlbGliL2ZzLndhbGsvb3V0L3JlYWRlcnMvcmVhZGVyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9Abm9kZWxpYitmcy53YWxrQDEuMi44L25vZGVfbW9kdWxlcy9Abm9kZWxpYi9mcy53YWxrL291dC9yZWFkZXJzL2FzeW5jLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9Abm9kZWxpYitmcy53YWxrQDEuMi44L25vZGVfbW9kdWxlcy9Abm9kZWxpYi9mcy53YWxrL291dC9wcm92aWRlcnMvYXN5bmMuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bub2RlbGliK2ZzLndhbGtAMS4yLjgvbm9kZV9tb2R1bGVzL0Bub2RlbGliL2ZzLndhbGsvb3V0L3Byb3ZpZGVycy9zdHJlYW0uanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bub2RlbGliK2ZzLndhbGtAMS4yLjgvbm9kZV9tb2R1bGVzL0Bub2RlbGliL2ZzLndhbGsvb3V0L3JlYWRlcnMvc3luYy5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vQG5vZGVsaWIrZnMud2Fsa0AxLjIuOC9ub2RlX21vZHVsZXMvQG5vZGVsaWIvZnMud2Fsay9vdXQvcHJvdmlkZXJzL3N5bmMuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bub2RlbGliK2ZzLndhbGtAMS4yLjgvbm9kZV9tb2R1bGVzL0Bub2RlbGliL2ZzLndhbGsvb3V0L3NldHRpbmdzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9Abm9kZWxpYitmcy53YWxrQDEuMi44L25vZGVfbW9kdWxlcy9Abm9kZWxpYi9mcy53YWxrL291dC9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vZmFzdC1nbG9iQDMuMi4xMi9ub2RlX21vZHVsZXMvZmFzdC1nbG9iL291dC9yZWFkZXJzL3JlYWRlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vZmFzdC1nbG9iQDMuMi4xMi9ub2RlX21vZHVsZXMvZmFzdC1nbG9iL291dC9yZWFkZXJzL3N0cmVhbS5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vZmFzdC1nbG9iQDMuMi4xMi9ub2RlX21vZHVsZXMvZmFzdC1nbG9iL291dC9yZWFkZXJzL2FzeW5jLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9mYXN0LWdsb2JAMy4yLjEyL25vZGVfbW9kdWxlcy9mYXN0LWdsb2Ivb3V0L3Byb3ZpZGVycy9tYXRjaGVycy9tYXRjaGVyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9mYXN0LWdsb2JAMy4yLjEyL25vZGVfbW9kdWxlcy9mYXN0LWdsb2Ivb3V0L3Byb3ZpZGVycy9tYXRjaGVycy9wYXJ0aWFsLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9mYXN0LWdsb2JAMy4yLjEyL25vZGVfbW9kdWxlcy9mYXN0LWdsb2Ivb3V0L3Byb3ZpZGVycy9maWx0ZXJzL2RlZXAuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Zhc3QtZ2xvYkAzLjIuMTIvbm9kZV9tb2R1bGVzL2Zhc3QtZ2xvYi9vdXQvcHJvdmlkZXJzL2ZpbHRlcnMvZW50cnkuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Zhc3QtZ2xvYkAzLjIuMTIvbm9kZV9tb2R1bGVzL2Zhc3QtZ2xvYi9vdXQvcHJvdmlkZXJzL2ZpbHRlcnMvZXJyb3IuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Zhc3QtZ2xvYkAzLjIuMTIvbm9kZV9tb2R1bGVzL2Zhc3QtZ2xvYi9vdXQvcHJvdmlkZXJzL3RyYW5zZm9ybWVycy9lbnRyeS5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vZmFzdC1nbG9iQDMuMi4xMi9ub2RlX21vZHVsZXMvZmFzdC1nbG9iL291dC9wcm92aWRlcnMvcHJvdmlkZXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Zhc3QtZ2xvYkAzLjIuMTIvbm9kZV9tb2R1bGVzL2Zhc3QtZ2xvYi9vdXQvcHJvdmlkZXJzL2FzeW5jLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9mYXN0LWdsb2JAMy4yLjEyL25vZGVfbW9kdWxlcy9mYXN0LWdsb2Ivb3V0L3Byb3ZpZGVycy9zdHJlYW0uanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Zhc3QtZ2xvYkAzLjIuMTIvbm9kZV9tb2R1bGVzL2Zhc3QtZ2xvYi9vdXQvcmVhZGVycy9zeW5jLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9mYXN0LWdsb2JAMy4yLjEyL25vZGVfbW9kdWxlcy9mYXN0LWdsb2Ivb3V0L3Byb3ZpZGVycy9zeW5jLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9mYXN0LWdsb2JAMy4yLjEyL25vZGVfbW9kdWxlcy9mYXN0LWdsb2Ivb3V0L3NldHRpbmdzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9mYXN0LWdsb2JAMy4yLjEyL25vZGVfbW9kdWxlcy9mYXN0LWdsb2Ivb3V0L2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWFkZGlycEAzLjYuMC9ub2RlX21vZHVsZXMvcmVhZGRpcnAvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL25vcm1hbGl6ZS1wYXRoQDMuMC4wL25vZGVfbW9kdWxlcy9ub3JtYWxpemUtcGF0aC9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vYW55bWF0Y2hAMy4xLjMvbm9kZV9tb2R1bGVzL2FueW1hdGNoL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9iaW5hcnktZXh0ZW5zaW9uc0AyLjIuMC9ub2RlX21vZHVsZXMvYmluYXJ5LWV4dGVuc2lvbnMvYmluYXJ5LWV4dGVuc2lvbnMuanNvbiIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vYmluYXJ5LWV4dGVuc2lvbnNAMi4yLjAvbm9kZV9tb2R1bGVzL2JpbmFyeS1leHRlbnNpb25zL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9pcy1iaW5hcnktcGF0aEAyLjEuMC9ub2RlX21vZHVsZXMvaXMtYmluYXJ5LXBhdGgvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nob2tpZGFyQDMuNS4zL25vZGVfbW9kdWxlcy9jaG9raWRhci9saWIvY29uc3RhbnRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9jaG9raWRhckAzLjUuMy9ub2RlX21vZHVsZXMvY2hva2lkYXIvbGliL25vZGVmcy1oYW5kbGVyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9jaG9raWRhckAzLjUuMy9ub2RlX21vZHVsZXMvY2hva2lkYXIvbGliL2ZzZXZlbnRzLWhhbmRsZXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nob2tpZGFyQDMuNS4zL25vZGVfbW9kdWxlcy9jaG9raWRhci9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvLnBucG0vdHMtZGVib3VuY2VANC4wLjAvbm9kZV9tb2R1bGVzL3RzLWRlYm91bmNlL3NyYy9pbmRleC50cyIsICIuLi9zcmMvbWFpbi9pbmRleC50cyIsICIuLi9zcmMvY29tbW9uL2NvbnN0YW50cy50cyIsICIuLi9zcmMvbWFpbi9jb25maWcudHMiLCAiLi4vc3JjL21haW4vdXRpbHMvaW5kZXgudHMiLCAiLi4vc3JjL21haW4vdXRpbHMvaGFzVmFsdWUudHMiLCAiLi4vc3JjL21haW4vdXRpbHMvcmVzb2x2ZVBhdGgudHMiLCAiLi4vc3JjL21haW4vdXRpbHMvc2VuZFRvQWxsLnRzIiwgIi4uL3NyYy9jb21tb24vbG9nZ2VyLnRzIiwgIi4uL3NyYy9tYWluL3Byb3RvY29sLnRzIiwgIi4uL3NyYy9tYWluL3RoZW1lcy9pbmRleC50cyIsICIuLi9zcmMvbWFpbi90aGVtZXMvd2F0Y2hlci50cyIsICIuLi9zcmMvbWFpbi90aGVtZXMvaXBjLnRzIiwgIi4uL3NyYy9tYWluL3F1aWNrY3NzL2luZGV4LnRzIiwgIi4uL3NyYy9tYWluL3F1aWNrY3NzL2lwYy50cyIsICIuLi9zcmMvbWFpbi9xdWlja2Nzcy93YXRjaGVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnNwbGl0V2hlbiA9IGV4cG9ydHMuZmxhdHRlbiA9IHZvaWQgMDtcclxuZnVuY3Rpb24gZmxhdHRlbihpdGVtcykge1xyXG4gICAgcmV0dXJuIGl0ZW1zLnJlZHVjZSgoY29sbGVjdGlvbiwgaXRlbSkgPT4gW10uY29uY2F0KGNvbGxlY3Rpb24sIGl0ZW0pLCBbXSk7XHJcbn1cclxuZXhwb3J0cy5mbGF0dGVuID0gZmxhdHRlbjtcclxuZnVuY3Rpb24gc3BsaXRXaGVuKGl0ZW1zLCBwcmVkaWNhdGUpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IFtbXV07XHJcbiAgICBsZXQgZ3JvdXBJbmRleCA9IDA7XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcclxuICAgICAgICBpZiAocHJlZGljYXRlKGl0ZW0pKSB7XHJcbiAgICAgICAgICAgIGdyb3VwSW5kZXgrKztcclxuICAgICAgICAgICAgcmVzdWx0W2dyb3VwSW5kZXhdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHRbZ3JvdXBJbmRleF0ucHVzaChpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmV4cG9ydHMuc3BsaXRXaGVuID0gc3BsaXRXaGVuO1xyXG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5pc0Vub2VudENvZGVFcnJvciA9IHZvaWQgMDtcclxuZnVuY3Rpb24gaXNFbm9lbnRDb2RlRXJyb3IoZXJyb3IpIHtcclxuICAgIHJldHVybiBlcnJvci5jb2RlID09PSAnRU5PRU5UJztcclxufVxyXG5leHBvcnRzLmlzRW5vZW50Q29kZUVycm9yID0gaXNFbm9lbnRDb2RlRXJyb3I7XHJcbiIsICJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmNyZWF0ZURpcmVudEZyb21TdGF0cyA9IHZvaWQgMDtcclxuY2xhc3MgRGlyZW50RnJvbVN0YXRzIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHN0YXRzKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmlzQmxvY2tEZXZpY2UgPSBzdGF0cy5pc0Jsb2NrRGV2aWNlLmJpbmQoc3RhdHMpO1xyXG4gICAgICAgIHRoaXMuaXNDaGFyYWN0ZXJEZXZpY2UgPSBzdGF0cy5pc0NoYXJhY3RlckRldmljZS5iaW5kKHN0YXRzKTtcclxuICAgICAgICB0aGlzLmlzRGlyZWN0b3J5ID0gc3RhdHMuaXNEaXJlY3RvcnkuYmluZChzdGF0cyk7XHJcbiAgICAgICAgdGhpcy5pc0ZJRk8gPSBzdGF0cy5pc0ZJRk8uYmluZChzdGF0cyk7XHJcbiAgICAgICAgdGhpcy5pc0ZpbGUgPSBzdGF0cy5pc0ZpbGUuYmluZChzdGF0cyk7XHJcbiAgICAgICAgdGhpcy5pc1NvY2tldCA9IHN0YXRzLmlzU29ja2V0LmJpbmQoc3RhdHMpO1xyXG4gICAgICAgIHRoaXMuaXNTeW1ib2xpY0xpbmsgPSBzdGF0cy5pc1N5bWJvbGljTGluay5iaW5kKHN0YXRzKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjcmVhdGVEaXJlbnRGcm9tU3RhdHMobmFtZSwgc3RhdHMpIHtcclxuICAgIHJldHVybiBuZXcgRGlyZW50RnJvbVN0YXRzKG5hbWUsIHN0YXRzKTtcclxufVxyXG5leHBvcnRzLmNyZWF0ZURpcmVudEZyb21TdGF0cyA9IGNyZWF0ZURpcmVudEZyb21TdGF0cztcclxuIiwgIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMucmVtb3ZlTGVhZGluZ0RvdFNlZ21lbnQgPSBleHBvcnRzLmVzY2FwZSA9IGV4cG9ydHMubWFrZUFic29sdXRlID0gZXhwb3J0cy51bml4aWZ5ID0gdm9pZCAwO1xyXG5jb25zdCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XHJcbmNvbnN0IExFQURJTkdfRE9UX1NFR01FTlRfQ0hBUkFDVEVSU19DT1VOVCA9IDI7IC8vIC4vIG9yIC5cXFxcXHJcbmNvbnN0IFVORVNDQVBFRF9HTE9CX1NZTUJPTFNfUkUgPSAvKFxcXFw/KShbKCkqP1tcXF17fH1dfF4hfFshK0BdKD89XFwoKSkvZztcclxuLyoqXHJcbiAqIERlc2lnbmVkIHRvIHdvcmsgb25seSB3aXRoIHNpbXBsZSBwYXRoczogYGRpclxcXFxmaWxlYC5cclxuICovXHJcbmZ1bmN0aW9uIHVuaXhpZnkoZmlsZXBhdGgpIHtcclxuICAgIHJldHVybiBmaWxlcGF0aC5yZXBsYWNlKC9cXFxcL2csICcvJyk7XHJcbn1cclxuZXhwb3J0cy51bml4aWZ5ID0gdW5peGlmeTtcclxuZnVuY3Rpb24gbWFrZUFic29sdXRlKGN3ZCwgZmlsZXBhdGgpIHtcclxuICAgIHJldHVybiBwYXRoLnJlc29sdmUoY3dkLCBmaWxlcGF0aCk7XHJcbn1cclxuZXhwb3J0cy5tYWtlQWJzb2x1dGUgPSBtYWtlQWJzb2x1dGU7XHJcbmZ1bmN0aW9uIGVzY2FwZShwYXR0ZXJuKSB7XHJcbiAgICByZXR1cm4gcGF0dGVybi5yZXBsYWNlKFVORVNDQVBFRF9HTE9CX1NZTUJPTFNfUkUsICdcXFxcJDInKTtcclxufVxyXG5leHBvcnRzLmVzY2FwZSA9IGVzY2FwZTtcclxuZnVuY3Rpb24gcmVtb3ZlTGVhZGluZ0RvdFNlZ21lbnQoZW50cnkpIHtcclxuICAgIC8vIFdlIGRvIG5vdCB1c2UgYHN0YXJ0c1dpdGhgIGJlY2F1c2UgdGhpcyBpcyAxMHggc2xvd2VyIHRoYW4gY3VycmVudCBpbXBsZW1lbnRhdGlvbiBmb3Igc29tZSBjYXNlcy5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJlZmVyLXN0cmluZy1zdGFydHMtZW5kcy13aXRoXHJcbiAgICBpZiAoZW50cnkuY2hhckF0KDApID09PSAnLicpIHtcclxuICAgICAgICBjb25zdCBzZWNvbmRDaGFyYWN0ZXJ5ID0gZW50cnkuY2hhckF0KDEpO1xyXG4gICAgICAgIGlmIChzZWNvbmRDaGFyYWN0ZXJ5ID09PSAnLycgfHwgc2Vjb25kQ2hhcmFjdGVyeSA9PT0gJ1xcXFwnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbnRyeS5zbGljZShMRUFESU5HX0RPVF9TRUdNRU5UX0NIQVJBQ1RFUlNfQ09VTlQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBlbnRyeTtcclxufVxyXG5leHBvcnRzLnJlbW92ZUxlYWRpbmdEb3RTZWdtZW50ID0gcmVtb3ZlTGVhZGluZ0RvdFNlZ21lbnQ7XHJcbiIsICIvKiFcbiAqIGlzLWV4dGdsb2IgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2lzLWV4dGdsb2I+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTYsIEpvbiBTY2hsaW5rZXJ0LlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNFeHRnbG9iKHN0cikge1xuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycgfHwgc3RyID09PSAnJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBtYXRjaDtcbiAgd2hpbGUgKChtYXRjaCA9IC8oXFxcXCkufChbQD8hKypdXFwoLipcXCkpL2cuZXhlYyhzdHIpKSkge1xuICAgIGlmIChtYXRjaFsyXSkgcmV0dXJuIHRydWU7XG4gICAgc3RyID0gc3RyLnNsaWNlKG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoKTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG4iLCAiLyohXG4gKiBpcy1nbG9iIDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9pcy1nbG9iPlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE3LCBKb24gU2NobGlua2VydC5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG52YXIgaXNFeHRnbG9iID0gcmVxdWlyZSgnaXMtZXh0Z2xvYicpO1xudmFyIGNoYXJzID0geyAneyc6ICd9JywgJygnOiAnKScsICdbJzogJ10nfTtcbnZhciBzdHJpY3RDaGVjayA9IGZ1bmN0aW9uKHN0cikge1xuICBpZiAoc3RyWzBdID09PSAnIScpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgcGlwZUluZGV4ID0gLTI7XG4gIHZhciBjbG9zZVNxdWFyZUluZGV4ID0gLTI7XG4gIHZhciBjbG9zZUN1cmx5SW5kZXggPSAtMjtcbiAgdmFyIGNsb3NlUGFyZW5JbmRleCA9IC0yO1xuICB2YXIgYmFja1NsYXNoSW5kZXggPSAtMjtcbiAgd2hpbGUgKGluZGV4IDwgc3RyLmxlbmd0aCkge1xuICAgIGlmIChzdHJbaW5kZXhdID09PSAnKicpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdHJbaW5kZXggKyAxXSA9PT0gJz8nICYmIC9bXFxdLispXS8udGVzdChzdHJbaW5kZXhdKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNsb3NlU3F1YXJlSW5kZXggIT09IC0xICYmIHN0cltpbmRleF0gPT09ICdbJyAmJiBzdHJbaW5kZXggKyAxXSAhPT0gJ10nKSB7XG4gICAgICBpZiAoY2xvc2VTcXVhcmVJbmRleCA8IGluZGV4KSB7XG4gICAgICAgIGNsb3NlU3F1YXJlSW5kZXggPSBzdHIuaW5kZXhPZignXScsIGluZGV4KTtcbiAgICAgIH1cbiAgICAgIGlmIChjbG9zZVNxdWFyZUluZGV4ID4gaW5kZXgpIHtcbiAgICAgICAgaWYgKGJhY2tTbGFzaEluZGV4ID09PSAtMSB8fCBiYWNrU2xhc2hJbmRleCA+IGNsb3NlU3F1YXJlSW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBiYWNrU2xhc2hJbmRleCA9IHN0ci5pbmRleE9mKCdcXFxcJywgaW5kZXgpO1xuICAgICAgICBpZiAoYmFja1NsYXNoSW5kZXggPT09IC0xIHx8IGJhY2tTbGFzaEluZGV4ID4gY2xvc2VTcXVhcmVJbmRleCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNsb3NlQ3VybHlJbmRleCAhPT0gLTEgJiYgc3RyW2luZGV4XSA9PT0gJ3snICYmIHN0cltpbmRleCArIDFdICE9PSAnfScpIHtcbiAgICAgIGNsb3NlQ3VybHlJbmRleCA9IHN0ci5pbmRleE9mKCd9JywgaW5kZXgpO1xuICAgICAgaWYgKGNsb3NlQ3VybHlJbmRleCA+IGluZGV4KSB7XG4gICAgICAgIGJhY2tTbGFzaEluZGV4ID0gc3RyLmluZGV4T2YoJ1xcXFwnLCBpbmRleCk7XG4gICAgICAgIGlmIChiYWNrU2xhc2hJbmRleCA9PT0gLTEgfHwgYmFja1NsYXNoSW5kZXggPiBjbG9zZUN1cmx5SW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjbG9zZVBhcmVuSW5kZXggIT09IC0xICYmIHN0cltpbmRleF0gPT09ICcoJyAmJiBzdHJbaW5kZXggKyAxXSA9PT0gJz8nICYmIC9bOiE9XS8udGVzdChzdHJbaW5kZXggKyAyXSkgJiYgc3RyW2luZGV4ICsgM10gIT09ICcpJykge1xuICAgICAgY2xvc2VQYXJlbkluZGV4ID0gc3RyLmluZGV4T2YoJyknLCBpbmRleCk7XG4gICAgICBpZiAoY2xvc2VQYXJlbkluZGV4ID4gaW5kZXgpIHtcbiAgICAgICAgYmFja1NsYXNoSW5kZXggPSBzdHIuaW5kZXhPZignXFxcXCcsIGluZGV4KTtcbiAgICAgICAgaWYgKGJhY2tTbGFzaEluZGV4ID09PSAtMSB8fCBiYWNrU2xhc2hJbmRleCA+IGNsb3NlUGFyZW5JbmRleCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBpcGVJbmRleCAhPT0gLTEgJiYgc3RyW2luZGV4XSA9PT0gJygnICYmIHN0cltpbmRleCArIDFdICE9PSAnfCcpIHtcbiAgICAgIGlmIChwaXBlSW5kZXggPCBpbmRleCkge1xuICAgICAgICBwaXBlSW5kZXggPSBzdHIuaW5kZXhPZignfCcsIGluZGV4KTtcbiAgICAgIH1cbiAgICAgIGlmIChwaXBlSW5kZXggIT09IC0xICYmIHN0cltwaXBlSW5kZXggKyAxXSAhPT0gJyknKSB7XG4gICAgICAgIGNsb3NlUGFyZW5JbmRleCA9IHN0ci5pbmRleE9mKCcpJywgcGlwZUluZGV4KTtcbiAgICAgICAgaWYgKGNsb3NlUGFyZW5JbmRleCA+IHBpcGVJbmRleCkge1xuICAgICAgICAgIGJhY2tTbGFzaEluZGV4ID0gc3RyLmluZGV4T2YoJ1xcXFwnLCBwaXBlSW5kZXgpO1xuICAgICAgICAgIGlmIChiYWNrU2xhc2hJbmRleCA9PT0gLTEgfHwgYmFja1NsYXNoSW5kZXggPiBjbG9zZVBhcmVuSW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdHJbaW5kZXhdID09PSAnXFxcXCcpIHtcbiAgICAgIHZhciBvcGVuID0gc3RyW2luZGV4ICsgMV07XG4gICAgICBpbmRleCArPSAyO1xuICAgICAgdmFyIGNsb3NlID0gY2hhcnNbb3Blbl07XG5cbiAgICAgIGlmIChjbG9zZSkge1xuICAgICAgICB2YXIgbiA9IHN0ci5pbmRleE9mKGNsb3NlLCBpbmRleCk7XG4gICAgICAgIGlmIChuICE9PSAtMSkge1xuICAgICAgICAgIGluZGV4ID0gbiArIDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN0cltpbmRleF0gPT09ICchJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaW5kZXgrKztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIHJlbGF4ZWRDaGVjayA9IGZ1bmN0aW9uKHN0cikge1xuICBpZiAoc3RyWzBdID09PSAnIScpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgaW5kZXggPSAwO1xuICB3aGlsZSAoaW5kZXggPCBzdHIubGVuZ3RoKSB7XG4gICAgaWYgKC9bKj97fSgpW1xcXV0vLnRlc3Qoc3RyW2luZGV4XSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdHJbaW5kZXhdID09PSAnXFxcXCcpIHtcbiAgICAgIHZhciBvcGVuID0gc3RyW2luZGV4ICsgMV07XG4gICAgICBpbmRleCArPSAyO1xuICAgICAgdmFyIGNsb3NlID0gY2hhcnNbb3Blbl07XG5cbiAgICAgIGlmIChjbG9zZSkge1xuICAgICAgICB2YXIgbiA9IHN0ci5pbmRleE9mKGNsb3NlLCBpbmRleCk7XG4gICAgICAgIGlmIChuICE9PSAtMSkge1xuICAgICAgICAgIGluZGV4ID0gbiArIDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN0cltpbmRleF0gPT09ICchJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaW5kZXgrKztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0dsb2Ioc3RyLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJyB8fCBzdHIgPT09ICcnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGlzRXh0Z2xvYihzdHIpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgY2hlY2sgPSBzdHJpY3RDaGVjaztcblxuICAvLyBvcHRpb25hbGx5IHJlbGF4IGNoZWNrXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuc3RyaWN0ID09PSBmYWxzZSkge1xuICAgIGNoZWNrID0gcmVsYXhlZENoZWNrO1xuICB9XG5cbiAgcmV0dXJuIGNoZWNrKHN0cik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIGlzR2xvYiA9IHJlcXVpcmUoJ2lzLWdsb2InKTtcbnZhciBwYXRoUG9zaXhEaXJuYW1lID0gcmVxdWlyZSgncGF0aCcpLnBvc2l4LmRpcm5hbWU7XG52YXIgaXNXaW4zMiA9IHJlcXVpcmUoJ29zJykucGxhdGZvcm0oKSA9PT0gJ3dpbjMyJztcblxudmFyIHNsYXNoID0gJy8nO1xudmFyIGJhY2tzbGFzaCA9IC9cXFxcL2c7XG52YXIgZW5jbG9zdXJlID0gL1tcXHtcXFtdLipbXFx9XFxdXSQvO1xudmFyIGdsb2JieSA9IC8oXnxbXlxcXFxdKShbXFx7XFxbXXxcXChbXlxcKV0rJCkvO1xudmFyIGVzY2FwZWQgPSAvXFxcXChbXFwhXFwqXFw/XFx8XFxbXFxdXFwoXFwpXFx7XFx9XSkvZztcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5mbGlwQmFja3NsYXNoZXM9dHJ1ZV1cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2xvYlBhcmVudChzdHIsIG9wdHMpIHtcbiAgdmFyIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHsgZmxpcEJhY2tzbGFzaGVzOiB0cnVlIH0sIG9wdHMpO1xuXG4gIC8vIGZsaXAgd2luZG93cyBwYXRoIHNlcGFyYXRvcnNcbiAgaWYgKG9wdGlvbnMuZmxpcEJhY2tzbGFzaGVzICYmIGlzV2luMzIgJiYgc3RyLmluZGV4T2Yoc2xhc2gpIDwgMCkge1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKGJhY2tzbGFzaCwgc2xhc2gpO1xuICB9XG5cbiAgLy8gc3BlY2lhbCBjYXNlIGZvciBzdHJpbmdzIGVuZGluZyBpbiBlbmNsb3N1cmUgY29udGFpbmluZyBwYXRoIHNlcGFyYXRvclxuICBpZiAoZW5jbG9zdXJlLnRlc3Qoc3RyKSkge1xuICAgIHN0ciArPSBzbGFzaDtcbiAgfVxuXG4gIC8vIHByZXNlcnZlcyBmdWxsIHBhdGggaW4gY2FzZSBvZiB0cmFpbGluZyBwYXRoIHNlcGFyYXRvclxuICBzdHIgKz0gJ2EnO1xuXG4gIC8vIHJlbW92ZSBwYXRoIHBhcnRzIHRoYXQgYXJlIGdsb2JieVxuICBkbyB7XG4gICAgc3RyID0gcGF0aFBvc2l4RGlybmFtZShzdHIpO1xuICB9IHdoaWxlIChpc0dsb2Ioc3RyKSB8fCBnbG9iYnkudGVzdChzdHIpKTtcblxuICAvLyByZW1vdmUgZXNjYXBlIGNoYXJzIGFuZCByZXR1cm4gcmVzdWx0XG4gIHJldHVybiBzdHIucmVwbGFjZShlc2NhcGVkLCAnJDEnKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLmlzSW50ZWdlciA9IG51bSA9PiB7XG4gIGlmICh0eXBlb2YgbnVtID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKG51bSk7XG4gIH1cbiAgaWYgKHR5cGVvZiBudW0gPT09ICdzdHJpbmcnICYmIG51bS50cmltKCkgIT09ICcnKSB7XG4gICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIoTnVtYmVyKG51bSkpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogRmluZCBhIG5vZGUgb2YgdGhlIGdpdmVuIHR5cGVcbiAqL1xuXG5leHBvcnRzLmZpbmQgPSAobm9kZSwgdHlwZSkgPT4gbm9kZS5ub2Rlcy5maW5kKG5vZGUgPT4gbm9kZS50eXBlID09PSB0eXBlKTtcblxuLyoqXG4gKiBGaW5kIGEgbm9kZSBvZiB0aGUgZ2l2ZW4gdHlwZVxuICovXG5cbmV4cG9ydHMuZXhjZWVkc0xpbWl0ID0gKG1pbiwgbWF4LCBzdGVwID0gMSwgbGltaXQpID0+IHtcbiAgaWYgKGxpbWl0ID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICBpZiAoIWV4cG9ydHMuaXNJbnRlZ2VyKG1pbikgfHwgIWV4cG9ydHMuaXNJbnRlZ2VyKG1heCkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuICgoTnVtYmVyKG1heCkgLSBOdW1iZXIobWluKSkgLyBOdW1iZXIoc3RlcCkpID49IGxpbWl0O1xufTtcblxuLyoqXG4gKiBFc2NhcGUgdGhlIGdpdmVuIG5vZGUgd2l0aCAnXFxcXCcgYmVmb3JlIG5vZGUudmFsdWVcbiAqL1xuXG5leHBvcnRzLmVzY2FwZU5vZGUgPSAoYmxvY2ssIG4gPSAwLCB0eXBlKSA9PiB7XG4gIGxldCBub2RlID0gYmxvY2subm9kZXNbbl07XG4gIGlmICghbm9kZSkgcmV0dXJuO1xuXG4gIGlmICgodHlwZSAmJiBub2RlLnR5cGUgPT09IHR5cGUpIHx8IG5vZGUudHlwZSA9PT0gJ29wZW4nIHx8IG5vZGUudHlwZSA9PT0gJ2Nsb3NlJykge1xuICAgIGlmIChub2RlLmVzY2FwZWQgIT09IHRydWUpIHtcbiAgICAgIG5vZGUudmFsdWUgPSAnXFxcXCcgKyBub2RlLnZhbHVlO1xuICAgICAgbm9kZS5lc2NhcGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBicmFjZSBub2RlIHNob3VsZCBiZSBlbmNsb3NlZCBpbiBsaXRlcmFsIGJyYWNlc1xuICovXG5cbmV4cG9ydHMuZW5jbG9zZUJyYWNlID0gbm9kZSA9PiB7XG4gIGlmIChub2RlLnR5cGUgIT09ICdicmFjZScpIHJldHVybiBmYWxzZTtcbiAgaWYgKChub2RlLmNvbW1hcyA+PiAwICsgbm9kZS5yYW5nZXMgPj4gMCkgPT09IDApIHtcbiAgICBub2RlLmludmFsaWQgPSB0cnVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGEgYnJhY2Ugbm9kZSBpcyBpbnZhbGlkLlxuICovXG5cbmV4cG9ydHMuaXNJbnZhbGlkQnJhY2UgPSBibG9jayA9PiB7XG4gIGlmIChibG9jay50eXBlICE9PSAnYnJhY2UnKSByZXR1cm4gZmFsc2U7XG4gIGlmIChibG9jay5pbnZhbGlkID09PSB0cnVlIHx8IGJsb2NrLmRvbGxhcikgcmV0dXJuIHRydWU7XG4gIGlmICgoYmxvY2suY29tbWFzID4+IDAgKyBibG9jay5yYW5nZXMgPj4gMCkgPT09IDApIHtcbiAgICBibG9jay5pbnZhbGlkID0gdHJ1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoYmxvY2sub3BlbiAhPT0gdHJ1ZSB8fCBibG9jay5jbG9zZSAhPT0gdHJ1ZSkge1xuICAgIGJsb2NrLmludmFsaWQgPSB0cnVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGEgbm9kZSBpcyBhbiBvcGVuIG9yIGNsb3NlIG5vZGVcbiAqL1xuXG5leHBvcnRzLmlzT3Blbk9yQ2xvc2UgPSBub2RlID0+IHtcbiAgaWYgKG5vZGUudHlwZSA9PT0gJ29wZW4nIHx8IG5vZGUudHlwZSA9PT0gJ2Nsb3NlJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBub2RlLm9wZW4gPT09IHRydWUgfHwgbm9kZS5jbG9zZSA9PT0gdHJ1ZTtcbn07XG5cbi8qKlxuICogUmVkdWNlIGFuIGFycmF5IG9mIHRleHQgbm9kZXMuXG4gKi9cblxuZXhwb3J0cy5yZWR1Y2UgPSBub2RlcyA9PiBub2Rlcy5yZWR1Y2UoKGFjYywgbm9kZSkgPT4ge1xuICBpZiAobm9kZS50eXBlID09PSAndGV4dCcpIGFjYy5wdXNoKG5vZGUudmFsdWUpO1xuICBpZiAobm9kZS50eXBlID09PSAncmFuZ2UnKSBub2RlLnR5cGUgPSAndGV4dCc7XG4gIHJldHVybiBhY2M7XG59LCBbXSk7XG5cbi8qKlxuICogRmxhdHRlbiBhbiBhcnJheVxuICovXG5cbmV4cG9ydHMuZmxhdHRlbiA9ICguLi5hcmdzKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBjb25zdCBmbGF0ID0gYXJyID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGVsZSA9IGFycltpXTtcbiAgICAgIEFycmF5LmlzQXJyYXkoZWxlKSA/IGZsYXQoZWxlLCByZXN1bHQpIDogZWxlICE9PSB2b2lkIDAgJiYgcmVzdWx0LnB1c2goZWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgZmxhdChhcmdzKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoYXN0LCBvcHRpb25zID0ge30pID0+IHtcbiAgbGV0IHN0cmluZ2lmeSA9IChub2RlLCBwYXJlbnQgPSB7fSkgPT4ge1xuICAgIGxldCBpbnZhbGlkQmxvY2sgPSBvcHRpb25zLmVzY2FwZUludmFsaWQgJiYgdXRpbHMuaXNJbnZhbGlkQnJhY2UocGFyZW50KTtcbiAgICBsZXQgaW52YWxpZE5vZGUgPSBub2RlLmludmFsaWQgPT09IHRydWUgJiYgb3B0aW9ucy5lc2NhcGVJbnZhbGlkID09PSB0cnVlO1xuICAgIGxldCBvdXRwdXQgPSAnJztcblxuICAgIGlmIChub2RlLnZhbHVlKSB7XG4gICAgICBpZiAoKGludmFsaWRCbG9jayB8fCBpbnZhbGlkTm9kZSkgJiYgdXRpbHMuaXNPcGVuT3JDbG9zZShub2RlKSkge1xuICAgICAgICByZXR1cm4gJ1xcXFwnICsgbm9kZS52YWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBub2RlLnZhbHVlO1xuICAgIH1cblxuICAgIGlmIChub2RlLnZhbHVlKSB7XG4gICAgICByZXR1cm4gbm9kZS52YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5ub2Rlcykge1xuICAgICAgZm9yIChsZXQgY2hpbGQgb2Ygbm9kZS5ub2Rlcykge1xuICAgICAgICBvdXRwdXQgKz0gc3RyaW5naWZ5KGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfTtcblxuICByZXR1cm4gc3RyaW5naWZ5KGFzdCk7XG59O1xuXG4iLCAiLyohXG4gKiBpcy1udW1iZXIgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2lzLW51bWJlcj5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgSm9uIFNjaGxpbmtlcnQuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG51bSkge1xuICBpZiAodHlwZW9mIG51bSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gbnVtIC0gbnVtID09PSAwO1xuICB9XG4gIGlmICh0eXBlb2YgbnVtID09PSAnc3RyaW5nJyAmJiBudW0udHJpbSgpICE9PSAnJykge1xuICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUgPyBOdW1iZXIuaXNGaW5pdGUoK251bSkgOiBpc0Zpbml0ZSgrbnVtKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuIiwgIi8qIVxuICogdG8tcmVnZXgtcmFuZ2UgPGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb21hdGNoL3RvLXJlZ2V4LXJhbmdlPlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNS1wcmVzZW50LCBKb24gU2NobGlua2VydC5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0IGlzTnVtYmVyID0gcmVxdWlyZSgnaXMtbnVtYmVyJyk7XG5cbmNvbnN0IHRvUmVnZXhSYW5nZSA9IChtaW4sIG1heCwgb3B0aW9ucykgPT4ge1xuICBpZiAoaXNOdW1iZXIobWluKSA9PT0gZmFsc2UpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd0b1JlZ2V4UmFuZ2U6IGV4cGVjdGVkIHRoZSBmaXJzdCBhcmd1bWVudCB0byBiZSBhIG51bWJlcicpO1xuICB9XG5cbiAgaWYgKG1heCA9PT0gdm9pZCAwIHx8IG1pbiA9PT0gbWF4KSB7XG4gICAgcmV0dXJuIFN0cmluZyhtaW4pO1xuICB9XG5cbiAgaWYgKGlzTnVtYmVyKG1heCkgPT09IGZhbHNlKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndG9SZWdleFJhbmdlOiBleHBlY3RlZCB0aGUgc2Vjb25kIGFyZ3VtZW50IHRvIGJlIGEgbnVtYmVyLicpO1xuICB9XG5cbiAgbGV0IG9wdHMgPSB7IHJlbGF4WmVyb3M6IHRydWUsIC4uLm9wdGlvbnMgfTtcbiAgaWYgKHR5cGVvZiBvcHRzLnN0cmljdFplcm9zID09PSAnYm9vbGVhbicpIHtcbiAgICBvcHRzLnJlbGF4WmVyb3MgPSBvcHRzLnN0cmljdFplcm9zID09PSBmYWxzZTtcbiAgfVxuXG4gIGxldCByZWxheCA9IFN0cmluZyhvcHRzLnJlbGF4WmVyb3MpO1xuICBsZXQgc2hvcnRoYW5kID0gU3RyaW5nKG9wdHMuc2hvcnRoYW5kKTtcbiAgbGV0IGNhcHR1cmUgPSBTdHJpbmcob3B0cy5jYXB0dXJlKTtcbiAgbGV0IHdyYXAgPSBTdHJpbmcob3B0cy53cmFwKTtcbiAgbGV0IGNhY2hlS2V5ID0gbWluICsgJzonICsgbWF4ICsgJz0nICsgcmVsYXggKyBzaG9ydGhhbmQgKyBjYXB0dXJlICsgd3JhcDtcblxuICBpZiAodG9SZWdleFJhbmdlLmNhY2hlLmhhc093blByb3BlcnR5KGNhY2hlS2V5KSkge1xuICAgIHJldHVybiB0b1JlZ2V4UmFuZ2UuY2FjaGVbY2FjaGVLZXldLnJlc3VsdDtcbiAgfVxuXG4gIGxldCBhID0gTWF0aC5taW4obWluLCBtYXgpO1xuICBsZXQgYiA9IE1hdGgubWF4KG1pbiwgbWF4KTtcblxuICBpZiAoTWF0aC5hYnMoYSAtIGIpID09PSAxKSB7XG4gICAgbGV0IHJlc3VsdCA9IG1pbiArICd8JyArIG1heDtcbiAgICBpZiAob3B0cy5jYXB0dXJlKSB7XG4gICAgICByZXR1cm4gYCgke3Jlc3VsdH0pYDtcbiAgICB9XG4gICAgaWYgKG9wdHMud3JhcCA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHJldHVybiBgKD86JHtyZXN1bHR9KWA7XG4gIH1cblxuICBsZXQgaXNQYWRkZWQgPSBoYXNQYWRkaW5nKG1pbikgfHwgaGFzUGFkZGluZyhtYXgpO1xuICBsZXQgc3RhdGUgPSB7IG1pbiwgbWF4LCBhLCBiIH07XG4gIGxldCBwb3NpdGl2ZXMgPSBbXTtcbiAgbGV0IG5lZ2F0aXZlcyA9IFtdO1xuXG4gIGlmIChpc1BhZGRlZCkge1xuICAgIHN0YXRlLmlzUGFkZGVkID0gaXNQYWRkZWQ7XG4gICAgc3RhdGUubWF4TGVuID0gU3RyaW5nKHN0YXRlLm1heCkubGVuZ3RoO1xuICB9XG5cbiAgaWYgKGEgPCAwKSB7XG4gICAgbGV0IG5ld01pbiA9IGIgPCAwID8gTWF0aC5hYnMoYikgOiAxO1xuICAgIG5lZ2F0aXZlcyA9IHNwbGl0VG9QYXR0ZXJucyhuZXdNaW4sIE1hdGguYWJzKGEpLCBzdGF0ZSwgb3B0cyk7XG4gICAgYSA9IHN0YXRlLmEgPSAwO1xuICB9XG5cbiAgaWYgKGIgPj0gMCkge1xuICAgIHBvc2l0aXZlcyA9IHNwbGl0VG9QYXR0ZXJucyhhLCBiLCBzdGF0ZSwgb3B0cyk7XG4gIH1cblxuICBzdGF0ZS5uZWdhdGl2ZXMgPSBuZWdhdGl2ZXM7XG4gIHN0YXRlLnBvc2l0aXZlcyA9IHBvc2l0aXZlcztcbiAgc3RhdGUucmVzdWx0ID0gY29sbGF0ZVBhdHRlcm5zKG5lZ2F0aXZlcywgcG9zaXRpdmVzLCBvcHRzKTtcblxuICBpZiAob3B0cy5jYXB0dXJlID09PSB0cnVlKSB7XG4gICAgc3RhdGUucmVzdWx0ID0gYCgke3N0YXRlLnJlc3VsdH0pYDtcbiAgfSBlbHNlIGlmIChvcHRzLndyYXAgIT09IGZhbHNlICYmIChwb3NpdGl2ZXMubGVuZ3RoICsgbmVnYXRpdmVzLmxlbmd0aCkgPiAxKSB7XG4gICAgc3RhdGUucmVzdWx0ID0gYCg/OiR7c3RhdGUucmVzdWx0fSlgO1xuICB9XG5cbiAgdG9SZWdleFJhbmdlLmNhY2hlW2NhY2hlS2V5XSA9IHN0YXRlO1xuICByZXR1cm4gc3RhdGUucmVzdWx0O1xufTtcblxuZnVuY3Rpb24gY29sbGF0ZVBhdHRlcm5zKG5lZywgcG9zLCBvcHRpb25zKSB7XG4gIGxldCBvbmx5TmVnYXRpdmUgPSBmaWx0ZXJQYXR0ZXJucyhuZWcsIHBvcywgJy0nLCBmYWxzZSwgb3B0aW9ucykgfHwgW107XG4gIGxldCBvbmx5UG9zaXRpdmUgPSBmaWx0ZXJQYXR0ZXJucyhwb3MsIG5lZywgJycsIGZhbHNlLCBvcHRpb25zKSB8fCBbXTtcbiAgbGV0IGludGVyc2VjdGVkID0gZmlsdGVyUGF0dGVybnMobmVnLCBwb3MsICctPycsIHRydWUsIG9wdGlvbnMpIHx8IFtdO1xuICBsZXQgc3VicGF0dGVybnMgPSBvbmx5TmVnYXRpdmUuY29uY2F0KGludGVyc2VjdGVkKS5jb25jYXQob25seVBvc2l0aXZlKTtcbiAgcmV0dXJuIHN1YnBhdHRlcm5zLmpvaW4oJ3wnKTtcbn1cblxuZnVuY3Rpb24gc3BsaXRUb1JhbmdlcyhtaW4sIG1heCkge1xuICBsZXQgbmluZXMgPSAxO1xuICBsZXQgemVyb3MgPSAxO1xuXG4gIGxldCBzdG9wID0gY291bnROaW5lcyhtaW4sIG5pbmVzKTtcbiAgbGV0IHN0b3BzID0gbmV3IFNldChbbWF4XSk7XG5cbiAgd2hpbGUgKG1pbiA8PSBzdG9wICYmIHN0b3AgPD0gbWF4KSB7XG4gICAgc3RvcHMuYWRkKHN0b3ApO1xuICAgIG5pbmVzICs9IDE7XG4gICAgc3RvcCA9IGNvdW50TmluZXMobWluLCBuaW5lcyk7XG4gIH1cblxuICBzdG9wID0gY291bnRaZXJvcyhtYXggKyAxLCB6ZXJvcykgLSAxO1xuXG4gIHdoaWxlIChtaW4gPCBzdG9wICYmIHN0b3AgPD0gbWF4KSB7XG4gICAgc3RvcHMuYWRkKHN0b3ApO1xuICAgIHplcm9zICs9IDE7XG4gICAgc3RvcCA9IGNvdW50WmVyb3MobWF4ICsgMSwgemVyb3MpIC0gMTtcbiAgfVxuXG4gIHN0b3BzID0gWy4uLnN0b3BzXTtcbiAgc3RvcHMuc29ydChjb21wYXJlKTtcbiAgcmV0dXJuIHN0b3BzO1xufVxuXG4vKipcbiAqIENvbnZlcnQgYSByYW5nZSB0byBhIHJlZ2V4IHBhdHRlcm5cbiAqIEBwYXJhbSB7TnVtYmVyfSBgc3RhcnRgXG4gKiBAcGFyYW0ge051bWJlcn0gYHN0b3BgXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gcmFuZ2VUb1BhdHRlcm4oc3RhcnQsIHN0b3AsIG9wdGlvbnMpIHtcbiAgaWYgKHN0YXJ0ID09PSBzdG9wKSB7XG4gICAgcmV0dXJuIHsgcGF0dGVybjogc3RhcnQsIGNvdW50OiBbXSwgZGlnaXRzOiAwIH07XG4gIH1cblxuICBsZXQgemlwcGVkID0gemlwKHN0YXJ0LCBzdG9wKTtcbiAgbGV0IGRpZ2l0cyA9IHppcHBlZC5sZW5ndGg7XG4gIGxldCBwYXR0ZXJuID0gJyc7XG4gIGxldCBjb3VudCA9IDA7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWdpdHM7IGkrKykge1xuICAgIGxldCBbc3RhcnREaWdpdCwgc3RvcERpZ2l0XSA9IHppcHBlZFtpXTtcblxuICAgIGlmIChzdGFydERpZ2l0ID09PSBzdG9wRGlnaXQpIHtcbiAgICAgIHBhdHRlcm4gKz0gc3RhcnREaWdpdDtcblxuICAgIH0gZWxzZSBpZiAoc3RhcnREaWdpdCAhPT0gJzAnIHx8IHN0b3BEaWdpdCAhPT0gJzknKSB7XG4gICAgICBwYXR0ZXJuICs9IHRvQ2hhcmFjdGVyQ2xhc3Moc3RhcnREaWdpdCwgc3RvcERpZ2l0LCBvcHRpb25zKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBjb3VudCsrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjb3VudCkge1xuICAgIHBhdHRlcm4gKz0gb3B0aW9ucy5zaG9ydGhhbmQgPT09IHRydWUgPyAnXFxcXGQnIDogJ1swLTldJztcbiAgfVxuXG4gIHJldHVybiB7IHBhdHRlcm4sIGNvdW50OiBbY291bnRdLCBkaWdpdHMgfTtcbn1cblxuZnVuY3Rpb24gc3BsaXRUb1BhdHRlcm5zKG1pbiwgbWF4LCB0b2ssIG9wdGlvbnMpIHtcbiAgbGV0IHJhbmdlcyA9IHNwbGl0VG9SYW5nZXMobWluLCBtYXgpO1xuICBsZXQgdG9rZW5zID0gW107XG4gIGxldCBzdGFydCA9IG1pbjtcbiAgbGV0IHByZXY7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5nZXMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgbWF4ID0gcmFuZ2VzW2ldO1xuICAgIGxldCBvYmogPSByYW5nZVRvUGF0dGVybihTdHJpbmcoc3RhcnQpLCBTdHJpbmcobWF4KSwgb3B0aW9ucyk7XG4gICAgbGV0IHplcm9zID0gJyc7XG5cbiAgICBpZiAoIXRvay5pc1BhZGRlZCAmJiBwcmV2ICYmIHByZXYucGF0dGVybiA9PT0gb2JqLnBhdHRlcm4pIHtcbiAgICAgIGlmIChwcmV2LmNvdW50Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgcHJldi5jb3VudC5wb3AoKTtcbiAgICAgIH1cblxuICAgICAgcHJldi5jb3VudC5wdXNoKG9iai5jb3VudFswXSk7XG4gICAgICBwcmV2LnN0cmluZyA9IHByZXYucGF0dGVybiArIHRvUXVhbnRpZmllcihwcmV2LmNvdW50KTtcbiAgICAgIHN0YXJ0ID0gbWF4ICsgMTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICh0b2suaXNQYWRkZWQpIHtcbiAgICAgIHplcm9zID0gcGFkWmVyb3MobWF4LCB0b2ssIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIG9iai5zdHJpbmcgPSB6ZXJvcyArIG9iai5wYXR0ZXJuICsgdG9RdWFudGlmaWVyKG9iai5jb3VudCk7XG4gICAgdG9rZW5zLnB1c2gob2JqKTtcbiAgICBzdGFydCA9IG1heCArIDE7XG4gICAgcHJldiA9IG9iajtcbiAgfVxuXG4gIHJldHVybiB0b2tlbnM7XG59XG5cbmZ1bmN0aW9uIGZpbHRlclBhdHRlcm5zKGFyciwgY29tcGFyaXNvbiwgcHJlZml4LCBpbnRlcnNlY3Rpb24sIG9wdGlvbnMpIHtcbiAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gIGZvciAobGV0IGVsZSBvZiBhcnIpIHtcbiAgICBsZXQgeyBzdHJpbmcgfSA9IGVsZTtcblxuICAgIC8vIG9ubHkgcHVzaCBpZiBfYm90aF8gYXJlIG5lZ2F0aXZlLi4uXG4gICAgaWYgKCFpbnRlcnNlY3Rpb24gJiYgIWNvbnRhaW5zKGNvbXBhcmlzb24sICdzdHJpbmcnLCBzdHJpbmcpKSB7XG4gICAgICByZXN1bHQucHVzaChwcmVmaXggKyBzdHJpbmcpO1xuICAgIH1cblxuICAgIC8vIG9yIF9ib3RoXyBhcmUgcG9zaXRpdmVcbiAgICBpZiAoaW50ZXJzZWN0aW9uICYmIGNvbnRhaW5zKGNvbXBhcmlzb24sICdzdHJpbmcnLCBzdHJpbmcpKSB7XG4gICAgICByZXN1bHQucHVzaChwcmVmaXggKyBzdHJpbmcpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFppcCBzdHJpbmdzXG4gKi9cblxuZnVuY3Rpb24gemlwKGEsIGIpIHtcbiAgbGV0IGFyciA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIGFyci5wdXNoKFthW2ldLCBiW2ldXSk7XG4gIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIGNvbXBhcmUoYSwgYikge1xuICByZXR1cm4gYSA+IGIgPyAxIDogYiA+IGEgPyAtMSA6IDA7XG59XG5cbmZ1bmN0aW9uIGNvbnRhaW5zKGFyciwga2V5LCB2YWwpIHtcbiAgcmV0dXJuIGFyci5zb21lKGVsZSA9PiBlbGVba2V5XSA9PT0gdmFsKTtcbn1cblxuZnVuY3Rpb24gY291bnROaW5lcyhtaW4sIGxlbikge1xuICByZXR1cm4gTnVtYmVyKFN0cmluZyhtaW4pLnNsaWNlKDAsIC1sZW4pICsgJzknLnJlcGVhdChsZW4pKTtcbn1cblxuZnVuY3Rpb24gY291bnRaZXJvcyhpbnRlZ2VyLCB6ZXJvcykge1xuICByZXR1cm4gaW50ZWdlciAtIChpbnRlZ2VyICUgTWF0aC5wb3coMTAsIHplcm9zKSk7XG59XG5cbmZ1bmN0aW9uIHRvUXVhbnRpZmllcihkaWdpdHMpIHtcbiAgbGV0IFtzdGFydCA9IDAsIHN0b3AgPSAnJ10gPSBkaWdpdHM7XG4gIGlmIChzdG9wIHx8IHN0YXJ0ID4gMSkge1xuICAgIHJldHVybiBgeyR7c3RhcnQgKyAoc3RvcCA/ICcsJyArIHN0b3AgOiAnJyl9fWA7XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiB0b0NoYXJhY3RlckNsYXNzKGEsIGIsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGBbJHthfSR7KGIgLSBhID09PSAxKSA/ICcnIDogJy0nfSR7Yn1dYDtcbn1cblxuZnVuY3Rpb24gaGFzUGFkZGluZyhzdHIpIHtcbiAgcmV0dXJuIC9eLT8oMCspXFxkLy50ZXN0KHN0cik7XG59XG5cbmZ1bmN0aW9uIHBhZFplcm9zKHZhbHVlLCB0b2ssIG9wdGlvbnMpIHtcbiAgaWYgKCF0b2suaXNQYWRkZWQpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBsZXQgZGlmZiA9IE1hdGguYWJzKHRvay5tYXhMZW4gLSBTdHJpbmcodmFsdWUpLmxlbmd0aCk7XG4gIGxldCByZWxheCA9IG9wdGlvbnMucmVsYXhaZXJvcyAhPT0gZmFsc2U7XG5cbiAgc3dpdGNoIChkaWZmKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuICcnO1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiByZWxheCA/ICcwPycgOiAnMCc7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIHJlbGF4ID8gJzB7MCwyfScgOiAnMDAnO1xuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiByZWxheCA/IGAwezAsJHtkaWZmfX1gIDogYDB7JHtkaWZmfX1gO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENhY2hlXG4gKi9cblxudG9SZWdleFJhbmdlLmNhY2hlID0ge307XG50b1JlZ2V4UmFuZ2UuY2xlYXJDYWNoZSA9ICgpID0+ICh0b1JlZ2V4UmFuZ2UuY2FjaGUgPSB7fSk7XG5cbi8qKlxuICogRXhwb3NlIGB0b1JlZ2V4UmFuZ2VgXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB0b1JlZ2V4UmFuZ2U7XG4iLCAiLyohXG4gKiBmaWxsLXJhbmdlIDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9maWxsLXJhbmdlPlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBKb24gU2NobGlua2VydC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0IHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG5jb25zdCB0b1JlZ2V4UmFuZ2UgPSByZXF1aXJlKCd0by1yZWdleC1yYW5nZScpO1xuXG5jb25zdCBpc09iamVjdCA9IHZhbCA9PiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkodmFsKTtcblxuY29uc3QgdHJhbnNmb3JtID0gdG9OdW1iZXIgPT4ge1xuICByZXR1cm4gdmFsdWUgPT4gdG9OdW1iZXIgPT09IHRydWUgPyBOdW1iZXIodmFsdWUpIDogU3RyaW5nKHZhbHVlKTtcbn07XG5cbmNvbnN0IGlzVmFsaWRWYWx1ZSA9IHZhbHVlID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHwgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUgIT09ICcnKTtcbn07XG5cbmNvbnN0IGlzTnVtYmVyID0gbnVtID0+IE51bWJlci5pc0ludGVnZXIoK251bSk7XG5cbmNvbnN0IHplcm9zID0gaW5wdXQgPT4ge1xuICBsZXQgdmFsdWUgPSBgJHtpbnB1dH1gO1xuICBsZXQgaW5kZXggPSAtMTtcbiAgaWYgKHZhbHVlWzBdID09PSAnLScpIHZhbHVlID0gdmFsdWUuc2xpY2UoMSk7XG4gIGlmICh2YWx1ZSA9PT0gJzAnKSByZXR1cm4gZmFsc2U7XG4gIHdoaWxlICh2YWx1ZVsrK2luZGV4XSA9PT0gJzAnKTtcbiAgcmV0dXJuIGluZGV4ID4gMDtcbn07XG5cbmNvbnN0IHN0cmluZ2lmeSA9IChzdGFydCwgZW5kLCBvcHRpb25zKSA9PiB7XG4gIGlmICh0eXBlb2Ygc3RhcnQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBlbmQgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIG9wdGlvbnMuc3RyaW5naWZ5ID09PSB0cnVlO1xufTtcblxuY29uc3QgcGFkID0gKGlucHV0LCBtYXhMZW5ndGgsIHRvTnVtYmVyKSA9PiB7XG4gIGlmIChtYXhMZW5ndGggPiAwKSB7XG4gICAgbGV0IGRhc2ggPSBpbnB1dFswXSA9PT0gJy0nID8gJy0nIDogJyc7XG4gICAgaWYgKGRhc2gpIGlucHV0ID0gaW5wdXQuc2xpY2UoMSk7XG4gICAgaW5wdXQgPSAoZGFzaCArIGlucHV0LnBhZFN0YXJ0KGRhc2ggPyBtYXhMZW5ndGggLSAxIDogbWF4TGVuZ3RoLCAnMCcpKTtcbiAgfVxuICBpZiAodG9OdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIFN0cmluZyhpbnB1dCk7XG4gIH1cbiAgcmV0dXJuIGlucHV0O1xufTtcblxuY29uc3QgdG9NYXhMZW4gPSAoaW5wdXQsIG1heExlbmd0aCkgPT4ge1xuICBsZXQgbmVnYXRpdmUgPSBpbnB1dFswXSA9PT0gJy0nID8gJy0nIDogJyc7XG4gIGlmIChuZWdhdGl2ZSkge1xuICAgIGlucHV0ID0gaW5wdXQuc2xpY2UoMSk7XG4gICAgbWF4TGVuZ3RoLS07XG4gIH1cbiAgd2hpbGUgKGlucHV0Lmxlbmd0aCA8IG1heExlbmd0aCkgaW5wdXQgPSAnMCcgKyBpbnB1dDtcbiAgcmV0dXJuIG5lZ2F0aXZlID8gKCctJyArIGlucHV0KSA6IGlucHV0O1xufTtcblxuY29uc3QgdG9TZXF1ZW5jZSA9IChwYXJ0cywgb3B0aW9ucykgPT4ge1xuICBwYXJ0cy5uZWdhdGl2ZXMuc29ydCgoYSwgYikgPT4gYSA8IGIgPyAtMSA6IGEgPiBiID8gMSA6IDApO1xuICBwYXJ0cy5wb3NpdGl2ZXMuc29ydCgoYSwgYikgPT4gYSA8IGIgPyAtMSA6IGEgPiBiID8gMSA6IDApO1xuXG4gIGxldCBwcmVmaXggPSBvcHRpb25zLmNhcHR1cmUgPyAnJyA6ICc/Oic7XG4gIGxldCBwb3NpdGl2ZXMgPSAnJztcbiAgbGV0IG5lZ2F0aXZlcyA9ICcnO1xuICBsZXQgcmVzdWx0O1xuXG4gIGlmIChwYXJ0cy5wb3NpdGl2ZXMubGVuZ3RoKSB7XG4gICAgcG9zaXRpdmVzID0gcGFydHMucG9zaXRpdmVzLmpvaW4oJ3wnKTtcbiAgfVxuXG4gIGlmIChwYXJ0cy5uZWdhdGl2ZXMubGVuZ3RoKSB7XG4gICAgbmVnYXRpdmVzID0gYC0oJHtwcmVmaXh9JHtwYXJ0cy5uZWdhdGl2ZXMuam9pbignfCcpfSlgO1xuICB9XG5cbiAgaWYgKHBvc2l0aXZlcyAmJiBuZWdhdGl2ZXMpIHtcbiAgICByZXN1bHQgPSBgJHtwb3NpdGl2ZXN9fCR7bmVnYXRpdmVzfWA7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gcG9zaXRpdmVzIHx8IG5lZ2F0aXZlcztcbiAgfVxuXG4gIGlmIChvcHRpb25zLndyYXApIHtcbiAgICByZXR1cm4gYCgke3ByZWZpeH0ke3Jlc3VsdH0pYDtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCB0b1JhbmdlID0gKGEsIGIsIGlzTnVtYmVycywgb3B0aW9ucykgPT4ge1xuICBpZiAoaXNOdW1iZXJzKSB7XG4gICAgcmV0dXJuIHRvUmVnZXhSYW5nZShhLCBiLCB7IHdyYXA6IGZhbHNlLCAuLi5vcHRpb25zIH0pO1xuICB9XG5cbiAgbGV0IHN0YXJ0ID0gU3RyaW5nLmZyb21DaGFyQ29kZShhKTtcbiAgaWYgKGEgPT09IGIpIHJldHVybiBzdGFydDtcblxuICBsZXQgc3RvcCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYik7XG4gIHJldHVybiBgWyR7c3RhcnR9LSR7c3RvcH1dYDtcbn07XG5cbmNvbnN0IHRvUmVnZXggPSAoc3RhcnQsIGVuZCwgb3B0aW9ucykgPT4ge1xuICBpZiAoQXJyYXkuaXNBcnJheShzdGFydCkpIHtcbiAgICBsZXQgd3JhcCA9IG9wdGlvbnMud3JhcCA9PT0gdHJ1ZTtcbiAgICBsZXQgcHJlZml4ID0gb3B0aW9ucy5jYXB0dXJlID8gJycgOiAnPzonO1xuICAgIHJldHVybiB3cmFwID8gYCgke3ByZWZpeH0ke3N0YXJ0LmpvaW4oJ3wnKX0pYCA6IHN0YXJ0LmpvaW4oJ3wnKTtcbiAgfVxuICByZXR1cm4gdG9SZWdleFJhbmdlKHN0YXJ0LCBlbmQsIG9wdGlvbnMpO1xufTtcblxuY29uc3QgcmFuZ2VFcnJvciA9ICguLi5hcmdzKSA9PiB7XG4gIHJldHVybiBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCByYW5nZSBhcmd1bWVudHM6ICcgKyB1dGlsLmluc3BlY3QoLi4uYXJncykpO1xufTtcblxuY29uc3QgaW52YWxpZFJhbmdlID0gKHN0YXJ0LCBlbmQsIG9wdGlvbnMpID0+IHtcbiAgaWYgKG9wdGlvbnMuc3RyaWN0UmFuZ2VzID09PSB0cnVlKSB0aHJvdyByYW5nZUVycm9yKFtzdGFydCwgZW5kXSk7XG4gIHJldHVybiBbXTtcbn07XG5cbmNvbnN0IGludmFsaWRTdGVwID0gKHN0ZXAsIG9wdGlvbnMpID0+IHtcbiAgaWYgKG9wdGlvbnMuc3RyaWN0UmFuZ2VzID09PSB0cnVlKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgc3RlcCBcIiR7c3RlcH1cIiB0byBiZSBhIG51bWJlcmApO1xuICB9XG4gIHJldHVybiBbXTtcbn07XG5cbmNvbnN0IGZpbGxOdW1iZXJzID0gKHN0YXJ0LCBlbmQsIHN0ZXAgPSAxLCBvcHRpb25zID0ge30pID0+IHtcbiAgbGV0IGEgPSBOdW1iZXIoc3RhcnQpO1xuICBsZXQgYiA9IE51bWJlcihlbmQpO1xuXG4gIGlmICghTnVtYmVyLmlzSW50ZWdlcihhKSB8fCAhTnVtYmVyLmlzSW50ZWdlcihiKSkge1xuICAgIGlmIChvcHRpb25zLnN0cmljdFJhbmdlcyA9PT0gdHJ1ZSkgdGhyb3cgcmFuZ2VFcnJvcihbc3RhcnQsIGVuZF0pO1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8vIGZpeCBuZWdhdGl2ZSB6ZXJvXG4gIGlmIChhID09PSAwKSBhID0gMDtcbiAgaWYgKGIgPT09IDApIGIgPSAwO1xuXG4gIGxldCBkZXNjZW5kaW5nID0gYSA+IGI7XG4gIGxldCBzdGFydFN0cmluZyA9IFN0cmluZyhzdGFydCk7XG4gIGxldCBlbmRTdHJpbmcgPSBTdHJpbmcoZW5kKTtcbiAgbGV0IHN0ZXBTdHJpbmcgPSBTdHJpbmcoc3RlcCk7XG4gIHN0ZXAgPSBNYXRoLm1heChNYXRoLmFicyhzdGVwKSwgMSk7XG5cbiAgbGV0IHBhZGRlZCA9IHplcm9zKHN0YXJ0U3RyaW5nKSB8fCB6ZXJvcyhlbmRTdHJpbmcpIHx8IHplcm9zKHN0ZXBTdHJpbmcpO1xuICBsZXQgbWF4TGVuID0gcGFkZGVkID8gTWF0aC5tYXgoc3RhcnRTdHJpbmcubGVuZ3RoLCBlbmRTdHJpbmcubGVuZ3RoLCBzdGVwU3RyaW5nLmxlbmd0aCkgOiAwO1xuICBsZXQgdG9OdW1iZXIgPSBwYWRkZWQgPT09IGZhbHNlICYmIHN0cmluZ2lmeShzdGFydCwgZW5kLCBvcHRpb25zKSA9PT0gZmFsc2U7XG4gIGxldCBmb3JtYXQgPSBvcHRpb25zLnRyYW5zZm9ybSB8fCB0cmFuc2Zvcm0odG9OdW1iZXIpO1xuXG4gIGlmIChvcHRpb25zLnRvUmVnZXggJiYgc3RlcCA9PT0gMSkge1xuICAgIHJldHVybiB0b1JhbmdlKHRvTWF4TGVuKHN0YXJ0LCBtYXhMZW4pLCB0b01heExlbihlbmQsIG1heExlbiksIHRydWUsIG9wdGlvbnMpO1xuICB9XG5cbiAgbGV0IHBhcnRzID0geyBuZWdhdGl2ZXM6IFtdLCBwb3NpdGl2ZXM6IFtdIH07XG4gIGxldCBwdXNoID0gbnVtID0+IHBhcnRzW251bSA8IDAgPyAnbmVnYXRpdmVzJyA6ICdwb3NpdGl2ZXMnXS5wdXNoKE1hdGguYWJzKG51bSkpO1xuICBsZXQgcmFuZ2UgPSBbXTtcbiAgbGV0IGluZGV4ID0gMDtcblxuICB3aGlsZSAoZGVzY2VuZGluZyA/IGEgPj0gYiA6IGEgPD0gYikge1xuICAgIGlmIChvcHRpb25zLnRvUmVnZXggPT09IHRydWUgJiYgc3RlcCA+IDEpIHtcbiAgICAgIHB1c2goYSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJhbmdlLnB1c2gocGFkKGZvcm1hdChhLCBpbmRleCksIG1heExlbiwgdG9OdW1iZXIpKTtcbiAgICB9XG4gICAgYSA9IGRlc2NlbmRpbmcgPyBhIC0gc3RlcCA6IGEgKyBzdGVwO1xuICAgIGluZGV4Kys7XG4gIH1cblxuICBpZiAob3B0aW9ucy50b1JlZ2V4ID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIHN0ZXAgPiAxXG4gICAgICA/IHRvU2VxdWVuY2UocGFydHMsIG9wdGlvbnMpXG4gICAgICA6IHRvUmVnZXgocmFuZ2UsIG51bGwsIHsgd3JhcDogZmFsc2UsIC4uLm9wdGlvbnMgfSk7XG4gIH1cblxuICByZXR1cm4gcmFuZ2U7XG59O1xuXG5jb25zdCBmaWxsTGV0dGVycyA9IChzdGFydCwgZW5kLCBzdGVwID0gMSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIGlmICgoIWlzTnVtYmVyKHN0YXJ0KSAmJiBzdGFydC5sZW5ndGggPiAxKSB8fCAoIWlzTnVtYmVyKGVuZCkgJiYgZW5kLmxlbmd0aCA+IDEpKSB7XG4gICAgcmV0dXJuIGludmFsaWRSYW5nZShzdGFydCwgZW5kLCBvcHRpb25zKTtcbiAgfVxuXG5cbiAgbGV0IGZvcm1hdCA9IG9wdGlvbnMudHJhbnNmb3JtIHx8ICh2YWwgPT4gU3RyaW5nLmZyb21DaGFyQ29kZSh2YWwpKTtcbiAgbGV0IGEgPSBgJHtzdGFydH1gLmNoYXJDb2RlQXQoMCk7XG4gIGxldCBiID0gYCR7ZW5kfWAuY2hhckNvZGVBdCgwKTtcblxuICBsZXQgZGVzY2VuZGluZyA9IGEgPiBiO1xuICBsZXQgbWluID0gTWF0aC5taW4oYSwgYik7XG4gIGxldCBtYXggPSBNYXRoLm1heChhLCBiKTtcblxuICBpZiAob3B0aW9ucy50b1JlZ2V4ICYmIHN0ZXAgPT09IDEpIHtcbiAgICByZXR1cm4gdG9SYW5nZShtaW4sIG1heCwgZmFsc2UsIG9wdGlvbnMpO1xuICB9XG5cbiAgbGV0IHJhbmdlID0gW107XG4gIGxldCBpbmRleCA9IDA7XG5cbiAgd2hpbGUgKGRlc2NlbmRpbmcgPyBhID49IGIgOiBhIDw9IGIpIHtcbiAgICByYW5nZS5wdXNoKGZvcm1hdChhLCBpbmRleCkpO1xuICAgIGEgPSBkZXNjZW5kaW5nID8gYSAtIHN0ZXAgOiBhICsgc3RlcDtcbiAgICBpbmRleCsrO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMudG9SZWdleCA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiB0b1JlZ2V4KHJhbmdlLCBudWxsLCB7IHdyYXA6IGZhbHNlLCBvcHRpb25zIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJhbmdlO1xufTtcblxuY29uc3QgZmlsbCA9IChzdGFydCwgZW5kLCBzdGVwLCBvcHRpb25zID0ge30pID0+IHtcbiAgaWYgKGVuZCA9PSBudWxsICYmIGlzVmFsaWRWYWx1ZShzdGFydCkpIHtcbiAgICByZXR1cm4gW3N0YXJ0XTtcbiAgfVxuXG4gIGlmICghaXNWYWxpZFZhbHVlKHN0YXJ0KSB8fCAhaXNWYWxpZFZhbHVlKGVuZCkpIHtcbiAgICByZXR1cm4gaW52YWxpZFJhbmdlKHN0YXJ0LCBlbmQsIG9wdGlvbnMpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGZpbGwoc3RhcnQsIGVuZCwgMSwgeyB0cmFuc2Zvcm06IHN0ZXAgfSk7XG4gIH1cblxuICBpZiAoaXNPYmplY3Qoc3RlcCkpIHtcbiAgICByZXR1cm4gZmlsbChzdGFydCwgZW5kLCAwLCBzdGVwKTtcbiAgfVxuXG4gIGxldCBvcHRzID0geyAuLi5vcHRpb25zIH07XG4gIGlmIChvcHRzLmNhcHR1cmUgPT09IHRydWUpIG9wdHMud3JhcCA9IHRydWU7XG4gIHN0ZXAgPSBzdGVwIHx8IG9wdHMuc3RlcCB8fCAxO1xuXG4gIGlmICghaXNOdW1iZXIoc3RlcCkpIHtcbiAgICBpZiAoc3RlcCAhPSBudWxsICYmICFpc09iamVjdChzdGVwKSkgcmV0dXJuIGludmFsaWRTdGVwKHN0ZXAsIG9wdHMpO1xuICAgIHJldHVybiBmaWxsKHN0YXJ0LCBlbmQsIDEsIHN0ZXApO1xuICB9XG5cbiAgaWYgKGlzTnVtYmVyKHN0YXJ0KSAmJiBpc051bWJlcihlbmQpKSB7XG4gICAgcmV0dXJuIGZpbGxOdW1iZXJzKHN0YXJ0LCBlbmQsIHN0ZXAsIG9wdHMpO1xuICB9XG5cbiAgcmV0dXJuIGZpbGxMZXR0ZXJzKHN0YXJ0LCBlbmQsIE1hdGgubWF4KE1hdGguYWJzKHN0ZXApLCAxKSwgb3B0cyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZpbGw7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmaWxsID0gcmVxdWlyZSgnZmlsbC1yYW5nZScpO1xuY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbmNvbnN0IGNvbXBpbGUgPSAoYXN0LCBvcHRpb25zID0ge30pID0+IHtcbiAgbGV0IHdhbGsgPSAobm9kZSwgcGFyZW50ID0ge30pID0+IHtcbiAgICBsZXQgaW52YWxpZEJsb2NrID0gdXRpbHMuaXNJbnZhbGlkQnJhY2UocGFyZW50KTtcbiAgICBsZXQgaW52YWxpZE5vZGUgPSBub2RlLmludmFsaWQgPT09IHRydWUgJiYgb3B0aW9ucy5lc2NhcGVJbnZhbGlkID09PSB0cnVlO1xuICAgIGxldCBpbnZhbGlkID0gaW52YWxpZEJsb2NrID09PSB0cnVlIHx8IGludmFsaWROb2RlID09PSB0cnVlO1xuICAgIGxldCBwcmVmaXggPSBvcHRpb25zLmVzY2FwZUludmFsaWQgPT09IHRydWUgPyAnXFxcXCcgOiAnJztcbiAgICBsZXQgb3V0cHV0ID0gJyc7XG5cbiAgICBpZiAobm9kZS5pc09wZW4gPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBwcmVmaXggKyBub2RlLnZhbHVlO1xuICAgIH1cbiAgICBpZiAobm9kZS5pc0Nsb3NlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gcHJlZml4ICsgbm9kZS52YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAobm9kZS50eXBlID09PSAnb3BlbicpIHtcbiAgICAgIHJldHVybiBpbnZhbGlkID8gKHByZWZpeCArIG5vZGUudmFsdWUpIDogJygnO1xuICAgIH1cblxuICAgIGlmIChub2RlLnR5cGUgPT09ICdjbG9zZScpIHtcbiAgICAgIHJldHVybiBpbnZhbGlkID8gKHByZWZpeCArIG5vZGUudmFsdWUpIDogJyknO1xuICAgIH1cblxuICAgIGlmIChub2RlLnR5cGUgPT09ICdjb21tYScpIHtcbiAgICAgIHJldHVybiBub2RlLnByZXYudHlwZSA9PT0gJ2NvbW1hJyA/ICcnIDogKGludmFsaWQgPyBub2RlLnZhbHVlIDogJ3wnKTtcbiAgICB9XG5cbiAgICBpZiAobm9kZS52YWx1ZSkge1xuICAgICAgcmV0dXJuIG5vZGUudmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUubm9kZXMgJiYgbm9kZS5yYW5nZXMgPiAwKSB7XG4gICAgICBsZXQgYXJncyA9IHV0aWxzLnJlZHVjZShub2RlLm5vZGVzKTtcbiAgICAgIGxldCByYW5nZSA9IGZpbGwoLi4uYXJncywgeyAuLi5vcHRpb25zLCB3cmFwOiBmYWxzZSwgdG9SZWdleDogdHJ1ZSB9KTtcblxuICAgICAgaWYgKHJhbmdlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gYXJncy5sZW5ndGggPiAxICYmIHJhbmdlLmxlbmd0aCA+IDEgPyBgKCR7cmFuZ2V9KWAgOiByYW5nZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobm9kZS5ub2Rlcykge1xuICAgICAgZm9yIChsZXQgY2hpbGQgb2Ygbm9kZS5ub2Rlcykge1xuICAgICAgICBvdXRwdXQgKz0gd2FsayhjaGlsZCwgbm9kZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH07XG5cbiAgcmV0dXJuIHdhbGsoYXN0KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29tcGlsZTtcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGZpbGwgPSByZXF1aXJlKCdmaWxsLXJhbmdlJyk7XG5jb25zdCBzdHJpbmdpZnkgPSByZXF1aXJlKCcuL3N0cmluZ2lmeScpO1xuY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbmNvbnN0IGFwcGVuZCA9IChxdWV1ZSA9ICcnLCBzdGFzaCA9ICcnLCBlbmNsb3NlID0gZmFsc2UpID0+IHtcbiAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gIHF1ZXVlID0gW10uY29uY2F0KHF1ZXVlKTtcbiAgc3Rhc2ggPSBbXS5jb25jYXQoc3Rhc2gpO1xuXG4gIGlmICghc3Rhc2gubGVuZ3RoKSByZXR1cm4gcXVldWU7XG4gIGlmICghcXVldWUubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGVuY2xvc2UgPyB1dGlscy5mbGF0dGVuKHN0YXNoKS5tYXAoZWxlID0+IGB7JHtlbGV9fWApIDogc3Rhc2g7XG4gIH1cblxuICBmb3IgKGxldCBpdGVtIG9mIHF1ZXVlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICAgIGZvciAobGV0IHZhbHVlIG9mIGl0ZW0pIHtcbiAgICAgICAgcmVzdWx0LnB1c2goYXBwZW5kKHZhbHVlLCBzdGFzaCwgZW5jbG9zZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBlbGUgb2Ygc3Rhc2gpIHtcbiAgICAgICAgaWYgKGVuY2xvc2UgPT09IHRydWUgJiYgdHlwZW9mIGVsZSA9PT0gJ3N0cmluZycpIGVsZSA9IGB7JHtlbGV9fWA7XG4gICAgICAgIHJlc3VsdC5wdXNoKEFycmF5LmlzQXJyYXkoZWxlKSA/IGFwcGVuZChpdGVtLCBlbGUsIGVuY2xvc2UpIDogKGl0ZW0gKyBlbGUpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHV0aWxzLmZsYXR0ZW4ocmVzdWx0KTtcbn07XG5cbmNvbnN0IGV4cGFuZCA9IChhc3QsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBsZXQgcmFuZ2VMaW1pdCA9IG9wdGlvbnMucmFuZ2VMaW1pdCA9PT0gdm9pZCAwID8gMTAwMCA6IG9wdGlvbnMucmFuZ2VMaW1pdDtcblxuICBsZXQgd2FsayA9IChub2RlLCBwYXJlbnQgPSB7fSkgPT4ge1xuICAgIG5vZGUucXVldWUgPSBbXTtcblxuICAgIGxldCBwID0gcGFyZW50O1xuICAgIGxldCBxID0gcGFyZW50LnF1ZXVlO1xuXG4gICAgd2hpbGUgKHAudHlwZSAhPT0gJ2JyYWNlJyAmJiBwLnR5cGUgIT09ICdyb290JyAmJiBwLnBhcmVudCkge1xuICAgICAgcCA9IHAucGFyZW50O1xuICAgICAgcSA9IHAucXVldWU7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUuaW52YWxpZCB8fCBub2RlLmRvbGxhcikge1xuICAgICAgcS5wdXNoKGFwcGVuZChxLnBvcCgpLCBzdHJpbmdpZnkobm9kZSwgb3B0aW9ucykpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobm9kZS50eXBlID09PSAnYnJhY2UnICYmIG5vZGUuaW52YWxpZCAhPT0gdHJ1ZSAmJiBub2RlLm5vZGVzLmxlbmd0aCA9PT0gMikge1xuICAgICAgcS5wdXNoKGFwcGVuZChxLnBvcCgpLCBbJ3t9J10pKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5ub2RlcyAmJiBub2RlLnJhbmdlcyA+IDApIHtcbiAgICAgIGxldCBhcmdzID0gdXRpbHMucmVkdWNlKG5vZGUubm9kZXMpO1xuXG4gICAgICBpZiAodXRpbHMuZXhjZWVkc0xpbWl0KC4uLmFyZ3MsIG9wdGlvbnMuc3RlcCwgcmFuZ2VMaW1pdCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2V4cGFuZGVkIGFycmF5IGxlbmd0aCBleGNlZWRzIHJhbmdlIGxpbWl0LiBVc2Ugb3B0aW9ucy5yYW5nZUxpbWl0IHRvIGluY3JlYXNlIG9yIGRpc2FibGUgdGhlIGxpbWl0LicpO1xuICAgICAgfVxuXG4gICAgICBsZXQgcmFuZ2UgPSBmaWxsKC4uLmFyZ3MsIG9wdGlvbnMpO1xuICAgICAgaWYgKHJhbmdlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByYW5nZSA9IHN0cmluZ2lmeShub2RlLCBvcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgcS5wdXNoKGFwcGVuZChxLnBvcCgpLCByYW5nZSkpO1xuICAgICAgbm9kZS5ub2RlcyA9IFtdO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBlbmNsb3NlID0gdXRpbHMuZW5jbG9zZUJyYWNlKG5vZGUpO1xuICAgIGxldCBxdWV1ZSA9IG5vZGUucXVldWU7XG4gICAgbGV0IGJsb2NrID0gbm9kZTtcblxuICAgIHdoaWxlIChibG9jay50eXBlICE9PSAnYnJhY2UnICYmIGJsb2NrLnR5cGUgIT09ICdyb290JyAmJiBibG9jay5wYXJlbnQpIHtcbiAgICAgIGJsb2NrID0gYmxvY2sucGFyZW50O1xuICAgICAgcXVldWUgPSBibG9jay5xdWV1ZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUubm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IG5vZGUubm9kZXNbaV07XG5cbiAgICAgIGlmIChjaGlsZC50eXBlID09PSAnY29tbWEnICYmIG5vZGUudHlwZSA9PT0gJ2JyYWNlJykge1xuICAgICAgICBpZiAoaSA9PT0gMSkgcXVldWUucHVzaCgnJyk7XG4gICAgICAgIHF1ZXVlLnB1c2goJycpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkLnR5cGUgPT09ICdjbG9zZScpIHtcbiAgICAgICAgcS5wdXNoKGFwcGVuZChxLnBvcCgpLCBxdWV1ZSwgZW5jbG9zZSkpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkLnZhbHVlICYmIGNoaWxkLnR5cGUgIT09ICdvcGVuJykge1xuICAgICAgICBxdWV1ZS5wdXNoKGFwcGVuZChxdWV1ZS5wb3AoKSwgY2hpbGQudmFsdWUpKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGlsZC5ub2Rlcykge1xuICAgICAgICB3YWxrKGNoaWxkLCBub2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcXVldWU7XG4gIH07XG5cbiAgcmV0dXJuIHV0aWxzLmZsYXR0ZW4od2Fsayhhc3QpKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwYW5kO1xuIiwgIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIE1BWF9MRU5HVEg6IDEwMjQgKiA2NCxcblxuICAvLyBEaWdpdHNcbiAgQ0hBUl8wOiAnMCcsIC8qIDAgKi9cbiAgQ0hBUl85OiAnOScsIC8qIDkgKi9cblxuICAvLyBBbHBoYWJldCBjaGFycy5cbiAgQ0hBUl9VUFBFUkNBU0VfQTogJ0EnLCAvKiBBICovXG4gIENIQVJfTE9XRVJDQVNFX0E6ICdhJywgLyogYSAqL1xuICBDSEFSX1VQUEVSQ0FTRV9aOiAnWicsIC8qIFogKi9cbiAgQ0hBUl9MT1dFUkNBU0VfWjogJ3onLCAvKiB6ICovXG5cbiAgQ0hBUl9MRUZUX1BBUkVOVEhFU0VTOiAnKCcsIC8qICggKi9cbiAgQ0hBUl9SSUdIVF9QQVJFTlRIRVNFUzogJyknLCAvKiApICovXG5cbiAgQ0hBUl9BU1RFUklTSzogJyonLCAvKiAqICovXG5cbiAgLy8gTm9uLWFscGhhYmV0aWMgY2hhcnMuXG4gIENIQVJfQU1QRVJTQU5EOiAnJicsIC8qICYgKi9cbiAgQ0hBUl9BVDogJ0AnLCAvKiBAICovXG4gIENIQVJfQkFDS1NMQVNIOiAnXFxcXCcsIC8qIFxcICovXG4gIENIQVJfQkFDS1RJQ0s6ICdgJywgLyogYCAqL1xuICBDSEFSX0NBUlJJQUdFX1JFVFVSTjogJ1xccicsIC8qIFxcciAqL1xuICBDSEFSX0NJUkNVTUZMRVhfQUNDRU5UOiAnXicsIC8qIF4gKi9cbiAgQ0hBUl9DT0xPTjogJzonLCAvKiA6ICovXG4gIENIQVJfQ09NTUE6ICcsJywgLyogLCAqL1xuICBDSEFSX0RPTExBUjogJyQnLCAvKiAuICovXG4gIENIQVJfRE9UOiAnLicsIC8qIC4gKi9cbiAgQ0hBUl9ET1VCTEVfUVVPVEU6ICdcIicsIC8qIFwiICovXG4gIENIQVJfRVFVQUw6ICc9JywgLyogPSAqL1xuICBDSEFSX0VYQ0xBTUFUSU9OX01BUks6ICchJywgLyogISAqL1xuICBDSEFSX0ZPUk1fRkVFRDogJ1xcZicsIC8qIFxcZiAqL1xuICBDSEFSX0ZPUldBUkRfU0xBU0g6ICcvJywgLyogLyAqL1xuICBDSEFSX0hBU0g6ICcjJywgLyogIyAqL1xuICBDSEFSX0hZUEhFTl9NSU5VUzogJy0nLCAvKiAtICovXG4gIENIQVJfTEVGVF9BTkdMRV9CUkFDS0VUOiAnPCcsIC8qIDwgKi9cbiAgQ0hBUl9MRUZUX0NVUkxZX0JSQUNFOiAneycsIC8qIHsgKi9cbiAgQ0hBUl9MRUZUX1NRVUFSRV9CUkFDS0VUOiAnWycsIC8qIFsgKi9cbiAgQ0hBUl9MSU5FX0ZFRUQ6ICdcXG4nLCAvKiBcXG4gKi9cbiAgQ0hBUl9OT19CUkVBS19TUEFDRTogJ1xcdTAwQTAnLCAvKiBcXHUwMEEwICovXG4gIENIQVJfUEVSQ0VOVDogJyUnLCAvKiAlICovXG4gIENIQVJfUExVUzogJysnLCAvKiArICovXG4gIENIQVJfUVVFU1RJT05fTUFSSzogJz8nLCAvKiA/ICovXG4gIENIQVJfUklHSFRfQU5HTEVfQlJBQ0tFVDogJz4nLCAvKiA+ICovXG4gIENIQVJfUklHSFRfQ1VSTFlfQlJBQ0U6ICd9JywgLyogfSAqL1xuICBDSEFSX1JJR0hUX1NRVUFSRV9CUkFDS0VUOiAnXScsIC8qIF0gKi9cbiAgQ0hBUl9TRU1JQ09MT046ICc7JywgLyogOyAqL1xuICBDSEFSX1NJTkdMRV9RVU9URTogJ1xcJycsIC8qICcgKi9cbiAgQ0hBUl9TUEFDRTogJyAnLCAvKiAgICovXG4gIENIQVJfVEFCOiAnXFx0JywgLyogXFx0ICovXG4gIENIQVJfVU5ERVJTQ09SRTogJ18nLCAvKiBfICovXG4gIENIQVJfVkVSVElDQUxfTElORTogJ3wnLCAvKiB8ICovXG4gIENIQVJfWkVST19XSURUSF9OT0JSRUFLX1NQQUNFOiAnXFx1RkVGRicgLyogXFx1RkVGRiAqL1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHN0cmluZ2lmeSA9IHJlcXVpcmUoJy4vc3RyaW5naWZ5Jyk7XG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3Qge1xuICBNQVhfTEVOR1RILFxuICBDSEFSX0JBQ0tTTEFTSCwgLyogXFwgKi9cbiAgQ0hBUl9CQUNLVElDSywgLyogYCAqL1xuICBDSEFSX0NPTU1BLCAvKiAsICovXG4gIENIQVJfRE9ULCAvKiAuICovXG4gIENIQVJfTEVGVF9QQVJFTlRIRVNFUywgLyogKCAqL1xuICBDSEFSX1JJR0hUX1BBUkVOVEhFU0VTLCAvKiApICovXG4gIENIQVJfTEVGVF9DVVJMWV9CUkFDRSwgLyogeyAqL1xuICBDSEFSX1JJR0hUX0NVUkxZX0JSQUNFLCAvKiB9ICovXG4gIENIQVJfTEVGVF9TUVVBUkVfQlJBQ0tFVCwgLyogWyAqL1xuICBDSEFSX1JJR0hUX1NRVUFSRV9CUkFDS0VULCAvKiBdICovXG4gIENIQVJfRE9VQkxFX1FVT1RFLCAvKiBcIiAqL1xuICBDSEFSX1NJTkdMRV9RVU9URSwgLyogJyAqL1xuICBDSEFSX05PX0JSRUFLX1NQQUNFLFxuICBDSEFSX1pFUk9fV0lEVEhfTk9CUkVBS19TUEFDRVxufSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbi8qKlxuICogcGFyc2VcbiAqL1xuXG5jb25zdCBwYXJzZSA9IChpbnB1dCwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIGlmICh0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBzdHJpbmcnKTtcbiAgfVxuXG4gIGxldCBvcHRzID0gb3B0aW9ucyB8fCB7fTtcbiAgbGV0IG1heCA9IHR5cGVvZiBvcHRzLm1heExlbmd0aCA9PT0gJ251bWJlcicgPyBNYXRoLm1pbihNQVhfTEVOR1RILCBvcHRzLm1heExlbmd0aCkgOiBNQVhfTEVOR1RIO1xuICBpZiAoaW5wdXQubGVuZ3RoID4gbWF4KSB7XG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBJbnB1dCBsZW5ndGggKCR7aW5wdXQubGVuZ3RofSksIGV4Y2VlZHMgbWF4IGNoYXJhY3RlcnMgKCR7bWF4fSlgKTtcbiAgfVxuXG4gIGxldCBhc3QgPSB7IHR5cGU6ICdyb290JywgaW5wdXQsIG5vZGVzOiBbXSB9O1xuICBsZXQgc3RhY2sgPSBbYXN0XTtcbiAgbGV0IGJsb2NrID0gYXN0O1xuICBsZXQgcHJldiA9IGFzdDtcbiAgbGV0IGJyYWNrZXRzID0gMDtcbiAgbGV0IGxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgbGV0IGluZGV4ID0gMDtcbiAgbGV0IGRlcHRoID0gMDtcbiAgbGV0IHZhbHVlO1xuICBsZXQgbWVtbyA9IHt9O1xuXG4gIC8qKlxuICAgKiBIZWxwZXJzXG4gICAqL1xuXG4gIGNvbnN0IGFkdmFuY2UgPSAoKSA9PiBpbnB1dFtpbmRleCsrXTtcbiAgY29uc3QgcHVzaCA9IG5vZGUgPT4ge1xuICAgIGlmIChub2RlLnR5cGUgPT09ICd0ZXh0JyAmJiBwcmV2LnR5cGUgPT09ICdkb3QnKSB7XG4gICAgICBwcmV2LnR5cGUgPSAndGV4dCc7XG4gICAgfVxuXG4gICAgaWYgKHByZXYgJiYgcHJldi50eXBlID09PSAndGV4dCcgJiYgbm9kZS50eXBlID09PSAndGV4dCcpIHtcbiAgICAgIHByZXYudmFsdWUgKz0gbm9kZS52YWx1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBibG9jay5ub2Rlcy5wdXNoKG5vZGUpO1xuICAgIG5vZGUucGFyZW50ID0gYmxvY2s7XG4gICAgbm9kZS5wcmV2ID0gcHJldjtcbiAgICBwcmV2ID0gbm9kZTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcblxuICBwdXNoKHsgdHlwZTogJ2JvcycgfSk7XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgYmxvY2sgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcbiAgICB2YWx1ZSA9IGFkdmFuY2UoKTtcblxuICAgIC8qKlxuICAgICAqIEludmFsaWQgY2hhcnNcbiAgICAgKi9cblxuICAgIGlmICh2YWx1ZSA9PT0gQ0hBUl9aRVJPX1dJRFRIX05PQlJFQUtfU1BBQ0UgfHwgdmFsdWUgPT09IENIQVJfTk9fQlJFQUtfU1BBQ0UpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVzY2FwZWQgY2hhcnNcbiAgICAgKi9cblxuICAgIGlmICh2YWx1ZSA9PT0gQ0hBUl9CQUNLU0xBU0gpIHtcbiAgICAgIHB1c2goeyB0eXBlOiAndGV4dCcsIHZhbHVlOiAob3B0aW9ucy5rZWVwRXNjYXBpbmcgPyB2YWx1ZSA6ICcnKSArIGFkdmFuY2UoKSB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJpZ2h0IHNxdWFyZSBicmFja2V0IChsaXRlcmFsKTogJ10nXG4gICAgICovXG5cbiAgICBpZiAodmFsdWUgPT09IENIQVJfUklHSFRfU1FVQVJFX0JSQUNLRVQpIHtcbiAgICAgIHB1c2goeyB0eXBlOiAndGV4dCcsIHZhbHVlOiAnXFxcXCcgKyB2YWx1ZSB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExlZnQgc3F1YXJlIGJyYWNrZXQ6ICdbJ1xuICAgICAqL1xuXG4gICAgaWYgKHZhbHVlID09PSBDSEFSX0xFRlRfU1FVQVJFX0JSQUNLRVQpIHtcbiAgICAgIGJyYWNrZXRzKys7XG5cbiAgICAgIGxldCBjbG9zZWQgPSB0cnVlO1xuICAgICAgbGV0IG5leHQ7XG5cbiAgICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCAmJiAobmV4dCA9IGFkdmFuY2UoKSkpIHtcbiAgICAgICAgdmFsdWUgKz0gbmV4dDtcblxuICAgICAgICBpZiAobmV4dCA9PT0gQ0hBUl9MRUZUX1NRVUFSRV9CUkFDS0VUKSB7XG4gICAgICAgICAgYnJhY2tldHMrKztcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0ID09PSBDSEFSX0JBQ0tTTEFTSCkge1xuICAgICAgICAgIHZhbHVlICs9IGFkdmFuY2UoKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0ID09PSBDSEFSX1JJR0hUX1NRVUFSRV9CUkFDS0VUKSB7XG4gICAgICAgICAgYnJhY2tldHMtLTtcblxuICAgICAgICAgIGlmIChicmFja2V0cyA9PT0gMCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHB1c2goeyB0eXBlOiAndGV4dCcsIHZhbHVlIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyZW50aGVzZXNcbiAgICAgKi9cblxuICAgIGlmICh2YWx1ZSA9PT0gQ0hBUl9MRUZUX1BBUkVOVEhFU0VTKSB7XG4gICAgICBibG9jayA9IHB1c2goeyB0eXBlOiAncGFyZW4nLCBub2RlczogW10gfSk7XG4gICAgICBzdGFjay5wdXNoKGJsb2NrKTtcbiAgICAgIHB1c2goeyB0eXBlOiAndGV4dCcsIHZhbHVlIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlID09PSBDSEFSX1JJR0hUX1BBUkVOVEhFU0VTKSB7XG4gICAgICBpZiAoYmxvY2sudHlwZSAhPT0gJ3BhcmVuJykge1xuICAgICAgICBwdXNoKHsgdHlwZTogJ3RleHQnLCB2YWx1ZSB9KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBibG9jayA9IHN0YWNrLnBvcCgpO1xuICAgICAgcHVzaCh7IHR5cGU6ICd0ZXh0JywgdmFsdWUgfSk7XG4gICAgICBibG9jayA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUXVvdGVzOiAnfFwifGBcbiAgICAgKi9cblxuICAgIGlmICh2YWx1ZSA9PT0gQ0hBUl9ET1VCTEVfUVVPVEUgfHwgdmFsdWUgPT09IENIQVJfU0lOR0xFX1FVT1RFIHx8IHZhbHVlID09PSBDSEFSX0JBQ0tUSUNLKSB7XG4gICAgICBsZXQgb3BlbiA9IHZhbHVlO1xuICAgICAgbGV0IG5leHQ7XG5cbiAgICAgIGlmIChvcHRpb25zLmtlZXBRdW90ZXMgIT09IHRydWUpIHtcbiAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoICYmIChuZXh0ID0gYWR2YW5jZSgpKSkge1xuICAgICAgICBpZiAobmV4dCA9PT0gQ0hBUl9CQUNLU0xBU0gpIHtcbiAgICAgICAgICB2YWx1ZSArPSBuZXh0ICsgYWR2YW5jZSgpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5leHQgPT09IG9wZW4pIHtcbiAgICAgICAgICBpZiAob3B0aW9ucy5rZWVwUXVvdGVzID09PSB0cnVlKSB2YWx1ZSArPSBuZXh0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWUgKz0gbmV4dDtcbiAgICAgIH1cblxuICAgICAgcHVzaCh7IHR5cGU6ICd0ZXh0JywgdmFsdWUgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMZWZ0IGN1cmx5IGJyYWNlOiAneydcbiAgICAgKi9cblxuICAgIGlmICh2YWx1ZSA9PT0gQ0hBUl9MRUZUX0NVUkxZX0JSQUNFKSB7XG4gICAgICBkZXB0aCsrO1xuXG4gICAgICBsZXQgZG9sbGFyID0gcHJldi52YWx1ZSAmJiBwcmV2LnZhbHVlLnNsaWNlKC0xKSA9PT0gJyQnIHx8IGJsb2NrLmRvbGxhciA9PT0gdHJ1ZTtcbiAgICAgIGxldCBicmFjZSA9IHtcbiAgICAgICAgdHlwZTogJ2JyYWNlJyxcbiAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgY2xvc2U6IGZhbHNlLFxuICAgICAgICBkb2xsYXIsXG4gICAgICAgIGRlcHRoLFxuICAgICAgICBjb21tYXM6IDAsXG4gICAgICAgIHJhbmdlczogMCxcbiAgICAgICAgbm9kZXM6IFtdXG4gICAgICB9O1xuXG4gICAgICBibG9jayA9IHB1c2goYnJhY2UpO1xuICAgICAgc3RhY2sucHVzaChibG9jayk7XG4gICAgICBwdXNoKHsgdHlwZTogJ29wZW4nLCB2YWx1ZSB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJpZ2h0IGN1cmx5IGJyYWNlOiAnfSdcbiAgICAgKi9cblxuICAgIGlmICh2YWx1ZSA9PT0gQ0hBUl9SSUdIVF9DVVJMWV9CUkFDRSkge1xuICAgICAgaWYgKGJsb2NrLnR5cGUgIT09ICdicmFjZScpIHtcbiAgICAgICAgcHVzaCh7IHR5cGU6ICd0ZXh0JywgdmFsdWUgfSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgdHlwZSA9ICdjbG9zZSc7XG4gICAgICBibG9jayA9IHN0YWNrLnBvcCgpO1xuICAgICAgYmxvY2suY2xvc2UgPSB0cnVlO1xuXG4gICAgICBwdXNoKHsgdHlwZSwgdmFsdWUgfSk7XG4gICAgICBkZXB0aC0tO1xuXG4gICAgICBibG9jayA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tbWE6ICcsJ1xuICAgICAqL1xuXG4gICAgaWYgKHZhbHVlID09PSBDSEFSX0NPTU1BICYmIGRlcHRoID4gMCkge1xuICAgICAgaWYgKGJsb2NrLnJhbmdlcyA+IDApIHtcbiAgICAgICAgYmxvY2sucmFuZ2VzID0gMDtcbiAgICAgICAgbGV0IG9wZW4gPSBibG9jay5ub2Rlcy5zaGlmdCgpO1xuICAgICAgICBibG9jay5ub2RlcyA9IFtvcGVuLCB7IHR5cGU6ICd0ZXh0JywgdmFsdWU6IHN0cmluZ2lmeShibG9jaykgfV07XG4gICAgICB9XG5cbiAgICAgIHB1c2goeyB0eXBlOiAnY29tbWEnLCB2YWx1ZSB9KTtcbiAgICAgIGJsb2NrLmNvbW1hcysrO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRG90OiAnLidcbiAgICAgKi9cblxuICAgIGlmICh2YWx1ZSA9PT0gQ0hBUl9ET1QgJiYgZGVwdGggPiAwICYmIGJsb2NrLmNvbW1hcyA9PT0gMCkge1xuICAgICAgbGV0IHNpYmxpbmdzID0gYmxvY2subm9kZXM7XG5cbiAgICAgIGlmIChkZXB0aCA9PT0gMCB8fCBzaWJsaW5ncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcHVzaCh7IHR5cGU6ICd0ZXh0JywgdmFsdWUgfSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJldi50eXBlID09PSAnZG90Jykge1xuICAgICAgICBibG9jay5yYW5nZSA9IFtdO1xuICAgICAgICBwcmV2LnZhbHVlICs9IHZhbHVlO1xuICAgICAgICBwcmV2LnR5cGUgPSAncmFuZ2UnO1xuXG4gICAgICAgIGlmIChibG9jay5ub2Rlcy5sZW5ndGggIT09IDMgJiYgYmxvY2subm9kZXMubGVuZ3RoICE9PSA1KSB7XG4gICAgICAgICAgYmxvY2suaW52YWxpZCA9IHRydWU7XG4gICAgICAgICAgYmxvY2sucmFuZ2VzID0gMDtcbiAgICAgICAgICBwcmV2LnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBibG9jay5yYW5nZXMrKztcbiAgICAgICAgYmxvY2suYXJncyA9IFtdO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByZXYudHlwZSA9PT0gJ3JhbmdlJykge1xuICAgICAgICBzaWJsaW5ncy5wb3AoKTtcblxuICAgICAgICBsZXQgYmVmb3JlID0gc2libGluZ3Nbc2libGluZ3MubGVuZ3RoIC0gMV07XG4gICAgICAgIGJlZm9yZS52YWx1ZSArPSBwcmV2LnZhbHVlICsgdmFsdWU7XG4gICAgICAgIHByZXYgPSBiZWZvcmU7XG4gICAgICAgIGJsb2NrLnJhbmdlcy0tO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgcHVzaCh7IHR5cGU6ICdkb3QnLCB2YWx1ZSB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRleHRcbiAgICAgKi9cblxuICAgIHB1c2goeyB0eXBlOiAndGV4dCcsIHZhbHVlIH0pO1xuICB9XG5cbiAgLy8gTWFyayBpbWJhbGFuY2VkIGJyYWNlcyBhbmQgYnJhY2tldHMgYXMgaW52YWxpZFxuICBkbyB7XG4gICAgYmxvY2sgPSBzdGFjay5wb3AoKTtcblxuICAgIGlmIChibG9jay50eXBlICE9PSAncm9vdCcpIHtcbiAgICAgIGJsb2NrLm5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIGlmICghbm9kZS5ub2Rlcykge1xuICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdvcGVuJykgbm9kZS5pc09wZW4gPSB0cnVlO1xuICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdjbG9zZScpIG5vZGUuaXNDbG9zZSA9IHRydWU7XG4gICAgICAgICAgaWYgKCFub2RlLm5vZGVzKSBub2RlLnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgbm9kZS5pbnZhbGlkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIGdldCB0aGUgbG9jYXRpb24gb2YgdGhlIGJsb2NrIG9uIHBhcmVudC5ub2RlcyAoYmxvY2sncyBzaWJsaW5ncylcbiAgICAgIGxldCBwYXJlbnQgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcbiAgICAgIGxldCBpbmRleCA9IHBhcmVudC5ub2Rlcy5pbmRleE9mKGJsb2NrKTtcbiAgICAgIC8vIHJlcGxhY2UgdGhlIChpbnZhbGlkKSBibG9jayB3aXRoIGl0J3Mgbm9kZXNcbiAgICAgIHBhcmVudC5ub2Rlcy5zcGxpY2UoaW5kZXgsIDEsIC4uLmJsb2NrLm5vZGVzKTtcbiAgICB9XG4gIH0gd2hpbGUgKHN0YWNrLmxlbmd0aCA+IDApO1xuXG4gIHB1c2goeyB0eXBlOiAnZW9zJyB9KTtcbiAgcmV0dXJuIGFzdDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBzdHJpbmdpZnkgPSByZXF1aXJlKCcuL2xpYi9zdHJpbmdpZnknKTtcbmNvbnN0IGNvbXBpbGUgPSByZXF1aXJlKCcuL2xpYi9jb21waWxlJyk7XG5jb25zdCBleHBhbmQgPSByZXF1aXJlKCcuL2xpYi9leHBhbmQnKTtcbmNvbnN0IHBhcnNlID0gcmVxdWlyZSgnLi9saWIvcGFyc2UnKTtcblxuLyoqXG4gKiBFeHBhbmQgdGhlIGdpdmVuIHBhdHRlcm4gb3IgY3JlYXRlIGEgcmVnZXgtY29tcGF0aWJsZSBzdHJpbmcuXG4gKlxuICogYGBganNcbiAqIGNvbnN0IGJyYWNlcyA9IHJlcXVpcmUoJ2JyYWNlcycpO1xuICogY29uc29sZS5sb2coYnJhY2VzKCd7YSxiLGN9JywgeyBjb21waWxlOiB0cnVlIH0pKTsgLy89PiBbJyhhfGJ8YyknXVxuICogY29uc29sZS5sb2coYnJhY2VzKCd7YSxiLGN9JykpOyAvLz0+IFsnYScsICdiJywgJ2MnXVxuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ30gYHN0cmBcbiAqIEBwYXJhbSB7T2JqZWN0fSBgb3B0aW9uc2BcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuY29uc3QgYnJhY2VzID0gKGlucHV0LCBvcHRpb25zID0ge30pID0+IHtcbiAgbGV0IG91dHB1dCA9IFtdO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkge1xuICAgIGZvciAobGV0IHBhdHRlcm4gb2YgaW5wdXQpIHtcbiAgICAgIGxldCByZXN1bHQgPSBicmFjZXMuY3JlYXRlKHBhdHRlcm4sIG9wdGlvbnMpO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0KSkge1xuICAgICAgICBvdXRwdXQucHVzaCguLi5yZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3V0cHV0LnB1c2gocmVzdWx0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgb3V0cHV0ID0gW10uY29uY2F0KGJyYWNlcy5jcmVhdGUoaW5wdXQsIG9wdGlvbnMpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZXhwYW5kID09PSB0cnVlICYmIG9wdGlvbnMubm9kdXBlcyA9PT0gdHJ1ZSkge1xuICAgIG91dHB1dCA9IFsuLi5uZXcgU2V0KG91dHB1dCldO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBgc3RyYCB3aXRoIHRoZSBnaXZlbiBgb3B0aW9uc2AuXG4gKlxuICogYGBganNcbiAqIC8vIGJyYWNlcy5wYXJzZShwYXR0ZXJuLCBbLCBvcHRpb25zXSk7XG4gKiBjb25zdCBhc3QgPSBicmFjZXMucGFyc2UoJ2Eve2IsY30vZCcpO1xuICogY29uc29sZS5sb2coYXN0KTtcbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd9IHBhdHRlcm4gQnJhY2UgcGF0dGVybiB0byBwYXJzZVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge09iamVjdH0gUmV0dXJucyBhbiBBU1RcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuYnJhY2VzLnBhcnNlID0gKGlucHV0LCBvcHRpb25zID0ge30pID0+IHBhcnNlKGlucHV0LCBvcHRpb25zKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgYnJhY2VzIHN0cmluZyBmcm9tIGFuIEFTVCwgb3IgYW4gQVNUIG5vZGUuXG4gKlxuICogYGBganNcbiAqIGNvbnN0IGJyYWNlcyA9IHJlcXVpcmUoJ2JyYWNlcycpO1xuICogbGV0IGFzdCA9IGJyYWNlcy5wYXJzZSgnZm9vL3thLGJ9L2JhcicpO1xuICogY29uc29sZS5sb2coc3RyaW5naWZ5KGFzdC5ub2Rlc1syXSkpOyAvLz0+ICd7YSxifSdcbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd9IGBpbnB1dGAgQnJhY2UgcGF0dGVybiBvciBBU1QuXG4gKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgXG4gKiBAcmV0dXJuIHtBcnJheX0gUmV0dXJucyBhbiBhcnJheSBvZiBleHBhbmRlZCB2YWx1ZXMuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmJyYWNlcy5zdHJpbmdpZnkgPSAoaW5wdXQsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBzdHJpbmdpZnkoYnJhY2VzLnBhcnNlKGlucHV0LCBvcHRpb25zKSwgb3B0aW9ucyk7XG4gIH1cbiAgcmV0dXJuIHN0cmluZ2lmeShpbnB1dCwgb3B0aW9ucyk7XG59O1xuXG4vKipcbiAqIENvbXBpbGVzIGEgYnJhY2UgcGF0dGVybiBpbnRvIGEgcmVnZXgtY29tcGF0aWJsZSwgb3B0aW1pemVkIHN0cmluZy5cbiAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBieSB0aGUgbWFpbiBbYnJhY2VzXSgjYnJhY2VzKSBmdW5jdGlvbiBieSBkZWZhdWx0LlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBicmFjZXMgPSByZXF1aXJlKCdicmFjZXMnKTtcbiAqIGNvbnNvbGUubG9nKGJyYWNlcy5jb21waWxlKCdhL3tiLGN9L2QnKSk7XG4gKiAvLz0+IFsnYS8oYnxjKS9kJ11cbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd9IGBpbnB1dGAgQnJhY2UgcGF0dGVybiBvciBBU1QuXG4gKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgXG4gKiBAcmV0dXJuIHtBcnJheX0gUmV0dXJucyBhbiBhcnJheSBvZiBleHBhbmRlZCB2YWx1ZXMuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmJyYWNlcy5jb21waWxlID0gKGlucHV0LCBvcHRpb25zID0ge30pID0+IHtcbiAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICBpbnB1dCA9IGJyYWNlcy5wYXJzZShpbnB1dCwgb3B0aW9ucyk7XG4gIH1cbiAgcmV0dXJuIGNvbXBpbGUoaW5wdXQsIG9wdGlvbnMpO1xufTtcblxuLyoqXG4gKiBFeHBhbmRzIGEgYnJhY2UgcGF0dGVybiBpbnRvIGFuIGFycmF5LiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgdGhlXG4gKiBtYWluIFticmFjZXNdKCNicmFjZXMpIGZ1bmN0aW9uIHdoZW4gYG9wdGlvbnMuZXhwYW5kYCBpcyB0cnVlLiBCZWZvcmVcbiAqIHVzaW5nIHRoaXMgbWV0aG9kIGl0J3MgcmVjb21tZW5kZWQgdGhhdCB5b3UgcmVhZCB0aGUgW3BlcmZvcm1hbmNlIG5vdGVzXSgjcGVyZm9ybWFuY2UpKVxuICogYW5kIGFkdmFudGFnZXMgb2YgdXNpbmcgWy5jb21waWxlXSgjY29tcGlsZSkgaW5zdGVhZC5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgYnJhY2VzID0gcmVxdWlyZSgnYnJhY2VzJyk7XG4gKiBjb25zb2xlLmxvZyhicmFjZXMuZXhwYW5kKCdhL3tiLGN9L2QnKSk7XG4gKiAvLz0+IFsnYS9iL2QnLCAnYS9jL2QnXTtcbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd9IGBwYXR0ZXJuYCBCcmFjZSBwYXR0ZXJuXG4gKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgXG4gKiBAcmV0dXJuIHtBcnJheX0gUmV0dXJucyBhbiBhcnJheSBvZiBleHBhbmRlZCB2YWx1ZXMuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmJyYWNlcy5leHBhbmQgPSAoaW5wdXQsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgIGlucHV0ID0gYnJhY2VzLnBhcnNlKGlucHV0LCBvcHRpb25zKTtcbiAgfVxuXG4gIGxldCByZXN1bHQgPSBleHBhbmQoaW5wdXQsIG9wdGlvbnMpO1xuXG4gIC8vIGZpbHRlciBvdXQgZW1wdHkgc3RyaW5ncyBpZiBzcGVjaWZpZWRcbiAgaWYgKG9wdGlvbnMubm9lbXB0eSA9PT0gdHJ1ZSkge1xuICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIoQm9vbGVhbik7XG4gIH1cblxuICAvLyBmaWx0ZXIgb3V0IGR1cGxpY2F0ZXMgaWYgc3BlY2lmaWVkXG4gIGlmIChvcHRpb25zLm5vZHVwZXMgPT09IHRydWUpIHtcbiAgICByZXN1bHQgPSBbLi4ubmV3IFNldChyZXN1bHQpXTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFByb2Nlc3NlcyBhIGJyYWNlIHBhdHRlcm4gYW5kIHJldHVybnMgZWl0aGVyIGFuIGV4cGFuZGVkIGFycmF5XG4gKiAoaWYgYG9wdGlvbnMuZXhwYW5kYCBpcyB0cnVlKSwgYSBoaWdobHkgb3B0aW1pemVkIHJlZ2V4LWNvbXBhdGlibGUgc3RyaW5nLlxuICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJ5IHRoZSBtYWluIFticmFjZXNdKCNicmFjZXMpIGZ1bmN0aW9uLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBicmFjZXMgPSByZXF1aXJlKCdicmFjZXMnKTtcbiAqIGNvbnNvbGUubG9nKGJyYWNlcy5jcmVhdGUoJ3VzZXItezIwMC4uMzAwfS9wcm9qZWN0LXthLGIsY30tezEuLjEwfScpKVxuICogLy89PiAndXNlci0oMjBbMC05XXwyWzEtOV1bMC05XXwzMDApL3Byb2plY3QtKGF8YnxjKS0oWzEtOV18MTApJ1xuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ30gYHBhdHRlcm5gIEJyYWNlIHBhdHRlcm5cbiAqIEBwYXJhbSB7T2JqZWN0fSBgb3B0aW9uc2BcbiAqIEByZXR1cm4ge0FycmF5fSBSZXR1cm5zIGFuIGFycmF5IG9mIGV4cGFuZGVkIHZhbHVlcy5cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuYnJhY2VzLmNyZWF0ZSA9IChpbnB1dCwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIGlmIChpbnB1dCA9PT0gJycgfHwgaW5wdXQubGVuZ3RoIDwgMykge1xuICAgIHJldHVybiBbaW5wdXRdO1xuICB9XG5cbiByZXR1cm4gb3B0aW9ucy5leHBhbmQgIT09IHRydWVcbiAgICA/IGJyYWNlcy5jb21waWxlKGlucHV0LCBvcHRpb25zKVxuICAgIDogYnJhY2VzLmV4cGFuZChpbnB1dCwgb3B0aW9ucyk7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBcImJyYWNlc1wiXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBicmFjZXM7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgV0lOX1NMQVNIID0gJ1xcXFxcXFxcLyc7XG5jb25zdCBXSU5fTk9fU0xBU0ggPSBgW14ke1dJTl9TTEFTSH1dYDtcblxuLyoqXG4gKiBQb3NpeCBnbG9iIHJlZ2V4XG4gKi9cblxuY29uc3QgRE9UX0xJVEVSQUwgPSAnXFxcXC4nO1xuY29uc3QgUExVU19MSVRFUkFMID0gJ1xcXFwrJztcbmNvbnN0IFFNQVJLX0xJVEVSQUwgPSAnXFxcXD8nO1xuY29uc3QgU0xBU0hfTElURVJBTCA9ICdcXFxcLyc7XG5jb25zdCBPTkVfQ0hBUiA9ICcoPz0uKSc7XG5jb25zdCBRTUFSSyA9ICdbXi9dJztcbmNvbnN0IEVORF9BTkNIT1IgPSBgKD86JHtTTEFTSF9MSVRFUkFMfXwkKWA7XG5jb25zdCBTVEFSVF9BTkNIT1IgPSBgKD86Xnwke1NMQVNIX0xJVEVSQUx9KWA7XG5jb25zdCBET1RTX1NMQVNIID0gYCR7RE9UX0xJVEVSQUx9ezEsMn0ke0VORF9BTkNIT1J9YDtcbmNvbnN0IE5PX0RPVCA9IGAoPyEke0RPVF9MSVRFUkFMfSlgO1xuY29uc3QgTk9fRE9UUyA9IGAoPyEke1NUQVJUX0FOQ0hPUn0ke0RPVFNfU0xBU0h9KWA7XG5jb25zdCBOT19ET1RfU0xBU0ggPSBgKD8hJHtET1RfTElURVJBTH17MCwxfSR7RU5EX0FOQ0hPUn0pYDtcbmNvbnN0IE5PX0RPVFNfU0xBU0ggPSBgKD8hJHtET1RTX1NMQVNIfSlgO1xuY29uc3QgUU1BUktfTk9fRE9UID0gYFteLiR7U0xBU0hfTElURVJBTH1dYDtcbmNvbnN0IFNUQVIgPSBgJHtRTUFSS30qP2A7XG5cbmNvbnN0IFBPU0lYX0NIQVJTID0ge1xuICBET1RfTElURVJBTCxcbiAgUExVU19MSVRFUkFMLFxuICBRTUFSS19MSVRFUkFMLFxuICBTTEFTSF9MSVRFUkFMLFxuICBPTkVfQ0hBUixcbiAgUU1BUkssXG4gIEVORF9BTkNIT1IsXG4gIERPVFNfU0xBU0gsXG4gIE5PX0RPVCxcbiAgTk9fRE9UUyxcbiAgTk9fRE9UX1NMQVNILFxuICBOT19ET1RTX1NMQVNILFxuICBRTUFSS19OT19ET1QsXG4gIFNUQVIsXG4gIFNUQVJUX0FOQ0hPUlxufTtcblxuLyoqXG4gKiBXaW5kb3dzIGdsb2IgcmVnZXhcbiAqL1xuXG5jb25zdCBXSU5ET1dTX0NIQVJTID0ge1xuICAuLi5QT1NJWF9DSEFSUyxcblxuICBTTEFTSF9MSVRFUkFMOiBgWyR7V0lOX1NMQVNIfV1gLFxuICBRTUFSSzogV0lOX05PX1NMQVNILFxuICBTVEFSOiBgJHtXSU5fTk9fU0xBU0h9Kj9gLFxuICBET1RTX1NMQVNIOiBgJHtET1RfTElURVJBTH17MSwyfSg/Olske1dJTl9TTEFTSH1dfCQpYCxcbiAgTk9fRE9UOiBgKD8hJHtET1RfTElURVJBTH0pYCxcbiAgTk9fRE9UUzogYCg/ISg/Ol58WyR7V0lOX1NMQVNIfV0pJHtET1RfTElURVJBTH17MSwyfSg/Olske1dJTl9TTEFTSH1dfCQpKWAsXG4gIE5PX0RPVF9TTEFTSDogYCg/ISR7RE9UX0xJVEVSQUx9ezAsMX0oPzpbJHtXSU5fU0xBU0h9XXwkKSlgLFxuICBOT19ET1RTX1NMQVNIOiBgKD8hJHtET1RfTElURVJBTH17MSwyfSg/Olske1dJTl9TTEFTSH1dfCQpKWAsXG4gIFFNQVJLX05PX0RPVDogYFteLiR7V0lOX1NMQVNIfV1gLFxuICBTVEFSVF9BTkNIT1I6IGAoPzpefFske1dJTl9TTEFTSH1dKWAsXG4gIEVORF9BTkNIT1I6IGAoPzpbJHtXSU5fU0xBU0h9XXwkKWBcbn07XG5cbi8qKlxuICogUE9TSVggQnJhY2tldCBSZWdleFxuICovXG5cbmNvbnN0IFBPU0lYX1JFR0VYX1NPVVJDRSA9IHtcbiAgYWxudW06ICdhLXpBLVowLTknLFxuICBhbHBoYTogJ2EtekEtWicsXG4gIGFzY2lpOiAnXFxcXHgwMC1cXFxceDdGJyxcbiAgYmxhbms6ICcgXFxcXHQnLFxuICBjbnRybDogJ1xcXFx4MDAtXFxcXHgxRlxcXFx4N0YnLFxuICBkaWdpdDogJzAtOScsXG4gIGdyYXBoOiAnXFxcXHgyMS1cXFxceDdFJyxcbiAgbG93ZXI6ICdhLXonLFxuICBwcmludDogJ1xcXFx4MjAtXFxcXHg3RSAnLFxuICBwdW5jdDogJ1xcXFwtIVwiIyQlJlxcJygpXFxcXCorLC4vOjs8PT4/QFtcXFxcXV5fYHt8fX4nLFxuICBzcGFjZTogJyBcXFxcdFxcXFxyXFxcXG5cXFxcdlxcXFxmJyxcbiAgdXBwZXI6ICdBLVonLFxuICB3b3JkOiAnQS1aYS16MC05XycsXG4gIHhkaWdpdDogJ0EtRmEtZjAtOSdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBNQVhfTEVOR1RIOiAxMDI0ICogNjQsXG4gIFBPU0lYX1JFR0VYX1NPVVJDRSxcblxuICAvLyByZWd1bGFyIGV4cHJlc3Npb25zXG4gIFJFR0VYX0JBQ0tTTEFTSDogL1xcXFwoPyFbKis/XiR7fSh8KVtcXF1dKS9nLFxuICBSRUdFWF9OT05fU1BFQ0lBTF9DSEFSUzogL15bXkAhW1xcXS4sJCorP157fSgpfFxcXFwvXSsvLFxuICBSRUdFWF9TUEVDSUFMX0NIQVJTOiAvWy0qKz8uXiR7fSh8KVtcXF1dLyxcbiAgUkVHRVhfU1BFQ0lBTF9DSEFSU19CQUNLUkVGOiAvKFxcXFw/KSgoXFxXKShcXDMqKSkvZyxcbiAgUkVHRVhfU1BFQ0lBTF9DSEFSU19HTE9CQUw6IC8oWy0qKz8uXiR7fSh8KVtcXF1dKS9nLFxuICBSRUdFWF9SRU1PVkVfQkFDS1NMQVNIOiAvKD86XFxbLio/W15cXFxcXVxcXXxcXFxcKD89LikpL2csXG5cbiAgLy8gUmVwbGFjZSBnbG9icyB3aXRoIGVxdWl2YWxlbnQgcGF0dGVybnMgdG8gcmVkdWNlIHBhcnNpbmcgdGltZS5cbiAgUkVQTEFDRU1FTlRTOiB7XG4gICAgJyoqKic6ICcqJyxcbiAgICAnKiovKionOiAnKionLFxuICAgICcqKi8qKi8qKic6ICcqKidcbiAgfSxcblxuICAvLyBEaWdpdHNcbiAgQ0hBUl8wOiA0OCwgLyogMCAqL1xuICBDSEFSXzk6IDU3LCAvKiA5ICovXG5cbiAgLy8gQWxwaGFiZXQgY2hhcnMuXG4gIENIQVJfVVBQRVJDQVNFX0E6IDY1LCAvKiBBICovXG4gIENIQVJfTE9XRVJDQVNFX0E6IDk3LCAvKiBhICovXG4gIENIQVJfVVBQRVJDQVNFX1o6IDkwLCAvKiBaICovXG4gIENIQVJfTE9XRVJDQVNFX1o6IDEyMiwgLyogeiAqL1xuXG4gIENIQVJfTEVGVF9QQVJFTlRIRVNFUzogNDAsIC8qICggKi9cbiAgQ0hBUl9SSUdIVF9QQVJFTlRIRVNFUzogNDEsIC8qICkgKi9cblxuICBDSEFSX0FTVEVSSVNLOiA0MiwgLyogKiAqL1xuXG4gIC8vIE5vbi1hbHBoYWJldGljIGNoYXJzLlxuICBDSEFSX0FNUEVSU0FORDogMzgsIC8qICYgKi9cbiAgQ0hBUl9BVDogNjQsIC8qIEAgKi9cbiAgQ0hBUl9CQUNLV0FSRF9TTEFTSDogOTIsIC8qIFxcICovXG4gIENIQVJfQ0FSUklBR0VfUkVUVVJOOiAxMywgLyogXFxyICovXG4gIENIQVJfQ0lSQ1VNRkxFWF9BQ0NFTlQ6IDk0LCAvKiBeICovXG4gIENIQVJfQ09MT046IDU4LCAvKiA6ICovXG4gIENIQVJfQ09NTUE6IDQ0LCAvKiAsICovXG4gIENIQVJfRE9UOiA0NiwgLyogLiAqL1xuICBDSEFSX0RPVUJMRV9RVU9URTogMzQsIC8qIFwiICovXG4gIENIQVJfRVFVQUw6IDYxLCAvKiA9ICovXG4gIENIQVJfRVhDTEFNQVRJT05fTUFSSzogMzMsIC8qICEgKi9cbiAgQ0hBUl9GT1JNX0ZFRUQ6IDEyLCAvKiBcXGYgKi9cbiAgQ0hBUl9GT1JXQVJEX1NMQVNIOiA0NywgLyogLyAqL1xuICBDSEFSX0dSQVZFX0FDQ0VOVDogOTYsIC8qIGAgKi9cbiAgQ0hBUl9IQVNIOiAzNSwgLyogIyAqL1xuICBDSEFSX0hZUEhFTl9NSU5VUzogNDUsIC8qIC0gKi9cbiAgQ0hBUl9MRUZUX0FOR0xFX0JSQUNLRVQ6IDYwLCAvKiA8ICovXG4gIENIQVJfTEVGVF9DVVJMWV9CUkFDRTogMTIzLCAvKiB7ICovXG4gIENIQVJfTEVGVF9TUVVBUkVfQlJBQ0tFVDogOTEsIC8qIFsgKi9cbiAgQ0hBUl9MSU5FX0ZFRUQ6IDEwLCAvKiBcXG4gKi9cbiAgQ0hBUl9OT19CUkVBS19TUEFDRTogMTYwLCAvKiBcXHUwMEEwICovXG4gIENIQVJfUEVSQ0VOVDogMzcsIC8qICUgKi9cbiAgQ0hBUl9QTFVTOiA0MywgLyogKyAqL1xuICBDSEFSX1FVRVNUSU9OX01BUks6IDYzLCAvKiA/ICovXG4gIENIQVJfUklHSFRfQU5HTEVfQlJBQ0tFVDogNjIsIC8qID4gKi9cbiAgQ0hBUl9SSUdIVF9DVVJMWV9CUkFDRTogMTI1LCAvKiB9ICovXG4gIENIQVJfUklHSFRfU1FVQVJFX0JSQUNLRVQ6IDkzLCAvKiBdICovXG4gIENIQVJfU0VNSUNPTE9OOiA1OSwgLyogOyAqL1xuICBDSEFSX1NJTkdMRV9RVU9URTogMzksIC8qICcgKi9cbiAgQ0hBUl9TUEFDRTogMzIsIC8qICAgKi9cbiAgQ0hBUl9UQUI6IDksIC8qIFxcdCAqL1xuICBDSEFSX1VOREVSU0NPUkU6IDk1LCAvKiBfICovXG4gIENIQVJfVkVSVElDQUxfTElORTogMTI0LCAvKiB8ICovXG4gIENIQVJfWkVST19XSURUSF9OT0JSRUFLX1NQQUNFOiA2NTI3OSwgLyogXFx1RkVGRiAqL1xuXG4gIFNFUDogcGF0aC5zZXAsXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBFWFRHTE9CX0NIQVJTXG4gICAqL1xuXG4gIGV4dGdsb2JDaGFycyhjaGFycykge1xuICAgIHJldHVybiB7XG4gICAgICAnISc6IHsgdHlwZTogJ25lZ2F0ZScsIG9wZW46ICcoPzooPyEoPzonLCBjbG9zZTogYCkpJHtjaGFycy5TVEFSfSlgIH0sXG4gICAgICAnPyc6IHsgdHlwZTogJ3FtYXJrJywgb3BlbjogJyg/OicsIGNsb3NlOiAnKT8nIH0sXG4gICAgICAnKyc6IHsgdHlwZTogJ3BsdXMnLCBvcGVuOiAnKD86JywgY2xvc2U6ICcpKycgfSxcbiAgICAgICcqJzogeyB0eXBlOiAnc3RhcicsIG9wZW46ICcoPzonLCBjbG9zZTogJykqJyB9LFxuICAgICAgJ0AnOiB7IHR5cGU6ICdhdCcsIG9wZW46ICcoPzonLCBjbG9zZTogJyknIH1cbiAgICB9O1xuICB9LFxuXG4gIC8qKlxuICAgKiBDcmVhdGUgR0xPQl9DSEFSU1xuICAgKi9cblxuICBnbG9iQ2hhcnMod2luMzIpIHtcbiAgICByZXR1cm4gd2luMzIgPT09IHRydWUgPyBXSU5ET1dTX0NIQVJTIDogUE9TSVhfQ0hBUlM7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3Qgd2luMzIgPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInO1xuY29uc3Qge1xuICBSRUdFWF9CQUNLU0xBU0gsXG4gIFJFR0VYX1JFTU9WRV9CQUNLU0xBU0gsXG4gIFJFR0VYX1NQRUNJQUxfQ0hBUlMsXG4gIFJFR0VYX1NQRUNJQUxfQ0hBUlNfR0xPQkFMXG59ID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcblxuZXhwb3J0cy5pc09iamVjdCA9IHZhbCA9PiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkodmFsKTtcbmV4cG9ydHMuaGFzUmVnZXhDaGFycyA9IHN0ciA9PiBSRUdFWF9TUEVDSUFMX0NIQVJTLnRlc3Qoc3RyKTtcbmV4cG9ydHMuaXNSZWdleENoYXIgPSBzdHIgPT4gc3RyLmxlbmd0aCA9PT0gMSAmJiBleHBvcnRzLmhhc1JlZ2V4Q2hhcnMoc3RyKTtcbmV4cG9ydHMuZXNjYXBlUmVnZXggPSBzdHIgPT4gc3RyLnJlcGxhY2UoUkVHRVhfU1BFQ0lBTF9DSEFSU19HTE9CQUwsICdcXFxcJDEnKTtcbmV4cG9ydHMudG9Qb3NpeFNsYXNoZXMgPSBzdHIgPT4gc3RyLnJlcGxhY2UoUkVHRVhfQkFDS1NMQVNILCAnLycpO1xuXG5leHBvcnRzLnJlbW92ZUJhY2tzbGFzaGVzID0gc3RyID0+IHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKFJFR0VYX1JFTU9WRV9CQUNLU0xBU0gsIG1hdGNoID0+IHtcbiAgICByZXR1cm4gbWF0Y2ggPT09ICdcXFxcJyA/ICcnIDogbWF0Y2g7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5zdXBwb3J0c0xvb2tiZWhpbmRzID0gKCkgPT4ge1xuICBjb25zdCBzZWdzID0gcHJvY2Vzcy52ZXJzaW9uLnNsaWNlKDEpLnNwbGl0KCcuJykubWFwKE51bWJlcik7XG4gIGlmIChzZWdzLmxlbmd0aCA9PT0gMyAmJiBzZWdzWzBdID49IDkgfHwgKHNlZ3NbMF0gPT09IDggJiYgc2Vnc1sxXSA+PSAxMCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnRzLmlzV2luZG93cyA9IG9wdGlvbnMgPT4ge1xuICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy53aW5kb3dzID09PSAnYm9vbGVhbicpIHtcbiAgICByZXR1cm4gb3B0aW9ucy53aW5kb3dzO1xuICB9XG4gIHJldHVybiB3aW4zMiA9PT0gdHJ1ZSB8fCBwYXRoLnNlcCA9PT0gJ1xcXFwnO1xufTtcblxuZXhwb3J0cy5lc2NhcGVMYXN0ID0gKGlucHV0LCBjaGFyLCBsYXN0SWR4KSA9PiB7XG4gIGNvbnN0IGlkeCA9IGlucHV0Lmxhc3RJbmRleE9mKGNoYXIsIGxhc3RJZHgpO1xuICBpZiAoaWR4ID09PSAtMSkgcmV0dXJuIGlucHV0O1xuICBpZiAoaW5wdXRbaWR4IC0gMV0gPT09ICdcXFxcJykgcmV0dXJuIGV4cG9ydHMuZXNjYXBlTGFzdChpbnB1dCwgY2hhciwgaWR4IC0gMSk7XG4gIHJldHVybiBgJHtpbnB1dC5zbGljZSgwLCBpZHgpfVxcXFwke2lucHV0LnNsaWNlKGlkeCl9YDtcbn07XG5cbmV4cG9ydHMucmVtb3ZlUHJlZml4ID0gKGlucHV0LCBzdGF0ZSA9IHt9KSA9PiB7XG4gIGxldCBvdXRwdXQgPSBpbnB1dDtcbiAgaWYgKG91dHB1dC5zdGFydHNXaXRoKCcuLycpKSB7XG4gICAgb3V0cHV0ID0gb3V0cHV0LnNsaWNlKDIpO1xuICAgIHN0YXRlLnByZWZpeCA9ICcuLyc7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn07XG5cbmV4cG9ydHMud3JhcE91dHB1dCA9IChpbnB1dCwgc3RhdGUgPSB7fSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIGNvbnN0IHByZXBlbmQgPSBvcHRpb25zLmNvbnRhaW5zID8gJycgOiAnXic7XG4gIGNvbnN0IGFwcGVuZCA9IG9wdGlvbnMuY29udGFpbnMgPyAnJyA6ICckJztcblxuICBsZXQgb3V0cHV0ID0gYCR7cHJlcGVuZH0oPzoke2lucHV0fSkke2FwcGVuZH1gO1xuICBpZiAoc3RhdGUubmVnYXRlZCA9PT0gdHJ1ZSkge1xuICAgIG91dHB1dCA9IGAoPzpeKD8hJHtvdXRwdXR9KS4qJClgO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5jb25zdCB7XG4gIENIQVJfQVNURVJJU0ssICAgICAgICAgICAgIC8qICogKi9cbiAgQ0hBUl9BVCwgICAgICAgICAgICAgICAgICAgLyogQCAqL1xuICBDSEFSX0JBQ0tXQVJEX1NMQVNILCAgICAgICAvKiBcXCAqL1xuICBDSEFSX0NPTU1BLCAgICAgICAgICAgICAgICAvKiAsICovXG4gIENIQVJfRE9ULCAgICAgICAgICAgICAgICAgIC8qIC4gKi9cbiAgQ0hBUl9FWENMQU1BVElPTl9NQVJLLCAgICAgLyogISAqL1xuICBDSEFSX0ZPUldBUkRfU0xBU0gsICAgICAgICAvKiAvICovXG4gIENIQVJfTEVGVF9DVVJMWV9CUkFDRSwgICAgIC8qIHsgKi9cbiAgQ0hBUl9MRUZUX1BBUkVOVEhFU0VTLCAgICAgLyogKCAqL1xuICBDSEFSX0xFRlRfU1FVQVJFX0JSQUNLRVQsICAvKiBbICovXG4gIENIQVJfUExVUywgICAgICAgICAgICAgICAgIC8qICsgKi9cbiAgQ0hBUl9RVUVTVElPTl9NQVJLLCAgICAgICAgLyogPyAqL1xuICBDSEFSX1JJR0hUX0NVUkxZX0JSQUNFLCAgICAvKiB9ICovXG4gIENIQVJfUklHSFRfUEFSRU5USEVTRVMsICAgIC8qICkgKi9cbiAgQ0hBUl9SSUdIVF9TUVVBUkVfQlJBQ0tFVCAgLyogXSAqL1xufSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IGlzUGF0aFNlcGFyYXRvciA9IGNvZGUgPT4ge1xuICByZXR1cm4gY29kZSA9PT0gQ0hBUl9GT1JXQVJEX1NMQVNIIHx8IGNvZGUgPT09IENIQVJfQkFDS1dBUkRfU0xBU0g7XG59O1xuXG5jb25zdCBkZXB0aCA9IHRva2VuID0+IHtcbiAgaWYgKHRva2VuLmlzUHJlZml4ICE9PSB0cnVlKSB7XG4gICAgdG9rZW4uZGVwdGggPSB0b2tlbi5pc0dsb2JzdGFyID8gSW5maW5pdHkgOiAxO1xuICB9XG59O1xuXG4vKipcbiAqIFF1aWNrbHkgc2NhbnMgYSBnbG9iIHBhdHRlcm4gYW5kIHJldHVybnMgYW4gb2JqZWN0IHdpdGggYSBoYW5kZnVsIG9mXG4gKiB1c2VmdWwgcHJvcGVydGllcywgbGlrZSBgaXNHbG9iYCwgYHBhdGhgICh0aGUgbGVhZGluZyBub24tZ2xvYiwgaWYgaXQgZXhpc3RzKSxcbiAqIGBnbG9iYCAodGhlIGFjdHVhbCBwYXR0ZXJuKSwgYG5lZ2F0ZWRgICh0cnVlIGlmIHRoZSBwYXRoIHN0YXJ0cyB3aXRoIGAhYCBidXQgbm90XG4gKiB3aXRoIGAhKGApIGFuZCBgbmVnYXRlZEV4dGdsb2JgICh0cnVlIGlmIHRoZSBwYXRoIHN0YXJ0cyB3aXRoIGAhKGApLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBwbSA9IHJlcXVpcmUoJ3BpY29tYXRjaCcpO1xuICogY29uc29sZS5sb2cocG0uc2NhbignZm9vL2Jhci8qLmpzJykpO1xuICogeyBpc0dsb2I6IHRydWUsIGlucHV0OiAnZm9vL2Jhci8qLmpzJywgYmFzZTogJ2Zvby9iYXInLCBnbG9iOiAnKi5qcycgfVxuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ30gYHN0cmBcbiAqIEBwYXJhbSB7T2JqZWN0fSBgb3B0aW9uc2BcbiAqIEByZXR1cm4ge09iamVjdH0gUmV0dXJucyBhbiBvYmplY3Qgd2l0aCB0b2tlbnMgYW5kIHJlZ2V4IHNvdXJjZSBzdHJpbmcuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmNvbnN0IHNjYW4gPSAoaW5wdXQsIG9wdGlvbnMpID0+IHtcbiAgY29uc3Qgb3B0cyA9IG9wdGlvbnMgfHwge307XG5cbiAgY29uc3QgbGVuZ3RoID0gaW5wdXQubGVuZ3RoIC0gMTtcbiAgY29uc3Qgc2NhblRvRW5kID0gb3B0cy5wYXJ0cyA9PT0gdHJ1ZSB8fCBvcHRzLnNjYW5Ub0VuZCA9PT0gdHJ1ZTtcbiAgY29uc3Qgc2xhc2hlcyA9IFtdO1xuICBjb25zdCB0b2tlbnMgPSBbXTtcbiAgY29uc3QgcGFydHMgPSBbXTtcblxuICBsZXQgc3RyID0gaW5wdXQ7XG4gIGxldCBpbmRleCA9IC0xO1xuICBsZXQgc3RhcnQgPSAwO1xuICBsZXQgbGFzdEluZGV4ID0gMDtcbiAgbGV0IGlzQnJhY2UgPSBmYWxzZTtcbiAgbGV0IGlzQnJhY2tldCA9IGZhbHNlO1xuICBsZXQgaXNHbG9iID0gZmFsc2U7XG4gIGxldCBpc0V4dGdsb2IgPSBmYWxzZTtcbiAgbGV0IGlzR2xvYnN0YXIgPSBmYWxzZTtcbiAgbGV0IGJyYWNlRXNjYXBlZCA9IGZhbHNlO1xuICBsZXQgYmFja3NsYXNoZXMgPSBmYWxzZTtcbiAgbGV0IG5lZ2F0ZWQgPSBmYWxzZTtcbiAgbGV0IG5lZ2F0ZWRFeHRnbG9iID0gZmFsc2U7XG4gIGxldCBmaW5pc2hlZCA9IGZhbHNlO1xuICBsZXQgYnJhY2VzID0gMDtcbiAgbGV0IHByZXY7XG4gIGxldCBjb2RlO1xuICBsZXQgdG9rZW4gPSB7IHZhbHVlOiAnJywgZGVwdGg6IDAsIGlzR2xvYjogZmFsc2UgfTtcblxuICBjb25zdCBlb3MgPSAoKSA9PiBpbmRleCA+PSBsZW5ndGg7XG4gIGNvbnN0IHBlZWsgPSAoKSA9PiBzdHIuY2hhckNvZGVBdChpbmRleCArIDEpO1xuICBjb25zdCBhZHZhbmNlID0gKCkgPT4ge1xuICAgIHByZXYgPSBjb2RlO1xuICAgIHJldHVybiBzdHIuY2hhckNvZGVBdCgrK2luZGV4KTtcbiAgfTtcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjb2RlID0gYWR2YW5jZSgpO1xuICAgIGxldCBuZXh0O1xuXG4gICAgaWYgKGNvZGUgPT09IENIQVJfQkFDS1dBUkRfU0xBU0gpIHtcbiAgICAgIGJhY2tzbGFzaGVzID0gdG9rZW4uYmFja3NsYXNoZXMgPSB0cnVlO1xuICAgICAgY29kZSA9IGFkdmFuY2UoKTtcblxuICAgICAgaWYgKGNvZGUgPT09IENIQVJfTEVGVF9DVVJMWV9CUkFDRSkge1xuICAgICAgICBicmFjZUVzY2FwZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGJyYWNlRXNjYXBlZCA9PT0gdHJ1ZSB8fCBjb2RlID09PSBDSEFSX0xFRlRfQ1VSTFlfQlJBQ0UpIHtcbiAgICAgIGJyYWNlcysrO1xuXG4gICAgICB3aGlsZSAoZW9zKCkgIT09IHRydWUgJiYgKGNvZGUgPSBhZHZhbmNlKCkpKSB7XG4gICAgICAgIGlmIChjb2RlID09PSBDSEFSX0JBQ0tXQVJEX1NMQVNIKSB7XG4gICAgICAgICAgYmFja3NsYXNoZXMgPSB0b2tlbi5iYWNrc2xhc2hlcyA9IHRydWU7XG4gICAgICAgICAgYWR2YW5jZSgpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvZGUgPT09IENIQVJfTEVGVF9DVVJMWV9CUkFDRSkge1xuICAgICAgICAgIGJyYWNlcysrO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJyYWNlRXNjYXBlZCAhPT0gdHJ1ZSAmJiBjb2RlID09PSBDSEFSX0RPVCAmJiAoY29kZSA9IGFkdmFuY2UoKSkgPT09IENIQVJfRE9UKSB7XG4gICAgICAgICAgaXNCcmFjZSA9IHRva2VuLmlzQnJhY2UgPSB0cnVlO1xuICAgICAgICAgIGlzR2xvYiA9IHRva2VuLmlzR2xvYiA9IHRydWU7XG4gICAgICAgICAgZmluaXNoZWQgPSB0cnVlO1xuXG4gICAgICAgICAgaWYgKHNjYW5Ub0VuZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYnJhY2VFc2NhcGVkICE9PSB0cnVlICYmIGNvZGUgPT09IENIQVJfQ09NTUEpIHtcbiAgICAgICAgICBpc0JyYWNlID0gdG9rZW4uaXNCcmFjZSA9IHRydWU7XG4gICAgICAgICAgaXNHbG9iID0gdG9rZW4uaXNHbG9iID0gdHJ1ZTtcbiAgICAgICAgICBmaW5pc2hlZCA9IHRydWU7XG5cbiAgICAgICAgICBpZiAoc2NhblRvRW5kID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb2RlID09PSBDSEFSX1JJR0hUX0NVUkxZX0JSQUNFKSB7XG4gICAgICAgICAgYnJhY2VzLS07XG5cbiAgICAgICAgICBpZiAoYnJhY2VzID09PSAwKSB7XG4gICAgICAgICAgICBicmFjZUVzY2FwZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlzQnJhY2UgPSB0b2tlbi5pc0JyYWNlID0gdHJ1ZTtcbiAgICAgICAgICAgIGZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc2NhblRvRW5kID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gQ0hBUl9GT1JXQVJEX1NMQVNIKSB7XG4gICAgICBzbGFzaGVzLnB1c2goaW5kZXgpO1xuICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgdG9rZW4gPSB7IHZhbHVlOiAnJywgZGVwdGg6IDAsIGlzR2xvYjogZmFsc2UgfTtcblxuICAgICAgaWYgKGZpbmlzaGVkID09PSB0cnVlKSBjb250aW51ZTtcbiAgICAgIGlmIChwcmV2ID09PSBDSEFSX0RPVCAmJiBpbmRleCA9PT0gKHN0YXJ0ICsgMSkpIHtcbiAgICAgICAgc3RhcnQgKz0gMjtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxhc3RJbmRleCA9IGluZGV4ICsgMTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChvcHRzLm5vZXh0ICE9PSB0cnVlKSB7XG4gICAgICBjb25zdCBpc0V4dGdsb2JDaGFyID0gY29kZSA9PT0gQ0hBUl9QTFVTXG4gICAgICAgIHx8IGNvZGUgPT09IENIQVJfQVRcbiAgICAgICAgfHwgY29kZSA9PT0gQ0hBUl9BU1RFUklTS1xuICAgICAgICB8fCBjb2RlID09PSBDSEFSX1FVRVNUSU9OX01BUktcbiAgICAgICAgfHwgY29kZSA9PT0gQ0hBUl9FWENMQU1BVElPTl9NQVJLO1xuXG4gICAgICBpZiAoaXNFeHRnbG9iQ2hhciA9PT0gdHJ1ZSAmJiBwZWVrKCkgPT09IENIQVJfTEVGVF9QQVJFTlRIRVNFUykge1xuICAgICAgICBpc0dsb2IgPSB0b2tlbi5pc0dsb2IgPSB0cnVlO1xuICAgICAgICBpc0V4dGdsb2IgPSB0b2tlbi5pc0V4dGdsb2IgPSB0cnVlO1xuICAgICAgICBmaW5pc2hlZCA9IHRydWU7XG4gICAgICAgIGlmIChjb2RlID09PSBDSEFSX0VYQ0xBTUFUSU9OX01BUksgJiYgaW5kZXggPT09IHN0YXJ0KSB7XG4gICAgICAgICAgbmVnYXRlZEV4dGdsb2IgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNjYW5Ub0VuZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHdoaWxlIChlb3MoKSAhPT0gdHJ1ZSAmJiAoY29kZSA9IGFkdmFuY2UoKSkpIHtcbiAgICAgICAgICAgIGlmIChjb2RlID09PSBDSEFSX0JBQ0tXQVJEX1NMQVNIKSB7XG4gICAgICAgICAgICAgIGJhY2tzbGFzaGVzID0gdG9rZW4uYmFja3NsYXNoZXMgPSB0cnVlO1xuICAgICAgICAgICAgICBjb2RlID0gYWR2YW5jZSgpO1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvZGUgPT09IENIQVJfUklHSFRfUEFSRU5USEVTRVMpIHtcbiAgICAgICAgICAgICAgaXNHbG9iID0gdG9rZW4uaXNHbG9iID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZmluaXNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IENIQVJfQVNURVJJU0spIHtcbiAgICAgIGlmIChwcmV2ID09PSBDSEFSX0FTVEVSSVNLKSBpc0dsb2JzdGFyID0gdG9rZW4uaXNHbG9ic3RhciA9IHRydWU7XG4gICAgICBpc0dsb2IgPSB0b2tlbi5pc0dsb2IgPSB0cnVlO1xuICAgICAgZmluaXNoZWQgPSB0cnVlO1xuXG4gICAgICBpZiAoc2NhblRvRW5kID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IENIQVJfUVVFU1RJT05fTUFSSykge1xuICAgICAgaXNHbG9iID0gdG9rZW4uaXNHbG9iID0gdHJ1ZTtcbiAgICAgIGZpbmlzaGVkID0gdHJ1ZTtcblxuICAgICAgaWYgKHNjYW5Ub0VuZCA9PT0gdHJ1ZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChjb2RlID09PSBDSEFSX0xFRlRfU1FVQVJFX0JSQUNLRVQpIHtcbiAgICAgIHdoaWxlIChlb3MoKSAhPT0gdHJ1ZSAmJiAobmV4dCA9IGFkdmFuY2UoKSkpIHtcbiAgICAgICAgaWYgKG5leHQgPT09IENIQVJfQkFDS1dBUkRfU0xBU0gpIHtcbiAgICAgICAgICBiYWNrc2xhc2hlcyA9IHRva2VuLmJhY2tzbGFzaGVzID0gdHJ1ZTtcbiAgICAgICAgICBhZHZhbmNlKCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV4dCA9PT0gQ0hBUl9SSUdIVF9TUVVBUkVfQlJBQ0tFVCkge1xuICAgICAgICAgIGlzQnJhY2tldCA9IHRva2VuLmlzQnJhY2tldCA9IHRydWU7XG4gICAgICAgICAgaXNHbG9iID0gdG9rZW4uaXNHbG9iID0gdHJ1ZTtcbiAgICAgICAgICBmaW5pc2hlZCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHNjYW5Ub0VuZCA9PT0gdHJ1ZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMubm9uZWdhdGUgIT09IHRydWUgJiYgY29kZSA9PT0gQ0hBUl9FWENMQU1BVElPTl9NQVJLICYmIGluZGV4ID09PSBzdGFydCkge1xuICAgICAgbmVnYXRlZCA9IHRva2VuLm5lZ2F0ZWQgPSB0cnVlO1xuICAgICAgc3RhcnQrKztcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChvcHRzLm5vcGFyZW4gIT09IHRydWUgJiYgY29kZSA9PT0gQ0hBUl9MRUZUX1BBUkVOVEhFU0VTKSB7XG4gICAgICBpc0dsb2IgPSB0b2tlbi5pc0dsb2IgPSB0cnVlO1xuXG4gICAgICBpZiAoc2NhblRvRW5kID09PSB0cnVlKSB7XG4gICAgICAgIHdoaWxlIChlb3MoKSAhPT0gdHJ1ZSAmJiAoY29kZSA9IGFkdmFuY2UoKSkpIHtcbiAgICAgICAgICBpZiAoY29kZSA9PT0gQ0hBUl9MRUZUX1BBUkVOVEhFU0VTKSB7XG4gICAgICAgICAgICBiYWNrc2xhc2hlcyA9IHRva2VuLmJhY2tzbGFzaGVzID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvZGUgPSBhZHZhbmNlKCk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY29kZSA9PT0gQ0hBUl9SSUdIVF9QQVJFTlRIRVNFUykge1xuICAgICAgICAgICAgZmluaXNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGlzR2xvYiA9PT0gdHJ1ZSkge1xuICAgICAgZmluaXNoZWQgPSB0cnVlO1xuXG4gICAgICBpZiAoc2NhblRvRW5kID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAob3B0cy5ub2V4dCA9PT0gdHJ1ZSkge1xuICAgIGlzRXh0Z2xvYiA9IGZhbHNlO1xuICAgIGlzR2xvYiA9IGZhbHNlO1xuICB9XG5cbiAgbGV0IGJhc2UgPSBzdHI7XG4gIGxldCBwcmVmaXggPSAnJztcbiAgbGV0IGdsb2IgPSAnJztcblxuICBpZiAoc3RhcnQgPiAwKSB7XG4gICAgcHJlZml4ID0gc3RyLnNsaWNlKDAsIHN0YXJ0KTtcbiAgICBzdHIgPSBzdHIuc2xpY2Uoc3RhcnQpO1xuICAgIGxhc3RJbmRleCAtPSBzdGFydDtcbiAgfVxuXG4gIGlmIChiYXNlICYmIGlzR2xvYiA9PT0gdHJ1ZSAmJiBsYXN0SW5kZXggPiAwKSB7XG4gICAgYmFzZSA9IHN0ci5zbGljZSgwLCBsYXN0SW5kZXgpO1xuICAgIGdsb2IgPSBzdHIuc2xpY2UobGFzdEluZGV4KTtcbiAgfSBlbHNlIGlmIChpc0dsb2IgPT09IHRydWUpIHtcbiAgICBiYXNlID0gJyc7XG4gICAgZ2xvYiA9IHN0cjtcbiAgfSBlbHNlIHtcbiAgICBiYXNlID0gc3RyO1xuICB9XG5cbiAgaWYgKGJhc2UgJiYgYmFzZSAhPT0gJycgJiYgYmFzZSAhPT0gJy8nICYmIGJhc2UgIT09IHN0cikge1xuICAgIGlmIChpc1BhdGhTZXBhcmF0b3IoYmFzZS5jaGFyQ29kZUF0KGJhc2UubGVuZ3RoIC0gMSkpKSB7XG4gICAgICBiYXNlID0gYmFzZS5zbGljZSgwLCAtMSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKG9wdHMudW5lc2NhcGUgPT09IHRydWUpIHtcbiAgICBpZiAoZ2xvYikgZ2xvYiA9IHV0aWxzLnJlbW92ZUJhY2tzbGFzaGVzKGdsb2IpO1xuXG4gICAgaWYgKGJhc2UgJiYgYmFja3NsYXNoZXMgPT09IHRydWUpIHtcbiAgICAgIGJhc2UgPSB1dGlscy5yZW1vdmVCYWNrc2xhc2hlcyhiYXNlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBzdGF0ZSA9IHtcbiAgICBwcmVmaXgsXG4gICAgaW5wdXQsXG4gICAgc3RhcnQsXG4gICAgYmFzZSxcbiAgICBnbG9iLFxuICAgIGlzQnJhY2UsXG4gICAgaXNCcmFja2V0LFxuICAgIGlzR2xvYixcbiAgICBpc0V4dGdsb2IsXG4gICAgaXNHbG9ic3RhcixcbiAgICBuZWdhdGVkLFxuICAgIG5lZ2F0ZWRFeHRnbG9iXG4gIH07XG5cbiAgaWYgKG9wdHMudG9rZW5zID09PSB0cnVlKSB7XG4gICAgc3RhdGUubWF4RGVwdGggPSAwO1xuICAgIGlmICghaXNQYXRoU2VwYXJhdG9yKGNvZGUpKSB7XG4gICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG4gICAgfVxuICAgIHN0YXRlLnRva2VucyA9IHRva2VucztcbiAgfVxuXG4gIGlmIChvcHRzLnBhcnRzID09PSB0cnVlIHx8IG9wdHMudG9rZW5zID09PSB0cnVlKSB7XG4gICAgbGV0IHByZXZJbmRleDtcblxuICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IHNsYXNoZXMubGVuZ3RoOyBpZHgrKykge1xuICAgICAgY29uc3QgbiA9IHByZXZJbmRleCA/IHByZXZJbmRleCArIDEgOiBzdGFydDtcbiAgICAgIGNvbnN0IGkgPSBzbGFzaGVzW2lkeF07XG4gICAgICBjb25zdCB2YWx1ZSA9IGlucHV0LnNsaWNlKG4sIGkpO1xuICAgICAgaWYgKG9wdHMudG9rZW5zKSB7XG4gICAgICAgIGlmIChpZHggPT09IDAgJiYgc3RhcnQgIT09IDApIHtcbiAgICAgICAgICB0b2tlbnNbaWR4XS5pc1ByZWZpeCA9IHRydWU7XG4gICAgICAgICAgdG9rZW5zW2lkeF0udmFsdWUgPSBwcmVmaXg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG9rZW5zW2lkeF0udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBkZXB0aCh0b2tlbnNbaWR4XSk7XG4gICAgICAgIHN0YXRlLm1heERlcHRoICs9IHRva2Vuc1tpZHhdLmRlcHRoO1xuICAgICAgfVxuICAgICAgaWYgKGlkeCAhPT0gMCB8fCB2YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgcGFydHMucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgICBwcmV2SW5kZXggPSBpO1xuICAgIH1cblxuICAgIGlmIChwcmV2SW5kZXggJiYgcHJldkluZGV4ICsgMSA8IGlucHV0Lmxlbmd0aCkge1xuICAgICAgY29uc3QgdmFsdWUgPSBpbnB1dC5zbGljZShwcmV2SW5kZXggKyAxKTtcbiAgICAgIHBhcnRzLnB1c2godmFsdWUpO1xuXG4gICAgICBpZiAob3B0cy50b2tlbnMpIHtcbiAgICAgICAgdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICBkZXB0aCh0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgc3RhdGUubWF4RGVwdGggKz0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXS5kZXB0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0ZS5zbGFzaGVzID0gc2xhc2hlcztcbiAgICBzdGF0ZS5wYXJ0cyA9IHBhcnRzO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzY2FuO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcbmNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IHtcbiAgTUFYX0xFTkdUSCxcbiAgUE9TSVhfUkVHRVhfU09VUkNFLFxuICBSRUdFWF9OT05fU1BFQ0lBTF9DSEFSUyxcbiAgUkVHRVhfU1BFQ0lBTF9DSEFSU19CQUNLUkVGLFxuICBSRVBMQUNFTUVOVFNcbn0gPSBjb25zdGFudHM7XG5cbi8qKlxuICogSGVscGVyc1xuICovXG5cbmNvbnN0IGV4cGFuZFJhbmdlID0gKGFyZ3MsIG9wdGlvbnMpID0+IHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zLmV4cGFuZFJhbmdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuZXhwYW5kUmFuZ2UoLi4uYXJncywgb3B0aW9ucyk7XG4gIH1cblxuICBhcmdzLnNvcnQoKTtcbiAgY29uc3QgdmFsdWUgPSBgWyR7YXJncy5qb2luKCctJyl9XWA7XG5cbiAgdHJ5IHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3ICovXG4gICAgbmV3IFJlZ0V4cCh2YWx1ZSk7XG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgcmV0dXJuIGFyZ3MubWFwKHYgPT4gdXRpbHMuZXNjYXBlUmVnZXgodikpLmpvaW4oJy4uJyk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKipcbiAqIENyZWF0ZSB0aGUgbWVzc2FnZSBmb3IgYSBzeW50YXggZXJyb3JcbiAqL1xuXG5jb25zdCBzeW50YXhFcnJvciA9ICh0eXBlLCBjaGFyKSA9PiB7XG4gIHJldHVybiBgTWlzc2luZyAke3R5cGV9OiBcIiR7Y2hhcn1cIiAtIHVzZSBcIlxcXFxcXFxcJHtjaGFyfVwiIHRvIG1hdGNoIGxpdGVyYWwgY2hhcmFjdGVyc2A7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBpbnB1dCBzdHJpbmcuXG4gKiBAcGFyYW0ge1N0cmluZ30gaW5wdXRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblxuY29uc3QgcGFyc2UgPSAoaW5wdXQsIG9wdGlvbnMpID0+IHtcbiAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIHN0cmluZycpO1xuICB9XG5cbiAgaW5wdXQgPSBSRVBMQUNFTUVOVFNbaW5wdXRdIHx8IGlucHV0O1xuXG4gIGNvbnN0IG9wdHMgPSB7IC4uLm9wdGlvbnMgfTtcbiAgY29uc3QgbWF4ID0gdHlwZW9mIG9wdHMubWF4TGVuZ3RoID09PSAnbnVtYmVyJyA/IE1hdGgubWluKE1BWF9MRU5HVEgsIG9wdHMubWF4TGVuZ3RoKSA6IE1BWF9MRU5HVEg7XG5cbiAgbGV0IGxlbiA9IGlucHV0Lmxlbmd0aDtcbiAgaWYgKGxlbiA+IG1heCkge1xuICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgSW5wdXQgbGVuZ3RoOiAke2xlbn0sIGV4Y2VlZHMgbWF4aW11bSBhbGxvd2VkIGxlbmd0aDogJHttYXh9YCk7XG4gIH1cblxuICBjb25zdCBib3MgPSB7IHR5cGU6ICdib3MnLCB2YWx1ZTogJycsIG91dHB1dDogb3B0cy5wcmVwZW5kIHx8ICcnIH07XG4gIGNvbnN0IHRva2VucyA9IFtib3NdO1xuXG4gIGNvbnN0IGNhcHR1cmUgPSBvcHRzLmNhcHR1cmUgPyAnJyA6ICc/Oic7XG4gIGNvbnN0IHdpbjMyID0gdXRpbHMuaXNXaW5kb3dzKG9wdGlvbnMpO1xuXG4gIC8vIGNyZWF0ZSBjb25zdGFudHMgYmFzZWQgb24gcGxhdGZvcm0sIGZvciB3aW5kb3dzIG9yIHBvc2l4XG4gIGNvbnN0IFBMQVRGT1JNX0NIQVJTID0gY29uc3RhbnRzLmdsb2JDaGFycyh3aW4zMik7XG4gIGNvbnN0IEVYVEdMT0JfQ0hBUlMgPSBjb25zdGFudHMuZXh0Z2xvYkNoYXJzKFBMQVRGT1JNX0NIQVJTKTtcblxuICBjb25zdCB7XG4gICAgRE9UX0xJVEVSQUwsXG4gICAgUExVU19MSVRFUkFMLFxuICAgIFNMQVNIX0xJVEVSQUwsXG4gICAgT05FX0NIQVIsXG4gICAgRE9UU19TTEFTSCxcbiAgICBOT19ET1QsXG4gICAgTk9fRE9UX1NMQVNILFxuICAgIE5PX0RPVFNfU0xBU0gsXG4gICAgUU1BUkssXG4gICAgUU1BUktfTk9fRE9ULFxuICAgIFNUQVIsXG4gICAgU1RBUlRfQU5DSE9SXG4gIH0gPSBQTEFURk9STV9DSEFSUztcblxuICBjb25zdCBnbG9ic3RhciA9IG9wdHMgPT4ge1xuICAgIHJldHVybiBgKCR7Y2FwdHVyZX0oPzooPyEke1NUQVJUX0FOQ0hPUn0ke29wdHMuZG90ID8gRE9UU19TTEFTSCA6IERPVF9MSVRFUkFMfSkuKSo/KWA7XG4gIH07XG5cbiAgY29uc3Qgbm9kb3QgPSBvcHRzLmRvdCA/ICcnIDogTk9fRE9UO1xuICBjb25zdCBxbWFya05vRG90ID0gb3B0cy5kb3QgPyBRTUFSSyA6IFFNQVJLX05PX0RPVDtcbiAgbGV0IHN0YXIgPSBvcHRzLmJhc2ggPT09IHRydWUgPyBnbG9ic3RhcihvcHRzKSA6IFNUQVI7XG5cbiAgaWYgKG9wdHMuY2FwdHVyZSkge1xuICAgIHN0YXIgPSBgKCR7c3Rhcn0pYDtcbiAgfVxuXG4gIC8vIG1pbmltYXRjaCBvcHRpb25zIHN1cHBvcnRcbiAgaWYgKHR5cGVvZiBvcHRzLm5vZXh0ID09PSAnYm9vbGVhbicpIHtcbiAgICBvcHRzLm5vZXh0Z2xvYiA9IG9wdHMubm9leHQ7XG4gIH1cblxuICBjb25zdCBzdGF0ZSA9IHtcbiAgICBpbnB1dCxcbiAgICBpbmRleDogLTEsXG4gICAgc3RhcnQ6IDAsXG4gICAgZG90OiBvcHRzLmRvdCA9PT0gdHJ1ZSxcbiAgICBjb25zdW1lZDogJycsXG4gICAgb3V0cHV0OiAnJyxcbiAgICBwcmVmaXg6ICcnLFxuICAgIGJhY2t0cmFjazogZmFsc2UsXG4gICAgbmVnYXRlZDogZmFsc2UsXG4gICAgYnJhY2tldHM6IDAsXG4gICAgYnJhY2VzOiAwLFxuICAgIHBhcmVuczogMCxcbiAgICBxdW90ZXM6IDAsXG4gICAgZ2xvYnN0YXI6IGZhbHNlLFxuICAgIHRva2Vuc1xuICB9O1xuXG4gIGlucHV0ID0gdXRpbHMucmVtb3ZlUHJlZml4KGlucHV0LCBzdGF0ZSk7XG4gIGxlbiA9IGlucHV0Lmxlbmd0aDtcblxuICBjb25zdCBleHRnbG9icyA9IFtdO1xuICBjb25zdCBicmFjZXMgPSBbXTtcbiAgY29uc3Qgc3RhY2sgPSBbXTtcbiAgbGV0IHByZXYgPSBib3M7XG4gIGxldCB2YWx1ZTtcblxuICAvKipcbiAgICogVG9rZW5pemluZyBoZWxwZXJzXG4gICAqL1xuXG4gIGNvbnN0IGVvcyA9ICgpID0+IHN0YXRlLmluZGV4ID09PSBsZW4gLSAxO1xuICBjb25zdCBwZWVrID0gc3RhdGUucGVlayA9IChuID0gMSkgPT4gaW5wdXRbc3RhdGUuaW5kZXggKyBuXTtcbiAgY29uc3QgYWR2YW5jZSA9IHN0YXRlLmFkdmFuY2UgPSAoKSA9PiBpbnB1dFsrK3N0YXRlLmluZGV4XSB8fCAnJztcbiAgY29uc3QgcmVtYWluaW5nID0gKCkgPT4gaW5wdXQuc2xpY2Uoc3RhdGUuaW5kZXggKyAxKTtcbiAgY29uc3QgY29uc3VtZSA9ICh2YWx1ZSA9ICcnLCBudW0gPSAwKSA9PiB7XG4gICAgc3RhdGUuY29uc3VtZWQgKz0gdmFsdWU7XG4gICAgc3RhdGUuaW5kZXggKz0gbnVtO1xuICB9O1xuXG4gIGNvbnN0IGFwcGVuZCA9IHRva2VuID0+IHtcbiAgICBzdGF0ZS5vdXRwdXQgKz0gdG9rZW4ub3V0cHV0ICE9IG51bGwgPyB0b2tlbi5vdXRwdXQgOiB0b2tlbi52YWx1ZTtcbiAgICBjb25zdW1lKHRva2VuLnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBuZWdhdGUgPSAoKSA9PiB7XG4gICAgbGV0IGNvdW50ID0gMTtcblxuICAgIHdoaWxlIChwZWVrKCkgPT09ICchJyAmJiAocGVlaygyKSAhPT0gJygnIHx8IHBlZWsoMykgPT09ICc/JykpIHtcbiAgICAgIGFkdmFuY2UoKTtcbiAgICAgIHN0YXRlLnN0YXJ0Kys7XG4gICAgICBjb3VudCsrO1xuICAgIH1cblxuICAgIGlmIChjb3VudCAlIDIgPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBzdGF0ZS5uZWdhdGVkID0gdHJ1ZTtcbiAgICBzdGF0ZS5zdGFydCsrO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGluY3JlbWVudCA9IHR5cGUgPT4ge1xuICAgIHN0YXRlW3R5cGVdKys7XG4gICAgc3RhY2sucHVzaCh0eXBlKTtcbiAgfTtcblxuICBjb25zdCBkZWNyZW1lbnQgPSB0eXBlID0+IHtcbiAgICBzdGF0ZVt0eXBlXS0tO1xuICAgIHN0YWNrLnBvcCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQdXNoIHRva2VucyBvbnRvIHRoZSB0b2tlbnMgYXJyYXkuIFRoaXMgaGVscGVyIHNwZWVkcyB1cFxuICAgKiB0b2tlbml6aW5nIGJ5IDEpIGhlbHBpbmcgdXMgYXZvaWQgYmFja3RyYWNraW5nIGFzIG11Y2ggYXMgcG9zc2libGUsXG4gICAqIGFuZCAyKSBoZWxwaW5nIHVzIGF2b2lkIGNyZWF0aW5nIGV4dHJhIHRva2VucyB3aGVuIGNvbnNlY3V0aXZlXG4gICAqIGNoYXJhY3RlcnMgYXJlIHBsYWluIHRleHQuIFRoaXMgaW1wcm92ZXMgcGVyZm9ybWFuY2UgYW5kIHNpbXBsaWZpZXNcbiAgICogbG9va2JlaGluZHMuXG4gICAqL1xuXG4gIGNvbnN0IHB1c2ggPSB0b2sgPT4ge1xuICAgIGlmIChwcmV2LnR5cGUgPT09ICdnbG9ic3RhcicpIHtcbiAgICAgIGNvbnN0IGlzQnJhY2UgPSBzdGF0ZS5icmFjZXMgPiAwICYmICh0b2sudHlwZSA9PT0gJ2NvbW1hJyB8fCB0b2sudHlwZSA9PT0gJ2JyYWNlJyk7XG4gICAgICBjb25zdCBpc0V4dGdsb2IgPSB0b2suZXh0Z2xvYiA9PT0gdHJ1ZSB8fCAoZXh0Z2xvYnMubGVuZ3RoICYmICh0b2sudHlwZSA9PT0gJ3BpcGUnIHx8IHRvay50eXBlID09PSAncGFyZW4nKSk7XG5cbiAgICAgIGlmICh0b2sudHlwZSAhPT0gJ3NsYXNoJyAmJiB0b2sudHlwZSAhPT0gJ3BhcmVuJyAmJiAhaXNCcmFjZSAmJiAhaXNFeHRnbG9iKSB7XG4gICAgICAgIHN0YXRlLm91dHB1dCA9IHN0YXRlLm91dHB1dC5zbGljZSgwLCAtcHJldi5vdXRwdXQubGVuZ3RoKTtcbiAgICAgICAgcHJldi50eXBlID0gJ3N0YXInO1xuICAgICAgICBwcmV2LnZhbHVlID0gJyonO1xuICAgICAgICBwcmV2Lm91dHB1dCA9IHN0YXI7XG4gICAgICAgIHN0YXRlLm91dHB1dCArPSBwcmV2Lm91dHB1dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXh0Z2xvYnMubGVuZ3RoICYmIHRvay50eXBlICE9PSAncGFyZW4nKSB7XG4gICAgICBleHRnbG9ic1tleHRnbG9icy5sZW5ndGggLSAxXS5pbm5lciArPSB0b2sudmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKHRvay52YWx1ZSB8fCB0b2sub3V0cHV0KSBhcHBlbmQodG9rKTtcbiAgICBpZiAocHJldiAmJiBwcmV2LnR5cGUgPT09ICd0ZXh0JyAmJiB0b2sudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICBwcmV2LnZhbHVlICs9IHRvay52YWx1ZTtcbiAgICAgIHByZXYub3V0cHV0ID0gKHByZXYub3V0cHV0IHx8ICcnKSArIHRvay52YWx1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2sucHJldiA9IHByZXY7XG4gICAgdG9rZW5zLnB1c2godG9rKTtcbiAgICBwcmV2ID0gdG9rO1xuICB9O1xuXG4gIGNvbnN0IGV4dGdsb2JPcGVuID0gKHR5cGUsIHZhbHVlKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSB7IC4uLkVYVEdMT0JfQ0hBUlNbdmFsdWVdLCBjb25kaXRpb25zOiAxLCBpbm5lcjogJycgfTtcblxuICAgIHRva2VuLnByZXYgPSBwcmV2O1xuICAgIHRva2VuLnBhcmVucyA9IHN0YXRlLnBhcmVucztcbiAgICB0b2tlbi5vdXRwdXQgPSBzdGF0ZS5vdXRwdXQ7XG4gICAgY29uc3Qgb3V0cHV0ID0gKG9wdHMuY2FwdHVyZSA/ICcoJyA6ICcnKSArIHRva2VuLm9wZW47XG5cbiAgICBpbmNyZW1lbnQoJ3BhcmVucycpO1xuICAgIHB1c2goeyB0eXBlLCB2YWx1ZSwgb3V0cHV0OiBzdGF0ZS5vdXRwdXQgPyAnJyA6IE9ORV9DSEFSIH0pO1xuICAgIHB1c2goeyB0eXBlOiAncGFyZW4nLCBleHRnbG9iOiB0cnVlLCB2YWx1ZTogYWR2YW5jZSgpLCBvdXRwdXQgfSk7XG4gICAgZXh0Z2xvYnMucHVzaCh0b2tlbik7XG4gIH07XG5cbiAgY29uc3QgZXh0Z2xvYkNsb3NlID0gdG9rZW4gPT4ge1xuICAgIGxldCBvdXRwdXQgPSB0b2tlbi5jbG9zZSArIChvcHRzLmNhcHR1cmUgPyAnKScgOiAnJyk7XG4gICAgbGV0IHJlc3Q7XG5cbiAgICBpZiAodG9rZW4udHlwZSA9PT0gJ25lZ2F0ZScpIHtcbiAgICAgIGxldCBleHRnbG9iU3RhciA9IHN0YXI7XG5cbiAgICAgIGlmICh0b2tlbi5pbm5lciAmJiB0b2tlbi5pbm5lci5sZW5ndGggPiAxICYmIHRva2VuLmlubmVyLmluY2x1ZGVzKCcvJykpIHtcbiAgICAgICAgZXh0Z2xvYlN0YXIgPSBnbG9ic3RhcihvcHRzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV4dGdsb2JTdGFyICE9PSBzdGFyIHx8IGVvcygpIHx8IC9eXFwpKyQvLnRlc3QocmVtYWluaW5nKCkpKSB7XG4gICAgICAgIG91dHB1dCA9IHRva2VuLmNsb3NlID0gYCkkKSkke2V4dGdsb2JTdGFyfWA7XG4gICAgICB9XG5cbiAgICAgIGlmICh0b2tlbi5pbm5lci5pbmNsdWRlcygnKicpICYmIChyZXN0ID0gcmVtYWluaW5nKCkpICYmIC9eXFwuW15cXFxcLy5dKyQvLnRlc3QocmVzdCkpIHtcbiAgICAgICAgLy8gQW55IG5vbi1tYWdpY2FsIHN0cmluZyAoYC50c2ApIG9yIGV2ZW4gbmVzdGVkIGV4cHJlc3Npb24gKGAue3RzLHRzeH1gKSBjYW4gZm9sbG93IGFmdGVyIHRoZSBjbG9zaW5nIHBhcmVudGhlc2lzLlxuICAgICAgICAvLyBJbiB0aGlzIGNhc2UsIHdlIG5lZWQgdG8gcGFyc2UgdGhlIHN0cmluZyBhbmQgdXNlIGl0IGluIHRoZSBvdXRwdXQgb2YgdGhlIG9yaWdpbmFsIHBhdHRlcm4uXG4gICAgICAgIC8vIFN1aXRhYmxlIHBhdHRlcm5zOiBgLyEoKi5kKS50c2AsIGAvISgqLmQpLnt0cyx0c3h9YCwgYCoqLyEoKi1kYmcpLkAoanMpYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gRGlzYWJsaW5nIHRoZSBgZmFzdHBhdGhzYCBvcHRpb24gZHVlIHRvIGEgcHJvYmxlbSB3aXRoIHBhcnNpbmcgc3RyaW5ncyBhcyBgLnRzYCBpbiB0aGUgcGF0dGVybiBsaWtlIGAqKi8hKCouZCkudHNgLlxuICAgICAgICBjb25zdCBleHByZXNzaW9uID0gcGFyc2UocmVzdCwgeyAuLi5vcHRpb25zLCBmYXN0cGF0aHM6IGZhbHNlIH0pLm91dHB1dDtcblxuICAgICAgICBvdXRwdXQgPSB0b2tlbi5jbG9zZSA9IGApJHtleHByZXNzaW9ufSkke2V4dGdsb2JTdGFyfSlgO1xuICAgICAgfVxuXG4gICAgICBpZiAodG9rZW4ucHJldi50eXBlID09PSAnYm9zJykge1xuICAgICAgICBzdGF0ZS5uZWdhdGVkRXh0Z2xvYiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHVzaCh7IHR5cGU6ICdwYXJlbicsIGV4dGdsb2I6IHRydWUsIHZhbHVlLCBvdXRwdXQgfSk7XG4gICAgZGVjcmVtZW50KCdwYXJlbnMnKTtcbiAgfTtcblxuICAvKipcbiAgICogRmFzdCBwYXRoc1xuICAgKi9cblxuICBpZiAob3B0cy5mYXN0cGF0aHMgIT09IGZhbHNlICYmICEvKF5bKiFdfFsvKClbXFxde31cIl0pLy50ZXN0KGlucHV0KSkge1xuICAgIGxldCBiYWNrc2xhc2hlcyA9IGZhbHNlO1xuXG4gICAgbGV0IG91dHB1dCA9IGlucHV0LnJlcGxhY2UoUkVHRVhfU1BFQ0lBTF9DSEFSU19CQUNLUkVGLCAobSwgZXNjLCBjaGFycywgZmlyc3QsIHJlc3QsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoZmlyc3QgPT09ICdcXFxcJykge1xuICAgICAgICBiYWNrc2xhc2hlcyA9IHRydWU7XG4gICAgICAgIHJldHVybiBtO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmlyc3QgPT09ICc/Jykge1xuICAgICAgICBpZiAoZXNjKSB7XG4gICAgICAgICAgcmV0dXJuIGVzYyArIGZpcnN0ICsgKHJlc3QgPyBRTUFSSy5yZXBlYXQocmVzdC5sZW5ndGgpIDogJycpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBxbWFya05vRG90ICsgKHJlc3QgPyBRTUFSSy5yZXBlYXQocmVzdC5sZW5ndGgpIDogJycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBRTUFSSy5yZXBlYXQoY2hhcnMubGVuZ3RoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpcnN0ID09PSAnLicpIHtcbiAgICAgICAgcmV0dXJuIERPVF9MSVRFUkFMLnJlcGVhdChjaGFycy5sZW5ndGgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmlyc3QgPT09ICcqJykge1xuICAgICAgICBpZiAoZXNjKSB7XG4gICAgICAgICAgcmV0dXJuIGVzYyArIGZpcnN0ICsgKHJlc3QgPyBzdGFyIDogJycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGFyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVzYyA/IG0gOiBgXFxcXCR7bX1gO1xuICAgIH0pO1xuXG4gICAgaWYgKGJhY2tzbGFzaGVzID09PSB0cnVlKSB7XG4gICAgICBpZiAob3B0cy51bmVzY2FwZSA9PT0gdHJ1ZSkge1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXQucmVwbGFjZSgvXFxcXC9nLCAnJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXQucmVwbGFjZSgvXFxcXCsvZywgbSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG0ubGVuZ3RoICUgMiA9PT0gMCA/ICdcXFxcXFxcXCcgOiAobSA/ICdcXFxcJyA6ICcnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG91dHB1dCA9PT0gaW5wdXQgJiYgb3B0cy5jb250YWlucyA9PT0gdHJ1ZSkge1xuICAgICAgc3RhdGUub3V0cHV0ID0gaW5wdXQ7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuXG4gICAgc3RhdGUub3V0cHV0ID0gdXRpbHMud3JhcE91dHB1dChvdXRwdXQsIHN0YXRlLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICAvKipcbiAgICogVG9rZW5pemUgaW5wdXQgdW50aWwgd2UgcmVhY2ggZW5kLW9mLXN0cmluZ1xuICAgKi9cblxuICB3aGlsZSAoIWVvcygpKSB7XG4gICAgdmFsdWUgPSBhZHZhbmNlKCk7XG5cbiAgICBpZiAodmFsdWUgPT09ICdcXHUwMDAwJykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXNjYXBlZCBjaGFyYWN0ZXJzXG4gICAgICovXG5cbiAgICBpZiAodmFsdWUgPT09ICdcXFxcJykge1xuICAgICAgY29uc3QgbmV4dCA9IHBlZWsoKTtcblxuICAgICAgaWYgKG5leHQgPT09ICcvJyAmJiBvcHRzLmJhc2ggIT09IHRydWUpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXh0ID09PSAnLicgfHwgbmV4dCA9PT0gJzsnKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW5leHQpIHtcbiAgICAgICAgdmFsdWUgKz0gJ1xcXFwnO1xuICAgICAgICBwdXNoKHsgdHlwZTogJ3RleHQnLCB2YWx1ZSB9KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIGNvbGxhcHNlIHNsYXNoZXMgdG8gcmVkdWNlIHBvdGVudGlhbCBmb3IgZXhwbG9pdHNcbiAgICAgIGNvbnN0IG1hdGNoID0gL15cXFxcKy8uZXhlYyhyZW1haW5pbmcoKSk7XG4gICAgICBsZXQgc2xhc2hlcyA9IDA7XG5cbiAgICAgIGlmIChtYXRjaCAmJiBtYXRjaFswXS5sZW5ndGggPiAyKSB7XG4gICAgICAgIHNsYXNoZXMgPSBtYXRjaFswXS5sZW5ndGg7XG4gICAgICAgIHN0YXRlLmluZGV4ICs9IHNsYXNoZXM7XG4gICAgICAgIGlmIChzbGFzaGVzICUgMiAhPT0gMCkge1xuICAgICAgICAgIHZhbHVlICs9ICdcXFxcJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAob3B0cy51bmVzY2FwZSA9PT0gdHJ1ZSkge1xuICAgICAgICB2YWx1ZSA9IGFkdmFuY2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlICs9IGFkdmFuY2UoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlLmJyYWNrZXRzID09PSAwKSB7XG4gICAgICAgIHB1c2goeyB0eXBlOiAndGV4dCcsIHZhbHVlIH0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiB3ZSdyZSBpbnNpZGUgYSByZWdleCBjaGFyYWN0ZXIgY2xhc3MsIGNvbnRpbnVlXG4gICAgICogdW50aWwgd2UgcmVhY2ggdGhlIGNsb3NpbmcgYnJhY2tldC5cbiAgICAgKi9cblxuICAgIGlmIChzdGF0ZS5icmFja2V0cyA+IDAgJiYgKHZhbHVlICE9PSAnXScgfHwgcHJldi52YWx1ZSA9PT0gJ1snIHx8IHByZXYudmFsdWUgPT09ICdbXicpKSB7XG4gICAgICBpZiAob3B0cy5wb3NpeCAhPT0gZmFsc2UgJiYgdmFsdWUgPT09ICc6Jykge1xuICAgICAgICBjb25zdCBpbm5lciA9IHByZXYudmFsdWUuc2xpY2UoMSk7XG4gICAgICAgIGlmIChpbm5lci5pbmNsdWRlcygnWycpKSB7XG4gICAgICAgICAgcHJldi5wb3NpeCA9IHRydWU7XG5cbiAgICAgICAgICBpZiAoaW5uZXIuaW5jbHVkZXMoJzonKSkge1xuICAgICAgICAgICAgY29uc3QgaWR4ID0gcHJldi52YWx1ZS5sYXN0SW5kZXhPZignWycpO1xuICAgICAgICAgICAgY29uc3QgcHJlID0gcHJldi52YWx1ZS5zbGljZSgwLCBpZHgpO1xuICAgICAgICAgICAgY29uc3QgcmVzdCA9IHByZXYudmFsdWUuc2xpY2UoaWR4ICsgMik7XG4gICAgICAgICAgICBjb25zdCBwb3NpeCA9IFBPU0lYX1JFR0VYX1NPVVJDRVtyZXN0XTtcbiAgICAgICAgICAgIGlmIChwb3NpeCkge1xuICAgICAgICAgICAgICBwcmV2LnZhbHVlID0gcHJlICsgcG9zaXg7XG4gICAgICAgICAgICAgIHN0YXRlLmJhY2t0cmFjayA9IHRydWU7XG4gICAgICAgICAgICAgIGFkdmFuY2UoKTtcblxuICAgICAgICAgICAgICBpZiAoIWJvcy5vdXRwdXQgJiYgdG9rZW5zLmluZGV4T2YocHJldikgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBib3Mub3V0cHV0ID0gT05FX0NIQVI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgodmFsdWUgPT09ICdbJyAmJiBwZWVrKCkgIT09ICc6JykgfHwgKHZhbHVlID09PSAnLScgJiYgcGVlaygpID09PSAnXScpKSB7XG4gICAgICAgIHZhbHVlID0gYFxcXFwke3ZhbHVlfWA7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZSA9PT0gJ10nICYmIChwcmV2LnZhbHVlID09PSAnWycgfHwgcHJldi52YWx1ZSA9PT0gJ1teJykpIHtcbiAgICAgICAgdmFsdWUgPSBgXFxcXCR7dmFsdWV9YDtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdHMucG9zaXggPT09IHRydWUgJiYgdmFsdWUgPT09ICchJyAmJiBwcmV2LnZhbHVlID09PSAnWycpIHtcbiAgICAgICAgdmFsdWUgPSAnXic7XG4gICAgICB9XG5cbiAgICAgIHByZXYudmFsdWUgKz0gdmFsdWU7XG4gICAgICBhcHBlbmQoeyB2YWx1ZSB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIHdlJ3JlIGluc2lkZSBhIHF1b3RlZCBzdHJpbmcsIGNvbnRpbnVlXG4gICAgICogdW50aWwgd2UgcmVhY2ggdGhlIGNsb3NpbmcgZG91YmxlIHF1b3RlLlxuICAgICAqL1xuXG4gICAgaWYgKHN0YXRlLnF1b3RlcyA9PT0gMSAmJiB2YWx1ZSAhPT0gJ1wiJykge1xuICAgICAgdmFsdWUgPSB1dGlscy5lc2NhcGVSZWdleCh2YWx1ZSk7XG4gICAgICBwcmV2LnZhbHVlICs9IHZhbHVlO1xuICAgICAgYXBwZW5kKHsgdmFsdWUgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEb3VibGUgcXVvdGVzXG4gICAgICovXG5cbiAgICBpZiAodmFsdWUgPT09ICdcIicpIHtcbiAgICAgIHN0YXRlLnF1b3RlcyA9IHN0YXRlLnF1b3RlcyA9PT0gMSA/IDAgOiAxO1xuICAgICAgaWYgKG9wdHMua2VlcFF1b3RlcyA9PT0gdHJ1ZSkge1xuICAgICAgICBwdXNoKHsgdHlwZTogJ3RleHQnLCB2YWx1ZSB9KTtcbiAgICAgIH1cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcmVudGhlc2VzXG4gICAgICovXG5cbiAgICBpZiAodmFsdWUgPT09ICcoJykge1xuICAgICAgaW5jcmVtZW50KCdwYXJlbnMnKTtcbiAgICAgIHB1c2goeyB0eXBlOiAncGFyZW4nLCB2YWx1ZSB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSA9PT0gJyknKSB7XG4gICAgICBpZiAoc3RhdGUucGFyZW5zID09PSAwICYmIG9wdHMuc3RyaWN0QnJhY2tldHMgPT09IHRydWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKHN5bnRheEVycm9yKCdvcGVuaW5nJywgJygnKSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGV4dGdsb2IgPSBleHRnbG9ic1tleHRnbG9icy5sZW5ndGggLSAxXTtcbiAgICAgIGlmIChleHRnbG9iICYmIHN0YXRlLnBhcmVucyA9PT0gZXh0Z2xvYi5wYXJlbnMgKyAxKSB7XG4gICAgICAgIGV4dGdsb2JDbG9zZShleHRnbG9icy5wb3AoKSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBwdXNoKHsgdHlwZTogJ3BhcmVuJywgdmFsdWUsIG91dHB1dDogc3RhdGUucGFyZW5zID8gJyknIDogJ1xcXFwpJyB9KTtcbiAgICAgIGRlY3JlbWVudCgncGFyZW5zJyk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTcXVhcmUgYnJhY2tldHNcbiAgICAgKi9cblxuICAgIGlmICh2YWx1ZSA9PT0gJ1snKSB7XG4gICAgICBpZiAob3B0cy5ub2JyYWNrZXQgPT09IHRydWUgfHwgIXJlbWFpbmluZygpLmluY2x1ZGVzKCddJykpIHtcbiAgICAgICAgaWYgKG9wdHMubm9icmFja2V0ICE9PSB0cnVlICYmIG9wdHMuc3RyaWN0QnJhY2tldHMgPT09IHRydWUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3Ioc3ludGF4RXJyb3IoJ2Nsb3NpbmcnLCAnXScpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlID0gYFxcXFwke3ZhbHVlfWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmNyZW1lbnQoJ2JyYWNrZXRzJyk7XG4gICAgICB9XG5cbiAgICAgIHB1c2goeyB0eXBlOiAnYnJhY2tldCcsIHZhbHVlIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlID09PSAnXScpIHtcbiAgICAgIGlmIChvcHRzLm5vYnJhY2tldCA9PT0gdHJ1ZSB8fCAocHJldiAmJiBwcmV2LnR5cGUgPT09ICdicmFja2V0JyAmJiBwcmV2LnZhbHVlLmxlbmd0aCA9PT0gMSkpIHtcbiAgICAgICAgcHVzaCh7IHR5cGU6ICd0ZXh0JywgdmFsdWUsIG91dHB1dDogYFxcXFwke3ZhbHVlfWAgfSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUuYnJhY2tldHMgPT09IDApIHtcbiAgICAgICAgaWYgKG9wdHMuc3RyaWN0QnJhY2tldHMgPT09IHRydWUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3Ioc3ludGF4RXJyb3IoJ29wZW5pbmcnLCAnWycpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1c2goeyB0eXBlOiAndGV4dCcsIHZhbHVlLCBvdXRwdXQ6IGBcXFxcJHt2YWx1ZX1gIH0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgZGVjcmVtZW50KCdicmFja2V0cycpO1xuXG4gICAgICBjb25zdCBwcmV2VmFsdWUgPSBwcmV2LnZhbHVlLnNsaWNlKDEpO1xuICAgICAgaWYgKHByZXYucG9zaXggIT09IHRydWUgJiYgcHJldlZhbHVlWzBdID09PSAnXicgJiYgIXByZXZWYWx1ZS5pbmNsdWRlcygnLycpKSB7XG4gICAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWA7XG4gICAgICB9XG5cbiAgICAgIHByZXYudmFsdWUgKz0gdmFsdWU7XG4gICAgICBhcHBlbmQoeyB2YWx1ZSB9KTtcblxuICAgICAgLy8gd2hlbiBsaXRlcmFsIGJyYWNrZXRzIGFyZSBleHBsaWNpdGx5IGRpc2FibGVkXG4gICAgICAvLyBhc3N1bWUgd2Ugc2hvdWxkIG1hdGNoIHdpdGggYSByZWdleCBjaGFyYWN0ZXIgY2xhc3NcbiAgICAgIGlmIChvcHRzLmxpdGVyYWxCcmFja2V0cyA9PT0gZmFsc2UgfHwgdXRpbHMuaGFzUmVnZXhDaGFycyhwcmV2VmFsdWUpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBlc2NhcGVkID0gdXRpbHMuZXNjYXBlUmVnZXgocHJldi52YWx1ZSk7XG4gICAgICBzdGF0ZS5vdXRwdXQgPSBzdGF0ZS5vdXRwdXQuc2xpY2UoMCwgLXByZXYudmFsdWUubGVuZ3RoKTtcblxuICAgICAgLy8gd2hlbiBsaXRlcmFsIGJyYWNrZXRzIGFyZSBleHBsaWNpdGx5IGVuYWJsZWRcbiAgICAgIC8vIGFzc3VtZSB3ZSBzaG91bGQgZXNjYXBlIHRoZSBicmFja2V0cyB0byBtYXRjaCBsaXRlcmFsIGNoYXJhY3RlcnNcbiAgICAgIGlmIChvcHRzLmxpdGVyYWxCcmFja2V0cyA9PT0gdHJ1ZSkge1xuICAgICAgICBzdGF0ZS5vdXRwdXQgKz0gZXNjYXBlZDtcbiAgICAgICAgcHJldi52YWx1ZSA9IGVzY2FwZWQ7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyB3aGVuIHRoZSB1c2VyIHNwZWNpZmllcyBub3RoaW5nLCB0cnkgdG8gbWF0Y2ggYm90aFxuICAgICAgcHJldi52YWx1ZSA9IGAoJHtjYXB0dXJlfSR7ZXNjYXBlZH18JHtwcmV2LnZhbHVlfSlgO1xuICAgICAgc3RhdGUub3V0cHV0ICs9IHByZXYudmFsdWU7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCcmFjZXNcbiAgICAgKi9cblxuICAgIGlmICh2YWx1ZSA9PT0gJ3snICYmIG9wdHMubm9icmFjZSAhPT0gdHJ1ZSkge1xuICAgICAgaW5jcmVtZW50KCdicmFjZXMnKTtcblxuICAgICAgY29uc3Qgb3BlbiA9IHtcbiAgICAgICAgdHlwZTogJ2JyYWNlJyxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIG91dHB1dDogJygnLFxuICAgICAgICBvdXRwdXRJbmRleDogc3RhdGUub3V0cHV0Lmxlbmd0aCxcbiAgICAgICAgdG9rZW5zSW5kZXg6IHN0YXRlLnRva2Vucy5sZW5ndGhcbiAgICAgIH07XG5cbiAgICAgIGJyYWNlcy5wdXNoKG9wZW4pO1xuICAgICAgcHVzaChvcGVuKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSA9PT0gJ30nKSB7XG4gICAgICBjb25zdCBicmFjZSA9IGJyYWNlc1ticmFjZXMubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmIChvcHRzLm5vYnJhY2UgPT09IHRydWUgfHwgIWJyYWNlKSB7XG4gICAgICAgIHB1c2goeyB0eXBlOiAndGV4dCcsIHZhbHVlLCBvdXRwdXQ6IHZhbHVlIH0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IG91dHB1dCA9ICcpJztcblxuICAgICAgaWYgKGJyYWNlLmRvdHMgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgYXJyID0gdG9rZW5zLnNsaWNlKCk7XG4gICAgICAgIGNvbnN0IHJhbmdlID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIHRva2Vucy5wb3AoKTtcbiAgICAgICAgICBpZiAoYXJyW2ldLnR5cGUgPT09ICdicmFjZScpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYXJyW2ldLnR5cGUgIT09ICdkb3RzJykge1xuICAgICAgICAgICAgcmFuZ2UudW5zaGlmdChhcnJbaV0udmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG91dHB1dCA9IGV4cGFuZFJhbmdlKHJhbmdlLCBvcHRzKTtcbiAgICAgICAgc3RhdGUuYmFja3RyYWNrID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGJyYWNlLmNvbW1hICE9PSB0cnVlICYmIGJyYWNlLmRvdHMgIT09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgb3V0ID0gc3RhdGUub3V0cHV0LnNsaWNlKDAsIGJyYWNlLm91dHB1dEluZGV4KTtcbiAgICAgICAgY29uc3QgdG9rcyA9IHN0YXRlLnRva2Vucy5zbGljZShicmFjZS50b2tlbnNJbmRleCk7XG4gICAgICAgIGJyYWNlLnZhbHVlID0gYnJhY2Uub3V0cHV0ID0gJ1xcXFx7JztcbiAgICAgICAgdmFsdWUgPSBvdXRwdXQgPSAnXFxcXH0nO1xuICAgICAgICBzdGF0ZS5vdXRwdXQgPSBvdXQ7XG4gICAgICAgIGZvciAoY29uc3QgdCBvZiB0b2tzKSB7XG4gICAgICAgICAgc3RhdGUub3V0cHV0ICs9ICh0Lm91dHB1dCB8fCB0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwdXNoKHsgdHlwZTogJ2JyYWNlJywgdmFsdWUsIG91dHB1dCB9KTtcbiAgICAgIGRlY3JlbWVudCgnYnJhY2VzJyk7XG4gICAgICBicmFjZXMucG9wKCk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQaXBlc1xuICAgICAqL1xuXG4gICAgaWYgKHZhbHVlID09PSAnfCcpIHtcbiAgICAgIGlmIChleHRnbG9icy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGV4dGdsb2JzW2V4dGdsb2JzLmxlbmd0aCAtIDFdLmNvbmRpdGlvbnMrKztcbiAgICAgIH1cbiAgICAgIHB1c2goeyB0eXBlOiAndGV4dCcsIHZhbHVlIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tbWFzXG4gICAgICovXG5cbiAgICBpZiAodmFsdWUgPT09ICcsJykge1xuICAgICAgbGV0IG91dHB1dCA9IHZhbHVlO1xuXG4gICAgICBjb25zdCBicmFjZSA9IGJyYWNlc1ticmFjZXMubGVuZ3RoIC0gMV07XG4gICAgICBpZiAoYnJhY2UgJiYgc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gPT09ICdicmFjZXMnKSB7XG4gICAgICAgIGJyYWNlLmNvbW1hID0gdHJ1ZTtcbiAgICAgICAgb3V0cHV0ID0gJ3wnO1xuICAgICAgfVxuXG4gICAgICBwdXNoKHsgdHlwZTogJ2NvbW1hJywgdmFsdWUsIG91dHB1dCB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNsYXNoZXNcbiAgICAgKi9cblxuICAgIGlmICh2YWx1ZSA9PT0gJy8nKSB7XG4gICAgICAvLyBpZiB0aGUgYmVnaW5uaW5nIG9mIHRoZSBnbG9iIGlzIFwiLi9cIiwgYWR2YW5jZSB0aGUgc3RhcnRcbiAgICAgIC8vIHRvIHRoZSBjdXJyZW50IGluZGV4LCBhbmQgZG9uJ3QgYWRkIHRoZSBcIi4vXCIgY2hhcmFjdGVyc1xuICAgICAgLy8gdG8gdGhlIHN0YXRlLiBUaGlzIGdyZWF0bHkgc2ltcGxpZmllcyBsb29rYmVoaW5kcyB3aGVuXG4gICAgICAvLyBjaGVja2luZyBmb3IgQk9TIGNoYXJhY3RlcnMgbGlrZSBcIiFcIiBhbmQgXCIuXCIgKG5vdCBcIi4vXCIpXG4gICAgICBpZiAocHJldi50eXBlID09PSAnZG90JyAmJiBzdGF0ZS5pbmRleCA9PT0gc3RhdGUuc3RhcnQgKyAxKSB7XG4gICAgICAgIHN0YXRlLnN0YXJ0ID0gc3RhdGUuaW5kZXggKyAxO1xuICAgICAgICBzdGF0ZS5jb25zdW1lZCA9ICcnO1xuICAgICAgICBzdGF0ZS5vdXRwdXQgPSAnJztcbiAgICAgICAgdG9rZW5zLnBvcCgpO1xuICAgICAgICBwcmV2ID0gYm9zOyAvLyByZXNldCBcInByZXZcIiB0byB0aGUgZmlyc3QgdG9rZW5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHB1c2goeyB0eXBlOiAnc2xhc2gnLCB2YWx1ZSwgb3V0cHV0OiBTTEFTSF9MSVRFUkFMIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRG90c1xuICAgICAqL1xuXG4gICAgaWYgKHZhbHVlID09PSAnLicpIHtcbiAgICAgIGlmIChzdGF0ZS5icmFjZXMgPiAwICYmIHByZXYudHlwZSA9PT0gJ2RvdCcpIHtcbiAgICAgICAgaWYgKHByZXYudmFsdWUgPT09ICcuJykgcHJldi5vdXRwdXQgPSBET1RfTElURVJBTDtcbiAgICAgICAgY29uc3QgYnJhY2UgPSBicmFjZXNbYnJhY2VzLmxlbmd0aCAtIDFdO1xuICAgICAgICBwcmV2LnR5cGUgPSAnZG90cyc7XG4gICAgICAgIHByZXYub3V0cHV0ICs9IHZhbHVlO1xuICAgICAgICBwcmV2LnZhbHVlICs9IHZhbHVlO1xuICAgICAgICBicmFjZS5kb3RzID0gdHJ1ZTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICgoc3RhdGUuYnJhY2VzICsgc3RhdGUucGFyZW5zKSA9PT0gMCAmJiBwcmV2LnR5cGUgIT09ICdib3MnICYmIHByZXYudHlwZSAhPT0gJ3NsYXNoJykge1xuICAgICAgICBwdXNoKHsgdHlwZTogJ3RleHQnLCB2YWx1ZSwgb3V0cHV0OiBET1RfTElURVJBTCB9KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHB1c2goeyB0eXBlOiAnZG90JywgdmFsdWUsIG91dHB1dDogRE9UX0xJVEVSQUwgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBRdWVzdGlvbiBtYXJrc1xuICAgICAqL1xuXG4gICAgaWYgKHZhbHVlID09PSAnPycpIHtcbiAgICAgIGNvbnN0IGlzR3JvdXAgPSBwcmV2ICYmIHByZXYudmFsdWUgPT09ICcoJztcbiAgICAgIGlmICghaXNHcm91cCAmJiBvcHRzLm5vZXh0Z2xvYiAhPT0gdHJ1ZSAmJiBwZWVrKCkgPT09ICcoJyAmJiBwZWVrKDIpICE9PSAnPycpIHtcbiAgICAgICAgZXh0Z2xvYk9wZW4oJ3FtYXJrJywgdmFsdWUpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByZXYgJiYgcHJldi50eXBlID09PSAncGFyZW4nKSB7XG4gICAgICAgIGNvbnN0IG5leHQgPSBwZWVrKCk7XG4gICAgICAgIGxldCBvdXRwdXQgPSB2YWx1ZTtcblxuICAgICAgICBpZiAobmV4dCA9PT0gJzwnICYmICF1dGlscy5zdXBwb3J0c0xvb2tiZWhpbmRzKCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vZGUuanMgdjEwIG9yIGhpZ2hlciBpcyByZXF1aXJlZCBmb3IgcmVnZXggbG9va2JlaGluZHMnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgocHJldi52YWx1ZSA9PT0gJygnICYmICEvWyE9PDpdLy50ZXN0KG5leHQpKSB8fCAobmV4dCA9PT0gJzwnICYmICEvPChbIT1dfFxcdys+KS8udGVzdChyZW1haW5pbmcoKSkpKSB7XG4gICAgICAgICAgb3V0cHV0ID0gYFxcXFwke3ZhbHVlfWA7XG4gICAgICAgIH1cblxuICAgICAgICBwdXNoKHsgdHlwZTogJ3RleHQnLCB2YWx1ZSwgb3V0cHV0IH0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdHMuZG90ICE9PSB0cnVlICYmIChwcmV2LnR5cGUgPT09ICdzbGFzaCcgfHwgcHJldi50eXBlID09PSAnYm9zJykpIHtcbiAgICAgICAgcHVzaCh7IHR5cGU6ICdxbWFyaycsIHZhbHVlLCBvdXRwdXQ6IFFNQVJLX05PX0RPVCB9KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHB1c2goeyB0eXBlOiAncW1hcmsnLCB2YWx1ZSwgb3V0cHV0OiBRTUFSSyB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4Y2xhbWF0aW9uXG4gICAgICovXG5cbiAgICBpZiAodmFsdWUgPT09ICchJykge1xuICAgICAgaWYgKG9wdHMubm9leHRnbG9iICE9PSB0cnVlICYmIHBlZWsoKSA9PT0gJygnKSB7XG4gICAgICAgIGlmIChwZWVrKDIpICE9PSAnPycgfHwgIS9bIT08Ol0vLnRlc3QocGVlaygzKSkpIHtcbiAgICAgICAgICBleHRnbG9iT3BlbignbmVnYXRlJywgdmFsdWUpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRzLm5vbmVnYXRlICE9PSB0cnVlICYmIHN0YXRlLmluZGV4ID09PSAwKSB7XG4gICAgICAgIG5lZ2F0ZSgpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbHVzXG4gICAgICovXG5cbiAgICBpZiAodmFsdWUgPT09ICcrJykge1xuICAgICAgaWYgKG9wdHMubm9leHRnbG9iICE9PSB0cnVlICYmIHBlZWsoKSA9PT0gJygnICYmIHBlZWsoMikgIT09ICc/Jykge1xuICAgICAgICBleHRnbG9iT3BlbigncGx1cycsIHZhbHVlKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICgocHJldiAmJiBwcmV2LnZhbHVlID09PSAnKCcpIHx8IG9wdHMucmVnZXggPT09IGZhbHNlKSB7XG4gICAgICAgIHB1c2goeyB0eXBlOiAncGx1cycsIHZhbHVlLCBvdXRwdXQ6IFBMVVNfTElURVJBTCB9KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICgocHJldiAmJiAocHJldi50eXBlID09PSAnYnJhY2tldCcgfHwgcHJldi50eXBlID09PSAncGFyZW4nIHx8IHByZXYudHlwZSA9PT0gJ2JyYWNlJykpIHx8IHN0YXRlLnBhcmVucyA+IDApIHtcbiAgICAgICAgcHVzaCh7IHR5cGU6ICdwbHVzJywgdmFsdWUgfSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBwdXNoKHsgdHlwZTogJ3BsdXMnLCB2YWx1ZTogUExVU19MSVRFUkFMIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxhaW4gdGV4dFxuICAgICAqL1xuXG4gICAgaWYgKHZhbHVlID09PSAnQCcpIHtcbiAgICAgIGlmIChvcHRzLm5vZXh0Z2xvYiAhPT0gdHJ1ZSAmJiBwZWVrKCkgPT09ICcoJyAmJiBwZWVrKDIpICE9PSAnPycpIHtcbiAgICAgICAgcHVzaCh7IHR5cGU6ICdhdCcsIGV4dGdsb2I6IHRydWUsIHZhbHVlLCBvdXRwdXQ6ICcnIH0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgcHVzaCh7IHR5cGU6ICd0ZXh0JywgdmFsdWUgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbGFpbiB0ZXh0XG4gICAgICovXG5cbiAgICBpZiAodmFsdWUgIT09ICcqJykge1xuICAgICAgaWYgKHZhbHVlID09PSAnJCcgfHwgdmFsdWUgPT09ICdeJykge1xuICAgICAgICB2YWx1ZSA9IGBcXFxcJHt2YWx1ZX1gO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtYXRjaCA9IFJFR0VYX05PTl9TUEVDSUFMX0NIQVJTLmV4ZWMocmVtYWluaW5nKCkpO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHZhbHVlICs9IG1hdGNoWzBdO1xuICAgICAgICBzdGF0ZS5pbmRleCArPSBtYXRjaFswXS5sZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIHB1c2goeyB0eXBlOiAndGV4dCcsIHZhbHVlIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RhcnNcbiAgICAgKi9cblxuICAgIGlmIChwcmV2ICYmIChwcmV2LnR5cGUgPT09ICdnbG9ic3RhcicgfHwgcHJldi5zdGFyID09PSB0cnVlKSkge1xuICAgICAgcHJldi50eXBlID0gJ3N0YXInO1xuICAgICAgcHJldi5zdGFyID0gdHJ1ZTtcbiAgICAgIHByZXYudmFsdWUgKz0gdmFsdWU7XG4gICAgICBwcmV2Lm91dHB1dCA9IHN0YXI7XG4gICAgICBzdGF0ZS5iYWNrdHJhY2sgPSB0cnVlO1xuICAgICAgc3RhdGUuZ2xvYnN0YXIgPSB0cnVlO1xuICAgICAgY29uc3VtZSh2YWx1ZSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBsZXQgcmVzdCA9IHJlbWFpbmluZygpO1xuICAgIGlmIChvcHRzLm5vZXh0Z2xvYiAhPT0gdHJ1ZSAmJiAvXlxcKFteP10vLnRlc3QocmVzdCkpIHtcbiAgICAgIGV4dGdsb2JPcGVuKCdzdGFyJywgdmFsdWUpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKHByZXYudHlwZSA9PT0gJ3N0YXInKSB7XG4gICAgICBpZiAob3B0cy5ub2dsb2JzdGFyID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN1bWUodmFsdWUpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJpb3IgPSBwcmV2LnByZXY7XG4gICAgICBjb25zdCBiZWZvcmUgPSBwcmlvci5wcmV2O1xuICAgICAgY29uc3QgaXNTdGFydCA9IHByaW9yLnR5cGUgPT09ICdzbGFzaCcgfHwgcHJpb3IudHlwZSA9PT0gJ2Jvcyc7XG4gICAgICBjb25zdCBhZnRlclN0YXIgPSBiZWZvcmUgJiYgKGJlZm9yZS50eXBlID09PSAnc3RhcicgfHwgYmVmb3JlLnR5cGUgPT09ICdnbG9ic3RhcicpO1xuXG4gICAgICBpZiAob3B0cy5iYXNoID09PSB0cnVlICYmICghaXNTdGFydCB8fCAocmVzdFswXSAmJiByZXN0WzBdICE9PSAnLycpKSkge1xuICAgICAgICBwdXNoKHsgdHlwZTogJ3N0YXInLCB2YWx1ZSwgb3V0cHV0OiAnJyB9KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzQnJhY2UgPSBzdGF0ZS5icmFjZXMgPiAwICYmIChwcmlvci50eXBlID09PSAnY29tbWEnIHx8IHByaW9yLnR5cGUgPT09ICdicmFjZScpO1xuICAgICAgY29uc3QgaXNFeHRnbG9iID0gZXh0Z2xvYnMubGVuZ3RoICYmIChwcmlvci50eXBlID09PSAncGlwZScgfHwgcHJpb3IudHlwZSA9PT0gJ3BhcmVuJyk7XG4gICAgICBpZiAoIWlzU3RhcnQgJiYgcHJpb3IudHlwZSAhPT0gJ3BhcmVuJyAmJiAhaXNCcmFjZSAmJiAhaXNFeHRnbG9iKSB7XG4gICAgICAgIHB1c2goeyB0eXBlOiAnc3RhcicsIHZhbHVlLCBvdXRwdXQ6ICcnIH0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gc3RyaXAgY29uc2VjdXRpdmUgYC8qKi9gXG4gICAgICB3aGlsZSAocmVzdC5zbGljZSgwLCAzKSA9PT0gJy8qKicpIHtcbiAgICAgICAgY29uc3QgYWZ0ZXIgPSBpbnB1dFtzdGF0ZS5pbmRleCArIDRdO1xuICAgICAgICBpZiAoYWZ0ZXIgJiYgYWZ0ZXIgIT09ICcvJykge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJlc3QgPSByZXN0LnNsaWNlKDMpO1xuICAgICAgICBjb25zdW1lKCcvKionLCAzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByaW9yLnR5cGUgPT09ICdib3MnICYmIGVvcygpKSB7XG4gICAgICAgIHByZXYudHlwZSA9ICdnbG9ic3Rhcic7XG4gICAgICAgIHByZXYudmFsdWUgKz0gdmFsdWU7XG4gICAgICAgIHByZXYub3V0cHV0ID0gZ2xvYnN0YXIob3B0cyk7XG4gICAgICAgIHN0YXRlLm91dHB1dCA9IHByZXYub3V0cHV0O1xuICAgICAgICBzdGF0ZS5nbG9ic3RhciA9IHRydWU7XG4gICAgICAgIGNvbnN1bWUodmFsdWUpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByaW9yLnR5cGUgPT09ICdzbGFzaCcgJiYgcHJpb3IucHJldi50eXBlICE9PSAnYm9zJyAmJiAhYWZ0ZXJTdGFyICYmIGVvcygpKSB7XG4gICAgICAgIHN0YXRlLm91dHB1dCA9IHN0YXRlLm91dHB1dC5zbGljZSgwLCAtKHByaW9yLm91dHB1dCArIHByZXYub3V0cHV0KS5sZW5ndGgpO1xuICAgICAgICBwcmlvci5vdXRwdXQgPSBgKD86JHtwcmlvci5vdXRwdXR9YDtcblxuICAgICAgICBwcmV2LnR5cGUgPSAnZ2xvYnN0YXInO1xuICAgICAgICBwcmV2Lm91dHB1dCA9IGdsb2JzdGFyKG9wdHMpICsgKG9wdHMuc3RyaWN0U2xhc2hlcyA/ICcpJyA6ICd8JCknKTtcbiAgICAgICAgcHJldi52YWx1ZSArPSB2YWx1ZTtcbiAgICAgICAgc3RhdGUuZ2xvYnN0YXIgPSB0cnVlO1xuICAgICAgICBzdGF0ZS5vdXRwdXQgKz0gcHJpb3Iub3V0cHV0ICsgcHJldi5vdXRwdXQ7XG4gICAgICAgIGNvbnN1bWUodmFsdWUpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByaW9yLnR5cGUgPT09ICdzbGFzaCcgJiYgcHJpb3IucHJldi50eXBlICE9PSAnYm9zJyAmJiByZXN0WzBdID09PSAnLycpIHtcbiAgICAgICAgY29uc3QgZW5kID0gcmVzdFsxXSAhPT0gdm9pZCAwID8gJ3wkJyA6ICcnO1xuXG4gICAgICAgIHN0YXRlLm91dHB1dCA9IHN0YXRlLm91dHB1dC5zbGljZSgwLCAtKHByaW9yLm91dHB1dCArIHByZXYub3V0cHV0KS5sZW5ndGgpO1xuICAgICAgICBwcmlvci5vdXRwdXQgPSBgKD86JHtwcmlvci5vdXRwdXR9YDtcblxuICAgICAgICBwcmV2LnR5cGUgPSAnZ2xvYnN0YXInO1xuICAgICAgICBwcmV2Lm91dHB1dCA9IGAke2dsb2JzdGFyKG9wdHMpfSR7U0xBU0hfTElURVJBTH18JHtTTEFTSF9MSVRFUkFMfSR7ZW5kfSlgO1xuICAgICAgICBwcmV2LnZhbHVlICs9IHZhbHVlO1xuXG4gICAgICAgIHN0YXRlLm91dHB1dCArPSBwcmlvci5vdXRwdXQgKyBwcmV2Lm91dHB1dDtcbiAgICAgICAgc3RhdGUuZ2xvYnN0YXIgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN1bWUodmFsdWUgKyBhZHZhbmNlKCkpO1xuXG4gICAgICAgIHB1c2goeyB0eXBlOiAnc2xhc2gnLCB2YWx1ZTogJy8nLCBvdXRwdXQ6ICcnIH0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByaW9yLnR5cGUgPT09ICdib3MnICYmIHJlc3RbMF0gPT09ICcvJykge1xuICAgICAgICBwcmV2LnR5cGUgPSAnZ2xvYnN0YXInO1xuICAgICAgICBwcmV2LnZhbHVlICs9IHZhbHVlO1xuICAgICAgICBwcmV2Lm91dHB1dCA9IGAoPzpefCR7U0xBU0hfTElURVJBTH18JHtnbG9ic3RhcihvcHRzKX0ke1NMQVNIX0xJVEVSQUx9KWA7XG4gICAgICAgIHN0YXRlLm91dHB1dCA9IHByZXYub3V0cHV0O1xuICAgICAgICBzdGF0ZS5nbG9ic3RhciA9IHRydWU7XG4gICAgICAgIGNvbnN1bWUodmFsdWUgKyBhZHZhbmNlKCkpO1xuICAgICAgICBwdXNoKHsgdHlwZTogJ3NsYXNoJywgdmFsdWU6ICcvJywgb3V0cHV0OiAnJyB9KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIHJlbW92ZSBzaW5nbGUgc3RhciBmcm9tIG91dHB1dFxuICAgICAgc3RhdGUub3V0cHV0ID0gc3RhdGUub3V0cHV0LnNsaWNlKDAsIC1wcmV2Lm91dHB1dC5sZW5ndGgpO1xuXG4gICAgICAvLyByZXNldCBwcmV2aW91cyB0b2tlbiB0byBnbG9ic3RhclxuICAgICAgcHJldi50eXBlID0gJ2dsb2JzdGFyJztcbiAgICAgIHByZXYub3V0cHV0ID0gZ2xvYnN0YXIob3B0cyk7XG4gICAgICBwcmV2LnZhbHVlICs9IHZhbHVlO1xuXG4gICAgICAvLyByZXNldCBvdXRwdXQgd2l0aCBnbG9ic3RhclxuICAgICAgc3RhdGUub3V0cHV0ICs9IHByZXYub3V0cHV0O1xuICAgICAgc3RhdGUuZ2xvYnN0YXIgPSB0cnVlO1xuICAgICAgY29uc3VtZSh2YWx1ZSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBjb25zdCB0b2tlbiA9IHsgdHlwZTogJ3N0YXInLCB2YWx1ZSwgb3V0cHV0OiBzdGFyIH07XG5cbiAgICBpZiAob3B0cy5iYXNoID09PSB0cnVlKSB7XG4gICAgICB0b2tlbi5vdXRwdXQgPSAnLio/JztcbiAgICAgIGlmIChwcmV2LnR5cGUgPT09ICdib3MnIHx8IHByZXYudHlwZSA9PT0gJ3NsYXNoJykge1xuICAgICAgICB0b2tlbi5vdXRwdXQgPSBub2RvdCArIHRva2VuLm91dHB1dDtcbiAgICAgIH1cbiAgICAgIHB1c2godG9rZW4pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKHByZXYgJiYgKHByZXYudHlwZSA9PT0gJ2JyYWNrZXQnIHx8IHByZXYudHlwZSA9PT0gJ3BhcmVuJykgJiYgb3B0cy5yZWdleCA9PT0gdHJ1ZSkge1xuICAgICAgdG9rZW4ub3V0cHV0ID0gdmFsdWU7XG4gICAgICBwdXNoKHRva2VuKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5pbmRleCA9PT0gc3RhdGUuc3RhcnQgfHwgcHJldi50eXBlID09PSAnc2xhc2gnIHx8IHByZXYudHlwZSA9PT0gJ2RvdCcpIHtcbiAgICAgIGlmIChwcmV2LnR5cGUgPT09ICdkb3QnKSB7XG4gICAgICAgIHN0YXRlLm91dHB1dCArPSBOT19ET1RfU0xBU0g7XG4gICAgICAgIHByZXYub3V0cHV0ICs9IE5PX0RPVF9TTEFTSDtcblxuICAgICAgfSBlbHNlIGlmIChvcHRzLmRvdCA9PT0gdHJ1ZSkge1xuICAgICAgICBzdGF0ZS5vdXRwdXQgKz0gTk9fRE9UU19TTEFTSDtcbiAgICAgICAgcHJldi5vdXRwdXQgKz0gTk9fRE9UU19TTEFTSDtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUub3V0cHV0ICs9IG5vZG90O1xuICAgICAgICBwcmV2Lm91dHB1dCArPSBub2RvdDtcbiAgICAgIH1cblxuICAgICAgaWYgKHBlZWsoKSAhPT0gJyonKSB7XG4gICAgICAgIHN0YXRlLm91dHB1dCArPSBPTkVfQ0hBUjtcbiAgICAgICAgcHJldi5vdXRwdXQgKz0gT05FX0NIQVI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHVzaCh0b2tlbik7XG4gIH1cblxuICB3aGlsZSAoc3RhdGUuYnJhY2tldHMgPiAwKSB7XG4gICAgaWYgKG9wdHMuc3RyaWN0QnJhY2tldHMgPT09IHRydWUpIHRocm93IG5ldyBTeW50YXhFcnJvcihzeW50YXhFcnJvcignY2xvc2luZycsICddJykpO1xuICAgIHN0YXRlLm91dHB1dCA9IHV0aWxzLmVzY2FwZUxhc3Qoc3RhdGUub3V0cHV0LCAnWycpO1xuICAgIGRlY3JlbWVudCgnYnJhY2tldHMnKTtcbiAgfVxuXG4gIHdoaWxlIChzdGF0ZS5wYXJlbnMgPiAwKSB7XG4gICAgaWYgKG9wdHMuc3RyaWN0QnJhY2tldHMgPT09IHRydWUpIHRocm93IG5ldyBTeW50YXhFcnJvcihzeW50YXhFcnJvcignY2xvc2luZycsICcpJykpO1xuICAgIHN0YXRlLm91dHB1dCA9IHV0aWxzLmVzY2FwZUxhc3Qoc3RhdGUub3V0cHV0LCAnKCcpO1xuICAgIGRlY3JlbWVudCgncGFyZW5zJyk7XG4gIH1cblxuICB3aGlsZSAoc3RhdGUuYnJhY2VzID4gMCkge1xuICAgIGlmIChvcHRzLnN0cmljdEJyYWNrZXRzID09PSB0cnVlKSB0aHJvdyBuZXcgU3ludGF4RXJyb3Ioc3ludGF4RXJyb3IoJ2Nsb3NpbmcnLCAnfScpKTtcbiAgICBzdGF0ZS5vdXRwdXQgPSB1dGlscy5lc2NhcGVMYXN0KHN0YXRlLm91dHB1dCwgJ3snKTtcbiAgICBkZWNyZW1lbnQoJ2JyYWNlcycpO1xuICB9XG5cbiAgaWYgKG9wdHMuc3RyaWN0U2xhc2hlcyAhPT0gdHJ1ZSAmJiAocHJldi50eXBlID09PSAnc3RhcicgfHwgcHJldi50eXBlID09PSAnYnJhY2tldCcpKSB7XG4gICAgcHVzaCh7IHR5cGU6ICdtYXliZV9zbGFzaCcsIHZhbHVlOiAnJywgb3V0cHV0OiBgJHtTTEFTSF9MSVRFUkFMfT9gIH0pO1xuICB9XG5cbiAgLy8gcmVidWlsZCB0aGUgb3V0cHV0IGlmIHdlIGhhZCB0byBiYWNrdHJhY2sgYXQgYW55IHBvaW50XG4gIGlmIChzdGF0ZS5iYWNrdHJhY2sgPT09IHRydWUpIHtcbiAgICBzdGF0ZS5vdXRwdXQgPSAnJztcblxuICAgIGZvciAoY29uc3QgdG9rZW4gb2Ygc3RhdGUudG9rZW5zKSB7XG4gICAgICBzdGF0ZS5vdXRwdXQgKz0gdG9rZW4ub3V0cHV0ICE9IG51bGwgPyB0b2tlbi5vdXRwdXQgOiB0b2tlbi52YWx1ZTtcblxuICAgICAgaWYgKHRva2VuLnN1ZmZpeCkge1xuICAgICAgICBzdGF0ZS5vdXRwdXQgKz0gdG9rZW4uc3VmZml4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbi8qKlxuICogRmFzdCBwYXRocyBmb3IgY3JlYXRpbmcgcmVndWxhciBleHByZXNzaW9ucyBmb3IgY29tbW9uIGdsb2IgcGF0dGVybnMuXG4gKiBUaGlzIGNhbiBzaWduaWZpY2FudGx5IHNwZWVkIHVwIHByb2Nlc3NpbmcgYW5kIGhhcyB2ZXJ5IGxpdHRsZSBkb3duc2lkZVxuICogaW1wYWN0IHdoZW4gbm9uZSBvZiB0aGUgZmFzdCBwYXRocyBtYXRjaC5cbiAqL1xuXG5wYXJzZS5mYXN0cGF0aHMgPSAoaW5wdXQsIG9wdGlvbnMpID0+IHtcbiAgY29uc3Qgb3B0cyA9IHsgLi4ub3B0aW9ucyB9O1xuICBjb25zdCBtYXggPSB0eXBlb2Ygb3B0cy5tYXhMZW5ndGggPT09ICdudW1iZXInID8gTWF0aC5taW4oTUFYX0xFTkdUSCwgb3B0cy5tYXhMZW5ndGgpIDogTUFYX0xFTkdUSDtcbiAgY29uc3QgbGVuID0gaW5wdXQubGVuZ3RoO1xuICBpZiAobGVuID4gbWF4KSB7XG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBJbnB1dCBsZW5ndGg6ICR7bGVufSwgZXhjZWVkcyBtYXhpbXVtIGFsbG93ZWQgbGVuZ3RoOiAke21heH1gKTtcbiAgfVxuXG4gIGlucHV0ID0gUkVQTEFDRU1FTlRTW2lucHV0XSB8fCBpbnB1dDtcbiAgY29uc3Qgd2luMzIgPSB1dGlscy5pc1dpbmRvd3Mob3B0aW9ucyk7XG5cbiAgLy8gY3JlYXRlIGNvbnN0YW50cyBiYXNlZCBvbiBwbGF0Zm9ybSwgZm9yIHdpbmRvd3Mgb3IgcG9zaXhcbiAgY29uc3Qge1xuICAgIERPVF9MSVRFUkFMLFxuICAgIFNMQVNIX0xJVEVSQUwsXG4gICAgT05FX0NIQVIsXG4gICAgRE9UU19TTEFTSCxcbiAgICBOT19ET1QsXG4gICAgTk9fRE9UUyxcbiAgICBOT19ET1RTX1NMQVNILFxuICAgIFNUQVIsXG4gICAgU1RBUlRfQU5DSE9SXG4gIH0gPSBjb25zdGFudHMuZ2xvYkNoYXJzKHdpbjMyKTtcblxuICBjb25zdCBub2RvdCA9IG9wdHMuZG90ID8gTk9fRE9UUyA6IE5PX0RPVDtcbiAgY29uc3Qgc2xhc2hEb3QgPSBvcHRzLmRvdCA/IE5PX0RPVFNfU0xBU0ggOiBOT19ET1Q7XG4gIGNvbnN0IGNhcHR1cmUgPSBvcHRzLmNhcHR1cmUgPyAnJyA6ICc/Oic7XG4gIGNvbnN0IHN0YXRlID0geyBuZWdhdGVkOiBmYWxzZSwgcHJlZml4OiAnJyB9O1xuICBsZXQgc3RhciA9IG9wdHMuYmFzaCA9PT0gdHJ1ZSA/ICcuKj8nIDogU1RBUjtcblxuICBpZiAob3B0cy5jYXB0dXJlKSB7XG4gICAgc3RhciA9IGAoJHtzdGFyfSlgO1xuICB9XG5cbiAgY29uc3QgZ2xvYnN0YXIgPSBvcHRzID0+IHtcbiAgICBpZiAob3B0cy5ub2dsb2JzdGFyID09PSB0cnVlKSByZXR1cm4gc3RhcjtcbiAgICByZXR1cm4gYCgke2NhcHR1cmV9KD86KD8hJHtTVEFSVF9BTkNIT1J9JHtvcHRzLmRvdCA/IERPVFNfU0xBU0ggOiBET1RfTElURVJBTH0pLikqPylgO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZSA9IHN0ciA9PiB7XG4gICAgc3dpdGNoIChzdHIpIHtcbiAgICAgIGNhc2UgJyonOlxuICAgICAgICByZXR1cm4gYCR7bm9kb3R9JHtPTkVfQ0hBUn0ke3N0YXJ9YDtcblxuICAgICAgY2FzZSAnLionOlxuICAgICAgICByZXR1cm4gYCR7RE9UX0xJVEVSQUx9JHtPTkVfQ0hBUn0ke3N0YXJ9YDtcblxuICAgICAgY2FzZSAnKi4qJzpcbiAgICAgICAgcmV0dXJuIGAke25vZG90fSR7c3Rhcn0ke0RPVF9MSVRFUkFMfSR7T05FX0NIQVJ9JHtzdGFyfWA7XG5cbiAgICAgIGNhc2UgJyovKic6XG4gICAgICAgIHJldHVybiBgJHtub2RvdH0ke3N0YXJ9JHtTTEFTSF9MSVRFUkFMfSR7T05FX0NIQVJ9JHtzbGFzaERvdH0ke3N0YXJ9YDtcblxuICAgICAgY2FzZSAnKionOlxuICAgICAgICByZXR1cm4gbm9kb3QgKyBnbG9ic3RhcihvcHRzKTtcblxuICAgICAgY2FzZSAnKiovKic6XG4gICAgICAgIHJldHVybiBgKD86JHtub2RvdH0ke2dsb2JzdGFyKG9wdHMpfSR7U0xBU0hfTElURVJBTH0pPyR7c2xhc2hEb3R9JHtPTkVfQ0hBUn0ke3N0YXJ9YDtcblxuICAgICAgY2FzZSAnKiovKi4qJzpcbiAgICAgICAgcmV0dXJuIGAoPzoke25vZG90fSR7Z2xvYnN0YXIob3B0cyl9JHtTTEFTSF9MSVRFUkFMfSk/JHtzbGFzaERvdH0ke3N0YXJ9JHtET1RfTElURVJBTH0ke09ORV9DSEFSfSR7c3Rhcn1gO1xuXG4gICAgICBjYXNlICcqKi8uKic6XG4gICAgICAgIHJldHVybiBgKD86JHtub2RvdH0ke2dsb2JzdGFyKG9wdHMpfSR7U0xBU0hfTElURVJBTH0pPyR7RE9UX0xJVEVSQUx9JHtPTkVfQ0hBUn0ke3N0YXJ9YDtcblxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBjb25zdCBtYXRjaCA9IC9eKC4qPylcXC4oXFx3KykkLy5leGVjKHN0cik7XG4gICAgICAgIGlmICghbWF0Y2gpIHJldHVybjtcblxuICAgICAgICBjb25zdCBzb3VyY2UgPSBjcmVhdGUobWF0Y2hbMV0pO1xuICAgICAgICBpZiAoIXNvdXJjZSkgcmV0dXJuO1xuXG4gICAgICAgIHJldHVybiBzb3VyY2UgKyBET1RfTElURVJBTCArIG1hdGNoWzJdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBvdXRwdXQgPSB1dGlscy5yZW1vdmVQcmVmaXgoaW5wdXQsIHN0YXRlKTtcbiAgbGV0IHNvdXJjZSA9IGNyZWF0ZShvdXRwdXQpO1xuXG4gIGlmIChzb3VyY2UgJiYgb3B0cy5zdHJpY3RTbGFzaGVzICE9PSB0cnVlKSB7XG4gICAgc291cmNlICs9IGAke1NMQVNIX0xJVEVSQUx9P2A7XG4gIH1cblxuICByZXR1cm4gc291cmNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZTtcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5jb25zdCBzY2FuID0gcmVxdWlyZSgnLi9zY2FuJyk7XG5jb25zdCBwYXJzZSA9IHJlcXVpcmUoJy4vcGFyc2UnKTtcbmNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcbmNvbnN0IGlzT2JqZWN0ID0gdmFsID0+IHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheSh2YWwpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRjaGVyIGZ1bmN0aW9uIGZyb20gb25lIG9yIG1vcmUgZ2xvYiBwYXR0ZXJucy4gVGhlXG4gKiByZXR1cm5lZCBmdW5jdGlvbiB0YWtlcyBhIHN0cmluZyB0byBtYXRjaCBhcyBpdHMgZmlyc3QgYXJndW1lbnQsXG4gKiBhbmQgcmV0dXJucyB0cnVlIGlmIHRoZSBzdHJpbmcgaXMgYSBtYXRjaC4gVGhlIHJldHVybmVkIG1hdGNoZXJcbiAqIGZ1bmN0aW9uIGFsc28gdGFrZXMgYSBib29sZWFuIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgdGhhdCwgd2hlbiB0cnVlLFxuICogcmV0dXJucyBhbiBvYmplY3Qgd2l0aCBhZGRpdGlvbmFsIGluZm9ybWF0aW9uLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBwaWNvbWF0Y2ggPSByZXF1aXJlKCdwaWNvbWF0Y2gnKTtcbiAqIC8vIHBpY29tYXRjaChnbG9iWywgb3B0aW9uc10pO1xuICpcbiAqIGNvbnN0IGlzTWF0Y2ggPSBwaWNvbWF0Y2goJyouISgqYSknKTtcbiAqIGNvbnNvbGUubG9nKGlzTWF0Y2goJ2EuYScpKTsgLy89PiBmYWxzZVxuICogY29uc29sZS5sb2coaXNNYXRjaCgnYS5iJykpOyAvLz0+IHRydWVcbiAqIGBgYFxuICogQG5hbWUgcGljb21hdGNoXG4gKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gYGdsb2JzYCBPbmUgb3IgbW9yZSBnbG9iIHBhdHRlcm5zLlxuICogQHBhcmFtIHtPYmplY3Q9fSBgb3B0aW9uc2BcbiAqIEByZXR1cm4ge0Z1bmN0aW9uPX0gUmV0dXJucyBhIG1hdGNoZXIgZnVuY3Rpb24uXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmNvbnN0IHBpY29tYXRjaCA9IChnbG9iLCBvcHRpb25zLCByZXR1cm5TdGF0ZSA9IGZhbHNlKSA9PiB7XG4gIGlmIChBcnJheS5pc0FycmF5KGdsb2IpKSB7XG4gICAgY29uc3QgZm5zID0gZ2xvYi5tYXAoaW5wdXQgPT4gcGljb21hdGNoKGlucHV0LCBvcHRpb25zLCByZXR1cm5TdGF0ZSkpO1xuICAgIGNvbnN0IGFycmF5TWF0Y2hlciA9IHN0ciA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGlzTWF0Y2ggb2YgZm5zKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gaXNNYXRjaChzdHIpO1xuICAgICAgICBpZiAoc3RhdGUpIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIHJldHVybiBhcnJheU1hdGNoZXI7XG4gIH1cblxuICBjb25zdCBpc1N0YXRlID0gaXNPYmplY3QoZ2xvYikgJiYgZ2xvYi50b2tlbnMgJiYgZ2xvYi5pbnB1dDtcblxuICBpZiAoZ2xvYiA9PT0gJycgfHwgKHR5cGVvZiBnbG9iICE9PSAnc3RyaW5nJyAmJiAhaXNTdGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBwYXR0ZXJuIHRvIGJlIGEgbm9uLWVtcHR5IHN0cmluZycpO1xuICB9XG5cbiAgY29uc3Qgb3B0cyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHBvc2l4ID0gdXRpbHMuaXNXaW5kb3dzKG9wdGlvbnMpO1xuICBjb25zdCByZWdleCA9IGlzU3RhdGVcbiAgICA/IHBpY29tYXRjaC5jb21waWxlUmUoZ2xvYiwgb3B0aW9ucylcbiAgICA6IHBpY29tYXRjaC5tYWtlUmUoZ2xvYiwgb3B0aW9ucywgZmFsc2UsIHRydWUpO1xuXG4gIGNvbnN0IHN0YXRlID0gcmVnZXguc3RhdGU7XG4gIGRlbGV0ZSByZWdleC5zdGF0ZTtcblxuICBsZXQgaXNJZ25vcmVkID0gKCkgPT4gZmFsc2U7XG4gIGlmIChvcHRzLmlnbm9yZSkge1xuICAgIGNvbnN0IGlnbm9yZU9wdHMgPSB7IC4uLm9wdGlvbnMsIGlnbm9yZTogbnVsbCwgb25NYXRjaDogbnVsbCwgb25SZXN1bHQ6IG51bGwgfTtcbiAgICBpc0lnbm9yZWQgPSBwaWNvbWF0Y2gob3B0cy5pZ25vcmUsIGlnbm9yZU9wdHMsIHJldHVyblN0YXRlKTtcbiAgfVxuXG4gIGNvbnN0IG1hdGNoZXIgPSAoaW5wdXQsIHJldHVybk9iamVjdCA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3QgeyBpc01hdGNoLCBtYXRjaCwgb3V0cHV0IH0gPSBwaWNvbWF0Y2gudGVzdChpbnB1dCwgcmVnZXgsIG9wdGlvbnMsIHsgZ2xvYiwgcG9zaXggfSk7XG4gICAgY29uc3QgcmVzdWx0ID0geyBnbG9iLCBzdGF0ZSwgcmVnZXgsIHBvc2l4LCBpbnB1dCwgb3V0cHV0LCBtYXRjaCwgaXNNYXRjaCB9O1xuXG4gICAgaWYgKHR5cGVvZiBvcHRzLm9uUmVzdWx0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvcHRzLm9uUmVzdWx0KHJlc3VsdCk7XG4gICAgfVxuXG4gICAgaWYgKGlzTWF0Y2ggPT09IGZhbHNlKSB7XG4gICAgICByZXN1bHQuaXNNYXRjaCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHJldHVybk9iamVjdCA/IHJlc3VsdCA6IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChpc0lnbm9yZWQoaW5wdXQpKSB7XG4gICAgICBpZiAodHlwZW9mIG9wdHMub25JZ25vcmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb3B0cy5vbklnbm9yZShyZXN1bHQpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LmlzTWF0Y2ggPSBmYWxzZTtcbiAgICAgIHJldHVybiByZXR1cm5PYmplY3QgPyByZXN1bHQgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdHMub25NYXRjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3B0cy5vbk1hdGNoKHJlc3VsdCk7XG4gICAgfVxuICAgIHJldHVybiByZXR1cm5PYmplY3QgPyByZXN1bHQgOiB0cnVlO1xuICB9O1xuXG4gIGlmIChyZXR1cm5TdGF0ZSkge1xuICAgIG1hdGNoZXIuc3RhdGUgPSBzdGF0ZTtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVyO1xufTtcblxuLyoqXG4gKiBUZXN0IGBpbnB1dGAgd2l0aCB0aGUgZ2l2ZW4gYHJlZ2V4YC4gVGhpcyBpcyB1c2VkIGJ5IHRoZSBtYWluXG4gKiBgcGljb21hdGNoKClgIGZ1bmN0aW9uIHRvIHRlc3QgdGhlIGlucHV0IHN0cmluZy5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgcGljb21hdGNoID0gcmVxdWlyZSgncGljb21hdGNoJyk7XG4gKiAvLyBwaWNvbWF0Y2gudGVzdChpbnB1dCwgcmVnZXhbLCBvcHRpb25zXSk7XG4gKlxuICogY29uc29sZS5sb2cocGljb21hdGNoLnRlc3QoJ2Zvby9iYXInLCAvXig/OihbXi9dKj8pXFwvKFteL10qPykpJC8pKTtcbiAqIC8vIHsgaXNNYXRjaDogdHJ1ZSwgbWF0Y2g6IFsgJ2Zvby8nLCAnZm9vJywgJ2JhcicgXSwgb3V0cHV0OiAnZm9vL2JhcicgfVxuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ30gYGlucHV0YCBTdHJpbmcgdG8gdGVzdC5cbiAqIEBwYXJhbSB7UmVnRXhwfSBgcmVnZXhgXG4gKiBAcmV0dXJuIHtPYmplY3R9IFJldHVybnMgYW4gb2JqZWN0IHdpdGggbWF0Y2hpbmcgaW5mby5cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucGljb21hdGNoLnRlc3QgPSAoaW5wdXQsIHJlZ2V4LCBvcHRpb25zLCB7IGdsb2IsIHBvc2l4IH0gPSB7fSkgPT4ge1xuICBpZiAodHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGlucHV0IHRvIGJlIGEgc3RyaW5nJyk7XG4gIH1cblxuICBpZiAoaW5wdXQgPT09ICcnKSB7XG4gICAgcmV0dXJuIHsgaXNNYXRjaDogZmFsc2UsIG91dHB1dDogJycgfTtcbiAgfVxuXG4gIGNvbnN0IG9wdHMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBmb3JtYXQgPSBvcHRzLmZvcm1hdCB8fCAocG9zaXggPyB1dGlscy50b1Bvc2l4U2xhc2hlcyA6IG51bGwpO1xuICBsZXQgbWF0Y2ggPSBpbnB1dCA9PT0gZ2xvYjtcbiAgbGV0IG91dHB1dCA9IChtYXRjaCAmJiBmb3JtYXQpID8gZm9ybWF0KGlucHV0KSA6IGlucHV0O1xuXG4gIGlmIChtYXRjaCA9PT0gZmFsc2UpIHtcbiAgICBvdXRwdXQgPSBmb3JtYXQgPyBmb3JtYXQoaW5wdXQpIDogaW5wdXQ7XG4gICAgbWF0Y2ggPSBvdXRwdXQgPT09IGdsb2I7XG4gIH1cblxuICBpZiAobWF0Y2ggPT09IGZhbHNlIHx8IG9wdHMuY2FwdHVyZSA9PT0gdHJ1ZSkge1xuICAgIGlmIChvcHRzLm1hdGNoQmFzZSA9PT0gdHJ1ZSB8fCBvcHRzLmJhc2VuYW1lID09PSB0cnVlKSB7XG4gICAgICBtYXRjaCA9IHBpY29tYXRjaC5tYXRjaEJhc2UoaW5wdXQsIHJlZ2V4LCBvcHRpb25zLCBwb3NpeCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hdGNoID0gcmVnZXguZXhlYyhvdXRwdXQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IGlzTWF0Y2g6IEJvb2xlYW4obWF0Y2gpLCBtYXRjaCwgb3V0cHV0IH07XG59O1xuXG4vKipcbiAqIE1hdGNoIHRoZSBiYXNlbmFtZSBvZiBhIGZpbGVwYXRoLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBwaWNvbWF0Y2ggPSByZXF1aXJlKCdwaWNvbWF0Y2gnKTtcbiAqIC8vIHBpY29tYXRjaC5tYXRjaEJhc2UoaW5wdXQsIGdsb2JbLCBvcHRpb25zXSk7XG4gKiBjb25zb2xlLmxvZyhwaWNvbWF0Y2gubWF0Y2hCYXNlKCdmb28vYmFyLmpzJywgJyouanMnKTsgLy8gdHJ1ZVxuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ30gYGlucHV0YCBTdHJpbmcgdG8gdGVzdC5cbiAqIEBwYXJhbSB7UmVnRXhwfFN0cmluZ30gYGdsb2JgIEdsb2IgcGF0dGVybiBvciByZWdleCBjcmVhdGVkIGJ5IFsubWFrZVJlXSgjbWFrZVJlKS5cbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnBpY29tYXRjaC5tYXRjaEJhc2UgPSAoaW5wdXQsIGdsb2IsIG9wdGlvbnMsIHBvc2l4ID0gdXRpbHMuaXNXaW5kb3dzKG9wdGlvbnMpKSA9PiB7XG4gIGNvbnN0IHJlZ2V4ID0gZ2xvYiBpbnN0YW5jZW9mIFJlZ0V4cCA/IGdsb2IgOiBwaWNvbWF0Y2gubWFrZVJlKGdsb2IsIG9wdGlvbnMpO1xuICByZXR1cm4gcmVnZXgudGVzdChwYXRoLmJhc2VuYW1lKGlucHV0KSk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiAqKmFueSoqIG9mIHRoZSBnaXZlbiBnbG9iIGBwYXR0ZXJuc2AgbWF0Y2ggdGhlIHNwZWNpZmllZCBgc3RyaW5nYC5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgcGljb21hdGNoID0gcmVxdWlyZSgncGljb21hdGNoJyk7XG4gKiAvLyBwaWNvbWF0Y2guaXNNYXRjaChzdHJpbmcsIHBhdHRlcm5zWywgb3B0aW9uc10pO1xuICpcbiAqIGNvbnNvbGUubG9nKHBpY29tYXRjaC5pc01hdGNoKCdhLmEnLCBbJ2IuKicsICcqLmEnXSkpOyAvLz0+IHRydWVcbiAqIGNvbnNvbGUubG9nKHBpY29tYXRjaC5pc01hdGNoKCdhLmEnLCAnYi4qJykpOyAvLz0+IGZhbHNlXG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBzdHIgVGhlIHN0cmluZyB0byB0ZXN0LlxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IHBhdHRlcm5zIE9uZSBvciBtb3JlIGdsb2IgcGF0dGVybnMgdG8gdXNlIGZvciBtYXRjaGluZy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gU2VlIGF2YWlsYWJsZSBbb3B0aW9uc10oI29wdGlvbnMpLlxuICogQHJldHVybiB7Qm9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIGFueSBwYXR0ZXJucyBtYXRjaCBgc3RyYFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5waWNvbWF0Y2guaXNNYXRjaCA9IChzdHIsIHBhdHRlcm5zLCBvcHRpb25zKSA9PiBwaWNvbWF0Y2gocGF0dGVybnMsIG9wdGlvbnMpKHN0cik7XG5cbi8qKlxuICogUGFyc2UgYSBnbG9iIHBhdHRlcm4gdG8gY3JlYXRlIHRoZSBzb3VyY2Ugc3RyaW5nIGZvciBhIHJlZ3VsYXJcbiAqIGV4cHJlc3Npb24uXG4gKlxuICogYGBganNcbiAqIGNvbnN0IHBpY29tYXRjaCA9IHJlcXVpcmUoJ3BpY29tYXRjaCcpO1xuICogY29uc3QgcmVzdWx0ID0gcGljb21hdGNoLnBhcnNlKHBhdHRlcm5bLCBvcHRpb25zXSk7XG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfSBgcGF0dGVybmBcbiAqIEBwYXJhbSB7T2JqZWN0fSBgb3B0aW9uc2BcbiAqIEByZXR1cm4ge09iamVjdH0gUmV0dXJucyBhbiBvYmplY3Qgd2l0aCB1c2VmdWwgcHJvcGVydGllcyBhbmQgb3V0cHV0IHRvIGJlIHVzZWQgYXMgYSByZWdleCBzb3VyY2Ugc3RyaW5nLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5waWNvbWF0Y2gucGFyc2UgPSAocGF0dGVybiwgb3B0aW9ucykgPT4ge1xuICBpZiAoQXJyYXkuaXNBcnJheShwYXR0ZXJuKSkgcmV0dXJuIHBhdHRlcm4ubWFwKHAgPT4gcGljb21hdGNoLnBhcnNlKHAsIG9wdGlvbnMpKTtcbiAgcmV0dXJuIHBhcnNlKHBhdHRlcm4sIHsgLi4ub3B0aW9ucywgZmFzdHBhdGhzOiBmYWxzZSB9KTtcbn07XG5cbi8qKlxuICogU2NhbiBhIGdsb2IgcGF0dGVybiB0byBzZXBhcmF0ZSB0aGUgcGF0dGVybiBpbnRvIHNlZ21lbnRzLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBwaWNvbWF0Y2ggPSByZXF1aXJlKCdwaWNvbWF0Y2gnKTtcbiAqIC8vIHBpY29tYXRjaC5zY2FuKGlucHV0Wywgb3B0aW9uc10pO1xuICpcbiAqIGNvbnN0IHJlc3VsdCA9IHBpY29tYXRjaC5zY2FuKCchLi9mb28vKi5qcycpO1xuICogY29uc29sZS5sb2cocmVzdWx0KTtcbiAqIHsgcHJlZml4OiAnIS4vJyxcbiAqICAgaW5wdXQ6ICchLi9mb28vKi5qcycsXG4gKiAgIHN0YXJ0OiAzLFxuICogICBiYXNlOiAnZm9vJyxcbiAqICAgZ2xvYjogJyouanMnLFxuICogICBpc0JyYWNlOiBmYWxzZSxcbiAqICAgaXNCcmFja2V0OiBmYWxzZSxcbiAqICAgaXNHbG9iOiB0cnVlLFxuICogICBpc0V4dGdsb2I6IGZhbHNlLFxuICogICBpc0dsb2JzdGFyOiBmYWxzZSxcbiAqICAgbmVnYXRlZDogdHJ1ZSB9XG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfSBgaW5wdXRgIEdsb2IgcGF0dGVybiB0byBzY2FuLlxuICogQHBhcmFtIHtPYmplY3R9IGBvcHRpb25zYFxuICogQHJldHVybiB7T2JqZWN0fSBSZXR1cm5zIGFuIG9iamVjdCB3aXRoXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnBpY29tYXRjaC5zY2FuID0gKGlucHV0LCBvcHRpb25zKSA9PiBzY2FuKGlucHV0LCBvcHRpb25zKTtcblxuLyoqXG4gKiBDb21waWxlIGEgcmVndWxhciBleHByZXNzaW9uIGZyb20gdGhlIGBzdGF0ZWAgb2JqZWN0IHJldHVybmVkIGJ5IHRoZVxuICogW3BhcnNlKCldKCNwYXJzZSkgbWV0aG9kLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBgc3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGByZXR1cm5PdXRwdXRgIEludGVuZGVkIGZvciBpbXBsZW1lbnRvcnMsIHRoaXMgYXJndW1lbnQgYWxsb3dzIHlvdSB0byByZXR1cm4gdGhlIHJhdyBvdXRwdXQgZnJvbSB0aGUgcGFyc2VyLlxuICogQHBhcmFtIHtCb29sZWFufSBgcmV0dXJuU3RhdGVgIEFkZHMgdGhlIHN0YXRlIHRvIGEgYHN0YXRlYCBwcm9wZXJ0eSBvbiB0aGUgcmV0dXJuZWQgcmVnZXguIFVzZWZ1bCBmb3IgaW1wbGVtZW50b3JzIGFuZCBkZWJ1Z2dpbmcuXG4gKiBAcmV0dXJuIHtSZWdFeHB9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnBpY29tYXRjaC5jb21waWxlUmUgPSAoc3RhdGUsIG9wdGlvbnMsIHJldHVybk91dHB1dCA9IGZhbHNlLCByZXR1cm5TdGF0ZSA9IGZhbHNlKSA9PiB7XG4gIGlmIChyZXR1cm5PdXRwdXQgPT09IHRydWUpIHtcbiAgICByZXR1cm4gc3RhdGUub3V0cHV0O1xuICB9XG5cbiAgY29uc3Qgb3B0cyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHByZXBlbmQgPSBvcHRzLmNvbnRhaW5zID8gJycgOiAnXic7XG4gIGNvbnN0IGFwcGVuZCA9IG9wdHMuY29udGFpbnMgPyAnJyA6ICckJztcblxuICBsZXQgc291cmNlID0gYCR7cHJlcGVuZH0oPzoke3N0YXRlLm91dHB1dH0pJHthcHBlbmR9YDtcbiAgaWYgKHN0YXRlICYmIHN0YXRlLm5lZ2F0ZWQgPT09IHRydWUpIHtcbiAgICBzb3VyY2UgPSBgXig/ISR7c291cmNlfSkuKiRgO1xuICB9XG5cbiAgY29uc3QgcmVnZXggPSBwaWNvbWF0Y2gudG9SZWdleChzb3VyY2UsIG9wdGlvbnMpO1xuICBpZiAocmV0dXJuU3RhdGUgPT09IHRydWUpIHtcbiAgICByZWdleC5zdGF0ZSA9IHN0YXRlO1xuICB9XG5cbiAgcmV0dXJuIHJlZ2V4O1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSByZWd1bGFyIGV4cHJlc3Npb24gZnJvbSBhIHBhcnNlZCBnbG9iIHBhdHRlcm4uXG4gKlxuICogYGBganNcbiAqIGNvbnN0IHBpY29tYXRjaCA9IHJlcXVpcmUoJ3BpY29tYXRjaCcpO1xuICogY29uc3Qgc3RhdGUgPSBwaWNvbWF0Y2gucGFyc2UoJyouanMnKTtcbiAqIC8vIHBpY29tYXRjaC5jb21waWxlUmUoc3RhdGVbLCBvcHRpb25zXSk7XG4gKlxuICogY29uc29sZS5sb2cocGljb21hdGNoLmNvbXBpbGVSZShzdGF0ZSkpO1xuICogLy89PiAvXig/Oig/IVxcLikoPz0uKVteL10qP1xcLmpzKSQvXG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfSBgc3RhdGVgIFRoZSBvYmplY3QgcmV0dXJuZWQgZnJvbSB0aGUgYC5wYXJzZWAgbWV0aG9kLlxuICogQHBhcmFtIHtPYmplY3R9IGBvcHRpb25zYFxuICogQHBhcmFtIHtCb29sZWFufSBgcmV0dXJuT3V0cHV0YCBJbXBsZW1lbnRvcnMgbWF5IHVzZSB0aGlzIGFyZ3VtZW50IHRvIHJldHVybiB0aGUgY29tcGlsZWQgb3V0cHV0LCBpbnN0ZWFkIG9mIGEgcmVndWxhciBleHByZXNzaW9uLiBUaGlzIGlzIG5vdCBleHBvc2VkIG9uIHRoZSBvcHRpb25zIHRvIHByZXZlbnQgZW5kLXVzZXJzIGZyb20gbXV0YXRpbmcgdGhlIHJlc3VsdC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gYHJldHVyblN0YXRlYCBJbXBsZW1lbnRvcnMgbWF5IHVzZSB0aGlzIGFyZ3VtZW50IHRvIHJldHVybiB0aGUgc3RhdGUgZnJvbSB0aGUgcGFyc2VkIGdsb2Igd2l0aCB0aGUgcmV0dXJuZWQgcmVndWxhciBleHByZXNzaW9uLlxuICogQHJldHVybiB7UmVnRXhwfSBSZXR1cm5zIGEgcmVnZXggY3JlYXRlZCBmcm9tIHRoZSBnaXZlbiBwYXR0ZXJuLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5waWNvbWF0Y2gubWFrZVJlID0gKGlucHV0LCBvcHRpb25zID0ge30sIHJldHVybk91dHB1dCA9IGZhbHNlLCByZXR1cm5TdGF0ZSA9IGZhbHNlKSA9PiB7XG4gIGlmICghaW5wdXQgfHwgdHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGEgbm9uLWVtcHR5IHN0cmluZycpO1xuICB9XG5cbiAgbGV0IHBhcnNlZCA9IHsgbmVnYXRlZDogZmFsc2UsIGZhc3RwYXRoczogdHJ1ZSB9O1xuXG4gIGlmIChvcHRpb25zLmZhc3RwYXRocyAhPT0gZmFsc2UgJiYgKGlucHV0WzBdID09PSAnLicgfHwgaW5wdXRbMF0gPT09ICcqJykpIHtcbiAgICBwYXJzZWQub3V0cHV0ID0gcGFyc2UuZmFzdHBhdGhzKGlucHV0LCBvcHRpb25zKTtcbiAgfVxuXG4gIGlmICghcGFyc2VkLm91dHB1dCkge1xuICAgIHBhcnNlZCA9IHBhcnNlKGlucHV0LCBvcHRpb25zKTtcbiAgfVxuXG4gIHJldHVybiBwaWNvbWF0Y2guY29tcGlsZVJlKHBhcnNlZCwgb3B0aW9ucywgcmV0dXJuT3V0cHV0LCByZXR1cm5TdGF0ZSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBmcm9tIHRoZSBnaXZlbiByZWdleCBzb3VyY2Ugc3RyaW5nLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBwaWNvbWF0Y2ggPSByZXF1aXJlKCdwaWNvbWF0Y2gnKTtcbiAqIC8vIHBpY29tYXRjaC50b1JlZ2V4KHNvdXJjZVssIG9wdGlvbnNdKTtcbiAqXG4gKiBjb25zdCB7IG91dHB1dCB9ID0gcGljb21hdGNoLnBhcnNlKCcqLmpzJyk7XG4gKiBjb25zb2xlLmxvZyhwaWNvbWF0Y2gudG9SZWdleChvdXRwdXQpKTtcbiAqIC8vPT4gL14oPzooPyFcXC4pKD89LilbXi9dKj9cXC5qcykkL1xuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ30gYHNvdXJjZWAgUmVndWxhciBleHByZXNzaW9uIHNvdXJjZSBzdHJpbmcuXG4gKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgXG4gKiBAcmV0dXJuIHtSZWdFeHB9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnBpY29tYXRjaC50b1JlZ2V4ID0gKHNvdXJjZSwgb3B0aW9ucykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IG9wdHMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHJldHVybiBuZXcgUmVnRXhwKHNvdXJjZSwgb3B0cy5mbGFncyB8fCAob3B0cy5ub2Nhc2UgPyAnaScgOiAnJykpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmRlYnVnID09PSB0cnVlKSB0aHJvdyBlcnI7XG4gICAgcmV0dXJuIC8kXi87XG4gIH1cbn07XG5cbi8qKlxuICogUGljb21hdGNoIGNvbnN0YW50cy5cbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuXG5waWNvbWF0Y2guY29uc3RhbnRzID0gY29uc3RhbnRzO1xuXG4vKipcbiAqIEV4cG9zZSBcInBpY29tYXRjaFwiXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBwaWNvbWF0Y2g7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL3BpY29tYXRjaCcpO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcbmNvbnN0IGJyYWNlcyA9IHJlcXVpcmUoJ2JyYWNlcycpO1xuY29uc3QgcGljb21hdGNoID0gcmVxdWlyZSgncGljb21hdGNoJyk7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJ3BpY29tYXRjaC9saWIvdXRpbHMnKTtcbmNvbnN0IGlzRW1wdHlTdHJpbmcgPSB2YWwgPT4gdmFsID09PSAnJyB8fCB2YWwgPT09ICcuLyc7XG5cbi8qKlxuICogUmV0dXJucyBhbiBhcnJheSBvZiBzdHJpbmdzIHRoYXQgbWF0Y2ggb25lIG9yIG1vcmUgZ2xvYiBwYXR0ZXJucy5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgbW0gPSByZXF1aXJlKCdtaWNyb21hdGNoJyk7XG4gKiAvLyBtbShsaXN0LCBwYXR0ZXJuc1ssIG9wdGlvbnNdKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhtbShbJ2EuanMnLCAnYS50eHQnXSwgWycqLmpzJ10pKTtcbiAqIC8vPT4gWyAnYS5qcycgXVxuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ3xBcnJheTxzdHJpbmc+fSBgbGlzdGAgTGlzdCBvZiBzdHJpbmdzIHRvIG1hdGNoLlxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXk8c3RyaW5nPn0gYHBhdHRlcm5zYCBPbmUgb3IgbW9yZSBnbG9iIHBhdHRlcm5zIHRvIHVzZSBmb3IgbWF0Y2hpbmcuXG4gKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgIFNlZSBhdmFpbGFibGUgW29wdGlvbnNdKCNvcHRpb25zKVxuICogQHJldHVybiB7QXJyYXl9IFJldHVybnMgYW4gYXJyYXkgb2YgbWF0Y2hlc1xuICogQHN1bW1hcnkgZmFsc2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuY29uc3QgbWljcm9tYXRjaCA9IChsaXN0LCBwYXR0ZXJucywgb3B0aW9ucykgPT4ge1xuICBwYXR0ZXJucyA9IFtdLmNvbmNhdChwYXR0ZXJucyk7XG4gIGxpc3QgPSBbXS5jb25jYXQobGlzdCk7XG5cbiAgbGV0IG9taXQgPSBuZXcgU2V0KCk7XG4gIGxldCBrZWVwID0gbmV3IFNldCgpO1xuICBsZXQgaXRlbXMgPSBuZXcgU2V0KCk7XG4gIGxldCBuZWdhdGl2ZXMgPSAwO1xuXG4gIGxldCBvblJlc3VsdCA9IHN0YXRlID0+IHtcbiAgICBpdGVtcy5hZGQoc3RhdGUub3V0cHV0KTtcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLm9uUmVzdWx0KSB7XG4gICAgICBvcHRpb25zLm9uUmVzdWx0KHN0YXRlKTtcbiAgICB9XG4gIH07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXR0ZXJucy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBpc01hdGNoID0gcGljb21hdGNoKFN0cmluZyhwYXR0ZXJuc1tpXSksIHsgLi4ub3B0aW9ucywgb25SZXN1bHQgfSwgdHJ1ZSk7XG4gICAgbGV0IG5lZ2F0ZWQgPSBpc01hdGNoLnN0YXRlLm5lZ2F0ZWQgfHwgaXNNYXRjaC5zdGF0ZS5uZWdhdGVkRXh0Z2xvYjtcbiAgICBpZiAobmVnYXRlZCkgbmVnYXRpdmVzKys7XG5cbiAgICBmb3IgKGxldCBpdGVtIG9mIGxpc3QpIHtcbiAgICAgIGxldCBtYXRjaGVkID0gaXNNYXRjaChpdGVtLCB0cnVlKTtcblxuICAgICAgbGV0IG1hdGNoID0gbmVnYXRlZCA/ICFtYXRjaGVkLmlzTWF0Y2ggOiBtYXRjaGVkLmlzTWF0Y2g7XG4gICAgICBpZiAoIW1hdGNoKSBjb250aW51ZTtcblxuICAgICAgaWYgKG5lZ2F0ZWQpIHtcbiAgICAgICAgb21pdC5hZGQobWF0Y2hlZC5vdXRwdXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb21pdC5kZWxldGUobWF0Y2hlZC5vdXRwdXQpO1xuICAgICAgICBrZWVwLmFkZChtYXRjaGVkLm91dHB1dCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbGV0IHJlc3VsdCA9IG5lZ2F0aXZlcyA9PT0gcGF0dGVybnMubGVuZ3RoID8gWy4uLml0ZW1zXSA6IFsuLi5rZWVwXTtcbiAgbGV0IG1hdGNoZXMgPSByZXN1bHQuZmlsdGVyKGl0ZW0gPT4gIW9taXQuaGFzKGl0ZW0pKTtcblxuICBpZiAob3B0aW9ucyAmJiBtYXRjaGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIGlmIChvcHRpb25zLmZhaWxnbG9iID09PSB0cnVlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIG1hdGNoZXMgZm91bmQgZm9yIFwiJHtwYXR0ZXJucy5qb2luKCcsICcpfVwiYCk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMubm9udWxsID09PSB0cnVlIHx8IG9wdGlvbnMubnVsbGdsb2IgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLnVuZXNjYXBlID8gcGF0dGVybnMubWFwKHAgPT4gcC5yZXBsYWNlKC9cXFxcL2csICcnKSkgOiBwYXR0ZXJucztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlcztcbn07XG5cbi8qKlxuICogQmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAqL1xuXG5taWNyb21hdGNoLm1hdGNoID0gbWljcm9tYXRjaDtcblxuLyoqXG4gKiBSZXR1cm5zIGEgbWF0Y2hlciBmdW5jdGlvbiBmcm9tIHRoZSBnaXZlbiBnbG9iIGBwYXR0ZXJuYCBhbmQgYG9wdGlvbnNgLlxuICogVGhlIHJldHVybmVkIGZ1bmN0aW9uIHRha2VzIGEgc3RyaW5nIHRvIG1hdGNoIGFzIGl0cyBvbmx5IGFyZ3VtZW50IGFuZCByZXR1cm5zXG4gKiB0cnVlIGlmIHRoZSBzdHJpbmcgaXMgYSBtYXRjaC5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgbW0gPSByZXF1aXJlKCdtaWNyb21hdGNoJyk7XG4gKiAvLyBtbS5tYXRjaGVyKHBhdHRlcm5bLCBvcHRpb25zXSk7XG4gKlxuICogY29uc3QgaXNNYXRjaCA9IG1tLm1hdGNoZXIoJyouISgqYSknKTtcbiAqIGNvbnNvbGUubG9nKGlzTWF0Y2goJ2EuYScpKTsgLy89PiBmYWxzZVxuICogY29uc29sZS5sb2coaXNNYXRjaCgnYS5iJykpOyAvLz0+IHRydWVcbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd9IGBwYXR0ZXJuYCBHbG9iIHBhdHRlcm5cbiAqIEBwYXJhbSB7T2JqZWN0fSBgb3B0aW9uc2BcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBSZXR1cm5zIGEgbWF0Y2hlciBmdW5jdGlvbi5cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubWljcm9tYXRjaC5tYXRjaGVyID0gKHBhdHRlcm4sIG9wdGlvbnMpID0+IHBpY29tYXRjaChwYXR0ZXJuLCBvcHRpb25zKTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgKiphbnkqKiBvZiB0aGUgZ2l2ZW4gZ2xvYiBgcGF0dGVybnNgIG1hdGNoIHRoZSBzcGVjaWZpZWQgYHN0cmluZ2AuXG4gKlxuICogYGBganNcbiAqIGNvbnN0IG1tID0gcmVxdWlyZSgnbWljcm9tYXRjaCcpO1xuICogLy8gbW0uaXNNYXRjaChzdHJpbmcsIHBhdHRlcm5zWywgb3B0aW9uc10pO1xuICpcbiAqIGNvbnNvbGUubG9nKG1tLmlzTWF0Y2goJ2EuYScsIFsnYi4qJywgJyouYSddKSk7IC8vPT4gdHJ1ZVxuICogY29uc29sZS5sb2cobW0uaXNNYXRjaCgnYS5hJywgJ2IuKicpKTsgLy89PiBmYWxzZVxuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ30gYHN0cmAgVGhlIHN0cmluZyB0byB0ZXN0LlxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IGBwYXR0ZXJuc2AgT25lIG9yIG1vcmUgZ2xvYiBwYXR0ZXJucyB0byB1c2UgZm9yIG1hdGNoaW5nLlxuICogQHBhcmFtIHtPYmplY3R9IGBbb3B0aW9uc11gIFNlZSBhdmFpbGFibGUgW29wdGlvbnNdKCNvcHRpb25zKS5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBhbnkgcGF0dGVybnMgbWF0Y2ggYHN0cmBcbiAqIEBhcGkgcHVibGljXG4gKi9cblxubWljcm9tYXRjaC5pc01hdGNoID0gKHN0ciwgcGF0dGVybnMsIG9wdGlvbnMpID0+IHBpY29tYXRjaChwYXR0ZXJucywgb3B0aW9ucykoc3RyKTtcblxuLyoqXG4gKiBCYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICovXG5cbm1pY3JvbWF0Y2guYW55ID0gbWljcm9tYXRjaC5pc01hdGNoO1xuXG4vKipcbiAqIFJldHVybnMgYSBsaXN0IG9mIHN0cmluZ3MgdGhhdCBfKipkbyBub3QgbWF0Y2ggYW55KipfIG9mIHRoZSBnaXZlbiBgcGF0dGVybnNgLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBtbSA9IHJlcXVpcmUoJ21pY3JvbWF0Y2gnKTtcbiAqIC8vIG1tLm5vdChsaXN0LCBwYXR0ZXJuc1ssIG9wdGlvbnNdKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhtbS5ub3QoWydhLmEnLCAnYi5iJywgJ2MuYyddLCAnKi5hJykpO1xuICogLy89PiBbJ2IuYicsICdjLmMnXVxuICogYGBgXG4gKiBAcGFyYW0ge0FycmF5fSBgbGlzdGAgQXJyYXkgb2Ygc3RyaW5ncyB0byBtYXRjaC5cbiAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBgcGF0dGVybnNgIE9uZSBvciBtb3JlIGdsb2IgcGF0dGVybiB0byB1c2UgZm9yIG1hdGNoaW5nLlxuICogQHBhcmFtIHtPYmplY3R9IGBvcHRpb25zYCBTZWUgYXZhaWxhYmxlIFtvcHRpb25zXSgjb3B0aW9ucykgZm9yIGNoYW5naW5nIGhvdyBtYXRjaGVzIGFyZSBwZXJmb3JtZWRcbiAqIEByZXR1cm4ge0FycmF5fSBSZXR1cm5zIGFuIGFycmF5IG9mIHN0cmluZ3MgdGhhdCAqKmRvIG5vdCBtYXRjaCoqIHRoZSBnaXZlbiBwYXR0ZXJucy5cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubWljcm9tYXRjaC5ub3QgPSAobGlzdCwgcGF0dGVybnMsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBwYXR0ZXJucyA9IFtdLmNvbmNhdChwYXR0ZXJucykubWFwKFN0cmluZyk7XG4gIGxldCByZXN1bHQgPSBuZXcgU2V0KCk7XG4gIGxldCBpdGVtcyA9IFtdO1xuXG4gIGxldCBvblJlc3VsdCA9IHN0YXRlID0+IHtcbiAgICBpZiAob3B0aW9ucy5vblJlc3VsdCkgb3B0aW9ucy5vblJlc3VsdChzdGF0ZSk7XG4gICAgaXRlbXMucHVzaChzdGF0ZS5vdXRwdXQpO1xuICB9O1xuXG4gIGxldCBtYXRjaGVzID0gbmV3IFNldChtaWNyb21hdGNoKGxpc3QsIHBhdHRlcm5zLCB7IC4uLm9wdGlvbnMsIG9uUmVzdWx0IH0pKTtcblxuICBmb3IgKGxldCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgaWYgKCFtYXRjaGVzLmhhcyhpdGVtKSkge1xuICAgICAgcmVzdWx0LmFkZChpdGVtKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFsuLi5yZXN1bHRdO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIGBzdHJpbmdgIGNvbnRhaW5zIHRoZSBnaXZlbiBwYXR0ZXJuLiBTaW1pbGFyXG4gKiB0byBbLmlzTWF0Y2hdKCNpc01hdGNoKSBidXQgdGhlIHBhdHRlcm4gY2FuIG1hdGNoIGFueSBwYXJ0IG9mIHRoZSBzdHJpbmcuXG4gKlxuICogYGBganNcbiAqIHZhciBtbSA9IHJlcXVpcmUoJ21pY3JvbWF0Y2gnKTtcbiAqIC8vIG1tLmNvbnRhaW5zKHN0cmluZywgcGF0dGVyblssIG9wdGlvbnNdKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhtbS5jb250YWlucygnYWEvYmIvY2MnLCAnKmInKSk7XG4gKiAvLz0+IHRydWVcbiAqIGNvbnNvbGUubG9nKG1tLmNvbnRhaW5zKCdhYS9iYi9jYycsICcqZCcpKTtcbiAqIC8vPT4gZmFsc2VcbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd9IGBzdHJgIFRoZSBzdHJpbmcgdG8gbWF0Y2guXG4gKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gYHBhdHRlcm5zYCBHbG9iIHBhdHRlcm4gdG8gdXNlIGZvciBtYXRjaGluZy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBgb3B0aW9uc2AgU2VlIGF2YWlsYWJsZSBbb3B0aW9uc10oI29wdGlvbnMpIGZvciBjaGFuZ2luZyBob3cgbWF0Y2hlcyBhcmUgcGVyZm9ybWVkXG4gKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm5zIHRydWUgaWYgYW55IG9mIHRoZSBwYXR0ZXJucyBtYXRjaGVzIGFueSBwYXJ0IG9mIGBzdHJgLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5taWNyb21hdGNoLmNvbnRhaW5zID0gKHN0ciwgcGF0dGVybiwgb3B0aW9ucykgPT4ge1xuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCBhIHN0cmluZzogXCIke3V0aWwuaW5zcGVjdChzdHIpfVwiYCk7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShwYXR0ZXJuKSkge1xuICAgIHJldHVybiBwYXR0ZXJuLnNvbWUocCA9PiBtaWNyb21hdGNoLmNvbnRhaW5zKHN0ciwgcCwgb3B0aW9ucykpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBwYXR0ZXJuID09PSAnc3RyaW5nJykge1xuICAgIGlmIChpc0VtcHR5U3RyaW5nKHN0cikgfHwgaXNFbXB0eVN0cmluZyhwYXR0ZXJuKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChzdHIuaW5jbHVkZXMocGF0dGVybikgfHwgKHN0ci5zdGFydHNXaXRoKCcuLycpICYmIHN0ci5zbGljZSgyKS5pbmNsdWRlcyhwYXR0ZXJuKSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtaWNyb21hdGNoLmlzTWF0Y2goc3RyLCBwYXR0ZXJuLCB7IC4uLm9wdGlvbnMsIGNvbnRhaW5zOiB0cnVlIH0pO1xufTtcblxuLyoqXG4gKiBGaWx0ZXIgdGhlIGtleXMgb2YgdGhlIGdpdmVuIG9iamVjdCB3aXRoIHRoZSBnaXZlbiBgZ2xvYmAgcGF0dGVyblxuICogYW5kIGBvcHRpb25zYC4gRG9lcyBub3QgYXR0ZW1wdCB0byBtYXRjaCBuZXN0ZWQga2V5cy4gSWYgeW91IG5lZWQgdGhpcyBmZWF0dXJlLFxuICogdXNlIFtnbG9iLW9iamVjdF1bXSBpbnN0ZWFkLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBtbSA9IHJlcXVpcmUoJ21pY3JvbWF0Y2gnKTtcbiAqIC8vIG1tLm1hdGNoS2V5cyhvYmplY3QsIHBhdHRlcm5zWywgb3B0aW9uc10pO1xuICpcbiAqIGNvbnN0IG9iaiA9IHsgYWE6ICdhJywgYWI6ICdiJywgYWM6ICdjJyB9O1xuICogY29uc29sZS5sb2cobW0ubWF0Y2hLZXlzKG9iaiwgJypiJykpO1xuICogLy89PiB7IGFiOiAnYicgfVxuICogYGBgXG4gKiBAcGFyYW0ge09iamVjdH0gYG9iamVjdGAgVGhlIG9iamVjdCB3aXRoIGtleXMgdG8gZmlsdGVyLlxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IGBwYXR0ZXJuc2AgT25lIG9yIG1vcmUgZ2xvYiBwYXR0ZXJucyB0byB1c2UgZm9yIG1hdGNoaW5nLlxuICogQHBhcmFtIHtPYmplY3R9IGBvcHRpb25zYCBTZWUgYXZhaWxhYmxlIFtvcHRpb25zXSgjb3B0aW9ucykgZm9yIGNoYW5naW5nIGhvdyBtYXRjaGVzIGFyZSBwZXJmb3JtZWRcbiAqIEByZXR1cm4ge09iamVjdH0gUmV0dXJucyBhbiBvYmplY3Qgd2l0aCBvbmx5IGtleXMgdGhhdCBtYXRjaCB0aGUgZ2l2ZW4gcGF0dGVybnMuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1pY3JvbWF0Y2gubWF0Y2hLZXlzID0gKG9iaiwgcGF0dGVybnMsIG9wdGlvbnMpID0+IHtcbiAgaWYgKCF1dGlscy5pc09iamVjdChvYmopKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCcpO1xuICB9XG4gIGxldCBrZXlzID0gbWljcm9tYXRjaChPYmplY3Qua2V5cyhvYmopLCBwYXR0ZXJucywgb3B0aW9ucyk7XG4gIGxldCByZXMgPSB7fTtcbiAgZm9yIChsZXQga2V5IG9mIGtleXMpIHJlc1trZXldID0gb2JqW2tleV07XG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBzb21lIG9mIHRoZSBzdHJpbmdzIGluIHRoZSBnaXZlbiBgbGlzdGAgbWF0Y2ggYW55IG9mIHRoZSBnaXZlbiBnbG9iIGBwYXR0ZXJuc2AuXG4gKlxuICogYGBganNcbiAqIGNvbnN0IG1tID0gcmVxdWlyZSgnbWljcm9tYXRjaCcpO1xuICogLy8gbW0uc29tZShsaXN0LCBwYXR0ZXJuc1ssIG9wdGlvbnNdKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhtbS5zb21lKFsnZm9vLmpzJywgJ2Jhci5qcyddLCBbJyouanMnLCAnIWZvby5qcyddKSk7XG4gKiAvLyB0cnVlXG4gKiBjb25zb2xlLmxvZyhtbS5zb21lKFsnZm9vLmpzJ10sIFsnKi5qcycsICchZm9vLmpzJ10pKTtcbiAqIC8vIGZhbHNlXG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBgbGlzdGAgVGhlIHN0cmluZyBvciBhcnJheSBvZiBzdHJpbmdzIHRvIHRlc3QuIFJldHVybnMgYXMgc29vbiBhcyB0aGUgZmlyc3QgbWF0Y2ggaXMgZm91bmQuXG4gKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gYHBhdHRlcm5zYCBPbmUgb3IgbW9yZSBnbG9iIHBhdHRlcm5zIHRvIHVzZSBmb3IgbWF0Y2hpbmcuXG4gKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgIFNlZSBhdmFpbGFibGUgW29wdGlvbnNdKCNvcHRpb25zKSBmb3IgY2hhbmdpbmcgaG93IG1hdGNoZXMgYXJlIHBlcmZvcm1lZFxuICogQHJldHVybiB7Qm9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIGFueSBgcGF0dGVybnNgIG1hdGNoZXMgYW55IG9mIHRoZSBzdHJpbmdzIGluIGBsaXN0YFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5taWNyb21hdGNoLnNvbWUgPSAobGlzdCwgcGF0dGVybnMsIG9wdGlvbnMpID0+IHtcbiAgbGV0IGl0ZW1zID0gW10uY29uY2F0KGxpc3QpO1xuXG4gIGZvciAobGV0IHBhdHRlcm4gb2YgW10uY29uY2F0KHBhdHRlcm5zKSkge1xuICAgIGxldCBpc01hdGNoID0gcGljb21hdGNoKFN0cmluZyhwYXR0ZXJuKSwgb3B0aW9ucyk7XG4gICAgaWYgKGl0ZW1zLnNvbWUoaXRlbSA9PiBpc01hdGNoKGl0ZW0pKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGV2ZXJ5IHN0cmluZyBpbiB0aGUgZ2l2ZW4gYGxpc3RgIG1hdGNoZXNcbiAqIGFueSBvZiB0aGUgZ2l2ZW4gZ2xvYiBgcGF0dGVybnNgLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBtbSA9IHJlcXVpcmUoJ21pY3JvbWF0Y2gnKTtcbiAqIC8vIG1tLmV2ZXJ5KGxpc3QsIHBhdHRlcm5zWywgb3B0aW9uc10pO1xuICpcbiAqIGNvbnNvbGUubG9nKG1tLmV2ZXJ5KCdmb28uanMnLCBbJ2Zvby5qcyddKSk7XG4gKiAvLyB0cnVlXG4gKiBjb25zb2xlLmxvZyhtbS5ldmVyeShbJ2Zvby5qcycsICdiYXIuanMnXSwgWycqLmpzJ10pKTtcbiAqIC8vIHRydWVcbiAqIGNvbnNvbGUubG9nKG1tLmV2ZXJ5KFsnZm9vLmpzJywgJ2Jhci5qcyddLCBbJyouanMnLCAnIWZvby5qcyddKSk7XG4gKiAvLyBmYWxzZVxuICogY29uc29sZS5sb2cobW0uZXZlcnkoWydmb28uanMnXSwgWycqLmpzJywgJyFmb28uanMnXSkpO1xuICogLy8gZmFsc2VcbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IGBsaXN0YCBUaGUgc3RyaW5nIG9yIGFycmF5IG9mIHN0cmluZ3MgdG8gdGVzdC5cbiAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBgcGF0dGVybnNgIE9uZSBvciBtb3JlIGdsb2IgcGF0dGVybnMgdG8gdXNlIGZvciBtYXRjaGluZy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBgb3B0aW9uc2AgU2VlIGF2YWlsYWJsZSBbb3B0aW9uc10oI29wdGlvbnMpIGZvciBjaGFuZ2luZyBob3cgbWF0Y2hlcyBhcmUgcGVyZm9ybWVkXG4gKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm5zIHRydWUgaWYgYWxsIGBwYXR0ZXJuc2AgbWF0Y2hlcyBhbGwgb2YgdGhlIHN0cmluZ3MgaW4gYGxpc3RgXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1pY3JvbWF0Y2guZXZlcnkgPSAobGlzdCwgcGF0dGVybnMsIG9wdGlvbnMpID0+IHtcbiAgbGV0IGl0ZW1zID0gW10uY29uY2F0KGxpc3QpO1xuXG4gIGZvciAobGV0IHBhdHRlcm4gb2YgW10uY29uY2F0KHBhdHRlcm5zKSkge1xuICAgIGxldCBpc01hdGNoID0gcGljb21hdGNoKFN0cmluZyhwYXR0ZXJuKSwgb3B0aW9ucyk7XG4gICAgaWYgKCFpdGVtcy5ldmVyeShpdGVtID0+IGlzTWF0Y2goaXRlbSkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgKiphbGwqKiBvZiB0aGUgZ2l2ZW4gYHBhdHRlcm5zYCBtYXRjaFxuICogdGhlIHNwZWNpZmllZCBzdHJpbmcuXG4gKlxuICogYGBganNcbiAqIGNvbnN0IG1tID0gcmVxdWlyZSgnbWljcm9tYXRjaCcpO1xuICogLy8gbW0uYWxsKHN0cmluZywgcGF0dGVybnNbLCBvcHRpb25zXSk7XG4gKlxuICogY29uc29sZS5sb2cobW0uYWxsKCdmb28uanMnLCBbJ2Zvby5qcyddKSk7XG4gKiAvLyB0cnVlXG4gKlxuICogY29uc29sZS5sb2cobW0uYWxsKCdmb28uanMnLCBbJyouanMnLCAnIWZvby5qcyddKSk7XG4gKiAvLyBmYWxzZVxuICpcbiAqIGNvbnNvbGUubG9nKG1tLmFsbCgnZm9vLmpzJywgWycqLmpzJywgJ2Zvby5qcyddKSk7XG4gKiAvLyB0cnVlXG4gKlxuICogY29uc29sZS5sb2cobW0uYWxsKCdmb28uanMnLCBbJyouanMnLCAnZionLCAnKm8qJywgJypvLmpzJ10pKTtcbiAqIC8vIHRydWVcbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IGBzdHJgIFRoZSBzdHJpbmcgdG8gdGVzdC5cbiAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBgcGF0dGVybnNgIE9uZSBvciBtb3JlIGdsb2IgcGF0dGVybnMgdG8gdXNlIGZvciBtYXRjaGluZy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBgb3B0aW9uc2AgU2VlIGF2YWlsYWJsZSBbb3B0aW9uc10oI29wdGlvbnMpIGZvciBjaGFuZ2luZyBob3cgbWF0Y2hlcyBhcmUgcGVyZm9ybWVkXG4gKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm5zIHRydWUgaWYgYW55IHBhdHRlcm5zIG1hdGNoIGBzdHJgXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1pY3JvbWF0Y2guYWxsID0gKHN0ciwgcGF0dGVybnMsIG9wdGlvbnMpID0+IHtcbiAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgYSBzdHJpbmc6IFwiJHt1dGlsLmluc3BlY3Qoc3RyKX1cImApO1xuICB9XG5cbiAgcmV0dXJuIFtdLmNvbmNhdChwYXR0ZXJucykuZXZlcnkocCA9PiBwaWNvbWF0Y2gocCwgb3B0aW9ucykoc3RyKSk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gYXJyYXkgb2YgbWF0Y2hlcyBjYXB0dXJlZCBieSBgcGF0dGVybmAgaW4gYHN0cmluZywgb3IgYG51bGxgIGlmIHRoZSBwYXR0ZXJuIGRpZCBub3QgbWF0Y2guXG4gKlxuICogYGBganNcbiAqIGNvbnN0IG1tID0gcmVxdWlyZSgnbWljcm9tYXRjaCcpO1xuICogLy8gbW0uY2FwdHVyZShwYXR0ZXJuLCBzdHJpbmdbLCBvcHRpb25zXSk7XG4gKlxuICogY29uc29sZS5sb2cobW0uY2FwdHVyZSgndGVzdC8qLmpzJywgJ3Rlc3QvZm9vLmpzJykpO1xuICogLy89PiBbJ2ZvbyddXG4gKiBjb25zb2xlLmxvZyhtbS5jYXB0dXJlKCd0ZXN0LyouanMnLCAnZm9vL2Jhci5jc3MnKSk7XG4gKiAvLz0+IG51bGxcbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd9IGBnbG9iYCBHbG9iIHBhdHRlcm4gdG8gdXNlIGZvciBtYXRjaGluZy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBgaW5wdXRgIFN0cmluZyB0byBtYXRjaFxuICogQHBhcmFtIHtPYmplY3R9IGBvcHRpb25zYCBTZWUgYXZhaWxhYmxlIFtvcHRpb25zXSgjb3B0aW9ucykgZm9yIGNoYW5naW5nIGhvdyBtYXRjaGVzIGFyZSBwZXJmb3JtZWRcbiAqIEByZXR1cm4ge0FycmF5fG51bGx9IFJldHVybnMgYW4gYXJyYXkgb2YgY2FwdHVyZXMgaWYgdGhlIGlucHV0IG1hdGNoZXMgdGhlIGdsb2IgcGF0dGVybiwgb3RoZXJ3aXNlIGBudWxsYC5cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubWljcm9tYXRjaC5jYXB0dXJlID0gKGdsb2IsIGlucHV0LCBvcHRpb25zKSA9PiB7XG4gIGxldCBwb3NpeCA9IHV0aWxzLmlzV2luZG93cyhvcHRpb25zKTtcbiAgbGV0IHJlZ2V4ID0gcGljb21hdGNoLm1ha2VSZShTdHJpbmcoZ2xvYiksIHsgLi4ub3B0aW9ucywgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgbGV0IG1hdGNoID0gcmVnZXguZXhlYyhwb3NpeCA/IHV0aWxzLnRvUG9zaXhTbGFzaGVzKGlucHV0KSA6IGlucHV0KTtcblxuICBpZiAobWF0Y2gpIHtcbiAgICByZXR1cm4gbWF0Y2guc2xpY2UoMSkubWFwKHYgPT4gdiA9PT0gdm9pZCAwID8gJycgOiB2KTtcbiAgfVxufTtcblxuLyoqXG4gKiBDcmVhdGUgYSByZWd1bGFyIGV4cHJlc3Npb24gZnJvbSB0aGUgZ2l2ZW4gZ2xvYiBgcGF0dGVybmAuXG4gKlxuICogYGBganNcbiAqIGNvbnN0IG1tID0gcmVxdWlyZSgnbWljcm9tYXRjaCcpO1xuICogLy8gbW0ubWFrZVJlKHBhdHRlcm5bLCBvcHRpb25zXSk7XG4gKlxuICogY29uc29sZS5sb2cobW0ubWFrZVJlKCcqLmpzJykpO1xuICogLy89PiAvXig/OihcXC5bXFxcXFxcL10pPyg/IVxcLikoPz0uKVteXFwvXSo/XFwuanMpJC9cbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd9IGBwYXR0ZXJuYCBBIGdsb2IgcGF0dGVybiB0byBjb252ZXJ0IHRvIHJlZ2V4LlxuICogQHBhcmFtIHtPYmplY3R9IGBvcHRpb25zYFxuICogQHJldHVybiB7UmVnRXhwfSBSZXR1cm5zIGEgcmVnZXggY3JlYXRlZCBmcm9tIHRoZSBnaXZlbiBwYXR0ZXJuLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5taWNyb21hdGNoLm1ha2VSZSA9ICguLi5hcmdzKSA9PiBwaWNvbWF0Y2gubWFrZVJlKC4uLmFyZ3MpO1xuXG4vKipcbiAqIFNjYW4gYSBnbG9iIHBhdHRlcm4gdG8gc2VwYXJhdGUgdGhlIHBhdHRlcm4gaW50byBzZWdtZW50cy4gVXNlZFxuICogYnkgdGhlIFtzcGxpdF0oI3NwbGl0KSBtZXRob2QuXG4gKlxuICogYGBganNcbiAqIGNvbnN0IG1tID0gcmVxdWlyZSgnbWljcm9tYXRjaCcpO1xuICogY29uc3Qgc3RhdGUgPSBtbS5zY2FuKHBhdHRlcm5bLCBvcHRpb25zXSk7XG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfSBgcGF0dGVybmBcbiAqIEBwYXJhbSB7T2JqZWN0fSBgb3B0aW9uc2BcbiAqIEByZXR1cm4ge09iamVjdH0gUmV0dXJucyBhbiBvYmplY3Qgd2l0aFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5taWNyb21hdGNoLnNjYW4gPSAoLi4uYXJncykgPT4gcGljb21hdGNoLnNjYW4oLi4uYXJncyk7XG5cbi8qKlxuICogUGFyc2UgYSBnbG9iIHBhdHRlcm4gdG8gY3JlYXRlIHRoZSBzb3VyY2Ugc3RyaW5nIGZvciBhIHJlZ3VsYXJcbiAqIGV4cHJlc3Npb24uXG4gKlxuICogYGBganNcbiAqIGNvbnN0IG1tID0gcmVxdWlyZSgnbWljcm9tYXRjaCcpO1xuICogY29uc3Qgc3RhdGUgPSBtbS5wYXJzZShwYXR0ZXJuWywgb3B0aW9uc10pO1xuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ30gYGdsb2JgXG4gKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgXG4gKiBAcmV0dXJuIHtPYmplY3R9IFJldHVybnMgYW4gb2JqZWN0IHdpdGggdXNlZnVsIHByb3BlcnRpZXMgYW5kIG91dHB1dCB0byBiZSB1c2VkIGFzIHJlZ2V4IHNvdXJjZSBzdHJpbmcuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1pY3JvbWF0Y2gucGFyc2UgPSAocGF0dGVybnMsIG9wdGlvbnMpID0+IHtcbiAgbGV0IHJlcyA9IFtdO1xuICBmb3IgKGxldCBwYXR0ZXJuIG9mIFtdLmNvbmNhdChwYXR0ZXJucyB8fCBbXSkpIHtcbiAgICBmb3IgKGxldCBzdHIgb2YgYnJhY2VzKFN0cmluZyhwYXR0ZXJuKSwgb3B0aW9ucykpIHtcbiAgICAgIHJlcy5wdXNoKHBpY29tYXRjaC5wYXJzZShzdHIsIG9wdGlvbnMpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogUHJvY2VzcyB0aGUgZ2l2ZW4gYnJhY2UgYHBhdHRlcm5gLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCB7IGJyYWNlcyB9ID0gcmVxdWlyZSgnbWljcm9tYXRjaCcpO1xuICogY29uc29sZS5sb2coYnJhY2VzKCdmb28ve2EsYixjfS9iYXInKSk7XG4gKiAvLz0+IFsgJ2Zvby8oYXxifGMpL2JhcicgXVxuICpcbiAqIGNvbnNvbGUubG9nKGJyYWNlcygnZm9vL3thLGIsY30vYmFyJywgeyBleHBhbmQ6IHRydWUgfSkpO1xuICogLy89PiBbICdmb28vYS9iYXInLCAnZm9vL2IvYmFyJywgJ2Zvby9jL2JhcicgXVxuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ30gYHBhdHRlcm5gIFN0cmluZyB3aXRoIGJyYWNlIHBhdHRlcm4gdG8gcHJvY2Vzcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBgb3B0aW9uc2AgQW55IFtvcHRpb25zXSgjb3B0aW9ucykgdG8gY2hhbmdlIGhvdyBleHBhbnNpb24gaXMgcGVyZm9ybWVkLiBTZWUgdGhlIFticmFjZXNdW10gbGlicmFyeSBmb3IgYWxsIGF2YWlsYWJsZSBvcHRpb25zLlxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1pY3JvbWF0Y2guYnJhY2VzID0gKHBhdHRlcm4sIG9wdGlvbnMpID0+IHtcbiAgaWYgKHR5cGVvZiBwYXR0ZXJuICE9PSAnc3RyaW5nJykgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBzdHJpbmcnKTtcbiAgaWYgKChvcHRpb25zICYmIG9wdGlvbnMubm9icmFjZSA9PT0gdHJ1ZSkgfHwgIS9cXHsuKlxcfS8udGVzdChwYXR0ZXJuKSkge1xuICAgIHJldHVybiBbcGF0dGVybl07XG4gIH1cbiAgcmV0dXJuIGJyYWNlcyhwYXR0ZXJuLCBvcHRpb25zKTtcbn07XG5cbi8qKlxuICogRXhwYW5kIGJyYWNlc1xuICovXG5cbm1pY3JvbWF0Y2guYnJhY2VFeHBhbmQgPSAocGF0dGVybiwgb3B0aW9ucykgPT4ge1xuICBpZiAodHlwZW9mIHBhdHRlcm4gIT09ICdzdHJpbmcnKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIHN0cmluZycpO1xuICByZXR1cm4gbWljcm9tYXRjaC5icmFjZXMocGF0dGVybiwgeyAuLi5vcHRpb25zLCBleHBhbmQ6IHRydWUgfSk7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBtaWNyb21hdGNoXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBtaWNyb21hdGNoO1xuIiwgIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMubWF0Y2hBbnkgPSBleHBvcnRzLmNvbnZlcnRQYXR0ZXJuc1RvUmUgPSBleHBvcnRzLm1ha2VSZSA9IGV4cG9ydHMuZ2V0UGF0dGVyblBhcnRzID0gZXhwb3J0cy5leHBhbmRCcmFjZUV4cGFuc2lvbiA9IGV4cG9ydHMuZXhwYW5kUGF0dGVybnNXaXRoQnJhY2VFeHBhbnNpb24gPSBleHBvcnRzLmlzQWZmZWN0RGVwdGhPZlJlYWRpbmdQYXR0ZXJuID0gZXhwb3J0cy5lbmRzV2l0aFNsYXNoR2xvYlN0YXIgPSBleHBvcnRzLmhhc0dsb2JTdGFyID0gZXhwb3J0cy5nZXRCYXNlRGlyZWN0b3J5ID0gZXhwb3J0cy5pc1BhdHRlcm5SZWxhdGVkVG9QYXJlbnREaXJlY3RvcnkgPSBleHBvcnRzLmdldFBhdHRlcm5zT3V0c2lkZUN1cnJlbnREaXJlY3RvcnkgPSBleHBvcnRzLmdldFBhdHRlcm5zSW5zaWRlQ3VycmVudERpcmVjdG9yeSA9IGV4cG9ydHMuZ2V0UG9zaXRpdmVQYXR0ZXJucyA9IGV4cG9ydHMuZ2V0TmVnYXRpdmVQYXR0ZXJucyA9IGV4cG9ydHMuaXNQb3NpdGl2ZVBhdHRlcm4gPSBleHBvcnRzLmlzTmVnYXRpdmVQYXR0ZXJuID0gZXhwb3J0cy5jb252ZXJ0VG9OZWdhdGl2ZVBhdHRlcm4gPSBleHBvcnRzLmNvbnZlcnRUb1Bvc2l0aXZlUGF0dGVybiA9IGV4cG9ydHMuaXNEeW5hbWljUGF0dGVybiA9IGV4cG9ydHMuaXNTdGF0aWNQYXR0ZXJuID0gdm9pZCAwO1xyXG5jb25zdCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XHJcbmNvbnN0IGdsb2JQYXJlbnQgPSByZXF1aXJlKFwiZ2xvYi1wYXJlbnRcIik7XHJcbmNvbnN0IG1pY3JvbWF0Y2ggPSByZXF1aXJlKFwibWljcm9tYXRjaFwiKTtcclxuY29uc3QgR0xPQlNUQVIgPSAnKionO1xyXG5jb25zdCBFU0NBUEVfU1lNQk9MID0gJ1xcXFwnO1xyXG5jb25zdCBDT01NT05fR0xPQl9TWU1CT0xTX1JFID0gL1sqP118XiEvO1xyXG5jb25zdCBSRUdFWF9DSEFSQUNURVJfQ0xBU1NfU1lNQk9MU19SRSA9IC9cXFtbXltdKl0vO1xyXG5jb25zdCBSRUdFWF9HUk9VUF9TWU1CT0xTX1JFID0gLyg/Ol58W14hKis/QF0pXFwoW14oXSpcXHxbXnxdKlxcKS87XHJcbmNvbnN0IEdMT0JfRVhURU5TSU9OX1NZTUJPTFNfUkUgPSAvWyEqKz9AXVxcKFteKF0qXFwpLztcclxuY29uc3QgQlJBQ0VfRVhQQU5TSU9OX1NFUEFSQVRPUlNfUkUgPSAvLHxcXC5cXC4vO1xyXG5mdW5jdGlvbiBpc1N0YXRpY1BhdHRlcm4ocGF0dGVybiwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICByZXR1cm4gIWlzRHluYW1pY1BhdHRlcm4ocGF0dGVybiwgb3B0aW9ucyk7XHJcbn1cclxuZXhwb3J0cy5pc1N0YXRpY1BhdHRlcm4gPSBpc1N0YXRpY1BhdHRlcm47XHJcbmZ1bmN0aW9uIGlzRHluYW1pY1BhdHRlcm4ocGF0dGVybiwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICAvKipcclxuICAgICAqIEEgc3BlY2lhbCBjYXNlIHdpdGggYW4gZW1wdHkgc3RyaW5nIGlzIG5lY2Vzc2FyeSBmb3IgbWF0Y2hpbmcgcGF0dGVybnMgdGhhdCBzdGFydCB3aXRoIGEgZm9yd2FyZCBzbGFzaC5cclxuICAgICAqIEFuIGVtcHR5IHN0cmluZyBjYW5ub3QgYmUgYSBkeW5hbWljIHBhdHRlcm4uXHJcbiAgICAgKiBGb3IgZXhhbXBsZSwgdGhlIHBhdHRlcm4gYC9saWIvKmAgd2lsbCBiZSBzcHJlYWQgaW50byBwYXJ0czogJycsICdsaWInLCAnKicuXHJcbiAgICAgKi9cclxuICAgIGlmIChwYXR0ZXJuID09PSAnJykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogV2hlbiB0aGUgYGNhc2VTZW5zaXRpdmVNYXRjaGAgb3B0aW9uIGlzIGRpc2FibGVkLCBhbGwgcGF0dGVybnMgbXVzdCBiZSBtYXJrZWQgYXMgZHluYW1pYywgYmVjYXVzZSB3ZSBjYW5ub3QgY2hlY2tcclxuICAgICAqIGZpbGVwYXRoIGRpcmVjdGx5ICh3aXRob3V0IHJlYWQgZGlyZWN0b3J5KS5cclxuICAgICAqL1xyXG4gICAgaWYgKG9wdGlvbnMuY2FzZVNlbnNpdGl2ZU1hdGNoID09PSBmYWxzZSB8fCBwYXR0ZXJuLmluY2x1ZGVzKEVTQ0FQRV9TWU1CT0wpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoQ09NTU9OX0dMT0JfU1lNQk9MU19SRS50ZXN0KHBhdHRlcm4pIHx8IFJFR0VYX0NIQVJBQ1RFUl9DTEFTU19TWU1CT0xTX1JFLnRlc3QocGF0dGVybikgfHwgUkVHRVhfR1JPVVBfU1lNQk9MU19SRS50ZXN0KHBhdHRlcm4pKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAob3B0aW9ucy5leHRnbG9iICE9PSBmYWxzZSAmJiBHTE9CX0VYVEVOU0lPTl9TWU1CT0xTX1JFLnRlc3QocGF0dGVybikpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChvcHRpb25zLmJyYWNlRXhwYW5zaW9uICE9PSBmYWxzZSAmJiBoYXNCcmFjZUV4cGFuc2lvbihwYXR0ZXJuKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmV4cG9ydHMuaXNEeW5hbWljUGF0dGVybiA9IGlzRHluYW1pY1BhdHRlcm47XHJcbmZ1bmN0aW9uIGhhc0JyYWNlRXhwYW5zaW9uKHBhdHRlcm4pIHtcclxuICAgIGNvbnN0IG9wZW5pbmdCcmFjZUluZGV4ID0gcGF0dGVybi5pbmRleE9mKCd7Jyk7XHJcbiAgICBpZiAob3BlbmluZ0JyYWNlSW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY2xvc2luZ0JyYWNlSW5kZXggPSBwYXR0ZXJuLmluZGV4T2YoJ30nLCBvcGVuaW5nQnJhY2VJbmRleCArIDEpO1xyXG4gICAgaWYgKGNsb3NpbmdCcmFjZUluZGV4ID09PSAtMSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IGJyYWNlQ29udGVudCA9IHBhdHRlcm4uc2xpY2Uob3BlbmluZ0JyYWNlSW5kZXgsIGNsb3NpbmdCcmFjZUluZGV4KTtcclxuICAgIHJldHVybiBCUkFDRV9FWFBBTlNJT05fU0VQQVJBVE9SU19SRS50ZXN0KGJyYWNlQ29udGVudCk7XHJcbn1cclxuZnVuY3Rpb24gY29udmVydFRvUG9zaXRpdmVQYXR0ZXJuKHBhdHRlcm4pIHtcclxuICAgIHJldHVybiBpc05lZ2F0aXZlUGF0dGVybihwYXR0ZXJuKSA/IHBhdHRlcm4uc2xpY2UoMSkgOiBwYXR0ZXJuO1xyXG59XHJcbmV4cG9ydHMuY29udmVydFRvUG9zaXRpdmVQYXR0ZXJuID0gY29udmVydFRvUG9zaXRpdmVQYXR0ZXJuO1xyXG5mdW5jdGlvbiBjb252ZXJ0VG9OZWdhdGl2ZVBhdHRlcm4ocGF0dGVybikge1xyXG4gICAgcmV0dXJuICchJyArIHBhdHRlcm47XHJcbn1cclxuZXhwb3J0cy5jb252ZXJ0VG9OZWdhdGl2ZVBhdHRlcm4gPSBjb252ZXJ0VG9OZWdhdGl2ZVBhdHRlcm47XHJcbmZ1bmN0aW9uIGlzTmVnYXRpdmVQYXR0ZXJuKHBhdHRlcm4pIHtcclxuICAgIHJldHVybiBwYXR0ZXJuLnN0YXJ0c1dpdGgoJyEnKSAmJiBwYXR0ZXJuWzFdICE9PSAnKCc7XHJcbn1cclxuZXhwb3J0cy5pc05lZ2F0aXZlUGF0dGVybiA9IGlzTmVnYXRpdmVQYXR0ZXJuO1xyXG5mdW5jdGlvbiBpc1Bvc2l0aXZlUGF0dGVybihwYXR0ZXJuKSB7XHJcbiAgICByZXR1cm4gIWlzTmVnYXRpdmVQYXR0ZXJuKHBhdHRlcm4pO1xyXG59XHJcbmV4cG9ydHMuaXNQb3NpdGl2ZVBhdHRlcm4gPSBpc1Bvc2l0aXZlUGF0dGVybjtcclxuZnVuY3Rpb24gZ2V0TmVnYXRpdmVQYXR0ZXJucyhwYXR0ZXJucykge1xyXG4gICAgcmV0dXJuIHBhdHRlcm5zLmZpbHRlcihpc05lZ2F0aXZlUGF0dGVybik7XHJcbn1cclxuZXhwb3J0cy5nZXROZWdhdGl2ZVBhdHRlcm5zID0gZ2V0TmVnYXRpdmVQYXR0ZXJucztcclxuZnVuY3Rpb24gZ2V0UG9zaXRpdmVQYXR0ZXJucyhwYXR0ZXJucykge1xyXG4gICAgcmV0dXJuIHBhdHRlcm5zLmZpbHRlcihpc1Bvc2l0aXZlUGF0dGVybik7XHJcbn1cclxuZXhwb3J0cy5nZXRQb3NpdGl2ZVBhdHRlcm5zID0gZ2V0UG9zaXRpdmVQYXR0ZXJucztcclxuLyoqXHJcbiAqIFJldHVybnMgcGF0dGVybnMgdGhhdCBjYW4gYmUgYXBwbGllZCBpbnNpZGUgdGhlIGN1cnJlbnQgZGlyZWN0b3J5LlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvLyBbJy4vKicsICcqJywgJ2EvKiddXHJcbiAqIGdldFBhdHRlcm5zSW5zaWRlQ3VycmVudERpcmVjdG9yeShbJy4vKicsICcqJywgJ2EvKicsICcuLi8qJywgJy4vLi4vKiddKVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0UGF0dGVybnNJbnNpZGVDdXJyZW50RGlyZWN0b3J5KHBhdHRlcm5zKSB7XHJcbiAgICByZXR1cm4gcGF0dGVybnMuZmlsdGVyKChwYXR0ZXJuKSA9PiAhaXNQYXR0ZXJuUmVsYXRlZFRvUGFyZW50RGlyZWN0b3J5KHBhdHRlcm4pKTtcclxufVxyXG5leHBvcnRzLmdldFBhdHRlcm5zSW5zaWRlQ3VycmVudERpcmVjdG9yeSA9IGdldFBhdHRlcm5zSW5zaWRlQ3VycmVudERpcmVjdG9yeTtcclxuLyoqXHJcbiAqIFJldHVybnMgcGF0dGVybnMgdG8gYmUgZXhwYW5kZWQgcmVsYXRpdmUgdG8gKG91dHNpZGUpIHRoZSBjdXJyZW50IGRpcmVjdG9yeS5cclxuICpcclxuICogQGV4YW1wbGVcclxuICogLy8gWycuLi8qJywgJy4vLi4vKiddXHJcbiAqIGdldFBhdHRlcm5zSW5zaWRlQ3VycmVudERpcmVjdG9yeShbJy4vKicsICcqJywgJ2EvKicsICcuLi8qJywgJy4vLi4vKiddKVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0UGF0dGVybnNPdXRzaWRlQ3VycmVudERpcmVjdG9yeShwYXR0ZXJucykge1xyXG4gICAgcmV0dXJuIHBhdHRlcm5zLmZpbHRlcihpc1BhdHRlcm5SZWxhdGVkVG9QYXJlbnREaXJlY3RvcnkpO1xyXG59XHJcbmV4cG9ydHMuZ2V0UGF0dGVybnNPdXRzaWRlQ3VycmVudERpcmVjdG9yeSA9IGdldFBhdHRlcm5zT3V0c2lkZUN1cnJlbnREaXJlY3Rvcnk7XHJcbmZ1bmN0aW9uIGlzUGF0dGVyblJlbGF0ZWRUb1BhcmVudERpcmVjdG9yeShwYXR0ZXJuKSB7XHJcbiAgICByZXR1cm4gcGF0dGVybi5zdGFydHNXaXRoKCcuLicpIHx8IHBhdHRlcm4uc3RhcnRzV2l0aCgnLi8uLicpO1xyXG59XHJcbmV4cG9ydHMuaXNQYXR0ZXJuUmVsYXRlZFRvUGFyZW50RGlyZWN0b3J5ID0gaXNQYXR0ZXJuUmVsYXRlZFRvUGFyZW50RGlyZWN0b3J5O1xyXG5mdW5jdGlvbiBnZXRCYXNlRGlyZWN0b3J5KHBhdHRlcm4pIHtcclxuICAgIHJldHVybiBnbG9iUGFyZW50KHBhdHRlcm4sIHsgZmxpcEJhY2tzbGFzaGVzOiBmYWxzZSB9KTtcclxufVxyXG5leHBvcnRzLmdldEJhc2VEaXJlY3RvcnkgPSBnZXRCYXNlRGlyZWN0b3J5O1xyXG5mdW5jdGlvbiBoYXNHbG9iU3RhcihwYXR0ZXJuKSB7XHJcbiAgICByZXR1cm4gcGF0dGVybi5pbmNsdWRlcyhHTE9CU1RBUik7XHJcbn1cclxuZXhwb3J0cy5oYXNHbG9iU3RhciA9IGhhc0dsb2JTdGFyO1xyXG5mdW5jdGlvbiBlbmRzV2l0aFNsYXNoR2xvYlN0YXIocGF0dGVybikge1xyXG4gICAgcmV0dXJuIHBhdHRlcm4uZW5kc1dpdGgoJy8nICsgR0xPQlNUQVIpO1xyXG59XHJcbmV4cG9ydHMuZW5kc1dpdGhTbGFzaEdsb2JTdGFyID0gZW5kc1dpdGhTbGFzaEdsb2JTdGFyO1xyXG5mdW5jdGlvbiBpc0FmZmVjdERlcHRoT2ZSZWFkaW5nUGF0dGVybihwYXR0ZXJuKSB7XHJcbiAgICBjb25zdCBiYXNlbmFtZSA9IHBhdGguYmFzZW5hbWUocGF0dGVybik7XHJcbiAgICByZXR1cm4gZW5kc1dpdGhTbGFzaEdsb2JTdGFyKHBhdHRlcm4pIHx8IGlzU3RhdGljUGF0dGVybihiYXNlbmFtZSk7XHJcbn1cclxuZXhwb3J0cy5pc0FmZmVjdERlcHRoT2ZSZWFkaW5nUGF0dGVybiA9IGlzQWZmZWN0RGVwdGhPZlJlYWRpbmdQYXR0ZXJuO1xyXG5mdW5jdGlvbiBleHBhbmRQYXR0ZXJuc1dpdGhCcmFjZUV4cGFuc2lvbihwYXR0ZXJucykge1xyXG4gICAgcmV0dXJuIHBhdHRlcm5zLnJlZHVjZSgoY29sbGVjdGlvbiwgcGF0dGVybikgPT4ge1xyXG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uLmNvbmNhdChleHBhbmRCcmFjZUV4cGFuc2lvbihwYXR0ZXJuKSk7XHJcbiAgICB9LCBbXSk7XHJcbn1cclxuZXhwb3J0cy5leHBhbmRQYXR0ZXJuc1dpdGhCcmFjZUV4cGFuc2lvbiA9IGV4cGFuZFBhdHRlcm5zV2l0aEJyYWNlRXhwYW5zaW9uO1xyXG5mdW5jdGlvbiBleHBhbmRCcmFjZUV4cGFuc2lvbihwYXR0ZXJuKSB7XHJcbiAgICByZXR1cm4gbWljcm9tYXRjaC5icmFjZXMocGF0dGVybiwge1xyXG4gICAgICAgIGV4cGFuZDogdHJ1ZSxcclxuICAgICAgICBub2R1cGVzOiB0cnVlXHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmV4cGFuZEJyYWNlRXhwYW5zaW9uID0gZXhwYW5kQnJhY2VFeHBhbnNpb247XHJcbmZ1bmN0aW9uIGdldFBhdHRlcm5QYXJ0cyhwYXR0ZXJuLCBvcHRpb25zKSB7XHJcbiAgICBsZXQgeyBwYXJ0cyB9ID0gbWljcm9tYXRjaC5zY2FuKHBhdHRlcm4sIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyksIHsgcGFydHM6IHRydWUgfSkpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc2NhbiBtZXRob2QgcmV0dXJucyBhbiBlbXB0eSBhcnJheSBpbiBzb21lIGNhc2VzLlxyXG4gICAgICogU2VlIG1pY3JvbWF0Y2gvcGljb21hdGNoIzU4IGZvciBtb3JlIGRldGFpbHMuXHJcbiAgICAgKi9cclxuICAgIGlmIChwYXJ0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBwYXJ0cyA9IFtwYXR0ZXJuXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHNjYW4gbWV0aG9kIGRvZXMgbm90IHJldHVybiBhbiBlbXB0eSBwYXJ0IGZvciB0aGUgcGF0dGVybiB3aXRoIGEgZm9yd2FyZCBzbGFzaC5cclxuICAgICAqIFRoaXMgaXMgYW5vdGhlciBwYXJ0IG9mIG1pY3JvbWF0Y2gvcGljb21hdGNoIzU4LlxyXG4gICAgICovXHJcbiAgICBpZiAocGFydHNbMF0uc3RhcnRzV2l0aCgnLycpKSB7XHJcbiAgICAgICAgcGFydHNbMF0gPSBwYXJ0c1swXS5zbGljZSgxKTtcclxuICAgICAgICBwYXJ0cy51bnNoaWZ0KCcnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXJ0cztcclxufVxyXG5leHBvcnRzLmdldFBhdHRlcm5QYXJ0cyA9IGdldFBhdHRlcm5QYXJ0cztcclxuZnVuY3Rpb24gbWFrZVJlKHBhdHRlcm4sIG9wdGlvbnMpIHtcclxuICAgIHJldHVybiBtaWNyb21hdGNoLm1ha2VSZShwYXR0ZXJuLCBvcHRpb25zKTtcclxufVxyXG5leHBvcnRzLm1ha2VSZSA9IG1ha2VSZTtcclxuZnVuY3Rpb24gY29udmVydFBhdHRlcm5zVG9SZShwYXR0ZXJucywgb3B0aW9ucykge1xyXG4gICAgcmV0dXJuIHBhdHRlcm5zLm1hcCgocGF0dGVybikgPT4gbWFrZVJlKHBhdHRlcm4sIG9wdGlvbnMpKTtcclxufVxyXG5leHBvcnRzLmNvbnZlcnRQYXR0ZXJuc1RvUmUgPSBjb252ZXJ0UGF0dGVybnNUb1JlO1xyXG5mdW5jdGlvbiBtYXRjaEFueShlbnRyeSwgcGF0dGVybnNSZSkge1xyXG4gICAgcmV0dXJuIHBhdHRlcm5zUmUuc29tZSgocGF0dGVyblJlKSA9PiBwYXR0ZXJuUmUudGVzdChlbnRyeSkpO1xyXG59XHJcbmV4cG9ydHMubWF0Y2hBbnkgPSBtYXRjaEFueTtcclxuIiwgIid1c2Ugc3RyaWN0J1xuLypcbiAqIG1lcmdlMlxuICogaHR0cHM6Ly9naXRodWIuY29tL3RlYW1iaXRpb24vbWVyZ2UyXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMjAgVGVhbWJpdGlvblxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICovXG5jb25zdCBTdHJlYW0gPSByZXF1aXJlKCdzdHJlYW0nKVxuY29uc3QgUGFzc1Rocm91Z2ggPSBTdHJlYW0uUGFzc1Rocm91Z2hcbmNvbnN0IHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG5cbm1vZHVsZS5leHBvcnRzID0gbWVyZ2UyXG5cbmZ1bmN0aW9uIG1lcmdlMiAoKSB7XG4gIGNvbnN0IHN0cmVhbXNRdWV1ZSA9IFtdXG4gIGNvbnN0IGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgbGV0IG1lcmdpbmcgPSBmYWxzZVxuICBsZXQgb3B0aW9ucyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXVxuXG4gIGlmIChvcHRpb25zICYmICFBcnJheS5pc0FycmF5KG9wdGlvbnMpICYmIG9wdGlvbnMucGlwZSA9PSBudWxsKSB7XG4gICAgYXJncy5wb3AoKVxuICB9IGVsc2Uge1xuICAgIG9wdGlvbnMgPSB7fVxuICB9XG5cbiAgY29uc3QgZG9FbmQgPSBvcHRpb25zLmVuZCAhPT0gZmFsc2VcbiAgY29uc3QgZG9QaXBlRXJyb3IgPSBvcHRpb25zLnBpcGVFcnJvciA9PT0gdHJ1ZVxuICBpZiAob3B0aW9ucy5vYmplY3RNb2RlID09IG51bGwpIHtcbiAgICBvcHRpb25zLm9iamVjdE1vZGUgPSB0cnVlXG4gIH1cbiAgaWYgKG9wdGlvbnMuaGlnaFdhdGVyTWFyayA9PSBudWxsKSB7XG4gICAgb3B0aW9ucy5oaWdoV2F0ZXJNYXJrID0gNjQgKiAxMDI0XG4gIH1cbiAgY29uc3QgbWVyZ2VkU3RyZWFtID0gUGFzc1Rocm91Z2gob3B0aW9ucylcblxuICBmdW5jdGlvbiBhZGRTdHJlYW0gKCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHN0cmVhbXNRdWV1ZS5wdXNoKHBhdXNlU3RyZWFtcyhhcmd1bWVudHNbaV0sIG9wdGlvbnMpKVxuICAgIH1cbiAgICBtZXJnZVN0cmVhbSgpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lcmdlU3RyZWFtICgpIHtcbiAgICBpZiAobWVyZ2luZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIG1lcmdpbmcgPSB0cnVlXG5cbiAgICBsZXQgc3RyZWFtcyA9IHN0cmVhbXNRdWV1ZS5zaGlmdCgpXG4gICAgaWYgKCFzdHJlYW1zKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGVuZFN0cmVhbSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc3RyZWFtcykpIHtcbiAgICAgIHN0cmVhbXMgPSBbc3RyZWFtc11cbiAgICB9XG5cbiAgICBsZXQgcGlwZXNDb3VudCA9IHN0cmVhbXMubGVuZ3RoICsgMVxuXG4gICAgZnVuY3Rpb24gbmV4dCAoKSB7XG4gICAgICBpZiAoLS1waXBlc0NvdW50ID4gMCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIG1lcmdpbmcgPSBmYWxzZVxuICAgICAgbWVyZ2VTdHJlYW0oKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBpcGUgKHN0cmVhbSkge1xuICAgICAgZnVuY3Rpb24gb25lbmQgKCkge1xuICAgICAgICBzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ21lcmdlMlVucGlwZUVuZCcsIG9uZW5kKVxuICAgICAgICBzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ2VuZCcsIG9uZW5kKVxuICAgICAgICBpZiAoZG9QaXBlRXJyb3IpIHtcbiAgICAgICAgICBzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgb25lcnJvcilcbiAgICAgICAgfVxuICAgICAgICBuZXh0KClcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIG9uZXJyb3IgKGVycikge1xuICAgICAgICBtZXJnZWRTdHJlYW0uZW1pdCgnZXJyb3InLCBlcnIpXG4gICAgICB9XG4gICAgICAvLyBza2lwIGVuZGVkIHN0cmVhbVxuICAgICAgaWYgKHN0cmVhbS5fcmVhZGFibGVTdGF0ZS5lbmRFbWl0dGVkKSB7XG4gICAgICAgIHJldHVybiBuZXh0KClcbiAgICAgIH1cblxuICAgICAgc3RyZWFtLm9uKCdtZXJnZTJVbnBpcGVFbmQnLCBvbmVuZClcbiAgICAgIHN0cmVhbS5vbignZW5kJywgb25lbmQpXG5cbiAgICAgIGlmIChkb1BpcGVFcnJvcikge1xuICAgICAgICBzdHJlYW0ub24oJ2Vycm9yJywgb25lcnJvcilcbiAgICAgIH1cblxuICAgICAgc3RyZWFtLnBpcGUobWVyZ2VkU3RyZWFtLCB7IGVuZDogZmFsc2UgfSlcbiAgICAgIC8vIGNvbXBhdGlibGUgZm9yIG9sZCBzdHJlYW1cbiAgICAgIHN0cmVhbS5yZXN1bWUoKVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyZWFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgcGlwZShzdHJlYW1zW2ldKVxuICAgIH1cblxuICAgIG5leHQoKVxuICB9XG5cbiAgZnVuY3Rpb24gZW5kU3RyZWFtICgpIHtcbiAgICBtZXJnaW5nID0gZmFsc2VcbiAgICAvLyBlbWl0ICdxdWV1ZURyYWluJyB3aGVuIGFsbCBzdHJlYW1zIG1lcmdlZC5cbiAgICBtZXJnZWRTdHJlYW0uZW1pdCgncXVldWVEcmFpbicpXG4gICAgaWYgKGRvRW5kKSB7XG4gICAgICBtZXJnZWRTdHJlYW0uZW5kKClcbiAgICB9XG4gIH1cblxuICBtZXJnZWRTdHJlYW0uc2V0TWF4TGlzdGVuZXJzKDApXG4gIG1lcmdlZFN0cmVhbS5hZGQgPSBhZGRTdHJlYW1cbiAgbWVyZ2VkU3RyZWFtLm9uKCd1bnBpcGUnLCBmdW5jdGlvbiAoc3RyZWFtKSB7XG4gICAgc3RyZWFtLmVtaXQoJ21lcmdlMlVucGlwZUVuZCcpXG4gIH0pXG5cbiAgaWYgKGFyZ3MubGVuZ3RoKSB7XG4gICAgYWRkU3RyZWFtLmFwcGx5KG51bGwsIGFyZ3MpXG4gIH1cbiAgcmV0dXJuIG1lcmdlZFN0cmVhbVxufVxuXG4vLyBjaGVjayBhbmQgcGF1c2Ugc3RyZWFtcyBmb3IgcGlwZS5cbmZ1bmN0aW9uIHBhdXNlU3RyZWFtcyAoc3RyZWFtcywgb3B0aW9ucykge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoc3RyZWFtcykpIHtcbiAgICAvLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggb2xkLXN0eWxlIHN0cmVhbXNcbiAgICBpZiAoIXN0cmVhbXMuX3JlYWRhYmxlU3RhdGUgJiYgc3RyZWFtcy5waXBlKSB7XG4gICAgICBzdHJlYW1zID0gc3RyZWFtcy5waXBlKFBhc3NUaHJvdWdoKG9wdGlvbnMpKVxuICAgIH1cbiAgICBpZiAoIXN0cmVhbXMuX3JlYWRhYmxlU3RhdGUgfHwgIXN0cmVhbXMucGF1c2UgfHwgIXN0cmVhbXMucGlwZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdPbmx5IHJlYWRhYmxlIHN0cmVhbSBjYW4gYmUgbWVyZ2VkLicpXG4gICAgfVxuICAgIHN0cmVhbXMucGF1c2UoKVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBzdHJlYW1zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBzdHJlYW1zW2ldID0gcGF1c2VTdHJlYW1zKHN0cmVhbXNbaV0sIG9wdGlvbnMpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHJlYW1zXG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5tZXJnZSA9IHZvaWQgMDtcclxuY29uc3QgbWVyZ2UyID0gcmVxdWlyZShcIm1lcmdlMlwiKTtcclxuZnVuY3Rpb24gbWVyZ2Uoc3RyZWFtcykge1xyXG4gICAgY29uc3QgbWVyZ2VkU3RyZWFtID0gbWVyZ2UyKHN0cmVhbXMpO1xyXG4gICAgc3RyZWFtcy5mb3JFYWNoKChzdHJlYW0pID0+IHtcclxuICAgICAgICBzdHJlYW0ub25jZSgnZXJyb3InLCAoZXJyb3IpID0+IG1lcmdlZFN0cmVhbS5lbWl0KCdlcnJvcicsIGVycm9yKSk7XHJcbiAgICB9KTtcclxuICAgIG1lcmdlZFN0cmVhbS5vbmNlKCdjbG9zZScsICgpID0+IHByb3BhZ2F0ZUNsb3NlRXZlbnRUb1NvdXJjZXMoc3RyZWFtcykpO1xyXG4gICAgbWVyZ2VkU3RyZWFtLm9uY2UoJ2VuZCcsICgpID0+IHByb3BhZ2F0ZUNsb3NlRXZlbnRUb1NvdXJjZXMoc3RyZWFtcykpO1xyXG4gICAgcmV0dXJuIG1lcmdlZFN0cmVhbTtcclxufVxyXG5leHBvcnRzLm1lcmdlID0gbWVyZ2U7XHJcbmZ1bmN0aW9uIHByb3BhZ2F0ZUNsb3NlRXZlbnRUb1NvdXJjZXMoc3RyZWFtcykge1xyXG4gICAgc3RyZWFtcy5mb3JFYWNoKChzdHJlYW0pID0+IHN0cmVhbS5lbWl0KCdjbG9zZScpKTtcclxufVxyXG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5pc0VtcHR5ID0gZXhwb3J0cy5pc1N0cmluZyA9IHZvaWQgMDtcclxuZnVuY3Rpb24gaXNTdHJpbmcoaW5wdXQpIHtcclxuICAgIHJldHVybiB0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnO1xyXG59XHJcbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcclxuZnVuY3Rpb24gaXNFbXB0eShpbnB1dCkge1xyXG4gICAgcmV0dXJuIGlucHV0ID09PSAnJztcclxufVxyXG5leHBvcnRzLmlzRW1wdHkgPSBpc0VtcHR5O1xyXG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5zdHJpbmcgPSBleHBvcnRzLnN0cmVhbSA9IGV4cG9ydHMucGF0dGVybiA9IGV4cG9ydHMucGF0aCA9IGV4cG9ydHMuZnMgPSBleHBvcnRzLmVycm5vID0gZXhwb3J0cy5hcnJheSA9IHZvaWQgMDtcclxuY29uc3QgYXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheVwiKTtcclxuZXhwb3J0cy5hcnJheSA9IGFycmF5O1xyXG5jb25zdCBlcnJubyA9IHJlcXVpcmUoXCIuL2Vycm5vXCIpO1xyXG5leHBvcnRzLmVycm5vID0gZXJybm87XHJcbmNvbnN0IGZzID0gcmVxdWlyZShcIi4vZnNcIik7XHJcbmV4cG9ydHMuZnMgPSBmcztcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoXCIuL3BhdGhcIik7XHJcbmV4cG9ydHMucGF0aCA9IHBhdGg7XHJcbmNvbnN0IHBhdHRlcm4gPSByZXF1aXJlKFwiLi9wYXR0ZXJuXCIpO1xyXG5leHBvcnRzLnBhdHRlcm4gPSBwYXR0ZXJuO1xyXG5jb25zdCBzdHJlYW0gPSByZXF1aXJlKFwiLi9zdHJlYW1cIik7XHJcbmV4cG9ydHMuc3RyZWFtID0gc3RyZWFtO1xyXG5jb25zdCBzdHJpbmcgPSByZXF1aXJlKFwiLi9zdHJpbmdcIik7XHJcbmV4cG9ydHMuc3RyaW5nID0gc3RyaW5nO1xyXG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5jb252ZXJ0UGF0dGVybkdyb3VwVG9UYXNrID0gZXhwb3J0cy5jb252ZXJ0UGF0dGVybkdyb3Vwc1RvVGFza3MgPSBleHBvcnRzLmdyb3VwUGF0dGVybnNCeUJhc2VEaXJlY3RvcnkgPSBleHBvcnRzLmdldE5lZ2F0aXZlUGF0dGVybnNBc1Bvc2l0aXZlID0gZXhwb3J0cy5nZXRQb3NpdGl2ZVBhdHRlcm5zID0gZXhwb3J0cy5jb252ZXJ0UGF0dGVybnNUb1Rhc2tzID0gZXhwb3J0cy5nZW5lcmF0ZSA9IHZvaWQgMDtcclxuY29uc3QgdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XHJcbmZ1bmN0aW9uIGdlbmVyYXRlKHBhdHRlcm5zLCBzZXR0aW5ncykge1xyXG4gICAgY29uc3QgcG9zaXRpdmVQYXR0ZXJucyA9IGdldFBvc2l0aXZlUGF0dGVybnMocGF0dGVybnMpO1xyXG4gICAgY29uc3QgbmVnYXRpdmVQYXR0ZXJucyA9IGdldE5lZ2F0aXZlUGF0dGVybnNBc1Bvc2l0aXZlKHBhdHRlcm5zLCBzZXR0aW5ncy5pZ25vcmUpO1xyXG4gICAgY29uc3Qgc3RhdGljUGF0dGVybnMgPSBwb3NpdGl2ZVBhdHRlcm5zLmZpbHRlcigocGF0dGVybikgPT4gdXRpbHMucGF0dGVybi5pc1N0YXRpY1BhdHRlcm4ocGF0dGVybiwgc2V0dGluZ3MpKTtcclxuICAgIGNvbnN0IGR5bmFtaWNQYXR0ZXJucyA9IHBvc2l0aXZlUGF0dGVybnMuZmlsdGVyKChwYXR0ZXJuKSA9PiB1dGlscy5wYXR0ZXJuLmlzRHluYW1pY1BhdHRlcm4ocGF0dGVybiwgc2V0dGluZ3MpKTtcclxuICAgIGNvbnN0IHN0YXRpY1Rhc2tzID0gY29udmVydFBhdHRlcm5zVG9UYXNrcyhzdGF0aWNQYXR0ZXJucywgbmVnYXRpdmVQYXR0ZXJucywgLyogZHluYW1pYyAqLyBmYWxzZSk7XHJcbiAgICBjb25zdCBkeW5hbWljVGFza3MgPSBjb252ZXJ0UGF0dGVybnNUb1Rhc2tzKGR5bmFtaWNQYXR0ZXJucywgbmVnYXRpdmVQYXR0ZXJucywgLyogZHluYW1pYyAqLyB0cnVlKTtcclxuICAgIHJldHVybiBzdGF0aWNUYXNrcy5jb25jYXQoZHluYW1pY1Rhc2tzKTtcclxufVxyXG5leHBvcnRzLmdlbmVyYXRlID0gZ2VuZXJhdGU7XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRhc2tzIGdyb3VwZWQgYnkgYmFzaWMgcGF0dGVybiBkaXJlY3Rvcmllcy5cclxuICpcclxuICogUGF0dGVybnMgdGhhdCBjYW4gYmUgZm91bmQgaW5zaWRlIChgLi9gKSBhbmQgb3V0c2lkZSAoYC4uL2ApIHRoZSBjdXJyZW50IGRpcmVjdG9yeSBhcmUgaGFuZGxlZCBzZXBhcmF0ZWx5LlxyXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIGRpcmVjdG9yeSB0cmF2ZXJzYWwgc3RhcnRzIGF0IHRoZSBiYXNlIGRpcmVjdG9yeSBhbmQgZ29lcyBkZWVwZXIuXHJcbiAqL1xyXG5mdW5jdGlvbiBjb252ZXJ0UGF0dGVybnNUb1Rhc2tzKHBvc2l0aXZlLCBuZWdhdGl2ZSwgZHluYW1pYykge1xyXG4gICAgY29uc3QgdGFza3MgPSBbXTtcclxuICAgIGNvbnN0IHBhdHRlcm5zT3V0c2lkZUN1cnJlbnREaXJlY3RvcnkgPSB1dGlscy5wYXR0ZXJuLmdldFBhdHRlcm5zT3V0c2lkZUN1cnJlbnREaXJlY3RvcnkocG9zaXRpdmUpO1xyXG4gICAgY29uc3QgcGF0dGVybnNJbnNpZGVDdXJyZW50RGlyZWN0b3J5ID0gdXRpbHMucGF0dGVybi5nZXRQYXR0ZXJuc0luc2lkZUN1cnJlbnREaXJlY3RvcnkocG9zaXRpdmUpO1xyXG4gICAgY29uc3Qgb3V0c2lkZUN1cnJlbnREaXJlY3RvcnlHcm91cCA9IGdyb3VwUGF0dGVybnNCeUJhc2VEaXJlY3RvcnkocGF0dGVybnNPdXRzaWRlQ3VycmVudERpcmVjdG9yeSk7XHJcbiAgICBjb25zdCBpbnNpZGVDdXJyZW50RGlyZWN0b3J5R3JvdXAgPSBncm91cFBhdHRlcm5zQnlCYXNlRGlyZWN0b3J5KHBhdHRlcm5zSW5zaWRlQ3VycmVudERpcmVjdG9yeSk7XHJcbiAgICB0YXNrcy5wdXNoKC4uLmNvbnZlcnRQYXR0ZXJuR3JvdXBzVG9UYXNrcyhvdXRzaWRlQ3VycmVudERpcmVjdG9yeUdyb3VwLCBuZWdhdGl2ZSwgZHluYW1pYykpO1xyXG4gICAgLypcclxuICAgICAqIEZvciB0aGUgc2FrZSBvZiByZWR1Y2luZyBmdXR1cmUgYWNjZXNzZXMgdG8gdGhlIGZpbGUgc3lzdGVtLCB3ZSBtZXJnZSBhbGwgdGFza3Mgd2l0aGluIHRoZSBjdXJyZW50IGRpcmVjdG9yeVxyXG4gICAgICogaW50byBhIGdsb2JhbCB0YXNrLCBpZiBhdCBsZWFzdCBvbmUgcGF0dGVybiByZWZlcnMgdG8gdGhlIHJvb3QgKGAuYCkuIEluIHRoaXMgY2FzZSwgdGhlIGdsb2JhbCB0YXNrIGNvdmVycyB0aGUgcmVzdC5cclxuICAgICAqL1xyXG4gICAgaWYgKCcuJyBpbiBpbnNpZGVDdXJyZW50RGlyZWN0b3J5R3JvdXApIHtcclxuICAgICAgICB0YXNrcy5wdXNoKGNvbnZlcnRQYXR0ZXJuR3JvdXBUb1Rhc2soJy4nLCBwYXR0ZXJuc0luc2lkZUN1cnJlbnREaXJlY3RvcnksIG5lZ2F0aXZlLCBkeW5hbWljKSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0YXNrcy5wdXNoKC4uLmNvbnZlcnRQYXR0ZXJuR3JvdXBzVG9UYXNrcyhpbnNpZGVDdXJyZW50RGlyZWN0b3J5R3JvdXAsIG5lZ2F0aXZlLCBkeW5hbWljKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFza3M7XHJcbn1cclxuZXhwb3J0cy5jb252ZXJ0UGF0dGVybnNUb1Rhc2tzID0gY29udmVydFBhdHRlcm5zVG9UYXNrcztcclxuZnVuY3Rpb24gZ2V0UG9zaXRpdmVQYXR0ZXJucyhwYXR0ZXJucykge1xyXG4gICAgcmV0dXJuIHV0aWxzLnBhdHRlcm4uZ2V0UG9zaXRpdmVQYXR0ZXJucyhwYXR0ZXJucyk7XHJcbn1cclxuZXhwb3J0cy5nZXRQb3NpdGl2ZVBhdHRlcm5zID0gZ2V0UG9zaXRpdmVQYXR0ZXJucztcclxuZnVuY3Rpb24gZ2V0TmVnYXRpdmVQYXR0ZXJuc0FzUG9zaXRpdmUocGF0dGVybnMsIGlnbm9yZSkge1xyXG4gICAgY29uc3QgbmVnYXRpdmUgPSB1dGlscy5wYXR0ZXJuLmdldE5lZ2F0aXZlUGF0dGVybnMocGF0dGVybnMpLmNvbmNhdChpZ25vcmUpO1xyXG4gICAgY29uc3QgcG9zaXRpdmUgPSBuZWdhdGl2ZS5tYXAodXRpbHMucGF0dGVybi5jb252ZXJ0VG9Qb3NpdGl2ZVBhdHRlcm4pO1xyXG4gICAgcmV0dXJuIHBvc2l0aXZlO1xyXG59XHJcbmV4cG9ydHMuZ2V0TmVnYXRpdmVQYXR0ZXJuc0FzUG9zaXRpdmUgPSBnZXROZWdhdGl2ZVBhdHRlcm5zQXNQb3NpdGl2ZTtcclxuZnVuY3Rpb24gZ3JvdXBQYXR0ZXJuc0J5QmFzZURpcmVjdG9yeShwYXR0ZXJucykge1xyXG4gICAgY29uc3QgZ3JvdXAgPSB7fTtcclxuICAgIHJldHVybiBwYXR0ZXJucy5yZWR1Y2UoKGNvbGxlY3Rpb24sIHBhdHRlcm4pID0+IHtcclxuICAgICAgICBjb25zdCBiYXNlID0gdXRpbHMucGF0dGVybi5nZXRCYXNlRGlyZWN0b3J5KHBhdHRlcm4pO1xyXG4gICAgICAgIGlmIChiYXNlIGluIGNvbGxlY3Rpb24pIHtcclxuICAgICAgICAgICAgY29sbGVjdGlvbltiYXNlXS5wdXNoKHBhdHRlcm4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29sbGVjdGlvbltiYXNlXSA9IFtwYXR0ZXJuXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XHJcbiAgICB9LCBncm91cCk7XHJcbn1cclxuZXhwb3J0cy5ncm91cFBhdHRlcm5zQnlCYXNlRGlyZWN0b3J5ID0gZ3JvdXBQYXR0ZXJuc0J5QmFzZURpcmVjdG9yeTtcclxuZnVuY3Rpb24gY29udmVydFBhdHRlcm5Hcm91cHNUb1Rhc2tzKHBvc2l0aXZlLCBuZWdhdGl2ZSwgZHluYW1pYykge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHBvc2l0aXZlKS5tYXAoKGJhc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gY29udmVydFBhdHRlcm5Hcm91cFRvVGFzayhiYXNlLCBwb3NpdGl2ZVtiYXNlXSwgbmVnYXRpdmUsIGR5bmFtaWMpO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5jb252ZXJ0UGF0dGVybkdyb3Vwc1RvVGFza3MgPSBjb252ZXJ0UGF0dGVybkdyb3Vwc1RvVGFza3M7XHJcbmZ1bmN0aW9uIGNvbnZlcnRQYXR0ZXJuR3JvdXBUb1Rhc2soYmFzZSwgcG9zaXRpdmUsIG5lZ2F0aXZlLCBkeW5hbWljKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGR5bmFtaWMsXHJcbiAgICAgICAgcG9zaXRpdmUsXHJcbiAgICAgICAgbmVnYXRpdmUsXHJcbiAgICAgICAgYmFzZSxcclxuICAgICAgICBwYXR0ZXJuczogW10uY29uY2F0KHBvc2l0aXZlLCBuZWdhdGl2ZS5tYXAodXRpbHMucGF0dGVybi5jb252ZXJ0VG9OZWdhdGl2ZVBhdHRlcm4pKVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmNvbnZlcnRQYXR0ZXJuR3JvdXBUb1Rhc2sgPSBjb252ZXJ0UGF0dGVybkdyb3VwVG9UYXNrO1xyXG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5yZW1vdmVEdXBsaWNhdGVTbGFzaGVzID0gZXhwb3J0cy50cmFuc2Zvcm0gPSB2b2lkIDA7XHJcbi8qKlxyXG4gKiBNYXRjaGVzIGEgc2VxdWVuY2Ugb2YgdHdvIG9yIG1vcmUgY29uc2VjdXRpdmUgc2xhc2hlcywgZXhjbHVkaW5nIHRoZSBmaXJzdCB0d28gc2xhc2hlcyBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBzdHJpbmcuXHJcbiAqIFRoZSBsYXR0ZXIgaXMgZHVlIHRvIHRoZSBwcmVzZW5jZSBvZiB0aGUgZGV2aWNlIHBhdGggYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgVU5DIHBhdGguXHJcbiAqIEB0b2RvIHJld3JpdGUgdG8gbmVnYXRpdmUgbG9va2JlaGluZCB3aXRoIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UuXHJcbiAqL1xyXG5jb25zdCBET1VCTEVfU0xBU0hfUkUgPSAvKD8hXilcXC97Mix9L2c7XHJcbmZ1bmN0aW9uIHRyYW5zZm9ybShwYXR0ZXJucykge1xyXG4gICAgcmV0dXJuIHBhdHRlcm5zLm1hcCgocGF0dGVybikgPT4gcmVtb3ZlRHVwbGljYXRlU2xhc2hlcyhwYXR0ZXJuKSk7XHJcbn1cclxuZXhwb3J0cy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XHJcbi8qKlxyXG4gKiBUaGlzIHBhY2thZ2Ugb25seSB3b3JrcyB3aXRoIGZvcndhcmQgc2xhc2hlcyBhcyBhIHBhdGggc2VwYXJhdG9yLlxyXG4gKiBCZWNhdXNlIG9mIHRoaXMsIHdlIGNhbm5vdCB1c2UgdGhlIHN0YW5kYXJkIGBwYXRoLm5vcm1hbGl6ZWAgbWV0aG9kLCBiZWNhdXNlIG9uIFdpbmRvd3MgcGxhdGZvcm0gaXQgd2lsbCB1c2Ugb2YgYmFja3NsYXNoZXMuXHJcbiAqL1xyXG5mdW5jdGlvbiByZW1vdmVEdXBsaWNhdGVTbGFzaGVzKHBhdHRlcm4pIHtcclxuICAgIHJldHVybiBwYXR0ZXJuLnJlcGxhY2UoRE9VQkxFX1NMQVNIX1JFLCAnLycpO1xyXG59XHJcbmV4cG9ydHMucmVtb3ZlRHVwbGljYXRlU2xhc2hlcyA9IHJlbW92ZUR1cGxpY2F0ZVNsYXNoZXM7XHJcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVhZCA9IHZvaWQgMDtcbmZ1bmN0aW9uIHJlYWQocGF0aCwgc2V0dGluZ3MsIGNhbGxiYWNrKSB7XG4gICAgc2V0dGluZ3MuZnMubHN0YXQocGF0aCwgKGxzdGF0RXJyb3IsIGxzdGF0KSA9PiB7XG4gICAgICAgIGlmIChsc3RhdEVycm9yICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjYWxsRmFpbHVyZUNhbGxiYWNrKGNhbGxiYWNrLCBsc3RhdEVycm9yKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWxzdGF0LmlzU3ltYm9saWNMaW5rKCkgfHwgIXNldHRpbmdzLmZvbGxvd1N5bWJvbGljTGluaykge1xuICAgICAgICAgICAgY2FsbFN1Y2Nlc3NDYWxsYmFjayhjYWxsYmFjaywgbHN0YXQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNldHRpbmdzLmZzLnN0YXQocGF0aCwgKHN0YXRFcnJvciwgc3RhdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHN0YXRFcnJvciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy50aHJvd0Vycm9yT25Ccm9rZW5TeW1ib2xpY0xpbmspIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbEZhaWx1cmVDYWxsYmFjayhjYWxsYmFjaywgc3RhdEVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYWxsU3VjY2Vzc0NhbGxiYWNrKGNhbGxiYWNrLCBsc3RhdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNldHRpbmdzLm1hcmtTeW1ib2xpY0xpbmspIHtcbiAgICAgICAgICAgICAgICBzdGF0LmlzU3ltYm9saWNMaW5rID0gKCkgPT4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxTdWNjZXNzQ2FsbGJhY2soY2FsbGJhY2ssIHN0YXQpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydHMucmVhZCA9IHJlYWQ7XG5mdW5jdGlvbiBjYWxsRmFpbHVyZUNhbGxiYWNrKGNhbGxiYWNrLCBlcnJvcikge1xuICAgIGNhbGxiYWNrKGVycm9yKTtcbn1cbmZ1bmN0aW9uIGNhbGxTdWNjZXNzQ2FsbGJhY2soY2FsbGJhY2ssIHJlc3VsdCkge1xuICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdCk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlYWQgPSB2b2lkIDA7XG5mdW5jdGlvbiByZWFkKHBhdGgsIHNldHRpbmdzKSB7XG4gICAgY29uc3QgbHN0YXQgPSBzZXR0aW5ncy5mcy5sc3RhdFN5bmMocGF0aCk7XG4gICAgaWYgKCFsc3RhdC5pc1N5bWJvbGljTGluaygpIHx8ICFzZXR0aW5ncy5mb2xsb3dTeW1ib2xpY0xpbmspIHtcbiAgICAgICAgcmV0dXJuIGxzdGF0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBzdGF0ID0gc2V0dGluZ3MuZnMuc3RhdFN5bmMocGF0aCk7XG4gICAgICAgIGlmIChzZXR0aW5ncy5tYXJrU3ltYm9saWNMaW5rKSB7XG4gICAgICAgICAgICBzdGF0LmlzU3ltYm9saWNMaW5rID0gKCkgPT4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RhdDtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmICghc2V0dGluZ3MudGhyb3dFcnJvck9uQnJva2VuU3ltYm9saWNMaW5rKSB7XG4gICAgICAgICAgICByZXR1cm4gbHN0YXQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxufVxuZXhwb3J0cy5yZWFkID0gcmVhZDtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY3JlYXRlRmlsZVN5c3RlbUFkYXB0ZXIgPSBleHBvcnRzLkZJTEVfU1lTVEVNX0FEQVBURVIgPSB2b2lkIDA7XG5jb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcbmV4cG9ydHMuRklMRV9TWVNURU1fQURBUFRFUiA9IHtcbiAgICBsc3RhdDogZnMubHN0YXQsXG4gICAgc3RhdDogZnMuc3RhdCxcbiAgICBsc3RhdFN5bmM6IGZzLmxzdGF0U3luYyxcbiAgICBzdGF0U3luYzogZnMuc3RhdFN5bmNcbn07XG5mdW5jdGlvbiBjcmVhdGVGaWxlU3lzdGVtQWRhcHRlcihmc01ldGhvZHMpIHtcbiAgICBpZiAoZnNNZXRob2RzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGV4cG9ydHMuRklMRV9TWVNURU1fQURBUFRFUjtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZXhwb3J0cy5GSUxFX1NZU1RFTV9BREFQVEVSKSwgZnNNZXRob2RzKTtcbn1cbmV4cG9ydHMuY3JlYXRlRmlsZVN5c3RlbUFkYXB0ZXIgPSBjcmVhdGVGaWxlU3lzdGVtQWRhcHRlcjtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGZzID0gcmVxdWlyZShcIi4vYWRhcHRlcnMvZnNcIik7XG5jbGFzcyBTZXR0aW5ncyB7XG4gICAgY29uc3RydWN0b3IoX29wdGlvbnMgPSB7fSkge1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gX29wdGlvbnM7XG4gICAgICAgIHRoaXMuZm9sbG93U3ltYm9saWNMaW5rID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy5mb2xsb3dTeW1ib2xpY0xpbmssIHRydWUpO1xuICAgICAgICB0aGlzLmZzID0gZnMuY3JlYXRlRmlsZVN5c3RlbUFkYXB0ZXIodGhpcy5fb3B0aW9ucy5mcyk7XG4gICAgICAgIHRoaXMubWFya1N5bWJvbGljTGluayA9IHRoaXMuX2dldFZhbHVlKHRoaXMuX29wdGlvbnMubWFya1N5bWJvbGljTGluaywgZmFsc2UpO1xuICAgICAgICB0aGlzLnRocm93RXJyb3JPbkJyb2tlblN5bWJvbGljTGluayA9IHRoaXMuX2dldFZhbHVlKHRoaXMuX29wdGlvbnMudGhyb3dFcnJvck9uQnJva2VuU3ltYm9saWNMaW5rLCB0cnVlKTtcbiAgICB9XG4gICAgX2dldFZhbHVlKG9wdGlvbiwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbiAhPT0gbnVsbCAmJiBvcHRpb24gIT09IHZvaWQgMCA/IG9wdGlvbiA6IHZhbHVlO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFNldHRpbmdzO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zdGF0U3luYyA9IGV4cG9ydHMuc3RhdCA9IGV4cG9ydHMuU2V0dGluZ3MgPSB2b2lkIDA7XG5jb25zdCBhc3luYyA9IHJlcXVpcmUoXCIuL3Byb3ZpZGVycy9hc3luY1wiKTtcbmNvbnN0IHN5bmMgPSByZXF1aXJlKFwiLi9wcm92aWRlcnMvc3luY1wiKTtcbmNvbnN0IHNldHRpbmdzXzEgPSByZXF1aXJlKFwiLi9zZXR0aW5nc1wiKTtcbmV4cG9ydHMuU2V0dGluZ3MgPSBzZXR0aW5nc18xLmRlZmF1bHQ7XG5mdW5jdGlvbiBzdGF0KHBhdGgsIG9wdGlvbnNPclNldHRpbmdzT3JDYWxsYmFjaywgY2FsbGJhY2spIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnNPclNldHRpbmdzT3JDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhc3luYy5yZWFkKHBhdGgsIGdldFNldHRpbmdzKCksIG9wdGlvbnNPclNldHRpbmdzT3JDYWxsYmFjayk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXN5bmMucmVhZChwYXRoLCBnZXRTZXR0aW5ncyhvcHRpb25zT3JTZXR0aW5nc09yQ2FsbGJhY2spLCBjYWxsYmFjayk7XG59XG5leHBvcnRzLnN0YXQgPSBzdGF0O1xuZnVuY3Rpb24gc3RhdFN5bmMocGF0aCwgb3B0aW9uc09yU2V0dGluZ3MpIHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IGdldFNldHRpbmdzKG9wdGlvbnNPclNldHRpbmdzKTtcbiAgICByZXR1cm4gc3luYy5yZWFkKHBhdGgsIHNldHRpbmdzKTtcbn1cbmV4cG9ydHMuc3RhdFN5bmMgPSBzdGF0U3luYztcbmZ1bmN0aW9uIGdldFNldHRpbmdzKHNldHRpbmdzT3JPcHRpb25zID0ge30pIHtcbiAgICBpZiAoc2V0dGluZ3NPck9wdGlvbnMgaW5zdGFuY2VvZiBzZXR0aW5nc18xLmRlZmF1bHQpIHtcbiAgICAgICAgcmV0dXJuIHNldHRpbmdzT3JPcHRpb25zO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IHNldHRpbmdzXzEuZGVmYXVsdChzZXR0aW5nc09yT3B0aW9ucyk7XG59XG4iLCAiLyohIHF1ZXVlLW1pY3JvdGFzay4gTUlUIExpY2Vuc2UuIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZy9vcGVuc291cmNlPiAqL1xubGV0IHByb21pc2VcblxubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgcXVldWVNaWNyb3Rhc2sgPT09ICdmdW5jdGlvbidcbiAgPyBxdWV1ZU1pY3JvdGFzay5iaW5kKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsKVxuICAvLyByZXVzZSByZXNvbHZlZCBwcm9taXNlLCBhbmQgYWxsb2NhdGUgaXQgbGF6aWx5XG4gIDogY2IgPT4gKHByb21pc2UgfHwgKHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKSkpXG4gICAgLnRoZW4oY2IpXG4gICAgLmNhdGNoKGVyciA9PiBzZXRUaW1lb3V0KCgpID0+IHsgdGhyb3cgZXJyIH0sIDApKVxuIiwgIi8qISBydW4tcGFyYWxsZWwuIE1JVCBMaWNlbnNlLiBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmcvb3BlbnNvdXJjZT4gKi9cbm1vZHVsZS5leHBvcnRzID0gcnVuUGFyYWxsZWxcblxuY29uc3QgcXVldWVNaWNyb3Rhc2sgPSByZXF1aXJlKCdxdWV1ZS1taWNyb3Rhc2snKVxuXG5mdW5jdGlvbiBydW5QYXJhbGxlbCAodGFza3MsIGNiKSB7XG4gIGxldCByZXN1bHRzLCBwZW5kaW5nLCBrZXlzXG4gIGxldCBpc1N5bmMgPSB0cnVlXG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodGFza3MpKSB7XG4gICAgcmVzdWx0cyA9IFtdXG4gICAgcGVuZGluZyA9IHRhc2tzLmxlbmd0aFxuICB9IGVsc2Uge1xuICAgIGtleXMgPSBPYmplY3Qua2V5cyh0YXNrcylcbiAgICByZXN1bHRzID0ge31cbiAgICBwZW5kaW5nID0ga2V5cy5sZW5ndGhcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvbmUgKGVycikge1xuICAgIGZ1bmN0aW9uIGVuZCAoKSB7XG4gICAgICBpZiAoY2IpIGNiKGVyciwgcmVzdWx0cylcbiAgICAgIGNiID0gbnVsbFxuICAgIH1cbiAgICBpZiAoaXNTeW5jKSBxdWV1ZU1pY3JvdGFzayhlbmQpXG4gICAgZWxzZSBlbmQoKVxuICB9XG5cbiAgZnVuY3Rpb24gZWFjaCAoaSwgZXJyLCByZXN1bHQpIHtcbiAgICByZXN1bHRzW2ldID0gcmVzdWx0XG4gICAgaWYgKC0tcGVuZGluZyA9PT0gMCB8fCBlcnIpIHtcbiAgICAgIGRvbmUoZXJyKVxuICAgIH1cbiAgfVxuXG4gIGlmICghcGVuZGluZykge1xuICAgIC8vIGVtcHR5XG4gICAgZG9uZShudWxsKVxuICB9IGVsc2UgaWYgKGtleXMpIHtcbiAgICAvLyBvYmplY3RcbiAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdGFza3Nba2V5XShmdW5jdGlvbiAoZXJyLCByZXN1bHQpIHsgZWFjaChrZXksIGVyciwgcmVzdWx0KSB9KVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgLy8gYXJyYXlcbiAgICB0YXNrcy5mb3JFYWNoKGZ1bmN0aW9uICh0YXNrLCBpKSB7XG4gICAgICB0YXNrKGZ1bmN0aW9uIChlcnIsIHJlc3VsdCkgeyBlYWNoKGksIGVyciwgcmVzdWx0KSB9KVxuICAgIH0pXG4gIH1cblxuICBpc1N5bmMgPSBmYWxzZVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JU19TVVBQT1JUX1JFQURESVJfV0lUSF9GSUxFX1RZUEVTID0gdm9pZCAwO1xuY29uc3QgTk9ERV9QUk9DRVNTX1ZFUlNJT05fUEFSVFMgPSBwcm9jZXNzLnZlcnNpb25zLm5vZGUuc3BsaXQoJy4nKTtcbmlmIChOT0RFX1BST0NFU1NfVkVSU0lPTl9QQVJUU1swXSA9PT0gdW5kZWZpbmVkIHx8IE5PREVfUFJPQ0VTU19WRVJTSU9OX1BBUlRTWzFdID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgYmVoYXZpb3IuIFRoZSAncHJvY2Vzcy52ZXJzaW9ucy5ub2RlJyB2YXJpYWJsZSBoYXMgaW52YWxpZCB2YWx1ZTogJHtwcm9jZXNzLnZlcnNpb25zLm5vZGV9YCk7XG59XG5jb25zdCBNQUpPUl9WRVJTSU9OID0gTnVtYmVyLnBhcnNlSW50KE5PREVfUFJPQ0VTU19WRVJTSU9OX1BBUlRTWzBdLCAxMCk7XG5jb25zdCBNSU5PUl9WRVJTSU9OID0gTnVtYmVyLnBhcnNlSW50KE5PREVfUFJPQ0VTU19WRVJTSU9OX1BBUlRTWzFdLCAxMCk7XG5jb25zdCBTVVBQT1JURURfTUFKT1JfVkVSU0lPTiA9IDEwO1xuY29uc3QgU1VQUE9SVEVEX01JTk9SX1ZFUlNJT04gPSAxMDtcbmNvbnN0IElTX01BVENIRURfQllfTUFKT1IgPSBNQUpPUl9WRVJTSU9OID4gU1VQUE9SVEVEX01BSk9SX1ZFUlNJT047XG5jb25zdCBJU19NQVRDSEVEX0JZX01BSk9SX0FORF9NSU5PUiA9IE1BSk9SX1ZFUlNJT04gPT09IFNVUFBPUlRFRF9NQUpPUl9WRVJTSU9OICYmIE1JTk9SX1ZFUlNJT04gPj0gU1VQUE9SVEVEX01JTk9SX1ZFUlNJT047XG4vKipcbiAqIElTIGB0cnVlYCBmb3IgTm9kZS5qcyAxMC4xMCBhbmQgZ3JlYXRlci5cbiAqL1xuZXhwb3J0cy5JU19TVVBQT1JUX1JFQURESVJfV0lUSF9GSUxFX1RZUEVTID0gSVNfTUFUQ0hFRF9CWV9NQUpPUiB8fCBJU19NQVRDSEVEX0JZX01BSk9SX0FORF9NSU5PUjtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY3JlYXRlRGlyZW50RnJvbVN0YXRzID0gdm9pZCAwO1xuY2xhc3MgRGlyZW50RnJvbVN0YXRzIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBzdGF0cykge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmlzQmxvY2tEZXZpY2UgPSBzdGF0cy5pc0Jsb2NrRGV2aWNlLmJpbmQoc3RhdHMpO1xuICAgICAgICB0aGlzLmlzQ2hhcmFjdGVyRGV2aWNlID0gc3RhdHMuaXNDaGFyYWN0ZXJEZXZpY2UuYmluZChzdGF0cyk7XG4gICAgICAgIHRoaXMuaXNEaXJlY3RvcnkgPSBzdGF0cy5pc0RpcmVjdG9yeS5iaW5kKHN0YXRzKTtcbiAgICAgICAgdGhpcy5pc0ZJRk8gPSBzdGF0cy5pc0ZJRk8uYmluZChzdGF0cyk7XG4gICAgICAgIHRoaXMuaXNGaWxlID0gc3RhdHMuaXNGaWxlLmJpbmQoc3RhdHMpO1xuICAgICAgICB0aGlzLmlzU29ja2V0ID0gc3RhdHMuaXNTb2NrZXQuYmluZChzdGF0cyk7XG4gICAgICAgIHRoaXMuaXNTeW1ib2xpY0xpbmsgPSBzdGF0cy5pc1N5bWJvbGljTGluay5iaW5kKHN0YXRzKTtcbiAgICB9XG59XG5mdW5jdGlvbiBjcmVhdGVEaXJlbnRGcm9tU3RhdHMobmFtZSwgc3RhdHMpIHtcbiAgICByZXR1cm4gbmV3IERpcmVudEZyb21TdGF0cyhuYW1lLCBzdGF0cyk7XG59XG5leHBvcnRzLmNyZWF0ZURpcmVudEZyb21TdGF0cyA9IGNyZWF0ZURpcmVudEZyb21TdGF0cztcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZnMgPSB2b2lkIDA7XG5jb25zdCBmcyA9IHJlcXVpcmUoXCIuL2ZzXCIpO1xuZXhwb3J0cy5mcyA9IGZzO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5qb2luUGF0aFNlZ21lbnRzID0gdm9pZCAwO1xuZnVuY3Rpb24gam9pblBhdGhTZWdtZW50cyhhLCBiLCBzZXBhcmF0b3IpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgY29ycmVjdCBoYW5kbGluZyBvZiBjYXNlcyB3aGVuIHRoZSBmaXJzdCBzZWdtZW50IGlzIGEgcm9vdCAoYC9gLCBgQzovYCkgb3IgVU5DIHBhdGggKGAvLz8vQzovYCkuXG4gICAgICovXG4gICAgaWYgKGEuZW5kc1dpdGgoc2VwYXJhdG9yKSkge1xuICAgICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuICAgIHJldHVybiBhICsgc2VwYXJhdG9yICsgYjtcbn1cbmV4cG9ydHMuam9pblBhdGhTZWdtZW50cyA9IGpvaW5QYXRoU2VnbWVudHM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlYWRkaXIgPSBleHBvcnRzLnJlYWRkaXJXaXRoRmlsZVR5cGVzID0gZXhwb3J0cy5yZWFkID0gdm9pZCAwO1xuY29uc3QgZnNTdGF0ID0gcmVxdWlyZShcIkBub2RlbGliL2ZzLnN0YXRcIik7XG5jb25zdCBycGwgPSByZXF1aXJlKFwicnVuLXBhcmFsbGVsXCIpO1xuY29uc3QgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuY29uc3QgdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBjb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5mdW5jdGlvbiByZWFkKGRpcmVjdG9yeSwgc2V0dGluZ3MsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFzZXR0aW5ncy5zdGF0cyAmJiBjb25zdGFudHNfMS5JU19TVVBQT1JUX1JFQURESVJfV0lUSF9GSUxFX1RZUEVTKSB7XG4gICAgICAgIHJlYWRkaXJXaXRoRmlsZVR5cGVzKGRpcmVjdG9yeSwgc2V0dGluZ3MsIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZWFkZGlyKGRpcmVjdG9yeSwgc2V0dGluZ3MsIGNhbGxiYWNrKTtcbn1cbmV4cG9ydHMucmVhZCA9IHJlYWQ7XG5mdW5jdGlvbiByZWFkZGlyV2l0aEZpbGVUeXBlcyhkaXJlY3RvcnksIHNldHRpbmdzLCBjYWxsYmFjaykge1xuICAgIHNldHRpbmdzLmZzLnJlYWRkaXIoZGlyZWN0b3J5LCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSwgKHJlYWRkaXJFcnJvciwgZGlyZW50cykgPT4ge1xuICAgICAgICBpZiAocmVhZGRpckVycm9yICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjYWxsRmFpbHVyZUNhbGxiYWNrKGNhbGxiYWNrLCByZWFkZGlyRXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVudHJpZXMgPSBkaXJlbnRzLm1hcCgoZGlyZW50KSA9PiAoe1xuICAgICAgICAgICAgZGlyZW50LFxuICAgICAgICAgICAgbmFtZTogZGlyZW50Lm5hbWUsXG4gICAgICAgICAgICBwYXRoOiBjb21tb24uam9pblBhdGhTZWdtZW50cyhkaXJlY3RvcnksIGRpcmVudC5uYW1lLCBzZXR0aW5ncy5wYXRoU2VnbWVudFNlcGFyYXRvcilcbiAgICAgICAgfSkpO1xuICAgICAgICBpZiAoIXNldHRpbmdzLmZvbGxvd1N5bWJvbGljTGlua3MpIHtcbiAgICAgICAgICAgIGNhbGxTdWNjZXNzQ2FsbGJhY2soY2FsbGJhY2ssIGVudHJpZXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRhc2tzID0gZW50cmllcy5tYXAoKGVudHJ5KSA9PiBtYWtlUnBsVGFza0VudHJ5KGVudHJ5LCBzZXR0aW5ncykpO1xuICAgICAgICBycGwodGFza3MsIChycGxFcnJvciwgcnBsRW50cmllcykgPT4ge1xuICAgICAgICAgICAgaWYgKHJwbEVycm9yICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY2FsbEZhaWx1cmVDYWxsYmFjayhjYWxsYmFjaywgcnBsRXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxTdWNjZXNzQ2FsbGJhY2soY2FsbGJhY2ssIHJwbEVudHJpZXMpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydHMucmVhZGRpcldpdGhGaWxlVHlwZXMgPSByZWFkZGlyV2l0aEZpbGVUeXBlcztcbmZ1bmN0aW9uIG1ha2VScGxUYXNrRW50cnkoZW50cnksIHNldHRpbmdzKSB7XG4gICAgcmV0dXJuIChkb25lKSA9PiB7XG4gICAgICAgIGlmICghZW50cnkuZGlyZW50LmlzU3ltYm9saWNMaW5rKCkpIHtcbiAgICAgICAgICAgIGRvbmUobnVsbCwgZW50cnkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNldHRpbmdzLmZzLnN0YXQoZW50cnkucGF0aCwgKHN0YXRFcnJvciwgc3RhdHMpID0+IHtcbiAgICAgICAgICAgIGlmIChzdGF0RXJyb3IgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3MudGhyb3dFcnJvck9uQnJva2VuU3ltYm9saWNMaW5rKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbmUoc3RhdEVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkb25lKG51bGwsIGVudHJ5KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbnRyeS5kaXJlbnQgPSB1dGlscy5mcy5jcmVhdGVEaXJlbnRGcm9tU3RhdHMoZW50cnkubmFtZSwgc3RhdHMpO1xuICAgICAgICAgICAgZG9uZShudWxsLCBlbnRyeSk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5mdW5jdGlvbiByZWFkZGlyKGRpcmVjdG9yeSwgc2V0dGluZ3MsIGNhbGxiYWNrKSB7XG4gICAgc2V0dGluZ3MuZnMucmVhZGRpcihkaXJlY3RvcnksIChyZWFkZGlyRXJyb3IsIG5hbWVzKSA9PiB7XG4gICAgICAgIGlmIChyZWFkZGlyRXJyb3IgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNhbGxGYWlsdXJlQ2FsbGJhY2soY2FsbGJhY2ssIHJlYWRkaXJFcnJvcik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGFza3MgPSBuYW1lcy5tYXAoKG5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBjb21tb24uam9pblBhdGhTZWdtZW50cyhkaXJlY3RvcnksIG5hbWUsIHNldHRpbmdzLnBhdGhTZWdtZW50U2VwYXJhdG9yKTtcbiAgICAgICAgICAgIHJldHVybiAoZG9uZSkgPT4ge1xuICAgICAgICAgICAgICAgIGZzU3RhdC5zdGF0KHBhdGgsIHNldHRpbmdzLmZzU3RhdFNldHRpbmdzLCAoZXJyb3IsIHN0YXRzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZShlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW50cnkgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVudDogdXRpbHMuZnMuY3JlYXRlRGlyZW50RnJvbVN0YXRzKG5hbWUsIHN0YXRzKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3Muc3RhdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnN0YXRzID0gc3RhdHM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZG9uZShudWxsLCBlbnRyeSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgcnBsKHRhc2tzLCAocnBsRXJyb3IsIGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChycGxFcnJvciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNhbGxGYWlsdXJlQ2FsbGJhY2soY2FsbGJhY2ssIHJwbEVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWxsU3VjY2Vzc0NhbGxiYWNrKGNhbGxiYWNrLCBlbnRyaWVzKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnRzLnJlYWRkaXIgPSByZWFkZGlyO1xuZnVuY3Rpb24gY2FsbEZhaWx1cmVDYWxsYmFjayhjYWxsYmFjaywgZXJyb3IpIHtcbiAgICBjYWxsYmFjayhlcnJvcik7XG59XG5mdW5jdGlvbiBjYWxsU3VjY2Vzc0NhbGxiYWNrKGNhbGxiYWNrLCByZXN1bHQpIHtcbiAgICBjYWxsYmFjayhudWxsLCByZXN1bHQpO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZWFkZGlyID0gZXhwb3J0cy5yZWFkZGlyV2l0aEZpbGVUeXBlcyA9IGV4cG9ydHMucmVhZCA9IHZvaWQgMDtcbmNvbnN0IGZzU3RhdCA9IHJlcXVpcmUoXCJAbm9kZWxpYi9mcy5zdGF0XCIpO1xuY29uc3QgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuY29uc3QgdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBjb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5mdW5jdGlvbiByZWFkKGRpcmVjdG9yeSwgc2V0dGluZ3MpIHtcbiAgICBpZiAoIXNldHRpbmdzLnN0YXRzICYmIGNvbnN0YW50c18xLklTX1NVUFBPUlRfUkVBRERJUl9XSVRIX0ZJTEVfVFlQRVMpIHtcbiAgICAgICAgcmV0dXJuIHJlYWRkaXJXaXRoRmlsZVR5cGVzKGRpcmVjdG9yeSwgc2V0dGluZ3MpO1xuICAgIH1cbiAgICByZXR1cm4gcmVhZGRpcihkaXJlY3RvcnksIHNldHRpbmdzKTtcbn1cbmV4cG9ydHMucmVhZCA9IHJlYWQ7XG5mdW5jdGlvbiByZWFkZGlyV2l0aEZpbGVUeXBlcyhkaXJlY3RvcnksIHNldHRpbmdzKSB7XG4gICAgY29uc3QgZGlyZW50cyA9IHNldHRpbmdzLmZzLnJlYWRkaXJTeW5jKGRpcmVjdG9yeSwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pO1xuICAgIHJldHVybiBkaXJlbnRzLm1hcCgoZGlyZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGVudHJ5ID0ge1xuICAgICAgICAgICAgZGlyZW50LFxuICAgICAgICAgICAgbmFtZTogZGlyZW50Lm5hbWUsXG4gICAgICAgICAgICBwYXRoOiBjb21tb24uam9pblBhdGhTZWdtZW50cyhkaXJlY3RvcnksIGRpcmVudC5uYW1lLCBzZXR0aW5ncy5wYXRoU2VnbWVudFNlcGFyYXRvcilcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGVudHJ5LmRpcmVudC5pc1N5bWJvbGljTGluaygpICYmIHNldHRpbmdzLmZvbGxvd1N5bWJvbGljTGlua3MpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHMgPSBzZXR0aW5ncy5mcy5zdGF0U3luYyhlbnRyeS5wYXRoKTtcbiAgICAgICAgICAgICAgICBlbnRyeS5kaXJlbnQgPSB1dGlscy5mcy5jcmVhdGVEaXJlbnRGcm9tU3RhdHMoZW50cnkubmFtZSwgc3RhdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzLnRocm93RXJyb3JPbkJyb2tlblN5bWJvbGljTGluaykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgIH0pO1xufVxuZXhwb3J0cy5yZWFkZGlyV2l0aEZpbGVUeXBlcyA9IHJlYWRkaXJXaXRoRmlsZVR5cGVzO1xuZnVuY3Rpb24gcmVhZGRpcihkaXJlY3RvcnksIHNldHRpbmdzKSB7XG4gICAgY29uc3QgbmFtZXMgPSBzZXR0aW5ncy5mcy5yZWFkZGlyU3luYyhkaXJlY3RvcnkpO1xuICAgIHJldHVybiBuYW1lcy5tYXAoKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgZW50cnlQYXRoID0gY29tbW9uLmpvaW5QYXRoU2VnbWVudHMoZGlyZWN0b3J5LCBuYW1lLCBzZXR0aW5ncy5wYXRoU2VnbWVudFNlcGFyYXRvcik7XG4gICAgICAgIGNvbnN0IHN0YXRzID0gZnNTdGF0LnN0YXRTeW5jKGVudHJ5UGF0aCwgc2V0dGluZ3MuZnNTdGF0U2V0dGluZ3MpO1xuICAgICAgICBjb25zdCBlbnRyeSA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBwYXRoOiBlbnRyeVBhdGgsXG4gICAgICAgICAgICBkaXJlbnQ6IHV0aWxzLmZzLmNyZWF0ZURpcmVudEZyb21TdGF0cyhuYW1lLCBzdGF0cylcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHNldHRpbmdzLnN0YXRzKSB7XG4gICAgICAgICAgICBlbnRyeS5zdGF0cyA9IHN0YXRzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnRyeTtcbiAgICB9KTtcbn1cbmV4cG9ydHMucmVhZGRpciA9IHJlYWRkaXI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZUZpbGVTeXN0ZW1BZGFwdGVyID0gZXhwb3J0cy5GSUxFX1NZU1RFTV9BREFQVEVSID0gdm9pZCAwO1xuY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XG5leHBvcnRzLkZJTEVfU1lTVEVNX0FEQVBURVIgPSB7XG4gICAgbHN0YXQ6IGZzLmxzdGF0LFxuICAgIHN0YXQ6IGZzLnN0YXQsXG4gICAgbHN0YXRTeW5jOiBmcy5sc3RhdFN5bmMsXG4gICAgc3RhdFN5bmM6IGZzLnN0YXRTeW5jLFxuICAgIHJlYWRkaXI6IGZzLnJlYWRkaXIsXG4gICAgcmVhZGRpclN5bmM6IGZzLnJlYWRkaXJTeW5jXG59O1xuZnVuY3Rpb24gY3JlYXRlRmlsZVN5c3RlbUFkYXB0ZXIoZnNNZXRob2RzKSB7XG4gICAgaWYgKGZzTWV0aG9kcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBleHBvcnRzLkZJTEVfU1lTVEVNX0FEQVBURVI7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGV4cG9ydHMuRklMRV9TWVNURU1fQURBUFRFUiksIGZzTWV0aG9kcyk7XG59XG5leHBvcnRzLmNyZWF0ZUZpbGVTeXN0ZW1BZGFwdGVyID0gY3JlYXRlRmlsZVN5c3RlbUFkYXB0ZXI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XG5jb25zdCBmc1N0YXQgPSByZXF1aXJlKFwiQG5vZGVsaWIvZnMuc3RhdFwiKTtcbmNvbnN0IGZzID0gcmVxdWlyZShcIi4vYWRhcHRlcnMvZnNcIik7XG5jbGFzcyBTZXR0aW5ncyB7XG4gICAgY29uc3RydWN0b3IoX29wdGlvbnMgPSB7fSkge1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gX29wdGlvbnM7XG4gICAgICAgIHRoaXMuZm9sbG93U3ltYm9saWNMaW5rcyA9IHRoaXMuX2dldFZhbHVlKHRoaXMuX29wdGlvbnMuZm9sbG93U3ltYm9saWNMaW5rcywgZmFsc2UpO1xuICAgICAgICB0aGlzLmZzID0gZnMuY3JlYXRlRmlsZVN5c3RlbUFkYXB0ZXIodGhpcy5fb3B0aW9ucy5mcyk7XG4gICAgICAgIHRoaXMucGF0aFNlZ21lbnRTZXBhcmF0b3IgPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLl9vcHRpb25zLnBhdGhTZWdtZW50U2VwYXJhdG9yLCBwYXRoLnNlcCk7XG4gICAgICAgIHRoaXMuc3RhdHMgPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLl9vcHRpb25zLnN0YXRzLCBmYWxzZSk7XG4gICAgICAgIHRoaXMudGhyb3dFcnJvck9uQnJva2VuU3ltYm9saWNMaW5rID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy50aHJvd0Vycm9yT25Ccm9rZW5TeW1ib2xpY0xpbmssIHRydWUpO1xuICAgICAgICB0aGlzLmZzU3RhdFNldHRpbmdzID0gbmV3IGZzU3RhdC5TZXR0aW5ncyh7XG4gICAgICAgICAgICBmb2xsb3dTeW1ib2xpY0xpbms6IHRoaXMuZm9sbG93U3ltYm9saWNMaW5rcyxcbiAgICAgICAgICAgIGZzOiB0aGlzLmZzLFxuICAgICAgICAgICAgdGhyb3dFcnJvck9uQnJva2VuU3ltYm9saWNMaW5rOiB0aGlzLnRocm93RXJyb3JPbkJyb2tlblN5bWJvbGljTGlua1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFZhbHVlKG9wdGlvbiwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbiAhPT0gbnVsbCAmJiBvcHRpb24gIT09IHZvaWQgMCA/IG9wdGlvbiA6IHZhbHVlO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFNldHRpbmdzO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TZXR0aW5ncyA9IGV4cG9ydHMuc2NhbmRpclN5bmMgPSBleHBvcnRzLnNjYW5kaXIgPSB2b2lkIDA7XG5jb25zdCBhc3luYyA9IHJlcXVpcmUoXCIuL3Byb3ZpZGVycy9hc3luY1wiKTtcbmNvbnN0IHN5bmMgPSByZXF1aXJlKFwiLi9wcm92aWRlcnMvc3luY1wiKTtcbmNvbnN0IHNldHRpbmdzXzEgPSByZXF1aXJlKFwiLi9zZXR0aW5nc1wiKTtcbmV4cG9ydHMuU2V0dGluZ3MgPSBzZXR0aW5nc18xLmRlZmF1bHQ7XG5mdW5jdGlvbiBzY2FuZGlyKHBhdGgsIG9wdGlvbnNPclNldHRpbmdzT3JDYWxsYmFjaywgY2FsbGJhY2spIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnNPclNldHRpbmdzT3JDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhc3luYy5yZWFkKHBhdGgsIGdldFNldHRpbmdzKCksIG9wdGlvbnNPclNldHRpbmdzT3JDYWxsYmFjayk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXN5bmMucmVhZChwYXRoLCBnZXRTZXR0aW5ncyhvcHRpb25zT3JTZXR0aW5nc09yQ2FsbGJhY2spLCBjYWxsYmFjayk7XG59XG5leHBvcnRzLnNjYW5kaXIgPSBzY2FuZGlyO1xuZnVuY3Rpb24gc2NhbmRpclN5bmMocGF0aCwgb3B0aW9uc09yU2V0dGluZ3MpIHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IGdldFNldHRpbmdzKG9wdGlvbnNPclNldHRpbmdzKTtcbiAgICByZXR1cm4gc3luYy5yZWFkKHBhdGgsIHNldHRpbmdzKTtcbn1cbmV4cG9ydHMuc2NhbmRpclN5bmMgPSBzY2FuZGlyU3luYztcbmZ1bmN0aW9uIGdldFNldHRpbmdzKHNldHRpbmdzT3JPcHRpb25zID0ge30pIHtcbiAgICBpZiAoc2V0dGluZ3NPck9wdGlvbnMgaW5zdGFuY2VvZiBzZXR0aW5nc18xLmRlZmF1bHQpIHtcbiAgICAgICAgcmV0dXJuIHNldHRpbmdzT3JPcHRpb25zO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IHNldHRpbmdzXzEuZGVmYXVsdChzZXR0aW5nc09yT3B0aW9ucyk7XG59XG4iLCAiJ3VzZSBzdHJpY3QnXG5cbmZ1bmN0aW9uIHJldXNpZnkgKENvbnN0cnVjdG9yKSB7XG4gIHZhciBoZWFkID0gbmV3IENvbnN0cnVjdG9yKClcbiAgdmFyIHRhaWwgPSBoZWFkXG5cbiAgZnVuY3Rpb24gZ2V0ICgpIHtcbiAgICB2YXIgY3VycmVudCA9IGhlYWRcblxuICAgIGlmIChjdXJyZW50Lm5leHQpIHtcbiAgICAgIGhlYWQgPSBjdXJyZW50Lm5leHRcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZCA9IG5ldyBDb25zdHJ1Y3RvcigpXG4gICAgICB0YWlsID0gaGVhZFxuICAgIH1cblxuICAgIGN1cnJlbnQubmV4dCA9IG51bGxcblxuICAgIHJldHVybiBjdXJyZW50XG4gIH1cblxuICBmdW5jdGlvbiByZWxlYXNlIChvYmopIHtcbiAgICB0YWlsLm5leHQgPSBvYmpcbiAgICB0YWlsID0gb2JqXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldDogZ2V0LFxuICAgIHJlbGVhc2U6IHJlbGVhc2VcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJldXNpZnlcbiIsICIndXNlIHN0cmljdCdcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdmFyICovXG5cbnZhciByZXVzaWZ5ID0gcmVxdWlyZSgncmV1c2lmeScpXG5cbmZ1bmN0aW9uIGZhc3RxdWV1ZSAoY29udGV4dCwgd29ya2VyLCBjb25jdXJyZW5jeSkge1xuICBpZiAodHlwZW9mIGNvbnRleHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25jdXJyZW5jeSA9IHdvcmtlclxuICAgIHdvcmtlciA9IGNvbnRleHRcbiAgICBjb250ZXh0ID0gbnVsbFxuICB9XG5cbiAgaWYgKGNvbmN1cnJlbmN5IDwgMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignZmFzdHF1ZXVlIGNvbmN1cnJlbmN5IG11c3QgYmUgZ3JlYXRlciB0aGFuIDEnKVxuICB9XG5cbiAgdmFyIGNhY2hlID0gcmV1c2lmeShUYXNrKVxuICB2YXIgcXVldWVIZWFkID0gbnVsbFxuICB2YXIgcXVldWVUYWlsID0gbnVsbFxuICB2YXIgX3J1bm5pbmcgPSAwXG4gIHZhciBlcnJvckhhbmRsZXIgPSBudWxsXG5cbiAgdmFyIHNlbGYgPSB7XG4gICAgcHVzaDogcHVzaCxcbiAgICBkcmFpbjogbm9vcCxcbiAgICBzYXR1cmF0ZWQ6IG5vb3AsXG4gICAgcGF1c2U6IHBhdXNlLFxuICAgIHBhdXNlZDogZmFsc2UsXG4gICAgY29uY3VycmVuY3k6IGNvbmN1cnJlbmN5LFxuICAgIHJ1bm5pbmc6IHJ1bm5pbmcsXG4gICAgcmVzdW1lOiByZXN1bWUsXG4gICAgaWRsZTogaWRsZSxcbiAgICBsZW5ndGg6IGxlbmd0aCxcbiAgICBnZXRRdWV1ZTogZ2V0UXVldWUsXG4gICAgdW5zaGlmdDogdW5zaGlmdCxcbiAgICBlbXB0eTogbm9vcCxcbiAgICBraWxsOiBraWxsLFxuICAgIGtpbGxBbmREcmFpbjoga2lsbEFuZERyYWluLFxuICAgIGVycm9yOiBlcnJvclxuICB9XG5cbiAgcmV0dXJuIHNlbGZcblxuICBmdW5jdGlvbiBydW5uaW5nICgpIHtcbiAgICByZXR1cm4gX3J1bm5pbmdcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhdXNlICgpIHtcbiAgICBzZWxmLnBhdXNlZCA9IHRydWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlbmd0aCAoKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBxdWV1ZUhlYWRcbiAgICB2YXIgY291bnRlciA9IDBcblxuICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0XG4gICAgICBjb3VudGVyKytcbiAgICB9XG5cbiAgICByZXR1cm4gY291bnRlclxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UXVldWUgKCkge1xuICAgIHZhciBjdXJyZW50ID0gcXVldWVIZWFkXG4gICAgdmFyIHRhc2tzID0gW11cblxuICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICB0YXNrcy5wdXNoKGN1cnJlbnQudmFsdWUpXG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2tzXG4gIH1cblxuICBmdW5jdGlvbiByZXN1bWUgKCkge1xuICAgIGlmICghc2VsZi5wYXVzZWQpIHJldHVyblxuICAgIHNlbGYucGF1c2VkID0gZmFsc2VcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYuY29uY3VycmVuY3k7IGkrKykge1xuICAgICAgX3J1bm5pbmcrK1xuICAgICAgcmVsZWFzZSgpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaWRsZSAoKSB7XG4gICAgcmV0dXJuIF9ydW5uaW5nID09PSAwICYmIHNlbGYubGVuZ3RoKCkgPT09IDBcbiAgfVxuXG4gIGZ1bmN0aW9uIHB1c2ggKHZhbHVlLCBkb25lKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBjYWNoZS5nZXQoKVxuXG4gICAgY3VycmVudC5jb250ZXh0ID0gY29udGV4dFxuICAgIGN1cnJlbnQucmVsZWFzZSA9IHJlbGVhc2VcbiAgICBjdXJyZW50LnZhbHVlID0gdmFsdWVcbiAgICBjdXJyZW50LmNhbGxiYWNrID0gZG9uZSB8fCBub29wXG4gICAgY3VycmVudC5lcnJvckhhbmRsZXIgPSBlcnJvckhhbmRsZXJcblxuICAgIGlmIChfcnVubmluZyA9PT0gc2VsZi5jb25jdXJyZW5jeSB8fCBzZWxmLnBhdXNlZCkge1xuICAgICAgaWYgKHF1ZXVlVGFpbCkge1xuICAgICAgICBxdWV1ZVRhaWwubmV4dCA9IGN1cnJlbnRcbiAgICAgICAgcXVldWVUYWlsID0gY3VycmVudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVIZWFkID0gY3VycmVudFxuICAgICAgICBxdWV1ZVRhaWwgPSBjdXJyZW50XG4gICAgICAgIHNlbGYuc2F0dXJhdGVkKClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgX3J1bm5pbmcrK1xuICAgICAgd29ya2VyLmNhbGwoY29udGV4dCwgY3VycmVudC52YWx1ZSwgY3VycmVudC53b3JrZWQpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdW5zaGlmdCAodmFsdWUsIGRvbmUpIHtcbiAgICB2YXIgY3VycmVudCA9IGNhY2hlLmdldCgpXG5cbiAgICBjdXJyZW50LmNvbnRleHQgPSBjb250ZXh0XG4gICAgY3VycmVudC5yZWxlYXNlID0gcmVsZWFzZVxuICAgIGN1cnJlbnQudmFsdWUgPSB2YWx1ZVxuICAgIGN1cnJlbnQuY2FsbGJhY2sgPSBkb25lIHx8IG5vb3BcblxuICAgIGlmIChfcnVubmluZyA9PT0gc2VsZi5jb25jdXJyZW5jeSB8fCBzZWxmLnBhdXNlZCkge1xuICAgICAgaWYgKHF1ZXVlSGVhZCkge1xuICAgICAgICBjdXJyZW50Lm5leHQgPSBxdWV1ZUhlYWRcbiAgICAgICAgcXVldWVIZWFkID0gY3VycmVudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVIZWFkID0gY3VycmVudFxuICAgICAgICBxdWV1ZVRhaWwgPSBjdXJyZW50XG4gICAgICAgIHNlbGYuc2F0dXJhdGVkKClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgX3J1bm5pbmcrK1xuICAgICAgd29ya2VyLmNhbGwoY29udGV4dCwgY3VycmVudC52YWx1ZSwgY3VycmVudC53b3JrZWQpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVsZWFzZSAoaG9sZGVyKSB7XG4gICAgaWYgKGhvbGRlcikge1xuICAgICAgY2FjaGUucmVsZWFzZShob2xkZXIpXG4gICAgfVxuICAgIHZhciBuZXh0ID0gcXVldWVIZWFkXG4gICAgaWYgKG5leHQpIHtcbiAgICAgIGlmICghc2VsZi5wYXVzZWQpIHtcbiAgICAgICAgaWYgKHF1ZXVlVGFpbCA9PT0gcXVldWVIZWFkKSB7XG4gICAgICAgICAgcXVldWVUYWlsID0gbnVsbFxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSGVhZCA9IG5leHQubmV4dFxuICAgICAgICBuZXh0Lm5leHQgPSBudWxsXG4gICAgICAgIHdvcmtlci5jYWxsKGNvbnRleHQsIG5leHQudmFsdWUsIG5leHQud29ya2VkKVxuICAgICAgICBpZiAocXVldWVUYWlsID09PSBudWxsKSB7XG4gICAgICAgICAgc2VsZi5lbXB0eSgpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9ydW5uaW5nLS1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKC0tX3J1bm5pbmcgPT09IDApIHtcbiAgICAgIHNlbGYuZHJhaW4oKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGtpbGwgKCkge1xuICAgIHF1ZXVlSGVhZCA9IG51bGxcbiAgICBxdWV1ZVRhaWwgPSBudWxsXG4gICAgc2VsZi5kcmFpbiA9IG5vb3BcbiAgfVxuXG4gIGZ1bmN0aW9uIGtpbGxBbmREcmFpbiAoKSB7XG4gICAgcXVldWVIZWFkID0gbnVsbFxuICAgIHF1ZXVlVGFpbCA9IG51bGxcbiAgICBzZWxmLmRyYWluKClcbiAgICBzZWxmLmRyYWluID0gbm9vcFxuICB9XG5cbiAgZnVuY3Rpb24gZXJyb3IgKGhhbmRsZXIpIHtcbiAgICBlcnJvckhhbmRsZXIgPSBoYW5kbGVyXG4gIH1cbn1cblxuZnVuY3Rpb24gbm9vcCAoKSB7fVxuXG5mdW5jdGlvbiBUYXNrICgpIHtcbiAgdGhpcy52YWx1ZSA9IG51bGxcbiAgdGhpcy5jYWxsYmFjayA9IG5vb3BcbiAgdGhpcy5uZXh0ID0gbnVsbFxuICB0aGlzLnJlbGVhc2UgPSBub29wXG4gIHRoaXMuY29udGV4dCA9IG51bGxcbiAgdGhpcy5lcnJvckhhbmRsZXIgPSBudWxsXG5cbiAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgdGhpcy53b3JrZWQgPSBmdW5jdGlvbiB3b3JrZWQgKGVyciwgcmVzdWx0KSB7XG4gICAgdmFyIGNhbGxiYWNrID0gc2VsZi5jYWxsYmFja1xuICAgIHZhciBlcnJvckhhbmRsZXIgPSBzZWxmLmVycm9ySGFuZGxlclxuICAgIHZhciB2YWwgPSBzZWxmLnZhbHVlXG4gICAgc2VsZi52YWx1ZSA9IG51bGxcbiAgICBzZWxmLmNhbGxiYWNrID0gbm9vcFxuICAgIGlmIChzZWxmLmVycm9ySGFuZGxlcikge1xuICAgICAgZXJyb3JIYW5kbGVyKGVyciwgdmFsKVxuICAgIH1cbiAgICBjYWxsYmFjay5jYWxsKHNlbGYuY29udGV4dCwgZXJyLCByZXN1bHQpXG4gICAgc2VsZi5yZWxlYXNlKHNlbGYpXG4gIH1cbn1cblxuZnVuY3Rpb24gcXVldWVBc1Byb21pc2VkIChjb250ZXh0LCB3b3JrZXIsIGNvbmN1cnJlbmN5KSB7XG4gIGlmICh0eXBlb2YgY29udGV4dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbmN1cnJlbmN5ID0gd29ya2VyXG4gICAgd29ya2VyID0gY29udGV4dFxuICAgIGNvbnRleHQgPSBudWxsXG4gIH1cblxuICBmdW5jdGlvbiBhc3luY1dyYXBwZXIgKGFyZywgY2IpIHtcbiAgICB3b3JrZXIuY2FsbCh0aGlzLCBhcmcpXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIGNiKG51bGwsIHJlcylcbiAgICAgIH0sIGNiKVxuICB9XG5cbiAgdmFyIHF1ZXVlID0gZmFzdHF1ZXVlKGNvbnRleHQsIGFzeW5jV3JhcHBlciwgY29uY3VycmVuY3kpXG5cbiAgdmFyIHB1c2hDYiA9IHF1ZXVlLnB1c2hcbiAgdmFyIHVuc2hpZnRDYiA9IHF1ZXVlLnVuc2hpZnRcblxuICBxdWV1ZS5wdXNoID0gcHVzaFxuICBxdWV1ZS51bnNoaWZ0ID0gdW5zaGlmdFxuICBxdWV1ZS5kcmFpbmVkID0gZHJhaW5lZFxuXG4gIHJldHVybiBxdWV1ZVxuXG4gIGZ1bmN0aW9uIHB1c2ggKHZhbHVlKSB7XG4gICAgdmFyIHAgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBwdXNoQ2IodmFsdWUsIGZ1bmN0aW9uIChlcnIsIHJlc3VsdCkge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIC8vIExldCdzIGZvcmsgdGhlIHByb21pc2UgY2hhaW4gdG9cbiAgICAvLyBtYWtlIHRoZSBlcnJvciBidWJibGUgdXAgdG8gdGhlIHVzZXIgYnV0XG4gICAgLy8gbm90IGxlYWQgdG8gYSB1bmhhbmRsZWRSZWplY3Rpb25cbiAgICBwLmNhdGNoKG5vb3ApXG5cbiAgICByZXR1cm4gcFxuICB9XG5cbiAgZnVuY3Rpb24gdW5zaGlmdCAodmFsdWUpIHtcbiAgICB2YXIgcCA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHVuc2hpZnRDYih2YWx1ZSwgZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgLy8gTGV0J3MgZm9yayB0aGUgcHJvbWlzZSBjaGFpbiB0b1xuICAgIC8vIG1ha2UgdGhlIGVycm9yIGJ1YmJsZSB1cCB0byB0aGUgdXNlciBidXRcbiAgICAvLyBub3QgbGVhZCB0byBhIHVuaGFuZGxlZFJlamVjdGlvblxuICAgIHAuY2F0Y2gobm9vcClcblxuICAgIHJldHVybiBwXG4gIH1cblxuICBmdW5jdGlvbiBkcmFpbmVkICgpIHtcbiAgICBpZiAocXVldWUuaWRsZSgpKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgcmVzb2x2ZSgpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c0RyYWluID0gcXVldWUuZHJhaW5cblxuICAgIHZhciBwID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIHF1ZXVlLmRyYWluID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBwcmV2aW91c0RyYWluKClcbiAgICAgICAgcmVzb2x2ZSgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBwXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmYXN0cXVldWVcbm1vZHVsZS5leHBvcnRzLnByb21pc2UgPSBxdWV1ZUFzUHJvbWlzZWRcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuam9pblBhdGhTZWdtZW50cyA9IGV4cG9ydHMucmVwbGFjZVBhdGhTZWdtZW50U2VwYXJhdG9yID0gZXhwb3J0cy5pc0FwcGxpZWRGaWx0ZXIgPSBleHBvcnRzLmlzRmF0YWxFcnJvciA9IHZvaWQgMDtcbmZ1bmN0aW9uIGlzRmF0YWxFcnJvcihzZXR0aW5ncywgZXJyb3IpIHtcbiAgICBpZiAoc2V0dGluZ3MuZXJyb3JGaWx0ZXIgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiAhc2V0dGluZ3MuZXJyb3JGaWx0ZXIoZXJyb3IpO1xufVxuZXhwb3J0cy5pc0ZhdGFsRXJyb3IgPSBpc0ZhdGFsRXJyb3I7XG5mdW5jdGlvbiBpc0FwcGxpZWRGaWx0ZXIoZmlsdGVyLCB2YWx1ZSkge1xuICAgIHJldHVybiBmaWx0ZXIgPT09IG51bGwgfHwgZmlsdGVyKHZhbHVlKTtcbn1cbmV4cG9ydHMuaXNBcHBsaWVkRmlsdGVyID0gaXNBcHBsaWVkRmlsdGVyO1xuZnVuY3Rpb24gcmVwbGFjZVBhdGhTZWdtZW50U2VwYXJhdG9yKGZpbGVwYXRoLCBzZXBhcmF0b3IpIHtcbiAgICByZXR1cm4gZmlsZXBhdGguc3BsaXQoL1svXFxcXF0vKS5qb2luKHNlcGFyYXRvcik7XG59XG5leHBvcnRzLnJlcGxhY2VQYXRoU2VnbWVudFNlcGFyYXRvciA9IHJlcGxhY2VQYXRoU2VnbWVudFNlcGFyYXRvcjtcbmZ1bmN0aW9uIGpvaW5QYXRoU2VnbWVudHMoYSwgYiwgc2VwYXJhdG9yKSB7XG4gICAgaWYgKGEgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiBiO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgY29ycmVjdCBoYW5kbGluZyBvZiBjYXNlcyB3aGVuIHRoZSBmaXJzdCBzZWdtZW50IGlzIGEgcm9vdCAoYC9gLCBgQzovYCkgb3IgVU5DIHBhdGggKGAvLz8vQzovYCkuXG4gICAgICovXG4gICAgaWYgKGEuZW5kc1dpdGgoc2VwYXJhdG9yKSkge1xuICAgICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuICAgIHJldHVybiBhICsgc2VwYXJhdG9yICsgYjtcbn1cbmV4cG9ydHMuam9pblBhdGhTZWdtZW50cyA9IGpvaW5QYXRoU2VnbWVudHM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBjb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5jbGFzcyBSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKF9yb290LCBfc2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5fcm9vdCA9IF9yb290O1xuICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IF9zZXR0aW5ncztcbiAgICAgICAgdGhpcy5fcm9vdCA9IGNvbW1vbi5yZXBsYWNlUGF0aFNlZ21lbnRTZXBhcmF0b3IoX3Jvb3QsIF9zZXR0aW5ncy5wYXRoU2VnbWVudFNlcGFyYXRvcik7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUmVhZGVyO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZXZlbnRzXzEgPSByZXF1aXJlKFwiZXZlbnRzXCIpO1xuY29uc3QgZnNTY2FuZGlyID0gcmVxdWlyZShcIkBub2RlbGliL2ZzLnNjYW5kaXJcIik7XG5jb25zdCBmYXN0cSA9IHJlcXVpcmUoXCJmYXN0cVwiKTtcbmNvbnN0IGNvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcbmNvbnN0IHJlYWRlcl8xID0gcmVxdWlyZShcIi4vcmVhZGVyXCIpO1xuY2xhc3MgQXN5bmNSZWFkZXIgZXh0ZW5kcyByZWFkZXJfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3Rvcihfcm9vdCwgX3NldHRpbmdzKSB7XG4gICAgICAgIHN1cGVyKF9yb290LCBfc2V0dGluZ3MpO1xuICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IF9zZXR0aW5ncztcbiAgICAgICAgdGhpcy5fc2NhbmRpciA9IGZzU2NhbmRpci5zY2FuZGlyO1xuICAgICAgICB0aGlzLl9lbWl0dGVyID0gbmV3IGV2ZW50c18xLkV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLl9xdWV1ZSA9IGZhc3RxKHRoaXMuX3dvcmtlci5iaW5kKHRoaXMpLCB0aGlzLl9zZXR0aW5ncy5jb25jdXJyZW5jeSk7XG4gICAgICAgIHRoaXMuX2lzRmF0YWxFcnJvciA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9xdWV1ZS5kcmFpbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5faXNGYXRhbEVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZW1pdHRlci5lbWl0KCdlbmQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmVhZCgpIHtcbiAgICAgICAgdGhpcy5faXNGYXRhbEVycm9yID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2lzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgICAgIHNldEltbWVkaWF0ZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9wdXNoVG9RdWV1ZSh0aGlzLl9yb290LCB0aGlzLl9zZXR0aW5ncy5iYXNlUGF0aCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5fZW1pdHRlcjtcbiAgICB9XG4gICAgZ2V0IGlzRGVzdHJveWVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNEZXN0cm95ZWQ7XG4gICAgfVxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgcmVhZGVyIGlzIGFscmVhZHkgZGVzdHJveWVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9xdWV1ZS5raWxsQW5kRHJhaW4oKTtcbiAgICB9XG4gICAgb25FbnRyeShjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9lbWl0dGVyLm9uKCdlbnRyeScsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgb25FcnJvcihjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9lbWl0dGVyLm9uY2UoJ2Vycm9yJywgY2FsbGJhY2spO1xuICAgIH1cbiAgICBvbkVuZChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9lbWl0dGVyLm9uY2UoJ2VuZCcsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgX3B1c2hUb1F1ZXVlKGRpcmVjdG9yeSwgYmFzZSkge1xuICAgICAgICBjb25zdCBxdWV1ZUl0ZW0gPSB7IGRpcmVjdG9yeSwgYmFzZSB9O1xuICAgICAgICB0aGlzLl9xdWV1ZS5wdXNoKHF1ZXVlSXRlbSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfd29ya2VyKGl0ZW0sIGRvbmUpIHtcbiAgICAgICAgdGhpcy5fc2NhbmRpcihpdGVtLmRpcmVjdG9yeSwgdGhpcy5fc2V0dGluZ3MuZnNTY2FuZGlyU2V0dGluZ3MsIChlcnJvciwgZW50cmllcykgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZG9uZShlcnJvciwgdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFbnRyeShlbnRyeSwgaXRlbS5iYXNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvbmUobnVsbCwgdW5kZWZpbmVkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9oYW5kbGVFcnJvcihlcnJvcikge1xuICAgICAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgIWNvbW1vbi5pc0ZhdGFsRXJyb3IodGhpcy5fc2V0dGluZ3MsIGVycm9yKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lzRmF0YWxFcnJvciA9IHRydWU7XG4gICAgICAgIHRoaXMuX2lzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fZW1pdHRlci5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICB9XG4gICAgX2hhbmRsZUVudHJ5KGVudHJ5LCBiYXNlKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCB0aGlzLl9pc0ZhdGFsRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmdWxscGF0aCA9IGVudHJ5LnBhdGg7XG4gICAgICAgIGlmIChiYXNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGVudHJ5LnBhdGggPSBjb21tb24uam9pblBhdGhTZWdtZW50cyhiYXNlLCBlbnRyeS5uYW1lLCB0aGlzLl9zZXR0aW5ncy5wYXRoU2VnbWVudFNlcGFyYXRvcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbW1vbi5pc0FwcGxpZWRGaWx0ZXIodGhpcy5fc2V0dGluZ3MuZW50cnlGaWx0ZXIsIGVudHJ5KSkge1xuICAgICAgICAgICAgdGhpcy5fZW1pdEVudHJ5KGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW50cnkuZGlyZW50LmlzRGlyZWN0b3J5KCkgJiYgY29tbW9uLmlzQXBwbGllZEZpbHRlcih0aGlzLl9zZXR0aW5ncy5kZWVwRmlsdGVyLCBlbnRyeSkpIHtcbiAgICAgICAgICAgIHRoaXMuX3B1c2hUb1F1ZXVlKGZ1bGxwYXRoLCBiYXNlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBlbnRyeS5wYXRoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfZW1pdEVudHJ5KGVudHJ5KSB7XG4gICAgICAgIHRoaXMuX2VtaXR0ZXIuZW1pdCgnZW50cnknLCBlbnRyeSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gQXN5bmNSZWFkZXI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBhc3luY18xID0gcmVxdWlyZShcIi4uL3JlYWRlcnMvYXN5bmNcIik7XG5jbGFzcyBBc3luY1Byb3ZpZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihfcm9vdCwgX3NldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuX3Jvb3QgPSBfcm9vdDtcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBfc2V0dGluZ3M7XG4gICAgICAgIHRoaXMuX3JlYWRlciA9IG5ldyBhc3luY18xLmRlZmF1bHQodGhpcy5fcm9vdCwgdGhpcy5fc2V0dGluZ3MpO1xuICAgICAgICB0aGlzLl9zdG9yYWdlID0gW107XG4gICAgfVxuICAgIHJlYWQoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fcmVhZGVyLm9uRXJyb3IoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjYWxsRmFpbHVyZUNhbGxiYWNrKGNhbGxiYWNrLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9yZWFkZXIub25FbnRyeSgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3N0b3JhZ2UucHVzaChlbnRyeSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9yZWFkZXIub25FbmQoKCkgPT4ge1xuICAgICAgICAgICAgY2FsbFN1Y2Nlc3NDYWxsYmFjayhjYWxsYmFjaywgdGhpcy5fc3RvcmFnZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9yZWFkZXIucmVhZCgpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEFzeW5jUHJvdmlkZXI7XG5mdW5jdGlvbiBjYWxsRmFpbHVyZUNhbGxiYWNrKGNhbGxiYWNrLCBlcnJvcikge1xuICAgIGNhbGxiYWNrKGVycm9yKTtcbn1cbmZ1bmN0aW9uIGNhbGxTdWNjZXNzQ2FsbGJhY2soY2FsbGJhY2ssIGVudHJpZXMpIHtcbiAgICBjYWxsYmFjayhudWxsLCBlbnRyaWVzKTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHN0cmVhbV8xID0gcmVxdWlyZShcInN0cmVhbVwiKTtcbmNvbnN0IGFzeW5jXzEgPSByZXF1aXJlKFwiLi4vcmVhZGVycy9hc3luY1wiKTtcbmNsYXNzIFN0cmVhbVByb3ZpZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihfcm9vdCwgX3NldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuX3Jvb3QgPSBfcm9vdDtcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBfc2V0dGluZ3M7XG4gICAgICAgIHRoaXMuX3JlYWRlciA9IG5ldyBhc3luY18xLmRlZmF1bHQodGhpcy5fcm9vdCwgdGhpcy5fc2V0dGluZ3MpO1xuICAgICAgICB0aGlzLl9zdHJlYW0gPSBuZXcgc3RyZWFtXzEuUmVhZGFibGUoe1xuICAgICAgICAgICAgb2JqZWN0TW9kZTogdHJ1ZSxcbiAgICAgICAgICAgIHJlYWQ6ICgpID0+IHsgfSxcbiAgICAgICAgICAgIGRlc3Ryb3k6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX3JlYWRlci5pc0Rlc3Ryb3llZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZWFkZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlYWQoKSB7XG4gICAgICAgIHRoaXMuX3JlYWRlci5vbkVycm9yKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5fc3RyZWFtLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fcmVhZGVyLm9uRW50cnkoKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9zdHJlYW0ucHVzaChlbnRyeSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9yZWFkZXIub25FbmQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fc3RyZWFtLnB1c2gobnVsbCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9yZWFkZXIucmVhZCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RyZWFtO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFN0cmVhbVByb3ZpZGVyO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZnNTY2FuZGlyID0gcmVxdWlyZShcIkBub2RlbGliL2ZzLnNjYW5kaXJcIik7XG5jb25zdCBjb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5jb25zdCByZWFkZXJfMSA9IHJlcXVpcmUoXCIuL3JlYWRlclwiKTtcbmNsYXNzIFN5bmNSZWFkZXIgZXh0ZW5kcyByZWFkZXJfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5fc2NhbmRpciA9IGZzU2NhbmRpci5zY2FuZGlyU3luYztcbiAgICAgICAgdGhpcy5fc3RvcmFnZSA9IFtdO1xuICAgICAgICB0aGlzLl9xdWV1ZSA9IG5ldyBTZXQoKTtcbiAgICB9XG4gICAgcmVhZCgpIHtcbiAgICAgICAgdGhpcy5fcHVzaFRvUXVldWUodGhpcy5fcm9vdCwgdGhpcy5fc2V0dGluZ3MuYmFzZVBhdGgpO1xuICAgICAgICB0aGlzLl9oYW5kbGVRdWV1ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RvcmFnZTtcbiAgICB9XG4gICAgX3B1c2hUb1F1ZXVlKGRpcmVjdG9yeSwgYmFzZSkge1xuICAgICAgICB0aGlzLl9xdWV1ZS5hZGQoeyBkaXJlY3RvcnksIGJhc2UgfSk7XG4gICAgfVxuICAgIF9oYW5kbGVRdWV1ZSgpIHtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuX3F1ZXVlLnZhbHVlcygpKSB7XG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVEaXJlY3RvcnkoaXRlbS5kaXJlY3RvcnksIGl0ZW0uYmFzZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2hhbmRsZURpcmVjdG9yeShkaXJlY3RvcnksIGJhc2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLl9zY2FuZGlyKGRpcmVjdG9yeSwgdGhpcy5fc2V0dGluZ3MuZnNTY2FuZGlyU2V0dGluZ3MpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlRW50cnkoZW50cnksIGJhc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5faGFuZGxlRXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9oYW5kbGVFcnJvcihlcnJvcikge1xuICAgICAgICBpZiAoIWNvbW1vbi5pc0ZhdGFsRXJyb3IodGhpcy5fc2V0dGluZ3MsIGVycm9yKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgICBfaGFuZGxlRW50cnkoZW50cnksIGJhc2UpIHtcbiAgICAgICAgY29uc3QgZnVsbHBhdGggPSBlbnRyeS5wYXRoO1xuICAgICAgICBpZiAoYmFzZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlbnRyeS5wYXRoID0gY29tbW9uLmpvaW5QYXRoU2VnbWVudHMoYmFzZSwgZW50cnkubmFtZSwgdGhpcy5fc2V0dGluZ3MucGF0aFNlZ21lbnRTZXBhcmF0b3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb21tb24uaXNBcHBsaWVkRmlsdGVyKHRoaXMuX3NldHRpbmdzLmVudHJ5RmlsdGVyLCBlbnRyeSkpIHtcbiAgICAgICAgICAgIHRoaXMuX3B1c2hUb1N0b3JhZ2UoZW50cnkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbnRyeS5kaXJlbnQuaXNEaXJlY3RvcnkoKSAmJiBjb21tb24uaXNBcHBsaWVkRmlsdGVyKHRoaXMuX3NldHRpbmdzLmRlZXBGaWx0ZXIsIGVudHJ5KSkge1xuICAgICAgICAgICAgdGhpcy5fcHVzaFRvUXVldWUoZnVsbHBhdGgsIGJhc2UgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGVudHJ5LnBhdGgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9wdXNoVG9TdG9yYWdlKGVudHJ5KSB7XG4gICAgICAgIHRoaXMuX3N0b3JhZ2UucHVzaChlbnRyeSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gU3luY1JlYWRlcjtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHN5bmNfMSA9IHJlcXVpcmUoXCIuLi9yZWFkZXJzL3N5bmNcIik7XG5jbGFzcyBTeW5jUHJvdmlkZXIge1xuICAgIGNvbnN0cnVjdG9yKF9yb290LCBfc2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5fcm9vdCA9IF9yb290O1xuICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IF9zZXR0aW5ncztcbiAgICAgICAgdGhpcy5fcmVhZGVyID0gbmV3IHN5bmNfMS5kZWZhdWx0KHRoaXMuX3Jvb3QsIHRoaXMuX3NldHRpbmdzKTtcbiAgICB9XG4gICAgcmVhZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWRlci5yZWFkKCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gU3luY1Byb3ZpZGVyO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuY29uc3QgZnNTY2FuZGlyID0gcmVxdWlyZShcIkBub2RlbGliL2ZzLnNjYW5kaXJcIik7XG5jbGFzcyBTZXR0aW5ncyB7XG4gICAgY29uc3RydWN0b3IoX29wdGlvbnMgPSB7fSkge1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gX29wdGlvbnM7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLl9vcHRpb25zLmJhc2VQYXRoLCB1bmRlZmluZWQpO1xuICAgICAgICB0aGlzLmNvbmN1cnJlbmN5ID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy5jb25jdXJyZW5jeSwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZKTtcbiAgICAgICAgdGhpcy5kZWVwRmlsdGVyID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy5kZWVwRmlsdGVyLCBudWxsKTtcbiAgICAgICAgdGhpcy5lbnRyeUZpbHRlciA9IHRoaXMuX2dldFZhbHVlKHRoaXMuX29wdGlvbnMuZW50cnlGaWx0ZXIsIG51bGwpO1xuICAgICAgICB0aGlzLmVycm9yRmlsdGVyID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy5lcnJvckZpbHRlciwgbnVsbCk7XG4gICAgICAgIHRoaXMucGF0aFNlZ21lbnRTZXBhcmF0b3IgPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLl9vcHRpb25zLnBhdGhTZWdtZW50U2VwYXJhdG9yLCBwYXRoLnNlcCk7XG4gICAgICAgIHRoaXMuZnNTY2FuZGlyU2V0dGluZ3MgPSBuZXcgZnNTY2FuZGlyLlNldHRpbmdzKHtcbiAgICAgICAgICAgIGZvbGxvd1N5bWJvbGljTGlua3M6IHRoaXMuX29wdGlvbnMuZm9sbG93U3ltYm9saWNMaW5rcyxcbiAgICAgICAgICAgIGZzOiB0aGlzLl9vcHRpb25zLmZzLFxuICAgICAgICAgICAgcGF0aFNlZ21lbnRTZXBhcmF0b3I6IHRoaXMuX29wdGlvbnMucGF0aFNlZ21lbnRTZXBhcmF0b3IsXG4gICAgICAgICAgICBzdGF0czogdGhpcy5fb3B0aW9ucy5zdGF0cyxcbiAgICAgICAgICAgIHRocm93RXJyb3JPbkJyb2tlblN5bWJvbGljTGluazogdGhpcy5fb3B0aW9ucy50aHJvd0Vycm9yT25Ccm9rZW5TeW1ib2xpY0xpbmtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRWYWx1ZShvcHRpb24sIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBvcHRpb24gIT09IG51bGwgJiYgb3B0aW9uICE9PSB2b2lkIDAgPyBvcHRpb24gOiB2YWx1ZTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBTZXR0aW5ncztcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU2V0dGluZ3MgPSBleHBvcnRzLndhbGtTdHJlYW0gPSBleHBvcnRzLndhbGtTeW5jID0gZXhwb3J0cy53YWxrID0gdm9pZCAwO1xuY29uc3QgYXN5bmNfMSA9IHJlcXVpcmUoXCIuL3Byb3ZpZGVycy9hc3luY1wiKTtcbmNvbnN0IHN0cmVhbV8xID0gcmVxdWlyZShcIi4vcHJvdmlkZXJzL3N0cmVhbVwiKTtcbmNvbnN0IHN5bmNfMSA9IHJlcXVpcmUoXCIuL3Byb3ZpZGVycy9zeW5jXCIpO1xuY29uc3Qgc2V0dGluZ3NfMSA9IHJlcXVpcmUoXCIuL3NldHRpbmdzXCIpO1xuZXhwb3J0cy5TZXR0aW5ncyA9IHNldHRpbmdzXzEuZGVmYXVsdDtcbmZ1bmN0aW9uIHdhbGsoZGlyZWN0b3J5LCBvcHRpb25zT3JTZXR0aW5nc09yQ2FsbGJhY2ssIGNhbGxiYWNrKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zT3JTZXR0aW5nc09yQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbmV3IGFzeW5jXzEuZGVmYXVsdChkaXJlY3RvcnksIGdldFNldHRpbmdzKCkpLnJlYWQob3B0aW9uc09yU2V0dGluZ3NPckNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBuZXcgYXN5bmNfMS5kZWZhdWx0KGRpcmVjdG9yeSwgZ2V0U2V0dGluZ3Mob3B0aW9uc09yU2V0dGluZ3NPckNhbGxiYWNrKSkucmVhZChjYWxsYmFjayk7XG59XG5leHBvcnRzLndhbGsgPSB3YWxrO1xuZnVuY3Rpb24gd2Fsa1N5bmMoZGlyZWN0b3J5LCBvcHRpb25zT3JTZXR0aW5ncykge1xuICAgIGNvbnN0IHNldHRpbmdzID0gZ2V0U2V0dGluZ3Mob3B0aW9uc09yU2V0dGluZ3MpO1xuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IHN5bmNfMS5kZWZhdWx0KGRpcmVjdG9yeSwgc2V0dGluZ3MpO1xuICAgIHJldHVybiBwcm92aWRlci5yZWFkKCk7XG59XG5leHBvcnRzLndhbGtTeW5jID0gd2Fsa1N5bmM7XG5mdW5jdGlvbiB3YWxrU3RyZWFtKGRpcmVjdG9yeSwgb3B0aW9uc09yU2V0dGluZ3MpIHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IGdldFNldHRpbmdzKG9wdGlvbnNPclNldHRpbmdzKTtcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBzdHJlYW1fMS5kZWZhdWx0KGRpcmVjdG9yeSwgc2V0dGluZ3MpO1xuICAgIHJldHVybiBwcm92aWRlci5yZWFkKCk7XG59XG5leHBvcnRzLndhbGtTdHJlYW0gPSB3YWxrU3RyZWFtO1xuZnVuY3Rpb24gZ2V0U2V0dGluZ3Moc2V0dGluZ3NPck9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChzZXR0aW5nc09yT3B0aW9ucyBpbnN0YW5jZW9mIHNldHRpbmdzXzEuZGVmYXVsdCkge1xuICAgICAgICByZXR1cm4gc2V0dGluZ3NPck9wdGlvbnM7XG4gICAgfVxuICAgIHJldHVybiBuZXcgc2V0dGluZ3NfMS5kZWZhdWx0KHNldHRpbmdzT3JPcHRpb25zKTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XHJcbmNvbnN0IGZzU3RhdCA9IHJlcXVpcmUoXCJAbm9kZWxpYi9mcy5zdGF0XCIpO1xyXG5jb25zdCB1dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcclxuY2xhc3MgUmVhZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKF9zZXR0aW5ncykge1xyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzID0gX3NldHRpbmdzO1xyXG4gICAgICAgIHRoaXMuX2ZzU3RhdFNldHRpbmdzID0gbmV3IGZzU3RhdC5TZXR0aW5ncyh7XHJcbiAgICAgICAgICAgIGZvbGxvd1N5bWJvbGljTGluazogdGhpcy5fc2V0dGluZ3MuZm9sbG93U3ltYm9saWNMaW5rcyxcclxuICAgICAgICAgICAgZnM6IHRoaXMuX3NldHRpbmdzLmZzLFxyXG4gICAgICAgICAgICB0aHJvd0Vycm9yT25Ccm9rZW5TeW1ib2xpY0xpbms6IHRoaXMuX3NldHRpbmdzLmZvbGxvd1N5bWJvbGljTGlua3NcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF9nZXRGdWxsRW50cnlQYXRoKGZpbGVwYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhdGgucmVzb2x2ZSh0aGlzLl9zZXR0aW5ncy5jd2QsIGZpbGVwYXRoKTtcclxuICAgIH1cclxuICAgIF9tYWtlRW50cnkoc3RhdHMsIHBhdHRlcm4pIHtcclxuICAgICAgICBjb25zdCBlbnRyeSA9IHtcclxuICAgICAgICAgICAgbmFtZTogcGF0dGVybixcclxuICAgICAgICAgICAgcGF0aDogcGF0dGVybixcclxuICAgICAgICAgICAgZGlyZW50OiB1dGlscy5mcy5jcmVhdGVEaXJlbnRGcm9tU3RhdHMocGF0dGVybiwgc3RhdHMpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3Muc3RhdHMpIHtcclxuICAgICAgICAgICAgZW50cnkuc3RhdHMgPSBzdGF0cztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVudHJ5O1xyXG4gICAgfVxyXG4gICAgX2lzRmF0YWxFcnJvcihlcnJvcikge1xyXG4gICAgICAgIHJldHVybiAhdXRpbHMuZXJybm8uaXNFbm9lbnRDb2RlRXJyb3IoZXJyb3IpICYmICF0aGlzLl9zZXR0aW5ncy5zdXBwcmVzc0Vycm9ycztcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBSZWFkZXI7XHJcbiIsICJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzdHJlYW1fMSA9IHJlcXVpcmUoXCJzdHJlYW1cIik7XHJcbmNvbnN0IGZzU3RhdCA9IHJlcXVpcmUoXCJAbm9kZWxpYi9mcy5zdGF0XCIpO1xyXG5jb25zdCBmc1dhbGsgPSByZXF1aXJlKFwiQG5vZGVsaWIvZnMud2Fsa1wiKTtcclxuY29uc3QgcmVhZGVyXzEgPSByZXF1aXJlKFwiLi9yZWFkZXJcIik7XHJcbmNsYXNzIFJlYWRlclN0cmVhbSBleHRlbmRzIHJlYWRlcl8xLmRlZmF1bHQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcclxuICAgICAgICB0aGlzLl93YWxrU3RyZWFtID0gZnNXYWxrLndhbGtTdHJlYW07XHJcbiAgICAgICAgdGhpcy5fc3RhdCA9IGZzU3RhdC5zdGF0O1xyXG4gICAgfVxyXG4gICAgZHluYW1pYyhyb290LCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dhbGtTdHJlYW0ocm9vdCwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMocGF0dGVybnMsIG9wdGlvbnMpIHtcclxuICAgICAgICBjb25zdCBmaWxlcGF0aHMgPSBwYXR0ZXJucy5tYXAodGhpcy5fZ2V0RnVsbEVudHJ5UGF0aCwgdGhpcyk7XHJcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gbmV3IHN0cmVhbV8xLlBhc3NUaHJvdWdoKHsgb2JqZWN0TW9kZTogdHJ1ZSB9KTtcclxuICAgICAgICBzdHJlYW0uX3dyaXRlID0gKGluZGV4LCBfZW5jLCBkb25lKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXRFbnRyeShmaWxlcGF0aHNbaW5kZXhdLCBwYXR0ZXJuc1tpbmRleF0sIG9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoZW50cnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbnRyeSAhPT0gbnVsbCAmJiBvcHRpb25zLmVudHJ5RmlsdGVyKGVudHJ5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cmVhbS5wdXNoKGVudHJ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gZmlsZXBhdGhzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJlYW0uZW5kKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZG9uZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVwYXRocy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBzdHJlYW0ud3JpdGUoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdHJlYW07XHJcbiAgICB9XHJcbiAgICBfZ2V0RW50cnkoZmlsZXBhdGgsIHBhdHRlcm4sIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0U3RhdChmaWxlcGF0aClcclxuICAgICAgICAgICAgLnRoZW4oKHN0YXRzKSA9PiB0aGlzLl9tYWtlRW50cnkoc3RhdHMsIHBhdHRlcm4pKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmVycm9yRmlsdGVyKGVycm9yKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBfZ2V0U3RhdChmaWxlcGF0aCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXQoZmlsZXBhdGgsIHRoaXMuX2ZzU3RhdFNldHRpbmdzLCAoZXJyb3IsIHN0YXRzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IgPT09IG51bGwgPyByZXNvbHZlKHN0YXRzKSA6IHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFJlYWRlclN0cmVhbTtcclxuIiwgIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZzV2FsayA9IHJlcXVpcmUoXCJAbm9kZWxpYi9mcy53YWxrXCIpO1xyXG5jb25zdCByZWFkZXJfMSA9IHJlcXVpcmUoXCIuL3JlYWRlclwiKTtcclxuY29uc3Qgc3RyZWFtXzEgPSByZXF1aXJlKFwiLi9zdHJlYW1cIik7XHJcbmNsYXNzIFJlYWRlckFzeW5jIGV4dGVuZHMgcmVhZGVyXzEuZGVmYXVsdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xyXG4gICAgICAgIHRoaXMuX3dhbGtBc3luYyA9IGZzV2Fsay53YWxrO1xyXG4gICAgICAgIHRoaXMuX3JlYWRlclN0cmVhbSA9IG5ldyBzdHJlYW1fMS5kZWZhdWx0KHRoaXMuX3NldHRpbmdzKTtcclxuICAgIH1cclxuICAgIGR5bmFtaWMocm9vdCwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dhbGtBc3luYyhyb290LCBvcHRpb25zLCAoZXJyb3IsIGVudHJpZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvciA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZW50cmllcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGFzeW5jIHN0YXRpYyhwYXR0ZXJucywgb3B0aW9ucykge1xyXG4gICAgICAgIGNvbnN0IGVudHJpZXMgPSBbXTtcclxuICAgICAgICBjb25zdCBzdHJlYW0gPSB0aGlzLl9yZWFkZXJTdHJlYW0uc3RhdGljKHBhdHRlcm5zLCBvcHRpb25zKTtcclxuICAgICAgICAvLyBBZnRlciAjMjM1LCByZXBsYWNlIGl0IHdpdGggYW4gYXN5bmNocm9ub3VzIGl0ZXJhdG9yLlxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHN0cmVhbS5vbmNlKCdlcnJvcicsIHJlamVjdCk7XHJcbiAgICAgICAgICAgIHN0cmVhbS5vbignZGF0YScsIChlbnRyeSkgPT4gZW50cmllcy5wdXNoKGVudHJ5KSk7XHJcbiAgICAgICAgICAgIHN0cmVhbS5vbmNlKCdlbmQnLCAoKSA9PiByZXNvbHZlKGVudHJpZXMpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBSZWFkZXJBc3luYztcclxuIiwgIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHV0aWxzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO1xyXG5jbGFzcyBNYXRjaGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKF9wYXR0ZXJucywgX3NldHRpbmdzLCBfbWljcm9tYXRjaE9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLl9wYXR0ZXJucyA9IF9wYXR0ZXJucztcclxuICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IF9zZXR0aW5ncztcclxuICAgICAgICB0aGlzLl9taWNyb21hdGNoT3B0aW9ucyA9IF9taWNyb21hdGNoT3B0aW9ucztcclxuICAgICAgICB0aGlzLl9zdG9yYWdlID0gW107XHJcbiAgICAgICAgdGhpcy5fZmlsbFN0b3JhZ2UoKTtcclxuICAgIH1cclxuICAgIF9maWxsU3RvcmFnZSgpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgb3JpZ2luYWwgcGF0dGVybiBtYXkgaW5jbHVkZSBgeywqLCoqLGEvKn1gLCB3aGljaCB3aWxsIGxlYWQgdG8gcHJvYmxlbXMgd2l0aCBtYXRjaGluZyAodW5yZXNvbHZlZCBsZXZlbCkuXHJcbiAgICAgICAgICogU28sIGJlZm9yZSBleHBhbmQgcGF0dGVybnMgd2l0aCBicmFjZSBleHBhbnNpb24gaW50byBzZXBhcmF0ZWQgcGF0dGVybnMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgcGF0dGVybnMgPSB1dGlscy5wYXR0ZXJuLmV4cGFuZFBhdHRlcm5zV2l0aEJyYWNlRXhwYW5zaW9uKHRoaXMuX3BhdHRlcm5zKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHBhdHRlcm4gb2YgcGF0dGVybnMpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VnbWVudHMgPSB0aGlzLl9nZXRQYXR0ZXJuU2VnbWVudHMocGF0dGVybik7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb25zID0gdGhpcy5fc3BsaXRTZWdtZW50c0ludG9TZWN0aW9ucyhzZWdtZW50cyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0b3JhZ2UucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogc2VjdGlvbnMubGVuZ3RoIDw9IDEsXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuLFxyXG4gICAgICAgICAgICAgICAgc2VnbWVudHMsXHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfZ2V0UGF0dGVyblNlZ21lbnRzKHBhdHRlcm4pIHtcclxuICAgICAgICBjb25zdCBwYXJ0cyA9IHV0aWxzLnBhdHRlcm4uZ2V0UGF0dGVyblBhcnRzKHBhdHRlcm4sIHRoaXMuX21pY3JvbWF0Y2hPcHRpb25zKTtcclxuICAgICAgICByZXR1cm4gcGFydHMubWFwKChwYXJ0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGR5bmFtaWMgPSB1dGlscy5wYXR0ZXJuLmlzRHluYW1pY1BhdHRlcm4ocGFydCwgdGhpcy5fc2V0dGluZ3MpO1xyXG4gICAgICAgICAgICBpZiAoIWR5bmFtaWMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHluYW1pYzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybjogcGFydFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZHluYW1pYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhcnQsXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuUmU6IHV0aWxzLnBhdHRlcm4ubWFrZVJlKHBhcnQsIHRoaXMuX21pY3JvbWF0Y2hPcHRpb25zKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgX3NwbGl0U2VnbWVudHNJbnRvU2VjdGlvbnMoc2VnbWVudHMpIHtcclxuICAgICAgICByZXR1cm4gdXRpbHMuYXJyYXkuc3BsaXRXaGVuKHNlZ21lbnRzLCAoc2VnbWVudCkgPT4gc2VnbWVudC5keW5hbWljICYmIHV0aWxzLnBhdHRlcm4uaGFzR2xvYlN0YXIoc2VnbWVudC5wYXR0ZXJuKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gTWF0Y2hlcjtcclxuIiwgIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG1hdGNoZXJfMSA9IHJlcXVpcmUoXCIuL21hdGNoZXJcIik7XHJcbmNsYXNzIFBhcnRpYWxNYXRjaGVyIGV4dGVuZHMgbWF0Y2hlcl8xLmRlZmF1bHQge1xyXG4gICAgbWF0Y2goZmlsZXBhdGgpIHtcclxuICAgICAgICBjb25zdCBwYXJ0cyA9IGZpbGVwYXRoLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgY29uc3QgbGV2ZWxzID0gcGFydHMubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IHBhdHRlcm5zID0gdGhpcy5fc3RvcmFnZS5maWx0ZXIoKGluZm8pID0+ICFpbmZvLmNvbXBsZXRlIHx8IGluZm8uc2VnbWVudHMubGVuZ3RoID4gbGV2ZWxzKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHBhdHRlcm4gb2YgcGF0dGVybnMpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbiA9IHBhdHRlcm4uc2VjdGlvbnNbMF07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBJbiB0aGlzIGNhc2UsIHRoZSBwYXR0ZXJuIGhhcyBhIGdsb2JzdGFyIGFuZCB3ZSBtdXN0IHJlYWQgYWxsIGRpcmVjdG9yaWVzIHVuY29uZGl0aW9uYWxseSxcclxuICAgICAgICAgICAgICogYnV0IG9ubHkgaWYgdGhlIGxldmVsIGhhcyByZWFjaGVkIHRoZSBlbmQgb2YgdGhlIGZpcnN0IGdyb3VwLlxyXG4gICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgKiBmaXh0dXJlcy97YSxifS8qKlxyXG4gICAgICAgICAgICAgKiAgXiB0cnVlL2ZhbHNlICBeIGFsd2F5cyB0cnVlXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGlmICghcGF0dGVybi5jb21wbGV0ZSAmJiBsZXZlbHMgPiBzZWN0aW9uLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBwYXJ0cy5ldmVyeSgocGFydCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlZ21lbnQgPSBwYXR0ZXJuLnNlZ21lbnRzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWdtZW50LmR5bmFtaWMgJiYgc2VnbWVudC5wYXR0ZXJuUmUudGVzdChwYXJ0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFzZWdtZW50LmR5bmFtaWMgJiYgc2VnbWVudC5wYXR0ZXJuID09PSBwYXJ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBQYXJ0aWFsTWF0Y2hlcjtcclxuIiwgIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHV0aWxzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO1xyXG5jb25zdCBwYXJ0aWFsXzEgPSByZXF1aXJlKFwiLi4vbWF0Y2hlcnMvcGFydGlhbFwiKTtcclxuY2xhc3MgRGVlcEZpbHRlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihfc2V0dGluZ3MsIF9taWNyb21hdGNoT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzID0gX3NldHRpbmdzO1xyXG4gICAgICAgIHRoaXMuX21pY3JvbWF0Y2hPcHRpb25zID0gX21pY3JvbWF0Y2hPcHRpb25zO1xyXG4gICAgfVxyXG4gICAgZ2V0RmlsdGVyKGJhc2VQYXRoLCBwb3NpdGl2ZSwgbmVnYXRpdmUpIHtcclxuICAgICAgICBjb25zdCBtYXRjaGVyID0gdGhpcy5fZ2V0TWF0Y2hlcihwb3NpdGl2ZSk7XHJcbiAgICAgICAgY29uc3QgbmVnYXRpdmVSZSA9IHRoaXMuX2dldE5lZ2F0aXZlUGF0dGVybnNSZShuZWdhdGl2ZSk7XHJcbiAgICAgICAgcmV0dXJuIChlbnRyeSkgPT4gdGhpcy5fZmlsdGVyKGJhc2VQYXRoLCBlbnRyeSwgbWF0Y2hlciwgbmVnYXRpdmVSZSk7XHJcbiAgICB9XHJcbiAgICBfZ2V0TWF0Y2hlcihwYXR0ZXJucykge1xyXG4gICAgICAgIHJldHVybiBuZXcgcGFydGlhbF8xLmRlZmF1bHQocGF0dGVybnMsIHRoaXMuX3NldHRpbmdzLCB0aGlzLl9taWNyb21hdGNoT3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBfZ2V0TmVnYXRpdmVQYXR0ZXJuc1JlKHBhdHRlcm5zKSB7XHJcbiAgICAgICAgY29uc3QgYWZmZWN0RGVwdGhPZlJlYWRpbmdQYXR0ZXJucyA9IHBhdHRlcm5zLmZpbHRlcih1dGlscy5wYXR0ZXJuLmlzQWZmZWN0RGVwdGhPZlJlYWRpbmdQYXR0ZXJuKTtcclxuICAgICAgICByZXR1cm4gdXRpbHMucGF0dGVybi5jb252ZXJ0UGF0dGVybnNUb1JlKGFmZmVjdERlcHRoT2ZSZWFkaW5nUGF0dGVybnMsIHRoaXMuX21pY3JvbWF0Y2hPcHRpb25zKTtcclxuICAgIH1cclxuICAgIF9maWx0ZXIoYmFzZVBhdGgsIGVudHJ5LCBtYXRjaGVyLCBuZWdhdGl2ZVJlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzU2tpcHBlZEJ5RGVlcChiYXNlUGF0aCwgZW50cnkucGF0aCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5faXNTa2lwcGVkU3ltYm9saWNMaW5rKGVudHJ5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGZpbGVwYXRoID0gdXRpbHMucGF0aC5yZW1vdmVMZWFkaW5nRG90U2VnbWVudChlbnRyeS5wYXRoKTtcclxuICAgICAgICBpZiAodGhpcy5faXNTa2lwcGVkQnlQb3NpdGl2ZVBhdHRlcm5zKGZpbGVwYXRoLCBtYXRjaGVyKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc1NraXBwZWRCeU5lZ2F0aXZlUGF0dGVybnMoZmlsZXBhdGgsIG5lZ2F0aXZlUmUpO1xyXG4gICAgfVxyXG4gICAgX2lzU2tpcHBlZEJ5RGVlcChiYXNlUGF0aCwgZW50cnlQYXRoKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQXZvaWQgdW5uZWNlc3NhcnkgZGVwdGggY2FsY3VsYXRpb25zIHdoZW4gaXQgZG9lc24ndCBtYXR0ZXIuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLmRlZXAgPT09IEluZmluaXR5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldEVudHJ5TGV2ZWwoYmFzZVBhdGgsIGVudHJ5UGF0aCkgPj0gdGhpcy5fc2V0dGluZ3MuZGVlcDtcclxuICAgIH1cclxuICAgIF9nZXRFbnRyeUxldmVsKGJhc2VQYXRoLCBlbnRyeVBhdGgpIHtcclxuICAgICAgICBjb25zdCBlbnRyeVBhdGhEZXB0aCA9IGVudHJ5UGF0aC5zcGxpdCgnLycpLmxlbmd0aDtcclxuICAgICAgICBpZiAoYmFzZVBhdGggPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbnRyeVBhdGhEZXB0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYmFzZVBhdGhEZXB0aCA9IGJhc2VQYXRoLnNwbGl0KCcvJykubGVuZ3RoO1xyXG4gICAgICAgIHJldHVybiBlbnRyeVBhdGhEZXB0aCAtIGJhc2VQYXRoRGVwdGg7XHJcbiAgICB9XHJcbiAgICBfaXNTa2lwcGVkU3ltYm9saWNMaW5rKGVudHJ5KSB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLl9zZXR0aW5ncy5mb2xsb3dTeW1ib2xpY0xpbmtzICYmIGVudHJ5LmRpcmVudC5pc1N5bWJvbGljTGluaygpO1xyXG4gICAgfVxyXG4gICAgX2lzU2tpcHBlZEJ5UG9zaXRpdmVQYXR0ZXJucyhlbnRyeVBhdGgsIG1hdGNoZXIpIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuX3NldHRpbmdzLmJhc2VOYW1lTWF0Y2ggJiYgIW1hdGNoZXIubWF0Y2goZW50cnlQYXRoKTtcclxuICAgIH1cclxuICAgIF9pc1NraXBwZWRCeU5lZ2F0aXZlUGF0dGVybnMoZW50cnlQYXRoLCBwYXR0ZXJuc1JlKSB7XHJcbiAgICAgICAgcmV0dXJuICF1dGlscy5wYXR0ZXJuLm1hdGNoQW55KGVudHJ5UGF0aCwgcGF0dGVybnNSZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gRGVlcEZpbHRlcjtcclxuIiwgIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHV0aWxzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO1xyXG5jbGFzcyBFbnRyeUZpbHRlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihfc2V0dGluZ3MsIF9taWNyb21hdGNoT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzID0gX3NldHRpbmdzO1xyXG4gICAgICAgIHRoaXMuX21pY3JvbWF0Y2hPcHRpb25zID0gX21pY3JvbWF0Y2hPcHRpb25zO1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSBuZXcgTWFwKCk7XHJcbiAgICB9XHJcbiAgICBnZXRGaWx0ZXIocG9zaXRpdmUsIG5lZ2F0aXZlKSB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpdmVSZSA9IHV0aWxzLnBhdHRlcm4uY29udmVydFBhdHRlcm5zVG9SZShwb3NpdGl2ZSwgdGhpcy5fbWljcm9tYXRjaE9wdGlvbnMpO1xyXG4gICAgICAgIGNvbnN0IG5lZ2F0aXZlUmUgPSB1dGlscy5wYXR0ZXJuLmNvbnZlcnRQYXR0ZXJuc1RvUmUobmVnYXRpdmUsIHRoaXMuX21pY3JvbWF0Y2hPcHRpb25zKTtcclxuICAgICAgICByZXR1cm4gKGVudHJ5KSA9PiB0aGlzLl9maWx0ZXIoZW50cnksIHBvc2l0aXZlUmUsIG5lZ2F0aXZlUmUpO1xyXG4gICAgfVxyXG4gICAgX2ZpbHRlcihlbnRyeSwgcG9zaXRpdmVSZSwgbmVnYXRpdmVSZSkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy51bmlxdWUgJiYgdGhpcy5faXNEdXBsaWNhdGVFbnRyeShlbnRyeSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fb25seUZpbGVGaWx0ZXIoZW50cnkpIHx8IHRoaXMuX29ubHlEaXJlY3RvcnlGaWx0ZXIoZW50cnkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzU2tpcHBlZEJ5QWJzb2x1dGVOZWdhdGl2ZVBhdHRlcm5zKGVudHJ5LnBhdGgsIG5lZ2F0aXZlUmUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZmlsZXBhdGggPSB0aGlzLl9zZXR0aW5ncy5iYXNlTmFtZU1hdGNoID8gZW50cnkubmFtZSA6IGVudHJ5LnBhdGg7XHJcbiAgICAgICAgY29uc3QgaXNEaXJlY3RvcnkgPSBlbnRyeS5kaXJlbnQuaXNEaXJlY3RvcnkoKTtcclxuICAgICAgICBjb25zdCBpc01hdGNoZWQgPSB0aGlzLl9pc01hdGNoVG9QYXR0ZXJucyhmaWxlcGF0aCwgcG9zaXRpdmVSZSwgaXNEaXJlY3RvcnkpICYmICF0aGlzLl9pc01hdGNoVG9QYXR0ZXJucyhlbnRyeS5wYXRoLCBuZWdhdGl2ZVJlLCBpc0RpcmVjdG9yeSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLnVuaXF1ZSAmJiBpc01hdGNoZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlSW5kZXhSZWNvcmQoZW50cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNNYXRjaGVkO1xyXG4gICAgfVxyXG4gICAgX2lzRHVwbGljYXRlRW50cnkoZW50cnkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbmRleC5oYXMoZW50cnkucGF0aCk7XHJcbiAgICB9XHJcbiAgICBfY3JlYXRlSW5kZXhSZWNvcmQoZW50cnkpIHtcclxuICAgICAgICB0aGlzLmluZGV4LnNldChlbnRyeS5wYXRoLCB1bmRlZmluZWQpO1xyXG4gICAgfVxyXG4gICAgX29ubHlGaWxlRmlsdGVyKGVudHJ5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLm9ubHlGaWxlcyAmJiAhZW50cnkuZGlyZW50LmlzRmlsZSgpO1xyXG4gICAgfVxyXG4gICAgX29ubHlEaXJlY3RvcnlGaWx0ZXIoZW50cnkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3Mub25seURpcmVjdG9yaWVzICYmICFlbnRyeS5kaXJlbnQuaXNEaXJlY3RvcnkoKTtcclxuICAgIH1cclxuICAgIF9pc1NraXBwZWRCeUFic29sdXRlTmVnYXRpdmVQYXR0ZXJucyhlbnRyeVBhdGgsIHBhdHRlcm5zUmUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3NldHRpbmdzLmFic29sdXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZnVsbHBhdGggPSB1dGlscy5wYXRoLm1ha2VBYnNvbHV0ZSh0aGlzLl9zZXR0aW5ncy5jd2QsIGVudHJ5UGF0aCk7XHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLnBhdHRlcm4ubWF0Y2hBbnkoZnVsbHBhdGgsIHBhdHRlcm5zUmUpO1xyXG4gICAgfVxyXG4gICAgX2lzTWF0Y2hUb1BhdHRlcm5zKGVudHJ5UGF0aCwgcGF0dGVybnNSZSwgaXNEaXJlY3RvcnkpIHtcclxuICAgICAgICBjb25zdCBmaWxlcGF0aCA9IHV0aWxzLnBhdGgucmVtb3ZlTGVhZGluZ0RvdFNlZ21lbnQoZW50cnlQYXRoKTtcclxuICAgICAgICAvLyBUcnlpbmcgdG8gbWF0Y2ggZmlsZXMgYW5kIGRpcmVjdG9yaWVzIGJ5IHBhdHRlcm5zLlxyXG4gICAgICAgIGNvbnN0IGlzTWF0Y2hlZCA9IHV0aWxzLnBhdHRlcm4ubWF0Y2hBbnkoZmlsZXBhdGgsIHBhdHRlcm5zUmUpO1xyXG4gICAgICAgIC8vIEEgcGF0dGVybiB3aXRoIGEgdHJhaWxsaW5nIHNsYXNoIGNhbiBiZSB1c2VkIGZvciBkaXJlY3RvcnkgbWF0Y2hpbmcuXHJcbiAgICAgICAgLy8gVG8gYXBwbHkgc3VjaCBwYXR0ZXJuLCB3ZSBuZWVkIHRvIGFkZCBhIHRyYWxsaW5nIHNsYXNoIHRvIHRoZSBwYXRoLlxyXG4gICAgICAgIGlmICghaXNNYXRjaGVkICYmIGlzRGlyZWN0b3J5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1dGlscy5wYXR0ZXJuLm1hdGNoQW55KGZpbGVwYXRoICsgJy8nLCBwYXR0ZXJuc1JlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzTWF0Y2hlZDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBFbnRyeUZpbHRlcjtcclxuIiwgIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHV0aWxzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO1xyXG5jbGFzcyBFcnJvckZpbHRlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihfc2V0dGluZ3MpIHtcclxuICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IF9zZXR0aW5ncztcclxuICAgIH1cclxuICAgIGdldEZpbHRlcigpIHtcclxuICAgICAgICByZXR1cm4gKGVycm9yKSA9PiB0aGlzLl9pc05vbkZhdGFsRXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgX2lzTm9uRmF0YWxFcnJvcihlcnJvcikge1xyXG4gICAgICAgIHJldHVybiB1dGlscy5lcnJuby5pc0Vub2VudENvZGVFcnJvcihlcnJvcikgfHwgdGhpcy5fc2V0dGluZ3Muc3VwcHJlc3NFcnJvcnM7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gRXJyb3JGaWx0ZXI7XHJcbiIsICJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCB1dGlscyA9IHJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTtcclxuY2xhc3MgRW50cnlUcmFuc2Zvcm1lciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihfc2V0dGluZ3MpIHtcclxuICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IF9zZXR0aW5ncztcclxuICAgIH1cclxuICAgIGdldFRyYW5zZm9ybWVyKCkge1xyXG4gICAgICAgIHJldHVybiAoZW50cnkpID0+IHRoaXMuX3RyYW5zZm9ybShlbnRyeSk7XHJcbiAgICB9XHJcbiAgICBfdHJhbnNmb3JtKGVudHJ5KSB7XHJcbiAgICAgICAgbGV0IGZpbGVwYXRoID0gZW50cnkucGF0aDtcclxuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MuYWJzb2x1dGUpIHtcclxuICAgICAgICAgICAgZmlsZXBhdGggPSB1dGlscy5wYXRoLm1ha2VBYnNvbHV0ZSh0aGlzLl9zZXR0aW5ncy5jd2QsIGZpbGVwYXRoKTtcclxuICAgICAgICAgICAgZmlsZXBhdGggPSB1dGlscy5wYXRoLnVuaXhpZnkoZmlsZXBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MubWFya0RpcmVjdG9yaWVzICYmIGVudHJ5LmRpcmVudC5pc0RpcmVjdG9yeSgpKSB7XHJcbiAgICAgICAgICAgIGZpbGVwYXRoICs9ICcvJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLl9zZXR0aW5ncy5vYmplY3RNb2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmaWxlcGF0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZW50cnkpLCB7IHBhdGg6IGZpbGVwYXRoIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEVudHJ5VHJhbnNmb3JtZXI7XHJcbiIsICJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XHJcbmNvbnN0IGRlZXBfMSA9IHJlcXVpcmUoXCIuL2ZpbHRlcnMvZGVlcFwiKTtcclxuY29uc3QgZW50cnlfMSA9IHJlcXVpcmUoXCIuL2ZpbHRlcnMvZW50cnlcIik7XHJcbmNvbnN0IGVycm9yXzEgPSByZXF1aXJlKFwiLi9maWx0ZXJzL2Vycm9yXCIpO1xyXG5jb25zdCBlbnRyeV8yID0gcmVxdWlyZShcIi4vdHJhbnNmb3JtZXJzL2VudHJ5XCIpO1xyXG5jbGFzcyBQcm92aWRlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihfc2V0dGluZ3MpIHtcclxuICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IF9zZXR0aW5ncztcclxuICAgICAgICB0aGlzLmVycm9yRmlsdGVyID0gbmV3IGVycm9yXzEuZGVmYXVsdCh0aGlzLl9zZXR0aW5ncyk7XHJcbiAgICAgICAgdGhpcy5lbnRyeUZpbHRlciA9IG5ldyBlbnRyeV8xLmRlZmF1bHQodGhpcy5fc2V0dGluZ3MsIHRoaXMuX2dldE1pY3JvbWF0Y2hPcHRpb25zKCkpO1xyXG4gICAgICAgIHRoaXMuZGVlcEZpbHRlciA9IG5ldyBkZWVwXzEuZGVmYXVsdCh0aGlzLl9zZXR0aW5ncywgdGhpcy5fZ2V0TWljcm9tYXRjaE9wdGlvbnMoKSk7XHJcbiAgICAgICAgdGhpcy5lbnRyeVRyYW5zZm9ybWVyID0gbmV3IGVudHJ5XzIuZGVmYXVsdCh0aGlzLl9zZXR0aW5ncyk7XHJcbiAgICB9XHJcbiAgICBfZ2V0Um9vdERpcmVjdG9yeSh0YXNrKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhdGgucmVzb2x2ZSh0aGlzLl9zZXR0aW5ncy5jd2QsIHRhc2suYmFzZSk7XHJcbiAgICB9XHJcbiAgICBfZ2V0UmVhZGVyT3B0aW9ucyh0YXNrKSB7XHJcbiAgICAgICAgY29uc3QgYmFzZVBhdGggPSB0YXNrLmJhc2UgPT09ICcuJyA/ICcnIDogdGFzay5iYXNlO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGJhc2VQYXRoLFxyXG4gICAgICAgICAgICBwYXRoU2VnbWVudFNlcGFyYXRvcjogJy8nLFxyXG4gICAgICAgICAgICBjb25jdXJyZW5jeTogdGhpcy5fc2V0dGluZ3MuY29uY3VycmVuY3ksXHJcbiAgICAgICAgICAgIGRlZXBGaWx0ZXI6IHRoaXMuZGVlcEZpbHRlci5nZXRGaWx0ZXIoYmFzZVBhdGgsIHRhc2sucG9zaXRpdmUsIHRhc2submVnYXRpdmUpLFxyXG4gICAgICAgICAgICBlbnRyeUZpbHRlcjogdGhpcy5lbnRyeUZpbHRlci5nZXRGaWx0ZXIodGFzay5wb3NpdGl2ZSwgdGFzay5uZWdhdGl2ZSksXHJcbiAgICAgICAgICAgIGVycm9yRmlsdGVyOiB0aGlzLmVycm9yRmlsdGVyLmdldEZpbHRlcigpLFxyXG4gICAgICAgICAgICBmb2xsb3dTeW1ib2xpY0xpbmtzOiB0aGlzLl9zZXR0aW5ncy5mb2xsb3dTeW1ib2xpY0xpbmtzLFxyXG4gICAgICAgICAgICBmczogdGhpcy5fc2V0dGluZ3MuZnMsXHJcbiAgICAgICAgICAgIHN0YXRzOiB0aGlzLl9zZXR0aW5ncy5zdGF0cyxcclxuICAgICAgICAgICAgdGhyb3dFcnJvck9uQnJva2VuU3ltYm9saWNMaW5rOiB0aGlzLl9zZXR0aW5ncy50aHJvd0Vycm9yT25Ccm9rZW5TeW1ib2xpY0xpbmssXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdGhpcy5lbnRyeVRyYW5zZm9ybWVyLmdldFRyYW5zZm9ybWVyKClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgX2dldE1pY3JvbWF0Y2hPcHRpb25zKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRvdDogdGhpcy5fc2V0dGluZ3MuZG90LFxyXG4gICAgICAgICAgICBtYXRjaEJhc2U6IHRoaXMuX3NldHRpbmdzLmJhc2VOYW1lTWF0Y2gsXHJcbiAgICAgICAgICAgIG5vYnJhY2U6ICF0aGlzLl9zZXR0aW5ncy5icmFjZUV4cGFuc2lvbixcclxuICAgICAgICAgICAgbm9jYXNlOiAhdGhpcy5fc2V0dGluZ3MuY2FzZVNlbnNpdGl2ZU1hdGNoLFxyXG4gICAgICAgICAgICBub2V4dDogIXRoaXMuX3NldHRpbmdzLmV4dGdsb2IsXHJcbiAgICAgICAgICAgIG5vZ2xvYnN0YXI6ICF0aGlzLl9zZXR0aW5ncy5nbG9ic3RhcixcclxuICAgICAgICAgICAgcG9zaXg6IHRydWUsXHJcbiAgICAgICAgICAgIHN0cmljdFNsYXNoZXM6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBQcm92aWRlcjtcclxuIiwgIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGFzeW5jXzEgPSByZXF1aXJlKFwiLi4vcmVhZGVycy9hc3luY1wiKTtcclxuY29uc3QgcHJvdmlkZXJfMSA9IHJlcXVpcmUoXCIuL3Byb3ZpZGVyXCIpO1xyXG5jbGFzcyBQcm92aWRlckFzeW5jIGV4dGVuZHMgcHJvdmlkZXJfMS5kZWZhdWx0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy5fcmVhZGVyID0gbmV3IGFzeW5jXzEuZGVmYXVsdCh0aGlzLl9zZXR0aW5ncyk7XHJcbiAgICB9XHJcbiAgICBhc3luYyByZWFkKHRhc2spIHtcclxuICAgICAgICBjb25zdCByb290ID0gdGhpcy5fZ2V0Um9vdERpcmVjdG9yeSh0YXNrKTtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5fZ2V0UmVhZGVyT3B0aW9ucyh0YXNrKTtcclxuICAgICAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgdGhpcy5hcGkocm9vdCwgdGFzaywgb3B0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIGVudHJpZXMubWFwKChlbnRyeSkgPT4gb3B0aW9ucy50cmFuc2Zvcm0oZW50cnkpKTtcclxuICAgIH1cclxuICAgIGFwaShyb290LCB0YXNrLCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKHRhc2suZHluYW1pYykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVhZGVyLmR5bmFtaWMocm9vdCwgb3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZWFkZXIuc3RhdGljKHRhc2sucGF0dGVybnMsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFByb3ZpZGVyQXN5bmM7XHJcbiIsICJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzdHJlYW1fMSA9IHJlcXVpcmUoXCJzdHJlYW1cIik7XHJcbmNvbnN0IHN0cmVhbV8yID0gcmVxdWlyZShcIi4uL3JlYWRlcnMvc3RyZWFtXCIpO1xyXG5jb25zdCBwcm92aWRlcl8xID0gcmVxdWlyZShcIi4vcHJvdmlkZXJcIik7XHJcbmNsYXNzIFByb3ZpZGVyU3RyZWFtIGV4dGVuZHMgcHJvdmlkZXJfMS5kZWZhdWx0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy5fcmVhZGVyID0gbmV3IHN0cmVhbV8yLmRlZmF1bHQodGhpcy5fc2V0dGluZ3MpO1xyXG4gICAgfVxyXG4gICAgcmVhZCh0YXNrKSB7XHJcbiAgICAgICAgY29uc3Qgcm9vdCA9IHRoaXMuX2dldFJvb3REaXJlY3RvcnkodGFzayk7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuX2dldFJlYWRlck9wdGlvbnModGFzayk7XHJcbiAgICAgICAgY29uc3Qgc291cmNlID0gdGhpcy5hcGkocm9vdCwgdGFzaywgb3B0aW9ucyk7XHJcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSBuZXcgc3RyZWFtXzEuUmVhZGFibGUoeyBvYmplY3RNb2RlOiB0cnVlLCByZWFkOiAoKSA9PiB7IH0gfSk7XHJcbiAgICAgICAgc291cmNlXHJcbiAgICAgICAgICAgIC5vbmNlKCdlcnJvcicsIChlcnJvcikgPT4gZGVzdGluYXRpb24uZW1pdCgnZXJyb3InLCBlcnJvcikpXHJcbiAgICAgICAgICAgIC5vbignZGF0YScsIChlbnRyeSkgPT4gZGVzdGluYXRpb24uZW1pdCgnZGF0YScsIG9wdGlvbnMudHJhbnNmb3JtKGVudHJ5KSkpXHJcbiAgICAgICAgICAgIC5vbmNlKCdlbmQnLCAoKSA9PiBkZXN0aW5hdGlvbi5lbWl0KCdlbmQnKSk7XHJcbiAgICAgICAgZGVzdGluYXRpb25cclxuICAgICAgICAgICAgLm9uY2UoJ2Nsb3NlJywgKCkgPT4gc291cmNlLmRlc3Ryb3koKSk7XHJcbiAgICAgICAgcmV0dXJuIGRlc3RpbmF0aW9uO1xyXG4gICAgfVxyXG4gICAgYXBpKHJvb3QsIHRhc2ssIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAodGFzay5keW5hbWljKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWFkZXIuZHluYW1pYyhyb290LCBvcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWRlci5zdGF0aWModGFzay5wYXR0ZXJucywgb3B0aW9ucyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gUHJvdmlkZXJTdHJlYW07XHJcbiIsICJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmc1N0YXQgPSByZXF1aXJlKFwiQG5vZGVsaWIvZnMuc3RhdFwiKTtcclxuY29uc3QgZnNXYWxrID0gcmVxdWlyZShcIkBub2RlbGliL2ZzLndhbGtcIik7XHJcbmNvbnN0IHJlYWRlcl8xID0gcmVxdWlyZShcIi4vcmVhZGVyXCIpO1xyXG5jbGFzcyBSZWFkZXJTeW5jIGV4dGVuZHMgcmVhZGVyXzEuZGVmYXVsdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xyXG4gICAgICAgIHRoaXMuX3dhbGtTeW5jID0gZnNXYWxrLndhbGtTeW5jO1xyXG4gICAgICAgIHRoaXMuX3N0YXRTeW5jID0gZnNTdGF0LnN0YXRTeW5jO1xyXG4gICAgfVxyXG4gICAgZHluYW1pYyhyb290LCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dhbGtTeW5jKHJvb3QsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljKHBhdHRlcm5zLCBvcHRpb25zKSB7XHJcbiAgICAgICAgY29uc3QgZW50cmllcyA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgcGF0dGVybiBvZiBwYXR0ZXJucykge1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlcGF0aCA9IHRoaXMuX2dldEZ1bGxFbnRyeVBhdGgocGF0dGVybik7XHJcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5ID0gdGhpcy5fZ2V0RW50cnkoZmlsZXBhdGgsIHBhdHRlcm4sIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBpZiAoZW50cnkgPT09IG51bGwgfHwgIW9wdGlvbnMuZW50cnlGaWx0ZXIoZW50cnkpKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbnRyaWVzLnB1c2goZW50cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZW50cmllcztcclxuICAgIH1cclxuICAgIF9nZXRFbnRyeShmaWxlcGF0aCwgcGF0dGVybiwgb3B0aW9ucykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRzID0gdGhpcy5fZ2V0U3RhdChmaWxlcGF0aCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYWtlRW50cnkoc3RhdHMsIHBhdHRlcm4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZXJyb3JGaWx0ZXIoZXJyb3IpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfZ2V0U3RhdChmaWxlcGF0aCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0U3luYyhmaWxlcGF0aCwgdGhpcy5fZnNTdGF0U2V0dGluZ3MpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFJlYWRlclN5bmM7XHJcbiIsICJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzeW5jXzEgPSByZXF1aXJlKFwiLi4vcmVhZGVycy9zeW5jXCIpO1xyXG5jb25zdCBwcm92aWRlcl8xID0gcmVxdWlyZShcIi4vcHJvdmlkZXJcIik7XHJcbmNsYXNzIFByb3ZpZGVyU3luYyBleHRlbmRzIHByb3ZpZGVyXzEuZGVmYXVsdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xyXG4gICAgICAgIHRoaXMuX3JlYWRlciA9IG5ldyBzeW5jXzEuZGVmYXVsdCh0aGlzLl9zZXR0aW5ncyk7XHJcbiAgICB9XHJcbiAgICByZWFkKHRhc2spIHtcclxuICAgICAgICBjb25zdCByb290ID0gdGhpcy5fZ2V0Um9vdERpcmVjdG9yeSh0YXNrKTtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5fZ2V0UmVhZGVyT3B0aW9ucyh0YXNrKTtcclxuICAgICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5hcGkocm9vdCwgdGFzaywgb3B0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIGVudHJpZXMubWFwKG9wdGlvbnMudHJhbnNmb3JtKTtcclxuICAgIH1cclxuICAgIGFwaShyb290LCB0YXNrLCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKHRhc2suZHluYW1pYykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVhZGVyLmR5bmFtaWMocm9vdCwgb3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZWFkZXIuc3RhdGljKHRhc2sucGF0dGVybnMsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFByb3ZpZGVyU3luYztcclxuIiwgIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuREVGQVVMVF9GSUxFX1NZU1RFTV9BREFQVEVSID0gdm9pZCAwO1xyXG5jb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcclxuY29uc3Qgb3MgPSByZXF1aXJlKFwib3NcIik7XHJcbi8qKlxyXG4gKiBUaGUgYG9zLmNwdXNgIG1ldGhvZCBjYW4gcmV0dXJuIHplcm8uIFdlIGV4cGVjdCB0aGUgbnVtYmVyIG9mIGNvcmVzIHRvIGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvYmxvYi83ZmFlZGRmMjNhOThjNTM4OTZmOGI1NzRhNmU2NjU4OWU4ZmIxZWI4L2xpYi9vcy5qcyNMMTA2LUwxMDdcclxuICovXHJcbmNvbnN0IENQVV9DT1VOVCA9IE1hdGgubWF4KG9zLmNwdXMoKS5sZW5ndGgsIDEpO1xyXG5leHBvcnRzLkRFRkFVTFRfRklMRV9TWVNURU1fQURBUFRFUiA9IHtcclxuICAgIGxzdGF0OiBmcy5sc3RhdCxcclxuICAgIGxzdGF0U3luYzogZnMubHN0YXRTeW5jLFxyXG4gICAgc3RhdDogZnMuc3RhdCxcclxuICAgIHN0YXRTeW5jOiBmcy5zdGF0U3luYyxcclxuICAgIHJlYWRkaXI6IGZzLnJlYWRkaXIsXHJcbiAgICByZWFkZGlyU3luYzogZnMucmVhZGRpclN5bmNcclxufTtcclxuY2xhc3MgU2V0dGluZ3Mge1xyXG4gICAgY29uc3RydWN0b3IoX29wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBfb3B0aW9ucztcclxuICAgICAgICB0aGlzLmFic29sdXRlID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy5hYnNvbHV0ZSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuYmFzZU5hbWVNYXRjaCA9IHRoaXMuX2dldFZhbHVlKHRoaXMuX29wdGlvbnMuYmFzZU5hbWVNYXRjaCwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuYnJhY2VFeHBhbnNpb24gPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLl9vcHRpb25zLmJyYWNlRXhwYW5zaW9uLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmNhc2VTZW5zaXRpdmVNYXRjaCA9IHRoaXMuX2dldFZhbHVlKHRoaXMuX29wdGlvbnMuY2FzZVNlbnNpdGl2ZU1hdGNoLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmNvbmN1cnJlbmN5ID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy5jb25jdXJyZW5jeSwgQ1BVX0NPVU5UKTtcclxuICAgICAgICB0aGlzLmN3ZCA9IHRoaXMuX2dldFZhbHVlKHRoaXMuX29wdGlvbnMuY3dkLCBwcm9jZXNzLmN3ZCgpKTtcclxuICAgICAgICB0aGlzLmRlZXAgPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLl9vcHRpb25zLmRlZXAsIEluZmluaXR5KTtcclxuICAgICAgICB0aGlzLmRvdCA9IHRoaXMuX2dldFZhbHVlKHRoaXMuX29wdGlvbnMuZG90LCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5leHRnbG9iID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy5leHRnbG9iLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmZvbGxvd1N5bWJvbGljTGlua3MgPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLl9vcHRpb25zLmZvbGxvd1N5bWJvbGljTGlua3MsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuZnMgPSB0aGlzLl9nZXRGaWxlU3lzdGVtTWV0aG9kcyh0aGlzLl9vcHRpb25zLmZzKTtcclxuICAgICAgICB0aGlzLmdsb2JzdGFyID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy5nbG9ic3RhciwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5pZ25vcmUgPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLl9vcHRpb25zLmlnbm9yZSwgW10pO1xyXG4gICAgICAgIHRoaXMubWFya0RpcmVjdG9yaWVzID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy5tYXJrRGlyZWN0b3JpZXMsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLm9iamVjdE1vZGUgPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLl9vcHRpb25zLm9iamVjdE1vZGUsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLm9ubHlEaXJlY3RvcmllcyA9IHRoaXMuX2dldFZhbHVlKHRoaXMuX29wdGlvbnMub25seURpcmVjdG9yaWVzLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5vbmx5RmlsZXMgPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLl9vcHRpb25zLm9ubHlGaWxlcywgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5zdGF0cyA9IHRoaXMuX2dldFZhbHVlKHRoaXMuX29wdGlvbnMuc3RhdHMsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnN1cHByZXNzRXJyb3JzID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy5zdXBwcmVzc0Vycm9ycywgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMudGhyb3dFcnJvck9uQnJva2VuU3ltYm9saWNMaW5rID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy50aHJvd0Vycm9yT25Ccm9rZW5TeW1ib2xpY0xpbmssIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnVuaXF1ZSA9IHRoaXMuX2dldFZhbHVlKHRoaXMuX29wdGlvbnMudW5pcXVlLCB0cnVlKTtcclxuICAgICAgICBpZiAodGhpcy5vbmx5RGlyZWN0b3JpZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5vbmx5RmlsZXMgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdHMpIHtcclxuICAgICAgICAgICAgdGhpcy5vYmplY3RNb2RlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfZ2V0VmFsdWUob3B0aW9uLCB2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBvcHRpb24gPT09IHVuZGVmaW5lZCA/IHZhbHVlIDogb3B0aW9uO1xyXG4gICAgfVxyXG4gICAgX2dldEZpbGVTeXN0ZW1NZXRob2RzKG1ldGhvZHMgPSB7fSkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGV4cG9ydHMuREVGQVVMVF9GSUxFX1NZU1RFTV9BREFQVEVSKSwgbWV0aG9kcyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gU2V0dGluZ3M7XHJcbiIsICJcInVzZSBzdHJpY3RcIjtcclxuY29uc3QgdGFza01hbmFnZXIgPSByZXF1aXJlKFwiLi9tYW5hZ2Vycy90YXNrc1wiKTtcclxuY29uc3QgcGF0dGVybk1hbmFnZXIgPSByZXF1aXJlKFwiLi9tYW5hZ2Vycy9wYXR0ZXJuc1wiKTtcclxuY29uc3QgYXN5bmNfMSA9IHJlcXVpcmUoXCIuL3Byb3ZpZGVycy9hc3luY1wiKTtcclxuY29uc3Qgc3RyZWFtXzEgPSByZXF1aXJlKFwiLi9wcm92aWRlcnMvc3RyZWFtXCIpO1xyXG5jb25zdCBzeW5jXzEgPSByZXF1aXJlKFwiLi9wcm92aWRlcnMvc3luY1wiKTtcclxuY29uc3Qgc2V0dGluZ3NfMSA9IHJlcXVpcmUoXCIuL3NldHRpbmdzXCIpO1xyXG5jb25zdCB1dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xyXG5hc3luYyBmdW5jdGlvbiBGYXN0R2xvYihzb3VyY2UsIG9wdGlvbnMpIHtcclxuICAgIGFzc2VydFBhdHRlcm5zSW5wdXQoc291cmNlKTtcclxuICAgIGNvbnN0IHdvcmtzID0gZ2V0V29ya3Moc291cmNlLCBhc3luY18xLmRlZmF1bHQsIG9wdGlvbnMpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgUHJvbWlzZS5hbGwod29ya3MpO1xyXG4gICAgcmV0dXJuIHV0aWxzLmFycmF5LmZsYXR0ZW4ocmVzdWx0KTtcclxufVxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdHlwZXNjcmlwdC1lc2xpbnQvdHlwZXNjcmlwdC1lc2xpbnQvaXNzdWVzLzYwXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcclxuKGZ1bmN0aW9uIChGYXN0R2xvYikge1xyXG4gICAgZnVuY3Rpb24gc3luYyhzb3VyY2UsIG9wdGlvbnMpIHtcclxuICAgICAgICBhc3NlcnRQYXR0ZXJuc0lucHV0KHNvdXJjZSk7XHJcbiAgICAgICAgY29uc3Qgd29ya3MgPSBnZXRXb3Jrcyhzb3VyY2UsIHN5bmNfMS5kZWZhdWx0LCBvcHRpb25zKTtcclxuICAgICAgICByZXR1cm4gdXRpbHMuYXJyYXkuZmxhdHRlbih3b3Jrcyk7XHJcbiAgICB9XHJcbiAgICBGYXN0R2xvYi5zeW5jID0gc3luYztcclxuICAgIGZ1bmN0aW9uIHN0cmVhbShzb3VyY2UsIG9wdGlvbnMpIHtcclxuICAgICAgICBhc3NlcnRQYXR0ZXJuc0lucHV0KHNvdXJjZSk7XHJcbiAgICAgICAgY29uc3Qgd29ya3MgPSBnZXRXb3Jrcyhzb3VyY2UsIHN0cmVhbV8xLmRlZmF1bHQsIG9wdGlvbnMpO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBzdHJlYW0gcmV0dXJuZWQgYnkgdGhlIHByb3ZpZGVyIGNhbm5vdCB3b3JrIHdpdGggYW4gYXN5bmNocm9ub3VzIGl0ZXJhdG9yLlxyXG4gICAgICAgICAqIFRvIHN1cHBvcnQgYXN5bmNocm9ub3VzIGl0ZXJhdG9ycywgcmVnYXJkbGVzcyBvZiB0aGUgbnVtYmVyIG9mIHRhc2tzLCB3ZSBhbHdheXMgbXVsdGlwbGV4IHN0cmVhbXMuXHJcbiAgICAgICAgICogVGhpcyBhZmZlY3RzIHBlcmZvcm1hbmNlICgrMjUlKS4gSSBkb24ndCBzZWUgYmVzdCBzb2x1dGlvbiByaWdodCBub3cuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLnN0cmVhbS5tZXJnZSh3b3Jrcyk7XHJcbiAgICB9XHJcbiAgICBGYXN0R2xvYi5zdHJlYW0gPSBzdHJlYW07XHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVRhc2tzKHNvdXJjZSwgb3B0aW9ucykge1xyXG4gICAgICAgIGFzc2VydFBhdHRlcm5zSW5wdXQoc291cmNlKTtcclxuICAgICAgICBjb25zdCBwYXR0ZXJucyA9IHBhdHRlcm5NYW5hZ2VyLnRyYW5zZm9ybShbXS5jb25jYXQoc291cmNlKSk7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSBuZXcgc2V0dGluZ3NfMS5kZWZhdWx0KG9wdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiB0YXNrTWFuYWdlci5nZW5lcmF0ZShwYXR0ZXJucywgc2V0dGluZ3MpO1xyXG4gICAgfVxyXG4gICAgRmFzdEdsb2IuZ2VuZXJhdGVUYXNrcyA9IGdlbmVyYXRlVGFza3M7XHJcbiAgICBmdW5jdGlvbiBpc0R5bmFtaWNQYXR0ZXJuKHNvdXJjZSwgb3B0aW9ucykge1xyXG4gICAgICAgIGFzc2VydFBhdHRlcm5zSW5wdXQoc291cmNlKTtcclxuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IG5ldyBzZXR0aW5nc18xLmRlZmF1bHQob3B0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLnBhdHRlcm4uaXNEeW5hbWljUGF0dGVybihzb3VyY2UsIHNldHRpbmdzKTtcclxuICAgIH1cclxuICAgIEZhc3RHbG9iLmlzRHluYW1pY1BhdHRlcm4gPSBpc0R5bmFtaWNQYXR0ZXJuO1xyXG4gICAgZnVuY3Rpb24gZXNjYXBlUGF0aChzb3VyY2UpIHtcclxuICAgICAgICBhc3NlcnRQYXR0ZXJuc0lucHV0KHNvdXJjZSk7XHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLnBhdGguZXNjYXBlKHNvdXJjZSk7XHJcbiAgICB9XHJcbiAgICBGYXN0R2xvYi5lc2NhcGVQYXRoID0gZXNjYXBlUGF0aDtcclxufSkoRmFzdEdsb2IgfHwgKEZhc3RHbG9iID0ge30pKTtcclxuZnVuY3Rpb24gZ2V0V29ya3Moc291cmNlLCBfUHJvdmlkZXIsIG9wdGlvbnMpIHtcclxuICAgIGNvbnN0IHBhdHRlcm5zID0gcGF0dGVybk1hbmFnZXIudHJhbnNmb3JtKFtdLmNvbmNhdChzb3VyY2UpKTtcclxuICAgIGNvbnN0IHNldHRpbmdzID0gbmV3IHNldHRpbmdzXzEuZGVmYXVsdChvcHRpb25zKTtcclxuICAgIGNvbnN0IHRhc2tzID0gdGFza01hbmFnZXIuZ2VuZXJhdGUocGF0dGVybnMsIHNldHRpbmdzKTtcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IF9Qcm92aWRlcihzZXR0aW5ncyk7XHJcbiAgICByZXR1cm4gdGFza3MubWFwKHByb3ZpZGVyLnJlYWQsIHByb3ZpZGVyKTtcclxufVxyXG5mdW5jdGlvbiBhc3NlcnRQYXR0ZXJuc0lucHV0KGlucHV0KSB7XHJcbiAgICBjb25zdCBzb3VyY2UgPSBbXS5jb25jYXQoaW5wdXQpO1xyXG4gICAgY29uc3QgaXNWYWxpZFNvdXJjZSA9IHNvdXJjZS5ldmVyeSgoaXRlbSkgPT4gdXRpbHMuc3RyaW5nLmlzU3RyaW5nKGl0ZW0pICYmICF1dGlscy5zdHJpbmcuaXNFbXB0eShpdGVtKSk7XHJcbiAgICBpZiAoIWlzVmFsaWRTb3VyY2UpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQYXR0ZXJucyBtdXN0IGJlIGEgc3RyaW5nIChub24gZW1wdHkpIG9yIGFuIGFycmF5IG9mIHN0cmluZ3MnKTtcclxuICAgIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IEZhc3RHbG9iO1xyXG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5jb25zdCB7IFJlYWRhYmxlIH0gPSByZXF1aXJlKCdzdHJlYW0nKTtcbmNvbnN0IHN5c1BhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5jb25zdCB7IHByb21pc2lmeSB9ID0gcmVxdWlyZSgndXRpbCcpO1xuY29uc3QgcGljb21hdGNoID0gcmVxdWlyZSgncGljb21hdGNoJyk7XG5cbmNvbnN0IHJlYWRkaXIgPSBwcm9taXNpZnkoZnMucmVhZGRpcik7XG5jb25zdCBzdGF0ID0gcHJvbWlzaWZ5KGZzLnN0YXQpO1xuY29uc3QgbHN0YXQgPSBwcm9taXNpZnkoZnMubHN0YXQpO1xuY29uc3QgcmVhbHBhdGggPSBwcm9taXNpZnkoZnMucmVhbHBhdGgpO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEVudHJ5SW5mb1xuICogQHByb3BlcnR5IHtTdHJpbmd9IHBhdGhcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBmdWxsUGF0aFxuICogQHByb3BlcnR5IHtmcy5TdGF0cz19IHN0YXRzXG4gKiBAcHJvcGVydHkge2ZzLkRpcmVudD19IGRpcmVudFxuICogQHByb3BlcnR5IHtTdHJpbmd9IGJhc2VuYW1lXG4gKi9cblxuY29uc3QgQkFORyA9ICchJztcbmNvbnN0IFJFQ1VSU0lWRV9FUlJPUl9DT0RFID0gJ1JFQURESVJQX1JFQ1VSU0lWRV9FUlJPUic7XG5jb25zdCBOT1JNQUxfRkxPV19FUlJPUlMgPSBuZXcgU2V0KFsnRU5PRU5UJywgJ0VQRVJNJywgJ0VBQ0NFUycsICdFTE9PUCcsIFJFQ1VSU0lWRV9FUlJPUl9DT0RFXSk7XG5jb25zdCBGSUxFX1RZUEUgPSAnZmlsZXMnO1xuY29uc3QgRElSX1RZUEUgPSAnZGlyZWN0b3JpZXMnO1xuY29uc3QgRklMRV9ESVJfVFlQRSA9ICdmaWxlc19kaXJlY3Rvcmllcyc7XG5jb25zdCBFVkVSWVRISU5HX1RZUEUgPSAnYWxsJztcbmNvbnN0IEFMTF9UWVBFUyA9IFtGSUxFX1RZUEUsIERJUl9UWVBFLCBGSUxFX0RJUl9UWVBFLCBFVkVSWVRISU5HX1RZUEVdO1xuXG5jb25zdCBpc05vcm1hbEZsb3dFcnJvciA9IGVycm9yID0+IE5PUk1BTF9GTE9XX0VSUk9SUy5oYXMoZXJyb3IuY29kZSk7XG5jb25zdCBbbWFqLCBtaW5dID0gcHJvY2Vzcy52ZXJzaW9ucy5ub2RlLnNwbGl0KCcuJykuc2xpY2UoMCwgMikubWFwKG4gPT4gTnVtYmVyLnBhcnNlSW50KG4sIDEwKSk7XG5jb25zdCB3YW50QmlnaW50RnNTdGF0cyA9IHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicgJiYgKG1haiA+IDEwIHx8IChtYWogPT09IDEwICYmIG1pbiA+PSA1KSk7XG5cbmNvbnN0IG5vcm1hbGl6ZUZpbHRlciA9IGZpbHRlciA9PiB7XG4gIGlmIChmaWx0ZXIgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICBpZiAodHlwZW9mIGZpbHRlciA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGZpbHRlcjtcblxuICBpZiAodHlwZW9mIGZpbHRlciA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBnbG9iID0gcGljb21hdGNoKGZpbHRlci50cmltKCkpO1xuICAgIHJldHVybiBlbnRyeSA9PiBnbG9iKGVudHJ5LmJhc2VuYW1lKTtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KGZpbHRlcikpIHtcbiAgICBjb25zdCBwb3NpdGl2ZSA9IFtdO1xuICAgIGNvbnN0IG5lZ2F0aXZlID0gW107XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGZpbHRlcikge1xuICAgICAgY29uc3QgdHJpbW1lZCA9IGl0ZW0udHJpbSgpO1xuICAgICAgaWYgKHRyaW1tZWQuY2hhckF0KDApID09PSBCQU5HKSB7XG4gICAgICAgIG5lZ2F0aXZlLnB1c2gocGljb21hdGNoKHRyaW1tZWQuc2xpY2UoMSkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvc2l0aXZlLnB1c2gocGljb21hdGNoKHRyaW1tZWQpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmVnYXRpdmUubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHBvc2l0aXZlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIGVudHJ5ID0+XG4gICAgICAgICAgcG9zaXRpdmUuc29tZShmID0+IGYoZW50cnkuYmFzZW5hbWUpKSAmJiAhbmVnYXRpdmUuc29tZShmID0+IGYoZW50cnkuYmFzZW5hbWUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlbnRyeSA9PiAhbmVnYXRpdmUuc29tZShmID0+IGYoZW50cnkuYmFzZW5hbWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIGVudHJ5ID0+IHBvc2l0aXZlLnNvbWUoZiA9PiBmKGVudHJ5LmJhc2VuYW1lKSk7XG4gIH1cbn07XG5cbmNsYXNzIFJlYWRkaXJwU3RyZWFtIGV4dGVuZHMgUmVhZGFibGUge1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRPcHRpb25zKCkge1xuICAgIHJldHVybiB7XG4gICAgICByb290OiAnLicsXG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAgICAgZmlsZUZpbHRlcjogKHBhdGgpID0+IHRydWUsXG4gICAgICBkaXJlY3RvcnlGaWx0ZXI6IChwYXRoKSA9PiB0cnVlLFxuICAgICAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAgICAgdHlwZTogRklMRV9UWVBFLFxuICAgICAgbHN0YXQ6IGZhbHNlLFxuICAgICAgZGVwdGg6IDIxNDc0ODM2NDgsXG4gICAgICBhbHdheXNTdGF0OiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcih7XG4gICAgICBvYmplY3RNb2RlOiB0cnVlLFxuICAgICAgYXV0b0Rlc3Ryb3k6IHRydWUsXG4gICAgICBoaWdoV2F0ZXJNYXJrOiBvcHRpb25zLmhpZ2hXYXRlck1hcmsgfHwgNDA5NlxuICAgIH0pO1xuICAgIGNvbnN0IG9wdHMgPSB7IC4uLlJlYWRkaXJwU3RyZWFtLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zIH07XG4gICAgY29uc3QgeyByb290LCB0eXBlIH0gPSBvcHRzO1xuXG4gICAgdGhpcy5fZmlsZUZpbHRlciA9IG5vcm1hbGl6ZUZpbHRlcihvcHRzLmZpbGVGaWx0ZXIpO1xuICAgIHRoaXMuX2RpcmVjdG9yeUZpbHRlciA9IG5vcm1hbGl6ZUZpbHRlcihvcHRzLmRpcmVjdG9yeUZpbHRlcik7XG5cbiAgICBjb25zdCBzdGF0TWV0aG9kID0gb3B0cy5sc3RhdCA/IGxzdGF0IDogc3RhdDtcbiAgICAvLyBVc2UgYmlnaW50IHN0YXRzIGlmIGl0J3Mgd2luZG93cyBhbmQgc3RhdCgpIHN1cHBvcnRzIG9wdGlvbnMgKG5vZGUgMTArKS5cbiAgICBpZiAod2FudEJpZ2ludEZzU3RhdHMpIHtcbiAgICAgIHRoaXMuX3N0YXQgPSBwYXRoID0+IHN0YXRNZXRob2QocGF0aCwgeyBiaWdpbnQ6IHRydWUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3N0YXQgPSBzdGF0TWV0aG9kO1xuICAgIH1cblxuICAgIHRoaXMuX21heERlcHRoID0gb3B0cy5kZXB0aDtcbiAgICB0aGlzLl93YW50c0RpciA9IFtESVJfVFlQRSwgRklMRV9ESVJfVFlQRSwgRVZFUllUSElOR19UWVBFXS5pbmNsdWRlcyh0eXBlKTtcbiAgICB0aGlzLl93YW50c0ZpbGUgPSBbRklMRV9UWVBFLCBGSUxFX0RJUl9UWVBFLCBFVkVSWVRISU5HX1RZUEVdLmluY2x1ZGVzKHR5cGUpO1xuICAgIHRoaXMuX3dhbnRzRXZlcnl0aGluZyA9IHR5cGUgPT09IEVWRVJZVEhJTkdfVFlQRTtcbiAgICB0aGlzLl9yb290ID0gc3lzUGF0aC5yZXNvbHZlKHJvb3QpO1xuICAgIHRoaXMuX2lzRGlyZW50ID0gKCdEaXJlbnQnIGluIGZzKSAmJiAhb3B0cy5hbHdheXNTdGF0O1xuICAgIHRoaXMuX3N0YXRzUHJvcCA9IHRoaXMuX2lzRGlyZW50ID8gJ2RpcmVudCcgOiAnc3RhdHMnO1xuICAgIHRoaXMuX3JkT3B0aW9ucyA9IHsgZW5jb2Rpbmc6ICd1dGY4Jywgd2l0aEZpbGVUeXBlczogdGhpcy5faXNEaXJlbnQgfTtcblxuICAgIC8vIExhdW5jaCBzdHJlYW0gd2l0aCBvbmUgcGFyZW50LCB0aGUgcm9vdCBkaXIuXG4gICAgdGhpcy5wYXJlbnRzID0gW3RoaXMuX2V4cGxvcmVEaXIocm9vdCwgMSldO1xuICAgIHRoaXMucmVhZGluZyA9IGZhbHNlO1xuICAgIHRoaXMucGFyZW50ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgYXN5bmMgX3JlYWQoYmF0Y2gpIHtcbiAgICBpZiAodGhpcy5yZWFkaW5nKSByZXR1cm47XG4gICAgdGhpcy5yZWFkaW5nID0gdHJ1ZTtcblxuICAgIHRyeSB7XG4gICAgICB3aGlsZSAoIXRoaXMuZGVzdHJveWVkICYmIGJhdGNoID4gMCkge1xuICAgICAgICBjb25zdCB7IHBhdGgsIGRlcHRoLCBmaWxlcyA9IFtdIH0gPSB0aGlzLnBhcmVudCB8fCB7fTtcblxuICAgICAgICBpZiAoZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IHNsaWNlID0gZmlsZXMuc3BsaWNlKDAsIGJhdGNoKS5tYXAoZGlyZW50ID0+IHRoaXMuX2Zvcm1hdEVudHJ5KGRpcmVudCwgcGF0aCkpO1xuICAgICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgYXdhaXQgUHJvbWlzZS5hbGwoc2xpY2UpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHJldHVybjtcblxuICAgICAgICAgICAgY29uc3QgZW50cnlUeXBlID0gYXdhaXQgdGhpcy5fZ2V0RW50cnlUeXBlKGVudHJ5KTtcbiAgICAgICAgICAgIGlmIChlbnRyeVR5cGUgPT09ICdkaXJlY3RvcnknICYmIHRoaXMuX2RpcmVjdG9yeUZpbHRlcihlbnRyeSkpIHtcbiAgICAgICAgICAgICAgaWYgKGRlcHRoIDw9IHRoaXMuX21heERlcHRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRzLnB1c2godGhpcy5fZXhwbG9yZURpcihlbnRyeS5mdWxsUGF0aCwgZGVwdGggKyAxKSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAodGhpcy5fd2FudHNEaXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2goZW50cnkpO1xuICAgICAgICAgICAgICAgIGJhdGNoLS07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKGVudHJ5VHlwZSA9PT0gJ2ZpbGUnIHx8IHRoaXMuX2luY2x1ZGVBc0ZpbGUoZW50cnkpKSAmJiB0aGlzLl9maWxlRmlsdGVyKGVudHJ5KSkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5fd2FudHNGaWxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgICAgICBiYXRjaC0tO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50cy5wb3AoKTtcbiAgICAgICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICAgICAgdGhpcy5wdXNoKG51bGwpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucGFyZW50ID0gYXdhaXQgcGFyZW50O1xuICAgICAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCkgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZGVzdHJveShlcnJvcik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMucmVhZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIF9leHBsb3JlRGlyKHBhdGgsIGRlcHRoKSB7XG4gICAgbGV0IGZpbGVzO1xuICAgIHRyeSB7XG4gICAgICBmaWxlcyA9IGF3YWl0IHJlYWRkaXIocGF0aCwgdGhpcy5fcmRPcHRpb25zKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5fb25FcnJvcihlcnJvcik7XG4gICAgfVxuICAgIHJldHVybiB7IGZpbGVzLCBkZXB0aCwgcGF0aCB9O1xuICB9XG5cbiAgYXN5bmMgX2Zvcm1hdEVudHJ5KGRpcmVudCwgcGF0aCkge1xuICAgIGxldCBlbnRyeTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYmFzZW5hbWUgPSB0aGlzLl9pc0RpcmVudCA/IGRpcmVudC5uYW1lIDogZGlyZW50O1xuICAgICAgY29uc3QgZnVsbFBhdGggPSBzeXNQYXRoLnJlc29sdmUoc3lzUGF0aC5qb2luKHBhdGgsIGJhc2VuYW1lKSk7XG4gICAgICBlbnRyeSA9IHsgcGF0aDogc3lzUGF0aC5yZWxhdGl2ZSh0aGlzLl9yb290LCBmdWxsUGF0aCksIGZ1bGxQYXRoLCBiYXNlbmFtZSB9O1xuICAgICAgZW50cnlbdGhpcy5fc3RhdHNQcm9wXSA9IHRoaXMuX2lzRGlyZW50ID8gZGlyZW50IDogYXdhaXQgdGhpcy5fc3RhdChmdWxsUGF0aCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLl9vbkVycm9yKGVycik7XG4gICAgfVxuICAgIHJldHVybiBlbnRyeTtcbiAgfVxuXG4gIF9vbkVycm9yKGVycikge1xuICAgIGlmIChpc05vcm1hbEZsb3dFcnJvcihlcnIpICYmICF0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgdGhpcy5lbWl0KCd3YXJuJywgZXJyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZXN0cm95KGVycik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgX2dldEVudHJ5VHlwZShlbnRyeSkge1xuICAgIC8vIGVudHJ5IG1heSBiZSB1bmRlZmluZWQsIGJlY2F1c2UgYSB3YXJuaW5nIG9yIGFuIGVycm9yIHdlcmUgZW1pdHRlZFxuICAgIC8vIGFuZCB0aGUgc3RhdHNQcm9wIGlzIHVuZGVmaW5lZFxuICAgIGNvbnN0IHN0YXRzID0gZW50cnkgJiYgZW50cnlbdGhpcy5fc3RhdHNQcm9wXTtcbiAgICBpZiAoIXN0YXRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzdGF0cy5pc0ZpbGUoKSkge1xuICAgICAgcmV0dXJuICdmaWxlJztcbiAgICB9XG4gICAgaWYgKHN0YXRzLmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgIHJldHVybiAnZGlyZWN0b3J5JztcbiAgICB9XG4gICAgaWYgKHN0YXRzICYmIHN0YXRzLmlzU3ltYm9saWNMaW5rKCkpIHtcbiAgICAgIGNvbnN0IGZ1bGwgPSBlbnRyeS5mdWxsUGF0aDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGVudHJ5UmVhbFBhdGggPSBhd2FpdCByZWFscGF0aChmdWxsKTtcbiAgICAgICAgY29uc3QgZW50cnlSZWFsUGF0aFN0YXRzID0gYXdhaXQgbHN0YXQoZW50cnlSZWFsUGF0aCk7XG4gICAgICAgIGlmIChlbnRyeVJlYWxQYXRoU3RhdHMuaXNGaWxlKCkpIHtcbiAgICAgICAgICByZXR1cm4gJ2ZpbGUnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbnRyeVJlYWxQYXRoU3RhdHMuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICAgIGNvbnN0IGxlbiA9IGVudHJ5UmVhbFBhdGgubGVuZ3RoO1xuICAgICAgICAgIGlmIChmdWxsLnN0YXJ0c1dpdGgoZW50cnlSZWFsUGF0aCkgJiYgZnVsbC5zdWJzdHIobGVuLCAxKSA9PT0gc3lzUGF0aC5zZXApIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3Vyc2l2ZUVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgICBgQ2lyY3VsYXIgc3ltbGluayBkZXRlY3RlZDogXCIke2Z1bGx9XCIgcG9pbnRzIHRvIFwiJHtlbnRyeVJlYWxQYXRofVwiYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJlY3Vyc2l2ZUVycm9yLmNvZGUgPSBSRUNVUlNJVkVfRVJST1JfQ09ERTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vbkVycm9yKHJlY3Vyc2l2ZUVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuICdkaXJlY3RvcnknO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB0aGlzLl9vbkVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfaW5jbHVkZUFzRmlsZShlbnRyeSkge1xuICAgIGNvbnN0IHN0YXRzID0gZW50cnkgJiYgZW50cnlbdGhpcy5fc3RhdHNQcm9wXTtcblxuICAgIHJldHVybiBzdGF0cyAmJiB0aGlzLl93YW50c0V2ZXJ5dGhpbmcgJiYgIXN0YXRzLmlzRGlyZWN0b3J5KCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBSZWFkZGlycEFyZ3VtZW50c1xuICogQHByb3BlcnR5IHtGdW5jdGlvbj19IGZpbGVGaWx0ZXJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb249fSBkaXJlY3RvcnlGaWx0ZXJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nPX0gdHlwZVxuICogQHByb3BlcnR5IHtOdW1iZXI9fSBkZXB0aFxuICogQHByb3BlcnR5IHtTdHJpbmc9fSByb290XG4gKiBAcHJvcGVydHkge0Jvb2xlYW49fSBsc3RhdFxuICogQHByb3BlcnR5IHtCb29sZWFuPX0gYmlnaW50XG4gKi9cblxuLyoqXG4gKiBNYWluIGZ1bmN0aW9uIHdoaWNoIGVuZHMgdXAgY2FsbGluZyByZWFkZGlyUmVjIGFuZCByZWFkcyBhbGwgZmlsZXMgYW5kIGRpcmVjdG9yaWVzIGluIGdpdmVuIHJvb3QgcmVjdXJzaXZlbHkuXG4gKiBAcGFyYW0ge1N0cmluZ30gcm9vdCBSb290IGRpcmVjdG9yeVxuICogQHBhcmFtIHtSZWFkZGlycEFyZ3VtZW50cz19IG9wdGlvbnMgT3B0aW9ucyB0byBzcGVjaWZ5IHJvb3QgKHN0YXJ0IGRpcmVjdG9yeSksIGZpbHRlcnMgYW5kIHJlY3Vyc2lvbiBkZXB0aFxuICovXG5jb25zdCByZWFkZGlycCA9IChyb290LCBvcHRpb25zID0ge30pID0+IHtcbiAgbGV0IHR5cGUgPSBvcHRpb25zLmVudHJ5VHlwZSB8fCBvcHRpb25zLnR5cGU7XG4gIGlmICh0eXBlID09PSAnYm90aCcpIHR5cGUgPSBGSUxFX0RJUl9UWVBFOyAvLyBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eVxuICBpZiAodHlwZSkgb3B0aW9ucy50eXBlID0gdHlwZTtcbiAgaWYgKCFyb290KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdyZWFkZGlycDogcm9vdCBhcmd1bWVudCBpcyByZXF1aXJlZC4gVXNhZ2U6IHJlYWRkaXJwKHJvb3QsIG9wdGlvbnMpJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHJvb3QgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncmVhZGRpcnA6IHJvb3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZy4gVXNhZ2U6IHJlYWRkaXJwKHJvb3QsIG9wdGlvbnMpJyk7XG4gIH0gZWxzZSBpZiAodHlwZSAmJiAhQUxMX1RZUEVTLmluY2x1ZGVzKHR5cGUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGByZWFkZGlycDogSW52YWxpZCB0eXBlIHBhc3NlZC4gVXNlIG9uZSBvZiAke0FMTF9UWVBFUy5qb2luKCcsICcpfWApO1xuICB9XG5cbiAgb3B0aW9ucy5yb290ID0gcm9vdDtcbiAgcmV0dXJuIG5ldyBSZWFkZGlycFN0cmVhbShvcHRpb25zKTtcbn07XG5cbmNvbnN0IHJlYWRkaXJwUHJvbWlzZSA9IChyb290LCBvcHRpb25zID0ge30pID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBmaWxlcyA9IFtdO1xuICAgIHJlYWRkaXJwKHJvb3QsIG9wdGlvbnMpXG4gICAgICAub24oJ2RhdGEnLCBlbnRyeSA9PiBmaWxlcy5wdXNoKGVudHJ5KSlcbiAgICAgIC5vbignZW5kJywgKCkgPT4gcmVzb2x2ZShmaWxlcykpXG4gICAgICAub24oJ2Vycm9yJywgZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gIH0pO1xufTtcblxucmVhZGRpcnAucHJvbWlzZSA9IHJlYWRkaXJwUHJvbWlzZTtcbnJlYWRkaXJwLlJlYWRkaXJwU3RyZWFtID0gUmVhZGRpcnBTdHJlYW07XG5yZWFkZGlycC5kZWZhdWx0ID0gcmVhZGRpcnA7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVhZGRpcnA7XG4iLCAiLyohXG4gKiBub3JtYWxpemUtcGF0aCA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvbm9ybWFsaXplLXBhdGg+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTgsIEpvbiBTY2hsaW5rZXJ0LlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocGF0aCwgc3RyaXBUcmFpbGluZykge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhwZWN0ZWQgcGF0aCB0byBiZSBhIHN0cmluZycpO1xuICB9XG5cbiAgaWYgKHBhdGggPT09ICdcXFxcJyB8fCBwYXRoID09PSAnLycpIHJldHVybiAnLyc7XG5cbiAgdmFyIGxlbiA9IHBhdGgubGVuZ3RoO1xuICBpZiAobGVuIDw9IDEpIHJldHVybiBwYXRoO1xuXG4gIC8vIGVuc3VyZSB0aGF0IHdpbjMyIG5hbWVzcGFjZXMgaGFzIHR3byBsZWFkaW5nIHNsYXNoZXMsIHNvIHRoYXQgdGhlIHBhdGggaXNcbiAgLy8gaGFuZGxlZCBwcm9wZXJseSBieSB0aGUgd2luMzIgdmVyc2lvbiBvZiBwYXRoLnBhcnNlKCkgYWZ0ZXIgYmVpbmcgbm9ybWFsaXplZFxuICAvLyBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9saWJyYXJ5L3dpbmRvd3MvZGVza3RvcC9hYTM2NTI0Nyh2PXZzLjg1KS5hc3B4I25hbWVzcGFjZXNcbiAgdmFyIHByZWZpeCA9ICcnO1xuICBpZiAobGVuID4gNCAmJiBwYXRoWzNdID09PSAnXFxcXCcpIHtcbiAgICB2YXIgY2ggPSBwYXRoWzJdO1xuICAgIGlmICgoY2ggPT09ICc/JyB8fCBjaCA9PT0gJy4nKSAmJiBwYXRoLnNsaWNlKDAsIDIpID09PSAnXFxcXFxcXFwnKSB7XG4gICAgICBwYXRoID0gcGF0aC5zbGljZSgyKTtcbiAgICAgIHByZWZpeCA9ICcvLyc7XG4gICAgfVxuICB9XG5cbiAgdmFyIHNlZ3MgPSBwYXRoLnNwbGl0KC9bL1xcXFxdKy8pO1xuICBpZiAoc3RyaXBUcmFpbGluZyAhPT0gZmFsc2UgJiYgc2Vnc1tzZWdzLmxlbmd0aCAtIDFdID09PSAnJykge1xuICAgIHNlZ3MucG9wKCk7XG4gIH1cbiAgcmV0dXJuIHByZWZpeCArIHNlZ3Muam9pbignLycpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuY29uc3QgcGljb21hdGNoID0gcmVxdWlyZSgncGljb21hdGNoJyk7XG5jb25zdCBub3JtYWxpemVQYXRoID0gcmVxdWlyZSgnbm9ybWFsaXplLXBhdGgnKTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7KHRlc3RTdHJpbmc6IHN0cmluZykgPT4gYm9vbGVhbn0gQW55bWF0Y2hGblxuICogQHR5cGVkZWYge3N0cmluZ3xSZWdFeHB8QW55bWF0Y2hGbn0gQW55bWF0Y2hQYXR0ZXJuXG4gKiBAdHlwZWRlZiB7QW55bWF0Y2hQYXR0ZXJufEFueW1hdGNoUGF0dGVybltdfSBBbnltYXRjaE1hdGNoZXJcbiAqL1xuY29uc3QgQkFORyA9ICchJztcbmNvbnN0IERFRkFVTFRfT1BUSU9OUyA9IHtyZXR1cm5JbmRleDogZmFsc2V9O1xuY29uc3QgYXJyaWZ5ID0gKGl0ZW0pID0+IEFycmF5LmlzQXJyYXkoaXRlbSkgPyBpdGVtIDogW2l0ZW1dO1xuXG4vKipcbiAqIEBwYXJhbSB7QW55bWF0Y2hQYXR0ZXJufSBtYXRjaGVyXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHJldHVybnMge0FueW1hdGNoRm59XG4gKi9cbmNvbnN0IGNyZWF0ZVBhdHRlcm4gPSAobWF0Y2hlciwgb3B0aW9ucykgPT4ge1xuICBpZiAodHlwZW9mIG1hdGNoZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF0Y2hlcjtcbiAgfVxuICBpZiAodHlwZW9mIG1hdGNoZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgZ2xvYiA9IHBpY29tYXRjaChtYXRjaGVyLCBvcHRpb25zKTtcbiAgICByZXR1cm4gKHN0cmluZykgPT4gbWF0Y2hlciA9PT0gc3RyaW5nIHx8IGdsb2Ioc3RyaW5nKTtcbiAgfVxuICBpZiAobWF0Y2hlciBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiAoc3RyaW5nKSA9PiBtYXRjaGVyLnRlc3Qoc3RyaW5nKTtcbiAgfVxuICByZXR1cm4gKHN0cmluZykgPT4gZmFsc2U7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8RnVuY3Rpb24+fSBwYXR0ZXJuc1xuICogQHBhcmFtIHtBcnJheTxGdW5jdGlvbj59IG5lZ1BhdHRlcm5zXG4gKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gYXJnc1xuICogQHBhcmFtIHtCb29sZWFufSByZXR1cm5JbmRleFxuICogQHJldHVybnMge2Jvb2xlYW58bnVtYmVyfVxuICovXG5jb25zdCBtYXRjaFBhdHRlcm5zID0gKHBhdHRlcm5zLCBuZWdQYXR0ZXJucywgYXJncywgcmV0dXJuSW5kZXgpID0+IHtcbiAgY29uc3QgaXNMaXN0ID0gQXJyYXkuaXNBcnJheShhcmdzKTtcbiAgY29uc3QgX3BhdGggPSBpc0xpc3QgPyBhcmdzWzBdIDogYXJncztcbiAgaWYgKCFpc0xpc3QgJiYgdHlwZW9mIF9wYXRoICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FueW1hdGNoOiBzZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZzogZ290ICcgK1xuICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKF9wYXRoKSlcbiAgfVxuICBjb25zdCBwYXRoID0gbm9ybWFsaXplUGF0aChfcGF0aCwgZmFsc2UpO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBuZWdQYXR0ZXJucy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBuZ2xvYiA9IG5lZ1BhdHRlcm5zW2luZGV4XTtcbiAgICBpZiAobmdsb2IocGF0aCkpIHtcbiAgICAgIHJldHVybiByZXR1cm5JbmRleCA/IC0xIDogZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgYXBwbGllZCA9IGlzTGlzdCAmJiBbcGF0aF0uY29uY2F0KGFyZ3Muc2xpY2UoMSkpO1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGF0dGVybnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgcGF0dGVybiA9IHBhdHRlcm5zW2luZGV4XTtcbiAgICBpZiAoaXNMaXN0ID8gcGF0dGVybiguLi5hcHBsaWVkKSA6IHBhdHRlcm4ocGF0aCkpIHtcbiAgICAgIHJldHVybiByZXR1cm5JbmRleCA/IGluZGV4IDogdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmV0dXJuSW5kZXggPyAtMSA6IGZhbHNlO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge0FueW1hdGNoTWF0Y2hlcn0gbWF0Y2hlcnNcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSB0ZXN0U3RyaW5nXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHJldHVybnMge2Jvb2xlYW58bnVtYmVyfEZ1bmN0aW9ufVxuICovXG5jb25zdCBhbnltYXRjaCA9IChtYXRjaGVycywgdGVzdFN0cmluZywgb3B0aW9ucyA9IERFRkFVTFRfT1BUSU9OUykgPT4ge1xuICBpZiAobWF0Y2hlcnMgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FueW1hdGNoOiBzcGVjaWZ5IGZpcnN0IGFyZ3VtZW50Jyk7XG4gIH1cbiAgY29uc3Qgb3B0cyA9IHR5cGVvZiBvcHRpb25zID09PSAnYm9vbGVhbicgPyB7cmV0dXJuSW5kZXg6IG9wdGlvbnN9IDogb3B0aW9ucztcbiAgY29uc3QgcmV0dXJuSW5kZXggPSBvcHRzLnJldHVybkluZGV4IHx8IGZhbHNlO1xuXG4gIC8vIEVhcmx5IGNhY2hlIGZvciBtYXRjaGVycy5cbiAgY29uc3QgbXRjaGVycyA9IGFycmlmeShtYXRjaGVycyk7XG4gIGNvbnN0IG5lZ2F0ZWRHbG9icyA9IG10Y2hlcnNcbiAgICAuZmlsdGVyKGl0ZW0gPT4gdHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnICYmIGl0ZW0uY2hhckF0KDApID09PSBCQU5HKVxuICAgIC5tYXAoaXRlbSA9PiBpdGVtLnNsaWNlKDEpKVxuICAgIC5tYXAoaXRlbSA9PiBwaWNvbWF0Y2goaXRlbSwgb3B0cykpO1xuICBjb25zdCBwYXR0ZXJucyA9IG10Y2hlcnNcbiAgICAuZmlsdGVyKGl0ZW0gPT4gdHlwZW9mIGl0ZW0gIT09ICdzdHJpbmcnIHx8ICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycgJiYgaXRlbS5jaGFyQXQoMCkgIT09IEJBTkcpKVxuICAgIC5tYXAobWF0Y2hlciA9PiBjcmVhdGVQYXR0ZXJuKG1hdGNoZXIsIG9wdHMpKTtcblxuICBpZiAodGVzdFN0cmluZyA9PSBudWxsKSB7XG4gICAgcmV0dXJuICh0ZXN0U3RyaW5nLCByaSA9IGZhbHNlKSA9PiB7XG4gICAgICBjb25zdCByZXR1cm5JbmRleCA9IHR5cGVvZiByaSA9PT0gJ2Jvb2xlYW4nID8gcmkgOiBmYWxzZTtcbiAgICAgIHJldHVybiBtYXRjaFBhdHRlcm5zKHBhdHRlcm5zLCBuZWdhdGVkR2xvYnMsIHRlc3RTdHJpbmcsIHJldHVybkluZGV4KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWF0Y2hQYXR0ZXJucyhwYXR0ZXJucywgbmVnYXRlZEdsb2JzLCB0ZXN0U3RyaW5nLCByZXR1cm5JbmRleCk7XG59O1xuXG5hbnltYXRjaC5kZWZhdWx0ID0gYW55bWF0Y2g7XG5tb2R1bGUuZXhwb3J0cyA9IGFueW1hdGNoO1xuIiwgIltcblx0XCIzZG1cIixcblx0XCIzZHNcIixcblx0XCIzZzJcIixcblx0XCIzZ3BcIixcblx0XCI3elwiLFxuXHRcImFcIixcblx0XCJhYWNcIixcblx0XCJhZHBcIixcblx0XCJhaVwiLFxuXHRcImFpZlwiLFxuXHRcImFpZmZcIixcblx0XCJhbHpcIixcblx0XCJhcGVcIixcblx0XCJhcGtcIixcblx0XCJhcHBpbWFnZVwiLFxuXHRcImFyXCIsXG5cdFwiYXJqXCIsXG5cdFwiYXNmXCIsXG5cdFwiYXVcIixcblx0XCJhdmlcIixcblx0XCJiYWtcIixcblx0XCJiYW1sXCIsXG5cdFwiYmhcIixcblx0XCJiaW5cIixcblx0XCJia1wiLFxuXHRcImJtcFwiLFxuXHRcImJ0aWZcIixcblx0XCJiejJcIixcblx0XCJiemlwMlwiLFxuXHRcImNhYlwiLFxuXHRcImNhZlwiLFxuXHRcImNnbVwiLFxuXHRcImNsYXNzXCIsXG5cdFwiY214XCIsXG5cdFwiY3Bpb1wiLFxuXHRcImNyMlwiLFxuXHRcImN1clwiLFxuXHRcImRhdFwiLFxuXHRcImRjbVwiLFxuXHRcImRlYlwiLFxuXHRcImRleFwiLFxuXHRcImRqdnVcIixcblx0XCJkbGxcIixcblx0XCJkbWdcIixcblx0XCJkbmdcIixcblx0XCJkb2NcIixcblx0XCJkb2NtXCIsXG5cdFwiZG9jeFwiLFxuXHRcImRvdFwiLFxuXHRcImRvdG1cIixcblx0XCJkcmFcIixcblx0XCJEU19TdG9yZVwiLFxuXHRcImRza1wiLFxuXHRcImR0c1wiLFxuXHRcImR0c2hkXCIsXG5cdFwiZHZiXCIsXG5cdFwiZHdnXCIsXG5cdFwiZHhmXCIsXG5cdFwiZWNlbHA0ODAwXCIsXG5cdFwiZWNlbHA3NDcwXCIsXG5cdFwiZWNlbHA5NjAwXCIsXG5cdFwiZWdnXCIsXG5cdFwiZW9sXCIsXG5cdFwiZW90XCIsXG5cdFwiZXB1YlwiLFxuXHRcImV4ZVwiLFxuXHRcImY0dlwiLFxuXHRcImZic1wiLFxuXHRcImZoXCIsXG5cdFwiZmxhXCIsXG5cdFwiZmxhY1wiLFxuXHRcImZsYXRwYWtcIixcblx0XCJmbGlcIixcblx0XCJmbHZcIixcblx0XCJmcHhcIixcblx0XCJmc3RcIixcblx0XCJmdnRcIixcblx0XCJnM1wiLFxuXHRcImdoXCIsXG5cdFwiZ2lmXCIsXG5cdFwiZ3JhZmZsZVwiLFxuXHRcImd6XCIsXG5cdFwiZ3ppcFwiLFxuXHRcImgyNjFcIixcblx0XCJoMjYzXCIsXG5cdFwiaDI2NFwiLFxuXHRcImljbnNcIixcblx0XCJpY29cIixcblx0XCJpZWZcIixcblx0XCJpbWdcIixcblx0XCJpcGFcIixcblx0XCJpc29cIixcblx0XCJqYXJcIixcblx0XCJqcGVnXCIsXG5cdFwianBnXCIsXG5cdFwianBndlwiLFxuXHRcImpwbVwiLFxuXHRcImp4clwiLFxuXHRcImtleVwiLFxuXHRcImt0eFwiLFxuXHRcImxoYVwiLFxuXHRcImxpYlwiLFxuXHRcImx2cFwiLFxuXHRcImx6XCIsXG5cdFwibHpoXCIsXG5cdFwibHptYVwiLFxuXHRcImx6b1wiLFxuXHRcIm0zdVwiLFxuXHRcIm00YVwiLFxuXHRcIm00dlwiLFxuXHRcIm1hclwiLFxuXHRcIm1kaVwiLFxuXHRcIm1odFwiLFxuXHRcIm1pZFwiLFxuXHRcIm1pZGlcIixcblx0XCJtajJcIixcblx0XCJta2FcIixcblx0XCJta3ZcIixcblx0XCJtbXJcIixcblx0XCJtbmdcIixcblx0XCJtb2JpXCIsXG5cdFwibW92XCIsXG5cdFwibW92aWVcIixcblx0XCJtcDNcIixcblx0XCJtcDRcIixcblx0XCJtcDRhXCIsXG5cdFwibXBlZ1wiLFxuXHRcIm1wZ1wiLFxuXHRcIm1wZ2FcIixcblx0XCJteHVcIixcblx0XCJuZWZcIixcblx0XCJucHhcIixcblx0XCJudW1iZXJzXCIsXG5cdFwibnVwa2dcIixcblx0XCJvXCIsXG5cdFwib2RwXCIsXG5cdFwib2RzXCIsXG5cdFwib2R0XCIsXG5cdFwib2dhXCIsXG5cdFwib2dnXCIsXG5cdFwib2d2XCIsXG5cdFwib3RmXCIsXG5cdFwib3R0XCIsXG5cdFwicGFnZXNcIixcblx0XCJwYm1cIixcblx0XCJwY3hcIixcblx0XCJwZGJcIixcblx0XCJwZGZcIixcblx0XCJwZWFcIixcblx0XCJwZ21cIixcblx0XCJwaWNcIixcblx0XCJwbmdcIixcblx0XCJwbm1cIixcblx0XCJwb3RcIixcblx0XCJwb3RtXCIsXG5cdFwicG90eFwiLFxuXHRcInBwYVwiLFxuXHRcInBwYW1cIixcblx0XCJwcG1cIixcblx0XCJwcHNcIixcblx0XCJwcHNtXCIsXG5cdFwicHBzeFwiLFxuXHRcInBwdFwiLFxuXHRcInBwdG1cIixcblx0XCJwcHR4XCIsXG5cdFwicHNkXCIsXG5cdFwicHlhXCIsXG5cdFwicHljXCIsXG5cdFwicHlvXCIsXG5cdFwicHl2XCIsXG5cdFwicXRcIixcblx0XCJyYXJcIixcblx0XCJyYXNcIixcblx0XCJyYXdcIixcblx0XCJyZXNvdXJjZXNcIixcblx0XCJyZ2JcIixcblx0XCJyaXBcIixcblx0XCJybGNcIixcblx0XCJybWZcIixcblx0XCJybXZiXCIsXG5cdFwicnBtXCIsXG5cdFwicnRmXCIsXG5cdFwicnpcIixcblx0XCJzM21cIixcblx0XCJzN3pcIixcblx0XCJzY3B0XCIsXG5cdFwic2dpXCIsXG5cdFwic2hhclwiLFxuXHRcInNuYXBcIixcblx0XCJzaWxcIixcblx0XCJza2V0Y2hcIixcblx0XCJzbGtcIixcblx0XCJzbXZcIixcblx0XCJzbmtcIixcblx0XCJzb1wiLFxuXHRcInN0bFwiLFxuXHRcInN1b1wiLFxuXHRcInN1YlwiLFxuXHRcInN3ZlwiLFxuXHRcInRhclwiLFxuXHRcInRielwiLFxuXHRcInRiejJcIixcblx0XCJ0Z2FcIixcblx0XCJ0Z3pcIixcblx0XCJ0aG14XCIsXG5cdFwidGlmXCIsXG5cdFwidGlmZlwiLFxuXHRcInRselwiLFxuXHRcInR0Y1wiLFxuXHRcInR0ZlwiLFxuXHRcInR4elwiLFxuXHRcInVkZlwiLFxuXHRcInV2aFwiLFxuXHRcInV2aVwiLFxuXHRcInV2bVwiLFxuXHRcInV2cFwiLFxuXHRcInV2c1wiLFxuXHRcInV2dVwiLFxuXHRcInZpdlwiLFxuXHRcInZvYlwiLFxuXHRcIndhclwiLFxuXHRcIndhdlwiLFxuXHRcIndheFwiLFxuXHRcIndibXBcIixcblx0XCJ3ZHBcIixcblx0XCJ3ZWJhXCIsXG5cdFwid2VibVwiLFxuXHRcIndlYnBcIixcblx0XCJ3aGxcIixcblx0XCJ3aW1cIixcblx0XCJ3bVwiLFxuXHRcIndtYVwiLFxuXHRcIndtdlwiLFxuXHRcIndteFwiLFxuXHRcIndvZmZcIixcblx0XCJ3b2ZmMlwiLFxuXHRcIndybVwiLFxuXHRcInd2eFwiLFxuXHRcInhibVwiLFxuXHRcInhpZlwiLFxuXHRcInhsYVwiLFxuXHRcInhsYW1cIixcblx0XCJ4bHNcIixcblx0XCJ4bHNiXCIsXG5cdFwieGxzbVwiLFxuXHRcInhsc3hcIixcblx0XCJ4bHRcIixcblx0XCJ4bHRtXCIsXG5cdFwieGx0eFwiLFxuXHRcInhtXCIsXG5cdFwieG1pbmRcIixcblx0XCJ4cGlcIixcblx0XCJ4cG1cIixcblx0XCJ4d2RcIixcblx0XCJ4elwiLFxuXHRcInpcIixcblx0XCJ6aXBcIixcblx0XCJ6aXB4XCJcbl1cbiIsICJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vYmluYXJ5LWV4dGVuc2lvbnMuanNvbicpO1xuIiwgIid1c2Ugc3RyaWN0JztcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5jb25zdCBiaW5hcnlFeHRlbnNpb25zID0gcmVxdWlyZSgnYmluYXJ5LWV4dGVuc2lvbnMnKTtcblxuY29uc3QgZXh0ZW5zaW9ucyA9IG5ldyBTZXQoYmluYXJ5RXh0ZW5zaW9ucyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZmlsZVBhdGggPT4gZXh0ZW5zaW9ucy5oYXMocGF0aC5leHRuYW1lKGZpbGVQYXRoKS5zbGljZSgxKS50b0xvd2VyQ2FzZSgpKTtcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHtzZXB9ID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3Qge3BsYXRmb3JtfSA9IHByb2Nlc3M7XG5jb25zdCBvcyA9IHJlcXVpcmUoJ29zJyk7XG5cbmV4cG9ydHMuRVZfQUxMID0gJ2FsbCc7XG5leHBvcnRzLkVWX1JFQURZID0gJ3JlYWR5JztcbmV4cG9ydHMuRVZfQUREID0gJ2FkZCc7XG5leHBvcnRzLkVWX0NIQU5HRSA9ICdjaGFuZ2UnO1xuZXhwb3J0cy5FVl9BRERfRElSID0gJ2FkZERpcic7XG5leHBvcnRzLkVWX1VOTElOSyA9ICd1bmxpbmsnO1xuZXhwb3J0cy5FVl9VTkxJTktfRElSID0gJ3VubGlua0Rpcic7XG5leHBvcnRzLkVWX1JBVyA9ICdyYXcnO1xuZXhwb3J0cy5FVl9FUlJPUiA9ICdlcnJvcic7XG5cbmV4cG9ydHMuU1RSX0RBVEEgPSAnZGF0YSc7XG5leHBvcnRzLlNUUl9FTkQgPSAnZW5kJztcbmV4cG9ydHMuU1RSX0NMT1NFID0gJ2Nsb3NlJztcblxuZXhwb3J0cy5GU0VWRU5UX0NSRUFURUQgPSAnY3JlYXRlZCc7XG5leHBvcnRzLkZTRVZFTlRfTU9ESUZJRUQgPSAnbW9kaWZpZWQnO1xuZXhwb3J0cy5GU0VWRU5UX0RFTEVURUQgPSAnZGVsZXRlZCc7XG5leHBvcnRzLkZTRVZFTlRfTU9WRUQgPSAnbW92ZWQnO1xuZXhwb3J0cy5GU0VWRU5UX0NMT05FRCA9ICdjbG9uZWQnO1xuZXhwb3J0cy5GU0VWRU5UX1VOS05PV04gPSAndW5rbm93bic7XG5leHBvcnRzLkZTRVZFTlRfVFlQRV9GSUxFID0gJ2ZpbGUnO1xuZXhwb3J0cy5GU0VWRU5UX1RZUEVfRElSRUNUT1JZID0gJ2RpcmVjdG9yeSc7XG5leHBvcnRzLkZTRVZFTlRfVFlQRV9TWU1MSU5LID0gJ3N5bWxpbmsnO1xuXG5leHBvcnRzLktFWV9MSVNURU5FUlMgPSAnbGlzdGVuZXJzJztcbmV4cG9ydHMuS0VZX0VSUiA9ICdlcnJIYW5kbGVycyc7XG5leHBvcnRzLktFWV9SQVcgPSAncmF3RW1pdHRlcnMnO1xuZXhwb3J0cy5IQU5ETEVSX0tFWVMgPSBbZXhwb3J0cy5LRVlfTElTVEVORVJTLCBleHBvcnRzLktFWV9FUlIsIGV4cG9ydHMuS0VZX1JBV107XG5cbmV4cG9ydHMuRE9UX1NMQVNIID0gYC4ke3NlcH1gO1xuXG5leHBvcnRzLkJBQ0tfU0xBU0hfUkUgPSAvXFxcXC9nO1xuZXhwb3J0cy5ET1VCTEVfU0xBU0hfUkUgPSAvXFwvXFwvLztcbmV4cG9ydHMuU0xBU0hfT1JfQkFDS19TTEFTSF9SRSA9IC9bL1xcXFxdLztcbmV4cG9ydHMuRE9UX1JFID0gL1xcLi4qXFwuKHN3W3B4XSkkfH4kfFxcLnN1YmwuKlxcLnRtcC87XG5leHBvcnRzLlJFUExBQ0VSX1JFID0gL15cXC5bL1xcXFxdLztcblxuZXhwb3J0cy5TTEFTSCA9ICcvJztcbmV4cG9ydHMuU0xBU0hfU0xBU0ggPSAnLy8nO1xuZXhwb3J0cy5CUkFDRV9TVEFSVCA9ICd7JztcbmV4cG9ydHMuQkFORyA9ICchJztcbmV4cG9ydHMuT05FX0RPVCA9ICcuJztcbmV4cG9ydHMuVFdPX0RPVFMgPSAnLi4nO1xuZXhwb3J0cy5TVEFSID0gJyonO1xuZXhwb3J0cy5HTE9CU1RBUiA9ICcqKic7XG5leHBvcnRzLlJPT1RfR0xPQlNUQVIgPSAnLyoqLyonO1xuZXhwb3J0cy5TTEFTSF9HTE9CU1RBUiA9ICcvKionO1xuZXhwb3J0cy5ESVJfU1VGRklYID0gJ0Rpcic7XG5leHBvcnRzLkFOWU1BVENIX09QVFMgPSB7ZG90OiB0cnVlfTtcbmV4cG9ydHMuU1RSSU5HX1RZUEUgPSAnc3RyaW5nJztcbmV4cG9ydHMuRlVOQ1RJT05fVFlQRSA9ICdmdW5jdGlvbic7XG5leHBvcnRzLkVNUFRZX1NUUiA9ICcnO1xuZXhwb3J0cy5FTVBUWV9GTiA9ICgpID0+IHt9O1xuZXhwb3J0cy5JREVOVElUWV9GTiA9IHZhbCA9PiB2YWw7XG5cbmV4cG9ydHMuaXNXaW5kb3dzID0gcGxhdGZvcm0gPT09ICd3aW4zMic7XG5leHBvcnRzLmlzTWFjb3MgPSBwbGF0Zm9ybSA9PT0gJ2Rhcndpbic7XG5leHBvcnRzLmlzTGludXggPSBwbGF0Zm9ybSA9PT0gJ2xpbnV4JztcbmV4cG9ydHMuaXNJQk1pID0gb3MudHlwZSgpID09PSAnT1M0MDAnO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3Qgc3lzUGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbmNvbnN0IHsgcHJvbWlzaWZ5IH0gPSByZXF1aXJlKCd1dGlsJyk7XG5jb25zdCBpc0JpbmFyeVBhdGggPSByZXF1aXJlKCdpcy1iaW5hcnktcGF0aCcpO1xuY29uc3Qge1xuICBpc1dpbmRvd3MsXG4gIGlzTGludXgsXG4gIEVNUFRZX0ZOLFxuICBFTVBUWV9TVFIsXG4gIEtFWV9MSVNURU5FUlMsXG4gIEtFWV9FUlIsXG4gIEtFWV9SQVcsXG4gIEhBTkRMRVJfS0VZUyxcbiAgRVZfQ0hBTkdFLFxuICBFVl9BREQsXG4gIEVWX0FERF9ESVIsXG4gIEVWX0VSUk9SLFxuICBTVFJfREFUQSxcbiAgU1RSX0VORCxcbiAgQlJBQ0VfU1RBUlQsXG4gIFNUQVJcbn0gPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG5jb25zdCBUSFJPVFRMRV9NT0RFX1dBVENIID0gJ3dhdGNoJztcblxuY29uc3Qgb3BlbiA9IHByb21pc2lmeShmcy5vcGVuKTtcbmNvbnN0IHN0YXQgPSBwcm9taXNpZnkoZnMuc3RhdCk7XG5jb25zdCBsc3RhdCA9IHByb21pc2lmeShmcy5sc3RhdCk7XG5jb25zdCBjbG9zZSA9IHByb21pc2lmeShmcy5jbG9zZSk7XG5jb25zdCBmc3JlYWxwYXRoID0gcHJvbWlzaWZ5KGZzLnJlYWxwYXRoKTtcblxuY29uc3Qgc3RhdE1ldGhvZHMgPSB7IGxzdGF0LCBzdGF0IH07XG5cbi8vIFRPRE86IGVtaXQgZXJyb3JzIHByb3Blcmx5LiBFeGFtcGxlOiBFTUZJTEUgb24gTWFjb3MuXG5jb25zdCBmb3JlYWNoID0gKHZhbCwgZm4pID0+IHtcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIFNldCkge1xuICAgIHZhbC5mb3JFYWNoKGZuKTtcbiAgfSBlbHNlIHtcbiAgICBmbih2YWwpO1xuICB9XG59O1xuXG5jb25zdCBhZGRBbmRDb252ZXJ0ID0gKG1haW4sIHByb3AsIGl0ZW0pID0+IHtcbiAgbGV0IGNvbnRhaW5lciA9IG1haW5bcHJvcF07XG4gIGlmICghKGNvbnRhaW5lciBpbnN0YW5jZW9mIFNldCkpIHtcbiAgICBtYWluW3Byb3BdID0gY29udGFpbmVyID0gbmV3IFNldChbY29udGFpbmVyXSk7XG4gIH1cbiAgY29udGFpbmVyLmFkZChpdGVtKTtcbn07XG5cbmNvbnN0IGNsZWFySXRlbSA9IGNvbnQgPT4ga2V5ID0+IHtcbiAgY29uc3Qgc2V0ID0gY29udFtrZXldO1xuICBpZiAoc2V0IGluc3RhbmNlb2YgU2V0KSB7XG4gICAgc2V0LmNsZWFyKCk7XG4gIH0gZWxzZSB7XG4gICAgZGVsZXRlIGNvbnRba2V5XTtcbiAgfVxufTtcblxuY29uc3QgZGVsRnJvbVNldCA9IChtYWluLCBwcm9wLCBpdGVtKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IG1haW5bcHJvcF07XG4gIGlmIChjb250YWluZXIgaW5zdGFuY2VvZiBTZXQpIHtcbiAgICBjb250YWluZXIuZGVsZXRlKGl0ZW0pO1xuICB9IGVsc2UgaWYgKGNvbnRhaW5lciA9PT0gaXRlbSkge1xuICAgIGRlbGV0ZSBtYWluW3Byb3BdO1xuICB9XG59O1xuXG5jb25zdCBpc0VtcHR5U2V0ID0gKHZhbCkgPT4gdmFsIGluc3RhbmNlb2YgU2V0ID8gdmFsLnNpemUgPT09IDAgOiAhdmFsO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtTdHJpbmd9IFBhdGhcbiAqL1xuXG4vLyBmc193YXRjaCBoZWxwZXJzXG5cbi8vIG9iamVjdCB0byBob2xkIHBlci1wcm9jZXNzIGZzX3dhdGNoIGluc3RhbmNlc1xuLy8gKG1heSBiZSBzaGFyZWQgYWNyb3NzIGNob2tpZGFyIEZTV2F0Y2hlciBpbnN0YW5jZXMpXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gRnNXYXRjaENvbnRhaW5lclxuICogQHByb3BlcnR5IHtTZXR9IGxpc3RlbmVyc1xuICogQHByb3BlcnR5IHtTZXR9IGVyckhhbmRsZXJzXG4gKiBAcHJvcGVydHkge1NldH0gcmF3RW1pdHRlcnNcbiAqIEBwcm9wZXJ0eSB7ZnMuRlNXYXRjaGVyPX0gd2F0Y2hlclxuICogQHByb3BlcnR5IHtCb29sZWFuPX0gd2F0Y2hlclVudXNhYmxlXG4gKi9cblxuLyoqXG4gKiBAdHlwZSB7TWFwPFN0cmluZyxGc1dhdGNoQ29udGFpbmVyPn1cbiAqL1xuY29uc3QgRnNXYXRjaEluc3RhbmNlcyA9IG5ldyBNYXAoKTtcblxuLyoqXG4gKiBJbnN0YW50aWF0ZXMgdGhlIGZzX3dhdGNoIGludGVyZmFjZVxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGggdG8gYmUgd2F0Y2hlZFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgdG8gYmUgcGFzc2VkIHRvIGZzX3dhdGNoXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBtYWluIGV2ZW50IGhhbmRsZXJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVyckhhbmRsZXIgZW1pdHMgaW5mbyBhYm91dCBlcnJvcnNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVtaXRSYXcgZW1pdHMgcmF3IGV2ZW50IGRhdGFcbiAqIEByZXR1cm5zIHtmcy5GU1dhdGNoZXJ9IG5ldyBmc2V2ZW50cyBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBjcmVhdGVGc1dhdGNoSW5zdGFuY2UocGF0aCwgb3B0aW9ucywgbGlzdGVuZXIsIGVyckhhbmRsZXIsIGVtaXRSYXcpIHtcbiAgY29uc3QgaGFuZGxlRXZlbnQgPSAocmF3RXZlbnQsIGV2UGF0aCkgPT4ge1xuICAgIGxpc3RlbmVyKHBhdGgpO1xuICAgIGVtaXRSYXcocmF3RXZlbnQsIGV2UGF0aCwge3dhdGNoZWRQYXRoOiBwYXRofSk7XG5cbiAgICAvLyBlbWl0IGJhc2VkIG9uIGV2ZW50cyBvY2N1cnJpbmcgZm9yIGZpbGVzIGZyb20gYSBkaXJlY3RvcnkncyB3YXRjaGVyIGluXG4gICAgLy8gY2FzZSB0aGUgZmlsZSdzIHdhdGNoZXIgbWlzc2VzIGl0IChhbmQgcmVseSBvbiB0aHJvdHRsaW5nIHRvIGRlLWR1cGUpXG4gICAgaWYgKGV2UGF0aCAmJiBwYXRoICE9PSBldlBhdGgpIHtcbiAgICAgIGZzV2F0Y2hCcm9hZGNhc3QoXG4gICAgICAgIHN5c1BhdGgucmVzb2x2ZShwYXRoLCBldlBhdGgpLCBLRVlfTElTVEVORVJTLCBzeXNQYXRoLmpvaW4ocGF0aCwgZXZQYXRoKVxuICAgICAgKTtcbiAgICB9XG4gIH07XG4gIHRyeSB7XG4gICAgcmV0dXJuIGZzLndhdGNoKHBhdGgsIG9wdGlvbnMsIGhhbmRsZUV2ZW50KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBlcnJIYW5kbGVyKGVycm9yKTtcbiAgfVxufVxuXG4vKipcbiAqIEhlbHBlciBmb3IgcGFzc2luZyBmc193YXRjaCBldmVudCBkYXRhIHRvIGEgY29sbGVjdGlvbiBvZiBsaXN0ZW5lcnNcbiAqIEBwYXJhbSB7UGF0aH0gZnVsbFBhdGggYWJzb2x1dGUgcGF0aCBib3VuZCB0byBmc193YXRjaCBpbnN0YW5jZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgbGlzdGVuZXIgdHlwZVxuICogQHBhcmFtIHsqPX0gdmFsMSBhcmd1bWVudHMgdG8gYmUgcGFzc2VkIHRvIGxpc3RlbmVyc1xuICogQHBhcmFtIHsqPX0gdmFsMlxuICogQHBhcmFtIHsqPX0gdmFsM1xuICovXG5jb25zdCBmc1dhdGNoQnJvYWRjYXN0ID0gKGZ1bGxQYXRoLCB0eXBlLCB2YWwxLCB2YWwyLCB2YWwzKSA9PiB7XG4gIGNvbnN0IGNvbnQgPSBGc1dhdGNoSW5zdGFuY2VzLmdldChmdWxsUGF0aCk7XG4gIGlmICghY29udCkgcmV0dXJuO1xuICBmb3JlYWNoKGNvbnRbdHlwZV0sIChsaXN0ZW5lcikgPT4ge1xuICAgIGxpc3RlbmVyKHZhbDEsIHZhbDIsIHZhbDMpO1xuICB9KTtcbn07XG5cbi8qKlxuICogSW5zdGFudGlhdGVzIHRoZSBmc193YXRjaCBpbnRlcmZhY2Ugb3IgYmluZHMgbGlzdGVuZXJzXG4gKiB0byBhbiBleGlzdGluZyBvbmUgY292ZXJpbmcgdGhlIHNhbWUgZmlsZSBzeXN0ZW0gZW50cnlcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gKiBAcGFyYW0ge1N0cmluZ30gZnVsbFBhdGggYWJzb2x1dGUgcGF0aFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgdG8gYmUgcGFzc2VkIHRvIGZzX3dhdGNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFuZGxlcnMgY29udGFpbmVyIGZvciBldmVudCBsaXN0ZW5lciBmdW5jdGlvbnNcbiAqL1xuY29uc3Qgc2V0RnNXYXRjaExpc3RlbmVyID0gKHBhdGgsIGZ1bGxQYXRoLCBvcHRpb25zLCBoYW5kbGVycykgPT4ge1xuICBjb25zdCB7bGlzdGVuZXIsIGVyckhhbmRsZXIsIHJhd0VtaXR0ZXJ9ID0gaGFuZGxlcnM7XG4gIGxldCBjb250ID0gRnNXYXRjaEluc3RhbmNlcy5nZXQoZnVsbFBhdGgpO1xuXG4gIC8qKiBAdHlwZSB7ZnMuRlNXYXRjaGVyPX0gKi9cbiAgbGV0IHdhdGNoZXI7XG4gIGlmICghb3B0aW9ucy5wZXJzaXN0ZW50KSB7XG4gICAgd2F0Y2hlciA9IGNyZWF0ZUZzV2F0Y2hJbnN0YW5jZShcbiAgICAgIHBhdGgsIG9wdGlvbnMsIGxpc3RlbmVyLCBlcnJIYW5kbGVyLCByYXdFbWl0dGVyXG4gICAgKTtcbiAgICByZXR1cm4gd2F0Y2hlci5jbG9zZS5iaW5kKHdhdGNoZXIpO1xuICB9XG4gIGlmIChjb250KSB7XG4gICAgYWRkQW5kQ29udmVydChjb250LCBLRVlfTElTVEVORVJTLCBsaXN0ZW5lcik7XG4gICAgYWRkQW5kQ29udmVydChjb250LCBLRVlfRVJSLCBlcnJIYW5kbGVyKTtcbiAgICBhZGRBbmRDb252ZXJ0KGNvbnQsIEtFWV9SQVcsIHJhd0VtaXR0ZXIpO1xuICB9IGVsc2Uge1xuICAgIHdhdGNoZXIgPSBjcmVhdGVGc1dhdGNoSW5zdGFuY2UoXG4gICAgICBwYXRoLFxuICAgICAgb3B0aW9ucyxcbiAgICAgIGZzV2F0Y2hCcm9hZGNhc3QuYmluZChudWxsLCBmdWxsUGF0aCwgS0VZX0xJU1RFTkVSUyksXG4gICAgICBlcnJIYW5kbGVyLCAvLyBubyBuZWVkIHRvIHVzZSBicm9hZGNhc3QgaGVyZVxuICAgICAgZnNXYXRjaEJyb2FkY2FzdC5iaW5kKG51bGwsIGZ1bGxQYXRoLCBLRVlfUkFXKVxuICAgICk7XG4gICAgaWYgKCF3YXRjaGVyKSByZXR1cm47XG4gICAgd2F0Y2hlci5vbihFVl9FUlJPUiwgYXN5bmMgKGVycm9yKSA9PiB7XG4gICAgICBjb25zdCBicm9hZGNhc3RFcnIgPSBmc1dhdGNoQnJvYWRjYXN0LmJpbmQobnVsbCwgZnVsbFBhdGgsIEtFWV9FUlIpO1xuICAgICAgY29udC53YXRjaGVyVW51c2FibGUgPSB0cnVlOyAvLyBkb2N1bWVudGVkIHNpbmNlIE5vZGUgMTAuNC4xXG4gICAgICAvLyBXb3JrYXJvdW5kIGZvciBodHRwczovL2dpdGh1Yi5jb20vam95ZW50L25vZGUvaXNzdWVzLzQzMzdcbiAgICAgIGlmIChpc1dpbmRvd3MgJiYgZXJyb3IuY29kZSA9PT0gJ0VQRVJNJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGZkID0gYXdhaXQgb3BlbihwYXRoLCAncicpO1xuICAgICAgICAgIGF3YWl0IGNsb3NlKGZkKTtcbiAgICAgICAgICBicm9hZGNhc3RFcnIoZXJyb3IpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicm9hZGNhc3RFcnIoZXJyb3IpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnQgPSB7XG4gICAgICBsaXN0ZW5lcnM6IGxpc3RlbmVyLFxuICAgICAgZXJySGFuZGxlcnM6IGVyckhhbmRsZXIsXG4gICAgICByYXdFbWl0dGVyczogcmF3RW1pdHRlcixcbiAgICAgIHdhdGNoZXJcbiAgICB9O1xuICAgIEZzV2F0Y2hJbnN0YW5jZXMuc2V0KGZ1bGxQYXRoLCBjb250KTtcbiAgfVxuICAvLyBjb25zdCBpbmRleCA9IGNvbnQubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuXG4gIC8vIHJlbW92ZXMgdGhpcyBpbnN0YW5jZSdzIGxpc3RlbmVycyBhbmQgY2xvc2VzIHRoZSB1bmRlcmx5aW5nIGZzX3dhdGNoXG4gIC8vIGluc3RhbmNlIGlmIHRoZXJlIGFyZSBubyBtb3JlIGxpc3RlbmVycyBsZWZ0XG4gIHJldHVybiAoKSA9PiB7XG4gICAgZGVsRnJvbVNldChjb250LCBLRVlfTElTVEVORVJTLCBsaXN0ZW5lcik7XG4gICAgZGVsRnJvbVNldChjb250LCBLRVlfRVJSLCBlcnJIYW5kbGVyKTtcbiAgICBkZWxGcm9tU2V0KGNvbnQsIEtFWV9SQVcsIHJhd0VtaXR0ZXIpO1xuICAgIGlmIChpc0VtcHR5U2V0KGNvbnQubGlzdGVuZXJzKSkge1xuICAgICAgLy8gQ2hlY2sgdG8gcHJvdGVjdCBhZ2FpbnN0IGlzc3VlIGdoLTczMC5cbiAgICAgIC8vIGlmIChjb250LndhdGNoZXJVbnVzYWJsZSkge1xuICAgICAgY29udC53YXRjaGVyLmNsb3NlKCk7XG4gICAgICAvLyB9XG4gICAgICBGc1dhdGNoSW5zdGFuY2VzLmRlbGV0ZShmdWxsUGF0aCk7XG4gICAgICBIQU5ETEVSX0tFWVMuZm9yRWFjaChjbGVhckl0ZW0oY29udCkpO1xuICAgICAgY29udC53YXRjaGVyID0gdW5kZWZpbmVkO1xuICAgICAgT2JqZWN0LmZyZWV6ZShjb250KTtcbiAgICB9XG4gIH07XG59O1xuXG4vLyBmc193YXRjaEZpbGUgaGVscGVyc1xuXG4vLyBvYmplY3QgdG8gaG9sZCBwZXItcHJvY2VzcyBmc193YXRjaEZpbGUgaW5zdGFuY2VzXG4vLyAobWF5IGJlIHNoYXJlZCBhY3Jvc3MgY2hva2lkYXIgRlNXYXRjaGVyIGluc3RhbmNlcylcbmNvbnN0IEZzV2F0Y2hGaWxlSW5zdGFuY2VzID0gbmV3IE1hcCgpO1xuXG4vKipcbiAqIEluc3RhbnRpYXRlcyB0aGUgZnNfd2F0Y2hGaWxlIGludGVyZmFjZSBvciBiaW5kcyBsaXN0ZW5lcnNcbiAqIHRvIGFuIGV4aXN0aW5nIG9uZSBjb3ZlcmluZyB0aGUgc2FtZSBmaWxlIHN5c3RlbSBlbnRyeVxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGggdG8gYmUgd2F0Y2hlZFxuICogQHBhcmFtIHtTdHJpbmd9IGZ1bGxQYXRoIGFic29sdXRlIHBhdGhcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIG9wdGlvbnMgdG8gYmUgcGFzc2VkIHRvIGZzX3dhdGNoRmlsZVxuICogQHBhcmFtIHtPYmplY3R9IGhhbmRsZXJzIGNvbnRhaW5lciBmb3IgZXZlbnQgbGlzdGVuZXIgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IGNsb3NlclxuICovXG5jb25zdCBzZXRGc1dhdGNoRmlsZUxpc3RlbmVyID0gKHBhdGgsIGZ1bGxQYXRoLCBvcHRpb25zLCBoYW5kbGVycykgPT4ge1xuICBjb25zdCB7bGlzdGVuZXIsIHJhd0VtaXR0ZXJ9ID0gaGFuZGxlcnM7XG4gIGxldCBjb250ID0gRnNXYXRjaEZpbGVJbnN0YW5jZXMuZ2V0KGZ1bGxQYXRoKTtcblxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycywgcHJlZmVyLWRlc3RydWN0dXJpbmcgKi9cbiAgbGV0IGxpc3RlbmVycyA9IG5ldyBTZXQoKTtcbiAgbGV0IHJhd0VtaXR0ZXJzID0gbmV3IFNldCgpO1xuXG4gIGNvbnN0IGNvcHRzID0gY29udCAmJiBjb250Lm9wdGlvbnM7XG4gIGlmIChjb3B0cyAmJiAoY29wdHMucGVyc2lzdGVudCA8IG9wdGlvbnMucGVyc2lzdGVudCB8fCBjb3B0cy5pbnRlcnZhbCA+IG9wdGlvbnMuaW50ZXJ2YWwpKSB7XG4gICAgLy8gXCJVcGdyYWRlXCIgdGhlIHdhdGNoZXIgdG8gcGVyc2lzdGVuY2Ugb3IgYSBxdWlja2VyIGludGVydmFsLlxuICAgIC8vIFRoaXMgY3JlYXRlcyBzb21lIHVubGlrZWx5IGVkZ2UgY2FzZSBpc3N1ZXMgaWYgdGhlIHVzZXIgbWl4ZXNcbiAgICAvLyBzZXR0aW5ncyBpbiBhIHZlcnkgd2VpcmQgd2F5LCBidXQgc29sdmluZyBmb3IgdGhvc2UgY2FzZXNcbiAgICAvLyBkb2Vzbid0IHNlZW0gd29ydGh3aGlsZSBmb3IgdGhlIGFkZGVkIGNvbXBsZXhpdHkuXG4gICAgbGlzdGVuZXJzID0gY29udC5saXN0ZW5lcnM7XG4gICAgcmF3RW1pdHRlcnMgPSBjb250LnJhd0VtaXR0ZXJzO1xuICAgIGZzLnVud2F0Y2hGaWxlKGZ1bGxQYXRoKTtcbiAgICBjb250ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycywgcHJlZmVyLWRlc3RydWN0dXJpbmcgKi9cblxuICBpZiAoY29udCkge1xuICAgIGFkZEFuZENvbnZlcnQoY29udCwgS0VZX0xJU1RFTkVSUywgbGlzdGVuZXIpO1xuICAgIGFkZEFuZENvbnZlcnQoY29udCwgS0VZX1JBVywgcmF3RW1pdHRlcik7XG4gIH0gZWxzZSB7XG4gICAgLy8gVE9ET1xuICAgIC8vIGxpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xuICAgIC8vIHJhd0VtaXR0ZXJzLmFkZChyYXdFbWl0dGVyKTtcbiAgICBjb250ID0ge1xuICAgICAgbGlzdGVuZXJzOiBsaXN0ZW5lcixcbiAgICAgIHJhd0VtaXR0ZXJzOiByYXdFbWl0dGVyLFxuICAgICAgb3B0aW9ucyxcbiAgICAgIHdhdGNoZXI6IGZzLndhdGNoRmlsZShmdWxsUGF0aCwgb3B0aW9ucywgKGN1cnIsIHByZXYpID0+IHtcbiAgICAgICAgZm9yZWFjaChjb250LnJhd0VtaXR0ZXJzLCAocmF3RW1pdHRlcikgPT4ge1xuICAgICAgICAgIHJhd0VtaXR0ZXIoRVZfQ0hBTkdFLCBmdWxsUGF0aCwge2N1cnIsIHByZXZ9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGN1cnJtdGltZSA9IGN1cnIubXRpbWVNcztcbiAgICAgICAgaWYgKGN1cnIuc2l6ZSAhPT0gcHJldi5zaXplIHx8IGN1cnJtdGltZSA+IHByZXYubXRpbWVNcyB8fCBjdXJybXRpbWUgPT09IDApIHtcbiAgICAgICAgICBmb3JlYWNoKGNvbnQubGlzdGVuZXJzLCAobGlzdGVuZXIpID0+IGxpc3RlbmVyKHBhdGgsIGN1cnIpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9O1xuICAgIEZzV2F0Y2hGaWxlSW5zdGFuY2VzLnNldChmdWxsUGF0aCwgY29udCk7XG4gIH1cbiAgLy8gY29uc3QgaW5kZXggPSBjb250Lmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcblxuICAvLyBSZW1vdmVzIHRoaXMgaW5zdGFuY2UncyBsaXN0ZW5lcnMgYW5kIGNsb3NlcyB0aGUgdW5kZXJseWluZyBmc193YXRjaEZpbGVcbiAgLy8gaW5zdGFuY2UgaWYgdGhlcmUgYXJlIG5vIG1vcmUgbGlzdGVuZXJzIGxlZnQuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgZGVsRnJvbVNldChjb250LCBLRVlfTElTVEVORVJTLCBsaXN0ZW5lcik7XG4gICAgZGVsRnJvbVNldChjb250LCBLRVlfUkFXLCByYXdFbWl0dGVyKTtcbiAgICBpZiAoaXNFbXB0eVNldChjb250Lmxpc3RlbmVycykpIHtcbiAgICAgIEZzV2F0Y2hGaWxlSW5zdGFuY2VzLmRlbGV0ZShmdWxsUGF0aCk7XG4gICAgICBmcy51bndhdGNoRmlsZShmdWxsUGF0aCk7XG4gICAgICBjb250Lm9wdGlvbnMgPSBjb250LndhdGNoZXIgPSB1bmRlZmluZWQ7XG4gICAgICBPYmplY3QuZnJlZXplKGNvbnQpO1xuICAgIH1cbiAgfTtcbn07XG5cbi8qKlxuICogQG1peGluXG4gKi9cbmNsYXNzIE5vZGVGc0hhbmRsZXIge1xuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vaW5kZXhcIikuRlNXYXRjaGVyfSBmc1dcbiAqL1xuY29uc3RydWN0b3IoZnNXKSB7XG4gIHRoaXMuZnN3ID0gZnNXO1xuICB0aGlzLl9ib3VuZEhhbmRsZUVycm9yID0gKGVycm9yKSA9PiBmc1cuX2hhbmRsZUVycm9yKGVycm9yKTtcbn1cblxuLyoqXG4gKiBXYXRjaCBmaWxlIGZvciBjaGFuZ2VzIHdpdGggZnNfd2F0Y2hGaWxlIG9yIGZzX3dhdGNoLlxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGggdG8gZmlsZSBvciBkaXJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIG9uIGZzIGNoYW5nZVxuICogQHJldHVybnMge0Z1bmN0aW9ufSBjbG9zZXIgZm9yIHRoZSB3YXRjaGVyIGluc3RhbmNlXG4gKi9cbl93YXRjaFdpdGhOb2RlRnMocGF0aCwgbGlzdGVuZXIpIHtcbiAgY29uc3Qgb3B0cyA9IHRoaXMuZnN3Lm9wdGlvbnM7XG4gIGNvbnN0IGRpcmVjdG9yeSA9IHN5c1BhdGguZGlybmFtZShwYXRoKTtcbiAgY29uc3QgYmFzZW5hbWUgPSBzeXNQYXRoLmJhc2VuYW1lKHBhdGgpO1xuICBjb25zdCBwYXJlbnQgPSB0aGlzLmZzdy5fZ2V0V2F0Y2hlZERpcihkaXJlY3RvcnkpO1xuICBwYXJlbnQuYWRkKGJhc2VuYW1lKTtcbiAgY29uc3QgYWJzb2x1dGVQYXRoID0gc3lzUGF0aC5yZXNvbHZlKHBhdGgpO1xuICBjb25zdCBvcHRpb25zID0ge3BlcnNpc3RlbnQ6IG9wdHMucGVyc2lzdGVudH07XG4gIGlmICghbGlzdGVuZXIpIGxpc3RlbmVyID0gRU1QVFlfRk47XG5cbiAgbGV0IGNsb3NlcjtcbiAgaWYgKG9wdHMudXNlUG9sbGluZykge1xuICAgIG9wdGlvbnMuaW50ZXJ2YWwgPSBvcHRzLmVuYWJsZUJpbmFyeUludGVydmFsICYmIGlzQmluYXJ5UGF0aChiYXNlbmFtZSkgP1xuICAgICAgb3B0cy5iaW5hcnlJbnRlcnZhbCA6IG9wdHMuaW50ZXJ2YWw7XG4gICAgY2xvc2VyID0gc2V0RnNXYXRjaEZpbGVMaXN0ZW5lcihwYXRoLCBhYnNvbHV0ZVBhdGgsIG9wdGlvbnMsIHtcbiAgICAgIGxpc3RlbmVyLFxuICAgICAgcmF3RW1pdHRlcjogdGhpcy5mc3cuX2VtaXRSYXdcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjbG9zZXIgPSBzZXRGc1dhdGNoTGlzdGVuZXIocGF0aCwgYWJzb2x1dGVQYXRoLCBvcHRpb25zLCB7XG4gICAgICBsaXN0ZW5lcixcbiAgICAgIGVyckhhbmRsZXI6IHRoaXMuX2JvdW5kSGFuZGxlRXJyb3IsXG4gICAgICByYXdFbWl0dGVyOiB0aGlzLmZzdy5fZW1pdFJhd1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBjbG9zZXI7XG59XG5cbi8qKlxuICogV2F0Y2ggYSBmaWxlIGFuZCBlbWl0IGFkZCBldmVudCBpZiB3YXJyYW50ZWQuXG4gKiBAcGFyYW0ge1BhdGh9IGZpbGUgUGF0aFxuICogQHBhcmFtIHtmcy5TdGF0c30gc3RhdHMgcmVzdWx0IG9mIGZzX3N0YXRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaW5pdGlhbEFkZCB3YXMgdGhlIGZpbGUgYWRkZWQgYXQgd2F0Y2ggaW5zdGFudGlhdGlvbj9cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gY2xvc2VyIGZvciB0aGUgd2F0Y2hlciBpbnN0YW5jZVxuICovXG5faGFuZGxlRmlsZShmaWxlLCBzdGF0cywgaW5pdGlhbEFkZCkge1xuICBpZiAodGhpcy5mc3cuY2xvc2VkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGRpcm5hbWUgPSBzeXNQYXRoLmRpcm5hbWUoZmlsZSk7XG4gIGNvbnN0IGJhc2VuYW1lID0gc3lzUGF0aC5iYXNlbmFtZShmaWxlKTtcbiAgY29uc3QgcGFyZW50ID0gdGhpcy5mc3cuX2dldFdhdGNoZWREaXIoZGlybmFtZSk7XG4gIC8vIHN0YXRzIGlzIGFsd2F5cyBwcmVzZW50XG4gIGxldCBwcmV2U3RhdHMgPSBzdGF0cztcblxuICAvLyBpZiB0aGUgZmlsZSBpcyBhbHJlYWR5IGJlaW5nIHdhdGNoZWQsIGRvIG5vdGhpbmdcbiAgaWYgKHBhcmVudC5oYXMoYmFzZW5hbWUpKSByZXR1cm47XG5cbiAgY29uc3QgbGlzdGVuZXIgPSBhc3luYyAocGF0aCwgbmV3U3RhdHMpID0+IHtcbiAgICBpZiAoIXRoaXMuZnN3Ll90aHJvdHRsZShUSFJPVFRMRV9NT0RFX1dBVENILCBmaWxlLCA1KSkgcmV0dXJuO1xuICAgIGlmICghbmV3U3RhdHMgfHwgbmV3U3RhdHMubXRpbWVNcyA9PT0gMCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbmV3U3RhdHMgPSBhd2FpdCBzdGF0KGZpbGUpO1xuICAgICAgICBpZiAodGhpcy5mc3cuY2xvc2VkKSByZXR1cm47XG4gICAgICAgIC8vIENoZWNrIHRoYXQgY2hhbmdlIGV2ZW50IHdhcyBub3QgZmlyZWQgYmVjYXVzZSBvZiBjaGFuZ2VkIG9ubHkgYWNjZXNzVGltZS5cbiAgICAgICAgY29uc3QgYXQgPSBuZXdTdGF0cy5hdGltZU1zO1xuICAgICAgICBjb25zdCBtdCA9IG5ld1N0YXRzLm10aW1lTXM7XG4gICAgICAgIGlmICghYXQgfHwgYXQgPD0gbXQgfHwgbXQgIT09IHByZXZTdGF0cy5tdGltZU1zKSB7XG4gICAgICAgICAgdGhpcy5mc3cuX2VtaXQoRVZfQ0hBTkdFLCBmaWxlLCBuZXdTdGF0cyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTGludXggJiYgcHJldlN0YXRzLmlubyAhPT0gbmV3U3RhdHMuaW5vKSB7XG4gICAgICAgICAgdGhpcy5mc3cuX2Nsb3NlRmlsZShwYXRoKVxuICAgICAgICAgIHByZXZTdGF0cyA9IG5ld1N0YXRzO1xuICAgICAgICAgIHRoaXMuZnN3Ll9hZGRQYXRoQ2xvc2VyKHBhdGgsIHRoaXMuX3dhdGNoV2l0aE5vZGVGcyhmaWxlLCBsaXN0ZW5lcikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByZXZTdGF0cyA9IG5ld1N0YXRzO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBGaXggaXNzdWVzIHdoZXJlIG10aW1lIGlzIG51bGwgYnV0IGZpbGUgaXMgc3RpbGwgcHJlc2VudFxuICAgICAgICB0aGlzLmZzdy5fcmVtb3ZlKGRpcm5hbWUsIGJhc2VuYW1lKTtcbiAgICAgIH1cbiAgICAgIC8vIGFkZCBpcyBhYm91dCB0byBiZSBlbWl0dGVkIGlmIGZpbGUgbm90IGFscmVhZHkgdHJhY2tlZCBpbiBwYXJlbnRcbiAgICB9IGVsc2UgaWYgKHBhcmVudC5oYXMoYmFzZW5hbWUpKSB7XG4gICAgICAvLyBDaGVjayB0aGF0IGNoYW5nZSBldmVudCB3YXMgbm90IGZpcmVkIGJlY2F1c2Ugb2YgY2hhbmdlZCBvbmx5IGFjY2Vzc1RpbWUuXG4gICAgICBjb25zdCBhdCA9IG5ld1N0YXRzLmF0aW1lTXM7XG4gICAgICBjb25zdCBtdCA9IG5ld1N0YXRzLm10aW1lTXM7XG4gICAgICBpZiAoIWF0IHx8IGF0IDw9IG10IHx8IG10ICE9PSBwcmV2U3RhdHMubXRpbWVNcykge1xuICAgICAgICB0aGlzLmZzdy5fZW1pdChFVl9DSEFOR0UsIGZpbGUsIG5ld1N0YXRzKTtcbiAgICAgIH1cbiAgICAgIHByZXZTdGF0cyA9IG5ld1N0YXRzO1xuICAgIH1cbiAgfVxuICAvLyBraWNrIG9mZiB0aGUgd2F0Y2hlclxuICBjb25zdCBjbG9zZXIgPSB0aGlzLl93YXRjaFdpdGhOb2RlRnMoZmlsZSwgbGlzdGVuZXIpO1xuXG4gIC8vIGVtaXQgYW4gYWRkIGV2ZW50IGlmIHdlJ3JlIHN1cHBvc2VkIHRvXG4gIGlmICghKGluaXRpYWxBZGQgJiYgdGhpcy5mc3cub3B0aW9ucy5pZ25vcmVJbml0aWFsKSAmJiB0aGlzLmZzdy5faXNudElnbm9yZWQoZmlsZSkpIHtcbiAgICBpZiAoIXRoaXMuZnN3Ll90aHJvdHRsZShFVl9BREQsIGZpbGUsIDApKSByZXR1cm47XG4gICAgdGhpcy5mc3cuX2VtaXQoRVZfQURELCBmaWxlLCBzdGF0cyk7XG4gIH1cblxuICByZXR1cm4gY2xvc2VyO1xufVxuXG4vKipcbiAqIEhhbmRsZSBzeW1saW5rcyBlbmNvdW50ZXJlZCB3aGlsZSByZWFkaW5nIGEgZGlyLlxuICogQHBhcmFtIHtPYmplY3R9IGVudHJ5IHJldHVybmVkIGJ5IHJlYWRkaXJwXG4gKiBAcGFyYW0ge1N0cmluZ30gZGlyZWN0b3J5IHBhdGggb2YgZGlyIGJlaW5nIHJlYWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIG9mIHRoaXMgaXRlbVxuICogQHBhcmFtIHtTdHJpbmd9IGl0ZW0gYmFzZW5hbWUgb2YgdGhpcyBpdGVtXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxCb29sZWFuPn0gdHJ1ZSBpZiBubyBtb3JlIHByb2Nlc3NpbmcgaXMgbmVlZGVkIGZvciB0aGlzIGVudHJ5LlxuICovXG5hc3luYyBfaGFuZGxlU3ltbGluayhlbnRyeSwgZGlyZWN0b3J5LCBwYXRoLCBpdGVtKSB7XG4gIGlmICh0aGlzLmZzdy5jbG9zZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZnVsbCA9IGVudHJ5LmZ1bGxQYXRoO1xuICBjb25zdCBkaXIgPSB0aGlzLmZzdy5fZ2V0V2F0Y2hlZERpcihkaXJlY3RvcnkpO1xuXG4gIGlmICghdGhpcy5mc3cub3B0aW9ucy5mb2xsb3dTeW1saW5rcykge1xuICAgIC8vIHdhdGNoIHN5bWxpbmsgZGlyZWN0bHkgKGRvbid0IGZvbGxvdykgYW5kIGRldGVjdCBjaGFuZ2VzXG4gICAgdGhpcy5mc3cuX2luY3JSZWFkeUNvdW50KCk7XG5cbiAgICBsZXQgbGlua1BhdGg7XG4gICAgdHJ5IHtcbiAgICAgIGxpbmtQYXRoID0gYXdhaXQgZnNyZWFscGF0aChwYXRoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLmZzdy5fZW1pdFJlYWR5KCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5mc3cuY2xvc2VkKSByZXR1cm47XG4gICAgaWYgKGRpci5oYXMoaXRlbSkpIHtcbiAgICAgIGlmICh0aGlzLmZzdy5fc3ltbGlua1BhdGhzLmdldChmdWxsKSAhPT0gbGlua1BhdGgpIHtcbiAgICAgICAgdGhpcy5mc3cuX3N5bWxpbmtQYXRocy5zZXQoZnVsbCwgbGlua1BhdGgpO1xuICAgICAgICB0aGlzLmZzdy5fZW1pdChFVl9DSEFOR0UsIHBhdGgsIGVudHJ5LnN0YXRzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZGlyLmFkZChpdGVtKTtcbiAgICAgIHRoaXMuZnN3Ll9zeW1saW5rUGF0aHMuc2V0KGZ1bGwsIGxpbmtQYXRoKTtcbiAgICAgIHRoaXMuZnN3Ll9lbWl0KEVWX0FERCwgcGF0aCwgZW50cnkuc3RhdHMpO1xuICAgIH1cbiAgICB0aGlzLmZzdy5fZW1pdFJlYWR5KCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBkb24ndCBmb2xsb3cgdGhlIHNhbWUgc3ltbGluayBtb3JlIHRoYW4gb25jZVxuICBpZiAodGhpcy5mc3cuX3N5bWxpbmtQYXRocy5oYXMoZnVsbCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHRoaXMuZnN3Ll9zeW1saW5rUGF0aHMuc2V0KGZ1bGwsIHRydWUpO1xufVxuXG5faGFuZGxlUmVhZChkaXJlY3RvcnksIGluaXRpYWxBZGQsIHdoLCB0YXJnZXQsIGRpciwgZGVwdGgsIHRocm90dGxlcikge1xuICAvLyBOb3JtYWxpemUgdGhlIGRpcmVjdG9yeSBuYW1lIG9uIFdpbmRvd3NcbiAgZGlyZWN0b3J5ID0gc3lzUGF0aC5qb2luKGRpcmVjdG9yeSwgRU1QVFlfU1RSKTtcblxuICBpZiAoIXdoLmhhc0dsb2IpIHtcbiAgICB0aHJvdHRsZXIgPSB0aGlzLmZzdy5fdGhyb3R0bGUoJ3JlYWRkaXInLCBkaXJlY3RvcnksIDEwMDApO1xuICAgIGlmICghdGhyb3R0bGVyKSByZXR1cm47XG4gIH1cblxuICBjb25zdCBwcmV2aW91cyA9IHRoaXMuZnN3Ll9nZXRXYXRjaGVkRGlyKHdoLnBhdGgpO1xuICBjb25zdCBjdXJyZW50ID0gbmV3IFNldCgpO1xuXG4gIGxldCBzdHJlYW0gPSB0aGlzLmZzdy5fcmVhZGRpcnAoZGlyZWN0b3J5LCB7XG4gICAgZmlsZUZpbHRlcjogZW50cnkgPT4gd2guZmlsdGVyUGF0aChlbnRyeSksXG4gICAgZGlyZWN0b3J5RmlsdGVyOiBlbnRyeSA9PiB3aC5maWx0ZXJEaXIoZW50cnkpLFxuICAgIGRlcHRoOiAwXG4gIH0pLm9uKFNUUl9EQVRBLCBhc3luYyAoZW50cnkpID0+IHtcbiAgICBpZiAodGhpcy5mc3cuY2xvc2VkKSB7XG4gICAgICBzdHJlYW0gPSB1bmRlZmluZWQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGl0ZW0gPSBlbnRyeS5wYXRoO1xuICAgIGxldCBwYXRoID0gc3lzUGF0aC5qb2luKGRpcmVjdG9yeSwgaXRlbSk7XG4gICAgY3VycmVudC5hZGQoaXRlbSk7XG5cbiAgICBpZiAoZW50cnkuc3RhdHMuaXNTeW1ib2xpY0xpbmsoKSAmJiBhd2FpdCB0aGlzLl9oYW5kbGVTeW1saW5rKGVudHJ5LCBkaXJlY3RvcnksIHBhdGgsIGl0ZW0pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZnN3LmNsb3NlZCkge1xuICAgICAgc3RyZWFtID0gdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBGaWxlcyB0aGF0IHByZXNlbnQgaW4gY3VycmVudCBkaXJlY3Rvcnkgc25hcHNob3RcbiAgICAvLyBidXQgYWJzZW50IGluIHByZXZpb3VzIGFyZSBhZGRlZCB0byB3YXRjaCBsaXN0IGFuZFxuICAgIC8vIGVtaXQgYGFkZGAgZXZlbnQuXG4gICAgaWYgKGl0ZW0gPT09IHRhcmdldCB8fCAhdGFyZ2V0ICYmICFwcmV2aW91cy5oYXMoaXRlbSkpIHtcbiAgICAgIHRoaXMuZnN3Ll9pbmNyUmVhZHlDb3VudCgpO1xuXG4gICAgICAvLyBlbnN1cmUgcmVsYXRpdmVuZXNzIG9mIHBhdGggaXMgcHJlc2VydmVkIGluIGNhc2Ugb2Ygd2F0Y2hlciByZXVzZVxuICAgICAgcGF0aCA9IHN5c1BhdGguam9pbihkaXIsIHN5c1BhdGgucmVsYXRpdmUoZGlyLCBwYXRoKSk7XG5cbiAgICAgIHRoaXMuX2FkZFRvTm9kZUZzKHBhdGgsIGluaXRpYWxBZGQsIHdoLCBkZXB0aCArIDEpO1xuICAgIH1cbiAgfSkub24oRVZfRVJST1IsIHRoaXMuX2JvdW5kSGFuZGxlRXJyb3IpO1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+XG4gICAgc3RyZWFtLm9uY2UoU1RSX0VORCwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZnN3LmNsb3NlZCkge1xuICAgICAgICBzdHJlYW0gPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHdhc1Rocm90dGxlZCA9IHRocm90dGxlciA/IHRocm90dGxlci5jbGVhcigpIDogZmFsc2U7XG5cbiAgICAgIHJlc29sdmUoKTtcblxuICAgICAgLy8gRmlsZXMgdGhhdCBhYnNlbnQgaW4gY3VycmVudCBkaXJlY3Rvcnkgc25hcHNob3RcbiAgICAgIC8vIGJ1dCBwcmVzZW50IGluIHByZXZpb3VzIGVtaXQgYHJlbW92ZWAgZXZlbnRcbiAgICAgIC8vIGFuZCBhcmUgcmVtb3ZlZCBmcm9tIEB3YXRjaGVkW2RpcmVjdG9yeV0uXG4gICAgICBwcmV2aW91cy5nZXRDaGlsZHJlbigpLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gaXRlbSAhPT0gZGlyZWN0b3J5ICYmXG4gICAgICAgICAgIWN1cnJlbnQuaGFzKGl0ZW0pICYmXG4gICAgICAgICAgLy8gaW4gY2FzZSBvZiBpbnRlcnNlY3RpbmcgZ2xvYnM7XG4gICAgICAgICAgLy8gYSBwYXRoIG1heSBoYXZlIGJlZW4gZmlsdGVyZWQgb3V0IG9mIHRoaXMgcmVhZGRpciwgYnV0XG4gICAgICAgICAgLy8gc2hvdWxkbid0IGJlIHJlbW92ZWQgYmVjYXVzZSBpdCBtYXRjaGVzIGEgZGlmZmVyZW50IGdsb2JcbiAgICAgICAgICAoIXdoLmhhc0dsb2IgfHwgd2guZmlsdGVyUGF0aCh7XG4gICAgICAgICAgICBmdWxsUGF0aDogc3lzUGF0aC5yZXNvbHZlKGRpcmVjdG9yeSwgaXRlbSlcbiAgICAgICAgICB9KSk7XG4gICAgICB9KS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIHRoaXMuZnN3Ll9yZW1vdmUoZGlyZWN0b3J5LCBpdGVtKTtcbiAgICAgIH0pO1xuXG4gICAgICBzdHJlYW0gPSB1bmRlZmluZWQ7XG5cbiAgICAgIC8vIG9uZSBtb3JlIHRpbWUgZm9yIGFueSBtaXNzZWQgaW4gY2FzZSBjaGFuZ2VzIGNhbWUgaW4gZXh0cmVtZWx5IHF1aWNrbHlcbiAgICAgIGlmICh3YXNUaHJvdHRsZWQpIHRoaXMuX2hhbmRsZVJlYWQoZGlyZWN0b3J5LCBmYWxzZSwgd2gsIHRhcmdldCwgZGlyLCBkZXB0aCwgdGhyb3R0bGVyKTtcbiAgICB9KVxuICApO1xufVxuXG4vKipcbiAqIFJlYWQgZGlyZWN0b3J5IHRvIGFkZCAvIHJlbW92ZSBmaWxlcyBmcm9tIGBAd2F0Y2hlZGAgbGlzdCBhbmQgcmUtcmVhZCBpdCBvbiBjaGFuZ2UuXG4gKiBAcGFyYW0ge1N0cmluZ30gZGlyIGZzIHBhdGhcbiAqIEBwYXJhbSB7ZnMuU3RhdHN9IHN0YXRzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGluaXRpYWxBZGRcbiAqIEBwYXJhbSB7TnVtYmVyfSBkZXB0aCByZWxhdGl2ZSB0byB1c2VyLXN1cHBsaWVkIHBhdGhcbiAqIEBwYXJhbSB7U3RyaW5nfSB0YXJnZXQgY2hpbGQgcGF0aCB0YXJnZXRlZCBmb3Igd2F0Y2hcbiAqIEBwYXJhbSB7T2JqZWN0fSB3aCBDb21tb24gd2F0Y2ggaGVscGVycyBmb3IgdGhpcyBwYXRoXG4gKiBAcGFyYW0ge1N0cmluZ30gcmVhbHBhdGhcbiAqIEByZXR1cm5zIHtQcm9taXNlPEZ1bmN0aW9uPn0gY2xvc2VyIGZvciB0aGUgd2F0Y2hlciBpbnN0YW5jZS5cbiAqL1xuYXN5bmMgX2hhbmRsZURpcihkaXIsIHN0YXRzLCBpbml0aWFsQWRkLCBkZXB0aCwgdGFyZ2V0LCB3aCwgcmVhbHBhdGgpIHtcbiAgY29uc3QgcGFyZW50RGlyID0gdGhpcy5mc3cuX2dldFdhdGNoZWREaXIoc3lzUGF0aC5kaXJuYW1lKGRpcikpO1xuICBjb25zdCB0cmFja2VkID0gcGFyZW50RGlyLmhhcyhzeXNQYXRoLmJhc2VuYW1lKGRpcikpO1xuICBpZiAoIShpbml0aWFsQWRkICYmIHRoaXMuZnN3Lm9wdGlvbnMuaWdub3JlSW5pdGlhbCkgJiYgIXRhcmdldCAmJiAhdHJhY2tlZCkge1xuICAgIGlmICghd2guaGFzR2xvYiB8fCB3aC5nbG9iRmlsdGVyKGRpcikpIHRoaXMuZnN3Ll9lbWl0KEVWX0FERF9ESVIsIGRpciwgc3RhdHMpO1xuICB9XG5cbiAgLy8gZW5zdXJlIGRpciBpcyB0cmFja2VkIChoYXJtbGVzcyBpZiByZWR1bmRhbnQpXG4gIHBhcmVudERpci5hZGQoc3lzUGF0aC5iYXNlbmFtZShkaXIpKTtcbiAgdGhpcy5mc3cuX2dldFdhdGNoZWREaXIoZGlyKTtcbiAgbGV0IHRocm90dGxlcjtcbiAgbGV0IGNsb3NlcjtcblxuICBjb25zdCBvRGVwdGggPSB0aGlzLmZzdy5vcHRpb25zLmRlcHRoO1xuICBpZiAoKG9EZXB0aCA9PSBudWxsIHx8IGRlcHRoIDw9IG9EZXB0aCkgJiYgIXRoaXMuZnN3Ll9zeW1saW5rUGF0aHMuaGFzKHJlYWxwYXRoKSkge1xuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICBhd2FpdCB0aGlzLl9oYW5kbGVSZWFkKGRpciwgaW5pdGlhbEFkZCwgd2gsIHRhcmdldCwgZGlyLCBkZXB0aCwgdGhyb3R0bGVyKTtcbiAgICAgIGlmICh0aGlzLmZzdy5jbG9zZWQpIHJldHVybjtcbiAgICB9XG5cbiAgICBjbG9zZXIgPSB0aGlzLl93YXRjaFdpdGhOb2RlRnMoZGlyLCAoZGlyUGF0aCwgc3RhdHMpID0+IHtcbiAgICAgIC8vIGlmIGN1cnJlbnQgZGlyZWN0b3J5IGlzIHJlbW92ZWQsIGRvIG5vdGhpbmdcbiAgICAgIGlmIChzdGF0cyAmJiBzdGF0cy5tdGltZU1zID09PSAwKSByZXR1cm47XG5cbiAgICAgIHRoaXMuX2hhbmRsZVJlYWQoZGlyUGF0aCwgZmFsc2UsIHdoLCB0YXJnZXQsIGRpciwgZGVwdGgsIHRocm90dGxlcik7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGNsb3Nlcjtcbn1cblxuLyoqXG4gKiBIYW5kbGUgYWRkZWQgZmlsZSwgZGlyZWN0b3J5LCBvciBnbG9iIHBhdHRlcm4uXG4gKiBEZWxlZ2F0ZXMgY2FsbCB0byBfaGFuZGxlRmlsZSAvIF9oYW5kbGVEaXIgYWZ0ZXIgY2hlY2tzLlxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGggdG8gZmlsZSBvciBpclxuICogQHBhcmFtIHtCb29sZWFufSBpbml0aWFsQWRkIHdhcyB0aGUgZmlsZSBhZGRlZCBhdCB3YXRjaCBpbnN0YW50aWF0aW9uP1xuICogQHBhcmFtIHtPYmplY3R9IHByaW9yV2ggZGVwdGggcmVsYXRpdmUgdG8gdXNlci1zdXBwbGllZCBwYXRoXG4gKiBAcGFyYW0ge051bWJlcn0gZGVwdGggQ2hpbGQgcGF0aCBhY3R1YWxseSB0YXJnZXRlZCBmb3Igd2F0Y2hcbiAqIEBwYXJhbSB7U3RyaW5nPX0gdGFyZ2V0IENoaWxkIHBhdGggYWN0dWFsbHkgdGFyZ2V0ZWQgZm9yIHdhdGNoXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuYXN5bmMgX2FkZFRvTm9kZUZzKHBhdGgsIGluaXRpYWxBZGQsIHByaW9yV2gsIGRlcHRoLCB0YXJnZXQpIHtcbiAgY29uc3QgcmVhZHkgPSB0aGlzLmZzdy5fZW1pdFJlYWR5O1xuICBpZiAodGhpcy5mc3cuX2lzSWdub3JlZChwYXRoKSB8fCB0aGlzLmZzdy5jbG9zZWQpIHtcbiAgICByZWFkeSgpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHdoID0gdGhpcy5mc3cuX2dldFdhdGNoSGVscGVycyhwYXRoLCBkZXB0aCk7XG4gIGlmICghd2guaGFzR2xvYiAmJiBwcmlvcldoKSB7XG4gICAgd2guaGFzR2xvYiA9IHByaW9yV2guaGFzR2xvYjtcbiAgICB3aC5nbG9iRmlsdGVyID0gcHJpb3JXaC5nbG9iRmlsdGVyO1xuICAgIHdoLmZpbHRlclBhdGggPSBlbnRyeSA9PiBwcmlvcldoLmZpbHRlclBhdGgoZW50cnkpO1xuICAgIHdoLmZpbHRlckRpciA9IGVudHJ5ID0+IHByaW9yV2guZmlsdGVyRGlyKGVudHJ5KTtcbiAgfVxuXG4gIC8vIGV2YWx1YXRlIHdoYXQgaXMgYXQgdGhlIHBhdGggd2UncmUgYmVpbmcgYXNrZWQgdG8gd2F0Y2hcbiAgdHJ5IHtcbiAgICBjb25zdCBzdGF0cyA9IGF3YWl0IHN0YXRNZXRob2RzW3doLnN0YXRNZXRob2RdKHdoLndhdGNoUGF0aCk7XG4gICAgaWYgKHRoaXMuZnN3LmNsb3NlZCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLmZzdy5faXNJZ25vcmVkKHdoLndhdGNoUGF0aCwgc3RhdHMpKSB7XG4gICAgICByZWFkeSgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGZvbGxvdyA9IHRoaXMuZnN3Lm9wdGlvbnMuZm9sbG93U3ltbGlua3MgJiYgIXBhdGguaW5jbHVkZXMoU1RBUikgJiYgIXBhdGguaW5jbHVkZXMoQlJBQ0VfU1RBUlQpO1xuICAgIGxldCBjbG9zZXI7XG4gICAgaWYgKHN0YXRzLmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgIGNvbnN0IGFic1BhdGggPSBzeXNQYXRoLnJlc29sdmUocGF0aCk7XG4gICAgICBjb25zdCB0YXJnZXRQYXRoID0gZm9sbG93ID8gYXdhaXQgZnNyZWFscGF0aChwYXRoKSA6IHBhdGg7XG4gICAgICBpZiAodGhpcy5mc3cuY2xvc2VkKSByZXR1cm47XG4gICAgICBjbG9zZXIgPSBhd2FpdCB0aGlzLl9oYW5kbGVEaXIod2gud2F0Y2hQYXRoLCBzdGF0cywgaW5pdGlhbEFkZCwgZGVwdGgsIHRhcmdldCwgd2gsIHRhcmdldFBhdGgpO1xuICAgICAgaWYgKHRoaXMuZnN3LmNsb3NlZCkgcmV0dXJuO1xuICAgICAgLy8gcHJlc2VydmUgdGhpcyBzeW1saW5rJ3MgdGFyZ2V0IHBhdGhcbiAgICAgIGlmIChhYnNQYXRoICE9PSB0YXJnZXRQYXRoICYmIHRhcmdldFBhdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmZzdy5fc3ltbGlua1BhdGhzLnNldChhYnNQYXRoLCB0YXJnZXRQYXRoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHN0YXRzLmlzU3ltYm9saWNMaW5rKCkpIHtcbiAgICAgIGNvbnN0IHRhcmdldFBhdGggPSBmb2xsb3cgPyBhd2FpdCBmc3JlYWxwYXRoKHBhdGgpIDogcGF0aDtcbiAgICAgIGlmICh0aGlzLmZzdy5jbG9zZWQpIHJldHVybjtcbiAgICAgIGNvbnN0IHBhcmVudCA9IHN5c1BhdGguZGlybmFtZSh3aC53YXRjaFBhdGgpO1xuICAgICAgdGhpcy5mc3cuX2dldFdhdGNoZWREaXIocGFyZW50KS5hZGQod2gud2F0Y2hQYXRoKTtcbiAgICAgIHRoaXMuZnN3Ll9lbWl0KEVWX0FERCwgd2gud2F0Y2hQYXRoLCBzdGF0cyk7XG4gICAgICBjbG9zZXIgPSBhd2FpdCB0aGlzLl9oYW5kbGVEaXIocGFyZW50LCBzdGF0cywgaW5pdGlhbEFkZCwgZGVwdGgsIHBhdGgsIHdoLCB0YXJnZXRQYXRoKTtcbiAgICAgIGlmICh0aGlzLmZzdy5jbG9zZWQpIHJldHVybjtcblxuICAgICAgLy8gcHJlc2VydmUgdGhpcyBzeW1saW5rJ3MgdGFyZ2V0IHBhdGhcbiAgICAgIGlmICh0YXJnZXRQYXRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5mc3cuX3N5bWxpbmtQYXRocy5zZXQoc3lzUGF0aC5yZXNvbHZlKHBhdGgpLCB0YXJnZXRQYXRoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY2xvc2VyID0gdGhpcy5faGFuZGxlRmlsZSh3aC53YXRjaFBhdGgsIHN0YXRzLCBpbml0aWFsQWRkKTtcbiAgICB9XG4gICAgcmVhZHkoKTtcblxuICAgIHRoaXMuZnN3Ll9hZGRQYXRoQ2xvc2VyKHBhdGgsIGNsb3Nlcik7XG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKHRoaXMuZnN3Ll9oYW5kbGVFcnJvcihlcnJvcikpIHtcbiAgICAgIHJlYWR5KCk7XG4gICAgICByZXR1cm4gcGF0aDtcbiAgICB9XG4gIH1cbn1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vZGVGc0hhbmRsZXI7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5jb25zdCBzeXNQYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgeyBwcm9taXNpZnkgfSA9IHJlcXVpcmUoJ3V0aWwnKTtcblxubGV0IGZzZXZlbnRzO1xudHJ5IHtcbiAgZnNldmVudHMgPSByZXF1aXJlKCdmc2V2ZW50cycpO1xufSBjYXRjaCAoZXJyb3IpIHtcbiAgaWYgKHByb2Nlc3MuZW52LkNIT0tJREFSX1BSSU5UX0ZTRVZFTlRTX1JFUVVJUkVfRVJST1IpIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xufVxuXG5pZiAoZnNldmVudHMpIHtcbiAgLy8gVE9ETzogcmVhbCBjaGVja1xuICBjb25zdCBtdGNoID0gcHJvY2Vzcy52ZXJzaW9uLm1hdGNoKC92KFxcZCspXFwuKFxcZCspLyk7XG4gIGlmIChtdGNoICYmIG10Y2hbMV0gJiYgbXRjaFsyXSkge1xuICAgIGNvbnN0IG1haiA9IE51bWJlci5wYXJzZUludChtdGNoWzFdLCAxMCk7XG4gICAgY29uc3QgbWluID0gTnVtYmVyLnBhcnNlSW50KG10Y2hbMl0sIDEwKTtcbiAgICBpZiAobWFqID09PSA4ICYmIG1pbiA8IDE2KSB7XG4gICAgICBmc2V2ZW50cyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qge1xuICBFVl9BREQsXG4gIEVWX0NIQU5HRSxcbiAgRVZfQUREX0RJUixcbiAgRVZfVU5MSU5LLFxuICBFVl9FUlJPUixcbiAgU1RSX0RBVEEsXG4gIFNUUl9FTkQsXG4gIEZTRVZFTlRfQ1JFQVRFRCxcbiAgRlNFVkVOVF9NT0RJRklFRCxcbiAgRlNFVkVOVF9ERUxFVEVELFxuICBGU0VWRU5UX01PVkVELFxuICAvLyBGU0VWRU5UX0NMT05FRCxcbiAgRlNFVkVOVF9VTktOT1dOLFxuICBGU0VWRU5UX1RZUEVfRklMRSxcbiAgRlNFVkVOVF9UWVBFX0RJUkVDVE9SWSxcbiAgRlNFVkVOVF9UWVBFX1NZTUxJTkssXG5cbiAgUk9PVF9HTE9CU1RBUixcbiAgRElSX1NVRkZJWCxcbiAgRE9UX1NMQVNILFxuICBGVU5DVElPTl9UWVBFLFxuICBFTVBUWV9GTixcbiAgSURFTlRJVFlfRk5cbn0gPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG5jb25zdCBEZXB0aCA9ICh2YWx1ZSkgPT4gaXNOYU4odmFsdWUpID8ge30gOiB7ZGVwdGg6IHZhbHVlfTtcblxuY29uc3Qgc3RhdCA9IHByb21pc2lmeShmcy5zdGF0KTtcbmNvbnN0IGxzdGF0ID0gcHJvbWlzaWZ5KGZzLmxzdGF0KTtcbmNvbnN0IHJlYWxwYXRoID0gcHJvbWlzaWZ5KGZzLnJlYWxwYXRoKTtcblxuY29uc3Qgc3RhdE1ldGhvZHMgPSB7IHN0YXQsIGxzdGF0IH07XG5cbi8qKlxuICogQHR5cGVkZWYge1N0cmluZ30gUGF0aFxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gRnNFdmVudHNXYXRjaENvbnRhaW5lclxuICogQHByb3BlcnR5IHtTZXQ8RnVuY3Rpb24+fSBsaXN0ZW5lcnNcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IHJhd0VtaXR0ZXJcbiAqIEBwcm9wZXJ0eSB7e3N0b3A6IEZ1bmN0aW9ufX0gd2F0Y2hlclxuICovXG5cbi8vIGZzZXZlbnRzIGluc3RhbmNlIGhlbHBlciBmdW5jdGlvbnNcbi8qKlxuICogT2JqZWN0IHRvIGhvbGQgcGVyLXByb2Nlc3MgZnNldmVudHMgaW5zdGFuY2VzIChtYXkgYmUgc2hhcmVkIGFjcm9zcyBjaG9raWRhciBGU1dhdGNoZXIgaW5zdGFuY2VzKVxuICogQHR5cGUge01hcDxQYXRoLEZzRXZlbnRzV2F0Y2hDb250YWluZXI+fVxuICovXG5jb25zdCBGU0V2ZW50c1dhdGNoZXJzID0gbmV3IE1hcCgpO1xuXG4vLyBUaHJlc2hvbGQgb2YgZHVwbGljYXRlIHBhdGggcHJlZml4ZXMgYXQgd2hpY2ggdG8gc3RhcnRcbi8vIGNvbnNvbGlkYXRpbmcgZ29pbmcgZm9yd2FyZFxuY29uc3QgY29uc29saWRhdGVUaHJlc2hob2xkID0gMTA7XG5cbmNvbnN0IHdyb25nRXZlbnRGbGFncyA9IG5ldyBTZXQoW1xuICA2OTg4OCwgNzA0MDAsIDcxNDI0LCA3MjcwNCwgNzM0NzIsIDEzMTMyOCwgMTMxODQwLCAyNjI5MTJcbl0pO1xuXG4vKipcbiAqIEluc3RhbnRpYXRlcyB0aGUgZnNldmVudHMgaW50ZXJmYWNlXG4gKiBAcGFyYW0ge1BhdGh9IHBhdGggcGF0aCB0byBiZSB3YXRjaGVkXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBjYWxsZWQgd2hlbiBmc2V2ZW50cyBpcyBib3VuZCBhbmQgcmVhZHlcbiAqIEByZXR1cm5zIHt7c3RvcDogRnVuY3Rpb259fSBuZXcgZnNldmVudHMgaW5zdGFuY2VcbiAqL1xuY29uc3QgY3JlYXRlRlNFdmVudHNJbnN0YW5jZSA9IChwYXRoLCBjYWxsYmFjaykgPT4ge1xuICBjb25zdCBzdG9wID0gZnNldmVudHMud2F0Y2gocGF0aCwgY2FsbGJhY2spO1xuICByZXR1cm4ge3N0b3B9O1xufTtcblxuLyoqXG4gKiBJbnN0YW50aWF0ZXMgdGhlIGZzZXZlbnRzIGludGVyZmFjZSBvciBiaW5kcyBsaXN0ZW5lcnMgdG8gYW4gZXhpc3Rpbmcgb25lIGNvdmVyaW5nXG4gKiB0aGUgc2FtZSBmaWxlIHRyZWUuXG4gKiBAcGFyYW0ge1BhdGh9IHBhdGggICAgICAgICAgIC0gdG8gYmUgd2F0Y2hlZFxuICogQHBhcmFtIHtQYXRofSByZWFsUGF0aCAgICAgICAtIHJlYWwgcGF0aCBmb3Igc3ltbGlua3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyICAgLSBjYWxsZWQgd2hlbiBmc2V2ZW50cyBlbWl0cyBldmVudHNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJhd0VtaXR0ZXIgLSBwYXNzZXMgZGF0YSB0byBsaXN0ZW5lcnMgb2YgdGhlICdyYXcnIGV2ZW50XG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IGNsb3NlclxuICovXG5mdW5jdGlvbiBzZXRGU0V2ZW50c0xpc3RlbmVyKHBhdGgsIHJlYWxQYXRoLCBsaXN0ZW5lciwgcmF3RW1pdHRlcikge1xuICBsZXQgd2F0Y2hQYXRoID0gc3lzUGF0aC5leHRuYW1lKHJlYWxQYXRoKSA/IHN5c1BhdGguZGlybmFtZShyZWFsUGF0aCkgOiByZWFsUGF0aDtcblxuICBjb25zdCBwYXJlbnRQYXRoID0gc3lzUGF0aC5kaXJuYW1lKHdhdGNoUGF0aCk7XG4gIGxldCBjb250ID0gRlNFdmVudHNXYXRjaGVycy5nZXQod2F0Y2hQYXRoKTtcblxuICAvLyBJZiB3ZSd2ZSBhY2N1bXVsYXRlZCBhIHN1YnN0YW50aWFsIG51bWJlciBvZiBwYXRocyB0aGF0XG4gIC8vIGNvdWxkIGhhdmUgYmVlbiBjb25zb2xpZGF0ZWQgYnkgd2F0Y2hpbmcgb25lIGRpcmVjdG9yeVxuICAvLyBhYm92ZSB0aGUgY3VycmVudCBvbmUsIGNyZWF0ZSBhIHdhdGNoZXIgb24gdGhlIHBhcmVudFxuICAvLyBwYXRoIGluc3RlYWQsIHNvIHRoYXQgd2UgZG8gY29uc29saWRhdGUgZ29pbmcgZm9yd2FyZC5cbiAgaWYgKGNvdWxkQ29uc29saWRhdGUocGFyZW50UGF0aCkpIHtcbiAgICB3YXRjaFBhdGggPSBwYXJlbnRQYXRoO1xuICB9XG5cbiAgY29uc3QgcmVzb2x2ZWRQYXRoID0gc3lzUGF0aC5yZXNvbHZlKHBhdGgpO1xuICBjb25zdCBoYXNTeW1saW5rID0gcmVzb2x2ZWRQYXRoICE9PSByZWFsUGF0aDtcblxuICBjb25zdCBmaWx0ZXJlZExpc3RlbmVyID0gKGZ1bGxQYXRoLCBmbGFncywgaW5mbykgPT4ge1xuICAgIGlmIChoYXNTeW1saW5rKSBmdWxsUGF0aCA9IGZ1bGxQYXRoLnJlcGxhY2UocmVhbFBhdGgsIHJlc29sdmVkUGF0aCk7XG4gICAgaWYgKFxuICAgICAgZnVsbFBhdGggPT09IHJlc29sdmVkUGF0aCB8fFxuICAgICAgIWZ1bGxQYXRoLmluZGV4T2YocmVzb2x2ZWRQYXRoICsgc3lzUGF0aC5zZXApXG4gICAgKSBsaXN0ZW5lcihmdWxsUGF0aCwgZmxhZ3MsIGluZm8pO1xuICB9O1xuXG4gIC8vIGNoZWNrIGlmIHRoZXJlIGlzIGFscmVhZHkgYSB3YXRjaGVyIG9uIGEgcGFyZW50IHBhdGhcbiAgLy8gbW9kaWZpZXMgYHdhdGNoUGF0aGAgdG8gdGhlIHBhcmVudCBwYXRoIHdoZW4gaXQgZmluZHMgYSBtYXRjaFxuICBsZXQgd2F0Y2hlZFBhcmVudCA9IGZhbHNlO1xuICBmb3IgKGNvbnN0IHdhdGNoZWRQYXRoIG9mIEZTRXZlbnRzV2F0Y2hlcnMua2V5cygpKSB7XG4gICAgaWYgKHJlYWxQYXRoLmluZGV4T2Yoc3lzUGF0aC5yZXNvbHZlKHdhdGNoZWRQYXRoKSArIHN5c1BhdGguc2VwKSA9PT0gMCkge1xuICAgICAgd2F0Y2hQYXRoID0gd2F0Y2hlZFBhdGg7XG4gICAgICBjb250ID0gRlNFdmVudHNXYXRjaGVycy5nZXQod2F0Y2hQYXRoKTtcbiAgICAgIHdhdGNoZWRQYXJlbnQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKGNvbnQgfHwgd2F0Y2hlZFBhcmVudCkge1xuICAgIGNvbnQubGlzdGVuZXJzLmFkZChmaWx0ZXJlZExpc3RlbmVyKTtcbiAgfSBlbHNlIHtcbiAgICBjb250ID0ge1xuICAgICAgbGlzdGVuZXJzOiBuZXcgU2V0KFtmaWx0ZXJlZExpc3RlbmVyXSksXG4gICAgICByYXdFbWl0dGVyLFxuICAgICAgd2F0Y2hlcjogY3JlYXRlRlNFdmVudHNJbnN0YW5jZSh3YXRjaFBhdGgsIChmdWxsUGF0aCwgZmxhZ3MpID0+IHtcbiAgICAgICAgaWYgKCFjb250Lmxpc3RlbmVycy5zaXplKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGluZm8gPSBmc2V2ZW50cy5nZXRJbmZvKGZ1bGxQYXRoLCBmbGFncyk7XG4gICAgICAgIGNvbnQubGlzdGVuZXJzLmZvckVhY2gobGlzdCA9PiB7XG4gICAgICAgICAgbGlzdChmdWxsUGF0aCwgZmxhZ3MsIGluZm8pO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb250LnJhd0VtaXR0ZXIoaW5mby5ldmVudCwgZnVsbFBhdGgsIGluZm8pO1xuICAgICAgfSlcbiAgICB9O1xuICAgIEZTRXZlbnRzV2F0Y2hlcnMuc2V0KHdhdGNoUGF0aCwgY29udCk7XG4gIH1cblxuICAvLyByZW1vdmVzIHRoaXMgaW5zdGFuY2UncyBsaXN0ZW5lcnMgYW5kIGNsb3NlcyB0aGUgdW5kZXJseWluZyBmc2V2ZW50c1xuICAvLyBpbnN0YW5jZSBpZiB0aGVyZSBhcmUgbm8gbW9yZSBsaXN0ZW5lcnMgbGVmdFxuICByZXR1cm4gKCkgPT4ge1xuICAgIGNvbnN0IGxzdCA9IGNvbnQubGlzdGVuZXJzO1xuXG4gICAgbHN0LmRlbGV0ZShmaWx0ZXJlZExpc3RlbmVyKTtcbiAgICBpZiAoIWxzdC5zaXplKSB7XG4gICAgICBGU0V2ZW50c1dhdGNoZXJzLmRlbGV0ZSh3YXRjaFBhdGgpO1xuICAgICAgaWYgKGNvbnQud2F0Y2hlcikgcmV0dXJuIGNvbnQud2F0Y2hlci5zdG9wKCkudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnQucmF3RW1pdHRlciA9IGNvbnQud2F0Y2hlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZShjb250KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cblxuLy8gRGVjaWRlIHdoZXRoZXIgb3Igbm90IHdlIHNob3VsZCBzdGFydCBhIG5ldyBoaWdoZXItbGV2ZWxcbi8vIHBhcmVudCB3YXRjaGVyXG5jb25zdCBjb3VsZENvbnNvbGlkYXRlID0gKHBhdGgpID0+IHtcbiAgbGV0IGNvdW50ID0gMDtcbiAgZm9yIChjb25zdCB3YXRjaFBhdGggb2YgRlNFdmVudHNXYXRjaGVycy5rZXlzKCkpIHtcbiAgICBpZiAod2F0Y2hQYXRoLmluZGV4T2YocGF0aCkgPT09IDApIHtcbiAgICAgIGNvdW50Kys7XG4gICAgICBpZiAoY291bnQgPj0gY29uc29saWRhdGVUaHJlc2hob2xkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8vIHJldHVybnMgYm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgZnNldmVudHMgY2FuIGJlIHVzZWRcbmNvbnN0IGNhblVzZSA9ICgpID0+IGZzZXZlbnRzICYmIEZTRXZlbnRzV2F0Y2hlcnMuc2l6ZSA8IDEyODtcblxuLy8gZGV0ZXJtaW5lcyBzdWJkaXJlY3RvcnkgdHJhdmVyc2FsIGxldmVscyBmcm9tIHJvb3QgdG8gcGF0aFxuY29uc3QgY2FsY0RlcHRoID0gKHBhdGgsIHJvb3QpID0+IHtcbiAgbGV0IGkgPSAwO1xuICB3aGlsZSAoIXBhdGguaW5kZXhPZihyb290KSAmJiAocGF0aCA9IHN5c1BhdGguZGlybmFtZShwYXRoKSkgIT09IHJvb3QpIGkrKztcbiAgcmV0dXJuIGk7XG59O1xuXG4vLyByZXR1cm5zIGJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBmc2V2ZW50cycgZXZlbnQgaW5mbyBoYXMgdGhlIHNhbWUgdHlwZVxuLy8gYXMgdGhlIG9uZSByZXR1cm5lZCBieSBmcy5zdGF0XG5jb25zdCBzYW1lVHlwZXMgPSAoaW5mbywgc3RhdHMpID0+IChcbiAgaW5mby50eXBlID09PSBGU0VWRU5UX1RZUEVfRElSRUNUT1JZICYmIHN0YXRzLmlzRGlyZWN0b3J5KCkgfHxcbiAgaW5mby50eXBlID09PSBGU0VWRU5UX1RZUEVfU1lNTElOSyAmJiBzdGF0cy5pc1N5bWJvbGljTGluaygpIHx8XG4gIGluZm8udHlwZSA9PT0gRlNFVkVOVF9UWVBFX0ZJTEUgJiYgc3RhdHMuaXNGaWxlKClcbilcblxuLyoqXG4gKiBAbWl4aW5cbiAqL1xuY2xhc3MgRnNFdmVudHNIYW5kbGVyIHtcblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW5kZXgnKS5GU1dhdGNoZXJ9IGZzd1xuICovXG5jb25zdHJ1Y3Rvcihmc3cpIHtcbiAgdGhpcy5mc3cgPSBmc3c7XG59XG5jaGVja0lnbm9yZWQocGF0aCwgc3RhdHMpIHtcbiAgY29uc3QgaXBhdGhzID0gdGhpcy5mc3cuX2lnbm9yZWRQYXRocztcbiAgaWYgKHRoaXMuZnN3Ll9pc0lnbm9yZWQocGF0aCwgc3RhdHMpKSB7XG4gICAgaXBhdGhzLmFkZChwYXRoKTtcbiAgICBpZiAoc3RhdHMgJiYgc3RhdHMuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgaXBhdGhzLmFkZChwYXRoICsgUk9PVF9HTE9CU1RBUik7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaXBhdGhzLmRlbGV0ZShwYXRoKTtcbiAgaXBhdGhzLmRlbGV0ZShwYXRoICsgUk9PVF9HTE9CU1RBUik7XG59XG5cbmFkZE9yQ2hhbmdlKHBhdGgsIGZ1bGxQYXRoLCByZWFsUGF0aCwgcGFyZW50LCB3YXRjaGVkRGlyLCBpdGVtLCBpbmZvLCBvcHRzKSB7XG4gIGNvbnN0IGV2ZW50ID0gd2F0Y2hlZERpci5oYXMoaXRlbSkgPyBFVl9DSEFOR0UgOiBFVl9BREQ7XG4gIHRoaXMuaGFuZGxlRXZlbnQoZXZlbnQsIHBhdGgsIGZ1bGxQYXRoLCByZWFsUGF0aCwgcGFyZW50LCB3YXRjaGVkRGlyLCBpdGVtLCBpbmZvLCBvcHRzKTtcbn1cblxuYXN5bmMgY2hlY2tFeGlzdHMocGF0aCwgZnVsbFBhdGgsIHJlYWxQYXRoLCBwYXJlbnQsIHdhdGNoZWREaXIsIGl0ZW0sIGluZm8sIG9wdHMpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzdGF0cyA9IGF3YWl0IHN0YXQocGF0aClcbiAgICBpZiAodGhpcy5mc3cuY2xvc2VkKSByZXR1cm47XG4gICAgaWYgKHNhbWVUeXBlcyhpbmZvLCBzdGF0cykpIHtcbiAgICAgIHRoaXMuYWRkT3JDaGFuZ2UocGF0aCwgZnVsbFBhdGgsIHJlYWxQYXRoLCBwYXJlbnQsIHdhdGNoZWREaXIsIGl0ZW0sIGluZm8sIG9wdHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhbmRsZUV2ZW50KEVWX1VOTElOSywgcGF0aCwgZnVsbFBhdGgsIHJlYWxQYXRoLCBwYXJlbnQsIHdhdGNoZWREaXIsIGl0ZW0sIGluZm8sIG9wdHMpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IuY29kZSA9PT0gJ0VBQ0NFUycpIHtcbiAgICAgIHRoaXMuYWRkT3JDaGFuZ2UocGF0aCwgZnVsbFBhdGgsIHJlYWxQYXRoLCBwYXJlbnQsIHdhdGNoZWREaXIsIGl0ZW0sIGluZm8sIG9wdHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhbmRsZUV2ZW50KEVWX1VOTElOSywgcGF0aCwgZnVsbFBhdGgsIHJlYWxQYXRoLCBwYXJlbnQsIHdhdGNoZWREaXIsIGl0ZW0sIGluZm8sIG9wdHMpO1xuICAgIH1cbiAgfVxufVxuXG5oYW5kbGVFdmVudChldmVudCwgcGF0aCwgZnVsbFBhdGgsIHJlYWxQYXRoLCBwYXJlbnQsIHdhdGNoZWREaXIsIGl0ZW0sIGluZm8sIG9wdHMpIHtcbiAgaWYgKHRoaXMuZnN3LmNsb3NlZCB8fCB0aGlzLmNoZWNrSWdub3JlZChwYXRoKSkgcmV0dXJuO1xuXG4gIGlmIChldmVudCA9PT0gRVZfVU5MSU5LKSB7XG4gICAgY29uc3QgaXNEaXJlY3RvcnkgPSBpbmZvLnR5cGUgPT09IEZTRVZFTlRfVFlQRV9ESVJFQ1RPUllcbiAgICAvLyBzdXBwcmVzcyB1bmxpbmsgZXZlbnRzIG9uIG5ldmVyIGJlZm9yZSBzZWVuIGZpbGVzXG4gICAgaWYgKGlzRGlyZWN0b3J5IHx8IHdhdGNoZWREaXIuaGFzKGl0ZW0pKSB7XG4gICAgICB0aGlzLmZzdy5fcmVtb3ZlKHBhcmVudCwgaXRlbSwgaXNEaXJlY3RvcnkpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoZXZlbnQgPT09IEVWX0FERCkge1xuICAgICAgLy8gdHJhY2sgbmV3IGRpcmVjdG9yaWVzXG4gICAgICBpZiAoaW5mby50eXBlID09PSBGU0VWRU5UX1RZUEVfRElSRUNUT1JZKSB0aGlzLmZzdy5fZ2V0V2F0Y2hlZERpcihwYXRoKTtcblxuICAgICAgaWYgKGluZm8udHlwZSA9PT0gRlNFVkVOVF9UWVBFX1NZTUxJTksgJiYgb3B0cy5mb2xsb3dTeW1saW5rcykge1xuICAgICAgICAvLyBwdXNoIHN5bWxpbmtzIGJhY2sgdG8gdGhlIHRvcCBvZiB0aGUgc3RhY2sgdG8gZ2V0IGhhbmRsZWRcbiAgICAgICAgY29uc3QgY3VyRGVwdGggPSBvcHRzLmRlcHRoID09PSB1bmRlZmluZWQgP1xuICAgICAgICAgIHVuZGVmaW5lZCA6IGNhbGNEZXB0aChmdWxsUGF0aCwgcmVhbFBhdGgpICsgMTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZFRvRnNFdmVudHMocGF0aCwgZmFsc2UsIHRydWUsIGN1ckRlcHRoKTtcbiAgICAgIH1cblxuICAgICAgLy8gdHJhY2sgbmV3IHBhdGhzXG4gICAgICAvLyAob3RoZXIgdGhhbiBzeW1saW5rcyBiZWluZyBmb2xsb3dlZCwgd2hpY2ggd2lsbCBiZSB0cmFja2VkIHNvb24pXG4gICAgICB0aGlzLmZzdy5fZ2V0V2F0Y2hlZERpcihwYXJlbnQpLmFkZChpdGVtKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHR5cGUgeydhZGQnfCdhZGREaXInfCd1bmxpbmsnfCd1bmxpbmtEaXInfVxuICAgICAqL1xuICAgIGNvbnN0IGV2ZW50TmFtZSA9IGluZm8udHlwZSA9PT0gRlNFVkVOVF9UWVBFX0RJUkVDVE9SWSA/IGV2ZW50ICsgRElSX1NVRkZJWCA6IGV2ZW50O1xuICAgIHRoaXMuZnN3Ll9lbWl0KGV2ZW50TmFtZSwgcGF0aCk7XG4gICAgaWYgKGV2ZW50TmFtZSA9PT0gRVZfQUREX0RJUikgdGhpcy5fYWRkVG9Gc0V2ZW50cyhwYXRoLCBmYWxzZSwgdHJ1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBIYW5kbGUgc3ltbGlua3MgZW5jb3VudGVyZWQgZHVyaW5nIGRpcmVjdG9yeSBzY2FuXG4gKiBAcGFyYW0ge1N0cmluZ30gd2F0Y2hQYXRoICAtIGZpbGUvZGlyIHBhdGggdG8gYmUgd2F0Y2hlZCB3aXRoIGZzZXZlbnRzXG4gKiBAcGFyYW0ge1N0cmluZ30gcmVhbFBhdGggICAtIHJlYWwgcGF0aCAoaW4gY2FzZSBvZiBzeW1saW5rcylcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSAgLSBwYXRoIHRyYW5zZm9ybWVyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBnbG9iRmlsdGVyIC0gcGF0aCBmaWx0ZXIgaW4gY2FzZSBhIGdsb2IgcGF0dGVybiB3YXMgcHJvdmlkZWRcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gY2xvc2VyIGZvciB0aGUgd2F0Y2hlciBpbnN0YW5jZVxuKi9cbl93YXRjaFdpdGhGc0V2ZW50cyh3YXRjaFBhdGgsIHJlYWxQYXRoLCB0cmFuc2Zvcm0sIGdsb2JGaWx0ZXIpIHtcbiAgaWYgKHRoaXMuZnN3LmNsb3NlZCB8fCB0aGlzLmZzdy5faXNJZ25vcmVkKHdhdGNoUGF0aCkpIHJldHVybjtcbiAgY29uc3Qgb3B0cyA9IHRoaXMuZnN3Lm9wdGlvbnM7XG4gIGNvbnN0IHdhdGNoQ2FsbGJhY2sgPSBhc3luYyAoZnVsbFBhdGgsIGZsYWdzLCBpbmZvKSA9PiB7XG4gICAgaWYgKHRoaXMuZnN3LmNsb3NlZCkgcmV0dXJuO1xuICAgIGlmIChcbiAgICAgIG9wdHMuZGVwdGggIT09IHVuZGVmaW5lZCAmJlxuICAgICAgY2FsY0RlcHRoKGZ1bGxQYXRoLCByZWFsUGF0aCkgPiBvcHRzLmRlcHRoXG4gICAgKSByZXR1cm47XG4gICAgY29uc3QgcGF0aCA9IHRyYW5zZm9ybShzeXNQYXRoLmpvaW4oXG4gICAgICB3YXRjaFBhdGgsIHN5c1BhdGgucmVsYXRpdmUod2F0Y2hQYXRoLCBmdWxsUGF0aClcbiAgICApKTtcbiAgICBpZiAoZ2xvYkZpbHRlciAmJiAhZ2xvYkZpbHRlcihwYXRoKSkgcmV0dXJuO1xuICAgIC8vIGVuc3VyZSBkaXJlY3RvcmllcyBhcmUgdHJhY2tlZFxuICAgIGNvbnN0IHBhcmVudCA9IHN5c1BhdGguZGlybmFtZShwYXRoKTtcbiAgICBjb25zdCBpdGVtID0gc3lzUGF0aC5iYXNlbmFtZShwYXRoKTtcbiAgICBjb25zdCB3YXRjaGVkRGlyID0gdGhpcy5mc3cuX2dldFdhdGNoZWREaXIoXG4gICAgICBpbmZvLnR5cGUgPT09IEZTRVZFTlRfVFlQRV9ESVJFQ1RPUlkgPyBwYXRoIDogcGFyZW50XG4gICAgKTtcblxuICAgIC8vIGNvcnJlY3QgZm9yIHdyb25nIGV2ZW50cyBlbWl0dGVkXG4gICAgaWYgKHdyb25nRXZlbnRGbGFncy5oYXMoZmxhZ3MpIHx8IGluZm8uZXZlbnQgPT09IEZTRVZFTlRfVU5LTk9XTikge1xuICAgICAgaWYgKHR5cGVvZiBvcHRzLmlnbm9yZWQgPT09IEZVTkNUSU9OX1RZUEUpIHtcbiAgICAgICAgbGV0IHN0YXRzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHN0YXRzID0gYXdhaXQgc3RhdChwYXRoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgICAgIGlmICh0aGlzLmZzdy5jbG9zZWQpIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tJZ25vcmVkKHBhdGgsIHN0YXRzKSkgcmV0dXJuO1xuICAgICAgICBpZiAoc2FtZVR5cGVzKGluZm8sIHN0YXRzKSkge1xuICAgICAgICAgIHRoaXMuYWRkT3JDaGFuZ2UocGF0aCwgZnVsbFBhdGgsIHJlYWxQYXRoLCBwYXJlbnQsIHdhdGNoZWREaXIsIGl0ZW0sIGluZm8sIG9wdHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaGFuZGxlRXZlbnQoRVZfVU5MSU5LLCBwYXRoLCBmdWxsUGF0aCwgcmVhbFBhdGgsIHBhcmVudCwgd2F0Y2hlZERpciwgaXRlbSwgaW5mbywgb3B0cyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2hlY2tFeGlzdHMocGF0aCwgZnVsbFBhdGgsIHJlYWxQYXRoLCBwYXJlbnQsIHdhdGNoZWREaXIsIGl0ZW0sIGluZm8sIG9wdHMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzd2l0Y2ggKGluZm8uZXZlbnQpIHtcbiAgICAgIGNhc2UgRlNFVkVOVF9DUkVBVEVEOlxuICAgICAgY2FzZSBGU0VWRU5UX01PRElGSUVEOlxuICAgICAgICByZXR1cm4gdGhpcy5hZGRPckNoYW5nZShwYXRoLCBmdWxsUGF0aCwgcmVhbFBhdGgsIHBhcmVudCwgd2F0Y2hlZERpciwgaXRlbSwgaW5mbywgb3B0cyk7XG4gICAgICBjYXNlIEZTRVZFTlRfREVMRVRFRDpcbiAgICAgIGNhc2UgRlNFVkVOVF9NT1ZFRDpcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tFeGlzdHMocGF0aCwgZnVsbFBhdGgsIHJlYWxQYXRoLCBwYXJlbnQsIHdhdGNoZWREaXIsIGl0ZW0sIGluZm8sIG9wdHMpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBjbG9zZXIgPSBzZXRGU0V2ZW50c0xpc3RlbmVyKFxuICAgIHdhdGNoUGF0aCxcbiAgICByZWFsUGF0aCxcbiAgICB3YXRjaENhbGxiYWNrLFxuICAgIHRoaXMuZnN3Ll9lbWl0UmF3XG4gICk7XG5cbiAgdGhpcy5mc3cuX2VtaXRSZWFkeSgpO1xuICByZXR1cm4gY2xvc2VyO1xufVxuXG4vKipcbiAqIEhhbmRsZSBzeW1saW5rcyBlbmNvdW50ZXJlZCBkdXJpbmcgZGlyZWN0b3J5IHNjYW5cbiAqIEBwYXJhbSB7U3RyaW5nfSBsaW5rUGF0aCBwYXRoIHRvIHN5bWxpbmtcbiAqIEBwYXJhbSB7U3RyaW5nfSBmdWxsUGF0aCBhYnNvbHV0ZSBwYXRoIHRvIHRoZSBzeW1saW5rXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gcHJlLWV4aXN0aW5nIHBhdGggdHJhbnNmb3JtZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBjdXJEZXB0aCBsZXZlbCBvZiBzdWJkaXJlY3RvcmllcyB0cmF2ZXJzZWQgdG8gd2hlcmUgc3ltbGluayBpc1xuICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gKi9cbmFzeW5jIF9oYW5kbGVGc0V2ZW50c1N5bWxpbmsobGlua1BhdGgsIGZ1bGxQYXRoLCB0cmFuc2Zvcm0sIGN1ckRlcHRoKSB7XG4gIC8vIGRvbid0IGZvbGxvdyB0aGUgc2FtZSBzeW1saW5rIG1vcmUgdGhhbiBvbmNlXG4gIGlmICh0aGlzLmZzdy5jbG9zZWQgfHwgdGhpcy5mc3cuX3N5bWxpbmtQYXRocy5oYXMoZnVsbFBhdGgpKSByZXR1cm47XG5cbiAgdGhpcy5mc3cuX3N5bWxpbmtQYXRocy5zZXQoZnVsbFBhdGgsIHRydWUpO1xuICB0aGlzLmZzdy5faW5jclJlYWR5Q291bnQoKTtcblxuICB0cnkge1xuICAgIGNvbnN0IGxpbmtUYXJnZXQgPSBhd2FpdCByZWFscGF0aChsaW5rUGF0aCk7XG4gICAgaWYgKHRoaXMuZnN3LmNsb3NlZCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLmZzdy5faXNJZ25vcmVkKGxpbmtUYXJnZXQpKSB7XG4gICAgICByZXR1cm4gdGhpcy5mc3cuX2VtaXRSZWFkeSgpO1xuICAgIH1cblxuICAgIHRoaXMuZnN3Ll9pbmNyUmVhZHlDb3VudCgpO1xuXG4gICAgLy8gYWRkIHRoZSBsaW5rVGFyZ2V0IGZvciB3YXRjaGluZyB3aXRoIGEgd3JhcHBlciBmb3IgdHJhbnNmb3JtXG4gICAgLy8gdGhhdCBjYXVzZXMgZW1pdHRlZCBwYXRocyB0byBpbmNvcnBvcmF0ZSB0aGUgbGluaydzIHBhdGhcbiAgICB0aGlzLl9hZGRUb0ZzRXZlbnRzKGxpbmtUYXJnZXQgfHwgbGlua1BhdGgsIChwYXRoKSA9PiB7XG4gICAgICBsZXQgYWxpYXNlZFBhdGggPSBsaW5rUGF0aDtcbiAgICAgIGlmIChsaW5rVGFyZ2V0ICYmIGxpbmtUYXJnZXQgIT09IERPVF9TTEFTSCkge1xuICAgICAgICBhbGlhc2VkUGF0aCA9IHBhdGgucmVwbGFjZShsaW5rVGFyZ2V0LCBsaW5rUGF0aCk7XG4gICAgICB9IGVsc2UgaWYgKHBhdGggIT09IERPVF9TTEFTSCkge1xuICAgICAgICBhbGlhc2VkUGF0aCA9IHN5c1BhdGguam9pbihsaW5rUGF0aCwgcGF0aCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJhbnNmb3JtKGFsaWFzZWRQYXRoKTtcbiAgICB9LCBmYWxzZSwgY3VyRGVwdGgpO1xuICB9IGNhdGNoKGVycm9yKSB7XG4gICAgaWYgKHRoaXMuZnN3Ll9oYW5kbGVFcnJvcihlcnJvcikpIHtcbiAgICAgIHJldHVybiB0aGlzLmZzdy5fZW1pdFJlYWR5KCk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7UGF0aH0gbmV3UGF0aFxuICogQHBhcmFtIHtmcy5TdGF0c30gc3RhdHNcbiAqL1xuZW1pdEFkZChuZXdQYXRoLCBzdGF0cywgcHJvY2Vzc1BhdGgsIG9wdHMsIGZvcmNlQWRkKSB7XG4gIGNvbnN0IHBwID0gcHJvY2Vzc1BhdGgobmV3UGF0aCk7XG4gIGNvbnN0IGlzRGlyID0gc3RhdHMuaXNEaXJlY3RvcnkoKTtcbiAgY29uc3QgZGlyT2JqID0gdGhpcy5mc3cuX2dldFdhdGNoZWREaXIoc3lzUGF0aC5kaXJuYW1lKHBwKSk7XG4gIGNvbnN0IGJhc2UgPSBzeXNQYXRoLmJhc2VuYW1lKHBwKTtcblxuICAvLyBlbnN1cmUgZW1wdHkgZGlycyBnZXQgdHJhY2tlZFxuICBpZiAoaXNEaXIpIHRoaXMuZnN3Ll9nZXRXYXRjaGVkRGlyKHBwKTtcbiAgaWYgKGRpck9iai5oYXMoYmFzZSkpIHJldHVybjtcbiAgZGlyT2JqLmFkZChiYXNlKTtcblxuICBpZiAoIW9wdHMuaWdub3JlSW5pdGlhbCB8fCBmb3JjZUFkZCA9PT0gdHJ1ZSkge1xuICAgIHRoaXMuZnN3Ll9lbWl0KGlzRGlyID8gRVZfQUREX0RJUiA6IEVWX0FERCwgcHAsIHN0YXRzKTtcbiAgfVxufVxuXG5pbml0V2F0Y2gocmVhbFBhdGgsIHBhdGgsIHdoLCBwcm9jZXNzUGF0aCkge1xuICBpZiAodGhpcy5mc3cuY2xvc2VkKSByZXR1cm47XG4gIGNvbnN0IGNsb3NlciA9IHRoaXMuX3dhdGNoV2l0aEZzRXZlbnRzKFxuICAgIHdoLndhdGNoUGF0aCxcbiAgICBzeXNQYXRoLnJlc29sdmUocmVhbFBhdGggfHwgd2gud2F0Y2hQYXRoKSxcbiAgICBwcm9jZXNzUGF0aCxcbiAgICB3aC5nbG9iRmlsdGVyXG4gICk7XG4gIHRoaXMuZnN3Ll9hZGRQYXRoQ2xvc2VyKHBhdGgsIGNsb3Nlcik7XG59XG5cbi8qKlxuICogSGFuZGxlIGFkZGVkIHBhdGggd2l0aCBmc2V2ZW50c1xuICogQHBhcmFtIHtTdHJpbmd9IHBhdGggZmlsZS9kaXIgcGF0aCBvciBnbG9iIHBhdHRlcm5cbiAqIEBwYXJhbSB7RnVuY3Rpb258Qm9vbGVhbj19IHRyYW5zZm9ybSBjb252ZXJ0cyB3b3JraW5nIHBhdGggdG8gd2hhdCB0aGUgdXNlciBleHBlY3RzXG4gKiBAcGFyYW0ge0Jvb2xlYW49fSBmb3JjZUFkZCBlbnN1cmUgYWRkIGlzIGVtaXR0ZWRcbiAqIEBwYXJhbSB7TnVtYmVyPX0gcHJpb3JEZXB0aCBMZXZlbCBvZiBzdWJkaXJlY3RvcmllcyBhbHJlYWR5IHRyYXZlcnNlZC5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICovXG5hc3luYyBfYWRkVG9Gc0V2ZW50cyhwYXRoLCB0cmFuc2Zvcm0sIGZvcmNlQWRkLCBwcmlvckRlcHRoKSB7XG4gIGlmICh0aGlzLmZzdy5jbG9zZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3Qgb3B0cyA9IHRoaXMuZnN3Lm9wdGlvbnM7XG4gIGNvbnN0IHByb2Nlc3NQYXRoID0gdHlwZW9mIHRyYW5zZm9ybSA9PT0gRlVOQ1RJT05fVFlQRSA/IHRyYW5zZm9ybSA6IElERU5USVRZX0ZOO1xuXG4gIGNvbnN0IHdoID0gdGhpcy5mc3cuX2dldFdhdGNoSGVscGVycyhwYXRoKTtcblxuICAvLyBldmFsdWF0ZSB3aGF0IGlzIGF0IHRoZSBwYXRoIHdlJ3JlIGJlaW5nIGFza2VkIHRvIHdhdGNoXG4gIHRyeSB7XG4gICAgY29uc3Qgc3RhdHMgPSBhd2FpdCBzdGF0TWV0aG9kc1t3aC5zdGF0TWV0aG9kXSh3aC53YXRjaFBhdGgpO1xuICAgIGlmICh0aGlzLmZzdy5jbG9zZWQpIHJldHVybjtcbiAgICBpZiAodGhpcy5mc3cuX2lzSWdub3JlZCh3aC53YXRjaFBhdGgsIHN0YXRzKSkge1xuICAgICAgdGhyb3cgbnVsbDtcbiAgICB9XG4gICAgaWYgKHN0YXRzLmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgIC8vIGVtaXQgYWRkRGlyIHVubGVzcyB0aGlzIGlzIGEgZ2xvYiBwYXJlbnRcbiAgICAgIGlmICghd2guZ2xvYkZpbHRlcikgdGhpcy5lbWl0QWRkKHByb2Nlc3NQYXRoKHBhdGgpLCBzdGF0cywgcHJvY2Vzc1BhdGgsIG9wdHMsIGZvcmNlQWRkKTtcblxuICAgICAgLy8gZG9uJ3QgcmVjdXJzZSBmdXJ0aGVyIGlmIGl0IHdvdWxkIGV4Y2VlZCBkZXB0aCBzZXR0aW5nXG4gICAgICBpZiAocHJpb3JEZXB0aCAmJiBwcmlvckRlcHRoID4gb3B0cy5kZXB0aCkgcmV0dXJuO1xuXG4gICAgICAvLyBzY2FuIHRoZSBjb250ZW50cyBvZiB0aGUgZGlyXG4gICAgICB0aGlzLmZzdy5fcmVhZGRpcnAod2gud2F0Y2hQYXRoLCB7XG4gICAgICAgIGZpbGVGaWx0ZXI6IGVudHJ5ID0+IHdoLmZpbHRlclBhdGgoZW50cnkpLFxuICAgICAgICBkaXJlY3RvcnlGaWx0ZXI6IGVudHJ5ID0+IHdoLmZpbHRlckRpcihlbnRyeSksXG4gICAgICAgIC4uLkRlcHRoKG9wdHMuZGVwdGggLSAocHJpb3JEZXB0aCB8fCAwKSlcbiAgICAgIH0pLm9uKFNUUl9EQVRBLCAoZW50cnkpID0+IHtcbiAgICAgICAgLy8gbmVlZCB0byBjaGVjayBmaWx0ZXJQYXRoIG9uIGRpcnMgYi9jIGZpbHRlckRpciBpcyBsZXNzIHJlc3RyaWN0aXZlXG4gICAgICAgIGlmICh0aGlzLmZzdy5jbG9zZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVudHJ5LnN0YXRzLmlzRGlyZWN0b3J5KCkgJiYgIXdoLmZpbHRlclBhdGgoZW50cnkpKSByZXR1cm47XG5cbiAgICAgICAgY29uc3Qgam9pbmVkUGF0aCA9IHN5c1BhdGguam9pbih3aC53YXRjaFBhdGgsIGVudHJ5LnBhdGgpO1xuICAgICAgICBjb25zdCB7ZnVsbFBhdGh9ID0gZW50cnk7XG5cbiAgICAgICAgaWYgKHdoLmZvbGxvd1N5bWxpbmtzICYmIGVudHJ5LnN0YXRzLmlzU3ltYm9saWNMaW5rKCkpIHtcbiAgICAgICAgICAvLyBwcmVzZXJ2ZSB0aGUgY3VycmVudCBkZXB0aCBoZXJlIHNpbmNlIGl0IGNhbid0IGJlIGRlcml2ZWQgZnJvbVxuICAgICAgICAgIC8vIHJlYWwgcGF0aHMgcGFzdCB0aGUgc3ltbGlua1xuICAgICAgICAgIGNvbnN0IGN1ckRlcHRoID0gb3B0cy5kZXB0aCA9PT0gdW5kZWZpbmVkID9cbiAgICAgICAgICAgIHVuZGVmaW5lZCA6IGNhbGNEZXB0aChqb2luZWRQYXRoLCBzeXNQYXRoLnJlc29sdmUod2gud2F0Y2hQYXRoKSkgKyAxO1xuXG4gICAgICAgICAgdGhpcy5faGFuZGxlRnNFdmVudHNTeW1saW5rKGpvaW5lZFBhdGgsIGZ1bGxQYXRoLCBwcm9jZXNzUGF0aCwgY3VyRGVwdGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZW1pdEFkZChqb2luZWRQYXRoLCBlbnRyeS5zdGF0cywgcHJvY2Vzc1BhdGgsIG9wdHMsIGZvcmNlQWRkKTtcbiAgICAgICAgfVxuICAgICAgfSkub24oRVZfRVJST1IsIEVNUFRZX0ZOKS5vbihTVFJfRU5ELCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZnN3Ll9lbWl0UmVhZHkoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVtaXRBZGQod2gud2F0Y2hQYXRoLCBzdGF0cywgcHJvY2Vzc1BhdGgsIG9wdHMsIGZvcmNlQWRkKTtcbiAgICAgIHRoaXMuZnN3Ll9lbWl0UmVhZHkoKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKCFlcnJvciB8fCB0aGlzLmZzdy5faGFuZGxlRXJyb3IoZXJyb3IpKSB7XG4gICAgICAvLyBUT0RPOiBTdHJhbmdlIHRoaW5nOiBcInNob3VsZCBub3QgY2hva2Ugb24gYW4gaWdub3JlZCB3YXRjaCBwYXRoXCIgd2lsbCBiZSBmYWlsZWQgd2l0aG91dCAyIHJlYWR5IGNhbGxzIC1fXy1cbiAgICAgIHRoaXMuZnN3Ll9lbWl0UmVhZHkoKTtcbiAgICAgIHRoaXMuZnN3Ll9lbWl0UmVhZHkoKTtcbiAgICB9XG4gIH1cblxuICBpZiAob3B0cy5wZXJzaXN0ZW50ICYmIGZvcmNlQWRkICE9PSB0cnVlKSB7XG4gICAgaWYgKHR5cGVvZiB0cmFuc2Zvcm0gPT09IEZVTkNUSU9OX1RZUEUpIHtcbiAgICAgIC8vIHJlYWxwYXRoIGhhcyBhbHJlYWR5IGJlZW4gcmVzb2x2ZWRcbiAgICAgIHRoaXMuaW5pdFdhdGNoKHVuZGVmaW5lZCwgcGF0aCwgd2gsIHByb2Nlc3NQYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHJlYWxQYXRoO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVhbFBhdGggPSBhd2FpdCByZWFscGF0aCh3aC53YXRjaFBhdGgpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIHRoaXMuaW5pdFdhdGNoKHJlYWxQYXRoLCBwYXRoLCB3aCwgcHJvY2Vzc1BhdGgpO1xuICAgIH1cbiAgfVxufVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gRnNFdmVudHNIYW5kbGVyO1xubW9kdWxlLmV4cG9ydHMuY2FuVXNlID0gY2FuVXNlO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeyBFdmVudEVtaXR0ZXIgfSA9IHJlcXVpcmUoJ2V2ZW50cycpO1xuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3Qgc3lzUGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbmNvbnN0IHsgcHJvbWlzaWZ5IH0gPSByZXF1aXJlKCd1dGlsJyk7XG5jb25zdCByZWFkZGlycCA9IHJlcXVpcmUoJ3JlYWRkaXJwJyk7XG5jb25zdCBhbnltYXRjaCA9IHJlcXVpcmUoJ2FueW1hdGNoJykuZGVmYXVsdDtcbmNvbnN0IGdsb2JQYXJlbnQgPSByZXF1aXJlKCdnbG9iLXBhcmVudCcpO1xuY29uc3QgaXNHbG9iID0gcmVxdWlyZSgnaXMtZ2xvYicpO1xuY29uc3QgYnJhY2VzID0gcmVxdWlyZSgnYnJhY2VzJyk7XG5jb25zdCBub3JtYWxpemVQYXRoID0gcmVxdWlyZSgnbm9ybWFsaXplLXBhdGgnKTtcblxuY29uc3QgTm9kZUZzSGFuZGxlciA9IHJlcXVpcmUoJy4vbGliL25vZGVmcy1oYW5kbGVyJyk7XG5jb25zdCBGc0V2ZW50c0hhbmRsZXIgPSByZXF1aXJlKCcuL2xpYi9mc2V2ZW50cy1oYW5kbGVyJyk7XG5jb25zdCB7XG4gIEVWX0FMTCxcbiAgRVZfUkVBRFksXG4gIEVWX0FERCxcbiAgRVZfQ0hBTkdFLFxuICBFVl9VTkxJTkssXG4gIEVWX0FERF9ESVIsXG4gIEVWX1VOTElOS19ESVIsXG4gIEVWX1JBVyxcbiAgRVZfRVJST1IsXG5cbiAgU1RSX0NMT1NFLFxuICBTVFJfRU5ELFxuXG4gIEJBQ0tfU0xBU0hfUkUsXG4gIERPVUJMRV9TTEFTSF9SRSxcbiAgU0xBU0hfT1JfQkFDS19TTEFTSF9SRSxcbiAgRE9UX1JFLFxuICBSRVBMQUNFUl9SRSxcblxuICBTTEFTSCxcbiAgU0xBU0hfU0xBU0gsXG4gIEJSQUNFX1NUQVJULFxuICBCQU5HLFxuICBPTkVfRE9ULFxuICBUV09fRE9UUyxcbiAgR0xPQlNUQVIsXG4gIFNMQVNIX0dMT0JTVEFSLFxuICBBTllNQVRDSF9PUFRTLFxuICBTVFJJTkdfVFlQRSxcbiAgRlVOQ1RJT05fVFlQRSxcbiAgRU1QVFlfU1RSLFxuICBFTVBUWV9GTixcblxuICBpc1dpbmRvd3MsXG4gIGlzTWFjb3MsXG4gIGlzSUJNaVxufSA9IHJlcXVpcmUoJy4vbGliL2NvbnN0YW50cycpO1xuXG5jb25zdCBzdGF0ID0gcHJvbWlzaWZ5KGZzLnN0YXQpO1xuY29uc3QgcmVhZGRpciA9IHByb21pc2lmeShmcy5yZWFkZGlyKTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7U3RyaW5nfSBQYXRoXG4gKiBAdHlwZWRlZiB7J2FsbCd8J2FkZCd8J2FkZERpcid8J2NoYW5nZSd8J3VubGluayd8J3VubGlua0Rpcid8J3Jhdyd8J2Vycm9yJ3wncmVhZHknfSBFdmVudE5hbWVcbiAqIEB0eXBlZGVmIHsncmVhZGRpcid8J3dhdGNoJ3wnYWRkJ3wncmVtb3ZlJ3wnY2hhbmdlJ30gVGhyb3R0bGVUeXBlXG4gKi9cblxuLyoqXG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gV2F0Y2hIZWxwZXJzXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IGZvbGxvd1N5bWxpbmtzXG4gKiBAcHJvcGVydHkgeydzdGF0J3wnbHN0YXQnfSBzdGF0TWV0aG9kXG4gKiBAcHJvcGVydHkge1BhdGh9IHBhdGhcbiAqIEBwcm9wZXJ0eSB7UGF0aH0gd2F0Y2hQYXRoXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBlbnRyeVBhdGhcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gaGFzR2xvYlxuICogQHByb3BlcnR5IHtPYmplY3R9IGdsb2JGaWx0ZXJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGZpbHRlclBhdGhcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGZpbHRlckRpclxuICovXG5cbmNvbnN0IGFycmlmeSA9ICh2YWx1ZSA9IFtdKSA9PiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTtcbmNvbnN0IGZsYXR0ZW4gPSAobGlzdCwgcmVzdWx0ID0gW10pID0+IHtcbiAgbGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0pKSB7XG4gICAgICBmbGF0dGVuKGl0ZW0sIHJlc3VsdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCB1bmlmeVBhdGhzID0gKHBhdGhzXykgPT4ge1xuICAvKipcbiAgICogQHR5cGUge0FycmF5PFN0cmluZz59XG4gICAqL1xuICBjb25zdCBwYXRocyA9IGZsYXR0ZW4oYXJyaWZ5KHBhdGhzXykpO1xuICBpZiAoIXBhdGhzLmV2ZXJ5KHAgPT4gdHlwZW9mIHAgPT09IFNUUklOR19UWVBFKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vbi1zdHJpbmcgcHJvdmlkZWQgYXMgd2F0Y2ggcGF0aDogJHtwYXRoc31gKTtcbiAgfVxuICByZXR1cm4gcGF0aHMubWFwKG5vcm1hbGl6ZVBhdGhUb1VuaXgpO1xufTtcblxuLy8gSWYgU0xBU0hfU0xBU0ggb2NjdXJzIGF0IHRoZSBiZWdpbm5pbmcgb2YgcGF0aCwgaXQgaXMgbm90IHJlcGxhY2VkXG4vLyAgICAgYmVjYXVzZSBcIi8vU3RvcmFnZVBDL0RyaXZlUG9vbC9Nb3ZpZXNcIiBpcyBhIHZhbGlkIG5ldHdvcmsgcGF0aFxuY29uc3QgdG9Vbml4ID0gKHN0cmluZykgPT4ge1xuICBsZXQgc3RyID0gc3RyaW5nLnJlcGxhY2UoQkFDS19TTEFTSF9SRSwgU0xBU0gpO1xuICBsZXQgcHJlcGVuZCA9IGZhbHNlO1xuICBpZiAoc3RyLnN0YXJ0c1dpdGgoU0xBU0hfU0xBU0gpKSB7XG4gICAgcHJlcGVuZCA9IHRydWU7XG4gIH1cbiAgd2hpbGUgKHN0ci5tYXRjaChET1VCTEVfU0xBU0hfUkUpKSB7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoRE9VQkxFX1NMQVNIX1JFLCBTTEFTSCk7XG4gIH1cbiAgaWYgKHByZXBlbmQpIHtcbiAgICBzdHIgPSBTTEFTSCArIHN0cjtcbiAgfVxuICByZXR1cm4gc3RyO1xufTtcblxuLy8gT3VyIHZlcnNpb24gb2YgdXBhdGgubm9ybWFsaXplXG4vLyBUT0RPOiB0aGlzIGlzIG5vdCBlcXVhbCB0byBwYXRoLW5vcm1hbGl6ZSBtb2R1bGUgLSBpbnZlc3RpZ2F0ZSB3aHlcbmNvbnN0IG5vcm1hbGl6ZVBhdGhUb1VuaXggPSAocGF0aCkgPT4gdG9Vbml4KHN5c1BhdGgubm9ybWFsaXplKHRvVW5peChwYXRoKSkpO1xuXG5jb25zdCBub3JtYWxpemVJZ25vcmVkID0gKGN3ZCA9IEVNUFRZX1NUUikgPT4gKHBhdGgpID0+IHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSBTVFJJTkdfVFlQRSkgcmV0dXJuIHBhdGg7XG4gIHJldHVybiBub3JtYWxpemVQYXRoVG9Vbml4KHN5c1BhdGguaXNBYnNvbHV0ZShwYXRoKSA/IHBhdGggOiBzeXNQYXRoLmpvaW4oY3dkLCBwYXRoKSk7XG59O1xuXG5jb25zdCBnZXRBYnNvbHV0ZVBhdGggPSAocGF0aCwgY3dkKSA9PiB7XG4gIGlmIChzeXNQYXRoLmlzQWJzb2x1dGUocGF0aCkpIHtcbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuICBpZiAocGF0aC5zdGFydHNXaXRoKEJBTkcpKSB7XG4gICAgcmV0dXJuIEJBTkcgKyBzeXNQYXRoLmpvaW4oY3dkLCBwYXRoLnNsaWNlKDEpKTtcbiAgfVxuICByZXR1cm4gc3lzUGF0aC5qb2luKGN3ZCwgcGF0aCk7XG59O1xuXG5jb25zdCB1bmRlZiA9IChvcHRzLCBrZXkpID0+IG9wdHNba2V5XSA9PT0gdW5kZWZpbmVkO1xuXG4vKipcbiAqIERpcmVjdG9yeSBlbnRyeS5cbiAqIEBwcm9wZXJ0eSB7UGF0aH0gcGF0aFxuICogQHByb3BlcnR5IHtTZXQ8UGF0aD59IGl0ZW1zXG4gKi9cbmNsYXNzIERpckVudHJ5IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7UGF0aH0gZGlyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlbW92ZVdhdGNoZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGRpciwgcmVtb3ZlV2F0Y2hlcikge1xuICAgIHRoaXMucGF0aCA9IGRpcjtcbiAgICB0aGlzLl9yZW1vdmVXYXRjaGVyID0gcmVtb3ZlV2F0Y2hlcjtcbiAgICAvKiogQHR5cGUge1NldDxQYXRoPn0gKi9cbiAgICB0aGlzLml0ZW1zID0gbmV3IFNldCgpO1xuICB9XG5cbiAgYWRkKGl0ZW0pIHtcbiAgICBjb25zdCB7aXRlbXN9ID0gdGhpcztcbiAgICBpZiAoIWl0ZW1zKSByZXR1cm47XG4gICAgaWYgKGl0ZW0gIT09IE9ORV9ET1QgJiYgaXRlbSAhPT0gVFdPX0RPVFMpIGl0ZW1zLmFkZChpdGVtKTtcbiAgfVxuXG4gIGFzeW5jIHJlbW92ZShpdGVtKSB7XG4gICAgY29uc3Qge2l0ZW1zfSA9IHRoaXM7XG4gICAgaWYgKCFpdGVtcykgcmV0dXJuO1xuICAgIGl0ZW1zLmRlbGV0ZShpdGVtKTtcbiAgICBpZiAoaXRlbXMuc2l6ZSA+IDApIHJldHVybjtcblxuICAgIGNvbnN0IGRpciA9IHRoaXMucGF0aDtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgcmVhZGRpcihkaXIpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKHRoaXMuX3JlbW92ZVdhdGNoZXIpIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlV2F0Y2hlcihzeXNQYXRoLmRpcm5hbWUoZGlyKSwgc3lzUGF0aC5iYXNlbmFtZShkaXIpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYXMoaXRlbSkge1xuICAgIGNvbnN0IHtpdGVtc30gPSB0aGlzO1xuICAgIGlmICghaXRlbXMpIHJldHVybjtcbiAgICByZXR1cm4gaXRlbXMuaGFzKGl0ZW0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtBcnJheTxTdHJpbmc+fVxuICAgKi9cbiAgZ2V0Q2hpbGRyZW4oKSB7XG4gICAgY29uc3Qge2l0ZW1zfSA9IHRoaXM7XG4gICAgaWYgKCFpdGVtcykgcmV0dXJuO1xuICAgIHJldHVybiBbLi4uaXRlbXMudmFsdWVzKCldO1xuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICB0aGlzLml0ZW1zLmNsZWFyKCk7XG4gICAgZGVsZXRlIHRoaXMucGF0aDtcbiAgICBkZWxldGUgdGhpcy5fcmVtb3ZlV2F0Y2hlcjtcbiAgICBkZWxldGUgdGhpcy5pdGVtcztcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG59XG5cbmNvbnN0IFNUQVRfTUVUSE9EX0YgPSAnc3RhdCc7XG5jb25zdCBTVEFUX01FVEhPRF9MID0gJ2xzdGF0JztcbmNsYXNzIFdhdGNoSGVscGVyIHtcbiAgY29uc3RydWN0b3IocGF0aCwgd2F0Y2hQYXRoLCBmb2xsb3csIGZzdykge1xuICAgIHRoaXMuZnN3ID0gZnN3O1xuICAgIHRoaXMucGF0aCA9IHBhdGggPSBwYXRoLnJlcGxhY2UoUkVQTEFDRVJfUkUsIEVNUFRZX1NUUik7XG4gICAgdGhpcy53YXRjaFBhdGggPSB3YXRjaFBhdGg7XG4gICAgdGhpcy5mdWxsV2F0Y2hQYXRoID0gc3lzUGF0aC5yZXNvbHZlKHdhdGNoUGF0aCk7XG4gICAgdGhpcy5oYXNHbG9iID0gd2F0Y2hQYXRoICE9PSBwYXRoO1xuICAgIC8qKiBAdHlwZSB7b2JqZWN0fGJvb2xlYW59ICovXG4gICAgaWYgKHBhdGggPT09IEVNUFRZX1NUUikgdGhpcy5oYXNHbG9iID0gZmFsc2U7XG4gICAgdGhpcy5nbG9iU3ltbGluayA9IHRoaXMuaGFzR2xvYiAmJiBmb2xsb3cgPyB1bmRlZmluZWQgOiBmYWxzZTtcbiAgICB0aGlzLmdsb2JGaWx0ZXIgPSB0aGlzLmhhc0dsb2IgPyBhbnltYXRjaChwYXRoLCB1bmRlZmluZWQsIEFOWU1BVENIX09QVFMpIDogZmFsc2U7XG4gICAgdGhpcy5kaXJQYXJ0cyA9IHRoaXMuZ2V0RGlyUGFydHMocGF0aCk7XG4gICAgdGhpcy5kaXJQYXJ0cy5mb3JFYWNoKChwYXJ0cykgPT4ge1xuICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHBhcnRzLnBvcCgpO1xuICAgIH0pO1xuICAgIHRoaXMuZm9sbG93U3ltbGlua3MgPSBmb2xsb3c7XG4gICAgdGhpcy5zdGF0TWV0aG9kID0gZm9sbG93ID8gU1RBVF9NRVRIT0RfRiA6IFNUQVRfTUVUSE9EX0w7XG4gIH1cblxuICBjaGVja0dsb2JTeW1saW5rKGVudHJ5KSB7XG4gICAgLy8gb25seSBuZWVkIHRvIHJlc29sdmUgb25jZVxuICAgIC8vIGZpcnN0IGVudHJ5IHNob3VsZCBhbHdheXMgaGF2ZSBlbnRyeS5wYXJlbnREaXIgPT09IEVNUFRZX1NUUlxuICAgIGlmICh0aGlzLmdsb2JTeW1saW5rID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZ2xvYlN5bWxpbmsgPSBlbnRyeS5mdWxsUGFyZW50RGlyID09PSB0aGlzLmZ1bGxXYXRjaFBhdGggP1xuICAgICAgICBmYWxzZSA6IHtyZWFsUGF0aDogZW50cnkuZnVsbFBhcmVudERpciwgbGlua1BhdGg6IHRoaXMuZnVsbFdhdGNoUGF0aH07XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZ2xvYlN5bWxpbmspIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdWxsUGF0aC5yZXBsYWNlKHRoaXMuZ2xvYlN5bWxpbmsucmVhbFBhdGgsIHRoaXMuZ2xvYlN5bWxpbmsubGlua1BhdGgpO1xuICAgIH1cblxuICAgIHJldHVybiBlbnRyeS5mdWxsUGF0aDtcbiAgfVxuXG4gIGVudHJ5UGF0aChlbnRyeSkge1xuICAgIHJldHVybiBzeXNQYXRoLmpvaW4odGhpcy53YXRjaFBhdGgsXG4gICAgICBzeXNQYXRoLnJlbGF0aXZlKHRoaXMud2F0Y2hQYXRoLCB0aGlzLmNoZWNrR2xvYlN5bWxpbmsoZW50cnkpKVxuICAgICk7XG4gIH1cblxuICBmaWx0ZXJQYXRoKGVudHJ5KSB7XG4gICAgY29uc3Qge3N0YXRzfSA9IGVudHJ5O1xuICAgIGlmIChzdGF0cyAmJiBzdGF0cy5pc1N5bWJvbGljTGluaygpKSByZXR1cm4gdGhpcy5maWx0ZXJEaXIoZW50cnkpO1xuICAgIGNvbnN0IHJlc29sdmVkUGF0aCA9IHRoaXMuZW50cnlQYXRoKGVudHJ5KTtcbiAgICBjb25zdCBtYXRjaGVzR2xvYiA9IHRoaXMuaGFzR2xvYiAmJiB0eXBlb2YgdGhpcy5nbG9iRmlsdGVyID09PSBGVU5DVElPTl9UWVBFID9cbiAgICAgIHRoaXMuZ2xvYkZpbHRlcihyZXNvbHZlZFBhdGgpIDogdHJ1ZTtcbiAgICByZXR1cm4gbWF0Y2hlc0dsb2IgJiZcbiAgICAgIHRoaXMuZnN3Ll9pc250SWdub3JlZChyZXNvbHZlZFBhdGgsIHN0YXRzKSAmJlxuICAgICAgdGhpcy5mc3cuX2hhc1JlYWRQZXJtaXNzaW9ucyhzdGF0cyk7XG4gIH1cblxuICBnZXREaXJQYXJ0cyhwYXRoKSB7XG4gICAgaWYgKCF0aGlzLmhhc0dsb2IpIHJldHVybiBbXTtcbiAgICBjb25zdCBwYXJ0cyA9IFtdO1xuICAgIGNvbnN0IGV4cGFuZGVkUGF0aCA9IHBhdGguaW5jbHVkZXMoQlJBQ0VfU1RBUlQpID8gYnJhY2VzLmV4cGFuZChwYXRoKSA6IFtwYXRoXTtcbiAgICBleHBhbmRlZFBhdGguZm9yRWFjaCgocGF0aCkgPT4ge1xuICAgICAgcGFydHMucHVzaChzeXNQYXRoLnJlbGF0aXZlKHRoaXMud2F0Y2hQYXRoLCBwYXRoKS5zcGxpdChTTEFTSF9PUl9CQUNLX1NMQVNIX1JFKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHBhcnRzO1xuICB9XG5cbiAgZmlsdGVyRGlyKGVudHJ5KSB7XG4gICAgaWYgKHRoaXMuaGFzR2xvYikge1xuICAgICAgY29uc3QgZW50cnlQYXJ0cyA9IHRoaXMuZ2V0RGlyUGFydHModGhpcy5jaGVja0dsb2JTeW1saW5rKGVudHJ5KSk7XG4gICAgICBsZXQgZ2xvYnN0YXIgPSBmYWxzZTtcbiAgICAgIHRoaXMudW5tYXRjaGVkR2xvYiA9ICF0aGlzLmRpclBhcnRzLnNvbWUoKHBhcnRzKSA9PiB7XG4gICAgICAgIHJldHVybiBwYXJ0cy5ldmVyeSgocGFydCwgaSkgPT4ge1xuICAgICAgICAgIGlmIChwYXJ0ID09PSBHTE9CU1RBUikgZ2xvYnN0YXIgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBnbG9ic3RhciB8fCAhZW50cnlQYXJ0c1swXVtpXSB8fCBhbnltYXRjaChwYXJ0LCBlbnRyeVBhcnRzWzBdW2ldLCBBTllNQVRDSF9PUFRTKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuICF0aGlzLnVubWF0Y2hlZEdsb2IgJiYgdGhpcy5mc3cuX2lzbnRJZ25vcmVkKHRoaXMuZW50cnlQYXRoKGVudHJ5KSwgZW50cnkuc3RhdHMpO1xuICB9XG59XG5cbi8qKlxuICogV2F0Y2hlcyBmaWxlcyAmIGRpcmVjdG9yaWVzIGZvciBjaGFuZ2VzLiBFbWl0dGVkIGV2ZW50czpcbiAqIGBhZGRgLCBgYWRkRGlyYCwgYGNoYW5nZWAsIGB1bmxpbmtgLCBgdW5saW5rRGlyYCwgYGFsbGAsIGBlcnJvcmBcbiAqXG4gKiAgICAgbmV3IEZTV2F0Y2hlcigpXG4gKiAgICAgICAuYWRkKGRpcmVjdG9yaWVzKVxuICogICAgICAgLm9uKCdhZGQnLCBwYXRoID0+IGxvZygnRmlsZScsIHBhdGgsICd3YXMgYWRkZWQnKSlcbiAqL1xuY2xhc3MgRlNXYXRjaGVyIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbi8vIE5vdCBpbmRlbnRpbmcgbWV0aG9kcyBmb3IgaGlzdG9yeSBzYWtlOyBmb3Igbm93LlxuY29uc3RydWN0b3IoX29wdHMpIHtcbiAgc3VwZXIoKTtcblxuICBjb25zdCBvcHRzID0ge307XG4gIGlmIChfb3B0cykgT2JqZWN0LmFzc2lnbihvcHRzLCBfb3B0cyk7IC8vIGZvciBmcm96ZW4gb2JqZWN0c1xuXG4gIC8qKiBAdHlwZSB7TWFwPFN0cmluZywgRGlyRW50cnk+fSAqL1xuICB0aGlzLl93YXRjaGVkID0gbmV3IE1hcCgpO1xuICAvKiogQHR5cGUge01hcDxTdHJpbmcsIEFycmF5Pn0gKi9cbiAgdGhpcy5fY2xvc2VycyA9IG5ldyBNYXAoKTtcbiAgLyoqIEB0eXBlIHtTZXQ8U3RyaW5nPn0gKi9cbiAgdGhpcy5faWdub3JlZFBhdGhzID0gbmV3IFNldCgpO1xuXG4gIC8qKiBAdHlwZSB7TWFwPFRocm90dGxlVHlwZSwgTWFwPn0gKi9cbiAgdGhpcy5fdGhyb3R0bGVkID0gbmV3IE1hcCgpO1xuXG4gIC8qKiBAdHlwZSB7TWFwPFBhdGgsIFN0cmluZ3xCb29sZWFuPn0gKi9cbiAgdGhpcy5fc3ltbGlua1BhdGhzID0gbmV3IE1hcCgpO1xuXG4gIHRoaXMuX3N0cmVhbXMgPSBuZXcgU2V0KCk7XG4gIHRoaXMuY2xvc2VkID0gZmFsc2U7XG5cbiAgLy8gU2V0IHVwIGRlZmF1bHQgb3B0aW9ucy5cbiAgaWYgKHVuZGVmKG9wdHMsICdwZXJzaXN0ZW50JykpIG9wdHMucGVyc2lzdGVudCA9IHRydWU7XG4gIGlmICh1bmRlZihvcHRzLCAnaWdub3JlSW5pdGlhbCcpKSBvcHRzLmlnbm9yZUluaXRpYWwgPSBmYWxzZTtcbiAgaWYgKHVuZGVmKG9wdHMsICdpZ25vcmVQZXJtaXNzaW9uRXJyb3JzJykpIG9wdHMuaWdub3JlUGVybWlzc2lvbkVycm9ycyA9IGZhbHNlO1xuICBpZiAodW5kZWYob3B0cywgJ2ludGVydmFsJykpIG9wdHMuaW50ZXJ2YWwgPSAxMDA7XG4gIGlmICh1bmRlZihvcHRzLCAnYmluYXJ5SW50ZXJ2YWwnKSkgb3B0cy5iaW5hcnlJbnRlcnZhbCA9IDMwMDtcbiAgaWYgKHVuZGVmKG9wdHMsICdkaXNhYmxlR2xvYmJpbmcnKSkgb3B0cy5kaXNhYmxlR2xvYmJpbmcgPSBmYWxzZTtcbiAgb3B0cy5lbmFibGVCaW5hcnlJbnRlcnZhbCA9IG9wdHMuYmluYXJ5SW50ZXJ2YWwgIT09IG9wdHMuaW50ZXJ2YWw7XG5cbiAgLy8gRW5hYmxlIGZzZXZlbnRzIG9uIE9TIFggd2hlbiBwb2xsaW5nIGlzbid0IGV4cGxpY2l0bHkgZW5hYmxlZC5cbiAgaWYgKHVuZGVmKG9wdHMsICd1c2VGc0V2ZW50cycpKSBvcHRzLnVzZUZzRXZlbnRzID0gIW9wdHMudXNlUG9sbGluZztcblxuICAvLyBJZiB3ZSBjYW4ndCB1c2UgZnNldmVudHMsIGVuc3VyZSB0aGUgb3B0aW9ucyByZWZsZWN0IGl0J3MgZGlzYWJsZWQuXG4gIGNvbnN0IGNhblVzZUZzRXZlbnRzID0gRnNFdmVudHNIYW5kbGVyLmNhblVzZSgpO1xuICBpZiAoIWNhblVzZUZzRXZlbnRzKSBvcHRzLnVzZUZzRXZlbnRzID0gZmFsc2U7XG5cbiAgLy8gVXNlIHBvbGxpbmcgb24gTWFjIGlmIG5vdCB1c2luZyBmc2V2ZW50cy5cbiAgLy8gT3RoZXIgcGxhdGZvcm1zIHVzZSBub24tcG9sbGluZyBmc193YXRjaC5cbiAgaWYgKHVuZGVmKG9wdHMsICd1c2VQb2xsaW5nJykgJiYgIW9wdHMudXNlRnNFdmVudHMpIHtcbiAgICBvcHRzLnVzZVBvbGxpbmcgPSBpc01hY29zO1xuICB9XG5cbiAgLy8gQWx3YXlzIGRlZmF1bHQgdG8gcG9sbGluZyBvbiBJQk0gaSBiZWNhdXNlIGZzLndhdGNoKCkgaXMgbm90IGF2YWlsYWJsZSBvbiBJQk0gaS5cbiAgaWYoaXNJQk1pKSB7XG4gICAgb3B0cy51c2VQb2xsaW5nID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIEdsb2JhbCBvdmVycmlkZSAodXNlZnVsIGZvciBlbmQtZGV2ZWxvcGVycyB0aGF0IG5lZWQgdG8gZm9yY2UgcG9sbGluZyBmb3IgYWxsXG4gIC8vIGluc3RhbmNlcyBvZiBjaG9raWRhciwgcmVnYXJkbGVzcyBvZiB1c2FnZS9kZXBlbmRlbmN5IGRlcHRoKVxuICBjb25zdCBlbnZQb2xsID0gcHJvY2Vzcy5lbnYuQ0hPS0lEQVJfVVNFUE9MTElORztcbiAgaWYgKGVudlBvbGwgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGVudkxvd2VyID0gZW52UG9sbC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKGVudkxvd2VyID09PSAnZmFsc2UnIHx8IGVudkxvd2VyID09PSAnMCcpIHtcbiAgICAgIG9wdHMudXNlUG9sbGluZyA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoZW52TG93ZXIgPT09ICd0cnVlJyB8fCBlbnZMb3dlciA9PT0gJzEnKSB7XG4gICAgICBvcHRzLnVzZVBvbGxpbmcgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRzLnVzZVBvbGxpbmcgPSAhIWVudkxvd2VyO1xuICAgIH1cbiAgfVxuICBjb25zdCBlbnZJbnRlcnZhbCA9IHByb2Nlc3MuZW52LkNIT0tJREFSX0lOVEVSVkFMO1xuICBpZiAoZW52SW50ZXJ2YWwpIHtcbiAgICBvcHRzLmludGVydmFsID0gTnVtYmVyLnBhcnNlSW50KGVudkludGVydmFsLCAxMCk7XG4gIH1cblxuICAvLyBFZGl0b3IgYXRvbWljIHdyaXRlIG5vcm1hbGl6YXRpb24gZW5hYmxlZCBieSBkZWZhdWx0IHdpdGggZnMud2F0Y2hcbiAgaWYgKHVuZGVmKG9wdHMsICdhdG9taWMnKSkgb3B0cy5hdG9taWMgPSAhb3B0cy51c2VQb2xsaW5nICYmICFvcHRzLnVzZUZzRXZlbnRzO1xuICBpZiAob3B0cy5hdG9taWMpIHRoaXMuX3BlbmRpbmdVbmxpbmtzID0gbmV3IE1hcCgpO1xuXG4gIGlmICh1bmRlZihvcHRzLCAnZm9sbG93U3ltbGlua3MnKSkgb3B0cy5mb2xsb3dTeW1saW5rcyA9IHRydWU7XG5cbiAgaWYgKHVuZGVmKG9wdHMsICdhd2FpdFdyaXRlRmluaXNoJykpIG9wdHMuYXdhaXRXcml0ZUZpbmlzaCA9IGZhbHNlO1xuICBpZiAob3B0cy5hd2FpdFdyaXRlRmluaXNoID09PSB0cnVlKSBvcHRzLmF3YWl0V3JpdGVGaW5pc2ggPSB7fTtcbiAgY29uc3QgYXdmID0gb3B0cy5hd2FpdFdyaXRlRmluaXNoO1xuICBpZiAoYXdmKSB7XG4gICAgaWYgKCFhd2Yuc3RhYmlsaXR5VGhyZXNob2xkKSBhd2Yuc3RhYmlsaXR5VGhyZXNob2xkID0gMjAwMDtcbiAgICBpZiAoIWF3Zi5wb2xsSW50ZXJ2YWwpIGF3Zi5wb2xsSW50ZXJ2YWwgPSAxMDA7XG4gICAgdGhpcy5fcGVuZGluZ1dyaXRlcyA9IG5ldyBNYXAoKTtcbiAgfVxuICBpZiAob3B0cy5pZ25vcmVkKSBvcHRzLmlnbm9yZWQgPSBhcnJpZnkob3B0cy5pZ25vcmVkKTtcblxuICBsZXQgcmVhZHlDYWxscyA9IDA7XG4gIHRoaXMuX2VtaXRSZWFkeSA9ICgpID0+IHtcbiAgICByZWFkeUNhbGxzKys7XG4gICAgaWYgKHJlYWR5Q2FsbHMgPj0gdGhpcy5fcmVhZHlDb3VudCkge1xuICAgICAgdGhpcy5fZW1pdFJlYWR5ID0gRU1QVFlfRk47XG4gICAgICB0aGlzLl9yZWFkeUVtaXR0ZWQgPSB0cnVlO1xuICAgICAgLy8gdXNlIHByb2Nlc3MubmV4dFRpY2sgdG8gYWxsb3cgdGltZSBmb3IgbGlzdGVuZXIgdG8gYmUgYm91bmRcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soKCkgPT4gdGhpcy5lbWl0KEVWX1JFQURZKSk7XG4gICAgfVxuICB9O1xuICB0aGlzLl9lbWl0UmF3ID0gKC4uLmFyZ3MpID0+IHRoaXMuZW1pdChFVl9SQVcsIC4uLmFyZ3MpO1xuICB0aGlzLl9yZWFkeUVtaXR0ZWQgPSBmYWxzZTtcbiAgdGhpcy5vcHRpb25zID0gb3B0cztcblxuICAvLyBJbml0aWFsaXplIHdpdGggcHJvcGVyIHdhdGNoZXIuXG4gIGlmIChvcHRzLnVzZUZzRXZlbnRzKSB7XG4gICAgdGhpcy5fZnNFdmVudHNIYW5kbGVyID0gbmV3IEZzRXZlbnRzSGFuZGxlcih0aGlzKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9ub2RlRnNIYW5kbGVyID0gbmV3IE5vZGVGc0hhbmRsZXIodGhpcyk7XG4gIH1cblxuICAvLyBZb3VcdTIwMTlyZSBmcm96ZW4gd2hlbiB5b3VyIGhlYXJ0XHUyMDE5cyBub3Qgb3Blbi5cbiAgT2JqZWN0LmZyZWV6ZShvcHRzKTtcbn1cblxuLy8gUHVibGljIG1ldGhvZHNcblxuLyoqXG4gKiBBZGRzIHBhdGhzIHRvIGJlIHdhdGNoZWQgb24gYW4gZXhpc3RpbmcgRlNXYXRjaGVyIGluc3RhbmNlXG4gKiBAcGFyYW0ge1BhdGh8QXJyYXk8UGF0aD59IHBhdGhzX1xuICogQHBhcmFtIHtTdHJpbmc9fSBfb3JpZ0FkZCBwcml2YXRlOyBmb3IgaGFuZGxpbmcgbm9uLWV4aXN0ZW50IHBhdGhzIHRvIGJlIHdhdGNoZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbj19IF9pbnRlcm5hbCBwcml2YXRlOyBpbmRpY2F0ZXMgYSBub24tdXNlciBhZGRcbiAqIEByZXR1cm5zIHtGU1dhdGNoZXJ9IGZvciBjaGFpbmluZ1xuICovXG5hZGQocGF0aHNfLCBfb3JpZ0FkZCwgX2ludGVybmFsKSB7XG4gIGNvbnN0IHtjd2QsIGRpc2FibGVHbG9iYmluZ30gPSB0aGlzLm9wdGlvbnM7XG4gIHRoaXMuY2xvc2VkID0gZmFsc2U7XG4gIGxldCBwYXRocyA9IHVuaWZ5UGF0aHMocGF0aHNfKTtcbiAgaWYgKGN3ZCkge1xuICAgIHBhdGhzID0gcGF0aHMubWFwKChwYXRoKSA9PiB7XG4gICAgICBjb25zdCBhYnNQYXRoID0gZ2V0QWJzb2x1dGVQYXRoKHBhdGgsIGN3ZCk7XG5cbiAgICAgIC8vIENoZWNrIGBwYXRoYCBpbnN0ZWFkIG9mIGBhYnNQYXRoYCBiZWNhdXNlIHRoZSBjd2QgcG9ydGlvbiBjYW4ndCBiZSBhIGdsb2JcbiAgICAgIGlmIChkaXNhYmxlR2xvYmJpbmcgfHwgIWlzR2xvYihwYXRoKSkge1xuICAgICAgICByZXR1cm4gYWJzUGF0aDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBub3JtYWxpemVQYXRoKGFic1BhdGgpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gc2V0IGFzaWRlIG5lZ2F0ZWQgZ2xvYiBzdHJpbmdzXG4gIHBhdGhzID0gcGF0aHMuZmlsdGVyKChwYXRoKSA9PiB7XG4gICAgaWYgKHBhdGguc3RhcnRzV2l0aChCQU5HKSkge1xuICAgICAgdGhpcy5faWdub3JlZFBhdGhzLmFkZChwYXRoLnNsaWNlKDEpKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBpZiBhIHBhdGggaXMgYmVpbmcgYWRkZWQgdGhhdCB3YXMgcHJldmlvdXNseSBpZ25vcmVkLCBzdG9wIGlnbm9yaW5nIGl0XG4gICAgdGhpcy5faWdub3JlZFBhdGhzLmRlbGV0ZShwYXRoKTtcbiAgICB0aGlzLl9pZ25vcmVkUGF0aHMuZGVsZXRlKHBhdGggKyBTTEFTSF9HTE9CU1RBUik7XG5cbiAgICAvLyByZXNldCB0aGUgY2FjaGVkIHVzZXJJZ25vcmVkIGFueW1hdGNoIGZuXG4gICAgLy8gdG8gbWFrZSBpZ25vcmVkUGF0aHMgY2hhbmdlcyBlZmZlY3RpdmVcbiAgICB0aGlzLl91c2VySWdub3JlZCA9IHVuZGVmaW5lZDtcblxuICAgIHJldHVybiB0cnVlO1xuICB9KTtcblxuICBpZiAodGhpcy5vcHRpb25zLnVzZUZzRXZlbnRzICYmIHRoaXMuX2ZzRXZlbnRzSGFuZGxlcikge1xuICAgIGlmICghdGhpcy5fcmVhZHlDb3VudCkgdGhpcy5fcmVhZHlDb3VudCA9IHBhdGhzLmxlbmd0aDtcbiAgICBpZiAodGhpcy5vcHRpb25zLnBlcnNpc3RlbnQpIHRoaXMuX3JlYWR5Q291bnQgKj0gMjtcbiAgICBwYXRocy5mb3JFYWNoKChwYXRoKSA9PiB0aGlzLl9mc0V2ZW50c0hhbmRsZXIuX2FkZFRvRnNFdmVudHMocGF0aCkpO1xuICB9IGVsc2Uge1xuICAgIGlmICghdGhpcy5fcmVhZHlDb3VudCkgdGhpcy5fcmVhZHlDb3VudCA9IDA7XG4gICAgdGhpcy5fcmVhZHlDb3VudCArPSBwYXRocy5sZW5ndGg7XG4gICAgUHJvbWlzZS5hbGwoXG4gICAgICBwYXRocy5tYXAoYXN5bmMgcGF0aCA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuX25vZGVGc0hhbmRsZXIuX2FkZFRvTm9kZUZzKHBhdGgsICFfaW50ZXJuYWwsIDAsIDAsIF9vcmlnQWRkKTtcbiAgICAgICAgaWYgKHJlcykgdGhpcy5fZW1pdFJlYWR5KCk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9KVxuICAgICkudGhlbihyZXN1bHRzID0+IHtcbiAgICAgIGlmICh0aGlzLmNsb3NlZCkgcmV0dXJuO1xuICAgICAgcmVzdWx0cy5maWx0ZXIoaXRlbSA9PiBpdGVtKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICB0aGlzLmFkZChzeXNQYXRoLmRpcm5hbWUoaXRlbSksIHN5c1BhdGguYmFzZW5hbWUoX29yaWdBZGQgfHwgaXRlbSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuLyoqXG4gKiBDbG9zZSB3YXRjaGVycyBvciBzdGFydCBpZ25vcmluZyBldmVudHMgZnJvbSBzcGVjaWZpZWQgcGF0aHMuXG4gKiBAcGFyYW0ge1BhdGh8QXJyYXk8UGF0aD59IHBhdGhzXyAtIHN0cmluZyBvciBhcnJheSBvZiBzdHJpbmdzLCBmaWxlL2RpcmVjdG9yeSBwYXRocyBhbmQvb3IgZ2xvYnNcbiAqIEByZXR1cm5zIHtGU1dhdGNoZXJ9IGZvciBjaGFpbmluZ1xuKi9cbnVud2F0Y2gocGF0aHNfKSB7XG4gIGlmICh0aGlzLmNsb3NlZCkgcmV0dXJuIHRoaXM7XG4gIGNvbnN0IHBhdGhzID0gdW5pZnlQYXRocyhwYXRoc18pO1xuICBjb25zdCB7Y3dkfSA9IHRoaXMub3B0aW9ucztcblxuICBwYXRocy5mb3JFYWNoKChwYXRoKSA9PiB7XG4gICAgLy8gY29udmVydCB0byBhYnNvbHV0ZSBwYXRoIHVubGVzcyByZWxhdGl2ZSBwYXRoIGFscmVhZHkgbWF0Y2hlc1xuICAgIGlmICghc3lzUGF0aC5pc0Fic29sdXRlKHBhdGgpICYmICF0aGlzLl9jbG9zZXJzLmhhcyhwYXRoKSkge1xuICAgICAgaWYgKGN3ZCkgcGF0aCA9IHN5c1BhdGguam9pbihjd2QsIHBhdGgpO1xuICAgICAgcGF0aCA9IHN5c1BhdGgucmVzb2x2ZShwYXRoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jbG9zZVBhdGgocGF0aCk7XG5cbiAgICB0aGlzLl9pZ25vcmVkUGF0aHMuYWRkKHBhdGgpO1xuICAgIGlmICh0aGlzLl93YXRjaGVkLmhhcyhwYXRoKSkge1xuICAgICAgdGhpcy5faWdub3JlZFBhdGhzLmFkZChwYXRoICsgU0xBU0hfR0xPQlNUQVIpO1xuICAgIH1cblxuICAgIC8vIHJlc2V0IHRoZSBjYWNoZWQgdXNlcklnbm9yZWQgYW55bWF0Y2ggZm5cbiAgICAvLyB0byBtYWtlIGlnbm9yZWRQYXRocyBjaGFuZ2VzIGVmZmVjdGl2ZVxuICAgIHRoaXMuX3VzZXJJZ25vcmVkID0gdW5kZWZpbmVkO1xuICB9KTtcblxuICByZXR1cm4gdGhpcztcbn1cblxuLyoqXG4gKiBDbG9zZSB3YXRjaGVycyBhbmQgcmVtb3ZlIGFsbCBsaXN0ZW5lcnMgZnJvbSB3YXRjaGVkIHBhdGhzLlxuICogQHJldHVybnMge1Byb21pc2U8dm9pZD59LlxuKi9cbmNsb3NlKCkge1xuICBpZiAodGhpcy5jbG9zZWQpIHJldHVybiB0aGlzLl9jbG9zZVByb21pc2U7XG4gIHRoaXMuY2xvc2VkID0gdHJ1ZTtcblxuICAvLyBNZW1vcnkgbWFuYWdlbWVudC5cbiAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgY29uc3QgY2xvc2VycyA9IFtdO1xuICB0aGlzLl9jbG9zZXJzLmZvckVhY2goY2xvc2VyTGlzdCA9PiBjbG9zZXJMaXN0LmZvckVhY2goY2xvc2VyID0+IHtcbiAgICBjb25zdCBwcm9taXNlID0gY2xvc2VyKCk7XG4gICAgaWYgKHByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSBjbG9zZXJzLnB1c2gocHJvbWlzZSk7XG4gIH0pKTtcbiAgdGhpcy5fc3RyZWFtcy5mb3JFYWNoKHN0cmVhbSA9PiBzdHJlYW0uZGVzdHJveSgpKTtcbiAgdGhpcy5fdXNlcklnbm9yZWQgPSB1bmRlZmluZWQ7XG4gIHRoaXMuX3JlYWR5Q291bnQgPSAwO1xuICB0aGlzLl9yZWFkeUVtaXR0ZWQgPSBmYWxzZTtcbiAgdGhpcy5fd2F0Y2hlZC5mb3JFYWNoKGRpcmVudCA9PiBkaXJlbnQuZGlzcG9zZSgpKTtcbiAgWydjbG9zZXJzJywgJ3dhdGNoZWQnLCAnc3RyZWFtcycsICdzeW1saW5rUGF0aHMnLCAndGhyb3R0bGVkJ10uZm9yRWFjaChrZXkgPT4ge1xuICAgIHRoaXNbYF8ke2tleX1gXS5jbGVhcigpO1xuICB9KTtcblxuICB0aGlzLl9jbG9zZVByb21pc2UgPSBjbG9zZXJzLmxlbmd0aCA/IFByb21pc2UuYWxsKGNsb3NlcnMpLnRoZW4oKCkgPT4gdW5kZWZpbmVkKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICByZXR1cm4gdGhpcy5fY2xvc2VQcm9taXNlO1xufVxuXG4vKipcbiAqIEV4cG9zZSBsaXN0IG9mIHdhdGNoZWQgcGF0aHNcbiAqIEByZXR1cm5zIHtPYmplY3R9IGZvciBjaGFpbmluZ1xuKi9cbmdldFdhdGNoZWQoKSB7XG4gIGNvbnN0IHdhdGNoTGlzdCA9IHt9O1xuICB0aGlzLl93YXRjaGVkLmZvckVhY2goKGVudHJ5LCBkaXIpID0+IHtcbiAgICBjb25zdCBrZXkgPSB0aGlzLm9wdGlvbnMuY3dkID8gc3lzUGF0aC5yZWxhdGl2ZSh0aGlzLm9wdGlvbnMuY3dkLCBkaXIpIDogZGlyO1xuICAgIHdhdGNoTGlzdFtrZXkgfHwgT05FX0RPVF0gPSBlbnRyeS5nZXRDaGlsZHJlbigpLnNvcnQoKTtcbiAgfSk7XG4gIHJldHVybiB3YXRjaExpc3Q7XG59XG5cbmVtaXRXaXRoQWxsKGV2ZW50LCBhcmdzKSB7XG4gIHRoaXMuZW1pdCguLi5hcmdzKTtcbiAgaWYgKGV2ZW50ICE9PSBFVl9FUlJPUikgdGhpcy5lbWl0KEVWX0FMTCwgLi4uYXJncyk7XG59XG5cbi8vIENvbW1vbiBoZWxwZXJzXG4vLyAtLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIE5vcm1hbGl6ZSBhbmQgZW1pdCBldmVudHMuXG4gKiBDYWxsaW5nIF9lbWl0IERPRVMgTk9UIE1FQU4gZW1pdCgpIHdvdWxkIGJlIGNhbGxlZCFcbiAqIEBwYXJhbSB7RXZlbnROYW1lfSBldmVudCBUeXBlIG9mIGV2ZW50XG4gKiBAcGFyYW0ge1BhdGh9IHBhdGggRmlsZSBvciBkaXJlY3RvcnkgcGF0aFxuICogQHBhcmFtIHsqPX0gdmFsMSBhcmd1bWVudHMgdG8gYmUgcGFzc2VkIHdpdGggZXZlbnRcbiAqIEBwYXJhbSB7Kj19IHZhbDJcbiAqIEBwYXJhbSB7Kj19IHZhbDNcbiAqIEByZXR1cm5zIHRoZSBlcnJvciBpZiBkZWZpbmVkLCBvdGhlcndpc2UgdGhlIHZhbHVlIG9mIHRoZSBGU1dhdGNoZXIgaW5zdGFuY2UncyBgY2xvc2VkYCBmbGFnXG4gKi9cbmFzeW5jIF9lbWl0KGV2ZW50LCBwYXRoLCB2YWwxLCB2YWwyLCB2YWwzKSB7XG4gIGlmICh0aGlzLmNsb3NlZCkgcmV0dXJuO1xuXG4gIGNvbnN0IG9wdHMgPSB0aGlzLm9wdGlvbnM7XG4gIGlmIChpc1dpbmRvd3MpIHBhdGggPSBzeXNQYXRoLm5vcm1hbGl6ZShwYXRoKTtcbiAgaWYgKG9wdHMuY3dkKSBwYXRoID0gc3lzUGF0aC5yZWxhdGl2ZShvcHRzLmN3ZCwgcGF0aCk7XG4gIC8qKiBAdHlwZSBBcnJheTxhbnk+ICovXG4gIGNvbnN0IGFyZ3MgPSBbZXZlbnQsIHBhdGhdO1xuICBpZiAodmFsMyAhPT0gdW5kZWZpbmVkKSBhcmdzLnB1c2godmFsMSwgdmFsMiwgdmFsMyk7XG4gIGVsc2UgaWYgKHZhbDIgIT09IHVuZGVmaW5lZCkgYXJncy5wdXNoKHZhbDEsIHZhbDIpO1xuICBlbHNlIGlmICh2YWwxICE9PSB1bmRlZmluZWQpIGFyZ3MucHVzaCh2YWwxKTtcblxuICBjb25zdCBhd2YgPSBvcHRzLmF3YWl0V3JpdGVGaW5pc2g7XG4gIGxldCBwdztcbiAgaWYgKGF3ZiAmJiAocHcgPSB0aGlzLl9wZW5kaW5nV3JpdGVzLmdldChwYXRoKSkpIHtcbiAgICBwdy5sYXN0Q2hhbmdlID0gbmV3IERhdGUoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlmIChvcHRzLmF0b21pYykge1xuICAgIGlmIChldmVudCA9PT0gRVZfVU5MSU5LKSB7XG4gICAgICB0aGlzLl9wZW5kaW5nVW5saW5rcy5zZXQocGF0aCwgYXJncyk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fcGVuZGluZ1VubGlua3MuZm9yRWFjaCgoZW50cnksIHBhdGgpID0+IHtcbiAgICAgICAgICB0aGlzLmVtaXQoLi4uZW50cnkpO1xuICAgICAgICAgIHRoaXMuZW1pdChFVl9BTEwsIC4uLmVudHJ5KTtcbiAgICAgICAgICB0aGlzLl9wZW5kaW5nVW5saW5rcy5kZWxldGUocGF0aCk7XG4gICAgICAgIH0pO1xuICAgICAgfSwgdHlwZW9mIG9wdHMuYXRvbWljID09PSAnbnVtYmVyJyA/IG9wdHMuYXRvbWljIDogMTAwKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBpZiAoZXZlbnQgPT09IEVWX0FERCAmJiB0aGlzLl9wZW5kaW5nVW5saW5rcy5oYXMocGF0aCkpIHtcbiAgICAgIGV2ZW50ID0gYXJnc1swXSA9IEVWX0NIQU5HRTtcbiAgICAgIHRoaXMuX3BlbmRpbmdVbmxpbmtzLmRlbGV0ZShwYXRoKTtcbiAgICB9XG4gIH1cblxuICBpZiAoYXdmICYmIChldmVudCA9PT0gRVZfQUREIHx8IGV2ZW50ID09PSBFVl9DSEFOR0UpICYmIHRoaXMuX3JlYWR5RW1pdHRlZCkge1xuICAgIGNvbnN0IGF3ZkVtaXQgPSAoZXJyLCBzdGF0cykgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBldmVudCA9IGFyZ3NbMF0gPSBFVl9FUlJPUjtcbiAgICAgICAgYXJnc1sxXSA9IGVycjtcbiAgICAgICAgdGhpcy5lbWl0V2l0aEFsbChldmVudCwgYXJncyk7XG4gICAgICB9IGVsc2UgaWYgKHN0YXRzKSB7XG4gICAgICAgIC8vIGlmIHN0YXRzIGRvZXNuJ3QgZXhpc3QgdGhlIGZpbGUgbXVzdCBoYXZlIGJlZW4gZGVsZXRlZFxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgYXJnc1syXSA9IHN0YXRzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFyZ3MucHVzaChzdGF0cyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbWl0V2l0aEFsbChldmVudCwgYXJncyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuX2F3YWl0V3JpdGVGaW5pc2gocGF0aCwgYXdmLnN0YWJpbGl0eVRocmVzaG9sZCwgZXZlbnQsIGF3ZkVtaXQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaWYgKGV2ZW50ID09PSBFVl9DSEFOR0UpIHtcbiAgICBjb25zdCBpc1Rocm90dGxlZCA9ICF0aGlzLl90aHJvdHRsZShFVl9DSEFOR0UsIHBhdGgsIDUwKTtcbiAgICBpZiAoaXNUaHJvdHRsZWQpIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaWYgKG9wdHMuYWx3YXlzU3RhdCAmJiB2YWwxID09PSB1bmRlZmluZWQgJiZcbiAgICAoZXZlbnQgPT09IEVWX0FERCB8fCBldmVudCA9PT0gRVZfQUREX0RJUiB8fCBldmVudCA9PT0gRVZfQ0hBTkdFKVxuICApIHtcbiAgICBjb25zdCBmdWxsUGF0aCA9IG9wdHMuY3dkID8gc3lzUGF0aC5qb2luKG9wdHMuY3dkLCBwYXRoKSA6IHBhdGg7XG4gICAgbGV0IHN0YXRzO1xuICAgIHRyeSB7XG4gICAgICBzdGF0cyA9IGF3YWl0IHN0YXQoZnVsbFBhdGgpO1xuICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAvLyBTdXBwcmVzcyBldmVudCB3aGVuIGZzX3N0YXQgZmFpbHMsIHRvIGF2b2lkIHNlbmRpbmcgdW5kZWZpbmVkICdzdGF0J1xuICAgIGlmICghc3RhdHMgfHwgdGhpcy5jbG9zZWQpIHJldHVybjtcbiAgICBhcmdzLnB1c2goc3RhdHMpO1xuICB9XG4gIHRoaXMuZW1pdFdpdGhBbGwoZXZlbnQsIGFyZ3MpO1xuXG4gIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIENvbW1vbiBoYW5kbGVyIGZvciBlcnJvcnNcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yXG4gKiBAcmV0dXJucyB7RXJyb3J8Qm9vbGVhbn0gVGhlIGVycm9yIGlmIGRlZmluZWQsIG90aGVyd2lzZSB0aGUgdmFsdWUgb2YgdGhlIEZTV2F0Y2hlciBpbnN0YW5jZSdzIGBjbG9zZWRgIGZsYWdcbiAqL1xuX2hhbmRsZUVycm9yKGVycm9yKSB7XG4gIGNvbnN0IGNvZGUgPSBlcnJvciAmJiBlcnJvci5jb2RlO1xuICBpZiAoZXJyb3IgJiYgY29kZSAhPT0gJ0VOT0VOVCcgJiYgY29kZSAhPT0gJ0VOT1RESVInICYmXG4gICAgKCF0aGlzLm9wdGlvbnMuaWdub3JlUGVybWlzc2lvbkVycm9ycyB8fCAoY29kZSAhPT0gJ0VQRVJNJyAmJiBjb2RlICE9PSAnRUFDQ0VTJykpXG4gICkge1xuICAgIHRoaXMuZW1pdChFVl9FUlJPUiwgZXJyb3IpO1xuICB9XG4gIHJldHVybiBlcnJvciB8fCB0aGlzLmNsb3NlZDtcbn1cblxuLyoqXG4gKiBIZWxwZXIgdXRpbGl0eSBmb3IgdGhyb3R0bGluZ1xuICogQHBhcmFtIHtUaHJvdHRsZVR5cGV9IGFjdGlvblR5cGUgdHlwZSBiZWluZyB0aHJvdHRsZWRcbiAqIEBwYXJhbSB7UGF0aH0gcGF0aCBiZWluZyBhY3RlZCB1cG9uXG4gKiBAcGFyYW0ge051bWJlcn0gdGltZW91dCBkdXJhdGlvbiBvZiB0aW1lIHRvIHN1cHByZXNzIGR1cGxpY2F0ZSBhY3Rpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fGZhbHNlfSB0cmFja2luZyBvYmplY3Qgb3IgZmFsc2UgaWYgYWN0aW9uIHNob3VsZCBiZSBzdXBwcmVzc2VkXG4gKi9cbl90aHJvdHRsZShhY3Rpb25UeXBlLCBwYXRoLCB0aW1lb3V0KSB7XG4gIGlmICghdGhpcy5fdGhyb3R0bGVkLmhhcyhhY3Rpb25UeXBlKSkge1xuICAgIHRoaXMuX3Rocm90dGxlZC5zZXQoYWN0aW9uVHlwZSwgbmV3IE1hcCgpKTtcbiAgfVxuXG4gIC8qKiBAdHlwZSB7TWFwPFBhdGgsIE9iamVjdD59ICovXG4gIGNvbnN0IGFjdGlvbiA9IHRoaXMuX3Rocm90dGxlZC5nZXQoYWN0aW9uVHlwZSk7XG4gIC8qKiBAdHlwZSB7T2JqZWN0fSAqL1xuICBjb25zdCBhY3Rpb25QYXRoID0gYWN0aW9uLmdldChwYXRoKTtcblxuICBpZiAoYWN0aW9uUGF0aCkge1xuICAgIGFjdGlvblBhdGguY291bnQrKztcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBsZXQgdGltZW91dE9iamVjdDtcbiAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IGFjdGlvbi5nZXQocGF0aCk7XG4gICAgY29uc3QgY291bnQgPSBpdGVtID8gaXRlbS5jb3VudCA6IDA7XG4gICAgYWN0aW9uLmRlbGV0ZShwYXRoKTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dE9iamVjdCk7XG4gICAgaWYgKGl0ZW0pIGNsZWFyVGltZW91dChpdGVtLnRpbWVvdXRPYmplY3QpO1xuICAgIHJldHVybiBjb3VudDtcbiAgfTtcbiAgdGltZW91dE9iamVjdCA9IHNldFRpbWVvdXQoY2xlYXIsIHRpbWVvdXQpO1xuICBjb25zdCB0aHIgPSB7dGltZW91dE9iamVjdCwgY2xlYXIsIGNvdW50OiAwfTtcbiAgYWN0aW9uLnNldChwYXRoLCB0aHIpO1xuICByZXR1cm4gdGhyO1xufVxuXG5faW5jclJlYWR5Q291bnQoKSB7XG4gIHJldHVybiB0aGlzLl9yZWFkeUNvdW50Kys7XG59XG5cbi8qKlxuICogQXdhaXRzIHdyaXRlIG9wZXJhdGlvbiB0byBmaW5pc2guXG4gKiBQb2xscyBhIG5ld2x5IGNyZWF0ZWQgZmlsZSBmb3Igc2l6ZSB2YXJpYXRpb25zLiBXaGVuIGZpbGVzIHNpemUgZG9lcyBub3QgY2hhbmdlIGZvciAndGhyZXNob2xkJyBtaWxsaXNlY29uZHMgY2FsbHMgY2FsbGJhY2suXG4gKiBAcGFyYW0ge1BhdGh9IHBhdGggYmVpbmcgYWN0ZWQgdXBvblxuICogQHBhcmFtIHtOdW1iZXJ9IHRocmVzaG9sZCBUaW1lIGluIG1pbGxpc2Vjb25kcyBhIGZpbGUgc2l6ZSBtdXN0IGJlIGZpeGVkIGJlZm9yZSBhY2tub3dsZWRnaW5nIHdyaXRlIE9QIGlzIGZpbmlzaGVkXG4gKiBAcGFyYW0ge0V2ZW50TmFtZX0gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGF3ZkVtaXQgQ2FsbGJhY2sgdG8gYmUgY2FsbGVkIHdoZW4gcmVhZHkgZm9yIGV2ZW50IHRvIGJlIGVtaXR0ZWQuXG4gKi9cbl9hd2FpdFdyaXRlRmluaXNoKHBhdGgsIHRocmVzaG9sZCwgZXZlbnQsIGF3ZkVtaXQpIHtcbiAgbGV0IHRpbWVvdXRIYW5kbGVyO1xuXG4gIGxldCBmdWxsUGF0aCA9IHBhdGg7XG4gIGlmICh0aGlzLm9wdGlvbnMuY3dkICYmICFzeXNQYXRoLmlzQWJzb2x1dGUocGF0aCkpIHtcbiAgICBmdWxsUGF0aCA9IHN5c1BhdGguam9pbih0aGlzLm9wdGlvbnMuY3dkLCBwYXRoKTtcbiAgfVxuXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgY29uc3QgYXdhaXRXcml0ZUZpbmlzaCA9IChwcmV2U3RhdCkgPT4ge1xuICAgIGZzLnN0YXQoZnVsbFBhdGgsIChlcnIsIGN1clN0YXQpID0+IHtcbiAgICAgIGlmIChlcnIgfHwgIXRoaXMuX3BlbmRpbmdXcml0ZXMuaGFzKHBhdGgpKSB7XG4gICAgICAgIGlmIChlcnIgJiYgZXJyLmNvZGUgIT09ICdFTk9FTlQnKSBhd2ZFbWl0KGVycik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgbm93ID0gTnVtYmVyKG5ldyBEYXRlKCkpO1xuXG4gICAgICBpZiAocHJldlN0YXQgJiYgY3VyU3RhdC5zaXplICE9PSBwcmV2U3RhdC5zaXplKSB7XG4gICAgICAgIHRoaXMuX3BlbmRpbmdXcml0ZXMuZ2V0KHBhdGgpLmxhc3RDaGFuZ2UgPSBub3c7XG4gICAgICB9XG4gICAgICBjb25zdCBwdyA9IHRoaXMuX3BlbmRpbmdXcml0ZXMuZ2V0KHBhdGgpO1xuICAgICAgY29uc3QgZGYgPSBub3cgLSBwdy5sYXN0Q2hhbmdlO1xuXG4gICAgICBpZiAoZGYgPj0gdGhyZXNob2xkKSB7XG4gICAgICAgIHRoaXMuX3BlbmRpbmdXcml0ZXMuZGVsZXRlKHBhdGgpO1xuICAgICAgICBhd2ZFbWl0KHVuZGVmaW5lZCwgY3VyU3RhdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aW1lb3V0SGFuZGxlciA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgYXdhaXRXcml0ZUZpbmlzaCxcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuYXdhaXRXcml0ZUZpbmlzaC5wb2xsSW50ZXJ2YWwsXG4gICAgICAgICAgY3VyU3RhdFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGlmICghdGhpcy5fcGVuZGluZ1dyaXRlcy5oYXMocGF0aCkpIHtcbiAgICB0aGlzLl9wZW5kaW5nV3JpdGVzLnNldChwYXRoLCB7XG4gICAgICBsYXN0Q2hhbmdlOiBub3csXG4gICAgICBjYW5jZWxXYWl0OiAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3BlbmRpbmdXcml0ZXMuZGVsZXRlKHBhdGgpO1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dEhhbmRsZXIpO1xuICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGltZW91dEhhbmRsZXIgPSBzZXRUaW1lb3V0KFxuICAgICAgYXdhaXRXcml0ZUZpbmlzaCxcbiAgICAgIHRoaXMub3B0aW9ucy5hd2FpdFdyaXRlRmluaXNoLnBvbGxJbnRlcnZhbFxuICAgICk7XG4gIH1cbn1cblxuX2dldEdsb2JJZ25vcmVkKCkge1xuICByZXR1cm4gWy4uLnRoaXMuX2lnbm9yZWRQYXRocy52YWx1ZXMoKV07XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHVzZXIgaGFzIGFza2VkIHRvIGlnbm9yZSB0aGlzIHBhdGguXG4gKiBAcGFyYW0ge1BhdGh9IHBhdGggZmlsZXBhdGggb3IgZGlyXG4gKiBAcGFyYW0ge2ZzLlN0YXRzPX0gc3RhdHMgcmVzdWx0IG9mIGZzLnN0YXRcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5faXNJZ25vcmVkKHBhdGgsIHN0YXRzKSB7XG4gIGlmICh0aGlzLm9wdGlvbnMuYXRvbWljICYmIERPVF9SRS50ZXN0KHBhdGgpKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKCF0aGlzLl91c2VySWdub3JlZCkge1xuICAgIGNvbnN0IHtjd2R9ID0gdGhpcy5vcHRpb25zO1xuICAgIGNvbnN0IGlnbiA9IHRoaXMub3B0aW9ucy5pZ25vcmVkO1xuXG4gICAgY29uc3QgaWdub3JlZCA9IGlnbiAmJiBpZ24ubWFwKG5vcm1hbGl6ZUlnbm9yZWQoY3dkKSk7XG4gICAgY29uc3QgcGF0aHMgPSBhcnJpZnkoaWdub3JlZClcbiAgICAgIC5maWx0ZXIoKHBhdGgpID0+IHR5cGVvZiBwYXRoID09PSBTVFJJTkdfVFlQRSAmJiAhaXNHbG9iKHBhdGgpKVxuICAgICAgLm1hcCgocGF0aCkgPT4gcGF0aCArIFNMQVNIX0dMT0JTVEFSKTtcbiAgICBjb25zdCBsaXN0ID0gdGhpcy5fZ2V0R2xvYklnbm9yZWQoKS5tYXAobm9ybWFsaXplSWdub3JlZChjd2QpKS5jb25jYXQoaWdub3JlZCwgcGF0aHMpO1xuICAgIHRoaXMuX3VzZXJJZ25vcmVkID0gYW55bWF0Y2gobGlzdCwgdW5kZWZpbmVkLCBBTllNQVRDSF9PUFRTKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLl91c2VySWdub3JlZChbcGF0aCwgc3RhdHNdKTtcbn1cblxuX2lzbnRJZ25vcmVkKHBhdGgsIHN0YXQpIHtcbiAgcmV0dXJuICF0aGlzLl9pc0lnbm9yZWQocGF0aCwgc3RhdCk7XG59XG5cbi8qKlxuICogUHJvdmlkZXMgYSBzZXQgb2YgY29tbW9uIGhlbHBlcnMgYW5kIHByb3BlcnRpZXMgcmVsYXRpbmcgdG8gc3ltbGluayBhbmQgZ2xvYiBoYW5kbGluZy5cbiAqIEBwYXJhbSB7UGF0aH0gcGF0aCBmaWxlLCBkaXJlY3RvcnksIG9yIGdsb2IgcGF0dGVybiBiZWluZyB3YXRjaGVkXG4gKiBAcGFyYW0ge051bWJlcj19IGRlcHRoIGF0IGFueSBkZXB0aCA+IDAsIHRoaXMgaXNuJ3QgYSBnbG9iXG4gKiBAcmV0dXJucyB7V2F0Y2hIZWxwZXJ9IG9iamVjdCBjb250YWluaW5nIGhlbHBlcnMgZm9yIHRoaXMgcGF0aFxuICovXG5fZ2V0V2F0Y2hIZWxwZXJzKHBhdGgsIGRlcHRoKSB7XG4gIGNvbnN0IHdhdGNoUGF0aCA9IGRlcHRoIHx8IHRoaXMub3B0aW9ucy5kaXNhYmxlR2xvYmJpbmcgfHwgIWlzR2xvYihwYXRoKSA/IHBhdGggOiBnbG9iUGFyZW50KHBhdGgpO1xuICBjb25zdCBmb2xsb3cgPSB0aGlzLm9wdGlvbnMuZm9sbG93U3ltbGlua3M7XG5cbiAgcmV0dXJuIG5ldyBXYXRjaEhlbHBlcihwYXRoLCB3YXRjaFBhdGgsIGZvbGxvdywgdGhpcyk7XG59XG5cbi8vIERpcmVjdG9yeSBoZWxwZXJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIFByb3ZpZGVzIGRpcmVjdG9yeSB0cmFja2luZyBvYmplY3RzXG4gKiBAcGFyYW0ge1N0cmluZ30gZGlyZWN0b3J5IHBhdGggb2YgdGhlIGRpcmVjdG9yeVxuICogQHJldHVybnMge0RpckVudHJ5fSB0aGUgZGlyZWN0b3J5J3MgdHJhY2tpbmcgb2JqZWN0XG4gKi9cbl9nZXRXYXRjaGVkRGlyKGRpcmVjdG9yeSkge1xuICBpZiAoIXRoaXMuX2JvdW5kUmVtb3ZlKSB0aGlzLl9ib3VuZFJlbW92ZSA9IHRoaXMuX3JlbW92ZS5iaW5kKHRoaXMpO1xuICBjb25zdCBkaXIgPSBzeXNQYXRoLnJlc29sdmUoZGlyZWN0b3J5KTtcbiAgaWYgKCF0aGlzLl93YXRjaGVkLmhhcyhkaXIpKSB0aGlzLl93YXRjaGVkLnNldChkaXIsIG5ldyBEaXJFbnRyeShkaXIsIHRoaXMuX2JvdW5kUmVtb3ZlKSk7XG4gIHJldHVybiB0aGlzLl93YXRjaGVkLmdldChkaXIpO1xufVxuXG4vLyBGaWxlIGhlbHBlcnNcbi8vIC0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIENoZWNrIGZvciByZWFkIHBlcm1pc3Npb25zLlxuICogQmFzZWQgb24gdGhpcyBhbnN3ZXIgb24gU086IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xMTc4MTQwNC8xMzU4NDA1XG4gKiBAcGFyYW0ge2ZzLlN0YXRzfSBzdGF0cyAtIG9iamVjdCwgcmVzdWx0IG9mIGZzX3N0YXRcbiAqIEByZXR1cm5zIHtCb29sZWFufSBpbmRpY2F0ZXMgd2hldGhlciB0aGUgZmlsZSBjYW4gYmUgcmVhZFxuKi9cbl9oYXNSZWFkUGVybWlzc2lvbnMoc3RhdHMpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5pZ25vcmVQZXJtaXNzaW9uRXJyb3JzKSByZXR1cm4gdHJ1ZTtcblxuICAvLyBzdGF0cy5tb2RlIG1heSBiZSBiaWdpbnRcbiAgY29uc3QgbWQgPSBzdGF0cyAmJiBOdW1iZXIucGFyc2VJbnQoc3RhdHMubW9kZSwgMTApO1xuICBjb25zdCBzdCA9IG1kICYgMG83Nzc7XG4gIGNvbnN0IGl0ID0gTnVtYmVyLnBhcnNlSW50KHN0LnRvU3RyaW5nKDgpWzBdLCAxMCk7XG4gIHJldHVybiBCb29sZWFuKDQgJiBpdCk7XG59XG5cbi8qKlxuICogSGFuZGxlcyBlbWl0dGluZyB1bmxpbmsgZXZlbnRzIGZvclxuICogZmlsZXMgYW5kIGRpcmVjdG9yaWVzLCBhbmQgdmlhIHJlY3Vyc2lvbiwgZm9yXG4gKiBmaWxlcyBhbmQgZGlyZWN0b3JpZXMgd2l0aGluIGRpcmVjdG9yaWVzIHRoYXQgYXJlIHVubGlua2VkXG4gKiBAcGFyYW0ge1N0cmluZ30gZGlyZWN0b3J5IHdpdGhpbiB3aGljaCB0aGUgZm9sbG93aW5nIGl0ZW0gaXMgbG9jYXRlZFxuICogQHBhcmFtIHtTdHJpbmd9IGl0ZW0gICAgICBiYXNlIHBhdGggb2YgaXRlbS9kaXJlY3RvcnlcbiAqIEByZXR1cm5zIHt2b2lkfVxuKi9cbl9yZW1vdmUoZGlyZWN0b3J5LCBpdGVtLCBpc0RpcmVjdG9yeSkge1xuICAvLyBpZiB3aGF0IGlzIGJlaW5nIGRlbGV0ZWQgaXMgYSBkaXJlY3RvcnksIGdldCB0aGF0IGRpcmVjdG9yeSdzIHBhdGhzXG4gIC8vIGZvciByZWN1cnNpdmUgZGVsZXRpbmcgYW5kIGNsZWFuaW5nIG9mIHdhdGNoZWQgb2JqZWN0XG4gIC8vIGlmIGl0IGlzIG5vdCBhIGRpcmVjdG9yeSwgbmVzdGVkRGlyZWN0b3J5Q2hpbGRyZW4gd2lsbCBiZSBlbXB0eSBhcnJheVxuICBjb25zdCBwYXRoID0gc3lzUGF0aC5qb2luKGRpcmVjdG9yeSwgaXRlbSk7XG4gIGNvbnN0IGZ1bGxQYXRoID0gc3lzUGF0aC5yZXNvbHZlKHBhdGgpO1xuICBpc0RpcmVjdG9yeSA9IGlzRGlyZWN0b3J5ICE9IG51bGxcbiAgICA/IGlzRGlyZWN0b3J5XG4gICAgOiB0aGlzLl93YXRjaGVkLmhhcyhwYXRoKSB8fCB0aGlzLl93YXRjaGVkLmhhcyhmdWxsUGF0aCk7XG5cbiAgLy8gcHJldmVudCBkdXBsaWNhdGUgaGFuZGxpbmcgaW4gY2FzZSBvZiBhcnJpdmluZyBoZXJlIG5lYXJseSBzaW11bHRhbmVvdXNseVxuICAvLyB2aWEgbXVsdGlwbGUgcGF0aHMgKHN1Y2ggYXMgX2hhbmRsZUZpbGUgYW5kIF9oYW5kbGVEaXIpXG4gIGlmICghdGhpcy5fdGhyb3R0bGUoJ3JlbW92ZScsIHBhdGgsIDEwMCkpIHJldHVybjtcblxuICAvLyBpZiB0aGUgb25seSB3YXRjaGVkIGZpbGUgaXMgcmVtb3ZlZCwgd2F0Y2ggZm9yIGl0cyByZXR1cm5cbiAgaWYgKCFpc0RpcmVjdG9yeSAmJiAhdGhpcy5vcHRpb25zLnVzZUZzRXZlbnRzICYmIHRoaXMuX3dhdGNoZWQuc2l6ZSA9PT0gMSkge1xuICAgIHRoaXMuYWRkKGRpcmVjdG9yeSwgaXRlbSwgdHJ1ZSk7XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgY3JlYXRlIGEgbmV3IGVudHJ5IGluIHRoZSB3YXRjaGVkIG9iamVjdCBpbiBlaXRoZXIgY2FzZVxuICAvLyBzbyB3ZSBnb3QgdG8gZG8gdGhlIGRpcmVjdG9yeSBjaGVjayBiZWZvcmVoYW5kXG4gIGNvbnN0IHdwID0gdGhpcy5fZ2V0V2F0Y2hlZERpcihwYXRoKTtcbiAgY29uc3QgbmVzdGVkRGlyZWN0b3J5Q2hpbGRyZW4gPSB3cC5nZXRDaGlsZHJlbigpO1xuXG4gIC8vIFJlY3Vyc2l2ZWx5IHJlbW92ZSBjaGlsZHJlbiBkaXJlY3RvcmllcyAvIGZpbGVzLlxuICBuZXN0ZWREaXJlY3RvcnlDaGlsZHJlbi5mb3JFYWNoKG5lc3RlZCA9PiB0aGlzLl9yZW1vdmUocGF0aCwgbmVzdGVkKSk7XG5cbiAgLy8gQ2hlY2sgaWYgaXRlbSB3YXMgb24gdGhlIHdhdGNoZWQgbGlzdCBhbmQgcmVtb3ZlIGl0XG4gIGNvbnN0IHBhcmVudCA9IHRoaXMuX2dldFdhdGNoZWREaXIoZGlyZWN0b3J5KTtcbiAgY29uc3Qgd2FzVHJhY2tlZCA9IHBhcmVudC5oYXMoaXRlbSk7XG4gIHBhcmVudC5yZW1vdmUoaXRlbSk7XG5cbiAgLy8gRml4ZXMgaXNzdWUgIzEwNDIgLT4gUmVsYXRpdmUgcGF0aHMgd2VyZSBkZXRlY3RlZCBhbmQgYWRkZWQgYXMgc3ltbGlua3NcbiAgLy8gKGh0dHBzOi8vZ2l0aHViLmNvbS9wYXVsbWlsbHIvY2hva2lkYXIvYmxvYi9lMTc1M2RkYmM5NTcxYmRjMzNiNGE0YWYxNzJkNTJjYjZlNjExYzEwL2xpYi9ub2RlZnMtaGFuZGxlci5qcyNMNjEyKSxcbiAgLy8gYnV0IG5ldmVyIHJlbW92ZWQgZnJvbSB0aGUgbWFwIGluIGNhc2UgdGhlIHBhdGggd2FzIGRlbGV0ZWQuXG4gIC8vIFRoaXMgbGVhZHMgdG8gYW4gaW5jb3JyZWN0IHN0YXRlIGlmIHRoZSBwYXRoIHdhcyByZWNyZWF0ZWQ6XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wYXVsbWlsbHIvY2hva2lkYXIvYmxvYi9lMTc1M2RkYmM5NTcxYmRjMzNiNGE0YWYxNzJkNTJjYjZlNjExYzEwL2xpYi9ub2RlZnMtaGFuZGxlci5qcyNMNTUzXG4gIGlmICh0aGlzLl9zeW1saW5rUGF0aHMuaGFzKGZ1bGxQYXRoKSkge1xuICAgIHRoaXMuX3N5bWxpbmtQYXRocy5kZWxldGUoZnVsbFBhdGgpO1xuICB9XG5cbiAgLy8gSWYgd2Ugd2FpdCBmb3IgdGhpcyBmaWxlIHRvIGJlIGZ1bGx5IHdyaXR0ZW4sIGNhbmNlbCB0aGUgd2FpdC5cbiAgbGV0IHJlbFBhdGggPSBwYXRoO1xuICBpZiAodGhpcy5vcHRpb25zLmN3ZCkgcmVsUGF0aCA9IHN5c1BhdGgucmVsYXRpdmUodGhpcy5vcHRpb25zLmN3ZCwgcGF0aCk7XG4gIGlmICh0aGlzLm9wdGlvbnMuYXdhaXRXcml0ZUZpbmlzaCAmJiB0aGlzLl9wZW5kaW5nV3JpdGVzLmhhcyhyZWxQYXRoKSkge1xuICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5fcGVuZGluZ1dyaXRlcy5nZXQocmVsUGF0aCkuY2FuY2VsV2FpdCgpO1xuICAgIGlmIChldmVudCA9PT0gRVZfQUREKSByZXR1cm47XG4gIH1cblxuICAvLyBUaGUgRW50cnkgd2lsbCBlaXRoZXIgYmUgYSBkaXJlY3RvcnkgdGhhdCBqdXN0IGdvdCByZW1vdmVkXG4gIC8vIG9yIGEgYm9ndXMgZW50cnkgdG8gYSBmaWxlLCBpbiBlaXRoZXIgY2FzZSB3ZSBoYXZlIHRvIHJlbW92ZSBpdFxuICB0aGlzLl93YXRjaGVkLmRlbGV0ZShwYXRoKTtcbiAgdGhpcy5fd2F0Y2hlZC5kZWxldGUoZnVsbFBhdGgpO1xuICBjb25zdCBldmVudE5hbWUgPSBpc0RpcmVjdG9yeSA/IEVWX1VOTElOS19ESVIgOiBFVl9VTkxJTks7XG4gIGlmICh3YXNUcmFja2VkICYmICF0aGlzLl9pc0lnbm9yZWQocGF0aCkpIHRoaXMuX2VtaXQoZXZlbnROYW1lLCBwYXRoKTtcblxuICAvLyBBdm9pZCBjb25mbGljdHMgaWYgd2UgbGF0ZXIgY3JlYXRlIGFub3RoZXIgZmlsZSB3aXRoIHRoZSBzYW1lIG5hbWVcbiAgaWYgKCF0aGlzLm9wdGlvbnMudXNlRnNFdmVudHMpIHtcbiAgICB0aGlzLl9jbG9zZVBhdGgocGF0aCk7XG4gIH1cbn1cblxuLyoqXG4gKiBDbG9zZXMgYWxsIHdhdGNoZXJzIGZvciBhIHBhdGhcbiAqIEBwYXJhbSB7UGF0aH0gcGF0aFxuICovXG5fY2xvc2VQYXRoKHBhdGgpIHtcbiAgdGhpcy5fY2xvc2VGaWxlKHBhdGgpXG4gIGNvbnN0IGRpciA9IHN5c1BhdGguZGlybmFtZShwYXRoKTtcbiAgdGhpcy5fZ2V0V2F0Y2hlZERpcihkaXIpLnJlbW92ZShzeXNQYXRoLmJhc2VuYW1lKHBhdGgpKTtcbn1cblxuLyoqXG4gKiBDbG9zZXMgb25seSBmaWxlLXNwZWNpZmljIHdhdGNoZXJzXG4gKiBAcGFyYW0ge1BhdGh9IHBhdGhcbiAqL1xuX2Nsb3NlRmlsZShwYXRoKSB7XG4gIGNvbnN0IGNsb3NlcnMgPSB0aGlzLl9jbG9zZXJzLmdldChwYXRoKTtcbiAgaWYgKCFjbG9zZXJzKSByZXR1cm47XG4gIGNsb3NlcnMuZm9yRWFjaChjbG9zZXIgPT4gY2xvc2VyKCkpO1xuICB0aGlzLl9jbG9zZXJzLmRlbGV0ZShwYXRoKTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtQYXRofSBwYXRoXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbG9zZXJcbiAqL1xuX2FkZFBhdGhDbG9zZXIocGF0aCwgY2xvc2VyKSB7XG4gIGlmICghY2xvc2VyKSByZXR1cm47XG4gIGxldCBsaXN0ID0gdGhpcy5fY2xvc2Vycy5nZXQocGF0aCk7XG4gIGlmICghbGlzdCkge1xuICAgIGxpc3QgPSBbXTtcbiAgICB0aGlzLl9jbG9zZXJzLnNldChwYXRoLCBsaXN0KTtcbiAgfVxuICBsaXN0LnB1c2goY2xvc2VyKTtcbn1cblxuX3JlYWRkaXJwKHJvb3QsIG9wdHMpIHtcbiAgaWYgKHRoaXMuY2xvc2VkKSByZXR1cm47XG4gIGNvbnN0IG9wdGlvbnMgPSB7dHlwZTogRVZfQUxMLCBhbHdheXNTdGF0OiB0cnVlLCBsc3RhdDogdHJ1ZSwgLi4ub3B0c307XG4gIGxldCBzdHJlYW0gPSByZWFkZGlycChyb290LCBvcHRpb25zKTtcbiAgdGhpcy5fc3RyZWFtcy5hZGQoc3RyZWFtKTtcbiAgc3RyZWFtLm9uY2UoU1RSX0NMT1NFLCAoKSA9PiB7XG4gICAgc3RyZWFtID0gdW5kZWZpbmVkO1xuICB9KTtcbiAgc3RyZWFtLm9uY2UoU1RSX0VORCwgKCkgPT4ge1xuICAgIGlmIChzdHJlYW0pIHtcbiAgICAgIHRoaXMuX3N0cmVhbXMuZGVsZXRlKHN0cmVhbSk7XG4gICAgICBzdHJlYW0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHN0cmVhbTtcbn1cblxufVxuXG4vLyBFeHBvcnQgRlNXYXRjaGVyIGNsYXNzXG5leHBvcnRzLkZTV2F0Y2hlciA9IEZTV2F0Y2hlcjtcblxuLyoqXG4gKiBJbnN0YW50aWF0ZXMgd2F0Y2hlciB3aXRoIHBhdGhzIHRvIGJlIHRyYWNrZWQuXG4gKiBAcGFyYW0ge1N0cmluZ3xBcnJheTxTdHJpbmc+fSBwYXRocyBmaWxlL2RpcmVjdG9yeSBwYXRocyBhbmQvb3IgZ2xvYnNcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9ucyBjaG9raWRhciBvcHRzXG4gKiBAcmV0dXJucyBhbiBpbnN0YW5jZSBvZiBGU1dhdGNoZXIgZm9yIGNoYWluaW5nLlxuICovXG5jb25zdCB3YXRjaCA9IChwYXRocywgb3B0aW9ucykgPT4ge1xuICBjb25zdCB3YXRjaGVyID0gbmV3IEZTV2F0Y2hlcihvcHRpb25zKTtcbiAgd2F0Y2hlci5hZGQocGF0aHMpO1xuICByZXR1cm4gd2F0Y2hlcjtcbn07XG5cbmV4cG9ydHMud2F0Y2ggPSB3YXRjaDtcbiIsICJleHBvcnQgdHlwZSBPcHRpb25zPFJlc3VsdD4gPSB7XG4gIGlzSW1tZWRpYXRlPzogYm9vbGVhbjtcbiAgbWF4V2FpdD86IG51bWJlcjtcbiAgY2FsbGJhY2s/OiAoZGF0YTogUmVzdWx0KSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBEZWJvdW5jZWRGdW5jdGlvbjxcbiAgQXJncyBleHRlbmRzIGFueVtdLFxuICBGIGV4dGVuZHMgKC4uLmFyZ3M6IEFyZ3MpID0+IGFueVxuPiB7XG4gICh0aGlzOiBUaGlzUGFyYW1ldGVyVHlwZTxGPiwgLi4uYXJnczogQXJncyk6IFByb21pc2U8UmV0dXJuVHlwZTxGPj47XG4gIGNhbmNlbDogKHJlYXNvbj86IGFueSkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIERlYm91bmNlZFByb21pc2U8RnVuY3Rpb25SZXR1cm4+IHtcbiAgcmVzb2x2ZTogKHJlc3VsdDogRnVuY3Rpb25SZXR1cm4pID0+IHZvaWQ7XG4gIHJlamVjdDogKHJlYXNvbj86IGFueSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlPEFyZ3MgZXh0ZW5kcyBhbnlbXSwgRiBleHRlbmRzICguLi5hcmdzOiBBcmdzKSA9PiBhbnk+KFxuICBmdW5jOiBGLFxuICB3YWl0TWlsbGlzZWNvbmRzID0gNTAsXG4gIG9wdGlvbnM6IE9wdGlvbnM8UmV0dXJuVHlwZTxGPj4gPSB7fVxuKToge1xuICAodGhpczogVGhpc1BhcmFtZXRlclR5cGU8Rj4sIC4uLmFyZ3M6IFBhcmFtZXRlcnM8Rj4gJiBBcmdzKTogUHJvbWlzZTxcbiAgICBSZXR1cm5UeXBlPEY+XG4gID47XG4gIGNhbmNlbDogKHJlYXNvbj86IGFueSkgPT4gdm9pZDtcbn0ge1xuICBsZXQgdGltZW91dElkOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiB8IHVuZGVmaW5lZDtcbiAgY29uc3QgaXNJbW1lZGlhdGUgPSBvcHRpb25zLmlzSW1tZWRpYXRlID8/IGZhbHNlO1xuICBjb25zdCBjYWxsYmFjayA9IG9wdGlvbnMuY2FsbGJhY2sgPz8gZmFsc2U7XG4gIGNvbnN0IG1heFdhaXQgPSBvcHRpb25zLm1heFdhaXQ7XG4gIGxldCBsYXN0SW52b2tlVGltZSA9IERhdGUubm93KCk7XG5cbiAgbGV0IHByb21pc2VzOiBEZWJvdW5jZWRQcm9taXNlPFJldHVyblR5cGU8Rj4+W10gPSBbXTtcblxuICBmdW5jdGlvbiBuZXh0SW52b2tlVGltZW91dCgpIHtcbiAgICBpZiAobWF4V2FpdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCB0aW1lU2luY2VMYXN0SW52b2NhdGlvbiA9IERhdGUubm93KCkgLSBsYXN0SW52b2tlVGltZTtcblxuICAgICAgaWYgKHRpbWVTaW5jZUxhc3RJbnZvY2F0aW9uICsgd2FpdE1pbGxpc2Vjb25kcyA+PSBtYXhXYWl0KSB7XG4gICAgICAgIHJldHVybiBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9jYXRpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHdhaXRNaWxsaXNlY29uZHM7XG4gIH1cblxuICBjb25zdCBkZWJvdW5jZWRGdW5jdGlvbiA9IGZ1bmN0aW9uIChcbiAgICB0aGlzOiBUaGlzUGFyYW1ldGVyVHlwZTxGPixcbiAgICAuLi5hcmdzOiBQYXJhbWV0ZXJzPEY+XG4gICkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZXR1cm5UeXBlPEY+PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBpbnZva2VGdW5jdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGltZW91dElkID0gdW5kZWZpbmVkO1xuICAgICAgICBsYXN0SW52b2tlVGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIGlmICghaXNJbW1lZGlhdGUpIHtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHJlc3VsdCk7XG4gICAgICAgICAgcHJvbWlzZXMuZm9yRWFjaCgoeyByZXNvbHZlIH0pID0+IHJlc29sdmUocmVzdWx0KSk7XG4gICAgICAgICAgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgY29uc3Qgc2hvdWxkQ2FsbE5vdyA9IGlzSW1tZWRpYXRlICYmIHRpbWVvdXRJZCA9PT0gdW5kZWZpbmVkO1xuXG4gICAgICBpZiAodGltZW91dElkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICB9XG5cbiAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoaW52b2tlRnVuY3Rpb24sIG5leHRJbnZva2VUaW1lb3V0KCkpO1xuXG4gICAgICBpZiAoc2hvdWxkQ2FsbE5vdykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhyZXN1bHQpO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgfVxuICAgICAgcHJvbWlzZXMucHVzaCh7IHJlc29sdmUsIHJlamVjdCB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBkZWJvdW5jZWRGdW5jdGlvbi5jYW5jZWwgPSBmdW5jdGlvbiAocmVhc29uPzogYW55KSB7XG4gICAgaWYgKHRpbWVvdXRJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICB9XG4gICAgcHJvbWlzZXMuZm9yRWFjaCgoeyByZWplY3QgfSkgPT4gcmVqZWN0KHJlYXNvbikpO1xuICAgIHByb21pc2VzID0gW107XG4gIH07XG5cbiAgcmV0dXJuIGRlYm91bmNlZEZ1bmN0aW9uO1xufVxuIiwgImltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBhcHAsIGlwY01haW4gfSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQgeyBJUEMgfSBmcm9tICdAY29tbW9uL2NvbnN0YW50cyc7XG5cbi8vIEluamVjdCBDU1MgZm9yIHRoZSBpbi1hcHAgVUlcbmFwcC5vbignd2ViLWNvbnRlbnRzLWNyZWF0ZWQnLCAoXywgd2ViQ29udGVudHMpID0+IHtcbiAgd2ViQ29udGVudHMub24oJ2RpZC1maW5pc2gtbG9hZCcsICgpID0+IHtcbiAgICB3ZWJDb250ZW50cy5pbnNlcnRDU1MoZnMucmVhZEZpbGVTeW5jKGpvaW4oX19kaXJuYW1lLCAncmVuZGVyZXIuY3NzJyksICd1dGY4JykpO1xuICB9KTtcbn0pO1xuXG5pcGNNYWluLm9uKElQQy5nZXRXaW5kb3dEYXRhLCAoZXZlbnQpID0+IHtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciBrZXJuZWxXaW5kb3dEYXRhIGlzIGluamVjdGVkIGJ5IEtlcm5lbFxuICBldmVudC5yZXR1cm5WYWx1ZSA9IGV2ZW50LnNlbmRlci5rZXJuZWxXaW5kb3dEYXRhO1xufSk7XG5cbmltcG9ydCAnLi9jb25maWcnO1xuaW1wb3J0ICcuL3Byb3RvY29sJztcbmltcG9ydCAnLi9xdWlja2Nzcyc7XG5pbXBvcnQgJy4vdGhlbWVzJztcbiIsICJleHBvcnQgY29uc3QgcHJlZml4ZXMgPSB7XG4gIG1haW46ICdQT1BDT1JOXycsXG4gIHF1aWNrQ3NzOiAnUVVJQ0tDU1NfJyxcbiAgdGhlbWVzOiAnVEhFTUVTXycsXG59O1xuXG5leHBvcnQgY29uc3QgSVBDID0gcHJlZml4VmFsdWVzKHtcbiAgLy8gTWlzY1xuICBnZXRDb25maWc6ICdHRVRfQ09ORklHJyxcbiAgc3RhdHVzTWVzc2FnZTogJ1NUQVRVU19NRVNTQUdFJyxcbiAgZ2V0V2luZG93RGF0YTogJ0dFVF9XSU5ET1dfREFUQScsXG4gIGxvZzogJ0xPRycsXG5cbiAgLy8gVGhlbWVzXG4gIGdldFRoZW1lczogJ0dFVF9USEVNRVMnLFxuICBvblRoZW1lQ2hhbmdlOiAnT05fVEhFTUVfQ0hBTkdFJyxcbiAgc2F2ZVRoZW1lU3RhdGU6ICdTQVZFX1RIRU1FX1NUQVRFJyxcblxuICAvLyBRdWlja0NTU1xuICBnZXRRdWlja0NzczogJ0dFVF9RVUlDS19DU1MnLFxuICBvblF1aWNrQ3NzQ2hhbmdlOiAnT05fUVVJQ0tfQ1NTX0NIQU5HRScsXG4gIGNyZWF0ZVF1aWNrQ3NzTm9kZTogJ0NSRUFURV9RVUlDS19DU1NfTk9ERScsXG4gIGRlbGV0ZVF1aWNrQ3NzTm9kZTogJ0RFTEVURV9RVUlDS19DU1NfTk9ERScsXG4gIHJlbmFtZVF1aWNrQ3NzTm9kZTogJ1JFTkFNRV9RVUlDS19DU1NfTk9ERScsXG4gIHVwZGF0ZVF1aWNrQ3NzRmlsZTogJ1NBVkVfUVVJQ0tfQ1NTX0ZJTEUnLFxufSwgcHJlZml4ZXMubWFpbik7XG5cbmV4cG9ydCBjb25zdCBNRVNTQUdFUyA9IHtcbiAgcXVpY2tDc3M6IHByZWZpeFZhbHVlcyh7XG4gICAgY3JlYXRlZDogJ0NSRUFURUQnLFxuICAgIGRlbGV0ZWQ6ICdERUxFVEVEJyxcbiAgICByZW5hbWVkOiAnUkVOQU1FRCcsXG4gICAgdXBkYXRlZDogJ1VQREFURUQnLFxuICB9LCBwcmVmaXhlcy5xdWlja0NzcyksXG59O1xuXG5mdW5jdGlvbiBwcmVmaXhWYWx1ZXM8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4+KG9iamVjdDogVCwgcHJlZml4OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzdWx0ID0ge30gYXMgUmVjb3JkPGtleW9mIFQsIHN0cmluZz47XG4gIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgIHJlc3VsdFtrZXldID0gcHJlZml4ICsgb2JqZWN0W2tleV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsICJpbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHsgaXNBYnNvbHV0ZSwgam9pbiB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgYXJndiB9IGZyb20gJ3Byb2Nlc3MnO1xuaW1wb3J0IHsgaXBjTWFpbiB9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7IHJvb3QgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IElQQyB9IGZyb20gJ0Bjb21tb24vY29uc3RhbnRzJztcbmltcG9ydCBMb2dnZXJNb2R1bGUgZnJvbSAnQGNvbW1vbi9sb2dnZXInO1xuY29uc3QgTG9nZ2VyID0gbmV3IExvZ2dlck1vZHVsZSgnTWFpbicsICdhbnNpJyk7XG5cbmNvbnN0IGRlZmF1bHRDb25maWc6IENvbmZpZyA9IHtcbiAgaG90a2V5OiAnY3RybCtzaGlmdCtwJyxcbiAgcXVpY2tDc3NEaXI6ICcuL3F1aWNrY3NzJyxcbiAgdGhlbWVGaWxlczogW1xuICAgICcuL3RoZW1lcy8qL2luZGV4Lmpzb24nLFxuICAgIC4uLihwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInXG4gICAgICA/IFsnJVVTRVJQUk9GSUxFJS9kaXNjb3JkL3RoZW1lcy8qL2luZGV4Lmpzb24nXVxuICAgICAgOiBbJyRIT01FL2Rpc2NvcmQvdGhlbWVzLyovaW5kZXguanNvbiddXG4gICAgKSxcbiAgXSxcbiAgZW5hYmxlZDoge30sXG59O1xuXG5pZiAoIWZzLmV4aXN0c1N5bmMoam9pbihyb290LCAnY29uZmlnLmpzb24nKSkpIHtcbiAgTG9nZ2VyLndhcm4oJ05vIGNvbmZpZyBmaWxlIGZvdW5kLCBjcmVhdGluZyBvbmUuJyk7XG4gIGZzLndyaXRlRmlsZVN5bmMoam9pbihyb290LCAnY29uZmlnLmpzb24nKSwgSlNPTi5zdHJpbmdpZnkoZGVmYXVsdENvbmZpZywgbnVsbCwgMikpO1xufVxuXG5jb25zdCBjb25maWdKc29uID0gcmVxdWlyZShqb2luKHJvb3QsICdjb25maWcuanNvbicpKTtcbmNvbnN0IGNvbmZpZ0pzb25XaXRoRGVmYXVsdHMgPSB7XG4gIC4uLmRlZmF1bHRDb25maWcsXG4gIC4uLmNvbmZpZ0pzb24sXG59O1xuZXhwb3J0IGNvbnN0IGNvbmZpZzogQ29uZmlnID0gY29uZmlnSnNvbldpdGhEZWZhdWx0cztcblxuaWYgKGFyZ3YuaW5jbHVkZXMoJy0tdmVyYm9zZScpIHx8IE5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSBjb25maWcudmVyYm9zZSA9IHRydWU7XG5cbmNvbmZpZy5xdWlja0Nzc0RpciA9IGlzQWJzb2x1dGUoY29uZmlnLnF1aWNrQ3NzRGlyKVxuICA/IGNvbmZpZy5xdWlja0Nzc0RpclxuICA6IGpvaW4ocm9vdCwgY29uZmlnLnF1aWNrQ3NzRGlyKTtcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuXG5pZiAoY29uZmlnLnZlcmJvc2UpIExvZ2dlci5kZWJ1Zyhjb25maWcpO1xuXG5pcGNNYWluLmhhbmRsZShJUEMuZ2V0Q29uZmlnLCAoKSA9PiBjb25maWcpO1xuIiwgImltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcblxuZXhwb3J0IGNvbnN0IHJvb3QgPSBqb2luKF9fZGlybmFtZSwgJy4uJyk7XG5leHBvcnQgeyBoYXNWYWx1ZSB9IGZyb20gJy4vaGFzVmFsdWUnO1xuZXhwb3J0IHsgcmVzb2x2ZVBhdGggfSBmcm9tICcuL3Jlc29sdmVQYXRoJztcbmV4cG9ydCB7IHNlbmRUb0FsbCB9IGZyb20gJy4vc2VuZFRvQWxsJztcbiIsICJleHBvcnQgZnVuY3Rpb24gaGFzVmFsdWUoXG4gIG9iajogUmVjb3JkPHN0cmluZywgYW55PixcbiAga2V5OiBzdHJpbmcsXG4gIHZhbHVlOiBhbnlcbik6IGJvb2xlYW4ge1xuICBpZiAoa2V5IGluIG9iaiAmJiBvYmpba2V5XSA9PT0gdmFsdWUpIHJldHVybiB0cnVlO1xuXG4gIGZvciAoY29uc3QgcHJvcCBpbiBvYmopIHtcbiAgICBpZiAocHJvcCBpbiBvYmogJiYgdHlwZW9mIG9ialtwcm9wXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGhhc1ZhbHVlKG9ialtwcm9wXSwga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAocmVzdWx0KSByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG4iLCAiaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdvcyc7XG5pbXBvcnQgeyBub3JtYWxpemUgfSBmcm9tICdwYXRoJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVQYXRoKFxuICBwYXRoOiBzdHJpbmcsXG4gIHZhclR5cGVzOiB7IHdpbmRvd3M6IGJvb2xlYW47IHVuaXg6IGJvb2xlYW4gfSA9IHtcbiAgICB3aW5kb3dzOiBwbGF0Zm9ybSgpID09PSAnd2luMzInLFxuICAgIHVuaXg6IHBsYXRmb3JtKCkgIT09ICd3aW4zMicsXG4gIH1cbikge1xuICBjb25zdCB3aW5kb3dzUmVnZXggPSAvJShbXiVdKyklL2c7IC8vIG1hdGNoZXMgJXZhcmlhYmxlTmFtZSVcbiAgY29uc3QgdW5peFJlZ2V4ID0gL1xcJCg/OnsoPz1bXn1dKn0pKT8oXFx3Kyl9Py9nOyAvLyBtYXRjaGVzICR2YXJpYWJsZU5hbWUgYW5kICR7dmFyaWFibGVOYW1lfVxuXG4gIC8vIFRPRE86IGRvbid0IGNoYW5nZSBhbnl0aGluZyBpZiBubyB2YXJpYWJsZSB3aXRoIHRoYXQgbmFtZSBleGlzdHNcbiAgaWYgKHZhclR5cGVzLndpbmRvd3MpXG4gICAgcGF0aCA9IHBhdGgucmVwbGFjZSh3aW5kb3dzUmVnZXgsIChfLCBuYW1lKSA9PiBwcm9jZXNzLmVudltuYW1lXSA/PyAnJyk7XG4gIGlmICh2YXJUeXBlcy51bml4KVxuICAgIHBhdGggPSBwYXRoLnJlcGxhY2UodW5peFJlZ2V4LCAoXywgbmFtZSkgPT4gcHJvY2Vzcy5lbnZbbmFtZV0gPz8gJycpO1xuXG4gIHJldHVybiBub3JtYWxpemUocGF0aCk7XG59XG4iLCAiaW1wb3J0IHsgQnJvd3NlcldpbmRvdyB9IGZyb20gJ2VsZWN0cm9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRUb0FsbChjaGFubmVsOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gIEJyb3dzZXJXaW5kb3cuZ2V0QWxsV2luZG93cygpLmZvckVhY2goKHdpbmRvdykgPT4ge1xuICAgIHdpbmRvdy53ZWJDb250ZW50cy5zZW5kKGNoYW5uZWwsIC4uLmFyZ3MpO1xuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBJUEMgfSBmcm9tICdAY29tbW9uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBMb2dnZXJNb2R1bGUge1xuICBwcml2YXRlIG1vZHVsZTogc3RyaW5nO1xuICBwcml2YXRlIG91dHB1dDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZSA9ICdjb25zb2xlJykge1xuICAgIHRoaXMubW9kdWxlID0gbmFtZTtcbiAgICB0aGlzLm91dHB1dCA9IHRoaXMuI3BhcnNlT3V0cHV0KHR5cGUpO1xuICB9XG5cbiAgI3BhcnNlT3V0cHV0KG91dHB1dDogc3RyaW5nKSB7XG4gICAgc3dpdGNoIChvdXRwdXQpIHtcbiAgICAgIGNhc2UgJ2Fuc2knOlxuICAgICAgY2FzZSAndGVybWluYWwnOlxuICAgICAgICByZXR1cm4gJ2Fuc2knO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdjb25zb2xlJztcbiAgICB9XG4gIH1cblxuICAjcGFyc2VUeXBlKHR5cGU6IHN0cmluZykge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICBjYXNlICd3YXJuJzpcbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgIGNhc2UgJ2RlYnVnJzpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ2xvZyc7XG4gICAgfVxuICB9XG5cbiAgI3BhcnNlQ29sb3IodHlwZTogc3RyaW5nKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdkZWJ1Zyc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RyOiAnTWVkaXVtU3ByaW5nR3JlZW4nLFxuICAgICAgICAgIGFycjogWzAsIDI1MCwgMTU0XSxcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0cjogJ0RlZXBTa3lCbHVlJyxcbiAgICAgICAgICBhcnI6IFswLCAxOTEsIDI1NV0sXG4gICAgICAgIH07XG4gICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RyOiAnY3JpbXNvbicsXG4gICAgICAgICAgYXJyOiBbMjIwLCAyMCwgNjBdLFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnd2Fybic6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RyOiAnRGFya09yYW5nZScsXG4gICAgICAgICAgYXJyOiBbMjU1LCAxNDAsIDBdLFxuICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdHI6ICdnb2xkJyxcbiAgICAgICAgICBhcnI6IFsyNTUsIDIxNSwgMF0sXG4gICAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgI2Fuc2lDb2xvcihjb2xvcjogQXJyYXk8bnVtYmVyPiwgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGBcXHgxYlszODsyOyR7Y29sb3JbMF19OyR7Y29sb3JbMV19OyR7Y29sb3JbMl19bSR7bWVzc2FnZX1cXHgxYlswbWA7XG4gIH1cblxuICBhc3luYyAjbG9nKHR5cGU6IHN0cmluZywgbWVzc2FnZTogYW55W10pIHtcbiAgICB0eXBlID0gdGhpcy4jcGFyc2VUeXBlKHR5cGUpO1xuICAgIGNvbnN0IGxvZ0NvbG9yID0gdGhpcy4jcGFyc2VDb2xvcih0eXBlKTtcblxuICAgIGNvbnN0IGJhbm5lciA9XG4gICAgICB0aGlzLm91dHB1dCA9PT0gJ2Fuc2knXG4gICAgICAgID8gW2BbJHt0aGlzLiNhbnNpQ29sb3IobG9nQ29sb3IuYXJyLCAnUG9wY29ybicpfSA+ICR7dGhpcy5tb2R1bGV9XWBdXG4gICAgICAgIDogW2BbJWNQb3Bjb3JuJWMgPiAke3RoaXMubW9kdWxlfV1gLCBgY29sb3I6ICR7bG9nQ29sb3Iuc3RyfTtgLCAnJ107XG5cbiAgICBjb25zb2xlW3R5cGVdKC4uLmJhbm5lciwgLi4ubWVzc2FnZSk7XG5cbiAgICAvLyBUT0RPOiBEb24ndCBzZW5kIGV2ZXJ5dGhpbmdcbiAgICBpZiAodGhpcy5vdXRwdXQgPT09ICdhbnNpJykge1xuICAgICAgY29uc3QgeyBCcm93c2VyV2luZG93IH0gPSBhd2FpdCBpbXBvcnQoJ2VsZWN0cm9uJyk7XG5cbiAgICAgIEJyb3dzZXJXaW5kb3cuZ2V0QWxsV2luZG93cygpLmZvckVhY2goKHdpbikgPT4gd2luLndlYkNvbnRlbnRzLnNlbmQoSVBDLmxvZywgdHlwZSwgLi4ubWVzc2FnZSkpO1xuICAgIH1cbiAgfVxuXG4gIGxvZyA9ICguLi5tZXNzYWdlOiBhbnlbXSkgPT4gdGhpcy4jbG9nKCdsb2cnLCBtZXNzYWdlKTtcbiAgaW5mbyA9ICguLi5tZXNzYWdlOiBhbnlbXSkgPT4gdGhpcy4jbG9nKCdpbmZvJywgbWVzc2FnZSk7XG4gIHdhcm4gPSAoLi4ubWVzc2FnZTogYW55W10pID0+IHRoaXMuI2xvZygnd2FybicsIG1lc3NhZ2UpO1xuICBlcnJvciA9ICguLi5tZXNzYWdlOiBhbnlbXSkgPT4gdGhpcy4jbG9nKCdlcnJvcicsIG1lc3NhZ2UpO1xuICBkZWJ1ZyA9ICguLi5tZXNzYWdlOiBhbnlbXSkgPT4gdGhpcy4jbG9nKCdkZWJ1ZycsIG1lc3NhZ2UpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dnZXJNb2R1bGU7XG4iLCAiaW1wb3J0IHsgYXBwLCBwcm90b2NvbCB9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgdGhlbWVzIH0gZnJvbSAnLi90aGVtZXMnO1xuaW1wb3J0IExvZ2dlck1vZHVsZSBmcm9tICdAY29tbW9uL2xvZ2dlcic7XG5jb25zdCBMb2dnZXIgPSBuZXcgTG9nZ2VyTW9kdWxlKCdNYWluID4gUHJvdG9jb2wnLCAnYW5zaScpO1xuXG5wcm90b2NvbC5yZWdpc3RlclNjaGVtZXNBc1ByaXZpbGVnZWQoW1xuICB7XG4gICAgc2NoZW1lOiAncG9wY29ybicsXG4gICAgcHJpdmlsZWdlczoge1xuICAgICAgc2VjdXJlOiB0cnVlLFxuICAgICAgc3RhbmRhcmQ6IHRydWUsXG4gICAgICBzdXBwb3J0RmV0Y2hBUEk6IHRydWUsXG4gICAgfSxcbiAgfSxcbl0pO1xuXG5hcHAub24oJ3JlYWR5JywgKCkgPT4ge1xuICBwcm90b2NvbC5yZWdpc3RlckZpbGVQcm90b2NvbCgncG9wY29ybicsIChyZXF1ZXN0LCBjYikgPT4ge1xuICAgIGlmIChjb25maWcudmVyYm9zZSkgTG9nZ2VyLmRlYnVnKCdSZWNlaXZlZCByZXF1ZXN0OicsIHJlcXVlc3QpO1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuICAgIGxldCBmaWxlUGF0aCA9ICcnO1xuXG4gICAgc3dpdGNoICh1cmwuaG9zdG5hbWUpIHtcbiAgICAgIGNhc2UgJ3RoZW1lJzoge1xuICAgICAgICBjb25zdCB0aGVtZSA9IHRoZW1lc1t1cmwucGF0aG5hbWUuc2xpY2UoMSldO1xuICAgICAgICBmaWxlUGF0aCA9IHJlc29sdmUodGhlbWUuanNvbiwgJy4uJywgdGhlbWUubWFpbik7XG4gICAgICB9IGJyZWFrO1xuICAgICAgY2FzZSAnc3BsYXNoLXRoZW1lJzoge1xuICAgICAgICBjb25zdCB0aGVtZSA9IHRoZW1lc1t1cmwucGF0aG5hbWUuc2xpY2UoMSldO1xuICAgICAgICBpZiAoIXRoZW1lLnNwbGFzaCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBmaWxlUGF0aCA9IHRoZW1lLnNwbGFzaDtcbiAgICAgIH0gYnJlYWs7XG4gICAgfVxuXG4gICAgY2IoeyBwYXRoOiBmaWxlUGF0aCB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG59KTtcbiIsICJpbXBvcnQgeyByZXNvbHZlLCBpc0Fic29sdXRlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgZmcgZnJvbSAnZmFzdC1nbG9iJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IHJvb3QgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyByZXNvbHZlUGF0aCB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IHdhdGNoVGhlbWVGaWxlIH0gZnJvbSAnLi93YXRjaGVyJztcbmltcG9ydCBMb2dnZXJNb2R1bGUgZnJvbSAnQGNvbW1vbi9sb2dnZXInO1xuY29uc3QgTG9nZ2VyID0gbmV3IExvZ2dlck1vZHVsZSgnTWFpbiA+IFRoZW1lcycsICdhbnNpJyk7XG5cbmNvbnN0IHJlc29sdmVkVGhlbWVzID0gY29uZmlnLnRoZW1lRmlsZXMubWFwKChwYXRoKSA9PiByZXNvbHZlUGF0aChwYXRoKS5yZXBsYWNlKC9cXFxcL2csICcvJykpO1xuY29uc3QgdGhlbWVKc29ucyA9IGZnLnN5bmMocmVzb2x2ZWRUaGVtZXMsIHtcbiAgYWJzb2x1dGU6IHRydWUsXG4gIGN3ZDogcm9vdCxcbn0pLm1hcCgocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9cXC8vZywgJ1xcXFwnKSk7XG5cbkxvZ2dlci5sb2coJ0RldGVjdGVkIHRoZW1lczonLCB0aGVtZUpzb25zKTtcblxuZXhwb3J0IGNvbnN0IHRoZW1lcyA9IHt9IGFzIHsgW2lkOiBzdHJpbmddOiBTaW1wbGVUaGVtZSB9O1xuZm9yIChjb25zdCBqc29uIG9mIHRoZW1lSnNvbnMpIHtcbiAgaWYgKCFqc29uLmVuZHNXaXRoKCcuanNvbicpKSBjb250aW51ZTtcbiAgdXBkYXRlVGhlbWUoanNvbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUaGVtZShqc29uOiBzdHJpbmcpIHtcbiAgY29uc3QgcGF0aEtleXMgPSBbXG4gICAgJ21haW4nLFxuICAgICdzcGxhc2gnLFxuICBdO1xuXG4gIGNvbnN0IG1ldGE6IE1ldGEgPSByZXF1aXJlKGpzb24pO1xuICBjb25zdCBtb2RpZmllZE1ldGE6IE1ldGEgPSB7IC4uLm1ldGEgfTtcbiAgZm9yIChjb25zdCBrZXkgaW4gbWV0YSkge1xuICAgIC8vIFRPRE86IERpc2FsbG93IC4uL1xuICAgIGlmIChwYXRoS2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBpZiAoaXNBYnNvbHV0ZShtZXRhW2tleV0pKSB7XG4gICAgICAgIExvZ2dlci5lcnJvcihgXCIke2tleX1cIiBtdXN0IGJlIGEgcmVsYXRpdmUgcGF0aC4gKCR7bWV0YVtrZXldfSlgKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBjb25zdCBsb2NhdGlvbjogc3RyaW5nID0gbW9kaWZpZWRNZXRhW2tleV0gPSByZXNvbHZlKGpzb24sICcuLicsIG1ldGFba2V5XSk7XG5cbiAgICAgIGNvbnN0IGZpbGVFeHRlbnNpb24gPSBsb2NhdGlvbi5zcGxpdCgnLicpLnBvcCgpO1xuICAgICAgaWYgKGZpbGVFeHRlbnNpb24gIT09ICdjc3MnKVxuICAgICAgICBMb2dnZXIud2FybihgVW5zdXBwb3J0ZWQgZmlsZSBleHRlbnNpb24gXCIke2ZpbGVFeHRlbnNpb259XCIuICgke2xvY2F0aW9ufSlgKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZW5hYmxlZCA9IGNvbmZpZy5lbmFibGVkW21ldGEuaWRdID8/IGZhbHNlO1xuXG4gIGNvbnN0IHRoZW1lOiBTaW1wbGVUaGVtZSA9IHtcbiAgICBlbmFibGVkLFxuICAgIGpzb24sXG4gICAgLi4ubW9kaWZpZWRNZXRhLFxuICB9O1xuICB0aGVtZXNbbWV0YS5pZF0gPSB0aGVtZTtcblxuICBpZiAoZW5hYmxlZCkge1xuICAgIHdhdGNoVGhlbWVGaWxlKGpzb24pO1xuICAgIHdhdGNoVGhlbWVGaWxlKG1vZGlmaWVkTWV0YS5tYWluKTtcbiAgICBpZiAobWV0YT8uc3BsYXNoKSB3YXRjaFRoZW1lRmlsZShtb2RpZmllZE1ldGEuc3BsYXNoKTtcbiAgfVxufVxuXG5pbXBvcnQgJy4vaXBjJztcbmltcG9ydCAnLi93YXRjaGVyJztcbiIsICJpbXBvcnQgY2hva2lkYXIgZnJvbSAnY2hva2lkYXInO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICd0cy1kZWJvdW5jZSc7XG5pbXBvcnQgeyB0aGVtZXMsIHVwZGF0ZVRoZW1lIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBzZW5kVG9BbGwgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBJUEMgfSBmcm9tICdAY29uc3RhbnRzJztcbmltcG9ydCBMb2dnZXJNb2R1bGUgZnJvbSAnQGNvbW1vbi9sb2dnZXInO1xuY29uc3QgTG9nZ2VyID0gbmV3IExvZ2dlck1vZHVsZSgnV2F0Y2hlciA+IFRoZW1lcycsICdhbnNpJyk7XG5cbmNvbnN0IHdhdGNoZXIgPSBjaG9raWRhci53YXRjaChbXSwge1xuICBwZXJzaXN0ZW50OiB0cnVlLFxuICBpZ25vcmVJbml0aWFsOiB0cnVlLFxuICBkaXNhYmxlR2xvYmJpbmc6IHRydWUsXG4gIGRlcHRoOiAxLFxufSk7XG5cbmNvbnN0IHBvc3NpYmxlS2V5cyA9IFtcbiAgJ2pzb24nLFxuICAnbWFpbicsXG4gICdzcGxhc2gnLFxuXTtcbndhdGNoZXIub24oXG4gICdjaGFuZ2UnLFxuICBkZWJvdW5jZSgocGF0aCkgPT4ge1xuICAgIGNvbnN0IGlkID0gT2JqZWN0LmtleXModGhlbWVzKS5maW5kKChpZCkgPT4ge1xuICAgICAgZm9yIChjb25zdCBrZXkgb2YgcG9zc2libGVLZXlzKSB7XG4gICAgICAgIGlmICh0aGVtZXNbaWRdW2tleV0gPT09IHBhdGgpIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFpZCkge1xuICAgICAgTG9nZ2VyLndhcm4oYERpZG4ndCBmaW5kIGEgdGhlbWUgYXNzb2NpYXRlZCB3aXRoIFwiJHtwYXRofVwiLmApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHVwZGF0ZVRoZW1lKHRoZW1lc1tpZF0uanNvbik7XG5cbiAgICBpZiAoY29uZmlnLnZlcmJvc2UpIExvZ2dlci5kZWJ1ZyhgVGhlbWUgY2hhbmdlZDogJHtpZH1gKTtcbiAgICBzZW5kVG9BbGwoSVBDLm9uVGhlbWVDaGFuZ2UsIHsgaWQ6IGlkLCB0aGVtZTogdGhlbWVzW2lkXSB9KTtcbiAgfSwgMTAwKVxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHdhdGNoVGhlbWVGaWxlKHRoZW1lOiBzdHJpbmcpIHtcbiAgd2F0Y2hlci5hZGQodGhlbWUpO1xuICBpZiAoY29uZmlnLnZlcmJvc2UpIExvZ2dlci5kZWJ1ZyhgV2F0Y2hpbmcgdGhlbWUgZmlsZTogJHt0aGVtZX1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVud2F0Y2hUaGVtZUZpbGUodGhlbWU6IHN0cmluZykge1xuICB3YXRjaGVyLmFkZCh0aGVtZSk7XG4gIGlmIChjb25maWcudmVyYm9zZSkgTG9nZ2VyLmRlYnVnKGBTdG9wcGVkIHdhdGNoaW5nIHRoZW1lIGZpbGU6ICR7dGhlbWV9YCk7XG59XG4iLCAiaW1wb3J0IGZzIGZyb20gJ2ZzL3Byb21pc2VzJztcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IGlwY01haW4gfSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBJUEMgfSBmcm9tICdAY29uc3RhbnRzJztcbmltcG9ydCB7IHJvb3QgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyB0aGVtZXMgfSBmcm9tICcuJztcbmltcG9ydCBMb2dnZXJNb2R1bGUgZnJvbSAnQGNvbW1vbi9sb2dnZXInO1xuY29uc3QgTG9nZ2VyID0gbmV3IExvZ2dlck1vZHVsZSgnSVBDJywgJ2Fuc2knKTtcblxuaXBjTWFpbi5oYW5kbGUoSVBDLmdldFRoZW1lcywgKCkgPT4gdGhlbWVzKTtcblxuaXBjTWFpbi5vbihJUEMuc2F2ZVRoZW1lU3RhdGUsIChldmVudCwgaWQ6IHN0cmluZywgc3RhdGU6IGJvb2xlYW4pID0+IHtcbiAgaWYgKGNvbmZpZy52ZXJib3NlKVxuICAgIExvZ2dlci5kZWJ1ZygnUmVjZWl2ZWQgc2F2ZSB0aGVtZSBzdGF0ZSBtZXNzYWdlIGZyb20nLCBldmVudC5zZW5kZXIuZ2V0VGl0bGUoKSk7XG5cbiAgY29uc3QgY29uZmlnRmlsZTogQ29uZmlnID0gcmVxdWlyZShqb2luKHJvb3QsICdjb25maWcuanNvbicpKTsgLy8gUmVxdWlyaW5nIGFnYWluIGluIGNhc2UgdGhlIGZpbGUgd2FzIGNoYW5nZWQgc2luY2UgbGF1bmNoXG5cbiAgY29uZmlnRmlsZS5lbmFibGVkW2lkXSA9IHN0YXRlO1xuICBmcy53cml0ZUZpbGUoam9pbihyb290LCAnY29uZmlnLmpzb24nKSwgSlNPTi5zdHJpbmdpZnkoY29uZmlnRmlsZSwgbnVsbCwgMikpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgTG9nZ2VyLmxvZyhgU2F2ZWQgdGhlbWUgc3RhdGUgXCIke3N0YXRlfVwiIGZvciAke2lkfS5gKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgTG9nZ2VyLmVycm9yKGBGYWlsZWQgdG8gc2F2ZSB0aGVtZSBzdGF0ZSBmb3IgXCIke2lkfVwiOmAsIGUpO1xuICAgIH0pO1xufSk7XG4iLCAiaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCB7IGJhc2VuYW1lLCBqb2luLCByZWxhdGl2ZSB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IExvZ2dlck1vZHVsZSBmcm9tICdAY29tbW9uL2xvZ2dlcic7XG5jb25zdCBMb2dnZXIgPSBuZXcgTG9nZ2VyTW9kdWxlKCdRdWlja0NTUycsICdhbnNpJyk7XG5cbmZ1bmN0aW9uIGdldFF1aWNrQ3NzKCk6IFF1aWNrQ3NzRm9sZGVyIHtcbiAgZnVuY3Rpb24gY3JlYXRlVHJlZShkaXJlY3RvcnlQYXRoOiBzdHJpbmcsIHJlZ2V4ID0gLy4vKTogUXVpY2tDc3NGb2xkZXIge1xuICAgIGNvbnN0IG5vZGU6IFF1aWNrQ3NzRm9sZGVyID0ge1xuICAgICAgbmFtZTogYmFzZW5hbWUoZGlyZWN0b3J5UGF0aCksXG4gICAgICBsb2NhdGlvbjogcmVsYXRpdmUoY29uZmlnLnF1aWNrQ3NzRGlyLCBkaXJlY3RvcnlQYXRoKSxcbiAgICAgIGZpbGVzOiBbXSxcbiAgICB9O1xuXG4gICAgY29uc3QgZmlsZU5hbWVzID0gZnMucmVhZGRpclN5bmMoZGlyZWN0b3J5UGF0aCk7XG4gICAgY29uc3QgZGlyZWN0b3JpZXM6IFF1aWNrQ3NzRm9sZGVyW10gPSBbXTtcbiAgICBjb25zdCBmaWxlczogUXVpY2tDc3NGaWxlW10gPSBbXTtcblxuICAgIGZvciAoY29uc3QgZmlsZU5hbWUgb2YgZmlsZU5hbWVzKSB7XG4gICAgICBjb25zdCBmaWxlUGF0aCA9IGpvaW4oZGlyZWN0b3J5UGF0aCwgZmlsZU5hbWUpO1xuICAgICAgY29uc3Qgc3RhdHMgPSBmcy5zdGF0U3luYyhmaWxlUGF0aCk7XG5cbiAgICAgIGxldCBjaGlsZE5vZGU6IFF1aWNrQ3NzRmlsZSB8IFF1aWNrQ3NzRm9sZGVyO1xuICAgICAgaWYgKHN0YXRzLmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgY2hpbGROb2RlID0gY3JlYXRlVHJlZShmaWxlUGF0aCwgcmVnZXgpO1xuICAgICAgICBkaXJlY3Rvcmllcy5wdXNoKGNoaWxkTm9kZSk7XG4gICAgICB9IGVsc2UgaWYgKHJlZ2V4LnRlc3QoZmlsZU5hbWUpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY2hpbGROb2RlID0ge1xuICAgICAgICAgICAgbmFtZTogZmlsZU5hbWUsXG4gICAgICAgICAgICBsb2NhdGlvbjogcmVsYXRpdmUoY29uZmlnLnF1aWNrQ3NzRGlyLCBmaWxlUGF0aCksXG4gICAgICAgICAgICBjb250ZW50OiBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgsICd1dGYtOCcpLFxuICAgICAgICAgIH07XG4gICAgICAgICAgZmlsZXMucHVzaChjaGlsZE5vZGUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgTG9nZ2VyLmVycm9yKGBFcnJvciByZWFkaW5nIGZpbGUgJHtmaWxlUGF0aH1gLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG5vZGUuZmlsZXMgPSBbLi4uZGlyZWN0b3JpZXMsIC4uLmZpbGVzXTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVUcmVlKGNvbmZpZy5xdWlja0Nzc0RpciwgL1xcLmNzcy8pO1xufVxuXG5leHBvcnQgbGV0IHF1aWNrQ3NzID0gZ2V0UXVpY2tDc3MoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVF1aWNrQ3NzKCkge1xuICBxdWlja0NzcyA9IGdldFF1aWNrQ3NzKCk7XG59XG5cbmltcG9ydCAnLi9pcGMnO1xuaW1wb3J0ICcuL3dhdGNoZXInO1xuIiwgImltcG9ydCBmcyBmcm9tICdmcy9wcm9taXNlcyc7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBpcGNNYWluIH0gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgSVBDLCBNRVNTQUdFUyB9IGZyb20gJ0Bjb25zdGFudHMnO1xuaW1wb3J0IHsgcXVpY2tDc3MsIHVwZGF0ZVF1aWNrQ3NzIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBzdGFydCwgc3RvcCB9IGZyb20gJy4vd2F0Y2hlcic7XG5pbXBvcnQgeyBoYXNWYWx1ZSwgc2VuZFRvQWxsIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IExvZ2dlck1vZHVsZSBmcm9tICdAY29tbW9uL2xvZ2dlcic7XG5jb25zdCBMb2dnZXIgPSBuZXcgTG9nZ2VyTW9kdWxlKCdJUEMgPiBRdWlja0NTUycsICdhbnNpJyk7XG5cbmlwY01haW4uaGFuZGxlKElQQy5nZXRRdWlja0NzcywgKCkgPT4gcXVpY2tDc3MpO1xuXG5pcGNNYWluLm9uKElQQy5jcmVhdGVRdWlja0Nzc05vZGUsIChldmVudCwgbG9jYXRpb246IHN0cmluZywgdHlwZTogJ2ZpbGUnIHwgJ2ZvbGRlcicpID0+IHtcbiAgaWYgKGNvbmZpZy52ZXJib3NlKSBMb2dnZXIuZGVidWcoJ1JlY2VpdmVkIG5vZGUgY3JlYXRpb24gbWVzc2FnZSBmcm9tJywgZXZlbnQuc2VuZGVyLmdldFRpdGxlKCkpO1xuXG4gIGxldCBpID0gMDtcbiAgbGV0IG5hbWU6IHN0cmluZztcbiAgd2hpbGUgKCFuYW1lKSB7XG4gICAgY29uc3QgcG9zc2libGVOYW1lID0gdHlwZSArIChpID8gJy0nICsgaSsrIDogJycpICsgKHR5cGUgPT09ICdmb2xkZXInID8gJycgOiAnLmNzcycpO1xuICAgIGhhc1ZhbHVlKHF1aWNrQ3NzLCAnbG9jYXRpb24nLCBqb2luKGxvY2F0aW9uLCBwb3NzaWJsZU5hbWUpKSB8fCAobmFtZSA9IHBvc3NpYmxlTmFtZSk7XG4gIH1cblxuICBjb25zdCBhY3R1YWxMb2NhdGlvbiA9IGpvaW4oY29uZmlnLnF1aWNrQ3NzRGlyLCBsb2NhdGlvbiwgbmFtZSk7XG5cbiAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcbiAgKHR5cGUgPT09ICdmaWxlJyA/IGZzLm9wZW4oYWN0dWFsTG9jYXRpb24sICd3eCcpIDogZnMubWtkaXIoYWN0dWFsTG9jYXRpb24pKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIExvZ2dlci5sb2coYFN1Y2Nlc3NmdWxseSBjcmVhdGVkICR7dHlwZX0gJHtuYW1lfS5gKTtcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICBMb2dnZXIuZXJyb3IoYEZhaWxlZCB0byBjcmVhdGUgJHt0eXBlfSAke25hbWV9OmAsIGUpO1xuICAgIH0pXG4gICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgZXZlbnQucmVwbHkoSVBDLnN0YXR1c01lc3NhZ2UsIHtcbiAgICAgICAgdHlwZTogTUVTU0FHRVMucXVpY2tDc3MuY3JlYXRlZCxcbiAgICAgICAgc3VjY2VzcyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgbG9jYXRpb246IG5hbWVcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxuaXBjTWFpbi5vbihJUEMuZGVsZXRlUXVpY2tDc3NOb2RlLCBhc3luYyAoZXZlbnQsIGxvY2F0aW9uOiBzdHJpbmcpID0+IHtcbiAgaWYgKGNvbmZpZy52ZXJib3NlKSBMb2dnZXIuZGVidWcoJ1JlY2VpdmVkIFF1aWNrQ1NTIGZpbGUgcmVtb3ZlIG1lc3NhZ2UgZnJvbScsIGV2ZW50LnNlbmRlci5nZXRUaXRsZSgpKTtcblxuICBpZiAoIWhhc1ZhbHVlKHF1aWNrQ3NzLCAnbG9jYXRpb24nLCBsb2NhdGlvbikpIHtcbiAgICBMb2dnZXIuZXJyb3IoYCR7bG9jYXRpb259IGlzbid0IGEgdmFsaWQgUXVpY2tDU1Mgbm9kZS5gKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBhY3R1YWxMb2NhdGlvbiA9IGpvaW4oY29uZmlnLnF1aWNrQ3NzRGlyLCBsb2NhdGlvbik7XG4gIGlmIChhY3R1YWxMb2NhdGlvbiA9PT0gY29uZmlnLnF1aWNrQ3NzRGlyKSB7XG4gICAgTG9nZ2VyLmVycm9yKCdDYW5cXCd0IGRlbGV0ZSB0aGUgYmFzZSBmb2xkZXIuJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgdHlwZSA9IGF3YWl0IGZzLmxzdGF0KGFjdHVhbExvY2F0aW9uKS50aGVuKChzdGF0KSA9PiBzdGF0LmlzRGlyZWN0b3J5KCkgPyAnZm9sZGVyJyA6ICdmaWxlJyk7XG5cbiAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcbiAgZnMucm0oYWN0dWFsTG9jYXRpb24sIHsgcmVjdXJzaXZlOiB0cnVlIH0pXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgTG9nZ2VyLmxvZyhgU3VjY2Vzc2Z1bGx5IGRlbGV0ZWQgJHtsb2NhdGlvbn0uYCk7XG4gICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgTG9nZ2VyLmVycm9yKGBGYWlsZWQgdG8gZGVsZXRlICR7bG9jYXRpb259OmAsIGUpO1xuICAgIH0pXG4gICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgZXZlbnQucmVwbHkoSVBDLnN0YXR1c01lc3NhZ2UsIHtcbiAgICAgICAgdHlwZTogTUVTU0FHRVMucXVpY2tDc3MuZGVsZXRlZCxcbiAgICAgICAgc3VjY2VzcyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgbG9jYXRpb25cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxuaXBjTWFpbi5vbihJUEMucmVuYW1lUXVpY2tDc3NOb2RlLCAoZXZlbnQsIGxvY2F0aW9uOiBzdHJpbmcsIG5ld05hbWU6IHN0cmluZykgPT4ge1xuICBpZiAoY29uZmlnLnZlcmJvc2UpIExvZ2dlci5kZWJ1ZygnUmVjZWl2ZWQgcmVuYW1lIG1lc3NhZ2UgZnJvbScsIGV2ZW50LnNlbmRlci5nZXRUaXRsZSgpKTtcblxuICBjb25zdCBuZXdMb2NhdGlvbiA9IGpvaW4obG9jYXRpb24sICcuLicsIG5ld05hbWUpO1xuICBjb25zdCBhY3R1YWxMb2NhdGlvbiA9IGpvaW4oY29uZmlnLnF1aWNrQ3NzRGlyLCBsb2NhdGlvbik7XG4gIGNvbnN0IGFjdHVhbE5ld0xvY2F0aW9uID0gam9pbihjb25maWcucXVpY2tDc3NEaXIsIG5ld0xvY2F0aW9uKTtcblxuICBzdG9wKCk7IC8vIFdhdGNoZXIgbmVlZHMgdG8gYmUgc3RvcHBlZCBmaXJzdCBvdGhlcndpc2UgaXQgdGhyb3dzIGFuIGVycm9yIChvbiB3aW5kb3dzKVxuXG4gIGxldCBzdWNjZXNzID0gZmFsc2U7XG4gIGZzLnJlbmFtZShhY3R1YWxMb2NhdGlvbiwgYWN0dWFsTmV3TG9jYXRpb24pXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgTG9nZ2VyLmxvZyhgU3VjY2Vzc2Z1bGx5IHJlbmFtZWQgJHtsb2NhdGlvbn0gdG8gJHtuZXdOYW1lfS5gKTtcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuXG4gICAgICB1cGRhdGVRdWlja0NzcygpO1xuICAgICAgc2VuZFRvQWxsKElQQy5vblF1aWNrQ3NzQ2hhbmdlLCBxdWlja0Nzcyk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgIExvZ2dlci5lcnJvcihgRmFpbGVkIHRvIHJlbmFtZSAke2xvY2F0aW9ufSB0byAke25ld05hbWV9OmAsIGUpO1xuICAgIH0pXG4gICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgc3RhcnQoKTtcbiAgICAgIGV2ZW50LnJlcGx5KElQQy5zdGF0dXNNZXNzYWdlLCB7XG4gICAgICAgIHR5cGU6IE1FU1NBR0VTLnF1aWNrQ3NzLnJlbmFtZWQsXG4gICAgICAgIHN1Y2Nlc3MsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBvbGRMb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICAgICAgbmV3TG9jYXRpb246IG5ld0xvY2F0aW9uXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5cbmlwY01haW4ub24oSVBDLnVwZGF0ZVF1aWNrQ3NzRmlsZSwgKGV2ZW50LCBsb2NhdGlvbjogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpID0+IHtcbiAgaWYgKGNvbmZpZy52ZXJib3NlKSBMb2dnZXIuZGVidWcoJ1JlY2VpdmVkIFF1aWNrQ1NTIGZpbGUgc2F2ZSBtZXNzYWdlIGZyb20nLCBldmVudC5zZW5kZXIuZ2V0VGl0bGUoKSk7XG5cbiAgaWYgKCFoYXNWYWx1ZShxdWlja0NzcywgJ2xvY2F0aW9uJywgbG9jYXRpb24pKSB7XG4gICAgTG9nZ2VyLmVycm9yKGAke2xvY2F0aW9ufSBpc24ndCBhIHZhbGlkIFF1aWNrQ1NTIGZpbGUuYCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgYWN0dWFsTG9jYXRpb24gPSBqb2luKGNvbmZpZy5xdWlja0Nzc0RpciwgbG9jYXRpb24pO1xuXG4gIGxldCBzdWNjZXNzID0gZmFsc2U7XG4gIGZzLndyaXRlRmlsZShhY3R1YWxMb2NhdGlvbiwgY29udGVudClcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBMb2dnZXIubG9nKGBTdWNjZXNzZnVsbHkgc2F2ZWQgJHtsb2NhdGlvbn0uYCk7XG4gICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgTG9nZ2VyLmVycm9yKGBGYWlsZWQgdG8gc2F2ZSAke2xvY2F0aW9ufTpgLCBlKTtcbiAgICB9KVxuICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgIGV2ZW50LnJlcGx5KElQQy5zdGF0dXNNZXNzYWdlLCB7XG4gICAgICAgIHR5cGU6IE1FU1NBR0VTLnF1aWNrQ3NzLnVwZGF0ZWQsXG4gICAgICAgIHN1Y2Nlc3MsXG4gICAgICAgIGRhdGE6IGxvY2F0aW9uXG4gICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIiwgImltcG9ydCBjaG9raWRhciBmcm9tICdjaG9raWRhcic7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ3RzLWRlYm91bmNlJztcbmltcG9ydCB7IEJyb3dzZXJXaW5kb3cgfSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBJUEMgfSBmcm9tICdAY29uc3RhbnRzJztcbmltcG9ydCB7IHF1aWNrQ3NzLCB1cGRhdGVRdWlja0NzcyB9IGZyb20gJy4nO1xuaW1wb3J0IExvZ2dlck1vZHVsZSBmcm9tICdAY29tbW9uL2xvZ2dlcic7XG5jb25zdCBMb2dnZXIgPSBuZXcgTG9nZ2VyTW9kdWxlKCdXYXRjaGVyID4gUXVpY2tDU1MnLCAnYW5zaScpO1xuXG5jb25zdCBvcHRzID0ge1xuICBwZXJzaXN0ZW50OiB0cnVlLFxuICBpZ25vcmVJbml0aWFsOiB0cnVlLFxuICBkaXNhYmxlR2xvYmJpbmc6IHRydWUsXG59O1xuZXhwb3J0IGxldCB3YXRjaGVyOiBjaG9raWRhci5GU1dhdGNoZXI7XG5zdGFydCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnQoKSB7XG4gIGlmIChjb25maWcudmVyYm9zZSkgTG9nZ2VyLmRlYnVnKCdTdGFydGluZyB3YXRjaGVyLi4uJyk7XG5cbiAgd2F0Y2hlciA9IGNob2tpZGFyLndhdGNoKGNvbmZpZy5xdWlja0Nzc0Rpciwgb3B0cyk7XG4gIHdhdGNoZXIub24oXG4gICAgJ2FsbCcsXG4gICAgZGVib3VuY2UoKGV2ZW50LCBwYXRoKSA9PiB7XG4gICAgICBpZiAoY29uZmlnLnZlcmJvc2UpIExvZ2dlci5kZWJ1ZyhldmVudCwgcGF0aCk7XG5cbiAgICAgIHVwZGF0ZVF1aWNrQ3NzKCk7XG4gICAgICBCcm93c2VyV2luZG93LmdldEFsbFdpbmRvd3MoKS5mb3JFYWNoKCh3aW5kb3cpID0+XG4gICAgICAgIHdpbmRvdy53ZWJDb250ZW50cy5zZW5kKElQQy5vblF1aWNrQ3NzQ2hhbmdlLCBxdWlja0NzcylcbiAgICAgICk7XG4gICAgfSwgMTAwKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RvcCgpIHtcbiAgaWYgKGNvbmZpZy52ZXJib3NlKSBMb2dnZXIuZGVidWcoJ1N0b3BwaW5nIHdhdGNoZXIuLi4nKTtcblxuICB3YXRjaGVyLmNsb3NlKCk7XG4gIHdhdGNoZXIgPSBudWxsO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0EsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQzVELFlBQVEsWUFBWSxRQUFRLFVBQVU7QUFDdEMsYUFBUyxRQUFRLE9BQU87QUFDcEIsYUFBTyxNQUFNLE9BQU8sQ0FBQyxZQUFZLFNBQVMsQ0FBQyxFQUFFLE9BQU8sWUFBWSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQUEsSUFDN0U7QUFDQSxZQUFRLFVBQVU7QUFDbEIsYUFBUyxVQUFVLE9BQU8sV0FBVztBQUNqQyxZQUFNLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDbEIsVUFBSSxhQUFhO0FBQ2pCLGlCQUFXLFFBQVEsT0FBTztBQUN0QixZQUFJLFVBQVUsSUFBSSxHQUFHO0FBQ2pCO0FBQ0EsaUJBQU8sVUFBVSxJQUFJLENBQUM7QUFBQSxRQUMxQixPQUNLO0FBQ0QsaUJBQU8sVUFBVSxFQUFFLEtBQUssSUFBSTtBQUFBLFFBQ2hDO0FBQUEsTUFDSjtBQUNBLGFBQU87QUFBQSxJQUNYO0FBQ0EsWUFBUSxZQUFZO0FBQUE7QUFBQTs7O0FDckJwQjtBQUFBO0FBQUE7QUFDQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTyxLQUFLLENB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QUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FB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LFFBQVE7QUFFbEMsVUFBSTtBQUNKLFVBQUksTUFBTSxZQUFZLEdBQUc7QUFDdkIsb0JBQVksV0FBVyxVQUFVLEtBQUs7QUFDdEMsb0JBQVksS0FBSyxTQUFTO0FBQUEsTUFDNUIsV0FBVyxNQUFNLEtBQUssUUFBUSxHQUFHO0FBQy9CLFlBQUk7QUFDRixzQkFBWTtBQUFBLFlBQ1YsTUFBTTtBQUFBLFlBQ04sY0FBVSx1QkFBUyxlQUFPLGFBQWEsUUFBUTtBQUFBLFlBQy9DLFNBQVMsV0FBQUEsUUFBRyxhQUFhLFVBQVUsT0FBTztBQUFBLFVBQzVDO0FBQ0EsZ0JBQU0sS0FBSyxTQUFTO0FBQUEsUUFDdEIsU0FBUyxHQUFQO0FBQ0EsVUFBQUQsUUFBTyxNQUFNLHNCQUFzQixZQUFZLENBQUM7QUFBQSxRQUNsRDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBRUEsU0FBSyxRQUFRLENBQUMsR0FBRyxhQUFhLEdBQUcsS0FBSztBQUN0QyxXQUFPO0FBQUEsRUFDVDtBQUVBLFNBQU8sV0FBVyxlQUFPLGFBQWEsT0FBTztBQUMvQztBQUVPLElBQUksV0FBVyxZQUFZO0FBRTNCLFNBQVMsaUJBQWlCO0FBQy9CLGFBQVcsWUFBWTtBQUN6Qjs7O0FaN0NBLHFCQUFJLEdBQUcsd0JBQXdCLENBQUMsR0FBRyxnQkFBZ0I7QUFDakQsY0FBWSxHQUFHLG1CQUFtQixNQUFNO0FBQ3RDLGdCQUFZLFVBQVUsV0FBQUUsUUFBRyxpQkFBYSxtQkFBSyxXQUFXLGNBQWMsR0FBRyxNQUFNLENBQUM7QUFBQSxFQUNoRixDQUFDO0FBQ0gsQ0FBQztBQUVELHlCQUFRLEdBQUcsSUFBSSxlQUFlLENBQUMsVUFBVTtBQUV2QyxRQUFNLGNBQWMsTUFBTSxPQUFPO0FBQ25DLENBQUM7IiwKICAibmFtZXMiOiBbIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm9wdHMiLCAibm9kZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJvcHRzIiwgInN0b3AiLCAic3RhcnQiLCAibWF4IiwgIm1vZHVsZSIsICJzdGFydCIsICJzdG9wIiwgIm9wdHMiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm9wdHMiLCAiaW5kZXgiLCAibW9kdWxlIiwgInJlcXVpcmVfY29uc3RhbnRzIiwgIm1vZHVsZSIsICJyZXF1aXJlX3V0aWxzIiwgIm1vZHVsZSIsICJvcHRzIiwgInN0YXJ0IiwgInJlcXVpcmVfcGFyc2UiLCAibW9kdWxlIiwgIm9wdHMiLCAidmFsdWUiLCAicmVzdCIsICJzb3VyY2UiLCAibW9kdWxlIiwgInN0YXRlIiwgIm9wdHMiLCAicmVxdWlyZV9waWNvbWF0Y2giLCAibW9kdWxlIiwgIm1vZHVsZSIsICJiYXNlbmFtZSIsICJtb2R1bGUiLCAicmVxdWlyZV91dGlscyIsICJmcyIsICJyZXF1aXJlX2ZzIiwgImZzIiwgImZzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAicXVldWVNaWNyb3Rhc2siLCAicmVxdWlyZV9jb25zdGFudHMiLCAicmVxdWlyZV9mcyIsICJyZXF1aXJlX3V0aWxzIiwgImZzIiwgInJlcXVpcmVfYXN5bmMiLCAicmVxdWlyZV9zeW5jIiwgInJlcXVpcmVfZnMiLCAiZnMiLCAicmVxdWlyZV9zZXR0aW5ncyIsICJmcyIsICJyZXF1aXJlX291dCIsICJtb2R1bGUiLCAibW9kdWxlIiwgInJlc29sdmUiLCAicmVxdWlyZV9jb21tb24iLCAicmVxdWlyZV9hc3luYyIsICJyZXF1aXJlX2FzeW5jIiwgInJlcXVpcmVfc3RyZWFtIiwgInJlcXVpcmVfc3luYyIsICJyZXF1aXJlX3N5bmMiLCAicmVxdWlyZV9zZXR0aW5ncyIsICJyZXF1aXJlX291dCIsICJyZXF1aXJlX3JlYWRlciIsICJyZXF1aXJlX3N0cmVhbSIsICJyb290IiwgInJlc29sdmUiLCAicmVxdWlyZV9hc3luYyIsICJyb290IiwgInJlc29sdmUiLCAicmVxdWlyZV9lbnRyeSIsICJyZXF1aXJlX2FzeW5jIiwgInJvb3QiLCAicmVxdWlyZV9zdHJlYW0iLCAicm9vdCIsICJyZXF1aXJlX3N5bmMiLCAicm9vdCIsICJyZXF1aXJlX3N5bmMiLCAicm9vdCIsICJyZXF1aXJlX3NldHRpbmdzIiwgImZzIiwgInJlcXVpcmVfb3V0IiwgIm1vZHVsZSIsICJGYXN0R2xvYiIsICJtb2R1bGUiLCAiZnMiLCAib3B0cyIsICJyb290IiwgImJhc2VuYW1lIiwgInJlc29sdmUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJvcHRzIiwgInRlc3RTdHJpbmciLCAicmV0dXJuSW5kZXgiLCAibW9kdWxlIiwgInJlcXVpcmVfYmluYXJ5X2V4dGVuc2lvbnMiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJyZXF1aXJlX2NvbnN0YW50cyIsICJwbGF0Zm9ybSIsICJtb2R1bGUiLCAiZnMiLCAid2F0Y2hlciIsICJyYXdFbWl0dGVyIiwgImxpc3RlbmVyIiwgIm9wdHMiLCAiYmFzZW5hbWUiLCAibmV3U3RhdHMiLCAicmVzb2x2ZSIsICJzdGF0cyIsICJtb2R1bGUiLCAiZnMiLCAic3RvcCIsICJyb290IiwgIm9wdHMiLCAiZnMiLCAib3B0cyIsICJwYXRoIiwgIm5vdyIsICJzdGF0IiwgInJvb3QiLCAid2F0Y2hlciIsICJmdW5jIiwgIndhaXRNaWxsaXNlY29uZHMiLCAib3B0aW9ucyIsICJ0aW1lb3V0SWQiLCAiaXNJbW1lZGlhdGUiLCAiY2FsbGJhY2siLCAibWF4V2FpdCIsICJsYXN0SW52b2tlVGltZSIsICJEYXRlIiwgIm5vdyIsICJwcm9taXNlcyIsICJuZXh0SW52b2tlVGltZW91dCIsICJ0aW1lU2luY2VMYXN0SW52b2NhdGlvbiIsICJkZWJvdW5jZWRGdW5jdGlvbiIsICJhcmdzIiwgImNvbnRleHQiLCAidGhpcyIsICJQcm9taXNlIiwgInJlc29sdmUiLCAicmVqZWN0IiwgInNob3VsZENhbGxOb3ciLCAiY2xlYXJUaW1lb3V0IiwgInNldFRpbWVvdXQiLCAicmVzdWx0IiwgImFwcGx5IiwgImZvckVhY2giLCAiZSIsICJwdXNoIiwgImNhbmNlbCIsICJyZWFzb24iLCAiciIsICJpbXBvcnRfZnMiLCAiaW1wb3J0X3BhdGgiLCAiaW1wb3J0X2VsZWN0cm9uIiwgImltcG9ydF9wYXRoIiwgImltcG9ydF9lbGVjdHJvbiIsICJpbXBvcnRfcGF0aCIsICJ3aW5kb3ciLCAiQnJvd3NlcldpbmRvdyIsICJmcyIsICJpbXBvcnRfZWxlY3Ryb24iLCAiaW1wb3J0X3BhdGgiLCAiaW1wb3J0X3BhdGgiLCAiTG9nZ2VyIiwgImNob2tpZGFyIiwgImlkIiwgImltcG9ydF9wYXRoIiwgImltcG9ydF9lbGVjdHJvbiIsICJMb2dnZXIiLCAiZnMiLCAiTG9nZ2VyIiwgImZnIiwgIkxvZ2dlciIsICJpbXBvcnRfZnMiLCAiaW1wb3J0X3BhdGgiLCAiaW1wb3J0X3Byb21pc2VzIiwgImltcG9ydF9wYXRoIiwgImltcG9ydF9lbGVjdHJvbiIsICJpbXBvcnRfY2hva2lkYXIiLCAiaW1wb3J0X3RzX2RlYm91bmNlIiwgImltcG9ydF9lbGVjdHJvbiIsICJMb2dnZXIiLCAid2F0Y2hlciIsICJjaG9raWRhciIsICJ3aW5kb3ciLCAiTG9nZ2VyIiwgImZzIiwgIkxvZ2dlciIsICJmcyIsICJmcyJdCn0K
