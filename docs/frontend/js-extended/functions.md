---
title: Функции II +--
sidebar_position: 0
---

## Анонимные самовызывающиеся функции

- Не нужно именовать
- Изолированы от области видимости. Любые переменные внутри IIFE невидимы для внешнего мира.
- Результат таких функций можно сохранять в переменные
- Паттерн IIFE — анонимные изолированные самовызывающиеся функции. 
- Функция сразу вызовится, как до нее дойдет интерпритатор.
- Также такие функции можно использовать как модульные, сохраняя в объект window.utils

```js
// Этот код сразу выполнится
(function() {
  console.log('Hello');
}());

// Можно передавать параметры
(function(value) {
  console.log(value);
}('Hello'));
```

```js
// Сохраняем результат в переменную
const greeting = (function(name) {
  return `Hello, ${name}`;
}('Sorax'));

console.log(greeting);

// Так тоже будет работать (без скобок) - но обычно АСФ указывают в скобках
const greeting = function(name) {
  return `Hello, ${name}`;
}('Sorax');
```

### Еще пример

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

const result = (function() {
  let a = 3;
  console.log(a, b); // 3 2
  return a;
})();

console.log(a, b, result); // 1 2 3 
```

***

## Замыкания (closures) ---

***

## Рекурсия ---

***
