---
title: CSS-Grid
sidebar_position: 6
---

export const GridParent = ({ style, children }) => (
  <div
    style={{
      padding: 10,
      minHeight: '30vh',
      border: '1px solid gray',
      margin: '0 auto',
      display: 'grid',
      ...style,
    }}>
    {children}
  </div>
);

export const GridChild = ({ style, children }) => (
  <div
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'maroon',
      border: '1px solid #ccc',
      color: 'white',
      fontSize: 16,
      ...style,
  }}>
    {children}
  </div>
);

[CCS-Grid guide](https://doka.guide/css/grid-guide/)

Самый современный, мощный, но в то же время сложный инструмент для вёрстки в текущее время. Grid - сетка.

- **Flexbox** - одномерные макеты
- **Grid** - двумерные макеты (можно управлять и колонками и строками одновременно)

<img src="../../../../img/css/grid.png" alt="grid.png" width="600" />

## Grid-контейнер

```html
<div class="grid-container">
  <div class="child child-1">1</div>
  ...
  <div class="child child-8">8</div>
</div>
```

```scss
.grid-container {
  display: grid | inline-grid;
}
```

<GridParent>
  <GridChild>1</GridChild>
  <GridChild>2</GridChild>
  <GridChild>3</GridChild>
  <GridChild>4</GridChild>
  <GridChild>5</GridChild>
  <GridChild>6</GridChild>
  <GridChild>7</GridChild>
  <GridChild>8</GridChild>
</GridParent>

По умолчанию только при ```display: grid``` у родителя все дочерние элементы будут располагаться друг по другом и равномерно занимать всю высоту контейнера.

***

### grid-auto-flow

Управление грид-потоком. Как будут отображаться грид-потомки изначально? Как строки* или как колонки

```scss
.grid-container {
  display: grid;
  grid-auto-flow: column;
  // grid-auto-flow: row* | column | dense;

  // 1 м 2 колонка будут шириной 50px и 100px,
  // остальные - равномерно распределяться по ширине контейнера
  grid-template-columns: 50px 100px;
}
```

<GridParent style={{ gridAutoFlow: 'column', gridTemplateColumns: '50px 70px' }}>
  <GridChild>1</GridChild>
  <GridChild>2</GridChild>
  <GridChild>3</GridChild>
  <GridChild>4</GridChild>
  <GridChild>5</GridChild>
  <GridChild>6</GridChild>
  <GridChild>7</GridChild>
  <GridChild>8</GridChild>
  <GridChild>9</GridChild>
  <GridChild>10</GridChild>
</GridParent>

***

## Колонки

### grid-template-columns

Свойства, задающие размеры и количество колонок. Дочерние элементы автоматически группируются в эти колонки (переносятся в строки - autobreak), если их много.

```scss
.grid-container {
  display: grid;
  grid-template-columns: 50% 50%;
}
```

<GridParent style={{ gridTemplateColumns: '50% 50%' }}>
  <GridChild>1</GridChild>
  <GridChild>2</GridChild>
  <GridChild>3</GridChild>
  <GridChild>4</GridChild>
  <GridChild>5</GridChild>
  <GridChild>6</GridChild>
  <GridChild>7</GridChild>
  <GridChild>8</GridChild>
</GridParent>

***

Можно использовать новую относительную grid-единицу - фракцию (fr). Аналог коэф. flex-grow.

```scss
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

<GridParent style={{ gridTemplateColumns: '1fr 1fr' }}>
  <GridChild>1</GridChild>
  <GridChild>2</GridChild>
  <GridChild>3</GridChild>
  <GridChild>4</GridChild>
  <GridChild>5</GridChild>
  <GridChild>6</GridChild>
  <GridChild>7</GridChild>
  <GridChild>8</GridChild>
</GridParent>

***

```scss
.grid-container {
  display: grid;
  grid-template-columns: 2fr 100px 1fr;
}
```

<GridParent style={{ gridTemplateColumns: '2fr 100px 1fr' }}>
  <GridChild>1</GridChild>
  <GridChild>2</GridChild>
  <GridChild>3</GridChild>
  <GridChild>4</GridChild>
  <GridChild>5</GridChild>
  <GridChild>6</GridChild>
  <GridChild>7</GridChild>
  <GridChild>8</GridChild>
  <GridChild>9</GridChild>
</GridParent>

***

Если нужны одинаковые колонки или ряды, то можно воспользоваться функцией **repeat()**. Будет создано 3 колонки по 250 пикселей.
Фиксированные размеры колонок неадаптивны (Можно проверить ресайзом).


```scss
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 250px);

  // grid-template-columns: 2fr 1fr 2fr 1fr === repeat(2, 2fr 1fr);
}
```

<GridParent style={{ gridTemplateColumns: 'repeat(3, 250px' }}>
  <GridChild>1</GridChild>
  <GridChild>2</GridChild>
  <GridChild>3</GridChild>
  <GridChild>4</GridChild>
  <GridChild>5</GridChild>
  <GridChild>6</GridChild>
  <GridChild>7</GridChild>
  <GridChild>8</GridChild>
  <GridChild>9</GridChild>
</GridParent>

***

Лучше использовать адаптивные значения в фракциях.

```scss
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

<GridParent style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
  <GridChild>1</GridChild>
  <GridChild>2</GridChild>
  <GridChild>3</GridChild>
  <GridChild>4</GridChild>
  <GridChild>5</GridChild>
  <GridChild>6</GridChild>
  <GridChild>7</GridChild>
  <GridChild>8</GridChild>
  <GridChild>9</GridChild>
</GridParent>

***

### grid-auto-columns

При ```grid-auto-flow: column;``` можно упоавлять поведением ширины колонок, которым явно не задана ширина через ```grid-template-columns```.

Если колонки будут занимать не всё пространство внутри грид-контейнера, то будет свободное место, и напротив если будут занимать большее место, то буду выпадать из родителя.

```scss
.grid-container {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 50px 100px;
  grid-auto-columns: 20px;
}
```

<GridParent style={{ gridAutoFlow: 'column', gridTemplateColumns: '50px 70px', gridAutoColumns: '20px' }}>
  <GridChild>1</GridChild>
  <GridChild>2</GridChild>
  <GridChild>3</GridChild>
  <GridChild>4</GridChild>
  <GridChild>5</GridChild>
  <GridChild>6</GridChild>
  <GridChild>7</GridChild>
  <GridChild>8</GridChild>
  <GridChild>9</GridChild>
  <GridChild>10</GridChild>
</GridParent>

***

## Строки

### grid-template-rows

Свойства, задающие размеры и количество рядов. По ум* строки равномерно распределяются по высоте контейнера.

```scss
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  // 1-ая строка будет высотой 50px, 2-ая - 100px, 
  // остальные - равномерно распределяться по ширине контейнера
  grid-template-rows: 50px 100px;
}
```

<GridParent style={{ gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: '50px 100px' }}>
  <GridChild>1</GridChild>
  <GridChild>2</GridChild>
  <GridChild>3</GridChild>
  <GridChild>4</GridChild>
  <GridChild>5</GridChild>
  <GridChild>6</GridChild>
  <GridChild>7</GridChild>
  <GridChild>8</GridChild>
  <GridChild>9</GridChild>
  <GridChild>10</GridChild>
</GridParent>

***

```scss
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  // 1-3 строки будут высотой 20px,
  // остальные - равномерно распределяться по ширине контейнера
  grid-template-rows: repeat(3, 20px);
}
```

<GridParent style={{ gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(3, 20px)' }}>
  <GridChild>1</GridChild>
  <GridChild>2</GridChild>
  <GridChild>3</GridChild>
  <GridChild>4</GridChild>
  <GridChild>5</GridChild>
  <GridChild>6</GridChild>
  <GridChild>7</GridChild>
  <GridChild>8</GridChild>
  <GridChild>9</GridChild>
  <GridChild>10</GridChild>
</GridParent>

***

### grid-auto-rows

Строкам, которым явно не задана высота через ```grid-template-rows```, можно задавать явную высоту через свойство ```grid-auto-rows```.

```scss
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 20px);

  // у незаданных строк будет фикс. высота 40px (даже контент не будет менять высоту)
  // чтобы задать мин. высоту можно использовать функцию minmax()
  grid-auto-rows: 40px | minmax(40px, auto);
}
```

<GridParent style={{ gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 20px)', gridAutoRows: '40px' }}>
  <GridChild>1</GridChild>
  <GridChild>2</GridChild>
  <GridChild>3</GridChild>
  <GridChild>4</GridChild>
  <GridChild>5</GridChild>
  <GridChild>6</GridChild>
  <GridChild>7</GridChild>
  <GridChild>8</GridChild>
  <GridChild>9</GridChild>
  <GridChild>10</GridChild>
</GridParent>

***

## Отступы

### grid-gap, column-gap, row-gap

```scss
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  // Расстояние между колонками 30px
  column-gap: 30px;

  // Расстояние между строками 30px
  row-gap: 30px;

  // Шорткат - Расстояние между строками и колонками 30px
  grid-gap: 30px;
}
```

<GridParent style={{ gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '30px' }}>
  <GridChild>1</GridChild>
  <GridChild>2</GridChild>
  <GridChild>3</GridChild>
  <GridChild>4</GridChild>
  <GridChild>5</GridChild>
  <GridChild>6</GridChild>
  <GridChild>7</GridChild>
  <GridChild>8</GridChild>
  <GridChild>9</GridChild>
  <GridChild>10</GridChild>
</GridParent>

***

## Выравнивание грид-потомков

### align-items 

Выравнивание grid-элемента по вертикали. Будет ужиматься по контенту, если явно не задана высота.

```scss
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: start;
  // align-items: stretch* | start | center | end;
}
```

<GridParent style={{ gridTemplateColumns: 'repeat(3, 1fr)', alignItems: 'start' }}>
  <GridChild>1</GridChild>
  <GridChild>2</GridChild>
  <GridChild>3</GridChild>
  <GridChild>4</GridChild>
  <GridChild>5</GridChild>
  <GridChild>6</GridChild>
  <GridChild>7</GridChild>
  <GridChild>8</GridChild>
  <GridChild>9</GridChild>
</GridParent>


***

### justify-items

Выравнивание grid-элемента по горизонтали. Будет ужиматься по контенту, если явно не задана ширина.

```scss
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: start;
  // justify-items: stretch* | start | center | end;
}
```

<GridParent style={{ gridTemplateColumns: 'repeat(3, 1fr)', justifyItems: 'start'  }}>
  <GridChild>1</GridChild>
  <GridChild>2</GridChild>
  <GridChild>3</GridChild>
  <GridChild>4</GridChild>
  <GridChild>5</GridChild>
  <GridChild>6</GridChild>
  <GridChild>7</GridChild>
  <GridChild>8</GridChild>
  <GridChild>9</GridChild>
</GridParent>

***

### place-items

```scss
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: start start;
}
```

<GridParent style={{ gridTemplateColumns: 'repeat(3, 1fr)', placeItems: 'start start' }}>
  <GridChild>1</GridChild>
  <GridChild>2</GridChild>
  <GridChild>3</GridChild>
  <GridChild>4</GridChild>
  <GridChild>5</GridChild>
  <GridChild>6</GridChild>
  <GridChild>7</GridChild>
  <GridChild>8</GridChild>
  <GridChild>9</GridChild>
</GridParent>

***

## Выравнивание отдельного грид-потомка

### align-self

Выравнивание grid-элемента по вертикали. Будет ужиматься по контенту, если явно не задана высота.

```scss
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.grid-child {
  align-self: center;

  // align-self: stretch* | start | center | end;
}
```

<GridParent style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
  <GridChild>1</GridChild>
  <GridChild>2</GridChild>
  <GridChild>3</GridChild>
  <GridChild>4</GridChild>
  <GridChild>5</GridChild>
  <GridChild>6</GridChild>
  <GridChild>7</GridChild>
  <GridChild>8</GridChild>
  <GridChild style={{ background: 'deeppink', alignSelf: 'center' }}>9</GridChild>
</GridParent>

***

### justify-self

Выравнивание grid-элемента по горизлнтали. Будет ужиматься по контенту, если явно не задана ширина.

```scss
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.grid-child {
  justify-self: right;

  // justify-self: stretch* | start | center | end;
}
```

<GridParent style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
  <GridChild>1</GridChild>
  <GridChild>2</GridChild>
  <GridChild>3</GridChild>
  <GridChild>4</GridChild>
  <GridChild>5</GridChild>
  <GridChild>6</GridChild>
  <GridChild>7</GridChild>
  <GridChild>8</GridChild>
  <GridChild style={{ background: 'deeppink', justifySelf: 'center' }}>9</GridChild>
</GridParent>

***

### place-self

Шорткат для одновременного указания значений свойствам ```justify-self``` и ```align-self```.

```scss
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.grid-child {
  place-self: end end;
}
```

<GridParent style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
  <GridChild>1</GridChild>
  <GridChild>2</GridChild>
  <GridChild>3</GridChild>
  <GridChild>4</GridChild>
  <GridChild>5</GridChild>
  <GridChild>6</GridChild>
  <GridChild>7</GridChild>
  <GridChild>8</GridChild>
  <GridChild style={{ background: 'deeppink', placeSelf: 'end end' }}>9</GridChild>
</GridParent>

***
