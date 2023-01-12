---
title: Функции ++-
sidebar_position: 8
---

В JS функции по сути являются объектами.

Функции применяют для сокращения кода и упращения процесса программирования. Задаётся один раз и может многократно вызываться далее. Если в своём коде вы повторяете одинаковые куски кода много раз, то лучше вывести из в отдельную функцию (**DRY**).

Ф. не следует сильно перегружать логигой, они должны решаться конкретные повторяющиеся задачи (**KISS**).

## Синтаксис

```js
function name(parametr1, parament2, ..., paramentN) {
  // function body (тело функции) хранит выполняемый код
  // return something;
}

// вызов функции
name();
```

***

## Нейминг

Если переменная - это существительное, то переменная - это **глагол, действие**. Общее правило - в НАЗВАНИИ ФУНКЦИИ должен находитьтся глагол, описывающий то, что функция делает:

- **get** - возвращают значение
- **calc** - что-то вычисляют
- **create** - что-то создают
- **show** - что-то показывают
- **check** - что-то проверяют и возвращают логическое значение

***

## Варианты записи

### Классическая запись (Function declaration)

- Нужно именовать функцию.
- Вызывать такую функцию можно из любого места, даже до объявления (только при такой записи)

```js
function summ(a, b) {
  return a + b;
}

summ; // вернется код функции - ошибки не будет
summ(1, 2); // 3
```

```js
// Будет ошибка - нужно имя
// SyntaxError: Function statements require a function name
function(a, b) {
  return (a + b);
};
```

***

### Запись через переменную (Function expression)

- При такой форме записи имя на себя берет переменная, а функцию уже именовать не нужно.
- ; в конце
- Вызывать можно только после объявления

```js
const summ = function (a, b) {
  return a + b;
};

summ(1, 2); // 3
```

***

### Стрелочная запись (ES6 - Arrow function)

- Упрощенный синтаксис ES6 без ключевого слова function. 
- Если запись идет в одну строчку, то ключевое слово return можно опустить
- Если параметр только один, то круглые скобки можно не вставлять
- Вызывать нужно только после объявления

```js
// два параметра - скобки нужны
const summ = (a, b) => a + b;

summ(1, 2); // 3
```

```js
// один параметр - скобки не нужны
const greeting = name => console.log(`Hello, ${name}!`);

greeting('John'); // 'Hello, John!'
```

***

### Сохранение в переменную

Также результат выполнения функции можно сохранять в переменные.

```js
const greeting = (name) => {
  console.log(`Hello, ${name}!`);
}

const a = greeting('John');
const b = greeting;

// вызов переменных
a; // 'Hello, John!'
b('Jack'); // 'Hello, Jack!'
```

***

### Анонимные самовызывающиеся функции

- Не нужно именовать
- Изолированы от области видимости
- Результат таких функций можно сохранять в переменные

```js
// Этот код сразу выполнится
(function() {
  console.log('Hello');
}());

// Можно передавать параметры
(function(value) {
  console.log(value);
}('Hello'));
```

```js
// Сохраняем результат в переменную
const greeting = (function(name) {
  return `Hello, ${name}`;
}('Sorax'));

console.log(greeting);

// Так тоже будет работать (без скобок) - но обычно АСФ указывают в скобках
const greeting = function(name) {
  return `Hello, ${name}`;
}('Sorax');
```

***

## Параметры

- Это своего рода объявленные локальные переменные внутри тела функции.
- Лучше не использовать большое количество параметров - потом будет сложно отслеживать, поддерживать и актуализировать.
- до 4-х параметра - оптимально, 5 - уже много
- Параметры можно вообще не передавать, а оставлять круглую скобку пустой.

```js
// Функция c параметроv
function greeting(name) {
  console.log(`Hello, ${name}!`);
}

// вызов функции с параметром
greeting('John'); // 'Helllo, John!'

// можно при вызове не указывать параметр - будет undefined
greeting(); // 'Helllo, undefined!'
```

```js
// Функция без параметров
function returnConsole() {
  console.log('Something');
}

returnConsole(); // 'Something'
```
***

### Параметры по умолчанию

- Можно использовать для любых вариантов записей функций
- В стрелочной записи с одним параметром нужны круглые скобки, если есть параметр по умолчанию.

```js
const greeting = (name = "User") => {
  console.log(`Hello, ${name}!`);
}

greeting(); // 'Hello, User!'
```

### Объект arguments

- Можно посмотреть в теле функции все переданные аргументы.
- **arguments** не работает со стрелочными функциями.

```js
const greeting = function (name = "User") {
  console.log('Hello ' + name);
  console.log(arguments);
}

greeting('Jack', 'Jack2', 'Jack3'); // 'Hello, User!'
// Arguments(3) ['Jack', 'Jack2', 'Jack3', callee: (...), Symbol(Symbol.iterator): ƒ]
```
***

## return

- Как только js-интерпретатор доходит до **return**, выполнение функцим прекращается (код, который ниже не выполняется)
- **return** нужно записывать в одну строку
- **return** можно записывать без всего (можно использовать когда нужно прекратить работу функции)

```js
function summ(a, b) {
  return console.log(a, b); // 1, 2
  a + b; // это сложение не выполнится
}
```

## Вложенные функции

- Внутри объявленных функций можно создавать фложенные служебные функции для каких-либо операций

```js
const someFunc = (someString) => {
  const stringToUpperCase = (string) => string.toUpperCase();

  if (typeof someString === 'string') {
    return console.log(stringToUpperCase(someString));
  } else {
    console.log('Передаётся не строка');
  }
}

someFunc('Hello, world!'); // 'HELLO, WORLD!'
someFunc(123); // 'Передаётся не строка'
```

TODO

***

## Возврат функции из функции

- Лучше не создавать больших цепочек, чтобы было понятно не нужно использовать больше 2-х
- Функции уровнем ниже - это возвращаемые анонимные функции, их именовать не нужно
- Параметры, передаваемые на верхнем уровне будут доступны на нижних, при условии что внутренние функции не будут иметь такиих же одноименных параметров.

```js
function someFunc(name) {
  return function () {
    return function () {
      console.log(name);
    }
  }
}

someFunc('Jack')()(); // 'Jack'
```

```js
function someFunc(name) {
  return function (name) {
    return function () {
      console.log(name);
    }
  }
}

// Так как есть одноименный параметр у внутренней функции
someFunc('Jack')()(); // 'undefined'
```

***

## Возврат функции из самой себя - Рекурсия

TODO

***

## Колбэк-функция (callback)

- Это передача функции в качестве аргумента, она будет выполнена после выполнения функции, в которую она передаётся
- Колбеки отрабатываться после выполнения каких-либо операций.
- Часто применяются для действий над какими-нибудь полученными данными (которые посчитались в самой функции)

### Пример с function

```js
function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
}

doHomework('math', function() {
  alert('Finished my homework');
});
```

### Пример с alert

В данном примере alert будет являться колбеком.

```js
const someFunc = function(value, cb) {
  console.log(value);

  if (value > 0) {
    cb;
  }
}

someFunc(5, alert('value > 0'));
someFunc(-5, alert('value < 0'));
```

***

## Замыкания (closures) ---

***

## IIFE-замыкания

- Паттерн IIFE — анонимные изолированные самовызывающиеся функции. 
- Любые переменные внутри IIFE невидимы для внешнего мира.
- Функция сразу вызовится, как до нее дойдет интерпритатор.
- Также такие функции можно использовать как модульные, сохраняя в объект window.utils

```js
'use strict';

(function () {
  const TAG = 'div';

  const element = document.createElement(TAG);

  element.textContent = 'Мой первый тег';
  document.body.appendChild(element);
})();
```

```js
let a = 1;
var b = 2;

const result = (function() {
  let a = 3;
  console.log(a, b); // 3 2
  return a;
})();

console.log(a, b, result); // 1 2 3 
```

***
