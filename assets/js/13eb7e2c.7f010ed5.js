"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[4386],{3905:(t,e,l)=>{l.d(e,{Zo:()=>p,kt:()=>s});var n=l(7294);function a(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function r(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function i(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?r(Object(l),!0).forEach((function(e){a(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function o(t,e){if(null==t)return{};var l,n,a=function(t,e){if(null==t)return{};var l,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||(a[l]=t[l]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(a[l]=t[l])}return a}var u=n.createContext({}),k=function(t){var e=n.useContext(u),l=e;return t&&(l="function"==typeof t?t(e):i(i({},e),t)),l},p=function(t){var e=k(t.components);return n.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var l=t.components,a=t.mdxType,r=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=k(l),s=a,c=d["".concat(u,".").concat(s)]||d[s]||m[s]||r;return l?n.createElement(c,i(i({ref:e},p),{},{components:l})):n.createElement(c,i({ref:e},p))}));function s(t,e){var l=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=l.length,i=new Array(r);i[0]=d;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var k=2;k<r;k++)i[k]=l[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}d.displayName="MDXCreateElement"},6801:(t,e,l)=>{l.r(e),l.d(e,{CODE:()=>p,assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>k});var n=l(7462),a=(l(7294),l(3905));const r={title:"\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u044b \u043a\u043e\u0434\u0430",sidebar_position:2},i=void 0,o={unversionedId:"frontend/other/code-editors",id:"frontend/other/code-editors",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u044b \u043a\u043e\u0434\u0430",description:"Visual Studio Code (VS Code)",source:"@site/docs/frontend/other/2-code-editors.md",sourceDirName:"frontend/other",slug:"/frontend/other/code-editors",permalink:"/knowledge-bank/docs/frontend/other/code-editors",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/other/2-code-editors.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u044b \u043a\u043e\u0434\u0430",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Console",permalink:"/knowledge-bank/docs/frontend/other/console"},next:{title:"\u0411\u0430\u043d\u0434\u043b\u0435\u0440\u044b \u0438 \u0441\u0431\u043e\u0440\u043a\u0438",permalink:"/knowledge-bank/docs/frontend/other/bundlers"}},u={},k=[{value:"Visual Studio Code (VS Code)",id:"visual-studio-code-vs-code",level:2},{value:"Add code to path",id:"add-code-to-path",level:3},{value:"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430",id:"\u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430",level:3},{value:"Plugins (must have)",id:"plugins-must-have",level:3},{value:"Plugins (optional)",id:"plugins-optional",level:3},{value:"Shortcuts",id:"shortcuts",level:3},{value:"\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440",id:"\u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440",level:4},{value:"\u0424\u0430\u0439\u043b\u044b",id:"\u0444\u0430\u0439\u043b\u044b",level:4},{value:"\u041a\u043e\u0434",id:"\u043a\u043e\u0434",level:4},{value:"Settings",id:"settings",level:3},{value:"Sublime Text 3",id:"sublime-text-3",level:2},{value:"Shortcuts",id:"shortcuts-1",level:3},{value:"Package control:",id:"package-control",level:3},{value:"Packages",id:"packages",level:3},{value:"Settings",id:"settings-1",level:3},{value:"Webstorm",id:"webstorm",level:2},{value:"Shortcuts",id:"shortcuts-2",level:3},{value:".editorconfig",id:"editorconfig",level:3}],p=t=>{let{children:e}=t;return(0,a.kt)("code",{style:{color:"cyan"}},e)},m={toc:k,CODE:p};function d(t){let{components:e,...l}=t;return(0,a.kt)("wrapper",(0,n.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"visual-studio-code-vs-code"},"Visual Studio Code (VS Code)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Download VS Code - visualstudio.com")),(0,a.kt)("h3",{id:"add-code-to-path"},"Add code to path"),(0,a.kt)("p",null,"Open the Command Palette (Cmd+Shift+P) and type 'shell command' to find the Shell:"),(0,a.kt)(p,{mdxType:"CODE"},"Command: Install 'code' command in PATH command."),(0,a.kt)("h3",{id:"\u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430"},"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439")," \u0438 ",(0,a.kt)("strong",{parentName:"li"},"\u041a\u0440\u043e\u0441\u0441\u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435\u043d\u043d\u044b\u0439")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u0422\u0435\u0440\u043c\u0438\u043d\u0430\u043b"),", ",(0,a.kt)("strong",{parentName:"li"},"Git"),", ",(0,a.kt)("strong",{parentName:"li"},"\u0414\u0435\u0431\u0430\u0433\u0433\u0435\u0440")," \u0438\u0437 \u043a\u043e\u0440\u043e\u0431\u043a\u0438"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u041f\u043b\u0430\u0433\u0438\u043d\u044b")," \u0431\u043e\u043b\u044c\u0448\u0438\u043e\u0439 \u0432\u044b\u0431\u043e\u0440 \u0434\u043b\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u044f\u0437\u044b\u043a\u043e\u0432 \u0438 \u0437\u0430\u0434\u0430\u0447"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),": \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043c\u043e\u0436\u043d\u043e \u0432\u0441\u0451"),(0,a.kt)("li",{parentName:"ul"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 ",(0,a.kt)("strong",{parentName:"li"},"\u0440\u0443\u0441\u0441\u043a\u043e\u0433\u043e \u044f\u0437\u044b\u043a\u0430")," \u043a\u043e\u043c\u0443 \u043d\u0443\u0436\u0435\u043d"),(0,a.kt)("li",{parentName:"ul"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u0447\u0435\u0440\u0435\u0437 GitHub \u0438 \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a")),(0,a.kt)("h3",{id:"plugins-must-have"},"Plugins (must have)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/"},"VS Code marketplace")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Thunder Client")," (\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 API)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Git History")," (Git-client)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"GitLens")," (\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0434\u043b\u044f Git)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"vscode-pdf")," (\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 pdf)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Auto Rename Tag")," (\u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0435 \u0438\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043d\u044b\u0445 \u0442\u0435\u0433\u043e\u0432)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Colonize")," (\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0442\u043e\u0447\u043a\u0438 \u0441 \u0437\u0430\u043f\u044f\u0442\u043e\u0439 ",(0,a.kt)("em",{parentName:"li"},"Shift/Alt + Enter"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ES7+ React/Redux/React-Native snippets")," (JS \u0441\u043d\u0438\u043f\u043f\u0435\u0442\u044b)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ESLint")," (JS \u043b\u0438\u043d\u0442\u0435\u0440)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"npm Intellisense")," (npm \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"NPM Scripts")," (\u0437\u0430\u043f\u0443\u0441\u043a npm-\u0441\u043a\u0440\u0438\u043f\u0442\u043e\u0432)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Prettier - Code formatter")," (\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u0434\u0430)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"EditorConfig for VS Code")," (\u043a\u043e\u043d\u0444\u0438\u0433 \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u0430)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Import Cost")," (\u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0440\u0430\u0437\u043c\u0435\u0440\u044b \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0438\u043b\u0438 \u0444\u0430\u0439\u043b\u043e\u0432)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"JavaScript and TypeScript Nightly")," (Enables typescript@next)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SVG")," (svg syntax)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Svg Preview")," (svg-\u043f\u0440\u0435\u0432\u044c\u044e)")),(0,a.kt)("h3",{id:"plugins-optional"},"Plugins (optional)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SFTP")," (FTP-\u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443 \u043f\u0440\u044f\u043c\u043e \u0438\u0437 \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u0430)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Docker")," (\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 Docker)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Database client")," (\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0411\u0414 \u0438\u0437 \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u0430)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"TailWind CSS IntelliSense")," (Css IntelliSence)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Live Share")," (\u0448\u0435\u0440\u0438\u043d\u0433 \u043a\u043e\u0434\u0430)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"REST Client")," (\u0430\u043d\u0430\u043b\u043e\u0433 Thunder Client)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"MJML")," (\u043f\u043e\u0434\u0434\u0435\u0440\u043a\u0430 mjml \u0444\u0430\u0439\u043b\u043e\u0432)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Live server")," (\u043e\u0442\u043a\u0440\u044b\u0442\u0438\u0435 html-\u0444\u0430\u0439\u043b\u043e\u0432 \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435, dev-server)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Sublime Text Keymap and Settings Importer")," (\u0448\u043e\u0440\u0442\u043a\u0430\u0442\u044b \u043a\u0430\u043a \u0432 Sublime Text 3)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Auto open markdown preview")," (md-\u043f\u0440\u0435\u0432\u044c\u044e)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"markdownlint")," (md-\u043b\u0438\u043d\u0442\u0435\u0440)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Template Generator")," (\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0441\u043d\u0438\u043f\u043f\u0435\u0442\u044b \u043a\u043e\u0434\u0430)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"GitHub Copilot")," (AI - \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0432 \u0420\u0424)")),(0,a.kt)("h3",{id:"shortcuts"},"Shortcuts"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf"},"Shortcuts for VS Code")),(0,a.kt)("h4",{id:"\u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440"},"\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Cmd + Shift + P"),"\xa0\u2013\xa0\u041a\u043e\u043c\u0430\u043d\u0434\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Cmd + Shift + N"),"\xa0\u2013\xa0\u041d\u043e\u0432\u043e\u0435 \u043e\u043a\u043d\u043e"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Cmd + B"),"\xa0\u2013\xa0\u0421\u0430\u0439\u0434\u0431\u0430\u0440"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Cmd + ,"),"\xa0\u2013\xa0\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Cmd + Q"),"\xa0\u2013\xa0\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Ctrl + Cmd + F"),"\xa0\u2013\xa0\u041f\u043e\u043b\u043d\u043e\u044d\u043a\u0440\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c \u0432 MacOS"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Cmd + Shift + P"),"\xa0\u2013\xa0\u041a\u043e\u043c\u0430\u043d\u0434\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Ctrl + ` / Cmd + J"),"\xa0\u2013\xa0\u041e\u0442\u043a\u0440\u044b\u0442\u044c/\u0437\u0430\u043a\u0440\u044b\u0442\u044c \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Ctrl + Tab"),"\xa0\u2013\xa0\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043c\u0435\u0436\u0434\u0443 \u0432\u043a\u043b\u0430\u0434\u043a\u0430\u043c\u0438"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Cmd + K + S"),"\xa0\u2013\xa0\u0421\u043f\u0438\u0441\u043e\u043a \u0448\u043e\u0440\u0442\u043a\u0430\u0442\u043e\u0432"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Ctrl + Shift + G"),"\xa0\u2013\xa0Git"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Cmd + Shift + D"),"\xa0\u2013\xa0Debugger"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Cmd + Shift + E"),"\xa0\u2013\xa0Editor"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Cmd + Shift + X"),"\xa0\u2013\xa0Extentions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Cmd + Shift + R"),"\xa0\u2013\xa0Thunder Client"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Cmd + \\"),"\xa0\u2013\xa0Divide window"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Option + Z"),"\xa0\u2013\xa0\u041f\u0435\u0440\u0435\u043d\u043e\u0441\u044b \u0441\u0442\u0440\u043e\u043a"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Option + H"),"\xa0\u2013\xa0\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043c\u043c\u0438\u0442\u043e\u0432 (git log)")),(0,a.kt)("h4",{id:"\u0444\u0430\u0439\u043b\u044b"},"\u0424\u0430\u0439\u043b\u044b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Cmd + S/\u0421/V/X"),"\xa0\u2013\xa0\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c/\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c/\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c/\u0412\u044b\u0440\u0435\u0437\u0430\u0442\u044c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Cmd + P"),"\xa0\u2013\xa0\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0444\u0430\u0439\u043b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Cmd + N"),"\xa0\u2013\xa0\u041d\u043e\u0432\u044b\u0439 \u0444\u0430\u0439\u043b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Cmd + O"),"\xa0\u2013\xa0\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0444\u0430\u0439\u043b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Cmd + W"),"\xa0\u2013\xa0\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0432\u043a\u043b\u0430\u0434\u043a\u0443"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Cmd + Shift + T"),"\xa0\u2013\xa0\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0437\u0430\u043a\u0440\u044b\u0442\u0443\u044e \u0432\u043a\u043b\u0430\u0434\u043a\u0443")),(0,a.kt)("h4",{id:"\u043a\u043e\u0434"},"\u041a\u043e\u0434"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Cmd + \u2190\u2192"),"\xa0\u2013\xa0\u041d\u0430\u0447\u0430\u043b\u043e/\u041a\u043e\u043d\u0435\u0446 \u0441\u0442\u0440\u043e\u043a\u0438"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Cmd + \u21c5"),"\xa0\u2013\xa0\u041d\u0430\u0447\u0430\u043b\u043e/\u041a\u043e\u043d\u0435\u0446 \u0444\u0430\u0439\u043b\u0430"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Cmd + Shift + \u2190\u2192"),"\xa0\u2013\xa0\u0412\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0443"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Cmd + X"),"\xa0\u2013\xa0\u0412\u044b\u0440\u0435\u0437\u0430\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0443"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Cmd + Shift + K"),"\xa0\u2013\xa0\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0443"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Alt + \u2190\u2192"),"\xa0\u2013\xa0\u0414\u0432\u0438\u0436\u0435\u043d\u0438\u0435 \u043a\u0443\u0440\u0441\u043e\u0440\u0430 \u043f\u043e \u043a\u043e\u0434\u0443/\u0442\u0435\u043a\u0441\u0442\u0443"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Alt + Shift + \u21c5"),"\xa0\u2013\xa0\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0442\u0440\u043e\u043a"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Alt + \u21c5"),"\xa0\u2013\xa0\u041f\u0435\u0440\u0435\u043d\u043e\u0441 \u0441\u0442\u0440\u043e\u043a\u0438"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Cmd + F/E/G"),"\xa0\u2013\xa0\u041f\u043e\u0438\u0441\u043a"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Cmd + Alt + F"),"\xa0\u2013\xa0\u041f\u043e\u0438\u0441\u043a \u0438 \u0438\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Cmd + /"),"\xa0\u2013\xa0\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Tab"),"\xa0\u2013\xa0\u0422\u0430\u0431\u0443\u043b\u044f\u0446\u0438\u044f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Shift + Tab, Cmd + []"),"\xa0\u2013\xa0\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0442\u0430\u0431\u0443\u043b\u044f\u0446\u0438\u044f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Cmd + Alt + \u21c5 / Cmd + \u041b\u041a\u041c"),"\xa0\u2013\xa0\u041d\u043e\u0432\u044b\u0439 \u043a\u0443\u0440\u0441\u043e\u0440"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Cmd + Shift + \u21c5"),"\xa0\u2013\xa0\u0412\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u0432\u0441\u0451, \u0447\u0442\u043e \u0432\u044b\u0448\u0435/\u043d\u0438\u0436\u0435"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Cmd + D"),"\xa0\u2013\xa0\u0423\u043c\u043d\u043e\u0435 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u0435"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Cmd + Shift + L"),"\xa0\u2013\xa0\u0412\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u0435"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Ctrl + G"),"\xa0\u2013\xa0\u041d\u0430 \u0441\u0442\u0440\u043e\u043a\u0443"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Option + Shift + F"),"\xa0\u2013\xa0\u0410\u0432\u0442\u043e\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435")),(0,a.kt)("h3",{id:"settings"},"Settings"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "breadcrumbs.enabled": true, (default)\n\n  "gitlens.advanced.messages": {\n    "suppressResultsExplorerNotice": true,\n    "suppressShowKeyBindingsNotice": true\n  },\n  "git.autofetch": true,\n  "git.enableSmartCommit": true,\n  "gitlens.keymap": "alternate",\n\n  "editor.fontFamily": "Consolas",\n  "editor.fontSize": 18,\n  "editor.letterSpacing": 0, (default)\n  "editor.lineHeight": 25, (23 default)\n  "editor.formatOnPaste": true,\n  "editor.minimap.enabled": false,\n  "editor.minimap.scale": 2, (0 default)\n  "editor.multiCursorModifier": "ctrlCmd",\n  "editor.snippetSuggestions": "top",\n  "editor.renderControlCharacters": false,\n  "editor.renderWhitespace": "all",\n  "editor.rulers": [100],\n  "editor.tabSize": 2,\n  "editor.padding.top": 10,\n  "editor.padding.bottom": 10,\n  "editor.wordWrap": "on",\n\n  "emmet.includeLanguages": {\n    "javascript": "javascriptreact",\n  },\n  "emmet.syntaxProfiles": {\n    "javascript": "jsx",\n    // "javascript": "html",\n  },\n\n  "explorer.confirmDelete": false,\n  "explorer.confirmDragAndDrop": false,\n\n  "npm-scripts.showStartNotification": true,\n\n  "terminal.integrated.shell.windows": "C:\\\\Program Files\\\\Git\\\\bin\\\\bash.exe",\n  "terminal.integrated.shell.linux": "/bin/bash",\n\n\n  "javascript.updateImportsOnFileMove.enabled": "always",\n  "javascript.implicitProjectConfig.experimentalDecorators": true,\n\n  "window.zoomLevel": 0,\n  "workbench.colorTheme": "Monokai",\n  "workbench.statusBar.visible": true,\n  "files.insertFinalNewline": true\n}\n')),(0,a.kt)("p",null,"Configure Language \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u0438 - \u0441\u043c\u0435\u043d\u0430 \u044f\u0437\u044b\u043a\u0430 \u043d\u0430 \u0430\u043d\u0433\u043b (en)"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"sublime-text-3"},"Sublime Text 3"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.sublimetext.com/3"},"Download Sublime Text 3 - sublimetext.com")),(0,a.kt)("h3",{id:"shortcuts-1"},"Shortcuts"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://shortcuts.design/tools/toolspage-sublimetext/"},"Shortcuts for Sublime")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Ctrl + `")," - \u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043a\u043e\u043d\u0441\u043e\u043b\u044c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Ctrl + Shift + P")," - \u041a\u043e\u043c\u0430\u043d\u0434\u043d\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Ctrl + P")," - \u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0444\u0430\u0439\u043b\u0443"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Ctrl + Shift + N")," - \u041d\u043e\u0432\u043e\u0435 \u043e\u043a\u043d\u043e"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Ctrl + B")," - \u0421\u0430\u0439\u0434\u0431\u0430\u0440"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Alt + \u2191\u2193")," - \u041f\u0435\u0440\u0435\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0443"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"F11")," - \u041f\u043e\u043b\u043d\u043e\u044d\u043a\u0440\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Ctrl + \\")," - \u0420\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043e\u043a\u043d\u0430")),(0,a.kt)("h3",{id:"package-control"},"Package control:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043a\u043e\u043d\u0441\u043e\u043b\u044c \u0432 Sublime text 3 (View - Show console)"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("kbd",null,"Ctrl + Shift + P")," - Install Package control")),(0,a.kt)("h3",{id:"packages"},"Packages"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Emmet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"AutoFileName")," - \u043f\u0443\u0442\u0438 \u043a \u0444\u0430\u0439\u043b\u0430\u043c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"BracketHighlighter")," - \u043f\u043e\u0434\u0441\u0432\u0435\u0442\u043a\u0430 \u0441\u043a\u043e\u0431\u043e\u043a \u0438 \u043f\u0430\u0440\u043d\u044b\u0445 \u0442\u0435\u0433\u043e\u0432"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A File Icon")," - \u0438\u043a\u043e\u043d\u043a\u0438 \u0434\u043b\u044f \u0444\u0430\u0439\u043b\u043e\u0432 \u0432 \u0441\u0430\u0439\u0434\u0431\u0430\u0440\u0435"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ColorHighliter")," - \u043f\u043e\u0434\u0441\u0432\u0435\u0442\u043a\u0430 \u0446\u0432\u0435\u0442\u043e\u0432 \u0432 CSS"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Terminal")," - \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0442\u044c \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"LESS")," - \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441\u0430"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SASS")," - \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441\u0430"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Babel")," - \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441\u0430"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SideBarEnhancements")," - \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u0441\u0430\u0439\u0434\u0431\u0430\u0440\u0430"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bootstrap")," 3 Snippets"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bootstrap")," 4 Snippets"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"JavaScript")," Snippets - \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"JavaScript")," Completions - \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0445\u043e\u0440\u043e\u0448\u0435\u0435"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"jQuery")," Snippets"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"CodeFormatter")," - \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"HTML")," Minifier - \u043c\u0438\u043d\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 HTML, CSS, JS"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"BufferScroll")," - \u0437\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u0435\u0442 \u0441\u0432\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u0435 \u0431\u043b\u043e\u043a\u043e\u0432"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"EditorConfig")," - \u0437\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u0435\u0442 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u0434\u0430 (download)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SublimeLinter")," - \u041b\u0438\u043d\u0442\u0435\u0440"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SublimeLinter")," - eslint - JS-\u043b\u0438\u043d\u0442\u0435\u0440")),(0,a.kt)("h3",{id:"settings-1"},"Settings"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "color_scheme": "Mariana.sublime-color-scheme",\n  "default_line_ending": "unix",\n  "draw_white_space": "all",\n  "font_face": "Consolas",\n  "line_padding_top": 1,\n  "line_padding_bottom": 1,\n  "font_size": 13,\n  "margin": -3,\n  "tab_size": 2,\n  "theme": "Default.sublime-theme",\n  "word_separators": "./\\\\()\\"\'-:,.;<>~!@#$%^&*|+=[]{}`~?",\n  "word_wrap": true\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"webstorm"},"Webstorm"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/ru-ru/webstorm/"},"jetbrains.com - \u0421\u043a\u0430\u0447\u0430\u0442\u044c")),(0,a.kt)("h3",{id:"shortcuts-2"},"Shortcuts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Ctrl + Alt + S")," - \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Ctrl + Alt + A")," - \u041a\u043e\u043c\u0430\u043d\u0434\u044b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Ctrl + Shift + L - "),"\u0410\u0432\u0442\u043e\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Ctrl + Shift + N")," - \u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0444\u0430\u0439\u043b\u0443"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Alt + F12")," - \u0422\u0435\u0440\u043c\u0438\u043d\u0430\u043b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Ctrl + E")," - \u041d\u0435\u0434\u0430\u0432\u043d\u0438\u0435 \u0444\u0430\u0439\u043b\u044b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Ctrl + F4")," - \u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0432\u043a\u043b\u0430\u0434\u043a\u0443"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Ctrl + ~")," - \u041c\u0435\u043d\u044e \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("kbd",null,"Shift + Shift")," - \u041f\u043e\u0438\u0441\u043a \u0432\u0435\u0437\u0434\u0435")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"editorconfig"},".editorconfig"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://editorconfig.org"},"https://editorconfig.org/")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"root = true\n\n[*]\ncharset = utf-8\nindent_style = space\nindent_size = 2\nend_of_line = lf\ntrim_trailing_whitespace = true\ninsert_final_newline = true\n")))}d.isMDXComponent=!0}}]);