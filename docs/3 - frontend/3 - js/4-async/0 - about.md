---
title: Ошибки
sidebar_position: 7
---

- Запросы
- Body
- Query-params
  - Pagination
  - Filter
  - Sort

- Авторизация

```js
filter[status];
sord[status] = 'ASC' | 'DESC';
```

```js
const params = new URLSearchParams();
params.set('sort[id]', 'DESC');
params.set('sort[date]', 'ASC');
const url = `/api/items?${params.toString()}`;

url;
```

## Запросы

Пример запроса внутри сервиса

Конфиг axios, который размножает параметры при .map()

```ts
paramsSerializer: {
  indexes: null,
},
```

```ts
const ordersService = {
  async getOredersReport(
    filters: TFilters,
    limit: number,
    offset: number,
  ): Promise<TOrderReport> {
    try {
      const { data, status } = await httpClient.request<TOrdersReportResponse>({
        url: `/v1/admin/partner-orders/report`,
        method: 'GET',
        params: {
          partner_uuid: filters.selectedPartner?.id,
          statuses: filters.selectedStatuses.map(item => item.id),
          createdDateFrom: filters.selectedDateFrom,
          createdDateTo: filters.selectedDateTo,
          offset,
          limit,
        },

        // statuses=CANCELLED&statuses=RESOLVED (без statuses[]=...)
        paramsSerializer: {
          indexes: null,
        },
      });

      return {
        success: status === 200,
        data,
        error: null,
      };
    } catch (error: any) {
      return {
        success: false,
        data: null,
        error,
      };
    }
  },
};
```

---

## Рекурсивные запросы

```ts
export const getBoardsRecursive = (
  offset: number = 0,
  limit: number = REQUEST_LIMIT,
) => {
  return async function (dispatch: Dispatch<any>) {
    dispatch(setLoading(true));

    const { success, data, error } = await boardsService.getBoardsChunk(
      limit,
      offset,
    );

    // success
    if (success && data) {
      if (!data.data.length) {
        dispatch(setLoading(false));
        return;
      } else {
        const boardShortData: TBoardShort[] = data.data.map(board => ({
          id: board.id,
          uuid: board.uuid,
          name: board.name,
          createdAt: board.createdAt || '—',
          createdBy: returnCreatedBy(board.createdBy),
        }));

        dispatch(setBoards(boardShortData));
        // рекурсивный запрос
        if (data.data.length < REQUEST_LIMIT) {
          dispatch(setLoading(false));
          dispatch(setLoadDate(new Date().toISOString()));
          return;
        } else {
          // рекурсивный запрос
          setTimeout(() => {
            dispatch(getBoardsRecursive(offset + REQUEST_LIMIT, limit));
          }, REQUEST_TIMEOUT);
        }
      }
    }

    // error
    if (error) {
      dispatch(setLoading(false));
      dispatch(setError(error));
    }
  };
};
```

## Цикличный запрос

```ts
const getTasksRecursive = async (): Promise<{
  data: TTask[];
  error: string;
  count: number;
}> => {
  let isContinue = true;
  let errorMessage = '';
  let _count = 0;
  const _data: TTask[] = [];
  let OFFSET = 0;

  while (isContinue) {
    const {
      success,
      data,
      count,
      error: requestError,
    } = await getTasksСhunk(LIMIT, OFFSET);

    if (requestError) {
      isContinue = false;
      errorMessage = requestError;
      break;
    }

    if (success && data && count && count > _data.length) {
      _data.push(...data);
      OFFSET += LIMIT;
      _count = count;
    } else {
      isContinue = false;
      break;
    }
  }

  return {
    data: _data,
    error: errorMessage,
    count: _count,
  };
};
```

---

## Интервальный запрос

```ts
export const getDictionariesInterval = () => {
  return async function (dispatch: Dispatch<any>) {
    // получаем токен из стейта
    const token = store.getState().app.authData?.token;

    // если токена нет, просто выходим - редирект на /login произойдет автоматически через React Router в routes.tsx
    if (!token) {
      return;
    }

    // если токен есть, то запускаем загрузку данных
    dispatch(resetAppData()); // reset data
    dispatch(setLoading(true));

    let counter = 0;

    const intervalId = setInterval(() => {
      dispatch(getDictionary(dictionariesList[counter]));

      // counter - увеличваем счетчик на 1
      counter++;

      if (counter === dictionariesList.length) {
        dispatch(setLoadDate(new Date().toISOString()));
        clearInterval(intervalId);
        dispatch(setLoading(false));

        // после загрузки всех справочников грузим данные приложения
        dispatch(getAppData());
      }
    }, REQUEST_TIMEOUT);
  };
};
```

## Рекурсивный запрос

```ts
export const getOrdersReportRecursive = (
  filters: TFilters,
  limit: number = 1,
  offset: number = 0,
  step: number = 0,
) => {
  return async (dispatch: AppDispatch) => {
    try {
      const { success, data, error } = await ordersService.getOredersReport(
        filters,
        limit,
        offset,
      );

      // обновляем loading state
      dispatch(
        setLoadingState({
          currentStep: step,
          positionsAlreadyLoaded:
            (store.getState().report.items?.length || 0) +
            (data?.items.length || 0),
          totalOrdersToLoad: data?.total || 0,
          progress: [
            ...(store.getState().report.loadingState.progress || []),
            {
              step,
              status: returnLoadingStatus(
                success,
                data?.items.length || 0,
                step,
              ),
              message: success ? 'success' : error?.message || 'error',
            },
          ],
        }),
      );

      // SUCCESS
      if (success) {
        // если данные есть
        if (data?.items.length) {
          // добавляем данные в state
          dispatch(
            setItems([
              ...(store.getState().report.items || []),
              ...(data?.items || []),
            ]),
          );

          // если пришедшие данные равны лимиту, то запрашиваем следующие данные
          if (data?.items.length === limit) {
            setTimeout(() => {
              dispatch(
                getOrdersReportRecursive(
                  filters,
                  limit,
                  offset + limit,
                  step + 1,
                ),
              );
            }, 1000);

            // если данные не равны лимиту, то завершаем запрос
          } else {
            dispatch(setLoading(false));
            return;
          }

          // если данных нет
        } else {
          step === 0 &&
            dispatch(
              setMessage({
                type: 'warning',
                text: 'По выбранным фильтрам данных нет',
              }),
            );
          dispatch(setLoading(false));
          return;
        }
      }

      // ERROR
      if (error) {
        dispatch(setError(error));
        dispatch(
          setMessage({
            type: 'error',
            text: `Ошибка загрузки данных отчета: ${error?.message}`,
          }),
        );
        dispatch(setLoading(false));
        return;
      }
    } catch (error: any) {
      dispatch(setError(error));
      dispatch(
        setMessage({
          type: 'error',
          text: `Ошибка загрузки данных отчета: ${error?.message}`,
        }),
      );
      dispatch(setLoading(false));
      return;
    }
  };
};
```
