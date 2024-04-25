---
title: Interface
sidebar_position: 5
---

- Типизация объектных типов данных
- Может экспортироваться
- Может расширяться
- Не работает с keyof, typeof
- Может иметь параметры
- Не подсвечивается в VS Code

---

## Опциональные поля

```ts
interface IMassEditData {
  additionalStatusId: number | undefined;
  hasOnlinePayment: boolean | undefined;
}

// можно записать так:
interface IMassEditData {
  additionalStatusId?: number;
  hasOnlinePayment?: boolean;
}

// можно экспортировать
export interface IMassEditData {
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

// ключи интерфейса'className' | 'count' | 'size'
type TLikeButtonKeys = keyof ILikeButtonProps;

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

Multi extends. Будет схлопывание интерфейсов в один

```ts
interface AuthStateType extends IAuth, ILoading, IMessage {}
```

---

## With params

```ts
interface ISomeObj<T> {
  className: string;
  count: number;
  data: T;
}

// применение
const a: ISomeObj<string> = {
  className: 'abc',
  count: 10,
  data: 'Some',
};
```

Несколько параметров:

```ts
interface ISomeObj<T1, T2> {
  className: string;
  count: number;
  data1: T1;
  data2: T2;
}

// применение
const a: ISomeObj<string, number> = {
  className: 'abc',
  count: 10,
  data1: 'Some',
  data2: 123,
};
```

Параметры по умолчанию:

```ts
interface ISomeObj<T = any> {
  className: string;
  count: number;
  data: T;
}

// применение
const a: ISomeObj<string> = {
  className: 'abc',
  count: 10,
  data: 'Some',
};
```

---

## Pick

Создание нового типа из "копирования" свойств другого типа или интерфейса.

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

Создание нового интерфейса из "удаления" свойств другого интерфейса. Обратное Pick.

```ts
export interface IRawZone {
  id: number;
  name: string;
  uuid: IUuid;
  slaId: number | null;
  hubs: {
    id: number;
    ordinalNumber: number;
  }[];
  expressTemplateUuid: string | null;
  active: boolean;
  tagId: number | null;
  userGroupIds: number[];
  coordinates: IZoneCoordinates[];
}

// через тип
export type IZoneFromServer = Omit<IRawZone, 'coordinates'>;

// через интерфейс
export interface IZoneFromServer extends Omit<IRawZone, 'coordinates'> {};
```

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

---

## Namespace

TODO
