"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[8685],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>d});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},i=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||s;return t?o.createElement(k,a(a({ref:n},i),{},{components:t})):o.createElement(k,a({ref:n},i))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<s;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},477:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=t(7462),r=(t(7294),t(3905));const s={title:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0438 \u0441\u0442\u0438\u043b\u0438",sidebar_position:2},a=void 0,l={unversionedId:"frontend/react/components",id:"frontend/react/components",title:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0438 \u0441\u0442\u0438\u043b\u0438",description:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",source:"@site/docs/frontend/react/2-components.md",sourceDirName:"frontend/react",slug:"/frontend/react/components",permalink:"/knowledge-bank/docs/frontend/react/components",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/react/2-components.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0438 \u0441\u0442\u0438\u043b\u0438",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u042d\u043a\u043e\u0441\u0438\u0441\u0442\u0435\u043c\u0430",permalink:"/knowledge-bank/docs/frontend/react/ecosystem"},next:{title:"\u0420\u043e\u0443\u0442\u0438\u043d\u0433 -",permalink:"/knowledge-bank/docs/frontend/react/routing"}},p={},c=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0433\u043e-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",level:2},{value:"Props",id:"props",level:2},{value:"\u0421\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f",id:"\u0441\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f",level:2},{value:"\u0410\u0442\u0442\u0440\u0438\u0431\u0443\u0442 style",id:"\u0430\u0442\u0442\u0440\u0438\u0431\u0443\u0442-style",level:3},{value:"\u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u0438\u043b\u0438",id:"\u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0435-\u0441\u0442\u0438\u043b\u0438",level:3},{value:"CSS/SCSS-\u043c\u043e\u0434\u0443\u043b\u0438 \ud83d\udc4d",id:"cssscss-\u043c\u043e\u0434\u0443\u043b\u0438-",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435",id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435",level:4},{value:"JSS - css in js",id:"jss---css-in-js",level:3},{value:"Styled-component \ud83d\udc4e",id:"styled-component-",level:3},{value:"PostCSS",id:"postcss",level:3},{value:"classnames",id:"classnames",level:3}],i={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0433\u043e-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { FC, useState, PropsWithChildren } from 'react';\nimport styles from './SomeComponent.module.scss';\n\ntype TProps = {\n  title: string;\n  action: () => void;\n  children: React.ReactNode;\n}\n\n// \u0437\u0430\u043f\u0438\u0441\u044c \u0447\u0435\u0440\u0435\u0437 \u0444\u0443\u043d\u043a\u0446\u0438\u044e\n// function SomeComponent({ title, action }: TProps) {\n\n// \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f \u0447\u0435\u0440\u0435\u0437 \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044e \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u043f\u0440\u043e\u043f\u0441\u043e\u0432\n// const SomeComponent = ({ title, action }: TProps) => {\n\n// \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f \u0441 children \n// const SomeComponent: React.FC<PropsWithChildren<TProps>> = ...\n\n// \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f \u0447\u0435\u0440\u0435\u0437 \u0434\u0436\u0435\u043d\u0435\u0440\u0438\u043a \u0440\u0435\u0430\u043a\u0442 \u0444\u0443\u043d\u043a. \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\nconst SomeComponent: FC<TProps> = ({ title, action }) => {\n  // \u0432\u044b\u0437\u043e\u0432 \u0445\u0443\u043a\u0430 useState\n  const [count, setCount] = useState<number>(0);\n\n  const someLocalAction = () => {\n    console.log('Do something');\n  }\n\n  return (\n    <div className={styles.SomeComponent}>\n      <h2>{title}</h2>\n\n      <span>{count}</span>\n\n      <button onClick={() => setCount(count + 1)}>+1</button>\n\n      <button onClick={() => action()}>Click me</button>\n\n      <button onClick={someLocalAction}>Click me</button>\n    </div>\n  )\n}\n\nexport default SomeComponent;\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("p",null,"\u0412 props \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u043b\u044e\u0431\u043e\u0439 \u0442\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// n\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u043f\u0441\u043e\u0432\ntype TProps = {\n  prop1: number;\n  prop2: string;\n  prop3: boolean;\n  prop4: TSomeObj;\n  prop5: TSomeObj[];\n  prop6: (val: TSomeObj) => void;\n  prop7?: ReactElement<any, any>; // \u0440\u0435\u0430\u043a\u0442-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043a\u0430\u043a property\n}\n\n...\n\n<SomeComponent \n  prop1={10}\n  prop2=\"Some string\"\n  prop3={true}\n  prop4={{ name: 'John Smith', age: 35 }}\n  prop5={[{ name: 'John Smith1', age: 35 }, { name: 'John Smith2', age: 35 }, { name: 'John Smith3', age: 35 }]}\n  prop6={setState}\n  prop7={\n    <div>\n      <p>Some Layout</p>\n    </div>\n  }\n>\n\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u0441\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f"},"\u0421\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f"),(0,r.kt)("h3",{id:"\u0430\u0442\u0442\u0440\u0438\u0431\u0443\u0442-style"},"\u0410\u0442\u0442\u0440\u0438\u0431\u0443\u0442 style"),(0,r.kt)("p",null,"\u041c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u043d\u043b\u0430\u0439\u043d-\u0441\u0442\u0438\u043b\u0438 \u0434\u043b\u044f \u0442\u043e\u0447\u0435\u0447\u043d\u043e\u0439 \u0441\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u0434\u043b\u044f \u0441\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u0440\u0438 \u043a\u0430\u043a\u0438\u0445-\u043b\u0438\u0431\u043e \u0442\u0440\u0438\u0433\u0433\u0435\u0440\u0430\u0445."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// inline styles\n<div style={{ color: 'white', background: 'blue' }} />\n\n...\n\n// styles object\nconst styles = {\n  color: 'white', \n  background: 'blue',\n}\n\n<div style={styles} />\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0435-\u0441\u0442\u0438\u043b\u0438"},"\u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u0438\u043b\u0438"),(0,r.kt)("p",null,"Old-school aproach. \u041c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u043a\u0430\u043a\u0438\u0445-\u043b\u0438\u0431\u043e \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u044e\u0449\u0438\u0445\u0441\u044f \u043a\u043b\u0430\u0441\u0441\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import './global.css';\n\n...\n\n<div className=\"some-global-class\" />\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"cssscss-\u043c\u043e\u0434\u0443\u043b\u0438-"},"CSS/SCSS-\u043c\u043e\u0434\u0443\u043b\u0438 \ud83d\udc4d"),(0,r.kt)("p",null,"\u0412 \u043a\u0440\u0443\u043f\u043d\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0442\u0430\u043a\u0438\u0435 \u043f\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043d\u0438\u044f \u0441\u0442\u0438\u043b\u0435\u0439 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0441\u044f \u043e\u0442\u043b\u043e\u0432\u0438\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e \u2014 \u043a\u043e\u0433\u0434\u0430 \u043e\u043d\u0438 \u043f\u0440\u0438\u0432\u0435\u0434\u0443\u0442 \u043a \u043e\u0448\u0438\u0431\u043a\u0430\u043c \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f. \u0425\u043e\u0440\u043e\u0448\u043e, \u0435\u0441\u043b\u0438 \u043e\u0448\u0438\u0431\u043a\u0430 \u0432\u0441\u043a\u0440\u043e\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438. \u0425\u0443\u0436\u0435, \u043a\u043e\u0433\u0434\u0430 \u043e\u043d\u0430 \u043d\u0430\u0439\u0434\u0451\u0442\u0441\u044f \u0432 \u043f\u0440\u043e\u0434\u0430\u043a\u0448\u043d\u0435."),(0,r.kt)("p",null,"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0443 \u0440\u0435\u0448\u0430\u044e\u0442 CSS-\u043c\u043e\u0434\u0443\u043b\u0438. \u042d\u0442\u0430 \u043d\u0435\u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u0434\u0435\u043b\u0430\u0435\u0442 \u043a\u043b\u0430\u0441\u0441\u044b \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0438\u043c\u0435\u043d\u0430 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0438 \u0437\u0430\u0434\u0430\u0451\u0442 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0438\u043c\u0451\u043d. \u0412\u0441\u0451 \u044d\u0442\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u043d\u0430 \u044d\u0442\u0430\u043f\u0435 \u0441\u0431\u043e\u0440\u043a\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0430."),(0,r.kt)("p",null,"\u0412 CSS-\u043c\u043e\u0434\u0443\u043b\u044f\u0445 \u0441\u0442\u0438\u043b\u0438 \u0441\u0442\u0430\u043d\u043e\u0432\u044f\u0442\u0441\u044f JS-\u043e\u0431\u044a\u0435\u043a\u0442\u0430\u043c\u0438, \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u044e\u0442 \u0441\u0432\u043e\u0438 \u0438\u043c\u0435\u043d\u0430:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".button {}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import buttonStyles from './button.css';\n\nelement.innerHTML = `<div class=\"${buttonStyles.button} ${buttonStyles.red}\" ...`;\n")),(0,r.kt)("h4",{id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435"},"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import styles from './Button.module.css';\n...\n<button className={styles.Button} />\n")),(0,r.kt)("p",null,"\u0412 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u043a\u043b\u0430\u0441\u0441 \u043f\u043e\u043b\u0443\u0447\u0438\u0442 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u0438\u043c\u044f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<div class="button-213ge1hw ...">\n    ...\n</button>\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"jss---css-in-js"},"JSS - css in js"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"yarn add react-jss")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cssinjs.org/?v=v10.3.0"},"cssinjs.org")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport {render} from 'react-dom'\nimport {createUseStyles} from 'react-jss'\n\n// Create your Styles. Remember, since React-JSS uses the default preset,\n// most plugins are available without further configuration needed.\nconst useStyles = createUseStyles({\n  myButton: {\n    color: 'green',\n    margin: {\n      // jss-plugin-expand gives more readable syntax\n      top: 5, // jss-plugin-default-unit makes this 5px\n      right: 0,\n      bottom: 0,\n      left: '1rem'\n    },\n    '& span': {\n      // jss-plugin-nested applies this to a child span\n      fontWeight: 'bold' // jss-plugin-camel-case turns this into 'font-weight'\n    }\n  },\n  myLabel: {\n    fontStyle: 'italic'\n  }\n})\n\n// Define the component using these styles and pass it the 'classes' prop.\n// Use this to assign scoped class names.\nconst Button = ({children}) => {\n  const classes = useStyles()\n  return (\n    <button className={classes.myButton}>\n      <span className={classes.myLabel}>{children}</span>\n    </button>\n  )\n}\n\nconst App = () => <Button>Submit</Button>\n\nrender(<App />, document.getElementById('root'))\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"styled-component-"},"Styled-component \ud83d\udc4e"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"yarn add styled-components")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://styled-components.com/"},"styled-components")),(0,r.kt)("p",null,"\u0421\u0442\u0438\u043b\u0435\u0432\u044b\u0435 \u043e\u0431\u0435\u0440\u0442\u043a\u0438 \u0434\u043b\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432. \u041c\u043e\u0436\u043d\u043e \u0441\u0442\u0438\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0447\u0435\u0440\u0435\u0437 props."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u0441\u0442\u0438\u043b\u0438 \u0438 \u0440\u0430\u0437\u043c\u0435\u0442\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 <Button />\nconst Button = styled.button`\n  background: transparent;\n  border-radius: 3px;\n  border: 2px solid palevioletred;\n  color: palevioletred;\n  margin: 0.5em 1em;\n  padding: 0.25em 1em;\n\n  ${props => props.primary && css`\n    background: palevioletred;\n    color: white;\n  `}\n`;\n\n// \u0441\u0442\u0438\u043b\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 <Container />\nconst Container = styled.div`\n  text-align: center;\n`\n\nrender(\n  <Container>\n    <Button>Normal Button</Button>\n    <Button primary>Primary Button</Button>\n  </Container>\n); \n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"postcss"},"PostCSS"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.postcss.parts/"},"Post CSS plugins")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"classnames"},"classnames"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"yarn add classnames")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import cn from 'classnames';\nimport styles from 'SomeComponent.module.scss';\n\n...\n\n<div\n  className={cn(styles.ActiveDate, {\n    // \u043a\u043b\u0430\u0441\u0441 \u043f\u043e \u0443\u0441\u043b\u043e\u0432\u0438\u044e\n    [styles.ActiveDate__lowActive]: user.activeDate < TODAY_MINUS_2WEEKS,\n  })}\n>\n  {user.activeDate || '\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445'}\n</div>\n\n")))}u.isMDXComponent=!0}}]);