---
title: Формы
sidebar_position: 3
---


## Пример формы

```html
<form action="" method="post">

</form>
```

***

## &lt;meter&gt; и &lt;progress&gt;

Позожие по смыслу тэги. Показывают шкалу с индикацией.

Используется для отображения прогресса завершённости задачи. Изменение значения происходит через JavaScript.

```<meter>``` - используется для вывода значения в некотором известном диапазоне. Применяется преимущественно для отображения числовых значений (например, количества результатов поиска, объёма жидкости, давления и др).

```<progress>``` - показывает прогресс состояния (например, загрузка фото).


```html
<h3>Температура воды</h3>
<meter value="0" max="100" low="10" high="60">Низкая</meter> 
<meter value="30" max="100" low="10" high="60">Нормальная</meter>
<meter value="80" max="100" low="10" high="60">Горячая</meter>
<meter value="100" max="100">Кипяток</meter>

<h3>Загрузка фото</h3>
<progress max="100" value="25">
  Загружено на <span id="value">25</span>%
</progress>
```

<h3>Температура воды</h3>

<meter value="0" max="100" low="10" high="60">Низкая</meter>&nbsp; 
<meter value="30" max="100" low="10" high="60">Нормальная</meter>&nbsp;
<meter value="80" max="100" low="10" high="60">Горячая</meter>&nbsp;
<meter value="100" max="100">Кипяток</meter>&nbsp;

<br />

<h3>Загрузка фото</h3>

<progress max="100" value="25">
  Загружено на <span id="value">25</span>%
</progress>