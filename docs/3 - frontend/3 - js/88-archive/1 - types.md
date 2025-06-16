---
title: Типы данных
sidebar_position: 1
---

## typeof - проверка типа данных

Унарный оператор, который возвращает тип данных какого-либо выражения строкой.

```js
typeof 'some string'; // 'string'
typeof 123; // 'number'
typeof 10n; // 'bigint'
typeof true; // 'boolean'
typeof Symbol('id'); // 'symbol'
typeof null; // 'object' - Известная ошибка в JS
typeof undefined; // 'undefined'
typeof {}; // 'object'

// 2-я форма записи в ()
typeof 'some string'; // 'string'
typeof 123; // 'mumber'
```

Массивы определяются как объекты.

```js
typeof []; // 'object'
```

Функции определяются как `'function'`. Хоть и нет такого типа данных, сделано для удобства

```js
typeof (() => '123'); // 'function'
```

---

## Типы данных

1-7 - примитивные типы. 8 - объект.

1. `string` - Строка
2. `number` - Число
3. `bigint` - Большое число (ES9)
4. `boolean` - Булевый
5. `symbol` - Символ
6. `null` - Пустой тип
7. `undefined` - Неопределенный тип
8. `object` - Объект

### Изменение типа данных

Хоть и в JavaScript можно изменять один тип данных на другой, но с появление TypeScript такая практика перестала иметь место и сейчас считается дурным тоном.

```js
// Преобразование строки в число
Number('123'); // 123
+'123'; // 123

// Преобразование числа в строку
String(123); // '123'
123 + ''; // '123'
```

---

### Различные случаи преобразования типов данных

```js
// 1. Строка в число (строка должна содержать цифры иначе будет NaN)
+'123'; // 123
Number('123'); // 123
Number('123abc'); // NaN

// 2.1 Число в строку
`${123}`; // '123' - I способ
123 + ''; // '123' - II способ
String(123); // '123' - III способ

// 2.2 Другие данные в строку
String(123); // '123'
String(-12.3); // '-12.3'
String(null); // 'null'
String(undefined); // 'undefined'
String(true); // 'true'
String(false); // 'false'
String(function () {}); // 'function () {}'
String({}); // '[object Object]'
String({ key: 42 }); // '[object Object]'
String([]); // '' - пусой массив как пустая строка
String([1, 2]); // '1,2'

// 3.1 Boolean - true
Boolean('abc'); // true
Boolean(123); // true
Boolean(-123); // true
Boolean({}); // true
Boolean([]); // true
Boolean(() => ''); // true

// 3.2 Boolean - false
Boolean(0); // false
Boolean(''); // false
Boolean(null); // false
Boolean(undefined); // false
// Вместо Boolean можно использовать запись !!
!!'123'; // true

// 4.1 Number - 1
Number(true); // 1
Number([100]); // 100 - если в массиве одно значение

// 4.2 Number - 0
Number(false); // 0
Number(''); // 0
Number(null); // 0
Number([]); // 0 пустой массив

// 4.3 Number - NaN
Number('abc'); // NaN
Number({}); // NaN
Number(() => ''); // NaN
Number(undefined); // NaN
Number([100, 200, 300]); // NaN - если у массива больше одного элемента
```
