---
title: Слайсы ✓
sidebar_position: 2
---

## Синхронный slice

```ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TState = {
  isLoading: boolean;
  isSuccess: boolean;
  errorMessage: boolean;
  data: TDataItem[];
}

// initialState
const initialState: TState = {
  isLoading: false,
  isSuccess: false,
  errorMessage: false,
  data: [],
};

// someSlice
const someSlice = createSlice({
  name: 'some-slice',
  initialState,
  reducers: {
    // setLoading - полная запись
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      return {
        ...state,
        isLoading: payload,
      };
    },

    // setLoading - короткая запись (в RTK state мутабильный)
    setLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },

    // setSuccess
    setSuccess(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },

    // resetErrorMessage
    resetErrorMessage(state) {
      state.errorMessage = initialState.isError;
    },

    // setData
    setData(state, { payload }: PayloadAction<TDataItem[]>) {
      state.data = payload;
    },
  },
});

// imports
export const someReducer = someSlice.reducer;
export const {
  setLoading,
  setSuccess,
  resetErrorMessage,
  setData,
} = someSlice.actions;
```

---

## Асинхронный slice (createApi)

```ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from './api.types';

export const api = createApi({
  // uniq key
  reducerPath: 'api',

  // api url RTK Query
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),

  // все запросы здесь
  endpoints: builder => ({
    // number for limit
    getProducts: builder.query<IProduct[], number>({
      query: (limit = 5) => `products?limit=${limit}`, // endpoint {baseUrl}/products
    }),

    // getPosts: builder.query({
    //   query: () => '/posts',
    // }),

    // other request any params
    // getPokemonByName: builder.query<IPokemon, string>({
    //   query: name => `pokemon/${name}`,
    // }),

    // addNewPost: builder.mutation({
    //   query: (payload) => ({
    //     url: '/posts',
    //     method: 'POST',
    //     body: payload,
    //     headers: {
    //       'Content-type': 'application/json; charset=UTF-8',
    //     },
    //   }),
    //   // invalidatesTags: ['Post'],
    // }),
  }),
});

// магия toolkit (автогенерация)  хук, который содержит все запросы
export const {
  useGetProductsQuery, // data, isLoading, isError - хук содержит параметры
  // useGetPokemonByNameQuery,
} = api;
```

Использование хука из createApi

```tsx
import { useGetProductsQuery } from '@/store/redux-toolkit/api/api';

...

const { data, isLoading } = useGetProductsQuery(5);
```

---

## Пример слайса с встроенными асинхронными экшенами

```ts
// src/store/ordersSearch/ordersSearchSlice.ts copy
import { toast } from 'react-toastify';
import { RootState } from '@store/index';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { defaultNetworkErrorMsg } from '@constants/errorMessages';

// getNotificationTemplates request
import {
  INotificationTemplatesArgs,
  INotificationTemplatesResponse,
  getNotificationTemplates
} from '@api/methods/getNotificationTemplates';
import { EMPTY_RESULT_DISPLAY_MESSAGE, NOTIFICATION_TEMPLATES_INITIAL_STATE } from './consts';
import { INotificationTemplate } from './types';

// get template list
export const fetchNotificationTemplates = createAsyncThunk<
  INotificationTemplatesResponse,
  INotificationTemplatesArgs,
  { rejectValue: string }
>('notificationTemplates/fetchTemplates', async (args, { getState, requestId, rejectWithValue }) => {
  const { currentRequestId, isLoading } = (getState() as RootState).notificationTemplates;

  if (!isLoading || requestId !== currentRequestId) {
    return rejectWithValue('Запрос уже выполняется');
  }

  const result: INotificationTemplatesResponse = await getNotificationTemplates(args);

  if (!result.ok) {
    toast.error(`Невозможно выполнить запрос шаблонов нотификаций ${result.error?.validation}`);
    return rejectWithValue(result.error?.message_code || 'Невозможно выполнить запрос шаблонов нотификаций');
  }
  return result;
});

export const notificationTemplatesSlice = createSlice({
  name: 'notificationTemplates',
  initialState: NOTIFICATION_TEMPLATES_INITIAL_STATE,

  // синхронные экшены
  reducers: {
    setLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
    setError(state, { payload }: PayloadAction<string>) {
      state.error = payload;
    },

    // set templates
    setTemplates(state, { payload }: PayloadAction<INotificationTemplate[]>) {
      state.templates = payload;
    },

    // select template
    setSelectedTemplate(state, { payload }: PayloadAction<INotificationTemplate | null>) {
      state.selectedTemplate = payload;
    },

    // search string
    setSearchString(state, { payload }: PayloadAction<string>) {
      state.searchString = payload;
    },

    // search string
    setSearchSuggestions(state, { payload }: PayloadAction<string[]>) {
      state.searchSuggestions = payload;
    }
  },

  extraReducers: builder => {
    // fetchNotificationTemplates - isLoading
    builder.addCase(fetchNotificationTemplates.pending, (state, { meta }) => {
      return {
        ...state,
        currentRequestId: meta.requestId,
        isLoading: true,
        error: null,
        emptyResultDisplayMessage: null
      };
    }),
      // fetchNotificationTemplates - isSuccess
      builder.addCase(fetchNotificationTemplates.fulfilled, (state, { payload, meta }) => {
        if (meta.requestId !== state.currentRequestId) return state;

        return {
          ...state,
          currentRequestId: null,
          isLoading: false,
          error: null,
          templates: payload.data?.notification_template || [],
          emptyResultDisplayMessage: !payload.data?.notification_template.length ? EMPTY_RESULT_DISPLAY_MESSAGE : null
        };
      }),
      // fetchNotificationTemplates - isError
      builder.addCase(fetchNotificationTemplates.rejected, (state, { payload, error }) => {
        return {
          ...state,
          currentRequestId: null,
          isLoading: false,
          error: payload || error.message || defaultNetworkErrorMsg
        };
      });
  }
});

// export actions
const { setLoading, setError, setTemplates, setSelectedTemplate, setSearchString, setSearchSuggestions } =
  notificationTemplatesSlice.actions;
export { setLoading, setError, setTemplates, setSelectedTemplate, setSearchString, setSearchSuggestions };

// export reducer
export default notificationTemplatesSlice.reducer;
```
