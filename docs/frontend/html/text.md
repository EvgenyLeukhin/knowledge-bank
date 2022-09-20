---
title: Текст
sidebar_position: 1
---

## Простое форматирование

Все пробелы в html-коде считаются за один (кроме тэга &lt;pre&gt;)

```html
<h1>Заголовок 1-го уровня</h1>
<h2>Заголовок 2-го уровня</h2>
<h3>Заголовок 3-го уровня</h3>
<h4>Заголовок 4-го уровня</h4>
<h5>Заголовок 5-го уровня</h5>
<h6>Заголовок 6-го уровня</h6>
```

```html
<!-- Параграф -->
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br /> Perferendis, perspiciatis cumque. Illum sed accusantium suscipit? Distinctio, exercitationem nemo! Possimus debitis tempore nesciunt, fugit obcaecati dolores provident soluta nulla illum vero.</p>

<hr />

<!-- Блочная цитата -->
<blockquote>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, perspiciatis cumque. Illum sed accusantium suscipit? Distinctio, exercitationem nemo! Possimus debitis tempore nesciunt, fugit obcaecati dolores provident soluta nulla illum vero.</blockquote>
```

```html
<b>Жирный</b>
<i>Курсив</i>
<u>Подчеркнутый</u>
<mark>Выделенный</mark>
<s>Зачеркнутый</s>
<cite>Строчная цитата в кавычках</cite>
<q>Строчная цитата курсивом</q>
Some text<sub>Some text</sub>
Some text<sup>Some text</sup>
<wbr /> - Допустимый перенос длинного слова
<br /> - Перенос строки
<hr /> - Горизинтальный разделитель
```

<b>Жирный</b>&nbsp;
<i>Курсив</i>&nbsp;
<u>Подчеркнутый</u>&nbsp;
<mark>Выделенный</mark>&nbsp;
<s>Зачеркнутый</s>&nbsp;
<cite>Строчная цитата</cite>&nbsp;
<q>Строчная цитата в кавычках</q>&nbsp;
<cite>Строчная цитата курсивом</cite>&nbsp;
Some text<sup>будет сверху</sup>&nbsp;
Some text<sub>будет снизу</sub>&nbsp;

## Смысловое форматирование

```html
<address>Россия, Москва, ул. Ленина, д, 1</address>
<time>1961-04-12</time>
<kbd>Ctrl + C</kbd>
<abbr title="Union of Soviet Socialist Republics">USSR</abbr>
<code>console.log('Какой-то код');</code>
<samp>Ваш браузер поддерживает JavaScript (вывод текста программой)</samp>
<pre>Текст будет такой же как в коде, со всеми п  р  о  б  е  л  а  м  и</pre>
<var>переменная1</var> + <var>переменная2</var>
<del>Удаленный текст</del> <ins>Новый текст</ins>
<bdo>Текст справа-налево</bdo>

<!-- Определение -->
<dfn>Капителью</dfn> в типографике называется текст, набранный прописными буквами уменьшенного размера.
```

<address>Россия, Москва, ул. Ленина, д, 1</address>
<time>1961-04-12</time><br />
<kbd>Ctrl + C</kbd><br />
<abbr title="Union of Soviet Socialist Republics">USSR</abbr><br />
<code>console.log('Hello, World!');</code><br />
<samp>Ваш браузер поддерживает JavaScript (вывод текста программой)</samp><br />
<pre>Текст будет такой же как в коде, со всеми п  р  о  б  е  л  а  м  и</pre>
<span><var>переменная1</var> + <var>переменная2</var></span><br />
<span><del>Удаленный текст</del> <ins>Новый текст</ins></span><br />
<dfn>Капителью</dfn> в типографике называется текст, набранный прописными буквами уменьшенного размера.

## Текст для SEO

```html
<h1>Главный заголовок</h1>
<strong>Важный текст + будет жирным</strong>
<em>Важный текст + будет курсивом</em>
```

***

## Списки

### Ненумерованный

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


### Нумерованный

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

### Многоуровневый

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
        <ol type='a'>
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

### Список определений 

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

### Раскрывающийся список

```html
<details>
  <summary>Раскройте список </summary>
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

***

## Ссылки

Тэг строчный, но им можно оборачивать любые элементы, для того чтобы они были кликабельны.

* ```download``` - Скачать
* ```rel``` - relationship
* ```target``` - управление вкладкой (_self и _blank)

```html
<!-- Простая ссылка на сторонний ресурс в новой вкладке -->
<a href="http://ya.ru"  target="_blank" rel="nofollow" title="Click me!">
  Ссылка на сайт Яндекс
</a>

<!-- Простая ссылка на внуренний ресурс -->
<a href="/knowledge-bank/docs/frontend/html/images/">Ссылка на "Изображения"</a>

<!-- Якорная ссылка на id -->
<a href="#списки">Якорная ссылка</a>

<!-- Ссылка на файл -->
<a href="https://tourpass.ru/docs/politic-person-data.pdf" target="_blank">Ссылка на pdf-файл</a>

<!-- Ссылка-обёртка -->
<a href="https://www.w3schools.com">
  <img border="0" alt="W3Schools" src="logo_w3s.gif" width="100" height="100">
</a>

<!-- Ссылка на почтовый клиент -->
<a href="mailto:someone@example.com">Send email</a>

<!-- Ссылка на набор номера -->
<a href="tel:+4733378901">+47 333 78 901</a>

<!-- Ссылка на Telegram -->
<a href="https://t.me/eleukhin">eleukhin</a>
```

* <a href="http://ya.ru"  target="_blank" rel="nofollow" title="Click me!">Ссылка на сайт Яндекс</a>
* <a href="/knowledge-bank/docs/frontend/html/images/">Ссылка на внутреннюю страницу "Изображения"</a>
* <a href="#списки">Якорная ссылка</a>
* <a href="https://tourpass.ru/docs/politic-person-data.pdf" download>Ссылка на pdf-файл</a>
* <a href="mailto:someone@example.com">Send email</a>
* <a href="tel:+4733378901">+47 333 78 901</a>
* <a href="https://t.me/eleukhin">eleukhin Telegram</a>


***

## Таблицы

```html
<table>
  <!-- Если строго нужно указать ширину колонок -->
  <colgroup>
    <col width="100" />
    <col width="300" />
    <col width="150" />
  </colgroup>

  <caption>Заголовок таблицы</caption>

  <thead>
    <tr>
      <td colspan="3">Головная строка</td>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>1 - 1</td>
      <td>1 - 2</td>
      <td rowspan="2">1 - 3</td>
    </tr>
    <tr>
      <td>2 - 1</td>
      <td>2 - 2</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td colspan="3">Футер таблицы</td>
    </tr>
  </tfoot>
</table>
```

<table>
  <colgroup>
    <col width="100" />
    <col width="300" />
    <col width="150" />
  </colgroup>

  <caption>Заголовок таблицы</caption>

  <thead>
    <tr>
      <td colspan="3">Головная строка</td>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>1 - 1</td>
      <td>1 - 2</td>
      <td rowspan="2">1 - 3</td>
    </tr>
    <tr>
      <td>2 - 1</td>
      <td>2 - 2</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td colspan="3">Футер таблицы</td>
    </tr>
  </tfoot>
</table>