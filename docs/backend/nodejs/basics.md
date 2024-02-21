---
title: Basics
sidebar_position: 0
---

[Download Nodejs](https://nodejs.org/en/download/)

Install MacOS: ```https://nodejs.org/en/download --> macOs Installer```

NodeJS — интерпретатор JavaScript, основанный на движке V8. Тот же движок работает в браузерах на базе Chromium — он транслирует JavaScript в машинный код. Однако NodeJS исполняет код вне браузера, например на сервере. Так JavaScript из специализированного языка для сайтов превращается в универсальный язык программирования.
NodeJS добавляет возможность работать с устройствами ввода-вывода через свой API (написанный на C++) и подключать библиотеки, написанные на разных языках, обеспечивая вызовы к ним из JavaScript-кода.

## npm

**npm** — это пакетный менеджер JavaScript. Аналоги в других ЯП / системах — pip, apt. Этот менеджер по умолчанию устанавливается вместе с NodeJS.
Как и с любым другим пакетным менеджером — можно устанавливать пакеты из глобального хранилища. 

Инициализация проекта.

```bash
npm init -y
```

Пакетный менеджер может быть не только глобальным, но и локальным внутри компании. По умолчанию пакеты скачиваются из ```--registry=https://registry.npmjs.org/```. 

Если npm в компании локальный, в корне проекта можно найти файл .npmrc, где описаны разные параметры, в том числе и registry:

```bash
registry=https://npm.yandex.net/ 
```

***

### nvm 

[https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)

- Install script: ```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash```

---

- Check versions: ```nvm ls```
- Check current version: ```node -v```

---

- Intall version: 
  ```nvm install 20```
  ```nvm install stable (last stable version)```
  ```nvm install/uninstall 10.15.0 (install exact version)```

---

- Use version: ```nvm use 20```
- Create .nvmrc file: ```node -v > .nvmrc```
- Use node-version from .nvmrc file: ```node use```
- Use installed version: ```nvm use 10.15.0```
- Use alisas: ```nvm alias default 10.15.0```

***

## Импорты в nodejs

### require

Как видно из примеров выше — можно импортировать хоть классы (сервис, контроллер), хоть функции (express).
Для экспорта достаточно использовать ключ exports в глобальном объекте ```module```.
Для импорта — применить функцию require и передать путь к файлу (можно даже относительный).

Реализуем модуль и подключим его к ```index.js```, чтобы можно было использовать функции и другую логику внутри него.

- ```service.js``` — реализует логику определённой сущности;
- ```controller.js``` — будет использовать логику из файла ```service.js```, чтобы реализовать бизнес логику;
- ```index.js``` — файл с запуском сервера, с использованием библиотеки Express.

### Сервис

Сервис должен уметь обращаться, например, к GitHub API для получения списка публичных репозиториев.

```js title="service.js"
class GithubService {
  requestRepos(filters) { // Принимаем какие-то фильтры
    // Логика запроса. В данном случае она нас не интересует.
  }
}

module.exports = GithubService;
```

### Контроллер

Контроллер должен обрабатывать запрос от пользователя к серверу, приводить пришедшие данные к формату для сервиса по работе с GitHub API и возвращать полученные репозитории.

```js title="controller.js"
const GithubService = require('./service');

class GithubController {
  getRepositories(req, res, next) {
    const {body} = req;
    const serviceFilters = something(body); // Приводим фильтры к нужному виду

    // Какая-то бизнес логика
    GithubService.requestRepos(serviceFilters)
      .then(data => {
        res.send(data);
      })
      .catch(error => {
          next(error);
      });
  }
}

// Для экспорта достаточно использовать ключ exports в глобальном объекте module.
module.exports = {
  controller: GithubController,
};
```

```js title="index.js"
const express = require('express');

const { controller } = require('./controller');

const app = express();

app.get('/', controller.getRepositories);

app.listen(3000, function () {
  console.log('Мы запустили приложение и можем ходить в гитхаб');
});
```

---

## npm 

Npm install with node automaticly.

### Install

```npm i -g package-name```
```npm i --save-dev package-name```

### Remove

```npm remove -g package-name```
```npm remove --save-dev package-name```


### Update

```npm update -g <package_name>```
```npm update --save-dev <package_name>```


### Update all packages

```npm update -g```
```npm update --save-dev```


### Rebuild

Helpful command when need to reinstall package after change node version.

```npm rebuild <package_name>```

See installed: ```Localy npm list -g --depth 0```

Globaly: ```npm list --save-dev --depth 0```

---

## Yarn

### Install: 

```npm install --global yarn``` || ```npm i -g yarn```
```yarn -v```


Обновление пакетов: ```yarn upgrade-interactive --latest```
Очистка кэша: ```yarn cache clean --force```

---

### Add package

```yarn add <package--name>```

### Remove

```yarn remove <package-name>```

---

## Remove nodejs, nvm, npm 

[link stackoverflow](https://stackoverflow.com/questions/11177954/how-do-i-completely-uninstall-node-js-and-reinstall-from-beginning-mac-os-x)

```sudo rm -rf /usr/local/{lib/node{,/.npm,_modules},bin,share/man}/{npm*,node*,man1/node*}```
```sudo rm -rf /usr/local/bin/npm /usr/local/share/man/man1/node* /usr/local/lib/dtrace/node.d ~/.npm ~/.node-gyp```

### To completely uninstall node + npm is to do the following:

- go to ```/usr/local/lib``` and delete any node and node_modules
- go to ```/usr/local/include``` and delete any node and node_modules directory
- if you installed with brew install node, then run brew uninstall node in your terminal
- check your Home directory for any local or lib or include folders, and delete any node or node_modules from there
- go to ```/usr/local/bin``` and delete any node executable

```sudo rm -rf /opt/local/bin/node /opt/local/include/node /opt/local/lib/node_modules```
```sudo rm -rf /usr/local/bin/npm /usr/local/share/man/man1/node.1 /usr/local/lib/dtrace/node.d```

```rm -rf ~/.node-gyp```
```rm -rf ~/.nvm```
```rm -rf ~/.npm```

---

## More commands

[yarnpkg.com](https://classic.yarnpkg.com/)

- ```yarn add```
- ```yarn audit```
- ```yarn autoclean```
- ```yarn bin```
- ```yarn cache```
- ```yarn check```
- ```yarn config```
- ```yarn create```
- ```yarn dedupe```
- ```yarn generate-lock-entry```
- ```yarn global```
- ```yarn help```
- ```yarn import```
- ```yarn info```
- ```yarn init```
- ```yarn install```
- ```yarn licenses```
- ```yarn link```
- ```yarn list```
- ```yarn lockfile```
- ```yarn login```
- ```yarn logout```
- ```yarn outdated```
- ```yarn owner```
- ```yarn pack```
- ```yarn policies```
- ```yarn prune```
- ```yarn publish```
- ```yarn remove```
- ```yarn run```
- ```yarn self-update```
- ```yarn tag```
- ```yarn team```
- ```yarn test```
- ```yarn unlink```
- ```yarn upgrade```
- ```yarn upgrade-interactive```
- ```yarn version```
- ```yarn versions```
- ```yarn why```
- ```yarn workspace```
- ```yarn workspaces```

Update pacages: ```yarn upgrade-interactive --latest```
Clear cache: ```yarn cache clean --force```

---

## package.json

Package.json --> Initialize new project --> package.json will be create automaticly.

```npm init -y```

Install all packages

```npm install || npm i```
```yarn install || yarn```

List of scripts to manipulation of project.

```json
  "scripts": {}
```

List of packeges with versions, which installed with --save flag

```json
"dependencies": {}
```

List of packeges with versions, which installed with --save-dev flag

```json
"devDependencies": {}
```
### Example

```json
{
  "name": "test-project",
  "version": "1.0.0",
  "description": "A Vue.js project",
  "main": "src/main.js",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/flaviocopes/testing.git"
  },
  "keywords": [
    "email",
    "machine learning",
    "ai"
  ],
  "author": {
    "name": "Flavio Copes",
    "email": "flavio@flaviocopes.com",
    "url": "https://flaviocopes.com"
  },
  "bugs": "https://github.com/flaviocopes/package/issues",
  "homepage": "https://flaviocopes.com/package",
  "private": true,
  "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "unit": "jest --config test/unit/jest.conf.js --coverage",
    "test": "npm run unit",
    "lint": "eslint --ext .js,.vue src test/unit",
    "build": "node build/build.js"
  },
  "dependencies": {
    ...
    "vue": "^2.5.2",
    ...
  },
  "devDependencies": {
    ...
    "webpack-merge": "^4.1.0",
    ...
  },
  "engines": {
    "node": ">= 6.0.0",
    "npm": ">= 3.0.0",
    "yarn": "^0.13.0"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ]
}
```

---

## browser-sync

[Official docs](https://browsersync.io/)

```npm i -g browser-sync```
```npm i --save-dev browser-sync```

Use from console
Будет выполнен запуск файла index.html в браузере, который лежит в текущей директории. И браузер будет перезагружаться при изменении любого файла в директории.

```browser-sync start --server './src' --files '**/*'```

For testing on several devices
In package.json

```json
  "adaptive-test": "browser-sync start -s dist",
```

