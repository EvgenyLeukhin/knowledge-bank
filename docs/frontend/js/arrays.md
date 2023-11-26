---
title: Массивы
sidebar_position: 11
---

- Коллекция данных (однотипных чаще)
- Когда большое количество однотипных данных, вместо большого количества переменных удобнее создавать массивы.
- Часто в структурах данных используют массивы объектов.
- Массивы по типу объекты (как и всё в JS), поэтому синтаксис в добавлении\удалении элементов через точку. Значения массива записываются в через запятую.
- В массивах можно хранить даже функции, но это считается плохой практикой


```js
[]; // пустой массив
typeof []; // 'object'
Boolean([]); // true

const someArray = [0, 1, 2];

// массив объектов
const data = [{...}, {...}, {...}];

// проверка на массив
Array.isArray([]); // true
Array.isArray('abc'); // false
```

---

## Простые операции с массивами

### Создать массив

```js
// простая запись
const someArray = [0, 1, 2];

// через функцию-конструктор new
const someArray2 = new Array(0, 1, 2);

// если аргумент 1, то это будет длина массива с пустыми элементами
const someArray2 = new Array(12);
```

Создать массив и наполнить.

```js
const a = new Array(5).fill('some-value');

const b = [...Array(100).keys()]; // [0, 1, 2, 3, 4, ..., 100]
```

### Длина (length)

Это по сути индекс последнего элемента минус один.

```js
const someArray = [0, 1, 2];

someArray.length; // 3
```

---

### Вывести элемент по индексу

Нумерация индексов массива начинается с нуля. Индекс - порядковый номер.

```js
const someArray = [0, 1, 2];

// Первый элемент
someArray[0]; // 0

// Несуществующий элемент
someArray[4]; // undefined

// Последний элемент
someArray[someArray.length - 1]; // 2
```

---

### Изменить существующий элемент

```js
const someArray = [0, 1, 2];

someArray[0] = 3;
console.log(someArray); // [3, 1, 2]
```

---

### Добавить элемент (push, unshift)

Через индекс

```js
const someArray = [0, 1, 2];

someArray[3] = 3;
console.log(someArray); // [0, 1, 2, 3]
```

Добавить элемент в **конец** массива (push). Меняет исходный массив.

```js
const someArray = [0, 1, 2];

// 1-ый способ
someArray.push(3);
console.log(someArray); // [0, 1, 2, 3]

// 2-й способ
someArray[someArray.length] = 4;
console.log(someArray); // [0, 1, 2, 3, 4]
```

Добавить элемент в **начало** массива (unshift). Меняет исходный массив.

```js
const someArray = [0, 1, 2];

someArray.unshift(3);
console.log(someArray); // [3, 0, 1, 2]
```

---

### Удалить элемент

#### shift() - удалить первый элемент

Изменяет исходный массив. Удалить элемент в **начале** массива (shift)

```js
const someArray = [0, 1, 2, 3, 4, 5];

// удалить первый элемент
someArray.shift(); // const a = someArray.shift(); // будет хранить удаленный элемент

console.log(someArray); // [1, 2, 3, 4, 5];
```

---

#### pop() - удалить последний элемент

Изменяет исходный массив. Удалить элемент в **конце** массива (pop). Удаляет, меняет массив и возвращает удаленный элемент.

```js
const someArray = [0, 1, 2, 3, 4, 5];

// удалить последний элемент
someArray.pop(); // const a = someArray.pop(); // будет хранить удаленный элемент

console.log(someArray); // [0, 1, 2, 3, 4]
```

---

#### delete()

Через **delete** элемент удаляется, но его место остаётся (будет undefined)

```js
const someArray = [0, 1, 2, 3, 4, 5];

// опустошить элемент с индексом
delete someArray[0];

console.log(someArray); // [empty, 1, 2, 3, 4, 5] - lenght не меняется
```

---

### Удалить определенный элемент

```js
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const index = array.indexOf(5);

if (index > -1) { // only splice array when item is found
  array.splice(index, 1); // 2nd parameter means remove one item only
}

console.log(array); // [1, 2, 3, 4, 6, 7, 8];
```



---

### Обрезать массив (slice, splice, lenght)

#### Slice

**1-й способ** через **slice**. Не изменяет исходный массив. Удаляет, меняет массив и возвращает удаленный элемент.

```js
const someArray = [0, 1, 2, 3, 4, 5, 6, 7];

// обрежет первые 3 элемента
someArray.slice(3); // [3, 4, 5, 6, 7]

// оставит последние 3 элемента
someArray.slice(-3); // [5, 6, 7]
```

---

#### Splice

**2-й способ** через **splice**. Работает аналогично slice, только меняет исходный массив и можно добавлять второй и третий параметр.

- Более гибкое вырезание.
- Можно обрезать или изменять элементы


Оставить только первые 3 элемента (splice(3))

```js
const someArray = [0, 1, 2, 3, 4, 5, 6, 7];

// оставить только первые 3 элемента
const removed = someArray.splice(3); // хранит удаленные элементы

console.log('removed:', removed); // [3, 4, 5, 6, 7]
console.log('array:', someArray); // [0, 1, 2] - исходный массив изменился
```

---

Удалить последние 3 элемента (splice(-3))

```js
const someArray = [0, 1, 2, 3, 4, 5, 6, 7];
const removed = someArray.splice(-3); // хранит удаленные элементы

console.log('removed:', removed); // [5, 6, 7]
console.log('array:', someArray); // [0, 1, 2, 3, 4]- исходный массив изменился
```

---

Удалить 2 элемента, начиная с 3-его индекса (splice(3, 2))

```js
const someArray = [0, 1, 2, 3, 4, 5, 6, 7];
const removed = someArray.splice(3, 2); // хранит удаленные элементы

console.log('removed:', removed); // [3, 4]
console.log('array:', someArray); // [0, 1, 2, 5, 6, 7] - исходный массив изменился
```

---

Удалить 2 элемента, начиная с 3-его индекса с конца (splice(-3, 2))

```js
const someArray = [0, 1, 2, 3, 4, 5, 6, 7];
const removed = someArray.splice(-3, 2); // хранит удаленные элементы

console.log('removed:', removed); // [5, 6]
console.log('array:', someArray); // [0, 1, 2, 3, 4, 7] - исходный массив изменился
```

---

#### length

**3-й способ** через **length**. Но это плохая практика!

```js
const someArray = [0, 1, 2, 3, 4, 5, 6, 7];
someArray.length = 5; // обрежет массив сначала до присвоенного индекса
console.log(someArray); // [1, 2, 3, 4]
```

### Замена элементов (splice)

Удалить 2 элемента, начиная с 3-его индекса и вставить туда новые элементы (splice(3, 2, 'a', 'b'))

```js
const someArray = [0, 1, 2, 3, 4, 5, 6, 7];
const removed = someArray.splice(3, 2, 'a', 'b'); // хранит удаленные элементы

console.log('removed:', removed); // [3, 4]
console.log('array:', someArray); // [0, 1, 2, 'a', 'b', 'c', 5, 6, 7] - исходный массив изменился
```

---

Удалить 2 элемента, начиная с 3-его индекса c конца и вставить туда новые элементы (splice(-3, 2, 'a', 'b'))

```js
const someArray = [0, 1, 2, 3, 4, 5, 6, 7];
const removed = someArray.splice(-3, 2, 'a', 'b'); // хранит удаленные элементы

console.log('removed:', removed); // [5, 6]
console.log('array:', someArray); // [0, 1, 2, 3, 4, 'a', 'b', 7] - исходный массив изменился
```

---

### Изменить порядок (reverse)

При вызове меняется исходный массив

```js
const someArray = [0, 1, 2];

someArray.reverse();
console.log(someArray); // [2, 1, 0]
```

---

### Отсортировать порядок (sort)

Сначала сортируются цифры, а потом символы (латиница, потом кириллица)

```js
const someArray = [3, 2, 1, 0, 4];
const someArray2 = ['c', 'b', 'a', 'd', 0, 2, 1];

someArray.sort();
someArray2.sort();
console.log(someArray); // [0, 1, 2, 3, 4]
console.log(someArray2); // [0, 1, 2, 'a', 'b', 'c', 'd']
```

---

### Преобразовать массив в строку (join)

```js
const someArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const someArray = [1, 2, 3, 4];
const someString1 = someArray.join(); // , по ум*
const someString2 = someArray.join(' | '); // можно добавлять разделитель

console.log(someString1); // 'a,b,c,d,e,f,g,h'
console.log(someString2); // '1 | 2 | 3 | 4'
```

---

### Преобразовать строку в массив (split)

```js
const someString = 'Something';
const someArray = someString.split('');
console.log(someArray); // ['S', 'o', 'm', 'e', 't', 'h', 'i', 'n', 'g']
```

---

## Объединение массивов

### Concat

Не изменяет исходный массив, а возвращает новый.

```js
const someArray1 = [0, 1, 2];
const someArray2 = [3, 4, 5]
const newArray = someArray1.concat(someArray2);
console.log(newArray); // [0, 1, 2, 3, 4, 5]
```

### Spread

Не изменяет исходный массив, а возвращает новый.

```js
const someArray1 = [0, 1, 2];
const someArray2 = [3, 4, 5]
const newArray = [...someArray1, ...someArray2];
console.log(newArray); // [0, 1, 2, 3, 4, 5]
```

---

## Проверка на массив

```js
const someArray = [1, 2, 3];

Array.isArray(someArray); // true
Array.isArray(true); // false
```

---

## Array distructuring

Массивы можно деструктурировать также как и объекты. Такая запись позволяет объявлять переменные, которые будут принимать значения из массива.

```js
// простая запись массива
const array = [1, 2, 3];

// деструктивная запись
const [a, b, c] = [1, 2, 3];

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

```js
const colors = ["red", "green", "blue"];

// с присваиванием значений по умолчанию:
const [first, second, third, fourth = 'black'] = colors;
console.log(fourth) // black
```

---

## Многомерные

Multi-level arrays (matrix). Массив с вложенными массивами, можно получать доступ к вложенным массивам через ```[][]```, в зависимости от уровня вложенности. На практике лучше такие выражения не использовать, так как это сильно усложняет читаемость.

```js
const arr1 = [1, 2, 3],
      arr2 = [4, 5, 6],
      arr3 = [7, 8, 9];

const multiLevelArray = [arr1, arr2, arr3];

console.log(multiLevelArray[2][0]); // 7
```

---

## Методы для строк

Для массивов также работают некоторые методы строк

### IndexOf

```js
const someArray = ['a', 'b', 'c', 'd'];
console.log(someArray.indexOf('a')); // 0

// начиная с 1-го индекса
console.log(someArray.indexOf('a', 1)); // -1 - индекс не найден
```

---

### Includes

Поиск элемента

```js
const someArray = ['a', 'b', 'c', 'd'];
console.log(someArray.includes('a')); // true
console.log(someArray.includes('g')); // false

// начиная с 1-го индекса
console.log(someArray.includes('a', 1)); // false
```

---

### Преобразовать в объект

```js
const a = [ 1, 2, 3 ];
const b = { ...a }; 

```

---

### Убрать дубликаты из массива

```js
const a = [ 1, 2, 3, 1, 2, 4 ];
const aWithOutDublicates = Array.from(new Set(a));

// с помощью lodash
// [{ index: 1, value: 'a' }, { index: 2, value: 'b' }, { index: 1, value: 'c' }] --> [{ index: 1, value: 'a' }, { index: 2, value: 'b' }]
_.uniqWith(array, (arrVal, othVal) => arrVal.index === othVal.index)

```

---
