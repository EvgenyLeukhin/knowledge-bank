---
title: Lightroom
sidebar_position: 1
---

## Установка

- [Убрать системную блокировку установки](https://appstorrent.ru/200-mistakes.html)
- [Запуск программы от рута](https://appstorrent.ru/65-gatekeeper.html)

1. Запустить установщик `Adobe Lightroom Classic v14.5.1 Adobe Activation Tool.dmg`
2. Подтвердить открытие в `Системные настройки` --> `Конфиденциальность и безопасность`
3. Открываем образ установщика (ПКМ --> Открыть)
4. Установить утилиту `Creative Cloud` --> (`1. Creative Cloud` --> `Adobe Creative Cloud 6.7.0 Universal.pkg`)
5. Установить сам `Lightroom` -> (`2. Install` --> `Install` --> `ПКМ` --> Открыть содержимое пакета --> `Install/Contains/MacOs/Install`)
6. Установить активатор `Adobe Activation Tool v1.2.3` --> Запустить (возможны проблемы с запуском `Adobe Activation Tool`) --> Решаем проблемы с запуском

---

### Решение проблемы запуска Adobe Activation Tool

Не открывается программа `Adobe Activation Tool`

- Запустить от рута: `sudo xattr -r -c '/Applications/Adobe Activation Tool.app'`
- Попробовать запустить скрипт `Fix`

---

## Начало работы

### Импорт библиотеки
