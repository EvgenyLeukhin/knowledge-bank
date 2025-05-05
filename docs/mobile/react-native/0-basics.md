---
title: Basics
sidebar_position: 0
---

[reactnative.dev](https://reactnative.dev/) - React Native docs.

- **React Native** использует обычный технологии обычного React, но без `react-dom` (нужен для web).
- **React** (without React Dom) + **React Native** (react-components --> mobile native components) --> **Mobile App**
- **React Native** что-то наподобие `react-dom` только не для браузеров, а для мобильных платформ.
- **React Native** это не обертка для web-приложения (как Electron), нельзя просто взять и обернуть web-приложение на React и создать мобильное приложение, для мобильных платформ нужно отдельно разрабатывать на **React Native**. Если уже есть web-приложение на React, то можно частично с него переиспользовать разметку, логики и структуру компонентов.

Но работает в обратную сторону (хотя это не супер-практика), то есть если вы сразу разарабатываете приложение на React Native, то можно сделать и web-версию тоже.

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
