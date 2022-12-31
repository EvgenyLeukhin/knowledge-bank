---
title: Фон / Границы / Тени
sidebar_position: 3
---

## Фоновый цвет и изображения

Допускаются множественные свойства через запятую.

```css
div {
  /* Фон цветом */
  background-color: red;

  /* Фон изображением */
  background-image: 'url(images/some-image.png)';
  background-image: 'url(images/some-image1.png), url(images/some-image2.png)';

  /* Повтор фонового изображения - для паттернов */
  background-repeat: no-repeat | repeat | repeat-x | repeat-y | round | space;

  /* Позиция фонового изображения (раньше использовали для спрайтов) */
  background-position: auto auto | 0 0 | 50% 50% | left bottom;

  /* Размер фонового изображения */
  background-size: 50px | 50px 100px | 50px auto | 50% 50% | contain | cover;

  /* Прокрутка фонового изображения */
  background-attachment: scroll* | fixed;

  /* Область отображения фонового изображения (Взаимодействие padding, border и background-image) */
  background-origin: padding-box* | content-box | border-box;
  /* padding-box - по ум* (рамка "отодвигает" фон), на padding не реагирует; */
  /* content-box - если задан padding, то фон реагирует на него и будет двигаться не от границы блока, а от внутренней границы border; */
  /* border-box - фон "залезает" под border, на padding не реагирует; */

  /* Обрезка фонового изображения */
  background-clip: border-box* | cotent-box | padding-box;
  /* border-box - по ум* (без обрезания); */
  /* cotent-box - обрезает фон по краю содержимого (весь фон, который "не влез" в контейнер будет обрезан); */
  /* padding-box - обрезает фон по внутреннему краю border (если фон "влез" в border как при background-origin: border-box, то край фона будет обрезан по рамке); */

  /* Краткая запись */
  background: [bc] [bi] [br] [bp] [ba];
  [bc] — background-color;
  [bi] — background-image;
  [br] — background-repeat;
  [bp] — background-position;
  [ba] — background-attachment;
}
```

***

## Градиент

### Линейный

<div style={{ height: '100px', background: 'linear-gradient(yellow, deeppink)', marginBottom: 20 }} />

```css
div {
  background-image:

    /* Направление названием - to left | to top | to right | to bottom* */
    linear-gradient(to bottom, yellow, deeppink),

    /* Направление в градусах */
    linear-gradient(45deg, white, black),

    /* многоцветный градиент */
    /* По умолчанию все цвета равномерно распределяются по ширине */
    linear-gradient(to right, red, green, blue),

    /* колорстопы в % */
    /* Если указывать явный шаг для каждого цвета, чтобы конец одного цвета был началом другого,  */
    /* то самого градиента не будет, будут только эти цвета в чистом виде */
    linear-gradient(45deg, green 30%, yellow 70%),
    linear-gradient(45deg, green 0, green 50%, yellow 50%, yellow 100%),

    /* колорстопы в px */
    linear-gradient(
      to right,
      red 0, red 15px,
      green 15px, green 30px,
      blue 30px, blue 45px
    ),

    /* повторяющийся градиент */
    repeating-linear-gradient(
      to right,
      red 0, red 15px,
      green 15px, green 30px,
      blue 30px, blue 45px
    );
}

```

***

### Радиальный

Радиальный градиент начинается в центре элемента, считается по ширине и высоте.

<div style={{ height: '100px', background: 'radial-gradient(ellipse, yellow, deeppink)', marginBottom: 20 }} />

```css
div {
  background-image: 
    radial-gradient(ellipse, yellow, deeppink),

    /* многоцветный градиент */
    radial-gradient(red, green, blue),

    /* колорстопы в % */
    radial-gradient(
      red 0, red 15%,
      green 15%, green 30%,
      blue 30%, blue 45%
    ),

    /* колорстопы в px */
    radial-gradient(
      red 0, red 15px,
      green 15px, green 30px,
      blue 30px, blue 45px
    ),

    /* повторяющийся градиент */
    repeating-radial-gradient(
      red 0, red 15px,
      green 15px, green 30px,
      blue 30px, blue 45px
    ),
}
```

#### Формы радиального градиента

- **ellipse** - эллипс (по ум*);
- **circle** - круг;
- **30% 40%** - координаты центра;
- **closest-side** - предписывает браузеру создать градиент, распространяющийся из центра только до ближайшей к центру стороне элемента;
- **closest-corner** - приводит к вычислению ширины градиента из его центра до ближайшего угла элемента;
- **farthest-side** - приводит к вычислению радиуса окружности от ее середины до самой дальней стороны элемента;
- **farthest-corner** - приводит к вычислению радиуса окружности от ее центра до самого дальнего угла элемента;


***
## Границы

### border

Участвует в box-model

```css
div {
  /* Краткая запись */
  border: 1px solid red;
  border: 1px solid; /* с currentColor (наследованный цвет) */

  /* Толщина границы */
  border-width: 1px;

  /* Стиль границы */
  border-style: solid | dotted | dashed | double | groove | ridge | inset | outset;

  /* Цвет границы */
  border-color: red | currentColor;

  /* Отдельная граница */
  border-left: 1px solid red;
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: red;

  /* Радиус скругления границ */
  border-radius: 10px | 50% | 10px 20px | 10px 20px 30px 40px;
    border-top-left-radius: 10px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 40px;

  /* Горизонтальные и вертикальные радиусы (можно искривлять фигуры) */
  border-radius: 30px / 15px;
  border-radius: 10px 20px 30px 40px / 25px 35px 45px 55px;
}
```

***

#### border-image

Применяется крайне редко.

```css
div {
  border-image: url(../css_border-image-2.png) 30% repeat;

    /* Изображение */
    border-image-source: url(../css_border-image-2.png);

    /* Нарезка изображения рамки */
    border-image-slice: 30%;

    /* Повтор изображения рамки */
    border-image-repeat: repeat | round | stretch;

  /* Ширина изображения рамки */
  border-image-width: 50px | 50px 10px 20px 5px;

  /* Отодвигает рамку за пределы элемента */
  border-image-outset: 10px | 10px 20px 30px 40px;
}
```

***

#### Треугольники из границ

```css
.triangle {
  height: 0px;
  width: 0px;
  border-width: 100px;
  border-style: solid;
  border-color: red yellow green blue;

  /* Если нужен один треугольник */
  border-color: transparent;
  border-bottom-color: green;
}
```

***
### outline

- Внешняя рамка
- Не участвует в box-model (выпадает из потока)
- Не увеличивает размеры
- Нельзя задавать свойства для сторон
- Хорошо для дебага

```css
div {
  /* Внешняя рамка */
  outline: 1px solid red;
    outline-width: 1px;
    outline-style: solid;
    outline-color: red;
}
```

***

## Тени

### Box-shadow

<div style={{ height: 50, background: 'rgb(50,50,50)', marginBottom: 20, boxShadow: '5px 5px 5px 0px cyan' }} />

```
box-shadow: inset 1px 2px 3px 4px #ccc;
  outset* (внешняя) | inset (внутренняя)
  1px - |смещение оси х|
  2px - |смещение оси y|
  3px - |радиус размытия|
  4px - |растяжение|
  #ccc - |цвет|
```

```css
div {
  box-shadow: 5px 5px 1px 2px deeppink;

  /* Множественная тень (через запятую) */
  box-shadow:
    4px 4px 1px 0 red,
    8px 8px 1px 0 green,
    12px 12px 1px 0 blue;
}
```

***

### Text-shadow

<p style={{ height: 50, color: 'darkcyan', textShadow: '5px 5px 2px gray' }}>Lorem Ipsum Dolor</p>

```
text-shadow: 1px 2px 3px #ccc;
  1px - |смещение ох| + -
  2px - |смещение оy|+ -
  3px - |радиус размытия|+
  #ccc - |цвет|
```

```css
p {
  text-shadow: 1px 2px 3px #ccc;

  /* Множественная тень (через запятую) */
  text-shadow:
    6px 6px 1px red,
    -6px -6px 1px green,
    -9px -9px 1px blue;
}
```

***

## Фильтры

<img src="../../../../img/css/photo-filters.webp" alt="photo-filters.webp" />

Работают и для img и для background-image.

```css
img {
  /* тень (хорошо с png) */
  filter: drop-shadow(10px 10px 1px deeppink);

  /* яркость */
  filter: brightness(0 - 100%);

  /* контраст */
  filter: contrast(0 - 10);

  /* обесцвечивание */
  filter: grayscale(0 - 1);

  /* сепия */
  filter: sepia(0 - 1);

  /* иеверсия цвета */
  filter: invert(0 - 1);

  /* насыщенность цвета */
  filter: saturate(0 - 1);

  /* поворот по цветовому кругу */
  filter: hue-rotate(0 - 360deg);

  /* размытие */
  filter: blur(0 - 100px);

  /* прозрачность */
  filter: opacity(0 - 1);

  /* множественный фильтр (через пробел) */
  filter: opacity(0.9) blur(2px) contrast(3) sepia(0.2);
}
```

### backdrop-filter

<img src="../../../../img/css/backdrop-filter.jpg" width="400" alt="backdrop-filter.jpg" />


Если какой-ниб полупрозрачный элемент расположен над другим элементом, у которого есть фон, то можно сделать преломление этого фона у верхнего элемента с помощью данного свойства.

```css
header {
  backdrop-filter: blur(2px);
  backdrop-filter: brightness(60%);
  backdrop-filter: contrast(40%);
  backdrop-filter: drop-shadow(4px 4px 10px blue);
  backdrop-filter: grayscale(30%);
  backdrop-filter: hue-rotate(120deg);
  backdrop-filter: invert(70%);
  backdrop-filter: opacity(20%);
  backdrop-filter: sepia(90%);
  backdrop-filter: saturate(80%);

  /* Несколько фильтров (через пробел) */
  backdrop-filter: url(filters.svg#filter) blur(4px) saturate(150%);
}
```

***

## object-fit для &lt;img&gt;

Аналог свойства background-size только для тэга &lt;img&gt;

```css
img {
  object-fit: none* | fill | cover | contain;
  object-position: 50% 50%;
}
```

- **fill** - Растягивается по контейнеру (пропорции игнорируются)
- **contain** - Растягивается по максимальной стороне в контейнере (пропорции соблюдаются)
- **cover** - Растягивается по максимальной стороне в контейнере, если осталось ещё свободное место по одной стороне, то изображение будет маштабироваться, чтобы заполнить всё пространство (пропорции соблюдаются)

