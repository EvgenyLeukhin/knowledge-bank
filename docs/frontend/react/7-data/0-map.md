---
title: map()
sidebar_position: 0
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
