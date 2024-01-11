---
title: effect ✓
sidebar_position: 1
---

## useEffect()

- Если хук `useState` заменил `state` классового компонента, то хук `useEffect` заменил все методы жизненного цикла (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount` и т.д.). 
- Может использоваться несколько раз в одном компоненте.
- Можно управлять перерендером компонента.
- Не блокирует отрисовку разметки

---

### componentDidMount() (первый рендер, запросы к API)

- Будет срабатывать при первом рендере (при каждом вмонтировании компонента в `Virtual Dom`);
- Запросы к API (fetch data);
- Изменение локального state при загрузке (change `initialState`);
- Лоадеры;

```tsx
import { useState, useEffect } from 'react';

const SomeComp = () => {
  const [users, setUsers] = useState<any[]>([]);


  // ЗАПРОС к API - будет срабатывать при первом рендеринге компонента
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json));
  }, []);

  return (
    <ul>
      {users?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

---

### componentDidUpdate() (props/state update)

- Будет срабатывать при первом рендере;
- Будет срабатывать каждый раз после изменения зависимостей;
- Зависимостей может быть несколько через запятую;
- Во внутрь `useEffect` можно записывать условия, чтобы была бóльшая гибкость;

```tsx
import { useState, useEffect } from 'react';

const SomeComp = () => {
  const [count, setCount] = useState(0);


  // будет срабатывать при первом ренденре
  // будет срабатывать каждый раз при изменении count
  useEffect(() => {
    console.info('counter value: ', count);
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>{count}</button>
  );
}
```

---

### componentDidUpdate() (возврат предыдущего state)

- Не будет срабатывать при первом рендере;
- Будет срабатывать каждый раз ДО изменения зависимостей;
- Поэтому возвращает предылущий state;

```tsx
import { useState, useEffect } from 'react';

const SomeComp = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // не будет срабатывать при первом рендере!
    // вернет предыдущее состояние count до изменения 
    return () => {
      console.info('previos counter value: ', count);
    };
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>{count}</button>
  );
}
```

---

### componentWillUnmount()

- Срабатывает при каждом демонтировании компонента из `Virtual Dom`
- remove event listeners
- clear cache, storages
- return to `initialState`

```tsx
import { useState, useEffect } from 'react';

const SomeComp = () => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  // resizeX update state method
  const resizeXListener = () => {
    const updateWidth = window.innerWidth;
    setWindowWidth(updateWidth);
    console.log('windowWidth', windowWidth);
  };

  useEffect(() => {
    // add event listener
    window.addEventListener('resize', resizeXListener);

    // remove event listener
    return () => window.removeEventListener('resize', resizeXListener);
  }); // do not add [] - will not working

  return (
    <div>{count}</div>
  );
}
```

---

### Вариации useEffect

В записи useEffect без [ ] вообще по сути нет смысла, так как этот код будет выполняться при каждом рендере, useEffect можно убрать.

```tsx
const SomeComp = ({ count }: TProps) => {
  // сработает при каждом рендере / ререндере
  console.log('count inside', count);

  // сработает при каждом рендере / ререндере
  useEffect(() => {
    console.log('count', count);

    // если внутри такой записи менять state, то будет бесконечный цикл
    setValue(value + 1);

    // можно считать кол-во рендеров
  });

  // сработает 1 раз при загрузке
  useEffect(() => {
    console.log('count []', count);
  }, []);

  // сработает 1 раз при загрузке и далее каждый раз при изменении count
  useEffect(() => {
    console.log('count [count]', count);
  }, [count]);

  return <div>{count}</div>;
};
```

---

## useLayoutEffect()

`useLayoutEffect` выполняет код до отрисовки в браузере

- Такой же как и `useEffect`, только грузиться ещё до отрисовки html.
- Срабатывает раньше чем `useEffect`
- Применяется редко

---
