---
title: Head-тэги
sidebar_position: 9
---

- [megatags.co](https://megatags.co/#generate-tags) - Генератор мета-тегов
- [Meta-tags generator](https://webcode.tools/) - Генератор мета-тегов 2
- [Favicons generator](https://realfavicongenerator.net/) - Генератор фавиконок
- [Logo generator](https://looka.com/logo-maker/) - Генератор логотипов
- [Facebook sharing](https://developers.facebook.com/tools/debug/) - Проверка og-тегов
- [Проверка meta-тегов](https://socialsharepreview.com/) - Проверка meta-тегов

---

## Основные тэги внутри &lt;head&gt;

**&lt;link&gt;** - ссылки на сторонние или внутренние css-файлы

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Заголовок страницы</title>

    <!-- font -->
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900"
      rel="stylesheet"
    />

    <!-- css link -->
    <link href="/css/chunk-common.ac381fd6.css" rel="stylesheet" />

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

---

## Mета-тэги

```html
<!-- мета-тэги для превью -->
<!-- open-graph -->
<meta property="og:url" content="http://kartinamira.com" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Заголовок страницы" />
<meta property="og:image" content="http://kartinamira.com/cover.png" />
<meta property="og:image:type" content="image/png" />
<meta property="og:image:height" content="1024" />
<meta property="og:image:width" content="512" />
<meta property="og:site_name" content="Заголовок страницы" />
<meta property="og:locate" content="ru_RU" />
<meta
  property="og:description"
  content="Краткое описание сайта илии приложения"
/>

<!-- twitter -->
<meta name="twitter:title" content="Заголовок страницы" />
<meta
  name="twitter:description"
  content="Краткое описание сайта илии приложения"
/>
<meta name="twitter:url" content="http://kartinamira.com" />
<meta name="twitter:site" content="http://kartinamira.com" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image:src" content="http://kartinamira.com/cover.png" />

<!-- itemprop tags (micro layout) -->
<meta itemprop="name" content="Заголовок страницы" />
<meta itemprop="description" content="Краткое описание сайта илии приложения" />
<meta itemprop="image" content="http://kartinamira.com/cover.png" />

<!-- кодировка utf-8 -->
<meta charset="utf-8" />

<!-- viewport - адаптивность -->
<meta name="viewport" content="width=device-width,initial-scale=1" />

<!-- прочее -->
<meta name="theme-color" content="#fff" />
<meta name="application-name" content="kartina-mira" />
<meta name="language" content="RU" />
<meta name="url" content="http://kartinamira.com" />
<meta name="identifier-URL" content="http://kartinamira.com" />
```

---

## Фавиконки

- [Favicons generator](https://realfavicongenerator.net/)
- [Logo generator](https://looka.com/logo-maker/)

Иконки на вкладках браузеров.

````html
<!-- Для старых браузеров -->
<link rel="icon" type="image/x-icon" sizes="32x32" href="favicon.ico" />

<!-- Для новых браузеров (svg) -->
<link rel="icon" type="image/svg+xml" sizes="any" href="/favicon.svg" />

<!-- Safari (достаточно одной на 180)-->
<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />

<!-- Android Manifest -->
<link rel="manifest" href="manifest.json" />

<!-- Windows -->
<meta name="msapplication-TileColor" content="#ffffff" />
<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
<meta name="theme-color" content="#ffffff" />

--- ## &lt;base&gt; Элемент &lt;base&gt; (от англ. base — база, основание)
указывается внутри &lt;head&gt; и инструктирует браузер относительно полного
базового адреса текущего документа. &lt;base&gt; предназначен для документов, в
которых используется относительный адрес и эти документы могут переноситься в
другую папку или даже на другой компьютер без потери связи. Браузер ищет элемент
&lt;base&gt;, определяет полный адрес документа и корректно загружает его.
Например, если адрес документа указан как &lt;base
href="<http://www.megasite.ru/hzchd/>"&gt;, то при добавлении рисунков
достаточно использовать относительный адрес &lt;img src="images/labuda.gif"&gt;.
При этом полный путь к изображению будет
<http://www.megasite.ru/hzchd/images/labuda.gif>, что позволяет браузеру всегда
находить графический файл, независимо от того, где находится текущая
веб-страница. Также можно применять и иерархическую систему пути с двумя
точками. Так, если изображение добавляется как &lt;img
src="../images/labuda.gif"&gt;, то полный путь к файлу будет
<http://www.megasite.ru/images/labuda.gif>. Второе применение элемента
&lt;base&gt; — задание целевого окна для всех ссылок на текущей странице. --- ##
Условные комментарии Сейчас уже почти не используется. ```html
<!-- Версия IE меньше 9 -->
<!--[if lt IE 9]> Можно загружать скрипты и стили <![endif]-->
````

---

## Микроразметка (Microlayout)

Микроданные. Более глубокая семантика. Нужно для лучшей обработки результата поисковых запросов

**itemscope** - указывает границы блока по микроданным в открывающем теге

**itemtype** - тип схемы для микроданных с сайта <http://schema.org> (всегда URL-тип)

**itemprop="name"** - свойство этой схемы со значением (полный список значений на сайте <http://ruschema.org>)

```html
<div itemscope itemtype="http://schema.org/Person">
  <div itemprop="name">Евгений Леухин</div>
  <img itemprop="image" src="http://server/photo.jpg" />
  <div itemprop="gender">Мужской</div>
  <div itemprop="url">http://mysite.ru</div>
  <div itemprop="birthDate">01-04-1986</div>
  <div itemprop="nationality">Русский</div>
  <div itemprop="homeLocation">Россия, Омск</div>
  <div itemprop="telephone">+79043270421</div>
  <div itemprop="email">evgenyleukhin@ya.ru</div>
  <div itemprop="jobTitle">Web-разработчик</div>
  <div itemprop="spouse">Бегунова Инна</div>
  ...
</div>
```

---

## manifest.json example

```json
{
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
```

```json title="manifest.json"
{
  "name": "Sitemane",
  "description": "Site description",
  "background_color": "#fff",
  "theme_color": "#fff",
  "icons": [
    { "src": "img/icon-192.png", "type": "image/png", "sizes": "192x192" },
    { "src": "img/icon-512.png", "type": "image/png", "sizes": "512x512" }
  ]
}
```

---

## Дополнительно

```html
<head>
  <!-- Предзагрузка шрифта -->
  <link
    rel="preload"
    href="fonts.woff2"
    as="font"
    type="font/woff2"
    crossorigin
  />

  <!-- Предзагрузка критических ресурсов -->
  <link rel="preload" href="critical.css" as="style" />
  <link rel="preload" href="hero-image.jpg" as="image" />
  <link
    rel="preload"
    href="fonts.woff2"
    as="font"
    type="font/woff2"
    crossorigin
  />

  <!-- Для поисковиков -->
  <meta name="robots" content="index, follow" />
  <meta name="googlebot" content="index, follow" />
  <meta name="bingbot" content="index, follow" />
  <meta name="google" content="notranslate" />
  <meta name="google-site-verification" content="verification_code" />
  <meta name="yandex-verification" content="verification_code" />
  <meta name="msvalidate.01" content="verification_code" />
  <meta name="baidu-site-verification" content="verification_code" />

  <!-- Content Security Policy -->
  <meta
    http-equiv="Content-Security-Policy"
    content="default-src 'self'; script-src 'self' 'unsafe-inline';"
  />

  <!-- БЕЗОПАСНОСТЬ -->
  <!-- X-Frame-Options -->
  <meta http-equiv="X-Frame-Options" content="DENY" />

  <!-- X-Content-Type-Options -->
  <meta http-equiv="X-Content-Type-Options" content="nosniff" />

  <!-- Referrer Policy -->
  <meta name="referrer" content="strict-origin-when-cross-origin" />

  <!-- Permissions Policy -->
  <meta
    http-equiv="Permissions-Policy"
    content="camera=(), microphone=(), geolocation=()"
  />

  <!-- АНАЛИТИКА -->
  <!-- Google Analytics -->
  <meta name="google-analytics" content="GA_TRACKING_ID" />

  <!-- Google Tag Manager -->
  <meta name="google-site-verification" content="verification_code" />

  <!-- Yandex Metrica -->
  <meta name="yandex-verification" content="verification_code" />

  <!-- Bing Webmaster Tools -->
  <meta name="msvalidate.01" content="verification_code" />

  <!-- РАЗРАБОТКА -->
  <!-- Режим разработки -->
  <meta name="development-mode" content="true" />

  <!-- Версия приложения -->
  <meta name="app-version" content="1.0.0" />

  <!-- Среда выполнения -->
  <meta name="runtime" content="production" />

  <!-- Отладка -->
  <meta name="debug" content="false" />
</head>
```
