---
title: Запросы c TS
sidebar_position: 5
---

## httpClient

Можно создать свой httpClient на основе axios, в котором можно разместить все общие параметры и подключить перехватчики.

```ts
import axios from 'axios';
import { API_URL } from 'apiUrl';

// 
const httpClient = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
});

// https://stackoverflow.com/questions/43051291/attach-authorization-header-for-all-axios-requests
httpClient.interceptors.request.use(
  config => {
    // Do something before request is sent
    // console.log('interceptors request config', config);

    // обращаемся к user-token (он может быть в ls, cookies, store)
    const token = 'inject your user token'; // testStore.getState().app.userData.token;

    // будет подставляться user-token ко всем запросам в headers, если он есть
    config.headers.Authorization = token || '';

    return config;
  },
  error => {
    console.log('interceptors request error', error);

    dispatch(
      setAlertMessageThunk({ message: `${error}`, type: 'error' }) as never,
    );

    // Do something with request error
    return Promise.reject(error);
  },
);

// Некоторые полезные методы для перехватчиков
// Автоподстановка токена
const getAuthorizationHeaderSetterInterceptor = (
    getToken: () => string
) => (config: AxiosRequestConfig) => {
    const accessToken = getToken();
    if (accessToken && !isAuthRequest(config.url)) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
};

// Обработка неуспешной авторизации
const getTokenInvalidInterceptor = (error: AxiosError) => {
    if (error.response?.status === 401 || error.response?.data.message === 'Invalid JWT Token') {
        store.dispatch(logoutAction());
        if (window.location.pathname.length < 1) {
            window.location.href = '/';
        }
    }
    return Promise.reject(error);
}

// Проверка соединения
const getConnectionErrorInterceptor = (error: AxiosError) => {
    const connectionError = fetch('https://www.yandex.ru/', {
        mode: 'no-cors',
    }).catch(() => {
        store.dispatch(setMessageAction(messageHandler('Отсутствует соединение с интернетом!')))
    })
    return Promise.reject(error);
}
```

***

## Services

TODO

---

## API_URL & env

```yarn add cross-env```

### .env.development

```s
# NEXT_PUBLIC_URL=some-url.development.com
NEXT_PUBLIC_URL=https://stage1.producthired.com/api/api
```

### .env.production

```s
# NEXT_PUBLIC_URL=some-url.production.com
NEXT_PUBLIC_URL=https://proe.producthired.com/api/api
```

```json
"scripts": {
  "dev": "cross-env NODE_ENV=development env-cmd -f ./api/.env.development next dev",
  "dev:8888": "cross-env NODE_ENV=development env-cmd -f ./api/.env.development next dev -p 8888",
  "build": "cross-env NODE_ENV=production env-cmd -f ./api/.env.development next build",
}
```

### apiUrl

```ts
export enum EnvList {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}

const { DEVELOPMENT, PRODUCTION } = EnvList;

export const API_URL = process.env.NEXT_PUBLIC_URL;

export const returnEnv = (): EnvList => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return DEVELOPMENT;
    case 'production':
      return PRODUCTION;
    default:
      return DEVELOPMENT;
  }
};

export const isDev = returnEnv() === DEVELOPMENT;
export const isProd = returnEnv() === PRODUCTION;
```
