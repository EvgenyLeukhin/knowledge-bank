---
title: Типы данных
sidebar_position: 2
---

1-7 - примитивные типы. 8 - объект.

1. `string` - Строка
2. `number` - Число
3. `bigint` - Большое число (ES9)
4. `boolean` - Булевый
5. `symbol` - Символ
6. `null` - Пустой тип
7. `undefined` - Неопределенный тип
8. `object` - Объект (функции и массивы также объекты)

Разница между примитивными типами и объектами: Примитивы иммутабельны (неизменяемы). Объекты передаются по ссылке, примитивы - по значению

---

```js
// PRIMITIVES - простые типы данных

// 1. string и символ
'some-string';
Symbol(); // используется редко

// 2. number и bigint (целые числа, превышающие ±(2^53 - 1))
123;
123n; // используется редко

// 3. boolean
true || false;

// 4. undefined
undefined;

// 5. null
null;

// OBJECT - сложный тип данных, который может состоять из комбинаций различных типов
// JS раскрывает свой потенциал в объектах, кто-то скажет что в JS всё является объектами
// более подробно в другом разделе
{ a: 1, b: 2 };

// оператор typeof - определяет тип данных, возвращает строку с названием типа
typeof 'some-string'; // 'string', можно записывать еще так typeof('some-string') // typeof('some-string');
typeof Symbol(); // 'symbol'

typeof 123; // 'number'
typeof NaN; // 'number'
typeof Infinity; // number
typeof 123n; // 'bigint'

typeof true; // 'boolean'

typeof undefined; // 'undefined'

typeof null; // 'object' - это известная ошика в JS

typeof {}; // 'object'
typeof []; // 'object'
typeof new Date(); // 'object'

typeof (() => ''); // 'function'
typeof function () {}; // 'function' - это не отдельный тип данных, сделано для удобства

// проверка типа
typeof 'some-string' === 'string'; // true
typeof 123 === 'number'; // true
```

---

## Различные случаи преобразования типов данных

JS - язык с динамическим преобразованием типов данных.

```js
// 1. Строка в число (строка должна содержать цифры иначе будет NaN)
+'123'; // 123
Number('123'); // 123
Number('123abc'); // NaN

// 2.1 Число в строку
`${123}`; // '123' - I способ
123 + ''; // '123' - II способ
String(123); // '123' - III способ
(0.123).toString(); // '0.123' - IV способ

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

---

## object wrapper constructors - конструкторы-обертки для преобразования типов

- String() и Symbol() (ES6+)
- Number() и BigInt() (ES11+)
- Boolean()
- Object()
