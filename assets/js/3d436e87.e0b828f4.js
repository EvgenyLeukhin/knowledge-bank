"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[5091],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(t),d=r,k=c["".concat(i,".").concat(d)]||c[d]||m[d]||l;return t?a.createElement(k,u(u({ref:n},s),{},{components:t})):a.createElement(k,u({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,u=new Array(l);u[0]=c;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,u[1]=o;for(var p=2;p<l;p++)u[p]=t[p];return a.createElement.apply(null,u)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3401:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const l={title:"Number \u0438 BigInt",sidebar_position:3},u=void 0,o={unversionedId:"frontend/js/number",id:"frontend/js/number",title:"Number \u0438 BigInt",description:"TypeScript",source:"@site/docs/frontend/js/3 - number.md",sourceDirName:"frontend/js",slug:"/frontend/js/number",permalink:"/knowledge-bank/docs/frontend/js/number",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/js/3 - number.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Number \u0438 BigInt",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"String \u0438 Symbol",permalink:"/knowledge-bank/docs/frontend/js/string"},next:{title:"Boolean",permalink:"/knowledge-bank/docs/frontend/js/boolean"}},i={},p=[{value:"TypeScript",id:"typescript",level:2},{value:"\u041c\u0430\u0442. \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b",id:"\u043c\u0430\u0442-\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b",level:2},{value:"\u0421\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u043d\u044b\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b",id:"\u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u043d\u044b\u0435-\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b",level:2},{value:"Infinity \u0438 NaN",id:"infinity-\u0438-nan",level:2},{value:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u044f \u0441\u0442\u0440\u043e\u043a\u0438 \u0432 \u0447\u0438\u0441\u043b\u043e",id:"\u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u044f-\u0441\u0442\u0440\u043e\u043a\u0438-\u0432-\u0447\u0438\u0441\u043b\u043e",level:2},{value:"\u0421\u0438\u0441\u0442\u0435\u043c\u044b \u0438\u0441\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f",id:"\u0441\u0438\u0441\u0442\u0435\u043c\u044b-\u0438\u0441\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f",level:2},{value:"\u041e\u0431\u0440\u0435\u0437\u0430\u0442\u044c \u0437\u043d\u0430\u043a\u0438 \u043f\u043e\u0441\u043b\u0435 \u0437\u0430\u043f\u044f\u0442\u043e\u0439",id:"\u043e\u0431\u0440\u0435\u0437\u0430\u0442\u044c-\u0437\u043d\u0430\u043a\u0438-\u043f\u043e\u0441\u043b\u0435-\u0437\u0430\u043f\u044f\u0442\u043e\u0439",level:2},{value:"Math",id:"math",level:2},{value:"BigInt",id:"bigint",level:2},{value:"\u041b\u043e\u043a\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f",id:"\u043b\u043e\u043a\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f",level:2}],s={toc:p};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"typescript"},"TypeScript"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const someNumber1: number = 123;\nconst someNumber2: 123 | 321 = 123;\n")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d \u0434\u0438\u0430\u043f\u043e\u0437\u043e\u043d\u043e\u043c ",(0,r.kt)("inlineCode",{parentName:"p"},"\xb1(2 \u0432 53-\u0435\u0439 - 1)"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"Number.MAX_SAFE_INTEGER; // 9007199254740991\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"123;\n\n1e6; // 1000000\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u0418\u0437\u0432\u0435\u0442\u043d\u044b\u0435 \u043e\u0448\u0438\u0431\u043a\u0438 \u0432 js\n0.6 + 0.7; // 1.2999999999999998\n0.1 + 0.2; // 0.30000000000000004\n\n// \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b (\u0432 \u0441\u043a\u043e\u0431\u043a\u0430\u0445 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442)\n(0.1 * 10 + 0.2 * 10) / 10; // 0.3\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"123; // \u0446\u0435\u043b\u044b\u0435 \u0447\u0438\u0441\u043b\u0430\n0.123; // \u0434\u0440\u043e\u0431\u043d\u044b\u0435 \u0447\u0438\u0441\u043b\u0430\n0.123 === .123; // true\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u043c\u0430\u0442-\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b"},"\u041c\u0430\u0442. \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"3 + 2; // 5 (\u0441\u043b\u043e\u0436\u0435\u043d\u0438\u0435)\n3 - 2; // 1 (\u0432\u044b\u0447\u0438\u0442\u0430\u043d\u0438\u0435)\n3 * 2; // 6 (\u0443\u043c\u043d\u043e\u0436\u0435\u043d\u0438\u0435)\n3 / 2; // 1.5 (\u0434\u0435\u043b\u0435\u043d\u0438\u0435)\n3 ** 2 // 9 (\u0432\u043e\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 \u043a\u0432\u0430\u0434\u0440\u0430\u0442)\n3 % 2; // 1 (\u043e\u0441\u0442\u0430\u0442\u043e\u043a \u043e\u0442 \u0434\u0435\u043b\u0435\u043d\u0438\u044f)\n")),(0,r.kt)("p",null,"\u0414\u043b\u044f \u043e\u0441\u0442\u0430\u0442\u043a\u0430 \u043e\u0442 \u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043d\u0435\u0432\u0430\u0436\u043d\u043e \u043a\u043e\u043b-\u0432\u043e \u0434\u0432\u043e\u0435\u043a, \u0430 \u0432\u0430\u0436\u0435\u043d \u0438\u043c\u0435\u043d\u043d\u043e \u043e\u0441\u0442\u0430\u0442\u043e\u043a. \u0423 \u043d\u0443\u043b\u044f \u0438 \u0447\u0435\u0442\u043d\u044b\u0445 \u0432\u0441\u0435\u0433\u0434\u0430 \u043d\u043e\u043b\u044c, \u0443 \u043d\u0435\u0447\u0435\u0442\u043d\u044b\u0445 - \u043e\u0434\u0438\u043d."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u0427\u0438\u0441\u043b\u043e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u041a\u043e\u043b-\u0432\u043e 2-\u0435\u043a"),(0,r.kt)("th",{parentName:"tr",align:null},"\u041e\u0441\u0442\u0430\u0442\u043e\u043a"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"0"))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u043d\u044b\u0435-\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b"},"\u0421\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u043d\u044b\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let value = 123;\n\n// \u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u043d\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c\nvalue += 321; // value = value + 321;\nvalue -= 321; // value = value - 321;\nvalue *= 321; // value = value * 321;\nvalue /= 321; // value = value / 321;\n\n// \u0418\u043d\u043a\u0440\u0435\u043c\u0435\u043d\u0442, \u0434\u0435\u043a\u0440\u0435\u043c\u0435\u043d\u0442\n++value; // value = value + 1; (\u043c\u0435\u043d\u044f\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441\u0440\u0430\u0437\u0443 \u043d\u0430 \u044d\u0442\u043e\u0439 \u0436\u0435 \u0441\u0442\u0440\u043e\u043a\u0435)\n--value; // value = value - 1; (\u043c\u0435\u043d\u044f\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441\u0440\u0430\u0437\u0443 \u043d\u0430 \u044d\u0442\u043e\u0439 \u0436\u0435 \u0441\u0442\u0440\u043e\u043a\u0435)\nvalue++; // value = value + 1; (\u043c\u0435\u043d\u044f\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u0441\u0442\u0440\u043e\u043a\u0435)\nvalue--; // value = value - 1; (\u043c\u0435\u043d\u044f\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u0441\u0442\u0440\u043e\u043a\u0435)\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"infinity-\u0438-nan"},"Infinity \u0438 NaN"),(0,r.kt)("p",null,"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0442\u0438\u043f\u044b number (\u0427\u0430\u0441\u0442\u043d\u044b\u0435 \u0441\u043b\u0443\u0447\u0430\u0438 number)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"123 / 0; // Infinity\n123 / 'String' // NaN (not a number)\n\n// \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 NaN\nisNaN(123 / 'String'); // true\n\n// \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 \u0447\u0438\u0441\u043b\u043e (\u0441 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0442\u0438\u043f\u0430)\nisFinite('25'); // '25' --\x3e 25 --\x3e true\nisFinite('abc'); // 'abc' --\x3e NaN --\x3e false\nisFinite(10 / 0); // Infinity --\x3e false\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u044f-\u0441\u0442\u0440\u043e\u043a\u0438-\u0432-\u0447\u0438\u0441\u043b\u043e"},"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u044f \u0441\u0442\u0440\u043e\u043a\u0438 \u0432 \u0447\u0438\u0441\u043b\u043e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"+'123'; // 123\nNumber('123'); // 123\nparseFloat('123.12px'); // 123.12\nparseInt('123.12px'); // 123 \n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u0441\u0438\u0441\u0442\u0435\u043c\u044b-\u0438\u0441\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f"},"\u0421\u0438\u0441\u0442\u0435\u043c\u044b \u0438\u0441\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// 16-\u0447\u043d\u0430\u044f:\n0xabc123; // 11256099\n\n// 8-\u0447\u043d\u0430\u044f:\n0123;     // 83\n\n// 2-\u0447\u043d\u0430\u044f:\n0b1001;   // 9\n\nlet num = 255;\n\n// toString - \u043c\u0435\u0442\u043e\u0434-\u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0442\u043e\u0440 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0438\u0441\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f\nconsole.log(num.toString(2)); // 11111111\nconsole.log(num.toString(8)); // 377\nconsole.log(num.toString(16)); // ff\nconsole.log(num.toString(32)); // 7v\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u043e\u0431\u0440\u0435\u0437\u0430\u0442\u044c-\u0437\u043d\u0430\u043a\u0438-\u043f\u043e\u0441\u043b\u0435-\u0437\u0430\u043f\u044f\u0442\u043e\u0439"},"\u041e\u0431\u0440\u0435\u0437\u0430\u0442\u044c \u0437\u043d\u0430\u043a\u0438 \u043f\u043e\u0441\u043b\u0435 \u0437\u0430\u043f\u044f\u0442\u043e\u0439"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u0431\u0443\u0434\u0435\u0442 \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u044f \u0432 \u0441\u0442\u0440\u043e\u043a\u0443\n123.123123123123.toFixed(2); // '123.12'\n\n// \u0443\u0431\u0440\u0430\u0442\u044c \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u044e\n+123.123123123123.toFixed(2); // 123.12\nNumber(123.123123123123.toFixed(2)); // 123.12\n")),(0,r.kt)("h2",{id:"math"},"Math"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u0440\u0430\u043d\u0434\u043e\u043c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043e\u0442 0 \u0434\u043e 1\nMath.random(); // 0.7010049975254584\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u044b\u0439 \u043a\u043e\u0440\u0435\u043d\u044c\nMath.sqrt(256); // 16\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u043c\u0438\u043d \u0438 \u043c\u0430\u043a\u0441\nMath.min(5, 8, 10, 2);  // 2\nMath.max(5, 8, 10, 2);  // 10\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u0435\nMath.floor(123.999);  // 123 (\u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u0435 \u0432 \u043c\u0435\u043d\u044c\u0448\u0443\u044e)\nMath.ceil(123.111);   // 124 (\u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u0435 \u0432 \u0431\u043e\u043b\u044c\u0448\u0443\u044e)\nMath.round(123.527);  // 124 (\u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u0435 \u0432 \u0441\u0440\u0435\u0434\u043d\u044e\u044e)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u043c\u043e\u0434\u0443\u043b\u0438\nMath.trunc(-123.932); // -123 (\u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0446\u0435\u043b\u0443\u044e \u0447\u0430\u0441\u0442\u044c \u0447\u0438\u0441\u043b\u0430 \u043f\u0443\u0442\u0451\u043c \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u0445 \u0434\u0440\u043e\u0431\u043d\u044b\u0445 \u0437\u043d\u0430\u043a\u043e\u0432.)\nMath.abs(-123.988);   // 123 (\u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0443\u044e \u0447\u0430\u0441\u0442\u044c)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u044b\nMath.PI;      // 3.14\nMath.E;       // 2.7\nMath.LOG10E;  // 0.434\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"bigint"},"BigInt"),(0,r.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0440\u0435\u0434\u043a\u043e, \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c \u0434\u043b\u044f \u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u044f. \u0412\u0432\u0435\u043b\u0438, \u0447\u0442\u043e\u0431\u044b \u0441\u043d\u044f\u0442\u044c \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u043d\u0430 \u0446\u0438\u0444\u0440\u043e\u0432\u0443\u044e \u0434\u043b\u0438\u043d\u0443 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"typeof 1234567890123456789012345678901234567890n; // BigInt\ntypeof 10n; // BigInt\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u043b\u043e\u043a\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f"},"\u041b\u043e\u043a\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// '100000000000 --\x3e 100 \u043c\u043b\u0440\u0434'\nnew Intl.NumberFormat('ru', {\n  notation: 'compact',\n}).format(100000000000);\n")))}m.isMDXComponent=!0}}]);