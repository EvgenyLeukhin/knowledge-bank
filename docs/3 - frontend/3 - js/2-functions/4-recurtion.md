---
title: Рекурсия
sidebar_position: 4
---

## Пример рекурсия

Вызов функции из самой функции.

### Рекурсия как цикл

```js
function recursion(value, limit = 10) {
  // в рекурсиях должен быть итератор
  let i = value;

  if (i < limit) {
    console.log('i is less 10');
    i++;

    // вызов
    recursion(i);
  } else {
    console.log('i is >= 10');
  }
}

recursion(2);
```

Можно переписать в while

```js
function cycle(value, limit = 10) {
  let i = value;

  while (i < limit) {
    console.log('i is less 10');
    i++;
  }

  console.log('i is >= 10');
}

cycle(2);
```

---

### Обратный отсчёт

```js
function countDown(value) {
  if (value <= 0) {
    console.log('Старт!');
  } else {
    // сюда можно добавить setTimeout() для плавности
    console.log(value);
    countDown(value - 1);
  }
}

countDown(3); // 3 2 1 'Старт'
```

---

### Сумма

```js
function sumUpTo(n) {
  if (n <= 1) return n;
  return n + sumUpTo(n - 1);
}

sumUpTo(5); // 15
```

---

### Факториал

```js
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

factorial(4); // 24
```
