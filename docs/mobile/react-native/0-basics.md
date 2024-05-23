---
title: Basics
sidebar_position: 0
---

[reactnative.dev](https://reactnative.dev/) - Official docs.

- **React Native** использует обычный React, но без `react-dom`.
- **React** (without React Dom) + **React Native** (react-components --> mobile native components) --> **Mobile App**
- **React Native** что-то наподобие `react-dom` только не для браузеров, а для мобильных платформ.
- **React Native** это не обертка для web-приложения (как Electron), нельзя просто взять и обернууть web-приложение на React и создать мобильное приложение, для мобильных платформ нужно отдельно разрабатывать на **React Native**. Если уже есть web-приложение на React, то можно частично с него переиспользовать разметку и структуру компонентов. 

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

## Языки программирования в мобильных платформах

- **Android**: Java, Kotlin --> Android Studio
- **iOS**: Objective-C, Swift --> XCode

---

## Create new React Native project

TODO

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
