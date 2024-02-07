---
title: Поключение
sidebar_position: 4
---

## Использование в компоненте

```tsx
import { useSyncActions, useAppSelector } from '@/store';

...
// get state from store by useAppSelector
const {
  counterStore: { counter },
  usersStore: { users, isLoading, isError, errorMessage },
} = useAppSelector(state => state);

// get actions
const {
  changeCounter,
  clearCounter,
  dicrementCounter,
  incrementCounter,
  addRandomUser2,
  clearUsers,
  deleteUser,
  deleteLastUser,
  fetchUsersThunk,
} = useSyncActions();
```

---


## Хуки для redux

```tsx
import { useSelector, useDispatch } from 'react-redux';

// импорт экшена из redux
import { fetchProducts } from 'redux/productsSlice';

...

// I вариант - создание константы на каждый state
const users = useSelector(store => store.usersSlice);
const products = useSelector(store => store.productsSlice);
const calculated = useSelector(store => store.productsSlice.data.map(product => product.id));


// II вариант - создание одного объекта cо state-полями
const { users, products, calculated } = useSelector((store: TStore) => ({
  users: store.usersSlice.data,
  products: store.productsSlice.data,

  // можно создавать кастомные вычисляемые значения из store
  calculated: store.productsSlice.data.map(product => product.id),
}));

// можно засовывать много логики внутри useSelector
const { hubs } = useSelector((state: TStore) => ({
    hubs: state.hubs.hubs.filter(hub => { 
        return state.auth.hubIds?.includes(hub.id) && (!!hub.timezone && !!hub.timeFrom && !!hub.timeTo);
    })
    .map(({ name, id, code }) => ({
        name: code ? `${name} (${code})` : name,
        value: id,
    })).sort((a, b) => a.name.localeCompare(b.name))
}));

...

const dispatch = useDispatch();

...

// все экшены из redux, должны обарачиваться dispatch.
useEffect(() => {
  dispatch(fetchProducts(data));
}, []);


```
