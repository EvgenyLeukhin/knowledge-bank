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

```js
// объявление переменной
var a = 123;

// объявление нескольких переменных
var a = 123, b = 'abc', c = true;

// объявление нескольких неопределенных переменных (undefined без данных)
var a, b, c;
```

- Используется уже редко (ES5) 
- Глобальная область видимости
- Можно изменять значение
- Можно переобъявлять

***

## let

- ES6
- Можно изменять значение
- Нельзя переобъявлять

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


```js
const a = true;

// Uncaught TypeError: Assignment to constant variable
a = false; // будет ошибка 

// Uncaught SyntaxError: Identifier 'a' has already been declared
const a = 123; // будет ошибка
```

***

## Область видимости (Scope) 

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
