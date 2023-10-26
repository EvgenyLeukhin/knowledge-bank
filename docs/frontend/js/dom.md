---
title: DOM
sidebar_position: 112
---

- [Element.getBoundingClientRect()](https://developer.mozilla.org/ru/docs/Web/API/Element/getBoundingClientRect)
- [Element.clientHeight](https://developer.mozilla.org/ru/docs/Web/API/Element/clientHeight)

## DOM-селекторы

```js
document;
document.documentElement;    // всё, что лежит в <html>
document.body;               // всё, что лежит в <body>
document.all;                // все элементы (*)
document.forms;              // все формы
document.images;             // все изображения
document.links;              // все ссылки
document.scripts;            // все скрипты
document.stylesheets;        // все стили

// most used
document.querySelector('.some-class');
document.querySelectorAll('.some-class'); // return NodeList

// old-school
document.getElementById('some-id');
document.getElementByName('some-id');
document.getElementsByClassName('some-class');
document.getElementsByTagName('p');
```

---

## ClassList

```js
el.classList.add('some-class');
el.classList.remove('some-class');
el.classList.toggle('some-class');
el.classList.contains('some-class');
```

---

## Attributes

```js
el.setAttribute('style', 'color: red;');
el.hasAttribute('style');    // check, return bool
el.getAttribute('style');    // get value of this attribute
el.removeAttribute('style'); // remove attribute
el.className('some-class');  // add class
el.title('title text');      // create title attribute
el.hidden = true;            // add hidden attribute
el.dataset.filter = 'some';  // change some data attribute

// style
el.style.color = 'red';
el.style.backgroundColor = 'red';
el.style.fontSize = '20px';
```

---

## Nodelist

NodeList - перебираемый объект-псевдомассив :(. Включает пробелы, как отдельные элементы

DOM-collection - перебираемый объект-псевдомассив без пробелов. Возвращает только разметку.

```js
// parent
el.parentNode || el.parentElement;  // equal

// sublinks
el.previousSibling;
el.nextSibling;

// children
el.childNodes; // NodeList :(
el.children;   // HTML-Collection )
el.children[0] || el.childNodes[0]; // equal
el.firstElementChild;
el.lastElementChild;

el.matches('p');           // check selector, return bool
el.closest('.some-class'); // find nearest element
el.contains(someElement2); // return bool
```

---

## Поиск потомка внутри родителя

```ts
const parentElement = document.querySelector('#parent-id');
const childElement = parentElement?.querySelector(`#item-${id}`) as HTMLElement;
```

---

## Отступы и скролл

```ts
// отступ родителя
const parentOffset = parentElement?.offsetTop || 0;

// отступ элемента
const childOffset = childElement?.offsetTop || 0;

// добавление паддинга
const PADDING_SIZE = 25

// величина скролла
const scrollHeight = (targetOffset - listOffset) - PADDING_SIZE;

// скролим родителя до потомка
parentElement?.scroll({
    top: scrollHeight,
    left: 0,
    behavior: "smooth",
});
```

---

## createElement

```js
const el = document.createElement('div');
// присваиваем класс
el.className = 'class-1 class-2';

// и внутреннюю разметку
el.innerHTML = '<b>New text</b>';
```

```ts
const listElement = listRef?.current;
const lastEditedSlaElement = listElement?.querySelector(`#sla-item-${sla.lastEditedSlaId}`) as HTMLElement;

// созаем временный элемент для индикации
const tempElement = document.createElement('i');
tempElement.innerHTML = 'Недавнее редактирование';
lastEditedSlaElement?.appendChild(tempElement);

setTimeout(() => {
    // удаляем временный элемент
    tempElement.remove();
}, 5000);
```

---

## Inject html

```js
// Вставить нового потомка в конец родителя
parentElement.appendChild(newer);

// Замена одного потомка на другой
parentElement.replaceChild(newer, older);

// Удаление прямого потомка
parentElement.removeChild(childElement);

// вставить перед определенным потомком
// второй арг. функции - перед каким элементом вставлять
el.insertBefore(newElement, el.children[0]);

// если указать null, то сработает как appendChild
el.insertBefore(newElement, null);

// new Image
const someImg = new Image();
someImg.src = 'img/some-img.jpg';
someImg.alt = 'some alt text';
```

---

## Change html

```js
// change inner layout
someElement.innerHTML = '<p>Something<p>';

// change all layout
someElement.outerHTML = '<p>Something<p>';

// only text, html as string
someElement.textContent = 'Some text';
```

---

## BOM

Browser object model

Window is a root of everything. По умолчанию стоит у методов alert, prompt, confi

```js
window
console.log()                // info, warn, error
alert(), prompt(), confirm() // window methods
screen
location                     // .href
history
cokkies
localStorage
Date, time
```

---

## Обработка контента элементов

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

---


## Convert NodeList to array

```js
  const elements = document.querySelectorAll(selector);
  
  return Array.from(elements);
```

---

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

  // Do something
});
```
