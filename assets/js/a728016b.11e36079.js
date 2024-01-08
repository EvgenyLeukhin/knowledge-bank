"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[6521],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||p;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=t.length,a=new Array(p);a[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<p;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6513:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const p={title:"React-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442",sidebar_position:8},a=void 0,i={unversionedId:"frontend/ts/component",id:"frontend/ts/component",title:"React-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442",description:"Props (I \u0432\u0430\u0440\u0438\u0430\u043d\u0442)",source:"@site/docs/frontend/ts/8-component.md",sourceDirName:"frontend/ts",slug:"/frontend/ts/component",permalink:"/knowledge-bank/docs/frontend/ts/component",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/ts/8-component.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"React-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Generic",permalink:"/knowledge-bank/docs/frontend/ts/generic"},next:{title:"\u042d\u0432\u0435\u043d\u0442\u044b",permalink:"/knowledge-bank/docs/frontend/ts/events"}},l={},s=[{value:"Props (I \u0432\u0430\u0440\u0438\u0430\u043d\u0442)",id:"props-i-\u0432\u0430\u0440\u0438\u0430\u043d\u0442",level:2},{value:"Props (II \u0432\u0430\u0440\u0438\u0430\u043d\u0442)",id:"props-ii-\u0432\u0430\u0440\u0438\u0430\u043d\u0442",level:2},{value:"Children type",id:"children-type",level:2},{value:"Mix props",id:"mix-props",level:2}],c={toc:s};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"props-i-\u0432\u0430\u0440\u0438\u0430\u043d\u0442"},"Props (I \u0432\u0430\u0440\u0438\u0430\u043d\u0442)"),(0,o.kt)("p",null,"Generic type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"type TProps = {\n  prop1: string;\n  prop2: number;\n}\n\nconst SomeComp: React.FC<TProps> = ({ prop1, prop2, style }) => {\n  return (\n    <div>SomeComp</div> \n  )\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"props-ii-\u0432\u0430\u0440\u0438\u0430\u043d\u0442"},"Props (II \u0432\u0430\u0440\u0438\u0430\u043d\u0442)"),(0,o.kt)("p",null,"\u0422\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f props."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"type TProps = {\n  prop1: string;\n  prop2: number;\n}\n\nconst SomeComp = ({ prop1, prop2 }: TProps) => {\n  return (\n    <div>SomeComp</div> \n  )\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"children-type"},"Children type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type TProps = {\n  children: React.ReactNode;\n  style?: React.CSSProperties;\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"mix-props"},"Mix props"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"export type MixProps<P = {}> = P & {\n  className?: string;\n  style?: React.CSSProperties;\n};\n\n// props \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\ninterface Props {\n  onClick?: () => void;\n  disabled?: boolean;\n}\n\n// \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0430\u043d\u0438\u0435 MixProps\nconst GameButton: React.FC<MixProps<Props>> = ({ className, onClick, style, children, disabled }) => {\n  return (\n    <button onClick={onClick} style={style} disabled={disabled}>\n      {children}\n    </button>\n  );\n};\n\nexport { GameButton };\n")))}d.isMDXComponent=!0}}]);