---
title: Спец-тэги
sidebar_position: 5
---

# Спец-тэги

## &lt;iframe&gt;

Фрейм это как бы сайт внутри сайта, который находится в отдельном блоке.

```html
<!-- Фрейм с YouTube -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/WUxrxSv3sjQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!-- Фрейм с ВК -->
<iframe src="https://vk.com/video_ext.php?oid=-106986602&id=456239036&hash=50d82228e8f2e97c&hd=2" width="853" height="480" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>

<!-- Фрейм с Яндекс-музыки -->
<iframe frameborder="0" style="border:none;width:100%;height:180px;" width="100%" height="180" src="https://music.yandex.ru/iframe/#track/25786/2484799">Слушайте <a href='https://music.yandex.ru/album/2484799/track/25786'>Gimme! Gimme! Gimme! (A Man After Midnight)</a> — <a href='https://music.yandex.ru/artist/9367'>ABBA</a> на Яндекс Музыке</iframe>
```

### Фрейм с YouTube

<iframe width="560" height="315" src="https://www.youtube.com/embed/WUxrxSv3sjQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Фрейм с ВК
<iframe src="https://vk.com/video_ext.php?oid=-106986602&id=456239036&hash=50d82228e8f2e97c&hd=2" width="560" height="315" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>

### Фрейм с Яндекс-музыки
<iframe frameborder="0" width="100%" height="180" src="https://music.yandex.ru/iframe/#track/25786/2484799">Слушайте <a href='https://music.yandex.ru/album/2484799/track/25786'>Gimme! Gimme! Gimme! (A Man After Midnight)</a> — <a href='https://music.yandex.ru/artist/9367'>ABBA</a> на Яндекс Музыке</iframe>

* YouTube
* [ВК](https://vk.com/video?z=video-106986602_456239036%2Fpl_cat_trends)
* [Яндекс-карты](https://yandex.ru/dev/maps/) 
* [Google-карты](https://developers.google.com/maps?hl=ru)
* Различные Виджеты

***

## &lt;canvas&gt;

```html
<canvas id="myCanvas" width="160" height="90">Текст при незагрузке</canvas>
```

Контейнер для векторной графики, реализованной через JS.

***

## &lt;audio&gt;

***

## &lt;video&gt;

***

## &lt;noscript&gt;

Показывается при откюченном JS в браузере.

```html
<noscript>
  Этот текст будет показал, если у браузера отключен JS
</noscript>
```
