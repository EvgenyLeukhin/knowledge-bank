"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[8009],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(r),k=o,b=s["".concat(l,".").concat(k)]||s[k]||u[k]||a;return r?n.createElement(b,c(c({ref:t},d),{},{components:r})):n.createElement(b,c({ref:t},d))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},9970:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={title:"Docker",sidebar_position:4},c=void 0,i={unversionedId:"backend/docker",id:"backend/docker",title:"Docker",description:"TODO",source:"@site/docs/backend/4-docker.md",sourceDirName:"backend",slug:"/backend/docker",permalink:"/knowledge-bank/docs/backend/docker",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/backend/4-docker.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Docker",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Database",permalink:"/knowledge-bank/docs/backend/db"},next:{title:"Basics",permalink:"/knowledge-bank/docs/backend/nodejs/basics"}},l={},p=[{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0434\u0435\u0441\u043a\u0442\u043e\u0440 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0434\u0435\u0441\u043a\u0442\u043e\u0440-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",level:2},{value:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",id:"\u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",level:2}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"TODO"),(0,o.kt)("h2",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0434\u0435\u0441\u043a\u0442\u043e\u0440-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0434\u0435\u0441\u043a\u0442\u043e\u0440 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop/"},"https://www.docker.com/products/docker-desktop/")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"https://hub.docker.com/")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0427\u0435\u0440\u0435\u0437 Google"),(0,o.kt)("li",{parentName:"ul"},"\u0427\u0435\u0440\u0435\u0437 Github")),(0,o.kt)("hr",null))}u.isMDXComponent=!0}}]);