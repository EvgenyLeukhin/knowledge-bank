---
title: Установка
sidebar_position: 0
---

[Official Docs](https://redux-toolkit.js.org/)

## Install packages

- ```yarn add @reduxjs/toolkit react-redux``` - with yarn
- ```npm install @reduxjs/toolkit react-redux``` - with npm

### Отличия от классического redux:

- Не нужны acttion types
- Не нужны acttion creators для синхронных (нужны только для асинхронных экшенов)
- Не нужен ```redux-thunk``` и middleware (уже идет "из коробки")
- Не нужен ```redux-devtools``` (уже идет "из коробки")
- Может менять (мутировать) стейт, в отличие от классического, где всегда возвращается новый стейт

<img src="../../../../../img/frontend/redux-actions.png" width="400" alt="redux-actions.png" />

---

## Install template

- ```npx create-next-app --example with-redux my-app```

---

## redux-persist

Пакет для сохранения стора в localStorage. Нужно дополнительно комфигурировать.

- ```yarn add redux-persist``` - установка redux-persist
- ```npm install redux-persist``` - установка redux-persist


---

## State managment

Redux лучше понять на примере с банком. 

- **Банк** (store/state) - хранилище данных (состояние приложение, которое можно изменять экшенами)
- **Главный рьдьюсер** (root reducer) - Всё банковское ПО (точка входа всех отдельных рьдьюсеров). Всегда возвращает store
- **Рьдьюсеры** (reducer) - Набор связянных по смыслу экшенов
- **Actions** (actions) - Функции банковского ПО, которые могут менять state 
- **Диспетчер** (dispatch) - оператор Банковского ПО

<img src="../../../../../img/frontend/redux.png" width="400" alt="redux.png" />
<img src="../../../../../img/frontend/redux2.png" width="400" alt="redux2.png" />

В redux store иммутабильный (неизменяемый), при каких-либо изменениях в сторе будет возвращаться новый стор, старый будет удален.

Редукторы основаны на switch-case логике, где проверяется action type. По дефолту каждый редьюсер возвращает неизмененный state.
