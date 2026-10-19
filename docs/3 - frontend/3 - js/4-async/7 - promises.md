---
title: Promises 👎
sidebar_position: 7
---

## Промис

Промис хранит результат операции, который появится позже. У него три состояния: `pending` (ещё нет результата), `fulfilled` (есть значение) и `rejected` (есть ошибка).

`resolve` и `reject` — это функции, а не состояния. Срабатывает только первый вызов: повторный `resolve` или `reject` ничего не меняет.

[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)

```js
const promise = new Promise((resolve, reject) => {
  const ok = true;

  if (ok) {
    resolve('done');
  } else {
    reject(new Error('failed'));
  }
});

promise.then(value => console.log(value)).catch(error => console.log(error));
```

`then` получает значение и возвращает новый промис. `catch` получает отказ. Как устроена цепочка, разобрано в заметке `then-catch-finally`, запись через `await` — в `async-await`.

### Уже готовое значение

`Promise.resolve` сразу создаёт успешный промис, `Promise.reject` — отклонённый.

```js
Promise.resolve(1).then(value => console.log(value)); // 1

Promise.reject(new Error('failed')).catch(error => console.log(error.message));
```

### Таймер

Промис завершают внутри исполнителя, когда асинхронная операция закончилась.

```js
const delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve('done'), ms);
  });
};

delay(1000).then(value => console.log(value));
```

### Событие

Тот же приём подходит для события. Наружу отдают функцию, которая возвращает промис.

```js
const loadScript = src => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');

    script.src = src;
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Ошибка загрузки ${src}`));

    document.head.append(script);
  });
};

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js')
  .then(script => {
    console.log(script.src);
    return script;
  })
  .then(script => console.log('ещё один обработчик', script.src))
  .catch(error => console.log(error.message));
```

Без `return` второй `then` получит `undefined`. Один промис можно подписать несколькими отдельными `then`: каждый получит одно и то же значение.

### Несколько промисов

`Promise.all` ждёт все и сохраняет порядок результатов. Если один отклонится, весь результат отклонится.

[Promise.all()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

```js
Promise.all([loadPlanet(), loadPosts()]).then(([planet, posts]) => {
  console.log(planet, posts);
});
```

`Promise.allSettled` дожидается всех, включая ошибки. У каждого пункта есть `status`: `fulfilled` или `rejected`.

[Promise.allSettled()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)

```js
Promise.allSettled([loadPlanet(), loadPosts()]).then(results => {
  results.forEach(result => {
    if (result.status === 'fulfilled') {
      console.log(result.value);
    } else {
      console.log(result.reason);
    }
  });
});
```

`Promise.race` завершается тем промисом, который наступил первым: успехом или отказом. Так запрос ограничивают по времени.

[Promise.race()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)

```js
const timeout = ms => {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error('timeout')), ms);
  });
};

Promise.race([loadPlanet(), timeout(5000)])
  .then(planet => console.log(planet))
  .catch(error => console.log(error.message));
```

`Promise.any` завершается первым успехом и отклоняется, только если отказали все. Подходит, когда один и тот же ресурс есть на нескольких адресах.

[Promise.any()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise/any)

```js
const loadFrom = url => {
  return fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(String(res.status));
    }

    return res.json();
  });
};

Promise.any([
  loadFrom('https://server-a.example/planets'),
  loadFrom('https://server-b.example/planets'),
])
  .then(data => console.log(data))
  .catch(error => console.log(error));
```
