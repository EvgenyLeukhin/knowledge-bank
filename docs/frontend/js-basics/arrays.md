---
title: Массивы
sidebar_position: 5
---

# Массивы

Some content

# Array helpers

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




