"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[9413],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=s(n),d=l,m=k["".concat(p,".").concat(d)]||k[d]||c[d]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4899:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),l=(n(7294),n(3905));const a={title:"Database",sidebar_position:2},o=void 0,i={unversionedId:"backend/db",id:"backend/db",title:"Database",description:"\u0411\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 - \u043d\u0430\u0431\u043e\u0440 \u0434\u0430\u043d\u043d\u044b\u0445, \u0445\u0440\u0430\u043d\u044f\u0449\u0438\u0445\u0441\u044f \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0435\u043d\u043d\u044b\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c",source:"@site/docs/backend/db.md",sourceDirName:"backend",slug:"/backend/db",permalink:"/knowledge-bank/docs/backend/db",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/backend/db.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Database",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/knowledge-bank/docs/backend/api"},next:{title:"Basics",permalink:"/knowledge-bank/docs/backend/nodejs/basics"}},p={},s=[{value:"\u0412\u0438\u0434\u044b \u0411\u0414",id:"\u0432\u0438\u0434\u044b-\u0431\u0434",level:2},{value:"\u0422\u0438\u043f\u044b \u0411\u0414",id:"\u0442\u0438\u043f\u044b-\u0431\u0434",level:2},{value:"\u0420\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0435 (SQL)",id:"\u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0435-sql",level:3},{value:"NoSQL \u0438\u043b\u0438 Not only SQL",id:"nosql-\u0438\u043b\u0438-not-only-sql",level:3},{value:"\u0418\u0435\u0440\u0430\u0440\u0445\u0438\u0447\u0435\u0441\u043a\u0438\u0435",id:"\u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0447\u0435\u0441\u043a\u0438\u0435",level:3},{value:"\u0421\u0423\u0411\u0414",id:"\u0441\u0443\u0431\u0434",level:2},{value:"MySQL",id:"mysql",level:3},{value:"PostgreSQL",id:"postgresql",level:3}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0411\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445")," - \u043d\u0430\u0431\u043e\u0440 \u0434\u0430\u043d\u043d\u044b\u0445, \u0445\u0440\u0430\u043d\u044f\u0449\u0438\u0445\u0441\u044f \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0435\u043d\u043d\u044b\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c "),(0,l.kt)("h2",{id:"\u0432\u0438\u0434\u044b-\u0431\u0434"},"\u0412\u0438\u0434\u044b \u0411\u0414"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u041f\u0440\u043e\u0441\u0442\u044b\u0435")," - \u043e\u0434\u0438\u043d \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0439 \u0444\u0430\u0439\u043b-\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u0418\u0435\u0440\u0430\u0440\u0445\u0438\u0447\u0435\u0441\u043a\u0438\u0435")," - \u043c\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u043e\u0432-\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449 \u0441\u043e \u0432\u0437\u0430\u0438\u043c\u043e\u0441\u0432\u044f\u0437\u044f\u043c\u0438. \u0414\u0440\u0435\u0432\u043e\u0432\u0438\u0434\u043d\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u0421\u0435\u0442\u0435\u0432\u044b\u0435")," - \u0441\u043b\u043e\u0436\u043d\u0430\u044f \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u044f, \u0431\u043e\u043b\u0435\u0435 \u043e\u0434\u043d\u043e\u0433\u043e \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u0442\u0438\u043f\u044b-\u0431\u0434"},"\u0422\u0438\u043f\u044b \u0411\u0414"),(0,l.kt)("h3",{id:"\u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0435-sql"},"\u0420\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0435 (SQL)"),(0,l.kt)("img",{src:"../../../img/backend/sql.png",width:"350",alt:"sql.png"}),(0,l.kt)("p",null,"\u041e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435. \u0422\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u044b\u0435. \u0427\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043e \u0432 \u0432\u0438\u0434\u0435 \u0442\u0430\u0431\u043b\u0438\u0446. \u0411\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u0441\u043e\u0431\u043e\u0439 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0438\u043b\u0438 \u0433\u0440\u0443\u043f\u043f\u0443 \u0444\u0430\u0439\u043b\u043e\u0432.\u0430\n\u0421\u0442\u0430\u0440\u0435\u0439\u0448\u0438\u0439 \u0438 \u0448\u0438\u0440\u043e\u043a\u043e\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u0442\u0438\u043f \u0411\u0414. \u041f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u044f\u0437\u044b\u043a \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 SQL (MySQL)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"SQL")," - Structure query language. \u042f\u0437\u044b\u043a \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432. \u041f\u043e\u044f\u0432\u0438\u043b\u0441\u044f \u0435\u0449\u0451 \u0432 70-\u0445. \u042f\u0437\u044b\u043a \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 (\u044f\u0437\u044b\u043a \u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0441 \u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0411\u0414)."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://proglib.io/p/sql-for-20-minutes"},"https://proglib.io/p/sql-for-20-minutes"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://www.w3schools.com/html/default.asp"},"https://www.w3schools.com/html/default.asp"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://www.w3schools.com/sql/exercise.asp"},"https://www.w3schools.com/sql/exercise.asp")," - \u0422\u0440\u0435\u043d\u0430\u0436\u0435\u0440 SQL"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"nosql-\u0438\u043b\u0438-not-only-sql"},"NoSQL \u0438\u043b\u0438 Not only SQL"),(0,l.kt)("img",{src:"../../../img/backend/no-sql.png",width:"350",alt:"no-sql.png"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u041a\u043b\u044e\u0447-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")," (Redis)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u041a\u043e\u043b\u043e\u043d\u043e\u0447\u043d\u044b\u0435")," (Apache Casandra)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435")," (MongoDB)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u0413\u0440\u0430\u0444\u043e\u0432\u044b\u0435")," (neo4j)")),(0,l.kt)("p",null,"\u041d\u0435\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u043d\u0435\u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0411\u0414. \u0411\u043e\u043b\u0435\u0435 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0438 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043d\u044b\u0435. \u0425\u0440\u0430\u043d\u044f\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0442\u043b\u0438\u0447\u043d\u044b\u0435 \u043e\u0442 \u0442\u0430\u0431\u043b\u0438\u0446. Not only SQL. "),(0,l.kt)("p",null,"\u0413\u0438\u0431\u043a\u043e\u0441\u0442\u044c \u0441\u0445\u0435\u043c \u0438 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u0411\u0414. \u041c\u0430\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u044c. \u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c. \u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0447\u0435\u0441\u043a\u0438\u0435"},"\u0418\u0435\u0440\u0430\u0440\u0445\u0438\u0447\u0435\u0441\u043a\u0438\u0435"),(0,l.kt)("img",{src:"../../../img/backend/structure.png",width:"350",alt:"structure.png"}),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u0421\u0435\u0442\u0435\u0432\u044b\u0435"))),(0,l.kt)("img",{src:"../../../img/backend/network.png",width:"350",alt:"network.png"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u041e\u041e\u041f \u0411\u0414")),(0,l.kt)("li",{parentName:"ul"},"\u041a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u044e \u041e\u041e\u041f.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u0441\u0443\u0431\u0434"},"\u0421\u0423\u0411\u0414"),(0,l.kt)("p",null,"\u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0411\u0414:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MySQL - PHP"),(0,l.kt)("li",{parentName:"ul"},"Oracle Database - Java, Pyton"),(0,l.kt)("li",{parentName:"ul"},"Robomongo - MongoDB"),(0,l.kt)("li",{parentName:"ul"},"PostgreSQL")),(0,l.kt)("h3",{id:"mysql"},"MySQL"),(0,l.kt)("p",null,"\u041d\u0430\u0431\u043e\u0440 \u043f\u0440\u043e\u0441\u0442\u044b\u0445 \u0442\u0430\u0431\u043b\u0438\u0446. \u0422\u0430\u0431\u043b\u0438\u0446\u044b \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0441\u0432\u044f\u0437\u0430\u043d\u044b \u043c\u0435\u0436\u0434\u0443 \u0441\u043e\u0431\u043e\u0439 \u043f\u043e id. \u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u043c\u0438 \u0411\u0414."),(0,l.kt)("h3",{id:"postgresql"},"PostgreSQL"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"PostgreSQL")," - \u0441\u0430\u043c\u0430\u044f \u0441\u043e\u0432\u0435\u0440\u0436\u0435\u043d\u043d\u0430\u044f \u0421\u0423\u0411\u0414, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0438 \u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u0443\u044e \u043c\u043e\u0434\u0435\u043b\u044c, \u0438 \u041e\u041e\u041f."))}c.isMDXComponent=!0}}]);