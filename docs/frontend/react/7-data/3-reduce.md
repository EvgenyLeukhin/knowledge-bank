---
title: reduce()
sidebar_position: 3
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
