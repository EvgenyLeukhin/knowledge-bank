---
title: Android
sidebar_position: 6
---


## Инструменты для mobile-тестирования

- [developer.android.com](https://developer.android.com/) - Основной сайт Android-разработки (гайдлайны, Android-studio)
- [developer.android.com/guide](https://developer.android.com/guide) - Гайдлайны Android
- [developer.android.com/studio](https://developer.android.com/studio) - Скачать Android Studio
- [genymotion](https://www.genymotion.com/) - Онлайн эмулятор Android
- Android Debug, Fiddler

***

## Статистика Android (РФ 2022 - statcounter)

### Android version

- **v.9** - 10%
- **v. 10** - 25%
- **v. 11** - 24%
- **v. 12** - 17%
- **Остальные** - 8%

### Примерная пропорция Android-устройства по брендам в РФ

- **Huawei** - 36%
- **Samsung** - 35%
- **Xiaomi** - 17%
- **Остальные** - 11%

## Android studio

Создать тестовый проект или взять готовый.

Можно установить эмулятор (Virtual), а также подключить реальное устройство по usb (Physical).

Device manager --> Virtual or Physical

### Установка эмулятора

Device manager --> Virtual --> Create device --> Phone --> Pixel 6 Pro --> System image (Android 13 Tiramisu например) --> Finish

Далее в device manager выбрать этот смартфон и нажать на **Play** для запуска эмулятора.

Чтобы запустить на эмуляторе разрабатываемое приложение нужно нажать на play в панели проекта.

<img src="../../../img/qa/android-studio.png" width="550" alt="android-studio.png" />

Также можно перетаскивать в эмулятор установочные apk-файлы для установки их в эмулятор.

### Подключение реального устройства (Physical)

1. **Включить режим разработчика на андройд-смартфоне**: 

  Настройки --> Об устройстве --> Версия --> Номер сборки (зажать)

  Настройки --> Системные настройки --> Для разработчиков --> Откладка по USB (нужно включить)

2. **Подключить смартфон по usb**

3. Device manager --> Physical --> Запустить проект

