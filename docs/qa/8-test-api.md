---
title: Тестирование API
sidebar_position: 9
---

## Инструменты для тестирование API

- [Postman](https://www.postman.com/) with [newman](https://www.npmjs.com/package/newman)
- [Thunder Client for VS Code](https://www.thunderclient.com/)
- [Swagger](https://swagger.io/) - Интерактивныое представление/описание API как веб-приложение с открытым исходным кодов. Описание и документация API. Swagger UI.
- [Insomnia](https://insomnia.rest/download) - Desktop-приложение для тестирования API
- [Charles](https://www.charlesproxy.com/latest-release/download.do) - Proxy-server - мониторинг запросов. Сниффер - анализатор трафика.
- [authenticationtest.com](https://authenticationtest.com/simpleFormAuth/) - Тестирование авторизации
- [users.bugred](http://users.bugred.ru/) - Тестирование авторизации 2
- [Интернетомер](https://yandex.ru/internet/) - Проверка скорости интернета

---

- При возникновении неисправностей в первую очередь проверяется КЛИЕНТ, далее СЕРВЕР, далее БД.
- Нужно находить потенциальные уязвимости в клиент-серверной архитектуре, тестировать на возможность доступа к данным или возможности перехвата.

---

## Collection

Создание отдельных директории с набором (коллекцией) запросов.

---

## Enviroment

Сохранение переменных. Чтобы постоянно не прописывать длинные url можно сохранять их в отдельные переменные.

---

## Установка Postman CLI


```brew install --cask postman``` - Install Postman CLI

```postman login --with-api-key API_KEY``` - Зарегистрировать пользователя по CLI

```postman collection run 4238395-f9da3763-3190-47d9-b3ee-e1529653fa88``` - Запустить тестирование коллекции

```npm install -g newman ``` - Install Newman (Уже устаревшая технология)

---

Можно использовать postman-cli для тестирования API. 

### Залогинить postman внутри cli

```postman login --with-api-key номер-пользователя```

---

### Запуск тестирования коллекции

```postman collection run 4238395-25d68cf2-a10e-4dcd-9921-096fc17c48fb```

---

### Можно добавлять консольные сообщения

```js
// TEST 1 - проверка 200 статус-кода
pm.test("GET USER - Status code is 200", function () {
    pm.response.to.have.status(200);
});

// TEST 2 - проверка значения поля (что поле data.firsta_name === 'Rachel')
pm.test("USER FIRST NAME CHECK", () => {
    const jsonData = pm.response.json();
    pm.expect(jsonData.data.first_name).to.eql('Rachel');
});
```

---
