---
title: Libs
sidebar_position: 20
---

## Custom utils

Утилиты обычно применяют для обработки каких-либо данных, чтобы получить результат

```js
data => newData
```

### isEmpty

```js
/*
isEmpty(null); // => true
isEmpty(true); // => true
isEmpty(1); // => true
isEmpty([1, 2, 3]); // => false
isEmpty({ 'a': 1 }); // => false
isEmpty('123'); // => false
isEmpty(123); // => true
isEmpty(''); // => true
isEmpty(0); // => true
isEmpty(undefined) // => true
isEmpty(new Map([['1', 'str1'], [1, 'num1'], [true, 'bool1']])) // => false
isEmpty(new Set(['value1', 'value2', 'value3'])) // => false
*/

// Частично работающий пример
function checkForObject(value) {
  // check for null
  if (value === null) return true;

  // check for array and object
  if (value.length || Object.keys(value).length) {
    return false
  } else return true;
}

function isEmpty(value) {
  switch (typeof value) {
    case 'boolean': return true; break;
    case 'number': return true; break;
    case 'undefined': return true; break;
    case 'string': return !Boolean(value); break;
    case 'object': return checkForObject(value); break;
    default: return false;
  }
}

// Решение 2
function isLength(value) {
  return (
    typeof value === "number" &&
    value > -1 &&
    value % 1 === 0 &&
    value <= Number.MAX_SAFE_INTEGER
  );
}

function isNil(value) {
  return value === null || value === undefined;
}

function isArrayLike(value) {
  return !isNil(value) && typeof value !== "function" && isLength(value.length);
}

function isObjectLike(value) {
  return typeof value === "object" && value !== null;
}

function getTag(value) {
  if (value === null) {
    return value === undefined ? "[object Undefined]" : "[object Null]";
  }
  return toString.call(value);
}

const objectProto = Object.prototype;

function isPrototype(value) {
  const ctor = value && value.constructor;
  const proto = (typeof ctor === "function" && ctor.prototype) || objectProto;

  return value === proto;
}


// Решение 3
function isArguments(value) {
  return isObjectLike(value) && getTag(value) === "[object Arguments]";
}

function isLength(value) {
  return (
    typeof value === "number" &&
    value > -1 &&
    value % 1 === 0 &&
    value <= Number.MAX_SAFE_INTEGER
  );
}

function isNil(value) {
  return value === null || value === undefined;
}

function isArrayLike(value) {
  return !isNil(value) && typeof value !== "function" && isLength(value.length);
}

function isObjectLike(value) {
  return typeof value === "object" && value !== null;
}

function getTag(value) {
  if (value === null) {
    return value === undefined ? "[object Undefined]" : "[object Null]";
  }
  return toString.call(value);
}

const objectProto = Object.prototype;
function isPrototype(value) {
  const ctor = value && value.constructor;
  const proto = (typeof ctor === "function" && ctor.prototype) || objectProto;

  return value === proto;
}

function isArguments(value) {
  return isObjectLike(value) && getTag(value) === "[object Arguments]";
}

// Реализация лодаша
function isEmpty(value) {
  if (value === null) {
    return true;
  }

  if (
    isArrayLike(value) &&
    (Array.isArray(value) ||
      typeof value === "string" ||
      typeof value.splice === "function" ||
      isBuffer(value) ||
      isTypedArray(value) ||
      isArguments(value))
  ) {
    return !value.length;
  }

  const tag = getTag(value);
  if (tag === "[object Map]" || tag === "[object Set]") {
    return !value.size;
  }

  if (isPrototype(value)) {
    return !Object.keys(value).length;
  }

  for (const key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }

  return true;
}

```

## Lodash

[Lodash native](https://youmightnotneed.com/lodash)

## Date-fns
