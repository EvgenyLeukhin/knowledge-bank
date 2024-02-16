---
title: ref
sidebar_position: 2
---

- Ссылка на любую другую js-конструкцию
- Ссылка на DOM-элемент
- К DOM-ссылка можно применять все нативные методы работы с DOM

```tsx
import { useRef, useState } from 'react';

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
