---
title: query-params
sidebar_position: 3
---

Обычно query-params передаются в get-запросах.

```ts
const queryParams = new URLSearchParams({ foo: 'value', bar: 2 });
```

## Добавление к fetch

```js
fetch('https://example.com?' + new URLSearchParams({
    foo: 'value',
    bar: 2,
}))
```

или так:

```js
const queryParams = new URLSearchParams({
    foo: 'value',
    bar: 2,
});

fetch(`https://example.com?${queryParams}`);
```

или так:

Кириллицу нужно кодировать

```js
fetch(`https://example.com?foo=value&bar=2`)
```

---

## Фильтрация

```bash
#  фильтрация по region_id
?filter=region_id|in|132

# фильтрация по названию address
?filter=address|like|Нефтезаводская, д. 31

# мульти-фильтрация
?filter[roles][]=ROLE_SECTION_USER&filter[roles][]=ROLE_SECTION_ZONE_VIEW&filter[roles][]=ROLE_SECTION_SLA_VIEW

filter[roles][]: ROLE_SECTION_USER
filter[roles][]: ROLE_SECTION_ZONE_VIEW
filter[roles][]: ROLE_SECTION_SLA_VIEW
```

---

## Сортировка

```bash
?sort[lastName]=ASC
?sort[lastName]=DESC

sort[lastName]: ASC
```

---

## Пагинация

```bash
?limit=50&offset=0

limit: 50
offset: 0
```

---

## Примеры

```js
// диапозоны цены
GET /items?price=20-60

// в интервале
GET /products?price=>10&price=<50

// по автору и году издания
GET /books?author=Jane_Austen&year>=1800

// сортировка 
GET /products?sort=price&order=asc
GET /songs?sort=length&order=desc
https://api.example.com/products?sort=desc&category=clothing

// пагинация
https://api.example.com/products?limit=10&offset=20
```
