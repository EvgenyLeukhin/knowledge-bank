---
title: Примитивы
sidebar_position: 0
---

## typeof

Унарный оператор, который возвращает тип данных какого-либо выражения строкой.

```js
typeof 'some string'; // 'string'
typeof 123;           // 'number'
typeof 10n;           // 'bigint'
typeof true;          // 'boolean'
typeof Symbol('id');  // 'symbol'
typeof null;          // 'object' - Известная ошибка в JS
typeof undefined;     // 'undefined'
typeof {};            // 'object'

// 2-я форма записи в ()
typeof('some string'); // 'string'
typeof(123); // 'mumber'
```

Массивы определяются как объекты.
```js
typeof []; // 'object'
```

Функции определяются как ```'function'```. Хоть и нет такого типа данных, сделано для удобства

```js
typeof (() => '123'); // 'function'
```

***

## Типы данных

1-7 - примитивные типы. 8 - объект.

1. ```string``` - Строка
2. ```number``` - Число
3. ```bigint``` - Большое число
4. ```boolean``` - Булевый
5. ```symbol``` - Символ
6. ```null``` - Пустой тип
7. ```undefined``` - Неопределенный тип
8. ```object``` - Объект

***
***

## I. **STRING**

Строка. Любое выражение в кавычках будет строкой (одинарные, двойные, обратные - Template literals);

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

### Перенос строки

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

***

### Экранирование

С помощью специальных символов (обратный слеш). Строки со спец. символами нужно сохранять в переменные.

```js
// экранирование кавычек при испоьзовании обычных кавычек
'I\'m the JS!';

// Экранирование обратного слэша
'abc \\ abc'; // 'abc \ abc'

// Перенос строки (\n)
let str1 = "Hello World!\nThis is my string";

// Табуляция (\t) 
let str2 = "Hello World!\tThis is my string";

// unicode (\uXXXX )
`\u00E9`; // 'é'
```

***

### Длина строки и индекс символов

Строки в JS в каком-то смысле - это массивы из символов и пробелов. На них действуют некоторые методы массивов.

```js
'String'.length; // 6

'some text'[0]; // 's'
'some text'[11]; // 'undefined' - несуществующий символ

// 2-ой способ
'String'.charAt(0); // 'S'
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

Возвращает индекс начала подстроки

```js
'String'.indexOf('ring'); // 2
'String'.indexOf('ring', 3); // -1 (начиная я 3-го индекса)
'String'.indexOf('some'); // -1
```

***

### Вырезать подстроку
```js
'string'.slice(1, 3); // 'tr'
'String'.substring(1, 3); // "tr"
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

### Пробежаться циклом по строке

```js
const someString = 'Some string';

for (const char of someString) {
  console.log(char);
}
```

***

### Сравнение строк

Сравниваются первые символы. Строчные больше заглавных. Если буква правее по алфавиту, то она больше (кириллица больше латиницы). Пустая строка всегда меньше. На практике практически не используется.

```js
// абвгд...АБВГД...abcdefg...ABCDEFG

'a' > 'A'; // true
'a' > 'b'; // false
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
***

## II. **NUMBER**

Ограничен диапозоном ```±(2 в 53-ей - 1)```

Math

***

## III. **BIGINT**

```js
typeof 1234567890123456789012345678901234567890n; // BigInt
typeof 10n; // BigInt
```

## IV. **BOOLEAN**

***

## V. **SYMBOL**

***

## VI. **NULL**

Задаётся строго. Обычно как инициализируюшее значение, а после каких-либо операций ему может присваиваться любой другой тию.

```js
let a = null;
```

***

## VII. **UNDEFINED**

Когда создаём переменную, но не присваиваем значение. Работает только с ```var``` и ```let```, с ```const```будет ошибка, так как ей нужно сразу что-ниб присваивать.

```js
let a;
typeof a; // undefined
```

***

<!-- ## Изменение типа данных

Хоть и в JavaScript можно изменять один тип данных на другой, но с появление TypeScript такая практика перестала иметь место и сейчас считается дурным тоном.

```js
// Преобразование строки в число
Number('123'); // 123
+'123'; // 123

// Преобразование числа в строку
123 + ''; // '123'
String(123); // '123'
``` -->
