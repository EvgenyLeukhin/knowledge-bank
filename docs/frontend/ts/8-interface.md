---
title: Interface
sidebar_position: 8
---

- Типизация объектных типов данных
- Может экспортироваться
- Может расширяться


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
