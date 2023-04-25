---
title: Объекты ++-
sidebar_position: 6
---

- **Самый основной тип данных в JS**. Состоит из пар: имя-значение или ключ-значение.

- Объект вызывается с помощью **фигурных скобок {...}** - поле объекта, в которые вставляются свойства данного объекта. Свойства в объектах перечисляются через "," присваиваются через ":", набодобие как в CSS.

- ```Объект -> Свойство объекта -> Значение свойства (key: value)```. Если в свойстве обекта лежит функция, то она называется методом объекта.

- В JS по сути ```ОБЪЕКТЫ === ФУНКЦИИ```, так как функция в основном возвращает объект {}

## Синтаксис

```ts
{
  ключ1(свойство1): значение1,
  ключ2(свойство2): значение2,

  ключN(свойствоN): значениеN,
}
```

## Создание объекта

```ts
// с помощью переменной и глобального класса-конструктора (старый способ)
const a = new Object();
a.someProperty = true;


// с помощью переменной (новый способ)
const person = {
  name: 'Evgeny',
  sername: 'Leukhin',
  age: 33,
  man: true,
  "likes birds": true,
};
```

---

## Простые действия с объектами

- ### Вывести отдельное свойство

  Обращение к свойству объекта осуществляется через оператор доступа (```.```) или через (```[]```) . 
  
  Если мы будем обращаться к несуществующему свойству объекта, то ошибки не будет, а просто вернется ```undefined```.

  ```ts
  person.age; // 37
  person['age']; // 37
  person["likes birds"]; // true
  person.height; // unknown property -> return undefined
  ```

  ---

- ### Изменить свойство

  ```ts
  person.age = 37;
  ```

  ---

- ### Добавить новое свойсвто

  ```ts
  person.country = 'Russia';
  ```

  ---

- ### Удалить свойство

  ```ts
  delete person.age;

  person['age']; // undefined
  ```

---

## Методы объектов

Если свойством объекта является функция, то она называется методом.

```ts
// some object method
let person = {
  name: 'Evgeny',
  showName() {
    return `${this.name}`;
  },
};

person.showName(); // 'Evgeny'
```

---

## Вложенные объекты

```ts
let person = {
  wife: {
    name: 'Inna',
    sername: 'Begunova',
    age: 33,
  }
};

console.log(person.wife.name); // 'Inna'
```

---

## Деструктурирование

```ts
const { title, width } = options;

// with change value
const { title: 'anoter value', width } = options; // bad practive

// nesting
const { title, width: { fullWidth } } = options;
```

---

## this

- Обращение к ТЕКУЩЕМУ объекту. this указывает на принадлежность к текущему объекту, как бы глубоко не находились его свойства.

- Сейчас (2023) this уже в основном не используется, так как все перешли на стрелочный метод записи, у которого нет ```this```.

```ts
// старая запись
var table = {
  height: 100,
  legsCount: 4,
  myFunc: function() {
    this.height = 300;   }
};

// новая запись
TODO
```

---

## ```__proto__```

```__proto__``` - особое свойство всех объектов, в котором нельзя что-либо изменять. Содержит много встроенных свойст.

Можно создавать объекты-прототипы

```ts
// с помощью класса Object принимает объект прототип
// создание объекта с наследуемыми свойствами в прототипе
const b = Object.create({ x: 10, y: 20 });
```

---

## Проверка объектов

```ts
const someObj = {
  name: 'John',
  surname: 'Smith',
};

// не учитываются наследованные свойства
someObj.hasOwnProperty('name'); // true
someObj.hasOwnProperty('surname'); // true
someObj.hasOwnProperty('age'); // false

// учитываются наследованные свойства
'name' in someObj; // true
'age' in someObj; // false

// проверка через оператор доступа
someObj.name; // 'John'
someObj.age; // undefined

```

---

## Сравнение объектов

Функциии - это тоже объекты. Можно создавать ссылки на объекты и сравнивать.

```js
function a() {};

const b = a;

console.log(a === b); // true
console.log([b].includes(a)); // true 
```

```js
const callback1 = () => {
  console.log('Event emitted');
}

const callback2 = () => {
  console.log('Event emitted');
}

const b1 = callback1;
const b2 = callback2;

// сравнение объектов
b1 === callback1; // true
b1 === callback2; // false - так как разные переменные
b2 === callback1; // false - так как разные переменные
b2 === callback2; // true


// так как анонимная функция не содержит ссылки и поэтому будут не равны
callback !== () => console.log('Event emitted');;
```

---

## Объекты-ссылки

TODO

---

## Spread оператор

TODO

---

## JSON

React apps works with JSON API.

TODO

---

## Функции, создающие объекты

Название аргументов будет являться названием свойств объекта, если использовать сокращенную запись

```ts
function makeUser(name, age) {
  return { name, age };
}

const user1 = makeUser('John', 33);

user1; // { name: 'John', age: 33 }
```
