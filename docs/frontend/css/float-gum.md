---
title: Float / Gum
sidebar_position: 7
---

## Float-вёрстка

!!! Сейчас уже практически так не верстают - используют flexbox или grid.

- Свойство **float** изначально задумывалось только для обтекания изображения текстом, но позже оно нашло более широкое применение.
- **float** применяют для управления ПОТОКОМ документа и создания СЕТОК
- ЕСЛИ в стилях есть float, то ВСЕГДА УКАЗЫВАЙТЕ значение ШИРИНЫ!!!
- float используется для выравнивания блоков по сторонам
- float-ы выпадают из потока и блочные элементы их НЕ ВИДЯТ, а текст обтекает их со свободной стороны
- Чтобы другие блочные элементы "видели" флоатнутые, их либо нужно тоже зафлоатить или применить свойство clear со значениями left, rigth или both. Оно запрещает обтекание и переносит элемент на новую строку.
clear: none; разрешает обтекание

```html
<div class="container">
  <div class="box box-left">1</div>
  <div class="box box-right">2</div>
  <div class="box box-new-row">2</div>
</div>
```

```scss
.box {
  height: 50px;
  width: 50px;
}

// будет слева
.box-left { float: left; }

// будет справа
.box-right { float: right; }

// будет с новой строки
.box-new-row { clear: both; }
```

***

### Распорки

Так как зафлоаченные элементы выпадают из потока, то контейнерам, которые включают в себя такие элементы нужно ставить распорки, чтобы они могли растягиваться по вертикали под все все зафлоаченные элементы.

```html
<div class="container">
  <div class="column1"></div>
  <div class="column2"></div>
  <div class="clearfix"></div>
</div>
```

```scss
// html-распорка
.clearfix {
  content: "";
  display: table;
  clear: both;
}

// распорка на псевдо-элементе - эффект тот же
.container::after {
  content: "";
  display: table;
  clear: both;
}
```

***

### Сетка на float

Sidebar зафлоачен влево с фиксированной шириной, а main-content с margin-left на ширину sidebar.

```html
<header class="main-header">HEADER</header>

<div class="content-container clearfix"</div>
  <aside class="sidebar">SIDEBAR</aside>
  <div class="main-content">MAIN-CONTENT</div>
</div>

<footer class="main-footer">FOOTER</footer
```

```css
.header, .footer {
  min-height: 50px;
  background-color: pink;
  border: 3px dotted black;
  margin: 5px;
  padding: 5px;
}

.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

.aside {
  float: left;
  width: 150px;
  min-height: 350px;
  margin-left: 5px;
  padding: 5px;
  background-color: lightyellow;
  border: 3px dotted black;
}

.main-content {
  min-height: 350px;
  margin: 5px;
  margin-left: 150px;
  padding: 5px;
  background-color: lightgreen;
  border: 3px dotted black;
}
```

***

## Резиновая вёрстка (Gum)

!!! Сейчас уже практически так не верстают - используют flexbox или grid.

Принцип задавать размеры и отступы дочерних элементов в %-тах от ширины родительского элемента. А у родителького контейнера есть "резиновый" диапозон от min-width до max-width.

1. Сначала верстается фикс. страница в px по макету, а потом уже производится переход в %-ты от этих пикселей.
2. 500px берётся за основу, всё расчеты будут вестись от этого значения для width, margin и padding
3. Нужно у центровщика удалить фикс. ширину, задать максимальную и минимальную, а горизонтальные значения указывать в %-тах
4. Горизонтальные padding и margin вложенных блоков считают как процент от родителького блока, а не от своего, а вертикальные - от своего

```html
<div class="gum-parent">
  <div class="gum-child">1</div>
  <div class="gum-child">2</div>
  <div class="gum-child">3</div>
  <div class="gum-child">4</div>
</div>
```

```css
.gum-parent {
  min-width: 350px;
  max-width: 850px;
  margin: 0 auto;
}

/* Распорка у родителя */
.gum-parent::after {
  content: "";
  display: table;
  clear: both;
}

.gum-child {
  float: left;
  width: 22%;
  height: 150px;
  margin-right: 4%;
}

.gum-child:last-child { margin-right: 0; }
```
