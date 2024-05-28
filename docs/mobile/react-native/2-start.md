---
title: Запуск
sidebar_position: 2
---

## Expo scripts

```yarn start``` - запуск старта разработки, по умолчанию запускается в режиме `web`.

- `yarn android` - Запуск на Android Studio - нужны конфиги (сканировать QR-code)
- `yarn ios` - Запуск на XCode - нужны конфиги (сканировать QR-code)
- `"ios-dev": "expo start -c --ios",` - флаг `-c` нужен для очистки кеша
- `yarn web` - Запуск на Web

```
› Web is waiting on http://localhost:8081

› Using Expo Go
› Press s │ switch to development build

› Press a │ open Android
› Press i │ open iOS simulator
› Press w │ open web

› Press j │ open debugger
› Press r │ reload app
› Press m │ toggle menu
› Press o │ open project code in your editor

› Press ? │ show all commands
```

---

## Запуск на устройствах

### 1 вариант - на реальных устройствах через мобильное приложение "Expo GO" для iOS и Android

- install "Expo Go" app in AppStore and Google Play
- Scan QR-code

---

### 2 вариант - на симуляторе в XCode и симмуляторе в Android Studio

#### XCode

Открываем XCode --> Cmd + , --> Locations --> Command Line Tools --> Select Tools (нужно выбрать чтобы работало cli)

Попробовать создать новый iOS проект, установить какой-ниб виртуальный iPhone, предоставить все права.

- Finder --> Applications --> XCode --> ПКМ --> Show Package Contents --> Deleloper --> Applications --> Simulator --> Move to the Applications folder to create startup icon
- В терминале при запущенном скрипте `yarn start` нажимаем `i`. На виртуальный iPhone автоматически установиться приложение Expo Go.
- После этого должно запуститься приложение на виртуальном устройстве.

---

#### Android Studio

- Открываем Android Studio --> Три точки (More actions) --> Virtual Device Manager --> Play
- В терминале при запущенном скрипте `yarn start` нажимаем `a`. 
- После этого должно запуститься приложение на виртуальном устройстве.

---
