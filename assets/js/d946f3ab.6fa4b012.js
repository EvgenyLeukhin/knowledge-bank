"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[3627],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,s=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=l,f=m["".concat(a,".").concat(d)]||m[d]||u[d]||s;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const s={title:"Import / export",sidebar_position:13},o=void 0,i={unversionedId:"frontend/js/import-export",id:"frontend/js/import-export",title:"Import / export",description:"*",source:"@site/docs/frontend/js/import-export.md",sourceDirName:"frontend/js",slug:"/frontend/js/import-export",permalink:"/knowledge-bank/docs/frontend/js/import-export",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/js/import-export.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Import / export",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"\u041a\u043b\u0430\u0441\u0441\u044b \ud83d\udc4e",permalink:"/knowledge-bank/docs/frontend/js/class"},next:{title:"\u0423\u0441\u043b\u043e\u0432\u0438\u044f",permalink:"/knowledge-bank/docs/frontend/js/conditions"}},a={},c=[{value:"\u041f\u0440\u043e\u0441\u0442\u043e\u0439 \u0438 \u0434\u0435\u0444\u043e\u043b\u0442\u043d\u044b\u0439",id:"\u043f\u0440\u043e\u0441\u0442\u043e\u0439-\u0438-\u0434\u0435\u0444\u043e\u043b\u0442\u043d\u044b\u0439",level:2},{value:"import as / export as",id:"import-as--export-as",level:2},{value:"import * as data",id:"import--as-data",level:2},{value:"\u041f\u0441\u0435\u0432\u0434\u043e\u043c\u043e\u0434\u0443\u043b\u044c\u043d\u044b\u0435 \u0441\u043a\u0440\u0438\u043f\u0442\u044b",id:"\u043f\u0441\u0435\u0432\u0434\u043e\u043c\u043e\u0434\u0443\u043b\u044c\u043d\u044b\u0435-\u0441\u043a\u0440\u0438\u043f\u0442\u044b",level:2},{value:"windw.utils",id:"windwutils",level:3},{value:"\u0415\u0449\u0435 \u043f\u0440\u0438\u043c\u0435\u0440",id:"\u0435\u0449\u0435-\u043f\u0440\u0438\u043c\u0435\u0440",level:3},{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0445 \u043f\u043e\u043b\u0435\u0439 \u0432 window",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b-\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f-\u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0445-\u043f\u043e\u043b\u0435\u0439-\u0432-window",level:4},{value:"\u041c\u043e\u0434\u0443\u043b\u044c\u043d\u044b\u0435 \u0441\u043a\u0440\u0438\u043f\u0442\u044b",id:"\u043c\u043e\u0434\u0443\u043b\u044c\u043d\u044b\u0435-\u0441\u043a\u0440\u0438\u043f\u0442\u044b",level:2},{value:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0441 \u0437\u0430\u0446\u0438\u043a\u043b\u0438\u0432\u0430\u043d\u0438\u0435\u043c \u0438\u043c\u043f\u043e\u0440\u0442\u043e\u0432",id:"\u043e\u0448\u0438\u0431\u043a\u0430-\u0441-\u0437\u0430\u0446\u0438\u043a\u043b\u0438\u0432\u0430\u043d\u0438\u0435\u043c-\u0438\u043c\u043f\u043e\u0440\u0442\u043e\u0432",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u043f\u0440\u043e\u0441\u0442\u043e\u0439-\u0438-\u0434\u0435\u0444\u043e\u043b\u0442\u043d\u044b\u0439"},"\u041f\u0440\u043e\u0441\u0442\u043e\u0439 \u0438 \u0434\u0435\u0444\u043e\u043b\u0442\u043d\u044b\u0439"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="script1.js"',title:'"script1.js"'},"// \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\nexport const a = 123;\n\nconst b = 123;\n\n// \u0434\u0435\u0444\u043e\u043b\u0442\u043d\u044b\u0439 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\nexport default b;\n")),(0,l.kt)("p",null,"\u0415\u0441\u043b\u0438 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445, \u0442\u043e \u0434\u0435\u0444\u043e\u043b\u0442\u043d\u044b\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0432 \u043d\u0430\u0447\u0430\u043b\u0435. \u0415\u0441\u043b\u0438 export \u0431\u0435\u0437 default, \u0442\u043e \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0443\u0436\u043d\u043e \u0432 \u0444\u0438\u0433\u0443\u0440\u043d\u044b\u0445 \u0441\u043a\u043e\u0431\u043a\u0430\u0445."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="script2.js"',title:'"script2.js"'},"import b, { a } from './script1';\n...\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"import-as--export-as"},"import as / export as"),(0,l.kt)("p",null,"\u0414\u0435\u0444\u043e\u043b\u0442\u043d\u044b\u0435 \u0438\u043c\u043f\u043e\u0440\u0442\u044b \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u044b\u0432\u0430\u0442\u044c \u0441\u0440\u0430\u0437\u0443 \u043f\u0440\u0438 \u0438\u043c\u043f\u043e\u0440\u0442\u0435, \u0430 \u043f\u0440\u043e\u0441\u0442\u044b\u0435 \u0447\u0435\u0440\u0435\u0437 ",(0,l.kt)("inlineCode",{parentName:"p"},"as"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="script2.js"',title:'"script2.js"'},"import c, { a as d } from './script1.js';\n...\n")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"\u041c\u0443\u043b\u044c\u0442\u0438 \u044d\u043a\u0441\u043f\u043e\u0440\u0442 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c. \u041f\u0440\u043e\u0441\u0442\u044b\u0435 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u044b \u043c\u043e\u0436\u043d\u043e \u0442\u0430\u043a\u0436\u0435 \u043f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u044b\u0432\u0430\u0442\u044c \u0447\u0435\u0440\u0435\u0437 ",(0,l.kt)("inlineCode",{parentName:"p"},"as"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="script1.js"',title:'"script1.js"'},"const a = 1;\nconst b = 2;\n\nexport {\n  a,\n  b as c, // \u044d\u043a\u0441\u043f\u043e\u0440\u0442 \u0441 \u043f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435\u043c (\u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0441 default)\n}\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"import--as-data"},"import * as data"),(0,l.kt)("p",null,"\u0418\u043c\u043f\u043e\u0440\u0442 \u0432\u0441\u0435\u0445 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u043e\u0432 \u0444\u0430\u0439\u043b\u0430 \u0432 \u043e\u0431\u044a\u0435\u043a\u0442."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="script2.js"',title:'"script2.js"'},"import * as data from './script1.js';\n\nconsole.log('data', data); // { a: 1, default: 2 }\nconsole.log('a', data.a); // 1\nconsole.log('b', data.default); // 2\n")),(0,l.kt)("h2",{id:"\u043f\u0441\u0435\u0432\u0434\u043e\u043c\u043e\u0434\u0443\u043b\u044c\u043d\u044b\u0435-\u0441\u043a\u0440\u0438\u043f\u0442\u044b"},"\u041f\u0441\u0435\u0432\u0434\u043e\u043c\u043e\u0434\u0443\u043b\u044c\u043d\u044b\u0435 \u0441\u043a\u0440\u0438\u043f\u0442\u044b"),(0,l.kt)("p",null,"\u041a\u0430\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0438\u0441\u044c \u0440\u0430\u043d\u044c\u0448\u0435"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="file1.js"',title:'"file1.js"'},"'use strict';\n\nconst TAG = 'div';\n\nconst element = document.createElement(TAG);\n\nelement.textContent = '\u041c\u043e\u0439 \u043f\u0435\u0440\u0432\u044b\u0439 \u0442\u0435\u0433';\ndocument.body.appendChild(element);\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="file2.js"',title:'"file2.js"'},"'use strict';\n\nconst TAG = 'div';\n\nconst element = document.createElement(TAG);\n\nelement.textContent = '\u041c\u043e\u0439 \u0432\u0442\u043e\u0440\u043e\u0439 \u0442\u0435\u0433';\ndocument.body.appendChild(element);\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'...\n<script src="file1.js"><\/script>\n<script src="file2.js"><\/script> \n')),(0,l.kt)("p",null,"\u0411\u0443\u0434\u0435\u0442 \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0430, \u0442\u0430\u043a \u043a\u0430\u043a \u0438\u043c\u0435\u044e\u0442\u0441\u044f \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 (const TAG). \u0418 \u043f\u0440\u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0438 \u0444\u0430\u0439\u043b\u043e\u0432 \u043e\u043d\u0438 \u043e\u043a\u0430\u0436\u0443\u0442\u0441\u044f \u0432 \u043e\u0434\u043d\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0432\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u0438, \u0438 \u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0438\u0442\u0430\u0442\u043e\u0440 \u0432\u044b\u0434\u0430\u0441\u0442 \u043e\u0448\u0438\u0431\u043a\u0443 "),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Uncaught SyntaxError: Identifier 'TAG' has already been declared")),(0,l.kt)("p",null,"\u041d\u043e \u043f\u0440\u0438\u0434\u0443\u043c\u0430\u043b\u0438 \u043e\u0434\u0438\u043d \u0445\u0430\u043a \u043d\u0430 \u0437\u0430\u043c\u044b\u043a\u0430\u043d\u0438\u044f\u0445, \u043c\u043e\u0436\u043d\u043e \u0432 \u043a\u0430\u0436\u0434\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u0438\u0437\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0432\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043f\u0430\u0442\u0442\u0435\u0440\u043d\u0430 IIFE \u2014 \u0441\u0430\u043c\u043e\u0432\u044b\u0437\u044b\u0432\u0430\u044e\u0449\u0438\u0435\u0441\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0438. \u041b\u044e\u0431\u044b\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0432\u043d\u0443\u0442\u0440\u0438 IIFE \u043d\u0435\u0432\u0438\u0434\u0438\u043c\u044b \u0434\u043b\u044f \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u043c\u0438\u0440\u0430:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="file1.js"',title:'"file1.js"'},"'use strict';\n\n(function () {\n  const TAG = 'div';\n\n  const element = document.createElement(TAG);\n\n  element.textContent = '\u041c\u043e\u0439 \u043f\u0435\u0440\u0432\u044b\u0439 \u0442\u0435\u0433';\n  document.body.appendChild(element);\n})();\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="file2.js"',title:'"file2.js"'},"'use strict';\n\n(function () {\n    const TAG = 'div';\n\n    const element = document.createElement(TAG);\n\n    element.textContent = '\u041c\u043e\u0439 \u0432\u0442\u043e\u0440\u043e\u0439 \u0442\u0435\u0433';\n    document.body.appendChild(element);\n})();\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'...\n  <script src="file1.js"><\/script>\n  <script src="file2.js"><\/script>\n')),(0,l.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c \u0432\u0441\u0435 \u041e\u041a, \u0441\u043a\u0440\u0438\u043f\u0442\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442 \u0441\u0432\u043e\u044e \u0437\u0430\u0434\u0430\u0447\u0443"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"windwutils"},"windw.utils"),(0,l.kt)("p",null,"\u041c\u043e\u0436\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0432 \u0433\u043b\u043e\u0431. \u043e\u0431\u044a\u0435\u043a\u0442 window (\u0447\u0442\u043e\u0431\u044b \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0438\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u0437 \u043b\u044e\u0431\u043e\u0433\u043e \u043c\u0435\u0441\u0442\u0430)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="file1.js"',title:'"file1.js"'},"window.utils = (function () {\n  // \u0417\u0434\u0435\u0441\u044c \u0441\u0443\u043f\u0435\u0440\u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0445\u043e\u0447\u0435\u0442\u0441\u044f \u043f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0435\n  function mySuperFunc1() {\n    console.log('utils.mySuperFunc1');\n  }\n\n  function mySuperFunc2() {\n    console.log('utils.mySuperFunc2');\n  }\n\n  return {\n    mySuperFunc1,\n    mySuperFunc2,\n  };\n})();\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="file2.js"',title:'"file2.js"'},"  (function () {\n    // \u0417\u0434\u0435\u0441\u044c \u043a\u0430\u043a\u0430\u044f-\u0442\u043e \u0441\u0443\u043f\u0435\u0440\u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0445\u043e\u0447\u0435\u0442\u0441\u044f \u043f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043c\u043d\u043e\u0433\u043e \u0433\u0434\u0435 \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0435\n\n    function myOtherSuperFunc1() {\n      window.utils.mySuperFunc1(); // \u0412\u044b\u0437\u044b\u0432\u0430\u043b\u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u044e\n      console.log('otherUtils.myOtherSuperFunc1');\n    }\n\n    function myOtherSuperFunc2() {\n      console.log('otherUtils.myOtherSuperFunc2');\n    }\n\n    myOtherSuperFunc1();\n\n    // \u041c\u043e\u0436\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c \u0432 \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0435 \u043f\u043e\u043b\u044f window\n    window.otherUtils = {\n      myOtherSuperFunc1,\n      myOtherSuperFunc2,\n    };\n\n    // \u0438\u043b\u0438 \u0442\u0430\u043a\n    window.myOtherSuperFunc1 = myOtherSuperFunc1;\n    window.myOtherSuperFunc2 = myOtherSuperFunc2;\n})();\n")),(0,l.kt)("p",null,"\u0413\u043b\u0430\u0432\u043d\u043e\u0435 \u0447\u0442\u043e\u0431\u044b \u0432 \u043a\u0430\u0436\u0434\u043e\u043c \u0444\u0430\u0439\u043b\u0435, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0435\u0441\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c \u0432 window \u0431\u044b\u043b\u043e \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435, \u0438\u043d\u0430\u0447\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0438\u0441\u044c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430."),(0,l.kt)("h3",{id:"\u0435\u0449\u0435-\u043f\u0440\u0438\u043c\u0435\u0440"},"\u0415\u0449\u0435 \u043f\u0440\u0438\u043c\u0435\u0440"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="dom.js"',title:'"dom.js"'},"(function () {\n  const TAG = 'div';\n\n  function createElement(tag = TAG, content) {\n    const element = document.createElement(tag);\n    element.textContent = content;\n    return element;\n  }\n\n  window._createElement = createElement;\n})();\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="render.js"',title:'"render.js"'},"(function () {\n\n  const TAG = 'p';\n\n  function renderDOM(selector, content) {\n    const root = document.querySelector(selector);\n\n    if (!root) {\n      return;\n    }\n\n    const element = window._createElement(TAG, content); // createElement \u0438\u0437 \u0444\u0430\u0439\u043b\u0430 dom.js\n    root.appendChild(element);\n  }\n  window._renderDOM = renderDOM;\n})();\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="reverse.js"',title:'"reverse.js"'},"(function () {\n  function reverse(str) {\n    return str.split('').reverse().join('');\n  }\n\n window._reverse = reverse;\n})();\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<body>\n  <div class="root"></div>\n\n  <script src="dom.js"><\/script>\n  <script src="render.js"><\/script>\n  <script src="reverse.js"><\/script>\n  <script>\n    window._renderDOM(\'.root\', window._reverse(\'sseccus\'));\n  <\/script>\n</body>\n')),(0,l.kt)("h4",{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b-\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f-\u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0445-\u043f\u043e\u043b\u0435\u0439-\u0432-window"},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0445 \u043f\u043e\u043b\u0435\u0439 \u0432 window"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"window._reverse = reverse; // window._reverse();\n\nwindow._reverse = { reverse }; // window._reverse.reverse();\n\n// window._reverse.reverse();\nwindow._reverse = (function () {\n  function reverse(str) {\n    return str.split('').reverse().join('');\n  }\n\n  return { reverse };\n})();\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u043c\u043e\u0434\u0443\u043b\u044c\u043d\u044b\u0435-\u0441\u043a\u0440\u0438\u043f\u0442\u044b"},"\u041c\u043e\u0434\u0443\u043b\u044c\u043d\u044b\u0435 \u0441\u043a\u0440\u0438\u043f\u0442\u044b"),(0,l.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u0438\u0441\u0430\u0442\u044c \u0438\u0437\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0438 \u0430\u0442\u043e\u043c\u0430\u0440\u043d\u044b\u0435 \u043c\u043e\u0434\u0443\u043b\u0438. \u0412 \u043d\u0438\u0445 \u043c\u043e\u0433\u0443\u0442 \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0441 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u043c\u0438 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f\u043c\u0438, \u043d\u043e \u043e\u043d\u0438 \u0431\u0443\u0434\u0443\u0442 \u0434\u0440\u0443\u0433 \u043e\u0442 \u0434\u0440\u0443\u0433\u0430 \u0438\u0437\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u043f\u043e \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0432\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u0438."),(0,l.kt)("p",null,'\u0412 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043d\u044b\u0445 \u0441\u043a\u0440\u0438\u043f\u0442\u0430\u0445 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0430\u0442\u0442\u0440\u0438\u0431\u0443\u0442 type="module". \u041f\u0440\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0441\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c (\u0441\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 CORS), \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u0434\u043d\u0438\u043c\u0430\u0442\u044c \u0441\u0435\u0440\u0432\u0435\u0440.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'...\n  <script src="./script1.js" type="module"><\/script>\n  <script src="./script2.js" type="module"><\/script>\n</body>\n')),(0,l.kt)("p",null,"\u041c\u043e\u0434\u0443\u043b\u0438 \u0431\u0443\u0434\u0443\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0441 \u0434\u0438\u0440\u0435\u043a\u0442\u0438\u0432\u043e\u0439 'use strict'. ",(0,l.kt)("inlineCode",{parentName:"p"},"export")," \u043f\u043e\u043c\u0435\u0447\u0430\u0435\u0442, \u043a\u0430\u043a\u0438\u0435 \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u044b \u043a\u043e\u0434\u0430 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0432\u043d\u0435 \u043c\u043e\u0434\u0443\u043b\u044f;"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="script1.js"',title:'"script1.js"'},"'use strict';\n\nexport const a = 1;\nexport const b = 1;\nexport const c = 3;\n\nexport default { a, b, c };\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"import")," \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0447\u0430\u0441\u0442\u0438 \u043c\u043e\u0434\u0443\u043b\u044f, \u0440\u0430\u0437\u043c\u0435\u0447\u0435\u043d\u043d\u044b\u0435 \u0447\u0435\u0440\u0435\u0437 export. \u0414\u0435\u0444\u043e\u043b\u0442\u043d\u044b\u0439 \u0438\u043c\u043f\u043e\u0440\u0442 \u043c\u043e\u0436\u043d\u043e \u0438\u043c\u0435\u043d\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u043a \u0443\u0433\u043e\u0434\u043d\u043e, \u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0442\u044c, \u043d\u043e \u043c\u043e\u0436\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0438\u0445 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 as. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="script2.js"',title:'"script2.js"'},"'use strict';\n\nimport defaultImport, { a, b, c, c as copyOfC } from './script1.js';\n\nconsole.log('defaultImport', defaultImport); // { 1, 2, 3 }\n\nconsole.log('a', a); // 1\nconsole.log('b', b); // 2\nconsole.log('c', c); // 3\nconsole.log('copyOfC', copyOfC); // 3\n")),(0,l.kt)("h3",{id:"\u043e\u0448\u0438\u0431\u043a\u0430-\u0441-\u0437\u0430\u0446\u0438\u043a\u043b\u0438\u0432\u0430\u043d\u0438\u0435\u043c-\u0438\u043c\u043f\u043e\u0440\u0442\u043e\u0432"},"\u041e\u0448\u0438\u0431\u043a\u0430 \u0441 \u0437\u0430\u0446\u0438\u043a\u043b\u0438\u0432\u0430\u043d\u0438\u0435\u043c \u0438\u043c\u043f\u043e\u0440\u0442\u043e\u0432"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="file1.js"',title:'"file1.js"'},'import { testFile2 } from "./file1";\n\nexport function testFile1() {\n  console. log (testFile2());\n  return 42;\n}\n\ntestFile1();\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="file2.js"',title:'"file2.js"'},'import { testFile1 } from "./file2"\n\nexport function testFile2() {\n  console.log(testFile1());\n  return 10;\n}\n')),(0,l.kt)("p",null,"\u0422\u0430\u043a, \u043a\u0430\u043a \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0430 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0432\u044b\u0448\u0435, \u2014 \u0434\u0435\u043b\u0430\u0442\u044c \u043d\u0435 \u0441\u0442\u043e\u0438\u0442. \u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043d\u0430\u0447\u043d\u0451\u0442 \xab\u0431\u0435\u0433\u0430\u0442\u044c \u043f\u043e \u043a\u0440\u0443\u0433\u0443\xbb \u0434\u043e \u043d\u0435 \u043e\u0447\u0435\u043d\u044c \u043f\u043e\u0431\u0435\u0434\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0446\u0430, \u0442\u043e \u0435\u0441\u0442\u044c \u043f\u043e\u043a\u0430 \u043d\u0435 \u043f\u0435\u0440\u0435\u043f\u043e\u043b\u043d\u0438\u0442\u0441\u044f \u0441\u0442\u0435\u043a \u0432\u044b\u0437\u043e\u0432\u043e\u0432."))}u.isMDXComponent=!0}}]);