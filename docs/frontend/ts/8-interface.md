---
title: Interface
sidebar_position: 8
---

- Типизация объектных типов данных
- Может экспортироваться
- Может расширяться
- Не работает с keyof, typeof
- Не подсвечивается в VS Code


## Опциональные поля

```ts
export interface MassEditData {
  additionalStatusId: number | undefined;
  hasOnlinePayment: boolean | undefined;
}

// можно записать так:
export interface MassEditData {
  additionalStatusId?: number;
  hasOnlinePayment?: boolean;
}
```

---

## keyof 

Ключи объекта. Можно использовать для типизации объектов с type и interface.

```ts
interface ILikeButtonProps {
  className: string;
  count: number;
  size: number;
}

// ключи интерфейса
type TLikeButtonKeys = keyof ILikeButtonProps; // 'className', 'count', 'size'


const a: Record<TLikeButtonKeys, string> = {
  className: 'some',
  count: 'some',
}
```

---

## Extend

TODO

---

## Omit

TODO

---

## Pick

TODO

---
