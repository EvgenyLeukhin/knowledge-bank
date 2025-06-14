---
title: Ссылки
sidebar_position: 5
---

Тэг строчный, но им можно оборачивать любые элементы, для того чтобы они были кликабельны.

- `download` - Скачать
- `rel` - relationship
- `target` - управление вкладкой (\_self и_blank)

```html
<!-- Простая ссылка на сторонний ресурс в новой вкладке -->
<a
  href="http://ya.ru"
  target="_blank"
  rel="nofollow noreferrer"
  title="Click me!"
>
  Ссылка на сайт Яндекс
</a>

<!-- Простая ссылка на внуренний ресурс -->
<a href="/knowledge-bank/docs/frontend/html/images/">Ссылка на "Изображения"</a>

<!-- Якорная ссылка на id -->
<a href="#списки">Якорная ссылка</a>

<!-- Ссылка на файл -->
<a href="https://tourpass.ru/docs/politic-person-data.pdf" target="_blank"
  >Ссылка на pdf-файл</a
>

<!-- Ссылка-обёртка -->
<a href="https://www.w3schools.com">
  <img border="0" alt="W3Schools" src="logo_w3s.gif" width="100" height="100" />
</a>

<!-- Ссылка на почтовый клиент -->
<a href="mailto:someone@example.com">Send email</a>

<!-- Ссылка на набор номера -->
<a href="tel:+4733378901">+47 333 78 901</a>

<!-- Ссылка на Telegram -->
<a href="https://t.me/eleukhin">eleukhin</a>
```

- <a href="http://ya.ru"  target="_blank" rel="nofollow" title="Click me!">Ссылка на сайт Яндекс</a>
- <a href="/knowledge-bank/docs/frontend/html/images/">Ссылка на внутреннюю страницу "Изображения"</a>
- <a href="#списки">Якорная ссылка</a>
- <a href="https://tourpass.ru/docs/politic-person-data.pdf" download>Ссылка на pdf-файл</a>
- <a href="mailto:someone@example.com">Send email</a>
- <a href="tel:+4733378901">+47 333 78 901</a>
- <a href="https://t.me/eleukhin">eleukhin Telegram</a>
