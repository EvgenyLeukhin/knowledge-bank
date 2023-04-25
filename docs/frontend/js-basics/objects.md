---
title: Объекты ++-
sidebar_position: 6
---

## TypeScript

Объекты в TypeScript можно описывать с помощью ключевого слова ```object```. Про это ключевое слово нужно знать, но не стоит использовать. Этот тип не говорит почти ни о чём ни компилятору, ни человеку. И последнее — даже важнее.

```ts
// Плохо — ничего не знаем про содержимое объекта
const colors: object = {
  red: '#F00',
  green: '#0F0',
  blue: '#00F'
}; 
```

Намного лучше описывать объекты так, как они есть — со всеми полями и типами данных в них. Для этого используется такая запись:

```ts
const settings: {
  color: string;
  delay: number;
  retry: boolean;
} = {
  color: '#F00',
  delay: 2000,
  retry: false
};
```

Или через type:

```ts
type TSettings = {
  color: string;
  delay: number;
  retry: boolean;
}

const settings: TSettings = {
  color: '#F00',
  delay: 2000,
  retry: false
};
```

### Record

Иногда бывают задачи, где не важно знать о ключах объекта (например, они динамически добавляются и удаляются), но важно знать, что в значениях лежат только числа (например делаем счётчик чего-то). В таких случаях поможет тип ```Record```:

```ts
// Record<тип_ключа, тип_значения>
const counter: Record<string, number> = {
    apple: 1,
    orange: 8,
    banana: 6,
    grape: 5
};
```

Альтернативой Record может быть вот такая запись:

```ts
const counter: { [key: string]: number } = {
  apple: 1,
  orange: 8,
  banana: 6,
  grape: 5
};
```

Этот синтаксис стоит иметь в виду при работе с типами, но для продуктовых задач чаще хватает Record или явного описания объекта.

***

### Опциональные ключи

В объектах также можно описать опциональные ключи — они могут быть, а могут не быть. Для этого используется символ ```?``` после ключа:


```ts
// Это ок, поля price нет в объекте
const price: { name: string; price?: number } = {
  name: 'Товар1'
};

// Это ок, поле price есть и имеет тип number
const price2: { name: string; price?: number } = {
  name: 'Товар1',
  price: 5
};

// Не ок, тип price не попадает в number
const price3: { name: string; price?: number } = {
  name: 'Товар1',
  price: '5'
}; 
```

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

const someDynamicField = 'hasCar';
const key = 'name';


// с помощью переменной (новый способ)
const person = {
  name: 'Evgeny',
  sername: 'Leukhin',
  age: 33,
  man: true,
  "likes birds": true, // свойство в несколько слов
  [someDynamicField]: true, // свойство-переменная в []
};

person.hasCar; // true

person[key]; // 'Evgeny'
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
    return this.name;
  },
};

person.showName(); // 'Evgeny'
```

## this

Обращение к ТЕКУЩЕМУ объекту. this указывает на принадлежность к текущему объекту, как бы глубоко не находились его свойства.

```ts
// старая запись
var table = {
  height: 100,
  legsCount: 4,
  changeHeight: function() {
    this.height = 300;   }
};

table.changeHeight();
table.height; // 300
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

```ts
const someObj = {
  name: 'John',
  surname: 'Smith',
};

const someObj2 = someObj;
const someObj3 = someObj;

// ссылки совпадают
someObj === someObj2; // true
someObj === someObj3; // true
someObj2 === someObj3; // true

// при изменеии каких-ли свойств, будет изменение у ссылки
// и поменяется во всех копиях
someObj2.age = 37;

someObj2.age; // 37
someObj3.age; // 37
someObj.age; // 37

```

---

## Spread оператор

Исползуется для копирования свойств объекта и при сравнении этих объектов не будет общей ссылки.

```ts
const someObj = {
  name: 'John',
  surname: 'Smith',
};

const someObj2 = {
  ...someObj,
};

someObj === someObj2; // false
```

---

## JSON

[MDN-link](http://localhost:3000/knowledge-bank/docs/frontend/js-basics/objects/#%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%8E%D1%89%D0%B8%D0%B5-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B)

React apps works with JSON API.

JSON является синтаксисом для сериализации объектов, массивов, чисел, строк логических значений и значения null. Он основывается на синтаксисе JavaScript, однако всё же отличается от него: не каждый код на JavaScript является JSON, и не каждый JSON является кодом на JavaScript.

```json
{
  "some-prop1": 123,
  "some-prop2": [...],
  "some-prop3": {},
  "some-prop4": "String",
}
```


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

---

## Optional chaining

```ts
const person = {
  name: 'Evgeny',
  sername: 'Leukhin',
  age: 33,
  // wife: {
  //   name: 'Inna',
  //   surname: 'Begunova',
  // }
};

person.wife.name; // Uncaught TypeError: Cannot read properties of undefined (reading 'name') 
person?.wife?.age; // undefined
```

---

## Object.assign

Создание нового объекта по подобию другого.

```ts
// исходный объект
const person = {
  name: 'Evgeny',
  sername: 'Leukhin',
  age: 33,
};

// новый объект
const person2 = Object.assign(person);

person2.age = 37; // не перепишет person.age

// создание нового объекта + добавление новых полей
const person3 = Object.assign(person, { city: 'Omsk', region: 55 }); // { name: 'Evgeny', sername: 'Leukhin', age: 33, city: 'Omsk', region: 55 }
```

---

## Object.keys

TODO
