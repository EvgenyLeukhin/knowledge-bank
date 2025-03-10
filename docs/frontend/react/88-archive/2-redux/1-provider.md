---
title: Store и provider
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

---

## Пример store

```ts
import { bindActionCreators, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { counterSlice } from './counter/counter.slice';
import { usersSlice } from './users/users.slice';
import { usersThunks } from './users/users.thunks';

// storeToolkit2
export const storeToolkit2 = configureStore({
  reducer: {
    counterStore: counterSlice.reducer,
    usersStore: usersSlice.reducer,
  },
});

// типизация всего стейта
type RootState = ReturnType<typeof storeToolkit2.getState>;
export default RootState;

// хук со всем стейтом
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// хук со всеми экшенами
const allActions = {
  ...counterSlice.actions,
  ...usersSlice.actions,
  ...usersThunks,
};

export const useSyncActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};
```

### Counter slice

```ts
export type TCounterState = {
  counter: number;
};


import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCounterState } from './counter.types';

const initialCounterState: TCounterState = {
  counter: 0,
};

// createSlice (гораздо удобнее чем createReducer())
export const counterSlice = createSlice({
  name: 'counter',

  // initial state
  initialState: initialCounterState,

  // reducer with actions
  reducers: {
    // changeCounters (with return writing)
    change: (state, { payload }: PayloadAction<number>) => {
      return {
        // ...state,
        counter: payload, // будет всегда равен payload (без суммирования)
      };
    },

    // можно мутировать стейт (изменять текущие поля)
    // dicrementCounter
    dicrementCounter(state) {
      state.counter -= 1;
    },

    // incrementCounter
    incrementCounter(state) {
      state.counter += 1;
    },

    // changeCounter
    changeCounter(state, action: PayloadAction<number>) {
      state.counter += action.payload;
    },

    // clear
    clearCounter: () => initialCounterState,
    // такая запись экшенов гораздо удобнее чем createAction()
  },
});
```

### Users slice

```ts
export type TUser = {
  id: number;
  name: string;
  email: string;
};

export type TUsersState = {
  users: TUser[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage: string;
};


import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser, TUsersState } from './users.types';

const usersInitialState: TUsersState = {
  users: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
};

// creater slice
export const usersSlice = createSlice({
  name: 'users',

  // initial state
  initialState: usersInitialState,

  // reducer with actions
  reducers: {
    resetUsersState(state) {
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = '';
    },

    // usersLoading
    usersLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },

    // usersLoading - 2 variant
    usersLoading2: (state, { payload }: PayloadAction<boolean>) => {
      return {
        // возвращаем стейт
        ...state,

        // модифцируем поле стейта
        isLoading: payload,
      };
    },

    // usersFetchingSuccess
    usersSuccess(state, { payload }: PayloadAction<TUser[]>) {
      state.isSuccess = true;
      state.users = payload;
    },

    // usersFetchingError
    usersError(state, { payload }: PayloadAction<string>) {
      state.isError = true;
      state.errorMessage = payload;
    },

    // clearUsers
    clearUsers(state) {
      state.users = [];
    },

    // addRandomUser
    addRandomUser(state) {
      state.users.push({
        id: Math.round(Math.random() * 10000),
        name: 'asdfasdf',
        email: 'asdfasdf@mail.ru',
      });
    },

    // addRandomUser2 - 2 variant
    // (при такой записи нужно всегда возвращать стейт ...state);
    addRandomUser2: state => {
      const randomId = Math.round(Math.random() * 10000);
      const userObj = {
        id: randomId,
        name: `username-${randomId}`,
        email: `username${randomId}@mail.com`,
      };

      return {
        ...state, // возвращаем стейт
        users: [...state.users, userObj], // модифцируем поле стейта
      };
    },

    // deleteUser
    deleteUser(state, { payload }: PayloadAction<number>) {
      state.users = state.users.filter(user => user.id !== payload);
    },

    // deleteUser2 - 2 variant
    deleteUser2: (state, action) => {
      return {
        // возвращаем стейт
        ...state,

        // модифцируем поле стейта
        users: state.users.filter(user => user.id !== action.payload),
      };
    },

    // deleteLastUser
    deleteLastUser(state) {
      state.users.pop();
    },
  },
});

```

### Users thunks

```ts
import axios from 'axios';
import { TUser } from './users.types';
import { Dispatch } from '@reduxjs/toolkit';
import { usersSlice } from './users.slice';

const { usersLoading, usersSuccess, usersError, resetUsersState } =
  usersSlice.actions;

const fetchUsersThunk = () => async (dispatch: Dispatch) => {
  dispatch(resetUsersState());
  dispatch(usersLoading(true));

  try {
    // response typing
    const response = await axios.get<TUser[]>(
      'https://jsonplaceholder.typicode.com/users2',
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

export const usersThunks = {
  fetchUsersThunk,
};

```

### Use inside component

```tsx
import { useSyncActions, useAppSelector } from '@/store/redux-toolkit2';
import { Loader } from '@/components/ui';
import styles from './ReduxToolkit2.module.scss';

const ReduxToolkit2 = () => {
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

  return (
    <section className={styles.ReduxToolkit2}>
      <h2>
        <mark>ReduxToolkit 2</mark>
      </h2>
      {/* count */}
      <div>
        <b>count</b>: {counter}

        <button onClick={() => changeCounter(-100)}>-100</button>
        <button onClick={() => changeCounter(-10)}>-10</button>
        <button onClick={() => dicrementCounter()}>-1</button>
        <button onClick={() => clearCounter()}>X</button>
        <button onClick={() => incrementCounter()}>+1</button>
        <button onClick={() => changeCounter(10)}>+10</button>
        <button onClick={() => changeCounter(100)}>+100</button>
      </div>
      &nbsp;&nbsp;&nbsp;
      {/* users */}
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <b>users</b>:
        <ul style={{ margin: 0, paddingLeft: 8, listStyle: 'none' }}>
          {/* loading */}
          {isLoading && <Loader />}

          {/* error */}
          {isError && <span className='text-danger'>{`${errorMessage}`}</span>}

          {/* users */}
          {users.length
            ? users.map(user => {
                const { id, name, email } = user;

                return (
                  <li key={id}>
                    <b>{`${id}`}</b>

                    <span>{name}</span>
                    &nbsp;(<a href={`mailto:${email}`}>{email}</a>) &nbsp;
                    <b
                      style={{ cursor: 'pointer' }}
                      onClick={() => deleteUser(id)}
                    >
                      X
                    </b>
                  </li>
                );
              })
            : 'No data'}
        </ul>

        {/* buttons */}
        {/* thunks нужно продиспачивать */}
        <button onClick={() => fetchUsersThunk()}>
          Fetch users
        </button>
        <button onClick={() => addRandomUser2()}>Add random user</button>
        <button onClick={() => clearUsers()}>Clear users</button>
        <button onClick={() => deleteLastUser()}>Delete last</button>
        <button onClick={() => clearUsers()}>Clear users</button>
      </div>
    </section>
  );
};

export default ReduxToolkit2;

```
