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

// 2-я форма записи в ()
typeof('some string'); // 'string'

typeof {}; // 'object'

// Массивы определяются как объекты
typeof []; // 'object'

// Функции определяются как функции, хоть и нет такого типа данных, сделано для удобства
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

## 1. STRING (строка)

Любое выражение в кавычках будет строкой (одинарные, двойные, обратные - Template literals);

```js
'some string';
"some string";
`some string`;
```

### Операции над строками

```js
// В обратные кавычки можно вставлять любой js-код.
`${someVarialbe} some text`;
```

```js
// Конкатинация строк
const a = 'String 1';
const b = 'String 2';
a + ' ' + b; // 'String 1 String 2' - Старый способ
`${a} ${b}`; // 'String 1 String 2' - Новый (обратные кавычки)
```

```js
// Multi strings
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

```js
// Специальные символы (нужно сохранять в переменные)
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

```js
// Можно вытаскивать любой символ через индекс
'some text'[0]; // 's'
'some text'[11]; // 'undefined' - несуществующий символ
```

```js
// нижный регистр
'String'.toLowerCase(); // 'string'
```

```js
// верхний регистр
'String'.toUpperCase(); // 'STRING'
```

```js
// длина строки
'String'.length; // 6
```

```js
// вытаскивать символ из строки по индексу
'String'[0] || 'String'.charAt(0); // 'S'
```

```js
// Поиск подстроки (возвращает индекс начала подстроки)
'String'.indexOf('ring'); // 2
'String'.indexOf('ring', 3); // -1 (начиная я 3-го индекса)
'String'.indexOf('some'); // -1
```

```js
// Вырезать подстроку (slice и substring работают идентично)
'string'.slice(1, 3); // 'tr'
```

```js
// вытаскивать подстроку
'String'.substring(1, 5); // "trin"
```

```js
// заменять символ
'Ztring'.replace('Z', 'S'); // "String"
```

```js
// начало строки на совпадение
'String'.startsWith('St'); // true
```

```js
// конец строки на совпадение
'String'.endsWith('ng'); // true
```

```js
// Повтор строки
'String'.repeat(2); // "StringString"
```

```js
// содержит символ
'String'.includes('S'); // true
'String'.includes('S', 1); // false (начиная с 1-го индекса)
```

```js
// конвертация в массив
'String'.split(''); // ["S", "t", "r", "i", "n", "g"]
```

```js
// Собрать строку из массива
["S", "t", "r", "i", "n", "g"].join(''); // 'String'
```

```js
// Содержимое строки в JavaScript нельзя изменить. Нельзя взять символ посередине и заменить его. 
// Как только строка создана — она такая навсегда.
let str = 'Hi';
str[0] = 'h'; // не изменит переменную
```

```js
// В обратные можно вставлять любой js-код, даже функции.
function summ (a, b) {
  return a + b;
}

console.log(`Сумма: ${summ(2, 3)}`); // 'Сумма: 5'
```

```js
// Иногда возникает такая ошибка:
const a = '123';
const b = 123;
const c = a + b;
console.log(c); // '123123'
```

```js
// Пробежаться циклом по строке
const someString = 'Some string';
for (const char of someString) {
  console.log(char);
}
```

```js
// Сравнение строк
// Сравниваются первые символы
// Строчные больше заглавных
// Если буква правее по алфавиту, то она больше
// Пустая строка всегда меньше

'a' > 'A'; // true
'a' > 'b'; // false
```

***
***

## 2. Number (число)

Ограничен диапозоном ```±(2 в 53-ей - 1)```

Math

***

## 3. BigInt

```js
typeof 1234567890123456789012345678901234567890n; // BigInt
typeof 10n; // BigInt
```

## 4. boolean

***

## 5. Symbol

***

## 6. null

Задаётся строго. Обычно как инициализируюшее значение, а после каких-либо операций ему может присваиваться любой другой тию.

```js
let a = null;
```

***

## 7. undefined

Когда создаём переменную, но не присваиваем значение. Работает только с ```var``` и ```let```, с ```const```будет ошибка, так как ей нужно сразу что-ниб присваивать.

```js
let a;
typeof a; // undefined
```

***

## Изменение типа данных

Хоть и в JavaScript можно изменять один тип данных на другой, но с появление TypeScrip такая практика перестала иметь место и сейчас считается дурным тоном.

```js
// Преобразование строки в число
Number('123'); // 123
+'123'; // 123

// Преобразование числа в строку
123 + ''; // '123'
String(123); // '123'
```


