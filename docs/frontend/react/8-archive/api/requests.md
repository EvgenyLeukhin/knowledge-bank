---
title: Запросы ++-
sidebar_position: 5
---

- [Методы HTTP запроса](https://developer.mozilla.org/ru/docs/Web/HTTP/Methods)
- [Коды ответа HTTP](https://developer.mozilla.org/ru/docs/Web/HTTP/Status)
- [Set-Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
- [Идентификация, аутентификация, авторизация — в чем разница?](https://it-uroki.ru/uroki/bezopasnost/identifikaciya-autentifikaciya-avtorizaciya.html)
- [WebSocket](https://learn.javascript.ru/websocket)

## Варианты работы с запросами

1. Получение данных (GET)
2. Отправка данных (POST)
3. Обновление данных (PUT, PATCH)
4. Удаление данных (DELETE)

### Базовый сценарий работы с данными

**1. Запрос на получение данных** - асинхронный гет-запрос внутри useEffect() при загрузке компонета или по эвенту
    - GET-запрос
    - индикация запроса (лоадер)
    - обработка ошибок
    - query-параметры для фильтрации
    - сортировка
**2. Визуализация полученных данных или списка данных** - сохранение полученных данных через функцию setState() внутри локального стейта компонета. Также возможна конвертация полученных данных для подставление в ui-компоненты.
    - json
    - полученные данные нужно "раскидать" по ui-элементам
    - списки данных для отображения часто сохраняют в store
    - данные отдельной сущности (по id) обычно сохраняют в локальный стейт компонента (для возможности редактирования)
**3. Изменение данных** - изменение локального стейта компонета через функции-обработчики, которая изменяет данные в локальном стейте
    - изменение данных в стейте компонента
    - методы onChange изменяют локальный стейт
    - валидация на фронте
**4. Отправка измененных данных** - подстановка измененных данных их локального стейта в тело пост-запроса
    - PUT, PATCH запросы
    - данные из локального стейта нужно сложить в запрос
    - валидация на бэке
    - индикация запроса (лоадер)
**5. Получение новых данных** - при успешной отправке измененных данных получаем новые данные в гет-запросе с сервера
    - после успешной отправки запроса после редактирования отдельного элемента показываем новый список с учетом измененного элемента


## fetch

- Продвинутый вариант вместо устаревшего XMLHttpRequest. Выполняет асинхронные запросы. Возвращает промис.
- Можно работать с такмими методами как get, post, запрашивать данные или файлы.
- Ответы с fetch, чтобы получить данные, сперва нужно передать их в метод json():
- Информация о статусе запроса будет храниться в первом then.


### Базовый пример

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

### Примеры

```js
// fetch пример (GET)
fetch('https://swapi.py4e.com/api/people/')
  .then(response => response.json())
  .then(data => console.log(data.results));
```

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

### Параметры

```js
method: "POST", // *GET, POST, PUT, DELETE, etc.

mode: "cors", // no-cors, *cors, same-origin

cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached

credentials: "same-origin", // include, *same-origin, omit

headers: {
    "Content-Type": "application/json",
    // 'Content-Type': 'application/x-www-form-urlencoded',
},
redirect: "follow", // manual, *follow, error

referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url

body: JSON.stringify(data), // body data type must match "Content-Type" header
```

## axios

- Fetch-based js-library.
- Promise based HTTP client for the browser and node.js

`npm install axios`
Axios может обходиться без метода json() как в fetch:

Axios пример 1 (GET)

```js
axios.get('https://swapi.co/api/people/')
  .then(response => console.log(response));
```

### axios-get

```js
import axios from 'axios';
import { API_URL, subUrl } from './api/apiUrl';

const getCampaing = id => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.get(
    `${API_URL}/${subUrl}/vacancies/${id}`,
    {
      headers: { Authorization: token }
    }
  )
};

export default getCampaing;
```

### axios-delete

```js
import axios from 'axios';
import { API_URL, subUrl } from './api/apiUrl';

const deleteCampaing = id => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.delete(
    `${API_URL}/${subUrl}/vacancies/${id}`,
    {
      headers: { Authorization: token }
    }
  )
};

export default deleteCampaing;
```

### axios-post

```js
import axios from 'axios';
import { API_URL, subUrl } from './api/apiUrl';

const login = (name, password) => {
  return axios.post(
    `${API_URL}/${subUrl}/login`,
    { 
      name, 
      password,
    },
  );
}

export default login;
```

### axios-filter

```js
import axios from 'axios';
import { API_URL, subUrl } from './api/apiUrl';

const getCompanies = inputValue => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.get(
    `${API_URL}/${subUrl}/companies`,
    {
      params: {
        filter: {
          // поиск по name, surname, email
          where: {
            or: [
              { name:    { like: `%${inputValue}%`} },
              { surname: { like: `%${inputValue}%`} },
              { email:   { like: `%${inputValue}%`} }
            ],
          },
          limit: 10,
          offset: 50,
          order: 'id DESC',
        }
      },
      headers: { Authorization: token }
    }
  );
}

export default getCompanies;
```

### Пример с PH

```js
import axios from 'axios';
import { format } from 'date-fns';

import { API_URL, subUrl } from './../../../api/apiUrl';

const getJobs = state => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  const { pageSize, page, filtered, sorted } = state; // from own state of react-table

  // filter-template
  const filter = {
    where: {},
    limit: pageSize,
    skip: page * pageSize,
    order: 'id DESC'
  };

  // inject where to filter
  filtered.forEach(i => {
    // Id column // +
    if (i.id === 'id') {
      filter.where[i.id] = i.value;

    // Job column // +
    } else if (i.id === 'name') {
      filter.where[i.id] = { 'like': '%' + i.value + '%' };

    // Locations column // +
    } else if (i.id === 'locations') {
      if (i.value) {
        filter.where.locations = { 'inq': i.value.map(i => i.id) };
      } else {
        filter.where.locations = {};
      }

    // User column // +
    } else if (i.id === 'employer') {
      if (i.value) {
        filter.where.employer_id = i.value.id;
      } else {
        filter.where.employer_id = null;
      }

    // Company column // +
    } else if (i.id === 'company') {
      console.log(i.value);
      if (i.value) {
        filter.where.companies = { 'inq': i.value.map(i => i.id) };
      } else {
        filter.where.companies = {};
      }

    // Status column // +
    } else if (i.id === 'status') {
      filter.where[i.id] = i.value;

    // Plan column // +
    } else if (i.id === 'plan_id') {

      if (i.value === 5) {
        filter.where[i.id] = { gt: 1 }
      } else {
        filter.where[i.id] = i.value;
      }

    // Created // +
    } else if (i.id === 'created') {
      const createdDate = i.value && format(i.value, 'yyyy-MM-dd');
      filter.where.created = { 'gt': createdDate };
      filter.order = i.value ? 'created DESC' : 'id DESC';

    // Published // +
    } else if (i.id === 'published') {
      const publisheddDate = i.value && format(i.value, 'yyyy-MM-dd');
      filter.where.published = { 'gt': publisheddDate };
      // filter.order = i.value ? 'created DESC' : 'published DESC';
    }
  });


  // inject order to filter
  sorted.forEach(i => {
    const desc = i.desc ? 'DESC' : 'ASC'
      filter.order = `${i.id} ${desc}`;
  });

  // get-request for data
  return axios.get(`${API_URL}/${subUrl}/vacancies/searchExtra`, {
    params: { filter },
    headers: { Authorization: token },
  })
};

export default getJobs;
```


---

## async-await

async ставиться перед функцией и означает, что она асинхронная, внутри нее можно использовать ключевые слова `await`, `try-catch`.

```js
async function logMovies() {
  // переменная response ждет выполнение fetch
  const response = await fetch("http://example.com/movies.json");
  const movies = await response.json();
  console.log(movies); // return movies;
}
```

```js
// Example POST method implementation:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  return response.json(); // parses JSON response into native JavaScript objects
}

postData("https://example.com/answer", { answer: 42 }).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});
```

---

## try-catch

Чтобы можно было обрабатывать неуспешные варианты запросов, можно обернуть 

```js
// Example POST method implementation:
async function postData(url = "", data = {}) {
    try {
        const response = await fetch(url, data);

        return response.json();
    } catch (error) {
        console.error("Error:", error);
    }
}

postData("https://example.com/answer", { answer: 42 }).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});
```

---

## Promise

Promise
Промисы нужны для выполнения асинхронных операций. После выполнения которых можно использовать цепочку методов then(), что упрощает синтаксис и читаемость кода.

Промис имеет три стадии: pending - ожидание, resolve - удачное выпонение, reject - неудачное.

```js
const somePromise = new Promise((resolve, reject) => {
  // some async code
  resolve(); // continue
  reject(); // break
});

somePromise
  .then((value) => {
    // do something
  })
  .catch((error) => {
    // do something
  });
```

`then` - выполнить что-нибудь после удачного выполнения промиса. catch - обработчик ошибок.

`then` будет ждать успешного выполнения somePromise. Если ОК - то выполнитсья сам.

Можно составлять длинные цепочки из `then`. Промис возвращает промис, так как `then` видит только промисы. `then` также возвращает промис.

Промис c таймером
resolve вызывается внутри самого себя.

```js
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve('Done'), ms);
  });
}

delay(1000).then(resolve => console.log(resolve));
```

Промис на событие
`resolve` вызывается внутри тела функции промиса. На практике часто используют не сам промис, а функцию, которая его возвращает, чтобы передавать что-нибудь в параметре этой функции.

```js
function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

    document.head.append(script);
  });
}
```
Вызов функции. В параметре передаем src.

```js
let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
  script => alert(`${script.src} загружен!`),
  error => alert(`Ошибка: ${error.message}`)
);

promise.then(script => alert('Ещё один обработчик...'));
```

Можно было записать короче:

```js
loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js")
  .then(
    script => alert(`${script.src} загружен!`),
    error => alert(`Ошибка: ${error.message}`)
  )
  .then(script => alert('Ещё один обработчик...'));
```
---

## Множественные запросы

---

## Debounce

Задержка события на определенное количество времени.  После задержки (delay), выполниться callback.

```useDebounce()```

---
## Throttling

```useThrottle()```

---

## Lazy loading 

```tsx
const LazyComp1 = React.lazy(() => import('./Component1'));
const LazyComp2 = React.lazy(() => import('./Component2'));
```

Images, fonts, libs, components, reducers, 

---
