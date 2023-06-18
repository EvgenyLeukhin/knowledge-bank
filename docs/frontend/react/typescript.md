---
title: TypeScript в React +--
sidebar_position: 7
---

## Простые переменные

```ts
const someString: string = 'Some stirng';
const someNumber: number = 123;
const someBoolean: boolean = false;
const someUnknown: null | undefined = null;
```

---

## Объекты

### Объекты с определенным набором полей


```ts
type TObj = {
  someString: string;
  someNumber: number;
  someBoolean: boolean;
  someUnknown: null | undefined;
}

// 1 вариант
const someObj: TObj = {
  someString: 'Some stirng',
  someNumber: 123,
  someBoolean: false,
  someUnknown: null,
}

// 2 вариант
const someObj: {
  someString: string;
  someNumber: number;
  someBoolean: boolean;
  someUnknown: null | undefined;
} = {
  someString: 'Some stirng',
  someNumber: 123,
  someBoolean: false,
  someUnknown: null,
}
```

---

### Объекты с неопределенным набором полей

```ts
// 1 вариант (Record)
const someUnknownObj: Record<string, number> = {
  someField1: 1,
  someField2: 2,
  someField3: 3,
  someField4: 4,
}

// 2 вариант (key)
const someUnknownObj: { [key: string]: number } = {
  someField1: 1,
  someField2: 2,
  someField3: 3,
  someField4: 4,
}
```

keyof, typeof 

TODO

```export type TStore = ReturnType<typeof store.getState>;```

---

## Массивы

```ts
const someArray: number[] = [1, 2, 3, 4];
const someArray: string[] = ['asdf', 'cxvzx', 'rerer', 'fadsf'];
```

---

## Функции

TODO

---

## Enum

TODO

---

## FC

```ts
// children type
type TProps = {
  children: React.ReactNode
}
```

---

## Props

TODO

---

## Events

TODO

---

## DOM

```ts
const ref = useRef<HTMLDivElement>(null);
```

TODO

---

## Extends

TODO

---
