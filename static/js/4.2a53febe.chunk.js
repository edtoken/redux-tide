webpackJsonp([4],Array(141).concat([
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_devtools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_devtools_log_monitor__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_devtools_log_monitor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_devtools_log_monitor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_devtools_dock_monitor__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_devtools_dock_monitor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_devtools_dock_monitor__);
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_redux_devtools__["createDevTools"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_devtools_dock_monitor___default.a,{toggleVisibilityKey:'ctrl-h',changePositionKey:'ctrl-q',defaultIsVisible:true},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_redux_devtools_log_monitor___default.a,null))));

/***/ }),
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(374);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 316 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 317 */,
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(451),
    getValue = __webpack_require__(456);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 319 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 320 */,
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(323),
    getRawTag = __webpack_require__(452),
    objectToString = __webpack_require__(453);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 322 */,
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(315);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = shouldPureComponentUpdate;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _shallowEqual = __webpack_require__(567);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

function shouldPureComponentUpdate(nextProps, nextState) {
  return !(0, _shallowEqual2['default'])(this.props, nextProps) || !(0, _shallowEqual2['default'])(this.state, nextState);
}

module.exports = exports['default'];

/***/ }),
/* 325 */,
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(318);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(461),
    listCacheDelete = __webpack_require__(462),
    listCacheGet = __webpack_require__(463),
    listCacheHas = __webpack_require__(464),
    listCacheSet = __webpack_require__(465);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(376);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(467);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 330 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(346);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(613), __esModule: true };

/***/ }),
/* 333 */,
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reduxDevtoolsInstrument = __webpack_require__(372);

Object.defineProperty(exports, 'instrument', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reduxDevtoolsInstrument).default;
  }
});
Object.defineProperty(exports, 'ActionCreators', {
  enumerable: true,
  get: function get() {
    return _reduxDevtoolsInstrument.ActionCreators;
  }
});
Object.defineProperty(exports, 'ActionTypes', {
  enumerable: true,
  get: function get() {
    return _reduxDevtoolsInstrument.ActionTypes;
  }
});

var _persistState = __webpack_require__(493);

Object.defineProperty(exports, 'persistState', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_persistState).default;
  }
});

var _createDevTools = __webpack_require__(544);

Object.defineProperty(exports, 'createDevTools', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_createDevTools).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(336),
    setCacheAdd = __webpack_require__(471),
    setCacheHas = __webpack_require__(472);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(448),
    mapCacheDelete = __webpack_require__(466),
    mapCacheGet = __webpack_require__(468),
    mapCacheHas = __webpack_require__(469),
    mapCacheSet = __webpack_require__(470);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 337 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(318),
    root = __webpack_require__(315);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 339 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(478),
    isObjectLike = __webpack_require__(319);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 341 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 342 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 343 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(499),
    baseKeys = __webpack_require__(504),
    isArrayLike = __webpack_require__(386);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(316),
    isSymbol = __webpack_require__(346);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(321),
    isObjectLike = __webpack_require__(319);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 347 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 348 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(557);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) || Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) != objectTag) {
    return false;
  }
  var proto = Object(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);


/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _keys = __webpack_require__(332);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _JSONArrow = __webpack_require__(414);

var _JSONArrow2 = _interopRequireDefault(_JSONArrow);

var _getCollectionEntries = __webpack_require__(619);

var _getCollectionEntries2 = _interopRequireDefault(_getCollectionEntries);

var _JSONNode = __webpack_require__(412);

var _JSONNode2 = _interopRequireDefault(_JSONNode);

var _ItemRange = __webpack_require__(622);

var _ItemRange2 = _interopRequireDefault(_ItemRange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Renders nested values (eg. objects, arrays, lists, etc.)
 */

function renderChildNodes(props, from, to) {
  var nodeType = props.nodeType,
      data = props.data,
      collectionLimit = props.collectionLimit,
      circularCache = props.circularCache,
      keyPath = props.keyPath,
      postprocessValue = props.postprocessValue,
      sortObjectKeys = props.sortObjectKeys;

  var childNodes = [];

  (0, _getCollectionEntries2['default'])(nodeType, data, sortObjectKeys, collectionLimit, from, to).forEach(function (entry) {
    if (entry.to) {
      childNodes.push(_react2['default'].createElement(_ItemRange2['default'], (0, _extends3['default'])({}, props, {
        key: 'ItemRange--' + entry.from + '-' + entry.to,
        from: entry.from,
        to: entry.to,
        renderChildNodes: renderChildNodes
      })));
    } else {
      var key = entry.key,
          value = entry.value;

      var isCircular = circularCache.indexOf(value) !== -1;

      var node = _react2['default'].createElement(_JSONNode2['default'], (0, _extends3['default'])({}, props, { postprocessValue: postprocessValue, collectionLimit: collectionLimit }, {
        key: 'Node--' + key,
        keyPath: [key].concat(keyPath),
        value: postprocessValue(value),
        circularCache: [].concat(circularCache, [value]),
        isCircular: isCircular,
        hideRoot: false
      }));

      if (node !== false) {
        childNodes.push(node);
      }
    }
  });

  return childNodes;
}

function getStateFromProps(props) {
  // calculate individual node expansion if necessary
  var expanded = props.shouldExpandNode && !props.isCircular ? props.shouldExpandNode(props.keyPath, props.data, props.level) : false;
  return {
    expanded: expanded
  };
}

var JSONNestedNode = function (_React$Component) {
  (0, _inherits3['default'])(JSONNestedNode, _React$Component);

  function JSONNestedNode(props) {
    (0, _classCallCheck3['default'])(this, JSONNestedNode);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props));

    _this.handleClick = function () {
      if (_this.props.expandable) {
        _this.setState({ expanded: !_this.state.expanded });
      }
    };

    _this.state = getStateFromProps(props);
    return _this;
  }

  JSONNestedNode.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var nextState = getStateFromProps(nextProps);
    if (getStateFromProps(this.props).expanded !== nextState.expanded) {
      this.setState(nextState);
    }
  };

  JSONNestedNode.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    var _this2 = this;

    return !!(0, _keys2['default'])(nextProps).find(function (key) {
      return key !== 'circularCache' && (key === 'keyPath' ? nextProps[key].join('/') !== _this2.props[key].join('/') : nextProps[key] !== _this2.props[key]);
    }) || nextState.expanded !== this.state.expanded;
  };

  JSONNestedNode.prototype.render = function render() {
    var _props = this.props,
        getItemString = _props.getItemString,
        nodeTypeIndicator = _props.nodeTypeIndicator,
        nodeType = _props.nodeType,
        data = _props.data,
        hideRoot = _props.hideRoot,
        createItemString = _props.createItemString,
        styling = _props.styling,
        collectionLimit = _props.collectionLimit,
        keyPath = _props.keyPath,
        labelRenderer = _props.labelRenderer,
        expandable = _props.expandable;
    var expanded = this.state.expanded;

    var renderedChildren = expanded || hideRoot && this.props.level === 0 ? renderChildNodes((0, _extends3['default'])({}, this.props, { level: this.props.level + 1 })) : null;

    var itemType = _react2['default'].createElement(
      'span',
      styling('nestedNodeItemType', expanded),
      nodeTypeIndicator
    );
    var renderedItemString = getItemString(nodeType, data, itemType, createItemString(data, collectionLimit));
    var stylingArgs = [keyPath, nodeType, expanded, expandable];

    return hideRoot ? _react2['default'].createElement(
      'li',
      styling.apply(undefined, ['rootNode'].concat(stylingArgs)),
      _react2['default'].createElement(
        'ul',
        styling.apply(undefined, ['rootNodeChildren'].concat(stylingArgs)),
        renderedChildren
      )
    ) : _react2['default'].createElement(
      'li',
      styling.apply(undefined, ['nestedNode'].concat(stylingArgs)),
      expandable && _react2['default'].createElement(_JSONArrow2['default'], {
        styling: styling,
        nodeType: nodeType,
        expanded: expanded,
        onClick: this.handleClick
      }),
      _react2['default'].createElement(
        'label',
        (0, _extends3['default'])({}, styling.apply(undefined, [['label', 'nestedNodeLabel']].concat(stylingArgs)), {
          onClick: this.handleClick
        }),
        labelRenderer.apply(undefined, stylingArgs)
      ),
      _react2['default'].createElement(
        'span',
        (0, _extends3['default'])({}, styling.apply(undefined, ['nestedNodeItemString'].concat(stylingArgs)), {
          onClick: this.handleClick
        }),
        renderedItemString
      ),
      _react2['default'].createElement(
        'ul',
        styling.apply(undefined, ['nestedNodeChildren'].concat(stylingArgs)),
        renderedChildren
      )
    );
  };

  return JSONNestedNode;
}(_react2['default'].Component);

JSONNestedNode.propTypes = {
  getItemString: _propTypes2['default'].func.isRequired,
  nodeTypeIndicator: _propTypes2['default'].any,
  nodeType: _propTypes2['default'].string.isRequired,
  data: _propTypes2['default'].any,
  hideRoot: _propTypes2['default'].bool.isRequired,
  createItemString: _propTypes2['default'].func.isRequired,
  styling: _propTypes2['default'].func.isRequired,
  collectionLimit: _propTypes2['default'].number,
  keyPath: _propTypes2['default'].arrayOf(_propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number])).isRequired,
  labelRenderer: _propTypes2['default'].func.isRequired,
  shouldExpandNode: _propTypes2['default'].func,
  level: _propTypes2['default'].number.isRequired,
  sortObjectKeys: _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].bool]),
  isCircular: _propTypes2['default'].bool,
  expandable: _propTypes2['default'].bool
};
JSONNestedNode.defaultProps = {
  data: [],
  circularCache: [],
  level: 0,
  expandable: true
};
exports['default'] = JSONNestedNode;

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(620), __esModule: true };

/***/ }),
/* 351 */
/***/ (function(module, exports) {

function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

module.exports = clamp;

/***/ }),
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.INIT_ACTION = exports.ActionCreators = exports.ActionTypes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.liftAction = liftAction;
exports.liftReducerWith = liftReducerWith;
exports.unliftState = unliftState;
exports.unliftStore = unliftStore;
exports.default = instrument;

var _difference = __webpack_require__(446);

var _difference2 = _interopRequireDefault(_difference);

var _union = __webpack_require__(485);

var _union2 = _interopRequireDefault(_union);

var _isPlainObject = __webpack_require__(489);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _symbolObservable = __webpack_require__(389);

var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionTypes = exports.ActionTypes = {
  PERFORM_ACTION: 'PERFORM_ACTION',
  RESET: 'RESET',
  ROLLBACK: 'ROLLBACK',
  COMMIT: 'COMMIT',
  SWEEP: 'SWEEP',
  TOGGLE_ACTION: 'TOGGLE_ACTION',
  SET_ACTIONS_ACTIVE: 'SET_ACTIONS_ACTIVE',
  JUMP_TO_STATE: 'JUMP_TO_STATE',
  JUMP_TO_ACTION: 'JUMP_TO_ACTION',
  REORDER_ACTION: 'REORDER_ACTION',
  IMPORT_STATE: 'IMPORT_STATE',
  LOCK_CHANGES: 'LOCK_CHANGES',
  PAUSE_RECORDING: 'PAUSE_RECORDING'
};

/**
 * Action creators to change the History state.
 */
var ActionCreators = exports.ActionCreators = {
  performAction: function performAction(action) {
    if (!(0, _isPlainObject2.default)(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    return { type: ActionTypes.PERFORM_ACTION, action: action, timestamp: Date.now() };
  },
  reset: function reset() {
    return { type: ActionTypes.RESET, timestamp: Date.now() };
  },
  rollback: function rollback() {
    return { type: ActionTypes.ROLLBACK, timestamp: Date.now() };
  },
  commit: function commit() {
    return { type: ActionTypes.COMMIT, timestamp: Date.now() };
  },
  sweep: function sweep() {
    return { type: ActionTypes.SWEEP };
  },
  toggleAction: function toggleAction(id) {
    return { type: ActionTypes.TOGGLE_ACTION, id: id };
  },
  setActionsActive: function setActionsActive(start, end) {
    var active = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

    return { type: ActionTypes.SET_ACTIONS_ACTIVE, start: start, end: end, active: active };
  },
  reorderAction: function reorderAction(actionId, beforeActionId) {
    return { type: ActionTypes.REORDER_ACTION, actionId: actionId, beforeActionId: beforeActionId };
  },
  jumpToState: function jumpToState(index) {
    return { type: ActionTypes.JUMP_TO_STATE, index: index };
  },
  jumpToAction: function jumpToAction(actionId) {
    return { type: ActionTypes.JUMP_TO_ACTION, actionId: actionId };
  },
  importState: function importState(nextLiftedState, noRecompute) {
    return { type: ActionTypes.IMPORT_STATE, nextLiftedState: nextLiftedState, noRecompute: noRecompute };
  },
  lockChanges: function lockChanges(status) {
    return { type: ActionTypes.LOCK_CHANGES, status: status };
  },
  pauseRecording: function pauseRecording(status) {
    return { type: ActionTypes.PAUSE_RECORDING, status: status };
  }
};

var INIT_ACTION = exports.INIT_ACTION = { type: '@@INIT' };

/**
 * Computes the next entry with exceptions catching.
 */
function computeWithTryCatch(reducer, action, state) {
  var nextState = state;
  var nextError = void 0;
  try {
    nextState = reducer(state, action);
  } catch (err) {
    nextError = err.toString();
    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && (typeof window.chrome !== 'undefined' || typeof window.process !== 'undefined' && window.process.type === 'renderer')) {
      // In Chrome, rethrowing provides better source map support
      setTimeout(function () {
        throw err;
      });
    } else {
      console.error(err);
    }
  }

  return {
    state: nextState,
    error: nextError
  };
}

/**
 * Computes the next entry in the log by applying an action.
 */
function computeNextEntry(reducer, action, state, shouldCatchErrors) {
  if (!shouldCatchErrors) {
    return { state: reducer(state, action) };
  }
  return computeWithTryCatch(reducer, action, state);
}

/**
 * Runs the reducer on invalidated actions to get a fresh computation log.
 */
function recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, shouldCatchErrors) {
  // Optimization: exit early and return the same reference
  // if we know nothing could have changed.
  if (!computedStates || minInvalidatedStateIndex === -1 || minInvalidatedStateIndex >= computedStates.length && computedStates.length === stagedActionIds.length) {
    return computedStates;
  }

  var nextComputedStates = computedStates.slice(0, minInvalidatedStateIndex);
  for (var i = minInvalidatedStateIndex; i < stagedActionIds.length; i++) {
    var actionId = stagedActionIds[i];
    var action = actionsById[actionId].action;

    var previousEntry = nextComputedStates[i - 1];
    var previousState = previousEntry ? previousEntry.state : committedState;

    var shouldSkip = skippedActionIds.indexOf(actionId) > -1;
    var entry = void 0;
    if (shouldSkip) {
      entry = previousEntry;
    } else {
      if (shouldCatchErrors && previousEntry && previousEntry.error) {
        entry = {
          state: previousState,
          error: 'Interrupted by an error up the chain'
        };
      } else {
        entry = computeNextEntry(reducer, action, previousState, shouldCatchErrors);
      }
    }
    nextComputedStates.push(entry);
  }

  return nextComputedStates;
}

/**
 * Lifts an app's action into an action on the lifted store.
 */
function liftAction(action) {
  return ActionCreators.performAction(action);
}

/**
 * Creates a history state reducer from an app's reducer.
 */
function liftReducerWith(reducer, initialCommittedState, monitorReducer, options) {
  var initialLiftedState = {
    monitorState: monitorReducer(undefined, {}),
    nextActionId: 1,
    actionsById: { 0: liftAction(INIT_ACTION) },
    stagedActionIds: [0],
    skippedActionIds: [],
    committedState: initialCommittedState,
    currentStateIndex: 0,
    computedStates: [],
    isLocked: options.shouldStartLocked === true,
    isPaused: options.shouldRecordChanges === false
  };

  /**
   * Manages how the history actions modify the history state.
   */
  return function (liftedState, liftedAction) {
    var _ref = liftedState || initialLiftedState;

    var monitorState = _ref.monitorState;
    var actionsById = _ref.actionsById;
    var nextActionId = _ref.nextActionId;
    var stagedActionIds = _ref.stagedActionIds;
    var skippedActionIds = _ref.skippedActionIds;
    var committedState = _ref.committedState;
    var currentStateIndex = _ref.currentStateIndex;
    var computedStates = _ref.computedStates;
    var isLocked = _ref.isLocked;
    var isPaused = _ref.isPaused;


    if (!liftedState) {
      // Prevent mutating initialLiftedState
      actionsById = _extends({}, actionsById);
    }

    function commitExcessActions(n) {
      // Auto-commits n-number of excess actions.
      var excess = n;
      var idsToDelete = stagedActionIds.slice(1, excess + 1);

      for (var i = 0; i < idsToDelete.length; i++) {
        if (computedStates[i + 1].error) {
          // Stop if error is found. Commit actions up to error.
          excess = i;
          idsToDelete = stagedActionIds.slice(1, excess + 1);
          break;
        } else {
          delete actionsById[idsToDelete[i]];
        }
      }

      skippedActionIds = skippedActionIds.filter(function (id) {
        return idsToDelete.indexOf(id) === -1;
      });
      stagedActionIds = [0].concat(stagedActionIds.slice(excess + 1));
      committedState = computedStates[excess].state;
      computedStates = computedStates.slice(excess);
      currentStateIndex = currentStateIndex > excess ? currentStateIndex - excess : 0;
    }

    function computePausedAction(shouldInit) {
      var _extends2;

      var computedState = void 0;
      if (shouldInit) {
        computedState = computedStates[currentStateIndex];
        monitorState = monitorReducer(monitorState, liftedAction);
      } else {
        computedState = computeNextEntry(reducer, liftedAction.action, computedStates[currentStateIndex].state, false);
      }
      if (!options.pauseActionType || nextActionId === 1) {
        return {
          monitorState: monitorState,
          actionsById: { 0: liftAction(INIT_ACTION) },
          nextActionId: 1,
          stagedActionIds: [0],
          skippedActionIds: [],
          committedState: computedState.state,
          currentStateIndex: 0,
          computedStates: [computedState],
          isLocked: isLocked,
          isPaused: true
        };
      }
      if (shouldInit) {
        if (currentStateIndex === stagedActionIds.length - 1) {
          currentStateIndex++;
        }
        stagedActionIds = [].concat(stagedActionIds, [nextActionId]);
        nextActionId++;
      }
      return {
        monitorState: monitorState,
        actionsById: _extends({}, actionsById, (_extends2 = {}, _extends2[nextActionId - 1] = liftAction({ type: options.pauseActionType }), _extends2)),
        nextActionId: nextActionId,
        stagedActionIds: stagedActionIds,
        skippedActionIds: skippedActionIds,
        committedState: committedState,
        currentStateIndex: currentStateIndex,
        computedStates: [].concat(computedStates.slice(0, stagedActionIds.length - 1), [computedState]),
        isLocked: isLocked,
        isPaused: true
      };
    }

    // By default, agressively recompute every state whatever happens.
    // This has O(n) performance, so we'll override this to a sensible
    // value whenever we feel like we don't have to recompute the states.
    var minInvalidatedStateIndex = 0;

    switch (liftedAction.type) {
      case ActionTypes.PERFORM_ACTION:
        {
          if (isLocked) return liftedState || initialLiftedState;
          if (isPaused) return computePausedAction();

          // Auto-commit as new actions come in.
          if (options.maxAge && stagedActionIds.length === options.maxAge) {
            commitExcessActions(1);
          }

          if (currentStateIndex === stagedActionIds.length - 1) {
            currentStateIndex++;
          }
          var actionId = nextActionId++;
          // Mutation! This is the hottest path, and we optimize on purpose.
          // It is safe because we set a new key in a cache dictionary.
          actionsById[actionId] = liftedAction;
          stagedActionIds = [].concat(stagedActionIds, [actionId]);
          // Optimization: we know that only the new action needs computing.
          minInvalidatedStateIndex = stagedActionIds.length - 1;
          break;
        }
      case ActionTypes.RESET:
        {
          // Get back to the state the store was created with.
          actionsById = { 0: liftAction(INIT_ACTION) };
          nextActionId = 1;
          stagedActionIds = [0];
          skippedActionIds = [];
          committedState = initialCommittedState;
          currentStateIndex = 0;
          computedStates = [];
          break;
        }
      case ActionTypes.COMMIT:
        {
          // Consider the last committed state the new starting point.
          // Squash any staged actions into a single committed state.
          actionsById = { 0: liftAction(INIT_ACTION) };
          nextActionId = 1;
          stagedActionIds = [0];
          skippedActionIds = [];
          committedState = computedStates[currentStateIndex].state;
          currentStateIndex = 0;
          computedStates = [];
          break;
        }
      case ActionTypes.ROLLBACK:
        {
          // Forget about any staged actions.
          // Start again from the last committed state.
          actionsById = { 0: liftAction(INIT_ACTION) };
          nextActionId = 1;
          stagedActionIds = [0];
          skippedActionIds = [];
          currentStateIndex = 0;
          computedStates = [];
          break;
        }
      case ActionTypes.TOGGLE_ACTION:
        {
          var _ret = function () {
            // Toggle whether an action with given ID is skipped.
            // Being skipped means it is a no-op during the computation.
            var actionId = liftedAction.id;

            var index = skippedActionIds.indexOf(actionId);
            if (index === -1) {
              skippedActionIds = [actionId].concat(skippedActionIds);
            } else {
              skippedActionIds = skippedActionIds.filter(function (id) {
                return id !== actionId;
              });
            }
            // Optimization: we know history before this action hasn't changed
            minInvalidatedStateIndex = stagedActionIds.indexOf(actionId);
            return 'break';
          }();

          if (_ret === 'break') break;
        }
      case ActionTypes.SET_ACTIONS_ACTIVE:
        {
          // Toggle whether an action with given ID is skipped.
          // Being skipped means it is a no-op during the computation.
          var start = liftedAction.start;
          var end = liftedAction.end;
          var active = liftedAction.active;

          var actionIds = [];
          for (var i = start; i < end; i++) {
            actionIds.push(i);
          }if (active) {
            skippedActionIds = (0, _difference2.default)(skippedActionIds, actionIds);
          } else {
            skippedActionIds = (0, _union2.default)(skippedActionIds, actionIds);
          }

          // Optimization: we know history before this action hasn't changed
          minInvalidatedStateIndex = stagedActionIds.indexOf(start);
          break;
        }
      case ActionTypes.JUMP_TO_STATE:
        {
          // Without recomputing anything, move the pointer that tell us
          // which state is considered the current one. Useful for sliders.
          currentStateIndex = liftedAction.index;
          // Optimization: we know the history has not changed.
          minInvalidatedStateIndex = Infinity;
          break;
        }
      case ActionTypes.JUMP_TO_ACTION:
        {
          // Jumps to a corresponding state to a specific action.
          // Useful when filtering actions.
          var _index = stagedActionIds.indexOf(liftedAction.actionId);
          if (_index !== -1) currentStateIndex = _index;
          minInvalidatedStateIndex = Infinity;
          break;
        }
      case ActionTypes.SWEEP:
        {
          // Forget any actions that are currently being skipped.
          stagedActionIds = (0, _difference2.default)(stagedActionIds, skippedActionIds);
          skippedActionIds = [];
          currentStateIndex = Math.min(currentStateIndex, stagedActionIds.length - 1);
          break;
        }
      case ActionTypes.REORDER_ACTION:
        {
          // Recompute actions in a new order.
          var _actionId = liftedAction.actionId;
          var idx = stagedActionIds.indexOf(_actionId);
          // do nothing in case the action is already removed or trying to move the first action
          if (idx < 1) break;
          var beforeActionId = liftedAction.beforeActionId;
          var newIdx = stagedActionIds.indexOf(beforeActionId);
          if (newIdx < 1) {
            // move to the beginning or to the end
            var count = stagedActionIds.length;
            newIdx = beforeActionId > stagedActionIds[count - 1] ? count : 1;
          }
          var diff = idx - newIdx;

          if (diff > 0) {
            // move left
            stagedActionIds = [].concat(stagedActionIds.slice(0, newIdx), [_actionId], stagedActionIds.slice(newIdx, idx), stagedActionIds.slice(idx + 1));
            minInvalidatedStateIndex = newIdx;
          } else if (diff < 0) {
            // move right
            stagedActionIds = [].concat(stagedActionIds.slice(0, idx), stagedActionIds.slice(idx + 1, newIdx), [_actionId], stagedActionIds.slice(newIdx));
            minInvalidatedStateIndex = idx;
          }
          break;
        }
      case ActionTypes.IMPORT_STATE:
        {
          if (Array.isArray(liftedAction.nextLiftedState)) {
            // recompute array of actions
            actionsById = { 0: liftAction(INIT_ACTION) };
            nextActionId = 1;
            stagedActionIds = [0];
            skippedActionIds = [];
            currentStateIndex = liftedAction.nextLiftedState.length;
            computedStates = [];
            committedState = liftedAction.preloadedState;
            minInvalidatedStateIndex = 0;
            // iterate through actions
            liftedAction.nextLiftedState.forEach(function (action) {
              actionsById[nextActionId] = liftAction(action);
              stagedActionIds.push(nextActionId);
              nextActionId++;
            });
          } else {
            var _liftedAction$nextLif = liftedAction.nextLiftedState;
            // Completely replace everything.

            monitorState = _liftedAction$nextLif.monitorState;
            actionsById = _liftedAction$nextLif.actionsById;
            nextActionId = _liftedAction$nextLif.nextActionId;
            stagedActionIds = _liftedAction$nextLif.stagedActionIds;
            skippedActionIds = _liftedAction$nextLif.skippedActionIds;
            committedState = _liftedAction$nextLif.committedState;
            currentStateIndex = _liftedAction$nextLif.currentStateIndex;
            computedStates = _liftedAction$nextLif.computedStates;


            if (liftedAction.noRecompute) {
              minInvalidatedStateIndex = Infinity;
            }
          }

          break;
        }
      case ActionTypes.LOCK_CHANGES:
        {
          isLocked = liftedAction.status;
          minInvalidatedStateIndex = Infinity;
          break;
        }
      case ActionTypes.PAUSE_RECORDING:
        {
          isPaused = liftedAction.status;
          if (isPaused) {
            return computePausedAction(true);
          }
          // Commit when unpausing
          actionsById = { 0: liftAction(INIT_ACTION) };
          nextActionId = 1;
          stagedActionIds = [0];
          skippedActionIds = [];
          committedState = computedStates[currentStateIndex].state;
          currentStateIndex = 0;
          computedStates = [];
          break;
        }
      case '@@redux/INIT':
        {
          if (options.shouldHotReload === false) {
            actionsById = { 0: liftAction(INIT_ACTION) };
            nextActionId = 1;
            stagedActionIds = [0];
            skippedActionIds = [];
            committedState = computedStates.length === 0 ? initialCommittedState : computedStates[currentStateIndex].state;
            currentStateIndex = 0;
            computedStates = [];
          }

          // Recompute states on hot reload and init.
          minInvalidatedStateIndex = 0;

          if (options.maxAge && stagedActionIds.length > options.maxAge) {
            // States must be recomputed before committing excess.
            computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, options.shouldCatchErrors);

            commitExcessActions(stagedActionIds.length - options.maxAge);

            // Avoid double computation.
            minInvalidatedStateIndex = Infinity;
          }

          break;
        }
      default:
        {
          // If the action is not recognized, it's a monitor action.
          // Optimization: a monitor action can't change history.
          minInvalidatedStateIndex = Infinity;
          break;
        }
    }

    computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, options.shouldCatchErrors);
    monitorState = monitorReducer(monitorState, liftedAction);
    return {
      monitorState: monitorState,
      actionsById: actionsById,
      nextActionId: nextActionId,
      stagedActionIds: stagedActionIds,
      skippedActionIds: skippedActionIds,
      committedState: committedState,
      currentStateIndex: currentStateIndex,
      computedStates: computedStates,
      isLocked: isLocked,
      isPaused: isPaused
    };
  };
}

/**
 * Provides an app's view into the state of the lifted store.
 */
function unliftState(liftedState) {
  var computedStates = liftedState.computedStates;
  var currentStateIndex = liftedState.currentStateIndex;
  var state = computedStates[currentStateIndex].state;

  return state;
}

/**
 * Provides an app's view into the lifted store.
 */
function unliftStore(liftedStore, liftReducer) {
  var _extends3;

  var lastDefinedState = void 0;

  function getState() {
    var state = unliftState(liftedStore.getState());
    if (state !== undefined) {
      lastDefinedState = state;
    }
    return lastDefinedState;
  }

  return _extends({}, liftedStore, (_extends3 = {

    liftedStore: liftedStore,

    dispatch: function dispatch(action) {
      liftedStore.dispatch(liftAction(action));
      return action;
    },


    getState: getState,

    replaceReducer: function replaceReducer(nextReducer) {
      liftedStore.replaceReducer(liftReducer(nextReducer));
    }
  }, _extends3[_symbolObservable2.default] = function () {
    return _extends({}, liftedStore[_symbolObservable2.default](), {
      subscribe: function subscribe(observer) {
        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = liftedStore.subscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    });
  }, _extends3));
}

/**
 * Redux instrumentation store enhancer.
 */
function instrument() {
  var monitorReducer = arguments.length <= 0 || arguments[0] === undefined ? function () {
    return null;
  } : arguments[0];
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  /* eslint-disable no-eq-null */
  if (options.maxAge != null && options.maxAge < 2) {
    /* eslint-enable */
    throw new Error('DevTools.instrument({ maxAge }) option, if specified, ' + 'may not be less than 2.');
  }

  return function (createStore) {
    return function (reducer, initialState, enhancer) {

      function liftReducer(r) {
        if (typeof r !== 'function') {
          if (r && typeof r.default === 'function') {
            throw new Error('Expected the reducer to be a function. ' + 'Instead got an object with a "default" field. ' + 'Did you pass a module instead of the default export? ' + 'Try passing require(...).default instead.');
          }
          throw new Error('Expected the reducer to be a function.');
        }
        return liftReducerWith(r, initialState, monitorReducer, options);
      }

      var liftedStore = createStore(liftReducer(reducer), enhancer);
      if (liftedStore.liftedStore) {
        throw new Error('DevTools instrumentation should not be applied more than once. ' + 'Check your store configuration.');
      }

      return unliftStore(liftedStore, liftReducer);
    };
  };
}

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(321),
    isObject = __webpack_require__(337);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(137)))

/***/ }),
/* 375 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 376 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(473);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 378 */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),
/* 379 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 380 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(382),
    isFlattenable = __webpack_require__(477);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),
/* 382 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(330),
    overRest = __webpack_require__(479),
    setToString = __webpack_require__(481);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(318);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(386),
    isObjectLike = __webpack_require__(319);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(373),
    isLength = __webpack_require__(341);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(318),
    root = __webpack_require__(315);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 388 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(491);


/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(315),
    stubFalse = __webpack_require__(501);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(343)(module)))

/***/ }),
/* 391 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(502),
    baseUnary = __webpack_require__(380),
    nodeUtil = __webpack_require__(503);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(327),
    stackClear = __webpack_require__(510),
    stackDelete = __webpack_require__(511),
    stackGet = __webpack_require__(512),
    stackHas = __webpack_require__(513),
    stackSet = __webpack_require__(514);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(515),
    isObjectLike = __webpack_require__(319);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(335),
    arraySome = __webpack_require__(516),
    cacheHas = __webpack_require__(339);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(337);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 397 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(399),
    toKey = __webpack_require__(331);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(316),
    isKey = __webpack_require__(345),
    stringToPath = __webpack_require__(533),
    toString = __webpack_require__(536);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 400 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return subscriptionShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return storeShape; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);


var subscriptionShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  trySubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  tryUnsubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  notifyNestedSubs: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  isSubscribed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

var storeShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  subscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  dispatch: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  getState: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

/***/ }),
/* 401 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = connectAdvanced;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__ = __webpack_require__(400);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var hotReloadingVersion = 0;
var dummyState = {};
function noop() {}
function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);
        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };

  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory) {
  var _contextTypes, _childContextTypes;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
    return 'ConnectAdvanced(' + name + ')';
  } : _ref$getDisplayName,
      _ref$methodName = _ref.methodName,
      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
      _ref$renderCountProp = _ref.renderCountProp,
      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
      _ref$storeKey = _ref.storeKey,
      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
      _ref$withRef = _ref.withRef,
      withRef = _ref$withRef === undefined ? false : _ref$withRef,
      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;

  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["a" /* storeShape */], _contextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _childContextTypes);

  return function wrapWithConnect(WrappedComponent) {
    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + ('connect. Instead received ' + JSON.stringify(WrappedComponent)));

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var Connect = function (_Component) {
      _inherits(Connect, _Component);

      function Connect(props, context) {
        _classCallCheck(this, Connect);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

        _this.initSelector();
        _this.initSubscription();
        return _this;
      }

      Connect.prototype.getChildContext = function getChildContext() {
        var _ref2;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return;

        // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.
        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
        return this.wrappedInstance;
      };

      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      Connect.prototype.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      Connect.prototype.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return;

        // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__["a" /* default */](this.store, parentSub, this.onStateChange.bind(this));

        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.
        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      Connect.prototype.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      Connect.prototype.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
        // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad
        var withExtras = _extends({}, props);
        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      Connect.prototype.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return Object(__WEBPACK_IMPORTED_MODULE_2_react__["createElement"])(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (false) {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        var _this2 = this;

        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector();

          // If any connected descendants don't hot reload (and resubscribe in the process), their
          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
          // listeners, this does mean that the old versions of connected descendants will still be
          // notified of state changes; however, their onStateChange function is a no-op so this
          // isn't a huge deal.
          var oldListeners = [];

          if (this.subscription) {
            oldListeners = this.subscription.listeners.get();
            this.subscription.tryUnsubscribe();
          }
          this.initSubscription();
          if (shouldHandleStateChanges) {
            this.subscription.trySubscribe();
            oldListeners.forEach(function (listener) {
              return _this2.subscription.listeners.subscribe(listener);
            });
          }
        }
      };
    }

    return __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default()(Connect, WrappedComponent);
  };
}

/***/ }),
/* 402 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* harmony export (immutable) */ __webpack_exports__["b"] = createStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_symbol_observable__);



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = observable, _ref2;
}

/***/ }),
/* 403 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(551);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 404 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 405 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/***/ }),
/* 406 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = wrapMapToPropsConstant;
/* unused harmony export getDependsOnOwnProps */
/* harmony export (immutable) */ __webpack_exports__["b"] = wrapMapToPropsFunc;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(407);


function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}

// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}

// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };

    // allow detectFactoryAndVerify to get ownProps
    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (false) verifyPlainObject(props, displayName, methodName);

      return props;
    };

    return proxy;
  };
}

/***/ }),
/* 407 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__warning__ = __webpack_require__(347);



function verifyPlainObject(value, displayName, methodName) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(value)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__warning__["a" /* default */])(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
  }
}

/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

var _threezerotwofour = __webpack_require__(569);

exports.threezerotwofour = _interopRequire(_threezerotwofour);

var _apathy = __webpack_require__(570);

exports.apathy = _interopRequire(_apathy);

var _ashes = __webpack_require__(571);

exports.ashes = _interopRequire(_ashes);

var _atelierDune = __webpack_require__(572);

exports.atelierDune = _interopRequire(_atelierDune);

var _atelierForest = __webpack_require__(573);

exports.atelierForest = _interopRequire(_atelierForest);

var _atelierHeath = __webpack_require__(574);

exports.atelierHeath = _interopRequire(_atelierHeath);

var _atelierLakeside = __webpack_require__(575);

exports.atelierLakeside = _interopRequire(_atelierLakeside);

var _atelierSeaside = __webpack_require__(576);

exports.atelierSeaside = _interopRequire(_atelierSeaside);

var _bespin = __webpack_require__(577);

exports.bespin = _interopRequire(_bespin);

var _brewer = __webpack_require__(578);

exports.brewer = _interopRequire(_brewer);

var _bright = __webpack_require__(579);

exports.bright = _interopRequire(_bright);

var _chalk = __webpack_require__(580);

exports.chalk = _interopRequire(_chalk);

var _codeschool = __webpack_require__(581);

exports.codeschool = _interopRequire(_codeschool);

var _colors = __webpack_require__(582);

exports.colors = _interopRequire(_colors);

var _default = __webpack_require__(583);

exports['default'] = _interopRequire(_default);

var _eighties = __webpack_require__(584);

exports.eighties = _interopRequire(_eighties);

var _embers = __webpack_require__(585);

exports.embers = _interopRequire(_embers);

var _flat = __webpack_require__(586);

exports.flat = _interopRequire(_flat);

var _google = __webpack_require__(587);

exports.google = _interopRequire(_google);

var _grayscale = __webpack_require__(588);

exports.grayscale = _interopRequire(_grayscale);

var _greenscreen = __webpack_require__(589);

exports.greenscreen = _interopRequire(_greenscreen);

var _harmonic = __webpack_require__(590);

exports.harmonic = _interopRequire(_harmonic);

var _hopscotch = __webpack_require__(591);

exports.hopscotch = _interopRequire(_hopscotch);

var _isotope = __webpack_require__(592);

exports.isotope = _interopRequire(_isotope);

var _marrakesh = __webpack_require__(593);

exports.marrakesh = _interopRequire(_marrakesh);

var _mocha = __webpack_require__(594);

exports.mocha = _interopRequire(_mocha);

var _monokai = __webpack_require__(595);

exports.monokai = _interopRequire(_monokai);

var _ocean = __webpack_require__(596);

exports.ocean = _interopRequire(_ocean);

var _paraiso = __webpack_require__(597);

exports.paraiso = _interopRequire(_paraiso);

var _pop = __webpack_require__(598);

exports.pop = _interopRequire(_pop);

var _railscasts = __webpack_require__(599);

exports.railscasts = _interopRequire(_railscasts);

var _shapeshifter = __webpack_require__(600);

exports.shapeshifter = _interopRequire(_shapeshifter);

var _solarized = __webpack_require__(601);

exports.solarized = _interopRequire(_solarized);

var _summerfruit = __webpack_require__(602);

exports.summerfruit = _interopRequire(_summerfruit);

var _tomorrow = __webpack_require__(603);

exports.tomorrow = _interopRequire(_tomorrow);

var _tube = __webpack_require__(604);

exports.tube = _interopRequire(_tube);

var _twilight = __webpack_require__(605);

exports.twilight = _interopRequire(_twilight);

/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.updateScrollTop = updateScrollTop;
exports.startConsecutiveToggle = startConsecutiveToggle;
var UPDATE_SCROLL_TOP = exports.UPDATE_SCROLL_TOP = '@@redux-devtools-log-monitor/UPDATE_SCROLL_TOP';
function updateScrollTop(scrollTop) {
  return { type: UPDATE_SCROLL_TOP, scrollTop: scrollTop };
}

var START_CONSECUTIVE_TOGGLE = exports.START_CONSECUTIVE_TOGGLE = '@@redux-devtools-log-monitor/START_CONSECUTIVE_TOGGLE';
function startConsecutiveToggle(id) {
  return { type: START_CONSECUTIVE_TOGGLE, id: id };
}

/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _objectWithoutProperties2 = __webpack_require__(5);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _keys = __webpack_require__(332);

var _keys2 = _interopRequireDefault(_keys);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _JSONNode = __webpack_require__(412);

var _JSONNode2 = _interopRequireDefault(_JSONNode);

var _createStylingFromTheme = __webpack_require__(630);

var _createStylingFromTheme2 = _interopRequireDefault(_createStylingFromTheme);

var _reactBase16Styling = __webpack_require__(415);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var identity = function identity(value) {
  return value;
}; // ES6 + inline style port of JSONViewer https://bitbucket.org/davevedder/react-json-viewer/
// all credits and original code to the author
// Dave Vedder <veddermatic@gmail.com> http://www.eskimospy.com/
// port by Daniele Zannotti http://www.github.com/dzannotti <dzannotti@me.com>

var expandRootNode = function expandRootNode(keyName, data, level) {
  return level === 0;
};
var defaultItemString = function defaultItemString(type, data, itemType, itemString) {
  return _react2['default'].createElement(
    'span',
    null,
    itemType,
    ' ',
    itemString
  );
};
var defaultLabelRenderer = function defaultLabelRenderer(_ref) {
  var label = _ref[0];
  return _react2['default'].createElement(
    'span',
    null,
    label,
    ':'
  );
};
var noCustomNode = function noCustomNode() {
  return false;
};

function checkLegacyTheming(theme, props) {
  var deprecatedStylingMethodsMap = {
    getArrowStyle: 'arrow',
    getListStyle: 'nestedNodeChildren',
    getItemStringStyle: 'nestedNodeItemString',
    getLabelStyle: 'label',
    getValueStyle: 'valueText'
  };

  var deprecatedStylingMethods = (0, _keys2['default'])(deprecatedStylingMethodsMap).filter(function (name) {
    return props[name];
  });

  if (deprecatedStylingMethods.length > 0) {
    if (typeof theme === 'string') {
      theme = {
        extend: theme
      };
    } else {
      theme = (0, _extends3['default'])({}, theme);
    }

    deprecatedStylingMethods.forEach(function (name) {
      // eslint-disable-next-line no-console
      console.error('Styling method "' + name + '" is deprecated, use "theme" property instead');

      theme[deprecatedStylingMethodsMap[name]] = function (_ref2) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var style = _ref2.style;
        return {
          style: (0, _extends3['default'])({}, style, props[name].apply(props, args))
        };
      };
    });
  }

  return theme;
}

function getStateFromProps(props) {
  var theme = checkLegacyTheming(props.theme, props);
  if (props.invertTheme) {
    if (typeof theme === 'string') {
      theme = theme + ':inverted';
    } else if (theme && theme.extend) {
      if (typeof theme === 'string') {
        theme = (0, _extends3['default'])({}, theme, { extend: theme.extend + ':inverted' });
      } else {
        theme = (0, _extends3['default'])({}, theme, { extend: (0, _reactBase16Styling.invertTheme)(theme.extend) });
      }
    } else if (theme) {
      theme = (0, _reactBase16Styling.invertTheme)(theme);
    }
  }
  return {
    styling: (0, _createStylingFromTheme2['default'])(theme)
  };
}

var JSONTree = function (_React$Component) {
  (0, _inherits3['default'])(JSONTree, _React$Component);

  function JSONTree(props) {
    (0, _classCallCheck3['default'])(this, JSONTree);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props));

    _this.state = getStateFromProps(props);
    return _this;
  }

  JSONTree.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    if (['theme', 'invertTheme'].find(function (k) {
      return nextProps[k] !== _this2.props[k];
    })) {
      this.setState(getStateFromProps(nextProps));
    }
  };

  JSONTree.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    var _this3 = this;

    return !!(0, _keys2['default'])(nextProps).find(function (k) {
      return k === 'keyPath' ? nextProps[k].join('/') !== _this3.props[k].join('/') : nextProps[k] !== _this3.props[k];
    });
  };

  JSONTree.prototype.render = function render() {
    var _props = this.props,
        value = _props.data,
        keyPath = _props.keyPath,
        postprocessValue = _props.postprocessValue,
        hideRoot = _props.hideRoot,
        theme = _props.theme,
        _ = _props.invertTheme,
        rest = (0, _objectWithoutProperties3['default'])(_props, ['data', 'keyPath', 'postprocessValue', 'hideRoot', 'theme', 'invertTheme']);
    var styling = this.state.styling;


    return _react2['default'].createElement(
      'ul',
      styling('tree'),
      _react2['default'].createElement(_JSONNode2['default'], (0, _extends3['default'])({}, (0, _extends3['default'])({ postprocessValue: postprocessValue, hideRoot: hideRoot, styling: styling }, rest), {
        keyPath: hideRoot ? [] : keyPath,
        value: postprocessValue(value)
      }))
    );
  };

  return JSONTree;
}(_react2['default'].Component);

JSONTree.propTypes = {
  data: _propTypes2['default'].oneOfType([_propTypes2['default'].array, _propTypes2['default'].object]).isRequired,
  hideRoot: _propTypes2['default'].bool,
  theme: _propTypes2['default'].oneOfType([_propTypes2['default'].object, _propTypes2['default'].string]),
  invertTheme: _propTypes2['default'].bool,
  keyPath: _propTypes2['default'].arrayOf(_propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number])),
  postprocessValue: _propTypes2['default'].func,
  sortObjectKeys: _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].bool])
};
JSONTree.defaultProps = {
  shouldExpandNode: expandRootNode,
  hideRoot: false,
  keyPath: ['root'],
  getItemString: defaultItemString,
  labelRenderer: defaultLabelRenderer,
  valueRenderer: identity,
  postprocessValue: identity,
  isCustomNode: noCustomNode,
  collectionLimit: 50,
  invertTheme: true
};
exports['default'] = JSONTree;

/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(18);
var core = __webpack_require__(16);
var fails = __webpack_require__(33);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(5);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _objType = __webpack_require__(615);

var _objType2 = _interopRequireDefault(_objType);

var _JSONObjectNode = __webpack_require__(616);

var _JSONObjectNode2 = _interopRequireDefault(_JSONObjectNode);

var _JSONArrayNode = __webpack_require__(623);

var _JSONArrayNode2 = _interopRequireDefault(_JSONArrayNode);

var _JSONIterableNode = __webpack_require__(624);

var _JSONIterableNode2 = _interopRequireDefault(_JSONIterableNode);

var _JSONValueNode = __webpack_require__(629);

var _JSONValueNode2 = _interopRequireDefault(_JSONValueNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var JSONNode = function JSONNode(_ref) {
  var getItemString = _ref.getItemString,
      keyPath = _ref.keyPath,
      labelRenderer = _ref.labelRenderer,
      styling = _ref.styling,
      value = _ref.value,
      valueRenderer = _ref.valueRenderer,
      isCustomNode = _ref.isCustomNode,
      rest = (0, _objectWithoutProperties3['default'])(_ref, ['getItemString', 'keyPath', 'labelRenderer', 'styling', 'value', 'valueRenderer', 'isCustomNode']);

  var nodeType = isCustomNode(value) ? 'Custom' : (0, _objType2['default'])(value);

  var simpleNodeProps = {
    getItemString: getItemString,
    key: keyPath[0],
    keyPath: keyPath,
    labelRenderer: labelRenderer,
    nodeType: nodeType,
    styling: styling,
    value: value,
    valueRenderer: valueRenderer
  };

  var nestedNodeProps = (0, _extends3['default'])({}, rest, simpleNodeProps, {
    data: value,
    isCustomNode: isCustomNode
  });

  switch (nodeType) {
    case 'Object':
    case 'Error':
    case 'WeakMap':
    case 'WeakSet':
      return _react2['default'].createElement(_JSONObjectNode2['default'], nestedNodeProps);
    case 'Array':
      return _react2['default'].createElement(_JSONArrayNode2['default'], nestedNodeProps);
    case 'Iterable':
    case 'Map':
    case 'Set':
      return _react2['default'].createElement(_JSONIterableNode2['default'], nestedNodeProps);
    case 'String':
      return _react2['default'].createElement(_JSONValueNode2['default'], (0, _extends3['default'])({}, simpleNodeProps, { valueGetter: function valueGetter(raw) {
          return '"' + raw + '"';
        } }));
    case 'Number':
      return _react2['default'].createElement(_JSONValueNode2['default'], simpleNodeProps);
    case 'Boolean':
      return _react2['default'].createElement(_JSONValueNode2['default'], (0, _extends3['default'])({}, simpleNodeProps, {
        valueGetter: function valueGetter(raw) {
          return raw ? 'true' : 'false';
        }
      }));
    case 'Date':
      return _react2['default'].createElement(_JSONValueNode2['default'], (0, _extends3['default'])({}, simpleNodeProps, {
        valueGetter: function valueGetter(raw) {
          return raw.toISOString();
        }
      }));
    case 'Null':
      return _react2['default'].createElement(_JSONValueNode2['default'], (0, _extends3['default'])({}, simpleNodeProps, { valueGetter: function valueGetter() {
          return 'null';
        } }));
    case 'Undefined':
      return _react2['default'].createElement(_JSONValueNode2['default'], (0, _extends3['default'])({}, simpleNodeProps, { valueGetter: function valueGetter() {
          return 'undefined';
        } }));
    case 'Function':
    case 'Symbol':
      return _react2['default'].createElement(_JSONValueNode2['default'], (0, _extends3['default'])({}, simpleNodeProps, {
        valueGetter: function valueGetter(raw) {
          return raw.toString();
        }
      }));
    case 'Custom':
      return _react2['default'].createElement(_JSONValueNode2['default'], simpleNodeProps);
    default:
      return null;
  }
};

JSONNode.propTypes = {
  getItemString: _propTypes2['default'].func.isRequired,
  keyPath: _propTypes2['default'].arrayOf(_propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number])).isRequired,
  labelRenderer: _propTypes2['default'].func.isRequired,
  styling: _propTypes2['default'].func.isRequired,
  value: _propTypes2['default'].any,
  valueRenderer: _propTypes2['default'].func.isRequired,
  isCustomNode: _propTypes2['default'].func.isRequired
};

exports['default'] = JSONNode;

/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(617), __esModule: true };

/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var JSONArrow = function JSONArrow(_ref) {
  var styling = _ref.styling,
      arrowStyle = _ref.arrowStyle,
      expanded = _ref.expanded,
      nodeType = _ref.nodeType,
      onClick = _ref.onClick;
  return _react2['default'].createElement(
    'div',
    (0, _extends3['default'])({}, styling('arrowContainer', arrowStyle), { onClick: onClick }),
    _react2['default'].createElement(
      'div',
      styling(['arrow', 'arrowSign'], nodeType, expanded, arrowStyle),
      '\u25B6',
      arrowStyle === 'double' && _react2['default'].createElement(
        'div',
        styling(['arrowSign', 'arrowSignInner']),
        '\u25B6'
      )
    )
  );
};

JSONArrow.propTypes = {
  styling: _propTypes2['default'].func.isRequired,
  arrowStyle: _propTypes2['default'].oneOf(['single', 'double']),
  expanded: _propTypes2['default'].bool.isRequired,
  nodeType: _propTypes2['default'].string.isRequired,
  onClick: _propTypes2['default'].func.isRequired
};

JSONArrow.defaultProps = {
  arrowStyle: 'single'
};

exports['default'] = JSONArrow;

/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBase16Theme = exports.createStyling = exports.invertTheme = undefined;

var _typeof2 = __webpack_require__(55);

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = __webpack_require__(631);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _keys = __webpack_require__(332);

var _keys2 = _interopRequireDefault(_keys);

var _lodash = __webpack_require__(635);

var _lodash2 = _interopRequireDefault(_lodash);

var _base = __webpack_require__(408);

var base16 = _interopRequireWildcard(_base);

var _rgb2hex = __webpack_require__(636);

var _rgb2hex2 = _interopRequireDefault(_rgb2hex);

var _parse = __webpack_require__(637);

var _parse2 = _interopRequireDefault(_parse);

var _lodash3 = __webpack_require__(642);

var _lodash4 = _interopRequireDefault(_lodash3);

var _colorConverters = __webpack_require__(643);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_BASE16 = base16.default;

var BASE16_KEYS = (0, _keys2.default)(DEFAULT_BASE16);

// we need a correcting factor, so that a dark, but not black background color
// converts to bright enough inversed color
var flip = function flip(x) {
  return x < 0.25 ? 1 : x < 0.5 ? 0.9 - x : 1.1 - x;
};

var invertColor = (0, _lodash4.default)(_parse2.default, _colorConverters.rgb2yuv, function (_ref) {
  var _ref2 = (0, _slicedToArray3.default)(_ref, 3),
      y = _ref2[0],
      u = _ref2[1],
      v = _ref2[2];

  return [flip(y), u, v];
}, _colorConverters.yuv2rgb, _rgb2hex2.default);

var merger = function merger(styling) {
  return function (prevStyling) {
    return {
      className: [prevStyling.className, styling.className].filter(Boolean).join(' '),
      style: (0, _extends3.default)({}, prevStyling.style || {}, styling.style || {})
    };
  };
};

var mergeStyling = function mergeStyling(customStyling, defaultStyling) {
  if (customStyling === undefined) {
    return defaultStyling;
  }
  if (defaultStyling === undefined) {
    return customStyling;
  }

  var customType = typeof customStyling === 'undefined' ? 'undefined' : (0, _typeof3.default)(customStyling);
  var defaultType = typeof defaultStyling === 'undefined' ? 'undefined' : (0, _typeof3.default)(defaultStyling);

  switch (customType) {
    case 'string':
      switch (defaultType) {
        case 'string':
          return [defaultStyling, customStyling].filter(Boolean).join(' ');
        case 'object':
          return merger({ className: customStyling, style: defaultStyling });
        case 'function':
          return function (styling) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }

            return merger({
              className: customStyling
            })(defaultStyling.apply(undefined, [styling].concat(args)));
          };
      }
    case 'object':
      switch (defaultType) {
        case 'string':
          return merger({ className: defaultStyling, style: customStyling });
        case 'object':
          return (0, _extends3.default)({}, defaultStyling, customStyling);
        case 'function':
          return function (styling) {
            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }

            return merger({
              style: customStyling
            })(defaultStyling.apply(undefined, [styling].concat(args)));
          };
      }
    case 'function':
      switch (defaultType) {
        case 'string':
          return function (styling) {
            for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
              args[_key3 - 1] = arguments[_key3];
            }

            return customStyling.apply(undefined, [merger(styling)({
              className: defaultStyling
            })].concat(args));
          };
        case 'object':
          return function (styling) {
            for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
              args[_key4 - 1] = arguments[_key4];
            }

            return customStyling.apply(undefined, [merger(styling)({
              style: defaultStyling
            })].concat(args));
          };
        case 'function':
          return function (styling) {
            for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
              args[_key5 - 1] = arguments[_key5];
            }

            return customStyling.apply(undefined, [defaultStyling.apply(undefined, [styling].concat(args))].concat(args));
          };
      }
  }
};

var mergeStylings = function mergeStylings(customStylings, defaultStylings) {
  var keys = (0, _keys2.default)(defaultStylings);
  for (var key in customStylings) {
    if (keys.indexOf(key) === -1) keys.push(key);
  }

  return keys.reduce(function (mergedStyling, key) {
    return mergedStyling[key] = mergeStyling(customStylings[key], defaultStylings[key]), mergedStyling;
  }, {});
};

var getStylingByKeys = function getStylingByKeys(mergedStyling, keys) {
  for (var _len6 = arguments.length, args = Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
    args[_key6 - 2] = arguments[_key6];
  }

  if (keys === null) {
    return mergedStyling;
  }

  if (!Array.isArray(keys)) {
    keys = [keys];
  }

  var styles = keys.map(function (key) {
    return mergedStyling[key];
  }).filter(Boolean);

  var props = styles.reduce(function (obj, s) {
    if (typeof s === 'string') {
      obj.className = [obj.className, s].filter(Boolean).join(' ');
    } else if ((typeof s === 'undefined' ? 'undefined' : (0, _typeof3.default)(s)) === 'object') {
      obj.style = (0, _extends3.default)({}, obj.style, s);
    } else if (typeof s === 'function') {
      obj = (0, _extends3.default)({}, obj, s.apply(undefined, [obj].concat(args)));
    }

    return obj;
  }, { className: '', style: {} });

  if (!props.className) {
    delete props.className;
  }

  if ((0, _keys2.default)(props.style).length === 0) {
    delete props.style;
  }

  return props;
};

var invertTheme = exports.invertTheme = function invertTheme(theme) {
  return (0, _keys2.default)(theme).reduce(function (t, key) {
    return t[key] = /^base/.test(key) ? invertColor(theme[key]) : key === 'scheme' ? theme[key] + ':inverted' : theme[key], t;
  }, {});
};

var createStyling = exports.createStyling = (0, _lodash2.default)(function (getStylingFromBase16) {
  for (var _len7 = arguments.length, args = Array(_len7 > 3 ? _len7 - 3 : 0), _key7 = 3; _key7 < _len7; _key7++) {
    args[_key7 - 3] = arguments[_key7];
  }

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var themeOrStyling = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _options$defaultBase = options.defaultBase16,
      defaultBase16 = _options$defaultBase === undefined ? DEFAULT_BASE16 : _options$defaultBase,
      _options$base16Themes = options.base16Themes,
      base16Themes = _options$base16Themes === undefined ? null : _options$base16Themes;


  var base16Theme = getBase16Theme(themeOrStyling, base16Themes);
  if (base16Theme) {
    themeOrStyling = (0, _extends3.default)({}, base16Theme, themeOrStyling);
  }

  var theme = BASE16_KEYS.reduce(function (t, key) {
    return t[key] = themeOrStyling[key] || defaultBase16[key], t;
  }, {});

  var customStyling = (0, _keys2.default)(themeOrStyling).reduce(function (s, key) {
    return BASE16_KEYS.indexOf(key) === -1 ? (s[key] = themeOrStyling[key], s) : s;
  }, {});

  var defaultStyling = getStylingFromBase16(theme);

  var mergedStyling = mergeStylings(customStyling, defaultStyling);

  return (0, _lodash2.default)(getStylingByKeys, 2).apply(undefined, [mergedStyling].concat(args));
}, 3);

var getBase16Theme = exports.getBase16Theme = function getBase16Theme(theme, base16Themes) {
  if (theme && theme.extend) {
    theme = theme.extend;
  }

  if (typeof theme === 'string') {
    var _theme$split = theme.split(':'),
        _theme$split2 = (0, _slicedToArray3.default)(_theme$split, 2),
        themeName = _theme$split2[0],
        modifier = _theme$split2[1];

    theme = (base16Themes || {})[themeName] || base16[themeName];
    if (modifier === 'inverted') {
      theme = invertTheme(theme);
    }
  }

  return theme && theme.hasOwnProperty('base00') ? theme : undefined;
};

/***/ }),
/* 416 */
/***/ (function(module, exports) {

var component = /-?\d+(\.\d+)?%?/g;
function extractComponents(color) {
  return color.match(component);
}

module.exports = extractComponents;

/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var POSITIONS = exports.POSITIONS = ['left', 'top', 'right', 'bottom'];

/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.toggleVisibility = toggleVisibility;
exports.changePosition = changePosition;
exports.changeSize = changeSize;
exports.changeMonitor = changeMonitor;
var TOGGLE_VISIBILITY = exports.TOGGLE_VISIBILITY = '@@redux-devtools-log-monitor/TOGGLE_VISIBILITY';
function toggleVisibility() {
  return { type: TOGGLE_VISIBILITY };
}

var CHANGE_POSITION = exports.CHANGE_POSITION = '@@redux-devtools-log-monitor/CHANGE_POSITION';
function changePosition() {
  return { type: CHANGE_POSITION };
}

var CHANGE_SIZE = exports.CHANGE_SIZE = '@@redux-devtools-log-monitor/CHANGE_SIZE';
function changeSize(size) {
  return { type: CHANGE_SIZE, size: size };
}

var CHANGE_MONITOR = exports.CHANGE_MONITOR = '@@redux-devtools-log-monitor/CHANGE_MONITOR';
function changeMonitor() {
  return { type: CHANGE_MONITOR };
}

/***/ }),
/* 419 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Provider__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connect_connect__ = __webpack_require__(547);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createProvider", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return __WEBPACK_IMPORTED_MODULE_2__connect_connect__["a"]; });






/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
};


/***/ }),
/* 421 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__(404);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__createStore__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__combineReducers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__compose__["a"]; });







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (false) {
  warning('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}



/***/ }),
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(447),
    baseFlatten = __webpack_require__(381),
    baseRest = __webpack_require__(383),
    isArrayLikeObject = __webpack_require__(385);

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : [];
});

module.exports = difference;


/***/ }),
/* 447 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(335),
    arrayIncludes = __webpack_require__(377),
    arrayIncludesWith = __webpack_require__(378),
    arrayMap = __webpack_require__(379),
    baseUnary = __webpack_require__(380),
    cacheHas = __webpack_require__(339);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


/***/ }),
/* 448 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(449),
    ListCache = __webpack_require__(327),
    Map = __webpack_require__(338);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 449 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(450),
    hashDelete = __webpack_require__(457),
    hashGet = __webpack_require__(458),
    hashHas = __webpack_require__(459),
    hashSet = __webpack_require__(460);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 450 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(326);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 451 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(373),
    isMasked = __webpack_require__(454),
    isObject = __webpack_require__(337),
    toSource = __webpack_require__(375);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 452 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(323);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 453 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 454 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(455);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 455 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(315);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 456 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 457 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 458 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(326);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 459 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(326);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 460 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(326);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 461 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 462 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(328);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 463 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(328);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 464 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(328);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 465 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(328);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 466 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(329);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 467 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 468 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(329);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 469 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(329);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 470 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(329);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 471 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 472 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 473 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(474),
    baseIsNaN = __webpack_require__(475),
    strictIndexOf = __webpack_require__(476);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),
/* 474 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 475 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),
/* 476 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 477 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(323),
    isArguments = __webpack_require__(340),
    isArray = __webpack_require__(316);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),
/* 478 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(321),
    isObjectLike = __webpack_require__(319);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 479 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(480);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 480 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 481 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(482),
    shortOut = __webpack_require__(484);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 482 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(483),
    defineProperty = __webpack_require__(384),
    identity = __webpack_require__(330);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 483 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 484 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 485 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(381),
    baseRest = __webpack_require__(383),
    baseUniq = __webpack_require__(486),
    isArrayLikeObject = __webpack_require__(385);

/**
 * Creates an array of unique values, in order, from all given arrays using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * _.union([2], [1, 2]);
 * // => [2, 1]
 */
var union = baseRest(function(arrays) {
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
});

module.exports = union;


/***/ }),
/* 486 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(335),
    arrayIncludes = __webpack_require__(377),
    arrayIncludesWith = __webpack_require__(378),
    cacheHas = __webpack_require__(339),
    createSet = __webpack_require__(487),
    setToArray = __webpack_require__(342);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),
/* 487 */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(387),
    noop = __webpack_require__(488),
    setToArray = __webpack_require__(342);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),
/* 488 */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),
/* 489 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(321),
    getPrototype = __webpack_require__(490),
    isObjectLike = __webpack_require__(319);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 490 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(388);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 491 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(492);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(137), __webpack_require__(343)(module)))

/***/ }),
/* 492 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 493 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = persistState;

var _mapValues = __webpack_require__(494);

var _mapValues2 = _interopRequireDefault(_mapValues);

var _identity = __webpack_require__(330);

var _identity2 = _interopRequireDefault(_identity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function persistState(sessionId) {
  var deserializeState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _identity2.default;
  var deserializeAction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _identity2.default;

  if (!sessionId) {
    return function (next) {
      return function () {
        return next.apply(undefined, arguments);
      };
    };
  }

  function deserialize(state) {
    return _extends({}, state, {
      actionsById: (0, _mapValues2.default)(state.actionsById, function (liftedAction) {
        return _extends({}, liftedAction, {
          action: deserializeAction(liftedAction.action)
        });
      }),
      committedState: deserializeState(state.committedState),
      computedStates: state.computedStates.map(function (computedState) {
        return _extends({}, computedState, {
          state: deserializeState(computedState.state)
        });
      })
    });
  }

  return function (next) {
    return function (reducer, initialState, enhancer) {
      var key = 'redux-dev-session-' + sessionId;

      var finalInitialState = void 0;
      try {
        var json = localStorage.getItem(key);
        if (json) {
          finalInitialState = deserialize(JSON.parse(json)) || initialState;
          next(reducer, initialState);
        }
      } catch (e) {
        console.warn('Could not read debug session from localStorage:', e);
        try {
          localStorage.removeItem(key);
        } finally {
          finalInitialState = undefined;
        }
      }

      var store = next(reducer, finalInitialState, enhancer);

      return _extends({}, store, {
        dispatch: function dispatch(action) {
          store.dispatch(action);

          try {
            localStorage.setItem(key, JSON.stringify(store.getState()));
          } catch (e) {
            console.warn('Could not write debug session to localStorage:', e);
          }

          return action;
        }
      });
    };
  };
}

/***/ }),
/* 494 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(495),
    baseForOwn = __webpack_require__(496),
    baseIteratee = __webpack_require__(507);

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

module.exports = mapValues;


/***/ }),
/* 495 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(384);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 496 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(497),
    keys = __webpack_require__(344);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 497 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(498);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 498 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 499 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(500),
    isArguments = __webpack_require__(340),
    isArray = __webpack_require__(316),
    isBuffer = __webpack_require__(390),
    isIndex = __webpack_require__(391),
    isTypedArray = __webpack_require__(392);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 500 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 501 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 502 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(321),
    isLength = __webpack_require__(341),
    isObjectLike = __webpack_require__(319);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 503 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(374);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(343)(module)))

/***/ }),
/* 504 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(505),
    nativeKeys = __webpack_require__(506);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 505 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 506 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(388);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 507 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(508),
    baseMatchesProperty = __webpack_require__(531),
    identity = __webpack_require__(330),
    isArray = __webpack_require__(316),
    property = __webpack_require__(541);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 508 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(509),
    getMatchData = __webpack_require__(530),
    matchesStrictComparable = __webpack_require__(397);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 509 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(393),
    baseIsEqual = __webpack_require__(394);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 510 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(327);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 511 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 512 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 513 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 514 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(327),
    Map = __webpack_require__(338),
    MapCache = __webpack_require__(336);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 515 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(393),
    equalArrays = __webpack_require__(395),
    equalByTag = __webpack_require__(517),
    equalObjects = __webpack_require__(520),
    getTag = __webpack_require__(526),
    isArray = __webpack_require__(316),
    isBuffer = __webpack_require__(390),
    isTypedArray = __webpack_require__(392);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 516 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 517 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(323),
    Uint8Array = __webpack_require__(518),
    eq = __webpack_require__(376),
    equalArrays = __webpack_require__(395),
    mapToArray = __webpack_require__(519),
    setToArray = __webpack_require__(342);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 518 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(315);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 519 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 520 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(521);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 521 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(522),
    getSymbols = __webpack_require__(523),
    keys = __webpack_require__(344);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 522 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(382),
    isArray = __webpack_require__(316);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 523 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(524),
    stubArray = __webpack_require__(525);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 524 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 525 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 526 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(527),
    Map = __webpack_require__(338),
    Promise = __webpack_require__(528),
    Set = __webpack_require__(387),
    WeakMap = __webpack_require__(529),
    baseGetTag = __webpack_require__(321),
    toSource = __webpack_require__(375);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 527 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(318),
    root = __webpack_require__(315);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 528 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(318),
    root = __webpack_require__(315);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 529 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(318),
    root = __webpack_require__(315);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 530 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(396),
    keys = __webpack_require__(344);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 531 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(394),
    get = __webpack_require__(532),
    hasIn = __webpack_require__(538),
    isKey = __webpack_require__(345),
    isStrictComparable = __webpack_require__(396),
    matchesStrictComparable = __webpack_require__(397),
    toKey = __webpack_require__(331);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 532 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(398);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 533 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(534);

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 534 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(535);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 535 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(336);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 536 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(537);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 537 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(323),
    arrayMap = __webpack_require__(379),
    isArray = __webpack_require__(316),
    isSymbol = __webpack_require__(346);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 538 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(539),
    hasPath = __webpack_require__(540);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 539 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 540 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(399),
    isArguments = __webpack_require__(340),
    isArray = __webpack_require__(316),
    isIndex = __webpack_require__(391),
    isLength = __webpack_require__(341),
    toKey = __webpack_require__(331);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 541 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(542),
    basePropertyDeep = __webpack_require__(543),
    isKey = __webpack_require__(345),
    toKey = __webpack_require__(331);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 542 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 543 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(398);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 544 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = createDevTools;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(419);

var _reduxDevtoolsInstrument = __webpack_require__(372);

var _reduxDevtoolsInstrument2 = _interopRequireDefault(_reduxDevtoolsInstrument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function createDevTools(children) {
  var _class, _temp;

  var monitorElement = _react.Children.only(children);
  var monitorProps = monitorElement.props;
  var Monitor = monitorElement.type;
  var ConnectedMonitor = (0, _reactRedux.connect)(function (state) {
    return state;
  })(Monitor);

  return _temp = _class = function (_Component) {
    _inherits(DevTools, _Component);

    function DevTools(props, context) {
      _classCallCheck(this, DevTools);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

      if (!props.store && !context.store) {
        console.error('Redux DevTools could not render. You must pass the Redux store ' + 'to <DevTools> either as a "store" prop or by wrapping it in a ' + '<Provider store={store}>.');
        return _possibleConstructorReturn(_this);
      }

      if (context.store) {
        _this.liftedStore = context.store.liftedStore;
      } else {
        _this.liftedStore = props.store.liftedStore;
      }

      if (!_this.liftedStore) {
        console.error('Redux DevTools could not render. Did you forget to include ' + 'DevTools.instrument() in your store enhancer chain before ' + 'using createStore()?');
      }
      return _this;
    }

    DevTools.prototype.render = function render() {
      if (!this.liftedStore) {
        return null;
      }

      return _react2.default.createElement(ConnectedMonitor, _extends({}, monitorProps, {
        store: this.liftedStore }));
    };

    return DevTools;
  }(_react.Component), _class.contextTypes = {
    store: _propTypes2.default.object
  }, _class.propTypes = {
    store: _propTypes2.default.object
  }, _class.instrument = function (options) {
    return (0, _reduxDevtoolsInstrument2.default)(function (state, action) {
      return Monitor.update(monitorProps, state, action);
    }, options);
  }, _temp;
}

/***/ }),
/* 545 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createProvider;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_warning__ = __webpack_require__(347);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  Object(__WEBPACK_IMPORTED_MODULE_3__utils_warning__["a" /* default */])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider() {
  var _Provider$childContex;

  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  var subKey = arguments[1];

  var subscriptionKey = subKey || storeKey + 'Subscription';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      _classCallCheck(this, Provider);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

      _this[storeKey] = props.store;
      return _this;
    }

    Provider.prototype.render = function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
    };

    return Provider;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  if (false) {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.propTypes = {
    store: __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired, _Provider$childContex[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["b" /* subscriptionShape */], _Provider$childContex);

  return Provider;
}

/* harmony default export */ __webpack_exports__["b"] = (createProvider());

/***/ }),
/* 546 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscription; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];

  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);

      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;

        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription = function () {
  function Subscription(store, parentSub, onStateChange) {
    _classCallCheck(this, Subscription);

    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  Subscription.prototype.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  Subscription.prototype.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

      this.listeners = createListenerCollection();
    }
  };

  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),
/* 547 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createConnect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mergeProps__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectorFactory__ = __webpack_require__(563);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__["a" /* default */] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__["a" /* default */] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__["a" /* default */] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? __WEBPACK_IMPORTED_MODULE_4__mergeProps__["a" /* default */] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? __WEBPACK_IMPORTED_MODULE_5__selectorFactory__["a" /* default */] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areMergedPropsE,
        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (createConnect());

/***/ }),
/* 548 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shallowEqual;
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),
/* 549 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapDispatchToPropsIsFunction */
/* unused harmony export whenMapDispatchToPropsIsMissing */
/* unused harmony export whenMapDispatchToPropsIsObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__ = __webpack_require__(406);



function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["b" /* bindActionCreators */])(mapDispatchToProps, dispatch);
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),
/* 550 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(554);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? Object(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
    : Object(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (baseGetTag);


/***/ }),
/* 551 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(552);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 552 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(137)))

/***/ }),
/* 553 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(403);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (getRawTag);


/***/ }),
/* 554 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = (objectToString);


/***/ }),
/* 555 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(556);


/** Built-in value references. */
var getPrototype = Object(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),
/* 556 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (overArg);


/***/ }),
/* 557 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),
/* 558 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = combineReducers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(404);




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!Object(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__["a" /* default */])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {
      if (typeof reducers[key] === 'undefined') {
        warning('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (false) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

/***/ }),
/* 559 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),
/* 560 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyMiddleware;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(405);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = __WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),
/* 561 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapStateToPropsIsFunction */
/* unused harmony export whenMapStateToPropsIsMissing */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__ = __webpack_require__(406);


function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? Object(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function () {
    return {};
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),
/* 562 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultMergeProps */
/* unused harmony export wrapMergePropsFunc */
/* unused harmony export whenMergePropsIsFunction */
/* unused harmony export whenMergePropsIsOmitted */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(407);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;

    var hasRunOnce = false;
    var mergedProps = void 0;

    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;

        if (false) verifyPlainObject(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}

function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}

function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),
/* 563 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export impureFinalPropsSelectorFactory */
/* unused harmony export pureFinalPropsSelectorFactory */
/* harmony export (immutable) */ __webpack_exports__["a"] = finalPropsSelectorFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__verifySubselectors__ = __webpack_require__(564);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }



function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;

  var hasRunAtLeastOnce = false;
  var state = void 0;
  var ownProps = void 0;
  var stateProps = void 0;
  var dispatchProps = void 0;
  var mergedProps = void 0;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;

    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;

    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}

// TODO: Add more comments

// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (false) {
    verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),
/* 564 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_warning__ = __webpack_require__(347);


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_warning__["a" /* default */])('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),
/* 565 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _LogMonitor = __webpack_require__(566);

var _LogMonitor2 = _interopRequireDefault(_LogMonitor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _LogMonitor2.default;

/***/ }),
/* 566 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _function = __webpack_require__(324);

var _function2 = _interopRequireDefault(_function);

var _reduxDevtoolsThemes = __webpack_require__(568);

var themes = _interopRequireWildcard(_reduxDevtoolsThemes);

var _reduxDevtools = __webpack_require__(334);

var _actions = __webpack_require__(409);

var _reducers = __webpack_require__(607);

var _reducers2 = _interopRequireDefault(_reducers);

var _LogMonitorButtonBar = __webpack_require__(608);

var _LogMonitorButtonBar2 = _interopRequireDefault(_LogMonitorButtonBar);

var _LogMonitorEntryList = __webpack_require__(611);

var _LogMonitorEntryList2 = _interopRequireDefault(_LogMonitorEntryList);

var _lodash = __webpack_require__(646);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var toggleAction = _reduxDevtools.ActionCreators.toggleAction;
var setActionsActive = _reduxDevtools.ActionCreators.setActionsActive;


var styles = {
  container: {
    fontFamily: 'monaco, Consolas, Lucida Console, monospace',
    position: 'relative',
    overflowY: 'hidden',
    width: '100%',
    height: '100%',
    minWidth: 300,
    direction: 'ltr'
  },
  elements: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    overflowX: 'hidden',
    overflowY: 'auto'
  }
};

var LogMonitor = function (_Component) {
  _inherits(LogMonitor, _Component);

  function LogMonitor(props) {
    _classCallCheck(this, LogMonitor);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.shouldComponentUpdate = _function2.default;
    _this.updateScrollTop = (0, _lodash2.default)(function () {
      var node = _this.node;
      _this.props.dispatch((0, _actions.updateScrollTop)(node ? node.scrollTop : 0));
    }, 500);

    _this.handleToggleAction = _this.handleToggleAction.bind(_this);
    _this.handleToggleConsecutiveAction = _this.handleToggleConsecutiveAction.bind(_this);
    _this.getRef = _this.getRef.bind(_this);
    return _this;
  }

  LogMonitor.prototype.scroll = function scroll() {
    var node = this.node;
    if (!node) {
      return;
    }
    if (this.scrollDown) {
      var offsetHeight = node.offsetHeight;
      var scrollHeight = node.scrollHeight;

      node.scrollTop = scrollHeight - offsetHeight;
      this.scrollDown = false;
    }
  };

  LogMonitor.prototype.componentDidMount = function componentDidMount() {
    var node = this.node;
    if (!node || !this.props.monitorState) {
      return;
    }

    if (this.props.preserveScrollTop) {
      node.scrollTop = this.props.monitorState.initialScrollTop;
      node.addEventListener('scroll', this.updateScrollTop);
    } else {
      this.scrollDown = true;
      this.scroll();
    }
  };

  LogMonitor.prototype.componentWillUnmount = function componentWillUnmount() {
    var node = this.node;
    if (node && this.props.preserveScrollTop) {
      node.removeEventListener('scroll', this.updateScrollTop);
    }
  };

  LogMonitor.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var node = this.node;
    if (!node) {
      this.scrollDown = true;
    } else if (this.props.stagedActionIds.length < nextProps.stagedActionIds.length) {
      var scrollTop = node.scrollTop;
      var offsetHeight = node.offsetHeight;
      var scrollHeight = node.scrollHeight;


      this.scrollDown = Math.abs(scrollHeight - (scrollTop + offsetHeight)) < 20;
    } else {
      this.scrollDown = false;
    }
  };

  LogMonitor.prototype.componentDidUpdate = function componentDidUpdate() {
    this.scroll();
  };

  LogMonitor.prototype.handleToggleAction = function handleToggleAction(id) {
    this.props.dispatch(toggleAction(id));
  };

  LogMonitor.prototype.handleToggleConsecutiveAction = function handleToggleConsecutiveAction(id) {
    var _props = this.props;
    var monitorState = _props.monitorState;
    var actionsById = _props.actionsById;
    var consecutiveToggleStartId = monitorState.consecutiveToggleStartId;

    if (consecutiveToggleStartId && actionsById[consecutiveToggleStartId]) {
      var skippedActionIds = this.props.skippedActionIds;

      var start = Math.min(consecutiveToggleStartId, id);
      var end = Math.max(consecutiveToggleStartId, id);
      var active = skippedActionIds.indexOf(consecutiveToggleStartId) > -1;
      this.props.dispatch(setActionsActive(start, end + 1, active));
      this.props.dispatch((0, _actions.startConsecutiveToggle)(null));
    } else if (id > 0) {
      this.props.dispatch((0, _actions.startConsecutiveToggle)(id));
    }
  };

  LogMonitor.prototype.getTheme = function getTheme() {
    var theme = this.props.theme;

    if (typeof theme !== 'string') {
      return theme;
    }

    if (typeof themes[theme] !== 'undefined') {
      return themes[theme];
    }

    console.warn('DevTools theme ' + theme + ' not found, defaulting to nicinabox');
    return themes.nicinabox;
  };

  LogMonitor.prototype.getRef = function getRef(node) {
    this.node = node;
  };

  LogMonitor.prototype.render = function render() {
    var theme = this.getTheme();
    var consecutiveToggleStartId = this.props.monitorState.consecutiveToggleStartId;
    var _props2 = this.props;
    var dispatch = _props2.dispatch;
    var actionsById = _props2.actionsById;
    var skippedActionIds = _props2.skippedActionIds;
    var stagedActionIds = _props2.stagedActionIds;
    var computedStates = _props2.computedStates;
    var currentStateIndex = _props2.currentStateIndex;
    var select = _props2.select;
    var expandActionRoot = _props2.expandActionRoot;
    var expandStateRoot = _props2.expandStateRoot;
    var markStateDiff = _props2.markStateDiff;


    var entryListProps = {
      theme: theme,
      actionsById: actionsById,
      skippedActionIds: skippedActionIds,
      stagedActionIds: stagedActionIds,
      computedStates: computedStates,
      currentStateIndex: currentStateIndex,
      consecutiveToggleStartId: consecutiveToggleStartId,
      select: select,
      expandActionRoot: expandActionRoot,
      expandStateRoot: expandStateRoot,
      markStateDiff: markStateDiff,
      onActionClick: this.handleToggleAction,
      onActionShiftClick: this.handleToggleConsecutiveAction
    };

    return _react2.default.createElement(
      'div',
      { style: _extends({}, styles.container, { backgroundColor: theme.base00 }) },
      !this.props.hideMainButtons && _react2.default.createElement(_LogMonitorButtonBar2.default, {
        theme: theme,
        dispatch: dispatch,
        hasStates: computedStates.length > 1,
        hasSkippedActions: skippedActionIds.length > 0
      }),
      _react2.default.createElement(
        'div',
        {
          style: this.props.hideMainButtons ? styles.elements : _extends({}, styles.elements, { top: 30 }),
          ref: this.getRef
        },
        _react2.default.createElement(_LogMonitorEntryList2.default, entryListProps)
      )
    );
  };

  return LogMonitor;
}(_react.Component);

LogMonitor.update = _reducers2.default;
LogMonitor.propTypes = {
  dispatch: _propTypes2.default.func,
  computedStates: _propTypes2.default.array,
  actionsById: _propTypes2.default.object,
  stagedActionIds: _propTypes2.default.array,
  skippedActionIds: _propTypes2.default.array,
  monitorState: _propTypes2.default.shape({
    initialScrollTop: _propTypes2.default.number,
    consecutiveToggleStartId: _propTypes2.default.number
  }),

  preserveScrollTop: _propTypes2.default.bool,
  select: _propTypes2.default.func,
  theme: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
  expandActionRoot: _propTypes2.default.bool,
  expandStateRoot: _propTypes2.default.bool,
  markStateDiff: _propTypes2.default.bool,
  hideMainButtons: _propTypes2.default.bool
};
LogMonitor.defaultProps = {
  select: function select(state) {
    return state;
  },
  theme: 'nicinabox',
  preserveScrollTop: true,
  expandActionRoot: true,
  expandStateRoot: true,
  markStateDiff: false
};
exports.default = LogMonitor;

/***/ }),
/* 567 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = shallowEqual;

function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (var i = 0; i < keysA.length; i++) {
    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}

module.exports = exports['default'];

/***/ }),
/* 568 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

var _base16 = __webpack_require__(408);

_defaults(exports, _interopExportWildcard(_base16, _defaults));

var _nicinabox = __webpack_require__(606);

exports.nicinabox = _interopRequire(_nicinabox);

/***/ }),
/* 569 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'threezerotwofour',
  author: 'jan t. sott (http://github.com/idleberg)',
  base00: '#090300',
  base01: '#3a3432',
  base02: '#4a4543',
  base03: '#5c5855',
  base04: '#807d7c',
  base05: '#a5a2a2',
  base06: '#d6d5d4',
  base07: '#f7f7f7',
  base08: '#db2d20',
  base09: '#e8bbd0',
  base0A: '#fded02',
  base0B: '#01a252',
  base0C: '#b5e4f4',
  base0D: '#01a0e4',
  base0E: '#a16a94',
  base0F: '#cdab53'
};
module.exports = exports['default'];

/***/ }),
/* 570 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'apathy',
  author: 'jannik siebert (https://github.com/janniks)',
  base00: '#031A16',
  base01: '#0B342D',
  base02: '#184E45',
  base03: '#2B685E',
  base04: '#5F9C92',
  base05: '#81B5AC',
  base06: '#A7CEC8',
  base07: '#D2E7E4',
  base08: '#3E9688',
  base09: '#3E7996',
  base0A: '#3E4C96',
  base0B: '#883E96',
  base0C: '#963E4C',
  base0D: '#96883E',
  base0E: '#4C963E',
  base0F: '#3E965B'
};
module.exports = exports['default'];

/***/ }),
/* 571 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'ashes',
  author: 'jannik siebert (https://github.com/janniks)',
  base00: '#1C2023',
  base01: '#393F45',
  base02: '#565E65',
  base03: '#747C84',
  base04: '#ADB3BA',
  base05: '#C7CCD1',
  base06: '#DFE2E5',
  base07: '#F3F4F5',
  base08: '#C7AE95',
  base09: '#C7C795',
  base0A: '#AEC795',
  base0B: '#95C7AE',
  base0C: '#95AEC7',
  base0D: '#AE95C7',
  base0E: '#C795AE',
  base0F: '#C79595'
};
module.exports = exports['default'];

/***/ }),
/* 572 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'atelier dune',
  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/dune)',
  base00: '#20201d',
  base01: '#292824',
  base02: '#6e6b5e',
  base03: '#7d7a68',
  base04: '#999580',
  base05: '#a6a28c',
  base06: '#e8e4cf',
  base07: '#fefbec',
  base08: '#d73737',
  base09: '#b65611',
  base0A: '#cfb017',
  base0B: '#60ac39',
  base0C: '#1fad83',
  base0D: '#6684e1',
  base0E: '#b854d4',
  base0F: '#d43552'
};
module.exports = exports['default'];

/***/ }),
/* 573 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'atelier forest',
  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/forest)',
  base00: '#1b1918',
  base01: '#2c2421',
  base02: '#68615e',
  base03: '#766e6b',
  base04: '#9c9491',
  base05: '#a8a19f',
  base06: '#e6e2e0',
  base07: '#f1efee',
  base08: '#f22c40',
  base09: '#df5320',
  base0A: '#d5911a',
  base0B: '#5ab738',
  base0C: '#00ad9c',
  base0D: '#407ee7',
  base0E: '#6666ea',
  base0F: '#c33ff3'
};
module.exports = exports['default'];

/***/ }),
/* 574 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'atelier heath',
  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/heath)',
  base00: '#1b181b',
  base01: '#292329',
  base02: '#695d69',
  base03: '#776977',
  base04: '#9e8f9e',
  base05: '#ab9bab',
  base06: '#d8cad8',
  base07: '#f7f3f7',
  base08: '#ca402b',
  base09: '#a65926',
  base0A: '#bb8a35',
  base0B: '#379a37',
  base0C: '#159393',
  base0D: '#516aec',
  base0E: '#7b59c0',
  base0F: '#cc33cc'
};
module.exports = exports['default'];

/***/ }),
/* 575 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'atelier lakeside',
  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/lakeside/)',
  base00: '#161b1d',
  base01: '#1f292e',
  base02: '#516d7b',
  base03: '#5a7b8c',
  base04: '#7195a8',
  base05: '#7ea2b4',
  base06: '#c1e4f6',
  base07: '#ebf8ff',
  base08: '#d22d72',
  base09: '#935c25',
  base0A: '#8a8a0f',
  base0B: '#568c3b',
  base0C: '#2d8f6f',
  base0D: '#257fad',
  base0E: '#5d5db1',
  base0F: '#b72dd2'
};
module.exports = exports['default'];

/***/ }),
/* 576 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'atelier seaside',
  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/seaside/)',
  base00: '#131513',
  base01: '#242924',
  base02: '#5e6e5e',
  base03: '#687d68',
  base04: '#809980',
  base05: '#8ca68c',
  base06: '#cfe8cf',
  base07: '#f0fff0',
  base08: '#e6193c',
  base09: '#87711d',
  base0A: '#c3c322',
  base0B: '#29a329',
  base0C: '#1999b3',
  base0D: '#3d62f5',
  base0E: '#ad2bee',
  base0F: '#e619c3'
};
module.exports = exports['default'];

/***/ }),
/* 577 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'bespin',
  author: 'jan t. sott',
  base00: '#28211c',
  base01: '#36312e',
  base02: '#5e5d5c',
  base03: '#666666',
  base04: '#797977',
  base05: '#8a8986',
  base06: '#9d9b97',
  base07: '#baae9e',
  base08: '#cf6a4c',
  base09: '#cf7d34',
  base0A: '#f9ee98',
  base0B: '#54be0d',
  base0C: '#afc4db',
  base0D: '#5ea6ea',
  base0E: '#9b859d',
  base0F: '#937121'
};
module.exports = exports['default'];

/***/ }),
/* 578 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'brewer',
  author: 'timothée poisot (http://github.com/tpoisot)',
  base00: '#0c0d0e',
  base01: '#2e2f30',
  base02: '#515253',
  base03: '#737475',
  base04: '#959697',
  base05: '#b7b8b9',
  base06: '#dadbdc',
  base07: '#fcfdfe',
  base08: '#e31a1c',
  base09: '#e6550d',
  base0A: '#dca060',
  base0B: '#31a354',
  base0C: '#80b1d3',
  base0D: '#3182bd',
  base0E: '#756bb1',
  base0F: '#b15928'
};
module.exports = exports['default'];

/***/ }),
/* 579 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'bright',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#000000',
  base01: '#303030',
  base02: '#505050',
  base03: '#b0b0b0',
  base04: '#d0d0d0',
  base05: '#e0e0e0',
  base06: '#f5f5f5',
  base07: '#ffffff',
  base08: '#fb0120',
  base09: '#fc6d24',
  base0A: '#fda331',
  base0B: '#a1c659',
  base0C: '#76c7b7',
  base0D: '#6fb3d2',
  base0E: '#d381c3',
  base0F: '#be643c'
};
module.exports = exports['default'];

/***/ }),
/* 580 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'chalk',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#151515',
  base01: '#202020',
  base02: '#303030',
  base03: '#505050',
  base04: '#b0b0b0',
  base05: '#d0d0d0',
  base06: '#e0e0e0',
  base07: '#f5f5f5',
  base08: '#fb9fb1',
  base09: '#eda987',
  base0A: '#ddb26f',
  base0B: '#acc267',
  base0C: '#12cfc0',
  base0D: '#6fc2ef',
  base0E: '#e1a3ee',
  base0F: '#deaf8f'
};
module.exports = exports['default'];

/***/ }),
/* 581 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'codeschool',
  author: 'brettof86',
  base00: '#232c31',
  base01: '#1c3657',
  base02: '#2a343a',
  base03: '#3f4944',
  base04: '#84898c',
  base05: '#9ea7a6',
  base06: '#a7cfa3',
  base07: '#b5d8f6',
  base08: '#2a5491',
  base09: '#43820d',
  base0A: '#a03b1e',
  base0B: '#237986',
  base0C: '#b02f30',
  base0D: '#484d79',
  base0E: '#c59820',
  base0F: '#c98344'
};
module.exports = exports['default'];

/***/ }),
/* 582 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'colors',
  author: 'mrmrs (http://clrs.cc)',
  base00: '#111111',
  base01: '#333333',
  base02: '#555555',
  base03: '#777777',
  base04: '#999999',
  base05: '#bbbbbb',
  base06: '#dddddd',
  base07: '#ffffff',
  base08: '#ff4136',
  base09: '#ff851b',
  base0A: '#ffdc00',
  base0B: '#2ecc40',
  base0C: '#7fdbff',
  base0D: '#0074d9',
  base0E: '#b10dc9',
  base0F: '#85144b'
};
module.exports = exports['default'];

/***/ }),
/* 583 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'default',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#181818',
  base01: '#282828',
  base02: '#383838',
  base03: '#585858',
  base04: '#b8b8b8',
  base05: '#d8d8d8',
  base06: '#e8e8e8',
  base07: '#f8f8f8',
  base08: '#ab4642',
  base09: '#dc9656',
  base0A: '#f7ca88',
  base0B: '#a1b56c',
  base0C: '#86c1b9',
  base0D: '#7cafc2',
  base0E: '#ba8baf',
  base0F: '#a16946'
};
module.exports = exports['default'];

/***/ }),
/* 584 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'eighties',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#2d2d2d',
  base01: '#393939',
  base02: '#515151',
  base03: '#747369',
  base04: '#a09f93',
  base05: '#d3d0c8',
  base06: '#e8e6df',
  base07: '#f2f0ec',
  base08: '#f2777a',
  base09: '#f99157',
  base0A: '#ffcc66',
  base0B: '#99cc99',
  base0C: '#66cccc',
  base0D: '#6699cc',
  base0E: '#cc99cc',
  base0F: '#d27b53'
};
module.exports = exports['default'];

/***/ }),
/* 585 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'embers',
  author: 'jannik siebert (https://github.com/janniks)',
  base00: '#16130F',
  base01: '#2C2620',
  base02: '#433B32',
  base03: '#5A5047',
  base04: '#8A8075',
  base05: '#A39A90',
  base06: '#BEB6AE',
  base07: '#DBD6D1',
  base08: '#826D57',
  base09: '#828257',
  base0A: '#6D8257',
  base0B: '#57826D',
  base0C: '#576D82',
  base0D: '#6D5782',
  base0E: '#82576D',
  base0F: '#825757'
};
module.exports = exports['default'];

/***/ }),
/* 586 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'flat',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#2C3E50',
  base01: '#34495E',
  base02: '#7F8C8D',
  base03: '#95A5A6',
  base04: '#BDC3C7',
  base05: '#e0e0e0',
  base06: '#f5f5f5',
  base07: '#ECF0F1',
  base08: '#E74C3C',
  base09: '#E67E22',
  base0A: '#F1C40F',
  base0B: '#2ECC71',
  base0C: '#1ABC9C',
  base0D: '#3498DB',
  base0E: '#9B59B6',
  base0F: '#be643c'
};
module.exports = exports['default'];

/***/ }),
/* 587 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'google',
  author: 'seth wright (http://sethawright.com)',
  base00: '#1d1f21',
  base01: '#282a2e',
  base02: '#373b41',
  base03: '#969896',
  base04: '#b4b7b4',
  base05: '#c5c8c6',
  base06: '#e0e0e0',
  base07: '#ffffff',
  base08: '#CC342B',
  base09: '#F96A38',
  base0A: '#FBA922',
  base0B: '#198844',
  base0C: '#3971ED',
  base0D: '#3971ED',
  base0E: '#A36AC7',
  base0F: '#3971ED'
};
module.exports = exports['default'];

/***/ }),
/* 588 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'grayscale',
  author: 'alexandre gavioli (https://github.com/alexx2/)',
  base00: '#101010',
  base01: '#252525',
  base02: '#464646',
  base03: '#525252',
  base04: '#ababab',
  base05: '#b9b9b9',
  base06: '#e3e3e3',
  base07: '#f7f7f7',
  base08: '#7c7c7c',
  base09: '#999999',
  base0A: '#a0a0a0',
  base0B: '#8e8e8e',
  base0C: '#868686',
  base0D: '#686868',
  base0E: '#747474',
  base0F: '#5e5e5e'
};
module.exports = exports['default'];

/***/ }),
/* 589 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'green screen',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#001100',
  base01: '#003300',
  base02: '#005500',
  base03: '#007700',
  base04: '#009900',
  base05: '#00bb00',
  base06: '#00dd00',
  base07: '#00ff00',
  base08: '#007700',
  base09: '#009900',
  base0A: '#007700',
  base0B: '#00bb00',
  base0C: '#005500',
  base0D: '#009900',
  base0E: '#00bb00',
  base0F: '#005500'
};
module.exports = exports['default'];

/***/ }),
/* 590 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'harmonic16',
  author: 'jannik siebert (https://github.com/janniks)',
  base00: '#0b1c2c',
  base01: '#223b54',
  base02: '#405c79',
  base03: '#627e99',
  base04: '#aabcce',
  base05: '#cbd6e2',
  base06: '#e5ebf1',
  base07: '#f7f9fb',
  base08: '#bf8b56',
  base09: '#bfbf56',
  base0A: '#8bbf56',
  base0B: '#56bf8b',
  base0C: '#568bbf',
  base0D: '#8b56bf',
  base0E: '#bf568b',
  base0F: '#bf5656'
};
module.exports = exports['default'];

/***/ }),
/* 591 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'hopscotch',
  author: 'jan t. sott',
  base00: '#322931',
  base01: '#433b42',
  base02: '#5c545b',
  base03: '#797379',
  base04: '#989498',
  base05: '#b9b5b8',
  base06: '#d5d3d5',
  base07: '#ffffff',
  base08: '#dd464c',
  base09: '#fd8b19',
  base0A: '#fdcc59',
  base0B: '#8fc13e',
  base0C: '#149b93',
  base0D: '#1290bf',
  base0E: '#c85e7c',
  base0F: '#b33508'
};
module.exports = exports['default'];

/***/ }),
/* 592 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'isotope',
  author: 'jan t. sott',
  base00: '#000000',
  base01: '#404040',
  base02: '#606060',
  base03: '#808080',
  base04: '#c0c0c0',
  base05: '#d0d0d0',
  base06: '#e0e0e0',
  base07: '#ffffff',
  base08: '#ff0000',
  base09: '#ff9900',
  base0A: '#ff0099',
  base0B: '#33ff00',
  base0C: '#00ffff',
  base0D: '#0066ff',
  base0E: '#cc00ff',
  base0F: '#3300ff'
};
module.exports = exports['default'];

/***/ }),
/* 593 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'marrakesh',
  author: 'alexandre gavioli (http://github.com/alexx2/)',
  base00: '#201602',
  base01: '#302e00',
  base02: '#5f5b17',
  base03: '#6c6823',
  base04: '#86813b',
  base05: '#948e48',
  base06: '#ccc37a',
  base07: '#faf0a5',
  base08: '#c35359',
  base09: '#b36144',
  base0A: '#a88339',
  base0B: '#18974e',
  base0C: '#75a738',
  base0D: '#477ca1',
  base0E: '#8868b3',
  base0F: '#b3588e'
};
module.exports = exports['default'];

/***/ }),
/* 594 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'mocha',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#3B3228',
  base01: '#534636',
  base02: '#645240',
  base03: '#7e705a',
  base04: '#b8afad',
  base05: '#d0c8c6',
  base06: '#e9e1dd',
  base07: '#f5eeeb',
  base08: '#cb6077',
  base09: '#d28b71',
  base0A: '#f4bc87',
  base0B: '#beb55b',
  base0C: '#7bbda4',
  base0D: '#8ab3b5',
  base0E: '#a89bb9',
  base0F: '#bb9584'
};
module.exports = exports['default'];

/***/ }),
/* 595 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'monokai',
  author: 'wimer hazenberg (http://www.monokai.nl)',
  base00: '#272822',
  base01: '#383830',
  base02: '#49483e',
  base03: '#75715e',
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: '#f9f8f5',
  base08: '#f92672',
  base09: '#fd971f',
  base0A: '#f4bf75',
  base0B: '#a6e22e',
  base0C: '#a1efe4',
  base0D: '#66d9ef',
  base0E: '#ae81ff',
  base0F: '#cc6633'
};
module.exports = exports['default'];

/***/ }),
/* 596 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'ocean',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#2b303b',
  base01: '#343d46',
  base02: '#4f5b66',
  base03: '#65737e',
  base04: '#a7adba',
  base05: '#c0c5ce',
  base06: '#dfe1e8',
  base07: '#eff1f5',
  base08: '#bf616a',
  base09: '#d08770',
  base0A: '#ebcb8b',
  base0B: '#a3be8c',
  base0C: '#96b5b4',
  base0D: '#8fa1b3',
  base0E: '#b48ead',
  base0F: '#ab7967'
};
module.exports = exports['default'];

/***/ }),
/* 597 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'paraiso',
  author: 'jan t. sott',
  base00: '#2f1e2e',
  base01: '#41323f',
  base02: '#4f424c',
  base03: '#776e71',
  base04: '#8d8687',
  base05: '#a39e9b',
  base06: '#b9b6b0',
  base07: '#e7e9db',
  base08: '#ef6155',
  base09: '#f99b15',
  base0A: '#fec418',
  base0B: '#48b685',
  base0C: '#5bc4bf',
  base0D: '#06b6ef',
  base0E: '#815ba4',
  base0F: '#e96ba8'
};
module.exports = exports['default'];

/***/ }),
/* 598 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'pop',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#000000',
  base01: '#202020',
  base02: '#303030',
  base03: '#505050',
  base04: '#b0b0b0',
  base05: '#d0d0d0',
  base06: '#e0e0e0',
  base07: '#ffffff',
  base08: '#eb008a',
  base09: '#f29333',
  base0A: '#f8ca12',
  base0B: '#37b349',
  base0C: '#00aabb',
  base0D: '#0e5a94',
  base0E: '#b31e8d',
  base0F: '#7a2d00'
};
module.exports = exports['default'];

/***/ }),
/* 599 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'railscasts',
  author: 'ryan bates (http://railscasts.com)',
  base00: '#2b2b2b',
  base01: '#272935',
  base02: '#3a4055',
  base03: '#5a647e',
  base04: '#d4cfc9',
  base05: '#e6e1dc',
  base06: '#f4f1ed',
  base07: '#f9f7f3',
  base08: '#da4939',
  base09: '#cc7833',
  base0A: '#ffc66d',
  base0B: '#a5c261',
  base0C: '#519f50',
  base0D: '#6d9cbe',
  base0E: '#b6b3eb',
  base0F: '#bc9458'
};
module.exports = exports['default'];

/***/ }),
/* 600 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'shapeshifter',
  author: 'tyler benziger (http://tybenz.com)',
  base00: '#000000',
  base01: '#040404',
  base02: '#102015',
  base03: '#343434',
  base04: '#555555',
  base05: '#ababab',
  base06: '#e0e0e0',
  base07: '#f9f9f9',
  base08: '#e92f2f',
  base09: '#e09448',
  base0A: '#dddd13',
  base0B: '#0ed839',
  base0C: '#23edda',
  base0D: '#3b48e3',
  base0E: '#f996e2',
  base0F: '#69542d'
};
module.exports = exports['default'];

/***/ }),
/* 601 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'solarized',
  author: 'ethan schoonover (http://ethanschoonover.com/solarized)',
  base00: '#002b36',
  base01: '#073642',
  base02: '#586e75',
  base03: '#657b83',
  base04: '#839496',
  base05: '#93a1a1',
  base06: '#eee8d5',
  base07: '#fdf6e3',
  base08: '#dc322f',
  base09: '#cb4b16',
  base0A: '#b58900',
  base0B: '#859900',
  base0C: '#2aa198',
  base0D: '#268bd2',
  base0E: '#6c71c4',
  base0F: '#d33682'
};
module.exports = exports['default'];

/***/ }),
/* 602 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'summerfruit',
  author: 'christopher corley (http://cscorley.github.io/)',
  base00: '#151515',
  base01: '#202020',
  base02: '#303030',
  base03: '#505050',
  base04: '#B0B0B0',
  base05: '#D0D0D0',
  base06: '#E0E0E0',
  base07: '#FFFFFF',
  base08: '#FF0086',
  base09: '#FD8900',
  base0A: '#ABA800',
  base0B: '#00C918',
  base0C: '#1faaaa',
  base0D: '#3777E6',
  base0E: '#AD00A1',
  base0F: '#cc6633'
};
module.exports = exports['default'];

/***/ }),
/* 603 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'tomorrow',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#1d1f21',
  base01: '#282a2e',
  base02: '#373b41',
  base03: '#969896',
  base04: '#b4b7b4',
  base05: '#c5c8c6',
  base06: '#e0e0e0',
  base07: '#ffffff',
  base08: '#cc6666',
  base09: '#de935f',
  base0A: '#f0c674',
  base0B: '#b5bd68',
  base0C: '#8abeb7',
  base0D: '#81a2be',
  base0E: '#b294bb',
  base0F: '#a3685a'
};
module.exports = exports['default'];

/***/ }),
/* 604 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'london tube',
  author: 'jan t. sott',
  base00: '#231f20',
  base01: '#1c3f95',
  base02: '#5a5758',
  base03: '#737171',
  base04: '#959ca1',
  base05: '#d9d8d8',
  base06: '#e7e7e8',
  base07: '#ffffff',
  base08: '#ee2e24',
  base09: '#f386a1',
  base0A: '#ffd204',
  base0B: '#00853e',
  base0C: '#85cebc',
  base0D: '#009ddc',
  base0E: '#98005d',
  base0F: '#b06110'
};
module.exports = exports['default'];

/***/ }),
/* 605 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'twilight',
  author: 'david hart (http://hart-dev.com)',
  base00: '#1e1e1e',
  base01: '#323537',
  base02: '#464b50',
  base03: '#5f5a60',
  base04: '#838184',
  base05: '#a7a7a7',
  base06: '#c3c3c3',
  base07: '#ffffff',
  base08: '#cf6a4c',
  base09: '#cda869',
  base0A: '#f9ee98',
  base0B: '#8f9d6a',
  base0C: '#afc4db',
  base0D: '#7587a6',
  base0E: '#9b859d',
  base0F: '#9b703f'
};
module.exports = exports['default'];

/***/ }),
/* 606 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'nicinabox',
  author: 'nicinabox (http://github.com/nicinabox)',
  base00: '#2A2F3A',
  base01: '#3C444F',
  base02: '#4F5A65',
  base03: '#BEBEBE',
  base04: '#b0b0b0', // based on ocean theme
  base05: '#d0d0d0', // based on ocean theme
  base06: '#FFFFFF',
  base07: '#f5f5f5', // based on ocean theme
  base08: '#fb9fb1', // based on ocean theme
  base09: '#FC6D24',
  base0A: '#ddb26f', // based on ocean theme
  base0B: '#A1C659',
  base0C: '#12cfc0', // based on ocean theme
  base0D: '#6FB3D2',
  base0E: '#D381C3',
  base0F: '#deaf8f' // based on ocean theme
};
module.exports = exports['default'];

/***/ }),
/* 607 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = reducer;

var _actions = __webpack_require__(409);

function initialScrollTop(props) {
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var action = arguments[2];

  if (!props.preserveScrollTop) {
    return 0;
  }

  return action.type === _actions.UPDATE_SCROLL_TOP ? action.scrollTop : state;
}

function startConsecutiveToggle(props, state, action) {
  return action.type === _actions.START_CONSECUTIVE_TOGGLE ? action.id : state;
}

function reducer(props) {
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var action = arguments[2];

  return {
    initialScrollTop: initialScrollTop(props, state.initialScrollTop, action),
    consecutiveToggleStartId: startConsecutiveToggle(props, state.consecutiveToggleStartId, action)
  };
}

/***/ }),
/* 608 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _function = __webpack_require__(324);

var _function2 = _interopRequireDefault(_function);

var _reduxDevtools = __webpack_require__(334);

var _LogMonitorButton = __webpack_require__(609);

var _LogMonitorButton2 = _interopRequireDefault(_LogMonitorButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reset = _reduxDevtools.ActionCreators.reset;
var rollback = _reduxDevtools.ActionCreators.rollback;
var commit = _reduxDevtools.ActionCreators.commit;
var sweep = _reduxDevtools.ActionCreators.sweep;


var style = {
  textAlign: 'center',
  borderBottomWidth: 1,
  borderBottomStyle: 'solid',
  borderColor: 'transparent',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'row'
};

var LogMonitorButtonBar = function (_Component) {
  _inherits(LogMonitorButtonBar, _Component);

  function LogMonitorButtonBar(props) {
    _classCallCheck(this, LogMonitorButtonBar);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.shouldComponentUpdate = _function2.default;

    _this.handleReset = _this.handleReset.bind(_this);
    _this.handleRollback = _this.handleRollback.bind(_this);
    _this.handleSweep = _this.handleSweep.bind(_this);
    _this.handleCommit = _this.handleCommit.bind(_this);
    return _this;
  }

  LogMonitorButtonBar.prototype.handleRollback = function handleRollback() {
    this.props.dispatch(rollback());
  };

  LogMonitorButtonBar.prototype.handleSweep = function handleSweep() {
    this.props.dispatch(sweep());
  };

  LogMonitorButtonBar.prototype.handleCommit = function handleCommit() {
    this.props.dispatch(commit());
  };

  LogMonitorButtonBar.prototype.handleReset = function handleReset() {
    this.props.dispatch(reset());
  };

  LogMonitorButtonBar.prototype.render = function render() {
    var _props = this.props;
    var theme = _props.theme;
    var hasStates = _props.hasStates;
    var hasSkippedActions = _props.hasSkippedActions;

    return _react2.default.createElement(
      'div',
      { style: _extends({}, style, { borderColor: theme.base02 }) },
      _react2.default.createElement(
        _LogMonitorButton2.default,
        {
          theme: theme,
          onClick: this.handleReset,
          enabled: true },
        'Reset'
      ),
      _react2.default.createElement(
        _LogMonitorButton2.default,
        {
          theme: theme,
          onClick: this.handleRollback,
          enabled: hasStates },
        'Revert'
      ),
      _react2.default.createElement(
        _LogMonitorButton2.default,
        {
          theme: theme,
          onClick: this.handleSweep,
          enabled: hasSkippedActions },
        'Sweep'
      ),
      _react2.default.createElement(
        _LogMonitorButton2.default,
        {
          theme: theme,
          onClick: this.handleCommit,
          enabled: hasStates },
        'Commit'
      )
    );
  };

  return LogMonitorButtonBar;
}(_react.Component);

LogMonitorButtonBar.propTypes = {
  dispatch: _propTypes2.default.func,
  theme: _propTypes2.default.object
};
exports.default = LogMonitorButtonBar;

/***/ }),
/* 609 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _brighten = __webpack_require__(610);

var _brighten2 = _interopRequireDefault(_brighten);

var _function = __webpack_require__(324);

var _function2 = _interopRequireDefault(_function);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  base: {
    cursor: 'pointer',
    fontWeight: 'bold',
    borderRadius: 3,
    padding: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 5,
    marginBottom: 5,
    flexGrow: 1,
    display: 'inline-block',
    fontSize: '0.8em',
    color: 'white',
    textDecoration: 'none'
  }
};

var LogMonitorButton = function (_React$Component) {
  _inherits(LogMonitorButton, _React$Component);

  function LogMonitorButton(props) {
    _classCallCheck(this, LogMonitorButton);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.shouldComponentUpdate = _function2.default;


    _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
    _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
    _this.onClick = _this.onClick.bind(_this);

    _this.state = {
      hovered: false,
      active: false
    };
    return _this;
  }

  LogMonitorButton.prototype.handleMouseEnter = function handleMouseEnter() {
    this.setState({ hovered: true });
  };

  LogMonitorButton.prototype.handleMouseLeave = function handleMouseLeave() {
    this.setState({ hovered: false });
  };

  LogMonitorButton.prototype.handleMouseDown = function handleMouseDown() {
    this.setState({ active: true });
  };

  LogMonitorButton.prototype.handleMouseUp = function handleMouseUp() {
    this.setState({ active: false });
  };

  LogMonitorButton.prototype.onClick = function onClick() {
    if (!this.props.enabled) {
      return;
    }
    if (this.props.onClick) {
      this.props.onClick();
    }
  };

  LogMonitorButton.prototype.render = function render() {
    var style = _extends({}, styles.base, {
      backgroundColor: this.props.theme.base02
    });
    if (this.props.enabled && this.state.hovered) {
      style = _extends({}, style, {
        backgroundColor: (0, _brighten2.default)(this.props.theme.base02, 0.2)
      });
    }
    if (!this.props.enabled) {
      style = _extends({}, style, {
        opacity: 0.2,
        cursor: 'text',
        backgroundColor: 'transparent'
      });
    }
    return _react2.default.createElement(
      'a',
      { onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        onMouseDown: this.handleMouseDown,
        onMouseUp: this.handleMouseUp,
        onClick: this.onClick,
        style: style },
      this.props.children
    );
  };

  return LogMonitorButton;
}(_react2.default.Component);

exports.default = LogMonitorButton;

/***/ }),
/* 610 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (hexColor, lightness) {
  var hex = String(hexColor).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex.replace(/(.)/g, '$1$1');
  }
  var lum = lightness || 0;

  var rgb = '#';
  var c = void 0;
  for (var i = 0; i < 3; ++i) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ('00' + c).substr(c.length);
  }
  return rgb;
};

/***/ }),
/* 611 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LogMonitorEntry = __webpack_require__(612);

var _LogMonitorEntry2 = _interopRequireDefault(_LogMonitorEntry);

var _function = __webpack_require__(324);

var _function2 = _interopRequireDefault(_function);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LogMonitorEntryList = function (_Component) {
  _inherits(LogMonitorEntryList, _Component);

  function LogMonitorEntryList() {
    var _temp, _this, _ret;

    _classCallCheck(this, LogMonitorEntryList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.shouldComponentUpdate = _function2.default, _temp), _possibleConstructorReturn(_this, _ret);
  }

  LogMonitorEntryList.prototype.render = function render() {
    var elements = [];
    var _props = this.props;
    var theme = _props.theme;
    var actionsById = _props.actionsById;
    var computedStates = _props.computedStates;
    var currentStateIndex = _props.currentStateIndex;
    var consecutiveToggleStartId = _props.consecutiveToggleStartId;
    var select = _props.select;
    var skippedActionIds = _props.skippedActionIds;
    var stagedActionIds = _props.stagedActionIds;
    var expandActionRoot = _props.expandActionRoot;
    var expandStateRoot = _props.expandStateRoot;
    var markStateDiff = _props.markStateDiff;
    var onActionClick = _props.onActionClick;
    var onActionShiftClick = _props.onActionShiftClick;


    for (var i = 0; i < stagedActionIds.length; i++) {
      var actionId = stagedActionIds[i];
      var action = actionsById[actionId].action;
      var _computedStates$i = computedStates[i];
      var state = _computedStates$i.state;
      var error = _computedStates$i.error;

      var previousState = void 0;
      if (i > 0) {
        previousState = computedStates[i - 1].state;
      }
      elements.push(_react2.default.createElement(_LogMonitorEntry2.default, { key: actionId,
        theme: theme,
        select: select,
        action: action,
        actionId: actionId,
        state: state,
        previousState: previousState,
        collapsed: skippedActionIds.indexOf(actionId) > -1,
        inFuture: i > currentStateIndex,
        selected: consecutiveToggleStartId === i,
        error: error,
        expandActionRoot: expandActionRoot,
        expandStateRoot: expandStateRoot,
        markStateDiff: markStateDiff,
        onActionClick: onActionClick,
        onActionShiftClick: onActionShiftClick }));
    }

    return _react2.default.createElement(
      'div',
      null,
      elements
    );
  };

  return LogMonitorEntryList;
}(_react.Component);

LogMonitorEntryList.propTypes = {
  actionsById: _propTypes2.default.object,
  computedStates: _propTypes2.default.array,
  stagedActionIds: _propTypes2.default.array,
  skippedActionIds: _propTypes2.default.array,
  currentStateIndex: _propTypes2.default.number,
  consecutiveToggleStartId: _propTypes2.default.number,

  select: _propTypes2.default.func.isRequired,
  onActionClick: _propTypes2.default.func.isRequired,
  theme: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
  expandActionRoot: _propTypes2.default.bool,
  expandStateRoot: _propTypes2.default.bool
};
exports.default = LogMonitorEntryList;

/***/ }),
/* 612 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactJsonTree = __webpack_require__(410);

var _reactJsonTree2 = _interopRequireDefault(_reactJsonTree);

var _LogMonitorEntryAction = __webpack_require__(645);

var _LogMonitorEntryAction2 = _interopRequireDefault(_LogMonitorEntryAction);

var _function = __webpack_require__(324);

var _function2 = _interopRequireDefault(_function);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  entry: {
    display: 'block',
    WebkitUserSelect: 'none'
  },

  root: {
    marginLeft: 0
  }
};

var getDeepItem = function getDeepItem(data, path) {
  return path.reduce(function (obj, key) {
    return obj && obj[key];
  }, data);
};
var dataIsEqual = function dataIsEqual(data, previousData, keyPath) {
  var path = [].concat(keyPath).reverse().slice(1);

  return getDeepItem(data, path) === getDeepItem(previousData, path);
};

var LogMonitorEntry = function (_Component) {
  _inherits(LogMonitorEntry, _Component);

  function LogMonitorEntry(props) {
    _classCallCheck(this, LogMonitorEntry);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.shouldComponentUpdate = _function2.default;

    _this.handleActionClick = _this.handleActionClick.bind(_this);
    _this.shouldExpandNode = _this.shouldExpandNode.bind(_this);
    return _this;
  }

  LogMonitorEntry.prototype.printState = function printState(state, error) {
    var _this2 = this;

    var errorText = error;
    if (!errorText) {
      try {
        var _ret = function () {
          var data = _this2.props.select(state);
          var theme = void 0;

          if (_this2.props.markStateDiff) {
            (function () {
              var previousData = typeof _this2.props.previousState !== 'undefined' ? _this2.props.select(_this2.props.previousState) : undefined;
              var getValueStyle = function getValueStyle(_ref, nodeType, keyPath) {
                var style = _ref.style;
                return {
                  style: _extends({}, style, {
                    backgroundColor: dataIsEqual(data, previousData, keyPath) ? 'transparent' : _this2.props.theme.base01
                  })
                };
              };
              var getNestedNodeStyle = function getNestedNodeStyle(_ref2, keyPath) {
                var style = _ref2.style;
                return {
                  style: _extends({}, style, keyPath.length > 1 ? {} : styles.root)
                };
              };
              theme = {
                extend: _this2.props.theme,
                tree: styles.tree,
                value: getValueStyle,
                nestedNode: getNestedNodeStyle
              };
            })();
          } else {
            theme = _this2.props.theme;
          }

          return {
            v: _react2.default.createElement(_reactJsonTree2.default, {
              theme: theme,
              data: data,
              invertTheme: false,
              keyPath: ['state'],
              shouldExpandNode: _this2.shouldExpandNode })
          };
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      } catch (err) {
        errorText = 'Error selecting state.';
      }
    }

    return _react2.default.createElement(
      'div',
      { style: {
          color: this.props.theme.base08,
          paddingTop: 20,
          paddingLeft: 30,
          paddingRight: 30,
          paddingBottom: 35
        } },
      errorText
    );
  };

  LogMonitorEntry.prototype.handleActionClick = function handleActionClick(e) {
    var _props = this.props;
    var actionId = _props.actionId;
    var onActionClick = _props.onActionClick;
    var onActionShiftClick = _props.onActionShiftClick;

    if (actionId > 0) {
      if (e.shiftKey) {
        onActionShiftClick(actionId);
      } else {
        onActionClick(actionId);
      }
    }
  };

  LogMonitorEntry.prototype.shouldExpandNode = function shouldExpandNode(keyName, data, level) {
    return this.props.expandStateRoot && level === 0;
  };

  LogMonitorEntry.prototype.render = function render() {
    var _props2 = this.props;
    var actionId = _props2.actionId;
    var error = _props2.error;
    var action = _props2.action;
    var state = _props2.state;
    var collapsed = _props2.collapsed;
    var selected = _props2.selected;
    var inFuture = _props2.inFuture;

    var styleEntry = {
      opacity: collapsed ? 0.5 : 1,
      cursor: actionId > 0 ? 'pointer' : 'default'
    };

    return _react2.default.createElement(
      'div',
      { style: {
          opacity: selected ? 0.4 : inFuture ? 0.6 : 1, // eslint-disable-line no-nested-ternary
          textDecoration: collapsed ? 'line-through' : 'none',
          color: this.props.theme.base06
        } },
      _react2.default.createElement(_LogMonitorEntryAction2.default, {
        theme: this.props.theme,
        collapsed: collapsed,
        action: action,
        expandActionRoot: this.props.expandActionRoot,
        onClick: this.handleActionClick,
        style: _extends({}, styles.entry, styleEntry) }),
      !collapsed && _react2.default.createElement(
        'div',
        { style: { paddingLeft: 16 } },
        this.printState(state, error)
      )
    );
  };

  return LogMonitorEntry;
}(_react.Component);

LogMonitorEntry.propTypes = {
  state: _propTypes2.default.object.isRequired,
  action: _propTypes2.default.object.isRequired,
  actionId: _propTypes2.default.number.isRequired,
  select: _propTypes2.default.func.isRequired,
  inFuture: _propTypes2.default.bool,
  error: _propTypes2.default.string,
  onActionClick: _propTypes2.default.func.isRequired,
  onActionShiftClick: _propTypes2.default.func.isRequired,
  collapsed: _propTypes2.default.bool,
  selected: _propTypes2.default.bool,
  expandActionRoot: _propTypes2.default.bool,
  expandStateRoot: _propTypes2.default.bool
};
exports.default = LogMonitorEntry;

/***/ }),
/* 613 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(614);
module.exports = __webpack_require__(16).Object.keys;


/***/ }),
/* 614 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(54);
var $keys = __webpack_require__(34);

__webpack_require__(411)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 615 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(143);

var _iterator2 = _interopRequireDefault(_iterator);

exports['default'] = objType;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function objType(obj) {
  var type = Object.prototype.toString.call(obj).slice(8, -1);
  if (type === 'Object' && typeof obj[_iterator2['default']] === 'function') {
    return 'Iterable';
  }

  return type;
}

/***/ }),
/* 616 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(5);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getOwnPropertyNames = __webpack_require__(413);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _JSONNestedNode = __webpack_require__(349);

var _JSONNestedNode2 = _interopRequireDefault(_JSONNestedNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Returns the "n Items" string for this node,
// generating and caching it if it hasn't been created yet.
function createItemString(data) {
  var len = (0, _getOwnPropertyNames2['default'])(data).length;
  return len + ' ' + (len !== 1 ? 'keys' : 'key');
}

// Configures <JSONNestedNode> to render an Object
var JSONObjectNode = function JSONObjectNode(_ref) {
  var data = _ref.data,
      props = (0, _objectWithoutProperties3['default'])(_ref, ['data']);
  return _react2['default'].createElement(_JSONNestedNode2['default'], (0, _extends3['default'])({}, props, {
    data: data,
    nodeType: 'Object',
    nodeTypeIndicator: props.nodeType === 'Error' ? 'Error()' : '{}',
    createItemString: createItemString,
    expandable: (0, _getOwnPropertyNames2['default'])(data).length > 0
  }));
};

JSONObjectNode.propTypes = {
  data: _propTypes2['default'].object,
  nodeType: _propTypes2['default'].string
};

exports['default'] = JSONObjectNode;

/***/ }),
/* 617 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(618);
var $Object = __webpack_require__(16).Object;
module.exports = function getOwnPropertyNames(it) {
  return $Object.getOwnPropertyNames(it);
};


/***/ }),
/* 618 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(411)('getOwnPropertyNames', function () {
  return __webpack_require__(144).f;
});


/***/ }),
/* 619 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getIterator2 = __webpack_require__(350);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getOwnPropertyNames = __webpack_require__(413);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _keys = __webpack_require__(332);

var _keys2 = _interopRequireDefault(_keys);

exports['default'] = getCollectionEntries;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getLength(type, collection) {
  if (type === 'Object') {
    return (0, _keys2['default'])(collection).length;
  } else if (type === 'Array') {
    return collection.length;
  }

  return Infinity;
}

function isIterableMap(collection) {
  return typeof collection.set === 'function';
}

function getEntries(type, collection, sortObjectKeys) {
  var from = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var to = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Infinity;

  var res = void 0;

  if (type === 'Object') {
    var keys = (0, _getOwnPropertyNames2['default'])(collection);

    if (typeof sortObjectKeys !== 'undefined') {
      keys.sort(sortObjectKeys);
    }

    keys = keys.slice(from, to + 1);

    res = {
      entries: keys.map(function (key) {
        return { key: key, value: collection[key] };
      })
    };
  } else if (type === 'Array') {
    res = {
      entries: collection.slice(from, to + 1).map(function (val, idx) {
        return { key: idx + from, value: val };
      })
    };
  } else {
    var idx = 0;
    var entries = [];
    var done = true;

    var isMap = isIterableMap(collection);

    for (var _iterator = collection, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3['default'])(_iterator);;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var item = _ref;

      if (idx > to) {
        done = false;
        break;
      }
      if (from <= idx) {
        if (isMap && Array.isArray(item)) {
          if (typeof item[0] === 'string' || typeof item[0] === 'number') {
            entries.push({ key: item[0], value: item[1] });
          } else {
            entries.push({
              key: '[entry ' + idx + ']',
              value: {
                '[key]': item[0],
                '[value]': item[1]
              }
            });
          }
        } else {
          entries.push({ key: idx, value: item });
        }
      }
      idx++;
    }

    res = {
      hasMore: !done,
      entries: entries
    };
  }

  return res;
}

function getRanges(from, to, limit) {
  var ranges = [];
  while (to - from > limit * limit) {
    limit = limit * limit;
  }
  for (var i = from; i <= to; i += limit) {
    ranges.push({ from: i, to: Math.min(to, i + limit - 1) });
  }

  return ranges;
}

function getCollectionEntries(type, collection, sortObjectKeys, limit) {
  var from = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var to = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : Infinity;

  var getEntriesBound = getEntries.bind(null, type, collection, sortObjectKeys);

  if (!limit) {
    return getEntriesBound().entries;
  }

  var isSubset = to < Infinity;
  var length = Math.min(to - from, getLength(type, collection));

  if (type !== 'Iterable') {
    if (length <= limit || limit < 7) {
      return getEntriesBound(from, to).entries;
    }
  } else {
    if (length <= limit && !isSubset) {
      return getEntriesBound(from, to).entries;
    }
  }

  var limitedEntries = void 0;
  if (type === 'Iterable') {
    var _getEntriesBound = getEntriesBound(from, from + limit - 1),
        hasMore = _getEntriesBound.hasMore,
        entries = _getEntriesBound.entries;

    limitedEntries = hasMore ? [].concat(entries, getRanges(from + limit, from + 2 * limit - 1, limit)) : entries;
  } else {
    limitedEntries = isSubset ? getRanges(from, to, limit) : [].concat(getEntriesBound(0, limit - 5).entries, getRanges(limit - 4, length - 5, limit), getEntriesBound(length - 4, length - 1).entries);
  }

  return limitedEntries;
}

/***/ }),
/* 620 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(140);
__webpack_require__(87);
module.exports = __webpack_require__(621);


/***/ }),
/* 621 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(25);
var get = __webpack_require__(145);
module.exports = __webpack_require__(16).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 622 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _JSONArrow = __webpack_require__(414);

var _JSONArrow2 = _interopRequireDefault(_JSONArrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ItemRange = function (_React$Component) {
  (0, _inherits3['default'])(ItemRange, _React$Component);

  function ItemRange(props) {
    (0, _classCallCheck3['default'])(this, ItemRange);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props));

    _this.state = { expanded: false };

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  ItemRange.prototype.render = function render() {
    var _props = this.props,
        styling = _props.styling,
        from = _props.from,
        to = _props.to,
        renderChildNodes = _props.renderChildNodes,
        nodeType = _props.nodeType;


    return this.state.expanded ? _react2['default'].createElement(
      'div',
      styling('itemRange', this.state.expanded),
      renderChildNodes(this.props, from, to)
    ) : _react2['default'].createElement(
      'div',
      (0, _extends3['default'])({}, styling('itemRange', this.state.expanded), {
        onClick: this.handleClick
      }),
      _react2['default'].createElement(_JSONArrow2['default'], {
        nodeType: nodeType,
        styling: styling,
        expanded: false,
        onClick: this.handleClick,
        arrowStyle: 'double'
      }),
      from + ' ... ' + to
    );
  };

  ItemRange.prototype.handleClick = function handleClick() {
    this.setState({ expanded: !this.state.expanded });
  };

  return ItemRange;
}(_react2['default'].Component);

ItemRange.propTypes = {
  styling: _propTypes2['default'].func.isRequired,
  from: _propTypes2['default'].number.isRequired,
  to: _propTypes2['default'].number.isRequired,
  renderChildNodes: _propTypes2['default'].func.isRequired,
  nodeType: _propTypes2['default'].string.isRequired
};
exports['default'] = ItemRange;

/***/ }),
/* 623 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(5);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _JSONNestedNode = __webpack_require__(349);

var _JSONNestedNode2 = _interopRequireDefault(_JSONNestedNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Returns the "n Items" string for this node,
// generating and caching it if it hasn't been created yet.
function createItemString(data) {
  return data.length + ' ' + (data.length !== 1 ? 'items' : 'item');
}

// Configures <JSONNestedNode> to render an Array
var JSONArrayNode = function JSONArrayNode(_ref) {
  var data = _ref.data,
      props = (0, _objectWithoutProperties3['default'])(_ref, ['data']);
  return _react2['default'].createElement(_JSONNestedNode2['default'], (0, _extends3['default'])({}, props, {
    data: data,
    nodeType: 'Array',
    nodeTypeIndicator: '[]',
    createItemString: createItemString,
    expandable: data.length > 0
  }));
};

JSONArrayNode.propTypes = {
  data: _propTypes2['default'].array
};

exports['default'] = JSONArrayNode;

/***/ }),
/* 624 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(5);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getIterator2 = __webpack_require__(350);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _isSafeInteger = __webpack_require__(625);

var _isSafeInteger2 = _interopRequireDefault(_isSafeInteger);

exports['default'] = JSONIterableNode;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _JSONNestedNode = __webpack_require__(349);

var _JSONNestedNode2 = _interopRequireDefault(_JSONNestedNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Returns the "n Items" string for this node,
// generating and caching it if it hasn't been created yet.
function createItemString(data, limit) {
  var count = 0;
  var hasMore = false;
  if ((0, _isSafeInteger2['default'])(data.size)) {
    count = data.size;
  } else {
    // eslint-disable-next-line no-unused-vars
    for (var _iterator = data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3['default'])(_iterator);;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var entry = _ref;

      if (limit && count + 1 > limit) {
        hasMore = true;
        break;
      }
      count += 1;
    }
  }
  return '' + (hasMore ? '>' : '') + count + ' ' + (count !== 1 ? 'entries' : 'entry');
}

// Configures <JSONNestedNode> to render an iterable
function JSONIterableNode(_ref2) {
  var props = (0, _objectWithoutProperties3['default'])(_ref2, []);

  return _react2['default'].createElement(_JSONNestedNode2['default'], (0, _extends3['default'])({}, props, {
    nodeType: 'Iterable',
    nodeTypeIndicator: '()',
    createItemString: createItemString
  }));
}

/***/ }),
/* 625 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(626), __esModule: true };

/***/ }),
/* 626 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(627);
module.exports = __webpack_require__(16).Number.isSafeInteger;


/***/ }),
/* 627 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(18);
var isInteger = __webpack_require__(628);
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});


/***/ }),
/* 628 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(26);
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),
/* 629 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Renders simple values (eg. strings, numbers, booleans, etc)
 */

var JSONValueNode = function JSONValueNode(_ref) {
  var nodeType = _ref.nodeType,
      styling = _ref.styling,
      labelRenderer = _ref.labelRenderer,
      keyPath = _ref.keyPath,
      valueRenderer = _ref.valueRenderer,
      value = _ref.value,
      valueGetter = _ref.valueGetter;
  return _react2['default'].createElement(
    'li',
    styling('value', nodeType, keyPath),
    _react2['default'].createElement(
      'label',
      styling(['label', 'valueLabel'], nodeType, keyPath),
      labelRenderer(keyPath, nodeType, false, false)
    ),
    _react2['default'].createElement(
      'span',
      styling('valueText', nodeType, keyPath),
      valueRenderer.apply(undefined, [valueGetter(value), value].concat(keyPath))
    )
  );
};

JSONValueNode.propTypes = {
  nodeType: _propTypes2['default'].string.isRequired,
  styling: _propTypes2['default'].func.isRequired,
  labelRenderer: _propTypes2['default'].func.isRequired,
  keyPath: _propTypes2['default'].arrayOf(_propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number])).isRequired,
  valueRenderer: _propTypes2['default'].func.isRequired,
  value: _propTypes2['default'].any,
  valueGetter: _propTypes2['default'].func
};

JSONValueNode.defaultProps = {
  valueGetter: function valueGetter(value) {
    return value;
  }
};

exports['default'] = JSONValueNode;

/***/ }),
/* 630 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _reactBase16Styling = __webpack_require__(415);

var _solarized = __webpack_require__(644);

var _solarized2 = _interopRequireDefault(_solarized);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var colorMap = function colorMap(theme) {
  return {
    BACKGROUND_COLOR: theme.base00,
    TEXT_COLOR: theme.base07,
    STRING_COLOR: theme.base0B,
    DATE_COLOR: theme.base0B,
    NUMBER_COLOR: theme.base09,
    BOOLEAN_COLOR: theme.base09,
    NULL_COLOR: theme.base08,
    UNDEFINED_COLOR: theme.base08,
    FUNCTION_COLOR: theme.base08,
    SYMBOL_COLOR: theme.base08,
    LABEL_COLOR: theme.base0D,
    ARROW_COLOR: theme.base0D,
    ITEM_STRING_COLOR: theme.base0B,
    ITEM_STRING_EXPANDED_COLOR: theme.base03
  };
};

var valueColorMap = function valueColorMap(colors) {
  return {
    String: colors.STRING_COLOR,
    Date: colors.DATE_COLOR,
    Number: colors.NUMBER_COLOR,
    Boolean: colors.BOOLEAN_COLOR,
    Null: colors.NULL_COLOR,
    Undefined: colors.UNDEFINED_COLOR,
    Function: colors.FUNCTION_COLOR,
    Symbol: colors.SYMBOL_COLOR
  };
};

var getDefaultThemeStyling = function getDefaultThemeStyling(theme) {
  var colors = colorMap(theme);

  return {
    tree: {
      border: 0,
      padding: 0,
      marginTop: '0.5em',
      marginBottom: '0.5em',
      marginLeft: '0.125em',
      marginRight: 0,
      listStyle: 'none',
      MozUserSelect: 'none',
      WebkitUserSelect: 'none',
      backgroundColor: colors.BACKGROUND_COLOR
    },

    value: function value(_ref, nodeType, keyPath) {
      var style = _ref.style;
      return {
        style: (0, _extends3['default'])({}, style, {
          paddingTop: '0.25em',
          paddingRight: 0,
          marginLeft: '0.875em',
          WebkitUserSelect: 'text',
          MozUserSelect: 'text',
          wordWrap: 'break-word',
          paddingLeft: keyPath.length > 1 ? '2.125em' : '1.25em',
          textIndent: '-0.5em',
          wordBreak: 'break-all'
        })
      };
    },

    label: {
      display: 'inline-block',
      color: colors.LABEL_COLOR
    },

    valueLabel: {
      margin: '0 0.5em 0 0'
    },

    valueText: function valueText(_ref2, nodeType) {
      var style = _ref2.style;
      return {
        style: (0, _extends3['default'])({}, style, {
          color: valueColorMap(colors)[nodeType]
        })
      };
    },

    itemRange: function itemRange(styling, expanded) {
      return {
        style: {
          paddingTop: expanded ? 0 : '0.25em',
          cursor: 'pointer',
          color: colors.LABEL_COLOR
        }
      };
    },

    arrow: function arrow(_ref3, nodeType, expanded) {
      var style = _ref3.style;
      return {
        style: (0, _extends3['default'])({}, style, {
          marginLeft: 0,
          transition: '150ms',
          WebkitTransition: '150ms',
          MozTransition: '150ms',
          WebkitTransform: expanded ? 'rotateZ(90deg)' : 'rotateZ(0deg)',
          MozTransform: expanded ? 'rotateZ(90deg)' : 'rotateZ(0deg)',
          transform: expanded ? 'rotateZ(90deg)' : 'rotateZ(0deg)',
          transformOrigin: '45% 50%',
          WebkitTransformOrigin: '45% 50%',
          MozTransformOrigin: '45% 50%',
          position: 'relative',
          lineHeight: '1.1em',
          fontSize: '0.75em'
        })
      };
    },

    arrowContainer: function arrowContainer(_ref4, arrowStyle) {
      var style = _ref4.style;
      return {
        style: (0, _extends3['default'])({}, style, {
          display: 'inline-block',
          paddingRight: '0.5em',
          paddingLeft: arrowStyle === 'double' ? '1em' : 0,
          cursor: 'pointer'
        })
      };
    },

    arrowSign: {
      color: colors.ARROW_COLOR
    },

    arrowSignInner: {
      position: 'absolute',
      top: 0,
      left: '-0.4em'
    },

    nestedNode: function nestedNode(_ref5, keyPath, nodeType, expanded, expandable) {
      var style = _ref5.style;
      return {
        style: (0, _extends3['default'])({}, style, {
          position: 'relative',
          paddingTop: '0.25em',
          marginLeft: keyPath.length > 1 ? '0.875em' : 0,
          paddingLeft: !expandable ? '1.125em' : 0
        })
      };
    },

    rootNode: {
      padding: 0,
      margin: 0
    },

    nestedNodeLabel: function nestedNodeLabel(_ref6, keyPath, nodeType, expanded, expandable) {
      var style = _ref6.style;
      return {
        style: (0, _extends3['default'])({}, style, {
          margin: 0,
          padding: 0,
          WebkitUserSelect: expandable ? 'inherit' : 'text',
          MozUserSelect: expandable ? 'inherit' : 'text',
          cursor: expandable ? 'pointer' : 'default'
        })
      };
    },

    nestedNodeItemString: function nestedNodeItemString(_ref7, keyPath, nodeType, expanded) {
      var style = _ref7.style;
      return {
        style: (0, _extends3['default'])({}, style, {
          paddingLeft: '0.5em',
          cursor: 'default',
          color: expanded ? colors.ITEM_STRING_EXPANDED_COLOR : colors.ITEM_STRING_COLOR
        })
      };
    },

    nestedNodeItemType: {
      marginLeft: '0.3em',
      marginRight: '0.3em'
    },

    nestedNodeChildren: function nestedNodeChildren(_ref8, nodeType, expanded) {
      var style = _ref8.style;
      return {
        style: (0, _extends3['default'])({}, style, {
          padding: 0,
          margin: 0,
          listStyle: 'none',
          display: expanded ? 'block' : 'none'
        })
      };
    },

    rootNodeChildren: {
      padding: 0,
      margin: 0,
      listStyle: 'none'
    }
  };
};

exports['default'] = (0, _reactBase16Styling.createStyling)(getDefaultThemeStyling, {
  defaultBase16: _solarized2['default']
});

/***/ }),
/* 631 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(632);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(350);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 632 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(633), __esModule: true };

/***/ }),
/* 633 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(140);
__webpack_require__(87);
module.exports = __webpack_require__(634);


/***/ }),
/* 634 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(146);
var ITERATOR = __webpack_require__(17)('iterator');
var Iterators = __webpack_require__(35);
module.exports = __webpack_require__(16).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 635 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG = 1,
    BIND_KEY_FLAG = 2,
    CURRY_BOUND_FLAG = 4,
    CURRY_FLAG = 8,
    CURRY_RIGHT_FLAG = 16,
    PARTIAL_FLAG = 32,
    PARTIAL_RIGHT_FLAG = 64,
    ARY_FLAG = 128,
    REARG_FLAG = 256,
    FLIP_FLAG = 512;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** Used to associate wrap methods with their bit flags. */
var wrapFlags = [
  ['ary', ARY_FLAG],
  ['bind', BIND_FLAG],
  ['bindKey', BIND_KEY_FLAG],
  ['curry', CURRY_FLAG],
  ['curryRight', CURRY_RIGHT_FLAG],
  ['flip', FLIP_FLAG],
  ['partial', PARTIAL_FLAG],
  ['partialRight', PARTIAL_RIGHT_FLAG],
  ['rearg', REARG_FLAG]
];

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to match wrap detail comments. */
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
    reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
    reSplitDetails = /,? & /;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * Gets the number of `placeholder` occurrences in `array`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} placeholder The placeholder to search for.
 * @returns {number} Returns the placeholder count.
 */
function countHolders(array, placeholder) {
  var length = array.length,
      result = 0;

  while (length--) {
    if (array[length] === placeholder) {
      result++;
    }
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */
function replaceHolders(array, placeholder) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value === placeholder || value === PLACEHOLDER) {
      array[index] = PLACEHOLDER;
      result[resIndex++] = index;
    }
  }
  return result;
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var objectCreate = Object.create;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/* Used to set `toString` methods. */
var defineProperty = (function() {
  var func = getNative(Object, 'defineProperty'),
      name = getNative.name;

  return (name && name.length > 2) ? func : undefined;
}());

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgs(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersLength = holders.length,
      leftIndex = -1,
      leftLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(leftLength + rangeLength),
      isUncurried = !isCurried;

  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
  }
  while (rangeLength--) {
    result[leftIndex++] = args[argsIndex++];
  }
  return result;
}

/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgsRight(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersIndex = -1,
      holdersLength = holders.length,
      rightIndex = -1,
      rightLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(rangeLength + rightLength),
      isUncurried = !isCurried;

  while (++argsIndex < rangeLength) {
    result[argsIndex] = args[argsIndex];
  }
  var offset = argsIndex;
  while (++rightIndex < rightLength) {
    result[offset + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[offset + holders[holdersIndex]] = args[argsIndex++];
    }
  }
  return result;
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createBind(func, bitmask, thisArg) {
  var isBind = bitmask & BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtor(Ctor) {
  return function() {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0: return new Ctor;
      case 1: return new Ctor(args[0]);
      case 2: return new Ctor(args[0], args[1]);
      case 3: return new Ctor(args[0], args[1], args[2]);
      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject(result) ? result : thisBinding;
  };
}

/**
 * Creates a function that wraps `func` to enable currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {number} arity The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createCurry(func, bitmask, arity) {
  var Ctor = createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length,
        placeholder = getHolder(wrapper);

    while (index--) {
      args[index] = arguments[index];
    }
    var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
      ? []
      : replaceHolders(args, placeholder);

    length -= holders.length;
    if (length < arity) {
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, undefined,
        args, holders, undefined, undefined, arity - length);
    }
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return apply(fn, this, args);
  }
  return wrapper;
}

/**
 * Creates a function that wraps `func` to invoke it with optional `this`
 * binding of `thisArg`, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided
 *  to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & ARY_FLAG,
      isBind = bitmask & BIND_FLAG,
      isBindKey = bitmask & BIND_KEY_FLAG,
      isCurried = bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG),
      isFlip = bitmask & FLIP_FLAG,
      Ctor = isBindKey ? undefined : createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length;

    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder = getHolder(wrapper),
          holdersCount = countHolders(args, placeholder);
    }
    if (partials) {
      args = composeArgs(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = replaceHolders(args, placeholder);
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, thisArg,
        args, newHolders, argPos, ary, arity - length
      );
    }
    var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;

    length = args.length;
    if (argPos) {
      args = reorder(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary < length) {
      args.length = ary;
    }
    if (this && this !== root && this instanceof wrapper) {
      fn = Ctor || createCtor(fn);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}

/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

/**
 * Creates a function that wraps `func` to continue currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {Function} wrapFunc The function to create the `func` wrapper.
 * @param {*} placeholder The placeholder value.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
  var isCurry = bitmask & CURRY_FLAG,
      newHolders = isCurry ? holders : undefined,
      newHoldersRight = isCurry ? undefined : holders,
      newPartials = isCurry ? partials : undefined,
      newPartialsRight = isCurry ? undefined : partials;

  bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
  bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);

  if (!(bitmask & CURRY_BOUND_FLAG)) {
    bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
  }

  var result = wrapFunc(func, bitmask, thisArg, newPartials, newHolders, newPartialsRight, newHoldersRight, argPos, ary, arity);
  result.placeholder = placeholder;
  return setWrapToString(result, func, bitmask);
}

/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags.
 *  The bitmask may be composed of the following flags:
 *     1 - `_.bind`
 *     2 - `_.bindKey`
 *     4 - `_.curry` or `_.curryRight` of a bound function
 *     8 - `_.curry`
 *    16 - `_.curryRight`
 *    32 - `_.partial`
 *    64 - `_.partialRight`
 *   128 - `_.rearg`
 *   256 - `_.ary`
 *   512 - `_.flip`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & BIND_KEY_FLAG;
  if (!isBindKey && typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
    partials = holders = undefined;
  }
  ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
  arity = arity === undefined ? arity : toInteger(arity);
  length -= holders ? holders.length : 0;

  if (bitmask & PARTIAL_RIGHT_FLAG) {
    var partialsRight = partials,
        holdersRight = holders;

    partials = holders = undefined;
  }

  var newData = [
    func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
    argPos, ary, arity
  ];

  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] == null
    ? (isBindKey ? 0 : func.length)
    : nativeMax(newData[9] - length, 0);

  if (!arity && bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG)) {
    bitmask &= ~(CURRY_FLAG | CURRY_RIGHT_FLAG);
  }
  if (!bitmask || bitmask == BIND_FLAG) {
    var result = createBind(func, bitmask, thisArg);
  } else if (bitmask == CURRY_FLAG || bitmask == CURRY_RIGHT_FLAG) {
    result = createCurry(func, bitmask, arity);
  } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !holders.length) {
    result = createPartial(func, bitmask, thisArg, partials);
  } else {
    result = createHybrid.apply(undefined, newData);
  }
  return setWrapToString(result, func, bitmask);
}

/**
 * Gets the argument placeholder value for `func`.
 *
 * @private
 * @param {Function} func The function to inspect.
 * @returns {*} Returns the placeholder value.
 */
function getHolder(func) {
  var object = func;
  return object.placeholder;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Extracts wrapper details from the `source` body comment.
 *
 * @private
 * @param {string} source The source to inspect.
 * @returns {Array} Returns the wrapper details.
 */
function getWrapDetails(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}

/**
 * Inserts wrapper `details` in a comment at the top of the `source` body.
 *
 * @private
 * @param {string} source The source to modify.
 * @returns {Array} details The details to insert.
 * @returns {string} Returns the modified source.
 */
function insertWrapDetails(source, details) {
  var length = details.length,
      lastIndex = length - 1;

  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
  details = details.join(length > 2 ? ', ' : ' ');
  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */
function reorder(array, indexes) {
  var arrLength = array.length,
      length = nativeMin(indexes.length, arrLength),
      oldArray = copyArray(array);

  while (length--) {
    var index = indexes[length];
    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
  }
  return array;
}

/**
 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
 * with wrapper details in a comment at the top of the source body.
 *
 * @private
 * @param {Function} wrapper The function to modify.
 * @param {Function} reference The reference function.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Function} Returns `wrapper`.
 */
var setWrapToString = !defineProperty ? identity : function(wrapper, reference, bitmask) {
  var source = (reference + '');
  return defineProperty(wrapper, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)))
  });
};

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */
function updateWrapDetails(details, bitmask) {
  arrayEach(wrapFlags, function(pair) {
    var value = '_.' + pair[0];
    if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}

/**
 * Creates a function that accepts arguments of `func` and either invokes
 * `func` returning its result, if at least `arity` number of arguments have
 * been provided, or returns a function that accepts the remaining `func`
 * arguments, and so on. The arity of `func` may be specified if `func.length`
 * is not sufficient.
 *
 * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for provided arguments.
 *
 * **Note:** This method doesn't set the "length" property of curried functions.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Function
 * @param {Function} func The function to curry.
 * @param {number} [arity=func.length] The arity of `func`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the new curried function.
 * @example
 *
 * var abc = function(a, b, c) {
 *   return [a, b, c];
 * };
 *
 * var curried = _.curry(abc);
 *
 * curried(1)(2)(3);
 * // => [1, 2, 3]
 *
 * curried(1, 2)(3);
 * // => [1, 2, 3]
 *
 * curried(1, 2, 3);
 * // => [1, 2, 3]
 *
 * // Curried with placeholders.
 * curried(1)(_, 3)(2);
 * // => [1, 2, 3]
 */
function curry(func, arity, guard) {
  arity = guard ? undefined : arity;
  var result = createWrap(func, CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
  result.placeholder = curry.placeholder;
  return result;
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

// Assign default placeholders.
curry.placeholder = {};

module.exports = curry;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(137)))

/***/ }),
/* 636 */
/***/ (function(module, exports, __webpack_require__) {

var clamp = __webpack_require__(351);

function componentToHex(c) {
  var value = Math.round(clamp(c, 0, 255));
  var hex   = value.toString(16);

  return hex.length == 1 ? "0" + hex : hex;
}

function rgb2hex(rgb) {
  var alpha = rgb.length === 4 ? componentToHex(rgb[3] * 255) : "";

  return "#" + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]) + alpha;
}

module.exports = rgb2hex;

/***/ }),
/* 637 */
/***/ (function(module, exports, __webpack_require__) {

var hsl = __webpack_require__(638);
var hex = __webpack_require__(639);
var rgb = __webpack_require__(640);
var hsl2rgb = __webpack_require__(641);

function hsl2rgbParse(color) {
  var h = hsl(color);
  var r = hsl2rgb(h);

  // handle alpha since hsl2rgb doesn't know (or care!) about it
  if(h.length === 4) {
    r.push(h[3]);
  }

  return r;
}

var space2parser = {
  "#" : hex,
  "hsl" : hsl2rgbParse,
  "rgb" : rgb
};

function parse(color) {
  for(var scheme in space2parser) {
    if(color.indexOf(scheme) === 0) {
      return space2parser[scheme](color);
    }
  }
}

parse.rgb = rgb;
parse.hsl = hsl;
parse.hex = hex;

module.exports = parse;

/***/ }),
/* 638 */
/***/ (function(module, exports, __webpack_require__) {

var extractComponents = __webpack_require__(416);
var clamp = __webpack_require__(351);

function parseHslComponent(component, i) {
  component = parseFloat(component);

  switch(i) {
    case 0:
      return clamp(component, 0, 360);
    case 1:
    case 2:
      return clamp(component, 0, 100);
    case 3:
      return clamp(component, 0, 1);
  }
}

function hsl(color) {
  return extractComponents(color).map(parseHslComponent);
}

module.exports = hsl;

/***/ }),
/* 639 */
/***/ (function(module, exports) {

function expand(hex) {
  var result = "#";

  for (var i = 1; i < hex.length; i++) {
    var val = hex.charAt(i);
    result += val + val;
  }

  return result;
}

function hex(hex) {
  // #RGB or #RGBA
  if(hex.length === 4 || hex.length === 5) {
    hex = expand(hex);
  }

  var rgb = [
    parseInt(hex.substring(1,3), 16),
    parseInt(hex.substring(3,5), 16),
    parseInt(hex.substring(5,7), 16)
  ];

  // #RRGGBBAA
  if (hex.length === 9) {
    var alpha = parseFloat((parseInt(hex.substring(7,9), 16) / 255).toFixed(2));
    rgb.push(alpha);
  }

  return rgb;
}

module.exports = hex;

/***/ }),
/* 640 */
/***/ (function(module, exports, __webpack_require__) {

var extractComponents = __webpack_require__(416);
var clamp = __webpack_require__(351);

function parseRgbComponent(component, i) {
  if (i < 3) {
    if (component.indexOf('%') != -1) {
      return Math.round(255 * clamp(parseInt(component, 10), 0, 100)/100);
    } else {
      return clamp(parseInt(component, 10), 0, 255);
    }
  } else {
    return clamp(parseFloat(component), 0, 1);
  } 
}

function rgb(color) {
  return extractComponents(color).map(parseRgbComponent);
}

module.exports = rgb;

/***/ }),
/* 641 */
/***/ (function(module, exports) {

function hsl2rgb(hsl) {
  var h = hsl[0] / 360,
      s = hsl[1] / 100,
      l = hsl[2] / 100,
      t1, t2, t3, rgb, val;

  if (s == 0) {
    val = l * 255;
    return [val, val, val];
  }

  if (l < 0.5)
    t2 = l * (1 + s);
  else
    t2 = l + s - l * s;
  t1 = 2 * l - t2;

  rgb = [0, 0, 0];
  for (var i = 0; i < 3; i++) {
    t3 = h + 1 / 3 * - (i - 1);
    t3 < 0 && t3++;
    t3 > 1 && t3--;

    if (6 * t3 < 1)
      val = t1 + (t2 - t1) * 6 * t3;
    else if (2 * t3 < 1)
      val = t2;
    else if (3 * t3 < 2)
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    else
      val = t1;

    rgb[i] = val * 255;
  }

  return rgb;
}

module.exports = hsl2rgb;

/***/ }),
/* 642 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Creates a `_.flow` or `_.flowRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new flow function.
 */
function createFlow(fromRight) {
  return baseRest(function(funcs) {
    funcs = baseFlatten(funcs, 1);

    var length = funcs.length,
        index = length;

    if (fromRight) {
      funcs.reverse();
    }
    while (index--) {
      if (typeof funcs[index] != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
    }
    return function() {
      var index = 0,
          result = length ? funcs[index].apply(this, arguments) : arguments[0];

      while (++index < length) {
        result = funcs[index].call(this, result);
      }
      return result;
    };
  });
}

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates a function that returns the result of invoking the given functions
 * with the `this` binding of the created function, where each successive
 * invocation is supplied the return value of the previous.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Util
 * @param {...(Function|Function[])} [funcs] The functions to invoke.
 * @returns {Function} Returns the new composite function.
 * @see _.flowRight
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var addSquare = _.flow([_.add, square]);
 * addSquare(1, 2);
 * // => 9
 */
var flow = createFlow();

module.exports = flow;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(137)))

/***/ }),
/* 643 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.yuv2rgb = yuv2rgb;
exports.rgb2yuv = rgb2yuv;
function yuv2rgb(yuv) {
  var y = yuv[0],
      u = yuv[1],
      v = yuv[2],
      r,
      g,
      b;

  r = y * 1 + u * 0 + v * 1.13983;
  g = y * 1 + u * -0.39465 + v * -0.58060;
  b = y * 1 + u * 2.02311 + v * 0;

  r = Math.min(Math.max(0, r), 1);
  g = Math.min(Math.max(0, g), 1);
  b = Math.min(Math.max(0, b), 1);

  return [r * 255, g * 255, b * 255];
}

function rgb2yuv(rgb) {
  var r = rgb[0] / 255,
      g = rgb[1] / 255,
      b = rgb[2] / 255;

  var y = r * 0.299 + g * 0.587 + b * 0.114;
  var u = r * -0.14713 + g * -0.28886 + b * 0.436;
  var v = r * 0.615 + g * -0.51499 + b * -0.10001;

  return [y, u, v];
};

/***/ }),
/* 644 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'solarized',
  author: 'ethan schoonover (http://ethanschoonover.com/solarized)',
  base00: '#002b36',
  base01: '#073642',
  base02: '#586e75',
  base03: '#657b83',
  base04: '#839496',
  base05: '#93a1a1',
  base06: '#eee8d5',
  base07: '#fdf6e3',
  base08: '#dc322f',
  base09: '#cb4b16',
  base0A: '#b58900',
  base0B: '#859900',
  base0C: '#2aa198',
  base0D: '#268bd2',
  base0E: '#6c71c4',
  base0F: '#d33682'
};

/***/ }),
/* 645 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactJsonTree = __webpack_require__(410);

var _reactJsonTree2 = _interopRequireDefault(_reactJsonTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  actionBar: {
    paddingTop: 8,
    paddingBottom: 7,
    paddingLeft: 16
  },
  payload: {
    margin: 0,
    paddingLeft: 16,
    overflow: 'auto'
  }
};

var LogMonitorAction = function (_Component) {
  _inherits(LogMonitorAction, _Component);

  function LogMonitorAction(props) {
    _classCallCheck(this, LogMonitorAction);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.shouldExpandNode = _this.shouldExpandNode.bind(_this);
    return _this;
  }

  LogMonitorAction.prototype.renderPayload = function renderPayload(payload) {
    return _react2.default.createElement(
      'div',
      { style: _extends({}, styles.payload, {
          backgroundColor: this.props.theme.base00
        }) },
      Object.keys(payload).length > 0 ? _react2.default.createElement(_reactJsonTree2.default, { theme: this.props.theme,
        invertTheme: false,
        keyPath: ['action'],
        data: payload,
        shouldExpandNode: this.shouldExpandNode }) : ''
    );
  };

  LogMonitorAction.prototype.shouldExpandNode = function shouldExpandNode(keyName, data, level) {
    return this.props.expandActionRoot && level === 0;
  };

  LogMonitorAction.prototype.render = function render() {
    var _props$action = this.props.action;
    var type = _props$action.type;

    var payload = _objectWithoutProperties(_props$action, ['type']);

    return _react2.default.createElement(
      'div',
      { style: _extends({
          backgroundColor: this.props.theme.base02,
          color: this.props.theme.base06
        }, this.props.style) },
      _react2.default.createElement(
        'div',
        { style: styles.actionBar,
          onClick: this.props.onClick },
        type !== null && type.toString()
      ),
      !this.props.collapsed ? this.renderPayload(payload) : ''
    );
  };

  return LogMonitorAction;
}(_react.Component);

exports.default = LogMonitorAction;

/***/ }),
/* 646 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(137)))

/***/ }),
/* 647 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _DockMonitor = __webpack_require__(648);

var _DockMonitor2 = _interopRequireDefault(_DockMonitor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _DockMonitor2.default;

/***/ }),
/* 648 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDock = __webpack_require__(649);

var _reactDock2 = _interopRequireDefault(_reactDock);

var _constants = __webpack_require__(417);

var _actions = __webpack_require__(418);

var _reducers = __webpack_require__(654);

var _reducers2 = _interopRequireDefault(_reducers);

var _parseKey = __webpack_require__(655);

var _parseKey2 = _interopRequireDefault(_parseKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DockMonitor = function (_Component) {
  _inherits(DockMonitor, _Component);

  function DockMonitor(props) {
    _classCallCheck(this, DockMonitor);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleSizeChange = _this.handleSizeChange.bind(_this);

    var childrenCount = _react.Children.count(props.children);
    if (childrenCount === 0) {
      console.error('<DockMonitor> requires at least one monitor inside. ' + 'Why don’t you try <LogMonitor>? You can get it at ' + 'https://github.com/gaearon/redux-devtools-log-monitor.');
    } else if (childrenCount > 1 && !props.changeMonitorKey) {
      console.error('You specified multiple monitors inside <DockMonitor> ' + 'but did not provide `changeMonitorKey` prop to change them. ' + 'Try specifying <DockMonitor changeMonitorKey="ctrl-m" /> ' + 'and then press Ctrl-M.');
    }
    return _this;
  }

  DockMonitor.prototype.componentDidMount = function componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  };

  DockMonitor.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  };

  DockMonitor.prototype.matchesKey = function matchesKey(key, event) {
    if (!key) {
      return false;
    }

    var charCode = event.keyCode || event.which;
    var char = String.fromCharCode(charCode);
    return key.name.toUpperCase() === char.toUpperCase() && key.alt === event.altKey && key.ctrl === event.ctrlKey && key.meta === event.metaKey && key.shift === event.shiftKey;
  };

  DockMonitor.prototype.handleKeyDown = function handleKeyDown(e) {
    // Ignore regular keys when focused on a field
    // and no modifiers are active.
    if (!e.ctrlKey && !e.metaKey && !e.altKey && (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable)) {
      return;
    }

    var visibilityKey = (0, _parseKey2.default)(this.props.toggleVisibilityKey);
    var positionKey = (0, _parseKey2.default)(this.props.changePositionKey);

    var monitorKey = void 0;
    if (this.props.changeMonitorKey) {
      monitorKey = (0, _parseKey2.default)(this.props.changeMonitorKey);
    }

    if (this.matchesKey(visibilityKey, e)) {
      e.preventDefault();
      this.props.dispatch((0, _actions.toggleVisibility)());
    } else if (this.matchesKey(positionKey, e)) {
      e.preventDefault();
      this.props.dispatch((0, _actions.changePosition)());
    } else if (this.matchesKey(monitorKey, e)) {
      e.preventDefault();
      this.props.dispatch((0, _actions.changeMonitor)());
    }
  };

  DockMonitor.prototype.handleSizeChange = function handleSizeChange(requestedSize) {
    this.props.dispatch((0, _actions.changeSize)(requestedSize));
  };

  DockMonitor.prototype.renderChild = function renderChild(child, index, otherProps) {
    var monitorState = this.props.monitorState;
    var childMonitorIndex = monitorState.childMonitorIndex,
        childMonitorStates = monitorState.childMonitorStates;


    if (index !== childMonitorIndex) {
      return null;
    }

    return (0, _react.cloneElement)(child, _extends({
      monitorState: childMonitorStates[index]
    }, otherProps));
  };

  DockMonitor.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        monitorState = _props.monitorState,
        children = _props.children,
        fluid = _props.fluid,
        rest = _objectWithoutProperties(_props, ['monitorState', 'children', 'fluid']);

    var position = monitorState.position,
        isVisible = monitorState.isVisible,
        size = monitorState.size;


    return _react2.default.createElement(
      _reactDock2.default,
      { position: position,
        isVisible: isVisible,
        size: size,
        fluid: fluid,
        onSizeChange: this.handleSizeChange,
        dimMode: 'none' },
      _react.Children.map(children, function (child, index) {
        return _this2.renderChild(child, index, rest);
      })
    );
  };

  return DockMonitor;
}(_react.Component);

DockMonitor.update = _reducers2.default;
DockMonitor.propTypes = {
  defaultPosition: _propTypes2.default.oneOf(_constants.POSITIONS),
  defaultIsVisible: _propTypes2.default.bool.isRequired,
  defaultSize: _propTypes2.default.number.isRequired,
  toggleVisibilityKey: _propTypes2.default.string.isRequired,
  changePositionKey: _propTypes2.default.string.isRequired,
  changeMonitorKey: _propTypes2.default.string,
  fluid: _propTypes2.default.bool,

  dispatch: _propTypes2.default.func,
  monitorState: _propTypes2.default.shape({
    position: _propTypes2.default.oneOf(_constants.POSITIONS).isRequired,
    size: _propTypes2.default.number.isRequired,
    isVisible: _propTypes2.default.bool.isRequired,
    childMonitorState: _propTypes2.default.any
  })
};
DockMonitor.defaultProps = {
  defaultIsVisible: true,
  defaultPosition: 'right',
  defaultSize: 0.3,
  fluid: true
};
exports.default = DockMonitor;

/***/ }),
/* 649 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Dock = __webpack_require__(650);

var _Dock2 = _interopRequireDefault(_Dock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Dock2.default;

/***/ }),
/* 650 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = __webpack_require__(651);

var _lodash2 = _interopRequireDefault(_lodash);

var _autoprefix = __webpack_require__(653);

var _autoprefix2 = _interopRequireDefault(_autoprefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function autoprefixes(styles) {
  return Object.keys(styles).reduce(function (obj, key) {
    return obj[key] = (0, _autoprefix2.default)(styles[key]), obj;
  }, {});
}

var styles = autoprefixes({
  wrapper: {
    position: 'fixed',
    width: 0,
    height: 0,
    top: 0,
    left: 0
  },

  dim: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 0,
    background: 'rgba(0, 0, 0, 0.2)',
    opacity: 1
  },

  dimAppear: {
    opacity: 0
  },

  dimTransparent: {
    pointerEvents: 'none'
  },

  dimHidden: {
    opacity: 0
  },

  dock: {
    position: 'fixed',
    zIndex: 1,
    boxShadow: '0 0 4px rgba(0, 0, 0, 0.3)',
    background: 'white',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
  },

  dockHidden: {
    opacity: 0
  },

  dockResizing: {
    transition: 'none'
  },

  dockContent: {
    width: '100%',
    height: '100%',
    overflow: 'auto'
  },

  resizer: {
    position: 'absolute',
    zIndex: 2,
    opacity: 0
  }
});

function getTransitions(duration) {
  return ['left', 'top', 'width', 'height'].map(function (p) {
    return p + ' ' + duration / 1000 + 's ease-out';
  });
}

function getDockStyles(_ref, _ref2) {
  var fluid = _ref.fluid;
  var dockStyle = _ref.dockStyle;
  var dockHiddenStyle = _ref.dockHiddenStyle;
  var duration = _ref.duration;
  var position = _ref.position;
  var isVisible = _ref.isVisible;
  var size = _ref2.size;
  var isResizing = _ref2.isResizing;
  var fullWidth = _ref2.fullWidth;
  var fullHeight = _ref2.fullHeight;

  var posStyle = void 0;
  var absSize = fluid ? size * 100 + '%' : size + 'px';

  function getRestSize(fullSize) {
    return fluid ? 100 - size * 100 + '%' : fullSize - size + 'px';
  }

  switch (position) {
    case 'left':
      posStyle = {
        width: absSize,
        left: isVisible ? 0 : '-' + absSize
      };
      break;
    case 'right':
      posStyle = {
        left: isVisible ? getRestSize(fullWidth) : fullWidth,
        width: absSize
      };
      break;
    case 'top':
      posStyle = {
        top: isVisible ? 0 : '-' + absSize,
        height: absSize
      };
      break;
    case 'bottom':
      posStyle = {
        top: isVisible ? getRestSize(fullHeight) : fullHeight,
        height: absSize
      };
      break;
  }

  var transitions = getTransitions(duration);

  return [styles.dock, (0, _autoprefix2.default)({
    transition: [].concat(_toConsumableArray(transitions), [!isVisible && 'opacity 0.01s linear ' + duration / 1000 + 's']).filter(function (t) {
      return t;
    }).join(',')
  }), dockStyle, (0, _autoprefix2.default)(posStyle), isResizing && styles.dockResizing, !isVisible && styles.dockHidden, !isVisible && dockHiddenStyle];
}

function getDimStyles(_ref3, _ref4) {
  var dimMode = _ref3.dimMode;
  var dimStyle = _ref3.dimStyle;
  var duration = _ref3.duration;
  var isVisible = _ref3.isVisible;
  var isTransitionStarted = _ref4.isTransitionStarted;

  return [styles.dim, (0, _autoprefix2.default)({
    transition: 'opacity ' + duration / 1000 + 's ease-out'
  }), dimStyle, dimMode === 'transparent' && styles.dimTransparent, !isVisible && styles.dimHidden, isTransitionStarted && isVisible && styles.dimAppear, isTransitionStarted && !isVisible && styles.dimDisappear];
}

function getResizerStyles(position) {
  var resizerStyle = void 0;
  var size = 10;

  switch (position) {
    case 'left':
      resizerStyle = {
        right: -size / 2,
        width: size,
        top: 0,
        height: '100%',
        cursor: 'col-resize'
      };
      break;
    case 'right':
      resizerStyle = {
        left: -size / 2,
        width: size,
        top: 0,
        height: '100%',
        cursor: 'col-resize'
      };
      break;
    case 'top':
      resizerStyle = {
        bottom: -size / 2,
        height: size,
        left: 0,
        width: '100%',
        cursor: 'row-resize'
      };
      break;
    case 'bottom':
      resizerStyle = {
        top: -size / 2,
        height: size,
        left: 0,
        width: '100%',
        cursor: 'row-resize'
      };
      break;
  }

  return [styles.resizer, (0, _autoprefix2.default)(resizerStyle)];
}

function getFullSize(position, fullWidth, fullHeight) {
  return position === 'left' || position === 'right' ? fullWidth : fullHeight;
}

var Dock = (_temp = _class = function (_Component) {
  _inherits(Dock, _Component);

  function Dock(props) {
    _classCallCheck(this, Dock);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dock).call(this, props));

    _this.transitionEnd = function () {
      _this.setState({ isTransitionStarted: false });
    };

    _this.hideDim = function () {
      if (!_this.props.isVisible) {
        _this.setState({ isDimHidden: true });
      }
    };

    _this.handleDimClick = function () {
      if (_this.props.dimMode === 'opaque') {
        _this.props.onVisibleChange && _this.props.onVisibleChange(false);
      }
    };

    _this.handleResize = function () {
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(_this.updateWindowSize.bind(_this, true));
      } else {
        _this.updateWindowSize(true);
      }
    };

    _this.updateWindowSize = function (windowResize) {
      var sizeState = {
        fullWidth: window.innerWidth,
        fullHeight: window.innerHeight
      };

      if (windowResize) {
        _this.setState(_extends({}, sizeState, {
          isResizing: true,
          isWindowResizing: windowResize
        }));

        _this.debouncedUpdateWindowSizeEnd();
      } else {
        _this.setState(sizeState);
      }
    };

    _this.updateWindowSizeEnd = function () {
      _this.setState({
        isResizing: false,
        isWindowResizing: false
      });
    };

    _this.debouncedUpdateWindowSizeEnd = (0, _lodash2.default)(_this.updateWindowSizeEnd, 30);

    _this.handleWrapperLeave = function () {
      _this.setState({ isResizing: false });
    };

    _this.handleMouseDown = function () {
      _this.setState({ isResizing: true });
    };

    _this.handleMouseUp = function () {
      _this.setState({ isResizing: false });
    };

    _this.handleMouseMove = function (e) {
      if (!_this.state.isResizing || _this.state.isWindowResizing) return;
      e.preventDefault();

      var _this$props = _this.props;
      var position = _this$props.position;
      var fluid = _this$props.fluid;
      var _this$state = _this.state;
      var fullWidth = _this$state.fullWidth;
      var fullHeight = _this$state.fullHeight;
      var isControlled = _this$state.isControlled;
      var x = e.clientX;
      var y = e.clientY;

      var size = void 0;

      switch (position) {
        case 'left':
          size = fluid ? x / fullWidth : x;
          break;
        case 'right':
          size = fluid ? (fullWidth - x) / fullWidth : fullWidth - x;
          break;
        case 'top':
          size = fluid ? y / fullHeight : y;
          break;
        case 'bottom':
          size = fluid ? (fullHeight - y) / fullHeight : fullHeight - y;
          break;
      }

      _this.props.onSizeChange && _this.props.onSizeChange(size);

      if (!isControlled) {
        _this.setState({ size: size });
      }
    };

    _this.state = {
      isControlled: typeof props.size !== 'undefined',
      size: props.size || props.defaultSize,
      isDimHidden: !props.isVisible,
      fullWidth: typeof window !== 'undefined' && window.innerWidth,
      fullHeight: typeof window !== 'undefined' && window.innerHeight,
      isTransitionStarted: false,
      isWindowResizing: false
    };
    return _this;
  }

  _createClass(Dock, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('mouseup', this.handleMouseUp);
      window.addEventListener('mousemove', this.handleMouseMove);
      window.addEventListener('resize', this.handleResize);

      if (!window.fullWidth) {
        this.updateWindowSize();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('mouseup', this.handleMouseUp);
      window.removeEventListener('mousemove', this.handleMouseMove);
      window.removeEventListener('resize', this.handleResize);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var isControlled = typeof nextProps.size !== 'undefined';

      this.setState({ isControlled: isControlled });

      if (isControlled && this.props.size !== nextProps.size) {
        this.setState({ size: nextProps.size });
      } else if (this.props.fluid !== nextProps.fluid) {
        this.updateSize(nextProps);
      }

      if (this.props.isVisible !== nextProps.isVisible) {
        this.setState({
          isTransitionStarted: true
        });
      }
    }
  }, {
    key: 'updateSize',
    value: function updateSize(props) {
      var _state = this.state;
      var fullWidth = _state.fullWidth;
      var fullHeight = _state.fullHeight;


      this.setState({
        size: props.fluid ? this.state.size / getFullSize(props.position, fullWidth, fullHeight) : getFullSize(props.position, fullWidth, fullHeight) * this.state.size
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (this.props.isVisible !== prevProps.isVisible) {
        if (!this.props.isVisible) {
          window.setTimeout(function () {
            return _this2.hideDim();
          }, this.props.duration);
        } else {
          this.setState({ isDimHidden: false });
        }

        window.setTimeout(function () {
          return _this2.setState({ isTransitionStarted: false });
        }, 0);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var zIndex = _props.zIndex;
      var dimMode = _props.dimMode;
      var position = _props.position;
      var isVisible = _props.isVisible;
      var _state2 = this.state;
      var isResizing = _state2.isResizing;
      var size = _state2.size;
      var isDimHidden = _state2.isDimHidden;


      var dimStyles = Object.assign.apply(Object, [{}].concat(_toConsumableArray(getDimStyles(this.props, this.state))));
      var dockStyles = Object.assign.apply(Object, [{}].concat(_toConsumableArray(getDockStyles(this.props, this.state))));
      var resizerStyles = Object.assign.apply(Object, [{}].concat(_toConsumableArray(getResizerStyles(position))));

      return _react2.default.createElement(
        'div',
        { style: Object.assign({}, styles.wrapper, { zIndex: zIndex }) },
        dimMode !== 'none' && !isDimHidden && _react2.default.createElement('div', { style: dimStyles, onClick: this.handleDimClick }),
        _react2.default.createElement(
          'div',
          { style: dockStyles },
          _react2.default.createElement('div', { style: resizerStyles,
            onMouseDown: this.handleMouseDown }),
          _react2.default.createElement(
            'div',
            { style: styles.dockContent },
            typeof children === 'function' ? children({
              position: position,
              isResizing: isResizing,
              size: size,
              isVisible: isVisible
            }) : children
          )
        )
      );
    }
  }]);

  return Dock;
}(_react.Component), _class.propTypes = {
  position: _propTypes2.default.oneOf(['left', 'right', 'top', 'bottom']),
  zIndex: _propTypes2.default.number,
  fluid: _propTypes2.default.bool,
  size: _propTypes2.default.number,
  defaultSize: _propTypes2.default.number,
  dimMode: _propTypes2.default.oneOf(['none', 'transparent', 'opaque']),
  isVisible: _propTypes2.default.bool,
  onVisibleChange: _propTypes2.default.func,
  onSizeChange: _propTypes2.default.func,
  dimStyle: _propTypes2.default.object,
  dockStyle: _propTypes2.default.object,
  duration: _propTypes2.default.number
}, _class.defaultProps = {
  position: 'left',
  zIndex: 99999999,
  fluid: true,
  defaultSize: 0.3,
  dimMode: 'opaque',
  duration: 200
}, _temp);
exports.default = Dock;

/***/ }),
/* 651 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * lodash 3.1.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var getNative = __webpack_require__(652);

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeNow = getNative(Date, 'now');

/**
 * Gets the number of milliseconds that have elapsed since the Unix epoch
 * (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @category Date
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => logs the number of milliseconds it took for the deferred function to be invoked
 */
var now = nativeNow || function() {
  return new Date().getTime();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed invocations. Provide an options object to indicate that `func`
 * should be invoked on the leading and/or trailing edge of the `wait` timeout.
 * Subsequent calls to the debounced function return the result of the last
 * `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
 * on the trailing edge of the timeout only if the the debounced function is
 * invoked more than once during the `wait` timeout.
 *
 * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options] The options object.
 * @param {boolean} [options.leading=false] Specify invoking on the leading
 *  edge of the timeout.
 * @param {number} [options.maxWait] The maximum time `func` is allowed to be
 *  delayed before it is invoked.
 * @param {boolean} [options.trailing=true] Specify invoking on the trailing
 *  edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // avoid costly calculations while the window size is in flux
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
 * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // ensure `batchLog` is invoked once after 1 second of debounced calls
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', _.debounce(batchLog, 250, {
 *   'maxWait': 1000
 * }));
 *
 * // cancel a debounced call
 * var todoChanges = _.debounce(batchLog, 1000);
 * Object.observe(models.todo, todoChanges);
 *
 * Object.observe(models, function(changes) {
 *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
 *     todoChanges.cancel();
 *   }
 * }, ['delete']);
 *
 * // ...at some point `models.todo` is changed
 * models.todo.completed = true;
 *
 * // ...before 1 second has passed `models.todo` is deleted
 * // which cancels the debounced `todoChanges` call
 * delete models.todo;
 */
function debounce(func, wait, options) {
  var args,
      maxTimeoutId,
      result,
      stamp,
      thisArg,
      timeoutId,
      trailingCall,
      lastCalled = 0,
      maxWait = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = wait < 0 ? 0 : (+wait || 0);
  if (options === true) {
    var leading = true;
    trailing = false;
  } else if (isObject(options)) {
    leading = !!options.leading;
    maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function cancel() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (maxTimeoutId) {
      clearTimeout(maxTimeoutId);
    }
    lastCalled = 0;
    maxTimeoutId = timeoutId = trailingCall = undefined;
  }

  function complete(isCalled, id) {
    if (id) {
      clearTimeout(id);
    }
    maxTimeoutId = timeoutId = trailingCall = undefined;
    if (isCalled) {
      lastCalled = now();
      result = func.apply(thisArg, args);
      if (!timeoutId && !maxTimeoutId) {
        args = thisArg = undefined;
      }
    }
  }

  function delayed() {
    var remaining = wait - (now() - stamp);
    if (remaining <= 0 || remaining > wait) {
      complete(trailingCall, maxTimeoutId);
    } else {
      timeoutId = setTimeout(delayed, remaining);
    }
  }

  function maxDelayed() {
    complete(trailing, timeoutId);
  }

  function debounced() {
    args = arguments;
    stamp = now();
    thisArg = this;
    trailingCall = trailing && (timeoutId || !leading);

    if (maxWait === false) {
      var leadingCall = leading && !timeoutId;
    } else {
      if (!maxTimeoutId && !leading) {
        lastCalled = stamp;
      }
      var remaining = maxWait - (stamp - lastCalled),
          isCalled = remaining <= 0 || remaining > maxWait;

      if (isCalled) {
        if (maxTimeoutId) {
          maxTimeoutId = clearTimeout(maxTimeoutId);
        }
        lastCalled = stamp;
        result = func.apply(thisArg, args);
      }
      else if (!maxTimeoutId) {
        maxTimeoutId = setTimeout(maxDelayed, remaining);
      }
    }
    if (isCalled && timeoutId) {
      timeoutId = clearTimeout(timeoutId);
    }
    else if (!timeoutId && wait !== maxWait) {
      timeoutId = setTimeout(delayed, wait);
    }
    if (leadingCall) {
      isCalled = true;
      result = func.apply(thisArg, args);
    }
    if (isCalled && !timeoutId && !maxTimeoutId) {
      args = thisArg = undefined;
    }
    return result;
  }
  debounced.cancel = cancel;
  return debounced;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = debounce;


/***/ }),
/* 652 */
/***/ (function(module, exports) {

/**
 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var funcTag = '[object Function]';

/** Used to detect host constructors (Safari > 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 equivalents which return 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) == funcTag;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (isFunction(value)) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) && reIsHostCtor.test(value);
}

module.exports = getNative;


/***/ }),
/* 653 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = autoprefix;
// Same as https://github.com/SimenB/react-vendor-prefixes/blob/master/src/index.js,
// but dumber

var vendorSpecificProperties = ['animation', 'animationDelay', 'animationDirection', 'animationDuration', 'animationFillMode', 'animationIterationCount', 'animationName', 'animationPlayState', 'animationTimingFunction', 'appearance', 'backfaceVisibility', 'backgroundClip', 'borderImage', 'borderImageSlice', 'boxSizing', 'boxShadow', 'contentColumns', 'transform', 'transformOrigin', 'transformStyle', 'transition', 'transitionDelay', 'transitionDuration', 'transitionProperty', 'transitionTimingFunction', 'perspective', 'perspectiveOrigin', 'userSelect'];

var prefixes = ['Moz', 'Webkit', 'ms', 'O'];

function prefixProp(key, value) {
  return prefixes.reduce(function (obj, pre) {
    return obj[pre + key[0].toUpperCase() + key.substr(1)] = value, obj;
  }, {});
}

function autoprefix(style) {
  return Object.keys(style).reduce(function (obj, key) {
    return vendorSpecificProperties.indexOf(key) !== -1 ? _extends({}, obj, prefixProp(key, style[key])) : obj;
  }, style);
}

/***/ }),
/* 654 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = reducer;

var _actions = __webpack_require__(418);

var _constants = __webpack_require__(417);

var _react = __webpack_require__(0);

function position(props) {
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : props.defaultPosition;
  var action = arguments[2];

  return action.type === _actions.CHANGE_POSITION ? _constants.POSITIONS[(_constants.POSITIONS.indexOf(state) + 1) % _constants.POSITIONS.length] : state;
}

function size(props) {
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : props.defaultSize;
  var action = arguments[2];

  return action.type === _actions.CHANGE_SIZE ? action.size : state;
}

function isVisible(props) {
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : props.defaultIsVisible;
  var action = arguments[2];

  return action.type === _actions.TOGGLE_VISIBILITY ? !state : state;
}

function childMonitorStates(props) {
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var action = arguments[2];

  return _react.Children.map(props.children, function (child, index) {
    return child.type.update(child.props, state[index], action);
  });
}

function childMonitorIndex(props) {
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var action = arguments[2];

  switch (action.type) {
    case _actions.CHANGE_MONITOR:
      return (state + 1) % _react.Children.count(props.children);
    default:
      return state;
  }
}

function reducer(props) {
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var action = arguments[2];

  if (!state.childMonitorStates) {
    _react.Children.forEach(props.children, function (child, index) {
      if (typeof child.type.update !== 'function') {
        console.error('Child of <DockMonitor> with the index ' + index + ' ' + ('(' + (child.type.displayName || child.type.name || child.type) + ') ') + 'does not appear to be a valid Redux DevTools monitor.');
      }
    });
  }

  return {
    position: position(props, state.position, action),
    isVisible: isVisible(props, state.isVisible, action),
    size: size(props, state.size, action),
    childMonitorIndex: childMonitorIndex(props, state.childMonitorIndex, action),
    childMonitorStates: childMonitorStates(props, state.childMonitorStates, action)
  };
}

/***/ }),
/* 655 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keycodes = __webpack_require__(656);

function assertKeyString(s) {
  if (!/^(ctrl-|shift-|alt-|meta-){0,4}\w+$/.test(s))
    throw new Error('The string to parse needs to be of the format "c", "ctrl-c", "shift-ctrl-c".');
}

module.exports = function parse(s) {
  var keyString = s.trim().toLowerCase();

  assertKeyString(keyString);

  var key = {
      name     :  undefined
    , ctrl     :  false
    , meta     :  false
    , shift    :  false
    , alt      :  false
    , sequence :  undefined
  }
  , parts = keyString.split('-')
  , c;

  key.name = parts.pop();
  while((c = parts.pop())) key[c] = true;
  key.sequence = key.ctrl 
    ? keycodes.ctrl[key.name] || key.name
    : keycodes.nomod[key.name] || key.name;

  // uppercase sequence for single chars when shift was pressed
  if (key.shift && key.sequence && key.sequence.length === 1)
    key.sequence = key.sequence.toUpperCase();

  return key;
};


/***/ }),
/* 656 */
/***/ (function(module, exports) {

// Most of these are according to this table: http://www.ssicom.org/js/x171166.htm
// However where nodejs readline diverges, they are adjusted to conform to it
module.exports = {
  nomod: {
      escape: '\u001b'
    , space: ' ' // actually '\u0020'
    }
  , ctrl: {
        ' ': '\u0000'
      , 'a': '\u0001'
      , 'b': '\u0002'
      , 'c': '\u0003'
      , 'd': '\u0004'
      , 'e': '\u0005'
      , 'f': '\u0006'
      , 'g': '\u0007'
      , 'h': '\u0008'
      , 'i': '\u0009'
      , 'j': '\u000a'
      , 'k': '\u000b'
      , 'm': '\u000c'
      , 'n': '\u000d'
      , 'l': '\u000e'
      , 'o': '\u000f'
      , 'p': '\u0010'
      , 'q': '\u0011'
      , 'r': '\u0012'
      , 's': '\u0013'
      , 't': '\u0014'
      , 'u': '\u0015'
      , 'v': '\u0016'
      , 'w': '\u0017'
      , 'x': '\u0018'
      , 'y': '\u0019'
      , 'z': '\u001a'
      , '[': '\u001b'
      , '\\':'\u001c'
      , ']': '\u001d'
      , '^': '\u001e'
      , '_': '\u001f'

      , 'space': '\u0000'
    }
};


/***/ })
]));
//# sourceMappingURL=4.2a53febe.chunk.js.map