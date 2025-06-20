---
title: TypeScript в React
sidebar_position: 7
---

## .d.ts

Декларация типов в файле

https://www.youtube.com/watch?v=_KweR3LUGRA

---

## Простые переменные

```ts
const someString: string = 'Some stirng';
const someNumber: number = 123;
const someBoolean: boolean = false;

// объединение типов
const someUnknown: null | undefined = null;
```

Чем меньше any, тем лучше.

---

## Переменныее для типов

type - нельзя переопределять. Нельзя расширять.

Все популярные библиотеки уже имеют свой готовый набор типов.

```ts
type KeyList = readonly string[];

// можно использовать в других типах
type KeyLists = KeyList[];

type Props = {
  className: string;
  count: number;
};
```

interface - нельзя объединять, но можно расширять.

```ts
interface Props {
  className: string;
  count: number;
}
```

---

## Объекты

### Объекты с определенным набором полей

```ts
type TObj = {
  someString?: string; // опциональное
  readonly someNumber: number; // неизменяемое
  someBoolean: boolean;
  someUnknown: null | undefined;
};

// 1 вариант
const someObj: TObj = {
  someString: 'Some stirng',
  someNumber: 123,
  someBoolean: false,
  someUnknown: null,
};

// 2 вариант
const someObj: {
  someString?: string;
  readonly someNumber: number;
  someBoolean: boolean;
  someUnknown: null | undefined;
} = {
  someString: 'Some stirng',
  someNumber: 123,
  someBoolean: false,
  someUnknown: null,
};

// 3 вариант (объект или null)
const courier: {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  salaryType: number;
  additionalTypeIds: number[];
} | null;
```

---

### Объекты с неопределенным набором полей

```ts
// 1 вариант (Record)
const someUnknownObj: Record<string, number> = {
  someField1: 1,
  someField2: 2,
  someField3: 3,
  someField4: 4,
};

// 2 вариант (key)
const someUnknownObj: { [key: string]: number } = {
  someField1: 1,
  someField2: 2,
  someField3: 3,
  someField4: 4,
};
```

---

## keyof

```ts
interface LikeButtonProps {
  className: string;
  count: number;
  size: number;
}

type LikeButtonKeys = keyof LikeButtonProps; // 'className', 'count', 'size'
```

## typeof

```ts
const props = {
  className: 'Like',
  count: 3,
  size: 'L',
};

type LikeButtonProps = typeof props;

// ХОРОШО, для известных данных
const props: LikeButtonProps = {
  className: 'Like',
  count: 3,
  size: 'L',
};

// ПЛОХО, но можно для входных данных
const props = {
  className: 'Like',
  count: 3,
  size: 'L',
} as LikeButtonProps;
```

`export type TStore = ReturnType<typeof store.getState>;`

## Типизация полей объекта

```ts
interface LikeButtonProps {
  className: string;
  count: number;
  size: number;
}

const props: LikeButtonProps = {
  className: 'Like',
  count: 3,
  size: 'L',
};

// типизация полей --> 'className', 'count', 'size'
type Keys = keyof IUsageDates;

// типизация зачений --> 'string' | 'number'
type Keys = keyof typeof props;
type Values = (typeof props)[Keys];
```

## Пример

```tsx
interface IUsageDates {
  showDates: boolean;
  startDate: Date | null;
  endDate: Date | null;
}

// usageDates
const [usageDates, setUsageDates] = useState<IUsageDates>({
  showDates: false,
  startDate: null,
  endDate: null,
});

const changeUsageDates = (
  fieldName: keyof IUsageDates,
  payload: (typeof usageDates)[keyof typeof usageDates],
) => {
  setUsageDates({ ...usageDates, [fieldName]: payload });
};
```

---

## Массивы

```ts
const someArray: number[] = [1, 2, 3, 4];
const someArray: string[] = ['asdf', 'cxvzx', 'rerer', 'fadsf'];

// через дженерик
const someArray: Array<number> = [1, 2, 3, 4];
const someArray: Array<string> = ['asdf', 'cxvzx', 'rerer', 'fadsf'];

// КОТРЕЖ, когда известно точное кол-во элементов
const someArray: [string, string, string, string] = [
  'asdf',
  'cxvzx',
  'rerer',
  'fadsf',
];

// только для чтения
const someArray: readonly string[] = ['asdf', 'cxvzx', 'rerer', 'fadsf'];
const someArray: ReadonlyArray<string> = ['asdf', 'cxvzx', 'rerer', 'fadsf'];
const someArray: readonly [string, string, string, string] = [
  'asdf',
  'cxvzx',
  'rerer',
  'fadsf',
];
```

Дженерик - тип, который зависит от других типов.

---

### Any, void, unknown, never

`any` - игнорирование типизации;
`void` - функция ничего не возвращает;
`unknown` - неизвестный тип, может включать все типы одновременно
`never` - тип, который не имеет значения в js

## Функции

```ts
// function declaration
function() square(n: number): number {
  return n * n;
}

// function expression
// сокращенная
const square = (n: number) => n * n;

// полная
const square: (n: number) => number = n => n * n;
```

### Void

```tsx
// возвращает number
(n: number) => number;

// ничего не возвращает
(n: number) => void;

// любые аргументы
(...args: any[]) => any;
```

---

## Enum

Перечисления. Enumiration. Может быть одновременно и типом и значением. Компилируется в объект.

```ts
enum Size {
  S,
  M,
  L,
  XL,
}
```

Convert enum to array for maping

```ts
export enum DrugstoreView {
  DRUGSTORE = 'Аптека',
  HUB = 'Хаб',
  VSP = 'ВСП',
  LINK_TO_DISCONNECT = 'На отключение',
  LINK_APPROVED = 'На подключение',
  LINK_REJECT = 'Отказ от подключения',
}

// как любой объект
const drugstoreViews = Object.values(DrugstoreView);
```

---

## FC

```ts
// children type
type TProps = {
  children: React.ReactNode;
};
```

---

## Props

TODO

---

## Events

### HTMLInputElement / ChangeEvent

```tsx
const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const value = event.target.value;
  console.log(value);
};
```

---

### HTMLInputElement / FocusEvent

```tsx
const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
  const value = event.target.value;
  console.log(value);
};
```

---

### HTMLInputElement / FormEvent

```tsx
const onLoginHandler = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  if (email && password) {
    let errors = (await dispatch(login(email, password))) as unknown as boolean;
  }
};
```

---

### HTMLDivElement / MouseEvent

```tsx
const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
  const value = event.target.value;
  console.log(value);
};
```

### Автоподстановка event

```tsx
<UiRemoveIcon
  title='Удалить'
  width={15.75}
  height={18.38}
  color={hasAccess ? 'primary' : 'secondary'}
  // полная запись
  onClick={(e: React.MouseEvent<HTMLSpanElement>) => removeHandle(е)}
  // можно записывать коротко без e
  onClick={removeHandle}
/>;

// метод-обработчик
const removeHandle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  e.stopPropagation();

  if (hasAccess) {
    dispatch(
      setConfirmationOpen({
        dialogType: 'positive',
        dialogText: `Вы действительно хотите удалить шаблон ${data.name}?`,
        confirmationFunction: () => {
          dispatch(deleteExpressIntervalTemplateByUuid(data.uuid));
        },
      }),
    );
  }
};
```

---

## DOM

```ts
const ref = useRef<HTMLDivElement>(null);

const ref2 = useRef<HTMLInputElement>(null);
```

---

## Extends

```ts
interface LikeButtonProps {
  className: string;
  count: number;
}

interface CssProps {
  className: string;
}

// подмешиваем поле count в интерфейс CssProps
interface LikeButtonProps extends CssProps {
  count: number;
}

// 2 вариант - через type
type LikeButtonProps = CssProps & { count: number };
```

### Пример extends

```tsx
import { Tooltip } from '@material-ui/core';
import { useSelector } from 'react-redux';

// импортируем готовые пропсы из либы
import { NavLink, NavLinkProps } from 'react-router-dom';
import { TStore } from 'redux/store/store';

// примешиваем свои кастомные пропсы
interface NavLinkWithHashProps extends NavLinkProps {
  title?: string;
}

// передаем в свой компонент-обертку все пропсы (существующие и кастомные)
const NavLinkWithHash: React.FC<NavLinkWithHashProps> = ({
  title,
  ...props
}) => {
  const { hubId } = useSelector((state: TStore) => ({
    hubId: state.orders.filters.hubIds[0],
  }));

  const newHref = `${props.to}#ordersFilterHubId=${hubId};`;

  return (
    <Tooltip title={title || ''}>
      <NavLink {...props} to={newHref}>
        {props.children}
      </NavLink>
    </Tooltip>
  );
};

export default NavLinkWithHash;
```

---

## Дженерики

Если есть повроряющиеся интерфейсы, то можно создать интерфейс с дженериком

```ts
interface LikeButtonProps1 {
  className: string;
  count: number;
  size: number;
}

interface LikeButtonProps2 {
  className: string;
  count: number;
  size: string;
}

interface LikeButtonProps3 {
  className: string;
  count: number;
  size: boolean;
}
```

Создаем Дженерик

```tsx
interface LikeButtonProps<T> {
  className: string;
  count: number;
  size:T;
}

// используем
const a = (
  obj1: LikeButtonProps<number>
  obj2: LikeButtonProps<string>
  obj3: LikeButtonProps<boolean>
) => {
  return (
    <ul>
      <li>{obj1.size}</li>
      <li>{obj2.size}</li>
      <li>{obj3.size}</li>
    </ul>
  );
}
```

### Partial

Может быть использован не весь тип данных, а только какая-то часть

```tsx
type TProps = {
  update: (pagination: Partial<IPagination>) => void;
  params: Partial<IArrowParams>;
};
```
