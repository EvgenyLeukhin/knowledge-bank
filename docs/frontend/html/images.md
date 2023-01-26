---
title: Изображения
sidebar_position: 7
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

## Форматы изображений

- ### JPEG

  <img src="../../../../img/html/guitar.jpg" width="350" alt="guitar.jpg" />

  **Самый распространнённый формат**, подходящий для ФОТОГРАФИЙ, различных изображений, которым нужна полноцветность, но не нужна прозрачность. Можно иммитировать прозрачность делая цвет фона у JPEG такой же как в контейнере. 1991 г
  
  - Небольшой вес
  - Гибкость в настройке качества (обычно 60-90%)
  - Огромное кол-во цветов (16 млн.)
  - Не поддерживает прозрачность
  - Сжатие с потерями (появляются артефакты)
  - Не подходит для чертежей и схем, где нужна чёткость при маштабировании
  - Всегда прямоугольник

  ***

- ### PNG

  <img src="../../../../img/html/guitar.png" width="350" alt="guitar.png" />

  Поддерживает прозрачность PNG-24 (или просто PNG). Самый лучший и современный формат изображений. Используется для всех полноцветных изображений, которым нужна прозрачность или полупрозрачность, отсутствие изображений, для спрайтов.

  
  - Универсальный формат и для изображений, и для схем
  - Сжатие без потерь (отсутствуют артефакты)
  - Поддерживает прозрачность и полупрозрачность (255 градаций полупрозрачности)
  - Огромное кол-во цветов (16 млн.)
  - Современный формат
  - Большой вес на хорошем качестве

  ***

- ### SVG

  <img src="../../../../img/html/shoes.svg" width="250" alt="shoes.svg" />

  Векторное изображение (Рисунки создаются математическими уравнениями, а не точками как в растровой графике).

  - Маштабируемость без потери качества
  - Поддерживает прозрачность и полупрозрачность
  - Огромное кол-во цветов
  - Может быть анимированным
  - Текст в SVG воспринимается как текст
  - Большой вес при большом содержании
  - Сложность разработки и редактирования

  ***

- ### GIF

  <img src="../../../../img/html/guitar.gif" width="250" alt="guitar.gif" />
  <img src="../../../../img/html/Lev-peredayot-privet.gif" width="250" alt="Lev-peredayot-privet.gif" />

  Формат для анимаций и мелкой графики, не требующих высокого качества. 1986

  - Небольшой вес
  - Сжатие без потерь (без артефактов)
  - Поддерживает прозрачность
  - Поддерживает анимации
  - 256 цветов
  - Плохое качество изображений
  - Не поддерживает полупрозрачность (прозрачность бинарная: пиксель либо прозрачный, либо нет)
  - Сейчас в основном только для анимаций, просто для изображений уже никто не использует

  ***
  
- ### WEBP

  <img src="../../../../img/html/guitar.webp" width="250" alt="guitar.webp" />

  Разработан Google специально для web. Самый современный формат, небольшой вес. 2010 год
  
  В среднем вес картинок сокращается на 25–35% при аналогичном качестве, если сравнивать с png.
  
  - Поддержка анимации
  - Поддержка уже хорошая, но слабое распространение
  - Непопулярность, но перспективность в будущем
  - Слабая поддержка программами для работы с графикой

  ***

- ### PNG-8

  <img src="../../../../img/html/guitar-png8.png" width="250" alt="guitar-png8.png" />

 	Устарел. 1996 г. Напоминает GIF. Используется для мелкой неполноцветной графики как альтернатива GIF.

  - Сжатие лучше, чем у GIF
  - Подходит для схем, чертежей и текста
  - Поддерживает прозрачность
  - 256 цветов
  - При прозрачности требует обводки
  - Не поддерживает полупрозрачность

  ***

- ### BMP

  <img src="../../../../img/html/guitar.bmp" width="250" alt="guitar.bmp" />

  Большой вес. В вебе практически не используется, хотя браузеры поддерживают. Разработан Microsoft.

  ***

- ### ICO

  <img src="../../../../img/html/guitar.ico" width="35" alt="guitar.ico" />

  Формат хранения файлов значков в Microsoft Windows. Поддерживаемы размеры 16, 32 и 48 пикселей. Также используются значки с размером 24, 40, 60, 72, 92, 108, 128 пикселей. Раньше использовался для фавиконок.

  ***

- ### Base64

  ```
  TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0
  aGlzIHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1
  c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0
  aGUgY29udGludWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdl
  LCBleGNlZWRzIHRoZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4=
  ```

  ```css
  .some_background {
	  background-image: url("data:image/ТИП;base64,КОД");
  }
  ```

  ```html
  <img src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA
    AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO
    9TXL0Y4OHwAAAABJRU5ErkJggg==" alt="Red dot" />
  ```

  Cтандарт кодирования двоичных данных при помощи только 64 символов ASCII. Можно вставлять в html или css код, который будет конвертироваться в изображения. Хорошо подходит для мелкой графики (svg-иконок и небольших изображений). Меньше запросов к серверу.
