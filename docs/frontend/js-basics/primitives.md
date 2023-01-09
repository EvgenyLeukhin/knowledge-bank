---
title: Примитивы +++
sidebar_position: 1
---

- [«Современный учебник JavaScript»](https://learn.javascript.ru/) — очень важный ресурс;
- [MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript) - Mozilla Development Network;
- [Презентация «Яндекс.Практикума»](https://disk.yandex.ru/i/ekqxfARcwTqkwg): «Бегло по ES6 для старта»;
- [JavaScript Weekly](https://javascriptweekly.com/) — каждую неделю на почту будут падать интересные статьи;
- [«Вы не знаете JS»](https://github.com/azat-io/you-dont-know-js-ru) — сборник книг для виртуозного владения JavaScript (станете ниндзя, не шутка). Кто читает оригиналы, ссылки там тоже есть;
- [Видео и материалы с ШАДа](https://www.youtube.com/playlist?list=PLJOzdkh8T5koEPv-R5W0ovmL_T2BjB1HX) -  по алгоритмам и структурам данных;
- [Шпаргалка по сложности алгоритмов](https://habr.com/ru/post/188010/)
- [Первый взгляд на записи и кортежи в JavaScript](https://habr.com/ru/post/504092/)
- [Оценка сложности алгоритмов](https://habr.com/ru/post/173821/)
---
- [Справочник JS wm-school](https://wm-school.ru/js/index.php)
- [Справочник JS wisdomweb](https://www.wisdomweb.ru/JS/javascript-first.php)

## typeof - проверка типа данных

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
3. ```bigint``` - Большое число (ES9)
4. ```boolean``` - Булевый
5. ```symbol``` - Символ
6. ```null``` - Пустой тип
7. ```undefined``` - Неопределенный тип
8. ```object``` - Объект

***
***

## <mark>I. **STRING**</mark>

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

### Вырезать подстроку
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
***
<br/>

## <mark>II. **NUMBER**</mark>

Ограничен диапозоном ```±(2 в 53-ей - 1)```.

```js
Number.MAX_SAFE_INTEGER; // 9007199254740991
```

```js
123;

1e6; // 1000000
```

```js
// Изветные ошибки в js
0.6 + 0.7; // 1.2999999999999998
0.1 + 0.2; // 0.30000000000000004

// решение проблемы (в скобках приоритет)
(0.1 * 10 + 0.2 * 10) / 10; // 0.3
```

```js
123; // целые числа
0.123; // дробные числа
0.123 === .123; // true
```

### Мат. операторы

```js
3 + 2; // 5 (сложение)
3 - 2; // 1 (вычитание)
3 * 2; // 6 (умножение)
3 / 2; // 1.5 (деление)
3 ** 2 // 9 (возведение в квадрат)
3 % 2; // 1 (остаток от деления)
```

***

### Сокращенные операторы 

```js
let value = 123;

// сокращенная запись
value += 321; // value = value + 321;
value -= 321; // value = value - 321;
value *= 321; // value = value * 321;
value /= 321; // value = value / 321;

// Инкремент, декремент
++value; // value = value + 1; (меняет значение сразу на этой же строке)
--value; // value = value - 1; (меняет значение сразу на этой же строке)
value++; // value = value + 1; (меняет значение на следующей строке)
value--; // value = value - 1; (меняет значение на следующей строке)
```

***

### Infinity и NaN

Специальные типы number

```js
123 / 0; // Infinity
123 / 'String' // NaN (not a number)

// проверка на NaN
isNaN(123 / 'String'); // true

// проверка на число (с преобразованием типа)
isFinite('25'); // '25' --> 25 --> true
isFinite('abc'); // 'abc' --> NaN --> false
isFinite(10 / 0); // Infinity --> false
```

***

### Конвертация строки в число

```js
+'123'; // 123
Number('123'); // 123
parseFloat('123.12px'); // 123.12
parseInt('123.12px'); // 123 
```

***

### Системы исчисления

```js
// 16-чная:
0xabc123; // 11256099

// 8-чная:
0123;     // 83

// 2-чная:
0b1001;   // 9

let num = 255;

// toString - метод-конвертатор системы исчисления
console.log(num.toString(2)); // 11111111
console.log(num.toString(8)); // 377
console.log(num.toString(16)); // ff
console.log(num.toString(32)); // 7v
```

### Math

```js
// рандомное число от 0 до 1
Math.random(); // 0.7010049975254584
```

```js
// квадратный корень
Math.sqrt(256); // 16
```

```js
// мин и макс
Math.min(5, 8, 10, 2);  // 2
Math.max(5, 8, 10, 2);  // 10
```

```js
// округление
Math.floor(123.999);  // 123 (округление в меньшую)
Math.ceil(123.111);   // 124 (округление в большую)
Math.round(123.527);  // 124 (округление в среднюю)
```

```js
// модули
Math.trunc(-123.932); // -123 (возвращает целую часть числа путём удаления всех дробных знаков.)
Math.abs(-123.988);   // 123 (возвращает положительныую часть)
```

```js
// константы
Math.PI;      // 3.14
Math.E;       // 2.7
Math.LOG10E;  // 0.434
```
***
***
<br/>

## <mark>III. **BIGINT**</mark>

Используется редко, в основном для шифрования. Ввели, чтобы снять ограничения на цифровую длину символов.

```js
typeof 1234567890123456789012345678901234567890n; // BigInt
typeof 10n; // BigInt
```

***
***
<br />

## <mark>IV. **BOOLEAN**</mark>

```js
true;
false;

// строки
Boolean(' '); // true
Boolean('abc'); // true
Boolean(''); // false - пустая строка

// числа
Boolean(1); // true
Boolean(123); // true
Boolean(-10); // true
Boolean(0); // false - ноль

// спец. типы
Boolean(Infinity); // true
Boolean(null); // false
Boolean(undefined); // false
Boolean(NaN); // false

// объекты и массивы
Boolean({}); // true
Boolean([]); // true

// функции
Boolean(() => null); // true

```

### Булевы операторы

Логическое **И**. Если левая часть ```true```, то дальше проверяется еще правая часть.

```js
true && true; // true (которое правее)
true && false; // false (которое правее)
false && true; // false (которое правее)
'1' && '2' && '3' // 3
```

Логическое **ИЛИ**. Логическое **И**. Если левая часть ```true```, то дальше не проверяется, а сразу возвращается ```true```.
```js
true || true; // true (которое левее)
true || false; // true (которое левее)
false || true; // true (которое правее)
'1' || '2' || '3'; // 1
```

```js
'123' || 123; // '123'
'123' && 123; // 123
```

Оператор **!** - переворачивание логики.

```js
!true; // false
!1; // false
!123; // false
!'123'; // false

!''; // true
!0; // true
!false; // true
!null; // true
!undefined; // true
```

Операторы сравнения
```js
1 > 0; // true
1 >= 0; // true
1 < 0; // false
1 <= 0; // false
```

Нестрогое сравнение
```js
1 == '1'; // true
1 != '1'; // false
```

Строгое сравнение (best practice)
```js
1 === '1'; // false
1 !== '1'; // true
```


***
***
<br/>

## <mark>V. **SYMBOL**</mark>

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

***
***
<br/>

## <mark>VI. **NULL**</mark>

Задаётся строго. Обычно как инициализируюшее значение, а после каких-либо операций ему может присваиваться любой другой тип. В отличие от usdefined, здесь переменная определена и равна null.

```js
let a = null;
```

***
***
<br/>

## <mark>VII. **UNDEFINED**</mark>

Когда создаём переменную, но не присваиваем значение. Работает только с ```var``` и ```let```, с ```const```будет ошибка, так как ей нужно сразу что-ниб присваивать.

```js
let a;
typeof a; // undefined

if (a === undefined) console.log('Переменная не определена');
```

***
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
