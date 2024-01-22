---
title: memo & callback
sidebar_position: 3
---

## Ре-рендер компонента

Возникает постоянно при обновлении props и state - это особенность React. C этим ререндером также будет перевычисляться вся логика, вложенная в компонент.

```jsx
const SomeComp = ({ prop1, prop2, prop3, prop4 }) => {
  const [state, setState] = useState('');

  // переменная a будет высчитываться при каждом ре-рендере - ПЛОХО
  const a = prop1 + 100;

  // функция b будет перевычисляется при каждом ререндере - ПЛОХО
  const b = () => {
    setState(`${prop2}` + 'lorem ipsum dolar');
  };

  return (
    <div>SomeComp</div>
  )
}
```

---

## useMemo и useCallback

- **Кэширование** и **оптимизация вычислений** при ререндерах. 
- Это своего рода ```useEffect()```, который возвращает значение или функцию. 
- В зависимостях указываются в основном или state или prop.
- ```useMemo``` для вычисляемых значений, ```useCallback``` для экшенов, эвентов.
- Если зависимость не изменилась, то сразу вернется результат вычислений предыдущего рендера и парсер не будет проходить по всем строчкам кода.
- Если есть тяжелые вычисления, то useMemo сэкономит производительность, для небольших вычислений и функций использовать не нужно.


```jsx
const SomeComp = ({ prop1, prop2, prop3, prop4 }) => {
  const [state, setState] = useState('');

  // переменная a будет высчитываться только при обновлении prop1 - ХОРОШО
  const a = useMemo(() => {
    return prop1 + 100;
  }, [prop1]);

  // функция b будет перевычисляется только при обновлении prop2 - ХОРОШО
  const b = useCallback(() => {
    setState(`${prop2}` + 'lorem ipsum dolar');
  }, [prop2]);

  // useMemo вместо useCallback (возврат функции)
  const b2 = useMemo(() => {
    return () => {
      setState(`${prop2}` + 'lorem ipsum dolar');
    }
  }, [prop2])

  return (
    <div>SomeComp</div>
  )
}
```

---

## React.memo

При изменении props или state будет перерисовано все дерево компонентов (перерендарятся все вложенные компоненты)

```jsx
// ПЛОХО - перерендер все вложенных компонентов
const SomeComp = ({ prop1, prop2, prop3 }) => {
  const [state, setState] = useState('');

  return (
    <>
      <Comp1 props={props} />
      <Comp2 props={props} />
      <Comp3 props={props} />
      <Comp4 props={props} />
      <Comp4 props={props} />
    </>
  )
}

export default SomeComp;
```

C помощью React.memo можно изменить это поведение.

```jsx
// ХОРОШО - перерендер будет только в тех компонентах, в которых обновились props
const SomeComp = ({ prop1, prop2, prop3 }) => {
  const [state, setState] = useState('');

  return (
    <>
      <Comp1 props={props} />
      <Comp2 props={props} />
      <Comp3 props={props} />
      <Comp4 props={props} />
      <Comp4 props={props} />
    </>
  )
}

export default React.memo(SomeComp);
```
