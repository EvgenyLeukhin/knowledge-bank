---
title: Cursor
sidebar_position: 1
---

- [Скачать Cursor](https://cursor.com/download) - Скачать
- [Документация](https://cursor.com/docs) - Документация EN
- [Документация](https://cursor.com/ru/docs) - Документация RU
- [Авторизация](https://authenticator.cursor.sh/) (Google, Github, Apple)
- [Насторойки профиля](https://cursor.com/dashboard/settings) (Google, Github, Apple)
- [Оплата](https://cursor.com/dashboard/billing)

---

## Используемые модели

- Sonnet
- GPT, Codex
- Opus
- Codex
- Composer
- Glok
- Gemini
- Claude

---

## Hotkeys

### Show

- `Cmd + L / Cmd + I` - AI Agent
- `Cmd + B` - Files bar
- `Cmd + J` - Terminal

### Agent

- Выделить текст + `Cmd + L / Cmd + I` - добавить в чат
- `Shift + Tab` - менять режим агента (Agent, Plan, Debug, Ask)
- `Cmd + N` - новый чат (если агент в фокусе)

## Редактор

- `Ctrl + Tab` - переключение между вкладками
- `Cmd + P` - переключение между вкладками

---

## Rules (.cursorrules)

Файл локальных настроек для проекта. Этот файл нужно ложить в корень проекта.

### Глобальные

`Settings` --> `Rules, Skills, Subagents`

```
Текст размышлений и рассуждений AI-ассистента пиши на русском языке
Отвечай на русском языке
Учитывай конфигурацию линтеров при написании кода
Предложенный код должен быть простым и понятным для восприятия
Предлагай по необходимости ссылки на оффициальную документацию

```

### Локальные

````md title=".cursorrules"
---
description: Основные правила для работы с проектом command-metrics-service-frontend
alwaysApply: true
---

# Правила для ИИ-ассистента в проекте command-metrics-service-frontend

## Общие принципы

- Проект написан на TypeScript + React + Redux
- Используется Material-UI (MUI) для компонентов
- Стили написаны на SCSS с модулями (.module.scss)
- Соблюдай существующие паттерны и архитектуру проекта

## Структура проекта

- `/src/containers/` - основные страницы и контейнеры
- `/src/components/` - переиспользуемые компоненты
- `/src/store/` - Redux store и слайсы
- `/src/utils/` - утилиты и хелперы
- `/src/types/` - TypeScript типы
- `/src/styles/` - глобальные стили, переменные, миксины

## Стиль кода

- Используй функциональные компоненты с хуками
- Типизируй все пропсы и состояния через TypeScript
- Используй camelCase для переменных и функций
- Используй PascalCase для компонентов и типов
- Добавляй JSDoc комментарии для сложных функций

## Redux

- Используй Redux Toolkit для создания слайсов
- Типизируй store через TStore
- Используй useSelector и useDispatch хуки
- Называй actions в формате camelCase

## Стили

- Используй CSS модули (.module.scss)
- Импортируй переменные и миксины через @use
- Следуй БЭМ методологии для именования классов
- Используй CSS переменные из /src/styles/vars

## Компоненты

- Разделяй логику и представление
- Используй композицию компонентов
- Передавай данные через пропсы, избегай prop drilling
- Используй React.memo для оптимизации где необходимо

## Импорты

- Группируй импорты: React, внешние библиотеки, внутренние модули, стили
- Используй абсолютные пути для импортов из src/
- Используй относительные пути для импортов внутри папки

## Обработка ошибок

- Используй try-catch для асинхронных операций
- Добавляй fallback UI для ошибок
- Логируй ошибки в консоль для отладки

## Производительность

- Используй useMemo и useCallback где необходимо
- Избегай лишних ререндеров
- Оптимизируй большие списки через виртуализацию

## Тестирование

- Пиши unit тесты для утилит и хелперов
- Используй React Testing Library для компонентов
- Тестируй пользовательские сценарии

## Безопасность

- Валидируй все пользовательские данные
- Используй HTTPS для API запросов
- Не храни чувствительные данные в localStorage

## Доступность

- Используй семантические HTML теги
- Добавляй aria-атрибуты где необходимо
- Обеспечивай навигацию с клавиатуры

## Комментарии

- Пиши комментарии на русском языке
- Объясняй сложную бизнес-логику
- Документируй API интерфейсы

## Git

- Используй conventional commits
- Пиши понятные commit сообщения
- Создавай feature ветки для новых функций

## Примеры паттернов

### Компонент

```typescript
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { TStore } from 'store';
import styles from './Component.module.scss';

interface TProps {
  data: SomeType[];
  onAction: (id: string) => void;
}

const Component: React.FC<TProps> = ({ data, onAction }) => {
  const processedData = useMemo(() => {
    return data.filter(item => item.isActive);
  }, [data]);

  return (
    <div className={styles.component}>
      {/* content */}
    </div>
  );
};

export default Component;
```
````

### Redux слайс

```typescript
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TState {
  data: SomeType[];
  loading: boolean;
  error: string | null;
}

const initialState: TState = {
  data: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'sliceName',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<SomeType[]>) => {
      state.data = action.payload;
    },
  },
});
```

### Стили

```scss
@use 'styles/vars' as *;
@use 'styles/mixins' as *;

.component {
  @include flex-center;

  &__item {
    color: $primary-color;

    &--active {
      background-color: $active-bg;
    }
  }
}
```

```

```

### .cursorignore

```text title=".cursorignore"
dist/
build/
```

Этот файл нужно ложить в корень проекта.

---

## Commands

- Файлы в `/.cursor/commands/*.md` — это кастомные команды Cursor (можно создавать команды в этой директории в формате markdown.)

- Файлы в `/.cursor/skills/*.md` — также можно добавлять кастомные скиллы. Это по сути те же команды, только более специализированные

- Файлы в `/.cursor/agents/*.md` — локальные суб-агенты

Каждая команда — отдельный `.md`‑файл с описанием того, что ассистент должен делать.

---

## Инструменты

- Terminal
- Browser
- Search

---

## От дизайна к коду

Agent может превращать дизайн-макеты в рабочий код с адаптивной вёрсткой.

`@browser Analyze this design mockup, extract colors and typography, and generate pixel-perfect HTML and CSS code`

Настройка дизайна интерфейса по скриншотам
Агент может дорабатывать существующие интерфейсы, выявляя визуальные несоответствия и обновляя стили компонентов.

`@browser Сравни текущий интерфейс с этим скриншотом дизайна и приведи отступы, цвета и типографику в соответствие`

---

## Хуки

Создайте файл `hooks.json`. Вы можете создать его на уровне проекта (`project/.cursor/hooks.json`) или в домашнем каталоге (~/.cursor/hooks.json). Хуки на уровне проекта действуют только в этом конкретном проекте, а хуки в домашнем каталоге — глобально.

---

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

### .cursorrules

Файл со списком правил для данного проекта

---

### keybindings.json

Open Keyboard Shortcuts (JSON)

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
