---
title: Хуки +--
sidebar_position: 6
---

- Хуки используют деструктуризацию массива, чтобы можно было сразу присвоить переменные равные элементам массива;
- Хуки принято именовать префиксом `use__`;


```ts
const arr = ['a', 'b', 'c'];

const [const1, const2, const3] = arr;

const1; // 'a'
const2; // 'b'
const3; // 'c'

```

---

## useState()

- Позволяет использовать локальный стейт внутри функциональных React-компонентов, а не только в классовых как было в ранних версиях React.
- Функции, изменяюшие state принято именовать с помощью префикса `set__`.


```ts
const [state, setState] = useState(initialState);
```

- `state` - переменная, хранящее состояние. Как правило, это строка, число, булеан или массив любых данных.
- `setState` - функция, изменяющая `state`.
- `initialState` - первоначальное значение `state`.

### Одиночный state

```tsx
import { useState } from 'react';
...
const [count, setCount] = useState(0);
const [count, setCount] = useState<number>(0); // with TS
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

- Вместо большого количества одиночных можно использовать объект состояний, на подобие как было в классовых компонентах.

- `initialState` может принимать даже функцию, которая возвращает значение.


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
    ...state, // need to add all prev state
    value1: 2,
    value2: true,
    value3: ['a'],
  });
};
...

```

---

## useEffect()

TODO

---

## useRef()

TODO

---

## useCallback()

TODO

---

## useMemo()

TODO

---

## useContext()


TODO

---

## useReducerLayoutEffect()

TODO

---

## useImperativeHandle()

TODO

---

## useDebugValue()

TODO

---

## Катомные хуки

TODO

---
