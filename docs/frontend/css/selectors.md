---
title: Селекторы / SCSS / БЭМ
sidebar_position: 0
---

## Синтаксис css

```css
селектор {
  свойство1: значение;
  свойство2: значение;
  свойство3: значение;
}
```

## Виды селекторов

КЛАССЫ и ID не могут начинаться с цифры! ID только один на странице или во всем проекте!

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
  &__text { font-size: $font-size; } // .super-button__text
  &--red  { color: red; } // .super-button--red
  &--blue { color: blue; } // .super-button--blue
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

***

## БЭМ

Методология по наименованию css-классов относительно принадлежности по сложенности и уникальности.

Селекторы по БЭМ: 
- **Блок** — независимый элемент страницы с собственным смыслом.
- **Элемент** — составная часть блока, имеющая смысл только внутри блока.
- **Модификатор** — модификация внешнего вида или поведения блока (или элемента).

```html
<div class="block">
  <div class="block__element"></div>
  <div class="block__element--big"></div>
  <div class="block__element--red"></div>
</div>
```

### БЛОК

1. Имя класса должно отвечать на вопрос «Зачем нужен этот блок?» (а не описывать его внешний вид).
2. Сложные блоки собираем из простых. Только если нужный блок нельзя собрать из уже готовых (или получить модификацией готовых), создаём новый блок.
3. Блок независим от окружения (может быть размещён в любой части страницы и не сломается при этом).
4. У разных блоков не должно быть общих классов (и в CSS — не группируем общие правила, а копируем их). Примеры: «шапка» сайта, кнопка, главная навигация, пагинация, запись в блоге, блок товара в списке товаров.
5. Блоки внутри блоков - обычное дело, селектор у нового блока может не описывать вложенность

### ЭЛЕМЕНТ

1. Это часть блока, которая вне этого блока не имеет смысла и не может быть использована.
2. CSS-класс элемента формируется так: класс-блока__класс-элемента
3. Могут отсутствовать (часть элементов не являются обязательными, в блоке может не быть элементов).
4. Примеры: пункты основной навигации, заголовочная часть записи в блоге, ссылка пагинации. Нет, тольно внутри родителя — это элемент.
5. Частая ошибка: в имени элемента пишут два сегмента __. Не надо так.
```html
<!-- Неправильно -->
<div class="block__element1__element2"> 

<!-- Праильно -->
<div class="block__element1"> 
<div class="block__element2"> 
```
6. В БЭМ плоская структура Блок → Элемент, максимально независимая от разметки.

### МОДИФИКАТОР

1. Дополнительный класс, изменяющий внешний вид блока (или элемента, если добавлен к элементу).
2. CSS-класс модификатора формируется так: класс-блока--название-модификатора.
3. Даёт возможность блокам выглядеть по-разному на разных страницах или в разных частях страницы.
4. Классы-модификаторы не используются без тех классов, которые они модифицируют.
5. Пример правильного нейминга:
```html
<!-- Неправильно -->
<div class="header--big"> 

<!-- Праильно -->
<div class="header header--big">
```
6. У одного блока (элемента) может быть несколько модификаторов.
7. Можно модифицировать элементы от модификатора блока (это делает код неочевидным!).
8. Избегайте модифицировать вложенные блоки от модификатора блока-родителя.

### Применение в SCSS

```scss
.block {
  &__element {
    &--modifier { ... }
  }
}
```