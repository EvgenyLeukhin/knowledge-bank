---
title: Фон / Границы / Тени
sidebar_position: 3
---

## Фоновый цвет и изображенияназвания

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

***

### Радиальный

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

### border-image

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

### Треугольники из границ

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
### Outline

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

***

## Фильтры

backdrop-filter: blur(1px);

***

## object-fit для &lt;img&gt;

```css
img {
  object-fit: none* | fill | cover | contain;
}
```

- **fill** - Растягивается по контейнеру (пропорции игнорируются)
- **contain** - Растягивается по максимальной стороне в контейнере (пропорции соблюдаются)
- **cover** - Растягивается по максимальной стороне в контейнере, если осталось ещё свободное место по одной стороне, то изображение будет маштабироваться, чтобы заполнить всё пространство (пропорции соблюдаются)

