"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[5057],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f",sidebar_position:9},i=void 0,l={unversionedId:"qa/automatization",id:"qa/automatization",title:"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f",description:"\u041c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c postman-cli \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f API.",source:"@site/docs/qa/automatization.md",sourceDirName:"qa",slug:"/qa/automatization",permalink:"/knowledge-bank/docs/qa/automatization",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/qa/automatization.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"API \u0438 \u0411\u0414",permalink:"/knowledge-bank/docs/qa/api"},next:{title:"\ud83c\udfa4 Content",permalink:"/knowledge-bank/docs/category/-content"}},c={},p=[{value:"\u0417\u0430\u043b\u043e\u0433\u0438\u043d\u0438\u0442\u044c postman \u0432\u043d\u0443\u0442\u0440\u0438 cli",id:"\u0437\u0430\u043b\u043e\u0433\u0438\u043d\u0438\u0442\u044c-postman-\u0432\u043d\u0443\u0442\u0440\u0438-cli",level:3},{value:"\u0417\u0430\u043f\u0443\u0441\u043a \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438",id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f-\u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438",level:3},{value:"\u041c\u043e\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u043a\u043e\u043d\u0441\u043e\u043b\u044c\u043d\u044b\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",id:"\u043c\u043e\u0436\u043d\u043e-\u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c-\u043a\u043e\u043d\u0441\u043e\u043b\u044c\u043d\u044b\u0435-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",level:3}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u041c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c postman-cli \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f API. "),(0,a.kt)("h3",{id:"\u0437\u0430\u043b\u043e\u0433\u0438\u043d\u0438\u0442\u044c-postman-\u0432\u043d\u0443\u0442\u0440\u0438-cli"},"\u0417\u0430\u043b\u043e\u0433\u0438\u043d\u0438\u0442\u044c postman \u0432\u043d\u0443\u0442\u0440\u0438 cli"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"postman login --with-api-key \u043d\u043e\u043c\u0435\u0440-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f")),(0,a.kt)("h3",{id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f-\u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438"},"\u0417\u0430\u043f\u0443\u0441\u043a \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"postman collection run 4238395-25d68cf2-a10e-4dcd-9921-096fc17c48fb")),(0,a.kt)("h3",{id:"\u043c\u043e\u0436\u043d\u043e-\u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c-\u043a\u043e\u043d\u0441\u043e\u043b\u044c\u043d\u044b\u0435-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"},"\u041c\u043e\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u043a\u043e\u043d\u0441\u043e\u043b\u044c\u043d\u044b\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// TEST 1 - \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 200 \u0441\u0442\u0430\u0442\u0443\u0441-\u043a\u043e\u0434\u0430\npm.test(\"GET USER - Status code is 200\", function () {\n    pm.response.to.have.status(200);\n});\n\n// TEST 2 - \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u044f (\u0447\u0442\u043e \u043f\u043e\u043b\u0435 data.firsta_name === 'Rachel')\npm.test(\"USER FIRST NAME CHECK\", () => {\n    const jsonData = pm.response.json();\n    pm.expect(jsonData.data.first_name).to.eql('Rachel');\n});\n")))}u.isMDXComponent=!0}}]);