---
title: Асинхронность
sidebar_position: 8
---

## setTimeout

Вызывает функцию один раз спустя временной промежуток. Поддерживаются в nodejs.

```js
setTimeout(() => {
  alert('Async output');
}, 1000);
```

```js
function returnAlert(x) {
  alert(x);
}

setTimeout(() => {
  returnAlert('Hello, World!');
}, 1000);
```

---

## setInterval

```js
let counter = 0;

const intervalId = setInterval(() => {
  counter++;
  console.log('Counter:', counter);

  if (counter === 10) {
    clearInterval(intervalId);
  }
}, 1000);
```
