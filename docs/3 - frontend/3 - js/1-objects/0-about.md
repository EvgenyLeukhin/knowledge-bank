---
title: Синтаксис
sidebar_position: 0
---

Если переменная это коробка, то объект - это как бы шкаф, в котором они лежат, где каждое свойство (поле) объекта играет роль переменной.

```js
// syntax (key, property, field): value
{
  key1: value1,
  key2: value2,
  ...,
  keyN: valueN,
}
```

```js
// Создание объекта (I способ - обычное через переменную)
const someObj = {
  key1: 'string',
  key2: 123,
  key3: null,
  key4: undefined,
  key5: true,
  key6: true,
  key7: [],
  key8: {},
  key9: () => '123', // метод (свойство хранить функцию)
  'key 10': 'This is value of js-object property',
};
```

```js
// Создание объекта (II способ - через конструктор)
const someObj = new Object({ title: 'Война и мир', author: 'Лев Толстой' });
```

```js
// Создание объекта (III способ - более гибкое создание объекта с прототипированим
// (скрытые поля, сеньёрская тема))
const someObj = Object.create(
  {
    x: 1,
    y: 2,
  },
  {
    title: { value: 'Война и мир' },
    author: { value: 'Лев Толстой' },
  },
);
```

Объекты также могут иметь вложенные объекты в виде свойств и вообще включать в себя очень разветвленную структуру.

Раньше в JS можно было создавать поля объектов строками, но сейчас это уже плохая практика.

```js
// лучше так не делать
const a = {
  'свойство 1': 1,
  'свойство 2': 2,
};

// нужно так
const a = {
  property1: 1,
  property2: 2,
};
```

Также свойства в одном объекте не должны иметь одинаковые названия, JS на это ругаться не будет, просто будет перезапись этого поля, а TypeScript будет ругаться.

```js
const a = {
  property1: 1,
  property1: 2, // так нельзя
};
```

---

## Обращение к свойству объекта

```js
// I способ (через точку - оператор доступа)
someObj.key1; // 'string'
```

```js
// II способ (через [] и строковое поле)
someObj['key1']; // 'string'

// II способ всегда используется при строковом значении полей объекта
someObj['key 10']; // 'This is value of js-object property'
```

```js
// III способ через переменную
const fieldName = 'key 10';
someObj[fieldName]; // 'This is value of js-object property'
```

```js
// вызов метода
someObj.key9(); // '123'

// вызов несуществующего метода
someObj.key1(); // Будет ошибка "TypeError: person.upAge2 is not a function"
```

```js
// Обращение к несуществующему полю (TS будет ругаться)
someObj.key10; // undefined
```

---

## Добавление, изменение, удаление полей

```js
const person = {
  name: 'Jack',
  lastName: 'Jackson',
  age: 35,
  city: 'New York, USA',
  isComputerUser: true,
};

// Добавление поля (JS не ругается, TS будет)
person.isAlive = true;
person.isAlive; // true
```

```js
// Изменение поля (Если будет другой тип данных, то TS будет ругаться)
person.city = 'Chicago, USA';
person.city; // 'Chicago, USA'
```

```js
// Удаление поля - I способ через ключевое слово delete
delete person.isComputerUser;

// Удаление поля - II способ, можно присвоить undefined
person.isComputerUser = undefined;
```

---

## Вложенные объекты

```js
let person = {
  wife: {
    name: 'Inna',
    sername: 'Begunova',
    age: 33,
  },
};

console.log(person.wife.name); // 'Inna'
```

---

## Boolean

Любой объект, даже пустой всегда `true`.

```js
Boolean({}); // true
```
