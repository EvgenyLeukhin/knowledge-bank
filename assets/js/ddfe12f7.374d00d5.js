"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[338],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=o(n),u=i,k=c["".concat(s,".").concat(u)]||c[u]||d[u]||r;return n?a.createElement(k,p(p({ref:t},m),{},{components:n})):a.createElement(k,p({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,p=new Array(r);p[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,p[1]=l;for(var o=2;o<r;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var a=n(7462),i=(n(7294),n(3905));const r={title:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",sidebar_position:7},p=void 0,l={unversionedId:"frontend/css/adaptivity",id:"frontend/css/adaptivity",title:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",description:"Viewport",source:"@site/docs/frontend/css/adaptivity.md",sourceDirName:"frontend/css",slug:"/frontend/css/adaptivity",permalink:"/knowledge-bank/docs/frontend/css/adaptivity",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/css/adaptivity.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u0410\u043d\u0438\u043c\u0430\u0446\u0438\u0438 / \u0422\u0440\u0430\u043d\u0441\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438",permalink:"/knowledge-bank/docs/frontend/css/animations"},next:{title:"\u041f\u0440\u0438\u043c\u0438\u0442\u0438\u0432\u044b",permalink:"/knowledge-bank/docs/frontend/js-basics/primitives"}},s={},o=[{value:"Viewport",id:"viewport",level:2},{value:"\u041c\u0435\u0434\u0438\u0430-\u0437\u0430\u043f\u0440\u043e\u0441\u044b",id:"\u043c\u0435\u0434\u0438\u0430-\u0437\u0430\u043f\u0440\u043e\u0441\u044b",level:2},{value:"\u0420\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0430\u043d\u043d\u0435\u043d\u044b\u0435 \u0431\u0440\u0435\u0439\u043a\u043f\u043e\u0438\u043d\u0442\u044b",id:"\u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0430\u043d\u043d\u0435\u043d\u044b\u0435-\u0431\u0440\u0435\u0439\u043a\u043f\u043e\u0438\u043d\u0442\u044b",level:2},{value:"TV / Cinema",id:"tv--cinema",level:3},{value:"Desktop",id:"desktop",level:3},{value:"Laptop",id:"laptop",level:3},{value:"Tablet (481px \u200a\u2014 \u200a768px)",id:"tablet-481px--768px",level:3},{value:"Mobile (320px \u2014 \u200a480px)",id:"mobile-320px--480px",level:3},{value:"\u0428\u0438\u0440\u0438\u043d\u044b \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 (Desktop First)",id:"\u0448\u0438\u0440\u0438\u043d\u044b-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432-desktop-first",level:3},{value:"Mobile first",id:"mobile-first",level:3},{value:"Bootstrap breakpoints",id:"bootstrap-breakpoints",level:3},{value:"Max-width",id:"max-width",level:4},{value:"Min-width",id:"min-width",level:4},{value:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u0445 \u0441\u0442\u0438\u043b\u0435\u0439",id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u0445-\u0441\u0442\u0438\u043b\u0435\u0439",level:3}],m={toc:o};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"viewport"},"Viewport"),(0,i.kt)("p",null,"\u0412\u044c\u044e\u043f\u043e\u0440\u0442 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u043e\u0442\u043b\u0438\u0447\u0430\u0435\u0442\u0441\u044f (\u043c\u043e\u0436\u0435\u0442 \u043e\u0442\u043b\u0438\u0447\u0430\u0442\u044c\u0441\u044f) \u043e\u0442 \u0444\u0438\u0437. \u0440\u0430\u0437\u043c\u0435\u0440\u0430 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0434\u0438\u0441\u043f\u043b\u0435\u044f \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430, \u0442\u0430\u043a \u043a\u0430\u043a \u043d\u0430 \u0434\u0438\u0441\u043f\u043b\u0435\u0435 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0440\u0435\u0442\u0438\u043d\u0430 (2-x \u0438\u043b\u0438 3-x \u0441\u043b\u043e\u0439\u043d\u0430\u044f), \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043a\u0430\u043a \u0431\u044b \u0440\u0430\u0437\u0431\u0438\u0432\u0430\u0435\u0442 \u043f\u0438\u043a\u0441\u0435\u043b\u0438 \u0432\u044c\u044e\u043f\u043e\u0440\u0442\u0430 \u0438 \u043f\u043e\u0432\u044b\u0448\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u043e\u0441\u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u043c\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430 (pixel is not a pixel on viewport)."),(0,i.kt)("h2",{id:"\u043c\u0435\u0434\u0438\u0430-\u0437\u0430\u043f\u0440\u043e\u0441\u044b"},"\u041c\u0435\u0434\u0438\u0430-\u0437\u0430\u043f\u0440\u043e\u0441\u044b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"@media screen and (min-width: 480px) and (max-width: 800px) {\n  .selector {...}\n}\n\n/* \u041f\u0440\u0438 \u043f\u0435\u0447\u0430\u0442\u0438 */\n@media print {\n  .selector {...}\n}\n\n/* \u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0438 \u0440\u0435\u0442\u0438\u043d\u0430 (\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0440\u0435\u0434\u043a\u043e) */\n@media (min-resolution: 144dpi), (min-resolution: 1.5dppx) {\n  .selector {...}\n}\n")),(0,i.kt)("h2",{id:"\u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0430\u043d\u043d\u0435\u043d\u044b\u0435-\u0431\u0440\u0435\u0439\u043a\u043f\u043e\u0438\u043d\u0442\u044b"},"\u0420\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0430\u043d\u043d\u0435\u043d\u044b\u0435 \u0431\u0440\u0435\u0439\u043a\u043f\u043e\u0438\u043d\u0442\u044b"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://yesviz.com/devices.php"},"yesviz.com - \u0421\u043f\u0438\u0441\u043e\u043a viewport \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.webmobilefirst.com/en/devices/"},"webmobilefirst - \u0421\u043f\u0438\u0441\u043e\u043a viewport \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432")),(0,i.kt)("img",{src:"../../../../img/css/breakpoints.webp",alt:"breakpoints.webp"}),(0,i.kt)("h3",{id:"tv--cinema"},"TV / Cinema"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"10240px")," - 10\u041a"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"7680px")," - 8\u041a"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"5120px")," - 5\u041a"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"3840px")," - 4\u041a")),(0,i.kt)("h3",{id:"desktop"},"Desktop"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"2560px")," - 2\u041a-\u043c\u043e\u043d\u0438\u0442\u0442\u043e\u0440 / TV"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"1920px")," - FullHD-\u043c\u043e\u043d\u0438\u0442\u043e\u0440")),(0,i.kt)("h3",{id:"laptop"},"Laptop"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"1728px"),' - Macbook Pro 16"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"1512px"),' - Macbook Pro 14"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"1440px"),' - Macbook Pro 15"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"1280px"),' - Macbook Air 13"')),(0,i.kt)("h3",{id:"tablet-481px--768px"},"Tablet (481px \u200a\u2014 \u200a768px)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"1280px")," - Galaxy Tab (landscape)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"800px")," - Galaxy Tab (portrait)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"1024px, 1080px, 1180px, 1194px, 1366px")," - iPads (landscape)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"768px, 810px, 820px, 834px")," - iPads (portrait)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"568px - 926px")," - mobile (landscape)")),(0,i.kt)("h3",{id:"mobile-320px--480px"},"Mobile (320px \u2014 \u200a480px)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"428px")," - iPhone 12/13/14 Pro Max"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"414px")," - iPhone 11 + 6/7/8 Plus"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"393px")," - Xiaomi, Redmi Note"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"390px")," - iPhone 12/13/14 + Pro"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"375px")," - iPhone 6/7/8, Samsung S6, S7, S8, S9, Honor, Huawei, HTC, Sony"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"360px")," - iPhone 12 Mini/13 Mini"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"320px")," - iPhone 5/SE1 (\u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0431\u044b\u0442\u044c)")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"\u0448\u0438\u0440\u0438\u043d\u044b-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432-desktop-first"},"\u0428\u0438\u0440\u0438\u043d\u044b \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 (Desktop First)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u041d\u043e\u0443\u0442\u0431\u0443\u043a\u0438, \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u044b")," ","[1920 - 1280px]"," "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"1170px")," (padding \u0441\u043b\u0435\u0432\u0430-\u0441\u043f\u0440\u0430\u0432\u0430 15-20px)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"1106px - \u0412\u041a"),"  (c padding 0 15px)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"960px")," (padding \u0441\u043b\u0435\u0432\u0430-\u0441\u043f\u0440\u0430\u0432\u0430 15-20px)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u041f\u043b\u0430\u043d\u0448\u0435\u0442\u044b, \u043f\u0435\u0440\u0435\u0432\u0435\u0440\u043d\u0443\u0442\u044b\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u044b")," ","[1279 - 768px]"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u0448\u0438\u0440\u0438\u043d\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 ",(0,i.kt)("strong",{parentName:"li"},"720px")," (padding \u0441\u043b\u0435\u0432\u0430-\u0441\u043f\u0440\u0430\u0432\u0430 15-20px)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u044b")," ","[767 - 360px]"," "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u0448\u0438\u0440\u0438\u043d\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 ",(0,i.kt)("strong",{parentName:"li"},"100%")," (padding \u0441\u043b\u0435\u0432\u0430-\u0441\u043f\u0440\u0430\u0432\u0430 15-20px)"),(0,i.kt)("li",{parentName:"ul"},"\u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u043c\u0438\u043d. \u0448\u0438\u0440\u0438\u043d\u0443 ",(0,i.kt)("strong",{parentName:"li"},"360px")," (\u0435\u0441\u043b\u0438 \u0432\u044c\u044e\u043f\u043e\u0440\u0442 \u0431\u0443\u0434\u0435\u0442 \u043c\u0435\u043d\u044c\u0448\u0435 360px, \u0442\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c overflow-x: scroll;)")))),(0,i.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0441\u043a\u0430\u0447\u043a\u043e\u043e\u0431\u0440\u0430\u0437\u043d\u043e\u0433\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0448\u0438\u0440\u0438\u043d\u044b \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"// desktop first (max - 1280px)\n.container {\n  width: 1170px;\n  padding: 0 20px;\n  margin: 0 auto;\n}\n\n// tablet (1279px - 768px) \n@media screen and (max-width: 1279px) {\n  .container { width: 720px; }\n}\n\n// mobile (767px - min)\n@media screen and (max-width: 767px) {\n  .container {\n    width: 100%;\n    min-width: 360px;\n    overflow-x: scroll;\n    padding: 0 15px;\n\n    // \u041c\u043e\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u043c\u0430\u043a\u0441. \u0448\u0438\u0440\u0438\u043d\u0443, \u0447\u0442\u043e\u0431\u044b \u0441\u0438\u043b\u044c\u043d\u043e \u043d\u0435 \u0440\u0430\u0441\u0442\u044f\u0433\u0438\u0432\u0430\u043b\u043e\u0441\u044c\n    max-width: 480px; \n  }\n}\n")),(0,i.kt)("h3",{id:"mobile-first"},"Mobile first"),(0,i.kt)("p",null,"\u042d\u0442\u0430 \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u044f \u0432 \u0432\u0435\u0431 \u0432\u0440\u043e\u0434\u0435 \u043a\u0430\u043a \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0440\u0435\u0434\u043a\u043e \u0432 \u0420\u0424 (\u0443 \u043d\u0430\u0441 \u043e\u0441\u043e\u0431\u043e \u043d\u0435 \u0437\u0430\u043c\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u044e\u0442\u0441\u044f, \u043f\u0440\u043e\u0441\u0442\u043e \u0434\u0435\u043b\u0430\u044e\u0442 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u0435 \u0441\u0430\u0439\u0442\u044b). \u041e\u0431\u044b\u0447\u043d\u043e \u0432\u0441\u0435\u0433\u0434\u0430 Desktop first."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0423\u0441\u043b\u043e\u0436\u043d\u044f\u0442\u044c \u043f\u0440\u043e\u0441\u0442\u043e\u0435 \u043f\u0440\u043e\u0449\u0435, \u0447\u0435\u043c \u0443\u043f\u0440\u043e\u0449\u0430\u0442\u044c \u0441\u043b\u043e\u0436\u043d\u043e\u0435"),(0,i.kt)("li",{parentName:"ul"},"\u0414\u043e\u0431\u043e\u0432\u043b\u044f\u0442\u044c \u043d\u043e\u0432\u043e\u0435 \u043b\u0443\u0447\u0448\u0435, \u0447\u0435\u043c \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0441\u0442\u0430\u0440\u043e\u0435"),(0,i.kt)("li",{parentName:"ul"},"\u041f\u043e\u0434 mobile \u043b\u0443\u0447\u0448\u0435 \u0434\u0435\u043b\u0430\u0442\u044c \u0440\u0435\u0437\u0438\u043d\u043e\u0432\u0443\u044e \u0432\u0451\u0440\u0441\u0442\u043a\u0443, \u0442\u0430\u043a \u043a\u0430\u043a \u0448\u0438\u0440\u0438\u043d\u0430 \u0443 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 \u043c\u043e\u0436\u0435\u0442 \u043e\u0442\u043b\u0438\u0447\u0430\u0442\u044c\u0441\u044f")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"bootstrap-breakpoints"},"Bootstrap breakpoints"),(0,i.kt)("h4",{id:"max-width"},"Max-width"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"// X-Small devices (portrait phones, less than 576px)\n@media (max-width: 575.98px) { ... }\n\n// Small devices (landscape phones, less than 768px)\n@media (max-width: 767.98px) { ... }\n\n// Medium devices (tablets, less than 992px)\n@media (max-width: 991.98px) { ... }\n\n// Large devices (desktops, less than 1200px)\n@media (max-width: 1199.98px) { ... }\n\n// X-Large devices (large desktops, less than 1400px)\n@media (max-width: 1399.98px) { ... }\n\n// XX-Large devices (larger desktops)\n// No media query since the xxl breakpoint has no upper bound on its width\n")),(0,i.kt)("h4",{id:"min-width"},"Min-width"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"// X-Small devices (portrait phones, less than 576px)\n// No media query for `xs` since this is the default in Bootstrap\n\n// Small devices (landscape phones, 576px and up)\n@media (min-width: 576px) { ... }\n\n// Medium devices (tablets, 768px and up)\n@media (min-width: 768px) { ... }\n\n// Large devices (desktops, 992px and up)\n@media (min-width: 992px) { ... }\n\n// X-Large devices (large desktops, 1200px and up)\n@media (min-width: 1200px) { ... }\n\n// XX-Large devices (larger desktops, 1400px and up)\n@media (min-width: 1400px) { ... }\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u0445-\u0441\u0442\u0438\u043b\u0435\u0439"},"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u0445 \u0441\u0442\u0438\u043b\u0435\u0439"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<link href="css/desktop.css" rel="stylesheet" media="(min-width:768px)">\n<link href="css/tablet.css" rel="stylesheet" media="(min-width:481px) and (max-width:767px)">\n<link href="css/mobile.css" rel="stylesheet" media="(max-width:480px)">\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"@import url(css/base.css); /* \u0431\u0435\u0437 \u043c\u0435\u0434\u0438\u0430\u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u0434\u043b\u044f \u0432\u0441\u0435\u0445 */\n@import url(css/medium.css) (min-width:481px) and (max-width:768px);\n@import url(css/small.css) (max-width: 480px);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u0431\u0430\u0437\u043e\u0432\u044b\u0439 \u043c\u0435\u0442\u0430-\u0442\u0435\u0433 \u0434\u043b\u044f viewport --\x3e\n<meta name="viewport" content="width=device-width, initial-scale=1">\n\n\x3c!-- \u0437\u0430\u043f\u0440\u0435\u0442 \u043d\u0430 \u0437\u0443\u043c --\x3e\n<meta name="viewport" content="minimum-scale=1, maximum-scale=1, user-scalable=0">\n')))}d.isMDXComponent=!0}}]);