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

```tsx
import { configureStore, bindActionCreators } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

// в главыный reducer стора вкладываются все reducer-ы слайсов приложения
export const store = configureStore({
  // root reducer
  reducer: {
    slice1: slice1.reducer,
    slice2: slice2.reducer,
    ...,
    sliceN: sliceN.reducer,
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
