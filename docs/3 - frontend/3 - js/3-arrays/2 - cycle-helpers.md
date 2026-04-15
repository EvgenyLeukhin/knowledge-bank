---
title: Цикличная обработка
sidebar_position: 2
---

| Метод                                            | Описание                  |
| ------------------------------------------------ | ------------------------- |
| [`.map()`](#map)                                 | мапинг                    |
| [`.flatMap()`](#flatmap)                         | плоский мапинг            |
| [`.filter()`](#filter)                           | фильтрация                |
| [`.find()`](#find)                               | поиск элемента            |
| [`.findIndex()`](#findindex)                     | поиск индекса             |
| [`.findLast()`](#findlast)                       | поиск элемента с конца    |
| [`.findLastIndex()`](#findlastindex)             | поиск индекса с конца     |
| [`.some()`](#some)                               | проверка элемента         |
| [`.every()`](#every)                             | проверка каждого элемента |
| [`.sort()`](#sort)                               | сортировка                |
| [`.toSorted()`](#tosorted)                       | сортировка                |
| [`.reduce()`](#reduce)                           | схлопывание               |
| [`.reduceRight()`](#reduceright)                 | схлопывание справа        |
| [`.forEach()`](#foreach)                         |                           |
| [`.entries() / .keys() / .values()`](#iterators) | итераторы в цикле for     |

---

## map()

---

## flatMap()

`.flatMap() = map() + flat(1)` в одном вызове: ты возвращаешь массив (или значение), а результат автоматически «сплющивается» на 1 уровень.

```js
const words = ['hi', 'js'];
const letters1 = words.map(w => w.split('')); // [ [ 'h', 'i' ], [ 'j', 's' ] ]
const letters2 = words.flatMap(w => w.split('')); // ['h', 'i', 'j', 's']
```

---

## filter()

---

## find()

---

## findIndex()

---

## findLast()

---

## findLastIndex()

---

## some()

---

## every()

---

## sort()

---

## toSorted()

Возвращает новый массив, не мутирует исходный в отличие от .sort();

---

## reduce()

---

## reduceRight()

---

## forEach()

---

## iterators

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
