---
title: Express
sidebar_position: 1
---

Express — это инструмент, который позволяет написать веб-сервер любой сложности. Даже некоторые высоконагруженные приложения работают, используя NodeJS и Express.

- Установить пакет: `npm i express --save-dev`

- Запуск сервера: `node ./server.js`

## Базовый конфиг

```js title="server.js"
// server.js
const express = require('express');

const app = express();
const PORT = 4000;

app.use(express.static('./'));

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
```

Заметим, что, запустив свой сервер, вы можете получить HTML не только в браузере, но и в терминале, используя команду `curl http://localhost:4000/`, или в Postman, Owasp ZAP и иных подобных инструментах.

### С использованием \_\_dirname

```js title="server.js"
const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

// путь до index.html
const PATH = path.join(__dirname, './');

app.use(express.static(PATH));

app.listen(PORT, () => {
  console.log(`Мой текст в логе после запуска ${PORT}!`);
});
```

### С обработчиком запросов

```js title="server.js"
const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const API_PREFIX = '/api/v1';
const PATH = path.join(__dirname, './');

app.use(express.static(PATH));

// хэндлер get-запроса
app.get(`${API_PREFIX}/text`, (req, res) => {
  res.status(200).send('Hello, World!');
});

// хэндлер put-запроса
app.put(`${API_PREFIX}/json`, (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(201).send({ data: { items: [1, 2, 3] } });
});

// слушанье сервера
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}`);
});
```

Будут возвращаться данные по таким запросам

```bash
# status: 200, "Hello, World!"
curl http://localhost:3000/api/v1/text

curl -X PUT http://localhost:3000/api/v1/json
# status: 201, headers: content-type - json, {"data": {"items": [1, 2, 3]}}
```
