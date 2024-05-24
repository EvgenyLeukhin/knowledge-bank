"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[8012],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6768:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={title:"Basics",sidebar_position:0},l=void 0,o={unversionedId:"mobile/react-native/basics",id:"mobile/react-native/basics",title:"Basics",description:"- reactnative.dev - React Native docs.",source:"@site/docs/mobile/react-native/0-basics.md",sourceDirName:"mobile/react-native",slug:"/mobile/react-native/basics",permalink:"/knowledge-bank/docs/mobile/react-native/basics",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/mobile/react-native/0-basics.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Basics",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"React Native",permalink:"/knowledge-bank/docs/category/react-native"},next:{title:"Android studio",permalink:"/knowledge-bank/docs/mobile/android-studio"}},p={},c=[{value:"React Native ui-component",id:"react-native-ui-component",level:2},{value:"React Native logic",id:"react-native-logic",level:2},{value:"Create new React Native project",id:"create-new-react-native-project",level:2},{value:"1. Install Create Expo and react-native bolierplate",id:"1-install-create-expo-and-react-native-bolierplate",level:3},{value:"TypeScript",id:"typescript",level:3},{value:"Tailwind CSS",id:"tailwind-css",level:3},{value:"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443 web",id:"\u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c-\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443-web",level:3},{value:"2. Expo scripts",id:"2-expo-scripts",level:3},{value:"\u0417\u0430\u043f\u0443\u0441\u043a \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445",id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u043d\u0430-\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445",level:2},{value:"1 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 - \u0447\u0435\u0440\u0435\u0437 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 &quot;Expo GO&quot; \u0434\u043b\u044f iOS \u0438 Android",id:"1-\u0432\u0430\u0440\u0438\u0430\u043d\u0442---\u0447\u0435\u0440\u0435\u0437-\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0435-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435-expo-go-\u0434\u043b\u044f-ios-\u0438-android",level:3},{value:"2 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 - \u0447\u0435\u0440\u0435\u0437 \u0441\u0438\u043c\u0443\u043b\u044f\u0442\u043e\u0440 iOS \u0432 XCode \u0438 \u0441\u0438\u043c\u043c\u0443\u043b\u044f\u0442\u043e\u0440 Android \u0432 Android Studio",id:"2-\u0432\u0430\u0440\u0438\u0430\u043d\u0442---\u0447\u0435\u0440\u0435\u0437-\u0441\u0438\u043c\u0443\u043b\u044f\u0442\u043e\u0440-ios-\u0432-xcode-\u0438-\u0441\u0438\u043c\u043c\u0443\u043b\u044f\u0442\u043e\u0440-android-\u0432-android-studio",level:3},{value:"XCode",id:"xcode",level:4},{value:"Android Studio",id:"android-studio",level:4},{value:"Install",id:"install",level:2},{value:"1 \u0432\u0430\u0440\u0438\u0430\u043d\u0442: \u0417\u0430\u043f\u0443\u0441\u043a dev-\u0441\u0431\u043e\u0440\u043a\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Expo Go Quickstart (recommended)",id:"1-\u0432\u0430\u0440\u0438\u0430\u043d\u0442-\u0437\u0430\u043f\u0443\u0441\u043a-dev-\u0441\u0431\u043e\u0440\u043a\u0438-\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-expo-go-quickstart-recommended",level:3},{value:"2 \u0432\u0430\u0440\u0438\u0430\u043d\u0442: \u0417\u0430\u043f\u0443\u0441\u043a dev-\u0441\u0431\u043e\u0440\u043a\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e React Native CLI on MacOS",id:"2-\u0432\u0430\u0440\u0438\u0430\u043d\u0442-\u0437\u0430\u043f\u0443\u0441\u043a-dev-\u0441\u0431\u043e\u0440\u043a\u0438-\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-react-native-cli-on-macos",level:3},{value:"3 \u0432\u0430\u0440\u0438\u0430\u043d\u0442: Expo CLI  --&gt; deprecated",id:"3-\u0432\u0430\u0440\u0438\u0430\u043d\u0442-expo-cli-----deprecated",level:3},{value:"\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0435\u043a\u0442\u0430 by Expo CLI --&gt; deprecated",id:"\u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f-\u043f\u0440\u043e\u0435\u043a\u0442\u0430-by-expo-cli----deprecated",level:3},{value:"Create new project",id:"create-new-project",level:2},{value:"\u042f\u0437\u044b\u043a\u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430\u0445",id:"\u044f\u0437\u044b\u043a\u0438-\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f-\u0432-\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445-\u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430\u0445",level:2}],s={toc:c};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/"},"reactnative.dev")," - React Native docs.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/environment-setup"},"EXPO")," - Expo install")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://expo.dev/"},"EXPO")," - Expo docs.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"React Native")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043e\u0431\u044b\u0447\u043d\u044b\u0439 React, \u043d\u043e \u0431\u0435\u0437 ",(0,i.kt)("inlineCode",{parentName:"p"},"react-dom"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"React")," (without React Dom) + ",(0,i.kt)("strong",{parentName:"p"},"React Native")," (react-components --\x3e mobile native components) --\x3e ",(0,i.kt)("strong",{parentName:"p"},"Mobile App"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"React Native")," \u0447\u0442\u043e-\u0442\u043e \u043d\u0430\u043f\u043e\u0434\u043e\u0431\u0438\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"react-dom")," \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0435 \u0434\u043b\u044f \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043e\u0432, \u0430 \u0434\u043b\u044f \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"React Native")," \u044d\u0442\u043e \u043d\u0435 \u043e\u0431\u0435\u0440\u0442\u043a\u0430 \u0434\u043b\u044f web-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f (\u043a\u0430\u043a Electron), \u043d\u0435\u043b\u044c\u0437\u044f \u043f\u0440\u043e\u0441\u0442\u043e \u0432\u0437\u044f\u0442\u044c \u0438 \u043e\u0431\u0435\u0440\u043d\u0443\u0443\u0442\u044c web-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0430 React \u0438 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u0434\u043b\u044f \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c \u043d\u0443\u0436\u043d\u043e \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u043d\u0430 ",(0,i.kt)("strong",{parentName:"p"},"React Native"),". \u0415\u0441\u043b\u0438 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c web-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0430 React, \u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0447\u0430\u0441\u0442\u0438\u0447\u043d\u043e \u0441 \u043d\u0435\u0433\u043e \u043f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0442\u043a\u0443 \u0438 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432, \u043d\u043e \u0432 \u043e\u0431\u0440\u0430\u0442\u043d\u0443\u044e \u0441\u0442\u043e\u0440\u043e\u043d\u0443 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442, \u0442\u043e \u0435\u0441\u0442\u044c \u0435\u0441\u043b\u0438 \u0432\u044b \u0441\u0440\u0430\u0437\u0443 \u0440\u0430\u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0430 React Native, \u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0438 web-\u0432\u0435\u0440\u0441\u0438\u044e \u0442\u043e\u0436\u0435."))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"react-native-ui-component"},"React Native ui-component"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const App = props => {\n  return (\n    <View>\n      <Text>Hello, World!</Text>\n    </View>\n  );\n}\n\nexport default App;\n")),(0,i.kt)("p",null,"\u0422\u0430\u043a\u043e\u0439 \u043a\u043e\u0434 ui-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u043a\u043e\u043c\u043f\u0438\u043b\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0432 \u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u043a\u043e\u0434 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c, \u043d\u0435 \u0432 js-\u043a\u043e\u0434 \u043a\u0430\u043a \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u0441 \u043e\u0431\u044b\u0447\u043d\u044b\u043c React."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"waterfall",src:n(721).Z,width:"1280",height:"561"})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"react-native-logic"},"React Native logic"),(0,i.kt)("p",null,"\u0412 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 ui-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432, \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043a\u043e\u0434 \u043d\u0435 \u043a\u043e\u043c\u043f\u0438\u043b\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0432 \u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0439, \u0430 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u0435\u0442\u0441\u044f \u0432 js-\u043a\u043e\u0434, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432\u043d\u0443\u0442\u0440\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043c\u043e\u0431\u0438\u043b\u0438\u043d\u0430\u044f \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u043f\u043e\u043d\u0438\u043c\u0430\u043b\u0430 js, \u043d\u0443\u0436\u0435\u043d \u0442\u0430\u043a \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u043c\u044b\u0439 ",(0,i.kt)("strong",{parentName:"p"},"translation bridge"),"."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"create-new-react-native-project"},"Create new React Native project"),(0,i.kt)("h3",{id:"1-install-create-expo-and-react-native-bolierplate"},"1. Install Create Expo and react-native bolierplate"),(0,i.kt)("p",null,"\u041f\u0430\u043a\u0435\u0442 create-expo-app \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u0441\u044f \u0447\u0435\u0440\u0435\u0437 npx \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438, \u0435\u0441\u043b\u0438 \u0435\u0433\u043e \u043d\u0435\u0442."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npx create-expo-app@latest your-app-name")," - \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0441\u0431\u043e\u0440\u043a\u0438 React Native")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"typescript"},"TypeScript"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npx create-expo-app@latest -t expo-template-blank-typescript")," - ... c TypeScript - \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 hot-reload"),(0,i.kt)("li",{parentName:"ul"},"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0430 TypeScript: ",(0,i.kt)("inlineCode",{parentName:"li"},"npx expo customize tsconfig.json")),(0,i.kt)("li",{parentName:"ul"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0444\u0430\u0439\u043b-\u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440: ",(0,i.kt)("inlineCode",{parentName:"li"},"app.d.ts"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tailwind-css"},"Tailwind CSS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn add nativewind")," - \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 nativewind (\u0447\u0442\u043e\u0431\u044b \u0442\u0440\u0430\u043d\u0441\u043f\u0430\u0439\u043b\u0435\u0440 \u043f\u043e\u043d\u0438\u043c\u0430\u043b \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u0438 \u043a\u043e\u043c\u043f\u0438\u043b\u0438\u0440\u043e\u0432\u0430\u043b \u0435\u0433\u043e)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn add -D tailwindcss")," - \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 tailwindcss"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npx tailwind init")," --\x3e ",(0,i.kt)("inlineCode",{parentName:"li"},"tailwind.config.js")," - \u043a\u043e\u043d\u0444\u0438\u0433"),(0,i.kt)("li",{parentName:"ul"},"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u043a\u0435\u0442 ",(0,i.kt)("inlineCode",{parentName:"li"},"nativewind"),", \u0435\u0441\u043b\u0438 typescript \u0431\u0443\u0434\u0435\u0442 \u0440\u0443\u0433\u0430\u0442\u044c\u0441\u044f \u043d\u0430 ",(0,i.kt)("inlineCode",{parentName:"li"},"tailwindcss"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="babel.config.js"',title:'"babel.config.js"'},"module.exports = function(api) {\n  api.cache(true);\n  return {\n    presets: ['babel-preset-expo'],\n    plugins: [\"nativewind/babel\"],\n  };\n};\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="tailwind.config.js"',title:'"tailwind.config.js"'},'/** @type {import(\'tailwindcss\').Config} */\nmodule.exports = {\n  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}\n')),(0,i.kt)("p",null,"\u0427\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442 tailwindcss - \u0443\u043f\u0440\u043e\u0449\u0435\u043d\u0438\u0435 \u0432 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0438 css-\u043c\u0443\u043b\u044c\u0442\u0438\u043a\u043b\u0430\u0441\u0441\u043e\u0432"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.nativewind.dev/quick-starts/expo"},"Docs - nativewind")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { StatusBar } from 'expo-status-bar';\nimport React from 'react';\n- import { StyleSheet, Text, View } from 'react-native';\n+ import { Text, View } from 'react-native';\n\nexport default function App() {\n  return (\n-   <View style={styles.container}>\n+   <View className=\"flex-1 items-center justify-center bg-white\">\n      <Text>Open up App.js to start working on your app!</Text>\n      <StatusBar style=\"auto\" />\n    </View>\n  );\n}\n\n- const styles = StyleSheet.create({\n-   container: {\n-     flex: 1,\n-     backgroundColor: '#fff',\n-     alignItems: 'center',\n-     justifyContent: 'center',\n-   },\n- });\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"\u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c-\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443-web"},"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443 web"),(0,i.kt)("p",null,"\u041d\u0443\u0436\u043d\u043e \u0434\u043e\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u043a\u0435\u0442\u044b \u0434\u043b\u044f web: ",(0,i.kt)("inlineCode",{parentName:"p"},"npx expo install react-native-web react-dom @expo/metro-runtime")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"2-expo-scripts"},"2. Expo scripts"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"yarn start")," - \u0437\u0430\u043f\u0443\u0441\u043a \u0441\u0442\u0430\u0440\u0442\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438, \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0441\u044f \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"web"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn android")," - \u0417\u0430\u043f\u0443\u0441\u043a \u043d\u0430 Android Studio - \u043d\u0443\u0436\u043d\u044b \u043a\u043e\u043d\u0444\u0438\u0433\u0438 (\u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c QR-code)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn ios")," - \u0417\u0430\u043f\u0443\u0441\u043a \u043d\u0430 XCode - \u043d\u0443\u0436\u043d\u044b \u043a\u043e\u043d\u0444\u0438\u0433\u0438 (\u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c QR-code)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"ios-dev": "expo start -c --ios",')," - \u0444\u043b\u0430\u0433 ",(0,i.kt)("inlineCode",{parentName:"li"},"-c")," \u043d\u0443\u0436\u0435\u043d \u0434\u043b\u044f \u043e\u0447\u0438\u0441\u0442\u043a\u0438 \u043a\u0435\u0448\u0430"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn web")," - \u0417\u0430\u043f\u0443\u0441\u043a \u043d\u0430 Web")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u203a Web is waiting on http://localhost:8081\n\n\u203a Using Expo Go\n\u203a Press s \u2502 switch to development build\n\n\u203a Press a \u2502 open Android\n\u203a Press i \u2502 open iOS simulator\n\u203a Press w \u2502 open web\n\n\u203a Press j \u2502 open debugger\n\u203a Press r \u2502 reload app\n\u203a Press m \u2502 toggle menu\n\u203a Press o \u2502 open project code in your editor\n\n\u203a Press ? \u2502 show all commands\n\n")),(0,i.kt)("h2",{id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u043d\u0430-\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445"},"\u0417\u0430\u043f\u0443\u0441\u043a \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445"),(0,i.kt)("h3",{id:"1-\u0432\u0430\u0440\u0438\u0430\u043d\u0442---\u0447\u0435\u0440\u0435\u0437-\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0435-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435-expo-go-\u0434\u043b\u044f-ios-\u0438-android"},'1 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 - \u0447\u0435\u0440\u0435\u0437 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 "Expo GO" \u0434\u043b\u044f iOS \u0438 Android'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'install "Expo Go" app in AppStore and Google Play'),(0,i.kt)("li",{parentName:"ul"},"Scan QR-code")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"2-\u0432\u0430\u0440\u0438\u0430\u043d\u0442---\u0447\u0435\u0440\u0435\u0437-\u0441\u0438\u043c\u0443\u043b\u044f\u0442\u043e\u0440-ios-\u0432-xcode-\u0438-\u0441\u0438\u043c\u043c\u0443\u043b\u044f\u0442\u043e\u0440-android-\u0432-android-studio"},"2 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 - \u0447\u0435\u0440\u0435\u0437 \u0441\u0438\u043c\u0443\u043b\u044f\u0442\u043e\u0440 iOS \u0432 XCode \u0438 \u0441\u0438\u043c\u043c\u0443\u043b\u044f\u0442\u043e\u0440 Android \u0432 Android Studio"),(0,i.kt)("h4",{id:"xcode"},"XCode"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"brew install node")," - \u0443\u0436\u0435 \u0435\u0441\u0442\u044c\n",(0,i.kt)("inlineCode",{parentName:"p"},"brew install watchman")," - \u0447\u0442\u043e \u044d\u0442\u043e ???"),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"android-studio"},"Android Studio"),(0,i.kt)("p",null,"TODO"),(0,i.kt)("hr",null),(0,i.kt)("hr",null),(0,i.kt)("hr",null),(0,i.kt)("hr",null),(0,i.kt)("hr",null),(0,i.kt)("hr",null),(0,i.kt)("hr",null),(0,i.kt)("hr",null),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("h3",{id:"1-\u0432\u0430\u0440\u0438\u0430\u043d\u0442-\u0437\u0430\u043f\u0443\u0441\u043a-dev-\u0441\u0431\u043e\u0440\u043a\u0438-\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-expo-go-quickstart-recommended"},"1 \u0432\u0430\u0440\u0438\u0430\u043d\u0442: \u0417\u0430\u043f\u0443\u0441\u043a dev-\u0441\u0431\u043e\u0440\u043a\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Expo Go Quickstart (recommended)"),(0,i.kt)("p",null,"\u041d\u0435\u043b\u044c\u0437\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u043a\u043e\u0434"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# with npm\nnpx create-expo-app AwesomeProject\n\ncd AwesomeProject\nnpx expo start\n\n# with yarn\nyarn create expo-app AwesomeProject\n\ncd AwesomeProject\nyarn expo start\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"2-\u0432\u0430\u0440\u0438\u0430\u043d\u0442-\u0437\u0430\u043f\u0443\u0441\u043a-dev-\u0441\u0431\u043e\u0440\u043a\u0438-\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-react-native-cli-on-macos"},"2 \u0432\u0430\u0440\u0438\u0430\u043d\u0442: \u0417\u0430\u043f\u0443\u0441\u043a dev-\u0441\u0431\u043e\u0440\u043a\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e React Native CLI on MacOS"),(0,i.kt)("p",null,"\u041c\u043e\u0436\u043d\u043e \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u043a\u043e\u0434, \u0431\u043e\u043b\u0435\u0435 \u043f\u0440\u043e\u0434\u0432\u0438\u043d\u0443\u0442\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u0434\u043b\u044f \u043e\u043f\u044b\u0442\u043d\u044b\u0445 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432, \u043d\u0443\u0436\u043d\u043e \u043f\u0438\u0441\u0430\u0442\u044c \u043a\u043e\u043d\u0444\u0438\u0433\u0438."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# install dev tools\nbrew install node\nbrew install watchman\n\n# install android environment\nbrew install --cask zulu@17\n\n# Get path to where cask was installed to double-click installer\nbrew info --cask zulu@17\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# install react-native cli\nnpm uninstall -g react-native-cli @react-native-community/cli\n\nnpx react-native@latest init AwesomeProject\n\nnpx react-native@X.XX.X init AwesomeProject --version X.XX.X\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"3-\u0432\u0430\u0440\u0438\u0430\u043d\u0442-expo-cli-----deprecated"},"3 \u0432\u0430\u0440\u0438\u0430\u043d\u0442: Expo CLI  --\x3e deprecated"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://expo.dev/"},"https://expo.dev/")," - Expo CLI docs"),(0,i.kt)("p",null,"npm-\u043f\u0430\u043a\u0435\u0442 \u0434\u043b\u044f \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0431\u043e\u0440\u043e\u043a \u043d\u0430 android \u0438 ios \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# install\nsudo npm install -g expo-cli\n\n# uninstall\nsudo npm uninstall -g expo-cli\n\n# check it\nexpo\n")),(0,i.kt)("h3",{id:"\u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f-\u043f\u0440\u043e\u0435\u043a\u0442\u0430-by-expo-cli----deprecated"},"\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0435\u043a\u0442\u0430 by Expo CLI --\x3e deprecated"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# deprecated\nexpo init test-react-native;\n\n\u276f   blank               a minimal app as clean as an empty canvas\n    blank (TypeScript)  same as blank but with TypeScript configuration\n    tabs (TypeScript)   several example screens and tabs using react-navigation and TypeScript\n    ----- Bare workflow -----\n    minimal             bare and minimal, just the essentials to get you started\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"create-new-project"},"Create new project"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yarn create expo-app AwesomeProject\n\ncd AwesomeProject\nyarn expo start\n")),(0,i.kt)("h2",{id:"\u044f\u0437\u044b\u043a\u0438-\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f-\u0432-\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445-\u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430\u0445"},"\u042f\u0437\u044b\u043a\u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430\u0445"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Android"),": Java, Kotlin --\x3e Android Studio"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"iOS"),": Objective-C, Swift --\x3e XCode")),(0,i.kt)("hr",null))}d.isMDXComponent=!0},721:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/photo_2024-05-02_12-41-02-6cb852221fa14bdd8125a46edf890043.jpg"}}]);