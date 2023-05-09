"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[986],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"\u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f",sidebar_position:8},i=void 0,l={unversionedId:"frontend/react/optimization",id:"frontend/react/optimization",title:"\u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f",description:"- No many npm packages",source:"@site/docs/frontend/react/optimization.md",sourceDirName:"frontend/react",slug:"/frontend/react/optimization",permalink:"/knowledge-bank/docs/frontend/react/optimization",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/react/optimization.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"\u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"NextJS",permalink:"/knowledge-bank/docs/frontend/react/nextjs"},next:{title:"\u0421\u0430\u043c\u043e\u043f\u0438\u0441\u043d\u044b\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442",permalink:"/knowledge-bank/docs/frontend/react/component"}},c={},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"No many npm packages"),(0,a.kt)("li",{parentName:"ul"},"Chunks division"),(0,a.kt)("li",{parentName:"ul"},"Debounce and Throttling"),(0,a.kt)("li",{parentName:"ul"},"Desktop/Mobile app optimization"),(0,a.kt)("li",{parentName:"ul"},"Gzip compression (",(0,a.kt)("inlineCode",{parentName:"li"},"compression"),")"),(0,a.kt)("li",{parentName:"ul"},"Lazy loading (",(0,a.kt)("inlineCode",{parentName:"li"},"React.lazy()"),")"),(0,a.kt)("li",{parentName:"ul"},"images compression"),(0,a.kt)("li",{parentName:"ul"},"tree shaking imports"),(0,a.kt)("li",{parentName:"ul"},"redux code splitiong (",(0,a.kt)("inlineCode",{parentName:"li"},"redux-dynamic-modules"),")"),(0,a.kt)("li",{parentName:"ul"},"redux reselect - \u043c\u0435\u043c\u043e\u0438\u0437\u0430\u0446\u0438\u044f \u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440\u043e\u0432"),(0,a.kt)("li",{parentName:"ul"},"no rerenders (",(0,a.kt)("inlineCode",{parentName:"li"},"React.useMemo(), React.callback()"),") \u0438 \u0434\u0435\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f (\u0440\u0430\u0437\u0431\u0438\u0432\u043a\u0430)"),(0,a.kt)("li",{parentName:"ul"},"\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b (hoc) \u0438 \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { getFile } from './usersService/createUser';\n")))}u.isMDXComponent=!0}}]);