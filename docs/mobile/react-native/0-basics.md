---
title: Basics
sidebar_position: 0
---

**React** (without React Dom) + **React Native** (react-components --> mobile native components) --> **Mobile App**

**React Native** что-то наподобие React Dom только не для браузеров, а для мобильных платформ.

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

Такой код компилируется в нативный код мобильных платформ, не в js-код как в случае с обычным React.
