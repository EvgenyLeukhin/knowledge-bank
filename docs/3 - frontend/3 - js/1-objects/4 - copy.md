---
title: Копирование
sidebar_position: 4
---

Полезные способы копирования объектов:

## Object.assign - копирование объекта из другого

```js
const colors = {
  red: '#F00',
  green: '#0F0',
  blue: '#00F',
};

const _colors = Object.assign(colors, {
  red: 'red', // переписываем поле
  white: '#fff', // создаём новое
});

// _colors
// {
//   red: 'red',
//   green: '#0F0',
//   blue: '#00F',
//   white: '#fff'
// }
```

---

## Сравнение копий объектов

```js
const colors = {
  red: '#F00',
  green: '#0F0',
  blue: '#00F',
};

const colors2 = colors;
const colors3 = new Object(colors);
const colors4 = { ...colors }; // Современный способ копирования (без side-effect)

// можно добавлять новые свойства
const colors5 = {
  ...colors,
  white: '#fff',
  black: '#000',
};
```

### Схлопываем два объекта в один

`bar` перезатрёт значения одноимённых полей и добавит новые.

```js
const foo = {
  a: 1,
  b: 2,
  c: 3,
};

const bar = {
  a: 10,
  c: 30,
  d: 40,
};

const result = {
  ...foo,
  ...bar,
};

result; // { a: 10, b: 2, c: 30, d: 40 }
```

### Прямое сравнение объектов (side-effect)

```js
colors === colors2; // true - храняться по одной ссылке
colors === colors3; // true - храняться по одной (new Object)
colors === colors4; // false - через spread оператор (...)
```

### Через Object.is

```js
Object.is(colors, colors2); // true
Object.is(colors, colors3); // true
Object.is(colors, colors4); // false
```

---

## Общая ссылка у объектов

```js
const colors = {
  red: '#F00',
  green: '#0F0',
  blue: '#00F',
};

const colors2 = colors;
colors2.red = 'red';

colors2.red; // 'red' - меняем у копии
colors.red; // 'red' - поменялось и у ссылки
```

Чтобы такого не возникало нужно клонировать объекты через spread оператор или structuredClone.

---

## Поверхностная копия (shallow) - spread

Spread и Object.assign копируют только верхний уровень.
Вложенные объекты и массивы остаются общими по ссылке.

```js
const user = {
  name: 'Jack',
  skills: ['js', 'react'],
};

const copy = { ...user };

copy === user; // false
copy.skills === user.skills; // true (вложенныйh  массив общий)

copy.skills.push('node');

copy.skills; // [ 'js', 'react', 'node' ]
user.skills; // ['js', 'react', 'node']
```

Можно исправить через spread на каждом уровне

```js
const copy = {
  ...user,
  skills: [...user.skills],
};
```

---

## Глубокое копирование - structuredClone

`structuredClone` делает глубокую копию данных и разрывает общие ссылки.
Подходит для объектов, массивов, Map, Set, Date и т.д.

```js
const user = {
  name: 'Jack',
  skills: ['js', 'react'],
};

const deepCopy = structuredClone(user);

deepCopy.skills === user.skills; // false
deepCopy.skills.push('node');

deepCopy.skills; // [ 'js', 'react', 'node' ]
user.skills; // ['js', 'react']
```
