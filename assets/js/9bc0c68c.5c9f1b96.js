"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[81],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>c});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),m=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=m(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=m(r),c=o,f=p["".concat(l,".").concat(c)]||p[c]||d[c]||a;return r?t.createElement(f,i(i({ref:n},u),{},{components:r})):t.createElement(f,i({ref:n},u))}));function c(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var m=2;m<a;m++)i[m]=r[m];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6373:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var t=r(7462),o=(r(7294),r(3905));const a={title:"Formik \u0438 uip",sidebar_position:7},i=void 0,s={unversionedId:"frontend/react__old/formik",id:"frontend/react__old/formik",title:"Formik \u0438 uip",description:"Formik + yup example",source:"@site/docs/frontend/react__old/formik.md",sourceDirName:"frontend/react__old",slug:"/frontend/react__old/formik",permalink:"/knowledge-bank/docs/frontend/react__old/formik",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/react__old/formik.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Formik \u0438 uip",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f",permalink:"/knowledge-bank/docs/frontend/react__old/optimization"},next:{title:"NextJS",permalink:"/knowledge-bank/docs/frontend/react__old/nextjs"}},l={},m=[{value:"Formik + yup example",id:"formik--yup-example",level:2},{value:"1. Install packages",id:"1-install-packages",level:3},{value:"2. Imports",id:"2-imports",level:3},{value:"3. Form template",id:"3-form-template",level:3}],u={toc:m};function d(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"formik--yup-example"},"Formik + yup example"),(0,o.kt)("h3",{id:"1-install-packages"},"1. Install packages"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"yarn add formik yup")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"2-imports"},"2. Imports"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useFormik } from 'formik';\nimport * as Yup from 'yup';\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"3-form-template"},"3. Form template"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// values state\nconst [formValues, setFormValues] = useState<TFormNativeValues>(\n  formNativeEmptyValues,\n);\n\n// loading state\nconst [formLoading, setFormLoading] = useState<boolean>(true);\n\n  // request immitation\nuseEffect(() => {\n  setTimeout(() => {\n    setFormValues(formNativeServerValues);\n    setFormLoading(false);\n  }, 1000);\n}, []);\n\n  const formik = useFormik({\n    // enableReinitialize\n    enableReinitialize: true,\n\n    // initial values\n    initialValues: formValues,\n\n    // validationSchema\n    validationSchema: Yup.object({\n      // name\n      name: Yup.string()\n        .min(6, 'must be min 6 characters')\n        .max(20, 'must be max 20 characters')\n        .required('name is required'),\n\n      // password\n      password: Yup.string()\n        .min(6, 'must be min 6 characters')\n        .max(15, 'must be max 15 characters')\n        .required('password is required'),\n    }),\n\n    // formik handleSubmit\n    onSubmit: values => {\n      alert(JSON.stringify(values, null, 2));\n    },\n  });\n\n  const {\n    handleSubmit,\n    handleBlur,\n    handleChange,\n    resetForm,\n    // setFieldValue,\n    values: {\n      name,\n      password,\n    },\n  } = formik;\n\n  // onResetForm\n  const onResetForm = () => {\n    resetForm({\n      values: formNativeEmptyValues,\n      touched: {},\n      errors: {},\n    });\n  };\n\n  // validation errors\n  const notValid: Record<keyof TFormNativeValues, string | boolean | undefined\n  > = {\n    name: formik.touched.name && formik.errors.name,\n    password: formik.touched.password && formik.errors.password,\n  };\n\n  const valid: Record<keyof TFormNativeValues, string | boolean | undefined> = {\n    name: formik.touched.name && !formik.errors.name,\n    password: formik.touched.password && !formik.errors.password,\n  };\n\n<form method='post' onSubmit={handleSubmit}>\n  {/* name */}\n  <input\n    id='name'\n    type='text'\n    name='name'\n    placeholder='Enter name'\n    onBlur={handleBlur}\n    onChange={handleChange}\n    value={name}\n  />\n\n  {/* password validation message */}\n  {notValid.name ? <p>{formik.errors.name}</p> : null}\n\n  {/* password */}\n  <input\n    id='password'\n    type='password'\n    name='password'\n    placeholder='Enter password'\n    onBlur={handleBlur}\n    onChange={handleChange}\n    value={password}\n  />\n\n  {/* password validation message */}\n  {notValid.password ? <p>{formik.errors.password}</p> : null}\n\n\n  {/* buttons */}\n  <button type='submit'>Send</button>\n  <button type='reset' onClick={onResetForm}>Reset</button>\n</form>\n")))}d.isMDXComponent=!0}}]);