"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[8140],{3905:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>m});var l=a(7294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,l,t=function(e,n){if(null==e)return{};var a,l,t={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=l.createContext({}),c=function(e){var n=l.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},u=function(e){var n=c(e.components);return l.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},p=l.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=t,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return a?l.createElement(f,o(o({ref:n},u),{},{components:a})):l.createElement(f,o({ref:n},u))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,o=new Array(r);o[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7901:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var l=a(7462),t=(a(7294),a(3905));const r={title:"\u0426\u0438\u043a\u043b\u044b",sidebar_position:10},o=void 0,i={unversionedId:"frontend/js-basics/cycles",id:"frontend/js-basics/cycles",title:"\u0426\u0438\u043a\u043b\u044b",description:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043c\u043d\u043e\u0433\u043e\u043a\u0440\u0430\u0442\u043d\u044b\u0445 \u043f\u043e\u0432\u0442\u043e\u0440\u0435\u043d\u0438\u0439 \u043e\u0434\u043d\u043e\u0442\u0438\u043f\u043d\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439, \u043e\u0431\u044b\u0447\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043c\u0430\u0441\u0441\u0438\u0432\u0430\u043c\u0438.",source:"@site/docs/frontend/js-basics/cycles.md",sourceDirName:"frontend/js-basics",slug:"/frontend/js-basics/cycles",permalink:"/knowledge-bank/docs/frontend/js-basics/cycles",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/js-basics/cycles.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"\u0426\u0438\u043a\u043b\u044b",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"\u0423\u0441\u043b\u043e\u0432\u0438\u044f",permalink:"/knowledge-bank/docs/frontend/js-basics/conditions"},next:{title:"\u041c\u0430\u0441\u0441\u0438\u0432\u044b",permalink:"/knowledge-bank/docs/frontend/js-basics/arrays"}},s={},c=[{value:"forEach",id:"foreach",level:2},{value:"for of",id:"for-of",level:2},{value:"for",id:"for",level:2},{value:"break",id:"break",level:2},{value:"continue",id:"continue",level:2},{value:"\u041c\u0435\u0442\u043a\u0438 \u0434\u043b\u044f \u043c\u043d\u043e\u0433\u043e\u043c\u0435\u0440\u043d\u043e\u0433\u043e \u0446\u0438\u043a\u043b\u0430",id:"\u043c\u0435\u0442\u043a\u0438-\u0434\u043b\u044f-\u043c\u043d\u043e\u0433\u043e\u043c\u0435\u0440\u043d\u043e\u0433\u043e-\u0446\u0438\u043a\u043b\u0430",level:2},{value:"while",id:"while",level:2},{value:"do-while",id:"do-while",level:2},{value:"for-in",id:"for-in",level:2}],u={toc:c};function d(e){let{components:n,...a}=e;return(0,t.kt)("wrapper",(0,l.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043c\u043d\u043e\u0433\u043e\u043a\u0440\u0430\u0442\u043d\u044b\u0445 \u043f\u043e\u0432\u0442\u043e\u0440\u0435\u043d\u0438\u0439 \u043e\u0434\u043d\u043e\u0442\u0438\u043f\u043d\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439, \u043e\u0431\u044b\u0447\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043c\u0430\u0441\u0441\u0438\u0432\u0430\u043c\u0438."),(0,t.kt)("h2",{id:"foreach"},"forEach"),(0,t.kt)("p",null,"\u0411\u043e\u043b\u0435\u0435 \u043d\u043e\u0432\u0430\u044f \u0438 \u043b\u0430\u043a\u043e\u043d\u0438\u0447\u043d\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c \u0441\u0442\u0430\u0440\u043e\u0433\u043e \u0446\u0438\u043a\u043b\u0430 for. \u041d\u0435 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442, \u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0435\u0440\u0435\u0431\u0438\u0440\u0430\u0435\u0442 \u043c\u0430\u0441\u0441\u0438\u0432. \u0423\u0434\u043e\u0431\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043d\u043e\u0432\u044b\u0445 \u0432\u0438\u0434\u043e\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043d\u044b\u0445 \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432 \u0438\u0437 \u0434\u0440\u0443\u0433\u0438\u0445 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0445."),(0,t.kt)("p",null,"\u041f\u0440\u043e\u0441\u0442\u043e\u0439 \u043f\u0435\u0440\u0435\u0431\u043e\u0440 \u043c\u0430\u0441\u0441\u0438\u0432\u0430"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"const a = [\n  { id: 1, name: 'Name 1' },\n  { id: 2, name: 'Name 2' },\n  { id: 3, name: 'Name 3' },\n  { id: 4, name: 'Name 4' },\n  { id: 5, name: 'Name 5' },\n];\n\na.forEach(el => console.log(el.name));\n")),(0,t.kt)("p",null,"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"// el - \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043c\u0430\u0441\u0441\u0438\u0432\u0430, index, arr - \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432\na.forEach((el, index, arr) => console.log(el));\na.forEach((el, index, arr) => console.log(index));\na.forEach((el, index, arr) => console.log(arr));\n")),(0,t.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440. \u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u0441 \u0447\u0435\u0442\u043d\u044b\u043c\u0438 id."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"const a = [\n  { id: 1, name: 'Name 1' },\n  { id: 2, name: 'Name 2' },\n  { id: 3, name: 'Name 3' },\n  { id: 4, name: 'Name 4' },\n  { id: 5, name: 'Name 5' },\n];\n\nconst b = [];\n\na.forEach(el => {\n  if (el.id % 2 === 0) {\n    b.push(el.id);\n  }\n});\n\nconsole.log(b); // [2, 4]\n")),(0,t.kt)("hr",null),(0,t.kt)("h2",{id:"for-of"},"for of"),(0,t.kt)("p",null,"\u0423\u043f\u0440\u043e\u0449\u0435\u043d\u043d\u0430\u044f \u0444\u043e\u0440\u043c\u0430 \u0437\u0430\u043f\u0438\u0441\u0438"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"const a = [\n  { id: 1, name: 'Name 1' },\n  { id: 2, name: 'Name 2' },\n  { id: 3, name: 'Name 3' },\n  { id: 4, name: 'Name 4' },\n  { id: 5, name: 'Name 5' },\n];\n\nfor (item of a) {\n  console.log('item', item);\n}\n\n// with destructuring\nfor ({ id } of a) {\n  console.log('id', id);\n}\n")),(0,t.kt)("hr",null),(0,t.kt)("h2",{id:"for"},"for"),(0,t.kt)("p",null,"\u0411\u044b\u043b \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u043c \u0446\u0438\u043a\u043b\u043e\u043c \u0432 ES5. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0438\u043d\u0434\u0435\u043a\u0441\u044b \u043c\u0430\u0441\u0441\u0438\u0432\u0430."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"const a = [\n  { id: 1, name: 'Name 1' },\n  { id: 2, name: 'Name 2' },\n  { id: 3, name: 'Name 3' },\n  { id: 4, name: 'Name 4' },\n  { id: 5, name: 'Name 5' },\n];\n\nconst b = [];\n\n // \u0441\u0447\u0435\u0442\u0447\u0438\u043a \u0432\u043d\u0443\u0442\u0440\u0438\nfor (let i = 0; i < a.length; i++) {\n  b.push(a[i].id);\n}\n\nconsole.log(b); // [1, 2, 3, 4, 5]\n\nconsole.log(i); // undefined - \u0442\u0430\u043a \u043a\u0430\u043a \"\u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u043e\u0435 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435\"\n")),(0,t.kt)("p",null,"\u041d\u0435\u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u043e\u0435 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'let i = 0; // \u0441\u0447\u0435\u0442\u0447\u0438\u043a \u0441\u043d\u0430\u0440\u0443\u0436\u0438\n\nconst a = [...];\nconst b = [];\n\nfor (i = 0; i < a.length; i++) {\n  b.push(a[i].id);\n}\n\nconsole.log(b); // [1, 2, 3, 4, 5]\n\nconsole.log(i); // 5 "\u043d\u0435\u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u043e\u0435 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435"\n')),(0,t.kt)("p",null,"\u0421\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u043d\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"let i = 0;\n\n...\n\nfor (; i < a.length;) {\n  b.push(a[i].id);\n  i++;\n}\n\n...\n")),(0,t.kt)("hr",null),(0,t.kt)("h2",{id:"break"},"break"),(0,t.kt)("p",null,"\u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u043f\u0440\u0435\u0440\u044b\u0432\u0430\u044e\u0449\u0430\u044f \u0446\u0438\u043a\u043b. \u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \u043f\u0440\u0435\u0440\u0432\u0451\u0442 \u0446\u0438\u043a\u043b, \u0435\u0441\u043b\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u0435 \u043f\u043e\u0441\u043b\u0435 if \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c\u0441\u044f, \u0442.\u0435. \u043a\u043e\u0433\u0434\u0430 i \u0441\u0442\u0440\u0430\u043d\u0435\u0442 \u0440\u0430\u0432\u043d\u044b\u043c 15. \u041d\u0435\u043b\u044c\u0437\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441 \u0442\u0435\u0440\u043d\u0430\u0440\u043d\u044b\u043c \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u043c."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"for (let i = 0; i < 100; i++) {\n  if (i % 15 == 0) { break; }\n  console.log(i);\n}\n")),(0,t.kt)("hr",null),(0,t.kt)("h2",{id:"continue"},"continue"),(0,t.kt)("p",null,'\u0414\u0435\u043b\u0430\u0435\u0442 \u043f\u0440\u043e\u043f\u0443\u0441\u043a \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0438. \u0426\u0438\u043a\u043b "\u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442" \u0432\u0441\u0435 \u0447\u0451\u0442\u043d\u044b\u0435 \u0438\u043d\u0434\u0435\u043a\u0441\u044b. \u041d\u0435\u043b\u044c\u0437\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441 \u0442\u0435\u0440\u043d\u0430\u0440\u043d\u044b\u043c \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u043c.'),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"for (let i = 0; i < 100; i++) {\n  if (i %2 == 0) { continue; }\n  console.log(i);\n}\n")),(0,t.kt)("hr",null),(0,t.kt)("h2",{id:"\u043c\u0435\u0442\u043a\u0438-\u0434\u043b\u044f-\u043c\u043d\u043e\u0433\u043e\u043c\u0435\u0440\u043d\u043e\u0433\u043e-\u0446\u0438\u043a\u043b\u0430"},"\u041c\u0435\u0442\u043a\u0438 \u0434\u043b\u044f \u043c\u043d\u043e\u0433\u043e\u043c\u0435\u0440\u043d\u043e\u0433\u043e \u0446\u0438\u043a\u043b\u0430"),(0,t.kt)("p",null,"\u041e\u0431\u044b\u0447\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0445 \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432 \u0432 \u0442\u0435\u043a\u0443\u0449\u0435\u043c \u043c\u0430\u0441\u0441\u0438\u0432\u0435."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"firstFor: for (let i = 0; i < 10; i++) {\n  console.log('i', i);\n\n  for (let j = 1; j < 10; j++) {\n    if (j === 5) {\n      break firstFor; // \u043f\u0440\u0435\u0440\u0432\u0435\u0442 \u0432\u0435\u0440\u0445\u043d\u0438\u0439 \u0446\u0438\u043a\u043b\n    }\n\n    console.log('j', j);\n  }\n}\n")),(0,t.kt)("hr",null),(0,t.kt)("h2",{id:"while"},"while"),(0,t.kt)("p",null,"\u041d\u0430 \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0435"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"let a = 0;\n\n// \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c\u0441\u044f 10 \u0440\u0430\u0437 (0, ..., 9)\nwhile (a < 10) {\n  console.log(a);\n  a++;\n}\n")),(0,t.kt)("p",null,"\u041d\u0430 \u0443\u043c\u0435\u043d\u044c\u0448\u0435\u043d\u0438\u0435"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"let a = 10;\n\n// \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c\u0441\u044f 10 \u0440\u0430\u0437 (10, ..., 1)\nwhile (a) {\n  console.log(a);\n  a--;\n}\n")),(0,t.kt)("hr",null),(0,t.kt)("h2",{id:"do-while"},"do-while"),(0,t.kt)("p",null,"\u0422\u043e\u0447\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c\u0441\u044f \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u0438\u043d \u0440\u0430\u0437. \u041f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0440\u0435\u0434\u043a\u043e."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"let a = 0;\n\n// \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c\u0441\u044f 10 \u0440\u0430\u0437 (0, ..., 9)\ndo {\n  console.log(a);\n  a++;\n} while (a < 10);\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"let a = 0;\n\n// \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c\u0441\u044f 1 \u0440\u0430\u0437 (0)\ndo {\n  console.log(a);\n  a++;\n} while (a > 10);\n")),(0,t.kt)("hr",null),(0,t.kt)("h2",{id:"for-in"},"for-in"),(0,t.kt)("p",null,"\u0426\u0438\u043a\u043b\u044b \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"const obj = {\n  name: \"John\",\n  surname: 'Smith',\n  age: 35,\n};\n\n// \u0432\u044b\u0432\u0435\u0434\u0435\u0442 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u043f\u043e\u043b\u0435\u0439\nfor (let key in obj) {\n  console.log(key);\n};\n\n// \u0432\u044b\u0432\u0435\u0434\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u0435\u0439\nfor (let key in obj) {\n  console.log(obj[key]);\n};\n\n// \u043c\u043e\u0436\u043d\u043e \u0442\u0430\u043a\u0436\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c for of\n// \u043d\u0443\u0436\u043d\u043e \u043e\u0431\u0435\u0440\u043d\u0443\u0442\u044c \u0432 Object.keys\nfor (let key of Object.keys(obj)) {\n  console.log(obj[key]);\n};\n")))}d.isMDXComponent=!0}}]);