---
title: API и БД
sidebar_position: 8
---

- При возникновении неисправностей в первую очередь проверяется КЛИЕНТ, далее СЕРВЕР, далее БД.
- Нужно находить потенциальные уязвимости в клиент-серверной архитектуре, тестировать на возможность доступа к данным или возможности перехвата.

## Инструменты для тестирование API

- [Postman](https://www.postman.com/) with [newman](https://www.npmjs.com/package/newman)
- [Thunder Client for VS Code](https://www.thunderclient.com/)
- [Swagger](https://swagger.io/) - Интерактивныое представление/описание API как веб-приложение с открытым исходным кодов. Описание и документация API. Swagger UI.
- [Insomnia](https://insomnia.rest/download) - Desktop-приложение для тестирования API
- [Charles](https://www.charlesproxy.com/latest-release/download.do) - Proxy-server - мониторинг запросов. Сниффер - анализатор трафика.
- [authenticationtest.com](https://authenticationtest.com/simpleFormAuth/) - Тестирование авторизации
- [users.bugred](http://users.bugred.ru/) - Тестирование авторизации 2

***

## Тестовые API

- [Swapi](https://swapi.dev/) - ```https://swapi.dev/api```
- [REQRES](https://reqres.in/) - ```https://reqres.in/```
- [Список университетов](http://universities.hipolabs.com/) - ```http://universities.hipolabs.com/search?name=middle&country=Turkey```
- [GraphQL and REST API for Testing and Prototyping](https://gorest.co.in/) - ```https://gorest.co.in/public/v2/users```

***

## Postman
§
```brew install --cask postman``` - Install Postman CLI
```npm install -g newman ``` - Install Newman

