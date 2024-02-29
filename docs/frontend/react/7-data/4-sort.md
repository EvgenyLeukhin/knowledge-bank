---
title: sort()
sidebar_position: 4
---

## Сортировка дат

```js
const a = ['06.01.2024', '01.01.2024', '04.01.2024', '02.01.2024', '12.01.2024'];

const b = a.sort((nextItem, item) => {
  const day = new Date(item);
  const dayNext = new Date(nextItem);

  return dayNext - day;
});

console.log(b); // ['01.01.2024', '02.01.2024', '04.01.2024', '06.01.2024', '12.01.2024']
```

---
