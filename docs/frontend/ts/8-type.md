---
title: Type ✓
sidebar_position: 8
---

- Типизация объектных типов данных
- Может экспортироваться
- Не может расширяться
- Может генерироваться из объекта (keyof, typeof)

---

## Опциональные поля

```ts
type MassEditData = {
  additionalStatusId: number | undefined;
  hasOnlinePayment: boolean | undefined;
}

// можно записать так:
type MassEditData = {
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

// применение
const a: Record<TLikeButtonKeys, string> = {
  className: 'some',
  count: 'some',
}
```

## keyof with Pick

```ts
type T2gisSchedulePicked = keyof Pick<
  T2gisSchedule,
  'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'
>;

// эквивалентно
type T2gisSchedulePicked = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
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

type TGeneratedPerson = typeof person;

// эквивалентно
type TGeneratedPerson = {
  name: string;
  surname: string;
  age: number;
}
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

---

## Pick

Создание нового типа из "вырезания" свойств другого типа.

```ts
type TSla = {
  id: number;
  name: string;
  color: string;
  selected: boolean;
  editing: boolean;
  transportCompany: boolean;
  updatedAt: string;
  createdAt: string;
}

// новый тип из 4-ех свойств типа TSla
type PlainSla = Pick<TSla, 'id' | 'name' | 'color' | 'selected'>;

// эквивалентно
type PlainSla = {
  id: number;
  name: string;
  color: string;
  selected: boolean;
}
```

---

## Omit

Создание нового типа из "пропускания" свойств другого типа. Обратное Pick.

```ts
type TSla = {
  id: number;
  name: string;
  color: string;
  selected: boolean;
  editing: boolean;
  transportCompany: boolean;
  updatedAt: string;
  createdAt: string;
}

// новый тип из 4-ех свойств типа TSla
type TPlainSla = Omit<TSla, 'id' | 'name' | 'color' | 'selected'>;

// эквивалентно
type TPlainSla = {
  editing: boolean;
  transportCompany: boolean;
  updatedAt: string;
  createdAt: string;
}
```
