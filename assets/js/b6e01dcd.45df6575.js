"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[8815],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=i(t),m=o,b=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(b,l(l({ref:n},d),{},{components:t})):r.createElement(b,l({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var i=2;i<a;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7875:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var r=t(7462),o=(t(7294),t(3905));const a={title:"CSS-\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 / SCSS",sidebar_position:13},l=void 0,s={unversionedId:"frontend/css/scss",id:"frontend/css/scss",title:"CSS-\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 / SCSS",description:"CSS-\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435",source:"@site/docs/frontend/css/13-scss.md",sourceDirName:"frontend/css",slug:"/frontend/css/scss",permalink:"/knowledge-bank/docs/frontend/css/scss",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/css/13-scss.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"CSS-\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 / SCSS",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"\u0422\u0430\u0431\u043b\u0438\u0446\u044b \u043d\u0430 CSS",permalink:"/knowledge-bank/docs/frontend/css/tables"},next:{title:"\u0411\u042d\u041c-\u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u044f",permalink:"/knowledge-bank/docs/frontend/css/bem"}},c={},i=[{value:"CSS-\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435",id:"css-\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435",level:2},{value:"SCSS",id:"scss",level:2},{value:"\u0418\u043c\u043f\u043e\u0440\u0442 \u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435",id:"\u0438\u043c\u043f\u043e\u0440\u0442-\u0438-\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435",level:3},{value:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435",id:"\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435",level:3},{value:"\u0412\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u044c",id:"\u0432\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u044c",level:3},{value:"\u0428\u043e\u0440\u0442\u043a\u0430\u0442 \u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440\u0430 (&amp;)",id:"\u0448\u043e\u0440\u0442\u043a\u0430\u0442-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440\u0430-",level:3},{value:"\u041c\u0430\u0442. \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438",id:"\u043c\u0430\u0442-\u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438",level:3},{value:"\u0426\u0432\u0435\u0442\u043e\u0432\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438",id:"\u0446\u0432\u0435\u0442\u043e\u0432\u044b\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0438",level:3},{value:"\u041c\u0438\u043a\u0441\u0438\u043d\u044b",id:"\u043c\u0438\u043a\u0441\u0438\u043d\u044b",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043c\u0438\u043a\u0441\u0438\u043d\u043e\u0432 \u0434\u043b\u044f \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0438",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043c\u0438\u043a\u0441\u0438\u043d\u043e\u0432-\u0434\u043b\u044f-\u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0438",level:4},{value:"customScrollBar",id:"customscrollbar",level:4}],d={toc:i};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"css-\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435"},"CSS-\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"/* \u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 */\n:root {\n  --my-custom-color: tomato;\n  --my-custom-size: 16px;\n}\n\n/* \u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 */    \n.some-class {\n  color: var(--my-custom-color);\n  font-size: var(--my-custom-size);\n}\n\n/* \u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u0432\u043d\u0443\u0442\u0440\u0438 \u0441 \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 */\n.some-class {\n  color: var(--my-custom-color, red);\n  font-size: var(--my-custom-size, 14px);\n}\n\n/* \u041c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0441 \u0446\u0438\u0444\u0440\u043e\u0432\u044b\u043c\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 \n\u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u0438 calc() */\n.some-class {\n  font-size: calc(var(--my-custom-size)*0.5);\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"scss"},"SCSS"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sass-scss.ru/"},"Official Docs"))),(0,o.kt)("h3",{id:"\u0438\u043c\u043f\u043e\u0440\u0442-\u0438-\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435"},"\u0418\u043c\u043f\u043e\u0440\u0442 \u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},'@import "scss/vars";   // \u0444\u0430\u0439\u043b \u0441 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u043c\u0438\n@import "scss/mixins"; // \u0444\u0430\u0439\u043b \u0441 \u043f\u0440\u0438\u043c\u0435\u0441\u044f\u043c\u0438\n\n.some-class {\n  clear: left\n  float: left;\n}\n\n.content-box {\n  @extend .some-class; // \u0440\u0430\u0441\u0448\u0438\u0440\u0438\u0442\u044c \u043a\u043b\u0430\u0441\u0441\n  color: $base-color;\n  border: 1px solid red;\n}\n')),(0,o.kt)("h3",{id:"\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435"},"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"$navy: #1d365d;\n\n.class { color: $navy; }\n")),(0,o.kt)("h3",{id:"\u0432\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u044c"},"\u0412\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u044c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},".super-class-name {\n  color: #fff;\n\n  a {\n    text-decoration: none;\n\n    span { font-size: 1em; }\n  }\n}\n")),(0,o.kt)("h3",{id:"\u0448\u043e\u0440\u0442\u043a\u0430\u0442-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440\u0430-"},"\u0428\u043e\u0440\u0442\u043a\u0430\u0442 \u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440\u0430 (&)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"// & - \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440\n.super-button {\n  &__text { font-size: $font-size; } // .super-button__text\n  &--red  { color: red; } // .super-button--red\n  &--blue { color: blue; } // .super-button--blue\n  &:hover { ... }\n  &:active { ... }\n  & span { ... }\n  &[disabled] { ... }\n  &.some-class { ... }\n}\n")),(0,o.kt)("h3",{id:"\u043c\u0430\u0442-\u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438"},"\u041c\u0430\u0442. \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"div {\n  padding-top: 10px + 20;     // = 30px\n  padding-bottom: 100px - 50; // = 50px\n  font-size: 2em * 2;         // = 4em\n  left: 50% / 2;              // = 25%\n  rgb(10, 10, 10) + 10;       // rgb(20, 20, 20)\n\n  // \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438\n  ceil((16px + 2cm) / 2)      // \u043e\u043a\u0440\u0443\u0433. \u0432 \u0431\u043e\u043b\u044c\u0448\u0443\u044e \u0441\u0442.\n  floor((16px + 2cm) / 2)     // \u043e\u043a\u0440\u0443\u0433. \u0432 \u043c\u0435\u043d\u044c\u0448\u0443\u044e \u0441\u0442.\n  round((16px + 2cm) / 2)     // \u043e\u043a\u0440\u0443\u0433. \u0432 \u0431\u043b\u0438\u0436. \u0441\u0442.\n}\n")),(0,o.kt)("h3",{id:"\u0446\u0432\u0435\u0442\u043e\u0432\u044b\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0438"},"\u0426\u0432\u0435\u0442\u043e\u0432\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"div {\n  // \u0446\u0432\u0435\u0442 \u043f\u043e\u0432\u0435\u0440\u043d. \u043e\u0442 \u043a\u0440\u0430\u0441\u043d\u043e\u0433\u043e \u043d\u0430 90\xb0 \u043f\u043e \u0447\u0430c.\n  color: spin(red, 90);\n\n  // \u0446\u0432\u0435\u0442 \u043d\u0430 45\xb0 \u043e\u0442 #f0f \u043f\u0440\u043e\u0442\u0438\u0432 \u0447\u0430c.\n  border-color: spin(#f0f, -45);\n\n  // \u0441\u0432\u0435\u0442\u043b\u0435\u0435 red \u043d\u0430 50%\n  color: lighten(red, 50%);\n\n  // \u0442\u0435\u043c\u043d\u0435\u0435 blue \u043d\u0430 25%\n  color: darken(blue, 25%);\n\n  // green \u043d\u0430\u0441\u044b\u0449\u0435\u043d\u043d\u0435\u0435 \u043d\u0430 20%\n  color: saturate(green, 20%);\n\n  // blue \u0431\u043b\u0435\u0434\u043d\u0435\u0435 \u043d\u0430 50%\n  color: desaturate(blue, 50%);\n\n  // @color \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u0435\u0435 \u043d\u0430 50%\n  color: fade(@color, 50%);\n\n  // SASS: $color \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u0435\u0435 \u043d\u0430 50%\n  color: rgba($color, 0.5);\n}\n")),(0,o.kt)("h3",{id:"\u043c\u0438\u043a\u0441\u0438\u043d\u044b"},"\u041c\u0438\u043a\u0441\u0438\u043d\u044b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"/* \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u043c\u0435\u0441\u0438 */\n@mixin white { color: white; }\n\n/* \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u043c\u0435\u0441\u0438 */\n.text { @include white; }\n\n// \u041f\u0440\u0438\u043c\u0435\u0441\u044c \u0441 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u043c\n@mixin margin(@value) {\n  margin-top: @value;\n  margin-bottom: @value;\n}\n\n// \u041f\u0440\u0438\u043c\u0435\u0441\u044c \u0441 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438\n@mixin offset(@padding; @margin) {\n  padding: @padding;\n  margin: @margin;\n}\n\n.block1 {\n  @include margin(10px);\n}\n\n.block2 {\n  @include offset(5px; 10px);\n}\n")),(0,o.kt)("h4",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043c\u0438\u043a\u0441\u0438\u043d\u043e\u0432-\u0434\u043b\u044f-\u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0438"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u043c\u0438\u043a\u0441\u0438\u043d\u043e\u0432 \u0434\u043b\u044f \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0438"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"// BREAKPOINTS (useWindowSize - \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0442\u043e\u0436\u0435 \u044d\u0442\u0438)\n//                  DESKTOP [1201 - 1920] --\x3e 1920 \u043c\u0430\u043a\u0435\u0442\n$laptop: 1200px; // LAPTOP  [1024 - 1200] --\x3e 1024 \u043c\u0430\u043a\u0435\u0442 \n$tablet: 1023px; // TABLET  [768 - 1023]  --\x3e 768 \u043c\u0430\u043a\u0435\u0442\n$mobile: 767px;  // MOBILE  [0 - 767]     --\x3e 414 \u043c\u0430\u043a\u0435\u0442\n\n@mixin laptop {\n  @media screen and (max-width: $laptop) {\n    @content;\n  }\n}\n\n@mixin tablet {\n  @media screen and (max-width: $tablet) {\n    @content;\n  }\n}\n\n@mixin mobile {\n  @media screen and (max-width: $mobile) {\n    @content;\n  }\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"customscrollbar"},"customScrollBar"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"@mixin customScrollBar($color) {\n  // scrollbar track width\n  &::-webkit-scrollbar {\n    width: 4px;\n  }\n\n  // scrollbar track background (\u043f\u043e\u043b\u043e\u0441\u043a\u0430)\n  &::-webkit-scrollbar-track {\n    background-color: transparent;\n  }\n\n  // scrollbar thumb (\u0431\u0435\u0433\u0443\u043d\u043e\u043a)\n  &::-webkit-scrollbar-thumb {\n    background-color: $color;\n    border-radius: 8px;\n  }\n}\n")))}p.isMDXComponent=!0}}]);