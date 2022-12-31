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
