---
title: React-компонент
sidebar_position: 7
---

## Props (I вариант)

Generic type.

```tsx
type TProps = {
  prop1: string;
  prop2: number;
}

const SomeComp: React.FC<TProps> = ({ prop1, prop2 }) => {
  return (
    <div>SomeComp</div> 
  )
}
```

---

## Props (II вариант)

Типизация props.

```tsx
type TProps = {
  prop1: string;
  prop2: number;
}

const SomeComp = ({ prop1, prop2 }: TProps) => {
  return (
    <div>SomeComp</div> 
  )
}
```

---

## Children type

```ts
type TProps = {
  children: React.ReactNode
}
```
