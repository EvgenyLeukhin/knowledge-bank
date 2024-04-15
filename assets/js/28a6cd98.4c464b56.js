"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[2459],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(t),h=a,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return t?r.createElement(m,s(s({ref:n},p),{},{components:t})):r.createElement(m,s({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7948:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=t(7462),a=(t(7294),t(3905));const o={title:"fetch",sidebar_position:0},s=void 0,l={unversionedId:"frontend/react/api/fetch",id:"frontend/react/api/fetch",title:"fetch",description:"- \u041f\u0440\u043e\u0434\u0432\u0438\u043d\u0443\u0442\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u0432\u043c\u0435\u0441\u0442\u043e \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0435\u0433\u043e XMLHttpRequest. \u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b. \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043f\u0440\u043e\u043c\u0438\u0441.",source:"@site/docs/frontend/react/6-api/0-fetch.md",sourceDirName:"frontend/react/6-api",slug:"/frontend/react/api/fetch",permalink:"/knowledge-bank/docs/frontend/react/api/fetch",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/react/6-api/0-fetch.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"fetch",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Redux-classic",permalink:"/knowledge-bank/docs/frontend/react/redux/classic"},next:{title:"axios",permalink:"/knowledge-bank/docs/frontend/react/api/axios"}},c={},i=[{value:"GET-\u043f\u0440\u0438\u043c\u0435\u0440",id:"get-\u043f\u0440\u0438\u043c\u0435\u0440",level:3},{value:"POST-\u043f\u0440\u0438\u043c\u0435\u0440",id:"post-\u043f\u0440\u0438\u043c\u0435\u0440",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0441 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u043e\u0439",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0441-\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u043e\u0439",level:3},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"Fetch \u043f\u0440\u0438\u043c\u0435\u0440 \u0441 then-catch",id:"fetch-\u043f\u0440\u0438\u043c\u0435\u0440-\u0441-then-catch",level:2},{value:"Fetch \u043f\u0440\u0438\u043c\u0435\u0440 \u0441 async-await \u0438 try-catch-finally",id:"fetch-\u043f\u0440\u0438\u043c\u0435\u0440-\u0441-async-await-\u0438-try-catch-finally",level:2},{value:"\u041c\u0435\u0442\u043e\u0434\u044b \u043e\u0431\u0440\u0430\u0431\u043e\u043a\u0442\u043a\u0438 response \u043f\u043e\u0441\u043b\u0435 fetch",id:"\u043c\u0435\u0442\u043e\u0434\u044b-\u043e\u0431\u0440\u0430\u0431\u043e\u043a\u0442\u043a\u0438-response-\u043f\u043e\u0441\u043b\u0435-fetch",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b response \u043f\u043e\u0441\u043b\u0435 fetch",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b-response-\u043f\u043e\u0441\u043b\u0435-fetch",level:2},{value:"TypeScript",id:"typescript",level:2}],p={toc:i};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u041f\u0440\u043e\u0434\u0432\u0438\u043d\u0443\u0442\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u0432\u043c\u0435\u0441\u0442\u043e \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0435\u0433\u043e XMLHttpRequest. \u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b. \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043f\u0440\u043e\u043c\u0438\u0441."),(0,a.kt)("li",{parentName:"ul"},"\u041c\u043e\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441 \u0442\u0430\u043a\u043c\u0438\u043c\u0438 \u043c\u0435\u0442\u043e\u0434\u0430\u043c\u0438 \u043a\u0430\u043a get, post, \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u043b\u0438 \u0444\u0430\u0439\u043b\u044b."),(0,a.kt)("li",{parentName:"ul"},"\u041e\u0442\u0432\u0435\u0442\u044b \u0441 fetch, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435, \u0441\u043f\u0435\u0440\u0432\u0430 \u043d\u0443\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0438\u0445 \u0432 \u043c\u0435\u0442\u043e\u0434 json():"),(0,a.kt)("li",{parentName:"ul"},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0441\u0442\u0430\u0442\u0443\u0441\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0431\u0443\u0434\u0435\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u044c\u0441\u044f \u0432 \u043f\u0435\u0440\u0432\u043e\u043c then.")),(0,a.kt)("p",null,"\u041e\u0434\u043d\u043e \u0438\u0437 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432 JS, \u0447\u0442\u043e \u043e\u043d \u043c\u043e\u0436\u0435\u0442 \u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443 \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0431\u0435\u0437 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b, \u044d\u0442\u043e\u0442 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0430\u0441\u0438\u0445\u0440\u043e\u043d\u043d\u044b\u0439, \u0442\u0430\u043a \u043a\u0430\u043a \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0442\u0430\u043a\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0437\u0430\u0440\u0430\u043d\u0435\u0435 \u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0439.\n\u0420\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u043f\u0440\u0438\u0447\u0438\u043d\u044b \u043c\u043e\u0433\u0443\u0442 \u0432\u043b\u0438\u044f\u0442\u044c \u043d\u0430 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u043e\u0442\u0432\u0435\u0442\u0430 \u043e\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0441\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u043a\u043e\u0438\u0435\u043d\u0442\u0435"),(0,a.kt)("li",{parentName:"ul"},"\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044f \u043f\u0440\u0430\u0432 \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445"),(0,a.kt)("li",{parentName:"ul"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043f\u0440\u0435\u043f\u044f\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044e \u0434\u0430\u043d\u043d\u044b\u0445"),(0,a.kt)("li",{parentName:"ul"},"\u041e\u0448\u0438\u0431\u043a\u0438 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435"),(0,a.kt)("li",{parentName:"ul"},"\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0430")),(0,a.kt)("p",null,"\u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432\u0430\u0436\u043d\u043e \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u0432\u0441\u0435 \u044d\u0442\u0438 \u0444\u0430\u043a\u0442\u043e\u0440\u044b."),(0,a.kt)("h3",{id:"get-\u043f\u0440\u0438\u043c\u0435\u0440"},"GET-\u043f\u0440\u0438\u043c\u0435\u0440"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"fetch('https://jsonplaceholder.typicode.com/todos') // \u0432\u0435\u0440\u043d\u0435\u0442 \u043f\u0440\u043e\u043c\u0438\u0441 (\u043c\u0435\u0442\u043e\u0434 GET \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e)\n // \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043e\u0442\u0432\u0435\u0442\u0430 \u043f\u0440\u043e\u043c\u0438\u0441\u0430\n  .then(res => res.json())\n\n   // \u0432\u044b\u0432\u043e\u0434 \u043e\u0442\u0432\u0435\u0442\u0430\n  .then(json => console.log(json))\n\n  // \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043e\u0448\u0438\u0431\u043a\u0438\n  .catch(error => console.error('error', error)) \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"fetch('https://swapi.py4e.com/api/people/')\n  .then(response => response.json())\n  .then(data => console.log(data.results));\n")),(0,a.kt)("h3",{id:"post-\u043f\u0440\u0438\u043c\u0435\u0440"},"POST-\u043f\u0440\u0438\u043c\u0435\u0440"),(0,a.kt)("p",null,"\u041c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c body (HEAD, POST, PUT \u0437\u0430\u043f\u0440\u043e\u0441\u044b). \u0412 GET \u043d\u0435\u043b\u044c\u0437\u044f."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"fetch('https://example.com/profile', {\n  // fetch options\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/json',\n  },\n\n  // \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 body\n  body: JSON.stringify({\n    email: 'user@gmail.com',\n    password: '123',\n  }),\n})\n\n// json convert\n.then(response => response.json())\n\n// Success\n.then(data => {\n  console.log('Success:', data);\n})\n\n// error\n.catch(error => {\n  console.error('Error:', error);\n});\n")),(0,a.kt)("h3",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0441-\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u043e\u0439"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0441 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u043e\u0439"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// API\nconst API_URL = 'https://jsonplaceholder.typicode.com';\nconst endpoint = `${API_URL}/todos`;\n\n// \u0424\u0435\u0442\u0447\u0438\u043c \u044d\u043d\u0434\u043f\u043e\u0438\u043d\u0442\nfetch(endpoint, { method: 'GET' })\n  // fetch \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043f\u0440\u043e\u043c\u0438\u0441\u0441, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043d\u0443\u0436\u043d\u043e \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0447\u0435\u0440\u0435\u0437 .then()\n  .then(response => {\n    // console.log('response: ', response);\n\n    // \u041e\u041a - \u0443\u0441\u043f\u0435\u0448\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441\n    if (response.ok) {\n      // \u043f\u0440\u0438 fetch \u043f\u0440\u0438\u0448\u0435\u0434\u0448\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u0440\u0430\u0441\u043f\u0430\u0440\u0441\u0438\u0442\u044c \u043c\u0435\u0442\u043e\u0434\u043e\u043c .json()\n      return response.json();\n    }\n\n  // NOT OK - \u043d\u0435\u0443\u0441\u043f\u0435\u0448\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441\n    else {\n      console.log('error');\n    }\n  })\n\n  .then(data => {\n    // \u0432\u044b\u0432\u043e\u0434\u0438\u043c \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u044b\u0435 \u0440\u0430\u043d\u0435\u0435 \u0434\u0430\u043d\u043d\u044b\u0435\n    console.log('all data: ', data);\n\n    return data.map((item, index) => console.log(`item-${index}: `, item));\n  })\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'method: "POST", // *GET, POST, PUT, DELETE, etc.\n\nmode: "cors", // no-cors, *cors, same-origin\n\ncache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached\n\ncredentials: "same-origin", // include, *same-origin, omit\n\nheaders: {\n    "Content-Type": "application/json",\n    // \'\u0441\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u043e\u0432\n},\nredirect: "follow", // manual, *follow, error\n\nreferrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url\n\nbody: JSON.stringify(data), // body data type must match "Content-Type" header\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"fetch-\u043f\u0440\u0438\u043c\u0435\u0440-\u0441-then-catch"},"Fetch \u043f\u0440\u0438\u043c\u0435\u0440 \u0441 then-catch"),(0,a.kt)("p",null,"\u0422\u0430\u043a \u043a\u0430\u043a fetch \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043f\u0440\u043e\u043c\u0438\u0441, \u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0446\u0435\u043f\u043e\u0447\u043a\u0443 then-catch."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// data example\nconst newPost = {\n  title: 'foo',\n  body: 'bar',\n  userId: 1,\n}\n\nfetch('https://jsonplaceholder.typicode.com/posts', { // \u043c\u0435\u0442\u043e\u0434 get \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e\n  // \u0438\u043b\u0438 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c URL \u0432 \u043e\u043f\u0446\u0438\u044f\u0445\n  url: 'https://jsonplaceholder.typicode.com/posts',\n\n  // \u041e\u041f\u0426\u0418\u0418\n  method: 'POST', // GET, PUT, DELETE, PATCH, OPTIONS\n\n  // \u0422\u0415\u041b\u041e \u0417\u0410\u041f\u0420\u041e\u0421\u0410 - \u0432 fetch \u043d\u0443\u0436\u043d\u043e js-\u0444\u043e\u0440\u043c\u0430\u0442 \u043f\u0435\u0440\u0435\u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0442\u0440\u043e\u043a\u0443\n  body: JSON.stringify(newPost),\n\n  // \u0417\u0410\u0413\u041e\u041b\u041e\u0412\u041a\u0418\n  headers: {\n    'Content-type': 'application/json; charset=UTF-8',\n  },\n})\n  // \u041e\u0411\u0420\u0410\u0411\u041e\u0422\u041a\u0410 - \u0432 fetch \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0435\u043d\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043c\u0435\u0442\u043e\u0434\u043e\u043d json()\n  .then((response) => response.json())\n\n  // \u0434\u0430\u043b\u0435\u0435 \u0443\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u044b\u043c \u0434\u0430\u043d\u043d\u044b\u043c \u0438 \u0447\u0442\u043e-\u043d\u0438\u0431 \u0441 \u043d\u0438\u043c\u0438 \u0434\u0435\u043b\u0430\u0442\u044c\n  .then((data) => {\n    console.log(data);\n\n    // \u043a \u043f\u0440\u0438\u043c\u0435\u0440\u0443 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0438\u0445 \u0432 \u0441\u0442\u0435\u0439\u0442\n    setState({ item: data });\n  })\n\n  // \u041e\u0411\u0420\u0410\u0411\u041e\u0422\u0427\u0418\u041a \u041e\u0428\u0418\u0411\u041e\u041a\n  .catch((err) => {\n    console.log(err);\n  })\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"fetch-\u043f\u0440\u0438\u043c\u0435\u0440-\u0441-async-await-\u0438-try-catch-finally"},"Fetch \u043f\u0440\u0438\u043c\u0435\u0440 \u0441 async-await \u0438 try-catch-finally"),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 fetch c then() \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c \u0441\u0440\u0430\u0437\u0443, \u0442\u043e \u0434\u043b\u044f async-await \u043d\u0443\u0436\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f. \u042d\u0442\u043e \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0441\u0430\u0445\u0430\u0440, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0443\u043f\u0440\u043e\u0449\u0430\u0435\u0442 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u0438\u0437\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u043e\u0442 \u0434\u043b\u0438\u043d\u043d\u044b\u0445 \u0446\u0435\u043f\u043e\u0447\u0435\u043a \u043a\u043e\u043b\u0431\u044d\u043a\u043e\u0432 then-catch. ",(0,a.kt)("inlineCode",{parentName:"p"},"async")," \u0441\u0442\u0430\u0432\u0438\u0442\u044c\u0441\u044f \u043f\u0435\u0440\u0435\u0434 \u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439 \u0438 \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u043e\u043d\u0430 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u0430\u044f, \u0432\u043d\u0443\u0442\u0440\u0438 \u043d\u0435\u0435 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0441\u043b\u043e\u0432\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"await"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"try-catch"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'async function loadPosts() {\n  // \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f response \u0431\u0443\u0434\u0435\u0442 \u0436\u0434\u0430\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 fetch\n  const response = await fetch("https://jsonplaceholder.typicode.com/posts");\n  const movies = await response.json();\n  console.log(movies);\n}\n\nloadPosts(); // --\x3e return movies in console\n')),(0,a.kt)("p",null,"\u041c\u043e\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c try-catch \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043e\u0448\u0438\u0431\u043e\u043a."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// GET-\u0437\u0430\u043f\u0440\u043e\u0441\nasync function loadPosts() {\n  // \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\n  try {\n    const response = await fetch("https://jsonplaceholder.typicode.com/posts");\n    const movies = await response.json();\n\n    console.log(\'movies\', movies);\n\n    return movies;\n\n    // \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u043e\u0448\u0438\u0431\u043e\u043a\n  } catch(e) {\n    console.error("Error:", error);\n\n    // \u0438\u043b\u0438 \n    throw new Error("Network response was not OK");\n\n    // \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u0435: \u0441\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0432 \u043b\u044e\u0431\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 (\u0438 \u043f\u0440\u0438 try, \u0438 \u043f\u0440\u0438 catch)\n  } finally {\n    alert(\'Do smth\');\n  }\n}\n\n// POST-\u0437\u0430\u043f\u0440\u043e\u0441\nasync function postData(url = "", data = {}) {\n  // Default options are marked with *\n  const response = await fetch(url, {\n    method: "POST",\n    headers: {\n      "Content-Type": "application/json",\n    },\n    body: JSON.stringify(data),\n  });\n\n  return response.json();\n}\n\npostData("https://example.com/answer", { answer: 42 }).then((data) => {\n  console.log(data);\n});\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u043c\u0435\u0442\u043e\u0434\u044b-\u043e\u0431\u0440\u0430\u0431\u043e\u043a\u0442\u043a\u0438-response-\u043f\u043e\u0441\u043b\u0435-fetch"},"\u041c\u0435\u0442\u043e\u0434\u044b \u043e\u0431\u0440\u0430\u0431\u043e\u043a\u0442\u043a\u0438 response \u043f\u043e\u0441\u043b\u0435 fetch"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"res.json()")," \u2013 \u0434\u0435\u043a\u043e\u0434\u0438\u0440\u0443\u0435\u0442 \u043e\u0442\u0432\u0435\u0442 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 JSON"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"res.blob()")," \u2013 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043e\u0431\u044a\u0435\u043a\u0442 \u043a\u0430\u043a Blob (\u0434\u043b\u044f \u0444\u0430\u0439\u043b\u043e\u0432)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"res.text()")," \u2013 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043e\u0442\u0432\u0435\u0442 \u043a\u0430\u043a \u043e\u0431\u044b\u0447\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"res.formData()")," \u2013 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043e\u0442\u0432\u0435\u0442 \u043a\u0430\u043a \u043e\u0431\u044a\u0435\u043a\u0442 FormData")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b-response-\u043f\u043e\u0441\u043b\u0435-fetch"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b response \u043f\u043e\u0441\u043b\u0435 fetch"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"res.status")," \u2013 HTTP-\u043a\u043e\u0434 \u043e\u0442\u0432\u0435\u0442\u0430"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"res.ok")," \u2013 \u0435\u0441\u043b\u0438 \u0441\u0442\u0430\u0442\u0443\u0441 \u043e\u0442\u0432\u0435\u0442\u0430 \u0432 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0435 200-299"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"res.headers")," \u2013 \u043e\u0431\u044a\u0435\u043a\u0442 \u0441 HTTP-\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430\u043c")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"typescript"},"TypeScript"),(0,a.kt)("p",null,"\u041e\u0431\u044b\u0447\u043d\u043e fetch \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432\u043d\u0443\u0442\u0440\u0438 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0442\u0438\u043f\u0438\u0437\u043e\u0432\u0430\u0442\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},"response")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"error"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u0438\u044f \u043f\u0440\u0438\u0448\u0435\u0434\u0448\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445\ntype TPokemonData = {\n  id: string\n  number: string\n  name: string\n  image: string\n  fetchedAt: string\n  attacks: {\n    special: Array<{\n      name: string\n      type: string\n      damage: number\n    }>\n  }\n}\n\n// \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f \u043e\u0448\u0438\u0431\u043a\u0438\ntype TError = Array<{message: string}>\n\n// \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f \u043e\u0442\u0432\u0435\u0442\u0430\ntype JSONResponse = {\n  data?: {\n    pokemon: Omit<PokemonData, 'fetchedAt'>\n  }\n  errors?: Array<{message: string}>\n}\n\nasync function fetchPokemon(name: string): Promise<TPokemonData, TError> {\n  const response = await fetch(url, { options });\n\n  // \u0442\u0438\u043f\u0438\u0437\u0438\u0440\u0443\u0435\u043c \u043e\u0442\u0432\u0435\u0442\n  const { data, errors }: JSONResponse = await response.json();\n\n  // \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0435\n  return { data, errors };\n}\n")))}d.isMDXComponent=!0}}]);