---
title: Переменные
sidebar_position: 6
---

## Именование (naming)

Переменная должна отвечать на вопрос "Кто?, Что?". Use camelCase. Именовать константы нужно заглавными буквами, разделяя слова "\_".

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

---

## var

- Используется уже редко (ES5), как и объявление глобальных переменных в принципе
- Область видимости - функция, если переменная объявлена внутри функции
- Область видимости - глобальная, если переменная объявлена "наверху". Запись прямо в window
- Можно изменять значение
- Можно переобъявлять

```js
// объявление переменной c присвоением
var a = 123; // window.a; // 123

// объявление нескольких переменных с присвоением
var a = 123,
  b = 'abc',
  c = true;

// объявление нескольких неопределенных переменных без присвоения
// undefined (без данных)
var a, b, c;
```

### var scope

- Если var объявлена на самом верху (вне функций), то доступ к ней есть отовсюду
- Если var объявлена внутри функции, то доступ к ней будет на любом уровне ниже объявления, "сверху" - будет ошибка!
- Если var объявлена даже например внутри if, то доступ к этой переменной будет глобальный, даже "сверху" (всплытие объявления переменных)

```js
// внутри {}
if (true) {
  // глобальное объявление внутри {} - есть только у var
  var VAR = 123;
  console.log(VAR); // 123 - доступ есть

  if (true) {
    console.log(VAR); // 123 - доступ есть
  }
}

// обращение "сверху"
console.log(VAR); // 123 - доступ есть
```

```js
// внутри function
function something() {
  // локальная объявление внутри функции
  var VAR = 123;
  console.log(VAR); // 123 - доступ есть

  if (true) {
    console.log(VAR); // 123 - доступ есть
  }
}

// обращение "сверху"
console.log(VAR); // Ошибка! ReferenceError: VAR is not defined
```

---

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

### let scope

- Если let объявлена на самом верху (вне функций), то доступ к ней есть отовсюду
- Если let объявлена внутри функции или внутри {}, то доступ к ней будет на любом уровне ниже объявления
- Если let объявлена внутри функции или внутри {}, а обращение к ней идет "сверху" - будет ошибка!

```js
// внутри {}
if (true) {
  let LET = 123;
  console.log(LET); // 123 - доступ есть

  if (true) {
    console.log(LET); // 123 - доступ есть
  }
}

// обращение "сверху"
console.log(LET); // Ошибка! ReferenceError: LET is not defined
```

```js
// внутри function
function something() {
  let LET = 123;
  console.log(LET); // 123

  if (true) {
    console.log(LET); // 123
  }
}

// обращение "сверху"
console.log(LET); // Ошибка! ReferenceError: LET is not defined
```

---

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

### const scope

- Если const объявлена на самом верху (вне функций), то доступ к ней есть отовсюду
- Если const объявлена внутри функции или внутри {}, то доступ к ней будет на любом уровне ниже объявления
- Если const объявлена внутри функции или внутри {}, а обращение к ней идет "сверху" - будет ошибка!

```js
// внутри {}
if (true) {
  const CONST = 123;
  console.log(CONST); // 123

  if (true) {
    console.log(CONST); // 123
  }
}

// обращение "сверху"
console.log(CONST); // Ошибка! ReferenceError: CONST is not defined
```

```js
// внутри function
function something() {
  const CONST = 123;
  console.log(CONST); // 123
}

// обращение "сверху"
console.log(CONST); // Ошибка! ReferenceError: CONST is not defined
```

---

## Глобальные переменные

- Переменные, объявленные вне функций
- Доступ к ним есть отовсюду

```js
const a = 5; // global scope
```

Можно даже не объявлять (не записывать ключевое слово и будет работать)

```js
a = 5; // global scope

console.log(a); // 5
```

---

## Локальные переменные

- Переменные, объявленные внутри функций
- Доступ к ним есть отовсюду внутри функции, в которой они объявлены, то есть также во всех вложенных функциях, если внутри них не объявляются такие же одноименные переменные.
- Вложенные функции создают цепочки областей видимостей.
- Лучше всегда объявлять с ключевым словом

```js
function someFunc() {
  const a = 5; // local scope

  function someFunc2() {
    console.log(a); // 5 здесь доступ есть
  }
}

// нет доступа уровнем выше
console.log(a); //  ReferenceError: a is not defined
```

---

## Пример c необъявлением переменной внутри функции

```js
function someFunc() {
  a = 5; // local scope 1 - будет создана глоб. переменная a = 5
  console.log(a); // 5

  function someFunc2() {
    a = 10; // local scope 2 - перезаписываем её а = 10
    console.log(a); // 10
  }

  someFunc2(); // 10
}

someFunc(); // 5, 10

// Доступ к ней есть даже выше уровнем, так как необъявленная переменная "всплыла" наверх
console.log(a); // 10
```

---

## Всплытие (hoisting)

Что будет, если обращаться в переменным до объявления.

В случае с **var** будет всплытие объявления, но не присвоения. Будет undefined.

```js
function someFunc() {
  console.log(i);
  var i = 5;
}

someFunc(); // undefined
```

Эквивалентно коду:

```js
function someFunc() {
  var i;
  console.log(i);
  i = 5;
}

someFunc(); // undefined
```

В случае с let и const будет ошибка.

```js
function someFunc() {
  console.log(i);
  let i = 5; // ReferenceError: Cannot access 'i' before initialization
}

someFunc(); // undefined
```

Поэтому всегда нужно обращаться к переменным уже после их объявления (примерно во всех языках программирования так).

---

## Еще примеры scope

- При объявлении переменных в global scope (вне функций) они будут доступны отовсюду!
- Локальная область видимости в JS может возникнуть только внутри функций ({} - границы scope)

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

console.log(VAR, LET, CONST); // 'var', 'let', 'const'
```

---

Функция перепишет глобальные переменные, так как внутри нее изменяется данная глобальная переменная, в случае с const будет ошибка, так как её нельзя переписывать.

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

console.log(VAR, LET, CONST); // 'var-new', 'let-new', 'ОШИБКА!!!'
```

---

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

## Стили наименования переменных

```
 - `kebab-case` — составные части переменной разделяются дефисом. Например: my-super-var.
- `snake_case` — для разделения используется подчеркивание. Например: my_super_var.
- `CamelCase` — каждое слово в переменной пишется с заглавной буквы. Например: MySuperVar.
- `lowerCamelCase` - стандарт в JS
```
