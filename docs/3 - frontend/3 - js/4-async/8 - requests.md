---
title: Запросы
sidebar_position: 8
---

## Один запрос тремя способами

Один и тот же `GET`. Во всех трёх вариантах в консоль попадает разобранный JSON планеты, а при ошибке — объект ошибки.

```js
const url = 'https://swapi.dev/api/planets/1';
```

### then

`fetch` уже возвращает промис. Результат передают по цепочке через `return`.

```js
fetch(url)
  .then(res => {
    if (!res.ok) {
      throw new Error(String(res.status));
    }

    return res.json();
  })
  .then(data => console.log(data))
  .catch(error => console.log(error));
```

### async/await

`await` ждёт тот же промис внутри `async`-функции. Отказ попадает в `catch` у вызова функции.

```js
const loadPlanet = async () => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(String(res.status));
  }

  return res.json();
};

loadPlanet()
  .then(data => console.log(data))
  .catch(error => console.log(error));
```

### Promise

Конструктор нужен, когда результат приходит колбэком, а не готовым промисом. `fetch` оборачивать в `new Promise` не нужно: у него промис уже есть. Ниже тот же запрос записан через исполнитель, чтобы был виден `resolve` и `reject`.

```js
const loadPlanet = () => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(String(res.status));
        }

        return res.json();
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
};

loadPlanet()
  .then(data => console.log(data))
  .catch(error => console.log(error));
```

## setTimeout()

Один раз вызывает функцию через указанное число миллисекунд. `clearTimeout` отменяет вызов, если он ещё не произошёл.

[setTimeout()](https://developer.mozilla.org/docs/Web/API/Window/setTimeout)

```js
const id = setTimeout(() => {
  console.log('done');
}, 1000);

clearTimeout(id);
```

## setInterval()

Повторяет вызов через равные промежутки, пока его не остановить через `clearInterval`.

[setInterval()](https://developer.mozilla.org/docs/Web/API/Window/setInterval)

```js
let count = 0;

const id = setInterval(() => {
  count += 1;
  console.log(count);

  if (count === 3) {
    clearInterval(id);
  }
}, 1000);
```

Страница берётся порциями. Пока в ответе ровно `limit` записей, есть следующая страница: `offset` увеличивают на `limit` и складывают записи в один массив. Короткая страница означает, что данные закончились.

```js
const limit = 10;

const getPage = async offset => {
  const params = new URLSearchParams({
    _limit: String(limit),
    _start: String(offset),
  });

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?${params}`,
  );

  return res.json();
};
```

## Рекурсивные запросы

Функция вызывает саму себя со следующим `offset` и передаёт уже собранный массив.

```js
const loadAll = async (offset = 0, items = []) => {
  const page = await getPage(offset);
  const nextItems = [...items, ...page];

  if (page.length < limit) {
    return nextItems;
  }

  return loadAll(offset + limit, nextItems);
};

loadAll().then(items => console.log(items));
```

## Интервальные запросы

Следующая страница запрашивается раз в секунду. Пока запрос не закончился, новый не стартует. На короткой странице интервал останавливается.

```js
const items = [];
let offset = 0;
let isLoading = false;

const id = setInterval(async () => {
  if (isLoading) {
    return;
  }

  isLoading = true;

  const page = await getPage(offset);

  items.push(...page);
  offset += limit;
  isLoading = false;

  if (page.length < limit) {
    clearInterval(id);
    console.log(items);
  }
}, 1000);
```

## Циклические запросы

Цикл `while` сам увеличивает `offset` и ждёт каждую страницу, прежде чем запросить следующую.

```js
const loadAll = async () => {
  const items = [];
  let offset = 0;
  let hasMore = true;

  while (hasMore) {
    const page = await getPage(offset);

    items.push(...page);
    offset += limit;
    hasMore = page.length === limit;
  }

  return items;
};

loadAll().then(items => console.log(items));
```
