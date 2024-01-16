---
title: context ✓
sidebar_position: 5
---

- Позволяет передавать `state` на любой уровень, что-то вроде встроенного `redux` в `react`
- Можно избавиться от `property drilling`
- Внутрь контекста можно передавать всё что угодно (примитивы, функции, объекты).

### 1 шаг - создаем пустой контекст

```ts
import { createContext } from 'react';

export type TUserData = {
  name: string;
  surname: string;
  age?: number;
};

export const UserContext = createContext<TUserData>({
  name: '',
  surname: '',
  age: undefined,
});
```

### 2 шаг - подключаем контекст к приложению, значение контекста подключаем к useState

```tsx
import { UserContext } from './UserContext';

const App = () => {
  const [personData, setPersonData] = useState<TUserData>({
    name: 'Default Username',
    surname: 'Default Surname',
    age: null,
  });

  return (
    <UserContext.Provider value={personData}>
      <button
        onClick={() =>
          setPersonData({
            name: 'Jack',
            surname: 'Corbell',
            age: 35,
          })
        }
      >
        Change UserContext
      </button>

      <SomeComponent />
    </UserContext.Provider>
  )
}
```

### 3 шаг - используем контекст внутри вложенных компонентов в провайдер

Получаем доступ к personData через хук `useContext`. При изменении personData, данные будут обновляться внутри компонента.

Оборачиваем в `<Provider />`.

```tsx
import { useContext } from 'react';
import { UserContext } from './UserContext';

export default function SomeComp() {
  const personData = useContext(UserContext);
  const { name, surname, age } = personData;

  return (
    <ul>
      <li>{`name: ${name}`}</li>
      <li>{`surname: ${surname}`}</li>
      <li>{`age: ${age}`}</li>
    </ul>
  );
}
```
