---
title: Замыкания
sidebar_position: 3
---

```js
function makeCounter() {
  let count = 0;
  return () => {
    count += 1;
    return count;
  };
}

const counter = makeCounter();

counter(); // 1
counter(); // 2
```
