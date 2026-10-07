---
title: Цикличная обработка
sidebar_position: 2
---

- Цикличные методы в стандарте ES2015 (ES6). Не мутируют исходные массивы, всегда возвращают новые массивы.
- В параметрах анономной функции всегда стоят (item, index, array)
- Результат можно сохранять в переменную

| Метод                                              | Описание                          |
| -------------------------------------------------- | --------------------------------- |
| [`.map()`](#map) +                                 | мапинг                            |
| [`.flatMap()`](#flatmap) +                         | плоский мапинг                    |
| [`.filter()`](#filter) +                           | фильтрация                        |
| [`.find()`](#find) +                               | поиск элемента с начала           |
| [`.findLast()`](#findlast) +                       | поиск элемента с конца            |
| [`.findIndex()`](#findindex) +                     | поиск индекса с начала            |
| [`.findLastIndex()`](#findlastindex) +             | поиск индекса с конца             |
| [`.some()`](#some) +                               | проверка элемента                 |
| [`.every()`](#every) +                             | проверка каждого элемента         |
| [`.sort()`](#sort)                                 | сортировка                        |
| [`.toSorted()`](#tosorted)                         | сортировка                        |
| [`.reduce()`](#reduce)                             | схлопывание                       |
| [`.reduceRight()`](#reduceright)                   | схлопывание справа                |
| [`.forEach()`](#foreach) +                         | выполнение действий при итерациях |
| [`.entries() / .keys() / .values()`](#iterators) + | итераторы в цикле for             |

---

## .map()

- Применяется для обработки исходного массива
- Всегда возвращает обработанный массив
- Не изменяет исходный массив (не мутирует)
- 3 параметра: элемент, индекс, исходный массив

```js
const a = [
  { id: 1, name: 'alpha', active: true },
  { id: 2, name: 'beta', active: false },
  { id: 3, name: 'gamma', active: true },
];

const b = a.map((item, index, arr) => {
  return item.name;
});

// shortcut
const b = a.map(item => item.name);

b; // ['alpha', 'beta', 'gamma']
```

### .map() с условием

Пример использования с изменением значения полей.

```js
const c = a.map((item, index) => {
  if (item.name === 'alpha') {
    return {
      ...item,
      id: 0,
      name: 'new alpha',
    };
  }

  return item;
});
```

---

## .flatMap()

- Когда нужно привести массив массивов в одномерный

```js
const users = [
  { name: 'Ann', tags: ['js', 'react'] },
  { name: 'Bob', tags: ['node'] },
];

users.map(i => i.tags); // [ [ 'js', 'react' ], [ 'node' ] ] - многомерный массив
users.flatMap(i => i.tags); // [ 'js', 'react', 'node' ] - одномерный массив
```

---

## .filter()

```js
const a = [
  { id: 1, name: 'alpha', active: true },
  { id: 2, name: 'beta', active: false },
  { id: 3, name: 'gamma', active: true },
];

// в этой переменной будут элементы массива a с полем active === true
const b = a.filter(item => item.active); // [ { id: 1, name: 'alpha', active: true }, { id: 3, name: 'gamma', active: true } ]
```

---

## .find()

```js
const a = [
  { id: 1, name: 'alpha', active: true },
  { id: 2, name: 'beta', active: false },
  { id: 3, name: 'gamma', active: true },
];

// вернёт первый попавшийся элемент с начала массива
const b = a.find(item => item.active); // { id: 1, name: 'alpha', active: true }
```

---

## .findLast()

```js
const a = [
  { id: 1, name: 'alpha', active: true },
  { id: 2, name: 'beta', active: false },
  { id: 3, name: 'gamma', active: true },
];

// вернёт первый попавшийся элемент с конца массива
const b = a.findLast(item => item.active); // { id: 3, name: 'gamma', active: true }
```

---

## .findIndex()

```js
const a = [
  { id: 1, name: 'alpha', active: true },
  { id: 2, name: 'beta', active: false },
  { id: 3, name: 'gamma', active: true },
];

// вернёт первый попавшийся индекс с начала массива
const b = a.findIndex(item => item.active); // 0
```

---

## .findLastIndex()

```js
const a = [
  { id: 1, name: 'alpha', active: true },
  { id: 2, name: 'beta', active: false },
  { id: 3, name: 'gamma', active: true },
];

// вернёт первый попавшийся индекс с конца массива
const b = a.findLastIndex(item => item.active); // 2
```

---

## .some()

```js
const a = [
  { id: 1, name: 'alpha', active: true },
  { id: 2, name: 'beta', active: false },
  { id: 3, name: 'gamma', active: true },
];

// проверяем один элемент на поле active === true
const b = a.some(item => item.active); // true
```

---

## .every()

```js
const a = [
  { id: 1, name: 'alpha', active: true },
  { id: 2, name: 'beta', active: false },
  { id: 3, name: 'gamma', active: true },
];

// проверяем все элементы на поле active === true
const b = a.every(item => item.active); // false
```

---

## sort()

- Два параметра в анонимной функции `sortFunc()`. `a` - `current` item, `b` - `next` item.
- Сравниваться должны типы `number`
- `sortFunc()` должна возвращать сравнение этих `number`, и должно вернуться число `< 0`, `= 0` или `> 0`.
- `< 0` - `current` меньше чем `next`
- `= 0` - `current` === `next`
- `> 0` - `current` больше чем `next`

### Сортировка чисел

```js
const a = [11, 2, 22, 1];
const b = a.sort((a, b) => a - b); // [ 1, 2, 11, 22 ]

// полная запись
function compareFn(a, b) {
  // a is less than b by some ordering criterion
  if (a < b) {
    return -1;

    // a is greater than b by the ordering criterion
  } else if (a > b) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

const c = a.sort(compareFn); // [ 1, 2, 11, 22 ]
```

---

### Cортировка строк

```js
const a = ['Jack', 'Rose', 'Anna', 'Zoey', 'Peter', 'Bob'];
const b = a.sort((curr, next) => curr.localeCompare(next)); // [ 'Anna', 'Bob', 'Jack', 'Peter', 'Rose', 'Zoey' ]
```

---

## Сортировка дат

TODO

---

## toSorted()

Возвращает новый массив, не мутирует исходный в отличие от .sort();

---

## reduce()

---

## reduceRight()

---

## .forEach()

- Результат нельзя сохранять в переменную
- Работает часто в паре с отдельным пустым массивом
- Логирование, отладка
- Просто «пройтись и что-то сделать», результат массива не нужен
- .map() для данных, .forEach() для действий

```js
const a = [
  { id: 1, name: 'alpha', active: true },
  { id: 2, name: 'beta', active: false },
  { id: 3, name: 'gamma', active: true },
];

// создаём пустой массивж
const b = [];

// пушим name в массив b на каждую итерацию
a.forEach((item, index, array) => {
  b.push(item.name);

  // логирование
  if (index === 1) {
    console.log(item.name);
  }

  // выполнение действия
  if (item.name === 'gamma') {
    localStorage.setItem(id, item.id);
  }
});

b; // [ 'alpha', 'beta', 'gamma' ]
```

---

## iterators (keys, values, entries)

```js
const arr = ['a', 'b', 'c'];

// keys() — индексы
for (const i of arr.keys()) {
  console.log(i); // 0, 1, 2
}

// values() — значения (по сути то же, что for...of по массиву)
for (const v of arr.values()) {
  console.log(v); // 'a', 'b', 'c'
}

// entries() — пары [index, value]
for (const [i, v] of arr.entries()) {
  console.log(i, v); // 0 'a', 1 'b', 2 'c'
}
```

Сразу можно преобразовать в другой массив:

```js
const arr = ['a', 'b', 'c'];

[...arr.keys()]; // [0, 1, 2]
[...arr.values()]; // ['a', 'b', 'c']
[...arr.entries()]; // [[0, 'a'], [1, 'b'], [2, 'c']]
```
