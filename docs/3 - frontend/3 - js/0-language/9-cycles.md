---
title: Циклы
sidebar_position: 9
---

## Классические циклы

### while

```js
let i = 0;

while (i < 10) {
  console.log(i);

  if (i === 10) {
    break;
  }
  i++;
}
```

```js
let i = 0;

while (i < 10) {
  console.log(i);
  i++;

  // если на какую-то итерацию нужно прервать выполнение кода ниже
  if (i === 5) {
    console.log('i is 5');
    continue;
  }

  // при i === 5 этот код не выполнится, так как стоит continue;
  doSomething();

  // если нужно пректатить цикл
  if (i === 10) {
    break;
  }
}
```

---

### do-while

---

TODO

---

## Циклы для массивов

## for

TODO

---

### .forEach

TODO

---

### .map()

---

TODO

---

## Циклы для объктов

### for-of

TODO

---

### for-in

TODO

---
