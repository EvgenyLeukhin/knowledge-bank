---
title: http-client
sidebar_position: 2
---

## Базовый пример на axios

```js
import axios from 'axios';
import config from 'config';
import { store } from 'store';

// используется для всех запросов кроме авторизации
const httpClient = axios.create({
  baseURL: config.host,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': '*', // чтобы не было CORS на бэке должно быть такое или строго указан localhost
  },

  // Конфигурация для параметров запроса, чтобы можно было использовать массивы в параметрах запроса
  // [CANCELLED, RESOLVED] --> statuses=CANCELLED&statuses=RESOLVED
  paramsSerializer: {
    indexes: null,
  },
});

export default httpClient;
```

---

## ENV и сonfig file

Сохранение API_URL в `.env`

```sh title=".env.local"
# main
REACT_APP_API_HOST=https://some-server-1.ru

# test
# REACT_APP_API_HOST=https://some-server-2.ru

# prod
# REACT_APP_API_HOST=https://some-server-3.ru
```

Файл конфига проекта

```js title="config.ts"
const ENV = process.env;

export const isDev: boolean = ENV.NODE_ENV === 'development';
export const isProd: boolean = ENV.NODE_ENV === 'production';

export const PROJECT_NAME = 'Партнерский маркетплейс';
export const AUTH_TIMEOUT = 1000;

const config = {
  host: `${ENV.REACT_APP_API_HOST}`,
  isSandbox: !!ENV.REACT_APP_IS_SANDBOX,
  mode: `${ENV.NODE_ENV}`,
};

export default config;
```

## Перехватчики

```js
import { store } from 'store';
import { AxiosError } from 'axios';
import { setMessage } from 'store/slices/appSlice';

// вставляем токен в заголовок Authorization при отправке запроса
httpClient.interceptors.request.use(config => {
  // токен из стора или localStorage
  const token = store.getState().app.authData?.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// перехватчики ответов с сервера
httpClient.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    // ошибка авторизации или доступа
    if (error.response?.status === 401 || error?.response?.status === 403) {
      store.dispatch(
        setMessage({
          type: 'error',
          text: 'Токен авторизации истек. Пожалуйста, авторизуйтесь заново',
        }),
      );
    }

    // ошибка отсутствия подключения к интернету
    if (!error.response && !navigator.onLine) {
      store.dispatch(
        setMessage({
          type: 'error',
          text: 'Отсутствует подключение к интернету',
        }),
      );
    }

    // когда сервер не отвечает
    if (!error.response) {
      store.dispatch(setMessage({ type: 'error', text: 'Сервер недоступен' }));
    }

    return Promise.reject(error);
  },
);
```
