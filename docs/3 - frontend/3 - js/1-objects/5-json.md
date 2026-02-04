---
title: JSON
sidebar_position: 5
---

JSON (JavaScript Object Notation) — формат обмена данными, основанный на объектах JavaScript.

Основные особенности

- Только двойные кавычки для строк и ключей
- Нельзя использовать функции, undefined, символы и BigInt
- Не копирует Date, Map/Set, Infinity.
- Можно хранить числа, строки, булевы, null, массивы и объекты

Где используется

- Обмен данными между клиентом и сервером (API, REST)
- Хранение настроек и конфигов в файлах (например, `package.json`)
- Передача данных между приложениями и сервисами

---

## Преобразование в JSON

```js
const user = {
  name: 'Jack',
  age: 35,
  isAdmin: false,
  hobbies: ['music', 'sport'],
};

const json = JSON.stringify(user);

json; // '{"name":"Jack","age":35,"isAdmin":false,"hobbies":["music","sport"]}'
```

---

## Преобразование из JSON

```js
const json = '{"name":"Jack","age":35,"isAdmin":false}';
const user = JSON.parse(json);

user.name; // 'Jack'
user.age; // 35
user.isAdmin; // false
```

---

## Частые ошибки

```js
const data = { value: undefined };

JSON.stringify(data); // '{}' (undefined не сериализуется)
```

```js
const bad = "{'name':'Jack'}";

JSON.parse(bad); // SyntaxError (в JSON только двойные кавычки)
```

---

## Фильтрация и форматирование

```js
const user = {
  name: 'Jack',
  age: 35,
  password: 'secret',
};

// 1 - обрабатываемый объект
// 2 - перечисляем нужные поля
// 3 - отступ (indentation)
const safeJson = JSON.stringify(user, ['name', 'age'], 2);

safeJson;
// '{
//   "name": "Jack",
//   "age": 35
// }'
```

---

## Передача кода функции в JSON

```js
const jsonString = `{"funcCode": "() => console.log('Hello, World!')"}`;

const data = JSON.parse(jsonString);

const func = new Function('return' + data.funcCode)();

func(); // 'Hello, World!'
```
