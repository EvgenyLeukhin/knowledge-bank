"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[6271],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=s(n),d=l,k=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(k,u(u({ref:t},c),{},{components:n})):a.createElement(k,u({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,u=new Array(o);u[0]=m;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:l,u[1]=r;for(var s=2;s<o;s++)u[s]=n[s];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var a=n(7462),l=(n(7294),n(3905));const o={title:"\u0425\u0443\u043a\u0438 +--",sidebar_position:6},u=void 0,r={unversionedId:"frontend/react/hooks",id:"frontend/react/hooks",title:"\u0425\u0443\u043a\u0438 +--",description:"- \u0425\u0443\u043a\u0438 - \u044d\u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043e\u043d\u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u043b\u0438;",source:"@site/docs/frontend/react/hooks.md",sourceDirName:"frontend/react",slug:"/frontend/react/hooks",permalink:"/knowledge-bank/docs/frontend/react/hooks",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/react/hooks.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"\u0425\u0443\u043a\u0438 +--",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"REST API \u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u044b ---",permalink:"/knowledge-bank/docs/frontend/react/api"},next:{title:"TypeScript \u0432 React ---",permalink:"/knowledge-bank/docs/frontend/react/typescript"}},i={},s=[{value:"useState()",id:"usestate",level:2},{value:"\u041e\u0434\u0438\u043d\u043e\u0447\u043d\u044b\u0439 state",id:"\u043e\u0434\u0438\u043d\u043e\u0447\u043d\u044b\u0439-state",level:3},{value:"\u0412\u043e\u0437\u0432\u0440\u0430\u0442 \u0441\u0442\u0440\u0430\u0440\u043e\u0433\u043e state",id:"\u0432\u043e\u0437\u0432\u0440\u0430\u0442-\u0441\u0442\u0440\u0430\u0440\u043e\u0433\u043e-state",level:3},{value:"\u041c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 state",id:"\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439-state",level:3},{value:"useEffect()",id:"useeffect",level:2},{value:"componentDidMount() (\u043f\u0435\u0440\u0432\u044b\u0439 \u0440\u0435\u043d\u0434\u0435\u0440, \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043a API)",id:"componentdidmount-\u043f\u0435\u0440\u0432\u044b\u0439-\u0440\u0435\u043d\u0434\u0435\u0440-\u0437\u0430\u043f\u0440\u043e\u0441\u044b-\u043a-api",level:3},{value:"componentDidUpdate() (props/state update)",id:"componentdidupdate-propsstate-update",level:3},{value:"componentDidUpdate() (\u0432\u043e\u0437\u0432\u0440\u0430\u0442 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0433\u043e state)",id:"componentdidupdate-\u0432\u043e\u0437\u0432\u0440\u0430\u0442-\u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0433\u043e-state",level:3},{value:"componentWillUnmount()",id:"componentwillunmount",level:3},{value:"\u0412\u0430\u0440\u0438\u0430\u0446\u0438\u0438 useEffect",id:"\u0432\u0430\u0440\u0438\u0430\u0446\u0438\u0438-useeffect",level:3},{value:"useLayoutEffect()",id:"uselayouteffect",level:2},{value:"useRef()",id:"useref",level:2},{value:"useContext()",id:"usecontext",level:2},{value:"useCallback()",id:"usecallback",level:2},{value:"useMemo()",id:"usememo",level:2},{value:"useReducer()",id:"usereducer",level:2},{value:"useSelector()",id:"useselector",level:2},{value:"useImperativeHandle()",id:"useimperativehandle",level:2},{value:"useDebugValue()",id:"usedebugvalue",level:2},{value:"\u041a\u0430\u0442\u043e\u043c\u043d\u044b\u0435 \u0445\u0443\u043a\u0438",id:"\u043a\u0430\u0442\u043e\u043c\u043d\u044b\u0435-\u0445\u0443\u043a\u0438",level:2}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0425\u0443\u043a\u0438 - \u044d\u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043e\u043d\u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u043b\u0438;"),(0,l.kt)("li",{parentName:"ul"},"\u0425\u0443\u043a\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u0434\u0435\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0437\u0430\u0446\u0438\u044e \u043c\u0430\u0441\u0441\u0438\u0432\u0430, \u0447\u0442\u043e\u0431\u044b \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0441\u0440\u0430\u0437\u0443 \u043f\u0440\u0438\u0441\u0432\u043e\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0440\u0430\u0432\u043d\u044b\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c \u043c\u0430\u0441\u0441\u0438\u0432\u0430;"),(0,l.kt)("li",{parentName:"ul"},"\u0425\u0443\u043a\u0438 \u043f\u0440\u0438\u043d\u044f\u0442\u043e \u0438\u043c\u0435\u043d\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u0435\u0444\u0438\u043a\u0441\u043e\u043c ",(0,l.kt)("inlineCode",{parentName:"li"},"use__"),";"),(0,l.kt)("li",{parentName:"ul"},"\u0425\u0443\u043a\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432 FC \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u0432\u044b\u0441\u0448\u0435\u043c \u0443\u0440\u043e\u0432\u043d\u0435;")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const arr = ['a', 'b', 'c'];\n\nconst [const1, const2, const3] = arr;\n\nconst1; // 'a'\nconst2; // 'b'\nconst3; // 'c'\n\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"usestate"},"useState()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0442\u0435\u0439\u0442 \u0432\u043d\u0443\u0442\u0440\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 React-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432, \u0430 \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u043a\u043b\u0430\u0441\u0441\u043e\u0432\u044b\u0445 \u043a\u0430\u043a \u0431\u044b\u043b\u043e \u0432 \u0440\u0430\u043d\u043d\u0438\u0445 \u0432\u0435\u0440\u0441\u0438\u044f\u0445 React;"),(0,l.kt)("li",{parentName:"ul"},"\u0424\u0443\u043d\u043a\u0446\u0438\u0438, \u0438\u0437\u043c\u0435\u043d\u044f\u044e\u0448\u0438\u0435 state \u043f\u0440\u0438\u043d\u044f\u0442\u043e \u0438\u043c\u0435\u043d\u043e\u0432\u0430\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043f\u0440\u0435\u0444\u0438\u043a\u0441\u0430 ",(0,l.kt)("inlineCode",{parentName:"li"},"set__"),";")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const [state, setState] = useState(initialState);\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"state")," - \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f, \u0445\u0440\u0430\u043d\u044f\u0449\u0435\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435. \u041a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e, \u044d\u0442\u043e \u0441\u0442\u0440\u043e\u043a\u0430, \u0447\u0438\u0441\u043b\u043e, \u0431\u0443\u043b\u0435\u0430\u043d \u0438\u043b\u0438 \u043c\u0430\u0441\u0441\u0438\u0432 \u043b\u044e\u0431\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setState")," - \u0444\u0443\u043d\u043a\u0446\u0438\u044f, \u0438\u0437\u043c\u0435\u043d\u044f\u044e\u0449\u0430\u044f ",(0,l.kt)("inlineCode",{parentName:"li"},"state"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"initialState")," - \u043f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"li"},"state"),";")),(0,l.kt)("h3",{id:"\u043e\u0434\u0438\u043d\u043e\u0447\u043d\u044b\u0439-state"},"\u041e\u0434\u0438\u043d\u043e\u0447\u043d\u044b\u0439 state"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState } from 'react';\n...\nconst [count, setCount] = useState(0) || useState<number>(0); // with TS;\n...\n<button onClick={() => setCount(count + 1)}>Change count</button>\n")),(0,l.kt)("h3",{id:"\u0432\u043e\u0437\u0432\u0440\u0430\u0442-\u0441\u0442\u0440\u0430\u0440\u043e\u0433\u043e-state"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0442 \u0441\u0442\u0440\u0430\u0440\u043e\u0433\u043e state"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"prevState")," - \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439 state.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState } from 'react';\n...\nconst [count, setCount] = useState(0);\n\nconst onButtonClick = () => {\n  setCount(count + 1);\n\n  // \u0438\u0434\u0435\u043d\u0442\u0438\u0447\u043d\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c \u0441 prevState\n  setCount(prevState => prevState + 1);\n}\n...\n<button onClick={onButtonClick}>Change count</button>\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439-state"},"\u041c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 state"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u0412\u043c\u0435\u0441\u0442\u043e \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u043e\u0434\u0438\u043d\u043e\u0447\u043d\u044b\u0445 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0439, \u043d\u0430 \u043f\u043e\u0434\u043e\u0431\u0438\u0435 \u043a\u0430\u043a \u0431\u044b\u043b\u043e \u0432 \u043a\u043b\u0430\u0441\u0441\u043e\u0432\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u0445;")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"initialState")," \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0434\u0430\u0436\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044e, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435;"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState } from 'react';\n\n// \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f state\ntype TState = {\n  value1: number;\n  value2: boolean;\n  value3: string[];\n};\n\nconst initialState: TState = {\n  value1: 1,\n  value2: false,\n  value3: ['a', 'b', 'c'],\n}\n\nconst [state, setState] = useState<TState>(initialState);\n\n...\n\nconst onButtonClick = () => {\n  setState({\n    // or need to add all prev state values\n    ...state, \n\n    value1: 2,\n    value2: true,\n    value3: ['a'],\n  });\n};\n...\n\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"useeffect"},"useEffect()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0415\u0441\u043b\u0438 \u0445\u0443\u043a ",(0,l.kt)("inlineCode",{parentName:"li"},"useState")," \u0437\u0430\u043c\u0435\u043d\u0438\u043b ",(0,l.kt)("inlineCode",{parentName:"li"},"state")," \u043a\u043b\u0430\u0441\u0441\u043e\u0432\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430, \u0442\u043e \u0445\u0443\u043a ",(0,l.kt)("inlineCode",{parentName:"li"},"useEffect")," \u0437\u0430\u043c\u0435\u043d\u0438\u043b \u0432\u0441\u0435 \u043c\u0435\u0442\u043e\u0434\u044b \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u043e\u0433\u043e \u0446\u0438\u043a\u043b\u0430 (",(0,l.kt)("inlineCode",{parentName:"li"},"componentDidMount"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"componentDidUpdate"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"componentWillUnmount")," \u0438 \u0442.\u0434.). "),(0,l.kt)("li",{parentName:"ul"},"\u041c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437 \u0432 \u043e\u0434\u043d\u043e\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0435."),(0,l.kt)("li",{parentName:"ul"},"\u041c\u043e\u0436\u043d\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u043f\u0435\u0440\u0435\u0440\u0435\u043d\u0434\u0435\u0440\u043e\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"componentdidmount-\u043f\u0435\u0440\u0432\u044b\u0439-\u0440\u0435\u043d\u0434\u0435\u0440-\u0437\u0430\u043f\u0440\u043e\u0441\u044b-\u043a-api"},"componentDidMount() (\u043f\u0435\u0440\u0432\u044b\u0439 \u0440\u0435\u043d\u0434\u0435\u0440, \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043a API)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0411\u0443\u0434\u0435\u0442 \u0441\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u043f\u0440\u0438 \u043f\u0435\u0440\u0432\u043e\u043c \u0440\u0435\u043d\u0434\u0435\u0440\u0435 (\u043f\u0440\u0438 \u043a\u0430\u0436\u0434\u043e\u043c \u0432\u043c\u043e\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0432 ",(0,l.kt)("inlineCode",{parentName:"li"},"Virtual Dom"),");"),(0,l.kt)("li",{parentName:"ul"},"\u0417\u0430\u043f\u0440\u043e\u0441\u044b \u043a API (fetch data);"),(0,l.kt)("li",{parentName:"ul"},"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e state \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 (change ",(0,l.kt)("inlineCode",{parentName:"li"},"initialState"),");"),(0,l.kt)("li",{parentName:"ul"},"\u041b\u043e\u0430\u0434\u0435\u0440\u044b;")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState, useEffect } from 'react';\n\nconst SomeComp = () => {\n  const [users, setUsers] = useState<any[]>([]);\n\n\n  // \u0417\u0410\u041f\u0420\u041e\u0421 \u043a API - \u0431\u0443\u0434\u0435\u0442 \u0441\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u043f\u0440\u0438 \u043f\u0435\u0440\u0432\u043e\u043c \u0440\u0435\u043d\u0434\u0435\u0440\u0438\u043d\u0433\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\n  useEffect(() => {\n    fetch('https://jsonplaceholder.typicode.com/users')\n      .then(response => response.json())\n      .then(json => setUsers(json));\n  }, []);\n\n  return (\n    <ul>\n      {users?.map(user => (\n        <li key={user.id}>{user.name}</li>\n      ))}\n    </ul>\n  );\n}\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"componentdidupdate-propsstate-update"},"componentDidUpdate() (props/state update)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0411\u0443\u0434\u0435\u0442 \u0441\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u043f\u0440\u0438 \u043f\u0435\u0440\u0432\u043e\u043c \u0440\u0435\u043d\u0434\u0435\u0440\u0435;"),(0,l.kt)("li",{parentName:"ul"},"\u0411\u0443\u0434\u0435\u0442 \u0441\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u043a\u0430\u0436\u0434\u044b\u0439 \u0440\u0430\u0437 \u043f\u043e\u0441\u043b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439;"),(0,l.kt)("li",{parentName:"ul"},"\u0417\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043f\u044f\u0442\u0443\u044e;"),(0,l.kt)("li",{parentName:"ul"},"\u0412\u043e \u0432\u043d\u0443\u0442\u0440\u044c ",(0,l.kt)("inlineCode",{parentName:"li"},"useEffect")," \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c \u0443\u0441\u043b\u043e\u0432\u0438\u044f, \u0447\u0442\u043e\u0431\u044b \u0431\u044b\u043b\u0430 \u0431\xf3\u043b\u044c\u0448\u0430\u044f \u0433\u0438\u0431\u043a\u043e\u0441\u0442\u044c;")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState, useEffect } from 'react';\n\nconst SomeComp = () => {\n  const [count, setCount] = useState(0);\n\n\n  // \u0431\u0443\u0434\u0435\u0442 \u0441\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u043f\u0440\u0438 \u043f\u0435\u0440\u0432\u043e\u043c \u0440\u0435\u043d\u0434\u0435\u043d\u0440\u0435\n  // \u0431\u0443\u0434\u0435\u0442 \u0441\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u043a\u0430\u0436\u0434\u044b\u0439 \u0440\u0430\u0437 \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 count\n  useEffect(() => {\n    console.info('counter value: ', count);\n  }, [count]);\n\n  return (\n    <button onClick={() => setCount(count + 1)}>{count}</button>\n  );\n}\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"componentdidupdate-\u0432\u043e\u0437\u0432\u0440\u0430\u0442-\u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0433\u043e-state"},"componentDidUpdate() (\u0432\u043e\u0437\u0432\u0440\u0430\u0442 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0433\u043e state)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u041d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0441\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u043f\u0440\u0438 \u043f\u0435\u0440\u0432\u043e\u043c \u0440\u0435\u043d\u0434\u0435\u0440\u0435;"),(0,l.kt)("li",{parentName:"ul"},"\u0411\u0443\u0434\u0435\u0442 \u0441\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u043a\u0430\u0436\u0434\u044b\u0439 \u0440\u0430\u0437 \u0414\u041e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439;"),(0,l.kt)("li",{parentName:"ul"},"\u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043f\u0440\u0435\u0434\u044b\u043b\u0443\u0449\u0438\u0439 state;")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState, useEffect } from 'react';\n\nconst SomeComp = () => {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    // \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0441\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u043f\u0440\u0438 \u043f\u0435\u0440\u0432\u043e\u043c \u0440\u0435\u043d\u0434\u0435\u0440\u0435!\n    // \u0432\u0435\u0440\u043d\u0435\u0442 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 count \u0434\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \n    return () => {\n      console.info('previos counter value: ', count);\n    };\n  }, [count]);\n\n  return (\n    <button onClick={() => setCount(count + 1)}>{count}</button>\n  );\n}\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"componentwillunmount"},"componentWillUnmount()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0421\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442 \u043f\u0440\u0438 \u043a\u0430\u0436\u0434\u043e\u043c \u0434\u0435\u043c\u043e\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0438\u0437 ",(0,l.kt)("inlineCode",{parentName:"li"},"Virtual Dom")),(0,l.kt)("li",{parentName:"ul"},"remove event listeners"),(0,l.kt)("li",{parentName:"ul"},"clear cache, storages"),(0,l.kt)("li",{parentName:"ul"},"return to ",(0,l.kt)("inlineCode",{parentName:"li"},"initialState"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState, useEffect } from 'react';\n\nconst SomeComp = () => {\n  const [windowWidth, setWindowWidth] = useState<number | null>(null);\n\n  // resizeX update state method\n  const resizeXListener = () => {\n    const updateWidth = window.innerWidth;\n    setWindowWidth(updateWidth);\n    console.log('windowWidth', windowWidth);\n  };\n\n  useEffect(() => {\n    // add event listener\n    window.addEventListener('resize', resizeXListener);\n\n    // remove event listener\n    return () => window.removeEventListener('resize', resizeXListener);\n  }); // do not add [] - will not working\n\n  return (\n    <div>{count}</div>\n  );\n}\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\u0432\u0430\u0440\u0438\u0430\u0446\u0438\u0438-useeffect"},"\u0412\u0430\u0440\u0438\u0430\u0446\u0438\u0438 useEffect"),(0,l.kt)("p",null,"\u0412 \u0437\u0430\u043f\u0438\u0441\u0438 useEffect \u0431\u0435\u0437 ","[ ]"," \u0432\u043e\u043e\u0431\u0449\u0435 \u043f\u043e \u0441\u0443\u0442\u0438 \u043d\u0435\u0442 \u0441\u043c\u044b\u0441\u043b\u0430, \u0442\u0430\u043a \u043a\u0430\u043a \u044d\u0442\u043e\u0442 \u043a\u043e\u0434 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c\u0441\u044f \u043f\u0440\u0438 \u043a\u0430\u0436\u0434\u043e\u043c \u0440\u0435\u043d\u0434\u0435\u0440\u0435, useEffect \u043c\u043e\u0436\u043d\u043e \u0443\u0431\u0440\u0430\u0442\u044c."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const SomeComp = ({ count }: TProps) => {\n  // \u0441\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043f\u0440\u0438 \u043a\u0430\u0436\u0434\u043e\u043c \u0440\u0435\u043d\u0434\u0435\u0440\u0435 / \u0440\u0435\u0440\u0435\u043d\u0434\u0435\u0440\u0435\n  console.log('count inside', count);\n\n  // \u0441\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043f\u0440\u0438 \u043a\u0430\u0436\u0434\u043e\u043c \u0440\u0435\u043d\u0434\u0435\u0440\u0435 / \u0440\u0435\u0440\u0435\u043d\u0434\u0435\u0440\u0435\n  useEffect(() => {\n    console.log('count', count);\n\n    // \u0435\u0441\u043b\u0438 \u0432\u043d\u0443\u0442\u0440\u0438 \u0442\u0430\u043a\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438 \u043c\u0435\u043d\u044f\u0442\u044c state, \u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u044b\u0439 \u0446\u0438\u043a\u043b\n    setValue(value + 1);\n\n    // \u043c\u043e\u0436\u043d\u043e \u0441\u0447\u0438\u0442\u0430\u0442\u044c \u043a\u043e\u043b-\u0432\u043e \u0440\u0435\u043d\u0434\u0435\u0440\u043e\u0432\n  });\n\n  // \u0441\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 1 \u0440\u0430\u0437 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435\n  useEffect(() => {\n    console.log('count []', count);\n  }, []);\n\n  // \u0441\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 1 \u0440\u0430\u0437 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0438 \u0434\u0430\u043b\u0435\u0435 \u043a\u0430\u0436\u0434\u044b\u0439 \u0440\u0430\u0437 \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 count\n  useEffect(() => {\n    console.log('count [count]', count);\n  }, [count]);\n\n  return <div>{count}</div>;\n};\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"uselayouteffect"},"useLayoutEffect()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0422\u0430\u043a\u043e\u0439 \u0436\u0435 \u043a\u0430\u043a \u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"useEffect"),", \u0442\u043e\u043b\u044c\u043a\u043e \u0433\u0440\u0443\u0437\u0438\u0442\u044c\u0441\u044f \u0435\u0449\u0451 \u0434\u043e \u043e\u0442\u0440\u0438\u0441\u043e\u0432\u043a\u0438 html."),(0,l.kt)("li",{parentName:"ul"},"\u0421\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442 \u0440\u0430\u043d\u044c\u0448\u0435 \u0447\u0435\u043c ",(0,l.kt)("inlineCode",{parentName:"li"},"useEffect")),(0,l.kt)("li",{parentName:"ul"},"\u041f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0440\u0435\u0434\u043a\u043e")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"useref"},"useRef()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 DOM-\u044d\u043b\u0435\u043c\u0435\u043d\u0442"),(0,l.kt)("li",{parentName:"ul"},"\u041c\u043e\u0436\u043d\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0442\u044c \u0432\u0441\u0435 \u043c\u0435\u0442\u043e\u0434\u044b \u0440\u0430\u0431\u043e\u0442\u044b \u0441 DOM")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const SomeComp = ({ count }: TProps) => {\n  const inputRef = useRef<HTMLInputElement>(null);\n  const [inputValue, setInputValue] = useState<string>('some string');\n\n  // \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c dom-\u043c\u0435\u0442\u043e\u0434\u044b\n  const onButtonClick = () => {\n    inputRef.current?.focus();\n  };\n\n  return (\n    <div>\n      <input\n        ref={inputRef}\n        type='text'\n        value={inputValue}\n        onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}\n      />\n\n      <button onClick={onButtonClick}>Click me</button>\n    </div>\n  )\n};\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"usecontext"},"useContext()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c ",(0,l.kt)("inlineCode",{parentName:"li"},"state")," \u043d\u0430 \u043b\u044e\u0431\u043e\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c, \u0447\u0442\u043e-\u0442\u043e \u0432\u0440\u043e\u0434\u0435 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u043e\u0433\u043e ",(0,l.kt)("inlineCode",{parentName:"li"},"redux")," \u0432 ",(0,l.kt)("inlineCode",{parentName:"li"},"react")),(0,l.kt)("li",{parentName:"ul"},"\u041c\u043e\u0436\u043d\u043e \u0438\u0437\u0431\u0430\u0432\u0438\u0442\u044c\u0441\u044f \u043e\u0442 ",(0,l.kt)("inlineCode",{parentName:"li"},"property drilling")),(0,l.kt)("li",{parentName:"ul"},"\u0412\u043d\u0443\u0442\u0440\u044c \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430 \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0432\u0441\u0451, \u0447\u0442\u043e \u0443\u0433\u043e\u0434\u043d\u043e (\u043f\u0440\u0438\u043c\u0438\u0442\u0438\u0432\u044b, \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u043e\u0431\u044a\u0435\u043a\u0442\u044b).")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title='ThemeContext.ts'",title:"'ThemeContext.ts'"},"// \u0441\u043e\u0437\u0434\u0430\u0451\u043c \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\nimport React from 'react';\n\n// default value\nconst theme = 'light';\n\nexport const ThemeContext = React.createContext(theme);\n")),(0,l.kt)("p",null,"\u0423 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430 \u0435\u0441\u0442\u044c \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 ",(0,l.kt)("inlineCode",{parentName:"p"},"Provider"),", \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u043d\u0443\u0436\u043d\u043e \u043e\u0431\u0435\u0440\u043d\u0443\u0442\u044c \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="_app.tsx"',title:'"_app.tsx"'},"const [theme, setTheme] = useState('light');\n\nconst onButtonClick = () => {\n  setTheme(theme === 'light' ? 'dark' : 'light');\n};\n...\n<ThemeContext.Provider value={theme}>\n  <PageBaseLayout>\n    <Component {...pageProps} />\n\n    <button onClick={onButtonClick}>{theme}</button>\n  </PageBaseLayout>\n</ThemeContext.Provider>\n")),(0,l.kt)("p",null,"\u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0445\u0443\u043a\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"useContext")," \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a ",(0,l.kt)("inlineCode",{parentName:"p"},"theme")," \u0438\u0437 \u043b\u044e\u0431\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0432\u043d\u0443\u0442\u0440\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"<ThemeContext.Provider>")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"usecallback"},"useCallback()"),(0,l.kt)("p",null,"TODO"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"usememo"},"useMemo()"),(0,l.kt)("p",null,"TODO"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"usereducer"},"useReducer()"),(0,l.kt)("p",null,"TODO"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"useselector"},"useSelector()"),(0,l.kt)("p",null,"TODO"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"useimperativehandle"},"useImperativeHandle()"),(0,l.kt)("p",null,"TODO"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"usedebugvalue"},"useDebugValue()"),(0,l.kt)("p",null,"TODO"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u043a\u0430\u0442\u043e\u043c\u043d\u044b\u0435-\u0445\u0443\u043a\u0438"},"\u041a\u0430\u0442\u043e\u043c\u043d\u044b\u0435 \u0445\u0443\u043a\u0438"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0421\u0430\u043c\u043e\u043f\u0438\u0441\u043d\u044b\u0435 \u043f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u0445\u0443\u043a\u0438, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0435."),(0,l.kt)("li",{parentName:"ul"},"\u041f\u043e \u0438\u0434\u0435\u0435, \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0442\u043a\u0443 (\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 .js \u0438\u043b\u0438 .ts)"),(0,l.kt)("li",{parentName:"ul"},"\u0427\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043e \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0442 \u043a\u0430\u043a\u043e\u0435-\u043b\u0438\u0431\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0438\u0437 ",(0,l.kt)("inlineCode",{parentName:"li"},"useState")," \u0432\u043d\u0443\u0442\u0440\u0438 \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u0445\u0443\u043a\u0430.")),(0,l.kt)("hr",null))}p.isMDXComponent=!0}}]);