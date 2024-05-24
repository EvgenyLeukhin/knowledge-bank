"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[4776],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},v={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(t),d=a,m=p["".concat(c,".").concat(d)]||p[d]||v[d]||o;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7483:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>v,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=t(7462),a=(t(7294),t(3905));const o={title:"\u042d\u0432\u0435\u043d\u0442\u044b",sidebar_position:9},l=void 0,s={unversionedId:"frontend/ts/events",id:"frontend/ts/events",title:"\u042d\u0432\u0435\u043d\u0442\u044b",description:"ChangeEvent",source:"@site/docs/frontend/ts/9-events.md",sourceDirName:"frontend/ts",slug:"/frontend/ts/events",permalink:"/knowledge-bank/docs/frontend/ts/events",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/ts/9-events.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"\u042d\u0432\u0435\u043d\u0442\u044b",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"React-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442",permalink:"/knowledge-bank/docs/frontend/ts/component"},next:{title:"DOM",permalink:"/knowledge-bank/docs/frontend/ts/dom"}},c={},i=[{value:"ChangeEvent",id:"changeevent",level:3},{value:"FocusEvent",id:"focusevent",level:3},{value:"FormEvent",id:"formevent",level:3},{value:"MouseEvent",id:"mouseevent",level:3},{value:"\u0410\u0432\u0442\u043e\u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 event",id:"\u0430\u0432\u0442\u043e\u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u043e\u0431\u044a\u0435\u043a\u0442\u0430-event",level:3},{value:"Select event",id:"select-event",level:2}],u={toc:i};function v(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"changeevent"},"ChangeEvent"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n  const value = event.target.value;\n  console.log(value);\n};\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"focusevent"},"FocusEvent"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {\n  const value = event.target.value;\n  console.log(value);\n};\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"formevent"},"FormEvent"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const onLoginHandler = async (event: React.FormEvent<HTMLFormElement>) => {\n  event.preventDefault();\n\n  if (email && password) {\n    let errors = await dispatch(login(email, password)) as unknown as boolean;\n  }\n}\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"mouseevent"},"MouseEvent"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const onClick = (event: React.MouseEvent<HTMLDivElement>) => {\n  const value = event.target.value;\n  console.log(value);\n}\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u0430\u0432\u0442\u043e\u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u043e\u0431\u044a\u0435\u043a\u0442\u0430-event"},"\u0410\u0432\u0442\u043e\u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 event"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<UiRemoveIcon\n    title='\u0423\u0434\u0430\u043b\u0438\u0442\u044c'\n    width={15.75}\n    height={18.38}\n    color={hasAccess ? 'primary' : 'secondary'}\n\n    // \u043f\u043e\u043b\u043d\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c\n    onClick={(e: React.MouseEvent<HTMLSpanElement>) => removeHandle(\u0435)}\n\n    // \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c \u043a\u043e\u0440\u043e\u0442\u043a\u043e \u0431\u0435\u0437 e\n    onClick={removeHandle} \n/>\n\n// \u043c\u0435\u0442\u043e\u0434-\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\nconst removeHandle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {\n    e.stopPropagation();\n\n    if (hasAccess) {\n        dispatch(setConfirmationOpen({\n            dialogType: 'positive',\n            dialogText: `\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d ${data.name}?`,\n            confirmationFunction: () => {\n                dispatch(deleteExpressIntervalTemplateByUuid(data.uuid));\n            }\n        }))\n    }\n}\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"select-event"},"Select event"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const handleStatusChange = (e: SelectChangeEvent) => {\n  console.log('e', e);\n};\n\n...\n\n<TableCell>\n  <Select\n    fullWidth\n    className={styles.statusSelect}\n    value={item.status}\n    onChange={handleStatusChange}\n  >\n    <MenuItem value={'\u0421\u043e\u0437\u0434\u0430\u043d'}>\u0421\u043e\u0437\u0434\u0430\u043d</MenuItem>\n    <MenuItem value={'\u0412 \u0447\u0435\u0440\u043d\u043e\u0432\u0438\u043a\u0430\u0445'}>\u0412 \u0447\u0435\u0440\u043d\u043e\u0432\u0438\u043a\u0430\u0445</MenuItem>\n    <MenuItem value={'\u0412 \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u0438 \u0415\u0420\u041f'}>\u0412 \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u0438 \u0415\u0420\u041f</MenuItem>\n    <MenuItem value={'\u042d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d'}>\u042d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d</MenuItem>\n  </Select>\n</TableCell>\n")))}v.isMDXComponent=!0}}]);