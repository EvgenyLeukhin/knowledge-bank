"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8034],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=u(n),c=l,d=k["".concat(p,".").concat(c)]||k[c]||m[c]||r;return n?a.createElement(d,i(i({ref:t},s),{},{components:n})):a.createElement(d,i({ref:t},s))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4512:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(7462),l=(n(7294),n(3905));const r={title:"HTTP-\u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b",sidebar_position:0},i=void 0,o={unversionedId:"backend/http",id:"backend/http",title:"HTTP-\u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b",description:"HyperText transfer protocol. \u041f\u0440\u043e\u0442\u043e\u043a\u043e\u043b \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043c\u0435\u0436\u0434\u0443 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u043c \u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c. \u0418\u0437\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e \u0431\u044b\u043b \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0442\u043e\u043b\u044c\u043a\u043e html-\u0444\u0430\u0439\u043b\u043e\u0432, \u0430 \u0441\u0435\u0439\u0447\u0430\u0441 \u0443\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0432\u0441\u0451 \u0447\u0442\u043e \u0443\u0433\u043e\u0434\u043d\u043e (css, js, images, fonts, json \u0438 \u0442.\u0434.)",source:"@site/docs/backend/http.md",sourceDirName:"backend",slug:"/backend/http",permalink:"/knowledge-bank/docs/backend/http",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/backend/http.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"HTTP-\u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udee0 Backend",permalink:"/knowledge-bank/docs/category/-backend"},next:{title:"\u0417\u0430\u043f\u0440\u043e\u0441-\u041e\u0442\u0432\u0435\u0442",permalink:"/knowledge-bank/docs/backend/requests"}},p={},u=[{value:"\u0412\u0438\u0434\u044b \u0441\u0435\u0442\u0435\u0432\u044b\u0445 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u043e\u0432",id:"\u0432\u0438\u0434\u044b-\u0441\u0435\u0442\u0435\u0432\u044b\u0445-\u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u043e\u0432",level:3},{value:"\u041a\u043b\u0438\u0435\u043d\u0442-\u0441\u0435\u0440\u0432\u0435\u0440\u043d\u0430\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430",id:"\u043a\u043b\u0438\u0435\u043d\u0442-\u0441\u0435\u0440\u0432\u0435\u0440\u043d\u0430\u044f-\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430",level:2},{value:"\u041a\u043b\u0438\u0435\u043d\u0442",id:"\u043a\u043b\u0438\u0435\u043d\u0442",level:3},{value:"\u0422\u0438\u043f\u044b \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432",id:"\u0442\u0438\u043f\u044b-\u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432",level:4},{value:"\u0421\u0435\u0440\u0432\u0435\u0440",id:"\u0441\u0435\u0440\u0432\u0435\u0440",level:3},{value:"\u0422\u0438\u043f\u044b \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u0432",id:"\u0442\u0438\u043f\u044b-\u0441\u0435\u0440\u0432\u0435\u0440\u043e\u0432",level:4},{value:"\u0411\u0414",id:"\u0431\u0434",level:3},{value:"\u0417\u0430\u043f\u0440\u043e\u0441\u044b",id:"\u0437\u0430\u043f\u0440\u043e\u0441\u044b",level:2},{value:"URL",id:"url",level:3},{value:"Headers",id:"headers",level:3},{value:"Status codes",id:"status-codes",level:3},{value:"Request Data / Reques body / Form data / Payload",id:"request-data--reques-body--form-data--payload",level:3}],s={toc:u};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"HyperText transfer protocol"),". \u041f\u0440\u043e\u0442\u043e\u043a\u043e\u043b \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043c\u0435\u0436\u0434\u0443 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u043c \u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c. \u0418\u0437\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e \u0431\u044b\u043b \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0442\u043e\u043b\u044c\u043a\u043e html-\u0444\u0430\u0439\u043b\u043e\u0432, \u0430 \u0441\u0435\u0439\u0447\u0430\u0441 \u0443\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0432\u0441\u0451 \u0447\u0442\u043e \u0443\u0433\u043e\u0434\u043d\u043e (css, js, images, fonts, json \u0438 \u0442.\u0434.)"),(0,l.kt)("h3",{id:"\u0432\u0438\u0434\u044b-\u0441\u0435\u0442\u0435\u0432\u044b\u0445-\u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u043e\u0432"},"\u0412\u0438\u0434\u044b \u0441\u0435\u0442\u0435\u0432\u044b\u0445 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u043e\u0432"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"HTTP(S)")," - http, files"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"WS")," - web-socket"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"TCP/IP")," - os protocol"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTP")," - file"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"SSH")," - cli"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"SMTP, POP3")," - email")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u043a\u043b\u0438\u0435\u043d\u0442-\u0441\u0435\u0440\u0432\u0435\u0440\u043d\u0430\u044f-\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430"},"\u041a\u043b\u0438\u0435\u043d\u0442-\u0441\u0435\u0440\u0432\u0435\u0440\u043d\u0430\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430"),(0,l.kt)("img",{src:"../../../img/qa/http.png",width:"550",alt:"http.png"}),(0,l.kt)("p",null,"\u041f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u044b \u0432\u0441\u0435 \u0441\u0430\u0439\u0442\u044b \u0438 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u0441\u0435\u0440\u0432\u0438\u0441\u044b. \u0421\u0435\u0440\u0432\u0435\u0440\u044b \u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u044b \u0441\u0432\u044f\u0437\u0430\u043d\u044b \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c\u0438 \u0441\u0435\u0442\u044f\u043c\u0438 \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u0442\u0435\u0432\u044b\u0435 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u044b.\n3-\u0445 \u0443\u0440\u043e\u0432\u043d\u0435\u0432\u0430\u044f \u041a\u0421-\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 (\u041a\u043b\u0438\u0435\u043d\u0442 --\x3e \u0421\u0435\u0440\u0435\u0432\u0435\u0440 --\x3e \u0411\u0414)"),(0,l.kt)("p",null,"\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0435\u0441\u043b\u0438 \u0431\u0443\u0434\u0435\u0442 \u043d\u0435\u0438\u0441\u043f\u0440\u0430\u0432\u043d\u043e \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u043e \u0437\u0432\u0435\u043d\u043e, \u0442\u043e \u0432\u0441\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0431\u0443\u0434\u0435\u0442 \u043d\u0435\u0440\u0430\u0431\u043e\u0442\u043e\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0439, \u0447\u0442\u043e\u0431\u044b \u044d\u0442\u043e\u0433\u043e \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 ",(0,l.kt)("strong",{parentName:"li"},"\u043a\u043b\u0430\u0441\u0442\u0435\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u0432"),"."),(0,l.kt)("li",{parentName:"ul"},'\u0437\u043b\u043e\u0443\u043c\u0443\u0448\u043b\u0435\u043d\u043d\u0438\u043a\u0438 \u043c\u043e\u0433\u0443\u0442 \u0438\u0437\u044a\u044f\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438\u043b\u0438 \u0411\u0414, \u043d\u043e \u0438 "\u043f\u043e \u043f\u0443\u0442\u0438" \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 (\u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432\u044b\u0441\u043e\u043a\u0438\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f \u043a \u0437\u0430\u0449\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0445, https, \u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u044e \u0438 \u0442.\u0434.)')),(0,l.kt)("h3",{id:"\u043a\u043b\u0438\u0435\u043d\u0442"},"\u041a\u043b\u0438\u0435\u043d\u0442"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'\u0417\u0430\u043f\u0440\u043e\u0441\u044b \u0438\u0434\u0443\u0442 \u043e\u0442 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432 ("\u0417\u0430\u043a\u0430\u0437\u0447\u0438\u043a \u0443\u0441\u043b\u0443\u0433")'),(0,l.kt)("li",{parentName:"ul"},"\u041f\u041e \u0434\u043b\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430 (frontend), \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u044b, \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"),(0,l.kt)("li",{parentName:"ul"},"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0434\u043e\u0436\u043d\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0432 \u043f\u043e\u043d\u044f\u0442\u043d\u043e\u043c \u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u043c \u0432\u0438\u0434\u0435 (json ---\x3e \u0441\u0435\u0440\u0432\u0435\u0440 --\x3e json --\x3e html/css)"),(0,l.kt)("li",{parentName:"ul"},"\u041a\u043b\u0438\u0435\u043d\u0442\u043e\u0432 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u0433\u0440\u043e\u043c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e")),(0,l.kt)("h4",{id:"\u0442\u0438\u043f\u044b-\u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432"},"\u0422\u0438\u043f\u044b \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u0422\u043e\u043d\u043a\u0438\u0439 \u043a\u043b\u0438\u0435\u043d\u0442")," - \u043d\u0438\u0437\u043a\u0430\u044f \u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435, \u0432\u0441\u044f \u043b\u043e\u0433\u0438\u043a\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435. \u041a\u043b\u0438\u0435\u043d\u0442 \u0434\u0435\u043b\u0430\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441 \u0438 \u0441\u0435\u0440\u0432\u0435\u0440 \u0432\u0441\u0435 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442 \u0438 \u0432\u044b\u0432\u043e\u0434\u0438\u0442 html (\u0441\u0442\u0430\u0442\u0438\u0447\u043d\u044b\u0435 \u0441\u0430\u0439\u0442\u044b, \u043c\u0438\u043d\u0438\u043c\u0443\u043c js)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u0422\u043e\u043b\u0441\u0442\u044b\u0439 \u043a\u043b\u0438\u0435\u043d\u0442")," - \u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442 \u043a\u0430\u043a\u0443\u044e-\u043d\u0438\u0431\u0443\u0434\u044c \u0447\u0430\u0441\u0442\u044c \u043b\u043e\u0433\u0438\u043a\u0438 \u0441\u0430\u043c\u0438 (SPA, \u043d\u0430\u0441\u044b\u0449\u0435\u043d\u043d\u044b\u0439 \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441, js \u043c\u043d\u043e\u0433\u043e)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u0411\u043e\u0433\u0430\u0442\u044b\u0439 \u043a\u043b\u0438\u0435\u043d\u0442")," - \u0447\u0442\u043e-\u0442\u043e \u0441\u0440\u0435\u0434\u043d\u0435\u0435.")),(0,l.kt)("h3",{id:"\u0441\u0435\u0440\u0432\u0435\u0440"},"\u0421\u0435\u0440\u0432\u0435\u0440"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0427\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043e \u043d\u0430 \u041e\u0421 Linux"),(0,l.kt)("li",{parentName:"ul"},'\u0421\u0435\u0440\u0432\u0435\u0440 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u043d\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432 ("\u041f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a \u0443\u0441\u043b\u0443\u0433")'),(0,l.kt)("li",{parentName:"ul"},"\u0414\u0430\u043d\u043d\u044b\u0435 \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0432 \u0411\u0414"),(0,l.kt)("li",{parentName:"ul"},"\u0414\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0432\u044b\u0441\u043e\u043a\u0430\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c (\u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440)"),(0,l.kt)("li",{parentName:"ul"},"\u0414\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0432\u044b\u0441\u043e\u043a\u0430\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c (\u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440)"),(0,l.kt)("li",{parentName:"ul"},"\u041f\u041e \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430 (backend)"),(0,l.kt)("li",{parentName:"ul"},"\u041e\u0442\u043a\u0430\u0437\u043e\u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u043e\u0441\u0442\u044c"),(0,l.kt)("li",{parentName:"ul"},"\u041e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043c\u043e\u0436\u0435\u0442 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 (\u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u0431\u044b\u043b\u043e \u043f\u0435\u0440\u0435\u0433\u0440\u0443\u0437\u043a\u0438)"),(0,l.kt)("li",{parentName:"ul"},"DATA-\u0446\u0435\u043d\u0442\u0440\u044b"),(0,l.kt)("li",{parentName:"ul"},"\u0414\u0435\u043b\u0430\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043a \u0441\u0435\u0440\u0435\u0432\u0435\u0440\u0443 \u0411\u0414"),(0,l.kt)("li",{parentName:"ul"},"\u0414\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u043d\u044b\u043c \u043e\u0442 \u0432\u0440\u0435\u0434\u043e\u043d\u043e\u0441\u043d\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0432\u044b\u0432\u0435\u0441\u0442\u0438 \u0435\u0433\u043e \u0438\u0437 \u0441\u0442\u0440\u043e\u044f")),(0,l.kt)("img",{src:"../../../img/qa/claster.png",width:"550",alt:"claster.png"}),(0,l.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0435 \u0438\u043c\u0435\u0435\u0442\u0441\u044f \u043a\u043b\u0430\u0441\u0442\u0435\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u0432, \u0442\u043e \u0441\u0442\u0430\u0432\u0438\u0442\u0441\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u0439 ",(0,l.kt)("strong",{parentName:"p"},"\u0441\u0435\u0440\u0432\u0435\u0440-\u0431\u0430\u043b\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u0449\u0438\u043a"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u0434\u043b\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430 (\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0432\u044b\u0441\u043e\u043a\u043e\u043d\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439)."),(0,l.kt)("h4",{id:"\u0442\u0438\u043f\u044b-\u0441\u0435\u0440\u0432\u0435\u0440\u043e\u0432"},"\u0422\u0438\u043f\u044b \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u0432"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Web-\u0441\u0435\u0440\u0432\u0435\u0440")," - \u0441\u0435\u0440\u0432\u0435\u0440\u044b \u0441 \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c \u043f\u043e http-\u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0443 \u0438 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u0421\u0435\u0440\u0432\u0435\u0440\u044b \u0411\u0414")," - \u0441\u0435\u0440\u0432\u0435\u0440\u044b \u0441 \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c \u043a \u0411\u0414"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u0424\u0430\u0439\u043b\u043e\u0432\u044b\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u044b")," - \u0444\u0430\u0439\u043b\u043e\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u041f\u043e\u0447\u0442\u043e\u0432\u044b\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u044b")," - \u0434\u043b\u044f \u0440\u0430\u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 email"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u0421\u0435\u0440\u0432\u0435\u0440\u044b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439")," - \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u043c API"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u041f\u0440\u043e\u043a\u0441\u0438-\u0441\u0435\u0440\u0432\u0435\u0440")," - \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0435\u0440. \u041d\u0443\u0436\u043d\u043e, \u0447\u0442\u043e\u0431\u044b \u0441\u044b\u043c\u0438\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441. \u041a\u0430\u043a \u0431\u0443\u0434\u0442\u043e \u0437\u0430\u043f\u0440\u043e\u0441 \u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u043d\u0435 \u0441 \u0432\u0430\u0448\u0435\u0433\u043e \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e IP, \u0430 \u0441 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u0433\u043e. \u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c, \u043d\u0435\u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0435\u043c\u043e\u0441\u0442\u044c.")),(0,l.kt)("img",{src:"../../../img/qa/proxy-server.png",width:"450",alt:"proxy-server.png"}),(0,l.kt)("h3",{id:"\u0431\u0434"},"\u0411\u0414"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u041f\u0440\u043e\u0441\u0442\u043e \u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0441 \u043f\u043e\u043b\u044f\u043c\u0438 \u043f\u043e\u043b\u0435-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"),(0,l.kt)("li",{parentName:"ul"},"\u041f\u043e\u0432\u044b\u0448\u0435\u043d\u043d\u044b\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f \u043a \u0437\u0430\u0449\u0438\u0442\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 (\u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435)"),(0,l.kt)("li",{parentName:"ul"},"\u0415\u0441\u043b\u0438 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0438 \u043a\u0430\u043a\u0438\u0435-\u0442\u043e \u0441\u0431\u043e\u0438, \u0442\u043e \u0432\u0441\u044f \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0430\u044f\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u0443\u0434\u0435\u0442 \u043e\u0441\u0442\u0430\u0442\u044c\u0441\u044f \u0432 \u0411\u0414, \u0438 \u044d\u0442\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u0437\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c"),(0,l.kt)("li",{parentName:"ul"},"\u041c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0441\u0435\u0440\u0432\u0435\u0440-\u0431\u0430\u043b\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u0449\u0438\u043a \u0434\u043b\u044f \u0411\u0414")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u0437\u0430\u043f\u0440\u043e\u0441\u044b"},"\u0417\u0430\u043f\u0440\u043e\u0441\u044b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u041c\u0435\u0442\u043e\u0434")," \u0437\u0430\u043f\u0440\u043e\u0441\u0430 (GET, POST, PUT, DELETE)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"URL")," \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u043a\u0443\u0434\u0430 \u043e\u043d \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438")," \u0437\u0430\u043f\u0440\u043e\u0441\u0430 (headers), \u0433\u0434\u0435 \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0434\u0430\u043d\u043d\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u043f\u043e\u043b\u0435-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u041a\u043e\u0434 \u043e\u0442\u0432\u0435\u0442\u0430")," \u0441\u0435\u0440\u0432\u0435\u0440\u0430"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430")," (form data)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u043e\u0442\u0432\u0435\u0442\u0430")," (json - \u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0439 \u0438\u043b\u0438 xml - \u0431\u043e\u043b\u0435\u0435 \u0447\u0438\u0442\u0430\u0435\u043c\u044b\u0439, \u043d\u043e \u043b\u0438\u0448\u043d\u0438\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b)")),(0,l.kt)("h3",{id:"url"},"URL"),(0,l.kt)("p",null,"TODO"),(0,l.kt)("h3",{id:"headers"},"Headers"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'- GENERAL\n  - Request URL: http://localhost:3000/knowledge-bank/img/logo.svg\n  - Request Method: GET\n  - Status Code: 200 OK\n  - Remote Address: 127.0.0.1:3000\n  - Referrer Policy: strict-origin-when-cross-origin\n- REQUEST HEADERS\n  - Accept: image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8\n  - Accept-Encoding: gzip, deflate, br\n  - Accept-Language: ru-RU,ru;q=0.9,en;q=0.8,en-US;q=0.7\n  - Cache-Control: no-cache\n  - Connection: keep-alive\n  - Cookie: _ym_uid=1652945145444754001; _ym_d=1655273573\n  - Host: localhost:3000\n  - Pragma: no-cache\n  - Referer: http://localhost:3000/knowledge-bank/docs/backend/http/\n  - sec-ch-ua: "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"\n  - sec-ch-ua-mobile: ?0\n  - sec-ch-ua-platform: "macOS"\n  - Sec-Fetch-Dest: image\n  - Sec-Fetch-Mode: no-cors\n  - Sec-Fetch-Site: same-origin\n  - User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36\n- RESPOONSE HEADERS\n  - Accept-Ranges: bytes\n  - access-control-allow-origin: *\n  - Cache-Control: public, max-age=0\n  - Connection: keep-alive\n  - Content-Encoding: gzip\n  - Content-Type: image/svg+xml\n  - Date: Sat, 29 Oct 2022 09:40:42 GMT\n  - ETag: W/"1926-18391797ae0"\n  - Keep-Alive: timeout=5\n  - Last-Modified: Sat, 01 Oct 2022 02:56:41 GMT\n  - Transfer-Encoding: chunked\n  - Vary: Accept-Encoding\n  - X-Powered-By: Express\n')),(0,l.kt)("h3",{id:"status-codes"},"Status codes"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"100 \u2013 199")," - Informational responses"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"100 Continue"),(0,l.kt)("li",{parentName:"ul"},"101 Switching Protocols"),(0,l.kt)("li",{parentName:"ul"},"103 Early Hints")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"200 \u2013 299")," - Successful responses "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"200 OK"),(0,l.kt)("li",{parentName:"ul"},"201 Created"),(0,l.kt)("li",{parentName:"ul"},"202 Accepted"),(0,l.kt)("li",{parentName:"ul"},"203 Non-Authoritative Information"),(0,l.kt)("li",{parentName:"ul"},"204 No Content"),(0,l.kt)("li",{parentName:"ul"},"205 Reset Content"),(0,l.kt)("li",{parentName:"ul"},"206 Partial Content")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"300 \u2013 399")," - Redirection messages"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"400 \u2013 499")," - Client error responses"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"400 Bad Request"),(0,l.kt)("li",{parentName:"ul"},"401 Unauthorized"),(0,l.kt)("li",{parentName:"ul"},"402 Payment Required"),(0,l.kt)("li",{parentName:"ul"},"403 Forbidden"),(0,l.kt)("li",{parentName:"ul"},"404 Not Found"),(0,l.kt)("li",{parentName:"ul"},"405 Method Not Allowed"),(0,l.kt)("li",{parentName:"ul"},"414 URI Too Long")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"500 \u2013 599")," - Server error responses"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"500 Internal Server Error"),(0,l.kt)("li",{parentName:"ul"},"501 Not Implemented"),(0,l.kt)("li",{parentName:"ul"},"502 Bad Gateway"),(0,l.kt)("li",{parentName:"ul"},"503 Service Unavailable")),(0,l.kt)("h3",{id:"request-data--reques-body--form-data--payload"},"Request Data / Reques body / Form data / Payload"),(0,l.kt)("p",null,"\u041c\u043e\u0436\u043d\u043e \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u043e \u0432\u043a\u043b\u0430\u0434\u043a\u0435 Payload/Preview."),(0,l.kt)("p",null,"\u0414\u0430\u043d\u043d\u044b\u0435 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 json, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u043c. \u041f\u0440\u0438\u043c\u0435\u0440 payload:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"email":"EvgenyLeukhin@yandex.ru", "answer":"1234", "captchaCode":"45439daf-39e8-a71f-0434-d4c88b3cbb08"}\n')),(0,l.kt)("hr",null))}m.isMDXComponent=!0}}]);