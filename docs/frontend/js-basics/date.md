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

<CODE>new Date().getSeconds()</CODE> – 108

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
const nowDate = format(new Date(), 'hh:mm:ss');
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