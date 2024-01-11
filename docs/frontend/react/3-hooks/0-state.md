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


