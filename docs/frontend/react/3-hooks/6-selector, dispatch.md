---
title: selector, dispatch
sidebar_position: 6
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
