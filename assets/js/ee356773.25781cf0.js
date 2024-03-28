"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[101],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),h=a,m=d["".concat(i,".").concat(h)]||d[h]||c[h]||o;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5909:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={title:"XMLHttpReqest \u0438 fetch \u043e\u0442 \u042f",sidebar_position:8},l=void 0,s={unversionedId:"frontend/react/archive/xml-request",id:"frontend/react/archive/xml-request",title:"XMLHttpReqest \u0438 fetch \u043e\u0442 \u042f",description:"- XMLHttpRequest - MDN",source:"@site/docs/frontend/react/8-archive/8-xml-request.md",sourceDirName:"frontend/react/8-archive",slug:"/frontend/react/archive/xml-request",permalink:"/knowledge-bank/docs/frontend/react/archive/xml-request",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/react/8-archive/8-xml-request.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"XMLHttpReqest \u0438 fetch \u043e\u0442 \u042f",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\u041f\u0430\u0442\u0442\u0435\u0440\u043d\u044b \u0438 \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438",permalink:"/knowledge-bank/docs/frontend/react/archive/patterns"},next:{title:"\u0421\u0430\u043c\u043e\u043f\u0438\u0441\u043d\u044b\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442",permalink:"/knowledge-bank/docs/frontend/react/archive/component"}},i={},p=[{value:"XMLHttpRequest",id:"xmlhttprequest",level:2},{value:"Fetch",id:"fetch",level:2},{value:"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u043c\u0435\u0442\u043e\u0434\u0430:",id:"\u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441-\u043c\u0435\u0442\u043e\u0434\u0430",level:3},{value:"\u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f fetch",id:"\u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f-fetch",level:3},{value:"Axios",id:"axios",level:2}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest"},"XMLHttpRequest - MDN")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learn.javascript.ru/xmlhttprequest"},"XMLHttpRequest - learn.javascript")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/axios/axios"},"Axios repo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://habr.com/ru/companies/ruvds/articles/477286/"},"\u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 fetch \u0438 axios"))),(0,a.kt)("h2",{id:"xmlhttprequest"},"XMLHttpRequest"),(0,a.kt)("p",null,"\u041e\u0431\u044a\u0435\u043a\u0442 XMLHttpRequest, \u0438\u043b\u0438 \u043a\u0440\u0430\u0442\u043a\u043e \u2014 XHR, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c HTTP-\u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443 \u0438\u0437 JavaScript \u0431\u0435\u0437 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b. \u041e\u043d \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0441 \u043b\u044e\u0431\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438, \u0445\u043e\u0442\u044f \u0441\u043b\u043e\u0432\u043e \u201cXML\u201d (Extensible Markup Language, \u0442\u043e \u0435\u0441\u0442\u044c \xab\u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0435\u043c\u044b\u0439 \u044f\u0437\u044b\u043a \u0440\u0430\u0437\u043c\u0435\u0442\u043a\u0438\xbb) \u0432\u043d\u0430\u0447\u0430\u043b\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043c\u0443\u0442\u0438\u0442\u044c. \u041e\u043d\u043e \u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0432 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0438 \u043f\u043e \u0438\u0441\u0442\u043e\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u043f\u0440\u0438\u0447\u0438\u043d\u0430\u043c \u0438 \u0438\u0437-\u0437\u0430 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0439 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u0438.\n\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u043c \u0437\u0430\u043f\u0440\u043e\u0441:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const xhr = new XMLHttpRequest();\n\n// \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0438\u0440\u0443\u0435\u043c \u0437\u0430\u043f\u0440\u043e\u0441\nxhr.open('GET', 'https://url/');\n\n// \u041e\u0442\u0441\u044b\u043b\u0430\u0435\u043c \u0437\u0430\u043f\u0440\u043e\u0441\nxhr.send();\n\n// \u0415\u0441\u043b\u0438 \u043a\u043e\u0434 \u043e\u0442\u0432\u0435\u0442\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043d\u0435 200, \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u043c \u043a\u0430\u043a \u043e\u0448\u0438\u0431\u043a\u0443\nif (xhr.status === 200) {\n    console.log(xhr.responseText); // responseText \u2014 \u0442\u0435\u043a\u0441\u0442 \u043e\u0442\u0432\u0435\u0442\u0430\n} else {\n  // \u0412\u044b\u0432\u0435\u0434\u0451\u043c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\n  console.log(`\u041e\u0442\u0432\u0435\u0442 \u043e\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430: ${xhr.status} | ${xhr.statusText}`);\n} \n")),(0,a.kt)("p",null,"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c XHR \u043c\u043e\u0436\u043d\u043e \u043b\u044e\u0431\u044b\u043c \u043d\u0443\u0436\u043d\u044b\u043c \u0434\u043b\u044f \u0432\u0430\u0441 \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0445\u043e\u0442\u0438\u043c \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c POST-\u0437\u0430\u043f\u0440\u043e\u0441 \u0441 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u043c\u0438 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430\u043c\u0438 \u0438 \u0442\u0435\u043b\u043e \u0432 \u0432\u0438\u0434\u0435 JSON:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const xhr = new XMLHttpRequest();\nxhr.open('POST', '/create');\n \n// \u0412\u044b\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\nxhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');\n\nxhr.send(JSON.stringify({data: 42})); \n")),(0,a.kt)("p",null,"\u0412 \u0442\u0435\u043b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043c\u043e\u0436\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0434\u0430\u0436\u0435 \u0444\u0430\u0439\u043b\u044b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const xhr = new XMLHttpRequest();\nxhr.open('POST', '/avatar');\n \nconst fileInput = document.querySelector('input[type=file]');\nconst file = fileInput.files[0].file;\nconst formdata = new FormData();\nformdata.append('file', file);\nxhr.send(formdata); \n")),(0,a.kt)("p",null,"\u0423 XHR \u0435\u0441\u0442\u044c \u0434\u0432\u0430 \u0440\u0435\u0436\u0438\u043c\u0430 \u0440\u0430\u0431\u043e\u0442\u044b: \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439 \u0438 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439. \u0412 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u043c \u0440\u0435\u0436\u0438\u043c\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u044f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const xhr = new XMLHttpRequest();\nxhr.open('GET', '/chats');\n \nxhr.onreadystatechange = function() {\n  if (xhr.readyState === 3) {\n    // \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430\n  }\n  if (xhr.readyState === 4) {\n    // \u0437\u0430\u043f\u0440\u043e\u0441 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043d\n  }\n}\n\nxhr.timeout = 5000; // 5 \u0441\u0435\u043a\u0443\u043d\u0434 (\u0432 \u043c\u0438\u043b\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445)\nxhr.send(); \n")),(0,a.kt)("p",null,"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f readyState \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0442\u0430\u043a\u0438\u043c\u0438:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"UNSENT = 0; // \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435\nOPENED = 1; // \u0432\u044b\u0437\u0432\u0430\u043d open\nHEADERS_RECEIVED = 2; // \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u044b \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438\nLOADING = 3; // \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f \u0442\u0435\u043b\u043e\nDONE = 4; // \u0437\u0430\u043f\u0440\u043e\u0441 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043d \n")),(0,a.kt)("p",null,"\u041a\u0430\u043a\u0438\u0435 \u0435\u0449\u0451 \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u043c\u043e\u0433\u0443\u0442 \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u044c\u0441\u044f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"loadstart")," \u2014 \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430\u0447\u0430\u0442;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"progress")," \u2014 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043f\u043e\u043b\u0443\u0447\u0438\u043b \u043e\u0447\u0435\u0440\u0435\u0434\u043d\u043e\u0439 \u043f\u0430\u043a\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"abort")," \u2014 \u0437\u0430\u043f\u0440\u043e\u0441 \u0431\u044b\u043b \u043e\u0442\u043c\u0435\u043d\u0451\u043d \u0432\u044b\u0437\u043e\u0432\u043e\u043c xhr.abort();"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"error")," \u2014 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"load")," \u2014 \u0437\u0430\u043f\u0440\u043e\u0441 \u0431\u044b\u043b \u0443\u0441\u043f\u0435\u0448\u043d\u043e (\u0431\u0435\u0437 \u043e\u0448\u0438\u0431\u043e\u043a) \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043d;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"loadend")," \u2014 \u0437\u0430\u043f\u0440\u043e\u0441 \u0431\u044b\u043b \u043f\u0440\u0435\u043a\u0440\u0430\u0449\u0451\u043d \u043f\u043e \u0442\u0430\u0439\u043c\u0430\u0443\u0442\u0443;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"readystatechange")," \u2014 \u0437\u0430\u043f\u0440\u043e\u0441 \u0431\u044b\u043b \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043d (\u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u043b\u0438 \u043d\u0435\u0443\u0441\u043f\u0435\u0448\u043d\u043e).")),(0,a.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0441\u043a\u0430\u0437\u0430\u0442\u044c \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0443 \u043f\u043e\u0434\u0446\u0435\u043f\u0438\u0442\u044c cookie \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0432\u044b\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e withCredentials \u0432 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 true:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const xhr = new XMLHttpRequest();\nxhr.open('GET', '/request');\n \nxhr.withCredentials = true;\n \nxhr.send(); \n")),(0,a.kt)("p",null,"XHR \u0434\u0430\u0451\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043e\u0442\u043c\u0435\u043d\u044f\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u044b. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0443\u043c\u0430\u043b\u0438, \u043f\u0440\u043e\u0448\u043b\u043e \u043c\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u0438\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0443\u0448\u0451\u043b \u0441\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0438 \u0437\u0430\u043f\u0440\u043e\u0441 \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435 \u043d\u0443\u0436\u0435\u043d. \u042d\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043c\u0435\u0442\u043e\u0434\u0430 abort:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"xhr.abort();\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"fetch"},"Fetch"),(0,a.kt)("p",null,"\u041c\u0435\u0442\u043e\u0434 fetch \u2014 \u044d\u0442\u043e ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u043a\u043e\u043b\u0435\u043d\u0438\u044f. \u041e\u043d \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0434\u043b\u044f \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443: \u043a\u0430\u043a \u043f\u043e \u0447\u0430\u0441\u0442\u0438 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0435\u0439 \u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044f \u043d\u0430\u0434 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u044f\u0449\u0438\u043c, \u0442\u0430\u043a \u0438 \u043f\u043e \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441\u0443, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043e\u043d \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d \u043d\u0430 \u043f\u0440\u043e\u043c\u0438\u0441\u0430\u0445."),(0,a.kt)("h3",{id:"\u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441-\u043c\u0435\u0442\u043e\u0434\u0430"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u043c\u0435\u0442\u043e\u0434\u0430:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"const fetchPromise = fetch(url, [options]);")),(0,a.kt)("p",null,"\u0412\u0442\u043e\u0440\u043e\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"(options)")," \u0437\u0430\u0434\u0430\u0451\u0442 \u0432\u0441\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u2014 \u043e\u0442 \u043c\u0435\u0442\u043e\u0434\u0430 \u0434\u043e \u0440\u0435\u0436\u0438\u043c\u0430 \u043a\u0435\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"method")," \u2014 \u043c\u0435\u0442\u043e\u0434 \u0437\u0430\u043f\u0440\u043e\u0441\u0430;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"headers")," \u2014 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 (\u043e\u0431\u044a\u0435\u043a\u0442);"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"body")," \u2014 \u0442\u0435\u043b\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430: FormData, Blob, \u0441\u0442\u0440\u043e\u043a\u0430 \u0438 \u0442. \u0434.;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mode")," \u2014 \u043e\u0434\u043d\u043e \u0438\u0437: same-origin, no-cors, cors, \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u0432 \u043a\u0430\u043a\u043e\u043c \u0440\u0435\u0436\u0438\u043c\u0435 \u043a\u0440\u043e\u0441\u0441-\u0434\u043e\u043c\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u0442\u0441\u044f \u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"credentials")," \u2014 \u043e\u0434\u043d\u043e \u0438\u0437: omit, same-origin, include, \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u043f\u0435\u0440\u0435\u0441\u044b\u043b\u0430\u0442\u044c \u043b\u0438 cookies \u0438 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u043c;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cache")," \u2014 \u043e\u0434\u043d\u043e \u0438\u0437: default, no-store, reload, no-cache, force-cache, only-if-cached, \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u043a\u0430\u043a \u043a\u0435\u0448\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"signal")," \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c AbortController \u0438 \u0441 \u0435\u0433\u043e \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043f\u0440\u0435\u0440\u0432\u0430\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441.")),(0,a.kt)("p",null,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u043c \u0431\u043e\u043b\u0435\u0435 \u0441\u043b\u043e\u0436\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043d\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0447\u0430\u0442\u0430:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"fetch('/api/v1/chats', {\n    method: 'POST',\n    body: JSON.stringify({\n      title: '\u041c\u043e\u0439 \u0447\u0430\u0442',\n    }),\n});\n")),(0,a.kt)("p",null,"\u0410 \u0432\u043e\u0442 \u043a\u0430\u043a \u043f\u0440\u0435\u0440\u0432\u0430\u0442\u044c \u044d\u0442\u043e\u0442 \u0437\u0430\u043f\u0440\u043e\u0441:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u0421\u043e\u0437\u0434\u0430\u0451\u043c \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 AbortController, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u0432\u0435\u0447\u0430\u0442\u044c \u0437\u0430 \u043f\u0440\u0435\u0440\u044b\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\nconst abortController = new AbortController();\nconst signal = abortController.signal;\n\nfetch('/api/v1/chats', {\n    method: 'POST',\n    body: JSON.stringify({\n      title: '\u041c\u043e\u0439 \u0447\u0430\u0442',\n    }),\n    // \u0423\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c fetch, \u0447\u0442\u043e signal \u043c\u043e\u0436\u0435\u0442 \u0435\u0433\u043e \u043f\u0440\u0435\u0440\u0432\u0430\u0442\u044c\n    signal\n});\n\n// \u041f\u0440\u0435\u0440\u044b\u0432\u0430\u0435\u043c\nabortController(); \n")),(0,a.kt)("p",null,"\u0422\u0430\u043a\u0436\u0435 \u043d\u0430 \u0434\u0430\u043d\u043d\u043e\u043c \u044d\u0442\u0430\u043f\u0435 \u0432\u043e\u0437\u043d\u0438\u043a\u043d\u0435\u0442 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u043f\u0440\u0438 \u0440\u0430\u0431\u043e\u0442\u0435 \u0441 cookies. \u041c\u044b \u043d\u0438\u043a\u0430\u043a \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043b\u0438, \u0447\u0442\u043e, \u0435\u0441\u043b\u0438 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0435\u0441\u0442\u044c cookies, \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0443 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u0445 \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044c. \u042d\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u0432\u043e\u0439\u0441\u0442\u0432 mode \u0438 credentials:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"fetch('/api/v1/chats', {\n    method: 'POST',\n    mode: 'cors',\n    credentials: 'include',\n    body: JSON.stringify({\n      title: '\u041c\u043e\u0439 \u0447\u0430\u0442',\n    }),\n}); \n")),(0,a.kt)("h3",{id:"\u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f-fetch"},"\u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f fetch"),(0,a.kt)("p",null,"XHR \u043e\u0447\u0435\u043d\u044c \u043c\u043e\u0449\u043d\u044b\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442, \u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0433\u043e, \u0431\u0435\u0437 \u043e\u0431\u0451\u0440\u0442\u043e\u043a, \u0434\u043e\u0432\u043e\u043b\u044c\u043d\u043e \u0441\u043b\u043e\u0436\u043d\u043e. \u041f\u043e\u043b\u0443\u0447\u0438\u0442\u0441\u044f \u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043f\u0438\u043f\u0430\u0441\u0442\u0430, \u043e\u0434\u043d\u043e\u0442\u0438\u043f\u043d\u044b\u0445 \xab\u0438\u0444\u043e\u0432\xbb \u0438 \u0434\u0440\u0443\u0433\u0438\u0445  \u043f\u0440\u043e\u0432\u0435\u0440\u043e\u043a. \u041f\u043e\u0442\u043e\u043c\u0443 \u0432\u0430\u043c \u043f\u0440\u0435\u0434\u0441\u0442\u043e\u0438\u0442 \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0441\u0432\u043e\u044e \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u0438 \u0432\u043e\u0441\u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0432\u0435\u0441\u044c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b. "),(0,a.kt)("p",null,"\u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u043d\u0430\u043f\u0438\u0448\u0435\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u044e, \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0443\u044e \u043f\u0440\u043e\u0441\u0442\u043e \u0437\u0430\u043f\u0440\u043e\u0441 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e XHR:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function request(url: string, method: string): void {\n    const xhr = new XMLHttpRequest();\n      xhr.open(method, url);\n    \n    xhr.onload = function() {\n      console.log(xhr);\n    };\n    \n    const handleError = err => {\n      console.log(err);\n    };\n\n    xhr.onabort = handleError;\n    xhr.onerror = handleError;\n    xhr.ontimeout = handleError;\n    \n    xhr.send();\n} \n")),(0,a.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c \u043c\u043e\u0436\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0432\u0438\u0434\u0430 request('url', 'GET') \u0431\u0435\u0437 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u0434\u0430 \u0441 XMLHttpRequest. \u041c\u043e\u0434\u0438\u0444\u0438\u0446\u0438\u0440\u0443\u0435\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u044e, \u0447\u0442\u043e\u0431\u044b \u043e\u043d\u0430 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u043b\u0430 \u0431\u043e\u043b\u0435\u0435 \u0441\u043b\u043e\u0436\u043d\u0443\u044e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"type Options = {\n    method: string;\n    data?: any;\n};\n// \u0412\u0430\u0436\u043d\u043e, \u0447\u0442\u043e\u0431\u044b \u0443 options \u0431\u044b\u043b\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e.\n// \u0418\u043d\u0430\u0447\u0435, \u0435\u0441\u043b\u0438 \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c options, \u0432\u0441\u0451 \u0443\u043f\u0430\u0434\u0435\u0442 \u0441 \u043e\u0448\u0438\u0431\u043a\u0430\u043c\u0438.\n// \u0410 \u0442\u0430\u043a \u043a\u0430\u043a \u044d\u0442\u043e \u043f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u2014 \u0443\u043a\u0430\u0436\u0435\u043c \u0435\u0433\u043e\nfunction request(url: string, options: Options = { method: 'GET' }): void {\n    const {method, data} = options;\n\n    const xhr = new XMLHttpRequest();\n    \n    xhr.open(method, url);\n    xhr.setRequestHeader('Content-Type', 'text/plain');\n    \n    xhr.onload = function() {\n      console.log(xhr);\n    };\n    \n    const handleError = err => {\n      console.log(err);\n    };\n\n    xhr.onabort = handleError;\n    xhr.onerror = handleError;\n    xhr.ontimeout = handleError;\n    \n    if (method === 'GET' || !data) {\n        xhr.send();\n    } else {\n        xhr.send(JSON.stringify(data));\n    }\n} \n")),(0,a.kt)("p",null,"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u043d\u0430 \u0441\u0442\u0440\u043e\u043a\u0443 \u0441 ",(0,a.kt)("inlineCode",{parentName:"p"},"GET"),". \u041d\u0435\u0443\u0434\u043e\u0431\u043d\u043e \u043a\u0430\u0436\u0434\u044b\u0439 \u0440\u0430\u0437 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0442\u044c \u0440\u0443\u043a\u0430\u043c\u0438 \u043c\u0435\u0442\u043e\u0434 \u043d\u0430 \u0440\u0430\u0432\u0435\u043d\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a\u0435. \u0410 \u0435\u0441\u043b\u0438 \u043f\u043e\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0437\u0430\u043f\u0438\u0441\u044c \u0441 GET \u043d\u0430 get, \u043f\u0440\u0438\u0434\u0451\u0442\u0441\u044f \u0440\u0443\u043a\u0430\u043c\u0438 \u043f\u0435\u0440\u0435\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c \u043f\u043e\u043b\u043e\u0432\u0438\u043d\u0443 \u043f\u0440\u043e\u0435\u043a\u0442\u0430. \u041d\u0435\u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e \u0438 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e. \u0427\u0442\u043e\u0431\u044b \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c \u044d\u0442\u043e\u0433\u043e, \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c enum:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"enum METHOD {\n    GET = 'GET',\n    POST =  'POST',\n    PUT = 'PUT',\n    PATCH = 'PATCH',\n    DELETE = 'DELETE'\n};\n\ntype Options = {\n    method: METHOD;\n    data?: any;\n};\n\nfunction request(url: string, options: Options = { method: METHOD.GET }): void {\n    const {method, data} = options;\n\n    const xhr = new XMLHttpRequest();\n    xhr.open(method, url);\n    xhr.setRequestHeader('Content-Type', 'text/plain');\n    \n    xhr.onload = function() {\n      console.log(xhr);\n    };\n    \n    const handleError = err => {\n      console.error(err);\n    };\n\n    xhr.onabort = handleError;\n    xhr.onerror = handleError;\n    xhr.ontimeout = handleError;\n    \n    if (method === METHOD.GET || !data) {\n        xhr.send();\n    } else {\n        xhr.send(JSON.stringify(data));\n    }\n} \n")),(0,a.kt)("p",null,"\u041e\u0442\u043b\u0438\u0447\u043d\u043e! \u0417\u0430\u043f\u0440\u043e\u0441\u044b \u0443\u0445\u043e\u0434\u044f\u0442, \u043d\u043e \u043e\u0442\u0432\u0435\u0442 \u043f\u043e\u043a\u0430 \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u0442 \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u044c \u0438 \u043d\u0435 \u043d\u0435\u0441\u0451\u0442 \u043d\u0438\u043a\u0430\u043a\u043e\u0439 \u043f\u043e\u043b\u044c\u0437\u044b. \u041f\u0440\u0438\u043c\u0435\u043d\u0438\u043c \u043f\u0440\u043e\u043c\u0438\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044e:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"enum METHOD {\n    GET = 'GET',\n    POST = 'POST',\n    PUT = 'PUT',\n    PATCH = 'PATCH',\n    DELETE = 'DELETE'\n};\n\ntype Options = {\n    method: METHOD;\n    data?: any;\n};\n\nfunction request<TResponse>(url: string, options: Options = { method: METHOD.GET }): Promise<TResponse> {\n    const {method, data} = options;\n\n    return new Promise((resolve, reject) => {\n        const xhr = new XMLHttpRequest();\n        xhr.open(method, url);\n        \n        xhr.onload = function() {\n          resolve(xhr);\n        };\n\n        xhr.onabort = reject;\n        xhr.onerror = reject;\n        xhr.ontimeout = reject;\n        \n        if (method === METHOD.GET || !data) {\n            xhr.send();\n        } else {\n            xhr.send(data);\n        }\n    });\n} \n")),(0,a.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u043c \u043f\u0440\u043e\u043c\u0438\u0441\u043e\u043c (\u0430 \u0435\u0441\u043b\u0438 \u043f\u043e\u0434\u043b\u043e\u0436\u0438\u0442\u044c \u0432 \u0434\u0436\u0435\u043d\u0435\u0440\u0438\u043a \u0442\u0438\u043f \u2014 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u0442\u0438\u043f\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043e):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"\nrequest<{ id: string }>('https://chats', {\n    method: METHOD.POST,\n    data: JSON.stringify({\n      title: '\u041c\u043e\u0439 \u0447\u0430\u0442',\n    }),\n}).then(({ id }) => {\n    // \u0417\u0434\u0435\u0441\u044c id \u0438\u043c\u0435\u0435\u0442 \u0442\u0438\u043f string\n}); \n")),(0,a.kt)("p",null,"\u041d\u0435\u0443\u0434\u043e\u0431\u043d\u043e \u043a\u0430\u0436\u0434\u044b\u0439 \u0440\u0430\u0437 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430. \u041b\u043e\u0433\u0438\u043a\u0430 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 XHR \u0438\u043d\u043a\u0430\u043f\u0441\u0443\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0430, \u043d\u043e \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043f\u043e\u043a\u0430 \u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c. \u0425\u043e\u0447\u0435\u0442\u0441\u044f \u043d\u0435 \u043f\u0438\u0441\u0430\u0442\u044c \u043b\u0438\u0448\u043d\u0438\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432, \u0430 \u044f\u0432\u043d\u043e \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u2014 \xab\u0441\u0434\u0435\u043b\u0430\u0439 POST-\u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u0432\u043e\u0442 \u044d\u0442\u043e\u0442 \u0443\u0440\u043b, \u0441 \u0432\u043e\u0442 \u0442\u0430\u043a\u0438\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438\xbb:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"HTTP.post('https://chats', { title: '\u041c\u043e\u0439 \u0447\u0430\u0442' }); \n")),(0,a.kt)("p",null,"\u0420\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u043c \u043a\u043b\u0430\u0441\u0441 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043c\u0438:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"enum METHOD {\n        GET = 'GET',\n        POST = 'POST',\n        PUT = 'PUT',\n        PATCH = 'PATCH',\n        DELETE = 'DELETE'\n};\n\ntype Options = {\n    method: METHOD;\n    data?: any;\n};\n\n// \u0422\u0438\u043f Omit \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0434\u0432\u0430 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430: \u043f\u0435\u0440\u0432\u044b\u0439 \u2014 \u0442\u0438\u043f, \u0432\u0442\u043e\u0440\u043e\u0439 \u2014 \u0441\u0442\u0440\u043e\u043a\u0430\n// \u0438 \u0443\u0434\u0430\u043b\u044f\u0435\u0442 \u0438\u0437 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0442\u0438\u043f\u0430 \u043a\u043b\u044e\u0447, \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u0432\u0442\u043e\u0440\u044b\u043c \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u043c\ntype OptionsWithoutMethod = Omit<Options, 'method'>;\n// \u042d\u0442\u043e\u0442 \u0442\u0438\u043f \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u0435\u043d \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c\u0443:\n// type OptionsWithoutMethod = { data?: any };\n\nclass HTTPTransport {\n  get(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {\n    return this.request(url, {...options, method: METHOD.GET});\n  };\n\n  request(url: string, options: Options = { method: METHOD.GET }): Promise<XMLHttpRequest> {\n    const {method, data} = options;\n\n    return new Promise((resolve, reject) => {\n      const xhr = new XMLHttpRequest();\n      xhr.open(method, url);\n      \n      xhr.onload = function() {\n        resolve(xhr);\n      };\n  \n      xhr.onabort = reject;\n      xhr.onerror = reject;\n      xhr.ontimeout = reject;\n      \n      if (method === METHOD.GET || !data) {\n        xhr.send();\n      } else {\n        xhr.send(data);\n      }\n    });\n  };\n} \n")),(0,a.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c \u043c\u043e\u0436\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0432\u043e\u0442 \u0442\u0430\u043a:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"new HTTPTransport().get('https://chats'); \n")),(0,a.kt)("h2",{id:"axios"},"Axios"),(0,a.kt)("p",null,"Axios \u2014 \u043c\u043e\u0434\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0438 \u0431\u043e\u043b\u0435\u0435 \u0441\u043b\u043e\u0436\u043d\u044b\u0439 \u0430\u043d\u0430\u043b\u043e\u0433 Fetch API. \u041a\u0442\u043e-\u0442\u043e \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0438\u0442\u0430\u0435\u0442 \u043c\u0435\u0442\u043e\u0434 ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch"),", \u043a\u0442\u043e-\u0442\u043e axios. \u041d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0437\u0430\u043d\u043e\u0432\u043e \u043f\u0438\u0448\u0443\u0442 \u043e\u0431\u0451\u0440\u0442\u043a\u0438 \u043d\u0430\u0434 XHR, \u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u0442\u0430\u0449\u0438\u0442\u044c \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443.\n\u0418\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e\u0435 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 fetch \u0438 axios.\n\u0412 \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u043d\u0435\u043b\u044c\u0437\u044f \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043d\u0438 Fetch API, \u043d\u0438 axios. \u0412\u044b \u0441\u0430\u043c\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u0442\u0435 \u0432 \u0442\u0440\u0435\u043d\u0430\u0436\u0451\u0440\u0435 \u0430\u043d\u0430\u043b\u043e\u0433 ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," \u0438 \u0431\u0443\u0434\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u0432\u043e\u044e \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e."),(0,a.kt)("hr",null),(0,a.kt)("hr",null),(0,a.kt)("hr",null))}c.isMDXComponent=!0}}]);