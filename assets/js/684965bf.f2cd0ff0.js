"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[6285],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=p(n),m=a,d=k["".concat(s,".").concat(m)]||k[m]||u[m]||r;return n?o.createElement(d,l(l({ref:t},c),{},{components:n})):o.createElement(d,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={title:"Storage",sidebar_position:14},l=void 0,i={unversionedId:"frontend/js-basics/storage",id:"frontend/js-basics/storage",title:"Storage",description:"Local Storage (\u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435)",source:"@site/docs/frontend/js-basics/storage.md",sourceDirName:"frontend/js-basics",slug:"/frontend/js-basics/storage",permalink:"/knowledge-bank/docs/frontend/js-basics/storage",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/js-basics/storage.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"Storage",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"\u0421\u043e\u0431\u044b\u0442\u0438\u044f",permalink:"/knowledge-bank/docs/frontend/js-basics/events"},next:{title:"Date",permalink:"/knowledge-bank/docs/frontend/js-basics/date"}},s={},p=[{value:"Local Storage (\u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435)",id:"local-storage-\u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0435-\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435",level:2},{value:"Session Storage (\u0441\u0435\u0441\u0441\u0438\u043e\u043d\u043d\u043e\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435)",id:"session-storage-\u0441\u0435\u0441\u0441\u0438\u043e\u043d\u043d\u043e\u0435-\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435",level:2},{value:"Cookie",id:"cookie",level:2},{value:"Stateless",id:"stateless",level:2},{value:"\u0413\u0434\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u043a\u0443\u043a\u0438:",id:"\u0433\u0434\u0435-\u043f\u0440\u0438\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f-\u043a\u0443\u043a\u0438",level:3},{value:"\u0421\u0438\u0433\u043d\u0430\u0442\u0443\u0440\u0430 <code>Set-Cookie</code>:",id:"\u0441\u0438\u0433\u043d\u0430\u0442\u0443\u0440\u0430-set-cookie",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"local-storage-\u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0435-\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435"},"Local Storage (\u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435)"),(0,a.kt)("p",null,"\u0425\u0440\u0430\u043d\u0438\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u0431\u0435\u0441\u0441\u0440\u043e\u0447\u043d\u043e.\n\u041e\u0447\u0438\u0449\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e JavaScript \u0438\u043b\u0438 \u043e\u0447\u0438\u0441\u0442\u043a\u0438 \u043a\u044d\u0448\u0430 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430.\n\u0425\u0440\u0430\u043d\u0438\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0431\u044a\u0451\u043c\u043e\u043c \u0434\u043e 5 \u041c\u0411, \u044d\u0442\u043e \u0441\u0430\u043c\u044b\u0439 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u043e\u0431\u044a\u0451\u043c \u0438\u0437 \u0442\u0440\u0451\u0445 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430.\n\u041d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u0442\u0430\u0440\u044b\u043c\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430\u043c\u0438, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, IE 7 \u0438 \u043d\u0438\u0436\u0435.\n\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043f\u043e \u043f\u0440\u0430\u0432\u0438\u043b\u0443 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043c\u0435\u043d\u0430 (same origin policy). \u0422\u043e \u0435\u0441\u0442\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u0432\u0437\u044f\u0442\u044c\nlocalStorage.getItem('some-ls-field');\n\n// \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c\nlocalStorage.setItem('some-ls-field', someValue);\n\n// \u0443\u0434\u0430\u043b\u0438\u0442\u044c\nlocalStorage.removeItem('some-ls-field');\n\n// \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c localStorage\nlocalStorage.clear();\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"session-storage-\u0441\u0435\u0441\u0441\u0438\u043e\u043d\u043d\u043e\u0435-\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435"},"Session Storage (\u0441\u0435\u0441\u0441\u0438\u043e\u043d\u043d\u043e\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435)"),(0,a.kt)("p",null,"\u0425\u0440\u0430\u043d\u0438\u0442 \u0434\u0430\u043d\u043d\u044b\u0435, \u043f\u043e\u043a\u0430 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0435\u0442\u0441\u044f \u0442\u0435\u043a\u0443\u0449\u0430\u044f \u0441\u0435\u0441\u0441\u0438\u044f. \u041a\u043e\u0433\u0434\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0437\u0430\u043a\u0440\u044b\u0432\u0430\u0435\u0442 \u0431\u0440\u0430\u0443\u0437\u0435\u0440, \u0434\u0430\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u043d\u043e\u0432\u044f\u0442\u0441\u044f \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u043c\u0438.\n\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0432\u0435\u0440\u0445\u043d\u0435\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043a\u0430\u0436\u0434\u0430\u044f \u0432\u043a\u043b\u0430\u0434\u043a\u0430 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0445\u0440\u0430\u043d\u0438\u0442 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435.\n\u041e\u0431\u044a\u0451\u043c \u0434\u0430\u043d\u043d\u044b\u0445 \u0431\u043e\u043b\u044c\u0448\u0435 \u0447\u0435\u043c \u0432 Cookie.\n\u041d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u0442\u0430\u0440\u044b\u043c\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430\u043c\u0438, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, IE 7 \u0438 \u043d\u0438\u0436\u0435."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"cookie"},"Cookie"),(0,a.kt)("p",null,"\u0424\u0440\u0430\u0433\u043c\u0435\u043d\u0442 \u0434\u0430\u043d\u043d\u044b\u0445, \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c \u0438 \u0445\u0440\u0430\u043d\u0438\u043c\u044b\u0439 \u043d\u0430 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f. \u0427\u0442\u043e\u0431\u044b \u0434\u0430\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043c\u0435\u0436\u0434\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043c\u0438 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438\u043b\u0438 \u0435\u0433\u043e \u0434\u0430\u043d\u043d\u044b\u0435)"),(0,a.kt)("p",null,"\u0425\u0440\u0430\u043d\u0438\u0442 \u0434\u0430\u043d\u043d\u044b\u0435, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438.\n\u041b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u0438 \u0441\u0435\u0441\u0441\u0438\u043e\u043d\u043d\u043e\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u0435.\n\u0421\u0440\u043e\u043a \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 cookie.\n\u041e\u0431\u044a\u0451\u043c \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0435 \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0435\u0442 4 \u041a\u0431\u0430\u0439\u0442.\nCookie \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0437\u0430\u0449\u0438\u0449\u0451\u043d\u043d\u044b\u043c\u0438, \u0432 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0438\u0445 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u043d\u0435\u043b\u044c\u0437\u044f \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u0430. \u042d\u0442\u043e \u0432\u0430\u0436\u043d\u043e \u0434\u043b\u044f \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u043f\u0440\u0438 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445 \u0442\u043e\u043a\u0435\u043d\u043e\u0432."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// \nconst readCookie = document.cookie;\n\n// \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0432 \u043a\u0443\u043a\u0438 \u043f\u043e\u043b\u0435 user \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c John, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0441\u043e\u0442\u0440\u0435\u0442\u0441\u044f 19 Jan 2038 03:14:07 GMT\ndocument.cookie = "user=John; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT";\ndocument.cookie = "cookieName=Cookie value; expires=Sun, 15 Jun 2019 23:59:00 UTC; path=/javascript-cheatsheet" // Cookie with an expiry date and a path set\n\n// \u0441 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u043c\u0438, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043d\u0430 \u0433\u043e\u0434\ndocument.cookie = `cookie_name=${cookie_value}; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/`;\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/js-cookie"},"js-cookie")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@types/js-cookiecookie"},"@types/js-cookie"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// set\nCookies.set('name', 'value');\nCookies.set('name', 'value', { expires: 7 });\n\n// get\nCookies.get('name') // => 'value'\nCookies.get('nothing') // => undefined\nCookies.get() // => { name: 'value' }\n\n// remove\nCookies.remove('name')\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"stateless"},"Stateless"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"HTTP \u2014 Stateless \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b"),". \u041e\u043d \u043d\u0435 \u0445\u0440\u0430\u043d\u0438\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u043c\u0435\u0436\u0434\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043c\u0438, \u0432\u0441\u0451 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0446\u0435\u043b\u0438\u043a\u043e\u043c \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u043a\u0430\u0436\u0434\u043e\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u0435. \u041f\u0440\u043e stateless management \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u0432 RFC.\n\u0411\u044b\u043b\u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u0430, \u043a\u043e\u0433\u0434\u0430 JavaScript \u043d\u0435 \u0442\u0430\u043a \u043f\u0440\u043e\u0447\u043d\u043e \u043e\u0431\u043e\u0441\u043d\u043e\u0432\u0430\u043b\u0441\u044f \u0432 \u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u0445. \u0422\u043e\u0433\u0434\u0430 \u043d\u0435 \u0431\u044b\u043b\u043e \u043d\u0438\u043a\u0430\u043a\u0438\u0445 \u043e\u0434\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043d\u044b\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0438 \u0441\u0430\u0439\u0442\u043e\u0432, \u043d\u0435 \u0431\u044b\u043b\u043e \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435, \u0430 \u043a\u0430\u0436\u0434\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430 \u0438\u043b\u0438 \u0441\u0441\u044b\u043b\u043a\u0430 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u043b\u0430 \u043d\u043e\u0432\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443, \u043c\u0435\u043d\u044f\u043b\u0441\u044f URL \u0438 \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0430 \u043a\u0430\u0436\u0434\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043b \u043d\u043e\u0432\u0443\u044e HTML-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0432 \u043e\u0442\u0432\u0435\u0442. \u0422\u0430\u043a, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0434\u043e \u0441\u0438\u0445 \u043f\u043e\u0440 \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 CMS, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a WordPress \u0438\u043b\u0438 Joomla, \u0445\u043e\u0442\u044f \u0432 \u043d\u0438\u0445 \u0438 \u043c\u043e\u0436\u043d\u043e \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u043f\u043b\u0430\u0433\u0438\u043d\u044b \u043d\u0430 JS.\n\u041d\u043e \u043a\u0430\u043a \u0436\u0435 \u0442\u043e\u0433\u0434\u0430 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043c\u0435\u0436\u0434\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043c\u0438? \u0415\u0441\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043b\u0441\u044f \u2014 \u044d\u0442\u0443 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043d\u0430\u0434\u043e \u0433\u0434\u0435-\u0442\u043e \u0434\u0435\u0440\u0436\u0430\u0442\u044c, \u0438 \u043a\u0430\u043a \u044d\u0442\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0431\u0435\u0437 JS, \u0431\u0435\u0437 \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0433\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f? \u0412\u044b\u0445\u043e\u0434 \u0435\u0441\u0442\u044c \u2014 \u043a\u0443\u043a\u0438."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041a\u0443\u043a\u0438 (cookies)")," \u2014 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442 \u0434\u0430\u043d\u043d\u044b\u0445, \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c \u0438 \u0445\u0440\u0430\u043d\u0438\u043c\u044b\u0439 \u043d\u0430 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f. \u0412\u0435\u0431-\u043a\u043b\u0438\u0435\u043d\u0442 (\u043e\u0431\u044b\u0447\u043d\u043e \u0432\u0435\u0431-\u0431\u0440\u0430\u0443\u0437\u0435\u0440) \u0432\u0441\u044f\u043a\u0438\u0439 \u0440\u0430\u0437 \u043f\u0440\u0438 \u043f\u043e\u043f\u044b\u0442\u043a\u0435 \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u0441\u0430\u0439\u0442\u0430 \u043f\u0435\u0440\u0435\u0441\u044b\u043b\u0430\u0435\u0442 \u044d\u0442\u043e\u0442 \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0435\u0440\u0443 \u0432 \u0432\u0438\u0434\u0435 HTTP-\u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041a\u0443\u043a\u0438")," \u2014 \u044d\u0442\u043e \u043f\u0440\u043e\u0441\u0442\u043e \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438, \u043d\u043e \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u044b \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0438\u043b\u0438\u0441\u044c, \u043a\u0430\u043a \u0441 \u043d\u0438\u043c\u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c, \u0438 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u044d\u0442\u043e \u0434\u0435\u043b\u0430\u044e\u0442. \u0415\u0441\u043b\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0435\u0442 \u0432 \u043e\u0442\u0432\u0435\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438 cookie \u2014 \u043e\u043d \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442 \u0438\u0445 \u043a \u0441\u0435\u0431\u0435 \u0432 \u043f\u0430\u043c\u044f\u0442\u044c. \u0418, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e, \u0435\u0441\u043b\u0438 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u043a \u0434\u043e\u043c\u0435\u043d\u0443 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0432\u0438\u0434\u0438\u0442, \u0447\u0442\u043e \u0443 \u043d\u0435\u0433\u043e \u0435\u0441\u0442\u044c \u043a\u0443\u043a\u0438 \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0434\u043e\u043c\u0435\u043d\u0430, \u2014 \u043e\u043d \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u0438\u0442 \u0438\u0445 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441."),(0,a.kt)("p",null,"\u041d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043a\u0443\u043a\u0438: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u043a\u0443\u043a\u0438 \u0441\u0442\u0430\u0432\u044f\u0442\u0441\u044f \u043d\u0430 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0439 \u0434\u043e\u043c\u0435\u043d,"),(0,a.kt)("li",{parentName:"ul"},"\u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0434\u043e\u043b\u0436\u0435\u043d \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043a\u0430\u043a \u043c\u0438\u043d\u0438\u043c\u0443\u043c 4096 \u0431\u0430\u0439\u0442 cookies,"),(0,a.kt)("li",{parentName:"ul"},"\u0438\u043c\u0435\u043d\u0430 \u043d\u0435\u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b \u043a \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0443.")),(0,a.kt)("p",null,"\u0421\u0435\u0440\u0432\u0435\u0440 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u043a\u043b\u0438\u0435\u043d\u0442\u0443 \u043a\u0443\u043a\u0438 \u0432 \u043e\u0442\u0432\u0435\u0442\u0435 \u043d\u0430 \u0437\u0430\u043f\u0440\u043e\u0441 \u0447\u0435\u0440\u0435\u0437 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a Set-Cookie: Set-Cookie: name=value. \u0414\u0430\u043b\u0435\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0434\u043e\u043b\u0436\u0435\u043d \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0441\u0435\u0440\u0432\u0435\u0440\u0443 \u043a\u0443\u043a\u0443 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a Cookie: Cookie: name=value.\n\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043f\u0440\u043e \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043c\u043e\u0436\u043d\u043e ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie"},"\u043f\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u043d\u0430 MDN"),"."),(0,a.kt)("h3",{id:"\u0433\u0434\u0435-\u043f\u0440\u0438\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f-\u043a\u0443\u043a\u0438"},"\u0413\u0434\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u043a\u0443\u043a\u0438:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439. \u041f\u0440\u043e \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438, \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0438 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u0437\u0434\u0435\u0441\u044c,"),(0,a.kt)("li",{parentName:"ul"},"\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439,"),(0,a.kt)("li",{parentName:"ul"},"\u0441\u0435\u0441\u0441\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f,"),(0,a.kt)("li",{parentName:"ul"},"\u0441\u0431\u043e\u0440 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u043e\u0439 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0438,"),(0,a.kt)("li",{parentName:"ul"},"\u0438 \u043c\u043d\u043e\u0433\u043e\u0435 \u0434\u0440\u0443\u0433\u043e\u0435.")),(0,a.kt)("h3",{id:"\u0441\u0438\u0433\u043d\u0430\u0442\u0443\u0440\u0430-set-cookie"},"\u0421\u0438\u0433\u043d\u0430\u0442\u0443\u0440\u0430 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Set-Cookie"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Set-Cookie: value                 \n                    [; Expires=date]\n                    [; Max-Age=age]\n                    [; Domain=domain]\n                    [; Path=path]\n                    [; Secure]\n                    [; HttpOnly] \n")),(0,a.kt)("p",null,"\u0412\u0430\u0436\u043d\u044b\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044b \u2014 ",(0,a.kt)("inlineCode",{parentName:"p"},"secure")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"httponly"),"."),(0,a.kt)("p",null,"\u0410\u0442\u0440\u0438\u0431\u0443\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"httponly")," \u0434\u0435\u043b\u0430\u0435\u0442 \u043a\u0443\u043a\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u043c\u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e HTTP-\u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043c. \u0414\u043e\u0441\u0442\u0443\u043f \u0447\u0435\u0440\u0435\u0437 JavaScript \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u043a \u044d\u0442\u0438\u043c \u043a\u0443\u043a\u0430\u043c \u0437\u0430\u043f\u0440\u0435\u0449\u0451\u043d \u2014 \u044d\u0442\u043e \u043e\u0447\u0435\u043d\u044c \u0432\u0430\u0436\u043d\u043e."),(0,a.kt)("p",null,"\u0412 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u0438\u0437 JavaScript \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u0443\u043a\u0438 \u0447\u0435\u0440\u0435\u0437 ",(0,a.kt)("inlineCode",{parentName:"p"},"document.cookie"),". \u042d\u0442\u043e \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u0442 \u0434\u0432\u0435\u0440\u044c \u0437\u043b\u043e\u0443\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u0438\u043a\u0430\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0445\u043e\u0442\u044f\u0442\u0441\u044f \u0437\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438. \u041a\u0443\u043a\u0430 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \xab\u043f\u0430\u0441\u043f\u043e\u0440\u0442\u043e\u043c\xbb \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438, \u043f\u043e\u0442\u043e\u043c\u0443 \u0436\u0435\u043b\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043d\u0435 \u0434\u043e\u043f\u0443\u0441\u043a\u0430\u0442\u044c \u043a\u0440\u0430\u0436\u0443 \u0442\u0430\u043a\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u043b\u0438\u0431\u043e \u0434\u0435\u043b\u0430\u0442\u044c \u0442\u0430\u043a, \u0447\u0442\u043e\u0431\u044b \u043a\u0440\u0430\u0436\u0430 \u0431\u044b\u043b\u0430 \u0431\u0435\u0441\u043f\u043e\u043b\u0435\u0437\u043d\u043e\u0439. \u041f\u0440\u043e \u043c\u0435\u0442\u043e\u0434\u044b \u0437\u0430\u0449\u0438\u0442\u044b \u0431\u0443\u0434\u0435\u043c \u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e. "),(0,a.kt)("p",null,"\u0410\u0442\u0440\u0438\u0431\u0443\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"httponly")," \u0443\u0441\u043b\u043e\u0436\u043d\u044f\u0435\u0442 \u0437\u0430\u0434\u0430\u0447\u0443 \u0437\u043b\u043e\u0443\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u0438\u043a\u0430\u043c. \u0414\u0430 \u0438 \u0432 \u043d\u0430\u0448\u0435 \u0432\u0440\u0435\u043c\u044f \u043a\u0443\u043a\u0438 \u043e\u0447\u0435\u043d\u044c \u0440\u0435\u0434\u043a\u043e \u043d\u0443\u0436\u043d\u044b \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430\u043c \u2014 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u0434\u0440\u0443\u0433\u0438\u0445 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432. \u041a\u043b\u0438\u0435\u043d\u0442 \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441 \u043a\u0443\u043a\u0430\u043c\u0438."),(0,a.kt)("p",null,"\u0410\u0442\u0440\u0438\u0431\u0443\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"secure")," \u0433\u043e\u0432\u043e\u0440\u0438\u0442 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0443, \u0447\u0442\u043e \u043a\u0443\u043a\u0443 \u043c\u043e\u0436\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0437\u0430\u0449\u0438\u0449\u0451\u043d\u043d\u043e\u043c HTTPS-\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0438. \u0415\u0441\u043b\u0438 \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442 \u043e\u0442 HTTP, \u0442\u043e \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043f\u0440\u043e\u0441\u0442\u043e \u043d\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442 \u0434\u0430\u043d\u043d\u0443\u044e \u043a\u0443\u043a\u0443. \u041f\u0440\u043e HTTPS \u0438 SSL \u0440\u0430\u0441\u0441\u043a\u0430\u0436\u0435\u043c \u043f\u043e\u0437\u0434\u043d\u0435\u0435."))}u.isMDXComponent=!0}}]);