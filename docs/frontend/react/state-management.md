---
title: State-management ++-
sidebar_position: 6
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
### Install redux-toolkit

`yarn add @reduxjs/toolkit react-redux @types/react-redux`

Отличия от классического redux:

- Не нужны acttion types
- Не нужны acttion creators для синхронных (нужны только для асинхронных экшенов)
- Не нужен ```redux-thunk``` и middleware (уже идет "из коробки")
- Не нужен ```redux-devtools``` (уже идет "из коробки")
- Может менять (мутировать) стейт, в отличие от классического, где всегда возвращается новый стейт

<img src="../../../../img/frontend/redux-actions.png" width="400" alt="redux-actions.png" />

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
