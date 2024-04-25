---
title: HTML-шаблонизаторы
sidebar_position: 4
---

## Известные шаблонизаторы

- [PUG](https://pugjs.org/api/getting-started.html)
- [handlebarsjs](https://handlebarsjs.com/)
- [oadash.template](https://lodash.com/docs/4.17.15#template)
- [EJS](https://ejs.co/)

Как создавать разметку с помощью js.

```js
const p = document.createElement("p");
document.body.appendChild(p);
```

Это программируемые куски html-кода, которые могут инжектится в DOM-дерево через JS. Они упрощают создание разметки через JS, чтобы не городить большой js-код c помощью функции ```document.createElement()```


```hbs
<div class="{{ wrapperClassName }}">
  <div class="chat__button">
    <button class="button">
      <span>{{ buttonText }}</span>
    </button>
  </div>

  <ul class="{{ chatListClassName }}">
    {{ chatListItems }}
  </ul>
</div>
```
