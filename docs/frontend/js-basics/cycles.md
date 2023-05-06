---
title: Циклы
sidebar_position: 10
---

Основной инструмент для использования многократных повторений однотипных действий, обычно используются для работы с массивами.

## forEach

Более новая и лаконичная запись старого цикла for. Не возвращает результат, а только перебирает массив. Удобно использовать для создания новых видоизмененных массивов из других исходных.

Простой перебор массива

```js
const a = [
  { id: 1, name: 'Name 1' },
  { id: 2, name: 'Name 2' },
  { id: 3, name: 'Name 3' },
  { id: 4, name: 'Name 4' },
  { id: 5, name: 'Name 5' },
];

a.forEach(el => console.log(el.name));
```

Параметры

```js
// el - элемент массива, index, arr - исходный массив
a.forEach((el, index, arr) => console.log(el));
a.forEach((el, index, arr) => console.log(index));
a.forEach((el, index, arr) => console.log(arr));
```

Пример. Создание нового массива с четными id.

```js
const a = [
  { id: 1, name: 'Name 1' },
  { id: 2, name: 'Name 2' },
  { id: 3, name: 'Name 3' },
  { id: 4, name: 'Name 4' },
  { id: 5, name: 'Name 5' },
];

const b = [];

a.forEach(el => {
  if (el.id % 2 === 0) {
    b.push(el.id);
  }
});

console.log(b); // [2, 4]
```

---

## for of 

Упрощенная форма записи

```js
const a = [
  { id: 1, name: 'Name 1' },
  { id: 2, name: 'Name 2' },
  { id: 3, name: 'Name 3' },
  { id: 4, name: 'Name 4' },
  { id: 5, name: 'Name 5' },
];

for (item of a) {
  console.log('item', item);
}

// with destructuring
for ({ id } of a) {
  console.log('id', id);
}
```

---

## for

Был основным циклом в ES5. Использует индексы массива.

```js
const a = [
  { id: 1, name: 'Name 1' },
  { id: 2, name: 'Name 2' },
  { id: 3, name: 'Name 3' },
  { id: 4, name: 'Name 4' },
  { id: 5, name: 'Name 5' },
];

const b = [];

 // счетчик внутри
for (let i = 0; i < a.length; i++) {
  b.push(a[i].id);
}

console.log(b); // [1, 2, 3, 4, 5]

console.log(i); // undefined - так как "встроенное объявление"
```

Невстроенное объявление

```js
let i = 0; // счетчик снаружи

const a = [...];
const b = [];

for (i = 0; i < a.length; i++) {
  b.push(a[i].id);
}

console.log(b); // [1, 2, 3, 4, 5]

console.log(i); // 5 "невстроенное объявление"
```

Сокращенная запись

```js
let i = 0;

...

for (; i < a.length;) {
  b.push(a[i].id);
  i++;
}

...
```

---

## break

Команда прерывающая цикл. Программа прервёт цикл, если условие после if выполниться, т.е. когда i странет равным 15. Нельзя использовать с тернарным оператором.

```js
for (let i = 0; i < 100; i++) {
  if (i % 15 == 0) { break; }
  console.log(i);
}
```

---

## continue

Делает пропуск итерации. Цикл "пропустит" все чётные индексы. Нельзя использовать с тернарным оператором.

```js
for (let i = 0; i < 100; i++) {
  if (i %2 == 0) { continue; }
  console.log(i);
}
```

---

## Метки для многомерного цикла

Обычно используются для обработки вложенных массивов в текущем массиве.

```js
firstFor: for (let i = 0; i < 10; i++) {
  console.log('i', i);

  for (let j = 1; j < 10; j++) {
    if (j === 5) {
      break firstFor; // прервет верхний цикл
    }

    console.log('j', j);
  }
}
```

---

## while

На увеличение

```js
let a = 0;

// выполниться 10 раз (0, ..., 9)
while (a < 10) {
  console.log(a);
  a++;
}
```

На уменьшение

```js
let a = 10;

// выполниться 10 раз (10, ..., 1)
while (a) {
  console.log(a);
  a--;
}
```

---

## do-while

Точно выполниться хотя бы один раз. Применяется редко.

```js
let a = 0;

// выполниться 10 раз (0, ..., 9)
do {
  console.log(a);
  a++;
} while (a < 10);
```

```js
let a = 0;

// выполниться 1 раз (0)
do {
  console.log(a);
  a++;
} while (a > 10);
```

---

## for-in

Циклы для объектов.

```js
const obj = {
  name: "John",
  surname: 'Smith',
  age: 35,
};

// выведет названия полей
for (let key in obj) {
  console.log(key);
};

// выведет значения полей
for (let key in obj) {
  console.log(obj[key]);
};

// можно также использовать for of
// нужно обернуть в Object.keys
for (let key of Object.keys(obj)) {
  console.log(obj[key]);
};
```
