---
title: Basics
sidebar_position: 0
---

- [reactnative.dev](https://reactnative.dev/) - React Native docs.
- [EXPO](https://reactnative.dev/docs/environment-setup) - Expo install
- [EXPO](https://expo.dev/) - Expo docs.

- **React Native** использует обычный React, но без `react-dom`.
- **React** (without React Dom) + **React Native** (react-components --> mobile native components) --> **Mobile App**
- **React Native** что-то наподобие `react-dom` только не для браузеров, а для мобильных платформ.
- **React Native** это не обертка для web-приложения (как Electron), нельзя просто взять и обернууть web-приложение на React и создать мобильное приложение, для мобильных платформ нужно отдельно разрабатывать на **React Native**. Если уже есть web-приложение на React, то можно частично с него переиспользовать разметку и структуру компонентов, но в обратную сторону работает, то есть если вы сразу разарабатываете приложение на React Native, то можно сделать и web-версию тоже.

---

## React Native ui-component

```jsx
const App = props => {
  return (
    <View>
      <Text>Hello, World!</Text>
    </View>
  );
}

export default App;
```

Такой код ui-компонентов компилируется в нативный код мобильных платформ, не в js-код как в случае с обычным React.

![waterfall](/img/mobile/photo_2024-05-02_12-41-02.jpg)

---

## React Native logic

В отличие от ui-компонентов, логический код не компилируется в нативный, а преобразуется в js-код, который используется внутри приложения. Для того, чтобы мобилиная платформа понимала js, нужен так называемый **translation bridge**.

---

## Create new React Native project

### 1. Install Create Expo and react-native bolierplate

Пакет create-expo-app установиться через npx автоматически, если его нет.

- `npx create-expo-app@latest your-app-name` - установка сборки React Native

---

### Если нужен TypeScript

- `npx create-expo-app@latest -t expo-template-blank-typescript` - ... c TypeScript - не работает hot-reload
- Кастомизация конфига TypeScript: `npx expo customize tsconfig.json`
- Создать файл-декоратор: `app.d.ts`

---

### Tailwind CSS

- `yarn add tailwindcss` - установка
- `npx tailwind init` --> `tailwind.config.js` - конфиг
- Возможно потребуется установить пакет `nativewind`, если typescript будет ругаться на `tailwindcss`.

---

### Если нужет web

Нужно доустановить пакеты для web: `npx expo install react-native-web react-dom @expo/metro-runtime`

---

### 2. Expo scripts

```yarn start``` - запуск старта разработки, по умолчанию запускается в режиме `web`.

- `yarn android` - Запуск на Android Studio - нужны конфиги (сканировать QR-code)
- `yarn ios` - Запуск на XCode - нужны конфиги (сканировать QR-code)
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

### 3. Connect Android Studio to project

TODO

---

### 4. Connect XCode to project

TODO

---

### 3. Expo scripts



---
---
---
---
---
---
---


## Install

### 1 вариант: Запуск dev-сборки с помощью Expo Go Quickstart (recommended)

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

### 3 вариант: Expo CLI  --> deprecated

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

### Инициализация проекта by Expo CLI --> deprecated

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

## Create new project

```bash
sudo yarn create expo-app AwesomeProject

cd AwesomeProject
yarn expo start
```

## Языки программирования в мобильных платформах

- **Android**: Java, Kotlin --> Android Studio
- **iOS**: Objective-C, Swift --> XCode

---
