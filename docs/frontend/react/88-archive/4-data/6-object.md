---
title: Обработка объектов
sidebar_position: 6
---

## Объект вместо вызова функции

```tsx
import { ColorList } from 'interfaces/colors';

type TDirection = 'left' | 'up' | 'right' | 'down';

type TProps = {
  stroke?: string;
  direction?: TDirection;
};

const Arrow = ({
  // дефолтные
  stroke = ColorList.FONT_SECONDARY,
  direction = 'down',
}: TProps) => {
// сохраняем варианты в значение полей
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
        stroke={stroke}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Arrow;
```

--- 

## Преобразование массива в объект

```tsx
const zones = [{...}, {...}, {...}, ...];


const zonesObj = zones.reduce<Record<string, string>>((total, item) => {
  total = {
    ...total,
    [item.uuid]: item.name,
  };

  return total;
}, {});

zonesObj; 
// { 
//   zoneId: zoneName,
//   zoneId: zoneName,
//   zoneId: zoneName,
//   zoneId: zoneName,
//   ...
// }
```

---

## Создание объекта из хэшей

```ts
// [{drugstore1}, {drugstore2}, ..., {drugstoreN}] --> 

// На выходе получаем объект с полями равными id зоны со значением массивом аптек в этой зоне
// {
//   zone1: [{drugstore1}, {drugstore2}, ...]
//   zone2: [{drugstore1}, {drugstore2}, ...]
//   ...
//   zoneN: [{drugstore1}, {drugstore2}, ...]
// }

const zonesByDrugstoresObj = drugstores.reduce<Record<string, string[]>>((total, drugstore) => {
  const zoneHash = drugstore.zoneUuid;

  total[zoneHash] = [...(total[zoneHash] || []), drugstore];

  return total;
}, {});

```

---

Нужно найти макс. или мин. значение в массиве массивов

```js
// [[1, 10], [2, 9], [3, 8], [4, 7]]
const value = dayWorktimeArray.reduce<number>((total, item) => {
  total = mode === 'find-max-open' ? Math.max(item[0]) : Math.min(item[1]);

  return total;
}, 0);
```

---

## Вывод лейбла по id

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
