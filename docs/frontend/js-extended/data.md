---
title: Обработка данных +--
sidebar_position: 3
---

## Обработка массивов

### Сортировка по id

```ts
const a = [
  {
    "id": 3,
    "name": "<не указан>"
  },
  {
    "id": 2,
    "name": "Тестовый статус "
  },
  {
    "id": 0,
    "name": "Старый тестовый статус"
  },
  {
    "id": 1,
    "name": "что то непонятно происходит со "
  },
];

// straight sorting
const sortedA = a.sort((nextEl, curEl) => nextEl.id - curEl.id); // 0, 1, 2, 3

// reversed sorting
const sortedAReversed = a.sort((nextEl, curEl) => curEl.id - nextEl.id); // 3, 2, 1, 0
```

TODO

---

## Обработка объектов

TODO

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
