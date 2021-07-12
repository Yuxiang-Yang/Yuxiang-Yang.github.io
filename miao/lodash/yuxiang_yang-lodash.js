var yuxiang_yang = (function () {
  //返回首个提供的参数
  function identity(value) {
    return value
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
  function filter() {}
  function find() {}
  function findLast() {}
  function flatMap() {}
  function flatMapDeep() {}
  function flatMapDepth() {}
  function forEach(collection, iteratee = identity) {}
  function forEachRight() {}
  function groupBy(collection, iteratee = identity) {}
  function includes() {}
  function invokeMap() {}
  function keyBy() {}
  function map() {}
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
  function isMatch() {}
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
  function sum() {}
  function sumBy() {}
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
  function get() {}
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
  function escape() {}
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
  function matches() {}
  function method() {}
  function methodOf() {}
  function nthArg() {}
  function property() {}
  function propertyOf() {}
  function range() {}
  function rangeRight() {}
  function times() {}
  function toPath() {}
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
