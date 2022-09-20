---
title: Изображения
sidebar_position: 2
---

export const MAP = ({children}) => (
  <div
    style={{
      border: '1px dashed deeppink',
      margin: '0 auto',
      width: '260px',
      height: '232px',
    }}>
    {children}
  </div>
);

По умолчанию изображения отрисовываются по такой ширине и высоте в пикселях как в исходном файле. Атрибутами width и height можно изменять исходный размер.

## ```<img>```

Как хак можно испольтзовать исходные изображения по ширине в 2 раза больше, чем оно отрисовываются в браузере, тогда будет поддержка ретины 2х. То есть, исходная картинка по ширине 1000px, а в html/css мы укахываем ей ширину 500px. Но есть недостаток, что на обычных экранах будет грузиться дольше. 

Если нужна гибкая настройка с **srcset** и **sizes**, то лучше использовать тэг ```<picture>```.

<img src="https://zapovednik96.ru/upload/delight.webpconverter/puppy/images/kitten.png.webp?164509253131594" alt="Картинка" />

```html
<!-- Изображение с относительным источником c заданной шириной и высотой-->
<img src="../pict/kitty.png" width="250" height="100" alt="kitty.png" />

<!-- Изображение с абсолюиным источником -->
<img src="https://zapovednik96.ru/upload/delight.webpconverter/puppy/images/kitten.png.webp?164509253131594" alt="Картинка" />

<!-- Для ретиновых дисплеев будет грузиться файл pict800px.png -->
<img src="img/pict400px.png" width="400" srcset="img/pict800px.png 2x">

<!-- Можно указывать сразу несколько изображений для двух- и трехслойной ретины -->
<img src="img/pict400px.png" width="400" srcset="img/pict800px.png 2x, img/pict1200px.png 3x">

<!-- С картой map для позиционирования ссылок -->
<img src="https://zapovednik96.ru/upload/delight.webpconverter/puppy/images/kitten.png.webp?164509253131594" alt="Картинка" />

<map name="infographic">
  <area shape="poly" coords="130,147,200,107,254,219,130,228"
        href="https://developer.mozilla.org/docs/Web/HTML"
        target="_blank" alt="HTML" />
  <area shape="poly" coords="130,147,130,228,6,219,59,107"
        href="https://developer.mozilla.org/docs/Web/CSS"
        target="_blank" alt="CSS" />
  <area shape="poly" coords="130,147,200,107,130,4,59,107"
        href="https://developer.mozilla.org/docs/Web/JavaScript"
        target="_blank" alt="JavaScript" />
</map>

<img usemap="#infographic" src="https://interactive-examples.mdn.mozilla.net/media/examples/mdn-info2.png" alt="MDN infographic" />
```
<MAP>
  <map name="infographic">
    <area shape="poly" coords="130,147,200,107,254,219,130,228"
          href="https://developer.mozilla.org/docs/Web/HTML"
          target="_blank" alt="HTML" />
    <area shape="poly" coords="130,147,130,228,6,219,59,107"
          href="https://developer.mozilla.org/docs/Web/CSS"
          target="_blank" alt="CSS" />
    <area shape="poly" coords="130,147,200,107,130,4,59,107"
          href="https://developer.mozilla.org/docs/Web/JavaScript"
          target="_blank" alt="JavaScript" />
  </map>

  <img usemap="#infographic" src="https://interactive-examples.mdn.mozilla.net/media/examples/mdn-info2.png" alt="MDN infographic" />
</MAP>

***

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

***

## ```<figure>```

Если нужно выделить картинку и добавить ей заголовок. Используется редко. Можно всё сделать стилями.

```html
<figure>
  <img src="img/thumb1.jpg" alt="thumb1.jpg" />
  <figcaption>Софийский собор</figcaption>
</figure>
```

***

## ```<svg>```

Векторная графика представленная в виде html-тэгов.

### Окружность

```html
<svg>
  <circle cx="50%" cy="50%" r="50" fill="red" />
</svg>
```

<svg>
  <circle cx="50%" cy="50%" r="50" fill="red" />
</svg>

### Прямоугольник

```html
<svg>
  <rect height="100px" width="150px" x="25%" y="30" rx="15" ry="10" fill="green" />
</svg>
```

<svg>
  <rect height="100px" width="150px" x="25%" y="30" rx="15" ry="10" fill="green" />
</svg>

### Многоугольники

```html
<svg>
  <polygon points="230,30 200,60 260,60" fill="maroon" />
  <polygon points="70,5 90,41 136,48 103,80 111,126 70,105 29,126 36,80 5,48 48,41" fill="chocolate" />
</svg>
```

<svg>
  <polygon points="230,30 200,60 260,60" fill="maroon" />
  <polygon points="70,5 90,41 136,48 103,80 111,126 70,105 29,126 36,80 5,48 48,41" fill="chocolate" />
</svg>

### Эллипсы

```html
<svg>
  <ellipse rx="80" ry="20" cx="50%" cy="50%" fill="lightgray" />
</svg>
```

<svg>
  <ellipse rx="80" ry="20" cx="50%" cy="50%" fill="lightgray" />
</svg>

### Линии

```html
<svg>
  <line x1="50 " y1="50 " x2="250 " y2="100 " stroke="deeppink " stroke-width="6" />
</svg>
```

<svg>
  <line x1="50 " y1="50 " x2="250 " y2="100 " stroke="deeppink " stroke-width="6" />
</svg>

### Ломанные

```html
<svg>
  <polyline points="30,50 40,10 80,100 0,30 70,25 10,85" stroke="pink" stroke-width="4" fill="none" />
</svg>
```

<svg>
  <polyline points="30,50 40,10 80,100 0,30 70,25 10,85" stroke="pink" stroke-width="4" fill="none" />
</svg>

### SVG-спрайты

```html
<!-- Вставить после открывающего тэга body -->
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <symbol id="svg-icon1">
    ...svg-код1...
  </symbol>

  <symbol id="svg-icon2">
    ...svg-код2...
  </symbol>
</svg>

<!-- Использование через id symbol -->
<svg width="136.1px" height="75px" viewBox="0 0 136.1 75">
  <use xlink:href="#svg-icon1"></use>
</svg>
```
