"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[5481],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(f,c(c({ref:t},d),{},{components:n})):r.createElement(f,c({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2205:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"sort()",sidebar_position:4},c=void 0,i={unversionedId:"frontend/react/data/sort",id:"frontend/react/data/sort",title:"sort()",description:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430",source:"@site/docs/frontend/react/7-data/4-sort.md",sourceDirName:"frontend/react/7-data",slug:"/frontend/react/data/sort",permalink:"/knowledge-bank/docs/frontend/react/data/sort",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/react/7-data/4-sort.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"sort()",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"find(), some(), every()",permalink:"/knowledge-bank/docs/frontend/react/data/find, some, every"},next:{title:"reduce()",permalink:"/knowledge-bank/docs/frontend/react/data/reduce"}},l={},s=[{value:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430",id:"\u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430",level:2},{value:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u0434\u0430\u0442",id:"\u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430-\u0434\u0430\u0442",level:2}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430"},"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"[3, 2, 0, 1] --\x3e [0, 1, 2, 3]")),(0,a.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043e\u0442\u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const a = [\n  { id: 3, name: '\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d' },\n  { id: 2, name: '\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u0441\u0442\u0430\u0442\u0443\u0441' },\n  { id: 0, name: '\u0421\u0442\u0430\u0440\u044b\u0439 \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u0441\u0442\u0430\u0442\u0443\u0441' },\n  { id: 1, name: '\u0427\u0442\u043e \u0442\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442' },\n];\n\n// straight sorting\nconst sortedA = a.sort((nextEl, curEl) => nextEl.id - curEl.id); // 0, 1, 2, 3\n\n// reversed sorting\nconst sortedAReversed = a.sort((nextEl, curEl) => curEl.id - nextEl.id); // 3, 2, 1, 0\n\n// sort by name - 1 \u0441\u043f\u043e\u0441\u043e\u0431 \u0447\u0435\u0440\u0435\u0437 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 \u0441\u0442\u0440\u043e\u043a\na.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));\n\n// sort by name - 2 \u0441\u043f\u043e\u0441\u043e\u0431 \u0447\u0435\u0440\u0435\u0437 codePointAt()\na.sort((next, curr) => {\n  return next.name.codePointAt() - curr.name.codePointAt();\n});\n\n// sort by name - 3 \u0441\u043f\u043e\u0441\u043e\u0431 \u0447\u0435\u0440\u0435\u0437 localeCompare()\na.sort((a, b) => a.name.localeCompare(b.name));\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430-\u0434\u0430\u0442"},"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u0434\u0430\u0442"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const a = ['06.01.2024', '01.01.2024', '04.01.2024', '02.01.2024', '12.01.2024'];\n\nconst b = a.sort((nextItem, item) => {\n  const day = new Date(item);\n  const dayNext = new Date(nextItem);\n\n  return dayNext - day;\n});\n\nconsole.log(b); // ['01.01.2024', '02.01.2024', '04.01.2024', '06.01.2024', '12.01.2024']\n")),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);