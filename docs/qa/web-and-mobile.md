---
title: Web & Mobile
sidebar_position: 4
---

## Web

- Кроссбраузерное (Chrome, Safari, Edge, Firefox и др.)
- Кросплатформенное (Windows, Linux, MacOS, iOS и др.)
- Презентационный слой: Интерфейс, Адаптивность
- Бизнес-логика (API)

## Критерии оптимизированной веб-страницы

1. **Время** загрузки сайта
2. Работа сайта **без js**
3. Прогрессивное улучшение
4. Количество **запросов к серверу**
5. Отказ от **большого количества библиотек**
6. **Шрифты и изображения** - самые тяжёлые ресурсы (можно использовать тег picture)
7. Нужно ли загружать **кастомные шрифты**? (Есть же много системных)
8. Не стоит грузить шрифты, анимации, тяжелые картинки **на mobile** вообще (делаем @media на @font-face)
9. **Оптимизация изображений**. SVG вместо png для декорирования. Встроенный в html svg-спрайт
10. **Минификация и конкатинация** js и css
11. **Critical CSS** & Load CSS (встроенный css в html для первых 1000px высоты страницы)
12. **Google page speed**, **GT-Metrix**
13. **Web page test** (speed index около 1000 это круто)
14. **Кеширование и Storage**
15. **Отстутствие ошибок в консоли** и валидный код.

## Онлайн-сервисы для проверки оптимизации

* [Browserstack](https://www.browserstack.com/) - Реальные тестовые стенды
* [Statcounter](https://gs.statcounter.com/) - Статистика браузеров и ОС
* [PageSpeed Insights](https://pagespeed.web.dev/) - Тест оптимизации
* [Webpagetest](https://www.webpagetest.org/) - Тест оптимизации
* [Caniuse](https://caniuse.com/) - Актуальность html/css
* [Statcounter](https://gs.statcounter.com/) - Статистика браузеров
* [validator.w3.org](https://validator.w3.org/nu/) - Валидатор HTML
* [thinkwithgoogle](https://www.thinkwithgoogle.com/feature/testmysite/) - Скорость загрузки на Mobile
* [What is My Ip](https://bestvpn.org/whats-my-ip/) - Узнать свой IP
* [dynatrace](https://www.dynatrace.com/) - Тест производительности
* [PlaceIMG](https://placeimg.com/) - Генератор картинок

## Программы

* [Responsively](https://responsively.app/download) - Тест адаптивности

## Плагины Chrome

* [Wappalyzer](https://chrome.google.com/webstore/detail/wappalyzer-technology-pro/gppongmhjkpfnbhagpmjfkannfbllamg?hl=ru) - Мониторинг технологий
* [GraphQL Network Inspector](https://chrome.google.com/webstore/detail/graphql-network-inspector/ndlbedplllcgconngcnfmkadhokfaaln?hl=en-GB) - Тестирование GraphQL
* [Font Ninja](https://chrome.google.com/webstore/detail/fonts-ninja/eljapbgkmlngdpckoiiibecpemleclhh) - Мониторинг шрифтов
* [Pix to pix](https://chrome.google.com/webstore/detail/pix-to-pix-pixel-perfect/binboaimbgchaamickjnhgjdccohndin?hl=ru) - Тестирование дизайна
* [Fake Filler](https://chrome.google.com/webstore/detail/fake-filler/bnjjngeaknajbdcgpfkgnonkmififhfo/related) - Заполнитель форм
* [Fake Data](https://chrome.google.com/webstore/detail/fake-data-a-form-filler-y/gchcfdihakkhjgfmokemfeembfokkajj) - Заполнитель форм

## Плагины Firefox

* [Easy XSS](https://addons.mozilla.org/ru/firefox/addon/easy-xss/) - Проверка безопасности

## Статистика (РФ 2022)

### OC

- **Windons** - 88%
- **MacOS** - 5%
- **Linux** - 2% (по сути можно принебречь)

### Браузеры

- **Chrome** - 52%
- **Yandex** - 21%
- **Opera** - 10%
- **Firefox** - 8%
- **Edge** - 5%

***

## Mobile

1. Версии мобильных ОС обновляются чаще чем десктопные (Android ≈ 72%, iOS ≈ 28%)
2. Производительность мобильных устройств ниже, чем десктопных
3. Ограниченная площадь экрана
4. Разные режимы отображения (Portrait and Landscape)
5. Производительность может зависит от оператора (скорость сети 3G, 4G) или от Wifi
6. Планшеты и парк устройств Android очень широк, что усложняет тестирование
7. Могут влиять фоновые процессы (Звонок, SMS, Будильник и т.д.)

***

## Виды мобильных приложений

- **Веб-версия** - через браузер (по сути веб-приложение в браузере с адаптивностью)
- **Нативные** - специально написанные для платформы (Android - Java, iOS - Swift, Object C)
- **Гибридные** - веб-версия, завернутая в нативный контейнер (WebView)

***

## Как можно тестировать

- Реальное устройство
- Эмулятор
- Интернет-сервисы

***

## Категории тестирования

I. **Жизненный цикл приложения**
  - Установка/обновение/удаление (Google Play, App Store)
  - Запуск
  - Работа в фоне
  - Кэш (хранение, очистка)
  - Системные прерывания (на фоновые процессы)

II. **Сеть**
  - Прерывание сети/Без сети
  - Медленная сеть
  - Без сети/Режим полета
  - Через Wifi
  - Геолокация

III. **Безопасность**
  - Пароли
  - Связь с сервером
  - Проверка на утечку данных

IV. **Ресурсы устройства**
  - Недостаточнор свободного места
  - Неподдерживаемые функции

V. **Контент**
  - платтный
  - общедоступный
  - конфиденциальный

VI. **Юзабилити**
  - Разные ширины экранов
  - Размер элементов удобен для нажатия
  - Спиннеры и лоадеры
  - Поддержка нативных жестов

***

## Инструменты для тестирования
  - **Android**: Android Studio, Android Debug, Fiddler, Google Chrome
  - **iOS**: Xcode, Apple Configurator, iTools, Fiddler, WireShark, Safari
  - **Интернет-сервисы**: [Browserstack](https://www.browserstack.com/)

## Статистика (РФ 2022)

### OC

- **Android** - 69%
- **iOS** - 30%
- **Samsung** - 0,2% (можно принебречь)

### Браузеры

- **Chrome** - 58%
- **Safari** - 27%
- **Yandex** - 9%
- **Samsung** - 2,6% (можно принебречь)
- **Opera** - 1,9% (можно принебречь)

***

## Bug-report должен включать:

1. На каком тестовом сервере воспроизводится баг
2. Тип устройства, версия ОС, браузер (если гибридное)
3. Приложить скриншоты или видеозапись

