---
title: Provider и store ✓
sidebar_position: 1
---

## Provider

Нужно обернуть все приложение в Provider, чтобы redux имел доступ ко всему приложению.

```tsx
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './store';

const rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,

  rootElement
);
```

---

## Store

Точка входа всех редьюсеров.

```tsx
import { configureStore, bindActionCreators } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { api } from './api/api';

// в главыный reducer стора вкладываются все reducer-ы слайсов приложения
export const store = configureStore({
  // root reducer
  reducer: {
    slice1: slice1.reducer,
    slice2: slice2.reducer,
    ...,
    sliceN: sliceN.reducer,

    // create api slice
    [api.reducerPath]: api.reducer,
  },
});

// типизация всего стейта
export type RootState = ReturnType<typeof storeToolkit2.getState>;

// хук, которвый возвращает весь store (можно использовать внутри компонентов)
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// хук, которвый хранит все синхронные экшены (можно использовать внутри компонентов)
export const useSyncActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators({
    // импорт всех экшенов и редьюсеров
    ...slice1.actions,
    ...slice2.actions,
    ...,
    ...sliceN.actions,
    }, dispatch);
};

// доп. типизация 
// export type AppStore = ReturnType<typeof store> as any;
// export type AppDispatch = AppStore['dispatch'];
```

Использование в компоненте

```tsx
import { useSyncActions, useAppSelector } from '@/store';

...
  // get state from store by useAppSelector
  const {
    counterStore: { counter },
    usersStore: { users, isLoading, isError, errorMessage },
  } = useAppSelector(state => state);

  // get actions
  const {
    changeCounter,
    clearCounter,
    dicrementCounter,
    incrementCounter,
    addRandomUser2,
    clearUsers,
    deleteUser,
    deleteLastUser,
    fetchUsersThunk,
  } = useSyncActions();

```
