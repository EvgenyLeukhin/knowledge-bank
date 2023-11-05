"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[9389],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,k=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(k,l(l({ref:n},u),{},{components:t})):r.createElement(k,l({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3105:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={title:"Conditions",sidebar_position:14},l=void 0,s={unversionedId:"frontend/js/conditions",id:"frontend/js/conditions",title:"Conditions",description:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0432 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e",source:"@site/docs/frontend/js/conditions.md",sourceDirName:"frontend/js",slug:"/frontend/js/conditions",permalink:"/knowledge-bank/docs/frontend/js/conditions",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/js/conditions.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"Conditions",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"import / export",permalink:"/knowledge-bank/docs/frontend/js/import-export"},next:{title:"Cycles",permalink:"/knowledge-bank/docs/frontend/js/cycles"}},i={},c=[{value:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0432 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e",id:"\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435-\u0443\u0441\u043b\u043e\u0432\u0438\u044f-\u0432-\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e",level:2},{value:"if-else",id:"if-else",level:2},{value:"without else inside function",id:"without-else-inside-function",level:2},{value:"switch-case",id:"switch-case",level:2},{value:"\u0422\u0435\u0440\u043d\u0430\u0440\u043d\u044b\u0439 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 (?:)",id:"\u0442\u0435\u0440\u043d\u0430\u0440\u043d\u044b\u0439-\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440-",level:2}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435-\u0443\u0441\u043b\u043e\u0432\u0438\u044f-\u0432-\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0432 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let a = 5;\n\nconst isEqual1 = a === 4; // false\nconst isEqual2 = a === 5; // true\nconst isEqual3 = a >= 0; // true\nconst isEqual4 = a >= 10; // false\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"if-else"},"if-else"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let a = true;\n\nif (a) {\n  console.log('a is true');\n} else {\n  console.log('a is false');\n}\n\n// nesting - bad practice\nif (a) {\n  if (a > 0)  {\n    console.log('a is positive');\n  } else {\n    console.log('a is negative');\n  }\n} else {\n  console.log('a is false');\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"without-else-inside-function"},"without else inside function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const a = true;\n\nconst returnA = (param) => {\n  if (param > 0) {\n    console.log('a is positive');\n  }\n\n  console.log('a is negative');\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"switch-case"},"switch-case"),(0,o.kt)("p",null,"\u0423\u0434\u043e\u0431\u043d\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f, \u043a\u043e\u0433\u0434\u0430 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043c\u043d\u043e\u0433\u043e. case - \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 \u0441\u043b\u0443\u0447\u0430\u0439, \u0438\u0445 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0441\u043a\u043e\u043b\u044c \u0443\u0433\u043e\u0434\u043d\u043e."),(0,o.kt)("p",null,"break - \u043f\u0440\u0435\u0440\u044b\u0432\u0430\u043d\u0438\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438, \u0435\u0441\u043b\u0438 \u043a\u0430\u043a\u043e\u0439-\u043b\u0438\u0431\u043e case \u0431\u0443\u0434\u0435\u0442 true, \u0442\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043f\u0440\u0435\u0440\u0432\u0451\u0442\u0441\u044f \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u043b\u0443\u0447\u0430\u0438 \u043d\u0435 \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0442\u044c\u0441\u044f."),(0,o.kt)("p",null,"default - \u0430\u043d\u0430\u043b\u043e\u0433 else, \u0435\u0441\u043b\u0438 \u043d\u0435 \u0432\u044b\u0431\u0438\u0440\u0435\u0442\u0441\u044f \u043d\u0438 \u043e\u0434\u0438\u043d case, \u0442\u043e \u0441\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 default."),(0,o.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0431\u044b \u043d\u0435 \u0441\u0442\u043e\u044f\u043b break, \u0442\u043e \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f a = 6, a = 7, default \u0442\u0430\u043a\u0436\u0435 \u0431\u044b \u0441\u0440\u0430\u0431\u043e\u0442\u0430\u043b\u0438."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let A = 5;\n\n// check A\nswitch(A) { \n  case 0: console.log('A = 0'); break;\n  case 1: console.log('A = 1'); break;\n  case 2: console.log('A = 2'); break;\n  case 3: console.log('A = 3'); break;\n  case 4: console.log('A = 4'); break;\n  case 5: console.log('A = 5'); break;\n  case 6: console.log('A = 6'); break;\n  case 7: console.log('A = 7'); break;\n\n  // default case\n  default: console.log('A are not inside 0-7 range');\n};\n")),(0,o.kt)("p",null,"\u041c\u043e\u0436\u043d\u043e \u0442\u0430\u043a\u0436\u0435 \u043c\u0435\u043d\u044f\u0442\u044c \u043f\u0435\u0440\u0435\u043f\u0440\u0438\u0441\u0432\u0430\u0438\u0432\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let text = '';\nlet tooltip = '';\n\n...\n\ncase 'duration':\n    text = calcDuration(item);\n    tooltip = '\u0412\u0440\u0435\u043c\u044f \u0432 \u0447\u0430\u0441\u043e\u0432\u043e\u043c \u043f\u043e\u044f\u0441\u0435 \u0445\u0430\u0431\u0430';\n    break;\n\n...\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u0442\u0435\u0440\u043d\u0430\u0440\u043d\u044b\u0439-\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440-"},"\u0422\u0435\u0440\u043d\u0430\u0440\u043d\u044b\u0439 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 (?:)"),(0,o.kt)("p",null,"\u0411\u043e\u043b\u0435\u0435 \u043b\u0430\u043a\u043e\u043d\u0438\u0447\u043d\u044b\u0439 ",(0,o.kt)("inlineCode",{parentName:"p"},"if-else"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let a = true;\n\na ? alert(true) : alert(false);\n")))}p.isMDXComponent=!0}}]);