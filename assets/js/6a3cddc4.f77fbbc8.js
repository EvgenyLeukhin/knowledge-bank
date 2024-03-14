"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[7837],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),h=o,f=d["".concat(p,".").concat(h)]||d[h]||l[h]||s;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5832:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const s={title:"http-\u043a\u043b\u0438\u0435\u043d\u0442",sidebar_position:2},a=void 0,i={unversionedId:"frontend/react/api/httpClient",id:"frontend/react/api/httpClient",title:"http-\u043a\u043b\u0438\u0435\u043d\u0442",description:"\u041d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 axios.create",source:"@site/docs/frontend/react/6-api/2-httpClient.md",sourceDirName:"frontend/react/6-api",slug:"/frontend/react/api/httpClient",permalink:"/knowledge-bank/docs/frontend/react/api/httpClient",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/react/6-api/2-httpClient.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"http-\u043a\u043b\u0438\u0435\u043d\u0442",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"axios (-)",permalink:"/knowledge-bank/docs/frontend/react/api/axios"},next:{title:"query-params",permalink:"/knowledge-bank/docs/frontend/react/api/params"}},p={},u=[{value:"\u041d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 axios.create",id:"\u043d\u0430-\u043e\u0441\u043d\u043e\u0432\u0435-axioscreate",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435",id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435",level:3},{value:"\u041d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043a\u043b\u0430\u0441\u0441\u0430 \u0438 axios",id:"\u043d\u0430-\u043e\u0441\u043d\u043e\u0432\u0435-\u043a\u043b\u0430\u0441\u0441\u0430-\u0438-axios",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435",id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435-1",level:3},{value:"API_URL &amp; env",id:"api_url--env",level:2},{value:".env.development",id:"envdevelopment",level:3},{value:".env.production",id:"envproduction",level:3},{value:"apiUrl",id:"apiurl",level:3}],c={toc:u};function l(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u043d\u0430-\u043e\u0441\u043d\u043e\u0432\u0435-axioscreate"},"\u041d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 axios.create"),(0,o.kt)("p",null,"\u041c\u043e\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0432\u043e\u0439 httpClient \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 axios, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0437\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0432\u0441\u0435 \u043e\u0431\u0449\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u0445\u0432\u0430\u0442\u0447\u0438\u043a\u0438."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import axios from 'axios';\nimport { API_URL } from 'apiUrl';\n\nconst httpClient = axios.create({\n    baseURL: API_URL,\n    headers: {\n      'Content-Type': 'application/json',\n    },\n});\n\n// https://stackoverflow.com/questions/43051291/attach-authorization-header-for-all-axios-requests\nhttpClient.interceptors.request.use(\n  config => {\n    // Do something before request is sent\n    // console.log('interceptors request config', config);\n\n    // \u043e\u0431\u0440\u0430\u0449\u0430\u0435\u043c\u0441\u044f \u043a user-token (\u043e\u043d \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0432 ls, cookies, store)\n    const token = 'inject your user token'; // testStore.getState().app.userData.token;\n\n    // \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c\u0441\u044f user-token \u043a\u043e \u0432\u0441\u0435\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043c \u0432 headers, \u0435\u0441\u043b\u0438 \u043e\u043d \u0435\u0441\u0442\u044c\n    config.headers.Authorization = token || '';\n\n    return config;\n  },\n  error => {\n    console.log('interceptors request error', error);\n\n    dispatch(\n      setAlertMessageThunk({ message: `${error}`, type: 'error' }) as never,\n    );\n\n    // Do something with request error\n    return Promise.reject(error);\n  },\n);\n\n// \u041d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u044b \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0445\u0432\u0430\u0442\u0447\u0438\u043a\u043e\u0432\n// \u0410\u0432\u0442\u043e\u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0442\u043e\u043a\u0435\u043d\u0430\nconst getAuthorizationHeaderSetterInterceptor = (\n    getToken: () => string\n) => (config: AxiosRequestConfig) => {\n    const accessToken = getToken();\n    if (accessToken && !isAuthRequest(config.url)) {\n        config.headers['Authorization'] = `Bearer ${accessToken}`;\n    }\n    return config;\n};\n\n// \u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043d\u0435\u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0439 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438\nconst getTokenInvalidInterceptor = (error: AxiosError) => {\n    if (error.response?.status === 401 || error.response?.data.message === 'Invalid JWT Token') {\n        store.dispatch(logoutAction());\n        if (window.location.pathname.length < 1) {\n            window.location.href = '/';\n        }\n    }\n    return Promise.reject(error);\n}\n\n// \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f\nconst getConnectionErrorInterceptor = (error: AxiosError) => {\n    const connectionError = fetch('https://www.yandex.ru/', {\n        mode: 'no-cors',\n    }).catch(() => {\n        store.dispatch(setMessageAction(messageHandler('\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043e\u043c!')))\n    })\n    return Promise.reject(error);\n}\n")),(0,o.kt)("h3",{id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435"},"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"    loadOrders: async (query: string): Promise<{ success: boolean, data?: IAdministrationOrder[] }> => {\n        try {\n            const { status, data: { orders } } = await httpClient.get(`${url}/orders${query}`);\n\n            return {\n                success: status === 200,\n                data: orders || []\n            }\n        } catch (e) {\n            return {\n                success: false\n            }\n        }\n    },\n\n    reExport: async (routeIds: number[]): Promise<boolean> => {\n        try {\n            const { status } = await httpClient.post(`${url}/routes/export`, {\n                routeIds\n            });\n\n            return status === 200;\n        } catch (e) {\n            return false;\n        }\n    },\n\n    removeOrder: async (orderId: number, routeId: number): Promise<boolean> => {\n        try {\n            const { status } = await httpClient.delete(`${url}/routes/orders?routeId=${routeId}`, {\n                data: { orderIds: [orderId] }\n            });\n\n            return status === 200;\n        } catch (e) {\n            return false;\n        }\n    },\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u043d\u0430-\u043e\u0441\u043d\u043e\u0432\u0435-\u043a\u043b\u0430\u0441\u0441\u0430-\u0438-axios"},"\u041d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043a\u043b\u0430\u0441\u0441\u0430 \u0438 axios"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export class HttpClient {\n    private authStore: AuthStore;\n\n    private axios: AxiosInstance;\n\n    private tokenExpiryListeners: { (): void }[] = [];\n\n    constructor() {\n        this.tokenExpiryListeners = [];\n\n        this.axios = axios.create({\n            baseURL: APP_URL,\n            responseType: 'json',\n            headers: {\n                'content-type': 'application/json',\n            },\n        });\n\n        this.axios.interceptors.request.use(config => {\n            if (this.authStore.token) {\n                config.headers.Authorization = `Bearer ${this.authStore.token}`;\n            }\n            config.withCredentials = true;\n            return config;\n        });\n\n        this.axios.interceptors.response.use(\n            response => {\n                return response;\n            },\n            error => {\n                // \u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 Unauthorized error\n                if (error.response && error.response.status === 401) {\n                    this.tokenExpiryListeners.forEach(function (l) {\n                        l();\n                    });\n                }\n\n                return Promise.reject(error.response);\n            },\n        );\n\n        this.onTokenExpiry(() => this.authStore.logout());\n    }\n\n    setAppStore(authStore: AuthStore) {\n        this.authStore = authStore;\n    }\n\n    get(url: string, config?: AxiosRequestConfig): Promise<HttpResponse> {\n        return this.axios\n            .get(url, config)\n            .then((response: any) => {\n                return new HttpResponse(response.data, undefined, response.headers);\n            })\n            .catch((error: any) => {\n                return new HttpResponse(undefined, error);\n            });\n    }\n\n    delete(url: string, config?: AxiosRequestConfig): Promise<HttpResponse> {\n        return this.axios\n            .delete(url, config)\n            .then((response: any) => {\n                return new HttpResponse(response.data);\n            })\n            .catch((error: any) => {\n                return new HttpResponse(undefined, error);\n            });\n    }\n\n    head<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {\n        return this.axios.head(url, config);\n    }\n\n    options<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {\n        return this.axios.options(url, config);\n    }\n\n    graphQuery<T = any>(query: GraphqlQuery): Promise<GraphQLResponse<T>> {\n        return this.axios\n            .post('/graphql', query.build())\n            .then(response => {\n                let queryData: T | undefined;\n                if (response.data?.data) {\n                    const keys = Object.keys(response.data?.data);\n                    if (keys.length > 0) {\n                        queryData = response.data?.data[keys[0]];\n                    }\n                }\n\n                let errors;\n                if (response.data?.errors) {\n                    errors = response.data.errors;\n                }\n\n                let extensions;\n                if (response.data?.extensions) {\n                    extensions = response.data.extensions;\n                }\n                return new GraphQLResponse<T>(queryData, errors, extensions);\n            })\n            .catch(error => {\n                // http errors\n                // eslint-disable-next-line no-console\n                console.error('\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 GraphQL \u0437\u0430\u043f\u0440\u043e\u0441\u0430', error);\n                return new GraphQLResponse<T>(undefined, error);\n            });\n    }\n\n    post(url: string, data?: any, config?: AxiosRequestConfig): Promise<HttpResponse> {\n        return this.axios\n            .post(url, data, config)\n            .then((response: any) => {\n                return new HttpResponse(response.data, undefined, response.headers);\n            })\n            .catch((error: any) => {\n                return new HttpResponse(undefined, error);\n            });\n    }\n\n    put(url: string, data?: any, config?: AxiosRequestConfig): Promise<HttpResponse> {\n        return this.axios\n            .put(url, data, config)\n            .then((response: any) => {\n                return new HttpResponse(response.data);\n            })\n            .catch((error: any) => {\n                return new HttpResponse(undefined, error);\n            });\n    }\n\n    patch(url: string, data?: any, config?: AxiosRequestConfig): Promise<HttpResponse> {\n        return this.axios\n            .patch(url, data, config)\n            .then((response: any) => {\n                return new HttpResponse(response.data);\n            })\n            .catch((error: any) => {\n                return new HttpResponse(undefined, error);\n            });\n    }\n\n    onTokenExpiry(c: any) {\n        this.tokenExpiryListeners.push(c);\n    }\n}\n\nconst httpClient = new HttpClient();\n\nexport default httpClient;\n")),(0,o.kt)("h3",{id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435-1"},"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"    generateReport: (parameters: GenerateReportParams): Promise<HttpResponse> => {\n        return httpClient.post('/api/v1/service/reports/generate', parameters);\n    },\n\n    fetchReport: (request: FetchReportParams): Promise<HttpResponse> => {\n        return httpClient.post('/api/v1/reporting/fetchReport', request.reportParameters, {\n            params: { reportName: request.reportName },\n        });\n    },\n\n    buildReport: (request: BuildReportParams): Promise<HttpResponse> => {\n        return httpClient.post('/api/v1/reporting/buildReport', request.reportData, {\n            params: { reportName: request.reportName },\n        });\n    },\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"api_url--env"},"API_URL & env"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"yarn add cross-env")),(0,o.kt)("h3",{id:"envdevelopment"},".env.development"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-s"},"# NEXT_PUBLIC_URL=some-url.development.com\nNEXT_PUBLIC_URL=https://stage1.producthired.com/api/api\n")),(0,o.kt)("h3",{id:"envproduction"},".env.production"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-s"},"# NEXT_PUBLIC_URL=some-url.production.com\nNEXT_PUBLIC_URL=https://proe.producthired.com/api/api\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "dev": "cross-env NODE_ENV=development env-cmd -f ./api/.env.development next dev",\n  "dev:8888": "cross-env NODE_ENV=development env-cmd -f ./api/.env.development next dev -p 8888",\n  "build": "cross-env NODE_ENV=production env-cmd -f ./api/.env.development next build",\n}\n')),(0,o.kt)("h3",{id:"apiurl"},"apiUrl"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export enum EnvList {\n  DEVELOPMENT = 'development',\n  PRODUCTION = 'production',\n}\n\nconst { DEVELOPMENT, PRODUCTION } = EnvList;\n\nexport const API_URL = process.env.NEXT_PUBLIC_URL;\n\nexport const returnEnv = (): EnvList => {\n  switch (process.env.NODE_ENV) {\n    case 'development':\n      return DEVELOPMENT;\n    case 'production':\n      return PRODUCTION;\n    default:\n      return DEVELOPMENT;\n  }\n};\n\nexport const isDev = returnEnv() === DEVELOPMENT;\nexport const isProd = returnEnv() === PRODUCTION;\n")))}l.isMDXComponent=!0}}]);