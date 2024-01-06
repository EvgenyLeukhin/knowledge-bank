---
title: Type
sidebar_position: 7
---

- Типизация объектных типов данных
- Может экспортироваться
- Не может расширяться

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
