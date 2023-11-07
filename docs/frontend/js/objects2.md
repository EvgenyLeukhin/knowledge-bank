---
title: Объекты ◕
sidebar_position: 8
---

## get и set

Более гибкое создание объекта. Созданы для того, чтобы можно было высчитывать значения полей, вставлять в них логику.

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

***

## Proxy и Reflect

Своего рода гибкая надстройка над объектом. Можно добавлять логику для обычных действий взаимодействия с объектамии.

Объект Proxy «оборачивается» вокруг другого объекта и может перехватывать (и, при желании, самостоятельно обрабатывать) разные действия с ним, например чтение/запись свойств и другие. Далее мы будем называть такие объекты «прокси».

Прокси используются во многих библиотеках и некоторых браузерных фреймворках.

```js
let proxy = new Proxy(target, handler);
```

- ```target``` – это объект, для которого нужно сделать прокси, может быть чем угодно, включая функции.
- ```handler``` – конфигурация прокси: объект с «ловушками» («traps»): методами, которые перехватывают разные операции, например, ловушка get – для чтения свойства из target, ловушка set – для записи свойства в target и так далее.

### Проксирование объектов

```js
// простой объект
const person = {
  name: 'Vladilen',
  age: 25,
  job: 'Fullstack',
}

// прокси-объект принимает исходный объект
const objProxy = new Proxy(person, {
  // обработчик получения данных
  get(target, prop) {
    if (prop === 'age') {
      return target['age'] + 1;
    } else {
      return target[prop];
    }
  },

  // обработчик присвоения данных
  set(target, prop, value) {
    if (prop in target) {
      target[prop] = value;
    } else {
      throw new Error('No property');
    }
  },

  // проверяет наличие полей в объекте
  has(target, prop) {
    return ['name', 'age', 'job'].includes(prop);
  },

  deleteProperty(target, prop) {
    console.log('deleting ...', prop);
  }
});

person.age; // 25
objProxy.age; // 26
objProxy.name = "New name"; // поменяет исходный объект

// метод has
'name' in objProxy; // true
'contry' in objProxy; // false

// метод deleteProperty - удаляет поле из Proxy и исходного объекта
delete objProxy.age; // deleting ... age
```

### Проксирование функций

```js
const log = (text) => `Log: ${text}`;

const fnProxy = new Proxy(log, {
  apply(target, thisArg, args) {
    console.log('Calling fn...');

    // работа вызова по умолчанию - можно преобразовывать return
    // return target.apply(thisArg, args);

    // как вариант
    return target.apply(thisArg, args).toUpperCase();
  }
});

log('abc'); // 'Log: abc'
fnProxy('abc'); // 'LOG: ABC' 
```

### Проксирование функций-экземпляров-класов

Допустим есть какой-либо класс

```js
class Person {
  constructor() {
    this.name = name;
    this.age = age;
  }
}

// проксируем экземпляр этого класса
const personProxy = new Proxy(Person, {
  // надстройка над constructor()
  construct(target, args) {
  }
});
```

### Пример Проксирование функций - дефолтные параметры

```js
const withDefaultParams = (target, defaultValue = 0) => {
  return new Proxy(target, {
    get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
  })
}

const position = withDefaultParams({
  x: 10,
  y: 20,
}, 0);

// Если поля нет в параметре, то будет возвращаться дефолтное значение
position.x; // 10
position.y; // 20
position.z; // 0
position.i; // 0
```

***

### Пример Проксирование функций - свойства с префиксом

```js
const withHiddenProps = (target, prefix = '_') => {
  return new Proxy(target, {
    has: (obj, prop) => (prop in obj) && (!prop.startWith(prefix)),
    ownKeys: obj => Reflect.ownKeys(obj).filter((p => !prop.startWith(prefix))), // получение массива изключей
    get: (obj, prop, reciever) => (prop in reciever ? obj[prop] : void 0)
,  });
}

```

### Пример приватных полей

```js
const props = {
  name: 'Abby',
  chat: 'the last of us. Part II',
  getChat() {
    this._privateMethod();
  },
  _privateMethod() {
    console.log(this._privateProp);
  },
  __privateMethodToo() {},
  _privateProp: 'Нельзя получить просто так',
};
 
const checkPrivateProp = prop => prop.startsWith('_');
 
const proxyProps = new Proxy(props, {
  get(target, prop) {
    if (checkPrivateProp(prop)) {
      throw new Error("Нет прав");
    } else {
      const value = target[prop];
      return (typeof value === 'function') ? value.bind(target) : value;
    }
  },
  set(target, prop, val) {
    if (checkPrivateProp(prop)) {
      throw new Error("Нет прав");
    } else {
      target[prop] = val;
      return true;
    }
  },
  deleteProperty(target, prop) {
    if (checkPrivateProp(prop)) {
      throw new Error("Нет прав");
    } else {
      delete target[prop];
      return true;
    }
  }
});
 
proxyProps.getChat();
delete proxyProps.chat;
 
proxyProps.newProp = 2;
console.log(proxyProps.newProp);
 
try {
    proxyProps._newPrivateProp = 'Super game';
} catch (error) {
    console.log(error);
}
 
try {
    delete proxyProps._privateProp;
} catch (error) {
    console.log(error); // Error: Нет прав
}
 
/*
    * Вывод в консоль следующий:
Нельзя получить просто так
2
Error: Нет прав
Error: Нет прав
*/
```
