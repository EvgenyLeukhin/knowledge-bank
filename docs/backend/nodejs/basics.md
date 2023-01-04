---
title: Basics
sidebar_position: 0
---

[Download Nodejs](https://nodejs.org/en/download/)

NodeJS — интерпретатор JavaScript, основанный на движке V8. Тот же движок работает в браузерах на базе Chromium — он транслирует JavaScript в машинный код. Однако NodeJS исполняет код вне браузера, например на сервере. Так JavaScript из специализированного языка для сайтов превращается в универсальный язык программирования.
NodeJS добавляет возможность работать с устройствами ввода-вывода через свой API (написанный на C++) и подключать библиотеки, написанные на разных языках, обеспечивая вызовы к ним из JavaScript-кода.

## npm

**npm** — это пакетный менеджер JavaScript. Аналоги в других ЯП / системах — pip, apt. Этот менеджер по умолчанию устанавливается вместе с NodeJS.
Как и с любым другим пакетным менеджером — можно устанавливать пакеты из глобального хранилища. 

Инициализация проекта.

```bash
npm init -y
```

Пакетный менеджер может быть не только глобальным, но и локальным внутри компании. По умолчанию пакеты скачиваются из ```--registry=https://registry.npmjs.org/```. 

Если npm в компании локальный, в корне проекта можно найти файл .npmrc, где описаны разные параметры, в том числе и registry:

```bash
registry=https://npm.yandex.net/ 
```

***

## Импорты в nodejs

### require

Как видно из примеров выше — можно импортировать хоть классы (сервис, контроллер), хоть функции (express).
Для экспорта достаточно использовать ключ exports в глобальном объекте ```module```.
Для импорта — применить функцию require и передать путь к файлу (можно даже относительный).

Реализуем модуль и подключим его к ```index.js```, чтобы можно было использовать функции и другую логику внутри него.

- ```service.js``` — реализует логику определённой сущности;
- ```controller.js``` — будет использовать логику из файла ```service.js```, чтобы реализовать бизнес логику;
- ```index.js``` — файл с запуском сервера, с использованием библиотеки Express.

### Сервис

Сервис должен уметь обращаться, например, к GitHub API для получения списка публичных репозиториев.

```js title="service.js"
class GithubService {
  requestRepos(filters) { // Принимаем какие-то фильтры
    // Логика запроса. В данном случае она нас не интересует.
  }
}

module.exports = GithubService;
```

### Контроллер

Контроллер должен обрабатывать запрос от пользователя к серверу, приводить пришедшие данные к формату для сервиса по работе с GitHub API и возвращать полученные репозитории.

```js title="controller.js"
const GithubService = require('./service');

class GithubController {
  getRepositories(req, res, next) {
    const {body} = req;
    const serviceFilters = something(body); // Приводим фильтры к нужному виду

    // Какая-то бизнес логика
    GithubService.requestRepos(serviceFilters)
      .then(data => {
        res.send(data);
      })
      .catch(error => {
          next(error);
      });
  }        
}

// Для экспорта достаточно использовать ключ exports в глобальном объекте module.
module.exports = {
  controller: GithubController,
};
```

```js title="index.js"
const express = require('express');

const { controller } = require('./controller');

const app = express();

app.get('/', controller.getRepositories);

app.listen(3000, function () {
  console.log('Мы запустили приложение и можем ходить в гитхаб');
});
```
