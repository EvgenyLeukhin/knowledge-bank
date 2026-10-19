---
title: async-await
sidebar_position: 3
---

## async и await

`async`-функция всегда возвращает промис. `await` ждёт его результат внутри этой функции и останавливает только её, а не весь скрипт.

[async function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function)

### async

`return` превращает значение в успешный промис. `throw` отклоняет промис этой функции. Если ничего не вернуть, промис завершится с `undefined`.

```js
const load = async () => {
  return 1;
};

load().then(value => {
  console.log(value); // 1
});
```

### await

Слева от `await` оказывается уже результат промиса, а не сам промис. Если справа не промис, выполнение просто продолжается с этим значением.

[await](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/await)

```js
const loadPlanet = async () => {
  const res = await fetch('https://swapi.dev/api/planets/1');

  if (!res.ok) {
    throw new Error(String(res.status));
  }

  return res.json();
};

loadPlanet().then(data => console.log(data));
```

Отклонённый промис на `await` выбрасывает ошибку. Её ловит `try/catch` вокруг `await`. Если такого блока нет, промис самой `async`-функции отклоняется.

### Где можно писать await

Внутри `async`-функции и на верхнем уровне ES-модуля. В обычном скрипте на верхнем уровне будет `SyntaxError`.

```js
const showPlanet = async () => {
  const data = await loadPlanet();
  console.log(data);
};

showPlanet();
```

### Несколько запросов

Запросы через несколько `await` подряд идут по очереди: второй начнётся после первого.

```js
const load = async () => {
  const planet = await loadPlanet();
  const posts = await loadPosts();

  return { planet, posts };
};
```

`Promise.all` запускает их одновременно и ждёт все. Если один отклонится, весь `Promise.all` отклонится.

[Promise.all()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

```js
const load = async () => {
  const [planet, posts] = await Promise.all([loadPlanet(), loadPosts()]);

  return { planet, posts };
};
```

`Promise.allSettled` дожидается всех, даже если часть завершилась ошибкой. У каждого элемента будет `status`: `fulfilled` или `rejected`.

[Promise.allSettled()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)
