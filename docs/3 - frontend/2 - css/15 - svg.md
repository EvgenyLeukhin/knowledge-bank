---
title: SVG
sidebar_position: 15
---

## SVG

CSS добирается до фигур, только если SVG вставлен в HTML. У `<img src="icon.svg">` и у `background-image` страница внутренние теги не видит: им можно задать размер рамки, но не цвет круга внутри файла.

[SVG и CSS](https://developer.mozilla.org/docs/Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS)

```html
<svg class="icon" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="8" />
</svg>
```

### Цвет

`fill` заливает фигуру, `stroke` рисует обводку. `currentColor` берёт значение `color` у элемента, поэтому иконка красится так же, как текст рядом.

[fill](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill)

```css
.icon {
  color: #1a1a1a;
}

.icon circle {
  fill: currentColor;
  stroke: currentColor;
  stroke-width: 2px;
}
```

Правило в таблице стилей перекрывает атрибут `fill` на той же фигуре. Правило на родителе его не перекрывает: свой `fill` у круга важнее унаследованного. Поэтому в иконке либо убирают жёсткий цвет, либо сразу ставят `fill="currentColor"`.

```html
<svg class="icon" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="8" fill="currentColor" />
</svg>
```

```css
.icon {
  color: #1a1a1a;
}
```

### Размер

Ширину и высоту задают самому `<svg>`. `viewBox` при этом оставляет рисунок целым и только подгоняет его под новый размер.

```css
.icon {
  width: 24px;
  height: 24px;
}
```

### Наведение

Цвет меняют у `.icon`. Фигуры с `currentColor` подхватят его сами.

```css
.icon:hover {
  color: #c00;
}
```

### Обводка

`stroke-linecap` заканчивает линию: `butt` обрезает по краю, `round` скругляет, `square` добавляет квадрат. `stroke-linejoin` оформляет угол: `miter`, `round` или `bevel`. `stroke-dasharray` задаёт длины штриха и пробела, `stroke-dashoffset` сдвигает этот узор. `fill-opacity` и `stroke-opacity` меняют прозрачность заливки и обводки по отдельности.

[stroke-linecap](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linecap)

```css
.icon circle {
  fill: none;
  stroke: currentColor;
  stroke-width: 2px;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 4 2;
  stroke-dashoffset: 2;
  stroke-opacity: 0.6;
  fill-opacity: 1;
}
```

`fill-rule: evenodd` вырезает место, где контур пересекает сам себя. `nonzero` это место заливает. `clip-rule` делает то же самое для фигуры внутри `clipPath`.

### Текст

У `<text>` работают обычные свойства шрифта. `text-anchor` ставит точку `x` в начало, середину или конец строки. `dominant-baseline` выравнивает строку по вертикали относительно `y`.

[text-anchor](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-anchor)

```css
.icon text {
  fill: currentColor;
  font-family: Arial, sans-serif;
  font-size: 12px;
  text-anchor: middle;
  dominant-baseline: middle;
}
```

### Метки

`marker-start`, `marker-mid` и `marker-end` ставят фигуру из `<marker>` на начало линии, на каждый излом и на конец. Адрес метки пишут как `url(#id)`.

[marker-end](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-end)

```html
<svg class="icon" viewBox="0 0 24 24">
  <defs>
    <marker
      id="arrow"
      markerWidth="6"
      markerHeight="6"
      refX="3"
      refY="3"
      orient="auto"
    >
      <path d="M0 0 L6 3 L0 6 Z" />
    </marker>
  </defs>
  <line x1="2" y1="12" x2="20" y2="12" />
</svg>
```

```css
.icon line {
  stroke: currentColor;
  stroke-width: 2px;
  marker-end: url(#arrow);
}
```

### Обрезка

`clip` оставляет видимым прямоугольник `rect(сверху, справа, снизу, слева)`. Расстояния считаются от левого верхнего угла элемента. Свойство действует только у `position: absolute` или `position: fixed`.

[clip](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip)

```css
.box {
  position: absolute;
  clip: rect(0, 80px, 40px, 0);
}
```

Сейчас форму обрезки задают через `clip-path`. Ему не нужна абсолютная позиция. Подойдут круг, отступы, многоугольник или фигура из SVG.

[clip-path](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path)

```css
.icon {
  clip-path: circle(50%);
}

.photo {
  clip-path: inset(10px 20px);
}
```

Фигуру из SVG подключают по `id`.

```html
<svg viewBox="0 0 24 24">
  <defs>
    <clipPath id="cut">
      <circle cx="12" cy="12" r="8" />
    </clipPath>
  </defs>
  <rect width="24" height="24" fill="currentColor" clip-path="url(#cut)" />
</svg>
```

`clip-rule` относится к контуру внутри `<clipPath>`. `evenodd` вырезает пересечение, `nonzero` оставляет его.

### Файл

Одноцветную иконку из файла красят через маску: файл задаёт форму, `background-color` задаёт цвет.

[mask](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask)

```css
.file-icon {
  width: 24px;
  height: 24px;
  color: #1a1a1a;
  background-color: currentColor;
  mask: url(icon.svg) center / contain no-repeat;
}
```

Короткая запись `mask` собирает `mask-image`, `mask-position`, `mask-size` и `mask-repeat`. Для значка из прозрачного файла подходит `mask-mode: alpha`: форма берётся из прозрачности, а не из яркости.

[mask-mode](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-mode)

В спрайте на странице фигура тоже должна брать `currentColor`. Тогда цвет задаётся классу `<svg>`, внутри которого лежит `<use>`.

```html
<svg class="icon">
  <use href="#icon" />
</svg>
```

Фигура из внешнего файла через `<use href="sprite.svg#icon">` стили страницы часто не видит. Такой значок оставляют с цветом внутри файла или подключают маской.

### Элемент

На `<svg>` и фигуры действуют обычные свойства страницы. `opacity` делает элемент прозрачным целиком. `filter` применяет фильтр CSS или фильтр SVG по `url(#id)`. `display: none` убирает элемент. `pointer-events: none` пропускает клик сквозь рисунок. `cursor` меняет указатель.

```css
.icon {
  opacity: 0.8;
  filter: drop-shadow(0 1px 1px #000);
  cursor: pointer;
}

.icon circle {
  transform-box: fill-box;
  transform-origin: center;
  transform: rotate(20deg);
}
```

`transform-box: fill-box` считает поворот и масштаб от самой фигуры. Без него центр трансформации у SVG часто оказывается в начале `viewBox`, а не в центре круга.

[transform-box](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-box)
