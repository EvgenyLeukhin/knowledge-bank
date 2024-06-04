---
title: Thunks
sidebar_position: 3
---

## Асинхронный экшен

Thunk. Effect. В них можно обрабатывать ответы с сервера и обогащать данные дополнительными полями.

dispatch indise component --> thunk --> get API data --> modified data --> save data to store

```tsx
import axios from 'axios';
import { TUser } from './users.types';
import { Dispatch } from '@reduxjs/toolkit';
import { usersSlice } from './users.slice';

const { usersLoading, usersSuccess, usersError, resetUsersState } =
  usersSlice.actions;

export const fetchUsersThunk = (limit: number) => async (dispatch: Dispatch) => {
  dispatch(resetUsersState());
  dispatch(usersLoading(true));

  try {
    // response typing
    const response = await axios.get<TUser[]>(
      `https://jsonplaceholder.typicode.com/users?limit=${limit}`,
    );

    // if success
    setTimeout(() => {
      dispatch(usersLoading(false));
      dispatch(usersSuccess(response.data));
    }, 1000);

    // if error
  } catch (e) {
    dispatch(usersLoading(false));
    dispatch(usersError(`${e}`));
  }
};

// или экспортом в объекте
export const usersThunks = {
  fetchUsersThunk,
};
```

---

## Использование в компоненте

```tsx
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersThunk } from '@store/users';

const SomeComp = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: AppState) => state.users);

  useEffect(() => {
    dispatch(fetchUsersThunk(10));
  }, []);

  const { isFetching, error, userList } = users;

  // render users
  ...
};

export default SomeComp;
```

---

## Пример thunk

```ts
import { Dispatch } from 'redux';
import { store } from '../store/store';
import routesService from '../api/services/routes-service';
import { setLoadingAction } from '../slices/orders';

export const attachReturnsToPickups = (routeIds: number[]) => {
    return async function (dispatch: Dispatch<any>) {
        dispatch(setLoadingAction(true));

        const data = await routesService.attachReturnsToPickups(routeIds);
        if (data) {
            // доступ к стору
            const filters = store.getState().orders.filters;
            store.dispatch(getAllRoutes());
            store.dispatch(getAllOrders());
            dispatch(messageAction(messageHandler('Партнёрские возвраты успешно обработаны', MessageType.SUCCESS)));
        } else {
            dispatch(setLoadingAction(false));
            dispatch(messageAction(messageHandler('Не удалось обработать партнёрские возвраты')));
        }
    };
};
```

---

## Примеры синхронных экшенов

```ts
// обновление данных в массиве
setDrugstoreTypeFilter(state, { payload }: PayloadAction<DrugstoreType>) {
  const { drugstoreType } = state.filter;

  const isInclude = drugstoreType.includes(payload);

  if (isInclude) {
    state.filter.drugstoreType = drugstoreType.filter(
      type => type !== payload,
    );
  } else {
    state.filter.drugstoreType = [...drugstoreType, payload];
  }
},

// обновление данных в массиве, если payload тоже массив
setOwnDrugstoreTypeFilter(state, { payload }: PayloadAction<PickUpType[]>) {
  const { ownDrugstoreType } = state.filter;

  payload.map(type => {
    const isExist = ownDrugstoreType.some(
      currentType => currentType === type,
    );

    if (isExist) {
      // удалить фильтр
      const index = ownDrugstoreType.indexOf(type);
      ownDrugstoreType.splice(index, 1);
    } else {
      // добавить фильтр
      ownDrugstoreType.push(type);
    }
  });
},
```

---

## Утилиты

```ts
import { PayloadAction } from '@reduxjs/toolkit';
export type ObjectType = Record<string, unknown>;

// simpleMerge
export const simpleMerge = <State, Payload>(state: State, action: PayloadAction<Payload>): State => ({
  ...state,
  ...action.payload,
});

// simpleMergeThunk
export const simpleMergeThunk = <State, Payload>() => (state: State, action: PayloadAction<Payload>): State => ({
  ...state,
  ...action.payload,
});

// createPayload
export const createPayload = <Payload extends ObjectType>(payload: Payload) => ({
  payload: payload,
});

// createSimpleReducer
export const createSimpleReducer = <State, K extends keyof State>(key: K) => (
  state: State,
  action: PayloadAction<State[K]>
) => ({
  ...state,
  [key]: action.payload,
});

// createSimpleDraftReducer
export const createSimpleDraftReducer = <State, K extends keyof State>(key: K) => (
  state: State,
  action: PayloadAction<State[K]>
) => {
  state[key] = action.payload;
};

// createMergeReducer
export const createMergeReducer = <State>() => simpleMergeThunk<State, Partial<State>>();

// createMergeDraftReducer
export const createMergeDraftReducer = <State, K extends keyof State>(key: K) => (
  state: State,
  action: PayloadAction<State[K]>
) => {
  state[key] = {
    ...state[key],
    ...action.payload,
  };
};
```

---

## Обработка ответа после dispatch

```tsx
  const syncGoTemplatesHandler = async () => {
    const result = (await dispatch(syncGoTemplates())) as unknown as boolean;

    if (result) {
      setSuccess('Успешно');
    } else {
      setSuccess('Произошла ошибка');
    }
  };
```

---

##  Обработка ответа после dispatch 2

```ts
// thunk, который возвращает данные
export const setSlaInterval = (slaId: number, intervalData: ISlaInterval) => {
  return async function (dispatch: Dispatch<any>): Promise<FormError[] | ISlaInterval | undefined> {
    dispatch(setLoadingAction(true));
    const response = !intervalData.id
      ? await slaService.createInterval(slaId, intervalData)
      : await slaService.editInterval(slaId, intervalData);
    if (response.success) {
      await dispatch(setLoadingAction(false));
      return response.data;
    } else {
      await dispatch(
        setMessageAction(messageHandler('Возникла ошибка при попытке сохранить интервал', MessageType.ERROR))
      );
      await dispatch(setLoadingAction(false));
      if (response.errors) {
        return response.errors;
      }
    }
  };
};

...

// экшен с обработкой ответа внутри компонента
  const saveInterval = async (
    slaInWork: ISla,
    intervalInWork: ISlaInterval,
    setSlaInWork: (data: ISla) => void,
    originalSla: ISla,
    setOriginalSla: (data: ISla) => void
  ) => {
    const responseInterval = (await dispatch(setSlaInterval(slaInWork.id, intervalInWork))) as unknown as
      | FormError[]
      | ISlaInterval
      | undefined;

    if (responseInterval) {
      const data = responseInterval as ISlaInterval;

      if (data.id) {
        const iId = intervalInWork.id;

        setSlaInWork({
          ...slaInWork,
          intervals: slaInWork.intervals.map((interval) => {
            return interval.uniqId !== intervalInWork.uniqId
              ? interval
              : {
                  ...data,
                  uniqId: intervalInWork.uniqId,
                };
          }),
        });

        setOriginalSla({
          ...originalSla,
          intervals: !iId
            ? [
                ...originalSla.intervals,
                {
                  ...data,
                  uniqId: intervalInWork.uniqId,
                },
              ]
            : [
                ...originalSla.intervals.map((interval) => {
                  return interval.uniqId !== intervalInWork.uniqId
                    ? interval
                    : {
                        ...data,
                        uniqId: intervalInWork.uniqId,
                      };
                }),
              ],
        });

        setErrors([]);
      }

      if (Array.isArray(responseInterval)) {
        setErrors(responseInterval);
      }
    }
  };
```
