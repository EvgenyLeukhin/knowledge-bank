---
title: Head-тэги
sidebar_position: 4
---

## Основные тэги внутри &lt;head&gt;

**&lt;link&gt;** - ссылки на сторонние или внутренние css-файлы

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Заголовок страницы</title>

    <!-- font -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900" rel="stylesheet">

    <!-- css link -->
    <link href="/css/chunk-common.ac381fd6.css" rel="stylesheet">

    <!-- js link -->
    <script async src="https://mc.yandex.ru/metrika/tag.js"></script>

    <style>
      /* css inside head */
    </style>

    <script>
      // js inside head
    </script>
  </head>

  ...
</html>
```

## Mета-тэги

- [Facebook sharing](https://developers.facebook.com/tools/debug/)
- [Meta-tags generator](https://webcode.tools/)


```html
<!-- мета-тэги для seo -->
<meta name="keywords" content="ключевое слово1, ключевое слово2, ключевое слово3, ключевое слово4">
<meta name="description" content="Краткое описание сайта илии приложения">
<meta name="language" content="RU">
<meta name="copyright" content="Компания">
<meta name="robots" content="index, nofollow">
<meta name="author" content="Name">

<!-- важные тэги для seo -->
<title>Заголовок страницы</title>
<h1>Заголовок страницы</h1>
<strong>Важный текст</strong>

<!-- мета-тэги для превью -->
<!-- open-graph -->
<meta property="og:url" content="http://kartinamira.com">
<meta property="og:type" content="website">
<meta property="og:title" content="Заголовок страницы">
<meta property="og:image" content="http://kartinamira.com/cover.png">
<meta property="og:image:type" content="image/png">
<meta property="og:image:height" content="1024">
<meta property="og:image:width" content="512">
<meta property="og:site_name" content="Заголовок страницы">
<meta property="og:locate" content="ru_RU">
<meta property="og:description" content="Краткое описание сайта илии приложения">

<!-- twitter -->
<meta name="twitter:title" content="Заголовок страницы">
<meta name="twitter:description" content="Краткое описание сайта илии приложения">
<meta name="twitter:url" content="http://kartinamira.com">
<meta name="twitter:site" content="http://kartinamira.com">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image:src" content="http://kartinamira.com/cover.png">

<!-- itemprop tags (micro layout) -->
<meta itemprop="name" content="Заголовок страницы">
<meta itemprop="description" content="Краткое описание сайта илии приложения">
<meta itemprop="image" content="http://kartinamira.com/cover.png">

<!-- кодировка utf-8 -->
<meta charset="utf-8">
    
<!-- viewport - адаптивность -->
<meta name="viewport" content="width=device-width,initial-scale=1">

<!-- прочее -->
<meta name="theme-color" content="#fff">
<meta name="application-name" content="kartina-mira">
<meta name="language" content="RU">
<meta name="url" content="http://kartinamira.com">
<meta name="identifier-URL" content="http://kartinamira.com">
```

Для также SEO важно использовать семантические тэги, такие как: ```<header>, <footer>, <aside>, <main>, <nav>, <section>, <article>, <strong>``` и др.

## Фавиконки

Иконки на вкладках браузеров.

```html
<!-- Для старых браузеров -->
<link rel="icon" type="image/x-icon" sizes="32x32" href="favicon.ico">

<!-- Для новых браузеров (svg) -->
<link rel="icon" type="image/svg+xml" sizes="any" href="/favicon.svg">

<!-- Safari (достаточно одной на 180)-->
<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">

<!-- Android Manifest -->
<link rel="manifest" href="manifest.json">

<!-- Windows -->
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">

```

```json title="manifest.json"
{
  "name": "Sitemane",
  "description": "Site description",
  "background_color": "#fff",
  "theme_color": "#fff",
  "icons": [
    { "src": "img/icon-192.png", "type": "image/png", "sizes": "192x192" },
    { "src": "img/icon-512.png", "type": "image/png", "sizes": "512x512" },
  ]
}
```
