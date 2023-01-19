---
title: Задачи по JS
sidebar_position: 3
---

Напишите функцию, которая умеет превращать строки вроде "a.b.c" в объекты. Результатом для строки-примера будет "a": {"b": {"c": {}}}. 

```js
function namespace(string) {
  const stringArray = string.split('.');
  // return stringArray;
  return stringArray.reduceRight((previousValue, currentValue, index, array) => {
    let newObject = new Object;

    // ??? непоянтно что свойству присваиваем два значения через запятую
    return newObject[currentValue] = previousValue, newObject;
  });

  // return stringArray;
}
  const a = namespace('a.b.c.d.e'); // "{"a":{"b":{"c":{"d":{"e":{}}}}}}"
  console.log(a);
```
