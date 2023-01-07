---
title: Модули +++
sidebar_position: 1
---

## Псевдомодульные скрипты

Как пользовались раньше

```js title="file1.js"
'use strict';

const TAG = 'div';

const element = document.createElement(TAG);

element.textContent = 'Мой первый тег';
document.body.appendChild(element);
```

```js title="file2.js"
'use strict';

const TAG = 'div';

const element = document.createElement(TAG);

element.textContent = 'Мой второй тег';
document.body.appendChild(element);
```

```html title="index.html"
...
<script src="file1.js"></script>
<script src="file2.js"></script> 
```

Будет возникать ошибка, так как имеются одинаковые названия переменных (const TAG). И при подключении файлов они окажутся в одной области видимости, и интерпритатор выдаст ошибку 

```Uncaught SyntaxError: Identifier 'TAG' has already been declared```

Но придумали один хак на замыканиях, можно в каждом файле изолировать область видимости функций с помощью паттерна IIFE — самовызывающиеся функции. Любые переменные внутри IIFE невидимы для внешнего мира:

```js title="file1.js"
'use strict';

(function () {
  const TAG = 'div';

  const element = document.createElement(TAG);

  element.textContent = 'Мой первый тег';
  document.body.appendChild(element);
})();
```

```js title="file2.js"
'use strict';

(function () {
    const TAG = 'div';

    const element = document.createElement(TAG);

    element.textContent = 'Мой второй тег';
    document.body.appendChild(element);
})();
```

```html title="index.html"
...
  <script src="file1.js"></script>
  <script src="file2.js"></script>
```

Теперь все ОК, скрипты выполняют свою задачу

***

### windw.utils

Можно сохранять функции в глоб. объект window (чтобы можно было их использовать из любого места).

```js title="file1.js"
window.utils = (function () {
  // Здесь суперреализации функций, которые хочется переиспользовать в проекте
  function mySuperFunc1() {
    console.log('utils.mySuperFunc1');
  }

  function mySuperFunc2() {
    console.log('utils.mySuperFunc2');
  }

  return {
    mySuperFunc1,
    mySuperFunc2,
  };
})();
```

```js title="file2.js"
  (function () {
    // Здесь какая-то суперреализация функций, которые хочется переиспользовать много где в проекте

    function myOtherSuperFunc1() {
      window.utils.mySuperFunc1(); // Вызывали сохраненную функцию
      console.log('otherUtils.myOtherSuperFunc1');
    }

    function myOtherSuperFunc2() {
      console.log('otherUtils.myOtherSuperFunc2');
    }

    myOtherSuperFunc1();

    // Можно сохранять в кастомные поля window
    window.otherUtils = {
      myOtherSuperFunc1,
      myOtherSuperFunc2,
    };

    // или так
    window.myOtherSuperFunc1 = myOtherSuperFunc1;
    window.myOtherSuperFunc2 = myOtherSuperFunc2;
})();
```

Главное чтобы в каждом файле, в котором есть запись в window было уникальное поле, иначе будет перезапись свойства.

### Еще пример

```js title="dom.js"
(function () {
  const TAG = 'div';

  function createElement(tag = TAG, content) {
    const element = document.createElement(tag);
    element.textContent = content;
    return element;
  }

  window._createElement = createElement;
})();
```

```js title="render.js"
(function () {

  const TAG = 'p';

  function renderDOM(selector, content) {
    const root = document.querySelector(selector);

    if (!root) {
      return;
    }

    const element = window._createElement(TAG, content); // createElement из файла dom.js
    root.appendChild(element);
  }
  window._renderDOM = renderDOM;
})();

```

```js title="reverse.js"
(function () {
  function reverse(str) {
    return str.split('').reverse().join('');
  }

 window._reverse = reverse;
})();
```

```html title="index.html"
<body>
  <div class="root"></div>

  <script src="dom.js"></script>
  <script src="render.js"></script>
  <script src="reverse.js"></script>
  <script>
    window._renderDOM('.root', window._reverse('sseccus'));
  </script>
</body>
```

#### Варианты сохранения кастомных полей в window

```js
window._reverse = reverse; // window._reverse();

window._reverse = { reverse }; // window._reverse.reverse();

// window._reverse.reverse();
window._reverse = (function () {
  function reverse(str) {
    return str.split('').reverse().join('');
  }

  return { reverse };
})();
```

***

## Модульные скрипты

Позволяет писать изолированные и атомарные модули. В них могут присутствовать переменные с одинаковыми названиями, но они будут друг от друга изолированы по области видимости.

В браузерных скриптах требуется указать аттрибут type="module". При локальносм использовании не будет работать (сработает CORS), нужно поднимать сервер.

```html
...
  <script src="./script1.js" type="module"></script>
  <script src="./script2.js" type="module"></script>
</body>
```

Модули будут работать только с директивой 'use strict'. ```export``` помечает, какие фрагменты кода должны быть доступны вне модуля;

```js title="script1.js"
'use strict';

export const a = 1;
export const b = 1;
export const c = 3;

export default { a, b, c };
```

```import``` подключает части модуля, размеченные через export. Дефолтный импорт можно именовать как угодно, именованные должны совпадать, но можно изменять их название через as. 

```js title="script2.js"
'use strict';

import defaultImport, { a, b, c, c as copyOfC } from './script1.js';

console.log('defaultImport', defaultImport); // { 1, 2, 3 }

console.log('a', a); // 1
console.log('b', b); // 2
console.log('c', c); // 3
console.log('copyOfC', copyOfC); // 3
```

### Ошибка с зацикливанием импортов

```js title="file1.js"
import { testFile2 } from "./file1";

export function testFile1() {
  console. log (testFile2());
  return 42;
}

testFile1();
```

```js title="file2.js"
import { testFile1 } from "./file2"

export function testFile2() {
  console.log(testFile1());
  return 10;
}
```

Так, как показано на примере выше, — делать не стоит. Ваш браузер начнёт «бегать по кругу» до не очень победного конца, то есть пока не переполнится стек вызовов.
