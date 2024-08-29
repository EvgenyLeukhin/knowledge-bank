"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[9662],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2176:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=t(7462),o=(t(7294),t(3905));const a={title:"history, params",sidebar_position:5},i=void 0,s={unversionedId:"frontend/react/hooks/history, params",id:"frontend/react/hooks/history, params",title:"history, params",description:"5 version",source:"@site/docs/frontend/react/4-hooks/5-history, params.md",sourceDirName:"frontend/react/4-hooks",slug:"/frontend/react/hooks/history, params",permalink:"/knowledge-bank/docs/frontend/react/hooks/history, params",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/react/4-hooks/5-history, params.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"history, params",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"context",permalink:"/knowledge-bank/docs/frontend/react/hooks/context"},next:{title:"debounce, throttle",permalink:"/knowledge-bank/docs/frontend/react/hooks/debounce"}},c={},l=[{value:"5 version",id:"5-version",level:2},{value:"6 version",id:"6-version",level:2}],p={toc:l};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"5-version"},"5 version"),(0,o.kt)("p",null,"\u0412\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u0445\u0443\u043a\u0438 \u0432 \u0431\u0438\u0431\u0438\u043b\u0438\u043e\u0442\u0435\u043a\u0443 ",(0,o.kt)("inlineCode",{parentName:"p"},"react-router-dom"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useHistory, useParams } from 'react-router-dom';\n\n...\nconst history = useHistory(); // \u043e\u0431\u044a\u0435\u043a\u0442 history\nconst params = useParams(); // query-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b\n\n// redirect\nhistory.push('/path');\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"6-version"},"6 version"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useNavigate } from 'react-router-dom';\n\n...\n\nconst navigate = useNavigate();\n\n// redirect\nnavigate('/path');\n\n\n// add regionId to url query params\nnavigate({\n  pathname: '/map',\n  search: `?regionId=${selectedRegion.id}`,\n});\n")))}u.isMDXComponent=!0}}]);