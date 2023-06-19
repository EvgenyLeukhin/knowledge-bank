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

- Ссылка на DOM-элемент или на любую другую js-конструкцию
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

Своего рода умная обертка для функций "из вне", которая избавляет компонент от лишних вызовах этих функций при изменении параметров 

- Запоминает значение(объект) возвращаемой функции, пока не изменились зависимости
- Включает в себя функцию, которую нужно мемоизировать и зависимости для вызова
- Оптимизация

Как бы кешируем значение, если оно не менялось, то функция выполняться не будет. Для оптимизации.

```tsx
// https://www.youtube.com/watch?v=btlo8kOoc-A
import { useMemo, useState } from 'react';

type TUser = {
  name: string;
  surname: string;
};

// выше есть функция, создающая юзера
function createUser(name: string, surname: string, mode: string): TUser {
  const userData = { name, surname };
  console.log(`userData-${mode}`, userData);

  return userData;
}

const SomeComp = () => {
  const [name, setName] = useState<string>('John');
  const [surname, setSurname] = useState<string>('Smith');
  const [counter, setCounter] = useState<number>(0);

  // проблема, что эта функция вызывается каждый раз при обновлении state
  // при нажатии на button меняется counter и функция перевызывается каждый раз
  // хотя мы вообще не трогаем name или surname

  // плохо - вызов функции на каждый чих
  const badUser: TUser = createUser(name, surname, 'bad');

  // хорошо - вызов функции только когда меняются нужные нам параметры
  const goodUser = useMemo(() => {
    createUser(name, surname, 'good');
  }, [name, surname]);


  return (
    <div>
      <form>
        <input
          type='text'
          name='name'
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <br />

        <input
          type='text'
          name='surname'
          value={surname}
          onChange={e => setSurname(e.target.value)}
        />

        <pre>{JSON.stringify(badUser, null, 2)}</pre>
        <pre>{JSON.stringify(goodUser, null, 2)}</pre>
      </form>

      <button onClick={() => setCounter(counter + 1)}>
        На меня нажали {counter} раз
      </button>
    </div>
  );
};

export default SomeComp;
```

### Еще пример

1. Есть `drugstores`, которые приходят из redux
2. Есть `drugstoreSearching`, которая меняется при вводе поискового текста 
3. Если вывод списка делать так `filteringDrugstores().map` (без `useMemo()`), то при каждом внешнем изменении `drugstores`, функция `filteringDrugstores` будет постоянно перевызываться, хотя результат возврата этой функции остается постоянным.
4. При имспользовании `useMemo()` функция будет перевызываться только в случае изменения `drugstoreSearching`, как должно и быть.

`filteringDrugstores().map()` - Плохо
`memoizedFilteredDrugstores.map()` - Хорошо

```tsx
const DrugstoreFilter = () => {
  const { drugstores } = useSelector((state: TStore) => state.map);
  const { drugstoreSearching } = mapFilter;

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(setDrugstoreSearching(value));
  };

  const filteringDrugstores = () => {
    return drugstores.filter(drugstore => {
      // convert searching keys
      const drugstoreId = drugstore.id.toString().toLowerCase();
      const drugstoreName = drugstore.name.toLowerCase();
      const drugstoreAddress = drugstore.address.toLowerCase();

      // convert searching input string
      const searchingString = drugstoreSearching.toLowerCase().trim();

      return (
        drugstoreId.includes(searchingString) ||
        drugstoreName.includes(searchingString) ||
        drugstoreAddress.includes(searchingString)
      );
    });
  };

  const memoizedFilteredDrugstores = useMemo(() => {
    return filteringDrugstores();
  }, [drugstoreSearching]);

  return (
    <div className={styles.DrugstoreFilter}>
      {/* searching input */}
      <input
        type='search'
        name='map-drugstore-filter'
        id='map-drugstore-filter'
        placeholder='Поиск аптек'
        value={drugstoreSearching}
        className={styles.SearchingInput}
        onChange={event => onSearchChange(event)}
      />

      <ul className={styles.DrugstoreFilter__list}>
        {memoizedFilteredDrugstores.length ? (
          memoizedFilteredDrugstores.map((drugstore: TDrugstore, index) => {
            const isSelected = selectedDrugstores.some(
              selectedDrugstore => selectedDrugstore.id === drugstore.id,
            );

            return (
              <li
                key={drugstore.id}
                onClick={() => onDrugstoreClick(drugstore)}
                className={cn(styles.DrugstoreFilter__listItem, {
                  [styles.isSelected]: isSelected,
                })}
              >
                <span>{`${index + 1}. ${drugstore.name}`}</span>&nbsp;-&nbsp;
                <span>{drugstore.address}</span>
              </li>
            );
          })
        ) : (
          <li
            className={cn(
              styles.DrugstoreFilter__listItem,
              styles.DrugstoreFilter__noResults,
            )}
          >
            Нет результатов
          </li>
        )}
      </ul>
    </div>
  );
};

export default DrugstoreFilter;
```

---

## <MARK>useCallback()</MARK>

```tsx
- Похож на `useMemo`, только запоминает саму функцию, а не ее возвращаемое значение
- Нужно, когда какие-либо функции есть в зависимостях у useEffect
- Запоминает правильную ссылку на функцию
- Запоминает ссылку функции, пока не изменились зависимости

import { useState, useCallback, useEffect } from 'react';

const SomeComp = () => {
  const [message, setMessage] = useState<string>('Hi, everyone!!!');
  const [counter, setCounter] = useState<number>(0);

  // плохо: если функция есть в зависимости, то ее ссылка будет всегда не совпадать с той,
  // что указана в useEffect, и даже если функция не менялась, то useEffect будет реагировать
  const greeting = (message: string) => {
    console.log(message);
  };

  // хорошо - оборачиваем в useCallback
  const greeting = useCallback((message: string) => {
    console.log(message);
  }, []);

  useEffect(() => {
    greeting(message);
  }, [message, greeting]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {message}
      <button onClick={() => setCounter(counter + 1)}>
        Clicked me {counter} times
      </button>
    </div>
  );
};

export default SomeComp;
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
