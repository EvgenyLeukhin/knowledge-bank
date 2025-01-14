"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[9253],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,k=u["".concat(d,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(k,a(a({ref:t},s),{},{components:n})):r.createElement(k,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1254:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={title:"\u0417\u0430\u043f\u0443\u0441\u043a",sidebar_position:2},a=void 0,l={unversionedId:"mobile/react-native/start",id:"mobile/react-native/start",title:"\u0417\u0430\u043f\u0443\u0441\u043a",description:"Expo scripts",source:"@site/docs/mobile/react-native/2-start.md",sourceDirName:"mobile/react-native",slug:"/mobile/react-native/start",permalink:"/knowledge-bank/docs/mobile/react-native/start",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/mobile/react-native/2-start.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u0417\u0430\u043f\u0443\u0441\u043a",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",permalink:"/knowledge-bank/docs/mobile/react-native/install"},next:{title:"Android studio",permalink:"/knowledge-bank/docs/mobile/android-studio"}},d={},p=[{value:"Expo scripts",id:"expo-scripts",level:2},{value:"\u0417\u0430\u043f\u0443\u0441\u043a \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445",id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u043d\u0430-\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445",level:2},{value:"1 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 - \u043d\u0430 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445 \u0447\u0435\u0440\u0435\u0437 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 &quot;Expo GO&quot; \u0434\u043b\u044f iOS \u0438 Android",id:"1-\u0432\u0430\u0440\u0438\u0430\u043d\u0442---\u043d\u0430-\u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0445-\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445-\u0447\u0435\u0440\u0435\u0437-\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0435-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435-expo-go-\u0434\u043b\u044f-ios-\u0438-android",level:3},{value:"2 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 - \u043d\u0430 \u0441\u0438\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0435 \u0432 XCode \u0438 Android Studio",id:"2-\u0432\u0430\u0440\u0438\u0430\u043d\u0442---\u043d\u0430-\u0441\u0438\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0435-\u0432-xcode-\u0438-android-studio",level:3},{value:"XCode",id:"xcode",level:4},{value:"Android Studio",id:"android-studio",level:4}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"expo-scripts"},"Expo scripts"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"yarn start")," - \u0437\u0430\u043f\u0443\u0441\u043a \u0441\u0442\u0430\u0440\u0442\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438, \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0441\u044f \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"web"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"yarn android")," - \u0417\u0430\u043f\u0443\u0441\u043a \u043d\u0430 Android Studio - \u043d\u0443\u0436\u043d\u044b \u043a\u043e\u043d\u0444\u0438\u0433\u0438 (\u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c QR-code)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"yarn ios")," - \u0417\u0430\u043f\u0443\u0441\u043a \u043d\u0430 XCode - \u043d\u0443\u0436\u043d\u044b \u043a\u043e\u043d\u0444\u0438\u0433\u0438 (\u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c QR-code)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"ios-dev": "expo start -c --ios",')," - \u0444\u043b\u0430\u0433 ",(0,o.kt)("inlineCode",{parentName:"li"},"-c")," \u043d\u0443\u0436\u0435\u043d \u0434\u043b\u044f \u043e\u0447\u0438\u0441\u0442\u043a\u0438 \u043a\u0435\u0448\u0430"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"yarn web")," - \u0417\u0430\u043f\u0443\u0441\u043a \u043d\u0430 Web")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u203a Web is waiting on http://localhost:8081\n\n\u203a Using Expo Go\n\u203a Press s \u2502 switch to development build\n\n\u203a Press a \u2502 open Android\n\u203a Press i \u2502 open iOS simulator\n\u203a Press w \u2502 open web\n\n\u203a Press j \u2502 open debugger\n\u203a Press r \u2502 reload app\n\u203a Press m \u2502 toggle menu\n\u203a Press o \u2502 open project code in your editor\n\n\u203a Press ? \u2502 show all commands\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u043d\u0430-\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445"},"\u0417\u0430\u043f\u0443\u0441\u043a \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445"),(0,o.kt)("h3",{id:"1-\u0432\u0430\u0440\u0438\u0430\u043d\u0442---\u043d\u0430-\u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0445-\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445-\u0447\u0435\u0440\u0435\u0437-\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0435-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435-expo-go-\u0434\u043b\u044f-ios-\u0438-android"},'1 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 - \u043d\u0430 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445 \u0447\u0435\u0440\u0435\u0437 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 "Expo GO" \u0434\u043b\u044f iOS \u0438 Android'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'install "Expo Go" app in AppStore and Google Play'),(0,o.kt)("li",{parentName:"ul"},"Scan QR-code")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"2-\u0432\u0430\u0440\u0438\u0430\u043d\u0442---\u043d\u0430-\u0441\u0438\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0435-\u0432-xcode-\u0438-android-studio"},"2 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 - \u043d\u0430 \u0441\u0438\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0435 \u0432 XCode \u0438 Android Studio"),(0,o.kt)("h4",{id:"xcode"},"XCode"),(0,o.kt)("p",null,"\u041e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u043c XCode --\x3e Cmd + , --\x3e Locations --\x3e Command Line Tools --\x3e Select Tools (\u043d\u0443\u0436\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0431\u043e\u0442\u0430\u043b\u043e cli)"),(0,o.kt)("p",null,"\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0439 iOS \u043f\u0440\u043e\u0435\u043a\u0442, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043a\u0430\u043a\u043e\u0439-\u043d\u0438\u0431 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0439 iPhone, \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0432\u0441\u0435 \u043f\u0440\u0430\u0432\u0430."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Finder --\x3e Applications --\x3e XCode --\x3e \u041f\u041a\u041c --\x3e Show Package Contents --\x3e Deleloper --\x3e Applications --\x3e Simulator --\x3e Move to the Applications folder to create startup icon"),(0,o.kt)("li",{parentName:"ul"},"\u0412 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0435 \u043f\u0440\u0438 \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043d\u043e\u043c \u0441\u043a\u0440\u0438\u043f\u0442\u0435 ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn start")," \u043d\u0430\u0436\u0438\u043c\u0430\u0435\u043c ",(0,o.kt)("inlineCode",{parentName:"li"},"i"),". \u041d\u0430 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0439 iPhone \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u0441\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 Expo Go."),(0,o.kt)("li",{parentName:"ul"},"\u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u0434\u043e\u043b\u0436\u043d\u043e \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c\u0441\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0430 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435.")),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"android-studio"},"Android Studio"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.expo.dev/workflow/android-studio-emulator/"},"Add Android path to bash or zzh")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u041e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u043c Android Studio --\x3e \u0422\u0440\u0438 \u0442\u043e\u0447\u043a\u0438 (More actions) --\x3e Virtual Device Manager --\x3e Play"),(0,o.kt)("li",{parentName:"ul"},"\u0412 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0435 \u043f\u0440\u0438 \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043d\u043e\u043c \u0441\u043a\u0440\u0438\u043f\u0442\u0435 ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn start")," \u043d\u0430\u0436\u0438\u043c\u0430\u0435\u043c ",(0,o.kt)("inlineCode",{parentName:"li"},"a"),". "),(0,o.kt)("li",{parentName:"ul"},"\u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u0434\u043e\u043b\u0436\u043d\u043e \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c\u0441\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0430 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435.")),(0,o.kt)("hr",null))}c.isMDXComponent=!0}}]);