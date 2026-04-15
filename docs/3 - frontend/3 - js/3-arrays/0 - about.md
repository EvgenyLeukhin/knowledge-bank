---
title: Синтаксис
sidebar_position: 0
---

## Создание массива

```js
// создание пустого массива
const someArray1 = [];

// через функцию-конструктор
const someArray2 = new Array(0, 1, 2);

// создание массива с пустым кол-вом элементов
const someArray3 = new Array(12); // [ <12 empty items> ]

// cоздать массив и наполнить
const someArray4 = new Array(2).fill('string'); // [ 'string', 'string', 'string'' ]
const someArray5 = [...Array(100).keys()]; // [0, 1, 2, 3, 4, ..., 99]
```

---

```js
[]; // пустой массив
const someArray = [];

[1, 2, 3];
['string1', 'string2', 'string3'];
[true, false, true];
[() => '', () => '', () => ''];
[{ name: '' }, { name: '' }, { name: '' }];

// плохая практика - для разнородных данных нужно использовать ль
['string', 123, true, () => '', {}];

// многомерные массивы
[[], [], []];
```

---

## Массив объектов

Часто встречается в клиент-серверном взаимодействии.

```js
const someArray = [
  { name: 'Jack', age: 11 },
  { name: 'John', age: 12 },
  { name: 'Mike', age: 13 },
];
```

---

## Индекс массива

```js
// обращение к элементу массива (нумерация с нуля)
someArray[0]; // { name: "Jack", age: 11 } - первый элемент
someArray[1]; // { name: "John", age: 12 }
someArray[2]; // { name: "Mike", age: 13 }

someArray[2].name; // "Mike"

// обращение к несуществующему элементу
someArray[3]; // undefined

// метод .at
someArray.at(0); // { name: "Jack", age: 11 }
```

---

## Длина массива (length)

```js
// длина массива - number, встроенное свойство length
someArray.length; // 3

// обращение к последнему элементу
someArray[someArray.length - 1]; // { name: "Mike", age: 13 }
```

---

## Изменение типа данных массива

```js
typeof []; // 'object'

// String
String([]); // ''
String([1]); // '1'
String([1, 2, 3]); // '1,2,3'

// Number
Number([]); // 0
Number([1]); // 1
Number([1, 2, 3]); // NaN

// Boolean
Boolean([]); // true
Boolean([1]); // true
Boolean([1, 2, 3]); // true
```

---

## Array.isArray() - проверка на массив

```js
const foo = [1, 2, 3];
const bar = '1,2,3';

Array.isArray(foo); // true
Array.isArray(bar); // false
```

---

## Array.of() из number или string

Создаёт массив из переданных аргументов. Полезно, чтобы не путать с `Array(3)` (который создаёт массив длины 3).

```js
Array.of(1, 2, 3); // [1, 2, 3]
Array.of('a'); // ['a']
Array.of(3); // [3]

Array(3); // [ <3 empty items> ]
```

---

## Array.from() из Set или Map

Более подробно в разделе про Set и Map.

Создаёт новый массив из итерируемого объекта (строка, `Set`, `Map`, и т.д.) или array-like объекта.

```js
Array.from('123'); // ['1', '2', '3']

const set = new Set([1, 2, 2, 3]);
Array.from(set); // [1, 2, 3]

// второй аргумент — функция-преобразователь (mapFn)
Array.from([1, 2, 3], x => x * 2); // [2, 4, 6]
```
