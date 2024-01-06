"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[7554],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={title:"\u041f\u0440\u0438\u043c\u0438\u0442\u0438\u0432\u043d\u044b\u0435 \u0442\u0438\u043f\u044b \u2713",sidebar_position:0},a=void 0,l={unversionedId:"frontend/ts/primitives",id:"frontend/ts/primitives",title:"\u041f\u0440\u0438\u043c\u0438\u0442\u0438\u0432\u043d\u044b\u0435 \u0442\u0438\u043f\u044b \u2713",description:"\u0422\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0441 \u043f\u0440\u0438\u043c\u0438\u0442\u0438\u0432\u043d\u044b\u043c\u0438\u043c \u0442\u0438\u043f\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445.",source:"@site/docs/frontend/ts/0-primitives.md",sourceDirName:"frontend/ts",slug:"/frontend/ts/primitives",permalink:"/knowledge-bank/docs/frontend/ts/primitives",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/ts/0-primitives.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"\u041f\u0440\u0438\u043c\u0438\u0442\u0438\u0432\u043d\u044b\u0435 \u0442\u0438\u043f\u044b \u2713",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043c\u044f",permalink:"/knowledge-bank/docs/frontend/js/date"},next:{title:"\u041e\u0431\u044a\u0435\u043a\u0442 \u2713",permalink:"/knowledge-bank/docs/frontend/ts/object"}},c={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u0422\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0441 \u043f\u0440\u0438\u043c\u0438\u0442\u0438\u0432\u043d\u044b\u043c\u0438\u043c \u0442\u0438\u043f\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"let a: string = 'Some string';  // string\nlet b: number = 123;            // number\nlet c: boolean = true;          // boolean\nlet d: null =  null;            // null\nlet e: undefined =  undefined;  // undefined\n\n// mix types\nlet f: string | number = '123';\nlet g: null | undefined = null;\n")))}u.isMDXComponent=!0}}]);