---
title: Null & undefined +
sidebar_position: 6
---

- `null` нужно явно присвоить
- `undefined` автоматически присваивается необъявленным переменным, неинициализированным переменным и отсутствующим параметрам функций

## null

Задаётся строго. Обычно как инициализируюшее значение, а после каких-либо операций ему может присваиваться любой другой тип.

В отличие от `undefined`, здесь переменная определена и равна null.

```js
const a1 = null;

// проверять на null можно только при полном сравнении, typeof определяет null как объект
// check for null
if (a1 === null) {
  console.log('a is null');
} else {
  console.log('a is not null');
}

typeof null; // 'object' - ошибка в JS
```

---

## undefined

```js
typeof undefined; // 'undefined'

// переменные неопределены и равны undefined
var a2;
let b2;

// проверка с помощью typeof
typeof a2 === 'undefined'; // true
typeof b2 === 'undefined'; // true

// проверка с помощью строгого сравнения
a2 === undefined; // true
b2 === undefined; // true

// undefined принимают также:
// несуществующие поля объектов
// несуществующие элементы массива
// незаполненные аргументы функций при вызове
```

---

## Преобразование типов

```js
Boolean(null); // false
Boolean(undefined); // false

Number(null); // 0
Number(undefined); // NaN

null ?? 'default'; // "default"
undefined ?? 'default'; // "default"

// сравнение типов
null == undefined; // true
null === undefined; // false
```

---

## JSON

- `null` является валидным значением в JSON
- `undefined` не поддерживается в JSON
