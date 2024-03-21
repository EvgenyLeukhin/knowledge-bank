---
title: Лучшие практики
sidebar_position: 1
---

## Atomic design-концепция:

- Все файлы проекта должны быть **строго сгруппированы и разделены по директориям**.
- Что-то большое должно **собираться из чего-то малого**.
- Если проект хорошо структурирован, то его просто изменять (добавлять новую страницу, логику, сделать адаптивность и т.д.)

***

## README.md:

- Стиль оформления кода и архитектура проекта **должны быть описаны в README.md**, включая базовые примеры использования различного функционала (как создавать новую страницу/компонент, как подключать стор, как создавать новый стор, как делать запрос и т.д.).
- **Примеры взаимодействия** с API также должны быть описаны в README.md.
- В идеале, если новый разработчик приходит на проект, он **должен получить все необходимые сведения, прочитав README.md**.

***

## CodeStyle:

- Соблюдать **единство стиля** офрмления кода и архитектуры проекта.
- **Чем меньше кода - тем лучше**. (Хороший код - это код, которого нет).
- **Читаемый код** лучше минималистичного.
- В проекте **не должно быть большого количества абстракций**, код должен быть хорошо воспринимаемым. Кол-во абстракций нужно сводить к минимуму!.
- **Стараться не мутировать данные**, ухудшается читаемость кода.
- Статичные данные **выносить в отдельные файлы**.
- В идеале, код должен быть **простым и понятным** (KISS-концепция). Понятные проекты хорошо масштабируются. Все гениальное - простое, сложное должно быть обосновано.
- Повторяющиеся блоки нужно **выносить в отдельные общие переиспользуемые компоненты** (DRY-концепция).
- В идеале, файл компонента должен **размещаться на экране IDE без скрола**.
- **"Не изобретать велосипед!"** для каких-либо сложных реализаций, а можно использовать готовые библиотеки (все уже давно написано почти на все случаи жизни). С другой стороны, если какая-то библиотека используется в проекте один раз для чего-то одного, то нужно задуматься о её целесообразности.
- **TypeScript должен быть простым и понятным**, он должен помогать, а не усложнять, не нужно в нем использовать какие-то сложные непонятные конструкции, типов и интерфейсов достаточно.
- **Еcли много условий**, то лучше их инкапсулировать в отдельную переменную.
- **Избегать излишней вложенности**. Если есть возможность что-ниб вынести в отдельный блок - то лучше выносить.
- Использование **линтеров, форматеров, тестеров и прекоммитеров** (ESLint, Stylelint, prettier) должно помогать, а не мешать разработке.
- Если рефакторинг и оптимизация кода добавляет абстракций и ухудшает читаемость, то **такой рефакторинг плохой** (излишняя оптимизация и оверинжениринг).

***

## React:

- **Целая портянка пропсов - это плохо!!!** И потом такое трудно поддерживать (такие компоненты нужно декомпозировать, добавлять в директорию parts/).
- Файлы отдельных роутов (страниц) или объемных компонентов всегда **должны быть hoc-компонентами**, в которые уже импортятся под-компонеты этой страницы из components/pages/pageName.
- **Не вмешивать большое количество инлайн-стилей** в логику компонента, лучше использовать css-классы
- Использовать **только функциональные компоненты** (не использовать классовые вообще, классы - для мазохистов).
- Самая сложная часть React-проектов - это **взаимодействие с API, асинхронность, формы и обработка данных**. К этой части проекта нужно относиться более тщательно.
- UI-элементы не должны сильно отличаться на разных страницах (цвет, отступы, размеры и т.д.)
- Нужно стараться **отделять логику от представления**. Логику лучше использовать в hoc-компонетах, а дальше передавать ее под-компонентам (view-компоненты) через пропсы.
- Стейт не должен имееть глубокой вложенности, лучше чтобы все изменяемые поля были на одном уровне
- Вcтавку токена лучше делать через интерцептор axios, чем просто вставлять из куков или localStorage, так как могут быть проблемы
- Не нужно разводить "целый зоопарк" npm-пакетов, наличие того или иного пакета должно быть обосновано.
- Тот, кто знает как приложение взаимодействует с API, тот знает само приложение.
- Дополнительные обертки компонентов при экспорте - ПЛОХО, читаемость сильно ухудшается
- Если нужно мутировать данные, полученные от сервера, то нужно это делать еще до рендера в компоненты, например в redux-thunk, добавить на этом этапе кастомные поля, чтобы их можно было потом легко мапить в компоненте
- Не должно быть одинаковых пробежек циклами .map() одних и тех же массивов в одном месте. Цикл - это "тяжелая операция".
- Деструктуризация должна быть оправдана частым использованием, так как создаются отдельные переменные
- Перед includes() нужно делать проверку на проверяемое значение
- Если смотрим незнакомый компонент, то сначала нужно посмотреть зависимости и хуки, а потом логику

```tsx
// ПЛОХО
export default connect((state: RootState) => ({
  players: state.room.players,
}))(PersonsContainer);
```

---
## Мапинг

### Обычный мапинг

- Все функции-обработчики нужно выносить за пределы основного return компонента, чтобы такая функция не создавалась на каждый перерендер.
- Массивы данных также должны быть за пределами компонента, чтобы не было постоянных инициализаций.

```tsx
// отдельный файл navLinks.ts
const navLinks: INavigationLink[] = [ link1, link2, ... ];
```

```tsx
const checkForPermission = (permission?: EPermission[]):boolean => {
    if (permission) {
        return !!haveAccess(permission);
    }

    return !permission;
}

// подсвечиваем ссылку (зеленым цветом), если у пользователя есть все права (И/И) из isAllowed
// если в поле permission ничего не указано, то также подсвечиваем ссылку
const checkForAllowed = (permission?: EPermission[]):boolean => {
    if (permission) {
        return permission.every(permission => haveAccess(permission));
    }

    return true;
}

return (
  {navLinks.map(navLink => {
    const { path, tooltipText, className, isAllowed, permission, name }  = navLink;
    const isHasPermission = checkForPermission(permission);
    const isHasAllowed = checkForAllowed(isAllowed);

    if (isHasPermission) {
        return (
            <NavLinkWithHash
                to={path[0]}
                title={tooltipText}
                data-testid={`nav-${className}`}
                className={
                    CN(styles.item, styles[className],
                        {
                            [styles.active]: path.includes(url),
                            'allowed': isHasAllowed,
                        }
                    )
                }
            >
                <span>{name}</span>
            </NavLinkWithHash>
        );
    }
  })}
)
```

### Шорткат

При мапинге можно использовать сокращенную запись и после => в () вставлять условия и с помощью && рендерить jsx. Но у обычного мапинга лучшая читаемость.

```tsx
[item1, item2, ...].map(item => (item.id > 0) && <li key={item.id}>{item.name}</li>)
```

Пример

```tsx
{navLinks.map(navLink => ((navLink.permission && haveAccess(navLink.permission)) || !navLink.permission) &&
  <NavLinkWithHash
      to={navLink.path[0]}
      title={navLink.tooltipText}
      data-testid={`nav-${navLink.className}`}
      className={
          CN(styles.item, styles[navLink.className],
              {
                  [styles.active]: navLink.path.includes(url),//showActive(),
                  'allowed': isAllowed(navLink.isAllowed),
              }
          )
      }
)}
```

### Пример цепочки шорткатов

```tsx
const { hubs } = useSelector((state: TStore) => ({
    hubs: state.hubs.hubs.filter(hub => { 
        return state.auth.hubIds?.includes(hub.id) && (!!hub.timezone && !!hub.timeFrom && !!hub.timeTo);
    })
    .map(({ name, id, code }) => ({
        name: code ? `${name} (${code})` : name,
        value: id,
    })).sort((a, b) => a.name.localeCompare(b.name))
}));
```

### Spread и мапинг

```ts
options={
    [
        // опция "Без Хаба"
        ...(selectedRegions.length === 0
            ? [{
                value: WITHOUT_HUB.id,
                name: WITHOUT_HUB.name,
            }]
            : []
        ),

        // список хабов
        ...hubs.map(hub => ({ 
            value: hub.id, 
            name: hub.code ? `${hub.name} (${hub.code})` : hub.name,
        }))
    ].sort((a, b) => +a.value - +b.value)
}
```

## Плохие и хорошие примеры

Требуется найти наличие доступа haveAccess() по правам (permission)

```ts
// плохо
// 1- EPermission[][] - массив массивов
// 2 !permission || permission.reduce<boolean> - лучше в отдельной переменной
// 3 (t, c) => t && !!haveAccess(c), true - нечитаемый код

const isAllowed = (permission?: EPermission[][]): boolean => !permission || permission.reduce<boolean>(
    (t, c) => t && !!haveAccess(c), true
);

// хорошо
// 1 - используем одинарный массив permission
// 2 - понятное условие
// 3 - используем every вместо reduce
const checkForAllowed = (permission?: EPermission[]):boolean => {
    if (permission) {
        return permission.every(permission => haveAccess(permission));
    }

    return true;
}
```