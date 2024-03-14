---
title: Оптимизация
sidebar_position: 2
---

- No many npm packages
- Chunks division
- Debounce and Throttling
- Desktop/Mobile app optimization
- Gzip compression (`compression`)
- Lazy loading (`React.lazy()`)
- images compression
- tree shaking imports
- redux code splitiong (`redux-dynamic-modules`)
- redux reselect - мемоизация селекторов
- no rerenders (`React.useMemo(), React.callback()`) и декомпозиция (разбивка)
- контейнеры (hoc) и визуальные компоненты

```ts
import { getFile } from './usersService/createUser';
```

## Lazy loading 

```tsx
const LazyComp1 = React.lazy(() => import('./Component1'));
const LazyComp2 = React.lazy(() => import('./Component2'));
```

Images, fonts, libs, components, reducers, 

---
