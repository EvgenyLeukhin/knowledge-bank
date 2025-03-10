"use strict";(self.webpackChunkknowledge_bank=self.webpackChunkknowledge_bank||[]).push([[1029],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(f,s(s({ref:t},d),{},{components:n})):a.createElement(f,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"\u0421\u043b\u0430\u0439\u0441\u044b",sidebar_position:2},s=void 0,i={unversionedId:"frontend/react/archive/redux/slices",id:"frontend/react/archive/redux/slices",title:"\u0421\u043b\u0430\u0439\u0441\u044b",description:"\u0421\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439 slice",source:"@site/docs/frontend/react/88-archive/2-redux/2-slices.md",sourceDirName:"frontend/react/88-archive/2-redux",slug:"/frontend/react/archive/redux/slices",permalink:"/knowledge-bank/docs/frontend/react/archive/redux/slices",draft:!1,editUrl:"https://github.com/EvgenyLeukhin/knowledge-bank/edit/main/docs/frontend/react/88-archive/2-redux/2-slices.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u0421\u043b\u0430\u0439\u0441\u044b",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Store \u0438 provider",permalink:"/knowledge-bank/docs/frontend/react/archive/redux/provider"},next:{title:"Thunks",permalink:"/knowledge-bank/docs/frontend/react/archive/redux/thunks"}},l={},c=[{value:"\u0421\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439 slice",id:"\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439-slice",level:2},{value:"\u0410\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439 slice (createApi)",id:"\u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439-slice-createapi",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0441\u043b\u0430\u0439\u0441\u0430 \u0441 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u043c\u0438 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u043c\u0438 \u044d\u043a\u0448\u0435\u043d\u0430\u043c\u0438",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0441\u043b\u0430\u0439\u0441\u0430-\u0441-\u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u043c\u0438-\u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u043c\u0438-\u044d\u043a\u0448\u0435\u043d\u0430\u043c\u0438",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439-slice"},"\u0421\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439 slice"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { createSlice, PayloadAction } from '@reduxjs/toolkit';\n\ntype TState = {\n  isLoading: boolean;\n  isSuccess: boolean;\n  errorMessage: boolean;\n  data: TDataItem[];\n}\n\n// initialState\nconst initialState: TState = {\n  isLoading: false,\n  isSuccess: false,\n  errorMessage: false,\n  data: [],\n};\n\n// someSlice\nconst someSlice = createSlice({\n  name: 'some-slice',\n  initialState,\n  reducers: {\n    // setLoading - \u043f\u043e\u043b\u043d\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c\n    setLoading: (state, { payload }: PayloadAction<boolean>) => {\n      return {\n        ...state,\n        isLoading: payload,\n      };\n    },\n\n    // setLoading - \u043a\u043e\u0440\u043e\u0442\u043a\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c (\u0432 RTK state \u043c\u0443\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u044b\u0439)\n    setLoading(state, { payload }: PayloadAction<boolean>) {\n      state.isLoading = payload;\n    },\n\n    // setSuccess\n    setSuccess(state, { payload }: PayloadAction<boolean>) {\n      state.isLoading = payload;\n    },\n\n    // resetErrorMessage\n    resetErrorMessage(state) {\n      state.errorMessage = initialState.isError;\n    },\n\n    // setData\n    setData(state, { payload }: PayloadAction<TDataItem[]>) {\n      state.data = payload;\n    },\n  },\n});\n\n// imports\nexport const someReducer = someSlice.reducer;\nexport const {\n  setLoading,\n  setSuccess,\n  resetErrorMessage,\n  setData,\n} = someSlice.actions;\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439-slice-createapi"},"\u0410\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439 slice (createApi)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';\nimport { IProduct } from './api.types';\n\nexport const api = createApi({\n  // uniq key\n  reducerPath: 'api',\n\n  // api url RTK Query\n  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),\n\n  // \u0432\u0441\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0437\u0434\u0435\u0441\u044c\n  endpoints: builder => ({\n    // number for limit\n    getProducts: builder.query<IProduct[], number>({\n      query: (limit = 5) => `products?limit=${limit}`, // endpoint {baseUrl}/products\n    }),\n\n    // getPosts: builder.query({\n    //   query: () => '/posts',\n    // }),\n\n    // other request any params\n    // getPokemonByName: builder.query<IPokemon, string>({\n    //   query: name => `pokemon/${name}`,\n    // }),\n\n    // addNewPost: builder.mutation({\n    //   query: (payload) => ({\n    //     url: '/posts',\n    //     method: 'POST',\n    //     body: payload,\n    //     headers: {\n    //       'Content-type': 'application/json; charset=UTF-8',\n    //     },\n    //   }),\n    //   // invalidatesTags: ['Post'],\n    // }),\n  }),\n});\n\n// \u043c\u0430\u0433\u0438\u044f toolkit (\u0430\u0432\u0442\u043e\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f)  \u0445\u0443\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0432\u0441\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b\nexport const {\n  useGetProductsQuery, // data, isLoading, isError - \u0445\u0443\u043a \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b\n  // useGetPokemonByNameQuery,\n} = api;\n")),(0,r.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0445\u0443\u043a\u0430 \u0438\u0437 createApi"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useGetProductsQuery } from '@/store/redux-toolkit/api/api';\n\n...\n\nconst { data, isLoading } = useGetProductsQuery(5);\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0441\u043b\u0430\u0439\u0441\u0430-\u0441-\u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u043c\u0438-\u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u043c\u0438-\u044d\u043a\u0448\u0435\u043d\u0430\u043c\u0438"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0441\u043b\u0430\u0439\u0441\u0430 \u0441 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u043c\u0438 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u043c\u0438 \u044d\u043a\u0448\u0435\u043d\u0430\u043c\u0438"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// src/store/ordersSearch/ordersSearchSlice.ts copy\nimport { toast } from 'react-toastify';\nimport { RootState } from '@store/index';\nimport { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';\nimport { defaultNetworkErrorMsg } from '@constants/errorMessages';\n\n// getNotificationTemplates request\nimport {\n  INotificationTemplatesArgs,\n  INotificationTemplatesResponse,\n  getNotificationTemplates\n} from '@api/methods/getNotificationTemplates';\nimport { EMPTY_RESULT_DISPLAY_MESSAGE, NOTIFICATION_TEMPLATES_INITIAL_STATE } from './consts';\nimport { INotificationTemplate } from './types';\n\n// get template list\nexport const fetchNotificationTemplates = createAsyncThunk<\n  INotificationTemplatesResponse,\n  INotificationTemplatesArgs,\n  { rejectValue: string }\n>('notificationTemplates/fetchTemplates', async (args, { getState, requestId, rejectWithValue }) => {\n  const { currentRequestId, isLoading } = (getState() as RootState).notificationTemplates;\n\n  if (!isLoading || requestId !== currentRequestId) {\n    return rejectWithValue('\u0417\u0430\u043f\u0440\u043e\u0441 \u0443\u0436\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f');\n  }\n\n  const result: INotificationTemplatesResponse = await getNotificationTemplates(args);\n\n  if (!result.ok) {\n    toast.error(`\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441 \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432 \u043d\u043e\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0439 ${result.error?.validation}`);\n    return rejectWithValue(result.error?.message_code || '\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441 \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432 \u043d\u043e\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0439');\n  }\n  return result;\n});\n\nexport const notificationTemplatesSlice = createSlice({\n  name: 'notificationTemplates',\n  initialState: NOTIFICATION_TEMPLATES_INITIAL_STATE,\n\n  // \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0435 \u044d\u043a\u0448\u0435\u043d\u044b\n  reducers: {\n    setLoading(state, { payload }: PayloadAction<boolean>) {\n      state.isLoading = payload;\n    },\n    setError(state, { payload }: PayloadAction<string>) {\n      state.error = payload;\n    },\n\n    // set templates\n    setTemplates(state, { payload }: PayloadAction<INotificationTemplate[]>) {\n      state.templates = payload;\n    },\n\n    // select template\n    setSelectedTemplate(state, { payload }: PayloadAction<INotificationTemplate | null>) {\n      state.selectedTemplate = payload;\n    },\n\n    // search string\n    setSearchString(state, { payload }: PayloadAction<string>) {\n      state.searchString = payload;\n    },\n\n    // search string\n    setSearchSuggestions(state, { payload }: PayloadAction<string[]>) {\n      state.searchSuggestions = payload;\n    }\n  },\n\n  extraReducers: builder => {\n    // fetchNotificationTemplates - isLoading\n    builder.addCase(fetchNotificationTemplates.pending, (state, { meta }) => {\n      return {\n        ...state,\n        currentRequestId: meta.requestId,\n        isLoading: true,\n        error: null,\n        emptyResultDisplayMessage: null\n      };\n    }),\n      // fetchNotificationTemplates - isSuccess\n      builder.addCase(fetchNotificationTemplates.fulfilled, (state, { payload, meta }) => {\n        if (meta.requestId !== state.currentRequestId) return state;\n\n        return {\n          ...state,\n          currentRequestId: null,\n          isLoading: false,\n          error: null,\n          templates: payload.data?.notification_template || [],\n          emptyResultDisplayMessage: !payload.data?.notification_template.length ? EMPTY_RESULT_DISPLAY_MESSAGE : null\n        };\n      }),\n      // fetchNotificationTemplates - isError\n      builder.addCase(fetchNotificationTemplates.rejected, (state, { payload, error }) => {\n        return {\n          ...state,\n          currentRequestId: null,\n          isLoading: false,\n          error: payload || error.message || defaultNetworkErrorMsg\n        };\n      });\n  }\n});\n\n// export actions\nconst { setLoading, setError, setTemplates, setSelectedTemplate, setSearchString, setSearchSuggestions } =\n  notificationTemplatesSlice.actions;\nexport { setLoading, setError, setTemplates, setSelectedTemplate, setSearchString, setSearchSuggestions };\n\n// export reducer\nexport default notificationTemplatesSlice.reducer;\n")))}p.isMDXComponent=!0}}]);