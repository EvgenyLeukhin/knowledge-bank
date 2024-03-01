---
title: Роутинг -
sidebar_position: 3
---

## react-router-dom

Установка пакетов: ```yarn add react-router-dom @types/react-router-dom```

---

## react-router-dom v. 5

### Router

```tsx
import { matchPath, Redirect, Route, Switch } from 'react-router-dom';
import { IRoute } from './interfaces';
import { EPermission } from './interfaces/auth';

// routes components
import {
  Login,
  Drugstores,
  Edit,
  Help,
  MassEdit,
  Map,
  MapOld,
  CustomStatuses,
  PermissionsRoute,
  Regions,
} from 'container';

export const AUTH = 'login';
export const MAIN = 'main';
export const MAP = 'map';
export const MAP_TEST = 'map-test';
export const EDIT = 'edit';
export const MASS_EDIT = 'mass_edit';
export const STATUSES = 'statuses';
export const HELP = 'help';
export const REGIONS = 'regions';

export const routes: IRoute[] = [
  {
    id: AUTH,
    path: `/${AUTH}`,
    exact: true,
    permissions: [EPermission.NONE],
    children: <Login />,
  },
  {
    id: MAIN,
    path: '/',
    exact: true,
    permissions: [EPermission.NONE],
    children: <Drugstores />,
  },
  {
    id: MASS_EDIT,
    path: '/mass_edit',
    exact: true,
    permissions: [EPermission.NONE],
    children: <MassEdit />,
  },
  {
    id: EDIT,
    path: '/edit/:id',
    exact: true,
    permissions: [EPermission.NONE],
    children: <Edit />,
  },
  {
    id: MAP,
    path: '/map',
    exact: true,
    permissions: [EPermission.NONE],
    children: <Map />,
  },
  {
    id: MAP_TEST,
    path: '/map-test',
    exact: true,
    permissions: [EPermission.NONE],
    children: <MapOld />,
  },
  {
    id: STATUSES,
    path: '/statuses',
    exact: true,
    permissions: [EPermission.NONE],
    children: <CustomStatuses />,
  },
  {
    id: HELP,
    path: '/help',
    exact: true,
    permissions: [EPermission.NONE],
    children: <Help />,
  },
  {
    id: REGIONS,
    path: '/regions',
    exact: true,
    permissions: [EPermission.NONE],
    children: <Regions />,
  },
];

const Routes = () => {
  return (
    <Switch>
      {routes.map(props => {
        return <PermissionsRoute key={props.id} {...props} />;
      })}

      <Route path='*'>
        <Redirect to='/' />
      </Route>
    </Switch>
  );
};

export default Routes;
```

---

### PermissionsRoute

```tsx
import { EPermission, IPermission } from 'interfaces/auth';
import { IRoute } from 'interfaces';
import { useSelector } from 'react-redux';
import { TStore } from 'store/store';
import { useAlert } from 'react-alert';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import Loader from 'components/ui/Loader/Loader';
import { AUTH } from 'routes';
import { useEffect } from 'react';

interface IPermissionsRoute extends RouteProps, IRoute {
  permissions: IPermission[];
}

const PermissionsRoute = ({
  children,
  permissions,
  id,
  ...rest
}: IPermissionsRoute) => {
  const alert = useAlert();

  const {
    permissions: userPermissions,
    sessionInit,
    uId,
  } = useSelector((state: TStore) => ({
    token: state.auth.token,
    uId: state.auth.upn,
    permissions: state.auth.permissions,
    sessionInit: state.auth.init,
  }));

  let hasPermissions =
    permissions.every(permission => {
      return userPermissions?.includes(permission);
    }) || false;
  if (permissions.includes(EPermission.NONE)) hasPermissions = true;

  let component;

  if (!sessionInit) {
    component = <Route {...rest} render={() => <Loader loading={true} />} />;
  } else {
    if (!uId && id !== AUTH) {
      component = <Redirect to='/login' />;
    } else if (!!uId && id === AUTH) {
      component = <Redirect to='/' />;
    } else {
      component = (
        <Route
          {...rest}
          render={() =>
            hasPermissions ? <>{children}</> : <Redirect to='/' />
          }
        />
      );
    }
  }

  useEffect(() => {
    if (!hasPermissions && sessionInit) {
      alert.error(
        '403. Не хватает прав для перехода в раздел. Обратитесь в службу технической поддержки',
      );
    }
  }, [sessionInit]);

  return component;
};

export default PermissionsRoute;

```

### history

```tsx
import { useHistory } from 'react-router-dom';

...

const history = useHistory();

...

history.push('/some-page');

```

---


## react-router-dom v. 6

TODO
