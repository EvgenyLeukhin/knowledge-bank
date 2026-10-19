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

---

## Рекурсивные запросы

---

## Интервальные запросы

---

## Циклические запросы

---
