---
title: filter(), includes()
sidebar_position: 2
---

## `filter()`

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
  setSelectedDecks(selectedDecks.filter(deck => deck.id !== id));
};
```

---

Возвращает отфильтрованный массив, фильтру нужно условие если оно вернет true, то элемент проходит, если false, то нет.

## Сравнение массивов

Есть два однотипных массива объектов, первый - полный исходный, второй часть от первого.
Задача: нужно получить третий массив, который является разницей общего и второго.

```js
const fullArray = [{...}, {...}, {...},{...},{...},{...}, ];
const partOfFullArray = [{...}, {...}, {...},];

const anotherPartOfFullArray = fullArray - partOfFullArray; /// ???
```

```js
// делаем фильтрацию полного массива
const anotherPartOfFullArray = fullArray.filter((itemOfFull, index) => {
  // на каждую итерацию проверяем есть ли этот элемент в полном массиве, если есть то вернется этот объект, если нет, то undefined
  const matchedElement = partOfFullArray.find(
    itemOfPart => itemOfPart.id === itemOfFull.id,
  );

  // совпаденный объект - будет false, а undefined превратиться в true
  return !Boolean(matchedElement);
});
```

## `includes()`

Как some() с более лаконичной записью, только простых массивов с однотипными данными.

```ts
const playerId = 'id2';
const players = ['id1', 'id2', 'id3', ...];

const isPlayerExist = players.includes(playerId); // true
```

---
