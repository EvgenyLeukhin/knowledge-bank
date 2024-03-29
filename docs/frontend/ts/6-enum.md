---
title: Enum
sidebar_position: 6
---

## Enum для объектов

```ts
enum DrugstoreStatus {
  UNDEFINED = 0,
  WORK = 1,
  TEMPRARILY_NOT_WORKING = 2,
  CLOSED = 3,
}

enum ColorList {
  GRAY = 'rgb(175, 175, 175)',
  GREEN = 'rgb(0, 150, 50)',
  RED = 'rgb(220,20,60)',
  DARK_ORANGE = 'darkorange',
}

// ключи и свойства объектов как enum
const drugstoreStatusColor: Record<DrugstoreStatus, ColorList> = {
  [DrugstoreStatus.UNDEFINED]: ColorList.GRAY,
  [DrugstoreStatus.WORK]: ColorList.GREEN,
  [DrugstoreStatus.TEMPRARILY_NOT_WORKING]: ColorList.DARK_ORANGE,
  [DrugstoreStatus.CLOSED]: ColorList.RED,
};
```

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

## Пример enum как key

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
