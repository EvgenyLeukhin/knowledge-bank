"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[1182],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>g});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var i=r.createContext({}),o=function(n){var e=r.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},c=function(n){var e=o(n.components);return r.createElement(i.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,l=n.originalType,i=n.parentName,c=u(n,["components","mdxType","originalType","parentName"]),d=o(t),g=a,f=d["".concat(i,".").concat(g)]||d[g]||p[g]||l;return t?r.createElement(f,s(s({ref:e},c),{},{components:t})):r.createElement(f,s({ref:e},c))}));function g(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var l=t.length,s=new Array(l);s[0]=d;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=n,u.mdxType="string"==typeof n?n:a,s[1]=u;for(var o=2;o<l;o++)s[o]=t[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8847:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>o});var r=t(7462),a=(t(7294),t(3905));const l={title:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b",sidebar_position:7},s=void 0,u={unversionedId:"frontend/js-extended/utils",id:"frontend/js-extended/utils",title:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b",description:"- youmightnotneed.com/lodash",source:"@site/docs/frontend/js-extended/utils.md",sourceDirName:"frontend/js-extended",slug:"/frontend/js-extended/utils",permalink:"/knowledge-bank/docs/frontend/js-extended/utils",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/js-extended/utils.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"TypeScript \u043e\u0442 \u042f",permalink:"/knowledge-bank/docs/frontend/js-extended/typescript"},next:{title:"XMLHttpReqest \u0438 fetch \u043e\u0442 \u042f",permalink:"/knowledge-bank/docs/frontend/js-extended/requests"}},i={},o=[{value:"isEmpty",id:"isempty",level:2},{value:"first(), last()",id:"first-last",level:2},{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043c\u0430\u0441\u0441\u0438\u0432\u0430",id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u043c\u0430\u0441\u0441\u0438\u0432\u0430",level:2},{value:"range",id:"range",level:3},{value:"rangeRight",id:"rangeright",level:3},{value:"\u0427\u0435\u0442\u043d\u044b\u0435 \u0438 \u043d\u0435\u0447\u0435\u0442\u043d\u044b\u0435",id:"\u0447\u0435\u0442\u043d\u044b\u0435-\u0438-\u043d\u0435\u0447\u0435\u0442\u043d\u044b\u0435",level:2},{value:"\u0421\u0440\u0435\u0434\u043d\u0435\u0435 \u0430\u0440\u0438\u0444\u043c\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435",id:"\u0441\u0440\u0435\u0434\u043d\u0435\u0435-\u0430\u0440\u0438\u0444\u043c\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435",level:2},{value:"Lodash",id:"lodash",level:2},{value:"Date-fns",id:"date-fns",level:2}],c={toc:o};function p(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://youmightnotneed.com/lodash"},"youmightnotneed.com/lodash"))),(0,a.kt)("p",null,"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u043e\u0431\u044b\u0447\u043d\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u044e\u0442 \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043a\u0430\u043a\u0438\u0445-\u043b\u0438\u0431\u043e \u0434\u0430\u043d\u043d\u044b\u0445, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"data => newData\n")),(0,a.kt)("h2",{id:"isempty"},"isEmpty"),(0,a.kt)("p",null,"\u0417\u0430\u0434\u0430\u0447\u0430 - \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0443\u0441\u0442\u043e\u0439 \u043c\u0430\u0441\u0441\u0438\u0432 \u0438\u043b\u0438 \u043e\u0431\u044a\u0435\u043a\u0442, \u043a\u043e\u0433\u0434\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u043d\u0435\u043c \u043d\u0435\u0442."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/*\nisEmpty(null); //\xa0=>\xa0true\nisEmpty(true); //\xa0=>\xa0true\nisEmpty(1); //\xa0=>\xa0true\nisEmpty([1,\xa02,\xa03]); //\xa0=>\xa0false\nisEmpty({\xa0'a':\xa01\xa0}); //\xa0=>\xa0false\nisEmpty('123'); // => false\nisEmpty(123); // => true\nisEmpty(''); // => true\nisEmpty(0); // => true\nisEmpty(undefined) // => true\nisEmpty(new Map([['1', 'str1'], [1, 'num1'], [true, 'bool1']])) // => false\nisEmpty(new Set(['value1', 'value2', 'value3'])) // => false\n*/\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u0427\u0430\u0441\u0442\u0438\u0447\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0438\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 (\u043c\u043e\u044f \u043f\u043e\u043d\u044f\u0442\u043d\u0430\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f)\nfunction checkForObject(value) {\n  // check for null\n  if (value === null) return true;\n\n  // check for array and object\n  if (value.length || Object.keys(value).length) {\n    return false\n  } else return true;\n}\n\nfunction isEmpty(value) {\n  switch (typeof value) {\n    case 'boolean': return true; break;\n    case 'number': return true; break;\n    case 'undefined': return true; break;\n    case 'string': return !Boolean(value); break;\n    case 'object': return checkForObject(value); break;\n    default: return false;\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// \u0420\u0435\u0448\u0435\u043d\u0438\u0435 2\nfunction isLength(value) {\n  return (\n    typeof value === "number" &&\n    value > -1 &&\n    value % 1 === 0 &&\n    value <= Number.MAX_SAFE_INTEGER\n  );\n}\n\nfunction isNil(value) {\n  return value === null || value === undefined;\n}\n\nfunction isArrayLike(value) {\n  return !isNil(value) && typeof value !== "function" && isLength(value.length);\n}\n\nfunction isObjectLike(value) {\n  return typeof value === "object" && value !== null;\n}\n\nfunction getTag(value) {\n  if (value === null) {\n    return value === undefined ? "[object Undefined]" : "[object Null]";\n  }\n  return toString.call(value);\n}\n\nconst objectProto = Object.prototype;\n\nfunction isPrototype(value) {\n  const ctor = value && value.constructor;\n  const proto = (typeof ctor === "function" && ctor.prototype) || objectProto;\n\n  return value === proto;\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// \u0420\u0435\u0448\u0435\u043d\u0438\u0435 3\nfunction isArguments(value) {\n  return isObjectLike(value) && getTag(value) === "[object Arguments]";\n}\n\nfunction isLength(value) {\n  return (\n    typeof value === "number" &&\n    value > -1 &&\n    value % 1 === 0 &&\n    value <= Number.MAX_SAFE_INTEGER\n  );\n}\n\nfunction isNil(value) {\n  return value === null || value === undefined;\n}\n\nfunction isArrayLike(value) {\n  return !isNil(value) && typeof value !== "function" && isLength(value.length);\n}\n\nfunction isObjectLike(value) {\n  return typeof value === "object" && value !== null;\n}\n\nfunction getTag(value) {\n  if (value === null) {\n    return value === undefined ? "[object Undefined]" : "[object Null]";\n  }\n  return toString.call(value);\n}\n\nconst objectProto = Object.prototype;\nfunction isPrototype(value) {\n  const ctor = value && value.constructor;\n  const proto = (typeof ctor === "function" && ctor.prototype) || objectProto;\n\n  return value === proto;\n}\n\nfunction isArguments(value) {\n  return isObjectLike(value) && getTag(value) === "[object Arguments]";\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// \u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043b\u043e\u0434\u0430\u0448\u0430\nfunction isEmpty(value) {\n  if (value === null) {\n    return true;\n  }\n\n  if (\n    isArrayLike(value) &&\n    (Array.isArray(value) ||\n      typeof value === "string" ||\n      typeof value.splice === "function" ||\n      isBuffer(value) ||\n      isTypedArray(value) ||\n      isArguments(value))\n  ) {\n    return !value.length;\n  }\n\n  const tag = getTag(value);\n  if (tag === "[object Map]" || tag === "[object Set]") {\n    return !value.size;\n  }\n\n  if (isPrototype(value)) {\n    return !Object.keys(value).length;\n  }\n\n  for (const key in value) {\n    if (hasOwnProperty.call(value, key)) {\n      return false;\n    }\n  }\n\n  return true;\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"first-last"},"first(), last()"),(0,a.kt)("p",null,"\u0417\u0430\u0434\u0430\u0447\u0430 - \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u0432\u0430 \u043c\u0435\u0442\u043e\u0434\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u044f\u0442 \u043f\u0435\u0440\u0432\u044b\u0439 \u0438\u043b\u0438 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0432 \u043c\u0430\u0441\u0441\u0438\u0432\u0435. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const list = [1, 2, 3];\narr[list.length - 1]; // 3 \n\n// \u0443\u0442\u0438\u043b\u0438\u0442w\nfirst(arr); // 1\nlast(arr); // 3\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u041c\u043e\u0451 \u0440\u0435\u0448\u0435\u043d\u0438\u0435\nfunction first(list) {\n  if (list.length) {\n    return list[0];\n  } else return undefined;\n}\n\nfunction last(list) {\n  if (list.length) {\n    return list[list.length - 1];\n  } else return undefined;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u041c\u043e\u0451 \u0440\u0435\u0448\u0435\u043d\u0438\u0435 - \u043a\u043e\u0440\u043e\u0442\u043a\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c\nfunction first(list) {\n  return list.length ? list[0] : undefined;\n}\n\nfunction last(list) {\n  return list.length ? list[list.length - 1] : undefined;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u0440\u0435\u0448\u0435\u043d\u0438\u0435 2\nfunction first(list) {\n  if (!Array.isArray(list)) {\n    return undefined;\n  }\n        \n  return list.length ? list[0] : undefined;\n}\n\nfunction last(list) {\n  if (!Array.isArray(list)) {\n    return undefined;\n  }\n        \n  const length = list.length;\n  return length ? list[length - 1] : undefined;\n}\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u043c\u0430\u0441\u0441\u0438\u0432\u0430"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043c\u0430\u0441\u0441\u0438\u0432\u0430"),(0,a.kt)("p",null,"\u0417\u0430\u0434\u0430\u0447\u0430 - \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043c\u0435\u0442\u043e\u0434\u044b \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"[...new Array(3).keys()]; // [0, 1, 2] \n[...new Array(5).keys()]; // [0, 1, 2, 3, 4] \n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"range"},"range"),(0,a.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0451\u0442 \u043c\u0430\u0441\u0441\u0438\u0432 \u0447\u0438\u0441\u0435\u043b (\u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0438\u043b\u0438 \u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445), \u0440\u0430\u0441\u0442\u0443\u0449\u0438\u0445 \u043e\u0442 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0439 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 \u0433\u0440\u0430\u043d\u0438\u0446\u044b \u0434\u043e \u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0439, \u043d\u0435 \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u0435\u0451."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"range(4); // => [0, 1, 2, 3] \n\nrange(0, 20, 5); // => [0, 5, 10, 15]\n\n/*\n    * range(4); // => [0, 1, 2, 3] \n    * range(-4); // => [0, -1, -2, -3]\n    * range(1, 5); // => [1, 2, 3, 4]\n    * range(0, 20, 5); // => [0, 5, 10, 15]\n    * range(0, -4, -1); // => [0, -1, -2, -3]\n    * range(1, 4, 0); // => [1, 1, 1]\n    * range(0); // => []\n*/\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043c\u043e\u0451 (\u043d\u0435\u0441\u043e\u0432\u0441\u0435\u043c \u0442\u043e\u0447\u043d\u043e\u0435)\nfunction range(start = 0, end, step = 1) {\n  const array = [];\n  let STEP = Math.abs(step);\n\n  // only start\n  if (start > 0 && !end) {\n    for (i = 0; i < start; i+=STEP) array.push(i);\n  }\n\n  if (start < 0 && !end) {\n    for (i = 0; i > start; i-=STEP) array.push(i);\n  } \n\n  // start and end\n  if (start < end) {\n    for (i = start; i < end; i+=STEP) array.push(i);\n  }\n\n  if (start > end) {\n    for (i = start; i > end; i-=STEP) array.push(i);\n  }\n\n  return array;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u0440\u0435\u0448\u0435\u043d\u0438\u0435 2 (\u0430\u0432\u0442\u043e\u0440\u0441\u043a\u043e\u0435)\nconst baseRange = (start, end, step) => {\n  let index = -1;\n\n  // \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u043c \u0434\u043b\u0438\u043d\u0443 \u043c\u0430\u0441\u0441\u0438\u0432\u0430\n  let length = Math.max(Math.ceil((end - start) / (step || 1)), 0);\n  \n  // \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u0448\u0430\u0431\u043b\u043e\u043d \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u043d\u0443\u0436\u043d\u043e\u0439 \u0434\u043b\u0438\u043d\u043d\u044b\n  const result = new Array(length);\n  \n  // \u043f\u043e\u043a\u0430 \u0434\u043b\u0438\u043d\u0430 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u043d\u0435 \u0441\u0442\u0430\u043b\u0430 0 (\u043e\u0442\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0441\u0442\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u0438\u043d\u0430 \u043c\u0430\u0441\u0441\u0438\u0432\u0430)\n  while (length--) {\n    result[++index] = start; // \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0438\u043d\u0434\u0435\u043a\u0441\u044b \u0432 \u043c\u0430\u0441\u0441\u0438\u0432\n    start += step; // \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0448\u0430\u0433 \u043a \u0441\u0442\u0430\u0440\u0442\u0443\n  }\n\n  // \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432\n  return result;\n}\n\n// \u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043a\u0435\u0439\u0441\u043e\u0432 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432\n// \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u043d\u0430 \u0442\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u043b, \u043d\u043e \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u0443\u0434\u0443\u0442\nfunction range(start = 0, end, step) {\n  if (end === undefined) {\n    end = start;\n    start = 0;\n  }\n\n  step = step === undefined ? (start < end ? 1 : -1) : step;\n  return baseRange(start, end, step);\n}\n\n// \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430\nconst a = range(1, -40);\nconsole.log(a);\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"rangeright"},"rangeRight"),(0,a.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0451\u0442 \u043c\u0430\u0441\u0441\u0438\u0432 \u0447\u0438\u0441\u0435\u043b (\u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0438\u043b\u0438 \u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445), \u0440\u0430\u0441\u0442\u0443\u0449\u0438\u0445 \u043e\u0442 \u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0439 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 \u0433\u0440\u0430\u043d\u0438\u0446\u044b \u0434\u043e \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0439, \u043d\u0435 \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u043a\u043e\u043d\u0435\u0447\u043d\u0443\u044e."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/*\n  rangeRight(4); // => [3, 2, 1, 0]\n  rangeRight(-4); // => [-3, -2, -1, 0]\n  rangeRight(1, 5); // => [4, 3, 2, 1]\n  rangeRight(0, 20, 5); // => [15, 10, 5, 0]\n  rangeRight(0, -4, -1); // => [-3, -2, -1, 0]\n  rangeRight(1, 4, 0); // => [1, 1, 1]\n  rangeRight(0); // => []\n*/\n\n// \u0440\u0435\u0448\u0435\u043d\u0438\u0435 1\nfunction rangeRight(start, end, step) {\n    return range(start, end, step, true);\n}\n\nfunction baseRange(start, end, step, isRight) {\n  let index = -1;\n  let length = Math.max(Math.ceil((end - start) / (step || 1)), 0);\n  \n  const result = new Array(length);\n  \n  if (isRight) {\n    while (length--) {\n      index++;\n      result[(result.length - index) - 1] = start;\n      start += step;\n    }\n  } else {\n    while (length--) {\n      result[++index] = start;\n      start += step;\n    }\n  }\n  \n  return result;\n}\n\nfunction range(start = 0, end, step, isRight) {\n  if (end === undefined) {\n    end = start;\n    start = 0;\n  }\n\n  step = step === undefined ? (start < end ? 1 : -1) : step;\n\n  return baseRange(start, end, step, isRight);\n}\n\nrangeRight(0, 10, 1);\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u0440\u0435\u0448\u0435\u043d\u0438\u0435 2\nconst baseRange = (start, end, step, isRight) => {\n  let index = -1;\n  let length = Math.max(Math.ceil((end - start) / (step || 1)), 0);\n  const result = new Array(length);\n\n  while (length--) {\n    result[isRight ? length : ++index] = start;\n    start += step;\n  }\n\n  return result;\n}\n\n// \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u043d\u0430 \u0442\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u043b, \u043d\u043e \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u0443\u0434\u0443\u0442\nfunction range(start = 0, end, step, isRight = false) {\n        if (end === undefined) {\n      end = start;\n            start = 0;\n    }\n\n    step = step === undefined ? (start < end ? 1 : -1) : step;\n    return baseRange(start, end, step, isRight);\n}\n\nfunction rangeRight(start, end, step) {\n        return range(start, end, step, true);\n}\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u0447\u0435\u0442\u043d\u044b\u0435-\u0438-\u043d\u0435\u0447\u0435\u0442\u043d\u044b\u0435"},"\u0427\u0435\u0442\u043d\u044b\u0435 \u0438 \u043d\u0435\u0447\u0435\u0442\u043d\u044b\u0435"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const numbers = [1, 2, 3, 4, 5, 6];\n// \u0434\u043e\u043b\u0436\u0435\u043d \u0432\u0435\u0440\u043d\u0443\u0442\u044c { even: [2, 4, 6], odd: [1, 3, 5] }\n\nseparateArray(numbers);\n\nfunction separateArray(array) {\n  const evenArray = array.filter(item => item % 2 === 0);\n  const oddArray = array.filter(item => item % 2 !== 0);\n\n  return {\n    even: evenArray,\n    odd: oddArray,\n  }\n}\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u0441\u0440\u0435\u0434\u043d\u0435\u0435-\u0430\u0440\u0438\u0444\u043c\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435"},"\u0421\u0440\u0435\u0434\u043d\u0435\u0435 \u0430\u0440\u0438\u0444\u043c\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const data = guestsInfo;\n/*\n\u0412 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 data \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0442\u0430\u043a\u043e\u0439 \u043c\u0430\u0441\u0441\u0438\u0432:\n[\n  { name: "\u0421\u0430\u0448\u0430", age: 19 },\n  { name: "\u041a\u0430\u0442\u044f", age: 21 },\n  { name: "\u041c\u0438\u0448\u0430", age: 17 },\n  { name: "\u0424\u0435\u0434\u044f", age: 23 },\n  { name: "\u041a\u043b\u0430\u0432\u0430", age: 22 }\n]\n*/\n\nfunction calcAvgAge(array) {\n  // \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u043c\u0430\u0441\u0441\u0438\u0432 \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u043e\u0432\n  const ageArray = array.map(item => item.age);\n\n  // \u0441\u0443\u043c\u043c\u0438\u0440\u0443\u0435\u043c \u0432\u0441\u0435 \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430 \u0432 \u043c\u0430\u0441\u0441\u0438\u0432\u0435\n  const summArray = ageArray.reduce((prevItem, curItem) => {\n    return prevItem + curItem;\n  }, 0);\n\n  // \u0434\u0435\u043b\u0438\u043c \u0441\u0443\u043c\u043c\u0443 \u043d\u0430 \u043a\u043e\u043b-\u0432\u043e (\u0441\u0440\u0435\u0434\u043d\u0435\u0435 \u0430\u0440\u0438\u0444\u043c\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435)\n  return summArray / array.length;\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"lodash"},"Lodash"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://lodash.com/"},"https://lodash.com/")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"date-fns"},"Date-fns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://date-fns.org/"},"https://date-fns.org/")),(0,a.kt)("hr",null))}p.isMDXComponent=!0}}]);