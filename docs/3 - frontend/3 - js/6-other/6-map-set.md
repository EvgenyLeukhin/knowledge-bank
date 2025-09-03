---
title: Map-set
sidebar_position: 6
---

## Set

### Создание списка строк из массива

```ts
// Множества дат для дизейбла в календаре
const existingChangesDatesSet = useMemo(() => {
  const set = new Set<string>();
  workdayChanges?.forEach(item => {
    if (item?.date) set.add(item.date);
  });
  return set;
}, [workdayChanges]);

const selectedNewDatesSet = useMemo(() => {
  const set = new Set<string>();
  addDaysValues?.forEach(item => {
    if (item?.date) set.add(item.date);
  });
  return set;
}, [addDaysValues]);

// проверка на наличие в этих списках
const dateStr = day?.format(FORMAT_TYPE2);

const isExist =
  existingChangesDatesSet.has(dateStr) || selectedNewDatesSet.has(dateStr);
```

### Создание массива из set

```js
const a = Array.from(set);
```
