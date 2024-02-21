---
title: String и Symbol
sidebar_position: 2
---

## TypeScript

```ts
const someString1: string = 'Some string';
const someString2: Readonly<string> = 'Some string';
const someString3: 'Some1' | 'Some2' = 'Some1';
```

---

Строка. Любое выражение в кавычках будет строкой (одинарные, двойные, обратные - Template literals);

Строки в JS в кодировке **UTF-16**.

```js
'some string';
"some string";
`some string`;
```

Содержимое строки в JavaScript нельзя изменить. Нельзя взять символ посередине и заменить его. Как только строка создана — она такая навсегда.

```js
let str = 'Hi';
str[0] = 'h'; // не изменит переменную
```

В обратные кавычки можно вставлять **ЛЮБОЙ JS-КОД**.

```js
const someVarialbe = 'SOME TEXT';
`${someVarialbe} some text`;
```

Даже функции

```js
function summ (a, b) {
  return a + b;
}

console.log(`Сумма: ${summ(2, 3)}`); // 'Сумма: 5'
```

***

### Конкатинация

```js
const a = 'String 1';
const b = 'String 2';
a + ' ' + b; // 'String 1 String 2' - Старый способ
`${a} ${b}`; // 'String 1 String 2' - Новый (обратные кавычки)
```

```js
// Иногда возникает такая ошибка:
const a = '123';
const b = 123;
const c = a + b;

// при сложении число конвертируется в строку
console.log(c); // '123123'
```

***

### Спец. символы

```js
// пробелы после "+" не будут учитываться (поэтому можно красиво отфармотировать)
let longString1 = "This is a very long string which needs " +
                "to wrap across multiple lines because " +
                "otherwise my code is unreadable.";

// пробелы будут учитываться (поэтому нужно переносить на начало новой строки)
let longString2 = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";

// пробелы будут учитываться (поэтому нужно переносить на начало новой строки)
let longString3 = `This is a very long string which needs
to wrap across multiple lines because
otherwise my code is unreadable.`;
```

Экранирование. С помощью специальных символов (обратный слеш). Строки со спец. символами нужно сохранять в переменные.

```js
// экранирование кавычек при испоьзовании обычных кавычек
'I\'m the JS!';

// Экранирование обратного слэша
'abc \\ abc'; // 'abc \ abc'

// Перенос строки (\n)
let str1 = "Hello World!\nThis is my string";

// Табуляция (\t) 
let str2 = "Hello World!\tThis is my string";

// unicode (\uXXXX ) - кодировка UTF-16
`\u00E9`; // 'é'
```

***

### Длина строки и индекс символов

Строки в JS в каком-то смысле - это массивы из символов и пробелов. На них действуют некоторые методы массивов.

```js
'String'.length; // 6

'some text'[0]; // 's'
'some text'[11]; // 'undefined' - несуществующий символ

// 2-ой способ (устаревший)
'String'.charAt(0); // 'S'
```

Спец. сиволы на length не влияют

```js
'I\'m the JS!'[1]; // "'"
```

***

### Преобразование в массив и обратно

```js
'String'.split(''); // ["S", "t", "r", "i", "n", "g"]
["S", "t", "r", "i", "n", "g"].join(''); // 'String'
```
***

### Регистр

```js
'String'.toLowerCase(); // 'string'
'String'.toUpperCase(); // 'STRING'
```
***

### Поиск подстроки 

Поиск с начала

```js
'String'.indexOf('ring'); // 2 (Возвращает индекс начала подстроки)
'String'.indexOf('some'); // -1 (-1 если не найдет)
'String'.indexOf('ring', 3); // -1 (начиная я 3-го индекса)
```

Поиск с конца

```js
'String'.lastIndexOf('g'); // 5
```


***

### Вырезать / обрезать подстроку
```js
'string'.slice(1, 3); // 'tr'
'String'.slice(-2); // 'ng' (вырезать с конца)
'String'.substring(1, 3); // "tr"
'String'.substr(0, 1); // 'S' (выерзать 1 символ, начиная с 0 индекса)
```

***

### Заменить символ

```js
'Ztring'.replace('Z', 'S'); // "String"
```

***

### Поиск совпадений

```js
// по началу строки
'String'.startsWith('St'); // true

// по концу строки
'String'.endsWith('ng'); // true

// по всей строке
'String'.includes('S'); // true
'String'.includes('Sr'); // false
'String'.includes('S', 0); // true (начиная с 1-го индекса)
'String'.includes('S', 1); // false (начиная с 1-го индекса)
```

***

### Дублирование

```js
'String'.repeat(2); // "StringString"
```

***

### Удаление пробелов

```js
'   String   '.trim(); // "String"
```

***

### Пробежаться циклом по строке

```js
const someString = 'Some string';

for (const char of someString) {
  console.log(char);
}
```

***

### Сравнение строк

У каждого символа есть код, в JS сравниваются эти коды символов.

- Пустая строка всегда меньше
- У заглавных код меньше чем у строчных (так как строчные стоят правее по алфавиту)
- У кириллицы код больше
- На практике редко используется.

```js
// ABC .. abc .. АБВ .. абв

'a'.codePointAt(0); // 97
'A'.codePointAt(0); // 65

'a' > 'A'; // true (97 > 65)
'a' > 'b'; // false (97 > 98)
```

Локальное сравнение
```js
'Россия'.localeCompare('USA', 'ru'); // -1 (т.к. ru)
'Россия'.localeCompare('USA', 'en'); // 1 (т.к. en)
```

***

### Конвертация числа в строку 

```js
const a = 123;

String(a); // '123'
a + ''; // '123'
`${a}`; // '123'
```

***

## Symbol

Используется редко. Используются для присвоинии уникальных имен для свойств объектов или идентификаторов.

Создание и нестрогое сравнение символов.
```js
const symbol = Symbol('mySymbol');
const symbol2 = Symbol('mySymbol');
typeof(symbol); // 'symbol'

console.log(symbol === symbol2); // false
```

Создание и нестрогое сравнение символов.
```js
const symbol = Symbol.for('mySymbol');
const symbol2 = Symbol.for('mySymbol');

console.log(symbol === symbol2); // true
```

Создание пароля
```js
let person = {
  name: 'John',
  age: 20,
  [Symbol('password-closed')]: 'John123',
  [Symbol.for('password-open')]: 'John321',
}

console.log(person[Symbol.for('password-closed')]); // undefined
console.log(person[Symbol.for('password-open')]); // 'John321'
```

Посмотреть все сиволы, которые есть в объекте
```js
console.log(Object.getOwnPropertySymbols(person)); // (2) [Symbol(password-closed), Symbol(password-open)]
```
