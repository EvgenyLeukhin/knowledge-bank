"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[2828],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>m});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=t.createContext({}),c=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return r?t.createElement(f,s(s({ref:n},p),{},{components:r})):t.createElement(f,s({ref:n},p))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2009:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=r(7462),o=(r(7294),r(3905));const a={title:"promises (-)",sidebar_position:6},s=void 0,l={unversionedId:"frontend/react/api/promises",id:"frontend/react/api/promises",title:"promises (-)",description:"\u041f\u0440\u043e\u043c\u0438\u0441\u044b \u043d\u0443\u0436\u043d\u044b \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439. \u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0446\u0435\u043f\u043e\u0447\u043a\u0443 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 then(), \u0447\u0442\u043e \u0443\u043f\u0440\u043e\u0449\u0430\u0435\u0442 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u0438 \u0447\u0438\u0442\u0430\u0435\u043c\u043e\u0441\u0442\u044c \u043a\u043e\u0434\u0430.",source:"@site/docs/frontend/react/6-api/6-promises.md",sourceDirName:"frontend/react/6-api",slug:"/frontend/react/api/promises",permalink:"/knowledge-bank/docs/frontend/react/api/promises",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/react/6-api/6-promises.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"promises (-)",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"codes",permalink:"/knowledge-bank/docs/frontend/react/api/codes"},next:{title:"api-services (-)",permalink:"/knowledge-bank/docs/frontend/react/api/api-services"}},i={},c=[{value:"\u041c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b",id:"\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435-\u0437\u0430\u043f\u0440\u043e\u0441\u044b",level:2}],p={toc:c};function d(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u041f\u0440\u043e\u043c\u0438\u0441\u044b \u043d\u0443\u0436\u043d\u044b \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439. \u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0446\u0435\u043f\u043e\u0447\u043a\u0443 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 then(), \u0447\u0442\u043e \u0443\u043f\u0440\u043e\u0449\u0430\u0435\u0442 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u0438 \u0447\u0438\u0442\u0430\u0435\u043c\u043e\u0441\u0442\u044c \u043a\u043e\u0434\u0430."),(0,o.kt)("p",null,"\u041f\u0440\u043e\u043c\u0438\u0441 \u0438\u043c\u0435\u0435\u0442 \u0442\u0440\u0438 \u0441\u0442\u0430\u0434\u0438\u0438: pending - \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u0435, resolve - \u0443\u0434\u0430\u0447\u043d\u043e\u0435 \u0432\u044b\u043f\u043e\u043d\u0435\u043d\u0438\u0435, reject - \u043d\u0435\u0443\u0434\u0430\u0447\u043d\u043e\u0435."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const somePromise = new Promise((resolve, reject) => {\n  // some async code\n  resolve(); // continue\n  reject(); // break\n});\n\nsomePromise\n  .then((value) => {\n    // do something\n  })\n  .catch((error) => {\n    // do something\n  });\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"then")," - \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c \u043f\u043e\u0441\u043b\u0435 \u0443\u0434\u0430\u0447\u043d\u043e\u0433\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u043c\u0438\u0441\u0430. catch - \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u043e\u0448\u0438\u0431\u043e\u043a."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"then")," \u0431\u0443\u0434\u0435\u0442 \u0436\u0434\u0430\u0442\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0433\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f somePromise. \u0415\u0441\u043b\u0438 \u041e\u041a - \u0442\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0441\u044c\u044f \u0441\u0430\u043c."),(0,o.kt)("p",null,"\u041c\u043e\u0436\u043d\u043e \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u0434\u043b\u0438\u043d\u043d\u044b\u0435 \u0446\u0435\u043f\u043e\u0447\u043a\u0438 \u0438\u0437 ",(0,o.kt)("inlineCode",{parentName:"p"},"then"),". \u041f\u0440\u043e\u043c\u0438\u0441 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043f\u0440\u043e\u043c\u0438\u0441, \u0442\u0430\u043a \u043a\u0430\u043a ",(0,o.kt)("inlineCode",{parentName:"p"},"then")," \u0432\u0438\u0434\u0438\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u043c\u0438\u0441\u044b. ",(0,o.kt)("inlineCode",{parentName:"p"},"then")," \u0442\u0430\u043a\u0436\u0435 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043f\u0440\u043e\u043c\u0438\u0441."),(0,o.kt)("p",null,"\u041f\u0440\u043e\u043c\u0438\u0441 c \u0442\u0430\u0439\u043c\u0435\u0440\u043e\u043c\nresolve \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432\u043d\u0443\u0442\u0440\u0438 \u0441\u0430\u043c\u043e\u0433\u043e \u0441\u0435\u0431\u044f."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function delay(ms) {\n  return new Promise(resolve => {\n    setTimeout(() => resolve('Done'), ms);\n  });\n}\n\ndelay(1000).then(resolve => console.log(resolve));\n")),(0,o.kt)("p",null,"\u041f\u0440\u043e\u043c\u0438\u0441 \u043d\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u0435\n",(0,o.kt)("inlineCode",{parentName:"p"},"resolve")," \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432\u043d\u0443\u0442\u0440\u0438 \u0442\u0435\u043b\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043f\u0440\u043e\u043c\u0438\u0441\u0430. \u041d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435 \u0447\u0430\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u043d\u0435 \u0441\u0430\u043c \u043f\u0440\u043e\u043c\u0438\u0441, \u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044e, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0435\u0433\u043e \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442, \u0447\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c \u0432 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0435 \u044d\u0442\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function loadScript(src) {\n  return new Promise(function(resolve, reject) {\n    let script = document.createElement('script');\n    script.src = src;\n\n    script.onload = () => resolve(script);\n    script.onerror = () => reject(new Error(`\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0441\u043a\u0440\u0438\u043f\u0442\u0430 ${src}`));\n\n    document.head.append(script);\n  });\n}\n")),(0,o.kt)("p",null,"\u0412\u044b\u0437\u043e\u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438. \u0412 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u043c src."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let promise = loadScript(\"https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js\");\n\npromise.then(\n  script => alert(`${script.src} \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d!`),\n  error => alert(`\u041e\u0448\u0438\u0431\u043a\u0430: ${error.message}`)\n);\n\npromise.then(script => alert('\u0415\u0449\u0451 \u043e\u0434\u0438\u043d \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a...'));\n")),(0,o.kt)("p",null,"\u041c\u043e\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0437\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043a\u043e\u0440\u043e\u0447\u0435:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"loadScript(\"https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js\")\n  .then(\n    script => alert(`${script.src} \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d!`),\n    error => alert(`\u041e\u0448\u0438\u0431\u043a\u0430: ${error.message}`)\n  )\n  .then(script => alert('\u0415\u0449\u0451 \u043e\u0434\u0438\u043d \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a...'));\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435-\u0437\u0430\u043f\u0440\u043e\u0441\u044b"},"\u041c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b"),(0,o.kt)("p",null,"TODO"))}d.isMDXComponent=!0}}]);