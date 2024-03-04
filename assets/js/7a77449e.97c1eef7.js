"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[4930],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,g=p["".concat(i,".").concat(f)]||p[f]||l[f]||a;return n?r.createElement(g,c(c({ref:t},u),{},{components:n})):r.createElement(g,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=p;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:o,c[1]=d;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={title:"reduce()",sidebar_position:3},c=void 0,d={unversionedId:"frontend/react/data/reduce",id:"frontend/react/data/reduce",title:"reduce()",description:"\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u0432 \u043e\u0431\u044a\u0435\u043a\u0442",source:"@site/docs/frontend/react/7-data/3-reduce.md",sourceDirName:"frontend/react/7-data",slug:"/frontend/react/data/reduce",permalink:"/knowledge-bank/docs/frontend/react/data/reduce",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/react/7-data/3-reduce.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"reduce()",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"find()",permalink:"/knowledge-bank/docs/frontend/react/data/find"},next:{title:"sort()",permalink:"/knowledge-bank/docs/frontend/react/data/sort"}},i={},s=[{value:"\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u0432 \u043e\u0431\u044a\u0435\u043a\u0442",id:"\u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u043c\u0430\u0441\u0441\u0438\u0432\u0430-\u0432-\u043e\u0431\u044a\u0435\u043a\u0442",level:2},{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0438\u0437 \u0445\u044d\u0448\u0435\u0439",id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u043e\u0431\u044a\u0435\u043a\u0442\u0430-\u0438\u0437-\u0445\u044d\u0448\u0435\u0439",level:2}],u={toc:s};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u043c\u0430\u0441\u0441\u0438\u0432\u0430-\u0432-\u043e\u0431\u044a\u0435\u043a\u0442"},"\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u0432 \u043e\u0431\u044a\u0435\u043a\u0442"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const zones = [{...}, {...}, {...}, ...];\n\n\nconst zonesObj = zones.reduce<Record<string, string>>((total, item) => {\n  total = {\n    ...total,\n    [item.uuid]: item.name,\n  };\n\n  return total;\n}, {});\n\nzonesObj; \n// { \n//   zoneId: zoneName,\n//   zoneId: zoneName,\n//   zoneId: zoneName,\n//   zoneId: zoneName,\n//   ...\n// }\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u043e\u0431\u044a\u0435\u043a\u0442\u0430-\u0438\u0437-\u0445\u044d\u0448\u0435\u0439"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0438\u0437 \u0445\u044d\u0448\u0435\u0439"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// [{drugstore1}, {drugstore2}, ..., {drugstoreN}] --\x3e \n\n// \u041d\u0430 \u0432\u044b\u0445\u043e\u0434\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u043e\u0431\u044a\u0435\u043a\u0442 \u0441 \u043f\u043e\u043b\u044f\u043c\u0438 \u0440\u0430\u0432\u043d\u044b\u043c\u0438 id \u0437\u043e\u043d\u044b \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u043c \u0430\u043f\u0442\u0435\u043a \u0432 \u044d\u0442\u043e\u0439 \u0437\u043e\u043d\u0435\n// {\n//   zone1: [{drugstore1}, {drugstore2}, ...]\n//   zone2: [{drugstore1}, {drugstore2}, ...]\n//   ...\n//   zoneN: [{drugstore1}, {drugstore2}, ...]\n// }\n\nconst zonesByDrugstoresObj = drugstores.reduce<Record<string, string[]>>((total, drugstore) => {\n  const zoneHash = drugstore.zoneUuid;\n\n  total[zoneHash] = [...(total[zoneHash] || []), drugstore];\n\n  return total;\n}, {});\n\n")))}l.isMDXComponent=!0}}]);