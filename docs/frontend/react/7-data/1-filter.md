---
title: filter()
sidebar_position: 1
---

# Фильтрация массива

Возвращает отфильтрованный массив, фильтру нужно условие если оно вернет true, то элемент проходит, если false, то нет.

## Сравнение массивов

Есть два однотипных массива объектов, первый - полный исходный, второй часть от первого. 
Задача: нужно получить третий массив, который является разницей общего и второго.

```js
const fullArray = [{...}, {...}, {...},{...},{...},{...}, ];
const partOfFullArray = [{...}, {...}, {...},];

const anotherPartOfFullArray = fullArray - partOfFullArray; /// ???
```

```js
// делаем фильтрацию полного массива
const anotherPartOfFullArray = fullArray.filter((itemOfFull, index) => {
  // на каждую итерацию проверяем есть ли этот элемент в полном массиве, если есть то вернется этот объект, если нет, то undefined
  const matchedElement = partOfFullArray.find(itemOfPart => itemOfPart.id === itemOfFull.id);

  // совпаденный объект - будет false, а undefined превратиться в true
  return !Boolean(matchedElement);
});
```
