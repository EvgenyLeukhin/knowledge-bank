---
title: Классы 👎
sidebar_position: 12
---

- О Proxy подробно и с примерами в [«Современном учебнике JavaScript»](https://learn.javascript.ru/proxy);
- Новые [#приватные поля классов](https://medium.com/devschacht/javascripts-new-private-class-fields-c60daffe361b) в JavaScript.

```Классы``` - это своего рода конструкторы объектов или "умные объекты", которые можно наследовать. В них можно создавать методы и наследовать свойства. 

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
// Создание экземпляра класса - передача объекта c данными в параметре
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
  addToDom() {
    // create ul element
    const ul = document.createElement('ul');

    // create li elements and add to ul
    for (const key in this) {
      const li = document.createElement('li');
      li.innerHTML = `${key}: <b>${this[key]}</b>`;
      ul.appendChild(li);
    }

    // add ul to body
    document.body.appendChild(ul);
  }
```

***

### get, set (Изменение свойств)

Надстройка над полями объектов. Типа для создания особых свойств объектов, как бы «виртуальное» свойство.

- «геттер» – для чтения (можно вставлять логику при обращении к свойству)
- «сеттер» – для записи (можно вставлять логику при записи свойства)

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

  set ageInMonths(value) {
    this.age = value / 12;
  }
  ...
}

// Выводим данное поле - сработает get
player2.ageInMonths; // 600

// Присвоим значение этому полю - сработате set,
player2.ageInMonths = 612;

// ... который перезапишет поле aage
player2.age; // 51
```

***

Если бы **set** не было, то это поле изменить было бы нельзя

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

Если конструктор класса не содержит параметров, то конструктор можно не записывать, а сразу присваивать свойства.

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

## Tooltip на классе

```js
(function () {

  class Tooltip {
    constructor() {
      this.el = document.createElement('div');
      this.el.style.position = 'absolute';

      this.el.classList.add(this.name);
      this.el.classList.toggle(`${this.name}_active`, false);

      this.listeners = [];

      document.body.appendChild(this.el);

      this.onHide = this.onHide.bind(this);
    }
    
    get name() {
      return 'tooltip';
    }

    get indent() {
      return 5;
    }

    delegate(eventName, element, cssSelector, callback) {
      const fn = event => {
        if (!event.target.matches(cssSelector)) {
          return;
        }

        callback(event);
      };

      element.addEventListener(eventName, fn);
      this.listeners.push({ fn, element, eventName });

      return this;
    }

    onShow = (event) => {
      this.el.innerHTML = event.target.getAttribute('data-tooltip');
      this.el.classList.toggle(`${this.name}_active`, true);

      const spanRect = event.target.getBoundingClientRect();
      const elRect = this.el.getBoundingClientRect();

      let top = spanRect.bottom + this.indent;

      if (top + elRect.height > document.documentElement.clientHeight) {
        // если тултип не влезает по высоте, то поднимаем его над элементом
        top = spanRect.top - elRect.height - this.indent;
      }

      this.el.style.top = `${top}px`;
    }

    onHide() {
      this.el.classList.toggle(`${this.name}_active`, false);
    }

    attach(root) {
      this
        .delegate('mouseover', root, '[data-tooltip]', this.onShow)
        .delegate('mouseout', root, '[data-tooltip]', this.onHide);

    }

    detach() {
      for (let {fn, element, eventName} of this.listeners) {
          element.removeEventListener(eventName, fn);
      }
    }
  }

  window.Tooltip = Tooltip;
})();

const tooltip = new Tooltip();
tooltip.attach(document.body);
```

***

## Tooltip на классе - подробно

Всплывающие подсказки можно встретить чуть ли не на каждом сайте. Они очень помогают пользователям осваивать интерфейсы, которые в наше время довольно сложные.

Одна из самых сложных вещей в тултипах — правильно их позиционировать. К счастью, сейчас браузеры предоставляют методы для определения позиции элемента во viewport (область страницы на экране, которую видит пользователь) и, применяя простые формулы, можно разместить подсказки в необходимом месте.

Нужно реализовать 3 метода (onShow, onHide и detach). Ниже найдёте заготовки с кодом.

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body>
    <div class="wrapper">
        <span class="left_top" data-tooltip="Взяли текст из data-tooltip">Верхний тултип</span>
        <span class="left_bottom" data-tooltip="И еще один">Нижний тултип</span>
    </div>
    <script src='script.js'> </script>
</body>
</html> 
```

```css
.tooltip {
    display: none;
    padding: 5px;
    border: 1px solid black;
}

.tooltip.tooltip_active {
    display: block;
    position: absolute;
}

.left_bottom {
  position: fixed; 
  bottom: 5px;
  left: 0;
} 
```

```js
class Tooltip {
  name = 'tooltop';
  indent = 5;

    constructor() {
      this.el = document.createElement('div');
      this.el.style.position = 'absolute';
      this.el.classList.add(this.name);

      document.body.appendChild(this.el);

      this.listeners = [];
  }

  delegate(eventName, element, cssSelector, callback) {
      const fn = event => {
          if (!event.target.matches(cssSelector)) {
              return;
          }

          callback(event);
      };

      element.addEventListener(eventName, fn);
      this.listeners.push({ fn, element, eventName });

      return this;
  }

  // нужно реализовать
  onShow = (event) => {
      console.log('onShow');
  }

  // нужно реализовать
  onHide = () => {
      console.log('onHide');
  }

  attach(root) {
      this
          .delegate('event', root, '[data-tooltip]', this.onShow)
          .delegate('event', root, '[data-tooltip]', this.onHide);

  }

  // нужно реализовать
  detach() {

  }
}

const tooltip = new Tooltip();
tooltip.attach(document.body);
```

В конструкторе класса ```Tooltip``` создаётся DOM-элемент, который будет использован для отображения подсказки. Методы ```attach``` и ```delegate``` навешивают на элемент указанные обработчики (в данном примере слушаются события document.body). Если у DOM-ноды (```event.target```) селектор соответствует переданному CSS-селектору, то вызывается указанный колбэк (в нашем случае ```onShow``` и ```onHide```).

События, которые необходимо слушать, должны отрабатывать при наведении на элемент и когда курсор мыши уходит с элемента. Для такого случая отлично подойдут два события: ```mouseover``` и ```mouseout```, которые всплывут и вызовут обработчик на ```body``` при наведении или уходе с любого дочернего элемента (подробнее про [event bubbling](https://learn.javascript.ru/bubbling-and-capturing)).

В реальных условиях такие слушатели не рекомендуют вешать на весь документ, так как они будут вызываться на всех дочерних нодах, а среднестатистический документ содержит тысячи элементов. Обычно слушатели навешиваются на конкретные DOM-узлы, события которых нужно слушать. В таком случае можно использовать события ```mouseenter``` и ```mouseleave``` для конкретных элементов, которые, в отличие от ```mouseover``` и ```mouseout```, не всплывают.

Остановимся на первом варианте и обновим метод ```attach```:

```js
attach(root) {
  this
    .delegate('mouseover', root, '[data-tooltip]', this.onShow)
    .delegate('mouseout', root, '[data-tooltip]', this.onHide);

} 
```

В методе ```detach``` достаточно удалить всех слушателей из массива ```this.listeners``` и отписать DOM-элементы от событий:

```js
detach() {        
    for (const {fn, element, eventName} of this.listeners) {
        element.removeEventListener(eventName, fn);
    }

    this.listeners = [];
} 
```

В методе onHide достаточно удалить CSS-класс tooltip_active у тултипа. С этим поможет метод classList.remove():

```js
onHide() {
    this.el.classList.remove(`${this.name}_active`);
} 
```

Остается последний, самый интересный метод — ```onShow```, в котором нужно отобразить тултип в правильном месте. Посмотрим на следующие схемы:

<img src="../../../../img/js/tooltip1.png" width="650" alt="tooltip1.png" />

На месте красной отметки необходимо отобразить тултип. Его положение соответствует нижнему левому углу блока с текстом с небольшим отступом (в нашем случае — в 5 пикселей). Получить расстояние от вьюпорта до угла можно с помощью метода [getBoundingClientRect](https://developer.mozilla.org/ru/docs/Web/API/Element/getBoundingClientRect) (метод возвращает позицию относительно вьюпорта и размеры элемента):

<img src="../../../../img/js/tooltip2.png" width="650" alt="tooltip2.png" />

С учётом отступа (он хранится в геттере ```indent```) координата по Y будет равна ```bottom + indent```. Чтобы отрисовать сам тултип (в стилях для него уже задан position: absolute), можно использовать атрибуты ```top``` и ```left```. В реальных проектах лучше использовать ```position: fixed```, чтобы тултип позиционировался относительно страницы, а не родительского блока. 
Как это выглядит в коде:

```js
onShow = (event) => {
  // Элемент, на который пользователь навёл мышкой
  const sourceEl = event.target;

  // HTML тултипа задаём из data-аттрибута
  this.el.innerHTML = sourceEl.getAttribute('data-tooltip');

  // Добавляем класс _active, чтобы отобразить тултип
  this.el.classList.add(`${this.name}_active`);

  const sourceElRect = sourceEl.getBoundingClientRect();

  const top = sourceElRect.bottom + this.indent;
  const left = sourceElRect.left;

  this.el.style.top = `${top}px`;
  this.el.style.left = `${left}px`;
} 
```

Сейчас всё довольно просто, но есть ещё одно условие. Тултип должен отображаться сверху, если снизу он не помещается во вьюпорт. Посмотрим на схему:

<img src="../../../../img/js/tooltip3.png" width="650" alt="tooltip3.png" />

Красная метка —  место, где нужно отобразить тултип, и по координате X оно остаётся неизменным, а по Y — равно ```sourceElRect.top - elRect.height - this.indent```. Условие, когда тултип не вмещается в экран, можно составить с помощью свойства [documentElement.clientHeight](https://developer.mozilla.org/ru/docs/Web/API/Element/clientHeight) документа:

```js
onShow = (event) => {
    // Элемент, на который пользователь навёл мышкой
    const sourceEl = event.target;

    // HTML тултипа задаём из data-аттрибута
    this.el.innerHTML = sourceEl.getAttribute('data-tooltip');

    // Добавляем класс _active, чтобы отобразить тултип
    this.el.classList.add(`${this.name}_active`);

    const sourceElRect = sourceEl.getBoundingClientRect();
    const elRect = this.el.getBoundingClientRect();

    let top = sourceElRect.bottom + this.indent;
    const left = sourceElRect.left;

    // Если тултип не влезает по высоте, то поднимаем его над элементом
    if (top + elRect.height > document.documentElement.clientHeight) {
    top = sourceElRect.top - elRect.height - this.indent;
    }

    this.el.style.top = `${top}px`;
    this.el.style.left = `${left}px`;
} 
```

Решение почти готово, но давайте сделаем его более универсальным и обработаем случай, когда на странице есть скролл. Параметр top вернёт расстояние до начала вьюпорта, а проскролленную область можно получить с помощью window.scrollY и window.scrollX. Обновим код:

```js
onShow = (event) => {
  // ...

  this.el.style.top = `${top + window.scrollY}px`;
  this.el.style.left = `${left + window.scrollX}px`;
} 
```

В итоге получился полноценный компонент тултипа, который никогда не спрячется за пределами экрана.

***

## call, apply ---

TODO
