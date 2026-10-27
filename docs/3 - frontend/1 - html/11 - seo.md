---
title: SEO
sidebar_position: 11
---

Мета-теги помогают поисковику понять страницу и собрать сниппет. Сами по себе они почти не поднимают позиции. Официальная точка входа у Google — [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide).

Практический порядок:

1. Сделать сайт доступным для обхода и быстрым.
2. Написать страницы под реальные запросы: заголовки, текст и разметка по фактическому содержимому.
3. После этого смотреть индексацию и запросы в кабинетах вебмастеров.

`example.com` и `hello@example.com` в примерах — заглушки из [RFC 2606](https://www.rfc-editor.org/rfc/rfc2606). Перед публикацией их заменяют.

---

## Четыре слоя

- **Техническая база.** Робот находит страницу, читает её и считает быстрой.
- **Контент на странице.** Текст отвечает на запрос. Title и description задают сниппет.
- **Внешние сигналы.** Ссылки с других сайтов, упоминания названия, доверие к источнику. Тегами это не изобразить.
- **Инструменты.** Кабинеты вебмастеров, скорость, проверка микроразметки. Ими читают результат, а не «включают SEO».

---

## Head индексируемой страницы

На каждой индексируемой странице свои `title`, `description` и `canonical`. Язык задаёт `html lang`. Отдельный `meta content-language` не нужен.

`meta name="robots" content="index, follow"` не ставят: так и есть по умолчанию. Рабочий запрет индексации — на странице 404.

`meta keywords` нет в списке тегов, которые понимает Google. `hreflang` добавляют, когда есть вторая языковая версия. Одна кривая пара `hreflang` хуже пустого места.

`viewport` без `maximum-scale=1`: запрет масштаба не помогает поиску.

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Тема этой страницы — Студия «Линия»</title>
    <meta
      name="description"
      content="Что на странице и зачем её открывать. Текст уникален для этого адреса."
    />
    <link rel="canonical" href="https://example.com/путь/" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  </head>
</html>
```

`title` — заголовок сниппета, это не `h1`. Description — одно-два предложения, зачем открыть страницу, не список ключей.

---

## Контент на странице

- Один `h1` на страницу. Дальше `h2` и `h3` по смыслу, без пропуска уровней ради вида.
- Абзацы отвечают на вопрос человека. Ключи не набирают списком и не оборачивают в `strong` для робота.
- У содержательных картинок есть `alt`. Декоративный знак рядом с текстом прячут от скринридера (`aria-hidden="true"`).
- У картинок заданы `width` и `height`, чтобы вёрстка не прыгала.
- Анкор говорит, куда ведёт ссылка: «Сайт-визитка», а не «подробнее» и не «здесь».
- Одна страница — одна тема. Title и description у главной, услуг и контактов разные.

Семантическое ядро — список реальных запросов, по которым выбирают темы страниц. Его смотрят в [Яндекс Вордстат](https://wordstat.yandex.ru/) и позже в кабинетах вебмастеров. В `meta keywords` ядро не кладут.

---

## Техническая база

### robots.txt

Файл в корне. Он управляет обходом, а не попаданием в индекс. Страница, закрытая через `Disallow`, всё равно может появиться в выдаче без текста сниппета, если на неё есть ссылки. Чтобы адрес не индексировали, нужен `noindex` или закрытый доступ.

CSS, скрипты, картинки и значок не закрывают: роботу нужно увидеть страницу так же, как её видит человек.

```text
User-agent: *
Allow: /

Sitemap: https://example.com/sitemap.xml
```

Закрытый раздел, если он действительно не для обхода:

```text
User-agent: *
Allow: /

Disallow: /private/
Disallow: /admin/

Sitemap: https://example.com/sitemap.xml
```

Строка `Sitemap` — абсолютный URL. Директивы, которые Яндекс всё ещё читает в `robots.txt`: `User-agent`, `Disallow`, `Allow`, `Sitemap`, `Clean-param`. Директивы `Host` в этом списке нет. `Clean-param` убирает из обхода мусорные GET-параметры (`utm_source` и похожие). На сайте без таких параметров директиву не пишут.

Документация: [robots.txt у Google](https://developers.google.com/search/docs/crawling-indexing/robots/intro), [meta robots](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag).

### sitemap.xml

В карте только канонические HTML-адреса, которые нужно индексировать. Нет 404, стилей, картинок и черновиков конфига. Google не использует `priority` и `changefreq`, поэтому их нет. `lastmod` меняют вместе со страницей и только на правдивую дату.

```text
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
    <lastmod>2026-10-27</lastmod>
  </url>
  <url>
    <loc>https://example.com/uslugi/</loc>
    <lastmod>2026-10-27</lastmod>
  </url>
</urlset>
```

Карту отправляют и в Google Search Console, и в Яндекс Вебмастер, и в Bing. Документация: [карта сайта](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

### Канонический адрес

`link rel="canonical"` стоит в `head` каждой индексируемой страницы. Адрес абсолютный и совпадает с картой и со слэшем на конце:

- `https://example.com/`
- `https://example.com/uslugi/`
- `https://example.com/kontakty/`

`www` и без `www`, `http` и `https`, слэш и его отсутствие — одни и те же страницы по нескольким адресам. Их склеивают.

Яндекс принимает переход с HTTP на HTTPS редиректом **301**. Для смены протокола `rel="canonical"` он больше не использует. Каноническая ссылка склеивает дубли внутри домена. Документация: [канонические URL Google](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls), [канонический адрес Яндекса](https://yandex.ru/support/webmaster/ru/robot-workings/canonical).

### Редиректы и коды ответа

Сразу ведут на канонический URL одним кодом 301, без цепочки `http` → `https://www` → `https://без-www`.

- Существующие страницы отдают **200**.
- Неизвестный адрес отдаёт **404**. Телом может быть `/404.html`, статус при этом остаётся 404.
- Все неизвестные адреса на главную с кодом 200 не отправляют. Это soft 404: страница ошибки выглядит для робота как обычная.

`/index.html` редиректит на `/`. Каталог без завершающего слэша редиректит на вариант со слэшем.

Фрагмент Apache:

```text
RewriteEngine On

RewriteCond %{HTTPS} !=on [OR]
RewriteCond %{HTTP_HOST} ^www\.example\.com$ [NC]
RewriteRule ^ https://example.com%{REQUEST_URI} [R=301,L]

RewriteRule ^index\.html$ https://example.com/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^(.+[^/])$ https://example.com/$1/ [R=301,L]

ErrorDocument 404 /404.html
```

Фрагмент nginx. `try_files` не подменяет неизвестный адрес на главную:

```text
location = /index.html { return 301 https://example.com/; }
location / { try_files $uri $uri/ =404; }
error_page 404 /404.html;
location = /404.html { internal; }
```

Фрагмент Netlify, файл `_redirects`:

```text
http://example.com/*         https://example.com/:splat  301!
http://www.example.com/*     https://example.com/:splat  301!
https://www.example.com/*    https://example.com/:splat  301!
/index.html                  /                            301
```

Боевой `.htaccess` с доменом-заглушкой в репозиторий не кладут: на хостинге он может включиться сам.

### Страница 404

```html
<title>Страница не найдена</title>
<meta name="robots" content="noindex, follow" />
```

Канонического URL у ошибочного адреса нет. Страницы нет в `sitemap.xml`, и с других страниц на неё нет ссылки. Сервер отдаёт этот файл с кодом 404, а не 200.

### Скорость и мобильная вёрстка

`viewport` в `head`. Колонки на узком экране складываются в одну. Системные шрифты, один CSS, без лишних сторонних скриптов. Первый экран — текст. У картинок заданы размеры.

Ориентиры Google, Core Web Vitals: LCP до 2,5 с, INP до 200 мс, CLS до 0,1. Яндекс тоже ждёт быстрый мобильный сайт, но эти три числа публикует Google. Документация: [Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals).

### Адреса и внутренние ссылки

Короткие пути: `/uslugi/`, `/kontakty/`. На них ведут меню, карточки и хлебные крошки.

---

## Микроразметка

JSON-LD в `head`, тип `application/ld+json`. Разметка описывает только то, что видно на странице.

На главной — `Organization` и `WebSite`. На внутренних страницах к ним добавляют `BreadcrumbList`.

`LocalBusiness` — когда есть публичная точка с улицей. Нет точки приёма — в разметке `Organization`. Улицу, телефон и часы не выдумывают: адресный сниппет Яндекса строится по реальному адресу.

`SearchAction` добавляют, когда на сайте есть поиск. `sameAs` — когда есть настоящие профили. `AggregateRating` и чужие отзывы не ставят.

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://example.com/#organization",
        "name": "Студия «Линия»",
        "url": "https://example.com/",
        "email": "hello@example.com",
        "areaServed": { "@type": "Country", "name": "Россия" },
        "logo": {
          "@type": "ImageObject",
          "url": "https://example.com/images/logo.png",
          "width": 192,
          "height": 192
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://example.com/#website",
        "name": "Студия «Линия»",
        "url": "https://example.com/",
        "inLanguage": "ru",
        "publisher": { "@id": "https://example.com/#organization" }
      }
    ]
  }
</script>
```

Хлебные крошки. У каждого пункта два адреса одного URL: `item` читает Google, `url` — Яндекс. Названия совпадают с видимой цепочкой «Главная / раздел».

```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Главная",
      "item": "https://example.com/",
      "url": "https://example.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Услуги",
      "item": "https://example.com/uslugi/",
      "url": "https://example.com/uslugi/"
    }
  ]
}
```

Документация: [микроразметка Google](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data), [хлебные крошки Google](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb), [название сайта](https://developers.google.com/search/docs/appearance/site-names), [навигационная цепочка Яндекса](https://yandex.ru/support/webmaster/ru/supported-schemas/navigation-links).

### FAQ, HowTo, QAPage

Расширенный FAQ Google не показывает с 7 мая 2026. `FAQPage` и `HowTo` в разметку ради сниппета не добавляют. Запись в [списке обновлений Search](https://developers.google.com/search/updates), исходное объявление — [изменения FAQ и HowTo](https://developers.google.com/search/blog/2023/08/howto-faq-changes).

`QAPage` у Яндекса — отдельный формат: одна страница с одним вопросом пользователей и ответами. Три вопроса компании на лендинге остаются обычным текстом.

### llms.txt

Для Google Поиска файл `llms.txt` не нужен и на видимость не влияет. Отдельные теги «для ИИ» не заменяют четыре слоя выше. См. [гайд по генеративным ответам](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

---

## Яндекс

Сниппет Яндекс собирает из тех же `title` и `description`. Ниже то, что в его документации устроено отдельно. [Заголовок и описание](https://yandex.ru/support/webmaster/ru/search-results/title-and-description).

- **Язык.** `html lang="ru"`. Второй языковой версии нет — `hreflang` не добавляют.
- **HTTPS.** Редирект 301, не `rel="canonical"`.
- **Хлебные крошки.** Поле `url` в каждом `ListItem`, рядом с `item`.
- **Значок.** Один `link rel="icon"`. Файл в корне с именем `favicon`. Яндекс рекомендует SVG. Подойдут ещё PNG или ICO 120×120, 32×32 или 16×16. При нескольких `rel="icon"` робот может взять любой. `apple-touch-icon` к этому списку не относится. [Фавиконка](https://yandex.ru/support/webmaster/ru/search-results/favicon).
- **Регион.** В HTML-тег не кладётся. Его задают в Вебмастере: «Представление в поиске → Региональность». На страницах регион уже написан текстом («удалённо по России»), в `Organization.areaServed` — страна. [Региональность](https://yandex.ru/support/webmaster/ru/site-geography/site-region).
- **Подтверждение сайта.** Свой код из кабинета, на главной:

```html
<meta name="yandex-verification" content="КОД_ИЗ_ЯНДЕКС_ВЕБМАСТЕРА" />
```

Чужой или выдуманный код не публикуют. То же для Google и Bing:

```html
<meta name="google-site-verification" content="КОД_ИЗ_SEARCH_CONSOLE" />
<meta name="msvalidate.01" content="КОД_ИЗ_BING_WEBMASTER" />
```

Аналитику подключают после публикации своим идентификатором. Счётчик Метрики: [номер счётчика](https://yandex.ru/support/metrica/general/tag-id.html).

IndexNow — необязательный сигнал для Яндекса и Bing, что страница изменилась. Google его не использует. На статическом сайте без частых правок можно обойтись картой сайта в кабинете.

---

## Open Graph и Twitter

Превью при расшаривании. Позиции не поднимает. Текст держите рядом с `title` и `description`. Картинка — обычный PNG 1200×630, не SVG: так её понимают превью.

```html
<meta property="og:type" content="website" />
<meta property="og:locale" content="ru_RU" />
<meta property="og:site_name" content="Студия «Линия»" />
<meta property="og:title" content="Тема этой страницы — Студия «Линия»" />
<meta
  property="og:description"
  content="Что на странице и зачем её открывать."
/>
<meta property="og:url" content="https://example.com/путь/" />
<meta property="og:image" content="https://example.com/images/og.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Студия «Линия»" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Тема этой страницы — Студия «Линия»" />
<meta
  name="twitter:description"
  content="Что на странице и зачем её открывать."
/>
<meta name="twitter:image" content="https://example.com/images/og.png" />
```

---

## Внешние сигналы

Ссылки с других сайтов, упоминания названия и доверие к автору репозиторием не создаются. На странице можно не мешать им: понятно, кто отвечает за текст, есть реальная почта, нет купленных отзывов и нарисованных звёзд.

Полезный текст: [creating helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

---

## Чем проверяют

| Задача                            | Инструмент                                                                                                | Что сверять                                                                    |
| --------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Индексация, обход, запросы, карта | [Google Search Console](https://search.google.com/search-console/about)                                   | `robots.txt`, `sitemap.xml`, код верификации                                   |
| То же для Bing                    | [Bing Webmaster Tools](https://www.bing.com/toolbox/webmaster/)                                           | `msvalidate.01`                                                                |
| То же для Яндекса                 | [Яндекс Вебмастер](https://webmaster.yandex.ru/)                                                          | `yandex-verification`, поле `url` в крошках, `/favicon.svg`, регион в кабинете |
| Запросы людей                     | [Яндекс Вордстат](https://wordstat.yandex.ru/)                                                            | Темы страниц, не мета-тег keywords                                             |
| Скорость                          | [PageSpeed Insights](https://pagespeed.web.dev/) и Lighthouse                                             | Шрифты, один CSS, размеры картинок                                             |
| Микроразметка                     | [Rich Results Test](https://search.google.com/test/rich-results) и валидатор в Вебмастере                 | JSON-LD на публичном HTTPS                                                     |
| Поведение                         | [Google Analytics](https://developers.google.com/analytics), [Яндекс Метрика](https://metrika.yandex.ru/) | Свой идентификатор, после публикации                                           |

Реклама — отдельный канал, не замена этим слоям: [Яндекс Директ](https://direct.yandex.ru/), [Google Реклама](https://ads.google.com/intl/ru_ru/home/).

Позиции смотрят после запуска. Сразу после правок цифры могут не меняться несколько недель.

---

## Перед публикацией

- Заменить `https://example.com` в canonical, Open Graph, JSON-LD, `robots.txt` и `sitemap.xml`.
- Заменить почту-заглушку.
- Написать свои title и description под реальные запросы. Одна страница — одна тема.
- Включить редиректы и проверить, что `/index.html` не открывается вторым адресом.
- Подтвердить сайт в Search Console, Bing Webmaster Tools и Яндекс Вебмастере, отправить карту сайта.
- В Вебмастере указать регион. Для работы по всей стране — «Россия».
- Вставить свои коды верификации и аналитики.
- Прогнать Rich Results Test и PageSpeed Insights по публичному HTTPS, не по файлу с диска.
- Убрать со страницы учебный блок, если у адреса должна остаться одна тема услуги.

---

## Официальные документы

- [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro) и [meta robots](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)
- [Карта сайта](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Канонические URL](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Заголовки](https://developers.google.com/search/docs/appearance/title-link) и [описание сниппета](https://developers.google.com/search/docs/appearance/snippet)
- [Микроразметка](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data), [хлебные крошки](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb), [название сайта](https://developers.google.com/search/docs/appearance/site-names)
- [Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals)
- [Полезный контент](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Заголовок и описание в Яндексе](https://yandex.ru/support/webmaster/ru/search-results/title-and-description), [навигационная цепочка](https://yandex.ru/support/webmaster/ru/supported-schemas/navigation-links), [канонический адрес](https://yandex.ru/support/webmaster/ru/robot-workings/canonical), [фавиконка](https://yandex.ru/support/webmaster/ru/search-results/favicon), [региональность](https://yandex.ru/support/webmaster/ru/site-geography/site-region)

---

## Aria-аттрибуты (аттрибуты для скрин=ридеров, которыми пользуются люди с ограниченными возможностями)

ARIA (Accessible Rich Internet Applications) — это набор атрибутов, которые делают веб-контент более доступным для людей с ограниченными возможностями, особенно для пользователей **скрин-ридеров**.

### Роли

```html
<!-- Ландшафтные роли -->
<header role="banner">Шапка сайта</header>
<nav role="navigation">Навигация</nav>
<main role="main">Основной контент</main>
<aside role="complementary">Боковая панель</aside>
<footer role="contentinfo">Подвал</footer>

<!-- Виджет роли -->
<button role="button">Кнопка</button>
<div role="tablist">Список вкладок</div>
<div role="tab" aria-selected="true">Вкладка 1</div>
<div role="tabpanel">Содержимое вкладки</div>

<!-- Абстрактные роли -->
<div role="presentation">Декоративный элемент</div>
<div role="none">Элемент без семантики</div>
```

### Свойства

```html
<!-- aria-expanded - развернут/свернут -->
<button aria-expanded="false" aria-controls="menu">Меню</button>
<div id="menu" hidden>Содержимое меню</div>

<!-- aria-selected - выбран -->
<li role="option" aria-selected="true">Выбранный пункт</li>

<!-- aria-checked - отмечен -->
<input type="checkbox" aria-checked="true" />

<!-- aria-disabled - отключен -->
<button aria-disabled="true">Отключенная кнопка</button>

<!-- aria-required - обязательное поле -->
<input type="email" aria-required="true" />

<!-- aria-invalid - неверное значение -->
<input type="email" aria-invalid="true" aria-describedby="email-error" />
<div id="email-error">Неверный формат email</div>
```
