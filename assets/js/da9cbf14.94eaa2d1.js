"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[7393],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=i(t),m=o,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(g,l(l({ref:n},u),{},{components:t})):r.createElement(g,l({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var i=2;i<a;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5870:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var r=t(7462),o=(t(7294),t(3905));const a={title:"Debug",sidebar_position:18},l=void 0,s={unversionedId:"frontend/js/debug",id:"frontend/js/debug",title:"Debug",description:"Console",source:"@site/docs/frontend/js/debug.md",sourceDirName:"frontend/js",slug:"/frontend/js/debug",permalink:"/knowledge-bank/docs/frontend/js/debug",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/js/debug.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{title:"Debug",sidebar_position:18},sidebar:"tutorialSidebar",previous:{title:"Storage",permalink:"/knowledge-bank/docs/frontend/js/storage"},next:{title:"Canvas",permalink:"/knowledge-bank/docs/frontend/js/canvas"}},c={},i=[{value:"Console",id:"console",level:2},{value:"JS Doc style",id:"js-doc-style",level:2},{value:"Debug with VS Code",id:"debug-with-vs-code",level:2},{value:"Performance",id:"performance",level:2}],u={toc:i};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"console"},"Console"),(0,o.kt)("p",null,"\u0412\u044b\u0432\u043e\u0434 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// output data to Dev tool console by console method\nconsole.log('some string', someValue);\nconsole.info('some string', someValue);\nconsole.warn('some string', someValue);\nconsole.error('some string', someValue);\n")),(0,o.kt)("p",null,"\u0417\u0430\u043c\u0435\u0440 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"console.time('value', value);\nconsole.timeEnd('value', value);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// how to look js-code on this break line\ndebugger; // ---\x3e Dev tool "Sources"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// show state info as text data inside html\n{JSON.stringify(state)}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<pre>{JSON.stringify(user, null, 2)}</pre>\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"js-doc-style"},"JS Doc style"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0440\u0430\u0437\u043d\u0438\u0446\u0443 \u043c\u0435\u0436\u0434\u0443 \u0434\u0430\u0442\u043e\u0439 \u0438 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043e\u043c \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u0447\u0430\u0441\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u044f\u0441\u0430\n * @param {string} date - \u0434\u0430\u0442\u0430 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 YYYY-MM-DD\n * @param {string} interval - \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 HH:MM - HH:MM\n * @param {number} hubTimezone - \u0447\u0430\u0441\u043e\u0432\u043e\u0439 \u043f\u043e\u044f\u0441\n * @return {{\n *     startIntervalDiff: number;\n *     endIntervalDiff: number;\n * }}\n */\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"debug-with-vs-code"},"Debug with VS Code"),(0,o.kt)("p",null,"TODO"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"performance"},"Performance"),(0,o.kt)("p",null,"\u041e\u0431\u044a\u0435\u043a\u0442 `",(0,o.kt)("inlineCode",{parentName:"p"},"performance")," \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435. \u041c\u043e\u0436\u043d\u043e \u0437\u0430\u043c\u0435\u0440\u044f\u0442\u044c \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0441\u043a\u0440\u0438\u043f\u0442\u043e\u0432."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const t1 = performance.now();\n\n// some js-code ...\n\nconst t2 = performance.now();\n\n// result time in ms\nt2 - t1; // 3813.899999999907\n")),(0,o.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043c\u0435\u0440\u0430 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u0438 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u043c\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u0430\u043c\u0438."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// https://stackoverflow.com/questions/52030110/sorting-strings-in-descending-order-in-javascript-most-efficiently\nconst results = [];\n\nfor (let i = 0; i < 100; i++) {\n  const randomArrayGen = () => Array.from({length: 10000}, () => Math.random().toString(30));\n  const randomArray = randomArrayGen();\n  const copyArray = x => x.slice();\n\n  obj = copyArray(randomArray);\n  let t0 = performance.now();\n  obj.sort().reverse();\n  let t1 = performance.now();\n\n  obj = copyArray(randomArray);\n  let t2 = performance.now();\n  obj.sort((a, b) => (a > b ? -1 : 1))\n  let t3 = performance.now();\n\n  obj = copyArray(randomArray);\n  let t4 = performance.now();\n  obj.sort((a, b) => b.localeCompare(a))\n  let t5 = performance.now();  \n\n  results[0].push(t1 - t0);\n  results[1].push(t3 - t2);\n  results[2].push(t5 - t4);  \n}\n\nconst calculateAverage = x => x.reduce((a, b) => a + b) / x.length ;\n\nconsole.log("obj.sort().reverse():                   " + calculateAverage(results[0]));\nconsole.log("obj.sort((a, b) => (a > b ? -1 : 1)):   " + calculateAverage(results[1]));\nconsole.log("obj.sort((a, b) => b.localeCompare(a)): " + calculateAverage(results[2]));\n')))}p.isMDXComponent=!0}}]);