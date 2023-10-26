---
title: <script>
sidebar_position: 0
---

- [shortcode.dev](https://shortcode.dev/javascript-cheatsheet#javascript-cheatsheet) — JS-cheatsheet
- [www.w3schools.com](https://www.w3schools.com/js/default.asp) — JS Tutorial
- [«Современный учебник JavaScript»](https://learn.javascript.ru/) — learn.javascript.ru;
- [MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript) - Mozilla Development Network;
- [Sorax](https://www.youtube.com/watch?v=H6G63NKRSi8&list=PL363QX7S8MfSxcHzvkNEqMYbOyhLeWwem) - видео-курс "Основы JS - Javascript-джедай" (2014)
- [Фрилансер по жизни](https://www.youtube.com/watch?v=yJcCKuxfb2o&list=PLM6XATa8CAG7DDIBjNVd78Fv5Ueo930IV) - План развития фронтенд-разработчика (2020)
- [Bogdan Stashchuk](https://www.youtube.com/watch?v=CxgOKJh4zWE&t=2425s) - Полный Курс JavaScript Для Начинающих (2022)
- [«Вы не знаете JS»](https://github.com/azat-io/you-dont-know-js-ru) — сборник книг для виртуозного владения JavaScript.
---
- [Презентация «Яндекс.Практикума»](https://disk.yandex.ru/i/ekqxfARcwTqkwg): «Бегло по ES6 для старта»;
- [JavaScript Weekly](https://javascriptweekly.com/) — каждую неделю на почту будут падать интересные статьи;
- [Видео и материалы с ШАДа](https://www.youtube.com/playlist?list=PLJOzdkh8T5koEPv-R5W0ovmL_T2BjB1HX) -  по алгоритмам и структурам данных;
- [Шпаргалка по сложности алгоритмов](https://habr.com/ru/post/188010/)
- [Первый взгляд на записи и кортежи в JavaScript](https://habr.com/ru/post/504092/)
- [Оценка сложности алгоритмов](https://habr.com/ru/post/173821/)
- [Справочник JS wm-school](https://wm-school.ru/js/index.php)
- [Справочник JS wisdomweb](https://www.wisdomweb.ru/JS/javascript-first.php)

```html
<!-- inline js-code -->
<script>
  alert('Hello, World!');
</script>

<!-- external js file -->
<script src="file.js">
  // этот код будет проигнорирован, так как у тега скрипт есть аттрибут src
  alert(123);
</script>

<!-- if JS is turn off in a browser -->
<noscript>
  <p>Please, turn on JS!</p>
</noscript>
```

Хороший тон подключать все скрипты перед ```</body>```. Чтобы они не блокировали отрисовку html, если возникнут какие-лио ошибки.

***

## Обычное подключение

- Загружаются друг за другом (порядок как в коде)
- Выполняются друг за другом (порядок как в коде)
- Блокируют отрисовку html пока не загрузятся и не выполняться

```html
  ...
  <script src="script1.js"></script>
  <script src="script2.js"></script>
  <script src="script3.js"></script>
</body>
```

Загрузкой скриптов можно управлять с помощью аттрибутов **async** и **defer** и их расположение в html-коде уже не будет влиять.

***

## Асинхронное (async)

- Работает только с src
- Место расположения в коде не влияет на его загрузку
- Скрипт будет загружаться сразу, не дожидаясь и не блокируя отрисовку html
- После загрузки **БУДЕТ СРАЗУ ВЫПОЛНЯТЬСЯ** и будет блокировать отрисовку html
- Если скриптов с async несколько, то порядок их загрузки и выполнения может не совпать с порядком в коде. Какой скрипт згрузится первым - тот и будет первым выполняться.

```html
  ...
  <script src="script1.js" async></script>
  <script src="script2.js" async></script>
  <script src="script3.js" async></script>
</body>
```

***

## Отложенное (defer)

- Работает только с src
- Место расположения в коде не влияет на его загрузку
- Скрипт будет загружаться сразу, не дожидаясь и не блокируя отрисовку html
- После загрузки **БУДЕТ ЖДАТЬ** полную отрисовку html и не будет выполняться пока html не загрузится
- Если скриптов с defer несколько, то порядок их выполнения **БУДЕТ СОВПАДАТЬ** с порядком в коде (пока не выполнился первый, второй будет ждать, даже если загрузился раньше)

```html
  ...
  <script src="script1.js" defer></script>
  <script src="script2.js" defer></script>
  <script src="script3.js" defer></script>
</body>
```

***

## Браузер

Основные компоненты браузера

<img src="../../../../img/frontend/browser.png" alt="browser.png" />

**Пользовательский интерфейс** — включает адресную строку, кнопки «назад» и «вперёд», меню закладок и т. д. В пользовательский интерфейс входит всё, что видит пользователь, за исключением окна с содержимым страницы.

**Движок браузера** — обеспечивает взаимодействие между пользовательским интерфейсом и движком рендеринга.
Механизм рендеринга — **отвечает за отображение веб-страницы. Механизм рендеринга анализирует HTML и CSS и отображает содержимое на экране.

**Сеть** — сетевые вызовы, такие как XHR-запросы. Их реализация различается в зависимости от платформы. 

**Бэкенд пользовательского интерфейса** — рисует основные виджеты, такие как флажки и окна. Этот бэкенд предоставляет универсальный интерфейс, который не зависит от платформы. Он использует методы пользовательского интерфейса операционной системы.

**Движок JavaScript** — выполняет JavaScript. Например, V8 в Сhrome.

**Хранилище данных** — возможно, вашему приложению потребуется хранить все данные локально. Типы механизмов хранения: localStorage, indexDB, Web SQL (не рекомендован, но знать о нём нужно), файловая система.

***

## Ограничения JS в браузере

Разработчики веб-приложений сталкиваются с несколькими ограничениями:

- Нельзя взаимодействовать с файловой системой.
- Нет доступа к сетевым функциям, кроме тех, что предоставляет сам браузер.
- Невозможны многопоточные вычисления. Есть воркеры, но они не решают проблему полностью.
- Нельзя создавать новые процессы или запускать программы.

NodeJS из «коробки» позволяет обойти некоторые из этих ограничений.