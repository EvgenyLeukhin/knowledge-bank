---
title: fetch
sidebar_position: 0
---



- Продвинутый вариант вместо устаревшего XMLHttpRequest. Выполняет асинхронные запросы. Возвращает промис.
- Можно работать с такмими методами как get, post, запрашивать данные или файлы.
- Ответы с fetch, чтобы получить данные, сперва нужно передать их в метод json():
- Информация о статусе запроса будет храниться в первом then.

Одно из преимуществ JS, что он может делать запросы к серверу в реальном времени без перезагрузки страницы, этот процесс асихронный, так как результат такого запроса заранее неизвестный.
Различные причины могут влиять на процесс ответа от сервера:

- Неправильно сформирован запрос на коиенте
- Отсутствия прав для получения данных
- Настройки сервера, препятствующие получению данных
- Ошибки на сервере
- Отсутствие интернета

Поэтому важно учитывать все эти факторы.

### GET-пример

```js
fetch('https://jsonplaceholder.typicode.com/todos') // вернет промис (метод GET по умолчанию)
 // обработка ответа промиса
  .then(res => res.json())

   // вывод ответа
  .then(json => console.log(json))

  // обработка ошибки
  .catch(error => console.error('error', error)) 
```

```js
fetch('https://swapi.py4e.com/api/people/')
  .then(response => response.json())
  .then(data => console.log(data.results));
```

### POST-пример

Можно передавать body (HEAD, POST, PUT запросы). В GET нельзя.

```js
fetch('https://example.com/profile', {
  // fetch options
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },

  // вставляем данные в body
  body: JSON.stringify({
    email: 'user@gmail.com',
    password: '123',
  }),
})

// json convert
.then(response => response.json())

// Success
.then(data => {
  console.log('Success:', data);
})

// error
.catch(error => {
  console.error('Error:', error);
});
```

### Пример с обработкой

```js
// API
const API_URL = 'https://jsonplaceholder.typicode.com';
const endpoint = `${API_URL}/todos`;

// Фетчим эндпоинт
fetch(endpoint, { method: 'GET' })
  // fetch возвращает промисс, поэтому нужно обрабатывать через .then()
  .then(response => {
    // console.log('response: ', response);

    // ОК - успешный запрос
    if (response.ok) {
      // при fetch пришедшие данные нужно распарсить методом .json()
      return response.json();
    }

  // NOT OK - неуспешный запрос
    else {
      console.log('error');
    }
  })

  .then(data => {
    // выводим обработанные ранее данные
    console.log('all data: ', data);

    return data.map((item, index) => console.log(`item-${index}: `, item));
  })
```

---

## Параметры

```js
method: "POST", // *GET, POST, PUT, DELETE, etc.

mode: "cors", // no-cors, *cors, same-origin

cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached

credentials: "same-origin", // include, *same-origin, omit

headers: {
    "Content-Type": "application/json",
    // 'список заголовков
},
redirect: "follow", // manual, *follow, error

referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url

body: JSON.stringify(data), // body data type must match "Content-Type" header
```

---

## Fetch пример с then-catch

Так как fetch возвращает промис, то можно использовать цепочку then-catch.

```js
// data example
const newPost = {
  title: 'foo',
  body: 'bar',
  userId: 1,
}

fetch('https://jsonplaceholder.typicode.com/posts', { // метод get по умолчанию
  // или указываем URL в опциях
  url: 'https://jsonplaceholder.typicode.com/posts',

  // ОПЦИИ
  method: 'POST', // GET, PUT, DELETE, PATCH, OPTIONS

  // ТЕЛО ЗАПРОСА - в fetch нужно js-формат переконвертировать в строку
  body: JSON.stringify(newPost),

  // ЗАГОЛОВКИ
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  // ОБРАБОТКА - в fetch возвращенные данные нужно обработать методон json()
  .then((response) => response.json())

  // далее уже можно получить доступ к обработанным данным и что-ниб с ними делать
  .then((data) => {
    console.log(data);

    // к примеру загрузить их в стейт
    setState({ item: data });
  })

  // ОБРАБОТЧИК ОШИБОК
  .catch((err) => {
    console.log(err);
  })
```

---

## Fetch пример с async-await и try-catch-finally

Если fetch c then() можно вызывать сразу, то для async-await нужна функция. Это синтаксический сахар, который упрощает написание запросов, избавляет от длинных цепочек колбэков then-catch. `async` ставиться перед функцией и означает, что она асинхронная, внутри нее можно использовать ключевые слова `await`, `try-catch`.

```js
async function loadPosts() {
  // переменная response будет ждать выполнение fetch
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const movies = await response.json();
  console.log(movies);
}

loadPosts(); // --> return movies in console
```

Можно добавить try-catch для обработки ошибок.

```ts
// GET-запрос
async function loadPosts() {
  // успешное выполнение запроса
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const movies = await response.json();

    console.log('movies', movies);

    return movies;

    // обработчик ошибок
  } catch(e) {
    console.error("Error:", error);

    // или 
    throw new Error("Network response was not OK");

    // завершение: сработает в любом случае (и при try, и при catch)
  } finally {
    alert('Do smth');
  }
}

// POST-запрос
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

postData("https://example.com/answer", { answer: 42 }).then((data) => {
  console.log(data);
});
```

---

## Методы обрабоктки response после fetch

- `res.json()` – декодирует ответ в формате JSON
- `res.blob()` – возвращает объект как Blob (для файлов)
- `res.text()` – возвращает ответ как обычный текст
- `res.formData()` – возвращает ответ как объект FormData

---

## Параметры response после fetch

- `res.status` – HTTP-код ответа
- `res.ok` – если статус ответа в диапазоне 200-299
- `res.headers` – объект с HTTP-заголовкам

---

## TypeScript

Обычно fetch используется внутри асинхронной функции, что позволяет типизовать `response` и `error`.

```ts
// типизациия пришедших данных
type TPokemonData = {
  id: string
  number: string
  name: string
  image: string
  fetchedAt: string
  attacks: {
    special: Array<{
      name: string
      type: string
      damage: number
    }>
  }
}

// типизация ошибки
type TError = Array<{message: string}>

// типизация ответа
type JSONResponse = {
  data?: {
    pokemon: Omit<PokemonData, 'fetchedAt'>
  }
  errors?: Array<{message: string}>
}

async function fetchPokemon(name: string): Promise<TPokemonData, TError> {
  const response = await fetch(url, { options });

  // типизируем ответ
  const { data, errors }: JSONResponse = await response.json();

  // возвращаем данные
  return { data, errors };
}
```
