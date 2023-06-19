"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[3784],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var l=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=l.createContext({}),i=function(e){var n=l.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=i(e.components);return l.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},p=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(t),d=r,v=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return t?l.createElement(v,a(a({ref:n},c),{},{components:t})):l.createElement(v,a({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=p;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var i=2;i<o;i++)a[i]=t[i];return l.createElement.apply(null,a)}return l.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2347:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var l=t(7462),r=(t(7294),t(3905));const o={title:"TypeScript \u0432 React +--",sidebar_position:7},a=void 0,s={unversionedId:"frontend/react/typescript",id:"frontend/react/typescript",title:"TypeScript \u0432 React +--",description:"\u041f\u0440\u043e\u0441\u0442\u044b\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435",source:"@site/docs/frontend/react/typescript.md",sourceDirName:"frontend/react",slug:"/frontend/react/typescript",permalink:"/knowledge-bank/docs/frontend/react/typescript",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/react/typescript.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"TypeScript \u0432 React +--",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u0425\u0443\u043a\u0438 ++-",permalink:"/knowledge-bank/docs/frontend/react/hooks"},next:{title:"State-management",permalink:"/knowledge-bank/docs/frontend/react/state-management"}},u={},i=[{value:"\u041f\u0440\u043e\u0441\u0442\u044b\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435",id:"\u043f\u0440\u043e\u0441\u0442\u044b\u0435-\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435",level:2},{value:"\u041e\u0431\u044a\u0435\u043a\u0442\u044b",id:"\u043e\u0431\u044a\u0435\u043a\u0442\u044b",level:2},{value:"\u041e\u0431\u044a\u0435\u043a\u0442\u044b \u0441 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c \u043d\u0430\u0431\u043e\u0440\u043e\u043c \u043f\u043e\u043b\u0435\u0439",id:"\u043e\u0431\u044a\u0435\u043a\u0442\u044b-\u0441-\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c-\u043d\u0430\u0431\u043e\u0440\u043e\u043c-\u043f\u043e\u043b\u0435\u0439",level:3},{value:"\u041e\u0431\u044a\u0435\u043a\u0442\u044b \u0441 \u043d\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c \u043d\u0430\u0431\u043e\u0440\u043e\u043c \u043f\u043e\u043b\u0435\u0439",id:"\u043e\u0431\u044a\u0435\u043a\u0442\u044b-\u0441-\u043d\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c-\u043d\u0430\u0431\u043e\u0440\u043e\u043c-\u043f\u043e\u043b\u0435\u0439",level:3},{value:"\u041c\u0430\u0441\u0441\u0438\u0432\u044b",id:"\u043c\u0430\u0441\u0441\u0438\u0432\u044b",level:2},{value:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438",id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",level:2},{value:"Enum",id:"enum",level:2},{value:"FC",id:"fc",level:2},{value:"Props",id:"props",level:2},{value:"Events",id:"events",level:2},{value:"HTMLInputElement / ChangeEvent",id:"htmlinputelement--changeevent",level:3},{value:"HTMLInputElement / FocusEvent",id:"htmlinputelement--focusevent",level:3},{value:"HTMLInputElement / FormEvent",id:"htmlinputelement--formevent",level:3},{value:"HTMLDivElement / MouseEvent",id:"htmldivelement--mouseevent",level:3},{value:"DOM",id:"dom",level:2},{value:"Extends",id:"extends",level:2}],c={toc:i};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,l.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u043f\u0440\u043e\u0441\u0442\u044b\u0435-\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435"},"\u041f\u0440\u043e\u0441\u0442\u044b\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const someString: string = 'Some stirng';\nconst someNumber: number = 123;\nconst someBoolean: boolean = false;\nconst someUnknown: null | undefined = null;\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u043e\u0431\u044a\u0435\u043a\u0442\u044b"},"\u041e\u0431\u044a\u0435\u043a\u0442\u044b"),(0,r.kt)("h3",{id:"\u043e\u0431\u044a\u0435\u043a\u0442\u044b-\u0441-\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c-\u043d\u0430\u0431\u043e\u0440\u043e\u043c-\u043f\u043e\u043b\u0435\u0439"},"\u041e\u0431\u044a\u0435\u043a\u0442\u044b \u0441 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c \u043d\u0430\u0431\u043e\u0440\u043e\u043c \u043f\u043e\u043b\u0435\u0439"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type TObj = {\n  someString: string;\n  someNumber: number;\n  someBoolean: boolean;\n  someUnknown: null | undefined;\n}\n\n// 1 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\nconst someObj: TObj = {\n  someString: 'Some stirng',\n  someNumber: 123,\n  someBoolean: false,\n  someUnknown: null,\n}\n\n// 2 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\nconst someObj: {\n  someString: string;\n  someNumber: number;\n  someBoolean: boolean;\n  someUnknown: null | undefined;\n} = {\n  someString: 'Some stirng',\n  someNumber: 123,\n  someBoolean: false,\n  someUnknown: null,\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u043e\u0431\u044a\u0435\u043a\u0442\u044b-\u0441-\u043d\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c-\u043d\u0430\u0431\u043e\u0440\u043e\u043c-\u043f\u043e\u043b\u0435\u0439"},"\u041e\u0431\u044a\u0435\u043a\u0442\u044b \u0441 \u043d\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c \u043d\u0430\u0431\u043e\u0440\u043e\u043c \u043f\u043e\u043b\u0435\u0439"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// 1 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 (Record)\nconst someUnknownObj: Record<string, number> = {\n  someField1: 1,\n  someField2: 2,\n  someField3: 3,\n  someField4: 4,\n}\n\n// 2 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 (key)\nconst someUnknownObj: { [key: string]: number } = {\n  someField1: 1,\n  someField2: 2,\n  someField3: 3,\n  someField4: 4,\n}\n")),(0,r.kt)("p",null,"keyof, typeof "),(0,r.kt)("p",null,"TODO"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"export type TStore = ReturnType<typeof store.getState>;")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u043c\u0430\u0441\u0441\u0438\u0432\u044b"},"\u041c\u0430\u0441\u0441\u0438\u0432\u044b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const someArray: number[] = [1, 2, 3, 4];\nconst someArray: string[] = ['asdf', 'cxvzx', 'rerer', 'fadsf'];\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438"},"\u0424\u0443\u043d\u043a\u0446\u0438\u0438"),(0,r.kt)("p",null,"TODO"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"enum"},"Enum"),(0,r.kt)("p",null,"TODO"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"fc"},"FC"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// children type\ntype TProps = {\n  children: React.ReactNode\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("p",null,"TODO"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("h3",{id:"htmlinputelement--changeevent"},"HTMLInputElement / ChangeEvent"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n  const value = event.target.value;\n  console.log(value);\n};\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"htmlinputelement--focusevent"},"HTMLInputElement / FocusEvent"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {\n  const value = event.target.value;\n  console.log(value);\n};\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"htmlinputelement--formevent"},"HTMLInputElement / FormEvent"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const onLoginHandler = async (event: React.FormEvent<HTMLFormElement>) => {\n  event.preventDefault();\n\n  if (email && password) {\n    let errors = await dispatch(login(email, password)) as unknown as boolean;\n  }\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"htmldivelement--mouseevent"},"HTMLDivElement / MouseEvent"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const onClick = (event: React.MouseEvent<HTMLDivElement>) => {\n  const value = event.target.value;\n  console.log(value);\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"dom"},"DOM"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const ref = useRef<HTMLDivElement>(null);\n")),(0,r.kt)("p",null,"TODO"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"extends"},"Extends"),(0,r.kt)("p",null,"TODO"),(0,r.kt)("hr",null))}m.isMDXComponent=!0}}]);