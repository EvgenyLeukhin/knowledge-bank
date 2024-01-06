---
title: Enum ✓
sidebar_position: 7
---

## enum

Перечисления. В скомпилированном коде enum превратится в объект.

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

А вот const enum не сгенерирует новый код, будет просто подставлено значение. Нельзя создавать массив через Object.keys.

```ts
const enum Modes { 
  Show = 'show', 
  Edit = 'edit',
}

let modeName: string = Modes.Show;
console.log(modeName) // 'show'
```

---

## enum inside Record

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
