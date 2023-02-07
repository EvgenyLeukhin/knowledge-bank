---
title: Линтеры и тестеры
sidebar_position: 3
---

- [ESLint. Знакомство](https://medium.com/@catwithapple/eslint-%D0%B7%D0%BD%D0%B0%D0%BA%D0%BE%D0%BC%D1%81%D1%82%D0%B2%D0%BE-69ffc19edbf8)
- [ESLint в команде](https://habr.com/ru/post/322550/)
- [Держи свой код чистым с помощью ESLint](https://frontend-stuff.com/blog/eslint/)
- [Программируем лучше с ESLint, Prettier и TypeScript](https://tproger.ru/translations/setting-up-eslint-and-prettier/)

---

**Тема «Code style». Статический анализ кода**

- [EditorConfig](https://editorconfig.org/).

---

**Инструмент для скриптов**

- [ESlint](https://eslint.org/) — это инструмент статического анализа кода, написанного на любом выбранном стандарте JS.
- [Rules in ESLint](https://eslint.org/docs/latest/rules/);
- [Готовые конфиги](https://npms.io/search?q=eslint-config);
- Библиотека [TSLint - deprecated](https://www.npmjs.com/package/tslint);

---

**Полезное:**

- [ESlint. Знакомство](https://medium.com/@catwithapple/eslint-%D0%B7%D0%BD%D0%B0%D0%BA%D0%BE%D0%BC%D1%81%D1%82%D0%B2%D0%BE-69ffc19edbf8);
- [Сложно о простом](https://habr.com/ru/post/322550/);
- [Держи свой код чистым](https://frontend-stuff.com/blog/eslint/);
- Программируем лучше с [ESLint, Prettier и TypeScript](https://tproger.ru/translations/setting-up-eslint-and-prettier/).

***

Линтеры — это полезные инструменты, которые в пределах своих возможностей будут держать код «в чистоте». Чтобы они полностью раскрыли свой потенциал, нужно уделить время их дополнительной настройке.

## ESLint

[ESLint](https://eslint.org/). Он представляет собой инструмент статического анализа кода, написанного на любом выбранном стандарте JS. 
Поскольку он нужен только на этапе разработки кода, сохраняем его зависимости для разработки (```devDependencies``` в ```package.json```). Установка из npm:

```bash
npm install --save-dev eslint 
```

Правила линтера описывают в конфиге ```.eslintrc.json```. Можно использовать как JSON, так и JS:

```json
{
  "rules": {
    "no-unused-vars": 2,
    "max-len": [1, 100],
    "max-params": [2, 3]
    }
}
```

Правил очень много, полный список найдёте на [сайте разработчиков](https://eslint.org/docs/latest/rules/). Настройка всего «под себя» может занять много времени, но будет полезно один раз это сделать. Так, например, с редактором Vim. Он заслужил славу очень сложного инструмента и стал предметом многих мемов, но если один раз настроить его, Vim станет значительно удобнее. 
Для быстрого старта или чтобы не тратить время команды, которой надо супербыстро запустить проект, — существуют готовые наборы правил, например [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb):

```bash
npm install --save-dev eslint-config-airbnb 
```

Правила можно не только наследовать, но и переопределять:

```json
{
  "extends": "airbnb", // Здесь вы указываете, что наследуетесь от набора правил
  "rules": {
    "max-len": [2, 100],
    "max-params": [2, 3]
    }
} 
```

Наборы готовых конфигов можете [найти в npm](https://npms.io/search?q=eslint-config).

Бывают случаи, когда не нужно прогонять через линтер определённые файлы или папки. Варианты решения:

- При запуске линтера явно указать, проверять или не проверять определённые папки, префиксы или расширения файлов;
- Указать файл ```.eslintignore``` и прописать в нём, какие файлы или папки не трогать.

Например, не проверять node_modules, build или dist, минифицированные, собранные файлы:

```json
/build
**/*.min.js
/node_modules 
```

Иногда необходимо игнорировать правила в коде (одну или много строчек). Чтобы ESlint понимал, что именно пропустить, используйте комментарии:

```js
function onError(err, req, res, next) {
  /* eslint no-unused-vars: 0 */
  /* eslint max-params: [2, 4] */

  res.sendStatus(500);
} 
```

Для начала процесса достаточно в консоли ввести команду запуска бинарного файла: 

```bash
node_modules/.bin/eslint . 
```

ESlint умеет не только находить ошибки, но и исправлять их. Например, во всём проекте нет точки с запятой в конце строк, решили поставить потом. Если поправить правило в конфиге и  запустить линтер с определённым ключом, инструмент сам всё сделает как надо:

```bash
node_modules/.bin/eslint . --fix 
```

Однако далеко не все правила ```fixable```, то есть не все могут быть автоматически исправлены. В таких случаях придётся править вручную.
ESlint отлично работает в VS Code и WebStorm.

***

## ESLint и TypeScript

На просторах интернета можно встретить библиотеку TSLint. Она уже давно deprecated, что говорит о необходимости использовать ESlint для всего: JS или TS-файлов.

ESlint умеет «дружить» с TypeScript. Существуют отдельные плагины для этого:

```bash
npm install --save-dev @typescript-eslint/parser
npm install --save-dev @typescript-eslint/eslint-plugin 
```

Правила для TS пишутся точно так же, как и для JS:

```json
{
  "extends": "airbnb",
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "rules": {
    "max-len": [2, 100],
    "@typescript-eslint/no-unused-vars": 2,
    }
} 
```

***

***

## ESLint - установка

ESLint — это утилита, которая может анализировать написанный код. Фактически, это статический анализатор кода, и он может находить синтаксические ошибки, баги или неточности форматирования. В других языках, например, Go, это является неотъемлемой частью языка программирования.

### 1. Установить ESLint:

`npm i -g eslint` - Глобально

`npm i --save-dev` - Локально

***

### 2. Инициализация:

`eslint --init`

Ответить на вопросы:

```sh
> To check syntax and find problems
> JavaScript modules (import/export)
> React
> TypeScript
> Browser
> JSON
```

Автоматически установятся пакеты и создастся конфиг-файл .eslintrc.json

***

### 3. `.vscode/settings.json` (Нужно установить плагин в браузере ESLint)

{
  "editor.codeActionsOnSave": {
     "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript"]
}

***

### 4. Установка конфига `eslint-config-airbnb`

`npm install --save-dev eslint-config-airbnb `

***

### 5. .eslintignore

Какие файлы не проверять (игнорировать)

```json
/dist
**/*.min.js
/node_modules
```

***

### 6. Конфиг-файл `.eslintrc.json`

Примерный конфиг


```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "airbnb",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "overrides": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "indent": ["error", 2],
    "no-unused-vars": 2,
    "max-len": [1, 100],
    "max-params": [2, 3]
  }
}
```

***

### 7. npm-cкрипты

```json
"lint": "eslint . ",
"lint:fix": "eslint . --fix"
```

***

## Prettier

### 1. Устоновить плагин для VSCode

***

### 2. Конфиг `.prettierrc`

{
  "endOfLine": "auto",
  "singleQuote": true,
  "jsxSingleQuote": true,
  "arrowParens": "avoid",
  "semi": true,
  "useTabs": false,
  "trailingComma": "all",
  "tabWidth": 2
}

***

### 3. `.prettierignore`

Ignore artifacts:

```
node_modules
public
.next
.swc
yarn.lock
package-lock.json
```

***

### 4. Установка пакетов `prettier`, `@types/prettier`

`yarn add -D prettier @types/prettier`

***

### 5. Npm-скрипты

```json
"prettier:check": "prettier --check .",
"prettier:fix": "prettier --write .",
```

***


### 6. Конфиг редактора VsCode

```json title="settings.json"
{
  "typescript.tsdk": "node_modules/typescript/lib",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.formatOnPaste": false,
  "prettier.singleQuote": true,
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

***

### 7. Подружим с ESLint

`yarn add eslint-config-prettier`

```json title="eslintrc.js"
  ...
  extends: ["plugin:react/recommended", "prettier"],
  ...
```
***

## Husky

Нужно для того, чтобы были проверки во время коммита. ЧТобы наличие ошибок не давало сделать коммит.

### 1. Установка husky и lint-staged

- ```npm install husky -D```
- ```npx husky install```
- ```npx husky add .husky/pre-commit "npx tsc --noEmit && npx eslint --fix . && npx prettier --write ."```
- ```npm install lint-staged -D```

***

### 2. Конфиг для lint-staged

```js title="lint-staged.config.js"
module.exports = {
  // this will check Typescript files
  '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  // This will lint and format TypeScript and                                             //JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],

  // this will Format MarkDown and JSON
  '**/*.(md|json)': (filenames) =>
    `yarn prettier --write ${filenames.join(' ')}`,
}
```

***

### 3. Запись скрипта

Go to the file under the .husky folder and open pre-commit and then replace the last line with .
npx lint-staged

***

## Stylelint

Линтинг — это не уникальный инструмент исключительно для JS- или TS-кода. Например, можно анализировать стили. 
Для этого есть специальный линтер, а именно stylelint. Устанавливается он так же легко, как и ESLint:

```bash
npm install --save-dev stylelint 
```

Большой список правил и готовых наборов есть на [сайте разработчиков](https://stylelint.io/user-guide/rules/) утилиты. Конфиги очень похожи на ESLint. Прописывать их нужно в ```.stylelintrc.json```:

```json
{
  "extends": "stylelint-config-standard",
  "rules": {
    "color-hex-case": "lower"
  },
  "ignoreFiles": [
    "build/*"
  ]
} 
```

Обратите внимание, что они похожи, но не идентичны, поскольку это всё-таки разные инструменты. Чтобы не ошибиться, лучше сверяться с документацией.

Stylelint «из коробки» умеет парсить не только CSS, но и SCSS, Sass, Less, SugarCSS. Также он поддерживает систему плагинов. Например, можно установить дополнительный плагин с набором правил именно для SCSS под названием [stylelint-scss](https://www.npmjs.com/package/stylelint-scss). 

Линтер умеет работать с SCSS, но изначально он создавался именно как линтер для CSS. Плагин добавит больше специфических правил. 

Пример конфига из документации плагина:

```json
{
  "plugins": [
    "stylelint-scss"
  ],
  "rules": {
    // recommended rules
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    ...
    ...
    // any other rules you'd want to change e.g.
    "scss/dollar-variable-pattern": "^foo",
    "scss/selector-no-redundant-nesting-selector": true,
  }
} 
```

***

## editorconfig

Также следует создать файл ```.editorconfig```, где будут описаны табы или пробелы, размер отступов, кодировка и другие общие для всех файлов проекта правила. Он поддерживает большое количество IDE и редакторов кода, чтобы у всех коллег был единый общий стиль всех файлов:

Пример [конфига](https://editorconfig.org/):

```
[*]
indent_size = 4
indent_style = space

[*.json]
indent_size = 2 
```

Нет «самого правильного стиля кода», есть то, что удобно всей команде. Если вы единственный разработчик на проекте, тогда речь только о вашем удобстве и «чувстве прекрасного», потому что договариваться ни с кем не нужно. 

Одно из главных правил код-стайла — ваш код должен быть читаемым. Интерпретатор в JS готов многое простить, и браузеру обычно всё равно, как написан проект — главное, чтобы он работал. Внешний вид кода важен в первую очередь для людей. Не только для коллег или других разработчиков, которые будут пытаться в нём разобраться, но и для вас в будущем.

Всё учесть и продумать невозможно, поэтому существуют специальные инструменты, которые автоматизируют проверку код-стайла и не только. О них расскажем в следующих уроках этой темы.

***

## Почему нужны линтеры и CodeStyle

Код в проекте должен быть единообразен. Представьте, что вы читаете книгу на русском, а там на каждой странице текст написан по абсолютно разным правилам грамматики, орфографии и пунктуации. При чём часто эти правила ещё и взаимоисключающие. Вроде понять можно, но приходится на это тратить много усилий. Так и с кодом. Если от файла к файлу одно и то же писать по разному, это вызовет не только трудности в «чтении» такого проекта, но и станет причиной споров. Пример:

```js
let foo = 1,
    bar = 2,
    baz = 3;

// vs    

let foo = 1;
let bar = 2;
let baz = 3; 
```

Или space против tab. Или использование let и const:

Посмотрите на обычный блок кода, который прислали на ревью:

```tsx
exports.list = function (req, res) { 
  let notes = chats.findAll(); 
  let data = { 
    chats: chats,
    meta: req['meta'] 
  };

  res.render('chats', data);
}; 
```

Однако после ревью встретим вот такие комментарии:

```tsx
exports.list = function (req, res) { // Используй стрелочные
  let notes = chats.findAll(); // Используй const
  let data = { // И здесь
    chats: chats, // Здесь можно просто `chats,`
    meta: req['meta'] // Здесь можно так: req.meta
  };

  res.render('chats', data);
}; 
```

Подобное ревью максимально бесполезно. Оно отнимает много времени у коллег, которые будут друг другу писать одни и те же комментарии, не отличающиеся по смыслу.
Определение единого код-стайла позволяет не только удобнее и проще поддерживать проект, но и уважать время коллег. 
Чем полезен код-стайл:

- Упростит чтение кода всей команды;
- Поможет избежать пустых конфликтов внутри;
- Сделает код-ревью полезнее и быстрее;
- Позволит избежать типичных ошибок в коде;
- Сделает код качественнее.

Чтобы правила были описаны не только в конфиге инструментов линтера, в котором обычно много наследования от чужих конфигов, — стоит завести в проекте [файл](https://github.com/ymaps/codestyle/blob/master/javascript.md) ```Codestyle.md```, где описать свои правила как письменную договорённость в команде:


***

## Тестеры

### Popular testers

- [jestjs.io](https://jestjs.io/)
- [jest](https://www.npmjs.com/package/jest)
---
- [chaijs.com](https://www.chaijs.com/)
- [chai](https://www.npmjs.com/package/chai)
- [@types/chai](https://www.npmjs.com/package/chai)
---
- [mochajs.org](https://mochajs.org/)
- [mocha](https://www.npmjs.com/package/mocha)

TODO
