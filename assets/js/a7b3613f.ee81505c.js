"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4959],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,f=p["".concat(i,".").concat(m)]||p[m]||u[m]||a;return t?r.createElement(f,s(s({ref:n},d),{},{components:t})):r.createElement(f,s({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=p;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9890:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={title:"\u0410\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0441\u0442\u044c +--",sidebar_position:15},s="\u0410\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0441\u0442\u044c",c={unversionedId:"frontend/js-extended/async",id:"frontend/js-extended/async",title:"\u0410\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0441\u0442\u044c +--",description:"\u0428\u0430\u0431\u043b\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 \u043f\u043e\u0438\u0441\u043a\u0430, \u043d\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0444\u043e\u0440\u043c\u044b",source:"@site/docs/frontend/js-extended/async.md",sourceDirName:"frontend/js-extended",slug:"/frontend/js-extended/async",permalink:"/knowledge-bank/docs/frontend/js-extended/async",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/js-extended/async.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"\u0410\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0441\u0442\u044c +--",sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"\u041a\u043b\u0430\u0441\u0441\u044b ---",permalink:"/knowledge-bank/docs/frontend/js-extended/class"},next:{title:"TypeScript +--",permalink:"/knowledge-bank/docs/frontend/js-extended/typescript"}},i={},l=[{value:"\u0428\u0430\u0431\u043b\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 \u043f\u043e\u0438\u0441\u043a\u0430, \u043d\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0444\u043e\u0440\u043c\u044b",id:"\u0448\u0430\u0431\u043b\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044f-\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432-\u043f\u043e\u0438\u0441\u043a\u0430-\u043d\u0430\u0442\u0438\u0432\u043d\u0430\u044f-\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430-\u0444\u043e\u0440\u043c\u044b",level:3}],d={toc:l};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0441\u0442\u044c"},"\u0410\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0441\u0442\u044c"),(0,o.kt)("h3",{id:"\u0448\u0430\u0431\u043b\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044f-\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432-\u043f\u043e\u0438\u0441\u043a\u0430-\u043d\u0430\u0442\u0438\u0432\u043d\u0430\u044f-\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430-\u0444\u043e\u0440\u043c\u044b"},"\u0428\u0430\u0431\u043b\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 \u043f\u043e\u0438\u0441\u043a\u0430, \u043d\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0444\u043e\u0440\u043c\u044b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<section class="search">\n  <form class="search__form">\n    <input type="text" name="title" class="search__textfield" placeholder="\u0418\u0441\u043a\u0430\u0442\u044c \u0432 GitHub" id="search" />\n    <button type="submit" class="search__button">\n      \u041d\u0430\u0439\u0442\u0438\n    </button>\n  </form>\n  <div class="search__result">\n    <h2 class="search__findings">\n    </h2>\n    <ul class="search__findings-list">\n    </ul>\n  </div>\n  <div class="search__error">\n  </div>\n</section>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const form = document.querySelector('.search__form');\nconst resultsContainer = document.querySelector('.search__findings-list');\nconst countContainer = document.querySelector('.search__findings');\nconst errorContainer = document.querySelector('.search__error');\nconst input = document.getElementById('search');\n\n// \u0412\u0441\u0442\u0430\u0432\u043a\u0430 \u043e\u0448\u0438\u0431\u043a\u0438\nconst renderError = () => {\n  errorContainer.innerHTML = `\n        <img src=\"https://code.s3.yandex.net/web-code/entrance-test/search.svg\" alt=\"\" class=\"search__error-icon\" />\n        <p class=\"search__error-message\">\n            \u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430...\n        </p>\n  `;\n  countContainer.innerHTML = '';\n};\n\n// \u041d\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432\nconst renderEmptyResults = () => {\n  errorContainer.innerHTML = `\n        <img src=\"https://code.s3.yandex.net/web-code/entrance-test/search.svg\" alt=\"\" class=\"search__error-icon\" />\n        <p class=\"search__error-message\">\n            \u041f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0443\u0442\u043e\u0447\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\n        </p>\n  `;\n  countContainer.innerHTML = '';\n};\n\n// \u0412\u0441\u0442\u0430\u0432\u043a\u0430 \u043a\u043e\u043b-\u0432\u0430\nconst renderCount = count => {\n  countContainer.innerHTML = `\n      \u041d\u0430\u0439\u0434\u0435\u043d\u043e <span class=\"search__findings-amount\">${count.toLocaleString(\n        'ru-RU'\n      )}</span> \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432\n  `;\n};\n\n// \u041e\u0447\u0438\u0441\u0442\u043a\u0430\nconst onSubmitStart = () => {\n  countContainer.innerHTML = `\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...`;\n  resultsContainer.innerHTML = '';\n  errorContainer.innerHTML = '';\n};\n\n\n// \u041d\u0430\u0439\u0434\u0435\u043d\u043d\u044b\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b\nfunction template(item) {\n  const newElement = document.createElement('li');\n  newElement.classList.add('search__finding-item');\n  newElement.innerHTML = `\n    <p class=\"search__finding-name\">\n      ${item.full_name}\n    </p>\n    `;\n  return newElement;\n}\n\nform.addEventListener('submit', function(event) {\n  event.preventDefault();\n  onSubmit(event)\n})\n\nasync function onSubmit(event) {\n  // \u0432\u0430\u0448 \u043a\u043e\u0434\n  event.preventDefault();\n  onSubmitStart()\n\n  await fetch(`https://api.nomoreparties.co/github-search?q=${input.value}`)\n    .then(res => res.json())\n    .then(data => {\n      console.log('data: ', data);\n\n      if (data.items.length) {\n        // \u0432\u0441\u0442\u0430\u0432\u043a\u0430 count\n        renderCount(data.total_count);\n\n        // \u0432\u0441\u0442\u0430\u0432\u043a\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432\n        data.items.forEach(el => {\n          resultsContainer.appendChild(template(el));\n        });\n      } else {\n        renderEmptyResults();\n      }\n    })\n\n    // error\n    .catch(error => {\n      console.log('error: ', error);\n      renderError();\n    })\n}```\n")))}u.isMDXComponent=!0}}]);