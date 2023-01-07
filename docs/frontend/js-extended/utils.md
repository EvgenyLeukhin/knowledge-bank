---
title: Утилиты +--
sidebar_position: 20
---

- [youmightnotneed.com/lodash](https://youmightnotneed.com/lodash)

Утилиты обычно применяют для обработки каких-либо данных, чтобы получить результат

```js
data => newData
```

## isEmpty

Задача - показать пустой массив или объект, когда данных в нем нет.

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
```

```js
// Частично работающий пример (моя понятная реализация)
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
```

```js
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
```

```js
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
```

```js
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

***

## first(), last()

Задача - реализовать два метода, которые возвратят первый или последний элемент в массиве. 

```js
const list = [1, 2, 3];
arr[list.length - 1]; // 3 

// утилитw
first(arr); // 1
last(arr); // 3
```

```js
// Моё решение
function first(list) {
  if (list.length) {
    return list[0];
  } else return undefined;
}

function last(list) {
  if (list.length) {
    return list[list.length - 1];
  } else return undefined;
}
```

```js
// Моё решение - короткая запись
function first(list) {
  return list.length ? list[0] : undefined;
}

function last(list) {
  return list.length ? list[list.length - 1] : undefined;
}
```

```js
// решение 2
function first(list) {
  if (!Array.isArray(list)) {
    return undefined;
  }
		
  return list.length ? list[0] : undefined;
}

function last(list) {
  if (!Array.isArray(list)) {
    return undefined;
  }
		
  const length = list.length;
  return length ? list[length - 1] : undefined;
}
```

***

## Создание массива

Задача - написать методы создания массивов

```js
[...new Array(3).keys()]; // [0, 1, 2] 
[...new Array(5).keys()]; // [0, 1, 2, 3, 4] 
```

***

### range

Создаёт массив чисел (положительных или отрицательных), растущих от начальной заданной границы до конечной, не включая её.

```js
range(4); // => [0, 1, 2, 3] 

range(0, 20, 5); // => [0, 5, 10, 15]

/*
	* range(4); // => [0, 1, 2, 3] 
	* range(-4); // => [0, -1, -2, -3]
	* range(1, 5); // => [1, 2, 3, 4]
	* range(0, 20, 5); // => [0, 5, 10, 15]
	* range(0, -4, -1); // => [0, -1, -2, -3]
	* range(1, 4, 0); // => [1, 1, 1]
	* range(0); // => []
*/
```

```js
// решение моё (несовсем точное)
function range(start = 0, end, step = 1) {
  const array = [];
  let STEP = Math.abs(step);

  // only start
  if (start > 0 && !end) {
    for (i = 0; i < start; i+=STEP) array.push(i);
  }

  if (start < 0 && !end) {
    for (i = 0; i > start; i-=STEP) array.push(i);
  } 

  // start and end
  if (start < end) {
    for (i = start; i < end; i+=STEP) array.push(i);
  }

  if (start > end) {
    for (i = start; i > end; i-=STEP) array.push(i);
  }

  return array;
}
```

```js
// решение 2 (авторское)
const baseRange = (start, end, step) => {
  let index = -1;

  // вычисляем длину массива
  let length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
  
  // создаем шаблон массива нужной длинны
  const result = new Array(length);
  
  // пока длина массива не стала 0 (отработает столько раз, сколько длина массива)
  while (length--) {
    result[++index] = start; // добавляем индексы в массив
    start += step; // добавляем шаг к старту
  }

  // возвращаем полученный массив
  return result;
}

// Обработка кейсов параметров
// Проверку на типы данных не добавлял, но студенты должны будут
function range(start = 0, end, step) {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  step = step === undefined ? (start < end ? 1 : -1) : step;
  return baseRange(start, end, step);
}

// проверка
const a = range(1, -40);
console.log(a);
```

***

### rangeRight

Создаёт массив чисел (положительных или отрицательных), растущих от конечной заданной границы до начальной, не включая конечную.

```js
/*
  rangeRight(4); // => [3, 2, 1, 0]
  rangeRight(-4); // => [-3, -2, -1, 0]
  rangeRight(1, 5); // => [4, 3, 2, 1]
  rangeRight(0, 20, 5); // => [15, 10, 5, 0]
  rangeRight(0, -4, -1); // => [-3, -2, -1, 0]
  rangeRight(1, 4, 0); // => [1, 1, 1]
  rangeRight(0); // => []
*/

// решение 1
function rangeRight(start, end, step) {
	return range(start, end, step, true);
}

function baseRange(start, end, step, isRight) {
  let index = -1;
  let length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
  
  const result = new Array(length);
  
  if (isRight) {
    while (length--) {
      index++;
      result[(result.length - index) - 1] = start;
      start += step;
    }
  } else {
    while (length--) {
      result[++index] = start;
      start += step;
    }
  }
  
  return result;
}

function range(start = 0, end, step, isRight) {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  step = step === undefined ? (start < end ? 1 : -1) : step;

  return baseRange(start, end, step, isRight);
}

rangeRight(0, 10, 1);

```

```js
// решение 2
const baseRange = (start, end, step, isRight) => {
  let index = -1;
  let length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
  const result = new Array(length);

  while (length--) {
    result[isRight ? length : ++index] = start;
    start += step;
  }

  return result;
}

// Проверку на типы данных не добавлял, но студенты должны будут
function range(start = 0, end, step, isRight = false) {
		if (end === undefined) {
      end = start;
			start = 0;
    }

    step = step === undefined ? (start < end ? 1 : -1) : step;
    return baseRange(start, end, step, isRight);
}

function rangeRight(start, end, step) {
		return range(start, end, step, true);
}
```

***

## Четные и нечетные

```js
const numbers = [1, 2, 3, 4, 5, 6];
// должен вернуть { even: [2, 4, 6], odd: [1, 3, 5] }

separateArray(numbers);

function separateArray(array) {
  const evenArray = array.filter(item => item % 2 === 0);
  const oddArray = array.filter(item => item % 2 !== 0);

  return {
    even: evenArray,
    odd: oddArray,
  }
}
```
***

## Среднее арифметическое

```js
const data = guestsInfo;
/*
В переменной data хранится такой массив:
[
  { name: "Саша", age: 19 },
  { name: "Катя", age: 21 },
  { name: "Миша", age: 17 },
  { name: "Федя", age: 23 },
  { name: "Клава", age: 22 }
]
*/

function calcAvgAge(array) {
  // создаем массив только из возрастов
  const ageArray = array.map(item => item.age);

  // суммируем все возраста в массиве
  const summArray = ageArray.reduce((prevItem, curItem) => {
    return prevItem + curItem;
  }, 0);

  // делим сумму на кол-во (среднее арифметическое)
  return summArray / array.length;
}
```

***

## Lodash

[https://lodash.com/](https://lodash.com/)

***

## Date-fns

[https://date-fns.org/](https://date-fns.org/)

***
