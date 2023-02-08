---
title: Шрифт / Текст
sidebar_position: 2
---

- [Google Fonts](https://fonts.google.com/)
- [Вертикальный ритм текста](https://gridlover.net/try)
- [Variable Fonts](https://v-fonts.com/)

## Подключение шрифтов

### Файлы шрифтов (@font-face)

Подключение шрифтов должно быть в самом начале css-файла

```css
/* Inter-400 */
@font-face {
  font-family: "Inter";
  font-display: swap;
  font-style: normal;
  font-weight: 400;
  src: 
     /* Поиск локальных шрифтов в ОС */
    local("Inter Regular"), local("Inter-Regular"), local("Inter_Regular"),
    url("/fonts/inter/inter-regular.woff2") format("woff2"),
    url("/fonts/inter/inter-regular.woff") format("woff"),
    url("/fonts/inter/inter-regular.ttf") format("truetype");
}

/* Inter-700-i */
@font-face {
  font-family: "Inter";
  font-display: swap;
  font-style: italic;
  font-weight: 700;
  src: 
   /* Поиск локальных шрифтов в ОС */
    local("Inter Bold Italic"), local("Inter-Bold-Italic"), local("Inter_Bold_Italic"),
    url("/fonts/inter/inter-bold-i.woff2") format("woff2"),
    url("/fonts/inter/inter-bold-i.woff") format("woff"),
    url("/fonts/inter/inter-bold-i.ttf") format("truetype");
}

/* maven-pro-800 */
@font-face {
  font-family: "Maven Pro";
  font-display: swap;
  font-style: normal;
  font-weight: 800;
  /* Поиск локальных шрифтов в ОС */
  src: local("Maven Pro ExtraBold"), local("Maven-Pro-ExtraBold"),
    local("Maven_Pro_ExtraBold"), local("Maven Pro Extra Bold"),
    local("Maven-Pro-Extra-Bold"), local("Maven_Pro_Extra_Bold"),
    url("/fonts/maven-pro/800/maven-pro-800.woff2") format("woff2"),
    url("/fonts/maven-pro/800/maven-pro-800.woff") format("woff"),
    url("/fonts/maven-pro/800/maven-pro-800.ttf") format("truetype");
}
```

Варианты свойства **font-display** (Отображение шрифта при загрузке): 

- **auto** — поведение браузера по умолчанию, обычно это то же самое, что и block.
- **block** — ожидание шрифта в течение трёх секунд и бесконечный период для замены на подгружаемый шрифт.
- **swap** — мнговенная отрисовка подменного шрифта и бесконечный период для замены на подгружаемый шрифт.
- **fallback** — почти мнговенная отрисовка подменного шрифта (задержка около 100 мс) и короткий период для замены на подгружаемый шрифт (около трёх секунд).
- **optional** — почти мнговенная отрисовка подменного шрифта (задержка около 100 мс) и нулевой период для замены на подгружаемый шрифт.

***

### Системные шрифты (Fonts reboot)

```css
body {
  font-family: 
    /* Cross-platform generic font family (default user interface font) */
    system-ui,

    /* Safari for macOS and iOS (San Francisco) */
    -apple-system,

    /* Windows */
    "Segoe UI",

    /* Android */
    Roboto,

    /* Basic web fallback */
    "Helvetica Neue", Arial,

    /* Linux */
    "Noto Sans",
    "Liberation Sans",

    /* Sans serif fallback */
    sans-serif,

    /* Emoji fonts */
    "Apple Color Emoji", 
    "Segoe UI Emoji", 
    "Segoe UI Symbol", 
    "Noto Color Emoji";
}
```

***

### Google Fonts (Веб-шрифт)

```html
<!-- 1 вариант - Подключение внутри тега <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">

<!-- 2 вариант - Подключение внутри css -->
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap');
</style>
```

```css
/* Использование */
p { font-family: 'Roboto', sans-serif; }
```

***

## Свойства для текста

### Стилизация

```css
p {
  /* Цвет */
  color: black | #000000 | rgb(0,0,0) | hsl(0, 50%, 50%);

  /* Размер */
  font-size: 16px | 2em | 200% | 1rem | 10vw;

  /* Высота строки (Интерльяж) */
  line-height: 22px | 2.5em | 1.5rem | 120% | 1.3;

  /* Семейство шрифтов */
  font-family: 'Inter', sans-serif | serif | monospace; 

  /* Стиль шрифта */
  font-style: normal | italic;

  /* Толщина начертания (жирность, вес) */
  font-weight: normal | bold | 100 ... 900 | lighter | bolder;

  /* Подчеркивание, зачеркивание, цвет подчеркивания*/
  text-decoration: underline | line-through | overline | none;
  text-decoration-color: red;

  /* Регистр символов (capitalize - каждое слово с заглавной) */
  text-transform: lowercase | uppercase | capitalize | none;

  /* Расстояние между буквами (Трекинг) */
  letter-spacing: 1px;

  /* Расстояние между словами */
  word-spacing: 0.5px;

  /* Отступ первой строки в абзаце */
  text-indent: 25px;

  /* Вариант отображения шрифта */
  /* Можно сделать, чтобы прописыне выглядили как заглавные */
  font-variant: normal | small-caps;
}
```

***

### Выравнивание и направление

```css
p {
  /* Выравнивание текста по гор. ((для контейнеров)) */
  text-align: left | center | right | justify;

  /* Выравнивание последней строки в параграфе */
  text-align-last: left | center | right;

  /* Выравнивание текста по вер. (для элементов) */
  vertical-align: top | middle | bottom | baseline;

  /* Направление текста по горизонтали (слева-направо по умолчанию) */
  direction: lrt | rtl;
  unicode-bidi: bidi-override;

  /* Направление текста по вертикали */
  writing-mode: horizontal-tb | vertical-rl | vertical-lr;
}
```

***

### Переносы и переполнение


```css
p {
  /* Управление пробелами */
  white-space: normal | nowrap | pre | pre-wrap;
  /* normal - режим по умолчанию */
  /* nowrap - без переносов, весь текст одной строкой; */
  /* pre - сохраняет все пробелы как написано в коде (Аналог <pre>); */
  /* pre-wrap - так же как и pre, но добавляется перенос строки, если текст не помещается в контейнер; */

  /* Управление переносами неразрывных символов */
  /* Если слово сильно длинное и не помещается в контейнер */
  word-wrap: normal | break-word;
  word-break: normal | break-word;
  /* normal - переносится по пробелам. Будет гор. overlow текста */
  /* break-word - переносится, если не помещается в контейнер; */

  /* Переполнение текста */
  text-overflow: clip | ellipsis;
}
```

***

### Пример text-overflow

Можно сделать только при условии, что текст будет в одну строку без переносов. 

```css
p {
  white-space: nowrap; /* Запрещаем перенос строк */
  overflow: hidden; /* Запрещаем вываливание текста из контейнера */
  text-overflow: ellipsis; /* Добавляем ... */
}
```

<p 
  style={{ 
    textOverflow: 'ellipsis', 
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    border: '1px solid green',
  }}
>
  lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. 
</p>

***

### Текст градиентом

<p 
  style={{ 
    color: 'transparent', 
    '-webkit-background-clip': 'text',
    backgroundImage: 'linear-gradient(to bottom, #f68a12, #eff20c)',
  }}
>
  lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. 
</p>

```css
p {
  color: transparent;
  background-image: 'linear-gradient(to bottom, #f68a12, #eff20c)',
  -webkit-background-clip: text;
}
```

### Текст колонками

<p 
  style={{ 
    columnCount: 3, 
    columnWidth: '200px',
    columnGap: '15px',
  }}
>
  lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. 
</p>

```css
p {
  column-count: 3;
  column-width: 200px;

  /* Краткая запись */
  columns: 200px 3;

  /* Расстояние между колонками */
  column-gap: 15px;
}
```

***

## Вариации font-weight

```css
p {
  /* Thin */
  font-weight: 100;

  /* Extra light */
  font-weight: 200;

  /* Light */
  font-weight: 300;

  /* Regular (Normal) */
  font-weight: 400;

  /* Medium */
  font-weight: 500;

  /* SemiBold */
  font-weight: 600;

  /* Bold */
  font-weight: 700;

  /* ExtraBold */
  font-weight: 800;

  /* Black */
  font-weight: 900;
}
```

***

## Вариации font-size

Используется редко 

```css
p {
  font-size: xx-small (9px);
  font-size: x-small (10px);
  font-size: small (13px);
  font-size: medium (16px);
  font-size: large (18px);
  font-size: x-large (24px);
  font-size: xx-large (32px);
  font-size: smaller; /* (на шаг ниже) */
  font-size: larger; /* (на шаг выше) */
}
```

***

## Высота строки

<img src="../../../../img/css/line-height.jpg" width="450" alt="line-height.jpg" />
