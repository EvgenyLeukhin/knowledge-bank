---
title: Самописный компонент
sidebar_position: 9
---

- [Акцессоры;](https://learn.javascript.ru/property-accessors)
- [Библиотека MobX.](https://mobx.js.org/README.html)
- [Примеры Array.prototype.flat.](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)


## Передать event по клику

```tsx
const onTableCellClick = (e: React.MouseEvent) => {
  console.log(e);
  // do something
}

...

<div onClick={(e) => onTableCellClick(e)}>Some jsx-element</div>
```

## Самописный реактивный компонент

### Представление

Уровень представления отвечает только за отрисовку контента. Он не занимается обработкой данных или бизнес-логикой.

В этой теме мы создадим блоки и компоненты для представления с помощью:

- шаблонизатора,
- Event Bus,
- Proxy (JS-объекта прокси),
- DOM API.

Каждый вью-объект будет обладать жизненным циклом:

- создание,
- компонента рендерится (создаётся),
- добавление в DOM,
- изменение в ответ на внешние сигналы,
- скрытие из DOM,
- удаление из DOM.

***

### EventBus

Чтобы реализовать Event Bus, вспомним о свойствах функций в JavaScript. Функции относятся к не примитивным типам данных и на самом деле являются объектами. Единственное отличие — функции могут быть вызваны. Так как функции — это объекты, доступ к ним обеспечивается по ссылке. Эти ссылки мы можем сохранять в переменные, сравнивать и, например, искать в массиве. Эту особенность мы и будем использовать при реализации Event Bus.

```js
function a() {};

const b = a;

console.log(a === b); // true
console.log([b].includes(a)); // true 
```

Для начала определим сигнатуры методов. Нам нужны методы для подписки, отписки и оповещения подписчиков: ```on```, ```off``` и ```emit```.

```js
class EventBus {
  constructor() {}

  // принимают название эвента и обработчик в колбеке
  on(event, callback) {} // подписка на событие
  off(event, callback) {} // отписка отсобытия

  //
  emit(event, ...args) {}
} 
```

Методы ```on``` и ```off``` принимают название события, на которое необходимо подписаться, а также функцию-обработчик, которая будет вызвана, когда придёт оповещение о событии. В переменной ```callback``` как раз и будет содержаться ссылка на функцию-обработчик, которую мы можем сохранить в свойство ```EventBus```.

#### on и off

```js
class EventBus {
  constructor() {
    // создаем поле, которое будет хранить события и подписчиков на эти события 
    // { onClick: ['fn addEventListener to button-1', 'fn addEventListener to button-2', 'fn addEventListener to button-3', ... ]}
    // { onChange: ['fn addEventListener to input-1', 'fn addEventListener to input-2', 'addEventListener to input-3', ... ]}
    this.listeners = {};

  }

  // добавление к listeners
  on(event, callback) {
    // создаем новое поле с эвентом у объекта listeners, если оно еще не создано
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    // пушим в это поле функцию-обработчик
    this.listeners[event].push(callback);
  }

  // удаление из listeners
  off(event, callback) {
    // если такого эвента нет, то показываем ошибку
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }


    // удаляем этот обработчик из listeners, если он есть в listeners
    this.listeners[event] = this.listeners[event].filter(
      listener => listener !== callback
    );
  }
}   
```

В конструкторе класса запишем в свойство ```listeners``` пустой объект. Ключами в нём будут имена событий, а значениями массивы с обработчиками этих событий. 

```js
// создаем экземпляр
const eventBus = new EventBus();

// функция-обработчик
const callback = (...args) => {
  console.log('Event emitted', args);
}

// добавляем функция-обработчик к эвенту myEvent
eventBus.on('myEvent', callback);

// смотрим, что он добавился
console.log(eventBus.listeners);
```

#### emit

Теперь реализуем метод ```emit``` (метод-оповещатель-проверятель):

```js
class EventBus {
  constructor() {
    this.listeners = {};
  }

  on(event, callback) { ... }
  off(event, callback) { ... }

  emit(event, ...args) {
    // если такого эвента нет, то выбрасываем ошибку
    if (!this.listeners[event]) {
      throw new Event(`Нет события: ${event}`);
    }

    // если есть, то вызываем все эти обработчики и передаем туда аргументы
    this.listeners[event].forEach(listener => {
      listener(...args);
    });
} 
```

Этот метод принимает название события, о котором нужно оповестить подписчиков, а также дополнительные данные. Если события не существует (то есть никто ещё на него не подписывался), выбросим ошибку. Если у события есть подписчики, пробежимся по ним и вызовем каждый, передав данные. На этом этапе ```EventBus``` уже можно использовать.

```js
class EventBus {
  constructor() {
    this.listeners = {};
  }

  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event, callback) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
  }

  this.listeners[event] = this.listeners[event].filter(
    listener => listener !== callback
  );
}

  emit(event, ...args) {
    if (!this.listeners[event]) {
      throw new Event(`Нет события: ${event}`);
    }

    this.listeners[event].forEach(listener => {
      listener(...args);
    });
  }
} 
```

Здесь и воспользуемся тем, что функции передаются по ссылке (методы класса), — отфильтруем массив обработчиков, просто сравнив каждый из них с переменной ```callback```. То есть, чтобы отписать обработчик от события, нужно передать в метод ```off``` ту же самую ссылку.

```js
// создаем экземпляр класса
const eventBus = new EventBus();

// Создаем колбек-обработчик
const callback = () => {
  console.log('Event emitted');
}

// Добавляем эвенты
eventBus.on('myEvent', callback);

// Так как мы передаём новую функцию (а значит, новую ссылку), оригинальный обработчик не будет отписан
eventBus.off('myEvent', () => { console.log('Event emitted'); });

// Теперь передаём правильную ссылку, обработчик будет отписан
eventBus.off('myEvent', callback); 
```

Обратите внимание, что при такой реализации мы можем добавить один и тот же обработчик несколько раз. Но вызвав для него метод off, удалятся сразу все дубликаты.

```js
const eventBus = new EventBus();

const callback = () => {
  console.count('Event emitted');
}

// будут дубликаты
eventBus.on('myEvent', callback);
eventBus.on('myEvent', callback);
eventBus.on('myEvent', callback);

eventBus.emit('myEvent'); // обработчик будет вызван 3 раза

eventBus.off('myEvent', callback); // удалятся все три копии обработчика 
```

Готовый ```EventBus``` можно использовать как отдельно, так и наследовать от него другие классы. Названия возможных событий лучше описывать в отдельном объекте или использовать enum в TypeScript.

***

### Триггеры

Вы уже знаете, как подписываться на изменения. Так запускают и обрабатывают триггеры. Но когда и кто запускает триггеры? Одно дело подписаться на них, но хотелось бы, чтобы триггеры запускались без нашего явного присутствия. 

Например, есть кнопка с текстом и классом. В ходе исполнения программы решили поменять имя класса с ```visible``` на ```hide```, который меняет видимость кнопки в интерфейсе. Для этого не нужно удалять кнопку из DOM и заново создавать её с новым классом. Достаточно поменять параметры кнопки, чтобы после этого она сама перерисовалась:

```js
const button = new Button({
  text: 'my text',
  className: 'visible',
});

renderToDom(button);

// Хотелось бы после изменения пропсов стриггерить изменения в браузере
// реактивная смена класса
button.setProps({
  className: 'hide',
}); 
```

Незачем делать лишние действия вроде:

```js
button.setProps({
  className: 'hide',
});

button.reRender(); 
```

Такой подход сложный и неправильный. Он добавляет дополнительную логику, заставляет думать когда обновлять, и каждый раз делать это «руками». 

Правильный подход: после изменения параметров-пропсов — стриггерить прогон жизненного цикла от обновления компонента до перерендера. Необходимо автоматизировать всё что можно и не заставлять пользователей интерфейса помнить о текущем статусе. Поэтому система подписок и триггеров позволит сделать интерфейс более простым.

Способы реализации подобного:

1. Вручную после ```setProps``` вызывать ```reRender()``` — вариант всё также некорректно триггерит и завязан с другими методами. Мы снова приходим к тесной связности.

2. Proxy-объект. Применение данного инструмента поможет использовать Event Bus, убрать какую-либо тесную связность между методами и подписываться только на события.

Первый вариант рассматривать не будем, покажем, как можно применять Proxy-объекты. Этот способ поможет сделать простую цепочку из событий без прерываний. Например:

- метод ```init``` дёргает ```emit('componentDidMount')``` у Event Bus;
- дальше ```componentDidMount``` после вызова дёргает ```emit('render')```;
- ```render``` в свою очередь дёргает другие события.

При изменении свойств компонента хотелось бы вызвать ```emit('componentDidUpdate')```, который в свою очередь отрисует новые данные.

Целиком реализовывать механизм компонента не будем, но покажем, как можно сделать такое с помощью прокси. Смело используйте его в проекте.

О Proxy подробно и с примерами написано в [«Современном учебнике JavaScript»](https://learn.javascript.ru/proxy).

Сделаем следующий функционал: при изменении свойств объекта — будем неявно писать в консоль новое значение.

```js
const data = {
  test: 1,
  
};
const proxyData = new Proxy(data, {
  get(target, prop) {
    const value = target[prop];
    console.log("get data: ", value);
    return typeof value === "function" ? value.bind(target) : value;
  },
  set(target, prop, value) {
    target[prop] = value;
    console.log(`${prop}: ${value}`);
    return true;
  },
});

proxyData.test; // 'get data: 1'
proxyData.newProp = 'string'; // 'newProp: string' 
```

Благодаря Proxy-объектам можно добавить любую логику на изменение, получение и даже удаление.

В [TC39](https://github.com/tc39/proposal-class-fields#private-fields) описано, как сделать приватные свойства и методы на уровне языка без обходных путей. На эту тему есть много статей, например на [Medium](https://medium.com/devschacht/javascripts-new-private-class-fields-c60daffe361b). Хотя многие браузеры [уже поддерживают](https://caniuse.com/mdn-javascript_classes_private_class_fields) приватные поля, поэтому их можно смело использовать.

Вспомним решение задачи про приватное свойство через замыкание. В ходе курса наверняка заметили, что приватные свойства и методы называются через нижнее подчёркивание (underscore) ``:

```js
class Animal {
  _privateMethod() {}

  publicMethod() {}
} 
```

***

### Block

```js
class Block {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render"
  };

  _element = null;
  _meta = null;

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor(tagName = "div", props = {}) {
    const eventBus = new EventBus();
    this._meta = {
      tagName,
      props
    };

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init() {
    this._createResources();

    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  _componentDidMount() {
    this.componentDidMount();
  }

  componentDidMount(oldProps) {}

	dispatchComponentDidMount() {
		this.eventBus().emit(Block.EVENTS.FLOW_CDM);
	}

  _componentDidUpdate(oldProps, newProps) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
  }

  componentDidUpdate(oldProps, newProps) {
    return true;
  }

  setProps = nextProps => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  _render() {
    const block = this.render();
    // Этот небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напишите свой безопасный
    // Нужно не в строку компилировать (или делать это правильно),
    // либо сразу в DOM-элементы возвращать из compile DOM-ноду
    this._element.innerHTML = block;
  }

  render() {}

  getContent() {
    return this.element;
  }

  _makePropsProxy(props) {
    // Можно и так передать this
    // Такой способ больше не применяется с приходом ES6+
    const self = this;

    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target, prop, value) {
        target[prop] = value;
        
        // Запускаем обновление компоненты
        // Плохой cloneDeep, в следующей итерации нужно заставлять добавлять cloneDeep им самим
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, {...target}, target);
        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      }
    });
  }

  _createDocumentElement(tagName) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  show() {
    this.getContent().style.display = "block";
  }

  hide() {
    this.getContent().style.display = "none";
  }
}
```
