---
title: Переменные
sidebar_position: 1
---

## Именование (naming)

Переменная должна отвечать на вопрос "Кто?, Что?". Use camelCase. Именовать константы нужно заглавными буквами, разделяя слова "_".

Нельзя именовать переменные, начиная с цифры, использовать для разделения слов "-", использовать ключевые слова.

### Правильно

```js
let thisIsSomeString = 'This is some string';

let $some = 'With $ symbol';

const THIS_IS_SOME_CONST = 'This is some const';
```

### Неправильно

```js
let 123some;
let class;
var 1score;
var %Score;
var №score;
var &score;
var score-score;
var privet;
```

### Ключевые слова (keywords)

```
// ES-2015
break case class catch const continue debugger default
delete do elseexport extends finally for function if
import in instanceof let new return super switch this
throw try typeof var void while with yield

// for future
enum await implements package protected static interface
private public

// old keywords
abstract boolean byte char double final float goto int
long native short synchronized transient volatile
```

### Регист

Регист имеет значения. Все переменные в примере будут разными.

```js
let something;
let Something;
let SomeThing;
let SOMETHING;
```



***

## var

- Используется уже редко (ES5) 
- Область видимости - функция, если переменная объявлена внутри функции
- Область видимости - глобальная, если переменная объявлена наверху. Запись прямо в window
- Можно изменять значение
- Можно переобъявлять

```js
// объявление переменной c присвоением
var a = 123; // window.a; // 123

// объявление нескольких переменных с присвоением
var a = 123, b = 'abc', c = true;

// объявление нескольких неопределенных переменных без присвоения 
// undefined (без данных)
var a, b, c;
```

***

## let

- ES6
- Можно изменять значение
- Нельзя переобъявлять
- Область видимости - глобальная, если объявлена наверху
- Область видимости - {}, если объявлена внутри {}

```js
let a = true;
a = false;

// Uncaught SyntaxError: Identifier 'a' has already been declared
let a = 123; // будет ошибка 
```

***

## const

- ES6, самое широкое применение
- Нельзя изменять значение (для объектов и массивов можно)
- Нельзя переобъявлять
- Область видимости - глобальная, если объявлена наверху
- Область видимости - {}, если объявлена внутри {}

```js
const a = true;

// Uncaught TypeError: Assignment to constant variable
a = false; // будет ошибка 

// Uncaught SyntaxError: Identifier 'a' has already been declared
const a = 123; // будет ошибка
```

```js
const person = {
  name: 'John',
  age: 18,
};

// будет ошибка
const person = {
  name: 'Jack',
  age: 19,
};

// Ошибки не будет
person.name = 'Jack';

Object.freeze(car); // запрещает изменять свойства в объекте
```


***

## Область видимости (Scope) 

При объявлении переменных в global scope они будут доступны отовсюду! 

Функция не перепишет глобальные переменные, так как внутри нее объявлены новые одноименные переменные в своей локальной области видимости. Область видимости в js ограничивается фигурными скобками {}. Работает для var, let и const.

```js
// global scope
var VAR = 'var';
let LET = 'let';
const CONST = 'const';

console.log(VAR, LET, CONST); // 'var', 'let', 'const'

function returnConsole() {
  // local scope - создаем локальные переменные
  var VAR = 'var-new'; 
  let LET = 'let-new'; 
  const CONST = 'const-new'; 

  console.log(VAR, LET, CONST);
}
returnConsole(); // 'var-new', 'let-new', 'const-new'

console.log(VAR, LET, CONST);  // 'var', 'let', 'const'
```

***

Функция перепишет глобальную переменную, так как внутри нее изменяется данная глобальная переменная, в случае с const будет ошибка, так как её нельзя переписывать.

```js
// global scope
var VAR = 'var';
let LET = 'let';
const CONST = 'const';

console.log(VAR, LET, CONST); // 'var', 'let', 'const'

function returnConsole() {
  // local scope - изменяем глобальные переменные
  VAR = 'var-new'; 
  LET = 'let-new'; 
  CONST = 'const-new'; 

  console.log(VAR, LET, CONST);
}
returnConsole(); // 'var-new', 'let-new', 'ОШИБКА!!!'

console.log(VAR, LET, CONST);  // 'var-new', 'let-new', 'ОШИБКА!!!'
```

***

Нефункция. var, объявленный внутри if будет доступен снаружи, а let и const нет.

```js
var a = true;

// global scope
var VAR = 'VAR';
let LET = 'LET';
const CONST = 'CONST';

if (a) {
  console.log(VAR); // 'VAR'
  console.log(LET); // 'LET'
  console.log(CONST); // 'CONST'

  if (a) {
    console.log(VAR); // 'VAR'
    console.log(LET); // 'LET'
    console.log(CONST); // 'CONST'
  }
}

console.log(VAR); // 'VAR'
console.log(LET); // 'LET'
console.log(CONST); // 'CONST'
```

```js
var a = true;

if (a) {
  // local scope
  var VAR = 'VAR';
  let LET = 'LET';
  const CONST = 'CONST';

  console.log(VAR); // 'VAR'
  console.log(LET); // 'LET'
  console.log(CONST); // 'CONST'
  if (a) {
    console.log(VAR); // 'VAR'
    console.log(LET); // LET is not defined
    console.log(CONST); // CONST is not defined
  }
}

console.log(VAR); // 'VAR'
console.log(LET); // LET is not defined
console.log(CONST); // CONST is not defined
```
