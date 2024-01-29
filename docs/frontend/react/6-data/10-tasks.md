---
title: Задачки по JS
sidebar_position: 10
---

## 100 дверей

TODO

---

## Поиск пропущенных дней в массиве

```ts
import { CourierDeliveryInterval } from '@api/methods/methodsTypes/getCourierDeliveryIntervals.inteface';

const yearDays = {
  1: 31,
  // високосный год 29 дней, невисокосный 28
  2: new Date().getFullYear() % 4 === 0 ? 29 : 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31
};

// моки для проверки дней в одном месяце
// --> [03.01, 05.01, 07.01, 09.01, 10.01, 13.01, 15.01, 16.01] +++
export const daysInOneMonth: CourierDeliveryInterval[] = [
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '01.01.2024 13:00',
    stop: '01.01.2024 17:00'
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '01.01.2024 18:00',
    stop: '01.01.2024 21:00'
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '02.01.2024 13:00',
    stop: '02.01.2024 17:00'
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '04.01.2024 13:00',
    stop: '04.01.2024 17:00'
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '06.01.2024 13:00',
    stop: '06.01.2024 17:00'
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '08.01.2024 13:00',
    stop: '08.01.2024 17:00'
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '11.01.2024 13:00',
    stop: '11.01.2024 17:00'
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '12.01.2024 13:00',
    stop: '12.01.2024 17:00'
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '14.01.2024 13:00',
    stop: '14.01.2024 17:00'
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '17.01.2024 13:00',
    stop: '17.01.2024 17:00'
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '17.01.2024 18:00',
    stop: '17.01.2024 21:00'
  }
];

// моки для проверки дней в разных месяцах
// --> [30.12, 31.12, 01.01, 04.01, 05.01] +++
export const daysInTwoMonths: CourierDeliveryInterval[] = [
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '29.01.2024 13:00',
    stop: '29.01.2024 17:00'
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '29.01.2024 18:00',
    stop: '29.01.2024 21:00'
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '02.02.2024 13:00',
    stop: '02.02.2024 17:00'
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '03.02.2024 13:00',
    stop: '03.02.2024 17:00'
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '06.02.2024 13:00',
    stop: '06.02.2024 17:00'
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '06.02.2024 18:00',
    stop: '06.02.2024 21:00'
  }
];

// моки для проверки дней в разных годах
// --> [29.12, 31.12, 01.01, 02.01, 04.01] +++
export const daysInTwoYears: CourierDeliveryInterval[] = [
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '28.12.2023 13:00',
    stop: '28.12.2023 17:00'
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '28.12.2023 18:00',
    stop: '28.12.2023 21:00'
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '30.12.2023 13:00',
    stop: '30.12.2023 17:00'
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '03.01.2024 13:00',
    stop: '03.01.2024 17:00'
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '05.01.2024 13:00',
    stop: '05.01.2024 17:00'
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '05.01.2024 18:00',
    stop: '05.01.2024 21:00'
  }
];

export type TSkippedDay = {
  year: number;
  monthIndex: number;
  day: number;
};

function pushSkippedDayToTotal(total: TSkippedDay[], index: number, day: number, month: number, year: number): void {
  total.push({
    year,
    monthIndex: month - 1,
    day: day + index + 1
  });
}

export function findSkippedDaysInIntervals(intervals: CourierDeliveryInterval[]): TSkippedDay[] {
  // проверка что массив не пустой и не undefined
  if (!intervals.length || !intervals) return [];

  // пересобираем массив в вид ['28.12.2023', '30.12.2023', '03.01.2024', '05.01.2024']
  const intervalsToStartDays = intervals.map(interval => {
    return interval.start.slice(0, 10);
  });

  return intervalsToStartDays.reduce<TSkippedDay[]>((total, item, index, array) => {
    // index day
    const splitedIndexItem = item.split('.');
    const day = +splitedIndexItem[0];
    const month = +splitedIndexItem[1];
    const year = +splitedIndexItem[2];

    // next day (index + 1)
    const splitedNextItem = array[index + 1] ? array[index + 1].split('.') : '';
    const nextDay = +splitedNextItem[0];
    const nextMonth = +splitedNextItem[1];
    const nextYear = +splitedNextItem[2];

    // проверка, что в цикле оба дня присутствуют, splitedIndexItem будет полюбому
    // и соседние интервалы с разными днями
    if (!splitedNextItem.length || day === nextDay) {
      return total;
    }

    // в одном месяце
    if (month === nextMonth) {
      const missedDaysArray = [...Array(nextDay - day - 1).keys()];
      missedDaysArray.length &&
        missedDaysArray.forEach(index => {
          return pushSkippedDayToTotal(total, index, day, month, year);
        });
      // перескок через месяц (случай интервала в разрезе месяца, когда у соседних значений разный месяц, не будет работать есть месяцы не соседние)
    } else {
      // если первая дата - это последний день месяца, а вторая первый день, то пропускаем
      if (day === yearDays[month] && nextDay === 1) return total;

      // массив с кол-вом элементов равным числу пропущенных дней из первого месяца (кол-во дней в месяце - текущий день)
      const missedDaysInFirstMonth = [...Array(yearDays[month] - day).keys()];

      // массив с кол-вом элементов равным числу пропущенных дней из второго месяца (текущий день - 1)
      const missedDaysInSecondMonth = [...Array(nextDay - 1).keys()];

      // вставляем пропущенные даты в разрезе первого месяца
      missedDaysInFirstMonth.length &&
        missedDaysInFirstMonth.forEach(index => {
          return pushSkippedDayToTotal(total, index, day, month, year);
        });

      // вставляем пропущенные даты в разрезе второго месяца
      missedDaysInSecondMonth.length &&
        missedDaysInSecondMonth.forEach(index => {
          return pushSkippedDayToTotal(total, index, 0, nextMonth, nextYear);
        });
    }

    return total;
  }, []);
}

```
