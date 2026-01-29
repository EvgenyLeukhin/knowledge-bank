---
title: Свойство как метод
sidebar_position: 1
---

## Методы внутри объекта

```js
const person = {
  name: 'Jack',
  age: 35,

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

## Вызовы методов

```js
person.printName1(); // 'name' 'Jack'

person.printName2(); // 'name' 'Jack'

person.printName3(); // 'name:' ''

person.changeAge(30);

person.age; // 30

person.upAge();

person.age; // 31
```

---

## call, bind, apply

TODO

---

## get/set

Если нужно изменить вызов метода на присвоение, то можно добавлять существующим методам в начале ключевые слова get или set. Get - если метод только получает данные полей объекта, set - если изменяет.

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

### get

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
user.printFullName(); // "TypeError: user.fullName is not a function"
```

---

### set

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

// будет работать аналогично, если убрать ключевое слово set из метода
user.changeFullName('John Smith'); // 'TypeError: user.changeFullName is not a function'
```
