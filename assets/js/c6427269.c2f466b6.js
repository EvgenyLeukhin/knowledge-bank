"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[512],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,b=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(b,c(c({ref:t},p),{},{components:n})):r.createElement(b,c({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"websocket",sidebar_position:8},c=void 0,i={unversionedId:"frontend/react/api/websocket",id:"frontend/react/api/websocket",title:"websocket",description:"- \u041f\u0440\u043e\u0442\u043e\u043a\u043e\u043b \u043d\u0435\u043f\u0440\u0435\u0440\u044b\u0432\u043d\u043e\u0433\u043e \u043a\u0430\u043d\u0430\u043b\u0430 \u0441\u0432\u044f\u0437\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c.",source:"@site/docs/frontend/react/6-api/8-websocket.md",sourceDirName:"frontend/react/6-api",slug:"/frontend/react/api/websocket",permalink:"/knowledge-bank/docs/frontend/react/api/websocket",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/react/6-api/8-websocket.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"websocket",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"api-services (-)",permalink:"/knowledge-bank/docs/frontend/react/api/api-services"},next:{title:"\u0420\u0430\u0437\u043d\u043e\u0435 (-)",permalink:"/knowledge-bank/docs/frontend/react/api/other"}},s={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u041f\u0440\u043e\u0442\u043e\u043a\u043e\u043b \u043d\u0435\u043f\u0440\u0435\u0440\u044b\u0432\u043d\u043e\u0433\u043e \u043a\u0430\u043d\u0430\u043b\u0430 \u0441\u0432\u044f\u0437\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c."),(0,o.kt)("li",{parentName:"ul"},"wws://..."),(0,o.kt)("li",{parentName:"ul"},"\u0447\u0430\u0442\u044b, \u0441\u0442\u0440\u0438\u043c\u044b, \u043e\u043d\u043b\u0430\u0439\u043d \u0438\u0433\u0440\u044b"),(0,o.kt)("li",{parentName:"ul"},"\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a WebSocket\nsocket.current = new WebSocket('wss://comit-backend-main.review.eapteka.ru/api/v1/naumen?logintest=test');\n\n// onopen - success connect\nsocket.current.onopen = () => {\n  setIsConnected(true);\n  setIsSocketError(false);\n  setIsClose(false);\n  console.log('\u0421\u043e\u043a\u043a\u0435\u0442 \u043e\u0442\u043a\u0440\u044b\u0442');\n};\n\n// onmessage ???\nsocket.current.onmessage = event => {\n  ...\n};\n\n// onclose ???\nsocket.current.onclose = () => {\n  ...\n};\n\n// onerror - error connect\nsocket.current.onerror = () => {\n};\n\n// send\nsocket.current.send(...),\n")))}u.isMDXComponent=!0}}]);