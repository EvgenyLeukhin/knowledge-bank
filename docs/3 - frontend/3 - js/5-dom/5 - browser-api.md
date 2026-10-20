---
title: Браузерное API
sidebar_position: 5
---

## Браузерное API

`window` — глобальный объект вкладки. `document` — дерево страницы. `navigator` описывает браузер и устройство. Функции вроде `alert` и `console` и так принадлежат `window`, писать `window` перед ними не нужно.

[Window](https://developer.mozilla.org/docs/Web/API/Window)

```js
window.innerWidth;
document.title;
navigator.language;
navigator.onLine;
```

### Адрес

`location` читает и меняет адрес текущей вкладки. Запись в `href` загружает новую страницу. `search` — строка после `?`.

[Location](https://developer.mozilla.org/docs/Web/API/Location)

```js
location.href;
location.pathname;
location.search;

const url = new URL(location.href);

url.origin;
url.searchParams.get('page');
```

[URL](https://developer.mozilla.org/docs/Web/API/URL)

### Буфер обмена

`navigator.clipboard` читает и пишет текст буфера обмена. Оба метода возвращают промис и работают по HTTPS или на `localhost`. Вызов ставят в обработчик клика: без действия пользователя браузер его отклонит.

[Clipboard](https://developer.mozilla.org/docs/Web/API/Clipboard)

```js
const button = document.querySelector('.copy');

button.addEventListener('click', async () => {
  await navigator.clipboard.writeText(location.href);
});
```

Чтение буфера браузер дополнительно спрашивает у пользователя.

```js
button.addEventListener('click', async () => {
  const text = await navigator.clipboard.readText();

  console.log(text);
});
```

### История

`history.back()` возвращает на предыдущую запись, как кнопка «назад». `pushState` добавляет запись в историю этой вкладки и меняет адрес без загрузки страницы. Сервер по этому адресу всё равно должен отдавать страницу, если пользователь обновит её.

[History.pushState()](https://developer.mozilla.org/docs/Web/API/History/pushState)

```js
history.pushState({ page: 2 }, '', '/items?page=2');

window.addEventListener('popstate', event => {
  console.log(event.state);
});
```

Размер элемента и его положение относительно видимой области даёт `getBoundingClientRect`. Прокрутку окна меняют через `scrollTo`.

```js
const box = document.querySelector('.item').getBoundingClientRect();

box.top;
box.height;

window.scrollTo({
  top: 0,
  behavior: 'smooth',
});
```
