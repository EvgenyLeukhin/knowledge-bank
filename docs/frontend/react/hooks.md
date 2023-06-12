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

- Такой же как и `useEffect`, только грузиться ещё до отрисовки html.
- Срабатывает раньше чем `useEffect`
- Применяется редко

---

## useRef()

- Ссылка на DOM-элемент
- Можно применять все методы работы с DOM

```tsx
const SomeComp = ({ count }: TProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string>('some string');

  // можно использовать dom-методы
  const onButtonClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        type='text'
        value={inputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
      />

      <button onClick={onButtonClick}>Click me</button>
    </div>
  )
};
```

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
