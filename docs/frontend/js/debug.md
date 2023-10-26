---
title: Debug
sidebar_position: 112
---

```js
// output data to Dev tool console by console method
console.log('some string', someValue);
console.info('some string', someValue);
console.warn('some string', someValue);
console.error('some string', someValue);

// how to look js-code on this break line
debugger; // ---> Dev tool "Sources"

// show state info as text data inside html
{JSON.stringify(state)}
```

```jsx
<pre>{JSON.stringify(user, null, 2)}</pre>
```

## JS Doc style

```js
/**
 * Возвращает разницу между датой и интервалом с учетом часового пояса
 * @param {string} date - дата в формате YYYY-MM-DD
 * @param {string} interval - интервал в формате HH:MM - HH:MM
 * @param {number} hubTimezone - часовой пояс
 * @return {{
 *     startIntervalDiff: number;
 *     endIntervalDiff: number;
 * }}
 */
```
