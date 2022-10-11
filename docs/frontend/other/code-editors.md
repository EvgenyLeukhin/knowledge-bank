---
title: Редакторы кода
sidebar_position: 1
---

## VS code

[Download VS Code - visualstudio.com](https://code.visualstudio.com/)

### Преимущества

- **Бесплатный** и **Кроссплатформенный**
- **Терминал**, **Git**, **Дебаггер** из коробки
- **Плагины** большиой выбор для различных языков и задач
- **Кастомизация**: настроить можно всё
- Поддержка **русского языка** кому нужен
- Авторизация через GitHub и синхронизация настроек

### Plugins (must have)

- **Thunder Client** (тестирование API)
- **GitLens** (расширение для Git)
- **vscode-pdf** (поддержка pdf)
- **Auto Rename Tag** (одновременное исправление парных тегов)
- **Colonize** (добавление точки с запятой *Shift/Alt + Enter*)
- **ES7+ React/Redux/React-Native snippets** (JS сниппеты)
- **ESLint** (JS линтер)
- **npm Intellisense** (npm расширение)
- **NPM Scripts** (запуск npm-скриптов)
- **Prettier - Code formatter** (форматирование кода)

### Plugins (optional)

- **MJML** (поддерка mjml файлов)
- **Live server** (открытие html-файлов в браузере)
- **Sublime Text Keymap and Settings Importer** (шорткаты как в Sublime Text 3)
- **Svg Preview** (svg-превью)
- **Auto open markdown preview** (md-превью)
- **markdownlint** (md-линтер)

### Shortcuts

[Shortcuts for VS Code](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)

#### Редактор

- <kbd>Cmd + Shift + P</kbd>&nbsp;&ndash;&nbsp;Командный интерфейс
- <kbd>Cmd + Shift + N</kbd>&nbsp;&ndash;&nbsp;Новое окно
- <kbd>Cmd + B</kbd>&nbsp;&ndash;&nbsp;Сайдбар
- <kbd>Cmd + ,</kbd>&nbsp;&ndash;&nbsp;Настройки
- <kbd>Cmd + Q</kbd>&nbsp;&ndash;&nbsp;Закрыть редактор
- <kbd>Cmd + Ctrl + F</kbd>&nbsp;&ndash;&nbsp;Полноэкранный режим в MacOS
- <kbd>Cmd + Shift + P</kbd>&nbsp;&ndash;&nbsp;Командный интерфейс
- <kbd>Ctrl + ` / Cmd + J</kbd>&nbsp;&ndash;&nbsp;Открыть/закрыть терминал
- <kbd>Cmd + K + Cmd + S</kbd>&nbsp;&ndash;&nbsp;Список шорткатов
- <kbd>Ctrl + Shift + G</kbd>&nbsp;&ndash;&nbsp;Git
- <kbd>Cmd + Shift + D</kbd>&nbsp;&ndash;&nbsp;Debugger
- <kbd>Cmd + Shift + E</kbd>&nbsp;&ndash;&nbsp;Editor
- <kbd>Cmd + Shift + X</kbd>&nbsp;&ndash;&nbsp;Extentions
- <kbd>Cmd + Shift + R</kbd>&nbsp;&ndash;&nbsp;Thunder Client

#### Файлы

- <kbd>Cmd + S/С/V/X</kbd>&nbsp;&ndash;&nbsp;Сохранить/Копировать/Вставить/Вырезать
- <kbd>Cmd + P</kbd>&nbsp;&ndash;&nbsp;Выбрать файл
- <kbd>Cmd + N</kbd>&nbsp;&ndash;&nbsp;Новый файл
- <kbd>Cmd + O</kbd>&nbsp;&ndash;&nbsp;Открыть файл
- <kbd>Cmd + W</kbd>&nbsp;&ndash;&nbsp;Закрыть вкладку
- <kbd>Cmd + Shift + T</kbd>&nbsp;&ndash;&nbsp;Jткрыть закрытуювкладку

#### Код

- <kbd>Cmd + ←→</kbd>&nbsp;&ndash;&nbsp;Начало/Конец строки
- <kbd>Cmd + ⇅</kbd>&nbsp;&ndash;&nbsp;Начало/Конец файла
- <kbd>Cmd + Shift + ←→</kbd>&nbsp;&ndash;&nbsp;Выделить строку
- <kbd>Cmd + X</kbd>&nbsp;&ndash;&nbsp;Вырезать строку
- <kbd>Cmd + Shift + K</kbd>&nbsp;&ndash;&nbsp;Удалить строку
- <kbd>Alt + ←→</kbd>&nbsp;&ndash;&nbsp;Движение курсора по коду/текстуƒ
- <kbd>Alt + Shift + ⇅</kbd>&nbsp;&ndash;&nbsp;Копирование строк
- <kbd>Alt + ⇅</kbd>&nbsp;&ndash;&nbsp;Перенос строки
- <kbd>Cmd + F/E/G</kbd>&nbsp;&ndash;&nbsp;Поиск
- <kbd>Cmd + Alt + F</kbd>&nbsp;&ndash;&nbsp;Поиск и исправление
- <kbd>Cmd + /</kbd>&nbsp;&ndash;&nbsp;Комментирование
- <kbd>Tab</kbd>&nbsp;&ndash;&nbsp;Табуляция
- <kbd>Shift + Tab</kbd>&nbsp;&ndash;&nbsp;Обратная табуляция
- <kbd>Cmd + Alt + ⇅ / Cmd + ЛКМ</kbd>&nbsp;&ndash;&nbsp;Новый курсор
- <kbd>Cmd + Shift + ⇅</kbd>&nbsp;&ndash;&nbsp;Выделить всё, что выше/ниже
- <kbd>Cmd + D</kbd>&nbsp;&ndash;&nbsp;Умное выделение
- <kbd>Ctrl + G</kbd>&nbsp;&ndash;&nbsp;На строку


### Settings

```json
{
  "breadcrumbs.enabled": true, (default)

  "gitlens.advanced.messages": {
    "suppressResultsExplorerNotice": true,
    "suppressShowKeyBindingsNotice": true
  },
  "git.autofetch": true,
  "git.enableSmartCommit": true,
  "gitlens.keymap": "alternate",

  "editor.fontFamily": "Consolas",
  "editor.fontSize": 18,
  "editor.letterSpacing": 0, (default)
  "editor.lineHeight": 25, (23 default)
  "editor.formatOnPaste": true,
  "editor.minimap.enabled": false,
  "editor.minimap.scale": 2, (0 default)
  "editor.multiCursorModifier": "ctrlCmd",
  "editor.snippetSuggestions": "top",
  "editor.renderControlCharacters": false,
  "editor.renderWhitespace": "all",
  "editor.rulers": [100],
  "editor.tabSize": 2,
  "editor.padding.top": 10,
  "editor.padding.bottom": 10,
  "editor.wordWrap": "on",

  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
  },
  "emmet.syntaxProfiles": {
    "javascript": "jsx",
    // "javascript": "html",
  },

  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,

  "npm-scripts.showStartNotification": true,

  "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
  "terminal.integrated.shell.linux": "/bin/bash",


  "javascript.updateImportsOnFileMove.enabled": "always",
  "javascript.implicitProjectConfig.experimentalDecorators": true,

  "window.zoomLevel": 0,
  "workbench.colorTheme": "Monokai",
  "workbench.statusBar.visible": true
}
```

Configure Language в консоли - смена языка на англ (en)

***

## Sublime Text 3

[Download Sublime Text 3 - sublimetext.com](https://www.sublimetext.com/3)

## Shortcuts Sublime

[Shortcuts for Sublime](https://shortcuts.design/tools/toolspage-sublimetext/)

