"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7418],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),k=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=k(t.components);return r.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=k(n),d=a,c=s["".concat(o,".").concat(d)]||s[d]||u[d]||l;return n?r.createElement(c,i(i({ref:e},m),{},{components:n})):r.createElement(c,i({ref:e},m))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var k=2;k<l;k++)i[k]=n[k];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},99:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>k});var r=n(7462),a=(n(7294),n(3905));const l={title:"\u041a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f",sidebar_position:8},i=void 0,p={unversionedId:"design/composition",id:"design/composition",title:"\u041a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f",description:'- \u041f\u0420\u041e\u0421\u0422\u0420\u0410\u041d\u0421\u0422\u0412\u041e \u0438 \u041e\u0422\u0421\u0422\u0423\u041f\u042b - \u044d\u0442\u043e \u0442\u043e\u0436\u0435 \u0447\u0430\u0441\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438. \u041d\u0443\u0436\u043d\u043e \u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e ("\u0432\u043e\u0437\u0434\u0443\u0445") \u0434\u043b\u044f \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430 \u0441\u043b\u0435\u0432\u0430-\u0441\u043f\u0440\u0430\u0432\u0430, \u0441\u0432\u0435\u0440\u0445\u0443-\u0441\u043d\u0438\u0437\u0443, \u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u0431\u044b\u043b\u043e \u0437\u0430\u0433\u0440\u0430\u043c\u0430\u0436\u0434\u0435\u043d\u043d\u043e\u0441\u0442\u0438',source:"@site/docs/design/composition.md",sourceDirName:"design",slug:"/design/composition",permalink:"/knowledge-bank/docs/design/composition",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/design/composition.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"\u041a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Moodboard",permalink:"/knowledge-bank/docs/design/moodboard"},next:{title:"\u0414\u0438\u0437\u0430\u0439\u043d-\u043c\u0430\u043a\u0435\u0442",permalink:"/knowledge-bank/docs/design/maket"}},o={},k=[{value:"\u0417\u0430\u0434\u0430\u0447\u0438 \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438",id:"\u0437\u0430\u0434\u0430\u0447\u0438-\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438",level:3},{value:"\u0412\u0438\u0434\u044b \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0439:",id:"\u0432\u0438\u0434\u044b-\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0439",level:3},{value:"\u0414\u041e\u041c\u0418\u041d\u0410\u041d\u0422\u042b",id:"\u0434\u043e\u043c\u0438\u043d\u0430\u043d\u0442\u044b",level:2},{value:"\u042f\u043a\u043e\u0440\u0438 (\u0410\u043a\u0446\u0435\u043d\u0442\u043d\u044b\u0435 \u043e\u0431\u043b\u0430\u0441\u0442\u0438)",id:"\u044f\u043a\u043e\u0440\u0438-\u0430\u043a\u0446\u0435\u043d\u0442\u043d\u044b\u0435-\u043e\u0431\u043b\u0430\u0441\u0442\u0438",level:3},{value:"\u041a\u043e\u043d\u0442\u0440\u0430\u0441\u0442",id:"\u043a\u043e\u043d\u0442\u0440\u0430\u0441\u0442",level:3},{value:"\u0422\u0435\u043e\u0440\u0438\u044f \u0431\u043b\u0438\u0437\u043e\u0441\u0442\u0438",id:"\u0442\u0435\u043e\u0440\u0438\u044f-\u0431\u043b\u0438\u0437\u043e\u0441\u0442\u0438",level:3},{value:"\u0413\u0415\u041e\u041c\u0415\u0422\u0420\u0418\u042f",id:"\u0433\u0435\u043e\u043c\u0435\u0442\u0440\u0438\u044f",level:2},{value:"\u0417\u043e\u043b\u043e\u0442\u043e\u0435 \u0441\u0435\u0447\u0435\u043d\u0438\u0435 (\u043f\u0440\u043e\u043f\u043e\u0440\u0446\u0438\u044f \u03a6)",id:"\u0437\u043e\u043b\u043e\u0442\u043e\u0435-\u0441\u0435\u0447\u0435\u043d\u0438\u0435-\u043f\u0440\u043e\u043f\u043e\u0440\u0446\u0438\u044f-\u03c6",level:2},{value:"\u041f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0424\u0438\u0431\u043e\u043d\u0430\u0447\u0447\u0438",id:"\u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c-\u0444\u0438\u0431\u043e\u043d\u0430\u0447\u0447\u0438",level:3}],m={toc:k};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u041f\u0420\u041e\u0421\u0422\u0420\u0410\u041d\u0421\u0422\u0412\u041e \u0438 \u041e\u0422\u0421\u0422\u0423\u041f\u042b"),' - \u044d\u0442\u043e \u0442\u043e\u0436\u0435 \u0447\u0430\u0441\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438. \u041d\u0443\u0436\u043d\u043e \u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e ("\u0432\u043e\u0437\u0434\u0443\u0445") \u0434\u043b\u044f \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430 \u0441\u043b\u0435\u0432\u0430-\u0441\u043f\u0440\u0430\u0432\u0430, \u0441\u0432\u0435\u0440\u0445\u0443-\u0441\u043d\u0438\u0437\u0443, \u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u0431\u044b\u043b\u043e \u0437\u0430\u0433\u0440\u0430\u043c\u0430\u0436\u0434\u0435\u043d\u043d\u043e\u0441\u0442\u0438'),(0,a.kt)("li",{parentName:"ul"},"\u043f\u0440\u0438 \u0432\u044b\u0431\u043e\u0440\u0435 \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u0432\u0441\u0435\u0433\u0434\u0430 \u043e\u0442\u0442\u0430\u043b\u043a\u0438\u0432\u0430\u0439\u0442\u0435\u0441\u044c \u043e\u0442 \u0442\u0438\u043f\u0430 \u0438 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430 (\u0442\u0435\u043a\u0441\u0442 \u043d\u0430 \u0444\u043e\u0442\u043e \u043d\u0443\u0436\u043d\u043e \u0440\u0430\u0437\u043c\u0435\u0449\u0430\u0442\u044c \u0442\u0430\u043a, \u0447\u0442\u043e\u0431\u044b \u0435\u0433\u043e \u0431\u044b\u043b\u043e \u0432\u0438\u0434\u043d\u043e; \u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u0431\u043b\u043e\u043a\u0438 \u0442\u0435\u043a\u0441\u0442\u0430 \u043d\u0443\u0436\u043d\u043e \u0440\u0430\u0437\u0431\u0438\u0432\u0430\u0442\u044c \u043d\u0430 \u0430\u0431\u0437\u0430\u0446\u044b \u0438 \u0440\u0430\u0441\u043f\u043e\u043b\u0430\u0433\u0430\u0442\u044c \u0441 \u043b\u0435\u0432\u043e\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u044b \u043c\u0430\u043a\u0435\u0442\u0430 \u0438 \u0442.\u0434.)."),(0,a.kt)("li",{parentName:"ul"},"\u0443 \u0432\u0441\u0435\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0441\u0430\u0439\u0442\u0430 ",(0,a.kt)("strong",{parentName:"li"},"\u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e"),", \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0437\u043d\u0430\u043a\u043e\u043c\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u043f\u043e \u043e\u043f\u044b\u0442\u0443 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043c\u0435\u043d\u044e \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432\u0432\u0435\u0440\u0445\u0443 \u0441\u0430\u0439\u0442\u0430, \u043a\u043d\u043e\u043f\u043a\u0430 \u0440\u0430\u0437\u043c\u0435\u0449\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0441\u043b\u0435 \u043a\u0430\u043a\u043e\u0433\u043e-\u0442\u043e \u0442\u0435\u043a\u0441\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0434\u0433\u043e\u0442\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043a \u043a\u043b\u0438\u043a\u0443)."),(0,a.kt)("li",{parentName:"ul"},"\u043d\u0435 \u0438\u0437\u043e\u0431\u0440\u0435\u0442\u0430\u0439\u0442\u0435 \u0432\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434, \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043d\u0430 ",(0,a.kt)("strong",{parentName:"li"},"\u0433\u043e\u0442\u043e\u0432\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u043e\u043d\u043d\u044b\u0435")," \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0443\u0436\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u0430\u0439\u0442\u043e\u0432 \u0438 \u043f\u0435\u0440\u0435\u043d\u0438\u043c\u0430\u0439\u0442\u0435 \u0438\u0445 \u043e\u043f\u044b\u0442 \u0438 \u043e\u043f\u044b\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439."),(0,a.kt)("li",{parentName:"ul"},"\u042d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0432 \u0438\u0434\u0435\u0430\u043b\u0435 ",(0,a.kt)("strong",{parentName:"li"},"\u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0441\u0438\u043b\u044c\u043d\u043e \u0431\u043e\u043b\u044c\u0448\u0438\u043c\u0438"),", \u043b\u0443\u0447\u0448\u0435 \u043e\u0442\u0442\u0430\u043b\u043a\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u043e\u0442 \u043c\u0435\u043d\u044c\u0448\u0438\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u0432")),(0,a.kt)("h3",{id:"\u0437\u0430\u0434\u0430\u0447\u0438-\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438"},"\u0417\u0430\u0434\u0430\u0447\u0438 \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u041f\u043e\u0439\u043c\u0430\u0442\u044c ",(0,a.kt)("strong",{parentName:"li"},"\u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415")," (\u0412\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043e\u043c\u0438\u043d\u0430\u043d\u0442\u0430). \u0426\u0432\u0435\u0442, \u0440\u0430\u0437\u043c\u0435\u0440, \u043a\u043e\u043d\u0442\u0440\u0430\u0441\u0442, \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e"),(0,a.kt)("li",{parentName:"ul"},"\u0417\u0430\u0434\u0430\u0442\u044c ",(0,a.kt)("strong",{parentName:"li"},"\u041d\u0410\u041f\u0420\u0410\u0412\u041b\u0415\u041d\u0418\u0415")," (\u0418\u0435\u0440\u0430\u0440\u0445\u0438\u044f \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u043e\u0432, \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0447\u0442\u0435\u043d\u0438\u044f )"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u0423\u041f\u041e\u0420\u042f\u0414\u041e\u0427\u0418\u0422\u042c")," (\u0412\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u0435, \u0441\u0435\u0442\u043a\u0430)")),(0,a.kt)("h3",{id:"\u0432\u0438\u0434\u044b-\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0439"},"\u0412\u0438\u0434\u044b \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0439:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0421\u0438\u043c\u043c\u0435\u0442\u0440\u0438\u044f - \u0430\u0441\u0438\u043c\u043c\u0435\u0442\u0440\u0438\u044f"),(0,a.kt)("li",{parentName:"ul"},"\u0421\u0442\u0430\u0442\u0438\u043a\u0430 - \u0434\u0438\u043d\u0430\u043c\u0438\u043a\u0430")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u0434\u043e\u043c\u0438\u043d\u0430\u043d\u0442\u044b"},"\u0414\u041e\u041c\u0418\u041d\u0410\u041d\u0422\u042b"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0412\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043e\u043c\u0438\u043d\u0430\u043d\u0442\u0430")," - \u0442\u043e\u0447\u043a\u0430 \u0432 \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043e\u0434\u043d\u043e\u0437\u043d\u0430\u0447\u043d\u043e \u0446\u0435\u043f\u043b\u044f\u0435\u0442 ",(0,a.kt)("strong",{parentName:"p"},"\u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415"),". \u0414\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043e\u0434\u043d\u043e\u0437\u043d\u0430\u0447\u043d\u043e\u0439. \u0410\u043a\u0446\u0435\u043d\u0442. \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a, \u0440\u0438\u0441\u0443\u043d\u043e\u043a, \u0446\u0432\u0435\u0442, \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e, \u043a\u043e\u043d\u0442\u0440\u0430\u0441\u0442. "),(0,a.kt)("img",{src:"../../../img/design/composition.jpg",width:"350",alt:"composition.jpg"}),(0,a.kt)("p",null,"\u0425\u043e\u0440\u043e\u0448\u0438\u0439 \u0434\u0438\u0437\u0430\u0439\u043d \u0432\u044b\u0434\u0435\u043b\u044f\u0435\u0442 ",(0,a.kt)("strong",{parentName:"p"},"\u0413\u041b\u0410\u0412\u041d\u041e\u0415 \u0438 \u041f\u041e\u0414\u0427\u0418\u041d\u0401\u041d\u041d\u041e\u0415"),", \u0441\u043e\u0437\u0434\u0430\u0451\u0442 \u0418\u0415\u0420\u0410\u0420\u0425\u0418\u042e \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u043d\u0430\u0439\u0442\u0438 \u0441\u0432\u043e\u0439 \u043f\u0443\u0442\u044c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u0420\u0430\u0437\u043c\u0435\u0440\u043e\u043c"),". \u0427\u0435\u043c \u0431\u043e\u043b\u044c\u0448\u0435 - \u0442\u0435\u043c \u0437\u0430\u043c\u0435\u0442\u043d\u0435\u0435. \u041a\u043e\u043d\u0442\u0440\u0430\u0441\u0442 \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u0432"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u0426\u0432\u0435\u0442\u043e\u043c"),". \u0412\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0440\u0430\u0441\u0442\u043d\u044b\u043c \u0446\u0432\u0435\u0442\u043e\u043c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u041f\u0440\u043e\u0441\u0442\u0440\u0430\u0441\u0442\u0432\u043e"),". \u0423\u0441\u0438\u043b\u0438\u0432\u0430\u0435\u0442 \u0444\u043e\u043a\u0443\u0441 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u044f. \u041e\u0442\u0441\u0442\u0443\u043f\u044b. \u042f\u043a\u043e\u0440\u043d\u044b\u0435 \u043e\u0431\u043b\u0430\u0441\u0442\u0438"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u0418\u0435\u0440\u0430\u0440\u0445\u0438\u0438 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u043e\u0432"),". \u0421\u0430\u043c\u043e\u0435 \u0432\u0430\u0436\u043d\u043e\u0435 \u0431\u043e\u043b\u044c\u0448\u043e\u0435, \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u0435 - \u043c\u0435\u043d\u044c\u0448\u0435"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u0418\u0435\u0440\u0430\u0440\u0445\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432"),". \u0412\u0430\u0436\u043d\u044b\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0432\u044b\u0434\u0435\u043b\u044f\u0442\u044c\u0441\u044f \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u043c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u0424\u043e\u043d\u043e\u043c"),". \u041c\u043e\u0436\u043e \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0442\u044c \u0438\u043b\u0438 \u0440\u0430\u0437\u0434\u0435\u043b\u044f\u0442\u044c \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u0441\u043c\u044b\u0441\u043b\u043e\u0432\u044b\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b, \u0432\u044b\u0434\u0435\u043b\u044f\u0442\u044c \u0432\u0430\u0436\u043d\u044b\u0435"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u0421\u0435\u0442\u043a\u0430"),", \u043c\u043e\u0434\u0443\u043b\u044c\u043d\u043e\u0441\u0442\u044c. \u0421\u043e\u0437\u0434\u0430\u0451\u0442 \u043f\u043e\u0440\u044f\u0434\u043e\u043a, \u0440\u0438\u0442\u043c")),(0,a.kt)("h3",{id:"\u044f\u043a\u043e\u0440\u0438-\u0430\u043a\u0446\u0435\u043d\u0442\u043d\u044b\u0435-\u043e\u0431\u043b\u0430\u0441\u0442\u0438"},"\u042f\u043a\u043e\u0440\u0438 (\u0410\u043a\u0446\u0435\u043d\u0442\u043d\u044b\u0435 \u043e\u0431\u043b\u0430\u0441\u0442\u0438)"),(0,a.kt)("img",{src:"../../../img/design/anchors.jpg",width:"350",alt:"anchors.jpg"}),(0,a.kt)("img",{src:"../../../img/design/anchors2.jpg",width:"350",alt:"anchors2.jpg"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0447\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043e \u0440\u0430\u0441\u043f\u043e\u043b\u0430\u0433\u0430\u044e\u0442 \u0432 \u0432\u0435\u0440\u0445\u043d\u0438\u0439 \u043b\u0435\u0432\u044b\u0439 \u0443\u0433\u043e\u043b"),(0,a.kt)("li",{parentName:"ul"},"\u0418\u043b\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0438\u0438"),(0,a.kt)("li",{parentName:"ul"},"\u041a\u0440\u0443\u043f\u043d\u044b\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438"),(0,a.kt)("li",{parentName:"ul"},"\u041a\u043d\u043e\u043f\u043a\u0438, \u0418\u043a\u043e\u043d\u043a\u0438"),(0,a.kt)("li",{parentName:"ul"},"\u0422\u0435\u043a\u0441\u0442")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u043a\u043e\u043d\u0442\u0440\u0430\u0441\u0442"},"\u041a\u043e\u043d\u0442\u0440\u0430\u0441\u0442"),(0,a.kt)("img",{src:"../../../img/design/contrast.png",width:"550",alt:"contrast.png"}),(0,a.kt)("p",null,"\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0438\u0437 \u0433\u0440\u0443\u043f\u043f\u044b."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u0420\u0430\u0437\u043c\u0435\u0440")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u0424\u043e\u0440\u043c\u0430")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u0426\u0432\u0435\u0442")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u041d\u0430\u0441\u044b\u0449\u0435\u043d\u043d\u043e\u0441\u0442\u044c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u0422\u0435\u043a\u0441\u0442\u0443\u0440\u0430 / \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u044f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u0423\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u044c"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u0442\u0435\u043e\u0440\u0438\u044f-\u0431\u043b\u0438\u0437\u043e\u0441\u0442\u0438"},"\u0422\u0435\u043e\u0440\u0438\u044f \u0431\u043b\u0438\u0437\u043e\u0441\u0442\u0438"),(0,a.kt)("p",null,"\u041e\u0431\u044a\u0435\u043a\u0442\u044b, \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435 \u0431\u043b\u0438\u0437\u043a\u043e \u0434\u0440\u0443\u0433 \u043a \u0434\u0440\u0443\u0433\u0443, \u0440\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0431\u043b\u0438\u0436\u0435 \u0438 \u043f\u043e \u043b\u043e\u0433\u0438\u043a\u0435, \u0438 \u043f\u043e \u0441\u043c\u044b\u0441\u043b\u0443."),(0,a.kt)("p",null,"\u0413\u0435\u043e\u043c\u0435\u0442\u0440\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u0430 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043e\u0449\u0443\u0449\u0435\u043d\u0438\u0435 \u0421\u041a\u0420\u041e\u041b\u041b\u0418\u041d\u0413\u0410 \u0441\u0430\u0439\u0442\u0430."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u0433\u0435\u043e\u043c\u0435\u0442\u0440\u0438\u044f"},"\u0413\u0415\u041e\u041c\u0415\u0422\u0420\u0418\u042f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h3",{parentName:"li",id:"\u0442\u043e\u0447\u043a\u0430-"},"\u0422\u043e\u0447\u043a\u0430 \u2022"),(0,a.kt)("p",{parentName:"li"},'\u0412 \u0442\u0438\u043f\u043e\u0433\u0440\u0430\u0444\u0438\u043a\u0435 \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044c \u043b\u044e\u0431\u043e\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u0432 (\u043a\u043d\u043e\u043f\u043a\u0430, \u0438\u043a\u043e\u043d\u043a\u0430, \u043b\u043e\u0433\u043e\u0442\u0438\u043f, \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u0431\u0443\u043a\u0432\u044b \u0438 \u0446\u0438\u0444\u0440\u044b). \u0418\u043c\u0435\u044e\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u0438\u043d \u0444\u043e\u043a\u0443\u0441 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u044f. \u041a\u0440\u0443\u0433 - \u0447\u0430\u0441\u0442\u043d\u044b\u0439 \u0441\u043b\u0443\u0447\u0430\u0439 \u0442\u043e\u0447\u043a\u0438, \u0441\u0430\u043c\u0430\u044f "\u044d\u0433\u043e\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0444\u0438\u0433\u0443\u0440\u0430", \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u043f\u0440\u0438\u0442\u044f\u0433\u0438\u0432\u0430\u0435\u0442 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0430\u0446\u043a\u0446\u0435\u043d\u0442. \u0422\u043e\u0447\u0435\u0447\u043d\u044b\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0447\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043e \u0440\u0430\u0441\u043f\u043e\u043b\u0430\u0433\u0430\u044e\u0442 \u0432 ',(0,a.kt)("strong",{parentName:"p"},"\u042f\u041a\u041e\u0420\u042f\u0425"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h3",{parentName:"li",id:"\u043b\u0438\u043d\u0438\u044f-"},"\u041b\u0438\u043d\u0438\u044f \u2014"),(0,a.kt)("p",{parentName:"li"},"\u0421\u0442\u0440\u043e\u043a\u0430. \u0412 \u0442\u0438\u043f\u043e\u0433\u0440\u0430\u0444\u0438\u043a\u0435 \u044d\u0442\u043e \u0441\u0442\u0440\u043e\u043a\u0430, \u0441\u0430\u043c\u044b\u0439 \u0443\u0434\u043e\u0431\u043d\u044b\u0439, \u0447\u0438\u0442\u0430\u0431\u0435\u043b\u044c\u043d\u044b\u0439, \u0441\u043a\u0440\u043e\u043c\u043d\u044b\u0439, \u0441\u043f\u043e\u043a\u043e\u0439\u043d\u044b\u0439 \u0438 \u043b\u0430\u043a\u043e\u043d\u0438\u0447\u043d\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0432 \u0432\u0451\u0440\u0441\u0442\u043a\u0435. \u042d\u0442\u043e \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438, \u0445\u044d\u0434\u044d\u0440, \u0444\u0443\u0442\u0435\u0440, \u043d\u0435\u0432\u044b\u0441\u043e\u043a\u0438\u0435 \u0431\u043b\u043e\u043a\u0438. \u041a\u0430\u043a \u044f\u043a\u043e\u0440\u043d\u044b\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 \u0441\u0442\u0440\u043e\u043a\u0430 \u043b\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u0441\u0435\u0431\u044f \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0442 ",(0,a.kt)("strong",{parentName:"p"},"\u0421\u0412\u0415\u0420\u0425\u0423")," \u0438\u043b\u0438 ",(0,a.kt)("strong",{parentName:"p"},"\u0421\u041d\u0418\u0417\u0423")," \u043c\u043e\u0434\u0443\u043b\u044f. "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"\u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0435-\u043b\u0438\u043d\u0438\u0438"},"\u0413\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u043b\u0438\u043d\u0438\u0438"),(0,a.kt)("p",{parentName:"li"},"\u041e\u0441\u043d\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c, \u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u043e\u0441\u0442\u044c, \u0441\u043f\u043e\u043a\u043e\u0439\u0441\u0442\u0432\u0438\u0435, \u0443\u0440\u0430\u0432\u043d\u043e\u0432\u0435\u0448\u0430\u043d\u043d\u043e\u0441\u0442\u044c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"\u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0435-\u043b\u0438\u043d\u0438\u0438"},"\u0412\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u043b\u0438\u043d\u0438\u0438"),(0,a.kt)("p",{parentName:"li"},"\u0412\u0437\u043b\u0451\u0442, \u043f\u043e\u0434\u044a\u0435\u043c, \u0441\u0438\u043b\u0430")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"\u043d\u0430\u043a\u043b\u043e\u043d\u043d\u044b\u0435"},"\u041d\u0430\u043a\u043b\u043e\u043d\u043d\u044b\u0435"),(0,a.kt)("p",{parentName:"li"},"\u0420\u043e\u0441\u0442, \u043f\u0440\u0438\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435, \u043f\u043e\u0434\u044a\u0435\u043c, \u0434\u0438\u043d\u0430\u043c\u0438\u043a\u0430, \u0433\u0440\u0430\u0444\u0438\u043a\u0438")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"\u0440\u0432\u0430\u043d\u044b\u0435-\u043b\u0438\u043d\u0438\u0438"},"\u0420\u0432\u0430\u043d\u044b\u0435 \u043b\u0438\u043d\u0438\u0438"),(0,a.kt)("p",{parentName:"li"},"\u0414\u0432\u0438\u0436\u0435\u043d\u0438\u0435, \u0434\u0438\u043d\u0430\u043c\u0438\u043a\u0430, \u0441\u0432\u043e\u0431\u043e\u0434\u0430. \u0421\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441\u0435\u043a\u0446\u0438\u0439.")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h3",{parentName:"li",id:"\u043f\u0440\u044f\u043c\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a-"},"\u041f\u0440\u044f\u043c\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a \u2586"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u0423\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440")," \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0442\u0438\u043f\u043e\u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432: \u0442\u043e\u0447\u0435\u0447\u043d\u044b\u0445, \u0441\u0442\u0440\u043e\u0447\u043d\u044b\u0445 \u0438 \u043f\u0440\u044f\u043c\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u044b\u0445.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h3",{parentName:"li",id:"\u0442\u0440\u0435\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a-\u043b\u043e\u043c\u0430\u043d\u0430\u044f"},"\u0422\u0440\u0435\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a, \u043b\u043e\u043c\u0430\u043d\u0430\u044f"),(0,a.kt)("p",{parentName:"li"},"\u0420\u0435\u0437\u043a\u043e\u0441\u0442\u044c, \u0434\u0438\u043d\u0430\u043c\u0438\u043a\u0430, \u043c\u043e\u0434\u0435\u0440\u043d\u0438\u0437\u043c, \u0431\u0435\u0441\u043a\u043e\u043c\u043f\u0440\u043e\u043c\u0438\u0441\u0441\u043d\u043e\u0441\u0442\u044c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h3",{parentName:"li",id:"\u043a\u0440\u0443\u0433\u0438-\u043e\u0432\u0430\u043b\u044b"},"\u041a\u0440\u0443\u0433\u0438, \u043e\u0432\u0430\u043b\u044b"),(0,a.kt)("p",{parentName:"li"},"\u0421\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u0441\u0442\u0432\u043e, \u043b\u0451\u0433\u043a\u043e\u0441\u0442\u044c, \u043c\u044f\u0433\u043a\u043e\u0441\u0442\u044c"))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u0437\u043e\u043b\u043e\u0442\u043e\u0435-\u0441\u0435\u0447\u0435\u043d\u0438\u0435-\u043f\u0440\u043e\u043f\u043e\u0440\u0446\u0438\u044f-\u03c6"},"\u0417\u043e\u043b\u043e\u0442\u043e\u0435 \u0441\u0435\u0447\u0435\u043d\u0438\u0435 (\u043f\u0440\u043e\u043f\u043e\u0440\u0446\u0438\u044f \u03a6)"),(0,a.kt)("img",{src:"../../../img/design/golden-ratio.png",width:"350",alt:"golden-ratio.png"}),(0,a.kt)("p",null,"\u042d\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0446\u0435\u043b\u043e\u0433\u043e \u043d\u0430 2 \u0447\u0430\u0441\u0442\u0438, \u043f\u0440\u0438 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0435 \u0411\u041e\u041b\u042c\u0428\u0415\u0413\u041e / ",(0,a.kt)("strong",{parentName:"p"},"\u041c\u0415\u041d\u042c\u0428\u0415\u041c\u0423 = \u0426\u0415\u041b\u041e\u0413\u041e / \u0411\u041e\u041b\u042c\u0428\u0415\u041c\u0423 \u2248 1.618")),(0,a.kt)("p",null,"\u042d\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0446\u0435\u043b\u043e\u0433\u043e \u043d\u0430 2 \u0447\u0430\u0441\u0442\u0438, \u043f\u0440\u0438 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0435 \u041c\u0415\u041d\u042c\u0428\u0415\u0413\u041e / ",(0,a.kt)("strong",{parentName:"p"},"\u0411\u041e\u041b\u042c\u0428\u0415\u041c\u0423 = \u0411\u041e\u041b\u042c\u0428\u0415\u0413\u041e / \u0426\u0415\u041b\u041e\u041c\u0423 \u2248 0,618")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1 = 0.618 + 0.382 \u2248 62% + 38%;\n\u03a6 = 0.618 / 0.382 = 1.618;\n\u03a62 - \u03a6 = 1; \n")),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 \u043d\u0443\u0436\u043d\u043e \u043d\u0430\u0439\u0442\u0438 \u0411\u041e\u041b\u042c\u0428\u0423\u042e \u0447\u0430\u0441\u0442\u044c, \u0442\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0426\u0415\u041b\u041e\u0413\u041e \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u0434\u0435\u043b\u0438\u0442\u044c \u043d\u0430 \u03a6 (\u043b\u0438\u0431\u043e \u0443\u043c\u043d\u043e\u0436\u0438\u0442\u044c \u043d\u0430 0,618)."),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 \u043d\u0443\u0436\u043d\u043e \u043d\u0430\u0439\u0442\u0438 \u041c\u0415\u041d\u042c\u0428\u0423\u042e \u0447\u0430\u0441\u0442\u044c, \u0442\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0426\u0415\u041b\u041e\u0413\u041e \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u0434\u0435\u043b\u0438\u0442\u044c \u043d\u0430 \u03a62 (\u043b\u0438\u0431\u043e \u0443\u043c\u043d\u043e\u0436\u0438\u0442\u044c 0,382)."),(0,a.kt)("h3",{id:"\u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c-\u0444\u0438\u0431\u043e\u043d\u0430\u0447\u0447\u0438"},"\u041f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0424\u0438\u0431\u043e\u043d\u0430\u0447\u0447\u0438"),(0,a.kt)("p",null,"\u041a\u0430\u0436\u0434\u044b\u0439 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0447\u043b\u0435\u043d \u0440\u044f\u0434\u0430 \u0440\u0430\u0432\u0435\u043d \u0441\u0443\u043c\u043c\u0435 \u0434\u0432\u0443\u0445 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0445. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0435 \u0447\u043b\u0435\u043d\u043e\u0432 \u044d\u0442\u043e\u0433\u043e \u0440\u044f\u0434\u0430 \u0431\u0443\u0434\u0435\u0442 \u0441\u0442\u0440\u0435\u043c\u0438\u0442\u044c\u0441\u044f \u043a \u03a6."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34 + ... + n + (n+1) + ...; \n\n(n+1):n ---\x3e \u03a6\n")))}u.isMDXComponent=!0}}]);