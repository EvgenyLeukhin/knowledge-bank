---
title: Ошибки
sidebar_position: 7
---

- Запросы
- Body
- Query-params
  - Pagination
  - Filter
  - Sort

- Авторизация

```js
filter[status];
sord[status] = 'ASC' | 'DESC';
```

```js
const params = new URLSearchParams();
params.set('sort[id]', 'DESC');
params.set('sort[date]', 'ASC');
const url = `/api/items?${params.toString()}`;

url;
```
