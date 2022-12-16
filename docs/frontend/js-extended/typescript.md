---
title: TypeScript
sidebar_position: 20
---

# TypeScript 

Some content

## Пример использования в React

```tsx
enum LangType {
  ru = 'ru',
  en = 'en',
}

const getDefaultOptions = (lc: LangType): string[] => {
  return [
    lc === "ru" ? "Web-разработка" : "Web-development",
    lc === "ru" ? "Мобильная разработка" : "Mobile",
    lc === "ru" ? "1С-интеграция" : "1S integration",
    lc === "ru" ? "UX/UI дизайн" : "UX/UI design",
  ]
}

export default getDefaultOptions;
```

```LangType``` - типизация параметра функции
```(): string[]``` - типизация самой функции (то, что она будет возвращать)
