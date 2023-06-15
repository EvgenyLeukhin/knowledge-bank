"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[4806],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=c(r),k=a,d=s["".concat(p,".").concat(k)]||s[k]||u[k]||l;return r?n.createElement(d,i(i({ref:t},m),{},{components:r})):n.createElement(d,i({ref:t},m))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},7587:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const l={title:"\u041b\u0443\u0447\u0448\u0438\u0435 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438",sidebar_position:2},i=void 0,o={unversionedId:"frontend/react/best-practice",id:"frontend/react/best-practice",title:"\u041b\u0443\u0447\u0448\u0438\u0435 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438",description:"Atomic design-\u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u044f:",source:"@site/docs/frontend/react/best-practice.md",sourceDirName:"frontend/react",slug:"/frontend/react/best-practice",permalink:"/knowledge-bank/docs/frontend/react/best-practice",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/react/best-practice.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u041b\u0443\u0447\u0448\u0438\u0435 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"React-c\u0442\u044d\u043a",permalink:"/knowledge-bank/docs/frontend/react/stack"},next:{title:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043f\u0430\u043f\u043e\u043a \u0438 \u0444\u0430\u0439\u043b\u043e\u0432",permalink:"/knowledge-bank/docs/frontend/react/folder-structure"}},p={},c=[{value:"Atomic design-\u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u044f:",id:"atomic-design-\u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u044f",level:2},{value:"README.md:",id:"readmemd",level:2},{value:"CodeStyle:",id:"codestyle",level:2},{value:"React:",id:"react",level:2}],m={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"atomic-design-\u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u044f"},"Atomic design-\u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u044f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0412\u0441\u0435 \u0444\u0430\u0439\u043b\u044b \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c ",(0,a.kt)("strong",{parentName:"li"},"\u0441\u0442\u0440\u043e\u0433\u043e \u0441\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0438 \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u044b \u043f\u043e \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f\u043c"),"."),(0,a.kt)("li",{parentName:"ul"},"\u0427\u0442\u043e-\u0442\u043e \u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u0434\u043e\u043b\u0436\u043d\u043e ",(0,a.kt)("strong",{parentName:"li"},"\u0441\u043e\u0431\u0438\u0440\u0430\u0442\u044c\u0441\u044f \u0438\u0437 \u0447\u0435\u0433\u043e-\u0442\u043e \u043c\u0430\u043b\u043e\u0433\u043e"),"."),(0,a.kt)("li",{parentName:"ul"},"\u0415\u0441\u043b\u0438 \u043f\u0440\u043e\u0435\u043a\u0442 \u0445\u043e\u0440\u043e\u0448\u043e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d, \u0442\u043e \u0435\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u043e \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c (\u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443, \u043b\u043e\u0433\u0438\u043a\u0443, \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u0438 \u0442.\u0434.)")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"readmemd"},"README.md:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0421\u0442\u0438\u043b\u044c \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u0434\u0430 \u0438 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 ",(0,a.kt)("strong",{parentName:"li"},"\u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043e\u043f\u0438\u0441\u0430\u043d\u044b \u0432 README.md"),", \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u043e\u0433\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u0430 (\u043a\u0430\u043a \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443/\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442, \u043a\u0430\u043a \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c \u0441\u0442\u043e\u0440, \u043a\u0430\u043a \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0441\u0442\u043e\u0440, \u043a\u0430\u043a \u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441 \u0438 \u0442.\u0434.)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f")," \u0441 API \u0442\u0430\u043a\u0436\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043e\u043f\u0438\u0441\u0430\u043d\u044b \u0432 README.md."),(0,a.kt)("li",{parentName:"ul"},"\u0412 \u0438\u0434\u0435\u0430\u043b\u0435, \u0435\u0441\u043b\u0438 \u043d\u043e\u0432\u044b\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442 \u043d\u0430 \u043f\u0440\u043e\u0435\u043a\u0442, \u043e\u043d ",(0,a.kt)("strong",{parentName:"li"},"\u0434\u043e\u043b\u0436\u0435\u043d \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0432\u0441\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f, \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0432 README.md"),".")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"codestyle"},"CodeStyle:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0421\u043e\u0431\u043b\u044e\u0434\u0430\u0442\u044c ",(0,a.kt)("strong",{parentName:"li"},"\u0435\u0434\u0438\u043d\u0441\u0442\u0432\u043e \u0441\u0442\u0438\u043b\u044f")," \u043e\u0444\u0440\u043c\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u0434\u0430 \u0438 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b \u043f\u0440\u043e\u0435\u043a\u0442\u0430."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u0427\u0435\u043c \u043c\u0435\u043d\u044c\u0448\u0435 \u043a\u043e\u0434\u0430 - \u0442\u0435\u043c \u043b\u0443\u0447\u0448\u0435"),". (\u0425\u043e\u0440\u043e\u0448\u0438\u0439 \u043a\u043e\u0434 - \u044d\u0442\u043e \u043a\u043e\u0434, \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043d\u0435\u0442)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u0427\u0438\u0442\u0430\u0435\u043c\u044b\u0439 \u043a\u043e\u0434")," \u043b\u0443\u0447\u0448\u0435 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u0438\u0441\u0442\u0438\u0447\u043d\u043e\u0433\u043e."),(0,a.kt)("li",{parentName:"ul"},"\u0412 \u043f\u0440\u043e\u0435\u043a\u0442\u0435 ",(0,a.kt)("strong",{parentName:"li"},"\u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u0439"),", \u043a\u043e\u0434 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0445\u043e\u0440\u043e\u0448\u043e \u0432\u043e\u0441\u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u043c\u044b\u043c. \u041a\u043e\u043b-\u0432\u043e \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u0439 \u043d\u0443\u0436\u043d\u043e \u0441\u0432\u043e\u0434\u0438\u0442\u044c \u043a \u043c\u0438\u043d\u0438\u043c\u0443\u043c\u0443!."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u0421\u0442\u0430\u0440\u0430\u0442\u044c\u0441\u044f \u043d\u0435 \u043c\u0443\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435"),", \u0443\u0445\u0443\u0434\u0448\u0430\u0435\u0442\u0441\u044f \u0447\u0438\u0442\u0430\u0435\u043c\u043e\u0441\u0442\u044c \u043a\u043e\u0434\u0430."),(0,a.kt)("li",{parentName:"ul"},"\u0421\u0442\u0430\u0442\u0438\u0447\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 ",(0,a.kt)("strong",{parentName:"li"},"\u0432\u044b\u043d\u043e\u0441\u0438\u0442\u044c \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b"),"."),(0,a.kt)("li",{parentName:"ul"},"\u0412 \u0438\u0434\u0435\u0430\u043b\u0435, \u043a\u043e\u0434 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c ",(0,a.kt)("strong",{parentName:"li"},"\u043f\u0440\u043e\u0441\u0442\u044b\u043c \u0438 \u043f\u043e\u043d\u044f\u0442\u043d\u044b\u043c")," (KISS-\u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u044f). \u041f\u043e\u043d\u044f\u0442\u043d\u044b\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b \u0445\u043e\u0440\u043e\u0448\u043e \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u044e\u0442\u0441\u044f. \u0412\u0441\u0435 \u0433\u0435\u043d\u0438\u0430\u043b\u044c\u043d\u043e\u0435 - \u043f\u0440\u043e\u0441\u0442\u043e\u0435, \u0441\u043b\u043e\u0436\u043d\u043e\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043e\u0431\u043e\u0441\u043d\u043e\u0432\u0430\u043d\u043e."),(0,a.kt)("li",{parentName:"ul"},"\u041f\u043e\u0432\u0442\u043e\u0440\u044f\u044e\u0449\u0438\u0435\u0441\u044f \u0431\u043b\u043e\u043a\u0438 \u043d\u0443\u0436\u043d\u043e ",(0,a.kt)("strong",{parentName:"li"},"\u0432\u044b\u043d\u043e\u0441\u0438\u0442\u044c \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u043e\u0431\u0449\u0438\u0435 \u043f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b")," (DRY-\u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u044f)."),(0,a.kt)("li",{parentName:"ul"},"\u0412 \u0438\u0434\u0435\u0430\u043b\u0435, \u0444\u0430\u0439\u043b \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0434\u043e\u043b\u0436\u0435\u043d ",(0,a.kt)("strong",{parentName:"li"},"\u0440\u0430\u0437\u043c\u0435\u0449\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u044d\u043a\u0440\u0430\u043d\u0435 IDE \u0431\u0435\u0437 \u0441\u043a\u0440\u043e\u043b\u0430"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},'"\u041d\u0435 \u0438\u0437\u043e\u0431\u0440\u0435\u0442\u0430\u0442\u044c \u0432\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434!"')," \u0434\u043b\u044f \u043a\u0430\u043a\u0438\u0445-\u043b\u0438\u0431\u043e \u0441\u043b\u043e\u0436\u043d\u044b\u0445 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0439, \u0430 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0433\u043e\u0442\u043e\u0432\u044b\u0435 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 (\u0432\u0441\u0435 \u0443\u0436\u0435 \u0434\u0430\u0432\u043d\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043e \u043f\u043e\u0447\u0442\u0438 \u043d\u0430 \u0432\u0441\u0435 \u0441\u043b\u0443\u0447\u0430\u0438 \u0436\u0438\u0437\u043d\u0438). \u0421 \u0434\u0440\u0443\u0433\u043e\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u044b, \u0435\u0441\u043b\u0438 \u043a\u0430\u043a\u0430\u044f-\u0442\u043e \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u043e\u0434\u0438\u043d \u0440\u0430\u0437 \u0434\u043b\u044f \u0447\u0435\u0433\u043e-\u0442\u043e \u043e\u0434\u043d\u043e\u0433\u043e, \u0442\u043e \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u0434\u0443\u043c\u0430\u0442\u044c\u0441\u044f \u043e \u0435\u0451 \u0446\u0435\u043b\u0435\u0441\u043e\u043e\u0431\u0440\u0430\u0437\u043d\u043e\u0441\u0442\u0438."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"TypeScript \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043f\u0440\u043e\u0441\u0442\u044b\u043c \u0438 \u043f\u043e\u043d\u044f\u0442\u043d\u044b\u043c"),", \u043d\u0435 \u0441\u0438\u043b\u044c\u043d\u043e \u0441 \u043d\u0438\u043c \u0437\u0430\u0438\u0433\u0440\u044b\u0432\u0430\u0442\u044c\u0441\u044f."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u0415c\u043b\u0438 \u043c\u043d\u043e\u0433\u043e \u0443\u0441\u043b\u043e\u0432\u0438\u0439"),", \u0442\u043e \u043b\u0443\u0447\u0448\u0435 \u0438\u0445 \u0438\u043d\u043a\u0430\u043f\u0441\u0443\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u0443\u044e \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u0418\u0437\u0431\u0435\u0433\u0430\u0442\u044c \u0438\u0437\u043b\u0438\u0448\u043d\u0435\u0439 \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u0438"),". \u0415\u0441\u043b\u0438 \u0435\u0441\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0447\u0442\u043e-\u043d\u0438\u0431 \u0432\u044b\u043d\u0435\u0441\u0442\u0438 \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0431\u043b\u043e\u043a - \u0442\u043e \u043b\u0443\u0447\u0448\u0435 \u0432\u044b\u043d\u043e\u0441\u0438\u0442\u044c."),(0,a.kt)("li",{parentName:"ul"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 ",(0,a.kt)("strong",{parentName:"li"},"\u043b\u0438\u043d\u0442\u0435\u0440\u043e\u0432, \u0444\u043e\u0440\u043c\u0430\u0442\u0435\u0440\u043e\u0432, \u0442\u0435\u0441\u0442\u0435\u0440\u043e\u0432 \u0438 \u043f\u0440\u0435\u043a\u043e\u043c\u043c\u0438\u0442\u0435\u0440\u043e\u0432")," (ESLint, Stylelint, prettier) \u0434\u043e\u043b\u0436\u043d\u043e \u043f\u043e\u043c\u043e\u0433\u0430\u0442\u044c, \u0430 \u043d\u0435 \u043c\u0435\u0448\u0430\u0442\u044c \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435."),(0,a.kt)("li",{parentName:"ul"},"\u0415\u0441\u043b\u0438 \u0440\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u043d\u0433 \u0438 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u043a\u043e\u0434\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u0439 \u0438 \u0443\u0445\u0443\u0434\u0448\u0430\u0435\u0442 \u0447\u0438\u0442\u0430\u0435\u043c\u043e\u0441\u0442\u044c, \u0442\u043e ",(0,a.kt)("strong",{parentName:"li"},"\u0442\u0430\u043a\u043e\u0439 \u0440\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u043d\u0433 \u043f\u043b\u043e\u0445\u043e\u0439")," (\u0438\u0437\u043b\u0438\u0448\u043d\u044f\u044f \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u0438 \u043e\u0432\u0435\u0440\u0438\u043d\u0436\u0435\u043d\u0438\u0440\u0438\u043d\u0433).")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"react"},"React:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u0426\u0435\u043b\u0430\u044f \u043f\u043e\u0440\u0442\u044f\u043d\u043a\u0430 \u043f\u0440\u043e\u043f\u0441\u043e\u0432 - \u044d\u0442\u043e \u043f\u043b\u043e\u0445\u043e!!!")," \u0418 \u043f\u043e\u0442\u043e\u043c \u0442\u0430\u043a\u043e\u0435 \u0442\u0440\u0443\u0434\u043d\u043e \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044c, \u0442\u0430\u043a\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u043d\u0443\u0436\u043d\u043e \u0434\u0435\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c."),(0,a.kt)("li",{parentName:"ul"},"\u0424\u0430\u0439\u043b\u044b \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u0440\u043e\u0443\u0442\u043e\u0432 (\u0441\u0442\u0440\u0430\u043d\u0438\u0446) \u0438\u043b\u0438 \u043e\u0431\u044a\u0435\u043c\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0432\u0441\u0435\u0433\u0434\u0430 ",(0,a.kt)("strong",{parentName:"li"},"\u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c hoc-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u043c\u0438"),", \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0443\u0436\u0435 \u0438\u043c\u043f\u043e\u0440\u0442\u044f\u0442\u0441\u044f \u043f\u043e\u0434-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u0442\u044b \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0438\u0437 components/pages/pageName."),(0,a.kt)("li",{parentName:"ul"},"\u0427\u0442\u043e\u0431\u044b \u043d\u0435 \u0431\u044b\u043b\u043e \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 (\u043f\u043e\u0440\u0442\u044f\u043d\u043e\u043a) \u043d\u0443\u0436\u043d\u043e \u0438\u0445 ",(0,a.kt)("strong",{parentName:"li"},"\u0440\u0430\u0437\u0431\u0438\u0432\u0430\u0442\u044c \u043d\u0430 \u0431\u043e\u043b\u0435\u0435 \u043c\u0435\u043b\u043a\u0438\u0435 \u043f\u043e\u0434-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b")," (\u0434\u0435\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0432 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e parts/)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u041d\u0435 \u0432\u043c\u0435\u0448\u0438\u0432\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u043b\u0430\u0439\u043d-\u0441\u0442\u0438\u043b\u0435\u0439")," \u0432 \u043b\u043e\u0433\u0438\u043a\u0443 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430, \u043b\u0443\u0447\u0448\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c css-\u043a\u043b\u0430\u0441\u0441\u044b"),(0,a.kt)("li",{parentName:"ul"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,a.kt)("strong",{parentName:"li"},"\u0442\u043e\u043b\u044c\u043a\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b")," (\u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043b\u0430\u0441\u0441\u043e\u043e\u0432\u044b\u0435 \u0432\u043e\u043e\u0431\u0449\u0435)."),(0,a.kt)("li",{parentName:"ul"},"\u0421\u0430\u043c\u0430\u044f \u0441\u043b\u043e\u0436\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c React-\u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432 - \u044d\u0442\u043e ",(0,a.kt)("strong",{parentName:"li"},"\u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441 API, \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0441\u0442\u044c, \u0444\u043e\u0440\u043c\u044b \u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445"),". \u041a \u044d\u0442\u043e\u0439 \u0447\u0430\u0441\u0442\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u043d\u0443\u0436\u043d\u043e \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u044c\u0441\u044f \u0431\u043e\u043b\u0435\u0435 \u0442\u0449\u0430\u0442\u0435\u043b\u044c\u043d\u043e."),(0,a.kt)("li",{parentName:"ul"},"UI-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u0438\u043b\u044c\u043d\u043e \u043e\u0442\u043b\u0438\u0447\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0440\u0430\u0445\u043d\u044b\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u0445 (\u0446\u0432\u0435\u0442, \u043e\u0442\u0441\u0442\u0443\u043f\u044b, \u0440\u0430\u0437\u043c\u0435\u0440\u044b \u0438 \u0442.\u0434.)"),(0,a.kt)("li",{parentName:"ul"},"\u041d\u0443\u0436\u043d\u043e \u0441\u0442\u0430\u0440\u0430\u0442\u044c\u0441\u044f ",(0,a.kt)("strong",{parentName:"li"},"\u043e\u0442\u0434\u0435\u043b\u044f\u0442\u044c \u043b\u043e\u0433\u0438\u043a\u0443 \u043e\u0442 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f"),". \u041b\u043e\u0433\u0438\u043a\u0443 \u043b\u0443\u0447\u0448\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 hoc-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u0442\u0430\u0445, \u0430 \u0434\u0430\u043b\u044c\u0448\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0435\u0435 \u043f\u043e\u0434-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u043c (view-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b) \u0447\u0435\u0440\u0435\u0437 \u043f\u0440\u043e\u043f\u0441\u044b."),(0,a.kt)("li",{parentName:"ul"},"\u0421\u0442\u0435\u0439\u0442 \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0438\u043c\u0435\u0435\u0442\u044c \u0433\u043b\u0443\u0431\u043e\u043a\u043e\u0439 \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u0438, \u043b\u0443\u0447\u0448\u0435 \u0447\u0442\u043e\u0431\u044b \u0432\u0441\u0435 \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u043c\u044b\u0435 \u043f\u043e\u043b\u044f \u0431\u044b\u043b\u0438 \u043d\u0430 \u043e\u0434\u043d\u043e\u043c \u0443\u0440\u043e\u0432\u043d\u0435"),(0,a.kt)("li",{parentName:"ul"},"\u0412\u0442\u0430\u0432\u043a\u0443 \u0442\u043e\u043a\u0435\u043d\u0430 \u043b\u0443\u0447\u0448\u0435 \u0434\u0435\u043b\u0430\u0442\u044c \u0447\u0435\u0440\u0435\u0437 \u0438\u043d\u0442\u0435\u0440\u0446\u0435\u043f\u0442\u043e\u0440 axios, \u0447\u0435\u043c \u043f\u0440\u043e\u0441\u0442\u043e \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u0438\u0437 \u043a\u0443\u043a\u043e\u0432 \u0438\u043b\u0438 localStorage, \u0442\u0430\u043a \u043a\u0430\u043a \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b"),(0,a.kt)("li",{parentName:"ul"},'\u041d\u0435 \u043d\u0443\u0436\u043d\u043e \u0440\u0430\u0437\u0432\u043e\u0434\u0438\u0442\u044c "\u0446\u0435\u043b\u044b\u0439 \u0437\u043e\u043e\u043f\u0430\u0440\u043a" npm-\u043f\u0430\u043a\u0435\u0442\u043e\u0432, \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u0442\u043e\u0433\u043e \u0438\u043b\u0438 \u0438\u043d\u043e\u0433\u043e \u043f\u0430\u043a\u0435\u0442\u0430 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043e\u0431\u043e\u0441\u043d\u043e\u0432\u0430\u043d\u043e.')))}u.isMDXComponent=!0}}]);