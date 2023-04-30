---
title: Условия
sidebar_position: 9
---

## Сохранение условия в переменную

```js
let a = 5;

const isEqual1 = a === 4; // false
const isEqual2 = a === 5; // true
const isEqual3 = a >= 0; // true
const isEqual4 = a >= 10; // false
```

---

## if-else

```js
let a = true;

if (a) {
  console.log('a is true');
} else {
  console.log('a is false');
}

// nesting - bad practice
if (a) {
  if (a > 0)  {
    console.log('a is positive');
  } else {
    console.log('a is negative');
  }
} else {
  console.log('a is false');
}
```

---

## switch-case

Удобно пользоваться, когда вариантов значений может быть много. case - проверка на случай, их может быть сколь угодно.

break - прерывание инструкции, если какой-либо case будет true, то проверка прервётся и другие случаи не будут проверяться.

default - аналог else, если не выбирется ни один case, то сработает default.

Если бы не стоял break, то инструкции для a = 6, a = 7, default также бы сработали.

```js
let A = 5;

// check A
switch(A) { 
  case 0: console.log('A = 0'); break;
  case 1: console.log('A = 1'); break;
  case 2: console.log('A = 2'); break;
  case 3: console.log('A = 3'); break;
  case 4: console.log('A = 4'); break;
  case 5: console.log('A = 5'); break;
  case 6: console.log('A = 6'); break;
  case 7: console.log('A = 7'); break;

  // default case
  default: console.log('A are not inside this range');
};
```

---

## Тернарный оператор (?:)

```js
let a = true;

a ? alert(true) : alert(false);
```
