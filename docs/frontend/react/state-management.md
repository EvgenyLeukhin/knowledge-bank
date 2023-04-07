---
title: State-management ---
sidebar_position: 6
---

## MobX

TODO

***

## Context

TODO - useContext()-хук

***

## Redux classic

Redux лучше понять на примере с банком. 

- **Банк** (store/state) - хранилище данных (состояние приложение, которое можно изменять экшенами)
- **Главный рьдьюсер** (root reducer) - Всё банковское ПО (точка входа всех отдельных рьдьюсеров). Всегда возвращает store
- **Рьдьюсеры** (reducer) - Набор связянных по смыслу экшенов
- **Actions** (actions) - Функции банковского ПО, которые могут менять state 
- **Диспетчер** (dispatch) - оператор Банковского ПО

<img src="../../../../img/frontend/redux.png" width="400" alt="redux.png" />
<img src="../../../../img/frontend/redux2.png" width="400" alt="redux2.png" />

В redux store иммутабильный (неизменяемый), при каких-либо изменениях в сторе будет возвращаться новый стор, старый будет удален.

Редукторы основаны на switch-case логике, где проверяется action type. По дефолту каждый редьюсер возвращает неизмененный state.

### Install redux

`yarn add redux react-redux`

***
## Redux toolkit
### Install redux-toolkit

`yarn add @reduxjs/toolkit react-redux`

***

