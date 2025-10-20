---
title: SEO
sidebar_position: 11
---

## SEO (Продвижение)

### Теги для SEO

```html
<!-- мета-тэги для seo -->
<meta
  name="keywords"
  content="ключевое слово1, ключевое слово2, ключевое слово3, ключевое слово4"
/>
<meta name="description" content="Краткое описание сайта илии приложения" />
<meta name="language" content="RU" />
<meta name="copyright" content="Компания" />
<meta name="robots" content="index, nofollow" />
<meta name="author" content="Name" />

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

**Семантическое ядро** - Список ключевых фраз. Составляется, как правило, для главной страницы. Составляется после анализа ключевых запросов в Google и Яндекс (`meta keywords`)

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

---

## Robots.tsx

[Docs](https://www.robotstxt.org/robotstxt.html)

Создаётся в корневой директории.

Чтобы поисковики не могли отслеживать, нужно указать:

```
User-agent: *
Disallow: /
```

Чтобы могли отслеживать:

```
User-agent: *
Allow: /

# optional - не отслеживать эти директории внутри сайта
Disallow: /private/
Disallow: /admin/
Disallow: /tmp/
```

<!-- - [Google Ads](https://ads.google.com/aw/campaigns/new/express?ocid=1082361030&cmpnInfo=%7B%228%22%3A%2278922292-d7a2-4266-b5df-6973325481a9%22%7D&subid=ru-ww-et-g-aw-a-tools-awhp%21o2&step=cbss&authuser=0&uscid=1082361030&__c=6898664470&euid=669671666&__u=2701374434&mode=signup)
- [Google-Marketing Platform](https://marketingplatform.google.com/about/)
- [Яндекс-Webmaster](https://webmaster.yandex.ru/) - Добавить сайт
- [SMM]()	Продвижение в соц. сетях -->

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
