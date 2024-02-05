---
title: websocket
sidebar_position: 2
---

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
