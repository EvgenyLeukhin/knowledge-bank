---
title: Асинхронность
sidebar_position: 8
---

## setTimeout

Вызывает функцию один раз спустя временной промежуток. Поддерживаются в nodejs.

```js
setTimeout(() => {
  alert('Async output');
}, 1000);
```

```js
function returnAlert(x) {
  alert(x);
}

setTimeout(() => {
  returnAlert('Hello, World!');
}, 1000);
```

---

## setInterval

```js
let counter = 0;

const intervalId = setInterval(() => {
  counter++;
  console.log('Counter:', counter);

  if (counter === 10) {
    clearInterval(intervalId);
  }
}, 1000);
```

---

## Интервальные запросы

```ts
// 2 - точеный экшен для получения ворклога одного исполнителя
export const getWorklogSingle = (
  id: string,
  dateFrom: Dayjs | null,
  dateTo: Dayjs | null,
) => {
  return async function (dispatch: Dispatch<any>) {
    let tasksCodes: string[] = [];

    // fix date format to API request
    const _dateFrom = `${dayjs(dateFrom).format(FORMAT_TYPE)}T00:00:00`;
    const _dateTo = `${dayjs(dateTo).format(FORMAT_TYPE)}T23:59:59`;

    // find current perfomer data
    const selectedPerformer = store
      .getState()
      .performers.items.find(item => Number(item.trackerId) === Number(id));

    const { data, success, error } = await SearchService.searchWorklogs(
      id, // id исполнителя
      _dateFrom,
      _dateTo,
    );

    // success
    if (success && data) {
      // если данные пустые, то отменяем последующие действия
      if (!data.length) {
        dispatch(setLoading(false));
        dispatch(
          setErrors(
            `${selectedPerformer?.lastName} ${selectedPerformer?.firstName} - данных в указанный период не найдено`,
          ),
        );
        return;
      }

      const _data = data.reduce<Record<string, TWorklogTaskData[]>>(
        (total, item) => {
          // обрезаем строку даты до формата YYYY-MM-DD
          const logDay = item.start.slice(0, 10); // createdAt | start

          // создаем объект задач с нужными нам полями
          const logTask: TWorklogTaskData = {
            code: item.issue.key,
            name: item.issue.display,
            link: item.issue.self,
            comment: item.comment || null,
            createdAt: item.createdAt,
            duration: CalculateHoursFromTrackerTask(item.duration),
          };

          if (!tasksCodes.includes(logTask.code)) {
            tasksCodes.push(logTask.code);
          }

          // добавляем день как поле объекта со значениям массива залогированных задач
          total[logDay] = [...(total[logDay] || []), logTask];

          return total;
        },
        {},
      );

      // сохраняем видоизмененные данные ворклога
      dispatch(
        setWorklogs({
          performer:
            `${selectedPerformer?.lastName} ${selectedPerformer?.firstName}` ||
            id,
          data: _data,
        }),
      );

      // сохраняем коды полученных задач как ключи объекта с пустыми данными
      dispatch(setFoundTasks(tasksCodes));

      // error
    } else {
      const errorMessage = error?.message || 'Ошибка загрузки ворклогов';
      dispatch(setLoading(false));
      dispatch(setErrors(errorMessage));
    }
  };
};

// 1 - генерирует интервальные экшены для получения ворклога
export const getWorklogsMultiply = (
  selectedPerformers: TPerformetOption[],
  dateFrom: Dayjs | null,
  dateTo: Dayjs | null,
) => {
  return async function (dispatch: Dispatch<any>) {
    // pre-request reset state
    dispatch(resetData());
    dispatch(setLoading(true));

    if (!selectedPerformers.length) {
      dispatch(setLoading(false));
      dispatch(setErrors('Отсутсвуют выбранные исполнители'));
      return;
    }

    const firstPerformerId = `${selectedPerformers[0].key}`;

    // если выбран только один исполнитель - делаем только один запрос
    if (selectedPerformers.length === 1) {
      dispatch(getWorklogSingle(firstPerformerId, dateFrom, dateTo));

      // и спустя таймаут делаем запросы по типам задач
      setTimeout(() => {
        dispatch(searchTasksTypes()); // получение типов задач одним запросом
      }, REQUEST_INTERVAL + 100);

      // если выбрано несколько исполнителей
    } else {
      // то сразу делаем запрос для первого
      dispatch(getWorklogSingle(firstPerformerId, dateFrom, dateTo));

      // а для остальных запросов делаем через интервалы REQUEST_INTERVAL
      let counter = 1;
      const intervalId = setInterval(() => {
        dispatch(
          getWorklogSingle(
            `${selectedPerformers[counter].key}`, // counter - хранит индекс исполнителя
            dateFrom,
            dateTo,
          ),
        );

        // counter - увеличваем счетчик на 1
        counter++;

        if (counter === selectedPerformers.length) {
          // очищаем интервал
          clearInterval(intervalId);

          // и спустя таймаут делаем запросы по типам задач
          setTimeout(() => {
            dispatch(searchTasksTypes()); // получение типов задач одним запросом
          }, REQUEST_INTERVAL + 100);
        }
      }, REQUEST_INTERVAL);
    }
  };
};
```

---

## Рекурсивные запросы

```ts
// НОВАЯ РУЧКА (`v2/auto-routing/couriers${params}`) - с расписанием и пагинацией
// пагинация используются для рекурсивных запросов, так как по одному запросу долго грузятся (как в примере выше)
export const getAutoRoutingCouriersRecursive = (
  limit: number = 10,
  offset: number = 0,
) => {
  return async function (dispatch: Dispatch<any>) {
    dispatch(setCouriersLoading(true));

    // filters
    const filters = store.getState().orders.filters;

    // query
    const dataParams = generateQueryString({
      hubId: filters.hubIds[0],
      offset,
      limit,
      deliveryDate: filters.deliveryDate,
    });

    // запрос курьеров c расписанием
    const data = await autoRouteService.getCouriersWithPagination(dataParams);

    if (data) {
      // get fields from data
      const { items, lastPage, nextOffset } = data;

      // success
      if (items) {
        dispatch(setCouriersLoading(false));
        const routes = [
          ...store.getState().routes.routes,
          ...store.getState().routes.exportedRoutes,
        ];

        // сохраняем курьеров [...state.couriers, ...payload];
        dispatch(getCouriersByRecursive(fillWithStops(items, routes)));

        // если не последняя страница, поврторяем запросы - вызываем этот же экшен рекурсивно
        if (!lastPage) {
          dispatch(getAutoRoutingCouriersRecursive(limit, nextOffset));

          // если получили поле lastPage = true, то останавливаем рекусию
        } else {
          dispatch(setCouriersLoading(false));
          return;
        }

        // error
      } else {
        dispatch(setCouriersLoading(false));
        setMessageAction(messageHandler('Ошибка при загрузке курьеров'));
      }
    }
  };
};
```
