---
title: Простые действия
sidebar_position: 1
---

| Метод                                                                     | Описание                            |
| ------------------------------------------------------------------------- | ----------------------------------- |
| [`.includes()`](#includes)                                                | наличие примитива                   |
| [`.join-split()`](#join-и-split)                                          | преобразовать в строку и обратно    |
| [`.slice()`](#slice---удаление-нескольких-элементов-с-начала-или-с-конца) | обрезка                             |
| [`.splice()`](#splice)                                                    | обрезка с заменой                   |
| [`.toSpliced()`](#tospliced)                                              | обрезка с заменой                   |
| [`.push()`](#push---добавить-элемент-в-конец)                             | добавить новый элемент в конец      |
| [`.unshift()`](#unshift---добавить-элемент-в-начало)                      | добавить новый элемент в начало     |
| [`.shift()`](#shift---удалить-первый-элемент)                             | удалить первый элемент              |
| [`.pop()`](#pop---удалить-последний-элемент)                              | удалить последний элемент           |
| [`.concat()`](#concat)                                                    | конкатенация массивов (объединение) |
| [`.indexOf-lastIndexOf()`](#indexof-lastindexof)                          | найти индекс примитива              |
| [`.flat()`](#flat)                                                        | "плосколизация" одного уровня       |
| [`.reverse()`](#reverse---изменить-порядок)                               | переворот                           |
| [`.toReversed()`](#toreversed)                                            | переворот                           |
| [`.structuredClone()`](#structuredclone)                                  | глубокая копия массива              |

---

## Действия над массивами

```js
const arr = [1, 2, 3];

// изменить элемент
arr[0] = 4;

arr; // [4, 2, 3]
```

### delete - удаление элемента без изменения длины массива

Через **delete** элемент удаляется, но его место остаётся (будет undefined)

```js
const someArray = [0, 1, 2, 3, 4, 5];

// опустошить элемент с индексом
delete someArray[0];

someArray; // [empty, 1, 2, 3, 4, 5] - lenght не меняется
```

## .includes()

- Проверка на наличие элемента
- Возвращает `boolean`
- Работает только с плоскими массивами

```js
const a = [1, 2, 3];
a.includes(1); /// true
a.includes(0); /// false
```

```js
const a = [
  { id: 1, name: 'alpha', active: true },
  { id: 2, name: 'beta', active: false },
  { id: 3, name: 'gamma', active: true },
];

// так не работает
a.includes({ id: 1, name: 'alpha', active: true }); // false

// можно так
a.map(i => i.id).includes(1); // true
```

---

## .join() и .split()

- `.split()` - разбить строку в массив по разделителю в параметре
- `.join()` - соединить массив в строку (обратный метод)

```js
const a = 'Amazing!';
const b = 'John Smith';
const c = 'snake_case';

a.split(''); // [ 'A', 'm', 'a', 'z', 'i', 'n', 'g', '!' ]
b.split('_'); // [ 'John', 'Smith' ]
c.split('_'); // [ 'snake', 'case' ]

// Можно такжe разбить строку в массив через spread
const chars = [...'hello'];

// также содержит разделитель в параметре
['A', 'm', 'a', 'z', 'i', 'n', 'g', '!'].join('');
```

---

## slice() - удаление нескольких элементов с начала или с конца

**1-й способ** через **slice**. Не изменяет исходный массив. Удаляет, меняет массив и возвращает удаленный элемент.

```js
const someArray = [0, 1, 2, 3, 4, 5, 6, 7];

// обрежет первые 3 элемента
someArray.slice(3); // [3, 4, 5, 6, 7]

// оставит последние 3 элемента
someArray.slice(-3); // [5, 6, 7]
```

---

## splice()

Самый мощный и гибкий метод по обрезанию, изменению и добавлению новых элементов.
Работает аналогично slice, только меняет исходный массив и можно добавлять второй и третий параметр.

### Оставить начало массива по кол-ву индексов

Оставить только первые 3 элемента (splice(3))

```js
const someArray = [0, 1, 2, 3*, 4*, 5*, 6*, 7*];

// оставить только первые 3 элемента
const removed = someArray.splice(3); // [3, 4, 5, 6, 7] хранит удаленные элементы
someArray; // [0, 1, 2]
```

Удалить 2 элемента, начиная с 3-его индекса (splice(3, 2))

```js
const someArray = [0, 1, 2, 3*, 4*, 5, 6, 7];
const removed = someArray.splice(3, 2); // [3, 4]

someArray; // [0, 1, 2, 5, 6, 7]
```

---

### Удаление элементов сконца

```js
const someArray = [0, 1, 2, 3, 4, 5*, 6*, 7*];
const removed = someArray.splice(-3); // [5, 6, 7]

someArray; // [0, 1, 2, 3, 4]
```

Удалить 2 элемента, начиная с 3-его индекса с конца (splice(-3, 2))

```js
const someArray = [0, 1, 2, 3, 4, 5*, 6*, 7];
const removed = someArray.splice(-3, 2); // [5, 6]

someArray; // [0, 1, 2, 3, 4, 7]
```

---

### Удалить определенный элемент по индексу с изменением длины массива

```js
const array = [1, 2, 3, 4, 5*, 6, 7, 8];
const elementIndex = array.indexOf(5);

if (elementIndex > -1) { // only splice array when item is found
  array.splice(elementIndex, 1); // 2nd parameter means remove one item only
}

console.log(array); // [1, 2, 3, 4, 6, 7, 8];
```

---

## toSpliced()

Возвращает новый массив, не мутирует исходный в отличие от `.splice()`.

```js
const someArray1 = [0, 1, 2, 3, 4, 5, 6, 7];
const someArray2 = [0, 1, 2, 3, 4, 5, 6, 7];

someArray1.splicee(3);
someArray2.toSpliced(3);

someArray1; // [ 0, 1, 2 ]
someArray2; // [0, 1, 2, 3, 4, 5, 6, 7] - исходный массив не изменился
```

---

## Добавить элемент

Через индекс

```js
const someArray = [0, 1, 2, *];

someArray[3] = 3;
someArray; // [0, 1, 2, 3]
```

---

## .push() - добавить элемент в конец

Добавить элемент в **конец** массива. Меняет исходный массив.

```js
const someArray = [0, 1, 2, *];

// 1-ый способ
someArray.push(3);
someArray; // [0, 1, 2, 3]

// 2-й способ
someArray[someArray.length] = 4;
someArray; // [0, 1, 2, 3, 4]
```

---

## .unshift() - добавить элемент в начало

Добавить элемент в **начало** массива. Меняет исходный массив.

```js
const someArray = [*, 0, 1, 2];

someArray.unshift(3);
someArray; // [3, 0, 1, 2]
```

---

## .shift() - удалить первый элемент

Изменяет исходный массив. Удалить элемент в **начале** массива (shift)

```js
const someArray = [0*, 1, 2, 3, 4, 5];

// удалить первый элемент
someArray.shift(); // const a = someArray.shift(); // будет хранить удаленный элемент

someArray; // [1, 2, 3, 4, 5];
```

---

## .pop() - удалить последний элемент

Изменяет исходный массив. Удалить элемент в **конце** массива (pop). Удаляет, меняет массив и возвращает удаленный элемент.

```js
const someArray = [0, 1, 2, 3, 4, 5*];

// удалить последний элемент
someArray.pop(); // const a = someArray.pop(); // будет хранить удаленный элемент

someArray; // [0, 1, 2, 3, 4]
```

---

## .concat()

Не изменяет исходный массив, а возвращает новый.

```js
const someArray1 = [0, 1, 2];
const someArray2 = [3, 4, 5];
const newArray = someArray1.concat(someArray2);
newArray; // [0, 1, 2, 3, 4, 5]
```

---

## .indexOf(), .lastIndexOf()

Для массивов также работают некоторые методы строк

```js
const someArray = ['a', 'b', 'c', 'd'];
someArray.indexOf('a'); // 0

// начиная с 1-го индекса
someArray.indexOf('a', 1); // -1 - индекс не найден
someArray.lastIndexOf('a', 1); // поиск с конца, 0 - первый индекс
```

---

## .flat()

Не изменяет исходный массив, а возвращает новый. По умолчанию раскрывает один уровень вложенности.

```js
const someArray = [0, 1, [2, 3], [4, [5, 6]]];

someArray.flat(); // [0, 1, 2, 3, 4, [5, 6]]
someArray.flat(2); // [0, 1, 2, 3, 4, 5, 6]

someArray; // [0, 1, [2, 3], [4, [5, 6]]]
```

---

## .reverse() - изменить порядок

При вызове меняется исходный массив

```js
const someArray = [0, 1, 2];

someArray.reverse();
someArray; // [2, 1, 0]
```

---

## toReversed()

Возвращает новый массив, не мутирует исходный в отличие от `.reverse()`.

```js
const someArray = [0, 1, 2];

someArray.toReversed();
someArray; // [ 0, 1, 2 ]
```

---

## structuredClone()

Глубокая копия: вложенные объекты не общие с исходным массивом.

```js
const someArray = [{ id: 1 }, { id: 2 }];
const copy = structuredClone(someArray);

copy[0].id = 999;

copy; // [{ id: 999 }, { id: 2 }]
someArray; // [{ id: 1 }, { id: 2 }]
```
