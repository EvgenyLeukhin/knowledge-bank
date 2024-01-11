---
title: state ✓
sidebar_position: 0
---

Изменнеие и хранение локального состояния внутри функциональных компонентов.

## Пример useState

```tsx
import { useState } from 'react';
...
const [count, setCount] = useState<number>(0);
...
<button onClick={() => setCount(count + 1)}>Change count</button>
```

---

## prevState 

Параметр setState, который содержит предыдущий state.

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

## Передача объекта в setState

Пример изменения одного поля объекта

```tsx
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

## Типизация setState при передаче в props

```tsx
type TProps = {
  // с помощью React.Dispatch
  setGameState: React.Dispatch<React.SetStateAction<TPandaGameState>>;

  // с помощью функции
  setGameState: (val: TPandaGameState) => void;
}
```

---

## Использование общего state-объекта

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


