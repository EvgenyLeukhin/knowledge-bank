---
title: find()
sidebar_position: 2
---

## Обновление одного объекта в массиве

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
