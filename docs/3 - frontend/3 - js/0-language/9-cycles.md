---
title: Циклы +
sidebar_position: 9
---

## while

Ключевые слова, используемые в классических циклах:

- `break` - выход из цикла (прерывание всего цикла)
- `continue` - выход из текущей итерации (прерывание текущей итерации)

```js
let i = 0;

while (i < 10) {
  console.log(i);

  if (i === 9) {
    break;
  }
  i++;
}
```

ВАЖНО!: `continue` нельзя записывать до увеличения итератора, чтобы не возник бесконечный цикл

```js
let i = 0;

while (i < 10) {
  console.log(i);
  i++;

  // если на какую-то итерацию нужно прервать выполнение кода ниже
  if (i === 5) {
    console.log('i is 5');
    continue;
  }

  // при i === 5 этот код не выполнится, так как стоит continue;
  doSomething();

  // если нужно прекратить цикл
  if (i === 10) {
    break;
  }
}
```

---

## do-while

Инструкции в do выполнятся всегда на первую итерацию, даже если условие в while ложное

```js
let i = 0;

do {
  console.log('i: ', i);
  i++;
} while (i < 10);
```

Также можно использовать continue.

```js
let i = 0;

do {
  // first console - выполнится на каждую итерацию
  console.log('first console', i, '\n');

  // нельзя размещать после continue;
  i++;

  if (i === 5) {
    continue;
  }

  // second console - не выполнится при i === 5, так как стоит continue
  console.log('second console', i, '\n');
} while (i < 10);
```

---

## for

Объявление счётчика снаружи и внутри

```js
// объявление счётчика снаружи
let i;

for (i = 0; i < 10; i++) {
  console.log(i);
}

// можно потом использовать значение счётчика после цикла
console.log(i); // 10
```

```js
// объявление счётчика внутри
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// нельзя потом использовать значение счётчика после цикла
console.log(i); // ReferenceError: i is not defined
```

Также можно использовать break и continue

```js
const a = [];

for (let i = 0; i < 10; i++) {
  // если чётные итерации, то сбрасываем итерацию
  if (i % 2 === 0) {
    continue;
  }

  // если 10 - прерываем цикл
  if (i === 10) {
    break;
  }

  a.push(i);
}

console.log(a); // [ 1, 3, 5, 7, 9 ]
```

Использование нескольких итераторов в одном цикле

```js
for (let i = 0, j = 10; i < j; i++, j--) {
  console.log(i);
  console.log(j);
}
```

### Итерация строки

```js
const word = 'P E R E Z A G R U Z H A T O R';

for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
}
```

Можно поместить цикл в функцию, если внутри тела функции будет `return`, то он будет работать как `break`.

```js
function wordIteration (word: string) {
  for (let i = 0; i < word.length; i++) {
    console.log(word[i]);

    if (i === 5) return;
  }
}
```

---

### Итерация массива

```js
const arr = [
  { name: 'Artem', city: 'NN' },
  { name: 'Elena', city: 'Saratov' },
  { name: 'Zhenia', city: 'Omsk' },
];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

Часто в паре с циклом for при итерации массивом используют `result` - переменная, в которую записывают какое-ниб значение.

```js
let result;

const arr = [
  { name: 'Artem', city: 'NN' },
  { name: 'Elena', city: 'Saratov' },
  { name: 'Zhenia', city: 'Omsk' },
];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].name === 'Artem') {
    result = arr[i];
  }
}

console.log(result); // { name: 'Artem', city: 'NN' }
```

---

### Итерация объекта (for-in)

Можно итерировать ключи и значения ключей объекта. Здесь переменная `key` будет выполнять роль своеобразного итератора, сколько полей у объекта, столько и будет итераций.

```js
const obj = { name: 'John', age: 30, city: 'Omsk', alive: true };

for (const key in obj) {
  // keys
  console.log(key); // 'name' 'age' 'city' 'alive'

  // values
  console.log(obj[key]); // 'John' 30 'Omsk' true
}
```

Можно сделать по-другому с помощью преобразования объекта в массив и метода `forEach()`:

```js
// keys
Object.keys(obj).forEach(key => console.log(key));

// values
Object.values(obj).forEach(value => console.log(value));

// или так
Object.entries(obj).forEach(([key, value]) => console.log(value));
```

Ну, это уже другая история...

---

### Итерация прочих данных (for-of)

Массив / строка / коллекции (Map/Set) — `for-of`.

Eсли здесь `of` поменять на `in` - то будут индексы.

```js
// массив
const arr = [
  { name: 'Artem', city: 'NN' },
  { name: 'Elena', city: 'Saratov' },
  { name: 'Zhenia', city: 'Omsk' },
];

for (const item of arr) {
  console.log(item);
}

// строка
const string = 'P E R E Z A G R U Z H A T O R';

for (const item of string) {
  console.log(item);
}
```

В принципе можно использовать цикл `for-of` для объектов тоже, только объект нужно будет преобразовать в массив.

```js
const obj = { name: 'John', age: 30, city: 'Omsk', alive: true };

// keys
for (const key of Object.keys(obj)) {
  console.log(key);

  // если нужна проверка на наличие (чтобы не включались унаследованные свойства)
  if (obj.hasOwnProperty(key)) {
  }
}

// values
for (const value of Object.values(obj)) {
  console.log(value);
}
```

---

## Прочее

Цикл `for` поддерживает асинхронность

```js
for await (const chunk of stream) {
  // обработка асинхронных данных
}
```

Можно опускать параметры в цикле

```js
// без параметров - будет бесконечный цикл
for (;;) {}

// без итератора
for (; i < n; ) {},
```
