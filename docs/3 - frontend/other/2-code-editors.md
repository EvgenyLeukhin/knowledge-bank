---
title: Редакторы кода
sidebar_position: 2
---

export const CODE = ({children}) => (
<code style={{ color: 'cyan' }}>
{children}
</code>
);

## [Cursor](https://cursor.com/)

Редактор кода на основе VS Code (fork) со встроенным ИИ-анализом на базе Chat-GPT.

### Установка - [download](https://cursor.com/?from=home)

После установки может подтянуть все существующие настройки (`settings.json`) и плагины из VS Code.
Имеет вид подобный VS Code, но с фокусом на взаимодействие с ИИ-ассистентом.

Интерфейс:

- Основной сайдбар (слева) - `Cmd + B`
- Консоль (снизу) - `Ctrl + ё`
- ИИ-панель (справа) - `Cmd + Option + B`

---

### Настройка ИИ-ассистента

Иконка шестирёнки справа-сверху.

- **General**:
- **Manage Account** - регистрируемся как пользователь через GitHub, Google или по email
- **Privacy mode (Legacy)** - нужно переключить на **Privacy mode** c **Share data**, чтобы ваш код оставался приватным

- **Models**: выбор моделей

- **Rules & Memories**: кастомные настройки в виде самописных наборов правил для ИИ (User rules & project rules)

```
Отвечай на русском языке
Предложенный код должен быть простым и понятным для чтения
Учитывай линтеры для оформления кода
Предлагай ссылки на оффициальную документацию
```

```
Проект на TypeScript + React + Redux
Используй Material-UI компоненты
Стили пиши в SCSS модулях (.module.scss)
Следуй camelCase для переменных, PascalCase для компонентов
Типизируй все пропсы через TypeScript интерфейсы
Используй функциональные компоненты с хуками
```

---

Можно выключить spellCheck, так как подсвечивает ошибки синим

```json
"cSpell.enabled": false
```

### keybindings.json

```json
// Place your key bindings in this file to override the defaults
[
  // Cursor AI
  {
    "key": "cmd+i",
    "command": "composerMode.agent"
  },
  {
    "key": "cmd+e",
    "command": "composerMode.background"
  },

  // возвращаем так как в VS Code
  {
    "key": "cmd+shift+k",
    "command": "editor.action.deleteLines",
    "when": "textInputFocus && !editorReadonly"
  },
  {
    "key": "cmd+l",
    "command": "expandLineSelection",
    "when": "textInputFocus"
  },

  // На всякий случай снимаем конфликтующие бинды Cursor (укажите точные команды из UI)
  { "key": "cmd+l", "command": "-cursor.inlineChat" },
  { "key": "cmd+shift+k", "command": "-cursor.composer.toggle" }
]
```

### Как пользоваться

- Можно писать всё что угодно в ИИ панель, можно указывать файлы (через @)
- Прямо в открытом файле можно использовать сочетания клавиш `Cmd + L` (чтобы что-то спросить) и `Cmd + K` (для генерации кода)
- `Cmd + I` - сворачивание / разворачивание ИИ-меню
- `Cmd + Е` - создание нового чата

---

## Visual Studio Code (VS Code)

[Download VS Code - visualstudio.com](https://code.visualstudio.com/)

### keybindings.json

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

### Most wanted plugins

- **JavaScript and TypeScript Nightly** - поддержка версий JavaScript and TypeScript grammar
- **ESLint** - поддержка ESLint (JS/TS линтер)
- **ES7+ React/Redux/React-Native snippets** - JS сниппеты
- **Auto Rename Tag** - одновременное исправление парных тегов
- **EditorConfig for VS Code** - конфиг базовых настроек редактора
- **Prettier - Code formatter** - форматирование кода
- **npm Intellisense** - поддержка импортов npm-пакетов
- **Mithril Emmet** - сниппеты для быстрого разворачивание HTML, CSS, JSX
- **Tabnine: AI Chat & Autocomplete** - AI чат в редакторе
- **Import Cost** (показывает размеры пакетов или файлов)
- **Live server** (открытие html-файлов в браузере, dev-server)
- **HTMLHint** (html-валидатор);

#### Настройки для вёрстки (Prettier + HTMLHint)

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

### Helpful

- **Git History** (Git-client)
- **GitLens** (расширение для Git)
- **NPM Scripts** (запуск npm-скриптов)
- **TODO Tree** (показывает список всех TODO в проекте)
- **Live Share** (шеринг кода)
- **Docker** (поддержка Docker)
- **markdownlint** (md-линтер)

### Plugins (optional)

- **Thunder Client** (тестирование API)
- **REST Client** (аналог Thunder Client)
- **Svg Preview** (svg-превью)
- **SFTP** (FTP-доступ к серверу прямо из редактора)
- **vscode-pdf** (поддержка pdf)
- **SVG** (svg syntax)
- **Database client** (редактирование БД из редактора)
- **TailWind CSS IntelliSense** (Css IntelliSence)
- **MJML** (поддерка mjml файлов)
- **Sublime Text Keymap and Settings Importer** (шорткаты как в Sublime Text 3)
- **Auto open Markdown preview** (md-превью)
- **Template Generator** (генерирует сниппеты кода)
- **GitHub Copilot** (AI - не работает в РФ)
- **Colonize** (добавление точки с запятой _Shift/Alt + Enter_)

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
- <kbd>Ctrl + Tab</kbd>&nbsp;&ndash;&nbsp;Переключение между вкладками
- <kbd>Cmd + K + S</kbd>&nbsp;&ndash;&nbsp;Список шорткатов
- <kbd>Ctrl + Shift + G</kbd>&nbsp;&ndash;&nbsp;Git
- <kbd>Cmd + Shift + D</kbd>&nbsp;&ndash;&nbsp;Debugger
- <kbd>Cmd + Shift + E</kbd>&nbsp;&ndash;&nbsp;Editor
- <kbd>Cmd + Shift + X</kbd>&nbsp;&ndash;&nbsp;Extentions
- <kbd>Cmd + Shift + R</kbd>&nbsp;&ndash;&nbsp;Thunder Client
- <kbd>Cmd + \</kbd>&nbsp;&ndash;&nbsp;Divide window
- <kbd>Option + Z</kbd>&nbsp;&ndash;&nbsp;Переносы строк
- <kbd>Option + H</kbd>&nbsp;&ndash;&nbsp;Открыть список коммитов (git log)
- <kbd>Option + Esc</kbd>&nbsp;&ndash;&nbsp;Открыть suggestions menu

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

    // local theme
  "workbench.colorTheme": "Monokai",
  "workbench.statusBar.visible": true,
  "files.insertFinalNewline": true
}
```

Configure Language в консоли - смена языка на англ (en)

---

## Sublime Text 3

[Download Sublime Text 3 - sublimetext.com](https://www.sublimetext.com/3)

### Shortcuts

[Shortcuts for Sublime](https://shortcuts.design/tools/toolspage-sublimetext/)

- <kbd>Ctrl + `</kbd> - Открыть консоль
- <kbd>Ctrl + Shift + P</kbd> - Командная строка
- <kbd>Ctrl + P</kbd> - Перейти к файлу
- <kbd>Ctrl + Shift + N</kbd> - Новое окно
- <kbd>Ctrl + B</kbd> - Сайдбар
- <kbd>Alt + ↑↓</kbd> - Переместить строку
- <kbd>F11</kbd> - Полноэкранный режим
- <kbd>Ctrl + \</kbd> - Разделение окна

### Package control

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
  "color_scheme": "Mariana.sublime-color-scheme",
  "default_line_ending": "unix",
  "draw_white_space": "all",
  "font_face": "Consolas",
  "line_padding_top": 1,
  "line_padding_bottom": 1,
  "font_size": 13,
  "margin": -3,
  "tab_size": 2,
  "theme": "Default.sublime-theme",
  "word_separators": "./\\()\"'-:,.;<>~!@#$%^&*|+=[]{}`~?",
  "word_wrap": true
}
```

---

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

---

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
