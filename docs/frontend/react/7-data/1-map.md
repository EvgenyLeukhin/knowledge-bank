---
title: map()
sidebar_position: 1
---

## Мапинг

Если нужно видоизменить текущий массив, добавить в него новые поля или убрать существующие.

`map()` возвращает массив длинной равной длины обрабатываемого массива. Если нужно вернуть массив меньшего размера нужно использовать циклы `for` или `forEach` c push-методом в пустой массив.


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

## Массив массивов

```ts
// из массива точек получаем отфильрованные массивы заказов по pointId
// [pointId1, pointId2, ...,] --> [[{order, order}], [{order}], [{order},{order},{order},] ]
// ordersWithPointId - коллекция заказов
const routePoints: IOrderInRouteWithPointId[][] = routePointIds.map((id) => {
    return ordersWithPointId.filter((order) => order.pointId === id);
});
```

---

## Изменение одного поля в массива

```ts
toggleSelectErpRoutesAction: (state: RoutesStateType, { payload }: PayloadAction<number>) => {
    const processedErpRoutes = state.exportedRoutes.map((route) => {
        if (route.id === payload) {
            return {
                ...route,
            selected: !route.selected,
            };
        }
        return route;
    });

    return {
        ...state,
        exportedRoutes: processedErpRoutes,
    };
},
```

---


