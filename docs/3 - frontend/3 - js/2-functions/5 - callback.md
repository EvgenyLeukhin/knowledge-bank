---
title: Колбэки
sidebar_position: 5
---

- **Колбэк** - это функция, котороя передаётся в виде параметра в другую функцию и вызывается внутри её тела.

## Пример синхронного колбэка

```js
const f1 = () => console.log('value >= 0');
const f2 = () => console.log('value is positive or zero');

const someFunc = (value, cb) => {
  if (value >= 0) {
    return cb();
  }

  return null;
};

someFunc(10, f1); // вызов функции с колбэком f1 - 'value >= 0'
someFunc(10, f2); // вызов функции с колбэком f2 - 'value is positive or zero'
```

---

## Колбэк с параметром (thunk или callback-wrapper)

```js
const f1 = text => console.log(text);

const someFunc = (value, cb) => {
  if (value >= 0) {
    return cb();
  }

  return null;
};

// вызываем анонимную функцию (thunk или колбэк-обёртка), которая возвращает колбэк с аргументом
someFunc(10, () => f1('value is positive'));
```

---

## Пример без колбэка

В синхронных колбэках есть смысл только тогда, когда нужно обрабатывать результат по-разному. В остальных случаях нет смысла использовать колбэки, так как можно просто вызывать функции напрямую

```js
const someFunc = value => {
  if (value >= 0) {
    return console.log('value >= 0');
  }

  return null;
};

someFunc(10); // 'value >= 0'
```

---

Асинхронные колбэки будут рассмотрены в разделе **Асинхронность**.
