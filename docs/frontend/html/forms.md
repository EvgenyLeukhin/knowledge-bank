---
title: Формы
sidebar_position: 3
---

## Контейнер формы

```html
<form action="https://some-url.ru" method="post | get" autocomplete>
  <!-- Набор полей 1 -->
  <fieldset>
    <!-- Название для набора полей -->
    <legend><label for="field-1">Группа полей 1</label></legend>

    <!-- Контейнер поля-1 -->
    <div class="form-group">
      <!-- лейбл -->
      <label for="field-1">Field-1 title</label>

      <!-- само поле -->
      <input id='field-1' type="text" name="field-1" placeholder="Something1" tabindex="1" required />
    </div>

    <!-- Контейнер поля-2 -->
    <div class="form-group">
      <label for="field-2">Field-2 title</label>
      <input id='field-2' type="text" name="field-2" placeholder="Something2" tabindex="2" />
    </div>
  </fieldset>

  <!-- Набор полей 2 -->
  <fieldset>
    <legend><label for="field-2">Группа полей 2</label></legend>
    ...
  </fieldset>

  <!-- Набор полей 3 -->
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
<input type="color" /> - Цвет
<input type="file" /> - Загрузить файл в браузер
<textarea rows="10" cols="45"></textarea> - Текстовое поле
```

<input type="text" patern="[А-Яа-яЁё]" placeholder="Введите текст" />&nbsp;
<input type="number" placeholder="Введите число" />&nbsp;
<input type="password" placeholder="Введите пароль" />&nbsp;
<input type="email" placeholder="Введите email" />&nbsp;
<input type="url" placeholder="Введите url" />&nbsp;
<input type="tel" placeholder="+7-XXX-XXX-XXXX" patern="+7-[0-9]{3}-[0-9]{3}-[0-9]{4}"/>&nbsp;
<input type="search" placeholder="Поиск ..." />&nbsp;
<input type="color" />&nbsp;
<input type="file" />&nbsp;<br /><br />
<textarea rows="10" cols="45" placeholder="Введите комментарий"></textarea>

***

## Списки

### select

```html
<label for="year-id">Год рождения:</label>

<select name="year" id="year-id">
  <!-- optgroup - Группировка опшинов -->
  <optgroup label="80-е">
    <option>1981 год</option>
    <option>1982 год</option>
    <option>1983 год</option>
  </optgroup> 
  <optgroup label="90-е">
    <option>1991 год</option>
    <option>1992 год</option>
    <option>1993 год</option>
  </optgroup> 
</select>
```

<label for="year-id">Год рождения:</label>&nbsp;
<select name="year" id="year-id">
  <optgroup label="80-е">
    <option>1981 год</option>
    <option>1982 год</option>
    <option>1983 год</option>
  </optgroup> 
  <optgroup label="90-е">
    <option>1991 год</option>
    <option>1992 год</option>
    <option>1993 год</option>
  </optgroup> 
</select>

### datalist

Как select, только можно вводить значения которых нет в option. Селект с поиском.

```html
<label for="education-input">Ваше образование</label>&nbsp;
<input type="text" list="education" name="education" id="education-input" />

<!-- Связь через id -->
<datalist id="education">
  <option value="Среднее неполное">
  <option value="Среднее">
  <option value="Средне-специальное">
  <option value="Высшее неполное">
  <option value="Высшее(бакалавр)">
  <option value="Высшее">
  <option value="Высшее(магистр)">
</datalist>
```

<label for="education-input">Ваше образование</label>&nbsp;
<input type="text" list="education" name="education" id="education-input" />
<datalist id="education">
  <option value="Среднее неполное" />
  <option value="Среднее" />
  <option value="Средне-специальное" />
  <option value="Высшее неполное" />
  <option value="Высшее(бакалавр)" />
  <option value="Высшее" />
  <option value="Высшее(магистр)" />
</datalist>

***

## Checkbox и radio

```html
<!-- Checkbox -->
<input type="checkbox" name="moscow" id="moscow-id" value="1">
<label for="moscow-id">Я являюсь гражданином РФ</label>

<!-- Radio -->
<h3>Ваш возраст:</h3>
<label>
  <input type="radio" name="age" value="0-17" />
  <span>0-17</span>
</label>
<label>
  <input type="radio" name="age" value="18-35" />
  <span>18-35</span>
</label>
<label>
  <input type="radio" name="age" value="35-60" />
  <span>35-60</span>
</label>
<label>
  <input type="radio" name="age" value="over60" disabled />
  <span>более 60 (disabled)</span>
</label>
```

<input type="checkbox" name="moscow" id="moscow-id" value="1" />&nbsp;
<label for="moscow-id">Являюсь гражданином РФ</label>

<h3>Ваш возраст:</h3>
<label>
  <input type="radio" name="age" value="0-17" />
  <span>0-17</span>
</label>
&nbsp;
<label>
  <input type="radio" name="age" value="18-35" />
  <span>18-35</span>
</label>
&nbsp;
<label>
  <input type="radio" name="age" value="35-60" />
  <span>35-60</span>
</label>
&nbsp;
<label>
  <input type="radio" name="age" value="over60" disabled />
  <span>более 60 (disabled)</span>
</label>

***

## Дата и время

```html
<input type="date" min="1980-01-01" max="2145-01-08" value="2022-01-01" /> - Полная дата
<input type="month" /> - Выбор месяца
<input type="week" /> - Выбор недели
```

<input type="date" min="1980-01-01" max="2145-01-08" value="2022-01-01" />&nbsp;
<input type="month" />&nbsp;
<input type="week" />&nbsp;

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

<!-- image работает как submit, только еще отправляет доп. поля (x и y), координаты клика по картинке -->
<input type="image" src="img_submit.gif" alt="Submit" width="48" height="48" />
```

### button

<input type="submit" value="Отправить" />
<input type="reset" value="Сбросить" />

### input

<input type="submit" value="Отправить" />
<input type="reset" value="Сбросить" />

***


## Range, &lt;meter&gt; и &lt;progress&gt;

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

Для нативной валидации полей.

![pattern](/img/html/pattern.png)
