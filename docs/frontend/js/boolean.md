---
title: boolean
sidebar_position: 4
---

## TypeScript 

```ts
const someBool: boolean = true;
```

---

```js
true;
false;

// строки
Boolean('abc'); // true
Boolean(' '); // true - пробел
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

## Булевы операторы

### Логическое И

Если левая часть ```true```, то дальше проверяется еще правая часть.

```js
true && true; // true (которое правее)
true && false; // false (которое правее)
false && true; // false (которое левее)

'1' && '2' && '3' // 3
'123' && 123; // 123
```

---

### Логическое ИЛИ

Если левая часть ```true```, то дальше не проверяется, а сразу возвращается ```true```.

```js
true || true; // true (которое левее)
true || false; // true (которое левее)
false || true; // true (которое правее)

'1' || '2' || '3'; // 1
'123' || 123; // '123'
```

---

### Оператор ??

Работает также как и оператор ``||``, но только в случае с `null` и `undefined`, во всех остальных случаях возвращает левую часть.

```js
null ?? 123; // 123
undefined ?? 123; // 123
0 ?? 123; // 0
false ?? 123; // false
'' ?? 123; // ''
```

```js
null || 123; // 123
undefined || 123; // 123
0 || 123; // 123
false || 123; // 123
'' || 123; // 123
```


---

### Оператор **!** - переворачивание логики.

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

---

### Операторы сравнения

```js
1 > 0; // true
1 >= 0; // true
1 < 0; // false
1 <= 0; // false
```

---

### Нестрогое сравнение

Тип данных не учитывается.

```js
1 == '1'; // true
1 != '1'; // false
```

---

### Строгое сравнение (best practice)

Тип данных учитывается.

```js
1 === '1'; // false
1 !== '1'; // true
```

---

### Двойное отрицание. 

Обычно используется для конвертации любого типа в булевый тип, но лучше использовать Boolean

```js
!!'true'; // true
!''; // false

!!123; // true

!![].length; // false
```