"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[36],{3905:(e,n,l)=>{l.d(n,{Zo:()=>c,kt:()=>d});var t=l(7294);function r(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function a(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,t)}return l}function i(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?a(Object(l),!0).forEach((function(n){r(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function o(e,n){if(null==e)return{};var l,t,r=function(e,n){if(null==e)return{};var l,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)l=a[t],n.indexOf(l)>=0||(r[l]=e[l]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)l=a[t],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var s=t.createContext({}),p=function(e){var n=t.useContext(s),l=n;return e&&(l="function"==typeof e?e(n):i(i({},n),e)),l},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var l=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(l),d=r,x=u["".concat(s,".").concat(d)]||u[d]||f[d]||a;return l?t.createElement(x,i(i({ref:n},c),{},{components:l})):t.createElement(x,i({ref:n},c))}));function d(e,n){var l=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=l.length,i=new Array(a);i[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<a;p++)i[p]=l[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,l)}u.displayName="MDXCreateElement"},6559:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var t=l(7462),r=(l(7294),l(3905));const a={title:"Flexbox",sidebar_position:6},i=void 0,o={unversionedId:"frontend/css/flexbox",id:"frontend/css/flexbox",title:"Flexbox",description:"Flex - byteiota.com",source:"@site/docs/frontend/css/6-flexbox.md",sourceDirName:"frontend/css",slug:"/frontend/css/flexbox",permalink:"/knowledge-bank/docs/frontend/css/flexbox",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/css/6-flexbox.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Flexbox",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u041f\u043e\u0437\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",permalink:"/knowledge-bank/docs/frontend/css/position"},next:{title:"CSS-Grid",permalink:"/knowledge-bank/docs/frontend/css/css-grid"}},s={},p=[{value:"Flex-\u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c (\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440)",id:"flex-\u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440",level:2},{value:"flex-direction",id:"flex-direction",level:3},{value:"flex-wrap",id:"flex-wrap",level:3},{value:"flex-flow",id:"flex-flow",level:3},{value:"justify-content",id:"justify-content",level:3},{value:"align-items",id:"align-items",level:3},{value:"align-content",id:"align-content",level:3},{value:"Flex-\u043f\u043e\u0442\u043e\u043c\u043e\u043a",id:"flex-\u043f\u043e\u0442\u043e\u043c\u043e\u043a",level:2},{value:"margin \u0438 \u0444\u043b\u0435\u043a\u0441-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b",id:"margin-\u0438-\u0444\u043b\u0435\u043a\u0441-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b",level:3},{value:"align-self",id:"align-self",level:3},{value:"order",id:"order",level:3},{value:"flex-basic",id:"flex-basic",level:3},{value:"flex-grow",id:"flex-grow",level:3},{value:"flex-shrink",id:"flex-shrink",level:3},{value:"\u041a\u0440\u0430\u0442\u043a\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c",id:"\u043a\u0440\u0430\u0442\u043a\u0430\u044f-\u0437\u0430\u043f\u0438\u0441\u044c",level:3},{value:"\u0412\u0430\u0440\u0438\u0430\u0446\u0438\u0438",id:"\u0432\u0430\u0440\u0438\u0430\u0446\u0438\u0438",level:3},{value:"\u0426\u0435\u043d\u0442\u0440\u043e\u0432\u043a\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e flex",id:"\u0446\u0435\u043d\u0442\u0440\u043e\u0432\u043a\u0430-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430-\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-flex",level:2}],c={toc:p};function f(e){let{components:n,...l}=e;return(0,r.kt)("wrapper",(0,t.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://byteiota.com/flexbox-conatiner/"},"Flex - byteiota.com")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div class="flex-container">\n  <div class="flex-child">A</div>\n  <div class="flex-child">B</div>\n  <div class="flex-child">C</div>\n  ...\n</div>\n')),(0,r.kt)("h2",{id:"flex-\u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440"},"Flex-\u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c (\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440)"),(0,r.kt)("p",null,"\u0412\u043d\u0443\u0442\u0440\u0438 flex-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u0431\u0443\u0434\u0443\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u0441\u044f flex-\u043f\u043e\u0442\u043e\u043c\u043a\u0438. \u0415\u0441\u043b\u0438 \u044f\u0432\u043d\u043e \u0438\u043c \u043d\u0435 \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044c \u0444\u0438\u043a\u0441. \u0432\u044b\u0441\u043e\u0442\u0443, \u0430 \u0443 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f \u0431\u0443\u0434\u0435\u0442 \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u043f\u043e \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u0438, \u0442\u043e flex-\u043f\u043e\u0442\u043e\u043c\u043a\u0438 \u0431\u0443\u0434\u0443\u0442 \u0440\u0430\u0441\u0442\u044f\u0433\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u043e \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u0438."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".flex-container {\n  display: flex | inline-flex;\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flex")," - \u0448\u0438\u0440\u0438\u043d\u043e\u0439 100% (\u043a\u0430\u043a \u0431\u043b\u043e\u0447\u043d\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"inline-flex")," - \u0448\u0438\u0440\u0438\u043d\u0430 \u043f\u043e \u043a\u043e\u0442\u0435\u043d\u0442\u0443 (\u043a\u0430\u043a inline-block)")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"flex-direction"},"flex-direction"),(0,r.kt)("p",null,"\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 flex-\u043e\u0441\u0438."),(0,r.kt)("img",{src:"../../../../img/css/flex-direction.png",alt:"flex-direction.png",width:"600"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".flex-container {\n  flex-direction: row* | row-reverse | column | column-reverse;\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"flex-wrap"},"flex-wrap"),(0,r.kt)("p",null,"\u041f\u0415\u0420\u0415\u041d\u041e\u0421 flex-\u043f\u043e\u0442\u043e\u043c\u043a\u043e\u0432."),(0,r.kt)("p",null,"\u041f\u043e \u0443\u043c* \u043d\u0435 \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u044f\u0442\u0441\u044f (nowrap). \u0415\u0441\u043b\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043d\u0435 \u043f\u043e\u043c\u0435\u0449\u0430\u044e\u0442\u0441\u044f, \u0442\u043e \u043e\u043d\u0438 \u0432\u0441\u0451-\u0440\u0430\u0432\u043d\u043e \u0431\u0443\u0434\u0443\u0442 \u0432 \u043e\u0434\u043d\u0443 \u0441\u0442\u0440\u043e\u043a\u0443, \u0443 \u043d\u0438\u0445 \u0431\u0443\u0434\u0435\u0442 \u0443\u043c\u0435\u043d\u044c\u0448\u0430\u0442\u044c\u0441\u044f \u0448\u0438\u0440\u0438\u043d\u0430, \u0434\u0430\u0436\u0435 \u0435\u0441\u043b\u0438 \u0435\u0451 \u0440\u0430\u0437\u043c\u0435\u0440 \u0431\u044b\u043b \u0437\u0430\u0434\u0430\u043d.\n\u0414\u043b\u044f column \u043d\u0435 \u0438\u043c\u0435\u0435\u0442 \u0441\u043c\u044b\u0441\u043b\u0430."),(0,r.kt)("img",{src:"../../../../img/css/flex-wrap.png",alt:"flex-wrap.png",width:"600"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".flex-container {\n  flex-wrap: nowrap* | wrap | wrap-reverse; \n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"flex-flow"},"flex-flow"),(0,r.kt)("p",null,"\u041a\u0440\u0430\u0442\u043a\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c flex-direction | flex-wrap;"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".flex-container {\n  flex-flow: row wrap;\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"justify-content"},"justify-content"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0420\u0410\u0421\u041f\u0420\u0415\u0414\u0415\u041d\u0418\u0415")," \u0444\u043b\u0435\u043a\u0441-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0432\u0434\u043e\u043b\u044c ",(0,r.kt)("strong",{parentName:"p"},"\u0424\u041b\u0415\u041a\u0421-\u043e\u0441\u0438")," \u0410\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e, \u043f\u0440\u0438 \u043d\u0430\u043b\u0438\u0447\u0438\u0438 \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0432\u0434\u043e\u043b\u044c \u0424\u041b\u0415\u041a\u0421-\u043e\u0441\u0438"),(0,r.kt)("img",{src:"../../../../img/css/justify-content.png",alt:"justify-content.png",width:"600"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".flex-container {\n  justify-content: flex-start* | flex-end | center | space-around | space-between | space-evenly;\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"align-items"},"align-items"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0412\u042b\u0420\u0410\u0412\u041d\u0418\u0412\u0410\u041d\u0418\u0415")," \u0444\u043b\u0435\u043a\u0441-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u043f\u043e ",(0,r.kt)("strong",{parentName:"p"},"\u041f\u041e\u041f\u0415\u0420\u0415\u0427\u041d\u041e\u0419 \u041b\u0418\u041d\u0418\u0418")," (\u043f\u0440\u043e\u0442\u0438\u0432\u043e\u043f\u043e\u043b\u043e\u0436\u043d\u043e\u0439 flex-\u043e\u0441\u0438).  \u0410\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e, \u043f\u0440\u0438 \u043d\u0430\u043b\u0438\u0447\u0438\u0438 \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0432\u0434\u043e\u043b\u044c \u043f\u043e\u043f\u0435\u0440\u0435\u0447\u043d\u043e\u0439 \u043e\u0441\u0438, \u043b\u0438\u0431\u043e \u043a\u043e\u0433\u0434\u0430 \u0432\u044b\u0441\u043e\u0442\u0430 \u0444\u043b\u0435\u043a\u0441-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0440\u0430\u0437\u043d\u0430\u044f"),(0,r.kt)("img",{src:"../../../../img/css/align-items.png",alt:"align-items.png",width:"600"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".flex-container {\n  align-items: stretch* | flex-start | flex-end | center | baseline;\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"align-content"},"align-content"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0412\u042b\u0420\u0410\u0412\u041d\u0418\u0412\u0410\u041d\u0418\u0415 \u0420\u042f\u0414\u041e\u0412")," \u0444\u043b\u0435\u043a\u0441-\u043f\u043e\u0442\u043e\u043c\u043a\u043e\u0432 \u0432\u0434\u043e\u043b\u044c \u043f\u043e\u043f\u0435\u0440\u0435\u0447\u043d\u043e\u0439 \u043e\u0441\u0438. \u0410\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e, \u043f\u0440\u0438 \u043d\u0430\u043b\u0438\u0447\u0438\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0440\u044f\u0434\u043e\u0432 flex-\u043f\u043e\u0442\u043e\u043c\u043a\u043e\u0432 (\u0434\u043e\u043b\u0436\u043d\u043e \u0441\u0442\u043e\u044f\u0442\u044c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e ",(0,r.kt)("inlineCode",{parentName:"p"},"flex-wrap: wrap"),") \u0438 \u043d\u0430\u043b\u0438\u0447\u0438\u0438 \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u043f\u043e \u043f\u043e\u043f\u0435\u0447\u0435\u0440\u043d\u043e\u0439 \u043e\u0441\u0438 \u0444\u043b\u0435\u043a\u0441 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430. \u041d\u0435 \u0438\u043c\u0435\u0435\u0442 \u0441\u043c\u044b\u0441\u043b\u0430 \u043f\u0440\u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"flex-wrap: nowrap;")),(0,r.kt)("img",{src:"../../../../img/css/align-content.png",alt:"align-content.png",width:"600"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".flex-container {\n  align-content: flex-start* | flex-end | center | stretch | space-between | space-around;\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"flex-\u043f\u043e\u0442\u043e\u043c\u043e\u043a"},"Flex-\u043f\u043e\u0442\u043e\u043c\u043e\u043a"),(0,r.kt)("p",null,"\u0428\u0438\u0440\u0438\u043d\u0430, \u0432\u044b\u0441\u043e\u0442\u0430, \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0435 \u043e\u0442\u0441\u0442\u0443\u043f\u044b \u0438 \u0440\u0430\u043c\u043a\u0438 \u0434\u043b\u044f \u0444\u043b\u0435\u043a\u0441-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 \u0438 \u0444\u043b\u0435\u043a\u0441-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u043a\u0430\u043a \u043e\u0431\u044b\u0447\u043d\u043e: \u043e\u0431\u0449\u0438\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0441\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0438\u0437 \u044d\u0442\u0438\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432. \u042d\u0442\u043e \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0442\u0430\u043a \u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u043c\u0435\u043d\u044f\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 box-sizing."),(0,r.kt)("p",null,"\u0415\u0441\u0442\u044c \u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0430\u0436\u043d\u044b\u0445 \u043e\u0442\u043b\u0438\u0447\u0438\u0439:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u0424\u043b\u0435\u043a\u0441-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b, \u0432 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 \u0431\u043b\u043e\u0447\u043d\u044b\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432, \u043d\u0435 \u0440\u0430\u0441\u0442\u044f\u0433\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u043d\u0430 \u0432\u0441\u044e \u0448\u0438\u0440\u0438\u043d\u0443 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e;"),(0,r.kt)("li",{parentName:"ol"},"\u041d\u0430 \u0444\u043b\u0435\u043a\u0441-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043d\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e float.")),(0,r.kt)("h3",{id:"margin-\u0438-\u0444\u043b\u0435\u043a\u0441-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b"},"margin \u0438 \u0444\u043b\u0435\u043a\u0441-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u0432\u043d\u0435\u0448\u043d\u0438\u0435 \u043e\u0442\u0441\u0442\u0443\u043f\u044b \u043d\u0435 \u0441\u0445\u043b\u043e\u043f\u044b\u0432\u0430\u044e\u0442\u0441\u044f, \u043d\u0438 \u043f\u043e \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u0438, \u043d\u0438 \u043f\u043e \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u0438;"),(0,r.kt)("li",{parentName:"ol"},"\u0432\u043d\u0435\u0448\u043d\u0438\u0435 \u043e\u0442\u0441\u0442\u0443\u043f\u044b \u043d\u0435 \u0432\u044b\u043f\u0430\u0434\u0430\u044e\u0442, \u043d\u0438 \u0438\u0437 \u0444\u043b\u0435\u043a\u0441-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430, \u043d\u0438 \u0438\u0437 \u0444\u043b\u0435\u043a\u0441-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432;"),(0,r.kt)("li",{parentName:"ol"},"\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,r.kt)("strong",{parentName:"li"},"margin: auto")," \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u043e \u043f\u0440\u0435\u043c\u0438\u044e \u0436\u0443\u0440\u043d\u0430\u043b\u0430 \u0424\u043e\u0440\u0431\u0441 \u0432 \u043d\u043e\u043c\u0438\u043d\u0430\u0446\u0438\u0438 \xab\u0421\u0430\u043c\u043e\u0435 \u0432\u043b\u0438\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 CSS-\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0432\u043d\u0443\u0442\u0440\u0438 \u0444\u043b\u0435\u043a\u0441-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430\xbb.\n\u041f\u0440\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0438 auto \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e justify-content, align-items \u0438 align-self \u043b\u043e\u043c\u0430\u0435\u0442\u0441\u044f."),(0,r.kt)("li",{parentName:"ol"},"\u041f\u0440\u0438 row, \u0435\u0441\u043b\u0438 \u0437\u0430\u0434\u0430\u0442\u044c \u0444\u043b\u0435\u043a\u0441-\u043f\u043e\u0442\u043e\u043c\u043a\u0443 margin-left: auto, \u0442\u043e \u043e\u043d \u043f\u0440\u0438\u0436\u043c\u0435\u0442\u0441\u044f \u043a \u043f\u0440\u0430\u0432\u043e\u043c\u0443 \u043a\u0440\u0430\u044e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430. "),(0,r.kt)("li",{parentName:"ol"},"\u041f\u0440\u0438 column, \u0435\u0441\u043b\u0438 \u0437\u0430\u0434\u0430\u0442\u044c \u0444\u043b\u0435\u043a\u0441-\u043f\u043e\u0442\u043e\u043c\u043a\u0443 margin-top: auto, \u0442\u043e \u043e\u043d \u043f\u0440\u0438\u0436\u043c\u0435\u0442\u0441\u044f \u043a\u043e \u0434\u043d\u0443 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430. ")),(0,r.kt)("p",null,"\u0412\u0441\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u044b \u0434\u0430\u043b\u0435\u0435 \u043f\u0440\u0438\u0434\u0443\u043c\u0430\u043b\u0438 \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044c \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u044b \u0444\u043b\u0435\u043a\u0441-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c, \u0430 \u0447\u0442\u043e\u0431\u044b \u043e\u043d\u0438 \u0430\u0434\u0430\u043f\u0442\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"align-self"},"align-self"),(0,r.kt)("p",null,"\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0434\u043b\u044f flex-\u043f\u043e\u0442\u043e\u043c\u043a\u0430. \u0412\u042b\u0420\u0410\u0412\u041d\u0418\u0412\u0410\u041d\u0418\u0415 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0444\u043b\u0435\u043a\u0441-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430. \u041f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 align-items"),(0,r.kt)("img",{src:"../../../../img/css/align-self.png",alt:"align-self.png",width:"600"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".flex-child {\n  align-self: flex-start | center | flex-end | baseline;\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"order"},"order"),(0,r.kt)("p",null,'\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0434\u043b\u044f flex-\u043f\u043e\u0442\u043e\u043c\u043a\u0430. \u041f\u041e\u0420\u042f\u0414\u041a\u041e\u0412\u042b\u0419 \u041d\u041e\u041c\u0415\u0420 \u0444\u043b\u0435\u043a\u0441-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0427\u0435\u043c \u043c\u0435\u043d\u044c\u0448\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 order, \u0442\u0435\u043c "\u043f\u0435\u0440\u0432\u0435\u0435" \u044d\u043b\u0435\u043c\u0435\u043d\u0442. \u041c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f "\u043f\u0435\u0440\u0435\u0441\u0442\u0440\u043e\u043d\u0438\u0438" \u0441\u0435\u0442\u043a\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b.'),(0,r.kt)("img",{src:"../../../../img/css/order.png",alt:"order.png",width:"600"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".flex-child {\n  order: <number>;\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"flex-basic"},"flex-basic"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0411\u0430\u0437\u0438\u0441\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432\u0434\u043e\u043b\u044c \u0424\u041b\u0415\u041a\u0421-\u041e\u0421\u0418"),". \u041f\u0440\u0438 row \u0431\u0430\u0437\u0438\u0441 \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0448\u0438\u0440\u0438\u043d\u0443, \u043f\u0440\u0438 column - \u0432\u044b\u0441\u043e\u0442\u0443, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043a\u0430\u043a \u0432\u044b\u0441\u043e\u0442\u043e\u0439, \u0442\u0430\u043a \u0438 \u0448\u0438\u0440\u0438\u043d\u043e\u0439 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e."),(0,r.kt)("img",{src:"../../../../img/css/flex-basis.png",alt:"flex-basis.png",width:"600"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},".flex-child {\n  flex-basis: auto* | <width>;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"auto")," - \u0448\u0438\u0440\u0438\u043d\u0430 \u043f\u043e \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0443,\n",(0,r.kt)("inlineCode",{parentName:"p"},"100px")," - \u043c\u0430\u043a\u0441. \u0448\u0438\u0440\u0438\u043d\u0430 \u0431\u0443\u0434\u0435\u0442 100px, \u0435\u0441\u043b\u0438 \u043d\u0435 \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d flex-grow"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"flex-grow"},"flex-grow"),(0,r.kt)("p",null,"\u0420\u0410\u0421\u0422\u042f\u0416\u0415\u041d\u0418\u0415 \u0444\u043b\u0435\u043a\u0441-\u043f\u043e\u0442\u043e\u043c\u043a\u0430 \u043d\u0430 \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u0432\u043d\u0443\u0442\u0440\u0438 \u0444\u043b\u0435\u043a\u0441-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430."),(0,r.kt)("img",{src:"../../../../img/css/flex-grow.png",alt:"flex-grow.png",width:"600"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".flex-child {\n  flex-grow: 0* | 1 | <number>;\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"flex-shrink"},"flex-shrink"),(0,r.kt)("p",null,"\u0423\u0416\u0418\u041c\u0410\u041d\u0418\u0415 \u0444\u043b\u0435\u043a\u0441-\u043f\u043e\u0442\u043e\u043c\u043a\u0430 \u043f\u0440\u0438 \u0443\u043c\u0435\u043d\u044c\u0448\u0435\u043d\u0438\u0438 \u0448\u0438\u0440\u0438\u043d\u044b \u0444\u043b\u0435\u043a\u0441-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430. \u0420\u0410\u0411\u041e\u0422\u0410\u0415\u0422 \u0422\u041e\u041b\u042c\u041a\u041e \u0441 ",(0,r.kt)("inlineCode",{parentName:"p"},"flex-wrap: nowrap"),"."),(0,r.kt)("p",null,"\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u043e flex-shrink \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u043d\u0435\u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0447\u0438\u0441\u043b\u043e\u0432\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f, \u0435\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e 1."),(0,r.kt)("img",{src:"../../../../img/css/flex-shrink.png",alt:"flex-shrink.png",width:"600"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".flex-child {\n  flex-grow: 1* | 0 | <number>;\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u043a\u0440\u0430\u0442\u043a\u0430\u044f-\u0437\u0430\u043f\u0438\u0441\u044c"},"\u041a\u0440\u0430\u0442\u043a\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c"),(0,r.kt)("p",null,"\u0412 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430\u0445 \u043d\u0435\u043f\u043e\u043b\u043d\u044b\u0435 \u0438\u043b\u0438 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 flex \u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0441 \u043e\u0448\u0438\u0431\u043a\u0430\u043c\u0438. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u043b\u0443\u0447\u0448\u0435 \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044c \u0432\u0441\u0435 \u0442\u0440\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0432 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0438 \u044d\u0442\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"flex: | flex-grow | flex-shrink | flex-basis |;")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},".flex-child {\n  flex: 1 0 100px ;\n\n  flex: initial;    // -> flex: 0 1 auto;\n  flex: auto;       // -> flex: 1 1 auto;\n  flex: none;       // -> flex: 0 0 auto;\n  flex: 1 0;        // -> flex: 1 0 0%;\n  flex: 1;          // -> flex: 1 1 0%;\n}\n")),(0,r.kt)("h3",{id:"\u0432\u0430\u0440\u0438\u0430\u0446\u0438\u0438"},"\u0412\u0430\u0440\u0438\u0430\u0446\u0438\u0438"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},".flex-child {\n  // \u0448\u0438\u0440\u0438\u043d\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430\n  flex-basis: auto; \n\n  // \u0448\u0438\u0440\u0438\u043d\u0430 \u0432\u0441\u0435\u0433\u0434\u0430 \u0431\u0443\u0434\u0435\u0442 200px\n  flex: 0 0 200px ;\n\n  // \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0441\u0442\u044f\u0433\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u043e \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u043c\u0443 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0443, \u0443\u0436\u0438\u043c\u0430\u0442\u044c\u0441\u044f \u0434\u043e \u0431\u0430\u0437\u0438\u0441\u0430 (min-width: 200px)\n  flex: 1 0 200px;\n\n  // max-width: 200px, \u0443\u0436\u0438\u043c\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u043f\u043e\u0440\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e \u0431\u0430\u0437\u0438\u0441\u0443\n  flex: 0 1 200px;\n}\n")),(0,r.kt)("h2",{id:"\u0446\u0435\u043d\u0442\u0440\u043e\u0432\u043a\u0430-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430-\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-flex"},"\u0426\u0435\u043d\u0442\u0440\u043e\u0432\u043a\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e flex"),(0,r.kt)("p",null,"\u0423 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e, \u0430 \u0443 \u0444\u043b\u0435\u043a\u0441-\u043f\u043e\u0442\u043e\u043c\u043a\u0430 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0444\u0438\u043a\u0441. \u0440\u0430\u0437\u043c\u0435\u0440\u044b \u0448\u0438\u0440\u0438\u043d\u044b, \u0432\u044b\u0441\u043e\u0442\u044b \u0438\u043b\u0438 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},".flex-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n")),(0,r.kt)("hr",null))}f.isMDXComponent=!0}}]);