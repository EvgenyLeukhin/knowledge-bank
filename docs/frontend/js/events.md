---
title: События
sidebar_position: 16
---

- [События: от браузерных до пользовательских» от Игоря Зубова](https://www.youtube.com/watch?v=aNMdUUuBFmo)
- [Описание событий на MDN](https://developer.mozilla.org/en-US/docs/Web/Events)
- [preventDefault()](https://developer.mozilla.org/ru/docs/Web/API/Event/preventDefault)
- [stopPropagation()](https://developer.mozilla.org/ru/docs/Web/API/Event/stopPropagation)
- [Всплытие и погружение](https://learn.javascript.ru/bubbling-and-capturing)

<img src="../../../../img/js/async.png" width="550" alt="async.png" />

JS однопоточный. Очередь событий.

## События в браузере

Для реакции на действия пользователя или внутреннее взаимодействие кода используют события — сигнал от браузера о том, что что-то произошло.
События можно разделить на группы — в зависимости от устройства или элемента интерфейса, который дал им начало:
События мыши

- ```click``` — клик левой кнопкой мыши;
- ```contextmenu``` — клик правой кнопкой мыши;
- ```mouseover/mouseout``` — курсор попадает на элемент или уходит с него;
- ```mousedown/mouseup``` — кнопку мыши нажали или отпустили;
- ```mousemove``` — движение курсора над элементом.

```click, submit, dblclick, keydown, keyup, keypress, mouseover, mouseout, reset, focus, focusin, focusout, change, blur```

***

### События клавиатуры

- ```keydown``` — клавишу нажали;
- ```keyup``` — клавишу отпустили.

[key-codes](https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes)

```js
el.addEventListener('keydown', function(e) {
  // js for keypress;
  if (e.keyCode == 27) { ... }
});
```

***

### События при нажатии пальцем

- ```touchstart``` — элемента коснулись;
- ```touchmove``` — по элементу провели пальцем;
- ```touchend``` — касание закончилось и палец убрали;
- ```touchcancel``` — палец переместился на интерфейс браузера или тач-событие нужно отменить.

```js
el.addEventListener('click', (event) => {
  // do smth
});
```

***

### События на элементах управления

- ```submit``` — нажали кнопку «Отправить» формы &lt;form&gt;;
- ```reset``` — сбросили форму &lt;form&gt;;
- ```focus``` — пользователь фокусируется на элементе, например, нажимает на &lt;input&gt;;
- ```blur``` — пользователь выходит из фокуса элемента, например, кликает вне &lt;input&gt;.

Больше событий описано на [MDN](https://developer.mozilla.org/en-US/docs/Web/Events).

```js
// onchange
el.onchange = () => { ... }

// onsubmit
el.onsubmit = () => { ... }

// onload
<body onload="alert('Страница загружена');">
```

***

## Подписки. Добавление обработчика

Обработчик (от англ. handler) — это функция, которая отрабатывает, как только произошло событие. Именно он позволяет JavaScript-коду моментально реагировать на действия пользователя.

***

### Через атрибут

Передать обработчик можно напрямую через атрибут onclick. У такого способа много ограничений и неудобств. Использовать его не стоит, кроме случаев, где это действительно нужно.

```html
<button onclick="this.parentElement.innerHTML+='<span>click</span>'">
  Нажми меня
</button> 
```

***

### Через свойства DOM-элемента

У элементов есть свойства on*, в которых можно присваивать обработчики. Но нужно быть готовым к тому, что явное присваивание заменяет все прошлые обработчики. Этот способ лучше не использовать без особой необходимости.

```js
let count = 0;
const element = document.getElementsByTagName('BUTTON')[0];

element.onclick = function() {
    element.innerHTML = `Кликнули ${++count} раз`;
}
```

*** 

### addEventListener и removeEventListener

Самый верный способ навесить и удалить обработчик. Настоятельно рекомендуем использовать по умолчанию именно эти два метода:

```js
// Добавление обработчика
element.addEventListener(event, handler);
 
// Удаление обработчика
// Нужно передать те же аргументы, что были у addEventListener
element.removeEventListener(event, handler);

////////////////////////////////////////////////

// Вот такой способ не сработает 
// (в аргументах хоть внешне и одинаковые, но по сути разные функции)
element.addEventListener(event, () => '');
element.removeEventListener(event, () => '');

// Вот такой способ сработает (в аргументах одна и та же функция)
const handler = () => '';
element.addEventListener(event, handler);
element.removeEventListener(event, handler); 
```

Подробнее про addEventListener [на MDN](https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener). 

***

### event

Обработчики принимают на вход объект события event. Он сообщает свойства элемента на момент реагирования, что изменилось и что добавилось. Например, какая клавиша нажата. То есть можно определять не только абстрактные общие вещи вроде «нажали что-то».

```js
element.addEventListener('click', function (event) {
  console.log(`${event.type} на ${event.currentTarget}`);
  console.log(`${event.clientX}:${event.clientY}`);
}); 
```

У ```event``` есть много разных свойств и методов. Подробный список найдёте [на MDN](https://developer.mozilla.org/ru/docs/Web/API/Event).
Свойства, которые показаны в примере: 

- ```event.type``` — тип события (в примере это 'click').
- ```event.currentTarget``` — на каком элементе сработал обработчик. Не путайте с event.target, то есть исходным элементом, на котором произошло событие. Они могут быть разными из-за всплытия событий, о которых расскажем дальше.
- ```event.clientX / event.clientY``` — свойства событий мыши, показывают координаты курсора относительно окна в момент клика.

***

## Всплытие событий

Всплытие работает следующим образом. Сначала отрабатывают события на самом вложенном элементе, затем на его родителе, и так далее, вверх до window.

Например, возьмём форму. При нажатии на текст P будет показано три alert в следующем порядке:

- alert('p') ,
- alert('div'),
- alert('form').

```js
<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form> 
```

### Событие проходит следующие стадии:

1. Перехват (capturing) — событие проходит сверху вниз.
2. Цель (target) — событие достигло целевого элемента.
3. Всплытие (bubbling) — событие идёт снизу вверх.

Самый глубокий элемент, который вызывает событие, называется целевым (target). Доступен из объекта события как event.target.

```js
eventform.addEventListener('click', function(event) {
  console.log('target = ', event.target.tagName); // target = FORM
  console.log('this = ', this.tagName); // this = FORM
}); 
```

### Работа с событием

- ```event.preventDefault()``` — отменяет обработчик по умолчанию,

Код ниже вызовет переход на другую страницу, потому что таково поведение формы по умолчанию:


```html
<form onsubmit="alert('submit!');">
  Первый пример: нажмите Enter: <input type="text" value="Текст"><br>
  Второй пример: нажмите на кнопку "Отправить": <input type="submit" value="Отправить">
</form> 
```

Но если к обработчику в ```addEventListener``` добавить ```preventDefault```, то перехода на другую страницу не будет.

- ```event.stopPropagation``` — прекращает всплытие (например, при нажатии на кнопку не вызовет стандартное поведения &lt;form&gt;).
- ```event.stopImmediatePropagation``` — прекращает всплытие и не выполняет оставшиеся обработчики события.


### Перехват события

- ```on*``` — обработчики не обрабатывают перехват;
- ```element.addEventListener('event', callback, false)``` — обработка на стадии всплытия (поведение по умолчанию);
- ```element.addEventListener('event', callback, true)``` — обработка на стадии перехвата.

### Делегирование событий

Рассмотрим пример со списком. Есть список, в котором много дочерних элементов:

```html
<ul>
  <li>0</li>
  <li>1</li>
  <li>2</li>
</ul> 
```

Как можно навесить обработчик на все элементы?

```js
const logger = function(event) {
  console.log(event.target.innerHTML);
}

const liElements = document.getElementsByTagName('li');

for (let i = 0; i < liElements.length; i++) {
  const li = liElements[i];
  li.addEventListener('click', logger);
} 
```

Можно сделать намного проще, используя знания о делегировании, всплытии и перехвате:

```js
const logger = function(event) {
  if(event.target.tagName === 'LI') {
    console.log(event.target.innerHTML);
  }
}

const ul = document.getElementsByTagName('ul')[0];
ul.addEventListener('click', logger); 
```

Преимущества данного подхода:

- один обработчик вместо множества;
- при добавлении новых элементов им не нужно добавлять обработчик.


***

### onClick пример

Сработает только последний

```js
btn.onclick = function () {
  result.push('first event');
  console.log(result);
}

btn.onclick = () => {
  result.push('second event');
  console.log(result);
};

btn.click();
```

Навешивание обработчика

```js
const btn = document.querySelector('.button');

const result = [];

btn.addEventListener('click', function(event) {
  result.push('first event');
  result.push('second event');
  console.log(result);
});
```

***

## Event loop

Бесконечный цикл, который постоянно крутиться интерпретатором и улавливает все события.

После того, как отлавливает события, то записывает их в СТЕК(очередь) ЗАДАЧ.

Задачи выполняются АСИНХРОННО, это означает, что если какая-либо задача выполняется, то Event loop не прекращается свою работу, а будет улавливать все события постоянно.
