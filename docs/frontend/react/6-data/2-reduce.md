---
title: reduce()
sidebar_position: 2
---

## Преобразование массива в объект

```tsx
const zones = [{...}, {...}, {...}, ...];


const zonesObj = zones.reduce<Record<string, string>>((total, item) => {
  total = {
    ...total,
    [item.uuid]: item.name,
  };

  return total;
}, {});

zonesObj; 
// { 
//   zoneId: zoneName,
//   zoneId: zoneName,
//   zoneId: zoneName,
//   zoneId: zoneName,
//   ...
// }
```
