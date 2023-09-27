---
title: Date
sidebar_position: 15
---

export const CODE = ({children}) => (
  <code style={{ color: 'cyan' }}>
    {children}
  </code>
);

## Получить полную текущую дату:

<CODE>new Date()</CODE> – Tue Apr 04 2023 13:00:33 GMT+0600 (Омск, стандартное время)

***

## Конструктор даты

- Формат параметров: `number`;
- Если не указывать часы, минуты и секунды, то установятся нули;
- Часовой пояс будет установлен, какой стоит в ОС

```js
// Thu Aug 31 2023 08:55:10 GMT+0600 (Омск, стандартное время)
new Date(
  // год
  2023,

  // месяц (нумерация с нуля)
  7,

  // день
  31,

  // часы
  8,

  // минуты
  55,

  // секунды
  10,
)
```

## Получить текущий год:

<CODE>new Date().getFullYear()</CODE> – 2023

***

## Получить текущий месяц (нумерация с нуля):

<CODE>new Date().getMonth()</CODE> – 4

***

## Получить текущий день:

<CODE>new Date().getMonth()</CODE> – 4

***

## Получить день недели (0 - вс, 1 - пн, ...):

<CODE>new Date().getDay()</CODE> – 2

***

## Получить часы в 24-часовом формате:

<CODE>new Date().getHours()</CODE> – 13

***

## Получить минуты:

<CODE>new Date().getMinutes()</CODE> – 0

***

## Получить секунды:

<CODE>new Date().getSeconds()</CODE> – 33

***

## Получить милисекунды:

<CODE>new Date().getTime()</CODE> – 108

***

## Дата отчета в JS:

<CODE>new Date(0)</CODE> – Thu Jan 01 1970 06:00:00 GMT+0600 (Омск, стандартное время)

***

## Количество пройденных мс от даты отчета:

<CODE>new Date().getTime()</CODE> – 1680591633108

***

## Подставить определенную дату без времени (время подставляется автоматичеси).

Форматы: <CODE>yyyy-MM-dd, MM-dd-yyyy</CODE>

***

## Разделители: точки, тире, пробелы и слэши.

- <CODE>new Date("2017-01-26")</CODE> – Thu Jan 26 2017 06:00:00 GMT+0600 (Омск, стандартное время)

- <CODE>new Date("2017.01.26")</CODE> – Thu Jan 26 2017 00:00:00 GMT+0600 (Омск, стандартное время)

- <CODE>new Date("2017/01/26")</CODE> – Thu Jan 26 2017 00:00:00 GMT+0600 (Омск, стандартное время)

- <CODE>new Date("2017 01 26")</CODE> – Thu Jan 26 2017 00:00:00 GMT+0600 (Омск, стандартное время)

- <CODE>new Date("01-26-2017")</CODE> – Thu Jan 26 2017 00:00:00 GMT+0600 (Омск, стандартное время)

***

## Извлечь дату из полной строки даты со временем:

```const date = ```<CODE>new Date("Fri Mar 17 2023 17:47:37 GMT+0600 (Омск, стандартное время)")</CODE>

```date```.<CODE>toISOString().split("T")[0]</CODE> – 2023-03-17

или

```date```.<CODE>toISOString()..slice(0, 10)</CODE> – 2023-03-17

---

## Сравненение дат

Какая дата раньше, та и больше

```js
'16.03.1962' > '01.04.1986'; // true

// позже на 1 секунду
'2023-08-01T03:41:05.071Z' > '2023-08-01T03:41:04.071Z'; // true

// 2023 > 2022
new Date().getFullYear() > new Date().getFullYear() - 1; // true

// 2023 > 2024
new Date().getFullYear() > new Date().getFullYear() + 1; // false
```

---

## date-fns

### Форматировать дату в строку

```js
import format from 'date-fns/format';

const nowDate = format(new Date(), 'yyyy-MM-dd');
const nowDate = format(new Date(), 'hh:mm:ss'); // hh 12-часовой формат
const nowDate = format(new Date(), 'HH:mm:ss'); // HH 24-часовой формат
```

### Прошедшая дата

Возвращает boolean

```js
import isPast from 'date-fns/isPast';

const isPastDate1 = isPast(new Date().getFullYear() - 1); // true
const isPastDate2 = isPast(new Date()); // false
```

### Утилита для даты

```ts
/***
 * Форматирует дату в формате HH:MM DD:MM:YYYY
 * @Date date
 */
export const formatDate = (date: Date, showSeconds = false) =>
    [
        [date.getHours(), -2],
        [':', -1],
        [date.getMinutes(), -2],
        [showSeconds ? ':' : ' ', -1],
        [date.getSeconds() + ' ', showSeconds ? -3 : -1],
        [date.getDate(), -2],
        ['.', -1],
        [date.getMonth() + 1, -2],
        ['.', -1],
        [date.getFullYear(), -4]
    ]
        .reduce((msg, el) => msg + ('0' + el[0]).slice(+el[1]), '');
```

### Конвертация при неуказанной таймзоне 

Приходит поле courierStatusDate с бэка (строка даты)
'2023-09-08T13:41:23+00:00' без указания часавого пояса

Задача: вывести эту строку в формате 'dd.MM.yyyy, hh:mm'
Проблема: если это число будем конвертировать с помощь format из date-fns c new Date(), то в время в это время будет инжектиться GTM-0

'2023-09-08T13:41:23+00:00'

UTC-формат:
new Date('2023-09-08T13:41:23+00:00') --> `Fri Sep 08 2023 19:41:23 GMT+0600 (Омск, стандартное время)`

ISO-формат:
new Date('2023-09-08T13:41:23+00:00').toISOString() --> '2023-09-08T13:41:23.000Z'

В первом примере js сразу конвертирует время под локальный часовой пояс, 13 часов превратились в 19
Во втором примере просто подставили 0-часовой пояс в формате ISO

Так как в courierStatusDate не указан часовой пояс, то js ижектит туда GTM = 0,
Также браузер понимает местный часовой пояс GTM +6 (Омск)
И при такой операции js говорит сейчас я переконвертирую это время с GTM=0 под местное время с GTM=6 и плюсует к времени 6 часов

Поможет вот такая утилита:

```js
// '2023-09-08T13:41:23+00:00' --> 08.09.2023, 13:41
export const convertISODateStringFromServer = (isoDate: string): string => {
    if (isoDate) {
        const dateArray = isoDate.split('T')[0].split('-');
        const timeArray = isoDate.split('T')[1].split(':');

        return `${dateArray[2]}.${dateArray[1]}.${dateArray[0]}, ${timeArray[0]}:${timeArray[1]}`
    }

    return '';
}
```

Либо нужно обрезать этот кусок '+00:00' у строки:

```js
{format(
    new Date(courierStatusDate.split('+')[0]),
    'dd.MM.yyyy, hh:mm',
)}
```

## Сравнение дат

```tsx
export const returnIsOntimePointTimeDeliveryStatus = (pointsArray: IOrderInRouteWithPointId[]): boolean => {
    return pointsArray.some((order) => {
        if (order.courierStatus === сourierStatusEnum.DELIVERED) {
            const deliveryDateArray = order.deliveryDate.split('-');

            // '17:00:00' (конец интервала в заказе)
            const deliveryEndInterval = `${order.interval.split('-')[1]}:00`;

            // '13:40:01' (время, когда курьер доставил заказ клиенту)
            const courierDeliveryTime = order.courierStatusDate.split('T')[1].substring(0, 8);

            // даты для сравления (берем с поля deliveryDate)
            const deliveryEndIntervalDateForCompare = new Date(
                // date
                Number(deliveryDateArray[0]),
                Number(deliveryDateArray[1]) - 1,
                Number(deliveryDateArray[2]),

                // end of interval time
                Number(deliveryEndInterval.split(':')[0]),
                Number(deliveryEndInterval.split(':')[1]),
                Number(deliveryEndInterval.split(':')[2])
            );

            const courierDeliveryDateForCompare = new Date(
                // date
                Number(deliveryDateArray[0]),
                Number(deliveryDateArray[1]) - 1,
                Number(deliveryDateArray[2]),

                // time
                Number(courierDeliveryTime.split(':')[0]),
                Number(courierDeliveryTime.split(':')[1]),
                Number(courierDeliveryTime.split(':')[2])
            );

            // сравниваем даты
            return deliveryEndIntervalDateForCompare >= courierDeliveryDateForCompare;
        }
    });
};
```

## Массив массивов

```ts
// из массива точек получаем отфильрованные массивы заказов по pointId
// [pointId1, pointId2, ...,] --> [[{order, order}], [{order}], [{order},{order},{order},] ]
// ordersWithPointId - коллекция заказов
const routePoints: IOrderInRouteWithPointId[][] = routePointIds.map((id) => {
    return ordersWithPointId.filter((order) => order.pointId === id);
});
```
