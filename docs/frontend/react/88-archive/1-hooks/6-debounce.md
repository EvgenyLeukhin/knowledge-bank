---
title: debounce, throttle
sidebar_position: 7
---

## useDebounce

<img src="../../../../../img/react/debounce.png" alt="debounce.png" width="600" />


**Debounce** — выполнение дейсвия тогда, когда после последней попытки вызова прошло определённое время

```tsx
import { useEffect, useState } from 'react';

export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
```

Применение. Чаще всего такие значения помещают в зависимость useEffect, внутри которого содержиться обработчикполя формы. Чтобы запросы происходили не на каждый onChange этого поля формы, а только после полного ввода поискового запроса.

```tsx
import { ChangeEvent, useEffect, useState } from 'react'

import { useDebounce } from 'usehooks-ts'

export default function Component() {
  const [value, setValue] = useState<string>('')
  const debouncedValue = useDebounce<string>(value, 500)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  // Fetch API (optional)
  useEffect(() => {
    // Do fetch here...
    // Triggers when "debouncedValue" changes
  }, [debouncedValue])

  return (
    <div>
      <p>Value real-time: {value}</p>
      <p>Debounced value: {debouncedValue}</p>

      <input type="text" value={value} onChange={handleChange} />
    </div>
  )
}
```

---

## useThrottle

<img src="../../../../../img/react/throttle.png" alt="debounce.png" width="600" />

**Throttling** — функция будет выполняться не чаще одного раза в указанный период, даже если она будет вызвана много раз в течение этого периода

```tsx
import { useEffect, useRef, useState } from 'react';

export function useThrottle<T>(value: T, interval = 500): T {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastExecuted = useRef<number>(Date.now());

  useEffect(() => {
    if (Date.now() >= lastExecuted.current + interval) {
      lastExecuted.current = Date.now();
      setThrottledValue(value);
    } else {
      const timerId = setTimeout(() => {
        lastExecuted.current = Date.now();
        setThrottledValue(value);
      }, interval);

      return () => clearTimeout(timerId);
    }
  }, [value, interval]);

  return throttledValue;
}
```

Применение.

```tsx
import React, { useEffect, useState } from 'react'

import { useThrottle } from './useThrottle'

export default function App() {
  const [value, setValue] = useState('hello')
  const throttledValue = useThrottle(value)

  useEffect(() => console.log(`throttledValue changed: ${throttledValue}`), [
    throttledValue,
  ])

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }

  return (
    <div>
      Input: <input value={value} onChange={onChange} />
      <p>Throttled value: {throttledValue}</p>
    </div>
  )
}
```


