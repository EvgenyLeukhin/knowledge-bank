---
title: Деструктуризация +
sidebar_position: 4
---

```js
const [a, b, c, d] = [1, 2, 3, 4];
a; // `
b; // 2
c; // 3
d; // 4

// через rest
const [first, ...rest] = [1, 2, 3, 4];

first; // 1
rest; // [2, 3, 4]
```

---

## Примеры

### Пропуск элемента

```js
const [a, , c] = [1, 2, 3];

a; // 1
c; // 3
```

### Значения по умолчанию

```js
const [a = 10, b = 20] = [1];

a; // 1
b; // 20
```

### Деструктуризация результата split (частый кейс)

```js
const [user, domain] = 'name@example.com'.split('@');

user; // "name"
domain; // "example.com"
```

```js
const obj = { a: 1, b: 2 };

for (const [key, value] of Object.entries(obj)) {
  key; // "a", "b"
  value; // 1, 2
}
```

Важное ограничение: нельзя взять “середину” через ...rest
Rest-элемент в деструктуризации массива должен быть последним:

```js
// ❌ SyntaxError
// const [a, ...rest, last] = [1, 2, 3, 4];
```
