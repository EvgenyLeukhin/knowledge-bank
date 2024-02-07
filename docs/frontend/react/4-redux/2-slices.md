---
title: Слайсы
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
