---
title: Хэлперы
sidebar_position: 2
---

## hasOwnProperty, Object.hasOwn

Проверка на наличие свойства

```js
const person = {
  firstName: 'John',
  lastName: 'Smith',
};

person.hasOwnProperty('firstName'); // true
person.hasOwnProperty('age'); // false

person.age = 33;
person.hasOwnProperty('age'); // true
```

То же самое с Object.hasOwn()

```js
const person = {
  firstName: 'John',
  lastName: 'Smith',
};

Object.hasOwn(person, 'firstName'); // true
Object.hasOwn(person, 'age'); // false

person.age = 33;
Object.hasOwn(person, 'age'); // true
```

Ещё один гиковский способ

```js
const person = {
  firstName: 'John',
  lastName: 'Smith',
};

'firstName' in person; // true
'age' in person; // false
```

---

## Object.keys, Object.values, Object.entries

Создание массива из объекта

```js
const someObj = { a: 1, b: 2, c: 3, d: 4 };

// создание массива из ключей
Object.keys(someObj); // [ 'a', 'b', 'c', 'd' ]

// создание массива из значений
Object.values(someObj); // [ 1, 2, 3, 4 ]

// создание массива массивов из пар ключ-значение
Object.entries(someObj); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ], [ 'd', 4 ] ]
```

Обработка объекта циклом

```js
const someObj = { a: 1, b: 2, c: 3, d: 4 };

// keys
Object.keys(someObj).forEach(key => {
  console.log('key', key); // 'a','b','c','d'
});

// values
Object.values(someObj).forEach(value => {
  console.log('value', value); // 1, 2, 3, 4
});

// keys and values (деструктуризация массива)
Object.entries(someObj).forEach(([key, value]) => {
  console.log('key', key); // 'a','b','c','d'
  console.log('value', value); // 1, 2, 3, 4
});
```

---

## Object.fromEntries

Обратная операция, из массива в объект

```js
const someArr = [
  ['a', 1],
  ['b', 2],
  ['c', 3],
  ['d', 4],
];

const someObj = Object.fromEntries(someArr); // { a: 1, b: 2, c: 3, d: 4 }
```

---

## Object.getOwnPropertyNames

Более лаконичный аналог Object.keys

```js
const someObj = { a: 1, b: 2, c: 3, d: 4 };

Object.getOwnPropertyNames(someObj); // [ 'a', 'b', 'c', 'd' ]
```

---

## Object.seal*, Object.isSealed*

- Изменять: ✅
- Добавлять: ❌
- Удалять: ❌

```js
const someObj = Object.seal({ a: 1, b: 2, c: 3, d: 4 });

someObj.a = 0; // изменять можно
someObj.e = 5; // добавлять нельзя
delete someObj.d; // удалять нельзя

someObj; // { a: 0, b: 2, c: 3, d: 4 }

// проверка
Object.isSealed(someObj); // true
```

---

## Object.freeze*, Object.isFrozen*

- Изменять: ❌
- Добавлять: ❌
- Удалять: ❌

```js
const someObj = Object.freeze({ a: 1, b: 2, c: 3, d: 4 });

someObj.a = 0; // изменять нельзя
someObj.e = 5; // добавлять нельзя
delete someObj.d; // удалять нельзя

someObj; // { a: 1, b: 2, c: 3, d: 4 }

// проверка
Object.isFrozen(someObj); // true
```

---

## Object.preventExtensions\*

- Изменять: ✅
- Добавлять: ❌
- Удалять: ✅

```js
const someObj = Object.preventExtensions({ a: 1, b: 2, c: 3, d: 4 });

someObj.a = 0; // изменять можно
someObj.e = 5; // добавлять нельзя
delete someObj.d; // удалять нельзя

someObj; // { a: 0, b: 2, c: 3 }
```

---

## Object.defineProperty\*

Умная настройка свойств

```js
const obj = {};

Object.defineProperty(obj, 'id', {
  value: 1,

  // нельзя изменять
  writable: false,

  // не попадёт в Object.keys(), не будет в for...in, не будет в JSON.stringify()
  enumerable: false,
});

obj.id = 123;

obj.id; // 1
```
