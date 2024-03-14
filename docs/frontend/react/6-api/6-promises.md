---
title: promises (-)
sidebar_position: 6
---

Промисы нужны для выполнения асинхронных операций. После выполнения которых можно использовать цепочку методов then(), что упрощает синтаксис и читаемость кода.

Промис имеет три стадии: pending - ожидание, resolve - удачное выпонение, reject - неудачное.

```js
const somePromise = new Promise((resolve, reject) => {
  // some async code
  resolve(); // continue
  reject(); // break
});

somePromise
  .then((value) => {
    // do something
  })
  .catch((error) => {
    // do something
  });
```

`then` - выполнить что-нибудь после удачного выполнения промиса. catch - обработчик ошибок.

`then` будет ждать успешного выполнения somePromise. Если ОК - то выполнитсья сам.

Можно составлять длинные цепочки из `then`. Промис возвращает промис, так как `then` видит только промисы. `then` также возвращает промис.

Промис c таймером
resolve вызывается внутри самого себя.

```js
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve('Done'), ms);
  });
}

delay(1000).then(resolve => console.log(resolve));
```

Промис на событие
`resolve` вызывается внутри тела функции промиса. На практике часто используют не сам промис, а функцию, которая его возвращает, чтобы передавать что-нибудь в параметре этой функции.

```js
function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

    document.head.append(script);
  });
}
```
Вызов функции. В параметре передаем src.

```js
let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
  script => alert(`${script.src} загружен!`),
  error => alert(`Ошибка: ${error.message}`)
);

promise.then(script => alert('Ещё один обработчик...'));
```

Можно было записать короче:

```js
loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js")
  .then(
    script => alert(`${script.src} загружен!`),
    error => alert(`Ошибка: ${error.message}`)
  )
  .then(script => alert('Ещё один обработчик...'));
```

---

## Множественные запросы

TODO
