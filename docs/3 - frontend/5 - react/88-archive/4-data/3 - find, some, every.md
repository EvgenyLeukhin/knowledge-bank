---
title: find(), some(), every()
sidebar_position: 3
---

## `find()`

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

### Обновление одного объекта в массиве

```ts
// есть массив аптек
const { drugstores } = store.getState().map;

// есть аптека в этом массиве, в которой нужно изменить какое-ниб поле
const drugstoreId = 123;
const updatedDrugstore = drugstores.find(
  drugstore => drugstore.id === drugstoreId,
);

// перезатираем поле comment новым значением
const updatedDrugstoreData = {
  ...updatedDrugstore,
  comment: 'Some new comment',
};

// обновляем список аптек, сначала исключаем эту аптеку со старыми данными и добавляем с новыми
dispatch(
  setDrugstores([
    ...drugstores.filter(drugstore => drugstore.id !== drugstoreId),
    updatedDrugstoreData as IDrugstoreOnMap,
  ]),
);
```

---

## `findIndex()`

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

## `some()`

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
  const isAlreadyExists = selectedDecks.some(
    deck => deck.id === clickedDeck.id,
  );

  if (!isAlreadyExists) {
    // add selected deck
    if (selectedDecks.length < 10) {
      setSelectedDecks([...selectedDecks, clickedDeck]);
    }
  } else {
    // remove deck if already exists
    setSelectedDecks(selectedDecks.filter(deck => deck.id !== clickedDeck.id));
  }
};
```

---

## `every()`

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

```ts
import { EPermission } from 'interfaces/auth';
import { useSelector } from 'react-redux';
import { TStore } from 'store/store';

const useAccess = (permissions: EPermission[]): boolean => {
  const userPermissions = useSelector(
    (store: TStore) => store.auth.permissions,
  );

  return permissions.every(permission => userPermissions.includes(permission));
};

export default useAccess;
```

```js
const big = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

[1, 2, 3].every(item => big.includes(item)); // true
[0, 1, 2, 3].every(item => big.includes(item)); // false
```
