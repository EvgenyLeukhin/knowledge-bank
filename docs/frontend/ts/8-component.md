---
title: React-компонент
sidebar_position: 8
---

## Props (I вариант)

Generic type.

```tsx
type TProps = {
  prop1: string;
  prop2: number;
}

const SomeComp: React.FC<TProps> = ({ prop1, prop2, style }) => {
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

## Children and style type

```ts
type TProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
}
```

---

## Mix props

```tsx
export type MixProps<P = {}> = P & {
  className?: string;
  style?: React.CSSProperties;
};

// props компонента
interface Props {
  onClick?: () => void;
  disabled?: boolean;
}

// использоание MixProps
const GameButton: React.FC<MixProps<Props>> = ({ className, onClick, style, children, disabled }) => {
  return (
    <button onClick={onClick} style={style} disabled={disabled}>
      {children}
    </button>
  );
};

export { GameButton };
```
