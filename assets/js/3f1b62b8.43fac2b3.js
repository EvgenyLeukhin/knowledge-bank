"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[5117],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>p});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=n.createContext({}),d=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),g=d(r),p=s,m=g["".concat(i,".").concat(p)]||g[p]||l[p]||a;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function p(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=g;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:s,o[1]=u;for(var d=2;d<a;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6778:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>u,toc:()=>d});var n=r(7462),s=(r(7294),r(3905));const a={title:"api-services",sidebar_position:6},o=void 0,u={unversionedId:"frontend/react/api/api-services",id:"frontend/react/api/api-services",title:"api-services",description:"- \u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f, \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f, \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u2014 \u0432 \u0447\u0435\u043c \u0440\u0430\u0437\u043d\u0438\u0446\u0430?",source:"@site/docs/frontend/react/6-api/6-api-services.md",sourceDirName:"frontend/react/6-api",slug:"/frontend/react/api/api-services",permalink:"/knowledge-bank/docs/frontend/react/api/api-services",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/react/6-api/6-api-services.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"api-services",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"promises",permalink:"/knowledge-bank/docs/frontend/react/api/promises"},next:{title:"websocket",permalink:"/knowledge-bank/docs/frontend/react/api/websocket"}},i={},d=[{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043c\u0438",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b-\u0440\u0430\u0431\u043e\u0442\u044b-\u0441-\u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043c\u0438",level:2},{value:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0434\u0430\u043d\u043d\u044b\u043c\u0438",id:"\u0431\u0430\u0437\u043e\u0432\u044b\u0439-\u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439-\u0440\u0430\u0431\u043e\u0442\u044b-\u0441-\u0434\u0430\u043d\u043d\u044b\u043c\u0438",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0441\u0435\u0440\u0432\u0438\u0441\u0430-\u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0441 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u043c\u0438 \u043c\u0435\u0442\u043e\u0434\u0430\u043c\u0438",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0441\u0435\u0440\u0432\u0438\u0441\u0430-\u043e\u0431\u044a\u0435\u043a\u0442\u0430-\u0441-\u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u043c\u0438-\u043c\u0435\u0442\u043e\u0434\u0430\u043c\u0438",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441 redux-thunk",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f-\u0441-redux-thunk",level:2},{value:"try-catch \u0432\u043d\u0435 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439",id:"try-catch-\u0432\u043d\u0435-\u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0445-\u0444\u0443\u043d\u043a\u0446\u0438\u0439",level:3}],c={toc:d};function l(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://it-uroki.ru/uroki/bezopasnost/identifikaciya-autentifikaciya-avtorizaciya.html"},"\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f, \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f, \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u2014 \u0432 \u0447\u0435\u043c \u0440\u0430\u0437\u043d\u0438\u0446\u0430?")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie"},"Set-Cookie"))),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b-\u0440\u0430\u0431\u043e\u0442\u044b-\u0441-\u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043c\u0438"},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043c\u0438"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 (GET)"),(0,s.kt)("li",{parentName:"ol"},"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 (POST)"),(0,s.kt)("li",{parentName:"ol"},"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 (PUT, PATCH)"),(0,s.kt)("li",{parentName:"ol"},"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 (DELETE)")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"\u0431\u0430\u0437\u043e\u0432\u044b\u0439-\u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439-\u0440\u0430\u0431\u043e\u0442\u044b-\u0441-\u0434\u0430\u043d\u043d\u044b\u043c\u0438"},"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0434\u0430\u043d\u043d\u044b\u043c\u0438"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"1. \u0417\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445")," - \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439 \u0433\u0435\u0442-\u0437\u0430\u043f\u0440\u043e\u0441 \u0432\u043d\u0443\u0442\u0440\u0438 useEffect() \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u0442\u0430 \u0438\u043b\u0438 \u043f\u043e \u044d\u0432\u0435\u043d\u0442\u0443"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"- GET-\u0437\u0430\u043f\u0440\u043e\u0441\n- \u0438\u043d\u0434\u0438\u043a\u0430\u0446\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 (\u043b\u043e\u0430\u0434\u0435\u0440)\n- \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043e\u0448\u0438\u0431\u043e\u043a\n- query-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u043b\u044f \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438\n- \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"2. \u0412\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u043b\u0438 \u0441\u043f\u0438\u0441\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445")," - \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0447\u0435\u0440\u0435\u0437 \u0444\u0443\u043d\u043a\u0446\u0438\u044e setState() \u0432\u043d\u0443\u0442\u0440\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0442\u0435\u0439\u0442\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u0442\u0430. \u0422\u0430\u043a\u0436\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u0430 \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0432 ui-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'- json\n- \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0443\u0436\u043d\u043e "\u0440\u0430\u0441\u043a\u0438\u0434\u0430\u0442\u044c" \u043f\u043e ui-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c\n- \u0441\u043f\u0438\u0441\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0447\u0430\u0441\u0442\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u044e\u0442 \u0432 store\n- \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438 (\u043f\u043e id) \u043e\u0431\u044b\u0447\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u044e\u0442 \u0432 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0442\u0435\u0439\u0442 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 (\u0434\u043b\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f)\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"3. \u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445")," - \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0442\u0435\u0439\u0442\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 \u0444\u0443\u043d\u043a\u0446\u0438\u0438-\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c \u0441\u0442\u0435\u0439\u0442\u0435"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"- \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0441\u0442\u0435\u0439\u0442\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\n- \u043c\u0435\u0442\u043e\u0434\u044b onChange \u0438\u0437\u043c\u0435\u043d\u044f\u044e\u0442 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0442\u0435\u0439\u0442\n- \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f \u043d\u0430 \u0444\u0440\u043e\u043d\u0442\u0435\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"4. \u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445")," - \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0445 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0442\u0435\u0439\u0442\u0430 \u0432 \u0442\u0435\u043b\u043e \u043f\u043e\u0441\u0442-\u0437\u0430\u043f\u0440\u043e\u0441\u0430"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"- PUT, PATCH \u0437\u0430\u043f\u0440\u043e\u0441\u044b\n- \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0442\u0435\u0439\u0442\u0430 \u043d\u0443\u0436\u043d\u043e \u0441\u043b\u043e\u0436\u0438\u0442\u044c \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\n- \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f \u043d\u0430 \u0431\u044d\u043a\u0435\n- \u0438\u043d\u0434\u0438\u043a\u0430\u0446\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 (\u043b\u043e\u0430\u0434\u0435\u0440)\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"5. \u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445")," - \u043f\u0440\u0438 \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0439 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u043d\u043e\u0432\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0433\u0435\u0442-\u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"- \u043f\u043e\u0441\u043b\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0439 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u043e\u0441\u043b\u0435 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c \u043d\u043e\u0432\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043d\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\n")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0441\u0435\u0440\u0432\u0438\u0441\u0430-\u043e\u0431\u044a\u0435\u043a\u0442\u0430-\u0441-\u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u043c\u0438-\u043c\u0435\u0442\u043e\u0434\u0430\u043c\u0438"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0441\u0435\u0440\u0432\u0438\u0441\u0430-\u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0441 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u043c\u0438 \u043c\u0435\u0442\u043e\u0434\u0430\u043c\u0438"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"interface IServerError {\n  errorId: string;\n  errorMessage: string;\n  httpStatusCode: number;\n  status: string;\n}\n\n// \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0433\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 - \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\ninterface IServerResult {\n  data?: any;\n  success: boolean;\n  error?: IServerError;\n}\n\nconst mapService = {\n  async getRegionDrugstores(regionId: number): Promise<IServerResult> {\n    try {\n      const { data, status } = await httpClient.get(`\n        drugstores?filter=region_id|in|${regionId}&includeSchedules=true\n    `);\n\n      return {\n        data,\n        success: status === 200,\n      };\n    } catch (e) {\n      return {\n        success: false,\n        error: e as IServerError,\n      };\n    }\n  },\n\n  async getRegionZones(regionId: number): Promise<IServerResult> {\n    try {\n      const { data, status } = await httpClient.get(`dictionaries/zone/${regionId}`);\n\n      return {\n        data,\n        success: status === 200,\n      };\n    } catch (e) {\n      return {\n        success: false,\n        error: e as IServerError,\n      };\n    }\n  },\n\n  async getRegionExternalDrugstores(regionId: number): Promise<IServerResult> {\n    try {\n      const { data, status } = await httpClient.get(`\n        external_drugstores?regionId=${regionId}\n      `);\n\n      return {\n        data,\n        success: status === 200,\n      };\n    } catch (e) {\n      return {\n        success: false,\n        error: e as IServerError,\n      };\n    }\n  },\n\n  async loadExternalDrugstoresData(regionId: number): Promise<IServerResult> {\n    try {\n      const { data, status } = await httpClient.post(`\n        external_drugstores/fill_by_regions?regionId=${regionId}\n      `);\n\n      return {\n        data,\n        success: status === 200,\n      };\n    } catch (e) {\n      return {\n        success: false,\n        error: e as IServerError,\n      };\n    }\n  },\n\n  async updateExternalDrugstoreStatus(\n    externalDrugstoreId: string, externalDrugstoreStatus: ExternalDrugstoreStatus\n  ): Promise<IServerResult> {\n    try {\n      const { data, status } = await httpClient.put(`\n        external_drugstores/set_status?externalId=${externalDrugstoreId}&status=${externalDrugstoreStatus}\n      `);\n\n      return {\n        data,\n        success: status === 200,\n      };\n    } catch (e) {\n      return {\n        success: false,\n        error: e as IServerError,\n      };\n    }\n  },\n\n  async linkDrugstores(drugstoreId: number, externalDrugstoreId: string): Promise<IServerResult> {\n    try {\n      const { status } = await httpClient.post(`\n        external_drugstores/link/drugstore?drugstore_id=${drugstoreId}&external_drugstore_id=${externalDrugstoreId}\n      `);\n\n      return {\n        success: status === 200,\n      };\n    } catch (e) {\n      return {\n        success: false,\n        error: e as IServerError,\n      };\n    }\n  },\n\n  async unlinkDrugstore(drugstoreId: number): Promise<IServerResult> {\n    try {\n      const { status } = await httpClient.post(`\n        xternal_drugstores/unlink/drugstore?drugstore_id=${drugstoreId}\n      `);\n\n      return {\n        success: status === 200,\n      };\n    } catch (e) {\n      return {\n        success: false,\n        error: e as IServerError,\n      };\n    }\n  },\n\n  // \u043f\u043e\u0441\u044b\u043b \u0441\u0442\u0440\u043e\u043a\u0438 \u0430\u0434\u0440\u0435\u0441\u0430 \u0432 2gis\n  async get2gisSuggest(query: string): Promise<IServerResult> {\n    try {\n      const { data, status } = await httpClient.get(`\n        external/2gis/3.0/suggest?q=${query}\n      `);\n\n      return {\n        data,\n        success: status === 200,\n      };\n    } catch (e) {\n      return {\n        success: false,\n        error: e as IServerError,\n      };\n    }\n  },\n\n  // \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f \u0434\u043b\u044f \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u0438 \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u0441\u043a\u0438\u0445 \u0430\u043f\u0442\u0435\u043a\n  async addDrugstoreStatusComment(id: number, statusComment: string): Promise<IServerResult> {\n    try {\n      const { data, status } = await httpClient.request({\n        url: 'drugstores/status_comment',\n        method: 'post',\n        data: {\n          drugstore_id: Number(id),\n          status_comment: statusComment,\n        },\n      });\n\n      return {\n        data,\n        success: status === 200 || status === 204,\n      };\n    } catch (e) {\n      return {\n        success: false,\n        error: e as IServerError,\n      };\n    }\n  },\n\n  // \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f \u0434\u043b\u044f \u043d\u0435\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u0445 \u0430\u043f\u0442\u0435\u043a\n  async addExternalDrugstoreStatusComment(id: string, statusComment: string): Promise<IServerResult> {\n    try {\n      const { data, status } = await httpClient.request({\n        url: 'external_drugstores/status_comment',\n        method: 'post',\n        data: {\n          external_id: id,\n          status_comment: statusComment,\n        },\n      });\n\n      return {\n        data,\n        success: status === 200 || status === 204,\n      };\n    } catch (e) {\n      return {\n        success: false,\n        error: e as IServerError,\n      };\n    }\n  },\n};\n\nexport default mapService;\n")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f-\u0441-redux-thunk"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441 redux-thunk"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Dispatch } from '@reduxjs/toolkit';\nimport { IDrugstore, IDrugstoreOnMap } from 'interfaces';\n\n// getRegionDrugstores - \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0430 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u0430\u043f\u0442\u0435\u043a \u043f\u043e \u0440\u0435\u0433\u0438\u043e\u043d\u0443\nexport const getRegionDrugstores =\n  (regionId: number) => async (dispatch: Dispatch) => {\n    dispatch(setError({ drugstores: '' }));\n    dispatch(setLoading({ drugstores: true }));\n\n    // \u0434\u0435\u0440\u0433\u0430\u0435\u043c \u0437\u0430\u043f\u0440\u043e\u0441\n    const { data, success, error } =\n      await mapService.getRegionDrugstores(regionId);\n\n    // \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0433\u043e \u043e\u0442\u0432\u0435\u0442\u0430\n    if (data && success) {\n      dispatch(setLoading({ drugstores: false }));\n\n      // no drugstores found\n      if (!data.drugstores.length) {\n        dispatch(setError({ drugstores: '\u0410\u043f\u0442\u0435\u043a \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e' }));\n      }\n\n      const extendedData = data.drugstores.map((drugstore: IDrugstore) => {\n        const isCoordinates =\n          drugstore.id && drugstore.point.lat && drugstore.point.lng;\n\n        // \u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c \u0442\u043e\u043b\u044c\u043a\u043e \u0430\u043f\u0442\u0435\u043a\u0438 \u0441 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u043c\u0438 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0430\u043c\u0438\n        if (isCoordinates) {\n          return {\n            id: drugstore.id,\n            uuid: drugstore.uuid,\n            name: drugstore.name,\n            address: drugstore.address,\n            point: drugstore.point,\n            type: drugstore.type,\n            tel: drugstore.tel,\n            email: drugstore.email,\n            externalDrugstore: drugstore.externalDrugstore,\n            status: drugstore.status,\n            drugstoreType: drugstore.drugstoreType,\n            isLocatedAtVSP: drugstore.isLocatedAtVSP,\n            startDate: drugstore.startDate,\n            statusComment: drugstore.statusComment,\n            schedule: drugstore.schedule,\n            zoneUuid: drugstore.zoneUuid,\n          };\n        }\n      });\n\n      // pass drugstores data\n      dispatch(setDrugstores(extendedData as IDrugstoreOnMap[]));\n\n    // \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043d\u0435\u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0433\u043e \u043e\u0442\u0432\u0435\u0442\u0430\n    } else {\n      dispatch(setLoading({ drugstores: false }));\n      dispatch(setError({ drugstores: `\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0430\u043f\u0442\u0435\u043a: ${error}` }));\n      dispatch(setDrugstores([]));\n    }\n};\n\n// getRegionExternalDrugstores - \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0430 \u0430\u043f\u0442\u0435\u043a \u0438\u0437 2\u0433\u0438\u0441 \u043f\u043e \u0440\u0435\u0433\u0438\u043e\u043d\u0443\nexport const getRegionExternalDrugstores =\n  (regionId: number) => async (dispatch: Dispatch) => {\n    dispatch(setError({ externalDrugstores: '' }));\n    dispatch(setLoading({ externalDrugstores: true }));\n\n    // \u0434\u0435\u0440\u0433\u0430\u0435\u043c \u0437\u0430\u043f\u0440\u043e\u0441\n    const { data, success, error } =\n      await mapService.getRegionExternalDrugstores(regionId);\n\n    // \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0433\u043e \u043e\u0442\u0432\u0435\u0442\u0430\n    if (data && success) {\n      dispatch(setLoading({ externalDrugstores: false }));\n\n      // no drugstores found\n      if (!data.length) {\n        dispatch(setError({ externalDrugstores: '\u0410\u043f\u0442\u0435\u043a 2\u0413\u0418\u0421 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e' }));\n      }\n\n      const extendedData = data.map(externalDrugstore => {\n        return {\n          ...externalDrugstore,\n          // id: generateUniqueID(), // TODO: \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u043d\u0443\u0436\u043d\u043e \u043b\u0438 \u0441\u0435\u0439\u0447\u0430\u0441 \u0433\u0435\u043d\u0435\u0440\u0438\u0442\u044c id (\u043c\u043e\u0436\u0435\u0442 \u043a\u0430\u043a \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c externalId \u0438\u043b\u0438 uuid)\n          id: externalDrugstore.externalId,\n          type: DrugstoreType.EXTERNAL,\n          status: DrugstoreStatus.WORK,\n        };\n      });\n\n      // pass external drugstores data\n      dispatch(setExternalDrugstores(extendedData));\n\n    // \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043d\u0435\u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0433\u043e \u043e\u0442\u0432\u0435\u0442\u0430\n    } else {\n      dispatch(setLoading({ externalDrugstores: false }));\n      dispatch(\n        setError({\n          externalDrugstores: `\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 2\u0413\u0418\u0421 \u0430\u043f\u0442\u0435\u043a: ${error}`,\n        }),\n      );\n      dispatch(setExternalDrugstores([]));\n    }\n};\n")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"try-catch-\u0432\u043d\u0435-\u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0445-\u0444\u0443\u043d\u043a\u0446\u0438\u0439"},"try-catch \u0432\u043d\u0435 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"function isErrorInAvailability(): boolean {\n    let hasError = false;\n\n    try {\n        slaInWork.intervals[index].values.forEach((value) => {\n            if (hasError) return hasError;\n\n            hasError = isErrorAvailability(value);\n        });\n    } catch (e) {\n        return true;\n    }\n\n    return hasError;\n}\n")))}l.isMDXComponent=!0}}]);