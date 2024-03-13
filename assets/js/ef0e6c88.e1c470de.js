"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[5314],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var o=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=o.createContext({}),c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),g=c(t),d=s,A=g["".concat(p,".").concat(d)]||g[d]||u[d]||r;return t?o.createElement(A,a(a({ref:n},l),{},{components:t})):o.createElement(A,a({ref:n},l))}));function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,a=new Array(r);a[0]=g;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var c=2;c<r;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9064:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=t(7462),s=(t(7294),t(3905));const r={title:"Redux-classic",sidebar_position:5},a=void 0,i={unversionedId:"frontend/react/redux/classic",id:"frontend/react/redux/classic",title:"Redux-classic",description:"yarn add redux react-redux redux-thunk @types/react-redux redux-devtools-extension",source:"@site/docs/frontend/react/5-redux/5-classic.md",sourceDirName:"frontend/react/5-redux",slug:"/frontend/react/redux/classic",permalink:"/knowledge-bank/docs/frontend/react/redux/classic",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/react/5-redux/5-classic.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Redux-classic",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u041f\u043e\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",permalink:"/knowledge-bank/docs/frontend/react/redux/usage"},next:{title:"fetch",permalink:"/knowledge-bank/docs/frontend/react/api/fetch"}},p={},c=[{value:"store/index.ts",id:"storeindexts",level:3},{value:"store/rootReducer.ts",id:"storerootreducerts",level:3},{value:"store/actions.ts",id:"storeactionsts",level:3},{value:"store/app/app.reducer.ts",id:"storeappappreducerts",level:3},{value:"store/app/app.types.ts",id:"storeappapptypests",level:3},{value:"store/app/app.actionCreators.ts",id:"storeappappactioncreatorsts",level:3},{value:"store/login/login.reducer.ts",id:"storeloginloginreducerts",level:3},{value:"store/login/login.types.ts",id:"storeloginlogintypests",level:3},{value:"store/login/login.actionCreators.ts",id:"storeloginloginactioncreatorsts",level:3},{value:"httpClient",id:"httpclient",level:3},{value:"../loginService",id:"loginservice",level:3},{value:"How to use inside component",id:"how-to-use-inside-component",level:3}],l={toc:c};function u(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"yarn add redux react-redux redux-thunk @types/react-redux redux-devtools-extension")),(0,s.kt)("h3",{id:"storeindexts"},"store/index.ts"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { applyMiddleware, legacy_createStore } from 'redux';\nimport thunk from 'redux-thunk';\nimport { RootState, rootReducer } from './rootReducer';\nimport { TypedUseSelectorHook, useSelector } from 'react-redux';\nimport { composeWithDevTools } from 'redux-devtools-extension';\n\nexport const testStore = legacy_createStore(\n  rootReducer,\n  composeWithDevTools(applyMiddleware(thunk)),\n);\n\n// \u044d\u043a\u0441\u043f\u043e\u0440\u0442 \u0445\u0443\u043a\u0430, \u0442\u0438\u043f\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440\u0430 \u0432\u0441\u0435\u0433\u043e \u0441\u0442\u0435\u0439\u0442\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\nexport const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;\n")),(0,s.kt)("h3",{id:"storerootreducerts"},"store/rootReducer.ts"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { combineReducers } from 'redux';\n\n// reducers list\nimport { appReducer } from './app/app.reducer';\nimport { loginReducer } from './login/login.reducer';\n\nexport const rootReducer = combineReducers({\n  app: appReducer,\n  login: loginReducer,\n});\n\n// \u0438\u043c\u043f\u043e\u0440\u0442 \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u0438 \u0432\u0441\u0435\u0433\u043e state\nexport type RootState = ReturnType<typeof rootReducer>;\n")),(0,s.kt)("h3",{id:"storeactionsts"},"store/actions.ts"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { useDispatch } from 'react-redux';\nimport * as appActionCreators from './app/app.actionCreators';\nimport * as loginActionCreators from './login/login.actionCreators';\nimport { bindActionCreators } from 'redux';\n// import * as loginActionCreators from './login/login.actionCreators';\n\n// \u044d\u043a\u0441\u043f\u043e\u0440\u0442 \u0445\u0443\u043a\u0430, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432\u0441\u0435 \u044d\u043a\u0448\u0435\u043d\u044b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\nexport const useActions = () => {\n  const dispatch = useDispatch();\n\n  return bindActionCreators(\n    {\n      ...appActionCreators,\n      ...loginActionCreators,\n    },\n    dispatch,\n  );\n};\n\n")),(0,s.kt)("h3",{id:"storeappappreducerts"},"store/app/app.reducer.ts"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  TAppState,\n  TAppActions,\n  AppActionTypes,\n  AppScreens,\n} from './app.types';\n\nconst appInitialState: TAppState = {\n  screen: AppScreens.LOGIN,\n  alertMessage: {\n    message: '',\n    status: undefined,\n  },\n  userData: {\n    token: undefined,\n    expiresIn: undefined,\n  },\n};\n\nexport const appReducer = (\n  state: TAppState = appInitialState,\n  action: TAppActions,\n): TAppState => {\n  switch (action.type) {\n    // SET_SCREEN\n    case AppActionTypes.SET_SCREEN:\n      return { ...state, screen: action.payload };\n\n    // SAVE_USER_DATA\n    case AppActionTypes.SAVE_USER_DATA:\n      return { ...state, userData: action.payload };\n\n    // SET_ALERT_MESSAGE\n    case AppActionTypes.SET_ALERT_MESSAGE:\n      return { ...state, alertMessage: action.payload };\n\n    // DELETE_ALERT_MESSAGE\n    case AppActionTypes.DELETE_ALERT_MESSAGE:\n      return {\n        ...state,\n        alertMessage: {\n          message: '',\n          status: undefined,\n        },\n      };\n\n    // DEFAULT\n    default:\n      return state;\n  }\n};\n")),(0,s.kt)("h3",{id:"storeappapptypests"},"store/app/app.types.ts"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Statuses } from '@/types/common';\n\n// screens enum\nexport enum AppScreens {\n  LOGIN = 'LOGIN',\n  DASHBOARD = 'DASHBOARD',\n  EDIT_DRUGSTORE = 'EDIT_DRUGSTORE',\n  EDIT_MULTI_DRUGSTORE = 'EDIT_MULTI_DRUGSTORE',\n  CUSTOM_STATUSES = 'CUSTOM_STATUSES',\n}\n\n// action types enum\nexport enum AppActionTypes {\n  SET_SCREEN = 'SET_SCREEN',\n  SAVE_USER_DATA = 'SAVE_USER_DATA',\n  SET_ALERT_MESSAGE = 'SET_ALERT_MESSAGE',\n  DELETE_ALERT_MESSAGE = 'DELETE_ALERT_MESSAGE',\n}\n\nexport type TUserData = {\n  token?: string;\n  expiresIn?: number;\n};\n\nexport type TAlertMessage = {\n  message: string;\n  status?: Statuses;\n};\n\n// \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f \u0441\u0442\u0435\u0439\u0442\u0430\nexport type TAppState = {\n  screen: AppScreens;\n  alertMessage: TAlertMessage;\n  userData: TUserData;\n};\n\n// \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f \u044d\u043a\u0448\u0435\u043d\u043e\u0432\nexport type TSetScreenAction = {\n  type: AppActionTypes.SET_SCREEN;\n  payload: AppScreens;\n};\n\nexport type TSaveUserDataAction = {\n  type: AppActionTypes.SAVE_USER_DATA;\n  payload: TUserData;\n};\n\nexport type TSetAlertMessageAction = {\n  type: AppActionTypes.SET_ALERT_MESSAGE;\n  payload: TAlertMessage;\n};\n\nexport type TDeleteAlertMessageAction = {\n  type: AppActionTypes.DELETE_ALERT_MESSAGE;\n};\n\n// \u044d\u043a\u0441\u043f\u043e\u0440\u0442 \u0432\u0441\u0435\u0445 \u0442\u0438\u043f\u043e\u0432 \u044d\u043a\u0448\u0435\u043d\u043e\u0432\nexport type TAppActions =\n  | TSetScreenAction\n  | TSaveUserDataAction\n  | TSetAlertMessageAction\n  | TDeleteAlertMessageAction;\n")),(0,s.kt)("h3",{id:"storeappappactioncreatorsts"},"store/app/app.actionCreators.ts"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  AppActionTypes,\n  AppScreens,\n  TAlertMessage,\n  TDeleteAlertMessageAction,\n  TSaveUserDataAction,\n  TSetAlertMessageAction,\n  TSetScreenAction,\n  TUserData,\n} from './app.types';\n\n// setScreen\nexport const setScreen = (payload: AppScreens): TSetScreenAction => ({\n  type: AppActionTypes.SET_SCREEN,\n  payload,\n});\n\n// saveUserData\nexport const saveUserData = (payload: TUserData): TSaveUserDataAction => ({\n  type: AppActionTypes.SAVE_USER_DATA,\n  payload,\n});\n\n// setAlertMessage\nexport const setAlertMessage = (\n  payload: TAlertMessage,\n): TSetAlertMessageAction => ({\n  type: AppActionTypes.SET_ALERT_MESSAGE,\n  payload,\n});\n\n// deleteAlertMessage\nexport const deleteAlertMessage = (): TDeleteAlertMessageAction => ({\n  type: AppActionTypes.DELETE_ALERT_MESSAGE,\n});\n\n")),(0,s.kt)("h3",{id:"storeloginloginreducerts"},"store/login/login.reducer.ts"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { TLoginState, TLoginActions, LoginActionTypes } from './login.types';\n\nconst loginInitialState: TLoginState = {\n  isLoginLoading: false,\n  isLoginSuccess: false,\n  isLoginError: false,\n};\n\nexport const loginReducer = (\n  state: TLoginState = loginInitialState,\n  action: TLoginActions,\n): TLoginState => {\n  switch (action.type) {\n    // LOGIN_LOADING\n    case LoginActionTypes.LOGIN_LOADING:\n      return { ...state, isLoginLoading: action.payload };\n\n    // LOGIN_SUCCESS\n    case LoginActionTypes.LOGIN_SUCCESS:\n      return { ...state, isLoginSuccess: true };\n\n    // LOGIN_ERROR\n    case LoginActionTypes.LOGIN_ERROR:\n      return { ...state, isLoginError: true };\n\n    // LOGIN_RESET\n    case LoginActionTypes.LOGIN_RESET:\n      return loginInitialState;\n\n    // DEFAULT\n    default:\n      return state;\n  }\n};\n\n")),(0,s.kt)("h3",{id:"storeloginlogintypests"},"store/login/login.types.ts"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// action types enum\nexport enum LoginActionTypes {\n  LOGIN_LOADING = 'LOGIN_LOADING',\n  LOGIN_SUCCESS = 'LOGIN_SUCCESS',\n  LOGIN_ERROR = 'LOGIN_ERROR',\n  LOGIN_RESET = 'LOGIN_RESET',\n}\n\n// \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f \u0441\u0442\u0435\u0439\u0442\u0430\nexport type TLoginState = {\n  isLoginLoading: boolean;\n  isLoginSuccess: boolean;\n  isLoginError: boolean;\n};\n\n// \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f \u044d\u043a\u0448\u0435\u043d\u043e\u0432\nexport type TLoginLoadingAction = {\n  type: LoginActionTypes.LOGIN_LOADING;\n  payload: boolean;\n};\n\nexport type TLoginSuccessAction = {\n  type: LoginActionTypes.LOGIN_SUCCESS;\n};\n\nexport type TLoginErrorAction = {\n  type: LoginActionTypes.LOGIN_ERROR;\n};\n\nexport type TLoginResetAction = {\n  type: LoginActionTypes.LOGIN_RESET;\n};\n\n// \u044d\u043a\u0441\u043f\u043e\u0440\u0442 \u0432\u0441\u0435\u0445 \u0442\u0438\u043f\u043e\u0432 \u044d\u043a\u0448\u0435\u043d\u043e\u0432\nexport type TLoginActions =\n  | TLoginLoadingAction\n  | TLoginSuccessAction\n  | TLoginErrorAction\n  | TLoginResetAction;\n\n")),(0,s.kt)("h3",{id:"storeloginloginactioncreatorsts"},"store/login/login.actionCreators.ts"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import Cookies from 'js-cookie';\nimport { Dispatch } from 'redux';\n\nimport {\n  LoginActionTypes,\n  TLoginActions,\n  TLoginErrorAction,\n  TLoginLoadingAction,\n  TLoginResetAction,\n  TLoginSuccessAction,\n} from './login.types';\nimport {\n  TLoginValues,\n  loginService,\n  // loginService2,\n} from '../../api/services/login-sevice';\nimport {\n  saveUserData,\n  setAlertMessage,\n  setScreen,\n} from '../app/app.actionCreators';\nimport {\n  AppScreens,\n  TSaveUserDataAction,\n  TSetAlertMessageAction,\n  TSetScreenAction,\n} from '../app/app.types';\nimport { Statuses } from '@/types/common';\n\n// loginLoading\nexport const loginLoading = (payload: boolean): TLoginLoadingAction => ({\n  type: LoginActionTypes.LOGIN_LOADING,\n  payload,\n});\n\n// loginSuccess\nexport const loginSuccess = (): TLoginSuccessAction => ({\n  type: LoginActionTypes.LOGIN_SUCCESS,\n});\n\n// loginError\nexport const loginError = (): TLoginErrorAction => ({\n  type: LoginActionTypes.LOGIN_ERROR,\n});\n\n// loginReset\nexport const loginReset = (): TLoginResetAction => ({\n  type: LoginActionTypes.LOGIN_RESET,\n});\n\n// loginThunk - THEN-CATCH variant\nexport function loginThunk(loginData: TLoginValues) {\n  return (\n    // all types of actions inside\n    dispatch: Dispatch<\n      | TLoginActions\n      | TSetAlertMessageAction\n      | TSetScreenAction\n      | TSaveUserDataAction\n    >,\n  ) => {\n    // loading\n    dispatch(loginLoading(true));\n\n    loginService\n      // LOGIN REQUEST\n      .logIn(loginData)\n\n      // ========= LOGIN SUCCESS ========= //\n      .then(res => {\n        dispatch(loginSuccess());\n\n        // save userData to store\n        dispatch(saveUserData(res.data));\n\n        // save userData to localStorage\n        localStorage.setItem(\n          'pickup-points-userdata',\n          JSON.stringify(res.data),\n        );\n\n        // save userData to cookies\n        Cookies.set('pickup-points-userdata', JSON.stringify(res.data));\n\n        // success alert\n        dispatch(\n          setAlertMessage({\n            message: `Login success`,\n            status: Statuses.success,\n          }),\n        );\n\n        // redirect after 1500\n        setTimeout(() => {\n          dispatch(loginLoading(false));\n          dispatch(setScreen(AppScreens.DASHBOARD));\n        }, 1500);\n      })\n\n      // ========= LOGIN ERROR ========= //\n      .catch(error => {\n        dispatch(loginError());\n        dispatch(loginLoading(false));\n\n        // error alert\n        dispatch(\n          setAlertMessage({ message: `${error}`, status: Statuses.danger }),\n        );\n      });\n  };\n}\n\n// loginThunk2 - ASYNC-AWAIT variant\nexport function loginThunk2(loginData: TLoginValues) {\n  return async (\n    dispatch: Dispatch<\n      | TLoginActions\n      | TSetAlertMessageAction\n      | TSetScreenAction\n      | TSaveUserDataAction\n    >,\n  ) => {\n    dispatch(loginLoading(true));\n\n    // login reauest\n    const response = await loginService.logIn(loginData);\n\n    // ========= LOGIN SUCCESS ========= //\n    if (response.status === 200) {\n      const responseSuccessData = response.data;\n\n      // save userData to store\n      dispatch(saveUserData(responseSuccessData));\n\n      // save userData to localStorage\n      localStorage.setItem(\n        'pickup-points-userdata',\n        JSON.stringify(responseSuccessData),\n      );\n\n      // save userData to cookies\n      Cookies.set(\n        'pickup-points-userdata',\n        JSON.stringify(responseSuccessData),\n      );\n\n      // success alert\n      dispatch(\n        setAlertMessage({\n          message: `Login success`,\n          status: Statuses.success,\n        }),\n      );\n\n      // redirect after 1500\n      setTimeout(() => {\n        dispatch(loginLoading(false));\n        dispatch(setScreen(AppScreens.DASHBOARD));\n      }, 1500);\n\n      // ========= LOGIN ERROR ========= //\n    } else {\n      dispatch(loginError());\n      dispatch(loginLoading(false));\n\n      // error alert\n      dispatch(\n        setAlertMessage({ message: `${response}`, status: Statuses.danger }),\n      );\n\n      // error data\n      // const responseErrorData = response.response.data;\n    }\n  };\n}\n\n")),(0,s.kt)("h3",{id:"httpclient"},"httpClient"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { API_URL } from './apiUrl';\nimport axios from 'axios';\nimport { testStore } from '../store-redux-classic';\n\nconst httpClient = axios.create({\n  baseURL: API_URL,\n\n  headers: {\n    // inject userToken --\x3e get token value from store\n    Authorization: testStore.getState().app.userData.token,\n  },\n});\n\nexport default httpClient;\n\n")),(0,s.kt)("h3",{id:"loginservice"},"../loginService"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { AxiosResponse } from 'axios';\nimport httpClient from '../httpClient';\n\nexport type TLoginValues = {\n  username: string;\n  password: string;\n};\n\n// THEN-CATCH variant\nexport const loginService = {\n  // logIn\n  logIn(loginValues: TLoginValues): Promise<AxiosResponse> {\n    const { username, password } = loginValues;\n\n    return (\n      httpClient.post(`auth/login`, { username, password })\n\n        // login success\n        .then(res => {\n          // do smth\n        })\n\n        // logIn error\n        .catch(error => error)\n    );\n  },\n};\n")),(0,s.kt)("h3",{id:"how-to-use-inside-component"},"How to use inside component"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"// import store hooks\nimport { useActions } from '../../../store-redux-classic/actions';\nimport { useTypedSelector } from '../../../store-redux-classic';\n\n...\n\nconst { isLoginLoading } = useTypedSelector(state => state.login);\nconst { loginThunk } = useActions();\n\n...\n\nonSubmit: (values: TLoginFormValues) => {\n  const { username, password } = values;\n\n  loginThunk2({ username, password });\n\n},\n")))}u.isMDXComponent=!0}}]);