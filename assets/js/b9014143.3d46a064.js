"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[4501],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),u=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(r),m=a,f=s["".concat(d,".").concat(m)]||s[m]||c[m]||i;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},8420:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u2713",sidebar_position:0},l=void 0,o={unversionedId:"frontend/react/redux/install",id:"frontend/react/redux/install",title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u2713",description:"with yarn",source:"@site/docs/frontend/react/4-redux/0-install.md",sourceDirName:"frontend/react/4-redux",slug:"/frontend/react/redux/install",permalink:"/knowledge-bank/docs/frontend/react/redux/install",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/react/4-redux/0-install.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u2713",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"custom",permalink:"/knowledge-bank/docs/frontend/react/hooks/custom"},next:{title:"Provider \u0438 store \u2713",permalink:"/knowledge-bank/docs/frontend/react/redux/provider"}},d={},u=[{value:"with yarn",id:"with-yarn",level:2},{value:"with npm",id:"with-npm",level:2},{value:"redux-persist",id:"redux-persist",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"with-yarn"},"with yarn"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"yarn add @reduxjs/toolkit")," - \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 RTK"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"yarn add react-redux @types/react-redux")," - \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 react-redux"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"yarn add redux")," - \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 redux (\u043d\u0443\u0436\u043d\u043e \u043f\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438)")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"with-npm"},"with npm"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"npm install @reduxjs/toolkit")," - \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 RTK"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"npm install react-redux @types/react-redux")," - \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 react-redux"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"npm install redux")," - \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 redux (\u043d\u0443\u0436\u043d\u043e \u043f\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438)")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"redux-persist"},"redux-persist"),(0,a.kt)("p",null,"\u041f\u0430\u043a\u0435\u0442 \u0434\u043b\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0441\u0442\u043e\u0440\u0430 \u0432 localStorage. \u041d\u0443\u0436\u043d\u043e \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043a\u043e\u043c\u0444\u0438\u0433\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"yarn add redux-persist")," - \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 redux-persist"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"npm install redux-persist")," - \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 redux-persist")))}c.isMDXComponent=!0}}]);