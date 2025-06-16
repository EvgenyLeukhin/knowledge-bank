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

---

## Импорт селекторы

Можно экспортировать обработанные селекторы

```ts
import { RootState } from '..';
import { INotificationTemplate, INotificationTemplatesState } from './types';

// full state
export const selectNotificationTemplatesState = (
  globalState: RootState,
): INotificationTemplatesState => globalState.notificationTemplates;

// templates
export const selectNotificationTemplates = (
  globalState: RootState,
): INotificationTemplate[] => globalState.notificationTemplates.templates;

// selectedTemplate
export const selectSelectedNotificationTemplate = (
  globalState: RootState,
): INotificationTemplate | null =>
  globalState.notificationTemplates.selectedTemplate;
```

---

## Redux hooks

### useSelector

```tsx
import { useSelector } from 'react-redux';

// сохраняем список users в переменную users, couriers в переменную couriers
const users = useSelector(store => store.users);
const couriers = useSelector(store => store.couriers);

// destructuring - возвращение объекта из функиции и его деструктуризация
const { orders, deliveryTypes, routes, loading, forcing } = useSelector(
  (state: TStore) => ({
    forcing: state.orders.forcing,
    orders: state.orders.orders,
    loading: state.orders.loading,
    routes: state.routes.routes,
    deliveryTypes: state.dictionaries.deliveryTypes,
  }),
);

// возврат объекта с обработанными полями с последующей деструктуризацией
const { selectedRoutes, editingRoute } = useSelector((state: TStore) => ({
  selectedRoutes: state.routes.routes.filter(route => route.selected),
  editingRoute:
    state.routes.routes.find(route => route.editing) ||
    state.routes.exportedRoutes.find(route => route.editing),
}));

// двойная деструктуризация
const {
  hubs,
  zones,
  auth,
  dictionaries: { paymentTypes, deliveryTypes, additionalTypes },
} = useSelector((state: TStore) => ({
  hubs: state.hubs.hubs,
  zones: state.zones.zones,
  auth: state.auth,
  dictionaries: state.dictionaries,
}));
```

```tsx
// много логики внутри useSelector
const { hubs } = useSelector((state: TStore) => ({
  hubs: state.hubs.hubs
    .filter(hub => {
      return (
        state.auth.hubIds?.includes(hub.id) &&
        !!hub.timezone &&
        !!hub.timeFrom &&
        !!hub.timeTo
      );
    })
    .map(({ name, id, code }) => ({
      name: code ? `${name} (${code})` : name,
      value: id,
    }))
    .sort((a, b) => a.name.localeCompare(b.name)),
}));
```

### useDispatch

```tsx
import { useDispatch } from 'react-redux';
import { getAllZones } from 'redux/effect/Zones';
...

const dispatch = useDispatch();

// применение
useEffect(() => {
    dispatch(getAllZones());
}, []);
```

---
