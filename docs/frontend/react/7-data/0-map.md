---
title: map()
sidebar_position: 0
---

`map()` возвращает массив длинной равной длины обрабатываемого массива. Если нужно вернуть массив меньшего размера нужно использовать циклы `for` или `forEach` c push-методом в пустой массив.

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
