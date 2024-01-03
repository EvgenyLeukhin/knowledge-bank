"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[7301],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,m=p["".concat(d,".").concat(f)]||p[f]||s[f]||a;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"reduce()",sidebar_position:2},c=void 0,i={unversionedId:"frontend/react/data/reduce",id:"frontend/react/data/reduce",title:"reduce()",description:"\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u0432 \u043e\u0431\u044a\u0435\u043a\u0442",source:"@site/docs/frontend/react/6-data/2-reduce.md",sourceDirName:"frontend/react/6-data",slug:"/frontend/react/data/reduce",permalink:"/knowledge-bank/docs/frontend/react/data/reduce",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/react/6-data/2-reduce.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"reduce()",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"filter()",permalink:"/knowledge-bank/docs/frontend/react/data/filter"},next:{title:"\u0417\u0430\u0434\u0430\u0447\u043a\u0438 \u043f\u043e JS",permalink:"/knowledge-bank/docs/frontend/react/data/tasks"}},d={},l=[{value:"\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u0432 \u043e\u0431\u044a\u0435\u043a\u0442",id:"\u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u043c\u0430\u0441\u0441\u0438\u0432\u0430-\u0432-\u043e\u0431\u044a\u0435\u043a\u0442",level:2}],u={toc:l};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u043c\u0430\u0441\u0441\u0438\u0432\u0430-\u0432-\u043e\u0431\u044a\u0435\u043a\u0442"},"\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u0432 \u043e\u0431\u044a\u0435\u043a\u0442"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const zones = [{...}, {...}, {...}, ...];\n\n\nconst zonesObj = zones.reduce<Record<string, string>>((total, item) => {\n  total = {\n    ...total,\n    [item.uuid]: item.name,\n  };\n\n  return total;\n}, {});\n\nzonesObj; \n// { \n//   zoneId: zoneName,\n//   zoneId: zoneName,\n//   zoneId: zoneName,\n//   zoneId: zoneName,\n//   ...\n// }\n")))}s.isMDXComponent=!0}}]);