---
title: Формы
sidebar_position: 3
---

## Контейнер формы

```html
<form action="https://some-url.ru" method="post | get" autocomplete>
  <!-- Группа полей 1 -->
  <fieldset>
    <!-- Название для группы полей -->
    <legend><label for="field-1">Группа полей 1</label></legend>

    <!-- поле-1 -->
    <div class="form-group">
      <label for="field-1">Field-1 title</label>
      <input id='field-1' type="text" name="field-1" placeholder="Something1" tabindex="1" required />
    </div>

    <!-- поле-2 -->
    <div class="form-group">
      <label for="field-2">Field-2 title</label>
      <input id='field-2' type="text" name="field-2" placeholder="Something2" tabindex="2" />
    </div>
  </fieldset>

  <!-- Группа полей 2 -->
  <fieldset>
    <legend><label for="field-2">Группа полей 2</label></legend>
    ...
  </fieldset>

  <!-- Группа полей 3 -->
  <fieldset>
    <legend><label for="field-3">Группа полей 3</label></legend>
    ...
  </fieldset>

  <!-- Кнопки действий формы -->
  <button type="reset">Сбросить</button>
  <button type="submit">Отправить</button>
</form>

```

<form action="https://some-url.ru" method="post" autocomplete>
  <fieldset>
    <legend><label for="field-1">Контейнер формы</label></legend>
    <div class="form-group">
      <label for="field-1">Field-1 title</label>&nbsp;
      <input id='field-1' type="text" name="field-1" placeholder="Something1" required autofocus />
    </div>
    <div class="form-group">
      <label for="field-2">Field-2 title</label>&nbsp;
      <input id='field-2' type="text" name="field-2" placeholder="Something2" />
    </div>
  </fieldset>

  <button type="reset">Сбросить</button>
  <button type="submit">Отправить</button>
</form>

***

## Текстовые поля

При отправки будет отрабатывать встроенная браузерная валидация. Ей можно управлять используя атрибут ```pattern```, в котором нужно записывать регулярные выражения.

```html
<input type="text" patern="[А-Яа-яЁё]"/> - Простое текстовое поле
<input type="number" /> - Цифровое поле
<input type="password" /> - Поле пароля
<input type="email" /> - Поле email
<input type="url" /> - Поле url
<input type="tel" placeholder="+7-XXX-XXX-XXXX" patern="+7-[0-9]{3}-[0-9]{3}-[0-9]{4}"/> - Поле телефона
<input type="search" /> - Поле поиска
<textarea rows="10" cols="45"></textarea> - Текстовое поле
```

***

## Списки (селекты и дропдауны)

***

## Checkbox и radio

***

## Дата и время

```html
<input type="date" min="1980-01-01" max="2145-01-08" value="2022-01-01" /> - Полная дата
<input type="month" /> - Выбор месяца
<input type="week" /> - Выбор недели
```

***

## Кнопки

```html
<!-- Можно использовать button -->
<button type="submit">Отправить</button>
<button type="reset">Сбросить</button>

<!-- Преимущество, что button может иметь вложенный контент -->
<button type="submit">
  <img src="../pict/phone.png" width="35" alt="button-img">
</button>


<!-- Можно использовать input с type -->
<input type="submit" value="Отправить" />
<input type="reset" value="Сбросить" />

<!-- Работает как submit, только еще отправляет доп. поля (x и y), координаты клика по картинке -->
<input type="image" src="img_submit.gif" alt="Submit" width="48" height="48" />

<!-- Загрузить файл в браузер -->
<input type="file" />

<!-- Цвет -->
<input type="color" />
```

***


## Цвет, range, &lt;meter&gt; и &lt;progress&gt;

range, &lt;meter&gt; и &lt;progress&gt; похожие по смыслу тэги. Показывают шкалу с индикацией.

Используется для отображения прогресса завершённости задачи. Изменение значения происходит через JavaScript.

```range``` - интерактивный ползунок, можно задавать значение.

```<meter>``` - используется для вывода значения в некотором известном диапазоне. Применяется преимущественно для отображения числовых значений (например, количества результатов поиска, объёма жидкости, давления и др).

```<progress>``` - показывает прогресс состояния (например, загрузка фото).


```html
<h3>Range</h3>
<input id="range_id" type="range" value="10" step="0.1" />

<!-- Вывод значений (через JS) -->
<output name="result" for="range_id">0</output>


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

<h3>Range</h3>
<input id="range_id" type="range" value="10" step="0.1" /><br />

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

***

## JS-атрибуты

* ```onclick``` - клик
* ```onsubmit``` - отправка формы
* ```oninput``` - ввод значения

***

## Pattern

![pattern](/img/html/pattern.png)