---
title: Редакторы кода
sidebar_position: 2
---

export const CODE = ({children}) => (
  <code style={{ color: 'cyan' }}>
    {children}
  </code>
);

## Visual Studio Code (VS Code)

[Download VS Code - visualstudio.com](https://code.visualstudio.com/)

### Add code to path

Open the Command Palette (Cmd+Shift+P) and type 'shell command' to find the Shell:

<CODE>Command: Install 'code' command in PATH command.</CODE>

### Преимущества

- **Бесплатный** и **Кроссплатформенный**
- **Терминал**, **Git**, **Дебаггер** из коробки
- **Плагины** большиой выбор для различных языков и задач
- **Кастомизация**: настроить можно всё
- Поддержка **русского языка** кому нужен
- Авторизация через GitHub и синхронизация настроек

### Plugins (must have)

[VS Code marketplace](https://marketplace.visualstudio.com/)

- **Thunder Client** (тестирование API)
- **Git History** (Git-client)
- **GitLens** (расширение для Git)
- **vscode-pdf** (поддержка pdf)
- **Auto Rename Tag** (одновременное исправление парных тегов)
- **Colonize** (добавление точки с запятой *Shift/Alt + Enter*)
- **ES7+ React/Redux/React-Native snippets** (JS сниппеты)
- **ESLint** (JS линтер)
- **npm Intellisense** (npm расширение)
- **NPM Scripts** (запуск npm-скриптов)
- **Prettier - Code formatter** (форматирование кода)
- **EditorConfig for VS Code** (конфиг редактора)
- **Import Cost** (показывает размеры пакетов или файлов)
- **JavaScript and TypeScript Nightly** (Enables typescript@next)
- **SVG** (svg syntax)
- **Svg Preview** (svg-превью)

### Plugins (optional)

- **SFTP** (FTP-доступ к серверу прямо из редактора)
- **GitHub Copilot** (AI)
- **TailWind CSS IntelliSense** (Css IntelliSence)
- **Live Share** (шеринг кода)
- **REST Client** (аналог Thunder Client)
- **MJML** (поддерка mjml файлов)
- **Live server** (открытие html-файлов в браузере)
- **Sublime Text Keymap and Settings Importer** (шорткаты как в Sublime Text 3)
- **Auto open markdown preview** (md-превью)
- **markdownlint** (md-линтер)
- **Template Generator** (генерирует сниппеты кода)

### Shortcuts

[Shortcuts for VS Code](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)

#### Редактор

- <kbd>Cmd + Shift + P</kbd>&nbsp;&ndash;&nbsp;Командный интерфейс
- <kbd>Cmd + Shift + N</kbd>&nbsp;&ndash;&nbsp;Новое окно
- <kbd>Cmd + B</kbd>&nbsp;&ndash;&nbsp;Сайдбар
- <kbd>Cmd + ,</kbd>&nbsp;&ndash;&nbsp;Настройки
- <kbd>Cmd + Q</kbd>&nbsp;&ndash;&nbsp;Закрыть редактор
- <kbd>Ctrl + Cmd + F</kbd>&nbsp;&ndash;&nbsp;Полноэкранный режим в MacOS
- <kbd>Cmd + Shift + P</kbd>&nbsp;&ndash;&nbsp;Командный интерфейс
- <kbd>Ctrl + ` / Cmd + J</kbd>&nbsp;&ndash;&nbsp;Открыть/закрыть терминал
- <kbd>Cmd + K + S</kbd>&nbsp;&ndash;&nbsp;Список шорткатов
- <kbd>Ctrl + Shift + G</kbd>&nbsp;&ndash;&nbsp;Git
- <kbd>Cmd + Shift + D</kbd>&nbsp;&ndash;&nbsp;Debugger
- <kbd>Cmd + Shift + E</kbd>&nbsp;&ndash;&nbsp;Editor
- <kbd>Cmd + Shift + X</kbd>&nbsp;&ndash;&nbsp;Extentions
- <kbd>Cmd + Shift + R</kbd>&nbsp;&ndash;&nbsp;Thunder Client
- <kbd>Cmd + \</kbd>&nbsp;&ndash;&nbsp;Divide window
- <kbd>Option + Z</kbd>&nbsp;&ndash;&nbsp;Переносы строк
- <kbd>Option + H</kbd>&nbsp;&ndash;&nbsp;Открыть список коммитов (git log)

#### Файлы

- <kbd>Cmd + S/С/V/X</kbd>&nbsp;&ndash;&nbsp;Сохранить/Копировать/Вставить/Вырезать
- <kbd>Cmd + P</kbd>&nbsp;&ndash;&nbsp;Выбрать файл
- <kbd>Cmd + N</kbd>&nbsp;&ndash;&nbsp;Новый файл
- <kbd>Cmd + O</kbd>&nbsp;&ndash;&nbsp;Открыть файл
- <kbd>Cmd + W</kbd>&nbsp;&ndash;&nbsp;Закрыть вкладку
- <kbd>Cmd + Shift + T</kbd>&nbsp;&ndash;&nbsp;Открыть закрытую вкладку

#### Код

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
  "workbench.statusBar.visible": true,
  "files.insertFinalNewline": true
}
```

Configure Language в консоли - смена языка на англ (en)

***

## Sublime Text 3

[Download Sublime Text 3 - sublimetext.com](https://www.sublimetext.com/3)

### Shortcuts

[Shortcuts for Sublime](https://shortcuts.design/tools/toolspage-sublimetext/)


- <kbd>Ctrl + `</kbd>	- Открыть консоль
- <kbd>Ctrl + Shift + P</kbd>	- Командная строка
- <kbd>Ctrl + P</kbd>	- Перейти к файлу
- <kbd>Ctrl + Shift + N</kbd>	- Новое окно
- <kbd>Ctrl + B</kbd>	- Сайдбар
- <kbd>Alt + ↑↓</kbd>	- Переместить строку
- <kbd>F11</kbd> - Полноэкранный режим
- <kbd>Ctrl + \</kbd> - Разделение окна

### Package control:

1. Открыть консоль в Sublime text 3 (View - Show console)
2. <kbd>Ctrl + Shift + P</kbd> - Install Package control

### Packages

- **Emmet**
- **AutoFileName** - пути к файлам
- **BracketHighlighter** - подсветка скобок и парных тегов
- **A File Icon** - иконки для файлов в сайдбаре
- **ColorHighliter** - подсветка цветов в CSS
- **Terminal** - открывать терминал командой
- **LESS** - поддержка синтаксиса
- **SASS** - поддержка синтаксиса
- **Babel** - поддержка синтаксиса
- **SideBarEnhancements** - расширение функций сайдбара
- **Bootstrap** 3 Snippets
- **Bootstrap** 4 Snippets
- **JavaScript** Snippets - автозаполнение
- **JavaScript** Completions - автозаполнение хорошее
- **jQuery** Snippets
- **CodeFormatter** - форматирование
- **HTML** Minifier - минификатор HTML, CSS, JS
- **BufferScroll** - запоминает сворачивание блоков
- **EditorConfig** - запоминает форматирование кода (download)
- **SublimeLinter** - Линтер
- **SublimeLinter** - eslint - JS-линтер

### Settings

```json
{
  "color_scheme": "Packages/Color Scheme - Default/Monokai.tmTheme",
  "default_line_ending": "unix",
  "draw_white_space": "all",
  "font_face": "Consolas",
  "line_padding_top": 3,
  "line_padding_bottom": 3,
  "font_size": 12,
  "margin": -3,
  "tab_size": 2,
  "theme": "Default.sublime-theme",
  "word_separators": "./\\()\"'-:,.;<>~!@#$%^&*|+=[]{}`~?",
  "word_wrap": true
}
```

***

## Webstorm

[jetbrains.com - Скачать](https://www.jetbrains.com/ru-ru/webstorm/)

### Shortcuts

- <kbd>Ctrl + Alt + S</kbd> - Настройки
- <kbd>Ctrl + Alt + A</kbd> - Команды
- <kbd>Ctrl + Shift + L - </kbd>Автоформатирование
- <kbd>Ctrl + Shift + N</kbd> - Поиск по файлу
- <kbd>Alt + F12</kbd> - Терминал
- <kbd>Ctrl + E</kbd> - Недавние файлы
- <kbd>Ctrl + F4</kbd> - Закрыть вкладку
- <kbd>Ctrl + ~</kbd> - Меню настроек оформления
- <kbd>Shift + Shift</kbd> - Поиск везде

***

### .editorconfig

[https://editorconfig.org/](https://editorconfig.org)

```json
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
trim_trailing_whitespace = true
insert_final_newline = true
```

***

## VIM (CLI editor)

Редактирование файла из консоли.

```vim <filename>``` - Редактирование файла

```cat <filename>``` - посмотреть содержимое файла

Режим редактирования: ```i``` или ```Insert```

```
:w - save
:w! - save readonly file
:q - quit
:wq - save and quit
```
