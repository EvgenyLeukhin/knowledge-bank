"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[5534],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),i=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=i(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(t),m=r,S=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(S,s(s({ref:n},u),{},{components:t})):a.createElement(S,s({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var i=2;i<o;i++)s[i]=t[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6790:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=t(7462),r=(t(7294),t(3905));const o={title:"context",sidebar_position:4},s=void 0,l={unversionedId:"frontend/react/archive/hooks/context",id:"frontend/react/archive/hooks/context",title:"context",description:"- \u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c state \u043d\u0430 \u043b\u044e\u0431\u043e\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c, \u0447\u0442\u043e-\u0442\u043e \u0432\u0440\u043e\u0434\u0435 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u043e\u0433\u043e redux \u0432 react",source:"@site/docs/frontend/react/88-archive/1-hooks/4-context.md",sourceDirName:"frontend/react/88-archive/1-hooks",slug:"/frontend/react/archive/hooks/context",permalink:"/knowledge-bank/docs/frontend/react/archive/hooks/context",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/react/88-archive/1-hooks/4-context.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"context",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"memo & callback",permalink:"/knowledge-bank/docs/frontend/react/archive/hooks/memo-callback"},next:{title:"history, params",permalink:"/knowledge-bank/docs/frontend/react/archive/hooks/history, params"}},c={},i=[{value:"1 \u0448\u0430\u0433 - \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u043f\u0443\u0441\u0442\u043e\u0439 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442",id:"1-\u0448\u0430\u0433---\u0441\u043e\u0437\u0434\u0430\u0435\u043c-\u043f\u0443\u0441\u0442\u043e\u0439-\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442",level:3},{value:"2 \u0448\u0430\u0433 - \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u043a \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e, \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c \u043a useState",id:"2-\u0448\u0430\u0433---\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c-\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442-\u043a-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435-\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430-\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c-\u043a-usestate",level:3},{value:"3 \u0448\u0430\u0433 - \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u0432\u043d\u0443\u0442\u0440\u0438 \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0432 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440",id:"3-\u0448\u0430\u0433---\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c-\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442-\u0432\u043d\u0443\u0442\u0440\u0438-\u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0445-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432-\u0432-\u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440",level:3},{value:"\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u0441\u0431\u043e\u043b\u044c\u0448\u0438\u043c \u043a\u043e\u043b-\u0432\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 children",id:"\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442-\u0441\u0431\u043e\u043b\u044c\u0448\u0438\u043c-\u043a\u043e\u043b-\u0432\u043e\u043c-\u0434\u0430\u043d\u043d\u044b\u0445-\u0441-children",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0441\u043e\u043c\u043e\u043f\u0438\u0441\u043d\u043e\u0433\u043e provider \u0438\u0437 Fun chat",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0441\u043e\u043c\u043e\u043f\u0438\u0441\u043d\u043e\u0433\u043e-provider-\u0438\u0437-fun-chat",level:2}],u={toc:i};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c ",(0,r.kt)("inlineCode",{parentName:"li"},"state")," \u043d\u0430 \u043b\u044e\u0431\u043e\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c, \u0447\u0442\u043e-\u0442\u043e \u0432\u0440\u043e\u0434\u0435 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u043e\u0433\u043e ",(0,r.kt)("inlineCode",{parentName:"li"},"redux")," \u0432 ",(0,r.kt)("inlineCode",{parentName:"li"},"react")),(0,r.kt)("li",{parentName:"ul"},"\u041c\u043e\u0436\u043d\u043e \u0438\u0437\u0431\u0430\u0432\u0438\u0442\u044c\u0441\u044f \u043e\u0442 ",(0,r.kt)("inlineCode",{parentName:"li"},"property drilling")),(0,r.kt)("li",{parentName:"ul"},"\u0412\u043d\u0443\u0442\u0440\u044c \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430 \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0432\u0441\u0451 \u0447\u0442\u043e \u0443\u0433\u043e\u0434\u043d\u043e (\u043f\u0440\u0438\u043c\u0438\u0442\u0438\u0432\u044b, \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u043e\u0431\u044a\u0435\u043a\u0442\u044b).")),(0,r.kt)("h3",{id:"1-\u0448\u0430\u0433---\u0441\u043e\u0437\u0434\u0430\u0435\u043c-\u043f\u0443\u0441\u0442\u043e\u0439-\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442"},"1 \u0448\u0430\u0433 - \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u043f\u0443\u0441\u0442\u043e\u0439 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { createContext } from 'react';\n\nexport type TUserData = {\n  name: string;\n  surname: string;\n  age?: number;\n};\n\nexport const UserContext = createContext<TUserData>({\n  name: '',\n  surname: '',\n  age: undefined,\n});\n")),(0,r.kt)("h3",{id:"2-\u0448\u0430\u0433---\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c-\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442-\u043a-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435-\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430-\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c-\u043a-usestate"},"2 \u0448\u0430\u0433 - \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u043a \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e, \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c \u043a useState"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { UserContext } from './UserContext';\n\nconst App = () => {\n  const [personData, setPersonData] = useState<TUserData>({\n    name: 'Default Username',\n    surname: 'Default Surname',\n    age: null,\n  });\n\n  return (\n    <UserContext.Provider value={personData}>\n      <button\n        onClick={() =>\n          setPersonData({\n            name: 'Jack',\n            surname: 'Corbell',\n            age: 35,\n          })\n        }\n      >\n        Change UserContext\n      </button>\n\n      <SomeComponent />\n    </UserContext.Provider>\n  )\n}\n")),(0,r.kt)("h3",{id:"3-\u0448\u0430\u0433---\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c-\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442-\u0432\u043d\u0443\u0442\u0440\u0438-\u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0445-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432-\u0432-\u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440"},"3 \u0448\u0430\u0433 - \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u0432\u043d\u0443\u0442\u0440\u0438 \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0432 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440"),(0,r.kt)("p",null,"\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0434\u043e\u0441\u0442\u0443\u043f \u043a personData \u0447\u0435\u0440\u0435\u0437 \u0445\u0443\u043a ",(0,r.kt)("inlineCode",{parentName:"p"},"useContext"),". \u041f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 personData, \u0434\u0430\u043d\u043d\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u0432\u043d\u0443\u0442\u0440\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430."),(0,r.kt)("p",null,"\u041e\u0431\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u043c \u0432 ",(0,r.kt)("inlineCode",{parentName:"p"},"<Provider />"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useContext } from 'react';\nimport { UserContext } from './UserContext';\n\nexport default function SomeComp() {\n  const personData = useContext(UserContext);\n  const { name, surname, age } = personData;\n\n  return (\n    <ul>\n      <li>{`name: ${name}`}</li>\n      <li>{`surname: ${surname}`}</li>\n      <li>{`age: ${age}`}</li>\n    </ul>\n  );\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442-\u0441\u0431\u043e\u043b\u044c\u0448\u0438\u043c-\u043a\u043e\u043b-\u0432\u043e\u043c-\u0434\u0430\u043d\u043d\u044b\u0445-\u0441-children"},"\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u0441\u0431\u043e\u043b\u044c\u0448\u0438\u043c \u043a\u043e\u043b-\u0432\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 children"),(0,r.kt)("p",null,"\u041f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u0438 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0439 \u043f\u043e \u0432\u0441\u0435\u043c\u0443 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { FC, PropsWithChildren, useContext } from 'react';\n\n// \u0442\u0438\u043f\u0438\u0437\u0438\u0440\u0443\u0435\u043c \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\ninterface IContextValue {\n  isActive: boolean;\n  isSocketConnected: boolean;\n  isSocketClose: boolean;\n  isSocketError: boolean;\n  callData: CallData | null;\n  historyCalls: History | null;\n  statusCalls: CallStatus | null;\n  userState: UserState | null;\n  setIsActive: (value: boolean) => void;\n  onConnect: () => void;\n  onDisconnect: () => void;\n  onCreateNewCall: (callData: string) => void;\n  onChangeStatus: (statusData: {}) => void;\n  onChangeTypeCall: (callReason: string, callTheme: string) => void;\n  onChangeRecordSurvey: (callReason: string, callTheme: string, idFromHistory: string) => void;\n  onCreateTrans: (callData: string) => void;\n  onCreateTransSuccess: (phoneNumber: string, idFromHistory: string) => void;\n  handleMakeTransfer: () => void;\n  handleMute: () => void;\n  handleEndProcessing: () => void;\n  handleAnwser: () => void;\n  handleHold: () => void;\n  handleHangup: () => void;\n}\n\n// \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\nexport const SocketContext = createContext<IContextValue>({\n  isActive: false,\n  isSocketConnected: false,\n  isSocketError: false,\n  isSocketClose: false,\n  callData: null,\n  historyCalls: null,\n  statusCalls: null,\n  userState: null,\n  setIsActive: () => {},\n  onConnect: () => {},\n  onDisconnect: () => {},\n  onCreateNewCall: () => {},\n  onChangeStatus: () => {},\n  onChangeTypeCall: () => {},\n  onChangeRecordSurvey: () => {},\n  onCreateTrans: () => {},\n  onCreateTransSuccess: () => {},\n  handleMakeTransfer: () => {},\n  handleMute: () => {},\n  handleEndProcessing: () => {},\n  handleAnwser: () => {},\n  handleHold: () => {},\n  handleHangup: () => {}\n});\n\n// \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\nexport const SocketProvider: FC<PropsWithChildren<object>> = ({ children }) => {\n  // \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f\n  const socket: MutableRefObject<WebSocket | null> = useRef(null);\n  const [isActive, setIsActive] = useState<boolean>(false);\n  const [isConnected, setIsConnected] = useState(false);\n  const [isClose, setIsClose] = useState(false);\n  const [isSocketError, setIsSocketError] = useState(false);\n  const [callData, setCallData] = useState<CallData | null>(null);\n  const [historyCalls, setHistory] = useState<History | null>(null);\n  const [statusCalls, setStatus] = useState<CallStatus | null>(null);\n  const [userState, setUserState] = useState<UserState | null>(null);\n\n  // \u043c\u0435\u0442\u043e\u0434\u044b\n  function connect() { ... }\n  function handleDisconnect() { ... }\n  function handleMute() { ... }\n  function handleEndProcessing() { ... }\n  function handleHold() { ... }\n  function handleHangup() { ... }\n  function handleAnwser() { ... }\n  function handleMakeTransfer() { ... }\n  function handleMakeTransferNumb() { ... }\n  function handleMakeTransferSuccessNumb() { ... }\n  function handleMakeCall() { ... }\n  function handleChangeStatus() { ... }\n  function handleChangeTypeAppeal() { ... }\n  function handleRecordSurvey() { ... }\n  function handleEndCall() { ... }\n  function handleRecordSurvey() { ... }\n  function handleRecordSurvey() { ... }\n  function handleRecordSurvey() { ... }\n\n  // \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440 \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u043c\u0435\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c \u0438\u0437 \u0441\u0442\u0435\u0439\u0442\u043e\u0432 \u043c \u043c\u0435\u0442\u043e\u0434\u043e\u0432\n  return (\n    <SocketContext.Provider\n      value={{\n        isActive,\n        isSocketConnected: isConnected,\n        isSocketClose: isClose,\n        onConnect: connect,\n        isSocketError: isSocketError,\n        onDisconnect: handleDisconnect,\n        onCreateNewCall: handleMakeCall,\n        onChangeStatus: handleChangeStatus,\n        onCreateTrans: handleMakeTransferNumb,\n        onCreateTransSuccess: handleMakeTransferSuccessNumb,\n        onChangeTypeCall: handleChangeTypeAppeal,\n        onChangeRecordSurvey: handleRecordSurvey,\n        handleMakeTransfer,\n        setIsActive,\n        callData,\n        historyCalls,\n        statusCalls,\n        userState,\n        handleMute,\n        handleEndProcessing,\n        handleAnwser,\n        handleHold,\n        handleHangup\n      }}\n    >\n      {children}\n    </SocketContext.Provider>\n  );\n}\n\n// \u0448\u043e\u0442\u043a\u0430\u0442 \u0434\u043b\u044f \u0438\u043c\u043f\u043e\u0440\u0442\u0430\nexport const useSocket = () => useContext(SocketContext);\n\n\n// \u043e\u0431\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\n...\n  <SocketProvider>\n    <App />\n  </SocketProvider>\n...\n\n// \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0435\n...\nimport { useSocket } from '@pages/Telephony/WebSocketProvider';\nconst { userState } = useSocket();\n...\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0441\u043e\u043c\u043e\u043f\u0438\u0441\u043d\u043e\u0433\u043e-provider-\u0438\u0437-fun-chat"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0441\u043e\u043c\u043e\u043f\u0438\u0441\u043d\u043e\u0433\u043e provider \u0438\u0437 Fun chat"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u0421\u043e\u0437\u0434\u0430\u0435\u043c \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440 ",(0,r.kt)("inlineCode",{parentName:"li"},"useGuessMeProvider"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u0447\u0442\u043e-\u0442\u043e \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c \u043f\u0440\u0438 \u043a\u0430\u043a\u0438\u0435-\u043b\u0438\u0431\u043e \u0434\u0430\u043d\u043d\u044b\u0435.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// useGuessMeProvider\nimport { IRoomPlayer, PLAYER_STATE } from '@store/room/roomSlice';\nimport { useAppSelector } from '@app/hooks';\nimport { defaultGameState, initialMapState } from './guessMe.types';\nimport { PLAYER_STATUS } from '@src/common/constants/system';\nimport { selectRoomPlayers } from '@store/room/roomSlice';\nimport { selectPlayerId } from '@store/reducers/player.reducer';\nimport { useState, useEffect } from 'react';\nimport { GuessMeState } from '@src/shared/gameInterfaces/guessMe.socket';\nimport { simpleMerge } from '@src/common/generics';\nimport WSClient from '@src/sockets';\nimport { CLIENT_EVENTS, SERVER_EVENTS } from '@src/shared/socketEvents/eventTypes';\n\ninterface GuessMeData {\n  data: {\n    guessMe: GuessMeState;\n  };\n}\n\nexport const useGuessMeProvider = (roomId: string) => {\n  const [state, setState] = useState<GuessMeState>(defaultGameState);\n  const players = useAppSelector(selectRoomPlayers);\n  const playerId = useAppSelector(selectPlayerId);\n  const isActivePlayer = playerId === state.activePlayerId;\n  const currentPlayer = players.find((player) => player.playerId === playerId) || ({} as IRoomPlayer);\n  const isSpectator = currentPlayer ? currentPlayer.state !== PLAYER_STATE.GAME : true;\n  const stateMatcher = { ...initialMapState, [state.gameState]: true };\n\n  useEffect(() => {\n    const updateState = ({ data }: GuessMeData) => setState(simpleMerge(state, data.guessMe));\n\n    WSClient.on(SERVER_EVENTS.ROOM_STATE_UPDATED, updateState);\n    WSClient.on(SERVER_EVENTS.GAME_STATE_UPDATED, updateState);\n\n    WSClient.emit(CLIENT_EVENTS.GAME_STATE_REQUESTED, { roomId });\n\n    return () => {\n      WSClient.off(SERVER_EVENTS.GAME_STATE_UPDATED, updateState);\n      WSClient.off(SERVER_EVENTS.ROOM_STATE_UPDATED, updateState);\n    };\n  }, []);\n\n  const setVote = (answerIndex: number) => setState(simpleMerge(state, {}));\n  const setReady = () => setState(simpleMerge(state, {}));\n  const setPreVote = (answerIndex: number) => setState(simpleMerge(state, {}));\n\n  return [\n    stateMatcher,\n    { ...state, state: stateMatcher },\n    playerId,\n    players,\n    { setVote, setReady, setPreVote },\n    isActivePlayer,\n    isSpectator,\n  ] as const;\n};\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u0421\u043e\u0437\u0434\u0430\u0435\u043c \u0445\u0443\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0437\u0430\u0431\u0438\u0440\u0430\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u0441 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0430 \u0438 \u0434\u0430\u043b\u044c\u0448\u0435 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0438\u0445 \u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u0435.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// useGameHook\nimport { GameTypes } from '@src/common/constants/common';\nimport WSClient from '@src/sockets';\nimport { useEffect } from 'react';\nimport { useGuessMeProvider } from './guessMeProvider';\n// import { setVotedFor, setReadyNextRound } from '@store/reducers/guessMe';\nimport { useDispatch } from 'react-redux';\nimport { CLIENT_EVENTS } from '@shared/socketEvents/eventTypes';\nimport { PlayerStatus, PLAYER_STATUS } from '@src/common/constants/system';\nimport { updatePlayerState } from '@store/room/roomSlice';\nimport { updateGuessMeLabelsThunk } from './guessMe.labels';\nimport { sendRoundStarted } from '@services/analyticsThunk';\nimport { endGameEvent } from '@src/common/sendEvents';\nimport { useAppDispatch } from '@src/app/hooks';\n\nconst useGameHook = (roomId: string) => {\n  const dispatch = useAppDispatch();\n  const [state, game, playerId, players, storeActions, isActivePlayer, isSpectator] = useGuessMeProvider(roomId);\n\n  useEffect(() => {\n    dispatch(updateGuessMeLabelsThunk(game));\n  }, [game]);\n\n  useEffect(() => {\n    if (state.READY_START_ROUND) {\n      dispatch(sendRoundStarted(game.roundNumber.toString()));\n    }\n  }, [state.READY_START_ROUND]);\n\n  return {\n    state,\n    game,\n    playerId,\n    players,\n    isActivePlayer,\n    isSpectator,\n    actions: {\n      onSpin: () => {\n        WSClient.emit(CLIENT_EVENTS.ROUND_STARTED, {\n          roomId,\n          activeGameId: game.activeGameId,\n          gameType: GameTypes.GUESS_ME,\n        });\n      },\n\n      onPreVote: (value: number) => {\n        storeActions.setPreVote(value);\n        WSClient.emit(CLIENT_EVENTS.PLAYER_PRE_VOTED, {\n          roomId,\n          activeGameId: game.activeGameId,\n          playerId,\n          value,\n        });\n      },\n\n      onVote: (value: number) => {\n        storeActions.setVote(value);\n        WSClient.emit(CLIENT_EVENTS.PLAYER_VOTED, {\n          roomId,\n          activeGameId: game.activeGameId,\n          playerId,\n          value,\n        });\n      },\n\n      onNext: () => {\n        storeActions.setReady();\n        WSClient.emit(CLIENT_EVENTS.PLAYER_READY, {\n          roomId,\n          activeGameId: game.activeGameId,\n          playerId,\n        });\n      },\n\n      onGameQuit: () => {\n        // dispatch(updatePlayerState(playerId, PLAYER_STATUS.READY_TO_QUIT_GAME as PlayerStatus));\n        endGameEvent(roomId, playerId, GameTypes.GUESS_ME);\n      },\n    },\n  };\n};\n\nexport { useGameHook };\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u0417\u0430\u0431\u0438\u0440\u0430\u0435\u043c \u0432\u0441\u0435 \u044d\u0442\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u0440\u0438 \u0432\u044b\u0437\u043e\u0432\u0435 \u044d\u0442\u043e\u0433\u043e \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u0445\u0443\u043a\u0430 \u0432 \u043b\u044e\u0431\u043e\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0435.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0435 \nimport { useGameHook } from './guessMe.hook';\n...\nconst { state, game, playerId, actions, players, isActivePlayer, isSpectator } = useGameHook(roomId);\nconst { onSpin, onPreVote, onVote, onNext, onGameQuit } = actions;\n")))}d.isMDXComponent=!0}}]);