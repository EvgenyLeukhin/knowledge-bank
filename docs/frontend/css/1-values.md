---
title: Величины
sidebar_position: 1
---

## Единицы измерения в CSS

### Пиксели (px)

**Пиксели** - самые распространенные. Абсолютное значение. Строго фиксированное значение размера.

```css
font-size: 16px;
width: 100px;
height: 100px;
margin-left: 10px;
```

---

### Проценты (%)

От ширины родителя. Относительное значение.

```css
width: 30%;
margin-right: 5%;
```

---

### Вьюпорт (vh, vw)

Процент ширины/высоты вьюпорта. Относительное значение.

```css
height: 100vh;
width: 100vw;
```

Часто комбинируют со встроенной css-функцией calc.

```css
width: calc(100vw - 300px);
```

---

### em и rem

Относительное значение от значения родителя (em), от базового значения (rem). Используется в основном для свойств текста font-size.

- #### em

  Относительная величина от прямого родителя. У родителя значения может стоять необязательно в **em**.

  ```css
  /* 1em = 16px */
  html { font-size: 1em; }

  /* 2em = 16px (у html font-size 16px) * 2 = 32px */
  .parent {  font-size: 2em; }

  /* 0.5em = 32px (у .parent font-size 32px) * 0.5 = 16px */
  .child { font-size: 0.5em; }
  ```

- #### rem

  Относительная величина от корневой настройки браузера. Учитывается не прямой родитель как у em, а корневой (html).

  ```css
  html { font-size: 16px; }

  /* 2rem = 16px (у html font-size 16px) * 2 = 32px */
  .parent {  font-size: 2rem; }

  /* 0.5rem = 16px (у html font-size 16px) * 0.5 = 8px */
  .child { font-size: 0.5rem; }
  ```

---

### Неиспользуемые / Редкоиспользуемые

- **in** (Дюйм)
- **cm** (Сантиметр)
- **mm** (Миллиметр)
- **pt** (Пункт)
- **vmin**, **vmax** - ???

---
---

## Цвет

### Название цвета

aqua, black, blue, fuchsia, gray, green, lime, maroon, navy, olive, orange, purple, red, silver, teal, white, yellow и др.

[Полный список цветов](https://colorscheme.ru/html-colors.html)

```css
color: maroon;
color: deeppink;
color: lightblue;
```

---

### HEX-формат (16-ый формат (0-9, a-f))

```css
color: #1198f5;
color: #62f808;
color: #0af5c6;
color: #f00; /* shortcut - #ff0000 */
```

---

### RGB-формат 0-255 (RED, GREEN, BLUE)

```css
/* 3 канала */
color: rgb(56, 140, 123);
color: rgb(30%, 40%, 50%);
color: rgb(0, 0, 0); /* чёрный */
color: rgb(255, 255, 255); /* белый */

/* 4 канала (+ альфа-канал - прозрачность) */
color: rgba(56, 140, 123, 0.85);
color: rgba(50%, 40%, 100%, 0.55);
color: rgba(145, 16, 100, 0.35);
```

---

### HSL-формат

Редкоиспользуемый формат.

1 - поворот по цветовому колесу,
2 - насыщенность,
3 - яркость

```css
/* 3 канала */
color: hsl(0, 50%, 50%);
color: hsl(0, 75%, 75%);
color: hsl(0, 100%, 50%);

/* 4 канала (+ альфа-канал - прозрачность) */
color: hsl(0, 100%, 50%, 0.5);
color: hsl(0, 100%, 50%, 0.75);
color: hsl(0, 100%, 50%, 1.0);
```

---

### Прозрачность

Изменяется от 0 до 1 или от 0 до 100%.

```css
opacity: 0; /* 1 по ум */
color: transparent;
color: rgb(56, 140, 123, 0);
color: hsl(0, 100%, 50%, 0);
```

### сurrentColor

При применении свойства color (строго или по наследованию), автоматически происходит сохранение этого значения в переменную сurrentColor, и можно записывать css-код таким образом, если нужно присвоить тоже значение цвета. При такой записи вернётся значение того же цвета, что и у color.

```css
div {
  color: #888;
  border: 1px solid currentColor;

  /*  или так  */
  border: 1px solid;
}
```
