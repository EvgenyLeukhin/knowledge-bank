---
title: Web
sidebar_position: 7
---

## Тестирование web-приложений

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
* [PageSpeed Insights](https://pagespeed.web.dev/) - Тест оптимизации
* [Webpagetest](https://www.webpagetest.org/) - Тест оптимизации
* [Caniuse](https://caniuse.com/) - Актуальность html/css
* [Statcounter](https://gs.statcounter.com/) - Статистика браузеров
* [validator.w3.org](https://validator.w3.org/nu/) - Валидатор HTML
* [thinkwithgoogle](https://www.thinkwithgoogle.com/feature/testmysite/) - cкорость загрузки на Mobile
* [What is My Ip](https://bestvpn.org/whats-my-ip/) - Узнать свой IP
* [dynatrace](https://www.dynatrace.com/) - тест производительности