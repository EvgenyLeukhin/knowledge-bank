---
title: Разное
sidebar_position: 13
---

## Поиск

`<search>` помечает форму поиска. Для страницы это отдельная область, как `<nav>` для меню.

[search](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/search)

```html
<search>
  <form action="/search">
    <label>
      Поиск
      <input type="search" name="q" />
    </label>
    <button type="submit">Найти</button>
  </form>
</search>
```

## Popover

`popover` показывает слой поверх страницы без своего скрипта. Кнопка открывает его атрибутом `popovertarget`. У `popover="auto"` слой сам закрывается по клику снаружи и по Escape, открытым остаётся только один такой слой. `popover="manual"` закрывается только своей кнопкой.

[Popover API](https://developer.mozilla.org/docs/Web/API/Popover_API)

```html
<button popovertarget="hint">Подсказка</button>

<div id="hint" popover="auto">
  <p>Короткий текст</p>
  <button popovertarget="hint" popovertargetaction="hide">Закрыть</button>
</div>
```

`popovertargetaction` бывает `toggle`, `show` и `hide`. Без него кнопка переключает слой.

## Модальное окно

`<dialog>` уже описан в спец-тегах через `show()`. `showModal()` открывает его модально: остальная страница не получает фокус, а фон можно покрасить через `::backdrop`.

[dialog](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dialog)

```html
<button commandfor="confirm" command="show-modal">Удалить</button>

<dialog id="confirm" closedby="any">
  <form method="dialog">
    <p>Удалить запись?</p>
    <button value="cancel">Отмена</button>
    <button value="ok">Удалить</button>
  </form>
</dialog>
```

`commandfor` указывает окно, `command="show-modal"` открывает его, `command="close"` закрывает. `closedby="any"` закрывает окно по клику на фон и по Escape. У формы с `method="dialog"` кнопка закрывает окно и записывает свой `value` в `dialog.returnValue`.

## Аккордеон

Одинаковый `name` у нескольких `<details>` оставляет открытым только один блок.

[details](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/details)

```html
<details name="faq" open>
  <summary>Первый вопрос</summary>
  <p>Ответ</p>
</details>

<details name="faq">
  <summary>Второй вопрос</summary>
  <p>Ответ</p>
</details>
```

## Атрибуты

`inert` выключает элемент и всё внутри него: по нему нельзя кликнуть, и он не попадает в переход по Tab.

[inert](https://developer.mozilla.org/docs/Web/HTML/Reference/Global_attributes/inert)

```html
<div inert>
  <button>Не нажимается</button>
</div>
```

`fetchpriority` говорит браузеру, что грузить раньше. Для картинки на первом экране ставят `high`, для далёких блоков — `low`.

[fetchpriority](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img#fetchpriority)

```html
<img src="hero.jpg" alt="Обложка" fetchpriority="high" />
```

Поле можно держать вне `<form>`, если указать форме `id`, а полю — этот `id` в атрибуте `form`.

```html
<form id="login" action="/login" method="post"></form>

<input form="login" name="email" type="email" />
<button form="login" type="submit">Войти</button>
```

У `<iframe>` атрибут `sandbox` запрещает встроенной странице скрипты, формы и переход наружу. Разрешение добавляют отдельно.

[iframe](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe#sandbox)

```html
<iframe
  src="https://example.com"
  sandbox="allow-scripts"
  title="Пример"
></iframe>
```

Ссылка с `target="_blank"` открывает новую вкладку. Рядом ставят `rel="noopener"`, чтобы новая страница не получила доступ к окну, из которого её открыли.

```html
<a href="https://example.com" target="_blank" rel="noopener">Сайт</a>
```
