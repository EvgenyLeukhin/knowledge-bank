---
title: Типизация
sidebar_position: 0
---

## Типизация переменных с примитивнымим типами данных.

```ts
const a: string = 'Some string';  // string
const b: number = 123;            // number
const c: boolean = true;          // boolean
const d: null =  null;            // null
const e: undefined =  undefined;  // undefined
const f: Date = new Date();       // дата
const g: symbol;                  // символ
const z: Error = new Error();     // Error
```

---

## Операторы & и |

```ts
type A = {
  name: string;
  age: number;
}

type B = {
  city: string;
  index: number;
}

// ИЛИ
const a: A | B = {
  name: 'John',
  age: 35,
}


// И
const ab: A & B = {
  name: 'John',
  age: 35,
  city: 'NY',
  index: 10001,
}
```

---

## Специальные значения

```ts
const a: any;         // любой тип
const b: unknown;     // неизвестный тип
const c: () => any;   // функция, которая может вернуть любой тип
const d: () => void;  // функция, которая ничего не возвращает
const e: () => never; // функция может никогда не закончиться и не вернуть результат
```

---

## Строгие значения

Можно использовать enum, а можно указать все возможные значения через ИЛИ.

```ts
const a: 1 | 2 = 1;
const b: 'a' | 'b' = 'a';
```

---

## Игнорирование TypeScript

```ts
// @ts-ignore
const a = b.c;
```

---

## as const

```ts
const routes = {
  home: '/',
  about: '/about',
  help: '/help',
};

// can change
routes.faq = '/faq';
```

```ts
const routes = {
  home: '/',
  about: '/about',
  help: '/help',
} as const;

// can not change!
routes.faq = '/faq'; // TS ERROR
```

---
