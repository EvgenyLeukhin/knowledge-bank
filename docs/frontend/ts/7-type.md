---
title: Type ✓
sidebar_position: 7
---

- Типизация объектных типов данных
- Может экспортироваться
- Не может расширяться
- Может генерироваться из объекта (keyof, typeof)

---

## Опциональные поля

```ts
export type MassEditData = {
  additionalStatusId: number | undefined;
  hasOnlinePayment: boolean | undefined;
}

// можно записать так:
export type MassEditData = {
  additionalStatusId?: number;
  hasOnlinePayment?: boolean;
}
```

---

## Type как аналог enum

```ts
type TDirection = 'left' | 'up' | 'right' | 'down';

type TProps = {
  stroke?: string;
  direction?: TDirection;
};
```

---

## keyof 

Ключи объекта. Можно использовать для типизации объектов с type и interface.

```ts
type TLikeButtonProps = {
  className: string;
  count: number;
  size: number;
}

// ключи типа
type TLikeButtonKeys = keyof TLikeButtonProps; // 'className', 'count', 'size'


const a: Record<TLikeButtonKeys, string> = {
  className: 'some',
  count: 'some',
}
```

---

## typeof

Генерация типа из объекта.

```ts
const person = {
  name: 'John',
  surname: 'Smith',
  age: 25,
};

type TPerson = {
  name: string;
  surname: string;
  age: number;
}

type TGeneratedPerson = typeof person; // аналог TPerson
```

---

## keyof typeof

Генерация ключей из объекта.

```ts
const person = {
  name: 'John',
  surname: 'Smith',
  age: 25,
};

type TPersonKeys = 'name' | 'surname' | 'age';

type TGeneratedPersonKeys = keyof typeof person; // аналог TPersonKeys (ключи типа или интерфейса)
```
