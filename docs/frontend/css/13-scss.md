---
title: CSS-переменные / SCSS
sidebar_position: 13
---

## CSS-переменные

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

---

## SCSS

- [Official Docs](https://sass-scss.ru/)

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
div {
  padding-top: 10px + 20;     // = 30px
  padding-bottom: 100px - 50; // = 50px
  font-size: 2em * 2;         // = 4em
  left: 50% / 2;              // = 25%
  rgb(10, 10, 10) + 10;       // rgb(20, 20, 20)

  // встроенные функции
  ceil((16px + 2cm) / 2)      // округ. в большую ст.
  floor((16px + 2cm) / 2)     // округ. в меньшую ст.
  round((16px + 2cm) / 2)     // округ. в ближ. ст.
}
```

### Цветовые функции

```scss
div {
  // цвет поверн. от красного на 90° по чаc.
  color: spin(red, 90);

  // цвет на 45° от #f0f против чаc.
  border-color: spin(#f0f, -45);

  // светлее red на 50%
  color: lighten(red, 50%);

  // темнее blue на 25%
  color: darken(blue, 25%);

  // green насыщеннее на 20%
  color: saturate(green, 20%);

  // blue бледнее на 50%
  color: desaturate(blue, 50%);

  // @color прозрачнее на 50%
  color: fade(@color, 50%);

  // SASS: $color прозрачнее на 50%
  color: rgba($color, 0.5);
}
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

#### Пример миксинов для адаптивности

```scss
// BREAKPOINTS (useWindowSize - используются тоже эти)
//                  DESKTOP [1201 - 1920] --> 1920 макет
$laptop: 1200px; // LAPTOP  [1024 - 1200] --> 1024 макет 
$tablet: 1023px; // TABLET  [768 - 1023]  --> 768 макет
$mobile: 767px;  // MOBILE  [0 - 767]     --> 414 макет

@mixin laptop {
  @media screen and (max-width: $laptop) {
    @content;
  }
}

@mixin tablet {
  @media screen and (max-width: $tablet) {
    @content;
  }
}

@mixin mobile {
  @media screen and (max-width: $mobile) {
    @content;
  }
}
```

---

#### customScrollBar

```scss
@mixin customScrollBar($color) {
  // scrollbar track width
  &::-webkit-scrollbar {
    width: 4px;
  }

  // scrollbar track background (полоска)
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  // scrollbar thumb (бегунок)
  &::-webkit-scrollbar-thumb {
    background-color: $color;
    border-radius: 8px;
  }
}
```
