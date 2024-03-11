"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[6042],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>s});var l=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=l.createContext({}),u=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return l.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(a),s=r,d=m["".concat(o,".").concat(s)]||m[s]||k[s]||n;return a?l.createElement(d,i(i({ref:t},c),{},{components:a})):l.createElement(d,i({ref:t},c))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<n;u++)i[u]=a[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7590:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>n,metadata:()=>p,toc:()=>u});var l=a(7462),r=(a(7294),a(3905));const n={title:"API",sidebar_position:1},i=void 0,p={unversionedId:"backend/api",id:"backend/api",title:"API",description:"\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0435 API",source:"@site/docs/backend/api.md",sourceDirName:"backend",slug:"/backend/api",permalink:"/knowledge-bank/docs/backend/api",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/backend/api.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"API",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u0421\u0435\u0442\u044c",permalink:"/knowledge-bank/docs/backend/network"},next:{title:"REST",permalink:"/knowledge-bank/docs/backend/rest"}},o={},u=[{value:"\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0435 API",id:"\u0442\u0435\u0441\u0442\u043e\u0432\u044b\u0435-api",level:2},{value:"XMLHttpRequest",id:"xmlhttprequest",level:3},{value:"Fetch API",id:"fetch-api",level:3},{value:"CRUD",id:"crud",level:2},{value:"API-c\u0435\u0440\u0432\u0438\u0441\u044b",id:"api-c\u0435\u0440\u0432\u0438\u0441\u044b",level:2},{value:"\u0412\u0435\u0431-c\u0435\u0440\u0432\u0438\u0441\u044b",id:"\u0432\u0435\u0431-c\u0435\u0440\u0432\u0438\u0441\u044b",level:2},{value:"\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438 (\u044d\u043d\u0434\u043f\u043e\u0438\u043d\u0442\u044b)",id:"\u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438-\u044d\u043d\u0434\u043f\u043e\u0438\u043d\u0442\u044b",level:2},{value:"\u0410\u0434\u043c\u0438\u043d-\u043f\u0430\u043d\u0435\u043b\u044c",id:"\u0430\u0434\u043c\u0438\u043d-\u043f\u0430\u043d\u0435\u043b\u044c",level:2},{value:"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c API \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",id:"\u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c-api-\u0434\u043b\u044f-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",level:2},{value:"\u0425\u043e\u0441\u0442\u0438\u043d\u0433",id:"\u0445\u043e\u0441\u0442\u0438\u043d\u0433",level:2},{value:"\u0414\u0435\u043f\u043b\u043e\u0439 \u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430",id:"\u0434\u0435\u043f\u043b\u043e\u0439-\u0438-\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430",level:2}],c={toc:u};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u0442\u0435\u0441\u0442\u043e\u0432\u044b\u0435-api"},"\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0435 API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://swapi.py4e.com/"},"Swapi")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"https://swapi.py4e.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reqres.in/"},"REQRES")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"https://reqres.in/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://universities.hipolabs.com/"},"\u0421\u043f\u0438\u0441\u043e\u043a \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u043e\u0432")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"http://universities.hipolabs.com/search?name=middle&country=Turkey")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gorest.co.in/"},"GraphQL and REST API for Testing and Prototyping")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"https://gorest.co.in/public/v2/users")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://fakestoreapi.com/"},"fakestoreapi.com/")," - \u0434\u043b\u044f e-commerce \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://jsonplaceholder.typicode.com/"},"jsonplaceholder api")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://transform.tools/json-to-typescript"},"json-to-typescript"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"xmlhttprequest"},"XMLHttpRequest"),(0,r.kt)("p",null,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043f\u0440\u043e \u0441\u0438\u0433\u043d\u0430\u0442\u0443\u0440\u0443 \u044d\u0442\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0438 \u0435\u0433\u043e \u043c\u0435\u0442\u043e\u0434\u044b \u0440\u0430\u0441\u0441\u043a\u0430\u0436\u0443\u0442:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest"},"MDN"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.javascript.ru/xmlhttprequest"},"\xab\u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 \u0443\u0447\u0435\u0431\u043d\u0438\u043a JavaScript\xbb"),".")),(0,r.kt)("h3",{id:"fetch-api"},"Fetch API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u041c\u0435\u0442\u043e\u0434 ",(0,r.kt)("a",{parentName:"li",href:"https://medium.com/webbdev/fetch-3d0b811ffcb5"},"fetch"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/AbortController"},"AbortController"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/axios/axios"},"Axios")," \u2014 \u043c\u043e\u0434\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0438 \u0431\u043e\u043b\u0435\u0435 \u0441\u043b\u043e\u0436\u043d\u044b\u0439 \u0430\u043d\u0430\u043b\u043e\u0433 Fetch API;"),(0,r.kt)("li",{parentName:"ul"},"\u0418\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e\u0435 ",(0,r.kt)("a",{parentName:"li",href:"https://habr.com/ru/company/ruvds/blog/477286/"},"\u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 fetch \u0438 axios"),".")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Application Programming Interface")," - \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0441\u0432\u044f\u0437\u044c \u0438 \u043e\u0431\u043c\u0435\u043d \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u043c\u0435\u0436\u0434\u0443 \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043c\u0438 \u0438 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u043c\u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u043c\u0438."),(0,r.kt)("p",null,"\u041e\u0434\u043d\u0430 API \u043c\u043e\u0436\u0435\u0442 \u043e\u0431\u0440\u0430\u0449\u0430\u0442\u044c\u0441\u044f \u0441\u0430\u043c\u0430 \u043a \u0441\u0435\u0431\u0435 \u0438\u043b\u0438 \u043a \u0434\u0440\u0443\u0433\u0438\u043c \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u043c API. API \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u0442\u043a\u0440\u044b\u0442\u043e\u0439 (\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0439) \u0438\u043b\u0438 \u0437\u0430\u043a\u0440\u044b\u0442\u043e\u0439."),(0,r.kt)("p",null,"\u0420\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u043c\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430\u043c\u0438 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u0445 \u044f\u0437\u044b\u043a\u0430\u0445 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Java"),(0,r.kt)("li",{parentName:"ul"},"Pyton"),(0,r.kt)("li",{parentName:"ul"},"Nodejs"),(0,r.kt)("li",{parentName:"ul"},"PHP"),(0,r.kt)("li",{parentName:"ul"},"Ruby \u0438 \u0434\u0440.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"REST-API")," - \u0410\u0420\u0425\u0418\u0422\u0415\u041a\u0422\u0423\u0420\u041d\u042b\u0419 \u0421\u0422\u0418\u041b\u042c. \u0431\u043e\u043b\u0435\u0435 \u0433\u0438\u0431\u043a\u0438\u0439, \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0439, json (\u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0439), \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441 xml, text, html. \u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u043d\u044b\u0439 \u0441\u0442\u0438\u043b\u044c. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u041c\u0435\u043d\u044c\u0448\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u0432 json."),(0,r.kt)("li",{parentName:"ul"},"\u0425\u043e\u0440\u043e\u0448\u043e \u043a\u0435\u0448\u0438\u0440\u0443\u0435\u043c\u044b\u0439"),(0,r.kt)("li",{parentName:"ul"},"\u041f\u0440\u043e\u0441\u0442\u043e\u0442\u0430 \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"),(0,r.kt)("li",{parentName:"ul"},"\u041c\u0435\u043d\u0435\u0435 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u0439"),(0,r.kt)("li",{parentName:"ul"},"RESTFull - \u0435\u0441\u043b\u0438 \u043f\u0440\u0438\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u0432\u0441\u0435 \u043f\u0440\u0430\u0432\u0438\u043b REST"),(0,r.kt)("li",{parentName:"ul"},"\u0411\u043e\u043b\u0435\u0435 \u0431\u044b\u0441\u0442\u0440\u044b\u0439")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SOAP-API")," - \u041f\u0420\u041e\u0422\u041e\u041a\u041e\u041b. simple object access protocol, \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0447\u0435\u0440\u0435\u0437 xml-\u0444\u0430\u0439\u043b\u044b \u043a\u043e\u043d\u0444\u0438\u0433\u0438 (\u0443\u0436\u0435 \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439). \u0412\u0438\u0434 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430. \u041c\u043d\u043e\u0433\u043e \u043b\u0438\u0448\u043d\u0438\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u0432 xml."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0411\u043e\u043b\u0435\u0435 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u0439"),(0,r.kt)("li",{parentName:"ul"},"\u0422\u043e\u043b\u044c\u043a\u043e XML-\u0444\u0430\u0439\u043b\u044b \u0441 WSDL (\u044f\u0437\u044b\u043a \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432 \u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u043d\u0438\u043c, \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043d\u0430 \u044f\u0437\u044b\u043a\u0435 XML)"),(0,r.kt)("li",{parentName:"ul"},"\u0422\u044f\u0436\u0435\u043b\u043e \u043c\u0430\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u0442\u0441\u044f, \u0436\u044d\u0441\u0442\u043a\u0438\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f \u043a \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BASE URL / API URL")," - \u043a\u043e\u0440\u043d\u0435\u0432\u043e\u0439 url, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f API."),(0,r.kt)("h2",{id:"crud"},"CRUD"),(0,r.kt)("img",{src:"../../../img/backend/crud.png",width:"550",alt:"crud.png"}),(0,r.kt)("p",null,"4 \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 API. Create, read, update, delete."),(0,r.kt)("h2",{id:"api-c\u0435\u0440\u0432\u0438\u0441\u044b"},"API-c\u0435\u0440\u0432\u0438\u0441\u044b"),(0,r.kt)("p",null,"\u041d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b, \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u043c\u043e\u0434\u0443\u043b\u0438 \u043e\u0434\u043d\u043e\u0439 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b. \u0412\u0435\u0441\u044c \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0431\u044d\u043a\u0435\u043d\u0434 \u043c\u043e\u0436\u0435\u0442 \u0440\u0430\u0437\u0431\u0438\u0432\u0430\u044c\u0442\u0441\u044f \u043d\u0430 \u0432\u0435\u0431-\u0432\u0435\u0440\u0432\u0438\u0441\u044b."),(0,r.kt)("h2",{id:"\u0432\u0435\u0431-c\u0435\u0440\u0432\u0438\u0441\u044b"},"\u0412\u0435\u0431-c\u0435\u0440\u0432\u0438\u0441\u044b"),(0,r.kt)("img",{src:"../../../img/backend/api.png",width:"550",alt:"api.png"}),(0,r.kt)("p",null,"\u041e\u0431\u0449\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u044b \u0441 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u043c API, \u043a \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u043c\u043e\u0436\u043d\u043e \u043e\u0431\u0440\u0430\u0449\u0430\u0442\u044c\u0441\u044f \u0441 \u043b\u044e\u0431\u043e\u0433\u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0430."),(0,r.kt)("h2",{id:"\u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438-\u044d\u043d\u0434\u043f\u043e\u0438\u043d\u0442\u044b"},"\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438 (\u044d\u043d\u0434\u043f\u043e\u0438\u043d\u0442\u044b)"),(0,r.kt)("p",null,"\u0421\u043f\u0438\u0441\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0439  API."),(0,r.kt)("h2",{id:"\u0430\u0434\u043c\u0438\u043d-\u043f\u0430\u043d\u0435\u043b\u044c"},"\u0410\u0434\u043c\u0438\u043d-\u043f\u0430\u043d\u0435\u043b\u044c"),(0,r.kt)("p",null,"\u041f\u0430\u043d\u0435\u043b\u044c \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445. \u041c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433 \u0438 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445. \u041c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u043c \u043f\u043e\u0434-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043c API."),(0,r.kt)("h2",{id:"\u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c-api-\u0434\u043b\u044f-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"},"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c API \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),(0,r.kt)("li",{parentName:"ul"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),(0,r.kt)("li",{parentName:"ul"},"\u0421\u0431\u0440\u043e\u0441 \u043f\u0430\u0440\u043e\u043b\u044f"),(0,r.kt)("li",{parentName:"ul"},"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"),(0,r.kt)("li",{parentName:"ul"},"\u041e\u043d\u043b\u0430\u0439\u043d \u043e\u043f\u043b\u0430\u0442\u0430")),(0,r.kt)("h2",{id:"\u0445\u043e\u0441\u0442\u0438\u043d\u0433"},"\u0425\u043e\u0441\u0442\u0438\u043d\u0433"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u041e\u0431\u044b\u0447\u043d\u044b\u0439 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u044b\u0439 \u0445\u043e\u0441\u0442\u0438\u043d\u0433 (\u043c\u0435\u043d\u044c\u0448\u0435 \u0441\u0432\u043e\u0431\u043e\u0434\u044b)"),(0,r.kt)("li",{parentName:"ul"},"\u0412\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u0430\u044f \u043c\u0430\u0448\u0438\u043d\u0430 (\u0431\u043e\u043b\u044c\u0448\u0435 \u0441\u0432\u043e\u0431\u043e\u0434\u044b), \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e % \u043e\u0442 \u043c\u043e\u0449\u043d\u043e\u0441\u0442\u0438 \u0438 \u043f\u0430\u043c\u044f\u0442\u0438"),(0,r.kt)("li",{parentName:"ul"},"\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 (\u0432\u0441\u044f \u043c\u0430\u0448\u0438\u043d\u0430)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u0425\u043e\u0441\u0442\u0438\u043d\u0433-\u043f\u0430\u043d\u0435\u043b\u044c")," - \u043f\u0430\u043d\u0435\u043b\u044c \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0445\u043e\u0441\u0442\u0438\u043d\u0433\u0430 (\u043f\u043e\u0434 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439 \u044f\u0437\u044b\u043a \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, cPanel - \u0445\u043e\u0440\u043e\u0448\u0430\u044f)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u0445\u043e\u0441\u0442\u0438\u043d\u0433")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SSL-\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442")," - secure socket layer. \u0421\u0442\u043e\u0440\u043e\u043d\u044f\u044f \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f. \u0414\u043b\u044f Https"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"UP-time"))),(0,r.kt)("h2",{id:"\u0434\u0435\u043f\u043b\u043e\u0439-\u0438-\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430"},"\u0414\u0435\u043f\u043b\u043e\u0439 \u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0445\u043e\u0441\u0442\u0438\u043d\u0433\u0430"),(0,r.kt)("li",{parentName:"ul"},"DevOps \u0434\u0435\u043b\u0430\u0439 deploy-cli"),(0,r.kt)("li",{parentName:"ul"},"Jenkins"),(0,r.kt)("li",{parentName:"ul"},"\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439")))}k.isMDXComponent=!0}}]);