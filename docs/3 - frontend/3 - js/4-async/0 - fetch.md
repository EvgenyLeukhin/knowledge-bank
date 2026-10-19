---
title: fetch
sidebar_position: 0
---

## Метод fetch()

Встроенный метод браузера для HTTP-запросов. Возвращает промис с объектом `Response`. Само тело ещё не данные: его читают отдельно, чаще всего через `res.json()`. Этот метод тоже возвращает промис.

[Using the Fetch API](https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch)

```js
fetch(url, {
  method, // по умолчанию GET
  headers,
  body: JSON.stringify(data), // для POST, PUT, PATCH
});
```

### GET

```js
fetch('https://swapi.dev/api/planets/1')
  .then(res => res.json())
  .then(data => console.log('data', data))
  .catch(error => console.error('error', error));
```

### Свойства ответа

Их смотрят в первом `.then`, до `res.json()`.

- `res.ok` — `true`, если статус от 200 до 299
- `res.status` — код ответа, например `200` или `404`
- `res.headers` — заголовки ответа

```js
const url = 'https://swapi.dev/api/planets/1';

fetch(url).then(res => {
  console.log('ok', res.ok);
  console.log('status', res.status);
  console.log('headers', res.headers);

  return res.json();
});
```

Статусы `404` и `500` не попадают в `.catch`. Туда попадают обрыв сети и ошибка разбора тела. Код ответа проверяют сами и при неуспехе пробрасывают ошибку:

```js
fetch(url)
  .then(res => {
    if (!res.ok) {
      throw new Error(String(res.status));
    }

    return res.json();
  })
  .then(data => console.log('data', data))
  .catch(error => console.log('error', error));
```

### Сохранение результата

Присваивание внутри `.then` случается после ответа. Строка сразу после `fetch` переменную ещё не видит.

```js
const url = 'https://swapi.dev/api/planets/1';
let save = null;

fetch(url)
  .then(res => {
    if (!res.ok) {
      throw new Error(String(res.status));
    }

    return res.json();
  })
  .then(data => {
    save = data;
    console.log(save);
  });

save; // null: запрос ещё не завершён
```

Чтобы отдать данные из функции, из неё возвращают промис. `return` внутри `.then` передаёт значение только следующему звену той же цепочки.

```js
const getData = () => {
  return fetch('https://swapi.dev/api/planets/1').then(res => {
    if (!res.ok) {
      throw new Error(String(res.status));
    }

    return res.json();
  });
};

getData().then(data => {
  console.log(data);
});
```

`await` пишут только внутри `async`-функции. В обычном скрипте на верхнем уровне будет `SyntaxError`.

```js
const getPlanet = async () => {
  const res = await fetch('https://swapi.dev/api/planets/1');

  if (!res.ok) {
    throw new Error(String(res.status));
  }

  return res.json();
};

getPlanet().then(data => console.log(data));
```

### POST

Тело передают строкой. Для JSON нужен заголовок `Content-Type`.

```js
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'Title of post',
    body: 'Post Body',
  }),
})
  .then(res => {
    if (!res.ok) {
      throw new Error(String(res.status));
    }

    return res.json();
  })
  .then(data => console.log(data))
  .catch(error => console.log(error));
```

### Параметры запроса

```js
fetch(url, {
  method: 'POST', // GET, POST, PUT, PATCH, DELETE
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
  mode: 'cors', // cors, no-cors, same-origin
  credentials: 'same-origin', // omit, same-origin, include
  cache: 'default', // default, no-cache, reload, force-cache, only-if-cached
});
```

### Чем читать тело

Тело можно прочитать только один раз.

- `res.json()` — JSON
- `res.text()` — текст
- `res.blob()` — файл
- `res.formData()` — `FormData`
