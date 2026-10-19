---
title: axios
sidebar_position: 1
---

## axios

Библиотека для HTTP-запросов. Ставится отдельно и тоже возвращает промис. JSON она разбирает сама: данные лежат в `res.data`, отдельно вызывать `.json()` не нужно.

`yarn add axios`

[Axios](https://axios-http.com/docs/intro)

```js
import axios from 'axios';

axios(url, {
  method, // по умолчанию GET
  headers,
  data, // объект, не строка
});
```

### GET

```js
axios
  .get('https://swapi.dev/api/planets/1')
  .then(res => console.log('data', res.data))
  .catch(error => console.error('error', error));
```

### Свойства ответа

Их смотрят в первом `.then`. Тело уже разобрано.

- `res.data` — тело ответа
- `res.status` — код ответа, например `200` или `404`
- `res.statusText` — текст статуса, например `OK`
- `res.headers` — заголовки ответа

```js
const url = 'https://swapi.dev/api/planets/1';

axios.get(url).then(res => {
  console.log('data', res.data);
  console.log('status', res.status);
  console.log('statusText', res.statusText);
  console.log('headers', res.headers);
});
```

Статусы `404` и `500` попадают в `.catch`. У `fetch` так не происходит: там эти коды нужно проверять через `res.ok`. В объекте ошибки axios есть ответ сервера, если он успел прийти.

```js
axios
  .get(url)
  .then(res => console.log('data', res.data))
  .catch(error => {
    console.log('status', error.response?.status);
    console.log('data', error.response?.data);
    console.log('error', error.message);
  });
```

При статусе `400` или `422` пояснение сервера лежит в `error.response.data`, часто в поле `message`. `error.message` у axios — общая фраза вроде `Request failed with status code 422`. Если ответа не было совсем, `error.response` равен `undefined`.

### Сохранение результата

Присваивание внутри `.then` случается после ответа. Строка сразу после запроса переменную ещё не видит.

```js
const url = 'https://swapi.dev/api/planets/1';
let save = null;

axios.get(url).then(res => {
  save = res.data;
  console.log(save);
});

save; // null: запрос ещё не завершён
```

Чтобы отдать данные из функции, из неё возвращают промис. `return` внутри `.then` передаёт значение только следующему звену той же цепочки.

```js
const getData = () => {
  return axios
    .get('https://swapi.dev/api/planets/1')
    .then(res => res.data);
};

getData().then(data => {
  console.log(data);
});
```

`await` пишут только внутри `async`-функции. В обычном скрипте на верхнем уровне будет `SyntaxError`.

```js
const getPlanet = async () => {
  const res = await axios.get('https://swapi.dev/api/planets/1');

  return res.data;
};

getPlanet().then(data => console.log(data));
```

### POST

Тело передают объектом. Axios сам делает из него JSON и ставит заголовок `Content-Type: application/json`.

```js
axios
  .post('https://jsonplaceholder.typicode.com/posts', {
    title: 'Title of post',
    body: 'Post Body',
  })
  .then(res => console.log(res.data))
  .catch(error => console.log(error));
```

### Параметры запроса

Query-параметры передают объектом `params`. В адрес их подставляет axios.

```js
axios({
  url,
  method: 'POST', // GET, POST, PUT, PATCH, DELETE
  headers: {
    Authorization: 'Bearer token',
  },
  data: {
    title: 'Title of post',
  },
  params: {
    userId: 1,
  },
  timeout: 5000,
});
```

Одинаковый параметр-массив по умолчанию сериализуется со скобками: `statuses[]=CANCELLED&statuses[]=RESOLVED`. Чтобы скобок не было, сериализатор их отключает:

```js
axios.get('/api/items', {
  params: {
    statuses: ['CANCELLED', 'RESOLVED'],
  },
  paramsSerializer: {
    indexes: null, // statuses=CANCELLED&statuses=RESOLVED
  },
});
```

### Чем читать тело

По умолчанию JSON уже лежит в `res.data`. Другой формат задают через `responseType`.

- `json` — объект, значение по умолчанию
- `text` — строка
- `blob` — файл в браузере
- `arraybuffer` — байты
- `document` — HTML или XML

```js
axios.get(url, {
  responseType: 'blob',
});
```
