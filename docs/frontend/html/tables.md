---
title: Таблицы
sidebar_position: 4
---

```html
<table>
  <!-- Если строго нужно указать ширину колонок -->
  <colgroup>
    <col width="100" />
    <col width="300" />
    <col width="150" />
  </colgroup>

  <caption>Заголовок таблицы</caption>

  <thead>
    <tr>
      <td colspan="3">Головная строка</td>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>1 - 1</td>
      <td>1 - 2</td>
      <td rowspan="2">1 - 3</td>
    </tr>
    <tr>
      <td>2 - 1</td>
      <td>2 - 2</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td colspan="3">Футер таблицы</td>
    </tr>
  </tfoot>
</table>
```

<table>
  <colgroup>
    <col width="100" />
    <col width="300" />
    <col width="150" />
  </colgroup>

  <caption>Заголовок таблицы</caption>

  <thead>
    <tr>
      <td colspan="3">Головная строка</td>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>1 - 1</td>
      <td>1 - 2</td>
      <td rowspan="2">1 - 3</td>
    </tr>
    <tr>
      <td>2 - 1</td>
      <td>2 - 2</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td colspan="3">Футер таблицы</td>
    </tr>
  </tfoot>
</table>
