---
title: Запросы и асинхронность +--
sidebar_position: 10
---

## fetch 

---

## axios

---

## async-await

---

## try catch

---

## Promise

---

## Множественные запросы

---

## Debounce

Задержка события на определенное количество времени.  После задержки (delay), выполниться callback.

```useDebounce()```

---
## Throttling

```useThrottle()```

---

## Lazy loading 

```tsx
const LazyComp1 = React.lazy(() => import('./Component1'));
const LazyComp2 = React.lazy(() => import('./Component2'));
```

Images, fonts, libs, components, reducers, 

---

## Пример шаблонизации результатов поиска, нативная обработка формы

```html
<section class="search">
  <form class="search__form">
    <input type="text" name="title" class="search__textfield" placeholder="Искать в GitHub" id="search" />
    <button type="submit" class="search__button">
      Найти
    </button>
  </form>
  <div class="search__result">
    <h2 class="search__findings">
    </h2>
    <ul class="search__findings-list">
    </ul>
  </div>
  <div class="search__error">
  </div>
</section>
```


```js
const form = document.querySelector('.search__form');
const resultsContainer = document.querySelector('.search__findings-list');
const countContainer = document.querySelector('.search__findings');
const errorContainer = document.querySelector('.search__error');
const input = document.getElementById('search');

// Вставка ошибки
const renderError = () => {
  errorContainer.innerHTML = `
        <img src="https://code.s3.yandex.net/web-code/entrance-test/search.svg" alt="" class="search__error-icon" />
        <p class="search__error-message">
            Произошла ошибка...
        </p>
  `;
  countContainer.innerHTML = '';
};

// Нет результатов
const renderEmptyResults = () => {
  errorContainer.innerHTML = `
        <img src="https://code.s3.yandex.net/web-code/entrance-test/search.svg" alt="" class="search__error-icon" />
        <p class="search__error-message">
            По вашему запросу ничего не найдено, попробуйте уточнить запрос
        </p>
  `;
  countContainer.innerHTML = '';
};

// Вставка кол-ва
const renderCount = count => {
  countContainer.innerHTML = `
      Найдено <span class="search__findings-amount">${count.toLocaleString(
        'ru-RU'
      )}</span> результатов
  `;
};

// Очистка
const onSubmitStart = () => {
  countContainer.innerHTML = `Загрузка...`;
  resultsContainer.innerHTML = '';
  errorContainer.innerHTML = '';
};


// Найденные результаты
function template(item) {
  const newElement = document.createElement('li');
  newElement.classList.add('search__finding-item');
  newElement.innerHTML = `
    <p class="search__finding-name">
      ${item.full_name}
    </p>
	`;
  return newElement;
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  onSubmit(event)
})

async function onSubmit(event) {
  // ваш код
  event.preventDefault();
  onSubmitStart()

  await fetch(`https://api.nomoreparties.co/github-search?q=${input.value}`)
    .then(res => res.json())
    .then(data => {
      console.log('data: ', data);

      if (data.items.length) {
        // вставка count
        renderCount(data.total_count);

        // вставка результатов
        data.items.forEach(el => {
          resultsContainer.appendChild(template(el));
        });
      } else {
        renderEmptyResults();
      }
    })

    // error
    .catch(error => {
      console.log('error: ', error);
      renderError();
    })
}
```
