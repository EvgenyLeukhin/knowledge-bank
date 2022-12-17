"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7124],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),u=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,k=m["".concat(p,".").concat(c)]||m[c]||s[c]||o;return n?l.createElement(k,r(r({ref:t},d),{},{components:n})):l.createElement(k,r({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var u=2;u<o;u++)r[u]=n[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8219:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var l=n(7462),a=(n(7294),n(3905));const o={title:"\u0424\u043e\u0440\u043c\u044b",sidebar_position:3},r=void 0,i={unversionedId:"frontend/html/forms",id:"frontend/html/forms",title:"\u0424\u043e\u0440\u043c\u044b",description:"\u041a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0444\u043e\u0440\u043c\u044b",source:"@site/docs/frontend/html/forms.md",sourceDirName:"frontend/html",slug:"/frontend/html/forms",permalink:"/knowledge-bank/docs/frontend/html/forms",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/html/forms.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u0424\u043e\u0440\u043c\u044b",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f",permalink:"/knowledge-bank/docs/frontend/html/images"},next:{title:"Head-\u0442\u044d\u0433\u0438 \u0438 SEO",permalink:"/knowledge-bank/docs/frontend/html/head"}},p={},u=[{value:"\u041a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0444\u043e\u0440\u043c\u044b",id:"\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440-\u0444\u043e\u0440\u043c\u044b",level:2},{value:"\u0422\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0435 \u043f\u043e\u043b\u044f",id:"\u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0435-\u043f\u043e\u043b\u044f",level:2},{value:"\u0421\u043f\u0438\u0441\u043a\u0438",id:"\u0441\u043f\u0438\u0441\u043a\u0438",level:2},{value:"select",id:"select",level:3},{value:"datalist",id:"datalist",level:3},{value:"Checkbox \u0438 radio",id:"checkbox-\u0438-radio",level:2},{value:"\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043c\u044f",id:"\u0434\u0430\u0442\u0430-\u0438-\u0432\u0440\u0435\u043c\u044f",level:2},{value:"\u041a\u043d\u043e\u043f\u043a\u0438",id:"\u043a\u043d\u043e\u043f\u043a\u0438",level:2},{value:"button",id:"button",level:3},{value:"input",id:"input",level:3},{value:"Range, &lt;meter&gt; \u0438 &lt;progress&gt;",id:"range-meter-\u0438-progress",level:2},{value:"JS-\u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044b",id:"js-\u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044b",level:2},{value:"Pattern",id:"pattern",level:2}],d={toc:u};function s(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,l.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440-\u0444\u043e\u0440\u043c\u044b"},"\u041a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0444\u043e\u0440\u043c\u044b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<form action="https://some-url.ru" method="post | get" autocomplete>\n  \x3c!-- \u041d\u0430\u0431\u043e\u0440 \u043f\u043e\u043b\u0435\u0439 1 --\x3e\n  <fieldset>\n    \x3c!-- \u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u043d\u0430\u0431\u043e\u0440\u0430 \u043f\u043e\u043b\u0435\u0439 --\x3e\n    <legend><label for="field-1">\u0413\u0440\u0443\u043f\u043f\u0430 \u043f\u043e\u043b\u0435\u0439 1</label></legend>\n\n    \x3c!-- \u041a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u043f\u043e\u043b\u044f-1 --\x3e\n    <div class="form-group">\n      \x3c!-- \u043b\u0435\u0439\u0431\u043b --\x3e\n      <label for="field-1">Field-1 title</label>\n\n      \x3c!-- \u0441\u0430\u043c\u043e \u043f\u043e\u043b\u0435 --\x3e\n      <input id=\'field-1\' type="text" name="field-1" placeholder="Something1" tabindex="1" required />\n    </div>\n\n    \x3c!-- \u041a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u043f\u043e\u043b\u044f-2 --\x3e\n    <div class="form-group">\n      <label for="field-2">Field-2 title</label>\n      <input id=\'field-2\' type="text" name="field-2" placeholder="Something2" tabindex="2" />\n    </div>\n  </fieldset>\n\n  \x3c!-- \u041d\u0430\u0431\u043e\u0440 \u043f\u043e\u043b\u0435\u0439 2 --\x3e\n  <fieldset>\n    <legend><label for="field-2">\u0413\u0440\u0443\u043f\u043f\u0430 \u043f\u043e\u043b\u0435\u0439 2</label></legend>\n    ...\n  </fieldset>\n\n  \x3c!-- \u041d\u0430\u0431\u043e\u0440 \u043f\u043e\u043b\u0435\u0439 3 --\x3e\n  <fieldset>\n    <legend><label for="field-3">\u0413\u0440\u0443\u043f\u043f\u0430 \u043f\u043e\u043b\u0435\u0439 3</label></legend>\n    ...\n  </fieldset>\n\n  \x3c!-- \u041a\u043d\u043e\u043f\u043a\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u0444\u043e\u0440\u043c\u044b --\x3e\n  <button type="reset">\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c</button>\n  <button type="submit">\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c</button>\n</form>\n\n')),(0,a.kt)("form",{action:"https://some-url.ru",method:"post",autocomplete:!0},(0,a.kt)("fieldset",null,(0,a.kt)("legend",null,(0,a.kt)("label",{for:"field-1"},"\u041a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0444\u043e\u0440\u043c\u044b")),(0,a.kt)("div",{class:"form-group"},(0,a.kt)("label",{for:"field-1"},"Field-1 title"),"\xa0",(0,a.kt)("input",{id:"field-1",type:"text",name:"field-1",placeholder:"Something1",required:!0,autofocus:!0})),(0,a.kt)("div",{class:"form-group"},(0,a.kt)("label",{for:"field-2"},"Field-2 title"),"\xa0",(0,a.kt)("input",{id:"field-2",type:"text",name:"field-2",placeholder:"Something2"}))),(0,a.kt)("button",{type:"reset"},"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"),(0,a.kt)("button",{type:"submit"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0435-\u043f\u043e\u043b\u044f"},"\u0422\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0435 \u043f\u043e\u043b\u044f"),(0,a.kt)("p",null,"\u041f\u0440\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u0430\u044f \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043d\u0430\u044f \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f. \u0415\u0439 \u043c\u043e\u0436\u043d\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0430\u0442\u0440\u0438\u0431\u0443\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"pattern"),", \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<input type="text" patern="[\u0410-\u042f\u0430-\u044f\u0401\u0451]"/> - \u041f\u0440\u043e\u0441\u0442\u043e\u0435 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435\n<input type="number" /> - \u0426\u0438\u0444\u0440\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435\n<input type="password" /> - \u041f\u043e\u043b\u0435 \u043f\u0430\u0440\u043e\u043b\u044f\n<input type="email" /> - \u041f\u043e\u043b\u0435 email\n<input type="url" /> - \u041f\u043e\u043b\u0435 url\n<input type="tel" placeholder="+7-XXX-XXX-XXXX" patern="+7-[0-9]{3}-[0-9]{3}-[0-9]{4}"/> - \u041f\u043e\u043b\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430\n<input type="search" /> - \u041f\u043e\u043b\u0435 \u043f\u043e\u0438\u0441\u043a\u0430\n<input type="color" /> - \u0426\u0432\u0435\u0442\n<input type="file" /> - \u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u0430\u0439\u043b \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\n<textarea rows="10" cols="45"></textarea> - \u0422\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435\n')),(0,a.kt)("input",{type:"text",patern:"[\u0410-\u042f\u0430-\u044f\u0401\u0451]",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442"}),"\xa0",(0,a.kt)("input",{type:"number",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e"}),"\xa0",(0,a.kt)("input",{type:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"}),"\xa0",(0,a.kt)("input",{type:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email"}),"\xa0",(0,a.kt)("input",{type:"url",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 url"}),"\xa0",(0,a.kt)("input",{type:"tel",placeholder:"+7-XXX-XXX-XXXX",patern:"+7-[0-9]{3}-[0-9]{3}-[0-9]{4}"}),"\xa0",(0,a.kt)("input",{type:"search",placeholder:"\u041f\u043e\u0438\u0441\u043a ..."}),"\xa0",(0,a.kt)("input",{type:"color"}),"\xa0",(0,a.kt)("input",{type:"file"}),"\xa0",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("textarea",{rows:"10",cols:"45",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u0441\u043f\u0438\u0441\u043a\u0438"},"\u0421\u043f\u0438\u0441\u043a\u0438"),(0,a.kt)("h3",{id:"select"},"select"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<label for="year-id">\u0413\u043e\u0434 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f:</label>\n\n<select name="year" id="year-id">\n  \x3c!-- optgroup - \u0413\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430 \u043e\u043f\u0448\u0438\u043d\u043e\u0432 --\x3e\n  <optgroup label="80-\u0435">\n    <option>1981 \u0433\u043e\u0434</option>\n    <option>1982 \u0433\u043e\u0434</option>\n    <option>1983 \u0433\u043e\u0434</option>\n  </optgroup> \n  <optgroup label="90-\u0435">\n    <option>1991 \u0433\u043e\u0434</option>\n    <option>1992 \u0433\u043e\u0434</option>\n    <option>1993 \u0433\u043e\u0434</option>\n  </optgroup> \n</select>\n')),(0,a.kt)("label",{for:"year-id"},"\u0413\u043e\u0434 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f:"),"\xa0",(0,a.kt)("select",{name:"year",id:"year-id"},(0,a.kt)("optgroup",{label:"80-\u0435"},(0,a.kt)("option",null,"1981 \u0433\u043e\u0434"),(0,a.kt)("option",null,"1982 \u0433\u043e\u0434"),(0,a.kt)("option",null,"1983 \u0433\u043e\u0434")),(0,a.kt)("optgroup",{label:"90-\u0435"},(0,a.kt)("option",null,"1991 \u0433\u043e\u0434"),(0,a.kt)("option",null,"1992 \u0433\u043e\u0434"),(0,a.kt)("option",null,"1993 \u0433\u043e\u0434"))),(0,a.kt)("h3",{id:"datalist"},"datalist"),(0,a.kt)("p",null,"\u041a\u0430\u043a select, \u0442\u043e\u043b\u044c\u043a\u043e \u043c\u043e\u0436\u043d\u043e \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043d\u0435\u0442 \u0432 option. \u0421\u0435\u043b\u0435\u043a\u0442 \u0441 \u043f\u043e\u0438\u0441\u043a\u043e\u043c."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<label for="education-input">\u0412\u0430\u0448\u0435 \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435</label>&nbsp;\n<input type="text" list="education" name="education" id="education-input" />\n\n\x3c!-- \u0421\u0432\u044f\u0437\u044c \u0447\u0435\u0440\u0435\u0437 id --\x3e\n<datalist id="education">\n  <option value="\u0421\u0440\u0435\u0434\u043d\u0435\u0435 \u043d\u0435\u043f\u043e\u043b\u043d\u043e\u0435">\n  <option value="\u0421\u0440\u0435\u0434\u043d\u0435\u0435">\n  <option value="\u0421\u0440\u0435\u0434\u043d\u0435-\u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0435">\n  <option value="\u0412\u044b\u0441\u0448\u0435\u0435 \u043d\u0435\u043f\u043e\u043b\u043d\u043e\u0435">\n  <option value="\u0412\u044b\u0441\u0448\u0435\u0435(\u0431\u0430\u043a\u0430\u043b\u0430\u0432\u0440)">\n  <option value="\u0412\u044b\u0441\u0448\u0435\u0435" selected="selected">\n  <option value="\u0412\u044b\u0441\u0448\u0435\u0435(\u043c\u0430\u0433\u0438\u0441\u0442\u0440)">\n</datalist>\n')),(0,a.kt)("label",{for:"education-input"},"\u0412\u0430\u0448\u0435 \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),"\xa0",(0,a.kt)("input",{type:"text",list:"education",name:"education",id:"education-input"}),(0,a.kt)("datalist",{id:"education"},(0,a.kt)("option",{value:"\u0421\u0440\u0435\u0434\u043d\u0435\u0435 \u043d\u0435\u043f\u043e\u043b\u043d\u043e\u0435"}),(0,a.kt)("option",{value:"\u0421\u0440\u0435\u0434\u043d\u0435\u0435"}),(0,a.kt)("option",{value:"\u0421\u0440\u0435\u0434\u043d\u0435-\u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0435"}),(0,a.kt)("option",{value:"\u0412\u044b\u0441\u0448\u0435\u0435 \u043d\u0435\u043f\u043e\u043b\u043d\u043e\u0435"}),(0,a.kt)("option",{value:"\u0412\u044b\u0441\u0448\u0435\u0435(\u0431\u0430\u043a\u0430\u043b\u0430\u0432\u0440)"}),(0,a.kt)("option",{value:"\u0412\u044b\u0441\u0448\u0435\u0435"}),(0,a.kt)("option",{value:"\u0412\u044b\u0441\u0448\u0435\u0435(\u043c\u0430\u0433\u0438\u0441\u0442\u0440)"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"checkbox-\u0438-radio"},"Checkbox \u0438 radio"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Checkbox --\x3e\n<input type="checkbox" name="moscow" id="moscow-id" value="1">\n<label for="moscow-id">\u042f \u044f\u0432\u043b\u044f\u044e\u0441\u044c \u0433\u0440\u0430\u0436\u0434\u0430\u043d\u0438\u043d\u043e\u043c \u0420\u0424</label>\n\n\x3c!-- Radio --\x3e\n<h3>\u0412\u0430\u0448 \u0432\u043e\u0437\u0440\u0430\u0441\u0442:</h3>\n<label>\n  <input type="radio" name="age" value="0-17" />\n  <span>0-17</span>\n</label>\n<label>\n  <input type="radio" name="age" value="18-35" />\n  <span>18-35</span>\n</label>\n<label>\n  <input type="radio" name="age" value="35-60" />\n  <span>35-60</span>\n</label>\n<label>\n  <input type="radio" name="age" value="over60" disabled />\n  <span>\u0431\u043e\u043b\u0435\u0435 60 (disabled)</span>\n</label>\n')),(0,a.kt)("input",{type:"checkbox",name:"moscow",id:"moscow-id",value:"1"}),"\xa0",(0,a.kt)("label",{for:"moscow-id"},"\u042f\u0432\u043b\u044f\u044e\u0441\u044c \u0433\u0440\u0430\u0436\u0434\u0430\u043d\u0438\u043d\u043e\u043c \u0420\u0424"),(0,a.kt)("h3",null,"\u0412\u0430\u0448 \u0432\u043e\u0437\u0440\u0430\u0441\u0442:"),(0,a.kt)("label",null,(0,a.kt)("input",{type:"radio",name:"age",value:"0-17"}),(0,a.kt)("span",null,"0-17")),"\xa0",(0,a.kt)("label",null,(0,a.kt)("input",{type:"radio",name:"age",value:"18-35"}),(0,a.kt)("span",null,"18-35")),"\xa0",(0,a.kt)("label",null,(0,a.kt)("input",{type:"radio",name:"age",value:"35-60"}),(0,a.kt)("span",null,"35-60")),"\xa0",(0,a.kt)("label",null,(0,a.kt)("input",{type:"radio",name:"age",value:"over60",disabled:!0}),(0,a.kt)("span",null,"\u0431\u043e\u043b\u0435\u0435 60 (disabled)")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u0434\u0430\u0442\u0430-\u0438-\u0432\u0440\u0435\u043c\u044f"},"\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043c\u044f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<input type="date" min="1980-01-01" max="2145-01-08" value="2022-01-01" /> - \u041f\u043e\u043b\u043d\u0430\u044f \u0434\u0430\u0442\u0430\n<input type="month" /> - \u0412\u044b\u0431\u043e\u0440 \u043c\u0435\u0441\u044f\u0446\u0430\n<input type="week" /> - \u0412\u044b\u0431\u043e\u0440 \u043d\u0435\u0434\u0435\u043b\u0438\n')),(0,a.kt)("input",{type:"date",min:"1980-01-01",max:"2145-01-08",value:"2022-01-01"}),"\xa0",(0,a.kt)("input",{type:"month"}),"\xa0",(0,a.kt)("input",{type:"week"}),"\xa0",(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u043a\u043d\u043e\u043f\u043a\u0438"},"\u041a\u043d\u043e\u043f\u043a\u0438"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u041c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c button --\x3e\n<button type="submit">\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c</button>\n<button type="reset">\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c</button>\n\n\x3c!-- \u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e, \u0447\u0442\u043e button \u043c\u043e\u0436\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u043d\u0442 --\x3e\n<button type="submit">\n  <img src="../pict/phone.png" width="35" alt="button-img">\n</button>\n\n\n\x3c!-- \u041c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c input \u0441 type --\x3e\n<input type="submit" value="\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c" />\n<input type="reset" value="\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c" />\n\n\x3c!-- image \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043a\u0430\u043a submit, \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0449\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0434\u043e\u043f. \u043f\u043e\u043b\u044f (x \u0438 y), \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b \u043a\u043b\u0438\u043a\u0430 \u043f\u043e \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0435 --\x3e\n<input type="image" src="img_submit.gif" alt="Submit" width="48" height="48" />\n')),(0,a.kt)("h3",{id:"button"},"button"),(0,a.kt)("input",{type:"submit",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"}),(0,a.kt)("input",{type:"reset",value:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"}),(0,a.kt)("h3",{id:"input"},"input"),(0,a.kt)("input",{type:"submit",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"}),(0,a.kt)("input",{type:"reset",value:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"range-meter-\u0438-progress"},"Range, ","<","meter",">"," \u0438 ","<","progress",">"),(0,a.kt)("p",null,"range, ","<","meter",">"," \u0438 ","<","progress",">"," \u043f\u043e\u0445\u043e\u0436\u0438\u0435 \u043f\u043e \u0441\u043c\u044b\u0441\u043b\u0443 \u0442\u044d\u0433\u0438. \u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442 \u0448\u043a\u0430\u043b\u0443 \u0441 \u0438\u043d\u0434\u0438\u043a\u0430\u0446\u0438\u0435\u0439."),(0,a.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043d\u043d\u043e\u0441\u0442\u0438 \u0437\u0430\u0434\u0430\u0447\u0438. \u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0447\u0435\u0440\u0435\u0437 JavaScript."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"range")," - \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u043f\u043e\u043b\u0437\u0443\u043d\u043e\u043a, \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<meter>")," - \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0432\u044b\u0432\u043e\u0434\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e\u043c \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0435. \u041f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0447\u0438\u0441\u043b\u043e\u0432\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 \u043f\u043e\u0438\u0441\u043a\u0430, \u043e\u0431\u044a\u0451\u043c\u0430 \u0436\u0438\u0434\u043a\u043e\u0441\u0442\u0438, \u0434\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438 \u0434\u0440)."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<progress>")," - \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0444\u043e\u0442\u043e)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<h3>Range</h3>\n<input id="range_id" type="range" value="10" step="0.1" />\n\n\x3c!-- \u0412\u044b\u0432\u043e\u0434 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 (\u0447\u0435\u0440\u0435\u0437 JS) --\x3e\n<output name="result" for="range_id">0</output>\n\n\n<h3>\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0432\u043e\u0434\u044b</h3>\n<meter value="0" max="100" low="10" high="60">\u041d\u0438\u0437\u043a\u0430\u044f</meter> \n<meter value="30" max="100" low="10" high="60">\u041d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u0430\u044f</meter>\n<meter value="80" max="100" low="10" high="60">\u0413\u043e\u0440\u044f\u0447\u0430\u044f</meter>\n<meter value="100" max="100">\u041a\u0438\u043f\u044f\u0442\u043e\u043a</meter>\n\n<h3>\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0444\u043e\u0442\u043e</h3>\n<progress max="100" value="25">\n  \u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043e \u043d\u0430 <span id="value">25</span>%\n</progress>\n')),(0,a.kt)("h3",null,"Range"),(0,a.kt)("input",{id:"range_id",type:"range",value:"10",step:"0.1"}),(0,a.kt)("br",null),(0,a.kt)("h3",null,"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0432\u043e\u0434\u044b"),(0,a.kt)("meter",{value:"0",max:"100",low:"10",high:"60"},"\u041d\u0438\u0437\u043a\u0430\u044f"),"\xa0",(0,a.kt)("meter",{value:"30",max:"100",low:"10",high:"60"},"\u041d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u0430\u044f"),"\xa0",(0,a.kt)("meter",{value:"80",max:"100",low:"10",high:"60"},"\u0413\u043e\u0440\u044f\u0447\u0430\u044f"),"\xa0",(0,a.kt)("meter",{value:"100",max:"100"},"\u041a\u0438\u043f\u044f\u0442\u043e\u043a"),"\xa0",(0,a.kt)("br",null),(0,a.kt)("h3",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0444\u043e\u0442\u043e"),(0,a.kt)("progress",{max:"100",value:"25"},"\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043e \u043d\u0430 ",(0,a.kt)("span",{id:"value"},"25"),"%"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"js-\u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044b"},"JS-\u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onclick")," - \u043a\u043b\u0438\u043a"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onsubmit")," - \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0444\u043e\u0440\u043c\u044b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"oninput")," - \u0432\u0432\u043e\u0434 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"pattern"},"Pattern"),(0,a.kt)("p",null,"\u0414\u043b\u044f \u043d\u0430\u0442\u0438\u0432\u043d\u043e\u0439 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u0435\u0439."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"pattern",src:n(3153).Z,width:"754",height:"557"})))}s.isMDXComponent=!0},3153:(e,t,n)=>{n.d(t,{Z:()=>l});const l="data:image/png;base64,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"}}]);