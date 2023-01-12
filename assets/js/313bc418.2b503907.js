"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9623],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>d});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},i=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=l,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(k,o(o({ref:n},i),{},{components:t})):r.createElement(k,o({ref:n},i))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4990:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(7462),l=(t(7294),t(3905));const a={title:"\u0412\u0435\u043b\u0438\u0447\u0438\u043d\u044b",sidebar_position:1},o=void 0,s={unversionedId:"frontend/css/values",id:"frontend/css/values",title:"\u0412\u0435\u043b\u0438\u0447\u0438\u043d\u044b",description:"\u0415\u0434\u0438\u043d\u0438\u0446\u044b \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f \u0432 CSS",source:"@site/docs/frontend/css/values.md",sourceDirName:"frontend/css",slug:"/frontend/css/values",permalink:"/knowledge-bank/docs/frontend/css/values",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/css/values.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u0412\u0435\u043b\u0438\u0447\u0438\u043d\u044b",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u0421\u0435\u043b\u0435\u043a\u0442\u043e\u0440\u044b",permalink:"/knowledge-bank/docs/frontend/css/selectors"},next:{title:"\u0411\u043b\u043e\u0447\u043d\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c",permalink:"/knowledge-bank/docs/frontend/css/box-model"}},p={},c=[{value:"\u0415\u0434\u0438\u043d\u0438\u0446\u044b \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f \u0432 CSS",id:"\u0435\u0434\u0438\u043d\u0438\u0446\u044b-\u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f-\u0432-css",level:2},{value:"\u041f\u0438\u043a\u0441\u0435\u043b\u0438 (px)",id:"\u043f\u0438\u043a\u0441\u0435\u043b\u0438-px",level:3},{value:"\u041f\u0440\u043e\u0446\u0435\u043d\u0442\u044b (%)",id:"\u043f\u0440\u043e\u0446\u0435\u043d\u0442\u044b-",level:3},{value:"\u0412\u044c\u044e\u043f\u043e\u0440\u0442 (vh, vw)",id:"\u0432\u044c\u044e\u043f\u043e\u0440\u0442-vh-vw",level:3},{value:"em \u0438 rem",id:"em-\u0438-rem",level:3},{value:"\u041d\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 / \u0420\u0435\u0434\u043a\u043e\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435",id:"\u043d\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435--\u0440\u0435\u0434\u043a\u043e\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435",level:3},{value:"\u0426\u0432\u0435\u0442",id:"\u0446\u0432\u0435\u0442",level:2},{value:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0446\u0432\u0435\u0442\u0430",id:"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435-\u0446\u0432\u0435\u0442\u0430",level:3},{value:"HEX-\u0444\u043e\u0440\u043c\u0430\u0442 (16-\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 (0-9, a-f))",id:"hex-\u0444\u043e\u0440\u043c\u0430\u0442-16-\u044b\u0439-\u0444\u043e\u0440\u043c\u0430\u0442-0-9-a-f",level:3},{value:"RGB-\u0444\u043e\u0440\u043c\u0430\u0442 0-255 (RED, GREEN, BLUE)",id:"rgb-\u0444\u043e\u0440\u043c\u0430\u0442-0-255-red-green-blue",level:3},{value:"HSL-\u0444\u043e\u0440\u043c\u0430\u0442",id:"hsl-\u0444\u043e\u0440\u043c\u0430\u0442",level:3},{value:"\u041f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0441\u0442\u044c",id:"\u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0441\u0442\u044c",level:3},{value:"\u0441urrentColor",id:"\u0441urrentcolor",level:3}],i={toc:c};function u(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u0435\u0434\u0438\u043d\u0438\u0446\u044b-\u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f-\u0432-css"},"\u0415\u0434\u0438\u043d\u0438\u0446\u044b \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f \u0432 CSS"),(0,l.kt)("h3",{id:"\u043f\u0438\u043a\u0441\u0435\u043b\u0438-px"},"\u041f\u0438\u043a\u0441\u0435\u043b\u0438 (px)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0438\u043a\u0441\u0435\u043b\u0438")," - \u0441\u0430\u043c\u044b\u0435 \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435. \u0410\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435. \u0421\u0442\u0440\u043e\u0433\u043e \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u0430."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"font-size: 16px;\nwidth: 100px;\nheight: 100px;\nmargin-left: 10px;\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\u043f\u0440\u043e\u0446\u0435\u043d\u0442\u044b-"},"\u041f\u0440\u043e\u0446\u0435\u043d\u0442\u044b (%)"),(0,l.kt)("p",null,"\u041e\u0442 \u0448\u0438\u0440\u0438\u043d\u044b \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f. \u041e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"width: 30%;\nmargin-right: 5%;\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\u0432\u044c\u044e\u043f\u043e\u0440\u0442-vh-vw"},"\u0412\u044c\u044e\u043f\u043e\u0440\u0442 (vh, vw)"),(0,l.kt)("p",null,"\u041f\u0440\u043e\u0446\u0435\u043d\u0442 \u0448\u0438\u0440\u0438\u043d\u044b/\u0432\u044b\u0441\u043e\u0442\u044b \u0432\u044c\u044e\u043f\u043e\u0440\u0442\u0430. \u041e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"height: 100vh;\nwidth: 100vw;\n")),(0,l.kt)("p",null,"\u0427\u0430\u0441\u0442\u043e \u043a\u043e\u043c\u0431\u0438\u043d\u0438\u0440\u0443\u044e\u0442 \u0441\u043e \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u043e\u0439 css-\u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439 calc."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"width: calc(100vw - 300px);\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"em-\u0438-rem"},"em \u0438 rem"),(0,l.kt)("p",null,"\u041e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043e\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f (em), \u043e\u0442 \u0431\u0430\u0437\u043e\u0432\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f (rem). \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c \u0434\u043b\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432 \u0442\u0435\u043a\u0441\u0442\u0430 font-size."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"em"},"em"),(0,l.kt)("p",{parentName:"li"},"\u041e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u0430 \u043e\u0442 \u043f\u0440\u044f\u043c\u043e\u0433\u043e \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f. \u0423 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u0442\u043e\u044f\u0442\u044c \u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0432 ",(0,l.kt)("strong",{parentName:"p"},"em"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-css"},"/* 1em = 16px */\nhtml { font-size: 1em; }\n\n/* 2em = 16px (\u0443 html font-size 16px) * 2 = 32px */\n.parent {  font-size: 2em; }\n\n/* 0.5em = 32px (\u0443 .parent font-size 32px) * 0.5 = 16px */\n.child { font-size: 0.5em; }\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"rem"},"rem"),(0,l.kt)("p",{parentName:"li"},"\u041e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u0430 \u043e\u0442 \u043a\u043e\u0440\u043d\u0435\u0432\u043e\u0439 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430. \u0423\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0435 \u043f\u0440\u044f\u043c\u043e\u0439 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c \u043a\u0430\u043a \u0443 em, \u0430 \u043a\u043e\u0440\u043d\u0435\u0432\u043e\u0439 (html)."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-css"},"html { font-size: 16px; }\n\n/* 2rem = 16px (\u0443 html font-size 16px) * 2 = 32px */\n.parent {  font-size: 2rem; }\n\n/* 0.5rem = 16px (\u0443 html font-size 16px) * 0.5 = 8px */\n.child { font-size: 0.5rem; }\n")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\u043d\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435--\u0440\u0435\u0434\u043a\u043e\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435"},"\u041d\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 / \u0420\u0435\u0434\u043a\u043e\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"in")," (\u0414\u044e\u0439\u043c)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"cm")," (\u0421\u0430\u043d\u0442\u0438\u043c\u0435\u0442\u0440) "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"mm")," (\u041c\u0438\u043b\u043b\u0438\u043c\u0435\u0442\u0440) "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"pt")," (\u041f\u0443\u043d\u043a\u0442)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"vmin"),", ",(0,l.kt)("strong",{parentName:"li"},"vmax")," - ???")),(0,l.kt)("hr",null),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u0446\u0432\u0435\u0442"},"\u0426\u0432\u0435\u0442"),(0,l.kt)("h3",{id:"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435-\u0446\u0432\u0435\u0442\u0430"},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0446\u0432\u0435\u0442\u0430"),(0,l.kt)("p",null,"aqua, black, blue, fuchsia, gray, green, lime, maroon, navy, olive, orange, purple, red, silver, teal, white, yellow \u0438 \u0434\u0440."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://colorscheme.ru/html-colors.html"},"\u041f\u043e\u043b\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0446\u0432\u0435\u0442\u043e\u0432")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"color: maroon;\ncolor: deeppink;\ncolor: lightblue;\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"hex-\u0444\u043e\u0440\u043c\u0430\u0442-16-\u044b\u0439-\u0444\u043e\u0440\u043c\u0430\u0442-0-9-a-f"},"HEX-\u0444\u043e\u0440\u043c\u0430\u0442 (16-\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 (0-9, a-f))"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"color: #1198f5;\ncolor: #62f808;\ncolor: #0af5c6;\ncolor: #f00; /* shortcut - #ff0000 */\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"rgb-\u0444\u043e\u0440\u043c\u0430\u0442-0-255-red-green-blue"},"RGB-\u0444\u043e\u0440\u043c\u0430\u0442 0-255 (RED, GREEN, BLUE)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"/* 3 \u043a\u0430\u043d\u0430\u043b\u0430 */\ncolor: rgb(56, 140, 123);\ncolor: rgb(30%, 40%, 50%);\ncolor: rgb(0, 0, 0); /* \u0447\u0451\u0440\u043d\u044b\u0439 */\ncolor: rgb(255, 255, 255); /* \u0431\u0435\u043b\u044b\u0439 */\n\n/* 4 \u043a\u0430\u043d\u0430\u043b\u0430 (+ \u0430\u043b\u044c\u0444\u0430-\u043a\u0430\u043d\u0430\u043b - \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0441\u0442\u044c) */\ncolor: rgba(56, 140, 123, 0.85);\ncolor: rgba(50%, 40%, 100%, 0.55);\ncolor: rgba(145, 16, 100, 0.35);\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"hsl-\u0444\u043e\u0440\u043c\u0430\u0442"},"HSL-\u0444\u043e\u0440\u043c\u0430\u0442"),(0,l.kt)("p",null,"\u0420\u0435\u0434\u043a\u043e\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442."),(0,l.kt)("p",null,"1 - \u043f\u043e\u0432\u043e\u0440\u043e\u0442 \u043f\u043e \u0446\u0432\u0435\u0442\u043e\u0432\u043e\u043c\u0443 \u043a\u043e\u043b\u0435\u0441\u0443,\n2 - \u043d\u0430\u0441\u044b\u0449\u0435\u043d\u043d\u043e\u0441\u0442\u044c,\n3 - \u044f\u0440\u043a\u043e\u0441\u0442\u044c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"/* 3 \u043a\u0430\u043d\u0430\u043b\u0430 */\ncolor: hsl(0, 50%, 50%);\ncolor: hsl(0, 75%, 75%);\ncolor: hsl(0, 100%, 50%);\n\n/* 4 \u043a\u0430\u043d\u0430\u043b\u0430 (+ \u0430\u043b\u044c\u0444\u0430-\u043a\u0430\u043d\u0430\u043b - \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0441\u0442\u044c) */\ncolor: hsl(0, 100%, 50%, 0.5);\ncolor: hsl(0, 100%, 50%, 0.75);\ncolor: hsl(0, 100%, 50%, 1.0);\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0441\u0442\u044c"},"\u041f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0441\u0442\u044c"),(0,l.kt)("p",null,"\u0418\u0437\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043e\u0442 0 \u0434\u043e 1 \u0438\u043b\u0438 \u043e\u0442 0 \u0434\u043e 100%."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"opacity: 0; /* 1 \u043f\u043e \u0443\u043c */\ncolor: transparent;\ncolor: rgb(56, 140, 123, 0);\ncolor: hsl(0, 100%, 50%, 0);\n")),(0,l.kt)("h3",{id:"\u0441urrentcolor"},"\u0441urrentColor"),(0,l.kt)("p",null,"\u041f\u0440\u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 color (\u0441\u0442\u0440\u043e\u0433\u043e \u0438\u043b\u0438 \u043f\u043e \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044e), \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u044d\u0442\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e \u0441urrentColor, \u0438 \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c css-\u043a\u043e\u0434 \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0435\u0441\u043b\u0438 \u043d\u0443\u0436\u043d\u043e \u043f\u0440\u0438\u0441\u0432\u043e\u0438\u0442\u044c \u0442\u043e\u0436\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0446\u0432\u0435\u0442\u0430. \u041f\u0440\u0438 \u0442\u0430\u043a\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438 \u0432\u0435\u0440\u043d\u0451\u0442\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0442\u043e\u0433\u043e \u0436\u0435 \u0446\u0432\u0435\u0442\u0430, \u0447\u0442\u043e \u0438 \u0443 color."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"div {\n  color: #888;\n  border: 1px solid currentColor;\n\n  /*  \u0438\u043b\u0438 \u0442\u0430\u043a  */\n  border: 1px solid;\n}\n")))}u.isMDXComponent=!0}}]);