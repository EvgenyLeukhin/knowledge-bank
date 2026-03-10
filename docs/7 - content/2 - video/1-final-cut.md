---
title: Final Cut
sidebar_position: 1
---

Начало нового проекта

0. Открываем бибилиотеку: `File` --> `Open Library` (если не создана, то создаём)

1. Создаём библиотеку на внешнем SSD:
   `File` --> `New` --> `Library`

2. Создаём новый проект `File` --> `New` --> `Project`.
   Или кликаем "New project" на треке

---

## Tools

`A` - Select (для выделения фрагментов)
`T` - Trim (для обрезки фрагментов)
`P` - Position (для переноски фрагментов)
`B` - Blade (для разрезки фрагментов)
`Z` - Zoom
`H` - Hand

---

## Effects и Transitions

- `Effects`. Иконка в виде двойного прямоугольника. Что-то вроде набора фильтров.
- `Transitions`. Иконка перевернутой песочницы. Переходы между фрагментами. Самый ходовой эффект `Fade to color`

---

## Titles

`Заголовки` - Titles сверху слева. Слева сверху иконка Т

---

## Панель настроек

### Transform

- **Обработка видео**: Transform, Position, Rotations, Scale, Anchor (кадрировать и масштабировать и т. д.)
- **Цветокоррекция**
- **Аудио-настройка**
- **Inspector**

---

### Inspector

`Cmd + 4`

### LUTs

- Выделить фрагмент в треке
- Открыть Inpector
- Снизу `Basic` поменять на `General`
- `Camera LUT` --> `Apple LOG`, `None` или `Custom LUT`

---

## Export

### Best Quality

Лучшее качество, будет очень тяжелый файл.

Share icon --> Export file (default)

Settings --> Video Codec

- Uncompressed 10-bit 4:2:2 - самый тяжелый (без компрессии)
- Uncompressed 8-bit 4:2:2 (без компрессии)
- H.264 (как на iPhone, сжатие без потери качества)
- Apple ProRes (422 Proxy, 422 LT, 422, 422 HQ, 4444, 4444 XQ) - ProRes-кодек с различными вариациями

---

### Social Platforms

Оптимизированный файл для загрузки в соц. сети.

Будет создан не сильно объёмный .mov формат, который можно загрузить на YouTube и VK.

---

### Instagram

`Window` -> `Project Properties` -> `Modify` -> `Custom 1080 X 1350, Scale 223%`
