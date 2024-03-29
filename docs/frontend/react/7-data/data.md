---
title: Обработка данных (-)
sidebar_position: 11
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

// sort by name property
a.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

// сортировка по алфавиту
a.sort((a, b) => a.name.localeCompare(b.name));
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

// example
const deleteDeckFromSelected = (id: number) => {
  setSelectedDecks(selectedDecks.filter((deck) => deck.id !== id));
};
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


// example
const onSelectDeck = (clickedDeck: TDeckObj) => {
  const isAlreadyExists = selectedDecks.some((deck) => deck.id === clickedDeck.id);

  if (!isAlreadyExists) {
    // add selected deck
    if (selectedDecks.length < 10) {
      setSelectedDecks([...selectedDecks, clickedDeck]);
    }
  } else {
    // remove deck if already exists
    setSelectedDecks(selectedDecks.filter((deck) => deck.id !== clickedDeck.id));
  }
};
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

### `reduce()` new

Суть reduce вернуть не просто массив как это делает .map(), .filter(), .sort(), а вернуть какой-то вычисляемое значение, которое принимается в качестве первого аргумента, и там может быть любой тип данных.

#### Подсчет суммы циклом for.

```js
const array = [1, 2, 3, 4, 5];
let summOfArray = 0;

for (i = 0; i < array.length; i++) {
  summOfArray += array[i];
}
```

#### Подсчет суммы через reduce();

```js
const array = [1, 2, 3, 4, 5];

const summOfArray = array.reduce((total, item) => total += item);
```

```js
const array = [1, 2, 3, 4, 5];

// total по ум. равен 1-ому элементу массива, если не указали значение в конце, при этом в цикле будет пропущена первая итерация

// пробежаться циклом по элементам
// total он же accumulator, accum, item он же curEl
array.reduce((total, item, index, sourceArray) => {
  console.log('item', item);
}, 0); // 0 - total - начальное значение

// посчитать сумму
const summOfArray = array.reduce((total, item, index, sourceArray) => {
  total += item;

  return total;
}, 0);

В total можно держать не только number, a также {} и [];
```

#### Макс. значение цикл for

```ts
const array = [1, 2, 3, 4, 5];
let max = array[0];

for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}
```

#### Макс. значение цикл reduce()

```js
const array = [1, 2, 3, 4, 5];
const max = array.reduce((total, item) => Math.max(item));
```


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

Ecnm два массива, нужно проверить, находятся ли элементы одного массива в другом. Метод `.includes()` не работает с объектами.

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

### 6. Объект вместо вызова функции

Если нужно подставлять какие-либо данные в зависимости от значения прорса.

### 1 вариант - использовать вызов функции

```tsx
type TDirection = 'left' | 'up' | 'right' | 'down';
type TProps = {
  direction?: TDirection;
};

const Arrow = ({ direction = 'down' }: TProps) => {
  const returnDirection = (directionName: TDirection) => {
    switch (directionName) {
      case 'left': return 90;
      case 'up': return 180;
      case 'right': return 270;
      case 'down': return 0;

      default: return 0;
    }
  };

  return (
    <svg
      style={{ transform: `rotate(${returnDirection(direction)}deg)` }}
      width='14'
      height='8'
      viewBox='0 0 14 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1 1L7 7L13 1'
        stroke='#000'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Arrow;
```

### 2 вариант - использовать объект (так проще)

```tsx
type TDirection = 'left' | 'up' | 'right' | 'down';
type TProps = {
  direction?: TDirection;
};

const Arrow = ({ direction = 'down' }: TProps) => {
  const directions: Record<TDirection, number> = {
    left: 90,
    up: 180,
    right: 270,
    down: 0,
  };

  const selectedDirection = directions[direction];

  return (
    <svg
      style={{ transform: `rotate(${selectedDirection}deg)` }}
      width='14'
      height='8'
      viewBox='0 0 14 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1 1L7 7L13 1'
        stroke='#000'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Arrow;
```

## Фильтрация c filter()

C forEach так не получится!!!

```ts
const a = [
  [
    { order11: 'order11', status: 'Delivered' },
    { order12: 'order12', status: 'Delivered' },
    { order13: 'order13', status: 'Not-delivered' },
    { order14: 'order14', status: 'Not-delivered' },
  ],
  [
    { order21: 'order21', status: 'Delivered' },
    { order22: 'order22', status: 'Delivered' },
    { order23: 'order23', status: 'Not-delivered' },
  ],
];

// a --> b
const b = a.map((pointsArray) => {
  return pointsArray.filter((order) => order.status === 'Delivered');
});

// result
const b = [
  [
    { order11: 'order11', status: 'Delivered' },
    { order12: 'order12', status: 'Delivered' },
  ],
  [
    { order21: 'order21', status: 'Delivered' },
    { order22: 'order22', status: 'Delivered' },
  ],
];
```

### Сравнение массивов 2

```js
// слоты (session.slots): [ ['cardId'], ['cardId'], ..., ['cardId', 'cardId'] ]
// список карт (session.cards): [{ card1 }, { card2 }, ..., { cardN }]
// слоты с картами (slotsWithCards) [ [{ card1 }], [{ card2 }], ..., [{ cardN }, { cardM }] ]

const slots = [['cardId1'], ['cardId2'], ['cardId3', 'cardId4', 'cardId5']];

const cards = [
  { cardId: 'cardId1' },
  { cardId: 'cardId2' },
  { cardId: 'cardId3' },
  { cardId: 'cardId4' },
  { cardId: 'cardId5' },
  { cardId: 'cardId6' },
];

<slot1>
  <card1 />
</slot1>

<slot2>
  <card2 />
</slot2>

<slot3>
  <card3 />
  <card4 />
  <card5 />
</slot3>

const a = slots.map((slot, index) => {
  return cards.filter((card) => slot.includes(card.cardId));
});

console.log('a', a);
```

---

### Насыщение масива объектами

```tsx
  // слоты (session.slots): [ ['cardId'], ['cardId'], ..., ['cardId', 'cardId'] ]
  // список карт (session.cards): [{ card1 }, { card2 }, ..., { cardN }]
  // слоты с картами (slotsWithCards) [ [{ card1 }], [{ card2 }], ..., [{ cardN }, { cardM }] ]
  const slotsWithCards: TableCard[][] = session.slots.map((slot) => {
    return session.cards.filter((card) => slot.includes(card.cardId));
  });
```

---

### Сравнение массивов 2

```js
// Задача: есть массивы а и b с цифрами
// Если в массиве a уже есть элемент из массива b, то нужно удалить, если нет - то добавить, остальные элементы пропустить

// [1, 2, 3, 4, 5, 6, 7] и [1, 2, 8] --> [3, 4, 5, 6, 7, 8]

const a = [1, 2, 3, 4, 5, 6, 7];
const b = [1, 2, 8];

b.map((el, index) => {
  const isExist = a.some((a) => a === el);

  console.log(index, isExist);

  if (isExist) {
    a.shift(el); // удаляет элемент из исходного массива
  } else { 
    a.push(el); // добавляет элемент
  }
});

console.log('a', a);
```

---

### Сравнение массивов 3

```js
// Задача: есть массивы а и b с цифрами
// Если в массиве a уже есть элемент из массива b, то нужно удалить, если нет - то добавить, остальные элементы пропустить

// [1, 2, 3, 4, 5, 6, 7] и [1, 2, 8] --> [3, 4, 5, 6, 7, 8]

const a = [1, 2, 3, 4, 5, 6, 7];
const b = [1, 2, 8];

b.map((el, index) => {
  const isExist = a.some((a) => a === el);

  // если элемент массива b существует в массиве a
  if (isExist) {
    const index = a.indexOf(el); // находим индекс этого элемента
    a.splice(index, 1); // удаляем его из массива
  } else {
    a.push(el); // если нет, то добавляем
  }
});

console.log('a', a); // [3, 4, 5, 6, 7, 8]
```
