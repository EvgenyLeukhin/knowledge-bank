---
title: reduce()
sidebar_position: 5
---

## `reduce()`

Функция для "СВОРАЧИВАНИЯ" массива в одно значение (суммирование). Возвращает number. preVal - предыдущий элемент. 0 - второй аргумент необязательный (НАЧАЛЬНОЕ ЗНАЧЕНИЕ).

```ts
const arr = [1, 2, 3];
const arrCount = arr.reduce((preVal, item) => {
  // сложение элементов
  return preVal + item;
}, 0);

// сумма элементов массива
console.log(arrCount); // 6
```

Вычислить сумму

```ts
const a = [1, 2, 3, 4, 5, 6, 7, 8];

// summ = 36
const summ = a.reduce((prev, item, index) => {
  return prev + item;
});
```

```ts
const a = [1, 2, 3, 4, 5];

// first or pre item
a.reduce(preVal => preVal); // 1

// last item
a.reduce((preVal, nextVal) => nextVal); // 5

// iteratiions count
a.reduce((preVal, nextVal, iteratiions, sourceArray) => iteratiions); // 4 (1+2, 2+3, 3+4, 4+5)

// source array
a.reduce((preVal, nextVal, iteratiions, sourceArray) => sourceArray); // [1, 2, 3, 4, 5]

// arguments naming
a.reduce((preVal, nextVal, iteratiions, sourceArray));

// sum
const sum = a.reduce((preVal, nextVal) => preVal + nextVal);

// max value
const max = a.reduce((preVal, nextVal) => Math.max(preVal, nextVal)); // 5

// min value
const min = a.reduce((preVal, nextVal) => Math.min(preVal, nextVal)); // 1
```

---

Суть reduce вернуть не просто массив как это делает .map(), .filter(), .sort(), а вернуть какой-то вычисляемое значение, которое принимается в качестве первого аргумента, и там может быть любой тип данных.

---

### Подсчет суммы циклом for.

```js
const array = [1, 2, 3, 4, 5];
let summOfArray = 0;

for (i = 0; i < array.length; i++) {
  summOfArray += array[i];
}
```

### Подсчет суммы через reduce();

```js
const array = [1, 2, 3, 4, 5];

const summOfArray = array.reduce((total, item) => (total += item));
```

```js
const array = [1, 2, 3, 4, 5];

// total по ум. равен 1-ому элементу массива, если не указали значение в конце, при этом в цикле будет пропущена первая итерация

// пробежаться циклом по элементам
// total он же accumulator, accum, item он же curEl
array.reduce((total, item, index, sourceArray) => {
  console.log('item', item);
}, 0); // 0 - total - начальное значение

// посчитать сумму
const summOfArray = array.reduce((total, item, index, sourceArray) => {
  total += item;

  return total;
}, 0);

В total можно держать не только number, a также {} и [];
```

---

### Макс. значение цикл for

```ts
const array = [1, 2, 3, 4, 5];
let max = array[0];

for (let i = 0; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}
```

---

### Макс. значение цикл reduce()

```js
const array = [1, 2, 3, 4, 5];
const max = array.reduce((total, item) => Math.max(item));
```
