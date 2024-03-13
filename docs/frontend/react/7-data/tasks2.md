---
title: Задачи (-)
sidebar_position: 13
---

Напишите функцию, которая умеет превращать строки вроде "a.b.c" в объекты. Результатом для строки-примера будет "a": {"b": {"c": {}}}. 

```ts
const namespace = (str: string): object =>
  str.split(".").reduceRight((acc, key) => ({ [key]: acc }), {});

namespace('a.b.c.d.e') // "{"a":{"b":{"c":{"d":{"e":{}}}}}}"
```

***

Реактивность. Вторая задача будет о реактивности. Если вы раньше сталкивались, например, с фреймворком Vue, то, скорее всего, знаете что это. Суть реактивности в том, что при изменении данных или состояния интерфейс автоматически ререндерится. В нативном JS нет встроенной реактивности, но её можно реализовать. Именно этим вы и займётесь на практике.

```ts
input.addEventListener('keyup', (event: KeyboardEvent) => {
  text.innerText = event.target.value;
  console.log(event.target.value)
})
```

```ts
type Nullable<T> = T | null;

const text: Nullable<HTMLDivElement> = document.getElementById(
  "text"
) as HTMLDivElement;
const input: Nullable<HTMLInputElement> = document.getElementById(
  "input"
) as HTMLInputElement;

if (!text || !input) {
  throw new Error("нет полей");
}

const data = {
  title: ""
};

Object.defineProperty(data, 'title', {});

input.addEventListener('keyup', (event: KeyboardEvent) => {
  text.innerText = event.target.value;
  console.log(event.target.value)
})

export default Nullable
```

```ts
type Nullable<T> = T | null;

const text: Nullable<HTMLDivElement> = document.getElementById(
  "text"
) as HTMLDivElement;
const input: Nullable<HTMLInputElement> = document.getElementById(
  "input"
) as HTMLInputElement;

if (!text || !input) {
  throw new Error("нет полей");
}

const data = {
  title: ""
};

Object.defineProperty(data, "title", {
  set: (value: string) => {
    text.textContent = value;
  }
});

input.addEventListener("keyup", event => {
  data.title = event.target.value;
});

export default Nullable
```

## Обработка циклом for и forEach

```ts
// объект-заготовка для хранения "умных" маршрутов
const iSmartRoutes: {
    [key: number]: IOrderInRoute[][];
} = {};

// прогоняем коллекцию маршрутов
data.forEach(routeData => {
    // объект-заготовка для хранения уникальных атрибутов
    const uniqueOrderAttributes: IUniqueOrderAttributes = {};

    // массив массивов-заготовка для группировки заказов в точки
    const dots: IOrderInRoute[][] = [];

    // проходим по заказам внутри маршрута
    for (let i = 0; i < routeData.orders.length; i++) {
        // массив-заготовка для группировки заказов текущего маршрута
        // [] curentDots, будем пушить в [] dots (массив массивов)
        const curentDots = [];

        // данные текущего заказа
        const currentOrder = routeData.orders[i];

        // сбрасываем уникальный аттрибут
        let uniqueAttr = '';

        // поиск и присвоение уникального аттрибута
        if (currentOrder.originalInterval) {
            uniqueAttr = currentOrder.address;
        } else if (
            currentOrder.deliveryType ===
                OrderDeliveryTypeEnum.PARTNER_PICKUP ||
            currentOrder.deliveryType ===
                OrderDeliveryTypeEnum.PARTNER_RETURN
        ) {
            uniqueAttr = currentOrder.pickUpPointErpId
                ? `${currentOrder.pickUpPointErpId}-partner`
                : `${currentOrder.longitude},${currentOrder.latitude}`;
        } else if (
            currentOrder.deliveryType ===
                OrderDeliveryTypeEnum.OWN_DELIVERY ||
            currentOrder.deliveryType ===
                OrderDeliveryTypeEnum.CUSTOMER_RETURN
        ) {
            uniqueAttr =
                currentOrder.client ||
                `${currentOrder.longitude},${currentOrder.latitude}`;
        } else if (
            currentOrder.deliveryType ===
            OrderDeliveryTypeEnum.OWN_PICKUP
        ) {
            uniqueAttr = currentOrder.pickUpPointErpId
                ? `${currentOrder.pickUpPointErpId}-own`
                : `${currentOrder.longitude},${currentOrder.latitude}`;
        } else {
            uniqueAttr = `${currentOrder.longitude},${currentOrder.latitude}`;
        }

        // уникальные аттрибуты заказов записываются как поля объекта uniqueOrderAttributes,
        // если у заказа уникальный аттрибут совпадает с уже сохраненным в uniqueOrderAttributes
        // то он записан не будет
        // кол-во полей в uniqueOrderAttributes = кол-во точек внутри маршрута
        if (!uniqueOrderAttributes.hasOwnProperty(uniqueAttr)) {
            uniqueOrderAttributes[uniqueAttr] = true;
        }

        // пушим заказ в curentDots
        curentDots.push(currentOrder);

        // на каждую итерацию заказа также пробегаемся по всем заказам для сравнения заказа с заказом
        for (let j = 0; j < routeData.orders.length - i; j++) {
            // сравниваемый заказ
            const compareOrder = routeData.orders[j];

            // исключаем сравнение одинаковых заказов
            if (currentOrder.id !== compareOrder.id) {
                // сбрасываем уникальный аттрибут 2
                let uniqueAttr2 = '';

                // поиск и присвоение уникального аттрибута 2
                if (compareOrder.originalInterval) {
                    uniqueAttr2 = compareOrder.address;
                } else if (
                    compareOrder.deliveryType ===
                        OrderDeliveryTypeEnum.PARTNER_PICKUP ||
                    compareOrder.deliveryType ===
                        OrderDeliveryTypeEnum.PARTNER_RETURN
                ) {
                    uniqueAttr2 = compareOrder.pickUpPointErpId
                        ? `${compareOrder.pickUpPointErpId}-partner`
                        : `${compareOrder.longitude},${compareOrder.latitude}`;
                } else if (
                    compareOrder.deliveryType ===
                        OrderDeliveryTypeEnum.OWN_DELIVERY ||
                    compareOrder.deliveryType ===
                        OrderDeliveryTypeEnum.CUSTOMER_RETURN
                ) {
                    uniqueAttr2 =
                        compareOrder.client ||
                        `${compareOrder.longitude},${compareOrder.latitude}`;
                } else if (
                    compareOrder.deliveryType ===
                    OrderDeliveryTypeEnum.OWN_PICKUP
                ) {
                    uniqueAttr2 = compareOrder.pickUpPointErpId
                        ? `${compareOrder.pickUpPointErpId}-own`
                        : `${compareOrder.longitude},${compareOrder.latitude}`;
                } else {
                    uniqueAttr2 = `${compareOrder.longitude},${compareOrder.latitude}`;
                }

                // если уникальный аттрибуты неодинакового сравниваемого заказа совпадает с текущим
                // то пушим этот заказ тоже в curentDots
                if (uniqueAttr2 === uniqueAttr) {
                    curentDots.push(currentOrder);

                    // удаляем этот заказ из массива внутри j-цикла
                    routeData.orders.splice(j, 1);
                    j--;
                }
            }
        }

        // console.log('curentDots', curentDots);
        // пушим массив
        dots.push(curentDots);

        // после вычислений удаляем заказ из массива внутри i-цикла
        routeData.orders.splice(i, 1);

        // так как мы удалили обработанный заказ
        // можно обнулить счетчик i-го массива, если в нем еще остались заказы
        if (routeData.orders.length > 0) {
            i = 0;
        }

        // записываем "умные заказы" внутрь iSmartRoutes
        iSmartRoutes[routeData.id] = dots;
    }
});
```

```ts
const colorList: string[] = [
  'rgba(233, 30, 99, 0.25)', // 0 % 19 = 0, 19 % 19 = 0, 
  'rgba(156, 39, 176, 0.25)', // 1 % 19 = 1, 20 % 19 = 1
  'rgba(103, 58, 183, 0.25)', // 2 % 19 = 2
  'rgba(63, 81, 181, 0.25)', // 3 % 19 = 3
  'rgba(33, 150, 243, 0.25)',
  'rgba(255, 235, 59, 0.25)',
  'rgba(3, 169, 244, 0.25)',
  'rgba(244, 67, 54, 0.25)',
  'rgba(158, 158, 158, 0.25)',
  'rgba(139, 195, 74, 0.25)',
  'rgba(255, 193, 7, 0.25)',
  'rgba(0, 150, 136, 0.25)',
  'rgba(205, 220, 57, 0.25)',
  'rgba(0, 188, 212, 0.25)',
  'rgba(255, 152, 0, 0.25)',
  'rgba(76, 175, 80, 0.25)',
  'rgba(121, 85, 72, 0.25)',
  'rgba(255, 87, 34, 0.25)',
  'rgba(96, 125, 139, 0.25)',
];

// остаток от деления на длину colorList сбрасывает index colorList
const returnAreaColor = (index: number) => colorList[index % colorList.length];

export default returnAreaColor;
```
