"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[9424],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(a),k=n,d=m["".concat(p,".").concat(k)]||m[k]||s[k]||l;return a?r.createElement(d,i(i({ref:t},u),{},{components:a})):r.createElement(d,i({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8109:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const l={title:"React-c\u0442\u044d\u043a",sidebar_position:1},i=void 0,o={unversionedId:"frontend/react/stack",id:"frontend/react/stack",title:"React-c\u0442\u044d\u043a",description:"\u0421\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f",source:"@site/docs/frontend/react/stack.md",sourceDirName:"frontend/react",slug:"/frontend/react/stack",permalink:"/knowledge-bank/docs/frontend/react/stack",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/react/stack.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"React-c\u0442\u044d\u043a",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u041e React",permalink:"/knowledge-bank/docs/frontend/react/about"},next:{title:"\u041b\u0443\u0447\u0448\u0438\u0435 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438",permalink:"/knowledge-bank/docs/frontend/react/best-practice"}},p={},c=[{value:"\u0421\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f",id:"\u0441\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f",level:3},{value:"\u0421\u0431\u043e\u0440\u043a\u0430 (\u0431\u0438\u043d\u0434\u043b\u0435\u0440)",id:"\u0441\u0431\u043e\u0440\u043a\u0430-\u0431\u0438\u043d\u0434\u043b\u0435\u0440",level:3},{value:"UI-\u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a",id:"ui-\u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a",level:3},{value:"State-management",id:"state-management",level:3},{value:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u0444\u043e\u0440\u043c",id:"\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a-\u0444\u043e\u0440\u043c",level:3},{value:"\u0412\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441 API",id:"\u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435-\u0441-api",level:3},{value:"\u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f",id:"\u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f",level:3}],u={toc:c};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"\u0441\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f"},"\u0421\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/sass"},"SCSS-\u043f\u0440\u0435\u043f\u0440\u043e\u0446\u0435\u0441\u043e\u0440")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/"},"SCSS/CSS-modules")),(0,n.kt)("li",{parentName:"ul"},"\u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u0438\u043b\u0438 (import global.scss)"),(0,n.kt)("li",{parentName:"ul"},"\u0422\u043e\u0447\u0435\u0447\u043d\u0430\u044f \u0438\u043d\u043b\u0430\u0439\u043d \u0441\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0447\u0435\u0440\u0435\u0437 style={{ ... }}"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("del",{parentName:"li"},"JSS")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("del",{parentName:"li"},"styled-component"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"\u0441\u0431\u043e\u0440\u043a\u0430-\u0431\u0438\u043d\u0434\u043b\u0435\u0440"},"\u0421\u0431\u043e\u0440\u043a\u0430 (\u0431\u0438\u043d\u0434\u043b\u0435\u0440)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://nextjs.org/"},"NextJS")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://create-react-app.dev/"},"create-reaact-app")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://webpack.js.org/"},"webpack")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://parceljs.org/"},"parcel"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"ui-\u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a"},"UI-\u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://mui.com/"},"mui")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://nextui.org/"},"next-ui")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ant.design/"},"ant.design")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://react-bootstrap.github.io/"},"react-bootstrap"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"state-management"},"State-management"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://redux.js.org/"},"redux")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://redux-toolkit.js.org/"},"redux-toolkit")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://mobx.js.org/README.html"},"mobx.js"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a-\u0444\u043e\u0440\u043c"},"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u0444\u043e\u0440\u043c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://formik.org/"},"formik")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/jquense/yup"},"yup")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://react-select.com/home"},"react-select")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://react-table-v7.tanstack.com/"},"react-table"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"\u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435-\u0441-api"},"\u0412\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441 API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://axios-http.com/ru/docs/intro"},"axios")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.javascript.ru/fetch"},"fetch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/js-cookie"},"js-cookie"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"\u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f"},"\u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/compression"},"gzip-compression")),(0,n.kt)("li",{parentName:"ul"},"Lazy-loading")),(0,n.kt)("hr",null))}s.isMDXComponent=!0}}]);