"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2300],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={title:"DOM-\u0434\u0435\u0440\u0435\u0432\u043e +--",sidebar_position:21},i=void 0,l={unversionedId:"frontend/js-basics/dom",id:"frontend/js-basics/dom",title:"DOM-\u0434\u0435\u0440\u0435\u0432\u043e +--",description:"DOM-\u0434\u0435\u0440\u0435\u0432\u043e",source:"@site/docs/frontend/js-basics/dom.md",sourceDirName:"frontend/js-basics",slug:"/frontend/js-basics/dom",permalink:"/knowledge-bank/docs/frontend/js-basics/dom",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/js-basics/dom.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{title:"DOM-\u0434\u0435\u0440\u0435\u0432\u043e +--",sidebar_position:21},sidebar:"tutorialSidebar",previous:{title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 +--",permalink:"/knowledge-bank/docs/frontend/js-basics/functions"},next:{title:"Events ---",permalink:"/knowledge-bank/docs/frontend/js-basics/events"}},c={},u=[{value:"DOM-\u0434\u0435\u0440\u0435\u0432\u043e",id:"dom-\u0434\u0435\u0440\u0435\u0432\u043e",level:2},{value:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432",id:"\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430-\u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432",level:3},{value:"Convert NodeList to array",id:"convert-nodelist-to-array",level:3},{value:"\u0424\u043e\u0440\u043c\u044b",id:"\u0444\u043e\u0440\u043c\u044b",level:2}],s={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"dom-\u0434\u0435\u0440\u0435\u0432\u043e"},"DOM-\u0434\u0435\u0440\u0435\u0432\u043e"),(0,o.kt)("p",null,"Some content"),(0,o.kt)("h3",{id:"\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430-\u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432"},"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"document.querySelector('.total__button').addEventListener('click', applyDiscount);\n\nlet discont = false;\n\nfunction applyDiscount() {\n  if (!discont) {\n    discont = true;\n    getDomNodesBySelector('.price-value').forEach(el => {\n      el.innerText = el.innerText * 0.85;\n    });\n\n    const totalPriceEl = document.querySelector('.total-price-value');\n    totalPriceEl.innerHTML = totalPriceEl.innerHTML * 0.85;   \n  }   \n}\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"convert-nodelist-to-array"},"Convert NodeList to array"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  const elements = document.querySelectorAll(selector);\n  \n  return Array.from(elements);\n")),(0,o.kt)("h2",{id:"\u0444\u043e\u0440\u043c\u044b"},"\u0424\u043e\u0440\u043c\u044b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const form = document.forms.formWithInput;\nconst printResult = document.querySelector('.content__result');\nconst inputNumber = document.querySelector('.form__input');\nconst congratulation = document.querySelector('#congratulation');\n\nfunction findNearestFactorial(value) {\n  if (value === '' || value === undefined) {\n    return '*';\n  }\n\n  if (value <= 0) {\n    console.log(value);\n    return 1;\n  }\n  let currentValue = 1;\n\n  for (var i = 1; currentValue * i <= value; i++) { // c let \u0431\u0443\u0434\u0435\u0442 \u043e\u0448\u0438\u0431\u043a\u0430\n    currentValue *= i;\n  }\n  return i - 1;\n}\n\nform.addEventListener('keyup', evt => {\n  evt.preventDefault();\n  printResult.textContent = findNearestFactorial(inputNumber.value);\n  congratulation.textContent = inputNumber.value && '\u0412\u0430\u0443, \u044d\u0442\u043e \u0443\u0441\u043f\u0435\u0445!';\n});\n\nform.addEventListener('submit', evt => {\n  evt.preventDefault();\n});\n")))}d.isMDXComponent=!0}}]);