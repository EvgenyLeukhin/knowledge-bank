---
title: fetch()
sidebar_position: 0
---

## Fetch


```js
const newPost = {
  title: 'foo',
  body: 'bar',
  userId: 1,
}

const queryParams = new URLSearchParams({ force: true });

fetch(`https://jsonplaceholder.typicode.com/posts?${queryParams}`, {
  // fetch options
  method: 'POST', // Здесь так же могут быть GET, PUT, DELETE
  body: JSON.stringify(newPost), // Тело запроса в JSON-формате
  headers: {
    // Добавляем необходимые заголовки
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    // {title: "foo", body: "bar", userId: 1, id: 101}
  })
  .catch((err) => {
    console.log(err)
  }) // Error: Error occurred!
```


### then-catch

```js
fetch('https://jsonplaceholder.typicode.com/todos') // вернет промис
  .then(res => res.json()) // обработка ответа промиса
  .then(json => console.log(json)) // вывод ответа
  .catch(error => console.error('error', error)) // обработка ошибки
```

---

### async-await

TODO

---

### try-catch

TODO
