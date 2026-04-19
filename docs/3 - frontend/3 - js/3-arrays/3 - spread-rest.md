---
title: Spread / Rest +
sidebar_position: 3
---

## Примеры использования

### Копирование

```js
const foo = [1, 2, 3];

// Копирование
const bar1 = [...foo]; // [ 1, 2, 3 ]

// Копирование с добавлениeм новых элементов
const bar = [...foo, 4, 5, 6]; // [ 1, 2, 3, 4, 5, 6 ]
```

---

### Глубокое копирование

Пример со spread

```js
const a = [{ x: 1 }, { x: 2 }];
const b = [...a];

// изменяем b
b[0].x = 999;

// a nоже поменялось
console.log(a[0].x); // 999 (внутренний объект общий :( )
```

Пример со structuredClone

```js
const a = [{ x: 1 }, { x: 2 }];
const b = structuredClone(a);

b[0].x = 999;
console.log(a[0].x); // 1 (внутренний объект не общий :) )
```

---

### Конкатинация

```js
const foo = [1, 2, 3];
const bar = [4, 5, 6];

// через spread
const sum1 = [...foo, ...bar]; // [ 1, 2, 3, 4, 5, 6 ]

// через .concat()
const sum2 = foo.concat(bar); // [ 1, 2, 3, 4, 5, 6 ]
```

---

### Преобразование строки

```js
const chars = [...'hello']; // ["h","e","l","l","o"]
```

---

### Конвертация списка

```js
const set = new Set([1, 2, 2, 3]);
const uniq = [...set]; // [1,2,3]
```
