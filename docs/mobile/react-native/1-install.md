---
title: Установка
sidebar_position: 1
---

- [Install expo app](https://reactnative.dev/docs/environment-setup) - Expo install
- [Expo docs](https://expo.dev/) - Expo docs.

## Установка на Mac OS

### Предоставление прав доступа

- `brew install watchman` - установка watchman + нужно предоставить права доступа для watchman
- `sudo chown -R 501:20 "/Users/evgenyleukhin/.npm"` - возможно потребуются дать права доступа к ~/.npm
- `sudo chown -R 501:20 "/Users/evgenyleukhin/.expo"` - возможно потребуются дать права доступа к ~/.expo

---

### Базовая сборка (create-expo-app)

Пакет create-expo-app установиться через npx автоматически, если его нет.

- `npx create-expo-app@latest your-app-name` - установка сборки React Native (в процессе установки могут всплывать окна о предоставлении прав доступа, нужно предоставить права)

---

### Java для Android

- Install Java for Android: `brew install --cask zulu@17`
- Get path to where cask was installed to double-click installer: `brew info --cask zulu@17`

---

### Возможные проблемы

- `sudo ...` - возможно потребуются права суперпользователя
- Предоставить права watchman (появиться в окне при первом запуске)
- Предоставить права терминалу открывать браузер (появиться в окне при первом запуске)
- Приложение watchman: Основные --> Объекты ввода --> Watchman --> On

---
---
---

### TypeScript 

- `npx create-expo-app@latest -t expo-template-blank-typescript` - ... c TypeScript - не работает hot-reload
- Кастомизация конфига TypeScript: `npx expo customize tsconfig.json`
- Создать файл-декоратор: `app.d.ts`

---

#### Поддержка web

Чтобы можно было запускать и разрабатывать веб-версию в браузере.

Нужно доустановить пакеты для web: `npx expo install react-native-web react-dom @expo/metro-runtime`

---

#### Tailwind CSS

[Docs - nativewind](https://www.nativewind.dev/quick-starts/expo)

- `yarn add nativewind` - установка nativewind (чтобы транспайлер понимал синтаксис и компилировал его)
- `yarn add -D tailwindcss` - установка tailwindcss
- `npx tailwind init` --> `tailwind.config.js` - конфиг
<!-- - Возможно потребуется установить пакет `nativewind`, если typescript будет ругаться на `tailwindcss`. -->


```js title="babel.config.js"
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ["nativewind/babel"],
  };
};
```

```js title="tailwind.config.js"
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Что делает tailwindcss - упрощение в написании css классов.

```tsx
import { StatusBar } from 'expo-status-bar';
import React from 'react';
- import { StyleSheet, Text, View } from 'react-native';
+ import { Text, View } from 'react-native';

export default function App() {
  return (
-   <View style={styles.container}>
+   <View className="flex-1 items-center justify-center bg-white">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

- const styles = StyleSheet.create({
-   container: {
-     flex: 1,
-     backgroundColor: '#fff',
-     alignItems: 'center',
-     justifyContent: 'center',
-   },
- });
```

---
---
---

## Старые варианты установок - сейчас уже deprecated

### 1 вариант: Запуск dev-сборки с помощью Expo Go Quickstart

Нельзя интегрировать нативный код

```bash
# with npm
npx create-expo-app AwesomeProject

cd AwesomeProject
npx expo start

# with yarn
yarn create expo-app AwesomeProject

cd AwesomeProject
yarn expo start
```

---

### 2 вариант: Запуск dev-сборки с помощью React Native CLI on MacOS

Можно интегрировать нативный код, более продвинутый вариант для опытных разработчиков, нужно писать конфиги.

```bash
# install dev tools
brew install node
brew install watchman

# install android environment
brew install --cask zulu@17

# Get path to where cask was installed to double-click installer
brew info --cask zulu@17
```

```bash
# install react-native cli
npm uninstall -g react-native-cli @react-native-community/cli

npx react-native@latest init AwesomeProject

npx react-native@X.XX.X init AwesomeProject --version X.XX.X
```

---

### 3 вариант: Expo CLI

[https://expo.dev/](https://expo.dev/) - Expo CLI docs

npm-пакет для экспортирования сборок на android и ios платформы.

```bash
# install
sudo npm install -g expo-cli

# uninstall
sudo npm uninstall -g expo-cli

# check it
expo
```

### Инициализация проекта by Expo CLI

```bash
# deprecated
expo init test-react-native;

❯   blank               a minimal app as clean as an empty canvas
    blank (TypeScript)  same as blank but with TypeScript configuration
    tabs (TypeScript)   several example screens and tabs using react-navigation and TypeScript
    ----- Bare workflow -----
    minimal             bare and minimal, just the essentials to get you started
```

---
