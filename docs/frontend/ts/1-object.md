---
title: Объект ✓
sidebar_position: 1
---

## I способ (inline)

```ts
const settings: {
  color: string;
  delay: number;
  retry: boolean;
} = {
  color: '#F00',
  delay: 2000,
  retry: false
};
```

---

## II способ (type)


```ts
type TSettings = {
  color: string;
  delay: number;
  retry: boolean;
}

const settings: TSettings = {
  color: '#F00',
  delay: 2000,
  retry: false
};
```

---

## III способ (interface)

```ts
interface ISettings {
  color: string;
  delay: number;
  retry: boolean;
}

const settings: ISettings = {
  color: '#F00',
  delay: 2000,
  retry: false
};

```

---

## Record

- Для объектов с заранее неизвестным набором полей

```ts
export type TRecord = Record<string, number>;

// или такая запись (через key)
export type TRecord = Record<[key: string], number>;

const a: TRecord = {
  a: 1,
  b: 2,
  c: 3,
}
```

---
