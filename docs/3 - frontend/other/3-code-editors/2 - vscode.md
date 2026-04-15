---
title: VS Code
sidebar_position: 2
---

export const CODE = ({children}) => (
<code style={{ color: 'cyan' }}>
{children}
</code>
);

[Download VS Code - visualstudio.com](https://code.visualstudio.com/)

## keybindings.json

```json
// Place your key bindings in this file to override the defaults
[
  {
    "key": "cmd+l",
    "command": "expandLineSelection",
    "when": "textInputFocus"
  }
]
```

---

## Add code to path

Open the Command Palette (Cmd+Shift+P) and type 'shell command' to find the Shell:

<CODE>Command: Install 'code' command in PATH command.</CODE>

---

## Преимущества

- **Бесплатный** и **Кроссплатформенный**
- **Терминал**, **Git**, **Дебаггер** из коробки
- **Плагины** большиой выбор для различных языков и задач
- **Кастомизация**: настроить можно всё
- Поддержка **русского языка** кому нужен
- Авторизация через GitHub и синхронизация настроек

---

## Plugins (must have)

[VS Code marketplace](https://marketplace.visualstudio.com/)

---

## Плагины

- **GitLens**
- **Auto Rename Tag** - одновременное исправление парных тегов
- **GitLens**
- **EditorConfig for VS Code** - конфиг базовых настроек редактора
- **ES7+ React/Redux/React-Native snippets** - JS сниппеты
- **ESLint** - поддержка ESLint (JS/TS линтер)
- **GitLens** (расширение для Git)
- **Git History**
- **HTMLHint** (html-валидатор);
- **Import Cost** (показывает размеры пакетов или файлов)
- **JavaScript (ES6) code snippets**
- **JavaScript and TypeScript Nightly** - поддержка версий JavaScript and TypeScript grammar
- **Live server** (открытие html-файлов в браузере, dev-server)
- **Live Share** (шеринг кода)
- **markdownlint** (md-линтер)
- **Mithril Emmet** - сниппеты для быстрого разворачивание HTML, CSS, JSX
- **npm Intellisense** - поддержка импортов npm-пакетов
- **NPM Scripts** (запуск npm-скриптов)
- **Prettier - Code formatter** - форматирование кода
- **Prettier ESLint**
- **Russian Language Pack for Visual Studio Code**
- **SVG** (svg syntax)
- **Svg Preview** (svg-превью)
- **Thunder Client** (тестирование API)
- **Todo Tree** (показывает список всех TODO в проекте)
- **TypeScript Debugger**
- **vscode-pdf** (поддержка pdf)
- **YAML**

---

## Дополнительно

- **Docker** (поддержка Docker)
- **REST Client** (аналог Thunder Client)
- **SFTP** (FTP-доступ к серверу прямо из редактора)
- **Database client** (редактирование БД из редактора)
- **MJML** (поддерка mjml файлов)
- **Sublime Text Keymap and Settings Importer** (шорткаты как в Sublime Text 3)
- **Auto open Markdown preview** (md-превью)
- **Template Generator** (генерирует сниппеты кода)
- **Colonize** (добавление точки с запятой _Shift/Alt + Enter_)
- **Tabnine: AI Chat & Autocomplete** - AI чат в редакторе (платный)

---

### Настройки для вёрстки (Prettier + HTMLHint)

```json title="settings.json"
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.formatOnPaste": false,
  "prettier.singleQuote": true,
  "prettier.printWidth": 100,
  "prettier.bracketSameLine": true,
  "prettier.htmlWhitespaceSensitivity": "ignore",
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "html.validate.scripts": true,
  "html.validate.styles": true,
  "html.suggest.html5": true,
  "html.format.wrapLineLength": 100,
  "html.format.wrapAttributes": "auto",
  "htmlhint.enable": true,
  "htmlhint.options": {
    "tagname-lowercase": true,
    "attr-lowercase": true,
    "attr-value-double-quotes": true,
    "doctype-first": true,
    "tag-pair": true,
    "spec-char-escape": true,
    "id-unique": true,
    "src-not-empty": true,
    "attr-no-duplication": true
  }
}
```

---

## Shortcuts

[Shortcuts for VS Code](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)

### Редактор

- <kbd>Cmd + Shift + P</kbd>&nbsp;&ndash;&nbsp;Командный интерфейс
- <kbd>Cmd + Shift + N</kbd>&nbsp;&ndash;&nbsp;Новое окно
- <kbd>Cmd + B</kbd>&nbsp;&ndash;&nbsp;Сайдбар
- <kbd>Cmd + ,</kbd>&nbsp;&ndash;&nbsp;Настройки
- <kbd>Cmd + Q</kbd>&nbsp;&ndash;&nbsp;Закрыть редактор
- <kbd>Ctrl + Cmd + F</kbd>&nbsp;&ndash;&nbsp;Полноэкранный режим в MacOS
- <kbd>Cmd + Shift + P</kbd>&nbsp;&ndash;&nbsp;Командный интерфейс
- <kbd>Ctrl + ` / Cmd + J</kbd>&nbsp;&ndash;&nbsp;Открыть/закрыть терминал
- <kbd>Ctrl + Tab</kbd>&nbsp;&ndash;&nbsp;Переключение между вкладками
- <kbd>Cmd + K + S</kbd>&nbsp;&ndash;&nbsp;Список шорткатов
- <kbd>Ctrl + Shift + G</kbd>&nbsp;&ndash;&nbsp;Git
- <kbd>Cmd + Shift + D</kbd>&nbsp;&ndash;&nbsp;Debugger
- <kbd>Cmd + Shift + E</kbd>&nbsp;&ndash;&nbsp;Editor
- <kbd>Cmd + Shift + X</kbd>&nbsp;&ndash;&nbsp;Extentions
- <kbd>Cmd + Shift + R</kbd>&nbsp;&ndash;&nbsp;Thunder Client
- <kbd>Cmd + \\</kbd>&nbsp;&ndash;&nbsp;Divide window
- <kbd>Option + Z</kbd>&nbsp;&ndash;&nbsp;Переносы строк
- <kbd>Option + H</kbd>&nbsp;&ndash;&nbsp;Открыть список коммитов (git log)
- <kbd>Option + Esc</kbd>&nbsp;&ndash;&nbsp;Открыть suggestions menu

---

### Файлы

- <kbd>Cmd + S/С/V/X</kbd>&nbsp;&ndash;&nbsp;Сохранить/Копировать/Вставить/Вырезать
- <kbd>Cmd + P</kbd>&nbsp;&ndash;&nbsp;Выбрать файл
- <kbd>Cmd + N</kbd>&nbsp;&ndash;&nbsp;Новый файл
- <kbd>Cmd + O</kbd>&nbsp;&ndash;&nbsp;Открыть файл
- <kbd>Cmd + W</kbd>&nbsp;&ndash;&nbsp;Закрыть вкладку
- <kbd>Cmd + Shift + T</kbd>&nbsp;&ndash;&nbsp;Открыть закрытую вкладку

---

### Код

- <kbd>Cmd + ←→</kbd>&nbsp;&ndash;&nbsp;Начало/Конец строки
- <kbd>Cmd + ⇅</kbd>&nbsp;&ndash;&nbsp;Начало/Конец файла
- <kbd>Cmd + Shift + ←→</kbd>&nbsp;&ndash;&nbsp;Выделить строку
- <kbd>Cmd + X</kbd>&nbsp;&ndash;&nbsp;Вырезать строку
- <kbd>Cmd + Shift + K</kbd>&nbsp;&ndash;&nbsp;Удалить строку
- <kbd>Alt + ←→</kbd>&nbsp;&ndash;&nbsp;Движение курсора по коду/тексту
- <kbd>Alt + Shift + ⇅</kbd>&nbsp;&ndash;&nbsp;Копирование строк
- <kbd>Alt + ⇅</kbd>&nbsp;&ndash;&nbsp;Перенос строки
- <kbd>Cmd + F/E/G</kbd>&nbsp;&ndash;&nbsp;Поиск
- <kbd>Cmd + Alt + F</kbd>&nbsp;&ndash;&nbsp;Поиск и исправление
- <kbd>Cmd + /</kbd>&nbsp;&ndash;&nbsp;Комментирование
- <kbd>Tab</kbd>&nbsp;&ndash;&nbsp;Табуляция
- <kbd>Shift + Tab, Cmd + []</kbd>&nbsp;&ndash;&nbsp;Обратная табуляция
- <kbd>Cmd + Alt + ⇅ / Cmd + ЛКМ</kbd>&nbsp;&ndash;&nbsp;Новый курсор
- <kbd>Cmd + Shift + ⇅</kbd>&nbsp;&ndash;&nbsp;Выделить всё, что выше/ниже
- <kbd>Cmd + D</kbd>&nbsp;&ndash;&nbsp;Умное выделение
- <kbd>Cmd + Shift + L</kbd>&nbsp;&ndash;&nbsp;Выделить одинаковые
- <kbd>Ctrl + G</kbd>&nbsp;&ndash;&nbsp;На строку
- <kbd>Option + Shift + F</kbd>&nbsp;&ndash;&nbsp;Автоформатирование

---

## Settings

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

    // local theme
  "workbench.colorTheme": "Monokai",
  "workbench.statusBar.visible": true,
  "files.insertFinalNewline": true
}
```

Configure Language в консоли - смена языка на англ (en)
