---
title: Переменные +
sidebar_position: 7
---

## var

Cтарый способ объявления переменных, сейчас практически не используется, но можно встретить в старых проектах

```js
// можно объявлять бех присваивания значения
var someValue;
console.log(someValue); // undefined (пустая коробка)

// = - оператор присвоения

// можно сколь угодно раз перезаписывть
someValue = 3;
someValue = 4;
someValue = 5;
console.log(someValue); // 5

// можно переобъявлять c тем же названием
var someValue = true;
console.log(someValue); // true

// можно объвлять сразу несколько переменных через запятую с присвоением значений или бех
var someValue1, someValue2, someValue3;
var someValue1 = 1, // в случае с присвоением var, ключевое слово var можно опустить, при объявлении локальных переменных должны всегда указывать
  someValue2 = 2,
  someValue3 = 3;

// запись в глобальный js-объект window (window.someValue)
// var hosting
```

---

### var scope

Область видимости - функция, если переменная объявлена внутри функции
Область видимости - глобальная, если переменная объявлена "наверху". Запись прямо в window

- Если `var` объявлена на самом верху (вне функций), то доступ к ней есть отовсюду
- Если `var` объявлена внутри функции, то доступ к ней будет на любом уровне ниже объявления, "сверху" - будет ошибка!
- Если `var` объявлена даже например внутри `if`, то доступ к этой переменной будет глобальный, даже "сверху" (всплытие объявления переменных `var hostiing`)

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
console.log(VAR); // 123 - доступ есть - потому что идет запись прямо в глобальные объект браузера window

console.log(window.VAR); // 123
```

---

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

```js
// hostiong var
console.log(i); // undefined

// var i; - всплывет наверх без присвоения (поэтому будет undefined)
var i = 10; // присвоение будет на этой строке
```

---

## let и const

- Переменные, объявленные с помощью `let` и `const` в глобальной области видимости, не становятся свойствами объекта `window`, в отличие от var.
- Поддержка деструктуризации
- ES6 (использование `let` и `const` позволяют исправить потенциальные ошибка, которые могут возникнуть при использовании var)
- Можно изменять значение
- Нельзя переобъявлять
- Область видимости - глобальная, если объявлена наверху
- Область видимости - {}, если объявлена внутри {}

### let

```js
// let a; // Можно объявлять let без присвоения
let a = true;

// можно перезаписывать
a = false;

// нельзя переобъявлять
// let a = 123; // будет ошибка Uncaught SyntaxError:
// Identifier 'a' has already been declared
```

---

### let scope

- Если `let` объявлена на самом верху (вне функций), то доступ к ней есть отовсюду
- Если `let` объявлена внутри функции или внутри {}, то доступ к ней будет на любом уровне ниже объявления
- Если `let` объявлена внутри функции или внутри {}, а обращение к ней идет "сверху" - будет ошибка!

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

### const

- Нельзя объявлять без присвоения

```js
// Нельзя объявлять константу без присвоения значения
// const a; // SyntaxError: Missing initializer in const declaration

const a = true;

// нельзя перезаписывать (если примитивный тип данных)
// Uncaught TypeError: Assignment to constant variable
a = false; // будет ошибка

// нельзя переобъявлять
// Uncaught SyntaxError: Identifier 'a' has already been declared
const a = 123; // будет ошибка
```

---

### const scope

Такой же как и у `let`

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

// ПРАВИЛО: если будет перезапись, то используй let, в остальных случаях всегда использую const
```

```js
// для объектов, массивов и функций использовать всегда const.
// При изменении элементов массивов и объектов ошибки не будет
const someArray = [];

const someObj = {
  name: 'John',
  age: 25,
};

const someFunc = () => null;

// нельзя переприсваивать весь объект
const someObj2 = {
  a: true,
  b: false,
};

// TypeError: Assignment to constant variable.
someObj2 = {
  a: false,
  b: false,
};
// также нельзя заменить новым объектом
someObj2 = {
  a: 'abc',
  b: 'cba,',
};

// но можно переписывать отдельные поля
someObj2.a = false;

// { a: false, b: true }
console.log(someObj2);
```

---

## Именование

```js
// ключевые слова var, let, const
// переменная - это коробка
// в переменную можно сохранять любой тип данных, объект, массив или функцию

// Правила именования переменных
// Название переменной должно отвечать на вопрос "Кто?, Что?".
const camelCaseStyle = 123; // JS style
const snake_case_style = 123; // php style
const IS_CONSTANT = 123; // примитивные константы, которые не меняются принято именовать в upper snake case

// valid naming
const valid = '';
const $valid = '';
const _valid = '';
const Valid = '';
const валидное = ''; // но лучше никогда не импользовать в нейминге другие алфавиты кроме латинского

// non-valid naming
const non-valid = ''; // через дефис
const 123non-valid = ''; // начинается с цифры
const valid! = ''; // спец. символы
const %non-valid = ''; // спец символы
const const = ''; // ключевое слово в js

// Ключеыве слова в JS
// ES-2015
// break case class catch const continue debugger default
// delete do elseexport extends finally for function if
// import in instanceof let new return super switch this
// throw try typeof var void while with yield

// for future
// enum await implements package protected static interface
// private public

// old keywords
// abstract boolean byte char double final float goto int
// long native short synchronized transient volatile

// Регист (Регист имеет значения. Все переменные в примере будут разными.)
const something = true;
const Something = true;
const SomeThing = true;
const SOMETHING = true;
```

---

## "Магические" числа

"Магические числа" - числа в коде без хранения их в переменных, по которым непонятно, что они делают. Поэтому лучше всегда присваивать таким числам переменные.
