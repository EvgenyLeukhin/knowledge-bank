---
title: Импорт / экспорт +++
sidebar_position: 0
---

***

## Простой и дефолтный 

```js title="script1.js"
// простой именованный экспорт
export const a = 123;

const b = 123;

// дефолтный экспорт
export default b;
```

Если экспортируется несколько переменных, то дефолтные должны быть в начале. Если export без default, то импортировать нужно в фигурных скобках.

```js title="script2.js"
import b, { a } from './script1';
...
```

***

## import as / export as

Дефолтные импорты можно переименовывать сразу при импорте, а простые через ```as```.

```js title="script2.js"
import c, { a as d } from './script1.js';
...
```

***

Мульти экспорт объектом. Простые экспорты можно также переименовывать через ```as```.

```js title="script1.js"
const a = 1;
const b = 2;

export {
  a,
  b as c, // экспорт с переименованием (не работает с default)
}
```

***

## import * as data

Импорт всех экспортов файла в объект.

```js title="script2.js"
import * as data from './script1.js';

console.log('data', data); // { a: 1, default: 2 }
console.log('a', data.a); // 1
console.log('b', data.default); // 2
```
