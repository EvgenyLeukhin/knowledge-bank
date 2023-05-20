---
title: О React
sidebar_position: 0
---

[React official docs](https://ru.reactjs.org/) - ru.reactjs.org

Библиотека (18-я версия) использующая:

- Virtual DOM
- SPA. Смена роутов без перезагрузки страницы
- Жизненный цикл компонентов (Монтирование, размонтирование, получение новых данных)
- Модульность. Во внутрь компонента можно импортировать все что угодно
- ES6, jsx-шаблонизацию и синтаксический сахар

***

## Virtual DOM

DOM который генерируется JavaScript через ```createElemet()```, при обновлении данных или состояния перерисовывается не весь DOM как в статичном вебе, а только то, что обновилось, в этом главное премущество в отличие от Static DOM. 

***

## Компоненты

Компоненты - "кусочки" приложения. Компоненты позволяют реализовывать «атомарные» части пользовательского интерфейса один раз и независимо. Такой подход позволяет переиспользовать уже написанные ранее компоненты. В каждом компоненте можно реализовать свой интерфейс взаимодействия.

Компоненты могут быть сложными: состоящими из других компонентов, которые также атомарные. 
Этот подход применим не только к общей вёрстке, но и к: 

- JavaScript,
- CSS,
- HTML,
- интерфейсам взаимодействия.

---

## Пропсы (props)

Пропсы - каналы передачи данных между компоненнтами, любые js-данные

---

## SPA

**Одностраничные приложения** (Single Page Application, или SPA) — это не сайты-визитки. Всё намного сложнее. Это полноценное веб-приложение, в котором подгружается один index.html как каркас для всего проекта, а в дальнейшем с помощью JavaScript, AJAX, History API и других инструментов подставляются или заменяются на лету новые данные. То есть вёрсткой и стилями «лэндинга» дело не заканчивается.

На выходе получаем ровно такое же многофункциональное приложение как, например, интернет-магазин, форум или онлайн-кинотеатр. Но с одним большим отличием — не происходит перезагрузка для получения нового HTML-файла. Это значит, что тратится меньше трафика и времени, и как бонус в обе стороны не гоняются одни и те же данные. Дёшево и удобно.

SPA умеют переключаться между страницами без обновления, что для пользователя с большой вероятностью будет выглядеть как чистая магия. Не нужно ждать загрузки, сайт откликается мгновенно да и визуально выглядит как «будущее уже здесь». Это в свою очередь улучшает пользовательский опыт и повышает повторную посещаемость.

### Основные элементы, которые используют в SPA:

- шаблонизатор,
- History API,
- API бэкенда (общение через HTTP),
- сервисы для работы с MVC, MV*, MVVM архитектурами (написан ли сервис своими силами или использована готовая библиотека — неважно).

***

## Lifecycle

TODO

***

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

### CSS-модули

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

### Styled-component

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

***

Мой выбор - CSS/SCSS-модули + глобальные стили + точечная инлайн стилизация. Так как:

- jsx отдельно, стили отдельно (не загромождает код)
- лечге поддерживается, так как css имеет более привычный вид


***

### PostCSS

[Post CSS plugins](https://www.postcss.parts/)
