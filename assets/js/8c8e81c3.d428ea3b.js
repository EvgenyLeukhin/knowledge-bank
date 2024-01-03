"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[9650],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(h,l(l({ref:n},c),{},{components:t})):r.createElement(h,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6750:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={title:"\u0417\u0430\u043f\u0440\u043e\u0441\u044b ++-",sidebar_position:5},l=void 0,i={unversionedId:"frontend/react/archive/api/requests",id:"frontend/react/archive/api/requests",title:"\u0417\u0430\u043f\u0440\u043e\u0441\u044b ++-",description:"- \u041c\u0435\u0442\u043e\u0434\u044b HTTP \u0437\u0430\u043f\u0440\u043e\u0441\u0430",source:"@site/docs/frontend/react/7-archive/api/requests.md",sourceDirName:"frontend/react/7-archive/api",slug:"/frontend/react/archive/api/requests",permalink:"/knowledge-bank/docs/frontend/react/archive/api/requests",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/react/7-archive/api/requests.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u0417\u0430\u043f\u0440\u043e\u0441\u044b ++-",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"api-service",permalink:"/knowledge-bank/docs/frontend/react/archive/api/api-service"},next:{title:"\u0417\u0430\u043f\u0440\u043e\u0441\u044b c TS",permalink:"/knowledge-bank/docs/frontend/react/archive/api/requests2"}},s={},p=[{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043c\u0438",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b-\u0440\u0430\u0431\u043e\u0442\u044b-\u0441-\u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043c\u0438",level:2},{value:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0434\u0430\u043d\u043d\u044b\u043c\u0438",id:"\u0431\u0430\u0437\u043e\u0432\u044b\u0439-\u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439-\u0440\u0430\u0431\u043e\u0442\u044b-\u0441-\u0434\u0430\u043d\u043d\u044b\u043c\u0438",level:3},{value:"fetch",id:"fetch",level:2},{value:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440",id:"\u0431\u0430\u0437\u043e\u0432\u044b\u0439-\u043f\u0440\u0438\u043c\u0435\u0440",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:3},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:3},{value:"axios",id:"axios",level:2},{value:"axios-get",id:"axios-get",level:3},{value:"axios-delete",id:"axios-delete",level:3},{value:"axios-post",id:"axios-post",level:3},{value:"axios-filter",id:"axios-filter",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0441 PH",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0441-ph",level:3},{value:"async-await",id:"async-await",level:2},{value:"try-catch",id:"try-catch",level:2},{value:"Promise",id:"promise",level:2},{value:"\u041c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b",id:"\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435-\u0437\u0430\u043f\u0440\u043e\u0441\u044b",level:2},{value:"Debounce",id:"debounce",level:2},{value:"Throttling",id:"throttling",level:2},{value:"Lazy loading",id:"lazy-loading",level:2}],c={toc:p};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/ru/docs/Web/HTTP/Methods"},"\u041c\u0435\u0442\u043e\u0434\u044b HTTP \u0437\u0430\u043f\u0440\u043e\u0441\u0430")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/ru/docs/Web/HTTP/Status"},"\u041a\u043e\u0434\u044b \u043e\u0442\u0432\u0435\u0442\u0430 HTTP")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie"},"Set-Cookie")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://it-uroki.ru/uroki/bezopasnost/identifikaciya-autentifikaciya-avtorizaciya.html"},"\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f, \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f, \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u2014 \u0432 \u0447\u0435\u043c \u0440\u0430\u0437\u043d\u0438\u0446\u0430?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learn.javascript.ru/websocket"},"WebSocket"))),(0,a.kt)("h2",{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b-\u0440\u0430\u0431\u043e\u0442\u044b-\u0441-\u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043c\u0438"},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043c\u0438"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 (GET)"),(0,a.kt)("li",{parentName:"ol"},"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 (POST)"),(0,a.kt)("li",{parentName:"ol"},"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 (PUT, PATCH)"),(0,a.kt)("li",{parentName:"ol"},"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 (DELETE)")),(0,a.kt)("h3",{id:"\u0431\u0430\u0437\u043e\u0432\u044b\u0439-\u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439-\u0440\u0430\u0431\u043e\u0442\u044b-\u0441-\u0434\u0430\u043d\u043d\u044b\u043c\u0438"},"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0434\u0430\u043d\u043d\u044b\u043c\u0438"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1. \u0417\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445")," - \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439 \u0433\u0435\u0442-\u0437\u0430\u043f\u0440\u043e\u0441 \u0432\u043d\u0443\u0442\u0440\u0438 useEffect() \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u0442\u0430 \u0438\u043b\u0438 \u043f\u043e \u044d\u0432\u0435\u043d\u0442\u0443"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- GET-\u0437\u0430\u043f\u0440\u043e\u0441\n- \u0438\u043d\u0434\u0438\u043a\u0430\u0446\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 (\u043b\u043e\u0430\u0434\u0435\u0440)\n- \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043e\u0448\u0438\u0431\u043e\u043a\n- query-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u043b\u044f \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438\n- \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. \u0412\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u043b\u0438 \u0441\u043f\u0438\u0441\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445")," - \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0447\u0435\u0440\u0435\u0437 \u0444\u0443\u043d\u043a\u0446\u0438\u044e setState() \u0432\u043d\u0443\u0442\u0440\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0442\u0435\u0439\u0442\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u0442\u0430. \u0422\u0430\u043a\u0436\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u0430 \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0432 ui-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'- json\n- \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0443\u0436\u043d\u043e "\u0440\u0430\u0441\u043a\u0438\u0434\u0430\u0442\u044c" \u043f\u043e ui-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c\n- \u0441\u043f\u0438\u0441\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0447\u0430\u0441\u0442\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u044e\u0442 \u0432 store\n- \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438 (\u043f\u043e id) \u043e\u0431\u044b\u0447\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u044e\u0442 \u0432 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0442\u0435\u0439\u0442 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 (\u0434\u043b\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f)\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3. \u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445")," - \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0442\u0435\u0439\u0442\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 \u0444\u0443\u043d\u043a\u0446\u0438\u0438-\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c \u0441\u0442\u0435\u0439\u0442\u0435"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0441\u0442\u0435\u0439\u0442\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\n- \u043c\u0435\u0442\u043e\u0434\u044b onChange \u0438\u0437\u043c\u0435\u043d\u044f\u044e\u0442 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0442\u0435\u0439\u0442\n- \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f \u043d\u0430 \u0444\u0440\u043e\u043d\u0442\u0435\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4. \u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445")," - \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0445 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0442\u0435\u0439\u0442\u0430 \u0432 \u0442\u0435\u043b\u043e \u043f\u043e\u0441\u0442-\u0437\u0430\u043f\u0440\u043e\u0441\u0430"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- PUT, PATCH \u0437\u0430\u043f\u0440\u043e\u0441\u044b\n- \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0442\u0435\u0439\u0442\u0430 \u043d\u0443\u0436\u043d\u043e \u0441\u043b\u043e\u0436\u0438\u0442\u044c \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\n- \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f \u043d\u0430 \u0431\u044d\u043a\u0435\n- \u0438\u043d\u0434\u0438\u043a\u0430\u0446\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 (\u043b\u043e\u0430\u0434\u0435\u0440)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"5. \u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445")," - \u043f\u0440\u0438 \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0439 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u043d\u043e\u0432\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0433\u0435\u0442-\u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- \u043f\u043e\u0441\u043b\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0439 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u043e\u0441\u043b\u0435 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c \u043d\u043e\u0432\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043d\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\n")),(0,a.kt)("h2",{id:"fetch"},"fetch"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u041f\u0440\u043e\u0434\u0432\u0438\u043d\u0443\u0442\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u0432\u043c\u0435\u0441\u0442\u043e \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0435\u0433\u043e XMLHttpRequest. \u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b. \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043f\u0440\u043e\u043c\u0438\u0441."),(0,a.kt)("li",{parentName:"ul"},"\u041c\u043e\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441 \u0442\u0430\u043a\u043c\u0438\u043c\u0438 \u043c\u0435\u0442\u043e\u0434\u0430\u043c\u0438 \u043a\u0430\u043a get, post, \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u043b\u0438 \u0444\u0430\u0439\u043b\u044b."),(0,a.kt)("li",{parentName:"ul"},"\u041e\u0442\u0432\u0435\u0442\u044b \u0441 fetch, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435, \u0441\u043f\u0435\u0440\u0432\u0430 \u043d\u0443\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0438\u0445 \u0432 \u043c\u0435\u0442\u043e\u0434 json():"),(0,a.kt)("li",{parentName:"ul"},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0441\u0442\u0430\u0442\u0443\u0441\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0431\u0443\u0434\u0435\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u044c\u0441\u044f \u0432 \u043f\u0435\u0440\u0432\u043e\u043c then.")),(0,a.kt)("h3",{id:"\u0431\u0430\u0437\u043e\u0432\u044b\u0439-\u043f\u0440\u0438\u043c\u0435\u0440"},"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"fetch('https://example.com/profile', {\n  // fetch options\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/json',\n  },\n\n  // \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 body\n  body: JSON.stringify({\n    email: 'user@gmail.com',\n    password: '123',\n  }),\n})\n\n// json convert\n.then(response => response.json())\n\n// Success\n.then(data => {\n  console.log('Success:', data);\n})\n\n// error\n.catch(error => {\n  console.error('Error:', error);\n});\n")),(0,a.kt)("h3",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// fetch \u043f\u0440\u0438\u043c\u0435\u0440 (GET)\nfetch('https://swapi.co/api/people/')\n  .then(response => response.json())\n  .then(data => console.log(data.results));\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// API\nconst API_URL = 'https://jsonplaceholder.typicode.com';\nconst endpoint = `${API_URL}/todos`;\n\n// \u0424\u0435\u0442\u0447\u0438\u043c \u044d\u043d\u0434\u043f\u043e\u0438\u043d\u0442\nfetch(endpoint, { method: 'GET' })\n  // fetch \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043f\u0440\u043e\u043c\u0438\u0441\u0441, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043d\u0443\u0436\u043d\u043e \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0447\u0435\u0440\u0435\u0437 .then()\n  .then(response => {\n    // console.log('response: ', response);\n\n    // \u041e\u041a - \u0443\u0441\u043f\u0435\u0448\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441\n    if (response.ok) {\n      // \u043f\u0440\u0438 fetch \u043f\u0440\u0438\u0448\u0435\u0434\u0448\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u0440\u0430\u0441\u043f\u0430\u0440\u0441\u0438\u0442\u044c \u043c\u0435\u0442\u043e\u0434\u043e\u043c .json()\n      return response.json();\n    }\n\n  // NOT OK - \u043d\u0435\u0443\u0441\u043f\u0435\u0448\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441\n    else {\n      console.log('error');\n    }\n  })\n  .then(data => {\n    // \u0432\u044b\u0432\u043e\u0434\u0438\u043c \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u044b\u0435 \u0440\u0430\u043d\u0435\u0435 \u0434\u0430\u043d\u043d\u044b\u0435\n    console.log('all data: ', data);\n\n    return data.map((item, index) => console.log(`item-${index}: `, item));\n  })\n")),(0,a.kt)("h3",{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'method: "POST", // *GET, POST, PUT, DELETE, etc.\n\nmode: "cors", // no-cors, *cors, same-origin\n\ncache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached\n\ncredentials: "same-origin", // include, *same-origin, omit\n\nheaders: {\n    "Content-Type": "application/json",\n    // \'Content-Type\': \'application/x-www-form-urlencoded\',\n},\nredirect: "follow", // manual, *follow, error\n\nreferrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url\n\nbody: JSON.stringify(data), // body data type must match "Content-Type" header\n')),(0,a.kt)("h2",{id:"axios"},"axios"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fetch-based js-library."),(0,a.kt)("li",{parentName:"ul"},"Promise based HTTP client for the browser and node.js")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npm install axios"),"\nAxios \u043c\u043e\u0436\u0435\u0442 \u043e\u0431\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0431\u0435\u0437 \u043c\u0435\u0442\u043e\u0434\u0430 json() \u043a\u0430\u043a \u0432 fetch:"),(0,a.kt)("p",null,"Axios \u043f\u0440\u0438\u043c\u0435\u0440 1 (GET)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"axios.get('https://swapi.co/api/people/')\n  .then(response => console.log(response));\n")),(0,a.kt)("h3",{id:"axios-get"},"axios-get"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import axios from 'axios';\nimport { API_URL, subUrl } from './api/apiUrl';\n\nconst getCampaing = id => {\n  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;\n\n  return axios.get(\n    `${API_URL}/${subUrl}/vacancies/${id}`,\n    {\n      headers: { Authorization: token }\n    }\n  )\n};\n\nexport default getCampaing;\n")),(0,a.kt)("h3",{id:"axios-delete"},"axios-delete"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import axios from 'axios';\nimport { API_URL, subUrl } from './api/apiUrl';\n\nconst deleteCampaing = id => {\n  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;\n\n  return axios.delete(\n    `${API_URL}/${subUrl}/vacancies/${id}`,\n    {\n      headers: { Authorization: token }\n    }\n  )\n};\n\nexport default deleteCampaing;\n")),(0,a.kt)("h3",{id:"axios-post"},"axios-post"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import axios from 'axios';\nimport { API_URL, subUrl } from './api/apiUrl';\n\nconst login = (name, password) => {\n  return axios.post(\n    `${API_URL}/${subUrl}/login`,\n    { \n      name, \n      password,\n    },\n  );\n}\n\nexport default login;\n")),(0,a.kt)("h3",{id:"axios-filter"},"axios-filter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import axios from 'axios';\nimport { API_URL, subUrl } from './api/apiUrl';\n\nconst getCompanies = inputValue => {\n  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;\n\n  return axios.get(\n    `${API_URL}/${subUrl}/companies`,\n    {\n      params: {\n        filter: {\n          // \u043f\u043e\u0438\u0441\u043a \u043f\u043e name, surname, email\n          where: {\n            or: [\n              { name:    { like: `%${inputValue}%`} },\n              { surname: { like: `%${inputValue}%`} },\n              { email:   { like: `%${inputValue}%`} }\n            ],\n          },\n          limit: 10,\n          offset: 50,\n          order: 'id DESC',\n        }\n      },\n      headers: { Authorization: token }\n    }\n  );\n}\n\nexport default getCompanies;\n")),(0,a.kt)("h3",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0441-ph"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0441 PH"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import axios from 'axios';\nimport { format } from 'date-fns';\n\nimport { API_URL, subUrl } from './../../../api/apiUrl';\n\nconst getJobs = state => {\n  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;\n\n  const { pageSize, page, filtered, sorted } = state; // from own state of react-table\n\n  // filter-template\n  const filter = {\n    where: {},\n    limit: pageSize,\n    skip: page * pageSize,\n    order: 'id DESC'\n  };\n\n  // inject where to filter\n  filtered.forEach(i => {\n    // Id column // +\n    if (i.id === 'id') {\n      filter.where[i.id] = i.value;\n\n    // Job column // +\n    } else if (i.id === 'name') {\n      filter.where[i.id] = { 'like': '%' + i.value + '%' };\n\n    // Locations column // +\n    } else if (i.id === 'locations') {\n      if (i.value) {\n        filter.where.locations = { 'inq': i.value.map(i => i.id) };\n      } else {\n        filter.where.locations = {};\n      }\n\n    // User column // +\n    } else if (i.id === 'employer') {\n      if (i.value) {\n        filter.where.employer_id = i.value.id;\n      } else {\n        filter.where.employer_id = null;\n      }\n\n    // Company column // +\n    } else if (i.id === 'company') {\n      console.log(i.value);\n      if (i.value) {\n        filter.where.companies = { 'inq': i.value.map(i => i.id) };\n      } else {\n        filter.where.companies = {};\n      }\n\n    // Status column // +\n    } else if (i.id === 'status') {\n      filter.where[i.id] = i.value;\n\n    // Plan column // +\n    } else if (i.id === 'plan_id') {\n\n      if (i.value === 5) {\n        filter.where[i.id] = { gt: 1 }\n      } else {\n        filter.where[i.id] = i.value;\n      }\n\n    // Created // +\n    } else if (i.id === 'created') {\n      const createdDate = i.value && format(i.value, 'yyyy-MM-dd');\n      filter.where.created = { 'gt': createdDate };\n      filter.order = i.value ? 'created DESC' : 'id DESC';\n\n    // Published // +\n    } else if (i.id === 'published') {\n      const publisheddDate = i.value && format(i.value, 'yyyy-MM-dd');\n      filter.where.published = { 'gt': publisheddDate };\n      // filter.order = i.value ? 'created DESC' : 'published DESC';\n    }\n  });\n\n\n  // inject order to filter\n  sorted.forEach(i => {\n    const desc = i.desc ? 'DESC' : 'ASC'\n      filter.order = `${i.id} ${desc}`;\n  });\n\n  // get-request for data\n  return axios.get(`${API_URL}/${subUrl}/vacancies/searchExtra`, {\n    params: { filter },\n    headers: { Authorization: token },\n  })\n};\n\nexport default getJobs;\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"async-await"},"async-await"),(0,a.kt)("p",null,"async \u0441\u0442\u0430\u0432\u0438\u0442\u044c\u0441\u044f \u043f\u0435\u0440\u0435\u0434 \u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439 \u0438 \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u043e\u043d\u0430 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u0430\u044f, \u0432\u043d\u0443\u0442\u0440\u0438 \u043d\u0435\u0435 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0441\u043b\u043e\u0432\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"await"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"try-catch"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'async function logMovies() {\n  // \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f response \u0436\u0434\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 fetch\n  const response = await fetch("http://example.com/movies.json");\n  const movies = await response.json();\n  console.log(movies); // return movies;\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// Example POST method implementation:\nasync function postData(url = "", data = {}) {\n  // Default options are marked with *\n  const response = await fetch(url, {\n    method: "POST", // *GET, POST, PUT, DELETE, etc.\n    mode: "cors", // no-cors, *cors, same-origin\n    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached\n    credentials: "same-origin", // include, *same-origin, omit\n    headers: {\n      "Content-Type": "application/json",\n      // \'Content-Type\': \'application/x-www-form-urlencoded\',\n    },\n    redirect: "follow", // manual, *follow, error\n    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url\n    body: JSON.stringify(data), // body data type must match "Content-Type" header\n  });\n\n  return response.json(); // parses JSON response into native JavaScript objects\n}\n\npostData("https://example.com/answer", { answer: 42 }).then((data) => {\n  console.log(data); // JSON data parsed by `data.json()` call\n});\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"try-catch"},"try-catch"),(0,a.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u043d\u0435\u0443\u0441\u043f\u0435\u0448\u043d\u044b\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u043c\u043e\u0436\u043d\u043e \u043e\u0431\u0435\u0440\u043d\u0443\u0442\u044c "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// Example POST method implementation:\nasync function postData(url = "", data = {}) {\n    try {\n        const response = await fetch(url, data);\n\n        return response.json();\n    } catch (error) {\n        console.error("Error:", error);\n    }\n}\n\npostData("https://example.com/answer", { answer: 42 }).then((data) => {\n  console.log(data); // JSON data parsed by `data.json()` call\n});\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"promise"},"Promise"),(0,a.kt)("p",null,"Promise\n\u041f\u0440\u043e\u043c\u0438\u0441\u044b \u043d\u0443\u0436\u043d\u044b \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439. \u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0446\u0435\u043f\u043e\u0447\u043a\u0443 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 then(), \u0447\u0442\u043e \u0443\u043f\u0440\u043e\u0449\u0430\u0435\u0442 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u0438 \u0447\u0438\u0442\u0430\u0435\u043c\u043e\u0441\u0442\u044c \u043a\u043e\u0434\u0430."),(0,a.kt)("p",null,"\u041f\u0440\u043e\u043c\u0438\u0441 \u0438\u043c\u0435\u0435\u0442 \u0442\u0440\u0438 \u0441\u0442\u0430\u0434\u0438\u0438: pending - \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u0435, resolve - \u0443\u0434\u0430\u0447\u043d\u043e\u0435 \u0432\u044b\u043f\u043e\u043d\u0435\u043d\u0438\u0435, reject - \u043d\u0435\u0443\u0434\u0430\u0447\u043d\u043e\u0435."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const somePromise = new Promise((resolve, reject) => {\n  // some async code\n  resolve(); // continue\n  reject(); // break\n});\n\nsomePromise\n  .then((value) => {\n    // do something\n  })\n  .catch((error) => {\n    // do something\n  });\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"then")," - \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c \u043f\u043e\u0441\u043b\u0435 \u0443\u0434\u0430\u0447\u043d\u043e\u0433\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u043c\u0438\u0441\u0430. catch - \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u043e\u0448\u0438\u0431\u043e\u043a."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"then")," \u0431\u0443\u0434\u0435\u0442 \u0436\u0434\u0430\u0442\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0433\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f somePromise. \u0415\u0441\u043b\u0438 \u041e\u041a - \u0442\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0441\u044c\u044f \u0441\u0430\u043c."),(0,a.kt)("p",null,"\u041c\u043e\u0436\u043d\u043e \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u0434\u043b\u0438\u043d\u043d\u044b\u0435 \u0446\u0435\u043f\u043e\u0447\u043a\u0438 \u0438\u0437 ",(0,a.kt)("inlineCode",{parentName:"p"},"then"),". \u041f\u0440\u043e\u043c\u0438\u0441 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043f\u0440\u043e\u043c\u0438\u0441, \u0442\u0430\u043a \u043a\u0430\u043a ",(0,a.kt)("inlineCode",{parentName:"p"},"then")," \u0432\u0438\u0434\u0438\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u043c\u0438\u0441\u044b. ",(0,a.kt)("inlineCode",{parentName:"p"},"then")," \u0442\u0430\u043a\u0436\u0435 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043f\u0440\u043e\u043c\u0438\u0441."),(0,a.kt)("p",null,"\u041f\u0440\u043e\u043c\u0438\u0441 c \u0442\u0430\u0439\u043c\u0435\u0440\u043e\u043c\nresolve \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432\u043d\u0443\u0442\u0440\u0438 \u0441\u0430\u043c\u043e\u0433\u043e \u0441\u0435\u0431\u044f."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function delay(ms) {\n  return new Promise(resolve => {\n    setTimeout(() => resolve('Done'), ms);\n  });\n}\n\ndelay(1000).then(resolve => console.log(resolve));\n")),(0,a.kt)("p",null,"\u041f\u0440\u043e\u043c\u0438\u0441 \u043d\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u0435\n",(0,a.kt)("inlineCode",{parentName:"p"},"resolve")," \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432\u043d\u0443\u0442\u0440\u0438 \u0442\u0435\u043b\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043f\u0440\u043e\u043c\u0438\u0441\u0430. \u041d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435 \u0447\u0430\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u043d\u0435 \u0441\u0430\u043c \u043f\u0440\u043e\u043c\u0438\u0441, \u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044e, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0435\u0433\u043e \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442, \u0447\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c \u0432 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0435 \u044d\u0442\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function loadScript(src) {\n  return new Promise(function(resolve, reject) {\n    let script = document.createElement('script');\n    script.src = src;\n\n    script.onload = () => resolve(script);\n    script.onerror = () => reject(new Error(`\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0441\u043a\u0440\u0438\u043f\u0442\u0430 ${src}`));\n\n    document.head.append(script);\n  });\n}\n")),(0,a.kt)("p",null,"\u0412\u044b\u0437\u043e\u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438. \u0412 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u043c src."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let promise = loadScript(\"https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js\");\n\npromise.then(\n  script => alert(`${script.src} \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d!`),\n  error => alert(`\u041e\u0448\u0438\u0431\u043a\u0430: ${error.message}`)\n);\n\npromise.then(script => alert('\u0415\u0449\u0451 \u043e\u0434\u0438\u043d \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a...'));\n")),(0,a.kt)("p",null,"\u041c\u043e\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0437\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043a\u043e\u0440\u043e\u0447\u0435:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"loadScript(\"https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js\")\n  .then(\n    script => alert(`${script.src} \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d!`),\n    error => alert(`\u041e\u0448\u0438\u0431\u043a\u0430: ${error.message}`)\n  )\n  .then(script => alert('\u0415\u0449\u0451 \u043e\u0434\u0438\u043d \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a...'));\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435-\u0437\u0430\u043f\u0440\u043e\u0441\u044b"},"\u041c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"debounce"},"Debounce"),(0,a.kt)("p",null,"\u0417\u0430\u0434\u0435\u0440\u0436\u043a\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438.  \u041f\u043e\u0441\u043b\u0435 \u0437\u0430\u0434\u0435\u0440\u0436\u043a\u0438 (delay), \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c\u0441\u044f callback."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useDebounce()")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"throttling"},"Throttling"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useThrottle()")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"lazy-loading"},"Lazy loading"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const LazyComp1 = React.lazy(() => import('./Component1'));\nconst LazyComp2 = React.lazy(() => import('./Component2'));\n")),(0,a.kt)("p",null,"Images, fonts, libs, components, reducers, "),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);