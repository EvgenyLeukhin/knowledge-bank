---
title: Синтаксис
sidebar_position: 0
---

## Создание массива

```js
// создание пустого массива
const someArray2 = [];

// через функцию-конструктор
const someArray3 = new Array(0, 1, 2);

// создание массива с пустым кол-вом элементов
const someArray4 = new Array(12); // [ <12 empty items> ]

// cоздать массив и наполнить
const someArray5 = new Array(2).fill('string'); // [ 'string', 'string', 'string'' ]
const someArray6 = [...Array(100).keys()]; // [0, 1, 2, 3, 4, ..., 99]
```

---

```js
const someArray = [];

[]; // пустой массив
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

Часто встречается

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
```

---

## Длина массива (length)

```js
// длина массива - number
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
