---
title: События
sidebar_position: 1
---

## События

Событие — сигнал браузера о действии: клик, ввод, отправка формы. Обработчик вешают через `addEventListener`. Объект события приходит первым аргументом.

[EventTarget.addEventListener()](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

```js
const button = document.querySelector('.button');

const onClick = event => {
  console.log(event.target);
};

button.addEventListener('click', onClick);
button.removeEventListener('click', onClick);
```

### Атрибут

Обработчик можно записать атрибутом: `on` и имя события. Код атрибута выполняется при событии. Внутри доступны `event` и `this` — сам элемент.

[Глобальные обработчики событий](https://developer.mozilla.org/docs/Web/HTML/Reference/Attributes#event_handler_attributes)

```html
<button onclick="console.log(event.target)">Нажми</button>
<input oninput="console.log(this.value)" />
```

Вызов функции из атрибута находит её в глобальной области. Для этого нужна функция-объявление в обычном скрипте. `const`, `let` и функция из модуля атрибуту недоступны.

```html
<button onclick="greet()">Нажми</button>
<form onsubmit="save(event)"></form>
```

```js
function greet() {
  console.log('click');
}

function save(event) {
  event.preventDefault();
}
```

У события в атрибуте один обработчик: второй атрибут с тем же именем заменяет первый. Через свойство элемента вешают тот же единственный обработчик и так же его снимают.

```js
button.onclick = greet;
button.onclick = null;
```

`addEventListener` добавляет ещё один обработчик и не затирает атрибут. Атрибут затирает свойство `onclick`, и наоборот. Политика безопасности страницы может запретить код в атрибутах.

`event.target` — элемент, на котором действие началось. `event.currentTarget` — элемент, на котором висит обработчик. Для клавиши смотрят `event.key`, не числовой `keyCode`.

```js
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    console.log('escape');
  }
});
```

`preventDefault` отменяет действие браузера: переход по ссылке или отправку формы. `stopPropagation` останавливает всплытие к родителям.

[Event.preventDefault()](https://developer.mozilla.org/docs/Web/API/Event/preventDefault)

```js
const link = document.querySelector('a');

link.addEventListener('click', event => {
  event.preventDefault();
});
```

### Всплытие

Клик по кнопке внутри списка доходит до списка. Один обработчик на родителе ловит события всех потомков. Это делегирование.

[Всплытие и погружение](https://learn.javascript.ru/bubbling-and-capturing)

```js
const list = document.querySelector('#list');

list.addEventListener('click', event => {
  const item = event.target.closest('.item');

  if (!item || !list.contains(item)) {
    return;
  }

  console.log(item.dataset.id);
});
```

Третий аргумент `{ once: true }` снимает обработчик после первого срабатывания.

```js
button.addEventListener(
  'click',
  () => {
    console.log('один раз');
  },
  { once: true },
);
```

### removeEventListener

`removeEventListener` снимает обработчик. В него передают тот же тип события и ту же функцию, что в `addEventListener`. Новая функция с тем же телом — это уже другой обработчик, и снять им нечего.

[EventTarget.removeEventListener()](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

```js
const onClick = () => {
  console.log('click');
};

button.addEventListener('click', onClick);
button.removeEventListener('click', onClick);

button.addEventListener('click', () => {});
button.removeEventListener('click', () => {}); // это другая функция, первая останется
```

Если обработчик вешали с `{ capture: true }`, снимают с тем же флагом.

Снимать нужно, когда подписка живёт дольше интерфейса, к которому она относится.

Обработчик на `document` или `window` остаётся после закрытия модалки, подсказки или окончания перетаскивания. Пока его не снять, он продолжает срабатывать.

```js
const onKeyDown = event => {
  if (event.key !== 'Escape') {
    return;
  }

  close();
  document.removeEventListener('keydown', onKeyDown);
};

const open = () => {
  document.addEventListener('keydown', onKeyDown);
};
```

Подписку вызывают повторно, например при каждом открытии окна. Без снятия предыдущего обработчика один клик запустит его несколько раз.

Если событие нужно только один раз, проще `{ once: true }`, чем снимать обработчик вручную.

Обработчик на самом элементе пропадает вместе с элементом, когда на элемент больше нет ссылок. Отдельно снимать его не нужно.

### Список всех событий

Полный каталог событий браузера: [Event reference](https://developer.mozilla.org/docs/Web/Events). Ниже те, которые вешают на элементы страницы и на `window`. Жёлтым выделены события, которые встречаются чаще всего.

#### Мышь

- <mark>`click`</mark> — кнопку мыши нажали и отпустили на элементе.
- `dblclick` — двойной клик.
- `contextmenu` — правый клик, браузер открывает контекстное меню.
- `mousedown` — кнопку мыши нажали.
- `mouseup` — кнопку мыши отпустили.
- `mousemove` — курсор двигается над элементом.
- `mouseover` — курсор вошёл на элемент. Всплывает и срабатывает на дочерних.
- `mouseout` — курсор вышел с элемента. Всплывает.
- <mark>`mouseenter`</mark> — курсор вошёл на элемент. Не всплывает.
- <mark>`mouseleave`</mark> — курсор вышел с элемента. Не всплывает.
- `wheel` — прокрутили колесо мыши. `mousewheel` устарело.

#### Указатель и касание

События указателя объединяют мышь, палец и перо.

- `pointerdown` — указатель нажали.
- `pointerup` — указатель отпустили.
- `pointermove` — указатель двигается.
- `pointerover` — указатель вошёл на элемент. Всплывает.
- `pointerout` — указатель вышел с элемента. Всплывает.
- `pointerenter` — указатель вошёл на элемент. Не всплывает.
- `pointerleave` — указатель вышел с элемента. Не всплывает.
- `pointercancel` — браузер прервал жест, например из-за прокрутки.
- `touchstart` — пальцем коснулись экрана.
- `touchmove` — палец двигается по экрану.
- `touchend` — палец убрали.
- `touchcancel` — касание прервано.

#### Клавиатура

- <mark>`keydown`</mark> — клавишу нажали. Для символа и служебных клавиш смотрят `event.key`.
- `keyup` — клавишу отпустили.
- `keypress` — устарело. Раньше означало ввод символа. Вместо него <mark>`keydown`</mark>.

#### Фокус

- <mark>`focus`</mark> — элемент получил фокус. Не всплывает.
- <mark>`blur`</mark> — элемент потерял фокус. Не всплывает.
- `focusin` — элемент получил фокус. Всплывает.
- `focusout` — элемент потерял фокус. Всплывает.

#### Форма

- <mark>`input`</mark> — значение изменилось при вводе.
- <mark>`change`</mark> — значение изменилось и зафиксировалось: поле потеряло фокус или выбран пункт списка.
- <mark>`submit`</mark> — форму отправили.
- `reset` — форму сбросили.
- `invalid` — поле не прошло проверку при отправке.
- `select` — выделили текст в поле.
- `search` — отправили поле `type="search"`.

#### Буфер и перетаскивание

- `copy` — скопировали содержимое.
- `cut` — вырезали содержимое.
- `paste` — вставили содержимое.
- `dragstart` — начали перетаскивание.
- `drag` — элемент перетаскивают.
- `dragend` — перетаскивание закончилось.
- `dragenter` — перетаскиваемый элемент вошёл в цель.
- `dragover` — перетаскиваемый элемент над целью. Без `preventDefault` `drop` не случится.
- `dragleave` — перетаскиваемый элемент покинул цель.
- `drop` — элемент отпустили над целью.

#### Страница и окно

- <mark>`DOMContentLoaded`</mark> — HTML разобран, дерево DOM готово. Картинки ещё могут грузиться.
- <mark>`load`</mark> — страница и её ресурсы загружены.
- `beforeunload` — вкладку закрывают или перезагружают.
- `unload` — страница выгружается. Устаревает, надёжнее `pagehide`.
- `pageshow` — страницу показали, в том числе из кэша назад-вперёд.
- `pagehide` — со страницы уходят.
- `visibilitychange` — вкладку скрыли или снова показали. Состояние в `document.visibilityState`.
- <mark>`resize`</mark> — изменился размер окна.
- <mark>`scroll`</mark> — прокрутили элемент или окно.
- `hashchange` — изменилась часть адреса после `#`.
- `popstate` — перешли по истории вкладки.
- `online` — появилась сеть.
- `offline` — сеть пропала.
- `storage` — `localStorage` изменили в другой вкладке этого сайта.
- `error` — ошибка загрузки ресурса или скрипта.
- `abort` — загрузку прервали.
- `beforeprint` — сейчас откроется печать.
- `afterprint` — печать закрыли.
- `fullscreenchange` — элемент вошёл в полный экран или вышел из него.
- `fullscreenerror` — перейти в полный экран не удалось.
- `message` — пришло сообщение, например от `postMessage` или `WebSocket`.
- `open` — соединение открыто, например у `WebSocket`.

#### Анимация

- `animationstart` — CSS-анимация началась.
- `animationiteration` — CSS-анимация повторилась.
- `animationend` — CSS-анимация закончилась.
- `transitionend` — CSS-переход закончился.
- `toggle` — открыли или закрыли `<details>`.

#### Медиа

События `<audio>` и `<video>`.

- `loadstart` — браузер начал искать файл.
- `progress` — браузер загружает данные.
- `loadedmetadata` — известны длительность и размеры.
- `loadeddata` — загружен первый кадр.
- `canplay` — можно начать воспроизведение, но возможны паузы на буферизацию.
- `canplaythrough` — можно проиграть до конца без остановки на буферизацию.
- `play` — воспроизведение запустили или сняли с паузы.
- `playing` — воспроизведение идёт после паузы или буферизации.
- `pause` — поставили на паузу.
- `waiting` — воспроизведение ждёт данные.
- `stalled` — данные перестали поступать.
- `suspend` — браузер сам остановил загрузку.
- `seeking` — перемотка началась.
- `seeked` — перемотка закончилась.
- `timeupdate` — изменилась текущая позиция.
- `durationchange` — изменилась длительность.
- `ratechange` — изменилась скорость.
- `volumechange` — изменили громкость или выключили звук.
- `ended` — воспроизведение дошло до конца.
