---
title: Функции ✓
sidebar_position: 3
---

В скобках - типизация параметров, за скобками типизация return функции.

```ts
// expression
const someFunction = (val1: number, val2: number): number => {
  return Number(val1) + Number(val2);
}
```

```ts
// declaration
function someFunction(val1: number, val2: number): number {
  return Number(value1) + Number(val2);
}
```


```ts
// пример с void - функция ничего не возвращает
const onClickButton = (): void => {
  setState(!state);
}
```
