---
title: Изображения
sidebar_position: 2
---

По умолчанию изображения отрисовываются по такой ширине и высоте в пикселях как в исходном файле. Атрибутами width и height можно изменять исходный размер.

## ```<img>```

Как хак можно испольтзовать исходные изображения по ширине в 2 раза больше, чем оно отрисовываются в браузере, тогда будет поддержка ретины 2х. То есть, исходная картинка по ширине 1000px, а в html/css мы укахываем ей ширину 500px. Но есть недостаток, что на обычных экранах будет грузиться дольше. 

Если нужна гибкая настройка с **srcset** и **sizes**, то лучше использовать тэг ```<picture>```.

```html
<!-- Изображение с относительным источником c заданной шириной и высотой-->
<img src="../pict/kitty.png" width="250" height="100" alt="kitty.png" />

<!-- Изображение с абсолюиным источником -->
<img src="https://zapovednik96.ru/upload/delight.webpconverter/puppy/images/kitten.png.webp?164509253131594" alt="Картинка" />

<!-- Для ретиновых дисплеев будет грузиться файл pict800px.png -->
<img src="img/pict400px.png" width="400" srcset="img/pict800px.png 2x">

<!-- Можно указывать сразу несколько изображений для двух- и трехслойной ретины -->
<img src="img/pict400px.png" width="400" srcset="img/pict800px.png 2x, img/pict1200px.png 3x">
```

<img src="https://zapovednik96.ru/upload/delight.webpconverter/puppy/images/kitten.png.webp?164509253131594" alt="Картинка" />

## ```<picture>```

Более гибкая настройка тега ```<img>```. Включает медиазапросы и поддержку ретиновых экранов. Вроде бы как сам тэг picture не стилизуется, стили принимает только ```<img>```. 

```html
<picture>
  <source 
    type="image/jpg" 
    media="(min-width: 0) and (max-width: 600px)" 
    srcset="images/mobile-375x210-1x.jpg 1x, images/mobile-750x420-2x.jpg 2x"
  >
  <source 
    type="image/jpg" 
    media="(min-width: 601px) and (max-width: 960px)" 
    srcset="images/tablet-768x430-1x.jpg 1x, images/tablet-1536x860-2x.jpg 2x"
  >
  <source 
    type="image/jpg" 
    media="(min-width: 961px)" 
    srcset="images/desktop-1119x840-1x.jpg 1x, images/desktop-2238x1680-2x.jpg 2x"
  >
  <img src="images/desktop-1119x840-1x.jpg" alt="plug-image">
</picture>
```

## ```<figure>```

Если нужно выделить картинку и добавить ей заголовок. Используется редко. Можно всё сделать стилями.

```html
<figure>
  <p><img src="img/thumb1.jpg" alt="thumb1.jpg" /></p>
  <figcaption>Софийский собор</figcaption>
</figure>
```

## ```<svg>```