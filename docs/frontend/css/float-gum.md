---
title: Float / Gum
sidebar_position: 7
---

## Float-вёрстка

***

## Резиновая вёрстка

Сейчас уже практически так не верстают - используют flexbox или grid.

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
