---
title: Автоматизация
sidebar_position: 9
---

Можно использовать postman-cli для тестирования API. 

### Залогинить postman внутри cli
```postman login --with-api-key номер-пользователя```

### Запуск тестирования коллекции
```postman collection run 4238395-25d68cf2-a10e-4dcd-9921-096fc17c48fb```

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
