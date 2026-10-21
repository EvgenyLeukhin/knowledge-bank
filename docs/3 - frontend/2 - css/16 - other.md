---
title: Разное
sidebar_position: 16
---

## Селекторы

`:is()` перечисляет варианты в одном селекторе. Его специфичность равна самому тяжёлому варианту внутри скобок. `:where()` делает то же самое, но специфичность всегда нулевая, поэтому такое правило легко перекрыть.

[:is()](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:is)

```css
:is(h1, h2, h3) {
  font-family: Arial, sans-serif;
}

:where(.card, .panel) a {
  color: inherit;
}
```

`:has()` выбирает элемент, внутри которого есть подходящий потомок.

[:has()](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:has)

```css
.card:has(.badge) {
  border-color: #c00;
}
```

`:focus-visible` срабатывает, когда фокус пришёл с клавиатуры. Клик мышью его обычно не показывает.

[:focus-visible](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:focus-visible)

```css
button:focus-visible {
  outline: 2px solid #1a1a1a;
}
```

Вложенность пишут прямо в CSS. `&` означает текущий селектор.

[CSS nesting](https://developer.mozilla.org/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)

```css
.card {
  color: #222;

  & .title {
    font-size: 20px;
  }

  &:hover {
    color: #c00;
  }
}
```

### Каскад

`@layer` задаёт порядок групп правил. Побеждает слой, который в списке стоит позже. Правило вне слоёв перекрывает правила внутри слоёв.

[@layer](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@layer)

```css
@layer base, theme;

@layer base {
  button {
    color: gray;
  }
}

@layer theme {
  button {
    color: blue;
  }
}
```

`!important` перекрывает обычное объявление с любой специфичностью.

[important](https://developer.mozilla.org/docs/Web/CSS/CSS_cascade/Specificity#the_!important_exception)

`revert` возвращает значение, которое было до правил автора: для обычного свойства это стиль браузера. `initial` возвращает начальное значение самого свойства, а не стиль браузера.

[revert](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/revert)

```css
button {
  color: revert;
}
```

## Значения

`vmin` — 1% меньшей стороны окна, `vmax` — 1% большей. `svh` считает высоту, когда панель браузера на телефоне открыта. `lvh` считает её скрытой. `dvh` меняется вместе с панелью.

```css
.screen {
  min-height: 100dvh;
  font-size: 4vmin;
}
```

`min()` берёт меньшее значение, `max()` — большее. `clamp()` держит предпочитаемое значение между минимумом и максимумом.

[clamp()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/clamp)

```css
h1 {
  font-size: clamp(20px, 4vw, 40px);
  width: min(720px, 100%);
}
```

`oklch` задаёт светлоту, насыщенность и оттенок. `color-mix()` смешивает два цвета. `light-dark()` выбирает цвет по схеме страницы. Для него на корне задают `color-scheme`.

[oklch()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/color_value/oklch)

```css
:root {
  color-scheme: light dark;
}

body {
  color: oklch(30% 0.02 250);
  background: light-dark(#fff, #111);
  border-color: color-mix(in oklch, blue 40%, white);
}
```

## Адаптив

`@container` смотрит на ширину родителя, а не окна. Родителю задают `container-type: inline-size`. Запрос срабатывает у его потомков.

[Container queries](https://developer.mozilla.org/docs/Web/CSS/CSS_containment/Container_queries)

```css
.card {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card h2 {
    font-size: 24px;
  }
}
```

`prefers-color-scheme` читает светлую или тёмную схему системы. `prefers-reduced-motion` говорит, что пользователь просит меньше движения.

```css
@media (prefers-color-scheme: dark) {
  body {
    background: #111;
    color: #fff;
  }
}

@media (prefers-reduced-motion: reduce) {
  .card {
    transition: none;
  }
}
```

`aspect-ratio` задаёт соотношение сторон самому элементу.

[aspect-ratio](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/aspect-ratio)

```css
.video {
  width: 100%;
  aspect-ratio: 16 / 9;
}
```

## Сетка

`subgrid` отдаёт потомку колонки или строки родителя. Внутренние элементы встают в те же линии, а не в свою отдельную сетку.

[Subgrid](https://developer.mozilla.org/docs/Web/CSS/CSS_grid_layout/Subgrid)

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.grid article {
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: subgrid;
}
```

## Прокрутка

`scroll-snap-type` останавливает прокрутку на элементах. У потомка ставят `scroll-snap-align`.

[CSS scroll snap](https://developer.mozilla.org/docs/Web/CSS/CSS_scroll_snap)

```css
.row {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.row img {
  scroll-snap-align: start;
}
```

`overscroll-behavior: contain` не отдаёт прокрутку родителю, когда свой блок уже докручен до края.

[overscroll-behavior](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior)

```css
.panel {
  overflow: auto;
  overscroll-behavior: contain;
}
```

## Логические свойства

`inline` идёт по строке, `block` — поперёк строки. В обычном горизонтальном тексте `margin-inline` — это левый и правый отступ, `padding-block` — верхний и нижний.

[CSS logical properties](https://developer.mozilla.org/docs/Web/CSS/CSS_logical_properties_and_values)

```css
.card {
  margin-inline: auto;
  padding-block: 16px;
  padding-inline: 24px;
}
```

## Новые свойства

Ниже свойства и функции, которые есть в текущих Chrome, Firefox и Safari и которых нет в остальных заметках. Статус на октябрь 2026 года: [Baseline](https://web-platform-dx.github.io/web-features-explorer/all/).

### Текст

`text-wrap: balance` выравнивает длину строк заголовка. `pretty` аккуратнее переносит длинный текст. `stable` не пересобирает строки выше курсора при правке.

[text-wrap](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap)

```css
h1 {
  text-wrap: balance;
}

p {
  text-wrap: pretty;
  hyphens: auto;
  tab-size: 2;
  font-size-adjust: 0.5;
}
```

`white-space-collapse` отдельно решает, схлопывать ли пробелы и переводы строк. `text-indent: each-line` делает отступ у каждой строки после принудительного разрыва, `hanging` отступает все строки, кроме первой. `text-decoration-skip-ink: all` разрывает подчёркивание там, где оно пересекает букву. `column-span: all` протягивает элемент через все колонки.

```css
p {
  white-space-collapse: break-spaces;
  text-indent: hanging;
  text-decoration-skip-ink: all;
}

h2 {
  column-span: all;
}
```

`rcap`, `rch`, `rex` и `ric` считают размер от шрифта корневого элемента: высота заглавных, ширина `0`, высота `x` и ширина иероглифа.

### Форма и прокрутка

`field-sizing: content` растягивает поле по введённому тексту. `appearance: none` снимает системный вид контрола, чтобы раскрасить его своими стилями.

[field-sizing](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/field-sizing)

```css
textarea {
  field-sizing: content;
}

select {
  appearance: none;
}
```

`scrollbar-width` задаёт толщину полосы: `auto`, `thin` или `none`. `scrollbar-color` красит бегунок и дорожку. `scrollbar-gutter: stable` заранее оставляет место под полосу, чтобы вёрстка не прыгала.

[scrollbar-color](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-color)

```css
.panel {
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: #888 #eee;
  scrollbar-gutter: stable;
  scroll-behavior: smooth;
}
```

`:open` выбирает открытые `<details>`, `<dialog>` и поповер. `::details-content` стилизует раскрываемую часть `<details>` без самого `<summary>`.

```css
details:open {
  border-color: #1a1a1a;
}

details::details-content {
  padding-top: 8px;
}
```

`overflow: clip` обрезает вылезшее содержимое и не создаёт прокрутку. `content-visibility: auto` не рисует блок, пока он далеко от экрана. `contain-intrinsic-size` задаёт ему запасной размер, чтобы страница не прыгала.

[content-visibility](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content-visibility)

```css
.feed article {
  content-visibility: auto;
  contain-intrinsic-size: auto 400px;
}
```

`rect()` и `xywh()` рисуют прямоугольник для `clip-path`. `shape()` собирает фигуру командами `move`, `line` и `curve`. `image-rendering: crisp-edges` оставляет у увеличенной картинки резкие края.

```css
.photo {
  clip-path: rect(10px 20px 30px 40px);
  image-rendering: crisp-edges;
}
```

### Переходы

`@starting-style` задаёт стиль, с которого начинается переход при появлении элемента. `transition-behavior: allow-discrete` разрешает переход у дискретных свойств вроде `display` и `overlay`. `animation-composition` решает, как сложить две анимации одного свойства: заменить, добавить или накопить. `zoom` масштабирует элемент и занимает новое место в потоке. `transform` место в потоке не меняет.

[@starting-style](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@starting-style)

```css
.dialog {
  transition:
    opacity 0.2s,
    display 0.2s allow-discrete;
  opacity: 1;
}

@starting-style {
  .dialog {
    opacity: 0;
  }
}
```

Именованный переход между состояниями страницы задаёт `view-transition-name`. Общий класс нескольких таких элементов задаёт `view-transition-class`.

[View Transition API](https://developer.mozilla.org/docs/Web/API/View_Transition_API)

```css
.hero {
  view-transition-name: hero;
}
```

### Цвет и переменные

`@property` объявляет тип своей переменной, начальное значение и можно ли её анимировать. Обычная `--color` без регистрации между цветами не анимируется.

[@property](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@property)

```css
@property --accent {
  syntax: '<color>';
  inherits: false;
  initial-value: #1a1a1a;
}
```

`oklch(from blue l c 200)` берёт готовый цвет и меняет в нём один канал. `contrast-color()` подбирает контрастный цвет к заданному. В градиенте цветовое пространство пишут после направления: `linear-gradient(to right in oklch, blue, white)`.

`round()`, `mod()` и `rem()` округляют число и считают остаток. `abs()` берёт модуль, `sign()` возвращает знак.

```css
.box {
  width: round(nearest, 33.4%, 10%);
  margin-left: abs(-8px);
}
```

### Область и выравнивание

`@scope` ограничивает селекторы поддеревом. Стили не выходят за `main` и не заходят в `.promo`.

[@scope](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@scope)

```css
@scope (main) to (.promo) {
  a {
    color: #06c;
  }
}
```

Запрос стиля контейнера смотрит на значение переменной родителя. Родителю нужен `container-type`.

```css
.card {
  container-type: inline-size;
  --theme: dark;
}

@container style(--theme: dark) {
  .card {
    background: #111;
  }
}
```

`align-content` выравнивает содержимое обычного блока по вертикали, не только flex и grid.

```css
.panel {
  height: 200px;
  align-content: center;
}
```

### Печать и мелочи

`@page` задаёт поля печатной страницы. `print-color-adjust: exact` просит печатать заданные цвета, а не экономить краску. `paint-order` меняет порядок заливки, обводки и меток у SVG. `::target-text` красит фрагмент, открытый ссылкой `#:~:text=`. `:state()` выбирает своё состояние custom element.

```css
@page {
  margin: 16mm;
}

.icon path {
  paint-order: stroke fill;
}
```

`baseline-shift` сдвигает элемент относительно базовой линии. `ruby-align` и `ruby-position` управляют подсказкой над иероглифом. Это свойства для вёрстки текста, а не для обычных блоков.
