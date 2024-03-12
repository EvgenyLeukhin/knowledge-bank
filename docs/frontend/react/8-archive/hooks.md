---
title: Хуки
sidebar_position: 6
---

export const MARK = ({ children }) => {
  const styles = {
    background: 'deeppink', 
    color: 'white', 
    padding: 10, 
    borderRadius: 10,
  };
  return (
    <mark style={styles}>
      {children}
    </mark>
  )
};

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

## <MARK>useState()</MARK>

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

```tsx
setGameState: React.Dispatch<React.SetStateAction<TPandaGameState>>;
...

setGameState((prevState: TPandaGameState) => {
  return {
    ...prevState,
    gameStatus: 'take-cards',
  };
});

// короткая запись
setGameState((prevState: TPandaGameState) => ({
  ...prevState,
  gameStatus: 'take-cards',
}));
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

### Типизация setState

Если `setState` передается как пропс, то его нужно типизировать

```ts

type TObj = {
  id: number;
  name: string;
}

// родитель
const [state, setState] = useState<number>(0);
const [obj, setObj] = useState<TObj>({ id: 0, name: '' });

// потомок
type TProps = {
  // изменение примитива
  setState : React.Dispatch<React.SetStateAction<number>>;

  // изменение объекта
  setObj: React.Dispatch<TObj>;
}
```

---

## <MARK>useEffect()</MARK>

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

## <MARK>useLayoutEffect()</MARK>

`useLayoutEffect` выполняет код до отрисовки в браузере

- Такой же как и `useEffect`, только грузиться ещё до отрисовки html.
- Срабатывает раньше чем `useEffect`
- Применяется редко

---

## <MARK>useRef()</MARK>

- Ссылка на любую другую js-конструкцию
- Ссылка на DOM-элемент
- К DOM-ссылка можно применять все нативные методы работы с DOM

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

## <MARK>useContext()</MARK>

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

---

## <MARK>useMemo()</MARK>

<mark>useMemo - это как useEffect + useState. Чтобы не менять стейт при изменении пропса компонента с useEffect, можно использовать useMemo, в которой в константе сразу будет вычисляться значение</mark>

```tsx
// плохо: используем 2 хука для высчитывания значения
const [activePlayer, setActivePlayer] = useState(null);

useEffect(() => {
  setActivePlayer(players.find(player.id === activePlayerId));
}, [players])


// хорошо: используем 1 хук useMemo
const activePlayer = useMemo(() => {
  return players.find(player.id === activePlayerId);
}, [players]);

// если никаких зависимостей нет, то (будет создаваться только при загрузке и не будет перерендериваться)
const activePlayer = useMemo(() => {
  return // do something
}, []);
```

- Оптимизация от перерендеров, кеширование вычисляемого значения;
- Если есть в компоненте функции, которые вычисляют какие-либо значения, то они будут заново вызываться при любых перерендерах;
- Чтобы такого не было, нужно использовать `useMemo()`;
- Синтаксис:`useMemo(() => fn, [deps])`;

```tsx
import { useMemo } from 'react';

const Test = ({ name, count }: { name: string; count: number }) => {
  // returnTitle - функция, которая будет постоянно вызываться при изменении любых props (например count)
  const returnTitle = () => (
    <span>
      Hello, <b>{name}!</b>
    </span>
  );

  // BAD: always calls
  const title = returnTitle();


  // GOOD: запоминает результат и функция будет вызываться только при изменении name
  const title = useMemo(() => returnTitle(), [name]);

  return (
    <>
      <div>{title}</div>
      <div>
        Count: <b>{count}</b>
      </div>
    </>
  );
};

export default Test;
```

---

## <MARK>useCallback()</MARK>

<mark>useCallback - как useMemo только для экшенов. Управление реактивностью</mark>

```tsx
// плохо - при каждом перерендере эта функция будет каждый раз пересоздаваться
// Не управляем реактивностью
const onClick = () => {
  props.onClick?.apply(null);
  !isAuthenticated ? login() : onRename();
};

// хорошо - эта функция будет каждый раз пересоздаваться только при изменении [isAuthenticated, onRename]
// Управляем реактивностью
const onClick = useCallback(() => {
  props.onClick?.apply(null);
  !isAuthenticated ? login() : onRename();
}, [isAuthenticated, onRename]);

// если никаких зависимостей нет, то (будет создаваться только при загрузке и не будет перерендериваться)
const onClick = useCallback(() => {
  // do somethint
}, []);
```


- Такой же как `useMemo()` только кэшируется не вычисляемое значение;
- Если компонент принимает какую-ниб пропс-функцию (например, которая меняет стейт), то при ререндере род. компонента, дочерний компонент также будет перерендеривааться так как ссылка на эту функцию будет обновлена;
- Чтобы такого не было, нужно использовать `useCallback()`;
- Синтаксис:`useCallback(fn, deps)`;

```tsx
export default function ToDoList() {
  const [count, setCount] = useState<number>(0);

  const onSetCount = useCallback(() => setCount(count + 1), [count]);

  return (
    <section className={styles.ToDoList}>
      {/* count */}
      <div>
        Count: <b>{count}</b>
        <div>
          <button onClick={onSetCount1}>Update count</button>
        </div>
      </div>
    </section>
  )
}
```

---

## <MARK>useReducer()</MARK>


TODO

---

## <MARK>useImperativeHandle()</MARK>

TODO

---

## <MARK>useDebugValue()</MARK>

TODO

---




