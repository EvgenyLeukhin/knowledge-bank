---
title: Условия +
sidebar_position: 8
---

## if, if-else

```js
let a = true;

if (a) {
  console.log('a is true');
} else {
  console.log('a is false');
}
```

### nesting

```js
let b = 1;

if (b) {
  if (b > 0) {
    console.log('b is positive');
  } else {
    console.log('b is negbtive');
  }
} else {
  console.log('b is false');
}
```

### nesting with return

```js
const C = 5;

// ТАК НЕЛЬЗЯ: нельзя писать return внутри if, только внутри функции
if (C) {
  if (C > 0) {
    return console.log('C is positive');
  }

  return console.log('C in 0 or negative');
}

// ВОТ ТАК МОЖНО: return внутри функции
const checkValue = (C: number) => {
  if (C) {
    if (C > 0) {
      return console.log('C is positive');
    } else {
      return console.log('C is negative');
    }
   }

   return console.log('C is 0');
}

checkValue(11); // 'C is positive'
```

### if-else

```js
let c = 5;

if (c < 0) {
  console.log('c is negative');
} else if (c > 0) {
  console.log('c is positive');
} else if (c === 0) {
  console.log('c is zero');
} else {
  console.log('c is not defined');
}
```

### Сокращенная запись

```js
// если одно действие можно опустить тело условия
if (true) console.log('Hi!');

// можно записать на след. строке
if (true) console.log('Hi again');

if (false) {
  console.log('first');
  // если в теле else только одно действие, то {} тоже можно опустить
} else console.log('second');
```

---

## switch-case

```js
let A = 5;

// check A
switch (A) {
  case 0:
    console.log('A = 0');
    break;
  case 1:
    console.log('A = 1');
    break;
  case 2:
    console.log('A = 2');
    break;
  case 3:
    console.log('A = 3');
    break;
  case 4:
    console.log('A = 4');
    break;
  case 5:
    console.log('A = 5');
    break;
  case 6:
    console.log('A = 6');
    break;
  case 7:
    console.log('A = 7');
    break;

  // default case
  default:
    console.log('A are not inside 0-7 range');
}

// сработает console.log('A = 5');
// если не поставить break, то выполнятся все последующие консоли
```

---

## Ternary operator (? :)

```js
let SOME_CONST = true;

const D = SOME_CONST ? 'D is true' : 'D is false';
```
