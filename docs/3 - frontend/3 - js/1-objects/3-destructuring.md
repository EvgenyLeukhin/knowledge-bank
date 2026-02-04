---
title: Деструктуризация
sidebar_position: 3
---

## Название полей --> название переменных

```js
const person = {
  name: 'Jack',
  lastName: 'Jackson',
  age: 35,
  city: 'New York, USA',
  isComputerUser: true,
  height: 183,
};

const { name, lastName, age, city, isComputerUser } = person;

name; //'Jack'
lastName; // 'Jackson'
age; // 35
city; // 'New York, USA'
isComputerUser; // true

// создание изменяемой локальной переменной
let { height } = person;

height; // 183
height = 185;
height; // 185 --> изменилось значение локальной переменной

person.height; // 183 --> в исходном объекте значение поля не изменилось
```

---

## Деструктуризация с присвоением

```js
const person = {
  name: 'Jack',
  lastName: 'Jackson',
  age: 35,
  city: 'New York, USA',
  isComputerUser: true,
  height: undefined, // или отсутствие этого поля, с null работать не будет
};

// Если такого поля нет, то будет undefined
const { height } = person;

height; // undefined
```

```js
// Если такого поля нет, то можно будет присвоить значение по умолчанию
const { height = 'Unknown' } = person;

height; // 'Unknown'
```

---

## Дополнительные возможности деструктуризации

### Переименование свойства

```js
const { name: userName } = person;

userName; // 'Jack'
```

### Вложенная деструктуризация

```js
const user = {
  name: 'Jack',
  address: { city: 'New York', zip: 10001 },
};

const {
  address: { city },
} = user;

city; // 'New York'
```

---

### Объект из остаточных свойств (rest)

```js
const { name, ...rest } = person;

name; // 'Jack'
rest; // { lastName: 'Jackson', age: 35, city: 'New York, USA', isComputerUser: true, height: undefined }
```

---

### Безопасное значение по умолчанию для отсутствующего объекта

```js
const { title = 'Untitled' } = data ?? {};
```

---

### Деструктуризация в параметрах функции

```js
const printUser = ({ name = 'Unknown', age } = {}) => {
  return `${name}, ${age}`;
};

printUser(person); // 'Jack, 35'
printUser(); // 'Unknown, undefined'
```

---

### Также можно сделать деструктуризацию массива

```js
const [a, b, c] = ['value1', 'value2', 'value3'];

a; // 'value1'
b; // 'value2'
c; // 'value3'
```
