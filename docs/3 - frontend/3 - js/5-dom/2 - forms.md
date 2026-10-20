---
title: Формы
sidebar_position: 2
---

## Формы

Форму на странице можно взять по имени из `document.forms`. Поля лежат в `form.elements` под своим `name`. Значение поля читают и записывают через `value`.

[HTMLFormElement](https://developer.mozilla.org/docs/Web/API/HTMLFormElement)

```html
<form name="login">
  <input name="email" type="email" required />
  <input name="password" type="password" required />
  <button type="submit">Войти</button>
</form>
```

```js
const form = document.forms.login;
const email = form.elements.email;

email.value = 'user@gmail.com';
```

Событие `input` приходит на каждый ввод. `change` у текстового поля приходит, когда поле потеряло фокус и значение изменилось. `submit` приходит при отправке формы.

По умолчанию браузер перезагружает страницу. `preventDefault` это отменяет.

```js
form.addEventListener('submit', event => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const data = new FormData(form);

  console.log(data.get('email'));
});
```

`FormData` собирает успешные поля: у них есть `name` и они не отключены. Файл из `<input type="file">` тоже попадает туда. Такой объект можно отдать в `fetch` телом запроса, без `JSON.stringify`.

[FormData](https://developer.mozilla.org/docs/Web/API/FormData)

```js
const data = new FormData(form);

data.set('source', 'login');

for (const [name, value] of data) {
  console.log(name, value);
}
```

`form.reset()` возвращает поля к начальным значениям из разметки.
