---
title: Селекторы
sidebar_position: 0
---

## Селекторы

Элемент страницы ищут от `document` или от уже найденного родителя. `querySelector` возвращает первый совпавший элемент или `null`. `querySelectorAll` возвращает `NodeList`, даже если совпадений нет.

[Document.querySelector()](https://developer.mozilla.org/docs/Web/API/Document/querySelector)

```js
const title = document.querySelector('.title');
const items = document.querySelectorAll('.item');

const list = document.querySelector('#list');
const firstItem = list.querySelector('.item');
```

По id, классу и тегу есть отдельные методы. `getElementById` возвращает один элемент. `getElementsByClassName` и `getElementsByTagName` возвращают живую коллекцию: она меняется, если такие элементы потом добавили или удалили.

```js
document.getElementById('list');
document.getElementsByClassName('item');
document.getElementsByTagName('li');
```

`NodeList` от `querySelectorAll` можно обойти через `forEach`. Чтобы пользоваться методами массива, его превращают в массив.

```js
const items = document.querySelectorAll('.item');

items.forEach(item => console.log(item));

const array = Array.from(items);
```

### Соседи

`children` содержит только элементы. `childNodes` содержит ещё текстовые узлы, в том числе пробелы между тегами.

```js
const list = document.querySelector('#list');

list.parentElement;
list.children;
list.firstElementChild;
list.lastElementChild;
list.previousElementSibling;
list.nextElementSibling;
```

`matches` проверяет, подходит ли сам элемент под селектор. `closest` поднимается вверх и возвращает ближайшего предка, включая сам элемент. `contains` проверяет, лежит ли узел внутри другого.

```js
const item = document.querySelector('.item');

item.matches('.item');
item.closest('ul');
list.contains(item);
```
