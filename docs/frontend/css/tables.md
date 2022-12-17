---
title: Таблицы на CSS
sidebar_position: 11
---

Из любого элемента можно сделать таблицу, а из вложенных - ряды, ячейки, хэдер таблицы, футер таблицы .sample-table станет равнозначным тегу &lt;table&gt;. 
Редко используется, лучше использовать для таблиц специальный тег &lt;table&gt;

```html
<article class="some-table">
  <span class="table-caption">Table on CSS3</span>
  <div class="col col1"></div>
  <div class="col col2"></div>
  <div class="col col3"></div>

  <header>TABLE HEADER</header>

  <div class="row row1">
    <div class="cell">cell1-1</div>
    <div class="cell">cell1-2</div>
    <div class="cell">cell1-3</div>
  </div>

  <div class="row row2">
    <div class="cell">cell2-1</div>
    <div class="cell">cell2-2</div>
    <div class="cell">cell2-3</div>
  </div>

  <div class="row row3">
    <div class="cell">cell3-1</div>
    <div class="cell">cell3-2</div>
    <div class="cell">cell3-3</div>
  </div>

  <footer>TABLE FOOTER</footer>
</article>
```

```css
/* Аналог тега <table> */
.some-table {
  display: table;
  border-collapse: collapse;
}

/* Заголовок, аналог тега <caption> */
.table-caption {
  display: table-caption;
  caption-side: top;
}

/* Аналог тега <col>,
НУЖНО СОЗДАТЬ ПУСТЫЕ
ТЕГИ ВНАЧАЛЕ ТАБЛИЦЫ */
.col  { 
  width: 200px;
  display: table-column; 
}

/* Строка, аналог тега <tr> */
.row { 
  display: table-row; 

  /* Группировка строк контента, аналог тега <tbody> */
  display: table-row-group;
}

/* Аналог тега <thead> */
header {
  display: table-header-group;
  font-weight: bold;
}

/* Аналог тега <tfoot> */
footer { 
  display: table-footer-group; 
}

/* Ячейка, аналог тега <td> */
.cell {
  display: table-cell;
  height: 30px;
  width: 100px;
  padding: 5px;
  border: 1px solid black;
}
```
