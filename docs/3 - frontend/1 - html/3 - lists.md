---
title: Списки
sidebar_position: 3
---

## Ненумерованный

```html
<ul type="square">
  <li>Пункт №1</li>
  <li>Пункт №2</li>
  <li type="circle">Пункт №3</li>
  <li type="disc">Пункт №4</li>
</ul>
```

<ul type="square">
  <li>Пункт №1</li>
  <li>Пункт №2</li>
  <li type="circle">Пункт №3</li>
  <li type="disc">Пункт №4</li>
</ul>

---

## Нумерованный

**I** - большие римские, **i** - маленькие римские, **a** - мал. буквы, **А** - большие буквы

```html
<ol start="0" type="I">
  <li>Пункт №1</li>
  <li>Пункт №2</li>
  <li>Пункт №3</li>
</ol>
```

<ol start="0" type="I">
  <li>Пункт №1</li>
  <li>Пункт №2</li>
  <li>Пункт №3</li>
</ol>

---

## Многоуровневый

```html
<ul>
  <li>Пункт №1</li>
  <li>Пункт №2</li>
  <li>
    Пункт №3
    <ul>
      <li>Пункт №3.1</li>
      <li>Пункт №3.2</li>
      <li>
        Пункт №3.3
        <ol type="a">
          <li>Пункт №3.3.1</li>
          <li>Пункт №3.3.2</li>
        </ol>
      </li>
    </ul>
  </li>
  <li>Пункт №4</li>
</ul>
```

<ul>
  <li>Пункт №1</li>
  <li>Пункт №2</li>
  <li>
    Пункт №3
    <ul>
      <li>Пункт №3.1</li>
      <li>Пункт №3.2</li>
      <li>
        Пункт №3.3
        <ol type="a">
          <li>Пункт №3.3.1</li>
          <li>Пункт №3.3.2</li>
        </ol>
      </li>
    </ul>
  </li>
  <li>Пункт №4</li>
</ul>

---

## Список определений

```html
<dl>
  <dt>Термин №1</dt>
  <dd>Определение №1</dd>
  <dt>Термин №2</dt>
  <dd>Определение №2</dd>
  <dt>Термин №3</dt>
  <dd>Определение №3</dd>
</dl>
```

<dl>
  <dt>Термин №1</dt>
  <dd>Определение №1</dd>
  <dt>Термин №2</dt>
  <dd>Определение №2</dd>
  <dt>Термин №3</dt>
  <dd>Определение №3</dd>
</dl>

---

## Раскрывающийся список

```html
<details>
  <summary>Раскройте список</summary>
  <p>текст №1</p>
  <p>текст №2</p>
  <p>текст №3</p>
  <p>текст №4</p>
  <p>текст №5</p>
</details>
```

<details>
  <summary>Раскройте список </summary>
  <p>текст №1</p>
  <p>текст №2</p>
  <p>текст №3</p>
  <p>текст №4</p>
  <p>текст №5</p>
</details>

---

## Маркеры

```html
<ul style="list-style-type: disc;">
  <!-- По умолчанию -->
  <li>Обычный маркер</li>
</ul>

<ul style="list-style-type: square;">
  <li>Квадратный маркер</li>
</ul>

<ul style="list-style-type: circle;">
  <li>Круглый маркер</li>
</ul>

<!-- Нумерованные списки с различными стилями -->
<ol style="list-style-type: decimal;">
  <!-- 1, 2, 3 -->
  <li>Десятичные числа</li>
</ol>

<ol style="list-style-type: lower-alpha;">
  <!-- a, b, c -->
  <li>Строчные буквы</li>
</ol>

<ol style="list-style-type: upper-roman;">
  <!-- I, II, III -->
  <li>Римские цифры</li>
</ol>

<!-- Кастомные маркеры -->
<ul style="list-style-type: '✓ ';">
  <li>Выполнено</li>
  <li>Выполнено</li>
</ul>
```

---

## Изменение порядка

```html
<!-- Атрибут reversed для обратной нумерации -->
<ol reversed>
  <li>Третий пункт</li>
  <li>Второй пункт</li>
  <li>Первый пункт</li>
</ol>

<!-- Атрибут value для изменения номера -->
<ol>
  <li>Первый пункт</li>
  <li value="5">Пятый пункт (пропустили 2, 3, 4)</li>
  <li>Шестой пункт</li>
</ol>

<!-- Атрибут start с различными типами -->
<ol start="10" type="1">
  <li>Пункт 10</li>
  <li>Пункт 11</li>
</ol>
```
