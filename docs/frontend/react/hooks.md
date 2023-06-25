---
title: Хуки ++-
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

## <MARK>useEffect()</MARK>

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

## <MARK>useLayoutEffect()</MARK>

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

При перерендере компонента все вложенные функции в компоненте будут пересоздаваться и перевызываться, что не очень круто.

Своего рода умная обертка-оптимизация для функций, которые должны вызываться внутри компонентов.

Как бы кешируем значение, если оно не менялось, то функция выполняться не будет. Для оптимизации.

- `useMemo(() => fn, deps)`
- useMemo is Not Recommended to Call Other Hooks (нельзя менять локальный стейт)
- Мемоизации значений
- Запоминает / кэширует значение(объект) возвращаемой функции, пока не изменились зависимости
- В useMemo аргумент-функция не принимает параметры
- Включает в себя функцию, результат которой нужно мемоизировать и зависимости для вызова
- Оптимизация компонентов


### Применение:

1. Есть какая-то функция внутри или вне (через import) компонента с пропсами, которая высчитывает какое-либо значение.
2. Результат выполнения этой функции можно представить в виде константы, по типу `const a = someFunc();`.
3. В этой функции могут параметром передаются или вычисляться какие-ниб пропсы компонента.
4. При изменении любых пропсов (даже которые не передаются в функцию параметрами) эта функция постоянно перевызывается, что НЕ КРУТО!
5. Эту константу нужно переписать с `useMemo()` и поставить только нужную зависимость.


```tsx
import { useMemo } from 'react';

const Test = ({ name, count }: { name: string; count: number }) => {
  // returnTitle - функция, которая будет постоянно вызываться при изменении любых props (например count)
  // хотя данная функция count не обрабатывает вообще
  const returnTitle = () => (
    <span>
      Hello, <b>{name}!</b>
    </span>
  );

  // bad: always calls
  const title = returnTitle();


  // good: запоминает результат и функция будет вызываться только при изменении name
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

Применяется тогда, когда в качестве пропсов передается функция, и вот ее нужно мемоизировать.

- `useCallback(fn, deps)`
- Похож на `useMemo()`, только запоминает всю саму функцию, а не только ее возвращаемое значение
- мемоизации коллбеков
- Нужно, когда какие-либо функции есть в зависимостях у useEffect
- Запоминает правильную ссылку на функцию
- Запоминает ссылку функции, пока не изменились зависимости
- Должен использоваться в первую очередь, а уже потом `useMemo()`

### Применение:

1. У родительского компонента есть стейт и есть дочерний компонент, который принимает какой-ниб функцию с `setState` родителя.
2. При перерендере родителя, передаваемая функция с `setState` дочернему компоненту будет постоянно обновляться (сслылка будет изменяться).
3. Как следствие, дочерний компонент тоже будет ререндериться, так как у него типа обновился пропс `setState`, хотя по факту ничего не изменилось, что НЕ КРУТО!
4. Чтобы такого не возникало, нужно обернуть родительскую функцию в `useCallback()`.

---

## <MARK>useMemo() и useCallback() на практике</MARK>

- При изменении count будет перерендер всего и `<Memo />` и `<Child />`

```tsx
import { useCallback, useState } from 'react';
import styles from './ToDoList.module.scss';

import Memo from './Memo';
import Callback from './Callback';

export default function ToDoList() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('Some name');

  const increaseCount = () => {
    setCount(count + 1);
  };

  const changeName = () => {
    setName(name + Math.floor(Math.random() * 10));
  };

  return (
    <section className={styles.ToDoList}>
      <Memo count={count} name={name} />
      <Callback changeName={changeName} />

      <button onClick={increaseCount}>Icrise count</button>
    </section>
  );
}
```

```tsx
import React from 'react';

type TProps = {
  children?: React.ReactNode;
  count: number;
  name: string;
};

const Memo = ({ children, count, name }: TProps) => {
  console.log('B - Memo render');

  // ПЛОХО  - будет перевызов всегда
  const returnCount = () => {
    return (
      <div>
        <span>Count:&nbsp;</span>
        <b>{count}</b>
      </div>
    );
  };

  // ХОРОШО - будет перевызов только при изменении count
  const returnCount = useMemo(() => {
    return (
      <div>
        <span>Count:&nbsp;</span>
        <b>{count}</b>
      </div>
    );
  }, [count]);

  // ПЛОХО  - будет перевызов всегда
  const returnName = () => {
    console.log('B - returnName');

    return (
      <div>
        <span>Name:&nbsp;</span>
        <b>{name}</b>
      </div>
    );
  };

  // ХОРОШО - будет перевызов только при изменении name
  const returnName = useMemo(() => {
    return (
      <div>
        <span>Name:&nbsp;</span>
        <b>{name}</b>
      </div>
    );
  }, [name]);

  return (
    <div>
      <h2>Memo</h2>

      {returnCount}
      {returnName}
    </div>
  );
};

export default Memo;
```

```tsx
type TProps = {
  changeName: () => void;
};

const Callback = ({ changeName }: TProps) => {
  console.log('C - Callback render');

  return <div>Callback</div>;
};

export default Callback;
```

---

## <MARK>useReducer()</MARK>


TODO

---

## <MARK>useSelector()</MARK>


TODO

---

## <MARK>useImperativeHandle()</MARK>

TODO

---

## <MARK>useDebugValue()</MARK>

TODO

---

## Кастомные хуки

- Самописные переиспользуемые хуки, в которых используются стандартные.
- По идее, не должны возвращать разметку (расширение .js или .ts)
- Чаще всего возвращают какое-либо состояние из `useState` внутри кастомного хука.

---
