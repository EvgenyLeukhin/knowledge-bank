"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[3784],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,k=m["".concat(i,".").concat(d)]||m[d]||c[d]||s;return t?r.createElement(k,l(l({ref:n},p),{},{components:t})):r.createElement(k,l({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,l=new Array(s);l[0]=m;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<s;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2347:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const s={title:"TypeScript \u0432 React",sidebar_position:7},l=void 0,o={unversionedId:"frontend/react/typescript",id:"frontend/react/typescript",title:"TypeScript \u0432 React",description:".d.ts",source:"@site/docs/frontend/react/typescript.md",sourceDirName:"frontend/react",slug:"/frontend/react/typescript",permalink:"/knowledge-bank/docs/frontend/react/typescript",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/react/typescript.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"TypeScript \u0432 React",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u0425\u0443\u043a\u0438 ++-",permalink:"/knowledge-bank/docs/frontend/react/hooks"},next:{title:"State-management",permalink:"/knowledge-bank/docs/frontend/react/state-management"}},i={},u=[{value:".d.ts",id:"dts",level:2},{value:"\u041f\u0440\u043e\u0441\u0442\u044b\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435",id:"\u043f\u0440\u043e\u0441\u0442\u044b\u0435-\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435",level:2},{value:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435\u0435 \u0434\u043b\u044f \u0442\u0438\u043f\u043e\u0432",id:"\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435\u0435-\u0434\u043b\u044f-\u0442\u0438\u043f\u043e\u0432",level:2},{value:"\u041e\u0431\u044a\u0435\u043a\u0442\u044b",id:"\u043e\u0431\u044a\u0435\u043a\u0442\u044b",level:2},{value:"\u041e\u0431\u044a\u0435\u043a\u0442\u044b \u0441 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c \u043d\u0430\u0431\u043e\u0440\u043e\u043c \u043f\u043e\u043b\u0435\u0439",id:"\u043e\u0431\u044a\u0435\u043a\u0442\u044b-\u0441-\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c-\u043d\u0430\u0431\u043e\u0440\u043e\u043c-\u043f\u043e\u043b\u0435\u0439",level:3},{value:"\u041e\u0431\u044a\u0435\u043a\u0442\u044b \u0441 \u043d\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c \u043d\u0430\u0431\u043e\u0440\u043e\u043c \u043f\u043e\u043b\u0435\u0439",id:"\u043e\u0431\u044a\u0435\u043a\u0442\u044b-\u0441-\u043d\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c-\u043d\u0430\u0431\u043e\u0440\u043e\u043c-\u043f\u043e\u043b\u0435\u0439",level:3},{value:"keyof",id:"keyof",level:2},{value:"typeof",id:"typeof",level:2},{value:"\u0422\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u043e\u043b\u0435\u0439 \u043e\u0431\u044a\u0435\u043a\u0442\u0430",id:"\u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f-\u043f\u043e\u043b\u0435\u0439-\u043e\u0431\u044a\u0435\u043a\u0442\u0430",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440",id:"\u043f\u0440\u0438\u043c\u0435\u0440",level:2},{value:"\u041c\u0430\u0441\u0441\u0438\u0432\u044b",id:"\u043c\u0430\u0441\u0441\u0438\u0432\u044b",level:2},{value:"Any, void, unknown, never",id:"any-void-unknown-never",level:3},{value:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438",id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",level:2},{value:"Void",id:"void",level:3},{value:"Enum",id:"enum",level:2},{value:"FC",id:"fc",level:2},{value:"Props",id:"props",level:2},{value:"Events",id:"events",level:2},{value:"HTMLInputElement / ChangeEvent",id:"htmlinputelement--changeevent",level:3},{value:"HTMLInputElement / FocusEvent",id:"htmlinputelement--focusevent",level:3},{value:"HTMLInputElement / FormEvent",id:"htmlinputelement--formevent",level:3},{value:"HTMLDivElement / MouseEvent",id:"htmldivelement--mouseevent",level:3},{value:"DOM",id:"dom",level:2},{value:"Extends",id:"extends",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 extends",id:"\u043f\u0440\u0438\u043c\u0435\u0440-extends",level:3},{value:"\u0414\u0436\u0435\u043d\u0435\u0440\u0438\u043a\u0438",id:"\u0434\u0436\u0435\u043d\u0435\u0440\u0438\u043a\u0438",level:2},{value:"Partial",id:"partial",level:3}],p={toc:u};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"dts"},".d.ts"),(0,a.kt)("p",null,"\u0414\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u044f \u0442\u0438\u043f\u043e\u0432 \u0432 \u0444\u0430\u0439\u043b\u0435"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=_KweR3LUGRA"},"https://www.youtube.com/watch?v=_KweR3LUGRA")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u043f\u0440\u043e\u0441\u0442\u044b\u0435-\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435"},"\u041f\u0440\u043e\u0441\u0442\u044b\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const someString: string = 'Some stirng';\nconst someNumber: number = 123;\nconst someBoolean: boolean = false;\n\n// \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0442\u0438\u043f\u043e\u0432\nconst someUnknown: null | undefined = null;\n")),(0,a.kt)("p",null,"\u0427\u0435\u043c \u043c\u0435\u043d\u044c\u0448\u0435 any, \u0442\u0435\u043c \u043b\u0443\u0447\u0448\u0435."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435\u0435-\u0434\u043b\u044f-\u0442\u0438\u043f\u043e\u0432"},"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435\u0435 \u0434\u043b\u044f \u0442\u0438\u043f\u043e\u0432"),(0,a.kt)("p",null,"type - \u043d\u0435\u043b\u044c\u0437\u044f \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0442\u044c. \u041d\u0435\u043b\u044c\u0437\u044f \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0442\u044c."),(0,a.kt)("p",null,"\u0412\u0441\u0435 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 \u0443\u0436\u0435 \u0438\u043c\u0435\u044e\u0442 \u0441\u0432\u043e\u0439 \u0433\u043e\u0442\u043e\u0432\u044b\u0439 \u043d\u0430\u0431\u043e\u0440 \u0442\u0438\u043f\u043e\u0432."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type KeyList = readonly string[];\n\n// \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0434\u0440\u0443\u0433\u0438\u0445 \u0442\u0438\u043f\u0430\u0445\ntype KeyLists = KeyList[];\n\ntype Props = {\n  className: string;\n  count: number;\n};\n")),(0,a.kt)("p",null,"interface - \u043d\u0435\u043b\u044c\u0437\u044f \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0442\u044c, \u043d\u043e \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0442\u044c."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Props {\n  className: string;\n  count: number;\n}\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u043e\u0431\u044a\u0435\u043a\u0442\u044b"},"\u041e\u0431\u044a\u0435\u043a\u0442\u044b"),(0,a.kt)("h3",{id:"\u043e\u0431\u044a\u0435\u043a\u0442\u044b-\u0441-\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c-\u043d\u0430\u0431\u043e\u0440\u043e\u043c-\u043f\u043e\u043b\u0435\u0439"},"\u041e\u0431\u044a\u0435\u043a\u0442\u044b \u0441 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c \u043d\u0430\u0431\u043e\u0440\u043e\u043c \u043f\u043e\u043b\u0435\u0439"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type TObj = {\n  someString?: string; // \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435\n  readonly someNumber: number; // \u043d\u0435\u0438\u0437\u043c\u0435\u043d\u044f\u0435\u043c\u043e\u0435\n  someBoolean: boolean;\n  someUnknown: null | undefined;\n}\n\n// 1 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\nconst someObj: TObj = {\n  someString: 'Some stirng',\n  someNumber: 123,\n  someBoolean: false,\n  someUnknown: null,\n}\n\n// 2 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\nconst someObj: {\n  someString?: string;\n  readonly someNumber: number;\n  someBoolean: boolean;\n  someUnknown: null | undefined;\n} = {\n  someString: 'Some stirng',\n  someNumber: 123,\n  someBoolean: false,\n  someUnknown: null,\n}\n\n// 3 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 (\u043e\u0431\u044a\u0435\u043a\u0442 \u0438\u043b\u0438 null)\nconst courier: {\n  id: number;\n  firstName: string;\n  lastName: string;\n  middleName: string;\n  salaryType: number;\n  additionalTypeIds: number[];\n} | null;\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u043e\u0431\u044a\u0435\u043a\u0442\u044b-\u0441-\u043d\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c-\u043d\u0430\u0431\u043e\u0440\u043e\u043c-\u043f\u043e\u043b\u0435\u0439"},"\u041e\u0431\u044a\u0435\u043a\u0442\u044b \u0441 \u043d\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c \u043d\u0430\u0431\u043e\u0440\u043e\u043c \u043f\u043e\u043b\u0435\u0439"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// 1 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 (Record)\nconst someUnknownObj: Record<string, number> = {\n  someField1: 1,\n  someField2: 2,\n  someField3: 3,\n  someField4: 4,\n}\n\n// 2 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 (key)\nconst someUnknownObj: { [key: string]: number } = {\n  someField1: 1,\n  someField2: 2,\n  someField3: 3,\n  someField4: 4,\n}\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"keyof"},"keyof"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface LikeButtonProps {\n  className: string;\n  count: number;\n  size: number;\n}\n\ntype LikeButtonKeys = keyof LikeButtonProps; // 'className', 'count', 'size'\n")),(0,a.kt)("h2",{id:"typeof"},"typeof"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const props = {\n  className: 'Like',\n  count: 3,\n  size: 'L',\n};\n\ntype LikeButtonProps = typeof props;\n\n// \u0425\u041e\u0420\u041e\u0428\u041e, \u0434\u043b\u044f \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445\nconst props: LikeButtonProps = {\n  className: 'Like',\n  count: 3,\n  size: 'L',\n};\n\n// \u041f\u041b\u041e\u0425\u041e, \u043d\u043e \u043c\u043e\u0436\u043d\u043e \u0434\u043b\u044f \u0432\u0445\u043e\u0434\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445\nconst props = {\n  className: 'Like',\n  count: 3,\n  size: 'L',\n} as LikeButtonProps;\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"export type TStore = ReturnType<typeof store.getState>;")),(0,a.kt)("h2",{id:"\u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f-\u043f\u043e\u043b\u0435\u0439-\u043e\u0431\u044a\u0435\u043a\u0442\u0430"},"\u0422\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u043e\u043b\u0435\u0439 \u043e\u0431\u044a\u0435\u043a\u0442\u0430"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface LikeButtonProps {\n  className: string;\n  count: number;\n  size: number;\n}\n\nconst props: LikeButtonProps = {\n  className: 'Like',\n  count: 3,\n  size: 'L',\n};\n\n// \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u043e\u043b\u0435\u0439 --\x3e 'className', 'count', 'size'\ntype Keys = keyof IUsageDates;\n\n// \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f \u0437\u0430\u0447\u0435\u043d\u0438\u0439 --\x3e 'string' | 'number'\ntype Keys = keyof typeof props;\ntype Values = (typeof props)[Keys];\n")),(0,a.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440"},"\u041f\u0440\u0438\u043c\u0435\u0440"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"interface IUsageDates {\n    showDates: boolean;\n    startDate: Date | null;\n    endDate: Date | null;\n}\n\n// usageDates\nconst [usageDates, setUsageDates] = useState<IUsageDates>({\n    showDates: false,\n    startDate: null,\n    endDate: null,\n});\n\n  const changeUsageDates = (\n      fieldName: keyof IUsageDates, \n      payload: (typeof usageDates)[keyof typeof usageDates],\n  ) => {\n      setUsageDates({  ...usageDates, [fieldName]: payload });\n  }\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u043c\u0430\u0441\u0441\u0438\u0432\u044b"},"\u041c\u0430\u0441\u0441\u0438\u0432\u044b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const someArray: number[] = [1, 2, 3, 4];\nconst someArray: string[] = ['asdf', 'cxvzx', 'rerer', 'fadsf'];\n\n// \u0447\u0435\u0440\u0435\u0437 \u0434\u0436\u0435\u043d\u0435\u0440\u0438\u043a\nconst someArray: Array<number> = [1, 2, 3, 4];\nconst someArray: Array<string> = ['asdf', 'cxvzx', 'rerer', 'fadsf'];\n\n// \u041a\u041e\u0422\u0420\u0415\u0416, \u043a\u043e\u0433\u0434\u0430 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e \u0442\u043e\u0447\u043d\u043e\u0435 \u043a\u043e\u043b-\u0432\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432\nconst someArray: [string, string, string, string] = ['asdf', 'cxvzx', 'rerer', 'fadsf'];\n\n// \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0447\u0442\u0435\u043d\u0438\u044f\nconst someArray: readonly string[] = ['asdf', 'cxvzx', 'rerer', 'fadsf'];\nconst someArray: ReadonlyArray<string> = ['asdf', 'cxvzx', 'rerer', 'fadsf'];\nconst someArray: readonly [string, string, string, string] = ['asdf', 'cxvzx', 'rerer', 'fadsf'];\n")),(0,a.kt)("p",null,"\u0414\u0436\u0435\u043d\u0435\u0440\u0438\u043a - \u0442\u0438\u043f, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0434\u0440\u0443\u0433\u0438\u0445 \u0442\u0438\u043f\u043e\u0432."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"any-void-unknown-never"},"Any, void, unknown, never"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"any")," - \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u0438;\n",(0,a.kt)("inlineCode",{parentName:"p"},"void")," - \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442;\n",(0,a.kt)("inlineCode",{parentName:"p"},"unknown")," - \u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0439 \u0442\u0438\u043f, \u043c\u043e\u0436\u0435\u0442 \u0432\u043a\u043b\u044e\u0447\u0430\u0442\u044c \u0432\u0441\u0435 \u0442\u0438\u043f\u044b \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\n",(0,a.kt)("inlineCode",{parentName:"p"},"never")," - \u0442\u0438\u043f, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0435 \u0438\u043c\u0435\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 js"),(0,a.kt)("h2",{id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438"},"\u0424\u0443\u043d\u043a\u0446\u0438\u0438"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// function declaration\nfunction() square(n: number): number {\n  return n * n;\n}\n\n// function expression\n// \u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u043d\u0430\u044f\nconst square = (n: number) => n * n;\n\n// \u043f\u043e\u043b\u043d\u0430\u044f\nconst square: (n: number) => number = n => n * n;\n")),(0,a.kt)("h3",{id:"void"},"Void"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 number\n(n: number) => number;\n\n// \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\n(n: number) => void;\n\n// \u043b\u044e\u0431\u044b\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b\n(...args: any[]) => any;\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"enum"},"Enum"),(0,a.kt)("p",null,"\u041f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f. Enumiration. \u041c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0438 \u0442\u0438\u043f\u043e\u043c \u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c. \u041a\u043e\u043c\u043f\u0438\u043b\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0432 \u043e\u0431\u044a\u0435\u043a\u0442."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"enum Size {\n  S, \n  M, \n  L,\n  XL,\n}\n")),(0,a.kt)("p",null,"Convert enum to array for maping"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export enum DrugstoreView {\n  DRUGSTORE = '\u0410\u043f\u0442\u0435\u043a\u0430',\n  HUB = '\u0425\u0430\u0431',\n  VSP = '\u0412\u0421\u041f',\n  LINK_TO_DISCONNECT = '\u041d\u0430 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435',\n  LINK_APPROVED = '\u041d\u0430 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435',\n  LINK_REJECT = '\u041e\u0442\u043a\u0430\u0437 \u043e\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f',\n}\n\nconst drugstoreViews = Object.values(DrugstoreView);\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"fc"},"FC"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// children type\ntype TProps = {\n  children: React.ReactNode\n}\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)("p",null,"TODO"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("h3",{id:"htmlinputelement--changeevent"},"HTMLInputElement / ChangeEvent"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n  const value = event.target.value;\n  console.log(value);\n};\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"htmlinputelement--focusevent"},"HTMLInputElement / FocusEvent"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {\n  const value = event.target.value;\n  console.log(value);\n};\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"htmlinputelement--formevent"},"HTMLInputElement / FormEvent"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const onLoginHandler = async (event: React.FormEvent<HTMLFormElement>) => {\n  event.preventDefault();\n\n  if (email && password) {\n    let errors = await dispatch(login(email, password)) as unknown as boolean;\n  }\n}\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"htmldivelement--mouseevent"},"HTMLDivElement / MouseEvent"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const onClick = (event: React.MouseEvent<HTMLDivElement>) => {\n  const value = event.target.value;\n  console.log(value);\n}\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"dom"},"DOM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const ref = useRef<HTMLDivElement>(null);\n\nconst ref2 = useRef<HTMLInputElement>(null);\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"extends"},"Extends"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface LikeButtonProps {\n  className: string;\n  count: number;\n}\n\ninterface CssProps {\n  className: string;\n}\n\n// \u043f\u043e\u0434\u043c\u0435\u0448\u0438\u0432\u0430\u0435\u043c \u043f\u043e\u043b\u0435 count \u0432 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 CssProps\ninterface LikeButtonProps extends CssProps {\n  count: number;\n}\n\n// 2 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 - \u0447\u0435\u0440\u0435\u0437 type\ntype LikeButtonProps = CssProps & { count: number; }\n")),(0,a.kt)("h3",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-extends"},"\u041f\u0440\u0438\u043c\u0435\u0440 extends"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Tooltip }               from '@material-ui/core';\nimport { useSelector }           from 'react-redux';\n\n // \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c \u0433\u043e\u0442\u043e\u0432\u044b\u0435 \u043f\u0440\u043e\u043f\u0441\u044b \u0438\u0437 \u043b\u0438\u0431\u044b\nimport { NavLink, NavLinkProps } from 'react-router-dom';\nimport { TStore }                from 'redux/store/store';\n\n// \u043f\u0440\u0438\u043c\u0435\u0448\u0438\u0432\u0430\u0435\u043c \u0441\u0432\u043e\u0438 \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0435 \u043f\u0440\u043e\u043f\u0441\u044b\ninterface NavLinkWithHashProps extends NavLinkProps {\n    title?: string;\n}\n\n// \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u043c \u0432 \u0441\u0432\u043e\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442-\u043e\u0431\u0435\u0440\u0442\u043a\u0443 \u0432\u0441\u0435 \u043f\u0440\u043e\u043f\u0441\u044b (\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0438 \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0435)\nconst NavLinkWithHash: React.FC<NavLinkWithHashProps> = ({ title, ...props }) => {\n    const { hubId } = useSelector((state: TStore) => (\n        { hubId: state.orders.filters.hubIds[0] }\n    ));\n\n    const newHref = `${props.to}#ordersFilterHubId=${hubId};`\n\n    return (\n        <Tooltip title={title || ''}>\n            <NavLink {...props} to={newHref}>\n                {props.children}\n            </NavLink>\n        </Tooltip>\n    );\n}\n\nexport default NavLinkWithHash;\n\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u0434\u0436\u0435\u043d\u0435\u0440\u0438\u043a\u0438"},"\u0414\u0436\u0435\u043d\u0435\u0440\u0438\u043a\u0438"),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0435\u0441\u0442\u044c \u043f\u043e\u0432\u0440\u043e\u0440\u044f\u044e\u0449\u0438\u0435\u0441\u044f \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044b, \u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0441 \u0434\u0436\u0435\u043d\u0435\u0440\u0438\u043a\u043e\u043c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface LikeButtonProps1 {\n  className: string;\n  count: number;\n  size: number;\n}\n\ninterface LikeButtonProps2 {\n  className: string;\n  count: number;\n  size: string;\n}\n\ninterface LikeButtonProps3 {\n  className: string;\n  count: number;\n  size: boolean;\n}\n")),(0,a.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0435\u043c \u0414\u0436\u0435\u043d\u0435\u0440\u0438\u043a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"interface LikeButtonProps<T> {\n  className: string;\n  count: number;\n  size:T;\n}\n\n// \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\nconst a = (\n  obj1: LikeButtonProps<number>\n  obj2: LikeButtonProps<string>\n  obj3: LikeButtonProps<boolean>\n) => {\n  return (\n    <ul>\n      <li>{obj1.size}</li>\n      <li>{obj2.size}</li>\n      <li>{obj3.size}</li>\n    </ul>\n  );\n}\n")),(0,a.kt)("h3",{id:"partial"},"Partial"),(0,a.kt)("p",null,"\u041c\u043e\u0436\u0435\u0442 \u0431\u0443\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d \u043d\u0435 \u0432\u0435\u0441\u044c \u0442\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445, \u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u043a\u0430\u043a\u0430\u044f-\u0442\u043e \u0447\u0430\u0441\u0442\u044c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"type TProps = {\n  update: (pagination: Partial<IPagination>) => void;\n  params: Partial<IArrowParams>;\n}\n\n")))}c.isMDXComponent=!0}}]);