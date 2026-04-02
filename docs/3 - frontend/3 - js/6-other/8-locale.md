---
title: Локализация
sidebar_position: 8
---

```js
const returnFullPrice = (price: number) => {
  if (!price) return '—';

  const _price = price / 100;

  return _price.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
```
