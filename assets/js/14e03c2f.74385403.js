"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[425],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),k=r,m=c["".concat(d,".").concat(k)]||c[k]||p[k]||l;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7428:(e,t,n)=>{n.r(t),n.d(t,{CODE:()=>u,assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={title:"Date",sidebar_position:15},o=void 0,i={unversionedId:"frontend/js-basics/date",id:"frontend/js-basics/date",title:"Date",description:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u043e\u043b\u043d\u0443\u044e \u0442\u0435\u043a\u0443\u0449\u0443\u044e \u0434\u0430\u0442\u0443:",source:"@site/docs/frontend/js-basics/date.md",sourceDirName:"frontend/js-basics",slug:"/frontend/js-basics/date",permalink:"/knowledge-bank/docs/frontend/js-basics/date",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/js-basics/date.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"Date",sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Storage",permalink:"/knowledge-bank/docs/frontend/js-basics/storage"},next:{title:"\u0417\u0430\u0434\u0430\u0447\u0438 \u043f\u043e JS",permalink:"/knowledge-bank/docs/frontend/js-basics/tasks"}},d={},s=[{value:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u043e\u043b\u043d\u0443\u044e \u0442\u0435\u043a\u0443\u0449\u0443\u044e \u0434\u0430\u0442\u0443:",id:"\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c-\u043f\u043e\u043b\u043d\u0443\u044e-\u0442\u0435\u043a\u0443\u0449\u0443\u044e-\u0434\u0430\u0442\u0443",level:2},{value:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0433\u043e\u0434:",id:"\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c-\u0442\u0435\u043a\u0443\u0449\u0438\u0439-\u0433\u043e\u0434",level:2},{value:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u043c\u0435\u0441\u044f\u0446 (\u043d\u0443\u043c\u0435\u0440\u0430\u0446\u0438\u044f \u0441 \u043d\u0443\u043b\u044f):",id:"\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c-\u0442\u0435\u043a\u0443\u0449\u0438\u0439-\u043c\u0435\u0441\u044f\u0446-\u043d\u0443\u043c\u0435\u0440\u0430\u0446\u0438\u044f-\u0441-\u043d\u0443\u043b\u044f",level:2},{value:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0434\u0435\u043d\u044c:",id:"\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c-\u0442\u0435\u043a\u0443\u0449\u0438\u0439-\u0434\u0435\u043d\u044c",level:2},{value:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0435\u043d\u044c \u043d\u0435\u0434\u0435\u043b\u0438 (0 - \u0432\u0441, 1 - \u043f\u043d, ...):",id:"\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c-\u0434\u0435\u043d\u044c-\u043d\u0435\u0434\u0435\u043b\u0438-0---\u0432\u0441-1---\u043f\u043d-",level:2},{value:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0447\u0430\u0441\u044b \u0432 24-\u0447\u0430\u0441\u043e\u0432\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435:",id:"\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c-\u0447\u0430\u0441\u044b-\u0432-24-\u0447\u0430\u0441\u043e\u0432\u043e\u043c-\u0444\u043e\u0440\u043c\u0430\u0442\u0435",level:2},{value:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043c\u0438\u043d\u0443\u0442\u044b:",id:"\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c-\u043c\u0438\u043d\u0443\u0442\u044b",level:2},{value:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u0435\u043a\u0443\u043d\u0434\u044b:",id:"\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c-\u0441\u0435\u043a\u0443\u043d\u0434\u044b",level:2},{value:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043c\u0438\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434\u044b:",id:"\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c-\u043c\u0438\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434\u044b",level:2},{value:"\u0414\u0430\u0442\u0430 \u043e\u0442\u0447\u0435\u0442\u0430 \u0432 JS:",id:"\u0434\u0430\u0442\u0430-\u043e\u0442\u0447\u0435\u0442\u0430-\u0432-js",level:2},{value:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u0439\u0434\u0435\u043d\u043d\u044b\u0445 \u043c\u0441 \u043e\u0442 \u0434\u0430\u0442\u044b \u043e\u0442\u0447\u0435\u0442\u0430:",id:"\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e-\u043f\u0440\u043e\u0439\u0434\u0435\u043d\u043d\u044b\u0445-\u043c\u0441-\u043e\u0442-\u0434\u0430\u0442\u044b-\u043e\u0442\u0447\u0435\u0442\u0430",level:2},{value:"\u041f\u043e\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u0443\u044e \u0434\u0430\u0442\u0443 \u0431\u0435\u0437 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 (\u0432\u0440\u0435\u043c\u044f \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u0438).",id:"\u043f\u043e\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044c-\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u0443\u044e-\u0434\u0430\u0442\u0443-\u0431\u0435\u0437-\u0432\u0440\u0435\u043c\u0435\u043d\u0438-\u0432\u0440\u0435\u043c\u044f-\u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f-\u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u0438",level:2},{value:"\u0420\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u0438: \u0442\u043e\u0447\u043a\u0438, \u0442\u0438\u0440\u0435, \u043f\u0440\u043e\u0431\u0435\u043b\u044b \u0438 \u0441\u043b\u044d\u0448\u0438.",id:"\u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u0438-\u0442\u043e\u0447\u043a\u0438-\u0442\u0438\u0440\u0435-\u043f\u0440\u043e\u0431\u0435\u043b\u044b-\u0438-\u0441\u043b\u044d\u0448\u0438",level:2},{value:"\u0418\u0437\u0432\u043b\u0435\u0447\u044c \u0434\u0430\u0442\u0443 \u0438\u0437 \u043f\u043e\u043b\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u0434\u0430\u0442\u044b \u0441\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0435\u043c:",id:"\u0438\u0437\u0432\u043b\u0435\u0447\u044c-\u0434\u0430\u0442\u0443-\u0438\u0437-\u043f\u043e\u043b\u043d\u043e\u0439-\u0441\u0442\u0440\u043e\u043a\u0438-\u0434\u0430\u0442\u044b-\u0441\u043e-\u0432\u0440\u0435\u043c\u0435\u043d\u0435\u043c",level:2},{value:"date-fns",id:"date-fns",level:2},{value:"\u0424\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u0430\u0442\u0443 \u0432 \u0441\u0442\u0440\u043e\u043a\u0443",id:"\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c-\u0434\u0430\u0442\u0443-\u0432-\u0441\u0442\u0440\u043e\u043a\u0443",level:3},{value:"\u041f\u0440\u043e\u0448\u0435\u0434\u0448\u0430\u044f \u0434\u0430\u0442\u0430",id:"\u043f\u0440\u043e\u0448\u0435\u0434\u0448\u0430\u044f-\u0434\u0430\u0442\u0430",level:3},{value:"\u0423\u0442\u0438\u043b\u0438\u0442\u0430 \u0434\u043b\u044f \u0434\u0430\u0442\u044b",id:"\u0443\u0442\u0438\u043b\u0438\u0442\u0430-\u0434\u043b\u044f-\u0434\u0430\u0442\u044b",level:3}],u=e=>{let{children:t}=e;return(0,r.kt)("code",{style:{color:"cyan"}},t)},p={toc:s,CODE:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c-\u043f\u043e\u043b\u043d\u0443\u044e-\u0442\u0435\u043a\u0443\u0449\u0443\u044e-\u0434\u0430\u0442\u0443"},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u043e\u043b\u043d\u0443\u044e \u0442\u0435\u043a\u0443\u0449\u0443\u044e \u0434\u0430\u0442\u0443:"),(0,r.kt)(u,{mdxType:"CODE"},"new Date()")," \u2013 Tue Apr 04 2023 13:00:33 GMT+0600 (\u041e\u043c\u0441\u043a, \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f)",(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c-\u0442\u0435\u043a\u0443\u0449\u0438\u0439-\u0433\u043e\u0434"},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0433\u043e\u0434:"),(0,r.kt)(u,{mdxType:"CODE"},"new Date().getFullYear()")," \u2013 2023",(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c-\u0442\u0435\u043a\u0443\u0449\u0438\u0439-\u043c\u0435\u0441\u044f\u0446-\u043d\u0443\u043c\u0435\u0440\u0430\u0446\u0438\u044f-\u0441-\u043d\u0443\u043b\u044f"},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u043c\u0435\u0441\u044f\u0446 (\u043d\u0443\u043c\u0435\u0440\u0430\u0446\u0438\u044f \u0441 \u043d\u0443\u043b\u044f):"),(0,r.kt)(u,{mdxType:"CODE"},"new Date().getMonth()")," \u2013 4",(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c-\u0442\u0435\u043a\u0443\u0449\u0438\u0439-\u0434\u0435\u043d\u044c"},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0434\u0435\u043d\u044c:"),(0,r.kt)(u,{mdxType:"CODE"},"new Date().getMonth()")," \u2013 4",(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c-\u0434\u0435\u043d\u044c-\u043d\u0435\u0434\u0435\u043b\u0438-0---\u0432\u0441-1---\u043f\u043d-"},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0435\u043d\u044c \u043d\u0435\u0434\u0435\u043b\u0438 (0 - \u0432\u0441, 1 - \u043f\u043d, ...):"),(0,r.kt)(u,{mdxType:"CODE"},"new Date().getDay()")," \u2013 2",(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c-\u0447\u0430\u0441\u044b-\u0432-24-\u0447\u0430\u0441\u043e\u0432\u043e\u043c-\u0444\u043e\u0440\u043c\u0430\u0442\u0435"},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0447\u0430\u0441\u044b \u0432 24-\u0447\u0430\u0441\u043e\u0432\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435:"),(0,r.kt)(u,{mdxType:"CODE"},"new Date().getHours()")," \u2013 13",(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c-\u043c\u0438\u043d\u0443\u0442\u044b"},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043c\u0438\u043d\u0443\u0442\u044b:"),(0,r.kt)(u,{mdxType:"CODE"},"new Date().getMinutes()")," \u2013 0",(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c-\u0441\u0435\u043a\u0443\u043d\u0434\u044b"},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u0435\u043a\u0443\u043d\u0434\u044b:"),(0,r.kt)(u,{mdxType:"CODE"},"new Date().getSeconds()")," \u2013 33",(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c-\u043c\u0438\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434\u044b"},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043c\u0438\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434\u044b:"),(0,r.kt)(u,{mdxType:"CODE"},"new Date().getSeconds()")," \u2013 108",(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u0434\u0430\u0442\u0430-\u043e\u0442\u0447\u0435\u0442\u0430-\u0432-js"},"\u0414\u0430\u0442\u0430 \u043e\u0442\u0447\u0435\u0442\u0430 \u0432 JS:"),(0,r.kt)(u,{mdxType:"CODE"},"new Date(0)")," \u2013 Thu Jan 01 1970 06:00:00 GMT+0600 (\u041e\u043c\u0441\u043a, \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f)",(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e-\u043f\u0440\u043e\u0439\u0434\u0435\u043d\u043d\u044b\u0445-\u043c\u0441-\u043e\u0442-\u0434\u0430\u0442\u044b-\u043e\u0442\u0447\u0435\u0442\u0430"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u0439\u0434\u0435\u043d\u043d\u044b\u0445 \u043c\u0441 \u043e\u0442 \u0434\u0430\u0442\u044b \u043e\u0442\u0447\u0435\u0442\u0430:"),(0,r.kt)(u,{mdxType:"CODE"},"new Date().getTime()")," \u2013 1680591633108",(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u043f\u043e\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044c-\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u0443\u044e-\u0434\u0430\u0442\u0443-\u0431\u0435\u0437-\u0432\u0440\u0435\u043c\u0435\u043d\u0438-\u0432\u0440\u0435\u043c\u044f-\u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f-\u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u0438"},"\u041f\u043e\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u0443\u044e \u0434\u0430\u0442\u0443 \u0431\u0435\u0437 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 (\u0432\u0440\u0435\u043c\u044f \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u0438)."),(0,r.kt)("p",null,"\u0424\u043e\u0440\u043c\u0430\u0442\u044b: ",(0,r.kt)(u,{mdxType:"CODE"},"yyyy-MM-dd, MM-dd-yyyy")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u0438-\u0442\u043e\u0447\u043a\u0438-\u0442\u0438\u0440\u0435-\u043f\u0440\u043e\u0431\u0435\u043b\u044b-\u0438-\u0441\u043b\u044d\u0448\u0438"},"\u0420\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u0438: \u0442\u043e\u0447\u043a\u0438, \u0442\u0438\u0440\u0435, \u043f\u0440\u043e\u0431\u0435\u043b\u044b \u0438 \u0441\u043b\u044d\u0448\u0438."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(u,{mdxType:"CODE"},'new Date("2017-01-26")')," \u2013 Thu Jan 26 2017 06:00:00 GMT+0600 (\u041e\u043c\u0441\u043a, \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(u,{mdxType:"CODE"},'new Date("2017.01.26")')," \u2013 Thu Jan 26 2017 00:00:00 GMT+0600 (\u041e\u043c\u0441\u043a, \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(u,{mdxType:"CODE"},'new Date("2017/01/26")')," \u2013 Thu Jan 26 2017 00:00:00 GMT+0600 (\u041e\u043c\u0441\u043a, \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(u,{mdxType:"CODE"},'new Date("2017 01 26")')," \u2013 Thu Jan 26 2017 00:00:00 GMT+0600 (\u041e\u043c\u0441\u043a, \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(u,{mdxType:"CODE"},'new Date("01-26-2017")')," \u2013 Thu Jan 26 2017 00:00:00 GMT+0600 (\u041e\u043c\u0441\u043a, \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f)")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u0438\u0437\u0432\u043b\u0435\u0447\u044c-\u0434\u0430\u0442\u0443-\u0438\u0437-\u043f\u043e\u043b\u043d\u043e\u0439-\u0441\u0442\u0440\u043e\u043a\u0438-\u0434\u0430\u0442\u044b-\u0441\u043e-\u0432\u0440\u0435\u043c\u0435\u043d\u0435\u043c"},"\u0418\u0437\u0432\u043b\u0435\u0447\u044c \u0434\u0430\u0442\u0443 \u0438\u0437 \u043f\u043e\u043b\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u0434\u0430\u0442\u044b \u0441\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0435\u043c:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"const date = "),(0,r.kt)(u,{mdxType:"CODE"},'new Date("Fri Mar 17 2023 17:47:37 GMT+0600 (\u041e\u043c\u0441\u043a, \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f)")')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"date"),".",(0,r.kt)(u,{mdxType:"CODE"},'toISOString().split("T")',"[0]")," \u2013 2023-03-17"),(0,r.kt)("p",null,"\u0438\u043b\u0438"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"date"),".",(0,r.kt)(u,{mdxType:"CODE"},"toISOString()..slice(0, 10)")," \u2013 2023-03-17"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"date-fns"},"date-fns"),(0,r.kt)("h3",{id:"\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c-\u0434\u0430\u0442\u0443-\u0432-\u0441\u0442\u0440\u043e\u043a\u0443"},"\u0424\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u0430\u0442\u0443 \u0432 \u0441\u0442\u0440\u043e\u043a\u0443"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import format from 'date-fns/format';\n\nconst nowDate = format(new Date(), 'yyyy-MM-dd');\nconst nowDate = format(new Date(), 'hh:mm:ss');\n")),(0,r.kt)("h3",{id:"\u043f\u0440\u043e\u0448\u0435\u0434\u0448\u0430\u044f-\u0434\u0430\u0442\u0430"},"\u041f\u0440\u043e\u0448\u0435\u0434\u0448\u0430\u044f \u0434\u0430\u0442\u0430"),(0,r.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 boolean"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import isPast from 'date-fns/isPast';\n\nconst isPastDate1 = isPast(new Date().getFullYear() - 1); // true\nconst isPastDate2 = isPast(new Date()); // false\n")),(0,r.kt)("h3",{id:"\u0443\u0442\u0438\u043b\u0438\u0442\u0430-\u0434\u043b\u044f-\u0434\u0430\u0442\u044b"},"\u0423\u0442\u0438\u043b\u0438\u0442\u0430 \u0434\u043b\u044f \u0434\u0430\u0442\u044b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"/***\n * \u0424\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u0443\u0435\u0442 \u0434\u0430\u0442\u0443 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 HH:MM DD:MM:YYYY\n * @Date date\n */\nexport const formatDate = (date: Date, showSeconds = false) =>\n    [\n        [date.getHours(), -2],\n        [':', -1],\n        [date.getMinutes(), -2],\n        [showSeconds ? ':' : ' ', -1],\n        [date.getSeconds() + ' ', showSeconds ? -3 : -1],\n        [date.getDate(), -2],\n        ['.', -1],\n        [date.getMonth() + 1, -2],\n        ['.', -1],\n        [date.getFullYear(), -4]\n    ]\n        .reduce((msg, el) => msg + ('0' + el[0]).slice(+el[1]), '');\n")))}c.isMDXComponent=!0}}]);