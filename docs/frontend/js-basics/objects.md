---
title: Объекты +--
sidebar_position: 7
---

Some content

Обработка объектов

## get и set

Созданы для того, чтобы можно было высчитывать значения полей, вставлять в них логику.

```js
const person = Object.create(
  {
    // object protorype
    // сюда можно добавлять кастомные методы
    showSomething() {
      console.log('Hello, World!');
    }
  }, 
  {
    name: {
      value: 'Leonel Messi',

      // дескрипторы
      enumerable: true, // по умолчанию false (не будет отображаться в цикле for)
      writable: true, // чтобы можно было перезаписывать
      configurable: true, // чтобы работал delete
    },
    birthYear: {
      value: 1987,
      enumerable: true,
      writable: true,
    },
    age: {
      // вычисляемое поле
      // вычисление значения данного поля
      get() {
        return new Date().getFullYear() - this.birthYear;
      },

      // Будет отрабатывать данный код, когда будет присваиваться новое значение этому полю
      set(value) {
        alert(value);
      },
    }
  }
);
```

```js
person.age; // 36
person.age = 35 ; // --> alert(35)


for (let key in person) {
  console.log(`${key}:`, person[key]);

  if (person.hasOwnProperty) {
    // если не нужно пробегаться по прототипу
  }
}
```
