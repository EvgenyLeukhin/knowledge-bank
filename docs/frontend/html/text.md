---
title: Текст
sidebar_position: 2
---

* [emojio.ru](https://emojio.ru/) | [getemoji.com](https://getemoji.com/) | [freecodecamp.org](https://www.freecodecamp.org/news/all-emojis-emoji-list-for-copy-and-paste/) - Emoji
* [W3schools](https://www.w3schools.com/charsets/ref_utf_symbols.asp) | [Unicode-table](https://unicode-table.com/ru/html-entities/) | [Html5book](https://html5book.ru/specsimvoly-html) - Символы

***

## Символы

Все шрифтовые тестовые и цифровые символы в базовом виде воспринимаются интерпретатором браузера как символы.

Каждый шрифтовой символ можно вставить несколькоми способами:

- Просто **печатный символ** © - ©
- Мнемонический символ ```&copy;``` - &copy;
- HTML-код (десятичный)```&#xa9;``` - &#xa9;
- Юникод (hex)```&#x00A9;``` - <span>&#x00A9;</span>

Нужно в случаях, когда нужно показать именно эти символы как символы, чтобы они не воспринимался браузером как html-код (например символы &lt;&gt;).

|Символ|Описание|Мнемоника|HTML-код|HTML-Юникод|JS-Юникод|
|---|---|---|---|---|---|
||Неразрывный пробел|```&nbsp;```|```&#160;```|```&#x00A0;```|```\u00A0```|
|**<**|Знак меньше|```&lt;```|```&#60;```|```&#x003C;```|```\u003C```|
|**>**|Знак больше|```&gt;```|```&#62;```|```&#x003E;```|```\u003E```|
|**‐**|Дефис|```&hyphen;```|```&#8208;```|```&#x2010;```|```\u2010```|
|**–**|Среднее тире|```&ndash;```|```&#8211;```|```&#x2013;```|```\u2013```|
|**—**|Длинное тире|```&mdash;```|```&#8212;```|```&#x2014;```|```\u2014```|
|**©**|Copyright|```&copy;```|```&#xa9;```|```&#x00A9;```|```\u00A9```|

```\u00A0``` - JS-Юникод можно вставлять в строку (js, ts или json)

***

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
<ruby>, <rt>, <rp> - Теги для идеографической письменности вроде китайского языка (используются редко)
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

***

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
