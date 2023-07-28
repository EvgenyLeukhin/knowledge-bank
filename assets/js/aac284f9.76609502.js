"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[3985],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=l.createContext({}),p=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(i,".").concat(m)]||d[m]||c[m]||a;return n?l.createElement(k,o(o({ref:t},u),{},{components:n})):l.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8293:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var l=n(7462),r=(n(7294),n(3905));const a={title:"\u041e React",sidebar_position:0},o=void 0,s={unversionedId:"frontend/react/about",id:"frontend/react/about",title:"\u041e React",description:"React official docs - ru.reactjs.org",source:"@site/docs/frontend/react/about.md",sourceDirName:"frontend/react",slug:"/frontend/react/about",permalink:"/knowledge-bank/docs/frontend/react/about",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/react/about.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"\u041e React",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"React \u269b",permalink:"/knowledge-bank/docs/category/react-"},next:{title:"React-c\u0442\u044d\u043a",permalink:"/knowledge-bank/docs/frontend/react/stack"}},i={},p=[{value:"Virtual DOM",id:"virtual-dom",level:2},{value:"Lifecycle",id:"lifecycle",level:2},{value:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b",id:"\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b",level:2},{value:"\u0417\u0430\u043f\u0438\u0441\u044c \u0447\u0435\u0440\u0435\u0437 \u0444\u0443\u043d\u043a\u0446\u0438\u044e",id:"\u0437\u0430\u043f\u0438\u0441\u044c-\u0447\u0435\u0440\u0435\u0437-\u0444\u0443\u043d\u043a\u0446\u0438\u044e",level:3},{value:"\u0417\u0430\u043f\u0438\u0441\u044c \u0447\u0435\u0440\u0435\u0437 \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0443",id:"\u0437\u0430\u043f\u0438\u0441\u044c-\u0447\u0435\u0440\u0435\u0437-\u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0443",level:3},{value:"\u0417\u0430\u043f\u0438\u0441\u044c \u0447\u0435\u0440\u0435\u0437 \u043a\u043b\u0430\u0441\u0441",id:"\u0437\u0430\u043f\u0438\u0441\u044c-\u0447\u0435\u0440\u0435\u0437-\u043a\u043b\u0430\u0441\u0441",level:3},{value:"\u041f\u0440\u043e\u043f\u0441\u044b (props)",id:"\u043f\u0440\u043e\u043f\u0441\u044b-props",level:2},{value:"SPA",id:"spa",level:2},{value:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u0432 SPA:",id:"\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b-\u043a\u043e\u0442\u043e\u0440\u044b\u0435-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442-\u0432-spa",level:3},{value:"\u0421\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f",id:"\u0441\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f",level:2},{value:"\u0410\u0442\u0442\u0440\u0438\u0431\u0443\u0442 style",id:"\u0430\u0442\u0442\u0440\u0438\u0431\u0443\u0442-style",level:3},{value:"\u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u0438\u043b\u0438",id:"\u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0435-\u0441\u0442\u0438\u043b\u0438",level:3},{value:"CSS-\u043c\u043e\u0434\u0443\u043b\u0438",id:"css-\u043c\u043e\u0434\u0443\u043b\u0438",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435",id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435",level:4},{value:"JSS - css in js",id:"jss---css-in-js",level:3},{value:"Styled-component",id:"styled-component",level:3},{value:"PostCSS",id:"postcss",level:3},{value:"React Compound Components",id:"react-compound-components",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://react.dev"},"React official docs")," - ru.reactjs.org"),(0,r.kt)("p",null,"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 (18-\u044f \u0432\u0435\u0440\u0441\u0438\u044f) \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0430\u044f:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Virtual DOM"),(0,r.kt)("li",{parentName:"ul"},"SPA. \u0421\u043c\u0435\u043d\u0430 \u0440\u043e\u0443\u0442\u043e\u0432 \u0431\u0435\u0437 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b"),(0,r.kt)("li",{parentName:"ul"},"\u0416\u0438\u0437\u043d\u0435\u043d\u043d\u044b\u0439 \u0446\u0438\u043a\u043b \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 (\u041c\u043e\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435, \u0440\u0430\u0437\u043c\u043e\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445)"),(0,r.kt)("li",{parentName:"ul"},"\u041c\u043e\u0434\u0443\u043b\u044c\u043d\u043e\u0441\u0442\u044c. \u0412\u043e \u0432\u043d\u0443\u0442\u0440\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u043c\u043e\u0436\u043d\u043e \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0441\u0435 \u0447\u0442\u043e \u0443\u0433\u043e\u0434\u043d\u043e"),(0,r.kt)("li",{parentName:"ul"},"ES6, jsx-\u0448\u0430\u0431\u043b\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044e \u0438 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0441\u0430\u0445\u0430\u0440")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"virtual-dom"},"Virtual DOM"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0420\u0435\u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c (\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 DOM, \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e JS \u0433\u043e\u0440\u0430\u0437\u0434\u043e \u0431\u044b\u0441\u0442\u0440\u0435\u0435, \u0447\u0435\u043c \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043c\u0435\u0436\u0434\u0443 \u0441\u0442\u0430\u0442\u0438\u0447\u043d\u044b\u043c\u0438 html-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u043c\u0438);"),(0,r.kt)("li",{parentName:"ul"},"Virtual DOM \u0441\u0442\u0440\u043e\u0438\u0442\u044c\u0441\u044f \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 jsx-\u0440\u0430\u0437\u043c\u0435\u0442\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 React-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f;"),(0,r.kt)("li",{parentName:"ul"},"Real DOM \u044d\u0442\u043e \u0442\u043e\u0447\u043d\u0430\u044f \u043a\u043e\u043f\u0438\u044f Virtual DOM \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0432\u0440\u0435\u043c\u0435\u043d\u0438;"),(0,r.kt)("li",{parentName:"ul"},"\u041d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 Virtual DOM \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f Real DOM \u0447\u0435\u0440\u0435\u0437 js-\u043c\u0435\u0442\u043e\u0434 ",(0,r.kt)("inlineCode",{parentName:"li"},"createElement()"),";"),(0,r.kt)("li",{parentName:"ul"},"Real DOM \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u0441\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0441 Virtual DOM, \u0438 \u0435\u0441\u043b\u0438 Virtual DOM \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043b\u0438\u0447\u0430\u0435\u0442\u0441\u044f \u043e\u0442 Real DOM, \u0442\u043e \u0438\u043c\u0435\u043d\u043d\u043e \u0442\u043e, \u0447\u0442\u043e \u043e\u0442\u043b\u0438\u0447\u0430\u0435\u0442\u0441\u044f \u0431\u0443\u0434\u0435\u0442 \u0441\u0440\u0430\u0437\u0443 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u0432 Real DOM;"),(0,r.kt)("li",{parentName:"ul"},"\u041f\u0440\u043e\u0446\u0435\u0441\u0441 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f/\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f/\u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f Real DOM \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 Virtual DOM \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f ",(0,r.kt)("strong",{parentName:"li"},"\u0436\u0438\u0437\u043d\u0435\u043d\u043d\u044b\u043c \u0446\u0438\u043a\u043b\u043e\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432")," React-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"lifecycle"},"Lifecycle"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mount"),"/",(0,r.kt)("strong",{parentName:"p"},"Render")," --\x3e ",(0,r.kt)("strong",{parentName:"p"},"Update")," --\x3e ",(0,r.kt)("strong",{parentName:"p"},"Unmont")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b"},"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b"),(0,r.kt)("p",null,'\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b - "\u043a\u0443\u0441\u043e\u0447\u043a\u0438" \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u044b\u0432\u0430\u0442\u044c \xab\u0430\u0442\u043e\u043c\u0430\u0440\u043d\u044b\u0435\xbb \u0447\u0430\u0441\u0442\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u043e\u0434\u0438\u043d \u0440\u0430\u0437 \u0438 \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e. \u0422\u0430\u043a\u043e\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0443\u0436\u0435 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0435 \u0440\u0430\u043d\u0435\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b. \u0412 \u043a\u0430\u0436\u0434\u043e\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0435 \u043c\u043e\u0436\u043d\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u0432\u043e\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f.'),(0,r.kt)("p",null,"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0441\u043b\u043e\u0436\u043d\u044b\u043c\u0438: \u0441\u043e\u0441\u0442\u043e\u044f\u0449\u0438\u043c\u0438 \u0438\u0437 \u0434\u0440\u0443\u0433\u0438\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0442\u0430\u043a\u0436\u0435 \u0430\u0442\u043e\u043c\u0430\u0440\u043d\u044b\u0435.\n\u042d\u0442\u043e\u0442 \u043f\u043e\u0434\u0445\u043e\u0434 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043a \u043e\u0431\u0449\u0435\u0439 \u0432\u0451\u0440\u0441\u0442\u043a\u0435, \u043d\u043e \u0438 \u043a: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JavaScript,"),(0,r.kt)("li",{parentName:"ul"},"CSS,"),(0,r.kt)("li",{parentName:"ul"},"HTML,"),(0,r.kt)("li",{parentName:"ul"},"\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430\u043c \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f.")),(0,r.kt)("h3",{id:"\u0437\u0430\u043f\u0438\u0441\u044c-\u0447\u0435\u0440\u0435\u0437-\u0444\u0443\u043d\u043a\u0446\u0438\u044e"},"\u0417\u0430\u043f\u0438\u0441\u044c \u0447\u0435\u0440\u0435\u0437 \u0444\u0443\u043d\u043a\u0446\u0438\u044e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// export\nexport function SomeComponent() {\n  return (\n    <div>SomeComponent</div>\n  )\n}\n\n// export default\nexport default function SomeComponent() {\n  return (\n    <div>SomeComponent</div>\n  )\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u0437\u0430\u043f\u0438\u0441\u044c-\u0447\u0435\u0440\u0435\u0437-\u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0443"},"\u0417\u0430\u043f\u0438\u0441\u044c \u0447\u0435\u0440\u0435\u0437 \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0443"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const SomeComponent = () => {\n  return (\n    <div>SomeComponent</div>\n  )\n}\n\nexport default SomeComponent;\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u0437\u0430\u043f\u0438\u0441\u044c-\u0447\u0435\u0440\u0435\u0437-\u043a\u043b\u0430\u0441\u0441"},"\u0417\u0430\u043f\u0438\u0441\u044c \u0447\u0435\u0440\u0435\u0437 \u043a\u043b\u0430\u0441\u0441"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Component } from 'react';\n\nclass SomeComponent extends Component {\n  render() {\n    return (\n      <div>SomeComponent</div>\n    )\n  }\n}\n\nexport default SomeComponent;\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u043f\u0440\u043e\u043f\u0441\u044b-props"},"\u041f\u0440\u043e\u043f\u0441\u044b (props)"),(0,r.kt)("p",null,"\u041f\u0440\u043e\u043f\u0441\u044b - \u043a\u0430\u043d\u0430\u043b\u044b \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043c\u0435\u0436\u0434\u0443 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u043d\u0442\u0430\u043c\u0438, \u043b\u044e\u0431\u044b\u0435 js-\u0434\u0430\u043d\u043d\u044b\u0435"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"spa"},"SPA"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041e\u0434\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043d\u044b\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f")," (Single Page Application, \u0438\u043b\u0438 SPA) \u2014 \u044d\u0442\u043e \u043d\u0435 \u0441\u0430\u0439\u0442\u044b-\u0432\u0438\u0437\u0438\u0442\u043a\u0438. \u0412\u0441\u0451 \u043d\u0430\u043c\u043d\u043e\u0433\u043e \u0441\u043b\u043e\u0436\u043d\u0435\u0435. \u042d\u0442\u043e \u043f\u043e\u043b\u043d\u043e\u0446\u0435\u043d\u043d\u043e\u0435 \u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043f\u043e\u0434\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f \u043e\u0434\u0438\u043d index.html \u043a\u0430\u043a \u043a\u0430\u0440\u043a\u0430\u0441 \u0434\u043b\u044f \u0432\u0441\u0435\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430, \u0430 \u0432 \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0435\u043c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e JavaScript, AJAX, History API \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0438\u043b\u0438 \u0437\u0430\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u043d\u0430 \u043b\u0435\u0442\u0443 \u043d\u043e\u0432\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435. \u0422\u043e \u0435\u0441\u0442\u044c \u0432\u0451\u0440\u0441\u0442\u043a\u043e\u0439 \u0438 \u0441\u0442\u0438\u043b\u044f\u043c\u0438 \xab\u043b\u044d\u043d\u0434\u0438\u043d\u0433\u0430\xbb \u0434\u0435\u043b\u043e \u043d\u0435 \u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f."),(0,r.kt)("p",null,"\u041d\u0430 \u0432\u044b\u0445\u043e\u0434\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0440\u043e\u0432\u043d\u043e \u0442\u0430\u043a\u043e\u0435 \u0436\u0435 \u043c\u043d\u043e\u0433\u043e\u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043a\u0430\u043a, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d, \u0444\u043e\u0440\u0443\u043c \u0438\u043b\u0438 \u043e\u043d\u043b\u0430\u0439\u043d-\u043a\u0438\u043d\u043e\u0442\u0435\u0430\u0442\u0440. \u041d\u043e \u0441 \u043e\u0434\u043d\u0438\u043c \u0431\u043e\u043b\u044c\u0448\u0438\u043c \u043e\u0442\u043b\u0438\u0447\u0438\u0435\u043c \u2014 \u043d\u0435 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0433\u043e HTML-\u0444\u0430\u0439\u043b\u0430. \u042d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442, \u0447\u0442\u043e \u0442\u0440\u0430\u0442\u0438\u0442\u0441\u044f \u043c\u0435\u043d\u044c\u0448\u0435 \u0442\u0440\u0430\u0444\u0438\u043a\u0430 \u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u0438 \u043a\u0430\u043a \u0431\u043e\u043d\u0443\u0441 \u0432 \u043e\u0431\u0435 \u0441\u0442\u043e\u0440\u043e\u043d\u044b \u043d\u0435 \u0433\u043e\u043d\u044f\u044e\u0442\u0441\u044f \u043e\u0434\u043d\u0438 \u0438 \u0442\u0435 \u0436\u0435 \u0434\u0430\u043d\u043d\u044b\u0435. \u0414\u0451\u0448\u0435\u0432\u043e \u0438 \u0443\u0434\u043e\u0431\u043d\u043e."),(0,r.kt)("p",null,"SPA \u0443\u043c\u0435\u044e\u0442 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u043c\u0435\u0436\u0434\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u043c\u0438 \u0431\u0435\u0437 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f, \u0447\u0442\u043e \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0441 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c\u044e \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u043a\u0430\u043a \u0447\u0438\u0441\u0442\u0430\u044f \u043c\u0430\u0433\u0438\u044f. \u041d\u0435 \u043d\u0443\u0436\u043d\u043e \u0436\u0434\u0430\u0442\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438, \u0441\u0430\u0439\u0442 \u043e\u0442\u043a\u043b\u0438\u043a\u0430\u0435\u0442\u0441\u044f \u043c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u043e \u0434\u0430 \u0438 \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u043e \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u043a\u0430\u043a \xab\u0431\u0443\u0434\u0443\u0449\u0435\u0435 \u0443\u0436\u0435 \u0437\u0434\u0435\u0441\u044c\xbb. \u042d\u0442\u043e \u0432 \u0441\u0432\u043e\u044e \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u0443\u043b\u0443\u0447\u0448\u0430\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u043e\u043f\u044b\u0442 \u0438 \u043f\u043e\u0432\u044b\u0448\u0430\u0435\u0442 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u0443\u044e \u043f\u043e\u0441\u0435\u0449\u0430\u0435\u043c\u043e\u0441\u0442\u044c."),(0,r.kt)("h3",{id:"\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b-\u043a\u043e\u0442\u043e\u0440\u044b\u0435-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442-\u0432-spa"},"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u0432 SPA:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0448\u0430\u0431\u043b\u043e\u043d\u0438\u0437\u0430\u0442\u043e\u0440,"),(0,r.kt)("li",{parentName:"ul"},"History API,"),(0,r.kt)("li",{parentName:"ul"},"API \u0431\u044d\u043a\u0435\u043d\u0434\u0430 (\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 HTTP),"),(0,r.kt)("li",{parentName:"ul"},"\u0441\u0435\u0440\u0432\u0438\u0441\u044b \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 MVC, MV*, MVVM \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430\u043c\u0438 (\u043d\u0430\u043f\u0438\u0441\u0430\u043d \u043b\u0438 \u0441\u0435\u0440\u0432\u0438\u0441 \u0441\u0432\u043e\u0438\u043c\u0438 \u0441\u0438\u043b\u0430\u043c\u0438 \u0438\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0430 \u0433\u043e\u0442\u043e\u0432\u0430\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u2014 \u043d\u0435\u0432\u0430\u0436\u043d\u043e).")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u0441\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f"},"\u0421\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f"),(0,r.kt)("h3",{id:"\u0430\u0442\u0442\u0440\u0438\u0431\u0443\u0442-style"},"\u0410\u0442\u0442\u0440\u0438\u0431\u0443\u0442 style"),(0,r.kt)("p",null,"\u041c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u043d\u043b\u0430\u0439\u043d-\u0441\u0442\u0438\u043b\u0438 \u0434\u043b\u044f \u0442\u043e\u0447\u0435\u0447\u043d\u043e\u0439 \u0441\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u0434\u043b\u044f \u0441\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u0440\u0438 \u043a\u0430\u043a\u0438\u0445-\u043b\u0438\u0431\u043e \u0442\u0440\u0438\u0433\u0433\u0435\u0440\u0430\u0445."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// inline styles\n<div style={{ color: 'white', background: 'blue' }} />\n\n...\n\n// styles object\nconst styles = {\n  color: 'white', \n  background: 'blue',\n}\n\n<div style={styles} />\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0435-\u0441\u0442\u0438\u043b\u0438"},"\u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u0438\u043b\u0438"),(0,r.kt)("p",null,"Old-school aproach. \u041c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u043a\u0430\u043a\u0438\u0445-\u043b\u0438\u0431\u043e \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u044e\u0449\u0438\u0445\u0441\u044f \u043a\u043b\u0430\u0441\u0441\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import './global.css';\n\n...\n\n<div className=\"some-global-class\" />\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"css-\u043c\u043e\u0434\u0443\u043b\u0438"},"CSS-\u043c\u043e\u0434\u0443\u043b\u0438"),(0,r.kt)("p",null,"\u0412 \u043a\u0440\u0443\u043f\u043d\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0442\u0430\u043a\u0438\u0435 \u043f\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043d\u0438\u044f \u0441\u0442\u0438\u043b\u0435\u0439 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0441\u044f \u043e\u0442\u043b\u043e\u0432\u0438\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e \u2014 \u043a\u043e\u0433\u0434\u0430 \u043e\u043d\u0438 \u043f\u0440\u0438\u0432\u0435\u0434\u0443\u0442 \u043a \u043e\u0448\u0438\u0431\u043a\u0430\u043c \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f. \u0425\u043e\u0440\u043e\u0448\u043e, \u0435\u0441\u043b\u0438 \u043e\u0448\u0438\u0431\u043a\u0430 \u0432\u0441\u043a\u0440\u043e\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438. \u0425\u0443\u0436\u0435, \u043a\u043e\u0433\u0434\u0430 \u043e\u043d\u0430 \u043d\u0430\u0439\u0434\u0451\u0442\u0441\u044f \u0432 \u043f\u0440\u043e\u0434\u0430\u043a\u0448\u043d\u0435."),(0,r.kt)("p",null,"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0443 \u0440\u0435\u0448\u0430\u044e\u0442 CSS-\u043c\u043e\u0434\u0443\u043b\u0438. \u042d\u0442\u0430 \u043d\u0435\u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u0434\u0435\u043b\u0430\u0435\u0442 \u043a\u043b\u0430\u0441\u0441\u044b \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0438\u043c\u0435\u043d\u0430 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0438 \u0437\u0430\u0434\u0430\u0451\u0442 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0438\u043c\u0451\u043d. \u0412\u0441\u0451 \u044d\u0442\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u043d\u0430 \u044d\u0442\u0430\u043f\u0435 \u0441\u0431\u043e\u0440\u043a\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0430."),(0,r.kt)("p",null,"\u0412 CSS-\u043c\u043e\u0434\u0443\u043b\u044f\u0445 \u0441\u0442\u0438\u043b\u0438 \u0441\u0442\u0430\u043d\u043e\u0432\u044f\u0442\u0441\u044f JS-\u043e\u0431\u044a\u0435\u043a\u0442\u0430\u043c\u0438, \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u044e\u0442 \u0441\u0432\u043e\u0438 \u0438\u043c\u0435\u043d\u0430:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".button {}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import buttonStyles from './button.css';\n\nelement.innerHTML = `<div class=\"${buttonStyles.button} ${buttonStyles.red}\" ...`;\n")),(0,r.kt)("h4",{id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435"},"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import styles from './Button.module.css';\n...\n<button className={styles.Button} />\n")),(0,r.kt)("p",null,"\u0412 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u043a\u043b\u0430\u0441\u0441 \u043f\u043e\u043b\u0443\u0447\u0438\u0442 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u0438\u043c\u044f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<div class="button-213ge1hw ...">\n    ...\n</button>\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"jss---css-in-js"},"JSS - css in js"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"yarn add react-jss")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cssinjs.org/?v=v10.3.0"},"cssinjs.org")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport {render} from 'react-dom'\nimport {createUseStyles} from 'react-jss'\n\n// Create your Styles. Remember, since React-JSS uses the default preset,\n// most plugins are available without further configuration needed.\nconst useStyles = createUseStyles({\n  myButton: {\n    color: 'green',\n    margin: {\n      // jss-plugin-expand gives more readable syntax\n      top: 5, // jss-plugin-default-unit makes this 5px\n      right: 0,\n      bottom: 0,\n      left: '1rem'\n    },\n    '& span': {\n      // jss-plugin-nested applies this to a child span\n      fontWeight: 'bold' // jss-plugin-camel-case turns this into 'font-weight'\n    }\n  },\n  myLabel: {\n    fontStyle: 'italic'\n  }\n})\n\n// Define the component using these styles and pass it the 'classes' prop.\n// Use this to assign scoped class names.\nconst Button = ({children}) => {\n  const classes = useStyles()\n  return (\n    <button className={classes.myButton}>\n      <span className={classes.myLabel}>{children}</span>\n    </button>\n  )\n}\n\nconst App = () => <Button>Submit</Button>\n\nrender(<App />, document.getElementById('root'))\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"styled-component"},"Styled-component"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"yarn add styled-components")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://styled-components.com/"},"styled-components")),(0,r.kt)("p",null,"\u0421\u0442\u0438\u043b\u0435\u0432\u044b\u0435 \u043e\u0431\u0435\u0440\u0442\u043a\u0438 \u0434\u043b\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432. \u041c\u043e\u0436\u043d\u043e \u0441\u0442\u0438\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0447\u0435\u0440\u0435\u0437 props."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u0441\u0442\u0438\u043b\u0438 \u0438 \u0440\u0430\u0437\u043c\u0435\u0442\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 <Button />\nconst Button = styled.button`\n  background: transparent;\n  border-radius: 3px;\n  border: 2px solid palevioletred;\n  color: palevioletred;\n  margin: 0.5em 1em;\n  padding: 0.25em 1em;\n\n  ${props => props.primary && css`\n    background: palevioletred;\n    color: white;\n  `}\n`;\n\n// \u0441\u0442\u0438\u043b\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 <Container />\nconst Container = styled.div`\n  text-align: center;\n`\n\nrender(\n  <Container>\n    <Button>Normal Button</Button>\n    <Button primary>Primary Button</Button>\n  </Container>\n); \n")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u041c\u043e\u0439 \u0432\u044b\u0431\u043e\u0440 - CSS/SCSS-\u043c\u043e\u0434\u0443\u043b\u0438 + \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u0438\u043b\u0438 + \u0442\u043e\u0447\u0435\u0447\u043d\u0430\u044f \u0438\u043d\u043b\u0430\u0439\u043d \u0441\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f. \u0422\u0430\u043a \u043a\u0430\u043a:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"jsx \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e, \u0441\u0442\u0438\u043b\u0438 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e (\u043d\u0435 \u0437\u0430\u0433\u0440\u043e\u043c\u043e\u0436\u0434\u0430\u0435\u0442 \u043a\u043e\u0434)"),(0,r.kt)("li",{parentName:"ul"},"\u043b\u0435\u0447\u0433\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f, \u0442\u0430\u043a \u043a\u0430\u043a css \u0438\u043c\u0435\u0435\u0442 \u0431\u043e\u043b\u0435\u0435 \u043f\u0440\u0438\u0432\u044b\u0447\u043d\u044b\u0439 \u0432\u0438\u0434")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"postcss"},"PostCSS"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.postcss.parts/"},"Post CSS plugins")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"react-compound-components"},"React Compound Components"),(0,r.kt)("img",{src:"../../../../img/react/compound.jpg",alt:"compound.jpg"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ReactNode } from 'react';\n\nconst Card = ({ children }: { children?: ReactNode }) => {\n  return <div>{children}</div>;\n};\n\nconst Title = ({ children }: { children?: ReactNode }) => <h2>{children}</h2>;\n\nconst Text = ({ children }: { children?: ReactNode }) => <p>{children}</p>;\n\nconst Button = ({ text, onClick }: { text: string; onClick: () => void }) => (\n  <button onClick={onClick}>{text}</button>\n);\n\nCard.Title = Title;\nCard.Text = Text;\nCard.Button = Button;\n\nconst SomeComp = () => {\n  return (\n    <Card>\n      <Card.Title>Title</Card.Title>\n      <Card.Text>\n        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi\n        aperiam repellendus voluptate corrupti? Error consequuntur ea, in\n        mollitia, reiciendis, et minima possimus officia quisquam quod sit\n        eligendi! Officia, voluptatibus doloribus.\n      </Card.Text>\n      <Card.Button text='Click me' onClick={() => alert('Clicked')} />\n    </Card>\n  );\n};\n\nexport default SomeComp;\n")))}c.isMDXComponent=!0}}]);