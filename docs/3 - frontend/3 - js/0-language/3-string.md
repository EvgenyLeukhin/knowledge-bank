---
title: String & Symbol
sidebar_position: 3
---

## Кавычки

```js
'string1'; // одинарные
'string2'; // двойные
`string3`; // обратные
```

---

## Экранирование символов

```js
'It\'s easy'; // экранирование символа кавычки
'This is a backslash: \\'; // экранирование обратного слэша
'It\'s easy \nto learn JS'; // перенос строки
'Column1\tColumn2\tColumn3'; // 'Column1 Column2 Column3' табуляция
'\u00A9 2023'; // '© 2023' никод
'ABCD\bE';
```

```js
// обратные кавычки самые мощные
// ${js-код} и учитываются пробелы
`
  ${1 + 3} шт.
  ${Math.floor(Math.random() * 100)}
`;
```

---

## Индексы

```js
'someString'.length; // длина строки (пробелы считаются)
'someString'[0]; // 's'
'someString'.at(0); // 's' - дублирующий метод
'someString'.charAt(0); // 's' - дублирующий метод
'someString'['someString'.length - 1]; // 'g'
'someString'[100]; // ошибки не будет, вернет undefined
```

---

## Преобразования типов

```js
// Число в строку
`${123}`; // '123' - I способ
123 + ''; // '123' - II способ
String(123); // '123' - III способ
String(-12.3); // '-12.3'
(0.123).toString(); // '0.123' - IV способ

String(Infinity); // 'Infinity'
String(NaN); // 'NaN'

// null и undefined
String(null); // 'null'
String(undefined); // 'undefined'

// boolean
String(true); // 'true'
String(false); // 'false'

// object
String(function () {}); // 'function () {}' - текст кода функции
String({}); // '[object Object]'
String({ key: 42 }); // '[object Object]'
String([]); // '' - пусой массив как пустая строка
String([1, 2]); // '1,2'
+''; // 0
+'     4'; // 4
```

```js
// string
String(''); // ''
String('abc'); // 'abc'

// number
Number('') || Number(' '); // 0
Number('abc'); // NaN
Number('123'); // 123
+'123'; // 123
Number('123.123'); // 123.123

// boolean
Boolean(''); // faslse
Boolean(' '); // true
Boolean('abc'); // true
```

## Конкатинация

```js
// concatination
'abc' + 'def'; // 'abcdef'
'asdfas' + 123; // 'asdfas123'
'asdfas' - 123 || 'asdfas' * 123; || 'asdfas' / 123; // NaN
true + 'abc'; // 'trueabc'
true - 'abc'; // NaN

'aasdfad'.concat('fgfgfgfgf'); // 'aasdfadfgfgfgfgf'
```

---

## Методы для строк

### Регистр

```js
// ЭТИ методы не меняют исходную строку, если нужно сохранить изменения,
// то нужно присваивать из в переменную

'string'.toUpperCase(); // 'STRING'
'ANOTHER STRING'.toLowerCase(); // 'another string'

// c локализацией
'string'.toLocaleUpperCase(); // 'STRING'
'ANOTHER STRING'.toLocaleLowerCase(); // 'another string'
```

---

### Преобразование в массив и обратно

```js
// после создания массива из строки можно применять методы массива
'string'.split(''); // [ 's', 't', 'r', 'i', 'n', 'g' ]

['s', 't', 'r', 'i', 'n', 'g'].join(); // ''s,t,r,i,n,g''
['s', 't', 'r', 'i', 'n', 'g'].join(''); // 'string'

// можно вставлять любые символы
['s', 't', 'r', 'i', 'n', 'g'].join(' '); // 's t r i n g'
['s', 't', 'r', 'i', 'n', 'g'].join('-'); // 's-t-r-i-n-g'
```

---

### Поиск индексов по символу

```js
'string'.indexOf('g'); // 5
'string'.indexOf('H'); // -1 - если не нашел совпадений

'string'.search('g'); // 5 - дублирующий метод, также используется в regExp

// такой же метод, то ищет с конца строки
'string'.lastIndexOf('g'); // 5
```

---

### Вырезать / обрезать подстроку

```js
'string'.slice(1, 3); // 'tr'
'String'.slice(-2); // 'ng' (вырезать 2 символа с конца)
'String'.substring(1, 3); // "tr"
'String'.substring(0, 1); // 'S' (выерзать 1 символ, начиная с 0 индекса)
```

---

### Заменить символ

```js
'Ztring'.replace('Z', 'S'); // "String"
'Ztring Ztring Ztring Ztring'.replaceAll('Z', 'S'); // "String String String String"
```

---

### Повторенин

```js
'String'.repeat(2); // "StringString"
'String'.repeat(3); // "StringStringString"
```

---

### Удаление пробелов

```js
'   String   '.trim(); // "String"
'   String   '.trimStart(); // 'String   '
'   String   '.trimEnd(); // '   String'
'   String   '.replace(/\s/g, ''); // "String" - ругулярное выражение

// вставка пробелов
'string'.padStart(10); // '    string'
'string'.padEnd(10); // 'string    '

// вставка cимволов
'string'.padStart(10, 'a'); // 'aaaastring'
```

---

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

---

### Сравнение строк

```js
// У каждого символа есть код, в JS сравниваются эти коды символов.

// Пустая строка всегда меньше
// У заглавных код меньше чем у строчных (так как строчные стоят правее по алфавиту)
// У кириллицы код больше чем у латиницы
// На практике редко используется.

// ABC .. abc .. АБВ .. абв

// Символ эмодзи (находится за пределами Basic Multilingual Plane)
let emoji = '🍎';

// charCodeAt() - раньше использовался чаще
emoji.charCodeAt(0); // 55356 (первая часть суррогатной пары)
emoji.charCodeAt(1); // 57166 (вторая часть суррогатной пары)

emoji.codePointAt(0); // 127822 (правильный код символа эмодзи)

'a'.codePointAt(0); // 97
'A'.codePointAt(0); // 65

const a = 'a'.codePointAt(0); // 97
const b = 'b'.codePointAt(0); // 98
'a' > 'A'; // true (97 > 65)
'a' > 'b'; // false (97 > 98)

// сравнение через localeCompare
'a'.localeCompare('b'); // - 1
'a' > 'b'; // false (эквивалентно)

'b'.localeCompare('a'); // 1
'b' > 'a'; // true (эквивалентно)

'a'.localeCompare('a'); // 0
'a' === 'a'; // true (эквивалентно)
```

---

### Ещё редкоиспользуемые

```js
// regExp
- search() - ищет совпадение с регулярным выражением и возвращает индекс.
- matchAll() - возвращает итератор со всеми совпадениями регулярного выражения.
- match() - ищет совпадение с регулярным выражением.

- normalize() - возвращает нормализованную форму строки Unicode.
- fromCharCode() и fromCodePoint() (статические методы String) - создают строку из последовательности значений Unicode.

// устаревшее
- valueOf() - возвращает примитивное значение объекта String.
- anchor(), big(), blink(), bold(), fixed(), fontcolor(), fontsize(), italics(), link(), small(), strike(), sub(), sup()
```

---
