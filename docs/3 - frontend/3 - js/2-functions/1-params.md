---
title: Параметры +
sidebar_position: 1
---

## Параметры и аргументы функции

- **Параметры** — это имена переменных в объявлении функции.
- **Аргументы** — это реальные значения, которые мы передаём при вызове.
- Используйте говорящие имена в названиях параметров: `amount`, `currency`, `options`, `callback`.
- Параметров не должно быть слишком много (1-3 достаточно), если больше, то лучше объединять их в объект

```js
function greet(name) {
  // name — параметр
  console.log('Hi, ' + name);
}
greet('Alex'); // 'Alex' — аргумент
```

---

## Передача пустых параметров

Если параметры не передаются, то будет `undefined`.

```js
const showName = (firstName, lastName) => {
  const fullName = `${firstName} ${lastName}`;

  console.log(`Fullname is ${fullName}`);
};

// вызов без параметров
showName(); // 'Fullname is undefined undefined'

// вызов с одним параметром
showName('John'); // 'Fullname is John undefined'

// вызов с друмя параметрами
showName('John', 'Smith'); // 'Fullname is John Smith'
```

---

## Параметры по умолчанию

Если параметры не передаются, то будут подставлены параметры по умолчанию.

```js
const showName = (firstName = 'Unknown', lastName = 'Unknown') => {
  const fullName = `${firstName} ${lastName}`;

  console.log(`Fullname is ${fullName}`);
};

// вызов без параметров
showName(); // 'Fullname is Unknown Unknown'

// вызов с одним параметром
showName('John'); // 'Fullname is John Unknown'
showName('John', undefined); // 'Fullname is John Unknown'

showName('John', null); // 'Fullname is John null'

// вызов с друмя параметрами
showName('John', 'Smith'); // 'Fullname is John Smith'
```

---

## Rest-параметр

Применяется тогда, когда мы заранее не знаем сколько может быть передано параметров.

Допустим, нужно создать функцию, котороя будет считать сумму всех переданных параметов.

### Все параментры

```js
const calcSumm = (...args) => {
  return args.reduce((total, item) => {
    if (typeof item === 'number') {
      total = total + item; // total += item;
    }

    return total;
  }, 0);
};

calcSumm(1, 2, 3, 4, 5, 'asdfasdf', null, []); // 15
```

---

### Остальные параметры

Можно обрабатывать конкретные параметры в месте со всеми остальными, все остальные параметры описываются как `...rest` и ставятся СТРОГО В КОНЦЕ списка параметроа.

```js
const showPersonData = (firstName, lastName, ...rest) => {
  const person = {
    firstName,
    lastName,
    rest,
  };

  return person;
};

showPersonData('John', 'Smith', 35, 'New York City', { alive: true });

// {
//   firstName: 'John',
//   lastName: 'Smith',
//   rest: [ 35, 'New York City', { alive: true } ]
// }
```
