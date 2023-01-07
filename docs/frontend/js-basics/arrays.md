---
title: Массивы +--
sidebar_position: 5
---

## Утилиты

### Первый и последний элемент

```js
const list = [1, 2, 3];
arr[list.length - 1]; // 3 

// утилитw
first(arr); // 1
last(arr); // 3
```

```js
// решение 1
function first(list) {
  if (list.length) {
    return list[0];
  } else return undefined;
}

function last(list) {
  if (list.length) {
    return list[list.length - 1];
  } else return undefined;
}
```

```js
// решение 1 - короткая запись
function first(list) {
  return list.length ? list[0] : undefined;
}

function last(list) {
  return list.length ? list[list.length - 1] : undefined;
}
```

```js
// решение 2
function first(list) {
  if (!Array.isArray(list)) {
    return undefined;
  }
		
  return list.length ? list[0] : undefined;
}

function last(list) {
  if (!Array.isArray(list)) {
    return undefined;
  }
		
  const length = list.length;
  return length ? list[length - 1] : undefined;
}
```

### Создание массива

```js
[...new Array(3).keys()]; // [0, 1, 2] 
[...new Array(5).keys()]; // [0, 1, 2, 3, 4] 
```

### range

Создаёт массив чисел (положительных или отрицательных), растущих от начальной заданной границы до конечной, не включая её.

```js
range(4); // => [0, 1, 2, 3] 

range(0, 20, 5); // => [0, 5, 10, 15]

/*
	* range(4); // => [0, 1, 2, 3] 
	* range(-4); // => [0, -1, -2, -3]
	* range(1, 5); // => [1, 2, 3, 4]
	* range(0, 20, 5); // => [0, 5, 10, 15]
	* range(0, -4, -1); // => [0, -1, -2, -3]
	* range(1, 4, 0); // => [1, 1, 1]
	* range(0); // => []
*/
```

```js
// решение 1
function range(start = 0, end, step = 1) {
  const array = [];
  let STEP = Math.abs(step);

  // only start
  if (start > 0 && !end) {
    for (i = 0; i < start; i+=STEP) array.push(i);
  }

  if (start < 0 && !end) {
    for (i = 0; i > start; i-=STEP) array.push(i);
  } 

  // start and end
  if (start < end) {
    for (i = start; i < end; i+=STEP) array.push(i);
  }

  if (start > end) {
    for (i = start; i > end; i-=STEP) array.push(i);
  }

  return array;
}

// решение 2 (авторское)
const baseRange = (start, end, step) => {
  let index = -1;

  // вычисляем длину массива
  let length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
  
  // создаем шаблон массива нужной длинны
  const result = new Array(length);
  
  // пока длина массива не стала 0 (отработает столько раз, сколько длина массива)
  while (length--) {
    result[++index] = start; // добавляем индексы в массив
    start += step; // добавляем шаг к старту
  }

  // возвращаем полученный массив
  return result;
}

// Обработка кейсов параметров
// Проверку на типы данных не добавлял, но студенты должны будут
function range(start = 0, end, step) {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  step = step === undefined ? (start < end ? 1 : -1) : step;
  return baseRange(start, end, step);
}

const a = range(1, -40);
console.log(a);

range(0, 10, 1); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
range(0, -10, 1); // [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
range(0, 10, 2);  // [0, 2, 4, 6, 8]
// range(0, -10, 2);   [0, -2, -4, -6, -8]
```

***

### rangeRight

```js
/*
  rangeRight(4); // => [3, 2, 1, 0]
  rangeRight(-4); // => [-3, -2, -1, 0]
  rangeRight(1, 5); // => [4, 3, 2, 1]
  rangeRight(0, 20, 5); // => [15, 10, 5, 0]
  rangeRight(0, -4, -1); // => [-3, -2, -1, 0]
  rangeRight(1, 4, 0); // => [1, 1, 1]
  rangeRight(0); // => []
*/

// решение 1
function rangeRight(start, end, step) {
	return range(start, end, step, true);
}

function baseRange(start, end, step, isRight) {
  let index = -1;
  let length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
  
  const result = new Array(length);
  
  if (isRight) {
    while (length--) {
      index++;
      result[(result.length - index) - 1] = start;
      start += step;
    }
  } else {
    while (length--) {
      result[++index] = start;
      start += step;
    }
  }
  
  return result;
}

function range(start = 0, end, step, isRight) {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  step = step === undefined ? (start < end ? 1 : -1) : step;

  return baseRange(start, end, step, isRight);
}

rangeRight(0, 10, 1);

```

```js
// решение 2
const baseRange = (start, end, step, isRight) => {
  let index = -1;
  let length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
  const result = new Array(length);

  while (length--) {
    result[isRight ? length : ++index] = start;
    start += step;
  }

  return result;
}

// Проверку на типы данных не добавлял, но студенты должны будут
function range(start = 0, end, step, isRight = false) {
		if (end === undefined) {
      end = start;
			start = 0;
    }

    step = step === undefined ? (start < end ? 1 : -1) : step;
    return baseRange(start, end, step, isRight);
}

function rangeRight(start, end, step) {
		return range(start, end, step, true);
}
```

## Array helpers
ww
Some content

## Среднее арифметическое

```js
const data = guestsInfo;
/*
В переменной data хранится такой массив:
[
  {name: "Саша", age: 19},
  {name: "Катя", age: 21},
  {name: "Миша", age: 17},
  {name: "Федя", age: 23},
  {name: "Клава", age: 22}
]
*/

function calcAvgAge(array) {
  // Напишите код здесь
  const ageArray = array.map(item => item.age);
  const summArray = ageArray.reduce((prevItem, curItem) => {
    return prevItem + curItem;
  }, 0);
  return summArray / array.length;
}
```

## Четные и нечетные

```js
const numbers = [1, 2, 3, 4, 5, 6];

separateArray(numbers);
// должен вернуть { even: [2, 4, 6], odd: [1, 3, 5] }

function separateArray(array) {
  const evenArray = array.filter(item => item % 2 === 0);
  const oddArray = array.filter(item => item % 2 !== 0);
  return {
    even: evenArray,
    odd: oddArray,
  }
}
```

## Формы

```js
const form = document.forms.formWithInput;
const printResult = document.querySelector('.content__result');
const inputNumber = document.querySelector('.form__input');
const congratulation = document.querySelector('#congratulation');

function findNearestFactorial(value) {
  if (value === '' || value === undefined) {
    return '*';
  }

  if (value <= 0) {
    console.log(value);
    return 1;
  }
  let currentValue = 1;
  for (var i = 1; currentValue * i <= value; i++) { // c let будет ошибка
    currentValue *= i;
  }
  return i - 1;
}

form.addEventListener('keyup', evt => {
  evt.preventDefault();
  printResult.textContent = findNearestFactorial(inputNumber.value);
  congratulation.textContent = inputNumber.value && 'Вау, это успех!';
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
});
```

Повторить алгоритмы, ООП

### Привязка контекста к методам класса

```js
class Transport {
  constructor(type, price, vendor, model) {
    this.type = type;
    this.price = price;
    this.vendor = vendor;
    this.model = model;
  }

  getInfo() {
    return `${this.vendor}, ${this.model}`;
  }

  getPrice() {
    return this.price.toLocaleString('ru-RU') + ' ₽';
  }
}

class Car extends Transport {
  constructor(vendor, model, doorsCount, price) {
    super('car', price, vendor, model);
    this.doorsCount = doorsCount;
  }
  
  // Привязка контекста
  getInfo = this.getInfo.bind(this);
  getPrice = this.getPrice.bind(this);
  getDoorsCount = this.getDoorsCount.bind(this);

  getDoorsCount() {
    return `Кол-во дверей: ${this.doorsCount}`;
  }
}

class Bike extends Transport {
  constructor(vendor, model, maxSpeed, price) {
    super('bike', price, vendor, model);
    this.maxSpeed = maxSpeed;
  }
  
  // Привязка контекста
  getInfo = this.getInfo.bind(this);
  getPrice = this.getPrice.bind(this);
  getMaxSpeed = this.getMaxSpeed.bind(this);

  getMaxSpeed() {
    return `Макс. скорость: ${this.maxSpeed} км/ч`;
  }
}

const car1 = new Car('KIA', 'Rio', 5, 1200000);
const { getDoorsCount } = car1;
console.log(getDoorsCount());
```

### Convert NodeList to array

```js
  const elements = document.querySelectorAll(selector);
  
  return Array.from(elements);
```




