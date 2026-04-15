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

---

## Прямоугольник

```html
<svg>
  <rect
    height="100px"
    width="150px"
    x="25%"
    y="30"
    rx="15"
    ry="10"
    fill="green"
  />
</svg>
```

<svg>
  <rect height="100px" width="150px" x="25%" y="30" rx="15" ry="10" fill="green" />
</svg>

---

## Многоугольники

```html
<svg>
  <polygon points="230,30 200,60 260,60" fill="maroon" />
  <polygon
    points="70,5 90,41 136,48 103,80 111,126 70,105 29,126 36,80 5,48 48,41"
    fill="chocolate"
  />
</svg>
```

<svg>
  <polygon points="230,30 200,60 260,60" fill="maroon" />
  <polygon points="70,5 90,41 136,48 103,80 111,126 70,105 29,126 36,80 5,48 48,41" fill="chocolate" />
</svg>

---

## Эллипсы

```html
<svg>
  <ellipse rx="80" ry="20" cx="50%" cy="50%" fill="lightgray" />
</svg>
```

<svg>
  <ellipse rx="80" ry="20" cx="50%" cy="50%" fill="lightgray" />
</svg>

---

## Линии

```html
<svg>
  <line x1="50" y1="50" x2="250" y2="100" stroke="deeppink" stroke-width="6" />
</svg>
```

<svg>
  <line x1="50" y1="50" x2="250" y2="100" stroke="deeppink" stroke-width="6" />
</svg>

---

## Ломанные

```html
<svg>
  <polyline
    points="30,50 40,10 80,100 0,30 70,25 10,85"
    stroke="pink"
    stroke-width="4"
    fill="none"
  />
</svg>
```

<svg>
  <polyline points="30,50 40,10 80,100 0,30 70,25 10,85" stroke="pink" stroke-width="4" fill="none" />
</svg>

---

## SVG-спрайты

```html
<!-- Вставить после открывающего тэга body -->
<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <symbol id="svg-icon1">...svg-код1...</symbol>

  <symbol id="svg-icon2">...svg-код2...</symbol>
</svg>

<!-- Использование через id symbol -->
<svg width="136.1px" height="75px" viewBox="0 0 136.1 75">
  <use xlink:href="#svg-icon1"></use>
</svg>
```

---

## Текст

```html
<!-- Простой текст -->
<svg>
  <text x="10" y="30" font-family="Arial" font-size="16" fill="black">
    Привет, SVG!
  </text>
</svg>

<!-- Текст по пути -->
<svg>
  <defs>
    <path id="textPath" d="M10 50 Q50 20 90 50" fill="none" />
  </defs>
  <text>
    <textPath href="#textPath">Текст по кривой</textPath>
  </text>
</svg>

<!-- Многострочный текст -->
<svg>
  <text x="10" y="30">
    <tspan x="10" dy="0">Первая строка</tspan>
    <tspan x="10" dy="20">Вторая строка</tspan>
  </text>
</svg>
```

---

## Viewbox

```html
<!-- Атрибуты viewBox -->
<svg viewBox="0 0 100 100">
  <!-- 100x100 область -->
  <svg viewBox="-50 -50 100 100">
    <!-- центр в 0,0 -->
    <svg viewBox="0 0 200 100"><!-- прямоугольная область --></svg>
  </svg>
</svg>
```

---

## Градиенты

```html
<!-- Линейный градиент -->
<svg>
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:red;stop-opacity:1" />
      <stop offset="100%" style="stop-color:blue;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="200" height="100" fill="url(#grad1)" />
</svg>

<!-- Радиальный градиент -->
<svg>
  <defs>
    <radialGradient id="radGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:yellow;stop-opacity:1" />
      <stop offset="100%" style="stop-color:red;stop-opacity:1" />
    </radialGradient>
  </defs>
  <circle cx="100" cy="100" r="80" fill="url(#radGrad)" />
</svg>

<!-- Узоры -->
<svg>
  <defs>
    <pattern
      id="dots"
      x="0"
      y="0"
      width="20"
      height="20"
      patternUnits="userSpaceOnUse"
    >
      <circle cx="10" cy="10" r="2" fill="blue" />
    </pattern>
  </defs>
  <rect width="200" height="100" fill="url(#dots)" />
</svg>
```

---

## Анимация

```html
<!-- Анимация движения -->
<svg>
  <circle cx="50" cy="50" r="20" fill="red">
    <animateTransform
      attributeName="transform"
      type="translate"
      values="0,0; 100,0; 100,100; 0,100; 0,0"
      dur="4s"
      repeatCount="indefinite"
    />
  </circle>
</svg>

<!-- Анимация изменения размера -->
<svg>
  <circle cx="100" cy="100" r="20" fill="blue">
    <animate
      attributeName="r"
      values="20; 50; 20"
      dur="2s"
      repeatCount="indefinite"
    />
  </circle>
</svg>

<!-- Анимация цвета -->
<svg>
  <rect width="100" height="100" fill="red">
    <animate
      attributeName="fill"
      values="red; blue; green; red"
      dur="3s"
      repeatCount="indefinite"
    />
  </rect>
</svg>
```

---

## Интерактивность

```html
<!-- Кликабельные элементы -->
<svg>
  <circle cx="100" cy="100" r="50" fill="red" onclick="alert('Круг нажат!')" />

  <rect
    x="200"
    y="50"
    width="100"
    height="100"
    fill="blue"
    onclick="changeColor(this)"
  />
</svg>

<script>
  function changeColor(element) {
    element.setAttribute('fill', 'green');
  }
</script>

<!-- Hover эффекты -->
<svg>
  <circle
    cx="100"
    cy="100"
    r="50"
    fill="red"
    onmouseover="this.setAttribute('fill', 'blue')"
    onmouseout="this.setAttribute('fill', 'red')"
  />
</svg>
```

---

## Маски

```html
<!-- Маска -->
<svg>
  <defs>
    <mask id="mask1">
      <rect width="200" height="200" fill="white" />
      <circle cx="100" cy="100" r="50" fill="black" />
    </mask>
  </defs>
  <rect width="200" height="200" fill="red" mask="url(#mask1)" />
</svg>

<!-- Клип -->
<svg>
  <defs>
    <clipPath id="clip1">
      <circle cx="100" cy="100" r="50" />
    </clipPath>
  </defs>
  <rect width="200" height="200" fill="blue" clip-path="url(#clip1)" />
</svg>
```

---

## Фильтр

```html
<!-- Размытие -->
<svg>
  <defs>
    <filter id="blur">
      <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
    </filter>
  </defs>
  <text x="10" y="50" font-size="24" filter="url(#blur)">Размытый текст</text>
</svg>

<!-- Тень -->
<svg>
  <defs>
    <filter id="shadow">
      <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="black" />
    </filter>
  </defs>
  <rect
    x="10"
    y="10"
    width="100"
    height="50"
    fill="red"
    filter="url(#shadow)"
  />
</svg>
```

---

## Символы (спрайты)

```html
<!-- Определение символа -->
<svg style="display: none;">
  <defs>
    <symbol id="star" viewBox="0 0 24 24">
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      />
    </symbol>
  </defs>
</svg>

<!-- Использование символа -->
<svg width="24" height="24">
  <use href="#star" fill="gold" />
</svg>

<!-- Символ с параметрами -->
<svg width="48" height="48">
  <use href="#star" fill="red" transform="scale(2)" />
</svg>
```
