---
title: Свойство как метод
sidebar_position: 1
---

## this

`this` — это ссылка на объект, в контексте которого выполняется функция. Нужно в синтаксисе для методов, чтобы была связь с передаваемым объектом.

```js
const user = {
  name: 'Ann',
  printName() {
    console.log(this.name);
  },
};

user.printName(); // 'Ann'
```

## Методы внутри объекта

```js
const person = {
  name: 'Jack',
  age: 33,

  // I способ - полная запись
  printName1: function () {
    console.log('name:', this.name); // this - обращение к текущему объекту
  },

  // II способ - более короткая запись (свойство-функция)
  printName2() {
    console.log('name:', this.name);
  },

  // III способ - стрелочная функция (this здесь не будет работать, так как стрелочная функция имеет свой локальный scope)
  // у стрелок нет собственного this, они берут его из внешнего контекста - обычно не используются как методы
  printName3: () => {
    console.log('name:', this.name);
  },

  // метод с переменной
  changeAge(value) {
    this.age = value;
  },

  // если нужно просто изменить поле объекта, то ключевое слово return можно не использовать
  upAge() {
    ++this.age;
  },
};
```

---

## Вызовы методов

```js
person.printName1(); // 'name' 'Jack'

person.printName2(); // 'name' 'Jack'

person.printName3(); // 'name:' '' из-за стрелочной функции

person.age; // 33 - исходное

person.changeAge(35); // меняем age

person.age; // 35 - поменялось на 35

person.upAge(); // меняем age

person.age; // 36 - увеличилось на 1
```

---

## call, bind, apply\*

Применяются редко, но нужно знать. Встроенные методы функций для работы с объектами.

### call

Можно создать отдельную функцию и вызывать её для разных объектов. Одна функция — много объектов. Вы пишете логику один раз, а конкретные данные берутся из this.
`.call` передаёт `this`.

```js
const person1 = { name: 'Alice' };
const person2 = { name: 'Mary' };

// создаём универсальную функцию для взаимодействия с разными объектами
function greet1() {
  console.log(`Hello, ${this.name}`);
}

// функция с агрументом
function greet2(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

// .call - вызов самой функции
greet1.call(person1); // 'Hello, Alice'
greet1.call(person2); // 'Hello, Mary'

greet2.call(person1, 'Hello'); // 'Hello, Alice'
greet2.call(person2, 'Hi'); // 'Hi, Mary'
```

---

### bind

Ключевая идея: `.bind` создаёт новую функцию с уже «прикреплённым» this (и, при необходимости, аргументами). `.bind` позволяет сохранять результат в виде новой функции.

```js
...

const greetAlice = greet1.bind(person1);
const greetMary = greet1.bind(person2);

// .bind - вызов новых созданных функции
greetAlice(); // 'Hello, Alice'
greetMary(); // 'Hello, Mary'

// можно зафиксировать и аргумент
const sayHelloToAlice = greet2.bind(person1, 'Hello');
const sayHiToMary = greet2.bind(person2, 'Hi');

sayHelloToAlice(); // 'Hello, Alice'
sayHiToMary(); // 'Hi, Mary'
```

---

### apply

Ключевая идея: `.apply` работает как .call, но аргументы передаются массивом, удобно когда аргумент - массив.

```js
...

// .apply - без аргументов работает как .call - вызывается исходная функция
greet1.apply(person1); // 'Hello, Alice'
greet1.apply(person2); // 'Hello, Mary'

// apply принимает аргументы массивом - вызывается исходная функция
greet2.apply(person1, ['Hello']); // 'Hello, Alice'
greet2.apply(person2, ['Hi']);    // 'Hi, Mary'
```

---

## get/set\*

Применяются редко, но нужно знать. Если нужно изменить вызов метода на присвоение, то можно добавлять существующим методам в начале ключевые слова get или set. Get - если метод только получает данные полей объекта, set - если изменяет.

- `get` — доступ как к свойству, без ()
- `set` — изменение через присваивание
- Обычные методы — вызываются только с ()

```js
const user = {
  first: 'Ann',
  last: 'Lee',

  // обычные методы
  printFullName() {
    return `${this.first} ${this.last}`;
  },
  changeFullName(value) {
    [this.first, this.last] = value.split(' ');
  },
};

// вызов методов
user.printFullName(); // 'Ann Lee'
user.changeFullName('John Smith');

// запись если бы стояло get
user.printFullName; // 'Ann Lee'

// запись если бы стояло set
user.changeFullName = 'John Smith';
```

### get\*

Если нужно обращаться к методу как к свойству, то перед этим методом нужно поставить ключевое слово get.

```js
const user = {
  first: 'Ann',
  last: 'Lee',

  // добавляем get
  get printFullName() {
    return `${this.first} ${this.last}`;
  },
};

// обращение к этому вычисляемому полю
user.printFullName; // 'Ann Lee'

// будет работать аналогично, если убрать ключевое слово get из метода
// user.printFullName(); // "TypeError: user.fullName is not a function"
```

---

### set\*

Если нужно умноё поле, котое через присваиваемое (set) значение меняет свойства. Может принимать только один параметр

```js
const user = {
  first: 'Ann',
  last: 'Lee',

  // добавляем set
  set changeFullName(value) {
    [this.first, this.last] = value.split(' ');
  },
};

// присваиваем значение полю, и при этом будет как бы отрабатывать метод, меняющий значение других полей
user.changeFullName = 'John Smith';

user.first; // 'John'

// будет работать аналогично, если убрать ключевое слово set из метода
// user.changeFullName('John Smith'); // 'TypeError: user.changeFullName is not a function'
```
