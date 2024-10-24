---
title: Debug
sidebar_position: 18
---

## Console

Вывод сообщений:

```js
// output data to Dev tool console by console method
console.log('some string', someValue);
console.info('some string', someValue);
console.warn('some string', someValue);
console.error('some string', someValue);
```

Замер времени с помощью console:

```js
console.time('value', value);
console.timeEnd('value', value);
```

```js
// how to look js-code on this break line
debugger; // ---> Dev tool "Sources"
```

```js
// show state info as text data inside html
{JSON.stringify(state)}
```

```jsx
<pre>{JSON.stringify(user, null, 2)}</pre>

// красивый вывод json
{response && <div>
  <pre>{JSON.stringify(response, null, 2)}</pre>
</div>}
```

---

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

---

## Debug with VS Code

TODO

---

## Performance

Объект ```performance`` в браузере. Можно замерять скорость выполнения скриптов.

```js
const t1 = performance.now();

// some js-code ...

const t2 = performance.now();

// result time in ms
t2 - t1; // 3813.899999999907
```

Пример замера скорости сортировки различными способами.

```js
// https://stackoverflow.com/questions/52030110/sorting-strings-in-descending-order-in-javascript-most-efficiently
const results = [];

for (let i = 0; i < 100; i++) {
  const randomArrayGen = () => Array.from({length: 10000}, () => Math.random().toString(30));
  const randomArray = randomArrayGen();
  const copyArray = x => x.slice();

  obj = copyArray(randomArray);
  let t0 = performance.now();
  obj.sort().reverse();
  let t1 = performance.now();

  obj = copyArray(randomArray);
  let t2 = performance.now();
  obj.sort((a, b) => (a > b ? -1 : 1))
  let t3 = performance.now();

  obj = copyArray(randomArray);
  let t4 = performance.now();
  obj.sort((a, b) => b.localeCompare(a))
  let t5 = performance.now();  

  results[0].push(t1 - t0);
  results[1].push(t3 - t2);
  results[2].push(t5 - t4);  
}

const calculateAverage = x => x.reduce((a, b) => a + b) / x.length ;

console.log("obj.sort().reverse():                   " + calculateAverage(results[0]));
console.log("obj.sort((a, b) => (a > b ? -1 : 1)):   " + calculateAverage(results[1]));
console.log("obj.sort((a, b) => b.localeCompare(a)): " + calculateAverage(results[2]));
```
