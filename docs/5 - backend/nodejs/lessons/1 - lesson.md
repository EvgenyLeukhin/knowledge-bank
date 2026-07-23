---
title: Урок 1. Node.js: runtime, nvm, npm и мышление бэкенда
sidebar_position: 0
---

Цель урока: понять, **что такое Node**, как выбрать версию через **nvm**, как работает **процесс сервера**, и чем это отличается от фронта.

Стек курса дальше: **Node.js + TypeScript + Fastify**.

---

## 1. Что такое Node.js (простыми словами)

Во фронте JS работает в браузере.  
**Node.js** — это программа в ОС, которая тоже запускает JS/TS, но:

- без DOM (`document`, `window` нет)
- с доступом к файлам, сети, процессам
- обычно держит **долгий процесс**, который слушает порт и отвечает на HTTP

Аналогия:

| Фронт                       | Бэкенд на Node                  |
| --------------------------- | ------------------------------- |
| React-приложение в браузере | сервер в терминале              |
| реагирует на клики          | реагирует на HTTP-запросы       |
| закрыл вкладку — всё        | пока процесс жив — API работает |

Когда вы сделаете `node server.js` или `npm run dev`, в системе появится процесс, как у nginx или Go-сервиса (`grpc-server`).

Полезные ссылки:

- [Download and install Node.js](https://nodejs.org/en/download/)
- [nvm](https://github.com/nvm-sh/nvm)

---

## 2. nvm: какую версию поставить

Для обучения берите **LTS**. Сейчас разумно:

```bash
nvm install 22
nvm use 22
nvm alias default 22
```

Проверка:

```bash
node -v   # ожидаем v22.x
npm -v    # придёт вместе с Node
which node
```

`nvm` удобен тем, что можно иметь несколько версий и переключать их по проектам.

---

## 3. npm: не «магия», а менеджер пакетов

`npm` ставится вместе с Node.

Важные понятия:

- **пакет** — библиотека (`fastify`, `zod` и т.д.)
- `package.json` — манифест проекта (как `go.mod`, но для Node)
- `node_modules/` — скачанные зависимости (обычно не коммитят)
- `package-lock.json` — точные версии (как `go.sum`)

Команды, которые понадобятся сразу:

```bash
npm init -y                 # создать package.json
npm install fastify         # зависимость для runtime
npm install -D typescript   # dev-зависимость
npm run <script>            # запустить скрипт из package.json
```

`-D` = нужно для разработки/сборки, не обязательно «в проде» как runtime-библиотека.

Документация: [package.json](https://docs.npmjs.com/cli/v10/configuring-npm/package-json).

---

## 4. Модули: как фронтендеру это знакомо

В современном Node обычно **ESM** (`import/export`), как во фронте.

Пример `hello.mjs`:

```js
export function sum(a, b) {
  return a + b;
}
```

```js
import { sum } from './hello.mjs';

console.log(sum(2, 3));
```

Запуск:

```bash
node hello-run.mjs
```

Есть и старый формат CommonJS (`require`) — в новых проектах лучше ESM + TypeScript.

---

## 5. Самое важное отличие бэкенда: процесс живёт долго

Мини-сервер без фреймворков (чтобы увидеть суть):

```js
// server.mjs
import http from 'node:http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify({ ok: true, path: req.url }));
});

server.listen(3000, () => {
  console.log('API on http://localhost:3000');
});
```

Запуск:

```bash
node server.mjs
```

Проверка в другом терминале:

```bash
curl http://localhost:3000/hello
```

Пока вы не нажмёте `Ctrl+C`, процесс слушает порт `3000` и отвечает.  
Это и есть «API запущен» — Fastify позже сделает то же красивее.

Во фронте аналог слабый: скорее долгоживущий `vite`/`webpack-dev-server`, но ваш UI всё равно в браузере. Здесь **сам Node и есть сервер**.

---

## 6. async/await на бэкенде

На фронте await часто для `fetch`.  
На бэкенде await — для:

- запроса в БД
- чтения файла
- вызова другого сервиса
- таймеров/очередей

Правило то же: не блокируйте event loop тяжёлым синхронным кодом в горячих местах. Пока достаточно помнить: **I/O = async**.

```js
async function getUser() {
  // позже тут будет await db.query(...)
  return { id: 1, name: 'Ann' };
}

const user = await getUser();
```

---

## 7. Карта в голове

```text
Клиент (браузер/Postman)
        │  HTTP
        ▼
Node process (Fastify/Express)
        │
        ├─ route / handler
        ├─ validation
        ├─ service (бизнес-логика)
        └─ db / внешние API
```

В типичном backend-проекте на Go слои похожи: `cmd` → `delivery` → `service` → `repository`.  
Язык другой, схема мышления — та же.

---

## Практика к Уроку 1

Сделайте по шагам:

1. Установите Node 22 через nvm, покажите вывод:

   ```bash
   node -v
   npm -v
   ```

2. Создайте папку, например `~/learn-api`, и файл `server.mjs` с кодом выше.
3. Запустите сервер и выполните:

   ```bash
   curl http://localhost:3000/ping
   ```

4. Ответьте своими словами (2–4 предложения):
   - чем Node отличается от JS в браузере?
   - что происходит, пока сервер запущен?

Бонус (по желанию): добавьте в ответ поле `time` с текущим ISO-временем (`new Date().toISOString()`).

---

## Критерий «урок закрыт»

Вы можете:

- поставить нужную версию Node через nvm
- запустить долгий HTTP-процесс
- дернуть его через `curl`
- объяснить, что сервер = процесс в ОС

---

## Дальше

**Урок 2:** TypeScript для бэкенда — инициализация проекта, `tsconfig`, запуск TS.
