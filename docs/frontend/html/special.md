---
title: Спец-тэги
sidebar_position: 5
---

# Спец-тэги

## &lt;iframe&gt;

Фрейм это как бы часть стороннего сайт внутри текущего сайта, который находится в отдельном блоке.

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

* [YouTube](https://www.youtube.com/)
* [ВК](https://vk.com/video?z=video-106986602_456239036%2Fpl_cat_trends)
* [Яндекс-карты](https://yandex.ru/dev/maps/) 
* [Google-карты](https://developers.google.com/maps?hl=ru)
* Различные сторонние виджеты

***

## &lt;canvas&gt;

```html
<canvas id="myCanvas" width="160" height="90">Текст при незагрузке</canvas>
```

Контейнер для векторной графики, реализованной через JS.

***

## &lt;audio&gt;

```html
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

***

## &lt;video&gt;

```html
<video width="480" controls poster="https://archive.org/download/WebmVp8Vorbis/webmvp8.gif" >
  <source src="https://archive.org/download/WebmVp8Vorbis/webmvp8_512kb.mp4" type="video/mp4">
  <source src="https://archive.org/download/WebmVp8Vorbis/webmvp8.ogv" type="video/ogg">
  <source src="https://archive.org/download/WebmVp8Vorbis/webmvp8.webm" type="video/webm">
  Your browser doesn't support HTML5 video tag.
</video>
```

***

## &lt;noscript&gt;

Показывается при откюченном JS в браузере.

```html
<noscript>
  Этот текст будет показал, если у браузера отключен JS
</noscript>
```
