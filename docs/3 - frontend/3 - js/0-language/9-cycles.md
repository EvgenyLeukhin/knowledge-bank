---
title: Циклы
sidebar_position: 9
---

## Классические циклы

### while

#### Ключевые слова, используемые в классических циклах:

- `break` - выход из цикла (прерывание всего цикла)
- `continue` - выход из текущей итерации (прерывание текущей итерации)

ВАЖНО!: `continue` нельзя записывать до увеличения итератора, чтобы не возник бесконечный цикл

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

Интрукции в do выполнятся всегда на первую итерацию, даже если устловие в while ложное

```js
let i = 0;

do {
  console.log('i: ', i);
  i++;
} while (i < 10);
```

---

Также можно использовать continue.

```js
let i = 0;

do {
  // first console - выполнится на каждую итерацию
  console.log('first console', i, '\n');

  // нельзя размещать после continue;
  i++;

  if (i === 5) {
    continue;
  }

  // second console - не выполнится при i === 5, так как стоит continue
  console.log('second console', i, '\n');
} while (i < 10);
```

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
