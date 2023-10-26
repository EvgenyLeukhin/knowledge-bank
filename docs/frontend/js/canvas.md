---
title: Canvas
sidebar_position: 19
---

## Настройка

В html-документе. Это блочный контейнер, он поддаётся блочной стилизации (по ум* размер 300х150).

Помещаем в нужный нам контейнер в html-документе

```html
<canvas id="myCanvas" width="160" height="90">Текст при незагрузке</canvas>
```

```css
#myCanvas {...}
```

```js
const canvas = document.getElementById('myCanvas');

// Контекст отрисовки (2d или 3d)
const ctx = canvas.getContext('2d');

// Дальше можно приступать к рисованию
```

---

## Фигуры


### ctx.fillRect - Прямоугольник с заливкой

- 10, 10 - координаты верх. лев. угла (x, y)
- 310 - ширина, 170 - высота (в пикселях)

```js
ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'; // Цвет заливки
ctx.fillRect(10, 10, 310, 170);
```

---

### ctx.strokeRect - Прямоугольник без заливки

- 75, 0 - координаты верх. лев. угла (x, y)
- 150 - ширина, 150 - высота (в пикселях)

```js
ctx.strokeStyle = 'blue';// Цвет обводки
ctx.strokeRect(75, 0, 150, 150);
```

---

### ctx.clearRect - Очистка холста

Указываются нулевые координаты и ширина и высота всего холста

```js
ctx.clearRect(0, 0, 300, 150);
```

---

### Path - Сложные фигуры (Контуры)

```js
ctx.beginPath(); // Начало контура
ctx.moveTo(x, y); // Перенести перо
// Рисовать от точки перемещения до указанной
ctx.lineTo(x, y);
// Перемещать по нелинейной функции Безье (x,y в конце)
ctx.bezierCurveTo(140, 90, 110, 90, 100, 100); ctx.closePath(); // Конец контура
```

---

## Градиент

```js
// линейный
const gradient = ctx.createLinearGradient(0, 0, 300, 150);
// Колорстопы
gradient.addColorStop(0, 'green');
gradient.addColorStop(1, 'rgba(0, 255, 0, 0)');

ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 300, 150);
```

```js
// радиальный
const gradient = ctx.createRadialGradient(150, 72, 0, 150, 72, 72);
// Колорстопы
gradient.addColorStop(0, 'green');
gradient.addColorStop(1, 'rgba(0, 255, 0, 0)');

ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 300, 150);
```

---

## Текст

```js
// Цвет текста
ctx.fillStyle = '#000';

// Шрифт текста
ctx.font = 'Normal 30pt Arial';


// Координаты лев. нижней точки строки
ctx.fillText('Some text', 20, 50);

// Можно поменять привязку на лев. верх.
ctx.textBaseline = 'hanging';
```
---

## Примеры

```js
// DOM-элемент канваса

const canvas = document.querySelector('canvas');
// Контекст отрисовки
const ctx = canvas.getContext('2d');


// рисуем 1 прямоугольник 
(лев. верх. угол,   ширина, высота) - по ум. заливка чёрная
ctx.fillRect(0,0,  100, 100);


// заливка 2 прямоугольника - переопределение заливки
ctx.fillStyle = 'blue';
// рисуем 2 прямоугольник с новой заливкой
ctx.fillRect(200,0,  200, 200);



// создаём ЛИНЕЙНЫЙ ГРАДИЕНТ
 (координаты точек из какой в какую он перетекает)
const gradient1 = ctx.createLinearGradient(550,0,  850,0);
    gradient1.addColorStop(0.00,  'red');
    gradient1.addColorStop(0.25,  'orange');
    gradient1.addColorStop(0.50,  'yellow');
    gradient1.addColorStop(0.75,  'green');
    gradient1.addColorStop(1.00,  'blue');
// заливаем градиентом
ctx.fillStyle = gradient1;
// создаём прямоугольник с градиентом
ctx.fillRect(550,0,  300, 300);



// создаём РАДИАЛЬНЫЙ ГРАДИЕНТ
 (координаты центра первой окр(x,y,R) и второй)
const gradient2 = ctx.createRadialGradient(150,400,0,  150,400,50);
    gradient2.addColorStop(0,  'red');
    gradient2.addColorStop(1,  'orange');
// заливаем градиентом
ctx.fillStyle = gradient2;
// рисуем квадрат залитый рад. град.
ctx.fillRect(100,350,  100, 100);



// РАМКИ

// цвет рамки
ctx.strokeStyle = 'red';
// рисуем рамку
ctx.strokeRect(90,340,  120, 120);



// ОЧИСКА хоста (дырка на чёрном квадрате)

ctx.clearRect(0, 0, 15, 15);



// ФИГУРЫ

ctx.beginPath();
// ставим перо
ctx.moveTo(100, 100);
// хочу передвинуть перо на эти точки
ctx.lineTo(80, 60);
ctx.lineTo(110, 80);
ctx.lineTo(125, 40);
ctx.lineTo(140, 80);
ctx.lineTo(170, 60);
ctx.lineTo(150, 100);
ctx.lineTo(150, 100);
ctx.bezierCurveTo(140, 90, 110, 90, 100, 100);
ctx.stroke();


// ТЕКСТ

// кегль + гарнитура
ctx.font = '30px Consolas';
// чтобы не вылазил
ctx.textBaseline = 'hanging';

ctx.fillText('Привет!', 0, 120);
ctx.fillText('Как дела?', 0, 148);





// ТЕПЛОВЫЕ КАРТЫ

/**
 * Переменные, названные заглавными буквами, по соглашению, считаются
 * постоянными.
 * @constant {number}
 */
// размеры canvas
const TILE_SIZE = 256;

/** @constant {number} */
const DIAMOND_SIZE = 16;

/**
 * Функция getMapTile будет использоваться
 * для отрисовки прямоугольников поверх карты
 * @return {HTMLCanvasElement}
**/

const getMapTile = function() {
    // Каждый канвас будет замощен ромбами,
    // непрозрачность заливки которых будет означать
    // количество ресторанов под указанным ромбом.
    // Для простоты непрозрачность будем получать,
    // генерируя случайное число.

    // тег canvas сохраняем в пер.
    const canvasElement = document.createElement('canvas');

    // добавляем атрибуты
    canvasElement.setAttribute('width', TILE_SIZE);
    canvasElement.setAttribute('height', TILE_SIZE);

    // контекст
    const ctx = canvasElement.getContext('2d');

    const x;
    const y = -DIAMOND_SIZE / 2;
    const row = 1;

    while (y < TILE_SIZE) {
        x = row % 2 === 0 ? -DIAMOND_SIZE / 2 : 0;

        while (x < TILE_SIZE) {
            drawDiamond(ctx, DIAMOND_SIZE, x, y);
            x += DIAMOND_SIZE;
        }

        y += DIAMOND_SIZE / 2;
        row++;
    }

    // добавляем canvas на страницу
    return canvasElement;
};

/**
 * Рисует ромб, вписанный в прямоугольник
 * с заданными координатами
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} size
 * @param {number} x
 * @param {number} y
 */

const drawDiamond = function(ctx, size, x, y) {
    ctx.beginPath();
    ctx.moveTo(x + size / 2, y);
    ctx.lineTo(x + size, y + size / 2);
    ctx.lineTo(x + size / 2, y + size);
    ctx.lineTo(x, y + size / 2);
    ctx.lineTo(x + size / 2, y);
    ctx.fillStyle = getRandomColor();
    ctx.fill();
};

/** @return {string} */
const getRandomColor = function() {
  return 'rgba(30, 128, 30, ' + (Math.random() * 0.6).toFixed(1) + ')';
};

document.body.appendChild(getMapTile());


// Замощение квадратами
function draw() {
  for (const i=0;i<6;i++){
    for (const j=0;j<6;j++){
      ctx.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' + Math.floor(255-42.5*j) + ',0)';
      ctx.fillRect((j*25) + 300, (i*25) + 300,25,25);
    }
  }
}
draw();
```

