---
title: Хуки +--
sidebar_position: 6
---

- Хуки - это функции, которые нужно вызывать для того, чтобы они работали;
- Хуки используют деструктуризацию массива, чтобы можно было сразу присвоить переменные равные элементам массива;
- Хуки принято именовать префиксом `use__`;
- Хуки должны использоваться в FC только на высшем уровне;


```ts
const arr = ['a', 'b', 'c'];

const [const1, const2, const3] = arr;

const1; // 'a'
const2; // 'b'
const3; // 'c'

```

---

## useState()

- Позволяет использовать локальный стейт внутри функциональных React-компонентов, а не только в классовых как было в ранних версиях React;
- Функции, изменяюшие state принято именовать с помощью префикса `set__`;


```ts
const [state, setState] = useState(initialState);
```

- `state` - переменная, хранящее состояние. Как правило, это строка, число, булеан или массив любых данных;
- `setState` - функция, изменяющая `state`;
- `initialState` - первоначальное значение `state`;

### Одиночный state

```tsx
import { useState } from 'react';
...
const [count, setCount] = useState(0) || useState<number>(0); // with TS;
...
<button onClick={() => setCount(count + 1)}>Change count</button>
```

### Возврат страрого state

- `prevState` - возвращает предыдущий state.

```tsx
import { useState } from 'react';
...
const [count, setCount] = useState(0);

const onButtonClick = () => {
  setCount(count + 1);

  // идентичная запись с prevState
  setCount(prevState => prevState + 1);
}
...
<button onClick={onButtonClick}>Change count</button>
```

---

### Множественный state

- Вместо большого количества одиночных можно использовать объект состояний, на подобие как было в классовых компонентах;

- `initialState` может принимать даже функцию, которая возвращает значение;


```tsx
import { useState } from 'react';

// типизация state
type TState = {
  value1: number;
  value2: boolean;
  value3: string[];
};

const initialState: TState = {
  value1: 1,
  value2: false,
  value3: ['a', 'b', 'c'],
}

const [state, setState] = useState<TState>(initialState);

...

const onButtonClick = () => {
  setState({
    // or need to add all prev state values
    ...state, 

    value1: 2,
    value2: true,
    value3: ['a'],
  });
};
...

```

---

## useEffect()

- Если хук `useState` заменил `state` классового компонента, то хук `useEffect` заменил все методы жизненного цикла (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount` и т.д.). 
- Может использоваться несколько раз в одном компоненте.
- Можно управлять перерендером компонента.

### componentDidMount()

- Срабатывает при каждом вмонтировании компонента в `Virtual Dom`;
- Запросы к API;
- Изменение локального state при загрузке (change `initialState`);
- Лоадеры;

```tsx
import { useState, useEffect } from 'react';

const SomeComp = () => {
  const [count, setCount] = useState(0);


  // будет срабатывать при каждом рендеринге компонента
  useEffect(() => {
    setCount(count + 1);
  }, []);

  return (
    <div>{count}</div>
  );
}
```

---

### componentDidUpdate(), props/state update

- Будет срабатывать при первом рендере;
- Будет срабатывать каждый раз после изменения зависимостей;
- Зависимостей может быть несколько через запятую;
- Во внутрь `useEffect` можно записывать условия, чтобы была бóльшая гибкость;

```tsx
import { useState, useEffect } from 'react';

const SomeComp = () => {
  const [count, setCount] = useState(0);


  // каждый раз после изменения count и при первом рендере
  useEffect(() => {
    // вернет новое состояние count 
    // будет срабатывать при первом рендере
    console.info('new counter value: ', count);

    // вернет предыдущее состояние count до изменения 
    // не будет срабатывать при первом рендере!
    return () => {
      console.info('previos counter value: ', count);
    };
  }, [count]);

  return (
    <div>{count}</div>
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
  const [count, setCount] = useState(0);


  // будет срабатывать при каждом демонтировании компонента
  useEffect(() => {
    return () => setCount(0);
  }, []);

  return (
    <div>{count}</div>
  );
}
```

---

### componentWill

```tsx
useEffect(() => {
  return () => setCount(0);
});
```

---

## useLayoutEffect()

- Такой же как и `useEffect`, только грузиться ещё до отрисовки html.
- Срабатывает раньше чем `useEffect`

---

## useContext()

- Позволяет передавать `state` на любой уровень, что-то вроде встроенного `redux` в `react`
- Можно избавиться от `property drilling`
- Внутрь контекста можно передавать всё, что угодно (примитивы, функции, объекты).

```ts title='ThemeContext.ts'
// создаём контекст
import React from 'react';

// default value
const theme = 'light';

export const ThemeContext = React.createContext(theme);
```

У контекста есть встроенный `Provider`, которым нужно обернуть вложенные компоненты

```tsx title="_app.tsx"
const [theme, setTheme] = useState('light');

const onButtonClick = () => {
  setTheme(theme === 'light' ? 'dark' : 'light');
};
...
<ThemeContext.Provider value={theme}>
  <PageBaseLayout>
    <Component {...pageProps} />

    <button onClick={onButtonClick}>{theme}</button>
  </PageBaseLayout>
</ThemeContext.Provider>
```

С помощью хука `useContext` можно получить доступ к `theme` из любого компонента внутри `<ThemeContext.Provider>`

---

## useRef()

- Ссылка на DOM-элемент
- Можно применять все методы работы с DOM

---

## useCallback()

TODO

---

## useMemo()

TODO

---

## useReducer()


TODO

---

## useSelector()


TODO

---

## useImperativeHandle()

TODO

---

## useDebugValue()

TODO

---

## Катомные хуки

- Самописные переиспользуемые хуки, в которых используются стандартные.
- По идее, не должны возвращать разметку (расширение .js или .ts)
- Чаще всего возвращают какое-либо состояние из `useState` внутри кастомного хука.

---
