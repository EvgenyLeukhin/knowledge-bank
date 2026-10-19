---
title: Веб-сокеты
sidebar_position: 10
---

## WebSocket

Канал, который остаётся открытым: и браузер, и сервер могут отправлять сообщения в любой момент. Адрес начинается с `ws://` или с `wss://` для шифрованного соединения.

[WebSocket](https://developer.mozilla.org/docs/Web/API/WebSocket)

```js
const socket = new WebSocket('wss://echo.websocket.events');

socket.onopen = () => {
  console.log('open');
  socket.send('hello');
};

socket.onmessage = event => {
  console.log(event.data);
};

socket.onerror = () => {
  console.log('error');
};

socket.onclose = event => {
  console.log('close', event.code);
};
```

Этот сервер сначала присылает текстовое приветствие, а затем возвращает то, что ему отправили. `send` принимает строку. Свой объект превращают в JSON и разбирают только такие сообщения: приветствие сервера объектом не является.

```js
socket.onopen = () => {
  socket.send(
    JSON.stringify({
      text: 'hello',
    }),
  );
};

socket.onmessage = event => {
  try {
    const data = JSON.parse(event.data);

    console.log(data);
  } catch {
    console.log(event.data);
  }
};
```

Соединение закрывают методом `close`. Пока оно открыто, у сокета `readyState` равен `1`.

```js
socket.close();
```
