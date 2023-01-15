---
title: Массивы ++-
sidebar_position: 6
---

- Коллекция данных (однотипных чаще)
- Когда большое количество однотипных данных, вместо большого количества переменных удобнее создавать массивы.
- Часто в структурах данных используют массивы объектов.
- Массивы по типу объекты (как и всё в JS), поэтому синтаксис в добавлении\удалении элементов через точку. Значения массива записываются в через запятую.


```js
[]; // пустой массив
typeof []; // 'object'
Boolean([]); // true

const someArray = [0, 1, 2];
```

***

## Простые операции с массивами

### Создать массив

```js
// простая запись
const someArray = [0, 1, 2];

// через функцию-конструктор new
const someArray2 = new Array(0, 1, 2);

// если аргумент 1, то это будет длина массива с пустыми элементами
const someArray2 = new Array(12);
```

### Длина (length)

Это по сути индекс последнего элемента минус один.

```js
const someArray = [0, 1, 2];

someArray.length; // 3
```

***

### Вывести элемент по индексу

Нумерация индексов массива начинается с нуля. Индекс - порядковый номер.

```js
const someArray = [0, 1, 2];

// Первый элемент
someArray[0]; // 0

// Несуществующий элемент
someArray[4]; // undefined

// Последний элемент
someArray[someArray.length - 1]; // 2
```

***

### Изменить существующий элемент

```js
const someArray = [0, 1, 2];

someArray[0] = 3;
console.log(someArray); // [3, 1, 2]
```

***

### Добавить элемент (push, unshift)

Через индекс

```js
const someArray = [0, 1, 2];

someArray[3] = 3;
console.log(someArray); // [0, 1, 2, 3]
```

Добавить элемент в **конец** массива (push). Меняет исходный массив.

```js
const someArray = [0, 1, 2];

// 1-ый способ
someArray.push(3);
console.log(someArray); // [0, 1, 2, 3]

// 2-й способ
someArray[someArray.length] = 4;
console.log(someArray); // [0, 1, 2, 3, 4]
```

Добавить элемент в **начало** массива (unshift). Меняет исходный массив.

```js
const someArray = [0, 1, 2];

someArray.unshift(3);
console.log(someArray); // [3, 0, 1, 2]
```

***

### Удалить элемент (pop, shift)

Удалить элемент в **конце** массива (pop). Удаляет, меняет массив и возвращает удаленный элемент.

```js
const someArray = [0, 1, 2];

someArray.pop();
console.log(someArray); // [0, 1]
```

Удалить элемент в **начале** массива (shift)

```js
const someArray = [0, 1, 2];

someArray.shift();
console.log(someArray); // [1, 2]
```

***

### Обрезать массив (slice, splice)

**1-й способ** через **slice**. Не изменяет исходный массив. Удаляет, меняет массив и возвращает удаленный элемент.

```js
const someArray = [0, 1, 2, 3, 4, 5, 6, 7];

// обрежет первые 3 элемента
someArray.slice(3); // [3, 4, 5, 6, 7]

// оставит последние 3 элемента
someArray.slice(-3); // [5, 6, 7]
```

**2-й способ** через **splice**. Работает аналогично slice, только меняет исходный массив и можно добавлять второй параметр.

```js
const someArray = [0, 1, 2, 3, 4, 5, 6, 7];

// начать обрезку с 3-го индекса, оставить только 2 элемента
someArray.splice(3, 2); // [3, 4]

// начать обрезку с 3-го индекса с конца, оставить только 2 элемента
someArray.splice(-3, 2); // [5, 6]
```

**3-й** способ через **length**.

```js
const someArray = [0, 1, 2, 3, 4, 5, 6, 7];
someArray.length = 5; // обрежет массив сначала до присвоенного индекса
console.log(someArray); // [1, 2, 3, 4]
```

***

### Изменить порядок (reverse)

При вызове меняется исходный массив

```js
const someArray = [0, 1, 2];

someArray.reverse();
console.log(someArray); // [2, 1, 0]
```

***

### Отсортировать порядок (sort)

Сначала сортируются цифры, а потом символы (латиница, потом кириллица)

```js
const someArray = [3, 2, 1, 0, 4];
const someArray2 = ['c', 'b', 'a', 'd', 0, 2, 1];

someArray.sort();
someArray2.sort();
console.log(someArray); // [0, 1, 2, 3, 4]
console.log(someArray2); // [0, 1, 2, 'a', 'b', 'c', 'd']
```

***

### Преобразовать массив в строку (join)

```js
const someArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const someArray = [1, 2, 3, 4];
const someString1 = someArray.join(); // , по ум*
const someString2 = someArray.join(' | '); // можно добавлять разделитель

console.log(someString1); // 'a,b,c,d,e,f,g,h'
console.log(someString2); // '1 | 2 | 3 | 4'
```

***

### Преобразовать строку в массив (split)

```js
const someString = 'Something';
const someArray = someString.split('');
console.log(someArray); // ['S', 'o', 'm', 'e', 't', 'h', 'i', 'n', 'g']
```

***

## Объединение массивов

### Concat

Не изменяет исходный массив, а возвращает новый.

```js
const someArray1 = [0, 1, 2];
const someArray2 = [3, 4, 5]
const newArray = someArray1.concat(someArray2);
console.log(newArray); // [0, 1, 2, 3, 4, 5]
```

### Spread

Не изменяет исходный массив, а возвращает новый.

```js
const someArray1 = [0, 1, 2];
const someArray2 = [3, 4, 5]
const newArray = [...someArray1, ...someArray2];
console.log(newArray); // [0, 1, 2, 3, 4, 5]
```

***

## Проверка на массив

```js
const someArray = [1, 2, 3];

Array.isArray(someArray); // true
Array.isArray(true); // false
```

***

## Array distructuring

***

## Multi level array

***
