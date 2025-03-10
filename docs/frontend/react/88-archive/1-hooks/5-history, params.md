---
title: history, params
sidebar_position: 5
---

## 5 version

Встроенные хуки в бибилиотеку ```react-router-dom```.

```tsx
import { useHistory, useParams } from 'react-router-dom';

...
const history = useHistory(); // объект history
const params = useParams(); // query-параметры

// redirect
history.push('/path');
```

--- 

## 6 version

```tsx
import { useNavigate } from 'react-router-dom';

...

const navigate = useNavigate();

// redirect
navigate('/path');


// add regionId to url query params
navigate({
  pathname: '/map',
  search: `?regionId=${selectedRegion.id}`,
});
```
