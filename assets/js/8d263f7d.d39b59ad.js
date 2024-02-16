"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[9711],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),d=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=d(e.components);return n.createElement(a.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,f=u["".concat(a,".").concat(m)]||u[m]||l[m]||i;return t?n.createElement(f,s(s({ref:r},p),{},{components:t})):n.createElement(f,s({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=u;var c={};for(var a in r)hasOwnProperty.call(r,a)&&(c[a]=r[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var d=2;d<i;d++)s[d]=t[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1553:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=t(7462),o=(t(7294),t(3905));const i={title:"Provider \u0438 store \u2713",sidebar_position:1},s=void 0,c={unversionedId:"frontend/react/redux/provider",id:"frontend/react/redux/provider",title:"Provider \u0438 store \u2713",description:"Provider",source:"@site/docs/frontend/react/5-redux/1-provider.md",sourceDirName:"frontend/react/5-redux",slug:"/frontend/react/redux/provider",permalink:"/knowledge-bank/docs/frontend/react/redux/provider",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/react/5-redux/1-provider.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Provider \u0438 store \u2713",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u2713",permalink:"/knowledge-bank/docs/frontend/react/redux/install"},next:{title:"\u0421\u043b\u0430\u0439\u0441\u044b \u2713",permalink:"/knowledge-bank/docs/frontend/react/redux/slices"}},a={},d=[{value:"Provider",id:"provider",level:2},{value:"Store",id:"store",level:2},{value:"Persist",id:"persist",level:2},{value:"Persist Provider",id:"persist-provider",level:2}],p={toc:d};function l(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"provider"},"Provider"),(0,o.kt)("p",null,"\u041d\u0443\u0436\u043d\u043e \u043e\u0431\u0435\u0440\u043d\u0443\u0442\u044c \u0432\u0441\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0432 Provider, \u0447\u0442\u043e\u0431\u044b redux \u0438\u043c\u0435\u043b \u0434\u043e\u0441\u0442\u0443\u043f \u043a\u043e \u0432\u0441\u0435\u043c\u0443 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport { render } from 'react-dom';\nimport { Provider } from 'react-redux';\n\nimport App from './App';\nimport { store } from './store';\n\nconst rootElement = document.getElementById('root');\n\nrender(\n  <Provider store={store}>\n    <App />\n  </Provider>,\n\n  rootElement\n);\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"store"},"Store"),(0,o.kt)("p",null,"\u0422\u043e\u0447\u043a\u0430 \u0432\u0445\u043e\u0434\u0430 \u0432\u0441\u0435\u0445 \u0440\u0435\u0434\u044c\u044e\u0441\u0435\u0440\u043e\u0432."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { configureStore, bindActionCreators } from '@reduxjs/toolkit';\nimport { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';\nimport { api } from './api/api';\n\n// \u0432 \u0433\u043b\u0430\u0432\u044b\u043d\u044b\u0439 reducer \u0441\u0442\u043e\u0440\u0430 \u0432\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0432\u0441\u0435 reducer-\u044b \u0441\u043b\u0430\u0439\u0441\u043e\u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\nexport const store = configureStore({\n  // root reducer\n  reducer: {\n    slice1: slice1.reducer,\n    slice2: slice2.reducer,\n    ...,\n    sliceN: sliceN.reducer,\n\n    // create api slice\n    [api.reducerPath]: api.reducer,\n  },\n});\n\n// \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f \u0432\u0441\u0435\u0433\u043e \u0441\u0442\u0435\u0439\u0442\u0430\nexport type RootState = ReturnType<typeof storeToolkit2.getState>;\n\n// \u0445\u0443\u043a, \u043a\u043e\u0442\u043e\u0440\u0432\u044b\u0439 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0432\u0435\u0441\u044c store (\u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u043d\u0443\u0442\u0440\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432)\nexport const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;\n\n// \u0445\u0443\u043a, \u043a\u043e\u0442\u043e\u0440\u0432\u044b\u0439 \u0445\u0440\u0430\u043d\u0438\u0442 \u0432\u0441\u0435 \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0435 \u044d\u043a\u0448\u0435\u043d\u044b (\u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u043d\u0443\u0442\u0440\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432)\nexport const useSyncActions = () => {\n  const dispatch = useDispatch();\n\n  return bindActionCreators({\n    // \u0438\u043c\u043f\u043e\u0440\u0442 \u0432\u0441\u0435\u0445 \u044d\u043a\u0448\u0435\u043d\u043e\u0432 \u0438 \u0440\u0435\u0434\u044c\u044e\u0441\u0435\u0440\u043e\u0432\n    ...slice1.actions,\n    ...slice2.actions,\n    ...,\n    ...sliceN.actions,\n    }, dispatch);\n};\n\n// \u0434\u043e\u043f. \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f \n// export type AppStore = ReturnType<typeof store> as any;\n// export type AppDispatch = AppStore['dispatch'];\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"persist"},"Persist"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { combineReducers, configureStore } from '@reduxjs/toolkit';\nimport storage from 'redux-persist/lib/storage';\nimport { persistReducer } from 'redux-persist';\n\n// reducers\nimport reducer1 from '@store/reducer1';\nimport reducer2 from '@store/reducer2';\n...\nimport reducerN from '@store/reducerN';\n\n\nconst reducers = combineReducers({\n  reducer1,\n  reducer2,\n  ...\n  reducerN,\n});\n\nconst persistConfig = {\n  key: 'root',\n  timeout: 2000,\n  version: 1,\n\n  // \u0441\u043f\u0438\u0441\u043e\u043a \u0440\u0435\u0434\u044c\u044e\u0441\u0435\u0440\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c\n  whitelist: ['reducer1', 'reducer2'],\n  storage\n};\n\nconst persistedReducer = persistReducer(persistConfig, reducers);\n\nconst store = configureStore({\n  reducer: persistedReducer,\n  devTools: process.env.NODE_ENV !== 'production',\n  middleware: getDefaultMiddleware =>\n    getDefaultMiddleware({\n      serializableCheck: false\n    })\n});\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"persist-provider"},"Persist Provider"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { FC, ReactElement } from \"react\";\nimport { PersistGate } from 'redux-persist/integration/react';\nimport { persistStore } from 'redux-persist';\nimport store from '@store/index';\nimport { Provider } from 'react-redux';\nimport { Preloader } from \"@npm-registry/eapteka-ui\";\n\nexport const AppReduxProvider: FC<{\n  children: ReactElement;\n}> = ({ children }) => {\n  return (\n    <Provider store={store}>\n      <PersistGate\n        loading={<Preloader position='center' size='l'/> }\n        persistor={persistStore(store)}\n      >\n        {children}\n      </PersistGate>\n    </Provider>\n  );\n};\n")))}l.isMDXComponent=!0}}]);