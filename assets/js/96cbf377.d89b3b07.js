"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[8078],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>p});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),p=a,f=m["".concat(d,".").concat(p)]||m[p]||u[p]||i;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8956:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const i={title:"find(), some(), every()",sidebar_position:3},o=void 0,s={unversionedId:"frontend/react/data/find, some, every",id:"frontend/react/data/find, some, every",title:"find(), some(), every()",description:"find()",source:"@site/docs/frontend/react/7-data/3-find, some, every.md",sourceDirName:"frontend/react/7-data",slug:"/frontend/react/data/find, some, every",permalink:"/knowledge-bank/docs/frontend/react/data/find, some, every",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/react/7-data/3-find, some, every.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"find(), some(), every()",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"filter(), includes()",permalink:"/knowledge-bank/docs/frontend/react/data/filter"},next:{title:"sort()",permalink:"/knowledge-bank/docs/frontend/react/data/sort"}},d={},l=[{value:"<code>find()</code>",id:"find",level:2},{value:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043e\u0434\u043d\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0432 \u043c\u0430\u0441\u0441\u0438\u0432\u0435",id:"\u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435-\u043e\u0434\u043d\u043e\u0433\u043e-\u043e\u0431\u044a\u0435\u043a\u0442\u0430-\u0432-\u043c\u0430\u0441\u0441\u0438\u0432\u0435",level:3},{value:"<code>findIndex()</code>",id:"findindex",level:2},{value:"<code>some()</code>",id:"some",level:2},{value:"<code>every()</code>",id:"every",level:2}],c={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"find"},(0,a.kt)("inlineCode",{parentName:"h2"},"find()")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"[3, 2, 0, 1] --\x3e 3")),(0,a.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043c\u0430\u0441\u0441\u0438\u0432\u0430. \u041c\u0435\u0442\u043e\u0434 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432\u043d\u0443\u0442\u0440\u0438 \u043c\u0430\u0441\u0441\u0438\u0432\u0430. \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043f\u0435\u0440\u0432\u044b\u0439 \u043d\u0430\u0439\u0434\u0435\u043d\u043d\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442. \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0438\u0437 \u0438\u0437 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u0442\u043e, \u0447\u0442\u043e \u043d\u0430\u0439\u0434\u0435\u0442."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const a = [\n  { id: 3, name: '\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d' },\n  { id: 2, name: '\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u0441\u0442\u0430\u0442\u0443\u0441' },\n  { id: 0, name: '\u0421\u0442\u0430\u0440\u044b\u0439 \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u0441\u0442\u0430\u0442\u0443\u0441' },\n  { id: 1, name: '\u0427\u0442\u043e \u0442\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442' },\n];\n\n// \u043f\u043e\u0438\u0441\u043a \u043f\u043e \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u044e \nconst b = a.find((el, index, thisArray) => el.id === 3); // { 3 }\n\n// \u043f\u043e\u0438\u0441\u043a \u043f\u043e \u043d\u0435\u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u044e \nconst \u0441 = a.find((el, index, thisArray) => el.id !== 3); // { 2 } - \u0432\u0435\u0440\u043d\u0435\u0442\u0441\u044f \u043f\u0435\u0440\u0432\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435-\u043e\u0434\u043d\u043e\u0433\u043e-\u043e\u0431\u044a\u0435\u043a\u0442\u0430-\u0432-\u043c\u0430\u0441\u0441\u0438\u0432\u0435"},"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043e\u0434\u043d\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0432 \u043c\u0430\u0441\u0441\u0438\u0432\u0435"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// \u0435\u0441\u0442\u044c \u043c\u0430\u0441\u0441\u0438\u0432 \u0430\u043f\u0442\u0435\u043a\nconst { drugstores } = store.getState().map;\n\n// \u0435\u0441\u0442\u044c \u0430\u043f\u0442\u0435\u043a\u0430 \u0432 \u044d\u0442\u043e\u043c \u043c\u0430\u0441\u0441\u0438\u0432\u0435, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043d\u0443\u0436\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043a\u0430\u043a\u043e\u0435-\u043d\u0438\u0431 \u043f\u043e\u043b\u0435\nconst drugstoreId = 123;\nconst updatedDrugstore = drugstores.find(\n  drugstore => drugstore.id === drugstoreId,\n);\n\n// \u043f\u0435\u0440\u0435\u0437\u0430\u0442\u0438\u0440\u0430\u0435\u043c \u043f\u043e\u043b\u0435 comment \u043d\u043e\u0432\u044b\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c\nconst updatedDrugstoreData = {\n  ...updatedDrugstore,\n  comment: 'Some new comment',\n};\n\n// \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u043c \u0441\u043f\u0438\u0441\u043e\u043a \u0430\u043f\u0442\u0435\u043a, \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0430\u0435\u043c \u044d\u0442\u0443 \u0430\u043f\u0442\u0435\u043a\u0443 \u0441\u043e \u0441\u0442\u0430\u0440\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0441 \u043d\u043e\u0432\u044b\u043c\u0438\ndispatch(\n  setDrugstores([\n    ...drugstores.filter(drugstore => drugstore.id !== drugstoreId),\n    updatedDrugstoreData as IDrugstoreOnMap,\n  ]),\n);\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"findindex"},(0,a.kt)("inlineCode",{parentName:"h2"},"findIndex()")),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e \u0432\u0435\u0440\u043d\u0435\u0442\u0441\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"-1"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const a = [\n  { id: 3, name: '\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d' },\n  { id: 2, name: '\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u0441\u0442\u0430\u0442\u0443\u0441' },\n  { id: 0, name: '\u0421\u0442\u0430\u0440\u044b\u0439 \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u0441\u0442\u0430\u0442\u0443\u0441' },\n  { id: 1, name: '\u0427\u0442\u043e \u0442\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442' },\n];\n\n// \u0432\u0435\u0440\u043d\u0435\u0442 \u0438\u043d\u0434\u0435\u043a\u0441 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u043f\u043e \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u044e\nconst index = a.findIndex((el, index, thisArray) => {\n  return el.name === '\u0427\u0442\u043e \u0442\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442'; // 3\n}); \n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"some"},(0,a.kt)("inlineCode",{parentName:"h2"},"some()")),(0,a.kt)("p",null,'\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u043d\u0430 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u043a\u0430\u043a\u043e\u043c\u0443-\u043b\u0438\u0431\u043e \u0423\u0421\u041b\u041e\u0412\u0418\u042e.\n\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 true, \u0435\u0441\u043b\u0438 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u0438\u043d \u044d\u043b\u0435\u043c\u0435\u043d\u0442 true.\n\u041a\u043e\u0433\u0434\u0430 "\u043d\u0430\u0442\u043a\u043d\u0451\u0442\u0441\u044f" \u043d\u0430 \u043f\u0435\u0440\u0432\u043e\u0435 true, \u0442\u043e \u0446\u0438\u043a\u043b \u043f\u0440\u0435\u043a\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f true.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const a = [\n  { id: 3, name: '\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d' },\n  { id: 2, name: '\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u0441\u0442\u0430\u0442\u0443\u0441' },\n  { id: 0, name: '\u0421\u0442\u0430\u0440\u044b\u0439 \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u0441\u0442\u0430\u0442\u0443\u0441' },\n  { id: 1, name: '\u0427\u0442\u043e \u0442\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442' },\n];\n\na.some((el, index, array) => el.id === 3); // true\na.some((el, index, array) => el.id === 33); // false\n\n\n// example\nconst onSelectDeck = (clickedDeck: TDeckObj) => {\n  const isAlreadyExists = selectedDecks.some((deck) => deck.id === clickedDeck.id);\n\n  if (!isAlreadyExists) {\n    // add selected deck\n    if (selectedDecks.length < 10) {\n      setSelectedDecks([...selectedDecks, clickedDeck]);\n    }\n  } else {\n    // remove deck if already exists\n    setSelectedDecks(selectedDecks.filter((deck) => deck.id !== clickedDeck.id));\n  }\n};\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"every"},(0,a.kt)("inlineCode",{parentName:"h2"},"every()")),(0,a.kt)("p",null,'\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u0412\u0421\u0415 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u043d\u0430 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u043a\u0430\u043a\u043e\u043c\u0443-\u043b\u0438\u0431\u043e \u0423\u0421\u041b\u041e\u0412\u0418\u042e.\n\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 false, \u0435\u0441\u043b\u0438 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u0438\u043d \u044d\u043b\u0435\u043c\u0435\u043d\u0442 false.\n\u041a\u043e\u0433\u0434\u0430 "\u043d\u0430\u0442\u043a\u043d\u0451\u0442\u0441\u044f" \u043d\u0430 \u043f\u0435\u0440\u0432\u044b\u0439 false, \u0442\u043e \u0446\u0438\u043a\u043b \u043f\u0440\u0435\u043a\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f false'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const a = [\n  { id: 3, name: '\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d' },\n  { id: 2, name: '\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u0441\u0442\u0430\u0442\u0443\u0441' },\n  { id: 0, name: '\u0421\u0442\u0430\u0440\u044b\u0439 \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u0441\u0442\u0430\u0442\u0443\u0441' },\n  { id: 1, name: '\u0427\u0442\u043e \u0442\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442' },\n];\n\na.every((el, index, array) => el.id >= 0); // true\na.every((el, index, array) => el.id > 0); // false\n")),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { EPermission } from 'interfaces/auth';\nimport { useSelector } from 'react-redux';\nimport { TStore } from 'store/store';\n\nconst useAccess = (permissions: EPermission[]): boolean => {\n  const userPermissions = useSelector(\n    (store: TStore) => store.auth.permissions,\n  );\n\n  return permissions.every(permission => userPermissions.includes(permission));\n};\n\nexport default useAccess;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const big = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\n[1, 2, 3].every(item => big.includes(item)); // true\n[0, 1, 2, 3].every(item => big.includes(item)); // false\n")))}u.isMDXComponent=!0}}]);