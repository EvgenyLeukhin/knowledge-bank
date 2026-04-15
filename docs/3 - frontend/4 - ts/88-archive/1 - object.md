---
title: Объекты
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
  retry: false,
};
```

---

## II способ (type)

```ts
type TSettings = {
  color: string;
  delay: number;
  retry: boolean;
};

const settings: TSettings = {
  color: '#F00',
  delay: 2000,
  retry: false,
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
  retry: false,
};
```

---

## Record

Для объектов с заранее неизвестным набором полей

```ts
export type TRecord = Record<string, number>;

// или такая запись (через key)
export type TRecord = Record<[key: string], number>;

const a: TRecord = {
  a: 1,
  b: 2,
  c: 3,
};
```

---

## Вложенные объекты

```ts
interface IField {
  name: string;
  actual: boolean;

  // вложенный объект
  hubs?: {
    [key: number]: boolean;
  };
}
```

---

## Поля объекта как enum

```ts
export enum DrugstoreType {
  PARTNER = 1,
  OWN = 2,
  EXTERNAL = 3,
}

export enum ColorList {
  // font
  FONT_PRIMARY = '#333f48',
  FONT_SECONDARY = '#9199a3',

  ...
}

export const drugstoreType: Record<DrugstoreType, string> = {
  [DrugstoreType.PARTNER]: 'Партнерская',
  [DrugstoreType.OWN]: 'Собственная',
  [DrugstoreType.EXTERNAL]: 'Неподключенная',
};
```

---

## Поля и значения объекта как enum

```ts
export const drugstoreTypeColor: Record<DrugstoreType, ColorList> = {
  [DrugstoreType.PARTNER]: ColorList.GREEN,
  [DrugstoreType.OWN]: ColorList.BLUE,
  [DrugstoreType.EXTERNAL]: ColorList.GRAY,
};
```
