---
title: sort()
sidebar_position: 4
---

## Сортировка

`[3, 2, 0, 1] --> [0, 1, 2, 3]`

Возвращает отсортированный массив.

```ts
const a = [
  { id: 3, name: 'Не указан' },
  { id: 2, name: 'Тестовый статус' },
  { id: 0, name: 'Старый тестовый статус' },
  { id: 1, name: 'Что то происходит' },
];

// straight sorting
const sortedA = a.sort((nextEl, curEl) => nextEl.id - curEl.id); // 0, 1, 2, 3

// reversed sorting
const sortedAReversed = a.sort((nextEl, curEl) => curEl.id - nextEl.id); // 3, 2, 1, 0

// sort by name - 1 способ через сравнение строк
a.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

// sort by name - 2 способ через codePointAt()
a.sort((next, curr) => {
  return next.name.codePointAt() - curr.name.codePointAt();
});

// sort by name - 3 способ через localeCompare()
a.sort((a, b) => a.name.localeCompare(b.name));
```

---

## Сортировка дат

```js
const a = [
  '06.01.2024',
  '01.01.2024',
  '04.01.2024',
  '02.01.2024',
  '12.01.2024',
];

const b = a.sort((nextItem, item) => {
  const day = new Date(item);
  const dayNext = new Date(nextItem);

  return dayNext - day;
});

console.log(b); // ['01.01.2024', '02.01.2024', '04.01.2024', '06.01.2024', '12.01.2024']
```

---
