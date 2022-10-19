---
title: Head-тэги и SEO
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

***

## Mета-тэги

- [Facebook sharing](https://developers.facebook.com/tools/debug/)
- [Meta-tags generator](https://webcode.tools/)


```html
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

***

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

***

## &lt;base&gt;

Элемент &lt;base&gt; (от англ. base — база, основание) указывается внутри &lt;head&gt; и инструктирует браузер относительно полного базового адреса текущего документа. &lt;base&gt; предназначен для документов, в которых используется относительный адрес и эти документы могут переноситься в другую папку или даже на другой компьютер без потери связи. Браузер ищет элемент &lt;base&gt;, определяет полный адрес документа и корректно загружает его. Например, если адрес документа указан как &lt;base href="http://www.megasite.ru/hzchd/"&gt;, то при добавлении рисунков достаточно использовать относительный адрес &lt;img src="images/labuda.gif"&gt;. При этом полный путь к изображению будет http://www.megasite.ru/hzchd/images/labuda.gif, что позволяет браузеру всегда находить графический файл, независимо от того, где находится текущая веб-страница. Также можно применять и иерархическую систему пути с двумя точками. Так, если изображение добавляется как &lt;img src="../images/labuda.gif"&gt;, то полный путь к файлу будет http://www.megasite.ru/images/labuda.gif.

Второе применение элемента &lt;base&gt; — задание целевого окна для всех ссылок на текущей странице.

***

## Условные комментарии

Сейчас уже почти не используется.

```html
<!-- Версия IE меньше 9 -->
<!--[if lt IE 9]>
  Можно загружать скрипты и стили
<![endif]-->
```

***

## Микроразметка (Microlayout)

Микроданные. Более глубокая семантика. Нужно для лучшей обработки результата поисковых запросов

**itemscope** - указывает границы блока по микроданным в открывающем теге

**itemtype** - тип схемы для микроданных с сайта [http://schema.org](http://schema.org) (всегда URL-тип)

**itemprop="name"** - свойство этой схемы со значением (полный список значений на сайте [http://ruschema.org](http://ruschema.org))

```html
<div itemscope itemtype="http://schema.org/Person">
  <div itemprop="name">Евгений Леухин</div>
  <img itemprop="image" src="http://server/photo.jpg">
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

***

## SEO (Продвижение)

### Теги для SEO

```html
<!-- мета-тэги для seo -->
<meta name="keywords" content="ключевое слово1, ключевое слово2, ключевое слово3, ключевое слово4">
<meta name="description" content="Краткое описание сайта илии приложения">
<meta name="language" content="RU">
<meta name="copyright" content="Компания">
<meta name="robots" content="index, nofollow">
<meta name="author" content="Name">

<!-- текст для seo -->
<h1>Главный заголовок</h1>
<strong>Важный текст + будет жирным</strong>
<em>Важный текст + будет курсивом</em>
```

### Трафик

Посетители, кот. заходят на сайт. **Лиды** - активные посетители сайта, кот. выполняют какие-либо действия (заполняют формы, подписываются и т.д.). Хостинг - максимально близко к ЦА.

Трафик бывает:
- По прямым визитам (по url-сайта);
- По ссыкам с других сайтов (доноры);
- Рекламный (рекламные баннеры), как правило, платный;
- Через социальные сети (социальный);
- Поисковый - по поисковым запросам.

### Поисковые запросы

**Запросы в поисковиках**. Сколько человек делают запрос в месяц (чел/мес):

- НЧ (<5000)
- СЧ (5000 - 30000)
- ВЧ (>50000)

**Конкурентность запросов** (нужно смотреть по результатам выдачи поисковиков):

- НК (< 100 тыс.)
- СК (100 тыс. - 1 млн.)
- ВК (> 1 млн.)

**Положения сайта** в выдаче поисковика. TOP-10 —задача SEO

1. место: 100% траффика;
2. место: 80% траффика;
3. место: 60-70% траффика;
4. место: 40-50% траффика;
...

**Семантическое ядро** - Список ключевых фраз. Составляется, как правило, для главной страницы. Составляется после анализа ключевых запросов в Google и Яндекс (```meta keywords```)

### Инструменты для SEO

- [SEOPult](https://seopult.pro/)
- [PromoPult](https://promopult.ru/)
- [Яндекс-Wordstat](https://wordstat.yandex.ru/) - Продвижение в Яндекс
- [Google - Search Console](https://search.google.com/search-console/welcome?hl=ru) - Продвижение в Google

### Метрика

- [Яндекс-Метрика](https://metrika.yandex.ru/)
- [Яндекс-Вебмастер](https://webmaster.yandex.ru/)
- [Google-Аналитика](https://analytics.google.com/)


### Реклама

- [Яндекс-Директ](https://direct.yandex.ru/) - Реклама в Яндекс
- [Google-Реклама](https://ads.google.com/intl/ru_ru/home/) - Реклама в Google (Google Ads)
- SMM

### Копирайт

- Текстовый контент на сайте должен обязательно включать в себя ключевые запросы, при этом их лучше оборачивать в тег strong.
- В каждых 3-5 параграфах (примерно 3 строки на параграф) нужно использовать не более 1 ключа.
- Общее кол-во символов примерно 2000-5000 на странице.
- Текст должен быть с минимальным кол-вом воды, максимально оригинальным.
- Должна быть хорошая ссылочная масса.
- Без грамматических ошибок.


<!-- - [Google Ads](https://ads.google.com/aw/campaigns/new/express?ocid=1082361030&cmpnInfo=%7B%228%22%3A%2278922292-d7a2-4266-b5df-6973325481a9%22%7D&subid=ru-ww-et-g-aw-a-tools-awhp%21o2&step=cbss&authuser=0&uscid=1082361030&__c=6898664470&euid=669671666&__u=2701374434&mode=signup)
- [Google-Marketing Platform](https://marketingplatform.google.com/about/)
- [Яндекс-Webmaster](https://webmaster.yandex.ru/) - Добавить сайт
- [SMM]()	Продвижение в соц. сетях -->
