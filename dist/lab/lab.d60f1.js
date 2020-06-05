/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/lab/lab.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/art-template/lib/compile/runtime.js":
/*!**********************************************************!*\
  !*** ./node_modules/art-template/lib/compile/runtime.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\n/*! art-template@runtime | https://github.com/aui/art-template */\n\nvar globalThis = typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};\n\nvar runtime = Object.create(globalThis);\nvar ESCAPE_REG = /[\"&'<>]/;\n\n/**\n * 编码模板输出的内容\n * @param  {any}        content\n * @return {string}\n */\nruntime.$escape = function (content) {\n    return xmlEscape(toString(content));\n};\n\n/**\n * 迭代器，支持数组与对象\n * @param {array|Object} data\n * @param {function}     callback\n */\nruntime.$each = function (data, callback) {\n    if (Array.isArray(data)) {\n        for (var i = 0, len = data.length; i < len; i++) {\n            callback(data[i], i);\n        }\n    } else {\n        for (var _i in data) {\n            callback(data[_i], _i);\n        }\n    }\n};\n\n// 将目标转成字符\nfunction toString(value) {\n    if (typeof value !== 'string') {\n        if (value === undefined || value === null) {\n            value = '';\n        } else if (typeof value === 'function') {\n            value = toString(value.call(value));\n        } else {\n            value = JSON.stringify(value);\n        }\n    }\n\n    return value;\n}\n\n// 编码 HTML 内容\nfunction xmlEscape(content) {\n    var html = '' + content;\n    var regexResult = ESCAPE_REG.exec(html);\n    if (!regexResult) {\n        return content;\n    }\n\n    var result = '';\n    var i = void 0,\n        lastIndex = void 0,\n        char = void 0;\n    for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {\n        switch (html.charCodeAt(i)) {\n            case 34:\n                char = '&#34;';\n                break;\n            case 38:\n                char = '&#38;';\n                break;\n            case 39:\n                char = '&#39;';\n                break;\n            case 60:\n                char = '&#60;';\n                break;\n            case 62:\n                char = '&#62;';\n                break;\n            default:\n                continue;\n        }\n\n        if (lastIndex !== i) {\n            result += html.substring(lastIndex, i);\n        }\n\n        lastIndex = i + 1;\n        result += char;\n    }\n\n    if (lastIndex !== i) {\n        return result + html.substring(lastIndex, i);\n    } else {\n        return result;\n    }\n}\n\nmodule.exports = runtime;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/art-template/lib/compile/runtime.js?");

/***/ }),

/***/ "./node_modules/art-template/lib/runtime.js":
/*!**************************************************!*\
  !*** ./node_modules/art-template/lib/runtime.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./compile/runtime */ \"./node_modules/art-template/lib/compile/runtime.js\");\n\n//# sourceURL=webpack:///./node_modules/art-template/lib/runtime.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/img/drink.png":
/*!***************************!*\
  !*** ./src/img/drink.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEpElEQVRYR62XXWyTVRjH/+e8X/1eO/phjSAFQxSymZkhwwTlQmUdF0bWmXihGI3hzhujXhkxJnKhNybGwLgzfiRaGFyQTdE5GZGEwYyMwLbQMufasXYr2+jK2q3vMeftuoytH6fGc/e+5/n4ned5zjnPIahhTIZa90vAy2BkLwAPCDyGOkMSQBKEXcoDXf5wT5+oWVJNMHnogF+n5Ahh5FUQ7KgmvwI0ygj7nurshOf0T5OVdCoCTIVaj1JC3mYMDws5XidECOI6Yyd94Z6j5fTLAiRCrRcAsu+/ON6ow/q94Z5nS9kqCTAVCiYJ4P5/nBesMGDaF+4u1MyasQEg0R68DYKtlZzb2n1IyzLu9k/BFV8W52QY857qDpQFSISCPwDoqGZxU5sH9CEVo+fjyF9LwmF1QFXVamrF+R+94e5Xih+rEeAFR0A+ErFS/5IXkl/DjTPjuD/4DyilsFvtqLPXiaiDgX1cLEwDgG81SPSKaLU7O3xQ/GZc+zaCpaHYqlNN1eCwOWA2mSuC8N2BvN7Mt6gBUMvquXw5gKJXm9UGp91pRKbcKEZhBSAYIcA2ofgBOE6tcLs17IpGYZ2fL6kmSzIcdgdsFlvJeQZEfeHu7WSyvbVNIuScqPNhScGvRIOvXoU/OY3NsYmKqjwdTocTiqxskMszdpBMhdqOE7AjIgARWcHZJcVwrimF8HpSKQTGx6vknBi1sb5IGcgJkmgPXgbBbhGA7xQr7uQYHvGaQNecII03b8KUzVY1oSqqEQ2TZirIMgxwgKoHT9HyScmKe8sMW3wrBlYmnrh1C/Z0uipAUYBvWVediwOMkUQoyDWtItrlAJ7z14ENR1dWxbA4VrkuuKAkSXA6XNmaABwdPvDMJ6VCQQ1cz8LzWAOe3PM4lLrC1ZEZiSDywTGR9QAgqCkFmz57ywAANQF/n8PZ3gUDYMeSDPPOwi5eyt0TBqCSlK+pCN2fvwmj9oj5AQB/1xA0l9MAsBx+WhhAlpUMSYRavwDIOyIxc3/1HogsA6lJIN63GgHv15dh2eIvALyxB5H3PxUxB5OmjpJCn0d+E9HgNaDxHPgKZz1PQTyRR6j5KWQv3Ya5aTvm4jdwt/cPEXOwWCwfGhFNtAdHRPq9cgAtKkPgUCsWJ2KIffmNkHNKaT7Dcq6aLqPrjfXI6QyLkA0nfPV88HMg8HwLps/8IuScC2mqdqWhb3B3TddxpYMo8EILprvEAAghzKyZ9+/sHbhQU0PSKVmQXkbJkzDw4l5Mnz4vFAGzydK/q3fAaFIf6AmrdcKd1IJ0vjTAtgPPIHnq56oAqqLONf7+Z2HPrgfgPyp1xH06MCKbsdVUyD0f7kf92Pf6wdXvzHAU48c6S4JIlOpNF4ektZMl2/JyF9RidhGJmUTVVZYSkCR5uan/rw1NQYWHycYOmTGG2FQMuq7XBKGppomGvqubSynV/DRLzaaQzohdvbzaTZr5YrHgagbgCsXHKUBe433jQmYBM7MzFSNACdEVRR2UqPQu32qVhKu+jtcq8/5xKZc7PDufasvrzKTreeNEopQuE0JzEqF3qCR13Z+b+aT5anROJE//AvmwsuceMJV4AAAAAElFTkSuQmCC\"\n\n//# sourceURL=webpack:///./src/img/drink.png?");

/***/ }),

/***/ "./src/pages/lab/index.art":
/*!*********************************!*\
  !*** ./src/pages/lab/index.art ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $imports = __webpack_require__(/*! ../../../node_modules/art-template/lib/runtime.js */ \"./node_modules/art-template/lib/runtime.js\");\nmodule.exports = function ($data) {\n    'use strict';\n    $data = $data || {};\n    var $$out = '', $$blocks = arguments[1] || {}, include = function (content) {\n            $$out += content;\n            return $$out;\n        }, title = $data.title;\n    include(__webpack_require__(/*! ./../../template/header.art */ \"./src/template/header.art\")({ title: title }));\n    $$out += '\\r\\n\\r\\n<p><img ';\n    $$out += 'src=\"' + __webpack_require__(/*! ../../img/drink.png */ \"./src/img/drink.png\") + '\"';\n    $$out += ' alt=\"timg\" /></p>\\r\\n<p>lab center</p>\\r\\n';\n    include(__webpack_require__(/*! ./../../template/footer.art */ \"./src/template/footer.art\")($data));\n    $$out += '\\r\\n';\n    return $$out;\n};\n\n//# sourceURL=webpack:///./src/pages/lab/index.art?");

/***/ }),

/***/ "./src/pages/lab/lab.js":
/*!******************************!*\
  !*** ./src/pages/lab/lab.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_art__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.art */ \"./src/pages/lab/index.art\");\n/* harmony import */ var _index_art__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_art__WEBPACK_IMPORTED_MODULE_0__);\n// const render = require('./index.art');\r\n\r\n\r\nconst data = {\r\n  title: 'Lab Page',\r\n};\r\nconst html = _index_art__WEBPACK_IMPORTED_MODULE_0___default()(data);\r\nconsole.log(html);\r\n\r\nif (typeof document === 'object') {\r\n  document.body.innerHTML = html;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/pages/lab/lab.js?");

/***/ }),

/***/ "./src/template/footer.art":
/*!*********************************!*\
  !*** ./src/template/footer.art ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $imports = __webpack_require__(/*! ../../node_modules/art-template/lib/runtime.js */ \"./node_modules/art-template/lib/runtime.js\");\nmodule.exports = function ($data) {\n    'use strict';\n    $data = $data || {};\n    var $$out = '';\n    $$out += '<footer></footer>\\r\\n';\n    return $$out;\n};\n\n//# sourceURL=webpack:///./src/template/footer.art?");

/***/ }),

/***/ "./src/template/header.art":
/*!*********************************!*\
  !*** ./src/template/header.art ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $imports = __webpack_require__(/*! ../../node_modules/art-template/lib/runtime.js */ \"./node_modules/art-template/lib/runtime.js\");\nmodule.exports = function ($data) {\n    'use strict';\n    $data = $data || {};\n    var $$out = '', $escape = $imports.$escape, title = $data.title;\n    $$out += '<header>\\r\\n  <h1>';\n    $$out += $escape(title);\n    $$out += '</h1>\\r\\n</header>\\r\\n';\n    return $$out;\n};\n\n//# sourceURL=webpack:///./src/template/header.art?");

/***/ })

/******/ });