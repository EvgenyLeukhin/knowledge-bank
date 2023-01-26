"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[9545],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(t),k=l,g=m["".concat(i,".").concat(k)]||m[k]||p[k]||a;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=m;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:l,o[1]=u;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1167:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var r=t(7462),l=(t(7294),t(3905));const a={title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438",sidebar_position:7},o=void 0,u={unversionedId:"frontend/js-basics/functions",id:"frontend/js-basics/functions",title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438",description:"\u0412 JS \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043f\u043e \u0441\u0443\u0442\u0438 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u043c\u0438.",source:"@site/docs/frontend/js-basics/functions.md",sourceDirName:"frontend/js-basics",slug:"/frontend/js-basics/functions",permalink:"/knowledge-bank/docs/frontend/js-basics/functions",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/js-basics/functions.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u041e\u0431\u044a\u0435\u043a\u0442\u044b ---",permalink:"/knowledge-bank/docs/frontend/js-basics/objects"},next:{title:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435",permalink:"/knowledge-bank/docs/frontend/js-basics/variables"}},i={},s=[{value:"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441",id:"\u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441",level:2},{value:"\u041d\u0435\u0439\u043c\u0438\u043d\u0433",id:"\u043d\u0435\u0439\u043c\u0438\u043d\u0433",level:2},{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0437\u0430\u043f\u0438\u0441\u0438",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b-\u0437\u0430\u043f\u0438\u0441\u0438",level:2},{value:"\u041a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c (Function declaration)",id:"\u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0430\u044f-\u0437\u0430\u043f\u0438\u0441\u044c-function-declaration",level:3},{value:"\u0417\u0430\u043f\u0438\u0441\u044c \u0447\u0435\u0440\u0435\u0437 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e (Function expression)",id:"\u0437\u0430\u043f\u0438\u0441\u044c-\u0447\u0435\u0440\u0435\u0437-\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e-function-expression",level:3},{value:"\u0421\u0442\u0440\u0435\u043b\u043e\u0447\u043d\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c (ES6 - Arrow function)",id:"\u0441\u0442\u0440\u0435\u043b\u043e\u0447\u043d\u0430\u044f-\u0437\u0430\u043f\u0438\u0441\u044c-es6---arrow-function",level:3},{value:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0432 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e",id:"\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435-\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430-\u0432-\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e",level:3},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b-\u043f\u043e-\u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e",level:3},{value:"\u041e\u0431\u044a\u0435\u043a\u0442 arguments",id:"\u043e\u0431\u044a\u0435\u043a\u0442-arguments",level:3},{value:"return",id:"return",level:2},{value:"\u0412\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438",id:"\u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0438",level:2},{value:"\u0412\u043e\u0437\u0432\u0440\u0430\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0438\u0437 \u0444\u0443\u043d\u043a\u0446\u0438\u0438",id:"\u0432\u043e\u0437\u0432\u0440\u0430\u0442-\u0444\u0443\u043d\u043a\u0446\u0438\u0438-\u0438\u0437-\u0444\u0443\u043d\u043a\u0446\u0438\u0438",level:2}],c={toc:s};function p(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u0412 JS \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043f\u043e \u0441\u0443\u0442\u0438 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u043c\u0438."),(0,l.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u044e\u0442 \u0434\u043b\u044f \u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u044f \u043a\u043e\u0434\u0430 \u0438 \u0443\u043f\u0440\u0430\u0449\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f. \u0417\u0430\u0434\u0430\u0451\u0442\u0441\u044f \u043e\u0434\u0438\u043d \u0440\u0430\u0437 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043c\u043d\u043e\u0433\u043e\u043a\u0440\u0430\u0442\u043d\u043e \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u0430\u043b\u0435\u0435. \u0415\u0441\u043b\u0438 \u0432 \u0441\u0432\u043e\u0451\u043c \u043a\u043e\u0434\u0435 \u0432\u044b \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0435\u0442\u0435 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u0435 \u043a\u0443\u0441\u043a\u0438 \u043a\u043e\u0434\u0430 \u043c\u043d\u043e\u0433\u043e \u0440\u0430\u0437, \u0442\u043e \u043b\u0443\u0447\u0448\u0435 \u0432\u044b\u0432\u0435\u0441\u0442\u0438 \u0438\u0437 \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u044e (",(0,l.kt)("strong",{parentName:"p"},"DRY"),")."),(0,l.kt)("p",null,"\u0424. \u043d\u0435 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0441\u0438\u043b\u044c\u043d\u043e \u043f\u0435\u0440\u0435\u0433\u0440\u0443\u0436\u0430\u0442\u044c \u043b\u043e\u0433\u0438\u0433\u043e\u0439, \u043e\u043d\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0440\u0435\u0448\u0430\u0442\u044c\u0441\u044f \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u044e\u0449\u0438\u0435\u0441\u044f \u0437\u0430\u0434\u0430\u0447\u0438 (",(0,l.kt)("strong",{parentName:"p"},"KISS"),")."),(0,l.kt)("h2",{id:"\u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function name(parametr1, parament2, ..., paramentN) {\n  // function body (\u0442\u0435\u043b\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u0438) \u0445\u0440\u0430\u043d\u0438\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0439 \u043a\u043e\u0434\n  // return something;\n}\n\n// \u0432\u044b\u0437\u043e\u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438\nname();\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u043d\u0435\u0439\u043c\u0438\u043d\u0433"},"\u041d\u0435\u0439\u043c\u0438\u043d\u0433"),(0,l.kt)("p",null,"\u0415\u0441\u043b\u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f - \u044d\u0442\u043e \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435, \u0442\u043e \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f - \u044d\u0442\u043e ",(0,l.kt)("strong",{parentName:"p"},"\u0433\u043b\u0430\u0433\u043e\u043b, \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"),". \u041e\u0431\u0449\u0435\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u043e - \u0432 \u041d\u0410\u0417\u0412\u0410\u041d\u0418\u0418 \u0424\u0423\u041d\u041a\u0426\u0418\u0418 \u0434\u043e\u043b\u0436\u0435\u043d \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0442\u0441\u044f \u0433\u043b\u0430\u0433\u043e\u043b, \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0449\u0438\u0439 \u0442\u043e, \u0447\u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0434\u0435\u043b\u0430\u0435\u0442:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"get")," - \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"calc")," - \u0447\u0442\u043e-\u0442\u043e \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u044e\u0442"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"create")," - \u0447\u0442\u043e-\u0442\u043e \u0441\u043e\u0437\u0434\u0430\u044e\u0442"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"show")," - \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"check")," - \u0447\u0442\u043e-\u0442\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u044e\u0442 \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0442 \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b-\u0437\u0430\u043f\u0438\u0441\u0438"},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0437\u0430\u043f\u0438\u0441\u0438"),(0,l.kt)("h3",{id:"\u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0430\u044f-\u0437\u0430\u043f\u0438\u0441\u044c-function-declaration"},"\u041a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c (Function declaration)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u041d\u0443\u0436\u043d\u043e \u0438\u043c\u0435\u043d\u043e\u0432\u0430\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u044e."),(0,l.kt)("li",{parentName:"ul"},"\u0412\u044b\u0437\u044b\u0432\u0430\u0442\u044c \u0442\u0430\u043a\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u043c\u043e\u0436\u043d\u043e \u0438\u0437 \u043b\u044e\u0431\u043e\u0433\u043e \u043c\u0435\u0441\u0442\u0430, \u0434\u0430\u0436\u0435 \u0434\u043e \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f (\u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0442\u0430\u043a\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function summ(a, b) {\n  return a + b;\n}\n\nsumm; // \u0432\u0435\u0440\u043d\u0435\u0442\u0441\u044f \u043a\u043e\u0434 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 - \u043e\u0448\u0438\u0431\u043a\u0438 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442\nsumm(1, 2); // 3\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u0411\u0443\u0434\u0435\u0442 \u043e\u0448\u0438\u0431\u043a\u0430 - \u043d\u0443\u0436\u043d\u043e \u0438\u043c\u044f\n// SyntaxError: Function statements require a function name\nfunction(a, b) {\n  return (a + b);\n};\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\u0437\u0430\u043f\u0438\u0441\u044c-\u0447\u0435\u0440\u0435\u0437-\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e-function-expression"},"\u0417\u0430\u043f\u0438\u0441\u044c \u0447\u0435\u0440\u0435\u0437 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e (Function expression)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u041f\u0440\u0438 \u0442\u0430\u043a\u043e\u0439 \u0444\u043e\u0440\u043c\u0435 \u0437\u0430\u043f\u0438\u0441\u0438 \u0438\u043c\u044f \u043d\u0430 \u0441\u0435\u0431\u044f \u0431\u0435\u0440\u0435\u0442 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f, \u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0443\u0436\u0435 \u0438\u043c\u0435\u043d\u043e\u0432\u0430\u0442\u044c \u043d\u0435 \u043d\u0443\u0436\u043d\u043e."),(0,l.kt)("li",{parentName:"ul"},"; \u0432 \u043a\u043e\u043d\u0446\u0435"),(0,l.kt)("li",{parentName:"ul"},"\u0412\u044b\u0437\u044b\u0432\u0430\u0442\u044c \u043c\u043e\u0436\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0441\u043b\u0435 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const summ = function (a, b) {\n  return a + b;\n};\n\nsumm(1, 2); // 3\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\u0441\u0442\u0440\u0435\u043b\u043e\u0447\u043d\u0430\u044f-\u0437\u0430\u043f\u0438\u0441\u044c-es6---arrow-function"},"\u0421\u0442\u0440\u0435\u043b\u043e\u0447\u043d\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c (ES6 - Arrow function)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0423\u043f\u0440\u043e\u0449\u0435\u043d\u043d\u044b\u0439 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 ES6 \u0431\u0435\u0437 \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0433\u043e \u0441\u043b\u043e\u0432\u0430 function. "),(0,l.kt)("li",{parentName:"ul"},"\u0415\u0441\u043b\u0438 \u0437\u0430\u043f\u0438\u0441\u044c \u0438\u0434\u0435\u0442 \u0432 \u043e\u0434\u043d\u0443 \u0441\u0442\u0440\u043e\u0447\u043a\u0443, \u0442\u043e \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e return \u043c\u043e\u0436\u043d\u043e \u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c"),(0,l.kt)("li",{parentName:"ul"},"\u0415\u0441\u043b\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u0438\u043d, \u0442\u043e \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u043c\u043e\u0436\u043d\u043e \u043d\u0435 \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c"),(0,l.kt)("li",{parentName:"ul"},"\u0412\u044b\u0437\u044b\u0432\u0430\u0442\u044c \u043d\u0443\u0436\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0441\u043b\u0435 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u0434\u0432\u0430 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 - \u0441\u043a\u043e\u0431\u043a\u0438 \u043d\u0443\u0436\u043d\u044b\nconst summ = (a, b) => a + b;\n\nsumm(1, 2); // 3\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u043e\u0434\u0438\u043d \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 - \u0441\u043a\u043e\u0431\u043a\u0438 \u043d\u0435 \u043d\u0443\u0436\u043d\u044b\nconst greeting = name => console.log(`Hello, ${name}!`);\n\ngreeting('John'); // 'Hello, John!'\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435-\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430-\u0432-\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0432 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e"),(0,l.kt)("p",null,"\u0422\u0430\u043a\u0436\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c \u0432 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const greeting = (name) => {\n  console.log(`Hello, ${name}!`);\n}\n\nconst a = greeting('John');\nconst b = greeting;\n\n// \u0432\u044b\u0437\u043e\u0432 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445\na; // 'Hello, John!'\nb('Jack'); // 'Hello, Jack!'\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u042d\u0442\u043e \u0441\u0432\u043e\u0435\u0433\u043e \u0440\u043e\u0434\u0430 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0432\u043d\u0443\u0442\u0440\u0438 \u0442\u0435\u043b\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438."),(0,l.kt)("li",{parentName:"ul"},"\u041b\u0443\u0447\u0448\u0435 \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 - \u043f\u043e\u0442\u043e\u043c \u0431\u0443\u0434\u0435\u0442 \u0441\u043b\u043e\u0436\u043d\u043e \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0442\u044c, \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044c \u0438 \u0430\u043a\u0442\u0443\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c."),(0,l.kt)("li",{parentName:"ul"},"\u0434\u043e 4-\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 - \u043e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u043e, 5 - \u0443\u0436\u0435 \u043c\u043d\u043e\u0433\u043e"),(0,l.kt)("li",{parentName:"ul"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043c\u043e\u0436\u043d\u043e \u0432\u043e\u043e\u0431\u0449\u0435 \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c, \u0430 \u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u043a\u0440\u0443\u0433\u043b\u0443\u044e \u0441\u043a\u043e\u0431\u043a\u0443 \u043f\u0443\u0441\u0442\u043e\u0439.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u0424\u0443\u043d\u043a\u0446\u0438\u044f c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043ev\nfunction greeting(name) {\n  console.log(`Hello, ${name}!`);\n}\n\n// \u0432\u044b\u0437\u043e\u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0441 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u043c\ngreeting('John'); // 'Helllo, John!'\n\n// \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u0438 \u0432\u044b\u0437\u043e\u0432\u0435 \u043d\u0435 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 - \u0431\u0443\u0434\u0435\u0442 undefined\ngreeting(); // 'Helllo, undefined!'\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0431\u0435\u0437 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432\nfunction returnConsole() {\n  console.log('Something');\n}\n\nreturnConsole(); // 'Something'\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b-\u043f\u043e-\u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u041c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u043b\u044e\u0431\u044b\u0445 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432 \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0439"),(0,l.kt)("li",{parentName:"ul"},"\u0412 \u0441\u0442\u0440\u0435\u043b\u043e\u0447\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438 \u0441 \u043e\u0434\u043d\u0438\u043c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u043c \u043d\u0443\u0436\u043d\u044b \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438, \u0435\u0441\u043b\u0438 \u0435\u0441\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const greeting = (name = \"User\") => {\n  console.log(`Hello, ${name}!`);\n}\n\ngreeting(); // 'Hello, User!'\n")),(0,l.kt)("h3",{id:"\u043e\u0431\u044a\u0435\u043a\u0442-arguments"},"\u041e\u0431\u044a\u0435\u043a\u0442 arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u041c\u043e\u0436\u043d\u043e \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432 \u0442\u0435\u043b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0432\u0441\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"arguments")," \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0441\u043e \u0441\u0442\u0440\u0435\u043b\u043e\u0447\u043d\u044b\u043c\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u043c\u0438.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const greeting = function (name = \"User\") {\n  console.log('Hello ' + name);\n  console.log(arguments);\n}\n\ngreeting('Jack', 'Jack2', 'Jack3'); // 'Hello, User!'\n// Arguments(3)\xa0['Jack', 'Jack2', 'Jack3', callee: (...), Symbol(Symbol.iterator): \u0192]\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"return"},"return"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u041a\u0430\u043a \u0442\u043e\u043b\u044c\u043a\u043e js-\u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0442\u043e\u0440 \u0434\u043e\u0445\u043e\u0434\u0438\u0442 \u0434\u043e ",(0,l.kt)("strong",{parentName:"li"},"return"),", \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u043c \u043f\u0440\u0435\u043a\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f (\u043a\u043e\u0434, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0438\u0436\u0435 \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"return")," \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c \u0432 \u043e\u0434\u043d\u0443 \u0441\u0442\u0440\u043e\u043a\u0443"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"return")," \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c \u0431\u0435\u0437 \u0432\u0441\u0435\u0433\u043e (\u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u0433\u0434\u0430 \u043d\u0443\u0436\u043d\u043e \u043f\u0440\u0435\u043a\u0440\u0430\u0442\u0438\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0443 \u0444\u0443\u043d\u043a\u0446\u0438\u0438)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function summ(a, b) {\n  return console.log(a, b); // 1, 2\n  a + b; // \u044d\u0442\u043e \u0441\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0441\u044f\n}\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0438"},"\u0412\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438"),(0,l.kt)("p",null,"\u0412\u043d\u0443\u0442\u0440\u0438 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0444\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435 \u0441\u043b\u0443\u0436\u0435\u0431\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043a\u0430\u043a\u0438\u0445-\u043b\u0438\u0431\u043e \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const someFunc = (someString) => {\n  const stringToUpperCase = (string) => string.toUpperCase();\n\n  if (typeof someString === 'string') {\n    return console.log(stringToUpperCase(someString));\n  } else {\n    console.log('\u041f\u0435\u0440\u0435\u0434\u0430\u0451\u0442\u0441\u044f \u043d\u0435 \u0441\u0442\u0440\u043e\u043a\u0430');\n  }\n}\n\nsomeFunc('Hello, world!'); // 'HELLO, WORLD!'\nsomeFunc(123); // '\u041f\u0435\u0440\u0435\u0434\u0430\u0451\u0442\u0441\u044f \u043d\u0435 \u0441\u0442\u0440\u043e\u043a\u0430'\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u0432\u043e\u0437\u0432\u0440\u0430\u0442-\u0444\u0443\u043d\u043a\u0446\u0438\u0438-\u0438\u0437-\u0444\u0443\u043d\u043a\u0446\u0438\u0438"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0438\u0437 \u0444\u0443\u043d\u043a\u0446\u0438\u0438"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u041b\u0443\u0447\u0448\u0435 \u043d\u0435 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u0446\u0435\u043f\u043e\u0447\u0435\u043a, \u0447\u0442\u043e\u0431\u044b \u0431\u044b\u043b\u043e \u043f\u043e\u043d\u044f\u0442\u043d\u043e \u043d\u0435 \u043d\u0443\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 2-\u0445"),(0,l.kt)("li",{parentName:"ul"},"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0443\u0440\u043e\u0432\u043d\u0435\u043c \u043d\u0438\u0436\u0435 - \u044d\u0442\u043e \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0430\u043d\u043e\u043d\u0438\u043c\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u0438\u0445 \u0438\u043c\u0435\u043d\u043e\u0432\u0430\u0442\u044c \u043d\u0435 \u043d\u0443\u0436\u043d\u043e"),(0,l.kt)("li",{parentName:"ul"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b, \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0435 \u043d\u0430 \u0432\u0435\u0440\u0445\u043d\u0435\u043c \u0443\u0440\u043e\u0432\u043d\u0435 \u0431\u0443\u0434\u0443\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u043d\u0430 \u043d\u0438\u0436\u043d\u0438\u0445, \u043f\u0440\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u0438 \u0447\u0442\u043e \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043d\u0435 \u0431\u0443\u0434\u0443\u0442 \u0438\u043c\u0435\u0442\u044c \u0442\u0430\u043a\u0438\u0438\u0445 \u0436\u0435 \u043e\u0434\u043d\u043e\u0438\u043c\u0435\u043d\u043d\u044b\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function someFunc(name) {\n  return function () {\n    return function () {\n      console.log(name);\n    }\n  }\n}\n\nsomeFunc('Jack')()(); // 'Jack'\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function someFunc(name) {\n  return function (name) {\n    return function () {\n      console.log(name);\n    }\n  }\n}\n\n// \u0422\u0430\u043a \u043a\u0430\u043a \u0435\u0441\u0442\u044c \u043e\u0434\u043d\u043e\u0438\u043c\u0435\u043d\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u0443 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438\nsomeFunc('Jack')()(); // 'undefined'\n")))}p.isMDXComponent=!0}}]);