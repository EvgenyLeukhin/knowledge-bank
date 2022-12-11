---
title: Величины / Box model
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

***

### Проценты (%)

От ширины родителя. Относительное значение. 

```css
width: 30%;
margin-right: 5%;
```

***

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

***

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
***

### Неиспользуемые / Редкоиспользуемые

- **in** (Дюйм)
- **cm** (Сантиметр) 
- **mm** (Миллиметр) 
- **pt** (Пункт)
- **vmin**, **vmax** - ???

***
***

## Цвет

### Название цвета

aqua, black, blue, fuchsia, gray, green, lime, maroon, navy, olive, orange, purple, red, silver, teal, white, yellow и др.

[Полный список цветов](https://colorscheme.ru/html-colors.html)

```css
color: maroon;
color: deeppink;
color: lightblue;
```

***

### HEX-формат (16-ый формат (0-9, a-f))

```css
color: #1198f5;
color: #62f808;
color: #0af5c6;
color: #f00; /* shortcut - #ff0000 */
```

***

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

***

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

***

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


***
***

## Box model

<img src="../../../../img/css/box-model.png" width="250px" alt="box-model.png" />

```Размеры элемента = размеры вложенного контента + padding + border```

Также на расположение элемента в потоке влияют внешние отступы (margin) и позиционирование.

### Ширина, высота

Если у элемента есть вложенный контент (например текста), то он будет отталивать дочерние элементы своими размерами.

**Высота**, минимальная и максимальная высота. По умолчанию auto.
```css
min-height: 20px;
height: 100%;
max-width: 200px;
```

**Ширина**, минимальная и максимальная ширина. По умолчанию auto.
```css
min-width: 30%;
width: 100px;
max-width: 40%;
```

***

### Внутренние отступы (padding)

Горизонтальные и вертикальные - складываются. По умолчанию 0.

```css
padding-left: 5px;
padding-top: 6px;
padding-right: 7px;
padding-bottom: 8px;

/* shortcut */
padding: 5px 6px 7px 8px;
```

```css
padding-left: 5px;
padding-top: 5px;
padding-right: 10px;
padding-bottom: 10px;

/* shortcut */
padding: 5px 10px;
```
***

### Внешние (margin)

Горизонтальные - складываются. Вертикальные - больший из двух. По умолчанию 0.

```css
margin-left: 5px;
margin-top: 6px;
margin-right: 7px;
margin-bottom: 8px;

/* shortcut */
margin: 5px 6px 7px 8px;
```

```css
margin-left: 5px;
margin-top: 5px;
margin-right: 10px;
margin-bottom: 10px;

/* shortcut */
margin: 5px 10px;
```

#### Выравнивает фикс. блочный элемент по горизонтали

```css
margin-left: auto;
margin-right: auto;

/* shortcut */
margin: 0 auto;
margin: auto;
```

#### Схлопывание маргинов

Внутренний контейнер не оттолкнется от родителя, а это свойство передатся родителю, и уже родитель оттолкнется от верхнего содержимого, при этом внутренний контейнер прижмётся к верхней границе родителя.

Как это лечится?

```css
padding-top: 1px;
border-top: 1px solid transparent;
Текст внутри родителя, также можно прозрачный
```

***

### Управление блочной моделью

По ум. стоит content-box (width и height не включает padding и border). Но это можно изменить
```css
*, *::before, *::after { box-sizing: border-box; }
```

***
***

## Блочные элементы

```html
<!-- Универсальный блочный контейнер -->
<div>BLOCK-1</div> <div>BLOCK-2</div> <div>BLOCK-3</div>
```

<div style={{ 
  height: 50,
  backgroundColor: 'maroon',
  border: '1px solid orange',
  padding: 5,
  margin: 5,
}}>BLOCK-1</div>

<div style={{ 
  height: 50,
  backgroundColor: 'maroon',
  border: '1px solid orange',
  padding: 5,
  margin: 5,
}}>BLOCK-2</div>

<div style={{ 
  height: 50,
  backgroundColor: 'maroon',
  border: '1px solid orange',
  padding: 5,
  margin: 5,
}}>BLOCK-3</div>

К блочным тэгам также относятся: &lt;html&gt;, &lt;body&gt;, &lt;section&gt;, &lt;main&gt;, &lt;nav&gt;, &lt;article&gt;, &lt;header&gt;, &lt;footer&gt;, &lt;aside&gt;, &lt;p&gt;, &lt;h1&gt; - &lt;h6&gt; и др.

```css
.box {
  display: block; /*по ум.*/
  height: 50px;
  padding: 5px;
  margin: 5px;
}
```

1. До и после блочного элемента существует перенос строки;
2. Блочным элементам можно задавать ширину, высоту, внутренние и внешние отступы;
3. Занимают всю доступную ширину по умолчанию.

### Блочные элементы применяют:

- Создание сеток страницы
- Контейнеры

***
***

## Строчные

```html
<!-- Универсальный строчный контейнер -->
<span>INLINE-1</span> <span>INLINE-2</span> <span>INLINE-3</span>
```

<span style={{ backgroundColor: 'maroon', border: '1px solid orange'}}>INLINE-1</span>
&nbsp;
<span style={{ backgroundColor: 'maroon', border: '1px solid orange'}}>INLINE-2</span>
&nbsp;
<span style={{ backgroundColor: 'maroon', border: '1px solid orange'}}>INLINE-3</span>

```css
.string {
  display: inline; /* по ум. */
  height: 50px; /* не реагируют */
  width: 50px; /* не реагируют */
  background-color: maroon; /* действует */
  border: 1px solid orange; /* действует */
  margin-top: 5px; /* не реагируют */
  margin-bottom: 5px; /* не реагируют */
  margin-left: 5px; /* действует + пробелы учитываются */
  margin-right: 5px; /* действует + пробелы учитываются */
  padding-left: 10px; /* действует */
  padding-right: 10px; /* действует */
  padding-top: 10px; /* фон увеличивается, но контент не отодвигает */
  padding-bottom: 10px; /* фон увеличивается, но контент не отодвигает */
} 
```

1. До и после строчного элемента отсутствуют переносы строки;
2. Ширина и высота строчного элемента зависит только от его содержания, задать размеры с помощью CSS нельзя (width и height не действуют);
3. Можно задавать только горизонтальные отступы.
4. Не действуют margin-top, margin-bottom.
5. padding-top и padding-bottom влияют на фон, на поток не влияют.

- Как правило, к строчным элементам свойства блочной модели не применяют (width, height, margin, padding, border)
- Для строчных элементов лучше не задавать вертикальных отступов, т.к. они ведут себя непредсказуемо.
- Границы строчных элементов полностью реагируют на padding, но вертикальный padding не отталкивает другие элементы, выпадает из потока.
- Если заFLOATить строчный элемент, то он станет БЛОЧНЫМ

### Строчные элементы применяют:

- Оформление частей текста
- Контейнеры для небольших текстовых фраз

***
***

## Инлайн-блоки

Комбинация block и inline. Уже практически не используются, их вытеснили флекс-элементы.

<div style={{ padding: 5, border: '1px solid yellow', textAlign: 'right' }}>
  <div style={{ display: 'inline-block', verticalAlign: 'middle', width: '130px', height: '100px', margin: 5, background: 'maroon' }}>INLINE-BLOCK-1</div>
  <div style={{ display: 'inline-block', verticalAlign: 'middle', width: '130px', height: '130px', margin: 5, background: 'maroon' }}>INLINE-BLOCK-2</div>
  <div style={{ display: 'inline-block', verticalAlign: 'middle', width: '130px', height: '160px', margin: 5, background: 'maroon' }}>INLINE-BLOCK-3</div>
</div>

```html
<div style="tex-alight: right">
  <div style="display: inline-block; vertical-align: middle">INLINE-BLOCK-1</div>
  <div style="display: inline-block; vertical-align: middle">INLINE-BLOCK-2</div>
  <div style="display: inline-block; vertical-align: middle">INLINE-BLOCK-3</div>
</div>
```

**ОТ СТРОЧНЫХ:**
  - выравниваются от свойства text-align родителя
  - выравниваются от собственного свойства vertical-align
  - располагаются в одну строку;
  - реагируют на гор. и верт. выравнивание;
  - ужимаются под содержимое;

**ОТ БЛОЧНЫХ:**
  - можно задавать размеры;
  - рамки и отступы;
  - можно флоатить;



- Если инлайн-блок один, то он вертикально выравнивается по своей height относительно line-height родительского контейнера, причём line-height родителя должно быть больше чем height инлайн-блока.
- Если их несколько, то они выравниваются относительно большей height отдельного инлайн-блока.
- ```vertical-align``` выравнивает не только по высоте контейнера. Это свойство выравнивает инлайн-блоки между собой, относительно самого высокого элемента СТРОЧНО
- Выравнивание inline-блоков без margin-right(3n) (Обернуть в блок и задать ему маргин-слева -20px, а у каждого инлайн-блок поставить маргин-слева 20px)

### Инлайн-блоки применяют:

- Создание групп иконок
- Элементы меню
- Контейнеры карточек товаров и прочего

***
***

## Display

По умолчанию у блочных элементов display: block, а у строчных display: inline.

```css
div {
  /* box-model */
  display: block | inline | inline-block;

  /* flex */
  display: flex | inline-flex;

  /* grid */
  display: grid;

  /* table */
  display: table | table-row | table-cell | table-caption;

  /* none - убирает элемент из DOM-дерева, как будто его никогда не было */
  display: none;

  /* убрать визуально (в потоке остается) */
  visibility: hidden;
}
```

***
***

## Скролл / Overflow

Если контент не вместился в фиксированные размеры бокса, то он будет выпадать из него и выходить из потока. Чтобы контент пролистывался можно добавить гор. или вертикальный скролл

```css
/* По ум. видимый */
overflow: visible;

/* Спрятать */
overflow: hidden | clip;

/* Автоматическое появление */
overflow: auto;

/* Появление скролла, даже когда нет overflow */
overflow: scroll;

/* Управление отдельными осями */
overflow-x: ...
overflow-y: ...

/* Предотвращение цепной прокрутки */
/* Чтобы не прокручивался еще скролл, который не в фокусе */
overscroll-behavior: auto* | contain | none | auto contain;
```

### Визуально спрятать скроллбар

```css
/* Hide scrollbar for Chrome, Safari and Opera */
.example::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.example {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
```
