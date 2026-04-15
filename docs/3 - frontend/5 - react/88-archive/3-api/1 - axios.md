---
title: axios
sidebar_position: 1
---

Библиотека-надстройка над `fetch()`. Axios — модифицированный и более сложный аналог Fetch API. Кто-то предпочитает метод fetch, кто-то axios. Некоторые заново пишут обёртки над XHR, чтобы не тащить библиотеку. Интересное сравнение fetch и axios. В проекте нельзя будет использовать ни Fetch API, ни axios. Вы сами реализуете в тренажёре аналог fetch используя XMLHttpRequest и будете использовать свою реализацию.

- Fetch-based js-library.
- Promise based HTTP client for the browser and node.js

Axios может обходиться без метода json() как в fetch.

Установка:

```bash
$ yarn add axios
```

```js
axios
  .get('https://swapi.co/api/people/')
  .then(response => console.log(response));
```

## Response Schema

Ответ через `axios` будет возвращен с определенным уже структурированным форматом данных - это преимущество над `fetch`

```js
{
  // `data` is the response from the server
  data: {},

  // `status` is the HTTP status code from the server response
  status: 200,

  // `statusText` is the HTTP status message from the server response
  statusText: 'OK',

  // `headers` the HTTP headers that the server responded with
  // All header names are lowercase and can be accessed using the bracket notation.
  // Example: `response.headers['content-type']`
  headers: {},

  // `config` is the config that was provided to `axios` for the request
  config: {},

  // `request` is the request that generated this response
  request: {}
}
```

---

## Примеры запросов

### axios-get

```js
import axios from 'axios';
import { API_URL, subUrl } from './api/apiUrl';

const getCampaing = id => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.get(`${API_URL}/${subUrl}/vacancies/${id}`, {
    headers: { Authorization: token },
  });
};

export default getCampaing;
```

### axios-delete

```js
import axios from 'axios';
import { API_URL, subUrl } from './api/apiUrl';

const deleteCampaing = id => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.delete(`${API_URL}/${subUrl}/vacancies/${id}`, {
    headers: { Authorization: token },
  });
};

export default deleteCampaing;
```

---

### axios-post

```js
import axios from 'axios';
import { API_URL, subUrl } from './api/apiUrl';

const login = (name, password) => {
  return axios.post(`${API_URL}/${subUrl}/login`, {
    name,
    password,
  });
};

export default login;
```

---

### axios-filter

```js
import axios from 'axios';
import { API_URL, subUrl } from './api/apiUrl';

const getCompanies = inputValue => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.get(`${API_URL}/${subUrl}/companies`, {
    params: {
      filter: {
        // поиск по name, surname, email
        where: {
          or: [
            { name: { like: `%${inputValue}%` } },
            { surname: { like: `%${inputValue}%` } },
            { email: { like: `%${inputValue}%` } },
          ],
        },
        limit: 10,
        offset: 50,
        order: 'id DESC',
      },
    },
    headers: { Authorization: token },
  });
};

export default getCompanies;
```

---

## Пример с PH

```js
import axios from 'axios';
import { format } from 'date-fns';

import { API_URL, subUrl } from 'api/apiUrl';

const getJobs = state => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  const { pageSize, page, filtered, sorted } = state; // from own state of react-table

  // filter-template
  const filter = {
    where: {},
    limit: pageSize,
    skip: page * pageSize,
    order: 'id DESC',
  };

  // inject where to filter
  filtered.forEach(i => {
    // Id column // +
    if (i.id === 'id') {
      filter.where[i.id] = i.value;

      // Job column // +
    } else if (i.id === 'name') {
      filter.where[i.id] = { like: '%' + i.value + '%' };

      // Locations column // +
    } else if (i.id === 'locations') {
      if (i.value) {
        filter.where.locations = { inq: i.value.map(i => i.id) };
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
        filter.where.companies = { inq: i.value.map(i => i.id) };
      } else {
        filter.where.companies = {};
      }

      // Status column // +
    } else if (i.id === 'status') {
      filter.where[i.id] = i.value;

      // Plan column // +
    } else if (i.id === 'plan_id') {
      if (i.value === 5) {
        filter.where[i.id] = { gt: 1 };
      } else {
        filter.where[i.id] = i.value;
      }

      // Created // +
    } else if (i.id === 'created') {
      const createdDate = i.value && format(i.value, 'yyyy-MM-dd');
      filter.where.created = { gt: createdDate };
      filter.order = i.value ? 'created DESC' : 'id DESC';

      // Published // +
    } else if (i.id === 'published') {
      const publisheddDate = i.value && format(i.value, 'yyyy-MM-dd');
      filter.where.published = { gt: publisheddDate };
      // filter.order = i.value ? 'created DESC' : 'published DESC';
    }
  });

  // inject order to filter
  sorted.forEach(i => {
    const desc = i.desc ? 'DESC' : 'ASC';
    filter.order = `${i.id} ${desc}`;
  });

  // get-request for data
  return axios.get(`${API_URL}/${subUrl}/vacancies/searchExtra`, {
    params: { filter },
    headers: { Authorization: token },
  });
};

export default getJobs;
```

---

## Обработчик ошибок (isAxiosError)

```ts
catch (error) {
  if (axios.isAxiosError(error)) {
    console.log('error message: ', error.message);
    return error.message;
  } else {
    console.log('unexpected error: ', error);
    return 'An unexpected error occurred';
  }
}
```

---

## TypeScript

Можно типизировать axios через дженерик-тип после метода.

```ts
type GetUsersResponse = {
  data: SomeItem[]; // типизируем данные
};

axios.get<GetUsersResponse>('some-url', {
  options,
});
```

---

### Пример асинхронной функции с axios

```ts
import axios from 'axios';

type UpdateUserResponse = {
  name: string;
  job: string;
  updatedAt: string;
};

async function updateUser() {
  try {
    // 👇️ const data: UpdateUserResponse
    const { data } = await axios.put<UpdateUserResponse>(
      'https://reqres.in/api/users/2',
      { name: 'John Smith', job: 'manager' },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );

    console.log(JSON.stringify(data, null, 4));

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      // 👇️ error: AxiosError<any, any>
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}
```
