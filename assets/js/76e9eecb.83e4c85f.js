"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[6760],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(t),k=r,d=u["".concat(o,".").concat(k)]||u[k]||c[k]||i;return t?a.createElement(d,l(l({ref:n},m),{},{components:t})):a.createElement(d,l({ref:n},m))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3484:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const i={title:"\u041b\u0443\u0447\u0448\u0438\u0435 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438",sidebar_position:3},l=void 0,s={unversionedId:"frontend/react/archive/best-practice",id:"frontend/react/archive/best-practice",title:"\u041b\u0443\u0447\u0448\u0438\u0435 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438",description:"Atomic design-\u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u044f:",source:"@site/docs/frontend/react/8-archive/best-practice.md",sourceDirName:"frontend/react/8-archive",slug:"/frontend/react/archive/best-practice",permalink:"/knowledge-bank/docs/frontend/react/archive/best-practice",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/react/8-archive/best-practice.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u041b\u0443\u0447\u0448\u0438\u0435 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441",permalink:"/knowledge-bank/docs/frontend/react/archive/syntax"},next:{title:"\u041b\u0438\u043d\u0442\u0435\u0440\u044b \u0438 \u0442\u0435\u0441\u0442\u0435\u0440\u044b",permalink:"/knowledge-bank/docs/frontend/react/archive/linters"}},o={},p=[{value:"Atomic design-\u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u044f:",id:"atomic-design-\u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u044f",level:2},{value:"README.md:",id:"readmemd",level:2},{value:"CodeStyle:",id:"codestyle",level:2},{value:"React:",id:"react",level:2},{value:"\u041c\u0430\u043f\u0438\u043d\u0433",id:"\u043c\u0430\u043f\u0438\u043d\u0433",level:2},{value:"\u041e\u0431\u044b\u0447\u043d\u044b\u0439 \u043c\u0430\u043f\u0438\u043d\u0433",id:"\u043e\u0431\u044b\u0447\u043d\u044b\u0439-\u043c\u0430\u043f\u0438\u043d\u0433",level:3},{value:"\u0428\u043e\u0440\u0442\u043a\u0430\u0442",id:"\u0448\u043e\u0440\u0442\u043a\u0430\u0442",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0446\u0435\u043f\u043e\u0447\u043a\u0438 \u0448\u043e\u0440\u0442\u043a\u0430\u0442\u043e\u0432",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0446\u0435\u043f\u043e\u0447\u043a\u0438-\u0448\u043e\u0440\u0442\u043a\u0430\u0442\u043e\u0432",level:3},{value:"Spread \u0438 \u043c\u0430\u043f\u0438\u043d\u0433",id:"spread-\u0438-\u043c\u0430\u043f\u0438\u043d\u0433",level:3},{value:"\u041f\u043b\u043e\u0445\u0438\u0435 \u0438 \u0445\u043e\u0440\u043e\u0448\u0438\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u043b\u043e\u0445\u0438\u0435-\u0438-\u0445\u043e\u0440\u043e\u0448\u0438\u0435-\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],m={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"atomic-design-\u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u044f"},"Atomic design-\u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u044f:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0412\u0441\u0435 \u0444\u0430\u0439\u043b\u044b \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c ",(0,r.kt)("strong",{parentName:"li"},"\u0441\u0442\u0440\u043e\u0433\u043e \u0441\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0438 \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u044b \u043f\u043e \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f\u043c"),"."),(0,r.kt)("li",{parentName:"ul"},"\u0427\u0442\u043e-\u0442\u043e \u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u0434\u043e\u043b\u0436\u043d\u043e ",(0,r.kt)("strong",{parentName:"li"},"\u0441\u043e\u0431\u0438\u0440\u0430\u0442\u044c\u0441\u044f \u0438\u0437 \u0447\u0435\u0433\u043e-\u0442\u043e \u043c\u0430\u043b\u043e\u0433\u043e"),"."),(0,r.kt)("li",{parentName:"ul"},"\u0415\u0441\u043b\u0438 \u043f\u0440\u043e\u0435\u043a\u0442 \u0445\u043e\u0440\u043e\u0448\u043e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d, \u0442\u043e \u0435\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u043e \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c (\u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443, \u043b\u043e\u0433\u0438\u043a\u0443, \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u0438 \u0442.\u0434.)")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"readmemd"},"README.md:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0421\u0442\u0438\u043b\u044c \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u0434\u0430 \u0438 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 ",(0,r.kt)("strong",{parentName:"li"},"\u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043e\u043f\u0438\u0441\u0430\u043d\u044b \u0432 README.md"),", \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u043e\u0433\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u0430 (\u043a\u0430\u043a \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443/\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442, \u043a\u0430\u043a \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c \u0441\u0442\u043e\u0440, \u043a\u0430\u043a \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0441\u0442\u043e\u0440, \u043a\u0430\u043a \u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441 \u0438 \u0442.\u0434.)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f")," \u0441 API \u0442\u0430\u043a\u0436\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043e\u043f\u0438\u0441\u0430\u043d\u044b \u0432 README.md."),(0,r.kt)("li",{parentName:"ul"},"\u0412 \u0438\u0434\u0435\u0430\u043b\u0435, \u0435\u0441\u043b\u0438 \u043d\u043e\u0432\u044b\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442 \u043d\u0430 \u043f\u0440\u043e\u0435\u043a\u0442, \u043e\u043d ",(0,r.kt)("strong",{parentName:"li"},"\u0434\u043e\u043b\u0436\u0435\u043d \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0432\u0441\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f, \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0432 README.md"),".")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"codestyle"},"CodeStyle:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0421\u043e\u0431\u043b\u044e\u0434\u0430\u0442\u044c ",(0,r.kt)("strong",{parentName:"li"},"\u0435\u0434\u0438\u043d\u0441\u0442\u0432\u043e \u0441\u0442\u0438\u043b\u044f")," \u043e\u0444\u0440\u043c\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u0434\u0430 \u0438 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b \u043f\u0440\u043e\u0435\u043a\u0442\u0430."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u0427\u0435\u043c \u043c\u0435\u043d\u044c\u0448\u0435 \u043a\u043e\u0434\u0430 - \u0442\u0435\u043c \u043b\u0443\u0447\u0448\u0435"),". (\u0425\u043e\u0440\u043e\u0448\u0438\u0439 \u043a\u043e\u0434 - \u044d\u0442\u043e \u043a\u043e\u0434, \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043d\u0435\u0442)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u0427\u0438\u0442\u0430\u0435\u043c\u044b\u0439 \u043a\u043e\u0434")," \u043b\u0443\u0447\u0448\u0435 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u0438\u0441\u0442\u0438\u0447\u043d\u043e\u0433\u043e."),(0,r.kt)("li",{parentName:"ul"},"\u0412 \u043f\u0440\u043e\u0435\u043a\u0442\u0435 ",(0,r.kt)("strong",{parentName:"li"},"\u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u0439"),", \u043a\u043e\u0434 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0445\u043e\u0440\u043e\u0448\u043e \u0432\u043e\u0441\u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u043c\u044b\u043c. \u041a\u043e\u043b-\u0432\u043e \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u0439 \u043d\u0443\u0436\u043d\u043e \u0441\u0432\u043e\u0434\u0438\u0442\u044c \u043a \u043c\u0438\u043d\u0438\u043c\u0443\u043c\u0443!."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u0421\u0442\u0430\u0440\u0430\u0442\u044c\u0441\u044f \u043d\u0435 \u043c\u0443\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435"),", \u0443\u0445\u0443\u0434\u0448\u0430\u0435\u0442\u0441\u044f \u0447\u0438\u0442\u0430\u0435\u043c\u043e\u0441\u0442\u044c \u043a\u043e\u0434\u0430."),(0,r.kt)("li",{parentName:"ul"},"\u0421\u0442\u0430\u0442\u0438\u0447\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 ",(0,r.kt)("strong",{parentName:"li"},"\u0432\u044b\u043d\u043e\u0441\u0438\u0442\u044c \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b"),"."),(0,r.kt)("li",{parentName:"ul"},"\u0412 \u0438\u0434\u0435\u0430\u043b\u0435, \u043a\u043e\u0434 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c ",(0,r.kt)("strong",{parentName:"li"},"\u043f\u0440\u043e\u0441\u0442\u044b\u043c \u0438 \u043f\u043e\u043d\u044f\u0442\u043d\u044b\u043c")," (KISS-\u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u044f). \u041f\u043e\u043d\u044f\u0442\u043d\u044b\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b \u0445\u043e\u0440\u043e\u0448\u043e \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u044e\u0442\u0441\u044f. \u0412\u0441\u0435 \u0433\u0435\u043d\u0438\u0430\u043b\u044c\u043d\u043e\u0435 - \u043f\u0440\u043e\u0441\u0442\u043e\u0435, \u0441\u043b\u043e\u0436\u043d\u043e\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043e\u0431\u043e\u0441\u043d\u043e\u0432\u0430\u043d\u043e."),(0,r.kt)("li",{parentName:"ul"},"\u041f\u043e\u0432\u0442\u043e\u0440\u044f\u044e\u0449\u0438\u0435\u0441\u044f \u0431\u043b\u043e\u043a\u0438 \u043d\u0443\u0436\u043d\u043e ",(0,r.kt)("strong",{parentName:"li"},"\u0432\u044b\u043d\u043e\u0441\u0438\u0442\u044c \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u043e\u0431\u0449\u0438\u0435 \u043f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b")," (DRY-\u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u044f)."),(0,r.kt)("li",{parentName:"ul"},"\u0412 \u0438\u0434\u0435\u0430\u043b\u0435, \u0444\u0430\u0439\u043b \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0434\u043e\u043b\u0436\u0435\u043d ",(0,r.kt)("strong",{parentName:"li"},"\u0440\u0430\u0437\u043c\u0435\u0449\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u044d\u043a\u0440\u0430\u043d\u0435 IDE \u0431\u0435\u0437 \u0441\u043a\u0440\u043e\u043b\u0430"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'"\u041d\u0435 \u0438\u0437\u043e\u0431\u0440\u0435\u0442\u0430\u0442\u044c \u0432\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434!"')," \u0434\u043b\u044f \u043a\u0430\u043a\u0438\u0445-\u043b\u0438\u0431\u043e \u0441\u043b\u043e\u0436\u043d\u044b\u0445 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0439, \u0430 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0433\u043e\u0442\u043e\u0432\u044b\u0435 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 (\u0432\u0441\u0435 \u0443\u0436\u0435 \u0434\u0430\u0432\u043d\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043e \u043f\u043e\u0447\u0442\u0438 \u043d\u0430 \u0432\u0441\u0435 \u0441\u043b\u0443\u0447\u0430\u0438 \u0436\u0438\u0437\u043d\u0438). \u0421 \u0434\u0440\u0443\u0433\u043e\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u044b, \u0435\u0441\u043b\u0438 \u043a\u0430\u043a\u0430\u044f-\u0442\u043e \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u043e\u0434\u0438\u043d \u0440\u0430\u0437 \u0434\u043b\u044f \u0447\u0435\u0433\u043e-\u0442\u043e \u043e\u0434\u043d\u043e\u0433\u043e, \u0442\u043e \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u0434\u0443\u043c\u0430\u0442\u044c\u0441\u044f \u043e \u0435\u0451 \u0446\u0435\u043b\u0435\u0441\u043e\u043e\u0431\u0440\u0430\u0437\u043d\u043e\u0441\u0442\u0438."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TypeScript \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043f\u0440\u043e\u0441\u0442\u044b\u043c \u0438 \u043f\u043e\u043d\u044f\u0442\u043d\u044b\u043c"),", \u043e\u043d \u0434\u043e\u043b\u0436\u0435\u043d \u043f\u043e\u043c\u043e\u0433\u0430\u0442\u044c, \u0430 \u043d\u0435 \u0443\u0441\u043b\u043e\u0436\u043d\u044f\u0442\u044c, \u043d\u0435 \u043d\u0443\u0436\u043d\u043e \u0432 \u043d\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u043a\u0438\u0435-\u0442\u043e \u0441\u043b\u043e\u0436\u043d\u044b\u0435 \u043d\u0435\u043f\u043e\u043d\u044f\u0442\u043d\u044b\u0435 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438, \u0442\u0438\u043f\u043e\u0432 \u0438 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u0432 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u0415c\u043b\u0438 \u043c\u043d\u043e\u0433\u043e \u0443\u0441\u043b\u043e\u0432\u0438\u0439"),", \u0442\u043e \u043b\u0443\u0447\u0448\u0435 \u0438\u0445 \u0438\u043d\u043a\u0430\u043f\u0441\u0443\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u0443\u044e \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u0418\u0437\u0431\u0435\u0433\u0430\u0442\u044c \u0438\u0437\u043b\u0438\u0448\u043d\u0435\u0439 \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u0438"),". \u0415\u0441\u043b\u0438 \u0435\u0441\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0447\u0442\u043e-\u043d\u0438\u0431 \u0432\u044b\u043d\u0435\u0441\u0442\u0438 \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0431\u043b\u043e\u043a - \u0442\u043e \u043b\u0443\u0447\u0448\u0435 \u0432\u044b\u043d\u043e\u0441\u0438\u0442\u044c."),(0,r.kt)("li",{parentName:"ul"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 ",(0,r.kt)("strong",{parentName:"li"},"\u043b\u0438\u043d\u0442\u0435\u0440\u043e\u0432, \u0444\u043e\u0440\u043c\u0430\u0442\u0435\u0440\u043e\u0432, \u0442\u0435\u0441\u0442\u0435\u0440\u043e\u0432 \u0438 \u043f\u0440\u0435\u043a\u043e\u043c\u043c\u0438\u0442\u0435\u0440\u043e\u0432")," (ESLint, Stylelint, prettier) \u0434\u043e\u043b\u0436\u043d\u043e \u043f\u043e\u043c\u043e\u0433\u0430\u0442\u044c, \u0430 \u043d\u0435 \u043c\u0435\u0448\u0430\u0442\u044c \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435."),(0,r.kt)("li",{parentName:"ul"},"\u0415\u0441\u043b\u0438 \u0440\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u043d\u0433 \u0438 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u043a\u043e\u0434\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u0439 \u0438 \u0443\u0445\u0443\u0434\u0448\u0430\u0435\u0442 \u0447\u0438\u0442\u0430\u0435\u043c\u043e\u0441\u0442\u044c, \u0442\u043e ",(0,r.kt)("strong",{parentName:"li"},"\u0442\u0430\u043a\u043e\u0439 \u0440\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u043d\u0433 \u043f\u043b\u043e\u0445\u043e\u0439")," (\u0438\u0437\u043b\u0438\u0448\u043d\u044f\u044f \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u0438 \u043e\u0432\u0435\u0440\u0438\u043d\u0436\u0435\u043d\u0438\u0440\u0438\u043d\u0433).")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"react"},"React:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u0426\u0435\u043b\u0430\u044f \u043f\u043e\u0440\u0442\u044f\u043d\u043a\u0430 \u043f\u0440\u043e\u043f\u0441\u043e\u0432 - \u044d\u0442\u043e \u043f\u043b\u043e\u0445\u043e!!!")," \u0418 \u043f\u043e\u0442\u043e\u043c \u0442\u0430\u043a\u043e\u0435 \u0442\u0440\u0443\u0434\u043d\u043e \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044c (\u0442\u0430\u043a\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u043d\u0443\u0436\u043d\u043e \u0434\u0435\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0432 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e parts/)."),(0,r.kt)("li",{parentName:"ul"},"\u0424\u0430\u0439\u043b\u044b \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u0440\u043e\u0443\u0442\u043e\u0432 (\u0441\u0442\u0440\u0430\u043d\u0438\u0446) \u0438\u043b\u0438 \u043e\u0431\u044a\u0435\u043c\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0432\u0441\u0435\u0433\u0434\u0430 ",(0,r.kt)("strong",{parentName:"li"},"\u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c hoc-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u043c\u0438"),", \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0443\u0436\u0435 \u0438\u043c\u043f\u043e\u0440\u0442\u044f\u0442\u0441\u044f \u043f\u043e\u0434-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u0442\u044b \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0438\u0437 components/pages/pageName."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u041d\u0435 \u0432\u043c\u0435\u0448\u0438\u0432\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u043b\u0430\u0439\u043d-\u0441\u0442\u0438\u043b\u0435\u0439")," \u0432 \u043b\u043e\u0433\u0438\u043a\u0443 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430, \u043b\u0443\u0447\u0448\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c css-\u043a\u043b\u0430\u0441\u0441\u044b"),(0,r.kt)("li",{parentName:"ul"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,r.kt)("strong",{parentName:"li"},"\u0442\u043e\u043b\u044c\u043a\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b")," (\u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043b\u0430\u0441\u0441\u043e\u0432\u044b\u0435 \u0432\u043e\u043e\u0431\u0449\u0435, \u043a\u043b\u0430\u0441\u0441\u044b - \u0434\u043b\u044f \u043c\u0430\u0437\u043e\u0445\u0438\u0441\u0442\u043e\u0432)."),(0,r.kt)("li",{parentName:"ul"},"\u0421\u0430\u043c\u0430\u044f \u0441\u043b\u043e\u0436\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c React-\u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432 - \u044d\u0442\u043e ",(0,r.kt)("strong",{parentName:"li"},"\u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441 API, \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0441\u0442\u044c, \u0444\u043e\u0440\u043c\u044b \u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445"),". \u041a \u044d\u0442\u043e\u0439 \u0447\u0430\u0441\u0442\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u043d\u0443\u0436\u043d\u043e \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u044c\u0441\u044f \u0431\u043e\u043b\u0435\u0435 \u0442\u0449\u0430\u0442\u0435\u043b\u044c\u043d\u043e."),(0,r.kt)("li",{parentName:"ul"},"UI-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u0438\u043b\u044c\u043d\u043e \u043e\u0442\u043b\u0438\u0447\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0440\u0430\u0437\u043d\u044b\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u0445 (\u0446\u0432\u0435\u0442, \u043e\u0442\u0441\u0442\u0443\u043f\u044b, \u0440\u0430\u0437\u043c\u0435\u0440\u044b \u0438 \u0442.\u0434.)"),(0,r.kt)("li",{parentName:"ul"},"\u041d\u0443\u0436\u043d\u043e \u0441\u0442\u0430\u0440\u0430\u0442\u044c\u0441\u044f ",(0,r.kt)("strong",{parentName:"li"},"\u043e\u0442\u0434\u0435\u043b\u044f\u0442\u044c \u043b\u043e\u0433\u0438\u043a\u0443 \u043e\u0442 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f"),". \u041b\u043e\u0433\u0438\u043a\u0443 \u043b\u0443\u0447\u0448\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 hoc-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u0442\u0430\u0445, \u0430 \u0434\u0430\u043b\u044c\u0448\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0435\u0435 \u043f\u043e\u0434-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u043c (view-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b) \u0447\u0435\u0440\u0435\u0437 \u043f\u0440\u043e\u043f\u0441\u044b."),(0,r.kt)("li",{parentName:"ul"},"\u0421\u0442\u0435\u0439\u0442 \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0438\u043c\u0435\u0435\u0442\u044c \u0433\u043b\u0443\u0431\u043e\u043a\u043e\u0439 \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u0438, \u043b\u0443\u0447\u0448\u0435 \u0447\u0442\u043e\u0431\u044b \u0432\u0441\u0435 \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u043c\u044b\u0435 \u043f\u043e\u043b\u044f \u0431\u044b\u043b\u0438 \u043d\u0430 \u043e\u0434\u043d\u043e\u043c \u0443\u0440\u043e\u0432\u043d\u0435"),(0,r.kt)("li",{parentName:"ul"},"\u0412c\u0442\u0430\u0432\u043a\u0443 \u0442\u043e\u043a\u0435\u043d\u0430 \u043b\u0443\u0447\u0448\u0435 \u0434\u0435\u043b\u0430\u0442\u044c \u0447\u0435\u0440\u0435\u0437 \u0438\u043d\u0442\u0435\u0440\u0446\u0435\u043f\u0442\u043e\u0440 axios, \u0447\u0435\u043c \u043f\u0440\u043e\u0441\u0442\u043e \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u0438\u0437 \u043a\u0443\u043a\u043e\u0432 \u0438\u043b\u0438 localStorage, \u0442\u0430\u043a \u043a\u0430\u043a \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b"),(0,r.kt)("li",{parentName:"ul"},'\u041d\u0435 \u043d\u0443\u0436\u043d\u043e \u0440\u0430\u0437\u0432\u043e\u0434\u0438\u0442\u044c "\u0446\u0435\u043b\u044b\u0439 \u0437\u043e\u043e\u043f\u0430\u0440\u043a" npm-\u043f\u0430\u043a\u0435\u0442\u043e\u0432, \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u0442\u043e\u0433\u043e \u0438\u043b\u0438 \u0438\u043d\u043e\u0433\u043e \u043f\u0430\u043a\u0435\u0442\u0430 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043e\u0431\u043e\u0441\u043d\u043e\u0432\u0430\u043d\u043e.'),(0,r.kt)("li",{parentName:"ul"},"\u0422\u043e\u0442, \u043a\u0442\u043e \u0437\u043d\u0430\u0435\u0442 \u043a\u0430\u043a \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0441 API, \u0442\u043e\u0442 \u0437\u043d\u0430\u0435\u0442 \u0441\u0430\u043c\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435."),(0,r.kt)("li",{parentName:"ul"},"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043e\u0431\u0435\u0440\u0442\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u043f\u0440\u0438 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0435 - \u041f\u041b\u041e\u0425\u041e, \u0447\u0438\u0442\u0430\u0435\u043c\u043e\u0441\u0442\u044c \u0441\u0438\u043b\u044c\u043d\u043e \u0443\u0445\u0443\u0434\u0448\u0430\u0435\u0442\u0441\u044f"),(0,r.kt)("li",{parentName:"ul"},"\u0415\u0441\u043b\u0438 \u043d\u0443\u0436\u043d\u043e \u043c\u0443\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0435 \u043e\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0442\u043e \u043d\u0443\u0436\u043d\u043e \u044d\u0442\u043e \u0434\u0435\u043b\u0430\u0442\u044c \u0435\u0449\u0435 \u0434\u043e \u0440\u0435\u043d\u0434\u0435\u0440\u0430 \u0432 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0432 redux-thunk, \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u044d\u0442\u043e\u043c \u044d\u0442\u0430\u043f\u0435 \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0435 \u043f\u043e\u043b\u044f, \u0447\u0442\u043e\u0431\u044b \u0438\u0445 \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u043f\u043e\u0442\u043e\u043c \u043b\u0435\u0433\u043a\u043e \u043c\u0430\u043f\u0438\u0442\u044c \u0432 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0435"),(0,r.kt)("li",{parentName:"ul"},'\u041d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u0445 \u043f\u0440\u043e\u0431\u0435\u0436\u0435\u043a \u0446\u0438\u043a\u043b\u0430\u043c\u0438 .map() \u043e\u0434\u043d\u0438\u0445 \u0438 \u0442\u0435\u0445 \u0436\u0435 \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432 \u0432 \u043e\u0434\u043d\u043e\u043c \u043c\u0435\u0441\u0442\u0435. \u0426\u0438\u043a\u043b - \u044d\u0442\u043e "\u0442\u044f\u0436\u0435\u043b\u0430\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f".'),(0,r.kt)("li",{parentName:"ul"},"\u0414\u0435\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043e\u043f\u0440\u0430\u0432\u0434\u0430\u043d\u0430 \u0447\u0430\u0441\u0442\u044b\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c, \u0442\u0430\u043a \u043a\u0430\u043a \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435"),(0,r.kt)("li",{parentName:"ul"},"\u041f\u0435\u0440\u0435\u0434 includes() \u043d\u0443\u0436\u043d\u043e \u0434\u0435\u043b\u0430\u0442\u044c \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u043d\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"),(0,r.kt)("li",{parentName:"ul"},"\u0415\u0441\u043b\u0438 \u0441\u043c\u043e\u0442\u0440\u0438\u043c \u043d\u0435\u0437\u043d\u0430\u043a\u043e\u043c\u044b\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442, \u0442\u043e \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0438 \u0445\u0443\u043a\u0438, \u0430 \u043f\u043e\u0442\u043e\u043c \u043b\u043e\u0433\u0438\u043a\u0443")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// \u041f\u041b\u041e\u0425\u041e\nexport default connect((state: RootState) => ({\n  players: state.room.players,\n}))(PersonsContainer);\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u043c\u0430\u043f\u0438\u043d\u0433"},"\u041c\u0430\u043f\u0438\u043d\u0433"),(0,r.kt)("h3",{id:"\u043e\u0431\u044b\u0447\u043d\u044b\u0439-\u043c\u0430\u043f\u0438\u043d\u0433"},"\u041e\u0431\u044b\u0447\u043d\u044b\u0439 \u043c\u0430\u043f\u0438\u043d\u0433"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0412\u0441\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438-\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438 \u043d\u0443\u0436\u043d\u043e \u0432\u044b\u043d\u043e\u0441\u0438\u0442\u044c \u0437\u0430 \u043f\u0440\u0435\u0434\u0435\u043b\u044b \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0433\u043e return \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430, \u0447\u0442\u043e\u0431\u044b \u0442\u0430\u043a\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043d\u0435 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u043b\u0430\u0441\u044c \u043d\u0430 \u043a\u0430\u0436\u0434\u044b\u0439 \u043f\u0435\u0440\u0435\u0440\u0435\u043d\u0434\u0435\u0440."),(0,r.kt)("li",{parentName:"ul"},"\u041c\u0430\u0441\u0441\u0438\u0432\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0430\u043a\u0436\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0437\u0430 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u043c\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430, \u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u0431\u044b\u043b\u043e \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u044b\u0445 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0439.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0444\u0430\u0439\u043b navLinks.ts\nconst navLinks: INavigationLink[] = [ link1, link2, ... ];\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const checkForPermission = (permission?: EPermission[]):boolean => {\n    if (permission) {\n        return !!haveAccess(permission);\n    }\n\n    return !permission;\n}\n\n// \u043f\u043e\u0434\u0441\u0432\u0435\u0447\u0438\u0432\u0430\u0435\u043c \u0441\u0441\u044b\u043b\u043a\u0443 (\u0437\u0435\u043b\u0435\u043d\u044b\u043c \u0446\u0432\u0435\u0442\u043e\u043c), \u0435\u0441\u043b\u0438 \u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0435\u0441\u0442\u044c \u0432\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 (\u0418/\u0418) \u0438\u0437 isAllowed\n// \u0435\u0441\u043b\u0438 \u0432 \u043f\u043e\u043b\u0435 permission \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043e, \u0442\u043e \u0442\u0430\u043a\u0436\u0435 \u043f\u043e\u0434\u0441\u0432\u0435\u0447\u0438\u0432\u0430\u0435\u043c \u0441\u0441\u044b\u043b\u043a\u0443\nconst checkForAllowed = (permission?: EPermission[]):boolean => {\n    if (permission) {\n        return permission.every(permission => haveAccess(permission));\n    }\n\n    return true;\n}\n\nreturn (\n  {navLinks.map(navLink => {\n    const { path, tooltipText, className, isAllowed, permission, name }  = navLink;\n    const isHasPermission = checkForPermission(permission);\n    const isHasAllowed = checkForAllowed(isAllowed);\n\n    if (isHasPermission) {\n        return (\n            <NavLinkWithHash\n                to={path[0]}\n                title={tooltipText}\n                data-testid={`nav-${className}`}\n                className={\n                    CN(styles.item, styles[className],\n                        {\n                            [styles.active]: path.includes(url),\n                            'allowed': isHasAllowed,\n                        }\n                    )\n                }\n            >\n                <span>{name}</span>\n            </NavLinkWithHash>\n        );\n    }\n  })}\n)\n")),(0,r.kt)("h3",{id:"\u0448\u043e\u0440\u0442\u043a\u0430\u0442"},"\u0428\u043e\u0440\u0442\u043a\u0430\u0442"),(0,r.kt)("p",null,"\u041f\u0440\u0438 \u043c\u0430\u043f\u0438\u043d\u0433\u0435 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u043d\u0443\u044e \u0437\u0430\u043f\u0438\u0441\u044c \u0438 \u043f\u043e\u0441\u043b\u0435 => \u0432 () \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e && \u0440\u0435\u043d\u0434\u0435\u0440\u0438\u0442\u044c jsx. \u041d\u043e \u0443 \u043e\u0431\u044b\u0447\u043d\u043e\u0433\u043e \u043c\u0430\u043f\u0438\u043d\u0433\u0430 \u043b\u0443\u0447\u0448\u0430\u044f \u0447\u0438\u0442\u0430\u0435\u043c\u043e\u0441\u0442\u044c."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"[item1, item2, ...].map(item => (item.id > 0) && <li key={item.id}>{item.name}</li>)\n")),(0,r.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"{navLinks.map(navLink => ((navLink.permission && haveAccess(navLink.permission)) || !navLink.permission) &&\n  <NavLinkWithHash\n      to={navLink.path[0]}\n      title={navLink.tooltipText}\n      data-testid={`nav-${navLink.className}`}\n      className={\n          CN(styles.item, styles[navLink.className],\n              {\n                  [styles.active]: navLink.path.includes(url),//showActive(),\n                  'allowed': isAllowed(navLink.isAllowed),\n              }\n          )\n      }\n)}\n")),(0,r.kt)("h3",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0446\u0435\u043f\u043e\u0447\u043a\u0438-\u0448\u043e\u0440\u0442\u043a\u0430\u0442\u043e\u0432"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0446\u0435\u043f\u043e\u0447\u043a\u0438 \u0448\u043e\u0440\u0442\u043a\u0430\u0442\u043e\u0432"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const { hubs } = useSelector((state: TStore) => ({\n    hubs: state.hubs.hubs.filter(hub => { \n        return state.auth.hubIds?.includes(hub.id) && (!!hub.timezone && !!hub.timeFrom && !!hub.timeTo);\n    })\n    .map(({ name, id, code }) => ({\n        name: code ? `${name} (${code})` : name,\n        value: id,\n    })).sort((a, b) => a.name.localeCompare(b.name))\n}));\n")),(0,r.kt)("h3",{id:"spread-\u0438-\u043c\u0430\u043f\u0438\u043d\u0433"},"Spread \u0438 \u043c\u0430\u043f\u0438\u043d\u0433"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'options={\n    [\n        // \u043e\u043f\u0446\u0438\u044f "\u0411\u0435\u0437 \u0425\u0430\u0431\u0430"\n        ...(selectedRegions.length === 0\n            ? [{\n                value: WITHOUT_HUB.id,\n                name: WITHOUT_HUB.name,\n            }]\n            : []\n        ),\n\n        // \u0441\u043f\u0438\u0441\u043e\u043a \u0445\u0430\u0431\u043e\u0432\n        ...hubs.map(hub => ({ \n            value: hub.id, \n            name: hub.code ? `${hub.name} (${hub.code})` : hub.name,\n        }))\n    ].sort((a, b) => +a.value - +b.value)\n}\n')),(0,r.kt)("h2",{id:"\u043f\u043b\u043e\u0445\u0438\u0435-\u0438-\u0445\u043e\u0440\u043e\u0448\u0438\u0435-\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u043b\u043e\u0445\u0438\u0435 \u0438 \u0445\u043e\u0440\u043e\u0448\u0438\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,r.kt)("p",null,"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043d\u0430\u0439\u0442\u0438 \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 haveAccess() \u043f\u043e \u043f\u0440\u0430\u0432\u0430\u043c (permission)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// \u043f\u043b\u043e\u0445\u043e\n// 1- EPermission[][] - \u043c\u0430\u0441\u0441\u0438\u0432 \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432\n// 2 !permission || permission.reduce<boolean> - \u043b\u0443\u0447\u0448\u0435 \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439\n// 3 (t, c) => t && !!haveAccess(c), true - \u043d\u0435\u0447\u0438\u0442\u0430\u0435\u043c\u044b\u0439 \u043a\u043e\u0434\n\nconst isAllowed = (permission?: EPermission[][]): boolean => !permission || permission.reduce<boolean>(\n    (t, c) => t && !!haveAccess(c), true\n);\n\n// \u0445\u043e\u0440\u043e\u0448\u043e\n// 1 - \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u043e\u0434\u0438\u043d\u0430\u0440\u043d\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432 permission\n// 2 - \u043f\u043e\u043d\u044f\u0442\u043d\u043e\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u0435\n// 3 - \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c every \u0432\u043c\u0435\u0441\u0442\u043e reduce\nconst checkForAllowed = (permission?: EPermission[]):boolean => {\n    if (permission) {\n        return permission.every(permission => haveAccess(permission));\n    }\n\n    return true;\n}\n")))}c.isMDXComponent=!0}}]);