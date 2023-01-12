"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8028],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=d(t),f=o,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||i;return t?r.createElement(m,s(s({ref:n},l),{},{components:t})):r.createElement(m,s({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=u;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var d=2;d<i;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1161:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=t(7462),o=(t(7294),t(3905));const i={title:"\u041a\u043b\u0430\u0441\u0441\u044b ---",sidebar_position:13},s=void 0,a={unversionedId:"frontend/js-extended/class",id:"frontend/js-extended/class",title:"\u041a\u043b\u0430\u0441\u0441\u044b ---",description:"\u041f\u0440\u0438\u0432\u044f\u0437\u043a\u0430 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430 \u043a \u043c\u0435\u0442\u043e\u0434\u0430\u043c \u043a\u043b\u0430\u0441\u0441\u0430",source:"@site/docs/frontend/js-extended/class.md",sourceDirName:"frontend/js-extended",slug:"/frontend/js-extended/class",permalink:"/knowledge-bank/docs/frontend/js-extended/class",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/js-extended/class.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"\u041a\u043b\u0430\u0441\u0441\u044b ---",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 ---",permalink:"/knowledge-bank/docs/frontend/js-extended/data"},next:{title:"\u0410\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0441\u0442\u044c +--",permalink:"/knowledge-bank/docs/frontend/js-extended/async"}},c={},d=[{value:"\u041f\u0440\u0438\u0432\u044f\u0437\u043a\u0430 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430 \u043a \u043c\u0435\u0442\u043e\u0434\u0430\u043c \u043a\u043b\u0430\u0441\u0441\u0430",id:"\u043f\u0440\u0438\u0432\u044f\u0437\u043a\u0430-\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430-\u043a-\u043c\u0435\u0442\u043e\u0434\u0430\u043c-\u043a\u043b\u0430\u0441\u0441\u0430",level:3}],l={toc:d};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u043f\u0440\u0438\u0432\u044f\u0437\u043a\u0430-\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430-\u043a-\u043c\u0435\u0442\u043e\u0434\u0430\u043c-\u043a\u043b\u0430\u0441\u0441\u0430"},"\u041f\u0440\u0438\u0432\u044f\u0437\u043a\u0430 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430 \u043a \u043c\u0435\u0442\u043e\u0434\u0430\u043c \u043a\u043b\u0430\u0441\u0441\u0430"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class Transport {\n  constructor(type, price, vendor, model) {\n    this.type = type;\n    this.price = price;\n    this.vendor = vendor;\n    this.model = model;\n  }\n\n  getInfo() {\n    return `${this.vendor}, ${this.model}`;\n  }\n\n  getPrice() {\n    return this.price.toLocaleString('ru-RU') + ' \u20bd';\n  }\n}\n\nclass Car extends Transport {\n  constructor(vendor, model, doorsCount, price) {\n    super('car', price, vendor, model);\n    this.doorsCount = doorsCount;\n  }\n  \n  // \u041f\u0440\u0438\u0432\u044f\u0437\u043a\u0430 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430\n  getInfo = this.getInfo.bind(this);\n  getPrice = this.getPrice.bind(this);\n  getDoorsCount = this.getDoorsCount.bind(this);\n\n  getDoorsCount() {\n    return `\u041a\u043e\u043b-\u0432\u043e \u0434\u0432\u0435\u0440\u0435\u0439: ${this.doorsCount}`;\n  }\n}\n\nclass Bike extends Transport {\n  constructor(vendor, model, maxSpeed, price) {\n    super('bike', price, vendor, model);\n    this.maxSpeed = maxSpeed;\n  }\n  \n  // \u041f\u0440\u0438\u0432\u044f\u0437\u043a\u0430 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430\n  getInfo = this.getInfo.bind(this);\n  getPrice = this.getPrice.bind(this);\n  getMaxSpeed = this.getMaxSpeed.bind(this);\n\n  getMaxSpeed() {\n    return `\u041c\u0430\u043a\u0441. \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c: ${this.maxSpeed} \u043a\u043c/\u0447`;\n  }\n}\n\nconst car1 = new Car('KIA', 'Rio', 5, 1200000);\nconst { getDoorsCount } = car1;\nconsole.log(getDoorsCount());\n")))}p.isMDXComponent=!0}}]);