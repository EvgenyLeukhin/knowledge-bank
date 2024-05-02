---
title: Basics
sidebar_position: 0
---

[reactnative.dev](https://reactnative.dev/) - Official docs

**React** (without React Dom) + **React Native** (react-components --> mobile native components) --> **Mobile App**

**React Native** что-то наподобие React Dom только не для браузеров, а для мобильных платформ.

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

```jsx

```

---

## Языки программирования

- **Android**: Java, Kotlin --> Android Studio
- **iOS**: Objective-C, Swift --> XCode
