---
title: Функции II +--
sidebar_position: 0
---

## Колбэк-функция (callback)

- Это передача функции (часто анонимной) в качестве аргумента, она будет выполнена после выполнения функции, в которую она передаётся
- Колбеки отрабатываться после выполнения каких-либо операций.
- Часто применяются для действий над какими-нибудь полученными данными (которые посчитались в самой функции)

### Пример с function

```js
function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
}

doHomework('math', function() {
  alert('Finished my homework');
});
```

### Пример с alert

В данном примере alert будет являться колбеком.

```js
const someFunc = function(value, cb) {
  console.log(value);

  if (value > 0) {
    cb();
  }
}

someFunc(5, () => alert('value > 0'));
someFunc(-5, () => alert('value < 0'));
```

### Колбек с параметром

```js
const someFunc = function(value, cb) {
  if (value > 0) {
    cb(value);
  }
}

someFunc(5, function(value) {
  alert('value > 0');
  console.log(value);
});
```
***

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

const result = (function() {
  let a = 3;
  console.log(a, b); // 3 2
  return a;
})();

console.log(a, b, result); // 1 2 3 
```

```js
(function() {
  console.log('Something');
})();

// or
(() => console.log('Something!'))();

// with params
(function(text) {
  console.log(text);
})('Something');

// param of another function
setTimeout(function() { 
  console.log('Test') },
  1000
);

setTimeout(() => {
  console.log('Test');
}, 2000);
```

***

## Замыкания (closures) ---

***

## Рекурсия ---

***
