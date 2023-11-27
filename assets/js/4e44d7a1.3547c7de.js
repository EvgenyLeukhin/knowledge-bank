"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[6253],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(t),g=s,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||o;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function g(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,a=new Array(o);a[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7269:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(7462),s=(t(7294),t(3905));const o={title:"State-management",sidebar_position:8},a="Redux",i={unversionedId:"frontend/react/react__old/redux/state-management",id:"frontend/react/react__old/redux/state-management",title:"State-management",description:"Redux \u043b\u0443\u0447\u0448\u0435 \u043f\u043e\u043d\u044f\u0442\u044c \u043d\u0430 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0441 \u0431\u0430\u043d\u043a\u043e\u043c.",source:"@site/docs/frontend/react/react__old/redux/state-management.md",sourceDirName:"frontend/react/react__old/redux",slug:"/frontend/react/react__old/redux/state-management",permalink:"/knowledge-bank/docs/frontend/react/react__old/redux/state-management",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/react/react__old/redux/state-management.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"State-management",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Redux",permalink:"/knowledge-bank/docs/category/redux"},next:{title:"1",permalink:"/knowledge-bank/docs/frontend/react/react__old/redux/1"}},c={},l=[{value:"Redux toolkit",id:"redux-toolkit",level:2},{value:"RTK reducers actions",id:"rtk-reducers-actions",level:3},{value:"Install redux-toolkit",id:"install-redux-toolkit",level:3},{value:"Store",id:"store",level:3},{value:"Counter store",id:"counter-store",level:3},{value:"Users store",id:"users-store",level:3},{value:"Users thunks",id:"users-thunks",level:4},{value:"Use inside component",id:"use-inside-component",level:3},{value:"Redux classic",id:"redux-classic",level:2},{value:"store/index.ts",id:"storeindexts",level:3},{value:"store/rootReducer.ts",id:"storerootreducerts",level:3},{value:"store/actions.ts",id:"storeactionsts",level:3},{value:"store/app/app.reducer.ts",id:"storeappappreducerts",level:3},{value:"store/app/app.types.ts",id:"storeappapptypests",level:3},{value:"store/app/app.actionCreators.ts",id:"storeappappactioncreatorsts",level:3},{value:"store/login/login.reducer.ts",id:"storeloginloginreducerts",level:3},{value:"store/login/login.types.ts",id:"storeloginlogintypests",level:3},{value:"store/login/login.actionCreators.ts",id:"storeloginloginactioncreatorsts",level:3},{value:"httpClient",id:"httpclient",level:3},{value:"../loginService",id:"loginservice",level:3},{value:"How to use inside component",id:"how-to-use-inside-component",level:3},{value:"MobX",id:"mobx",level:2},{value:"Context",id:"context",level:2}],p={toc:l};function u(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"redux"},"Redux"),(0,s.kt)("p",null,"Redux \u043b\u0443\u0447\u0448\u0435 \u043f\u043e\u043d\u044f\u0442\u044c \u043d\u0430 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0441 \u0431\u0430\u043d\u043a\u043e\u043c. "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"\u0411\u0430\u043d\u043a")," (store/state) - \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 (\u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043c\u043e\u0436\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u044d\u043a\u0448\u0435\u043d\u0430\u043c\u0438)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"\u0413\u043b\u0430\u0432\u043d\u044b\u0439 \u0440\u044c\u0434\u044c\u044e\u0441\u0435\u0440")," (root reducer) - \u0412\u0441\u0451 \u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0435 \u041f\u041e (\u0442\u043e\u0447\u043a\u0430 \u0432\u0445\u043e\u0434\u0430 \u0432\u0441\u0435\u0445 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u0440\u044c\u0434\u044c\u044e\u0441\u0435\u0440\u043e\u0432). \u0412\u0441\u0435\u0433\u0434\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 store"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"\u0420\u044c\u0434\u044c\u044e\u0441\u0435\u0440\u044b")," (reducer) - \u041d\u0430\u0431\u043e\u0440 \u0441\u0432\u044f\u0437\u044f\u043d\u043d\u044b\u0445 \u043f\u043e \u0441\u043c\u044b\u0441\u043b\u0443 \u044d\u043a\u0448\u0435\u043d\u043e\u0432"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Actions")," (actions) - \u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0433\u043e \u041f\u041e, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u043c\u0435\u043d\u044f\u0442\u044c state "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"\u0414\u0438\u0441\u043f\u0435\u0442\u0447\u0435\u0440")," (dispatch) - \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u0411\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0433\u043e \u041f\u041e")),(0,s.kt)("img",{src:"../../../../img/frontend/redux.png",width:"400",alt:"redux.png"}),(0,s.kt)("img",{src:"../../../../img/frontend/redux2.png",width:"400",alt:"redux2.png"}),(0,s.kt)("p",null,"\u0412 redux store \u0438\u043c\u043c\u0443\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u044b\u0439 (\u043d\u0435\u0438\u0437\u043c\u0435\u043d\u044f\u0435\u043c\u044b\u0439), \u043f\u0440\u0438 \u043a\u0430\u043a\u0438\u0445-\u043b\u0438\u0431\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u0445 \u0432 \u0441\u0442\u043e\u0440\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c\u0441\u044f \u043d\u043e\u0432\u044b\u0439 \u0441\u0442\u043e\u0440, \u0441\u0442\u0430\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043b\u0435\u043d."),(0,s.kt)("p",null,"\u0420\u0435\u0434\u0443\u043a\u0442\u043e\u0440\u044b \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u044b \u043d\u0430 switch-case \u043b\u043e\u0433\u0438\u043a\u0435, \u0433\u0434\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442\u0441\u044f action type. \u041f\u043e \u0434\u0435\u0444\u043e\u043b\u0442\u0443 \u043a\u0430\u0436\u0434\u044b\u0439 \u0440\u0435\u0434\u044c\u044e\u0441\u0435\u0440 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043d\u0435\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043d\u044b\u0439 state."),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"redux-toolkit"},"Redux toolkit"),(0,s.kt)("h3",{id:"rtk-reducers-actions"},"RTK reducers actions"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"reducers: {\n  // short\n  setSidebarModals(state, { payload }: PayloadAction<TModalType>) {\n    state.sidebarModals = payload;\n  },\n\n  // full\n  setInitialRoomState: (state, action: PayloadAction) => {\n    return {\n      ...state,\n      ...initialState,\n    };\n  },\n}\n")),(0,s.kt)("h3",{id:"install-redux-toolkit"},"Install redux-toolkit"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"yarn add @reduxjs/toolkit react-redux")),(0,s.kt)("p",null,"\u041e\u0442\u043b\u0438\u0447\u0438\u044f \u043e\u0442 \u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e redux:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u041d\u0435 \u043d\u0443\u0436\u043d\u044b acttion types"),(0,s.kt)("li",{parentName:"ul"},"\u041d\u0435 \u043d\u0443\u0436\u043d\u044b acttion creators \u0434\u043b\u044f \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0445 (\u043d\u0443\u0436\u043d\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0445 \u044d\u043a\u0448\u0435\u043d\u043e\u0432)"),(0,s.kt)("li",{parentName:"ul"},"\u041d\u0435 \u043d\u0443\u0436\u0435\u043d ",(0,s.kt)("inlineCode",{parentName:"li"},"redux-thunk"),' \u0438 middleware (\u0443\u0436\u0435 \u0438\u0434\u0435\u0442 "\u0438\u0437 \u043a\u043e\u0440\u043e\u0431\u043a\u0438")'),(0,s.kt)("li",{parentName:"ul"},"\u041d\u0435 \u043d\u0443\u0436\u0435\u043d ",(0,s.kt)("inlineCode",{parentName:"li"},"redux-devtools"),' (\u0443\u0436\u0435 \u0438\u0434\u0435\u0442 "\u0438\u0437 \u043a\u043e\u0440\u043e\u0431\u043a\u0438")'),(0,s.kt)("li",{parentName:"ul"},"\u041c\u043e\u0436\u0435\u0442 \u043c\u0435\u043d\u044f\u0442\u044c (\u043c\u0443\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c) \u0441\u0442\u0435\u0439\u0442, \u0432 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 \u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e, \u0433\u0434\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u043d\u043e\u0432\u044b\u0439 \u0441\u0442\u0435\u0439\u0442")),(0,s.kt)("img",{src:"../../../../img/frontend/redux-actions.png",width:"400",alt:"redux-actions.png"}),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"store"},"Store"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { bindActionCreators, configureStore } from '@reduxjs/toolkit';\nimport { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';\nimport { counterSlice } from './counter/counter.slice';\nimport { usersSlice } from './users/users.slice';\nimport { usersThunks } from './users/users.thunks';\n\n// storeToolkit2\nexport const storeToolkit2 = configureStore({\n  reducer: {\n    counterStore: counterSlice.reducer,\n    usersStore: usersSlice.reducer,\n  },\n});\n\n// \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f \u0432\u0441\u0435\u0433\u043e \u0441\u0442\u0435\u0439\u0442\u0430\ntype RootState = ReturnType<typeof storeToolkit2.getState>;\nexport default RootState;\n\n// \u0445\u0443\u043a \u0441\u043e \u0432\u0441\u0435\u043c \u0441\u0442\u0435\u0439\u0442\u043e\u043c\nexport const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;\n\n// \u0445\u0443\u043a \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u044d\u043a\u0448\u0435\u043d\u0430\u043c\u0438\nconst allActions = {\n  ...counterSlice.actions,\n  ...usersSlice.actions,\n  ...usersThunks,\n};\n\nexport const useSyncActions = () => {\n  const dispatch = useDispatch();\n\n  return bindActionCreators(allActions, dispatch);\n};\n")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"counter-store"},"Counter store"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export type TCounterState = {\n  counter: number;\n};\n\n\nimport { createSlice, PayloadAction } from '@reduxjs/toolkit';\nimport { TCounterState } from './counter.types';\n\nconst initialCounterState: TCounterState = {\n  counter: 0,\n};\n\n// createSlice (\u0433\u043e\u0440\u0430\u0437\u0434\u043e \u0443\u0434\u043e\u0431\u043d\u0435\u0435 \u0447\u0435\u043c createReducer())\nexport const counterSlice = createSlice({\n  name: 'counter',\n\n  // initial state\n  initialState: initialCounterState,\n\n  // reducer with actions\n  reducers: {\n    // changeCounters (with return writing)\n    change: (state, { payload }: PayloadAction<number>) => {\n      return {\n        // ...state,\n        counter: payload, // \u0431\u0443\u0434\u0435\u0442 \u0432\u0441\u0435\u0433\u0434\u0430 \u0440\u0430\u0432\u0435\u043d payload (\u0431\u0435\u0437 \u0441\u0443\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f)\n      };\n    },\n\n    // \u043c\u043e\u0436\u043d\u043e \u043c\u0443\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0442\u0435\u0439\u0442 (\u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0438\u0435 \u043f\u043e\u043b\u044f)\n    // dicrementCounter\n    dicrementCounter(state) {\n      state.counter -= 1;\n    },\n\n    // incrementCounter\n    incrementCounter(state) {\n      state.counter += 1;\n    },\n\n    // changeCounter\n    changeCounter(state, action: PayloadAction<number>) {\n      state.counter += action.payload;\n    },\n\n    // clear\n    clearCounter: () => initialCounterState,\n    // \u0442\u0430\u043a\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c \u044d\u043a\u0448\u0435\u043d\u043e\u0432 \u0433\u043e\u0440\u0430\u0437\u0434\u043e \u0443\u0434\u043e\u0431\u043d\u0435\u0435 \u0447\u0435\u043c createAction()\n  },\n});\n")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"users-store"},"Users store"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export type TUser = {\n  id: number;\n  name: string;\n  email: string;\n};\n\nexport type TUsersState = {\n  users: TUser[];\n  isLoading: boolean;\n  isSuccess: boolean;\n  isError: boolean;\n  errorMessage: string;\n};\n\n\nimport { createSlice, PayloadAction } from '@reduxjs/toolkit';\nimport { TUser, TUsersState } from './users.types';\n\nconst usersInitialState: TUsersState = {\n  users: [],\n  isLoading: false,\n  isSuccess: false,\n  isError: false,\n  errorMessage: '',\n};\n\n// creater slice\nexport const usersSlice = createSlice({\n  name: 'users',\n\n  // initial state\n  initialState: usersInitialState,\n\n  // reducer with actions\n  reducers: {\n    resetUsersState(state) {\n      state.isLoading = false;\n      state.isError = false;\n      state.errorMessage = '';\n    },\n\n    // usersLoading\n    usersLoading(state, { payload }: PayloadAction<boolean>) {\n      state.isLoading = payload;\n    },\n\n    // usersLoading - 2 variant\n    usersLoading2: (state, { payload }: PayloadAction<boolean>) => {\n      return {\n        // \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c \u0441\u0442\u0435\u0439\u0442\n        ...state,\n\n        // \u043c\u043e\u0434\u0438\u0444\u0446\u0438\u0440\u0443\u0435\u043c \u043f\u043e\u043b\u0435 \u0441\u0442\u0435\u0439\u0442\u0430\n        isLoading: payload,\n      };\n    },\n\n    // usersFetchingSuccess\n    usersSuccess(state, { payload }: PayloadAction<TUser[]>) {\n      state.isSuccess = true;\n      state.users = payload;\n    },\n\n    // usersFetchingError\n    usersError(state, { payload }: PayloadAction<string>) {\n      state.isError = true;\n      state.errorMessage = payload;\n    },\n\n    // clearUsers\n    clearUsers(state) {\n      state.users = [];\n    },\n\n    // addRandomUser\n    addRandomUser(state) {\n      state.users.push({\n        id: Math.round(Math.random() * 10000),\n        name: 'asdfasdf',\n        email: 'asdfasdf@mail.ru',\n      });\n    },\n\n    // addRandomUser2 - 2 variant\n    // (\u043f\u0440\u0438 \u0442\u0430\u043a\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438 \u043d\u0443\u0436\u043d\u043e \u0432\u0441\u0435\u0433\u0434\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c \u0441\u0442\u0435\u0439\u0442 ...state);\n    addRandomUser2: state => {\n      const randomId = Math.round(Math.random() * 10000);\n      const userObj = {\n        id: randomId,\n        name: `username-${randomId}`,\n        email: `username${randomId}@mail.com`,\n      };\n\n      return {\n        ...state, // \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c \u0441\u0442\u0435\u0439\u0442\n        users: [...state.users, userObj], // \u043c\u043e\u0434\u0438\u0444\u0446\u0438\u0440\u0443\u0435\u043c \u043f\u043e\u043b\u0435 \u0441\u0442\u0435\u0439\u0442\u0430\n      };\n    },\n\n    // deleteUser\n    deleteUser(state, { payload }: PayloadAction<number>) {\n      state.users = state.users.filter(user => user.id !== payload);\n    },\n\n    // deleteUser2 - 2 variant\n    deleteUser2: (state, action) => {\n      return {\n        // \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c \u0441\u0442\u0435\u0439\u0442\n        ...state,\n\n        // \u043c\u043e\u0434\u0438\u0444\u0446\u0438\u0440\u0443\u0435\u043c \u043f\u043e\u043b\u0435 \u0441\u0442\u0435\u0439\u0442\u0430\n        users: state.users.filter(user => user.id !== action.payload),\n      };\n    },\n\n    // deleteLastUser\n    deleteLastUser(state) {\n      state.users.pop();\n    },\n  },\n});\n\n")),(0,s.kt)("h4",{id:"users-thunks"},"Users thunks"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import axios from 'axios';\nimport { TUser } from './users.types';\nimport { Dispatch } from '@reduxjs/toolkit';\nimport { usersSlice } from './users.slice';\n\nconst { usersLoading, usersSuccess, usersError, resetUsersState } =\n  usersSlice.actions;\n\nconst fetchUsersThunk = () => async (dispatch: Dispatch) => {\n  dispatch(resetUsersState());\n  dispatch(usersLoading(true));\n\n  try {\n    // response typing\n    const response = await axios.get<TUser[]>(\n      'https://jsonplaceholder.typicode.com/users2',\n    );\n\n    // if success\n    setTimeout(() => {\n      dispatch(usersLoading(false));\n      dispatch(usersSuccess(response.data));\n    }, 1000);\n\n    // if error\n  } catch (e) {\n    dispatch(usersLoading(false));\n    dispatch(usersError(`${e}`));\n  }\n};\n\nexport const usersThunks = {\n  fetchUsersThunk,\n};\n\n")),(0,s.kt)("h3",{id:"use-inside-component"},"Use inside component"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSyncActions, useAppSelector } from '@/store/redux-toolkit2';\nimport { Loader } from '@/components/ui';\nimport styles from './ReduxToolkit2.module.scss';\n\nconst ReduxToolkit2 = () => {\n  // get state from store by useAppSelector\n  const {\n    counterStore: { counter },\n    usersStore: { users, isLoading, isError, errorMessage },\n  } = useAppSelector(state => state);\n\n  // get actions\n  const {\n    changeCounter,\n    clearCounter,\n    dicrementCounter,\n    incrementCounter,\n    addRandomUser2,\n    clearUsers,\n    deleteUser,\n    deleteLastUser,\n    fetchUsersThunk,\n  } = useSyncActions();\n\n  return (\n    <section className={styles.ReduxToolkit2}>\n      <h2>\n        <mark>ReduxToolkit 2</mark>\n      </h2>\n      {/* count */}\n      <div>\n        <b>count</b>: {counter}\n\n        <button onClick={() => changeCounter(-100)}>-100</button>\n        <button onClick={() => changeCounter(-10)}>-10</button>\n        <button onClick={() => dicrementCounter()}>-1</button>\n        <button onClick={() => clearCounter()}>X</button>\n        <button onClick={() => incrementCounter()}>+1</button>\n        <button onClick={() => changeCounter(10)}>+10</button>\n        <button onClick={() => changeCounter(100)}>+100</button>\n      </div>\n      &nbsp;&nbsp;&nbsp;\n      {/* users */}\n      <div style={{ display: 'flex', alignItems: 'flex-start' }}>\n        <b>users</b>:\n        <ul style={{ margin: 0, paddingLeft: 8, listStyle: 'none' }}>\n          {/* loading */}\n          {isLoading && <Loader />}\n\n          {/* error */}\n          {isError && <span className='text-danger'>{`${errorMessage}`}</span>}\n\n          {/* users */}\n          {users.length\n            ? users.map(user => {\n                const { id, name, email } = user;\n\n                return (\n                  <li key={id}>\n                    <b>{`${id}`}</b>\n\n                    <span>{name}</span>\n                    &nbsp;(<a href={`mailto:${email}`}>{email}</a>) &nbsp;\n                    <b\n                      style={{ cursor: 'pointer' }}\n                      onClick={() => deleteUser(id)}\n                    >\n                      X\n                    </b>\n                  </li>\n                );\n              })\n            : 'No data'}\n        </ul>\n\n        {/* buttons */}\n        {/* thunks \u043d\u0443\u0436\u043d\u043e \u043f\u0440\u043e\u0434\u0438\u0441\u043f\u0430\u0447\u0438\u0432\u0430\u0442\u044c */}\n        <button onClick={() => fetchUsersThunk()}>\n          Fetch users\n        </button>\n        <button onClick={() => addRandomUser2()}>Add random user</button>\n        <button onClick={() => clearUsers()}>Clear users</button>\n        <button onClick={() => deleteLastUser()}>Delete last</button>\n        <button onClick={() => clearUsers()}>Clear users</button>\n      </div>\n    </section>\n  );\n};\n\nexport default ReduxToolkit2;\n\n")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"redux-classic"},"Redux classic"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"yarn add redux react-redux redux-thunk @types/react-redux redux-devtools-extension")),(0,s.kt)("h3",{id:"storeindexts"},"store/index.ts"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { applyMiddleware, legacy_createStore } from 'redux';\nimport thunk from 'redux-thunk';\nimport { RootState, rootReducer } from './rootReducer';\nimport { TypedUseSelectorHook, useSelector } from 'react-redux';\nimport { composeWithDevTools } from 'redux-devtools-extension';\n\nexport const testStore = legacy_createStore(\n  rootReducer,\n  composeWithDevTools(applyMiddleware(thunk)),\n);\n\n// \u044d\u043a\u0441\u043f\u043e\u0440\u0442 \u0445\u0443\u043a\u0430, \u0442\u0438\u043f\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440\u0430 \u0432\u0441\u0435\u0433\u043e \u0441\u0442\u0435\u0439\u0442\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\nexport const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;\n")),(0,s.kt)("h3",{id:"storerootreducerts"},"store/rootReducer.ts"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { combineReducers } from 'redux';\n\n// reducers list\nimport { appReducer } from './app/app.reducer';\nimport { loginReducer } from './login/login.reducer';\n\nexport const rootReducer = combineReducers({\n  app: appReducer,\n  login: loginReducer,\n});\n\n// \u0438\u043c\u043f\u043e\u0440\u0442 \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u0438 \u0432\u0441\u0435\u0433\u043e state\nexport type RootState = ReturnType<typeof rootReducer>;\n")),(0,s.kt)("h3",{id:"storeactionsts"},"store/actions.ts"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { useDispatch } from 'react-redux';\nimport * as appActionCreators from './app/app.actionCreators';\nimport * as loginActionCreators from './login/login.actionCreators';\nimport { bindActionCreators } from 'redux';\n// import * as loginActionCreators from './login/login.actionCreators';\n\n// \u044d\u043a\u0441\u043f\u043e\u0440\u0442 \u0445\u0443\u043a\u0430, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432\u0441\u0435 \u044d\u043a\u0448\u0435\u043d\u044b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\nexport const useActions = () => {\n  const dispatch = useDispatch();\n\n  return bindActionCreators(\n    {\n      ...appActionCreators,\n      ...loginActionCreators,\n    },\n    dispatch,\n  );\n};\n\n")),(0,s.kt)("h3",{id:"storeappappreducerts"},"store/app/app.reducer.ts"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  TAppState,\n  TAppActions,\n  AppActionTypes,\n  AppScreens,\n} from './app.types';\n\nconst appInitialState: TAppState = {\n  screen: AppScreens.LOGIN,\n  alertMessage: {\n    message: '',\n    status: undefined,\n  },\n  userData: {\n    token: undefined,\n    expiresIn: undefined,\n  },\n};\n\nexport const appReducer = (\n  state: TAppState = appInitialState,\n  action: TAppActions,\n): TAppState => {\n  switch (action.type) {\n    // SET_SCREEN\n    case AppActionTypes.SET_SCREEN:\n      return { ...state, screen: action.payload };\n\n    // SAVE_USER_DATA\n    case AppActionTypes.SAVE_USER_DATA:\n      return { ...state, userData: action.payload };\n\n    // SET_ALERT_MESSAGE\n    case AppActionTypes.SET_ALERT_MESSAGE:\n      return { ...state, alertMessage: action.payload };\n\n    // DELETE_ALERT_MESSAGE\n    case AppActionTypes.DELETE_ALERT_MESSAGE:\n      return {\n        ...state,\n        alertMessage: {\n          message: '',\n          status: undefined,\n        },\n      };\n\n    // DEFAULT\n    default:\n      return state;\n  }\n};\n")),(0,s.kt)("h3",{id:"storeappapptypests"},"store/app/app.types.ts"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Statuses } from '@/types/common';\n\n// screens enum\nexport enum AppScreens {\n  LOGIN = 'LOGIN',\n  DASHBOARD = 'DASHBOARD',\n  EDIT_DRUGSTORE = 'EDIT_DRUGSTORE',\n  EDIT_MULTI_DRUGSTORE = 'EDIT_MULTI_DRUGSTORE',\n  CUSTOM_STATUSES = 'CUSTOM_STATUSES',\n}\n\n// action types enum\nexport enum AppActionTypes {\n  SET_SCREEN = 'SET_SCREEN',\n  SAVE_USER_DATA = 'SAVE_USER_DATA',\n  SET_ALERT_MESSAGE = 'SET_ALERT_MESSAGE',\n  DELETE_ALERT_MESSAGE = 'DELETE_ALERT_MESSAGE',\n}\n\nexport type TUserData = {\n  token?: string;\n  expiresIn?: number;\n};\n\nexport type TAlertMessage = {\n  message: string;\n  status?: Statuses;\n};\n\n// \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f \u0441\u0442\u0435\u0439\u0442\u0430\nexport type TAppState = {\n  screen: AppScreens;\n  alertMessage: TAlertMessage;\n  userData: TUserData;\n};\n\n// \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f \u044d\u043a\u0448\u0435\u043d\u043e\u0432\nexport type TSetScreenAction = {\n  type: AppActionTypes.SET_SCREEN;\n  payload: AppScreens;\n};\n\nexport type TSaveUserDataAction = {\n  type: AppActionTypes.SAVE_USER_DATA;\n  payload: TUserData;\n};\n\nexport type TSetAlertMessageAction = {\n  type: AppActionTypes.SET_ALERT_MESSAGE;\n  payload: TAlertMessage;\n};\n\nexport type TDeleteAlertMessageAction = {\n  type: AppActionTypes.DELETE_ALERT_MESSAGE;\n};\n\n// \u044d\u043a\u0441\u043f\u043e\u0440\u0442 \u0432\u0441\u0435\u0445 \u0442\u0438\u043f\u043e\u0432 \u044d\u043a\u0448\u0435\u043d\u043e\u0432\nexport type TAppActions =\n  | TSetScreenAction\n  | TSaveUserDataAction\n  | TSetAlertMessageAction\n  | TDeleteAlertMessageAction;\n")),(0,s.kt)("h3",{id:"storeappappactioncreatorsts"},"store/app/app.actionCreators.ts"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  AppActionTypes,\n  AppScreens,\n  TAlertMessage,\n  TDeleteAlertMessageAction,\n  TSaveUserDataAction,\n  TSetAlertMessageAction,\n  TSetScreenAction,\n  TUserData,\n} from './app.types';\n\n// setScreen\nexport const setScreen = (payload: AppScreens): TSetScreenAction => ({\n  type: AppActionTypes.SET_SCREEN,\n  payload,\n});\n\n// saveUserData\nexport const saveUserData = (payload: TUserData): TSaveUserDataAction => ({\n  type: AppActionTypes.SAVE_USER_DATA,\n  payload,\n});\n\n// setAlertMessage\nexport const setAlertMessage = (\n  payload: TAlertMessage,\n): TSetAlertMessageAction => ({\n  type: AppActionTypes.SET_ALERT_MESSAGE,\n  payload,\n});\n\n// deleteAlertMessage\nexport const deleteAlertMessage = (): TDeleteAlertMessageAction => ({\n  type: AppActionTypes.DELETE_ALERT_MESSAGE,\n});\n\n")),(0,s.kt)("h3",{id:"storeloginloginreducerts"},"store/login/login.reducer.ts"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { TLoginState, TLoginActions, LoginActionTypes } from './login.types';\n\nconst loginInitialState: TLoginState = {\n  isLoginLoading: false,\n  isLoginSuccess: false,\n  isLoginError: false,\n};\n\nexport const loginReducer = (\n  state: TLoginState = loginInitialState,\n  action: TLoginActions,\n): TLoginState => {\n  switch (action.type) {\n    // LOGIN_LOADING\n    case LoginActionTypes.LOGIN_LOADING:\n      return { ...state, isLoginLoading: action.payload };\n\n    // LOGIN_SUCCESS\n    case LoginActionTypes.LOGIN_SUCCESS:\n      return { ...state, isLoginSuccess: true };\n\n    // LOGIN_ERROR\n    case LoginActionTypes.LOGIN_ERROR:\n      return { ...state, isLoginError: true };\n\n    // LOGIN_RESET\n    case LoginActionTypes.LOGIN_RESET:\n      return loginInitialState;\n\n    // DEFAULT\n    default:\n      return state;\n  }\n};\n\n")),(0,s.kt)("h3",{id:"storeloginlogintypests"},"store/login/login.types.ts"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// action types enum\nexport enum LoginActionTypes {\n  LOGIN_LOADING = 'LOGIN_LOADING',\n  LOGIN_SUCCESS = 'LOGIN_SUCCESS',\n  LOGIN_ERROR = 'LOGIN_ERROR',\n  LOGIN_RESET = 'LOGIN_RESET',\n}\n\n// \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f \u0441\u0442\u0435\u0439\u0442\u0430\nexport type TLoginState = {\n  isLoginLoading: boolean;\n  isLoginSuccess: boolean;\n  isLoginError: boolean;\n};\n\n// \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f \u044d\u043a\u0448\u0435\u043d\u043e\u0432\nexport type TLoginLoadingAction = {\n  type: LoginActionTypes.LOGIN_LOADING;\n  payload: boolean;\n};\n\nexport type TLoginSuccessAction = {\n  type: LoginActionTypes.LOGIN_SUCCESS;\n};\n\nexport type TLoginErrorAction = {\n  type: LoginActionTypes.LOGIN_ERROR;\n};\n\nexport type TLoginResetAction = {\n  type: LoginActionTypes.LOGIN_RESET;\n};\n\n// \u044d\u043a\u0441\u043f\u043e\u0440\u0442 \u0432\u0441\u0435\u0445 \u0442\u0438\u043f\u043e\u0432 \u044d\u043a\u0448\u0435\u043d\u043e\u0432\nexport type TLoginActions =\n  | TLoginLoadingAction\n  | TLoginSuccessAction\n  | TLoginErrorAction\n  | TLoginResetAction;\n\n")),(0,s.kt)("h3",{id:"storeloginloginactioncreatorsts"},"store/login/login.actionCreators.ts"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import Cookies from 'js-cookie';\nimport { Dispatch } from 'redux';\n\nimport {\n  LoginActionTypes,\n  TLoginActions,\n  TLoginErrorAction,\n  TLoginLoadingAction,\n  TLoginResetAction,\n  TLoginSuccessAction,\n} from './login.types';\nimport {\n  TLoginValues,\n  loginService,\n  // loginService2,\n} from '../../api/services/login-sevice';\nimport {\n  saveUserData,\n  setAlertMessage,\n  setScreen,\n} from '../app/app.actionCreators';\nimport {\n  AppScreens,\n  TSaveUserDataAction,\n  TSetAlertMessageAction,\n  TSetScreenAction,\n} from '../app/app.types';\nimport { Statuses } from '@/types/common';\n\n// loginLoading\nexport const loginLoading = (payload: boolean): TLoginLoadingAction => ({\n  type: LoginActionTypes.LOGIN_LOADING,\n  payload,\n});\n\n// loginSuccess\nexport const loginSuccess = (): TLoginSuccessAction => ({\n  type: LoginActionTypes.LOGIN_SUCCESS,\n});\n\n// loginError\nexport const loginError = (): TLoginErrorAction => ({\n  type: LoginActionTypes.LOGIN_ERROR,\n});\n\n// loginReset\nexport const loginReset = (): TLoginResetAction => ({\n  type: LoginActionTypes.LOGIN_RESET,\n});\n\n// loginThunk - THEN-CATCH variant\nexport function loginThunk(loginData: TLoginValues) {\n  return (\n    // all types of actions inside\n    dispatch: Dispatch<\n      | TLoginActions\n      | TSetAlertMessageAction\n      | TSetScreenAction\n      | TSaveUserDataAction\n    >,\n  ) => {\n    // loading\n    dispatch(loginLoading(true));\n\n    loginService\n      // LOGIN REQUEST\n      .logIn(loginData)\n\n      // ========= LOGIN SUCCESS ========= //\n      .then(res => {\n        dispatch(loginSuccess());\n\n        // save userData to store\n        dispatch(saveUserData(res.data));\n\n        // save userData to localStorage\n        localStorage.setItem(\n          'pickup-points-userdata',\n          JSON.stringify(res.data),\n        );\n\n        // save userData to cookies\n        Cookies.set('pickup-points-userdata', JSON.stringify(res.data));\n\n        // success alert\n        dispatch(\n          setAlertMessage({\n            message: `Login success`,\n            status: Statuses.success,\n          }),\n        );\n\n        // redirect after 1500\n        setTimeout(() => {\n          dispatch(loginLoading(false));\n          dispatch(setScreen(AppScreens.DASHBOARD));\n        }, 1500);\n      })\n\n      // ========= LOGIN ERROR ========= //\n      .catch(error => {\n        dispatch(loginError());\n        dispatch(loginLoading(false));\n\n        // error alert\n        dispatch(\n          setAlertMessage({ message: `${error}`, status: Statuses.danger }),\n        );\n      });\n  };\n}\n\n// loginThunk2 - ASYNC-AWAIT variant\nexport function loginThunk2(loginData: TLoginValues) {\n  return async (\n    dispatch: Dispatch<\n      | TLoginActions\n      | TSetAlertMessageAction\n      | TSetScreenAction\n      | TSaveUserDataAction\n    >,\n  ) => {\n    dispatch(loginLoading(true));\n\n    // login reauest\n    const response = await loginService.logIn(loginData);\n\n    // ========= LOGIN SUCCESS ========= //\n    if (response.status === 200) {\n      const responseSuccessData = response.data;\n\n      // save userData to store\n      dispatch(saveUserData(responseSuccessData));\n\n      // save userData to localStorage\n      localStorage.setItem(\n        'pickup-points-userdata',\n        JSON.stringify(responseSuccessData),\n      );\n\n      // save userData to cookies\n      Cookies.set(\n        'pickup-points-userdata',\n        JSON.stringify(responseSuccessData),\n      );\n\n      // success alert\n      dispatch(\n        setAlertMessage({\n          message: `Login success`,\n          status: Statuses.success,\n        }),\n      );\n\n      // redirect after 1500\n      setTimeout(() => {\n        dispatch(loginLoading(false));\n        dispatch(setScreen(AppScreens.DASHBOARD));\n      }, 1500);\n\n      // ========= LOGIN ERROR ========= //\n    } else {\n      dispatch(loginError());\n      dispatch(loginLoading(false));\n\n      // error alert\n      dispatch(\n        setAlertMessage({ message: `${response}`, status: Statuses.danger }),\n      );\n\n      // error data\n      // const responseErrorData = response.response.data;\n    }\n  };\n}\n\n")),(0,s.kt)("h3",{id:"httpclient"},"httpClient"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { API_URL } from './apiUrl';\nimport axios from 'axios';\nimport { testStore } from '../store-redux-classic';\n\nconst httpClient = axios.create({\n  baseURL: API_URL,\n\n  headers: {\n    // inject userToken --\x3e get token value from store\n    Authorization: testStore.getState().app.userData.token,\n  },\n});\n\nexport default httpClient;\n\n")),(0,s.kt)("h3",{id:"loginservice"},"../loginService"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { AxiosResponse } from 'axios';\nimport httpClient from '../httpClient';\n\nexport type TLoginValues = {\n  username: string;\n  password: string;\n};\n\n// THEN-CATCH variant\nexport const loginService = {\n  // logIn\n  logIn(loginValues: TLoginValues): Promise<AxiosResponse> {\n    const { username, password } = loginValues;\n\n    return (\n      httpClient.post(`auth/login`, { username, password })\n\n        // logIn error\n        .catch(error => error)\n    );\n  },\n};\n")),(0,s.kt)("h3",{id:"how-to-use-inside-component"},"How to use inside component"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"// import store hooks\nimport { useActions } from '../../../store-redux-classic/actions';\nimport { useTypedSelector } from '../../../store-redux-classic';\n\n...\n\nconst { isLoginLoading } = useTypedSelector(state => state.login);\nconst { loginThunk } = useActions();\n\n...\n\nonSubmit: (values: TLoginFormValues) => {\n  const { username, password } = values;\n\n  loginThunk2({ username, password });\n\n},\n")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"mobx"},"MobX"),(0,s.kt)("p",null,"TODO"),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"context"},"Context"),(0,s.kt)("p",null,"TODO - useContext()-\u0445\u0443\u043a"),(0,s.kt)("hr",null))}u.isMDXComponent=!0}}]);