---
title: Основная разметка
sidebar_position: 0
---

- [MDN - HTML](https://developer.mozilla.org/ru/docs/Web/HTML)


## Синтаксис html

- Тэги бывают **блочными** и **строчными**
- Тэги бывают **парными**, которые нужно закрывать ```<p>Text</p>``` и **одиночными** ```<hr />```
- Тэги могут имеют **аттрибуты** (```class```, ```id```, ```style```, ```hidden``` и т. д.)
- Тэг может иметь **вложенный контент**, а может не иметь (зависит от того какой тэг)
- Аттрибут может иметь **одно свойство** ```id="price"```, **несколько свойств** ```style="color: red; font-size: 16px;"```, либо **не иметь свойств вообще** ```hidden```

```html title="index.html"
<тэг1 аттрибут1="свойство1-аттрибута1-тэга1" аттрибут2="свойство1-аттрибута2-тэга1">
  <тэг2 аттрибут1="свойство1-аттрибута1-тэга2" аттрибут2="свойство1-аттрибута2-тэга2">
    Контент тэга2
  </тэг2>
<тэг1>
```

## Структура html-файла

- **html-файлы** - это основные файлы, которые работают в браузерах. Испольхуются для web-страниц, web-приложений, email-рассылок, некоторых desktop-приложений.
- Загружаются сверху-вниз, слева направо
- Основное назначение html - разделение контента на блоки (создание структуры документа, семантическое описание контента)
- **html-файлы** сайтов располаются на серверах, боаузер делает на них запроc, скачивает их и производит парсинг html-кода, после чего пользователь может взаимодействовать с данным сайтом.
- Структура html-файла работает по принципу "матрёшки", одни тэги вложены в другие, а те могут иметь свои вложенные и т.д. Научным языком эта структура называется DOM-tree (Document Object Model).


```html title="index.html"
<!-- Версия html (5-я версия) -->
<!DOCTYPE html>

<html lang="ru">
  <!-- Служебная (техническая) часть страницы -->
  <head>
    <title>Заголовок страницы во вкладке браузера</title>

    <!-- CSS внутри head -->
    <style>
      body { padding: 0; }
      .text { font-style: italic; }
    </style>

    <!-- JS внутри head -->
    <script>
      console.log('This text is loaded from head-tag');
    </script>
  </head>

  <!-- Контентная (видимая) часть страницы -->
  <body>
    <h1 class="title">Some title</h1>
    <p class="text">Some text</p>


    <!-- Инлайн стилизация через аттрибут style -->
    <span style="color: red; font-weight: bold;">Some string1</span>
    <br />
    <span style="color: green; font-weight: normal;">Some string2</span>

    <!-- Комментарии внутри html (не будут отображаться) -->
  </body>
</html>
```


## Семантическое разделение контента

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
  <head>...</head>

  <body>
    <header>HEADER</header>
    <aside>ASIDE</aside>

    <main>
      <section>SECTION1</section>
      <section>SECTION2</section>
      <section>
        SECTION3
 
        <article>SOME ARTICLE</article>
      </section>
    </main>

    <footer>FOOTER</footer>
  </body>
</html>
```