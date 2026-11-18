---
title: Методы
sidebar_position: 3
---

## Методы

Класс меняют через `classList`. `className` — это строка всех классов, а не метод.

[Element.classList](https://developer.mozilla.org/docs/Web/API/Element/classList)

```js
const item = document.querySelector('.item');

item.classList.add('active');
item.classList.remove('hidden');
item.classList.toggle('open');
item.classList.contains('active');
```

Произвольный атрибут читают и пишут отдельными методами. Свойство `dataset` работает с атрибутами `data-*`: `data-user-id` становится `dataset.userId`.

```js
item.setAttribute('title', 'Подсказка');
item.getAttribute('title');
item.hasAttribute('title');
item.removeAttribute('title');

item.dataset.userId = '12';
```

Стили из скрипта пишут в `style`. Имя свойства в JS без дефиса: `background-color` это `backgroundColor`. Так задаётся только инлайновый стиль.

```js
item.style.color = 'red';
item.style.fontSize = '20px';
```

### Текст и разметка

`textContent` пишет и читает текст. Теги в этой строке остаются текстом. `innerHTML` разбирает строку как HTML. В него не подставляют данные, которые ввёл пользователь: так на страницу попадает чужой скрипт.

```js
item.textContent = 'Новый текст';
item.innerHTML = '<b>Новый текст</b>';
```

### Создание и вставка

Элемент создают, настраивают и только потом вставляют в страницу.

```js
const note = document.createElement('p');

note.className = 'note';
note.textContent = 'Заметка';

item.append(note);
item.prepend(note);
item.before(note);
item.after(note);
note.remove();
```

`append` и `prepend` добавляют внутрь элемента, в конец или в начало. `before` и `after` ставят узел рядом, снаружи. `replaceChildren` заменяет всех потомков.

[Element.append()](https://developer.mozilla.org/docs/Web/API/Element/append)

### Кодирование части адреса

`encodeURIComponent` кодирует строку для подстановки в часть URL. Символы, которые в адресе имеют особое значение, становятся последовательностью `%` и шестнадцатеричным кодом. Без этого `/` разрежет путь, а `?` начнёт query-строку. Кириллица тоже кодируется. Буквы, цифры и символы `- _ . ! ~ * ' ( )` функция не трогает, поэтому код `me_1203950850` останется как есть.

[encodeURIComponent()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)

```js
const code = 'ЦЕ/123';
const url = `/orders/code/${encodeURIComponent(code)}`;
// /orders/code/%D0%A6%D0%95%2F123
```
