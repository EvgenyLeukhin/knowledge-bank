---
title: try-catch
sidebar_position: 5
---

## try, catch и finally

`try` выполняет код. `catch` получает исключение из этого блока. `finally` выполняется в обоих случаях: и после успеха, и после `catch`.

[try...catch](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/try...catch)

```js
try {
  const data = JSON.parse(text);
  console.log(data);
} catch (error) {
  console.log(error.message);
} finally {
  console.log('finished');
}
```

У объекта ошибки обычно есть `name`, `message` и `stack`. Бросать лучше `new Error('текст')`, а не строку: у строки этих полей нет.

[Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)

### await

`try/catch` ловит отказ промиса только там, где перед ним стоит `await`. Промис без `await` отклоняется уже после блока, и `catch` его не видит.

```js
const loadPlanet = async () => {
  try {
    const res = await fetch('https://swapi.dev/api/planets/1');

    if (!res.ok) {
      throw new Error(String(res.status));
    }

    return await res.json();
  } catch (error) {
    console.log(error.message);
    return null;
  } finally {
    console.log('finished');
  }
};
```

Так ошибка наружу не попадёт:

```js
try {
  fetch(url).then(res => res.json());
} catch (error) {
  console.log(error);
}
```

Для цепочки без `await` нужен `.catch()`. Отказ внутри `setTimeout` и других колбэков этот `try` тоже не поймает: колбэк выполнится позже.

### Проброс дальше

`catch` останавливает ошибку. Чтобы её увидел внешний код, её бросают снова.

```js
const loadPlanet = async () => {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
```

Если сам объект ошибки не нужен, скобки можно не писать: `catch { ... }`.

### return в finally

`return` из `finally` подменяет результат `try` и `catch`. Из-за этого ошибка тоже пропадает.

```js
const load = () => {
  try {
    return 1;
  } finally {
    return 2;
  }
};

load(); // 2
```
