---
title: fetch
sidebar_position: 0
---

Одно из преимуществ JS, что он может делать запросы к серверу в реальном времени без перезагрузки страницы, этот процесс асихронный, так как результат такого запроса заранее неизвестный.
Различные причины могут влиять на процесс ответа от сервера:

- Неправильно сформирован запрос на коиенте
- Отсутствия прав для получения данных
- Настройки сервера, препятствующие получению данных
- Ошибки на сервере
- Отсутствие интернета

Поэтому важно учитывать все эти факторы.


## Fetch (then-catch)

Встроенный js-метод реализующий запросы 

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

## TypeScripts

```ts
fetch('https://jsonplaceholder.typicode.com/todos') // вернет промис
 // обработка ответа промиса
  .then(res => res.json())

   // вывод ответа
  .then(json => console.log(json))

  // обработка ошибки
  .catch(error => console.error('error', error)) 
```

---

## Fetch (with async-await)

TODO

---

### try-catch

TODO
