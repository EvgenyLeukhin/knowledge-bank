---
title: Abort controller
sidebar_position: 12
---

## Отмена запроса

Пока запрос в пути, его можно прервать. У `fetch` и axios для этого один механизм: `AbortController`. Сигнал передают в запрос, `abort` отклоняет промис.

[AbortController](https://developer.mozilla.org/docs/Web/API/AbortController)

```js
const controller = new AbortController();

fetch('https://swapi.dev/api/planets/1', {
  signal: controller.signal,
}).catch(error => {
  if (error.name === 'AbortError') {
    console.log('aborted');
    return;
  }

  console.log(error);
});

controller.abort();
```

```js
axios
  .get('https://swapi.dev/api/planets/1', {
    signal: controller.signal,
  })
  .catch(error => {
    if (error.code === 'ERR_CANCELED') {
      console.log('aborted');
    }
  });
```

### Гонка ответов

Два поиска подряд могут завершиться не по порядку: ответ на старый запрос придёт позже и затрёт свежие данные. Перед новым запросом предыдущий отменяют.

```js
let controller;

const search = query => {
  controller?.abort();
  controller = new AbortController();

  const params = new URLSearchParams({ q: query });

  return fetch(`/api/items?${params}`, {
    signal: controller.signal,
  }).then(res => res.json());
};
```

Пока человек печатает, ждать паузу удобнее, чем слать запрос на каждую букву. Предыдущий таймер сбрасывают.

```js
let timerId;

const onInput = query => {
  clearTimeout(timerId);

  timerId = setTimeout(() => {
    search(query).catch(error => {
      if (error.name !== 'AbortError') {
        console.log(error);
      }
    });
  }, 300);
};
```

### Таймаут

У axios время ожидания задают в миллисекундах. По истечении промис отклоняется с кодом `ECONNABORTED`.

```js
axios.get('https://swapi.dev/api/planets/1', {
  timeout: 5000,
});
```

У `fetch` своего таймаута нет. Запрос прерывают тем же `AbortController`, а таймер после ответа снимают.

```js
const controller = new AbortController();

const timerId = setTimeout(() => controller.abort(), 5000);

fetch('https://swapi.dev/api/planets/1', {
  signal: controller.signal,
}).finally(() => clearTimeout(timerId));
```

### Повтор

Обрыв сети и статус `500` можно повторить несколько раз. Статусы `400` и `404` повторять не нужно: следующий запрос с теми же данными закончится так же.

```js
const load = async (attempt = 1) => {
  try {
    const res = await fetch('https://swapi.dev/api/planets/1');

    if (res.status >= 500 && attempt < 3) {
      return load(attempt + 1);
    }

    if (!res.ok) {
      throw new Error(String(res.status));
    }

    return res.json();
  } catch (error) {
    if (error.name === 'TypeError' && attempt < 3) {
      return load(attempt + 1);
    }

    throw error;
  }
};

load()
  .then(data => console.log(data))
  .catch(error => console.log(error));
```
