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

// применение useSelector для вытаскивания данных из store
const { users, products, calculated } = useSelector((store: TStore) => ({
  users: store.usersSlice.data,
  products: store.productsSlice.data,

  // можно создавать кастомные вычисляемые значения из store
  calculated: store.productsSlice.data.map(product => product.id),
}));

...

const dispatch = useDispatch();

...

// все экшены из redux, должны обарачиваться dispatch.
useEffect(() => {
  dispatch(fetchProducts(data));
}, []);


```
