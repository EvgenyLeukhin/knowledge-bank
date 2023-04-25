"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[8140],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>p});var n=t(7294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=n.createContext({}),d=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=d(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=d(t),p=l,v=f["".concat(c,".").concat(p)]||f[p]||u[p]||i;return t?n.createElement(v,o(o({ref:r},s),{},{components:t})):n.createElement(v,o({ref:r},s))}));function p(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var i=t.length,o=new Array(i);o[0]=f;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:l,o[1]=a;for(var d=2;d<i;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7901:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=t(7462),l=(t(7294),t(3905));const i={title:"\u0426\u0438\u043a\u043b\u044b ---",sidebar_position:10},o=void 0,a={unversionedId:"frontend/js-basics/cycles",id:"frontend/js-basics/cycles",title:"\u0426\u0438\u043a\u043b\u044b ---",description:"forEach",source:"@site/docs/frontend/js-basics/cycles.md",sourceDirName:"frontend/js-basics",slug:"/frontend/js-basics/cycles",permalink:"/knowledge-bank/docs/frontend/js-basics/cycles",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/js-basics/cycles.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"\u0426\u0438\u043a\u043b\u044b ---",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"\u041b\u043e\u0433\u0438\u043a\u0430 ---",permalink:"/knowledge-bank/docs/frontend/js-basics/logic"},next:{title:"\u041c\u0430\u0441\u0441\u0438\u0432\u044b",permalink:"/knowledge-bank/docs/frontend/js-basics/arrays"}},c={},d=[{value:"forEach",id:"foreach",level:2},{value:"for",id:"for",level:2},{value:"while",id:"while",level:2},{value:"do-while",id:"do-while",level:2},{value:"for ... of",id:"for--of",level:2},{value:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438 \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432",id:"\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438-\u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432",level:2},{value:"map",id:"map",level:3},{value:"filter",id:"filter",level:3},{value:"find",id:"find",level:3},{value:"some",id:"some",level:3},{value:"every",id:"every",level:3},{value:"reduce",id:"reduce",level:3},{value:"includes",id:"includes",level:3},{value:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432",id:"\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438-\u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432",level:2},{value:"for / in",id:"for--in",level:3}],s={toc:d};function u(e){let{components:r,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"foreach"},"forEach"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"for"},"for"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"while"},"while"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"do-while"},"do-while"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"for--of"},"for ... of"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438-\u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432"},"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438 \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432"),(0,l.kt)("h3",{id:"map"},"map"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"filter"},"filter"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"find"},"find"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"some"},"some"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"every"},"every"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"reduce"},"reduce"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"includes"},"includes"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438-\u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432"},"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432"),(0,l.kt)("h3",{id:"for--in"},"for / in"))}u.isMDXComponent=!0}}]);