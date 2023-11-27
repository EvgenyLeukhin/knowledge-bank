"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[8597],{3905:(e,n,l)=>{l.d(n,{Zo:()=>u,kt:()=>m});var t=l(7294);function a(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function o(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,t)}return l}function r(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?o(Object(l),!0).forEach((function(n){a(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function i(e,n){if(null==e)return{};var l,t,a=function(e,n){if(null==e)return{};var l,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)l=o[t],n.indexOf(l)>=0||(a[l]=e[l]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)l=o[t],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var c=t.createContext({}),s=function(e){var n=t.useContext(c),l=n;return e&&(l="function"==typeof e?e(n):r(r({},n),e)),l},u=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var l=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(l),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return l?t.createElement(f,r(r({ref:n},u),{},{components:l})):t.createElement(f,r({ref:n},u))}));function m(e,n){var l=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=l.length,r=new Array(o);r[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var s=2;s<o;s++)r[s]=l[s];return t.createElement.apply(null,r)}return t.createElement.apply(null,l)}p.displayName="MDXCreateElement"},1392:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var t=l(7462),a=(l(7294),l(3905));const o={title:"\u0426\u0438\u043a\u043b\u044b",sidebar_position:15},r=void 0,i={unversionedId:"frontend/js/cycles",id:"frontend/js/cycles",title:"\u0426\u0438\u043a\u043b\u044b",description:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043c\u043d\u043e\u0433\u043e\u043a\u0440\u0430\u0442\u043d\u044b\u0445 \u043f\u043e\u0432\u0442\u043e\u0440\u0435\u043d\u0438\u0439 \u043e\u0434\u043d\u043e\u0442\u0438\u043f\u043d\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439, \u043e\u0431\u044b\u0447\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043c\u0430\u0441\u0441\u0438\u0432\u0430\u043c\u0438.",source:"@site/docs/frontend/js/cycles.md",sourceDirName:"frontend/js",slug:"/frontend/js/cycles",permalink:"/knowledge-bank/docs/frontend/js/cycles",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/js/cycles.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"\u0426\u0438\u043a\u043b\u044b",sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"\u0423\u0441\u043b\u043e\u0432\u0438\u044f",permalink:"/knowledge-bank/docs/frontend/js/conditions"},next:{title:"DOM",permalink:"/knowledge-bank/docs/frontend/js/dom"}},c={},s=[{value:"forEach",id:"foreach",level:2},{value:"for of",id:"for-of",level:2},{value:"for",id:"for",level:2},{value:"break",id:"break",level:2},{value:"continue",id:"continue",level:2},{value:"\u041c\u0435\u0442\u043a\u0438 \u0434\u043b\u044f \u043c\u043d\u043e\u0433\u043e\u043c\u0435\u0440\u043d\u043e\u0433\u043e \u0446\u0438\u043a\u043b\u0430",id:"\u043c\u0435\u0442\u043a\u0438-\u0434\u043b\u044f-\u043c\u043d\u043e\u0433\u043e\u043c\u0435\u0440\u043d\u043e\u0433\u043e-\u0446\u0438\u043a\u043b\u0430",level:2},{value:"while",id:"while",level:2},{value:"do-while",id:"do-while",level:2},{value:"for-in",id:"for-in",level:2}],u={toc:s};function d(e){let{components:n,...l}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043c\u043d\u043e\u0433\u043e\u043a\u0440\u0430\u0442\u043d\u044b\u0445 \u043f\u043e\u0432\u0442\u043e\u0440\u0435\u043d\u0438\u0439 \u043e\u0434\u043d\u043e\u0442\u0438\u043f\u043d\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439, \u043e\u0431\u044b\u0447\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043c\u0430\u0441\u0441\u0438\u0432\u0430\u043c\u0438."),(0,a.kt)("h2",{id:"foreach"},"forEach"),(0,a.kt)("p",null,"\u0411\u043e\u043b\u0435\u0435 \u043d\u043e\u0432\u0430\u044f \u0438 \u043b\u0430\u043a\u043e\u043d\u0438\u0447\u043d\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c \u0441\u0442\u0430\u0440\u043e\u0433\u043e \u0446\u0438\u043a\u043b\u0430 for. \u041d\u0435 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442, \u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0435\u0440\u0435\u0431\u0438\u0440\u0430\u0435\u0442 \u043c\u0430\u0441\u0441\u0438\u0432. \u0423\u0434\u043e\u0431\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043d\u043e\u0432\u044b\u0445 \u0432\u0438\u0434\u043e\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043d\u044b\u0445 \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432 \u0438\u0437 \u0434\u0440\u0443\u0433\u0438\u0445 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0445."),(0,a.kt)("p",null,"\u041f\u0440\u043e\u0441\u0442\u043e\u0439 \u043f\u0435\u0440\u0435\u0431\u043e\u0440 \u043c\u0430\u0441\u0441\u0438\u0432\u0430. \u0415\u0441\u043b\u0438 \u043d\u0443\u0436\u043d\u043e \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u0440\u043e\u0431\u0435\u0436\u0430\u0442\u044c\u0441\u044f \u043f\u043e \u043c\u0430\u0441\u0441\u0438\u0432\u0443 \u0438 \u0437\u0430\u043f\u0443\u0448\u0438\u0442\u044c \u043a\u0430\u043a\u0438\u0435-\u0442\u043e \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0434\u0440\u0443\u0433\u043e\u0439 \u043c\u0430\u0441\u0441\u0438\u0432, \u0432 \u043e\u0442\u043b\u0447\u0438\u0435 \u043e\u0442 .map(), \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u0441\u0435\u0433\u0434\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043c\u0430\u0441\u0441\u0438\u0432"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const a = [\n  { id: 1, name: 'Name 1' },\n  { id: 2, name: 'Name 2' },\n  { id: 3, name: 'Name 3' },\n  { id: 4, name: 'Name 4' },\n  { id: 5, name: 'Name 5' },\n];\n\na.forEach(el => console.log(el.name));\n")),(0,a.kt)("p",null,"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// el - \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043c\u0430\u0441\u0441\u0438\u0432\u0430, index, arr - \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432\na.forEach((el, index, arr) => console.log(el));\na.forEach((el, index, arr) => console.log(index));\na.forEach((el, index, arr) => console.log(arr));\n")),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440. \u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u0441 \u0447\u0435\u0442\u043d\u044b\u043c\u0438 id."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const a = [\n  { id: 1, name: 'Name 1' },\n  { id: 2, name: 'Name 2' },\n  { id: 3, name: 'Name 3' },\n  { id: 4, name: 'Name 4' },\n  { id: 5, name: 'Name 5' },\n];\n\nconst b = [];\n\na.forEach(el => {\n  if (el.id % 2 === 0) {\n    b.push(el.id);\n  }\n});\n\nconsole.log(b); // [2, 4]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"for-of"},"for of"),(0,a.kt)("p",null,"\u0423\u043f\u0440\u043e\u0449\u0435\u043d\u043d\u0430\u044f \u0444\u043e\u0440\u043c\u0430 \u0437\u0430\u043f\u0438\u0441\u0438"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const a = [\n  { id: 1, name: 'Name 1' },\n  { id: 2, name: 'Name 2' },\n  { id: 3, name: 'Name 3' },\n  { id: 4, name: 'Name 4' },\n  { id: 5, name: 'Name 5' },\n];\n\nfor (item of a) {\n  console.log('item', item);\n}\n\n// with destructuring\nfor ({ id } of a) {\n  console.log('id', id);\n}\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"for"},"for"),(0,a.kt)("p",null,"\u0411\u044b\u043b \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u043c \u0446\u0438\u043a\u043b\u043e\u043c \u0432 ES5. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0438\u043d\u0434\u0435\u043a\u0441\u044b \u043c\u0430\u0441\u0441\u0438\u0432\u0430."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0443\u0434\u0430\u043b\u044f\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u043c\u043e\u0433\u043e \u043c\u0430\u0441\u0441\u0438\u0432\u0430."),(0,a.kt)("li",{parentName:"ul"},"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0439")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const a = [\n  { id: 1, name: 'Name 1' },\n  { id: 2, name: 'Name 2' },\n  { id: 3, name: 'Name 3' },\n  { id: 4, name: 'Name 4' },\n  { id: 5, name: 'Name 5' },\n];\n\nconst b = [];\n\n // \u0441\u0447\u0435\u0442\u0447\u0438\u043a \u0432\u043d\u0443\u0442\u0440\u0438\nfor (let i = 0; i < a.length; i++) {\n  b.push(a[i].id);\n  \n}\n\nconsole.log(b); // [1, 2, 3, 4, 5]\n\nconsole.log(i); // undefined - \u0442\u0430\u043a \u043a\u0430\u043a \"\u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u043e\u0435 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435\"\n")),(0,a.kt)("p",null,"\u041d\u0435\u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u043e\u0435 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'let i = 0; // \u0441\u0447\u0435\u0442\u0447\u0438\u043a \u0441\u043d\u0430\u0440\u0443\u0436\u0438\n\nconst a = [...];\nconst b = [];\n\nfor (i = 0; i < a.length; i++) {\n  b.push(a[i].id);\n}\n\nconsole.log(b); // [1, 2, 3, 4, 5]\n\nconsole.log(i); // 5 "\u043d\u0435\u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u043e\u0435 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435"\n')),(0,a.kt)("p",null,"\u0421\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u043d\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let i = 0;\n\n...\n\nfor (; i < a.length;) {\n  b.push(a[i].id);\n  i++;\n}\n\n...\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"break"},"break"),(0,a.kt)("p",null,"\u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u043f\u0440\u0435\u0440\u044b\u0432\u0430\u044e\u0449\u0430\u044f \u0446\u0438\u043a\u043b. \u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \u043f\u0440\u0435\u0440\u0432\u0451\u0442 \u0446\u0438\u043a\u043b, \u0435\u0441\u043b\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u0435 \u043f\u043e\u0441\u043b\u0435 if \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c\u0441\u044f, \u0442.\u0435. \u043a\u043e\u0433\u0434\u0430 i \u0441\u0442\u0440\u0430\u043d\u0435\u0442 \u0440\u0430\u0432\u043d\u044b\u043c 15. \u041d\u0435\u043b\u044c\u0437\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441 \u0442\u0435\u0440\u043d\u0430\u0440\u043d\u044b\u043c \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u043c."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"for (let i = 0; i < 100; i++) {\n  if (i % 15 == 0) { break; }\n  console.log(i);\n}\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"continue"},"continue"),(0,a.kt)("p",null,'\u0414\u0435\u043b\u0430\u0435\u0442 \u043f\u0440\u043e\u043f\u0443\u0441\u043a \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0438. \u0426\u0438\u043a\u043b "\u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442" \u0432\u0441\u0435 \u0447\u0451\u0442\u043d\u044b\u0435 \u0438\u043d\u0434\u0435\u043a\u0441\u044b. \u041d\u0435\u043b\u044c\u0437\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441 \u0442\u0435\u0440\u043d\u0430\u0440\u043d\u044b\u043c \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u043c.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"for (let i = 0; i < 100; i++) {\n  if (i %2 == 0) { continue; }\n  console.log(i);\n}\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u043c\u0435\u0442\u043a\u0438-\u0434\u043b\u044f-\u043c\u043d\u043e\u0433\u043e\u043c\u0435\u0440\u043d\u043e\u0433\u043e-\u0446\u0438\u043a\u043b\u0430"},"\u041c\u0435\u0442\u043a\u0438 \u0434\u043b\u044f \u043c\u043d\u043e\u0433\u043e\u043c\u0435\u0440\u043d\u043e\u0433\u043e \u0446\u0438\u043a\u043b\u0430"),(0,a.kt)("p",null,"\u041e\u0431\u044b\u0447\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0445 \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432 \u0432 \u0442\u0435\u043a\u0443\u0449\u0435\u043c \u043c\u0430\u0441\u0441\u0438\u0432\u0435."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"firstFor: for (let i = 0; i < 10; i++) {\n  console.log('i', i);\n\n  for (let j = 1; j < 10; j++) {\n    if (j === 5) {\n      break firstFor; // \u043f\u0440\u0435\u0440\u0432\u0435\u0442 \u0432\u0435\u0440\u0445\u043d\u0438\u0439 \u0446\u0438\u043a\u043b\n    }\n\n    console.log('j', j);\n  }\n}\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"while"},"while"),(0,a.kt)("p",null,"\u041d\u0430 \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0435"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let a = 0;\n\n// \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c\u0441\u044f 10 \u0440\u0430\u0437 (0, ..., 9)\nwhile (a < 10) {\n  console.log(a);\n  a++;\n}\n")),(0,a.kt)("p",null,"\u041d\u0430 \u0443\u043c\u0435\u043d\u044c\u0448\u0435\u043d\u0438\u0435"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let a = 10;\n\n// \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c\u0441\u044f 10 \u0440\u0430\u0437 (10, ..., 1)\nwhile (a) {\n  console.log(a);\n  a--;\n}\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"do-while"},"do-while"),(0,a.kt)("p",null,"\u0422\u043e\u0447\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c\u0441\u044f \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u0438\u043d \u0440\u0430\u0437. \u041f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0440\u0435\u0434\u043a\u043e."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let a = 0;\n\n// \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c\u0441\u044f 10 \u0440\u0430\u0437 (0, ..., 9)\ndo {\n  console.log(a);\n  a++;\n} while (a < 10);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let a = 0;\n\n// \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c\u0441\u044f 1 \u0440\u0430\u0437 (0)\ndo {\n  console.log(a);\n  a++;\n} while (a > 10);\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"for-in"},"for-in"),(0,a.kt)("p",null,"\u0426\u0438\u043a\u043b\u044b \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const obj = {\n  name: \"John\",\n  surname: 'Smith',\n  age: 35,\n};\n\n// \u0432\u044b\u0432\u0435\u0434\u0435\u0442 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u043f\u043e\u043b\u0435\u0439\nfor (let key in obj) {\n  console.log(key);\n};\n\n// \u0432\u044b\u0432\u0435\u0434\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u0435\u0439\nfor (let key in obj) {\n  console.log(obj[key]);\n};\n\n// \u043c\u043e\u0436\u043d\u043e \u0442\u0430\u043a\u0436\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c for of\n// \u043d\u0443\u0436\u043d\u043e \u043e\u0431\u0435\u0440\u043d\u0443\u0442\u044c \u0432 Object.keys\nfor (let key of Object.keys(obj)) {\n  console.log(obj[key]);\n};\n\n// \u0432\u044b\u0432\u043e\u0434 \u0438 \u043f\u043e\u043b\u0435\u0439 \u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439\nfor (const [key, value] of Object.entries(obj)) {\n  console.log(`${key}: ${value}`);\n};\n")))}d.isMDXComponent=!0}}]);