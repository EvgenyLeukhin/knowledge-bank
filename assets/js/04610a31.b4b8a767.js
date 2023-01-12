"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9561],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,l=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=s,y=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=n.length,o=new Array(l);o[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1228:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var r=n(7462),s=(n(7294),n(3905));const l={title:"\u0421\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f +++",sidebar_position:3},o=void 0,a={unversionedId:"frontend/react/styling",id:"frontend/react/styling",title:"\u0421\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f +++",description:"\u0410\u0442\u0442\u0440\u0438\u0431\u0443\u0442 style",source:"@site/docs/frontend/react/styling.md",sourceDirName:"frontend/react",slug:"/frontend/react/styling",permalink:"/knowledge-bank/docs/frontend/react/styling",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/react/styling.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u0421\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f +++",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u041b\u0438\u043d\u0442\u0435\u0440\u044b \u0438 \u0442\u0435\u0441\u0442\u0435\u0440\u044b",permalink:"/knowledge-bank/docs/frontend/react/linters"},next:{title:"\u0416\u0438\u0437\u043d\u0435\u043d\u043d\u044b\u0439 \u0446\u0438\u043a\u043b",permalink:"/knowledge-bank/docs/frontend/react/lifecycle"}},i={},c=[{value:"\u0410\u0442\u0442\u0440\u0438\u0431\u0443\u0442 style",id:"\u0430\u0442\u0442\u0440\u0438\u0431\u0443\u0442-style",level:2},{value:"\u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u0438\u043b\u0438",id:"\u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0435-\u0441\u0442\u0438\u043b\u0438",level:2},{value:"CSS-\u043c\u043e\u0434\u0443\u043b\u0438",id:"css-\u043c\u043e\u0434\u0443\u043b\u0438",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435",id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435",level:3},{value:"JSS - css in js",id:"jss---css-in-js",level:2},{value:"Styled-component",id:"styled-component",level:2},{value:"PostCSS",id:"postcss",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u0430\u0442\u0442\u0440\u0438\u0431\u0443\u0442-style"},"\u0410\u0442\u0442\u0440\u0438\u0431\u0443\u0442 style"),(0,s.kt)("p",null,"\u041c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u043d\u043b\u0430\u0439\u043d-\u0441\u0442\u0438\u043b\u0438 \u0434\u043b\u044f \u0442\u043e\u0447\u0435\u0447\u043d\u043e\u0439 \u0441\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u0434\u043b\u044f \u0441\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u0440\u0438 \u043a\u0430\u043a\u0438\u0445-\u043b\u0438\u0431\u043e \u0442\u0440\u0438\u0433\u0433\u0435\u0440\u0430\u0445."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"// inline styles\n<div style={{ color: 'white', background: 'blue' }} />\n\n...\n\n// styles object\nconst styles = {\n  color: 'white', \n  background: 'blue',\n}\n\n<div style={styles} />\n")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"\u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0435-\u0441\u0442\u0438\u043b\u0438"},"\u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u0438\u043b\u0438"),(0,s.kt)("p",null,"Old-school aproach. \u041c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u043a\u0430\u043a\u0438\u0445-\u043b\u0438\u0431\u043e \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u044e\u0449\u0438\u0445\u0441\u044f \u043a\u043b\u0430\u0441\u0441\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import './global.css';\n\n...\n\n<div className=\"some-global-class\" />\n")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"css-\u043c\u043e\u0434\u0443\u043b\u0438"},"CSS-\u043c\u043e\u0434\u0443\u043b\u0438"),(0,s.kt)("p",null,"\u0412 \u043a\u0440\u0443\u043f\u043d\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0442\u0430\u043a\u0438\u0435 \u043f\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043d\u0438\u044f \u0441\u0442\u0438\u043b\u0435\u0439 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0441\u044f \u043e\u0442\u043b\u043e\u0432\u0438\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e \u2014 \u043a\u043e\u0433\u0434\u0430 \u043e\u043d\u0438 \u043f\u0440\u0438\u0432\u0435\u0434\u0443\u0442 \u043a \u043e\u0448\u0438\u0431\u043a\u0430\u043c \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f. \u0425\u043e\u0440\u043e\u0448\u043e, \u0435\u0441\u043b\u0438 \u043e\u0448\u0438\u0431\u043a\u0430 \u0432\u0441\u043a\u0440\u043e\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438. \u0425\u0443\u0436\u0435, \u043a\u043e\u0433\u0434\u0430 \u043e\u043d\u0430 \u043d\u0430\u0439\u0434\u0451\u0442\u0441\u044f \u0432 \u043f\u0440\u043e\u0434\u0430\u043a\u0448\u043d\u0435."),(0,s.kt)("p",null,"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0443 \u0440\u0435\u0448\u0430\u044e\u0442 CSS-\u043c\u043e\u0434\u0443\u043b\u0438. \u042d\u0442\u0430 \u043d\u0435\u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u0434\u0435\u043b\u0430\u0435\u0442 \u043a\u043b\u0430\u0441\u0441\u044b \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0438\u043c\u0435\u043d\u0430 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0438 \u0437\u0430\u0434\u0430\u0451\u0442 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0438\u043c\u0451\u043d. \u0412\u0441\u0451 \u044d\u0442\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u043d\u0430 \u044d\u0442\u0430\u043f\u0435 \u0441\u0431\u043e\u0440\u043a\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0430."),(0,s.kt)("p",null,"\u0412 CSS-\u043c\u043e\u0434\u0443\u043b\u044f\u0445 \u0441\u0442\u0438\u043b\u0438 \u0441\u0442\u0430\u043d\u043e\u0432\u044f\u0442\u0441\u044f JS-\u043e\u0431\u044a\u0435\u043a\u0442\u0430\u043c\u0438, \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u044e\u0442 \u0441\u0432\u043e\u0438 \u0438\u043c\u0435\u043d\u0430:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},".button {}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import buttonStyles from './button.css';\n\nelement.innerHTML = `<div class=\"${buttonStyles.button} ${buttonStyles.red}\" ...`;\n")),(0,s.kt)("h3",{id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435"},"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import styles from './Button.module.css';\n...\n<button className={styles.Button} />\n")),(0,s.kt)("p",null,"\u0412 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u043a\u043b\u0430\u0441\u0441 \u043f\u043e\u043b\u0443\u0447\u0438\u0442 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u0438\u043c\u044f:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},'<div class="button-213ge1hw ...">\n    ...\n</button>\n')),(0,s.kt)("h2",{id:"jss---css-in-js"},"JSS - css in js"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"yarn add react-jss")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://cssinjs.org/?v=v10.3.0"},"cssinjs.org")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport {render} from 'react-dom'\nimport {createUseStyles} from 'react-jss'\n\n// Create your Styles. Remember, since React-JSS uses the default preset,\n// most plugins are available without further configuration needed.\nconst useStyles = createUseStyles({\n  myButton: {\n    color: 'green',\n    margin: {\n      // jss-plugin-expand gives more readable syntax\n      top: 5, // jss-plugin-default-unit makes this 5px\n      right: 0,\n      bottom: 0,\n      left: '1rem'\n    },\n    '& span': {\n      // jss-plugin-nested applies this to a child span\n      fontWeight: 'bold' // jss-plugin-camel-case turns this into 'font-weight'\n    }\n  },\n  myLabel: {\n    fontStyle: 'italic'\n  }\n})\n\n// Define the component using these styles and pass it the 'classes' prop.\n// Use this to assign scoped class names.\nconst Button = ({children}) => {\n  const classes = useStyles()\n  return (\n    <button className={classes.myButton}>\n      <span className={classes.myLabel}>{children}</span>\n    </button>\n  )\n}\n\nconst App = () => <Button>Submit</Button>\n\nrender(<App />, document.getElementById('root'))\n")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"styled-component"},"Styled-component"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"yarn add styled-components")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://styled-components.com/"},"styled-components")),(0,s.kt)("p",null,"\u0421\u0442\u0438\u043b\u0435\u0432\u044b\u0435 \u043e\u0431\u0435\u0440\u0442\u043a\u0438 \u0434\u043b\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432. \u041c\u043e\u0436\u043d\u043e \u0441\u0442\u0438\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0447\u0435\u0440\u0435\u0437 props."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u0441\u0442\u0438\u043b\u0438 \u0438 \u0440\u0430\u0437\u043c\u0435\u0442\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 <Button />\nconst Button = styled.button`\n  background: transparent;\n  border-radius: 3px;\n  border: 2px solid palevioletred;\n  color: palevioletred;\n  margin: 0.5em 1em;\n  padding: 0.25em 1em;\n\n  ${props => props.primary && css`\n    background: palevioletred;\n    color: white;\n  `}\n`;\n\n// \u0441\u0442\u0438\u043b\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 <Container />\nconst Container = styled.div`\n  text-align: center;\n`\n\nrender(\n  <Container>\n    <Button>Normal Button</Button>\n    <Button primary>Primary Button</Button>\n  </Container>\n); \n")),(0,s.kt)("hr",null),(0,s.kt)("p",null,"\u041c\u043e\u0439 \u0432\u044b\u0431\u043e\u0440 - CSS/SCSS-\u043c\u043e\u0434\u0443\u043b\u0438 + \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u0438\u043b\u0438 + \u0442\u043e\u0447\u0435\u0447\u043d\u0430\u044f \u0438\u043d\u043b\u0430\u0439\u043d \u0441\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f. \u0422\u0430\u043a \u043a\u0430\u043a:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"jsx \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e, \u0441\u0442\u0438\u043b\u0438 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e (\u043d\u0435 \u0437\u0430\u0433\u0440\u043e\u043c\u043e\u0436\u0434\u0430\u0435\u0442 \u043a\u043e\u0434)"),(0,s.kt)("li",{parentName:"ul"},"\u043b\u0435\u0447\u0433\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f, \u0442\u0430\u043a \u043a\u0430\u043a css \u0438\u043c\u0435\u0435\u0442 \u0431\u043e\u043b\u0435\u0435 \u043f\u0440\u0438\u0432\u044b\u0447\u043d\u044b\u0439 \u0432\u0438\u0434")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"postcss"},"PostCSS"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.postcss.parts/"},"Post CSS plugins")))}u.isMDXComponent=!0}}]);