---
title: Массивы ✓
sidebar_position: 2
---

## I способ (with [ ])

```tsx
const a: number[] = [1,2,3];
```

---

## II способ (generic)

```tsx
const a: Array<number> = [1, 2, 3];
```

---

## Array of objects

```ts
// type
type TSomeType = {
  id: number;
  name: string;
}

// or interface
interface ISomeInterface {
  id: number;
  name: string;
}

const a: TSomeType[] = [{...}, {...}, ];
```

---

## Кортеж

```ts
// КОТРЕЖ, когда известно точное кол-во элементов
const someArray: [string, string, string, string] = ['asdf', 'cxvzx', 'rerer', 'fadsf'];
```
