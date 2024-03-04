---
title: Роутинг
sidebar_position: 3
---

## react-router-dom

Установка пакетов: ```yarn add react-router-dom @types/react-router-dom```

---

## react-router-dom v. 5

### App - create router

```tsx
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routes';

...
  <Router>
      <Routes />
  </Router>
...
```

---

### Router - routes

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

### history - redirects

```tsx
import { useHistory } from 'react-router-dom';

...

const history = useHistory();

...

history.push('/some-page');
```

---

### NavLink

```tsx
...
<NavLink to={`/administration/routes?query=${someConts}`} target='_blank'>
    Link to new page
</NavLink>
...
```

---


## react-router-dom v. 6

### App

```tsx
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

---

### Router

```tsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,

    // not-found
    errorElement: <NotFoundPage />,

    // sub-routes
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],

    loader: someLoader,
    action: someAction, // import action
  },
]);
```

---

### NavLink

```tsx
import { NavLink } from "react-router-dom";

...

<ul>
  {contacts.map((contact) => (
    <li key={contact.id}>
      <NavLink
        to={`contacts/${contact.id}`}
        className={({ isActive, isPending }) =>
          isActive
            ? "active"
            : isPending
            ? "pending"
            : ""
        }
      >
        {/* other code */}
      </NavLink>
    </li>
  ))}
</ul>
```

---

### Navigation

```tsx
import { useNavigation } from "react-router-dom";

...

const navigation = useNavigation();


...

<div
  id="detail"
  className={navigation.state === "loading" ? "loading" : ""}
>
  Some content
</div>

...
onClick={() => {
  navigation(-1);
  navigation('/redirect-page');
}}


```
