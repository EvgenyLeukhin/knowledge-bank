---
title: SVG
sidebar_position: 8
---

Векторная графика представленная в виде html-тэгов.

Аттрибут **viewBox** определяет расположение и размеры окна отображения SVG.

Значение атрибута viewBox — это набор четырёх чисел: min-x, min-y, width и height, — разделённых пробелами и/или запятой, которые задают прямоугольник в пользовательском пространстве, стороны которого определяют границы окна отображения элемента SVG.

## Окружность

```html
<svg>
  <circle cx="50%" cy="50%" r="50" fill="red" />
</svg>
```

<svg>
  <circle cx="50%" cy="50%" r="50" fill="red" />
</svg>

***

## Прямоугольник

```html
<svg>
  <rect height="100px" width="150px" x="25%" y="30" rx="15" ry="10" fill="green" />
</svg>
```

<svg>
  <rect height="100px" width="150px" x="25%" y="30" rx="15" ry="10" fill="green" />
</svg>

***

## Многоугольники

```html
<svg>
  <polygon points="230,30 200,60 260,60" fill="maroon" />
  <polygon points="70,5 90,41 136,48 103,80 111,126 70,105 29,126 36,80 5,48 48,41" fill="chocolate" />
</svg>
```

<svg>
  <polygon points="230,30 200,60 260,60" fill="maroon" />
  <polygon points="70,5 90,41 136,48 103,80 111,126 70,105 29,126 36,80 5,48 48,41" fill="chocolate" />
</svg>

***

## Эллипсы

```html
<svg>
  <ellipse rx="80" ry="20" cx="50%" cy="50%" fill="lightgray" />
</svg>
```

<svg>
  <ellipse rx="80" ry="20" cx="50%" cy="50%" fill="lightgray" />
</svg>

***

## Линии

```html
<svg>
  <line x1="50" y1="50" x2="250" y2="100" stroke="deeppink" stroke-width="6" />
</svg>
```

<svg>
  <line x1="50" y1="50" x2="250" y2="100" stroke="deeppink" stroke-width="6" />
</svg>

***

## Ломанные

```html
<svg>
  <polyline points="30,50 40,10 80,100 0,30 70,25 10,85" stroke="pink" stroke-width="4" fill="none" />
</svg>
```

<svg>
  <polyline points="30,50 40,10 80,100 0,30 70,25 10,85" stroke="pink" stroke-width="4" fill="none" />
</svg>

***

## SVG-спрайты

```html
<!-- Вставить после открывающего тэга body -->
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <symbol id="svg-icon1">
    ...svg-код1...
  </symbol>

  <symbol id="svg-icon2">
    ...svg-код2...
  </symbol>
</svg>

<!-- Использование через id symbol -->
<svg width="136.1px" height="75px" viewBox="0 0 136.1 75">
  <use xlink:href="#svg-icon1"></use>
</svg>
