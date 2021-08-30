var yuxiang_yang = (function () {
  //返回首个提供的参数
  function identity(value) {
    return value
  }
  function bind(f, thisArg, ...fixedArgs) {
    let placeholder = '_'
    return function (...args) {
      let ary = fixedArgs.slice()
      let j = 0
      for (let i = 0; i < ary.length; i++) {
        if (Object.is(ary[i], placeholder)) {
          if (j < args.length) {
            ary[i] = args[j++]
          } else {
            ary[i] = undefined
          }
        }
      }
      while (j < args.length) {
        ary.push(args[j++])
      }
      return f.apply(thisArg, ary)
    }
  }
  //数组分块
  function chunk(array, size = 1) {
    let result = []
    let chunks = Math.trunc(array.length / size)
    for (var i = 0; i < size * chunks; i += size) {
      result.push(array.slice(i, i + size))
    }
    if (i < array.length) result.push(array.slice(i))
    return result
  }
  //去除数组中的false, null, 0, "", undefined,NaN
  function compact(array) {
    return array.filter(item => item != false && item !== undefined && !Number.isNaN(item))
  }
  function concat() {}
  function difference() {}
  function differenceBy() {}
  function differenceWith() {}
  function drop() {}
  function dropRight() {}
  function dropRightWhile() {}
  function dropWhile() {}
  function fill() {}
  function findIndex() {}
  function findLastIndex() {}
  //减少一层 array 的嵌套层级
  function flatten(array) {
    return flattenDepth(array, 1)
  }
  //减少 array 的嵌套层级至零
  function flattenDeep(array) {
    return flattenDepth(array, Infinity)
  }
  //根据 depth 递归减少 array 的嵌套层级
  function flattenDepth(array, depth = 1) {
    if (depth === 0) {
      return array.slice()
    }
    let result = []
    for (let i = 0; i < array.length; i++) {
      let item = array[i]
      if (Array.isArray(item)) {
        item = flattenDepth(item, depth - 1)
        for (let j = 0; j < item.length; j++) {
          result.push(item[j])
        }
      } else {
        result.push(item)
      }
    }
    return result
  }

  function fromPairs() {}
  function head() {}
  function indexOf() {}
  function initial() {}
  function intersection() {}
  function intersectionBy() {}
  function intersectionWith() {}
  function join() {}
  function last() {}
  function lastIndexOf() {}
  function nth() {}
  function pull() {}
  function pullAll() {}
  function pullAllBy() {}
  function pullAllWith() {}
  function pullAt() {}
  function reverse() {}
  function sortedIndex() {}
  function sortedIndexBy() {}
  function sortedIndexOf() {}
  function sortedLastIndex() {}
  function sortedLastIndexBy() {}
  function sortedLastIndexOf() {}
  function sortedUniq() {}
  function sortedUniqBy() {}
  function tail() {}
  function take() {}
  function takeRight() {}
  function takeRightWhile() {}
  function takeWhile() {}
  function union() {}
  function unionBy() {}
  function unionWith() {}
  //数组去重
  function uniq(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      if (!result.includes(array[i])) {
        result.push(array[i])
      }
    }
    return result
  }
  //Todo
  function uniqBy(array, iteratee = identity) {
    let result = []
    let temp = []
    for (let i = 0; i < array.length; i++) {
      if (!temp.includes(iteratee(array[i]))) {
        temp.push(iteratee(array[i]))
        result.push(array[i])
      }
    }
    return result
  }
  function uniqWith() {}
  function unzip() {}
  function unzipWith() {}
  function without() {}
  function xor() {}
  function xorBy() {}
  function xorWith() {}
  function zip() {}
  function zipObject() {}
  function zipObjectDeep() {}
  function zipWith() {}
  function countBy() {}
  function every() {}
  function iteratee(func = identity) {
    if (typeof func === 'function') {
      return func
    }
    if (typeof func === 'string') {
      return property(func)
    }
    if (Array.isArray('string')) {
      return matchesProperty(...func)
    }
    if (typeof iteratee === 'object') {
      return matches(func)
    }
  }
  function filter(collection, predicate) {
    predicate = iteratee(predicate)

    let result = []
    for (let key in collection) {
      if (predicate(collection[i], i, collection) === true) {
        result.push(collection[i])
      }
    }
    return result
  }
  function find() {}
  function findLast() {}
  function flatMap() {}
  function flatMapDeep() {}
  function flatMapDepth() {}
  //遍历数组或对象
  function forEach(collection, iteratee = identity) {
    if (typeof collection === 'array') {
      for (let i = 0; i < collection.length; i++) {
        iteratee(collection[i])
      }
    }
    if (typeof collection === 'object') {
      for (let prop in collection) {
        iteratee(prop)
      }
    }
  }
  //Todo
  function forEachRight(collection, iteratee = identity) {
    if (typeof collection === 'array') {
      for (let i = collection.length - 1; i >= 0; i++) {
        iteratee(collection[i])
      }
    }
    if (typeof collection === 'object') {
      for (let prop in collection) {
        iteratee(prop)
      }
    }
  }
  function groupBy(collection, iteratee = identity) {}
  function includes() {}
  function invokeMap() {}
  function keyBy() {}
  function map(collection, iteratee = identity) {
    iteratee = iteratee(iteratee)

    let result = []
    for (let key in collection) {
      result.push(iteratee(collection[key], collection))
    }
    return result
  }
  function orderBy() {}
  function partition() {}
  function reduce() {}
  function reduceRight() {}
  function reject() {}
  function sample() {}
  function sampleSize() {}
  function shuffle() {}
  function size() {}
  function some() {}
  function sortBy() {}
  function ary() {}
  function curry() {}
  function defer() {}
  function delay() {}
  function flip() {}
  function memoize() {}
  function negate() {}
  function once() {}
  function spread() {}
  function unary() {}
  function castArray() {}
  function cloneDeep() {}
  function conformsTo() {}
  function eq() {}
  function gt() {}
  function gte() {}
  function isArguments() {}
  function isArray() {}
  function isArrayBuffer() {}
  function isArrayLike() {}
  function isArrayLikeObject() {}
  function isBoolean() {}
  function isDate() {}
  function isElement() {}
  function isEmpty() {}
  function isEqual() {}
  function isEqualWith() {}
  function isError() {}
  function isFinite() {}
  function isFunction() {}
  function isInteger() {}
  function isLength() {}
  function isMap() {}
  function isMatch(object, source) {
    if (object == source) {
      return true
    }
    if (typeof object !== 'object' || typeof source !== 'object') {
      return false
    }
    for (let key in source) {
      if (source[key] && typeof source[key] !== 'object') {
        if (object[key] !== source[key]) {
          return false
        }
      } else {
        if (!isMatch(object[key], source[key])) {
          return false
        }
      }
    }
    return true
  }
  function isMatchWith() {}
  function isNaN() {}
  function isNative() {}
  function isNil() {}
  function isNull() {}
  function isNumber() {}
  function isObject() {}
  function isObjectLike() {}
  function isPlainObject() {}
  function isRegExp() {}
  function isSafeInteger() {}
  function isSet() {}
  function isString() {}
  function isSymbol() {}
  function isTypedArray() {}
  function isUndefined() {}
  function isWeakMap() {}
  function isWeakSet() {}
  function lt() {}
  function lte() {}
  function toArray() {}
  function toFinite() {}
  function toInteger() {}
  function toLength() {}
  function toNumber() {}
  function assign() {}
  function at() {}
  function toSafeInteger() {}
  function add() {}
  function ceil() {}
  function divide() {}
  function floor() {}
  function max() {}
  function maxBy() {}
  function mean() {}
  function meanBy() {}
  function min() {}
  function minBy() {}
  function multiply() {}
  function round() {}
  function subtract() {}
  function sum(ary) {
    return sumBy(ary)
  }
  function sumBy(ary, predicate = identity) {
    predicate = iteratee(predicate)
    let sum = 0
    for (let item of ary) {
      sum += predicate(ary[i])
    }
    return sum
  }
  function clamp() {}
  function inRange() {}
  function random() {}
  function assignIn() {}
  function defaults() {}
  function defaultsDeep() {}
  function findKey() {}
  function findLastKey() {}
  function forIn() {}
  function forInRight() {}
  function forOwn() {}
  function forOwnRight() {}
  function functions() {}
  function functionsIn() {}
  function get(object, path, defaultVal = undefined) {
    path = toPath(path)
    for (var p of path) {
      if (object == undefined) {
        return defaultVal
      } else {
        object = object[p]
      }
    }
    return object
  }
  function has() {}
  function hasIn() {}
  function invert() {}
  function invertBy() {}
  function invoke() {}
  function keys() {}
  function keysIn() {}
  function mapKeys() {}
  function mapValues() {}
  function merge() {}
  function mergeWith() {}
  function omit() {}
  function omitBy() {}
  function pick() {}
  function pickBy() {}
  function result() {}
  function set() {}
  function setWith() {}
  function toPairs() {}
  function toPairsIn() {}
  function transform() {}
  function unset() {}
  function update() {}
  function updateWith() {}
  function values() {}
  function valuesIn() {}
  function camelCase() {}
  function capitalize() {}
  function endsWith() {}
  function escape(str) {
    let result = ''
    for (let i = 0; i < str.length; i++) {
      switch (str[i]) {
        case '&':
          result += '&amp;'
          break
        case '<':
          result += '&lt;'
          break
        case '&':
          result += '&gt;'
          break
        case '"':
          result += '&quot;'
          break
        case "'":
          result += '&apos;'
          break
        default:
          result += str[i]
      }
    }
    return result
  }
  function escapeRegExp() {}
  function kebabCase() {}
  function lowerCase() {}
  function lowerFirst() {}
  function pad() {}
  function padEnd() {}
  function padStart() {}
  function parseInt() {}
  function repeat() {}
  function replace() {}
  function snakeCase() {}
  function split() {}
  function startCase() {}
  function startsWith() {}
  function toLower() {}
  function toUpper() {}
  function trim() {}
  function trimEnd() {}
  function trimStart() {}
  function truncate() {}
  function unescape() {}
  function upperCase() {}
  function upperFirst() {}
  function words() {}
  function conforms() {}
  function constant() {}
  function defaultTo() {}
  function flow() {}
  function identity() {}
  function matches(src) {
    return function (obj) {
      return isMatch(obj, src)
    }
  }
  function matchesProperty(path, val) {
    return function (obj) {
      return isEqual(get(obj, path), val)
    }
  }

  function method() {}
  function methodOf() {}
  function nthArg() {}
  //传入什么属性名，它返回的函数就用来获取对象的什么属性名
  function property(prop) {
    return get.bind(null, '_', prop)
  }
  function propertyOf() {}
  function range() {}
  function rangeRight() {}
  function times() {}
  function toPath(val) {
    if (Array.isArray(val)) {
      return val
    } else {
      return val
        .split('][')
        .reduce((ary, it) => ary.concat(it.split('].')), [])
        .reduce((ary, it) => ary.concat(it.split('[')), [])
        .reduce((ary, it) => ary.concat(it.split('.')), [])
    }
  }
  function uniqueId() {}
  function parseJson() {}
  function stringifyJson() {}
  return {
    chunk,
    compact,
    concat,
    difference,
    differenceBy,
    differenceWith,
    drop,
    dropRight,
    dropRightWhile,
    dropWhile,
    fill,
    findIndex,
    findLastIndex,
    flatten,
    flattenDeep,
    flattenDepth,
    fromPairs,
    head,
    indexOf,
    initial,
    intersection,
    intersectionBy,
    intersectionWith,
    join,
    last,
    lastIndexOf,
    nth,
    pull,
    pullAll,
    pullAllBy,
    pullAllWith,
    pullAt,
    reverse,
    sortedIndex,
    sortedIndexBy,
    sortedIndexOf,
    sortedLastIndex,
    sortedLastIndexBy,
    sortedLastIndexOf,
    sortedUniq,
    sortedUniqBy,
    tail,
    take,
    takeRight,
    takeRightWhile,
    takeWhile,
    union,
    unionBy,
    unionWith,
    uniq,
    uniqBy,
    uniqWith,
    unzip,
    unzipWith,
    without,
    xor,
    xorBy,
    xorWith,
    zip,
    zipObject,
    zipObjectDeep,
    zipWith,
    countBy,
    every,
    filter,
    find,
    findLast,
    flatMap,
    flatMapDeep,
    flatMapDepth,
    forEach,
    forEachRight,
    groupBy,
    includes,
    invokeMap,
    keyBy,
    map,
    orderBy,
    partition,
    reduce,
    reduceRight,
    reject,
    sample,
    sampleSize,
    shuffle,
    size,
    some,
    sortBy,
    ary,
    curry,
    defer,
    delay,
    flip,
    memoize,
    negate,
    once,
    spread,
    unary,
    castArray,
    cloneDeep,
    conformsTo,
    eq,
    gt,
    gte,
    isArguments,
    isArray,
    isArrayBuffer,
    isArrayLike,
    isArrayLikeObject,
    isBoolean,
    isDate,
    isElement,
    isEmpty,
    isEqual,
    isEqualWith,
    isError,
    isFinite,
    isFunction,
    isInteger,
    isLength,
    isMap,
    isMatch,
    isMatchWith,
    isNaN,
    isNative,
    isNil,
    isNull,
    isNumber,
    isObject,
    isObjectLike,
    isPlainObject,
    isRegExp,
    isSafeInteger,
    isSet,
    isString,
    isSymbol,
    isTypedArray,
    isUndefined,
    isWeakMap,
    isWeakSet,
    lt,
    lte,
    toArray,
    toFinite,
    toInteger,
    toLength,
    toNumber,
    assign,
    at,
    toSafeInteger,
    add,
    ceil,
    divide,
    floor,
    max,
    maxBy,
    mean,
    meanBy,
    min,
    minBy,
    multiply,
    round,
    subtract,
    sum,
    sumBy,
    clamp,
    inRange,
    random,
    assignIn,
    defaults,
    defaultsDeep,
    findKey,
    findLastKey,
    forIn,
    forInRight,
    forOwn,
    forOwnRight,
    functions,
    functionsIn,
    get,
    has,
    hasIn,
    invert,
    invertBy,
    invoke,
    keys,
    keysIn,
    mapKeys,
    mapValues,
    merge,
    mergeWith,
    omit,
    omitBy,
    pick,
    pickBy,
    result,
    set,
    setWith,
    toPairs,
    toPairsIn,
    transform,
    unset,
    update,
    updateWith,
    values,
    valuesIn,
    camelCase,
    capitalize,
    endsWith,
    escape,
    escapeRegExp,
    kebabCase,
    lowerCase,
    lowerFirst,
    pad,
    padEnd,
    padStart,
    parseInt,
    repeat,
    replace,
    snakeCase,
    split,
    startCase,
    startsWith,
    toLower,
    toUpper,
    trim,
    trimEnd,
    trimStart,
    truncate,
    unescape,
    upperCase,
    upperFirst,
    words,
    conforms,
    constant,
    defaultTo,
    flow,
    identity,
    matches,
    method,
    methodOf,
    nthArg,
    property,
    propertyOf,
    range,
    rangeRight,
    times,
    toPath,
    uniqueId,
    parseJson,
    stringifyJson,
  }
})()
