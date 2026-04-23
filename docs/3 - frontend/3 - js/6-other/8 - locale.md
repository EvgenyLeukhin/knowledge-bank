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


new Intl.NumberFormat('ru', {
  notation: 'compact',
}).format(100_000_000_000); // '100 млрд'
```

```js
const a = Array.from(uniqueActions)
  .map(action => ({
    value: action,
    label: actionObj[action] ?? action,
  }))
  .sort((a, b) => a.label.localeCompare(b.label, 'ru'));
```
