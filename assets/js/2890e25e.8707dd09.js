"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[5945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6955:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={title:"\u041f\u043e\u0437\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",sidebar_position:5},l=void 0,a={unversionedId:"frontend/css/position",id:"frontend/css/position",title:"\u041f\u043e\u0437\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",description:"\u0412\u0430\u0440\u0438\u0430\u0446\u0438\u0438 \u043f\u043e\u0437\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",source:"@site/docs/frontend/css/5-position.md",sourceDirName:"frontend/css",slug:"/frontend/css/position",permalink:"/knowledge-bank/docs/frontend/css/position",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/css/5-position.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u041f\u043e\u0437\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u0424\u043e\u043d / \u0413\u0440\u0430\u043d\u0438\u0446\u044b / \u0422\u0435\u043d\u0438",permalink:"/knowledge-bank/docs/frontend/css/background"},next:{title:"Flexbox",permalink:"/knowledge-bank/docs/frontend/css/flexbox"}},p={},s=[{value:"\u0412\u0430\u0440\u0438\u0430\u0446\u0438\u0438 \u043f\u043e\u0437\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",id:"\u0432\u0430\u0440\u0438\u0430\u0446\u0438\u0438-\u043f\u043e\u0437\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",level:2},{value:"\u0426\u0435\u043d\u0442\u0440\u043e\u0432\u043a\u0430 \u043f\u043e \u0432\u044b\u0441\u043e\u0442\u0435 \u0438 \u0448\u0438\u0440\u0438\u043d\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e position",id:"\u0446\u0435\u043d\u0442\u0440\u043e\u0432\u043a\u0430-\u043f\u043e-\u0432\u044b\u0441\u043e\u0442\u0435-\u0438-\u0448\u0438\u0440\u0438\u043d\u0435-\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-position",level:2},{value:"\u041f\u0441\u0435\u0432\u0434\u043e\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b",id:"\u043f\u0441\u0435\u0432\u0434\u043e\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b",level:2},{value:"\u041f\u043e\u0437\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0441\u0435\u0432\u0434\u043e\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432",id:"\u043f\u043e\u0437\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u043f\u0441\u0435\u0432\u0434\u043e\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432",level:3},{value:"\u0421\u043b\u043e\u0439-\u043c\u0430\u0441\u043a\u0430",id:"\u0441\u043b\u043e\u0439-\u043c\u0430\u0441\u043a\u0430",level:3},{value:"z-index",id:"z-index",level:2},{value:"inset",id:"inset",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u0432\u0430\u0440\u0438\u0430\u0446\u0438\u0438-\u043f\u043e\u0437\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"},"\u0412\u0430\u0440\u0438\u0430\u0446\u0438\u0438 \u043f\u043e\u0437\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"div {\n  /* \u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u0437\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435\u043c */\n  position: static* | relative | absolute | fixed | sticky;\n\n  /* \u043e\u0441\u044c z - \u0427\u0435\u043c \u0431\u043e\u043b\u044c\u0448\u0435 \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u0442\u0435\u043c \u0432\u044b\u0448\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043f\u043e \u0443\u0441\u043b\u043e\u0432\u043d\u043e\u0439 \u043e\u0441\u0438 z */\n  z-index: 1;\n\n  /* \u041a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b \u043f\u043e\u0437\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f */\n  top: 5px | 5% | auto;\n  left: 5px | 5% | auto;\n  right: 10px | 10% | auto;\n  bottom: 15px | 15% | auto;\n\n  /* \u0431\u0443\u0434\u0435\u0442 \u0432\u043b\u0438\u044f\u0442\u044c \u043d\u0430 \u043f\u043e\u0437\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 */\n  margin-left: 5px; \n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"static")," - \u0441\u0442\u0430\u0442\u0438\u0447\u043d\u043e\u0435 \u043f\u043e\u0437\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435. \u042d\u043b\u0435\u043c\u0435\u043d\u0442 \u0432\u0441\u0435\u0433\u0434\u0430 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0432 \u043f\u043e\u0442\u043e\u043a\u0435. \u041d\u0430 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 top, left, right, bottom \u043d\u0435 \u0440\u0435\u0430\u0433\u0438\u0440\u0443\u0435\u0442;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"relative")," - \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u0437\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435. \u041f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0435\u0433\u043e \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0433\u043e \u043c\u0435\u0441\u0442\u0430. \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432 left, top, right \u0438 bottom \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u0442 \u043f\u043e\u0437\u0438\u0446\u0438\u044e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043e\u0442 \u043f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u0434\u0440\u0443\u0433\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0434\u0443\u043c\u0430\u044e\u0442, \u0447\u0442\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0441\u0442\u043e\u0438\u0442 \u0432\u0441\u0451 \u0435\u0449\u0451 \u043d\u0430 \u0442\u043e\u043c \u0436\u0435 \u043c\u0435\u0441\u0442\u0435 \u043a\u0430\u043a \u0432 \u043f\u043e\u0442\u043e\u043a\u0435 \u043f\u0440\u0438 position: static. \u041e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0431\u043b\u043e\u043a\u0438 \u0431\u0435\u0437 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u0432\u0435\u0434\u0443\u0442 \u0441\u0435\u0431\u044f \u043a\u0430\u043a \u043e\u0431\u044b\u0447\u043d\u044b\u0435. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"absolute")," - \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e\u0435 \u043f\u043e\u0437\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435. \u0423\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u0447\u0442\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e \u043f\u043e\u0437\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d, \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u0434\u0440\u0443\u0433\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u044e\u0442\u0441\u044f \u043d\u0430 \u0432\u0435\u0431-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0441\u043b\u043e\u0432\u043d\u043e \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e \u043f\u043e\u0437\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043d\u0435\u0442. \u0422\u0430\u043a, \u0435\u0441\u043b\u0438 \u0443 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 position \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u043a\u0430\u043a static \u0438\u043b\u0438 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f \u043d\u0435\u0442, \u0442\u043e \u043e\u0442\u0441\u0447\u0451\u0442 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442 \u0432\u0435\u0434\u0451\u0442\u0441\u044f \u043e\u0442 \u043a\u0440\u0430\u044f \u043e\u043a\u043d\u0430 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430. \u0415\u0441\u043b\u0438 \u0443 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 position \u0437\u0430\u0434\u0430\u043d\u043e \u043a\u0430\u043a relative, \u0442\u043e \u043e\u0442\u0441\u0447\u0451\u0442 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442 \u0432\u0435\u0434\u0451\u0442\u0441\u044f \u043e\u0442 \u043a\u0440\u0430\u044f \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430. Ec\u043b\u0438 \u0443 \u0430\u0431\u0441. \u0441\u043f\u043e\u0437\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u044f\u0432\u043d\u043e \u043d\u0435 \u0437\u0430\u0434\u0430\u043d\u0430 \u0448\u0438\u0440\u0438\u043d\u0430, \u0442\u043e \u043e\u043d \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0441\u0441\u0442\u044f\u0433\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u043e \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0430\u043c."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"fixed")," - \u0424\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u043f\u043e\u0437\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435. \u041f\u043e \u0441\u0432\u043e\u0435\u043c\u0443 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0431\u043b\u0438\u0437\u043a\u043e \u043a absolute, \u043d\u043e \u0432 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 \u043d\u0435\u0433\u043e \u043f\u0440\u0438\u0432\u044f\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043a \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u043c\u0438 left, top, right \u0438 bottom \u0442\u043e\u0447\u043a\u0435 \u043d\u0430 \u044d\u043a\u0440\u0430\u043d\u0435 \u0438 \u043d\u0435 \u043c\u0435\u043d\u044f\u0435\u0442 \u0441\u0432\u043e\u0435\u0433\u043e \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043f\u0440\u0438 \u043f\u0440\u043e\u043a\u0440\u0443\u0442\u043a\u0435 \u0432\u0435\u0431-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"sticky")," - \u041f\u043e\u0445\u043e\u0436 \u043d\u0430 fixed, \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0441\u043a\u0440\u043e\u043b\u043b\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0431\u0443\u0434\u0435\u0442 fixed \u0442\u043e\u043b\u044c\u043a\u043e \u0432\u043d\u0443\u0442\u0440\u0438 \u0441\u0432\u043e\u0435\u0433\u043e \u0440\u043e\u0434. \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430. \u0414\u0430\u043b\u044c\u0448\u0435 \u043e\u043d \u043f\u0440\u043e\u0441\u043a\u0440\u043e\u043b\u043b\u0438\u0442\u0441\u044f \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0434\u0440\u0443\u0433\u0438\u043c \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u043e\u043c.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u0446\u0435\u043d\u0442\u0440\u043e\u0432\u043a\u0430-\u043f\u043e-\u0432\u044b\u0441\u043e\u0442\u0435-\u0438-\u0448\u0438\u0440\u0438\u043d\u0435-\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-position"},"\u0426\u0435\u043d\u0442\u0440\u043e\u0432\u043a\u0430 \u043f\u043e \u0432\u044b\u0441\u043e\u0442\u0435 \u0438 \u0448\u0438\u0440\u0438\u043d\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e position"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0412 \u0440\u043e\u0434. \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u043f\u043e \u0432\u044b\u0441\u043e\u0442\u0435 \u0438 \u0448\u0438\u0440\u0438\u043d\u0435;"),(0,o.kt)("li",{parentName:"ul"},"\u0423 \u0434\u043e\u0447. \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u0433\u043e \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u0430 \u0448\u0438\u0440\u0438\u043d\u0430 \u0438 \u0432\u044b\u0441\u043e\u0442\u0430; ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"div {\n  height: 60px;\n  width: 60px;\n\n  /* \u0430\u0431\u0441. \u0441 50% */\n  position: absolute;\n  top: 50%;\n  left: 50%;\n\n  /* \u043f\u043e\u043b\u043e\u0432\u0438\u043d\u0430 \u043e\u0442 \u0448\u0438\u0440\u0438\u043d\u044b */\n  margin-top: -30px;\n  margin-left: -30px;\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u043f\u0441\u0435\u0432\u0434\u043e\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b"},"\u041f\u0441\u0435\u0432\u0434\u043e\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"::before")," \u0438 ",(0,o.kt)("strong",{parentName:"p"},"::after")," \u0441\u043e\u0437\u0434\u0430\u0451\u0442 \u043f\u0441\u0435\u0432\u0434\u043e\u044d\u043b\u0435\u043c\u0435\u043d\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0435\u0440\u0432\u044b\u043c \u043f\u043e\u0442\u043e\u043c\u043a\u043e\u043c \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430.\n\u0427\u0430\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u0441\u043c\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0433\u043e \u0432 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 content. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044f \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0438\u043d\u043b\u0430\u0439\u043d\u043e\u0432\u044b\u043c."),(0,o.kt)("p",null,"\u0418\u0445 \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u043b\u0438\u0448\u043d\u0438\u0439 html-\u043a\u043e\u0434 \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432 \u0434\u0438\u0437\u0430\u0439\u043d\u0430 \u0438 \u0441\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u0438."),(0,o.kt)("h3",{id:"\u043f\u043e\u0437\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u043f\u0441\u0435\u0432\u0434\u043e\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432"},"\u041f\u043e\u0437\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0441\u0435\u0432\u0434\u043e\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},'div {\n  position: relative;\n  z-index: 1;\n  width: 300px;\n  height: 300px;\n\n  &::before,\n  &::after {\n    content: "";\n    display: block;\n    position: absolute;\n    z-index: 2;\n    width: 50px;\n    height: 50px;\n    background-color: maroon;\n  }\n\n  &::before {\n    top: 10px;\n    left: 10px;\n  }\n\n  &::after {\n    bottom: 10px;\n    right: 10px;\n  }\n}\n')),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"\u0441\u043b\u043e\u0439-\u043c\u0430\u0441\u043a\u0430"},"\u0421\u043b\u043e\u0439-\u043c\u0430\u0441\u043a\u0430"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},'div {\n  position: relative;\n  z-index: 1;\n  width: 300px;\n  height: 300px;\n\n  // \u0441\u043b\u043e\u0439 \u0431\u0443\u0434\u0435\u0442 \u043b\u0435\u0436\u0430\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043f\u043e\u0432\u0435\u0440\u0445 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f\n  &::before {\n    content: "";\n    display: block;\n    position: absolute;\n    z-index: 2;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n}\n')),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"z-index"},"z-index"),(0,o.kt)("p",null,"\u0417\u0430 \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u043d\u0430\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e ",(0,o.kt)("inlineCode",{parentName:"p"},"z-index"),". \u0415\u0441\u043b\u0438 \u0434\u0432\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043d\u0430\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0434\u0440\u0443\u0433 \u043d\u0430 \u0434\u0440\u0443\u0433\u0430, \u0442\u043e \u0441\u0432\u0435\u0440\u0445\u0443 \u043e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u0442\u0441\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0441 \u0431\u043e\u043b\u0435\u0435 \u0432\u044b\u0441\u043e\u043a\u0438\u043c \u0438\u043d\u0434\u0435\u043a\u0441\u043e\u043c.\n\u0427\u0442\u043e\u0431\u044b \u043d\u0430\u0432\u0435\u0441\u0442\u0438 \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u0432 \u043d\u0430\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"0000\u20131999: \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043a\u043e\u043d\u0442\u0435\u043d\u0442,"),(0,o.kt)("li",{parentName:"ol"},"2000\u20132999: \u0432\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0438,"),(0,o.kt)("li",{parentName:"ol"},"3000\u20133999: \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f,"),(0,o.kt)("li",{parentName:"ol"},"4000\u20134999: \u0448\u0430\u043f\u043a\u0430 \u0438 \u043f\u043e\u0434\u0432\u0430\u043b,"),(0,o.kt)("li",{parentName:"ol"},"5000\u20137999: \u0434\u0440\u0443\u0433\u043e\u0435,"),(0,o.kt)("li",{parentName:"ol"},"8000\u20138999: \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u044b\u0435 \u043e\u043a\u043d\u0430,"),(0,o.kt)("li",{parentName:"ol"},"9000\u20139999: \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"inset"},"inset"),(0,o.kt)("p",null,"\u0428\u043e\u0440\u0442\u043a\u0430\u0442 \u0434\u043b\u044f \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"div {\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n}\n\ndiv {\n  inset: 0;\n}\n")))}u.isMDXComponent=!0}}]);