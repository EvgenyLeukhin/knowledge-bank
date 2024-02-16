"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[4214],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(k,s(s({ref:t},i),{},{components:n})):a.createElement(k,s({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8285:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"state",sidebar_position:0},s=void 0,l={unversionedId:"frontend/react/hooks/state",id:"frontend/react/hooks/state",title:"state",description:"\u0418\u0437\u043c\u0435\u043d\u043d\u0435\u0438\u0435 \u0438 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0432\u043d\u0443\u0442\u0440\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432.",source:"@site/docs/frontend/react/4-hooks/0-state.md",sourceDirName:"frontend/react/4-hooks",slug:"/frontend/react/hooks/state",permalink:"/knowledge-bank/docs/frontend/react/hooks/state",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/react/4-hooks/0-state.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"state",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\u0420\u043e\u0443\u0442\u0438\u043d\u0433 -",permalink:"/knowledge-bank/docs/frontend/react/routing"},next:{title:"effect",permalink:"/knowledge-bank/docs/frontend/react/hooks/effect"}},u={},c=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 useState",id:"\u043f\u0440\u0438\u043c\u0435\u0440-usestate",level:2},{value:"prevState",id:"prevstate",level:2},{value:"\u041f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0432 setState",id:"\u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0430-\u043e\u0431\u044a\u0435\u043a\u0442\u0430-\u0432-setstate",level:2},{value:"\u0422\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f setState \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0435 \u0432 props",id:"\u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f-setstate-\u043f\u0440\u0438-\u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0435-\u0432-props",level:2},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0431\u0449\u0435\u0433\u043e state-\u043e\u0431\u044a\u0435\u043a\u0442\u0430",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u043e\u0431\u0449\u0435\u0433\u043e-state-\u043e\u0431\u044a\u0435\u043a\u0442\u0430",level:2}],i={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u0418\u0437\u043c\u0435\u043d\u043d\u0435\u0438\u0435 \u0438 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0432\u043d\u0443\u0442\u0440\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432."),(0,r.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-usestate"},"\u041f\u0440\u0438\u043c\u0435\u0440 useState"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState } from 'react';\n...\nconst [count, setCount] = useState<number>(0);\n...\n<button onClick={() => setCount(count + 1)}>Change count</button>\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"prevstate"},"prevState"),(0,r.kt)("p",null,"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 setState, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439 state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState } from 'react';\n...\nconst [count, setCount] = useState(0);\n\nconst onButtonClick = () => {\n  setCount(count + 1);\n\n  // \u0438\u0434\u0435\u043d\u0442\u0438\u0447\u043d\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c \u0441 prevState\n  setCount(prevState => prevState + 1);\n}\n...\n<button onClick={onButtonClick}>Change count</button>\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0430-\u043e\u0431\u044a\u0435\u043a\u0442\u0430-\u0432-setstate"},"\u041f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0432 setState"),(0,r.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043e\u0434\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"setGameState((prevState: TPandaGameState) => {\n  return {\n    ...prevState,\n    gameStatus: 'take-cards',\n  };\n});\n\n// \u043a\u043e\u0440\u043e\u0442\u043a\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c\nsetGameState((prevState: TPandaGameState) => ({\n  ...prevState,\n  gameStatus: 'take-cards',\n}));\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f-setstate-\u043f\u0440\u0438-\u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0435-\u0432-props"},"\u0422\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f setState \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0435 \u0432 props"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"type TProps = {\n  // \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e React.Dispatch\n  setGameState: React.Dispatch<React.SetStateAction<TPandaGameState>>;\n\n  // \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u0438\n  setGameState: (val: TPandaGameState) => void;\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u043e\u0431\u0449\u0435\u0433\u043e-state-\u043e\u0431\u044a\u0435\u043a\u0442\u0430"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0431\u0449\u0435\u0433\u043e state-\u043e\u0431\u044a\u0435\u043a\u0442\u0430"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u0412\u043c\u0435\u0441\u0442\u043e \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u043e\u0434\u0438\u043d\u043e\u0447\u043d\u044b\u0445 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0439, \u043d\u0430 \u043f\u043e\u0434\u043e\u0431\u0438\u0435 \u043a\u0430\u043a \u0431\u044b\u043b\u043e \u0432 \u043a\u043b\u0430\u0441\u0441\u043e\u0432\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u0445;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"initialState")," \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0434\u0430\u0436\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044e, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435;"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState } from 'react';\n\n// \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f state\ntype TState = {\n  value1: number;\n  value2: boolean;\n  value3: string[];\n};\n\nconst initialState: TState = {\n  value1: 1,\n  value2: false,\n  value3: ['a', 'b', 'c'],\n}\n\nconst [state, setState] = useState<TState>(initialState);\n\n...\n\nconst onButtonClick = () => {\n  setState({\n    // or need to add all prev state values\n    ...state, \n\n    value1: 2,\n    value2: true,\n    value3: ['a'],\n  });\n};\n...\n")))}p.isMDXComponent=!0}}]);