---
title: Запросы c TS
sidebar_position: 5
---

## httpClient

TODO

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
