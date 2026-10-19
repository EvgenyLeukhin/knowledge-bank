---
title: Порядок выполнения
sidebar_position: 11
---

## Порядок выполнения

Синхронный код доходит до конца раньше, чем выполнятся колбэки промисов и таймеров. Поэтому переменная сразу после `fetch` ещё пустая: присваивание стоит в `then`, а он запустится позже.

[JavaScript event loop](https://developer.mozilla.org/docs/Web/JavaScript/Event_loop)

Сначала выполняется текущий код. Затем очередь микрозадач: колбэки `then`, `catch`, `finally` и продолжение после `await`. Потом одна макрозадача: `setTimeout`, `setInterval` и разбор ответа сети.

```js
console.log('1');

setTimeout(() => console.log('timeout'), 0);

Promise.resolve().then(() => console.log('then'));

console.log('2');
// 1
// 2
// then
// timeout
```

Нулевая задержка у `setTimeout` не ставит его раньше промиса. Таймер попадёт в очередь макрозадач и подождёт, пока очередь микрозадач опустеет.

Тот же порядок у запроса. `fetch` только ставит операцию в сеть и сразу идёт дальше.

```js
const url = 'https://swapi.dev/api/planets/1';
let save = null;

console.log('start');

fetch(url)
  .then(res => res.json())
  .then(data => {
    save = data;
    console.log('saved');
  });

console.log(save); // null
console.log('end');
// start
// null
// end
// saved
```
