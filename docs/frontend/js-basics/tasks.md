---
title: Задачи по JS
sidebar_position: 16
---

Напишите функцию, которая умеет превращать строки вроде "a.b.c" в объекты. Результатом для строки-примера будет "a": {"b": {"c": {}}}. 

```ts
const namespace = (str: string): object =>
  str.split(".").reduceRight((acc, key) => ({ [key]: acc }), {});

namespace('a.b.c.d.e') // "{"a":{"b":{"c":{"d":{"e":{}}}}}}"
```

***

Реактивность. Вторая задача будет о реактивности. Если вы раньше сталкивались, например, с фреймворком Vue, то, скорее всего, знаете что это. Суть реактивности в том, что при изменении данных или состояния интерфейс автоматически ререндерится. В нативном JS нет встроенной реактивности, но её можно реализовать. Именно этим вы и займётесь на практике.

```ts
input.addEventListener('keyup', (event: KeyboardEvent) => {
  text.innerText = event.target.value;
  console.log(event.target.value)
})
```

```ts
type Nullable<T> = T | null;

const text: Nullable<HTMLDivElement> = document.getElementById(
  "text"
) as HTMLDivElement;
const input: Nullable<HTMLInputElement> = document.getElementById(
  "input"
) as HTMLInputElement;

if (!text || !input) {
  throw new Error("нет полей");
}

const data = {
  title: ""
};

Object.defineProperty(data, 'title', {});

input.addEventListener('keyup', (event: KeyboardEvent) => {
  text.innerText = event.target.value;
  console.log(event.target.value)
})

export default Nullable
```

```ts
type Nullable<T> = T | null;

const text: Nullable<HTMLDivElement> = document.getElementById(
  "text"
) as HTMLDivElement;
const input: Nullable<HTMLInputElement> = document.getElementById(
  "input"
) as HTMLInputElement;

if (!text || !input) {
  throw new Error("нет полей");
}

const data = {
  title: ""
};

Object.defineProperty(data, "title", {
  set: (value: string) => {
    text.textContent = value;
  }
});

input.addEventListener("keyup", event => {
  data.title = event.target.value;
});

export default Nullable
```
