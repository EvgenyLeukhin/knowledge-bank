---
title: Компоненты ✓
sidebar_position: 1
---

## Пример функционального компонента

```tsx
import { FC, useState } from 'react';
import styles from './SomeComponent.module.scss';

type TProps = {
  title: string;
  action: () => void;
}

// запись через функцию
// function SomeComponent({ title, action }: TProps) {

// типизация через типизацию объекта пропсов
// const SomeComponent = ({ title, action }: TProps) => {

// типизация через дженерик реакт функ. компонента
const SomeComponent: FC<TProps> = ({ title, action }) => {
  // вызов хука useState
  const [count, setCount] = useState<number>(0);

  const someLocalAction = () => {
    console.log('Do something');
  }

  return (
    <div className={styles.SomeComponent}>
      <h2>{title}</h2>

      <span>{count}</span>

      <button onClick={() => setCount(count + 1)}>+1</button>

      <button onClick={() => action()}>Click me</button>

      <button onClick={someLocalAction}>Click me</button>
    </div>
  )
}

export default SomeComponent;
```

---

## Props

В props можно передавать любой тип данных и другие компоненты.

```tsx
// nипизация пропсов
type TProps = {
  prop1: number;
  prop2: string;
  prop3: boolean;
  prop4: TSomeObj;
  prop5: TSomeObj[];
  prop6: (val: TSomeObj) => void;
  prop7?: ReactElement<any, any>; // реакт-компонент как property
}

...

<SomeComponent 
  prop1={10}
  prop2="Some string"
  prop3={true}
  prop4={{ name: 'John Smith', age: 35 }}
  prop5={[{ name: 'John Smith1', age: 35 }, { name: 'John Smith2', age: 35 }, { name: 'John Smith3', age: 35 }]}
  prop6={setState}
  prop7={
    <div>
      <p>Some Layout</p>
    </div>
  }
>

```

---

## Стилизация

### Аттрибут style

Можно использовать инлайн-стили для точечной стилизации и для стилизации при каких-либо триггерах.

```jsx
// inline styles
<div style={{ color: 'white', background: 'blue' }} />

...

// styles object
const styles = {
  color: 'white', 
  background: 'blue',
}

<div style={styles} />
```

***

### Глобальные стили

Old-school aproach. Можно использовать только для каких-либо повторяющихся классов, которые будут доступны глобально.

```jsx
import './global.css';

...

<div className="some-global-class" />
```

***

### CSS/SCSS-модули 👍

В крупном проекте такие пересечения стилей получится отловить только случайно — когда они приведут к ошибкам оформления. Хорошо, если ошибка вскроется при тестировании. Хуже, когда она найдётся в продакшне.

Проблему решают CSS-модули. Эта неофициальная спецификация делает классы и другие имена уникальными и задаёт локальные пространства имён. Всё это происходит на этапе сборки проекта.

В CSS-модулях стили становятся JS-объектами, из которых компоненты получают свои имена:

```css
.button {}
```

```jsx
import buttonStyles from './button.css';

element.innerHTML = `<div class="${buttonStyles.button} ${buttonStyles.red}" ...`;
```

#### Применение

```jsx
import styles from './Button.module.css';
...
<button className={styles.Button} />
```

В результате класс получит уникальное имя:

```jsx
<div class="button-213ge1hw ...">
    ...
</button>
```

***

### JSS - css in js

```yarn add react-jss```

[cssinjs.org](https://cssinjs.org/?v=v10.3.0)

```jsx
import React from 'react'
import {render} from 'react-dom'
import {createUseStyles} from 'react-jss'

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
const useStyles = createUseStyles({
  myButton: {
    color: 'green',
    margin: {
      // jss-plugin-expand gives more readable syntax
      top: 5, // jss-plugin-default-unit makes this 5px
      right: 0,
      bottom: 0,
      left: '1rem'
    },
    '& span': {
      // jss-plugin-nested applies this to a child span
      fontWeight: 'bold' // jss-plugin-camel-case turns this into 'font-weight'
    }
  },
  myLabel: {
    fontStyle: 'italic'
  }
})

// Define the component using these styles and pass it the 'classes' prop.
// Use this to assign scoped class names.
const Button = ({children}) => {
  const classes = useStyles()
  return (
    <button className={classes.myButton}>
      <span className={classes.myLabel}>{children}</span>
    </button>
  )
}

const App = () => <Button>Submit</Button>

render(<App />, document.getElementById('root'))
```

***

### Styled-component 👎

```yarn add styled-components```

[styled-components](https://styled-components.com/)

Стилевые обертки для компонентов. Можно стилизовать через props.

```jsx
// стили и разметка компонента <Button />
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

// стили компонента <Container />
const Container = styled.div`
  text-align: center;
`

render(
  <Container>
    <Button>Normal Button</Button>
    <Button primary>Primary Button</Button>
  </Container>
); 
```

---

### PostCSS

[Post CSS plugins](https://www.postcss.parts/)
