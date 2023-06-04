---
title: Обработка данных
sidebar_position: 3
---

## Обработка массивов

<img src="../../../../img/js/arrays.png" width="550" alt="arrays.png" />

### `map()` - Мапинг

`[{i, j, k}, {i, j, k}, ... {i, j, k}] --> [i, i, ..., i]`

Идеально для вывода данных или реструктурирования массива до более простого. Можно "выдергивать" из исхоного массива только нужные поля, возвращает новый массив "без лишних" полей.

```tsx
const a = [
  { id: 3, name: 'Не указан' },
  { id: 2, name: 'Тестовый статус' },
  { id: 0, name: 'Старый тестовый статус' },
  { id: 1, name: 'что то происходит' },
];

// реструктурирование массива
const restructedA = a.map(el => el.id); // [3, 2, 0, 1]

// вывод данных
const mapedA = a.map((el, index, thisArray) => <div key={index}>{el.name}</div>);
```

---

### `sort()` - Сортировка

`[3, 2, 0, 1] --> [0, 1, 2, 3]`

Возвращает отсортированный массив. 

```ts
const a = [
  { id: 3, name: 'Не указан' },
  { id: 2, name: 'Тестовый статус' },
  { id: 0, name: 'Старый тестовый статус' },
  { id: 1, name: 'Что то происходит' },
];

// straight sorting
const sortedA = a.sort((nextEl, curEl) => nextEl.id - curEl.id); // 0, 1, 2, 3

// reversed sorting
const sortedAReversed = a.sort((nextEl, curEl) => curEl.id - nextEl.id); // 3, 2, 1, 0
```

---

### `filter()` - Фильтрация

`[3, 2, 0, 1] --> [3]`

Возвращает отфильтрованный массив.

```ts
const a = [
  { id: 3, name: 'Не указан' },
  { id: 2, name: 'Тестовый статус' },
  { id: 0, name: 'Старый тестовый статус' },
  { id: 1, name: 'Что то происходит' },
];

// фильтрация по совпадению 
const b = a.filter((el, index, thisArray) => el.id === 3); // [{ 3 }]

// фильтрация по несовпадению 
const с = a.filter((el, index, thisArray) => el.id !== 3); // [{ 0, 1, 2 }]
```

---

### `find()` - Поиск

`[3, 2, 0, 1] --> 3`

Возвращает элемент массива. Метод для поиска элемента внутри массива. Возвращает первый найденный элемент. Возвращает из из массива то, что найдет.

```ts
const a = [
  { id: 3, name: 'Не указан' },
  { id: 2, name: 'Тестовый статус' },
  { id: 0, name: 'Старый тестовый статус' },
  { id: 1, name: 'Что то происходит' },
];

// поиск по совпадению 
const b = a.find((el, index, thisArray) => el.id === 3); // { 3 }

// поиск по несовпадению 
const с = a.find((el, index, thisArray) => el.id !== 3); // { 2 } - вернется первый элемент
```

---

### `findIndex()` - Поиск индекса

Если ничего не найдено вернется `-1`.

```ts
const a = [
  { id: 3, name: 'Не указан' },
  { id: 2, name: 'Тестовый статус' },
  { id: 0, name: 'Старый тестовый статус' },
  { id: 1, name: 'Что то происходит' },
];

// вернет индекс массива по совпадению
const index = a.findIndex((el, index, thisArray) => {
  return el.name === 'Что то происходит'; // 3
}); 
```

---

### `some()`

Проверяет элемент массива на соответствие какому-либо УСЛОВИЮ.
Возвращает true, если хотя бы один элемент true.
Когда "наткнётся" на первое true, то цикл прекращается и возвращается true.

```ts
const a = [
  { id: 3, name: 'Не указан' },
  { id: 2, name: 'Тестовый статус' },
  { id: 0, name: 'Старый тестовый статус' },
  { id: 1, name: 'Что то происходит' },
];

a.some((el, index, array) => el.id === 3); // true
a.some((el, index, array) => el.id === 33); // false

```

---

### `every()`

Проверяет ВСЕ элементы массива на соответствие какому-либо УСЛОВИЮ.
Возвращает false, если хотя бы один элемент false.
Когда "наткнётся" на первый false, то цикл прекращается и возвращается false

```ts
const a = [
  { id: 3, name: 'Не указан' },
  { id: 2, name: 'Тестовый статус' },
  { id: 0, name: 'Старый тестовый статус' },
  { id: 1, name: 'Что то происходит' },
];

a.every((el, index, array) => el.id >= 0); // true
a.every((el, index, array) => el.id > 0); // false

```

---

### `includes()`

Как some() с более лаконичной записью, только простых массивов с однотипными данными.

```ts
const playerId = 'id2';
const players = ['id1', 'id2', 'id3', ...];

const isPlayerExist = players.includes(playerId); // true
```

---

### `reduce()`

Функция для "СВОРАЧИВАНИЯ" массива в одно значение (суммирование). Возвращает number. preVal - предыдущий элемент. 0 - второй аргумент необязательный (НАЧАЛЬНОЕ ЗНАЧЕНИЕ).

```ts
const arr = [1, 2, 3];
const arrCount = arr.reduce((preVal, item) => {
  // сложение элементов
  return preVal + item;
}, 0);

// сумма элементов массива
console.log(arrCount); // 6
```

Вычислить сумму

```ts
const a = [1, 2, 3, 4, 5, 6, 7, 8];

// summ = 36
const summ = a.reduce((prev, item, index) => {
  return prev + item;
})
```

```ts
const a = [1, 2, 3, 4, 5];

// first or pre item
a.reduce(preVal => preVal); // 1

// last item
a.reduce((preVal, nextVal) => nextVal); // 5

// iteratiions count
a.reduce((preVal, nextVal, iteratiions, sourceArray) => iteratiions); // 4 (1+2, 2+3, 3+4, 4+5)

// source array
a.reduce((preVal, nextVal, iteratiions, sourceArray) => sourceArray); // [1, 2, 3, 4, 5]

// arguments naming
a.reduce((preVal, nextVal, iteratiions, sourceArray))

// sum
const sum = a.reduce((preVal, nextVal) => preVal + nextVal);

// max value
const max = a.reduce((preVal, nextVal) => Math.max(preVal, nextVal)); // 5

// min value
const min = a.reduce((preVal, nextVal) => Math.min(preVal, nextVal)); // 1
```

---


---
---
---

## Обработка объектов


### Если нужно вывести лейбл по id

```ts
// Создаем enum из id
export enum PickUpType {
  UNKNOWN = '6d366f1b-0ee3-11ec-ba9c-005056870acb',
  HUB = 'ba9a0050-5687-e8ce-11ed-06242c176fbd',
  HUB_MOSCOW = '6d366f7b-0ee3-11ec-ba9c-005056870acb',
  HUB_REGIONAL = '6d366f5b-0ee3-11ec-ba9c-005056870acb',
  RETAIL = 'ba9a0050-5687-e8ce-11ed-06242c176fbb',
  RETAIL_MOSCOW = '6d366f8b-0ee3-11ec-ba9c-005056870acb',
  RETAIL_REGIONAL = '6d366f6b-0ee3-11ec-ba9c-005056870acb',
  STOCK = 'ba9a0050-5687-e8ce-11ed-06242c176fbc',
  STOCK_DROPSHIPING = '6d366f9b-0ee3-11ec-ba9c-005056870acb',
};

// Создаем объект, в которм название полей это id из enum, а значения это лейблы
export const typeOfPickups: { [key: string]: string } = {
  [PickUpType.UNKNOWN]: "Неизвестно",
  [PickUpType.HUB]: "Хаб",
  [PickUpType.STOCK]: "Склад",
  [PickUpType.RETAIL]: "Розница",
  [PickUpType.HUB_REGIONAL]: "Региональный хаб",
  [PickUpType.RETAIL_REGIONAL]: "Региональная розница",
  [PickUpType.HUB_MOSCOW]: "Московский хаб",
  [PickUpType.RETAIL_MOSCOW]: "Московская розница",
  [PickUpType.STOCK_DROPSHIPING]: "Склад ДШ",
}

let str = '';

} else if (name === 'drugstoreType') {
  // Проверяем если объект имеет такое свойство, то подставляем его значение
  str = typeOfPickups.hasOwnProperty(value) ? (typeOfPickups[value as string] as string) : '';
```

Еще пример

```ts
const a = {
  'some-id-1': 'label-1',
  'some-id-2': 'label-2',
  'some-id-3': 'label-3',
};

a.hasOwnProperty('some-id-1') && a['some-id-1']; // 'label-1'
```

---

## Примеры

### 1. Поиск совпадения по простым элементам (есть ли этот простой элемент в массиве)

Если ли параметр `param` в списке параметров `paramsList`? Работает только если массив из примитивных данных

```ts
const paramList = ['param1', 'param3', 'param3', 'param4', 'param5'];

const param = 'param1';

const isParamListIncludesParam = paramList.includes(param);

// возвращает boolean
console.log(isParamListIncludesParam); // true
```

`includes()` не будет работать с объектами.

```ts
const paramList = [
  { id: 1, param: 'param1' },
  { id: 2, param: 'param2' },
  { id: 3, param: 'param3' },
  { id: 4, param: 'param4' },
];

const param = { id: 1, param: 'param1' };

const isParamListIncludesParam = paramList.includes(param);

console.log(isParamListIncludesParam); // false - не работает
```

---

### 2. Поиск совпадения по объектам (есть ли этот объект в массиве)

Нужно сравнивать не объекты, а поля объектов на совпадения, например `id`.

```ts
const paramList = [
  { id: 1, param: 'param1' },
  { id: 2, param: 'param2' },
  { id: 3, param: 'param3' },
  { id: 4, param: 'param4' },
];

const someParam = { id: 1, param: 'param1' };

// сравнение по id
const isParamListIncludesParam = paramList.some(param => param.id === someParam.id); // true
```

---

### 3. Поиск элемента / индекса элемента по совпадению

```ts
const paramList = [
  { id: 1, param: 'param1' },
  { id: 2, param: 'param2' },
  { id: 3, param: 'param3' },
  { id: 4, param: 'param4' },
];

const someParam = { id: 1, param: 'param1' };

// вернет первый совпавший объект из списка объект
const findedObj = paramList.find(param => param.id === someParam.id); // {id: 1, param: 'param1'}

const findedIndex = paramList.findIndex(param => param.id === someParam.id); // 0
```

---

### 4. Фильтрация массива

```ts
const paramList = [
  { id: 1, param: 'param1' },
  { id: 2, param: 'param2' },
  { id: 3, param: 'param3' },
  { id: 4, param: 'param4' },
];

const someParam = { id: 1, param: 'param1' };

// вернет массив объектов, которые удовлетворяют условию
const isFillteredArray = paramList.find(param => param.id === someParam.id); // [ {id: 1, param: 'param1'} ]

// условие может быть комбинированным (вернется массив объектов) [{ id: 1, ..}, { id: 3, ...}]
const isParamListIncludesParam = paramList.filter(param => { 
  return param.id === someParam.id ||  param.id === 3; 
});
```

---

### 5. Поиск совпадения между массивами

Ecnm два массива, нужно проверить, находятся ли элементы одного массива в другом.

```ts
// first array
const a = [
  { id: 1, name: 'Name 1' },
  { id: 2, name: 'Name 2' },
  { id: 3, name: 'Name 3' },
  { id: 4, name: 'Name 4' },
  { id: 5, name: 'Name 5' },
];

// second array
const b = [
  { id: 1, name: 'Name 1' },
  { id: 10, name: 'Name 10' },
];

// пробегаемся по массиву b
const check = b.map(i => {
  // и на каждую итерацию будем пробегаться по всем элементам массива a
  // и искать совпадения по id
  const isChecked = a.some(j => j.id === i.id);

  // вернется boolean массив
  return isChecked; // [true, false]
});


```
