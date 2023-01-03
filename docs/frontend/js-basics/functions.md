---
title: Функции
sidebar_position: 7
---

# Функции

Some content

- Callback
- Closures
- Async

## Замыкания

```js
'use strict';

(function () {
    const TAG = 'div';

    const element = document.createElement(TAG);

    element.textContent = 'Мой первый тег';
    document.body.appendChild(element);
})();
```

Паттерн IIFE — самовызывающиеся функции. Любые переменные внутри IIFE невидимы для внешнего мира:

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
