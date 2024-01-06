"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[1979],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},188:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"\u041c\u0430\u0441\u0441\u0438\u0432\u044b \u2713",sidebar_position:2},i=void 0,c={unversionedId:"frontend/ts/array",id:"frontend/ts/array",title:"\u041c\u0430\u0441\u0441\u0438\u0432\u044b \u2713",description:"I \u0441\u043f\u043e\u0441\u043e\u0431 (with [ ])",source:"@site/docs/frontend/ts/2-array.md",sourceDirName:"frontend/ts",slug:"/frontend/ts/array",permalink:"/knowledge-bank/docs/frontend/ts/array",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/ts/2-array.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u041c\u0430\u0441\u0441\u0438\u0432\u044b \u2713",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u041e\u0431\u044a\u0435\u043a\u0442\u044b \u2713",permalink:"/knowledge-bank/docs/frontend/ts/object"},next:{title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438",permalink:"/knowledge-bank/docs/frontend/ts/function"}},l={},s=[{value:"I \u0441\u043f\u043e\u0441\u043e\u0431 (with  )",id:"i-\u0441\u043f\u043e\u0441\u043e\u0431-with--",level:2},{value:"II \u0441\u043f\u043e\u0441\u043e\u0431 (generic)",id:"ii-\u0441\u043f\u043e\u0441\u043e\u0431-generic",level:2},{value:"Array of objects",id:"array-of-objects",level:2},{value:"\u041a\u043e\u0440\u0442\u0435\u0436",id:"\u043a\u043e\u0440\u0442\u0435\u0436",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"i-\u0441\u043f\u043e\u0441\u043e\u0431-with--"},"I \u0441\u043f\u043e\u0441\u043e\u0431 (with ","[ ]",")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const a: number[] = [1,2,3];\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"ii-\u0441\u043f\u043e\u0441\u043e\u0431-generic"},"II \u0441\u043f\u043e\u0441\u043e\u0431 (generic)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const a: Array<number> = [1, 2, 3];\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"array-of-objects"},"Array of objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// type\ntype TSomeType = {\n  id: number;\n  name: string;\n}\n\n// or interface\ninterface ISomeInterface {\n  id: number;\n  name: string;\n}\n\nconst a: TSomeType[] = [{...}, {...}, ];\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u043a\u043e\u0440\u0442\u0435\u0436"},"\u041a\u043e\u0440\u0442\u0435\u0436"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// \u041a\u041e\u0422\u0420\u0415\u0416, \u043a\u043e\u0433\u0434\u0430 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e \u0442\u043e\u0447\u043d\u043e\u0435 \u043a\u043e\u043b-\u0432\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432\nconst someArray: [string, string, string, string] = ['asdf', 'cxvzx', 'rerer', 'fadsf'];\n")))}u.isMDXComponent=!0}}]);