---
title: State-management
sidebar_position: 8
---

# Redux

Redux лучше понять на примере с банком. 

- **Банк** (store/state) - хранилище данных (состояние приложение, которое можно изменять экшенами)
- **Главный рьдьюсер** (root reducer) - Всё банковское ПО (точка входа всех отдельных рьдьюсеров). Всегда возвращает store
- **Рьдьюсеры** (reducer) - Набор связянных по смыслу экшенов
- **Actions** (actions) - Функции банковского ПО, которые могут менять state 
- **Диспетчер** (dispatch) - оператор Банковского ПО

<img src="../../../../img/frontend/redux.png" width="400" alt="redux.png" />
<img src="../../../../img/frontend/redux2.png" width="400" alt="redux2.png" />

В redux store иммутабильный (неизменяемый), при каких-либо изменениях в сторе будет возвращаться новый стор, старый будет удален.

Редукторы основаны на switch-case логике, где проверяется action type. По дефолту каждый редьюсер возвращает неизмененный state.

***

## Redux toolkit

### RTK reducers actions

```ts
reducers: {
  // short
  setSidebarModals(state, { payload }: PayloadAction<TModalType>) {
    state.sidebarModals = payload;
  },

  // full
  setInitialRoomState: (state, action: PayloadAction) => {
    return {
      ...state,
      ...initialState,
    };
  },
}
```
### Install redux-toolkit

`yarn add @reduxjs/toolkit react-redux`

Отличия от классического redux:

- Не нужны acttion types
- Не нужны acttion creators для синхронных (нужны только для асинхронных экшенов)
- Не нужен ```redux-thunk``` и middleware (уже идет "из коробки")
- Не нужен ```redux-devtools``` (уже идет "из коробки")
- Может менять (мутировать) стейт, в отличие от классического, где всегда возвращается новый стейт

<img src="../../../../img/frontend/redux-actions.png" width="400" alt="redux-actions.png" />

---

### Store

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

---

### Counter store

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

---

### Users store

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

#### Users thunks

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

***

## Redux classic

`yarn add redux react-redux redux-thunk @types/react-redux redux-devtools-extension`

### store/index.ts

```ts
import { applyMiddleware, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import { RootState, rootReducer } from './rootReducer';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export const testStore = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

// экспорт хука, типизированного селектора всего стейта приложения
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
```

### store/rootReducer.ts

```ts
import { combineReducers } from 'redux';

// reducers list
import { appReducer } from './app/app.reducer';
import { loginReducer } from './login/login.reducer';

export const rootReducer = combineReducers({
  app: appReducer,
  login: loginReducer,
});

// импорт типизации всего state
export type RootState = ReturnType<typeof rootReducer>;
```

### store/actions.ts

```ts
import { useDispatch } from 'react-redux';
import * as appActionCreators from './app/app.actionCreators';
import * as loginActionCreators from './login/login.actionCreators';
import { bindActionCreators } from 'redux';
// import * as loginActionCreators from './login/login.actionCreators';

// экспорт хука, в котором находятся все экшены приложения
export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      ...appActionCreators,
      ...loginActionCreators,
    },
    dispatch,
  );
};

```

### store/app/app.reducer.ts

```ts
import {
  TAppState,
  TAppActions,
  AppActionTypes,
  AppScreens,
} from './app.types';

const appInitialState: TAppState = {
  screen: AppScreens.LOGIN,
  alertMessage: {
    message: '',
    status: undefined,
  },
  userData: {
    token: undefined,
    expiresIn: undefined,
  },
};

export const appReducer = (
  state: TAppState = appInitialState,
  action: TAppActions,
): TAppState => {
  switch (action.type) {
    // SET_SCREEN
    case AppActionTypes.SET_SCREEN:
      return { ...state, screen: action.payload };

    // SAVE_USER_DATA
    case AppActionTypes.SAVE_USER_DATA:
      return { ...state, userData: action.payload };

    // SET_ALERT_MESSAGE
    case AppActionTypes.SET_ALERT_MESSAGE:
      return { ...state, alertMessage: action.payload };

    // DELETE_ALERT_MESSAGE
    case AppActionTypes.DELETE_ALERT_MESSAGE:
      return {
        ...state,
        alertMessage: {
          message: '',
          status: undefined,
        },
      };

    // DEFAULT
    default:
      return state;
  }
};
```

### store/app/app.types.ts

```ts
import { Statuses } from '@/types/common';

// screens enum
export enum AppScreens {
  LOGIN = 'LOGIN',
  DASHBOARD = 'DASHBOARD',
  EDIT_DRUGSTORE = 'EDIT_DRUGSTORE',
  EDIT_MULTI_DRUGSTORE = 'EDIT_MULTI_DRUGSTORE',
  CUSTOM_STATUSES = 'CUSTOM_STATUSES',
}

// action types enum
export enum AppActionTypes {
  SET_SCREEN = 'SET_SCREEN',
  SAVE_USER_DATA = 'SAVE_USER_DATA',
  SET_ALERT_MESSAGE = 'SET_ALERT_MESSAGE',
  DELETE_ALERT_MESSAGE = 'DELETE_ALERT_MESSAGE',
}

export type TUserData = {
  token?: string;
  expiresIn?: number;
};

export type TAlertMessage = {
  message: string;
  status?: Statuses;
};

// типизация стейта
export type TAppState = {
  screen: AppScreens;
  alertMessage: TAlertMessage;
  userData: TUserData;
};

// типизация экшенов
export type TSetScreenAction = {
  type: AppActionTypes.SET_SCREEN;
  payload: AppScreens;
};

export type TSaveUserDataAction = {
  type: AppActionTypes.SAVE_USER_DATA;
  payload: TUserData;
};

export type TSetAlertMessageAction = {
  type: AppActionTypes.SET_ALERT_MESSAGE;
  payload: TAlertMessage;
};

export type TDeleteAlertMessageAction = {
  type: AppActionTypes.DELETE_ALERT_MESSAGE;
};

// экспорт всех типов экшенов
export type TAppActions =
  | TSetScreenAction
  | TSaveUserDataAction
  | TSetAlertMessageAction
  | TDeleteAlertMessageAction;
```

### store/app/app.actionCreators.ts

```ts
import {
  AppActionTypes,
  AppScreens,
  TAlertMessage,
  TDeleteAlertMessageAction,
  TSaveUserDataAction,
  TSetAlertMessageAction,
  TSetScreenAction,
  TUserData,
} from './app.types';

// setScreen
export const setScreen = (payload: AppScreens): TSetScreenAction => ({
  type: AppActionTypes.SET_SCREEN,
  payload,
});

// saveUserData
export const saveUserData = (payload: TUserData): TSaveUserDataAction => ({
  type: AppActionTypes.SAVE_USER_DATA,
  payload,
});

// setAlertMessage
export const setAlertMessage = (
  payload: TAlertMessage,
): TSetAlertMessageAction => ({
  type: AppActionTypes.SET_ALERT_MESSAGE,
  payload,
});

// deleteAlertMessage
export const deleteAlertMessage = (): TDeleteAlertMessageAction => ({
  type: AppActionTypes.DELETE_ALERT_MESSAGE,
});

```

### store/login/login.reducer.ts

```ts
import { TLoginState, TLoginActions, LoginActionTypes } from './login.types';

const loginInitialState: TLoginState = {
  isLoginLoading: false,
  isLoginSuccess: false,
  isLoginError: false,
};

export const loginReducer = (
  state: TLoginState = loginInitialState,
  action: TLoginActions,
): TLoginState => {
  switch (action.type) {
    // LOGIN_LOADING
    case LoginActionTypes.LOGIN_LOADING:
      return { ...state, isLoginLoading: action.payload };

    // LOGIN_SUCCESS
    case LoginActionTypes.LOGIN_SUCCESS:
      return { ...state, isLoginSuccess: true };

    // LOGIN_ERROR
    case LoginActionTypes.LOGIN_ERROR:
      return { ...state, isLoginError: true };

    // LOGIN_RESET
    case LoginActionTypes.LOGIN_RESET:
      return loginInitialState;

    // DEFAULT
    default:
      return state;
  }
};

```

### store/login/login.types.ts

```ts
// action types enum
export enum LoginActionTypes {
  LOGIN_LOADING = 'LOGIN_LOADING',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_ERROR = 'LOGIN_ERROR',
  LOGIN_RESET = 'LOGIN_RESET',
}

// типизация стейта
export type TLoginState = {
  isLoginLoading: boolean;
  isLoginSuccess: boolean;
  isLoginError: boolean;
};

// типизация экшенов
export type TLoginLoadingAction = {
  type: LoginActionTypes.LOGIN_LOADING;
  payload: boolean;
};

export type TLoginSuccessAction = {
  type: LoginActionTypes.LOGIN_SUCCESS;
};

export type TLoginErrorAction = {
  type: LoginActionTypes.LOGIN_ERROR;
};

export type TLoginResetAction = {
  type: LoginActionTypes.LOGIN_RESET;
};

// экспорт всех типов экшенов
export type TLoginActions =
  | TLoginLoadingAction
  | TLoginSuccessAction
  | TLoginErrorAction
  | TLoginResetAction;

```

### store/login/login.actionCreators.ts

```ts
import Cookies from 'js-cookie';
import { Dispatch } from 'redux';

import {
  LoginActionTypes,
  TLoginActions,
  TLoginErrorAction,
  TLoginLoadingAction,
  TLoginResetAction,
  TLoginSuccessAction,
} from './login.types';
import {
  TLoginValues,
  loginService,
  // loginService2,
} from '../../api/services/login-sevice';
import {
  saveUserData,
  setAlertMessage,
  setScreen,
} from '../app/app.actionCreators';
import {
  AppScreens,
  TSaveUserDataAction,
  TSetAlertMessageAction,
  TSetScreenAction,
} from '../app/app.types';
import { Statuses } from '@/types/common';

// loginLoading
export const loginLoading = (payload: boolean): TLoginLoadingAction => ({
  type: LoginActionTypes.LOGIN_LOADING,
  payload,
});

// loginSuccess
export const loginSuccess = (): TLoginSuccessAction => ({
  type: LoginActionTypes.LOGIN_SUCCESS,
});

// loginError
export const loginError = (): TLoginErrorAction => ({
  type: LoginActionTypes.LOGIN_ERROR,
});

// loginReset
export const loginReset = (): TLoginResetAction => ({
  type: LoginActionTypes.LOGIN_RESET,
});

// loginThunk - THEN-CATCH variant
export function loginThunk(loginData: TLoginValues) {
  return (
    // all types of actions inside
    dispatch: Dispatch<
      | TLoginActions
      | TSetAlertMessageAction
      | TSetScreenAction
      | TSaveUserDataAction
    >,
  ) => {
    // loading
    dispatch(loginLoading(true));

    loginService
      // LOGIN REQUEST
      .logIn(loginData)

      // ========= LOGIN SUCCESS ========= //
      .then(res => {
        dispatch(loginSuccess());

        // save userData to store
        dispatch(saveUserData(res.data));

        // save userData to localStorage
        localStorage.setItem(
          'pickup-points-userdata',
          JSON.stringify(res.data),
        );

        // save userData to cookies
        Cookies.set('pickup-points-userdata', JSON.stringify(res.data));

        // success alert
        dispatch(
          setAlertMessage({
            message: `Login success`,
            status: Statuses.success,
          }),
        );

        // redirect after 1500
        setTimeout(() => {
          dispatch(loginLoading(false));
          dispatch(setScreen(AppScreens.DASHBOARD));
        }, 1500);
      })

      // ========= LOGIN ERROR ========= //
      .catch(error => {
        dispatch(loginError());
        dispatch(loginLoading(false));

        // error alert
        dispatch(
          setAlertMessage({ message: `${error}`, status: Statuses.danger }),
        );
      });
  };
}

// loginThunk2 - ASYNC-AWAIT variant
export function loginThunk2(loginData: TLoginValues) {
  return async (
    dispatch: Dispatch<
      | TLoginActions
      | TSetAlertMessageAction
      | TSetScreenAction
      | TSaveUserDataAction
    >,
  ) => {
    dispatch(loginLoading(true));

    // login reauest
    const response = await loginService.logIn(loginData);

    // ========= LOGIN SUCCESS ========= //
    if (response.status === 200) {
      const responseSuccessData = response.data;

      // save userData to store
      dispatch(saveUserData(responseSuccessData));

      // save userData to localStorage
      localStorage.setItem(
        'pickup-points-userdata',
        JSON.stringify(responseSuccessData),
      );

      // save userData to cookies
      Cookies.set(
        'pickup-points-userdata',
        JSON.stringify(responseSuccessData),
      );

      // success alert
      dispatch(
        setAlertMessage({
          message: `Login success`,
          status: Statuses.success,
        }),
      );

      // redirect after 1500
      setTimeout(() => {
        dispatch(loginLoading(false));
        dispatch(setScreen(AppScreens.DASHBOARD));
      }, 1500);

      // ========= LOGIN ERROR ========= //
    } else {
      dispatch(loginError());
      dispatch(loginLoading(false));

      // error alert
      dispatch(
        setAlertMessage({ message: `${response}`, status: Statuses.danger }),
      );

      // error data
      // const responseErrorData = response.response.data;
    }
  };
}

```

### httpClient

```ts
import { API_URL } from './apiUrl';
import axios from 'axios';
import { testStore } from '../store-redux-classic';

const httpClient = axios.create({
  baseURL: API_URL,

  headers: {
    // inject userToken --> get token value from store
    Authorization: testStore.getState().app.userData.token,
  },
});

export default httpClient;

```

### ../loginService

```ts
import { AxiosResponse } from 'axios';
import httpClient from '../httpClient';

export type TLoginValues = {
  username: string;
  password: string;
};

// THEN-CATCH variant
export const loginService = {
  // logIn
  logIn(loginValues: TLoginValues): Promise<AxiosResponse> {
    const { username, password } = loginValues;

    return (
      httpClient.post(`auth/login`, { username, password })

        // logIn error
        .catch(error => error)
    );
  },
};
```

### How to use inside component

```tsx
// import store hooks
import { useActions } from '../../../store-redux-classic/actions';
import { useTypedSelector } from '../../../store-redux-classic';

...

const { isLoginLoading } = useTypedSelector(state => state.login);
const { loginThunk } = useActions();

...

onSubmit: (values: TLoginFormValues) => {
  const { username, password } = values;

  loginThunk2({ username, password });

},
```

***

## MobX

TODO

***

## Context

TODO - useContext()-хук

***
