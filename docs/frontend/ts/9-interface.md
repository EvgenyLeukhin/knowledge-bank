---
title: Interface ✓
sidebar_position: 9
---

- Типизация объектных типов данных
- Может экспортироваться
- Может расширяться
- Не работает с keyof, typeof
- Не подсвечивается в VS Code


## Опциональные поля

```ts
interface MassEditData {
  additionalStatusId: number | undefined;
  hasOnlinePayment: boolean | undefined;
}

// можно записать так:
interface MassEditData {
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

```ts
interface IParent {
  a: string;
  b: number;
  c: boolean;
}

interface IChild extends IParent {
  d: number[];
  e: string;
}

// IChild эквивалентен
interface IChild {
  a: string;
  b: number;
  c: boolean;
  d: number[];
  e: string;
}
```

---

## Pick

Создание нового типа из "выдергивания" свойств другого типа или интерфейса.

```ts
interface ISla {
  id: number;
  name: string;
  color: string;
  selected: boolean;
  editing: boolean;
  intervals: ISlaInterval[];
  transportCompany: boolean;
  user: User | null;
  updatedAt: string;
  createdAt: string;
}

// новый тип из 4-ех свойств интерфейса ISla
type TPlainSla = Pick<ISla, 'id' | 'name' | 'color' | 'selected'>;

// или так: новый интерфейс с пустым расширением
interface IPlainSla extends Pick<ISla, 'id' | 'name' | 'color' | 'selected'> {}
```

---

## Pick with extends

```ts
interface IDragDropObject {
  state: string
  available: boolean;
  result: number;
  provided: boolean;
  message: string;
}

interface IDragDropHandler extends Pick<
  IDragDropObject, 
  'result' | 'provided',
> {
  handler: string,
}

// эквивалентно этому
interface IDragDropHandler {
  result: number;
  provided: boolean;
  handler: string,
}

```

---

## Omit

Создание нового интерфейса из "пропускания" свойств другого интерфейса. Обратное Pick.

```ts
interface TSla {
  id: number;
  name: string;
  color: string;
  selected: boolean;
  editing: boolean;
  transportCompany: boolean;
  updatedAt: string;
  createdAt: string;
}

// новый interface из 4-ех свойств типа TSla (без расширения)
interface IPlainSla extends Omit<TSla, 'id' | 'name' | 'color' | 'selected'> {
}

// эквивалентно
interface IPlainSla {
  editing: boolean;
  transportCompany: boolean;
  updatedAt: string;
  createdAt: string;
}
```

---

## Omit with extends

Создание нового интерфейса из "пропускания" свойств другого интерфейса. Обратное Pick.

```ts
interface TSla {
  id: number;
  name: string;
  color: string;
  selected: boolean;
  editing: boolean;
  transportCompany: boolean;
  updatedAt: string;
  createdAt: string;
}

// новый interface из 4-ех свойств типа TSla
interface IPlainSla extends Omit<TSla, 'id' | 'name' | 'color' | 'selected'> {
  date: Date;
}

// эквивалентно
interface IPlainSla {
  editing: boolean;
  transportCompany: boolean;
  updatedAt: string;
  createdAt: string;
  date: Date;
}
```
