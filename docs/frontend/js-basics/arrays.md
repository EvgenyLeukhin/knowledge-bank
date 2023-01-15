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

// через класс new
const someArray2 = new Array(0, 1, 2);
```

### Длина (length)

```js
const someArray = [0, 1, 2];

someArray.length; // 3
```

***

### Вывести элемент по индексу

Нумерация индексов массива начинается с нуля

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

Добавить элемент в **конец** массива (push)

```js
const someArray = [0, 1, 2];

someArray.push(3);
console.log(someArray); // [0, 1, 2, 3]
```

Добавить элемент в **начало** массива (unshift)

```js
const someArray = [0, 1, 2];

someArray.unshift(3);
console.log(someArray); // [3, 0, 1, 2]
```

***

### Удалить элемент (pop, shift)

Удалить элемент в **конце** массива (pop)

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

```js
```

***

### Изменить порядок (reverse)

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

### Преобразовать массив в строку ()

```js
```

***

### Преобразовать строку в массив ()

```js
```

***

## Spread operator

***

## Array distructuring

***

## Multi level array

***

## Array checking

***

