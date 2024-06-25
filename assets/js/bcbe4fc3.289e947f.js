"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[9279],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),i=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=i(t),m=s,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(k,o(o({ref:n},c),{},{components:t})):r.createElement(k,o({ref:n},c))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:s,o[1]=p;for(var i=2;i<a;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7662:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var r=t(7462),s=(t(7294),t(3905));const a={title:"Express",sidebar_position:1},o=void 0,p={unversionedId:"backend/nodejs/express",id:"backend/nodejs/express",title:"Express",description:"Express \u2014 \u044d\u0442\u043e \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0435\u0440 \u043b\u044e\u0431\u043e\u0439 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0438. \u0414\u0430\u0436\u0435 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u044b\u0441\u043e\u043a\u043e\u043d\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043d\u044b\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f NodeJS \u0438 Express.",source:"@site/docs/backend/nodejs/1-express.md",sourceDirName:"backend/nodejs",slug:"/backend/nodejs/express",permalink:"/knowledge-bank/docs/backend/nodejs/express",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/backend/nodejs/1-express.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Express",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/knowledge-bank/docs/backend/nodejs/basics"},next:{title:"json-server ---",permalink:"/knowledge-bank/docs/backend/nodejs/json-server"}},l={},i=[{value:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433",id:"\u0431\u0430\u0437\u043e\u0432\u044b\u0439-\u043a\u043e\u043d\u0444\u0438\u0433",level:2},{value:"\u0421 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c __dirname",id:"\u0441-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c-__dirname",level:3},{value:"\u0421 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432",id:"\u0441-\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u043c-\u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432",level:3}],c={toc:i};function d(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Express \u2014 \u044d\u0442\u043e \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0435\u0440 \u043b\u044e\u0431\u043e\u0439 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0438. \u0414\u0430\u0436\u0435 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u044b\u0441\u043e\u043a\u043e\u043d\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043d\u044b\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f NodeJS \u0438 Express."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u043a\u0435\u0442: ",(0,s.kt)("inlineCode",{parentName:"p"},"npm i express --save-dev "))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0430: ",(0,s.kt)("inlineCode",{parentName:"p"},"node ./server.js ")))),(0,s.kt)("h2",{id:"\u0431\u0430\u0437\u043e\u0432\u044b\u0439-\u043a\u043e\u043d\u0444\u0438\u0433"},"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="server.js"',title:'"server.js"'},"// server.js\nconst express = require('express');\n\nconst app = express();\nconst PORT = 4000;\n\napp.use(express.static('./'));\n\napp.listen(PORT, function () {\n  console.log(`Example app listening on port ${PORT}!`);\n});\n")),(0,s.kt)("p",null,"\u0417\u0430\u043c\u0435\u0442\u0438\u043c, \u0447\u0442\u043e, \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0432 \u0441\u0432\u043e\u0439 \u0441\u0435\u0440\u0432\u0435\u0440, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c HTML \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435, \u043d\u043e \u0438 \u0432 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0435, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0443 ",(0,s.kt)("inlineCode",{parentName:"p"},"curl http://localhost:4000/"),", \u0438\u043b\u0438 \u0432 Postman, Owasp ZAP \u0438 \u0438\u043d\u044b\u0445 \u043f\u043e\u0434\u043e\u0431\u043d\u044b\u0445 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430\u0445."),(0,s.kt)("h3",{id:"\u0441-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c-__dirname"},"\u0421 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c __dirname"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="server.js"',title:'"server.js"'},"const path = require('path');\nconst express = require('express');\n\nconst app = express();\nconst PORT = 3000;\n\n// \u043f\u0443\u0442\u044c \u0434\u043e index.html\nconst PATH = path.join(__dirname, './');\n\napp.use(express.static(PATH));\n\napp.listen(PORT, () => {\n  console.log(`\u041c\u043e\u0439 \u0442\u0435\u043a\u0441\u0442 \u0432 \u043b\u043e\u0433\u0435 \u043f\u043e\u0441\u043b\u0435 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 ${PORT}!`);\n});\n")),(0,s.kt)("h3",{id:"\u0441-\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u043c-\u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432"},"\u0421 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="server.js"',title:'"server.js"'},"const path = require('path');\nconst express = require('express');\nconst app = express();\nconst PORT = 3000;\nconst API_PREFIX = '/api/v1';\nconst PATH = path.join(__dirname, './');\n\napp.use(express.static(PATH));\n\n// \u0445\u044d\u043d\u0434\u043b\u0435\u0440 get-\u0437\u0430\u043f\u0440\u043e\u0441\u0430\napp.get(`${API_PREFIX}/text`, (req, res) => {\n  res.status(200).send('Hello, World!');\n});\n\n// \u0445\u044d\u043d\u0434\u043b\u0435\u0440 put-\u0437\u0430\u043f\u0440\u043e\u0441\u0430\napp.put(`${API_PREFIX}/json`, (req, res) => {\n    res.setHeader('Content-Type', 'application/json');\n  res.status(201).send({data: {items: [1,2,3]}});\n});\n\n// \u0441\u043b\u0443\u0448\u0430\u043d\u044c\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\napp.listen(PORT, function() {\n  console.log(`Example app listening on port ${PORT}`);\n});\n\n")),(0,s.kt)("p",null,"\u0411\u0443\u0434\u0443\u0442 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c\u0441\u044f \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e \u0442\u0430\u043a\u0438\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'# status: 200, "Hello, World!"\ncurl http://localhost:3000/api/v1/text\n\ncurl -X PUT http://localhost:3000/api/v1/json\n# status: 201, headers: content-type - json, {"data": {"items": [1, 2, 3]}}\n')))}d.isMDXComponent=!0}}]);