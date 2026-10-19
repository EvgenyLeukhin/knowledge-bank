---
title: query-params и payload
sidebar_position: 6
---

## query-params и payload

Query-параметры стоят в адресе после `?`: `limit=50&offset=0`. Ими обычно фильтруют, сортируют и листают список в `GET`.

Payload — это тело запроса. Им передают данные в `POST`, `PUT` и `PATCH`. В адрес оно не попадает.

[URLSearchParams](https://developer.mozilla.org/docs/Web/API/URLSearchParams)

### URLSearchParams

Объект собирает строку запроса и сам кодирует пробелы и кириллицу. `set` заменяет значение ключа, `append` добавляет ещё одно с тем же именем.

```js
const params = new URLSearchParams();

params.set('limit', '50');
params.set('offset', '0');
params.append('sort[lastName]', 'ASC');
params.set('city', 'Санья');

params.get('limit'); // '50'
params.toString(); // limit=50&offset=0&sort%5BlastName%5D=ASC&city=%D0%A1%D0%B0%D0%BD%D1%8C%D1%8F
```

В конструктор можно передать объект. Числа становятся строками. `null` и `undefined` тоже становятся строками `'null'` и `'undefined'`, поэтому пустые поля лучше не передавать.

Массив объект не раскладывает, а склеивает через запятую. Одинаковые ключи добавляют в цикле.

```js
new URLSearchParams({ id: [1, 2] }).toString(); // id=1%2C2

const params = new URLSearchParams();

[1, 2].forEach(id => params.append('id', id));

params.toString(); // id=1&id=2
```

Готовый адрес читают через `searchParams`.

```js
const url = new URL('https://example.com/items?limit=50');

url.searchParams.get('limit'); // '50'
url.searchParams.set('offset', '0');
```

### fetch

Строку подставляют в адрес после `?`.

```js
const params = new URLSearchParams({
  limit: '50',
  offset: '0',
});

fetch(`https://example.com/items?${params}`);
```

### axios

Параметры передают объектом `params`. Строку запроса собирает axios. `null` и `undefined` он пропускает.

```js
axios.get('https://example.com/items', {
  params: {
    limit: 50,
    offset: 0,
    sort: {
      lastName: 'ASC',
    },
  },
});
// /items?limit=50&offset=0&sort[lastName]=ASC
```

Массив по умолчанию получает пустые скобки: `id[]=1&id[]=2`. Без скобок сериализатор вызывают с `indexes: null`, с номерами — с `indexes: true` (`id[0]=1&id[1]=2`).

```js
axios.get('/api/items', {
  params: {
    id: [1, 2],
  },
  paramsSerializer: {
    indexes: null, // id=1&id=2
  },
});
```

### Фильтр, сортировка, пагинация

Имена параметров задаёт сервер. Часто встречающиеся варианты:

```text
GET /items?limit=50&offset=0
GET /items?sort[lastName]=ASC
GET /items?filter=region_id|in|132
GET /items?filter[roles][]=ROLE_ADMIN&filter[roles][]=ROLE_USER
```

```js
const params = new URLSearchParams({
  limit: '50',
  offset: '0',
});

params.set('sort[date]', 'DESC');
params.set('filter[status]', 'ACTIVE');
params.append('filter[roles][]', 'ROLE_ADMIN');
params.append('filter[roles][]', 'ROLE_USER');

fetch(`/api/items?${params}`);
// /api/items?limit=50&offset=0&sort[date]=DESC&filter[status]=ACTIVE&filter[roles][]=ROLE_ADMIN&filter[roles][]=ROLE_USER
```

`set` оставляет у ключа одно значение и заменяет предыдущее. `append` добавляет ещё одну пару с тем же ключом. Для даты и статуса значение одно, поэтому там `set`. Ролей несколько: второй `set` стёр бы первую, поэтому их добавляют через `append`.

```js
params.set('filter[status]', 'ACTIVE');
params.set('filter[status]', 'DRAFT');
// filter[status]=DRAFT

params.append('filter[roles][]', 'ROLE_ADMIN');
params.append('filter[roles][]', 'ROLE_USER');
// filter[roles][]=ROLE_ADMIN&filter[roles][]=ROLE_USER
```

В axios вложенный объект сам становится скобками в адресе. Массив ролей по умолчанию получает `[]`.

```js
axios.get('/api/items', {
  params: {
    limit: 50,
    offset: 0,
    sort: {
      date: 'DESC', // 'ASC' или 'DESC'
    },
    filter: {
      status: 'ACTIVE',
      roles: ['ROLE_ADMIN', 'ROLE_USER'],
    },
  },
});
// /api/items?limit=50&offset=0&sort[date]=DESC&filter[status]=ACTIVE&filter[roles][]=ROLE_ADMIN&filter[roles][]=ROLE_USER
```

### payload

Тело передают отдельно от адреса. Для JSON в `fetch` его превращают в строку и ставят заголовок. Axios принимает объект и делает это сам.

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
});
```

```js
axios.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'Title of post',
  body: 'Post Body',
});
```
