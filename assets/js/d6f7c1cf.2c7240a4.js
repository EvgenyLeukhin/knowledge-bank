"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[7202],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,y=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(y,l(l({ref:n},u),{},{components:t})):r.createElement(y,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4254:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={title:"Type",sidebar_position:4},l=void 0,i={unversionedId:"frontend/ts/type",id:"frontend/ts/type",title:"Type",description:"- \u0422\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u043d\u044b\u0445 \u0442\u0438\u043f\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445",source:"@site/docs/frontend/ts/4-type.md",sourceDirName:"frontend/ts",slug:"/frontend/ts/type",permalink:"/knowledge-bank/docs/frontend/ts/type",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/ts/4-type.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Type",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438",permalink:"/knowledge-bank/docs/frontend/ts/function"},next:{title:"Interface",permalink:"/knowledge-bank/docs/frontend/ts/interface"}},s={},p=[{value:"\u041e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u043b\u044f",id:"\u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435-\u043f\u043e\u043b\u044f",level:2},{value:"Type \u043a\u0430\u043a \u0430\u043d\u0430\u043b\u043e\u0433 enum",id:"type-\u043a\u0430\u043a-\u0430\u043d\u0430\u043b\u043e\u0433-enum",level:2},{value:"With params",id:"with-params",level:2},{value:"keyof",id:"keyof",level:2},{value:"keyof with Pick",id:"keyof-with-pick",level:2},{value:"typeof",id:"typeof",level:2},{value:"keyof typeof",id:"keyof-typeof",level:2},{value:"Pick",id:"pick",level:2},{value:"Omit",id:"omit",level:2}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u043d\u044b\u0445 \u0442\u0438\u043f\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445"),(0,a.kt)("li",{parentName:"ul"},"\u041c\u043e\u0436\u0435\u0442 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),(0,a.kt)("li",{parentName:"ul"},"\u041d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0442\u044c\u0441\u044f \u0447\u0435\u0440\u0435\u0437 extends, \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0435\u0440\u0435\u0437 &"),(0,a.kt)("li",{parentName:"ul"},"\u041c\u043e\u0436\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,a.kt)("li",{parentName:"ul"},"\u041c\u043e\u0436\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0438\u0437 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 (keyof, typeof)")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435-\u043f\u043e\u043b\u044f"},"\u041e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u043b\u044f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type TMassEditData = {\n  additionalStatusId: number | undefined;\n  hasOnlinePayment: boolean | undefined;\n}\n\n// \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0442\u0430\u043a:\ntype TMassEditData = {\n  additionalStatusId?: number;\n  hasOnlinePayment?: boolean;\n}\n\n// \u043c\u043e\u0436\u043d\u043e \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c\nexport type TMassEditData = {\n  additionalStatusId?: number;\n  hasOnlinePayment?: boolean;\n}\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"type-\u043a\u0430\u043a-\u0430\u043d\u0430\u043b\u043e\u0433-enum"},"Type \u043a\u0430\u043a \u0430\u043d\u0430\u043b\u043e\u0433 enum"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type TDirection = 'left' | 'up' | 'right' | 'down';\n\ntype TProps = {\n  stroke?: string;\n  direction?: TDirection;\n};\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"with-params"},"With params"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type TSomeObj<T> = {\n  className: string;\n  count: number;\n  data: T;\n}\n\n// \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435\nconst a: TSomeObj<string> = {\n  className: 'abc',\n  count: 10,\n  data: 'Some',\n};\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"keyof"},"keyof"),(0,a.kt)("p",null,"\u041a\u043b\u044e\u0447\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430. \u041c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0441 type \u0438 interface."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type TLikeButtonProps = {\n  className: string;\n  count: number;\n  size: number;\n}\n\n// \u043a\u043b\u044e\u0447\u0438 \u0442\u0438\u043f\u0430 'className' | 'count' | 'size'\ntype TLikeButtonKeys = keyof TLikeButtonProps; \n\n// \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435\nconst a: Record<TLikeButtonKeys, string> = {\n  className: 'some',\n  count: 'some',\n}\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"keyof-with-pick"},"keyof with Pick"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type T2gisSchedulePicked = keyof Pick<\n  T2gisSchedule,\n  'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'\n>;\n\n// \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u043e\ntype T2gisSchedulePicked = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"typeof"},"typeof"),(0,a.kt)("p",null,"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0442\u0438\u043f\u0430 \u0438\u0437 \u043e\u0431\u044a\u0435\u043a\u0442\u0430."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const person = {\n  name: 'John',\n  surname: 'Smith',\n  age: 25,\n};\n\ntype TGeneratedPerson = typeof person;\n\n// \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u043e\ntype TGeneratedPerson = {\n  name: string;\n  surname: string;\n  age: number;\n}\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"keyof-typeof"},"keyof typeof"),(0,a.kt)("p",null,"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043a\u043b\u044e\u0447\u0435\u0439 \u0438\u0437 \u043e\u0431\u044a\u0435\u043a\u0442\u0430."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const person = {\n  name: 'John',\n  surname: 'Smith',\n  age: 25,\n};\n\ntype TPersonKeys = 'name' | 'surname' | 'age';\n\n// \u0430\u043d\u0430\u043b\u043e\u0433 TPersonKeys (\u043a\u043b\u044e\u0447\u0438 \u0442\u0438\u043f\u0430)\ntype TGeneratedPersonKeys = keyof typeof person; \n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"pick"},"Pick"),(0,a.kt)("p",null,'\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u0442\u0438\u043f\u0430 \u0438\u0437 "\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f" \u0441\u0432\u043e\u0439\u0441\u0442\u0432 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u0442\u0438\u043f\u0430.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type TSla = {\n  id: number;\n  name: string;\n  color: string;\n  selected: boolean;\n  editing: boolean;\n  transportCompany: boolean;\n  updatedAt: string;\n  createdAt: string;\n}\n\n// \u043d\u043e\u0432\u044b\u0439 \u0442\u0438\u043f \u0438\u0437 4-\u0435\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432 \u0442\u0438\u043f\u0430 TSla\ntype PlainSla = Pick<TSla, 'id' | 'name' | 'color' | 'selected'>;\n\n// \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u043e\ntype PlainSla = {\n  id: number;\n  name: string;\n  color: string;\n  selected: boolean;\n}\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"omit"},"Omit"),(0,a.kt)("p",null,'\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u0442\u0438\u043f\u0430 \u0438\u0437 "\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f" \u0441\u0432\u043e\u0439\u0441\u0442\u0432 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u0442\u0438\u043f\u0430. \u041e\u0431\u0440\u0430\u0442\u043d\u043e\u0435 Pick.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type TSla = {\n  id: number;\n  name: string;\n  color: string;\n  selected: boolean;\n  editing: boolean;\n  transportCompany: boolean;\n  updatedAt: string;\n  createdAt: string;\n}\n\n// \u043d\u043e\u0432\u044b\u0439 \u0442\u0438\u043f \u0438\u0437 4-\u0435\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432 \u0442\u0438\u043f\u0430 TSla\ntype TPlainSla = Omit<TSla, 'id' | 'name' | 'color' | 'selected'>;\n\n// \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u043e\ntype TPlainSla = {\n  editing: boolean;\n  transportCompany: boolean;\n  updatedAt: string;\n  createdAt: string;\n}\n")),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"let timeout: ReturnType<typeof setTimeout>;\n")))}c.isMDXComponent=!0}}]);