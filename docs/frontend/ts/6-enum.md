---
title: Enum ✓
sidebar_position: 6
---

## enum

В скомпилированном коде enum превратится в объект.

```ts
enum LangType {
  ru = 'ru',
  en = 'en',
}
```

Поэтому можно enum преобразовать в массив.

```ts
const langArray = Object.values(LangType); // ['ru', 'en']
```

---

## conts enum

А вот const enum не сгенерирует новый код, будет просто подставлено значение.

```ts
const enum Modes { 
  Show = 'show', 
  Edit = 'edit',
}

let modeName: string = Modes.Show;
console.log(modeName) // 'show'
```

---

## Пример

```ts
// через enum
enum Directions {
  LEFT = 'left',
  UP = 'up',
  RIGHT = 'right',
  DOWN = 'down',
}

// аналог через type
type TDirection = 'left' | 'up' | 'right' | 'down';

// использование
const directions: Record<Directions, number> = {
  left: 90,
  up: 180,
  right: 270,
  down: 0,
};
```

---

## keyof 

```ts
// enum как ключи объекта
enum LikeButtonProps {
  CLASSNAME = 'className',
  COUNT = 'count',
  SIZE = 'size',
}

// enum для keys напрямую
const a: Record<LikeButtonProps, string> = {
  className: 'some',
  count: 'some',
}
```
