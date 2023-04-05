"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[5323],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,h=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={title:"API \u0438 \u0411\u0414",sidebar_position:8},i=void 0,l={unversionedId:"qa/api",id:"qa/api",title:"API \u0438 \u0411\u0414",description:"- \u041f\u0440\u0438 \u0432\u043e\u0437\u043d\u0438\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u0438 \u043d\u0435\u0438\u0441\u043f\u0440\u0430\u0432\u043d\u043e\u0441\u0442\u0435\u0439 \u0432 \u043f\u0435\u0440\u0432\u0443\u044e \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442\u0441\u044f \u041a\u041b\u0418\u0415\u041d\u0422, \u0434\u0430\u043b\u0435\u0435 \u0421\u0415\u0420\u0412\u0415\u0420, \u0434\u0430\u043b\u0435\u0435 \u0411\u0414.",source:"@site/docs/qa/api.md",sourceDirName:"qa",slug:"/qa/api",permalink:"/knowledge-bank/docs/qa/api",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/qa/api.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"API \u0438 \u0411\u0414",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"iOS",permalink:"/knowledge-bank/docs/qa/ios"},next:{title:"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f",permalink:"/knowledge-bank/docs/qa/automatization"}},p={},s=[{value:"\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 API",id:"\u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b-\u0434\u043b\u044f-\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-api",level:2},{value:"Postman",id:"postman",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 HTTP Client",id:"\u043f\u0440\u0438\u043c\u0435\u0440-http-client",level:2},{value:"\u0421\u0447\u0435\u0442\u0447\u0438\u043a \u043f\u043e\u043f\u044b\u0442\u043e\u043a HTTP \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432",id:"\u0441\u0447\u0435\u0442\u0447\u0438\u043a-\u043f\u043e\u043f\u044b\u0442\u043e\u043a-http-\u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u041f\u0440\u0438 \u0432\u043e\u0437\u043d\u0438\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u0438 \u043d\u0435\u0438\u0441\u043f\u0440\u0430\u0432\u043d\u043e\u0441\u0442\u0435\u0439 \u0432 \u043f\u0435\u0440\u0432\u0443\u044e \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442\u0441\u044f \u041a\u041b\u0418\u0415\u041d\u0422, \u0434\u0430\u043b\u0435\u0435 \u0421\u0415\u0420\u0412\u0415\u0420, \u0434\u0430\u043b\u0435\u0435 \u0411\u0414."),(0,o.kt)("li",{parentName:"ul"},"\u041d\u0443\u0436\u043d\u043e \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c \u043f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0443\u044f\u0437\u0432\u0438\u043c\u043e\u0441\u0442\u0438 \u0432 \u043a\u043b\u0438\u0435\u043d\u0442-\u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0439 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0435, \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0430 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0434\u0430\u043d\u043d\u044b\u043c \u0438\u043b\u0438 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u043f\u0435\u0440\u0435\u0445\u0432\u0430\u0442\u0430.")),(0,o.kt)("h2",{id:"\u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b-\u0434\u043b\u044f-\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-api"},"\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 API"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.postman.com/"},"Postman")," with ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/newman"},"newman")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.thunderclient.com/"},"Thunder Client for VS Code")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://swagger.io/"},"Swagger")," - \u0418\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u043e\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435/\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 API \u043a\u0430\u043a \u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0441 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u043c \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u043c \u043a\u043e\u0434\u043e\u0432. \u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f API. Swagger UI."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://insomnia.rest/download"},"Insomnia")," - Desktop-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f API"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.charlesproxy.com/latest-release/download.do"},"Charles")," - Proxy-server - \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432. \u0421\u043d\u0438\u0444\u0444\u0435\u0440 - \u0430\u043d\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440 \u0442\u0440\u0430\u0444\u0438\u043a\u0430."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://authenticationtest.com/simpleFormAuth/"},"authenticationtest.com")," - \u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://users.bugred.ru/"},"users.bugred")," - \u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 2")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"postman"},"Postman"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"brew install --cask postman")," - Install Postman CLI"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"postman login --with-api-key API_KEY")," - \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043f\u043e CLI"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"postman collection run 4238395-f9da3763-3190-47d9-b3ee-e1529653fa88")," - \u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npm install -g newman ")," - Install Newman (\u0423\u0436\u0435 \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0430\u044f \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f)"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-http-client"},"\u041f\u0440\u0438\u043c\u0435\u0440 HTTP Client"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const METHODS = {\n        GET: 'GET',\n        POST: 'POST',\n        PUT: 'PUT',\n        DELETE: 'DELETE',\n};\n\n// \u0421\u0430\u043c\u0430\u044f \u043f\u0440\u043e\u0441\u0442\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f. \u0420\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0448\u0442\u0443\u0447\u043a\u0443 \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430\u043c\u0438 \u0438\u043c \u043f\u0440\u0435\u0434\u0441\u0442\u043e\u0438\u0442 \u0432 \u043a\u043e\u043d\u0446\u0435 \u0441\u043f\u0440\u0438\u043d\u0442\u0430\n// \u041d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043c\u0435\u0442\u043e\u0434\nfunction queryStringify(data) {\n  if (typeof data !== 'object') {\n            throw new Error('Data must be object');\n    }\n  \n    // \u0417\u0434\u0435\u0441\u044c \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0438 [object Object] \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430\n  const keys = Object.keys(data);\n  return keys.reduce((result, key, index) => {\n    return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;\n  }, '?');\n}\n\nclass HTTPTransport {\n        get = (url, options = {}) => {\n                 \n                return this.request(url, {...options, method: METHODS.GET}, options.timeout);\n        };\n\n        post = (url, options = {}) => {\n                return this.request(url, {...options, method: METHODS.POST}, options.timeout);\n        };\n\n        put = (url, options = {}) => {\n                return this.request(url, {...options, method: METHODS.PUT}, options.timeout);\n        };\n\n        delete = (url, options = {}) => { \n                return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);\n        };\n\n        request = (url, options = {}, timeout = 5000) => {\n                const {headers = {}, method, data} = options;\n\n                return new Promise(function(resolve, reject) {\n                        if (!method) {\n                                reject('No method');\n                                return;\n                        }\n\n                    const xhr = new XMLHttpRequest();\n                        const isGet = method === METHODS.GET;\n\n                    xhr.open(\n                                method, \n                                isGet && !!data\n                                        ? `${url}${queryStringify(data)}`\n                                        : url,\n                        );\n\n                        Object.keys(headers).forEach(key => {\n                                xhr.setRequestHeader(key, headers[key]);\n                        });\n                \n                    xhr.onload = function() {\n                          resolve(xhr);\n                    };\n                \n                    xhr.onabort = reject;\n                    xhr.onerror = reject;\n                \n                    xhr.timeout = timeout;\n                    xhr.ontimeout = reject;\n                        \n                      if (isGet || !data) {\n                            xhr.send();\n                        } else {\n                                xhr.send(data);\n                        }\n              });\n        };\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u0441\u0447\u0435\u0442\u0447\u0438\u043a-\u043f\u043e\u043f\u044b\u0442\u043e\u043a-http-\u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432"},"\u0421\u0447\u0435\u0442\u0447\u0438\u043a \u043f\u043e\u043f\u044b\u0442\u043e\u043a HTTP \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function fetchWithRetry(url, options = {}) {\n  const {tries = 1} = options;\n \n    function onError(err){\n        const triesLeft = tries - 1;\n        if (!triesLeft){\n            throw err;\n        }\n \n        return fetchWithRetry(url, {...options, tries: triesLeft});\n    }\n \n    return fetch(url, options).catch(onError);\n}\n")),(0,o.kt)("p",null,"\u041a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0439 ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch")," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0434\u0435\u043b\u0430\u0442\u044c HTTP-\u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443. \u041e\u0434\u043d\u0430\u043a\u043e \u0447\u0430\u0441\u0442\u043e \u0431\u044b\u0432\u0430\u0435\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u044b\u0439 \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438, \u0435\u0441\u043b\u0438 \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442 \xab\u0442\u0443\u043f\u0438\u0442\xbb \u0438\u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u0441\u043c\u043e\u0433 \u0441 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0440\u0430\u0437\u0430 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"fetch \u0441 \xab\u0440\u0435\u0442\u0440\u0430\u044f\u043c\u0438")," \xbb \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043c\u0435\u0442\u043e\u0434 ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch"),". \u0415\u0433\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0431\u044b\u043b\u0430 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430 \u0432 \u043e\u0434\u043d\u043e\u043c \u0438\u0437 \u0443\u0440\u043e\u043a\u043e\u0432 \u0440\u0430\u043d\u0435\u0435, \u0437\u0434\u0435\u0441\u044c \u0436\u0435 \u0440\u0430\u0441\u0441\u043a\u0430\u0436\u0435\u043c \u043f\u0440\u043e \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \xab\u043f\u043e\u0432\u0442\u043e\u0440\u043d\u044b\u0445 \u043f\u043e\u043f\u044b\u0442\u043e\u043a\xbb. "),(0,o.kt)("p",null,"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u043c\u0438 \u0442\u043e\u043d\u043a\u043e\u0441\u0442\u044f\u043c\u0438 \u0437\u0434\u0435\u0441\u044c \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0440\u0435\u043a\u0443\u0440\u0441\u0438\u044f \u0438 \u0441\u0438\u0433\u043d\u0430\u0442\u0443\u0440\u0430 \u043f\u0440\u043e\u043c\u0438\u0441\u043e\u0432. "),(0,o.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"url")," \u2014 \u043a\u043e\u043d\u0435\u0447\u043d\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," \u2014 \u043e\u0431\u044a\u0435\u043a\u0442 \u0441 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 (\u043c\u0435\u0442\u043e\u0434 \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043d\u0443\u0436\u043d\u044b\u0435 \u0432\u0430\u043c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b). \u041a\u0440\u043e\u043c\u0435 \u043d\u0438\u0445, \u0431\u0443\u0434\u0435\u043c \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u2014 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0441\u0442\u0430\u0432\u0448\u0438\u0445\u0441\u044f \u043f\u043e\u043f\u044b\u0442\u043e\u043a \u043d\u0430 \u0437\u0430\u043f\u0440\u043e\u0441.")),(0,o.kt)("p",null,"\u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u0441 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043c\u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c. \u041d\u0443\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 ",(0,o.kt)("inlineCode",{parentName:"p"},"https://api.com/user"),". \u0421\u0434\u0435\u043b\u0430\u0435\u043c \u0435\u0433\u043e \u0447\u0435\u0440\u0435\u0437 ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function fetchWithRetry(url, options = {}) {\n    return fetch(url, options);\n}\n\nfetchWithRetry('https://api.com/user', {method: 'GET'});\n")),(0,o.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u043b\u0441\u044f \u043d\u0435\u0443\u0441\u043f\u0435\u0448\u043d\u043e. \u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \xab\u043d\u0435 \u0443\u0441\u043f\u0435\u0445\u043e\u043c\xbb \u0431\u0443\u0434\u0435\u043c \u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438. \u0422\u043e \u0435\u0441\u0442\u044c 400-\u0439 \u0438\u043b\u0438 500-\u0439 HTTP-\u0437\u0430\u043f\u0440\u043e\u0441 \xab\u043d\u0435 \u0443\u0441\u043f\u0435\u0445\u043e\u043c\xbb \u043d\u0435 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044f, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043b\u044e\u0431\u043e\u0439 \u043e\u0442\u0432\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u2014 \u044d\u0442\u043e \u0443\u0436\u0435 \u0443\u0441\u043f\u0435\u0445 \u0441 \u0442\u043e\u0447\u043a\u0438 \u0437\u0440\u0435\u043d\u0438\u044f \u043a\u043b\u0438\u0435\u043d\u0442-\u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0433\u043e \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f. \u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c, \u0437\u0430\u0434\u0430\u043b\u0438 \u0432\u0441\u0435\u0433\u043e \u0442\u0440\u0438 \u043f\u043e\u043f\u044b\u0442\u043a\u0438 \u043d\u0430 \u0437\u0430\u043f\u0440\u043e\u0441. \u0412 \u0442\u0430\u043a\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0435\u0449\u0451 \u0434\u0432\u0430 \u0440\u0430\u0437\u0430 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u043e\u0442\u0432\u0435\u0442."),(0,o.kt)("p",null,"\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u043c \u0442\u0430\u043a\u043e\u0435 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043d\u0443\u0436\u043d\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u043d\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"catch"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442 \u044d\u0442\u043e\u0442 \u0436\u0435 \u0437\u0430\u043f\u0440\u043e\u0441, \u043d\u043e \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u0443\u043c\u0435\u043d\u044c\u0448\u0438\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0441\u0442\u0430\u0432\u0448\u0438\u0445\u0441\u044f \u043f\u043e\u043f\u044b\u0442\u043e\u043a:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function onError(err){\n    // \u0412\u043e\u0437\u044c\u043c\u0451\u043c \u0438\u0437 \u0437\u0430\u043c\u044b\u043a\u0430\u043d\u0438\u044f\n    const triesLeft = tries - 1;\n\n    if (!triesLeft){\n        throw err;\n    }\n\n    return fetchWithRetry(url, {...options, tries: triesLeft});\n}\n")),(0,o.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f ",(0,o.kt)("inlineCode",{parentName:"p"},"onError")," \u0443\u043c\u0435\u043d\u044c\u0448\u0430\u0435\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0441\u0442\u0430\u0432\u0448\u0438\u0445\u0441\u044f \u043f\u043e\u043f\u044b\u0442\u043e\u043a \u0438 \u0434\u0435\u043b\u0430\u0435\u0442 \u0437\u0430\u043d\u043e\u0432\u043e \u0442\u043e\u0447\u043d\u043e \u0442\u0430\u043a\u043e\u0439 \u0436\u0435 HTTP-\u0437\u0430\u043f\u0440\u043e\u0441:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function fetchWithRetry(url, options = {}) {\n  const {tries = 1} = options;\n\n    function onError(err){\n        const triesLeft = tries - 1;\n        if (!triesLeft){\n            throw err;\n        }\n\n        return fetchWithRetry(url, {...options, tries: triesLeft});\n    }\n\n    return fetch(url, options).catch(onError);\n} \n")),(0,o.kt)("p",null,"\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u044e\u0449\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043f\u0430\u0437\u043b\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b. \u0412\u043e-\u043f\u0435\u0440\u0432\u044b\u0445, \u0432 \u0437\u0430\u043c\u044b\u043a\u0430\u043d\u0438\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"onError")," \u0431\u044b\u043b\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u043f\u044b\u0442\u043e\u043a, \u0442\u043e \u0435\u0441\u0442\u044c ",(0,o.kt)("inlineCode",{parentName:"p"},"tries"),". \u0412\u043e-\u0432\u0442\u043e\u0440\u044b\u0445, \u0442\u0435\u043f\u0435\u0440\u044c \u043d\u0430 \u0443\u043f\u0430\u0432\u0448\u0438\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0437\u0432\u0430\u043d \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u043e\u0448\u0438\u0431\u043a\u0438. "),(0,o.kt)("p",null,"\u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0434\u0435\u043b\u0430\u0435\u0442 HTTP-\u0437\u0430\u043f\u0440\u043e\u0441\u044b. \u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u0443\u0441\u043f\u0435\u0445\u0430 (\u0442\u043e \u0435\u0441\u0442\u044c \u0432\u0435\u0440\u043d\u0443\u043b\u0441\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442 \u043e\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0432 \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u043f\u044b\u0442\u043e\u043a), \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u0440\u043e\u0432\u043d\u043e \u0442\u043e\u0442 \u0436\u0435 \u043e\u0442\u0432\u0435\u0442, \u0447\u0442\u043e \u0438 \u0443 \u043e\u0431\u044b\u0447\u043d\u043e\u0433\u043e ",(0,o.kt)("inlineCode",{parentName:"p"},"fet\u0441h"),". \u0415\u0441\u043b\u0438 \u0436\u0435  \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 (\u043a\u0430\u043a \u0443\u0436\u0435 \u0440\u0430\u043d\u0435\u0435 \u0432\u044b\u044f\u0441\u043d\u0438\u043b\u0438, \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f) \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u0447\u043d\u043e \u0442\u0430\u043a\u0436\u0435 \u043e\u0442\u0432\u0435\u0442, \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442\u0443 ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch"),". "),(0,o.kt)("p",null,"\u0422\u043e \u0435\u0441\u0442\u044c \u043c\u044b \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043b\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044e, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0438\u043c\u0435\u0435\u0442 \u0441\u0438\u0433\u043d\u0430\u0442\u0443\u0440\u0443 ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch"),", \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u043e\u0433\u043e \u0432 \u043e\u0434\u043d\u043e\u043c \u0438\u0437 \u0443\u0440\u043e\u043a\u043e\u0432, \u0438 \u043e\u0431\u043b\u0430\u0434\u0430\u0435\u0442 \u0442\u043e\u0447\u043d\u043e \u0442\u0430\u043a\u0438\u043c \u0436\u0435 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435\u043c \u0441 \u043e\u0434\u043d\u0438\u043c \u041d\u041e: \u043c\u043e\u0436\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u043f\u044b\u0442\u043e\u043a. \u041f\u0440\u0438 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u043e\u043f\u044b\u0442\u043e\u043a \u0440\u0430\u0432\u043d\u043e\u043c\u0443 \u0435\u0434\u0438\u043d\u0438\u0446\u0435, \u0434\u0430\u043d\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0431\u0443\u0434\u0435\u0442 \u0432\u0435\u0441\u0442\u0438 \u0441\u0435\u0431\u044f \u0442\u043e\u0447\u043d\u043e \u0442\u0430\u043a \u0436\u0435, \u043a\u0430\u043a \u0438 \u043e\u0431\u044b\u0447\u043d\u044b\u0439 ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch"),"."))}c.isMDXComponent=!0}}]);