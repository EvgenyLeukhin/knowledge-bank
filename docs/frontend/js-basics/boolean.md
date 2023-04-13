---
title: Boolean
sidebar_position: 4
---

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

***

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

Двойное отрицание. Обычно используется для конвертации типов, но лучше использовать Boolean

```js
!!'true'; // true
!''; // false
```

***

## TypeScript 

```ts
const someBool: boolean = true;
```
