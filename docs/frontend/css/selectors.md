---
title: Селекторы / SCSS
sidebar_position: 0
---

## Виды селекторов

```css
/* Синтаксис css */
селектор {
  свойство1: значение;
  свойство2: значение;
  свойство3: значение;
}
```

КЛАССЫ и ID не могут начинаться с цифры! ID только один на странице!

```css
/* ОБЩИЙ (все тэги) */
* { ... }

/* АТТРИБУТНЫЙ */
/* Все элементы, у которых есть аттрибут style */
[style] { ... }

/* ТЕГОВЫЙ */
p { ... } 

/* КЛАССОВЫЙ */
.some-classname { ... } 
/* <p class="some-classname">...</p> */

/* ID */
#some-id { ... }
/* <p id="some-id">...</p> */

/* ВЛОЖЕННЫЙ (с пробелом) */
p a { ... }

/* СОСЕДНИЙ */
p + a { ... } 

/* ДОЧЕРНИЙ */
p > a { ... } 

/* ОБЪЕДИНЁННЫЙ (без пробела) */
.class1.class2 { ... } 

/* ГРУППОВОЙ (через запятую) */
.class1, .class2, .class3 { ... }
```

### Избирательные

```css
/* ТЭГ с АТТРИБУТОМ */
input[type="password"] { ... } 

/* Селектор по НАЧАЛУ названия атрибута */
div[class^="column-"] { ... }

/* Селектор по КОНЦУ названия атрибута */
a[href$=".pdf"] { ... }

/* ОДИН из классов */
div[class~="column"] { ... }

/* Селектор НАЧАЛУ НАЗВАНИЯ */
div[class|="column"] { ... }
```

### Псевдоклассы

```css
/* корневой псевдокласс для css-переменных */
:root { ... }

/* Псевдоэлементы */
::before, ::after { content: ""; }

/* Выделение текста */
::selection { ... }

/* Первый потомок */
:first-child { ... }

/* Последний потомок */
:last-child { ... }

/* Номер потомка */
:nth-child(odd | even | 3 | 2n | 1n + 6) { ... }
  (odd) - нечётные;
  (even) - чётные;
  (2n) - каждый 2-ой;
  (1n + 6) - все элементы, начиная с 6-ого;
  (2n + 6) - каждый 2-й, начиная с 6-ого;
  (3n + 9) - каждый 3-й, начиная с 9-ого;

/* ОТРИЦАЮЩИЙ селектор */
ul li:not(:last-child) { ... } 

/* ПУСТОЙ селектор (если нет текста или других тэгов) */
ul li:empty { ... }

/* Cелектор ПЕРВОЙ ЛИНИИ */
p::first-line { ... } 

/* Cелектор ПЕРВОЙ БУКВЫ */
span::first-letter { ... }

/* Cелектор ЕДИНСТВЕННОГО ДОЧЕРНЕГО ЭЛЕМЕНТА */
ul li:only-child { ... }

/* Cелектор ДОЧЕРНЕГО ЭЛЕМЕНТА ПО НОМЕРУ С КОНЦА */
ul li:nth-last-child(2) { ... } 

/* Cелектор ПЕРВОГО ТИПА */
ul:first-of-type { ... } 

/* Выберет первый список в коде */
<ul><li>1</li></ul>
<ul><li>2</li></ul>

/* Cелектор ПОСЛЕДНЕГО ТИПА */
ul:last-of-type { ... } 

/* Cелектор n-ОГО ТИПА */
/* Выберет 3-й список в коде c начала */
:nth-of-type(3) { ... }

/* Cелектор n-ОГО ТИПА С КОНЦА */
/* Выберет 3-й список в коде c конца */
:nth-last-of-type(3) { ... }

/* Cелектор ЕДИНСТВЕННОГО ТИПА */
ul:only-of-type { ... }
/* Выберет список, если он является единственным в своём родителе */
```

### Для ссылок

```css
/* Работает при наведении курсора */
:hover { ... }

/* Работает при нажатии кнопки мыши */
:active { ... }

/* Фокус по табу. Работает также для input */
:focus { ... }

/* Выбирает непосещенные ссылки */
:link { ... }

/* Выбирает посещенные ссылки */
:visited { ... }

/* Для якорных объектов, через id */
:target { ... }
/* Если заголовок h2 будет якорем для какой-либо ссылки, 
то по клику на связанную якорную ссылку, он поменяет цвет  */
```

### Для форм

```css
/* Работает для форм и элементов форм, у кот. НЕ СТОИТ атрибут disabled */
:enabled { ... }

/* Работает для форм и элементов форм, у кот. стоит атрибут read-only */
/* input[readonly] */
:read-only { ... }

/* Работает для форм и элементов форм, кот. доступны для редактирования */
/* input:not([readonly] */
:read-write { ... }

/* Выбирает формы С атрибутом обязательного заполнения */
/* input[required] */
:required { ... }

/* Выбирает формы БЕЗ required */
:optional { ... }

/* Выбирает формы c атрибутом checked */
/* Работает с инпутами radio и checkbox */
:checked { ... }

/* Выбирает элементы с КОРРЕКТНЫМ введённым значением */
/* Корректность ввдённых данных должна быть указана в атрибуте pattern */
:valid { ... }

/* Выбирает элементы с НЕКОРРЕКТНЫМ введённым значением */
:invalid { ... }

/* Выбирает элементы, значение кот. ПОПАДАЕТ в указанный диапозон */
/* Работает с type="mumber" min="..." max="..." */
:in-range { ... }

/* Выбирает элементы, значение кот. НЕ ПОПАДАЕТ в указанный диапозон */
/* Работает с type="mumber" min="..." max="..." */
:out-of-range { ... }

/* Стилизация placeholder в состоянии ПОКОЯ */
/* Стилизация placeholder в состоянии ВВОДА */
::placeholder { ... }
#input-id::placeholder {...}
#input-id[placeholder] {...} 
```

***

## Приоритетность (варианты стилизации)

```html
<!-- I место - Инлайновые стили (Самые приоритетные) -->
<p style="color: red;">...</p> 

<!-- II место - Внутри тега style -->
<style>
  p {color: red;}
</style> 

<!-- III место - Через id -->
<p id="name">...</p>

<!-- IV место - Через классы -->
<p class="name">...</p>

<!-- V место - Селекторы тэгов -->
<p>...</p>

<!-- VI место - Порядок в css-коде -->
p { color: red; }
p { color: green; }
```

### Вычисление cпецифичности

<img src="../../../../img/css/tags-specific.png" width="300px" alt="tags-specific.png" />

Чем больше специфичность, тем сильнее влияние. При равной специфичности играет роль порядок в коде, чем ниже, тем приоритетнее

***

## Наследование

### Наследуемые свойства

```
line-height;
color;
font-size, font-family, font-style, font-weight;
text-transform, text-align, text-indent;
letter-spacing, white-space, word-spacing, direction;
list-style, visibilyty, cursor, border-collapse;
```

### Ненаследуемые свойства

```
background;
position;
height, width;
margin, padding;
```

### Управление наследованием
```
initial - по умолчанию
unset  - если наследуется, то как у родителя, если нет - то initial
inherit - принудительно наследовать у родителя
```

***

## Переменные
### CSS-переменные

```css
/* Объявление переменных */
:root {
  --my-custom-color: tomato;
  --my-custom-size: 16px;
}

/* Применение */	
.some-class {
  color: var(--my-custom-color);
  font-size: var(--my-custom-size);
}

/* Объявление внутри с переопределение */
.some-class {
  color: var(--my-custom-color, red);
  font-size: var(--my-custom-size, 14px);
}

/* Можно использовать математические операции с цифровыми значениями 
с помощью функции calc() */
.some-class {
  font-size: calc(var(--my-custom-size)*0.5);
}
```

***

## SCSS

### Импорт и расширение

```scss
@import "scss/vars";   // файл с переменными
@import "scss/mixins"; // файл с примесями

.some-class {
  clear: left
  float: left;
}

.content-box {
  @extend .some-class; // расширить класс
  color: $base-color;
  border: 1px solid red;
}
```

### Переменные

```scss
$navy: #1d365d;

.class { color: $navy; }
```

### Вложенность

```scss
.super-class-name {
  color: #fff;

  a {
    text-decoration: none;

    span { font-size: 1em; }
  }
}
```

### Шорткат селектора (&)

```scss
// & - текущий селектор
.super-button {
  &__text { font-size: $font-size; }
  &--red  { color: red; }
  &--blue { color: blue; }
  &:hover { ... }
  &:active { ... }
  & span { ... }
  &[disabled] { ... }
  &.some-class { ... }
}
```

### Мат. операции

```scss
padding-top: 10px + 20;     // = 30px
padding-bottom: 100px - 50; // = 50px
font-size: 2em * 2;         // = 4em
left: 50% / 2;              // = 25%
rgb(10, 10, 10) + 10;       // rgb(20, 20, 20)

// встроенные функции
ceil((16px + 2cm) / 2) - округ. в большую ст.
floor((16px + 2cm) / 2) - округ. в меньшую ст.
round((16px + 2cm) / 2) - округ. в ближ. ст.

```
### Миксины

```scss
/* объявление примеси */
@mixin white { color: white; }

/* применение примеси */
.text { @include white; }

// Примесь с параметром
@mixin margin(@value) {
  margin-top: @value;
  margin-bottom: @value;
}

// Примесь с несколькими параметрами
@mixin offset(@padding; @margin) {
  padding: @padding;
  margin: @margin;
}

.block1 {
  @include margin(10px);
}

.block2 {
  @include offset(5px; 10px);
}
```
