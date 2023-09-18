---
title: Блочная модель
sidebar_position: 02
---

- [normalize.css](https://necolas.github.io/normalize.css/)
- [bootstrap reboot](https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap-reboot.min.css)
- [reset.css](https://github.com/elad2412/the-new-css-reset)

<img src="../../../../img/css/box-model.png" width="250px" alt="box-model.png" />

```Размеры элемента = размеры вложенного контента + padding + border```

Также на расположение элемента в потоке влияют внешние отступы (margin) и позиционирование.

## Ширина, высота

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

## Внутренние отступы (padding)

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

## Внешние (margin)

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

### Выравнивает фикс. блочный элемент по горизонтали

```css
margin-left: auto;
margin-right: auto;

/* shortcut */
margin: 0 auto;
margin: auto;
```

### Схлопывание маргинов

Внутренний контейнер не оттолкнется от родителя, а это свойство передатся родителю, и уже родитель оттолкнется от верхнего содержимого, при этом внутренний контейнер прижмётся к верхней границе родителя.

Как это лечится?

```css
padding-top: 1px;
border-top: 1px solid transparent;
Текст внутри родителя, также можно прозрачный
```

***

## Управление блочной моделью

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

```css
div {
  display: contents;
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

Скроллбара визуально не будет, но контент будет скроллиться.

```css
/* Hide scrollbar for Chrome, Safari and Opera */
.example::-webkit-scrollbar {
  width: 0;
  display: none;
  background: 'transparent',
}

/* Hide scrollbar for IE, Edge and Firefox */
.example {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
```

```scss
// Кастомизация скролбара
.content {
  max-height: 370px;
  overflow-y: auto;
  padding-right: 35px;

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
    background-color: $blue;
    border-radius: 8px;
  }
}
```
