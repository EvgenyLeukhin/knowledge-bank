---
title: Задачки по JS
sidebar_position: 10
---

## Задачи для собеседования

- [https://codepen.io/sk-iv/pen/ZERVGvL](https://codepen.io/sk-iv/pen/ZERVGvL)
- [https://codepen.io/Inpulsar/pen/MWRobRz?editors=0010](https://codepen.io/Inpulsar/pen/MWRobRz?editors=0010)
- [https://codepen.io/Inpulsar/pen/xxerRmv?editors=0010](https://codepen.io/Inpulsar/pen/xxerRmv?editors=0010)

---

- [https://codesandbox.io/s/zadacha-no-1-taymer-xfyilm](https://codesandbox.io/s/zadacha-no-1-taymer-xfyilm)
- [https://codesandbox.io/s/zadacha-no2-intervaly-i-diapazony-g1stxg](https://codesandbox.io/s/zadacha-no2-intervaly-i-diapazony-g1stxg)
- [https://codesandbox.io/s/zadacha-no-3-perenos-vybrannogo-v-sleduyushchee-sostoyanie-bm78w1](https://codesandbox.io/s/zadacha-no-3-perenos-vybrannogo-v-sleduyushchee-sostoyanie-bm78w1)
- [https://codesandbox.io/s/zadacha-no-4-pravilnyy-kod-f7mfux](https://codesandbox.io/s/zadacha-no-4-pravilnyy-kod-f7mfux)
- [https://codesandbox.io/s/zadacha-no-5-sortirovka-s-razdelitelem-hr3xm4](https://codesandbox.io/s/zadacha-no-5-sortirovka-s-razdelitelem-hr3xm4)
- [https://codepen.io/sk-iv/pen/ZERVGvL](https://codepen.io/sk-iv/pen/ZERVGvL)

### Вывод в консоль с задержкой

Требуется написать тело функции func так, чтобы оно выводило в лог числа начинающиеся с переданного значения x до нуля уменьшаясь каждый раз на единицу, с интервалов в 1 секунду, пока не достигнет ноля

```js
function someFunc(x) {
  let a = x;

  // сохраняем асинхронную переменную
  const returnAsyncConsole = setInterval(() => {
    // очищаем асинхрон если a = -1
    if (a === -1) {
      return clearInterval(returnAsyncConsole);
    }

    console.log('x: ', a);

    a--;
  }, 1000)
}

someFunc(15);
```

Еще решение

```js
const func = (value) => {
  let i = value;
  const intervalValue = setInterval(() => {
    console.log('i = ', i);
    i--;

    if (i < 0) {
      console.log('clearInterval');
      clearInterval(intervalValue);
    }
  }, 1000)
}

func(10);
```

Через рекурсию в 2 строки

```js
const func = (value) => {
  console.log(value);
  if (value > 0) setTimeout(() => func(value - 1), 1000);
};

func(10);
```

---

### Сортировка с разделителем

TODO: Даны массивы чисел с разделителями в виде строки "D". Требуется написать тело функции sorter так, чтобы она возвращала массив чисел, отсортированных по возрастанию, при этом сохраняя разделители на своих местах в массиве.

```js
const list1 = [4, 2, 7, "D", 12, 8, 5, "D", 23]; // [4, 2, 7, "D", 12, 8, 5, "D", 23] --> [2, 4, 5, "|", 7, 8, 12, "|", 23]
const list2 = [5, 7, "D", 12, "D", 5, "D", 23];  // [5, 7, "D", 12, "D", 5, "D", 23]  --> [5, 5, "|", 7, "|", 12, "|", 23]


const sorter = (list) => {
  // find div indexes and numbers sorting
  const reducedList = list.reduce((total, el, index) => {
    // const divIndexes = [];
    // const numbers = [];

    if (typeof el === 'string') {
      total.divs.push(index);
      // divIndexes.push(index);
    } else {
      total.numbers.push(el);
    }

    total.numbers.sort((a, b) => a - b);

    return total;
  }, {
    divs: [],
    numbers: [],
  });

  // create array by list length
  const iNITIAL_LIST_INDEXES = [...Array(list.length).keys()];

  return iNITIAL_LIST_INDEXES.map(index => {
    const { divs, numbers } = reducedList;

    if (divs.includes(index)) {
      // добавление 'D' в массив number по этому индексу
      numbers.splice(index, 0, 'D');
      return 'D';
    }

    return numbers[index];
  });
};

console.log(sorter(list1));

// for (let i = 0; i < list.length; i++) {
//   if (list[i] === "D") {
//     nubers.splice(i, 0, "D");
//   }
// }
```

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
// --> [03.01, 05.01, 07.01, 09.01, 10.01, 13.01, 15.01, 16.01]
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
// --> [30.12, 31.12, 01.01, 04.01, 05.01]
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
// --> [29.12, 31.12, 01.01, 02.01, 04.01]
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

---

## Сравнение частей интервала

```ts
// проверка на большой интервал
export const IS_BIG_INTERVAL_MINUTES_DIFF = 300;
export const checkBigInterval = (interval: string): boolean => {
    if (!interval) return false;

    // start interval
    const startIntervalArray = interval.split(' - ')[0].split(':');
    const startIntervalHoursToMinutes = Number(startIntervalArray[0]) * 60;
    const startIntervalMinutes = Number(startIntervalArray[1]);
    const startIntervalMinutesSum = startIntervalHoursToMinutes + startIntervalMinutes;

    // end interval
    const endIntervalArray = interval.split(' - ')[1].split(':');
    const endIntervalHoursToMinutes = Number(endIntervalArray[0]) * 60;
    const endIntervalMinutes = Number(endIntervalArray[1]);
    const endIntervalMinutesSum = endIntervalHoursToMinutes + endIntervalMinutes;

    // возвращаем условие
    return endIntervalMinutesSum - startIntervalMinutesSum >= IS_BIG_INTERVAL_MINUTES_DIFF;
};
```

## Нахождения минут до конца и начала интервала от текущего времени

```ts
/**
 * Возвращает разницу между датой и интервалом с учетом часового пояса
 * @param {string} date - дата в формате YYYY-MM-DD
 * @param {string} interval - интервал в формате HH:MM - HH:MM
 * @param {number} hubTimezone - часовой пояс хаба
 * @return {{
 *     startIntervalDiff: number;
 *     endIntervalDiff: number;
 * }}
 */
export const returnIntervalDiff = (
    date: string,
    interval: string,
    hubTimezone: number
): {
    startIntervalDiff: number;
    endIntervalDiff: number;
} => {
    // filter date
    const filterDate = date.split('-');
    const filterDateYear = Number(filterDate[0]);
    const filterDateMonth = Number(filterDate[1]) - 1;
    const filterDateDay = Number(filterDate[2]);

    // interval start
    const startOfInterval = interval.split(' - ')[0].split(':');
    const startIntervalHours = Number(startOfInterval[0]);
    const startIntervalMinutes = Number(startOfInterval[1]);

    const startIntervalToCurrentLocalTime = new Date(
        // date
        filterDateYear,
        filterDateMonth,
        filterDateDay,

        // end of interval
        startIntervalHours + (hubTimezone ? CURRENT_GTM_TIMEZONE - hubTimezone : 0),
        startIntervalMinutes
    );

    // interval end
    const endOfInterval = interval.split(' - ')[1].split(':');
    const endIntervalHours = Number(endOfInterval[0]);
    const endIntervalMinutes = Number(endOfInterval[1]);

    const endIntervalToCurrentLocalTime = new Date(
        // date
        filterDateYear,
        filterDateMonth,
        filterDateDay,

        // end of interval
        endIntervalHours + (hubTimezone ? CURRENT_GTM_TIMEZONE - hubTimezone : 0),
        endIntervalMinutes
    );

    if (endIntervalToCurrentLocalTime < startIntervalToCurrentLocalTime) {
        endIntervalToCurrentLocalTime.setDate(endIntervalToCurrentLocalTime.getDate() + 1);
    }

    // current date
    const LOCAL_DATE = new Date();

    const startIntervalDiff = Math.round((startIntervalToCurrentLocalTime.getTime() - LOCAL_DATE.getTime()) / 60000);

    const endIntervalDiff = Math.round((endIntervalToCurrentLocalTime.getTime() - LOCAL_DATE.getTime()) / 60000);

    return { startIntervalDiff, endIntervalDiff };
};
```

## Пример шаблонизации результатов поиска, нативная обработка формы

```html
<section class="search">
  <form class="search__form">
    <input type="text" name="title" class="search__textfield" placeholder="Искать в GitHub" id="search" />
    <button type="submit" class="search__button">
      Найти
    </button>
  </form>
  <div class="search__result">
    <h2 class="search__findings">
    </h2>
    <ul class="search__findings-list">
    </ul>
  </div>
  <div class="search__error">
  </div>
</section>
```

---

```js
const form = document.querySelector('.search__form');
const resultsContainer = document.querySelector('.search__findings-list');
const countContainer = document.querySelector('.search__findings');
const errorContainer = document.querySelector('.search__error');
const input = document.getElementById('search');

// Вставка ошибки
const renderError = () => {
  errorContainer.innerHTML = `
        <img src="https://code.s3.yandex.net/web-code/entrance-test/search.svg" alt="" class="search__error-icon" />
        <p class="search__error-message">
            Произошла ошибка...
        </p>
  `;
  countContainer.innerHTML = '';
};

// Нет результатов
const renderEmptyResults = () => {
  errorContainer.innerHTML = `
        <img src="https://code.s3.yandex.net/web-code/entrance-test/search.svg" alt="" class="search__error-icon" />
        <p class="search__error-message">
            По вашему запросу ничего не найдено, попробуйте уточнить запрос
        </p>
  `;
  countContainer.innerHTML = '';
};

// Вставка кол-ва
const renderCount = count => {
  countContainer.innerHTML = `
      Найдено <span class="search__findings-amount">${count.toLocaleString(
        'ru-RU'
      )}</span> результатов
  `;
};

// Очистка
const onSubmitStart = () => {
  countContainer.innerHTML = `Загрузка...`;
  resultsContainer.innerHTML = '';
  errorContainer.innerHTML = '';
};


// Найденные результаты
function template(item) {
  const newElement = document.createElement('li');
  newElement.classList.add('search__finding-item');
  newElement.innerHTML = `
    <p class="search__finding-name">
      ${item.full_name}
    </p>
	`;
  return newElement;
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  onSubmit(event)
})

async function onSubmit(event) {
  // ваш код
  event.preventDefault();
  onSubmitStart()

  await fetch(`https://api.nomoreparties.co/github-search?q=${input.value}`)
    .then(res => res.json())
    .then(data => {
      console.log('data: ', data);

      if (data.items.length) {
        // вставка count
        renderCount(data.total_count);

        // вставка результатов
        data.items.forEach(el => {
          resultsContainer.appendChild(template(el));
        });
      } else {
        renderEmptyResults();
      }
    })

    // error
    .catch(error => {
      console.log('error: ', error);
      renderError();
    })
}
```
