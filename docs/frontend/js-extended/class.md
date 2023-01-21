---
title: Классы ++-
sidebar_position: 4
---

```Классы``` - это своего рода конструкторы объектов. В них можно создавать методы и наследовать свойства. 

```Классы в JS``` = функции, создающие объекты-заготовки, компоненты, которые можно многократно переиспользовать (экпортировать/импортировать, а также РАСШИРЯТЬ свойства) для создания типовых объектов, чтобы постоянно не дубрировать одинаковый код. Именуются с большой буквы.

На классах построена работа всех современных js-фреймворков. Раньше были в основном ОБЪЕКТЫ или ФУНКЦИИ, создающие ОБЪЕКТЫ, сейчас КЛАССЫ.

Допустим, есть какой-то набор данных.

```js
const players = [
  { name: 'Leonel Messi',      age: 35,  citizenship: 'Argentina' },
  { name: 'Cristiano Ronaldo', age: 37,  citizenship: 'Portugal' },
  { name: 'Kylian Mbappé',     age: 24,  citizenship: 'France' },
  { name: 'Erling Haaland',    age: 22,  citizenship: 'Norway' },
];
```
***

### constructor()

- Вызывается всегда при вызове класса
- Метод для конструирования свойств будущего объекта
- Может содержать или не содержать параметры
- Эти параметры нужно передавать при вызове класса.

Можно для такого вида данных создать класс:

```js
class Footballer {

  // конструктор класса - свойства класса (будущего объекта)
  // через this указываем название будующих свойств и присваиваем им значения
  constructor(playerData) {
    this.name = playerData.name;
    this.age = playerData.age;
    this.citizenship = playerData.citizenship;
  }

  // метод класса (будущего объекта)
  showName() {
    console.log(this.name);
  }
}
```

***

### Создание объектов (экземпляров класса)

```js
// Создание экземпляра класса - передача объекта в параметре
const player1 = new Footballer(players[0]);

// объект
player1; // Footballer {name: 'Leonel Messi', age: 35, citizenship: 'Argentina'}

// просмотр свойства
player1.citizenship; // 'Argentina'

// вызов метода
player1.showName(); // 'Leonel Messi'

```

***

### Наследование (extends, super)

- При ```extends``` будут автоматически наследоваться все методы родителя
- ```super()``` вызывает родительский конструктор и принимает его параметры 
- Если в ```super()``` нужно прокивыдать родительскому конструктору какие-либо данные из вне, то нужно их сначала прокинуть в конструктор данного наследуемого класса.

Если появился формат данных с новыми полями, то чтобы не создавать классы с дублирущими свойствами и методами, можно создать класс с наследованием.

Допустим, что для какого-ниб случая появляется новое поле ```isAlive```. 

```js
const legendaryPlayers = [
  { name: 'Pele',            age: 82, citizenship: 'Brazil',    isAlive: false },
  { name: 'Maradona',        age: 60, citizenship: 'Argentina', isAlive: false },
  { name: 'Johan Cruijff',   age: 68, citizenship: 'Nederland', isAlive: false },
  { name: 'Zinédine Zidane', age: 50, citizenship: 'France',    isAlive: true },
];
```

Можно создать новый класс с наследованием:

```js
class LegengaryFootballer extends Footballer {
  // указываем в конструкторе наследуемый параметр родителя и наш новый параметр
  constructor(playerData, isLive) {

    // в super - передаем параметр в конструктор родителю
    super(playerData);
  }

  // создаем новый метод этого класса
  showIsLive() {
    console.log(`${this.name} is alive: ${this.isLive}`);
  }
}
```

```js
const player2 = new LegengaryFootballer(legendaryPlayers[6], legendaryPlayers[6].isAlive);

// вызов родительского метода - работатет
player2.showName(); // 'Zinédine Zidane'

// вызов своего метода - работает
player2.showIsLive(); // 'Zinédine Zidane is alive: true'

// просмотр нового поля
player2.isAlive; // true

```

***

### Перезапись методов

- Если в дочернем классе создать одноименный метод, то он перезапишет родительский
- Но родительский класс можно все еще также вызывать через ```super```

```js
class LegengaryFootballer extends Footballer {
  ...
  // перезапись родительского метода
  showName() {
    console.log(this);

    // вызов род. метода
    super.showName();
  }
  ...
}
```

***

### get, set (Изменение свойств)

Типа для создания особых свойств объектов, как бы «виртуальное» свойство.

- «геттер» – для чтения
- «сеттер» – для записи

Обычные свойства объектов - это свойства-данные, но есть еще другой тип свойств объектов - 
свойства-аксессоры. По своей сути это функции, которые используются для присвоения и получения значения, но во внешнем коде они выглядят как обычные свойства объекта.
Свойства-аксессоры представлены методами: «геттер» – для чтения и «сеттер» – для записи. При литеральном объявлении объекта они обозначаются ```get``` и ```set```:

```js
class LegengaryFootballer extends Footballer {
  ...
  // создаем вычистяемое свойство ageInMonths
  // которое вернёт возраст в месяцах
  get ageInMonths() {
    return this.age * 12
  }
  ...
}

// Выводим данное поле
player2.ageInMonths; // 600
```

Это поле менять нельзя. Если сделать запись:

```js
player2.ageInMonths = 1000;
```

А потом попробовать его вывести, то результат отанется прежним:

```js
player2.ageInMonths; // 600
```

Чтобы это поле можно было изменять - нужно добавить сеттер:

***

### Короткая запись (без constructor())

Если конструктор класса не содержит параметров, то конструктор можно не записывать.

```js
class Someclass {
  prop1 = 'Some text';
  prop2 = 'Some another text';
}

const some = new Someclass();

console.log(some.prop1); // 'Some text'
```
***

### static type

TODO

***

### Функциональное прототипирование

TODO - Как пользовались раньше без классов

***

### bind, this

Пример - Привязка контекста к методам класса


```js
class Transport {
  constructor(type, price, vendor, model) {
    this.type = type;
    this.price = price;
    this.vendor = vendor;
    this.model = model;
  }

  getInfo() {
    return `${this.vendor}, ${this.model}`;
  }

  getPrice() {
    return this.price.toLocaleString('ru-RU') + ' ₽';
  }
}

class Car extends Transport {
  constructor(vendor, model, doorsCount, price) {
    super('car', price, vendor, model);
    this.doorsCount = doorsCount;
  }
  
  // Привязка контекста
  getInfo = this.getInfo.bind(this);
  getPrice = this.getPrice.bind(this);
  getDoorsCount = this.getDoorsCount.bind(this);

  getDoorsCount() {
    return `Кол-во дверей: ${this.doorsCount}`;
  }
}

class Bike extends Transport {
  constructor(vendor, model, maxSpeed, price) {
    super('bike', price, vendor, model);
    this.maxSpeed = maxSpeed;
  }
  
  // Привязка контекста
  getInfo = this.getInfo.bind(this);
  getPrice = this.getPrice.bind(this);
  getMaxSpeed = this.getMaxSpeed.bind(this);

  getMaxSpeed() {
    return `Макс. скорость: ${this.maxSpeed} км/ч`;
  }
}

const car1 = new Car('KIA', 'Rio', 5, 1200000);
const { getDoorsCount } = car1;
console.log(getDoorsCount());
```

***

### Еще пример класса

```js
class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }

  hide() {
    this.$el.style.display = 'none'
  }

  show() {
    this.$el.style.display = 'block'
  }
}
```

```js
class Box extends Component {
  constructor(options) {
    // передаем параметр родителю
    super(options.selector);

    // задаем стили
    this.$el.style.background = options.color;
    this.$el.style.height = this.$el.style.width = `${options.size}px`;
  }
}

const box = new Box({
  selector: '#box',
  color: 'red',
  size: 100,
})
```

Добавляем в html:

```html
<div id="box"></div>
```

Можно использовать методы

```js
box.hide();
box.show();
```

***
