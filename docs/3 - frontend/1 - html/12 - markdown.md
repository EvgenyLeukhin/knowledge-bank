---
title: Markdown
sidebar_position: 12
---

Markdown — это легкий язык разметки для создания форматированного текста.
Он позволяет писать текст в простом формате, который легко читается и
конвертируется в HTML.

<!-- Именование файлов -->

- README.md
- CHANGELOG.md
- CONTRIBUTING.md
- LICENSE.md

```md
<!-- Headers -->

- # Heading level 1
- ## Heading level 2
- ### Heading level 3
- #### Heading level 4
- ##### Heading level 5
- ###### Heading level 6

<!-- or -->

# Heading level 1

## Heading level 2

<!-- paragraphs -->

Don't put tabs or spaces in front of your paragraphs.

Don't put tabs or spaces in front of your paragraphs.

Don't put tabs or spaces in front of your paragraphs.

<!-- links -->

[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).

<!-- lists -->

- item-1
- item-2
- item-3

<!-- images -->

![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)

<!-- text formating -->

- `code`
- _italic_
- _also italic_
- **bold**
- **also bold**
- **_bold italic_**
- ~~зачеркнутый~~
- ==выделенный текст==
- Текст со сноской[^1].
- [^1]: Текст сноски.
- > Blockquotes: Dorothy followed her through many of the beautiful rooms in her castle.

## <!-- divider -->

<!-- tables -->

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |

<!-- Простая таблица -->

| Заголовок 1 | Заголовок 2 | Заголовок 3 |
| ----------- | ----------- | ----------- |
| Ячейка 1    | Ячейка 2    | Ячейка 3    |
| Ячейка 4    | Ячейка 5    | Ячейка 6    |

<!-- Таблица с выравниванием -->

| Левый | Центр | Правый |
| :---- | :---: | -----: |
| Текст | Текст |  Текст |
```

---

## Ссылки

```md
[текст ссылки](https://example.com)
[ссылка с заголовком](https://example.com 'Заголовок')
[ссылка с пустым текстом](https://example.com)
<https://example.com>

<!-- Ссылки -->

[текст ссылки](https://example.com)
[ссылка с заголовком](https://example.com 'Заголовок')
[ссылка с пустым текстом](https://example.com)
<https://example.com>

<!-- Ссылки с якорями -->

[ссылка на раздел](#раздел)
[ссылка на другой файл](файл.md#раздел)

<!-- Изображения -->

![альтернативный текст](путь/к/изображению.jpg)
![изображение с заголовком](путь/к/изображению.jpg 'Заголовок')
![изображение с ссылкой](путь/к/изображению.jpg 'Заголовок')(https://example.com)
```

---

## Списки

```md
<!-- Маркированные списки -->

- Пункт 1
- Пункт 2
  - Вложенный пункт
  - Еще вложенный
- Пункт 3

<!-- Нумерованные списки -->

1. Первый пункт
2. Второй пункт
   1. Вложенный пункт
   2. Еще вложенный
3. Третий пункт

<!-- Смешанные списки -->

1. Первый пункт
   - Подпункт
   - Еще подпункт
2. Второй пункт

<!-- Списки задач -->

- [x] Выполненная задача
- [ ] Невыполненная задача
- [ ] Еще одна задача

<!-- Определения -->

Термин 1
: Определение 1

Термин 2
: Определение 2
```
