---
title: Null и undefined
sidebar_position: 5
---

## TypeScript

```ts
const some1: null = null;
const some2: undefined = undefined;
const some3: null | undefined = undefined;
```

---

## Null

Задаётся строго. Обычно как инициализируюшее значение, а после каких-либо операций ему может присваиваться любой другой тип. В отличие от usdefined, здесь переменная определена и равна null.

```js
let a = null;
```

---

## Undefined

Когда создаём переменную, но не присваиваем значение. Работает только с `var` и `let`, с `const`будет ошибка, так как ей нужно сразу что-ниб присваивать.

```js
let a;
typeof a; // undefined

if (a === undefined) console.log('Переменная не определена');
```
