"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5681],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),k=a,d=m["".concat(s,".").concat(k)]||m[k]||u[k]||l;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={title:"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f",sidebar_position:0},i=void 0,o={unversionedId:"qa/basics",id:"qa/basics",title:"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f",description:"Testing",source:"@site/docs/qa/basics.md",sourceDirName:"qa",slug:"/qa/basics",permalink:"/knowledge-bank/docs/qa/basics",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/qa/basics.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd0d QA",permalink:"/knowledge-bank/docs/category/-qa"},next:{title:"API",permalink:"/knowledge-bank/docs/qa/api"}},s={},p=[{value:"Testing",id:"testing",level:2},{value:"\u0412\u0438\u0434\u044b \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",id:"\u0432\u0438\u0434\u044b-\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",level:3},{value:"\u041e\u0448\u0438\u0431\u043a\u0438 (\u0431\u0430\u0433\u0438)",id:"\u043e\u0448\u0438\u0431\u043a\u0438-\u0431\u0430\u0433\u0438",level:3},{value:"Quality Control (QC)",id:"quality-control-qc",level:2},{value:"Quality Assurance (QA)",id:"quality-assurance-qa",level:2},{value:"STLC (Software Testing Lifecycle)",id:"stlc-software-testing-lifecycle",level:2}],c={toc:p};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"testing"},"Testing"),(0,a.kt)("p",null,"\u0421\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435, \u0440\u0430\u0431\u043e\u0442\u0430 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u0430 \u043f\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044e, \u0442\u0435\u0441\u0442\u043e\u0432, \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0445 \u0432 \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0438 \u043b\u043e\u043a\u0430\u043b\u0438\u0437\u0430\u0439\u0446\u0438\u044f \u0434\u0435\u0444\u0444\u0435\u043a\u0442\u043e\u0432. \u042d\u0442\u043e\u0442 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u043d\u0435 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430 \u0438\u043b\u0438 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430. \u0420\u0430\u0431\u043e\u0442\u0430 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u043e\u0432 (Tester). \u041f\u043e\u0438\u0441\u043a \u0438 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0431\u0430\u0433\u043e\u0432, \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0438\u0445 \u043d\u0430 \u0443\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u0435."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u041e\u0436\u0438\u0434\u0430\u043d\u0438\u0435-\u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c"),(0,a.kt)("li",{parentName:"ul"},"\u0422\u0435\u0441\u0442-\u043a\u0435\u0439\u0441\u044b")),(0,a.kt)("h3",{id:"\u0432\u0438\u0434\u044b-\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"},"\u0412\u0438\u0434\u044b \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435")," (\u0440\u0430\u0431\u043e\u0442\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f)"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u041d\u0435\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u041d\u0430\u0433\u0440\u0443\u0437\u043e\u0447\u043d\u043e\u0435 (DDos)"),(0,a.kt)("li",{parentName:"ul"},"\u041a\u0440\u043e\u0441\u0441\u043f\u043b\u0430\u0442\u0444\u043e\u0440\u0435\u043d\u043d\u043e\u0435 (\u0420\u0430\u0431\u043e\u0442\u0430 \u043d\u0430 \u0432\u0441\u0435\u0445 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430\u0445)"),(0,a.kt)("li",{parentName:"ul"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043e\u0447\u043d\u043e\u0435 \u0442\u0435\u0441\u0442\u0438\u043e\u0432\u0430\u043d\u0438\u0435 (\u041a\u0430\u043a \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f)"),(0,a.kt)("li",{parentName:"ul"},"\u0422\u0435\u0441\u0442\u0438\u043e\u0432\u0430\u043d\u0438\u0435 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 (\u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0445)"),(0,a.kt)("li",{parentName:"ul"},"\u041e\u0442\u043a\u0430\u0437 \u0438 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 (\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u043e\u0442\u043a\u0430\u0437\u0430, \u043a\u0430\u043a \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435)"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u042e\u0437\u0430\u0431\u0438\u043b\u0438\u0442\u0438")," (\u043a\u0430\u043a \u0443\u0434\u043e\u0431\u043d\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f)"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u0420\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u043e\u043d\u043d\u043e\u0435")," (\u043f\u0435\u0440\u0435\u043f\u0440\u043e\u0432\u0435\u043a\u0430 \u0441\u0442\u0430\u0440\u043e\u0433\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u0430, \u043f\u043e\u0441\u043b\u0435 \u0432\u043d\u0435\u0434\u0440\u0435\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0433\u043e)"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u0414\u044b\u043c\u043e\u0432\u043e\u0435")," (smoke-testing, \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u043e\u0432\u043e\u0433\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u0430)"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u041f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u043e\u0435")," (\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0441 \u0440\u0430\u0431\u043e\u0442\u043e\u0439 \u0441 \u043e\u0436\u0438\u0434\u0430\u0435\u043c\u044b\u043c\u0438 \u0442\u0438\u043f\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445)"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u041d\u0435\u0433\u0430\u0442\u0438\u0432\u043d\u043e\u0435")," (\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0441 \u0440\u0430\u0431\u043e\u0442\u043e\u0439 \u0441 \u043d\u0435\u043e\u0436\u0438\u0434\u0430\u0435\u043c\u044b\u043c\u0438 \u0442\u0438\u043f\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0435\u0441\u043b\u0438 \u0432 \u0446\u0438\u0444\u0440\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432\u0432\u0435\u0434\u0435\u043d \u0435\u0449\u0435 \u0442\u0435\u043a\u0441\u0442, \u043a\u0430\u043a \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0431\u0443\u0434\u0435\u0442 \u0441\u0435\u0431\u044f \u0432\u0435\u0441\u0442\u0438)"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u042f\u0449\u0438\u043a\u0438"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u0427\u0435\u0440\u043d\u044b\u0439")," (\u0431\u0435\u0437 \u043f\u043e\u0432\u0435\u0440\u043a\u0438 \u043a\u043e\u0434\u0430, \u0441 \u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u0411\u0435\u043b\u044b\u0439")," (\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043a\u043e\u0434\u0430, unit-\u0442\u0435\u0441\u0442\u044b, \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442\u0441\u044f \u0441\u0430\u043c\u0438\u043c\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430\u043c\u0438)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u0421\u0435\u0440\u044b\u0439")," (\u0435\u0441\u043b\u0438 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0449\u0438\u043a \u0438\u043c\u0435\u0435\u0442 \u043e\u043f\u044b\u0442 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u043d\u043e \u0441 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u043c)")))),(0,a.kt)("h3",{id:"\u043e\u0448\u0438\u0431\u043a\u0438-\u0431\u0430\u0433\u0438"},"\u041e\u0448\u0438\u0431\u043a\u0438 (\u0431\u0430\u0433\u0438)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u041c\u0438\u043d\u043e\u0440\u043d\u044b\u0435"),(0,a.kt)("li",{parentName:"ul"},"\u041c\u0430\u0436\u043e\u0440\u043d\u044b\u0435"),(0,a.kt)("li",{parentName:"ul"},"\u041a\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435")),(0,a.kt)("h2",{id:"quality-control-qc"},"Quality Control (QC)"),(0,a.kt)("p",null,"\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430. \u042d\u0442\u043e \u0447\u0430\u0441\u0442\u044c QA. QC \u0431\u043e\u043b\u044c\u0448\u0435 \u043f\u0440\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443, \u0447\u0442\u043e \u043f\u0440\u043e\u0434\u0443\u043a\u0442 \u0443\u0434\u043e\u0432\u043b\u0435\u0442\u0432\u043e\u0440\u044f\u0435\u0442 \u043e\u0441\u043e\u0431\u043e\u043c\u0443 \u043d\u0430\u0431\u043e\u0440\u0443 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u0439. \u041f\u0440\u043e\u0446\u0435\u0441\u0441, \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043d\u0430 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430 \u0438 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 \u0435\u0433\u043e \u0441 \u0437\u0430\u0434\u0443\u043c\u0430\u043d\u043d\u044b\u043c\u0438 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0430\u043c\u0438. \u0420\u0430\u0431\u043e\u0442\u0430 Test Lead. "),(0,a.kt)("h2",{id:"quality-assurance-qa"},"Quality Assurance (QA)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430")," (\u043d\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435, \u0431\u043e\u043b\u0435\u0435 \u0448\u0438\u0440\u043e\u043a\u0438\u0439 \u0441\u043c\u044b\u0441\u043b). \u041f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435, \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430, \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f, \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0442\u0435\u0441\u0442-\u043a\u0435\u0439\u0441\u043e\u0432, \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u043b\u0435\u0433\u0447\u0435 \u0440\u0435\u0448\u0430\u0442\u044c \u0441\u0432\u043e\u0438 \u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u0447\u0438, \u0433\u043b\u0443\u0431\u043e\u043a\u0430\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0441 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u043c \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438, \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430. \u0414\u0435\u043b\u0430\u0442\u044c \u0432\u0441\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0435, \u0447\u0442\u043e\u0431\u044b \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u043b\u0430 \u043b\u0443\u0447\u0448\u0438\u0439 \u043f\u0440\u043e\u0434\u0443\u043a\u0442 \u0438\u043b\u0438 \u0443\u0441\u043b\u0443\u0433\u0443. \u042d\u0442\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u043f\u0440\u043e \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432 \u0434\u043b\u044f \u043b\u0443\u0447\u0448\u0435\u0433\u043e \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430. \u0420\u0430\u0431\u043e\u0442\u0430 QA-\u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u0430 (\u0438\u0445 \u043a\u0440\u0430\u0439\u043d\u0435 \u043c\u0430\u043b\u043e, \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c \u0432 \u043a\u0440\u0443\u043f\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f\u0445.)"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"test-grade",src:n(6163).Z,width:"1223",height:"580"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"stlc-software-testing-lifecycle"},"STLC (Software Testing Lifecycle)"),(0,a.kt)("p",null,"TODO+++"))}u.isMDXComponent=!0},6163:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/test-grade-7d17daee675f3a2939a1107844112677.png"}}]);