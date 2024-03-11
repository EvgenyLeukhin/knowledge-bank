---
title: query-params
sidebar_position: 3
---

```ts
const queryParams = new URLSearchParams({ foo: 'value', bar: 2 });
```

## Добавление к fetch

```js
fetch('https://example.com?' + new URLSearchParams({
    foo: 'value',
    bar: 2,
}))
```

или так:

```js
const queryParams = new URLSearchParams({
    foo: 'value',
    bar: 2,
});

fetch(`https://example.com?${queryParams}`);
```

или так:

Кириллицу нужно кодировать

```js
fetch(`https://example.com?foo=value&bar=2`)
```
