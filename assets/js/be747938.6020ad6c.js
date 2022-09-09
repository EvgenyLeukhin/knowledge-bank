"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9746],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=l,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||a;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(7462),l=(n(7294),n(3905));const a={title:"\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0440\u0430\u0437\u043c\u0435\u0442\u043a\u0430",sidebar_position:0},i=void 0,o={unversionedId:"frontend/html/basics",id:"frontend/html/basics",title:"\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0440\u0430\u0437\u043c\u0435\u0442\u043a\u0430",description:"- MDN - HTML",source:"@site/docs/frontend/html/basics.md",sourceDirName:"frontend/html",slug:"/frontend/html/basics",permalink:"/knowledge-bank/docs/frontend/html/basics",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/html/basics.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0440\u0430\u0437\u043c\u0435\u0442\u043a\u0430",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"HTML </>",permalink:"/knowledge-bank/docs/category/html-"},next:{title:"\u0421\u0441\u044b\u043b\u043a\u0438",permalink:"/knowledge-bank/docs/frontend/html/links"}},s={},p=[{value:"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u044f\u0437\u044b\u043a\u0430 html",id:"\u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441-\u044f\u0437\u044b\u043a\u0430-html",level:2},{value:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 html-\u0444\u0430\u0439\u043b\u0430",id:"\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430-html-\u0444\u0430\u0439\u043b\u0430",level:2},{value:"\u0421\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430",id:"\u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435-\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435-\u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430",level:2},{value:"\u0411\u043b\u043e\u0447\u043d\u044b\u0435 \u0442\u044d\u0433\u0438",id:"\u0431\u043b\u043e\u0447\u043d\u044b\u0435-\u0442\u044d\u0433\u0438",level:2},{value:"\u0422\u044d\u0433\u0438-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b",id:"\u0442\u044d\u0433\u0438-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b",level:3},{value:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438 \u0438 \u043f\u0430\u0440\u0430\u0433\u0440\u0430\u0444\u044b",id:"\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438-\u0438-\u043f\u0430\u0440\u0430\u0433\u0440\u0430\u0444\u044b",level:3},{value:"\u0421\u0442\u0440\u043e\u0447\u043d\u044b\u0435 \u0442\u044d\u0433\u0438",id:"\u0441\u0442\u0440\u043e\u0447\u043d\u044b\u0435-\u0442\u044d\u0433\u0438",level:2},{value:"\u0421\u0438\u043c\u0432\u043e\u043b\u044b",id:"\u0441\u0438\u043c\u0432\u043e\u043b\u044b",level:2},{value:"\u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f",id:"\u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f",level:2}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/ru/docs/Web/HTML"},"MDN - HTML")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://webref.ru/html"},"webref")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://htmlbook.ru/html/"},"htmlbook"))),(0,l.kt)("h2",{id:"\u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441-\u044f\u0437\u044b\u043a\u0430-html"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u044f\u0437\u044b\u043a\u0430 html"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"HTML \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u0442\u044d\u0433\u043e\u0432. \u0422\u044d\u0433\u0438 \u044d\u0442\u043e - ",(0,l.kt)("strong",{parentName:"li"},'"\u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0431\u043b\u043e\u043a\u0438"')," web-\u0441\u0442\u0440\u0430\u043d\u0438\u0446"),(0,l.kt)("li",{parentName:"ul"},"\u0422\u044d\u0433\u0438 \u0431\u044b\u0432\u0430\u044e\u0442 ",(0,l.kt)("strong",{parentName:"li"},"\u0431\u043b\u043e\u0447\u043d\u044b\u043c\u0438")," \u0438 ",(0,l.kt)("strong",{parentName:"li"},"\u0441\u0442\u0440\u043e\u0447\u043d\u044b\u043c\u0438")),(0,l.kt)("li",{parentName:"ul"},"\u0422\u044d\u0433\u0438 \u0431\u044b\u0432\u0430\u044e\u0442 ",(0,l.kt)("strong",{parentName:"li"},"\u043f\u0430\u0440\u043d\u044b\u043c\u0438"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u043a\u0440\u044b\u0432\u0430\u0442\u044c ",(0,l.kt)("inlineCode",{parentName:"li"},"<p>Text</p>")," \u0438 ",(0,l.kt)("strong",{parentName:"li"},"\u043e\u0434\u0438\u043d\u043e\u0447\u043d\u044b\u043c\u0438")," ",(0,l.kt)("inlineCode",{parentName:"li"},"<hr />")),(0,l.kt)("li",{parentName:"ul"},"\u0422\u044d\u0433\u0438 \u043c\u043e\u0433\u0443\u0442 \u0438\u043c\u0435\u044e\u0442 ",(0,l.kt)("strong",{parentName:"li"},"\u0430\u0442\u0442\u0440\u0438\u0431\u0443\u0442\u044b")," (",(0,l.kt)("inlineCode",{parentName:"li"},"class"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"id"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"style"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"hidden")," \u0438 \u0442. \u0434.)"),(0,l.kt)("li",{parentName:"ul"},"\u0422\u044d\u0433 \u043c\u043e\u0436\u0435\u0442 \u0438\u043c\u0435\u0442\u044c ",(0,l.kt)("strong",{parentName:"li"},"\u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u043d\u0442"),", \u0430 \u043c\u043e\u0436\u0435\u0442 \u043d\u0435 \u0438\u043c\u0435\u0442\u044c (\u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0442\u043e\u0433\u043e \u043a\u0430\u043a\u043e\u0439 \u0442\u044d\u0433)"),(0,l.kt)("li",{parentName:"ul"},"\u0410\u0442\u0442\u0440\u0438\u0431\u0443\u0442 \u043c\u043e\u0436\u0435\u0442 \u0438\u043c\u0435\u0442\u044c ",(0,l.kt)("strong",{parentName:"li"},"\u043e\u0434\u043d\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e")," ",(0,l.kt)("inlineCode",{parentName:"li"},'id="price"'),", ",(0,l.kt)("strong",{parentName:"li"},"\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432")," ",(0,l.kt)("inlineCode",{parentName:"li"},'style="color: red; font-size: 16px;"'),", \u043b\u0438\u0431\u043e ",(0,l.kt)("strong",{parentName:"li"},"\u043d\u0435 \u0438\u043c\u0435\u0442\u044c \u0441\u0432\u043e\u0439\u0441\u0442\u0432 \u0432\u043e\u043e\u0431\u0449\u0435")," ",(0,l.kt)("inlineCode",{parentName:"li"},"hidden"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<\u0442\u044d\u04331 \u0430\u0442\u0442\u0440\u0438\u0431\u0443\u04421="\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e1-\u0430\u0442\u0442\u0440\u0438\u0431\u0443\u0442\u04301-\u0442\u044d\u0433\u04301" \u0430\u0442\u0442\u0440\u0438\u0431\u0443\u04422="\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e1-\u0430\u0442\u0442\u0440\u0438\u0431\u0443\u0442\u04302-\u0442\u044d\u0433\u04301">\n  <\u0442\u044d\u04332 \u0430\u0442\u0442\u0440\u0438\u0431\u0443\u04421="\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e1-\u0430\u0442\u0442\u0440\u0438\u0431\u0443\u0442\u04301-\u0442\u044d\u0433\u04302" \u0430\u0442\u0442\u0440\u0438\u0431\u0443\u04422="\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e1-\u0430\u0442\u0442\u0440\u0438\u0431\u0443\u0442\u04302-\u0442\u044d\u0433\u04302">\n    \u041a\u043e\u043d\u0442\u0435\u043d\u0442 \u0442\u044d\u0433\u04302\n  </\u0442\u044d\u04332>\n<\u0442\u044d\u04331>\n')),(0,l.kt)("h2",{id:"\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430-html-\u0444\u0430\u0439\u043b\u0430"},"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 html-\u0444\u0430\u0439\u043b\u0430"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"html-\u0444\u0430\u0439\u043b\u044b")," - \u044d\u0442\u043e \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430\u0445. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f web-\u0441\u0442\u0440\u0430\u043d\u0438\u0446, web-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439, email-\u0440\u0430\u0441\u0441\u044b\u043b\u043e\u043a \u0438 \u0434\u0430\u0436\u0435 \u0434\u043b\u044f desktop-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439."),(0,l.kt)("li",{parentName:"ul"},"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0435 ",(0,l.kt)("strong",{parentName:"li"},"\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")," html - \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430 \u043d\u0430 \u0431\u043b\u043e\u043a\u0438 (\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430, \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"html-\u0444\u0430\u0439\u043b\u044b")," \u0441\u0430\u0439\u0442\u043e\u0432 \u0440\u0430\u0441\u043f\u043e\u043b\u0430\u044e\u0442\u0441\u044f \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445, \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0434\u0435\u043b\u0430\u0435\u0442 \u043d\u0430 \u043d\u0438\u0445 \u0437\u0430\u043f\u0440\u043ec, \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u0435\u0442 \u0438\u0445 \u0438 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442 \u043f\u0430\u0440\u0441\u0438\u043d\u0433 html-\u043a\u043e\u0434\u0430, \u043f\u043e\u0441\u043b\u0435 \u0447\u0435\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043c\u043e\u0436\u0435\u0442 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0441 \u0434\u0430\u043d\u043d\u044b\u043c \u0441\u0430\u0439\u0442\u043e\u043c."),(0,l.kt)("li",{parentName:"ul"},'\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 html-\u0444\u0430\u0439\u043b\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043f\u043e \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0443 "\u043c\u0430\u0442\u0440\u0451\u0448\u043a\u0438", \u043e\u0434\u043d\u0438 \u0442\u044d\u0433\u0438 \u0432\u043b\u043e\u0436\u0435\u043d\u044b \u0432 \u0434\u0440\u0443\u0433\u0438\u0435, \u0430 \u0442\u0435 \u043c\u043e\u0433\u0443\u0442 \u0438\u043c\u0435\u0442\u044c \u0441\u0432\u043e\u0438 \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435 (\u0440\u043e\u0434\u0438\u0442\u0435\u043b\u0438-\u0434\u0435\u0442\u0438, parents-children) \u0438 \u0442.\u0434. \u041d\u0430\u0443\u0447\u043d\u044b\u043c \u044f\u0437\u044b\u043a\u043e\u043c \u044d\u0442\u0430 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f ',(0,l.kt)("strong",{parentName:"li"},"DOM-tree")," (Document Object Model)."),(0,l.kt)("li",{parentName:"ul"},"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044e\u0442\u0441\u044f \u0441\u0432\u0435\u0440\u0445\u0443-\u0432\u043d\u0438\u0437, \u0441\u043b\u0435\u0432\u0430 \u043d\u0430\u043f\u0440\u0430\u0432\u043e.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'\x3c!-- \u0412\u0435\u0440\u0441\u0438\u044f html (5-\u044f \u0432\u0435\u0440\u0441\u0438\u044f) --\x3e\n<!DOCTYPE html>\n\n<html lang="ru">\n  \x3c!-- \u0421\u043b\u0443\u0436\u0435\u0431\u043d\u0430\u044f (\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f) \u0447\u0430\u0441\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b --\x3e\n  <head>\n    <title>\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0432\u043e \u0432\u043a\u043b\u0430\u0434\u043a\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430</title>\n\n    \x3c!-- CSS \u0432\u043d\u0443\u0442\u0440\u0438 head --\x3e\n    <style>\n      body { padding: 0; }\n      .text { font-style: italic; }\n    </style>\n\n    \x3c!-- JS \u0432\u043d\u0443\u0442\u0440\u0438 head --\x3e\n    <script>\n      console.log(\'This text is loaded from head-tag\');\n    <\/script>\n  </head>\n\n  \x3c!-- \u041a\u043e\u043d\u0442\u0435\u043d\u0442\u043d\u0430\u044f (\u0432\u0438\u0434\u0438\u043c\u0430\u044f) \u0447\u0430\u0441\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b --\x3e\n  <body>\n    <h1 class="title">Some title</h1>\n    <p class="text">Some text</p>\n\n\n    \x3c!-- \u0418\u043d\u043b\u0430\u0439\u043d \u0441\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0447\u0435\u0440\u0435\u0437 \u0430\u0442\u0442\u0440\u0438\u0431\u0443\u0442 style --\x3e\n    <span style="color: red; font-weight: bold;">Some string1</span>\n    <br />\n    <span style="color: green; font-weight: normal;">Some string2</span>\n\n    \x3c!-- \u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438 \u0432\u043d\u0443\u0442\u0440\u0438 html \u043d\u0435 \u0431\u0443\u0434\u0443\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 --\x3e\n  </body>\n</html>\n')),(0,l.kt)("h2",{id:"\u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435-\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435-\u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430"},"\u0421\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430"),(0,l.kt)("p",null,"\u0420\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430 \u043f\u043e \u0441\u043c\u044b\u0441\u043b\u043e\u0432\u043e\u043c\u0443 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e (\u0434\u043b\u044f \u043b\u0443\u0447\u0448\u0435\u0439 \u0438\u043d\u0434\u0435\u043a\u0441\u0430\u0446\u0438\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043e\u043c)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>...</head>\n\n  <body>\n    <header>HEADER</header>\n    <aside>ASIDE</aside>\n\n    <main>\n      <section>SECTION1</section>\n      <section>SECTION2</section>\n      <section>\n        SECTION3\n \n        <article>SOME ARTICLE</article>\n      </section>\n    </main>\n\n    <footer>FOOTER</footer>\n  </body>\n</html>\n')),(0,l.kt)("h2",{id:"\u0431\u043b\u043e\u0447\u043d\u044b\u0435-\u0442\u044d\u0433\u0438"},"\u0411\u043b\u043e\u0447\u043d\u044b\u0435 \u0442\u044d\u0433\u0438"),(0,l.kt)("h3",{id:"\u0442\u044d\u0433\u0438-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b"},"\u0422\u044d\u0433\u0438-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"<","div",">")," - \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u0439 \u0431\u043b\u043e\u0447\u043d\u044b\u0439 \u0442\u044d\u0433-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<div>\u041c\u043e\u0436\u043d\u043e \u0440\u0430\u0441\u043f\u043e\u043b\u0430\u0433\u0430\u0442\u044c \u0432\u0441\u0435, \u0447\u0442\u043e \u0443\u0433\u043e\u0434\u043d\u043e</div>\n")),(0,l.kt)("p",null,"\u041a \u0431\u043b\u043e\u0447\u043d\u044b\u043c \u0442\u044d\u0433\u0430\u043c \u0442\u0430\u043a\u0436\u0435 \u043e\u0442\u043d\u043e\u0441\u044f\u0442\u0441\u044f: "),(0,l.kt)("h3",{id:"\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438-\u0438-\u043f\u0430\u0440\u0430\u0433\u0440\u0430\u0444\u044b"},"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438 \u0438 \u043f\u0430\u0440\u0430\u0433\u0440\u0430\u0444\u044b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<h1>\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 1-\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f</h1>\n<h2>\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 2-\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f</h2>\n<h3>\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 3-\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f</h3>\n<h4>\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 4-\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f</h4>\n<h5>\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 5-\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f</h5>\n<h6>\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 6-\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f</h6>\n\n<p>\n  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, perspiciatis cumque. Illum sed accusantium suscipit? Distinctio, exercitationem nemo! Possimus debitis tempore nesciunt, fugit obcaecati dolores provident soluta nulla illum vero.\n</p>\n\n<blockquote>\u0426\u0438\u0442\u0430\u0442\u044b</blockquote>\n")),(0,l.kt)("h2",{id:"\u0441\u0442\u0440\u043e\u0447\u043d\u044b\u0435-\u0442\u044d\u0433\u0438"},"\u0421\u0442\u0440\u043e\u0447\u043d\u044b\u0435 \u0442\u044d\u0433\u0438"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"<","span",">")," - \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0442\u0440\u043e\u0447\u043d\u044b\u0439 \u0442\u044d\u0433."),(0,l.kt)("p",null,"\u0412 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0441\u0441\u044b\u043b\u043e\u043a \u0438 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0442\u0435\u043a\u0441\u0442\u0430."),(0,l.kt)("h2",{id:"\u0441\u0438\u043c\u0432\u043e\u043b\u044b"},"\u0421\u0438\u043c\u0432\u043e\u043b\u044b"),(0,l.kt)("h2",{id:"\u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f"},"\u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f"))}c.isMDXComponent=!0}}]);