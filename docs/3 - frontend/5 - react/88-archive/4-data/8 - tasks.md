---
title: Примеры задач
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

<br />
<hr />

## Вывод в консоль с задержкой

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
  }, 1000);
}

someFunc(15);
```

Еще решение

```js
const func = value => {
  let i = value;
  const intervalValue = setInterval(() => {
    console.log('i = ', i);
    i--;

    if (i < 0) {
      console.log('clearInterval');
      clearInterval(intervalValue);
    }
  }, 1000);
};

func(10);
```

Через рекурсию в 2 строки

```js
const func = value => {
  console.log(value);
  if (value > 0) setTimeout(() => func(value - 1), 1000);
};

func(10);
```

<br />
<hr />

## Сортировка с разделителем

TODO: Даны массивы чисел с разделителями в виде строки "D". Требуется написать тело функции sorter так, чтобы она возвращала массив чисел, отсортированных по возрастанию, при этом сохраняя разделители на своих местах в массиве.

```js
const list1 = [4, 2, 7, 'D', 12, 8, 5, 'D', 23]; // [4, 2, 7, "D", 12, 8, 5, "D", 23] --> [2, 4, 5, "|", 7, 8, 12, "|", 23]
const list2 = [5, 7, 'D', 12, 'D', 5, 'D', 23]; // [5, 7, "D", 12, "D", 5, "D", 23]  --> [5, 5, "|", 7, "|", 12, "|", 23]

const sorter = list => {
  // find div indexes and numbers sorting
  const reducedList = list.reduce(
    (total, el, index) => {
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
    },
    {
      divs: [],
      numbers: [],
    },
  );

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

<br />
<hr />

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
  12: 31,
};

// моки для проверки дней в одном месяце
// --> [03.01, 05.01, 07.01, 09.01, 10.01, 13.01, 15.01, 16.01]
export const daysInOneMonth: CourierDeliveryInterval[] = [
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '01.01.2024 13:00',
    stop: '01.01.2024 17:00',
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '01.01.2024 18:00',
    stop: '01.01.2024 21:00',
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '02.01.2024 13:00',
    stop: '02.01.2024 17:00',
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '04.01.2024 13:00',
    stop: '04.01.2024 17:00',
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '06.01.2024 13:00',
    stop: '06.01.2024 17:00',
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '08.01.2024 13:00',
    stop: '08.01.2024 17:00',
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '11.01.2024 13:00',
    stop: '11.01.2024 17:00',
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '12.01.2024 13:00',
    stop: '12.01.2024 17:00',
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '14.01.2024 13:00',
    stop: '14.01.2024 17:00',
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '17.01.2024 13:00',
    stop: '17.01.2024 17:00',
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '17.01.2024 18:00',
    stop: '17.01.2024 21:00',
  },
];

// моки для проверки дней в разных месяцах
// --> [30.12, 31.12, 01.01, 04.01, 05.01]
export const daysInTwoMonths: CourierDeliveryInterval[] = [
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '29.01.2024 13:00',
    stop: '29.01.2024 17:00',
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '29.01.2024 18:00',
    stop: '29.01.2024 21:00',
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '02.02.2024 13:00',
    stop: '02.02.2024 17:00',
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '03.02.2024 13:00',
    stop: '03.02.2024 17:00',
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '06.02.2024 13:00',
    stop: '06.02.2024 17:00',
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '06.02.2024 18:00',
    stop: '06.02.2024 21:00',
  },
];

// моки для проверки дней в разных годах
// --> [29.12, 31.12, 01.01, 02.01, 04.01]
export const daysInTwoYears: CourierDeliveryInterval[] = [
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '28.12.2023 13:00',
    stop: '28.12.2023 17:00',
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '28.12.2023 18:00',
    stop: '28.12.2023 21:00',
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '30.12.2023 13:00',
    stop: '30.12.2023 17:00',
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '03.01.2024 13:00',
    stop: '03.01.2024 17:00',
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '05.01.2024 13:00',
    stop: '05.01.2024 17:00',
  },
  {
    delivery_type: 'own_delivery',
    price: 17900,
    price_interval: [],
    start: '05.01.2024 18:00',
    stop: '05.01.2024 21:00',
  },
];

export type TSkippedDay = {
  year: number;
  monthIndex: number;
  day: number;
};

function pushSkippedDayToTotal(
  total: TSkippedDay[],
  index: number,
  day: number,
  month: number,
  year: number,
): void {
  total.push({
    year,
    monthIndex: month - 1,
    day: day + index + 1,
  });
}

export function findSkippedDaysInIntervals(
  intervals: CourierDeliveryInterval[],
): TSkippedDay[] {
  // проверка что массив не пустой и не undefined
  if (!intervals.length || !intervals) return [];

  // пересобираем массив в вид ['28.12.2023', '30.12.2023', '03.01.2024', '05.01.2024']
  const intervalsToStartDays = intervals.map(interval => {
    return interval.start.slice(0, 10);
  });

  return intervalsToStartDays.reduce<TSkippedDay[]>(
    (total, item, index, array) => {
      // index day
      const splitedIndexItem = item.split('.');
      const day = +splitedIndexItem[0];
      const month = +splitedIndexItem[1];
      const year = +splitedIndexItem[2];

      // next day (index + 1)
      const splitedNextItem = array[index + 1]
        ? array[index + 1].split('.')
        : '';
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
    },
    [],
  );
}
```

<br />
<hr />

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

<br />
<hr />

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
  hubTimezone: number,
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
    startIntervalMinutes,
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
    endIntervalMinutes,
  );

  if (endIntervalToCurrentLocalTime < startIntervalToCurrentLocalTime) {
    endIntervalToCurrentLocalTime.setDate(
      endIntervalToCurrentLocalTime.getDate() + 1,
    );
  }

  // current date
  const LOCAL_DATE = new Date();

  const startIntervalDiff = Math.round(
    (startIntervalToCurrentLocalTime.getTime() - LOCAL_DATE.getTime()) / 60000,
  );

  const endIntervalDiff = Math.round(
    (endIntervalToCurrentLocalTime.getTime() - LOCAL_DATE.getTime()) / 60000,
  );

  return { startIntervalDiff, endIntervalDiff };
};
```

## Пример шаблонизации результатов поиска, нативная обработка формы

```html
<section class="search">
  <form class="search__form">
    <input
      type="text"
      name="title"
      class="search__textfield"
      placeholder="Искать в GitHub"
      id="search"
    />
    <button type="submit" class="search__button">Найти</button>
  </form>
  <div class="search__result">
    <h2 class="search__findings"></h2>
    <ul class="search__findings-list"></ul>
  </div>
  <div class="search__error"></div>
</section>
```

<br />
<hr />

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
        'ru-RU',
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

form.addEventListener('submit', function (event) {
  event.preventDefault();
  onSubmit(event);
});

async function onSubmit(event) {
  // ваш код
  event.preventDefault();
  onSubmitStart();

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
    });
}
```

Напишите функцию, которая умеет превращать строки вроде "a.b.c" в объекты. Результатом для строки-примера будет `"a": {"b": {"c": {}}}`.

```ts
const namespace = (str: string): object =>
  str.split('.').reduceRight((acc, key) => ({ [key]: acc }), {});

namespace('a.b.c.d.e'); // "{"a":{"b":{"c":{"d":{"e":{}}}}}}"
```

<br />
<hr />

Реактивность. Вторая задача будет о реактивности. Если вы раньше сталкивались, например, с фреймворком Vue, то, скорее всего, знаете что это. Суть реактивности в том, что при изменении данных или состояния интерфейс автоматически ререндерится. В нативном JS нет встроенной реактивности, но её можно реализовать. Именно этим вы и займётесь на практике.

```ts
input.addEventListener('keyup', (event: KeyboardEvent) => {
  text.innerText = event.target.value;
  console.log(event.target.value);
});
```

```ts
type Nullable<T> = T | null;

const text: Nullable<HTMLDivElement> = document.getElementById(
  'text',
) as HTMLDivElement;
const input: Nullable<HTMLInputElement> = document.getElementById(
  'input',
) as HTMLInputElement;

if (!text || !input) {
  throw new Error('нет полей');
}

const data = {
  title: '',
};

Object.defineProperty(data, 'title', {});

input.addEventListener('keyup', (event: KeyboardEvent) => {
  text.innerText = event.target.value;
  console.log(event.target.value);
});

export default Nullable;
```

```ts
type Nullable<T> = T | null;

const text: Nullable<HTMLDivElement> = document.getElementById(
  'text',
) as HTMLDivElement;
const input: Nullable<HTMLInputElement> = document.getElementById(
  'input',
) as HTMLInputElement;

if (!text || !input) {
  throw new Error('нет полей');
}

const data = {
  title: '',
};

Object.defineProperty(data, 'title', {
  set: (value: string) => {
    text.textContent = value;
  },
});

input.addEventListener('keyup', event => {
  data.title = event.target.value;
});

export default Nullable;
```

<br />
<hr />

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
      currentOrder.deliveryType === OrderDeliveryTypeEnum.PARTNER_PICKUP ||
      currentOrder.deliveryType === OrderDeliveryTypeEnum.PARTNER_RETURN
    ) {
      uniqueAttr = currentOrder.pickUpPointErpId
        ? `${currentOrder.pickUpPointErpId}-partner`
        : `${currentOrder.longitude},${currentOrder.latitude}`;
    } else if (
      currentOrder.deliveryType === OrderDeliveryTypeEnum.OWN_DELIVERY ||
      currentOrder.deliveryType === OrderDeliveryTypeEnum.CUSTOMER_RETURN
    ) {
      uniqueAttr =
        currentOrder.client ||
        `${currentOrder.longitude},${currentOrder.latitude}`;
    } else if (currentOrder.deliveryType === OrderDeliveryTypeEnum.OWN_PICKUP) {
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
          compareOrder.deliveryType === OrderDeliveryTypeEnum.PARTNER_PICKUP ||
          compareOrder.deliveryType === OrderDeliveryTypeEnum.PARTNER_RETURN
        ) {
          uniqueAttr2 = compareOrder.pickUpPointErpId
            ? `${compareOrder.pickUpPointErpId}-partner`
            : `${compareOrder.longitude},${compareOrder.latitude}`;
        } else if (
          compareOrder.deliveryType === OrderDeliveryTypeEnum.OWN_DELIVERY ||
          compareOrder.deliveryType === OrderDeliveryTypeEnum.CUSTOMER_RETURN
        ) {
          uniqueAttr2 =
            compareOrder.client ||
            `${compareOrder.longitude},${compareOrder.latitude}`;
        } else if (
          compareOrder.deliveryType === OrderDeliveryTypeEnum.OWN_PICKUP
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

<br />
<hr />

## Возврат цвета

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

<br />
<hr />

## Поиск совпадения по простым элементам (есть ли этот простой элемент в массиве)

Если ли параметр `param` в списке параметров `paramsList`? Работает только если массив из примитивных данных

```ts
const paramList = ['param1', 'param3', 'param3', 'param4', 'param5'];

const param = 'param1';

const isParamListIncludesParam = paramList.includes(param);

// возвращает boolean
console.log(isParamListIncludesParam); // true
```

`includes()` не будет работать с объектами.

```ts
const paramList = [
  { id: 1, param: 'param1' },
  { id: 2, param: 'param2' },
  { id: 3, param: 'param3' },
  { id: 4, param: 'param4' },
];

const param = { id: 1, param: 'param1' };

const isParamListIncludesParam = paramList.includes(param);

console.log(isParamListIncludesParam); // false - не работает
```

<br />
<hr />

## Поиск совпадения по объектам (есть ли этот объект в массиве)

Нужно сравнивать не объекты, а поля объектов на совпадения, например `id`.

```ts
const paramList = [
  { id: 1, param: 'param1' },
  { id: 2, param: 'param2' },
  { id: 3, param: 'param3' },
  { id: 4, param: 'param4' },
];

const someParam = { id: 1, param: 'param1' };

// сравнение по id
const isParamListIncludesParam = paramList.some(
  param => param.id === someParam.id,
); // true
```

<br />
<hr />

## Поиск элемента / индекса элемента по совпадению

```ts
const paramList = [
  { id: 1, param: 'param1' },
  { id: 2, param: 'param2' },
  { id: 3, param: 'param3' },
  { id: 4, param: 'param4' },
];

const someParam = { id: 1, param: 'param1' };

// вернет первый совпавший объект из списка объект
const findedObj = paramList.find(param => param.id === someParam.id); // {id: 1, param: 'param1'}

const findedIndex = paramList.findIndex(param => param.id === someParam.id); // 0
```

<br />
<hr />

## Фильтрация массива

```ts
const paramList = [
  { id: 1, param: 'param1' },
  { id: 2, param: 'param2' },
  { id: 3, param: 'param3' },
  { id: 4, param: 'param4' },
];

const someParam = { id: 1, param: 'param1' };

// вернет массив объектов, которые удовлетворяют условию
const isFillteredArray = paramList.find(param => param.id === someParam.id); // [ {id: 1, param: 'param1'} ]

// условие может быть комбинированным (вернется массив объектов) [{ id: 1, ..}, { id: 3, ...}]
const isParamListIncludesParam = paramList.filter(param => {
  return param.id === someParam.id || param.id === 3;
});
```

<br />
<hr />

## Поиск совпадения между массивами

Ecnm два массива, нужно проверить, находятся ли элементы одного массива в другом. Метод `.includes()` не работает с объектами.

```ts
// first array
const a = [
  { id: 1, name: 'Name 1' },
  { id: 2, name: 'Name 2' },
  { id: 3, name: 'Name 3' },
  { id: 4, name: 'Name 4' },
  { id: 5, name: 'Name 5' },
];

// second array
const b = [
  { id: 1, name: 'Name 1' },
  { id: 10, name: 'Name 10' },
];

// пробегаемся по массиву b
const check = b.map(i => {
  // и на каждую итерацию будем пробегаться по всем элементам массива a
  // и искать совпадения по id
  const isChecked = a.some(j => j.id === i.id);

  // вернется boolean массив
  return isChecked; // [true, false]
});
```

## Объект вместо вызова функции

Если нужно подставлять какие-либо данные в зависимости от значения прорса.

### 1 вариант - использовать вызов функции

```tsx
type TDirection = 'left' | 'up' | 'right' | 'down';
type TProps = {
  direction?: TDirection;
};

const Arrow = ({ direction = 'down' }: TProps) => {
  const returnDirection = (directionName: TDirection) => {
    switch (directionName) {
      case 'left':
        return 90;
      case 'up':
        return 180;
      case 'right':
        return 270;
      case 'down':
        return 0;

      default:
        return 0;
    }
  };

  return (
    <svg
      style={{ transform: `rotate(${returnDirection(direction)}deg)` }}
      width='14'
      height='8'
      viewBox='0 0 14 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1 1L7 7L13 1'
        stroke='#000'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Arrow;
```

### 2 вариант - использовать объект (так проще)

```tsx
type TDirection = 'left' | 'up' | 'right' | 'down';
type TProps = {
  direction?: TDirection;
};

const Arrow = ({ direction = 'down' }: TProps) => {
  const directions: Record<TDirection, number> = {
    left: 90,
    up: 180,
    right: 270,
    down: 0,
  };

  const selectedDirection = directions[direction];

  return (
    <svg
      style={{ transform: `rotate(${selectedDirection}deg)` }}
      width='14'
      height='8'
      viewBox='0 0 14 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1 1L7 7L13 1'
        stroke='#000'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Arrow;
```

<br />
<hr />

## Фильтрация c filter()

C forEach так не получится!!!

```ts
const a = [
  [
    { order11: 'order11', status: 'Delivered' },
    { order12: 'order12', status: 'Delivered' },
    { order13: 'order13', status: 'Not-delivered' },
    { order14: 'order14', status: 'Not-delivered' },
  ],
  [
    { order21: 'order21', status: 'Delivered' },
    { order22: 'order22', status: 'Delivered' },
    { order23: 'order23', status: 'Not-delivered' },
  ],
];

// a --> b
const b = a.map(pointsArray => {
  return pointsArray.filter(order => order.status === 'Delivered');
});

// result
const b = [
  [
    { order11: 'order11', status: 'Delivered' },
    { order12: 'order12', status: 'Delivered' },
  ],
  [
    { order21: 'order21', status: 'Delivered' },
    { order22: 'order22', status: 'Delivered' },
  ],
];
```

<br />
<hr />

## Сравнение массивов

```js
// слоты (session.slots): [ ['cardId'], ['cardId'], ..., ['cardId', 'cardId'] ]
// список карт (session.cards): [{ card1 }, { card2 }, ..., { cardN }]
// слоты с картами (slotsWithCards) [ [{ card1 }], [{ card2 }], ..., [{ cardN }, { cardM }] ]

const slots = [['cardId1'], ['cardId2'], ['cardId3', 'cardId4', 'cardId5']];

const cards = [
  { cardId: 'cardId1' },
  { cardId: 'cardId2' },
  { cardId: 'cardId3' },
  { cardId: 'cardId4' },
  { cardId: 'cardId5' },
  { cardId: 'cardId6' },
];

<slot1>
  <card1 />
</slot1>

<slot2>
  <card2 />
</slot2>

<slot3>
  <card3 />
  <card4 />
  <card5 />
</slot3>

const a = slots.map((slot, index) => {
  return cards.filter((card) => slot.includes(card.cardId));
});

console.log('a', a);
```

<br />
<hr />

## Сравнение массивов 2

```js
// Задача: есть массивы а и b с цифрами
// Если в массиве a уже есть элемент из массива b, то нужно удалить, если нет - то добавить, остальные элементы пропустить

// [1, 2, 3, 4, 5, 6, 7] и [1, 2, 8] --> [3, 4, 5, 6, 7, 8]

const a = [1, 2, 3, 4, 5, 6, 7];
const b = [1, 2, 8];

b.map((el, index) => {
  const isExist = a.some(a => a === el);

  console.log(index, isExist);

  if (isExist) {
    a.shift(el); // удаляет элемент из исходного массива
  } else {
    a.push(el); // добавляет элемент
  }
});

console.log('a', a);
```

<br />
<hr />

## Сравнение массивов 3

```js
// Задача: есть массивы а и b с цифрами
// Если в массиве a уже есть элемент из массива b, то нужно удалить, если нет - то добавить, остальные элементы пропустить

// [1, 2, 3, 4, 5, 6, 7] и [1, 2, 8] --> [3, 4, 5, 6, 7, 8]

const a = [1, 2, 3, 4, 5, 6, 7];
const b = [1, 2, 8];

b.map((el, index) => {
  const isExist = a.some(a => a === el);

  // если элемент массива b существует в массиве a
  if (isExist) {
    const index = a.indexOf(el); // находим индекс этого элемента
    a.splice(index, 1); // удаляем его из массива
  } else {
    a.push(el); // если нет, то добавляем
  }
});

console.log('a', a); // [3, 4, 5, 6, 7, 8]
```

<br />
<hr />

## Насыщение масива объектами

```tsx
// слоты (session.slots): [ ['cardId'], ['cardId'], ..., ['cardId', 'cardId'] ]
// список карт (session.cards): [{ card1 }, { card2 }, ..., { cardN }]
// слоты с картами (slotsWithCards) [ [{ card1 }], [{ card2 }], ..., [{ cardN }, { cardM }] ]
const slotsWithCards: TableCard[][] = session.slots.map(slot => {
  return session.cards.filter(card => slot.includes(card.cardId));
});
```

<br />
<hr />
