---
title: Спец-тэги
sidebar_position: 10
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

  <!-- Субтитры -->
  <track kind="subtitles" src="video/jane.en.vtt" srclang="en" label="English">
  <track kind="subtitles" src="video/jane.ua.vtt" srclang="uk" label="Українська">
  <track kind="subtitles" src="video/jane.ru.vtt" srclang="ru" label="Русский" default>
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

***

## &lt;data&gt;

Специальный тэг, чтобы связать какой-ниб элемент в каким-ниб id.

```html
<ul>
  <li><data value="21053">Cherry Tomato</data></li>
  <li><data value="21054">Beef Tomato</data></li>
  <li><data value="21055">Snack Tomato</data></li>
</ul>
```

***

## &lt;template&gt;

Элемент &lt;template&gt; представляет собой механизм для хранения содержимого на стороне клиента, которое не отображается в процессе загрузки страницы, но впоследствии может быть заполнено с помощью JavaScript.

Содержимое &lt;template&gt; — это шаблон для фрагмента HTML, который может быть клонирован и вставлен в документ через скрипты. Обычно применяется для элементов с повторяющейся структурой, вроде списков, таблиц, списков &lt;select&gt; и др.

***

## &lt;embed&gt;

Флеш-анимации. Больше не используются.

```html
<embed src="../pict/masianya_dj.swf" width="700" height="800"
       type="application/x-shockwave-flash"
       pluginspage="http://www.macromedia.com/go/getflashplayer" border="1" />
```

***

## &lt;dialog&gt;

Контейнер для модального окна. 

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>dialog</title>

    <style>
    body {
      background: url(/example/image/shark.jpg) no-repeat;
      background-size: cover;
    }

    dialog {
      background: rgba(255, 255, 255, 0.7);
      width: 300px; 
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      border-radius: 5px;
    }
    </style>
  </head> 

  <body> 
    <button id="openDialog">Открыть окно</button>
    <dialog>
      <p>Полинезийцы называют Млечный путь Манго-Роа-И-Ата, 
        что в переводе с маори означает «Длинная акула на рассвете».</p>
      <p><button id="closeDialog">Закрыть окно</button></p>
    </dialog>

    <script>
    var dialog = document.querySelector('dialog');

    document.querySelector('#openDialog').onclick = function() {
      dialog.show(); // Показываем диалоговое окно
    }

    document.querySelector('#closeDialog').onclick = function() {
      dialog.close(); // Прячем диалоговое окно
    }
    </script>
  </body> 
</html>
```
