---
title: Import/Export
sidebar_position: 20
---

## Подключение модульных скриптов

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

## Ошибка с зацикливанием импортов

```js title="file1.js"
import { testFile2 } from "./file1";

export function testFile1() {
  console. log (testFile2());
  return 42;
}

testFile1 ();
```

```js title="file2.js"
import { testFile1 } from "./file2"

export function testFile2){
  console. log (testFile1 ());
  return 10;
}
```

Так, как показано на примере выше, — делать не стоит. Ваш браузер начнёт «бегать по кругу» до не очень победного конца, то есть пока не переполнится стек вызовов.
