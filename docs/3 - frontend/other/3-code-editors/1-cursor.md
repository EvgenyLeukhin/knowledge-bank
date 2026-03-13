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

`Cmd + L / Cmd + L` - AI Agent
`Cmd + B` - Files bar
`Cmd + J` - Terminal

---

## Rules (.cursorrules)

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
