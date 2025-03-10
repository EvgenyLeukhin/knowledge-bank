"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[8076],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=o,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return t?r.createElement(f,u(u({ref:n},c),{},{components:t})):r.createElement(f,u({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,u=new Array(a);u[0]=p;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,u[1]=s;for(var l=2;l<a;l++)u[l]=t[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6484:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>u,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={title:"Enum",sidebar_position:6},u=void 0,s={unversionedId:"frontend/ts/archive/enum",id:"frontend/ts/archive/enum",title:"Enum",description:"Enum \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432",source:"@site/docs/frontend/ts/88-archive/6-enum.md",sourceDirName:"frontend/ts/88-archive",slug:"/frontend/ts/archive/enum",permalink:"/knowledge-bank/docs/frontend/ts/archive/enum",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/ts/88-archive/6-enum.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Enum",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Interface",permalink:"/knowledge-bank/docs/frontend/ts/archive/interface"},next:{title:"TypeScript \u043e\u0442 \u042f",permalink:"/knowledge-bank/docs/frontend/ts/archive/typescript-from-yandex"}},i={},l=[{value:"Enum \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432",id:"enum-\u0434\u043b\u044f-\u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432",level:2},{value:"enum",id:"enum",level:2},{value:"conts enum",id:"conts-enum",level:2},{value:"enum inside Record",id:"enum-inside-record",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 enum \u043a\u0430\u043a key",id:"\u043f\u0440\u0438\u043c\u0435\u0440-enum-\u043a\u0430\u043a-key",level:2}],c={toc:l};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"enum-\u0434\u043b\u044f-\u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432"},"Enum \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"enum DrugstoreStatus {\n  UNDEFINED = 0,\n  WORK = 1,\n  TEMPRARILY_NOT_WORKING = 2,\n  CLOSED = 3,\n}\n\nenum ColorList {\n  GRAY = 'rgb(175, 175, 175)',\n  GREEN = 'rgb(0, 150, 50)',\n  RED = 'rgb(220,20,60)',\n  DARK_ORANGE = 'darkorange',\n}\n\n// \u043a\u043b\u044e\u0447\u0438 \u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043a\u0430\u043a enum\nconst drugstoreStatusColor: Record<DrugstoreStatus, ColorList> = {\n  [DrugstoreStatus.UNDEFINED]: ColorList.GRAY,\n  [DrugstoreStatus.WORK]: ColorList.GREEN,\n  [DrugstoreStatus.TEMPRARILY_NOT_WORKING]: ColorList.DARK_ORANGE,\n  [DrugstoreStatus.CLOSED]: ColorList.RED,\n};\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"enum"},"enum"),(0,o.kt)("p",null,"\u041f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f. \u0412 \u0441\u043a\u043e\u043c\u043f\u0438\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u043a\u043e\u0434\u0435 enum \u043f\u0440\u0435\u0432\u0440\u0430\u0442\u0438\u0442\u0441\u044f \u0432 \u043e\u0431\u044a\u0435\u043a\u0442."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"enum LangType {\n  ru = 'ru',\n  en = 'en',\n}\n")),(0,o.kt)("p",null,"\u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u043c\u043e\u0436\u043d\u043e enum \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u043c\u0430\u0441\u0441\u0438\u0432."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const langArray = Object.values(LangType); // ['ru', 'en']\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"conts-enum"},"conts enum"),(0,o.kt)("p",null,"\u0410 \u0432\u043e\u0442 const enum \u043d\u0435 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u043d\u043e\u0432\u044b\u0439 \u043a\u043e\u0434, \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435. \u041d\u0435\u043b\u044c\u0437\u044f \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043c\u0430\u0441\u0441\u0438\u0432 \u0447\u0435\u0440\u0435\u0437 Object.keys."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const enum Modes { \n  Show = 'show', \n  Edit = 'edit',\n}\n\nlet modeName: string = Modes.Show;\nconsole.log(modeName) // 'show'\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"enum-inside-record"},"enum inside Record"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// enum \u043a\u0430\u043a \u043a\u043b\u044e\u0447\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430\nenum LikeButtonProps {\n  CLASSNAME = 'className',\n  COUNT = 'count',\n  SIZE = 'size',\n}\n\n// enum \u0434\u043b\u044f keys \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e\nconst a: Record<LikeButtonProps, string> = {\n  className: 'some',\n  count: 'some',\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-enum-\u043a\u0430\u043a-key"},"\u041f\u0440\u0438\u043c\u0435\u0440 enum \u043a\u0430\u043a key"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// \u0447\u0435\u0440\u0435\u0437 enum\nenum Directions {\n  LEFT = 'left',\n  UP = 'up',\n  RIGHT = 'right',\n  DOWN = 'down',\n}\n\n// \u0430\u043d\u0430\u043b\u043e\u0433 \u0447\u0435\u0440\u0435\u0437 type\ntype TDirection = 'left' | 'up' | 'right' | 'down';\n\n// \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\nconst directions: Record<Directions, number> = {\n  left: 90,\n  up: 180,\n  right: 270,\n  down: 0,\n};\n")))}m.isMDXComponent=!0}}]);