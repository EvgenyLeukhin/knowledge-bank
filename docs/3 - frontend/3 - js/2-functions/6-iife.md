---
title: Самовызывание +
sidebar_position: 6
---

## Анонимные самовызывающиеся функции

Паттерн **IIFE** — анонимные изолированные самовызывающиеся функции.

- Не нужно именовать
- Будет выполняться при загрузке.
- Чаще всего встречаются в замыканиях или в качестве аргумента другой функции (колбэк).
- Изолированы от области видимости. Любые переменные внутри IIFE невидимы для внешнего мира.
- Результат таких функций можно сохранять в переменные
- Функция сразу вызовится, как до нее дойдет интерпритатор.
- Также такие функции можно использовать как модульные, сохраняя в объект window.utils

```js
// Этот код сразу выполнится
(function () {
  console.log('Hello');
})();

// Можно передавать параметры
(function (value) {
  console.log(value);
})('Hello');
```

```js
// Сохраняем результат в переменную
const greeting = (function (name) {
  return `Hello, ${name}`;
})('Sorax');

console.log(greeting); // Hello, Sorax

// Так тоже будет работать (без скобок) - но обычно АСФ указывают в скобках
const greeting = (function (name) {
  return `Hello, ${name}`;
})('Sorax');
```

### Еще примеры

```js
'use strict';

(function () {
  const TAG = 'div';

  const element = document.createElement(TAG);

  element.textContent = 'Мой первый тег';
  document.body.appendChild(element);
})();
```

```js
let a = 1;
var b = 2;

const result = (function () {
  let a = 3;
  console.log(a, b); // 3 2
  return a;
})();

console.log(a, b, result); // 1 2 3
```

```js
(function () {
  console.log('Something');
})();

// or
(() => console.log('Something!'))();

// with params
(function (text) {
  console.log(text);
})('Something');

// param of another function
setTimeout(function () {
  console.log('Test');
}, 1000);

setTimeout(() => {
  console.log('Test');
}, 2000);
```

---

```js
// анонимная самовызывающаяся асинхронная стрелочная функция
(async () => {
  try {
  } catch (e) {}
})();
```
