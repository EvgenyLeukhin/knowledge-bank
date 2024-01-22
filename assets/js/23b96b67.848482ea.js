"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[5295],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={title:"clickOutside",sidebar_position:8},c=void 0,a={unversionedId:"frontend/react/hooks/clickOutside",id:"frontend/react/hooks/clickOutside",title:"clickOutside",description:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435:",source:"@site/docs/frontend/react/3-hooks/8-clickOutside.md",sourceDirName:"frontend/react/3-hooks",slug:"/frontend/react/hooks/clickOutside",permalink:"/knowledge-bank/docs/frontend/react/hooks/clickOutside",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/react/3-hooks/8-clickOutside.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"clickOutside",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"debounce, throttle",permalink:"/knowledge-bank/docs/frontend/react/hooks/debounce"},next:{title:"custom",permalink:"/knowledge-bank/docs/frontend/react/hooks/custom"}},s={},l=[],u={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useEffect } from 'react';\n\nconst useClickOutside = (ref: React.RefObject<HTMLDivElement>, action: () => void): void => {\n  useEffect(() => {\n    function handleClickOutside(event: Event) {\n      if (ref.current && !ref.current.contains(event.target as Node)) {\n        // make some action if click outside\n        action();\n      }\n    }\n\n    // Bind the event listener\n    document.addEventListener('mouseup', handleClickOutside);\n    return () => {\n      // Unbind the event listener on clean up\n      document.removeEventListener('mouseup', handleClickOutside);\n    };\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n  }, [ref]);\n};\n\nexport default useClickOutside;\n")),(0,o.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import useClickOutside from '@utils/hooks/useClickOutside';\n\n...\n\nconst wrapperRef = useRef<HTMLDivElement>(null);\n\n// \u043a\u043b\u0438\u043a outside, \u0447\u0442\u043e\u0431\u044b dropdown \u0437\u0430\u043a\u0440\u044b\u0432\u0430\u043b\u0441\u044f (\u043d\u0443\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c ref)\nuseClickOutside(wrapperRef, () => setDropdownOpen(false));\n\n... \n\n<div ref={wrapperRef} className={styles.CustomSelect__wrapper}>\n...\n</div>\n")))}d.isMDXComponent=!0}}]);