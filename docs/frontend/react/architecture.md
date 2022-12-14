---
title: Архитектура +++
sidebar_position: 1
---

## React [(docs)](https://ru.reactjs.org/)

Библиотека использующая:

- Virtual DOM, DOM который монтируется через JS 
- Жизненный цикл компонентов
- SPA. Смена роутов без перезагрузки страницы
- Модульность. Во внутрь компонента можно импортировать все что угодно
- ES6, jsx-шаблонизацию и синтаксический сахар

## Хороший тон в React-проектах (мой манифест)

А архитектуре приложения придерживаться концепции [Atomic design](https://bradfrost.com/blog/post/atomic-web-design/), где должно быть все строго структурировано и что-то большое должно собираться из чего-то малого.

- Соблюдать **единство стиля** офрмления кода и архитектуры проекта.
- Стиль оформления кода и архитектура проекта **должны быть описаны в README.md**, включая базовые примеры использования различного функционала (как создавать новую страницу/компонент, как подключать стор, как создавать новый стор, как делать запрос и т.д.).
- **Примеры взаимодействия** с API также должны быть описаны в README.md.
- В идеале, если новый разработчик приходит на проект, он **должен получить все необходимые сведения, прочитав README.md**.
- Все файлы проекта должны быть **строго сгруппированы и разделены по директориям**.
- Чтобы не было больших компонентов (портянок) нужно их **разбивать на более мелкие под-компоненты** (декомпозировать, добавлять в директорию parts/).
- В идеале, файл компонента должен **размещаться на экране IDE без скрола**.
- Файлы отдельных роутов (страниц) или объемных компонентов всегда **должны быть hoc-компонентами**, в которые уже импортятся под-компонеты этой страницы из components/pages/pageName.
- Повторяющиеся блоки нужно **выносить в отдельные общие переиспользуемые компоненты** (DRY-концепция).
- В идеале, код должен быть **простым и понятным** (KISS-концепция). Понятные проекты хорошо масштабируются.
- В проекте **не должно быть большого количества абстракций**, код должен быть хорошо воспринимаемым. Кол-во абстракций нужно сводить к минимуму!.
- Самая сложная часть React-проектов - это **взаимодействие с API, асинхронность, формы и обработка данных**. К этой части проекта нужно относиться более тщательно.
- **Чем меньше кода - тем лучше**. (Хороший код - это код, которого нет).
- Если рефакторинг и оптимизация кода добавляет абстракций и ухудшает читаемость, то **такой рефакторинг плохой** (излишняя оптимизация и оверинжениринг).
- Использовать **только функциональные компоненты** (не использовать классоовые вообще, классы в JS - это зло!).
- **TypeScript должен быть простым и понятным**, не сильно с ним заигрываться.
- Статичные данные **выносить в отдельные файлы**.
- Нужно стараться **отделять логику от представления**. Логику лучше использовать в hoc-компонетах, а дальше передавать ее под-компонентам через пропсы..
- Использовать **линтеры, форматеры и прекоммитеры** (ESLint, Stylelint, prettier), и они должны помогать, а не мешать разработке.
- **"Не изобретать велосипед"** для каких-либо сложных реализаций, а можно использовать готовые библиотеки (все уже давно написано почти на все случаи жизни). С другой стороны, если какая-то библиотека используется в проекте один раз для чего-то одного, то нужно задуматься о её целесообразности.
- **Целая портянка пропсов - это плохо!!!** И потом такое трудно поддерживать, такие компоненты нужно декомпозировать.
- **Не вмешивать большое количество стилей** в логику компонента
***
- **Избегать излишней вложенности**. Если есть возможность что-ниб вынести в отдельный блок - то лучше выносить.
- **Еcли много условий**, то лучше их инкапсулировать в отдельную переменную.
- **Стараться не мутировать данные**, ухудшается читаемость кода.
- Принципы **DRY** (**Don't repeat yourself!**), **KISS («Keep it simple, stupid!»)**.
- **Читаемый код** лучше минималистичного.

## Config files

```
.env
.eslintignore
.eslintrc.json
.gitignore
.prettierignore
.prettierrc
next.config.js
package.json
README.md
tsconfig.json
```

## Директории
```
.vscode/
api/

components/
  icons/
  layout/
  pages/
    page1/
    page2/
    ...
    pageN/
  ui/

constants/
mock/

pages/
  page1/
  page2/
  ...
  pageN/

public/
  fonts/
  images/
  favicon.ico

styles/
types/
utils/

build/ (или dist/)
```

### Папка static

В ```static``` складывается весь статичный контент, который не требует постобработки бандлером, а только копируется в корневой уровень build. В основном это:

- иконки разного размера для браузеров,
- картинки, которые не импортируются в модулях и не требуют обработки,
- шрифты,
- HTML-файлы,
- файлы для поисковых роботов.


### Папка build

Бандлер обрабатывает файлы из ```srс/``` и помещает их в папку ```build/```, затем копирует файлы из ```static/``` в корневой уровень ```build/```. 

Файлы стилей рекомендуется импортировать из JavaScript, всё остальное стоит складывать в static. В библиотеках такая папка чаще всего называется dist (сокращённо от distributable — «подлежащий распределению»).

### Папка src

Есть несколько популярных принципов хранения файлов. Одни из них основаны на группировке файлов по «фичам», другие на группировке по типам файлов, а некоторые даже имеют спецификацию. Один из таких принципов — [атомарный дизайн](https://bradfrost.com/blog/post/atomic-web-design/). Не стоит много времени уделять выбору системы, можно менять её по мере роста проекта.

#### Дерево проекта может выглядеть так:

```bash
src/
├── components/
│   └── button/
│       ├── button.*css
│       ├── button.js
│       ├── button.tmpl.js
│       └── index.js
├── layout/
│   └── main/
│       ├── main.*css
│       ├── main.js
│       ├── main.tmpl.js
│       └── index.js
├── modules/
│   └── chats/
│       ├── utils
│       │   └── getFullname.js
│       │   └── getIsOnline.js
│       ├── components/
│       │   └── message/
│       │       ├── message.*css
│       │       ├── message.js
│       │       ├── message.tmpl.js
│       │       └── index.js
│       ├── chats.*css
│       ├── chats.js
│       ├── chats.tmpl.js
│       └── index.js
├── pages/
│   ├── home/
│   │   ├── modules/
│   │   │   ├── login/
│   │   │   │   ├── login.*css
│   │   │   │   ├── login.js
│   │   │   │   ├── login.tmpl.js
│   │   │   │   └── index.js
│   │   │   └── logout/
│   │   │       ├── logout.*css
│   │   │       ├── logout.js
│   │   │       ├── logout.tmpl.js
│   │   │       └── index.js
│   │   ├── home.*css
│   │   ├── home.js
│   │   ├── home.tmpl.js
│   │   └── index.js
│   └── about/
│       ├── about.*css
│       ├── about.js
│       ├── about.tmpl.js
│       └── index.js
└── utils/
    ├── get.js
    ├── http.js
    ├── isEmpty.js
    └── templator.js
```

### Папка src/components

Компоненты, которые будут использованы в двух и более модулях стоит держать в папке ```components/```. Эти компоненты не должны зависеть от внешнего состояния или иметь сторонние эффекты. Если компонент будет использован только в одном модуле, стоит поместить его в локальную папку ```./components``` для индикации явной зависимости. Такой подход позволяет не засорять общую папку components и упрощает переход к дизайн-системе, если в ней возникла необходимость. Если провести аналогию с системой атомарного хранения, то компоненты — это атомы и молекулы, так как часто в компонентах будут и группы компонентов (например, ```field```, который может содержать в себе ```input``` и ```label```).

### Папка src/pages

Если в проекте есть роутинг, то удобно держать страницы в папке ```pages/```. Обычно страницы отображают контент, собранный из импортированных модулей и компонентов. В рамках аналогии с атомарным дизайном это страницы.

### Папка src/utils

Многие приложения имеют утилитарные функции, которые могут использоваться как в одном, так и в нескольких местах. Чтобы определить подходящее место в проекте для  утилитарной функции, стоит ответить на два вопроса:

1. Функция может использоваться в одном файле или в его зависимых файлах? Тогда её лучше определить в локальной папке. Если таких функций несколько, можно поместить их в папку utils около файла.
2. Функция может использоваться в нескольких модулях или компонентах внутри общих папок? Тогда её лучше поместить в общую папку utils.

### Опционально

В больших проектах часто не хватает основной структуры, поэтому для удобства иногда используют дополнительные папки для семантического разделения по функциональности. 

В некоторых проектах можно встретить папку ```src/modules```. В ней собираются модули (иногда их называют контейнерами), которые являются связующим звеном между состоянием приложения и компонентами для его отображения. Иногда они содержат функционал, бизнес-логику, которая используется в нескольких местах приложения. Если модуль используется только на одной странице, лучше помещать его в локальную папку страницы, чтобы не засорять общую папку модулей. В атомарном дизайне модули можно считать организмами.
Страницы могут иметь несколько видов отображения (например, с хедером или без). Эти макеты можно держать в папке ```src/layout```. Макеты содержат общие для определённого вида страниц стили и внутри себя отображают контент из ```pages```. В системе атомарного дизайна это темплейты. Часто встречаются в проектах, использующих Gatsby.

### Общие рекомендации

Старайтесь максимально декомпозировать компоненты. Если есть стили — выносите в отдельный файл рядом с самим компонентом. Незачем хранить все CSS-файлы в отдельной папке — так только сложнее найти описание стиля.

```index.js``` каждого блока и компонента позволяют экспортировать только нужное. Например, вот так:

```jsx
export { default } from './button';
export { template as buttonTemplate } from './button.tmpl';
...
```

У компонента должна быть единая точка входа. В ```index.js``` можно делать все необходимые экспорты, но в рамках текущей папки и вложенных в неё (если такие есть). 
Старайтесь не мусорить в файлах компонентов и блоков. Например, для констант создайте файл ```const.js``` и перенесите их туда. Если же константа используется между разными компонентами, модулями или блоками — сделайте её общей.

***

### Readme

Даже законченный проект остаётся только заготовкой, пока им не начнут пользоваться. Но сначала пользователь должен понять, зачем ему пользоваться вашим кодом. В этом помогает файл README.

README — первое, что прочитает пользователь, когда попадёт в репозиторий на «Гитхабе». Хороший REAMDE отвечает на четыре вопроса:

- Готов ли проект к использованию?
- В чём его польза?
- Как установить?
- Как применять?

#### Бейджи

Быстро понять статус проекта помогают бейджи на «Гитхабе». Иногда разработчики ограничиваются парой бейджев, которые сообщат о статусе тестов кода:

![Бэйджи](https://raw.githubusercontent.com/yandex-praktikum/mf.messenger.praktikum.yandex.images/master/mf/b.png)

Если пользователь увидит ошибку в работе тестов, то поймёт: использовать текущую версию в важном проекте — не лучшая идея.

Бейджи помогают похвастаться достижениями: насколько популярен проект, как много разработчиков создавало этот код. Через бейджи можно даже пригласить пользователя в чат:

![Версии](https://raw.githubusercontent.com/yandex-praktikum/mf.messenger.praktikum.yandex.images/master/mf/vers.png)

В README **Webpack** строка бейджев подробно рассказывает о покрытии кода тестами. Когда проект протестирован, это вызывает доверие пользователя. Последний бейдж приглашает присоединиться к разработке. 

Другая строка убедит пользователя в стабильности инфраструктуры и популярности проекта. Последний бейдж зовёт в чат проекта.

#### Описание

Краткое опишите, какую задачу решает проект. Пользователь не верит обещаниям и не готов читать «полотна» текста. Поэтому в описании достаточно нескольких строк:

![Описание](https://raw.githubusercontent.com/yandex-praktikum/mf.messenger.praktikum.yandex.images/master/mf/desc.png)

Авторы **React** дробят описание на абзацы и списки — так проще пробежаться глазами по тексту и найти ключевую информацию.

Если у проекта есть сайт, добавьте ссылку в заголовок.

#### Установка

Лучше всего пользователя убеждает собственный опыт. Чем быстрее он начнёт пользоваться проектом, тем раньше почувствует пользу. Для этого помогите ему установить приложение: напишите краткую пошаговую инструкцию.

Если проект предназначен для разработчиков, добавьте информацию об установке тестовых версий. Например:

- `npm install` — установка стабильной версии,
- `npm start` — запуск версии для разработчика,
- `npm run build:prod` — сборка стабильной версии.

#### **Примеры использования**

Хорошо, если сразу после установки пользователь сможет решить свои задачи без изучения проекта. Это особенно верно, если ваш пользователь — не профессиональный разработчик. Но даже профессионал поймёт вас лучше, если показать примеры использования:

![Ссылки](https://raw.githubusercontent.com/yandex-praktikum/mf.messenger.praktikum.yandex.images/master/mf/link.png)

Для более подробных инструкции добавьте новые разделы или ссылки:

- на документацию,
- вики проекта,
- описание API.

В учебном проекте будут полезен раздел с описанием стиля кода и правилами разработки: как работать с ветками, пул-реквестами и релизами.

#### **Команда**

Если вы работаете в команде, укажите основных участников: им будет приятно, а новые разработчики охотнее присоединятся к проекту. «Гитхаб» — не просто инструмент, это социальная сеть разработчиков.

![Команда](https://raw.githubusercontent.com/yandex-praktikum/mf.messenger.praktikum.yandex.images/master/mf/team.png)

#### **Примеры README**

- «[Реакт](https://github.com/facebook/react)»,
- «[Эхо](https://github.com/labstack/echo)»,
- «[Вебпак](https://github.com/webpack/webpack)»,
- «[ТДенгине](https://github.com/taosdata/TDengine)»,
- «[Соул-хантинг](https://github.com/vladpereskokov/soul-hunting/)».
