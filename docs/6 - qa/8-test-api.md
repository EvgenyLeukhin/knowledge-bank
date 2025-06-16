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

## Scripts

- Можно использовать в `pre-req` и в `post-res`.
- Также можно сгенерировать набор скриптов: Коллекция --> ... ---> Generate test
- В коде тестов можно использовать `console.log()`, а потом смотреть вывод данных в консоли на нижней панели

Примерные варианты скриптов.

```js
pm.test('Response status code is 200', function () {
  pm.response.to.have.status(200);
});

pm.test('Response has the required fields', function () {
  const responseData = pm.response.json();

  pm.expect(responseData).to.be.an('array');

  responseData.forEach(function (item) {
    pm.expect(item.drugstore).to.exist;
    pm.expect(item.available).to.exist;
    pm.expect(item.unavailable).to.exist;
    pm.expect(item.in_one_hour).to.exist;
    pm.expect(item.pickup_date).to.exist;
    pm.expect(item.client_pickup_date).to.exist;
    pm.expect(item.pickup_interval).to.exist;
    pm.expect(item.is_accept_recipe).to.exist;
    pm.expect(item.common_unavailable_reason).to.exist;
  });
});

pm.test('UUID and offer_id are in a valid format', function () {
  const responseData = pm.response.json();

  pm.expect(responseData).to.be.an('array');

  responseData.forEach(function (item) {
    pm.expect(item).to.have.property('drugstore').that.is.an('object');
    pm.expect(item.drugstore.uuid)
      .to.be.a('string')
      .and.to.have.lengthOf.at.least(1);

    item.drugstore.available.forEach(function (availableItem) {
      pm.expect(availableItem)
        .to.have.property('offer_id')
        .that.is.a('string')
        .and.to.have.lengthOf.at.least(1);
    });
  });
});

pm.test('Available array should contain at least one element', function () {
  const responseData = pm.response.json();

  pm.expect(responseData).to.be.an('array');
  responseData.forEach(function (item) {
    pm.expect(item.drugstore.available)
      .to.be.an('array')
      .and.to.have.lengthOf.at.least(1);
  });
});

pm.test('Pickup date is in a valid date format', function () {
  const responseData = pm.response.json();

  responseData.forEach(function (item) {
    pm.expect(item.pickup_date).to.match(/^\d{4}-\d{2}-\d{2}$/);
  });
});

// тест на кол-во аптек
pm.test('Аптек в выдаче больше 1000', function () {
  const responseData = pm.response.json();
  pm.expect(responseData).to.be.an('array');
  pm.expect(responseData.length).to.be.greaterThan(1000); // Ctrl + Space
});

// тест на интервалы
pm.test(
  "Ошибок 'Нет подходящих интервалов для аптеки' не больше чем 100",
  function () {
    const responseData = pm.response.json();
    pm.expect(responseData).to.be.an('array');

    let filtered = 0;

    responseData.forEach(function (item) {
      if (
        item.common_unavailable_reason == 'Нет подходящих интервалов для аптеки'
      ) {
        filtered++;
      }
    });

    pm.expect(filtered).to.be.lessThan(100);
  },
);
```

---

### Token

[How to automatically set a Bearer Token for your Postman requests?](https://community.postman.com/t/how-to-automatically-set-a-bearer-token-for-your-postman-requests/10126/8)

---

## Установка Postman CLI

`brew install --cask postman` - Install Postman CLI

`postman login --with-api-key API_KEY` - Зарегистрировать пользователя по CLI

`postman collection run 4238395-f9da3763-3190-47d9-b3ee-e1529653fa88` - Запустить тестирование коллекции

`npm install -g newman` - Install Newman (Уже устаревшая технология)

---

Можно использовать postman-cli для тестирования API.

### Залогинить postman внутри cli

`postman login --with-api-key номер-пользователя`

---

### Запуск тестирования коллекции

`postman collection run 4238395-25d68cf2-a10e-4dcd-9921-096fc17c48fb`

---

### Можно добавлять консольные сообщения

```js
// TEST 1 - проверка 200 статус-кода
pm.test('GET USER - Status code is 200', function () {
  pm.response.to.have.status(200);
});

// TEST 2 - проверка значения поля (что поле data.firsta_name === 'Rachel')
pm.test('USER FIRST NAME CHECK', () => {
  const jsonData = pm.response.json();
  pm.expect(jsonData.data.first_name).to.eql('Rachel');
});
```

---
