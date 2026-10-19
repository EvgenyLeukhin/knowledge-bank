---
title: http-сервис
sidebar_position: 9
---

## http-сервис

Объект с методами одного ресурса. Запросы идут через общий `httpClient`: в нём уже заданы `baseURL` и заголовки. Метод возвращает данные, признак успеха и ошибку, а не сырой ответ axios.

```js
import httpClient from './http-client';

const planetsService = {
  async getPlanets(params) {
    try {
      const { data, status } = await httpClient.get('/planets', {
        params,
      });

      return {
        data,
        success: status === 200,
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        success: false,
        error,
      };
    }
  },

  async getPlanet(id) {
    try {
      const { data, status } = await httpClient.get(`/planets/${id}`);

      return {
        data,
        success: status === 200,
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        success: false,
        error,
      };
    }
  },

  async createPlanet(payload) {
    try {
      const { data, status } = await httpClient.post('/planets', payload);

      return {
        data,
        success: status === 201,
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        success: false,
        error,
      };
    }
  },
};

planetsService
  .getPlanets({
    limit: 50,
    offset: 0,
    sort: {
      name: 'ASC',
    },
  })
  .then(({ data, success, error }) => {
    if (success) {
      console.log(data);
    } else {
      console.log(error);
    }
  });

const showPlanets = async () => {
  const { data, success, error } = await planetsService.getPlanets({
    limit: 50,
    offset: 0,
    sort: {
      name: 'ASC',
    },
  });

  if (success) {
    console.log(data);
  } else {
    console.log(error);
  }
};

showPlanets();
```

Список читают через `getPlanets`, одну планету — через `getPlanet(1)`, создание — через `createPlanet`. Фильтр и сортировка приходят аргументом `params` и уходят в query-строку.
