---
title: Дата и время
sidebar_position: 20
---

export const CODE = ({children}) => (
<code style={{ color: 'cyan' }}>
{children}
</code>
);

## Получить полную текущую дату:

<CODE>new Date()</CODE> – Tue Apr 04 2023 13:00:33 GMT+0600 (Омск, стандартное время)

---

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
);
```

## Получить текущий год:

<CODE>new Date().getFullYear()</CODE> – 2023

---

## Получить текущий месяц (нумерация с нуля):

<CODE>new Date().getMonth()</CODE> – 4

---

## Получить текущий день:

<CODE>new Date().getMonth()</CODE> – 4

---

## Получить день недели (0 - вс, 1 - пн, ...):

<CODE>new Date().getDay()</CODE> – 2

---

## Получить часы в 24-часовом формате:

<CODE>new Date().getHours()</CODE> – 13

---

## Получить минуты:

<CODE>new Date().getMinutes()</CODE> – 0

---

## Получить секунды:

<CODE>new Date().getSeconds()</CODE> – 33

---

## Получить милисекунды:

<CODE>new Date().getTime()</CODE> – 108

---

## Дата отчета в JS:

<CODE>new Date(0)</CODE> – Thu Jan 01 1970 06:00:00 GMT+0600 (Омск, стандартное время)

---

## Количество пройденных мс от даты отчета:

<CODE>new Date().getTime()</CODE> – 1680591633108

---

## Подставить определенную дату без времени (время подставляется автоматичеси).

Форматы: <CODE>yyyy-MM-dd, MM-dd-yyyy</CODE>

---

## Разделители: точки, тире, пробелы и слэши.

- <CODE>new Date("2017-01-26")</CODE> – Thu Jan 26 2017 06:00:00 GMT+0600 (Омск, стандартное время)

- <CODE>new Date("2017.01.26")</CODE> – Thu Jan 26 2017 00:00:00 GMT+0600 (Омск, стандартное время)

- <CODE>new Date("2017/01/26")</CODE> – Thu Jan 26 2017 00:00:00 GMT+0600 (Омск, стандартное время)

- <CODE>new Date("2017 01 26")</CODE> – Thu Jan 26 2017 00:00:00 GMT+0600 (Омск, стандартное время)

- <CODE>new Date("01-26-2017")</CODE> – Thu Jan 26 2017 00:00:00 GMT+0600 (Омск, стандартное время)

---

## Извлечь дату из полной строки даты со временем:

`const date = `<CODE>new Date("Fri Mar 17 2023 17:47:37 GMT+0600 (Омск, стандартное время)")</CODE>

`date`.<CODE>toISOString().split("T")[0]</CODE> – 2023-03-17

или

`date`.<CODE>toISOString()..slice(0, 10)</CODE> – 2023-03-17

---

## Локализация

```js
const day = new Date().toLocaleDateString('ru-RU', {
  // weekday: 'short',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
});

const time = new Date().toLocaleTimeString('ru-RU', {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
});

day; // '22.11.2024'

time; // '10:47:45'
```

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
/---
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
{
  format(new Date(courierStatusDate.split('+')[0]), 'dd.MM.yyyy, hh:mm');
}
```

## Сравнение дат

```tsx
export const returnIsOntimePointTimeDeliveryStatus = (
  pointsArray: IOrderInRouteWithPointId[],
): boolean => {
  return pointsArray.some(order => {
    if (order.courierStatus === сourierStatusEnum.DELIVERED) {
      const deliveryDateArray = order.deliveryDate.split('-');

      // '17:00:00' (конец интервала в заказе)
      const deliveryEndInterval = `${order.interval.split('-')[1]}:00`;

      // '13:40:01' (время, когда курьер доставил заказ клиенту)
      const courierDeliveryTime = order.courierStatusDate
        .split('T')[1]
        .substring(0, 8);

      // даты для сравления (берем с поля deliveryDate)
      const deliveryEndIntervalDateForCompare = new Date(
        // date
        Number(deliveryDateArray[0]),
        Number(deliveryDateArray[1]) - 1,
        Number(deliveryDateArray[2]),

        // end of interval time
        Number(deliveryEndInterval.split(':')[0]),
        Number(deliveryEndInterval.split(':')[1]),
        Number(deliveryEndInterval.split(':')[2]),
      );

      const courierDeliveryDateForCompare = new Date(
        // date
        Number(deliveryDateArray[0]),
        Number(deliveryDateArray[1]) - 1,
        Number(deliveryDateArray[2]),

        // time
        Number(courierDeliveryTime.split(':')[0]),
        Number(courierDeliveryTime.split(':')[1]),
        Number(courierDeliveryTime.split(':')[2]),
      );

      // сравниваем даты
      return deliveryEndIntervalDateForCompare >= courierDeliveryDateForCompare;
    }
  });
};
```

---

## Timezones - разница в часовых поясах

```tsx
const CURRENT_GTM_TIMEZONE = Math.abs(new Date().getTimezoneOffset() / 60);

// высчитываем при загрузке текущее время хаба c учетом разницы в таймзонах
useEffect(() => {
  // timezones
  const userGtmTimezone: number = CURRENT_GTM_TIMEZONE;
  const selectedHubGtmTimezone: number = hub?.timezone as number;
  const timezoneDiff: number = userGtmTimezone - selectedHubGtmTimezone;

  // current user time
  const currentUserTime: string = format(new Date(), 'HH-mm');
  const currentUserHours: number = Number(currentUserTime.split('-')[0]);
  const currentUserMinutes: number = Number(currentUserTime.split('-')[1]);

  // hub time
  const selectedHubHours = currentUserHours - timezoneDiff;
  const selectedHubMinutes = currentUserMinutes;

  setHubCurrentTime(`${selectedHubHours}:${selectedHubMinutes}`);
}, []);
```

---

## addDayToDate - добавление дней к дате

```tsx
import format from 'date-fns/format';

// добавляет дни к переданной дате с форматированием
export const addDaysToDate = (
  date: Date,
  days: number = 0,
  formatView: string = 'yyyy-MM-dd',
): string =>
  format(
    // создание новой даты с добавлением кол-ва дней
    new Date(date.getFullYear(), date.getMonth(), date.getDate() + days),

    // форматирование этой даты в date-fns format
    formatView,
  );

// использование
const TODAY = addDaysToDate(new Date());
const TODAY_PLUS_7DAYS = addDaysToDate(new Date(), 6); // +6 дней включительно = интервал в 7 дней
const TODAY_PLUS_8DAYS_FORMATED = addDaysToDate(new Date(), 7, 'dd.MM.yyyy'); // тут "на 8-й день"
```

---

## Проверка интервала

```ts
// '10:00 - 18:00' --> true - если интервал более 5 часов
// '10:00 - 12:00' --> false

// проверка на большой интервал
export const IS_BIG_INTERVAL_MINUTES_DIFF = 300;

export const checkBigInterval = (interval: string): boolean => {
  if (!interval) return false;

  // start interval
  const startIntervalArray = interval.split(' - ')[0].split(':');
  const startIntervalHoursToMinutes = Number(startIntervalArray[0]) * 60;
  const startIntervalMinutes = Number(startIntervalArray[1]);
  const startIntervalMinutesSum =
    startIntervalHoursToMinutes + startIntervalMinutes;

  // end interval
  const endIntervalArray = interval.split(' - ')[1].split(':');
  const endIntervalHoursToMinutes = Number(endIntervalArray[0]) * 60;
  const endIntervalMinutes = Number(endIntervalArray[1]);
  const endIntervalMinutesSum = endIntervalHoursToMinutes + endIntervalMinutes;

  // возвращаем условие
  return (
    endIntervalMinutesSum - startIntervalMinutesSum >=
    IS_BIG_INTERVAL_MINUTES_DIFF
  );
};
```

## Локализация

```ts
// Tue Apr 16 2024 17:43:19 GMT+0600 (Омск, стандартное время) --> '16.04.2024'
new Date().toLocaleDateString();
```

---

## Добавление дней к сегодняшней дате

```js
const formatDate = (addDays = 0) => {
  // вытаскиваем значения с текущей даты с добавление дней
  let year = new Date().getFullYear();
  let month = new Date().getMonth();
  let date = new Date().getDate() + addDays;

  // конвертируем обратоно в Date-строку (чтобы случился перескок на другой месяц, если кол-во дней будет больше 30-31 или меньше 0)
  const newDate = new Date(year, month, date);

  // вытаскиваем значения даты уже с новой даты
  year = newDate.getFullYear();
  month = newDate.getMonth() + 1; // так так отсчет месяцев в JS начинается с 0
  date = newDate.getDate();

  // подставляем 0
  const monthFormated = month < 10 ? `0${month}` : month;
  const dateFormated = date < 10 ? `0${date}` : date;

  // сохранение даты в валидном формате для бэкенда (YYYY-mm-DD)
  const fullDateFormated = `${year}-${monthFormated}-${dateFormated}`;

  return fullDateFormated;
};

// без добавления дней вернется отформатированная текущая дата
// const today = formatDate();

const todayMinus10Days = formatDate(-10);
const todayPlus10Days = formatDate(10);

// сохраняем полученные значения в переменную
pm.environment.set('TODAY_MINUS_10_DAYS', todayMinus10Days);
pm.environment.set('TODAY_PLUS_10_DAYS', todayPlus10Days);
```
