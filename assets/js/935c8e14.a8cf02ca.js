"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[90],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=r.createContext({}),d=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=d(t.components);return r.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,l=t.originalType,i=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),u=d(n),f=o,b=u["".concat(i,".").concat(f)]||u[f]||s[f]||l;return n?r.createElement(b,a(a({ref:e},p),{},{components:n})):r.createElement(b,a({ref:e},p))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=n.length,a=new Array(l);a[0]=u;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:o,a[1]=c;for(var d=2;d<l;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3827:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const l={title:"\u0422\u0430\u0431\u043b\u0438\u0446\u044b",sidebar_position:4},a=void 0,c={unversionedId:"frontend/html/tables",id:"frontend/html/tables",title:"\u0422\u0430\u0431\u043b\u0438\u0446\u044b",description:"\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430 CSS \u0434\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446",source:"@site/docs/frontend/html/tables.md",sourceDirName:"frontend/html",slug:"/frontend/html/tables",permalink:"/knowledge-bank/docs/frontend/html/tables",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/html/tables.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u0422\u0430\u0431\u043b\u0438\u0446\u044b",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u0421\u043f\u0438\u0441\u043a\u0438",permalink:"/knowledge-bank/docs/frontend/html/lists"},next:{title:"\u0421\u0441\u044b\u043b\u043a\u0438",permalink:"/knowledge-bank/docs/frontend/html/links"}},i={},d=[{value:"\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430 CSS \u0434\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446",id:"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430-css-\u0434\u043b\u044f-\u0442\u0430\u0431\u043b\u0438\u0446",level:3}],p={toc:d};function s(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<table>\n  \x3c!-- \u0415\u0441\u043b\u0438 \u0441\u0442\u0440\u043e\u0433\u043e \u043d\u0443\u0436\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0448\u0438\u0440\u0438\u043d\u0443 \u043a\u043e\u043b\u043e\u043d\u043e\u043a --\x3e\n  <colgroup>\n    <col width="100" />\n    <col width="300" />\n    <col width="150" />\n  </colgroup>\n\n  <caption>\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u044b</caption>\n\n  <thead>\n    <tr>\n      <td colspan="3">\u0413\u043e\u043b\u043e\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430</td>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr>\n      <td>1 - 1</td>\n      <td>1 - 2</td>\n      <td rowspan="2">1 - 3</td>\n    </tr>\n    <tr>\n      <td>2 - 1</td>\n      <td>2 - 2</td>\n    </tr>\n  </tbody>\n\n  <tfoot>\n    <tr>\n      <td colspan="3">\u0424\u0443\u0442\u0435\u0440 \u0442\u0430\u0431\u043b\u0438\u0446\u044b</td>\n    </tr>\n  </tfoot>\n</table>\n')),(0,o.kt)("h3",{id:"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430-css-\u0434\u043b\u044f-\u0442\u0430\u0431\u043b\u0438\u0446"},"\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430 CSS \u0434\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".table {\n  border-spacing: 5px; - \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043c\u0435\u0436\u0434\u0443 \u0433\u0440\u0430\u043d\u0438\u0446\u0430\u043c\u0438\n  border-collapse: separate; - \u0433\u0440\u0430\u043d\u0438\u0446\u044b \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u044b(\u043f\u043e \u0443\u043c.)\n  border-collapse: collapse; - \u0433\u0440\u0430\u043d\u0438\u0446\u044b \u0441\u043b\u0438\u043f\u043b\u0438\u0441\u044c\n  cellspacing: 5px; - \u043e\u0442\u0441\u0442\u0443\u043f\u044b \u043c\u0435\u0436\u0434\u0443 \u044f\u0447\u0435\u0439\u043a\u0430\u043c\u0438\n  border-spacing: 5px 10px; - \u043e\u0442\u0441\u0442\u0443\u043f\u044b \u043c\u0435\u0436\u0434\u0443 \u044f\u0447\u0435\u0439\u043a\u0430\u043c\u0438\n  table-layout: fixed; - ???\n  \u0438\u043b\u0438 padding \u0434\u043b\u044f \u044f\u0447\u0435\u0435\u043a\n  caption-side: |top|bottom| - \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b\n}\n")),(0,o.kt)("table",null,(0,o.kt)("colgroup",null,(0,o.kt)("col",{width:"100"}),(0,o.kt)("col",{width:"300"}),(0,o.kt)("col",{width:"150"})),(0,o.kt)("caption",null,"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u044b"),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("td",{colspan:"3"},"\u0413\u043e\u043b\u043e\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"1 - 1"),(0,o.kt)("td",null,"1 - 2"),(0,o.kt)("td",{rowspan:"2"},"1 - 3")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"2 - 1"),(0,o.kt)("td",null,"2 - 2"))),(0,o.kt)("tfoot",null,(0,o.kt)("tr",null,(0,o.kt)("td",{colspan:"3"},"\u0424\u0443\u0442\u0435\u0440 \u0442\u0430\u0431\u043b\u0438\u0446\u044b")))))}s.isMDXComponent=!0}}]);