---
title: Boolean +
sidebar_position: 5
---

## Преобразование типов

```js
// true или false
true;
false;

true;
false;

// приведение к boolean
Boolean(''); // false - пустая строка
Boolean(' '); // true - пробел
Boolean('abc'); // true

// числа
Boolean(1); // true
Boolean(123); // true
Boolean(-10); // true
Boolean(0); // false - ноль
Boolean('0'); // true - так как непустая строка

// спец. типы
Boolean(Infinity); // true
Boolean(NaN); // false
Boolean(null); // false
Boolean(undefined); // false
Boolean(NaN); // false

// объекты, массивы и функции
Boolean({}); // true
Boolean([]); // true
Boolean(() => null); // true

// boolean в строку
`${true}`; // 'true'
true.toString(); // 'true'

// boolean в число
+true; // 1
+false; // 0
```

---

## Логические операторы

### Логическое И (логическое умножение) - вернется последний (правый) трушный, если все трушные. Вернется первый (левый) фолсный, даже если все остальные трушные

```js
// проверка слева-направо
// Вернётся всегда самый правый элемент, если все true
'1' && '2' && '3'; // '3'
'123' && 123; // 123
[] && {}; // {}

// Если при проверке какой-то элемент false, то он и вернётся - "логическое И вспотыкается об ложь"
true && false && true; // false
'abc' && '' && null; // ''
'abc' && ' ' && null; // null
```

---

### Логическое ИЛИ (логическое сложение) - вернется первый трушный (левый). Вернется последний фолсный (правый)

```js
'1' || '2' || '3'; // 1
'123' || 123; // '123'
[] || {}; // []

// Если при проверке какой-то элемент true, то он и вернётся - "логическое ИЛИ вспотыкается о правду"
true || false || true; // true
'abc' || '' || null; // 'abc'
'abc' || ' ' || null; // 'abc'

// различные кейсы
'' || false || 0; // 0 - последнее фолсное
'abc' || true || 1; // 'abc' - первое трушное

'' && false && 0; // '' - первое фолсное
'abc' && true && 1; // 1 - последнее трушное
```

---

### Оператор ??

Если левая часть `null` или ``undefined`, то работает как`||`, в остальных случаях работает как`&&`.

```js
// как ||
null ?? '123'; // '123'
undefined ?? '123'; // '123'

// как &&
false ?? '123'; // false
0 ?? '123'; // 0
NaN ?? '123'; // NaN
```

---

### Логическое присваивание 1

```js
let a = 0;
const isTrue = true;

isTrue && (a = 5);

console.log('a', a); // 5

const b = isTrue || 'default-string';
console.log('b', b); // true
```

---

### Логическое присваивание 2

```js
// &&=
let a1 = 1; // если поменять на фолсное, а останется фолсное
let b1 = 12;

// 1.1 вариант
if (a1) {
  a1 = b1;
}

// 2.1 вариант, если а трушное, то а перезапишется, иначе останется фолсным
a1 &&= b1;
console.log(a1); // 12

// ||=
let a2 = 0; // если поменять на трушное, а останется трушное
let b2 = 12;

// 1.2 вариант
if (!a2) {
  a1 = b1;
}

// 2.2 вариант. Если а фолсное, то а перезапишется, иначе останется трушным
a2 ||= b2;
console.log(a2); // 12

// ??= - если null или undefined, то перезапишется, если другое фолсное, то останется фолсное
let a3 = null; // если поменять на любое трушное, а останется трушное
let b3 = 12;

// 1.3 вариант
// if (!a3) {
//   a1 = b1;
// }

// 2.3 вариант. Если а фолсное, то а перезапишется, иначе останется трушным
a3 ??= b3;
console.log(a3); // 12

// // //
// // //

let variable6 = false;

// variable6 ||= 'some-string1'; // variable6 = variable6 || 'some-string1';
// variable6 &&= 'some-string2'; // variable6 = variable6 && 'some-string2';
// variable6 ??= 'some-string3'; // variable6 = variable6 ?? 'some-string3';

console.log('variable6', variable6);
```

---

### Двойное отрицание - преобразование в boolean

```js
!true; // false
!!true; // true
!!'true'; // true
!![].length; // false

!!0; // false
!!''; // false
!!null; // false
!!undefined; // false
!!{}; // true
!![]; // true
```

---

## Функция-конструктор

```js
const booleanObject = new Boolean(false);
typeof booleanObject; // "object"
booleanObject.valueOf(); // false
```
