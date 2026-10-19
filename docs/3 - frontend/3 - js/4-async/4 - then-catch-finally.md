---
title: then-catch-finally
sidebar_position: 4
---

## then, catch и finally

Методы промиса. Каждый возвращает новый промис, исходный не меняется.

[Promise.prototype.then()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)

### .then()

Принимает результат предыдущего шага. Чтобы передать его дальше, из колбэка нужен `return`. Без него следующий `then` получит `undefined`.

Если вернуть промис, цепочка дождётся его. Если выбросить ошибку, цепочка перейдёт в отказ.

```js
fetch('https://swapi.dev/api/planets/1')
  .then(res => {
    if (!res.ok) {
      throw new Error(String(res.status));
    }

    return res.json();
  })
  .then(data => {
    console.log(data);
    return data;
  });
```

У `then` есть второй аргумент для отказа. Он ловит отказ предыдущего промиса, но не ошибку из первого колбэка этого же `then`. Её поймает уже следующий `catch`.

```js
promise.then(
  () => {
    throw new Error('inside');
  },
  () => {
    console.log('этот обработчик не вызовется');
  },
);
```

### .catch()

Сокращение для `.then(undefined, onRejected)`. Ловит отказ промиса и `throw` из предыдущих `then`.

[Promise.prototype.catch()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)

Если `catch` вернул обычное значение и сам ничего не бросил, цепочка снова считается успешной. Следующий `then` получит это значение.

```js
fetch(url)
  .then(res => res.json())
  .catch(error => {
    console.log(error);
    return null;
  })
  .then(data => {
    console.log(data); // null, если был catch
  });
```

У `fetch` коды `404` и `500` сами в `catch` не попадают. Туда попадает `throw` после проверки `res.ok` и обрыв сети.

### .finally()

Выполняется и после успеха, и после отказа. Аргументов не получает. Обычный `return` из него никуда не передаётся: дальше идёт прежний результат или прежняя ошибка.

[Promise.prototype.finally()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)

Если `finally` сам бросит ошибку или вернёт отклонённый промис, цепочка отклонится уже этой ошибкой.

```js
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))
  .finally(() => {
    console.log('finished');
  });
```
