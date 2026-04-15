---
title: Generic
sidebar_position: 7
---

## Generic в функции

```ts
// передача типизации через аргумент - аргумент функции будет иметь такой тип, который будет передан
function someFunc<T>(arg: T) {
  return arg;
}

const a: string = 'a';
const b: number = 1;
const c: ISomeObj = { name: '123', age: 12, city: 'NY' };

const a1 = someFunc(a); // string
const b1 = someFunc(b); // number
const c1 = someFunc(c); // ISomeObj
```
