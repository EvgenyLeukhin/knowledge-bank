---
title: Экшены
sidebar_position: 3
---

Асинхронный экшен. Thunk. Effect.

```tsx
import axios from 'axios';
import { TUser } from './users.types';
import { Dispatch } from '@reduxjs/toolkit';
import { usersSlice } from './users.slice';

const { usersLoading, usersSuccess, usersError, resetUsersState } =
  usersSlice.actions;

export const fetchUsersThunk = (limit: number) => async (dispatch: Dispatch) => {
  dispatch(resetUsersState());
  dispatch(usersLoading(true));

  try {
    // response typing
    const response = await axios.get<TUser[]>(
      `https://jsonplaceholder.typicode.com/users?limit=${limit}`,
    );

    // if success
    setTimeout(() => {
      dispatch(usersLoading(false));
      dispatch(usersSuccess(response.data));
    }, 1000);

    // if error
  } catch (e) {
    dispatch(usersLoading(false));
    dispatch(usersError(`${e}`));
  }
};

// или экспортом в объекте
export const usersThunks = {
  fetchUsersThunk,
};
```

Использование в компаненте.

```tsx
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersThunk } from '@store/users';

const SomeComp = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: AppState) => state.users);

  useEffect(() => {
    dispatch(fetchUsersThunk(10));
  }, []);

  const { isFetching, error, userList } = users;

  // render users
  ...
};

export default SomeComp;
```

---

## Примеры синхронных экшенов

TODO
