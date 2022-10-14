"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9015],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>c});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},k=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,k=m(e,["components","mdxType","originalType","parentName"]),u=o(n),c=l,s=u["".concat(p,".").concat(c)]||u[c]||d[c]||i;return n?a.createElement(s,r(r({ref:t},k),{},{components:n})):a.createElement(s,r({ref:t},k))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=u;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:l,r[1]=m;for(var o=2;o<i;o++)r[o]=n[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6429:(e,t,n)=>{n.r(t),n.d(t,{CODE:()=>k,assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>m,toc:()=>o});var a=n(7462),l=(n(7294),n(3905));const i={title:"\u041a\u043e\u043d\u0441\u043e\u043b\u044c",sidebar_position:2},r=void 0,m={unversionedId:"frontend/other/console",id:"frontend/other/console",title:"\u041a\u043e\u043d\u0441\u043e\u043b\u044c",description:"GIT",source:"@site/docs/frontend/other/console.md",sourceDirName:"frontend/other",slug:"/frontend/other/console",permalink:"/knowledge-bank/docs/frontend/other/console",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/other/console.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u041a\u043e\u043d\u0441\u043e\u043b\u044c",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u044b \u043a\u043e\u0434\u0430",permalink:"/knowledge-bank/docs/frontend/other/code-editors"},next:{title:"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b",permalink:"/knowledge-bank/docs/frontend/other/programs"}},p={},o=[{value:"GIT",id:"git",level:2},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",level:3},{value:"\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439",id:"\u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439",level:3},{value:"\u0412\u0435\u0442\u043a\u0438",id:"\u0432\u0435\u0442\u043a\u0438",level:3},{value:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f",id:"\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f",level:3},{value:"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 / \u041f\u0440\u0438\u043d\u044f\u0442\u0438\u0435",id:"\u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0430--\u043f\u0440\u0438\u043d\u044f\u0442\u0438\u0435",level:3},{value:"Rebase",id:"rebase",level:3},{value:"Squash commits",id:"squash-commits",level:3},{value:"Cherry pick",id:"cherry-pick",level:3},{value:"SSH",id:"ssh",level:2},{value:"VIM",id:"vim",level:2},{value:"CLI",id:"cli",level:2},{value:"\u0410\u0440\u0445\u0438\u0432\u0430\u0446\u0438\u044f \u0444\u0430\u0439\u043b\u043e\u0432",id:"\u0430\u0440\u0445\u0438\u0432\u0430\u0446\u0438\u044f-\u0444\u0430\u0439\u043b\u043e\u0432",level:3},{value:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0439 \u0430\u0440\u0445\u0438\u0432 \u0447\u0435\u0440\u0435\u0437 ssh-\u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b",id:"\u0441\u043a\u0430\u0447\u0430\u0442\u044c-\u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0439-\u0430\u0440\u0445\u0438\u0432-\u0447\u0435\u0440\u0435\u0437-ssh-\u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b",level:3}],k=e=>{let{children:t}=e;return(0,l.kt)("code",{style:{color:"deeppink"}},t)},d={toc:o,CODE:k};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"git"},"GIT"),(0,l.kt)("h3",{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git config --list")," - \u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0439"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},'git config --global user.name "Username"')," - \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e\u0435 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},'git config --global user.email "user@email.com"')," - \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e \u0430\u0434\u0440\u0435\u0441 \u043f\u043e\u0447\u0442\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git config --global push.default simple")," - \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u044b git push. \u0411\u0443\u0434\u0435\u0442 \u043f\u0443\u0448\u0438\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0442\u0435\u043a\u0443\u0449\u0443\u044e \u0432\u0435\u0442\u043a\u0443"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git help <git_command>")," - \u0421\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a \u0434\u043b\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u0433\u0438\u0442-\u043a\u043e\u043c\u0430\u043d\u0434")),(0,l.kt)("h3",{id:"\u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439"},"\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git init (--bare)")," - \u0421\u043e\u0437\u0434\u0430\u0442\u044c (\u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0438\u0441\u0442\u043e\u0440\u0438\u0438, \u0431\u0435\u0437 \u0444\u0430\u0439\u043b\u043e\u0432)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git clone <path> (.)")," - \u0421\u043a\u043b\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c (\u0432 \u0442\u0435\u043a\u0443\u0449\u0443\u044e \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git remote add <rep_name> <path>")," - \u041f\u0440\u0438\u0432\u044f\u0437\u0430\u0442\u044c \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u044b\u0439 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git remote rm <rep_name>")," - \u041e\u0442\u0432\u044f\u0437\u0430\u0442\u044c \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u044b\u0439 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git remote -v")," - \u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438")),(0,l.kt)("h3",{id:"\u0432\u0435\u0442\u043a\u0438"},"\u0412\u0435\u0442\u043a\u0438"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git branch (-v)")," - \u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435 \u0432\u0435\u0442\u043a\u0438 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f (\u0441 \u0438\u043d\u0444\u043e\u0439), \u0442\u0435\u043a\u0443\u0449\u0443\u044e \u0432\u0435\u0442\u043a\u0443"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git branch <branch_name> "),"- \u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0432\u0435\u0442\u043a\u0443"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git checkout <branch_name> "),"- \u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u0432 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u0443\u044e \u0432\u0435\u0442\u043a\u0443"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git checkout (-b) <branch_name>")," - \u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0432\u0435\u0442\u043a\u0443 (\u0438 \u0441\u0440\u0430\u0437\u0443 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u0432 \u043d\u0435\u0451)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git checkout -b <branch_name> <commit_hash>")," - \u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0432\u0435\u0442\u043a\u0443 (\u0438 \u0441\u0440\u0430\u0437\u0443 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u0432 \u043d\u0435\u0451) \u043e\u0442 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u043c\u043c\u0438\u0442\u0430"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git branch -d (-D) <branch_name>")," - \u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u0443\u044e \u0432\u0435\u0442\u043a\u0443 (\u043f\u0440\u0438\u043d\u0443\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git merge <branch_name>")," (--ff-only) - \u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u043b\u0438\u044f\u043d\u0438\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0432\u0435\u0442\u043a\u0438 \u0441 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 (\u043f\u0440\u0438\u043d\u0443\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git merge --abort "),"- \u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u043b\u0438\u044f\u043d\u0438\u0435")),(0,l.kt)("h3",{id:"\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f"},"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git status")," - \u0421\u0442\u0430\u0442\u0443\u0441 \u0444\u0430\u0439\u043b\u043e\u0432"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git add <filename> <filename2> (.)")," - \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0435 (\u0432\u0441\u0435) \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b \u043a \u043a\u043e\u043c\u043c\u0438\u0442\u0443"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git checkout <filename> <filename2>")," - \u0423\u0431\u0440\u0430\u0442\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b \u0438\u0437 \u043a\u043e\u043c\u043c\u0438\u0442\u0430"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git checkout <filename> <commit_hash>")," - \u0412\u0435\u0440\u043d\u0443\u0442\u044c \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0444\u0430\u0439\u043b\u0430, \u043a\u0430\u043a\u043e\u0435 \u043e\u043d\u043e \u0431\u044b\u043b\u043e \u0432 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u043c \u043a\u043e\u043c\u043c\u0438\u0442\u0435"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git checkout -- .")," - \u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043d\u0438\u044f \u0432\u043e \u0432\u0441\u0435\u0445 \u0444\u0430\u0439\u043b\u0430\u0445"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git reset HEAD <filename>")," - \u0415\u0441\u043b\u0438 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u043b\u0438 \u0444\u0430\u0439\u043b, \u0430 \u043f\u043e\u0442\u043e\u043c \u0440\u0435\u0448\u0438\u043b\u0438, \u0447\u0442\u043e \u043d\u0443\u0436\u043d\u043e \u0435\u0433\u043e \u0443\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u043a\u043e\u043c\u043c\u0438\u0442\u0430, \u043d\u043e \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u043d\u0435 \u0443\u0434\u0430\u043b\u044f\u0442\u044c \u0432 \u043d\u0451\u043c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git rm (--cached) <filename>")," - \u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0444\u0430\u0439\u043b \u0438\u0437 \u043a\u043e\u043c\u043c\u0438\u0442\u0430 \u0438 \u0441 \u0434\u0438\u0441\u043a\u0430 (\u043d\u0435 \u0443\u0434\u0430\u043b\u044f\u0442\u044c \u0441 \u0434\u0438\u0441\u043a\u0430), \u0435\u0441\u043b\u0438 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u043b\u0438 \u043d\u0435\u043d\u0443\u0436\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0432 \u043a\u043e\u043c\u043c\u0438\u0442 \u0438 \u0437\u0430\u043a\u043e\u043c\u043c\u0438\u0442\u0438\u043b\u0438 \u0435\u0433\u043e, \u0434\u0430\u043b\u0435\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u043d\u0438\u0436\u0435"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git commit --amend --no-edit")," - \u0418\u0437\u043c\u043d\u0438\u0442\u044c \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u043a\u043e\u043c\u043c\u0438\u0442, \u0431\u0435\u0437 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f, \u0435\u0441\u043b\u0438 \u0443\u0434\u0430\u043b\u044f\u043b\u0438\u0441\u044c \u0438\u043b\u0438 \u0438\u0437\u043c\u0435\u043d\u044f\u043b\u0438\u0441\u044c \u0444\u0430\u0439\u043b\u044b \u0432 \u043a\u043e\u043c\u043c\u0438\u0442\u0435"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},'git commit -m "<commit_message>"')," - \u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043e\u043c\u043c\u0438\u0442"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},'git commit --amend -m "<commit_message>"')," - \u0418\u0437\u043c\u043d\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0438\u0442-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git diff <filename>")," - \u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043d\u0435\u043f\u0440\u043e\u0438\u043d\u0434\u0435\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f (\u0434\u043e git add)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git diff --staged <filename>")," - \u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043f\u0440\u043e\u0438\u043d\u0434\u0435\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f (\u043f\u043e\u0441\u043b\u0435 git add)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git log (-3)")," - \u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043c\u043c\u0438\u0442\u043e\u0432 \u0434\u043e \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e (\u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0445 \u0442\u0440\u0451\u0445)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git log --oneline")," - \u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043c\u043c\u0438\u0442\u043e\u0432 \u0434\u043e \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u0432 \u043e\u0434\u043d\u0443 \u0441\u0442\u0440\u043e\u043a\u0443"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git log --all")," - \u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0432\u0441\u044e \u0438\u0441\u0442\u043e\u0440\u0438\u044e (\u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043e \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git log --oneline --all --graph")," - \u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0432\u0441\u044e \u0438\u0441\u0442\u043e\u0440\u0438\u044e (\u0441 \u0433\u0440\u0430\u0444\u0438\u043a\u043e\u043c)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git show <commit_hash>")," - \u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043a\u0430\u043a\u0438\u0435 \u0431\u044b\u043b\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432 \u044d\u0442\u043e\u043c \u043a\u043e\u043c\u043c\u0438\u0442\u0435"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git cat-file -p <commit_hash>")," - \u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043a\u043e\u043c\u043c\u0438\u0442\u0435"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git checkout <commit_hash>")," - \u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u0432 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u043a\u043e\u043c\u043c\u0438\u0442"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git checkout <branch_name>")," - \u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u0432 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u043a\u043e\u043c\u043c\u0438\u0442 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0432\u0435\u0442\u043a\u0438"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git reset <commit_hash> (--hard)")," - \u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0438\u0441\u0442\u043e\u0440\u0438\u044e \u0434\u043e \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u043c\u043c\u0438\u0442\u0430 (\u043f\u0440\u0438\u043d\u0443\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git clean -f -d")," - \u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043b\u0438\u0448\u043d\u0438\u0435 \u0444\u0430\u0439\u043b\u044b")),(0,l.kt)("h3",{id:"\u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0430--\u043f\u0440\u0438\u043d\u044f\u0442\u0438\u0435"},"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 / \u041f\u0440\u0438\u043d\u044f\u0442\u0438\u0435"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git pull <remote_name> <branch_name>")," - \u041f\u0440\u0438\u043d\u044f\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(k,{mdxType:"CODE"},"git push <remote_name> <branch_name>:<remote_branch_name> (-f)")," - \u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f (\u043f\u0440\u0438\u043d\u0443\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e)")),(0,l.kt)("h3",{id:"rebase"},"Rebase"),(0,l.kt)("p",null,"\u041f\u0435\u0440\u0435\u0431\u0430\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0432\u0435\u0442\u043a\u0438, \u0441\u0434\u0432\u0438\u0433\u0430\u0435\u043c \u043f\u0435\u0440\u0432\u044b\u0439 \u043a\u043e\u043c\u043c\u0438\u0442 \u0434\u043e\u0447\u0435\u0440\u043d\u0435\u0439 \u0432\u0435\u0442\u043a\u0438 \u0432 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0433\u043e \u043a\u043e\u043c\u043c\u0438\u0442\u0430 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0439."),(0,l.kt)("p",null,"\u0410\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e, \u043a\u043e\u0433\u0434\u0430 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u0432\u0435\u0442\u043a\u0430 \u043d\u0430\u043f\u043e\u043b\u043d\u0438\u043b\u0430\u0441\u0442\u044c \u043d\u043e\u0432\u044b\u043c\u0438 \u043a\u043e\u043c\u043c\u0438\u0442\u0430\u043c\u0438 \u043f\u043e\u0441\u043b\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0434\u043e\u0447\u0435\u0440\u043d\u0435\u0439 \u0432\u0435\u0442\u043a\u0438 \u0438 \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u043f\u0435\u0440\u0435\u0431\u0430\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0431\u043b\u0430\u0433\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0438\u0441\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0432\u0441\u0435 \u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u044b, \u043d\u0430\u0445\u043e\u0434\u044f\u0441\u044c \u0432 \u0434\u043e\u0447\u0435\u0440\u043d\u0435\u0439 \u0432\u0435\u0442\u043a\u0435."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0435\u043c\u0441\u044f \u0432 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0443\u044e \u0432\u0435\u0442\u043a\u0443"),(0,l.kt)(k,{mdxType:"CODE"},"git checkout <parent_brunch_name>")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u0417\u0430\u0431\u0438\u0440\u0430\u0435\u043c \u0432\u0441\u0435 \u043d\u043e\u0432\u044b\u0435 \u043a\u043e\u043c\u043c\u0438\u0442\u044b"),(0,l.kt)(k,{mdxType:"CODE"},"git pull origin <parent_brunch_name>")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0435\u043c\u0441\u044f \u0432 \u0434\u043e\u0447\u0435\u0440\u043d\u044e\u044e \u0432\u0435\u0442\u043a\u0443"),(0,l.kt)(k,{mdxType:"CODE"},"git checkout <child_brunch_name>")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u041f\u0435\u0440\u0435\u0431\u0430\u0437\u0438\u0440\u0443\u0435\u043c\u0441\u044f \u0432 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0443\u044e \u0432\u0435\u0442\u043a\u0443. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u043c\u043e\u0433\u0443\u0442 \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u0442\u044c \u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u0440\u0430\u0437\u0440\u0435\u0448\u0430\u0442\u044c"),(0,l.kt)(k,{mdxType:"CODE"},"git rebase <parent_brunch_name>")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u0420\u0430\u0437\u0440\u0435\u0448\u0430\u0435\u043c \u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u044b, \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u043c, \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b \u0432 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u0435"),(0,l.kt)(k,{mdxType:"CODE"},"git add <conflict_file_name>")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0435\u043c \u043f\u0435\u0440\u0435\u0431\u0430\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 (5 \u0438 6 \u043f\u0443\u043d\u043a\u0442\u044b \u043c\u043e\u0433\u0443\u0442 \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c\u0441\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437)"),(0,l.kt)(k,{mdxType:"CODE"},"git rebase --continue")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u0415\u0441\u043b\u0438 \u0432\u0441\u0435 \u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u044b \u0440\u0435\u0448\u0435\u043d\u044b \u0438 \u043f\u0435\u0440\u0435\u0431\u0430\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u043a\u043e\u043d\u0447\u0435\u043d\u043e, \u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0444\u043e\u0440\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e \u043f\u0443\u0448\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0434\u043e\u0447\u0435\u0440\u043d\u0435\u0439 \u0432\u0435\u0442\u043a\u0438"),(0,l.kt)(k,{mdxType:"CODE"},"git push origin -f"))),(0,l.kt)("h3",{id:"squash-commits"},"Squash commits"),(0,l.kt)("p",null,"\u0421\u0445\u043b\u043e\u043f\u044b\u0432\u0430\u043d\u0438\u0435 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043a\u043e\u043c\u043c\u0438\u0442\u043e\u0432 \u0432 \u043e\u0434\u0438\u043d."),(0,l.kt)("p",null,"\u0410\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e, \u043a\u043e\u0433\u0434\u0430 \u043c\u044b \u0438\u043c\u0435\u0435\u043c \u043c\u043d\u043e\u0433\u043e \u043d\u0435\u043f\u043e\u043d\u044f\u0442\u043d\u044b\u0445 \u043a\u043e\u043c\u043c\u0438\u0442\u043e\u0432 \u0432 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0438 \u0445\u043e\u0442\u0438\u043c \u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043e\u0434\u0438\u043d \u043f\u043e\u043d\u044f\u0442\u043d\u044b\u0439, \u043a\u043e\u0433\u0434\u0430 \u0440\u0430\u0431\u043e\u0442\u0430 \u043f\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044e \u043d\u043e\u0432\u043e\u0433\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u0430 \u0443\u0436\u0435 \u0437\u0430\u043a\u043e\u043d\u0447\u0435\u043d\u0430, \u0438 \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u0432 \u0438\u0441\u0442\u043e\u0440\u0438\u0438 \u043e\u0441\u0442\u0430\u043d\u0435\u0442\u0441\u044f \u043e\u0434\u0438\u043d \u043f\u043e\u043d\u044f\u0442\u044b\u0439 \u043a\u043e\u043c\u043c\u0438\u0442."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u0414\u0435\u043b\u0430\u0435\u043c \u0440\u0435\u0431\u0435\u0439\u0437 \u0432\u0435\u0442\u043a\u0438 (\u0438\u043d\u0442\u0435\u043b\u0435\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0439), \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b \u043c\u043e\u043c\u0435\u043d\u0442\u044b, \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0435 \u0432\u044b\u0448\u0435.")),(0,l.kt)(k,{mdxType:"CODE"},"git rebase -i <parent_brunch_name>")," ",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1. pick\n2. pick -&gt; s\n3. pick -&gt; s\n...\n10. pick -&gt; s\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u041c\u0435\u043d\u044f\u0435\u043c \u0432 vim pick -",">"," s (\u0438\u043b\u0438 squash), \u043a\u0440\u043e\u043c\u0435 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u043a\u043e\u043c\u043c\u0438\u0442\u0430")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'\u041f\u0438\u0448\u0435\u043c \u0444\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0439 commit-message\n"Add new feature"')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u0424\u043e\u0440\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e \u043f\u0443\u0448\u0438\u043c \u044d\u0442\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f"),(0,l.kt)(k,{mdxType:"CODE"},"git push origin -f"))),(0,l.kt)("h3",{id:"cherry-pick"},"Cherry pick"),(0,l.kt)(k,{mdxType:"CODE"},"git cherry-pick <commit-hash>")," - \u0412\u043b\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u043c\u043c\u0438\u0442\u0430 \u0432 \u0442\u0435\u043a\u0443\u0449\u0443\u044e \u0432\u0435\u0442\u043a\u0443",(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"ssh"},"SSH"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u0412\u043e \u0432\u0440\u0435\u043c\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 Git \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u043c OpenSSH-\u043a\u043b\u0438\u0435\u043d\u0442"),(0,l.kt)("li",{parentName:"ol"},"\u0412 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u041e\u0421 \u0441\u043e\u0437\u0434\u0430\u0451\u043c \u043f\u0430\u043f\u043a\u0443 .ssh"),(0,l.kt)("li",{parentName:"ol"},"\u0412 \u044d\u0442\u043e\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0438\u0438 \u0441\u043e\u0437\u0434\u0430\u0451\u043c \u0444\u0430\u0439\u043b config \u0431\u0435\u0437 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0431\u0443\u0434\u0435\u0442 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0441\u043f\u0438\u0441\u043e\u043a \u0445\u043e\u0441\u0442\u043e\u0432.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# github.com\nHost github.com\nPreferredAuthentications publickey\nIdentityFile ~/.ssh/id_rsa\n\n# gitlab.com\nHost gitlab.com\nPreferredauthentications publickey\nIdentityFile ~/.ssh/id_rsa\n\n// old\n# github.com\nHostName github.com\nUser git\nAddKeysToAgent yes\nPubkeyAuthentication yes\nIdentityFile ~/.ssh/id_rsa\nPreferredAuthentications publickey\n\n# Some site\nHost some_server\nHostname 192.168.12.12\n# gitLab.com\nHost gitlab.com\nRSAAuthentication yes\nIdentityFile ~/.ssh/id_rsa\n\n# git.codenetix.com\nHost git.codenetix.com\nRSAAuthentication yes\nIdentityFile ~/.ssh/id_rsa\n\n# github.com\nHost github.com\nRSAAuthentication yes\nIdentityFile ~/.ssh/id_rsa\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u041f\u0438\u0448\u0435\u043c \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u0432 \u044d\u0442\u043e\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u0434\u043b\u044f \u0433\u0438\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u043a\u043b\u044e\u0447\u0435\u0439 ",(0,l.kt)("inlineCode",{parentName:"li"},'ssh-keygen -C "Jenya@FERMA21"')),(0,l.kt)("li",{parentName:"ol"},"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043e\u0433\u043e \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430 ",(0,l.kt)("inlineCode",{parentName:"li"},"id_rsa.pub")," \u0432 \u043a\u043e\u043d\u0435\u0446 \u0441\u0442\u0440\u043e\u043a\u0438 \u0444\u0430\u0439\u043b\u0430 ",(0,l.kt)("inlineCode",{parentName:"li"},".ssh/autorized_keys")," \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435"),(0,l.kt)("li",{parentName:"ol"},"\u041c\u043e\u0436\u043d\u043e \u0437\u0430\u0445\u043e\u0434\u0438\u0442\u044c \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439 ",(0,l.kt)("inlineCode",{parentName:"li"},"ssh some_server")," \u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0433\u0438\u0442\u043e\u043c")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"vim"},"VIM"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"vim <filename>")," - \u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0444\u0430\u0439\u043b\u0430"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"cat <filename>")," - \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0444\u0430\u0439\u043b\u0430"),(0,l.kt)("p",null,"\u0420\u0435\u0436\u0438\u043c \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f: ",(0,l.kt)("inlineCode",{parentName:"p"},"i")," \u0438\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"Insert")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":w - save\n:w! - save readonly file\n:q - quit\n:wq - save and quit\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"cli"},"CLI"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pwd")," - \u0442\u0435\u043a\u0443\u0449\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clear")," || ",(0,l.kt)("inlineCode",{parentName:"li"},"cls")," - \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u044d\u043a\u0440\u0430\u043d (Crtl + L)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ls")," - \u0430\u043d\u0430\u043b\u043e\u0433 DIR"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ls -a")," - \u0432\u0441\u0435 \u0444\u0430\u0439\u043b\u044b"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ls -1")," - ... \u0432 \u043e\u0434\u0438\u043d \u0441\u0442\u043e\u043b\u0431\u0435\u0446"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"touch")," - \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0444\u0430\u0439\u043b\u044b"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rm")," - \u0443\u0434\u0430\u043b\u0438\u0442\u044c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cp")," - \u0430\u043d\u0430\u043b\u043e\u0433 copy"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mv")," - \u0430\u043d\u0430\u043b\u043e\u0433 move"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mkdir")," - \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rmdir")," - \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0443\u0441\u0442\u0443\u044e \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rmdir -rf")," - \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043d\u0435\u043f\u0443\u0441\u0442\u0443\u044e \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cat")," filename - \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0444\u0430\u0439\u043b\u0430"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"start")," . - \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u0442 \u0442\u0435\u043a\u0443\u0449\u0443\u044e \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e \u0432 \u043f\u0440\u043e\u0432\u043e\u0434\u043d\u0438\u043a\u0435"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"del")," - \u0443\u0434\u0430\u043b\u0438\u0442\u044c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"move")," - \u043f\u0435\u0440\u0435\u043c\u0435\u0441\u0442\u0438\u0442\u044c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rename")," - \u043f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u0442\u044c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"copy")," - \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"xcopy")," - \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0444\u0430\u0439\u043b\u044b \u0432 \u043f\u0430\u043f\u043a\u0435"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"color")," - \u0446\u0432\u0435\u0442"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tree")," - \u0434\u0435\u0440\u0435\u0432\u043e"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dir")," - \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ipconfig")," - \u0441\u0435\u0442\u044c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"help")," - \u043f\u043e\u043c\u043e\u0449\u044c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"echo")," - \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435")),(0,l.kt)("h3",{id:"\u0430\u0440\u0445\u0438\u0432\u0430\u0446\u0438\u044f-\u0444\u0430\u0439\u043b\u043e\u0432"},"\u0410\u0440\u0445\u0438\u0432\u0430\u0446\u0438\u044f \u0444\u0430\u0439\u043b\u043e\u0432"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"tar -cf ~/some_arh.tar folder/")),(0,l.kt)("p",null,"\u0438\u043b\u0438"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"tar -czf ~/some_arh.tgz folder/")," - \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0430\u0440\u0445\u0438\u0432\u0430 \u0441 \u0441\u0436\u0430\u0442\u0438\u0435\u043c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tar")," - \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0430\u0440\u0445\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-cf")," - \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u0435\u0441\u0436\u0438\u043c\u0430\u0435\u043c\u044b\u0439 \u0430\u0440\u0445\u0438\u0432"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"~/some_arh.tar")," - \u0444\u0430\u0439\u043b \u0430\u0440\u0445\u0438\u0432\u0430"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"folder/")," - \u043a\u0430\u043a\u0443\u044e \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e \u0430\u0440\u0445\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u0442\u044c")),(0,l.kt)("h3",{id:"\u0441\u043a\u0430\u0447\u0430\u0442\u044c-\u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0439-\u0430\u0440\u0445\u0438\u0432-\u0447\u0435\u0440\u0435\u0437-ssh-\u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b"},"\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0439 \u0430\u0440\u0445\u0438\u0432 \u0447\u0435\u0440\u0435\u0437 ssh-\u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"scp okcenter:~/some-arh.tar .")),(0,l.kt)("p",null,"\u0438\u043b\u0438"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"scp okcenter:~/some-arh.tgz")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scp")," - \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0441\u043a\u0430\u0447\u0430\u0442\u044c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"okcenter")," - ssh-\u0445\u043e\u0441\u0442"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":~/some_arh.tar")," - \u043f\u0443\u0442\u044c \u0434\u043e \u0444\u0430\u0439\u043b\u0430"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".")," - \u0441\u043a\u0430\u0447\u0430\u0442\u044c \u0432 \u0442\u0435\u043a\u0443\u0449\u0443\u044e \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e")))}u.isMDXComponent=!0}}]);