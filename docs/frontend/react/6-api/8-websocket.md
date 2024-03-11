---
title: websocket
sidebar_position: 8
---

- Протокол непрерывного канала связи браузера с сервером.
- wws://...
- чаты, стримы, онлайн игры
- приложения для совместной работы

```ts
// подключение к WebSocket
socket.current = new WebSocket('wss://comit-backend-main.review.eapteka.ru/api/v1/naumen?logintest=test');

// onopen - success connect
socket.current.onopen = () => {
  setIsConnected(true);
  setIsSocketError(false);
  setIsClose(false);
  console.log('Соккет открыт');
};

// onmessage ???
socket.current.onmessage = event => {
  ...
};

// onclose ???
socket.current.onclose = () => {
  ...
};

// onerror - error connect
socket.current.onerror = () => {
};

// send
socket.current.send(...),
```
