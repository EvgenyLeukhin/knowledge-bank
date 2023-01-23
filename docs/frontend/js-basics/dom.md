---
title: DOM +--
sidebar_position: 8
---

- [Element.getBoundingClientRect()](https://developer.mozilla.org/ru/docs/Web/API/Element/getBoundingClientRect)
- [Element.clientHeight](https://developer.mozilla.org/ru/docs/Web/API/Element/clientHeight)

## DOM-дерево

Some content

### Обработка контента элементов

```js
document.querySelector('.total__button').addEventListener('click', applyDiscount);

let discont = false;

function applyDiscount() {
  if (!discont) {
    discont = true;
    getDomNodesBySelector('.price-value').forEach(el => {
      el.innerText = el.innerText * 0.85;
    });

    const totalPriceEl = document.querySelector('.total-price-value');
    totalPriceEl.innerHTML = totalPriceEl.innerHTML * 0.85;   
  }   
}
```

***


### Convert NodeList to array

```js
  const elements = document.querySelectorAll(selector);
  
  return Array.from(elements);
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

## Events

Some content

- Event loop
- Listerners
