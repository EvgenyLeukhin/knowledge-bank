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

---

## Persist

```ts
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

// reducers
import reducer1 from '@store/reducer1';
import reducer2 from '@store/reducer2';
...
import reducerN from '@store/reducerN';


const reducers = combineReducers({
  reducer1,
  reducer2,
  ...
  reducerN,
});

const persistConfig = {
  key: 'root',
  timeout: 2000,
  version: 1,

  // список редьюсеров, которые нужно сохранять
  whitelist: ['reducer1', 'reducer2'],
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});
```

---

## Persist Provider

```tsx
import React, { FC, ReactElement } from "react";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from '@store/index';
import { Provider } from 'react-redux';
import { Preloader } from "@npm-registry/eapteka-ui";

export const AppReduxProvider: FC<{
  children: ReactElement;
}> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Preloader position='center' size='l'/> }
        persistor={persistStore(store)}
      >
        {children}
      </PersistGate>
    </Provider>
  );
};
```
